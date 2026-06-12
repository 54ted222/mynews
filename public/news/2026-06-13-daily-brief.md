---
title: 每日創業情報 — 2026-06-13
date: 2026-06-13
tags: 創業情報, AI 產業, SaaS
summary: SPCX 收盤 $169（+25%）峰值 $176、市值破 $2T、Magnificent Seven 蒸發 $2T；Linear 6/11 上 coding sessions（Claude Code / Codex 直接接 issue 寫 PR）；Claude Code v2.1.173–175 加 VS Code /usage 細項拆解 + enforceAvailableModels；Anthropic IPO 預測中位 12/15 / $1.1T。
keywords: SPCX June 12 close 169 dollars first day Magnificent Seven 2 trillion erased, Linear coding sessions Claude Code Codex June 11 2026 issue delegate PR draft, Claude Code v2.1.175 v2.1.174 v2.1.173 VS Code usage attribution sub-agents Skills, Anthropic IPO December 15 2026 forecast 1.1 trillion median first day, SpaceX Anthropic 1.25 billion monthly Colossus xAI compute deal S-1 disclosure, Notion Workers developer platform CLI webhook custom agent free August 11 2026, Code with Claude Tokyo June 10 Outcomes Dreaming Multiagent Orchestration Managed Agents replay, Linear Asks GTM stack Claude Code Codex indie hacker delegate issue 20 dollar credit user pool, AI compute infrastructure 90x EBITDA multiple valuation justified market vote indie purchase narrative
---

# 每日創業情報 — 2026-06-13

## 🎯 今日 TL;DR

- **SPCX 首日 +25% 收 $169、峰值 $176、市值破 $2T、Magnificent Seven 反向蒸發 $2T——「AI infra 90× EBITDA 估值合理」被市場一次投票過關**：SPCX[^spcx] 6/12 9:30 ET 開盤 $150（+11%）、午後一度衝 $176.52、收盤約 $169（+25%）、單日量 360M+ 股、$350B 訂單超額認購；$75B 募資定錨「史上最大 IPO」；同時 NPR 報導 Magnificent Seven[^mag7]（MSFT / AMZN / AAPL / GOOG / NVDA / TSLA / META）因 summer IPO supply 預期一次蒸發 ~$2T 市值——「AI 公開市場流動性被新供給稀釋」敘事第一次具體落地。S-1 同步揭露：**Anthropic 月付 xAI $1.25B 租 Colossus 1[^colossus] 直到 2029/5**（年化 $15B、佔 Anthropic 2026 5 月 $47B run rate ~32%）+ Google 月付 SpaceX $920M 直到 2029/6；兩筆合計年化 $26B compute 收入是 SPCX 估值的硬底。**對 indie 兩條決定性讀數**：(a) **市場已替「Anthropic 半年內無新 compute source」框架投了反向票**——SPCX 用「$2.17B/月 contracted revenue」敘事 reframe 全部 AI infra，6/30 Colossus 1 折扣失效 + 12 月 Anthropic IPO 兩條時間軸**不再是壓力而是 vendor moat 強化**，今天起把「Anthropic 永遠用得起 Colossus 1」當成可賣的客戶信任 anchor；(b) **Anthropic IPO 預測中位 12/15、median $1.10T、OpenAI 2027/3/late、median $1.08T**——今天起到 12/15 是「Anthropic 從 underdog 到盈利 IPO 候選」narrative 賣點視窗，台日中型企業採購提案附「6 個月後 IPO」一頁 brief 是新標配
- **Linear coding sessions[^linear-coding] 6/11 launch：直接 delegate issue 給 Claude Code / Codex 跑、draft PR + diff、用 Linear 工作區共享 credit pool（$20 × seat 數）——indie / 小團隊 issue tracker 與 coding agent 第一次原廠串接**：Basic / Business / Enterprise 全 plan 開通；delegate 一張 issue → Linear 開一條 coding session → 自動拉 repo + skills.md[^skills-md] context → Claude Code 或 Codex 跑 → 草稿 PR + diff 貼回 issue；coding session 不只支援 issue 內觸發，也支援 chat / comment / Slack thread；定價走 **promotional credit pool**（$20 × unsuspended user 數，全 workspace 共用）。**對 indie / 5–20 人小團隊兩條 niche**：(a) **本週**至少挑 1 條 vertical issue（bug fix / 小 feature / refactor）整套 delegate 流程跑通，寫成 case study 換 LinkedIn / Threads 引流（中文社群供給零）；(b) **賣 dev tool agency / Claude Code consultant 的 indie** 把「Linear coding session × skills.md × workspace 共享 credit 試算」做成 audit $1.5K–$5K（30 天：選 3–5 條 issue 類型 + 寫客製 skills.md + 跑 PoC + 月 credit 預算），與 Cursor Bugbot $0.40/PR + Claude SDK 6/15 雙池 credit 對接做「pre-PR / pre-merge / post-merge 全鏈 spend cap」三段式套裝
- **Claude Code v2.1.173–175（6/11–6/12）三檔小更新：VS Code `/usage` 加 sub-agents / Skills / Agents / Plugins / MCP 細項拆解 + enforceAvailableModels managed setting + 退出 1–2s 延遲修——「nested subagent + workflow 用量黑箱」第一次有官方拆解 dashboard**：v2.1.174 在 VS Code 帳號 / `/usage` 對話框加 **24h / 7d「cache miss / long context / sub-agents」**與「Skills / Agents / Plugins / MCP」雙維拆解；v2.1.175 加 **`enforceAvailableModels`[^enforce-models]** managed setting——企業 admin 啟用後 default model 若 resolve 到不在 allowlist 的 model 會自動 fallback 到第一個允許的 model、user / project settings 不能擴大；v2.1.174 另修 macOS / Linux 上中斷或 force-kill shell command 後退出 1–2s 延遲，與 skill hot-reload 全列表重發 bug。**對 indie 兩條決定性影響**：(a) **6/15 雙池前 2 天**剩最後 1 個工作天視窗——把「Bugbot + Fable 5[^fable-5] + Claude SDK + nested subagent」spend cap 試算工具改用 `/usage` 24h/7d 細項拆解做後台資料源（之前需自架計帳），LinkedIn / Threads 引流升級「現在用 Claude Code 內建 /usage 直接看 nested subagent 燒幾根 token」內容週；(b) **賣中型企業 governance audit 的 indie** 把 `enforceAvailableModels` + 6/10 Tokyo 公布的 Auto Mode[^auto-mode] + safe-mode + Automemory 五件套寫成 fixed-price $5K–$15K 採購包（含 SOC 2 報告附錄 / DPIA 範本 / EU AI Act 8/2 倒數 50 天 checklist）
- **Notion Developer Platform 進度 + 6/10 後 Slack 私頻道讀寫 + Workers[^notion-workers] 8/11 開始收費前免費窗口——「給 Custom Agent 加自家 Worker 程式碼擴 MCP / 寫 webhook」是 indie 接 enterprise 新 niche**：5/13 Notion 推 Developer Platform 主版（CLI + Workers 沙箱 + webhook 雙向），6/10 後 Custom Agent 可在私 Slack 頻道讀寫、Workers 是 Notion 自家 hosted runtime（自寫程式 + CLI deploy + sandbox run）；**launch partner 含 Claude Code、Cursor、Codex、Decagon**；**8/11 才開始按 Notion credit 計費，現在到 8/11 是免費試吃**。**對 indie 的真正 niche**：(a) **本週**把自家 vertical workflow 中「Notion 是 source of truth + Custom Agent 寫 Worker 做 webhook trigger / database 雙向 sync」這條 pipeline 跑通，**8/11 前**把 1–2 個 case study 拍進 demo 影片；(b) 賣 Notion 顧問業務 / 中型團隊 internal tools 顧問 freelancer 把「Worker × Slack 私頻道 × MCP 客製」三件套包成 fixed-price audit $2K–$8K（內含 8/11 後 credit 估算與 fallback 開源 webhook server 撤退方案）；台日中文社群幾乎零 Workers 教學供給
- **Anthropic-xAI $1.25B/月 Colossus 1 deal S-1 全揭：Anthropic 5 月 $47B run rate 的 ~32% 砸在算力租賃、xAI Colossus 1 H100 / H200 / GB200 混架構訓練不順才轉租——「Anthropic 算力 lock-in」被 reframe 為「xAI 存貨被 Anthropic 吃下」**：SpaceX S-1 公開：Anthropic 月付 $1.25B 直到 2029/5、Google 月付 $920M 直到 2029/6，兩筆合計 SpaceX 年化 $26B；同時 SpaceX 自家 AI segment Q1 2026 經營虧 $2.47B、AI 資本支出 2025 $12.7B / Q1 2026 又燒 $7.7B；DCD 與 Tesery 同步揭露：「**Colossus 1 H100 / H200 / GB200 混架構大規模訓練不順、xAI 自家訓練已搬 Colossus 2、Colossus 1 是 infra surplus 才租出**」。**對 indie 採購敘事一次性反轉**：(a) **本週**把「Anthropic compute lock-in = vendor moat 第一層、xAI infra surplus + Google compute 雙保險 = vendor moat 第二層」寫進 client 提案 / 合約附錄（取代過去「Colossus 1 失效後 Anthropic 半年內找新 source」緊張敘事）；(b) 對賣中型企業 vertical SaaS 的 indie，6/15 雙池後第一週若 Anthropic 沒對 Pro / Max rate limit 公開緊縮，「Anthropic compute 已 contracted 到 2029」是賣中型企業 12/15 IPO 前採購提案的 narrative 加分一頁

## 🔄 昨日追蹤

### SPCX 6/12 開盤位置 ✅ 收場：+25% 收 $169、峰值 $176

**狀態 confirmed**：昨日「待觀察」第 1 條 SPCX 開盤位置——答案是**+25% 收 $169、峰值 $176.52、量 360M+、訂單超額 $350B、市值破 $2T**，落在我預測「moderate first-day pop $150–200」區間上緣；**對 6/30 Colossus 1 折扣失效後 Anthropic compute rate 上升敘事，市場用 +25% 給 reverse vote**——「AI infra 90× EBITDA」估值被一次驗證、indie 不必再急著押「Anthropic compute 半年內崩」場景。**indie 應對升級**：(a) **今天起到 6/30**寫「SPCX +25% → Anthropic IPO 12/15 / $1.10T median」連續 LinkedIn / Threads 系列（中文社群供給零）；(b) 6/12 早上想 ship「多 vendor fallback 路由 audit」的 indie，把「Anthropic compute 雙保險（Colossus 1 + Colossus 2 transition）」當成升級點寫進銷售一頁

### Anthropic Agent SDK 雙池計費 6/15 🔄 倒數 2 天

**狀態：v2.1.174 加 /usage 細項拆解後，indie 客戶能用內建 dashboard 量化雙池 burn rate**：6/15 起 `claude -p` / Agent SDK / Claude Code GH Actions / 3rd party agent app 改吃獨立 $20 / $100 / $200 月 credit、按 full API rate、無 rollover、無自動 fallback；v2.1.174 在 VS Code `/usage` 加 24h / 7d「cache miss / long context / sub-agents」與「Skills / Agents / Plugins / MCP」拆解——之前要自架計帳的「nested subagent + workflow 用量」現在 Claude Code 內建提供。**今天最後 1 個工作天**：拚「Bugbot + Claude SDK + Fable 5 + nested subagent 試算工具」一鍵接 Cloudflare AI Gateway[^cf-ai-gateway] + 用 `/usage` 細項做後台資料源 ship 視窗

### Cursor Bugbot $1/PR usage-based 🔄 GA 第 6 天 + 7/1 大改帳

**狀態升級**：6/10 Cursor 公布 Teams 加新 Premium seat（重度 agent 用戶專屬）+ 「split usage pools」+ 即時 spend forecast——預計 90% team **降價**；新客戶立即生效、續約客戶從 **7/1 開始算**。對「Bugbot + Linear coding session + Fable 5 三邊 cost 試算」內容週**6/13–6/19** 加 Bugbot Teams Premium seat column 比較；7/1 是 dev tool agency 顧問業務「Cursor Teams 預算重做」客戶 inbound 窗口

### Anthropic Colossus 1 discount rate 6/30 失效 🔄 倒數 17 天 + SPCX 確定 vendor moat

**狀態反轉**：SpaceX S-1 揭露 Anthropic 月付 $1.25B 直到 2029/5——「Colossus 1 是 contracted vendor moat 不是壓力源」一次性 reframe；同期 xAI Colossus 1 H100 / H200 / GB200 混架構 xAI 自家訓練不順、xAI 自家移到 Colossus 2、Colossus 1 是 infra surplus；對 indie 採購敘事**反向利多**——「Anthropic compute 雙保險 contracted 到 2029」是賣中型企業 12/15 IPO 前提案的 narrative 加分

### Gemini 3.5 Pro 是否 6 月底前 GA 🔄 倒數 17 天

**狀態 unchanged**：仍在 Vertex AI 限定 enterprise preview、目標 6 月底 GA、2M context + Deep Think；Tokyo Multiagent Orchestration[^multiagent] 推 agent harness 競爭軸；今天用 Fable 5 1M context 跑對標 PoC 預留 Gemini column

### EU AI Act 8/2 GPAI enforcement 🔄 倒數 50 天

**狀態升級**：Claude Code v2.1.175 `enforceAvailableModels` managed setting + 6/10 Tokyo Auto Mode（classifier）+ Automemory + safe-mode 五件套——對賣 EU / 受監管客戶的 indie 是 governance audit 立即可賣的硬證據；6/30 前 audit checklist + DPIA[^dpia] 範本要把 `enforceAvailableModels` allowlist + Fable 5 30 天 retention 明寫進客戶合約附錄

### Fable 5 6/22 後改吃 credit 🔄 倒數 9 天

**狀態 unchanged**：Pro / Max / Team 含 Fable 5 到 6/22；Tosea / HN 6/10 後早期 cost shock 數據 ongoing；今天起 9 天最後免費窗口，自家 codebase migration / KB rebuild / deep PR review / nested subagent PoC 全部跑滿

## 📰 AI 產業動態

| 事件 | 影響 | 機會/威脅 | 來源 |
| ---- | ---- | --------- | ---- |
| **SPCX 6/12 首日 +25% 收 $169、峰值 $176、市值破 $2T、Magnificent Seven 蒸發 ~$2T**：開盤 $150（+11%）、單日量 360M+、訂單超額 $350B；S-1 揭露 Anthropic 月付 $1.25B 租 Colossus 1 到 2029/5、Google 月付 $920M 到 2029/6、合計 SpaceX 年化 $26B contracted compute revenue；Magnificent Seven（MSFT / AMZN / AAPL / GOOG / NVDA / TSLA / META）因 summer IPO supply 預期一次蒸發 $2T；Anthropic IPO 預測中位 12/15 / $1.10T、OpenAI 2027/3 late / $1.08T | 「Anthropic compute lock-in」被反轉成「vendor moat contracted 到 2029」——對 indie 採購敘事一次性加分；對賭「AI 公開市場流動性被新供給稀釋」的中型企業 IT 決策者，summer / fall IPO supply 三波（SPCX / Anthropic / OpenAI）已被 Magnificent Seven 提前承壓；對台日中型企業，「6 個月後 Anthropic IPO」narrative 是新採購提案標配 | 機會：(a) **今天起到 6/30** ship「SPCX +25% → Anthropic IPO 12/15 / $1.10T median」LinkedIn / Threads 中文系列（中文社群供給零）；(b) 賣中型企業 vertical SaaS 的 indie 把「Anthropic compute 雙保險 contracted 到 2029」當成 governance 提案的 narrative 加分（替代「Colossus 1 半年內崩」緊張敘事）；(c) 做 AI infra / cloud 顧問業務的 freelancer 接「Magnificent Seven 重新評估」企業 IT 預算 audit $5K–$15K；威脅：賭「Magnificent Seven 受 SPCX 提振」的個股部位 indie 個人理財被反向衝擊 | [CNBC — SPCX live updates +25% historic volume](https://www.cnbc.com/2026/06/12/spacex-ipo-spcx-live-updates.html) / [NPR — SpaceX stock skyrockets first day](https://www.npr.org/2026/06/12/nx-s1-5855004/stock-ai-spacex-ipo-elon-musk) / [TradingKey — SPCX debuts $135 first 90 days](https://www.tradingkey.com/analysis/stocks/us-stocks/261960721-spacex-ipo-is-live-at-135-bull-base-and-bear-cases-for-the-first-90-days-tradingkey) / [DCD — SpaceX S-1 Anthropic $1.25B monthly](https://www.datacenterdynamics.com/en/news/spacex-ipo-filing-reveals-anthropic-set-to-pay-musks-firm-125bn-a-month-to-rent-xai-data-center-space/) / [Tesery — SpaceX $45B Anthropic compute deal](https://www.tesery.com/blogs/news/spacex-unveils-landmark-45-billion-ai-compute-deal-with-anthropic-in-ipo-filing) / [Yahoo Finance — Why SPCX OpenAI Anthropic IPOs won't derail bull market](https://finance.yahoo.com/markets/article/why-the-spacex-openai-and-anthropic-ipos-wont-derail-the-bull-market-112903023.html) / [Futuresearch — Anthropic OpenAI IPO dates valuations](https://futuresearch.ai/anthropic-openai-ipo-dates-valuations/) |
| **Linear 6/11 上 coding sessions：delegate issue → Claude Code 或 Codex draft PR + diff、workspace 共享 promotional credit pool（$20 × unsuspended user 數）**：Basic / Business / Enterprise 全 plan；session 可從 issue / chat / comment / Slack thread 觸發；自動拉 repo + skills.md context；Linear Agent 之前 3/24 已上、6/11 加 coding capability；同期第三方 cyrusagents/cyrus 開源 worktree 隔離工具支援 Linear / Slack / GitHub / GitLab + Claude Code / Codex / Cursor / Gemini | indie / 小團隊「issue tracker × coding agent」第一次原廠串接——對「我自架 Linear webhook + Claude Code workflow」中介 SaaS 60 天內被 Linear 原廠收編；reverse 端對「沒空盯小 PR 但想跑 backlog」的 5–20 人小團隊解鎖；對 Cyrus / Cubic / Greptile 等同類 Linear / GitHub 自動接 PR 工具，產品定位被 Linear 原生功能擠到 niche | 機會：(a) **本週**至少挑 1 條 vertical issue（bug fix / 小 feature / refactor）跑通 delegate 流程，case study 連發 LinkedIn / Threads（中文社群供給零）；(b) 做 dev tool agency / Claude Code 顧問業務的 indie 把「Linear coding session × skills.md × workspace 共享 credit 試算」做 audit $1.5K–$5K；(c) 寫「Linear coding session vs Cyrus 開源 vs GitHub Copilot Workspaces」對比文章；威脅：賣「Linear webhook + Claude Code 中介自動化 SaaS」的 indie 60 天內 niche 收窄 | [Linear — Coding sessions docs](https://linear.app/docs/coding-sessions) / [Linear Changelog](https://linear.app/changelog) / [Daily Dev — How we built Linear coding agent hard parts](https://daily.dev/blog/how-we-built-a-linear-coding-agent-the-hard-parts/) / [Pravin Kumar — Notion agents Slack Linear Asks GTM stack](https://www.pravinkumar.co/blog/notion-custom-agents-linear-asks-slack-saas-gtm-2026) / [Cyrus — GitHub Linear Slack background agent](https://github.com/cyrusagents/cyrus) |
| **Claude Code v2.1.173–175（6/11–6/12）：VS Code `/usage` 24h/7d 加「cache miss / long context / sub-agents」「Skills / Agents / Plugins / MCP」雙維拆解 + `enforceAvailableModels` managed setting + 退出 1–2s 延遲修 + skill hot-reload 全列表重發 bug**：v2.1.173 6/11、v2.1.174 + v2.1.175 6/12；3 檔合計 16 changes（3 features + 13 fixes）；wheelScrollAccelerationEnabled 設定（fullscreen 鼠輪加速可關） | 「nested subagent + workflow 用量黑箱」第一次有官方 dashboard——對「我自架雙池 credit 計帳 SaaS」中介產品 60 天內被 Claude Code 內建 `/usage` 收編；reverse 端對「賣 6/15 雙池後 spend cap watchdog」的 indie，後台資料源從 OAuth scrape 改成 `/usage` API 接出，門檻砍半；`enforceAvailableModels` 對中型企業 governance 是合約 SLO 立即可寫條款 | 機會：(a) **今天 6/13 最後 1 個工作天視窗**——把「Bugbot + Fable 5 + Claude SDK + nested subagent」spend cap 試算工具改用 `/usage` 細項拆解做後台資料源、ship LinkedIn / Threads；(b) 賣中型企業 governance audit 的 indie 把 `enforceAvailableModels` + Auto Mode + safe-mode + Automemory 五件套包成 fixed $5K–$15K 採購包（含 EU AI Act 8/2 倒數 50 天 checklist + DPIA 範本）；威脅：賣「自架雙池計帳」SaaS 60 天內 niche 收窄 | [Claude Code Changelog](https://code.claude.com/docs/en/changelog) / [DevelopersIO — Claude Code v2.1.173–175 major updates](https://dev.classmethod.jp/en/articles/20260612-cc-updates-v2-1-175/) / [Claudeupdates — v2.1.175 enforceAvailableModels](https://www.claudeupdates.dev/) / [Releasebot — Claude Code June 2026](https://releasebot.io/updates/anthropic/claude-code) |
| **Notion Developer Platform 進度 + 6/10 後 Slack 私頻道讀寫 + Workers 8/11 開始收費前免費窗口**：5/13 推 Developer Platform 主版（CLI + Workers hosted runtime + webhook 雙向）；6/10 後 Custom Agent 可在私 Slack 頻道讀寫；launch partner 含 Claude Code、Cursor、Codex、Decagon；Workers 是 Notion 自家 hosted runtime（自寫程式 + CLI deploy + sandbox run、支援 database sync / custom agent tool / webhook trigger）；現在到 8/11 全免費 | 「給 Custom Agent 加自家 Worker 程式碼擴 MCP / 寫 webhook」是 indie 接 enterprise 新 niche——對「我寫 Notion 自動化 SaaS 賣月費」的 indie 中介產品 90 天內 niche 重新洗牌；reverse 端對賣 vertical knowledge work（HR / 行銷 / 法務 / 會計）顧問的 indie，「Notion 是 source of truth + Custom Agent + Worker 自寫程式」是新可賣的解決方案 | 機會：(a) **本週**把自家 vertical workflow 中「Notion 是 source of truth + Custom Agent 寫 Worker 做 webhook trigger / database 雙向 sync」這條 pipeline 跑通；(b) 賣 Notion 顧問業務 / 中型團隊 internal tools 顧問 freelancer 把「Worker × Slack 私頻道 × MCP 客製」三件套包成 fixed-price audit $2K–$8K；(c) **8/11 前**ship 1–2 個 case study 拍 demo 影片發 LinkedIn / Threads（台日中文社群幾乎零 Workers 教學）；威脅：賭「Notion 永遠免費跑 Workers」的 indie 8/11 後 surprise bill | [Notion — Introducing Developer Platform](https://www.notion.com/blog/introducing-developer-platform) / [Notion — Build with Developer Platform](https://www.notion.com/product/dev) / [TechCrunch — Notion AI agents hub](https://techcrunch.com/2026/05/13/notion-just-turned-its-workspace-into-a-hub-for-ai-agents/) / [MindStudio — Notion Developer Platform CLI Webhooks External Agents API](https://www.mindstudio.ai/blog/notion-developer-platform-ai-agents-cli-webhooks-api) / [Notion AI Connectors for Slack](https://www.notion.com/help/notion-ai-connectors-for-slack) |
| **SpaceX-Anthropic $1.25B/月 Colossus 1 deal S-1 全揭：Anthropic 5 月 $47B run rate 的 ~32% 砸在算力租賃、xAI Colossus 1 H100 / H200 / GB200 混架構不利訓練才轉租**：DCD / Tesery 同步揭露 Anthropic 月付 $1.25B 直到 2029/5（合計 $45B）、Google 月付 $920M 直到 2029/6；SpaceX AI segment Q1 2026 經營虧 $2.47B、AI 資本支出 2025 $12.7B / Q1 2026 $7.7B；xAI 自家訓練已搬 Colossus 2、Colossus 1 是 infra surplus | 「Anthropic 算力 lock-in」一次性 reframe 為「xAI infra surplus + Anthropic 雙保險 contracted 到 2029」——對 indie 採購敘事決定性反轉；對賣中型企業 vertical SaaS / 顧問業務的 indie，「Anthropic compute 不會半年內崩」是可以直接寫進客戶合約附錄的 narrative；對賭「xAI 自家訓練超越 Claude」的 indie，技術競爭力預期需下修一檔 | 機會：(a) **本週**把「Anthropic compute lock-in = vendor moat 第一層、xAI infra surplus + Google compute 雙保險 = vendor moat 第二層」寫進 client 提案 / 合約附錄；(b) 對 6/15 雙池後第一週若 Anthropic 沒對 Pro / Max rate limit 公開緊縮，「Anthropic compute contracted 到 2029」是中型企業 12/15 IPO 前採購提案 narrative 加分；威脅：賭「Anthropic 不會用 Colossus 1」的 indie 半年內被反噬 | [DCD — SpaceX IPO filing Anthropic $1.25B monthly xAI](https://www.datacenterdynamics.com/en/news/spacex-ipo-filing-reveals-anthropic-set-to-pay-musks-firm-125bn-a-month-to-rent-xai-data-center-space/) / [Tesery — SpaceX $45B Anthropic AI compute deal S-1](https://www.tesery.com/blogs/news/spacex-unveils-landmark-45-billion-ai-compute-deal-with-anthropic-in-ipo-filing) / [IndMoney — SpaceX xAI deals Google Anthropic SPCX valuation](https://www.indmoney.com/blog/us-stocks/spacex-xai-compute-deals-google-anthropic-ipo-valuation) / [MarketWise — SpaceX AI deals justify $1.77T debut](https://marketwise.com/investing/spacex-ai-business-historic-ipo-valuation/) / [TechCrunch — Anthropic pay xAI $1.25B monthly compute](https://techcrunch.com/2026/05/20/anthropic-will-pay-xai-1-25-billion-per-month-for-compute/) |

## 🛠 新興 AI 工具

| 工具 | 類別 | 用途 | 定價 | 差異點 | 採用建議 |
| ---- | ---- | ---- | ---- | ------ | -------- |
| Linear coding sessions（6/11） | issue → coding agent | delegate Linear issue / chat / comment / Slack thread → Claude Code 或 Codex 跑 → 草稿 PR + diff 貼回 issue；自動拉 repo + skills.md context | promotional credit pool（$20 × unsuspended user）、走 Basic / Business / Enterprise plan | 第一個原廠 issue tracker × coding agent 串接；workspace 共享 credit pool（不是 per-seat） | indie / 5–20 人小團隊：**本週**跑 1 條 vertical issue 整套；做 dev tool agency 賣 audit $1.5K–$5K；做 Linear 自架 webhook SaaS 60 天內 niche 收窄 |
| Claude Code v2.1.173–175（6/11–6/12） | dev tool 內建 dashboard | VS Code `/usage` 24h / 7d 加「cache miss / long context / sub-agents」「Skills / Agents / Plugins / MCP」雙維拆解 + `enforceAvailableModels` managed setting | 含 Claude Code 訂閱 + 6/15 SDK 雙池 credit | 第一個原廠 `/usage` 細項拆解；`enforceAvailableModels` 是中型企業 governance 立即可寫條款 | 跑 24/7 background automation 的 indie：今天起改用內建 `/usage` 做 spend cap 後台資料源；做中型企業 governance audit 的 freelancer 把 `enforceAvailableModels` 寫進合約 SLO |
| Notion Workers + CLI（5/13 + 6/10 升級） | hosted runtime + agent platform | Notion 自家 hosted runtime（自寫程式 + CLI deploy + sandbox run）；支援 database sync / custom agent tool / webhook 雙向；6/10 後 Custom Agent 可在私 Slack 頻道讀寫 | **8/11 前免費**、之後按 Notion credit 計費 | 第一個原廠 hosted runtime for Custom Agent；launch partner 含 Claude Code / Cursor / Codex / Decagon | 賣 Notion 顧問業務的 indie：**本週**至少跑 1 條 vertical workflow + 拍 demo 影片；做中型團隊 internal tools 顧問 freelancer 把「Worker × Slack 私頻道 × MCP 客製」三件套包成 audit $2K–$8K |
| Cursor 6/10 Teams Premium seat + split usage pools + 即時 spend forecast | dev tool 帳務升級 | 重度 agent 用戶專屬 seat；split usage pool（不同 team 不同預算）；即時 spend forecast | 新客戶立即生效、續約客戶 7/1 開始算 | 預計 90% team 降價；split pool 對「不同 team / 不同預算」的中型公司 governance 加分 | 跑高量 PR 的 5–50 人 dev team：**7/1 前**重新評估 Cursor Teams 預算；做 dev tool agency 接「Teams 預算 audit」客戶 inbound 窗口 |
| Cursor SDK 6/4 更新（custom tools + nested subagents 任意深度 + auto-review for tool calls） | SDK | TS / Python SDK 加 customTools / auto-review 路由 / 任意深度 nested subagent / JSONL + custom metadata store | 含 Cursor 訂閱 + API 用量 | 「任意深度」nested 比 Claude Code「5 層硬上限」更彈性；customTools 走 built-in MCP server (`custom-user-tools`)；同權限 gate | 跑高量 batch 自動化 / 自架 dev tool SaaS 的 indie：本週試「任意深度 nested + customTools」PoC；做 dev tool agency 賣「Cursor SDK × Claude SDK 雙路 nested 對比」audit |
| Cyrus（cyrusagents/cyrus）開源 worktree 隔離 | issue × coding agent middleware | 監看 Linear / Slack / GitHub / GitLab issue → 開 worktree → 跑 Claude Code / Codex / Cursor / Gemini → 串 detailed activity 回 issue | OSS / self-host | 比 Linear 原生支援更多 issue 來源（Slack / GitLab）+ 多 agent runtime；worktree 隔離預設 | 賣自架 dev tool / GitLab 重度團隊的 indie：本週試 PoC；做「Cyrus + Linear coding session 雙軌 hybrid」audit；對 Linear 原生支援不足的 GitLab 客戶是現成 fallback |
| Gemini 3.5 Pro（Vertex AI limited preview、6 月底前 GA 預期） | LLM 旗艦 frontier | 2M context + Deep Think 推理；多模態（text / image / 跨格式） | Vertex AI enterprise preview / 預期 6 月底 GA | 2M context 是 Anthropic 1M / OpenAI 800K 兩倍；Deep Think 對 hard reasoning 對標 Fable 5 | 賭「大 context window agent」的 indie：6/19 前待命；今天用 Fable 5 1M context 跑對標 PoC 預留 Gemini column |

## 💡 SaaS 點子

### 點子 1：「Linear coding session × skills.md × workspace credit 試算」audit + Cyrus hybrid（6/11 後 14 天視窗）🆕

- 痛點來源：6/11 Linear 上 coding sessions、共享 $20 × unsuspended user credit pool 但多數 indie / 小團隊不熟「怎麼寫 skills.md 讓 Claude Code / Codex 拿到 repo / 設計慣例 context」「怎麼預估 30 天 credit 用量會不會破」「怎麼決定哪類 issue delegate 哪類自寫」；Linear 不支援 GitLab repo，重度 GitLab 客戶要 Cyrus 開源 fallback；台日中文社群供給零
- 目標客群：用 Linear 的 5–20 人軟體小團隊；跑 Claude Code / Codex 的 indie / 一人公司；做 dev tool 顧問業務的 freelancer
- 技術複雜度：2/5（Linear setup + skills.md + repo permission + Cursor / Codex / Claude Code 切換 + Cyrus 開源 fallback for GitLab）
- 預估 MRR：$3K–$10K
- 競品弱點：Linear docs 偏 API 範例不給「30 天 credit 用量 + skills.md vertical 範本」；Cyrus 是 OSS 自架不附顧問；台日中文社群供給接近零
- 切入建議：(a) **6/13–6/20** ship landing「Linear coding session 30 個 vertical skills.md 範本 + workspace credit 試算」（嵌 typeform + Stripe；訂閱用戶免費試用、付費版 $99 / $299 lifetime；含 bug fix / 小 feature / refactor / migration / SOC 2 / SEO 寫法 / KB 重建 7 類）；(b) fixed-price audit $1.5K–$5K（30 天：選 3–5 條 issue 類型 + 寫客製 skills.md + 跑 PoC + 月 credit 預算 + 若是 GitLab 加 Cyrus 自架）；(c) 首 5 家拍 case study + Linear partner cite + Claude Code Tokyo Extended footage cite

### 點子 2：「Notion Worker × Custom Agent × Slack 私頻道」中型團隊 internal tools 顧問（5/13 起 + 8/11 收費前 60 天視窗）🆕

- 痛點來源：5/13 Notion Developer Platform 上、6/10 Custom Agent 可在私 Slack 頻道讀寫、8/11 才開始按 Notion credit 計費；多數中型團隊（HR / 行銷 / 法務 / 會計）不熟「怎麼寫 Worker 程式碼擴 MCP / webhook」「怎麼讓 Custom Agent 在 Slack 私頻道讀寫」「8/11 後 credit 怎麼估」；台日中文社群幾乎零 Workers 教學
- 目標客群：用 Notion 是 source of truth 的中型團隊（30–200 員）；台日 SI / 顧問業者；做 internal tools / 知識管理顧問的 freelancer
- 技術複雜度：3/5（Notion CLI + Worker hosted runtime + webhook + Custom Agent + Claude Code / Cursor / Codex 一個 launch partner + Slack 私頻道權限）
- 預估 MRR：$4K–$15K
- 競品弱點：Notion docs 偏 API 範例少 vertical playbook；現有 Notion 顧問偏「模板搬遷」不熟 Workers；台日中文社群幾乎零教學
- 切入建議：(a) **本週**ship landing「Notion Workers × Custom Agent × Slack 私頻道 30 個 vertical 範本 + 8/11 後 credit 估算」（嵌 typeform + Stripe；訂閱用戶免費試用、付費版 $99 / $299 lifetime；含 HR onboarding / 行銷 brief / 法務 contract review / 會計帳務 / 客服 ticket）；(b) fixed-price audit $2K–$8K（30 天：跑 1–2 條 vertical pipeline + 拍 demo 影片 + 8/11 後 credit 估算 + 開源 webhook server fallback）；(c) **8/11 前**拍 1–2 個中型團隊 case study 連發 LinkedIn / Threads / Reddit r/Notion / r/SaaS

### 點子 3：「Anthropic compute 雙保險 contracted 到 2029」中型企業採購提案 + IPO 倒數 narrative pack（SPCX 收 +25% 後 60 天視窗）🆕

- 痛點來源：6/12 SPCX +25% 收盤 + S-1 揭露 Anthropic 月付 $1.25B 到 2029/5、Google 雙保險到 2029/6；6/15 雙池計費上線、6/30 Colossus 1 折扣失效、12/15 Anthropic IPO 預測中位 $1.10T；多數中型企業（200–2,000 員）IT / 採購 decision-maker 不熟「為什麼 Anthropic compute 不會半年內崩」「為什麼 Anthropic 是 12/15 IPO 候選」「採購決策怎麼配對 6 個月後 IPO 時間軸」；台日中文採購提案幾乎零這層 narrative 供給
- 目標客群：賣中型企業 vertical SaaS / 顧問業務的 indie；台日 SI / 顧問業者；中型企業 IT / 採購 decision-maker；做企業 AI 採購顧問業務的 freelancer
- 技術複雜度：1/5（narrative pack + SPCX 收盤資料 + S-1 揭露摘要 + IPO 倒數 timeline + Magnificent Seven 蒸發比較）
- 預估 MRR：$3K–$12K（提案 pack 訂閱）/ $5K–$20K（中型企業 audit 一次性）
- 競品弱點：彭博 / FactSet 偏金融分析、缺 indie 中文翻譯；台日中文採購提案幾乎零這層 narrative；Anthropic 官方文件偏技術、缺 governance + IPO timeline narrative
- 切入建議：(a) **今天起 14 天**ship「Anthropic IPO 12/15 / $1.10T median + Colossus 1 contracted 到 2029 + SPCX +25% reframe + EU AI Act 8/2 倒數 50 天 + 6/15 雙池 + 6/30 Colossus 折扣失效 + 6/22 Fable 5 改 credit」一張 narrative timeline + 中型企業 IT 提案附錄（嵌 typeform + Stripe）；(b) fixed-price audit $5K–$15K（30 天：用 narrative + 客戶採購節奏配 + 12/15 IPO 前後採購對齊）；(c) 首 5 家中型企業拍 case study 連發 LinkedIn / Threads / Reddit r/sysadmin（台日中文社群供給零）

## 🧰 工具堆疊更新

- **跑 Claude Pro / Max / Team 訂閱**：剩 **9 天免費跑 Fable 5**（6/22 前）；自家 codebase migration / KB rebuild / refactor / deep PR review / nested subagent PoC 全部跑滿；同步用 Tokyo 公布的 Multiagent Orchestration + Outcomes + Auto Mode + Automemory 五件套重寫自家 vertical workflow
- **跑 Claude Code 生產自動化 / agency 服務**：今天升級到 v2.1.175 拿 VS Code `/usage` 24h / 7d 拆解 + `enforceAvailableModels` managed setting + 退出延遲修；做「nested subagent + workflows 跨日工作流模板」LinkedIn 連發引流；對企業 governance 加 `enforceAvailableModels` + Auto Mode + Automemory + safe-mode 五件套賣點
- **跑 24/7 background automation（claude -p / Agent SDK / Claude Code GH Actions）**：**今天 6/13 是最後 1 個工作天**（6/15 雙池前）——把 Cloudflare AI Gateway spend limits + Auto Mode（classifier）+ Slack alert + `/usage` 24h/7d 資料源 + Linear coding session credit 試算五條都接上；沒收到 credit claim 信主動到 [console.anthropic.com](https://console.anthropic.com) 領
- **做 dev tool agency / freelancer**：6/13–6/22 內容週主題「Bugbot $0.40/pass × 200 PR/day vs Fable 5 $92/review vs Claude SDK 雙池 credit vs Linear coding session workspace pool」四邊 cost-edge 試算工具 + 切換決策樹是本月最熱題材；做「nested subagent + workflows 模板包」+「Big-3 ads MCP 跨平台投放 hello world」+「Linear coding session × skills.md vertical 範本」三條 niche 並行
- **用 Linear 是 issue tracker 的 5–20 人小團隊**：**本週**升級 plan 拿 promotional credit pool（$20 × unsuspended user）；挑 1 條 vertical issue 整套 delegate 流程跑通；GitLab 客戶加 Cyrus 開源 fallback；台日中文社群案例引流
- **用 Notion 是 source of truth 的中型團隊（30–200 員）**：**8/11 前免費窗口**（59 天）——本週試 Notion Workers + Custom Agent + Slack 私頻道 PoC；拍 1–2 個 vertical case study 影片發 LinkedIn / Threads；做 dev tool 顧問業務的 indie 把「Worker × Slack 私頻道 × MCP 客製」三件套包成 audit $2K–$8K
- **賣中型企業 vertical SaaS（200–2,000 員、含 EU / 受監管行業）**：把「Anthropic compute 雙保險 contracted 到 2029（vendor moat）+ Anthropic IPO 12/15 / $1.10T median（採購節奏）+ `enforceAvailableModels` allowlist（合約 SLO）+ Fable 5 30 天 retention（DPIA）+ EU AI Act 8/2 倒數 50 天（checklist）」六件包成 fixed-price audit $5K–$15K；今天起 14 天主打發給目標 5–10 家客戶
- **做 vertical iOS / macOS app**：續行 Foundation Models LanguageModel 協定 + Claude Swift package 路線；本週把 nested subagent + workflow 整合到 on-device + Gemini + Claude Fable 5 三段路由 PoC
- **跑 vertical e-commerce vibecoding SaaS / 跨境小品牌**：本週試 Replit Agent + Shopify + Stripe 在協作 workspace PoC；做「Replit + Shopify + Stripe 一鍵電商」audit $1.5K–$5K

## ⚡ 今日行動建議

- [ ] **30 分鐘** 升級 Claude Code 到 v2.1.175+ 看 VS Code `/usage` 24h / 7d 細項拆解（cache miss / long context / sub-agents / Skills / Agents / Plugins / MCP）；把昨日 nested subagent 用量截圖發 LinkedIn / Threads（中文社群供給零）
- [ ] **45 分鐘** Linear 用戶 / 5–20 人小團隊：升級 plan 拿 promotional credit pool；挑 1 條 vertical issue（bug fix / 小 feature / refactor）跑通 delegate → Claude Code 或 Codex draft PR 流程；寫成 case study 引流
- [ ] **60 分鐘** ship「Bugbot $0.40/pass × Fable 5 $92/review × Claude SDK 雙池 × Linear coding session workspace pool」四邊月帳試算工具 landing（嵌 typeform + Stripe）+ LinkedIn / Threads 6/14 早 8 點台北時間發
- [ ] **60 分鐘** ship「Linear coding session × skills.md × workspace credit 試算」白皮書 landing；首 5 家拍 case study 拚 7 天內 LinkedIn / Threads / Reddit r/cursor / r/programming 引流
- [ ] **45 分鐘** 跑 24/7 background automation 的 indie：**今天最後 1 個工作天**（6/15 雙池前）把 Cloudflare AI Gateway spend limits + Auto Mode + Slack alert + `/usage` 24h/7d 資料源五條接上 ship
- [ ] **60 分鐘** Notion 用戶 / 中型團隊：試跑 Notion Workers + CLI + Custom Agent + Slack 私頻道 PoC（1 條 vertical pipeline）；**8/11 前免費窗口**拍 demo 影片發 LinkedIn / Threads
- [ ] **45 分鐘** 賣中型企業 vertical SaaS 的 indie：把「Anthropic compute 雙保險 contracted 到 2029 + Anthropic IPO 12/15 / $1.10T median + `enforceAvailableModels` 五件套 + EU AI Act 8/2 倒數 50 天」一頁 narrative pack 寫進客戶提案 / 合約附錄；今天起 14 天主打發給目標 5–10 家
- [ ] **30 分鐘** 做企業 AI 採購顧問業務的 freelancer：把「SPCX +25% 收盤 + Magnificent Seven 蒸發 $2T + summer / fall IPO supply 三波」一頁中文 brief 寫進中型企業 IT 預算 audit 提案

## ⏳ 待觀察

- 6/13–6/15 Linear coding session 第一週實測：workspace 共享 promotional credit pool（$20 × unsuspended user）夠不夠跑、哪類 vertical issue 命中率高、Linear 是否在 6/19 前加 GitLab repo 支援收編 Cyrus 開源 niche
- 6/15 雙池後第一週 Anthropic 是否對「nested subagent + workflow + Multiagent Orchestration 用量瞬間放大 → Pro / Max quota 秒吃」公開回應：若 6/15–6/22 推自動 fallback / 額度調整，「Credit Overflow Watchdog」niche 收窄；reverse 端若 Anthropic 沉默，spend cap watchdog SaaS 需求暴增
- 6/19 前 Gemini 3.5 Pro 是否在 Vertex AI GA：Polymarket 仍約 90%；Tokyo Multiagent Orchestration 把競爭軸推向 agent harness、Google 端 6/19 前發 Pro + Deep Think + 2M context 機率被推高
- Fable 5 6/22 後 Pro / Max / Team 改吃 credit 的實際每月配額換算公式 + Multiagent Orchestration / nested subagent 是否影響 credit 計帳邏輯——若 $20 → $1M tokens（按 input mix）就是「14 天免費試吃 → 6/23 後一週吃完」
- 6/30 Colossus 1 折扣失效後 Anthropic 是否對 Pro / Max rate limit 公開回應：S-1 揭露 $1.25B / 月到 2029/5 contracted、折扣失效不等於 rate limit 緊縮；若 6/30–7/15 Anthropic 沉默或加碼公開 commitment，「Anthropic compute 雙保險」narrative 強化
- Notion Workers 8/11 開始按 credit 收費的實際每月配額換算公式：若 $20 → $X workflows / Worker invocations 對中型團隊 vertical 平均月用量是否夠
- Cursor 7/1 起 Teams 新方案實際對中型 dev team 月帳的真實節省：若 Cursor 公開 case study，dev tool agency 顧問業務 inbound 窗口
- Anthropic 6/2 confidential S-1 後 SEC review 時程 + 9–11 月 roadshow 是否成型 → 12/15 IPO 預測中位實際命中率
- Linear / Notion / Slack 三家是否在 6/19 前公布「Linear coding session × Notion Worker × Slack 私頻道」三家串接 reference architecture
- 6/13–6/22 OpenAI 是否發 GPT-5.6 對標 Fable 5 + Linear coding session：rumor window 6 月中下旬、Polymarket ~80–89% 6/30 前發

[^spcx]: SPCX 是 SpaceX 於 2026-06-12 在 NYSE 掛牌的普通股代號；本次 IPO 募資 $75B 為史上最大規模，S-1 申報文件揭露 SpaceX 同時兼營火箭發射與 AI 算力基礎建設（含對外出租的 Colossus 1 資料中心），首日收盤市值突破 $2T。

[^mag7]: Magnificent Seven 是市場慣用語，指美股七檔權重最高、推動指數的科技龍頭：Microsoft（MSFT）、Amazon（AMZN）、Apple（AAPL）、Alphabet（GOOG）、Nvidia（NVDA）、Tesla（TSLA）與 Meta（META）；2023 年初由分析師 Michael Hartnett 命名，常被視為 AI 公開市場流動性的代表籃。

[^colossus]: Colossus 1 是 xAI 位於 Memphis 的 GPU 超算叢集，2024 年中啟用，由 H100、H200 與 GB200 混合架構組成；原為 Grok 自家訓練使用，後因混架構大規模訓練不順轉以對外租賃為主，Anthropic 與 Google 是兩大長期承租方。後續擴建版本稱 Colossus 2。

[^enforce-models]: `enforceAvailableModels` 是 Claude Code v2.1.175 引入的企業 managed setting：admin 可在 enterprise / project 層級設定 model allowlist，當 user 或 default 設定 resolve 到 allowlist 之外的 model，系統會自動 fallback 到第一個允許的 model；user / project settings 不能擴大白名單，是中型企業 governance 合約 SLO 可寫的硬條款。

[^multiagent]: Multiagent Orchestration 是 Anthropic 於 2026-06-10 東京「Code with Claude」會議公布的 agent harness，原生支援將任務拆派給多個子代理並行執行、彙整結果與失敗重試；常被拿來與 Cursor 的 nested subagent、Google 的 agent harness 對比，是 6 月後 agent 競爭軸從「單 agent 能力」轉向「多 agent 編排」的關鍵發布之一。

[^cf-ai-gateway]: Cloudflare AI Gateway 是 Cloudflare 推出的 LLM 流量代理層，介於應用與 OpenAI／Anthropic／Google 等 model provider 之間，提供統一的 logging、cache、rate limit 與 spend limits（2026-06-05 GA）；對 indie 是低門檻接 cost cap 與 webhook alert 的現成方案。

[^dpia]: DPIA（Data Protection Impact Assessment，資料保護影響評估）是 EU GDPR 第 35 條要求的書面評估文件，當資料處理對個資權利「可能造成高風險」時必須先寫；EU AI Act 把 GPAI 模型供應商與高風險場景部署方納入類似評估要求，是賣 EU／受監管客戶時合約附錄常見一頁。

[^linear-coding]: Linear coding sessions 是 Linear 於 2026-06-11 釋出的原廠功能，可在 issue／chat／comment／Slack thread 任一觸發點直接 delegate 任務給 Claude Code 或 Codex 跑、自動拉 repo 與 skills.md context、回傳草稿 PR 與 diff 貼到 issue；定價走 workspace 共享 promotional credit pool（$20 × unsuspended user 數）。

[^skills-md]: skills.md 是 Claude Code 與相容 coding agent 約定的專案層 context 檔，放在 repo 根目錄，用 Markdown 條列「程式風格、目錄結構、常用指令、測試規範、reviewer 偏好」等隱性知識；agent 啟動時自動讀入，是降低「同一 repo 反覆解釋 convention」成本的標準做法。

[^auto-mode]: Auto Mode 是 Anthropic 於 2026-06-10 東京「Code with Claude」發布的請求路由分類器（classifier），根據任務難度自動把請求分派到 Haiku／Sonnet／Opus／Fable 系列，目標是把開發者免去手動選 model 的成本；與 safe-mode、Automemory 並稱「五件套」中的請求層治理元件。

[^fable-5]: Fable 5 是 Anthropic 2026 年中釋出的高階推理模型代號（family 名稱 Fable），主打 1M token context 與深度 reasoning，用於 deep PR review、codebase migration 等長脈絡任務；Pro／Max／Team 訂閱含 Fable 5 到 2026-06-22，之後改吃 credit 計費。

[^notion-workers]: Notion Workers 是 Notion Developer Platform（2026-05-13 發布）的 hosted runtime：開發者用 Notion CLI 部署自寫程式碼，在 sandbox 內跑 database sync、custom agent tool、webhook trigger 等任務；現在到 2026-08-11 全免費，之後改按 Notion credit 計費，launch partner 含 Claude Code、Cursor、Codex、Decagon。

## 📚 引用來源

1. [CNBC — SPCX live updates +25% historic volume](https://www.cnbc.com/2026/06/12/spacex-ipo-spcx-live-updates.html) — 2026-06-12
2. [NPR — SpaceX stock skyrockets first day](https://www.npr.org/2026/06/12/nx-s1-5855004/stock-ai-spacex-ipo-elon-musk) — 2026-06-12
3. [TradingKey — SPCX debuts $135 first 90 days](https://www.tradingkey.com/analysis/stocks/us-stocks/261960721-spacex-ipo-is-live-at-135-bull-base-and-bear-cases-for-the-first-90-days-tradingkey) — 2026-06-12
4. [Kiplinger — SpaceX IPO live updates commentary](https://www.kiplinger.com/investing/live/spacex-ipo-spcx-stock-updates-and-commentary) — 2026-06-12
5. [DCD — SpaceX IPO filing Anthropic $1.25B monthly xAI](https://www.datacenterdynamics.com/en/news/spacex-ipo-filing-reveals-anthropic-set-to-pay-musks-firm-125bn-a-month-to-rent-xai-data-center-space/) — 2026-06
6. [Tesery — SpaceX $45B Anthropic compute deal S-1](https://www.tesery.com/blogs/news/spacex-unveils-landmark-45-billion-ai-compute-deal-with-anthropic-in-ipo-filing) — 2026-06
7. [Yahoo Finance — Why SPCX OpenAI Anthropic IPOs won't derail bull market](https://finance.yahoo.com/markets/article/why-the-spacex-openai-and-anthropic-ipos-wont-derail-the-bull-market-112903023.html) — 2026-06
8. [Futuresearch — Anthropic OpenAI IPO dates valuations forecast](https://futuresearch.ai/anthropic-openai-ipo-dates-valuations/) — 2026-06
9. [IndMoney — SpaceX xAI deals Google Anthropic SPCX valuation](https://www.indmoney.com/blog/us-stocks/spacex-xai-compute-deals-google-anthropic-ipo-valuation) — 2026-06
10. [MarketWise — SpaceX AI deals $1.77T debut](https://marketwise.com/investing/spacex-ai-business-historic-ipo-valuation/) — 2026-06
11. [Gryphon FP — SpaceX Anthropic OpenAI IPOs market liquidity](https://gryphonfp.com/blog/spacex-anthropic-and-openai-ipos-what-they-could-mean-for-stock-market-returns-and-market-liquidity/) — 2026-06
12. [TechCrunch — Anthropic pay xAI $1.25B monthly compute](https://techcrunch.com/2026/05/20/anthropic-will-pay-xai-1-25-billion-per-month-for-compute/) — 2026-05-20
13. [Linear — Coding sessions docs](https://linear.app/docs/coding-sessions) — 2026-06-11
14. [Linear Changelog](https://linear.app/changelog) — 2026-06-11
15. [Daily Dev — How we built Linear coding agent hard parts](https://daily.dev/blog/how-we-built-a-linear-coding-agent-the-hard-parts/) — 2026-06
16. [Pravin Kumar — Notion agents Slack Linear Asks GTM stack](https://www.pravinkumar.co/blog/notion-custom-agents-linear-asks-slack-saas-gtm-2026) — 2026-06
17. [Cyrus — GitHub Linear Slack background agent](https://github.com/cyrusagents/cyrus) — 2026-06
18. [Linear Agent introduction March 24](https://linear.app/changelog/2026-03-24-introducing-linear-agent) — 2026-03-24
19. [Claude Code Changelog official](https://code.claude.com/docs/en/changelog) — 2026-06-12
20. [DevelopersIO — Claude Code v2.1.173–175 major updates](https://dev.classmethod.jp/en/articles/20260612-cc-updates-v2-1-175/) — 2026-06-12
21. [Claudeupdates — v2.1.175 enforceAvailableModels](https://www.claudeupdates.dev/) — 2026-06-12
22. [Releasebot — Claude Code June 2026 updates](https://releasebot.io/updates/anthropic/claude-code) — 2026-06
23. [Notion — Introducing Developer Platform](https://www.notion.com/blog/introducing-developer-platform) — 2026-05-13
24. [Notion — Build with Developer Platform](https://www.notion.com/product/dev) — 2026-06
25. [TechCrunch — Notion AI agents workspace hub](https://techcrunch.com/2026/05/13/notion-just-turned-its-workspace-into-a-hub-for-ai-agents/) — 2026-05-13
26. [MindStudio — Notion Developer Platform CLI Webhooks External Agents API](https://www.mindstudio.ai/blog/notion-developer-platform-ai-agents-cli-webhooks-api) — 2026-06
27. [Notion AI Connectors for Slack](https://www.notion.com/help/notion-ai-connectors-for-slack) — 2026-06
28. [Matthias Frank — Notion Workers Dev Day 2026 complete guide](https://matthiasfrank.de/en/notion-workers-dev-day-2026/) — 2026-06
29. [Cursor — June SDK updates custom stores tools auto-review nested subagent](https://cursor.com/changelog/sdk-updates-jun-2026) — 2026-06-04
30. [Cursor — Bugbot 3x faster 22% cheaper June 9](https://cursor.com/blog/bugbot-updates-june-2026) — 2026-06-09
31. [Cursor — Teams Premium seat split pool spend forecast](https://cursor.com/changelog) — 2026-06-10
32. [Cursor — Enterprise multiple teams June 3](https://cursor.com/changelog) — 2026-06-03
33. [Code with Claude Tokyo Extended](https://claude.com/code-with-claude/tokyo) — 2026-06-10
34. [MindStudio — Code with Claude 2026 5 new agent features](https://www.mindstudio.ai/blog/code-with-claude-2026-new-agent-features) — 2026-06
35. [DevToolPicks — Anthropic splits Claude subscription Agent SDK credit June 15](https://devtoolpicks.com/blog/anthropic-splits-claude-subscriptions-agent-sdk-credit-june-2026) — 2026-06
36. [Cloudflare Blog — AI Gateway Spend Limits](https://blog.cloudflare.com/ai-gateway-spend-limits/) — 2026-06-05
37. [EU — AI Act Implementation Timeline](https://artificialintelligenceact.eu/implementation-timeline/) — 2026
