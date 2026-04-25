---
title: $0 到 $50/月：indie SaaS 在 Cloudflare 上的真實成本曲線
order: 5
date: 2026-04-26
summary: 拆解 free tier 撐到 demo、$5 撐到第一批付費用戶、什麼觸發 $20–50；對比 Vercel / Supabase 的曲線。
keywords: Cloudflare 成本, indie SaaS 月費, Workers Paid plan, R2 egress, D1 pricing, Workers AI neurons, Vercel Pro, Supabase Pro, edge runtime 月帳單, $5 SaaS stack
---

# $0 到 $50/月：indie SaaS 在 Cloudflare 上的真實成本曲線

## TL;DR

- **$0 階段**：Workers[^workers] Free（100K req/day）、R2[^r2]（10GB）、D1[^d1]（5GB）、Workers AI[^workers-ai]（10K Neurons[^neuron]/day）合起來足以把一個 demo 站撐到 1,000 註冊使用者，前提是不踩 KV[^kv] write 與 CPU-ms[^cpu-ms] 的雷。
- **$5 階段**：升 Workers Paid 的那一刻就解鎖 KV / Hyperdrive[^hyperdrive] / Durable Objects[^durable-objects] / D1 全部進入「包月模式」——10M req、30M CPU-ms、25B D1 reads、1M DO req 全部包進來，1,000 DAU[^dau] 等級的 SaaS 普遍只多花 $0–3 超量。
- **$20–50 階段**：真正會把月費頂上來的不是「使用者多」，而是三件事——大量 Workers AI 推理、用 Stream[^stream] 跑使用者觀看的影片、或 Class A operations[^class-a] 失控（每筆寫入算一次）。對比起來，Vercel[^vercel] Pro 是 $20 起跳但破 1TB 後一個 GB 收 $0.40；Supabase[^supabase] Pro 是 $25 起跳，DB egress[^egress] 50GB 後 $0.09/GB——曲線上升得比 Cloudflare 快很多。

## $0 階段：你能用免費 tier 走多遠

把官方數字攤開來，2026 年 4 月的 Cloudflare 免費額度長這樣：

| 產品 | 免費額度（每月，除非另註） |
|---|---|
| Workers | 100,000 requests/day、10ms CPU/invocation |
| Workers KV | 100,000 reads/day、1,000 writes/day |
| D1 | 5M reads + 100K writes + 5GB storage（每天） |
| R2 | 10GB storage、1M Class A、10M Class B、egress 永遠免費 |
| Workers AI | 10,000 Neurons/day |
| Pages | 500 builds/月、無限請求 |

數字來自 [Workers Pricing](https://developers.cloudflare.com/workers/platform/pricing/) 與 [R2 Pricing](https://developers.cloudflare.com/r2/pricing/)，以下其餘數字同。

把這些換算成「真實的 indie SaaS」：100K req/day = 平均 1.16 req/sec 的長期負載，配上每使用者每天 30 個 page view，意思是大約 3,300 daily active users 才會撞到 Workers 免費上限。10GB R2 在每使用者 50MB 上傳的情境下大約能容 200 個重度使用者，或 2,000 個只放頭像 + 一兩張附件的使用者。D1 的 5GB 是真的很多，按每行 200 bytes 的典型業務資料計算等於約 2,500 萬列；指向上述 1,000 ~ 3,000 使用者的應用，DB 容量幾乎不會是先撞牆的維度。

**會先咬人的是兩個地方：** 第一是 Workers 免費 plan 的 10ms CPU/invocation——一旦你做圖片縮圖、JSON Schema 驗證迴圈、Markdown render，在 100ms 級的 cold path 很容易就破。第二是 KV 的 1,000 writes/day——只要你拿 KV 當 session store 或計數器，10 個活躍使用者就會把這個額度吃光。我看過的 reddit 抱怨幾乎都集中在這兩點。

對應的處方是：把 KV 當 read-heavy 的 cache，session 與 counter 改用 Durable Objects 或 D1；CPU-ms 用 `wrangler tail`[^wrangler-tail] 觀察，超過 3ms 就要找原因。這樣免費 tier 通常能把產品撐到拿到第一批 50–200 個願意付費的使用者再升等。

## $5 階段：解鎖一整個平台

升上 Workers Paid（$5/月，[官方頁](https://developers.cloudflare.com/workers/platform/pricing/)）的那一刻，整張表全部變了：

| 產品 | $5 包含額度（每月） | 超量單價 |
|---|---|---|
| Workers requests | 10M | $0.30 / M |
| Workers CPU | 30M ms | $0.02 / M ms |
| KV reads | 10M | $0.50 / M |
| KV writes / deletes | 1M | $5 / M |
| Hyperdrive | 不限查詢 | — |
| D1 | 25B reads + 50M writes + 5GB | $0.001 / M reads、$1 / M writes、$0.75 / GB |
| Durable Objects | 1M req + 400K GB-s + 5GB SQLite | $0.15 / M req、$12.50 / M GB-s、$0.20 / GB |
| Workers AI | 10K Neurons/day（仍免費） | $0.011 / 1K Neurons |

這裡最反直覺的是 **D1 的 25B reads**。把 1,000 DAU 各自每天打 100 次 query 算進去，一個月總 reads = 1,000 × 100 × 30 = 3M——只用了配額的 0.012%。很多 indie SaaS 的故事就是這樣：以為「商業級資料庫每月幾十塊很便宜」，結果一上 Cloudflare 才發現原來「便宜」是兩個數量級的差距。

**1,000 DAU 的算術。** 假設一個典型的 indie SaaS：使用者每天 30 個 page view（每個 = 1 Worker request + 2 D1 reads + 0.1 D1 writes），每使用者上傳 50MB 到 R2、每月撈 5 次。月度用量大致是：

- Workers: 1,000 × 30 × 30 = **900K requests**（包進 10M）
- CPU: 假設每請求 5ms = 4.5M CPU-ms（包進 30M）
- D1 reads: 900K × 2 = **1.8M reads**（佔 25B 的 0.0072%）
- D1 writes: 900K × 0.1 = **90K writes**（包進 50M）
- R2 storage: 1,000 × 50MB = **50GB**（超 10GB 免費 = 40GB × $0.015 = **$0.60**）
- R2 Class B: 1,000 × 5 × 30 = 150K（包進 10M）

**這個月帳單：$5 + $0.60 = $5.60。** 這是「使用者付你 $10/月，你的後端成本是 5%」的階段。

真實案例對得上：dev.to 上一個跑 production RAG[^rag] 的 indie 開發者公開帳單是 [$8–10/月](https://dev.to/dannwaneri/i-built-a-production-rag-system-for-5month-most-alternatives-cost-100-200-21hj)，每天處理 10,000 次搜尋（300K/月）。他用 Workers ($3) + Workers AI 嵌入模型 ($3-5) + Vectorize[^vectorize] ($2)，替代掉 Pinecone[^pinecone] $50–70 + OpenAI embedding $30–50 + EC2 t3.medium $35–50 + 監控 $15–20，總共省下 90% 以上。

## $20–50 階段：哪三個維度會把帳單推上去

升到 $20–50/月的 indie SaaS 通常不是「使用者變多」，而是踩中以下三條坡度比較陡的曲線。

**第一是 Workers AI 推理量。** 自由額度是 10K Neurons/day = 300K/月，超過後 $0.011 / 1K Neurons。一個輕量 7B 模型的單次推理大約 100–500 Neurons，意思是免費可以跑 600–3,000 次/天。一旦你做的是 RAG 搜尋每個使用者每天打 30 次推理，1,000 DAU 就會用掉 30,000 × 30 = 900K Neurons/天，超出 89.9 萬，月超量 = 27M Neurons × $0.011 = **$297**。這個維度上 Cloudflare 不便宜——同樣負載丟到 OpenAI GPT-5.4 nano（$0.20 / 1M tokens[^token] 輸入）通常更划算，[neuron 與 token 的對比](https://developers.cloudflare.com/workers-ai/platform/pricing/)在官方文件並列展示。

**第二是 Stream。** [Stream 定價](https://developers.cloudflare.com/stream/pricing/)是 storage $5 / 1,000 分鐘 + delivery $1 / 1,000 分鐘。聽起來便宜，直到你做的是「使用者上傳 1 小時影片，平均每支被觀看 50 次」——存 100 支 = 6,000 分鐘 storage = $30、delivery 100 × 60 × 50 = 300,000 分鐘 = $300。每月 $330，一下就把 indie 級預算打穿。要做使用者觀看為主的 SaaS（教學、健身、播客 video），Stream 不是 default 答案。

**第三是 Class A operations 失控。** R2 的 Class A（PUT/COPY/POST/LIST）是 $4.50 / M。聽起來很多，但只要你 import 大量小檔案（Markdown 站靜態圖、log shipping 一條一個 PUT），1M 次很快就破。我看過一個案例是把 OCR[^ocr] 後的單字級結果寫成 R2 物件、平均每使用者每天產生 2,000 個 PUT——1,000 DAU 一天 = 2M PUT × 30 = 60M/月，超量 = 59M × $4.50 = **$265**。處方：要嘛 batch 寫到 D1/SQLite[^sqlite]，要嘛改寫到 Durable Objects 的 SQLite（$1 / M writes）。

實際上多數正常的 indie SaaS 在 1,000–5,000 DAU 階段月費落在 **$8–25** 區間：$5 base + R2 storage 超量 $1–5 + 偶爾 Workers AI 推理 $2–10 + DO 寫入 $1–5。要超過 $50/月，幾乎一定是上述三條曲線之一被觸發。

## 對比 Vercel / Supabase：曲線長得不一樣

把同一個假設的 1,000 DAU SaaS（包含前端 + DB + 物件儲存 + 每月 200GB egress）擺到三家：

| 維度 | Cloudflare 全包 | Vercel + Supabase | 差異點 |
|---|---|---|---|
| Base 月費 | $5 (Workers Paid) | $20 (Vercel Pro) + $25 (Supabase Pro) | $40 |
| 200GB egress | $0（R2 + Workers 都免費） | Vercel 1TB 包進 Pro；Supabase 第 50GB 後 $0.09/GB = $13.50 | $13.50 |
| DB（D1 vs Supabase Postgres） | 5GB 免費 | 8GB 免費 | 容量上 Supabase 小贏，但 reads/writes 配額遠不如 D1 |
| 物件儲存 50GB | 40GB × $0.015 = $0.60 | Supabase 100GB storage 免費 | $-0.60 |
| 月費合計（典型） | **$5.60–8** | **$58.50** | 約 7–10 倍 |

數字來源：[Vercel Pro plan](https://vercel.com/docs/plans/pro-plan)、[Supabase Pricing](https://supabase.com/pricing)、上面的 Cloudflare 表。

但這不是公平比較，因為兩邊的 DX 不一樣：Vercel + Supabase 給你的是 Postgres（不是 SQLite）+ Next.js full SSR 沒任何 30 秒 CPU 限制 + 內建 auth UI。如果你是從 Next.js 起家的團隊，省下的不是月費而是時間。

**真正的觸發點。** 看 Vercel 那條 [bandwidth 超量 $0.40/GB](https://vercel.com/docs/limits)（2026 年漲過一次，從 $0.15 到 $0.40），破 1TB 後每多 100GB 多 $40 的曲線是 Cloudflare 沒有的——R2 + Workers 對 indie SaaS 等於把那條斜線壓平到 0。Supabase 的 [DB egress $0.09/GB](https://supabase.com/docs/guides/platform/manage-your-usage/egress)（50GB 後）也是另一條會在使用者操作頻繁時加速的曲線。

換句話說：**Cloudflare 的成本曲線在 indie 階段是「橫的」，其他家是「先平後陡」。** 這是 R2 零 egress 設計的單一維度勝利，被放大成整體選擇 Cloudflare 的最強理由。

## 一張快速對照表

| 階段 | 使用者規模（估算） | Cloudflare 全包 | Vercel + Supabase |
|---|---|---|---|
| $0 demo | < 200 註冊 | Free（KV writes 是雷） | Free + Hobby |
| $5–10/月 | 200–1,000 DAU | Workers Paid + 微量超量 | 不夠用，需升 Pro |
| $20–30/月 | 1,000–3,000 DAU | base + AI/DO 中量 | Vercel Pro $20 起跳，Supabase Pro $25 起跳 |
| $50+/月 | 觸發 Stream / 大量 AI / Class A 風暴 | 看哪個維度爆 | 同樣會破，但更快——bandwidth 與 egress 雙陡坡 |

**估算的部分**：DAU 的對應是把每使用者每天 30 個 page view、5 次 R2 讀、2 次 D1 讀寫的假設往上推；不同產品（重度上傳 vs 純讀寫 SaaS）會差 3–5 倍。

## 該記住的三件事

把這篇濃縮成決策依據：

1. **撐到第一批付費**：免費 tier 對 90% 的 indie SaaS 真的夠到 demo 階段，主要要避開的是 KV writes 與 CPU-ms 不是儲存。
2. **$5 是平台費，不是上限**：升上 Workers Paid 不是只付 $5 buy 你 Workers，是把整套 KV / D1 / DO 一起拉進「包月模式」，1,000 DAU 級別的真實月帳通常落在 $5–15。
3. **$50 以上是維度問題，不是規模問題**：Workers AI 大量推理、Stream 大量觀看、Class A 失控才是真正會把 indie 拉出 $50 區間的觸發點；如果你的產品壓中其中一個，這篇之外要重新算單獨那條服務的單位經濟。

這條曲線的形狀，是 Cloudflare 對 indie SaaS 最強的承諾——前 12 個月幾乎不會有「驚嚇月帳單」。也是為什麼下一篇要回過頭談盲點：當你把整套產品都壓在這一家，退場路徑長什麼樣。

---

[^workers]: Cloudflare Workers 是 Cloudflare 的無伺服器運算產品，跑在全球邊緣節點、由 V8 isolate 提供毫秒級啟動，是整個 Cloudflare 開發者平台的入口。
[^r2]: Cloudflare R2 是與 Amazon S3 API 相容的物件儲存服務，最大特色是 egress 永久免費，儲存價格約 $0.015/GB-月。
[^d1]: Cloudflare D1 是把 SQLite 包成託管服務的關聯式資料庫，跑在 Durable Objects 之上、跟 Worker 同網路，Free tier 5GB、Workers Paid 含 25B reads + 50M writes/月。
[^workers-ai]: Cloudflare Workers AI 是在 Cloudflare 邊緣 GPU 上跑開源模型的推理服務，零 API key、和 Worker 同網路，10,000 Neurons/day 免費。
[^neuron]: Neuron 是 Workers AI 的計費單位，把不同模型的 token、圖像、音訊用量換算成統一數字，再以 $0.011 / 1,000 Neurons 計價。
[^kv]: Workers KV 是 Cloudflare 的全球分散式鍵值儲存，特性是讀超便宜、寫昂貴、最終一致性，適合做 feature flag、session 查找。
[^cpu-ms]: CPU-ms（CPU millisecond）是 Workers 計費的核心維度——只算 CPU 真正執行你程式的毫秒數，等待 I/O、外部 API 回應的 wall-clock 時間不計。Free 每次調用 10ms 上限、Paid 每次預設 30 秒、最高 5 分鐘。
[^hyperdrive]: Cloudflare Hyperdrive 是「給 Worker 用的 Postgres 連線池與快取」，把外接 Neon、Supabase、RDS 的 Postgres 連線變得低延遲，Workers Paid 內不限查詢量。
[^durable-objects]: Cloudflare Durable Objects 是「全球可定址的單執行緒 stateful 物件」，每顆內建 SQLite + 10GB，是多人協作、聊天室、per-tenant 計費 ledger 的甜蜜點。
[^dau]: DAU（Daily Active Users）指每日活躍使用者數，是 SaaS / 消費應用的核心指標。1,000 DAU 通常對應 5,000–10,000 註冊使用者、$5,000–20,000 MRR 等級的小 SaaS。
[^stream]: Cloudflare Stream 是 Cloudflare 的影片託管與串流服務，自動轉碼、HLS / DASH 輸出、整合播放器，按分鐘計費（storage $5 / 1,000 分鐘、delivery $1 / 1,000 分鐘）。
[^class-a]: Class A operations 是 R2 中「會修改物件狀態」的操作（PUT、COPY、POST、LIST），單價較貴 $4.50/M；Class B 則是「唯讀」操作（GET、HEAD），$0.36/M。大量小檔上傳會把 Class A 吃爆。
[^vercel]: Vercel 是 2015 年成立的前端部署平台，主打 Next.js 體驗、邊緣函式、即時 preview，是 indie SaaS 圈最常被拿來與 Cloudflare 對比的對手。Pro 起跳 $20/月。
[^supabase]: Supabase 是「開源 Firebase 替代品」，2020 年起以 Postgres 為核心打包 auth、storage、realtime、edge function 等服務，是 Cloudflare 之外另一個 indie 友善的全棧平台，Pro 起跳 $25/月。
[^egress]: Egress 指資料從雲端服務出站到外部網路的流量，傳統雲端供應商按 GB 收費。Vercel 1TB 後 $0.40/GB、Supabase DB 50GB 後 $0.09/GB；Cloudflare R2 與 Workers egress 永久免費。
[^wrangler-tail]: `wrangler tail` 是 Cloudflare CLI 的指令，把 production Worker 的 console.log 與請求即時串到本地終端，是 indie 看 Worker 在線上跑得怎樣的主要工具。
[^rag]: RAG（Retrieval-Augmented Generation）是「先從知識庫檢索、再把段落塞進 prompt」的技術範式，是讓 LLM 引用最新或私有資料的標準做法。
[^vectorize]: Cloudflare Vectorize 是跟 Worker 同網路的向量資料庫，Workers Paid Free 額度 5M stored / 30M queried 維度。
[^pinecone]: Pinecone 是 2019 年成立的 managed 向量資料庫，主打規模、低延遲、企業級 SLA，Standard 起跳 $50/月 floor 不論用量。
[^token]: Token 是 LLM 計費與輸入長度的基本單位，大致是「一個英文字根、一個中文字、半個英文單字」。LLM 定價通常分 input / output token 兩個費率。
[^ocr]: OCR（Optical Character Recognition）指把圖片或 PDF 中的文字辨識成可編輯文字。Tesseract、AWS Textract、Google Cloud Vision 是常見方案——指 OCR 為何會產生大量小 PUT 是因為很多服務按字 / 行輸出。
[^sqlite]: SQLite 是嵌入式關聯式資料庫，一個檔案就是一座資料庫，全球部署量比 PostgreSQL 加 MySQL 還多，是 D1 與 Durable Objects 共用的底層引擎。

## 來源

- [Cloudflare Workers Pricing](https://developers.cloudflare.com/workers/platform/pricing/) — Workers Free / Paid 額度與超量、KV / Hyperdrive 包含項目（Cloudflare 官方文件，2026-04 取用）
- [Cloudflare D1 Pricing](https://developers.cloudflare.com/d1/platform/pricing/) — 25B reads / 50M writes / 5GB 包含與超量單價
- [Cloudflare R2 Pricing](https://developers.cloudflare.com/r2/pricing/) — 10GB / 1M Class A / 10M Class B / 零 egress
- [Cloudflare Durable Objects Pricing](https://developers.cloudflare.com/durable-objects/platform/pricing/) — 1M req / 400K GB-s / 5GB SQLite 包含
- [Cloudflare Workers AI Pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/) — Neuron 單價 $0.011 / 1K
- [Cloudflare Stream Pricing](https://developers.cloudflare.com/stream/pricing/) — Storage $5/1,000 min、Delivery $1/1,000 min
- [Vercel Pro Plan 文件](https://vercel.com/docs/plans/pro-plan) — $20 平台費、1TB Fast Data Transfer、10M Edge Requests
- [Vercel Limits](https://vercel.com/docs/limits) — bandwidth 超量單價
- [Supabase Pricing](https://supabase.com/pricing) — Pro $25：8GB DB、100GB storage、250GB egress、100K MAU
- [Supabase Egress 文件](https://supabase.com/docs/guides/platform/manage-your-usage/egress) — DB egress 50GB 後 $0.09/GB
- [I Built a Production RAG System for $5/month — dev.to](https://dev.to/dannwaneri/i-built-a-production-rag-system-for-5month-most-alternatives-cost-100-200-21hj) — 真實案例 $8–10/月，10K 搜尋/天
- [Cloudflare Workers Pricing in 2026 — toolradar](https://toolradar.com/tools/cloudflare-workers/pricing) — 第三方統整，包含 indie 級實測月費 $15–50 區間
