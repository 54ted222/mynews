---
title: 每日創業情報 — 2026-07-17
date: 2026-07-17
tags: 創業情報, AI 產業, SaaS, 台灣
summary: WAIC 2026 上海今開幕（Xi 主持、300+ 新品首發、7/17–20 四天）+ Gemini 3.5 Pro「預告日」到期仍無官方模型卡（Google 名單未列 gemini-3.5-pro）+ TSMC Q2 2026 EPS NT$27.25、GM 67.7%、亞利桑那再加碼 $100B、全年營收年增上調至「略高於 40%」+ Fable 5 免加價倒數 2 天（7/19 23:59 PT）+ DeepSeek V4 舊名終止倒數 7 天（7/24 15:59 UTC）+ Stripe × Advent $53B 收購 PayPal 提案（PayPal 董事會 7/20 討論、3 天倒數）+ 經濟部 AI 補助倒數 7 天 + 2026 AI 應用大展倒數 13 天。
keywords: WAIC 2026 Shanghai July 17 opening Xi Jinping keynote 300 launches, Gemini 3.5 Pro July 17 2026 GA missed no model card unofficial, TSMC Q2 2026 EPS NT$27.25 revenue $1.27T Arizona $100 billion investment, Anthropic Claude Fable 5 extension July 19 2026 metered $10 $50, DeepSeek V4 flash pro migration July 24 15:59 UTC deprecation, Stripe Advent PayPal $53 billion joint offer July 20 board meeting, 經濟部 115年 AI 創新服務研發補助 7月24日 一人公司 稅籍登記, 2026 AI 應用大展 7月30日 8月1日 台北世貿一館 Agent Edge AI, 永豐 00410A 主動 ETF 募集截止 7月17日 掛牌 8月3日, Cursor team pricing July 1 2026 first party third party pool $120 Premium seat, Claude for Teachers July 14 2026 free K12 Canva MagicSchool ecosystem, MCP 2026-07-28 stateless release candidate SDK beta Python TypeScript Go C#, Grok 4.5 Vercel AI SDK support xAI Cursor trained $2 $6 EU mid-July, indie hacker Taiwan Fable 5 audit Sonnet 5 promo cost model router
---

# 每日創業情報 — 2026-07-17

## 🎯 今日 TL;DR

- **WAIC[^waic] 2026 上海今日開幕（Xi 主持、7/17–20 四天、1,400 名嘉賓、300+ 全球新品首發、140+ 論壇）** — 對台灣 indie 三條機會：(1) 「WAIC 300+ 新品即時解析」中／英雙語 case study 目前供給極少、48 小時 first-mover 窗口敞開；(2) 對已賣中國市場的 SaaS，這 4 天是「新對手清單」實時掃描的最佳時機；(3) 對「Agentic AI」路線的 indie，WAIC 是評估 SoftBank AGENTIC STAR、國內開源 Inkling 等 open-weights 模型定位的參考點
- **Gemini 3.5 Pro[^gemini-35-pro]「7/17 GA」預告日到期但無官方確認 — Google AI Studio 名單仍只有 `gemini-3.5-flash` 與 `gemini-3.1-pro-preview`、model card / pricing page / API changelog 皆未上架** — 這是三度延期後的第三個「軟目標」，對 indie 兩條 immediate：(1) 客戶 SLO 立即校正「Gemini 3.5 Pro 未上架、繼續以 Flash + 3.1 Pro Preview 為 fallback」；(2) 對已把 Gemini 3.5 Pro 寫進提案的 agency 立刻補上「未定日期 → 依 Google 官方公告校正」條款、避免客戶追殺
- **TSMC Q2 2026 昨日（7/16）發布記錄季報 — 營收 NT$ 1,270.38B（YoY +36.0%）、淨利 NT$ 706.56B（YoY +77.4%、連五季創新高）、EPS NT$ 27.25、毛利率 67.7%、CapEx 上調至 $60–64B、亞利桑那再加碼 $100B（總承諾累計 $265B）、C.C. Wei 上調全年營收年增至「略高於 40% USD」、HPC（含 AI 晶片）占 66% 營收** — 昨日 brief 為預告倒數 2 天、今日確認落地；對台灣 indie 兩條 immediate：(1) 「HPC 占 66% + 全年 +40% + 亞利桑那 +$100B」為 AI 供應鏈 SaaS（設備 ERP、產能追蹤、TSMC 供應商情報 dashboard）的實質需求佐證；(2) 對 macro 敏感的 indie 明確：AI infra 高點延續、Fable 5[^fable-5] metered `$10 / $50` 訂價風險 = 客戶付得起、不會 pushback
- **Stripe × Advent International[^advent] $53B 聯合收購 PayPal 提案（$60.50/share、28% 溢價、$50B 銀行承貸、PayPal 董事會 7/20 開會討論、倒數 3 天）** — 若成局將是 fintech 史上最大並購；對台灣 indie 兩條 immediate：(1) Stripe merchant of record[^mor] 政策若受限、Lemon Squeezy / Paddle 或成新贏家、值得寫「跨境收款替代方案 2026」case study；(2) 對已用 PayPal 訂閱扣款的 indie，客戶 SOP 立刻補「若 Stripe 併 PayPal，未來 12 個月費率／API 變動可能性」揭露條款
- **Fable 5 免加價倒數 2 天（7/19 23:59 PT → 7/20 15:00 UTC+8 metered `$10 / $50` hard-stop）+ DeepSeek V4 舊名終止倒數 7 天（7/24 15:59 UTC 起 `deepseek-chat` / `deepseek-reasoner` 全數 404 / 400）+ MCP[^mcp] RC 倒數 11 天 + 經濟部 AI 補助倒數 7 天** — 四大 deadline 併行的 sprint week；Fable 5 是本週最貴 hard-stop、DeepSeek 是本週最痛移轉、MCP 是下週佈局窗口、經濟部是本週 last call 一人公司補助入場券

## 🔄 昨日追蹤

- 🔄 **TSMC Q2 2026** — 昨日 brief 為預告倒數 2 天、今日確認記錄季報落地：EPS NT$ 27.25（Morgan Stanley 共識 $3.77 落在區間內、上緣 67.4% GM 亦命中 67.7%）、亞利桑那 +$100B 為 upside surprise、全年營收年增從「+30%」上調至「+40%」為新指引。對台灣 indie 的 downstream 訊號：AI 晶片需求「megatrend continues」= Anthropic Fable 5 metered 定價的客戶付費能力有實質支撐、SaaS AI infra 客戶端不會 pushback「AI 帳單漲」= 客戶 SOP 可繼續放心加價
- 🔄 **Anthropic Fable 5 三延** — 進入倒數 2 天最後衝刺（7/19 23:59 PT / 7/20 15:00 UTC+8 hard-stop、`$10 / $50 per Mtok` metered、獨立 credits pool 不進週用量 50% 上限），Reddit「兩延三延到底」情緒已定型、bnext 引「Opus 4.8 對日常任務已足夠」共識明確；對已賣 Anthropic 的 indie 客戶 SOP 最後窗口 rewrite 為「Fable 5 三延 7/19 免加價最後 48 小時 + 7/20 metered hard-stop + Opus 4.8 對日常 workload 分派 SOP」倒數卡片
- 🔄 **DeepSeek V4 舊名終止** — 倒數 7 天，昨日 brief 已標「v4-flash 預設 thinking ON 陷阱」，補充：`deepseek-reasoner` 映射到 v4-flash（thinking mode）而**非 v4-pro** — 原本吃 reasoner 做重推理的客戶 pipeline 若沒明確改用 v4-pro，會落到 flash-tier 推理 + flash 價格、性能不平權
- 🔄 **經濟部 115 年 AI 創新服務研發補助** — 倒數 7 天（7/24 hard-stop），「稅籍登記」一人公司即符合門檻的角度昨日已詳細寫，今日僅補時間節奏：`{{MOEA_AI_SUBSIDY_DAYS_LEFT}}` = 7 天、`{{AISHOW_2026_DAYS_LEFT}}` = 13 天，兩個 placeholder 進客戶 landing 的 countdown module
- 🔄 **永豐 00410A 主動 ETF** — 募集期今日（7/17）截止、8/3 掛牌；預擬產業配置電子零組件 45% / 半導體 35% / 網通光通訊 10% / 非金融電子 10% + 年管理費 1% + 半年配 + AI 供應鏈選股（含 TSMC 概念）；對 macro 敏感的 indie 只需知道：「台灣主動式 AI ETF」正在快速普及、標的資訊需求增加 = 「AI ETF 選股 dashboard / 每週產業更新 newsletter」為市場空缺

## 📰 AI 產業動態

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會 / 威脅 |
| ---- | ---- | -------------------- | ----------- |
| **WAIC 2026 上海 7/17 開幕 + 1,400 名嘉賓 + 3,000+ AI 產品 + 300+ 全球首發 + 140+ 論壇 + Xi Jinping 開幕主題演講 + SoftBank AGENTIC STAR 亞洲首秀** | [Global Times — 2026 WAIC 300 global product debuts July 17](https://www.globaltimes.cn/page/202607/1365377.shtml) / [CGTN — Shanghai record-breaking WAIC July 17–20](https://news.cgtn.com/news/2026-07-07/Shanghai-to-host-record-breaking-World-AI-Conference-July-17-to-20-1OAHU3xSEog/p.html) / [Sputnik — Xi Jinping to Address Global AI Governance Summit](https://sputnikglobe.com/20260716/xi-jinping-to-address-global-ai-governance-summit-in-shanghai-1124454500.html) | 4 天 sprint 是「新對手掃描」與「300+ 首發即時中英雙語解析」雙軌黃金窗口；`{{WAIC2026_DAYS_TO_CLOSE}}` = 4 天 + `{{WAIC2026_GLOBAL_DEBUTS}}` = 300+ + `{{WAIC2026_FORUMS}}` = 140+ 三 placeholder 進客戶 landing 與 audit deck；台灣 indie 若在 WAIC 期間發 case study，搜尋端流量峰值可疊加 | 機會：「WAIC 300+ 首發 tracker」中文供給少（僅陸媒為主、台觀點缺）、48 小時 first-mover 可拉關鍵字流量；ship「WAIC 2026 產業對台影響 audit + 48 小時解析 newsletter」NT$ 1,999 lifetime；威脅：Xi 開幕演講「全球 AI 治理」若釋放對外資 AI 服務規範、可能牽動已經開拓中國市場的台灣 SaaS 合規負擔 |
| **Gemini 3.5 Pro「7/17 GA」預告日到期 + Google 官方無 model card / pricing / API changelog + AI Studio 名單僅有 `gemini-3.5-flash` 與 `gemini-3.1-pro-preview`** | [TechTimes — Gemini 3.5 Pro July 17 unconfirmed](https://www.techtimes.com/articles/320308/20260713/gemini-35-pro-targets-july-17-after-full-rebuild-every-spec-remains-unconfirmed.htm) / [Google AI for Developers — Models](https://ai.google.dev/gemini-api/docs/models) / [Google AI for Developers — Release notes](https://ai.google.dev/gemini-api/docs/changelog) | 三度延期後第三次「軟目標」再度落空可能性升高、客戶 SLO 立即校正；對已寫進「7 月採用 Gemini 3.5 Pro」的 agency 兩條 SOP：(1) 用 `gemini-3.5-flash` 或 `gemini-3.1-pro-preview` 為 default fallback；(2) 客戶合約補「以 Google 官方 model card 上架日為 GA hard start」條款 | 機會：「Gemini 3.5 Pro 三延風險評估 + fallback 選型」中文供給少；ship「Gemini 3.5 Pro 未上架 client SOP audit」$99–$199 lifetime；威脅：若 Google 在 WAIC 期間搶戲上架、將壓縮 Fable 5 metered / GPT-5.6 Sol 定價空間、需 24 小時內更新客戶 model router |
| **TSMC Q2 2026 記錄季報（7/16 公布）+ EPS NT$ 27.25 + 營收 YoY +36% + 淨利 YoY +77.4% + 毛利 67.7% + 亞利桑那 +$100B（累計 $265B）+ 2026 CapEx $60–64B + 全年營收年增「略高於 40% USD」+ HPC 占 66%** | [TechPowerUp — TSMC Reports Record Q2 2026 Earning Results](https://www.techpowerup.com/350807/tsmc-reports-record-q2-2026-earning-results) / [Yahoo Finance — TSMC Q2 2026 earnings record profit $100B Arizona](https://finance.yahoo.com/markets/stocks/articles/tsmc-q2-2026-earnings-record-112109987.html) / [Benzinga — TSMC $100 Billion More Into Arizona](https://www.benzinga.com/markets/tech/26/07/60489223/tsmc-is-pouring-100-billion-more-into-its-arizona-plant-to-keep-up-with-strong-us-customer-demand) | 台灣 indie 三條 downstream 訊號：(1) AI 晶片需求「megatrend continues」= SaaS 客戶付得起「AI 帳單漲」= 客戶 SOP 可放心把 Fable 5 metered / Sonnet 5 promo 併入標準報價；(2) 全年營收 +40% 上調 = TSMC 概念股 SaaS（供應鏈 CRM、產能追蹤、封測情報 dashboard）市場空缺加深；(3) 亞利桑那 +$100B 為 US–TW 供應鏈通訊 SaaS 的實質 use case（US 廠端 + TW 總部 timeline 追蹤） | 機會：「TSMC 亞利桑那 4 廠新建 + 2nm 產能追蹤 SaaS」中英雙語供給少；ship「AI 晶片 SaaS 產能情報訂閱」$29–$99 / 月；威脅：C.C. Wei 上調「+40%」= 對台指數推升、若加息壓境、下半年 tech 資金外流風險升溫、需監控 Q3 訂單分配訊號 |
| **Stripe × Advent International 聯合對 PayPal 出價 $53B（$60.50/share、28% 溢價、$50B 銀行承貸、對等持股、PayPal 董事會 7/20 討論、倒數 3 天）+ PayPal 尚未回應 + 4 月已被 Stripe 拒絕過一次** | [TechCrunch — Stripe and Advent reportedly offered to buy PayPal for around $53.4B](https://techcrunch.com/2026/07/15/stripe-and-advent-reportedly-offered-to-buy-paypal-for-around-53-4b/) / [CNBC — Stripe Advent PayPal $53 billion offer](https://www.cnbc.com/2026/07/15/stripe-advent-offer-to-buy-paypal-for-more-than-53-billion-reuters.html) / [Bloomberg — Stripe Advent $53B PayPal](https://www.bloomberg.com/news/articles/2026-07-15/stripe-advent-offer-to-buy-paypal-for-53-billion-reuters-says) | 對已用 Stripe 或 PayPal 的 indie：客戶 SOP 立即補「若 Stripe 併 PayPal 成立、12 個月內費率／API 條款可能變動」揭露條款；對評估中的 indie：**暫緩** ship 純 PayPal 訂閱扣款、優先評估 Lemon Squeezy / Paddle merchant of record 替代方案；對做「跨境收款教學」的 content creator：`{{PAYPAL_BOARD_MEETING_DATE}}` = 2026-07-20 + `{{STRIPE_PAYPAL_OFFER_USD_BN}}` = 53 + `{{STRIPE_PAYPAL_PREMIUM_PCT}}` = 28 三 placeholder 進 SEO 落地頁 | 機會：「Stripe 併 PayPal 若成局、對亞洲 indie 影響」中文分析目前供給極少、7 天內是黃金 first-mover；ship「跨境收款替代方案 2026 audit」NT$ 3,000–8,000；威脅：Stripe 若獲 PayPal 使用者資料庫 + 覆蓋亞洲市場、將壓縮 Merchant of Record 中小競爭者（Paddle、Lemon Squeezy）議價空間、獨立開發者可選項可能反而收斂 |
| **Claude for Teachers 7/14 全美 K-12 免費啟動 + 50 州課綱對齊 + Canva Education / MagicSchool / Diffit 等 8 家教育平台整合 + K-12 資料處理協定（FERPA 對齊）+ 6/30/2027 前註冊免費一年 + Detroit 學區 pilot** | [Anthropic — Introducing Claude for Teachers](https://www.anthropic.com/news/claude-for-teachers) / [Chalkbeat — Anthropic launches Claude for Teachers](https://www.chalkbeat.org/2026/07/14/anthropic-launches-claude-for-teachers-as-ai-companies-battle-for-classrooms/) / [The 74 — Claude for Teachers in AI race for classrooms](https://www.the74million.org/article/anthropic-launches-claude-for-teachers-in-ai-race-to-influence-americas-classrooms/) | 台灣 indie 兩條 immediate：(1) Anthropic 打「教育免費 → API 生態」擴張戰、Detroit pilot 是招募獨立開發者做 skill 的先兆、值得監測 Claude Skills marketplace 教育類目；(2) Canva Education / MagicSchool 生態圈給台灣 EdTech indie 的 wedge — 若能對接 Claude for Teachers 的 skill library、就能吃到 US 教師流量、繞開自建 CRM / 收費前的獲客成本 | 機會：「台灣 EdTech indie 對接 Claude Skills 的 3 個 wedge」中文供給尚為 0；ship「MagicSchool 對接 tutorial + 台灣家長 SaaS wedge」NT$ 2,000–6,000 lifetime；威脅：若 Anthropic 逐步把 K-12 skill 標準化、台灣本地 EdTech 差異化窗口將收斂、需 30 天內鎖定「本地課綱 + 家長 workflow」而非通用備課 |
| **MCP 2026-07-28 stateless RC 倒數 11 天 + Enterprise Auth Extension 穩定版 + Python / TypeScript / Go / C# beta SDK + Mcp-Method header 允許 round-robin LB + Tools/List cache TTL + MCP Apps sandboxed iframe** | [MCP Blog — 2026-07-28 Release Candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/) / [Stacktree — MCP 2026 spec changes](https://stacktr.ee/blog/mcp-2026-spec-changes) / [MCP Directory — Stateless Release Candidate Explained](https://mcp.directory/blog/mcp-2026-07-28-release-candidate) | 對已 ship MCP server 的 indie：升級路徑 4 步（sticky sessions 移除、tools/list cache、Mcp-Method routing、Tasks handle 若有長任務）；`{{MCP_RC_DAYS_LEFT}}` = 11 天 + `{{MCP_SDK_LANGUAGES}}` = 4 個（Py / TS / Go / C#）兩 placeholder 進客戶 landing；升級後最大好處是「不再需要 sticky sessions」= 中小 indie 用 Vercel Edge / Cloudflare Workers 部署 MCP server 的成本一次降 30–50% | 機會：「MCP 2026-07-28 stateless 遷移 8 小時 audit」市場空缺、7/28 上線後首週搜尋量會爆；ship「MCP server 從 sticky 遷 stateless SOP」NT$ 3,999 + 諮詢；威脅：若沒在 7/28 前完成遷移、gateway 端 sticky sessions 政策仍在的舊架構會在流量峰值時付高額 sticky 成本、且相容性視 client 而定、需 7 天內 audit 客戶當前 server 使用了哪些「客戶端狀態」 |

## 🛠 新興 AI 工具

| 工具 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | -------- | ---- | ---------------- | -------- |
| **Grok 4.5**（Vercel AI SDK 支援已納入 7 月 patch、EU 今起 mid-July 開放） | LLM API + Cursor / Grok Build 內建 | 長 session 內的 agentic coding、real engineering task | `$2 / $6 per Mtok`（低於 Sonnet 5 promo 一半、Opus-class 定位） | 用 Cursor 真實 dev session 資料訓練、Musk 稱「roughly comparable to Opus 4.7、much faster」、`2x token efficient` 定位；缺點是「Opus-class」為 xAI 自評、獨立 benchmark 未定型 | 對 Cursor 已 pay 的 indie 免額外 subscription、可直接切 model 測「相同 prompt 的 token 消耗差異」；對 EU indie 今起 mid-July 開放 = 過去用 EU 專線 workaround 的可以退掉；建議在 client 客戶 SLO 加「Grok 4.5 作為 fallback 選項」但**不要**當 default（Cursor session data 訓練來源與客戶合約 IP 條款可能衝突） |
| **Vercel AI SDK `grok-4.5` 支援 patch**（7 月 patch release） | AI SDK / TypeScript | 統一 API 呼叫多家 provider、加入 Grok 4.5 model | 隨 Vercel AI SDK 開源、AI Gateway 按 provider 各自定價 | 過去用 Grok 需自建 API 呼叫層、現在 `import { grok } from "@ai-sdk/xai"` 直接切入；相對於 OpenRouter，優勢在 Vercel Edge 就近部署、streaming latency 較低 | 對已 ship Vercel + AI SDK 的 indie：立即 npm i @ai-sdk/xai 升到最新、把 Grok 4.5 加入 model router 的 fallback 選項；對客戶 SOP 影響：「LLM 供應商多樣化」現在包含 xAI、報價可加 15–25% 差異化 |
| **AssemblyAI Universal-3.5 Pro**（Product Hunt 7 月 launch） | ASR / Speech-to-Text API | 高精度語音轉文字、開發者用 API | 未明列（依 AssemblyAI 定價節奏、預估 $0.37–0.60 / hour） | 「AssemblyAI 最準」為官方定位；相對 Deepgram Nova-3，優勢是「voice-driven apps 開發者體驗」；相對 Whisper 自架，優勢是「managed + streaming」但成本較高 | 對做「語音 SaaS」的 indie：先跑 1 小時客戶樣本 vs Deepgram / Whisper Large-V4、比較 WER 與延遲；對「AI 客服語音」台灣本地服務 indie：中文語音辨識台語 / 客家語支援仍是 Deepgram 弱項、可作為 wedge |
| **Sim**（Product Hunt 7/17 附近 595 upvotes） | Open-source AI Agent workspace | 建構與管理 AI agent workflow 的開源工作台 | 開源、自架成本為 infra 支出（估算 $20–50 / 月起） | 相對 LangGraph Studio / n8n 的優勢是「agent-first design」；相對 Vercel v0 / Lovable 的優勢是「開源 + 自控」 | 對已用 n8n 的 indie：跑 1 天測「同一 workflow 遷 Sim 的 token 節省」；對打「私有部署 agent 顧問」的 indie：Sim 為新差異化選項、可組合 Ollama + Sim + Postgres 做「不出企業防火牆」的本地 agent stack |
| **Muse Spark 1.1**（Meta AI、Product Hunt 7 月 123 upvotes） | 多模態推理模型（agentic） | 為 agentic task 特化的多模態推理 | 未明列（依 Meta 定價節奏、可能透過 Meta AI API 提供） | 相對 Gemini 2.5 Flash 的優勢是「agentic-specific」訓練資料；相對 Sonnet 5 promo，優勢是 Meta 開源生態的可組合性 | 對做 agent 的 indie：加入 model router 的 A/B 名單、跑 1 天 vs Sonnet 5 promo 的 tool-call 成功率 |
| **Kuberns**（Product Hunt 7 月） | AI 部署 / DevOps agent | AI agent 自主部署與管理雲基礎設施 | 未明列 | 相對 Terraform Cloud + Copilot 的優勢是「單一 agent 全自動」；相對 Coolify / Dokploy 的優勢是「agent driven」但自主性風險較高 | 對做「AI SaaS 一人維運」的 indie：先在 staging env 試 1 週、明確 rollback SOP；**不建議** 直接放 prod 除非有嚴格觀察機制 |

## 💡 SaaS 點子

### 點子 1：WAIC 2026 台灣 indie「4 天首發解析電子報 + 隔日 dashboard」 🆕

- **痛點來源**：Global Times / CGTN 均以陸文為主、台灣中文 tech media 對 WAIC 300+ 首發覆蓋率低（僅少數 UDN / 經濟日報單則）、對接台灣獨立開發者的「這個工具能不能拿來 ship」翻譯需要 12–48 小時 lag
- **目標客群**：台灣 / 東南亞 SaaS 獨立開發者、AI agency 顧問（500–1,500 人）
- **技術複雜度**：2/5（RSS + 翻譯 + LLM 摘要 + Substack / Ghost 電子報）
- **預估 MRR**：NT$ 6,000–18,000（首月 100–200 訂閱者 × NT$ 99/月）
- **競品弱點**：Ben's Bites / TLDR AI 中文覆蓋薄；INSIDE / TechCrunch TW 對 WAIC 只做重點事件、不做工具層級解讀
- **切入建議**：3 天 sprint — Day 1 定 template + 4 個評估欄位（工具名 / 開源狀態 / 台灣可用性 / indie use case）；Day 2 開幕日晚間發首篇；Day 3 隔日補「10 個值得追蹤」dashboard；WAIC 4 天結束後改月刊訂閱制、續看下場大會（COMPUTEX 2027 / NeurIPS）

### 點子 2：Stripe × PayPal 併購觀察與「跨境收款替代方案 2026」白皮書 🆕

- **痛點來源**：Stripe × Advent $53B 提案（7/20 PayPal 董事會）+ 4 月已被拒過一次；對已用 Stripe 訂閱扣款的台灣 indie，若成局代表「12 個月內 API / 費率／使用政策」有大幅變動風險；獨立 M&A 分析中文供給極少
- **目標客群**：跨境收款的台灣 / 東南亞 SaaS indie（含 Gumroad / Lemon Squeezy / Paddle 用戶）
- **技術複雜度**：1/5（無技術、純寫作 + 對比表）
- **預估 MRR**：NT$ 15,000–35,000（首月 200–400 訂閱 × NT$ 99；一次性 audit NT$ 3,000–8,000）
- **競品弱點**：Stripe 官方通訊只講「業務照常」、獨立媒體只覆蓋美國市場、台灣 tech media 對亞洲 indie 影響完全缺席
- **切入建議**：3 週 sprint — Week 1 對比 Stripe / Lemon Squeezy / Paddle / Gumroad 的 merchant of record 政策 / 退款 / 稅務條款；Week 2 訪 5 家已切 Lemon Squeezy 的 indie 做 case study；Week 3 出 landing page + 導流 audit；7/20 PayPal 董事會前 first-mover 出白皮書、拉搜尋端流量

### 點子 3：MCP 2026-07-28 stateless 遷移 audit SaaS 🆕

- **痛點來源**：MCP 2026-07-28 RC 倒數 11 天、遷移窗口只有兩週；Python / TypeScript / Go / C# beta SDK 已在、但「sticky sessions → stateless」遷移路徑對非本地熟手是 4–8 小時工程；遷移完可省 30–50% gateway 成本
- **目標客群**：已 ship MCP server 或即將 ship MCP server 的 SaaS / agency（1,000–3,000 家、含 Smithery 上 registered 的公開 server）
- **技術複雜度**：3/5（讀 MCP RC spec + 自架 test bench + audit 客戶 code）
- **預估 MRR**：NT$ 30,000–80,000（月 30–80 家 × NT$ 999 一次性 audit + monthly monitor NT$ 299）
- **競品弱點**：Anthropic 官方文件為英文與 developer 導向、不做「1 對 1 客戶 SOP」；Smithery 目前偏 registry、不做 audit
- **切入建議**：4 週 sprint — Week 1 讀完 RC spec + 自架 Node.js MCP server test bench；Week 2 拆遷移 checklist（10 項、含 sticky、tools/list cache、Mcp-Method routing、Tasks handle、Enterprise Auth）；Week 3 找 10 家 Smithery 上開源 server 做「不收費 upgrade PR」拉信任；Week 4 開 landing、7/28 RC 上線首週推 audit 服務

## 🧰 工具堆疊更新

- **Vercel AI SDK** 7 月 patch 加入 Grok 4.5 支援；`import { grok } from "@ai-sdk/xai"` 即可切模型、對已 ship Vercel + AI Gateway 的 indie 是零 downtime 升級
- **Next.js Security Release** 首次正式排程 7/20 出（本週日）、包含多個修補；對 Next.js indie 建議 7/21 週一晨會前完成 update
- **Supabase** 7/14 完成 03:00–04:00 UTC 例行維運 + 7/15 修復 dashboard 上的 auth provider 顯示問題（若有 UI bug、應已自動修好）；對 Supabase indie 無需動作
- **MCP SDK beta**（Python / TypeScript / Go / C#）已釋出、可提前對 RC 做壓測

## ⚡ 今日行動建議

- [ ] **【最高優先、當日 4h】WAIC 2026 開幕日 first-mover** — 訂 Global Times / CGTN / 陸媒 3 個 RSS 或 Google Alert（關鍵字：「WAIC 2026 launch」/「WAIC 2026 全球首發」）、晚間發首篇「WAIC 2026 開幕 10 個值得追蹤」中文電子報／Threads 貼文；成本 NT$ 0，產出：明天早晨可拉 100–500 訂閱首波流量
- [ ] **【當日 2h】客戶 SLO 校正三件套** — 校正 (1) Gemini 3.5 Pro 未上架，繼續用 Flash + 3.1 Pro Preview fallback、加官方公告 hard start 條款；(2) Fable 5 倒數 2 天，7/20 metered `$10/$50` hard-stop、Opus 4.8 對日常任務已足夠共識加入 model router；(3) DeepSeek `deepseek-reasoner` 若還在客戶 code、明確改用 `deepseek-v4-pro`（不要落到 v4-flash thinking mode）；產出：客戶端 SOP 三處 diff、明日晨會前發出
- [ ] **【本週 3d】Stripe × PayPal 併購「跨境收款替代方案 2026」白皮書 first-mover** — 7/20 PayPal 董事會前發 landing、對比 Stripe / Lemon Squeezy / Paddle / Gumroad merchant of record 政策；預期成本 NT$ 0–1,000（工具 + 網域）、產出：中文 SEO first-mover 拉搜尋流量、audit 服務為變現路徑

## ⏳ 待觀察

- **Gemini 3.5 Pro 是否於 7/17–7/20 WAIC 期間搶戲上架** — 若 Google 藉 WAIC 議題熱度反打上架、將壓縮 Fable 5 metered 定價與 GPT-5.6 Sol 訂價空間、客戶 model router 需 24 小時內更新（監控 [Google AI Studio Release notes](https://ai.google.dev/gemini-api/docs/changelog)）
- **PayPal 董事會 7/20 決議** — 若接受或進入排他協商、Stripe 併 PayPal 將定調 fintech 版圖；若拒絕、可能觸發 Stripe 三度加價（history: 4 月被拒過一次）
- **Anthropic 是否第 4 度延期 Fable 5** — Reddit / bnext 已有「二延三延到底」情緒、若 7/18 傍晚（美東時間）前無官方公告、大概率 7/19 23:59 PT hard-stop 落地
- **DeepSeek 7/24 前是否有 v4-pro 定價調整** — 目前 `deepseek-reasoner` 映射到 v4-flash + `thinking ON`，若 v4-pro 定價在最後一週有 promo、對做重推理的客戶 SOP 影響大
- **WAIC 期間 open-weights 模型是否有中國自研 Opus-class 出線** — Inkling 已在 HN 出現、若 WAIC 期間有更多如「Qwen 3.5 Ultra / DeepSeek V5 preview」發佈、對台灣 indie 的自主可控 stack 選項與價格戰有連帶影響

[^waic]: World AI Conference（世界人工智慧大會），中國於 2018 年起在上海主辦的年度 AI 大會，由國務院與工信部指導，聚焦模型發表、產業標準與治理議題，是中國官方與國際 AI 廠商對接的主場合。

[^gemini-35-pro]: Google DeepMind 於 2026 年推出的 Gemini 3 系列旗艦推理模型的下一階版本，前身 Gemini 3.1 Pro 已於 API 開放 preview；3.5 Pro 定位對標 GPT-5.6 Sol 與 Claude Opus 4.x 的高階通用模型。

[^fable-5]: Anthropic 繼 Claude 4/5 系列後推出的新一代旗艦模型代號，採 metered per-token 計費（input／output 分開報價），獨立於既有 subscription 週用量配額之外，2026 年 7 月分階段釋出、與 Opus 4.x 並行過渡。

[^advent]: Advent International，1984 年於美國波士頓成立的全球私募股權基金，管理資產規模逾 US$100B，長期參與大型 buyout 與 fintech 併購，過往投資包括 Worldpay、Nubank 等支付與金融科技標的。

[^mor]: Merchant of Record（登記商家），跨境交易中以自身法人代開發者收款、代扣代繳銷售稅與 VAT、承擔退款與 chargeback 責任的中介，代表業者為 Paddle、Lemon Squeezy、Gumroad，讓獨立開發者省下各國稅籍成本。

[^mcp]: Model Context Protocol，Anthropic 於 2024 年提出、2025 年開放的 LLM 與外部工具／資料源之間的標準化通訊協定，透過 stdio 或 HTTP transport 讓 client 與 server 互通，2026 年規範版本轉向 stateless 架構。

## 📚 引用來源

1. [Global Times — 2026 WAIC set for July 17 with over 300 global product debuts in Shanghai](https://www.globaltimes.cn/page/202607/1365377.shtml) — 2026-07-08
2. [CGTN — Shanghai to host record-breaking World AI Conference from July 17 to 20](https://news.cgtn.com/news/2026-07-07/Shanghai-to-host-record-breaking-World-AI-Conference-July-17-to-20-1OAHU3xSEog/p.html) — 2026-07-07
3. [Sputnik — Xi Jinping to Address Global AI Governance Summit in Shanghai](https://sputnikglobe.com/20260716/xi-jinping-to-address-global-ai-governance-summit-in-shanghai-1124454500.html) — 2026-07-16
4. [TechTimes — Gemini 3.5 Pro Targets July 17 After Full Rebuild: Every Spec Remains Unconfirmed](https://www.techtimes.com/articles/320308/20260713/gemini-35-pro-targets-july-17-after-full-rebuild-every-spec-remains-unconfirmed.htm) — 2026-07-13
5. [Google AI for Developers — Models](https://ai.google.dev/gemini-api/docs/models) — 2026-07-17（accessed）
6. [Google AI for Developers — Release notes](https://ai.google.dev/gemini-api/docs/changelog) — 2026-07-17（accessed）
7. [TechPowerUp — TSMC Reports Record Q2 2026 Earning Results](https://www.techpowerup.com/350807/tsmc-reports-record-q2-2026-earning-results) — 2026-07-16
8. [Yahoo Finance — TSMC Q2 2026 earnings: Record profit, $100 billion Arizona investment](https://finance.yahoo.com/markets/stocks/articles/tsmc-q2-2026-earnings-record-112109987.html) — 2026-07-16
9. [Benzinga — TSMC Is Pouring $100 Billion More Into Its Arizona Plant](https://www.benzinga.com/markets/tech/26/07/60489223/tsmc-is-pouring-100-billion-more-into-its-arizona-plant-to-keep-up-with-strong-us-customer-demand) — 2026-07-16
10. [TechCrunch — Stripe and Advent reportedly offered to buy PayPal for around $53.4B](https://techcrunch.com/2026/07/15/stripe-and-advent-reportedly-offered-to-buy-paypal-for-around-53-4b/) — 2026-07-15
11. [CNBC — Stripe Advent make $53 billion takeover offer for PayPal](https://www.cnbc.com/2026/07/15/stripe-advent-offer-to-buy-paypal-for-more-than-53-billion-reuters.html) — 2026-07-15
12. [Bloomberg — PayPal Works With Goldman, Evercore as Stripe, Advent Make $50B-Plus Offer](https://www.bloomberg.com/news/articles/2026-07-15/stripe-advent-offer-to-buy-paypal-for-53-billion-reuters-says) — 2026-07-15
13. [Anthropic — Introducing Claude for Teachers](https://www.anthropic.com/news/claude-for-teachers) — 2026-07-14
14. [Chalkbeat — Anthropic launches Claude for Teachers in AI race to influence America's classrooms](https://www.chalkbeat.org/2026/07/14/anthropic-launches-claude-for-teachers-as-ai-companies-battle-for-classrooms/) — 2026-07-14
15. [MCP Blog — The 2026-07-28 MCP Specification Release Candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/) — 2026-07（RC 標記）
16. [Stacktree — MCP 2026-07-28 spec: what changed, what breaks](https://stacktr.ee/blog/mcp-2026-spec-changes) — 2026-07
17. [DEV Community — DeepSeek V4 API Migration Guide: Everything Before the July 24, 2026 Deadline](https://dev.to/agdex_ai/deepseek-v4-api-migration-guide-everything-before-the-july-24-2026-deadline-4m30) — 2026-07
18. [Developer Tech — Three AI coding agents launched in 72 hours (Cursor pricing floor 2026)](https://www.developer-tech.com/news/ai-coding-agents-cursor-anthropic-alibaba-price-floor-2026/) — 2026-07
19. [Explainx — Grok 4.5 Public Launch July 9: Opus-Class, Cursor-Trained](https://explainx.ai/blog/grok-4-5-public-launch-spacexai-july-2026) — 2026-07-09
20. [Releasebot — Vercel Release Notes July 2026](https://releasebot.io/updates/vercel) — 2026-07
21. [經濟日報 — 2026 AI 應用大展 7 月底登場 聚焦 AI Agent、Edge AI 兩大主軸](https://money.udn.com/money/story/11162/9619430) — 2026-07
22. [工商時報 — 永豐首檔台股主動 ETF 00410A 7/13 開募 8 月初掛牌](https://www.ctee.com.tw/news/20260709701460-430403) — 2026-07-09
