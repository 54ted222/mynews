---
title: 每日創業情報 — 2026-05-19
date: 2026-05-19
tags: 創業情報, AI 產業, SaaS
summary: 雙活動同日進行中（Google I/O Day 1 + Code w/ Claude London）；Anthropic 5/12 Bloomberg 揭談中 $30B / $900B 估值，若成立超 OpenAI $852B；Recursive Superintelligence 5/13 $650M 帶 Nvidia / AMD / GV 出 stealth、$4.65B 估值；Linux Foundation Agentic AI Foundation 接手 MCP + Goose v1.26 + Peekaboo macOS 自動化；Microsoft Build 2026 改 6/2–6/3 開＋GH-600 Agentic AI Developer 認證 beta 開放、5/31 前考 80% 折扣；Supabase CLI 2.100.0 同步三重時間鎖；Stripe Atlas 5/1 公布 100K 累計 incorporation + Q1 +130% YoY。
keywords: Anthropic $30 billion fundraise $900 billion valuation Bloomberg May 12 2026 Dragoneer Greenoaks Sequoia Altimeter, Recursive Superintelligence Richard Socher Peter Norvig Tim Shi $650 million stealth $4.65 billion Nvidia GV AMD May 13 2026, Linux Foundation Agentic AI Foundation MCP Goose AGENTS.md donation OpenAI Anthropic co-found, Goose v1.26 Peekaboo macOS Computer Controller llama.cpp local inference offline, Microsoft Build 2026 San Francisco Fort Mason June 2 3 GH-600 Agentic AI Developer certification beta 80 percent discount, Supabase CLI 2.100.0 release May 18 2026 pg_graphql Postgres 17 migration, Stripe Atlas 100000 incorporations Q1 2026 130 percent YoY founder growth, Google I/O 2026 keynote May 19 10am PT Gemini Spark Omni Aluminium OS Veo 4 livestream, Code with Claude London May 19 2026 livestream extended May 20 independent developers, Hightouch $150M Series D $2.75B valuation agentic marketing April 29 2026, OpenAI Codex mobile ChatGPT app iOS Android May 14 2026 4 million weekly users, AAIF Daily Agentic newsletter Linux Foundation MCP server 500 plus registry, Anthropic Q1 2026 annualized revenue $44 billion 80x growth Dario Amodei, Claude for Small Business 15 agentic workflows QuickBooks PayPal HubSpot Canva Docusign May 13 2026
---

# 每日創業情報 — 2026-05-19

## 🎯 今日 TL;DR

- **雙活動「今日進行式」（5/19 同日）**：(1) **Google I/O Day 1 keynote 10:00 AM PT（= 5/20 01:00 Asia/Taipei）**——昨日 leak 4 大主軸（Gemini 3.2 Flash / Omni / Spark / Aluminium OS）今天揭曉；提醒：Gemini 3.2 Flash 已於 **5/5 在 iOS 與 AI Studio 端「靜默」上架**[^32flashleak]、leak 推估 input **$0.25 / M、output $2.00 / M**（比 Gemini 3 Flash 便宜近 33%）；(2) **Code w/ Claude London**（13:00 BST = 20:00 Asia/Taipei）——額外開 5/20 extended session 給「independent developers + early-stage founders」做 managed agents / memory / multi-agent system / agent battles hands-on
- **Anthropic 談中 $30B / $900B 估值（Bloomberg 5/12 揭，本週談判中）**：Dragoneer / Greenoaks / Sequoia / Altimeter 共領、預期月底前簽 term sheet；若成立直接超 OpenAI 3 月的 $852B、近 3x 自 2 月 $380B Series 估值；Anthropic Q1 2026 annualized revenue 約 **$44B**[^q1arr]（年化 80x YoY，Dario 5/6 SF 場揭）、1,000+ 客戶年付 $1M+、Fortune 10 中 8 家是穩定客戶
- **Recursive Superintelligence 5/13 出 stealth：$650M / $4.65B valuation**：Richard Socher（You.com、前 Salesforce Chief Scientist）+ Peter Norvig + Tim Shi（Cresta co-founder）+ Yuandong Tian / Tim Rocktäschel / Alexey Dosovitskiy / Josh Tobin / Caiming Xiong / Jeff Clune 八人創辦團；Nvidia / GV / Greycroft / AMD 入股；目標自我改進 AI 模型「Level 1 autonomous training」mid-2026 公開
- **Linux Foundation Agentic AI Foundation（AAIF）接手 MCP + Goose v1.26 / Peekaboo**：OpenAI 與 Anthropic 共同 co-found 的 AAIF[^aaif]接收 MCP、goose、AGENTS.md 三大 open-source 專案；Goose **v1.26** 內建 **llama.cpp 本地推論**（不必 Docker / Ollama / API key）+ **Computer Controller 重寫成 Peekaboo**[^peekaboo]（macOS see-then-click-then-type 桌面自動化）；AAIF 同期推 **Daily Agentic** newsletter（每週 5 次）；首屆 AGNTCon + MCPCon 9/10–11 東京、9/17–18 阿姆斯特丹、10/22–23 聖荷西
- **Microsoft Build 2026 改 6/2–6/3 SF Fort Mason + GH-600 Agentic AI Developer 認證 beta（5/31 前 80% 折扣）**：Build 兩天主軸「AI production systems + agentic workflows + model-cost control」；GitHub 同期推 **GH-600 認證**[^gh600]——role-based、考的不是寫 code 而是「operate、supervise、integrate AI agents into production」，首批 100 名 5/31 前考 8 折；另 5/15 GitHub Copilot 把 **Grok Code Fast 1** 全面下架、5/14 enterprise usage API 開放 team-level metrics
- **Supabase CLI 2.100.0 同日釋出（5/18）+ 跨 runtime Auth SDK**：CLI 2.100.0 同步昨日 brief「三重時間鎖」（5/18 pg_graphql 預設關 / 5/22 OAuth 2.1 token 200 / 7/1 Postgres 14→17）；另推**跨 runtime Auth SDK**——同一 client 跑 Edge Functions / Vercel Functions / Deno / Bun / Cloudflare Workers + **GitHub secret key Push Protection** 預防 commit 前洩 key

## 🔄 昨日追蹤

### 5/18 brief Google I/O leaks → 5/19 即時觀察 🔄 追蹤更新

距 10:00 AM PT keynote 剩 ~8 小時（Asia/Taipei 16:00）。**新訊號**：Gemini 3.2 Flash 早在 **5/5** 已悄悄在 iOS Gemini app 與 AI Studio 上架，BuildFastWithAI / PasqualePillitteri / msn 等家本週確認可用、leak 推估 input **$0.25 / M、output $2.00 / M**（比 Gemini 3 Flash 的 $0.50 / $3.00 便宜近 33%）；亦即「3.2 Flash 在 Vertex / API 5/16–17 已起跑、5/19 keynote 視為既成事實」的劇本機率高。下個觀察錨點：keynote 後 6 小時內第一波 social benchmark（Codeforces / SWE-bench / 同 prompt × Claude Haiku 4.5 / GPT-5.5 Instant / Kimi K2.6 / DeepSeek V4 Flash 對比）。

### 5/18 brief Code w/ Claude London 同日 🔄 追蹤更新

5/19 London 場確認 **livestream + 錄影**全部開放；同步加開 **5/20 Extended London**——專為「independent developers + early-stage founders」設的 hands-on：shipping managed agents、memory implementation、writing evaluations、composing multi-agent systems、agent battles；5/6 SF 場已揭 Multiagent Orchestration / Outcomes / Dreaming、Claude Code 5-hour rate limit 雙倍 + Pro / Max 解 peak-hours 限縮、SpaceX 算力夥伴（300 MW + 220K NVIDIA GPUs）。下個觀察錨點：London Day 1 是否揭 EU / UK 區位本地化案例（GDPR、Data residency、UK AI Act 對 SMB / indie 的影響）。

### 5/18 brief a16z Speedrun SR007 截止 🔄 追蹤更新

5/17 23:59 PT 截止後 ~36 小時——24h 內 a16z / Speedrun Substack 無補新公告，預期 5/27 前後第一波接受信 / 拒信寄出；同期 YC Spring 2026 RFS 8 條題目（AI for PM / 政府 AI / metal mill / AI 對沖基金 / AI-native agencies / 穩定幣 / AI-guided physical work / AI dev tools）已在公布中、indie 可雙軌投。下個觀察錨點：5/27 前後拒信 / 接受信內容是否曝出「5-week ARR」這條 bar 的具體計算邏輯。

### 5/18 brief Notion Developer Platform 14 天熱期 🔄 追蹤更新

距 5/13 公布 6 天——24h 內官方無補「Notion credits 換算成 token / minute / agent invocation」細節（8/11 計費上線最關鍵的單位仍模糊）；社群尚未爆出第三方 Workers vertical 模板市集出貨。今日新訊號：Hightouch 5/12 揭 $150M Series D / $2.75B valuation（4/29 公布）、ARR 接近 $100M、用 AI agent 為 enterprise 推 marketing campaign——「自動化 marketing operations 跑 AI agent」這條 vertical 被 enterprise 用 $100M+ ARR 驗證，可作為 Notion Workers vertical 模板「marketing automation」這一格的對標案例。

### 5/18 brief Supabase 5/18–7/1 三重時間鎖 🔄 追蹤更新

24h 內 Supabase 推 **CLI 2.100.0**（同日 5/18）同步昨日揭的三重時間鎖；另揭兩條新工具：(1) **跨 runtime Auth SDK**——同一 client 自動處理 Edge Functions / Vercel Functions / Deno / Bun / Cloudflare Workers 的 CORS / context injection / auth；(2) **GitHub secret key Push Protection**——commit 前自動掃 Supabase secret key，預防意外 push 上 GitHub。下個觀察錨點：5/22 後社群是否爆「自寫 OAuth client 解 HTTP 200 vs 201 status code 失敗」+ 5/30 撞 Cloudflare K2.5 → K2.6 alias 切換的「同日雙重壓力」 horror story。

## 📰 AI 產業動態

| 事件 | 影響 | 機會/威脅 | 來源 |
| ---- | ---- | --------- | ---- |
| **Anthropic 談中 $30B 募資、$900B post-money 估值（Bloomberg 5/12 揭、月底前簽）**：Dragoneer / Greenoaks / Sequoia / Altimeter 共領、近 3x 自 2 月 $380B Series；Q1 2026 annualized revenue 約 **$44B**（80x YoY）、1,000+ 客戶年付 $1M+；若成立直接超 OpenAI 3 月的 $852B 估值、躍居 AI lab 估值第一 | 對 indie：(1) 估值 + 算力（SpaceX 300 MW / 220K GPU 已簽）連動 = **Claude API 後續 12 個月供給結構穩定**、6/15 Agent SDK Credit Pool 與 5/30 Cloudflare K2.5→K2.6 兩條的供給面 lockup 訊號偏強；(2) 80x ARR YoY 把 enterprise 客戶 lock-in 速度公開為產業 benchmark、indie 的「我家 SaaS 在 Claude 內」生態位站位窗口縮短；(3) 配合 5/13 Claude for Small Business 15 workflows，Anthropic 從 enterprise 向下打 SMB 的訊號明顯——indie 做「SMB-tier AI 工具」要先在 Claude for Small Business 沒覆蓋的 vertical 站位 | 機會：(1) 寫「Anthropic 估值 / 算力 / Q1 ARR 三條線 12 個月推演」深度內容（5/19–6/15 熱期）；(2) 對 SMB 客戶開「Claude for Small Business 15 workflows 是否能取代你家 SaaS」 audit retainer $500；(3) 替 indie 寫「Q3 2026 Claude API 供給壓力」backup plan（DeepSeek V4 / Kimi K2.6 / Mistral 3.5 router）；威脅：靠「我家是 Claude wrapper」做 sales pitch 的 indie 在 Claude for Small Business / Cowork 覆蓋擴張下逐漸無 moat | [Bloomberg — Anthropic $30B at $900B](https://www.bloomberg.com/news/articles/2026-05-12/anthropic-in-talks-to-raise-30-billion-at-900-billion-valuation) / [TechFundingNews](https://techfundingnews.com/anthropic-30b-fundraise-900b-valuation-mega-round/) / [Cryptonomist](https://en.cryptonomist.ch/2026/05/15/anthropic-funding-round-valuation/) / [TradingKey — Trillion-Dollar Ranks](https://www.tradingkey.com/analysis/stocks/us-stocks/261889029-anthropic-funding-30b-valuation-trillion-claude-code-revenue-growth-ipo-spacex-colossus-tradingkey) / [BigGo Finance](https://finance.biggo.com/news/202605141020_Anthropic_900B_Valuation_Funding) |
| **Recursive Superintelligence 5/13 出 stealth：$650M / $4.65B valuation**：Richard Socher 領 8 人 founding team（Peter Norvig、Tim Shi、Yuandong Tian、Tim Rocktäschel、Alexey Dosovitskiy、Josh Tobin、Caiming Xiong、Jeff Clune）；Nvidia / GV / Greycroft / AMD 入股；目標「Level 1 autonomous training system」——AI 自動找自家弱點、redesign 修補、無人介入；mid-2026 公開首版 | 對 indie：(1) Norvig + 6 名 ex-DeepMind / OpenAI / Meta researcher 出走、加上 Nvidia 同時投 frontier lab 與「自我改進」競爭者，等於 **2026 H2 frontier lab 「6 → 8+」結構成形**、indie 的多模型 router 設計時槽位數要從 6 拉到 8；(2) 「Level 1 autonomous training」若 mid-2026 公開首版，對「我家是 fine-tune 中介」「我家替你做 RFT」「我家做 evaluation harness」這三類 indie business model 是高威脅——14 個月內可能被「模型自己 fine-tune 自己」吃掉中介位；(3) 估值 $4.65B / pre-product 把「AI lab seed round」門檻拉到「八位數團隊 + 億美金 + 大 GPU 廠商」、indie 不該再幻想做 frontier lab 對手 | 機會：(1) 寫「Recursive Superintelligence Level 1 / Level 2 / Level 3 自我改進階梯」翻譯型技術內容（5/19 後 14 天熱期）；(2) 對「我家 fine-tune SaaS」客戶開「12 個月 self-improving model 衝擊」audit；(3) 做 indie 級「不被 self-improving 吃掉的應用層 5 條 niche」內容；威脅：「我家做 RFT / fine-tune / eval harness 工具給其他 AI 廠」這條 indie 路線 12 個月內 moat 蒸發 | [TechCrunch — What happens when AI starts building itself](https://techcrunch.com/2026/05/14/what-happens-when-ai-starts-building-itself/) / [TheNextWeb — $650M $4.65B](https://thenextweb.com/news/recursive-superintelligence-self-improving-ai-funding) / [Tech.eu — stealth $650M](https://tech.eu/2026/05/13/recursive-superintelligence-emerges-from-stealth-with-650-million-raise/) / [The Decoder](https://the-decoder.com/ai-startup-recursive-emerges-from-stealth-with-650-million-to-build-self-improving-ai/) / [TechFundingNews — Recursive UK](https://techfundingnews.com/uk-ai-startup-recursive-hits-4-65b-valuation-with-650m-raise-from-nvidia-and-gv/) |
| **Linux Foundation Agentic AI Foundation（AAIF）接手 MCP + Goose v1.26 / Peekaboo macOS 自動化**：OpenAI 與 Anthropic 共同 co-found；Anthropic 捐 MCP、Block 捐 goose、AGENTS.md（OpenAI / Google / Cursor 早期共識文檔）三大專案進 AAIF 治理；Goose v1.26 內建 **llama.cpp 本地推論**（不必 Docker / Ollama / API key、air-gapped 友善）+ **Computer Controller 改 Peekaboo**（macOS see-then-click-then-type、支援標註截圖 / UI 元素辨識 / 鍵盤 / 滾動 / 拖曳 / menu / dialog）；AAIF 推 **Daily Agentic** newsletter（每週 5 次）；首屆 AGNTCon + MCPCon 排 9/10–11 東京 / 9/17–18 阿姆斯特丹 / 10/22–23 聖荷西 | 對 indie：(1) MCP / goose / AGENTS.md 進 Linux Foundation 等於「open agent protocol 三件套」進入「會持續更新 + 多家共治」的中性治理結構、indie 5/19 起把這三條當 long-term standard 投資、產品設計上 MCP 接口優先級拉到第一；(2) Goose v1.26 對 indie 是「免費 + offline + macOS 自動化」三合一——做 desktop automation SaaS 的（Zapier / TextExpander / Keyboard Maestro 替代品）週期被壓縮、Peekaboo 把「local AI agent 操作 macOS GUI」變廉價可組合 building block；(3) AAIF 治理結構後 GitHub MCP server registry / Smithery / FastMCP 等 registry 戰爭預期 6 月底前定首批治理規則、indie 站位「我家 MCP server」的 distribution 路徑變清楚 | 機會：(1) 替 SMB 寫「Goose v1.26 + Peekaboo 取代你家 RPA」內容（5/19 後 21 天）+ macOS-only 自動化 demo 影片；(2) 自家 SaaS 補一條 **MCP server** 入口（5/19 起 14 天內出 v0.1）佔 AAIF 治理前的 distribution slot；(3) 接 SMB 做「Goose v1.26 + 自家 MCP server」productized integration $1.5K–$5K；威脅：靠「我家是另一個 Claude Desktop 啟動器」做 GTM 的 indie 在 Goose v1.26 免費 + 本地推論下被洗下 | [Linux Foundation — AAIF formation](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation) / [Anthropic — Donating MCP](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation) / [OpenAI — co-founds AAIF](https://openai.com/index/agentic-ai-foundation/) / [Linux Foundation Newsletter May 2026](https://www.linuxfoundation.org/blog/linux-foundation-newsletter-may-2026) / [Solo.io — AAIF changes everything](https://www.solo.io/blog/aaif-announcement-agentgateway) / [Let's Data Science](https://letsdatascience.com/news/linux-foundation-consolidates-mcp-under-agentic-ai-foundatio-bc37043c) |
| **Microsoft Build 2026 確認 6/2–6/3 SF Fort Mason + GH-600 Agentic AI Developer 認證 beta（5/31 前 80% 折扣）**：Build 主軸三條「AI production systems + agentic workflows + model-cost control」；**GH-600 認證**——非 coding test，考的是「operate / supervise / integrate AI agents 進 production」、首批 100 名 5/31 前考享 8 折；同期 5/15 GitHub Copilot 全面下架 **Grok Code Fast 1**；5/14 enterprise admins 開放 team-level usage metrics API | 對 indie：(1) Build 2026 在 GitHub HQ 旁、且時間落在 Google I/O 後 14 天，等於微軟有 14 天時間用 I/O 動作再寫 Build keynote、indie 做 GitHub 整合 SaaS 的對 5/27 後 Build agenda 微調保留警覺；(2) GH-600 把「會 manage agent」變 individual certification、indie 可在自家 LinkedIn / Indie Hackers / 自家網站掛這張認證當「agent ops engineer」轉型 signal——若做 agent ops consulting 對 SMB 賣 audit / retainer，5/31 前考完是低成本門檻動作；(3) Grok Code Fast 1 下架 → Copilot 對 multi-LLM 策略偏「集中 Claude / GPT 主軸」、做 Copilot wrapper 的 indie 把 Grok backup 移出 router | 機會：(1) 寫「GH-600 認證 80% 折扣 5/31 前考完 5 條 prep」內容（5/19 後 12 天熱期）；(2) 對 SMB 開「agent ops engineer 12 週上崗」productized 課程 $499；(3) 做「Build 2026 6/2–6/3 觀察清單 vs Google I/O 5/19–20 比較」內容稿；威脅：靠 Grok Code Fast 1 為 router cheap 路徑的 Copilot wrapper 5/15 後失去廉價檔位 | [GitHub — Microsoft Build 2026](https://github.com/resources/events/github-microsoft-build26) / [Wokeey — Build 2026 dates](https://www.wokeey.com/events/microsoft-build/) / [Microsoft GH-600 cert beta](https://abit.ee/en/artificial-intelligence/microsoft-github-gh-600-agentic-ai-developer-certification-ai-agents-mcp-2026-en) / [Lensmor — Build 2026 sessions](https://www.lensmor.com/event-guides/microsoft-build-2026-attendee-guide) / [GitHub Release Notes May 2026 — Releasebot](https://releasebot.io/updates/github) |
| **Supabase CLI 2.100.0 同日釋出（5/18）+ 跨 runtime Auth SDK + GitHub Push Protection**：CLI 2.100.0 同步昨日揭三重時間鎖、是首個官方 migration 工具；新 SDK 一個 client 跑 Edge Functions / Vercel Functions / Deno / Bun / Cloudflare Workers（auth / CORS / context injection 一致）；secret key 在 GitHub commit 前自動偵測攔截 | 對 indie：(1) 5/18 起做 Supabase boilerplate / SaaS template 不再需要自寫 migration scanner、CLI 2.100.0 即官方版；(2) 跨 runtime Auth SDK 在 Edge Functions 跑同一段 client code 是 indie SaaS template「一份程式碼跨 4 個 runtime」最低摩擦點；(3) GitHub Push Protection 對 indie 是「免費 secret leak 防護」一條、現有 OSS Supabase boilerplate repo 本週起該更新範例強制走 Push Protection | 機會：(1) 對 boilerplate 賣家寫「Supabase CLI 2.100.0 + 跨 runtime SDK + Push Protection 範本升級」教學（5/19 後 14 天）；(2) 對 Supabase 客戶開「2.100.0 migration audit 30 分鐘 1:1」固定價 $99；(3) 做「跨 runtime SaaS template—— Edge Functions / Vercel / Cloudflare 各跑一份」付費範本 $99；威脅：自己自寫 PostgREST client 的客戶在 5/22 後 status code parse 不更新會壞 | [Supabase CLI 2.100.0 GitHub Releases](https://github.com/supabase/cli/releases) / [Supabase Changelog May 2026](https://supabase.com/changelog/45702-developer-update-may-2026) / [Supabase Release Notes — Releasebot](https://releasebot.io/updates/supabase) |

## 🛠 新興 AI 工具

| 工具 | 類別 | 用途 | 定價 | 差異點 | 採用建議 |
| ---- | ---- | ---- | ---- | ------ | -------- |
| **Goose v1.26 + Peekaboo macOS extension**（5 月，AAIF 治理） | open-source local AI agent + desktop automation | llama.cpp 本地推論（不必 Docker / Ollama / API key、可 air-gapped）+ macOS GUI 自動化（標註截圖 / UI 元素辨識 / 鍵盤 / 滾動 / 拖曳 / menu / dialog） | **完全免費 + 開源**；無 API call quota（用本地模型）；接雲端模型走自家 API key | 第一個把「local LLM + macOS GUI automation」做成 production-ready 可組合 building block；Anthropic / OpenAI / Block 共治、Linux Foundation 治理結構穩定 | 做 macOS desktop automation SaaS（Zapier / TextExpander / Keyboard Maestro 替代品）的 indie 5/19 起把 Goose + Peekaboo 列為 baseline；做 indie agent SaaS 的本週試「local Goose + 自家 MCP server」組合替既有 ChatGPT-only 流程降本 |
| **Supabase CLI 2.100.0**（5/18） | DB / Auth migration & runtime tooling | 同步 5/18 pg_graphql 預設關 / 5/22 OAuth 2.1 token / 7/1 Postgres 17 三重時間鎖；自動 audit + 修補 PR；跨 runtime Auth SDK；GitHub Push Protection | 隨 Supabase 訂閱（免費版即可用）；CLI 本體免費 | 第一個官方 single-tool 同時做 (a) breaking change scan + (b) 跨 runtime auth client + (c) secret key Push Protection 三件事 | 跑 Supabase 後端的 indie 本週起 1 步：升 CLI 2.100.0、跑 audit、確認跨 runtime auth client 不衝突；boilerplate 賣家本週更新教學示範新 SDK |
| **AAIF Daily Agentic**（5 月） | 每週 5 次中性化 agentic AI brief | Linux Foundation 治理的 agentic AI 每日 brief、不打 vendor 立場 | 免費 | 第一個由 OS foundation 出版、不被 vendor 牽動的 agentic AI 新聞流；對比 Ben's Bites / TLDR AI 偏 vendor news letter 是中性 baseline | indie 每日早讀 baseline、5/19 起取代部分 Ben's Bites / TLDR AI 的 agentic AI 區塊；做研究 / 競品調研的 indie 可把 Daily Agentic 設成 RSS 進自家 reading queue |
| **GH-600 Agentic AI Developer Certification（beta）**（5 月、5/31 前 8 折） | individual cert for agent ops | 不考 coding；考「operate / supervise / integrate AI agents into production」、含 evaluation / rollback / cost monitoring / MCP 整合 | beta 期首批 100 名 5/31 前考享 **80% 折扣**；正式價尚未公布 | 第一張由 Microsoft + GitHub 共同推、針對「agent ops engineer」角色的 individual certification；考的是 ops 知識而非寫 code | 做 indie agent ops consulting / dev tool SaaS / SMB AI 整合服務的本週起評估 5/31 前考完（成本門檻低）；可在自家 LinkedIn / 網站 / 提案中當第三方背書 |
| **Recursive Superintelligence Level 1 system**（mid-2026 預期公開） | self-improving model harness | AI 自動找自家弱點、redesign 修補、無人介入；ideation / implementation / validation 全自動 | 尚未公開；預期首版 mid-2026 限定研究 partner | 首家由 frontier-lab 級團隊 + Nvidia / AMD 雙頭 backing 公開做 recursive self-improving model 的對外研究計劃 | indie **不需直接接** Level 1 system；本週起重點是評估自家 SaaS 在「12 個月後模型可能自我 fine-tune」下的 moat 是否仍成立——做 fine-tune / RFT / eval harness 中介 SaaS 的本週做 12 個月衝擊 audit |
| **Gemini 3.2 Flash**（5/5 已在 iOS / AI Studio、5/19 預期正式揭） | budget multimodal model | leak 推估 input **$0.25 / M、output $2.00 / M**——比 Gemini 3 Flash（$0.50 / $3.00）便宜近 33%；對打 Claude Haiku 4.5 / GPT-5.5 Instant | leak 價格未公開正式；5/19 後 7 天內可能進 Vertex / API GA | 第一個 Google 在 I/O 主舞台公開為「指定給 agent 路由」的 Flash 系列；5/5 已悄悄上 iOS / AI Studio | 跑 multi-LLM router 的 indie 5/19 keynote 確認後立刻接 API key 槽位；跑同 prompt × Anthropic / OpenAI / DeepSeek V4 Flash / Mistral 3.5 / Kimi K2.6 / Gemini 3.2 Flash 六家對比，預期 router 平均 token 成本 5/30 後降 18–30% |

## 💡 SaaS 點子

### 點子 1：「Anthropic $30B / $900B 估值衝擊下的 Claude 生態位 audit」productized service 🆕

- 痛點來源：5/12 Bloomberg 揭 Anthropic 談 $30B / $900B、預期月底前 term sheet 落地；對 indie 而言這直接寫進兩條未來情境——(a) Claude API 12 個月供給穩定但價格 / quota 政策可能跟著上市路線收緊、(b) Claude for Small Business 15 workflows 配合 Cowork 對 SMB 下打、indie 的 SMB wrapper SaaS niche 被擠壓；現存 Claude wrapper 賣家沒有「估值衝擊 → 我家 next 12 個月 moat」結構化 audit
- 目標客群：跑 Claude wrapper / Claude Code consulting / Anthropic API 為主 backbone 的 1–10 人 indie SaaS / agency；做 Claude for Small Business 替代或補強 vertical 的 SMB SaaS 創業者；做 multi-LLM router 但 80% 流量在 Claude 的 indie
- 技術複雜度：2/5（內容 + 顧問為主）
- 預估 MRR：$3K–$10K
- 競品弱點：Indie Hackers / X / Twitter 圈散件 hot take 無結構化「估值 + 算力 + Q1 ARR 三條線推演」；Bloomberg / 大報財經偏 enterprise 視角不適用 indie；現存 AI consulting 多偏 Fortune 500、不為 1–10 人 indie 設計
- 切入建議：(1) **productized audit pack** $300——含 90 分鐘 1:1 + 4 條情境模擬（估值 stage、算力 stage、Cowork 擴張 stage、IPO prep stage）+ 自家 SaaS 12 個月 moat checklist；(2) 月 $49 retainer——每月一次 30 分鐘 + Anthropic 重要事件 Slack alert + 替代 LLM router 配置；(3) 自家 newsletter「Anthropic 雙週」+ 12 個月 deep dive PDF $19；(4) 對 SMB 客戶開「Claude for Small Business 15 workflows 是否能取代你家 SaaS」 fix-price audit $500

### 點子 2：「Goose v1.26 + Peekaboo + 自家 MCP server」macOS-only 自動化 vertical 模板包 🆕

- 痛點來源：5 月 Goose v1.26 內建 llama.cpp 本地推論 + Peekaboo macOS GUI 自動化、AAIF 接手治理；但官方 demo 限 generic（截圖 / 點按 / 鍵盤）、無 vertical 模板（記帳、客服、會計、報表、設計 review、跨 SaaS workflow）；現存 macOS 自動化 SaaS（Keyboard Maestro / TextExpander / Raycast）尚未把「local LLM + macOS GUI 自動化」做成可組合產品；做 Zapier / Make.com 整合的 indie 看到「免費 + 本地 + macOS-only」三條會受擠壓
- 目標客群：跑 macOS 工作流主力的 indie / agency / 設計師 / 會計 / 跨 SaaS 工作者；做 Mac-only SaaS 的 5–50 人團隊；想把 ChatGPT-only workflow 改成 local-first 的 indie
- 技術複雜度：3/5
- 預估 MRR：$3K–$12K
- 競品弱點：Goose / Block / AAIF 官方範例偏 generic；Keyboard Maestro 等老牌 macOS 自動化不接 local LLM；做 Zapier wrapper 的 indie 沒 macOS-only 走法；Raycast 第三方 extension 缺 local LLM + GUI 自動化組合
- 切入建議：(1) **50 個 macOS-only vertical 範本**——記帳對帳、Notion / Figma / Slack / 信件跨應用自動化、設計 review、會議筆記、業務報表：單模板 $19、全包 $99 lifetime；(2) **「Goose + Peekaboo + 自家 MCP server」整合包** 對 SMB 客戶 productized $1.5K（含 5 條 workflow + 30 分鐘 onboarding）；(3) Discord 月 $9，社群換 vertical 範本 + 互助 onboarding；(4) 對 Zapier / Make 重度用戶做「local-first 替代」90 天 retainer $1K–$3K

### 點子 3：「自我改進 AI 衝擊下、indie 應用層 12 個月 moat audit + 5 條 niche 站位」內容 + 顧問 🆕

- 痛點來源：5/13 Recursive Superintelligence 出 stealth + $650M / $4.65B / Nvidia + AMD 雙頭 backing；目標 mid-2026 公開「Level 1 autonomous training system」；對 indie 而言 14 個月內可能被「模型自我 fine-tune」吃掉這幾個生態位：(a) fine-tune SaaS、(b) RFT 中介、(c) eval harness 工具、(d) prompt management 工具、(e) human-in-the-loop labeling SaaS；現存 AI 顧問 / Indie Hackers 文章對「self-improving 衝擊 indie」無結構化分析
- 目標客群：做 fine-tune / RFT / eval harness / prompt manager / labeling SaaS 的 1–10 人 indie；做 AI consulting 並向客戶推薦 fine-tune 的 agency；想 pivot 到「不被 self-improving 吃掉」niche 的 AI tooling 創業者
- 技術複雜度：2/5（內容 + 顧問為主）
- 預估 MRR：$2K–$8K
- 競品弱點：Indie Hackers / X 散件 hot take；Bloomberg / TechCrunch 偏 frontier lab 視角；現存 AI consulting 多偏 enterprise；無 indie-tier「12 個月 moat audit + niche 站位 5 條」productized 內容
- 切入建議：(1) **PDF / 30 分鐘讀物** $19——含 12 個月 self-improving 階梯（Level 1 / 2 / 3）+ 5 條「不被吃掉」niche（vertical domain expertise、regulatory compliance、人類 in-loop critical 決策、即時資料 streaming、實體世界 grounding）+ 自家 SaaS pivot checklist；(2) **1:1 audit retainer** $300——90 分鐘 + 自家 SaaS niche 站位 + 12 個月 pivot plan；(3) 月 $49 retainer——每月一次 30 分鐘 + self-improving AI 重要事件 Slack alert；(4) 對 OSS eval harness 維護者（如 Langfuse / Braintrust 第三方）開「12 個月衝擊評估」付費諮詢 $500

## 🧰 工具堆疊更新

- **如果你跑 Claude API / Claude Code 為主 backbone**：本週掃 Anthropic 估值衝擊下 12 個月 supply / 政策變化情境；Claude Code 升最新版（新加 `terminalSequence` hook、`CLAUDE_CODE_PLUGIN_PREFER_HTTPS`、`claude project purge` 等）；同步在 router 加 Gemini 3.2 Flash + DeepSeek V4 Flash 槽位降風險
- **如果你做 macOS-only 工作流**：5/19 起把 Goose v1.26 + Peekaboo 試裝、跑 5 條最常用的 macOS GUI 流程（截圖 / 跨 app 拖曳 / 鍵盤巨集 / 點按 menu / dialog 確認）；做 Zapier / Make 替代者本週試「Goose local + 自家 MCP server」組合
- **如果你跑 Supabase 後端**：升 CLI 2.100.0 跑 audit；testing 跨 runtime Auth SDK 在 Edge Functions / Vercel / Cloudflare Workers 是否一致；OSS / boilerplate 賣家本週更新 README 加 Push Protection 步驟
- **如果你做 agent / MCP server 開發**：5/19 起把 MCP server 列為「official open standard」對待（AAIF 治理後）；自家 SaaS 補一條 MCP server 入口（5/19 起 14 天內出 v0.1）；考慮 5/31 前考完 GH-600 cert beta（8 折）作為個人 signal
- **如果你跑 multi-LLM router / 在意月帳**：keynote 後立刻接 Gemini 3.2 Flash（leak 推估 input $0.25 / output $2.00 / M）API key 槽位；本週把 router 對應「Claude / GPT-5.5 / Gemini 3.2 Flash + 4 條開源（DeepSeek V4 / Mistral 3.5 / Kimi K2.6 / Qwen 3.6 Max）」配置寫進 yaml；保留 5/30 Cloudflare K2.5 → K2.6 alias 切換的觀察錨點
- **如果你做 SMB / SaaS 對 SMB 銷售**：5/13 Claude for Small Business 15 workflows + 5/12 Anthropic $30B 估值兩條疊加 → 5/19 起做 SMB 客戶「Claude for Small Business 是否能取代你家 SaaS」audit；找 Anthropic 15 workflows 沒覆蓋的 5 條 niche（vertical 法遵、亞洲多語、繁中 / 日 / 韓會計、加密 / Web3、非標準 SaaS 工具整合）對焦
- **如果你想衝 Build 2026 / GH-600**：5/19 起評估 5/31 前考完 GH-600 cert beta（8 折）；6/2–6/3 Build 2026 直播時段（Asia/Taipei 凌晨）排進 calendar；同步觀察 5/27–5/31 Microsoft 是否補 Build agenda 反映 Google I/O 動作

## ⚡ 今日行動建議

- [ ] **5/19 10:00 AM PT（= 5/20 01:00 Asia/Taipei）即時觀看 Google I/O Day 1 keynote**——列「我家 SaaS 在 Gemini Spark / Omni / 3.2 Flash / Aluminium OS 各條下的 3 條曝險」（30 分鐘）
- [ ] **5/19 13:00 BST（= 20:00 Asia/Taipei）即時觀看 Code w/ Claude London livestream**——預先 5/20 extended session 報名（free livestream）（15 分鐘）
- [ ] 升 Supabase CLI 到 2.100.0、跑一次 audit + 確認跨 runtime Auth SDK 不衝突（30 分鐘）
- [ ] 自家若做 macOS 工作流：裝 Goose v1.26 + Peekaboo、試 5 條最常用 macOS 自動化流程（45 分鐘）
- [ ] 自家若主要做 Claude wrapper：本週寫「Anthropic $30B / $900B / Claude for Small Business」3 條 12 個月衝擊 audit 草稿（60 分鐘）
- [ ] 自家若做 fine-tune / RFT / eval harness：本週寫「Recursive Superintelligence Level 1 / 2 / 3 下我家 moat checklist」（45 分鐘）
- [ ] 5/31 前評估考 GH-600 Agentic AI Developer cert beta（首批 100 名 8 折）；報名通過後安排 14 天 prep（10 分鐘 + 後續 prep 時間）

## ⏳ 待觀察

- **5/19 Google I/O Day 1 + 5/20 Day 2 兩天**：(1) Gemini Spark 是否落地、agent 對 SaaS wrapper 的覆蓋面 / 多語 / 商業帳 / 加密帳 4 條 niche；(2) Gemini Omni 是否揭定價、是否「第一家 frontier provider 原生 video output」；(3) Aluminium OS 是否揭 dev portal、Fall 2026 Googlebook 首發品牌；(4) Veo 4 是否在 keynote 出（leak 推估 4K native + ID embedding + cinematic camera 控制）；(5) Gemini 3.2 Flash 是否正式公開 token pricing（leak 推估 input $0.25 / output $2.00 / M）
- **Code w/ Claude London Day 1 + 5/20 Extended（5/19–20）**：(1) 是否揭 EU / UK 區位本地化 case study（GDPR / Data residency / UK AI Act）；(2) 5/20 extended 是否揭 indie / early-stage founder 專屬功能或 pricing 政策；(3) London 是否在 SF 揭的 Multiagent Orchestration / Outcomes / Dreaming 三件再揭新功能
- **Anthropic $30B / $900B 估值 14 天**：(1) 5/26–5/31 是否簽 term sheet；(2) 月底前是否揭新 API quota / 政策連動；(3) Claude for Small Business 15 workflows 6/15 後是否擴張新 connector / vertical
- **Recursive Superintelligence Level 1 30 天**：(1) 是否在 6 月揭首批研究 partner 名單；(2) Nvidia / AMD 雙頭 backing 後是否影響其他 frontier lab 算力供給；(3) 「self-improving model」對 fine-tune / RFT / eval harness 中介 SaaS 的對外衝擊內容是否本週爆社群討論
- **AAIF 治理 14 天**：(1) MCP server registry 戰爭（Smithery / FastMCP / MCP Bundles）是否在 6 月底前定首批治理規則；(2) AAIF Daily Agentic 訂閱數成長；(3) AGNTCon 9 月 3 場是否吸引第三方 conference 出走過來
- **Microsoft Build 6/2–6/3 + GH-600 5/31 截止**：(1) 首批 100 名 GH-600 cert 是否被 indie / agency 包走（觀察 cert 取得率 + 5/31 後考試湧入量）；(2) Build 2026 agenda 是否在 5/27–5/31 反映 Google I/O 動作；(3) Grok Code Fast 1 下架後 Copilot 主軸 LLM 是否再添 Claude / GPT 以外第三模型
- **Supabase 5/22 / 5/30 / 7/1 三個錨點**：(1) 5/22 後社群「自寫 OAuth client 解 HTTP 200 vs 201」horror story 是否爆；(2) 5/30 撞 Cloudflare K2.5 → K2.6 alias 切換、雙重壓力下指標 lockup；(3) 7/1 Postgres 14 自動升 17 前是否有大規模 dep / extension 不相容回報

[^32flashleak]: Gemini 3.2 Flash 是 Google 預定在 5/19 I/O Day 1 keynote 揭曉的 budget 級多模態模型；5/5 已被觀察到「靜默」上架 iOS Gemini app 與 AI Studio，BuildFastWithAI、PasqualePillitteri、msn 等家本週確認可叫得到，被視為「未公告但已可用」的提前洩漏案例。

[^q1arr]: Annualized run-rate revenue（ARR）是把最近一期收入年化推估的口徑；Dario Amodei 於 5/6 Code w/ Claude SF 場揭 Anthropic Q1 2026 已達約 $44B、相當於 YoY 80x 成長，但屬「年化」而非實際全年入帳，常被用來描述高速擴張期的 SaaS / AI lab 規模。

[^aaif]: Agentic AI Foundation（AAIF）是 Linux Foundation 2026 年 5 月成立的中性治理組織，由 OpenAI 與 Anthropic 共同 co-found；負責接手 Model Context Protocol（MCP）、Block 的 goose、AGENTS.md 三大開源專案，目標是讓 agent 協定脫離單一 vendor 主導、進入多家共治結構。

[^peekaboo]: Peekaboo 是 Block 旗下 Goose v1.26 把舊版 Computer Controller 重寫後的 macOS 桌面自動化模組，採「see-then-click-then-type」流程：先截圖標註 UI 元素、再下鍵盤 / 滑鼠 / menu / dialog 指令；可搭配 llama.cpp 本地推論離線跑，無需 Docker、Ollama 或 API key。

[^gh600]: GH-600 Agentic AI Developer Certification 是 Microsoft 與 GitHub 於 2026 年 5 月推出的 beta 個人認證，考的是 operate、supervise、integrate AI agents 進 production 的 ops 知識（含 evaluation、rollback、cost monitoring、MCP 整合），不是寫 code；首批 100 名於 5/31 前報考享 80% 折扣。

## 📚 引用來源

1. [Anthropic In Talks to Raise $30 Billion at $900 Billion Valuation | Bloomberg](https://www.bloomberg.com/news/articles/2026-05-12/anthropic-in-talks-to-raise-30-billion-at-900-billion-valuation) — 2026-05-12
2. [Anthropic eyes $30B round at $900B valuation just months after closing record Series G | TechFundingNews](https://techfundingnews.com/anthropic-30b-fundraise-900b-valuation-mega-round/) — 2026-05 查閱
3. [Anthropic funding round valuation: $30B deal lifts value near $900B | Cryptonomist](https://en.cryptonomist.ch/2026/05/15/anthropic-funding-round-valuation/) — 2026-05-15
4. [Anthropic in Talks for Massive $30 Billion Funding, Valuation May Join Trillion-Dollar Ranks | TradingKey](https://www.tradingkey.com/analysis/stocks/us-stocks/261889029-anthropic-funding-30b-valuation-trillion-claude-code-revenue-growth-ipo-spacex-colossus-tradingkey) — 2026-05 查閱
5. [Anthropic Eyes $900B Valuation in $30B Funding Round, Outpacing OpenAI | BigGo Finance](https://finance.biggo.com/news/202605141020_Anthropic_900B_Valuation_Funding) — 2026-05-14
6. [What happens when AI starts building itself? | TechCrunch](https://techcrunch.com/2026/05/14/what-happens-when-ai-starts-building-itself/) — 2026-05-14
7. [Recursive Superintelligence raises $650m at $4.65bn valuation | TheNextWeb](https://thenextweb.com/news/recursive-superintelligence-self-improving-ai-funding) — 2026-05 查閱
8. [Recursive Superintelligence emerges from stealth with $650M raise | Tech.eu](https://tech.eu/2026/05/13/recursive-superintelligence-emerges-from-stealth-with-650-million-raise/) — 2026-05-13
9. [AI startup Recursive emerges from stealth with $650 million to build self-improving AI | The Decoder](https://the-decoder.com/ai-startup-recursive-emerges-from-stealth-with-650-million-to-build-self-improving-ai/) — 2026-05 查閱
10. [UK AI startup Recursive hits $4.65B valuation with $650M raise from Nvidia and GV | TFN](https://techfundingnews.com/uk-ai-startup-recursive-hits-4-65b-valuation-with-650m-raise-from-nvidia-and-gv/) — 2026-05 查閱
11. [Linux Foundation Announces the Formation of the Agentic AI Foundation (AAIF) | Linux Foundation](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation) — 2026-05 查閱
12. [Donating the Model Context Protocol and establishing the Agentic AI Foundation | Anthropic](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation) — 2026-05 查閱
13. [OpenAI co-founds the Agentic AI Foundation under the Linux Foundation | OpenAI](https://openai.com/index/agentic-ai-foundation/) — 2026-05 查閱
14. [Linux Foundation Newsletter: May 2026](https://www.linuxfoundation.org/blog/linux-foundation-newsletter-may-2026) — 2026-05 查閱
15. [Linux Foundation Consolidates MCP Under Agentic AI Foundation | Let's Data Science](https://letsdatascience.com/news/linux-foundation-consolidates-mcp-under-agentic-ai-foundatio-bc37043c) — 2026-05 查閱
16. [Why the Agentic AI Foundation (AAIF) Changes Everything for MCP | Solo.io](https://www.solo.io/blog/aaif-announcement-agentgateway) — 2026-05 查閱
17. [Microsoft Build 2026 | GitHub](https://github.com/resources/events/github-microsoft-build26) — 2026-05 查閱
18. [Microsoft Build 2026 Moves to San Francisco: Dates, Tickets & What to Expect | Wokeey](https://www.wokeey.com/events/microsoft-build/) — 2026-05 查閱
19. [Microsoft launches GH-600 Agentic AI Developer beta exam | abit.ee](https://abit.ee/en/artificial-intelligence/microsoft-github-gh-600-agentic-ai-developer-certification-ai-agents-mcp-2026-en) — 2026-05 查閱
20. [Microsoft Build 2026: Sessions & Speakers | Lensmor](https://www.lensmor.com/event-guides/microsoft-build-2026-attendee-guide) — 2026-05 查閱
21. [GitHub Release Notes — May 2026 | Releasebot](https://releasebot.io/updates/github) — 2026-05 查閱
22. [Supabase CLI Releases | GitHub](https://github.com/supabase/cli/releases) — 2026-05 查閱
23. [Developer Update — May 2026 | Supabase Changelog](https://supabase.com/changelog/45702-developer-update-may-2026) — 2026-05 查閱
24. [Supabase Release Notes — May 2026 | Releasebot](https://releasebot.io/updates/supabase) — 2026-05 查閱
25. [Gemini 3.2 Flash: Everything We Know Before I/O 2026 | BuildFastWithAI](https://www.buildfastwithai.com/blogs/gemini-3-2-flash-release-2026) — 2026-05 查閱
26. [Gemini 3.2 Flash: Google's Model Surfaces in iOS App and AI Studio | Pasquale Pillitteri](https://pasqualepillitteri.it/en/news/2013/gemini-3-2-flash-leak-ios-ai-studio-2026-en) — 2026-05 查閱
27. [Gemini 3.2 Flash quietly leaks ahead of Google I/O 2026 | MSN](https://www.msn.com/en-us/news/other/gemini-32-flash-quietly-leaks-ahead-of-google-io-2026/gm-GM76BA32DD) — 2026-05 查閱
28. [Code with Claude London — May 19, 2026 | Claude](https://claude.com/code-with-claude/london) — 2026-05 查閱
29. [Code with Claude: Extended London — May 20, 2026 | Claude](https://claude.com/code-with-claude/london-extended) — 2026-05 查閱
30. [Code with Claude comes to San Francisco, London, and Tokyo | Claude](https://claude.com/blog/code-with-claude-san-francisco-london-tokyo) — 2026-05 查閱
31. [Code with Claude SF 2026: What Anthropic Actually Shipped | Blake Crosley](https://blakecrosley.com/blog/code-with-claude-sf-2026-recap) — 2026-05 查閱
32. [Google I/O 2026 | Google Developers](https://io.google/2026/) — 2026-05 查閱
33. [Google I/O 2026 Live Blog | Android Central](https://www.androidcentral.com/phones/live/google-i-o-2026-live-blog-android-17-android-xr-glasses-and-all-the-gemini-ai-news) — 2026-05 查閱
34. [Google I/O 2026: Gemini Omni, Spark & Android XR Launch Expected | Analytics Insight](https://www.analyticsinsight.net/news/google-io-2026-gemini-omni-spark-android-xr-launch-expected-in-biggest-ai-push-yet) — 2026-05 查閱
35. [Veo 4 Release Date: 70% Odds for Google I/O 2026 | DEV Community](https://dev.to/tokenmixai/veo-4-release-date-70-odds-for-google-io-2026-veo-31-lite-live-500e) — 2026-05 查閱
36. [The $2.75B bet that SaaS isn't extinct, but ripe for disruption | SF Standard](https://sfstandard.com/2026/05/12/hightouch-ai-startup-saas-future/) — 2026-05-12
37. [Hightouch Raises $150M Series D at $2.75B Valuation | The SaaS News](https://www.thesaasnews.com/news/hightouch-raises-150m-series-d-at-2-75b-valuation) — 2026-05 查閱
38. [Stripe Atlas hits 100,000 incorporations — Q1 2026 up 130% Y/Y | Dealroom](https://app.dealroom.co/news/note/stripe-atlas-hits-100-000-incorporations-q1-2026-up-130-y-y-1) — 2026-05 查閱
39. [Stripe Atlas: 130% More Startups in Q1 2026 | MindStudio](https://www.mindstudio.ai/blog/stripe-atlas-130-percent-startup-incorporations-q1-2026) — 2026-05 查閱
40. [Anthropic's Code With Claude Announces Managed Agents, Proactive Workflows, Capability Curve | InfoQ](https://www.infoq.com/news/2026/05/code-with-claude/) — 2026-05 查閱
41. [Live blog: Code w/ Claude 2026 SF | Simon Willison](https://simonwillison.net/2026/May/6/code-w-claude-2026/) — 2026-05-06
42. [Introducing Claude for Small Business | Anthropic](https://www.anthropic.com/news/claude-for-small-business) — 2026-05-13
43. [Claude for small business: 15 new AI workflows | Rolling Out](https://rollingout.com/2026/05/13/claude-for-small-business-15-new/) — 2026-05-13
44. [Claude Code Changelog | GitHub](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) — 2026-05 查閱
45. [OpenAI Codex Is Now on Mobile: What Developers Need to Know | BuildFastWithAI](https://www.buildfastwithai.com/blogs/openai-codex-mobile-chatgpt-app-2026) — 2026-05-14
