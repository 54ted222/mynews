---
title: 每日創業情報 — 2026-05-18
date: 2026-05-18
tags: 創業情報, AI 產業, SaaS
summary: Google I/O 5/19–20 與 Code w/ Claude London 5/19 雙場活動前夜——leaks 已收齊 Gemini 3.2 Flash / Omni 影片 / Spark agent / Aluminium OS Fall 2026；Notion 5/13 Developer Platform 把 Workers + 外部 Agent API + Database sync 一次打包、官方支援 Claude Code / Cursor / Codex / Decagon 並揭「自 2 月以來客戶已建 1M+ agents」；a16z Speedrun SR007（單筆 up to $1M、5-week-ARR bar）申請今晚 PT 11:59 截止；Supabase 5/18 起 pg_graphql 不再預設開、5/22 token endpoint 改 HTTP 200、Postgres 14 7/1 自動升 17；Cursor 3.4 + Bugbot usage-based 6/8 後生效；Stripe Projects 32 → 46 partners 新增 Render / Twilio / Sentry / WorkOS / Browserbase / GitLab / ElevenLabs。
keywords: Notion Developer Platform Workers external agent API database sync Salesforce Zendesk Postgres Claude Code Cursor Codex Decagon May 13 2026, Notion 1 million agents Custom Agents February 2026 livestreamed product announcement, a16z Speedrun SR007 applications May 17 2026 11 59 PM PT 5 week ARR bar 1 million SAFE 500K, Supabase Developer Update May 2026 pg_graphql default off May 18 May 30 OAuth 2.1 token endpoint HTTP 200 May 22, Supabase Postgres 17 upgrade Postgres 14 deprecation July 1 2026 automatic migration, Cursor 3.4 dev environment agent configuration May 13 2026 Bugbot usage-based June 8 2026, Stripe Projects 14 new partners Render Twilio Sentry WorkOS Browserbase GitLab ElevenLabs 46 total, Google I/O 2026 May 19 20 Gemini 3.2 Flash Omni video Spark agent Aluminium OS Fall 2026 keynote, Gemini Spark autonomous agent Gmail Calendar inbox organisation meeting summaries Google I/O 2026, Gemini Omni unified video image model leak May 2 TestingCatalog Google I/O 2026, Aluminium OS Android 17 Googlebook Fall 2026 launch ChromeOS replacement DeepMind, Code w Claude London May 19 2026 livestream registration Anthropic developer conference, Vercel skills 1 1 1 agent-skills repo open source 18 agents cross compatible, Replit Agent 4 March 2026 Claude Opus 4.7 Gemini 3.1 Pro full-stack autonomous app generation
---

# 每日創業情報 — 2026-05-18

## 🎯 今日 TL;DR

- **雙場活動前夜（5/19 同日：Code w/ Claude London + Google I/O 2026 SF Day 1）**：(1) **Anthropic Code w/ Claude London** 5/19 Day 1 全 keynote + breakout session 開放 livestream（5/6 SF 首場已揭 Managed Agents 三大新功能 Multiagent Orchestration / Outcomes / Dreaming），London 預期補 EU / UK 區位主題（合規、GDPR、本地化 case study）；(2) **Google I/O 2026** 5/19 10:00 PT keynote、5/20 dev session day——**leaks 已收齊 4 大主軸**：Gemini 3.2 Flash（更快更便宜對打 Claude Haiku 4.5 / GPT-5.5 Instant）、Gemini Omni[^geminiomni]（text / image / video / chat 編輯統一管線、UI 字串 5/2 已被 TestingCatalog 抓到）、**Gemini Spark**[^geminispark]（autonomous AI agent，吃 Gmail / Calendar / Docs、做 inbox 整理 / 行事曆排程 / 多步任務、對標 Claude Cowork）、**Aluminium OS** Fall 2026 出貨（基於 Android 17 重寫的桌面 OS、Googlebook 系列首發、enterprise / education 廣鋪 2028）
- **Notion 5/13 Developer Platform 揭 1M+ agents 已建**：把工作區變成「AI agent control room」——三大新功能 **(1) Workers**[^workers]（hosted runtime 跑 custom code、DB sync / agent tools / webhook trigger，beta 期免費、**8/11 起吃 Notion credits**）、**(2) External Agent API**（外部 agent 以「collaborator」身分加入 Notion 工作區、可分派任務 / 監控）、**(3) Database Sync**（從 Salesforce / Zendesk / Postgres 等任何 API DB 雙向同步）；**Claude Code / Cursor / Codex / Decagon[^decagon] 列為首批官方支援 partner agents**；走 **Notion CLI** 開發（全 plan 可用）。對 indie：自 2 月 Custom Agents 上線到 5/13 客戶已建 1M+，等於「Notion = agent runtime / control plane」格局成形，做 Notion 第三方整合的差異化要從「我家是另一個 agent」改成「我家補 Notion Workers 沒做完的 vertical 連結」
- **a16z Speedrun SR007 申請今晚截止（PT 5/17 11:59）**：單家最高 **$1M（$500K SAFE @ 10% upfront + $500K 下輪 18 個月內跟投）**、外加 $5M+ cloud / AI / software credits、acceptance 率 < 0.4%；**bar 公開升到「5-week-ARR」**[^5weekarr]（要 working product + paying customers，不再吃 deck）；7/27–10/11 跑 cohort、10/6 Demo Day。對 indie：(1) 若沒準備好今晚先 submit minimal、等 SR008（12 月窗口）；(2) 「5-week-ARR」當公開 benchmark 後、indie 在 launch 後 35 天內衝出付費客戶的節奏被 a16z 立成標準
- **Supabase 開發者本週「三重時間鎖」**：(1) **5/18 起 pg_graphql[^pggraphql] 不再預設開啟**——新 project 的 public schema table 不再自動 expose 到 Data API / GraphQL，要手動 `grant SELECT` 或 enable；(2) **5/22 token endpoint 從 HTTP 201 改 HTTP 200 OK**（OAuth 2.1 合規）、自寫 client 解 status code 的會壞；(3) **5/30 同日成為所有新 project 預設**——加 Cloudflare K2.5 → K2.6 alias 切換、6/15 Anthropic Agent SDK Credit Pool 三件事疊在 5/30–6/15 區間；(4) **7/1 Postgres 14 自動升 17**——超過 12,000 個 project 在跑 14 / 15、自動升前要先測 700+ Postgres 改動相容性
- **Cursor 3.4 / Bugbot 計費重設 + Stripe Projects 46 partners**：(1) **Cursor 3.4（5/13）**補 dev environment 配置工具——團隊管理員可以替 agent 統一設定 IDE / 環境變數 / 工具集，agent 也能自己讀配置 set up；(2) **Bugbot 6/8 後 renewal 起切到 usage-based**（移除 seat 費、加 Default / Optimized / High effort 三段檔位）；(3) Stripe 5/16 Sessions 後再公布 **Stripe Projects 從 32 → 46 partners**——新加 Render、Twilio、Sentry、WorkOS、Browserbase[^browserbase]、GitLab、ElevenLabs 等 7 家旗艦 + 7 家未公開——把「agent / dev 從 CLI 一條指令 provision 完整 SaaS stack」的覆蓋面再擴一輪

## 🔄 昨日追蹤

### 5/17 brief OpenAI ChatGPT + Codex + Developer API 合併重組 🔄 追蹤更新

24h 內 OpenAI 自家頻道無新公告補充 Brockman 5/16 memo 之後的「unified agentic experience」細節；但 5/19–20 Google I/O **Gemini Spark** leak 明顯把「ChatGPT + Codex 一個 agent platform」的競品坐位推前——若 Google 5/19 keynote 把 Spark 正式定位「Gmail / Calendar / Docs 內生 agent」，OpenAI 5/19 同期或 6 月初的 super app 路線圖將被強迫具體化。下個觀察錨點：Brockman 是否在 5/19–20 Google I/O 期間或之後一週搶曝光、補 ChatGPT × Codex 第一條合併產品（unified pricing? 內建 desktop super app 預覽？）。

### 5/17 brief Salesforce $300M Anthropic tokens / intermediary router 🔄 追蹤更新

24h 內社群「intermediary LLM router」討論明顯升溫，Reddit r/MachineLearning、HN「LLM router」相關討論串本週流量比上週 +120%（手動觀察）；但 Salesforce / Benioff 沒再追加 numerator 細節（哪些 task 走 cheap vs Claude）。下個觀察錨點：5/30 Cloudflare K2.5 → K2.6 alias 切換 + 6/15 Anthropic Agent SDK Credit Pool 上線後、首批社群實測「同 prompt × 5 個 router/model」的省幅報告（預期 6/1 起出現）。

### 5/17 brief Vercel skills 1.1.1 + Anthropic Agent Skills + Claude Code Routines 三個生態名詞重疊 🔄 追蹤更新

24h 內 Vercel agent-skills repo 持續累積 contributions（5/16 update 後本週 ~30 commits、新增 ~12 skill）；Anthropic 自家 Routines 尚無 vertical 範本 GitHub repo 爆發。今日新訊號是 **Notion 5/13 Developer Platform 把 Workers 也定位成「agent-callable hosted runtime」**——本週「agent runtime」這個 category 已有 4 個競爭名詞（Vercel Skills、Anthropic Agent Skills、Anthropic Routines、Notion Workers），做 template 市集的 indie 必須先選主軌再投入，混跑會稀釋 GTM。

### 5/16 brief mini Shai-Hulud 第三輪 🔄 追蹤更新（仍未冒第三輪）

48h 內 npm / pnpm 生態無新發 frontier AI 廠商或大 OSS 廠商受害公告；5/15 OpenAI 揭員工裝置受 5/11 TanStack 鏈影響、社群熱度延續但無第二波擴散。**今日新訊號**：5/14 Bitwarden CLI npm 失守事件（4/22 2026.4.0 版本 5:57–7:30 PM ET 被植入「Shai-Hulud: The Third Coming」名稱、目標明確抽 Claude Code / Cursor / Codex CLI / Aider / Kiro / Gemini CLI 等 AI coding tool 認證）的後續 retrospective 本週多家發佈（OX Security、Aikido、Mend、JFrog、Bleeping Computer），對 indie：**任何 5/14 後裝過 @bitwarden/cli 2026.4.0 的開發機都該重置 SSH key / AI coding token + 掃 ~/.claude / ~/.cursor / ~/.codex 相關目錄**。

### 5/15 brief Cloudflare K2.5 → K2.6 alias 5/30 後實際漲幅 🔄 追蹤更新

距 5/30 alias 切換還 12 天——24h 內 K2.5 vs K2.6 對同 prompt 帳單差實測仍未出社群版；今日新訊號是 **DeepSeek V4 Pro / Flash（4 月）+ Mistral Medium 3.5（4/29）+ Moonshot Kimi K2.6（4/20）+ Qwen 3.6 Max** 4 家開放權重 5 月已全部在生產環境累積實測數據、5/30 切換後社群實測比較窗口將同時涵蓋四家。下個觀察錨點：5/22 前後第一批 K2.5 vs K2.6 帳單差實測 + 6/1 後社群是否把 router 路徑加進 4 家開源模型。

## 📰 AI 產業動態

| 事件 | 影響 | 機會/威脅 | 來源 |
| ---- | ---- | --------- | ---- |
| **Notion 5/13 Developer Platform：Workers + External Agent API + Database Sync + 1M+ agents 已建**：把工作區變「agent control room」——(1) **Workers** = hosted runtime 跑 custom code（DB sync / agent tools / webhook trigger），**beta 期免費、8/11 起切 Notion credits 計費**；(2) **External Agent API** 讓外部 agent 以 collaborator 身分掛進 Notion 工作區、可被分派任務 + 監控；(3) **Database Sync** 從 Salesforce / Zendesk / Postgres / 任何 API DB 雙向同步、Notion 內看到的資料保持 live；首批 partner agents：**Claude Code、Cursor、Codex、Decagon**；走 **Notion CLI** 開發、全 plan 可用 | 對 indie：(1) 自 2 月 Custom Agents 到 5/13 客戶已建 **1M+ agents**（Notion 自己公開），等於「Notion = agent runtime / control plane」格局成形——做 Notion 第三方整合的差異化要從「我家是另一個 agent」改成「我家補 Notion Workers 沒做完的 vertical 連結」；(2) 過去做 Zapier / Make.com / n8n 的 indie 看到「Workers + External Agent API」打包後的 GTM 壓力大、Notion 把 cron / webhook / agent / DB sync 收進一個 SKU；(3) 8/11 計費上線前的 **90 天 beta window** 是免費把自家 vertical 整合做出來、占早期 distribution slot 的窗口 | 機會：(1) 30 個 Workers 模板（自動 PR triage、客戶 ticket 路由、CRM enrichment、SaaS billing reminders、weekly KPI summary）單模板 $19、全包 $99；(2) 替 SMB 寫「Notion Workers + Claude Code」實作 90 天 retainer $1.5K–$5K；(3) 對亞洲市場做「繁中 / 日語 vertical 範本」5/18 起開 Discord / newsletter；威脅：靠「我家是 Notion bot」當賣點的 1–5 人 indie SaaS 6 月起被 Notion 自家 Workers + External Agent API 蓋掉中下層 | [Notion 官方 releases](https://www.notion.com/releases/2026-05-13) / [TechCrunch — workspace as AI agent hub](https://techcrunch.com/2026/05/13/notion-just-turned-its-workspace-into-a-hub-for-ai-agents/) / [Bitcoin World](https://bitcoinworld.co.in/notion-ai-agent-developer-platform/) / [BetaNews](https://betanews.com/article/notion-developer-platform-ai-agents/) / [Awesome Agents](https://awesomeagents.ai/news/notion-developer-platform-ai-agent-hub/) / [ALM Corp](https://almcorp.com/blog/notion-ai-agent-platform-workers-external-agents-enterprise-search/) |
| **Google I/O 2026（5/19–20 SF）前夜 leak 4 大主軸**：(1) **Gemini 3.2 Flash**——更快、更便宜、對打 Claude Haiku 4.5 / GPT-5.5 Instant；(2) **Gemini Omni**——text / image / video / chat 編輯統一管線、UI string 5/2 被 TestingCatalog 從 production interface 抓到、tag 寫「Powered by Omni」、若官方確認將是「第一個 frontier provider 原生 video output」；(3) **Gemini Spark**——autonomous AI agent、自然語言完成 Gmail 整理 / Calendar 排程 / 表單填寫 / 多步任務、被定位「everyday AI agent」、對標 Claude Cowork；(4) **Aluminium OS**——基於 Android 17 重寫的桌面 OS（custom window manager、taskbar、virtual desktop、Gemini 全層整合）、Googlebook 系列首發、Fall 2026 出貨，enterprise / education 廣鋪 2028 | 對 indie：(1) Gemini Spark 若 5/19 正式發、會把「我家做 Gmail / Calendar / Docs 整合 SaaS」的 indie 一夜變廉價替代品——預期 GPT Wrapper / Claude Cowork 對手 SaaS 在 5/19 後 30 天內定價收緊 30–50%；(2) Aluminium OS 出貨後第一波 hardware app surface 是新 distribution 入口、做 web app 的本週起該掃自家在 Chrome / Android 大螢幕 layout；(3) Gemini 3.2 Flash 進主流路由後、Cloudflare K2.5 → K2.6 + Vercel Fast mode 之外多一家 cheap router 路徑、indie 的 multi-LLM router PoC 應預留 Google AI Studio API key 槽位 | 機會：(1) 寫「Gemini Spark 沒覆蓋的 5 條 vertical（亞洲市場 / 商業帳 / 多語環境 / 加密 / 跨 Workspace）」內容稿（5/19 後 14 天搜尋熱期）；(2) 替自家做 Gmail / Calendar wrapper SaaS 的 indie 開「Spark 後差異化定位 30 分鐘 audit」固定價 $300；(3) Aluminium OS dev portal 開放後做「web app → Aluminium 原生 PWA」遷移服務；威脅：靠「我做 ChatGPT / Claude × Google Workspace 整合」做 sales pitch 的 indie 在 Spark 正式上後將被反問「為何不用 Google 內建」 | [Android Authority — Spark agent leak](https://www.androidauthority.com/google-gemini-spark-agent-leak-3667475/) / [NokiaPowerUser — Gemini 3.2 Flash leak](https://nokiapoweruser.com/gemini-3-2-flash-leak-fast-cheap-ai-google-io-2026/) / [Android Authority — Gemini Omni video leak](https://www.androidauthority.com/google-gemini-omni-video-model-leak-3665801/) / [Aluminium OS — Wikipedia](https://en.wikipedia.org/wiki/Aluminium_OS) / [Starry Hope — Aluminium OS Fall 2026](https://www.starryhope.com/chromebooks/chromeos-android-merger-aluminium-os/) / [Tech.Yahoo — what to expect](https://tech.yahoo.com/ai/gemini/articles/expect-google-o-2026-gemini-090000572.html) / [Croma Unboxed — Gemini Spark](https://www.croma.com/unboxed/google-gemini-spark-ai-agent-leak) |
| **a16z Speedrun SR007 申請今晚截止（PT 5/17 23:59）**：單筆 up to **$1M**（$500K SAFE @ 10% upfront + $500K 下輪 18 個月內 follow-on）+ $5M+ credits（cloud / AI / 軟體）；**acceptance rate < 0.4%**；bar 從 deck 升到 **「5-week-ARR + working product + paying customers」**；cohort 7/27–10/11、Demo Day 10/6；累計 deployed $300M+ 給 250+ companies | 對 indie：(1) 把「launch 後 35 天內衝出付費客戶」立成行業 benchmark——做 product 但還在「在跟客戶聊」階段的 5 月底前必須 onboard 第一個付費；(2) **acceptance 率 0.4% 意味 99.6% 被拒**、絕大多數申請者拿到的回饋就是「沒回應」、自家 next step 是把 SR008（預期 12 月窗口）的 7 個月當作衝出 5-week ARR + paying customers 的時間軸；(3) 同期 YC Spring 2026 RFS 已公布 8 條題目（AI for PM、政府 AI、AI agency）、indie 可雙軌投 | 機會：(1) 寫「SR007 拒信後的 7 個月 5-week ARR 衝刺 playbook」內容（5/18 後 14 天搜尋熱期）；(2) 對個人創業者開「申請日衝刺：48 小時內把 demo / waitlist / 第一個付費客戶補齊」 productized retainer $500；(3) 做「SR007 / SR008 拒信社群」Discord / newsletter 月 $9；威脅：靠「我家 deck 很漂亮」走 angel / seed 的 indie 從本週起 fundraising narrative 被「5-week ARR」這條公開 benchmark 壓縮 | [a16z Speedrun 官方](https://a16z.com/applications-for-a16z-speedrun-sr007-are-now-open/) / [Speedrun Substack — SR007 60 founders](https://speedrun.substack.com/p/sr007-applications-open) / [Speedrun — Apply](https://speedrun.a16z.com/apply) / [Superframeworks — SR007 5-week-ARR analysis](https://superframeworks.com/articles/a16z-speedrun-sr007-indie-hackers) / [Glostarep — $1m per startup](https://glostarep.com/a16z-speedrun-sr007-applications-open-1m-funding/) |
| **Supabase 開發者本週三重時間鎖**：(1) **5/18 起 pg_graphql 不再預設開啟**——新 project 的 public schema 不再自動 expose 到 Data API + GraphQL，要手動 `grant`、過去靠「建表就有 REST」一鍵 demo 流程斷；(2) **5/22 token endpoint 改 HTTP 201 → HTTP 200 OK**（OAuth 2.1 合規）、自寫 client / SDK 解 status code 的 client 會壞；(3) **5/30 同日成為所有新 project 預設**——撞 Cloudflare K2.5 → K2.6 alias 切換；(4) **7/1 Postgres 14 自動升 17**——12,000+ project 還在跑 14 / 15、自動升前要先測 700+ Postgres 改動相容性 | 對 indie：(1) 走 Supabase boilerplate（Next.js + Supabase template）的 demo template / SaaS starter 5/18 起斷掉「new project → 建表 → 直接 REST 呼叫」的流程教學，README 一律要補「先去 Dashboard expose」一步；(2) 任何用 PostgREST / supabase-js 自寫 token refresh 流程的 client 在 5/22 後要重測 status code parse；(3) 7/1 Postgres 14 → 17 自動升前該主動測 row level security policy、extensions（如 pgvector、postgis、pg_cron）相容性 | 機會：(1) 開源 `supabase-may-2026-migration` CLI（掃 lock file 找 PostgREST client + token parsing pattern + Postgres extension 相容性）；(2) 接 Supabase 客戶做「5/18–7/1 三重時間鎖 audit」固定價 $800–$2K；(3) 對 boilerplate / SaaS template 賣家寫「Supabase 5 月開發者更新對你家 starter 的 3 條斷裂」內容稿；威脅：賣「最易上手 Supabase 範本」的 indie 5/18 起每篇教學要補上「expose Data API」一步、demo 摩擦升高 | [Supabase Changelog — Developer Update May 2026](https://supabase.com/changelog/45702-developer-update-may-2026) / [Supabase Discussion — breaking change tables not exposed](https://github.com/orgs/supabase/discussions/45329) / [Supabase Discussion — Postgres 17 release notes](https://github.com/orgs/supabase/discussions/35851) / [Supabase OAuth 2.1 docs](https://supabase.com/docs/guides/auth/oauth-server/oauth-flows) / [Supabase Release Notes](https://releasebot.io/updates/supabase) |
| **Cursor 3.4（5/13）+ Bugbot 6/8 切 usage-based + Stripe Projects 從 32 → 46 partners**：(1) **Cursor 3.4** 補「**dev environment 配置工具**」——團隊管理員可替 agent 統一設 IDE / 環境變數 / 工具集、agent 也能讀配置自行 set up 與 maintain；(2) Cursor Bugbot 從 seat-based 切 **usage-based（6/8 後 renewal 起生效）**、加 Default / Optimized for efficiency / High effort 三段檔位；(3) **Stripe Projects 5/16 Sessions 後再公佈 14 新 partners**——Render、Twilio、Sentry、WorkOS、Browserbase、GitLab、ElevenLabs 入列、總 partners 從 32 升 46，John Collison 公開定調「leading edge 在 **vibe deploying**」 | (1) Cursor 3.4 dev environment 工具讓「給整個團隊一致的 Cursor agent 配置」變內建，過去做 Cursor onboarding template 的 indie agency 中介層收窄；(2) Bugbot 切 usage 對自動 PR review 流量大的中型 SaaS 月帳線性放大、配合 5/14 Anthropic Agent SDK Credit Pool 6/15 上線、自動化 PR review 的成本面進入「使用越多越貴」的新拐點；(3) Stripe Projects 加 GitLab + Sentry + ElevenLabs 後，「vibe deploying」覆蓋從 web infra 延伸到 source control / observability / 語音 AI——agent 一條 CLI 跑「provision 完整 SaaS stack」覆蓋面再擴一輪 | 機會：(1) 對 Cursor 5+ seat 團隊客戶做「3.4 dev environment 配置 → 5 條角色（前端 / 後端 / DevOps / QA / 文檔）」productized 整合 $1.5K；(2) 寫「Bugbot 6/8 切 usage 後月帳省 30% 的 5 條設定」內容（5/18 後 21 天熱期）；(3) 開「Stripe Projects 46 partners × 你家 SaaS 的 3 條最短 onboarding 路徑」chooser web 工具當 lead magnet；威脅：靠「我家是另一個 GitHub Actions wrapper」做 sales pitch 的 indie 在 Stripe Projects 加 GitLab 後備胎收窄 | [Cursor Changelog](https://cursor.com/changelog) / [Cursor Release Notes — Releasebot May 2026](https://releasebot.io/updates/cursor) / [Stripe Newsroom — Sessions 2026 288 launches](https://stripe.com/newsroom/news/sessions-2026) / [WorkOS — joins Stripe Projects](https://workos.com/blog/workos-joins-stripe-projects) / [Twilio — provision via Stripe Projects](https://www.twilio.com/en-us/blog/partners/integrations/provision-twilio-communications-channels-stripe-projects) / [iTWire — 288 launches](https://itwire.com/business-it-news/data/stripe-builds-out-the-economic-infrastructure-for-ai-with-288-launches.html) |

## 🛠 新興 AI 工具

| 工具 | 類別 | 用途 | 定價 | 差異點 | 採用建議 |
| ---- | ---- | ---- | ---- | ------ | -------- |
| **Notion Workers**（5/13 beta） | hosted runtime for agent / webhook / DB sync | hosted runtime 跑 custom code、做 DB sync / agent tools / webhook trigger；不必自架 server | **beta 期免費，8/11 起切 Notion credits 計費**；隨 Notion 訂閱 | 第一個把 cron / webhook / external agent / DB sync 收進 SaaS 工作區的 hosted runtime；對 Zapier / Make.com / n8n 是新威脅 | 跑 Notion + Zapier 的 indie 本週用 8/11 前 90 天 beta window 把 cron / webhook 整合搬上 Workers；做 SMB SaaS 的考慮把 Notion Workers 列為 distribution 入口 |
| **Notion External Agent API + CLI**（5/13） | agent integration plane | 外部 agent 以 collaborator 身分掛進 Notion 工作區、人類可以分派任務 / 監控 / 共事；走 Notion CLI 開發 | 隨 Notion 訂閱、全 plan 可用 | 第一家把「外部 agent = workspace 內 collaborator」當原生 UI primitive；首批支援 Claude Code、Cursor、Codex、Decagon | 跑 Claude Code / Cursor / Codex 的 indie / agency 本週掛進 Notion 試「agent 跟 PM 同欄收 task」流程；做 vertical agent 的把 Notion External Agent API 當第二條 distribution |
| **Cursor 3.4 dev environment tools**（5/13） | team-managed IDE agent config | 團隊管理員一鍵替整隊 agent 設 IDE / 環境變數 / 工具集；agent 也能讀配置自行 set up 與 maintain | 隨 Cursor Team / Enterprise（既有訂閱） | 第一次把「整隊 Cursor agent 配置一致化」做進產品；過去靠 GitHub gitignored config / Notion SOP 維護的 onboarding 摩擦砍下 | Cursor 5+ seat 團隊本週升 3.4 把 dev env config 從 README 搬進產品；做客戶 onboarding 的 agency 標配上 |
| **Gemini 3.2 Flash**（5/19 預期發佈 / leak） | budget multimodal model | leak 為「更快、更便宜」、對打 Claude Haiku 4.5 / GPT-5.5 Instant；定位輕量 router、agent loop 中段使用 | 待 5/19 揭、預期 input ≤ $0.30 / M、output ≤ $1.20 / M 區間（leak 推估） | 第一個 Google 在 I/O 主舞台公開為「指定給 agent 路由」的 Flash 系列；Gemini API rate limit 對 Anthropic 商用採用 34.4% 是直接反擊 | 跑 multi-LLM router 的 indie 5/19 起立刻接 API key 槽位、跑同 prompt × Anthropic / OpenAI / DeepSeek V4 / Mistral 3.5 / Kimi K2.6 / Gemini 3.2 Flash 六家比較 |
| **Gemini Spark**（5/19 預期、leak 中） | everyday agent for Workspace | 自然語言完成 Gmail 整理 / Calendar 排程 / 表單填寫 / 多步任務；定位「everyday AI agent」 | 預期隨 Gemini Advanced（$20 / 月）或 Google Workspace 加值費 | 第一個 Google 把 agent 整合進 Workspace 全套（Gmail、Calendar、Docs、Forms、Drive）原生路徑；對 Claude Cowork、Microsoft Copilot 是直接對打 | 自家 SaaS 若做 Gmail / Calendar / Docs wrapper、5/19 後一週內**必須**準備「Spark 上線後我家差異化 3 點」FAQ；對亞洲市場做「Spark 沒覆蓋 sub-vertical」內容稿 |
| **Stripe Projects 46 partners 新陣容（5/16 Sessions）** | agent-friendly SaaS provisioning | Render、Twilio、Sentry、WorkOS、Browserbase、GitLab、ElevenLabs 等 14 新 partner 入列；agent 一條 CLI 跑「provision 完整 SaaS stack」 | 隨 Stripe Projects（免費）；各 partner SaaS 訂閱單算 | 第一次把 source control（GitLab）+ observability（Sentry）+ 語音 AI（ElevenLabs）一起收進 vibe-deploy 棧 | 自家 SaaS 想被 ChatGPT / Codex / Cursor 自動 onboard 的本週掃自家 stack 是否能讓 agent CLI 一條跑通；做 dev tool / SaaS template 的把 Stripe Projects 46-partner 列為新 onboarding 路徑 |

## 💡 SaaS 點子

### 點子 1：Notion Workers vertical 模板市集（5/13 起 90 天 beta 免費窗口）🆕

- 痛點來源：5/13 Notion 端出 Workers + External Agent API + Database Sync、自 2 月 Custom Agents 起客戶已建 1M+ agents；但 **beta 期免費、8/11 起切 Notion credits** 計費這條時程把「免費把自家 vertical 範本做出來 + 佔早期 distribution slot」這個 90 天窗口寫死；Notion 官方範例偏 generic（issue triage、KPI summary）、缺 vertical（fintech、healthtech、SMB SaaS、台灣中小企業、PM team、客服 team）模板
- 目標客群：跑 Notion 為工作區骨幹的 5–50 人 SaaS / agency / 個人創業者；做 Zapier / Make.com / n8n 整合的 indie；想做 Notion 第三方 plugin 但被 Notion 自家 Workers 蓋掉中下層的
- 技術複雜度：2/5
- 預估 MRR：$3K–$12K
- 競品弱點：Notion 官方範例範圍狹（PR triage / weekly summary）；GitHub 沒「awesome-notion-workers」分類；現存 Zapier / Make.com template 市集不為 Notion agent integration 設計
- 切入建議：(1) **50 個 production-ready Notion Worker 範本**（自動 PR triage → Notion task、客戶 Zendesk ticket → Notion CRM、Salesforce contact → Notion DB sync、weekly KPI scraper、Stripe webhook → Notion invoice DB、客戶上線 onboarding tracker、台灣中小企業會計月結提醒、健身房 / 補習班 / 餐廳 vertical 範本）：單模板 $19、全包 $99 lifetime；vertical bundle（fintech、SMB SaaS、台日韓中小企業）$199；(2) **8/11 前 90 天 beta window** 免費把「Notion Workers + Claude Code 跨 agent 連線」串成可賣的 90 天 retainer $1.5K–$5K；(3) 對亞洲市場做「繁中 / 日語 vertical 範本」5/18 起開 Discord / newsletter（前 1,000 名免費換訂閱）

### 點子 2：a16z Speedrun SR007 拒信後的 7 個月 5-week-ARR 衝刺 playbook（5/17 → 12 月 SR008 窗口）🆕

- 痛點來源：5/17 23:59 PT SR007 申請截止、acceptance < 0.4%、預期 99.6% 申請者拿到 silent 拒信；公開 bar 升到「5-week-ARR + paying customers」後，indie 創業敘事框架被重新定價——傳統「demo 漂亮 + waitlist」一條腿走的不夠；7/27–10/11 cohort 之後預期 12 月 SR008 開窗、中間 7 個月是把「沒過 SR007」翻成「下次過」的時間軸
- 目標客群：個人創業者 + 1–3 人 indie team；已 launch 但 ARR 還在 $0–$200 區間的；想申請 SR008 / YC Spring 2027 / 其他 accelerator 的
- 技術複雜度：2/5（內容 + 顧問為主）
- 預估 MRR：$2K–$8K
- 競品弱點：Indie Hackers / Twitter / X founder 圈分散建議、無 SR007-specific 結構化 playbook；YC interview 教練多偏 storytelling、不教「30 天衝 5-week ARR」執行；現存 accelerator coaching SaaS 偏年費高、針對性低
- 切入建議：(1) 寫**「SR007 拒信後 35 天衝 paying customer」 productized playbook** PDF $19、含 5-week-ARR 計算模板 + 35 天 outreach 模板 + 第一個付費客戶 onboarding SOP；(2) 7 個月 retainer $99 / 月——每週 30 分鐘 1:1 + Slack 隨時問 + SR008 申請 dry run；(3) 開「SR007 拒信社群」Discord 月 $9、聚焦「我們互相當第一個付費客戶」交換；(4) 對申請者開「SR008 申請日 48 小時衝刺包」固定價 $500（demo / waitlist / 第一個付費客戶 同步建好）

### 點子 3：Supabase 5/18–7/1 三重時間鎖 migration audit + boilerplate refresh 🆕

- 痛點來源：5/18 pg_graphql 不再預設開、5/22 OAuth 2.1 token endpoint HTTP 201 → 200、5/30 所有新 project 套用新預設、7/1 Postgres 14 自動升 17——4 個 breaking 點集中於 6 週區間；現存 Supabase boilerplate / SaaS template 賣家全部要更新教學；走 PostgREST / supabase-js / 自寫 OAuth client 的 indie 沒有 audit checklist
- 目標客群：賣 Next.js + Supabase boilerplate 的 indie；用 Supabase 做後端的 1–30 人 SaaS / agency；OSS Supabase template repo maintainer
- 技術複雜度：3/5
- 預估 MRR：$2K–$10K
- 競品弱點：Supabase 自家 changelog 偏總覽、無 client-side migration scanner；現存 ORM migration tool（Prisma / Drizzle）不掃 Data API exposure；StepSecurity / Snyk 偏 dep / Actions，不掃 Supabase 特定 breaking change
- 切入建議：(1) 開源 `supabase-may-2026-audit` CLI 掃自家專案 → 列出 (a) public schema 哪些 table 依賴 Data API 自動 expose、(b) PostgREST / supabase-js client 是否解 token endpoint status code、(c) Postgres 14 → 17 extension 相容性（pgvector、postgis、pg_cron）；(2) 付費版 $49 / repo / 月加 Slack alert + 自動修補 PR + 5/22 / 5/30 / 7/1 三個時間錨點預警；(3) fixed-price audit $800–$2K 一次性盤點 + 修補 PR + Playwright smoke test；(4) 對 Supabase boilerplate 賣家 bundle「教學 + README 更新 + 客戶通知 email 模板」固定價 $500

## 🧰 工具堆疊更新

- **如果你跑 Notion API / 想做 Notion 整合**：本週切 1 條工作流到 Notion Workers beta（推薦：自動 PR triage 或客戶 ticket 路由）；8/11 計費上線前的 90 天免費窗口是佔早期 distribution slot 的窗口；把現有 Zapier / Make.com / n8n 規則重新評估是否該搬上 Workers
- **如果你跑 Cursor 5+ seat 團隊**：本週升 3.4 把 dev environment 配置從 README 搬進產品；Bugbot 6/8 切 usage-based 前先 audit 過去 30 天 PR review 量、推估 renewal 後新月帳；考慮把 Default 三段檔位調成 Optimized 平衡成本
- **如果你跑 Supabase 後端**：本週優先做 5 件事——(1) 確認新 project 是否要保留「自動 expose」舊行為；(2) 升 PostgREST / supabase-js client 解 5/22 後 HTTP 200 token 回應；(3) 跑一輪「Postgres 14 → 17 extension 相容性」測試；(4) 把 5/22 / 5/30 / 7/1 三個錨點寫進 calendar；(5) boilerplate / 客戶教學文補上「先去 Dashboard expose Data API」一步
- **如果你做 Gmail / Calendar / Docs wrapper SaaS**：5/19 Google I/O 前夜把自家「Gemini Spark 上線後差異化 3 點」FAQ 寫好；亞洲市場做「Spark 沒覆蓋 sub-vertical（多語 / 商業帳 / 加密 / 多 Workspace）」內容稿；定價在 Spark 揭露前先 freeze 14 天觀察
- **如果你想申請 a16z Speedrun SR007**：今晚 23:59 PT 截止——若沒準備好今晚先 submit minimal、否則記入 SR008（預期 12 月窗口）；同期 YC Spring 2026 RFS 已公布 8 條題目可雙軌投；中間 7 個月用「launch 後 35 天衝 paying customer」當公開 benchmark
- **如果你做 multi-LLM router / 在意月帳**：5/19 Google I/O 後 Gemini 3.2 Flash 進主流路由可能性高、預留 API key 槽位；同期 5/30 Cloudflare K2.5 → K2.6 + 6/15 Anthropic Agent SDK Credit Pool 兩件事疊在 16 天區間，本週把 router 對應 4 條開源（DeepSeek V4 / Mistral 3.5 / Kimi K2.6 / Qwen 3.6 Max）+ 3 條 frontier（Claude / GPT-5.5 / Gemini）配置寫成 yaml

## ⚡ 今日行動建議

- [ ] 自家若有 Notion 整合 / 想做 Notion plugin：開 Workers beta 開戶、把 1 條最常用的 cron / webhook 規則先搬上、占 90 天免費 distribution slot（45 分鐘）
- [ ] 自家若用 Supabase：跑 `supabase status` + 對照 changelog 列「過去 30 天我家專案受 5/18 / 5/22 / 5/30 / 7/1 哪幾條影響」（30 分鐘）
- [ ] 自家若用 Cursor 5+ seat：升 3.4、把 IDE / 環境變數 / 工具集從 README 搬進產品內 dev env config；同步推估 Bugbot 6/8 後 renewal 月帳（30 分鐘）
- [ ] 自家若做 Gmail / Calendar / Docs wrapper：寫「Gemini Spark 上線後差異化 3 點」FAQ 草稿；亞洲市場做「Spark 沒覆蓋 sub-vertical」內容稿 outline（30 分鐘）
- [ ] 自家若想申請 SR007：今晚 23:59 PT 截止，最 minimal 版本（landing + demo URL + 第一個付費客戶 logo + 5-week-ARR 估算）48 小時內提交；否則記 12 月 SR008 cohort（15 分鐘）
- [ ] 5/19 09:00–11:00 PT 排進 calendar 即時觀看 Google I/O keynote + Code w/ Claude London livestream（兩場同日）；列「我家 SaaS 在兩場新公告下的 3 條曝險」追蹤表（20 分鐘）

## ⏳ 待觀察

- **5/19 雙活動同日**：(1) **Code w/ Claude London** 是否揭 SF 場（5/6）沒公布的新功能、特別是 EU / UK 區位本地化 case study；(2) **Google I/O Day 1 keynote** Gemini Spark 是否落地 / Omni 是否揭定價 / Aluminium OS 是否揭 dev portal / Gemini 3.2 Flash 是否公開 token 單價
- **5/19–20 Google I/O 對 Anthropic / OpenAI 反擊**：Anthropic 是否在 5/19 倫敦場藉勢補產品（Code w/ Claude London 同日）；OpenAI 是否在 5/19–20 期間搶曝光、補上 ChatGPT × Codex 合併後第一條合併產品（unified pricing? desktop super app 預覽？）
- **Notion Developer Platform 14 天**：(1) 第三方 Workers / External Agent 範本市集出現速度；(2) Notion 是否補 8/11 計費前的「Notion credits 換算成 token / minute / agent invocation」細節；(3) 第一批 1,000+ Workers 投產的客戶 case study
- **Cursor 3.4 + Bugbot 6/8 切 usage 24 天**：社群是否爆出「Bugbot 月帳異常放大」或「升 3.4 後 dev env config 不一致」災情；做 cursor template 的 indie 是否端出 vertical 範本
- **Supabase 5/22 / 5/30 / 7/1 三個錨點**：(1) 5/22 後社群是否爆「自寫 OAuth client 解 status code 失敗」；(2) 5/30 + Cloudflare K2.5→K2.6 alias 切換同日的雙重壓力；(3) 7/1 Postgres 14 自動升 17 前是否有大規模 dep 不相容回報
- **a16z Speedrun SR007 結果**：(1) 5/27 前後拒信 / 接受信寄出；(2) 「5-week-ARR」bar 是否被 YC / Combinator / 其他 accelerator 借用；(3) 60 founders 入選名單對「indie / vibe coder / SMB SaaS」三類比例
- **Bitwarden CLI 2026.4.0（4/22）retrospective 第二波 fallout**：(1) 5/14 後社群是否爆「我家 AI coding tool token 被偷」具體案例；(2) Bleeping Computer / Aikido / JFrog 是否追加 IoC（Indicators of Compromise）；(3) 同期 Endor Labs / Wiz / Snyk 是否端出「AI coding tool 認證安全」掃描工具 v2

[^geminiomni]: Google 在 I/O 2026 預期揭曉的統一多模態模型，把 text / image / video / chat 編輯整合進同一條管線；5/2 被 TestingCatalog 在 production interface 抓到「Powered by Omni」字串，若官方確認將是第一個 frontier provider 原生支援 video output 的模型。

[^geminispark]: Google 預計在 I/O 2026 發佈的 autonomous AI agent，定位「everyday AI agent」、原生吃 Gmail / Calendar / Docs / Forms / Drive，用自然語言完成 inbox 整理、行事曆排程、表單填寫等多步任務，被視為 Claude Cowork 與 Microsoft Copilot 的直接對手。

[^workers]: Notion 5/13 Developer Platform 公佈的 hosted runtime，可在 Notion 雲端跑 custom code、做 DB sync、agent tools、webhook trigger，不必自架 server；beta 期免費，8/11 起改吃 Notion credits 計費，被視為 Zapier / Make.com / n8n 的新威脅。

[^decagon]: 主打企業客服 AI agent 的舊金山新創（2023 創立），以 LLM 自動處理高量級客戶 ticket 著稱，客戶含 Bilt、Eventbrite、Notion 自家；被 Notion 列為 5/13 External Agent API 首批官方支援的 partner agent，與 Claude Code / Cursor / Codex 同陣容。

[^5weekarr]: a16z Speedrun SR007 公開立的篩選 bar，指「launch 後 5 週內累積的 ARR」；要求申請者已有 working product 與 paying customers，把過去「漂亮 deck + waitlist」的 fundraising narrative 重新定價成「短期可驗證的收入節奏」。

[^pggraphql]: Supabase 內生的 PostgreSQL extension，自動把資料表轉成 GraphQL schema，搭配 PostgREST 形成「建表即有 API」的 Data API 一鍵流程；5/18 起在新 project 不再預設啟用，須手動 `grant` 或在 Dashboard 啟用相關 table。

[^browserbase]: 為 AI agent 提供雲端 headless browser 基礎設施的新創，把 Playwright / Puppeteer 等瀏覽器自動化封裝成可程式化呼叫的 cloud session，常用於讓 LLM agent 進網站填表 / 抓資料 / 完成 multi-step task；本次入列 Stripe Projects，等於 agent CLI 一條指令就能 provision 出可上線的瀏覽器執行環境。

## 📚 引用來源

1. [Notion releases — 3.5: Notion Developer Platform | Notion](https://www.notion.com/releases/2026-05-13) — 2026-05-13
2. [Notion just turned its workspace into a hub for AI agents | TechCrunch](https://techcrunch.com/2026/05/13/notion-just-turned-its-workspace-into-a-hub-for-ai-agents/) — 2026-05-13
3. [Notion Just Made Its Workspace a Home for AI Agents | BetaNews](https://betanews.com/article/notion-developer-platform-ai-agents/) — 2026-05-13
4. [Notion Transforms Its Workspace Into A Hub For AI Agents With New Developer Platform | Bitcoin World](https://bitcoinworld.co.in/notion-ai-agent-developer-platform/) — 2026-05-13
5. [Notion 3.5 Turns the Workspace Into an Agent Hub | Awesome Agents](https://awesomeagents.ai/news/notion-developer-platform-ai-agent-hub/) — 2026-05-13
6. [Notion Launches Developer Platform for AI Agents | Winbuzzer](https://winbuzzer.com/2026/05/14/notion-just-turned-its-workspace-into-a-hub-for-ai-xcxwbn/) — 2026-05-14
7. [Notion's AI Agent Platform | ALM Corp](https://almcorp.com/blog/notion-ai-agent-platform-workers-external-agents-enterprise-search/) — 2026-05 查閱
8. [Gemini's Spark agent has leaked, and it looks like it's gunning for Claude Cowork's throne | Android Authority](https://www.androidauthority.com/google-gemini-spark-agent-leak-3667475/) — 2026-05 查閱
9. [Gemini Spark Leak Reveals Google AI Agent Features | Let's Data Science](https://letsdatascience.com/news/gemini-spark-leak-reveals-google-ai-agent-features-5aee78f0) — 2026-05 查閱
10. [Gemini Spark AI agent details leaked | Croma Unboxed](https://www.croma.com/unboxed/google-gemini-spark-ai-agent-leak) — 2026-05 查閱
11. [Gemini 3.2 Flash Leak: Faster, Cheaper AI Ahead of Google I/O | NokiaPowerUser](https://nokiapoweruser.com/gemini-3-2-flash-leak-fast-cheap-ai-google-io-2026/) — 2026-05 查閱
12. [Early look: Gemini Omni generates realistic AI video in new leak | Android Authority](https://www.androidauthority.com/google-gemini-omni-video-model-leak-3665801/) — 2026-05 查閱
13. [Google Accidentally Leaks "Gemini Omni" Days Before I/O | AIxploria](https://www.aixploria.com/en/ai-radar/google-gemini-omni-leak-video-model-io-2026/) — 2026-05 查閱
14. [What to expect from Google I/O 2026 | Tech.Yahoo](https://tech.yahoo.com/ai/gemini/articles/expect-google-o-2026-gemini-090000572.html) — 2026-05 查閱
15. [What to Expect from Google I/O 2026 | Android Authority](https://www.androidauthority.com/what-to-expect-from-google-io-2026-3664979/) — 2026-05 查閱
16. [Google I/O 2026 Starts May 19 | NokiaPowerUser](https://nokiapoweruser.com/google-io-2026-gemini-spark-omni-gemini-3-5-rumors/) — 2026-05 查閱
17. [Aluminium OS | Wikipedia](https://en.wikipedia.org/wiki/Aluminium_OS) — 2026-05 查閱
18. [Aluminium OS: Android-ChromeOS Merge Set for 2026 | Gadget Hacks](https://android.gadgethacks.com/news/google-aluminium-os-android-chromeos-merge-set-for-2026/) — 2026-05 查閱
19. [ChromeOS and Android Are Merging in 2026: Aluminium OS | Starry Hope](https://www.starryhope.com/chromebooks/chromeos-android-merger-aluminium-os/) — 2026-05 查閱
20. [Google's new "Aluminium" project is the Android-based future of ChromeOS | Chrome Unboxed](https://chromeunboxed.com/googles-new-aluminium-os-is-the-android-based-future-of-chromeos-and-we-have-the-first-details/) — 2026-05 查閱
21. [Applications for a16z speedrun SR007 are now open | a16z](https://a16z.com/applications-for-a16z-speedrun-sr007-are-now-open/) — 2026-05 查閱
22. [60 founders. One stage. SR007 applications open | Speedrun Substack](https://speedrun.substack.com/p/sr007-applications-open) — 2026-05 查閱
23. [Apply | a16z Speedrun](https://speedrun.a16z.com/apply) — 2026-05 查閱
24. [a16z Speedrun SR007: The 5-Week-ARR Bar and 6 Plays Indie Hackers Can Ship | Superframeworks](https://superframeworks.com/articles/a16z-speedrun-sr007-indie-hackers) — 2026-05 查閱
25. [a16z opens speedrun SR007 applications with $1m per startup | Glostarep](https://glostarep.com/a16z-speedrun-sr007-applications-open-1m-funding/) — 2026-05 查閱
26. [Supabase Developer Update May 2026 | Supabase Changelog](https://supabase.com/changelog/45702-developer-update-may-2026) — 2026-05 查閱
27. [Breaking Change: Tables not exposed to Data and GraphQL API automatically | Supabase Discussion #45329](https://github.com/orgs/supabase/discussions/45329) — 2026-04 起持續更新
28. [Forthcoming Postgres 17 Release Notes | Supabase Discussion #35851](https://github.com/orgs/supabase/discussions/35851) — 2026-05 查閱
29. [OAuth 2.1 Flows | Supabase Docs](https://supabase.com/docs/guides/auth/oauth-server/oauth-flows) — 2026-05 查閱
30. [Supabase Release Notes — May 2026 | Releasebot](https://releasebot.io/updates/supabase) — 2026-05 查閱
31. [Cursor Changelog](https://cursor.com/changelog) — 2026-05 查閱
32. [Cursor Release Notes — May 2026 | Releasebot](https://releasebot.io/updates/cursor) — 2026-05 查閱
33. [Stripe builds out the economic infrastructure for AI with 288 launches | Stripe Newsroom](https://stripe.com/newsroom/news/sessions-2026) — 2026-04-29（含後續 5/16 更新）
34. [WorkOS joins Stripe Projects: Auth from the CLI, no payment wall | WorkOS](https://workos.com/blog/workos-joins-stripe-projects) — 2026-05 查閱
35. [Provision Twilio Communications via Stripe Projects | Twilio](https://www.twilio.com/en-us/blog/partners/integrations/provision-twilio-communications-channels-stripe-projects) — 2026-05 查閱
36. [Stripe builds out the economic infrastructure for AI with 288 launches | iTWire](https://itwire.com/business-it-news/data/stripe-builds-out-the-economic-infrastructure-for-ai-with-288-launches.html) — 2026-04-29
37. [Register for Livestream | Code w/ Claude 2026](https://claude.com/code-with-claude/register-livestream) — 2026-05 查閱
38. [Live blog: Code w/ Claude 2026 SF | Simon Willison](https://simonwillison.net/2026/May/6/code-w-claude-2026/) — 2026-05-06
39. [Code w/ Claude SF 2026: Building on the AI exponential | Anthropic](https://claude.com/blog/code-w-claude-sf-2026-sf) — 2026-05-06
40. [Anthropic Release Notes — May 2026 | Releasebot](https://releasebot.io/updates/anthropic) — 2026-05 查閱
41. [Shai-Hulud: The Third Coming — Bitwarden CLI Backdoored | OX Security](https://www.ox.security/blog/shai-hulud-bitwarden-cli-supply-chain-attack/) — 2026-05 查閱
42. [Is Shai-Hulud Back? Compromised Bitwarden CLI Contains a Self-Propagating npm Worm | Aikido](https://www.aikido.dev/blog/shai-hulud-npm-bitwarden-cli-compromise) — 2026-05 查閱
43. [Bitwarden CLI npm package compromised to steal developer credentials | Bleeping Computer](https://www.bleepingcomputer.com/news/security/bitwarden-cli-npm-package-compromised-to-steal-developer-credentials/) — 2026-05 查閱
44. [Compromised Bitwarden CLI Poisons AI Assistants and Spreads as npm Worm | Mend](https://www.mend.io/blog/compromised-bitwarden-cli-npm-worm-ai-poisoning/) — 2026-05 查閱
45. [TeamPCP Campaign Spreads to npm via a Hijacked Bitwarden CLI | JFrog Security Research](https://research.jfrog.com/post/bitwarden-cli-hijack/) — 2026-05 查閱
