---
title: 每日創業情報 — 2026-10-24
date: 2026-10-24
tags: 創業情報, AI 產業, SaaS, 台灣
summary: 週六 iPhone Duo Day 2 Apple 開放 10/24 pickup 查詢 + 全線備貨延至 2027-01-25 + Anthropic IPO EDGAR S-1 Deadline T+1（10/25）進入最後 24 小時 + Evals read-only T-7 進入倒數 1 週 + Claude Agent SDK TS 0.3.302 nested subagents / SessionStore / skills + 國發基金 100 億 AI 第一年僅投 2.4 億 10 案 + TrendForce TSMC 2027–2028 capex 預估上修至 $105B。
keywords: iPhone Duo 10月24日 Day 2 Apple pickup availability 查詢 2027-01-25 出貨延後, Anthropic IPO EDGAR S-1 Deadline 10月25日 T+1 Bloomberg 11月9日 roadshow 感恩節, OpenAI Evals read-only 10月31日 T-7 Promptfoo Langfuse v4 migration guide, Claude Agent SDK TypeScript 0.3.302 2026-10-16 nested subagents SessionStore skills plugins, 國發基金 100億 AI 新創基金 第一年 2.4億 10案 GPU 算力池 100片 數發部, StartupBlink 2026 台灣 25 升 20 全球新創生態系 排名, TSMC Q3 2026 net profit 70% YoY 2026 capex 60 64 billion 2% margin dilution TrendForce 2027 2028 105 billion, MCP Registry 2026 July 16967 servers Smithery ai.smithery namespace Shopify WebMCP UCP Google, Vercel AI SDK 7 WorkflowAgent durable storage Codex Claude Code harness 2026-06-25 GA, Haiku 5.5 Over-refusal fix 進度 Anthropic AutomationBench AA 重測
---

# 每日創業情報 — 2026-10-24

## 🎯 今日 TL;DR

- **週六 iPhone Duo Day 2 Apple 開放 10/24 pickup 查詢 + Anthropic IPO EDGAR S-1 Deadline T+1（10/25）進入最後 24 小時 + Evals read-only T-7 進入倒數 1 週 + Agent Builder EOL T-37 + Haiku 5.5 production ramp Day 6 + 期中選舉 T-10（11/3）+ Anthropic roadshow 可能日 T-16（11/9）+ 感恩節 Anthropic IPO 期限 T-33（11/26）** — 週六為 Day 2 低流量日：Apple 10/24 pickup 查詢開放成首波「取貨 vs 延後」訊號分水嶺；下週收斂到 S-1 flip 觀察 + Evals dataset 匯出倒數 7 日 + Agents SDK scaffold 第二輪驗證 3 件事
- **🔄 iPhone Duo 10/24 Day 2 T+1 — Apple 已指引消費者「週六（10/24）再查看取貨庫存」= pickup 查詢正式開放 + 全線備貨出貨日延至 2027-01-25（美國預購 30 分鐘內售罄）+ 台灣被 Apple 列入「開賣首日僅網路訂單取貨、無 walk-in 現貨」市場 + 蘋果員工續勸退未預購顧客（MacRumors 多篇轉述）+ 中華電 500 門市昨 08:00 首波開賣第 1 日已進入「電信通路取貨潮」+ 首批 <20,000 vs 近百萬預約 ~50:1 缺口續行** — Day 2 Live 關鍵訊號：Apple pickup 查詢真實可取貨率 + 全線備貨 2027-01-25 延後對預購族群的「換 Pro Max」替代訊號 + 電信三雄 Day 2 取貨排隊實況
- **🔄 Anthropic IPO EDGAR S-1 Deadline T+1 進入最後 24 小時 — Bloomberg 轉述 11/9 週可能起跑路演[^roadshow]、感恩節 11/26 前上市 + target valuation ~$2T + expected proceeds ~$100B + delay 原因為「等 Q3 財報完整」+ 10/4 Forkast 報導 EDGAR 10 月窗口開啟時仍無公開 S-1 + confidential 自 6/1 起已 145 天 + 承銷 Goldman / Morgan Stanley / JPMorgan / Citigroup** — bear case 第 3 支點進入最後 24 小時：若 10/25 EDGAR 仍無公開 S-1 → 11/9 路演窗口無法達成，可能延至 11/16 或更後；對一人 SaaS 影響：若 proceeds $100B 落地 → Anthropic 定價更積極壓力（Astra / Haiku 定價調整 trigger）
- **🆕 Claude Agent SDK TypeScript 0.3.302 新版（2026-10-16，T+8）+ Python 0.2.168（10/15） — 新功能：nested subagents with caps[^nested-subagents]（避免無限遞迴）+ SessionStore[^session-store]（跨 session 儲存狀態）+ skills（可組合技能）+ plugins + structured outputs + permission defaults + 版本綁定 Claude Code CLI v2.1.302（同步 release）** — 對一人 SaaS 開發者第 1 軸訊號：「nested subagents with caps + SessionStore + skills」= 直接對應 Vercel AI SDK 7 WorkflowAgent 的 durable storage 定位，兩者形成 TS Agent 底層選型 2 強競爭；台灣可做「Claude Agent SDK 0.3.302 vs Vercel AI SDK 7」3,500 字對照 blog + nested subagents 最小 PoC
- **🔄 OpenAI Evals read-only T-7 進入倒數 1 週 — 官方 developers.openai.com/api/docs/guides/evals 續確認 10/31 00:00 UTC read-only + 11/30 下線 + reusable prompts 同下線 + Agent Builder EOL T-37 + 官方 deprecations 頁指向 Promptfoo[^promptfoo] 為遷移目標 + Datasets 為實驗替代 + Langfuse v4 推出獨立 migration guide + OpenAI cookbook 要求「eval 已完整 run 過」才能匯出 runnable config** — 本週倒數個位數最後週：10/25 Day 7 加價 20–40% 接案 landing 第二稿公開 + Langfuse v4 migration guide 新選項可加入 landing + Promptfoo YAML parity test skeleton 完稿；Day 6 10/24 必做：若昨 Day 5 補跑 dataset 匯出未完成 → 今日倒數 7 天前最後時機
- **🆕 國發基金 100 億 AI 新創基金第一年進度揭露 — 僅投 NT$2.4 億（實際核定 10 案，up from 9/29 pact的 6 案）+ GPU 算力池 100 片（up from 60 片）+ 政策定位「10 年內 50 家 AI 獨角獸」+ 2026 預算 311 億 / 2027 預估 464 億 / 4 年合計 1,366 億 NT + 詹方冠（國發會副主委）10 月受訪說明資金使用進度 + 單案最高額 NT$2 億** — 對台灣一人 SaaS 開發者第 2 軸訊號：單年 2.4 億 / 10 案 = 平均 2,400 萬，遠低於單案上限 NT$2 億 → 政策容量未用滿；台灣可做「國發基金 100 億 AI 第一年進度 10 案 FAQ + 2027 預算 464 億政策追蹤」blog + 顧問接案
- **🔄 TSMC Q3 2026 earnings 續延燒 T+9 — net profit +70% YoY ≈ NT$763B + 全年成長指引上修至 ~44% + 2026 capex 持平 $60–64B + 承認 2% margin dilution[^margin-dilution]（2nm ramp 壓抑）+ TrendForce 2027–2028 capex 預估上修至最高 $105B（vs UBS $90B / Morgan Stanley $83B）+ 10/19 台股盤後台積電 2420 平盤、加權跌 755 點收 46822 + Wall Street 稱 capex "explosive"** — 分析師 2027 capex 預估分歧擴大至 $83B–$105B（22 ppt 差距）：TrendForce 續上修意味 A14 risk / N2 翻倍擴產地圖未定；per-project 蘋概股分析師訂閱 SaaS 可做「TrendForce vs UBS vs MS 三家 2027 預估對照 chart」賣點
- **🆕 StartupBlink 2026 全球新創生態系 — 台灣由 2025 的 25 名升至 20 名（+5 位）+ 進入前 20 門檻 + Inside / 國發會 10 月續引用** — 政策槓桿訊號：台灣新創環境排名 2026 顯著改善，可做為「國發基金 100 億 + AI 新十大建設 + 50 萬 AI 人才」綜合政策效益背書；一人 SaaS 可做「StartupBlink 2026 台灣排名 20 名 FAQ：對獨立開發者的 3 大落地訊號」blog
- **🆕 MCP Registry 統計更新 — 官方 registry.modelcontextprotocol.io 2026-07-16 止 16,967 published servers（距 2026 Q2 的 10,000 續成長 70%）+ API frozen at v0.1、registry 仍 preview + Smithery 已 publish 到官方 registry 的 ai.smithery/* namespaces 但未 pull from it + Shopify WebMCP checkout 工具 2026-09-28 由 Gil Greenberg 公告 + UCP (Universal Commerce Protocol[^ucp]) = Shopify + Google 共同標準 + Shopify 自測 WebMCP 60/60 成功 vs browser automation 56/60** — 對一人 SaaS 開發者第 3 軸訊號：16,967 servers 代表 MCP 生態系已進入「過度供給、registry 戰爭白熱化」階段；台灣可做「2026 Q4 MCP 必裝 10 server + 自建 MCP 判斷樹」blog + 顧問接案

## 🔄 昨日追蹤

- **🔄 iPhone Duo 10/23 開賣日 Day 1 T+0 → 10/24 Day 2 T+1** → Apple 10/24 pickup 查詢正式開放續確認 + 全線備貨出貨日延至 2027-01-25 補強 + 蘋果員工續勸退未預購顧客 + 台灣被列「首日僅網路訂單取貨」市場續行 ✅ 進度：Day 2 低流量日
- **🔄 Anthropic IPO EDGAR S-1 Deadline T+2 → T+1** → Bloomberg 11/9 roadshow + 感恩節前上市訊號補強 + target proceeds ~$100B 新數據補強 + delay 原因「等 Q3 財報」補強；最後 24 小時 ⚠️ 進度：進入臨界觀察
- **🔄 Evals read-only T-8 → T-7** → 官方 Promptfoo 為遷移目標 + Langfuse v4 推出獨立 migration guide 新選項補強 + cookbook「eval 已完整 run 過」限制補強 ✅ 進度：倒數個位數最後週
- **🔄 Agent Builder EOL T-38 → T-37** → Agents SDK（Python / TypeScript）、ChatGPT Workspace Agents 兩路徑續行；本週剩 2 日工作時間 ⚠️ 風險：workflow graph parity / branching / handoffs 需人工重驗
- **🔄 Haiku 5.5 T+16 → T+17** → Over-refusal fix 仍無完成訊號、AutomationBench-AA 35% 重測結果未公告（續 skip） ✅ 進度：切 production Day 6
- **🔄 Supabase + Turso T+21 → T+22** → Supabase Compute hosted sandbox 定價仍未公開；一次補償訊號續等
- **🆕 Claude Agent SDK 0.3.302 新版 10/16 補收** → 本日新增追蹤軸：nested subagents / SessionStore / skills 直接對應 Vercel AI SDK 7 WorkflowAgent，TS Agent 底層 2 強競爭

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🔄 iPhone Duo 10/24 Day 2 T+1 — Apple pickup 查詢正式開放 + 全線備貨出貨延至 2027-01-25（美國預購 30 分鐘內售罄）+ 台灣列「開賣首日僅網路訂單取貨」市場 + 蘋果員工續勸退未預購顧客（MacRumors 續轉述）+ 中華電 500 門市 Day 1 收尾後進入電信通路取貨潮 + 首批 <20,000 vs 近百萬預約 ~50:1 缺口續行 + Day 2 低流量日流量轉向網路 + Pro Max 替代訊號待觀察** | [Macworld — iPhone Duo pre-order live blog, delivery dates slip to Jan 25, 2027](https://macworld.com/article/3262078/iphone-duo-pre-order-live-blog-how-quickly-will-apples-folding-phone-sell-out.html)、[Mactrast — Apple Stores to Have Limited Availability](https://www.mactrast.com/?p=173677)、[NewsBytes — Apple launches iPhone Duo with limited store availability](https://www.newsbytesapp.com/news/science/apple-launches-iphone-duo-oct-23-with-limited-store-availability/tldr)、[iPhone in Canada — How to Track iPhone Duo Stock](https://www.iphoneincanada.ca/2026/10/21/how-to-track-iphone-duo-stock-canada-us/)、[Zeera — iPhone Duo Sold Out in Minutes](https://zeerawireless.com/ko/blogs/news/iphone-duo-sold-out-shipping-delay-apple-store-pickup) | Day 2 低流量日 → 流量轉向網路 + Pro Max 替代訊號 + 電信三雄取貨真實秒數；per-project「10/24 Apple pickup 查詢指南 × 全線 2027-01-25 延後 FAQ × 蘋果員工勸退訊號在台落實度 × 中華電 500 門市 Day 2 取貨排隊地圖 × Pro Max 替代決策樹 × 2TB NT$118,900 Day 2 現場回報」6 合一 Day 2 pack NT$ 200K–400K | 機會：**「10/24 Apple pickup 查詢真實可取貨率 × 全線 2027-01-25 延後 vs Pro Max 替代決策樹 × 電信三雄 Day 2 取貨排隊 crowdsourced × 蘋果員工勸退訊號 Day 2 續追蹤 × 2TB NT$118,900 Day 2 現場回報 × 內螢幕 NT$37,000 FAQ 續引用」6 合一 Day 2 pack NT$ 250K–450K**；甜蜜點 = 10/24 08:00 Apple pickup 查詢 Live 開場 + 10:00 「全線 2027-01-25 延後 vs Pro Max 替代決策樹」push + 14:00 「電信三雄 Day 2 取貨排隊實況」crowdsourced + 20:00 「Day 2 收尾盤後缺口精算 vs Day 1 對比」push；威脅：Apple pickup 查詢真實開放時間可能依時區遞延（美西 vs 台灣 ~15 小時差）→ 消費者實測 timing 需 Day 2 當日動態校正 |
| **🆕 國發基金 100 億 AI 新創基金第一年進度 — 僅投 NT$2.4 億（實際核定 10 案，up from 9/29 的 6 案）+ GPU 算力池 100 片 + 政策定位「10 年內 50 家 AI 獨角獸」+ 2026 預算 311 億 / 2027 預估 464 億 / 4 年合計 1,366 億 NT + 詹方冠（國發會副主委）10 月受訪補強 + 單案最高額 NT$2 億 + StartupBlink 2026 台灣由 25 升 20 名（+5 位）進入前 20 門檻** | [uanalyze — 數發部祭百億資金催生 AI 新創 100 片 GPU 算力池](https://uanalyze.com.tw/articles/1078148404)、[遠見 — 國發會副主委詹方冠訪談（AI 政策 1,366 億）](https://www.gvm.com.tw/article/131848)、[Taiwan News — Computex 賴清德 AI 新十大建設 2040 50 萬 AI 人才 1000 億計畫](https://www.taiwannews.com.tw/zh/news/6374811)、[Inside — 台灣新創 StartupBlink 2026 排名](https://www.inside.com.tw/tag/新創) | 政策容量未用滿訊號：單案平均 NT$2,400 萬 vs 上限 NT$2 億 → 可申請額度上限 8 倍成長空間 + StartupBlink 20 名意味台灣新創環境排名 2026 顯著改善 + 一人 SaaS 可申請單案 NT$1,000 萬以上 + GPU 算力池 100 片為新 vertical；per-project「國發基金 100 億 AI 第一年 10 案進度 × 2027 預算 464 億政策追蹤 × StartupBlink 20 名落地訊號 × GPU 算力池申請流程 × 一人 SaaS 可申請 NT$1,000 萬以上 FAQ × AI 新十大建設 1,366 億 4 年計畫對照」6 合一 vertical consulting NT$ 100K–380K per client | 機會：**「國發基金 100 億 AI 第一年 10 案 FAQ × 2027 預算 464 億 政策追蹤 × StartupBlink 2026 台灣 20 名落地訊號 × GPU 算力池 100 片申請入口 × 一人 SaaS 可申請單案 NT$1,000 萬以上 × AI 新十大建設 4 年 1,366 億計畫 landing」6 合一 vertical consulting NT$ 100K–380K per client**；甜蜜點 = 10/24–10/26 寫「國發基金 100 億 AI 第一年 10 案揭露 — 平均 2,400 萬 / 上限 2 億，一人 SaaS 的 3 個入口」blog；威脅：單案平均 2,400 萬意味評審偏保守 → 顧問服務需在前期揭露「2026–2027 核定率可能續低」風險 |
| **🔄 TSMC Q3 2026 earnings 續延燒 T+9 — net profit +70% YoY ≈ NT$763B + 全年成長指引上修至 ~44% + 2026 capex 持平 $60–64B + 承認 2% margin dilution（2nm ramp 壓抑）+ TrendForce 2027–2028 capex 預估上修至最高 $105B（vs UBS $90B / Morgan Stanley $83B）+ 10/19 台股盤後台積電收 2420 平盤、加權跌 755 點收 46822 + Wall Street 稱 capex "explosive" + A14 risk 2027 / volume 2028 + N2 annual capacity 2027 翻倍 + 3nm 4 座 fab** | [InvestingLive — TSMC profit jumps nearly 70% on AI demand](https://investinglive.com/stocks/icymi-tsmc-profit-jumps-nearly-70-on-ai-demand-but-margin-outlook-weighs-on-shares/)、[TrendForce — TSMC 2027 2028 capex 上修 $105B](https://www.trendforce.com/news/?p=65394)、[uanalyze — 10/19 台股盤後台積電 2420 加權 46822](https://uanalyze.com.tw/articles/4102155153)、[CryptoBriefing — TSMC Q4 revenue up 61%](https://cryptobriefing.com/tsmc-q4-revenue-forecast-record-q3-profit/) | 分析師 2027 capex 預估分歧擴大至 $83B–$105B（22 ppt 差距）= 「2027 景氣能見度」投資決策需納入 3 套 range + TrendForce 上修意味 A14 risk / N2 翻倍擴產地圖未定；per-project「蘋概股分析師訂閱 SaaS（TrendForce vs UBS vs MS 三家對照）+ 2nm ramp 良率追蹤 + A14 bridge 2027 擴產地圖 + 2% margin dilution 影響鏈 + Wall Street "explosive" 評語落實度」5 合一 vertical bootstrap NT$ 100K–380K per client | 機會：**「TrendForce vs UBS vs MS 2027–2028 capex 預估對照 dashboard × 2nm 貢獻 Q3 wafer 8% 追蹤 × A14 risk / volume 2027–2028 時程 × 2% margin dilution 影響鏈 blog × N2 2027 翻倍擴產地圖」5 合一 vertical NT$ 120K–400K per client**；甜蜜點 = 10/24–10/26 寫「TrendForce 2027 capex 上修至 $105B：三家分析師分歧 22 ppt 對一人 SaaS 的 3 大影響」blog；威脅：三家分析師預估分歧 22 ppt 意味市場 consensus 未定 → 顧問 / SaaS 合約需揭露「2027 capex 估值 range 偏大」風險 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🆕 Claude Agent SDK TypeScript 0.3.302（2026-10-16，T+8）+ Python 0.2.168（10/15）— 新功能：nested subagents with caps（避免無限遞迴）+ SessionStore（跨 session 儲存狀態）+ skills（可組合技能）+ plugins + structured outputs + permission defaults + 版本綁定 Claude Code CLI v2.1.302** | TypeScript / Python Agent 框架 / 一人 SaaS 底層 / nested subagent 架構 | 需 nested subagents 架構 + 跨 session 狀態 + 可組合 skills + 結構化輸出 + 權限邊界細緻的 agent | SDK 開源免費；Claude API 計費另計；Claude Code CLI 綁同版號 | vs Vercel AI SDK 7 WorkflowAgent（durable storage execution state）/ OpenAI Agents SDK（Python/TS，Agent Builder 11/30 遷移目標）；差異在「nested subagents with caps + SessionStore + skills + plugins」4 件齊發 | 🟢 使用 Claude Code 的一人 SaaS：**今日 Day 6 本週首要校正 — SDK 0.3.302 新版 nested subagents + SessionStore 試裝 PoC**；🟡 現用 Vercel AI SDK 7：可平行試裝「Claude Agent SDK nested subagents vs WorkflowAgent durable storage」最小對照；🔴 深度依賴 LangGraph：Claude Agent SDK 0.3.302 + Vercel AI SDK 7 已形成「TS Agent 底層 2 強」競爭，2–4 週內評估遷移成本 |
| **🆕 Langfuse v4 Evals migration guide（OpenAI Evals read-only T-7 新選項）— 獨立 migration guide 發布 + 支援 OpenAI Evals YAML 匯入 + prompt / assertion / model matrix 平行 regression + CI pipeline 友善 + 開源自架 Pricing + 比 Promptfoo 更深 observability 整合** | LLM eval 框架 / OpenAI Evals 遷移 / observability | OpenAI Evals YAML 匯入 + 自架 observability + CI regression + Langfuse Cloud / self-host | 開源免費自架；Langfuse Cloud $29/mo 起；企業 $499/mo | vs Promptfoo（CLI 友善、YAML + assertion）/ Datasets 實驗替代（OpenAI 官方 experimental）；差異在「Langfuse v4 + observability + 自架 self-host」3 件齊發，更適合企業採購 | 🟢 用 Langfuse 做 LLM observability 的團隊：**今日 Day 6 試裝 Langfuse v4 migration guide + YAML 匯入 PoC**；🟡 Promptfoo 已穩的團隊：可平行試裝兩者，再選定一個；🔴 企業採購：Langfuse 的 self-host + observability 更適合有合規要求場景；本週可做「Promptfoo vs Langfuse v4 Evals migration」對照 blog |
| **🔄 Vercel AI SDK 7（2026-06-25 GA + 7.0.143 現版）— 本週 brief 10/23 已訂正過，今日續行 — WorkflowAgent 類別支援 durable storage execution state + 整合 Codex / Claude Code / Deep Agents / OpenCode / Pi 等 agent harness + Human approval / timeouts / sandbox 內建 + MCP Apps + 終端 UI + provider-agnostic realtime voice/video + 遷移路徑 `npx @ai-sdk/codemod v7`** | TypeScript Agent 框架 / Next.js SaaS 底層 / durable agent runtime | 需 durable WorkflowAgent + 跨 restart / approval delay / sandbox 的 production agent + Next.js 內嵌 agent | AI SDK 7 本體開源免費；API 計費另計；Vercel 托管費另計 | vs Claude Agent SDK 0.3.302（nested subagents with caps + SessionStore + skills）/ OpenAI Agents SDK；差異在「durable WorkflowAgent + 跨 harness 整合 + MCP Apps + realtime voice/video」 | 🟢 Next.js 一人 SaaS：**今日 Day 6 續上週 Day 5 的 WorkflowAgent + Codex harness PoC**；🟡 平行試裝 Claude Agent SDK 0.3.302 nested subagents 做對照；🔴 深度依賴 LangGraph：v7 的 durable WorkflowAgent 是直接競品，2–4 週內評估 |
| **🔄 MCP Registry 統計更新 — 官方 registry.modelcontextprotocol.io 2026-07-16 止 16,967 published servers（距 2026 Q2 的 10,000 續成長 70%）+ API frozen at v0.1、registry 仍 preview + Smithery 已 publish 到官方 registry 的 ai.smithery/* namespaces 但未 pull from it + Shopify WebMCP checkout 工具 2026-09-28 由 Gil Greenberg 公告 + UCP (Universal Commerce Protocol) = Shopify + Google 共同標準** | MCP 生態系 / Shopify / Google 統一標準 | 選型 MCP server 時的 registry 參考 + Shopify / Google 商務 agent 整合 + 自建 MCP server 判斷 | 官方 registry 免費；Smithery / FastMCP 自報；MCP server 多為開源 | vs Smithery（已 publish 到官方但未 pull）/ FastMCP / MCP Bundles；差異在「16,967 servers 成長 70% + UCP 統一商務協定 + Shopify WebMCP 60/60 vs browser automation 56/60」 | 🟢 跨境代購 / 比價 SaaS：**今日 Day 6 試裝 Shopify WebMCP checkout + UCP 協定 PoC**；🟡 自建 MCP server 判斷：16,967 servers 多為 trivial，重複造輪子不划算，優先選 pull 官方 registry；🔴 Smithery 用戶：10/01 起 Smithery pull 官方 registry 尚未定、持續觀察 |
| **🔄 Claude Haiku 5.5 production ramp Day 6 T+17 — Vals Index 54.31% + Refusal Rate 0.22% + Artificial Analysis Intelligence Index 43 at max effort + OSWorld 72.4% + Terminal-Bench 39.2% max effort + Over-refusal fix 仍無完成訊號 + AutomationBench-AA 35% 待重測 + 1M context + 128K output + Claude Code v2.1.293 預設整合（10/8）+ Claude Agent SDK 0.3.302 新選型支持 nested subagents** | LLM 小模型 / 高頻 subagent / production ramp Day 6 | 短 context（≤100K）分類、摘要、轉譯、label normalize；effort levels 可調推理深度 | $0.10/M in + $0.50/M out（≤100K）；$0.50/M in + $2.50/M out（>100K）；cache reads $0.01/M | vs Haiku 4.5（OSWorld 15.7%）跳升 56.7 ppt；vs Sonnet 5.5 Terminal-Bench 2 倍差距；vs Sol 6.1 Haiku 便宜 1/20；AutomationBench-AA 35% vs 對手 53–60%；Claude Agent SDK 0.3.302 下可做 nested subagents | 🟢 T+17 production ramp Day 6：切第 6 條「 nested subagent（Claude Agent SDK 0.3.302）」或擴至轉譯 workflow；🟡 effort levels：low 分類 / high 摘要 / low 轉譯 / low 標準化 / low 標籤;🔴 禁區：agentic coding + Terminal + >100K + refusal 敏感；本週可擴至 8–10 條 production subagent |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：iPhone Duo 10/24 Day 2 Apple pickup 查詢指南 + 全線 2027-01-25 延後 Pro Max 替代決策樹 + 電信三雄 Day 2 取貨排隊 crowdsourced 🔄

- **痛點來源**（接續 10/17–10/23 brief 點子 1）：Apple 10/24 pickup 查詢正式開放 + 全線備貨出貨日延至 2027-01-25（美國預購 30 分鐘內售罄）+ 台灣列「首日僅網路訂單取貨」市場 + 消費者仍到 Apple 直營店排隊 → 蘋果員工勸退、糾紛風險 + 預購族群需「換 Pro Max」替代決策 + 一般媒體 Day 2 低流量日報導稀疏、缺「Apple pickup 查詢指南 × 全線 2027-01-25 延後 Pro Max 替代決策樹 × 電信三雄 Day 2 取貨排隊 crowdsourced × 蘋果員工勸退訊號 Day 2 續追蹤 × 2TB NT$118,900 Day 2 現場回報」5 合一 Day 2 pack
- **目標客群**：10/23–10/24 想搶首批 iPhone Duo 的台灣消費者（估 30–50 萬人）+ 已預購但考慮取消／換機的消費者（估 10–20 萬人）+ 電信通路業務（估 1,500 人）+ 蘋果直營店員工（估 500 人）+ 跨境代購（估 1,000 家）+ 蘋概股分析師（估 500 人）
- **技術複雜度**：3/5 — Node.js + Apple Store pickup API 查詢（區域代碼 TW + 門市代碼）+ 中華電 500 門市公開 catalog scraping + Google Maps API + WebSocket push + APNs / FCM + crowdsourced 回報接口 + Pro Max 替代決策樹（整合 Pro Max 售價、庫存、信用卡分期）
- **預估 MRR**：one-off NT$ 50–100 × 20–30 萬搶購者（Day 2 流量回落）= NT$ 300K–1.5M event-based；若擴展為「蘋果新品預購 + 開賣當日缺口 + 門市地圖 + Pro Max 替代決策樹」訂閱 → NT$ 199/mo × 1,500 用戶 = NT$ 300K MRR
- **競品弱點**：台灣目前無「10/24 Apple pickup 查詢指南 × 全線 2027-01-25 延後 Pro Max 替代決策樹 × 電信三雄 Day 2 取貨排隊 crowdsourced × 蘋果員工勸退訊號 Day 2 續追蹤」5 合一 Day 2 pack
- **切入建議**：10/24 Day 2 Live：08:00 Apple pickup 查詢 Live 開場 + 10:00「全線 2027-01-25 延後 vs Pro Max 替代決策樹」push + 14:00「電信三雄 Day 2 取貨排隊實況」crowdsourced + 20:00「Day 2 盤後 vs Day 1 對比」push → 10/25 Day 3 Weekend 盤整：10:00「Day 2 盤後缺口精算 vs Day 1 真實落差」blog + 15:00「下週補貨時程回報」+ 20:00 Week 2 Pro 版 landing 公開；10/27 Day 5 開放 1 小時諮詢 slot NT$ 2,000

### 點子 2：Evals read-only T-7 crunch 最後週加價接案 landing 第二稿 + Promptfoo vs Langfuse v4 對照 blog 🔄

- **痛點來源**（接續 10/16–10/23 brief 點子 2）：OpenAI Evals 10/31 00:00 UTC 進入 read-only（T-7 進入倒數 1 週） + 11/30 下線 + reusable prompts 同下線 + Agent Builder EOL T-37 + 官方 deprecations 頁指向 Promptfoo 為遷移目標 + Datasets 為實驗替代 + Langfuse v4 推出獨立 migration guide 新選項 + OpenAI cookbook 要求「eval 已完整 run 過」才能匯出 runnable config；若未在 10/31 前完成 dataset 匯出 → 11/01 起 read-only
- **目標客群**：以 OpenAI Evals 建 production LLM eval pipeline 的台灣中小企 / SI 顧問案（10–50 人規模，估 150–400 家）+ reusable prompts 11/30 同下線用戶群 + Agent Builder 遷移用戶群 + ChatGPT Workspace Agents 轉接目標 + Langfuse / Promptfoo 選型未定群
- **技術複雜度**：3/5 — service business + CLI 工具；OpenAI Evals API dataset 匯出 + reusable prompts 匯出 + Promptfoo migration scaffold + Langfuse v4 YAML 匯入 + Agents SDK TypeScript / Python workflow re-architecture + 遷移 checklist 可模板化
- **預估 MRR**：N/A（one-off NT$ 60K–250K per client × 2–4 clients / month）；加上「10/25–10/31 Evals 遷移週」加價 20–40% 可達 NT$ 80K–350K per client；若做「Evals dataset 匯出 CLI + Promptfoo / Langfuse v4 選型工具」產品 → NT$ 2,000 one-off × 50 位客戶 = NT$ 100K
- **競品弱點**：台灣尚無針對 Evals read-only T-7 的專門 CLI 工具 + 顧問服務；多數 SI 顧問做「新建」而非「遷移」；OpenAI 官方 migration guide 只給框架、缺台灣在地整合顧問；Promptfoo + Langfuse v4 兩套遷移目標中文整合文件接近零
- **切入建議**：10/24 Day 6 加價 20–40% 接案 landing 第二稿公開 + Langfuse v4 新選項補入 landing → 10/25 Day 7「10/25–10/31 Evals 遷移週」正式開啟 → 10/27 Day 9「Promptfoo vs Langfuse v4 Evals migration」3,000 字對照 blog → 11/01 進入「Agent Builder EOL 最後 29 天 crunch」接案 → 11/30 EOL 前 1 週關閉接案

### 點子 3：Claude Agent SDK 0.3.302 nested subagents / SessionStore / skills PoC + 「Claude Agent SDK vs Vercel AI SDK 7」TS Agent 底層對照 blog 🆕

- **痛點來源**：Claude Agent SDK TS 0.3.302（10/16，T+8）+ Python 0.2.168（10/15）引入 nested subagents with caps、SessionStore（跨 session 狀態）、skills（可組合技能）、plugins、structured outputs、permission defaults；版本綁 Claude Code CLI v2.1.302；台灣中文技術 blog 仍停在 0.2.x 版本描述；此版本功能直接對應 Vercel AI SDK 7 WorkflowAgent 的 durable storage 定位，形成「TS Agent 底層 2 強」競爭
- **目標客群**：使用 Claude Code 的台灣一人 / 2–3 人 SaaS 團隊（估 2,000 家）+ 使用 LangGraph / LangChain 的 developer（估 500 家）+ 建 agentic SaaS 架構的工程師（估 500 家）+ 需 nested agent / durable storage 的 SI 顧問案（估 150 家）
- **技術複雜度**：3/5 — TypeScript / Python + Claude Agent SDK 0.3.302 + nested subagents（with caps）設計 + SessionStore 跨 session 狀態 + skills 可組合技能 + Vercel AI SDK 7 WorkflowAgent 平行對照；1–2 週可做 PoC
- **預估 MRR**：one-off NT$ 50K–150K per client × 2–4 clients / month = NT$ 100K–600K；若做訂閱式「nested subagent 架構維護」→ NT$ 3K–8K/mo × 30–100 clients = NT$ 90K–800K MRR
- **競品弱點**：台灣尚無針對「Claude Agent SDK 0.3.302 nested subagents / SessionStore / skills」的中文技術 blog；多數 developer 不清楚「0.3.302 新版已 ship」；LangGraph 中文教學仍是 2025 版本；Vercel AI SDK 7 中文教學零星且無與 Claude Agent SDK 的平行對照
- **切入建議**：10/24 Day 6 試裝 Claude Agent SDK 0.3.302 的 nested subagents 最小 PoC → 10/25 Day 7「Claude Agent SDK 0.3.302 vs Vercel AI SDK 7」3,500 字對照 blog（nested subagents vs WorkflowAgent、SessionStore vs durable storage、skills vs harness）→ 10/27 Day 9 Pro 版 landing + 開放 2–3 位免費諮詢 → 11/02 Week 2 開始接案

### 點子 4：國發基金 100 億 AI 第一年進度 10 案 FAQ + 2027 預算 464 億政策追蹤 blog + StartupBlink 2026 台灣 20 名落地訊號 🆕

- **痛點來源**：國發基金 100 億 AI 新創基金第一年僅投 NT$2.4 億（實際核定 10 案，up from 9/29 的 6 案）+ GPU 算力池 100 片 + 政策定位「10 年內 50 家 AI 獨角獸」+ 2026 預算 311 億 / 2027 預估 464 億 / 4 年合計 1,366 億 NT + 單案最高額 NT$2 億 + StartupBlink 2026 台灣由 25 升 20 名；多數台灣新創創業者未搞清楚「平均核定 2,400 萬 vs 上限 2 億」8 倍成長空間 + 2027 預算 464 億對一人 SaaS 的 3 個入口
- **目標客群**：台灣新創創業者（估 5,000 家）+ 一人 / 2–3 人 SaaS 團隊（估 2,000 家）+ 想申請國發基金 / 數發部補助的 developer（估 1,500 家）+ 想做 AI 新創獨角獸的 founder（估 500 家）+ GPU 算力池申請群（估 300 家）
- **技術複雜度**：2/5 — service business + 文件整理；國發基金 / 數發部補助申請文件模板化 + GPU 算力池申請流程 + 2027 預算 464 億政策追蹤 Notion dashboard + 單案 NT$1,000 萬以上 ROI 試算
- **預估 MRR**：one-off NT$ 20K–80K per client × 3–8 clients / month = NT$ 60K–640K；若做訂閱式「國發基金 + 數發部補助申請追蹤」→ NT$ 500/mo × 500 用戶 = NT$ 250K MRR
- **競品弱點**：台灣少數管顧 / SI 顧問做「新創 / 中小企業申請」顧問，但偏傳統，缺「單案平均 2,400 萬 vs 上限 2 億」8 倍成長空間 FAQ + 2027 預算 464 億對一人 SaaS 的 3 個入口 FAQ；多數 developer 不清楚「StartupBlink 2026 台灣 20 名落地訊號」
- **切入建議**：10/24 Day 6 寫「國發基金 100 億 AI 第一年 10 案揭露 — 平均 2,400 萬 / 上限 2 億，一人 SaaS 的 3 個入口」blog → 10/25 Day 7 Notion 可嵌入試算表（單案 1,000 萬以上 ROI + GPU 算力池申請流程 + 2027 預算 464 億政策追蹤）→ 10/27 Day 9 StartupBlink 2026 台灣 20 名落地訊號 blog → 11/02 Week 2 Pro 版上線 + 開放企業採購顧問接案

## 🧰 工具堆疊更新

- **🔄 iPhone Duo 10/24 Day 2 T+1**：08:00 Apple pickup 查詢 Live 開場 + 10:00「全線 2027-01-25 延後 vs Pro Max 替代決策樹」push + 14:00「電信三雄 Day 2 取貨排隊實況」crowdsourced + 20:00「Day 2 盤後 vs Day 1 對比」push；10/25 Day 3 Weekend 盤整
- **🔄 Evals read-only T-7 Promptfoo + Langfuse v4 YAML 匯入 skeleton**：若昨 Day 5 補跑 dataset 匯出未完成 → 今日 Day 6 倒數 7 天前最後時機；10/25 Day 7 加價接案 landing 第二稿公開 + Langfuse v4 新選項補入
- **🆕 Claude Agent SDK 0.3.302 nested subagents / SessionStore / skills 試裝**：今日 Day 6 試裝 nested subagents 最小 PoC；10/25 Day 7「Claude Agent SDK vs Vercel AI SDK 7」3,500 字對照 blog
- **🔄 Vercel AI SDK 7 WorkflowAgent + Codex harness PoC**：續上週 Day 5 工作；今日 Day 6 可平行試裝與 Claude Agent SDK 0.3.302 對照
- **🔄 Haiku 5.5 T+17 production ramp Day 6**：切第 6 條「nested subagent（Claude Agent SDK 0.3.302）」或擴至轉譯 workflow；effort levels 配置 low 分類 / high 摘要 / low 轉譯 / low 標準化 / low 標籤
- **🔄 Agent Builder → Agents SDK 遷移 crunch T-37**：本週剩 2 日工作時間；10/25–10/31 進入「Evals 遷移週」加價接案；code export scaffold → Agents SDK TypeScript / Python 選型
- **🆕 國發基金 100 億 AI 新創基金 + 2027 預算 464 億 Notion dashboard**：今日 Day 6 Notion 嵌入單案 NT$1,000 萬以上 ROI 試算 + GPU 算力池申請流程 + StartupBlink 2026 台灣 20 名落地訊號

## ⚡ 今日行動建議

- [ ] iPhone Duo 10/24 Day 2 Live：08:00 Apple pickup 查詢 Live 開場 + 10:00「全線 2027-01-25 延後 vs Pro Max 替代決策樹」push + 14:00「電信三雄 Day 2 取貨排隊實況」crowdsourced + 20:00「Day 2 盤後 vs Day 1 對比」push（預期 4 小時 Live 工作）
- [ ] Evals read-only T-7 Day 6：若昨 Day 5 補跑 dataset 匯出未完成 → 倒數 7 天前最後時機 + Langfuse v4 YAML 匯入 skeleton 第一輪完稿（預期 2 小時）
- [ ] Claude Agent SDK 0.3.302 nested subagents 最小 PoC（with caps + SessionStore + 1 條 skill；預期 2 小時）
- [ ] Vercel AI SDK 7 WorkflowAgent 續上週 Day 5「WorkflowAgent + Codex harness」最小 PoC（預期 1.5 小時）
- [ ] Haiku 5.5 production ramp Day 6：切第 6 條「nested subagent（Claude Agent SDK 0.3.302）」（預期 1 小時）
- [ ] 寫 1 篇中文 build-in-public：「Claude Agent SDK 0.3.302 nested subagents + SessionStore 試裝實錄」或「國發基金 100 億 AI 第一年 10 案揭露 — 一人 SaaS 的 3 個入口」
- [ ] StartupBlink 2026 台灣 20 名落地訊號 + 2027 預算 464 億政策追蹤 Notion dashboard 整理（預期 1 小時）

## ⏳ 待觀察

- 10/24 全天：Apple pickup 查詢真實可取貨率（台灣直營店首批現場取貨回報）、電信三雄 Day 2 取貨排隊實況
- 10/25：**Anthropic IPO EDGAR 公開 S-1 Deadline T+1 最後 24 小時**（11/9 路演倒推 15 天）— 若仍無 → bear case 第 3 支點加壓至臨界、11/9 路演窗口可能延至 11/16
- 10/27：若 10/25 EDGAR 無公開 S-1 → 「期中選舉後路演可能延至 11/16」訊號確認窗口
- 10/31：OpenAI Evals read-only — T-7 倒數 1 週；是否可延期尚無官方口徑
- 11/3：美國期中選舉 — Anthropic IPO 路演起點前的最後政治 trigger
- 11/9：Anthropic IPO 期中選舉後路演可能日 — S-1 flip（EDGAR）仍為先行觀察訊號
- 11/26：**感恩節 — Anthropic IPO 最終期限（Bloomberg 口徑）**，若 11/9 未路演 → 11/16 或更後
- 11/30：OpenAI Agent Builder + Evals + reusable prompts 三件事一次下線 — T-37 倒數
- Q4 底：Google Gemini 3.5 Pro / Gemini 4 預期落地 — 無新 October 訊號續行；若 Q4 底前落地 → 3 大供應商重排 trigger
- Haiku 5.5 Over-refusal fix：Anthropic 修補時程、AutomationBench-AA 重測結果（10/24 續 skip、無新進展）
- Supabase Compute：hosted sandbox 定價（T+22 仍未公開）
- Cursor 兩套 pricing 分階段 rollout：Reddit 2026 新定價回合實地反應（T-10 續無聲）
- OpenAI dots agent / Codex Cloud / Codex Security Cloud 定價明細：Pro + business premium 以外開放時程
- OpenAI Decisions API：limited preview 展開時程、具體用途與 pricing
- 國發基金 100 億 AI 第一年 vs 第 2 年：2027 預算 464 億是否能把平均核定提升至上限 2 億
- StartupBlink 2026 台灣 20 名：是否能在 2027 進一步升至前 15 名
- MCP Registry 統計：16,967 servers 續成長至 Q4 2026 底的規模；Smithery 是否開始 pull from 官方 registry

[^roadshow]: 公司在股票 IPO 定價前，由承銷團（如 Goldman Sachs、Morgan Stanley）陪同管理層巡迴向機構投資人簡報的流程，通常為期 1–2 週；路演結束後幾天內會公告最終定價並於交易所首日交易。「11/9 路演」= 若當週起跑，依承銷慣例 7–10 日後定價、再 1–2 日掛牌，可勉強達成「感恩節 11/26 前上市」目標。

[^ucp]: Universal Commerce Protocol，Shopify 與 Google 於 2026 年共同推動的統一電商協定，讓 AI agent 可以用相同的 `get_checkout`、`update_checkout`、`complete_checkout` 等標準呼叫跨商家下單結帳；WebMCP 為 UCP 的瀏覽器端實作，仰賴 Chromium 系瀏覽器內的使用者 session，不走伺服器端 API key。

[^nested-subagents]: Claude Agent SDK 0.3.302 新增的子代理機制：允許一個 agent 在單次執行中遞迴呼叫其他 agent 當子工具；caps 為最大深度、並行數、token 預算等上限參數，用來避免 agent 自我呼叫無限遞迴耗盡算力，是對 Vercel AI SDK 7 WorkflowAgent 的直接對打設計。

[^session-store]: Claude Agent SDK 0.3.302 新增的跨 session 狀態儲存介面：將 agent 的工作記憶、工具呼叫結果、使用者偏好序列化到本地檔案或 KV store，下次啟動時 resume 續跑；對應 Vercel AI SDK 7 的 durable storage execution state，形成 TS Agent 底層的雙強競爭。

[^promptfoo]: 開源 LLM eval 框架，以 YAML 檔描述 prompt、資料集、模型與 assertion 三軸矩陣，CLI 一行即可跑 regression 並輸出比對報告；OpenAI 2026-10 deprecations 頁明文指為 Evals 2026-11-30 下線後的官方建議遷移目標之一。

[^margin-dilution]: 晶圓代工新製程量產爬坡期因低良率、高折舊、設備攤提集中而壓抑整體毛利率的現象；TSMC Q3 2026 法說承認 2nm ramp 將拉低 2026 全年毛利 ~2 ppt，但 Q4 單季毛利仍可維持 59.5–61.5% 區間，屬可控的過渡壓力。

## 📚 引用來源

1. [Macworld — iPhone Duo pre-order live blog delivery delays Jan 25 2027](https://macworld.com/article/3262078/iphone-duo-pre-order-live-blog-how-quickly-will-apples-folding-phone-sell-out.html) — 2026-10
2. [Mactrast — Apple Stores to Have Limited Availability](https://www.mactrast.com/?p=173677) — 2026-10
3. [NewsBytes — Apple launches iPhone Duo Oct 23 with limited store availability](https://www.newsbytesapp.com/news/science/apple-launches-iphone-duo-oct-23-with-limited-store-availability/tldr) — 2026-10-19
4. [iPhone in Canada — How to Track iPhone Duo Stock](https://www.iphoneincanada.ca/2026/10/21/how-to-track-iphone-duo-stock-canada-us/) — 2026-10-21
5. [Zeera — iPhone Duo Sold Out in Minutes](https://zeerawireless.com/ko/blogs/news/iphone-duo-sold-out-shipping-delay-apple-store-pickup) — 2026-10
6. [BGov — Anthropic Targets Mega-IPO Before Thanksgiving Holiday](https://news.bgov.com/banking-law/anthropic-said-to-target-mega-ipo-before-thanksgiving-holiday) — 2026-10
7. [Implicator — Anthropic could start IPO roadshow week of Nov 9](https://www.implicator.ai/anthropic-could-start-ipo-roadshow-week-of-nov-9-putting-debut-before-thanksgiving/) — 2026-10
8. [Parameter — Claude creator prepares $100B public offering](https://parameter.io/claude-creator-prepares-100-billion-public-offering-ahead-of-thanksgiving/) — 2026-10
9. [CryptoBriefing — Anthropic targets November IPO delay](https://cryptobriefing.com/anthropic-targets-november-ipo-delay/) — 2026-10
10. [Forkast — Anthropic IPO EDGAR 10 月窗口無公開 S-1](https://forkast.news/?p=131253) — 2026-10-04
11. [OpenAI Developers — Evals Guide](https://developers.openai.com/api/docs/guides/evals) — 2026
12. [kingy.ai — OpenAI Evals read-only Oct 31 shutdown](https://kingy.ai/ai-launch-tracker/openai-evals-read-only-october-31-shutdown-november-30-2026/) — 2026
13. [Langfuse — Migrate from OpenAI Evals](https://langfuse.com/resources/engineering/migrate-from-openai-evals) — 2026
14. [qaskills.sh — OpenAI Evals platform shutdown migration](https://qaskills.sh/blog/openai-evals-platform-shutdown-migration-2026) — 2026
15. [hidekazu-konishi — OpenAI Agent Builder Evals reusable prompts shutdown](https://hidekazu-konishi.com/entry/openai_agent_builder_evals_and_reusable_prompts_shutdown.html) — 2026
16. [DevelopersDigest — Claude Agent SDK 2026 What's New](https://www.developersdigest.tech/blog/claude-agent-sdk-whats-new-2026) — 2026-10
17. [uanalyze — 數發部祭百億資金催生 AI 新創 100 片 GPU 算力池](https://uanalyze.com.tw/articles/1078148404) — 2026-10
18. [遠見 — 國發會副主委詹方冠訪談 AI 政策 1,366 億](https://www.gvm.com.tw/article/131848) — 2026
19. [Taiwan News — Computex 賴清德 AI 新十大建設 2040 50 萬 AI 人才 1000 億計畫](https://www.taiwannews.com.tw/zh/news/6374811) — 2026
20. [Inside — 台灣新創 StartupBlink 2026 排名](https://www.inside.com.tw/tag/新創) — 2026
21. [InvestingLive — TSMC profit jumps nearly 70% on AI demand](https://investinglive.com/stocks/icymi-tsmc-profit-jumps-nearly-70-on-ai-demand-but-margin-outlook-weighs-on-shares/) — 2026-10-15
22. [TrendForce — TSMC 2027 2028 capex 上修 $105B](https://www.trendforce.com/news/?p=65394) — 2026
23. [uanalyze — 10/19 台股盤後台積電 2420 加權 46822](https://uanalyze.com.tw/articles/4102155153) — 2026-10-19
24. [CryptoBriefing — TSMC Q4 revenue up 61%](https://cryptobriefing.com/tsmc-q4-revenue-forecast-record-q3-profit/) — 2026-10
25. [Towards AI — MCP Registries in Mid-2026](https://pub.towardsai.net/mcp-registries-in-mid-2026-one-upstream-won-2ce541b92036) — 2026
26. [Shopify Changelog — WebMCP support for checkout](https://shopify.dev/changelog/posts/webmcp-support-for-checkout.md) — 2026-09-28
27. [ThePaypers — Shopify extends WebMCP support to checkout for AI agents](https://thepaypers.com/payments/news/shopify-extends-webmcp-support-to-checkout-for-ai-agents) — 2026
