---
title: 每日創業情報 — 2026-05-26
date: 2026-05-26
tags: 創業情報, AI 產業, SaaS
summary: 今日（5/26）三條對 indie 立即影響——(1) Google Gemini Spark personal agent 本週起對美國 AI Ultra 訂閱者開放 beta、跑 Antigravity harness + 深接 Workspace（Gmail / Docs / Slides），AI Ultra 同步從 $250 砍到 $100/月，個人 agent 價格戰下沉；(2) Anthropic $30B+ 募資本週將收（Bloomberg 5/22 揭、Sequoia / Dragoneer / Altimeter / Greenoaks 各約 $2B 共同領投、估值 > $900B）——接續 5/23 brief 的 Q2 $10.9B + 首次盈利；(3) Supabase 五月開發者更新落地：`@supabase/server` 跨 runtime SDK（Edge Functions / Vercel / Deno / Bun / Cloudflare Workers 一套）+ Data API per-table / per-function 開關 + Stripe Marketplace GA + Cloudflare D1 Wrapper——疊上 5/30 K2.5→K2.6 切換（剩 4 天）。Figma Design Agent 5/20 上線（free beta、OpenAI + Anthropic 雙接、canvas 內編輯）；Vercel AI Gateway 加 Qwen 3.7 Max + `vercel flags split` 權重分流；Harvey 推 500+ use-case agent + Agent Builder。
keywords: Gemini Spark beta AI Ultra US week May 26 2026 Antigravity harness Workspace Gmail proactive agent, Google AI Ultra repricing $250 to $100 per month I/O 2026 personal agent, Anthropic $30 billion round closing Sequoia Dragoneer Altimeter Greenoaks $900 billion valuation Bloomberg May 22 2026, supabase server SDK cross runtime Edge Functions Vercel Deno Bun Cloudflare Workers auth CORS context, Supabase Data API per-table per-function toggle PostgREST GraphQL May 2026, Cloudflare kimi K2.5 K2.6 alias switch May 30 2026 Workers AI price increase, Figma AI Design Agent launch May 20 2026 OpenAI Anthropic canvas free beta, Vercel AI Gateway Qwen 3.7 Max flags split weighted traffic alerts CLI May 2026, Harvey 500 use case agents Agent Builder legal vertical May 2026, Camunda ProcessOS agentic workflow closed beta May 20 2026
---

# 每日創業情報 — 2026-05-26

## 🎯 今日 TL;DR

- **Google Gemini Spark[^gemini-spark] personal agent 本週起對美國 AI Ultra 開放 beta + AI Ultra 砍價到 $100/月**：(1) Spark 是 5/19 I/O 揭的「24/7 proactive personal agent」、跑 **Gemini 3.5 + Antigravity harness[^antigravity]**、深接 Gmail / Docs / Slides / Slack 等 Workspace，雲端常駐（關筆電也續跑）、**high-stakes 動作（花錢 / 寄信）會先問再做**；(2) **beta 從 5/26 當週起對美國 AI Ultra 訂閱者開放**（先前僅 trusted testers）；(3) **AI Ultra 在 I/O 從 $250 重新定價到 $100/月**——個人 agent 市場價格戰正式下沉；(4) 對 indie：(a) Spark **只接 Google 生態**——「非 Workspace 垂直（Notion / Linear / 自家 SaaS）的 proactive agent」+「三家個人 agent（Spark / ChatGPT / Claude）接哪些 app、資料邊界、誰先問再做」決策內容 5/26 起 21 天熱期；(b) $100 定價是 indie 賣「個人 agent 顧問 / 設定服務」的新買方錨點
- **Anthropic $30B+ 募資本週將收、估值 > $900B**：(1) Bloomberg 5/22 揭「**as soon as next week**」（即 5/25 當週）；(2) **Sequoia / Dragoneer / Altimeter / Greenoaks 各約 $2B 共同領投**；(3) 接續 5/23 brief 的 Q2 預期 $10.9B 營收 + 首次 $559M 季營業利潤 + SpaceX Colossus 約 $1.25B/月（至 2029）算力大單；(4) 對 indie：「為什麼押 Claude」客戶決策表 5/26 起再加一條「$30B 到帳、12 個月 distribution / brand 紅利落定」——對簽 12+ 月合約的 SMB / enterprise 信心錨點再 +1
- **Supabase 五月開發者更新落地：跨 runtime SDK + Data API 細粒度開關 + Stripe Marketplace GA + Cloudflare D1 Wrapper**：(1) **`@supabase/server`[^supabase-server]** 一套處理 auth / client 建立 / CORS / context 注入、橫跨 **Edge Functions / Vercel Functions / Deno / Bun / Cloudflare Workers**——edge agent / voice SaaS 不必每個 runtime 各寫一份 boilerplate；(2) **Data API 改版**：per-table / per-function 開關，精準控制哪些 table 暴露給 PostgREST / GraphQL；(3) **Supabase app 進 Stripe Marketplace GA** + 可用 **Wrappers** 從 Postgres 直接查 **Cloudflare D1**；(4) 對 indie：跑 Supabase 的本週把 `@supabase/server` 試裝一條 edge endpoint、順手收 Data API 暴露面——同時注意 **5/30 Cloudflare K2.5→K2.6 alias 切換（剩 4 天、K2.6 較貴）**
- **Figma Design Agent 5/20 上線：canvas 內 agent、free beta、OpenAI + Anthropic 雙接**：(1) 自然語言在 Figma Design canvas 內 generate / edit / iterate、fine-tuned 對 Figma 檔做 direct manipulation；(2) **beta 期免費、不吃 AI credit**（GA 後才計）、Full seat（Professional / Org / Enterprise）可用、Collab / Dev seat 限 drafts；(3) Figma 同期營收 +46%、設計軟體全面 agentic；(4) 對 indie：「Figma agent 輸出 → 自家 design system code」的 handoff 橋接、與「design-to-code vertical」5/26 起重排——agent 留在 canvas 內、code 落地仍是人 + 工具的縫
- **Vercel AI Gateway 加 Qwen 3.7 Max + `vercel flags split` 權重分流 + `vercel alerts` CLI**：(1) **Qwen 3.7 Max[^qwen]**（Alibaba）進 AI Gateway、定位 coding + office workflow agent foundation、是 router 新一格；(2) **`vercel flags split`** 設權重流量切分（A 變體分 X%、其餘給 B）；(3) **`vercel alerts`** CLI 直接拿 anomaly alert 細節；(4) 對 indie：跑 multi-LLM router 的本週把 Qwen 3.7 Max 加進「同 prompt × N 家」對比；做 feature flag / A-B 的省一條第三方
- **倒數時間鎖（5/26 起）**：**5/30 Cloudflare K2.5→K2.6 alias 切換（剩 4 天）** + **5/31 GH-600 Agentic AI Developer cert[^gh600] beta 截止（剩 5 天）** + **6/2–6/3 Microsoft Build（剩 7–8 天）** + **6/10–6/11 Code w/ Claude Tokyo（剩 15–16 天）** + **6/15 Anthropic Agent SDK Credit Pool（剩 20 天）** + **6/18 Gemini CLI sunset（剩 23 天）** + **7/1 Postgres 14→17 自動升（剩 36 天）**

## 🔄 昨日追蹤

### 5/23 brief Anthropic Q2 $10.9B / $900B 估值 🔄 追蹤更新

距 5/23 主述 3 天——**新訊號**：(1) **Bloomberg 5/22 揭 $30B+ 募資「as soon as next week」**（即本週 5/25–5/29）、**Sequoia / Dragoneer / Altimeter / Greenoaks 各約 $2B 共同領投**、估值 > $900B——5/23 brief 提的「IPO 倒數」這條，先被「$30B primary round 落地」墊一塊；(2) 對 indie：5/23 提的「為什麼押 Claude」客戶決策表新增一條「$30B 到帳 = 12 個月 runway / distribution 確定性」talking point；(3) 同期 OpenAI confidential IPO filing 仍未公開新文件。下個觀察錨點：5/27–6/2 round 正式公告後，是否同步揭新 enterprise credit / startup program（撞 6/2–6/3 Microsoft Build）。

### 5/23 brief Supabase token endpoint 切換 🔄 追蹤更新

距 5/22 切換 4 天——**新訊號**：(1) 5/22 token endpoint 201→200 仍無 horror story（主流 client `response.ok` 不受影響、5/22 brief 預判成立）；(2) **五月開發者更新本週落地**：`@supabase/server` 跨 runtime SDK + Data API per-table / per-function 開關 + Stripe Marketplace GA + Cloudflare D1 Wrapper（見本日工具段）；(3) 觀察重心仍是 **5/30 Cloudflare K2.5→K2.6**（剩 4 天）+ **7/1 Postgres 14→17**（剩 36 天）。下個觀察錨點：5/30 K2.5→K2.6 切換當日是否撞 Supabase 新 project 預設變更同期疊。

### 5/23 brief OpenAI Secure MCP Tunnel GA vs Anthropic MCP Tunnels 🔄 追蹤更新

距 5/22 OpenAI GA 4 天——**新訊號**：(1) 24h 內 Anthropic 仍未把 MCP Tunnels 從 research preview 推 public beta（5/23 brief 觀察錨點未觸發）；(2) Figma 5/20 Design Agent **同時接 OpenAI + Anthropic** = 應用層大廠對「雙押兩家 frontier model」的最新範例、對 indie 做 model-agnostic wrapper 是背書；(3) enterprise 雙跑 PoC（OpenAI Tunnel + Anthropic Self-hosted Sandbox）的 14 天對比仍是 5/23 起的熱題。下個觀察錨點：6/2–6/3 Microsoft Build 是否揭 Copilot / Azure 對應 tunnel 路徑。

### 5/23 brief GitHub Copilot Eclipse OSS + Build 倒數 🔄 追蹤更新

距 5/21 Eclipse OSS 5 天、距 Build **剩 7–8 天**——24h 內無新動作；**新訊號**：5/31 **GH-600 Agentic AI Developer cert beta 截止剩 5 天**、與 Build 6/2–6/3 連動——做 agent SaaS / SMB 整合的本週是「考完 cert + 蹲 Build agenda」雙窗口。下個觀察錨點：5/27–6/2 Build agenda 是否補 Copilot for Indie / Solo Tier。

## 📰 AI 產業動態

| 事件 | 對獨立開發者的影響 | 機會/威脅 | 來源 |
| ---- | ------------------ | --------- | ---- |
| **Gemini Spark personal agent 5/26 當週對美國 AI Ultra 開放 beta**：(a) 24/7 proactive agent、跑 Gemini 3.5 + Antigravity harness、雲端常駐、深接 Gmail / Docs / Slides / Slack；(b) high-stakes 動作（花錢 / 寄信）先問再做、由 user 選開哪些 app；(c) 隨 **AI Ultra $100/月**（I/O 從 $250 砍價）；先 trusted testers、5/26 當週擴美國 AI Ultra beta | (1) **個人 agent 市場價格錨點下沉到 $100**——indie 賣「個人 agent 設定 / 顧問」服務的買方預期被重設；(2) Spark **只接 Google 生態**——非 Workspace 垂直（Notion / Linear / 自家 SaaS）的 proactive agent 仍是 indie niche；(3) Antigravity harness 是 Spark 底層 = 做 Antigravity SDK PoC 的 indie 直接看到「Google 自家旗艦消費級 agent 也跑這套」的採用背書 | 機會：(1) 寫「Spark / ChatGPT agent / Claude 三家個人 agent 接哪些 app + 資料邊界 + 誰先問再做」決策內容（5/26 起 21 天熱期）；(2) 對 SMB 開「Spark 連 Workspace 安全 / 稽核設定 1 小時」retainer $99；(3) 做「非 Google 生態 proactive agent」垂直 PoC；**威脅**：做「Gmail 收件匣摘要 / 日程助理」純軟體 SaaS 的，6–12 個月內被 Spark 原生擠到 niche | [CNBC — Gemini Spark / AI Ultra](https://www.cnbc.com/2026/05/19/google-ai-ultra-gemini-spark-omni.html) / [TechCrunch — Gemini Spark 24/7 assistant](https://techcrunch.com/2026/05/19/google-introduces-gemini-spark-a-24-7-agentic-assistant-with-gmail-integration/) / [Google Blog — Gemini app more agentic](https://blog.google/innovation-and-ai/products/gemini-app/next-evolution-gemini-app/) / [VentureBeat — Spark can spend your money](https://venturebeat.com/technology/googles-new-ai-agent-can-draft-your-emails-monitor-your-inbox-and-eventually-spend-your-money) |
| **Anthropic $30B+ 募資本週將收、估值 > $900B**：(a) Bloomberg 5/22 揭「as soon as next week」（即 5/25 當週）；(b) **Sequoia / Dragoneer / Altimeter / Greenoaks 各約 $2B 共同領投**；(c) 接續 Q2 預期 $10.9B 營收 + 首次 $559M 季營業利潤 + SpaceX Colossus 約 $1.25B/月算力大單 | (1) 「為什麼押 Claude」客戶決策表加一條「$30B primary round 落地、12 個月 runway / distribution 確定性」；(2) 對簽 12+ 月合約的 SMB / enterprise 信心錨點 +1；(3) 配 5/19 Managed Agents 7 件套 + Claude Security 公測，Anthropic「研究→工具→distribution→enterprise」全鏈條故事再補資金面 | 機會：(1) 寫「Anthropic $30B round 對 indie 押 Claude 的 12 個月意義」內容（5/26 起 14 天熱期）；(2) 對 SMB 客戶開「為什麼押 Claude 不押 GPT」決策表 audit $500；**威脅**：靠「frontier lab 燒錢、隨時可能漲價」當反論點賣對手生態的 indie，論點本週被「Anthropic 首次盈利 + $30B 到帳」削弱 | [Bloomberg — Anthropic to close $30B round](https://www.bloomberg.com/news/articles/2026-05-22/anthropic-to-close-over-30-billion-round-as-soon-as-next-week) / [CNBC — Anthropic Q2 revenue first profit](https://www.cnbc.com/2026/05/20/anthropic-revenue-explosive-growth-ipo-profitable-quarter.html) / [Crunchbase — foundational AI funding Q1 2026](https://news.crunchbase.com/venture/foundational-ai-startup-funding-doubled-openai-anthropic-xai-q1-2026/) |
| **Figma Design Agent 5/20 上線：canvas 內 agent、free beta、OpenAI + Anthropic 雙接**：(a) 自然語言在 Figma Design canvas 內 generate / edit / iterate、fine-tuned 對 Figma 檔 direct manipulation；(b) **beta 免費、不吃 AI credit**（GA 後才計）；(c) Full seat（Professional / Org / Enterprise）可用、Collab / Dev seat 限 drafts；(d) Figma 同期營收 +46%、與 OpenAI + Anthropic 整合 | (1) 設計軟體全面 agentic——做「UI mockup → code」中介工具的 indie 需重排差異化（agent 在 canvas 內了）；(2) **「Figma agent 輸出 → 自家 design system / code」handoff 仍是縫**——design-to-code vertical 機會還在；(3) Figma 雙接 OpenAI + Anthropic 是大廠「model-agnostic」範例、對 indie 做雙模型 wrapper 是背書 | 機會：(1) 寫「Figma Design Agent free beta 7 天上手 + 落地 code 的縫怎麼補」內容（5/26 起 21 天熱期）；(2) 對設計團隊客戶開「Figma agent → design token / code handoff」PoC $1K–$3K；**威脅**：靠「自然語言生 UI mockup」當唯一賣點的 indie SaaS，被 Figma 原生 agent（且 beta 免費）直接壓 | [TechCrunch — Figma adds AI assistant to canvas](https://techcrunch.com/2026/05/20/figma-adds-an-ai-assistant-to-its-collaborative-canvas/) / [Figma Blog — The Figma Agent is here](https://www.figma.com/blog/the-figma-agent-is-here/) / [Dataconomy — Figma OpenAI Anthropic integrations](https://dataconomy.com/2026/05/21/figma-ai-design-agent-openai-anthropic-integrations/) / [The AI Insider — Figma agent revenue +46%](https://theaiinsider.tech/2026/05/21/figma-launches-native-ai-design-agent-as-revenue-surges-46-amid-intensifying-competition/) |
| **垂直 agent 平台化加速：Harvey 推 500+ use-case agent + Agent Builder（5 月）**：(a) 法律 vertical AI Harvey（3 月 $200M / $11B、累計募資破 $1B）5 月推 **500+ use-case agent + Agent Builder**；(b) 同期 Camunda 5/20 揭 **ProcessOS[^processos]**（discover / re-engineer / 持續優化 business process 成 agentic workflow、closed beta）——enterprise「把流程拆成 agent」平台化成形 | (1) **垂直巨頭把「500+ ready agent + builder」當護城河**——做單點法律 / 流程 agent 的 indie 被「平台 + builder」夾擊、要往 Harvey / Camunda **沒覆蓋的窄垂直**（台灣 / 亞洲法遵、繁中合約、特定產業 SOP）退守；(2) Agent Builder 模式擴散 = 「指定 vertical 的 agent 範本市集」是 indie 新 distribution；(3) 對台灣 / 亞洲區，巨頭多偏英語 / 美法系——在地語言 / 法規 vertical 仍有 12 個月窗口 | 機會：(1) 寫「Harvey / Camunda Agent Builder 後，indie 在哪些窄垂直還守得住」內容；(2) 對在地客戶開「繁中合約 / 台灣法遵 agent 範本」productized $1.5K–$3K；**威脅**：做「通用 legal / 流程 agent」無在地化差異的 indie，12 個月內被平台 builder 吃 | [TechCrunch — best AI agents 2026](https://www.producthunt.com/categories/ai-agents) / [The New Stack — Anthropic/OpenAI Wall Street agents](https://thenewstack.io/anthropic-openai-wall-street-ai-agents-developers/) / [AI Agent Store — weekly agent news](https://aiagentstore.ai/ai-agent-news/this-week) |

## 🛠 新興 AI 工具

| 工具 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | -------- | ---- | ---------------- | -------- |
| **`@supabase/server`**（五月開發者更新） | 跨 runtime 後端 SDK | 一套處理 auth / client 建立 / CORS / context 注入，跑 Edge Functions / Vercel Functions / Deno / Bun / Cloudflare Workers | 隨 Supabase 用量；SDK 本身 OSS | 第一個 Supabase 官方「一份 code 跨 5 個 runtime」SDK——不必各 runtime 各寫 boilerplate；對打自寫 adapter / 各家 starter | 跑 Supabase 的 indie 本週試裝一條 edge endpoint；做 voice / agent edge SaaS 的把各 runtime auth/CORS 收斂成一份；順手用 Data API 新開關收 table 暴露面 |
| **Vercel AI Gateway + Qwen 3.7 Max / `vercel flags split` / `vercel alerts`**（5 月） | LLM router + feature flag + 監控 | Qwen 3.7 Max（Alibaba）進 Gateway 當 coding/office agent foundation；`flags split` 設權重流量切分；`alerts` CLI 拿 anomaly 細節 | 隨 AI Gateway + Vercel 計費 | Qwen 3.7 Max 是 router 新一格（中文 / coding 強）；flags split + alerts 把 A-B + 監控收進 CLI、省第三方 | 跑 multi-LLM router 的本週把 Qwen 3.7 Max 加進「同 prompt × N 家」對比；做漸進式發佈的用 `flags split` 取代自寫權重邏輯 |
| **Camunda ProcessOS**（5/20 closed beta） | agentic 流程平台 | discover / re-engineer / 持續優化 business process，把流程變成 agentic workflow | 企業授權（closed beta、SKU 未公布） | 把「流程挖掘 + agent 編排」合一、對打單點 agent + 傳統 BPM | 做 SMB 流程自動化 consulting 的本週申請 beta、評估「ProcessOS 沒覆蓋的在地流程」當差異化；做通用流程 agent 的注意被平台化壓 |
| **Anthropic Claude Security 公測**（5/1 起、5 月持續）🔄 | repo 安全掃描 | 用 Opus 4.7 掃 codebase 找漏洞 + 建議 patch、追 data flow / 跨檔互動；排程 / 定向掃 + 稽核整合、多階段驗證壓 false positive | 隨 Claude Enterprise（Team / Max 隨後）；**無需 API 整合或自寫 agent** | 不像 OpenAI Daybreak 需打 sales early access，Claude Security **admin console 直接開**——對打 GitHub Advanced Security / Snyk / Semgrep | 跑 Claude Enterprise 的本週在 admin console 開、對自家 repo 排一次掃；做 SMB「上線前 repo 安全 audit」的把它與 OpenAI Daybreak / Microsoft RAMPART 並列三件 baseline 賣 |
| **Cloudflare D1 via Supabase Wrappers**（五月更新） | 跨資料庫查詢 | 從 Supabase Postgres 直接查 Cloudflare D1（serverless SQLite） | 隨 Supabase + Cloudflare 計費 | 把「Postgres 主庫 + edge SQLite」接成一條查詢面、省自寫同步 | 跑 Cloudflare Workers + Supabase 雙棧的 indie 評估用 Wrapper 取代自寫資料同步；注意 5/30 K2.5→K2.6 切換同期測 |

## 💡 SaaS 點子

### 點子 1：「Spark / ChatGPT agent / Claude 三家個人 agent」接入與隱私決策表 + 設定服務 🆕

- 痛點來源：5/26 當週 Gemini Spark 對美國 AI Ultra 開放 beta（$100/月、深接 Workspace、high-stakes 先問再做、雲端常駐）——個人 / SMB 第一次要決定「開哪家 personal agent、接哪些 app、資料邊界在哪、誰會先問再動手」；三家（Spark / ChatGPT agent / Claude）連接器、權限模型、隱私邊界、誰先問再做各不同，但沒有結構化中性對比；大廠官方頁偏「我家強」、媒體偏功能 review，不為「個人 / 5 人團隊要不要開、怎麼設」寫
- 目標客群：對 SMB / 個人賣 AI 顧問 / 設定服務的 1–5 人 indie；重隱私 / 法遵的小團隊（診所、事務所、工作室）；自己寫「為什麼用 X agent」內容拉客的 dev creator
- 技術複雜度：2/5（內容 + 設定顧問為主，連接器配置另計）
- 預估 MRR：$2K–$8K
- 競品弱點：(1) 三家官方偏自家視角、無中性 connector / 隱私對比；(2) 媒體 review 偏「能做什麼」不為「該不該開、怎麼設稽核」；(3) Indie / X 散件 hot take 無結構化決策表
- 切入建議：(1) **「三家個人 agent 接入 + 隱私 + high-stakes 邊界決策表」PDF + Notion 範本** $29——含 connector 清單、資料邊界、誰先問再做、稽核設定 checklist；(2) **1:1 設定 1 小時** $99——對你家 Workspace / 工具堆疊設一次安全 connector；(3) **5+ seat 團隊 productized $500–$1.5K**——含設定 + 內部教育 + 30 天 hot fix；(4) Discord 月 $19——track 三家 agent connector / 隱私變動

### 點子 2：「`@supabase/server` 跨 runtime + edge agent」starter + 遷移服務 🆕

- 痛點來源：Supabase 五月更新推 `@supabase/server`，一套處理 auth / client / CORS / context 跨 Edge Functions / Vercel / Deno / Bun / Cloudflare Workers——但現存 indie 多在各 runtime 各寫一份 boilerplate；想跑 edge agent / voice SaaS（低延遲）卻沒有「一份 code 跨 runtime + 接 LLM + Data API 細粒度暴露」的乾淨 starter；官方 doc 偏「這個 API 怎麼用」、不給「edge agent 完整骨架」
- 目標客群：跑 Supabase 的 1–10 人 indie；做 edge / voice / 即時互動 SaaS 的；想把多 runtime boilerplate 收斂的工程團隊
- 技術複雜度：3/5（要熟 `@supabase/server` + 各 runtime 差異 + Data API 開關 + LLM 接入）
- 預估 MRR：$3K–$10K
- 競品弱點：(1) Supabase 官方範例偏單一 runtime；(2) 各家 starter（Vercel / Cloudflare）偏自家 runtime、不跨；(3) 散件教學無「edge agent + Data API 暴露面治理」完整骨架
- 切入建議：(1) **GitHub OSS starter「`@supabase/server` 跨 runtime edge agent」** 免費 lead magnet + **$39 進階版**（含 Data API 開關範本 + Cloudflare D1 Wrapper + auth/CORS 收斂）；(2) **1:1 遷移 1 小時** $99——把你家多 runtime boilerplate 收斂成一份；(3) **5+ seat productized $800–$2K**——含遷移 + 暴露面稽核 + 回滾；(4) 月 retainer $99——track Supabase runtime / Data API 變動

### 點子 3：「Figma Design Agent → design token / code handoff」橋接 SaaS 🆕

- 痛點來源：5/20 Figma Design Agent 上線（canvas 內 generate / edit、free beta、OpenAI + Anthropic 雙接）——但 agent **留在 canvas 內**、輸出落地成自家 design system / 前端 code 仍是人 + 工具的縫；做 design-to-code 的 indie 不能只「生 mockup」（被原生 agent 壓），但「把 Figma agent 輸出對齊既有 design token / 元件庫 / 框架（React / Tailwind / shadcn）」的 handoff 仍缺乾淨方案
- 目標客群：有設計系統的 1–10 人產品團隊 / agency；做 design-to-code / design ops 的 indie；前端外包工作室
- 技術複雜度：3/5（要熟 Figma API + design token 對齊 + 前端框架輸出）
- 預估 MRR：$3K–$12K
- 競品弱點：(1) Figma 原生 agent 偏「在 canvas 內編輯」、不管你家 token / 框架對齊；(2) 既有 design-to-code 工具偏「從零生成」、不對齊既有元件庫；(3) 散件方案無「agent 輸出 → 既有 design system」橋接
- 切入建議：(1) **「Figma agent 輸出對齊你家 design token + 框架」audit + 範本** $99——含 token 映射、元件對齊 checklist；(2) **handoff PoC** $1K–$3K——把你家 1 條 flow 從 Figma agent 輸出接到 React / Tailwind / shadcn code；(3) **5+ seat productized retainer $1K/月**——持續對齊 + design system 同步；(4) 內容稿（Figma agent free beta 7 天上手 + 落地 code 的縫怎麼補）拉客

## 🧰 工具堆疊更新

- **如果你跑 Supabase 後端**：本週把 **`@supabase/server`** 試裝一條 edge endpoint（跨 Edge Functions / Vercel / Deno / Bun / Cloudflare Workers 一份 boilerplate）、用 **Data API per-table / per-function 開關**收 table 暴露面；雙棧（Cloudflare Workers + Supabase）的評估 **D1 Wrapper**；同時 **5/30 K2.5→K2.6 切換倒數 4 天**——staging 跑一輪 K2.6 相容 + 確認帳單影響
- **如果你跑 multi-LLM router**：本週把 **Qwen 3.7 Max**（Vercel AI Gateway）加進「同 prompt × N 家」對比（coding / office workflow agent 定位、中文場景值得測）；用 **`vercel flags split`** 取代自寫權重分流、**`vercel alerts`** CLI 收 anomaly
- **如果你做個人 / SMB AI 顧問**：本週起把 **Gemini Spark（$100 AI Ultra beta、5/26 美國開放）** 加進客戶選型——對「Workspace 重度 + 想要 proactive agent」客戶是新選項；對「非 Google 生態」客戶強調 Spark 不接、indie 垂直 agent 還在
- **如果你做 design / 前端**：本週試 **Figma Design Agent（free beta、不吃 credit）**、評估「agent 輸出 → 自家 design token / code」handoff 的縫；雙接 OpenAI + Anthropic 的設計可參考做 model-agnostic
- **如果你做 repo 安全 / agent ops**：把 **Anthropic Claude Security（5/1 公測、Enterprise admin console 直接開、Opus 4.7 掃 + patch）** 與 **OpenAI Daybreak**（需 sales early access）+ **Microsoft RAMPART / Clarity**（OSS）並列三件 baseline——對 SMB 賣「上線前過 3 件 safety baseline」
- **如果你做流程自動化 consulting**：申請 **Camunda ProcessOS**（5/20 closed beta）、評估「平台沒覆蓋的在地流程 / 繁中 SOP」當差異化；別跟巨頭拼通用流程 agent

## ⚡ 今日行動建議

- [ ] 跑 Supabase 的：今日試裝 `@supabase/server` 一條 edge endpoint + 跑一輪 Data API 暴露面盤點（45 分鐘）
- [ ] **5/30 Cloudflare K2.5→K2.6 倒數 4 天**：今日 staging 跑 K2.6 相容性 + 帳單影響估算（30 分鐘）
- [ ] 跑 multi-LLM router 的：今日把 Qwen 3.7 Max 加進 Vercel AI Gateway、跑「同 prompt × N 家」7 天月帳對比（30 分鐘）
- [ ] 做個人 / SMB AI 顧問的：今日寫「Spark / ChatGPT agent / Claude 三家接入 + 隱私決策表 v0.1」（45 分鐘）
- [ ] 做 design / 前端的：今日開 Figma Design Agent（free beta）跑 1 條最常用 flow、記錄「輸出落地 code 的縫」（30 分鐘）
- [ ] 跑 Claude Enterprise 的：今日在 admin console 開 Claude Security、對自家 repo 排一次掃（20 分鐘）
- [ ] **5/31 GH-600 cert 截止剩 5 天**：今日決定要不要報名 + 排 prep（10 分鐘）
- [ ] **Anthropic $30B round 本週將收**：今日更新「為什麼押 Claude」客戶 deck 加「$30B 到帳、12 個月確定性」一條（20 分鐘）

## ⏳ 待觀察

- **Gemini Spark beta 14 天視窗（5/26–6/9）**：(1) 美國以外（含台灣 / 亞洲）開放時程；(2) connector 是否擴 Google 生態以外（Notion / Slack / 第三方）；(3) high-stakes「先問再做」實測是否有誤觸 / 越權 horror story；(4) Spark $100 定價對 ChatGPT / Claude 個人 agent 是否引發跟進降價
- **Anthropic $30B round 公告後 14 天**：(1) 5/27–6/2 正式公告是否同步揭新 enterprise credit / startup program；(2) 是否撞 6/2–6/3 Microsoft Build 同期搶版面；(3) OpenAI confidential IPO filing 是否回應
- **Supabase 五月更新 + 5/30 K2.5→K2.6 疊加**：(1) `@supabase/server` 首週社群 edge runtime 相容 horror story；(2) 5/30 K2.5→K2.6 切換當日帳單跳升實測；(3) Data API 細粒度開關是否冒「誤關 table 導致前端 400」回報
- **Figma Design Agent free beta 視窗**：(1) GA 後 AI credit 計價公布、free beta 何時收；(2) 「canvas agent → code handoff」社群是否冒第三方橋接工具；(3) 雙接 OpenAI + Anthropic 的 model 選擇是否開放使用者指定
- **垂直 agent 平台化（Harvey 500+ agent / Camunda ProcessOS）30 天**：(1) Agent Builder 模式是否擴到法律 / 流程以外 vertical；(2) 在地語言 / 法規 vertical（台灣 / 亞洲）是否冒 indie 已上線案例；(3) 巨頭 builder 是否開放第三方上架 agent 範本（影響 indie distribution）
- **倒數時間鎖**：5/30 Cloudflare K2.5→K2.6（4 天）/ 5/31 GH-600 cert（5 天）/ 6/2–6/3 Microsoft Build（7–8 天）/ 6/10–6/11 Code w/ Claude Tokyo（15–16 天）/ 6/15 Anthropic Agent SDK Credit Pool（20 天）/ 6/18 Gemini CLI sunset（23 天）/ 7/1 Postgres 14→17（36 天）

[^gemini-spark]: Google 在 2026 I/O 發表的個人 AI 代理產品，定位為常駐雲端、主動運作的「24/7 助理」，可串接 Gmail、Docs 等服務並代為起草與監看；隨 Gemini 旗艦模型推出，屬消費級 personal agent 範疇。

[^antigravity]: Google 用來驅動其代理產品的底層執行框架（harness），負責規劃、調度工具與多步驟任務的運行環境；Spark 即建構於其上，也對外作為開發者打造代理應用的基礎。

[^supabase-server]: Supabase 推出的後端 SDK，目標是用同一份程式碼處理身分驗證、用戶端建立、CORS 與請求脈絡注入，並可跨多種伺服器執行環境運行，省去為每個 runtime 各寫一套樣板的工夫。

[^qwen]: 阿里巴巴推出的大型語言模型版本，主打程式撰寫與辦公文書類工作流的代理基礎能力，常被列入多模型路由的比較選項之一，在中文與 coding 場景表現受關注。

[^processos]: Camunda 推出的流程自動化平台，主打將既有商業流程挖掘、重構並持續優化成可由代理執行的工作流，把流程探勘與代理編排合而為一，發表時為封閉測試階段。

[^gh600]: 一項以代理式 AI 開發為主題的開發者認證考試，當時處於 beta 報名階段並設有截止日；通過者可作為相關開發能力的證明，常與開發者大會時程連動安排備考。

## 📚 引用來源

1. [Google unveils Gemini 3.5 and AI agent Gemini Spark | CNBC](https://www.cnbc.com/2026/05/19/google-ai-ultra-gemini-spark-omni.html) — 2026-05-19
2. [Google introduces Gemini Spark, a 24/7 agentic assistant | TechCrunch](https://techcrunch.com/2026/05/19/google-introduces-gemini-spark-a-24-7-agentic-assistant-with-gmail-integration/) — 2026-05-19
3. [The Gemini app becomes more agentic, delivering proactive 24/7 help | Google Blog](https://blog.google/innovation-and-ai/products/gemini-app/next-evolution-gemini-app/) — 2026-05-19
4. [Google's new AI agent can draft emails, monitor inbox and eventually spend money | VentureBeat](https://venturebeat.com/technology/googles-new-ai-agent-can-draft-your-emails-monitor-your-inbox-and-eventually-spend-your-money) — 2026-05 查閱
5. [Anthropic to Close Over $30 Billion Round as Soon as Next Week | Bloomberg](https://www.bloomberg.com/news/articles/2026-05-22/anthropic-to-close-over-30-billion-round-as-soon-as-next-week) — 2026-05-22
6. [Anthropic revenue explosive growth, profitable quarter | CNBC](https://www.cnbc.com/2026/05/20/anthropic-revenue-explosive-growth-ipo-profitable-quarter.html) — 2026-05-20
7. [Figma adds an AI assistant to its collaborative canvas | TechCrunch](https://techcrunch.com/2026/05/20/figma-adds-an-ai-assistant-to-its-collaborative-canvas/) — 2026-05-20
8. [The Figma Agent is Here | Figma Blog](https://www.figma.com/blog/the-figma-agent-is-here/) — 2026-05-20
9. [Figma Partners With OpenAI And Anthropic To Launch In-house AI Agent | Dataconomy](https://dataconomy.com/2026/05/21/figma-ai-design-agent-openai-anthropic-integrations/) — 2026-05-21
10. [Developer Update — May 2026 | Supabase Changelog](https://supabase.com/changelog/45702-developer-update-may-2026) — 2026-05 查閱
11. [Vercel Release Notes — May 2026 | Releasebot](https://releasebot.io/updates/vercel) — 2026-05 查閱
12. [Planned model deprecations on Workers AI (K2.5→K2.6, May 30) | Cloudflare Changelog](https://developers.cloudflare.com/changelog/post/2026-05-08-planned-model-deprecations/) — 2026-05-08
13. [Anthropic's Claude Security emerges from closed preview to scan your codebases | The New Stack](https://thenewstack.io/anthropics-claude-security-beta/) — 2026-05 查閱
14. [Claude Security enters public beta with Opus 4.7 vulnerability scanning | Help Net Security](https://www.helpnetsecurity.com/2026/05/04/anthropic-claude-security-public-beta/) — 2026-05-04
15. [What Anthropic and OpenAI launched in 72 hours has Wall Street paying attention | The New Stack](https://thenewstack.io/anthropic-openai-wall-street-ai-agents-developers/) — 2026-05 查閱
