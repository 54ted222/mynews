---
title: 每日創業情報 — 2026-06-11
date: 2026-06-11
tags: 創業情報, AI 產業, SaaS
summary: Tokyo 6/10 Anthropic 公布 Multiagent Orchestration / Outcomes / Dreaming + NEC 30K / Hitachi 290K 全球部署；SpaceX 含 Colossus 1 / xAI 6/12 上市 $1.75T；SaaStr 指 AI 月費 < $50 SaaS GRR 僅 23%。
keywords: Code with Claude Tokyo June 10 2026 Multiagent Orchestration Outcomes Dreaming Automemory announcement, Anthropic Managed Agents Desktop Worktrees Auto Mode classifier permission, Claude Fable 5 developer Reddit Cowork Claude Code coding benchmark June 10 2026, NEC Hitachi Anthropic Claude 30000 290000 employees deployment Lumada 3.0 enterprise, SpaceX IPO June 12 2026 SPCX 135 dollar share 1.75 trillion 75 billion Colossus xAI Starlink, SaaStr AI agent churn portable prompts GRR 23 percent 85 percent ChartMogul retention report 2026, Anthropic confidential S-1 SEC IPO 965 billion 47 billion run rate June 1 2026, Microsoft MAI-Code-1-Flash 5 billion parameter 256k context SWE Bench Pro Haiku 4.5 Build 2026, Cognition Windsurf Devin Desktop rebrand June 2 2026 ACP Agent Client Protocol Cascade deprecated, Databricks Claude Fable 5 Unity AI Gateway governed deployment June 9 2026
---

# 每日創業情報 — 2026-06-11

## 🎯 今日 TL;DR

- **Code with Claude Tokyo 6/10 主場日把「Managed Agents」從 5/6 SF 預告補成可用組合**：Anthropic 主舞台公布**三件 Managed Agents 新功能** —— **Multiagent Orchestration**[^multi-orch]（同時派發 N 個專業 agent 拆解複雜任務）、**Outcomes**[^outcomes]（先定義成功條件、agent 自迭代到符合條件再收工）、**Dreaming**[^dreaming]（agent 把任務筆記寫回共享層、下個接手的 agent 從前人錯誤學）；同步補上 **Managed Agents Desktop app**（local + cloud session 統一面板）、**Auto Mode**[^auto-mode]（分類器自動篩破壞性動作 + prompt injection，省人工 permission）、**Automemory**[^automemory]（agent 跨 session 記住專案脈絡，不必手動更新 CLAUDE.md）、**built-in git worktrees**（每個 agent session 進獨立 worktree，平行不互卡）。舞台 demo 把 4 個專業 agent（aerodynamics / tire / power unit / driver safety）對虛構 F1 隊同時跑、再用一個 grader agent 評分，把「multi-agent 系統」第一次具象化到 indie 可抄的模板。**對台日 indie 直接價值**：(a) Multiagent Orchestration + Outcomes 等於「免費送的 agent harness」，過去要自己刻的 fan-out / consensus / grader 三件如今 API 內建，做「vertical workflow agent」的 indie 本週可省 2–4 週工程量；(b) Dreaming + Automemory 把 agent 從「單次工具」推到「跨日累積知識」這條敘事，賣「agent installed base 越用越值錢」的 vertical SaaS 新賣點

- **NEC 30K / Hitachi 290K 員工 Claude 全球部署同框公布——亞洲企業 AI 採購心智 24 小時內被改寫**：(1) **NEC**——日本首個 Anthropic 全球 partner，把 Claude 推到約 **30,000 名集團員工**、自詡日本最大 AI-native 工程組織；(2) **Hitachi**——把 Claude AI 部署到約 **290,000 名全球員工**業務流程強化「Lumada 3.0[^lumada3]」、同時 **6/5 加入 Project Glasswing[^glasswing] 拿 Mythos 5[^mythos5] access**（能源 / 交通 / 製造 / 金融關鍵基礎設施 cyberdefense）；兩家合計 **100,000 名 AI professional talent** 培訓計畫。對昨日「LG CNS × Anthropic」訊號**是同一條鏈的第三節**——韓 LG / 日 NEC / 日 Hitachi 串成 **Asia Big-3** 採購樣板。**對台日中型 SaaS（200–2,000 員）**：(a) **本週**寫白皮書「NEC / Hitachi / LG Claude 部署路徑解說」拚 6/11–6/17 Tokyo 同步社群放大；(b) 對自家既有「Claude × 亞洲 vertical」（製造、能源、金融、交通、合約、法務）案例做 1 頁簡報、6/11–6/14 LinkedIn / Threads 連發；(c) 對 5–50 人 dev team 做「Project Glasswing application coach」fixed-price $2K–$5K 服務（Hitachi 已示範路徑）

- **SpaceX 6/12 上市 $1.75T、含 xAI + Grok + Colossus + X 整合體**：6/11 收盤後定價、**$135/share、$75B 募資（史上最大）、Nasdaq:SPCX**；Starlink Q1 經營利潤 **$1.19B**、訂戶 **10.3M** 是現金引擎、Starship 燒錢；2026/2 起 xAI / Grok / Colossus / X 已歸入 SpaceX。**對 Anthropic / Claude 用戶的直接訊號**：**Colossus 1[^colossus1]（Memphis、220K Nvidia GPU、300MW）是 Anthropic 5/6 SF 宣布的旗艦 compute partner、6/30 discount rate 失效**——SpaceX 上市後 Colossus 1 的計價會被市場按 ROIC 重評，6/30 後 Claude.ai 端 latency / throughput / Pro/Max rate limit 是否同步放大成為直接觀察點。對 indie：(a) 6/12 上市第一週是「**SpaceX–Anthropic compute 故事**」內容週（LinkedIn / Threads / 中文社群供給少），(b) 賭「Anthropic 半年內無新 compute 來源」的 indie 6 月底前要把 fallback 路由（Bedrock、Google Cloud、Foundry）接好，**SpaceX 端任何 ESG / 地緣 / 監管事件都會回擊 Claude 上限**

- **SaaStr「AI agent 流失浪潮」框架 6/9–10 浮現——重排 indie pricing 策略**：核心命題：**prompt 可攜[^prompt-portability]，傳統 SaaS 二十年 stickiness 不適用**——買方 explicit 拒簽 > 1 年合約；**月費 < $50** 的 AI-native SaaS **GRR[^grr-nrr] 僅 23% / NRR 32%**（比 B2B / B2C SaaS 差 20 點），**月費 > $250** 才回到 **GRR 70% / NRR 85%**（追上 B2B SaaS 中位）；**$100M ARR 段若 GRR 跌到 82%、年流失 $18M、超過 SaaS 中位兩倍**。對台日 indie：(a) **本週**重審自家 AI SaaS 定價——低於 $50/月的方案 7 月底前盤點是否能 bundle 服務拉到 $250+，或直接走 outcome-based（Intercom Fin $0.99/resolved 範本）；(b) **賣 dev tool 顧問業務的 indie**：把「AI SaaS 定價躍遷 audit」做成 fixed-price $1.5K–$5K 服務（兩週交付：30 天客戶分群 + ARPU / GRR / NRR 算 + 定價方案 v2 + 上線 plan）；(c) 對自家 churn 流程加「prompt portability score」這條指標（用戶帶 prompt 走的容易度 / 反向：你的 workflow / data / integration 黏度）作為續約 risk 訊號

- **Fable 5 GA 第 2 天 dev sentiment 形成兩極輿論——niche 浮現**：(a) **正面**——Claude Code + Cowork 使用者一致「**Best model I've used for coding, by a wide margin**」（fewer prompts / better tool use / stronger self-verification / 高 autonomous session 信任度）；游戲開發 / vibecoding 有「一個 prompt 出整個遊戲」demo 在 Reddit r/ClaudeAI 連洗；(b) **負面**——對 security 主題的 refusal 過廣（含 legitimate defensive research）、「Fable 5 feels less like a model launch and more like a preview of AI inequality」（usage credit 限制與 Mythos 5 trusted-access 切割）；(c) **Databricks 6/9 同日把 Fable 5 上 Unity AI Gateway[^unity-gateway] 治理層**——對賣 EU / 受監管行業（金融、醫療、能源）的 indie 是現成 governance 載具。**對 indie 的 niche**：(a) 寫「Fable 5 refusal 對 defensive sec / red team / OSS sec 工作流影響地圖 + Opus 4.8 / Mythos 5 / 自架 OSS model 三段 fallback 路由」內容（6/11–6/22 mindshare 視窗）；(b) 賣「Fable 5 in Databricks Unity AI Gateway 部署 audit」固定 $3K–$8K 給中型 EU / 受監管客戶

## 🔄 昨日追蹤

### Code with Claude Tokyo 6/10 主場日 ✅ 🆕 揭曉

**confirmed 主舞台公布**：Multiagent Orchestration + Outcomes + Dreaming + Managed Agents Desktop + Auto Mode + Automemory + built-in worktrees（見 TL;DR 與下方產業表）；NEC × Hitachi 同框；Fable 5 / Mythos 5 6/9 已公開讓 Tokyo 焦點全押在「**agent 從工具走向系統**」這條敘事。**待觀察**：6/11 Extended（founder stories + Applied AI laptops-open workshops）今天仍開放線上登記，是日台 indie 拿 Applied AI engineer 直接 feedback 的最後合理窗口；YouTube 官方錄影約 7–10 天後在「Code w/ Claude Developer Conference」playlist 發。**對昨日「6/10 livestream 是否公布 Claude.ai latency / token throughput benchmark」追蹤**：**未公布**——意味 6/30 Colossus 1 discount rate 失效前若無第二場合（道理上得在 Anthropic.com / X 自家通路）公布數字，市場對「220K GPU → Claude 上限放大」敘事質疑會加速。**indie 應對**：把月底前批次任務（migration、KB rebuild、大 batch eval）排上跑、用 Fable 5 6/22 免費窗口完成。

### Anthropic Agent SDK 雙池計費 6/15 🔄 倒數 4 天

**狀態 unchanged**：6/15 起 `claude -p` / Agent SDK / Claude Code GH Actions / 3rd party agent app 改吃獨立 $20 / $100 / $200 月 credit、按 full API rate、無 rollover、無自動 fallback。**今日新訊**：Tokyo Multiagent Orchestration + Outcomes API 公布讓「自架 fan-out / grader / iterative harness」這條 indie 工程需求**部分被收編進雙池 credit**——對「Credit Overflow Watchdog」MVP 影響：(a) **正面**——客戶實際 SDK 用量比過去更難預估（Multiagent Orchestration 每個任務瞬間扇出 N 個 agent）、6/15 後第一週 credit 用完問題更刺激；(b) **競品壓力**——Anthropic 自家 6/15 dashboard 必上、Cloudflare AI Gateway 已 GA、Helicone / Langfuse 本月跟進。**今天 6/11 是 ship landing + Cloudflare AI Gateway 接入 PoC 倒數視窗**。

### Cursor Bugbot $1/PR usage-based 🔄 GA 第 4 天

**今日訊號**：早期 cost data 浮現—— Bugbot 平均 $1.00–$1.50/run、大 PR（5K 行）破 $4；同期 **GitHub Copilot 6/1 token-based 計費 dev 反彈深化**（部分 power user 月帳 $29 → $750、agentic 任務帳單跳 10×–50×）讓 Cursor 在 Reddit r/cursor、HN 引流穩贏；**Cognition 6/2 把 Windsurf 改名 Devin Desktop + Devin Local 取代 Cascade + 支援 Agent Client Protocol（ACP）[^acp]開放 Codex / Claude Agent / OpenCode 任意外掛 agent**——dev tool 三角戰再加一邊。對「dev tool agency / freelancer」內容週主題從「Bugbot $1/PR vs Greptile / CodeRabbit」**升級成「Fable 5 in Copilot vs Claude Code vs Cursor vs Devin Desktop 四方 cost-edge + ACP 跨 agent 路由」**。

### Anthropic Colossus 1 discount rate 6/30 失效 🔄 倒數 19 天 + SpaceX 6/12 上市新變數

**今日新訊**：SpaceX（含 Colossus 1）**6/12 上市 $1.75T**——上市後股價 / 季報壓力會把 Colossus 1 計價推向 market-clearing rate；6/30 前若 Anthropic 對 Pro/Max rate limit 沒「同步放大」公開承諾，「220K GPU → Claude 上限放大」敘事破口擴大。**對 indie 不變的工作**：把月底前批次任務（migration、KB rebuild）排上跑；用 Fable 5 6/22 前免費窗口完成。

### EU AI Act 8/2 GPAI enforcement 🔄 倒數 52 天 + Fable 5 30 天 retention 條款落地

**狀態 unchanged + Databricks Unity AI Gateway 6/9 落地**：對賣 EU / 受監管客戶 indie，**Fable 5 列 Covered Model[^covered-model]、30 天 prompt / output 保留、無 zero data retention**——Databricks 6/9 上 Fable 5 在 Unity AI Gateway 治理是現成 audit log + lineage 載具。**6/30 前 audit checklist + DPIA 範本**要把 Fable 5 retention 條款明寫進客戶合約附錄。

### Gemini 3.5 Pro 是否 6 月底前 GA 🔄 倒數 19 天

**狀態 unchanged**：Polymarket[^polymarket]「6/30 前發 Pro」**仍約 90%**、「6/19 前發」約 30%；Tokyo Anthropic 公布 Multiagent Orchestration 把競爭軸推向「agent harness」而非單純 model；Google 端 6/19 前發 Pro 機率持平。對 indie：賭「大 context window agent」的 indie 6/19 前待命；**今天就用 Fable 5 1M context + 128K output 跑對標 PoC**——三邊（Anthropic 1M / Google 預期 2M / OpenAI Codex 800K）dev tool 顧問內容週**本月最熱**。

## 📰 AI 產業動態

| 事件 | 影響 | 機會/威脅 | 來源 |
| ---- | ---- | --------- | ---- |
| **Code with Claude Tokyo 6/10 公布 Managed Agents 三件新功能 + Desktop / Auto Mode / Automemory / built-in worktrees**：Multiagent Orchestration（fan-out N 個專業 agent）、Outcomes（成功條件迭代）、Dreaming（agent 寫筆記給下一棒）；Managed Agents Desktop app（local + cloud 統一面板）、Auto Mode（classifier 篩破壞動作 + prompt injection）、Automemory（跨 session 記專案）、每 session 一個 git worktree；F1 demo 4 specialty agent + grader agent | 「agent 從工具走向系統」這條敘事第一次具象化——Anthropic 把過去 indie 要自己刻的 fan-out / consensus / grader / cross-session memory 收進 API；對「我家 agent harness 比 Anthropic 強」差異化的 indie 中介產品 60 天內被收編；reverse 端對「vertical workflow agent」的 indie 工程量直接砍 2–4 週 | 機會：(a) **本週**抄 F1 demo 模板做 vertical multi-agent PoC（合約審查 / 健身教練 / 醫療預約 / 補習班排程 / SOC 2 audit）；(b) 賣「Multiagent Orchestration + Outcomes + Dreaming 整合 audit」固定 $2K–$8K 給 5–50 人 SaaS；(c) 寫「Automemory + worktrees 跨日工作流模板」LinkedIn / Threads 連發 6/11–6/14；威脅：自架 LangGraph / CrewAI / Autogen harness 賣 SaaS 的 indie 中介產品被官方 API 直接收編 | [InfoQ — Code with Claude SF Managed Agents](https://www.infoq.com/news/2026/05/code-with-claude/) / [Blake Crosley — Tokyo Demo Notes](https://blakecrosley.com/blog/code-with-claude-sf-2026-recap) / [Every — Inside Anthropic 2026 Dev Conf](https://every.to/chain-of-thought/inside-anthropic-s-2026-developer-conference) / [Claude — Code w/ Claude SF recap](https://claude.com/blog/code-w-claude-sf-2026-sf) / [Boris Cherny X — worktree support](https://x.com/bcherny/status/2025007393290272904) |
| **NEC 30K / Hitachi 290K Claude 全球員工部署 + Hitachi 6/5 入 Project Glasswing 拿 Mythos 5**：NEC 日本首個 Anthropic 全球 partner、Claude 推 30K 員工、自詡日本最大 AI-native 工程組織；Hitachi 把 Claude 部署 290K 員工強化 Lumada 3.0、加入 Project Glasswing 對能源 / 交通 / 製造 / 金融 critical infrastructure cyberdefense；兩家合計 100K AI professional talent 培訓計畫；LG CNS（6/9）+ NEC + Hitachi 串 Asia Big-3 採購樣板 | 「Anthropic = 亞洲企業 AI 預設」框架在 Tokyo 主場日具象落地——對台日中型 SaaS（200–2,000 員）採購心智推一把；對「Claude × 亞洲 vertical」顧問業務直接 endorsement | 機會：(a) 本週發白皮書「NEC / Hitachi / LG Claude 部署路徑解說」拚 6/11–6/17 Tokyo 同步社群放大；(b) 做 LG / NEC / Hitachi 同集團週邊（汽車、家電、能源、化工、telecom、製造）「Claude vertical workflow」audit 固定 $5K–$15K；(c) 賣「Project Glasswing application coach」固定 $2K–$5K 給 OSS sec / 紅隊 freelancer；威脅：賭「Anthropic 不會做亞洲 enterprise」或「日本企業偏 Sakana / NEC cotomi」的 indie 兩個月內 GTM 過時 | [Hitachi Press — Strategic partnership Anthropic Lumada 3.0](https://www.hitachi.com/en/press/articles/2026/05/0519b/) / [TheNextWeb — Hitachi 290K Claude Lumada 3.0](https://thenextweb.com/news/hitachi-anthropic-lumada-3-claude-enterprise) / [NewsOnJapan — Hitachi Mythos cybersecurity](https://newsonjapan.com/article/149533.php) / [Nikkei Asia — NEC × Anthropic](https://asia.nikkei.com/business/technology/artificial-intelligence/nec-to-tie-up-with-anthropic-to-cultivate-corporate-ai-demand) / [ACN Newswire — Hitachi Glasswing](https://www.acnnewswire.com/press-release/english/107616/hitachi-joins-anthropic) |
| **SpaceX（含 xAI / Grok / Colossus / X）6/12 Nasdaq:SPCX 上市 $1.75T 估值 / $75B 募資（史上最大）**：$135/share、6/11 收盤後定價、6/12 開盤交易；上市後 15 個交易日內可能進 Nasdaq-100；2026/2 起 xAI 與 X 歸入 SpaceX；Starlink Q1 經營利潤 $1.19B、訂戶 10.3M；Anthropic 5/6 SF 宣布 Colossus 1（Memphis、220K Nvidia GPU、300MW）為旗艦 compute partner、6/30 discount rate 失效 | 「SpaceX 上市帶動 Colossus 1 重新計價」對 Claude.ai 用戶可見上限（rate limit、latency、throughput）構成下行壓力；對「Anthropic 半年內無新 compute 來源」框架是一次性 reality check；對賭「美國 AI 算力寡占」題材的 indie 半年內 narrative 需求暴增 | 機會：(a) **6/12 上市第一週**內容週主題「SpaceX–Anthropic compute 故事」LinkedIn / Threads / 中文社群（供給少、流量機會）；(b) 賣「多 vendor fallback 路由 audit」固定 $1.5K–$5K（Bedrock + Google Cloud + Foundry + 自架 OSS 3 段切）；(c) 寫「SpaceX IPO 後 Claude 上限可能變動的 indie SaaS 風險地圖」中文長文；威脅：賭「Anthropic 永遠用得起 Colossus 1」的 indie 季度成本估算可能被 7 月後 rate 變動洗 | [TradingKey — SpaceX SPCX IPO June 12](https://www.tradingkey.com/analysis/stocks/us-stocks/261924211-spacex-spcx-ipo-starlink-xai-nasdaq100-valuation-aerospace-etf-tradingkey) / [TheTechMarketer — SpaceX IPO $75B](https://thetechmarketer.com/spacex-ipo-2026-spcx-nasdaq-valuation-starlink/) / [WEEX — SpaceX IPO Prediction](https://www.weex.com/wiki/article/spacex-ipo-prediction-2026-date-135-price-175-trillion-valuation-and-what-spcx-could-do-next-tx6dzuavdmj2s2ihl9aig8xo) / [Financer — SpaceX IPO How to Buy](https://financer.com/invest/spacex-ipo/) / [ECIKS — SpaceX IPO Nasdaq-100 QQQ](https://eciks.org/7803-24831-qqq-spacex-ipo-nasdaq-100-june-2026) |
| **SaaStr 6/9 連發「AI agent 流失浪潮」框架 + ChartMogul 6 月「AI churn wave」報告**：核心命題 prompt 可攜、傳統 SaaS stickiness 不適用；買方 explicit 拒簽 > 1 年合約；**月費 < $50** AI-native SaaS GRR **23%** / NRR **32%**（比 B2B / B2C SaaS 差 20 點）、**月費 > $250** AI-native GRR **70%** / NRR **85%** 追上 B2B SaaS 中位；$100M ARR 若 GRR 跌 82%、年流失 $18M（SaaS 中位兩倍） | 「AI SaaS 一年定價週期 + 低月費難守」變共識——對「賣便宜走量」AI 月費 < $50 的 indie SaaS 半年內 churn 浪潮明確；reverse 端對「outcome-based」與「workflow 黏度」型產品價值上揚；對 dev tool 顧問業務「AI 定價躍遷 audit」需求暴增 | 機會：(a) **本週**重審自家月費 < $50 方案，盤點是否 bundle 拉到 $250+ 或走 outcome-based；(b) 賣「AI SaaS 定價躍遷 audit」固定 $1.5K–$5K（30 天分群 + ARPU / GRR / NRR + 定價 v2 + 上線 plan）；(c) 對 churn 流程加「prompt portability score」續約 risk 指標；威脅：靠「便宜 AI 月費 + LLM wrapper」差異化的 SaaS 6 個月內 churn 帶崩 ARR | [SaaStr — Wave of AI Agent Churn](https://www.saastr.com/the-wave-of-ai-agent-churn-to-come-prompts-are-portable/) / [SaaStr — 4 Levels Prompt Portability](https://www.saastr.com/the-4-levels-of-prompt-portability-why-some-ai-agents-will-hold-retention-and-most-wont/) / [SaaStr — Shorter Contracts AI Age](https://www.saastr.com/its-not-just-you-customers-are-asking-for-shorter-and-shorter-contracts-in-the-age-of-ai/) / [ChartMogul — AI churn wave report](https://chartmogul.com/reports/saas-retention-the-ai-churn-wave/) / [ever-help — 2026 SaaS Retention Benchmarks](https://www.ever-help.com/blog/saas-retention-rate-benchmarks) |
| **Fable 5 GA 第 2 天 dev sentiment 浮現 + Databricks Unity AI Gateway 6/9 同步上 Fable 5**：(a) **正面** Claude Code + Cowork 使用者「Best model I've used for coding by a wide margin」、game vibecoding「1 prompt 出整個遊戲」demo 洗 r/ClaudeAI；(b) **負面** sec 主題 refusal 過廣（含 legitimate defensive research）、「AI inequality preview」批評；(c) **Databricks 6/9 上 Fable 5 進 Unity AI Gateway**——governed deployment + lineage + access policy 對 EU / 受監管行業（金融、醫療、能源）現成載具 | 「Mythos-class 公開化 + 安全 refusal 副作用」第一次被 mass dev 印證——對「我用 Fable 5 跑全部 prompt」的 indie 部分 sec / red team / OSS workflow 有 refusal 副作用、需多 model fallback；對 EU / 受監管行業 SaaS Databricks Unity AI Gateway 是現成 audit 載具 | 機會：(a) 寫「Fable 5 refusal 對 defensive sec / red team / OSS sec 影響地圖 + Opus 4.8 / Mythos 5 / 自架 OSS 三段 fallback 路由」內容（6/11–6/22 視窗）；(b) 賣「Fable 5 in Databricks Unity AI Gateway 部署 audit」固定 $3K–$8K 給中型 EU / 受監管客戶；(c) 「game vibecoding 1 prompt 出整個遊戲」對台日 indie game dev 是 LinkedIn / Threads 引流梗；威脅：賭「Fable 5 沒 refusal 副作用、可全任務用」的 SaaS 客戶投訴會擴大 | [Anthropic — Fable 5 + Mythos 5](https://www.anthropic.com/news/claude-fable-5-mythos-5) / [SearchEngineJournal — Feels Next Level](https://www.searchenginejournal.com/claude-fable-5-feels-next-level/578538/) / [NerdsChalk — Fable 5 vs the World](https://nerdschalk.com/claude-fable-5-vs-the-world-benchmarks-safety-rails-and-what-users-really-think/) / [Databricks — Fable 5 Unity AI Gateway](https://www.databricks.com/blog/claude-fable-5-now-available-databricks-fully-governed-through-unity-ai-gateway) / [Interconnects — Fable 5 safety fables](https://www.interconnects.ai/p/claude-fable-5-and-new-ai-safety) |

## 🛠 新興 AI 工具

| 工具 | 類別 | 用途 | 定價 | 差異點 | 採用建議 |
| ---- | ---- | ---- | ---- | ------ | -------- |
| Claude Managed Agents — Multiagent Orchestration + Outcomes + Dreaming（GA） | agent harness API | fan-out N 個專業 agent / 成功條件迭代 / cross-agent 筆記共享 | 含 Claude API + Claude Enterprise | 第一個「agent harness 三件式」原廠 API，省自架 LangGraph / CrewAI / Autogen | indie：本週抄 F1 demo 做 vertical multi-agent PoC；dev tool agency 加「三件式整合 audit」固定 $2K–$8K |
| Claude Managed Agents Desktop app（GA） | local + cloud session 統一面板 | 跨 session / 跨機器查看 / 接管 / 終止 / replay；plan / PR / browser / terminal / deployment / workflow state 共享 canvas | 含 Claude Pro / Max / Team / Enterprise | 對標 GitHub Copilot Desktop App 6/8 TP；Anthropic 端第一個 desktop agent OS | 跑多 agent 並行 / heavy CI 的 indie / SMB dev team 本週裝、跑「Claude Desktop vs Copilot Desktop」對比；做 dev tool agency 內容週題材 |
| Claude Auto Mode（permission classifier） | agent safety + 自動化 | classifier 自動篩破壞性動作 + prompt injection，省人工 approve 每個 tool call | 含 Claude API + Enterprise | 第一個原廠 permission classifier；對「24/7 background automation」剛需 | 跑 background / cron / GH Actions agent 的 indie 本週開 Auto Mode；對「企業 governance」audit 業務直接加分 |
| Claude Automemory + built-in worktrees | 跨 session 知識 + 並行隔離 | agent 自動寫筆記跨 session 累積；每 session 一個 git worktree、檔案不互卡 | 含 Claude Code 訂閱 | 第一個原廠「跨 session memory + 並行 worktree」雙特性；對 OSS maintainer / agency 剛需 | 跑多 task 並行的 indie / OSS maintainer 本週升 Claude Code 用上；做「Automemory + worktree 工作流模板」LinkedIn 連發引流 |
| Devin Desktop（前 Windsurf）+ Agent Client Protocol（ACP） | open agent IDE | 既有 Windsurf 用戶 over-the-air 收編；Devin Local 取代 Cascade（Cascade 7/1 EOL，省 30% token + subagents + Rust 重寫）；ACP 開放 Codex / Claude Agent / OpenCode 任意 agent 進駐 | 訂閱不變 | 第一個明確走「open agent protocol」的 IDE；對「我家 IDE 綁 1 agent」差異化的 Cursor / Cline 反向壓力 | 跑 Windsurf 的 indie：6/30 前評估 Devin Local 與 ACP 是否符合自家 stack；做 dev tool 顧問加「ACP 跨 agent 路由模板」服務 |
| MAI-Code-1-Flash（Microsoft Build 2026） | low-cost coding model | 5B param、256K context；GitHub Copilot 內 Free / Pro / Pro+ / Max 通用；SWE-Bench Pro[^swe-bench-pro] 51.2% 對比 Claude Haiku 4.5 35.2%（vendor-reported） | 含 Copilot 訂閱 / GitHub AI Credits | 第一個 Microsoft 自家 end-to-end 訓練（無 OpenAI / Anthropic distill）的 Copilot 內建 coding model；「Haiku-class」競品 | 跑高量小 PR / 小任務的 indie 6/15 雙池前評估切 MAI-Code-1-Flash 省成本；做「Haiku 4.5 vs MAI-Code-1-Flash 30 天對比」內容週題材 |

## 💡 SaaS 點子

### 點子 1：「Vertical Multi-Agent Orchestration」模板包 + audit 顧問（Tokyo 6/10 公布後 14 天視窗）🆕

- 痛點來源：6/10 Tokyo Anthropic 公布 Multiagent Orchestration + Outcomes + Dreaming 三件式 API；F1 demo 4 specialty agent + grader 是可抄模板；但多數台日 indie 不熟「怎麼把自家 vertical 拆 4–6 個專業 agent + grader」設計、現有官方 docs 偏 API 範例缺商業 playbook
- 目標客群：做 vertical SaaS（合約審查、健身教練、診所排程、補習班、餐廳訂位、SOC 2 audit、HR onboarding、法務、會計）的 5–50 人團隊；台日 indie / 一人公司
- 技術複雜度：2/5（Claude API + Multiagent Orchestration + Outcomes + Dreaming + 自家 client codebase 適配）
- 預估 MRR：$3K–$10K
- 競品弱點：Anthropic 文件只給 API 範例不給 vertical playbook；LangGraph / CrewAI / Autogen 模板偏通用、不熟 Outcomes + Dreaming 新 API；台日中型 SaaS 顧問對「multi-agent vertical 拆解」空白
- 切入建議：(a) **6/11–6/14**ship landing「Vertical Multi-Agent 30 個模板包 + Tokyo F1 demo 三件式解說」（嵌 typeform + Stripe；訂閱用戶免費試用、付費版 $99 / $299 lifetime）；(b) fixed-price audit $2K–$8K（30 天：選 1–3 條 client vertical workflow、拆 4–6 agent + grader、跑 PoC、產 ROI report）；(c) 首 5 家拍 case study + Anthropic Partner badge + Tokyo Extended 6/11 同框

### 點子 2：「AI SaaS 定價躍遷 audit」服務（SaaStr churn 框架後直接視窗）🆕

- 痛點來源：SaaStr 6/9 + ChartMogul 6 月報告把「月費 < $50 AI-native SaaS GRR 23%」打成共識；買方 explicit 拒簽 > 1 年合約；多數 5–50 人 SaaS 沒人系統重估定價結構（seat / 月費 / outcome / hybrid）、不熟 prompt portability score 設計、續約 risk 訊號空白
- 目標客群：跑月費 < $250 AI SaaS 的 5–50 人團隊；做 dev tool 顧問業務的 freelancer；對 churn 焦慮的 vertical SaaS 創辦人（合約、客服、HR、教育、醫療）
- 技術複雜度：2/5（純 audit + 試算工具 + Stripe metered billing PoC + churn risk score 設計）
- 預估 MRR：$3K–$12K
- 競品弱點：SaaStr / ChartMogul 報告偏觀念、缺 fixed-price deliverable；現有 SaaS 顧問偏傳統 seat 定價、不熟 outcome-based 設計；台日 SaaS pricing 顧問空白
- 切入建議：(a) **本週**ship landing「AI SaaS 定價躍遷 audit 30 天 deliverable」+ 試算工具（月費 < $50 / $50–$250 / > $250 三段 GRR / NRR 對比 calculator）；(b) fixed-price audit $1.5K–$5K（30 天：用戶分群 + ARPU / GRR / NRR + outcome-based 定價 v2 + Stripe metered billing 上線 plan）；(c) 對 churn 高 SaaS 加「prompt portability score 模板 + 續約 risk 訊號表」續約 retainer $499–$999/月

### 點子 3：「Fable 5 refusal 對 defensive sec / red team 影響地圖 + 多 model fallback 路由」內容週 + 部署 audit 🆕

- 痛點來源：Fable 5 GA 第 2 天 dev sentiment 浮現對 sec / red team 主題 refusal 過廣（含 legitimate defensive research）；同期 Databricks 6/9 上 Fable 5 進 Unity AI Gateway 治理層；多數 indie / 中小 SaaS 沒人系統盤點「哪些 prompt 會被 refuse、什麼時候 fallback Opus 4.8 / Mythos 5 / 自架 OSS」、現有 LLM router 模板偏 cost / latency 不偏 refusal pattern
- 目標客群：做 OSS sec / penetration test / 紅隊 / SOC 2 / DPIA 的 indie / freelancer；做 dev tool agency / EU / 受監管行業 SaaS 顧問業務的台日 indie
- 技術複雜度：3/5（Claude API + Opus 4.8 + Mythos 5 trusted access 申請 + 自架 OSS model fallback + Unity AI Gateway 整合 + refusal pattern map）
- 預估 MRR：$5K–$15K
- 競品弱點：Anthropic / Databricks 文件只給 governance API 不給 refusal pattern；LLM router（OpenRouter / Portkey）偏 cost、不偏 refusal 路由；台日 sec consulting 對 Fable 5 refusal 副作用不熟
- 切入建議：(a) **6/11–6/22**ship「Fable 5 refusal 30 個 sec / red team / OSS 場景 + 三段 fallback 模板包」LinkedIn / Threads / Reddit r/ClaudeAI / r/netsec 連載；(b) fixed-price audit $3K–$8K（30 天：選 1–2 條 client sec workflow、跑 Fable 5 refusal 測試 + Opus 4.8 / Mythos 5 / 自架 fallback PoC、產 routing matrix + Unity AI Gateway 治理建議）；(c) 對 EU / 受監管行業 indie 加 retainer $599–$1,499/月持續 refusal pattern 更新 + Mythos 5 Project Glasswing application coach

## 🧰 工具堆疊更新

- **跑 Claude Pro / Max / Team 訂閱**：**今天起 11 天**（6/22 前免費）把自家 codebase migration / KB rebuild / refactor / deep PR review / multi-agent PoC 跑滿 Fable 5；同步用 Tokyo 公布的 Multiagent Orchestration + Outcomes 重寫自家 vertical workflow
- **跑 24/7 background automation（claude -p / Agent SDK / Claude Code GH Actions）**：**今天起 4 天**（6/15 雙池計費前）把 Cloudflare AI Gateway spend limits + Auto Mode（classifier）兩條都接上；沒收到 credit claim 信主動到 [console.anthropic.com](https://console.anthropic.com) 領
- **做 dev tool agency / freelancer**：6/11–6/22 內容週主題從「Bugbot $1/PR vs Greptile / CodeRabbit」**升級到「Fable 5 in Copilot vs Claude Code vs Cursor vs Devin Desktop 四方 cost-edge + ACP 跨 agent 路由」**；做 Tokyo F1 demo 模板包是新 niche
- **跑生產 Claude Code 自動化 / agency 服務**：本週升級拿 built-in worktrees + Automemory；做「Automemory + worktree 跨日工作流模板」LinkedIn 連發引流；對企業 governance 加 Auto Mode + safe-mode 雙保險賣點
- **賣中型企業 vertical SaaS（200–2,000 員、含 EU / 受監管行業）**：把「Claude Managed Agents self-hosted sandbox + MCP tunnels + Glasswing badge + Databricks Unity AI Gateway 治理」四件包成 fixed-price audit $5K–$15K；6/11 Tokyo Extended 後 48 小時內發給目標 5–10 家客戶
- **做 OSS sec / 紅隊 / penetration test**：申請 Project Glasswing partner（Hitachi 6/5 已示範路徑）+ 把「Glasswing application coach + Fable 5 refusal fallback routing audit」打包固定 $2K–$5K
- **跑月費 < $250 AI SaaS**：**本週**用 SaaStr / ChartMogul 框架重審定價——盤點是否 bundle 服務拉到 $250+ 或直接走 outcome-based；對 churn 流程加「prompt portability score」續約 risk 指標
- **做 vertical iOS / macOS app**：續行昨日 Foundation Models LanguageModel 協定 + Claude Swift package 路線；本週把 multi-agent PoC（Claude Multiagent Orchestration + on-device routing）整合進去
- **跑高量小 PR / 小任務**：6/15 雙池前評估切 MAI-Code-1-Flash（GitHub Copilot 內建、5B param、256K context、Haiku 4.5 級 cost）省成本

## ⚡ 今日行動建議

- [ ] **15 分鐘**到 Claude Console 啟用 Managed Agents Multiagent Orchestration + Outcomes 測試；跑 1 個自家 vertical workflow 拆 3 個 specialty agent + 1 個 grader（抄 Tokyo F1 demo 結構）
- [ ] **5 分鐘**Claude Code 升級到拿 built-in worktrees + Automemory + Auto Mode 的最新版；同步開 Auto Mode 跑 24 小時記錄 permission classifier 命中率
- [ ] **30 分鐘**登記 6/11 Tokyo Extended（founder stories + Applied AI laptops-open workshops）線上場；把現有「Claude × {你的 vertical}」案例壓成 1 頁簡報、6/11 收場後 48 小時內發給目標 5–10 家客戶
- [ ] **60 分鐘**ship「Vertical Multi-Agent 模板包」landing（簡單 typeform + Stripe）+ 配 LinkedIn / Threads 第一篇（6/12 早 8 點台北時間發、搭 SpaceX 上市流量週期）
- [ ] **60 分鐘**寫「Fable 5 refusal 對 defensive sec / red team 影響地圖 + 三段 fallback 路由」LinkedIn / Threads 第一篇（6/13 早 8 點台北時間發）；同步開 Mythos 5 / Project Glasswing 申請（Hitachi 6/5 已示範）
- [ ] **30 分鐘**用 SaaStr / ChartMogul 框架重審自家 AI SaaS 定價：列出月費 < $50 方案的客戶數 × ARPU × GRR；估算若 bundle 拉到 $250+ 或走 outcome-based 預期 GRR / NRR 變化
- [ ] **120 分鐘**跑 background automation 的 indie：把 Cloudflare AI Gateway spend limits + Auto Mode 兩條都接上**今天 ship**——6/15 雙池前剩 4 天視窗
- [ ] 賣 EU / 受監管客戶的 indie：**45 分鐘**評估 Databricks Unity AI Gateway 上 Fable 5 是否符合自家 governance 路徑；把「30 天 retention + lineage + access policy」條款明寫合約附錄

## ⏳ 待觀察

- 6/12 SpaceX 上市首日股價 / 量能與 Colossus 1 計價傳聞：若 SPCX 開盤拉到 $1.85T+，「Anthropic 6/30 後 compute rate 上升」敘事會在 6/13–6/19 一週放大；reverse 端若破發、Colossus 1 重新議價反向有利 Anthropic
- 6/15 雙池計費上線後第一週 indie「credit 用完直接斷線」公開抱怨潮 + Multiagent Orchestration 用量瞬間爆增：若 Anthropic 6/16–6/22 推自動 fallback 或調整額度，「Credit Overflow Watchdog」niche 收窄速度加快
- 6/19 前 Gemini 3.5 Pro 是否 GA：Polymarket 仍約 90% / 30%；Tokyo Multiagent Orchestration 公布把競爭軸推向 agent harness，Google 端是否同期端 agent 系列回擊
- Fable 5 6/22 後 Pro / Max / Team 改吃 credit 的實際每月配額換算公式 + Multiagent Orchestration 是否影響 credit 計帳邏輯
- Mythos 5 Project Glasswing partner application 是否 6/15 後對 SaaS / vertical sec startup 開放（Hitachi 已示範企業路徑，中小 indie 申請門檻仍未知）
- 6/11–6/17 Tokyo NEC / Hitachi 同集團週邊（汽車、家電、能源、化工、telecom、製造）是否同框宣布 Claude vertical 採購 PoC
- SaaStr / ChartMogul churn wave 框架是否被 a16z / Bessemer / OpenView SaaS benchmark 報告納入：若 7 月底前納入，「AI SaaS 定價躍遷 audit」服務需求暴增；reverse 端若 a16z 提出反論（如 distribution + workflow 黏度 > pricing），框架短期降溫
- Devin Desktop ACP 6/30 前是否成業界第二開放 protocol（首位 OpenAI ChatGPT app slot）+ Codex / Claude Agent / OpenCode 是否官方支援

[^multi-orch]: Multiagent Orchestration 是 Anthropic 於 2026 年 5/6 SF Code with Claude 預告、6/10 Tokyo 主場日 GA 的 Managed Agents 子功能，讓 Claude 把一個任務同時 fan-out 到多個專業子 agent 平行推進，並由協調層回收結果；2026/6 對外宣稱可在單一任務下穩定協調至 1,000 顆 subagent，並在 F1 demo 中以 4 個專業 agent + 1 個 grader agent 結構公開示範。
[^outcomes]: Outcomes 是 Anthropic Managed Agents 在 2026/6/10 Tokyo 公布的新 API，讓開發者先以自然語言或結構化方式定義「成功條件」（測試通過、效能門檻、輸出符合 schema 等），agent 會自迭代多輪 plan → execute → evaluate 直到滿足條件再收工；與傳統「一次 prompt 一次回應」相比更接近 evals-driven 開發模式。
[^dreaming]: Dreaming 是 Claude Managed Agents 的跨 session 記憶機制，agent 在任務尾段把「這次學到什麼、踩到哪些坑」寫成結構化筆記存到專案共享層，下一個接手同 codebase 的 agent 啟動時自動載入，避免重蹈覆轍；2026/5/6 SF 首次公布、6/10 Tokyo 主場日對外開放更大規模試用。
[^auto-mode]: Auto Mode 是 Anthropic 於 2026/6/10 Tokyo 公布的 Claude Code 安全自動化機制，使用一顆專門訓練的分類器在每次工具呼叫前評估是否屬於破壞性動作（rm、drop、刷遠端等）或 prompt injection 跡象，安全則自動 approve、可疑才彈出人工 prompt，目標把 24/7 background agent 的人工 permission 噪音壓下又不放掉風險。
[^automemory]: Automemory 是 Claude Code 2026 年新引入的「自動專案記憶」功能，agent 在任務結束時把對該 codebase 的學習（架構、慣例、踩雷處）寫回 `.claude/memory.md` 之類的隱藏記憶區，下一個 session 啟動時自動載入，不需要使用者手動編輯 `CLAUDE.md`；與 Dreaming 的差別在於 Automemory 偏使用者本機 / 專案範圍，Dreaming 偏 agent 間共享。
[^glasswing]: Project Glasswing 是 Anthropic 對能源、交通、製造、金融等關鍵基礎設施提供 cyberdefense 取向的合作計畫，獲准的合作夥伴可拿到 Mythos-class 模型 trusted access、聯合紅隊測試與專屬 governance 條款；2026/6/5 由 Hitachi 公開加入，是日本首批入列的全球 partner。
[^mythos5]: Mythos 5 是 Anthropic 2026/6/9 與 Fable 5 同日公布的「trusted access」模型分支，限定通過 KYC / 合規審查的 enterprise 客戶（含 Project Glasswing 成員）才能呼叫；定位偏關鍵基礎設施、防禦性 sec workflow，預設較少 refusal、但要求更嚴的部署 governance。
[^covered-model]: Covered Model 是歐盟 AI Act 8/2 GPAI 條款下的高風險通用模型分類，被列入後供應商需揭露訓練資料概要、能源消耗、紅隊測試結果，並對下游 deployer 提供 transparency report 與 incident response 流程；Fable 5 被歸入此類，伴隨 30 天 prompt / output retention 條款。
[^acp]: Agent Client Protocol（ACP）是 Cognition 2026/6/2 隨 Devin Desktop 改名一起釋出的開放協定，定義 IDE / 編輯器與 agent runtime 之間的訊息格式，讓 Codex、Claude Agent、OpenCode 等任何符合規範的 agent 都可以掛進同一個 IDE，是業界首個明確走「IDE 與 agent 解耦」路線的協定。
[^polymarket]: Polymarket 是建立在 Polygon 鏈上的預測市場平台，用戶以 USDC 對未來事件（選舉、模型發布、上市時程等）下注，市場價格被普遍視為事件發生機率的即時 proxy；AI 圈常引用其「某模型在某日期前 GA」合約價作為市場共識指標。
[^prompt-portability]: Prompt portability 指使用者把自家累積的 prompt、agent 設定、workflow 從一家 AI 供應商搬到另一家的容易程度；SaaStr 2026/6 提出此概念點出傳統 SaaS 靠資料黏度的 stickiness 在 AI 月費型產品不成立——prompt 是純文字、買方可在週末搬家，導致 GRR / NRR 大幅低於同價位傳統 SaaS。
[^lumada3]: Lumada 3.0 是 Hitachi 將集團跨製造、能源、交通、金融的數位服務平台升級到「AI-native」版本的代號，把資料整合、IoT、流程編排與生成式 AI 模型呼叫包成統一介面對外輸出；2026 年與 Anthropic 簽署策略合作後，Claude 成為 Lumada 3.0 預設的對話與 agent 推理層之一。
[^colossus1]: Colossus 1 是 xAI 在美國 Memphis 建置的超大型 GPU 叢集，據公開資料約 220,000 顆 Nvidia GPU、總功耗約 300MW，被視為當期全球規模最大的單一 AI 訓練 / 推理叢集之一；Anthropic 於 2026/5/6 SF Code with Claude 公布以折扣 rate 把它列為 Claude 旗艦 compute 之一，原合約折扣於 2026/6/30 失效。
[^unity-gateway]: Unity AI Gateway 是 Databricks 在 Unity Catalog 之上提供的 AI 模型治理層，把外部 LLM 呼叫納入同一套權限、稽核、用量、PII 過濾與 lineage 追蹤體系；2026/6/9 起 Fable 5 可透過 Unity AI Gateway 在 EU / 受監管行業客戶端以治理過的方式部署，被視為 Anthropic 模型進入合規重的金融 / 醫療 / 能源場景的標準路徑。
[^swe-bench-pro]: SWE-Bench Pro 是 SWE-Bench 系列在 2026 年推出的「專業版」評測，題目來自實際 OSS 倉庫的真實 issue + PR、需要 agent 規劃多檔修改並通過原專案測試；相比原版 SWE-Bench 題量更大、覆蓋語言更廣、噪音更低，被多家廠商用作 coding agent 的對外比較基準。
[^grr-nrr]: GRR（Gross Revenue Retention）與 NRR（Net Revenue Retention）是 SaaS 業界衡量續約品質的兩項常用指標：GRR 只看既有客戶這一年沒流失的訂閱金額比例，不計加購；NRR 同時把擴張收入算進去。傳統 B2B SaaS 中位約 GRR 90% / NRR 110%，2026 年 SaaStr 報告指出低價 AI-native SaaS 兩者顯著低於此基準。

## 📚 引用來源

1. [Anthropic — Claude Fable 5 + Mythos 5](https://www.anthropic.com/news/claude-fable-5-mythos-5) — 2026-06-09
2. [InfoQ — Code with Claude Managed Agents](https://www.infoq.com/news/2026/05/code-with-claude/) — 2026-05
3. [Blake Crosley — Code with Claude SF Recap](https://blakecrosley.com/blog/code-with-claude-sf-2026-recap) — 2026-05
4. [Every — Inside Anthropic 2026 Developer Conference](https://every.to/chain-of-thought/inside-anthropic-s-2026-developer-conference) — 2026-05
5. [Claude Blog — Code w/ Claude SF Recap](https://claude.com/blog/code-w-claude-sf-2026-sf) — 2026-05
6. [Chris Ebert — Notes from Code with Claude 2026](https://chrisebert.net/notes-from-code-with-claude-2026/) — 2026
7. [Anthropic — Code with Claude Tokyo](https://claude.com/code-with-claude/tokyo) — 2026-06
8. [Anthropic — Code with Claude Tokyo Extended](https://claude.com/code-with-claude/tokyo-extended) — 2026-06
9. [Hitachi Press — Strategic partnership with Anthropic Lumada 3.0](https://www.hitachi.com/en/press/articles/2026/05/0519b/) — 2026-05-19
10. [TheNextWeb — Hitachi Anthropic 290K Claude](https://thenextweb.com/news/hitachi-anthropic-lumada-3-claude-enterprise) — 2026-05
11. [NewsOnJapan — Hitachi Mythos cybersecurity](https://newsonjapan.com/article/149533.php) — 2026-06-05
12. [ACN Newswire — Hitachi joins Project Glasswing](https://www.acnnewswire.com/press-release/english/107616/hitachi-joins-anthropic) — 2026-06-05
13. [Nikkei Asia — NEC × Anthropic](https://asia.nikkei.com/business/technology/artificial-intelligence/nec-to-tie-up-with-anthropic-to-cultivate-corporate-ai-demand) — 2026-04
14. [TradingKey — SpaceX SPCX IPO June 12](https://www.tradingkey.com/analysis/stocks/us-stocks/261924211-spacex-spcx-ipo-starlink-xai-nasdaq100-valuation-aerospace-etf-tradingkey) — 2026-06
15. [TheTechMarketer — SpaceX IPO $1.75T](https://thetechmarketer.com/spacex-ipo-2026-spcx-nasdaq-valuation-starlink/) — 2026-06
16. [WEEX — SpaceX IPO Prediction](https://www.weex.com/wiki/article/spacex-ipo-prediction-2026-date-135-price-175-trillion-valuation-and-what-spcx-could-do-next-tx6dzuavdmj2s2ihl9aig8xo) — 2026-06
17. [Financer — SpaceX IPO How to Buy](https://financer.com/invest/spacex-ipo/) — 2026-06
18. [ECIKS — SpaceX IPO Nasdaq-100 QQQ](https://eciks.org/7803-24831-qqq-spacex-ipo-nasdaq-100-june-2026) — 2026-06
19. [SaaStr — Wave of AI Agent Churn](https://www.saastr.com/the-wave-of-ai-agent-churn-to-come-prompts-are-portable/) — 2026-06
20. [SaaStr — 4 Levels of Prompt Portability](https://www.saastr.com/the-4-levels-of-prompt-portability-why-some-ai-agents-will-hold-retention-and-most-wont/) — 2026-06
21. [SaaStr — Shorter Contracts AI Age](https://www.saastr.com/its-not-just-you-customers-are-asking-for-shorter-and-shorter-contracts-in-the-age-of-ai/) — 2026-06
22. [ChartMogul — SaaS Retention AI Churn Wave](https://chartmogul.com/reports/saas-retention-the-ai-churn-wave/) — 2026-06
23. [ever-help — 2026 SaaS Retention Benchmarks](https://www.ever-help.com/blog/saas-retention-rate-benchmarks) — 2026
24. [SearchEngineJournal — Fable 5 Feels Next Level](https://www.searchenginejournal.com/claude-fable-5-feels-next-level/578538/) — 2026-06-10
25. [NerdsChalk — Fable 5 vs the World](https://nerdschalk.com/claude-fable-5-vs-the-world-benchmarks-safety-rails-and-what-users-really-think/) — 2026-06-10
26. [Databricks — Fable 5 on Unity AI Gateway](https://www.databricks.com/blog/claude-fable-5-now-available-databricks-fully-governed-through-unity-ai-gateway) — 2026-06-09
27. [Interconnects — Fable 5 and new AI safety fables](https://www.interconnects.ai/p/claude-fable-5-and-new-ai-safety) — 2026-06-09
28. [TechTimes — MAI-Code-1-Flash beats Haiku 4.5](https://www.techtimes.com/articles/318043/20260609/microsofts-first-house-coding-model-beats-claude-haiku-45-loosens-its-grip-openai.htm) — 2026-06-09
29. [CNBC — Microsoft unveils new AI models](https://www.cnbc.com/2026/06/02/microsoft-unveils-new-ai-models-lessen-reliance-on-openai-lower-costs.html) — 2026-06-02
30. [Devin Blog — Windsurf is now Devin Desktop](https://devin.ai/blog/windsurf-is-now-devin-desktop/) — 2026-06-02
31. [DigitalApplied — Windsurf becomes Devin Desktop](https://www.digitalapplied.com/blog/windsurf-becomes-devin-desktop-ide-migration-2026) — 2026-06-02
32. [TechTimes — GitHub Copilot Pricing Backlash 10x-50x](https://www.techtimes.com/articles/317536/20260601/github-copilot-pricing-change-drives-backlash-agentic-bills-jump-10x-50x-power-users.htm) — 2026-06-01
33. [Anthropic — Confidential draft S-1 to SEC](https://www.anthropic.com/news/confidential-draft-s1-sec) — 2026-06-01
34. [TechCrunch — Anthropic files to go public](https://techcrunch.com/2026/06/01/anthropic-files-to-go-public/) — 2026-06-01
35. [Boris Cherny X — built-in worktree support](https://x.com/bcherny/status/2025007393290272904) — 2026
