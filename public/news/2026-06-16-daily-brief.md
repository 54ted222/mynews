---
title: 每日創業情報 — 2026-06-16
date: 2026-06-16
tags: 創業情報, AI 產業, SaaS
summary: Fable 5 停服 Day 5、Tom Brown / Sarah Heck 飛華府談判尚無結果；Agentjacking 攻擊 2,388 orgs 暴露 + Sentry 拒絕 root fix；xAI Grok Build Plugin Marketplace 6/11 開賣六家 launch partner；Hugging Face Serge 開源 PR review 對打 Cursor Bugbot；Mistral Vibe 變歐美雙重出口管制下歐系 fallback 首選。
keywords: Anthropic Fable 5 Mythos 5 Tom Brown Sarah Heck Washington negotiation June 14 2026 WSJ, BIS export control directive Anthropic Day 5 no timeline restoration, Agentjacking attack Sentry MCP server AI coding agent npx malicious 2388 orgs Tenet Threat Labs, xAI Grok Build Plugin Marketplace launch June 11 2026 MongoDB Vercel Sentry Chrome DevTools Cloudflare Superpowers, Hugging Face Serge open source GitHub native code review pull request June 12 2026, Mistral Vibe Le Chat rebrand May 28 Work Mode Code Mode VS Code extension EU fallback, SPCX SpaceX second trading day June 15 close 177 dollars sustained momentum, Project Glasswing expanded 150 organizations 15 countries Mythos Preview vulnerability disclosure, Antigravity CLI June 18 2026 countdown two days Gemini CLI hard cut consumer
---

# 每日創業情報 — 2026-06-16

## 🎯 今日 TL;DR

- **Fable 5 / Mythos 5 停服進入 Day 5（6/12→6/16）：Anthropic 派共同創辦人兼 chief compute officer Tom Brown[^tom-brown] + 政策長 Sarah Heck 親赴華府週末談判、無公開時間表、無 deal 公告——「Anthropic 受美國政府 frontier model 出口管制」風險具體化進入第二週**：6/14 Wall Street Journal 更新：senior technical staff（含 co-founder Tom Brown 與 policy chief Sarah Heck）週末與白宮官員會晤；至 6/15 晚上仍無 deal、無時間表、無「政府疑慮已解決」公開聲明；BIS 認為已找到 jailbreak Fable 5 的方法。**對台日 indie 兩條決定性後續**：(a) **今天起 14 天**所有客戶提案 / 顧問業務 deck 內**「美方 BIS 24 小時內 fallback 切換」必須寫進合約附錄**——不只是 Opus 4.8 一條路，而是「Opus 4.8 主力 + Sonnet 4.6 量產 + Mistral Vibe[^mistral-vibe] EU fallback + OpenCode self-host」四層 SLO 範本（Mistral Vibe 進來變新選項，下方第 4 條詳述）；(b) **賣中型企業 vertical SaaS 的 indie**今天起把「BIS 政策風險 weekly briefing」做成訂閱 newsletter $99 / 月（中文社群供給零）——每週一封「美方 BIS / 歐方 AI Act / 中方出口管制三邊情勢摘要 + 對 indie 採購提案的具體影響」；(c) **不要再賭「Fable 5 7 天內復活」narrative**——談判進度看起來是「天 vs 週」級別、不是「小時」級別，所有以「Fable 5 重新上線後再 ship 客戶 PoC」的 SOP**今天起改用 Opus 4.8 baseline 跑完整 SLO 驗證**

- **Agentjacking[^agentjacking] 攻擊 6/12 大規模公開、2,388 orgs 暴露——MCP server 自架 indie 緊急 security audit 視窗開啟**：Tenet Security Threat Labs 6/3 揭露給 Sentry、Sentry 同日承認但**拒絕 root fix**（評為「technically not defensible」）、改用「global content filter for specific payload strings」處理；6/12 公開後迅速擴散——對 Sentry MCP server + AI coding agent (Claude Code / Cursor / Codex / Grok Build) 三件套組合的 dev team 是 immediate 風險；攻擊路徑：fake bug report → Sentry MCP → AI agent 把它當「trusted system output」→ 跑 attacker-controlled npx command（with developer's full system privileges）；任何 MCP tool 把外部影響的 data 餵回 agent 都是同一個 vulnerability class。**對 indie 的決定性 niche window 開啟**：(a) **今天起 7 天**ship landing「AI coding agent × MCP server 安全 audit cheatsheet」（嵌 typeform + Stripe；付費 $79 / $299 lifetime；含 Sentry / MongoDB / Linear / GitHub / Slack MCP 五大 server 的 isolation pattern + payload sanitization + workflow approval gate）；(b) **賣中型企業 IT security audit 的 freelancer** 把「MCP × Agent 攻擊面 audit + Cloudflare AI Gateway[^cf-ai-gateway] sandbox 配置」包成 fixed-price $3K–$10K（內含 7 天 incident response retainer）；(c) **6/17–6/22** 內容週 LinkedIn / Threads 連發「Agentjacking + MCP server isolation + Claude Code hooks 攔截策略」——中文社群供給為零、台日中型企業 CIO inbound 高峰

- **xAI Grok Build Plugin Marketplace 6/11 launch + 六家 launch partner（MongoDB / Vercel / Sentry / Chrome DevTools / Cloudflare / Superpowers）——「Plugin / MCP ecosystem」戰場進入 Claude Code × Cursor × Grok Build 三強鼎立**：6/11 開放 beta；plugin 是「skills + slash commands + agents + hooks + MCP servers + LSPs」打包一份；每個 remote plugin 安裝時 pin 到特定 commit SHA、catalog 開源在 GitHub、third-party 可走 PR 提交；六家 launch partner 覆蓋 dev infra 核心區（DB / 部署 / error / browser / edge / workflow）。**對 indie 兩條 niche**：(a) **6/18 Antigravity CLI 收編 Gemini CLI 同期**——「Plugin / MCP ecosystem 三強鼎立矩陣」（Claude Code skills + plugins、Cursor SDK customTools、Grok Build Plugin Marketplace、Antigravity plugins、Hugging Face Serge open source）對照表寫成 LinkedIn / Threads 連發內容；(b) **賣 dev tool agency 的 indie** 把「自家 vertical plugin × 三平台同步發佈」（同一份 MCP server 打包成 Claude Code skill / Cursor customTool / Grok Build plugin / Antigravity plugin）做成 audit $2K–$6K——「一個 MCP server 跑遍四平台」是 6/11 後 30 天內中型 dev team 採購直接訴求

- **Mistral Vibe[^mistral-vibe]（5/28 改名上線、6 月持續推 VS Code 擴充 / Code Mode / Slack triggers）——「歐方 AI Act 8/2 + 美方 BIS 雙重出口管制」夾擊下，台日 indie 賣 EU 客戶的歐系 fallback 首選**：5/28 Mistral 把 Le Chat 改名為 Vibe、整合 chat + work agent + coding agent 於單一產品 + license；VS Code 擴充把 Vibe coding agent 嵌進 side panel（讀 / 寫 / 跑命令）+ Code Mode 連 GitHub 管 project + isolated sandbox + session persist + Slack thread 觸發（6 月推出）+ CLI `/teleport` 在 terminal / editor / cloud 間移動 task。Pro 月 $14.99 / Team $24.99。**對 indie 三條 niche**：(a) **賣 EU vertical SaaS 的 indie** 今天起把「Mistral Vibe + Anthropic Opus 4.8 + OpenAI GPT-5.6 三家三軌備援 SLO」寫進合約附錄（EU AI Act 8/2 倒數 47 天 + BIS export control 雙重壓力）；(b) **6/17–6/22** 內容週「Le Chat → Vibe migration + VS Code 擴充上手 + 為何 EU customer 必裝」中英對照（中文社群供給零）；(c) **賣中型企業 vertical SaaS（200–2,000 員 + EU 客戶）的 indie** 把「Mistral Vibe Code Mode + isolated sandbox + session persist」當「資料不出 EU 邊界」訴求賣點

- **Hugging Face Serge[^serge] 6/12 開源 GitHub-native PR code review（OpenAI 相容 LLM + repository-owned rules + GitHub PR review UI）——對 Cursor Bugbot $1/PR usage-based 商業模式直接對打**：Serge 走 OpenAI-compatible API（不綁特定 model）、repository owner 可自寫 review policy（不是 hosted SaaS 黑箱）、透過 GitHub 原生 PR review 流程 publish comments、開源在 github.com/huggingface/serge；定位是「catch issues early、help maintainer 跟上 PR volume、適應 repo 現有慣例」、不取代人工 review。**對 indie 兩條 niche**：(a) **賣 dev tool agency 的 indie** 把「Cursor Bugbot $1/PR vs Greptile $$/seat vs CodeRabbit $$/repo vs Hugging Face Serge self-host」四方對比表 + 自架 LLM (Ollama / OpenCode + local model) 成本試算寫成 audit $1.5K–$5K；(b) **6/17–6/22** 內容週主題「自架 Serge + 中型 dev team 30 天 cost down 60% 的 case study」（中文社群供給零）；(c) **賣中型企業 SaaS（dev team 30–200 員、客戶資料不出網域）的 indie** 把 Serge 自架 + Linear / GitHub 直接整合包成 fixed-price 採購 $5K–$20K——對台日中型企業「LLM PR review 但客戶 source code 不出公司」是現成解

## 🔄 昨日追蹤

### Fable 5 / Mythos 5 BIS export control ✅ → Day 5 + 華府談判尚無 deal

**狀態升級**：昨日標「BIS 引用 jailbreak / 無時間表」——今天升級：6/14 WSJ 報導 Tom Brown（共同創辦人 + chief compute officer）與 Sarah Heck（policy chief）親赴華府週末談判；至 6/15 晚仍無 deal、無時間表；「天 vs 週」級談判進度。**indie 應對升級**：(a) 把昨日「Fable 5 不可用 24h 切 Opus 4.8 SLO 範本」**升級為 4 軌備援（Opus 4.8 + Sonnet 4.6 + Mistral Vibe + OpenCode self-host）**；(b) 客戶提案不再寫「Fable 5 待恢復」字眼、改寫「frontier model BIS 政策風險 contained」一頁；(c) BIS 政策 weekly briefing 訂閱 newsletter ship 視窗開啟（中文社群零）

### Agent SDK 雙池 6/15 ET ✅ 上線 24 小時觀察

**狀態 confirmed**：6/15 ET 已上線、`claude -p` / Agent SDK / Claude Code GH Actions / 第三方 Agent SDK app 切獨立月 credit pool（Pro $20 / Max 5× $100 / Max 20× $200）；按 full API rate、月底歸零、無 rollover；TechTimes / DigitalApplied / Codersera 三家 6/15 同步發佈「June 15 billing change developer guide」連發。**indie 應對**：今天起 7 天觀察 Pro $20 是否撐過 1 週重度 nested subagent PoC（估算單日 $3–$5）；overflow billing 遺漏案例 inbound 預估 6/17 ET 上班時間起湧現

### Antigravity CLI 6/18 收編 Gemini CLI 🔄 倒數 2 天

**狀態 unchanged + 視窗收緊**：今天起 2 天倒數；Windows AI Engine 提供 sub-100ms 響應、保留 Agent Skills / Hooks / Subagents / Extensions（改作 Antigravity plugins）；enterprise 不變。**indie 急件清單**：(a) grep `gemini` 全 repo / CI / client deliverable（昨日已做的需 final check）；(b) **6/17 ET 上班時間前** ship「Gemini CLI → Antigravity CLI migration cheatsheet」landing；(c) 配 6/11 Grok Build Plugin Marketplace 起 → 「Antigravity plugins / Grok Build plugins / Claude Code skills / Cursor customTools」四平台 plugin 開發者文件對照表

### TCS / DXC Global Premier 🔄 第 5 天 + 對台日 SI 採購窗口 unchanged

**狀態 unchanged**：6/11 TCS（50K 員工 + 專屬 BU）+ DXC（數萬 forward-deployed certified engineers）；台日 SI（東元 / 中華電信 / NTT Data / 富士通 / Hitachi）未在 6/15–6/16 發類似公告；對賣 vertical SaaS / 顧問業務的 indie，「TCS / DXC 對標台日 SI 二級轉包」白皮書 ship 視窗仍開（6/22 前發效果最佳）

### SPCX 第二日交易 ✅ 收 ~$177.99 / 日內 +10.6%

**狀態 confirmed**：6/15 是 SPCX 第一個交易日（週末休市）、開盤 ~$160.95、午盤一度衝 $179.43、收盤 ~$177.99（+10.6% 從週五收盤）；6/12+6/15 兩日從 IPO $135 累計 +33%；對「AI infra 90× EBITDA 估值」narrative 第二日仍有買盤、Magnificent Seven 第二日反應仍要追蹤；對 indie 採購敘事，「Anthropic compute contracted 到 2029」narrative 維持加分

### Project Glasswing 擴大 🔄 150 orgs / 15 countries / 10,000+ vulns

**狀態 confirmed**：Anthropic 4 月推 Glasswing 至今擴張到 ~150 orgs in 15 countries、已找出 >10,000 個 high / critical severity vulnerabilities；6/9 Glasswing partners 已從 April Mythos Preview build 切到 Mythos 5（同 Fable 5 底層、但 safeguards lifted）；6/12 BIS 停服後 Glasswing partners 是否仍能用 Mythos 5 是公開不明、值得 6/17–6/19 追蹤

### Cursor Bugbot 7/1 改 usage-based 🔄 倒數 15 天 + Serge 開源對打

**狀態升級**：6/12 Hugging Face Serge 開源；Cursor 6/10 已公布 Teams Premium seat + split usage pool + 即時 spend forecast；7/1 起新 / 續約客戶吃 usage-based $1.00–$1.50/run；indie 用「Bugbot vs Serge self-host vs Greptile vs CodeRabbit」對照表發 LinkedIn / Threads 內容**6/17–6/22** 仍是高 inbound 窗口

### Gemini 3.5 Pro 6 月底 GA 🔄 倒數 14 天 + Antigravity CLI 6/18 撞期

**狀態 unchanged**：仍在 Vertex AI limited preview；Pichai I/O 上「Give us until next month」線索仍未具體；目標 6 月底 GA；6/18 Antigravity CLI 上線後 24 小時是 Gemini 3.5 Pro 公開時點窗口

## 📰 AI 產業動態

| 事件 | 影響 | 機會/威脅 | 來源 |
| ---- | ---- | --------- | ---- |
| **6/14 WSJ：Anthropic 派共同創辦人 Tom Brown + 政策長 Sarah Heck 週末親赴華府談判 Fable 5 / Mythos 5 export control 解除——至 6/15 晚無 deal、無時間表**：6/12 17:21 ET BIS 發 directive；Fable 5 / Mythos 5 對所有外籍人士全網停服；6/14 WSJ 更新：senior tech staff 含 co-founder Tom Brown 與 policy chief Sarah Heck 與白宮官員會晤；BIS 認為已找到 jailbreak 方法；無公開時間表、無 deal 公告；談判進度看起來是「天 vs 週」 | 對台日 indie 客戶提案「美方 BIS 24h fallback」必寫進合約附錄；對中型企業採購提案「政策風險 contained」narrative 從一頁升級到「Opus 4.8 + Sonnet 4.6 + Mistral Vibe + OpenCode 四軌備援 SLO」；對賭「Fable 5 7 天內復活」的 indie 短期收手 | 機會：(a) **今天起 14 天**寫白皮書「美方 BIS / 歐方 AI Act / 中方出口管制三邊情勢 weekly newsletter」訂閱 $99/月（中文供給零）；(b) 客戶提案 deck 內「BIS 政策 fallback」一頁升級成 4 軌備援 SLO 範本；(c) 接「中型企業政策風險 audit」$5K–$15K 一次性；威脅：賭 7 天內復活的 indie 短期失準 | [TechTimes — Anthropic Races to Lift Fable 5 Export Ban](https://www.techtimes.com/articles/318376/20260615/anthropic-races-lift-fable-5-export-ban-top-engineers-sent-washington-deal.htm) / [Mezha — Anthropic engineers meet White House](https://mezha.net/eng/bukvy/f2adf80e_anthropic_engineers_meet/) / [explainx — Why Did the US Gov Ban Fable 5](https://www.explainx.ai/blog/us-government-bans-fable-5-mythos-5-anthropic-export-control-2026) / [TECHSY — Will Anthropic's Fable 5 Be Back](https://techsy.io/en/blog/anthropic-fable-5-suspended) |
| **Agentjacking attack：Tenet Security Threat Labs 6/3 揭露給 Sentry、Sentry 拒絕 root fix（評為「technically not defensible」）、6/12 公開、2,388 orgs 暴露**：攻擊路徑——任何持有 Sentry DSN 的人可送 fake bug report → Sentry MCP server → AI coding agent 把它當 trusted system output → 跑 attacker-controlled npx command（with developer's full system privileges）；Sentry 處置：deploy global content filter for specific payload strings；風險擴及任何 MCP server 把外部影響的資料回給 agent 的場景 | 對 MCP server 自架 indie 是 immediate 風險；對 Claude Code / Cursor / Codex / Grok Build × MCP 三件套組合的 dev team 6/13–6/16 是 hot lookup；對 dev tool agency / freelancer 是 7 天內最高優先 audit niche；對 MCP server 生態（500+ 官方、10,000+ 公開）整體信任度需重新評估 | 機會：(a) **今天起 7 天** ship landing「MCP × Agent 安全 audit cheatsheet」付費 $79 / $299 lifetime（含 Sentry / MongoDB / Linear / GitHub / Slack 五大 server isolation pattern）；(b) 接「中型企業 MCP × Agent 攻擊面 audit + Cloudflare AI Gateway sandbox 配置」fixed-price $3K–$10K + 7 天 incident response retainer；(c) **6/17–6/22** 內容週「Agentjacking + MCP isolation + Claude Code hooks 攔截」中文 LinkedIn / Threads 連發；威脅：自家 MCP server 沒做 payload sanitization 的 indie 7 天內客戶 emergency inbound | [The Hacker News — Agentjacking Attack Tricks AI Coding Agents](https://thehackernews.com/2026/06/agentjacking-attack-tricks-ai-coding.html) / [GBHackers — Agentjacking Hijacks AI Coding Agents](https://gbhackers.com/agentjacking-attack-hijacks-ai-coding-agents/) / [The Next Web — Agentjacking fake bug report hijack](https://thenextweb.com/news/agentjacking-ai-coding-agents-sentry) / [DecryptionDigest — Agentjacking 2,388 Orgs Exposed](https://www.decryptiondigest.com/blog/agentjacking-sentry-mcp-ai-coding-agent-attack) / [CSA — Agentjacking MCP Sentry Injection research note](https://labs.cloudsecurityalliance.org/research/csa-research-note-agentjacking-mcp-sentry-injection-20260612/) |
| **xAI Grok Build Plugin Marketplace 6/11 開賣 beta + 六家 launch partner（MongoDB / Vercel / Sentry / Chrome DevTools / Cloudflare / Superpowers）**：plugin 打包「skills + slash commands + agents + hooks + MCP servers + LSPs」一份；remote plugin pin 到特定 commit SHA；catalog 開源在 GitHub；third-party 走 PR 提交；六家覆蓋 DB / 部署 / error / browser / edge / workflow 核心 dev infra | 對 Claude Code skills + plugins、Cursor SDK customTools、Antigravity plugins、Hugging Face Serge 開源四方 plugin / MCP ecosystem 競爭分明；對 indie / 一人公司「一份 plugin 跑遍四平台」變現窗口開啟；對中型 dev team 採購「同一 vendor 跨平台 plugin 統一管理」第一次有具體方案；對單押 Claude Code skills 變現的 indie 是新競品壓力 | 機會：(a) **本週**寫「自家 vertical plugin × 四平台同步發佈」（同一份 MCP server 打包成 Claude Code skill / Cursor customTool / Grok Build plugin / Antigravity plugin）audit $2K–$6K；(b) **6/17–6/22** 內容週「Plugin / MCP ecosystem 四平台對照表」中英連發；(c) 接 SI 二級顧問「中型企業 plugin 統一治理」audit $3K–$10K；威脅：單押 Claude Code 變現的 indie 30 天內需擴平台支援 | [xAI — Grok Build Plugin Marketplace](https://x.ai/news/grok-plugin-marketplace) / [MarkTechPost — xAI Ships Grok Build Plugin Marketplace](https://www.marktechpost.com/2026/06/11/xai-ships-grok-build-plugin-marketplace-with-mongodb-vercel-sentry-chrome-devtools-cloudflare-and-superpowers-plugins-at-launch/) / [Crypto Briefing — MongoDB plugin Grok Build Marketplace](https://cryptobriefing.com/mongodb-plugin-grok-build-marketplace/) / [Crypto Briefing — xAI Sentry plugin Grok Build](https://cryptobriefing.com/xai-sentry-plugin-grok-build/) |
| **Hugging Face Serge 6/12 開源 GitHub-native PR code review**：OpenAI 相容 LLM（不綁特定 model）+ repository-owned review rules（不是 hosted SaaS 黑箱）+ GitHub 原生 PR review UI；定位：「catch issues early、help maintainer 跟上 PR volume、適應 repo 現有慣例」；不取代人工 review；開源在 github.com/huggingface/serge | 對 Cursor Bugbot 7/1 改 usage-based $1.00–$1.50/run 商業模式直接對打；對 Greptile / CodeRabbit 中型團隊定價競爭加壓；對「客戶 source code 不出公司網域」訴求中型企業是現成解；對 dev tool agency / freelancer 是新 audit niche | 機會：(a) **本週**寫「Cursor Bugbot vs Greptile vs CodeRabbit vs Serge self-host」四方對比 + 自架 LLM (Ollama / OpenCode) 成本試算 audit $1.5K–$5K；(b) **6/17–6/22** 內容週「自架 Serge + 中型 dev team 30 天 cost down 60% case study」中文連發；(c) 賣中型企業 SaaS（dev team 30–200 員 + 客戶資料不出網域）的 indie 把 Serge 自架 + Linear / GitHub 整合包 $5K–$20K | [Hugging Face — Introducing Serge GitHub-Native AI Code Review](https://huggingface.co/blog/huggingface/serge) / [GitHub — huggingface/serge repo](https://github.com/huggingface/serge) / [BuildFastWithAI — AI News Today June 15 2026](https://www.buildfastwithai.com/blogs/ai-news-today-june-15-2026) |
| **Mistral Vibe（5/28 Le Chat 改名上線 + 6 月持續推 VS Code 擴充 / Code Mode / Slack triggers / CLI `/teleport`）—「歐方 AI Act 8/2 + 美方 BIS 雙重出口管制」夾擊下台日 indie 賣 EU 客戶的歐系 fallback 首選**：整合 chat + work agent + coding agent 於單一產品 + license；VS Code 擴充嵌 side panel 讀 / 寫 / 跑命令；Code Mode 連 GitHub 管 project + isolated sandbox + session persist + Slack thread 觸發（6 月推）+ CLI `/teleport` 在 terminal / editor / cloud 間移動 task；Pro 月 $14.99 / Team 月 $24.99 | 對 EU vertical 客戶採購「資料不出 EU 邊界」訴求第一次有 indie 等級可用方案；對中型企業（200–2,000 員 + EU 客戶）三家三軌備援（Mistral + Anthropic + OpenAI）合約附錄 SLO；對賣 EU compliance audit 的 freelancer 是直接收益升級點 | 機會：(a) **賣 EU vertical SaaS 的 indie** 今天起把「Mistral Vibe + Opus 4.8 + GPT-5.6 三軌備援 SLO」寫進合約附錄；(b) **6/17–6/22** 內容週「Le Chat → Vibe migration + VS Code 上手 + 為何 EU 客戶必裝」中英對照（中文供給零）；(c) 接「中型 EU vertical SaaS Mistral 整合」audit $3K–$10K；威脅：單押 Anthropic / OpenAI 的 indie EU 客戶採購排序下降 | [Mistral — Vibe agent product page](https://mistral.ai/products/vibe/) / [Mistral — Vibe gets to work](https://mistral.ai/news/vibe-agent/) / [Winbuzzer — Mistral Replaces Le Chat with Vibe](https://winbuzzer.com/2026/06/01/mistral-rebrands-le-chat-as-vibe-for-work-and-coding-xcxwbn/) / [MLQ News — Mistral Rebrands Le Chat as Vibe](https://mlq.ai/news/v2/mistral-rebrands-le-chat-as-vibe-launches-autonomous-work-agent-for-enterprise/) / [Cybernews — Mistral rebrands chatbot to Vibe AI agent](https://cybernews.com/ai-news/mistral-rebrands-vibe/) |
| **SPCX 第一個交易日 6/15（週末休市後）+10.6%、日內峰值 $179.43、收 ~$177.99、IPO 兩日累計 +33%**：6/15 開盤 ~$160.95、午盤一度 $179.43、收盤 ~$177.99；從 IPO $135 兩日累計 +33%；S-1 揭露 Anthropic 月付 $1.25B 直到 2029/5、Google 月付 $920M 直到 2029/6、SpaceX 年化 $26B contracted compute revenue 不變；Magnificent Seven 第二日反應仍待追蹤 | 對 indie 採購「Anthropic compute contracted 到 2029」narrative 第二日 buy-side vote 確認；對中型企業 12/15 IPO 前提案「Anthropic compute 雙保險」narrative 持續加分；對賭「SPCX 第一週崩」的個股部位 indie 個人理財已調整 | 機會：(a) 寫 LinkedIn / Threads 中文系列「SPCX 第一週 +33% × Anthropic IPO 12/15 倒數 182 天」narrative；(b) 賣中型企業 vertical SaaS 提案 narrative 第二週升級「IPO 前採購信心」一頁；威脅：賭崩盤的 indie 個人理財需重新平衡 | [Robinhood — SPCX Stock Price Quote](https://robinhood.com/us/en/stocks/SPCX/) / [Investing.com — SpaceX Stock IPO Date Share Price News](https://www.investing.com/equities/spacex) / [TipRanks — SPCX Stock SpaceX Price Quote News Analysis](https://www.tipranks.com/stocks/spcx) |
| **Project Glasswing 擴大到 ~150 orgs in 15 countries、10,000+ high/critical severity vulnerabilities 已找出**：4 月推 Glasswing；partners 含 AWS / Anthropic / Apple / Broadcom / Cisco / CrowdStrike / Google / JPMorganChase / Linux Foundation / Microsoft / NVIDIA / Palo Alto Networks；6/9 partners 從 April Mythos Preview 切到 Mythos 5（同 Fable 5 底層 / safeguards lifted）；Anthropic 承諾 $100M usage credits + $4M direct donations to open-source security organizations | 6/12 BIS Mythos 5 停服後 Glasswing partners 是否仍能用 Mythos 5 公開不明（值得 6/17–6/19 追蹤）；對賣 cybersecurity vertical SaaS 的 indie，「Glasswing partner 標準 + Anthropic Public Record 透明度」是新可寫進客戶提案的 narrative；對台日中型企業（金融 / 醫療 / 公共服務）採購是 indirect 但具體訊號 | 機會：(a) 寫「Glasswing partner 標準對台日中型企業採購意義」白皮書 LinkedIn 連發；(b) 賣 cybersecurity vertical SaaS 的 indie 把「Glasswing partner 標準對齊」當客戶提案 narrative 加分；(c) 接 SI 二級顧問業務 audit「Glasswing 標準 vs 台日金融業合規」fixed $5K–$15K；威脅：對賭「Mythos 5 stop」的 indie 採購提案需短期重寫 | [Anthropic — Project Glasswing](https://www.anthropic.com/project/glasswing) / [HPCWire — Anthropic Unveils Project Glasswing](https://www.hpcwire.com/aiwire/2026/04/09/anthropic-unveils-project-glasswing-as-claude-mythos-targets-software-vulnerabilities/) / [CyberScoop — Anthropic expanding access Glasswing](https://cyberscoop.com/anthropic-project-glasswing-expansion-critical-infrastructure-claude-mythos/) / [Anthropic — Glasswing initial update research](https://www.anthropic.com/research/glasswing-initial-update) |

## 🛠 新興 AI 工具

| 工具 | 類別 | 用途 | 定價 | 差異點 | 採用建議 |
| ---- | ---- | ---- | ---- | ------ | -------- |
| Mistral Vibe（5/28、6 月持續推 VS Code / Code Mode / Slack） | LLM 全棧 + agent 平台 | chat + work agent + coding agent 三合一；VS Code 擴充嵌 side panel；Code Mode 連 GitHub + isolated sandbox；CLI `/teleport` 跨 surface 移動 task | Pro 月 $14.99 / Team 月 $24.99 | 歐方背景 + Le Chat 全家收編單一 license；EU 客戶「資料不出 EU 邊界」現成選項 | 賣 EU vertical SaaS 的 indie：寫進四軌備援 SLO；台日中型企業 EU 客戶採購提案必含 |
| xAI Grok Build Plugin Marketplace（6/11 beta） | plugin / MCP ecosystem | plugin 打包 skills + slash commands + agents + hooks + MCP servers + LSPs；remote plugin pin commit SHA；catalog 開源 GitHub；third-party 走 PR | 含 Grok / Grok Build 訂閱（plugin 多數開源免費） | 第三家 plugin marketplace（前有 Claude Code skills + Cursor customTools），launch partner 涵蓋 dev infra 核心 | 賣 dev tool agency 的 indie：包「四平台 plugin 同步發佈」audit $2K–$6K；單押 Claude Code 變現的 indie 需 30 天內擴平台 |
| Hugging Face Serge（6/12 開源） | GitHub-native PR code review | OpenAI 相容 LLM；repository-owned rules；GitHub PR review UI；不取代人工 | 開源免費（自帶 API key 或自架 LLM） | 唯一開源 + 不綁 model + 不綁 hosted SaaS；對「客戶 source code 不出網域」是現成解 | 賣中型企業 SaaS（dev team 30–200 員 + 資料不出網域）的 indie：包自架 Serge + Linear / GitHub 整合 $5K–$20K；寫「自架 30 天 cost down 60%」case study LinkedIn 連發 |
| Antigravity CLI（6/18 取代 Gemini CLI consumer 通道、倒數 2 天） | agent CLI + harness | 多 agent orchestration、async workflow、shared harness、Go binary、Antigravity plugins；Windows AI Engine sub-100ms 響應 | consumer 通道 6/18 hard cut Gemini CLI；enterprise 通道不變 | 唯一同時跨「desktop app + CLI + plugin ecosystem」三件套 | **今天起 2 天**：grep `gemini` 全 repo / CI / client deliverable 最後 final check；接「Gemini CLI 遺產 migration」audit $1.5K–$5K 最後窗口 |
| Cursor Bugbot 7/1 改 usage-based $1.00–$1.50/run（倒數 15 天） | dev tool 帳務升級 | 1 step `/review` 命令；Teams / Individuals 雙模式；split usage pool；即時 spend forecast | 新客戶立即；續約客戶 7/1 起算；90% team 預期降價 | 與 6/12 Serge 開源直接對打；7/1 後 dev team 預算重做窗口 | 賣 dev tool agency 的 indie：包「Bugbot vs Serge vs Greptile vs CodeRabbit」四方對比 audit $1.5K–$5K；7/1 前是 inbound 高峰 |
| OpenCode 開源 coding agent（160K+ stars / 7.5M MAU / 25M ARR、6 月） | terminal-native AI coding agent | 75+ AI provider 含 local Ollama；MIT；LSP 25+ 語言；parallel multi-session | 開源免費（自帶 API key）；Zen hosted tier 額外收費 | Fable 5 不可用後第四層備援（Opus 4.8 / Sonnet 4.6 / Mistral Vibe / OpenCode self-host）；台日「資料不出公司」訴求現成方案 | 賣 dev tool agency 的 indie：包 self-host audit $2K–$6K；做「客戶資料不出網域」vertical SaaS 用作底層 |
| Replit Agent + Stripe Workspace + Shopify 整合（6 月更新） | vibecoding 全棧 | Stripe 在 collaborative workspace 跑、Shopify 賣實體商品、Microsoft Fabric data apps、easier 自訂 domain DNS、SEO Agent 一鍵 fix | 含 Replit Pro / Teams 訂閱 | 唯一「vibecoding + 電商 + 資料 app + 自訂 domain」一站整合 | 跑 vertical e-commerce vibecoding SaaS / 跨境小品牌：本週試「Replit + Shopify + Stripe」協作 workspace PoC；接「跨境小品牌 1 鍵電商」audit $1.5K–$5K |

## 💡 SaaS 點子

### 點子 1：「MCP × AI coding agent 安全 audit cheatsheet + Cloudflare AI Gateway sandbox + 7 天 incident retainer」中型企業 IT security audit（6/12 Agentjacking 後 7 天最高優先窗口）🆕

- 痛點來源：6/12 Agentjacking 公開、Tenet Threat Labs 揭露 6/3、Sentry 拒絕 root fix 改用 global content filter；2,388 orgs 暴露；任何持有 Sentry DSN 的人可送 fake bug report → MCP server → AI agent 跑惡意 npx；風險擴及任何 MCP server 把外部影響資料回給 agent 的場景；中型企業 IT / CIO 急需「7 天內 audit 內部 MCP × Agent 攻擊面 + 緊急 response retainer」；現有 OWASP / SANS 攻擊面 audit 不含「MCP server 餵 agent」這層
- 目標客群：中型企業 IT / 採購 / CIO（dev team 30–500 員）；做 IT security audit 的 freelancer；賣 vertical SaaS 給金融 / 醫療 / 公共服務的 indie
- 技術複雜度：3/5（Cloudflare AI Gateway 配置 + payload sanitization + Claude Code hooks 攔截 + MCP server isolation pattern + workflow approval gate）
- 預估 MRR：$5K–$20K（cheatsheet 訂閱）/ $3K–$10K（單次 audit）+ 7 天 retainer
- 競品弱點：OWASP / SANS 不含「MCP server 餵 agent」這層；Sentry 拒絕 root fix 已是公開短期 narrative 漏洞；台日中文供給為零
- 切入建議：(a) **今天起 7 天**ship landing「MCP × AI coding agent 安全 audit cheatsheet」（嵌 typeform + Stripe；付費 $79 / $299 lifetime；含 Sentry / MongoDB / Linear / GitHub / Slack MCP 五大 server isolation pattern + payload sanitization + workflow approval gate）；(b) fixed-price audit $3K–$10K + 7 天 incident response retainer；(c) **6/17–6/22** 內容週「Agentjacking + MCP isolation + Claude Code hooks 攔截」中文 LinkedIn / Threads 連發；首 5 家拍 case study

### 點子 2：「Le Chat → Mistral Vibe migration + VS Code 上手 + EU 客戶四軌備援 SLO 範本」白皮書（5/28 後 + 6/12 BIS 後 30 天視窗）🆕

- 痛點來源：5/28 Mistral 把 Le Chat 改名 Vibe + 整合 chat / work / coding agent；6/12 BIS Fable 5 / Mythos 5 停服後 EU vertical 客戶「美方政策風險 + EU AI Act 8/2 倒數 47 天」雙重壓力；多數 indie / 客戶 deliverable 假設「Anthropic 永遠在歐方可賣」；現有四軌備援（Opus 4.8 + Sonnet 4.6 + Mistral Vibe + OpenCode）SLO 範本台日中文社群供給為零
- 目標客群：賣 EU vertical SaaS 的 indie（200–2,000 員客戶）；做 EU compliance audit 的 freelancer；台日中文 EU 客戶顧問
- 技術複雜度：2/5（Mistral Vibe 配置 + VS Code 擴充上手 + 四軌備援 fallback 路由 + DPIA[^dpia] 範本更新）
- 預估 MRR：$4K–$15K（白皮書訂閱）/ $3K–$10K（中型企業 EU 整合 audit）
- 競品弱點：Mistral 官方文件偏 EU enterprise / 缺中文台日 indie SI 視角；現有 DPIA 範本不含「美方 BIS / 歐方 AI Act / 中方出口管制」三邊 cross-check；台日中文 EU 客戶採購供給為零
- 切入建議：(a) **本週**ship landing「Le Chat → Mistral Vibe migration + VS Code 上手 + EU 客戶四軌備援 SLO 範本」（嵌 typeform + Stripe；付費 $99 / $399 lifetime；含四軌備援 SLO 範本 + DPIA 範本 + Cloudflare AI Gateway 配置 + EU AI Act 8/2 checklist）；(b) fixed-price 中型企業 EU 整合 audit $3K–$10K；(c) **6/17–6/22** 內容週「Le Chat → Vibe migration + 為何 EU 客戶必裝」中英連發（中文供給零）；首 5 家拍 case study LinkedIn / Threads

### 點子 3：「Plugin / MCP ecosystem 四平台同步發佈 SDK + 中型企業統一治理 playbook」dev tool agency audit（6/11 Grok Build Plugin Marketplace + 6/18 Antigravity 後 30 天視窗）🔄

- 痛點來源：6/11 Grok Build Plugin Marketplace launch；前有 Claude Code skills + plugins、Cursor SDK customTools；6/18 Antigravity plugins 上線；6/12 Hugging Face Serge 開源 + 自架 LLM 路徑；多數 indie / 客戶開發完一份 plugin 重複包成 4 種格式發 4 個 marketplace；中型 dev team 採購「同一 vendor 跨平台 plugin 統一管理」第一次有具體需求
- 目標客群：賣 dev tool agency / freelancer 的 indie；自架 vertical plugin 變現的 indie；中型 dev team IT / DevOps 採購（30–200 員）；SI 二級顧問業務
- 技術複雜度：3/5（同一份 MCP server 打包 4 平台 + commit SHA pin + GitHub catalog PR 流程 + 各平台 review policy）
- 預估 MRR：$3K–$10K（SDK 訂閱）/ $2K–$6K（單次 audit）
- 競品弱點：各家 marketplace 官方文件不教「跨平台同步發佈」；現有第三方 SDK 偏單平台；台日中文供給為零
- 切入建議：(a) **本週**ship landing「Plugin / MCP ecosystem 四平台同步發佈 SDK + 中型企業統一治理 playbook」（嵌 typeform + Stripe；付費 $79 / $299 lifetime；含四平台對照表 + 同步發佈腳本 + GitHub catalog PR 範本）；(b) fixed-price audit $2K–$6K（30 天：客戶現有 plugin / MCP 盤點 + 四平台同步發佈 + 統一治理 playbook）；(c) **6/17–6/22** 內容週「Plugin / MCP ecosystem 四平台對照表」中英連發；接 SI 二級顧問「中型企業 plugin 統一治理」audit $3K–$10K

## 🧰 工具堆疊更新

- **跑 Claude Pro / Max / Team 訂閱**：Fable 5 停服 Day 5、華府談判中無時間表；自家 codebase migration / KB rebuild / refactor / deep PR review / nested subagent PoC 持續跑 Opus 4.8 baseline；同步補 Mistral Vibe（EU 客戶必要）+ OpenCode self-host（資料不出網域）+ Sonnet 4.6 量產三層備援
- **跑 24/7 background automation（claude -p / Agent SDK / Claude Code GH Actions）**：6/15 雙池上線 24 小時觀察期 — 今天起 7 天觀察 Pro $20 是否撐過 1 週重度 nested subagent PoC、overflow billing 遺漏案例 inbound；同步檢查 Cloudflare AI Gateway spend limits + Auto Mode classifier + `/usage` 24h/7d 細項拆解 + Linear coding session credit 試算五條補齊
- **跑 Claude Code 生產自動化 / agency 服務**：v2.1.176 維持、`enforceAvailableModels` allowlist + Bedrock credential cache + Fable 5 auto-fallback（已實質變主用）；做「Fable 5 停服 / 復活雙路徑」演練 SOP 賣給 governance audit 客戶
- **做 dev tool agency / freelancer**：**6/17–6/22** 內容週主題三條並行——(1)「Agentjacking + MCP × Agent 安全 audit cheatsheet」（中文供給零、CIO 高 inbound）、(2)「Le Chat → Mistral Vibe migration + EU 客戶四軌備援 SLO」、(3)「Plugin / MCP ecosystem 四平台同步發佈 SDK」
- **接 Sentry MCP × AI agent 自架的中型 dev team**：**今天 ET 起 48 小時內**：(1) 全 MCP server payload sanitization 補；(2) Claude Code hooks 攔截規則加；(3) Cloudflare AI Gateway sandbox 配置；(4) workflow approval gate（敏感命令必經人工 approve）；(5) 7 天 incident response retainer 簽 freelancer
- **賣 EU vertical SaaS / EU 客戶顧問業務**：把「(1) 4 軌備援 SLO（Opus 4.8 + Sonnet 4.6 + Mistral Vibe + OpenCode）+ (2) DPIA 範本 + (3) Cloudflare AI Gateway spend cap + (4) EU AI Act 8/2 倒數 47 天 + (5) 美方 BIS 出口管制 fallback + (6) Anthropic Public Record 透明度」六件包成 fixed-price audit $5K–$25K
- **用 Linear 是 issue tracker 的 5–20 人小團隊**：升級拿 promotional credit pool；挑 1 條 vertical issue 整套跑通；確認 coding session 預設 model 已自動 fallback Opus 4.8；GitLab 客戶加 Cyrus 開源 fallback；新加 Hugging Face Serge 自架 PR review（資料不出網域）
- **用 Notion 是 source of truth 的中型團隊（30–200 員）**：**8/11 前免費窗口剩 56 天**；本週試 Notion Workers + Custom Agent + Slack 私頻道 PoC；加 Opus 4.8 baseline + Mistral Vibe EU fallback；拍 1–2 個 vertical case study 影片發 LinkedIn / Threads
- **賣中型企業 vertical SaaS（200–2,000 員）**：把「(1) Fable 5 停服 fallback 4 軌 SLO + (2) Anthropic compute 雙保險 contracted 2029 + (3) Anthropic IPO 12/15 / $1.10T median + (4) `enforceAvailableModels` allowlist + (5) Anthropic Public Record 透明度 + (6) EU AI Act 8/2 倒數 47 天 + (7) 美方 BIS 出口管制 cross-check + (8) TCS / DXC certified engineer 標準對齊 + (9) Agentjacking MCP isolation 證據包 + (10) Mistral Vibe EU 客戶現成 fallback」十件包成 fixed-price audit $5K–$25K
- **做 vertical iOS / macOS app**：續行 Foundation Models LanguageModel 協定 + Claude Swift package 路線；Fable 5 停服 + Mistral Vibe 推 VS Code 擴充 → on-device + Opus 4.8 + Mistral 三段路由 PoC 補完
- **跑 vertical e-commerce vibecoding SaaS / 跨境小品牌**：本週試 Replit Agent + Shopify + Stripe 在協作 workspace PoC；做「Replit + Shopify + Stripe 一鍵電商」audit $1.5K–$5K（4 軌備援 fallback 不依賴 Fable 5）

## ⚡ 今日行動建議

- [ ] **30 分鐘** Sentry MCP × AI coding agent 自架 dev team：今天 ET 內 grep 自家 MCP server 是否有「外部影響資料回 agent」場景；補 payload sanitization 與 Claude Code hooks 攔截規則
- [ ] **45 分鐘** 賣中型企業 IT security audit 的 freelancer：寫「MCP × AI coding agent 安全 audit cheatsheet」一頁範本；今天起 7 天 ship landing 付費 $79 / $299 lifetime
- [ ] **60 分鐘** 賣 EU vertical SaaS 的 indie：寫「Le Chat → Mistral Vibe migration + EU 客戶四軌備援 SLO」一頁範本；今天起 14 天主打發給 5–10 家目標 EU 客戶
- [ ] **60 分鐘** ship「Plugin / MCP ecosystem 四平台同步發佈 SDK」landing（嵌 typeform + Stripe；付費 $79 / $299 lifetime）+ LinkedIn / Threads 6/17 早 8 點台北時間發
- [ ] **30 分鐘** 6/15 雙池 24 小時觀察期：到 [console.anthropic.com](https://console.anthropic.com) 看 24h burn rate 是否符預期；若 overflow billing 沒打開即時設；確認 spend cap + Slack alert 正常觸發
- [ ] **45 分鐘** grep `gemini` 全 repo / CI / client deliverable**最後 final check**（6/18 Antigravity CLI 倒數 2 天）；接「Gemini CLI 遺產 migration」audit $1.5K–$5K 最後 inbound 窗口
- [ ] **45 分鐘** 寫「BIS export control weekly briefing」訂閱 newsletter MVP（$99/月）；首期主題「Fable 5 Day 5 + Tom Brown / Sarah Heck 華府談判 + indie 客戶提案合約附錄升級」（中文供給零）
- [ ] **30 分鐘** 自家 vertical workflow 試 Hugging Face Serge self-host + Ollama / OpenCode local model 跑 1 條 vertical PR review PoC；寫「自架 Serge + 中型 dev team 30 天 cost down 60%」case study 大綱

## ⏳ 待觀察

- 6/17–6/19 Anthropic 是否與華府達成 Fable 5 / Mythos 5 重新上線 deal——若 7 天內復活，「短期談判技術 compromise」narrative；若僵局延長 14 天以上，Opus 4.8 變實質長期主力、Anthropic Q3 收入指引 / IPO 12/15 timeline 風險升一檔
- 6/15 雙池上線後 48 小時 indie / 中型企業客戶 credit burn rate 實測：(a) Pro $20 是否撐過 1 週重度 nested subagent PoC；(b) overflow billing 遺漏案例是否引發大量 stop 客訴 → Anthropic 是否 48 小時內加 grace period
- 6/18 Antigravity CLI 收編 Gemini CLI 後 Reddit r/programming / r/golang / HN 第一波 migration 痛點實測：若湧現「找不到 X 等價」帖，是 dev tool agency 1 週內可賣 audit 的 hot 訊號
- 6/17–6/19 Project Glasswing partners 是否仍能用 Mythos 5：BIS directive 同樣涵蓋 Mythos 5；對 cybersecurity vertical SaaS / Glasswing 訴求的 indie，這條公開答案影響採購提案結構
- 6/17–6/22 Sentry 是否在「拒絕 root fix」公開後因社群壓力改口、加上 mandatory payload signing：對賣 MCP server 自架 / 安全 audit 的 indie，這條會直接影響 7 天內 niche window 寬度
- Mistral Vibe Slack triggers 是否在 6 月底前 GA：對賣 EU 客戶內部 Slack workflow 的 indie，這條決定四軌備援 SLO 是否可實際 demo
- Gemini 3.5 Pro 是否在 6/20 前 GA + Antigravity 2.0 desktop app + Antigravity CLI 三件套同步：對賭「Google 全端反擊」narrative 的 indie，這條決定 Gemini column 是否要在客戶提案 deck 升一階
- 6/22 後（過去原本是 Fable 5 改 credit deadline）Anthropic 是否在華府談判中讓步、公布部分區域恢復 Fable 5 / Mythos 5：indie 是否要重啟「Fable 5 1M context 大型 PoC」計畫
- xAI Grok Build Plugin Marketplace 30 天內 plugin 數量 / 採用度 growth：若超 100 個 third-party plugin / 1,000+ dev team 採用，「plugin ecosystem 三強鼎立」narrative 從預測變既定事實
- TCS / DXC Global Premier 後續：6/11 後台日 SI（NTT Data / 富士通 / Hitachi / 鴻海）是否在 7 月前公布類似 Anthropic alliance；對賭「Asia SI 二級轉包」的 indie 是 inbound 高峰
- EU AI Act 8/2 enforcement 倒數 47 天 + 6/12 BIS 出口管制 + Mistral Vibe 同期推 EU 友善 fallback：歐方是否在 7 月前對美方 BIS directive 同步回應？對賣 EU vertical 的 indie 是新題材

[^tom-brown]: Tom Brown 是 Anthropic 共同創辦人之一、現任 chief compute officer，主導公司算力採購與基礎設施規模化（含 Anthropic 與 Amazon、Google、SpaceX/SPCX 的多年期 compute 合約）；本篇在「華府談判」段落引用他親赴白宮，是因為他同時掌握技術與算力供應鏈兩端，被視為談判桌上的關鍵 technical principal。

[^mistral-vibe]: Mistral Vibe 是法國 Mistral AI 於 2026-05-28 把 Le Chat 改名升級後的旗艦產品，整合 chat、work agent 與 coding agent 於單一 license（Pro 月 $14.99 / Team 月 $24.99），並推出 VS Code 擴充、Code Mode 與 CLI `/teleport`；本篇把它列為「美方 BIS + 歐方 AI Act 雙重出口管制」夾擊下，台日 indie 賣 EU 客戶的歐系 fallback 首選。

[^agentjacking]: Agentjacking 是 Tenet Security Threat Labs 2026-06-03 揭露、6-12 公開的攻擊類型：攻擊者送 fake bug report 到 Sentry，透過 MCP server 把惡意內容餵給 AI coding agent（Claude Code / Cursor / Codex / Grok Build），agent 把它當 trusted system output 而執行 attacker-controlled npx 指令；首波公開即 2,388 個組織受影響，且 Sentry 拒絕 root fix。

[^cf-ai-gateway]: Cloudflare AI Gateway 是 Cloudflare 提供的 LLM proxy 層，可在請求進出 LLM 前統一做 rate limit、spend cap、payload 過濾、prompt 紀錄與 audit log；本篇把它列為 Agentjacking 攻擊後中型企業最快可上線的 sandbox / 防護層，搭配 Claude Code hooks 與 workflow approval gate 形成三道攔截。

[^serge]: Serge 是 Hugging Face 於 2026-06-12 開源的 GitHub-native PR code review 工具（github.com/huggingface/serge），走 OpenAI 相容 API（不綁特定 model）、由 repository owner 自寫 review policy、透過 GitHub 原生 PR review UI 留言；本篇把它定位為對 Cursor Bugbot $1/PR usage-based 商業模式的開源直接對打，並適合「客戶 source code 不出公司網域」的中型企業自架。

[^dpia]: DPIA（Data Protection Impact Assessment、資料保護影響評估）是 EU GDPR 第 35 條規定的事前風險評估文件，當資料處理可能對個人權益造成高風險時必須填寫；隨著 EU AI Act 2026-08-02 開始 enforcement，DPIA 範本需新增 LLM 供應商選擇、跨境傳輸與美方 BIS / 中方出口管制 cross-check 等欄位，是 EU vertical SaaS 合約附錄的標配。

## 📚 引用來源

1. [TechTimes — Anthropic Races to Lift Fable 5 Export Ban: Top Engineers Sent to Washington for a Deal](https://www.techtimes.com/articles/318376/20260615/anthropic-races-lift-fable-5-export-ban-top-engineers-sent-washington-deal.htm) — 2026-06-15
2. [Mezha — Anthropic engineers meet White House to resolve access dispute](https://mezha.net/eng/bukvy/f2adf80e_anthropic_engineers_meet/) — 2026-06-15
3. [explainx — Why Did the US Gov Ban Fable 5? The Full Anthropic Story](https://www.explainx.ai/blog/us-government-bans-fable-5-mythos-5-anthropic-export-control-2026) — 2026-06-15
4. [TECHSY — Will Anthropic's Fable 5 Be Back? Answers](https://techsy.io/en/blog/anthropic-fable-5-suspended) — 2026-06-15
5. [The Hacker News — Agentjacking Attack Tricks AI Coding Agents](https://thehackernews.com/2026/06/agentjacking-attack-tricks-ai-coding.html) — 2026-06-12
6. [GBHackers — New Agentjacking Attack Hijacks AI Coding Agents](https://gbhackers.com/agentjacking-attack-hijacks-ai-coding-agents/) — 2026-06-12
7. [Cyberpress — Agentjacking Attack Compromises AI Coding Agents for Code Execution](https://cyberpress.org/agentjacking-attack-ai-coding-agents/) — 2026-06-12
8. [The Next Web — Agentjacking: a fake bug report can hijack your AI coding agent](https://thenextweb.com/news/agentjacking-ai-coding-agents-sentry) — 2026-06-12
9. [Cloud Security Alliance Labs — Agentjacking MCP Sentry Injection research note](https://labs.cloudsecurityalliance.org/research/csa-research-note-agentjacking-mcp-sentry-injection-20260612/) — 2026-06-12
10. [Infosecurity Magazine — New Agentjacking Attacks Could Hijack AI Coding Agents](https://www.infosecurity-magazine.com/news/agentjacking-attacks-hijack-ai/) — 2026-06-12
11. [Decryption Digest — Agentjacking AI Coding Agent Attack: 2,388 Orgs Exposed](https://www.decryptiondigest.com/blog/agentjacking-sentry-mcp-ai-coding-agent-attack) — 2026-06-12
12. [xAI — Grok Build Plugin Marketplace launch](https://x.ai/news/grok-plugin-marketplace) — 2026-06-11
13. [MarkTechPost — xAI Ships Grok Build Plugin Marketplace](https://www.marktechpost.com/2026/06/11/xai-ships-grok-build-plugin-marketplace-with-mongodb-vercel-sentry-chrome-devtools-cloudflare-and-superpowers-plugins-at-launch/) — 2026-06-11
14. [Crypto Briefing — MongoDB plugin Grok Build Marketplace](https://cryptobriefing.com/mongodb-plugin-grok-build-marketplace/) — 2026-06-11
15. [Crypto Briefing — xAI Sentry plugin Grok Build](https://cryptobriefing.com/xai-sentry-plugin-grok-build/) — 2026-06-11
16. [Hugging Face — Introducing Serge: GitHub-Native AI Code Review](https://huggingface.co/blog/huggingface/serge) — 2026-06-12
17. [GitHub — huggingface/serge repository](https://github.com/huggingface/serge) — 2026-06-12
18. [Mistral — Vibe agent product page](https://mistral.ai/products/vibe/) — 2026-05-28
19. [Mistral — Vibe gets to work announcement](https://mistral.ai/news/vibe-agent/) — 2026-05-28
20. [Winbuzzer — Mistral Replaces Le Chat Assistant with New Vibe AI Agent for Work and Coding](https://winbuzzer.com/2026/06/01/mistral-rebrands-le-chat-as-vibe-for-work-and-coding-xcxwbn/) — 2026-06-01
21. [MLQ News — Mistral Rebrands Le Chat as Vibe](https://mlq.ai/news/v2/mistral-rebrands-le-chat-as-vibe-launches-autonomous-work-agent-for-enterprise/) — 2026-05-28
22. [Cybernews — Mistral rebrands its chatbot to an AI agent called Vibe](https://cybernews.com/ai-news/mistral-rebrands-vibe/) — 2026-05-28
23. [Robinhood — SPCX Stock Price Quote](https://robinhood.com/us/en/stocks/SPCX/) — 2026-06-15
24. [Investing.com — SpaceX Stock IPO Date Share Price News](https://www.investing.com/equities/spacex) — 2026-06-15
25. [TipRanks — SPCX Stock SpaceX Price Quote News Analysis](https://www.tipranks.com/stocks/spcx) — 2026-06-15
26. [Anthropic — Project Glasswing official](https://www.anthropic.com/project/glasswing) — 2026
27. [HPCWire — Anthropic Unveils Project Glasswing as Claude Mythos Targets Software Vulnerabilities](https://www.hpcwire.com/aiwire/2026/04/09/anthropic-unveils-project-glasswing-as-claude-mythos-targets-software-vulnerabilities/) — 2026-04-09
28. [CyberScoop — Anthropic expanding access to Project Glasswing](https://cyberscoop.com/anthropic-project-glasswing-expansion-critical-infrastructure-claude-mythos/) — 2026
29. [Anthropic — Project Glasswing: An initial update](https://www.anthropic.com/research/glasswing-initial-update) — 2026
30. [BuildFastWithAI — AI News Today June 15 2026 16 Biggest Stories](https://www.buildfastwithai.com/blogs/ai-news-today-june-15-2026) — 2026-06-15
31. [Google Developers Blog — Transitioning Gemini CLI to Antigravity CLI](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/) — 2026-05-19
32. [EU AI Act — Implementation Timeline](https://artificialintelligenceact.eu/implementation-timeline/) — 2026
33. [Anthropic — Statement on the US government directive to suspend access to Fable 5 and Mythos 5](https://www.anthropic.com/news/fable-mythos-access) — 2026-06-12
34. [Anthropic — Results from first Anthropic Public Record](https://www.anthropic.com/news/anthropic-public-record) — 2026-06-12
