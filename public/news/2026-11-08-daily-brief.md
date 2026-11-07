---
title: 每日創業情報 — 2026-11-08
date: 2026-11-08
tags: 創業情報, AI 產業, SaaS, 台灣
summary: OpenAI 11/12 砍 Cursor 模型 T-4 一人 SaaS 選型轉折點 + TiBOOST 決賽 12 強揭曉 T-2 23 國 396 件 + Anthropic S-1 公開 10/26 roadshow T-2 + TSMC 10 月月營收 T-2 11/10 + Agent Builder EOL T-22 + iPhone Duo Day 17 週末完整樣本 + MCP Registry 30K+ servers 36% stale。
keywords: OpenAI Cursor model access end November 12 2026 SpaceX acquisition GPT-5.6 Sol promotional pricing, TiBOOST 2026 11月10日 決賽 12 強 台灣若美 行動貝果 亞洲準譯 醫守科技 23 國 396 件 500 萬, Anthropic S-1 public October 26 2026 Nasdaq ANT $965B Series H roadshow pricing November 13, TSMC October 2026 monthly revenue preview forecast Q4 guidance $52.3-54.3B monthly $17.8B, OpenAI Agent Builder deprecation T-22 Thanksgiving 18 days Agents SDK ChatKit Workspace Agents, iPhone Duo Day 17 Week 2 Day 10 週日 完整週末樣本 台灣 中港 轉售 收斂, MCP Registry 30,375 unique servers 99,114 records September 36% stale 2026-07-28 spec auth transport, 數發部 100 億 AI T+35 10 家 累計 2.55 億 境外公司 Dealroom, Vercel AI SDK 7 HarnessAgent experimental T+136 11 月 GA 無訊號, GitHub Agent HQ webinar Day +3 AGENTS.md Mission Control Copilot Universe 2025
---

# 每日創業情報 — 2026-11-08

## 🎯 今日 TL;DR

- **🆕 OpenAI 11/12 砍 Cursor Models T-4 — SpaceX 收購後 OpenAI 停止供模型 + GPT-5.6 Sol 促銷價表卻維持到 11/21（切斷後 9 天矛盾視窗）**：OpenAI 官方 help page 表示將於 11/12 結束對 Cursor 的模型供應（起因於 8/14 Cursor 被 SpaceX 收購）；Cursor 模型文件仍把 GPT-5.6 Sol 的 promotional pricing 排到 11/21，與切斷日差 9 天，對仍綁 Cursor 的 solo dev 是急迫選型節點；替代路徑：Claude Opus 5.5 / Sonnet 5.5（Anthropic 直連）、Cursor Composer 2.5（Kimi K2.5 底層）、Codex 自家 CLI、Claude Code CLI；注意：日期為「proposed」、OpenAI / Cursor 任一方可能再變動
- **🆕 TiBOOST 決賽 12 強揭曉 T-2（11/08 → 11/10）— 23 國 396 件提案收斂至 12 強 + 國內 9 + 海外 3 名單公布 + 總獎金 500 萬 NT 前三名 250/150/100**：國內 9 組為台灣若美[^juvo-tech]、行動貝果[^mobagel]、亞洲準譯、融文國際、振生半導體、動見科技、翔評互動、築智科技、醫守科技[^edoc]；海外 3 組為 ASKaFOX（加拿大）、Bering Lab（韓國）、DOGU Robotics（韓國）；活動地點台北漢來大飯店 3F 鉑金 B 廳、時間 09:30–17:30；11/07 brief 口徑「19 國逾百件」已過時 → 修正為「23 國 396 件」
- **🔄 Anthropic S-1 公開版 2026-10-26 送件 — roadshow T-2（11/08 → 11/10 情境）+ 11/07 brief 口徑「S-1/A1 於 11/02」為錯**：第三方來源明示 public S-1 於 10/26 送件掛 Nasdaq ticker ANT；仍未見 S-1/A1（首次 amendment）或 S-1/A2 填入 price / share / 募資規模；最近私募估值 $965B（Series H 2026-06）為下限參考值；WSJ 口徑機構投資人 push $1.5–1.6T 續行；SEC 規則：11/10 最早 roadshow、11/13 最早 pricing（11/11 退伍軍人節休市）、11/16 WSJ 傳 pricing week 情境
- **🔄 TSMC 10 月月營收 T-2（11/08 → 11/10 預估公告）— 最後週末倒數 + 2025-10 YoY +16.9% 基準 + Q4 guidance 單月平均 $17.8B**：Q4 guidance $52.3–54.3B（NT$31.8 匯率）、CFO 口徑 QoQ +14%、單月均值約 $17.8B 為市場預設值；9 月 YoY +54.6% / 1–9 月累計 YoY +41.1% / 全年美元口徑 YoY +44%；10 月若 YoY +40–50% → AI 需求續強、YoY +30% 以下 → 轉弱首個訊號、YoY 回落至 +16.9% 附近 → AI megatrend 動能明顯轉弱
- **🔄 OpenAI Agent Builder EOL T-22（11/08 → 11/30）— 剩 22 天 + Thanksgiving 11/26 前美國窗口剩 18 天**：T-23 → T-22；migration 雙路：工程師 production → Agents SDK（TS / Python），非工程師可編輯 → ChatGPT Workspace Agents（需 Business / Enterprise / Edu workspace）；ChatKit[^chatkit-2] embeddable UI + Connector Registry 保留；Evals read-only T+8（10/31 → 11/30 全下線倒數 8 天）
- **🔄 iPhone Duo Day 17 Week 2 Day 10（11/08 週日）— 第一個完整週末第二日 + 台灣 vs 中港曲線「完整週末樣本」收斂觀察日**：Day 16（11/07 週六）為首個週末樣本；Day 17 為週末第二日 → 週末 48 小時樣本首次完整；台灣首批到貨量估 <20,000 台、首波交期已排至 2027-01-25；對照曲線：中國預售加價 5,000 元 → 開賣首日回落至 1,000–1,500 元、256GB 白色成交均價 21,407 元、1TB 黑色溢價最高 7,143 元
- **🆕 MCP Registry 9 月口徑 30,375 unique servers（API 返回 99,114 records、三倍 since May）+ 36% stale > 3 個月 + 2026-07-28 spec 改 auth / transport 規則**：11/07 brief 口徑「500+ 官方加 10,000 公開」已嚴重過時；9 月數字顯示 30,375 unique（含版本去重後）、36% 超過 3 個月未更新；2026-07-28 spec 更新改動 auth 與 transport → 影響 Smithery 遷移後 Arcade.dev directory vs modelcontextprotocol.io 官方 registry 選擇
- **🔄 Smithery MCP Proxy T+8 Day +8（11/08 週日）— 第一個完整週末第二日 + 下週一（11/9）第二週起點倒數 + Arcade.dev directory × ToolBench grading 利益衝突監測末日**：10/31 UTC 00:00 下線後第 8 日；Day +8 為第一個完整週末第二日；下週一 11/9 為「連續 2 週中立性觀察」第二週起點；T+7 → T+8 第一週收尾
- **🔄 GitHub Agent HQ Insight webinar Day +3（11/08 週日）— 錄播 48 小時窗口收尾 + AGENTS.md 範本中文首發第三日 + 下週一（11/9）為「錄播上線 Insight events page」首個工作日觀察日**：11/05 ET 直播已結束；Day +3 進錄播窗口收尾
- **🔄 立法院新會期中小微企業 1,000 億轉型條例 T+40 + 下週（11/10–11/14）為委員會排審窗口首個觀察週**：9/29 開議第 40 日；最新搜尋顯示媒體口徑仍停在 10 月初「尚未通過」階段 → 11 月排審尚無公開進度
- **🔄 數發部 100 億 AI T+35 — 8 月底累計口徑 10 家、累計投資 NT$ 2.55 億 + 境外公司放寬 Dealroom[^dealroom-2] 口徑續行**：原 11/07 brief 口徑「6 案 7,500 萬」為舊數字；10 月 CNA 更新：8 月底累計 10 家、累計 NT$ 2.55 億；平均單案 NT$ 2,550 萬 vs 上限 NT$ 2 億 = 8 倍成長空間

## 🔄 昨日追蹤

- **🔄 Anthropic S-1 / IPO Day +13**：11/07 brief 口徑「S-1/A1 於 11/02」為錯 → 修正為「public S-1 於 10/26 送件」；roadshow T-2（11/10 情境）；WSJ $1.5–1.6T 續行
- **🔄 TiBOOST T-3 → T-2**：新增 12 強名單（9 國內 + 3 海外）+ 數字修正（23 國 396 件 vs 原 19 國逾百件）
- **🔄 TSMC 10 月月營收 T-3 → T-2**：11/10 公告倒數；最後週末
- **🔄 OpenAI Agent Builder EOL T-23 → T-22**
- **🔄 iPhone Duo Day 16 → Day 17**：Week 2 Day 9 → Day 10；週末樣本首日 → 週末 48 小時樣本首次完整
- **🔄 Smithery T+7 → T+8**：第一個完整週末第一日 → 第二日
- **🔄 GitHub Agent HQ webinar Day +2 → Day +3**：錄播 48 小時窗口收尾
- **🔄 立法院新會期中小微企業 T+39 → T+40**
- **🔄 數發部 100 億 AI T+34 → T+35**：數字更新為 10 家 / NT$ 2.55 億
- **🆕 OpenAI 11/12 砍 Cursor Models 事件首刊**：新增至追蹤清單

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🆕 TiBOOST 決賽 12 強揭曉 T-2（11/08 → 11/10 決賽）— 23 國 396 件 → 12 強（國內 9 + 海外 3）+ 總獎金 500 萬 NT、前三名 250/150/100 萬**：國內 9 組為台灣若美科技、行動貝果、亞洲準譯、融文國際、振生半導體、動見科技、翔評互動、築智科技、醫守科技；海外 3 組為 ASKaFOX（加拿大）、Bering Lab（韓國）、DOGU Robotics（韓國）；活動 11/10 (二) 09:30–17:30 台北漢來大飯店 3F 鉑金 B 廳；主辦金管會 + 國發會、執行證交所 / 集保 / 櫃買 / 期交所、創投公會與私募公會協辦 | [money.udn — TiBOOST 11/10 登場 串聯全球 AI 創新](https://money.udn.com/money/story/5607/9854887)、[money.udn — 證交所 TiBOOST 12 強揭曉 全球 396 件搶攻 AI](https://money.udn.com/money/story/5607/9841179)、[ctee — TiBOOST 11/10 登場](https://www.ctee.com.tw/news/20261103701637-430201)、[wantrich — TiBOOST 11/10 登場](https://wantrich.chinatimes.com/news/20261103900545-420501) | 一人 SaaS 參賽者實質路徑已收斂至 12 強；對內容創作：11/10 當晚為「獲獎名單解析 + 得主技術棧猜測 + 評審趨勢觀察」3 合 1 中文 blog 黃金窗口（同日發 TSMC 月營收點評即為「T-0 雙題」）；行動貝果（MoBagel）已為台灣 ML 平台老牌、台灣若美為新面孔、醫守科技（EDoc）為醫療 NLP 代表 | 機會：T-2 寫「12 強技術棧猜測矩陣：若美 / 行動貝果 / 醫守 / 振生 / 動見 / 翔評 / 築智 / 亞洲準譯 / 融文 9 組中文拆解 + 海外 3 組（ASKaFOX / Bering Lab / DOGU Robotics）切入點」 + 11/10 晚發「獲獎名單技術棧快拆」+ 11/11–11/13 連載「前三名深度拆解 + 一人 SaaS 複製難度評分」；威脅：12 強中僅 2–3 組為真正「一人或 2–3 人小團隊」等級、對 solo dev 直接參照度有限；500 萬獎金池相對 AWS / Google 補助屬中小級 |
| **🔄 TSMC 10 月月營收 T-2（11/08 → 11/10 預估公告）— 最後週末倒數 + 2025-10 YoY +16.9% 基準對照 + Q4 guidance $52.3–54.3B / 單月均 $17.8B**：Q4 guidance $52.3–54.3B（NT$31.8 匯率）、CFO 口徑 QoQ +14%、單月均值約 $17.8B；9 月 YoY +54.6%、1–9 月累計 YoY +41.1%、全年美元口徑 YoY +44%；2025-10 YoY +16.9% 為基準對照（但 AI 需求結構差異不宜直接類比） | [TSMC IR — 2026 Monthly Revenue](https://investor.tsmc.com/english/monthly-revenue/2026)、[SEC Form 6-K — TSMC Revenue 2026-10-08](https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000680/tsm-revenue20261008.htm)、[Simply Wall St — TSMC Record AI Revenue And Capex Plans](https://simplywall.st/stocks/us/semiconductors/nyse-tsm/taiwan-semiconductor-manufacturing/news/tsmc-record-ai-revenue-and-capex-plans-keep-taiwan-at-center/amp)、[Xeno Spectrum — TSMC Q3 2026 gross margin capex](https://xenospectrum.com/en/tsmc-q3-2026-gross-margin-capex/) | 對一人 SaaS inference 成本：10 月月營收若 YoY +40–50% → N3 / N2 產能緊 → inference 單位成本續壓低速率續行；若 YoY +30% 以下 → inference 成本壓低速率趨緩首個訊號；若 YoY 回落至 2025-10 基準 +16.9% 附近 → AI megatrend 動能首個明顯轉弱訊號 | 機會：T-2 寫「TSMC 10 月月營收 T-2 5 檔 YoY 情境矩陣 × 2025-10 YoY +16.9% 基準對照 × 對一人 SaaS inference 成本影響鏈」預設劇本 → 11/10 公告後補發「實際數字 + 情境命中分析」；威脅：單月營收僅為大趨勢小切片，不宜過度推論；base effect 已很大，YoY 數字需對照連續 3 個月 MoM 才有結構意義 |
| **🔄 數發部 100 億 AI T+35 — 8 月底累計口徑 10 家、累計投資 NT$ 2.55 億 + 境外公司放寬 Dealroom 口徑續行**：原 11/07 brief 口徑「6 案 7,500 萬」為 2026 年年初口徑、已過時；10 月 4 日 CNA 更新「8 月底累計 10 家、累計 NT$ 2.55 億」；平均單案 NT$ 2,550 萬 vs 上限 NT$ 2 億 = 8 倍成長空間；境外公司放寬 3 條件（在台設研發總部 + 研發投入占比過半、在台營收過半、在台員工占比過半）續行 | [中央社 — 數發部百億 AI 投資方案 開放境外公司可納投](https://cna.com.tw/news/afe/202610040029.aspx)、[technews — 期盼打造更多獨角獸 數發部百億 AI 投資方案啟動](https://technews.tw/?p=1364303)、[uanalyze — 數發部祭百億資金催生 AI 新創已核定 6 案](https://uanalyze.com.tw/articles/1078148404) | 平均 NT$ 2,550 萬 vs 上限 NT$ 2 億 = 8 倍成長空間；對 solo dev：直接 pitch 數發部國發基金實務上命中率極低（傾向 B2B + 有營收、員工數 10+），但境外公司放寬為「海外註冊、台灣營運」架構的台灣 solo dev 打開一條路 | 機會：寫「數發部 100 億 T+35 境外公司放寬 3 條件 Dealroom 口徑拆解 + 一人 SaaS 海外註冊 vs 台灣註冊決策樹」 + 10 家 pipeline 公開比對（目前已知名單含 Jiiov、eCloudvalley、2 家已 confidential）；威脅：10 家 pipeline 已知名單不完整、且 100 億 10 年期 ÷ 國際同級 pre-seed fund $20–50M 比較下規模偏小、不宜當主要資金預期 |
| **🔄 立法院新會期中小微企業 1,000 億轉型條例 T+40 — 9/29 開議第 40 日 + 下週（11/10–11/14）為委員會排審窗口首個觀察週 + R&D 抵減率 20% + 轉型設備投資抵減門檻 25 萬**：T+40 週末無新進度；行政院新會期優先法案 40 項、產經類 8 案以此為首；下週為委員會排審窗口首個觀察週；最新搜尋結果中無「已送立院審議 / 已排 11 月議程」明確訊號 | [中央社 — 中小微企業轉型條例擬 9 月送立院](https://cna.com.tw/news/afe/202608260104.aspx)、[1111 — 8 年砸千億 政院拍板中小微企業升級條例](https://www.1111.com.tw/news/jobns/167737)、[ithome — 中小微企業轉型條例修法方向](https://www.ithome.com.tw/news/179523) | 若法案通過，R&D 抵減率自約 15% 提高至 20%、轉型設備投資抵減門檻自產業創新條例 100 萬降至 25 萬；下週為立院排審首個關鍵觀察週；但接案現金流轉型不宜綁補助 | 機會：「11/10 立法院新會期第 6 週起點 + 中小微條例委員會排審預測」+「25 萬元設備投資抵減自認試算 + R&D 20% 抵減個案拆解」雙篇；威脅：送審至三讀期程 3–12 個月，實際落地時點仍不定 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🆕 OpenAI 11/12 砍 Cursor Models T-4 事件（11/08 → 11/12 切斷 + 11/21 GPT-5.6 Sol 促銷價表到期）** | AI coding / 模型供應鏈 / 選型節點 | 仍以 Cursor 為主的 solo dev：T-4 內確認 fallback stack；考慮切換到 Claude Opus 5.5（直連 Anthropic）或 Cursor Composer 2.5（Cursor 自家 model、Kimi K2.5 底層 + Cursor RL）；仍有 personal OpenAI API key 的用戶：11/12 後僅 local Chat / Agent 仍可用 | Cursor Plus $8 / Premium $30 / Super $100 / Ultra $200；Claude API Opus 5.5 $4/M in $20/M out、Sonnet 5.5 $2/$10、Haiku 5.5 $0.10/$0.50（<100K）；Codex CLI 自家計費 | vs 繼續用 Cursor：Composer 2.5 可補 OpenAI 模型空缺；vs 直接走 Claude Code CLI：訂閱結構與工作流差異大、對 Cursor 熟悉者切換成本中等；vs Codex 自家 CLI + ChatGPT Pro：仍有 OpenAI 模型直連但無 Cursor 的編輯器體驗 | 🔴 重度依賴 GPT-5.6 Sol：T-4 立刻跑並行跑 Composer 2.5 vs Claude Opus 5.5 benchmark；🟡 Claude 已是主力：T-4 不急、僅確認 Cursor fallback；🟢 全走 Claude Code CLI：無影響 |
| **🔄 TiBOOST 12 強技術棧猜測矩陣（11/08 T-2）— 國內 9 + 海外 3 + 預估得主 B2B / fintech / AI 工具 3 類佔比 50/25/25** | AI 新創 / 台灣 B2B 落地 | T-2 寫「12 強技術棧猜測 + 評審關注趨勢預測」；重點：行動貝果（MoBagel）為 AutoML 平台老牌、醫守（EDoc）為醫療 NLP、台灣若美為新面孔 | 不適用（為賽事而非工具） | vs 一般矽谷 AI 新創：TiBOOST 偏向台灣資本市場 + 創新板兩大落地路徑、非純技術 moat | 🟢 solo dev：T-2 寫 12 強技術棧猜測、11/10 當晚快拆得主；🟡 已入選者：11/10 當天發個人 Build Log；🔴 11 月準備其他賽事：TiBOOST 曝光值得順勢引流 |
| **🔄 OpenAI Agent Builder EOL T-22（11/30 全下線）— Agents SDK vs ChatGPT Workspace Agents 雙路分化 + Evals read-only T+8 + reusable prompts v1 / prompts API 併入 11/30 下線 + ChatKit 保留 + Connector Registry 保留** | AI agent / T-22 最後 22 天 | Agent Builder 用戶：工程師 production workflow → Agents SDK（TS / Python），非工程師可編輯 → ChatGPT Workspace Agents（需 Business / Enterprise / Edu workspace）；Evals 用戶：匯出 dataset + Promptfoo[^promptfoo-2] YAML 轉換；reusable prompts 用戶：Playwright / Puppeteer dashboard 爬取 | Promptfoo 開源 MIT；Langfuse 社群版免費 / Pro $59/mo / Enterprise custom；ChatKit 保留不計 | vs ChatKit（embeddable chat UI 保留）；Agents SDK 選「engineer-owned workflow」、Workspace Agents 選「non-engineer editable automation」；Evals 遷移目標 Promptfoo + Langfuse 混搭 | 🔴 Agent Builder 用戶：T-22 Thanksgiving 前 18 天、建議 rebuild in Agents SDK（export 僅第一稿）；🟡 Evals 用戶：若尚未匯出 dataset，Thanksgiving（11/26）前補完；🟢 red-teaming 需求：保留 Promptfoo + Langfuse 混搭 |
| **🆕 MCP Registry 9 月口徑 30,375 unique servers（API 返回 99,114 records）+ 36% stale > 3 個月 + 2026-07-28 spec 改 auth / transport**：11/07 brief 口徑「500+ 官方 + 10,000+ 公開」已嚴重過時 | MCP 生態 / 中立 registry / spec 更新 | 選擇 Smithery 遷移目標：Arcade.dev directory 續行 + modelcontextprotocol.io 官方 registry 2,000+ server.json manifest + GitHub topic / Pulse MCP / mcp-get 各自覆蓋；對「中立性 + 版本管理 + auth / transport 2026-07-28 spec」三指標分別評分 | 官方 registry 免費；Arcade.dev directory 免費使用者端；Pulse MCP / mcp-get 免費 | vs 11/07 brief 口徑：規模從「10,000+ 公開」跳到 30K+ unique（含版本去重）、三倍 since May；但 36% 超過 3 個月未更新 → 大量 stale servers 拉低「可用服務」實際數量 | 🟢 新建 MCP server：直接走 vendor 官方 URL + 考慮同步登記官方 MCP Registry；🟡 現用 Smithery 團隊：T+8 比對 Arcade / modelcontextprotocol.io / Pulse MCP 覆蓋率 → 下週一（11/9）第二週起點數據補齊；🔴 依賴超過 3 個月未更新 server：主動 fork / 自架 mirror |
| **🔄 Claude 5.5 家族 T+32/+26/+15 + Vercel AI SDK 7 HarnessAgent T+136 experimental 續行 + GitHub Agent HQ 第三方 agent 併入 2026-02-04 前**：Opus 5.5（$4/M in $20/M out、orchestrator）+ Sonnet 5.5（$2/$10、draft / bugfix）+ Haiku 5.5（$0.10/$0.50 <100K、sub-agent）三層成本比約 40:20:1 一人 SaaS 架構底層已穩定 | LLM 模型家族 + Agent 框架 底層 | 需 fork subagents + 跨 session 狀態 + skills + 權限邊界細緻；對照 Claude Agent SDK 2.1.121 CHANGELOG 「`CLAUDE_CODE_FORK_SUBAGENT=1` now works in non-interactive sessions」+ 0.3.302 預設 on；Vercel AI SDK 7.0.143（截 10/16）10 harness adapter + experimental；HarnessAgent 距 6/25 已滿 T+136 11 月 GA 無公開訊號 | Claude API 計費；SDK 開源免費；Vercel AI SDK 開源免費；Composer 2.5 併入 Cursor 訂閱 | vs 11/12 後 Cursor OpenAI 退場：Claude 5.5 三層 + Agent SDK 直連為最穩走法；vs Vercel AI SDK 7 WorkflowAgent GA + HarnessAgent experimental：WorkflowAgent 可試裝 production、HarnessAgent GA 遙遙無期 | 🟢 一人 SaaS：Opus 5.5 orchestrator + Haiku 5.5 tool-heavy sub-agent + Sonnet 5.5 doc / small code 3 層混搭已穩定；🟡 Vercel AI SDK 7：WorkflowAgent production 可試、HarnessAgent experimental 不建議 production；🔴 深度編碼：Claude Opus 5.5 / Cursor Composer 2.5 皆可、11/12 後 Cursor + GPT 組合消失 |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：OpenAI 11/12 砍 Cursor Models 事件 T-4 → T+0 Live blog + solo dev 選型決策樹 🆕

- **痛點來源**：OpenAI 官方 help page 已公告 11/12 結束對 Cursor 的模型供應；GPT-5.6 Sol 促銷價表卻維持到 11/21 → 切斷後 9 天矛盾視窗為 solo dev 急迫選型節點；中文技術媒體口徑整合 + 替代 stack benchmark 近零；大型技術媒體傾向財經角度、不會做「單人工作流實際替換成本」拆解
- **目標客群（台灣／亞洲）**：仍以 Cursor 為主的台灣 solo dev（估 2,000–5,000 位）+ 使用 GPT-5.6 Sol 評估 Claude Opus 5.5 vs Composer 2.5 替代的中型團隊（估 200–600 家）+ 關注 AI coding 選型的技術 blogger / YouTuber（估 300–800 位）
- **技術複雜度**：2/5 — 內容型，無程式碼；關鍵為「T-4 時間軸」× 「3 條替代路徑 benchmark」× 「11/12–11/21 促銷價矛盾視窗情境分析」× 「個人 Cursor 設定移轉步驟」
- **預估 MRR**：one-off NT$ 50K–200K per 深度文（1.5–3 小時完成、含同主題 YouTube short 導流）；若做續集「Cursor / Claude Code / Codex / Cline 四強 solo dev 工作流 90 天連載」系列 10 篇 → NT$ 500K–2M one-off；或訂閱「每週 AI coding 選型週報」NT$ 300/mo × 200 用戶 ≈ NT$ 60K MRR
- **競品弱點**：台灣技術媒體口徑整合 + 替代 stack benchmark 中文資源近零；大型技術媒體不會做「單人工作流實際替換成本」拆解；小型技術 blog 不會追 11/12 vs 11/21 促銷價矛盾；SaaS 同業「中斷風險情境」推論近零
- **切入建議**：11/08 寫「OpenAI 11/12 砍 Cursor T-4 solo dev 選型決策樹 + 11/12 vs 11/21 促銷價矛盾視窗 3 情境預測 + Claude Opus 5.5 / Composer 2.5 / Codex CLI 替代 stack 1 小時 benchmark」 → 11/12 當日 Live blog「切斷實況 + 促銷價表實測」 → 11/13–11/14「切斷後 48 小時使用者反應 + Composer 2.5 承接率」 → 11/21 促銷結束日「Cursor 定價頁盤整 + 與對手差異」

### 點子 2：TiBOOST 11/10 決賽 T-2 → T-0 12 強技術棧連載 + 一人 SaaS 複製難度評分 🔄

- **痛點來源**：TiBOOST 12 強名單已公布（國內 9：台灣若美、行動貝果、亞洲準譯、融文國際、振生半導體、動見科技、翔評互動、築智科技、醫守科技 + 海外 3：ASKaFOX、Bering Lab、DOGU Robotics）；中文媒體通常只做「新聞稿式」報導、缺「12 強技術棧拆解 + 一人 SaaS 複製難度評分」技術拆解；得獎者往往使用台灣少見的技術組合（如 pgvector[^pgvector-2] + Claude Agent SDK 混搭）需要內行人才看得懂的中文拆解
- **目標客群（台灣／亞洲）**：想投台灣 AI 新創的早期創投 / 天使投資人（估 200–500 位）+ 考慮參賽但未入選的獨立開發者（估 500–1,500 位）+ 想複製得獎者模式的新手 indie（估 1,500–3,000 位）+ 關注台灣 AI 政策與資金動向的科技記者 / blogger（估 100–300 位）
- **技術複雜度**：2/5 — 內容型；關鍵為「11/08–11/09 12 強個別技術棧猜測 → 11/10 當晚快速寫得獎者名單 + 技術棧快拆 → 11/11–11/13 深度拆解前三名 → 11/15 一人 SaaS 複製難度評分表」
- **預估 MRR**：one-off NT$ 60K–180K per 深度文 × 3 篇連載 = NT$ 180K–540K；若做「每季 1 次台灣 AI 賽事得主技術棧連載」訂閱系列 → NT$ 500/mo × 200 用戶 ≈ NT$ 100K MRR
- **競品弱點**：中文媒體對台灣 AI 賽事只做新聞稿式報導、缺「技術棧拆解 + 一人 SaaS 複製難度評分」深度；得獎者本身通常忙產品、不會自己寫中文技術 blog 分享；境外公司最高 US$1,500 補助細節中文解析近零
- **切入建議**：11/08 寫「TiBOOST 12 強技術棧猜測矩陣（9 國內 3 海外）+ 評審關注趨勢預測 + 境外公司補助 Dealroom 口徑對照」 → 11/10 得獎名單出來後 24 小時內發「獲獎者技術棧快拆」 → 11/11–11/13 連載前 3 名深度拆解 → 11/15 統整「一人 SaaS 複製難度評分表」

### 點子 3：TSMC 10 月月營收 T-2 → T-0 YoY 情境矩陣 × 2025-10 基準對照 × 對一人 SaaS inference 成本影響鏈 🔄

- **痛點來源**：TSMC 10 月月營收通常在 11/10 前後公告，T-2 → T-0 為黃金內容窗口；9 月 NT$ 5,118.6 億（YoY +54.6%、MoM −0.6%）+ 1–9 月累計 NT$ 3 兆 8,987.3 億（YoY +41.1%）為基準線；Q4 官方 guidance $52.3–54.3B → 單月均 $17.8B 市場預設值；中文技術媒體未從「對一人 SaaS inference 成本」角度切入
- **目標客群（台灣／亞洲）**：使用 Claude / OpenAI / Groq inference 的台灣 indie / SaaS 團隊（估 2,000–5,000 位）+ 關注 AI 芯片供需的技術 blogger（估 200–500 位）+ 投資 TSMC / Nvidia / AMD 的 AI 散戶（估 5,000–10,000 位）
- **技術複雜度**：2/5 — 內容型；關鍵為「月營收 YoY 5 檔情境（+60/+50/+40/+30/+20）× 對一人 SaaS inference 成本影響鏈 × 2025-10 YoY +16.9% 基準對照 × Q4 guidance 單月攤分法」預設劇本；11/10 公告後即可套入實際數字
- **預估 MRR**：one-off NT$ 40K–150K per 深度文；若做「每月第 10 日 TSMC 月營收 → 一人 SaaS inference 成本影響鏈」訂閱系列 → NT$ 500/mo × 200 用戶 ≈ NT$ 100K MRR
- **競品弱點**：財經媒體從「晶片景氣」切入、技術媒體從「模型算力」切入、幾乎沒有人從「對一人 SaaS inference 單位成本」切入；5 檔情境矩陣 × 2025-10 基準對照 × 11/10 公告後套入實際數字的可重複套用模板資源近零
- **切入建議**：11/08 寫「TSMC 10 月月營收 T-2 5 檔 YoY 情境矩陣 × 2025-10 YoY +16.9% 基準對照 × 對一人 SaaS inference 成本影響鏈」預設劇本 → 11/10 公告後補發「實際數字 + 情境命中分析 + TiBOOST 得主同日同題」雙題 blog → 11/12 補發「對 Claude / OpenAI / Groq inference 定價壓力推論」+「OpenAI 砍 Cursor 事件實況」雙題

### 點子 4：iPhone Duo Day 17 完整週末樣本 Playwright 爬蟲 + 中港台三城含週末曲線對比 🔄

- **痛點來源**：iPhone Duo Day 17 Week 2 Day 10（週日）為第一個「完整週末樣本」切片日；週末拍賣量通常比工作日高 30–50% → Day 16+17 48 小時為第一次可觀察到完整週末拍賣行為；台灣讀者缺「含週末樣本」的台灣 vs 中港曲線對比；中文技術 blog 對「週末 outlier 處理 + 7 日平均 vs 工作日平均」方法論近零；中國預售加價 5,000 元 → 開賣首日 1,000–1,500 元、256GB 白色成交均價 21,407 元、1TB 黑色溢價最高 7,143 元為少見中文對照數字
- **目標客群**：想做價格爬蟲 side project 的台灣 indie（估 300–800 位）+ 關注 iPhone Duo 轉售的台灣 Apple 粉絲（估 5,000–15,000 位）+ 想學 Playwright + Postgres schema 設計的新手工程師（估 1,000–3,000 位）
- **技術複雜度**：3/5 — Playwright + Postgres schema + 週末 outlier 處理 + 7 日平均 vs 工作日平均 + SellCell 3 維度保值率比對
- **預估 MRR**：one-off NT$ 20K–80K per 爬蟲 + blog；訂閱「每週 iPhone Duo 三城含週末曲線對比」NT$ 200/mo × 100 用戶 ≈ NT$ 20K MRR；可 upsell Playwright + Postgres schema 開源 CLI
- **競品弱點**：台灣中文 blog 對「週末樣本 outlier 處理 + 7 日平均 vs 工作日平均」方法論近零；中港 vs 台灣含週末樣本對比完全空白；中國預售 → 開賣首日 → 10 日後收斂曲線中文數據解析稀缺
- **切入建議**：11/08 寫「iPhone Duo Day 17 Week 2 Day 10 完整週末樣本切片 Playwright 爬蟲 + 中港台三城含週末曲線對比 + 週末 outlier 處理方法論」 → 11/09 工作日前夜「週末 48 小時樣本 vs 工作日 5 日平均首切片」 → 11/10 工作日回歸後首個「7 日平均 vs 5 工作日平均」對比

## 🧰 工具堆疊更新

- **🆕 OpenAI × Cursor 模型供應中止 T-4**：OpenAI 官方 help page 已公告 11/12 結束對 Cursor 的模型供應（起因於 8/14 Cursor 被 SpaceX 收購）；Cursor 模型文件仍把 GPT-5.6 Sol promotional pricing 排到 11/21 → 切斷後 9 天矛盾視窗；對一人 SaaS 影響：Claude Opus 5.5 / Cursor Composer 2.5 / Codex CLI 替代路徑成形
- **🆕 MCP Registry 規模修正**：9 月口徑 30,375 unique servers（API 返回 99,114 records）、三倍 since May；36% stale > 3 個月；2026-07-28 spec update 改動 auth 與 transport → Smithery 遷移後 Arcade.dev directory 與 modelcontextprotocol.io 官方 registry 選擇需看 2026-07-28 spec 支援度
- **🔄 GitHub Agent HQ + AGENTS.md 錄播窗口 Day +3**：Universe 2025 公告的 Agent HQ + Mission Control[^mission-control-2] + AGENTS.md[^agents-md-2] + Copilot evaluation framework 可重現 benchmark + LLM-graded assertions；agents 僅能對指定 branch commit 且運行在 sandboxed GitHub Actions + firewall 防護；2026-02-04 Claude / Codex 併入 public preview 前最後錨點；Day +3 為 48 小時錄播窗口收尾
- **🔄 Smithery → Arcade.dev directory × ToolBench grading 第一個完整週末第二日**：Arcade 2026-08-05 收購 Smithery；ToolBench 索引 43,400+ MCP server + 少數 A-grade；對照 modelcontextprotocol.io 官方 MCP Registry（9 月口徑 30,375 unique）為中立替代；Day +8 進第一個完整週末第二日、下週一（11/9）為第二週起點
- **🔄 Claude 5.5 家族三層混搭底層**：Opus 5.5（$4/M in $20/M out、orchestrator）+ Sonnet 5.5（$2/$10、draft / bugfix）+ Haiku 5.5（$0.10/$0.50 <100K、sub-agent）三層成本比約 40:20:1、一人 SaaS 架構底層已穩定；對 Agent SDK fork subagents 預設 on + nested（第三方口徑 depth 3 / concurrency 20）為自然搭配
- **🔄 Vercel AI SDK 7.0.143 T+136 experimental 續行**：7.0.1 → 7.0.143（6/25 → 10/16）10 harness adapter 累積；WorkflowAgent 已 production stable、HarnessAgent 仍 experimental canary；距 11 月 GA 無公開訊號 → 若 11 月 GA 將改變「TS Agent 底層 2 強」對決格局

## ⚡ 今日行動建議

- [ ] **OpenAI 11/12 砍 Cursor T-4 solo dev 選型決策樹 + 11/12 vs 11/21 促銷價矛盾視窗 3 情境預測 blog**：Claude Opus 5.5 / Cursor Composer 2.5 / Codex CLI 替代 stack 1 小時 benchmark + 個人 Cursor 設定移轉步驟（成本：2–3 小時；產出：長文 blog + Twitter thread + Dcard soft_job / PTT Soft_Job 分銷）
- [ ] **TiBOOST 12 強技術棧猜測矩陣 T-2 blog**：9 國內 + 3 海外 12 組個別技術棧猜測 + 評審關注趨勢預測 + 境外公司補助 Dealroom 口徑對照 + 11/10 得獎名單出來後 24 小時內發「獲獎者技術棧快拆」（成本：2 小時；產出：T-2 預測 blog + 11/10 即時拆解模板）
- [ ] **TSMC 10 月月營收 T-2 5 檔 YoY 情境矩陣 × 2025-10 基準對照 × 對一人 SaaS inference 成本影響鏈預設劇本**（成本：2 小時；產出：預設劇本 blog + 11/10 發文倒數提醒 + 情境命中機率表）
- [ ] **iPhone Duo Day 17 完整週末樣本切片 Playwright 爬蟲 + 中港台三城含週末曲線對比**（成本：2–3 小時；產出：Playwright scripts + Postgres schema + Day 16+17 週末 48 小時快照 + 中港台含週末曲線 CSV + 週末 outlier 處理方法論）
- [ ] **Smithery T+8 第一個完整週末第二日中立性監測報告 + 隨機抽樣 100 條目 CLI**（成本：3 小時；產出：Node CLI 隨機抽樣 100 條目 + Arcade 第一週中立性觀察報告 + modelcontextprotocol.io 官方 registry 9 月口徑 30K+ 覆蓋率對照 + 下週一第二週起點對照預設）

## ⏳ 待觀察

- **OpenAI × Cursor 切斷實況 11/12**：Cursor 是否在 T-4 內公告退場補救方案（Composer 2.5 單一模型 or OpenRouter 作為第三方中繼）；11/12 → 11/21 促銷價矛盾 9 天視窗如何結束（提前下架 / 延續 / 其他）
- **Anthropic S-1/A1 填入時點**：Day +13 → Day +14；下週一 11/9 roadshow 最早合法起始日為第三個可能時窗；若至 11/09 仍空白 → 11/16 WSJ 傳 pricing week 情境降權、roadshow 延至 11/23 或 Q1 2027 替代情境機率升高
- **Anthropic 估值 $1.5–1.6T 再下修 / 回升 / 定案**：WSJ 本週報導機構投資人 push 至 $1.5–1.6T；S-1/A1 填入後首個確定數字會在 price range 揭示
- **TiBOOST 11/10 決賽頒獎名單**：12 強中前三名 250/150/100 萬得主；得獎者是否出現「使用 Claude Agent SDK / GitHub Agent HQ」具體案例；評審 TSMC / 中華電信 / 光寶對得主的技術採購訊號
- **TSMC 10 月月營收 T-1 → T-0**：11/10 預估公告日；若延續 YoY +40–50% → AI 需求續強、YoY +30% 以下 → AI 需求轉弱首個訊號、回落至 +16.9% 基準附近 → AI megatrend 動能首個明顯轉弱訊號
- **OpenAI Agent Builder EOL T-21（11/09 週一）**：是否補發 workflow graph export 工具（migration guide 現未承諾、社群請求屢見）；Thanksgiving 前美國窗口剩 17 天
- **iPhone Duo Day 18 Week 2 Day 11（11/09 週一）**：完整週末樣本 + 工作日回歸後首個「工作日 vs 週末差額」切片
- **Smithery T+9 Day +9（11/09 週一）**：第二週起點；ToolBench grading × directory 擁有者條目中立性第二週切片
- **立法院新會期中小微企業轉型條例 T+41（11/09 週一）**：9/29 開議第 41 日；下週（11/10–11/14）為「委員會排審窗口」首個觀察週
- **數發部 100 億 AI T+36（11/09 週一）**：8 月底 10 家 / NT$ 2.55 億後 Q4 pipeline 是否公布
- **Vercel AI SDK 7 HarnessAgent GA**：自 6/25 experimental 已滿 4.5 個月（T+136），若 11 月 GA 將改變「TS Agent 底層 2 強」對決格局；官方文件仍標記 experimental canary
- **MCP Registry 月度數字刷新**：9 月口徑 30,375 unique / 36% stale；11 月新數字能否顯示「stale 比例下降」為 spec 2026-07-28 更新有效訊號

[^juvo-tech]: 台灣若美科技（Juvo Tech）為本屆 TiBOOST 12 強國內 9 組中最新面孔之一，媒體公開資訊有限；依 TiBOOST 徵件口徑屬 AI / fintech / B2B 工具類新創，實際技術棧需待 11/10 決賽簡報揭露。

[^mobagel]: 行動貝果（MoBagel）為台灣 AutoML / 資料分析 SaaS 平台老牌，2014 年創立、曾進駐美國矽谷 500 Startups；主打無程式碼機器學習 Decanter AI，為台灣少數同時具備 B2B 企業客戶與 API 銷售的機器學習平台。

[^edoc]: 醫守科技（EDoc）為台灣醫療 NLP 代表新創，專注電子病歷結構化與處方安全審查；2024–2026 年多次獲科技部與衛福部專案支持，代表台灣以 LLM + 醫療法規結合打造垂直 copilot 的典型路線。

[^chatkit-2]: ChatKit 是 OpenAI 推出的可嵌入式對話 UI SDK，提供串流、工具呼叫、附件與檔案搜尋等預設元件，讓第三方產品以少量程式碼即可在自家前端嵌入 ChatGPT 式介面；Agent Builder 11/30 下線範圍不含它，仍會續行維護。

[^dealroom-2]: 總部位於阿姆斯特丹的歐洲創投情報平台，蒐錄全球新創估值、募資輪次與投資人資料；許多政府基金與 LP 將其當作公開口徑來源，本次台灣數發部 100 億 AI 境外公司放寬條件即以其口徑拆解為 3 項門檻。

[^promptfoo-2]: 開源 MIT 授權的 LLM evaluation 與 red-teaming CLI，透過本地 YAML 定義測試集並串進 CI；第三方口徑稱其已被 OpenAI 收攏為官方 Evals 遷移目標，官方公告仍待確認。

[^pgvector-2]: pgvector 為 PostgreSQL 開源的向量搜尋擴充，新增 vector 資料型別與 ANN 索引（HNSW、IVFFlat），讓既有 Postgres 直接作為語義搜尋與 RAG embedding 儲存引擎使用；是中小型 SaaS 不另架 Pinecone / Weaviate 等專用向量 DB 的常見選擇。

[^mission-control-2]: Mission Control 是 GitHub Agent HQ 隨 Universe 2025 公告的統一多 agent 控制面板，可同時在 VS Code、github.com 與 Mobile 介面指派、監看、pivot 多個廠商 agent（Claude、Codex、Devin、Jules、Grok）的任務流，屬 Copilot Pro+ / Enterprise 用戶功能，為 GitHub 把多 vendor agent 收攏到單一介面的主要入口。

[^agents-md-2]: AGENTS.md 是把 AI agent 行為規範、工具權限與專案脈絡寫入 repo 根目錄的 markdown 設定檔格式，可提交至版控並被 Cursor、Claude Code、GitHub Copilot 等 agent 工具共同讀取；2026 年已逐步成為 agentic 開發跨工具的事實標準，取代各家原本獨立的 rules 檔。

## 📚 引用來源

1. [OpenAI Help — Winding down OpenAI model access in Cursor](https://help.openai.com/en/articles/20001506) — 2026-11-08 存取
2. [Borncity — OpenAI stoppt Cursor-Zugang: Modelle enden am 12. November](https://borncity.com/news/openai-stoppt-cursor-zugang-modelle-enden-am-12-november/) — 2026
3. [Pondero AI — OpenAI cuts Cursor off by November](https://buttondown.com/ponderoai/archive/pondero-brief-openai-cuts-cursor-off-by-november/) — 2026
4. [HackerNoon — What OpenAI's Cursor cutoff means for your team](https://hackernoon.com/what-openais-cursor-cutoff-means-for-your-team) — 2026
5. [iThome — OpenAI × Cursor 模型存取終止](https://www.ithome.com.tw/news/178533) — 2026
6. [money.udn — TiBOOST 11/10 登場 串聯全球 AI 創新與台灣資本市場](https://money.udn.com/money/story/5607/9854887) — 2026-11-03
7. [money.udn — 證交所 TiBOOST 12 強揭曉 全球 396 件搶攻 AI 新創商機](https://money.udn.com/money/story/5607/9841179) — 2026-10-27
8. [ctee — TiBOOST 11/10 登場](https://www.ctee.com.tw/news/20261103701637-430201) — 2026-11-03
9. [wantrich — TiBOOST 11/10 登場](https://wantrich.chinatimes.com/news/20261103900545-420501) — 2026-11-03
10. [cnyes — TiBOOST 創新成長計畫決賽頒獎典禮](https://news.cnyes.com/news/id/6320136) — 2026
11. [Parameter — Claude creator prepares $100B public offering ahead of Thanksgiving](https://parameter.io/claude-creator-prepares-100-billion-public-offering-ahead-of-thanksgiving/) — 2026
12. [Tech Insider — Anthropic IPO biggest listings ANT 22 banks $542B spend 2026](https://tech-insider.org/anthropic-ipo-biggest-listings-ant-22-banks-542b-spend-2026/) — 2026
13. [itiger — When Will Anthropic Go Public? IPO Timeline](https://www.itiger.com/hant/news/2678104317) — 2026
14. [TSMC IR — 2026 Monthly Revenue](https://investor.tsmc.com/english/monthly-revenue/2026) — 2026-11-08 存取
15. [SEC Form 6-K — TSMC Revenue 2026-10-08](https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000680/tsm-revenue20261008.htm) — 2026-10-08
16. [Simply Wall St — TSMC Record AI Revenue And Capex Plans](https://simplywall.st/stocks/us/semiconductors/nyse-tsm/taiwan-semiconductor-manufacturing/news/tsmc-record-ai-revenue-and-capex-plans-keep-taiwan-at-center/amp) — 2026
17. [XTB — TSMC 10 月營收歷史對照 2025 YoY +16.9%](https://www.xtb.com/en/market-analysis/tsmc-reports-the-lowest-revenue-growth-in-more-than-a-year) — 2025-11-11
18. [Osher — OpenAI AgentKit: Agent Builder Shuts Down on 30 November 2026](https://osher.com.au/blog/openai-agentkit/) — 2026
19. [opentweet — How to migrate from OpenAI Agent Builder (updated 2026-10-27)](https://opentweet.io/how-to/migrate-from-openai-agent-builder) — 2026-10-27
20. [MCP Directory — OpenAI AgentKit deprecation migration guide](https://mcp.directory/blog/openai-agentkit-deprecation-2026) — 2026-10
21. [hao.cnyes — iPhone Duo 預購炒價 7,143 元](https://hao.cnyes.com/post/272946) — 2026
22. [udn money — iPhone Duo 下周五開賣 台灣大、遠傳預購起跑](https://money.udn.com/money/story/5607/9819868) — 2026-10
23. [unwire — iPhone Duo 轉售加價回落](https://unwire.hk/2026/10/20/iphone-duo-scalpers-resale-price-drop/mobile-phone/) — 2026-10
24. [dev.to — The MCP Registry By The Numbers](https://dev.to/amareswer/the-mcp-registry-by-the-numbers-38nc) — 2026-09
25. [Atlan — What is an MCP Registry](https://atlan.com/know/ai-agent/what-is-an-mcp-registry.md) — 2026
26. [Smithery — MCP Proxy and managed identity shut down on October 31](https://smithery.ai/future) — 2026-11-08 存取
27. [Arcade.dev — Smithery joins Arcade](https://arcade.dev/blog/smithery-joins-arcade) — 2026-08
28. [中央社 — 數發部百億 AI 投資方案 開放境外公司可納投](https://cna.com.tw/news/afe/202610040029.aspx) — 2026-10-04
29. [TechNews — 期盼打造更多獨角獸 數發部百億 AI 投資方案啟動](https://technews.tw/?p=1364303) — 2026
30. [中央社 — 政院提修法投入千億助中小微企業升級](https://cna.com.tw/news/aipl/202610080165.aspx) — 2026-10-08
31. [中央社 — 中小微企業轉型條例擬 9 月送立院](https://cna.com.tw/news/afe/202608260104.aspx) — 2026-08-26
32. [1111 — 8 年砸千億 政院拍板中小微企業升級條例](https://www.1111.com.tw/news/jobns/167737) — 2026
33. [Visual Studio Magazine — GitHub Introduces Agent HQ](https://visualstudiomagazine.com/Articles/2025/10/28/GitHub-Introduces-Agent-HQ-to-Orchestrate-Any-Agent-Any-Way-You-Work.aspx) — 2025-10-28
34. [DevelopersDigest — What's New in Vercel AI SDK 7 (October 2026)](https://www.developersdigest.tech/blog/vercel-ai-sdk-whats-new-2026) — 2026-10-17
35. [TechNews — Anthropic Upgrades Claude with New Opus 5.5 Model](https://technews.tw/2026/09/23/anthropic-upgrades-claude-with-new-opus-5-5-model/) — 2026-09-23
