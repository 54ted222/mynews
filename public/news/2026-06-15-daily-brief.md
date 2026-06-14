---
title: 每日創業情報 — 2026-06-15
date: 2026-06-15
tags: 創業情報, AI 產業, SaaS
summary: 6/15 Agent SDK 雙池計費啟動撞上 6/12 Fable 5 / Mythos 5 美方出口管制吊銷——Opus 4.8 一夜重回主力；TCS / DXC Global Premier 同步、Antigravity CLI 6/18 收編 Gemini CLI 倒數 3 天。
keywords: Anthropic Fable 5 Mythos 5 export control suspension June 12 2026 BIS directive, Claude Agent SDK dual credit pool June 15 2026 Pro Max launch overflow billing, TCS Anthropic global premier partnership 50000 employees regulated industries, DXC Anthropic multi-year alliance Claude certified engineers banks airlines, OpenCode AI coding agent 160k GitHub stars 7.5M monthly developers Toronto, Antigravity CLI Gemini CLI June 18 2026 shutdown migration Go async, GitHub Copilot App SDK general availability orchestration desktop worktree, Anthropic Public Record transparency survey curing disease 48 percent, SPCX SpaceX week one close 160.95 19 percent debut Magnificent Seven
---

# 每日創業情報 — 2026-06-15

## 🎯 今日 TL;DR

- **6/15 雙池計費正式上線（今天）撞上 6/12 美方 BIS 出口管制——Fable 5 / Mythos 5 已被 Anthropic 全網下架、Opus 4.8 一夜變回主力，所有 6/22 前「免費跑 Fable 5」計畫一次性報廢**：US Commerce Department / BIS 於 6/12 下午 5:21 ET 對 Anthropic 發出 export control directive[^export-control]，禁止任何外籍人士（不論在美或在境外、含 Anthropic 自家外籍員工）存取 **Fable 5 與 Mythos 5**；Anthropic 因無法 real-time 過濾「美籍 vs 外籍」用戶，**對全球所有客戶停用兩款模型**——距 6/9 Fable 5 公開發布僅 3 天、距 6/22 Pro / Max / Team 改 credit 計費僅 10 天。Anthropic 公開聲明：BIS 引用的「jailbreak」只解鎖 Mythos cybersecurity 單一狹義能力、不破壞 Fable 5 全部 safeguards，這個標準若全行業套用會「essentially halt 所有 frontier model deployment」。Opus 4.8 / Sonnet 4.6 / Haiku 4.5 / 過往模型不受影響、繼續提供。**對台日 indie 的決定性反轉**：(a) **過去 6 天的 brief**主打的「Fable 5 1M context + deep reasoning 跑 codebase migration / KB rebuild / nested subagent」**今天全部廢案**——客戶提案 / 顧問業務 deck 內所有「Fable 5 …」字眼**今天起 24 小時內改成 Opus 4.8**（drop-in 替代、不必重寫架構）；(b) **賣中型企業 vertical SaaS 的 indie** 把這次事件本身變成新賣點——「我們的 stack 已驗證 Opus 4.8 fallback 路徑、Fable 5 不可用時 24 小時內無縫切換」寫進合約 SLO 附錄；(c) **賣 dev tool agency 的 indie** 6/15–6/22 內容週主題**改寫**——「Fable 5 export control 後的 indie 模型矩陣：Opus 4.8 主力 / Sonnet 4.6 量產 / Haiku 4.5 batch / GPT-5.5 fallback」一張對照表中文社群供給零

- **Agent SDK 雙池 credit pool 今天 6/15 ET 正式上線——Pro $20 / Max 5× $100 / Max 20× $200，沒設 overflow billing 一旦燒完直接 stop**：`claude -p` / Agent SDK / Claude Code GitHub Actions / 所有第三方 Agent SDK app **今天起**從原訂閱共用 pool 切到獨立月 credit pool；按 full API rate 計費、月底歸零不 rollover；想跑滿 24/7 background automation 必須在 console.anthropic.com 主動開 overflow billing（用 prepaid balance 或信用卡）否則 credit 用完即斷。**雙池上線同日 Fable 5 / Mythos 5 被禁——「最貴的高階模型不能跑了、但雙池 credit 還是按 full API rate 算」**雙重打擊；Opus 4.8 雖 drop-in 替代但 API 單價略低於 Fable 5、credit burn rate 反而可能下修 10–15%（估算）。**對 indie 兩條今天必做**：(a) **今天 ET 上午 9 點前**到 [console.anthropic.com](https://console.anthropic.com) 看雙池 credit 是否到位、開 overflow billing 並設月 spend cap（Pro $50 / Max 5× $200 / Max 20× $400 三檔保守值）+ Slack alert；(b) **今天起 7 天**把客戶提案 / 顧問業務 deck 內所有「Fable 5 跑 nested subagent」段落**改成「Opus 4.8 + Cloudflare AI Gateway[^cf-ai-gateway] spend cap + `/usage` 細項拆解」**，原訂 6/22 後客戶遷移路徑現在改為「Opus 4.8 維持訂閱 + 雙池 credit overflow 控管」

- **TCS / DXC 兩家同日（6/11）官宣 Anthropic Global Premier Partnership——對台日 indie 是「Claude 受監管產業採購入口」一次性收編訊號**：TCS（Tata Consultancy Services）公開「**Global Premier Partner in Claude Partner Network**」、訓練 **50,000 名員工**用 Claude、設**專屬 Business Unit**、聚焦金融 / 醫療 / 生命科學 / 公共服務 / 航空 / 電信 / 醫材等高度監管產業；DXC Technology 公布**多年期全球 alliance**、訓練「**數萬名 forward-deployed Claude-certified engineers**」、把 Claude 模型推進 banks / airlines / insurers / manufacturers / government agencies 任務關鍵系統。**兩家在同一天宣布、合計潛在覆蓋 ~30+ 萬職員**——延續 6/10 Tokyo NEC 30K / Hitachi 290K 同框、6/9 LG CNS 採購已經是 **Asia + Big-3 SI 五連發**樣板。**對台日 indie 的直接 niche**：(a) **本週**寫白皮書「TCS / DXC Global Premier 採購路徑解說 + 台日 SI 對標」（東元 / 中華電信 / 鴻海 / NTT Data / 富士通 / Hitachi 是潛在影響目標）拚 6/16–6/22 LinkedIn / Threads 引流；(b) **賣中型企業 vertical SaaS / 顧問業務的 indie** 把「我們的工作流已對齊 TCS / DXC certified engineer 標準」當合約 SLO 加分；(c) 接 SI 二級顧問業務 freelancer 把「Claude 受監管產業 SOP + DPIA + Fable 5 不可用 fallback」三件包成 fixed-price audit $5K–$15K（30 天 PoC + 文件範本）

- **OpenCode 開源 coding agent 6 月衝到 160K+ GitHub star、7.5M 月活開發者、25M$ ARR——對 Claude Code / Cursor / Codex「閉源 + 訂閱」格局是第一個有商業成功度的替代品**：OpenCode 是 MIT-licensed terminal-native coding agent，支援 **75+ AI model provider**（含 local Ollama）、不存任何 code、Language Server Protocol[^lsp] 整合 25+ 語言（TypeScript / Python / Rust / Go / C++）、parallel multi-session、Toronto 自筹（Tracxn 列 0 funding、24/26 年 6 月一說 25M ARR 來自 Zen hosted tier）；自 2025/6 launch、至 2026/6 月達 8M MAU、900 contributor、13,000+ commits、Show HN 多次上 #1。**對 indie 的雙重 niche**：(a) **本週**自家 vertical workflow 試 OpenCode + Ollama local model + Fable 5 不可用後 Opus 4.8 fallback 三層 PoC，寫成「Closed vs Open coding agent 矩陣」LinkedIn 連發（中文社群供給零）；(b) **賣 dev tool agency 的 indie** 把「OpenCode self-host + GitHub Actions × Claude Code workflows × Cursor SDK customTools」三軌包成 audit $2K–$6K（聚焦「客戶資料不出公司網域」這條銷售訴求對台日中型企業是新需求）；(c) **6/18 Antigravity CLI 強制收編 Gemini CLI** 同期 → 開源 fallback 不只是價格議題、是「廠商強制 migration」防守策

- **Antigravity CLI 6/18（3 天後）正式取代 Gemini CLI、Gemini Code Assist IDE 擴充——對賭「Gemini CLI 永久免費」的 indie / 客戶 hard cut**：Google 5/19 公開、6/18 停止對 consumer 請求服務；replacement 是 Go-based「Antigravity CLI」+ desktop app「Antigravity 2.0」，共用 shared agent harness、原生支援多 agent orchestration、async workflows；enterprise 用戶不受影響。**對台日 indie 兩條 hard deadline**：(a) **今天起 3 天**內檢查所有 Gemini CLI 出現在 client deliverable / workflow / CI 的位置（grep `gemini` 全 repo + CI config），列「需 migration 清單」交付給客戶；(b) **6/16–6/22** 內容週主題「Gemini CLI → Antigravity CLI migration cheatsheet（含 Claude Code / Codex / OpenCode 三軌備援）」（中文社群供給零）；做 dev tool agency 接「Gemini CLI 遺產 workflow migration」audit $1.5K–$5K 的窗口正開

## 🔄 昨日追蹤

### Fable 5 6/22 改 credit ✅ → 6/12 全網停服（提前 10 天 hard exit）

**狀態反轉**：原訂 6/22 Pro / Max / Team 把 Fable 5 從含 credit 轉吃 credit 計費——6/12 BIS export control directive 直接把 Fable 5 從所有 plan 下架；昨日 brief 標「9 天最後免費窗口跑滿 Fable 5」**作廢**；今天起所有「Fable 5 …」字眼提案 / SOP / 工作流 24 小時內改 Opus 4.8。**indie 應對**：把「Fable 5 不可用 24 小時內 Opus 4.8 切換」當賣點寫進客戶 SLO 附錄；同步檢查既有 KB rebuild / nested subagent PoC 結果是否要重跑 baseline

### Agent SDK 雙池 6/15 ✅ 今天上線

**狀態 confirmed**：`claude -p` / Agent SDK / Claude Code GH Actions / 第三方 Agent SDK app 今天起切獨立月 credit pool（Pro $20 / Max 5× $100 / Max 20× $200）、按 full API rate、月底不 rollover、預設無 overflow；開 overflow billing 才不會 credit 燒完即斷。**今天 ET 上午 9 點前**：[console.anthropic.com](https://console.anthropic.com) 雙池 credit 到位確認 + overflow billing + spend cap + Slack alert 四件套上線

### Anthropic IPO 12/15 / $1.10T median 🔄 倒數 183 天 + 政策風險新加碼

**狀態升級**：6/12 BIS Fable 5 / Mythos 5 export control 直接把「Anthropic 受美國政府 frontier model 出口管制」這條政策風險具體化——對中型企業 12/15 IPO 前採購提案，**「Anthropic 政策風險 contained = 我們已備 Opus 4.8 / Sonnet 4.6 fallback」**是新可寫進合約附錄的 SLO；對賭「Anthropic 永遠對所有 model 全球可賣」的 indie，今天起需把「最高階 frontier model 隨時可能被 BIS 停服」當基線風險

### EU AI Act 8/2 GPAI enforcement 🔄 倒數 48 天 + 出口管制反向疊加

**狀態升級**：EU AI Act 8/2 enforcement + 美方 BIS export control 6/12 同步收緊——對賣 EU / 受監管客戶的 indie，「**雙重出口管制：歐方禁某些 high-risk use case、美方禁外籍 frontier model access**」一張表寫進合約附錄；DPIA 範本要加「美方政策變動 24 小時切換 Opus 4.8 / Sonnet 4.6 fallback」一頁；6/30 前 audit checklist 把「歐 / 美 / 中三邊合規 cross-check」列為必檢項

### SPCX 6/12 +19% 收 $160.95、盤後 $166.76 🔄 第一週

**狀態 unchanged**：6/12 IPO 開盤 $150（+11%）、收 $160.95（+19.2%）、盤後一度 $166.76；6/13–6/14 週末休市、6/15 開盤是第一個交易日；昨日 brief 之前寫「收 $169」是當日盤中峰值區間（峰值 $176.52、收 $160.95 才是收盤）——數字以收盤 $160.95 為準；「Anthropic compute 雙保險 contracted 到 2029」narrative 不變

### Linear coding sessions 第一週 🔄 第 5 天

**狀態 unchanged**：6/11 launch、Basic / Business / Enterprise 全 plan、workspace 共享 $20 × unsuspended user credit pool；Reddit / Twitter / HN 早期回饋目前散見、未有大規模壓力測試報告；今天起補檢查 Fable 5 不可用後 Linear coding session 是否依賴 Fable 5 跑（多數應走 Claude Code 預設 model = Opus 4.8）

### Cursor Bugbot 7/1 改 usage-based 🔄 倒數 16 天 + Teams pricing 改 split usage pool

**狀態 confirmed**：7/1 起新 / 續約 Teams 客戶吃 usage-based $1.00–$1.50/run、Standard $40/seat 仍含但量倍增、split usage pool + Slack / email spend alert；對台日中型 dev team 預算 audit 是 inbound 第二高峰（第一是 6/15 雙池）

### Gemini 3.5 Pro 6 月底 GA 🔄 倒數 15 天 + Antigravity CLI 6/18 撞期

**狀態升級**：Vertex AI limited preview unchanged；但 6/18 Antigravity CLI 收編 Gemini CLI 讓「Google agent harness 統一」的故事更具體——Gemini 3.5 Pro GA 若 6/20 前發、Antigravity 2.0 desktop app + Antigravity CLI + Gemini 3.5 Pro 三件套成 Google 全端反擊組合；indie 預留 Gemini column 維持

## 📰 AI 產業動態

| 事件 | 影響 | 機會/威脅 | 來源 |
| ---- | ---- | --------- | ---- |
| **6/12 US Commerce Dept / BIS 對 Anthropic 發 export control directive 要求停服 Fable 5 + Mythos 5 給所有外籍用戶；Anthropic 因無法 real-time 過濾，6/13 全球下架兩款模型**：directive 於 6/12 17:21 ET 送達；BIS 引用「Mythos cybersecurity 能力的一個 narrow jailbreak」為理由；Anthropic 公開聲明 disagree、引用「該標準若全行業套用會 essentially halt 所有 frontier model deployment」；Opus 4.8 / Sonnet 4.6 / Haiku 4.5 不受影響；Anthropic 表示「working to restore as soon as possible」、目前無時間表 | 對 Anthropic 訂閱用戶與 Agent SDK 開發者全球性 hard outage——距 6/9 Fable 5 公開發布 3 天、距 6/15 雙池上線 3 天；對中型企業採購「Anthropic 政策風險」第一次具體化；對 indie 過去 6 天「免費跑 Fable 5」計畫一次性報廢；對歐 / 受監管行業客戶「美方出口管制 + EU AI Act 8/2」雙重合規層新題材 | 機會：(a) **今天起 24 小時**所有 client deliverable 把「Fable 5」字眼改 Opus 4.8（drop-in、不必重寫架構）；(b) 把「Fable 5 不可用 24 小時切換 Opus 4.8」寫進合約 SLO 附錄；(c) 對 EU / 受監管客戶把「美 / 歐 / 中三邊出口管制 cross-check」audit 包 $5K–$15K；威脅：賭「frontier model 永不停服」的 indie 全球客戶今天即時客訴 | [Anthropic — Statement on Fable Mythos suspension](https://www.anthropic.com/news/fable-mythos-access) / [CNBC — Anthropic disables Fable Mythos comply directive](https://www.cnbc.com/2026/06/12/anthropic-disables-access-to-fable-5-and-mythos-5-to-comply-with-government-directive.html) / [Time — Anthropic pulls most powerful models](https://time.com/article/2026/06/13/anthropic-fable-mythos-ban-US-security/) / [Bloomberg — US limits foreign access Fable 5 Mythos 5](https://www.bloomberg.com/news/articles/2026-06-13/anthropic-says-us-limits-foreign-access-to-fable-5-mythos-5) / [Fortune — Anthropic disables Fable Mythos export controls](https://fortune.com/2026/06/13/anthropic-disables-fable-mythos-export-controls-national-security-threat/) / [Neowin — Anthropic pulls Fable 5 Mythos 5](https://www.neowin.net/news/anthropic-pulls-fable-5-and-mythos-5-after-us-export-control-order/) |
| **6/15 ET（今天）Anthropic Agent SDK 雙池 credit pool 正式上線 — 程式化 / 自動化 / SDK / `claude -p` / Claude Code GH Actions / 第三方 Agent SDK app 全部移出原訂閱共用 pool**：Pro $20 / Max 5× $100 / Max 20× $200；按 full API rate；月底歸零不 rollover；無自動 fallback、credit 燒完直接 stop；需主動到 console.anthropic.com 開 overflow billing（prepaid balance 或信用卡）才能跑滿；Fable 5 下架後 Opus 4.8 變主力，API 單價略低、credit burn rate 預估下修 10–15% | 對跑 24/7 background automation 的 indie 是「自架計帳 SaaS」價值 baseline 重設——「Bugbot + Linear coding session + 雙池 + Antigravity」四邊 spend cap 試算今天起改用 Opus 4.8 baseline；對賣 dev tool agency 的 indie 「nested subagent 黑箱」第一次被 `/usage` 24h/7d 細項拆解透明化 | 機會：(a) **今天 ET 9:00 前** console.anthropic.com 雙池 credit 確認 + overflow billing + spend cap + Slack alert 四件套上線；(b) **今天起 7 天**把客戶提案 deck 「Fable 5 + 雙池」段落改「Opus 4.8 + 雙池 + Cloudflare AI Gateway」；(c) 接「6/15 雙池後第一週 dev team 預算重算」audit 客戶 inbound；威脅：忘設 overflow billing 的 indie 客戶今天即時 stop | [Anthropic Help — Splitting subscription billing](https://thenewstack.io/anthropic-agent-sdk-credits/) / [TechTimes — Anthropic ends subscription subsidy](https://www.techtimes.com/articles/317625/20260602/anthropic-ends-subscription-subsidy-agents-june-15-credit-pool-replaces-flat-rate-access.htm) / [Codersera — June 15 billing change developer guide](https://codersera.com/blog/anthropic-june-2026-billing-change-claude-code/) / [Digital Applied — Claude credit overhaul](https://www.digitalapplied.com/blog/anthropic-claude-credit-overhaul-june-15-2026) / [DevToolPicks — Splits Claude subscriptions indie hacker](https://devtoolpicks.com/blog/anthropic-splits-claude-subscriptions-agent-sdk-credit-june-2026) |
| **6/11 TCS 公開 Global Premier Partnership with Anthropic — 訓練 50K 員工、設專屬 BU、聚焦金融 / 醫療 / 公共服務 / 航空 / 電信 / 醫材高度監管產業；同日 DXC Technology 多年期全球 alliance、訓練「數萬名 forward-deployed Claude-certified engineers」、推進 banks / airlines / insurers / manufacturers / government agencies 任務關鍵系統**：兩家是 Claude Partner Network 全球少數 Global Premier 等級；TCS 主打「early access to Claude family」+「TCS iON[^tcs-ion] 培訓」；DXC 強調 mission-critical infrastructure | 對台日中型 SaaS / 顧問業務 indie「Claude 受監管產業採購入口」第一次具體化——延續 NEC 30K / Hitachi 290K / LG CNS 同框、Asia + Big-3 SI 五連發；對接 SI 二級顧問業務 freelancer 是直接入口（東元 / 中華電信 / NTT Data / 富士通 / Hitachi）；對賭「受監管產業 AI 採購靠 cloud hyperscaler」的 indie，SI 通道優先性升一階 | 機會：(a) **本週**寫白皮書「TCS / DXC Global Premier 採購路徑 + 台日 SI 對標」LinkedIn / Threads 連發；(b) 賣中型企業 vertical SaaS 的 indie 把「對齊 TCS / DXC certified engineer 標準」當合約 SLO 加分；(c) 接 SI 二級顧問 freelancer 把「Claude 受監管產業 SOP + DPIA + Fable 5 不可用 fallback」三件包成 audit $5K–$15K；威脅：賣自架 vertical AI 不接 SI 通道的 indie 採購 RFP 排序下移 | [Anthropic — TCS partnership regulated industries](https://www.anthropic.com/news/tcs-anthropic-partnership) / [TCS press release — Global Premier Partnership](https://www.tcs.com/who-we-are/newsroom/press-release/tcs-anthropic-launch-global-premier-partnership-drive-enterprise-ai-scaling) / [DXC newsroom — Multi-year alliance mission critical](https://dxc.com/newsroom/06112026-dxc-and-anthropic-announce-multi-year-global-alliance-to-bring-ai-into-mission-critical-enterprise-systems) / [BusinessToday — TCS 50K employees train Claude](https://www.businesstoday.in/technology/artificial-intelligence/story/tcs-partners-with-anthropic-to-train-50000-employees-on-claude-launch-dedicated-ai-business-unit-536237-2026-06-11) / [Futurum — TCS Anthropic standard regulated AI](https://futurumgroup.com/insights/will-tcs-and-anthropics-claude-partnership-set-a-new-standard-for-regulated-ai/) |
| **6/12 Anthropic 公布第一屆 Public Record——美籍受訪者把「cure disease（48%）」放第一位、12 個百分點領先「help people with disabilities（36%）」**：透明化技術規格、安全 evaluation、alignment research；同期延續 Anthropic 6/2 confidential S-1 後 IPO 前情緒設置——透明度當「政策風險可控」公開賣點；對 6/12 同日 BIS 出口管制是反向 ironic 配景 | 對賣中型企業 / 政府 vertical SaaS 的 indie，「Anthropic governance maturity」訴求第一次有可引用的官方資料；對賣 indie 內容 / consultancy 的 freelancer 是新的 evidence pack；對賭「frontier AI 透明度行業底線」的 indie，這次 Public Record 是新模板 | 機會：(a) 把 Public Record 「治病 48%」「身障輔助 36%」兩個數據寫進客戶提案 narrative（vertical = healthcare / accessibility / 公共服務 三方向）；(b) 對歐 / 受監管行業客戶 governance audit 把 Public Record 寫進證據附錄；威脅：對賭「Anthropic 不透明所以是 enterprise 風險」的競品 narrative 反轉 | [Anthropic — Results first Public Record](https://www.anthropic.com/news/anthropic-public-record) / [ICO Optics — Anthropic Public Record AI safety governance](https://www.ico-optics.org/anthropic-publishes-first-public-record-on-ai-safety-and-governance/) |
| **OpenCode 開源 coding agent 6 月衝到 160K+ GitHub star、7.5M MAU、25M$ ARR——MIT-licensed terminal-native、支援 75+ AI provider 含 local Ollama、Toronto 自筹**：900 contributor、13,000+ commit、LSP 整合 25+ 語言；不存任何 code；parallel multi-session；Zen hosted tier 提供 managed model 配套；Show HN 多次 #1 | 對 Claude Code / Cursor / Codex「閉源 + 訂閱」格局是第一個有商業成功度的替代品；對台日中型企業「客戶資料不出公司網域」訴求是現成方案；對 indie / 一人公司 dev tool stack「廠商 lock-in」可作為對沖 | 機會：(a) **本週**自家 vertical workflow 試 OpenCode + local Ollama + Opus 4.8 fallback 三層 PoC，寫「Closed vs Open coding agent 矩陣」LinkedIn 連發；(b) 賣 dev tool agency 包「OpenCode self-host + GitHub Actions × Claude Code workflows × Cursor SDK customTools」audit $2K–$6K；(c) Antigravity CLI 6/18 撞期 → 對賭「廠商強制 migration 防守」的客戶開新需求；威脅：自家做「Claude Code 完整替代訂閱 SaaS」的 indie niche 收窄 | [OpenCode official](https://opencode.ai/) / [Developers Digest — OpenCode 160K stars guide](https://www.developersdigest.tech/blog/opencode-developer-guide-2026) / [TechFundingNews — OpenCode background story](https://techfundingnews.com/opencode-the-background-story-on-the-most-popular-open-source-coding-agent-in-the-world/) / [byteiota — OpenCode guide 2026](https://byteiota.com/opencode-open-source-ai-coding-agent-guide-2026/) |
| **Antigravity CLI 6/18（3 天後）取代 Gemini CLI / Gemini Code Assist IDE consumer 通道——Google agent-first platform 統一**：5/19 公開、6/18 consumer 端 hard cut；replacement 是 Go-based Antigravity CLI + Antigravity 2.0 desktop app、shared agent harness、async workflows；enterprise 通道不變；I/O 2026 Antigravity 2.0 主推 | 對賭「Gemini CLI 永久免費跑」的 indie / 客戶 hard cut 倒數 3 天；對台日 indie 客戶 deliverable / CI 內 `gemini` 字眼需 grep 清掃；對賣 dev tool agency 是「廠商強制 migration」短期需求；對 GitHub Copilot CLI / Claude Code / Codex 競爭軸線改寫 | 機會：(a) **今天起 3 天**：grep `gemini` 全 repo / CI / client deliverable，列「需 migration 清單」；(b) **6/16–6/22** 內容週「Gemini CLI → Antigravity CLI migration cheatsheet（含 Claude Code / Codex / OpenCode 三軌備援）」（中文社群供給零）；(c) 接「Gemini CLI 遺產 workflow migration」audit $1.5K–$5K；威脅：對賭「Google CLI 永不停服」的 indie 客戶 hard cut | [Google Developers Blog — Transitioning Gemini CLI Antigravity CLI](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/) / [The Register — Bye-bye Gemini CLI Antigravity](https://www.theregister.com/ai-ml/2026/05/20/bye-bye-gemini-cli-google-nudges-devs-toward-antigravity/5243605) / [OSTechNix — Google replacing Gemini CLI Antigravity](https://ostechnix.com/google-is-replacing-gemini-cli-with-google-antigravity/) / [AI Builder Club — Google kills Gemini CLI June 18 migration](https://www.aibuilderclub.com/blog/google-kills-gemini-cli-june-18-2026) |

## 🛠 新興 AI 工具

| 工具 | 類別 | 用途 | 定價 | 差異點 | 採用建議 |
| ---- | ---- | ---- | ---- | ------ | -------- |
| Claude Opus 4.8（Fable 5 下架後重回主力） | LLM 旗艦 | deep reasoning / nested subagent / codebase migration / KB rebuild；Fable 5 退場後 drop-in 替代 | 含 Pro / Max / Team 訂閱；Agent SDK 6/15 後雙池 credit；API 單價略低於 Fable 5 | Anthropic 唯一受 BIS 出口管制不影響的旗艦級；6/12 後實質變回主力 | **今天起 24 小時**所有 client deliverable 把 Fable 5 改 Opus 4.8；自家 codebase migration / KB rebuild / nested subagent PoC 全部跑 Opus 4.8 baseline；客戶合約 SLO 加「Fable 5 不可用 24 小時切換 Opus 4.8」一頁 |
| Anthropic Agent SDK 雙池 credit pool（今天 6/15 上線） | 訂閱 / SDK 計費 | `claude -p` / Agent SDK / Claude Code GH Actions / 第三方 Agent SDK app 共用獨立 credit | Pro $20 / Max 5× $100 / Max 20× $200 / 月底歸零 / 預設無 overflow | 計費結構與互動 Claude.ai 分流；按 full API rate；要主動開 overflow billing | **今天 ET 9:00 前** console.anthropic.com 雙池 credit 確認 + overflow billing + spend cap + Slack alert 四件套；overflow 用 prepaid balance（額度好控）優於信用卡 |
| OpenCode 開源 coding agent | terminal-native AI coding agent | 寫 / refactor / debug / 理解 code；75+ AI provider 含 local Ollama；MIT；LSP 整合 25+ 語言；parallel multi-session | 開源免費（自帶 API key）；Zen hosted tier 額外收費 | 唯一同時跨「閉源訂閱 + 完整自架 + local model + 數十家 provider」；台日中型企業「資料不出公司」場景現成 | **本週**自家 vertical workflow 試 OpenCode + Ollama + Opus 4.8 三層 PoC；做 dev tool agency 包 self-host audit $2K–$6K；做「客戶資料不出網域」vertical SaaS 用作底層 |
| Antigravity CLI（6/18 取代 Gemini CLI） | agent CLI + harness | 多 agent orchestration、async workflow、shared harness、Go binary | enterprise 通道不變 / consumer 通道 6/18 hard cut Gemini CLI | Go binary 啟動快；shared harness 與 Antigravity 2.0 desktop app 互通 | **今天起 3 天**grep `gemini` 全 repo / CI / client deliverable；列「migration 清單」；接「Gemini CLI 遺產 migration」audit $1.5K–$5K |
| GitHub Copilot App + Copilot SDK GA（6/2） | agent control desktop + SDK | 多 agent worktree 並行 / 可嵌 Copilot agent engine 到自家產品 | 含 Copilot Pro / Pro+ / Business / Enterprise；SDK 走付費 API rate | 首個 Microsoft / GitHub 旗下原生 desktop control 中心；SDK GA 讓 SaaS 內嵌可商用 | 跑 Pro+ / Business 訂閱的 indie：**本週**試 Copilot App 並行 worktree；做 SaaS 內嵌 Copilot agent 的 indie：SDK GA 後合規 OEM 條件已具備 |
| Claude Code v2.1.176（6/12） | dev tool 進階治理 | session title 對話語言 / `footerLinksRegexes` 自訂連結 / Bedrock credential cache / `availableModels` enforcement 修 / Fable 5 fallback / hook path match 修 / tmux clipboard 修 | 含 Claude Code 訂閱 + 6/15 後雙池 credit | 與 v2.1.173–175 同週升級延伸；Fable 5 auto-fallback 對 6/12 後變實用 | 升級到 v2.1.176 拿 `footerLinksRegexes` 把自家文件 / Slack / status page 嵌進 footer；做 RFA / Auto Mode[^auto-mode] 治理的 freelancer 把 fallback 流程寫進 SOP |
| Notion Workers + CLI（5/13 / 6/10 升級延伸） | hosted runtime + agent platform | 6/10 後 Custom Agent 可私 Slack 頻道讀寫；Workers 自寫程式碼 + CLI deploy + sandbox 跑；database sync / webhook / custom agent tool | **8/11 前免費**、之後按 Notion credit 計費 | 6/12 Fable 5 下架後對賭「Notion Custom Agent 跑 Fable 5」的 indie 改 Opus 4.8 路徑 | 賣 Notion 顧問業務的 indie：本週試 1 條 vertical pipeline；做中型團隊 internal tools audit $2K–$8K；6/12 後加 Opus 4.8 baseline |

## 💡 SaaS 點子

### 點子 1：「Fable 5 不可用 24 小時切換 Opus 4.8」企業 fallback 方案 audit + 中型企業 SLO 範本（6/12 後 30 天視窗）🆕

- 痛點來源：6/12 BIS export control directive 直接把 Fable 5 / Mythos 5 從所有 plan 全網下架；多數客戶 deliverable / SOP / 工作流 / 客戶合約都假設「Fable 5 永遠在」；台日中型企業（200–2,000 員）採購 / IT decision-maker 急需「美方政策突然變動時 24 小時內無縫切換」的 hard SLO；現有 EU / US / 中合規 audit 不含「美方 BIS 突發出口管制」這層
- 目標客群：中型企業 IT / 採購 decision-maker；賣中型企業 vertical SaaS / 顧問業務的 indie；台日 SI 二級顧問；做 DPIA / EU AI Act 8/2 audit 的 freelancer
- 技術複雜度：2/5（已有 Anthropic API + Opus 4.8 baseline + Cloudflare AI Gateway fallback + DPIA 範本即可組）
- 預估 MRR：$5K–$20K（提案 pack）/ $5K–$25K（中型企業 audit 一次性）
- 競品弱點：原 EU AI Act / DPIA audit 不含「美方 BIS 突發出口管制」這層；Anthropic 官方文件「working to restore as soon as possible」無時間表、無 SLA；台日中文採購提案幾乎零這層 narrative 供給
- 切入建議：(a) **今天起 14 天**ship landing「Fable 5 不可用 24 小時切換 Opus 4.8 + Sonnet 4.6 + 開源 OpenCode fallback 三層 SLO 範本」（嵌 typeform + Stripe；訂閱用戶免費試用、付費 $99 / $299 lifetime；含合約附錄 + DPIA 補充 + Cloudflare AI Gateway 配置）；(b) fixed-price audit $5K–$15K（30 天：客戶現有 Claude 用量 baseline + fallback 切換 PoC + SLO 加附錄 + 美 / 歐 / 中三邊合規 cross-check）；(c) 首 5 家中型企業拍 case study 連發 LinkedIn / Threads / Reddit r/sysadmin（台日中文社群供給接近零）

### 點子 2：「Antigravity CLI migration cheatsheet × 多軌備援（Claude Code / Codex / OpenCode）」dev tool agency audit（6/18 倒數 3 天 + 後 14 天視窗）🆕

- 痛點來源：6/18 Antigravity CLI 取代 Gemini CLI / Gemini Code Assist IDE consumer 通道；多數 indie / 客戶 deliverable / CI / workflow 假設「Gemini CLI 永久免費跑」；現有 migration 路徑文檔零碎、無「Claude Code / Codex / OpenCode 三軌備援」對照；台日中文社群供給零
- 目標客群：用 Gemini CLI 是 CI / workflow 一環的 5–50 人 dev team；做 dev tool agency / freelancer 的 indie；台日中文 vertical 開源套件維護者
- 技術複雜度：2/5（grep gemini 全 repo + 三軌備援腳本範本 + Antigravity CLI 安裝 + Gemini 3.5 Pro GA 待命）
- 預估 MRR：$2K–$8K（cheatsheet 訂閱）/ $1.5K–$5K（單次 migration audit）
- 競品弱點：Google docs 偏「Antigravity install / quickstart」缺「我已用 Gemini CLI 在 N 條 workflow / CI 怎麼一鍵切換」對照；現有第三方 migration 文章多單軌不提備援
- 切入建議：(a) **今天起 3 天**ship landing「Gemini CLI → Antigravity CLI migration cheatsheet + Claude Code / Codex / OpenCode 三軌備援腳本」（嵌 typeform + Stripe；付費 $49 / $199 lifetime）；(b) fixed-price migration audit $1.5K–$5K（grep 全 repo + CI config 改寫 + 三軌備援 PoC + 上線後 7 天 hot fix）；(c) **6/18–6/22** Reddit r/programming / r/golang / r/devops + Threads / LinkedIn 連發 case study（中文社群供給零）

### 點子 3：「TCS / DXC Global Premier × 台日 SI 二級對接」vertical playbook（6/11 後 60 天視窗）🔄

- 痛點來源：6/11 TCS（50K 員工 + 專屬 BU）+ DXC（數萬 forward-deployed Claude-certified engineers）同日宣布 Global Premier；台日 SI 二級對接（東元 / 中華電信 / 鴻海 / NTT Data / 富士通 / Hitachi）採購接 RFP 需求未來 60 天放大；多數 vertical（金融 / 醫療 / 公共服務 / 航空）的 indie 對「TCS / DXC certified engineer 標準」、「Claude Partner Network onboarding」、「SI 二級轉包 commercial terms」不熟
- 目標客群：賣中型企業 vertical SaaS 的 indie；接 SI 二級顧問業務的 freelancer；台日中文 vertical（金融 / 醫療 / 公共服務 / 航空）顧問
- 技術複雜度：1/5（playbook + 標案 RFP 範本 + DPIA / SLO / 合規 cross-check + Anthropic Public Record 證據抓取）
- 預估 MRR：$4K–$15K（playbook 訂閱）/ $5K–$25K（中型企業 RFP 應標一次性）
- 競品弱點：彭博 / FactSet 偏金融分析、缺台日 SI 二級轉包視角；TCS / DXC 官方稿件偏 PR 不含中文採購流程；台日 SI 官方文件無 indie 第三方對接 SOP
- 切入建議：(a) **本週**ship landing「TCS / DXC Global Premier × 台日 SI 二級對接 vertical playbook（金融 / 醫療 / 公共服務 / 航空 / 醫材 / 電信六 vertical）」（嵌 typeform + Stripe；付費 $99 / $399 lifetime）；(b) fixed-price 應標支援 $5K–$15K（RFP 解讀 + 應標範本 + 合規 cross-check + Anthropic Public Record 引用）；(c) 首 5 家拍 case study 連發 LinkedIn / Threads / Reddit r/SaaS（台日中文社群供給接近零）

## 🧰 工具堆疊更新

- **跑 Claude Pro / Max / Team 訂閱**：Fable 5 已下架——所有「跑滿 Fable 5」計畫今天起改 Opus 4.8；自家 codebase migration / KB rebuild / refactor / deep PR review / nested subagent PoC 全部跑 Opus 4.8 baseline；同步用 Tokyo 公布的 Multiagent Orchestration[^multiagent-orch] + Outcomes + Auto Mode + Automemory 五件套重寫自家 vertical workflow
- **跑 24/7 background automation（claude -p / Agent SDK / Claude Code GH Actions）**：**今天 6/15 ET 9:00 前**——console.anthropic.com 雙池 credit 確認 + overflow billing（prepaid balance 優先）+ 月 spend cap（Pro $50 / Max 5× $200 / Max 20× $400 保守值）+ Slack alert 四件套上線；同步把 Cloudflare AI Gateway spend limits + Auto Mode classifier + `/usage` 24h/7d 細項拆解 + Linear coding session credit 試算五條補齊
- **跑 Claude Code 生產自動化 / agency 服務**：升級到 v2.1.176 拿 `footerLinksRegexes` 自訂 footer + Bedrock credential cache + Fable 5 auto-fallback（被 BIS 下架後實質變主用）；做「Fable 5 下架後 24 小時無縫切換」演練 SOP 賣給 governance audit 客戶
- **做 dev tool agency / freelancer**：**6/16–6/22** 內容週主題「Fable 5 下架後的 indie 模型矩陣：Opus 4.8 主力 / Sonnet 4.6 量產 / Haiku 4.5 batch / GPT-5.5 fallback」中英對照表（中文社群供給零）+「Gemini CLI → Antigravity CLI 6/18 migration cheatsheet + 三軌備援腳本」+「TCS / DXC Global Premier × 台日 SI 二級對接 vertical playbook」三條 niche 並行
- **用 Linear 是 issue tracker 的 5–20 人小團隊**：本週升級拿 promotional credit pool；挑 1 條 vertical issue 整套跑通；確認 coding session 預設 model 已自動 fallback Opus 4.8（Fable 5 不可用）；GitLab 客戶加 Cyrus 開源 fallback
- **用 Notion 是 source of truth 的中型團隊（30–200 員）**：**8/11 前免費窗口**（57 天）剩餘——本週試 Notion Workers + Custom Agent + Slack 私頻道 PoC；6/12 後加 Opus 4.8 baseline；拍 1–2 個 vertical case study 影片發 LinkedIn / Threads
- **賣中型企業 vertical SaaS（200–2,000 員、含 EU / 受監管）**：把「(1) Fable 5 不可用 24 小時切 Opus 4.8 SLO + (2) Anthropic compute 雙保險 contracted 2029 + (3) Anthropic IPO 12/15 / $1.10T median + (4) `enforceAvailableModels` allowlist + (5) Anthropic Public Record 透明度 + (6) EU AI Act 8/2 倒數 48 天 + (7) 美方 BIS 出口管制 cross-check + (8) TCS / DXC certified engineer 標準對齊」八件包成 fixed-price audit $5K–$25K；今天起 14 天主打發給目標 5–10 家
- **做 vertical iOS / macOS app**：續行 Foundation Models LanguageModel 協定 + Claude Swift package 路線；Fable 5 下架後 on-device + Opus 4.8 + Gemini 三段路由 PoC（不再含 Fable 5）
- **跑 vertical e-commerce vibecoding SaaS / 跨境小品牌**：本週試 Replit Agent + Shopify + Stripe 在協作 workspace PoC；做「Replit + Shopify + Stripe 一鍵電商」audit $1.5K–$5K（不依賴 Fable 5）

## ⚡ 今日行動建議

- [ ] **30 分鐘** 6/15 ET 9:00 前到 [console.anthropic.com](https://console.anthropic.com)：(1) 雙池 credit 到位確認；(2) 開 overflow billing（prepaid balance 額度好控優於信用卡）；(3) 設月 spend cap（Pro $50 / Max 5× $200 / Max 20× $400 保守值）；(4) 接 Slack alert
- [ ] **45 分鐘** grep 全 repo / CI config / client deliverable 內所有「Fable 5」字眼——批次改 Opus 4.8（drop-in 替代）；同步檢查既有 KB rebuild / nested subagent PoC 結果是否要重跑 baseline
- [ ] **45 分鐘** grep 全 repo / CI config / client deliverable 內所有「gemini」字眼（CLI 用法）——列「6/18 Antigravity CLI migration 清單」；接「Gemini CLI 遺產 migration」audit 客戶 inbound
- [ ] **60 分鐘** 賣中型企業 vertical SaaS 的 indie：寫「Fable 5 不可用 24 小時切換 Opus 4.8 + Sonnet 4.6 + OpenCode fallback 三層 SLO」一頁範本；今天起 14 天主打發給目標 5–10 家
- [ ] **60 分鐘** ship「Gemini CLI → Antigravity CLI 6/18 migration cheatsheet + 三軌備援腳本」landing（嵌 typeform + Stripe；付費 $49 / $199 lifetime）+ LinkedIn / Threads 6/16 早 8 點台北時間發
- [ ] **45 分鐘** 寫白皮書「TCS / DXC Global Premier × 台日 SI 二級對接 vertical playbook（金融 / 醫療 / 公共服務 / 航空 / 醫材 / 電信六 vertical）」拚 6/16–6/22 LinkedIn / Threads / Reddit r/SaaS 連發
- [ ] **30 分鐘** 跑 24/7 background automation 的 indie：「Bugbot $0.40/run × 200 PR/day × Opus 4.8 + 雙池 + Cloudflare AI Gateway × Linear coding session workspace pool」四邊月帳試算工具 baseline 改 Opus 4.8；7/1 Cursor Teams 改帳前重發引流
- [ ] **30 分鐘** 自家 vertical workflow 試 OpenCode + Ollama local model + Opus 4.8 fallback 三層 PoC；寫「Closed vs Open coding agent 矩陣」LinkedIn 連發（台日中文社群供給零）

## ⏳ 待觀察

- 6/15–6/22 Anthropic 是否在 7 天內恢復 Fable 5 / Mythos 5 全球或部分區域存取——若 BIS 收回 directive，6 月底「Fable 5 復活」narrative；若僵局延長，Opus 4.8 變實質長期主力、Anthropic Q3 收入指引下修可能性放大
- 6/15 雙池上線後 24 小時 indie / 中型企業客戶 credit burn rate 實測：(a) Pro $20 是否撐過 1 週重度 nested subagent PoC（估算單日 $3–$5）；(b) Max 5× $100 是否撐過企業半月夜跑 batch；(c) overflow billing forgot 案例是否引發大量 stop 客訴 → Anthropic 是否 24 小時內加 grace period
- 6/16 Linear coding session 第一週末實測：workspace 共享 $20 × unsuspended user credit pool 在 Fable 5 不可用後是否實質「Opus 4.8 變實質單價降低」帶動 credit 使用更友善；Linear 是否 6/19 前對 Fable 5 dependency 公告處理 SOP
- 6/18 Antigravity CLI 收編 Gemini CLI 後 Reddit r/programming / r/golang / HN 第一波 migration 痛點：若湧現「找不到 X 等價」帖，是 dev tool agency 1 週內可賣 audit 的 hot 訊號
- 6/30 Colossus 1 discount 失效 + 6/15 雙池疊加後 Anthropic 是否對 Pro / Max rate limit 公開緊縮：S-1 揭露 $1.25B / 月到 2029/5 contracted、折扣失效不等於 rate limit 緊縮
- Anthropic Q2 2026 收入指引（若 IPO roadshow 9–11 月成型）是否提及 Fable 5 / Mythos 5 政策風險、是否揭露 BIS directive 對營運影響
- EU AI Act 8/2 enforcement 倒數 48 天 + 6/12 BIS 出口管制 + Anthropic Public Record 三件套同時發酵：歐方是否在 7 月前對美方 BIS directive 同步回應？對賣 EU vertical 的 indie 是新題材
- TCS / DXC Global Premier 後續：6/11 後台日 SI（NTT Data / 富士通 / Hitachi / 鴻海）是否在 7 月前公布類似 Anthropic alliance；對賭「Asia SI 二級轉包」的 indie 是 inbound 高峰
- OpenCode 是否在 6/19 前公布 Series A 或 Zen hosted tier 重大價量更新；對賭「閉源訂閱 vs 開源 + Zen」雙軌的 dev tool agency 是新 audit 題材

[^export-control]: BIS export control directive（出口管制指令）是 US Commerce Department 工業與安全局（Bureau of Industry and Security）依《出口管理條例》（EAR）以國家安全為由發出的強制指令，可要求美國企業立即停止向特定外籍人士或國家提供某項技術或服務，違反者面臨刑事與民事處罰；2026-06-12 Anthropic 收到的指令屬於 EAR § 744 系列、要求對所有外籍人士停服 Fable 5 / Mythos 5，是 frontier AI 領域首次對通用模型發出的此類指令。

[^lsp]: Language Server Protocol（LSP）是 Microsoft 2016 推動的開放協定，把「程式語言知識」（型別、補完、診斷、重構等）從編輯器解耦成獨立 server，讓任何 IDE 與任何程式語言搭配只需各寫一份實作；OpenCode 等 AI coding agent 直接消費 LSP 拿到「真實 compiler 訊息」而非靠純 token-level 猜測，是讓 agent 「看得到型別與簽名」的標準做法。

[^cf-ai-gateway]: Cloudflare AI Gateway 是 Cloudflare 提供的 LLM 流量代理層，把對 OpenAI / Anthropic / Bedrock / 自架模型等多家 provider 的呼叫統一收斂到單一 endpoint，附帶 caching、retry、rate limit、spend cap、log / analytics 與 prompt 安全規則；對 indie 與中型團隊的常見用法是「在訂閱與 API 之上多一層支出上限與用量可觀測性」，避免 Agent SDK 自動化跑飛時 credit 一夜燒光。

[^tcs-ion]: TCS iON 是 Tata Consultancy Services 旗下的雲端培訓與認證平台，原本面向印度教育機構與企業做 ERP / 考試 / 線上學習；2026 年起被 TCS 拿來承載「Claude 認證工程師」的內部 50,000 名員工培訓與外部客戶上課，是 TCS / Anthropic Global Premier 合作裡負責「人」這條供應鏈的官方通路。

[^multiagent-orch]: Multiagent Orchestration 指由一個 orchestrator agent 派遣多個子 agent 並行或階段式處理子任務、再彙整結果的工作流模式；Anthropic 在 2026-06-10 Tokyo 公布的版本把這個能力做進 Claude 訂閱與 Agent SDK 內建，含工作分配、共享記憶體、子 agent 失敗自動退讓等原語，對應「一個主腦 + 多個專業助理」的開發場景。

[^auto-mode]: Auto Mode 是 Anthropic 內建的 classifier，會根據 prompt 內容自動挑選最划算的模型（Opus / Sonnet / Haiku），讓重任務走旗艦、輕任務走 Haiku 以壓低 credit 燒率；對開發者而言它取代了「手動指定 model 名稱」的 routing 程式碼，但治理上需確認 fallback 行為與 spend cap 對接，避免被自動升級到旗艦模型而超支。

## 📚 引用來源

1. [Anthropic — Statement on the US government directive to suspend access to Fable 5 and Mythos 5](https://www.anthropic.com/news/fable-mythos-access) — 2026-06-12
2. [CNBC — Anthropic disables access to Fable 5 and Mythos 5 to comply with government directive](https://www.cnbc.com/2026/06/12/anthropic-disables-access-to-fable-5-and-mythos-5-to-comply-with-government-directive.html) — 2026-06-12
3. [Time — Anthropic Pulls Its Most Powerful AI Models After U.S. Bars Foreign Access](https://time.com/article/2026/06/13/anthropic-fable-mythos-ban-US-security/) — 2026-06-13
4. [Bloomberg — Anthropic Says US Orders Halt to Foreign Access for Fable 5, Mythos 5 AI Models](https://www.bloomberg.com/news/articles/2026-06-13/anthropic-says-us-limits-foreign-access-to-fable-5-mythos-5) — 2026-06-13
5. [Fortune — Anthropic disables Fable and Mythos AI models after U.S. government bars foreign access](https://fortune.com/2026/06/13/anthropic-disables-fable-mythos-export-controls-national-security-threat/) — 2026-06-13
6. [Neowin — Anthropic pulls Fable 5 and Mythos 5 after US export control order](https://www.neowin.net/news/anthropic-pulls-fable-5-and-mythos-5-after-us-export-control-order/) — 2026-06-13
7. [MarkTechPost — Anthropic Disables Claude Fable 5 and Mythos 5 After US Government Order](https://www.marktechpost.com/2026/06/13/anthropic-disables-claude-fable-5-and-mythos-5-after-us-government-order/) — 2026-06-13
8. [ChatForest — US Government Suspends Fable 5 Mythos 5 Globally builder incident guide](https://chatforest.com/builders-log/anthropic-fable-5-mythos-5-suspended-export-control-builder-incident-guide/) — 2026-06-13
9. [AY Automate — Claude Fable 5 Alternatives best models to use now](https://www.ayautomate.com/blog/claude-fable-5-alternatives) — 2026-06-13
10. [The New Stack — Anthropic splits billing Agent SDK separate credit pools](https://thenewstack.io/anthropic-agent-sdk-credits/) — 2026-05
11. [TechTimes — Anthropic Ends Subscription Subsidy for Agents June 15 Credit Pool](https://www.techtimes.com/articles/317625/20260602/anthropic-ends-subscription-subsidy-agents-june-15-credit-pool-replaces-flat-rate-access.htm) — 2026-06-02
12. [Codersera — Anthropic June 15 billing change developer guide](https://codersera.com/blog/anthropic-june-2026-billing-change-claude-code/) — 2026-06
13. [Digital Applied — Claude Credit Overhaul June 15 2026](https://www.digitalapplied.com/blog/anthropic-claude-credit-overhaul-june-15-2026) — 2026-06
14. [DevToolPicks — Anthropic Splits Claude Subscriptions Agent SDK credit indie hacker](https://devtoolpicks.com/blog/anthropic-splits-claude-subscriptions-agent-sdk-credit-june-2026) — 2026-06
15. [Anthropic — TCS partnership regulated industries](https://www.anthropic.com/news/tcs-anthropic-partnership) — 2026-06-11
16. [TCS — Global Premier Partnership Anthropic press release](https://www.tcs.com/who-we-are/newsroom/press-release/tcs-anthropic-launch-global-premier-partnership-drive-enterprise-ai-scaling) — 2026-06-11
17. [DXC — Multi-Year Global Alliance Anthropic mission-critical systems](https://dxc.com/newsroom/06112026-dxc-and-anthropic-announce-multi-year-global-alliance-to-bring-ai-into-mission-critical-enterprise-systems) — 2026-06-11
18. [BusinessToday — TCS train 50000 employees Claude](https://www.businesstoday.in/technology/artificial-intelligence/story/tcs-partners-with-anthropic-to-train-50000-employees-on-claude-launch-dedicated-ai-business-unit-536237-2026-06-11) — 2026-06-11
19. [Futurum Group — TCS Anthropic standard regulated AI](https://futurumgroup.com/insights/will-tcs-and-anthropics-claude-partnership-set-a-new-standard-for-regulated-ai/) — 2026-06
20. [TechAfrica News — DXC Partners with Anthropic scale Claude AI](https://techafricanews.com/2026/06/12/dxc-technology-partners-with-anthropic-to-scale-claude-ai-across-global-enterprises/) — 2026-06-12
21. [Anthropic — Results from first Anthropic Public Record](https://www.anthropic.com/news/anthropic-public-record) — 2026-06-12
22. [ICO Optics — Anthropic Public Record AI safety governance](https://www.ico-optics.org/anthropic-publishes-first-public-record-on-ai-safety-and-governance/) — 2026-06-12
23. [OpenCode official](https://opencode.ai/) — 2026-06
24. [Developers Digest — OpenCode 160K stars guide](https://www.developersdigest.tech/blog/opencode-developer-guide-2026) — 2026-06
25. [TechFundingNews — OpenCode background story](https://techfundingnews.com/opencode-the-background-story-on-the-most-popular-open-source-coding-agent-in-the-world/) — 2026-06
26. [byteiota — OpenCode open source AI coding agent guide 2026](https://byteiota.com/opencode-open-source-ai-coding-agent-guide-2026/) — 2026-06
27. [Google Developers Blog — Transitioning Gemini CLI to Antigravity CLI](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/) — 2026-05
28. [The Register — Bye-bye Gemini CLI Antigravity](https://www.theregister.com/ai-ml/2026/05/20/bye-bye-gemini-cli-google-nudges-devs-toward-antigravity/5243605) — 2026-05-20
29. [OSTechNix — Google replacing Gemini CLI Antigravity](https://ostechnix.com/google-is-replacing-gemini-cli-with-google-antigravity/) — 2026-05
30. [AI Builder Club — Google kills Gemini CLI June 18 migration](https://www.aibuilderclub.com/blog/google-kills-gemini-cli-june-18-2026) — 2026-05
31. [GitHub Changelog — Copilot SDK generally available](https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available/) — 2026-06-02
32. [GitHub Changelog — Copilot CLI agentic capabilities JetBrains IDEs](https://github.blog/changelog/2026-06-02-introducing-copilot-cli-and-agentic-capabilities-enhancements-in-jetbrains-ides/) — 2026-06-02
33. [GitHub Changelog — Expanded technical preview Copilot app](https://github.blog/changelog/2026-06-02-expanded-technical-preview-availability-for-the-github-copilot-app/) — 2026-06-02
34. [Claude Code Changelog official](https://code.claude.com/docs/en/changelog) — 2026-06-12
35. [CNBC — SPCX IPO closes $160.95 19% record debut](https://www.cnbc.com/2026/06/12/spacex-ipo-spcx-live-updates.html) — 2026-06-12
36. [EU — AI Act Implementation Timeline](https://artificialintelligenceact.eu/implementation-timeline/) — 2026
