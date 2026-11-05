---
title: 每日創業情報 — 2026-11-06
date: 2026-11-06
tags: 創業情報, AI 產業, SaaS, 台灣
summary: Anthropic S-1/A1 Day +3 roadshow T-3 進 pricing week 前最後工作日 + GitHub Agent HQ Insight webinar 落地後 Day +1 中文筆記黃金窗口 + Smithery T+6 Day +6 週五切片 + TSMC 10 月月營收 T-4 進 11/10 公告倒數 + iPhone Duo Day 15 Week 2 Day 8 + OpenAI Agent Builder EOL T-24 剩 24 天。
keywords: Anthropic S-1A Amendment No 1 Day 3 roadshow Nov 9 T-3 pricing week Nov 16 EDGAR amendment price range blank, GitHub Agent HQ Insight webinar recap Nov 5 Taipei Nov 6 AGENTS.md Mission Control Parker Johnston, Smithery MCP Proxy T+6 Day 6 週五 Friday weekday close Arcade.dev ToolBench grading, TSMC October 2026 monthly revenue T-4 Nov 10 YoY scenario inference cost, iPhone Duo Day 15 Week 2 Day 8 Taiwan secondary market 74900 露天 Yahoo 奇摩 shopee, OpenAI Agent Builder EOL T-24 Thanksgiving Nov 26 Agents SDK ChatGPT Workspace Agents, Claude Agent SDK TypeScript 0.3.302 Python 0.2.168 T+21 CLAUDE_CODE_FORK_SUBAGENT, 立法院 中小微企業轉型條例 T+38 排審 新會期, 數發部 100 億 AI T+33 11月 pipeline Dealroom 50% 境外公司放寬, TiBOOST 創新成長計畫 11/10 決賽頒獎 新台幣 500 萬元 金管會 國發會
---

# 每日創業情報 — 2026-11-06

## 🎯 今日 TL;DR

- **🔄 Anthropic S-1/A1 Day +3（11/06）— roadshow T-3 進 11/16 pricing week 前最後工作日 + 價位 / 股數 / 募資規模仍空白 + S-1/A2 時窗進入倒數**：11/02 Amendment No. 1 補 Q3 2026 + 895.4B 運算承諾 + 承銷團大擴軍，但未填價位；今日 Day +3 為下週一（11/9）roadshow 最早合法起始日前最後一個工作日；若至 11/06 收盤仍無 S-1/A2 → 11/9 roadshow 情境需延至 11/12 / 11/16 WSJ pricing week 情境降權；若今日 Day +3 ~ Day +6（下週一 11/9）內填入 → 11/16 pricing week 情境高機率兌現
- **🆕 GitHub Agent HQ Insight webinar Day +1（11/06 06:00 Taipei 直播結束 + 錄播窗口）— 中文筆記黃金 24 小時啟動**：11/05 ET 12:00（= Taipei 11/06 01:00）Insight 主辦直播已落地；Parker Johnston（Insight agentic field CTO）主講 Mission Control[^mission-control] + AGENTS.md[^agents-md] + Copilot evaluation framework；錄播通常 48 小時內上線 Insight events page；今日 06:00–18:00 為「中文筆記 blog + AGENTS.md 範本首發」黃金窗口；對台灣 indie：搶在中文大廠媒體慢反應窗口內發文可吃到最早的 SEO 曝光
- **🔄 Smithery MCP[^mcp] Proxy T+6 Day +6（11/06 週五）— 工作日第四讀數 + 第一週收尾日 + Arcade.dev[^arcade-dev] 擁有 directory + ToolBench grading 利益衝突監測首個完整切片收尾**：10/31 UTC 00:00 下線後第 6 日；Day +6 進入第一個完整「工作週」尾盤；下週一（11/9）為「連續 2 週中立性觀察」第二週起點；對一人 SaaS：Day +6 寫「第一週中立性監測報告 + 隨機抽樣 100 條目覆蓋率」發文，週末 48 小時 HN / Reddit r/mcp 擴散窗口
- **🔄 TSMC 10 月月營收 T-4（11/06 → 11/10 預估公告）— 投資人關係網站仍空白 + T-4 進最後工作週 + 10 月 1–9 月累計 NT$ 3 兆 8,987.3 億 YoY +41.1% 基準線**：官方月營收公告期通常每月 10 日前後（11/10 為週二）；9 月 NT$ 5,118.6 億（YoY +54.6%、MoM −0.6%）；10 月若延續 YoY +40–50% → 一人 SaaS inference infra 層成本續行壓低；若 YoY 降至 +30% 以下 → AI 需求轉弱首個訊號；T-4 為「預設 5 檔 YoY 情境矩陣 blog」發文窗口
- **🔄 iPhone Duo Day 15 Week 2 Day 8（11/06 週五）— Day 11–Day 15 連續 5 日對照窗口首個完整工作週收尾 + 台灣曲線定位 vs 中港曲線穩定結論成形日**：台灣首批到貨量估 <20,000 台（9/17 良率 60%）；Day 11–Day 15 連續 5 日對照窗口完整；中國 10/26「15,799 vs 15,999」補貼後實際成交、不到 3 日破發 + 香港 HK$2,000+ → HK$501–1,001 10 日內 60–75% 收斂；Day 15 收尾後首個穩定「台灣轉售溢價 vs 中港曲線」客觀讀數可產出
- **🔄 OpenAI Agent Builder EOL T-24（11/06）剩 24 天 + Thanksgiving 11/26 前美國窗口剩 20 天 + migration guide 無變動**：T-25 → T-24；Agents SDK（TS / Python）為 code-first 主路 + ChatGPT Workspace Agents 為非工程師可編輯替代雙路分化續行；OpenAI 官方 deprecation 頁面 11/30 全下線日期無變動；Evals read-only T+6（10/31 進 read-only 到 11/30 全下線倒數 Day 6）
- **🆕 TiBOOST[^tiboost] 創新成長計畫 T-4（11/06 → 11/10 決賽頒獎）— 金管會 + 國發會發起 AI 新創賽事 500 萬 NT 獎金池 + 11/10 TSMC 月營收同日舉辦**：決賽與頒獎典禮訂於 2026-11-10（週二），獎金池 500 萬 NT；對台灣 AI 新創：T-4 為最後 Demo 準備窗口；對 content creator：賽事結果 11/10 當晚為「獲獎名單解析 + 得主技術棧拆解 + 評審趨勢觀察」3 合 1 中文 blog 黃金窗口
- **🔄 立法院新會期中小微企業 1,000 億轉型條例 T+38（11/06）— 9/29 開議第 38 日 + 第 1 個工作週收尾無新進度 + 行政院新會期優先法案 40 項第 1 項**：10/08 政院通過「中小微企業轉型升級發展條例」草案（8 年 1,000 億、R&D 抵減率提高至 20%、轉型設備投資抵減門檻 100 萬 → 25 萬）；T+38 收盤前仍未見院會排審新進度；接案現金流轉型不宜綁補助
- **🔄 數發部 100 億 AI T+33（11/06）— 11 月第 3 個工作日 + 11 月第 1 個完整工作週收尾無新一輪 pipeline**：10/04 中央社境外公司放寬納投（Dealroom[^dealroom] 口徑 R&D 總部 + 50% R&D 預算與員工 + 50% 營收綁定台灣辦公室）滿 33 日仍未見新一輪 pipeline 公開；平均 2,550 萬 vs 上限 2 億 = 8 倍成長空間；100 片 GPU 算力池申請窗口續行為額外補助；首期 40 片 GPU 已過申請期（原截止 2026-10-30）

## 🔄 昨日追蹤

- **🔄 Anthropic S-1/A1 Day +2 → Day +3**：T-4 → T-3；roadshow 11/9 前最後工作日
- **🔄 GitHub Agent HQ Insight webinar T-0 → Day +1**：直播已落地 + 錄播窗口開啟
- **🔄 Smithery T+5 Day +5 → T+6 Day +6**：工作日第三讀數 → 第四讀數、第一週收尾
- **🔄 OpenAI Agent Builder EOL T-25 → T-24**：最後 24 天
- **🔄 iPhone Duo Day 14 Week 2 Day 7 → Day 15 Week 2 Day 8**：Day 11–Day 15 五日窗口收尾
- **🔄 TSMC 10 月月營收 T-5 → T-4**：11/10 公告倒數
- **🔄 立法院新會期中小微企業 T+37 → T+38**
- **🔄 數發部 100 億 AI T+32 → T+33**
- **🔄 Claude Agent SDK T+20 → T+21**

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🆕 TiBOOST 創新成長計畫 T-4（11/06 → 11/10 決賽頒獎）— 金管會 + 國發會發起 AI 新創賽事 500 萬 NT 獎金池 + 跟 TSMC 10 月月營收同日舉辦**：決賽與頒獎典禮訂於 2026-11-10（週二）、新台幣 500 萬獎金池；賽事鎖定 AI 新創；對獨立開發者為少見的「跨部會 + 金融 / 國發雙背書 + 公開 Demo 日」綜合窗口 | [cnyes — TiBOOST 創新成長計畫決賽頒獎典禮](https://news.cnyes.com/news/id/6320136)、[bnext — 新創募資專題](https://www.bnext.com.tw/categories/funding) | 一人 SaaS 參賽：賽事偏好 B2B / fintech / AI 工具，若產品主打 LLM / agent 技術棧可吃到最早曝光；對內容創作：11/10 當晚為「獲獎名單解析 + 得主技術棧拆解 + 評審趨勢觀察」3 合 1 中文 blog 黃金窗口（當日同時發 TSMC 月營收點評即為「T-0 雙題」）| 機會：T-4 寫「TiBOOST 決賽日 T-4 參賽者技術棧猜測 + 評審關注趨勢預測」 + 11/10 得獎名單出來後發「獲獎者技術棧拆解 + 一人 SaaS 複製難度評分」；威脅：500 萬獎金池相對 AWS / Google 創業補助屬中小級、對獨立開發者影響力有限 |
| **🔄 立法院新會期中小微企業 1,000 億轉型條例 T+38（11/06 週五）— 9/29 開議第 38 日 + 第 1 個完整工作週收尾無新進度 + R&D 抵減率 20% + 轉型設備投資抵減門檻 25 萬**：T+38 收盤前仍未見院會排審新進度；行政院新會期優先法案 40 項、產經類 8 案以此為首 | [中央社 — 政院提修法投入千億助中小微企業升級](https://cna.com.tw/news/aipl/202610080165.aspx)、[udn — 立院新會期 朝野優先法案 PK](https://udn.com/news/story/6656/9778118)、[1111 — 卓揆：中小微企升級條例草案進行中](https://www.1111.com.tw/news/167737/amp/) | 若法案通過，R&D 投資抵減率自現行約 15% 提高至 20%、轉型設備投資抵減門檻自產業創新條例 100 萬降至 25 萬；T+38 第 1 個完整工作週收尾仍未見院會排審 = 立法時程續不確定；下週（11/10–11/14）為「委員會排審窗口」首個觀察週 | 機會：「11/10 立法院新會期第 6 週起點 + 中小微條例委員會排審預測」+「25 萬元設備投資抵減自認試算 + R&D 20% 抵減個案拆解」雙篇；威脅：法案送審至三讀期程 3–12 個月，實際落地時點不定，接案現金流轉型不宜綁補助 |
| **🔄 iPhone Duo Day 15 Week 2 Day 8（11/06 週五）— Day 11–Day 15 連續 5 日對照窗口首個完整工作週收尾 + 台灣曲線定位 vs 中港曲線穩定結論成形日 + 台灣官方售價 74,900 元起（256GB）至 118,900 元（2TB 頂規）**：Week 1 已過（10/23 開賣 + 禁 walk-in + 首波供貨量交期 2027-01-25）；台灣首批到貨量估 <20,000 台（9/17 整機組裝良率略高於 60%）；對照曲線：中國 10/26「15,799 vs 15,999」補貼後實際成交、不到 3 日破發 + 香港 HK$2,000+ → HK$501–1,001 10 日內 60–75% 收斂；Day 15 收尾後首個穩定「台灣轉售溢價 vs 中港曲線」客觀讀數可產出 | [digitimes — iPhone Duo 開賣 交期排到 2027](https://www.digitimes.com.tw/tech/dt/n/shwnws.asp?id=772472)、[CNA — iPhone Duo 中國市場熱銷 發貨排至明年](https://www.cna.com.tw/news/acn/202610170102.aspx)、[udn money — iPhone Duo 下周五開賣 台灣大、遠傳預購起跑](https://money.udn.com/money/story/5607/9819868)、[unwire — iPhone Duo 轉售加價回落](https://unwire.hk/2026/10/20/iphone-duo-scalpers-resale-price-drop/mobile-phone/)、[technews — iPhone Duo 高盛稱親民 74,900 元起](https://finance.technews.tw/2026/09/10/iphone-duo-affordable/) | 一次性拍賣爬蟲 → 轉售溢價快照 blog（Yahoo / 露天 / shopee）；對比亞洲三城收斂曲線是「低成本高點閱」內容切入點；SellCell 一年保值率研究口徑：摺疊機整體保值率 35.4%（傳統 55.3%）、iPhone 16 系列 51.5% 為少見比對點 | 機會：Day 15 五日平均讀數穩定結論為台灣讀者第一次可對比中港曲線的「完整工作週」客觀數字 + SellCell「摺疊 vs 傳統 vs iPhone 16」3 維度保值率比對為少見切角；威脅：樣本數仍小 / Week 3（11/9–11/13）才有真正穩定結論 |
| **🔄 TSMC 10 月月營收 T-4（11/06 → 11/10 預估公告）— 投資人關係網站 10 月仍空白 + T-4 進最後工作週 + 9 月 NT$ 5,118.6 億（YoY +54.6%）作為基準線**：官方月營收公告期通常每月 10 日前後（11/10 為週二）；1–9 月累計 NT$ 3 兆 8,987.3 億、YoY +41.1%；Q4 官方 guidance $52.3–54.3B（匯率 NT$31.8 計）→ 10 月若 YoY +40–50% 區間 → 一人 SaaS inference infra 層成本續行壓低；若 YoY 降至 +30% 以下 → AI 需求轉弱首個訊號 | [TSMC IR — 2026 Monthly Revenue](https://investor.tsmc.com/english/monthly-revenue/2026)、[SEC Form 6-K — 2026-10-08 月營收](https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000680/tsm-revenue20261008.htm)、[xenospectrum — TSMC Q3 2026 Gross Margin Capex](https://xenospectrum.com/en/tsmc-q3-2026-gross-margin-capex/) | 對一人 SaaS inference 成本：10 月月營收若 YoY +40–50% → N3 / N2 產能緊 → inference 單位成本續壓低速率續行；若 YoY +30% 以下 → inference 成本壓低速率趨緩首個訊號；Q4 guidance 已定 $52.3–54.3B 意味 10 月以 1/3 攤分 → 單月 NT$ 554–576B 區間為市場預設值 | 機會：T-4 寫「TSMC 10 月月營收 T-4 5 檔 YoY 情境矩陣 + 對一人 SaaS inference 成本影響鏈 + Q4 guidance 單月攤分法」為 11/10 公告前最後窗口；威脅：單月營收僅為大趨勢小切片，不宜過度推論 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🆕 GitHub Agent HQ Insight webinar Day +1（11/06 06:00 Taipei 直播結束 + 錄播窗口） — Parker Johnston 主講 Mission Control + AGENTS.md + Copilot evaluation framework 官方細節黃金 24 小時** | AI agent / Copilot / 跨 vendor 控制面 | Copilot Pro+ / Enterprise 用戶：今晨補聽錄播 + 寫中文筆記 blog + AGENTS.md 範本首發；觀望者：等 48 小時內 Insight events page 錄播上線 | Copilot Pro $10/mo + Pro+ $39/mo + Business $19/user/mo + Enterprise $39/user/mo；Agent HQ + 第三方 agents 滾出到所有付費 Copilot 訂閱者不加費 | vs Cursor（Plus $8 / Premium $30 / Super $100 / Ultra $200 / Ultra Max）/ Claude Code CLI / Codex Cloud；差異在 Agent HQ 整合 5 家 vendor（Anthropic / OpenAI / Google / Cognition / xAI）+ AGENTS.md 檔格式為 2026 agentic 共通設定底層（Cursor / Claude Code / GitHub Agent HQ 皆支援）| 🟢 Pro+ / Enterprise 用戶：11/06 上午補聽 + 下午發中文筆記 blog；🟡 Cursor / Claude Code 用戶：補聽後決定是否寫 AGENTS.md；🔴 觀望者：等 Insight events page 錄播與 Universe 2026 發布前先不換 |
| **🔄 Smithery MCP Proxy T+6 Day +6（11/06 週五） — 第一週收尾 + Arcade.dev 續行 directory + ToolBench grading 利益衝突監測首個完整切片收尾 + 隨機抽樣 100 條目中立性觀察** | MCP infrastructure / T+6 Day +6 工作日第四讀數 | 已遷移完成的團隊：第一週 + 第一個完整工作週中立性監測報告產出 + 隨機抽樣 100 條目覆蓋率；未遷移團隊：用 vendor 官方 MCP URL + 自建或選第三方 OAuth 2.1 identity provider 補 auth / session management | 使用者端免費（Arcade.dev 續行 directory）；原 Pro / Enterprise 退款 Day 6 倒數 | vs 直接 vendor 官方 MCP URL / Pulse MCP / mcp-get / modelcontextprotocol.io 官方 registry（2025-09 預覽、2,000+ servers、server.json manifest）；差異在 Arcade 2026-08-05 已收購 Smithery + 同時運營 ToolBench grading | 🔴 現用 Smithery 團隊：T+6 Day +6 完成遷移驗收 + 退款到帳檢查；🟡 Arcade 中立性觀察：Day 6 第一週收尾切片、2–4 週觀察落實度；🟢 新建 MCP server：直接走 vendor 官方 URL + 考慮同步登記官方 MCP Registry（registry.modelcontextprotocol.io）|
| **🔄 OpenAI Agent Builder EOL T-24（11/30 全下線）— Agents SDK vs ChatGPT Workspace Agents 雙路分化 + Evals read-only T+6 + reusable prompts v1/prompts API 併入 11/30 下線** | AI agent / T-24 最後 24 天 | Agent Builder 用戶：工程師 production workflow → Agents SDK（TS / Python），非工程師需能編輯 → ChatGPT Workspace Agents；Evals 用戶：匯出 dataset + Promptfoo YAML 轉換（OpenAI 官方 cookbook 推薦）；reusable prompts 用戶：Playwright / Puppeteer dashboard 爬取 | Promptfoo[^promptfoo] 開源 MIT；Langfuse 社群版免費 / Pro $59/mo / Enterprise custom；ChatKit 保留（embeddable chat UI），不在 11/30 下線範圍 | vs ChatKit（embeddable chat UI 保留）；Agents SDK 選擇「engineer-owned workflow」、Workspace Agents 選擇「non-engineer editable automation」；Evals 遷移目標 Promptfoo + Langfuse 混搭 | 🔴 Agent Builder 用戶：T-24 進最後 24 天 + 根據「工程師 vs 非工程師」雙路選型、建議「rebuild in Agents SDK」而非「workflow graph export」（不保證 1:1）；🟡 Evals 用戶：若尚未匯出 dataset，Thanksgiving（11/26）前補完；🟢 red-teaming 需求：保留 Promptfoo + Langfuse 混搭 |
| **🔄 Claude Agent SDK TypeScript 0.3.302 + Python 0.2.168 T+21** — fork subagents 預設 on（`CLAUDE_CODE_FORK_SUBAGENT=0` 可關）；官方 subagents 文件仍寫「subagents cannot spawn their own subagents」、與第三方口徑「depth 3 / concurrency 20」矛盾、建議以 anthropics/claude-agent-sdk-typescript CHANGELOG 為準 | TypeScript / Python Agent 框架 / 一人 SaaS 底層 | 需 fork subagents + 跨 session 狀態 + skills + 權限邊界細緻；對照 2.1.121 CHANGELOG「CLAUDE_CODE_FORK_SUBAGENT=1 now works in non-interactive sessions」 → 0.3.302 預設 on 為 2.1.121 延伸 | SDK 開源免費；Claude API 計費另計；版本綁 Claude Code CLI 2.1.302 | vs Vercel AI SDK 7（HarnessAgent 仍 experimental 滿 4 個月、WorkflowAgent GA 自 6/25、無 2026-11 minor release）/ OpenAI Agents SDK（Agent Builder 11/30 遷移目標）/ LangGraph | 🟢 一人 SaaS：T+21「SessionStore + skills + fork subagents」持續實戰；🟡 Vercel AI SDK 7：WorkflowAgent 可試裝 production、HarnessAgent GA 遙遙無期；🔴 LangGraph：LangSmith Deployment Standard Units 成本重估 |
| **🔄 Claude 5.5 家族 T+30/+24/+13 — Opus 5.5 Sept 22 / Sonnet 5.5 Sept 28 / Haiku 5.5 Oct 7 完成全家族擴充 + Opus 5.5 比 Fable 5.1[^fable-5-1] 旗艦同級 cost -40% + Sonnet 5.5 $2/M in $10/M out 為 Opus 5.5 $4/$20 的一半 + Haiku 5.5 $0.10/M (<100K) 定位子 agent** | LLM 模型 / 一人 SaaS 底層 | Opus 5.5 作為主執行、Sonnet 5.5 處理 bug / draft / small code、Haiku 5.5 作為 sub-agent 處理分類 / 摘要 / DB query；三層成本比約 40 : 20 : 1 | API：Opus 5.5 $4/M in $20/M out；Sonnet 5.5 $2/M in $10/M out；Haiku 5.5 $0.10/M in $0.50/M out（<100K tokens）| vs GPT-5.5（1M context + agentic coding + computer use，4/23 推出）/ Cursor Composer 2.5（Kimi K2.5 底層）；差異在 Claude 5.5 走「單一家族三層 + 明確 sub-agent 分工」而非單一 flagship | 🟢 一人 SaaS：Opus 5.5 orchestrator + Haiku 5.5 tool-heavy sub-agent + Sonnet 5.5 doc / small code 3 層混搭已穩定；🟡 單純 chat 用戶：Sonnet 5.5 cost-effective；🔴 深度編碼：Cursor Composer 2.5 / Claude Opus 5.5 皆可、依訂閱結構選 |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：TiBOOST 11/10 決賽頒獎 T-4 → T-0 得獎者技術棧連載 🆕

- **痛點來源**：TiBOOST 創新成長計畫 2026-11-10 決賽頒獎典禮 500 萬 NT 獎金池 + 金管會 + 國發會雙部會背書，台灣 AI 新創重要公開露出窗口；中文媒體通常只做「新聞稿式」報導，缺「得獎者技術棧 + 一人 SaaS 複製難度評分」的技術拆解；賽事得主往往使用台灣少見的技術組合（如 Postgres pgvector[^pgvector] + Claude Agent SDK 混搭）需要內行人才看得懂的中文拆解
- **目標客群（台灣／亞洲）**：想投台灣 AI 新創的早期創投 / 天使投資人（估 200–500 位）+ 考慮參賽但未入選的獨立開發者（估 500–1,000 位）+ 想複製得獎者模式的新手 indie（估 1,500–3,000 位）+ 關注台灣 AI 政策與資金動向的科技記者 / blogger（估 100–300 位）
- **技術複雜度**：2/5 — 內容型；關鍵為「11/10 當晚快速寫得獎者名單 + 技術棧猜測 → 11/11–11/13 深度拆解 → 11/15 一人 SaaS 複製難度評分表」
- **預估 MRR**：one-off NT$ 40K–120K per 深度文 × 3 篇連載 = NT$ 120K–360K；若做「每季 1 次台灣 AI 賽事得主技術棧連載」訂閱系列 → NT$ 500/mo × 150 用戶 ≈ NT$ 75K MRR
- **競品弱點**：中文媒體對台灣 AI 賽事只做新聞稿式報導、缺「技術棧拆解 + 一人 SaaS 複製難度評分」深度；得獎者本身通常忙產品、不會自己寫中文技術 blog 分享
- **切入建議**：11/06 寫「TiBOOST 決賽日 T-4 參賽者技術棧猜測 + 評審關注趨勢預測」 → 11/10 得獎名單出來後 24 小時內發「獲獎者技術棧拆解」 → 11/11–11/13 連載 3 位得主個別深度拆解 → 11/15 統整「一人 SaaS 複製難度評分表」

### 點子 2：GitHub Agent HQ Insight webinar Day +1 中文筆記 + AGENTS.md 範本首發 🆕

- **痛點來源**：Insight webinar 11/5 ET 12:00 PM（Taipei 11/6 01:00）直播已落地、錄播 48 小時內上線；Agent HQ + Mission Control + AGENTS.md + Copilot evaluation framework 中文教學近零；AGENTS.md 作為 2026 agentic 共通設定底層已開始擴散（Cursor / Claude Code / GitHub Agent HQ 皆支援）但中文範本與實戰範例匱乏；中文大廠媒體慢反應 24–48 小時，今日為獨立開發者搶最早 SEO 曝光窗口
- **目標客群（台灣／亞洲）**：Copilot Pro+ / Enterprise 用戶（估 1,500–4,000 位）+ 考慮從 Cursor 轉 GitHub Agent HQ 的中型工程團隊（估 300–800 家）+ 想寫 AGENTS.md 的 indie 工程師（估 2,000–5,000 位）+ 內部 DevRel / Platform Eng 需跟進 agent 治理（估 150–400 位）
- **技術複雜度**：3/5 — 內容型 + 範本型；關鍵為「06:00 補聽錄播 + 翻譯整理 + AGENTS.md 範本首發 + Cursor / Claude Code / GitHub Agent HQ 3 家對照表」
- **預估 MRR**：one-off NT$ 60K–240K per 完整中文筆記 blog × 1–3 次合刊（Agent HQ 本體 / Mission Control 細節 / AGENTS.md 範本）= NT$ 60K–720K；訂閱「AGENTS.md 範本庫」NT$ 300/mo × 200 用戶 ≈ NT$ 60K MRR；可 upsell Copilot 評估決策顧問案
- **競品弱點**：中文媒體對 Agent HQ 深度中文筆記近零；AGENTS.md 範本中文首發完全空白；Cursor / Claude Code / GitHub Agent HQ 共通性比較表中文資源近零；Copilot evaluation framework 中文解說 ≈ 0
- **切入建議**：11/06 上午 06:00–12:00 補聽錄播 + 寫 1,500 字中文筆記 blog → 11/06 下午推「AGENTS.md 範本首發 + 3 家對照表」+ 11/07 連載「AGENTS.md 實戰範例：單一 repo 跨 agent 治理」 + 分銷 Taiwan Dev community、Dcard soft_job、PTT Soft_Job

### 點子 3：TSMC 10 月月營收 T-4 → T-0 5 檔 YoY 情境矩陣 + 一人 SaaS inference 成本影響鏈 🔄

- **痛點來源**：TSMC 10 月月營收通常在 11/10 前後公告，T-4 → T-0 為黃金內容窗口；9 月 NT$ 5,118.6 億（YoY +54.6%、MoM −0.6%）+ 1–9 月累計 NT$ 3 兆 8,987.3 億（YoY +41.1%）為基準線；Q4 官方 guidance $52.3–54.3B → 單月 NT$ 554–576B 區間為市場預設值；10 月若 YoY +40–50% → AI 需求續強、若 YoY +30% 以下 → AI 需求轉弱首個訊號；中文技術媒體未從「對一人 SaaS inference 成本」角度切入
- **目標客群（台灣／亞洲）**：使用 Claude / OpenAI / Groq inference 的台灣 indie / SaaS 團隊（估 2,000–5,000 位）+ 關注 AI 芯片供需的技術 blogger（估 200–500 位）+ 投資 TSMC / Nvidia / AMD 的 AI 散戶（估 5,000–10,000 位）
- **技術複雜度**：2/5 — 內容型；關鍵為「月營收 YoY 5 檔情境（+60/+50/+40/+30/+20）× 對一人 SaaS inference 成本影響鏈 + Q4 guidance 單月攤分法」預設劇本；11/10 公告後即可套入實際數字 + 補充延伸
- **預估 MRR**：one-off NT$ 40K–150K per 深度文；若做「每月第 10 日 TSMC 月營收 → 一人 SaaS inference 成本影響鏈」訂閱系列 → NT$ 500/mo × 200 用戶 ≈ NT$ 100K MRR
- **競品弱點**：財經媒體從「晶片景氣」切入、技術媒體從「模型算力」切入、幾乎沒有人從「對一人 SaaS inference 單位成本」切入；5 檔情境矩陣預設劇本 + 公告後即套入實際數字的「可重複套用模板」資源近零
- **切入建議**：11/06 寫「TSMC 10 月月營收 T-4 5 檔 YoY 情境矩陣 + 對一人 SaaS inference 成本影響鏈」預設劇本 → 11/10 公告後補發「實際數字 + 情境命中分析 + TiBOOST 得主同日同題」雙題 blog → 11/12 補發「對 Claude / OpenAI / Groq inference 定價壓力推論」

### 點子 4：Anthropic S-1/A2 時窗 T-3 → T+7 Live blog 系列（roadshow 11/9 到 pricing week 11/16）🔄

- **痛點來源**：S-1/A1 Day +3 roadshow T-3，若今日（11/06）或下週一（11/09）填入價位 / 股數 / 募資規模 → 11/16 WSJ pricing week 情境高機率兌現；中文技術媒體口徑整合 + 對 Claude 定價影響鏈推論中文資源近零；大型財經媒體不會做技術拆解；小型技術 blog 不會追財務細節；Day +3 → Day +7（11/13）為「第二波 amendment + roadshow 開跑」雙重觀察窗口
- **目標客群（台灣／亞洲）**：追蹤 Anthropic IPO 的台灣技術媒體 / blogger（估 50–150 位）+ 使用 Claude Code / Claude API 評估「上市後定價風險」的中型客戶（估 200–600 家）+ 承銷團大擴軍對照 OpenAI IPO 傳聞的對照敘事讀者（估 1,000–3,000 位）
- **技術複雜度**：2/5 — 內容型，無程式碼；關鍵為 S-1 vs S-1/A1 vs（待）S-1/A2 數字 diff + Q3 2026 YoY 試算 + 「1,205 億 vs 265.6 億 vs 895.4B vs 待填價位」四組口徑差異技術拆解
- **預估 MRR**：one-off NT$ 50K–200K per 深度文（1.5–3 小時完成、獨家翻譯 + 口徑差異分析）；若做續集「roadshow T-3 → T-0 日 Live blog」系列 5 篇 → NT$ 250K–1M one-off
- **競品弱點**：台灣技術媒體口徑整合 + 對 Claude 定價影響鏈推論中文資源近零；大型財經媒體不會做技術拆解
- **切入建議**：11/06 寫「Anthropic S-1/A1 Day +3 roadshow T-3 情境矩陣 + 下週價位填入時點預測」 → 11/09 roadshow 情境日 Live blog → 11/16 WSJ 傳 pricing week Live blog → 11/19–11/20 可能上市日 Live blog

## 🧰 工具堆疊更新

- **🔄 Anthropic S-1/A1 Day +3 → Day +7 第二波 amendment 等待窗口**：Goldman Sachs / Morgan Stanley 為原 lead；新加 BMO Capital Markets / BNP Paribas / Credit Agricole CIB / Jefferies / Mizuho / MUFG / TD Securities / BTIG / Cantor / Capital One Securities / Macquarie Capital / Societe Generale 共 12 家；運算承諾更新至 $895.4 B（含 $447.5 B 須在 2030-12-31 前付清）= pricing week 情境需等「S-1/A2」填入價位 / 股數 / 募資規模；SEC EDGAR 在本 session 的網路政策無法直取、以第三方口徑為準；市場傳目標 11/19 或 11/20 上市窗口
- **🆕 GitHub Agent HQ + AGENTS.md 錄播窗口**：Universe 2025 公告的 Agent HQ + Mission Control + AGENTS.md + Copilot evaluation framework 可重現 benchmark + LLM-graded assertions；Insight 11/5 ET 直播已落地、錄播 48 小時內上線 Insight events page；2026-02-04 Claude / Codex 併入 public preview 前最後錨點
- **🔄 Smithery → Arcade.dev directory × ToolBench grading 第一週收尾**：Arcade 2026-08-05 收購 Smithery；ToolBench 索引 43,400+ MCP server + 僅少數 A-grade；對照 modelcontextprotocol.io 官方 MCP Registry（2025-09 預覽、2,000+ servers、server.json manifest）為中立替代；Day +6 進第一個完整工作週收尾
- **🔄 Claude 5.5 家族三層混搭底層**：Opus 5.5（$4/M in $20/M out、orchestrator）+ Sonnet 5.5（$2/M in $10/M out、draft / bugfix）+ Haiku 5.5（$0.10/M in $0.50/M out <100K、sub-agent）三層成本比約 40:20:1、一人 SaaS 架構底層已穩定；對 Agent SDK fork subagents 預設 on + nested（第三方口徑 depth 3 / concurrency 20）為自然搭配

## ⚡ 今日行動建議

- [ ] **GitHub Agent HQ Insight webinar Day +1 中文筆記 blog**：06:00–12:00 補聽錄播、寫 1,500 字中文筆記 + AGENTS.md 範本首發、下午推分銷（成本：4–5 小時；產出：中文筆記 blog + AGENTS.md 範本 + Twitter thread + Dcard soft_job / PTT Soft_Job 分銷）
- [ ] **TSMC 10 月月營收 T-4 → T-0 5 檔情境矩陣預設劇本**：預先寫 5 個 YoY 情境（+60/+50/+40/+30/+20）× 對一人 SaaS inference 成本影響鏈 + Q4 guidance $52.3–54.3B 單月攤分法 → 11/10 公告後補實際數字即發（成本：2 小時；產出：預設劇本 blog + 11/10 發文倒數提醒）
- [ ] **TiBOOST 11/10 決賽頒獎 T-4 參賽者技術棧猜測 + 評審關注趨勢預測**：寫「若得主使用 Postgres pgvector / Claude Agent SDK / Vercel AI SDK 7」3 種情境各自預測 + 11/10 得獎名單出來後 24 小時內發「獲獎者技術棧拆解」（成本：1.5 小時；產出：T-4 預測 blog + 11/10 即時拆解模板）
- [ ] **iPhone Duo Day 15 Week 2 Day 8 五日平均讀數爬蟲 + 完整工作週收尾 CSV**：Day 11–Day 15 連續 5 日對照窗口首個穩定讀數 + SellCell「摺疊 vs 傳統 vs iPhone 16」3 維度保值率比對（成本：2 小時；產出：Playwright scripts + Postgres schema + Day 15 工作日快照 + 5 日平均 CSV + 3 維度保值率比對圖表）
- [ ] **Smithery T+6 Day +6 第一週中立性監測報告 + 隨機抽樣 100 條目 CLI**（成本：3 小時；產出：Node CLI 隨機抽樣 100 條目 + Arcade 第一週中立性觀察報告 + Pulse MCP / mcp-get / modelcontextprotocol.io 官方 registry 覆蓋率 4 家對照）

## ⏳ 待觀察

- **Anthropic S-1/A2 填入時點**：Day +3 → Day +6（下週一 11/9 roadshow 最早合法起始日）為價位 / 股數 / 募資規模填入第二個可能時窗；若至 11/09 仍空白 → 11/16 WSJ 傳 pricing week 情境降權、roadshow 延至 11/23 或 Q1 2027 替代情境機率升高
- **GitHub Agent HQ Insight webinar 錄播上線**：Day +1 48 小時內 Insight events page 錄播上線；是否含 AGENTS.md 官方範本 + Copilot evaluation framework 可重現 benchmark 細節 + Mission Control UI 截圖
- **Smithery T+7 Day +7（11/07 週六）**：第一個完整工作週後首個週末；ToolBench grading × directory 擁有者條目中立性第一個完整監測週期收尾、第二週起點（11/09 週一）前的安靜期
- **OpenAI Agent Builder EOL T-23（11/07）**：是否補發 workflow graph export 工具（migration guide 現未承諾、社群請求屢見）；Thanksgiving 前美國窗口剩 19 天
- **iPhone Duo Day 16 Week 2 Day 9（11/07 週六）**：Day 11–Day 16 六日對照窗口首個週末；台灣曲線 vs 中港曲線首個「含週末樣本」切片
- **TSMC 10 月月營收 T-3 → T-0**：11/10 預估公告日；若延續 YoY +40–50% → AI 需求續強、若 YoY +30% 以下 → AI 需求轉弱首個訊號
- **TiBOOST 創新成長計畫 T-3 → T-0（11/10）決賽頒獎**：500 萬 NT 獎金池 + 500 位參賽者（估）AI 新創 Demo 日；得獎名單出來後是否出現「使用 Claude Agent SDK / GitHub Agent HQ」具體案例
- **立法院新會期中小微企業轉型條例 T+39（11/07 週六）**：9/29 開議第 39 日是否出現院會排審新進度；下週（11/10–11/14）為「委員會排審窗口」首個觀察週
- **數發部 100 億 AI T+34（11/07 週六）**：11 月第 1 個完整工作週收尾後是否出現新一輪 pipeline 公開；2025-05 原預告 2025-11 第二批 VC 合作名單窗口 2026 版本續行無訊號
- **Vercel AI SDK HarnessAgent GA**：自 6/25 experimental 已滿 4 個月（T+134），若 11 月 GA 將改變「TS Agent 底層 2 強」對決格局；目前官方文件「AI SDK 7 is now available」但無 HarnessAgent GA 日期
- **Claude Agent SDK 官方 subagents 文件 vs 第三方口徑矛盾澄清**：anthropics/claude-agent-sdk-typescript 官方文件「subagents cannot spawn their own subagents」vs 第三方口徑「nested subagents depth 3 / concurrency 20」矛盾；CHANGELOG 公開確認前建議以文件為準

[^tiboost]: TiBOOST 創新成長計畫為金管會與國發會共同發起的台灣 AI 新創競賽，鎖定具商業化潛力的早期團隊，提供獎金池與公開 Demo 日，兼具跨部會政策示範與早期資金接合功能；2026 年度決賽與頒獎典禮訂於 11 月 10 日舉行，獎金池為新台幣 500 萬元。

[^agents-md]: AGENTS.md 是把 AI agent 行為規範、工具權限與專案脈絡寫入 repo 根目錄的 markdown 設定檔格式，可提交至版控並被 Cursor、Claude Code、GitHub Copilot 等 agent 工具共同讀取；2026 年已逐步成為 agentic 開發跨工具的事實標準，取代各家原本獨立的 rules 檔。

[^mission-control]: Mission Control 是 GitHub Agent HQ 隨 Universe 2025 公告的統一多 agent 控制面板，可同時在 VS Code、github.com 與 Mobile 介面指派、監看、pivot 多個廠商 agent（Claude、Codex、Devin、Jules、Grok）的任務流，屬 Copilot Pro+ / Enterprise 用戶功能，為 GitHub 把多 vendor agent 收攏到單一介面的主要入口。

[^fable-5-1]: Fable 5.1 是 Anthropic 在發表 Opus 5.5 時用以標示「前代旗艦同級」比對基準的代稱，官方比對聲稱 Opus 5.5 相較此基準在高階編碼任務持平、成本降低約 40%；實際對應之公開產品線名稱並未明揭，常作為內部成本 / 效能座標使用。

[^pgvector]: pgvector 為 PostgreSQL 開源的向量搜尋擴充，新增 vector 資料型別與 ANN 索引（HNSW、IVFFlat），讓既有 Postgres 直接作為語義搜尋與 RAG embedding 儲存引擎使用；是中小型 SaaS 不另架 Pinecone / Weaviate 等專用向量 DB 的常見選擇。

## 📚 引用來源

1. [SEC EDGAR — Anthropic PBC Form S-1/A Amendment No. 1](https://www.sec.gov/Archives/edgar/data/0002130357/000162828026068676/anthropicpbc-sx1ax1.htm) — 2026-11-02
2. [Filing Insights — Anthropic's amended S-1 adds a third quarter and $895.4 billion in compute commitments](https://filinginsights.substack.com/p/anthropics-amended-s-1-adds-a-third) — 2026-11-03
3. [Leverage Shares — Anthropic IPO Tracker: Date, Valuation and S-1 Status](https://leverageshares.com/us/anthropic-ipo-tracker/) — 2026-11-06 存取
4. [Commons LLC — Anthropic IPO S-1 Filing in Plain English](https://www.commonsllc.com/insights/anthropic-ipo-s1-filing-plain-english) — 2026-10
5. [Newsquawk — Anthropic will drop its S-1 at 9am ET, mid-November IPO plan](https://www.newsquawk.com/headlines/anthropic-will-drop-its-s-1-at-9am-et-and-that-while-market-conditions-have-shifted-the-plan-for-a-mid-november-ipo-fox-reports-citing-a-source) — 2026-10
6. [Insight — What GitHub Universe Means for Agentic Development (Nov 5, 2026 webinar)](https://www.insight.com/en_US/content-and-resources/webinars/what-github-universe-means-for-agentic-development.html) — 2026-11-06 存取
7. [GitHub Blog — Introducing Agent HQ: Any agent, any way you work](https://github.blog/news-insights/company-news/welcome-home-agents/) — 2025-10
8. [Visual Studio Magazine — GitHub Introduces Agent HQ](https://visualstudiomagazine.com/Articles/2025/10/28/GitHub-Introduces-Agent-HQ-to-Orchestrate-Any-Agent-Any-Way-You-Work.aspx) — 2025-10-28
9. [SDTimes — GitHub unveils Agent HQ](https://sdtimes.com/ai/github-unveils-agent-hq-the-next-evolution-of-its-platform-that-focuses-on-agent-based-development/) — 2025
10. [Smithery — MCP Proxy and managed identity shut down on October 31](https://smithery.ai/future) — 2026-11-06 存取
11. [API Tracker — Smithery migration guide](https://apitracker.io/smithery-migration) — 2026-10-23
12. [MCP Registry FAQ — official centralized metadata repository](https://modelcontextprotocol.info/tools/registry/faq/) — 2025
13. [RuntimeWire 中文 — Arcade 收购 Smithery](https://runtimewire.com/zh/article/arcade-acquires-smithery-agent-tool-supply-chain) — 2026-08
14. [pickaxe — OpenAI Agent Builder deprecation](https://pickaxe.co/post/openai-agent-builder-deprecation) — 2026-10
15. [opentweet — How to migrate from OpenAI Agent Builder](https://opentweet.io/how-to/migrate-from-openai-agent-builder) — 2026-10-27
16. [agenticwire — Migrate from OpenAI Agent Builder: SDK vs Workspace (Nov 30 Deadline)](https://www.agenticwire.news/article/openai-agent-builder-migration-sdk-workspace) — 2026-10
17. [TSMC IR — 2026 Monthly Revenue](https://investor.tsmc.com/english/monthly-revenue/2026) — 2026-11-06 存取
18. [SEC Form 6-K — TSMC Revenue 2026-10-08](https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000680/tsm-revenue20261008.htm) — 2026-10-08
19. [Xenospectrum — TSMC Q3 2026 Gross Margin Capex](https://xenospectrum.com/en/tsmc-q3-2026-gross-margin-capex/) — 2026
20. [cnyes — TiBOOST 創新成長計畫決賽頒獎典禮](https://news.cnyes.com/news/id/6320136) — 2026
21. [bnext — 新創募資專題](https://www.bnext.com.tw/categories/funding) — 2026-11-06 存取
22. [digitimes — iPhone Duo 開賣 交期排到 2027](https://www.digitimes.com.tw/tech/dt/n/shwnws.asp?id=772472) — 2026-10
23. [CNA — iPhone Duo 中國市場熱銷 發貨排至明年](https://www.cna.com.tw/news/acn/202610170102.aspx) — 2026-10
24. [udn money — iPhone Duo 下周五開賣 台灣大、遠傳預購起跑](https://money.udn.com/money/story/5607/9819868) — 2026-10
25. [unwire — iPhone Duo 轉售加價回落](https://unwire.hk/2026/10/20/iphone-duo-scalpers-resale-price-drop/mobile-phone/) — 2026-10
26. [technews — iPhone Duo 高盛稱親民 74,900 元起](https://finance.technews.tw/2026/09/10/iphone-duo-affordable/) — 2026-09-10
27. [technews — 摺疊機保值率 SellCell 研究](https://technews.tw/2026/06/24/iphone-ultra-value/) — 2026-06
28. [中央社 — 政院提修法投入千億助中小微企業升級](https://cna.com.tw/news/aipl/202610080165.aspx) — 2026-10-08
29. [udn — 立院新會期 朝野優先法案 PK](https://udn.com/news/story/6656/9778118) — 2026
30. [1111 — 卓揆：中小微企升級條例草案進行中](https://www.1111.com.tw/news/167737/amp/) — 2026
31. [中央社 — 數發部百億 AI 投資方案 開放主要營運在台境外公司可納投](https://cna.com.tw/news/afe/202610040029.aspx) — 2026-10-04
32. [uanalyze — 數發部祭百億資金催生 AI 新創已核定 6 案](https://uanalyze.com.tw/articles/1078148404) — 2026
33. [TechNews — 百億 AI 基金首年僅投 7,500 萬](https://technews.tw/?p=1520580) — 2026
34. [TechNews — Anthropic Upgrades Claude with New Opus 5.5 Model](https://technews.tw/2026/09/23/anthropic-upgrades-claude-with-new-opus-5-5-model/) — 2026-09-23
35. [AlternativeTo — OpenAI launches GPT-5.5 with advanced coding and agentic capabilities](https://alternativeto.net/news/2026/4/openai-launches-gpt-5-5-with-advanced-coding-and-agentic-capabilities/) — 2026-04
36. [DevelopersDigest — Claude Agent SDK in Late 2026](https://www.developersdigest.tech/blog/claude-agent-sdk-whats-new-2026) — 2026-10-17
37. [DevelopersDigest — What's New in Vercel AI SDK 7 (October 2026)](https://www.developersdigest.tech/blog/vercel-ai-sdk-whats-new-2026) — 2026-10-17
