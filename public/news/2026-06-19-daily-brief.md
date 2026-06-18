---
title: 每日創業情報 — 2026-06-19
date: 2026-06-19
tags: 創業情報, AI 產業, SaaS
summary: Anthropic 開首爾辦公室、NAVER／Samsung SDS／LG CNS／Nexon 集體上 Claude Code；@mastra 全 npm scope 142 包遭北韓 APT 後門攻擊、暴露 110 萬週下載；Odyssey $310M @ $1.45B 把 world model 推上 AWS Trainium。
keywords: Anthropic Seoul office NAVER Samsung SDS LG CNS Nexon June 17 2026, Claude Korea ecosystem KAIST Yonsei POSTECH MOU, Mastra npm supply chain easy-day-js BlueNoroff 142 packages, npm typosquat postinstall dropper info stealer June 17, Odyssey 310M Series B 1.45B world models AWS Trainium, Frontier carbon removal Anthropic 915M coalition, Devin Desktop Agent Client Protocol ACP Cognition, GitHub Copilot flex billing AI credits June 2026, TCS DXC Anthropic forward deployed engineer regulated industries, Stripe Sessions 2026 hybrid AI SaaS pricing dimensional streaming
---

# 每日創業情報 — 2026-06-19

## 🎯 今日 TL;DR

- **Anthropic 6/17 開首爾辦公室、把南韓財閥集體拉上 Claude Code**：NAVER 整個工程組織、Samsung SDS（含 Samsung Electronics 內部）的 Claude Cowork 與 Claude Code、LG CNS 把 Claude 推給 LG 全集團、Nexon 用 Claude Code 做 live-service 遊戲開發、Hanwha Solutions 走 AWS Bedrock in-region、Channel Corp（Channel Talk，服務 230,000+ 商家）把 Claude 接進客服平台；同步與韓國科學技術部簽 AI safety MOU、提供 Claude 給 KAIST / Yonsei / POSTECH / Korea University 的 National AI Research Lab 60 位研究者。Seoul 是 Tokyo、Bengaluru 之後 Asia-Pacific 第三個辦公室、由前 Snowflake Korea GM KiYoung Choi 領軍——亞洲 indie 第一次有「整個鄰國市場被 Claude 收編」的直接訊號
- **@mastra npm scope 6/17 在 88 分鐘內 142 包被植入後門、北韓 APT BlueNoroff 操刀**：被劫持的 contributor 帳號（"ehindero"）於 UTC 01:12–02:39 自動化 republish 142 包、全部塞入 `easy-day-js`（dayjs typosquat）依賴；該假包透過 postinstall hook 跨 Windows / macOS / Linux dropping 二段式 info stealer（瞄準 wallet / AI provider keys）後自刪。`@mastra/core` 週下載 ~918K、整個 scope 110 萬週下載暴露；Microsoft、StepSecurity、Socket、Orca、Snyk 都已歸因 Sapphire Sleet（BlueNoroff）。**任何在 6/17 跑 `npm install` 拿到 @mastra 包的 SaaS 都該假設機台 token 已外洩、立刻 rotate**
- **Odyssey 6/17 拿 $310M Series B @ $1.45B、Amazon 領軍、AWS Trainium 入列**：Natural Capital 領投、Amazon / AMD Ventures / GV / EQT / IQT 跟、天使陣容含 Jeff Dean、Garry Tan、Guillermo Rauch（Vercel）、Elad Gil、Kyle Vogt（Cruise）；自駕老將 Oliver Cameron + Jeff Hawke 創辦；不做 LLM、做 world model（物理／因果／環境動態），目標機器人 / 遊戲 / 科學 / 醫療 / 教育 / 國防；AWS 成 preferred cloud、用 Trainium 替代部分 NVIDIA。world model 從研究進入 commercial 階段、indie 第一次有「不靠語言模型的 AI 應用層」可考慮
- **Anthropic 6/17 加入 Frontier 碳移除聯盟、是首家 AI startup**：Google、Stripe、Meta、Salesforce、Shopify 與 McKinsey 同期注入新 $915M tranche、Frontier 總規模翻倍到 $1.8B；目標技術：海洋鹼化、生物質移除、強化岩石風化、direct air capture；策略改成「砸大專案、要能年除 1 Gt CO2 的才投」。AI 公司能源外溢首次被「自家」買單——同業 OpenAI / Microsoft / Mistral 接下來會被輿論逼跟進
- **Devin Desktop（前 Windsurf）6/2 起內建 Agent Client Protocol（ACP）、Codex / Claude Agent / OpenCode 全 plug-in**：Cognition 把 ACP 推成「agent 互操作開放協定」、Devin Desktop 預設介面是 Kanban-style Agent Command Center 而非 editor；單機 + cloud agent 統一管理。MCP（agent 對工具）、A2A（agent 對 agent）、AG-UI（agent 對 UI）後第四個 agent 開放協定登場——這次戰場是 IDE 殼層

## 🔄 昨日追蹤

過去 3 天 brief（6/16 / 6/17 / 6/18）主軸——Antigravity CLI hard cut、Fable 5 BIS 政策危機、SPCX IPO trading、GPT-5.6 1.5M context、EU AI Act 8/2 enforcement——與今日五條新訊號（Anthropic Seoul、@mastra npm 後門、Odyssey world model、Frontier 碳承諾、Devin Desktop ACP）**不重疊**，今日為純全新資訊。後續若 OpenAI / Mistral 跟進碳承諾、或 Antigravity CLI 進 Homebrew / apt、或 Fable 5 解禁等前刊追蹤項出新訊號，再回頭追蹤。

## 📰 AI 產業動態

| 事件 | 影響 | 機會/威脅 | 來源 |
| ---- | ---- | --------- | ---- |
| **Anthropic 6/17 開首爾辦公室、NAVER / Samsung SDS / LG CNS / Nexon / Hanwha / Channel Corp 集體上 Claude Code**：Seoul 是 Tokyo / Bengaluru 後 APAC 第三辦公室；KiYoung Choi（前 Snowflake Korea GM）出任 Representative Director；同步簽科學技術部 AI safety MOU、提供 Claude 給 KAIST / Yonsei / POSTECH / Korea University 共 60 位研究者；Good Neighbors Korea 用 Claude 處理兒童權益案件 | 南韓財閥從「用 ChatGPT 試水」跳到「全公司 Claude Code 標配」；台灣大型企業（台積電 / 鴻海 / 廣達 / 台塑）面對「同行整片接 Claude」的壓力會傳到下游 vendor；亞洲 indie 第一次有「鄰國市場被 Claude 收編」的直接信號 | 機會：替台灣與東南亞中型 SaaS 做「Claude Code 導入 1–2 週 productized」服務、語言/監管/資料主權三軸切入；做 Korean-Taiwanese 跨境 enterprise 整合（KR ↔ TW 共用 Claude 流程）；威脅：仍在賣「GPT wrapper」的 indie SaaS 失去亞洲企業 PoC 機會 | [Anthropic Seoul Office](https://www.anthropic.com/news/seoul-office-partnerships-korean-ai-ecosystem) / [UPI](https://www.upi.com/Top_News/World-News/2026/06/18/korea-Anthropic-Seoul-office-Korea-partnerships-Washington-AI-export-controls/4641781769900/) / [Let's Data Science](https://letsdatascience.com/news/anthropic-opens-seoul-office-to-expand-korea-ties-54895648) / [Dig.watch](https://dig.watch/updates/anthropic-south-korea-ai-safety-seoul-office) |
| **@mastra npm scope 6/17 在 88 分鐘內 142 包被植入 `easy-day-js` 後門、北韓 APT BlueNoroff[^bluenoroff] 操刀**：UTC 01:12–02:39 自動化 republish；hijacked contributor 帳號 "ehindero" 仍保有 publish 權；`easy-day-js` 是 dayjs typosquat、postinstall dropper 跨 Win/Mac/Linux 抓 info stealer、執行後自刪；瞄準 wallet key 與 AI provider API key；`@mastra/core` 週下載 ~918K、整 scope > 110 萬週下載暴露 | 「下載量百萬等級的 AI agent 框架」第一次被國家級 APT 拿下；任何 6/17 之後（含）執行 `npm install` 抓 @mastra 的 CI / dev 機台都該假設已外洩；postinstall hook 信任邊界整個崩塌 | 機會：做「postinstall block by default」CI tool、做 AI agent 框架專屬 SBOM[^sbom] / lockfile auditor、做「key rotation as a service」for indie SaaS；威脅：自家 LLM 應用使用 @mastra 框架的 indie 立刻面對 token 外洩 + 客戶信任成本 | [Microsoft Security Blog](https://www.microsoft.com/en-us/security/blog/2026/06/17/postinstall-payload-inside-mastra-npm-supply-chain-compromise/) / [StepSecurity](https://www.stepsecurity.io/blog/mastra-npm-packages-compromised-using-easy-day-js) / [Socket](https://socket.dev/blog/mastra-npm-packages-compromised) / [Orca Security](https://orca.security/resources/blog/mastra-npm-supply-chain-attack/) / [Cloudsmith](https://cloudsmith.com/blog/inside-the-mastra-npm-supply-chain-attack) |
| **Odyssey 6/17 拿 $310M Series B @ $1.45B val、Amazon 入列、AWS Trainium[^trainium] 替部分 NVIDIA**：Natural Capital 領投、Amazon / AMD Ventures / GV / EQT / IQT 跟；天使 Jeff Dean / Garry Tan / Guillermo Rauch / Elad Gil / Kyle Vogt；創辦人 Oliver Cameron + Jeff Hawke（前 Cruise / Wayve）；產品做 world model（物理 / 因果 / 環境動態）而非語言模型；AWS 成 preferred cloud | world model 從研究進入商業化；indie 第一次有「不靠 OpenAI / Anthropic 也能做 AI 應用」的非語言路線；機器人 / 遊戲模擬 / 教育 / 醫療影像領域有新 vendor | 機會：做 world model 上層應用——遊戲 NPC behaviour、AR / VR 場景、醫療影像模擬、機器人訓練資料 pipeline；做「Trainium 上 inference 成本對比」內容流量；威脅：靠 LLM 寫遊戲對白的 indie 即將面對「整套 world model 取代部分敘事邏輯」競爭 | [TechCrunch](https://techcrunch.com/2026/06/17/world-model-maker-odyssey-nabs-1-45b-valuation-backed-by-amazon-and-other-big-names/) / [HPCwire](https://www.hpcwire.com/off-the-wire/odyssey-raises-310m-series-b-to-advance-ai-world-models/) / [Unite.AI](https://www.unite.ai/odyssey-raises-310-million-series-b-at-1-45-billion-valuation-to-advance-ai-world-models/) / [Tech Startups](https://techstartups.com/2026/06/17/odyssey-raises-310-million-at-1-45-billion-valuation-to-build-ai-that-simulates-the-real-world/) |
| **Anthropic 6/17 加入 Frontier 碳移除聯盟、首家 AI startup**：與 Google / Stripe / Meta / Salesforce / Shopify / McKinsey 同期挹注 $915M、Frontier 總規模翻倍至 $1.8B；策略轉「砸大專案、要能年除 1 Gt CO2 的才投」；技術範圍：海洋鹼化、生物質移除、強化岩石風化、direct air capture[^dac] | AI 公司能源外溢首次被自家買單；下一個輿論壓力會推到 OpenAI / Microsoft / Mistral；「AI 公司 + 碳承諾」變新企業客戶的 RFP 加分項 | 機會：做「indie AI SaaS 用電 / 用水 / carbon credit dashboard」、做「我們也碳中和」徽章 / API、做面向 enterprise 客戶的 ESG 報表生成；威脅：賣 LLM-heavy SaaS 給有 ESG KPI 的歐 / 日企業時，「沒碳承諾」會變新 churn 原因 | [TechCrunch](https://techcrunch.com/2026/06/17/anthropic-becomes-first-ai-startup-to-join-the-frontier-carbon-removal-coalition/) / [Trellis](https://trellis.net/article/anthropic-google-stripe-frontier-growth-amc/) / [ESG Today](https://www.esgtoday.com/frontier-raises-over-900-million-for-carbon-removal-investments-from-google-anthropic-and-others/) / [Carbon Herald](https://carbonherald.com/google-anthropic-and-other-tech-giants-915m-to-scale-carbon-removal/) |
| **Devin Desktop（前 Windsurf）6/2 起內建 ACP[^acp]、Codex / Claude Agent / OpenCode 全可 plug-in**：Cognition 推 Agent Client Protocol 為 agent 互操作開放標準；Devin Desktop 預設介面從 editor 改 Kanban Agent Command Center；定價 Free / Pro $20 / Max $200 / Teams $80 + $40 seat；底層模型改 SWE 1.6 | MCP（agent 對工具）、A2A（agent 對 agent）、AG-UI（agent 對 UI）後第四個 agent 開放協定；IDE 殼層戰場開始；單機 + cloud agent 一個 UI 管理變新標準 | 機會：做 ACP 相容 agent（小 niche、可被 Devin Desktop 拉貨）、做 ACP 模板 / quickstart、做「Cursor vs Devin Desktop ACP 對 indie 的工作流影響」付費內容；威脅：自家 IDE 殼層或 chat box 變多餘——ACP 把「在誰家 IDE 跑」的選擇權還給開發者 | [Coding with AI](https://codingwithai.com/news/windsurf-devin-desktop-launch-june-2026) / [AIToolTier](https://aitooltier.com/tools/windsurf) / [Digital Applied](https://www.digitalapplied.com/blog/windsurf-becomes-devin-desktop-ide-migration-2026) / [TechInsider](https://tech-insider.org/windsurf-vs-cursor-2026/) |

## 🛠 新興 AI 工具

| 工具 | 類別 | 用途 | 定價 | 差異點 | 採用建議 |
| ---- | ---- | ---- | ---- | ------ | -------- |
| Devin Desktop（前 Windsurf）| ACP-first IDE | Kanban-style Agent Command Center 管理本地 + cloud agent；ACP plugable（Codex / Claude / OpenCode / 自家 agent）；單機跑 SWE 1.6 | Free / Pro $20 / Max $200 / Teams $80 + $40 seat | 第一個把 ACP 列為一等公民的 IDE；單一介面跑多家 agent | 想同時用 Codex 與 Claude Code 但厭倦切換 IDE 的 indie 跑 1 週評估；做 vertical 工程顧問的 agency 把 Devin Desktop 設為「客戶端標配」可省一輪 onboarding |
| Anthropic Claude Code（Korea ready）| enterprise coding agent | 6/17 起在韓國 in-region 部署；接 AWS Bedrock；繁中／簡中／日／韓全語系商用 SLA | Claude Enterprise / API 同價、in-region 不額外加 | 第一次有亞洲非英語企業整國採用案例（NAVER、Samsung、LG、Nexon）；本月起在 KR / JP / IN 三辦公室 SLA 升級 | 接亞洲企業 PoC 的 indie 把 Claude Code 列預設、簡 1 頁「亞洲在地化部署 readiness」說帖 |
| Odyssey World Model（research access）| 非語言 foundation model | 物理 / 因果 / 環境動態模擬；機器人 / 遊戲 / 醫療影像 / 教育場景；AWS Trainium 上跑 | 尚未公開，研究 / 企業合作為主 | 不是 LLM、市場唯一純 world model 商用 vendor；Amazon 雙背書（資金 + 雲） | 做遊戲 / VR / 機器人模擬的 indie 申請早期研究 access；其餘 indie 先觀察 6 個月、注意「world model + LLM 結合」案例浮現 |
| GitHub Copilot Flex Billing | usage-based dev tool 計價 | 6/1 起改 AI Credits 計費；$10 Pro、$39 Pro+、$19 Business / seat、$39 Enterprise / seat；2,000 completions + 50 premium chat 免費 | 同上 | request-based → AI Credits 是業界第一個 mainstream 倒戈案例 | 月帳 $20 上下的 indie 試 1 個月看 Credits 用量；Team / Enterprise 計費要重算 ROI |
| OpenAI GPT-5.5 + Codex（全戶 default）| 主力 LLM + 編碼 agent | 6/12 起 GPT-5.2 / 5.3-Codex 全部 sunset、自動升 5.5；EU / UK / Switzerland Codex app 與 Computer Use 開放；Pro 用戶可用 5.5 Pro | Plus / Pro / Business / Enterprise 全層；單價較 5.4 高但 token 效率更佳 | OpenAI 整理產品線、留 5.5 + 5.5 Pro 兩條主軸；EEA 終於有 Computer Use | 在歐洲市場做 SaaS 的 indie 立刻能拿 Computer Use 做 demo；亞洲 indie 評估 5.5 vs Opus 4.8 vs Kimi K2.6 跑 50 prompt 對比 |
| Claude Managed Agents：Dreaming / Outcomes / Multi-agent orchestration | agent 自我改進 + 評測 + 編排 | Dreaming（research preview）跨 session 整理記憶；Outcomes（public beta）用 rubric + 獨立 grader；多 agent 編排 lead + specialist 共享 filesystem | Claude Enterprise / API 內含 | Harvey 用 Dreaming 任務完成率 ×6；Wisedocs 用 Outcomes 醫療文件審閱快 50% | 做 agent-heavy SaaS 的 indie 把 Outcomes 接進自家 eval pipeline；Dreaming 暫只值得 enterprise 採；multi-agent orchestration 先以 1 lead + 2 specialist 做 PoC |

## 💡 SaaS 點子

### 點子 1：AI Framework Postinstall Guardrail（@mastra 事件直接催生）🆕

- 痛點來源：6/17 @mastra npm 142 包後門、postinstall dropper 直跑、postinstall hook 信任邊界整片崩；MITRE / StepSecurity / Snyk / Socket / Microsoft 一齊在 48h 內發文還是攔不住；indie 沒有「預設 block 所有 postinstall + AI agent 框架專屬 lockfile audit」工具
- 目標客群：用 @mastra / LangChain / LlamaIndex / Inngest / Mastra 之外 AI agent 框架的 indie SaaS（3–50 人），跑 CI / CD 的 dev team
- 技術複雜度：3/5
- 預估 MRR：$2K–$10K
- 競品弱點：Snyk / Socket / StepSecurity 都做泛用 SBOM，但對 AI agent 框架的「LLM key、wallet key、auth token」風險 surface 沒有特別模型；npm `--ignore-scripts` 是粗暴 flag、不會學工作流
- 切入建議：CLI + GitHub Action（`ai-postinstall-guard`）；預設 block 所有 postinstall hook、白名單 AI agent 框架的可信版本；遇到 typosquat（如 easy-day-js）出強警告；$19 / 月 indie、$99 / 月 team；6/17 事件後一週內發 launch + benchmark 文章衝 HN 首頁

### 點子 2：Korea-Taiwan Claude Code 跨境導入顧問（亞洲版 Big Four AI 諮詢）🆕

- 痛點來源：6/17 Anthropic Seoul 後 NAVER / Samsung SDS / LG CNS / Nexon 全上 Claude Code；台灣大型企業（台積電 / 鴻海 / 廣達 / 台塑）面對「同產業鏈鄰國全接 Claude」的供應鏈壓力，但 Big Four 顧問 fee 高、台灣本地 SI 沒有 Claude Code 整合經驗
- 目標客群：100–2,000 人台灣製造業 / 金融 / 半導體上下游 vendor，與 KR 客戶有業務往來；台灣 boutique SI 想轉型
- 技術複雜度：2/5（顧問為主、工程為輔）
- 預估 MRR：$5K–$30K
- 競品弱點：Anthropic JV / OpenAI The Deployment Company 不接 mid-market（< 2,000 人）；DXC / TCS 走 Global Premier 不會關心台灣；台灣本土 SI 沒做過 Claude Code 整合
- 切入建議：固定價 audit（$3K–8K）走 10 條核心 workflow、輸出 Claude Code 導入 readiness 報告；做完轉訂閱 $1K–3K / 月持續客製；先抓 5 家做 case study 衝 LinkedIn / 商周流量

### 點子 3：World Model Asset Studio（給遊戲 / VR / 教育 indie 接 Odyssey）🆕

- 痛點來源：6/17 Odyssey $310M @ $1.45B 把 world model 推進商業化，但獨立遊戲 / VR / 教育 indie 沒有「30 分鐘把 world model 接進 Unity / Unreal / WebXR」的工具；Odyssey 自家 API 主打 enterprise + 研究
- 目標客群：indie game studio（1–10 人）、VR / AR content creator、教育模擬軟體 indie；月營收 $5K–50K 的內容團隊
- 技術複雜度：4/5
- 預估 MRR：$3K–$15K
- 競品弱點：Unity / Unreal 自家工具是傳統物理引擎；Inworld / Convai 主打 NPC 對話、不做世界模擬；Odyssey 自家 SDK 偏研究與大客戶
- 切入建議：Unity / Unreal / Three.js plugin + Hosted API proxy；按場景時長計費（$0.10 / scene-minute）或固定包月 $49；先做 3 個 demo 場景（教育用太陽系、VR 商店、教學機器人）衝 X / Reddit r/gamedev 流量

## 🧰 工具堆疊更新

- **如果你用 @mastra 或任何 npm 上的 AI agent 框架**：今晚立刻 audit `node_modules` 是否含 `easy-day-js`；6/17 後跑過 `npm install` 的 dev / CI 機台預設「token / API key 已外洩」、強制 rotate。把 `--ignore-scripts` 設為預設、檢 lockfile pin 確切版本
- **如果你做亞洲企業 PoC**：本週起 Claude Code（含 Bedrock in-region）變新「企業預設」；自家 GPT wrapper SaaS 要重寫 pitch deck 強調差異化（不是模型、是垂直）
- **如果你在歐洲 SaaS**：OpenAI Codex app + Computer Use 6/12 起在 EEA / UK / Switzerland 開放——可以開始把「歐洲合規 + Computer Use 加值」當賣點，特別是德國 / 北歐金融客戶
- **如果你做 dev tool / CI**：GitHub Copilot 6/1 起改 AI Credits 計費；replicate 一次 ROI 計算給客戶——大概 30% 客戶會在 1 個月內重評估 seat 數
- **如果你做遊戲 / VR / 模擬 SaaS**：開始追 Odyssey research access、world model 上層應用是 12–18 個月內的新藍海；不必馬上 pivot，但要列追蹤清單

## ⚡ 今日行動建議

- [ ] 今晚跑 `grep -r "easy-day-js" package-lock.json yarn.lock pnpm-lock.yaml` 全 repo 掃，再 `npm audit` + 比對 @mastra 版本（10 分鐘）
- [ ] 若有 hit：rotate 所有 LLM provider key（OpenAI / Anthropic / Mistral / 自家 LLM proxy）+ AWS / GCP IAM、檢查 wallet key（30 分鐘）
- [ ] 寫 1 頁「亞洲企業 Claude Code 導入 readiness」說帖、列 5 個現有客戶當 PoC 候選（45 分鐘）
- [ ] Devin Desktop free 跑 30 分鐘——測 Codex / Claude Agent 共存 workflow，記下你願意付 Pro $20 的 3 個理由（or 3 個不付的理由）（30 分鐘）
- [ ] 訂閱 Frontier coalition、Odyssey、Anthropic news feed；本月 ESG 客戶提案多帶一頁「我家 SaaS 碳足跡估算」（15 分鐘）

## ⏳ 待觀察

- @mastra 維運團隊 6/19–6/22 是否公布 root cause + 帳號 takeover 細節；其他 AI agent 框架（LangChain / LlamaIndex / Mastra 之外）是否被同手法 probe；npm 是否回頭強化 contributor revoke 流程
- Anthropic Seoul 之後是否在 Taipei / Singapore / Bangkok 開辦——若 Q3 前任一城市開、台灣 indie 接 enterprise PoC 機會跳一階
- Odyssey 是否在 7 月發 public SDK / pricing；目前只有 research access、商業化節奏會決定 indie 何時跟進
- GPT-5.5 vs Opus 4.8 vs Kimi K2.6 在 SWE-Bench Pro / Terminal-Bench 2.2 上的最新對比（6/30 前 Terminal-Bench 應更新）；做 LLM router 的 indie 要重設權重
- Frontier 新策略「年除 1 Gt 才投」是否壓死小型 DAC startup；indie 想做 carbon 副業要看新一輪 RFP
- AG-UI v1.x 與 ACP 是否互通（CopilotKit 與 Cognition 都沒表態）；agent 開放協定戰場本季可能整合或分裂

[^bluenoroff]: BlueNoroff 是北韓國家級駭客組織 Lazarus Group 的子單位，又被資安業界稱為 Sapphire Sleet 或 APT38。早年以 SWIFT 銀行系統與加密貨幣交易所盜竊聞名，近兩年戰術轉向 supply chain 與 developer-targeting，常見手法包含 LinkedIn 招募詐騙、惡意 npm / PyPI 套件、以及偽裝會議軟體的木馬，目的是抓開發者機台上的 wallet 與 API key。

[^sbom]: Software Bill of Materials 的縮寫，是列出一套軟體所有相依套件、版本、來源與授權的清單，類似食品成分表。歐盟 Cyber Resilience Act（CRA）與美國行政命令 EO 14028 均把 SBOM 列為合規必備項目；產業常見格式為 SPDX 與 CycloneDX，CI / CD pipeline 多搭配 Syft、Trivy、Snyk 等工具自動產生。

[^trainium]: Amazon 自研的 AI 訓練專用晶片，2023 年推出第二代 Trainium2、2024 年末發表 Trainium3，主打 perf-per-dollar 對標 NVIDIA H100 / H200。AWS 自家 Bedrock、SageMaker 與大客戶 Anthropic、Odyssey、Databricks 等同步使用，是 AWS 在生成式 AI 算力市場降低對 NVIDIA 依賴的核心籌碼。

[^dac]: Direct Air Capture，中文常譯「直接空氣捕捉」，指以化學吸附或溶劑直接從大氣抽取 CO2 的碳移除技術。目前代表廠商包含 Climeworks、Carbon Engineering、Heirloom，每噸成本約落在 $400–700 區間；Stripe 主導的 Frontier coalition 設定的目標是 2030 年前將成本壓至 $100 / tCO2 以下，才能真正規模化部署。

[^acp]: Agent Client Protocol，由 Cognition 主導推出的開放協定，定義 IDE 殼層與 coding agent 之間的雙向通訊規格。目標是讓單一 IDE 可以同時掛載 Codex、Claude Agent、OpenCode 等任何相容 agent，使用者不必為了換 agent 而換編輯器；產業定位類似 LSP 對程式語言伺服器，或 MCP 對工具呼叫。

## 📚 引用來源

1. [Anthropic opens Seoul office and announces new partnerships across the Korean AI ecosystem | Anthropic](https://www.anthropic.com/news/seoul-office-partnerships-korean-ai-ecosystem) — 2026-06-17
2. [Anthropic opens Seoul office amid U.S. AI restrictions | UPI](https://www.upi.com/Top_News/World-News/2026/06/18/korea-Anthropic-Seoul-office-Korea-partnerships-Washington-AI-export-controls/4641781769900/) — 2026-06-18
3. [Anthropic opens Seoul office to expand Korea ties | Let's Data Science](https://letsdatascience.com/news/anthropic-opens-seoul-office-to-expand-korea-ties-54895648) — 2026-06-17
4. [Anthropic and South Korea partner on AI safety and cybersecurity | Digital Watch Observatory](https://dig.watch/updates/anthropic-south-korea-ai-safety-seoul-office) — 2026-06-17
5. [From package to postinstall payload: Inside the Mastra npm supply chain compromise | Microsoft Security Blog](https://www.microsoft.com/en-us/security/blog/2026/06/17/postinstall-payload-inside-mastra-npm-supply-chain-compromise/) — 2026-06-17
6. [Mastra npm Supply Chain Attack: 140+ Packages Backdoored via easy-day-js Typosquat | StepSecurity](https://www.stepsecurity.io/blog/mastra-npm-packages-compromised-using-easy-day-js) — 2026-06-17
7. [140+ Mastra npm Packages Compromised in Coordinated Supply Chain Attack | Socket](https://socket.dev/blog/mastra-npm-packages-compromised) — 2026-06-17
8. [144 Mastra npm Packages Compromised via Supply Chain Attack | Orca Security](https://orca.security/resources/blog/mastra-npm-supply-chain-attack/) — 2026-06-17
9. [Inside the Mastra npm supply chain attack | Cloudsmith](https://cloudsmith.com/blog/inside-the-mastra-npm-supply-chain-attack) — 2026-06-17
10. [World model maker Odyssey nabs $1.45B valuation backed by Amazon and other big names | TechCrunch](https://techcrunch.com/2026/06/17/world-model-maker-odyssey-nabs-1-45b-valuation-backed-by-amazon-and-other-big-names/) — 2026-06-17
11. [Odyssey Raises $310M Series B to Advance AI World Models | HPCwire](https://www.hpcwire.com/off-the-wire/odyssey-raises-310m-series-b-to-advance-ai-world-models/) — 2026-06-17
12. [Odyssey Raises $310 Million Series B at $1.45 Billion Valuation | Unite.AI](https://www.unite.ai/odyssey-raises-310-million-series-b-at-1-45-billion-valuation-to-advance-ai-world-models/) — 2026-06-17
13. [Anthropic becomes first AI startup to join the Frontier carbon removal coalition | TechCrunch](https://techcrunch.com/2026/06/17/anthropic-becomes-first-ai-startup-to-join-the-frontier-carbon-removal-coalition/) — 2026-06-17
14. [Anthropic joins Google, Stripe and others in $900 million carbon removal initiative | Trellis](https://trellis.net/article/anthropic-google-stripe-frontier-growth-amc/) — 2026-06-17
15. [Windsurf Becomes Devin Desktop With New Agent Command Center | Coding with AI](https://codingwithai.com/news/windsurf-devin-desktop-launch-june-2026) — 2026-06-02
16. [Windsurf Is Now Devin Desktop (June 2026): Rebrand Explained | AIToolTier](https://aitooltier.com/tools/windsurf) — 2026-06 查閱
17. [New in Claude Managed Agents: dreaming, outcomes, and multiagent orchestration | Anthropic](https://claude.com/blog/new-in-claude-managed-agents) — 2026-05-06
18. [Introducing GPT-5.5 | OpenAI](https://openai.com/index/introducing-gpt-5-5/) — 2026-06 查閱
19. [OpenAI Sunsets GPT-5.2 and GPT-5.3-Codex | ChatGPT AI Hub](https://chatgptaihub.com/openai-sunsets-gpt-5-2-gpt-5-3-codex-model-transition-guide/) — 2026-06-12
20. [DXC and Anthropic Announce Multi-Year Global Alliance | DXC](https://dxc.com/newsroom/06112026-dxc-and-anthropic-announce-multi-year-global-alliance-to-bring-ai-into-mission-critical-enterprise-systems) — 2026-06-11
21. [TCS Partners With Anthropic to Bring Claude to Banking, Healthcare, and Regulated Industries | OpenTools](https://opentools.ai/news/tcs-anthropic-claude-regulated-industries-partnership-2026) — 2026-06-11
