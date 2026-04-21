---
title: 帳單與退路：什麼時候該離開 Vercel
order: 4
date: 2026-04-21
summary: $550/TB 頻寬、沒有硬性花費上限、DDoS 風險——Vercel 在哪些情境會變成帳單黑洞，Cloudflare、SST 與 self-host 又各自適合什麼規模的 SaaS。
---

# 帳單與退路：什麼時候該離開 Vercel

## TL;DR

- Vercel 的超額頻寬是 **$0.15/GB（約 $150/TB，熱門地區更高，社群常引用 $550/TB 的有效等價費率）**；沒有真正的「硬性」花費上限，Spend Management 的檢查週期是「幾分鐘」，爆量場景追不上。
- 已知的帳單爆雷：Cara（2024 年單月函數費用 **$96,000**）、Jmail（2026 年 2 月單月 4.5 億 pageview，帳單 **$46,485**）、以及多起 DDoS 被按頻寬計費跑到 **$23,000** 的案例——全部不是 bug，是定價模型的合理推導。
- 逃生路徑不是二元題：**留在 Vercel 但前置 Cloudflare CDN、移到 OpenNext on Cloudflare Workers、用 SST 部到自家 AWS、或 Docker 到 Fly/Hetzner**——各自對應不同規模與團隊型態。小團隊繼續留在 Vercel 大多數時候是對的。

## 帳單會爆的三種情境（都不是假想）

**情境一：靜態網站被「邊緣請求 + 頻寬」雙重計費。** 2026 年 2 月 Jmail 這個仿 Google UI 的 Epstein 文件站在 Vercel Pro 上單月跑了 4.5 億 pageview，帳單 $46,485。拆開看：每個頁面載入會觸發 HTML/JS chunks/CSS/字體數十個資源請求，再乘上 Next.js middleware 會對每一個資源請求都執行一次——單純的「靜態」網站打爆了 Edge Request 免費額度（1,000 萬/月，超額 $2/百萬）與 1 TB 頻寬額度（超額 $0.15/GB）。這不是 DDoS，是合法流量；執行長後來公開承擔。

**情境二：突然紅起來的 SaaS 打爆 serverless function 計費。** 2024 年中的 Cara（藝術社群）在一週內從零衝到 50 萬用戶、日均 **5,600 萬次 function 調用**，單月 function 費用 **$96,000**。Vercel 創辦人的公開回應點出關鍵：Spend Management 沒啟用。這個功能 2023 年底才推出、預設 opt-in。一個本來用 $400/月伺服器就能撐的工作負載，在 serverless 計費下翻了 200 倍。

**情境三：DDoS 或 crawler 把頻寬當提款機。** 社群討論中最具代表性的是 $23,000 的 DDoS 帳單——所有攻擊流量都照 $0.15/GB 標準結算。即便 Vercel 有 Attack Challenge Mode，預設並不會對攻擊流量免費豁免；misconfig 的 middleware、沒裝 rate limit 的 API route、被 AI crawler（2025–2026 最大變因）反覆掃的站點，全部吃這筆。

## 為什麼結構上就會這樣

Vercel 的計費是**多維超額**：Edge Requests、Fast Data Transfer、Function Invocations、Active CPU Time、ISR Reads/Writes 各自獨立計算，任一維度超額都會出現在帳單上。Pro 方案 $20/月名義上含 1 TB 頻寬、1,000 萬邊緣請求、40 CPU 小時——乍看很多，但一個 Next.js middleware 就能讓邊緣請求乘以 20 倍。

Spend Management（2026 年版）在 50%、75%、100% 發通知並可選擇暫停所有 production deployment，但 Vercel 官方文件自己寫得很清楚：**「檢查每幾分鐘一次，暫停不是即時的，請將上限設得比你願意付的最大值更低」**。換算一下，DDoS 每秒 10 萬請求時，幾分鐘的延遲就是 10–50 GB 的頻寬——幾千美元的帳單已經記上去。這不是 hard cap，是 soft cap with receipts。

另一個結構性問題是**頻寬定價本身**。截至 2026-04，Vercel 熱門地區 $0.15/GB、亞太 $0.24/GB，Cloudflare 的 egress 則是完全免費。同樣 1 TB 流量：

| 平台 | 月費 | 1 TB 額外流量 | 10 TB 額外流量 |
|---|---|---|---|
| Vercel Pro | $20 | 含在內 | +$1,350 |
| Netlify Pro | $19 | +$55 | 約 +$1,100 |
| Cloudflare Workers Paid | $5 | $0 | $0 |

內容重的 SaaS 一旦跨過 TB 級，帳單曲線不是平滑的，是斷崖。

## 退路地圖：不是「離開 Vercel」是「把對的工作放到對的地方」

截至 2026-04，可行的遷移組合大致有四種：

**1. 最輕：Cloudflare CDN 前置、Vercel 當 origin。** 不動應用程式碼，把所有靜態與可快取路徑用 Cloudflare 吸收，Vercel 只處理 SSR 與 API。對「九成靜態 + 一成動態」的行銷站、內容站，這步就能把帳單砍到 1/5 以下。代價：多一層 DNS/TLS 設定、快取 invalidation 要自己想。

**2. 中度：OpenNext on Cloudflare Workers。** OpenNext 1.0 已在 SST 團隊與 Cloudflare/Netlify 共同維護下進到 Next.js 官方 Ecosystem Working Group；Next.js 16.2 的 Deployment Adapters API 是穩定版。Cloudflare 的 `vinext`（Vite 改寫 Next.js 編譯管線）把 Turbopack 換成 Vite、據稱整個重寫只花了 $1,100 的 AI token 成本。好處是 V8 isolate 冷啟動 <5ms、330+ 邊緣節點、egress 免費。**代價是 25 MiB 的 Worker bundle 上限**——2025 年多篇遷移記錄都提到要手動拆 bundle、某些 Node 相容模式要等 compat date。重度動態 SaaS 要評估。

**3. 回家方案：SST + OpenNext on AWS。** 適合「我們反正要用 AWS」的團隊。SST v3 用 OpenNext 把 Next.js 編譯成 Lambda + CloudFront + S3 的組合，用 IaC 管理。幾個公開案例的穩態成本接近 $0（流量在 AWS 免費額度內），但代價是 Lambda cold start、一組真實的 AWS 帳號治理問題、以及 SST 本身的學習曲線。選它的理由通常不是省錢，是 **data gravity 在 AWS、需要 VPC 打通**。

**4. 回到 container：Docker on Fly/Railway/Hetzner。** Next.js 本來就支援 `output: 'standalone'`。一台 Hetzner $20 VPS 可以跑掉大多數早期 SaaS 的工作負載；Fly.io 有 anycast 全球部署。一個公開的降本案例：$700/月 Vercel 帳單重構成 Vercel Pro $40 + Cloudflare R2 $25 + Hetzner VPS $20，月費 $120、降 83%——但換到的是「你要自己管 zero-downtime deploy、log、rollback」。

## 但什麼 SaaS 就是該留在 Vercel

不要純黑稿。Vercel 值得付溢價的三種情境：

**一，Next.js 是你的主力、團隊 < 10 人、流量 < 1 TB/月**。在這個區間，Vercel Pro $20/人·月幾乎打不破、Preview Deployment + GitHub 整合 + 自帶 Observability 省下的時間遠大於差價。前面那些 $46,485 的故事都發生在流量爆量的尾端，不是日常。

**二，產品核心是「shipping 速度」而不是「infra 成本」**。Fluid Compute（見本期第 2 篇）已經把過去 250ms 的冷啟動打到近零，AI Gateway + AI SDK（見第 3 篇）把 LLM 路由內建。創辦團隊在 seed–Series A 階段的工程時間比伺服器貴得多。

**三，你需要的是 DX，不是單項指標**。Cloudflare Workers 的冷啟動是 <5ms 冠軍，但它的 DX 至今仍比 Vercel 粗糙一截——KV/D1/R2 各自有限制、Next.js 支援度永遠滯後、debugging 的工具鏈不成熟。你不是在選快的引擎，是在選適合團隊腦袋形狀的平台。

## 判斷準則，一條線

一條粗略的判斷線：**月頻寬 < 500 GB 且月營收 > $5K 的 SaaS，留在 Vercel；月頻寬 > 5 TB 或帳單 > MRR 的 5%，開始認真做退路**。中間地帶先做「Cloudflare 前置 CDN」的輕量改造，再考慮全面遷移。所有的逃生都不是技術問題，是「你的工程時間該花在哪」的問題——這個答案會隨團隊規模、流量形狀、現金流跑道改變，不是一次性決定。

---

**來源**

- [Breaking down Vercel's 2025 pricing plans, quotas and hidden costs — Flexprice](https://flexprice.io/blog/vercel-pricing-breakdown)
- [Ask HN: Why is Vercel so expensive?](https://news.ycombinator.com/item?id=39898391)
- [Ninety-six thousand dollars spent solely on Vercel functions on one month (HN)](https://news.ycombinator.com/item?id=40618220)
- [$46,485 for a Static Website — Vercel Pricing is Getting Wild (Medium, 2026)](https://medium.com/@gsoumyadip2307/46-485-for-a-static-website-vercel-pricing-is-getting-wild-35c4d61a89a9)
- [Vercel Spend Management — Official Docs](https://vercel.com/docs/spend-management)
- [Switching Next.js from Vercel to Cloudflare — Harrison Milbradt (2025-11)](https://harrisonmilbradt.com/blog/2025-11-08-switching-nextjs-from-vercel-to-cloudflare)
- [OpenNext 1.0 — SST Blog](https://sst.dev/blog/open-next-v1/)
- [Vercel Bill Shock: From $700 to $120 — Medium (2026-01)](https://journeywithibrahim.medium.com/vercel-bill-shock-from-700-to-120-ec24ee9755c3)
