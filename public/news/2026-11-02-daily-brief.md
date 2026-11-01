---
title: 每日創業情報 — 2026-11-02
date: 2026-11-02
tags: 創業情報, AI 產業, SaaS, 台灣
summary: Smithery T+2 關閉後首個週日靜置觀察 + OpenAI Evals read-only T+2 配 Agent Builder EOL T-28 crunch + Anthropic S-1 Day 7 roadshow 11/9 T-7 日倒計時 + iPhone Duo Day 11 Week 2 Day 4 + 數發部 100 億 AI T+29 月末平點。
keywords: Smithery MCP Proxy T+2 shutdown weekend Arcade.dev directory neutrality, OpenAI Evals read-only T+2 Agent Builder EOL T-28 Promptfoo Langfuse migration, Anthropic S-1 Day 7 ANT Nasdaq roadshow Nov 9 T-7 Thanksgiving IPO, OpenAI Agent Builder deprecation November 30 2026 Agents SDK migration, iPhone Duo Day 11 Week 2 Day 4 Taiwan 二手 Yahoo 奇摩 shopee Ruten 收斂曲線, 數發部 100 億 AI T+29 境外公司放寬 創業天使翻倍 100 億, Vercel AI SDK 7.0.143 WorkflowAgent HarnessAgent minor release gap, Cursor Composer 2.5 Kimi K2.5 Standard Fast pricing 6x gap, MediaTek Dimensity 9600 Pro TSMC 2nm Q4 mass production AI accelerator cloud, StartupBlink 2026 Taiwan 20 ranking 國科會 Startup Island
---

# 每日創業情報 — 2026-11-02

## 🎯 今日 TL;DR

- **🔄 Smithery MCP[^mcp] Proxy T+2 Day +2 — 關閉後首個週日靜置觀察**：10/31 UTC 00:00 下線後第 2 日；smithery.ai directory 續由 Arcade.dev[^arcade-dev] 以公開 non-proxied registry 續行；Smithery 官方口徑「URL swap 不夠，需另補 auth + session management」仍是最大結構性斷層；本日台北為週日，是衡量週末第一波斷線用戶壓力的靜置觀察窗口。對一人 SaaS：避免當週決策把關鍵 agent 工作流綁單一 proxy，仍以 vendor 官方 MCP URL 為主，OAuth 2.1 + MCP 2025-06-18 protected resource metadata 為替代最大公約數
- **🔄 OpenAI Evals read-only T+2 Day +2 — Agent Builder EOL T-28 crunch 進入倒數四週**：Evals 10/31 UTC 00:00 進 read-only，11/30 完全下線（含 reusable prompts 一併下線、無 API 匯出）；Agent Builder 同 11/30 下線但無 read-only 分期，T-28 進入最後 28 天 crunch；官方 cookbook 推 Promptfoo[^promptfoo]（MIT）為 Evals 遷移目標、Workspace Agents / Agents SDK 為 Agent Builder 替代；注意 workflow graph 不保證完整轉譯，需人工重驗
- **🔄 Anthropic S-1 Day 7 T+7（11/02）roadshow 11/9 T-7 日倒計時**：10/26 美東公開後第 7 天；ticker ANT 擬掛 Nasdaq；1H26 營收 163 億美元、淨損 807 億美元（724 億為 SAFE[^safe]/可轉換債 non-cash 公允價值變動）；兩名客戶占營收 25% 集中度風險；運算承諾累計 1,205 億美元（截至 2029）；價位 / 股數 / 募資規模仍留空白；roadshow 11/9 情境續行 → 感恩節 11/26 前上市為主線情境、Q1 2027 為替代情境
- **🔄 iPhone Duo Day 11 Week 2 Day 4（11/02 週一）二手溢價續行收斂**：Week 2 Day 4 進入工作日，台灣 Yahoo 奇摩拍賣 / 露天 / shopee 的現貨回落速度與中國（29,000 人民幣預售 → 1,000–1,500 開賣日 ≈ 96% 崩潰）、香港（HK$2,000+ → HK$501–1,001 ≈ 10 日內 60–75% 收斂）兩條參考曲線對照
- **🔄 數發部 100 億 AI 新創基金 T+29（11/02）10 月修正作業要點月末平點**：境外公司放寬納投（Dealroom[^dealroom] 口徑 R&D 總部 + 50% R&D 預算與員工 + 50% 營收綁定台灣辦公室）滿 29 日仍未見新一輪 pipeline 公開；創業天使方案已自 50 億翻倍至 100 億；2027 預算 464 億 NT；平均 2,550 萬 vs 上限 2 億 = 8 倍成長空間
- **🔄 GitHub Universe 2026 Mission Report T+4**：Agent HQ + Mission Control + AGENTS.md 跨 repo custom agents + Copilot evaluation framework（可重現 benchmark + LLM-graded assertions）；11/5 Insight ET webinar T-3 日倒計時
- **🔄 Claude Agent SDK TypeScript 0.3.302 + Python 0.2.168 T+17（11/02）** — nested subagents with caps（depth 3 / concurrency 20）+ SessionStore（TS alpha）+ skills + plugins + fork subagents 預設 on（`CLAUDE_CODE_FORK_SUBAGENT=0` 可關）；對照 Vercel AI SDK 7.0.143 自 6/25 GA 以來 WorkflowAgent 已 production-ready、HarnessAgent 仍 experimental 且無新 minor release
- **🔄 MediaTek 聯發科 Dimensity 9600 Pro + 首款雲端 AI 加速器 Q4 量產**：9/15 推出 Dimensity 9600 Pro（TSMC 2nm 首批）+ 為某大型美國雲服務商量身設計的 AI 加速器計畫 Q4 進入量產；對一人 SaaS inference infra 層：中長期 inference 單位成本可望受台廠產能擴張持續壓低

## 🔄 昨日追蹤

- **🔄 Smithery MCP Proxy T+1 Day +1 → T+2 Day +2**：進入關閉後第 2 日、台北週日靜置觀察窗口；Arcade.dev directory 中立性觀察 Day +2，無公開中立性事件
- **🔄 OpenAI Evals read-only T+1 Day +1 → T+2 Day +2**：Agent Builder EOL T-29 → T-28 進入倒數四週整點
- **🔄 Anthropic S-1 Day 6 T+6 → Day 7 T+7**：11/9 roadshow T-8 → T-7；T-7 整點進入「價位/股數/募資規模填入」第一個合理時窗（登記書須在 roadshow 開始前 15 天公開 ≥ 10/26 → 11/9 符合）
- **🔄 iPhone Duo Day 10 Week 2 Day 3 → Day 11 Week 2 Day 4**：週末二手觀察窗口結束，進入工作日對照窗口
- **🔄 數發部 100 億 AI T+28 → T+29**：月末無新一輪 pipeline 公開，審核週期可能更長
- **🔄 GitHub Universe 2026 Mission Report T+3 → T+4**：11/5 ET Insight webinar T-5 → T-3
- **🔄 Claude Agent SDK TypeScript 0.3.302 T+16 → T+17**：fork subagents 預設 on 續行
- **🔄 Cursor Composer 2.5 T+19 → T+20**：Standard $0.50/1M input + $2.50/1M output、Fast $3.00/1M input + $15.00/1M output、6× per-task 差距試用 Day 4

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🔄 iPhone Duo Day 11 Week 2 Day 4（11/02 週一）— 二手溢價進入工作日對照窗口**：Week 1 已過（10/23 開賣 + 禁 walk-in + 首波供貨量交期 2027-01-25）；可對照曲線：中國預售 29,000 人民幣 → 開賣日 1,000–1,500 元人民幣 ≈ 96% 崩潰、香港 HK$2,000+ → HK$501–1,001 ≈ 10 日內 60–75% 收斂；Week 2 Day 4 關鍵：台灣（Yahoo 奇摩拍賣 / 露天 / shopee / jyes.com.tw 水貨商）落在中段還是追到中國端的 96%，是對台灣消費者 FOMO 強度的首個客觀讀數 | [digitimes — iPhone Duo 開賣 交期排到 2027](https://www.digitimes.com.tw/tech/dt/n/shwnws.asp?id=772472)、[CNA — iPhone Duo 中國市場熱銷 發貨排至明年](https://www.cna.com.tw/news/acn/202610170102.aspx)、[unwire — iPhone Duo 轉售加價回落](https://unwire.hk/2026/10/20/iphone-duo-scalpers-resale-price-drop/mobile-phone/)、[unwire — iPhone Duo 香港開售首批機水位](https://unwire.hk/2026/10/23/iphone-duo-sin-tat-launch-buyback-prices/mobile-phone/) | 一次性拍賣爬蟲 → 轉售溢價快照 blog（Yahoo / 露天 / shopee / jyes）；對比亞洲三城收斂曲線是「低成本高點閱」內容切入點，不須碰 Apple 行銷 ToS 爭議 | 機會：Day 11 快照 + 中港台三城收斂曲線疊圖，社群分享度高；威脅：單日快照偏差大，須累積 Day 7–14 多日切片才有結論 |
| **🔄 數發部 100 億 AI 新創基金 T+29（11/02）— 10 月修正作業要點公告月末平點 + 境外公司放寬納投操作窗口續行**：2026-10-04 中央社續行：8 月底累計 10 家 2.55 億 NT + 民間跟投 5.7 億 NT + 單案上限 2 億 NT + 10 年期（7 投 3 處）+ 10 月修正「主要營運在台的境外公司」可納投 + 創業天使方案 50 億翻倍 100 億 + 2027 預算 464 億 NT + Dealroom 口徑境外資格 = R&D 總部 + 50% R&D 預算與員工 + 50% 營收綁台灣辦公室；平均 2,550 萬 vs 上限 2 億 = 8 倍成長空間 | [中央社 — 數發部百億 AI 投資方案 開放主要營運在台境外公司可納投](https://cna.com.tw/news/afe/202610040029.aspx)、[Dealroom — Taiwan widens 314M AI fund to back offshore startups](https://dealroom.co/news/159720-taiwan-widens-314m-ai-fund-to-back-offshore-startups-with-roots-at-home/)、[TechNews — 百億 AI 基金首年僅投 7,500 萬](https://technews.tw/?p=1520580) | 若公司註冊在矽谷 / 新加坡 / 日本但主要營運在台，可依 Dealroom 口徑的 3 條件自評：R&D 總部設台 + 50% R&D 預算與人力在台 + 50% 營收由台辦公室產生 → 可申請；創業天使翻倍 100 億為另一條獨立路徑 | 機會：T+29 「境外公司放寬 3 條件操作教學 + 10 家受投案例拆解」blog 為少見角度；威脅：10 月修正公告滿 29 日仍無新一輪投資案 pipeline 公開 = 第 1 年投資速度偏慢續行、審核週期可能更長 |
| **🔄 MediaTek Dimensity 9600 Pro 落地台廠 AI 供應鏈信號續延（Q3→Q4）**：9/15 推出 Dimensity 9600 Pro（TSMC 2nm 首批）+ 3nm 版 9600M 瞄準更廣旗艦級；首款針對某大型美國雲服務商設計之 AI 加速器 Q4 進入量產（Reuters 口徑，雲端廠名未公開）；5 月說明已支援 TSMC 與 Intel 兩套先進封裝（客戶可選）+ Arizona 4nm / 3nm 擴產已納入規畫 | [TheStar — MediaTek launches new mobile chip using TSMC's most advanced technology](https://www.thestar.com.my/tech/tech-news/2026/09/15/mediatek-launches-new-mobile-chip-using-tsmc039s-most-advanced-technology-)、[TheStar — MediaTek supports both TSMC and Intel's advanced packaging](https://www.thestar.com.my/tech/tech-news/2026/05/29/taiwan039s-mediatek-says-it-supports-both-tsmc-and-intel039s-advanced-packaging-technologies) | 對一人 SaaS inference infra 層：MediaTek 進入雲端 AI 加速器量產 → 2027 inference 單位成本結構多一條台廠路徑；對做 edge AI / on-device inference：9600 Pro / 9600M 兩檔是 2027 Android 旗艦主力 SoC，決定 edge 推理可用算力下限 | 機會：Q4 量產真實客戶名單（Reuters 僅稱「某大型美國雲服務商」）公開時點為下階段訊號；威脅：客戶身分未揭露、量產爬坡時程未定，單一事件無法轉接案 |
| **🔄 StartupBlink 2026 台灣 20 名國科會續行背景**：年中升至全球第 20 名首度進前 20 強（來自 25 升 20），國發會歸因 Startup Island TAIWAN；累計台灣新創家數破 1 萬家 + 2024 年投資額破 1,002 億 NT 近 10 年新高（2026 年 2 月中企署新創白皮書續行口徑） | [StartupBlink — Taiwan 2026 global ranking](https://www.startupblink.com/)（整體排名入口，確切頁連結國發會 / 中企署白皮書轉述）、[Bnext — moda AI startup 100 billion plan](https://www.bnext.com.tw/article/90239/moda-ai-startup-100billion-plan) | 對獨立開發者：「排名進榜 + 政策容量未滿」組合，是對外（海外投資人 / 母公司）行銷時可快速引用的 2 個高辨識度數字；但要配對「投資速度偏慢」風險做平衡敘述 | 機會：StartupBlink 2026 排名 + 數發部 100 億容量未滿 = 國際公關資料包；威脅：排名數據為第三方指數綜合，不代表個案獲投機率提高 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🔄 Smithery MCP Proxy T+2 Day +2 — Arcade.dev directory 續行為公開 non-proxied registry + Smithery CLI/SDK/API 全部下線 + 已付費退款 5–10 工作日 Day 2** | MCP infrastructure / T+2 Day +2 關閉後首個週日靜置 | 已遷移完成的團隊：收 Arcade.dev directory 中立性觀察；未遷移團隊：用 vendor 官方 MCP URL + 自建或選第三方 OAuth 2.1 identity provider 補 auth / session management | 使用者端免費（Arcade.dev 續行 directory）；原 Pro / Enterprise 退款 Day 2 倒數 | vs 直接 vendor 官方 MCP URL / Pulse MCP / mcp-get；差異在 Smithery 已從 MCP connection manager 退為公開 non-proxied registry、無 auth / session，替代須自建或選第三方 identity provider | 🔴 現用 Smithery 團隊：T+2 Day +2 完成遷移驗收 + 退款到帳檢查；🟡 Arcade.dev 中立性觀察：Arcade 同時運營 ToolBench grading = 利益衝突訊號、2–4 週觀察落實度；🟢 新建 MCP server：直接走 vendor 官方 URL |
| **🔄 OpenAI Evals read-only T+2 Day +2 — Agent Builder EOL T-28（11/30 全下線）進入倒數四週整點** | AI evals / T+2 Day +2 read-only + Agent Builder EOL T-28 | Evals 用戶：匯出 dataset + Promptfoo YAML 轉換；Agent Builder 用戶：以 Agents SDK（Python / TS）rebuild workflow（migration guide 不保證 workflow graph parity，需人工重驗）；reusable prompts 用戶：Playwright / Puppeteer dashboard 爬取（無 API 匯出） | Promptfoo 開源 MIT（第三方口徑為 OpenAI 旗下，待官方確認）；Langfuse 社群版免費 / Pro $59/mo / Enterprise custom | vs ChatGPT Workspace Agents（Agent Builder 替代之一）；Langfuse v4 自稱 up to 165× faster migration dashboard；Langfuse 官方指出 Promptfoo red-teaming 無對應需保留 | 🔴 Agent Builder 用戶：T-28 四週整點 + 建議「rebuild in Agents SDK」而非「workflow graph export」；🟡 Evals 用戶：若尚未匯出 dataset、本週前兩工作日補完；🟢 red-teaming 需求：保留 Promptfoo + Langfuse 混搭 |
| **🔄 GitHub Universe 2026 Mission Report T+4 — Agent HQ + Mission Control + AGENTS.md 跨 repo custom agents + Copilot evaluation framework + 2026-02-04 Claude / Codex 併入 public preview（Pro+ / Enterprise）** | AI agent / Copilot / 跨 repo custom agents | Copilot Pro+ / Enterprise 用戶：以 AGENTS.md 定義跨 repo agent 行為；用 Mission Control 統一監控多 agent；Copilot evaluation framework 寫可重現 benchmark + LLM-graded assertions | Copilot Pro $10/mo + Pro+ $39/mo + Business $19/user/mo + Enterprise $39/user/mo | vs Cursor（Plus $8 / Premium $30 / Super $100 / Ultra $200 5 層）/ Claude Code CLI（Anthropic 自家）；差異在 Mission Control 整合、AGENTS.md 檔格式為 2026 agentic 共通設定底層 | 🟢 Pro+ / Enterprise 用戶：T+4 讀 Mission Report + 11/5 ET Insight webinar T-3 預約；🟡 Cursor / Claude Code 用戶：先觀望 AGENTS.md 共通性是否擴散到其他 agent 工具，再決定是否寫 AGENTS.md |
| **🔄 Claude Agent SDK TypeScript 0.3.302 + Python 0.2.168 T+17** — nested subagents with caps（depth 3 / concurrency 20 / spend caps 自 TS 0.3.219）+ SessionStore（跨 session 儲存狀態，TS alpha）+ skills + plugins + structured outputs + fork subagents TS 0.3.302 預設 on + `CLAUDE_CODE_FORK_SUBAGENT=0` 可關 | TypeScript / Python Agent 框架 / 一人 SaaS 底層 | 需 nested subagents + 跨 session 狀態 + skills + 權限邊界細緻 | SDK 開源免費；Claude API 計費另計；版本綁 Claude Code CLI | vs Vercel AI SDK 7.0.143（WorkflowAgent GA 自 6/25、HarnessAgent 仍 experimental、自 6/25 以來無新 minor release）/ OpenAI Agents SDK（Agent Builder 11/30 遷移目標）/ LangGraph 1.2.x | 🟢 一人 SaaS：Day 15「SessionStore + skills」雙功能實戰 + fork subagents 預設 on 影響評估；🟡 Vercel AI SDK 7：WorkflowAgent 可試裝 production、HarnessAgent 待 GA；🔴 LangGraph：10/1 LangSmith Deployment Standard Units $1 each 成本結構須重估 |
| **🔄 Cursor Composer 2.5 T+20 — Standard $0.50/1M input + $2.50/1M output + Fast $3.00/1M input + $15.00/1M output + Fast 快 ~30% 貴 6× per task + 底層 Kimi K2.5 使成本 ≈ Opus 4.7 1/10 + 五層 Free / Plus $8 / Premium $30 / Super $100 / Ultra $200（Pro $20 legacy only）** | AI IDE / 開發者訂閱選型 | 深度 Claude Code / GPT 用戶：Premium $30 + API credit；低門檻入門：Plus $8；高用量：Super / Ultra | Plus $8 / Premium $30 / Super $100 / Ultra $200 / Teams $30+ / Enterprise custom | vs Claude Code CLI / Codex Cloud / Windsurf / Zed；差異在 6 層訂閱 + Grok 共用週 usage 配額 + 第三方模型按原價計 + Composer 2.5 Fast vs Standard 6× 差距 | 🟢 Pro $20 legacy 續行、不急換；🟡 新用戶：Plus $8 入門；🔴 Super $100 不划算、Premium $30 + API credit 預繳策略較佳 |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：Smithery T+2 關閉後遷移驗收 CLI + Arcade.dev 中立性追蹤 dashboard 🔄

- **痛點來源**：Smithery MCP Proxy T+2 Day +2；關閉後遷移「URL swap 不夠，另需 auth + session management」在台灣 developer 社群尚無系統化驗收工具；Arcade.dev 作為新 directory 承接方同時運營 ToolBench grading = 利益衝突訊號，缺中文追蹤
- **目標客群（台灣／亞洲）**：使用 Smithery 的台灣 developer（估 3,000–5,000 家）+ 自建 MCP server 掛 Smithery registry 的團隊（估 500–1,000 家）+ 掛 Smithery CLI / SDK 的生產線（估 300–800 家）+ 需 OAuth 2.1 + MCP 2025-06-18 protected resource metadata 的團隊（估 100–300 家）
- **技術複雜度**：3/5 — Node.js / Python CLI；Smithery API 舊 server list（下線前已緩存可 fallback）+ vendor 官方 URL mapping（Claude / OpenAI / GitHub / Shopify / Linear 等）+ Claude Code / Cursor / Codex settings.json 自動替換 + Arcade.dev 中立性追蹤（公開 directory 條目隨機抽樣 + 修改紀錄監聽）
- **預估 MRR**：one-off NT$ 30K–120K per 遷移驗收案 × 10–20 案 / 月 = NT$ 300K–2.4M；若做訂閱式「MCP 註冊中立性 + auth / session 掃描 dashboard」→ NT$ 1,000/mo × 150 用戶 ≈ NT$ 150K MRR
- **競品弱點**：台灣中文技術 blog 對 Smithery T+2 後續追蹤近乎零；vendor 官方 URL mapping 中文整合文件零；Arcade.dev 中立性觀察無人追蹤
- **切入建議**：11/02–11/04 寫「Smithery T+2 遷移驗收 checklist + Arcade.dev 中立性 Day +2–4 觀察」blog 系列（分 3 天），同步放 Node CLI 到 npm；分銷 Twitter / HN / Reddit r/mcp / Facebook Taiwan Developers Group

### 點子 2：OpenAI Agent Builder EOL T-28 crunch — rebuild in Agents SDK 顧問案 🔄

- **痛點來源**：Agent Builder 11/30 全下線 + 無 read-only 分期 + migration guide 明示 workflow graph 不保證完整轉譯 + ChatKit 保留但 workflow 透過 ID 可能壞 + reusable prompts 無 API 匯出；台灣中小企業 / SI 顧問案現用 Agent Builder 跑 production LLM 工作流（估 150–400 家）進入最後 28 天 crunch
- **目標客群**：以 Agent Builder 建 production 工作流的台灣中小企 / SI（估 150–400 家）+ Workspace Agents / Agents SDK 轉接目標 + Langfuse / Promptfoo 選型未定群 + workflow graph parity 須人工重驗群
- **技術複雜度**：3/5 — service business + 遷移 CLI；Agents SDK TypeScript / Python workflow re-architecture + Promptfoo YAML scaffold + Langfuse v4 dataset items 轉換 + reusable prompts Playwright 爬取 + ChatKit workflow ID 風險評估
- **預估 MRR**：one-off NT$ 80K–380K per client × 3–8 clients / 本月剩 4 週 = NT$ 240K–3M；T-28 crunch 加價 50–100% 可達 NT$ 160K–760K per client
- **競品弱點**：台灣尚無 Agent Builder EOL 專門遷移服務；OpenAI 官方 migration guide 只給框架、缺台灣在地整合顧問；workflow graph parity 人工重驗中文 FAQ 近零
- **切入建議**：11/02–11/03 寫「Agent Builder EOL T-28 crunch 加價接案 landing + workflow graph parity 人工重驗 checklist」；11/09 推 Playwright reusable prompts 爬取 CLI；11/23 EOL 前 1 週關閉接案

### 點子 3：iPhone Duo 中港台三城二手溢價收斂曲線 dashboard 🆕

- **痛點來源**：Day 11 Week 2 Day 4 工作日對照窗口打開；中國（29,000 預售 → 1,000–1,500 開賣日 ≈ 96% 崩潰）、香港（HK$2,000+ → HK$501–1,001 ≈ 10 日內 60–75% 收斂）、台灣（Yahoo 奇摩 / 露天 / shopee / jyes 多平台）三城結構差（店面文化、水客流動、繁簡體客群）使收斂速度分化
- **目標客群**：3C 消費內容站 / 水貨商 / 二手市集的台灣 Yahoo / 露天 / shopee 賣家（估 5,000+）+ Threads / Dcard 消費分享用戶 + 行銷 agency 做蘋果新品檔期 ROI 分析（估 300 家）
- **技術複雜度**：2/5 — Node.js + Playwright 爬 Yahoo 拍賣 / 露天 / shopee 公開商品搜尋頁；時序資料存 Postgres / Supabase；Day 11–17 累積 7 天切片即可畫出收斂曲線；對比 unwire 香港、caixin / cnyes 中國數據
- **預估 MRR**：one-off NT$ 20K–60K per 內容站授權 × 5–15 站 = NT$ 100K–900K；若做公開免費 dashboard 走流量 / 廣告 → 單檔新品可帶 10–30 萬次閱覽
- **競品弱點**：unwire 香港、caixin 中國各自報導、台灣中文站無人做三城疊圖；單一 Yahoo 奇麼拍賣爬蟲人人會寫，但「跨城市 FOMO 收斂」切角稀有
- **切入建議**：11/02 開爬蟲、11/03 第一次切片、11/06 Week 2 Day 8 寫「中港台三城 iPhone Duo 二手溢價收斂曲線疊圖」blog；分銷 Threads / Dcard 3C 版 / Facebook Taiwan Mobile Group

## 🧰 工具堆疊更新

- **🔄 Vercel AI SDK 7.0.143**：WorkflowAgent 自 6/25 GA 已 production-ready（durable step + crash survival）；HarnessAgent 仍 experimental（10 adapters + tool search + toolCallConcurrency + streamRetries + WebSocket chat）；自 6/25 以來無新 minor release，為第三方口徑；對照 Claude Agent SDK TS 0.3.302 fork subagents 預設 on
- **🔄 Promptfoo（OpenAI 旗下第三方口徑 MIT 授權）vs Langfuse v4**：Promptfoo 本地 YAML CLI + CI 整合；Langfuse 社群版免費 / Pro $59/mo，可跑 production logs；混搭策略保留 Promptfoo red-teaming 功能
- **🔄 MCP spec 2025-06-18（含 2026-07-28 大改）**：Streamable HTTP、MCP Tasks、OAuth 2.1 強制 PKCE[^pkce]、protected resource metadata、authorization server metadata、resource indicators；為 Smithery 下線後 auth / session 替代選型最大公約數

## ⚡ 今日行動建議

- [ ] **Smithery T+2 遷移驗收 CLI 原型 + Arcade.dev 中立性 Day +2 觀察記錄**（成本：2–3 小時；產出：GitHub repo 公開 + 1 篇中文 blog）
- [ ] **Agent Builder EOL T-28 crunch 顧問案 landing page**（成本：2 小時；產出：landing + 3 封 outbound 給既有 OpenAI SI 顧問案）
- [ ] **iPhone Duo 三城收斂爬蟲 Day 11 第一次切片**（成本：3 小時；產出：Playwright scripts + Postgres schema + Day 11 快照 CSV）
- [ ] **Anthropic S-1 Day 7 roadshow T-7 日倒計時**：追蹤 EDGAR amendment（價位 / 股數 / 募資規模填入）首個合理時窗（≤ 11/02 填入視為「準點 roadshow」強訊號）
- [ ] **數發部 100 億 AI T+29 境外公司 3 條件自評表範本**（成本：1 小時 Notion template；產出：對外諮詢 lead magnet）

## ⏳ 待觀察

- **Smithery T+3 Day +3（11/03 週一工作日對照）**：Arcade.dev directory 第一週結束前是否出現中立性事件（例如同時運營 ToolBench grading 的廠商條目被偏袒）
- **OpenAI Agent Builder EOL T-27（11/03）**：OpenAI 是否在最後四週補發 workflow graph export 工具（migration guide 現未承諾、社群請求屢見）
- **Anthropic S-1 amendment 填入時點**：Day 7 → Day 8（11/03）是價位 / 股數 / 募資規模填入的首個合理時窗（11/9 roadshow 準點情境）；若至 11/04 仍空白，roadshow 延至 11/16 或 11/23 情境機率升高
- **iPhone Duo Day 12 Week 2 Day 5（11/03）**：Day 11–Day 14 四天平均收斂速度為台灣與中港曲線定位的首個客觀讀數
- **MediaTek 雲端 AI 加速器 Q4 量產真實客戶**：Reuters 僅稱「某大型美國雲服務商」；若 11 月前後揭露客戶身分（Google / Meta / AWS），台廠 AI 供應鏈利基續行強度分化
- **Vercel AI SDK HarnessAgent GA**：自 6/25 以來 experimental 已滿 4 個月，若 11 月 GA 將改變「TS Agent 底層 2 強」對決格局

[^mcp]: Model Context Protocol，Anthropic 於 2024 年提出的開放協定，用統一介面讓 LLM agent 連接外部工具、資料來源與系統；2025-06-18 版本加入 OAuth 2.1 與 Streamable HTTP、2026-07-28 大改補上 MCP Tasks 等能力，是今年 agent 生態主要互通層。

[^safe]: Simple Agreement for Future Equity，Y Combinator 2013 推出的早期募資合約；投資人先給現金、換取未來某輪定價時轉換股權的權利，發行方帳上以公允價值變動記錄 non-cash 損益，常在 IPO 前因市值快速攀升而出現巨額帳面損失。

[^arcade-dev]: 專注於 AI agent 工具呼叫與授權的美國新創，自建 LLM 認證層與工具目錄；Smithery MCP Proxy 下線後接手 directory 承運，但同時運營 ToolBench 評分，被外界點名為潛在利益衝突訊號。

[^promptfoo]: 開源 MIT 授權的 LLM evaluation 與 red-teaming CLI，透過本地 YAML 定義測試集並串進 CI；第三方口徑稱其已被 OpenAI 收攏為官方 Evals 遷移目標，官方公告仍待確認。

[^pkce]: Proof Key for Code Exchange，OAuth 2.0 的授權碼交換擴充（RFC 7636）；client 以隨機 verifier 衍生 challenge，防止授權碼在重導過程中被攔截重用。OAuth 2.1 將 PKCE 自選用升為所有 public client 強制使用。

[^dealroom]: 總部位於阿姆斯特丹的歐洲創投情報平台，蒐錄全球新創估值、募資輪次與投資人資料；許多政府基金與 LP 將其當作公開口徑來源，本次台灣數發部 100 億 AI 境外公司放寬條件即以其口徑拆解為 3 項門檻。

## 📚 引用來源

1. [OpenAI deprecations — Evals read-only 10/31, Agent Builder 11/30](https://developers.openai.com/docs/deprecations) — 2026-11-02 存取
2. [MCP Directory — OpenAI AgentKit deprecation migration guide](https://mcp.directory/blog/openai-agentkit-deprecation-2026) — 2026-10
3. [eCorpIT — OpenAI shuts Agent Builder, Evals and reusable prompts on 30 November 2026](https://ecorpit.com/openai-agent-builder-evals-prompts-shutdown-november-2026/) — 2026-10
4. [XTB — Anthropic files prospectus ahead of IPO with ANT ticker on Nasdaq](https://www.xtb.com/en/market-analysis/anthropic-files-prospectus-ahead-of-ipo-with-ant-ticker-on-nasdaq-the-launch-date-and-price-remain-a-mystery) — 2026-10-26
5. [parameter.io — Claude creator prepares $100 billion public offering ahead of Thanksgiving](https://parameter.io/claude-creator-prepares-100-billion-public-offering-ahead-of-thanksgiving/) — 2026-10
6. [中央社 — 數發部百億 AI 投資方案 開放主要營運在台境外公司可納投](https://cna.com.tw/news/afe/202610040029.aspx) — 2026-10-04
7. [Dealroom — Taiwan widens 314M AI fund to back offshore startups with roots at home](https://dealroom.co/news/159720-taiwan-widens-314m-ai-fund-to-back-offshore-startups-with-roots-at-home/) — 2026-10
8. [digitimes — iPhone Duo 正式開賣 交期排到 2027](https://www.digitimes.com.tw/tech/dt/n/shwnws.asp?id=772472) — 2026-10
9. [unwire — iPhone Duo 轉售加價回落](https://unwire.hk/2026/10/20/iphone-duo-scalpers-resale-price-drop/mobile-phone/) — 2026-10-20
10. [unwire — iPhone Duo 香港開售首批機水位](https://unwire.hk/2026/10/23/iphone-duo-sin-tat-launch-buyback-prices/mobile-phone/) — 2026-10-23
11. [TheStar — MediaTek launches new mobile chip using TSMC's most advanced technology](https://www.thestar.com.my/tech/tech-news/2026/09/15/mediatek-launches-new-mobile-chip-using-tsmc039s-most-advanced-technology-) — 2026-09-15
12. [TheStar — MediaTek supports both TSMC and Intel's advanced packaging](https://www.thestar.com.my/tech/tech-news/2026/05/29/taiwan039s-mediatek-says-it-supports-both-tsmc-and-intel039s-advanced-packaging-technologies) — 2026-05-29
13. [Vercel — AI SDK 7 changelog](https://vercel.com/changelog/ai-sdk-7) — 2026-06-25
14. [DevelopersDigest — What's New in Vercel AI SDK 7 (October 2026)](https://www.developersdigest.tech/blog/vercel-ai-sdk-whats-new-2026) — 2026-10-17
15. [Arcade.dev — Guide to MCP '26](https://arcade.dev/mcp26) — 2026
16. [Bnext — moda AI startup 100 billion plan](https://www.bnext.com.tw/article/90239/moda-ai-startup-100billion-plan) — 2026-03
17. [TechNews — 百億 AI 基金首年僅投 7,500 萬](https://technews.tw/?p=1520580) — 2026
