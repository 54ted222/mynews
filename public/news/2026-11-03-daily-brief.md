---
title: 每日創業情報 — 2026-11-03
date: 2026-11-03
tags: 創業情報, AI 產業, SaaS, 台灣
summary: Smithery T+3 工作日對照窗口打開 + OpenAI Evals read-only T+3 Agent Builder EOL T-27 進最後 27 天 + Anthropic S-1 Day 8 WSJ 傳目標 11/16 pricing week + iPhone Duo Day 12 工作日第一讀數 + 數發部 100 億 AI T+30 整月平點。
keywords: Smithery MCP Proxy T+3 shutdown weekday Arcade.dev acquisition August 5, OpenAI Evals read-only T+3 Agent Builder EOL T-27 Agents SDK migration workflow graph, Anthropic S-1 Day 8 ANT Nasdaq WSJ November 16 pricing week roadshow T-6, iPhone Duo Day 12 Week 2 Day 5 Taiwan 露天 shopee Yahoo 奇摩 二手 收斂, 數發部 100 億 AI T+30 境外公司 Dealroom R&D 50% 營收 50%, Claude Agent SDK TypeScript 0.3.302 subagent depth 3 concurrency 20 session store, Cursor Composer 2.5 T+21 Kimi K2.5 Standard Fast 6x pricing, Vercel AI SDK 7 HarnessAgent experimental 10 adapters WebSocket chat, Lemon Squeezy Stripe Managed Payments 2026 managed_payments integration, Linux Foundation Agentic AI Foundation December 2025 MCP AGENTS.md governance
---

# 每日創業情報 — 2026-11-03

## 🎯 今日 TL;DR

- **🔄 Smithery MCP[^mcp] Proxy T+3 Day +3 — 工作日對照窗口打開 + Arcade 收購 Smithery 鏈結浮現**：10/31 UTC 00:00 下線後第 3 日；RuntimeWire 口徑揭露 Arcade.dev[^arcade-dev] 2026-08-05 已收購 Smithery，而非單純接手 directory——這改寫前兩日「Arcade 僅承運 directory」的中立性框架，應作「Arcade 整併 Smithery 用戶群 + 既有 ToolBench grading」的利益衝突升級版讀；對一人 SaaS：原持 Arcade 中立性觀察的升級版 → 「同一公司既做 registry 又做 grading」整併案例，優先選 vendor 官方 MCP URL
- **🔄 OpenAI Evals read-only T+3 Day +3 — Agent Builder EOL T-27 進最後 27 天**：T-28 → T-27，Thanksgiving（11/26）前最後 23 天為美國窗口、台灣 SI 顧問案剩 27 天；migration guide 明示 Agent Builder workflow 匯出為 Agents SDK code（TS / Python 二選一）、ChatKit 透過 workflow ID 可能壞；Evals 遷移目標仍為 Promptfoo[^promptfoo]（MIT）＋ Langfuse v4
- **🔄 Anthropic S-1 Day 8 T+8 — WSJ 傳目標 11/16 當週 pricing week（新訊號）**：10/26 公開後第 8 天；Leverage Shares 口徑整合 WSJ：目標 11/16 當週 pricing + 11/10 為 roadshow 最早合法起始日（登記書公開滿 15 天）；T-7 → T-6 日倒計時至 11/9 roadshow 情境起始日；1H26 營收 163 億美元、淨損 807 億美元（724 億 SAFE[^safe]/可轉換債 non-cash 公允價值變動）；兩名客戶占營收 25%
- **🔄 iPhone Duo Day 12 Week 2 Day 5（11/03 週二）— 工作日對照窗口首個完整讀數日**：Week 2 Day 5 進入工作日第二日，首個完整工作日對照讀數日；大陸端 10/23 開賣 → 10/26 「15,799 元」實際成交（15,999 原價、補貼 200 元），不到 3 日破發；香港 HK$2,000+ → HK$501–1,001 已開封回收價 10 日內 60–75% 收斂；台灣 Yahoo 奇摩 / 露天 / shopee 等平台 Day 12 第一次「工作日切片」為台灣 FOMO 強度對照中港曲線定位的關鍵讀數
- **🔄 數發部 100 億 AI 新創基金 T+30（11/03）— 整月平點 + 境外公司放寬公告滿 1 個月仍無新 pipeline**：境外公司放寬納投（Dealroom[^dealroom] 口徑 R&D 總部 + 50% R&D 預算與員工 + 50% 營收綁定台灣辦公室）滿 30 日仍未見新一輪 pipeline 公開；創業天使方案 50 億翻倍 100 億；2027 預算 464 億 NT；平均 2,550 萬 vs 上限 2 億 = 8 倍成長空間；賴清德 2026 創投年會 240 萬小時算力續行
- **🔄 Lemon Squeezy × Stripe Managed Payments 整合 managed_payments 標誌已入 API（Day 215+ 新訊號擴散）**：2024 Stripe 收購 Lemon Squeezy → 2026-01 第一哩程 Managed Payments → 2026-04 managed_payments flag 進 Checkout Sessions + Payment Links API；對一人 SaaS 跨境支付：Stripe 的 MoR[^mor] 版本 1 已可用，但不支援 Elements、Billing 須另購；Lemon Squeezy 口徑 5% + $0.50 國際另加 1.5%，Stripe Managed 標準費率再加 3.5%
- **🔄 Claude Agent SDK TypeScript 0.3.302 + Python 0.2.168 T+18 — nested subagents with caps 續行**：nested subagents 預設深度 3 / concurrency 20 + maxBudgetUsd + SessionStore（TS alpha）+ skills + plugins + fork subagents 預設 on（`CLAUDE_CODE_FORK_SUBAGENT=0` 可關）；對照 Vercel AI SDK 7 HarnessAgent 仍 experimental、10 adapters + WebSocket chat
- **🔄 Linux Foundation Agentic AI Foundation（AAIF）governance 擴散 Day 329**：2025-12-09 成立至今將滿 329 日、Platinum 成員含 AWS / Anthropic / Block / Bloomberg / Cloudflare / Google / Microsoft / OpenAI；founding projects：MCP（Anthropic）+ goose（Block）+ AGENTS.md（OpenAI）；對獨立開發者：AGENTS.md 作為跨 agent 工具共通設定底層已開始實質擴散（Cursor / Claude Code / GitHub Agent HQ）

## 🔄 昨日追蹤

- **🔄 Smithery MCP Proxy T+2 Day +2 → T+3 Day +3**：進入關閉後第 3 日、台北週二工作日切片；Arcade 收購事實（2026-08-05）浮現改寫中立性觀察框架為「同一公司整併 directory + grading」利益衝突升級版
- **🔄 OpenAI Evals read-only T+2 Day +2 → T+3 Day +3**：Agent Builder EOL T-28 → T-27 進最後四週內
- **🔄 Anthropic S-1 Day 7 T+7 → Day 8 T+8**：WSJ 口徑進入新訊號區，目標 11/16 當週 pricing week；11/9 roadshow T-6 日倒計時
- **🔄 iPhone Duo Day 11 Week 2 Day 4 → Day 12 Week 2 Day 5**：Day 12 進入工作日第二日，首個完整工作日切片讀數
- **🔄 數發部 100 億 AI T+29 → T+30**：整月平點，10 月修正公告滿 30 日仍無新一輪 pipeline，審核週期恐續行偏慢
- **🔄 Claude Agent SDK TypeScript 0.3.302 T+17 → T+18**：fork subagents 預設 on 續行
- **🔄 Cursor Composer 2.5 T+20 → T+21**：Standard $0.50/1M input + $2.50/1M output、Fast $3.00/1M input + $15.00/1M output、6× per-task 差距試用 Day 5

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🔄 iPhone Duo Day 12 Week 2 Day 5（11/03 週二）— 工作日對照窗口首個完整讀數日**：Week 1 已過（10/23 開賣 + 禁 walk-in + 首波供貨量交期 2027-01-25）；台灣首批到貨量估 <20,000 台（9/17 整機組裝良率略高於 60%）；對照曲線：中國 10/26「15,799 vs 15,999」實際成交，官方補貼 200 元 ≈ 不到 3 日破發 + 香港 HK$2,000+ → HK$501–1,001 已開封回收價 10 日內 60–75% 收斂；台灣 Yahoo 奇摩拍賣 / 露天 / shopee / jyes.com.tw 水貨商 Day 12 工作日切片是台灣 FOMO 強度對照中港曲線定位的關鍵讀數 | [digitimes — iPhone Duo 開賣 交期排到 2027](https://www.digitimes.com.tw/tech/dt/n/shwnws.asp?id=772472)、[CNA — iPhone Duo 中國市場熱銷 發貨排至明年](https://www.cna.com.tw/news/acn/202610170102.aspx)、[unwire — iPhone Duo 轉售加價回落](https://unwire.hk/2026/10/20/iphone-duo-scalpers-resale-price-drop/mobile-phone/)、[unwire — iPhone Duo 香港開售首批機水位](https://unwire.hk/2026/10/23/iphone-duo-sin-tat-launch-buyback-prices/mobile-phone/)、[雪球 — iPhone Duo 補貼後 15,799 元 10/26 實際成交](https://www.xueqiu.com/9252950692/413807010) | 一次性拍賣爬蟲 → 轉售溢價快照 blog（Yahoo / 露天 / shopee / jyes）；對比亞洲三城收斂曲線是「低成本高點閱」內容切入點 | 機會：Day 12 工作日切片 + 中港台三城收斂曲線疊圖社群分享度高；威脅：Day 12 單一切片仍偏差大，須累 Day 7–14 多日切片才有結論 |
| **🔄 數發部 100 億 AI 新創基金 T+30（11/03）— 整月平點 + 境外公司放寬 1 個月未見新 pipeline + 創投年會 240 萬小時算力續行**：10 月修正「主要營運在台的境外公司」可納投滿 30 日無新一輪 pipeline；8 月底累計 10 家 2.55 億 NT + 民間跟投 5.7 億 NT + 單案上限 2 億 NT；賴清德 2026 創投年會表示再捐 120 萬小時算力、累計 240 萬小時供新創與學界；2027 預算 464 億 NT；平均 2,550 萬 vs 上限 2 億 = 8 倍成長空間；Dealroom 口徑境外資格 = R&D 總部 + 50% R&D 預算與員工 + 50% 營收綁台灣辦公室 | [中央社 — 數發部百億 AI 投資方案 開放主要營運在台境外公司可納投](https://cna.com.tw/news/afe/202610040029.aspx)、[Dealroom — Taiwan widens 314M AI fund](https://dealroom.co/news/159720-taiwan-widens-314m-ai-fund-to-back-offshore-startups-with-roots-at-home/)、[TechNews — 百億 AI 基金首年僅投 7,500 萬](https://technews.tw/?p=1520580)、[udn — 2026 創投年會賴清德 240 萬小時](https://money.udn.com/money/amp/story/5607/9596112) | 若公司註冊在矽谷 / 新加坡 / 日本但主要營運在台，可依 Dealroom 口徑 3 條件自評；創業天使翻倍 100 億為另一路徑；申請算力補助可依 240 萬小時池尋對接窗口 | 機會：T+30 整月平點「境外公司放寬 3 條件實測」+ 240 萬小時算力池申請教學為少見角度；威脅：10 月修正公告滿 30 日無新 pipeline = 第 1 年投資速度續行偏慢、審核週期恐更長 |
| **🔄 中小微企業 8 年 1,000 億轉型基金 + 42.5 億 4 年社發計畫 (立法院新會期送審)**：賴總統宣布「中小微企業多元振興發展計畫」8 年 1,000 億升級轉型基金 + 「中小微企業轉型升級發展條例」草案；行政院會通過 2026–2029 中小微企業社會發展計畫 42.5 億 NT + 培育 5.3 萬人次轉型人才 + 10 萬家次企業碳排資料；力拚立法院新會期送審 | [CNA — 賴總統 8 年 1,000 億助攻中小微轉型](https://cna.com.tw/news/ahel/202608180034.aspx)、[udn — 卓榮泰 1,000 億中小微 立法院下會期送審](https://udn.com/news/story/6656/9564541)、[uanalyze — 政院 4 箭助攻中小微](https://uanalyze.com.tw/articles/5019847781) | 對接案 / 一人 SaaS：若替中小微企業做數位轉型顧問 / SaaS 導入 → 1,000 億基金 + 42.5 億社發計畫未來 4 年會逐批釋放；對有碳排資料需求的台灣 B2B SaaS → 10 萬家次企業碳排資料為新建資料集機會 | 機會：T+ 立法院新會期送審倒計時 + 「中小微企業數位轉型 SaaS 補助申請完整攻略」中文教學 blog；威脅：補助最終金額、對象、速率不確定，條例送審時程可能滯後，接案現金流轉型不宜綁補助 |
| **🔄 創新板「亞洲創新籌資平台」2028 目標 1,500 億 NT 募資續行**：行政院 AI 新十大建設將創新板定位為「亞洲創新籌資平台」、目標 2028 年達到每年募資 1,500 億 NT；2024 投資額破 1,002 億 NT 近 10 年新高、2025 底新創家數 10,552 家 | [udn money — 創新板進擊接軌國際](https://money.udn.com/money/amp/story/5607/9596112) | 對台灣獨立開發者：若 SaaS 進入 Series A 以上，創新板為可選的本地上市路徑；短期 1,500 億 2028 目標為後端訊號、不影響近期募資策略 | 機會：創新板上市條件 vs 美股借殼 vs 新加坡上市比較文；威脅：2028 目標為前瞻性宣示，實質流量仍待觀察 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🔄 Smithery MCP Proxy T+3 Day +3 — Arcade.dev 整併關係浮現（2026-08-05 收購非承運）+ Arcade 直接管理 Smithery directory + Smithery CLI/SDK/API 全部下線 + 已付費退款 5–10 工作日 Day 3** | MCP infrastructure / T+3 Day +3 工作日對照窗口打開 | 已遷移完成的團隊：收 Arcade.dev directory 中立性觀察（升級版：Arcade 擁有 Smithery，不只是運營 directory）；未遷移團隊：用 vendor 官方 MCP URL + 自建或選第三方 OAuth 2.1 identity provider 補 auth / session management | 使用者端免費（Arcade.dev 續行 directory）；原 Pro / Enterprise 退款 Day 3 倒數 | vs 直接 vendor 官方 MCP URL / Pulse MCP / mcp-get；差異在 Arcade 2026-08-05 已收購 Smithery = 原「Smithery 退為 non-proxied registry + Arcade 承運 directory」實為 Arcade 完全併購 Smithery 用戶群 + 同時運營 ToolBench grading | 🔴 現用 Smithery 團隊：T+3 Day +3 完成遷移驗收 + 退款到帳檢查；🟡 Arcade 中立性觀察升級版：擁有者直接管理 directory + grading = 利益衝突倍增、2–4 週觀察落實度；🟢 新建 MCP server：直接走 vendor 官方 URL |
| **🔄 OpenAI Evals read-only T+3 Day +3 — Agent Builder EOL T-27（11/30 全下線）** | AI evals / T+3 Day +3 read-only + Agent Builder EOL T-27 進最後 27 天 | Evals 用戶：匯出 dataset + Promptfoo YAML 轉換；Agent Builder 用戶：workflow 匯出 Agents SDK code（TS / Python）；reusable prompts 用戶：Playwright / Puppeteer dashboard 爬取（無 API 匯出） | Promptfoo 開源 MIT；Langfuse 社群版免費 / Pro $59/mo / Enterprise custom | vs ChatGPT Workspace Agents（Agent Builder 第二替代路徑）；Langfuse 保留 Promptfoo red-teaming | 🔴 Agent Builder 用戶：T-27 進最後 27 天 + 建議「rebuild in Agents SDK」而非「workflow graph export」（ChatKit workflow ID 可能壞）；🟡 Evals 用戶：若尚未匯出 dataset，Thanksgiving 前補完；🟢 red-teaming 需求：保留 Promptfoo + Langfuse 混搭 |
| **🔄 Lemon Squeezy × Stripe Managed Payments 整合 managed_payments API flag Day 215+** | 跨境支付 / MoR 整合 / 一人 SaaS 跨境結帳 | 以 Stripe Checkout Sessions / Payment Links + managed_payments flag 使用 Stripe 自家 MoR 服務；間接稅 80+ 國 / 35 產品類別 / 欺詐與爭議管理 / 交易級客戶支持 | Stripe 標準支付處理費 + managed_payments 每筆 3.5%（第三方口徑）；對照 Lemon Squeezy 5% + $0.50 國際 +1.5%、Paddle 5% + $0.50 | vs Lemon Squeezy（Stripe 2024 已收購，但仍保留獨立品牌）/ Paddle（獨立 MoR）/ Polar.sh / Dodo Payments / Creem（≈ 4% + $0.40）；差異在 Stripe Managed Payments 僅支援 Checkout / Payment Links、不支援 Elements、Billing 須另購 | 🟢 新 SaaS 跨境：Stripe Managed Payments（已付 Stripe = 單帳號單整合）；🟡 Billing 需求：仍以 Stripe Billing + Managed 分帳；🔴 Lemon Squeezy 既有用戶：短期維持、觀察 Stripe 整併節奏 |
| **🔄 Claude Agent SDK TypeScript 0.3.302 + Python 0.2.168 T+18** — nested subagents with caps（depth 3 / concurrency 20 / maxBudgetUsd 自 TS 0.3.219）+ SessionStore（跨 session 儲存狀態，TS alpha）+ skills + plugins + structured outputs + fork subagents TS 0.3.302 預設 on + `CLAUDE_CODE_FORK_SUBAGENT=0` 可關 | TypeScript / Python Agent 框架 / 一人 SaaS 底層 | 需 nested subagents + 跨 session 狀態 + skills + 權限邊界細緻 | SDK 開源免費；Claude API 計費另計；版本綁 Claude Code CLI | vs Vercel AI SDK 7（WorkflowAgent GA 自 6/25、HarnessAgent 仍 experimental + 10 adapters + tool search + toolCallConcurrency + streamRetries + WebSocket chat）/ OpenAI Agents SDK（Agent Builder 11/30 遷移目標）/ LangGraph | 🟢 一人 SaaS：T+18「SessionStore + skills」+ fork subagents 預設 on 影響評估；🟡 Vercel AI SDK 7：WorkflowAgent 可試裝 production、HarnessAgent 待 GA；🔴 LangGraph：LangSmith Deployment Standard Units 成本重估 |
| **🔄 Cursor Composer 2.5 T+21 — Standard $0.50/1M input + $2.50/1M output + Fast $3.00/1M input + $15.00/1M output + 底層 Kimi K2.5 使成本 ≈ Opus 4.7 1/10 + 五層 Free / Plus $8 / Premium $30 / Super $100 / Ultra $200（Pro $20 legacy only）** | AI IDE / 開發者訂閱選型 | 深度 Claude Code / GPT 用戶：Premium $30 + API credit；低門檻入門：Plus $8；高用量：Super / Ultra | Plus $8 / Premium $30 / Super $100 / Ultra $200 / Teams $30+ / Enterprise custom | vs Claude Code CLI / Codex Cloud / Windsurf / Zed；差異在 6 層訂閱 + Grok 共用週 usage 配額 + 第三方模型按原價計 + Composer 2.5 Fast vs Standard 6× 差距 | 🟢 Pro $20 legacy 續行、不急換；🟡 新用戶：Plus $8 入門；🔴 Super $100 不划算、Premium $30 + API credit 預繳策略較佳 |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：Arcade/Smithery 整併 directory 中立性追蹤 dashboard — T+3 Day +3 整併案例升級版 🔄

- **痛點來源**：Smithery MCP Proxy T+3 Day +3；原 Day +1、Day +2 的「Smithery 退為 non-proxied registry + Arcade 承運 directory」中立性觀察，Day +3 更新為「Arcade 2026-08-05 已收購 Smithery，directory 完全併進 Arcade」—— 擁有者直接管理 registry + 同時運營 ToolBench grading = 利益衝突升級版；台灣中文技術社群尚無系統化追蹤
- **目標客群（台灣／亞洲）**：使用 Smithery 的台灣 developer（估 3,000–5,000 家）+ 自建 MCP server 掛 Smithery registry 的團隊（估 500–1,000 家）+ 掛 Smithery CLI / SDK 的生產線（估 300–800 家）+ OAuth 2.1 + MCP 2025-06-18 protected resource metadata 需求群（估 100–300 家）
- **技術複雜度**：3/5 — Node.js / Python CLI；Smithery API 舊 server list（下線前已緩存可 fallback）+ vendor 官方 URL mapping（Claude / OpenAI / GitHub / Shopify / Linear 等）+ Claude Code / Cursor / Codex settings.json 自動替換 + Arcade.dev 中立性追蹤（公開 directory 條目隨機抽樣 + 修改紀錄監聽 + ToolBench 評分交叉比對）
- **預估 MRR**：one-off NT$ 30K–120K per 遷移驗收案 × 10–20 案 / 月 = NT$ 300K–2.4M；若做訂閱式「MCP 註冊中立性 + auth / session 掃描 dashboard」→ NT$ 1,000/mo × 150 用戶 ≈ NT$ 150K MRR
- **競品弱點**：台灣中文技術 blog 對 Arcade 收購 Smithery（2026-08-05）鏈結及其對中立性影響尚無追蹤；vendor 官方 URL mapping 中文整合文件零；ToolBench grading × directory ownership 交叉觀察無人做
- **切入建議**：11/03–11/05 寫「Arcade 收購 Smithery 鏈結浮現：T+3 中立性觀察升級版」+ 「vendor 官方 MCP URL mapping 中文完整表」+「ToolBench × directory ownership 利益衝突個案追蹤」blog 系列（分 3 天）；同步放 Node CLI 到 npm；分銷 Twitter / HN / Reddit r/mcp / Facebook Taiwan Developers Group

### 點子 2：OpenAI Agent Builder EOL T-27 crunch — 「workflow graph parity 人工重驗 service」接案 🔄

- **痛點來源**：Agent Builder 11/30 全下線 + 無 read-only 分期 + migration guide 明示 workflow 匯出為 Agents SDK code（TS / Python 二選一）、不保證 workflow graph 100% 轉譯 + ChatKit 保留但 workflow 透過 ID 可能壞 + reusable prompts 無 API 匯出；台灣中小企業 / SI 顧問案現用 Agent Builder 跑 production LLM 工作流（估 150–400 家）進入最後 27 天 crunch
- **目標客群**：以 Agent Builder 建 production 工作流的台灣中小企 / SI（估 150–400 家）+ Workspace Agents / Agents SDK 轉接目標 + Langfuse / Promptfoo 選型未定群 + workflow graph parity 須人工重驗群 + ChatKit workflow ID 風險評估群
- **技術複雜度**：3/5 — service business + 遷移 CLI；Agents SDK TypeScript / Python workflow re-architecture + Promptfoo YAML scaffold + Langfuse v4 dataset items 轉換 + reusable prompts Playwright 爬取 + ChatKit workflow ID 風險評估 + offline eval 設計
- **預估 MRR**：one-off NT$ 80K–380K per client × 3–8 clients / 本月剩 4 週 = NT$ 240K–3M；T-27 crunch 加價 50–100% 可達 NT$ 160K–760K per client
- **競品弱點**：台灣尚無 Agent Builder EOL 專門遷移服務；OpenAI 官方 migration guide 只給框架、缺台灣在地整合顧問；workflow graph parity 人工重驗中文 FAQ 近零；ChatKit workflow ID 風險中文評估模板零
- **切入建議**：11/03–11/04 寫「Agent Builder EOL T-27 crunch 接案 landing + workflow graph parity 人工重驗 checklist + ChatKit workflow ID 風險自評」；11/09 推 Playwright reusable prompts 爬取 CLI；11/23 EOL 前 1 週關閉接案

### 點子 3：iPhone Duo 中港台三城二手溢價收斂曲線 dashboard — Day 12 工作日切片 🔄

- **痛點來源**：Day 12 Week 2 Day 5 工作日對照窗口首個完整讀數日；中國（10/26 15,799 vs 15,999 補貼後實際成交，不到 3 日破發）、香港（HK$2,000+ → HK$501–1,001 ≈ 10 日內 60–75% 收斂）、台灣（Yahoo 奇摩 / 露天 / shopee / jyes 多平台）三城結構差（店面文化、水客流動、繁簡體客群）使收斂速度分化；台灣首批到貨量 <20,000 台（9/17 良率 60%）稀缺度推升
- **目標客群**：3C 消費內容站 / 水貨商 / 二手市集的台灣 Yahoo / 露天 / shopee 賣家（估 5,000+）+ Threads / Dcard 消費分享用戶 + 行銷 agency 做蘋果新品檔期 ROI 分析（估 300 家）
- **技術複雜度**：2/5 — Node.js + Playwright 爬 Yahoo 拍賣 / 露天 / shopee 公開商品搜尋頁；時序資料存 Postgres / Supabase；Day 12–18 累積 7 天切片即可畫出收斂曲線；對比 unwire 香港、cnyes / xueqiu 中國數據
- **預估 MRR**：one-off NT$ 20K–60K per 內容站授權 × 5–15 站 = NT$ 100K–900K；若做公開免費 dashboard 走流量 / 廣告 → 單檔新品可帶 10–30 萬次閱覽
- **競品弱點**：unwire 香港、xueqiu 中國各自報導、台灣中文站無人做三城疊圖；單一 Yahoo 奇摩拍賣爬蟲人人會寫，但「跨城市 FOMO 收斂」切角稀有；台灣首批 <20,000 稀缺度 × FOMO 強度對照曲線中文獨家
- **切入建議**：11/03 開爬蟲 + Day 12 第一次工作日切片 → 11/06 Week 2 Day 8 寫「中港台三城 iPhone Duo 二手溢價收斂曲線疊圖（Day 11–Day 15 五日切片）」blog；分銷 Threads / Dcard 3C 版 / Facebook Taiwan Mobile Group

## 🧰 工具堆疊更新

- **🔄 Vercel AI SDK 7**：WorkflowAgent 自 6/25 GA 已 production-ready（durable step + crash survival）；HarnessAgent 仍 experimental（10 adapters + tool search + toolCallConcurrency + streamRetries + WebSocket chat）；bridge-backed harness（Claude Code / Codex）需 @ai-sdk/sandbox-vercel 等真實 network sandbox、host-runtime harness（Pi）可用 @ai-sdk/sandbox-just-bash；對照 Claude Agent SDK TS 0.3.302 fork subagents 預設 on
- **🔄 Lemon Squeezy × Stripe Managed Payments**：2026-01 第一哩程 Managed Payments → 2026-04 managed_payments flag 進 Stripe Checkout Sessions + Payment Links API；間接稅 80+ 國 / 35 類別；不支援 Elements、Billing 須另購；Lemon Squeezy 5% + $0.50 國際 +1.5%、Stripe Managed 標準費率再加 3.5%（第三方口徑待官方確認）
- **🔄 MCP spec 2025-06-18（含 2026-07-28 大改）**：Streamable HTTP、MCP Tasks、OAuth 2.1 強制 PKCE[^pkce]、protected resource metadata、authorization server metadata、resource indicators、CIMD 推薦 DCR 棄用；為 Smithery 下線後 auth / session 替代選型最大公約數
- **🔄 Linux Foundation Agentic AI Foundation（AAIF）Day 329**：2025-12-09 成立；Platinum 成員含 AWS / Anthropic / Block / Bloomberg / Cloudflare / Google / Microsoft / OpenAI；founding projects：MCP（Anthropic）+ goose（Block）+ AGENTS.md（OpenAI）；AGENTS.md 跨 agent 工具共通設定底層已開始實質擴散（Cursor / Claude Code / GitHub Agent HQ 皆支援）

## ⚡ 今日行動建議

- [ ] **Arcade 收購 Smithery 鏈結 blog + T+3 Day +3 中立性觀察升級版**（成本：2 小時；產出：中文 blog + Twitter / HN 分銷）
- [ ] **Agent Builder EOL T-27 crunch 顧問案 landing page + ChatKit workflow ID 風險自評 checklist**（成本：3 小時；產出：landing + 自評表範本 + 3 封 outbound 給既有 OpenAI SI 顧問案）
- [ ] **iPhone Duo 三城收斂爬蟲 Day 12 工作日第一次切片**（成本：3 小時；產出：Playwright scripts + Postgres schema + Day 12 工作日快照 CSV）
- [ ] **Anthropic S-1 Day 8 WSJ 11/16 pricing week 情境追蹤**：T-6 日倒計時至 11/9 roadshow 情境起始日；EDGAR amendment 查核時窗持續
- [ ] **Lemon Squeezy × Stripe Managed Payments 遷移評估**（成本：1.5 小時；產出：既有 Lemon Squeezy MRR 試算改掛 Managed 成本差異表）

## ⏳ 待觀察

- **Smithery T+4 Day +4（11/04 週三）**：Arcade 直接管理 directory 第一週結束前「ToolBench grading × directory 擁有者條目中立性」首次事件觀察（如 Arcade 自家 ToolBench 推薦工具是否不當提前）
- **OpenAI Agent Builder EOL T-26（11/04）**：是否補發 workflow graph export 工具（migration guide 現未承諾、社群請求屢見）
- **Anthropic S-1 amendment 填入時點**：Day 8 → Day 9（11/04）為價位 / 股數 / 募資規模填入第二個合理時窗（11/16 WSJ pricing week 情境 → 須在 11/10 roadshow 最早合法起始日前填入）；若至 11/04 仍空白、roadshow 延至 11/16 或 11/23 情境機率升高
- **iPhone Duo Day 13 Week 2 Day 6（11/04）**：Day 11–Day 14 四天平均收斂速度為台灣與中港曲線定位的首個客觀讀數
- **數發部 100 億 AI T+30 → T+31**：整月平點後下週一是否有新一輪 pipeline 公開將決定「第 1 年投資速度偏慢」結構續行強度
- **GitHub 11/5 ET Insight webinar T-2 日倒計時**：Mission Report + Agent HQ + AGENTS.md 跨 repo custom agents 落地細節為 2026-02-04 Claude / Codex 併入 public preview（Pro+ / Enterprise）之前最後一次公開更新
- **Vercel AI SDK HarnessAgent GA**：自 6/25 GA 以來 experimental 已滿 4 個月（T+131），若 11 月 GA 將改變「TS Agent 底層 2 強」對決格局
- **立法院新會期中小微企業轉型升級條例送審時點**：賴總統 1,000 億基金 + 42.5 億社發計畫送審倒計時，實際金額、對象、速率不確定，接案現金流轉型不宜綁補助

[^mcp]: Model Context Protocol，Anthropic 於 2024 年提出的開放協定，用統一介面讓 LLM agent 連接外部工具、資料來源與系統；2025-06-18 版本加入 OAuth 2.1 與 Streamable HTTP、2026-07-28 大改補上 MCP Tasks、CIMD 推薦 DCR 棄用，是今年 agent 生態主要互通層。

[^safe]: Simple Agreement for Future Equity，Y Combinator 2013 推出的早期募資合約；投資人先給現金、換取未來某輪定價時轉換股權的權利，發行方帳上以公允價值變動記錄 non-cash 損益，常在 IPO 前因市值快速攀升而出現巨額帳面損失。

[^arcade-dev]: 專注於 AI agent 工具呼叫與授權的美國新創，自建 LLM 認證層與工具目錄；2026-08-05 收購 Smithery，為 Smithery MCP Proxy 下線後 directory 的實際擁有者。同時運營 ToolBench 評分，被外界點名為同一公司同時運營 registry 與 grading 的利益衝突升級版。

[^promptfoo]: 開源 MIT 授權的 LLM evaluation 與 red-teaming CLI，透過本地 YAML 定義測試集並串進 CI；第三方口徑稱其已被 OpenAI 收攏為官方 Evals 遷移目標，官方公告仍待確認。

[^pkce]: Proof Key for Code Exchange，OAuth 2.0 的授權碼交換擴充（RFC 7636）；client 以隨機 verifier 衍生 challenge，防止授權碼在重導過程中被攔截重用。OAuth 2.1 將 PKCE 自選用升為所有 public client 強制使用。

[^dealroom]: 總部位於阿姆斯特丹的歐洲創投情報平台，蒐錄全球新創估值、募資輪次與投資人資料；許多政府基金與 LP 將其當作公開口徑來源，本次台灣數發部 100 億 AI 境外公司放寬條件即以其口徑拆解為 3 項門檻。

[^mor]: Merchant of Record，由支付平台（如 Paddle、Lemon Squeezy、Stripe Managed Payments）作為實際賣方承接國際銷售稅 / VAT / 消費稅合規與退費爭議，開發者免於逐國申報；代價為額外手續費（通常 3.5%–5% + 固定費用），適合跨境獨立開發者快速啟動卻又不想自建稅務團隊的情境。

## 📚 引用來源

1. [Smithery — MCP Proxy and managed identity shut down on October 31](https://smithery.ai/future) — 2026-11-03 存取
2. [RuntimeWire — Arcade acquires Smithery to control agent tool supply chain](https://runtimewire.com/article/arcade-acquires-smithery-agent-tool-supply-chain) — 2026-08-05
3. [API Tracker — Smithery migration guide](https://apitracker.io/smithery-migration) — 2026-11-03 存取
4. [OpenAI deprecations — Evals read-only 10/31, Agent Builder 11/30](https://developers.openai.com/docs/deprecations) — 2026-11-03 存取
5. [MCP Directory — OpenAI AgentKit deprecation migration guide](https://mcp.directory/blog/openai-agentkit-deprecation-2026) — 2026-10
6. [eCorpIT — OpenAI shuts Agent Builder, Evals and reusable prompts on 30 November 2026](https://ecorpit.com/openai-agent-builder-evals-prompts-shutdown-november-2026/) — 2026-10
7. [Leverage Shares — Anthropic IPO tracker (ANT, Nasdaq, S-1 filed 2026-10-26)](https://leverageshares.com/us/anthropic-ipo-tracker/) — 2026-11-03 存取
8. [Anthropic, PBC — Form S-1 (EDGAR filing 2026-10-26)](https://www.sec.gov/Archives/edgar/data/0002130357/000162828026067168/anthropicpbc-sx1.htm) — 2026-10-26
9. [PPC.Land — Anthropic files for Nasdaq IPO with $16.3 bn in first half revenue](https://ppc.land/anthropic-files-for-nasdaq-ipo-with-16-3bn-in-first-half-revenue/) — 2026-10
10. [CNA — 台灣大 myfone 10 月 16 日開放 iPhone Duo 預購](https://www.cna.com.tw/business/chinese/447172) — 2026-10
11. [digitimes — iPhone Duo 開賣 交期排到 2027](https://www.digitimes.com.tw/tech/dt/n/shwnws.asp?id=772472) — 2026-10
12. [CNA — iPhone Duo 中國市場熱銷 發貨排至明年](https://www.cna.com.tw/news/acn/202610170102.aspx) — 2026-10
13. [unwire — iPhone Duo 轉售加價回落](https://unwire.hk/2026/10/20/iphone-duo-scalpers-resale-price-drop/mobile-phone/) — 2026-10
14. [unwire — iPhone Duo 香港開售首批機水位](https://unwire.hk/2026/10/23/iphone-duo-sin-tat-launch-buyback-prices/mobile-phone/) — 2026-10
15. [雪球 — iPhone Duo 10/26 補貼後 15,799 元實際成交](https://www.xueqiu.com/9252950692/413807010) — 2026-10-26
16. [中央社 — 數發部百億 AI 投資方案 開放主要營運在台境外公司可納投](https://cna.com.tw/news/afe/202610040029.aspx) — 2026-10-04
17. [Dealroom — Taiwan widens 314M AI fund to back offshore startups](https://dealroom.co/news/159720-taiwan-widens-314m-ai-fund-to-back-offshore-startups-with-roots-at-home/) — 2026-10
18. [TechNews — 百億 AI 基金首年僅投 7,500 萬](https://technews.tw/?p=1520580) — 2026-10
19. [udn money — 2026 創投年會 賴清德 240 萬小時算力](https://money.udn.com/money/amp/story/5607/9596112) — 2026-10
20. [CNA — 賴總統 8 年 1,000 億助攻中小微轉型](https://cna.com.tw/news/ahel/202608180034.aspx) — 2026-08-18
21. [udn — 卓榮泰 1,000 億中小微 立法院下會期送審](https://udn.com/news/story/6656/9564541) — 2026
22. [uanalyze — 政院 4 箭助攻中小微 42.5 億 4 年計畫](https://uanalyze.com.tw/articles/5019847781) — 2026
23. [Vercel AI SDK — program agent harnesses](https://vercel.com/changelog/program-agent-harnesses-with-ai-sdk) — 2026-06
24. [DevelopersDigest — What's New in Vercel AI SDK 7 (October 2026)](https://www.developersdigest.tech/blog/vercel-ai-sdk-whats-new-2026) — 2026-10
25. [DevelopersDigest — Claude Agent SDK in Late 2026](https://www.developersdigest.tech/blog/claude-agent-sdk-whats-new-2026) — 2026-10-17
26. [AI SDK docs — HarnessAgent experimental overview](https://ai-sdk.dev/docs/ai-sdk-harnesses) — 2026-11-03 存取
27. [DoodoPayments — Paddle vs Lemon Squeezy fee comparison](https://dodopayments.com/blogs/paddle-vs-lemon-squeezy/) — 2026
28. [DEV — Stripe vs Paddle vs Lemon Squeezy fee comparison 2026](https://dev.to/jettfu/stripe-vs-paddle-vs-lemon-squeezy-fee-comparison-2026-2c77) — 2026
29. [Linux Foundation — Agentic AI Foundation launch](https://aaif.io/news/linux-foundation-announces-formation-of-aaif) — 2025-12-09
30. [The Register — Linux Foundation aims to become Switzerland of AI agents](https://www.theregister.com/2025/12/09/linux_foundation_agentic_ai_foundation/) — 2025-12-09
