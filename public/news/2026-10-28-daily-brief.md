---
title: 每日創業情報 — 2026-10-28
date: 2026-10-28
tags: 創業情報, AI 產業, SaaS, 台灣
summary: Anthropic S-1 10/26 落實 T+2（ticker ANT、1H26 營收 163 億美元、兩客戶占 25%）+ GitHub Universe 2026 Day 1 keynote 開幕（台北 10/29 00:00）+ Smithery / Evals 10/31 T-3 雙事件最後倒數 + iPhone Duo Day 6 Taiwan 官方禁現場排隊規則確認。
keywords: Anthropic S-1 EDGAR filed 2026-10-26 ticker ANT Nasdaq 16.3B revenue 80.7B loss 120.5B compute commitment 2029, GitHub Universe 2026 keynote 10/28 Fort Mason Copilot evaluation framework agent delegation MCP security, Smithery MCP Proxy shutdown T-3 10/31 Arcade.dev vendor official URL migration, OpenAI Evals read-only T-3 10/31 reusable prompts Promptfoo Langfuse v4 migration cookbook, iPhone Duo Day 6 Taiwan Apple walk-in prohibited online pickup only 全球直營店現貨規則, Anthropic customer concentration 25% two customers 518B compute non-cancellable 80 percent, 數發部 100 億 AI 新創 10 月 2.55 億 境外公司放寬納投 創業天使 100 億翻倍, Claude Agent SDK TypeScript Python nested subagents SessionStore skills, Cursor Composer 2.5 agent Background Agent 定價五層 Plus Premium Super Ultra</keywords>
---

# 每日創業情報 — 2026-10-28

## 🎯 今日 TL;DR

- **🆕 Anthropic S-1 10/26 EDGAR[^edgar] 落實 T+2 Day 3（10/28）** — 昨日 brief 誤判「72 小時窗 Day 3 臨界日仍無 S-1」，實際上 Anthropic 已於 2026-10-26（美東）正式向 SEC 遞交公開 S-1 註冊書並由 Anthropic 官方 X 帳號 13:05 ET 公告。關鍵數字：ticker **ANT** 擬掛 **Nasdaq**；1H26 營收 **163 億美元**（Q1 47.3 億、Q2 115 億）；1H26 淨損 **807 億美元**（其中 724 億為可轉換債 / SAFE[^safe] 公允價值變動 non-cash）；運算承諾承諾累計 **1,205 億美元**（截至 2029 年）；兩名客戶占營收 **25%**（集中度風險）；價位 / 股數 / 募資規模 **仍留空白**。11/9 週 roadshow 情境進入「技術可達 15 日倒推」區間、感恩節 11/26 前上市目標從 60/40 偏延後回到 55/45 偏準時 — 下週走勢進入「S-1 條款補完 + roadshow 定期」倒數
- **🆕 GitHub Universe 2026 Day 1 開幕日（10/28 美東 PDT 09:00 keynote / 台北 10/29 00:00）** — 主題「All together now, in the agentic era」、Fort Mason[^fortmason] San Francisco；官方議程重點：Copilot evaluation framework（可重現 benchmark + LLM-graded assertions）、「Stop prompting, start delegating」、MCP security、Agent Merge；主會場 Festival Pavilion；10/29 14:00 PDT closing keynote；Speakers：AMD / Figma / NVIDIA / Coinbase / Anthropic / OpenAI；對一人 SaaS 開發者本週重大事件：keynote（台北 10/29 00:00）即時 Live blog + 10/29 Day 2 session 收斂 + 10/30「Copilot delegation 落地 Taiwan FAQ」為本週重磅內容
- **🔄 Smithery MCP Proxy 10/31 關閉 T-3 進入最後 72 小時** — 10/27 Smithery 官方 `/future` 頁證實：run.tools / server.smithery.ai server URL + Smithery API / Connect / Toolbox + 帳號與 API keys + CLI 與 SDK（marked deprecated）全部 10/31 下線 + 自 8/5 起已付費退款；smithery.ai directory 保留（Arcade.dev[^arcadedev] 運營）、認證過的 server 顯示 vendor 官方 MCP URL；第三方 apitracker.io 盤點目前僅 Linear 的 2 條 proxy aliases 有確認替換，其他 proxy entries 多數尚未對映；對自己管線上管理 MCP connection 的團隊：10/31 前須完成 vendor 官方 URL migration + CLI/SDK 替換 — 72 小時 crunch 進入最後決戰
- **🔄 OpenAI Evals read-only T-3 進入最後 72 小時** — 官方 developers.openai.com/api/docs/deprecations 口徑確認：**10/31 00:00 UTC existing evals 進入 read-only、11/30 下線**；reusable prompts 同下線（無 API 可匯出、須手動從 dashboard 複製）；OpenAI 官方 deprecations 指向 Promptfoo[^promptfoo] 為遷移目標、須手動重建 prompts / provider config / test cases / assertions；Langfuse[^langfuse] v4 自稱 up to 165× faster + 建議 10/31 前跑 export 腳本（需 API）；Langfuse 官方指出 Promptfoo red-teaming 無對應需保留 — 10/28 Day 10「reusable prompts 手動複製 Playwright CLI 公開 + Promptfoo vs Langfuse v4 選型決策樹 blog」72 小時 crunch 工作日
- **🔄 iPhone Duo Day 6 T+5（10/28）新規則確認** — Day 6 新訊號：Apple 公布全球直營店現貨規則，Taiwan **不在 walk-in 名單**；台灣首波採「線上訂購 + 門市取貨」、現場無預購直接禁排隊（優於昨日「門市內部備忘勸退」訊號強度）；其他 walk-in 禁區：Hong Kong / Japan / South Korea 等多個市場；Day 5 10/27 Weekend 後第 1 個完整工作日續行二手溢價續跌、Apple 全線備貨 2027-01-25 延後、台灣大 myfone 預購 2 分鐘額滿、日本預購流量轉台灣水貨代購可能性窗口開啟
- **🔄 數發部 100 億 AI 新創基金續行** — 10/4 中央社續行官方口徑：8 月底累計 10 家 2.55 億 NT + 民間投資 5.7 億 NT + 單案上限 2 億 NT + 10 年期（7 投 3 處）+ 10 月修正作業要點放寬「主要營運在台的境外公司」可納投 + 2027 預算 464 億 NT；已公開受投包括台灣智慧駕駛、賦語科技、鑫蘊林科等；對一人 SaaS 開發者：法人門檻存在但「境外公司放寬」為 10 月新訊號 — 若 TW 公司但主要營運海外者本週可重評估申請
- **🔄 Haiku 5.5 Week 2 Day 4 T+21 production ramp 續延燒** — Over-refusal fix 完成訊號待追蹤、AutomationBench-AA 35% nested subagent benchmark 續 skip；可切「Fable 5.1 cache 降 75% + Haiku 5.5 effort」雙模型配置、effort levels low 分類 / high 摘要 / low 轉譯 / low 標準化 / medium nested
- **🔄 Claude Agent SDK TypeScript 0.3.302 + Python 0.2.168 T+12 續延燒** — nested subagents with caps + SessionStore + skills + plugins + structured outputs + permission defaults；版本綁 Claude Code CLI；本週對照軸 Vercel AI SDK 7（WorkflowAgent + HarnessAgent experimental 標籤）
- **⚠️ 昨日 brief 日期誤判修正** — 10/27 brief 於 TL;DR / 昨日追蹤 / 「📰 台灣特定產業動向」多處寫入「10/27 美東上午 72 小時窗臨界日仍無 S-1」為 bear case；但 Anthropic 實際上於 10/26 美東已完成 S-1 落實。本篇以 10/26 落實為基礎重建情境分析，讀者如引用 10/27 brief 之 Anthropic 情境請以本篇為準

## 🔄 昨日追蹤

- **🔄 Anthropic IPO EDGAR S-1 72 小時窗 Day 3 → 事件結果：10/26 美東已完成落實**（昨日 brief 錯誤判定「仍無」）→ ticker ANT、1H26 營收 163 億美元、淨損 807 億美元（724 億 non-cash）、運算承諾 1,205 億美元、兩客戶占 25%、Nasdaq ⚠️ 進度：Day 3 事件結果 = 已落實
- **🔄 iPhone Duo Day 5 T+4 → Day 6 T+5** → Day 6 新規則確認：Apple 公布全球直營店現貨規則，台灣不在 walk-in 名單；原「門市內部備忘勸退」訊號升為「官方規則」✅ 進度：Day 6 新訊號強度升級
- **🔄 Evals read-only T-4 → T-3 進入最後 72 小時** → 10/28 Day 10「reusable prompts 手動複製 Playwright CLI 公開 + Promptfoo vs Langfuse v4 選型決策樹 blog」crunch 工作日 ⚠️ 進度：72 小時倒數
- **🔄 Smithery MCP Proxy 10/31 T-4 → T-3 進入最後 72 小時** → 10/27 Smithery `/future` 頁證實 10/31 下線範圍；apitracker.io 盤點僅 Linear 2 條 proxy aliases 確認替換 ⚠️ 進度：72 小時倒數
- **🔄 Agent Builder EOL T-34 → T-33** → 本週剩 3 日工作時間至 10/31 進入 Week 3 ⚠️ 風險：Agent Builder 11/30 失去 UI 編輯權限
- **🆕 GitHub Universe 2026 T-1 → Day 1 開幕日** → 10/28 09:00 PDT keynote（台北 10/29 00:00）；本週重大事件
- **🔄 Haiku 5.5 T+20 Week 2 Day 3 → T+21 Week 2 Day 4** → Over-refusal fix 完成訊號待追蹤、擴至第 9 條 production subagent 或切 Fable 5.1 cache + Haiku 5.5 effort 雙模型配置
- **🔄 Claude Agent SDK 0.3.302 T+11 → T+12** → nested subagents / SessionStore / skills 續行；10/27 Day 9「vs Vercel AI SDK 7」blog 已公開；10/28 Day 10 落地 Taiwan Facebook Developers Group push
- **🔄 Cursor X Subscription 10/12 bundle T+15 → T+16** → 多來源確認續行；10/28 Notion dashboard 嵌入 Grok vs Cursor 共用配額影響 + 第三方模型 API 原價計費 ROI 試算

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🆕 iPhone Duo Day 6 T+5（10/28）全球直營店現貨規則確認 — Apple 公布 walk-in 開放市場名單，Taiwan 不在其中 + 台灣首波採「線上訂購 + 門市取貨」+ 現場無預購者直接禁排隊規則確認（優於昨日「門市內部備忘」訊號強度）+ 其他禁 walk-in 市場：Hong Kong / Japan / South Korea 等 + Day 5 10/27 Weekend 後第 1 個完整工作日續行二手溢價續跌（10/20 unwire 中國加價 2,000–3,000 元為中位、6,000 元加價已失價）+ Apple 全線備貨 2027-01-25 延後續行 + 台灣大 myfone 預購 2 分鐘額滿續行 + 日本 Apple Store 不接受現場購買 + 日本預購流量轉台灣水貨代購可能性窗口開啟 + Day 6 進入「首購族 2 週後體驗」第 2 波討論週** | [mrmad.com.tw — 台灣 iPhone Duo 首賣禁現場排隊！蘋果公布全球直營店現貨規則](https://mrmad.com.tw/iphone-duo-no-walk-in-lines)、[mrmad.com.tw — iPhone Duo 上市日買不到現貨：蘋果要求員工勸退未預購別排隊](https://mrmad.com.tw/?p=192680)、[台灣大 myfone 預購](https://www.cna.com.tw/business/chinese/447172)、[unwire — iPhone Duo 轉售加價回落](https://unwire.hk/2026/10/20/iphone-duo-scalpers-resale-price-drop/mobile-phone/) | Day 6 關鍵訊號：「禁 walk-in 現場排隊」官方規則確認 = Apple 將 Taiwan 定位為「線上訂購優先」市場；相較於昨日「門市內部備忘勸退」為間接訊號，本日為官方規則；per-project「Day 6 禁 walk-in 現場排隊規則 FAQ × 線上訂購 + 門市取貨操作教學 × 二手溢價續跌速度 vs 2027-01-25 延後矛盾訊號 × 日本預購流量轉台灣水貨代購可能性 × eBay 2TB 夜曜黑 $4,999 USD vs Apple $3,199 USD 美國溢價 $1,800 投資回報試算」5 合一 Day 6 現場 pack NT$ 100K–220K | 機會：**「10/28 Day 6 禁 walk-in 規則 FAQ × 線上訂購 + 門市取貨操作教學 × 首購族體驗第 2 日分享 × 日本預購流量轉台灣水貨代購可能性 × 10/29 Day 7 第 1 週體驗彙整預告」5 合一 Day 6 現場 pack NT$ 120K–250K**；甜蜜點 = 10/28 10:00「Day 6 禁 walk-in 規則確認」push + 14:00「線上訂購 + 門市取貨操作教學」push + 20:00「Day 7 第 1 週體驗彙整預告」push；威脅：「禁 walk-in」規則為蘋果全球直營店口徑、非 Apple Taiwan 本地公告，須以 Apple 官網 Terms 比對；日本預購延至 2027-01-25 影響轉售供給曲線 |
| **🆕 Anthropic S-1 10/26 落實 T+2 Day 3（10/28）— ticker ANT 擬掛 Nasdaq + 1H26 營收 163 億美元（Q1 47.3 億 + Q2 115 億 QoQ 143% 成長）+ 1H26 淨損 807 億美元（724 億為可轉換債 / SAFE 公允價值變動 non-cash）+ 運算承諾累計 1,205 億美元至 2029 年 + 兩名客戶占營收 25% 集中度風險 + 價位 / 股數 / 募資規模仍留空白 + Bloomberg 11/9 週 roadshow 情境進入「技術可達 15 日倒推」區間 + 感恩節 11/26 前上市目標從 60/40 偏延後回到 55/45 偏準時 + 本月 9/1 Fable 5.1 cache reads 降 75% 可視為「IPO 前主動降價」軸線續行** | [CNBC — Anthropic IPO live updates: AI lab's S-1 filing](https://www.cnbc.com/2026/10/26/anthropic-ipo-live-updates-ai-s-1-filing.html)、[Anthropic on X — S-1 公告](https://x.com/AnthropicAI/status/2114705042817110293)、[SEC EDGAR — Anthropic, PBC Form S-1 FY2026](https://www.sec.gov/Archives/edgar/data/0002130357/000162828026067168/anthropicpbc-sx1.htm)、[aiweekly — Anthropic S-1 Shows $16.3B H1 Revenue, 25% From Two Customers](https://aiweekly.co/alerts/anthropic-s-1-shows-163b-h1-revenue-25-from-two-customers-and-807b-non-cash) | 對台灣一人 SaaS 開發者 3 階影響：Claude Astra / Haiku 定價壓力從「IPO 延後論述」轉為「IPO 準時論述」—— 下週可能進入新一波定價調整 + 「兩客戶占 25%」為集中度風險，Anthropic 下週可能加碼 developer / 一人 SaaS 推廣以稀釋集中度 + 「運算承諾 1,205 億至 2029 年」為長期算力承諾 + 9/1 Fable 5.1 cache 降 75% 可視為 S-1 準備動作已部分完成；per-project「Anthropic S-1 落實 Day 3 Live × 兩客戶占 25% 集中度風險 FAQ × 運算承諾 1,205 億對台廠機會 × Fable 5.1 cache 降 75% IPO 前主動降價論述 × 11/9 roadshow 日程追蹤 × ticker ANT Nasdaq 上市 FAQ」6 合一 Live blog push NT$ 100K–280K per article | 機會：**「10/28 Anthropic S-1 落實 Day 3 Live × 兩客戶占 25% 集中度風險 FAQ × 1,205 億運算承諾對台廠影響鏈 × ticker ANT 上市後個人投資策略 × 11/9 roadshow 日程追蹤 × 1H26 QoQ 143% 成長 FAQ」6 合一 Live blog push NT$ 100K–280K per article**；甜蜜點 = 10/28 10:00「10/26 S-1 落實 Day 3 事件補正 + 關鍵數字 FAQ」push + 14:00「兩客戶 25% 集中度風險對 Claude 定價影響」push + 20:00「11/9 roadshow 日程追蹤」push；威脅：10/27 brief 誤判「72 小時窗 Day 3 仍無」須在 FAQ 揭示修正；1H26 淨損 807 億含 724 億 non-cash 損失為會計性虧損，非營運虧損，但媒體報導多未明確區分 — 顧問服務需在 FAQ 揭示「會計虧損 vs 營運虧損」區分 |
| **🔄 數發部 100 億 AI 新創基金 10 月修正作業要點放寬境外公司納投 T+24（10/28）— 2026-10-04 中央社續行官方口徑：8 月底累計 10 家 2.55 億 NT + 民間投資 5.7 億 NT + 第 1 年投資速度偏慢「不到 0.1%」+ 單案最高額 NT$2 億 + 政策定位「10 年內 50 家 AI 獨角獸」+ 2026 預算 311 億 / 2027 預估 464 億 / 4 年合計 1,366 億 NT + 10 月修正作業要點「放寬可投資於台灣境內執行主要營業活動的境外公司」+ 創業天使方案 50 億翻倍至 100 億 + 國發會 8 月專案報告「新創家數破萬家 + 年獲投金額 1,000 億 NT + 7 月累計已投 308 家」+ StartupBlink 2026 台灣由 25 升 20 名首度進入前 20 強 + 已公開受投：台灣智慧駕駛、賦語科技、富宇翔電通、阿爾發金融科技、用益網路科技、墨宇、股感媒體科技、御諾資訊、鑫蘊林科等** | [中央社 — 數發部百億 AI 投資方案 開放主要營運在台境外公司可納投](https://cna.com.tw/news/afe/202610040029.aspx)、[uanalyze — 數發部祭百億資金催生 AI 新創 100 片 GPU 算力池](https://uanalyze.com.tw/articles/1078148404)、[TechNews — 百億 AI 基金首年僅投 7,500 萬 數發部公布 5 家獲投新創](https://technews.tw/?p=1520580)、[Business Next — 數發部 AI 新創 100 億計畫](https://www.bnext.com.tw/article/90239/moda-ai-startup-100billion-plan) | 境外公司放寬納投條件為 10 月新訊號 — 若 TW 公司但主要營運海外（例如：矽谷 / 新加坡 / 日本註冊，TW 主要營運）本週可重評估申請；per-project「數發部 100 億 AI 政策容量未滿 FAQ × 境外公司放寬納投條件 FAQ × 創業天使方案翻倍 100 億 FAQ × 10 案 2.55 億 平均 2,550 萬 vs 上限 2 億 8 倍成長空間 × 2027 預算 464 億政策追蹤 × StartupBlink 2026 台灣 20 名落地訊號」6 合一 vertical consulting NT$ 100K–380K per client | 機會：**「數發部 100 億 AI 境外公司放寬納投條件操作教學 × 創業天使翻倍 100 億 vs 原 50 億 × 10 案 2.55 億 平均 2,550 萬 vs 上限 2 億 FAQ × 已公開受投 9 家案例剖析 × 2027 預算 464 億政策追蹤 × StartupBlink 2026 台灣 20 名落地訊號」6 合一 vertical consulting NT$ 100K–380K per client**；甜蜜點 = 10/28 下午寫「數發部 100 億 AI 境外公司放寬納投條件 — 台灣一人 SaaS 的 3 個新入口」blog + 10/29 Notion dashboard 嵌入已公開 9 家受投企業 ROI 試算 + 境外公司放寬納投申請流程；威脅：第 1 年投資速度偏慢意味審核門檻可能高於預期；兩份基金（AI 新創方案 100 億 + 創業天使方案 100 億）之差異無統一政策追蹤 dashboard |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🆕 GitHub Universe 2026 Day 1 keynote 新發布追蹤 — 10/28 09:00 PDT keynote（台北 10/29 00:00）+ Fort Mason San Francisco + 主題「All together now, in the agentic era」+ Festival Pavilion 主會場 + 10/29 14:00 PDT closing keynote + 預告 session：Copilot evaluation framework（可重現 benchmark + LLM-graded assertions）+「Stop prompting, start delegating」+ MCP security + Agent Merge + Speakers：AMD / Figma / NVIDIA / Coinbase / Anthropic / OpenAI** | GitHub Copilot / agent framework / 10 月發布追蹤 | 關注 Copilot delegation / agentic development 的 developer 須追蹤 keynote 新發布 | GitHub Copilot Pro $10/mo + Business $19/mo + Enterprise $39/mo | vs Claude Code CLI（Anthropic 自家）/ Cursor（Composer 2.5）/ Windsurf；差異在「GitHub 原生整合 + 跨 repo custom agents（Visual Studio 8 月已 ship）+ Fort Mason 兩天 session」 | 🟢 一人 SaaS 開發者本週重大事件：**10/29 00:00（台北）keynote 即時 Live blog + 10/30 Day 2 session 收斂 + 10/31「Copilot delegation 落地 Taiwan FAQ」blog**；🟡 現用 Copilot Pro：keynote 後 24 小時內確認是否有新功能影響當前 workflow；🔴 深度依賴 Cursor：keynote 後評估「跨 repo custom agents」是否值得切換 |
| **🔄 Smithery MCP Proxy 10/31 關閉 T-3 進入最後 72 小時 — Arcade.dev 2026-08-05 收購 Smithery 落實 + 10/31 停止：run.tools / server.smithery.ai server URL + Smithery API / Connect / Toolbox + 帳號與 API keys + CLI 與 SDK（全部 marked deprecated）+ 自 8/5 起已付費用戶全額退款；保留：smithery.ai directory（Arcade.dev）+ 認證過的 server 顯示 vendor 官方 MCP URL；apitracker.io 第三方盤點目前僅 Linear 的 2 條 proxy aliases 有確認替換、其他 proxy entries 多數尚未對映；自己管線上管理 MCP connection 的團隊須在 10/31 前完成 vendor 官方 URL migration + CLI/SDK 替換** | MCP infrastructure / 10/31 EOL 遷移 crunch 最後 72 小時 | 現用 Smithery server URL / API / CLI 的團隊須 10/31 前完成遷移 | 使用者端免費（Smithery CLI）；Pro / Enterprise 曾為 Smithery 託管收費、全額退款 | vs Arcade.dev（新 parent）/ 直接 vendor 官方 MCP URL / Pulse MCP / mcp-get；差異在「Smithery 從單一 MCP connection manager 退為公開 non-proxied registry」 | 🟢 現用 Smithery 的台灣團隊：**10/28–10/30 完成 vendor 官方 URL migration + CLI/SDK 替換 + 10/31 Live blog「關閉首小時觀察」**；🟡 新建 MCP server：直接走 vendor 官方 URL 省中介風險；🔴 Arcade.dev 中立性觀察：Arcade 同時運營 ToolBench grading，Smithery registry 中立性需社群長期觀察 |
| **🔄 OpenAI Evals read-only T-3 進入最後 72 小時 — developers.openai.com/api/docs/deprecations 官方口徑：10/31 00:00 UTC existing evals 進入 read-only、11/30 Evals dashboard / API 下線 + reusable prompts 同下線（無 API 可匯出、須手動從 dashboard 複製）+ Agent Builder EOL T-33 + 官方指向 Promptfoo 為遷移目標、須手動重建 prompts / provider config / test cases / assertions + Langfuse v4 自稱 up to 165× faster + 建議 10/31 前跑 export 腳本（需 API）+ Langfuse 官方指出 Promptfoo red-teaming Langfuse 無對應需保留 + 第三方 kingy.ai / qaskills.sh 分析指出 OpenAI cookbook 要求 eval 已完整 run 過才能匯出 runnable config** | AI evals / 11/30 EOL 遷移 crunch 最後 72 小時 | 現用 Evals / reusable prompts / Agent Builder 的團隊須 10/31 前完成 dataset 匯出 + reusable prompts 手動複製、11/30 前完成 code / workflow 遷移 | Promptfoo 開源免費；Langfuse 社群版免費 / Pro $59/mo + / Enterprise custom | vs Agents SDK（Python/TypeScript）/ ChatGPT Workspace Agents；差異在「Promptfoo YAML CLI 本地測試 vs Langfuse v4 165× faster dashboard + 跑 production logs」 | 🟢 現用 Evals 的台灣 SI：**10/28 Day 10「reusable prompts 手動複製 Playwright CLI 公開 + Promptfoo vs Langfuse v4 選型決策樹 blog」crunch 工作日**；🟡 reusable prompts 用戶：72 小時內手動從 dashboard 複製；🔴 red-teaming 需求：Langfuse v4 無對應需保留 Promptfoo 混搭遷移 |
| **🔄 Claude Agent SDK TypeScript 0.3.302 + Python 0.2.168 T+12（2026-10-16 ship）— 新功能：nested subagents with caps（避免無限遞迴）+ SessionStore（跨 session 儲存狀態）+ skills（可組合技能）+ plugins + structured outputs + permission defaults + 版本綁定 Claude Code CLI；10/27 Day 9「vs Vercel AI SDK 7 HarnessAgent」3,500 字對照 blog 已公開** | TypeScript / Python Agent 框架 / 一人 SaaS 底層 / nested subagent 架構 | 需 nested subagents 架構 + 跨 session 狀態 + 可組合 skills + 結構化輸出 + 權限邊界細緻的 agent | SDK 開源免費；Claude API 計費另計；Claude Code CLI 綁同版號 | vs Vercel AI SDK 7（WorkflowAgent + HarnessAgent experimental 標籤：Claude Code / Codex / Pi / Deep Agents / OpenCode harness）/ OpenAI Agents SDK（Python/TS，Agent Builder 11/30 遷移目標）；差異在「nested subagents with caps + SessionStore + skills + plugins」4 件齊發 vs HarnessAgent 跨框架 adapter | 🟢 使用 Claude Code 的一人 SaaS：**10/28 Day 10 落地 Taiwan Facebook Developers Group push + 評估「SessionStore + skills」雙功能實戰**；🟡 現用 Vercel AI SDK 7：試裝 HarnessAgent 評估 production readiness；🔴 深度依賴 LangGraph：Claude Agent SDK 0.3.302 + Vercel AI SDK 7 HarnessAgent 已形成「TS Agent 底層 2 強」競爭、2–4 週內評估遷移成本 |
| **🔄 Cursor 2026 五層定價續行 T+16 — Free / Plus $8 / Premium $30 / Super $100 / Ultra $200 + Pro $20 關閉新註冊 legacy only + Composer 2.5（5 月發布）為當前預設模型 + Background Agent + JetBrains 外掛 + iOS / Android apps + 無頭 CLI + Grok 與 Cursor 共用週 usage 配額（用一個會吃掉另一個）+ 第三方模型（Claude / GPT）從第一次請求起額外計 API 原價** | AI IDE / 開發者 subscription 選型 / X Grok Cursor 綁定 | 需 Claude Code / GPT 深度用戶：Premium $30 以上 + 預繳 API credit；需低門檻入門：Plus $8；需超多用量：Super $100 / Ultra $200 | Plus $8 / Premium $30 / Super $100 / Ultra $200 / Teams $30+ / Enterprise custom（Pro $20 關閉新註冊 legacy only） | vs Claude Code CLI（Anthropic 自家）/ Codex Cloud / Windsurf / Zed；差異在「6 層訂閱結構 + X Grok Cursor 綁定 + 共用週 usage 配額 + 第三方模型從第一次請求起額外計 API 原價」 | 🟢 現用 Pro $20 訂戶：**legacy 續行、不急於切換；本週可平行試裝 Plus $8 以評估 Grok 共用配額影響**；🟡 新 Cursor 用戶：Plus $8 低門檻入門 vs Premium $30（可用 Claude / GPT）選擇；🔴 深度 Claude Code 用戶：Super $100 不划算、Premium $30 + API credit 預繳策略更佳 |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：Anthropic S-1 落實 Day 3 Live blog + 兩客戶 25% 集中度風險 FAQ + 1,205 億運算承諾對台廠影響鏈 🆕

- **痛點來源**：Anthropic S-1 於 2026-10-26 EDGAR 正式落實，關鍵數字披露：ticker ANT 擬掛 Nasdaq / 1H26 營收 163 億美元（Q1 47.3 億 + Q2 115 億 QoQ 143% 成長）/ 1H26 淨損 807 億美元（724 億為 non-cash 公允價值變動）/ 運算承諾累計 1,205 億美元至 2029 年 / 兩名客戶占營收 25% 集中度風險 / 價位 / 股數 / 募資規模仍留空白；台灣中文媒體 Anthropic S-1 落實追蹤近乎零、多數偏股市投資口徑、缺一人 SaaS 開發者視角；本月 9/1 Claude Fable 5.1 cache 降 75% 可視為 S-1 準備動作已部分完成的連續敘事
- **目標客群**：台灣 AI 新創開發者（估 5,000 家）+ 關注 Claude API 定價變化的一人 SaaS（估 2,000 家）+ Claude Code / Claude Agent SDK 用戶（估 2,000 家）+ 蘋概 / AI 類股投資人（估 10,000 人）+ 跨境投資 SaaS 用戶（估 3,000 家）
- **技術複雜度**：2/5 — service business + 文件整理；Node.js + EDGAR / SEC 公開 API scraping + Bloomberg / Reuters 追蹤 + Notion dashboard + Twitter / Threads 自動 push + Google Sheets 嵌入 2T valuation 比值 + Fable 5.1 cache 降 75% ROI 試算
- **預估 MRR**：one-off NT$ 100K–280K per article × 2–4 articles / week = NT$ 200K–1.1M；若做訂閱式「Anthropic IPO + Claude API 定價追蹤 dashboard」→ NT$ 1,000/mo × 300 用戶 = NT$ 300K MRR
- **競品弱點**：台灣中文媒體 Anthropic S-1 落實追蹤近乎零；多數財經媒體偏向 US 市場、缺台灣一人 SaaS 影響鏈分析；多數分析師只做 valuation 比值、缺「兩客戶 25% 集中度 → developer 稀釋策略」論述；Fable 5.1 cache 降 75% 與 S-1 準備動作連續敘事無人整理；1H26 淨損 807 億含 724 億 non-cash 之「會計虧損 vs 營運虧損」區分媒體報導多未明確
- **切入建議**：10/28 10:00「10/26 S-1 落實 Day 3 事件補正 + 關鍵數字 FAQ」push → 14:00「兩客戶 25% 集中度風險對 Claude 定價影響 — 下週可能加碼 developer 推廣」push → 20:00「11/9 roadshow 日程追蹤」push → 10/29 Day 2 blog：「1,205 億運算承諾對台廠影響鏈」（TSMC / 鴻海 / 廣達 / 緯創 / 緯穎接棒評估）→ 11/9 roadshow 日 Live blog → 11/26 感恩節前上市最終觀察日 Live blog；分銷 Twitter / Threads / LinkedIn / Facebook Taiwan Developers Group / Dcard 投資版 / PTT Stock 版

### 點子 2：GitHub Universe 2026 Day 1 keynote 即時追蹤 + Copilot delegation 落地 Taiwan FAQ 🆕

- **痛點來源**：GitHub Universe 2026 Day 1 開幕日 10/28 09:00 PDT keynote（台北 10/29 00:00）、Fort Mason San Francisco、主題「All together now, in the agentic era」；預告 session：Copilot evaluation framework（可重現 benchmark + LLM-graded assertions）+「Stop prompting, start delegating」+ MCP security + Agent Merge；Speakers：AMD / Figma / NVIDIA / Coinbase / Anthropic / OpenAI；台灣中文媒體 GitHub Universe 2026 keynote 即時追蹤近乎零；多數 developer 不清楚「Copilot delegation」vs 既有「Copilot Chat」差異
- **目標客群**：台灣 Copilot Pro 現用戶（估 20,000+）+ Copilot Business 企業客戶 IT（估 500 家）+ 考慮從 Cursor / Claude Code 轉入 Copilot 的 developer（估 3,000 家）+ 跨 repo custom agents 需求（Visual Studio 8 月已 ship）+ 一人 SaaS 開發者（估 2,000 家）
- **技術複雜度**：2/5 — service business + 文件整理 + YouTube 即時直播；Node.js + GitHub Blog / Universe 官方 blog scraping + Twitter / HN 追蹤 + Notion dashboard + Twitter 自動 push + Facebook Taiwan Developers Group / Facebook GitHub Taiwan push
- **預估 MRR**：one-off NT$ 80K–220K per article × 2–4 articles / week = NT$ 160K–880K；若做訂閱式「GitHub Copilot 2026 新功能追蹤 + 落地台灣 FAQ dashboard」→ NT$ 800/mo × 200 用戶 = NT$ 160K MRR
- **競品弱點**：台灣中文媒體 GitHub Universe keynote 即時追蹤近乎零；多數技術 blog 翻譯官方 blog、缺台灣在地落地 FAQ；「Copilot delegation」vs 既有「Copilot Chat」差異無中文版比較
- **切入建議**：10/29 00:00（台北）keynote 即時 Live blog push → 02:00 keynote 結束後第 1 波彙整 push → 10/29 10:00「Copilot evaluation framework 落地 Taiwan FAQ」blog → 14:00「Stop prompting, start delegating 落地 Taiwan 操作教學」blog → 20:00「MCP security 落地 Taiwan FAQ」blog → 10/30 Day 2 session 收斂 blog → 10/31「Copilot delegation vs Cursor Composer 2.5 vs Claude Code」3,500 字對照 blog；分銷 Twitter / HN / Reddit r/github / Facebook Taiwan Developers Group / Facebook GitHub Taiwan

### 點子 3：Smithery → vendor 官方 MCP URL 遷移 72 小時 crunch 顧問案 🔄

- **痛點來源**：Smithery MCP Proxy 10/31 關閉 T-3 進入最後 72 小時；run.tools / server.smithery.ai server URL + Smithery API / Connect / Toolbox + 帳號與 API keys + CLI 與 SDK 全部 10/31 下線；apitracker.io 第三方盤點目前僅 Linear 2 條 proxy aliases 確認替換、其他 proxy entries 多數尚未對映；台灣 Claude Code / Claude Agent SDK / Codex / Cursor 用戶（估 3,000–5,000 家）過去 3 個月已將 Smithery 列為 MCP server 註冊 / 路由中樞；本週 72 小時 crunch 窗口打開
- **目標客群**：使用 Smithery 的台灣 developer（估 3,000–5,000 家）+ 自建 MCP server 掛 Smithery registry 的團隊（估 500–1,000 家）+ 掛 Smithery CLI / SDK 的生產線（估 300–800 家）+ 需遷移至 Arcade.dev / 直接 vendor URL 的 SI 顧問案（估 150–400 家）+ MCP 中介平台選型未定群
- **技術複雜度**：3/5 — Node.js / Python CLI 工具 + Smithery API 讀取舊 server list + vendor 官方 URL mapping（Claude / OpenAI / GitHub / Shopify / Linear / 其他）+ Claude Code / Cursor / Codex settings.json 自動替換 + 已付費退款 FAQ + Arcade.dev vs Smithery 中立性觀察追蹤
- **預估 MRR**：one-off NT$ 60K–180K per article × 2–4 articles / week = NT$ 120K–720K；72 小時 crunch 加價 20–40% 接案可達 NT$ 80K–280K per client × 2–4 clients / 本週 = NT$ 160K–1.1M；若做訂閱式「MCP server registry 選型 + 遷移追蹤 dashboard」→ NT$ 1,500/mo × 100 用戶 = NT$ 150K MRR
- **競品弱點**：台灣中文技術 blog Smithery 10/31 關閉事件追蹤近乎零；多數 developer 不清楚「Arcade.dev 2026-08-05 收購」；CLI / SDK 替換清單無人整理；vendor 官方 URL mapping 中文整合文件零；Arcade.dev 中立性觀察（同時運營 ToolBench grading）無人追蹤；apitracker.io 盤點僅 Linear 2 條 proxy aliases 確認、其他 proxy entries 多數尚未對映 = 遷移 CLI 工具產品窗口
- **切入建議**：10/28 10:00「Smithery MCP Proxy 10/31 關閉 T-3 — 台灣一人 SaaS 的 72 小時 crunch migration CLI」blog（事件時間軸 + 影響範圍 + CLI/SDK 替換清單）→ 10/28 14:00 Notion dashboard 嵌入「vendor 官方 URL mapping + 已付費退款 FAQ + CLI 替換腳本」→ 10/29 加價 20–40% 接案 landing → 10/31 00:00 UTC 關閉 Live blog「關閉首小時觀察」push → 11/01 Week 3「Arcade.dev vs Smithery 中立性觀察」第二波 blog；分銷 Twitter / HN / Reddit r/mcp / Facebook Taiwan Developers Group

### 點子 4：OpenAI Evals read-only T-3 72 小時 crunch + reusable prompts 手動複製 Playwright CLI 🔄

- **痛點來源**：OpenAI Evals 10/31 00:00 UTC 進入 read-only（T-3 進入最後 72 小時）+ 11/30 下線 + reusable prompts 同下線（無 API 可匯出、須手動從 dashboard 複製）+ Agent Builder EOL T-33 + 官方 deprecations 指向 Promptfoo 為遷移目標、須手動重建 prompts / provider config / test cases / assertions + Langfuse v4 up to 165× faster migration guide + Langfuse 官方指出 Promptfoo red-teaming Langfuse 無對應需保留 + 第三方分析指出 OpenAI cookbook 要求 eval 已完整 run 過才能匯出 runnable config；若未在 10/31 前完成 dataset 匯出 → 11/01 起 read-only
- **目標客群**：以 OpenAI Evals 建 production LLM eval pipeline 的台灣中小企 / SI 顧問案（10–50 人規模，估 150–400 家）+ reusable prompts 11/30 同下線用戶群（手動 crunch 需求）+ Agent Builder 遷移用戶群 + ChatGPT Workspace Agents 轉接目標 + Langfuse / Promptfoo 選型未定群 + red-teaming 需求用戶（Promptfoo 保留需求）
- **技術複雜度**：3/5 — service business + CLI 工具；OpenAI Evals API dataset 匯出 + reusable prompts dashboard 自動化（Puppeteer/Playwright 爬取）+ Promptfoo YAML scaffold + Langfuse v4 dataset items 轉換 + evaluators 定義 + Agents SDK TypeScript / Python workflow re-architecture + 遷移 checklist 可模板化 + workflow graph parity 人工重驗
- **預估 MRR**：N/A（one-off NT$ 60K–280K per client × 2–4 clients / month）；加上 72 小時 crunch 加價 20–40% 可達 NT$ 80K–400K per client；若做「reusable prompts 手動複製 CLI + Promptfoo / Langfuse v4 選型工具」產品 → NT$ 2,000 one-off × 100 位客戶 = NT$ 200K
- **競品弱點**：台灣尚無針對 Evals read-only T-3 的專門 CLI 工具 + 顧問服務；多數 SI 顧問做「新建」而非「遷移」；OpenAI 官方 migration guide 只給框架、缺台灣在地整合顧問；Promptfoo + Langfuse v4 兩套遷移目標中文整合文件接近零；reusable prompts 無 API 可匯出的手動複製 crunch 無人做自動化；red-teaming 保留 Promptfoo 混搭遷移建議無中文版
- **切入建議**：10/28 Day 10 公開「reusable prompts 手動複製 Playwright CLI + Promptfoo vs Langfuse v4 選型決策樹 blog」crunch 工作日 → 10/29–10/30 Evals 遷移週後 2 日 crunch 加價接案 → 10/31 00:00 UTC read-only 起「Agent Builder EOL 最後 29 天 crunch」接案 → 11/30 EOL 前 1 週關閉接案

## 🧰 工具堆疊更新

- **🆕 Anthropic S-1 10/26 落實 Day 3 Live blog push**：10/28 10:00「10/26 S-1 落實 Day 3 事件補正 + 關鍵數字 FAQ」push + 14:00「兩客戶 25% 集中度風險」push + 20:00「11/9 roadshow 日程追蹤」push + 10/29「1,205 億運算承諾對台廠影響鏈」blog
- **🆕 GitHub Universe 2026 Day 1 keynote 即時 Live blog**：10/29 00:00（台北）keynote push + 02:00 彙整 push + 10/29 10:00「Copilot evaluation framework 落地 Taiwan FAQ」blog + 14:00「Stop prompting, start delegating 操作教學」+ 20:00「MCP security 落地 Taiwan FAQ」blog
- **🔄 Smithery 72 小時 crunch migration CLI 準備**：10/28 「Smithery MCP Proxy T-3 72 小時 crunch migration CLI」blog + Notion dashboard + CLI 替換腳本第一稿 + 10/31 00:00 UTC 關閉首小時 Live blog push
- **🔄 Evals read-only T-3 72 小時 crunch**：10/28「reusable prompts 手動複製 Playwright CLI + Promptfoo vs Langfuse v4 選型決策樹」blog + 10/29–10/30 crunch 加價接案
- **🔄 iPhone Duo Day 6 T+5 Live push**：10:00「Day 6 禁 walk-in 現場排隊規則確認」push + 14:00「線上訂購 + 門市取貨操作教學」push + 20:00「Day 7 第 1 週體驗彙整預告」push
- **🔄 數發部 100 億 AI 境外公司放寬納投條件操作教學 blog**：10/28 下午寫 blog + 10/29 Notion dashboard 嵌入 9 家受投企業 ROI 試算 + 境外公司放寬納投申請流程
- **🔄 Haiku 5.5 T+21 Week 2 Day 4 production ramp**：擴至第 9 條 production subagent 或切「Fable 5.1 cache + Haiku 5.5 effort」雙模型配置實驗；effort levels low 分類 / high 摘要 / low 轉譯 / low 標準化 / low 標籤 / medium nested subagent
- **🔄 Claude Agent SDK 0.3.302 Day 10 落地 Taiwan Facebook Developers Group push**：10/27 Day 9「vs Vercel AI SDK 7 HarnessAgent」3,500 字 blog 已公開 → 10/28 Day 10 落地 Taiwan 社群 push + 評估「SessionStore + skills」雙功能實戰
- **🔄 Agent Builder → Agents SDK 遷移 crunch T-33**：本週剩 3 日工作時間 → 10/31 進入 Week 3；code export scaffold → Agents SDK TypeScript / Python 選型

## ⚡ 今日行動建議

- [ ] **10/28 10:00**「10/26 Anthropic S-1 落實 Day 3 事件補正 + 關鍵數字 FAQ」push（含修正 10/27 brief「仍無」誤判）— 預期成本 NT$ 2K（Twitter / Threads 自動化）/ 產出 NT$ 100K–280K per article
- [ ] **10/28 14:00**「兩客戶 25% 集中度風險對 Claude 定價影響 — 下週 developer 推廣加碼預測」push + 數發部 100 億 AI 境外公司放寬納投操作教學 blog — 預期成本 NT$ 3K / 產出 NT$ 150K–380K per client
- [ ] **10/28 20:00**「11/9 roadshow 日程追蹤」push + iPhone Duo Day 7 第 1 週體驗彙整預告 push — 預期成本 NT$ 2K / 產出 NT$ 100K–220K per article
- [ ] **10/29 00:00（台北）** GitHub Universe 2026 Day 1 keynote 即時 Live blog push — 預期成本 NT$ 5K（熬夜 + 即時打字）/ 產出 NT$ 150K–350K per article
- [ ] **10/28–10/30**「Smithery → vendor 官方 MCP URL 72 小時 crunch migration CLI」+「reusable prompts 手動複製 Playwright CLI」兩套 CLI 工具與顧問服務 landing — 預期成本 NT$ 15K / 產出 NT$ 160K–1.1M

## ⏳ 待觀察

- Anthropic S-1 修訂與 11/9 roadshow 日程確認：下週可能補完價位 / 股數 / 募資規模三個留空欄位
- GitHub Universe 2026 Day 1 keynote 具體新發布（10/29 00:00 台北時間公開後觀察）
- Haiku 5.5 over-refusal fix 完成訊號（T+21 Week 2 Day 4 續待）
- iPhone Duo Day 7（10/29）「第 1 週體驗」彙整主流媒體口徑
- Smithery 10/31 00:00 UTC 關閉首小時實際影響範圍（哪些 CLI / SDK 真的斷線）
- OpenAI Evals read-only 11/01 起對現用 pipeline 的實際衝擊（export 腳本是否順利）

[^edgar]: 美國證券交易委員會（SEC）維運的 Electronic Data Gathering, Analysis, and Retrieval 系統，所有在美國公開發行證券的公司必須透過它繳交 10-K、10-Q、S-1 等法定文件，公眾可免費檢索；因此一份 S-1 真正「公開落實」的時間點，是以 EDGAR 收案時戳而非媒體報導為準。

[^safe]: Simple Agreement for Future Equity，Y Combinator 於 2013 年推出的早期新創融資合約，投資人先付款、以折扣或估值上限換未來一輪股權。IPO 前以公允價值重估造成的帳面損益屬會計性變動，不消耗現金，常與營運虧損混為一談。

[^fortmason]: 舊金山北岸的歷史軍港園區，現為活動與藝文空間；GitHub Universe 近年將主會場 keynote 固定辦在園內的 Festival Pavilion，是一座挑高倉庫改造的大型展演空間，與傳統飯店宴會廳風格差異明顯。

[^arcadedev]: 美國 AI agent 基礎設施公司，提供工具授權與執行層；2026 年 8 月收購 Smithery 後，保留 smithery.ai 作為公開、不中介的 MCP server 目錄，但關閉原本代為路由請求的 proxy 服務。

[^promptfoo]: 開源 LLM 評測工具，以 YAML 設定檔配 CLI 於本地跑測試集，比對多模型輸出並支援 red-teaming；OpenAI 於 Evals 下線時將其列為官方建議的遷移目標之一，缺點是須手動從 dashboard 重建 prompts 與 assertions。

[^langfuse]: 開源 LLM observability 平台，記錄 production prompt、completion、cost、latency，也能建資料集跑離線評測；v4 版本重寫底層儲存，官方標榜查詢速度較前代快至兩個數量級，常與 Promptfoo 混搭以補齊 red-teaming。

## 📚 引用來源

1. [CNBC — Anthropic IPO live updates: AI lab's S-1 filing](https://www.cnbc.com/2026/10/26/anthropic-ipo-live-updates-ai-s-1-filing.html) — 2026-10-26
2. [Anthropic on X — S-1 公告](https://x.com/AnthropicAI/status/2114705042817110293) — 2026-10-26
3. [SEC EDGAR — Anthropic, PBC Form S-1 FY2026](https://www.sec.gov/Archives/edgar/data/0002130357/000162828026067168/anthropicpbc-sx1.htm) — 2026-10-26
4. [aiweekly — Anthropic S-1 Shows $16.3B H1 Revenue, 25% From Two Customers, and $80.7B Non-Cash Loss Ahead of November IPO](https://aiweekly.co/alerts/anthropic-s-1-shows-163b-h1-revenue-25-from-two-customers-and-807b-non-cash) — 2026-10-26
5. [GitHub Universe 2026 官方議程](https://githubuniverse.com/) — 2026-10-28
6. [GitHub Blog — Your guide to GitHub Universe 2026 is here](https://github.blog/news-insights/company-news/your-guide-to-github-universe-2026-is-here-the-schedule-just-launched/) — 2026-10-28
7. [Smithery — The Future of Smithery](https://smithery.ai/future) — 2026-10-27
8. [apitracker.io — Smithery migration tracker](https://apitracker.io/smithery-migration) — 2026-10-27
9. [OpenAI developers — Deprecations](https://developers.openai.com/docs/deprecations) — 2026-10-27
10. [Langfuse — Migrate from OpenAI Evals](https://langfuse.com/resources/engineering/migrate-from-openai-evals) — 2026-10-27
11. [kingy.ai — OpenAI Evals read-only October 31 shutdown November 30 2026](https://kingy.ai/ai-launch-tracker/openai-evals-read-only-october-31-shutdown-november-30-2026/) — 2026-10-27
12. [mrmad.com.tw — 台灣 iPhone Duo 首賣禁現場排隊！蘋果公布全球直營店現貨規則](https://mrmad.com.tw/iphone-duo-no-walk-in-lines) — 2026-10-27
13. [mrmad.com.tw — iPhone Duo 上市日買不到現貨](https://mrmad.com.tw/?p=192680) — 2026-10-23
14. [中央社 — 數發部百億 AI 投資方案 開放主要營運在台境外公司可納投](https://cna.com.tw/news/afe/202610040029.aspx) — 2026-10-04
15. [TechNews — 百億 AI 基金首年僅投 7,500 萬 數發部公布 5 家獲投新創](https://technews.tw/?p=1520580) — 2026-03
16. [Business Next — 數發部 AI 新創 100 億計畫](https://www.bnext.com.tw/article/90239/moda-ai-startup-100billion-plan) — 2026
17. [uanalyze — 數發部祭百億資金催生 AI 新創 100 片 GPU 算力池](https://uanalyze.com.tw/articles/1078148404) — 2026
