---
title: 每日創業情報 — 2026-11-10
date: 2026-11-10
tags: 創業情報, AI 產業, SaaS, 台灣
summary: T-0 三題齊發當日（TiBOOST 決賽 09:30–17:30 / TSMC 10 月月營收公告日 / Anthropic roadshow 最早合法起始日）+ Anthropic 估值 Bloomberg 口徑下修 $1.2–1.3T + Reuters 投資人質疑 11 月能否開跑 + Composer 2.5 vs Opus 5.5 CursorBench 4.0 口徑修正（27.7% vs 57.8% / 差 30 分而非 4 分）+ Cursor CEO 口徑 OpenAI 僅佔 5% 流量 + iPhone Duo 中國炒家虧損普遍 + 立院中小微 T+42 / 數發部 T+37 無新進度。
keywords: TSMC 10 月月營收 2026 T-0 11月10日 YoY MoM Q4 guidance 單月 5544 億 2025-10 base 16.9%, TiBOOST 決賽 11月10日 台北漢來 3F 鉑金B 23 國 396 件 12 強 前三 250 150 100 萬, Anthropic roadshow T-0 11月10日 SEC 15 日 earliest start price range blank Bloomberg $1.2-1.3T Reuters doubt, Composer 2.5 vs Opus 5.5 CursorBench 4.0 口徑修正 27.7% vs 57.8% BenchLM 13 Bito 混搭 75%, Cursor CEO OpenAI 5% 流量 Composer 2.5 $0.68 Opus 5.5 Max $13.43 Bito 混搭 57% 省, OpenAI Agent Builder EOL T-20 11月30日 Thanksgiving 16 天 Agents SDK Workspace Agents, iPhone Duo Day 19 Week 2 Day 12 工作日回歸第二日 中國炒家虧損 深圳 1TB 黑色 砍 2800 RMB, Smithery T+10 Day +10 Arcade.dev directory 第二週第二日 ToolBench 43,400+ servers, MCP Registry 30,375 unique 99,114 records 36% stale 2026-07-28 spec 第 105 日, 立法院中小微企業轉型條例 T+42 R&D 抵減 20% 轉型設備 25 萬 11 月排審無進度, 數發部 100 億 AI T+37 10 家 NT 2.55 億 境外公司 Dealroom 36 家搭配投資人
---

# 每日創業情報 — 2026-11-10

## 🎯 今日 TL;DR

- **🔄 T-0 三題齊發當日：TiBOOST[^tiboost] 決賽 09:30–17:30 / TSMC 10 月月營收公告日 / Anthropic roadshow 最早合法起始日**：三題同日落在今天（11/10 週二）→ 全年最密集的「台灣—全球—AI 資本」內容窗口；Live blog（三題交錯直播）+ 1 小時快拆（公告 / 得主 / roadshow 情境命中）+ 24h 連動深度文（11/11 情境命中分析）+ 11/13 pricing day 續行 → 四段輸出劇本為全年少見；對仍走中文技術 blog / newsletter 的 solo dev，T-0 為「快拆 + 情境命中」黃金窗口
- **🆕 Anthropic 估值 Bloomberg 口徑進一步下修 $1.2–1.3T（部分買方 $1.1T）+ Reuters 11/5 口徑投資人懷疑 11/9 當週能否開跑 + 11/10 T-0 情境三分支（盤前 A2 填 price / 無動靜 / 公告延後）**：11/09 brief 僅記 $1.5–1.6T；11/10 更新為 Bloomberg 11/6 口徑 $1.2–1.3T（約下修 $300B）+ Reuters 11/5 AI 科技股賣壓後「11/9 當週能否開跑」疑慮；截至 11/09 EDGAR 仍無 A2 填入 price range → 11/10 當日為 S-1/A2 是否補發決定性窗口；對台灣 Claude 大客戶：若估值續下修、上市後 Claude Pro / Teams / Enterprise 定價壓力溫和機率升高
- **🆕 Composer 2.5 vs Opus 5.5 CursorBench[^cursorbench] 4.0 口徑修正（27.7% vs 57.8% / 差 30 分，非過去「62 vs 66 / 差 4 分」）+ Cursor CEO 口徑 OpenAI 僅占 5% 流量 + Bito 混搭 75% / 省 57%**：11/09 brief 引用的「SWE-Bench 79.8 / Terminal-Bench 69.3 / Artificial Analysis 62 vs 66」為 **Cursor 自家數據 × Opus 4.7（非 5.5）**，獨立驗證有限；CursorBench 4.0 口徑：Opus 5.5 Max 57.8% / Composer 2.5 27.7%（排名 50/57，差 30 分）；成本 $0.68 vs $13.43（約差 20 倍）；Bito 混搭測試「常規 Composer + 難題 Opus」= 75% / 比純 Opus 省 57%；OpenAI 僅占 Cursor 流量 5% → 11/12 切斷對 Cursor 整體衝擊比媒體口徑小、但對 solo dev 選型敘事仍為重要節點
- **🔄 OpenAI 11/12 砍 Cursor Models T-2（11/10 → 11/12）+ 11/21 GPT-5.6 Sol 促銷價表矛盾視窗 9 天續行 + OpenAI / Cursor 無新公告 + migration 路徑由 Composer 2.5 單一模型 vs Claude Opus 5.5 vs OpenRouter 第三方中繼三分**：第三方媒體口徑仍以「proposed」為主、OpenAI 未發正式最終日期；對仍重度綁 GPT-5.6 Sol 的 solo dev：T-2 為「最後 48 小時 Composer 2.5 vs Opus 5.5 vs Codex CLI benchmark」最後窗口；benchmark 口徑建議重跑 CursorBench 4.0 而非 Cursor 自家舊 benchmark
- **🔄 TSMC 10 月月營收 T-0（11/10 預估公告）— Q4 Guidance 單月均 NT$ 5,544–5,756 億對照 + 9 月 YoY +54.6% / 1–9 月累計 YoY +41.1% 基準線 + 2025-10 base YoY +16.9%（去年「近一年半最慢」）極大 base effect**：Q4 guidance $52.3–54.3B × NT$31.8 ≈ NT$1.663–1.727 兆、單月均 NT$5,544–5,756 億；若 10 月落 5,500 億 → YoY +50% 區間、AI 需求續強；若落回 5,000 億以下 → 與 9 月 +54.6% 首次收斂、晨星 / 大和 / 巴隆口徑可能重演；若 YoY 回落 +16.9% base 附近 → AI megatrend 動能明顯轉弱
- **🔄 TiBOOST 決賽 T-0（11/10 週二 09:30–17:30 台北漢來大飯店 3F 鉑金 B 廳）— 23 國 396 件 → 12 強（國內 9 + 海外 3）+ 前三 250/150/100 萬 + 技術棧決賽前未公開 → 17:30 後為「得主技術棧快拆 + 一人 SaaS 複製難度評分」黃金輸出窗口**：各團隊決賽前**未公開技術棧細節**；行動貝果（MoBagel）[^mobagel]歷史 AutoML Decanter AI、醫守（EDoc）醫療 LLM、台灣若美新面孔；17:30 得主公布後 24h 內為「中文技術棧快拆 + 境外公司補助 Dealroom 口徑對照 + 一人 SaaS 複製難度評分」稀缺內容窗口
- **🔄 iPhone Duo Day 19 Week 2 Day 12（11/10 週二）— 工作日回歸第二日 + 中國炒家虧損普遍 + 深圳 1TB 黑色加價砍 2,800 RMB + Vietnamnet 螢幕憂慮折價倒賣**：Gizmochina 11/05 口徑「幾乎所有炒 iPhone Duo 的黃牛現在都在虧錢」+ 杭州頤高數碼城商家口徑；SCMP 口徑 China premium evaporating；越南用戶因螢幕憂慮大幅折價倒賣；香港 Sin Tat Plaza 密封 2TB 一度達 HK$33,000 為高點；台灣 11 月第 2 週尚無二手行情中文媒體具體報導 → 新鮮度極高；Day 19 為工作日第二日、可做「工作日 vs 週末差額曲線」確認
- **🔄 OpenAI Agent Builder EOL T-20（11/10 → 11/30）— 剩 20 天 + Thanksgiving 11/26 前美國窗口剩 16 天 + migration guide 無自動工具、僅「Code → Agents SDK → TS/Python 複製貼上」+ workflow graph 不保 + ChatKit 不下線續行**：OpenAI 官方 migration guide 僅為 export 流程、不保證完整遷移；Agents SDK 與 Workspace Agents 雙路分化續行；Evals 11/30 全下線倒數 T-20 第 10 日；Promptfoo[^promptfoo] 續為主要替代、Langfuse[^langfuse] 併用紅隊 / observability
- **🔄 Smithery MCP Proxy T+10 Day +10（11/10 週二）— 連續 2 週中立性觀察第二週第二日 + MCP 2026-07-28 spec 生效第 105 日 + 11 月無新 Registry 數字刷新**：10/31 UTC 00:00 下線後第 10 日；第二週第二日切片；MCP Registry 9 月口徑 30,375 unique / 99,114 records / 36% stale 為最新權威數字（11 月無刷新）；ToolBench 43,400+ servers / 219,069 tools 為 Arcade 自家口徑（持保留）
- **🔄 立法院中小微企業 1,000 億轉型條例 T+42（11/10 週二）+ 本週（11/10–11/14）為委員會排審窗口首個觀察週第二日 + 立院公開議程 2026-07/08 後無更新 + 11 月通過機率極低**：10/8 行政院通過草案、原規劃 9 月送立院；立院經濟委員會公開議程最新仍為 2026-07/08 能源管理法；T+42 仍無進展訊號；R&D 抵減率 20% / 轉型設備投資抵減門檻 25 萬 / 171.6 萬家受惠為既定 soundbite；本週排審窗口首個觀察週第二日無媒體新進度
- **🔄 數發部 100 億 AI T+37（11/10 週二）— 8 月底累計口徑 10 家 / NT$ 2.55 億 / 民間帶動 NT$ 5.7 億 + 境外公司放寬 3 條件續行 + 36 家搭配投資人續行 + 11 月無 pipeline 刷新 + SBIR 2026-01 起上限調高為替代路徑**：11 月無新 pipeline 公告、第三方口徑最新仍為 CNA 10/04；SBIR 自 2026-01-01 起調高上限（先期研究 150 萬、研究開發 1,200 萬、加值應用 600 萬）+ 無人載具 / AI 智慧應用 / 淨零 三大核心、對 solo dev 為替代路徑

## 🔄 昨日追蹤

- **🔄 Anthropic S-1 / IPO Day +15 → T-0**：roadshow T-1 → T-0（最早合法起始日當日）；Bloomberg 11/6 口徑估值下修 $1.2–1.3T + Reuters 11/5 投資人懷疑 11/9 當週能否開跑；EDGAR CIK 2130357 仍無 A2
- **🔄 TiBOOST T-1 → T-0**：11/10 週二決賽當日；17:30 得主公布後 24h 為快拆窗口
- **🔄 TSMC 10 月月營收 T-1 → T-0**：11/10 預估公告當日；Q4 guidance 單月均 NT$ 5,544–5,756 億對照
- **🔄 OpenAI Agent Builder EOL T-21 → T-20**：migration tool 仍無新增、僅 export 流程 + Agents SDK / Workspace Agents 雙路分化
- **🔄 OpenAI 11/12 砍 Cursor Models T-3 → T-2**：Cursor CEO 口徑 OpenAI 僅占 5% 流量為新增、CursorBench 4.0 口徑修正為新增
- **🔄 iPhone Duo Day 18 → Day 19**：Week 2 Day 11 → Day 12；工作日回歸首日 → 第二日；中國炒家虧損普遍 + 深圳 1TB 黑色砍 2,800 RMB
- **🔄 Smithery T+9 → T+10**：第二週第一日 → 第二日
- **🔄 立法院中小微企業 T+41 → T+42**：排審窗口首個觀察週首日 → 第二日
- **🔄 數發部 100 億 AI T+36 → T+37**：11 月無 pipeline 刷新
- **🆕 Composer 2.5 vs Opus 5.5 CursorBench 4.0 口徑修正首刊**：11/09 brief 引用的 62 vs 66 為 Opus 4.7、非 5.5；CursorBench 4.0 Opus 5.5 Max 57.8% vs Composer 2.5 27.7% 差 30 分

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🔄 TSMC 10 月月營收 T-0（11/10 預估公告）— Q4 Guidance 單月均 NT$ 5,544–5,756 億 + 9 月基準 NT$ 5,118.57 億（YoY +54.6% / MoM −0.6%）+ 1–9 月累計 NT$ 3 兆 8,987.3 億（YoY +41.1%）+ 2025-10 base NT$ 3,674.7 億（YoY +16.9% 近一年半最慢）為極大 base effect + 全年美元口徑 YoY +44%**：公告通常 TW 下午 2pm 前後；若 10 月落 NT$ 5,500 億 → YoY 約 +50% / AI 需求續強、若落 NT$ 5,000 億以下 → 與 9 月 +54.6% 首次收斂、若落 NT$ 4,300 億（+16.9% base）附近 → AI megatrend 動能明顯轉弱 | [TSMC IR — 2026 Monthly Revenue](https://investor.tsmc.com/english/monthly-revenue/2026)、[SEC Form 6-K — TSMC Revenue 2026-10-08（9 月）](https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000658/tsm-revenue20260910.htm)、[finance.technews — 台積電 9 月自結](https://finance.technews.tw/2026/10/08/tsmc-2330-202609-financial-report/)、[cmoney — 上調 2026 全年營收成長率 44%](https://www.cmoney.tw/notes/note-detail.aspx?nid=1289234)、[statementdog — 2025-10 YoY +16.9% 近一年半最慢](https://statementdog.com/news/14961)、[uanalyze — AI 熱潮沒退 2025-10](https://uanalyze.com.tw/articles/1748638292) | 對一人 SaaS inference 成本：YoY +50% 區間 → N3 / N2 產能緊 → inference 單位成本續壓低速率續行；YoY +30–40% → 持平、連續 MoM 需同觀；YoY +16.9% base 附近 → inference 成本壓低速率首個明顯轉弱、Claude / OpenAI / Groq inference 定價壓力減緩 | 機會：T-0 當日「TSMC 10 月月營收公告 Live blog（盤中 vs 盤後） + 1 小時快拆 YoY 情境命中 + 對一人 SaaS inference 成本影響鏈 + TiBOOST 得主同日聯動解讀」；24h 內深度文「情境命中分析 + 連續 3 個月 MoM 結構拆解 + Q4 guidance 單月均偏差率」；威脅：base effect 跳變大、YoY 需對照連續 3 個月 MoM 才有結構意義、單月不足以判 AI megatrend |
| **🔄 TiBOOST 決賽 T-0（11/10 週二 09:30–17:30 台北漢來大飯店 3F 鉑金 B 廳）— 23 國 396 件 → 12 強（國內 9 + 海外 3）+ 前三 250/150/100 萬 + 技術棧決賽前未公開 + 17:30 得主公布後 24h 為「技術棧快拆 + 一人 SaaS 複製難度評分」稀缺內容窗口**：國內 9：台灣若美、行動貝果、亞洲準譯、融文國際、振生半導體、動見科技、翔評互動、築智科技、醫守科技；海外 3：ASKaFOX（加拿大）、Bering Lab（韓國）、DOGU Robotics（韓國）；資格包含「技術符合 AI 新十大建設」+「已完成至少一輪外部募資或初步市場驗證」+「尚未在臺灣創新板上市」3 條件 | [money.udn — TiBOOST 11/10 登場](https://money.udn.com/money/story/5607/9854887)、[money.udn — 證交所 TiBOOST 12 強揭曉](https://money.udn.com/money/story/5607/9841179)、[money.udn — 創新大步串聯國際](https://money.udn.com/money/story/5607/9855258)、[ctee — TiBOOST 11/10 登場](https://www.ctee.com.tw/news/20261103701637-430201)、[cnyes — TiBOOST 決賽頒獎典禮](https://news.cnyes.com/news/id/6320136) | T-0 為「12 強技術棧猜測驗證日」+ 17:30 後得主公布 24h 內為「技術棧快拆 + 一人 SaaS 複製難度評分」黃金窗口；對照 Composer 2.5 口徑修正 + TSMC 月營收公告 → 同日三合一聯動；12 強中行動貝果 / 醫守為台灣少數「同時具 B2B 企業客戶與 API 銷售」等級、對 solo dev 直接參照度中等 | 機會：T-0 當日「TiBOOST 決賽 Live blog 09:30–17:30（評審關注趨勢觀察 + 得主技術棧猜測驗證）+ 17:30 得主快拆 + 一人 SaaS 複製難度評分表 + 境外公司補助 Dealroom[^dealroom-3] 口徑對照 + 與 TSMC 月營收 / Anthropic roadshow 同日 3 合 1 聯動」；11/11 深度拆解前 3 名；威脅：12 強中僅 2–3 組接近「一人或 2–3 人小團隊」等級、對 solo dev 直接參照度有限；500 萬獎金池相對 AWS / Google 補助屬中小級 |
| **🔄 Anthropic S-1 Day +15 — roadshow 最早合法起始日 T-0（11/10 當日）+ EDGAR CIK 2130357 無 A2 + Bloomberg 口徑估值下修 $1.2–1.3T（部分買方 $1.1T）+ Reuters 11/5 投資人懷疑 11/9 當週能否開跑 + 情境三分支（盤前 A2 / 無動靜 / 公告延後）**：10/26 公開 S-1 → 11/02 A1（Sacra 口徑加 Q3 2026 財報、price range 仍空白）→ 15 日 SEC 規則 → 11/10 T-0；11/11 退伍軍人節 SEC 休市 → earliest pricing 11/13 / earliest 交易 11/16；Fox / Newsquawk 情境 11/19–11/20；Bloomberg 11/6 口徑 $1.2–1.3T vs Reuters 11/5 $1.5T vs 10 月初 ~$2T 明顯回落 | [Sacra — Anthropic S-1 Amendment Not Finalizing IPO](https://sacra.com/chat/h/a2d43b74-19f7-450e-a230-cb99d77e4a15/)、[FinanceFeeds — Anthropic IPO Roadshow Looms With No Price Range](https://financefeeds.com/anthropic-ipo-roadshow-looms-with-no-price-range/)、[Venture Magazine — Anthropic IPO Roadshow Faces Valuation Pushback](https://venturemagazine.net/blog/anthropics-ipo-roadshow-faces-valuation-pushback-after-the-ai-selloff)、[LetsDataScience — Reuters Investors Doubt Anthropic Can Hold November IPO Roadshow](https://letsdatascience.com/news/investors-doubt-anthropic-can-hold-november-ipo-roadshow-reu-a69a034f)、[PrimeXBT — Anthropic to begin IPO roadshow next week](https://primexbt.com/news/anthropic-to-begin-ipo-roadshow-next-week-as-it-seeks-nasdaq-listing/) | 對台灣 Claude 大客戶：估值續下修（$2T → $1.5T → $1.2–1.3T）→ 上市後 Claude Pro / Teams / Enterprise 定價壓力溫和機率續升；若 11/10 當日仍無 A2 → Bloomberg 11/23 情境延伸、WSJ 11/16 pricing week 情境明顯降權 | 機會：T-0 當日「Anthropic roadshow 11/10 情境三分支判讀 Live blog + Bloomberg $1.2–1.3T 口徑下修對台灣 Claude 大客戶定價預期的影響 + EDGAR CIK 2130357 檢核」；24h 內「若 roadshow 當日啟動 → Fund 認購信件最早今日流出對照」；威脅：Reuters 11/5 口徑投資人懷疑 11/9 當週能否開跑 → 若延後至 Q1 2027 情境、11/16 WSJ pricing week 情境降權；S-1 / A2 日期仍有 Sacra 單源風險 |
| **🔄 立法院中小微企業 1,000 億轉型條例 T+42 + 本週（11/10–11/14）為委員會排審窗口首個觀察週第二日 + 立院公開議程 2026-07/08 後無更新 + 11 月通過機率極低 + 171.6 萬家受惠為既定 soundbite**：10/8 行政院通過草案、原規劃 9 月送立院、實際送審時點晚於原定；立院經濟委員會公開議程最新仍為 2026-07/08 能源管理法；T+42 仍無進展訊號；R&D 抵減率 20% / 轉型設備投資抵減門檻 25 萬 / 171.6 萬家受惠 soundbite 續行 | [CNA — 政院修法投入千億助中小微企業升級](https://cna.com.tw/news/aipl/202610080165.aspx)、[uanalyze — 171.6 萬家受惠](https://uanalyze.com.tw/articles/5191156753)、[CNA — 中小微企業轉型條例擬 9 月送立院](https://cna.com.tw/news/afe/202608260104.aspx)、[1111 — 8 年砸千億](https://www.1111.com.tw/news/jobns/167737)、[立法院議事紀錄](https://www.ly.gov.tw/pages/MeetingList.aspx?nodeid=135) | 若法案通過，R&D 抵減率自約 15% 提高至 20%、轉型設備投資抵減門檻自產業創新條例 100 萬降至 25 萬；本週為立院排審首個觀察週第二日、無媒體新進度 → 11 月通過機率極低、但 25 萬門檻對 solo dev 轉型升級為新契機 | 機會：「11/10 立法院新會期第 6 週第二日 + 中小微條例委員會排審預測續行」+「25 萬元設備投資抵減自認試算 + R&D 20% 抵減個案拆解 + 與產業創新條例 100 萬門檻對比」深度文；威脅：送審至三讀期程 3–12 個月、11 月底前通過機率極低、11 月排審窗口可能流失到 12 月 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🆕 Composer 2.5 vs Opus 5.5 CursorBench 4.0 口徑修正 — 27.7% vs 57.8%（差 30 分）+ 排名 50/57 + 成本 $0.68 vs $13.43（差 20 倍）+ Bito 混搭 75% / 省 57% + BenchLM 2026-11-07 Composer 2.5 第 13**：11/09 brief 引用的「SWE-Bench 79.8 / Terminal-Bench 69.3 / Artificial Analysis 62 vs 66」為 **Cursor 自家數據 × Opus 4.7（非 5.5）**、獨立驗證有限；CursorBench 4.0 口徑：Opus 5.5 Max 57.8%、Composer 2.5 27.7%（差 30 分、非 4 分）；Opus 5.5 High 3.97 / 56.0%；Bito 混搭測試「常規 Composer + 難題 Opus」= 75% / 比純 Opus 省 57%（純 Opus 90%） | AI coding / 模型選型 / benchmark 口徑修正 | 對仍以 Cursor 為主的 solo dev：benchmark 口徑修正後選型敘事改變 — Composer 2.5 **不是 Opus 5.5 近戰領域**、而是「成本敏感大量 batch task / 常規 task 快速原型」用途；重度編碼仍需 Opus 5.5 Max / High；Bito 混搭為新中點（常規 Composer + 難題 Opus 75% + 省 57%） | Cursor Plus $8 / Premium $30 / Super $100 / Ultra $200；Claude API Opus 5.5 $4/M in $20/M out、Sonnet 5.5 $2/$10、Haiku 5.5 $0.10/$0.50（<100K）；Composer 2.5 標準價 $0.50/M in $2.50/M out（163.com 口徑） | vs 11/09 口徑「Composer 2.5 近 Opus 4.7」：CursorBench 4.0 口徑差 30 分、非 4 分；vs 11/10 新敘事「Composer 2.5 定位常規快速、Opus 5.5 Max / High 定位重度」；vs 純 Opus 5.5 Max vs 混搭 Bito：混搭省 57% 但降 15 分 | 🔴 重度編碼 solo dev：堅守 Opus 5.5 Max / High、Composer 2.5 不建議當主力；🟡 成本敏感 batch task / 常規 PR：Composer 2.5 可試；🟢 Bito 混搭：常規 Composer + 難題 Opus 75% + 省 57% 為新中點；🔴 11/09 brief 口徑「62 vs 66」已過時、需重跑 CursorBench 4.0 |
| **🔄 OpenAI 11/12 砍 Cursor Models T-2（11/10 → 11/12 切斷 + 11/21 GPT-5.6 Sol 促銷價表到期）— OpenAI / Cursor 無新公告 + Cursor CEO 口徑 OpenAI 僅占 5% 流量 + 替代 stack 三分（Composer 2.5 / Claude Opus 5.5 / Codex CLI / OpenRouter）** | AI coding / 模型供應鏈 / 選型節點 | 仍以 Cursor 為主的 solo dev：T-2 為「最後 48 小時 Composer 2.5 vs Opus 5.5 vs Codex CLI benchmark」最後窗口；考慮切換到 Claude Opus 5.5（直連 Anthropic）或 Codex CLI 自家；OpenAI 僅占 5% 流量 → 對 Cursor 整體衝擊比媒體口徑小、但對 solo dev 選型敘事仍為重要節點；BYOK 與 gateway credentials 不適用 Cursor Tab / Auto / Cloud Agents | Cursor Plus $8 / Premium $30 / Super $100 / Ultra $200；Claude API Opus 5.5 $4/M in $20/M out；Codex CLI 自家計費；Composer 2.5 標準價 $0.50/M in $2.50/M out | vs 繼續用 Cursor：Composer 2.5 補 OpenAI 空缺但 benchmark 差 30 分、需配 Opus 5.5 混搭；vs 直接走 Claude Code CLI：訂閱結構與工作流差異大、對 Cursor 熟悉者切換成本中等；vs Codex 自家 CLI + ChatGPT Pro：仍有 OpenAI 模型直連但無 Cursor 的編輯器體驗；vs OpenRouter 第三方中繼：延遲與定價不穩 | 🔴 重度依賴 GPT-5.6 Sol：T-2 立刻並行跑 CursorBench 4.0 口徑 Composer 2.5 vs Opus 5.5 benchmark；🟡 Claude 已是主力：T-2 不急、僅確認 Cursor fallback；🟢 全走 Claude Code CLI：無影響；🔴 BYOK 用戶：確認僅 local Chat / Agent 續行 |
| **🔄 OpenAI Agent Builder EOL T-20（11/10 → 11/30）— Thanksgiving 11/26 前美國窗口剩 16 天 + migration guide 無自動工具、僅 Code → Agents SDK → TS/Python 複製貼上 + workflow graph 不保 + ChatKit 不下線續行 + Evals read-only Day +10** | AI agent / T-20 最後 20 天 | Agent Builder 用戶：工程師 production → Agents SDK（TS / Python），非工程師可編輯 → ChatGPT Workspace Agents（需 Business / Enterprise / Edu workspace）；OpenAI 官方明示「不保證 workflow graph 轉換、不保證每項行為完整遷移」→ 視 Agents SDK export 為 scaffold；Evals 用戶：匯出 dataset + Promptfoo YAML 轉換；reusable prompts 用戶：Playwright / Puppeteer dashboard 爬取 | Promptfoo 開源 MIT；Langfuse 社群版免費 / Pro $59/mo / Enterprise custom；ChatKit 保留不計 | vs ChatKit（embeddable chat UI 保留）；Agents SDK 選「engineer-owned workflow」、Workspace Agents 選「non-engineer editable automation」；Evals 遷移目標 Promptfoo + Langfuse 混搭；Agents SDK export 僅第一稿、knowledge bases / custom tools 可能需手工 rework | 🔴 Agent Builder 用戶：T-20 Thanksgiving 前 16 天、建議 rebuild in Agents SDK（export 僅第一稿、workflow graph 不保）；🟡 Evals 用戶：若尚未匯出 dataset，Thanksgiving（11/26）前補完；🟢 red-teaming 需求：保留 Promptfoo + Langfuse 混搭 |
| **🔄 Smithery MCP Proxy T+10 Day +10（11/10 週二）— 連續 2 週中立性觀察第二週第二日 + Arcade.dev directory × ToolBench grading 利益衝突監測第二週第二日 + MCP 2026-07-28 spec 生效第 105 日 + 11 月無 Registry 數字刷新 + ToolBench 43,400+ servers / 219,069 tools（Arcade 自家口徑持保留）** | MCP infrastructure / 第二週第二日 | 已遷移完成的團隊：週二為「連續 2 週中立性觀察第二週第二日」切片；未遷移團隊：用 vendor 官方 MCP URL + 自建或選第三方 OAuth 2.1 identity provider 補 auth / session management；對 2026-07-28 spec 支援度為選型新指標；MCP Registry 9 月口徑 30,375 unique / 99,114 records / 36% stale 為最新權威數字（11 月無刷新） | Arcade.dev directory 使用者端免費；modelcontextprotocol.io 官方 registry 免費；Pulse MCP / mcp-get 免費 | vs 直接 vendor 官方 MCP URL / Pulse MCP / mcp-get / modelcontextprotocol.io 官方 registry（2,000+ servers、server.json manifest、9 月口徑 30,375 unique / 99,114 records）；差異在 Arcade 2026-08-05 已收購 Smithery + 同時運營 ToolBench grading；ToolBench 43,400+ / 219,069 工具為 Arcade 自家數字、持保留 | 🔴 現用 Smithery 團隊：T+10 Day +10 退款到帳二次檢查；🟡 Arcade 中立性觀察：第二週第二日切片、月底前可做「連續 2 週中立性觀察終結報告」；🟢 新建 MCP server：直接走 vendor 官方 URL + 考慮同步登記官方 MCP Registry + 確認對 2026-07-28 spec 支援 |
| **🔄 Claude 5.5 家族三層混搭 + Claude Code 2.1 Skills / Subagent nesting 5 levels / disallowed-tools frontmatter + Composer 2.5 口徑修正後「混搭」為新中點**：Opus 5.5（$4/$20、orchestrator）+ Sonnet 5.5（$2/$10、draft / bugfix）+ Haiku 5.5（$0.10/$0.50 <100K、sub-agent）三層成本比約 40:20:1；Claude Code 2.1.197（6/30）Sonnet 5 預設 + 1M context、2.1.172 subagent nesting 5 levels、2.1.198 subagent creation flow 改、Skills preload 進 subagent context、disallowed-tools frontmatter | LLM 模型家族 + Agent 框架 底層 + Composer 2.5 口徑修正 | 一人 SaaS inference stack 續行穩定；Claude Code 2.1 Skills 已成為 agent 工具跨 vendor 共通設定（AGENTS.md）落地路徑；Composer 2.5 benchmark 口徑修正後定位改變 → Bito 混搭（常規 Composer + 難題 Opus）75% + 省 57% 為新中點、純 Opus 5.5 Max 90% 為新最強 | Claude API 計費；SDK 開源免費；Composer 2.5 併入 Cursor 訂閱；Cursor CLI 用 Composer 2.5 fast mode 平均 $0.44 / task | vs 11/12 後 Cursor OpenAI 退場：Claude 5.5 三層 + Agent SDK 直連為最穩走法；Composer 2.5 底層走 Kimi K2.5 + Cursor RL、CursorBench 4.0 落後 Opus 5.5 Max 30 分；Bito 混搭為新中點 | 🟢 一人 SaaS：Opus 5.5 orchestrator + Haiku 5.5 tool-heavy sub-agent + Sonnet 5.5 doc / small code 3 層混搭已穩定；🟡 Composer 2.5：成本敏感 / 大量 batch task 可試、不宜當主力重度編碼；🔴 重度編碼：Claude Opus 5.5 Max / High 為主、Composer 2.5 混搭為省 57% 選項 |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：T-0 三題齊發當日 Live blog + 1 小時 3 情境命中分析（TiBOOST 得主 / TSMC 10 月月營收 / Anthropic roadshow） 🔄

- **痛點來源**：三題同日 11/10 公告 / 決賽 / 最早合法 roadshow 起始 → 全年最密集的「台灣—全球—AI 資本」內容窗口；中文技術媒體口徑整合近零；3 題「獨立發文」vs「同日 Live blog + 1 小時 3 情境命中分析」差異顯著；T-0 當日 Live blog × T+1 情境命中分析（11/11）× T+3 Anthropic pricing day 連動（11/13）× T+6 WSJ pricing week（11/16）四段連載視窗為全年少見
- **目標客群（台灣／亞洲）**：關注 AI 資本動向的台灣 solo dev + indie（估 2,000–5,000 位）+ 關注 TSMC / 台股 AI 類股的投資散戶（估 10,000–30,000 位）+ 關注 Anthropic Claude 訂閱定價預期的企業用戶（估 500–1,500 家）+ 想參照 TiBOOST 得主技術棧的新手 indie（估 1,500–3,000 位）
- **技術複雜度**：2/5 — 內容型；關鍵為「T-0 當日 09:30–17:30 TiBOOST 決賽 + TW 下午 2pm 前後 TSMC 月營收 + ET 上午 Anthropic A2 可能揭示」三題 Live blog 並行追蹤 + 17:30–20:00 1 小時 3 情境命中分析
- **預估 MRR**：one-off NT$ 150K–400K per 深度文 × 4 段連載 = NT$ 600K–1.6M；若做「每月 3 題同日聯動快拆」訂閱系列 → NT$ 500/mo × 400 用戶 ≈ NT$ 200K MRR；可 upsell 「Live blog 自動化流程」教學 Gumroad NT$ 2,000 × 50 份 ≈ NT$ 100K one-off
- **競品弱點**：中文技術媒體從未做過「同日 3 題 Live blog + 1 小時 3 情境命中分析」組合；財經媒體從「晶片 / 新創 / IPO」各自切入、不做跨議題聯動；大型技術媒體傾向財經角度、不會做「單人 Live blog 全程技術工作流」拆解；T-0 當日 17:30 得主公布 24h 內中文「技術棧快拆 + 一人 SaaS 複製難度評分」近零
- **切入建議**：11/10 當日 09:30 開始 Live blog（TiBOOST 決賽 09:30–17:30 + TSMC 月營收 TW 下午 2pm + Anthropic A2 可能 ET 上午）→ 17:30–20:00 1 小時 3 情境命中分析 → 11/11 情境命中分析深度文 → 11/13 Anthropic pricing day 連動快拆 → 11/16 WSJ pricing week 情境尾聲

### 點子 2：Composer 2.5 vs Opus 5.5 CursorBench 4.0 口徑修正深度文 + Bito 混搭 75% / 省 57% 實測 🆕

- **痛點來源**：11/09 brief 引用的「62 vs 66 / 差 4 分」為 **Cursor 自家數據 × Opus 4.7（非 5.5）**、獨立驗證有限；CursorBench 4.0 口徑：Opus 5.5 Max 57.8% / Composer 2.5 27.7%（差 30 分、非 4 分）、排名 50/57；Bito 混搭測試「常規 Composer + 難題 Opus」= 75% / 比純 Opus 省 57%（純 Opus 90%）；中文技術媒體口徑整合近零；對 solo dev 選型敘事影響重大
- **目標客群（台灣／亞洲）**：仍以 Cursor 為主的台灣 solo dev（估 2,000–5,000 位）+ 考慮切 Claude Opus 5.5 的中型團隊（估 200–600 家）+ 關注 AI coding 選型的技術 blogger / YouTuber（估 300–800 位）+ 成本敏感 batch task 用戶（估 500–1,500 位）
- **技術複雜度**：3/5 — 內容型 + 2–3 小時 benchmark；關鍵為「CursorBench 4.0 口徑修正拆解 + Bito 混搭 75% / 省 57% 原理 + 個人 1 小時 benchmark 腳本 + 常規 Composer + 難題 Opus 切換 heuristic」
- **預估 MRR**：one-off NT$ 80K–240K per 深度文；訂閱「每週 AI coding 選型週報」NT$ 300/mo × 400 用戶 ≈ NT$ 120K MRR；可 upsell 「Composer 2.5 vs Opus 5.5 個人 benchmark + Bito 混搭 heuristic」Gumroad NT$ 1,500 × 80 份 ≈ NT$ 120K one-off
- **競品弱點**：台灣技術媒體口徑整合 + Bito 混搭中文資源完全空白；大型技術媒體不會做「單人工作流實際 benchmark 口徑修正」拆解；小型技術 blog 不會追 CursorBench 4.0 vs Cursor 自家舊 benchmark 口徑差異；「Composer 2.5 vs Opus 5.5 Max / High 三檔對比」中文完全空白
- **切入建議**：11/10 寫「Composer 2.5 vs Opus 5.5 CursorBench 4.0 口徑修正 + Bito 混搭 75% / 省 57% 實測 + 個人 1 小時 benchmark 腳本 + 常規 Composer + 難題 Opus 切換 heuristic」 → 11/12 OpenAI 砍 Cursor 當日 Live blog → 11/19 第一週使用者反應深度文 → 11/26 Thanksgiving 前使用者回饋收尾

### 點子 3：iPhone Duo Day 19 Week 2 Day 12 工作日回歸第二日 Playwright 爬蟲 + 中港台三城「炒家虧損」深度文 🔄

- **痛點來源**：Day 19 Week 2 Day 12（11/10 週二）為工作日回歸第二日 → 可做「工作日 vs 週末差額曲線」確認；Gizmochina 11/05 口徑「幾乎所有炒 iPhone Duo 的黃牛現在都在虧錢」+ 杭州頤高數碼城商家口徑 + 深圳 1TB 黑色加價砍 2,800 RMB + SCMP 口徑 China premium evaporating + Vietnamnet 螢幕憂慮折價倒賣為少見中文對照數字；台灣 11 月第 2 週尚無二手行情中文媒體具體報導
- **目標客群**：想做價格爬蟲 side project 的台灣 indie（估 300–800 位）+ 關注 iPhone Duo 轉售的台灣 Apple 粉絲（估 5,000–15,000 位）+ 想學 Playwright + Postgres schema 設計的新手工程師（估 1,000–3,000 位）
- **技術複雜度**：3/5 — Playwright + Postgres schema + 週末 outlier 處理 + 7 日平均 vs 工作日平均 + SellCell 3 維度保值率比對 + 中港台三城「炒家虧損」切片
- **預估 MRR**：one-off NT$ 20K–80K per 爬蟲 + blog；訂閱「每週 iPhone Duo 三城含週末曲線對比」NT$ 200/mo × 180 用戶 ≈ NT$ 36K MRR；可 upsell Playwright + Postgres schema 開源 CLI + 「炒家虧損 heuristic」Gumroad NT$ 800 × 100 份 ≈ NT$ 80K one-off
- **競品弱點**：台灣中文 blog 對「炒家虧損 heuristic」方法論近零；中港 vs 台灣含週末樣本對比完全空白；中國預售 → 開賣首日 → Day 19 收斂 + 炒家虧損普遍中文數據解析稀缺；Vietnamnet 越南螢幕憂慮折價倒賣的中文對照點完全空白
- **切入建議**：11/10 寫「iPhone Duo Day 19 Week 2 Day 12 工作日回歸第二日 Playwright 爬蟲 + 中港台三城工作日 vs 週末差額曲線 + 中國炒家虧損普遍 + 深圳 1TB 黑色砍 2,800 RMB + 越南螢幕憂慮折價倒賣多城比對」 → 11/10–11/14 連續 5 個工作日發「Day 19–D23 工作日曲線」 → 11/14 週五發「D23 連續 2 週曲線 Week 2 vs Week 1 對比」

### 點子 4：OpenAI Agent Builder EOL T-20 Thanksgiving 前 migration 教學 + Agents SDK scaffold 實測 🔄

- **痛點來源**：OpenAI Agent Builder EOL T-20、Thanksgiving 11/26 前美國窗口剩 16 天；OpenAI 官方明示「不保證 workflow graph 轉換、不保證每項行為完整遷移」→ Agents SDK export 僅為 scaffold；中文技術媒體口徑整合 + Agents SDK 實測近零；Evals read-only Day +10 → 11/30 全下線倒數 20 天；ChatKit 不下線續行為中文資源空白點
- **目標客群（台灣／亞洲）**：仍用 OpenAI Agent Builder 的台灣 solo dev（估 500–1,500 位）+ 需遷移至 Agents SDK 的中型團隊（估 200–500 家）+ 關注 ChatGPT Workspace Agents（Business / Enterprise / Edu workspace）的台灣企業 IT（估 100–300 家）
- **技術複雜度**：3/5 — 內容型 + 2–3 小時 Agents SDK scaffold 實測；關鍵為「OpenAI 官方 migration guide 逐步拆解 + Agents SDK scaffold 實測踩坑 + ChatKit 續行保留對照 + Promptfoo / Langfuse 替代 stack」
- **預估 MRR**：one-off NT$ 60K–180K per 深度文；訂閱「每月 OpenAI / Anthropic / Cursor 選型週報」NT$ 400/mo × 200 用戶 ≈ NT$ 80K MRR；可 upsell 「Agents SDK migration scaffold + Promptfoo YAML 範本」Gumroad NT$ 2,000 × 50 份 ≈ NT$ 100K one-off
- **競品弱點**：中文技術媒體對 Agents SDK scaffold 實測踩坑近零；大型技術媒體不會做「單人工作流實際遷移成本」拆解；ChatKit 續行保留中文資源空白；OpenAI 官方 migration guide 翻譯 + 實測 + 踩坑中文完全空白
- **切入建議**：11/10 寫「OpenAI Agent Builder EOL T-20 Thanksgiving 前 migration 教學 + Agents SDK scaffold 實測踩坑 + ChatKit 續行保留 + Promptfoo / Langfuse 替代 stack」 → 11/16 「Agents SDK scaffold 實測踩坑第 2 週」 → 11/23 「Thanksgiving 前 migration 窗口剩 3 天」 → 11/30 「全下線實況」

## 🧰 工具堆疊更新

- **🆕 Composer 2.5 vs Opus 5.5 CursorBench 4.0 口徑修正**：Opus 5.5 Max 57.8% / Composer 2.5 27.7%（差 30 分、非 4 分）、排名 50/57；Opus 5.5 High 56.0% / $3.97；成本 $0.68 vs $13.43（差 20 倍）；Bito 混搭「常規 Composer + 難題 Opus」= 75% / 比純 Opus 省 57%（純 Opus 90%）；BenchLM 2026-11-07 Composer 2.5 第 13；11/09 brief 引用的「62 vs 66」為 Opus 4.7、非 5.5、需重跑 CursorBench 4.0
- **🆕 Cursor CEO 口徑 OpenAI 僅占 5% 流量**：OpenAI 11/12 砍 Cursor 對整體衝擊比媒體口徑小、但對 solo dev 選型敘事仍為重要節點；BYOK 與 gateway credentials 不適用 Cursor Tab / Auto / Cloud Agents
- **🆕 Anthropic 估值 Bloomberg 口徑進一步下修 $1.2–1.3T（部分買方 $1.1T）**：Reuters 11/5 口徑 $1.5T → Bloomberg 11/6 口徑 $1.2–1.3T；對照 10 月初 ~$2T → 明顯回落；Reuters 11/5 AI 科技股賣壓後「投資人懷疑 11/9 當週能否開跑」續行
- **🔄 OpenAI × Cursor 模型供應中止 T-2**：OpenAI 官方 help page 已公告 11/12 結束對 Cursor 的模型供應（起因於 8/14 Cursor 被 SpaceX 收購）；Cursor 模型文件仍把 GPT-5.6 Sol promotional pricing 排到 11/21 → 切斷後 9 天矛盾視窗；對一人 SaaS 影響：Claude Opus 5.5 / Cursor Composer 2.5 / Codex CLI 替代路徑成形；OpenAI / Cursor 無新公告
- **🔄 OpenAI Agent Builder EOL T-20 migration guide 明示「不保證完整遷移」**：OpenAI 官方 migration guide 僅為 export 流程：Agent Builder 內 Code → Agents SDK → TS/Python → 複製貼上；OpenAI 官方明示「不保證 workflow graph 轉換、不保證每項行為完整遷移」→ 視為 scaffold、後續仍需測試；Agents SDK vs Workspace Agents 雙路分化續行；ChatKit 不下線續行；Evals 11/30 全下線倒數 Day +10
- **🔄 MCP 2026-07-28 spec 生效第 105 日 + 11 月無 Registry 數字刷新**：stateless core / MCP Apps / Tasks / 強化 OAuth / 棄 Roots / Sampling / Logging / 棄初始 handshake 改 per-request versioning；MCP Registry 9 月口徑 30,375 unique / 99,114 records / 36% stale 為最新權威數字（11 月無刷新）；ToolBench 43,400+ servers / 219,069 tools 為 Arcade 自家口徑（持保留）
- **🔄 Claude Code 2.1 Skills + Subagent nesting 5 levels + disallowed-tools frontmatter 續行**：2.1.197（6/30）Sonnet 5 預設 + 1M context；2.1.172 subagent nesting 5 levels；2.1.198 subagent creation flow 改；Skills preload 進 subagent context；disallowed-tools frontmatter；對 fork subagents 預設 on + nested（第三方口徑 depth 3 / concurrency 20）為自然搭配

## ⚡ 今日行動建議

- [ ] **T-0 三題齊發當日 Live blog + 1 小時 3 情境命中分析 blog**：TiBOOST 決賽 09:30–17:30 + TSMC 月營收 TW 下午 2pm 前後 + Anthropic A2 可能 ET 上午；17:30–20:00 1 小時 3 情境命中分析（成本：全天 + 3 小時；產出：Live blog 全天 + 1 小時快拆 + Twitter thread + Dcard soft_job / PTT Soft_Job 分銷 + 11/11 情境命中分析深度文大綱）
- [ ] **Composer 2.5 vs Opus 5.5 CursorBench 4.0 口徑修正 + Bito 混搭 75% / 省 57% 實測 blog**：CursorBench 4.0 口徑拆解 + 個人 1 小時 benchmark 腳本 + 常規 Composer + 難題 Opus 切換 heuristic（成本：3 小時；產出：長文 blog + benchmark 腳本 + 11/12 Live blog 大綱）
- [ ] **iPhone Duo Day 19 Week 2 Day 12 工作日回歸第二日 Playwright 爬蟲 + 中港台「炒家虧損」深度文**：工作日 vs 週末差額曲線確認 + 深圳 1TB 黑色砍 2,800 RMB + 越南螢幕憂慮折價倒賣（成本：3 小時；產出：Playwright scripts + Postgres schema + Day 19 工作日第二日快照 + 中港台曲線 CSV + 炒家虧損 heuristic）
- [ ] **OpenAI Agent Builder EOL T-20 Thanksgiving 前 migration 教學 + Agents SDK scaffold 實測**：OpenAI 官方 migration guide 逐步拆解 + Agents SDK scaffold 實測踩坑 + ChatKit 續行保留 + Promptfoo / Langfuse 替代（成本：3 小時；產出：長文 blog + Agents SDK scaffold 實測踩坑筆記 + Promptfoo YAML 範本）
- [ ] **Smithery T+10 Day +10 第二週第二日中立性監測報告 + MCP Registry 9 月口徑 30K+ 對照**（成本：2 小時；產出：Node CLI 隨機抽樣 100 條目 + Arcade 第二週第二日中立性觀察報告 + 四地重複度 + 各自 stale 比例第二日切片）

## ⏳ 待觀察

- **TSMC 10 月月營收 T-0 公告結果（11/10 TW 下午 2pm 前後）**：若 YoY +50% 區間 → AI 需求續強；YoY +30–40% → 持平與 9 月 +54.6% 首次收斂；YoY +16.9% base 附近 → AI megatrend 動能明顯轉弱、晨星 / 大和 / 巴隆口徑可能重演
- **TiBOOST 11/10 決賽頒獎名單（17:30 公布）**：12 強中前三名 250/150/100 萬得主；得獎者是否出現「使用 Claude Agent SDK / GitHub Agent HQ」具體案例；評審 TSMC / 中華電信 / 光寶對得主的技術採購訊號；資格 3 條件實際對應
- **Anthropic roadshow 11/10 T-0 情境三分支**：A. 盤前補發 A2 含 price range → roadshow 當日啟動；B. 繼續無動靜 → Bloomberg $1.2–1.3T 口徑續延、roadshow 推至 11/23 或 Q1 2027；C. 公司正式公告延後
- **Anthropic S-1/A2 填入 price range / share count 時點**：EDGAR CIK 2130357 權威檢核點；若 11/10 收市前仍空白 → 11/16 WSJ pricing week 情境明顯降權、Reuters 11/5 投資人懷疑續行機率升高
- **Anthropic 估值 $1.2–1.3T vs $1.5T vs $2T 定案**：Bloomberg 11/6 口徑 $1.2–1.3T vs Reuters 11/5 $1.5T 兩源差距需看 A2 填入；若 A2 填入 $1.2–1.3T → AI selloff 續行；若填入 $1.5–1.6T → Fund push 回撐
- **OpenAI × Cursor 切斷實況 11/12 T-2**：Cursor 是否在 T-2 內公告退場補救方案；11/12 → 11/21 促銷價矛盾 9 天視窗如何結束（提前下架 / 延續 / 其他）；OpenAI / Cursor 無新公告續行
- **OpenAI Agent Builder EOL T-19（11/11 週三）**：是否補發 workflow graph export 工具（migration guide 現未承諾）；Thanksgiving 前美國窗口剩 15 天
- **iPhone Duo Day 20 Week 2 Day 13（11/11 週三）**：工作日回歸第三日；可做「工作日 3 日曲線 vs 週末 48h」差額拆解
- **Smithery T+11 Day +11（11/11 週三）**：第二週第三日；ToolBench grading × directory 擁有者條目中立性第二週第三日切片
- **立法院中小微企業轉型條例 T+43（11/11 週三）**：9/29 開議第 43 日；本週（11/10–11/14）為委員會排審窗口首個觀察週第三日；立院公開議程 2026-07/08 後無更新續行
- **數發部 100 億 AI T+38（11/11 週三）**：8 月底 10 家 / NT$ 2.55 億後 Q4 pipeline 是否公布；SBIR 2026-01 起上限調高為替代路徑
- **Vercel AI SDK 7 HarnessAgent GA**：自 6/25 experimental 已滿 T+138；若 11 月 GA 將改變「TS Agent 底層 2 強」對決格局；官方文件仍標記 experimental canary
- **MCP Registry 月度數字刷新**：9 月口徑 30,375 unique / 36% stale；11 月新數字能否顯示「stale 比例下降」為 spec 2026-07-28 更新有效訊號

[^tiboost]: 證交所主辦的國際新創對接與加速計畫（Taiwan Innovation Boost），目標是把海外新創接到台灣資本市場、採購端與供應鏈；2026 年首屆決賽 11/10 於台北漢來飯店舉行，徵件 23 國 396 件、收斂到 12 強，前三名獎金 250／150／100 萬元新台幣。

[^cursorbench]: Cursor 團隊公開的 AI coding 評測基準，以真實 PR 修改、檔案重構等編輯器內任務為題，較偏向 agent 在工程情境的綜合表現；4.0 版任務難度與雜訊明顯提升、計分較嚴，常被用來取代 SWE-Bench、Terminal-Bench 做模型選型對照。

[^mobagel]: 中文品牌名「行動貝果」的台灣 AI 新創，主打自動化機器學習平台 Decanter AI，鎖定企業端的資料前處理與預測建模；客戶橫跨金融、電信、製造，屬台灣少數同時具 B2B 大客戶與 API 銷售量體的 AI 團隊，曾完成多輪募資。

[^promptfoo]: 以 YAML 設定檔為介面的開源 LLM 測試與紅隊工具，MIT 授權，可離線批次跑 prompt／模型迴歸測試、jailbreak 嘗試與 A/B 比對；常作為 OpenAI Evals、Anthropic Workbench 等付費評測服務的替代方案，適合把評測整合進 CI。

[^langfuse]: 開源的 LLM 可觀測性（observability）與評測平台，記錄 prompt、回應、token 用量、trace 鏈路與人工標註；社群版免費自架、Pro 與 Enterprise 走雲端 SaaS 計費，常與 Promptfoo 搭檔——前者負責離線測試、後者負責線上監控。

[^dealroom-3]: 以歐洲為主的新創與創投資料庫，另有境外公司落地 3 條件（研發總部、營收占比、員工占比）的國際對照口徑；台灣補助申請書與新創盡調報告常引用，被視為中立第三方資料源。

## 📚 引用來源

1. [TSMC IR — 2026 Monthly Revenue](https://investor.tsmc.com/english/monthly-revenue/2026) — 2026-11-10 存取
2. [SEC Form 6-K — TSMC Revenue 2026-10-08（9 月）](https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000658/tsm-revenue20260910.htm) — 2026-10-08
3. [finance.technews — 台積電 9 月自結](https://finance.technews.tw/2026/10/08/tsmc-2330-202609-financial-report/) — 2026-10-08
4. [cmoney — 上調 2026 全年營收成長率 44%](https://www.cmoney.tw/notes/note-detail.aspx?nid=1289234) — 2026
5. [statementdog — 台積電 10 月營收創新高 年增 16.9% 近一年半最慢（2025-10 base）](https://statementdog.com/news/14961) — 2025-11
6. [uanalyze — AI 熱潮沒退 台積電 2025-10](https://uanalyze.com.tw/articles/1748638292) — 2025-11
7. [money.udn — TiBOOST 11/10 登場 串聯全球 AI 創新與台灣資本市場](https://money.udn.com/money/story/5607/9854887) — 2026-11-03
8. [money.udn — 證交所 TiBOOST 12 強揭曉 全球 396 件搶攻 AI 新創商機](https://money.udn.com/money/story/5607/9841179) — 2026-10-27
9. [money.udn — 創新大步計畫串聯國際](https://money.udn.com/money/story/5607/9855258) — 2026
10. [ctee — TiBOOST 11/10 登場](https://www.ctee.com.tw/news/20261103701637-430201) — 2026-11-03
11. [cnyes — TiBOOST 創新成長計畫決賽頒獎典禮](https://news.cnyes.com/news/id/6320136) — 2026
12. [Sacra — Anthropic S-1 Amendment Not Finalizing IPO](https://sacra.com/chat/h/a2d43b74-19f7-450e-a230-cb99d77e4a15/) — 2026
13. [FinanceFeeds — Anthropic IPO Roadshow Looms With No Price Range](https://financefeeds.com/anthropic-ipo-roadshow-looms-with-no-price-range/) — 2026
14. [Venture Magazine — Anthropic IPO Roadshow Faces Valuation Pushback](https://venturemagazine.net/blog/anthropics-ipo-roadshow-faces-valuation-pushback-after-the-ai-selloff) — 2026
15. [LetsDataScience — Reuters Investors Doubt Anthropic Can Hold November IPO Roadshow](https://letsdatascience.com/news/investors-doubt-anthropic-can-hold-november-ipo-roadshow-reu-a69a034f) — 2026-11-05
16. [PrimeXBT — Anthropic to begin IPO roadshow next week](https://primexbt.com/news/anthropic-to-begin-ipo-roadshow-next-week-as-it-seeks-nasdaq-listing/) — 2026
17. [neuraltrust.ai — CursorBench 4.0 Opus 5.5 Max 57.8% vs Composer 2.5 27.7%](https://neuraltrust.ai/blog/claude-code-vs-cursor-benchmark) — 2026
18. [benchlm.ai — 2026-11-07 CursorBench leaderboard](https://benchlm.ai/benchmarks/cursorbench) — 2026-11-07
19. [bito.ai — Cursor Composer + Opus 混搭 75% / 省 57%](https://bito.ai/blog/cursor-composer-opus-model-switching-cost/) — 2026
20. [anthonymaio substack — Cursor Composer 2.5 Lands](https://anthonymaio.substack.com/p/cursor-composer-25-lands-the-crowd) — 2026
21. [OpenAI Blog — Our decision on Cursor following its acquisition by SpaceX](https://openai.com/blog/our-decision-on-cursor-following-its-acquisition-by-spacex) — 2026-08-28
22. [OpenAI Help — Winding down OpenAI model access in Cursor](https://help.openai.com/en/articles/20001506) — 2026-11-10 存取
23. [The New Stack — OpenAI cuts Cursor over SpaceX](https://thenewstack.io/openai-cuts-cursor-spacex/) — 2026
24. [InfoWorld — Cursor customers will lose access to OpenAI coding models in November](https://www.infoworld.com/article/4216503/cursor-customers-will-lose-access-to-openai-coding-models-in-november.html) — 2026
25. [developers.openai.com — Agent Builder Migration Guide](https://developers.openai.com/api/docs/guides/agent-builder/migrate-from-agent-builder) — 2026
26. [agenticwire — OpenAI Agent Builder migration SDK Workspace](https://www.agenticwire.news/article/openai-agent-builder-migration-sdk-workspace) — 2026
27. [developersdigest — OpenAI Agent Builder Evals Migration](https://www.developersdigest.tech/blog/openai-agent-builder-evals-migration) — 2026
28. [Osher — OpenAI AgentKit: Agent Builder Shuts Down on 30 November 2026](https://osher.com.au/blog/openai-agentkit/) — 2026
29. [SCMP — Apple iPhone Duo price premiums evaporate China's scalper market](https://www.scmp.com/tech/article/3372169/apple-iphone-duo-price-premiums-evaporate-chinas-scalper-market) — 2026-11
30. [Vietnamnet — Vietnamese iPhone Duo owners resell at steep losses over screen fears](https://vietnamnet.vn/en/vietnamese-iphone-duo-owners-resell-devices-at-steep-losses-over-screen-fears-2570570.html) — 2026
31. [The Standard HK — iPhone Duo buyback prices](https://www.thestandard.com.hk/news/article/346434/) — 2026
32. [Arcade.dev — Smithery joins Arcade](https://arcade.dev/blog/smithery-joins-arcade) — 2026-08
33. [Dev.to — The MCP Registry By The Numbers](https://dev.to/amareswer/the-mcp-registry-by-the-numbers-38nc) — 2026-09
34. [modelcontextprotocol.info — MCP Registry FAQ](https://modelcontextprotocol.info/tools/registry/faq/) — 2026
35. [CNA — 政院修法投入千億助中小微企業升級](https://cna.com.tw/news/aipl/202610080165.aspx) — 2026-10-08
36. [uanalyze — 171.6 萬家受惠 中小微升級](https://uanalyze.com.tw/articles/5191156753) — 2026
37. [CNA — 中小微企業轉型條例擬 9 月送立院](https://cna.com.tw/news/afe/202608260104.aspx) — 2026-08-26
38. [立法院議事紀錄](https://www.ly.gov.tw/pages/MeetingList.aspx?nodeid=135) — 2026-11-10 存取
39. [中央社 — 數發部百億 AI 投資方案 開放境外公司可納投](https://cna.com.tw/news/afe/202610040029.aspx) — 2026-10-04
40. [TechNews — 期盼打造更多獨角獸 數發部百億 AI 投資方案啟動](https://technews.tw/?p=1364303) — 2026
41. [自由時報 — SBIR 先期研究 150 萬 2026](https://ec.ltn.com.tw/article/breakingnews/5466557) — 2026
42. [TechNews — Anthropic Upgrades Claude with New Opus 5.5 Model](https://technews.tw/2026/09/23/anthropic-upgrades-claude-with-new-opus-5-5-model/) — 2026-09-23
