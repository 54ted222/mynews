---
title: Fluid Compute：讓 Serverless 不再為 idle 付錢
order: 2
date: 2026-04-21
summary: 從 Lambda 的 per-invocation 走到 concurrent-per-instance，Fluid Compute 怎麼把「等 I/O 的時間」從帳單裡挖掉，AI 工作負載因此省下 90%。
---

# Fluid Compute：讓 Serverless 不再為 idle 付錢

## TL;DR

- Fluid Compute 的核心不是「更快的冷啟」，而是**把「一個 VM 服務一個請求」改成「一個 VM 同時服務多個請求」**——Vercel CTO Malte Ubl 在 HN 的原話：「Lambda reserves the entire VM to handle a request end to end. Fluid can use a VM for multiple concurrent requests」。
- 2025-06-25 GA 的 Active CPU 計費（$0.128/CPU-hr + $0.0106/GB-hr）把 idle 的 I/O 時間從 CPU 帳單裡扣掉，LLM/agent 類 I/O-bound 工作負載官方宣稱再省 90%（截至 2025-07）。
- 代價是架構不再是你熟悉的 Lambda：module-level 可變狀態變成 race condition、CPU-bound 工作負載在高併發下會互搶、WebSocket 還是不支援。用錯場景會比舊模型更痛。

## 傳統 Lambda 帳單為什麼不合理

AWS Lambda 的計費模型是 wall-clock time × memory。一個 Next.js route handler 呼叫 OpenAI API 要 8 秒，其中 7.9 秒是在等 TLS/TCP/token stream 回來——Lambda 照收那 7.9 秒的錢，因為 microVM 被整個鎖住，一個 VM 同時只能處理一個 invocation。

這在 2015 年的「短執行、CPU-bound 圖片縮圖」場景可以接受，但現代 SaaS 的 backend 幾乎不再長這樣。看 Vercel 自己給的數字（截至 2025-07，來源 fluid-how-we-built-serverless-servers）：平台每週跑 45 billion+ 個 Fluid Compute 請求，AI 類工作負載的 CPU active ratio 低到個位數百分比——剩下 90%+ 都是在等上游模型、向量庫、第三方 API。

用舊模型算這筆帳，等於幫 OpenAI 的延遲買單。

## Fluid 的三個技術決策

Fluid Compute 不是調了幾個參數就宣布新名字的行銷。2025-07-28 那篇 how-we-built blog 講得比較硬：

**(1) TCP tunnel 取代 request/response。** Lambda 原生的 event-response 模型是一次性 blob，沒辦法支援 streaming。Vercel 寫了自家的 TCP 協定，把回應拆成 `ResponseStarted` / `ResponseBody` / `ResponseEnd` 三種 packet 沿既有連線串回來。這讓 Next.js 的 streaming SSR、AI SDK 的 token streaming 不用再把整坨 response buffer 起來。

**(2) compute-resolver：類 DNS 的 instance 解析層。** 跨 19 個 region 追蹤哪些 pod 已經有到目標 function 的 TCP connection，尖峰 >100K RPS、p99.99 sub-millisecond。結果是 **99%+ 的請求被路由到既有 instance**——不是「複用溫暖的 VM」，而是壓根沒開新的 VM。這才是 0.6% 以下冷啟率（Vercel 2025-09 宣稱 99.37% 請求 zero cold start）的真正來源。

**(3) Rust core 當 glue。** 每個使用者 process 前面有一顆 Rust 寫的 sidecar，負責把 HTTP ↔ TCP 協定互譯，同時監控 CPU / memory / event loop / file descriptor，在 instance 吃不下時直接 `nack` 回去讓 resolver 改路由。這顆才是 in-function concurrency 能安全開的前提——沒有它，你就只能盲信「應該還有餘力」。

順帶一提，這三件事都要改 runtime。Fluid Compute 目前只支援 Node.js、Python、Edge、Bun、Rust；**不支援任意 Docker container**，這是它跟 Lambda 的本質差異，也是它能做這些事的原因。

## 為什麼 AI 工作負載特別受益

把計費拆成 **Active CPU**（只算真的在跑 JS 的 CPU 時間）+ **Provisioned Memory**（從第一個 request 進來到最後一個結束持續算）之後，I/O-bound 工作負載的帳單結構變成這樣：

| 工作類型 | CPU active | 舊 Lambda 帳單 | Fluid Active CPU 帳單 |
|---|---|---|---|
| 圖片縮圖 | ~100% | 全額 | 幾乎全額（CPU 真的在跑） |
| SSR + DB 查詢 | ~20% | 全額 | CPU 只收 20% |
| LLM agent 呼叫 | <5% | 全額 | CPU 只收 5%，省掉等 token 的錢 |

Vercel changelog 給的實例（截至 2025-06）：Standard 機型 100% active CPU 從 $0.31842/hr 降到 ~$0.149/hr，約 53% 折扣；**但這是 CPU 跑滿的情境**。AI agent 那種 CPU active <5% 的工作，再乘上 in-function concurrency（一個 instance 同時吃數十個請求共用 memory 帳單），官方說的「再省 90%」才講得通。

用 Railway 2025-10 的第三方 benchmark 看 end-to-end 表現：Next.js SSR Fluid 平均 0.534s vs Cloudflare Workers 1.895s（3.55x），p-max variability Fluid 1.098s vs Cloudflare 3.171s。Vercel 自家測的，但數字公開可重跑。

## 邊界：什麼時候你不該開 Fluid

Fluid 不是沒成本的升級，HN thread 43067938 把話講清楚：

**(a) CPU-bound 工作負載可能更貴、更慢。** 圖片處理、影片轉碼、ZK 證明這類 CPU 跑滿的情境，in-function concurrency 會讓多個請求互搶 CPU，p95 latency 反而惡化——而且 Active CPU 是按 CPU 時間乘 vCPU 數計費，高併發 CPU 工作會被多算。要嘛把 `maxRequestsPerInstance` 調回 1，要嘛別用 Fluid。

**(b) Module-level 可變狀態瞬間變成 race condition。** 以前靠 Lambda 的 1:1 isolation 蓋住的 bug——全域變數、module-level cache、單例 client state——在 Fluid 下同一個 process 裡會被多個 request 併發讀寫。Vercel 自己 docs 強調這點：connection pool 這類不可變共享資源是好事，但任何可變 state 都要重新審視。這不是 Fluid 的 bug，是舊 code 的 smell 被曝光。

**(c) WebSocket 還是不支援。** Fluid 做到了 streaming response，但持久化雙向連線不行——函式還是會在請求鏈結束後被暫停。社群 2025 討論（community.vercel.com/t/27205）的結論沒變：要 real-time 就接 Ably / Pusher / Rivet。

**(d) 冷啟還是存在。** Vercel 的 99.37% zero-cold-start 是平台平均；新 region、新 deployment、14 天沒流量的 Pro production、bytecode caching 也只在 production 生效（preview/dev 沒有），這些情況還是會吃到初始化延遲。

---

## 來源

- [Fluid: how we built serverless servers — Vercel Blog, 2025-07-28](https://vercel.com/blog/fluid-how-we-built-serverless-servers)
- [Introducing Active CPU pricing for Fluid compute — Vercel Blog, 2025-06-25](https://vercel.com/blog/introducing-active-cpu-pricing-for-fluid-compute)
- [Fluid compute docs — pricing, regions, precedence](https://vercel.com/docs/fluid-compute)
- [Vercel Fluid Compute — Hacker News 43067938 討論串](https://news.ycombinator.com/item?id=43067938)
