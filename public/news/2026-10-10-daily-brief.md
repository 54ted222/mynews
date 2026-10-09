---
title: 每日創業情報 — 2026-10-10
date: 2026-10-10
tags: 創業情報, AI 產業, SaaS, 台灣
summary: 週六國慶日 + Q4 第 10 日 + 中秋 T+15 單週收尾 + 🔄 重大更正 Haiku 5.5 實為 10/7 已落地 T+3 本週內可試用（先前連日 T+15/+16/+17「未落地」判讀錯誤）+ SWE-2 免費最後 1 日 T-0 pricing cliff + Codex SDK/Slack T+11 第 1 完整週收尾 + iPhone Duo Taiwan Mobile 預購 T-6 單機 10/16 20:00 + TSMC Q3 財報 T-5 Quiet Period Day 6 + Agent Builder 11/30 T+51 + Evals 10/31 T+21 + TiBOOST 入圍名單 T+5 未公告 19 國逾百件 + Anthropic IPO 10 月目標 2T valuation + Google Antigravity + 新創總會 14 項建言 lobby，國慶 Saturday 本週蓋章日為下週 pitch 定稿預備。
keywords: Anthropic Claude Haiku 5.5 released October 7 2026 T+3 price 75 percent lower effort control, Cognition Devin SWE-2 free trial last day October 10 2026 T-0 pricing cliff Fusion Pro Max Teams, TSMC Q3 2026 earnings October 15 T-5 Quiet Period Day 6 revenue 44.6 45.8 billion gross margin 65 67, OpenAI Codex SDK TypeScript Slack @Codex October 10 2026 T+11 first full week closeout, iPhone Duo Taiwan Mobile myfone preorder October 16 2026 8pm T-6 single device 74900, OpenAI Agent Builder deprecation November 30 2026 T+51 Evals read only October 31 2026 T+21 ChatKit Agents SDK migration, Anthropic IPO October 2026 2 trillion valuation Financial Times Series H 965B, Google Gemini 3 Antigravity agentic framework developer platform IDE comparison, Cursor Composer 3 Vega unconfirmed October 2026 Composer 2.5 standard 0.50 2.50 Fast 3 15, TiBOOST 創新大步 徵件截止 10月5日 T+5 入圍名單 19國 逾百件 11月10日 決賽, 新創總會 創新創業白皮書 2026 14項建言 新創一法 大企業投資稅抵 邱銘乾, Taiwan 國慶日 2026 10月10日 Saturday 國慶焰火 台東 國慶晚會 新北 板橋, 數發部 百億 AI 新創 投資 2026 7500萬 核定 6案 林宜敬 林俊秀, 經濟部 中小企 AI 導入 2058 家 91% 競爭力輔導團 500萬 4000萬 補助, Vercel AI SDK v7 release June 2026 ToolLoopAgent needsApproval migration v6 codemod, Replit Agent 3 Pro 100 pooled credits 15 builders volume discount effort based retention
---

# 每日創業情報 — 2026-10-10

## 🎯 今日 TL;DR

- **週六國慶日 + Q4 第 10 日 + 中秋 T+15 本週收尾日 + 🔄 Haiku 5.5 重大更正 T+3 已落地（非 T+17 未落地）+ SWE-2 免費最後 1 日 T-0 pricing cliff + Codex SDK T+11 + iPhone Duo T-6 預購 + TSMC Q3 T-5 Quiet Period Day 6 + Agent Builder 11/30 T+51 + Evals 10/31 T+21** — 10 軸疊加 = 國慶 Saturday 「本週收尾蓋章 + 下週 pitch 定稿預備」雙 trigger
- **🔄 Haiku 5.5 判讀修正**：先前連日「T+15/+16/+17 未落地」為錯誤 — 多家外媒 (aiweekly、letsdatascience、aicatchup、newsbytesapp) 證實 **2026-10-07 已釋出**，模型 ID `claude-haiku-5-5` 於 AWS/GCP/Azure 皆已上架；輸入 $0.10/M、輸出 $0.50/M（≤100K token），平均比 Haiku 4.5 便宜約 75%，並首度支援 **effort levels**[^effort-levels]（可調推理深度換 token 用量）；OSWorld 2.1[^osworld] 離線子集 72.4%（Haiku 4.5: 15.7%）。對一人 SaaS 的實務意義：**今日起 shadow eval Haiku 5.5 at summarization + subagent 角色，判斷能否取代現有 Opus/Sonnet 的輕量子任務**
- **🔄 SWE-2 pricing cliff 到期日**：Cognition 一個月免費試用期於今日（10/10）結束，Devin Pro / Max / Teams 訂閱者才能繼續用；標準 Devin 月費 Pro $20、Max $200、Teams 基礎 $80 + $40/seat。**今日最後決策日**：昨日起跑的 shadow eval 若未結案，今日務必截止 — 錯過就要在不知道後續 per-token 單價的情況下自行續訂

## 🔄 昨日追蹤

- **🔄 Haiku 5.5 T+15 → 修正為 T+3 已落地（10/7）**：先前連日錯誤判讀「DataLearner 估 10/22 落地」造成的 propagate — 自今日 brief 起，Haiku 5.5 回歸「已釋出」狀態，進入「shadow eval 期」而非「等待期」
- **🔄 SWE-2 免費期 T-1 → T-0**：昨日為最後 1 天，今日 10/10 為最後一日
- **🔄 Codex SDK/Slack T+10 → T+11**：本週（10/5 開工後第 2 個完整工作週）為第 1 完整週深度試用的收尾日，但國慶 Saturday 不算工作日，實質收尾為週一（10/12）
- **🔄 iPhone Duo T-7 → T-6**：Taiwan Mobile myfone 單機預購 10/16 20:00 開放（上週已更正：先前「10/9 11am 預約」為 9/11 iPhone 18 Pro 預約誤植）
- **🔄 TSMC Q3 財報 T-6 → T-5**：Quiet Period Day 6（10/5–10/14），下週三 10/15 14:00 法說
- **🔄 TiBOOST 創新大步 T+4 → T+5**：10/5 徵件截止，入圍名單仍未公告，官方未釋出時程
- **🔄 新創總會白皮書**：14 項建言 lobby 持續；storm.mg 於 10 日報導「總會 10 日發布」措辭與日期混亂，但實質內容（新創一法、大企業投資稅抵、以大帶小、戰略領域集中）與 10/8 brief 已詳述一致

## 📰 AI 產業動態

| 事件 | 影響 | 機會/威脅 | 來源 |
| ---- | ---- | --------- | ---- |
| 🔄 **Anthropic Claude Haiku 5.5 於 10/7 已釋出（T+3）** — 原連日判讀為「T+15 未落地」為錯誤。輸入 $0.10/M、輸出 $0.50/M（≤100K token），平均比 Haiku 4.5 便宜約 75%；首度支援 **effort levels**；OSWorld 2.1 離線 72.4%、Humanity's Last Exam 無工具 45.9% | 高頻日報、summarization、subagent 子任務單位成本大幅下壓；但 Terminal-Bench 4.0 僅 39.2%（Sonnet 5.5: 70.6%），**複雜 agentic coding 仍須 Sonnet/Opus** | 🟢 機會：今日至下週啟動 shadow eval（Haiku 5.5 vs 現用 Opus/Sonnet 在轉譯、分類、摘要 3 類子任務的 cost × quality × latency 曲線）；🔴 威脅：若憑記憶直接換，Terminal-Bench 落差會打壞 agentic flow | [aiweekly](https://aiweekly.co/alerts/introducing-claude-haiku-55) / [letsdatascience](https://letsdatascience.com/news/anthropic-releases-claude-haiku-55-for-high-volume-tasks-1c6260b4) / [aicatchup](https://aicatchup.com/news/claude-haiku-5-5) |
| 🔄 **Cognition SWE-2 免費試用最後一日（T-0）** — 10/10 之後僅 Devin Pro / Max / Teams 訂閱者可用；per-token 單價未公告 | 一人與小團隊 Devin 用戶今日為「用免費額度極限壓測或續訂」決策日；若 shadow eval 未完成，進入 10/11 將面臨「不知後續成本」卻需自動續訂 | 🟡 機會：今日把過去 3 日累積的 non-urgent 任務一次灌進去跑完；🔴 威脅：未進行基準比較就續訂會錯估 ROI — Devin $20/mo（Pro）為最低門檻但 context 配額有限 | [digitalapplied](https://www.digitalapplied.com/blog/cognition-swe-2-coding-model-decision-guide) / [getaiperks](https://www.getaiperks.com/en/ai/cognition-swe-2-pricing) / [fast.io](https://fast.io/resources/is-devin-ai-free/) |
| 🔄 **Anthropic IPO 10 月目標 $2T valuation（T? 具體日期未公告）** — Financial Times 報導投資人預期 10 月上市、$2T+ 估值；6/1 已遞送機密 S-1；5 月 Series H $65B 融資估值 $965B | 10 月上市若成，是**年內 AI 產業最大 liquidity event**；對獨立開發者的意義：Anthropic 定價策略將從「成長優先」逐步轉向「毛利可視化」，Haiku 5.5 的 75% 降價可能是 pre-IPO 的最後紅利 | 🟢 機會：鎖定 Claude API 多年合約可以在 IPO 前拿到最後一波彈性定價；🔴 威脅：IPO 後若轉向 token tier 分級更嚴格，重度 agentic 應用的成本結構會變 | [bitmex](https://www.bitmex.com/blog/anthropic-ipo-guide) / [kucoin](https://www.kucoin.com/blog/es-anthropic-ipo-2026-plans-september-or-early-otcober-listing-amid-965-billion-valuation-talks) / [fbroker](https://fbroker.kz/en/news/51473-anthropic-shareholders-expect-a-2t-valuation-following-an-october-ipo-en-2) |
| 🔄 **TSMC Q3 2026 財報 10/15（T-5）法說預覽** — 市場 consensus 營收 $45.8B（guidance 高標 $44.6–45.8B）、毛利率 66.5%、營益率 57.1%；CapEx 全年 $60–64B；觀察重點：2nm ramp 稀釋、Arizona/熊本進度、CoWoS[^cowos] 供給 | 若財報符合預期但「2027 緊 tone」更嚴，推論成本將繼續由 downstream 吸收；對一人 SaaS 的實務影響：Groq / Together / Fireworks 等 inference infra 的降價空間極可能被壓縮 | 🟡 機會：下週三 pricing update 前把 LLM Router 的 fallback 層級準備好（主：Haiku 5.5／備：Groq Llama 4）；🔴 威脅：若 TSMC 升級 CapEx 上緣，Nvidia / Broadcom 連動漲，雲 GPU 成本短期難降 | [sec.gov 6-K](https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000451/a2q26e_withguidancexfinal.htm) / [hudson-labs](https://www.hudson-labs.com/research/tsmc-q3-2026-earnings-preview-tsm-revenue-and-margins) / [scanx.trade](https://scanx.trade/stock-market-news/companies/tsmc-projects-q3-revenue-between-44-6b-and-45-8b/45732056) |
| 🔄 **OpenAI Agent Builder 11/30 T+51 下線、Evals read-only 10/31 T+21** — 原生 Agent Builder 將停役，官方要求遷移至 Agents SDK + ChatKit[^agents-sdk] 架構 | 已用 Agent Builder 的團隊今日起算有 51 天遷移窗口；Evals read-only 僅剩 21 天 | 🟢 機會：若原本就在評估「自建 vs. OpenAI Agent Builder」，現在直接走 Agents SDK 比較合算；🔴 威脅：既有生產環境 agent 需在 11/30 前完成遷移，否則服務會中斷 | 2026-10-07 ~ 10-09 brief 連日追蹤；OpenAI DevDay 2026（9/29 SF）context |

## 🛠 新興 AI 工具

| 工具 | 類別 | 用途 | 定價 | 差異點 | 採用建議 |
| ---- | ---- | ---- | ---- | ------ | -------- |
| **Claude Haiku 5.5**（🔄 修正為已釋出） | LLM 小模型 | 高頻 summarization、subagent、browser use | $0.10/M in、$0.50/M out（≤100K token） | 首個 Haiku 支援 effort levels；OSWorld 2.1 72.4%；比 4.5 便宜 ~75% | 🟢 今日起 shadow eval 2 類：日報轉譯、分類標籤；Terminal-Bench 僅 39.2%，不適合複雜 agentic coding |
| **Cognition SWE-2** (Devin) | SaaS AI coding | multi-file refactor、Fusion rollout[^fusion] | 今日 10/10 後需 Devin Pro+（$20/mo 起）；per-token 單價未公告 | Devin Desktop/CLI/Web/Fusion 全線整合；無獨立 API | 🟡 若未試用：今日為最後灌量日；若已決定不用：直接關；若中立：先訂 Pro（$20）觀察 1 個月 |
| **OpenAI Codex SDK + Slack @Codex** | SaaS AI coding | TypeScript codegen、Slack 即時觸發 | ChatGPT Business/Enterprise/Edu 內建 | GPT-5-Codex 延伸、Slack 原生整合、Admin dashboards | 🟢 第 1 完整工作週收尾（10/12 週一真正收尾）前完成 1 條 Slack-driven PR 流程 |
| **Google Antigravity**（🔄 持續追蹤） | agentic 開發平台 | Gemini 3 Pro-driven agentic workflow、IDE | 待公布 | Google 2026 的 agent-first 開發環境替代；對標 Cursor / Codex | 🟡 等 1–2 週看社群實測；短期內不換主力 IDE |
| **Vercel AI SDK v7**（6/25 release） | TS AI SDK | agent framework、tool loop、human approval gate | 開源免費（Vercel 服務另計） | ToolLoopAgent、needsApproval human gate、DevTools middleware | 🟢 一人 SaaS 的 agent-in-production 標配；v6 → v7 有 breaking changes，記得跑 codemod |
| **Replit Agent 3 Pro**（T+? 持續追蹤） | SaaS AI coding | 自主代碼、200 分鐘 autonomous、App Testing | Free / Core $20 / Pro $100 | 自動建 Neon Postgres + auth + deploy；pooled credits 15 builders 共享 | 🟡 適合「無程式背景但想做 MVP」場景；工程師主場仍是 Codex/Devin/Cursor |

## 💡 SaaS 點子

### 點子 1：Haiku 5.5 一鍵 shadow eval harness 🆕

- **痛點來源**：Haiku 5.5 10/7 已出，但多數獨立開發者（含我自己 10/9 以前）仍以為「未落地」而延後測試；一人團隊缺乏標準化 shadow eval 流程、憑 vibe 換模型是常態
- **目標客群**：以 LLM 當產品核心的一人 / 小團隊 SaaS 開發者（台灣 + 亞洲），**特別是把子任務拆給多模型跑的 agentic 架構使用者**
- **技術複雜度**：2/5 — Node.js + 任一 eval framework（Braintrust / Langfuse）+ 本地 CLI
- **預估 MRR**：$2–8K（開源 CLI + $29/mo cloud dashboard）；上限受限於工程師 niche
- **競品弱點**：Braintrust / Langfuse 偏企業大型；小團隊需要「只要指定主/備模型就跑完 100 條 sample 並生成 2 分鐘決策報告」的輕量工具，不要先建 workspace 再 import 10 個 integration
- **切入建議**：以 CLI MVP 起手（`npx shadow-eval haiku-5.5 --baseline opus-5.5 --samples ./tasks.jsonl`），7 日內寫完、丟 HN 看 traction；若有訊號再接 cloud dashboard

### 點子 2：SWE-2 / Devin 月費 ROI 自動審計 🆕

- **痛點來源**：SWE-2 免費期今日結束，自動續訂的 Devin Pro / Max 用戶接下來面臨「每月付 $20–$200 但 context 用量不透明」的黑盒；社群已有抱怨 bill shock
- **目標客群**：使用 Devin / Cursor Pro / Replit Agent 的獨立開發者與 2–5 人團隊，重點是「不想自己做試算表追用量」的工程師
- **技術複雜度**：2/5 — API 抓用量 + 轉譯 + heuristic 建議
- **預估 MRR**：$3–10K（$9/mo 單人、$29/mo 團隊）
- **競品弱點**：Portkey / Helicone 等 LLM Observability 偏向 API 直連模式，不覆蓋 Devin / Cursor 這類「IDE 內 opaque」的用量來源；也沒針對「省錢建議」做分析
- **切入建議**：先針對 Devin + Cursor + Codex SDK 3 個 vendor；關鍵訊號是「使用者看完 report 後實際行動（降階 / 換模型）的比例」而非 MRR

### 點子 3：台灣國慶連假前後 AI tooling bench 🔄

- **痛點來源**：10/10–10/12 國慶 Saturday + 週日 + 週一國慶 補假（如適用）是台灣工程師/新創創辦人連假 — 3 天「不打擾也不會被打擾」的 bench time 很適合跑一次完整工具堆疊重整；但多數人沒有 checklist、連假結束工具仍沒換
- **目標客群**：台灣獨立開發者、indie hacker 社群
- **技術複雜度**：1/5 — 本質是內容產品（checklist + prompt + 1 小時 YouTube 錄屏）
- **預估 MRR**：$500–2K（$19 一次性）；利基市場
- **競品弱點**：台灣目前的 AI tooling 內容多為單一工具 review，缺「3 天連假完整堆疊重整」的 playbook — 從 LLM 主備切換、eval harness、Codex/Devin/Cursor 定位、到 Agent framework 升級的完整順序
- **切入建議**：10/10–10/12 連假期間自己實做一次、同步直播 / 錄屏；12 日晚上成品上架，當週 HN / r/SaaS 推一次

## 🧰 工具堆疊更新

- **🔄 Haiku 5.5 shadow eval 排程**（新增至堆疊）：本週（10/10–10/12 國慶連假）為 shadow eval 窗口；主/備模型配置待下週三法說後再定案（視 TSMC tone 決定 Groq / Together 是否納入 fallback）
- **🔄 SWE-2 續訂決策**：本日最後決策日；若 shadow eval 未達門檻就不續 Pro
- **🔄 Vercel AI SDK v7（6/25 release）**：若主線還在 v6，趁連假跑一次 codemod（`stepCountIs → isStepCount`、`onFinish → onEnd`）；breaking changes 不多，1 小時可完
- **其他**：Codex SDK + Slack 第 1 完整工作週收尾實質延至 10/12 週一

## ⚡ 今日行動建議

- [ ] **🔴 高優先（60 分鐘）**：Haiku 5.5 shadow eval 啟動 — 挑現產品中 1 個 Opus/Sonnet 子任務（例如摘要、分類、翻譯），準備 20 條 sample、兩邊各跑一次、記下 cost × quality × latency；明日對比
- [ ] **🔴 高優先（30 分鐘）**：SWE-2 續訂決策 — 檢視過去 1 個月的實際使用量與 PR 通過率；若 PR 通過率 ≥ 60% 就續 Pro（$20），否則退訂
- [ ] **🟡 中優先（90 分鐘）**：連假 bench 計畫 — 列出下週 pitch 定稿前需要補的 3 件事（通常是：產品 landing page、demo video、pricing page），並決定每件各花多少小時
- [ ] **🟢 低優先（可選）**：若主線用 Vercel AI SDK，跑一次 v7 codemod 升級

## ⏳ 待觀察

- **TSMC Q3 法說（10/15 T-5）的 2027 緊 tone 與 CapEx 上緣**：若上調，一人 SaaS 的 inference infra 成本短期難降
- **Anthropic IPO 10 月上市窗口**：若當週（或下週）正式啟動路演，Claude API 的 pre-IPO 彈性定價可能有最後議價空間
- **TiBOOST 入圍名單公告**：T+5 仍未公告；若 10/12 連假後仍無聲，官方應被動催促一次
- **Cursor Composer 3 / Vega**：Composer 2.5（5/18 release）仍為最新 confirmed；Composer 3 流言於社群已 T+109 無正式發布 — 繼續列為「不可依賴」訊號
- **iPhone Duo T-6 預購**（10/16 20:00）：零組件供應鏈（新日興、臻鼎-KY、玉晶光、大立光）本週會進入 pre-launch rally，TSMC 法說後效應疊加
- **數發部百億 AI 新創方案**：首年僅投 7,500 萬（6 案），年底 Q4 可能有加碼公告；百家 GPU 擴充能否過預算是另一面向

[^effort-levels]: Anthropic 於 Claude 系列推出的 API 參數，允許呼叫端指定模型推理「思考深度」（例如 low／medium／high），在同一模型內切換速度與回答完整度的 trade-off；effort 越高耗費 token 越多、延遲越長但推理更細。過去僅 Opus/Sonnet 支援，Haiku 系列首次納入是在 5.5 版。

[^osworld]: 由新加坡 NUS 與多校聯合維護的開源桌面 agent 評測集，模擬真實作業系統情境下的檔案、瀏覽器、Office 操作任務；2.1 版加入離線子集以降低網路／環境飄移造成的評分雜訊。分數越高代表模型越能完成多步驟桌面任務，是衡量「computer use」能力的主要基準之一。

[^fusion]: Cognition 於 2026 年推出的 Devin 全線整合層，將 Desktop App、CLI、Web、IDE plugin 四個介面接到同一 agent session，使任務可以跨介面無縫接手與觀察；「Fusion rollout」指此整合層的分階段釋出，是 SWE-2 模型之外的產品化差異點。

[^cowos]: Chip on Wafer on Substrate，TSMC 的 2.5D 先進封裝技術，把邏輯晶片與高頻寬記憶體（HBM）堆疊在同一介層上，是 NVIDIA、Broadcom、AMD 等 AI 加速器晶片的瓶頸產能。CoWoS 供給緊俏會直接牽動 GPU 交期與雲端 inference 報價，是半導體與 LLM 成本結構之間的連動變數。

[^agents-sdk]: OpenAI 2026 年主推的新 agent 開發棧，由 Agents SDK（程式庫）、ChatKit（前端元件庫）與 Responses API（執行層）組成，取代原本以拖拉流程圖為主的 Agent Builder，官方定位為「正式生產級 agent 基座」；現有 Agent Builder 使用者需於 11/30 前完成遷移。

## 📚 引用來源

1. [Anthropic releases Claude Haiku 5.5, cutting prices by 75% — aiweekly](https://aiweekly.co/alerts/introducing-claude-haiku-55) — 2026-10-07
2. [Anthropic Releases Claude Haiku 5.5 for High-Volume Tasks — letsdatascience](https://letsdatascience.com/news/anthropic-releases-claude-haiku-55-for-high-volume-tasks-1c6260b4) — 2026-10-07
3. [Anthropic Releases Claude Haiku 5.5, Its Fastest Model and First Haiku With Effort Levels — aicatchup](https://aicatchup.com/news/claude-haiku-5-5) — 2026-10-07
4. [Anthropic launches Claude Haiku 5.5 for summarization ahead of IPO — newsbytesapp](https://www.newsbytesapp.com/news/science/anthropic-launches-claude-haiku-55-for-summarization-ahead-of-ipo/tldr) — 2026-10-08
5. [Cognition SWE-2 Coding Model Decision Guide — digitalapplied](https://www.digitalapplied.com/blog/cognition-swe-2-coding-model-decision-guide) — 2026-09-11
6. [SWE-2 Pricing 2026: What Cognition's Coding Model Costs — getaiperks](https://www.getaiperks.com/en/ai/cognition-swe-2-pricing) — 2026-09
7. [How much does Devin cost in 2026 — automationatlas](https://automationatlas.io/answers/devin-pricing-explained-2026/) — 2026-07
8. [TSMC Form 6-K Q2 2026 with Q3 Guidance — SEC](https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000451/a2q26e_withguidancexfinal.htm) — 2026-07
9. [TSMC Q3 2026 Earnings Preview — Hudson Labs](https://www.hudson-labs.com/research/tsmc-q3-2026-earnings-preview-tsm-revenue-and-margins) — 2026-10
10. [TSMC projects Q3 revenue between $44.6B and $45.8B — ScanX](https://scanx.trade/stock-market-news/companies/tsmc-projects-q3-revenue-between-44-6b-and-45-8b/45732056) — 2026-10
11. [Anthropic shareholders expect $2T valuation October IPO — fbroker](https://fbroker.kz/en/news/51473-anthropic-shareholders-expect-a-2t-valuation-following-an-october-ipo-en-2) — 2026-08
12. [Anthropic IPO 2026 September or Early October $965B — kucoin](https://www.kucoin.com/blog/es-anthropic-ipo-2026-plans-september-or-early-otcober-listing-amid-965-billion-valuation-talks) — 2026-08
13. [Taiwan Mobile myfone 10/16 20:00 iPhone Duo 預購 — Taiwan News](https://www.taiwannews.com.tw/news/6437480) — 2026-09-10
14. [新創總會 2026 創新創業白皮書 14 項建言 — 風傳媒](https://www.storm.mg/article/11087103) — 2026-10
15. [2026 全球新創生態系指數 台灣首度前 20 — TechNews](https://technews.tw/?p=1558515) — 2026-05
16. [數發部百億 AI 新創方案 — TechNews](https://technews.tw/?p=1520580) — 2026-03
17. [Vercel AI SDK v6 vs v7 migration — issoh.co.jp](https://www.issoh.co.jp/tech/details/10402/) — 2026-07
