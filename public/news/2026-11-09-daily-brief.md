---
title: 每日創業情報 — 2026-11-09
date: 2026-11-09
tags: 創業情報, AI 產業, SaaS, 台灣
summary: T-1 三題齊發（TiBOOST 決賽 / TSMC 10 月月營收 / Anthropic 最早 roadshow 起始日 11/10）+ OpenAI 砍 Cursor T-3 + Agent Builder EOL T-21 + iPhone Duo Day 18 工作日回歸首日 + Smithery T+9 第二週起點 + Composer 2.5 vs Opus 5.5 benchmark 收斂。
keywords: TiBOOST 11月10日 T-1 決賽 台北漢來 500 萬 23 國 396 件, TSMC October 2026 monthly revenue T-1 Nov 10 2025-10 YoY 16.9% base rate Q4 guidance $17.8B, Anthropic IPO roadshow earliest Nov 10 T-1 S-1A amendment price range blank CIK 2130357 EDGAR, OpenAI Cursor model cutoff November 12 T-3 Composer 2.5 Claude Opus 5.5 migration solo dev, OpenAI Agent Builder EOL T-21 Thanksgiving 17 days Agents SDK Workspace Agents Evals read-only T+9, iPhone Duo Day 18 Week 2 Day 11 Monday 工作日回歸 首日 中港台 完整週末 收斂, Smithery MCP Proxy T+9 Day +9 Monday 第二週起點 Arcade.dev ToolBench grading, MCP spec 2026-07-28 revision Apps Tasks OAuth stateless 30K+ servers, Composer 2.5 SWE-Bench 79.8 Terminal-Bench 69.3 Artificial Analysis 62 vs Opus 4.7 66, Claude Code 2.1 Skills subagent nesting 5 levels disallowed-tools frontmatter, 數發部 100 億 AI T+36 10 家累計 NT$2.55 億 民間帶動 NT$5.7 億
---

# 每日創業情報 — 2026-11-09

## 🎯 今日 TL;DR

- **🔄 T-1 三題齊發：TiBOOST 決賽 / TSMC 10 月月營收 / Anthropic roadshow 最早合法起始日（11/10 週二）**：三題同日 → 11/10 為全年最密集的「台灣—全球—AI 資本」內容窗口；11/09 週一為「T-1 預設劇本」的最後完整工作日，11/10 當日為 live blog + 情境命中分析 + 24 小時快拆 3 層內容輸出黃金日；對仍走中文技術 blog / newsletter 路線的 solo dev，T-1 → T-0 → T+1 三日連載視窗為全年少見
- **🔄 OpenAI 11/12 砍 Cursor Models T-3（11/09 → 11/12）— 第三方媒體口徑仍以「proposed」為主、OpenAI 未發正式最終日期 + 11/21 GPT-5.6 Sol 促銷價表矛盾視窗 9 天續行**：The New Stack / InfoWorld / CIO / Tom's Guide 口徑皆為「提議、未確認最終日」；Cursor 自建 Composer 2.5[^composer-25]（Kimi K2.5 底層 + Cursor RL）為主要對沖、Anthropic 承諾繼續供模型；Anirban Ghoshal（CIO / InfoWorld）口徑分析師認為 Cursor 處境優於 OpenAI → 企業可續行用 Claude 替代；BYOK 與 gateway credentials 不適用 Cursor Tab / Auto / Cloud Agents
- **🔄 Anthropic S-1/A1 Day +14 Day +8（10/26 公開 S-1 → 11/02 A1）— roadshow 最早合法起始日 11/10（T-1 → T-0）+ Sacra 口徑「11/02 A1 share count / price range 仍空白」為單一源 + CIK 2130357 EDGAR[^edgar] 索引為權威檢核點**：Sacra 單源描述 11/02 amendment 將財報延伸至 9/30/2026，但 share count / price range 仍空白；Leverage Shares / FutureSearch / Yahoo Finance 口徑：最早 roadshow 11/10、pricing 最早 11/13（11/11 退伍軍人節 SEC 休市）、交易最早 11/16；Fox / Newsquawk 口徑 11/19–11/20 續行；對台灣 Claude 大客戶：估值 $1.5–1.6T vs $2T 修正續行、上市後定價壓力溫和
- **🔄 TSMC 10 月月營收 T-1（11/09 → 11/10 預估公告）— 2025-10 YoY +16.9% 基期（近一年半最慢）+ 當時晨星 / 大和證券 / 巴隆周刊口徑「不等於 AI 需求降溫」參照 + Q4 guidance $52.3–54.3B 單月均 $17.8B + 9 月 YoY +54.6% 基準線**：去年 2025-10 月營收 NT$ 3,674.7 億 YoY +16.9% 為 base effect 參照、但 2026 Q4 AI 需求結構與去年差異大、YoY 對照需看「與 9 月 54.6% 比較」而非「與 2025-10 比較」；對一人 SaaS inference：若 YoY +40–50% → AI 需求續強、+30–40% → 持平、+30% 以下 → 首個轉弱訊號
- **🔄 TiBOOST 決賽 T-1（11/09 → 11/10 週二 09:30–17:30 台北漢來大飯店 3F 鉑金 B 廳）— 23 國 396 件 → 12 強（國內 9 + 海外 3）+ 前三 250/150/100 萬 + 國際論壇 + 創新盃 + 頒獎 + 晚宴 4 合 1**：國內 9：台灣若美、行動貝果、亞洲準譯、融文國際、振生半導體、動見科技、翔評互動、築智科技、醫守科技；海外 3：ASKaFOX（加拿大）、Bering Lab（韓國）、DOGU Robotics（韓國）；資格包含「技術符合 AI 新十大建設」+「已完成至少一輪外部募資或初步市場驗證」+「尚未在臺灣創新板上市」3 條件
- **🔄 iPhone Duo Day 18 Week 2 Day 11（11/09 週一）— 完整週末樣本（Day 16+17 48 小時）收尾後首個工作日回歸 + 中港台三城含週末曲線 48h vs 工作日 5 日平均首切片日**：Day 17（週日）為週末 48h 完整樣本收尾；Day 18 為工作日回歸首日 → 可首次做「週末 48h vs 工作日 5 日平均」對比；香港 10/23 開賣首日 unwire 實地查訪已開封機收機價降至 HK$501–1,001 溢價；中國首發二手溢價 2,000–3,000 元 RMB、部分收購商開始調低報價、炒家首次面臨虧損；台灣 11 月第 2 週尚無二手行情中文媒體具體報導 → 新鮮度極高
- **🔄 OpenAI Agent Builder EOL T-21（11/09 → 11/30）— 剩 21 天 + Thanksgiving 11/26 前美國窗口剩 17 天 + Evals read-only Day +9（10/31 → 11/30 全下線倒數 Day 9）+ ChatKit / Connector Registry 保留**：pickaxe / osher / mintmcp / developersdigest 口徑持續確認「workflow graph export 不保」+「knowledge bases / custom tools 可能需手工 rework」；Promptfoo 為 Evals 替代、Langfuse 併用紅隊 / observability 續行；Agents SDK（TS / Python）為工程師 production 唯一路徑、Workspace Agents 為非工程師 editable 路徑
- **🔄 Smithery MCP Proxy T+9 Day +9（11/09 週一）— 連續 2 週中立性觀察第二週起點日 + Arcade.dev directory × ToolBench[^toolbench] grading 利益衝突監測第二週 + MCP 2026-07-28 spec（stateless core / MCP Apps / Tasks / 強化 OAuth）生效第 103 日**：10/31 UTC 00:00 下線後第 9 日；Day +9 進入第二週首日、週末隱退後首個工作日切片；MCP 2026-07-28 spec 已滿 103 日、roadmap 8/22 更新含 5 項下季優先；對一人 SaaS：第二週為「arcade / modelcontextprotocol.io / pulse-mcp / mcp-get 四地重複度 + 各自 stale 比例」首個可比切片
- **🔄 立法院中小微企業 1,000 億轉型條例 T+41（11/09 週一）— 9/29 開議第 41 日 + 新會期第 6 週起點 + 媒體公開進度仍停在「尚未通過」階段 + 下週（11/10–11/14）為委員會排審窗口首個觀察週首日**：T+41 週一；行政院新會期優先法案 40 項、產經類 8 案以此為首；R&D 抵減率 20%、設備投資抵減門檻 25 萬；本週為排審窗口首個觀察週首日、無媒體公開新進度
- **🔄 數發部 100 億 AI T+36（11/09 週一）— 8 月底累計口徑 10 家 / NT$ 2.55 億 / 民間帶動 NT$ 5.7 億 + 境外公司放寬 3 條件續行 + 36 家搭配投資人續行 + 40 片 GPU POC 算力池續行**：CNA 10/04 更新為權威口徑；平均單案 NT$ 2,550 萬 vs 上限 NT$ 2 億 = 8 倍槓桿空間；對 solo dev：直接 pitch 命中率極低、但境外公司放寬打開「海外註冊、台灣營運」架構路徑；40 片 GPU POC 為「境內小規模驗證」額外補助

## 🔄 昨日追蹤

- **🔄 Anthropic S-1 / IPO Day +13 → Day +14**：roadshow T-2 → T-1；仍無 S-1/A2 填入 price / share count；Sacra 單源描述 11/02 A1 存在但未見其他源交叉驗證 → EDGAR CIK 2130357 為權威檢核點
- **🔄 TiBOOST T-2 → T-1**：11/10 週二決賽倒數最後一日；12 強名單與資格 3 條件補齊
- **🔄 TSMC 10 月月營收 T-2 → T-1**：11/10 公告倒數最後一日；加入 2025-10 YoY +16.9% 背景（晨星 / 大和 / 巴隆口徑「不等於 AI 需求降溫」）
- **🔄 OpenAI Agent Builder EOL T-22 → T-21**：Evals read-only Day +8 → Day +9；migration tool 仍無新增
- **🔄 OpenAI 11/12 砍 Cursor Models T-4 → T-3**：媒體口徑仍以「proposed」為主、OpenAI 未發正式最終日期
- **🔄 iPhone Duo Day 17 → Day 18**：Week 2 Day 10 → Day 11；完整週末樣本收尾 → 工作日回歸首日
- **🔄 Smithery T+8 → T+9**：第一個完整週末第二日 → 第二週起點首日
- **🔄 GitHub Agent HQ Insight webinar Day +3 → Day +4**：錄播 48h 窗口已過 → 工作週回歸首日
- **🔄 立法院新會期中小微企業 T+40 → T+41**：排審窗口首個觀察週首日
- **🔄 數發部 100 億 AI T+35 → T+36**

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🔄 TiBOOST 決賽 T-1（11/09 → 11/10 週二 09:30–17:30 台北漢來大飯店 3F 鉑金 B 廳）— 23 國 396 件 → 12 強（國內 9 + 海外 3）+ 前三 250/150/100 萬 + 資格 3 條件 + 國際論壇 + 創新盃 + 頒獎 + 晚宴 4 合 1**：資格 3 條件為「技術或產品符合 AI 新十大建設」+「已完成至少一輪外部募資或初步市場驗證」+「尚未在臺灣創新板上市」；境外公司最高 US$1,500 補助、國內 US$200 補助；主辦為金管會 + 國發會、執行單位含證交所 / 集保 / 櫃買 / 期交所、創投公會與私募公會協辦 | [money.udn — TiBOOST 11/10 登場 串聯全球 AI 創新](https://money.udn.com/money/story/5607/9854887)、[money.udn — 證交所 TiBOOST 12 強揭曉 全球 396 件搶攻 AI](https://money.udn.com/money/story/5607/9841179)、[ctee — TiBOOST 11/10 登場](https://www.ctee.com.tw/news/20261103701637-430201)、[cnyes — TiBOOST 決賽頒獎典禮](https://news.cnyes.com/news/id/6320136)、[國立虎尾科技大學 — TiBOOST 徵件公告](https://acs.nfu.edu.tw/zh_tw/more_announcement/TiBOOST-%E5%89%B5%E6%96%B0%E5%A4%A7%E6%AD%A5%E8%A8%88%E7%95%AB%E6%AD%A3%E5%BC%8F%E9%96%8B%E6%94%BE%E5%BE%B5%E4%BB%B6-%E8%AA%A0%E6%91%AF%E9%82%80%E8%AB%8B%E5%9C%8B%E5%85%A7%E5%A4%96-AI-%E6%96%B0%E5%89%B5%E4%BC%81%E6%A5%AD%E5%A0%B1%E5%90%8D%E5%8F%83%E8%88%87-39030789) | T-1 為「12 強技術棧猜測 + 評審關注趨勢預測」最後輸出窗口；11/10 當日為「獲獎名單解析 + 得主技術棧快拆 + 與 TSMC 月營收 / Anthropic roadshow 同日 3 合 1」黃金輸出日；對照 TPIsoftware 預估 2026 兩位數成長 + 台灣主權 AI 關鍵詞，12 強技術棧猜測可對照此邏輯 | 機會：T-1 寫「TiBOOST 12 強技術棧猜測矩陣 × 評審關注趨勢預測 × 境外公司補助 Dealroom[^dealroom-3] 口徑對照 × 資格 3 條件 solo dev 複製難度」四合一；11/10 當晚發「獲獎者技術棧快拆 + 一人 SaaS 複製難度評分 + 與 TSMC YoY 情境命中聯動解讀」；威脅：12 強中僅 2–3 組接近「一人或 2–3 人小團隊」等級、對 solo dev 直接參照度有限 |
| **🔄 TSMC 10 月月營收 T-1（11/09 → 11/10 預估公告）— 2025-10 YoY +16.9% 基期為「近一年半最慢增幅」+ 當時晨星 / 大和證券 / 巴隆周刊口徑「不等於 AI 需求降溫」參照 + Q4 guidance $52.3–54.3B / 單月均 $17.8B + 9 月 YoY +54.6% 基準線 + 2025-10 月營收 NT$ 3,674.7 億 月增約 11%**：去年 2025-10 月營收創歷史新高、但年增率為近一年半最慢；晨星：「單月數據不足以判斷 AI 需求趨勢」；大和證券：「季節性因素可能是原因之一」；巴隆周刊：「單月成長放緩可能與客戶下單時程調整有關」；此為今年 YoY 計算的 base effect | [TSMC IR — 2026 Monthly Revenue](https://investor.tsmc.com/english/monthly-revenue/2026)、[SEC Form 6-K — TSMC Revenue 2026-10-08](https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000680/tsm-revenue20261008.htm)、[statementdog — 台積電 10 月營收創新高 年增 16.9% 近一年半最慢](https://statementdog.com/news/14962)、[自由時報 — 台積電 10 月營收](https://ec.ltn.com.tw/article/breakingnews/5241415)、[uanalyze — 台積電 10 月營收創新高 AI 需求旺](https://uanalyze.com.tw/articles/1748638292)、[uanalyze — AI 熱潮沒退 台積電 10 月營收增速放緩](https://uanalyze.com.tw/articles/8998238340) | 對一人 SaaS inference 成本：YoY +40–50% → AI 需求續強 → inference 單位成本續壓低速率續行；YoY +30–40% → 持平，與 9 月 +54.6% 對照需看連續 MoM；YoY +30% 以下 → inference 成本壓低速率趨緩首個訊號；YoY 回落至 2025-10 base 附近 +16.9% → 需看是否重演 2025-10 「晨星 / 大和 / 巴隆口徑拆解」| 機會：T-1 寫「TSMC 10 月月營收 T-1 5 檔 YoY 情境矩陣 × 2025-10 base effect 參照 × 對一人 SaaS inference 成本影響鏈 × TiBOOST 得主同日聯動劇本」預設；11/10 公告後 1 小時內快拆「實際數字 + 情境命中 + TiBOOST 得主同日 3 題聯動」；威脅：base effect 2025-10 +16.9% vs 2026-9 +54.6% 跳變大、YoY 數字需對照連續 3 個月 MoM 才有結構意義 |
| **🔄 Anthropic S-1/A1 Day +14 Day +8 — roadshow 最早合法起始日 11/10（T-1 → T-0 情境）+ Sacra 口徑「11/02 A1 share count / price range 仍空白」為單一源 + CIK 2130357 EDGAR 為權威檢核點 + Leverage Shares 口徑 roadshow 最早 11/10 / pricing 最早 11/13 續行**：10/26 公開 S-1 + 11/02 A1（Sacra 單源描述）→ 11/10 為最早合法 roadshow 起始日；11/11 退伍軍人節 SEC 休市；11/13 為最早合法 pricing day；11/16 為最早交易日（Yahoo Finance / Newsquawk / Fox 口徑各有 11/16 / 11/19–20 情境） | [Leverage Shares — Anthropic IPO Price](https://leverageshares.com/us/insights/anthropic-ipo-price/)、[Sacra — Anthropic S-1 Amendment Not Finalizing IPO](https://sacra.com/chat/h/a2d43b74-19f7-450e-a230-cb99d77e4a15/)、[FutureSearch — Anthropic IPO Pricing Date](https://futuresearch.ai/app/p/a/anthropic-ipo-pricing-date)、[Newsquawk — Anthropic S-1 Fox Mid-November](https://www.newsquawk.com/headlines/anthropic-will-drop-its-s-1-at-9am-et-and-that-while-market-conditions-have-shifted-the-plan-for-a-mid-november-ipo-fox-reports-citing-a-source)、[Engadget — Anthropic is set to go public](https://engadget.com/2184970/anthropic-is-set-to-go-public-after-filing-paperwork-with-the-sec)、[ValueAddVC — Anthropic Targets Nov 16 IPO Debut](https://valueaddvc.com/pulse/anthropic-ipo-nov16-debut-33b-revenue-2026) | 對台灣 Claude 大客戶：估值 $1.5–1.6T vs $2T 修正續行、上市後 Claude Pro / Teams / Enterprise 續行穩定可能性升；roadshow 若 11/10 起跑 → 11/09 週一為最後觀察日、Fund 認購信件最早今日流出 → 對 solo dev 做「roadshow 信件內容 + 估值模型對照」中文解析為稀缺題材 | 機會：T-1 寫「Anthropic roadshow T-1 情境矩陣 × $1.5–1.6T vs $2T 估值修正 × CIK 2130357 EDGAR 檢核點 × 對 Claude 大客戶定價預期」；11/10 roadshow 若起跑則當晚 24 小時內發「roadshow 第一週觀察 + 估值 band 對照」；威脅：S-1/A1 日期仍有 Sacra 單源風險、roadshow 若延至 11/23 情境 → 11/11 WSJ pricing week 情境降權 |
| **🔄 立法院中小微企業 1,000 億轉型條例 T+41 + 新會期第 6 週起點（11/09 週一）— 9/29 開議第 41 日 + 本週（11/10–11/14）為委員會排審窗口首個觀察週首日 + R&D 抵減率 20% + 轉型設備投資抵減門檻 25 萬 + 媒體口徑仍停「尚未通過」階段**：11/08 搜尋結果無媒體新進度；行政院新會期優先法案 40 項、產經類 8 案以此為首；立法院 9/29 開議、新會期已經過 6 週；對 solo dev：接案現金流轉型不宜綁補助、但「25 萬元設備投資抵減」為 2026 新門檻、低於產業創新條例 100 萬 | [中央社 — 中小微企業轉型條例擬 9 月送立院](https://cna.com.tw/news/afe/202608260104.aspx)、[1111 — 8 年砸千億 政院拍板中小微企業升級條例](https://www.1111.com.tw/news/jobns/167737)、[ithome — 中小微企業轉型條例修法方向](https://www.ithome.com.tw/news/179523) | 若法案通過，R&D 投資抵減率自現行約 15% 提高至 20%、轉型設備投資抵減門檻自產業創新條例 100 萬降至 25 萬；本週為立院排審首個觀察週、11/10 排審委員會議程公告後即可寫「11 月第 2 週排審預測」| 機會：「11/10 立法院新會期第 6 週起點 + 中小微條例委員會排審預測」+「25 萬元設備投資抵減自認試算 + R&D 20% 抵減個案拆解」雙篇；威脅：送審至三讀期程 3–12 個月、11 月底前通過機率極低 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🔄 OpenAI 11/12 砍 Cursor Models T-3（11/09 → 11/12 切斷 + 11/21 GPT-5.6 Sol 促銷價表到期）— CIO / InfoWorld / The New Stack / Tom's Guide 口徑仍以「proposed」為主 + OpenAI 未發正式最終日期** | AI coding / 模型供應鏈 / 選型節點 | 仍以 Cursor 為主的 solo dev：T-3 內確認 fallback stack；考慮切換到 Claude Opus 5.5（直連 Anthropic）或 Cursor Composer 2.5（Cursor 自家 model、Kimi K2.5 底層 + Cursor RL）；仍有 personal OpenAI API key 的用戶：11/12 後僅 local Chat / Agent 仍可用；BYOK 與 gateway credentials 不適用 Cursor Tab / Auto / Cloud Agents | Cursor Plus $8 / Premium $30 / Super $100 / Ultra $200；Claude API Opus 5.5 $4/M in $20/M out、Sonnet 5.5 $2/$10、Haiku 5.5 $0.10/$0.50（<100K）；Codex CLI 自家計費；Composer 2.5 標準價 $0.50/M in $2.50/M out（163.com 口徑） | vs 繼續用 Cursor：Composer 2.5 可補 OpenAI 模型空缺（SWE-Bench 79.8 vs Opus 4.7 80.5、Terminal-Bench 69.3 ≈ Opus 4.7 69.4、Artificial Analysis Coding Agent Index[^aa-coding-index] 62 vs Opus 4.7 66）；vs 直接走 Claude Code CLI：訂閱結構與工作流差異大、對 Cursor 熟悉者切換成本中等；vs Codex 自家 CLI + ChatGPT Pro：仍有 OpenAI 模型直連但無 Cursor 的編輯器體驗；deeplearning.ai 口徑 Composer 2.5 平均 6.7 min / task × $0.44 vs Claude Code + Opus 4.7 max 8.8 min × $4.14 | 🔴 重度依賴 GPT-5.6 Sol：T-3 立刻並行跑 Composer 2.5 vs Claude Opus 5.5 benchmark；🟡 Claude 已是主力：T-3 不急、僅確認 Cursor fallback；🟢 全走 Claude Code CLI：無影響；🔴 BYOK 用戶：確認僅 local Chat / Agent 續行 |
| **🔄 OpenAI Agent Builder EOL T-21（11/09 → 11/30）— Thanksgiving 11/26 前美國窗口剩 17 天 + Evals read-only Day +9（10/31 → 11/30 下線倒數 Day 9）+ ChatKit / Connector Registry 保留 + pickaxe / osher / mintmcp / developersdigest 口徑一致** | AI agent / T-21 最後 21 天 | Agent Builder 用戶：工程師 production → Agents SDK（TS / Python），非工程師可編輯 → ChatGPT Workspace Agents（需 Business / Enterprise / Edu workspace）；Evals 用戶：匯出 dataset + Promptfoo YAML 轉換；reusable prompts 用戶：Playwright / Puppeteer dashboard 爬取；workflow graph export 不保 → 需手工 rework | Promptfoo 開源 MIT；Langfuse 社群版免費 / Pro $59/mo / Enterprise custom；ChatKit 保留不計 | vs ChatKit（embeddable chat UI 保留）；Agents SDK 選「engineer-owned workflow」、Workspace Agents 選「non-engineer editable automation」；Evals 遷移目標 Promptfoo + Langfuse 混搭 | 🔴 Agent Builder 用戶：T-21 Thanksgiving 前 17 天、建議 rebuild in Agents SDK（export 僅第一稿、knowledge bases / custom tools 可能需手工 rework）；🟡 Evals 用戶：若尚未匯出 dataset，Thanksgiving（11/26）前補完；🟢 red-teaming 需求：保留 Promptfoo + Langfuse 混搭 |
| **🔄 Smithery MCP Proxy T+9 Day +9（11/09 週一）— 連續 2 週中立性觀察第二週起點日 + Arcade.dev directory × ToolBench grading 利益衝突第二週監測首日 + MCP 2026-07-28 spec 生效第 103 日 + 8/22 roadmap 更新含 5 項下季優先**：11/07 brief 新增背景 MCP 2026-07-28 spec（stateless core / MCP Apps / Tasks / 強化 OAuth / 棄 Roots / Sampling / Logging / 棄初始 handshake 改 per-request versioning）為 recent major revision | MCP infrastructure / 第二週起點 | 已遷移完成的團隊：週一寫「第一週中立性監測結果 + 隨機抽樣 100 條目覆蓋率 + 四地重複度對照（Arcade / modelcontextprotocol.io / Pulse MCP / mcp-get）」blog；未遷移團隊：用 vendor 官方 MCP URL + 自建或選第三方 OAuth 2.1 identity provider 補 auth / session management；對 2026-07-28 spec 支援度為選型新指標 | Arcade.dev directory 使用者端免費；modelcontextprotocol.io 官方 registry 免費；Pulse MCP / mcp-get 免費 | vs 直接 vendor 官方 MCP URL / Pulse MCP / mcp-get / modelcontextprotocol.io 官方 registry（2,000+ servers、server.json manifest、9 月口徑 30,375 unique / 99,114 records）；差異在 Arcade 2026-08-05 已收購 Smithery + 同時運營 ToolBench grading | 🔴 現用 Smithery 團隊：T+9 Day +9 退款到帳最終檢查；🟡 Arcade 中立性觀察：第二週起點首日切片、月底前可做「連續 2 週中立性觀察終結報告」；🟢 新建 MCP server：直接走 vendor 官方 URL + 考慮同步登記官方 MCP Registry + 確認對 2026-07-28 spec 支援 |
| **🔄 Claude 5.5 家族三層混搭 + Claude Code 2.1 Skills / Subagent nesting 5 levels / disallowed-tools frontmatter + Composer 2.5 近戰領域擴大**：Opus 5.5（$4/$20、orchestrator）+ Sonnet 5.5（$2/$10、draft / bugfix）+ Haiku 5.5（$0.10/$0.50 <100K、sub-agent）三層成本比約 40:20:1；Claude Code 2.1.197（6/30）Sonnet 5 預設 + 1M context、2.1.172 subagent nesting 5 levels、2.1.198 subagent creation flow 改、Skills preload 進 subagent context、disallowed-tools frontmatter | LLM 模型家族 + Agent 框架 底層 + Composer 2.5 雙強收斂 | 一人 SaaS inference stack 續行穩定；Claude Code 2.1 Skills 已成為 agent 工具跨 vendor 共通設定（AGENTS.md）落地路徑；Composer 2.5 benchmark 已達 Opus 4.7 近戰領域（SWE-Bench 79.8 / 80.5、Terminal-Bench 69.3 / 69.4、Artificial Analysis 62 / 66） | Claude API 計費；SDK 開源免費；Composer 2.5 併入 Cursor 訂閱；Cursor CLI 用 Composer 2.5 fast mode 平均 $0.44 / task | vs 11/12 後 Cursor OpenAI 退場：Claude 5.5 三層 + Agent SDK 直連為最穩走法；Composer 2.5 底層走 Kimi K2.5 + Cursor RL、SWE-Bench / Terminal-Bench 已達 Opus 4.7 近戰、Artificial Analysis 仍落後 4 分 | 🟢 一人 SaaS：Opus 5.5 orchestrator + Haiku 5.5 tool-heavy sub-agent + Sonnet 5.5 doc / small code 3 層混搭已穩定；🟡 Composer 2.5：成本敏感 / 大量 batch task 可試；🔴 深度編碼：Claude Opus 5.5 / Cursor Composer 2.5 皆可、11/12 後 Cursor + GPT 組合消失 |
| **🔄 Vercel AI SDK 7.0.143 T+137 experimental 續行 + 10 harness adapter / tool search / toolCallConcurrency / streamRetries / WebSocket chat 持續累積**：6/25 Ship London 發表（也有 6/17 口徑）→ 10/16 版本號 7.0.143、距 11 月 GA 無公開訊號；WorkflowAgent production stable、HarnessAgent experimental canary；alphasignal / developersdigest 等第三方口徑分歧 | TS Agent 框架 | 需 fork subagents + 跨 session 狀態 + skills + 權限邊界細緻；對照 Claude Agent SDK 2.1.121 CHANGELOG `CLAUDE_CODE_FORK_SUBAGENT=1` + 0.3.302 預設 on；Vercel AI SDK 7.0.143（10/16）10 harness adapter 累積 | SDK 開源免費 | vs Claude Code CLI + Agent SDK：Vercel AI SDK 7 WorkflowAgent 可試 production、HarnessAgent experimental 不建議 production；GA 若 11 月落地將改變「TS Agent 底層 2 強」對決格局 | 🟡 Vercel AI SDK 7：WorkflowAgent production 可試、HarnessAgent experimental 不建議 production；🟢 Claude Code + Agent SDK：續行穩定 |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：11/10 T-0 三題齊發 live blog + 1 小時 3 情境命中分析（TiBOOST / TSMC / Anthropic roadshow） 🔄

- **痛點來源**：三題同日 11/10 公告 / 決賽 / 最早合法 roadshow 起始 → 全年最密集的「台灣—全球—AI 資本」內容窗口；中文技術媒體口徑整合近零；3 題「獨立發文」vs「同日 live blog + 1 小時 3 情境命中分析」差異顯著；T-1 預設劇本（11/09 寫）× T-0 實時快拆（11/10 當日）× T+1 情境命中分析（11/11）× T+4 Anthropic pricing day 連動（11/13）四段連載視窗為全年少見
- **目標客群（台灣／亞洲）**：關注 AI 資本動向的台灣 solo dev + indie（估 2,000–5,000 位）+ 關注 TSMC / 台股 AI 類股的投資散戶（估 10,000–30,000 位）+ 關注 Anthropic Claude 訂閱定價預期的企業用戶（估 500–1,500 家）+ 想參照 TiBOOST 得主技術棧的新手 indie（估 1,500–3,000 位）
- **技術複雜度**：2/5 — 內容型；關鍵為「T-1（11/09）3 題各自 5 檔情境矩陣 × T-0（11/10）實時快拆 × T+1 情境命中分析 × T+4 Anthropic pricing day 連動」4 段預設劇本
- **預估 MRR**：one-off NT$ 100K–300K per 深度文 × 4 段連載 = NT$ 400K–1.2M；若做「每月 3 題同日聯動快拆」訂閱系列 → NT$ 500/mo × 300 用戶 ≈ NT$ 150K MRR；可 upsell 「Live blog 自動化流程」教學
- **競品弱點**：中文技術媒體從未做過「同日 3 題 live blog + 1 小時 3 情境命中分析」組合；財經媒體從「晶片 / 新創 / IPO」各自切入、不做跨議題聯動；大型技術媒體傾向財經角度、不會做「單人 live blog 全程技術工作流」拆解
- **切入建議**：11/09 寫「11/10 T-0 三題齊發：TiBOOST 得主猜測 × TSMC YoY 5 檔情境 × Anthropic roadshow 情境矩陣 × 同日聯動邏輯」預設劇本 → 11/10 整日 live blog + 1 小時內 3 情境命中分析 → 11/11 情境命中分析深度文 → 11/13 Anthropic pricing day 連動快拆 → 11/16 WSJ pricing week 情境尾聲

### 點子 2：OpenAI 11/12 砍 Cursor T-3 → T+0 → T+9 Composer 2.5 vs Opus 5.5 benchmark 實戰連載 🔄

- **痛點來源**：OpenAI 11/12 砍 Cursor Models 事件 T-3；中文技術媒體口徑整合 + 替代 stack benchmark 近零；Composer 2.5 benchmark 已達 Opus 4.7 近戰領域（SWE-Bench 79.8 / Terminal-Bench 69.3 / Artificial Analysis 62）、deeplearning.ai 口徑 Composer 2.5 fast mode 平均 $0.44 / task vs Claude Code + Opus 4.7 max $4.14 / task → 成本差 9.4 倍；但「對應 Opus 5.5」的 benchmark 中文資源近零
- **目標客群（台灣／亞洲）**：仍以 Cursor 為主的台灣 solo dev（估 2,000–5,000 位）+ 考慮切 Claude Opus 5.5 的中型團隊（估 200–600 家）+ 關注 AI coding 選型的技術 blogger / YouTuber（估 300–800 位）+ 成本敏感 batch task 用戶（估 500–1,500 位）
- **技術複雜度**：3/5 — 內容型 + 1–2 小時 benchmark；關鍵為「T-3 benchmark 預設 × T-0 切斷實況 live blog × T+1 替代 stack 使用者反應收集 × T+9 第一週 Composer 2.5 vs Opus 5.5 benchmark 實戰結果」4 段連載
- **預估 MRR**：one-off NT$ 60K–180K per 深度文 × 4 段連載 = NT$ 240K–720K；訂閱「每週 AI coding 選型週報」NT$ 300/mo × 300 用戶 ≈ NT$ 90K MRR；可 upsell 「Composer 2.5 vs Opus 5.5 個人 benchmark 腳本」Gumroad
- **競品弱點**：台灣技術媒體口徑整合 + 替代 stack benchmark 中文資源近零；大型技術媒體不會做「單人工作流實際替換成本」拆解；小型技術 blog 不會追 11/12 vs 11/21 促銷價矛盾；「Composer 2.5 vs Opus 5.5」對比完全空白
- **切入建議**：11/09 寫「OpenAI 11/12 砍 Cursor T-3 solo dev benchmark 預設 + Composer 2.5 vs Opus 5.5 預期 vs 實測差異表 + 成本 9.4 倍預期」 → 11/12 當日 Live blog 切斷實況 → 11/13 「切斷後 24h 使用者反應 + Composer 2.5 承接率」 → 11/19 第一週實戰 benchmark 深度文

### 點子 3：iPhone Duo Day 18 工作日回歸首日 Playwright 爬蟲 + 中港台三城含週末曲線 48h vs 工作日 5 日平均首切片 🔄

- **痛點來源**：Day 18 Week 2 Day 11（11/09 週一）為完整週末樣本（Day 16+17）收尾後首個工作日回歸；台灣讀者缺「含週末樣本」的三城 vs 工作日對比；中文技術 blog 對「週末 48h vs 工作日 5 日平均」方法論近零；香港 10/23 開賣首日 unwire 實地查訪已開封機收機價 HK$501–1,001、中國首發二手溢價 2,000–3,000 RMB + 收購商開始調低報價為少見中文對照數字；台灣 11 月第 2 週尚無二手行情中文媒體具體報導
- **目標客群**：想做價格爬蟲 side project 的台灣 indie（估 300–800 位）+ 關注 iPhone Duo 轉售的台灣 Apple 粉絲（估 5,000–15,000 位）+ 想學 Playwright + Postgres schema 設計的新手工程師（估 1,000–3,000 位）
- **技術複雜度**：3/5 — Playwright + Postgres schema + 週末 outlier 處理 + 7 日平均 vs 工作日平均 + SellCell 3 維度保值率比對 + 中港台三城含週末曲線對比
- **預估 MRR**：one-off NT$ 20K–80K per 爬蟲 + blog；訂閱「每週 iPhone Duo 三城含週末曲線對比」NT$ 200/mo × 150 用戶 ≈ NT$ 30K MRR；可 upsell Playwright + Postgres schema 開源 CLI
- **競品弱點**：台灣中文 blog 對「週末樣本 outlier 處理 + 7 日平均 vs 工作日平均」方法論近零；中港 vs 台灣含週末樣本對比完全空白；中國預售 → 開賣首日 → 10 日後收斂 + 收購商開始調低報價「炒家首次面臨虧損」中文數據解析稀缺
- **切入建議**：11/09 寫「iPhone Duo Day 18 Week 2 Day 11 工作日回歸首日 Playwright 爬蟲 + 中港台三城含週末曲線 48h vs 工作日 5 日平均首切片 + 中國炒家首次面臨虧損內涵」 → 11/10–11/13 連續 4 個工作日發「D18–D21 工作日 vs 週末差額曲線」 → 11/14 週五發「D23 連續 2 週曲線 Week 2 vs Week 1 對比」

### 點子 4：境外公司海外註冊、台灣營運架構 Dealroom 口徑完整決策樹（數發部 100 億 AI 境外公司放寬 3 條件深拆） 🔄

- **痛點來源**：數發部 100 億 AI T+36、10/04 CNA 更新「8 月底累計 10 家、累計 NT$ 2.55 億、民間帶動 NT$ 5.7 億」；境外公司放寬 3 條件續行（在台設研發總部 + 研發投入占比過半、在台營收過半、在台員工占比過半）；中文媒體解析「海外註冊、台灣營運」架構深拆近零；36 家搭配投資人 + 40 片 GPU POC 算力池續行；10 家 pipeline 已知含 Jiiov、eCloudvalley、其他 confidential
- **目標客群（台灣／亞洲）**：想「海外註冊、台灣營運」的台灣 solo dev（估 1,500–3,000 位）+ 已有海外架構、想申請台灣境外公司補助的中型 SaaS（估 200–500 家）+ 關注稅務 / 外匯 / FBAR 的 indie 會計 / 稅務顧問（估 100–300 位）
- **技術複雜度**：2/5 — 內容型 + 1–2 小時 Dealroom 口徑 × 數發部作業要點對照；關鍵為「Dealroom 3 條件逐條拆解 × 海外註冊地選擇決策樹 × 台灣營運主體成本試算 × 36 家搭配投資人名單 × 40 片 GPU POC 配額 × 10 家 pipeline 已知名單」
- **預估 MRR**：one-off NT$ 40K–150K per 深度文；訂閱「每月台灣 indie 法遵 + 補助更新」NT$ 400/mo × 200 用戶 ≈ NT$ 80K MRR；可 upsell 「海外註冊、台灣營運」架構文件範本 Gumroad
- **競品弱點**：中文媒體對境外公司放寬 3 條件深拆近零；大型稅務會計師事務所口徑偏保守 / 僅 enterprise；稅務顧問 blog 傾向 B2B 不解 solo dev 架構；36 家搭配投資人名單對照 + 40 片 GPU POC 配額詳解中文資源近零
- **切入建議**：11/09 寫「境外公司海外註冊、台灣營運架構 Dealroom 口徑完整決策樹 + 36 家搭配投資人名單對照 + 40 片 GPU POC 配額詳解」 → 11/10 TiBOOST 得主若含海外架構 → 24h 內發「得主架構對照 + 境外公司放寬 3 條件對應關係」 → 11/11 情境命中分析

## 🧰 工具堆疊更新

- **🔄 OpenAI × Cursor 模型供應中止 T-3**：OpenAI 官方 help page 已公告 11/12 結束對 Cursor 的模型供應（起因於 8/14 Cursor 被 SpaceX 收購）；Cursor 模型文件仍把 GPT-5.6 Sol promotional pricing 排到 11/21 → 切斷後 9 天矛盾視窗；對一人 SaaS 影響：Claude Opus 5.5 / Cursor Composer 2.5 / Codex CLI 替代路徑成形；Anirban Ghoshal（CIO / InfoWorld）口徑分析師認為 Cursor 處境優於 OpenAI
- **🔄 Composer 2.5 benchmark 續收斂**：SWE-Bench Multilingual 79.8 vs Opus 4.7 80.5（差 0.7）、Terminal-Bench 2.0 69.3 vs 69.4（持平）、CursorBench v3.1 63.2 vs 64.8（差 1.6）、Artificial Analysis Coding Agent Index 62 vs 66（差 4）；deeplearning.ai 口徑 Composer 2.5 fast mode 平均 $0.44 / task vs Claude Code + Opus 4.7 max $4.14 / task → 成本差 9.4 倍、時間差 6.7 min vs 8.8 min
- **🔄 MCP 2026-07-28 spec 生效第 103 日 + 8/22 roadmap 更新**：stateless core / MCP Apps / Tasks / 強化 OAuth / 棄 Roots / Sampling / Logging / 棄初始 handshake 改 per-request versioning；roadmap 含 5 項下季優先；對 2026-07-28 spec 支援度為 MCP registry 選型新指標
- **🔄 Claude Code 2.1 Skills + Subagent nesting 5 levels + disallowed-tools frontmatter 續行**：2.1.197（6/30）Sonnet 5 預設 + 1M context；2.1.172 subagent nesting 5 levels；2.1.198 subagent creation flow 改；Skills preload 進 subagent context；disallowed-tools frontmatter；對 fork subagents 預設 on + nested（第三方口徑 depth 3 / concurrency 20）為自然搭配
- **🔄 Smithery → Arcade.dev directory × ToolBench grading 第二週起點首日**：Arcade 2026-08-05 收購 Smithery；ToolBench 索引 43,400+ MCP server + 少數 A-grade；對照 modelcontextprotocol.io 官方 MCP Registry（9 月口徑 30,375 unique）為中立替代；T+9 Day +9 進第二週首日
- **🔄 GitHub Agent HQ + AGENTS.md 錄播窗口關閉 Day +4**：Universe 2025 公告的 Agent HQ + Mission Control + AGENTS.md + Copilot evaluation framework 可重現 benchmark + LLM-graded assertions；agents 僅能對指定 branch commit 且運行在 sandboxed GitHub Actions + firewall 防護；2026-02-04 Claude / Codex 併入 public preview 前最後錨點；Day +4 錄播 48h 窗口已過

## ⚡ 今日行動建議

- [ ] **T-1 三題齊發預設劇本 blog**：TiBOOST 12 強技術棧猜測 × TSMC 5 檔 YoY 情境矩陣 × Anthropic roadshow 情境矩陣 × 同日聯動邏輯（成本：3–4 小時；產出：長文 blog + Twitter thread + Dcard soft_job / PTT Soft_Job 分銷 + 11/10 live blog 大綱模板）
- [ ] **OpenAI 11/12 砍 Cursor T-3 Composer 2.5 vs Opus 5.5 benchmark 預設 + 成本 9.4 倍預期深拆**（成本：2–3 小時；產出：個人 Cursor 設定移轉步驟 + benchmark 腳本雛型 + T-0 當日 Live blog 大綱）
- [ ] **iPhone Duo Day 18 Week 2 Day 11 工作日回歸首日 Playwright 爬蟲 + 中港台三城含週末 48h vs 工作日 5 日平均首切片 blog**（成本：3 小時；產出：Playwright scripts + Postgres schema + Day 16+17 週末 48h vs Day 18 工作日平均快照 + 中港台曲線 CSV + 週末 outlier 處理方法論 + 中國炒家首次虧損內涵）
- [ ] **Smithery T+9 Day +9 第二週起點首日中立性監測報告 + 四地重複度對照（Arcade / modelcontextprotocol.io / Pulse MCP / mcp-get）**（成本：3 小時；產出：Node CLI 隨機抽樣 100 條目 + Arcade 第二週中立性觀察報告首日切片 + 四地重複度 + 各自 stale 比例首個切片）
- [ ] **境外公司海外註冊、台灣營運架構 Dealroom 口徑完整決策樹 + 36 家搭配投資人名單對照 + 40 片 GPU POC 配額詳解**（成本：3 小時；產出：Dealroom 3 條件逐條拆解 + 海外註冊地選擇決策樹 + 台灣營運主體成本試算 + 10 家 pipeline 已知名單對比表）

## ⏳ 待觀察

- **TiBOOST 11/10 決賽頒獎名單**：12 強中前三名 250/150/100 萬得主；得獎者是否出現「使用 Claude Agent SDK / GitHub Agent HQ」具體案例；評審 TSMC / 中華電信 / 光寶對得主的技術採購訊號；資格 3 條件實際對應
- **TSMC 10 月月營收 T-0（11/10 週二）**：若延續 YoY +40–50% → AI 需求續強、YoY +30% 以下 → AI 需求轉弱首個訊號、回落至 2025-10 base +16.9% 附近 → 需重演「晨星 / 大和 / 巴隆口徑拆解」
- **Anthropic roadshow 11/10 起跑情境 vs 延至 11/23 情境**：11/10 若 roadshow 起跑 → 11/09 週一為最後觀察日、Fund 認購信件最早今日流出；11/10 若未起跑 → 11/23 情境延伸、WSJ 11/16 pricing week 情境降權
- **Anthropic S-1/A2 填入 price range / share count 時點**：Sacra 11/02 A1 單源描述需要其他源交叉驗證、EDGAR CIK 2130357 權威檢核點；若 11/09 收市前仍空白 → 11/10 roadshow 起跑可能延後
- **OpenAI × Cursor 切斷實況 11/12 T-3**：Cursor 是否在 T-3 內公告退場補救方案；11/12 → 11/21 促銷價矛盾 9 天視窗如何結束（提前下架 / 延續 / 其他）
- **OpenAI Agent Builder EOL T-20（11/10 週二）**：是否補發 workflow graph export 工具（migration guide 現未承諾、社群請求屢見）；Thanksgiving 前美國窗口剩 16 天
- **iPhone Duo Day 19 Week 2 Day 12（11/10 週二）**：工作日回歸第二日；可做「工作日 vs 週末差額曲線」確認；台灣二手平台首個工作日樣本
- **Smithery T+10 Day +10（11/10 週二）**：第二週第二日；ToolBench grading × directory 擁有者條目中立性第二週切片
- **立法院中小微企業轉型條例 T+42（11/10 週二）**：9/29 開議第 42 日；本週（11/10–11/14）為委員會排審窗口首個觀察週第二日
- **數發部 100 億 AI T+37（11/10 週二）**：8 月底 10 家 / NT$ 2.55 億後 Q4 pipeline 是否公布
- **Vercel AI SDK 7 HarnessAgent GA**：自 6/25 experimental 已滿 T+137；若 11 月 GA 將改變「TS Agent 底層 2 強」對決格局；官方文件仍標記 experimental canary
- **MCP Registry 月度數字刷新**：9 月口徑 30,375 unique / 36% stale；11 月新數字能否顯示「stale 比例下降」為 spec 2026-07-28 更新有效訊號；roadmap 8/22 更新 5 項下季優先

[^composer-25]: Cursor 自家開發的 agentic coding 模型（2026-10 發布），底層是 Kimi K2.5 加上 Cursor 自做的強化學習訓練；主打快與便宜，官方口徑 fast mode 平均 6.7 分鐘／任務、$0.44／任務，是 Cursor 對 OpenAI 模型退場的主要對沖。
[^edgar]: 美國 SEC 的電子化文件揭露系統（Electronic Data Gathering, Analysis, and Retrieval），上市或預上市公司提交的 S-1、10-K、S-1/A 等文件都在上面公開可查，透過公司的 CIK 編號索引；Anthropic 的 CIK 為 2130357，可做為 S-1 修訂版的權威檢核點。
[^toolbench]: Arcade.dev 維運的 MCP server 評測框架，對目錄中 43,400 多個 server 打 A–F 等級；因 Arcade 於 2026-08 收購 Smithery 後同時持有目錄與評分權，被社群點名可能產生利益衝突，中立性連續 2 週列入觀察。
[^dealroom-3]: 以歐洲為主的新創與創投資料庫，另有境外公司落地 3 條件（研發總部、營收占比、員工占比）的國際對照口徑；台灣補助申請書與新創盡調報告常引用，被視為中立第三方資料源。
[^aa-coding-index]: Artificial Analysis 推出的第三方 coding agent 綜合指數，彙整 SWE-Bench、Terminal-Bench 等多項 benchmark 加權後排名；目前 Claude Opus 4.7 為 66 分、Cursor Composer 2.5 為 62 分，是跨模型選型的中立參照。

## 📚 引用來源

1. [OpenAI Help — Winding down OpenAI model access in Cursor](https://help.openai.com/en/articles/20001506) — 2026-11-09 存取
2. [The New Stack — OpenAI cuts Cursor over SpaceX](https://thenewstack.io/openai-cuts-cursor-spacex/) — 2026
3. [InfoWorld — Cursor customers will lose access to OpenAI coding models in November](https://www.infoworld.com/article/4216503/cursor-customers-will-lose-access-to-openai-coding-models-in-november.html) — 2026
4. [CIO — Cursor customers will lose access to OpenAI coding models in November](https://www.cio.com/article/4216508/cursor-customers-will-lose-access-to-openai-coding-models-in-november-2.html) — 2026
5. [Tom's Guide — OpenAI is leaving Cursor in November — here are your 3 options](https://www.tomsguide.com/ai/openai-is-leaving-cursor-in-november-here-are-your-3-options) — 2026
6. [DataCamp — Composer 2.5 benchmarks](https://www.datacamp.com/de/blog/composer-2-5) — 2026-05
7. [DeepLearning.AI — Cursor Fits Its Model to Its Agent: Composer 2.5](https://charonhub.deeplearning.ai/cursor-fits-its-model-to-its-agent/) — 2026
8. [163.com — Cursor Composer 2.5 定價詳解](https://c.m.163.com/news/a/KT956UU105445SO5.html) — 2026-05
9. [money.udn — TiBOOST 11/10 登場 串聯全球 AI 創新與台灣資本市場](https://money.udn.com/money/story/5607/9854887) — 2026-11-03
10. [money.udn — 證交所 TiBOOST 12 強揭曉 全球 396 件搶攻 AI 新創商機](https://money.udn.com/money/story/5607/9841179) — 2026-10-27
11. [ctee — TiBOOST 11/10 登場](https://www.ctee.com.tw/news/20261103701637-430201) — 2026-11-03
12. [cnyes — TiBOOST 創新成長計畫決賽頒獎典禮](https://news.cnyes.com/news/id/6320136) — 2026
13. [國立虎尾科技大學 — TiBOOST 創新大步計畫徵件公告](https://acs.nfu.edu.tw/zh_tw/more_announcement/TiBOOST-%E5%89%B5%E6%96%B0%E5%A4%A7%E6%AD%A5%E8%A8%88%E7%95%AB%E6%AD%A3%E5%BC%8F%E9%96%8B%E6%94%BE%E5%BE%B5%E4%BB%B6-%E8%AA%A0%E6%91%AF%E9%82%80%E8%AB%8B%E5%9C%8B%E5%85%A7%E5%A4%96-AI-%E6%96%B0%E5%89%B5%E4%BC%81%E6%A5%AD%E5%A0%B1%E5%90%8D%E5%8F%83%E8%88%87-39030789) — 2026
14. [Leverage Shares — Anthropic IPO Price](https://leverageshares.com/us/insights/anthropic-ipo-price/) — 2026
15. [Sacra — Anthropic S-1 Amendment Not Finalizing IPO](https://sacra.com/chat/h/a2d43b74-19f7-450e-a230-cb99d77e4a15/) — 2026
16. [FutureSearch — Anthropic IPO Pricing Date](https://futuresearch.ai/app/p/a/anthropic-ipo-pricing-date) — 2026
17. [Newsquawk — Anthropic S-1 Fox Mid-November](https://www.newsquawk.com/headlines/anthropic-will-drop-its-s-1-at-9am-et-and-that-while-market-conditions-have-shifted-the-plan-for-a-mid-november-ipo-fox-reports-citing-a-source) — 2026
18. [Engadget — Anthropic is set to go public](https://engadget.com/2184970/anthropic-is-set-to-go-public-after-filing-paperwork-with-the-sec) — 2026
19. [ValueAddVC — Anthropic Targets Nov 16 IPO Debut](https://valueaddvc.com/pulse/anthropic-ipo-nov16-debut-33b-revenue-2026) — 2026
20. [TSMC IR — 2026 Monthly Revenue](https://investor.tsmc.com/english/monthly-revenue/2026) — 2026-11-09 存取
21. [SEC Form 6-K — TSMC Revenue 2026-10-08](https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000680/tsm-revenue20261008.htm) — 2026-10-08
22. [statementdog — 台積電 10 月營收創新高 年增 16.9% 近一年半最慢](https://statementdog.com/news/14962) — 2025-11
23. [自由時報 — 台積電 10 月營收](https://ec.ltn.com.tw/article/breakingnews/5241415) — 2025-11
24. [uanalyze — AI 熱潮沒退 台積電 10 月營收增速放緩](https://uanalyze.com.tw/articles/8998238340) — 2025-11
25. [uanalyze — 台積電 10 月營收創新高 AI 需求旺](https://uanalyze.com.tw/articles/1748638292) — 2025-11
26. [鉅亨網 — 巴隆周刊論台積電 10 月營收放緩](https://news.cnyes.com/news/id/6230122) — 2025-11
27. [Osher — OpenAI AgentKit: Agent Builder Shuts Down on 30 November 2026](https://osher.com.au/blog/openai-agentkit/) — 2026
28. [opentweet — How to migrate from OpenAI Agent Builder (updated 2026-10-27)](https://opentweet.io/how-to/migrate-from-openai-agent-builder) — 2026-10-27
29. [MCP Directory — OpenAI AgentKit deprecation migration guide](https://mcp.directory/blog/openai-agentkit-deprecation-2026) — 2026-10
30. [OpenAI Community — Deprecation notice: Agent Builder](https://community.openai.com/t/deprecation-notice-agent-builder/1382650) — 2026
31. [CNA — iPhone Duo 中國市場熱銷 發貨排至明年、黃牛價高漲](https://www.cna.com.tw/news/acn/202610170102.aspx) — 2026-10-17
32. [unwire — iPhone Duo 轉售加價回落](https://unwire.hk/2026/10/20/iphone-duo-scalpers-resale-price-drop/mobile-phone/) — 2026-10-20
33. [unwire — iPhone Duo Sin Tat 首賣日回收價查訪](https://unwire.hk/2026/10/23/iphone-duo-sin-tat-launch-buyback-prices/mobile-phone/) — 2026-10-23
34. [中央社 — 數發部百億 AI 投資方案 開放境外公司可納投](https://cna.com.tw/news/afe/202610040029.aspx) — 2026-10-04
35. [TechNews — 期盼打造更多獨角獸 數發部百億 AI 投資方案啟動](https://technews.tw/?p=1364303) — 2026
36. [中央社 — 中小微企業轉型條例擬 9 月送立院](https://cna.com.tw/news/afe/202608260104.aspx) — 2026-08-26
37. [1111 — 8 年砸千億 政院拍板中小微企業升級條例](https://www.1111.com.tw/news/jobns/167737) — 2026
38. [ithome — 中小微企業轉型條例修法方向](https://www.ithome.com.tw/news/179523) — 2026
39. [Visual Studio Magazine — GitHub Introduces Agent HQ](https://visualstudiomagazine.com/Articles/2025/10/28/GitHub-Introduces-Agent-HQ-to-Orchestrate-Any-Agent-Any-Way-You-Work.aspx) — 2025-10-28
40. [DevelopersDigest — What's New in Vercel AI SDK 7 (October 2026)](https://www.developersdigest.tech/blog/vercel-ai-sdk-whats-new-2026) — 2026-10-17
41. [Blog modelcontextprotocol.io — The 2026-07-28 Specification](https://blog.modelcontextprotocol.io/tags/protocol/) — 2026
42. [DevelopersDigest — MCP 2026-07-28 breaking changes](https://www.developersdigest.tech/blog/mcp-2026-07-28-breaking-changes) — 2026
43. [TechNews — Anthropic Upgrades Claude with New Opus 5.5 Model](https://technews.tw/2026/09/23/anthropic-upgrades-claude-with-new-opus-5-5-model/) — 2026-09-23
