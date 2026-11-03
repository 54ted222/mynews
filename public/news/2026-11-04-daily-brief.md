---
title: 每日創業情報 — 2026-11-04
date: 2026-11-04
tags: 創業情報, AI 產業, SaaS, 台灣
summary: Smithery T+4 Day +4 工作日第二讀數 + OpenAI Agent Builder EOL T-26 最後 4 週起點 + Anthropic S-1 Day 9 T-5 roadshow 倒計時 + iPhone Duo Day 13 Week 2 Day 6 中港台三城收斂 + 立法院新會期 1,000 億中小微條例 T+36 送審倒計時。
keywords: Smithery MCP Proxy T+4 Day +4 Arcade.dev directory neutrality weekday, OpenAI Agent Builder EOL T-26 Agents SDK ChatGPT Workspace Agents migration, Anthropic S-1 Day 9 T-5 EDGAR amendment roadshow Nov 16 pricing week ANT Nasdaq, iPhone Duo Day 13 Week 2 Day 6 Taiwan 74900 露天 shopee Yahoo 奇摩 收斂曲線, 立法院 新會期 中小微企業 1000億 轉型條例 T+36 送審, 數發部 100 億 AI T+31 境外公司放寬 創業天使翻倍, Claude Agent SDK TypeScript 0.3.302 fork subagents concurrency 20 depth 3, Cursor Composer 2.5 Kimi K2.5 Standard 0.50 Fast 3.00 6x per task, GitHub Agent HQ Mission Control AGENTS.md Insight webinar 11/5 ET, Supabase Neon Turso Convex 2026 indie pricing calculator
---

# 每日創業情報 — 2026-11-04

## 🎯 今日 TL;DR

- **🔄 Smithery MCP[^mcp] Proxy T+4 Day +4（11/04 週三）— 工作日第二讀數日 + Arcade 整併中立性觀察 Day 4**：10/31 UTC 00:00 下線後第 4 日；smithery.ai directory 由 Arcade.dev[^arcade-dev] 以公開 non-proxied registry 續行；Smithery 官方口徑「URL swap 不夠，需另補 auth + session management」仍是最大結構性斷層；對一人 SaaS：Day 4 工作日第二讀數 + Arcade 擁有 Smithery 併 ToolBench 評分的「registry × grading 同源」利益衝突升級版觀察持續，優先選 vendor 官方 MCP URL
- **🔄 OpenAI Agent Builder EOL T-26（11/04）進最後 26 天 — 「Agents SDK vs ChatGPT Workspace Agents」雙路分化成敘事主線**：T-27 → T-26，Thanksgiving（11/26）前美國窗口剩 22 天、台灣 SI 顧問案剩 26 天；最新口徑 Agents SDK 適合「工程師所有 production workflow」、ChatGPT Workspace Agents 適合「非工程師需能編輯的內部自動化」；Evals 遷移目標仍為 Promptfoo[^promptfoo]（MIT）＋ Langfuse v4；reusable prompts v1/prompts API 併入 11/30 下線
- **🔄 Anthropic S-1 Day 9 T+9（11/04）— roadshow 11/9 T-5 日倒計時 + EDGAR amendment 仍未見**：10/26 公開後第 9 天；SEC EDGAR[^edgar] 仍為初版（1H26 營收 163 億美元、淨損 807 億美元、兩名客戶占營收 25% 集中度風險、運算承諾累計 1,205 億美元至 2029 年）；WSJ 傳目標 11/16 當週 pricing week + 11/10 為 roadshow 最早合法起始日；若 Day 10（11/05）仍無 amendment，11/16 準點情境機率下降、roadshow 延至 11/23 或 Q1 2027 替代情境機率升高
- **🔄 iPhone Duo Day 13 Week 2 Day 6（11/04 週三）— 工作日第三日 + 台灣 Yahoo 奇摩 / 露天 / shopee 首波多日切片開始累積**：台灣首批到貨量估 <20,000 台（9/17 良率 60%）稀缺度推升；對照曲線：中國 10/26「15,799 vs 15,999」補貼後實際成交、不到 3 日破發 + 香港 HK$2,000+ → HK$501–1,001 10 日內 60–75% 收斂；Day 13 第三個工作日切片累積後，Day 11–Day 14 四天平均收斂速度為台灣與中港曲線定位的首個客觀讀數
- **🔄 立法院新會期中小微企業 1,000 億轉型條例 T+36（11/04 週三）— 9/29 開議後第 36 日仍未見院會排審新進度**：行政院 2026-10 已通過「中小微企業轉型升級發展條例」草案（8 年 1,000 億、R&D 抵減率提高至 20%、轉型設備投資抵減門檻由 100 萬降至 25 萬）；配合 42.5 億 4 年社發計畫（2026–2029 培育 5.3 萬人次 + 10 萬家次企業碳排資料）；T+36 仍未見立院委員會排審 / 表決，接案現金流轉型不宜綁補助
- **🔄 數發部 100 億 AI 新創基金 T+31（11/04）— 11 月第一個工作日仍無新一輪 pipeline + 創業天使 50 億翻倍 100 億續行**：10/04 中央社境外公司放寬納投（Dealroom[^dealroom] 口徑 R&D 總部 + 50% R&D 預算與員工 + 50% 營收綁定台灣辦公室）滿 31 日仍未見新一輪 pipeline 公開；8 月底累計 10 家 2.55 億 NT + 民間跟投 5.7 億 NT；2027 預算 464 億 NT；平均 2,550 萬 vs 上限 2 億 = 8 倍成長空間
- **🔄 GitHub Insight webinar 11/5 ET T-1 日倒計時（最後一日）— Agent HQ + Mission Control + AGENTS.md 細節公開前夕**：Universe 2025 公告的 Agent HQ（統一多家 agent 控制面）+ Mission Control（web / VS Code / mobile / CLI 單一介面）+ AGENTS.md（source-controlled agent 規則檔，含 prompts / tools / rules）+ Copilot evaluation framework 可重現 benchmark + LLM-graded assertions；2026-02-04 Claude / Codex 併入 public preview（Pro+ / Enterprise）前最後一次公開更新
- **🔄 Claude Agent SDK TypeScript 0.3.302 + Python 0.2.168 T+19** — nested subagents（depth 3 / concurrency 20）+ SessionStore（TS alpha）+ skills + plugins + fork subagents 預設 on（`CLAUDE_CODE_FORK_SUBAGENT=0` 可關）；對照 Vercel AI SDK 7 WorkflowAgent GA 自 6/25、HarnessAgent 自 6/25 experimental 已滿 4 個月（T+132）且無新 minor release
- **🔄 Cursor Composer 2.5 T+22 — Standard $0.50/1M input + $2.50/1M output、Fast $3.00/1M input + $15.00/1M output、Fast 快 ~30% 貴 6× per task + 底層 Kimi K2.5 使成本 ≈ Opus 4.7 1/10**：Composer 2.5 自 5/18 推出後第 5 個月；per-task 口徑：Standard $0.07 / Fast $0.44；「85% 計算來自 Cursor 自家 RL + Kimi K2 和 K2.5 各占 7.5%」成為第三方口徑分析主線

## 🔄 昨日追蹤

- **🔄 Smithery MCP Proxy T+3 Day +3 → T+4 Day +4**：進入關閉後第 4 日、台北週三工作日第二個完整切片；Arcade 擁有 Smithery 事實（2026-08-05）鏈結續行，無新中立性事件
- **🔄 OpenAI Agent Builder EOL T-27 → T-26**：進入最後 26 天、Thanksgiving 前美國窗口剩 22 天；migration 敘事主線為「Agents SDK vs ChatGPT Workspace Agents 雙路分化」
- **🔄 Anthropic S-1 Day 8 → Day 9**：11/9 roadshow T-6 → T-5；EDGAR amendment 仍未見、11/16 WSJ pricing week 情境續行
- **🔄 iPhone Duo Day 12 Week 2 Day 5 → Day 13 Week 2 Day 6**：Day 13 進入工作日第三日，第一次三日平均讀數可估
- **🔄 數發部 100 億 AI T+30 → T+31**：11 月第一個工作日仍無新一輪 pipeline，第 1 年投資速度續行偏慢
- **🔄 Claude Agent SDK TypeScript 0.3.302 T+18 → T+19**：fork subagents 預設 on 續行
- **🔄 Cursor Composer 2.5 T+21 → T+22**：Standard vs Fast 6× per-task 差距試用 Day 6

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🔄 立法院新會期中小微企業 1,000 億轉型條例 T+36（11/04）— 9/29 開議後第 36 日仍未見院會排審新進度 + R&D 抵減率提高至 20% + 轉型設備投資抵減門檻由 100 萬降至 25 萬** | [中央社 — 政院提修法投入千億助中小微企業升級](https://cna.com.tw/news/aipl/202610080165.aspx)、[中央社 — 中小微企業轉型條例擬 9 月送立院 放寬租稅優惠納小商家](https://cna.com.tw/news/afe/202608260104.aspx)、[自由財經 — 8 年千億中小微企業發展條例 卓揆：9 月送立院審議](https://ec.ltn.com.tw/article/paper/1761325) | 對一人 SaaS / 小商家：若法案通過，R&D 投資抵減率自現行約 15% 提高至 20%、轉型設備投資抵減門檻自產業創新條例 100 萬降至 25 萬，實質降低獨立開發者設備投資門檻；但 T+36 仍未見院會排審 = 立法時程不確定 | 機會：「一人 SaaS 自認 R&D 抵減 20% 試算 + 25 萬元轉型設備門檻個案拆解」中文 blog 為少見角度；威脅：法案送審至三讀期程通常 3–12 個月，實際落地時點不定，接案現金流轉型不宜綁補助 |
| **🔄 iPhone Duo Day 13 Week 2 Day 6（11/04 週三）— 工作日第三日 + 台灣 Yahoo 奇摩 / 露天 / shopee 首波多日切片開始累積 + 台灣官方售價 74,900 元起（256GB）至 118,900 元（2TB 頂規）**：Week 1 已過（10/23 開賣 + 禁 walk-in + 首波供貨量交期 2027-01-25）；台灣首批到貨量估 <20,000 台（9/17 整機組裝良率略高於 60%）；對照曲線：中國預售 29,000 人民幣 → 10/26「15,799 vs 15,999」補貼後實際成交、不到 3 日破發 + 香港 HK$2,000+ → HK$501–1,001 10 日內 60–75% 收斂；Day 13 第三個工作日切片累積後，Day 11–Day 14 四天平均收斂速度為台灣與中港曲線定位的首個客觀讀數 | [digitimes — iPhone Duo 開賣 交期排到 2027](https://www.digitimes.com.tw/tech/dt/n/shwnws.asp?id=772472)、[CNA — iPhone Duo 中國市場熱銷 發貨排至明年](https://www.cna.com.tw/news/acn/202610170102.aspx)、[udn money — iPhone Duo 下周五開賣 台灣大、遠傳預購起跑](https://money.udn.com/money/story/5607/9819868)、[unwire — iPhone Duo 轉售加價回落](https://unwire.hk/2026/10/20/iphone-duo-scalpers-resale-price-drop/mobile-phone/)、[雪球 — iPhone Duo 10/26 補貼後 15,799 元實際成交](https://www.xueqiu.com/9252950692/413807010) | 一次性拍賣爬蟲 → 轉售溢價快照 blog（Yahoo / 露天 / shopee）；對比亞洲三城收斂曲線是「低成本高點閱」內容切入點 | 機會：Day 13 工作日第三個切片 + 三日平均讀數為台灣讀者第一次可對比中港的客觀數字；威脅：台灣端樣本數仍小、單日波動大，需累積到 Day 15 才有穩定結論 |
| **🔄 數發部 100 億 AI 新創基金 T+31（11/04）— 11 月第一個工作日仍無新一輪 pipeline + 創業天使翻倍 100 億續行**：10/04 中央社境外公司放寬納投（Dealroom 口徑 R&D 總部 + 50% R&D 預算與員工 + 50% 營收綁定台灣辦公室）滿 31 日仍未見新一輪 pipeline 公開；8 月底累計 10 家 2.55 億 NT + 民間跟投 5.7 億 NT + 單案上限 2 億 NT；2027 預算 464 億 NT；平均 2,550 萬 vs 上限 2 億 = 8 倍成長空間；另有 uanalyze 口徑「首期 100 片 GPU 擴充算力池」續行 | [中央社 — 數發部百億 AI 投資方案 開放主要營運在台境外公司可納投](https://cna.com.tw/news/afe/202610040029.aspx)、[uanalyze — 數發部祭百億資金催生 AI 新創已核定 6 案 盼添購 100 片 GPU](https://uanalyze.com.tw/articles/1078148404)、[TechNews — 百億 AI 基金首年僅投 7,500 萬](https://technews.tw/?p=1520580) | 若公司註冊在矽谷 / 新加坡 / 日本但主要營運在台，可依 Dealroom 3 條件自評；創業天使翻倍 100 億為獨立路徑；100 片 GPU 算力池申請窗口為額外補助 | 機會：T+31「100 片 GPU 算力池申請 + 境外公司放寬 3 條件」雙路教學為少見角度；威脅：T+31 整月平點後仍無新 pipeline = 第 1 年投資速度續行偏慢、審核週期恐續延長 |
| **🔄 TSMC Q3 2026 營收 NT$ 1.49 兆年增 50.9% + 全年營收成長預估 44%（美元計）+ 2 奈米製程爬坡 2–3% 毛利率拖累 Day 20+**：來自第三方口徑（KuCoin 轉述、須向台積電官方 IR 查證）；CEO 魏哲家 2026 Q1 財報：「對 AI 多年趨勢信念高」、全年資本支出推至 520–560 億美元上緣；Arizona 4nm / 3nm 擴產已納入規畫 | [KuCoin — TSMC Q3 2026 Earnings profit rises 68.7%](https://www.kucoin.com/news/flash/tsmc-q3-2026-earnings-surpass-expectations-profit-rises-68-7)、[MarketBeat — TSMC post-earnings fall signs of AI weakness scant](https://www.marketbeat.com/articles/tsmc-despite-post-earnings-fall-signs-of-ai-weakness-are-scant/)、[Tom's Hardware — TSMC ups revenue guidance and capex buoyed by multiyear AI megatrend](https://www.tomshardware.com/tech-industry/semiconductors/tsmc-ups-revenue-guidance-and-capex-buoyed-by-multiyear-ai-megatrend) | 對一人 SaaS inference infra 層：台廠 inference 單位成本續行壓低；對 edge AI：9600 Pro / 9600M 旗艦 SoC 決定 edge 推理可用算力下限（搭配 2 奈米製程爬坡） | 機會：TSMC Q3 2026 單一來源需向官方 IR 查證、二手轉述 blog「2 奈米毛利率拖累 vs AI megatrend 信念」辯證切角可寫；威脅：台積電 IR 近期無新公告、僅月營收公告為主、無新事件可寫深入文 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🔄 Smithery MCP Proxy T+4 Day +4 — Arcade.dev 續行為公開 non-proxied registry + Smithery CLI/SDK/API 全部下線 + 已付費退款 5–10 工作日 Day 4** | MCP infrastructure / T+4 Day +4 工作日第二讀數 | 已遷移完成的團隊：收 Arcade.dev directory 中立性觀察（Arcade 擁有 Smithery + 同時運營 ToolBench grading）；未遷移團隊：用 vendor 官方 MCP URL + 自建或選第三方 OAuth 2.1 identity provider 補 auth / session management | 使用者端免費（Arcade.dev 續行 directory）；原 Pro / Enterprise 退款 Day 4 倒數 | vs 直接 vendor 官方 MCP URL / Pulse MCP / mcp-get；差異在 Arcade 2026-08-05 已收購 Smithery = 完全併購 Smithery 用戶群 + 同時運營 ToolBench grading | 🔴 現用 Smithery 團隊：T+4 Day +4 完成遷移驗收 + 退款到帳檢查；🟡 Arcade 中立性觀察：Day 4 工作日切片、2–4 週觀察落實度；🟢 新建 MCP server：直接走 vendor 官方 URL |
| **🔄 OpenAI Agent Builder EOL T-26（11/30 全下線）— Agents SDK vs ChatGPT Workspace Agents 雙路分化成敘事主線 + reusable prompts v1/prompts API 併入 11/30 下線** | AI agent / T-26 最後 4 週起點 | Agent Builder 用戶：工程師 production workflow → Agents SDK（TS / Python），非工程師需能編輯 → ChatGPT Workspace Agents；Evals 用戶：匯出 dataset + Promptfoo YAML 轉換；reusable prompts 用戶：Playwright / Puppeteer dashboard 爬取（無 API 匯出） | Promptfoo 開源 MIT；Langfuse 社群版免費 / Pro $59/mo / Enterprise custom；ChatKit 保留（embeddable chat UI），不在 11/30 下線範圍 | vs ChatKit（embeddable chat UI 保留）；Agents SDK 選擇「engineer-owned workflow」、Workspace Agents 選擇「non-engineer editable automation」；Evals 遷移目標 Promptfoo + Langfuse 混搭 | 🔴 Agent Builder 用戶：T-26 進最後 26 天 + 根據「工程師 vs 非工程師」雙路選型、建議「rebuild in Agents SDK」而非「workflow graph export」（不保證 1:1）；🟡 Evals 用戶：若尚未匯出 dataset，Thanksgiving 前補完；🟢 red-teaming 需求：保留 Promptfoo + Langfuse 混搭 |
| **🔄 GitHub Agent HQ Insight webinar T-1（11/5 ET 最後一日倒計時）— Mission Control + AGENTS.md + Copilot evaluation framework 細節公開前夕** | AI agent / Copilot / 跨 vendor 控制面 | Copilot Pro+ / Enterprise 用戶：以 AGENTS.md 定義 agent rules + Mission Control 統一監控 Claude / Codex / Copilot / Gemini / Cognition / Grok 多 agent + Copilot evaluation framework 寫可重現 benchmark + LLM-graded assertions | Copilot Pro $10/mo + Pro+ $39/mo + Business $19/user/mo + Enterprise $39/user/mo；Agent HQ + 第三方 agents 滾出到所有付費 Copilot 訂閱者不加費 | vs Cursor（Plus $8 / Premium $30 / Super $100 / Ultra $200 5 層）/ Claude Code CLI / Codex Cloud；差異在 Agent HQ 整合 5 家 vendor（Anthropic / OpenAI / Google / Cognition / xAI）+ AGENTS.md 檔格式為 2026 agentic 共通設定底層 | 🟢 Pro+ / Enterprise 用戶：T-1 預約 Insight webinar、看 Mission Control 細節 + AGENTS.md 範本；🟡 Cursor / Claude Code 用戶：先觀望 AGENTS.md 共通性擴散（Cursor / Claude Code / GitHub Agent HQ 皆支援）再決定是否寫 AGENTS.md |
| **🔄 Claude Agent SDK TypeScript 0.3.302 + Python 0.2.168 T+19** — nested subagents with caps（depth 3 / concurrency 20 / spend caps 自 TS 0.3.219）+ SessionStore（跨 session 儲存狀態，TS alpha）+ skills + plugins + structured outputs + fork subagents TS 0.3.302 預設 on + `CLAUDE_CODE_FORK_SUBAGENT=0` 可關 | TypeScript / Python Agent 框架 / 一人 SaaS 底層 | 需 nested subagents + 跨 session 狀態 + skills + 權限邊界細緻 | SDK 開源免費；Claude API 計費另計；版本綁 Claude Code CLI | vs Vercel AI SDK 7（WorkflowAgent GA 自 6/25、HarnessAgent 仍 experimental 滿 4 個月、10 adapters + tool search + toolCallConcurrency + streamRetries + WebSocket chat）/ OpenAI Agents SDK（Agent Builder 11/30 遷移目標）/ LangGraph | 🟢 一人 SaaS：T+19「SessionStore + skills + fork subagents」持續實戰；🟡 Vercel AI SDK 7：WorkflowAgent 可試裝 production、HarnessAgent GA 遙遙無期；🔴 LangGraph：LangSmith Deployment Standard Units 成本重估 |
| **🔄 Cursor Composer 2.5 T+22 — per-task 口徑 Standard $0.07 / Fast $0.44（6×）+ 「Cursor 自家 RL 占 85% 計算量 + Kimi K2 + K2.5 各 7.5%」第三方口徑** | AI IDE / 開發者訂閱選型 | 深度 Claude Code / GPT 用戶：Premium $30 + API credit；低門檻入門：Plus $8；高用量：Super / Ultra | Plus $8 / Premium $30 / Super $100 / Ultra $200 / Teams $30+ / Enterprise custom | vs Claude Code CLI / Codex Cloud / Windsurf / Zed；差異在 6 層訂閱 + Grok 共用週 usage 配額 + 第三方模型按原價計 + Composer 2.5 底層 Kimi K2.5 + Cursor RL 85% / Kimi 貢獻 15% | 🟢 Pro $20 legacy 續行、不急換；🟡 新用戶：Plus $8 入門；🔴 Super $100 不划算、Premium $30 + API credit 預繳策略較佳 |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：OpenAI Agent Builder T-26 「雙路分化」Agents SDK vs Workspace Agents 選型顧問案 🔄

- **痛點來源**：Agent Builder 11/30 全下線 + 無 read-only 分期 + migration guide 第三方口徑明示「工程師 production workflow → Agents SDK」、「非工程師需能編輯 → ChatGPT Workspace Agents」雙路分化；台灣中小企業 / SI 顧問案進入最後 26 天 crunch；多數顧問只給「單一 SDK 路徑」模板，未區分「誰在維護這個 workflow」的場景差異
- **目標客群（台灣／亞洲）**：以 Agent Builder 建 production 工作流的台灣中小企 / SI（估 150–400 家）+ 非工程師團隊使用 workflow（人資 / 行銷 / 客服）+ Langfuse / Promptfoo 選型未定群 + ChatKit 保留但 workflow ID 風險評估群 + reusable prompts v1/prompts API 併入 11/30 下線 → Playwright 爬取群
- **技術複雜度**：3/5 — service business + 遷移 CLI；Agents SDK TypeScript / Python workflow re-architecture + ChatGPT Workspace Agents template 轉換 + Promptfoo YAML scaffold + Langfuse v4 dataset items 轉換 + reusable prompts Playwright 爬取
- **預估 MRR**：one-off NT$ 100K–480K per client × 3–8 clients / 本月剩 3.5 週 = NT$ 300K–3.8M；T-26 crunch 加價 60–100% 可達 NT$ 160K–960K per client
- **競品弱點**：台灣尚無「雙路分化」中文選型顧問；OpenAI 官方 migration guide 只給框架、缺台灣在地整合顧問；非工程師團隊通常被忽略；workflow graph parity 人工重驗中文 FAQ 近零
- **切入建議**：11/04–11/05 寫「Agent Builder T-26 雙路分化 crunch 接案 landing + 工程師 vs 非工程師選型決策樹 + ChatKit workflow ID 風險自評」；11/09 推 Playwright reusable prompts 爬取 CLI；11/23 EOL 前 1 週關閉接案

### 點子 2：Arcade/Smithery 整併 directory × ToolBench 利益衝突追蹤 dashboard — T+4 Day +4 觀察升級 🔄

- **痛點來源**：Smithery MCP Proxy T+4 Day +4；Arcade 2026-08-05 已收購 Smithery，directory 完全併進 Arcade = 擁有者直接管理 registry + 同時運營 ToolBench grading = 利益衝突升級版；Arcade 自稱「out-of-the-box integrations source」會對未綁定 Arcade ToolBench 的工具產生條目曝光偏差；台灣中文技術社群零系統化追蹤
- **目標客群（台灣／亞洲）**：使用 Smithery 的台灣 developer（估 3,000–5,000 家）+ 自建 MCP server 掛 Smithery registry 的團隊（估 500–1,000 家）+ 掛 Smithery CLI / SDK 的生產線（估 300–800 家）+ 關心 directory 中立性的 open-source maintainer（估 150–400 家）
- **技術複雜度**：3/5 — Node.js / Python CLI；Smithery API 舊 server list（下線前已緩存可 fallback）+ vendor 官方 URL mapping（Claude / OpenAI / GitHub / Shopify / Linear 等）+ Arcade.dev 中立性追蹤（公開 directory 條目隨機抽樣 + 修改紀錄監聽 + ToolBench 評分交叉比對 + Arcade「out-of-the-box integrations」優先顯示偏差偵測）
- **預估 MRR**：one-off NT$ 30K–120K per 遷移驗收案 × 10–20 案 / 月 = NT$ 300K–2.4M；若做訂閱式「MCP 註冊中立性 + auth / session 掃描 dashboard」→ NT$ 1,000/mo × 150 用戶 ≈ NT$ 150K MRR
- **競品弱點**：台灣中文技術 blog 對 Arcade 「out-of-the-box integrations」優先顯示偏差偵測零；vendor 官方 URL mapping 中文整合文件零；ToolBench grading × directory ownership 交叉觀察無人做
- **切入建議**：11/04–11/05 寫「Arcade 收購 Smithery 鏈結與 ToolBench × directory 利益衝突 T+4 觀察 + Arcade 自家 integrations 優先顯示偏差偵測方法論 + vendor 官方 MCP URL mapping 中文完整表」blog 系列；同步放 Node CLI 到 npm；分銷 Twitter / HN / Reddit r/mcp

### 點子 3：Supabase vs Neon vs Turso vs Convex 一人 SaaS 試算 + 搬家 CLI 🆕

- **痛點來源**：2026 多篇第三方口徑指出「Supabase Pro compute 不 scale to zero」持續痛點、「Neon 被 Databricks 收購後調降 15–25%」續行、「Turso SQLite-based 非 Postgres 需重寫 query」、「Convex 按人頭 $25/seat 團隊大了很貴」；台灣 Dcard / PTT soft_job 版常見「Supabase 一個月 $25 一個 project 貴 vs Neon 從 $5 起」的選型爭論；多數選型文只給比較表、缺「實際流量帶入試算 + 搬家 CLI」
- **目標客群**：以 Supabase 起手已經有 3–5 個 project 的台灣 indie / 2–3 人 SaaS 團隊（估 1,500–3,500 家）+ Convex 用 React / Next.js 但團隊擴到 5 人後 $125/mo 心痛群（估 300–800 家）+ 接案工程師想幫客戶做搬家評估群（估 500–1,200 家）
- **技術複雜度**：3/5 — Node.js CLI + Postgres dump/restore + Supabase → Neon 真實搬家流程 + Convex → Turso + Postgres 架構轉換；試算網頁 Next.js + 定價 API 整合（Supabase 公開、Neon 公開、Turso 公開、Convex 公開 seat / usage 計價）
- **預估 MRR**：one-off NT$ 30K–120K per 搬家案 × 8–20 案 / 月 = NT$ 240K–2.4M；訂閱 NT$ 300/mo × 400 用戶 ≈ NT$ 120K MRR；可 upsell CLI Pro 版（含 Convex → Turso 重寫 query）
- **競品弱點**：台灣中文 blog 對 4 家 2026 年末真實定價 + 搬家 CLI 近零；多數比較文只是翻譯英文、缺台灣 USD-TWD 匯率試算 + GCP asia-east1 ping 實測；Neon Databricks 併購後定價調整中文追蹤零；Convex seat 模型中文 FAQ 近零
- **切入建議**：11/04 起連寫 4 篇「Supabase Pro $25 compute 不 scale to zero + Neon $5 起 + Turso $4.99 unlimited db + Convex $25/seat 一人 SaaS 真實成本試算」 + 11/08 Node CLI MVP → 11/15 搬家 real case 影片；分銷 Dcard soft_job / PTT Soft_Job / Facebook Taiwan JS group

## 🧰 工具堆疊更新

- **🔄 Vercel AI SDK 7**：WorkflowAgent 自 6/25 GA 已 production-ready（durable step + crash survival）；HarnessAgent 自 6/25 experimental 滿 4 個月（T+132）無新 minor release；文件口徑「AI SDK 7 is now available」但無 HarnessAgent GA 日期；bridge-backed harness（Claude Code / Codex）需 @ai-sdk/sandbox-vercel 等真實 network sandbox、host-runtime harness（Pi）可用 @ai-sdk/sandbox-just-bash
- **🔄 Supabase / Neon / Turso / Convex 2026 年末口徑整理**：Supabase Pro $25/project/mo、compute 不 scale to zero；Neon 被 Databricks 收購後第三方口徑調降 15–25% + Scale plan 加 SOC2 / HIPAA + 從 $5/mo 起；Turso $4.99/mo unlimited db + 9 GB storage、SQLite-based 非 Postgres；Convex $25/developer/mo、seat-based 團隊大了貴；一人 1 project 約 $25（Convex / Supabase）vs Turso / Neon 低起步
- **🔄 Lemon Squeezy × Stripe Managed Payments 續行**：2026-01 第一哩程 + 2026-04 managed_payments flag 進 Stripe Checkout Sessions + Payment Links API；第三方口徑「加 3.5% → 6.4% + $0.30」vs「Stripe 未公告官方定價、估約 5% + 處理費」口徑衝突，官方定價待確認；間接稅 80+ 國 / 35 類別；不支援 Elements、Billing 須另購
- **🔄 MCP spec 2025-06-18（含 2026-07-28 大改）**：Streamable HTTP、MCP Tasks、OAuth 2.1 強制 PKCE[^pkce]、protected resource metadata、authorization server metadata、resource indicators、CIMD 推薦 DCR 棄用

## ⚡ 今日行動建議

- [ ] **Agent Builder T-26 雙路分化顧問案 landing page**：「工程師 vs 非工程師選型決策樹 + ChatKit workflow ID 風險自評 + Playwright reusable prompts 爬取」（成本：3 小時；產出：landing + 決策樹圖 + 5 封 outbound 給 OpenAI SI 顧問案既有客戶）
- [ ] **Arcade.dev 「out-of-the-box integrations」優先顯示偏差偵測 CLI 原型**（成本：3 小時；產出：Node CLI 隨機抽樣 100 條目 + Arcade vs vendor 官方 URL mapping 覆蓋率報告）
- [ ] **iPhone Duo 三城收斂爬蟲 Day 13 工作日第三個切片 + Day 11–Day 14 三日平均讀數**（成本：2 小時；產出：Playwright scripts + Postgres schema + Day 13 工作日快照 + 3 日平均 CSV）
- [ ] **Anthropic S-1 Day 9 EDGAR amendment 追蹤 + roadshow T-5 日倒計時情境矩陣**：Day 10（11/05）若仍無 amendment → 11/16 情境降權、11/23 / Q1 2027 情境升權
- [ ] **Supabase vs Neon vs Turso vs Convex 一人 SaaS 試算 + 搬家 CLI 第 1 篇 blog**（成本：3 小時；產出：Dcard soft_job 發文 + 定價計算器 MVP）

## ⏳ 待觀察

- **Smithery T+5 Day +5（11/05 週四）**：Arcade 直接管理 directory 第一週收尾前 ToolBench grading × directory 擁有者條目中立性第一個完整工作日週切片
- **OpenAI Agent Builder EOL T-25（11/05）**：是否補發 workflow graph export 工具（migration guide 現未承諾、社群請求屢見）；「Agents SDK vs Workspace Agents」雙路分化是否出 OpenAI 官方選型決策樹
- **Anthropic S-1 amendment 填入時點**：Day 9 → Day 10（11/05）為價位 / 股數 / 募資規模填入第三個合理時窗（11/16 WSJ pricing week 情境 → 須在 11/10 roadshow 最早合法起始日前填入）；若至 11/05 仍空白，11/16 情境降權、roadshow 延至 11/23 情境機率升高
- **iPhone Duo Day 14 Week 2 Day 7（11/05）**：Day 11–Day 14 四天平均收斂速度為台灣與中港曲線定位的首個客觀讀數成形日
- **GitHub Insight webinar 11/5 ET 當日**：Agent HQ + Mission Control + AGENTS.md + Copilot evaluation framework 細節；2026-02-04 Claude / Codex 併入 public preview 前最後更新
- **立法院新會期中小微企業轉型條例 T+37（11/05）**：9/29 開議第 38 日是否出現院會排審新進度
- **數發部 100 億 AI T+32（11/05）**：11 月第 2 個工作日是否出現新一輪 pipeline 公開 → 第 1 年投資速度結構續行強度
- **Vercel AI SDK HarnessAgent GA**：自 6/25 GA 以來 experimental 已滿 4 個月（T+132），若 11 月 GA 將改變「TS Agent 底層 2 強」對決格局；目前官方文件「AI SDK 7 is now available」但無 HarnessAgent GA 日期
- **TSMC 10 月月營收公告**：通常每月上旬公布；若 10 月 AI 需求續強 → 一人 SaaS inference infra 層成本續行壓低

## 📚 引用來源

1. [Smithery — MCP Proxy and managed identity shut down on October 31](https://smithery.ai/future) — 2026-11-04 存取
2. [API Tracker — Smithery migration guide](https://apitracker.io/smithery-migration) — 2026-11-04 存取
3. [Arcade.dev — MCP 2026 migration checklist](https://www.arcade.dev/blog/mcp-26-migration-checklist/) — 2026-11-04 存取
4. [OpenAI deprecations — Agent Builder EOL 2026-11-30](https://developers.openai.com/docs/deprecations) — 2026-11-04 存取
5. [MCP Directory — OpenAI AgentKit deprecation migration guide](https://mcp.directory/blog/openai-agentkit-deprecation-2026) — 2026-10
6. [agenticwire — Migrate from OpenAI Agent Builder: SDK vs Workspace (Nov 30 Deadline)](https://www.agenticwire.news/article/openai-agent-builder-migration-sdk-workspace) — 2026-10
7. [DevelopersDigest — OpenAI Agent Builder / Evals migration](https://www.developersdigest.tech/blog/openai-agent-builder-evals-migration) — 2026-10
8. [Anthropic, PBC — Form S-1 (EDGAR filing 2026-10-26)](https://www.sec.gov/Archives/edgar/data/0002130357/000162828026067168/anthropicpbc-sx1.htm) — 2026-10-26
9. [Freepressjournal — Anthropic Files S-1 With SEC For Proposed IPO, Plans Nasdaq Listing under 'ANT'](https://www.freepressjournal.in/tech/anthropic-files-s-1-with-sec-for-proposed-ipo-plans-nasdaq-listing-under-ant) — 2026-10
10. [RuntimeWire — Anthropic files IPO S-1, plans Nasdaq listing under ANT](https://runtimewire.com/article/anthropic-files-ipo-s-1-plans-nasdaq-listing-under-ant) — 2026-10
11. [Leverage Shares — Anthropic IPO tracker (ANT, Nasdaq)](https://leverageshares.com/us/insights/when-is-the-anthropic-ipo/) — 2026-11-04 存取
12. [digitimes — iPhone Duo 開賣 交期排到 2027](https://www.digitimes.com.tw/tech/dt/n/shwnws.asp?id=772472) — 2026-10
13. [CNA — iPhone Duo 中國市場熱銷 發貨排至明年](https://www.cna.com.tw/news/acn/202610170102.aspx) — 2026-10
14. [udn money — iPhone Duo 下周五開賣 台灣大、遠傳預購起跑](https://money.udn.com/money/story/5607/9819868) — 2026-10
15. [unwire — iPhone Duo 轉售加價回落](https://unwire.hk/2026/10/20/iphone-duo-scalpers-resale-price-drop/mobile-phone/) — 2026-10
16. [雪球 — iPhone Duo 10/26 補貼後 15,799 元實際成交](https://www.xueqiu.com/9252950692/413807010) — 2026-10-26
17. [中央社 — 數發部百億 AI 投資方案 開放主要營運在台境外公司可納投](https://cna.com.tw/news/afe/202610040029.aspx) — 2026-10-04
18. [uanalyze — 數發部祭百億資金催生 AI 新創已核定 6 案](https://uanalyze.com.tw/articles/1078148404) — 2026
19. [TechNews — 百億 AI 基金首年僅投 7,500 萬](https://technews.tw/?p=1520580) — 2026
20. [中央社 — 政院提修法投入千億助中小微企業升級](https://cna.com.tw/news/aipl/202610080165.aspx) — 2026-10-08
21. [中央社 — 中小微企業轉型條例擬 9 月送立院](https://cna.com.tw/news/afe/202608260104.aspx) — 2026-08-26
22. [自由財經 — 8 年千億中小微企業發展條例 卓揆：9 月送立院審議](https://ec.ltn.com.tw/article/paper/1761325) — 2026
23. [SDTimes — GitHub unveils Agent HQ](https://sdtimes.com/ai/github-unveils-agent-hq-the-next-evolution-of-its-platform-that-focuses-on-agent-based-development/) — 2025
24. [VentureBeat — GitHub's Agent HQ aims to solve enterprise's biggest AI coding problem](https://venturebeat.com/ai/githubs-agent-hq-aims-to-solve-enterprises-biggest-ai-coding-problem-too) — 2025
25. [DevelopersDigest — Claude Agent SDK in Late 2026](https://www.developersdigest.tech/blog/claude-agent-sdk-whats-new-2026) — 2026-10-17
26. [AI SDK docs — HarnessAgent experimental overview](https://ai-sdk.dev/docs/ai-sdk-harnesses) — 2026-11-04 存取
27. [DevelopersDigest — What's New in Vercel AI SDK 7 (October 2026)](https://www.developersdigest.tech/blog/vercel-ai-sdk-whats-new-2026) — 2026-10-17
28. [LlmReference — Cursor Composer 2.5](https://www.llmreference.com/model/composer-2-5/cursor) — 2026
29. [emelia.io — Cursor Composer 2 Review: Benchmarks, Pricing, and the Kimi K2.5 Controversy](https://emelia.io/hub/cursor-composer-2-review) — 2026
30. [TheNewStack — Cursor Composer benchmarks](https://thenewstack.io/cursor-composer-benchmarks/) — 2026
31. [DevToolPicks — Turso vs Neon vs Supabase for Indie Hackers 2026](https://devtoolpicks.com/blog/turso-vs-neon-vs-supabase-indie-hackers-2026) — 2026
32. [DevToolPicks — Convex vs Supabase vs Firebase for Indie Hackers 2026](https://devtoolpicks.com/blog/convex-vs-supabase-vs-firebase-indie-hackers-2026) — 2026
33. [agentdeals — Database Pricing — The Definitive 2026 Comparison](https://agentdeals.dev/database-pricing) — 2026
34. [KuCoin — TSMC Q3 2026 Earnings Surpass Expectations](https://www.kucoin.com/news/flash/tsmc-q3-2026-earnings-surpass-expectations-profit-rises-68-7) — 2026
35. [MarketBeat — TSMC Despite Post-Earnings Fall, Signs of AI Weakness Are Scant](https://www.marketbeat.com/articles/tsmc-despite-post-earnings-fall-signs-of-ai-weakness-are-scant/) — 2026
36. [Tom's Hardware — TSMC ups revenue guidance and capex buoyed by multiyear AI megatrend](https://www.tomshardware.com/tech-industry/semiconductors/tsmc-ups-revenue-guidance-and-capex-buoyed-by-multiyear-ai-megatrend) — 2026

[^mcp]: Model Context Protocol，Anthropic 於 2024 年提出的開放協定，用統一介面讓 LLM agent 連接外部工具、資料來源與系統；2025-06-18 版本加入 OAuth 2.1 與 Streamable HTTP、2026-07-28 大改補上 MCP Tasks、CIMD 推薦 DCR 棄用，是今年 agent 生態主要互通層。

[^arcade-dev]: 專注於 AI agent 工具呼叫與授權的美國新創，自建 LLM 認證層與工具目錄；2026-08-05 收購 Smithery，為 Smithery MCP Proxy 下線後 directory 的實際擁有者。同時運營 ToolBench 評分，被外界點名為同一公司同時運營 registry 與 grading 的利益衝突升級版。

[^promptfoo]: 開源 MIT 授權的 LLM evaluation 與 red-teaming CLI，透過本地 YAML 定義測試集並串進 CI；第三方口徑稱其已被 OpenAI 收攏為官方 Evals 遷移目標，官方公告仍待確認。

[^pkce]: Proof Key for Code Exchange，OAuth 2.0 的授權碼交換擴充（RFC 7636）；client 以隨機 verifier 衍生 challenge，防止授權碼在重導過程中被攔截重用。OAuth 2.1 將 PKCE 自選用升為所有 public client 強制使用。

[^dealroom]: 總部位於阿姆斯特丹的歐洲創投情報平台，蒐錄全球新創估值、募資輪次與投資人資料；許多政府基金與 LP 將其當作公開口徑來源，本次台灣數發部 100 億 AI 境外公司放寬條件即以其口徑拆解為 3 項門檻。

[^edgar]: Electronic Data Gathering, Analysis and Retrieval，美國 SEC 的公開文件揭露系統，所有赴美上市公司提交的 S-1、10-K、10-Q 等正式財報文件都須透過 EDGAR 歸檔並即時公開；市場通常追蹤 EDGAR 上的 S-1 amendment 填入時點，作為 IPO roadshow 與 pricing week 的時程訊號。
