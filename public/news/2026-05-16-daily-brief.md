---
title: 每日創業情報 — 2026-05-16
date: 2026-05-16
tags: 創業情報, AI 產業, SaaS
summary: Anthropic 5/14 雙連發：Agent SDK 上計量表 6/15 起 claude -p / GitHub Actions / 第三方 agent 從 subscription 切換成 $20 / $100 / $200 月 credit，外加 Claude Code Routines 把 cron / GitHub event / API trigger 收進 Anthropic 雲端；Ramp AI Index 5/13 揭 Anthropic 商用採用首次超越 OpenAI（34.4% vs 32.3%）；OpenAI 5/15 揭露兩台員工裝置在 TanStack 鏈中失守、Codex / ChatGPT Desktop / Atlas 簽章 6/12 前強制 rotation。
keywords: Anthropic Agent SDK credit June 15 2026 programmatic pool 20 100 200 Pro Max claude -p, Anthropic Claude Code Routines May 14 2026 scheduled API GitHub trigger cloud cron, Ramp AI Index May 2026 Anthropic 34.4 OpenAI 32.3 business adoption first time, Anthropic Claude for Small Business 15 workflows skills QuickBooks PayPal HubSpot Canva Docusign, OpenAI TanStack npm supply chain May 15 2026 employee devices compromised certificate rotation, Codex App ChatGPT Desktop Atlas Codex CLI macOS signing certificate June 12 deadline, OpenClaw third party agent harness reinstate Claude subscription Agent SDK credit pool, GitHub Copilot CLI 1.0.48 May 14 2026 token price display billing transparency, OpenAI Daybreak GPT-5.5-Cyber Trusted Access for Cyber red team penetration testing, Synthetic AI bookkeeping 10 million seed Khosla Ventures May 14 2026 Tobias Lutke, Optura AI measurement governance 17.5 million Series A 2 billion AI pilots tracked, Anthropic Claude Code 4 percent GitHub public commits authored fastest growing product, Microsoft MDASH agentic security scanning harness Windows networking 16 vulnerabilities, Hint Martha Stewart home maintenance AI seed Slow Ventures Tusk Amplo Energy Impact
---

# 每日創業情報 — 2026-05-16

## 🎯 今日 TL;DR

- **Anthropic 5/14 重大計量化**：**Agent SDK Credit Pool**[^agentsdkcredit] **6/15 起生效**——所有 `claude -p` 非互動指令、Agent SDK、Claude Code GitHub Actions、走訂閱認證的第三方 harness（如 OpenClaw[^openclaw]）通通**離開 subscription rate-limit、改吃月固定 credit**（Pro $20、Max 5× $100、Max 20× $200，按 API list rate 計）；互動式 Claude Code / Claude.ai / Claude Cowork 用量維持原本訂閱配額。**剩不結轉、月底歸零**——4 月禁 OpenClaw / 5/13 部分鬆綁 / 5/14 計量化，完成三段式收費收編
- **Anthropic 5/14 同日推 Claude Code Routines**：把 Claude Code **整套搬上 Anthropic 雲**，三種 trigger——**scheduled**（cron 替代）、**API endpoint + auth token**（external pipeline 觸發）、**GitHub webhook**（PR / issue / release event 過 filter 後叫 routine 起跑）；Pro $20 拿 **5 個 routines / 日**、Max **15 / 日**、Team / Enterprise **25 / 日**；對 indie：用 Anthropic 雲跑「watch PR、寫 release notes、補測試」這類 unattended dev automation 不必再養 cron 機
- **Ramp 5/13 AI Index 揭關鍵轉折**：**Anthropic 4 月商用採用 34.4%、OpenAI 32.3%**——五萬家 US 企業 corporate-card 支出數據，**Anthropic 史上首次超越 OpenAI**；Anthropic 過去 12 個月商用採用四倍成長、OpenAI 同期僅 +0.3%；**Claude Code 4 月已寫掉全球 GitHub public commit 的 ~4%**（前月 ~2%）。對 indie：「賣 ChatGPT plugin」與「賣 Claude integration」的 mindshare 從本月起對調，product positioning 順序要調
- **OpenAI 5/15 揭露：兩台員工裝置在 5/11 TanStack mini Shai-Hulud 鏈中被植入 RAT**——**Codex App、Codex CLI、ChatGPT Desktop、Atlas browser 全部 macOS 簽章 rotation，使用者 6/12 前必須升級舊版才能繼續執行**；OpenAI 強調無客戶資料 / 生產系統外洩，但等於把「**官方桌面 app 也會掉 signing cert**」變成標配風險——靠官方下載一次就裝完的 indie 工作流要加「6/12 前強制升級」checkpoint
- **Stripe 收編生態同時 indie funding 大年**：**Synthetic $10M seed**（Khosla、Tobias Lütke 個人跟投）做 AI bookkeeping 替軟體 startup；**Optura $17.5M A 輪**做 AI initiative 衡量與治理（自家 $2B AI pilot、$120M tracked value）；**Hint $10M seed**（Slow Ventures 領投、Martha Stewart 名義 fronting）做家庭 AI 巡檢——5/13–14 連三筆 indie-grade A 輪以下顯示「**單一 vertical + AI 自動化 + bookkeeping / 衡量 / 巡檢 type tooling**」仍是最容易過資的題型

## 🔄 昨日追蹤

### Anthropic JV 是否在 5/14 deadline 後追加命名 🔄 追蹤更新（仍未）

5/8、5/10、5/11、5/15 brief 連四次列。**5/15 brief 已確認 5/14 deadline 過、仍未命名**，今日 24h 內仍維持「the new company」「the venture」寫法；6 月 Anthropic IPO S-1 揭露仍是下一個觀察錨點。今日新訊號是 5/14 Agent SDK credit + Routines 雙連發進一步把「Anthropic 商用 distribution」鎖回 Anthropic 自家通道，JV 的命名急迫性下降——若 JV 命名延到 6 月 S-1，符合「IPO 前包裝完整故事再公布」的常見排程。

### OpenAI The Deployment Company 首批客戶 logo 🔄 追蹤更新（仍未揭客戶）

5/8、5/10、5/11、5/15 brief 列。**24h 內仍未揭露 customer logo**——5/15 brief 已記錄「partners 與投資人公布、但 customer logo 缺席」；今日 OpenAI 自家最大新聞是 5/15 TanStack 鏈中失守的揭露，5/11 The Deployment Company 動能被自家供應鏈事件蓋掉。下個觀察點：6/2–3 Microsoft Build 期間 OpenAI 是否藉「在 Azure / AWS 走 Codex / Managed Agents」順帶補上 Deployment Company case study。

### Claude Managed Agents Outcomes / Multi-agent 第二批 case study 🔄 追蹤更新

5/10、5/11、5/15 brief 連三天列「7–14 天看第二批」。**24h 內 HN / Reddit r/LocalLLaMA 仍未爆 ARR-grade case study**；但 5/13 Ramp AI Index 把社群焦點吸到「Claude 商用採用」這條更大的敘事、5/14 Agent SDK credit 與 Routines 又把開發者焦點吸去「6/15 我的 SDK 用量會被計量到嗎」。等於 Outcomes / Multi-agent 在 5/16 仍欠第二批實例，但 Anthropic 自家通道已收緊到「不必再靠 case study 拉新」的位置。

### Cloudflare K2.5 → K2.6 alias 5/30 後實際漲幅 🔄 追蹤更新

5/11、5/15 brief 列。**距 5/30 alias 切換還 14 天**——5/15–5/16 社群仍以「TanStack 鏈中第二輪受害者揭露（OpenAI 5/15）」為焦點，K2.5 漲幅尚未到實測時點。下個觀察錨點：5/22 前後社群跑出第一批「K2.5 vs K2.6 對同 prompt 帳單差」實測。

### TanStack 5/11 攻擊 7 天內 GitHub 是否出 `pull_request_target` 官方 guidance 🔄 追蹤更新（仍未）

5/15 brief 列。**24h 內 GitHub 官方 blog 仍無新 guidance**；但 5/15 OpenAI 揭露員工裝置受影響反向證明攻擊衝擊面已擴到「frontier AI 廠商員工 macOS」——把 SLSA[^slsa] 簽章那條防線破口具體化。下個觀察點：5/19–20 Google I/O 期間 GitHub 是否搭順風出 Actions 安全 PSA。

## 📰 AI 產業動態

| 事件 | 影響 | 機會/威脅 | 來源 |
| ---- | ---- | --------- | ---- |
| **Anthropic 5/14 Agent SDK Credit Pool 公告**：6/15 起 `claude -p`、Agent SDK、Claude Code GitHub Actions、走訂閱認證的第三方 agent harness（OpenClaw 等）**離開 subscription rate-limit、改吃獨立月 credit**：Pro $20、Max 5× $100、Max 20× $200，按 API list rate 計；剩餘 credit **不結轉、月底歸零**；互動式 Claude Code / Claude.ai / Claude Cowork 維持原訂閱配額不變 | 4 月禁 OpenClaw → 5/13 部分鬆綁 → 5/14 計量化收編，三段式完成「subscription 不再補貼自動化重度使用者」過渡；對 indie 與 agency：自動 PR-bot、unattended pipeline、CI 內 `claude -p` 一律從「吃訂閱餐」變「吃 API 表」，每月先用滿 $20–$200 credit、超出走 PAYG；訂 Max 20× 跑單體 agent farm 的個體戶月帳實質再升一階 | 機會：(1) 做「Agent SDK Credit 用量監控 + 預警 + 月底未用完自動倒進 retry」 productized service（接 Slack、Stripe webhook）；(2) 寫「indie 6/15 前 audit Agent SDK 用量」guide / SaaS template + CSV importer；(3) 寫「為什麼我把自動化從 Anthropic 換到自架 SGLang」轉型 case study 賺背書收費；威脅：靠「Claude Pro $20 跑無限 agent」當定價賣點的 wrapper SaaS 6/15 起被結構性壓縮 | [InfoWorld](https://www.infoworld.com/article/4171274/anthropic-puts-claude-agents-on-a-meter-across-its-subscriptions.html) / [SiliconANGLE — programmatic credit pool](https://siliconangle.com/2026/05/14/anthropic-announces-programmatic-credit-pool-agentic-tool-use-rises/) / [The New Stack](https://thenewstack.io/anthropic-agent-sdk-credits/) / [The Register](https://www.theregister.com/ai-ml/2026/05/14/anthropic-tosses-agents-into-the-api-billing-pool/5240748) / [VentureBeat — OpenClaw reinstate](https://venturebeat.com/technology/anthropic-reinstates-openclaw-and-third-party-agent-usage-on-claude-subscriptions-with-a-catch) / [DevToolPicks](https://devtoolpicks.com/blog/anthropic-splits-claude-subscriptions-agent-sdk-credit-june-2026) / [Axios](https://www.axios.com/2026/05/14/anthropic-claude-price-openai-tokens) |
| **Anthropic 5/14 Claude Code Routines 公告**：Claude Code 整套上 Anthropic 雲；三種 trigger——**(1) scheduled**（cron 替代、定期跑 issue 分流 / docs drift 掃描 / 自動補測試）、**(2) API endpoint + auth token**（外部 CI / monitoring / 內部工具經 HTTP 觸發）、**(3) GitHub webhook**（PR / issue / release event 過 filter：author、branch、label、draft 後叫 routine 起跑）；額度 Pro 5 routines / 日、Max 15 / 日、Team / Enterprise 25 / 日 | 與 GitHub Actions / Trigger.dev / Cron-job.org 直接對壘，但 routine 是「整個 Claude Code session + repo context + connectors」起跑、不是「跑一條 bash」；對 indie：CI / cron / GitHub bot 三件事可以一路收進 Anthropic 雲、不必養 EC2；同時 Anthropic 把「夜間自動工程」的綁約強度從訂閱拉到雲端執行，**vendor lock-in 明確升一級** | 機會：(1) Routines 範本市集——「自動 PR triage」「failed-CI auto-fix」「docs drift weekly report」「multi-repo SDK sync」十條 ready-to-run template、單條 $19、全包 $99 lifetime；(2) 替 enterprise 寫「Routines vs GitHub Actions vs Trigger.dev」決策表 fixed-price audit $1,500；(3) 開「Routine 月帳超支警示」Slack bot；威脅：賣「Claude Code + cron 自動化」自架方案的 indie 服務差異化收窄 | [InfoQ](https://www.infoq.com/news/2026/05/anthropic-routines-claude/) / [DevOps.com](https://devops.com/claude-code-routines-anthropics-answer-to-unattended-dev-automation/) / [MindStudio](https://www.mindstudio.ai/blog/claude-code-routines-scheduled-agents) / [byteiota — kills cron jobs](https://byteiota.com/claude-code-routines-anthropic-kills-cron-jobs-adds-lock-in/) / [LaoZhang AI](https://blog.laozhang.ai/en/posts/routines-in-claude-code) / [Junia](https://www.junia.ai/blog/claude-code-routines) |
| **Ramp 5/13 AI Index 揭 Anthropic 首次超越 OpenAI**：4 月份美國企業（5 萬家 corporate card 樣本）**Anthropic 採用 34.4%（+3.8% MoM）、OpenAI 32.3%（-2.9% MoM）**；過去 12 個月 Anthropic 商用採用四倍成長、OpenAI 同期 +0.3%；**Claude Code 4 月已寫掉全球 GitHub public commit ~4%**（前月 ~2%、單月翻倍）——Dario 在 5/6 Code with Claude 親口稱「歷史最快達 $1B ARR 的軟體產品」 | 商用 distribution 重心從 OpenAI 朝 Anthropic 移；對 indie：(1) 自家 SaaS 第一頁 marketing「ChatGPT plugin」與「Claude integration」順序對調；(2) 寫對開發者的內容主軸從「教用 ChatGPT」轉「教用 Claude Code」；(3) 客戶 enterprise procurement 對「為何不是 Anthropic」的反問會升高、indie 要先準備好答案 | 機會：(1) 開「我家 SaaS 為何同時支援 Claude + ChatGPT、客戶可選」分流定價方案；(2) 寫「Claude Code 已寫 4% GitHub commit 對你的 PR review 流程意味什麼」深度文（30 天搜尋窗最熱）；(3) 做 Ramp AI Index 月度導讀 newsletter（搶下個月 OpenAI 是否反超的觀察席）；威脅：早期以「ChatGPT-only」做 sales pitch 的 indie 在 5/13 起被 procurement 反問「你也支援 Claude 嗎」 | [Ramp AI Index May 2026](https://ramp.com/leading-indicators/ai-index-may-2026) / [TechCrunch](https://techcrunch.com/2026/05/13/anthropic-now-has-more-business-customers-than-openai-according-to-ramp-data/) / [VentureBeat — 3 threats](https://venturebeat.com/technology/anthropic-finally-beat-openai-in-business-ai-adoption-but-3-big-threats-could-erase-its-lead) / [eWeek](https://www.eweek.com/artificial-intelligence/anthropic-overtakes-openai-enterprise-ai-adoption-neuron/) / [econlab Substack](https://econlab.substack.com/p/anthropic-beats-openai) |
| **OpenAI 5/15 揭露：5/11 TanStack mini Shai-Hulud[^minishaihulud] 鏈中兩台員工裝置被植入 RAT**：OpenAI 強調「**無客戶資料、生產系統、deployed software 外洩**」；但因失竊憑證可能被用於簽章——**Codex App、Codex CLI、ChatGPT Desktop、Atlas browser 的 macOS 簽章全部 rotation，使用者 6/12 前必須升級到新版**；舊版簽章 6/12 後將被 macOS Gatekeeper 阻擋 | 把「**官方桌面 app 也會掉 signing cert**」變標配風險；同期 mini Shai-Hulud 鏈受害名單擴增、TanStack query-core 月下載 220M + react-query 212M 量級的「靠 npm 簽章驗證就放心」防線破口擴大；對 indie：(1) 客戶端裝 ChatGPT Desktop / Codex CLI 的 enterprise 客戶會於本週起追問 endpoint 升級狀態；(2) macOS app 開發者要重新檢視「自家 build server 哪些 secret 進過 npm install」 | 機會：(1) 寫「OpenAI desktop cert rotation 6/12 deadline 速查表」內容稿；(2) 做「自家公司哪些員工 Mac 裝過 ChatGPT Desktop / Codex CLI」audit 一次性服務 $500–$2K；(3) 把「macOS app signing cert rotation playbook」寫成可賣的 retainer SOP；威脅：自家 OSS / SaaS 走 npm publish 又分發 macOS app 的，「我家簽章不會掉」的 sales pitch 進一步失靈 | [The Register — OpenAI in TanStack chaos](https://www.theregister.com/security/2026/05/15/openai-caught-in-tanstack-npm-supply-chain-chaos-after-employee-devices-compromised/5241019) / [Snyk — TanStack Mini Shai-Hulud](https://snyk.io/blog/tanstack-npm-packages-compromised/) / [Wiz](https://www.wiz.io/blog/mini-shai-hulud-strikes-again-tanstack-more-npm-packages-compromised) / [Endor Labs](https://www.endorlabs.com/learn/shai-hulud-compromises-the-tanstack-ecosystem-80-packages-compromised) / [Socket](https://socket.dev/blog/tanstack-npm-packages-compromised-mini-shai-hulud-supply-chain-attack) |
| **Anthropic 5/13 Claude for Small Business + Anthropic SMB 簽單動能**：產品包含 **15 個 ready-to-run agentic workflows**（橫跨 finance / operations / sales / marketing / HR / customer service）+ **15 個 reusable skills** + **8 條 connector**（QuickBooks、PayPal、HubSpot、Canva、Docusign、Google Workspace、Microsoft 365、Slack）；搭配 **10 城市 workshop tour** 與 PayPal 合製免費培訓課程；目標客群是 1–50 人 mom-and-pop / 一人公司 / 獨立創業 | 對標 Notion AI Business、Google Workspace Gemini、Microsoft 365 Copilot——但 Anthropic 用「**connector 直連既有 SMB stack**」差異化（多數 SMB 用 QuickBooks + Slack + HubSpot 不會換）；對 indie：跟做 SMB SaaS 的形成「再造輪子 vs 借力 Claude workflow」二選一壓力；本週起賣 SMB AI 自動化要把「為何不用 Claude for Small Business 內建」當必答題 | 機會：(1) 寫「Claude for Small Business 15 workflows 還是缺哪 10 條 vertical」內容稿（健身房、補習班、餐廳、診所、台灣中小企業）；(2) 做「Claude for Small Business + 你家 SMB SaaS 雙向 connector」productized integration $1.5K–$5K；(3) 對台灣中小企業出「Claude for Small Business 中文化導入」週訂閱 $99；威脅：賣「QuickBooks + AI」「PayPal + AI」單點 integration 的 indie 被 Claude 內建 connector 蓋掉 | [Anthropic 官方](https://www.anthropic.com/news/claude-for-small-business) / [TechCrunch — courts SMB](https://techcrunch.com/2026/05/13/anthropic-courts-a-new-kind-of-customer-small-business-owners/) / [SiliconANGLE](https://siliconangle.com/2026/05/13/anthropic-launches-claude-small-business-new-automation-workflows/) / [Axios](https://www.axios.com/2026/05/13/anthropic-claude-small-business-smb) / [Inc.com](https://www.inc.com/ben-sherry/anthropics-newest-claude-feature-is-here-to-help-small-business-owners-with-their-pain-points/91343926) / [Technobezz](https://www.technobezz.com/news/anthropic-launches-claude-for-small-business-with-15-ready-to-run-agentic-workflows) |

## 🛠 新興 AI 工具

| 工具 | 類別 | 用途 | 定價 | 差異點 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ------ |
| **Claude Code Routines**（Anthropic, 5/14） | cloud-hosted dev automation | 三種 trigger 跑整套 Claude Code session：scheduled、API、GitHub webhook；用 prompt + repos + connectors 起跑、跨 PR / issue / release lifecycle 持續執行 | Pro $20 = 5 routines / 日、Max 5× $100 = 15 / 日、Max 20× $200 / Team Premium $100 / seat = 25 / 日 | 第一家「IDE coding agent 廠商直接做 cloud cron + GitHub Actions 替代」；不必養 EC2 / Linux box；Anthropic 雲端執行、回到 PR 留言或 commit | 跑「自動 PR triage」「failed CI 自動 fix」「docs drift 週掃」「multi-repo SDK 同步」的 indie / agency 本週切 1 條進 routines spike；觀察月底 Pro 5 個 routine 上限是否塞得進現有 cron |
| **Anthropic Agent SDK Credit Pool**（6/15 生效） | 訂閱 + 計量混合定價 | 把 `claude -p`、Agent SDK、Claude Code GitHub Actions、第三方 agent harness（OpenClaw 等）的用量切到獨立 credit；按 API list rate 燒 | Pro 含 $20 / 月、Max 5× 含 $100、Max 20× 含 $200；不結轉、月底歸零；超出走 PAYG | 與 OpenAI / Google 平鋪式訂閱不同：互動 vs 程式化用量切兩條獨立額度；對 PAYG 重度自動化的廠商等於補貼縮減、對輕量互動使用者影響為零 | 6/15 前自家盤點過去 30 天 `claude -p` 與 Agent SDK 用量、列「6/15 後最差情境月帳」；單筆 routine 平均 token 估算、做溢出警示；考慮把高頻 unattended 工作搬到 Bedrock / Claude Platform on AWS 比較 |
| **Claude for Small Business package**（5/13） | SMB SaaS 內嵌 agent | 15 個 ready-to-run workflows（finance、ops、sales、HR、客服）+ 15 個 skills + 8 條 connector（QuickBooks、PayPal、HubSpot、Canva、Docusign、Google Workspace、Microsoft 365、Slack） | 隨 Claude for Small Business 訂閱（具體 SMB 月費 Anthropic 未公開，社群推估 $40–$80 / seat / 月區間） | 第一家以「8 條 SMB-stack connector 預先接好」當主賣點；對 Notion AI Business / Google Workspace Gemini 是「不換你既有 stack 也能跑 AI」差異化 | 1–50 人 SMB / 獨立創業者本週列「我哪 3 條 SOP 已被 15 workflows 覆蓋」；對非美區（亞洲）的 indie 觀察 connector 是否支援自家會計（如 Xero、台灣 SAP CAP）再決定切換 |
| **OpenAI Daybreak + GPT-5.5-Cyber**（5/11–5/15） | 防禦 / 攻擊兼用網安平台 | 三層模型：GPT-5.5（標準）、GPT-5.5 with Trusted Access for Cyber（防禦）、GPT-5.5-Cyber（紅隊 / 滲透測試、限 KYC）；接 Akamai / Cisco / Cloudflare / CrowdStrike / Fortinet / Oracle / Palo Alto / Zscaler | OpenAI 平台、tiered 訪問；GPT-5.5-Cyber 限受邀 + KYC | 第一個官方端出「廠商主導 + 大廠 alliance」紅隊用 LLM 入口；對標 Anthropic Mythos / Google Gemini security toolkit | indie / agency 若不做網安 pentesting 可先觀察；做 SaaS security audit / pentest as a service 的 indie 立刻申請 Trusted Access；做漏洞掃描 SaaS 的考慮接 Daybreak API |
| **GitHub Copilot CLI 1.0.48**（5/14） | dev IDE billing 透明化 | CLI 顯示 token 實際單價（取代圓點 indicator）；instruction file 支援未引用 glob | 隨 Copilot 訂閱 | 第一次把 token 單價 inline 顯示於 CLI——對 Pro Plus / Business 月底突然爆帳的 indie 有所緩解 | 月帳 LLM 超預期者立刻升 1.0.48、CI 內 npm 鏡像同步；同步把自家「給開發者用」工具列「token 單價 inline 顯示」當 UX 標配 |
| **Microsoft MDASH (Multi-model Agentic Security Harness)**（5/12） | 內生 agentic 滲透 | 多模型 agent 平行掃 Windows networking / authentication stack；首批揭 16 個 0-day | 內部使用、可能 Q3 開放 Microsoft Defender 客戶 | 對標 OpenAI Daybreak、Anthropic Mythos——Microsoft 首次以「自家平行 agent 掃自家 stack」當公開敘事 | 接 Windows / .NET 重客戶的 indie 在 Build 6/2–3 前列出自家 dependency 中是否涵蓋 MDASH 揭的 16 條 CVE；做 SaaS 滲透服務的觀察 Q3 開放 timing |

## 💡 SaaS 點子

### 點子 1：Agent SDK Credit Monitor + Auto-Reroute（6/15 上線前 30 天視窗）🆕

- 痛點來源：5/14 Anthropic Agent SDK Credit Pool 6/15 生效；indie / agency 與賣「Claude Pro $20 跑無限 agent」的 wrapper SaaS 過去無監控、無預警；剩餘 credit **不結轉、月底歸零**；單筆 routine token 估算工程量勸退；Anthropic 自家 dashboard 公布僅顯總額、無「按 routine / 客戶 / repo」歸戶
- 目標客群：跑 5+ unattended Claude Code routine / `claude -p` 自動化、月帳 $50–$1,000 的 1–30 人 indie SaaS / agency；用第三方 harness（OpenClaw、自架 wrapper）的個人開發者
- 技術複雜度：3/5
- 預估 MRR：$2K–$8K
- 競品弱點：Anthropic console 偏「總額曲線」、無 alert + 無歸戶；OpenRouter / Vercel AI Gateway 不接 Claude 訂閱 credit；自架 Datadog dashboard 工程量 prohibitive
- 切入建議：(1) 開源 CLI（`agent-sdk-budget`）讀 Anthropic API usage、按 routine / client / repo / project 歸戶；(2) 付費版 $19 / seat / 月加 Slack alert（80% / 95% / 100% 三段預警）+ 月末「剩 credit 自動跑指定低優先級 batch 燒掉」auto-reroute；(3) fixed-price audit $500 一次性盤點過去 30 天用量 + 6/15 後最差情境推估；(4) 對 Claude for Small Business 用戶 bundle SMB workflow 月帳 monitor

### 點子 2：Routines 範本市集 + Vertical Playbook（5/14 起 90 天熱期）🆕

- 痛點來源：5/14 Claude Code Routines 開放後「我要怎麼設第一條 routine」變成本週 Slack 1 號問題；Anthropic 官方範例偏 generic（issue triage、docs drift）、缺 vertical（fintech、healthtech、SMB SaaS、indie maker）模板；單個 routine 設計品質決定 token 燒費——template 寫不好直接吃光 Pro 5 個 / 日上限
- 目標客群：用 Claude Code 的 1–50 人 SaaS、agency、indie maker；想替既有 GitHub Actions / Trigger.dev cron 遷到 Routines 的開發者
- 技術複雜度：2/5
- 預估 MRR：$2K–$10K
- 競品弱點：Anthropic docs example 範圍狹；GitHub Marketplace 沒 Routines 分類；現存 cron / GitHub Actions template 市集（如 Awesome Actions）不為 LLM 計費而調優
- 切入建議：50 個 production-ready routine 模板（自動 PR triage、failed CI auto-fix、docs drift weekly report、multi-repo SDK 同步、release notes generator、issue label classifier、API contract drift detector、dependency CVE watch、staging smoke test reporter、cron-based blog SEO refresh）；單模板 $19、全包 $99 lifetime；vertical bundle（healthtech、fintech、e-commerce、SMB SaaS）$199；前 100 名免費換 newsletter 訂閱與 Discord 互助；YouTube 短片每模板拍 60 秒 demo

### 點子 3：OpenAI Desktop / Codex CLI 6/12 Cert Rotation Audit 服務 🆕

- 痛點來源：5/15 OpenAI 揭 Codex App / CLI / ChatGPT Desktop / Atlas macOS 簽章 rotation、6/12 前強制升級；多數中型公司沒有「員工裝過哪些 AI app」inventory；MDM（Jamf、Kandji）能掃但需要客製 query；6/13 起 Gatekeeper 阻擋舊版會引發大量 IT 工單；同期 mini Shai-Hulud 第二輪受害名單擴增、單做「OpenAI 升級稽核」之外可順帶賣 npm dep 掃描
- 目標客群：50–500 人 SaaS / 美區 fintech / healthtech / agency；無內部 IT security team；用 Jamf / Kandji / Hexnode MDM 的中型公司
- 技術複雜度：3/5
- 預估 MRR：$3K–$15K
- 競品弱點：CrowdStrike / SentinelOne 偏 endpoint 不偏「特定 app 版本升級」；Jamf 自家 inventory 需手寫 Smart Group；Snyk / Socket.dev 偏 dep 不偏 macOS app
- 切入建議：fixed-price audit $1,500–$3,500 — 整合 Jamf / Kandji query + npm dep 掃 + 員工裝置升級 PR；交付物：(1) 1 頁 PDF 列「6/12 前需升級的 macOS 與員工列表」、(2) Slack bot 倒數 + 自動寄信，(3) GitHub Action 掃 OpenAI 官方 SDK + Codex 相關 npm dep 的 transitive 鏈；前 30 家免費或 $500 換 case study

## 🧰 工具堆疊更新

- **如果你跑 `claude -p` / Agent SDK / Claude Code GitHub Actions / OpenClaw**：本週前盤點過去 30 天用量；6/15 後吃獨立 credit（Pro $20 / Max $100 / $200）、不結轉；單筆 routine 平均 token 估算、列警示；超出走 PAYG，月帳會線性放大
- **如果你想替既有 GitHub Actions / cron 遷到 Anthropic 雲**：本週切 1 條 Claude Code Routine spike（推薦：自動 PR triage 或 failed CI auto-fix）；確認 Pro 5 / 日（Max 15、Team 25）額度塞得進現有頻率；同時保留原本 GitHub Actions 當 fallback、別一次全切
- **如果你做 SMB / 一人公司 SaaS**：列「我哪 3 條 SOP 已被 Claude for Small Business 的 15 workflows + 8 connector 覆蓋」；對 procurement 反問先準備「為何不用 Claude 內建」的答案；本週掃自家 marketing 是否已把 ChatGPT plugin / Claude integration 並列
- **如果你客戶端有人裝 ChatGPT Desktop / Codex CLI / Atlas / Codex App**：6/12 前送通知 + MDM 強制升級；做 SaaS / agency 的把這個 audit 變一次性服務（$500–$2K）回收成本；同步補 npm dep transitive chain 掃 TanStack / Mistral 相關
- **如果你做網安 SaaS / pentest as a service**：本週申請 OpenAI Daybreak Trusted Access for Cyber；做 PoC 比 Mythos / 自家 LLM；準備 6/2–3 Microsoft Build 期間若 MDASH 開放 Microsoft Defender 客戶後的 retainer pitch
- **如果你做 Anthropic / OpenAI 之外的 LLM router**：本週把 Claude Code Routine 對應的「unattended dev automation」作為新 router 路徑、Pro $20 credit 進帳；同步加 Cloudflare K2.5 → K2.6 5/30 切換的 cost diff、把替代路線（Together / Fireworks / SGLang）寫進預警

## ⚡ 今日行動建議

- [ ] 自家 `claude -p` / Agent SDK / Claude Code Action 過去 30 天用量 dump + 6/15 後最差情境月帳推估（30 分鐘）
- [ ] 從現有 cron / GitHub Actions 挑 1 條最痛的（自動 PR triage、failed CI fix、docs drift），改寫成 Claude Code Routines 跑 24h spike（45 分鐘）
- [ ] 自家 SMB-facing marketing 把「ChatGPT plugin」「Claude integration」並列、補一頁「為何同時支援 Claude + ChatGPT」FAQ（30 分鐘）
- [ ] 自家 / 客戶 macOS 員工 ChatGPT Desktop / Codex App / Codex CLI / Atlas 版本掃描 + 6/12 前升級提醒（30 分鐘）
- [ ] 自家 Ramp / Brex / Mercury 公司卡支出 dump 過去 90 天 LLM 帳，畫「Anthropic vs OpenAI 月支出占比」圖；列 Anthropic 商用採用 34.4% 對應自家 ratio（15 分鐘）

## ⏳ 待觀察

- 6/15 Anthropic Agent SDK Credit Pool 上線：(1) 是否提供 credit rollover；(2) Pro / Max 額度社群實測「能跑幾條完整 PR-review routine」；(3) 第三方 wrapper SaaS（OpenClaw 等）是否再次調 pricing
- Anthropic Routines 7–14 天內：第一批 vertical 範本（fintech、healthtech、SMB SaaS、e-commerce）的 GitHub 開源率；Anthropic 是否補上「routine concurrency / queue management」UI
- Ramp AI Index 6 月版：(1) Anthropic 採用率突破 35% 是否觸發 OpenAI 大規模反擊（GPT-5.6 / Codex pricing 重設）；(2) Claude Code 寫 GitHub commit 占比是否突破 5%
- OpenAI 6/12 cert rotation deadline：(1) 第三方分析師是否揭更多受害員工 / commit；(2) macOS Gatekeeper 阻擋舊版後社群帳號實測強制升級的影響範圍；(3) OpenAI 是否對標 Anthropic 推出自家「Codex Routines」雲端 cron
- mini Shai-Hulud 第三輪：5/15 OpenAI 揭露後 7–14 天內是否再爆 frontier AI 廠商（Cursor / Replit / Cognition / Codeium）受害；npm 是否動態調整 SLSA provenance 驗證流程加 release window
- 5/19–20 Google I/O：Gemini 4.0 / Aluminum OS / Android XR；Gemini API rate limit / pricing 對 Anthropic 34.4% 採用率的回擊
- 6/2–3 Microsoft Build：(1) Azure AI Agent Service / Semantic Kernel multi-agent workflow；(2) MDASH 是否對 Defender 客戶開放預覽；(3) Codex on AWS（5/15 上線）的 enterprise PoC case study

[^agentsdkcredit]: Agent SDK Credit Pool，Anthropic 2026-05-14 公告、6-15 起生效的計量機制；把 `claude -p` 非互動指令、Agent SDK、Claude Code GitHub Actions、第三方 agent harness（如 OpenClaw）的用量從 Pro / Max / Max 5× / Max 20× / Team / Enterprise 訂閱的 rate-limit pool 切出來，改吃 $20 / $100 / $200 月固定 credit（按 API list rate 燒）；互動式 Claude Code、Claude.ai、Claude Cowork 用量維持原 subscription 配額不變。剩餘 credit 不結轉、月底歸零，超出走 pay-as-you-go。

[^openclaw]: OpenClaw，2025 年底由獨立開發者開源、走 Claude 訂閱認證的第三方 agent harness（命名與 OpenAI 風格雷同），曾把 Claude Pro $20 透過 wrapper 跑出相當於 API 帳數百美元的 agent 工作量；2026-04 Anthropic 以 capacity 不足為由暫時禁用 OpenClaw 系列 harness、引發社群反彈，5-13 部分鬆綁、5-14 Agent SDK Credit Pool 公告後正式回到合法路徑，但所有用量改吃獨立 credit 額度。

[^minishaihulud]: mini Shai-Hulud，2026-04 起在 npm / pnpm 蠕蟲式供應鏈攻擊家族 Shai-Hulud 之內衍生的小型變種，攻擊面集中於「signed-but-malicious」package（攻擊者取得受信任 OSS 維護者帳號後 publish 帶 valid SLSA provenance 的惡意版本）；2026-04-29 SAP CAP 變種、2026-05-11 TanStack 4 家 ecosystem 大規模事件、2026-05-15 OpenAI 揭員工裝置受影響皆屬此家族。

[^slsa]: SLSA（Supply-chain Levels for Software Artifacts），OSSF / Google 主導的軟體供應鏈安全框架（讀作 "salsa"），定義 Level 1–4 與多項要求（build provenance、tamper-resistant 記錄、隔離環境等）；npm 自 2024 起逐步支援 `provenance: true` 把 GitHub Actions OIDC 簽章寫進 package metadata。2026-05 TanStack 與 mini Shai-Hulud 鏈事件揭示「攜帶 valid SLSA provenance、但內容惡意」的 npm 套件已不是孤例，象徵單靠 provenance 驗證不足、需要 release window + 主動 audit 補強。

## 📚 引用來源

1. [Anthropic puts Claude agents on a meter across its subscriptions | InfoWorld](https://www.infoworld.com/article/4171274/anthropic-puts-claude-agents-on-a-meter-across-its-subscriptions.html) — 2026-05-14
2. [Anthropic announces 'programmatic credit pool' as agentic tool use rises | SiliconANGLE](https://siliconangle.com/2026/05/14/anthropic-announces-programmatic-credit-pool-agentic-tool-use-rises/) — 2026-05-14
3. [Anthropic splits billing again: Agent SDK gets separate credit pools | The New Stack](https://thenewstack.io/anthropic-agent-sdk-credits/) — 2026-05-14
4. [Anthropic tosses agents into the API billing pool | The Register](https://www.theregister.com/ai-ml/2026/05/14/anthropic-tosses-agents-into-the-api-billing-pool/5240748) — 2026-05-14
5. [Anthropic reinstates OpenClaw and third-party agent usage on Claude subscriptions — with a catch | VentureBeat](https://venturebeat.com/technology/anthropic-reinstates-openclaw-and-third-party-agent-usage-on-claude-subscriptions-with-a-catch) — 2026-05-13
6. [Anthropic Splits Claude Subscriptions: What Changes for Indie Hackers on June 15 | DevToolPicks](https://devtoolpicks.com/blog/anthropic-splits-claude-subscriptions-agent-sdk-credit-june-2026) — 2026-05 查閱
7. [Anthropic tightens Claude limits as OpenAI courts agent users | Axios](https://www.axios.com/2026/05/14/anthropic-claude-price-openai-tokens) — 2026-05-14
8. [What Anthropic's $200 Agent SDK Credit Means If You Run claude -p in Production | DEV.to](https://dev.to/vainamoinen/what-anthropics-200-agent-sdk-credit-means-if-you-run-claude-p-in-production-ce2) — 2026-05 查閱
9. [Anthropic Introduces Routines for Claude Code Automation | InfoQ](https://www.infoq.com/news/2026/05/anthropic-routines-claude/) — 2026-05-14
10. [Claude Code Routines: Anthropic's Answer to Unattended Dev Automation | DevOps.com](https://devops.com/claude-code-routines-anthropics-answer-to-unattended-dev-automation/) — 2026-05 查閱
11. [Claude Code Routines: How to Run Scheduled AI Agents Without a Server | MindStudio](https://www.mindstudio.ai/blog/claude-code-routines-scheduled-agents) — 2026-05 查閱
12. [Claude Code Routines: Anthropic Kills Cron Jobs, Adds Lock-In | byteiota](https://byteiota.com/claude-code-routines-anthropic-kills-cron-jobs-adds-lock-in/) — 2026-05 查閱
13. [Claude Code Routines in 2026 | LaoZhang AI](https://blog.laozhang.ai/en/posts/routines-in-claude-code) — 2026-05 查閱
14. [Claude Code Routines Explained | Junia](https://www.junia.ai/blog/claude-code-routines) — 2026-05 查閱
15. [Anthropic beats OpenAI on business adoption — Ramp AI Index May 2026](https://ramp.com/leading-indicators/ai-index-may-2026) — 2026-05-13
16. [Anthropic now has more business customers than OpenAI, according to Ramp data | TechCrunch](https://techcrunch.com/2026/05/13/anthropic-now-has-more-business-customers-than-openai-according-to-ramp-data/) — 2026-05-13
17. [Anthropic finally beat OpenAI in business AI adoption — but 3 big threats could erase its lead | VentureBeat](https://venturebeat.com/technology/anthropic-finally-beat-openai-in-business-ai-adoption-but-3-big-threats-could-erase-its-lead) — 2026-05-13
18. [Anthropic's Claude Is Winning the Enterprise AI Race | eWeek](https://www.eweek.com/artificial-intelligence/anthropic-overtakes-openai-enterprise-ai-adoption-neuron/) — 2026-05 查閱
19. [Anthropic beats OpenAI on business adoption | econlab Substack](https://econlab.substack.com/p/anthropic-beats-openai) — 2026-05-13
20. [OpenAI caught in TanStack npm supply chain chaos after employee devices compromised | The Register](https://www.theregister.com/security/2026/05/15/openai-caught-in-tanstack-npm-supply-chain-chaos-after-employee-devices-compromised/5241019) — 2026-05-15
21. [TanStack npm Packages Hit by Mini Shai-Hulud | Snyk](https://snyk.io/blog/tanstack-npm-packages-compromised/) — 2026-05-12
22. [Mini Shai-Hulud Strikes Again: TanStack + more npm Packages Compromised | Wiz](https://www.wiz.io/blog/mini-shai-hulud-strikes-again-tanstack-more-npm-packages-compromised) — 2026-05-12
23. [Shai-Hulud compromises the @tanstack ecosystem | Endor Labs](https://www.endorlabs.com/learn/shai-hulud-compromises-the-tanstack-ecosystem-80-packages-compromised) — 2026-05-12
24. [TanStack npm Packages Compromised in Mini Shai-Hulud | Socket](https://socket.dev/blog/tanstack-npm-packages-compromised-mini-shai-hulud-supply-chain-attack) — 2026-05-12
25. [Introducing Claude for Small Business | Anthropic](https://www.anthropic.com/news/claude-for-small-business) — 2026-05-13
26. [Anthropic courts a new kind of customer: small business owners | TechCrunch](https://techcrunch.com/2026/05/13/anthropic-courts-a-new-kind-of-customer-small-business-owners/) — 2026-05-13
27. [Anthropic launches Claude for Small Business with new automation workflows | SiliconANGLE](https://siliconangle.com/2026/05/13/anthropic-launches-claude-small-business-new-automation-workflows/) — 2026-05-13
28. [Anthropic offers new Claude Code tools for small businesses | Axios](https://www.axios.com/2026/05/13/anthropic-claude-small-business-smb) — 2026-05-13
29. [Anthropic Launches Claude for Small Business with 15 Ready to Run Agentic Workflows | Technobezz](https://www.technobezz.com/news/anthropic-launches-claude-for-small-business-with-15-ready-to-run-agentic-workflows) — 2026-05-13
30. [Daybreak | OpenAI for cybersecurity](https://openai.com/daybreak/) — 2026-05-11
31. [OpenAI Launches Daybreak for AI-Powered Vulnerability Detection and Patch Validation | The Hacker News](https://thehackernews.com/2026/05/openai-launches-daybreak-for-ai-powered.html) — 2026-05-11
32. [Daybreak is OpenAI's answer to the AI arms race in cybersecurity | CyberScoop](https://cyberscoop.com/openai-daybreak-gpt-5-5-anthropic-mythos-cybersecurity/) — 2026-05 查閱
33. [Defense at AI speed: Microsoft's new multi-model agentic security system | Microsoft Security Blog](https://www.microsoft.com/en-us/security/blog/2026/05/12/defense-at-ai-speed-microsofts-new-multi-model-agentic-security-system-tops-leading-industry-benchmark/) — 2026-05-12
34. [Top Startup and Tech Funding News – May 14, 2026 | Tech Startups](https://techstartups.com/2026/05/14/top-startup-and-tech-funding-news-may-14-2025/) — 2026-05-14
35. [Khosla Ventures is betting $10M on Ian Crosby | TechCrunch (Synthetic seed)](https://techcrunch.com/2026/05/14/khosla-ventures-is-betting-10m-on-ian-crosby-whose-last-startup-bench-imploded/) — 2026-05-14
36. [Exclusive: Martha Stewart's new AI startup wants to manage your home before things break | Fortune (Hint seed)](https://fortune.com/2026/05/13/exclusive-martha-stewart-ai-startup-hint-seed-funding-slow-ventures/) — 2026-05-13
37. [Anthropic Introduces Routines for Claude Code Automation (Pro/Max/Team routine quota) | InfoQ](https://www.infoq.com/news/2026/05/anthropic-routines-claude/) — 2026-05-14
38. [Claude Code Routines: Scheduled Cloud Automation Without the DevOps Overhead | AI Magicx](https://www.aimagicx.com/blog/claude-code-routines-scheduled-automation-2026) — 2026-05 查閱
