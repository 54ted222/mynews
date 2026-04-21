---
title: Next.js 鎖定與 $340M 飛輪：SaaS 為什麼倒向 Vercel
order: 1
date: 2026-04-21
summary: 從 ARR、v0、agent 部署量看這家公司如何把 Next.js 的統治力變成 SaaS 市場的現金流，以及這套鎖定背後的飛輪。
---

# Next.js 鎖定與 $340M 飛輪：SaaS 為什麼倒向 Vercel

## TL;DR

- Vercel ARR 從 2024 年初的 **1 億**跳到 2026 年 2 月的 **3.4 億 run-rate**，兩年多 240%，估值在 2025 年 9 月 Series F 衝到 **93 億美元**。
- 這家公司真正賣的不是 hosting，而是 **Next.js 本身**——過去 12 個月光 Next.js 就被下載 **5 億次**（超過 2016–2024 累計），讓 Vercel 成了 React SaaS 的預設分發通道。
- AI agent 現在每週貢獻 **30%** 的新部署，半年前只有 3%。其中 Claude Code 一家就吃掉 **75%**，v0 跟 Lovable 各 6%——意思是 Vercel 不只是人類寫的 SaaS 在跑，連 agent 生出來的都逃不掉。

## 不是 PaaS，是 Next.js 的收費匣道

Vercel 過去常被當作「Netlify 的高級版」來比較，但 2025 年後這個框架已經失效。真正該拿來比的是 **Stripe 之於金流、Shopify 之於電商**——在框架層抓住一個無可替代的開發介面，然後把它變現。

Vercel 的護城河不是 edge network，而是 Next.js：

- **58% 開發者首選**：State of JavaScript 2025（13,000+ 受訪者）顯示 Next.js 在 React meta-framework 的採用率獨占鰲頭；Next.js 監測到的活躍網域在 2025 年 4 月峰值為 24.6 萬個
- **React core team 被 Vercel 收編**：Next.js 定義了 React Server Components 的 canonical 實作，等於 React 的未來方向跟 Vercel 的路線圖綁在一起
- **開箱即用的 SaaS 模板**：Stripe、Clerk、Supabase、Auth.js 全部以 Next.js 為 first-class target——改框架等於重寫半個產品

Contrary Research 的分析指出，Vercel 光 hosting 層就處理 **每週 1400 億次請求、3200 萬個活躍網域**。規模到這個量級的不是選型偏好，而是分發基礎設施。

## v0 與 agent 把飛輪轉起來了

過去 Vercel 的營收結構是典型 PaaS：開發者部署、流量變大、帳單變貴。2025 年之後多了兩台完全不同的馬達。

**v0（AI 生成 app 的產品）**跑出了 SaaS 內部少見的曲線：

- 累計使用者 2026 年 2 月達 **4M+**，不到一年翻倍
- **Teams / Enterprise 方案佔 v0 營收超過 50%**——這不是 toy，是企業預算
- Contrary Research 估算 v0 年化營收在 2025 年從 $100M 跳到 $180M，佔 Vercel 總營收約 **21%**，且毛利高於 hosting 本業

**agent 部署**則是 2026 年 Q1 才爆開的新變量。Vercel 在 4 月公開的資料很露骨：每週部署數在 3 個月內翻倍，其中 **30% 由 coding agent 發起，半年前這個數字是 3%**。更刺眼的是，agent 部署的專案**呼叫 AI inference 供應商的機率是人類部署專案的 20 倍**——每一個 agent 丟上來的 app，都自動成為 Vercel AI Gateway 的流量來源。

Rauch 在 HumanX 大會（2026-04-13 TechCrunch 刊出）說得不修飾：「**agent 部署起來非常多產**」、「當年只有幾千萬人能 deploy，現在全世界的人都能做 app，這些軟體總得跑在某個地方，我們認為那個地方就是 Vercel」。

## 誰在用：從 Perplexity 到 OpenAI，從 Ramp 到 TikTok

「Built on Vercel」的名單本身已經是個賣點：

- **AI-native 代表**：OpenAI、Perplexity、Cursor、Decagon、Exa、Granola、Pika
- **金融／商務 SaaS**：Stripe、Ramp、Polymarket
- **Fortune 500 / 消費品牌**：Walmart.com、Nike、Under Armour、TikTok 網頁版、The Washington Post、Zapier、Nintendo

Vercel Series F 公告（2025-09-30）順手點名了三個 AI 巨頭的前端都跑 Next.js：**Grok、Claude、Cursor**。這個組合不是巧合——當你要做一個需要 streaming、server components、邊緣渲染的 AI 對話產品，Next.js 是 2026 年唯一有完整 DX 的選項。

另一條 pipeline 是 **Vercel AI Accelerator**。2025 cohort 39 家團隊、**$8M+ partner credits** 來自 AWS、Anthropic、OpenAI、Cartesia、ElevenLabs、Perplexity、Modal、Supabase——Vercel 等於用補貼把下一代 AI SaaS 的前端養在自家平台上。等這些公司長大，搬家成本已經埋進產品骨架。

## 鎖定為什麼成立（以及什麼時候會鬆）

這套飛輪的底層邏輯可以拆成三層：

1. **框架層**：Next.js 是開源的，但 canonical runtime 是 Vercel。`next start` 在自架機器上能跑，ISR、Image Optimization、RSC streaming 的完整形態卻只在 Vercel 上原生運作。改 host 不是換 S3 endpoint，是重寫 rendering pipeline。
2. **AI 棧層**：AI SDK 每週 **300 萬次下載**，v0 產出的程式碼預設用 Vercel AI Gateway、Vercel Workflows。開發者拿到生成程式的那一刻，基礎設施選型已經做完了（技術細節見本期第 3 篇）。
3. **agent 介面層**：`immutable deployment + preview URL + API + rollback` 這套組合是 agent 唯一能可靠操作的部署表面。Claude Code 選 Vercel 不是因為便宜，是因為 deterministic。

反方不是不存在。Cloudflare 2026 年 2 月用 OpenNext 把 Next.js 重寫到 Workers 上，帳單與性能層面對 Vercel 施壓；HN 討論裡對 4 月的安全事件（OAuth token 可同時觸及 dev tools、CI、secrets、deployment）一片批評，被形容成「架構上出了問題」。部分開發者把 Next.js 自架到 Docker，月成本從 $100+ 壓到 $12。這些是真實的逃逸壓力（本期第 4 篇會專門拆解什麼時候該走）。

但對 2026 年正在啟動的 SaaS 來說，選型決策已經不太公平：**你不是在選一個 PaaS，你是在選「不要讓自己晚三個月上線」**。當 93 億美元估值的公司把框架、IDE（v0）、agent runtime、inference gateway 綁成一套，這條船就算貴也很難下。

下一篇：Fluid Compute 怎麼讓 serverless 擺脫 per-invocation 計費的原罪。

---

## 來源

1. [Vercel CEO Guillermo Rauch signals IPO readiness as AI agents fuel revenue surge](https://techcrunch.com/2026/04/13/vercel-ceo-guillermo-rauch-signals-ipo-readiness-as-ai-agents-fuel-revenue-surge/) — TechCrunch, 2026-04-13
2. [Agentic Infrastructure（agent 部署佔比與市佔）](https://vercel.com/blog/agentic-infrastructure) — Vercel Blog, 2026-04-09
3. [Towards the AI Cloud: Our Series F](https://vercel.com/blog/series-f) — Vercel Blog, 2025-09-30
4. [Vercel revenue, valuation & funding](https://sacra.com/c/vercel/) — Sacra, 2026-03-22
5. [Vercel Business Breakdown（客戶清單、毛利、v0 營收估算）](https://research.contrary.com/company/vercel) — Contrary Research
6. [Vercel April 2026 security incident discussion](https://news.ycombinator.com/item?id=47824463) — Hacker News, 2026-04
