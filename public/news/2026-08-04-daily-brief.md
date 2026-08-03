---
title: 每日創業情報 — 2026-08-04
date: 2026-08-04
tags: 創業情報, AI 產業, SaaS, 台灣
summary: MCP 2026-07-28 正式版 stateless 化 T+7 → MCP server 可上 serverless / edge，一人 SaaS 開 MCP integration 門檻崩降 / DeepSeek V4 Flash 0731 公開 beta $0.14/$0.28 T+3 新 low-tier 對照組 / 台北市青年 AI 工具補助 8/1 開跑 T+3 ChatGPT / Claude / Gemini / Canva 最高 4,000-8,000 元 / 台股 8/3 週一 +266.66 收 43,386 TSMC 回調 -2.27% 至 2,370 反彈延續但個股分化 / 刑事局 8 月詐騙統計改版「假性財產犯罪」重新分類 / Sonnet 5 promo T-27 8/31 到期倒數。
keywords: MCP 2026-07-28 stateless spec 正式版 7月28日 T+7 serverless edge 部署 MCP Apps 官方 extension HTML UI iframe sandbox, DeepSeek V4 Flash 0731 公開 beta 7月31日 T+3 0.14 0.28 dollar 1M context 284B MoE 13B active Terminal Bench 82.7 verbose 210M tokens, 台北市 青年 AI 工具 補助 8月1日 開跑 4000 元 8000 低收入 ChatGPT Claude Gemini Canva Copilot NotebookLM 18 35 歲 設籍 6 個月 T+3, 台股 8月3日 週一 收盤 43386.41 266.66 0.62 反彈 延續 台積電 2370 回調 55 元 2.27, 刑事局 詐騙 統計 8月 改版 假性財產犯罪 電信網路 非電信 165 打詐儀錶板, GSMA Open Gateway 台灣 MID Plus T+34 三大電信 中華 台哥大 遠傳 TWCA 14 API 4 首波, Anthropic Claude Sonnet 5 promo T-27 8月31日 introductory pricing 過期 3 15 標準 flat 50 percent tokenizer 20-35, 鴻海 亞灣超算 Visionbay.ai T+4 5MW HGX B300 90 utilization Exemplar Cloud 亞洲 第二 NCP, Cursor Composer 3 Vega T+4 週 leaked checkpoint 1.5T params SpaceX Colossus 從 Kimi K2.5 base 自主 pretrain frontier, 232 條款 半導體 8 月中 稅率 第二階段 未定 25 percent 第一階段 台美 ART 15 最惠國 待遇, MCP Apps extension 正式化 HTML UI Amplitude Asana Canva Figma Hex Slack monday.com 9 家 partners iframe postMessage, AMD Anthropic 2GW MI450 Helios 5B equity 7月22日 T+13 first GW 2027 H1, GitHub Copilot Billing Preview app 8月3日 T+1 退役 Super App Q3 GA 10 月底前 Windows Office 台灣, Trump AI EO 8月1日 deliverable T+3 covered frontier model 定義 官方文件 未公開 律所 memo 對映, n8n 2.0 vs Zapier 29.99 vs Make 9 credit 台灣 5-20 人 automation workflow AI agent
---

# 每日創業情報 — 2026-08-04

## 🎯 今日 TL;DR

- **MCP 2026-07-28 正式版 stateless 化 T+7 → MCP server 首度可上 serverless / edge 🆕🔥**：Anthropic / MCP steering committee 於 7/28 公告 spec 最終版，核心從「bidirectional stateful」轉為「request/response stateless」；新增 Mcp-Method 與 Mcp-Name headers 讓 load balancer / gateway 不必解 JSON-RPC body 就能路由；Multi Round-Trip Requests (MRTR) 取代 server-initiated elicitation / sampling；MCP Apps[^mcp-apps]、Tasks 正式進 versioned extensions framework；Enterprise-Managed Authorization extension stable 支援 Anthropic / Microsoft / Okta；TS + Python Tier 1 SDK 皆已破 10 億累計下載（[Model Context Protocol Blog — The 2026-07-28 Specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/)、[Claude blog — MCP 2026-07-28 spec: stateless core, coming to Claude](https://claude.com/blog/bringing-mcp-2026-07-28-to-claude)、[Appwrite — What's new in the MCP 2026-07-28 specification](https://appwrite.io/blog/post/mcp-goes-stateless-in-the-2026-07-28-specification)、[Netlify — MCP goes stateless and extensible](https://www.netlify.com/blog/mcp-goes-stateless-and-extensible/)、[MCP.Directory — The Stateless Release Candidate Explained](https://mcp.directory/blog/mcp-2026-07-28-release-candidate)、[Stacktree — MCP 2026-07-28 spec: what changed, what breaks](https://stacktr.ee/blog/mcp-2026-spec-changes)）— **這是 2026 下半年一人 SaaS 最關鍵的 dev 基建變化**：以往 MCP server 要跑 stateful WebSocket / SSE、綁 long-lived process，一人 SaaS 幾乎只能自架 VPS + supervisor；stateless 版直接可上 Cloudflare Workers / Vercel Edge / AWS Lambda，成本從 $20-50/月 VPS 掉到 $5/月 flat；對做「MCP server for 台灣 vertical SaaS」的 indie：narrative 從「要不要接 MCP」轉為「7-14 天內把自家 API 包成 MCP server 上架 registry 是 first-mover 窗」；audit sprint NT$ 20,000-50,000 flat × 3-5 客戶 + monthly「MCP integration 維運」SOP NT$ 4,999-11,999 × 8-15 客戶

- **DeepSeek V4 Flash 0731 公開 beta T+3 → 新 low-tier 對照組定型 🆕🔥**：DeepSeek 於 7/31 釋出 V4-Flash-0731 API 公開 beta，架構與 V4-Pro-Preview 同 (284B MoE / 13B active / 1M context / 131K output)、只做 re-post-training；但 Terminal Bench 2.1[^terminal-bench] 82.7、Cybergym 76.7、Toolathlon 70.3、DSBench-FullStack 68.7 「遠超」V4-Pro-Preview；定價 $0.14 / $0.28 per M token、cached input $0.003（98% 折）blended $0.06/M；缺點是 verbose（Artificial Analysis 測 210M generated tokens vs 62M median = 3.4× 產生更多 tokens 實質成本要重算）（[DeepSeek V4 Flash 0731 Launches Public Beta with Price Held at $0.14](https://xenospectrum.com/en/deepseek-v4-flash-0731-pricing/)、[Developers Digest — DeepSeek V4 Flash 0731 The Official Release Benchmarks and How to Run It](https://www.developersdigest.tech/blog/deepseek-v4-flash-0731-opencode-guide)、[Cosmic JS — DeepSeek V4 Flash Benchmarks Pricing Verdict](https://www.cosmicjs.com/blog/deepseek-v4-flash-benchmarks-pricing)、[OpenRouter — DeepSeek V4 Flash pricing benchmarks](https://openrouter.ai/deepseek/deepseek-v4-flash)、[BenchLM — DeepSeek V4 Flash Benchmarks & Pricing August 2026](https://benchlm.ai/models/deepseek-v4-flash)）— **新 low-tier 六方對照定型**：DeepSeek V4-Flash $0.14/$0.28 (verbose 疊 3.4× 實質) × GPT-5.6 Luna $0.20/$1.20 × Gemini 3.6 Flash $1.50/$7.50 × Sonnet 5 promo $2/$10 (T-27 8/31 到期) × GPT-5.6 Terra $2/$12 × Opus 5 $5/$25；對台灣 5-20 人「agentic coding / terminal automation」stack：V4-Flash 為新首選（Terminal Bench 82.7 領先同價位）；對做「LLM router audit」的 indie：narrative 加「V4-Flash verbose 疊加因子 + agentic workload eval harness re-baseline」新 wedge；audit sprint NT$ 25,000-60,000 flat × 3-5 客戶

- **台北市青年 AI 工具補助 8/1 開跑 T+3 → 台灣首個直補 SaaS 訂閱費補助 🆕🔥**：台北市青年局 7/29 公告「青年 AI 工具補助計畫」、8/1 開跑；設籍北市 6 個月以上 + 18-35 歲 + 大專院校在學或應屆 + 曾修 AI 相關課程或參加青年局培訓；一般青年每年最高補助 **NT$ 4,000**、低收 / 中低收最高 **NT$ 8,000**；補助工具白名單：ChatGPT / Gemini / Claude / Canva / Adobe / Midjourney / Copilot / NotebookLM / Notion AI / Grammarly / Speak；**明文排除中國大陸開發軟體（CapCut / 美圖秀秀 / WHEE）**；補助期間 8/1-10/31，最遲 11/10 前送件、先訂閱再申請、每人一年一次、每次最多 2 項（[INSIDE — 最高補助 8,000 元 台北市 8/1 起開放青年 AI 工具補助](https://www.inside.com.tw/article/41985-taipei-youth-ai-subsidy.md)、[104 職場力 — 北市青年 AI 工具補助 ChatGPT Claude 最高 4000 元](https://blog.104.com.tw/taipei-youth-ai-tool-subsidy-2026/)、[ABMedia 鏈新聞 — 最高補助 8,000 元 ChatGPT Claude Gemini 都能申請](https://abmedia.io/taipei-city-youth-ai-subscription)、[BlockTempo — 台北市 35 歲以下青年補助 AI 工具最高 4000 元 8/1 開跑](https://www.blocktempo.com/taipei-youth-ai-subsidy-chatgpt-claude-subscription-application-guide-2026/)、[華視 — 北市青年局推 AI 工具補助每年最高 4000 元](https://news.cts.com.tw/cna/local/202607/202607293061080.html)、[Yahoo — 北市青年 AI 方案 8 月開跑 ChatGPT Gemini 都有補助](https://tw.news.yahoo.com/%E5%8C%97%E5%B8%82%E9%9D%92%E5%B9%B4ai%E6%96%B9%E6%A1%888%E6%9C%88%E9%96%8B%E8%B7%91-chatgpt-gemini%E9%83%BD%E6%9C%89%E8%A3%9C%E5%8A%A9-%E6%9C%80%E9%AB%98%E5%8F%AF%E9%A0%988%E5%8D%83%E5%85%83-075742769.html)）— **這是台灣首度直補 SaaS 訂閱費、且明文排除對岸軟體**：一人 SaaS 提供者若鎖定「北市青年學生 / 應屆」目標客群，此補助 = 3 個月內 CAC 降至近零；對做「AI 工具訂閱代辦」或「教育型 AI 課程」的 indie：wedge 「協助青年 3 步驟走完申請流程 + 綁 AI 工具訂閱推廣 affiliate」；對做「B2B AI 培訓」的 一人顧問：narrative 加「青年局培訓學分 + 補助綁定」新 hook；「北市青年 AI 工具補助 8/1 3 步驟 SOP」中文首篇 T+3 為 first-mover 中間窗

- **台股 8/3 週一 +266.66 收 43,386.41 TSMC 回調 -2.27% 至 2,370 T+0 → 反彈延續但個股分化 🔄**：週一 (8/3) 加權開 42,780.42 → 收 43,386.41 (+266.66, +0.62%)；台積電 (2330) 開 2,390 → 收 2,370 (-55, -2.27%) 未守住週五漲停價 2,425；「大盤反彈延續 vs 台積電個股逢高獲利了結」二律成型；今日 (8/4 週二) 08:30 UTC+8 開盤為「連兩天走勢確認 vs 個股分化擴散」關鍵訊號日（[ETtoday — 台股收漲 266 點 台積電跌 55 元至 2370](https://finance.ettoday.net/news/3212399)、[Yahoo 加權指數 ^TWII 走勢圖](https://tw.stock.yahoo.com/quote/%5ETWII)、[Yahoo 台積電 2330.TW 走勢圖](https://tw.stock.yahoo.com/quote/2330.TW)）— **對比週五 (7/31) +3,186.45 史上最大漲**，週一僅 +266.66 = 反彈幅度收斂 92% + 台積電個股回調 → 「大盤與台積電走勢背離」在 8/3 週一正式出現；對做「AI 供應鏈 real-time signal SaaS」的 indie：dashboard 加「大盤 vs 台積電 divergence 觸發線 (43,386 vs 2,370 為 8/3 基準、若 8/4 台積電再跌 3%+ 而大盤仍紅 = 個股 rotation 訊號)」；對做「一人公司客戶談判 SOP」的 indie：narrative 精煉「客戶 Q3 budget 觀望是否延後」→ 「TSMC 個股 rotation 出現 = 資金開始輪動非 AI 供應鏈類 = 客戶談判可 pivot 到非 AI 傳產客戶」second-wave 窗；audit sprint NT$ 12,000-30,000 flat × 3-6 客戶

- **刑事局 8 月詐騙統計改版 T-14 內上路 → 「假性財產犯罪」重新分類 🆕**：刑事局於 7/20 公告 8 月改版詐欺案件統計方式，區分「電信網路詐欺」、「非電信網路詐欺」、「假性財產犯罪[^fake-financial-crime]」三類；改版避免公司交易糾紛、親友財務爭議、債務不履行、契約糾紛在案情未釐清前先列入詐欺、影響犯罪趨勢判讀；改版後 165 打詐儀錶板 dashboard 需重新校準；6 月 財損 已降 47%（[中時 — 詐騙統計 8 月大改版 刑事局校正增列假性財產犯罪](https://www.chinatimes.com/realtimenews/20260720002277-260402)、[ETtoday — 刑事局攜手遠東銀攔截 5.5 億詐團匯款 6 月詐騙財損金額降 47%](https://www.ettoday.net/news/20260720/3204247.htm)、[SETN — 最新打詐成果曝光 6 月財損狂降 47%](https://www.setn.com/news/1875295)）— **對做「台灣防詐 SaaS」的 indie**：現有「打詐儀錶板即時追蹤」dashboard 需在 8 月中前重新校準 rubric（電信網路 / 非電信網路 / 假性財產 三分）；對做「GSMA MID+ × 台灣詐防 API mini SaaS」的 一人公司：narrative 加「刑事局統計改版 T-14 → 假性財產分離 = 電信網路詐欺占比會漂亮下修 = MID+ 對防詐 KPI 貢獻更易被看見」新 wedge；audit sprint NT$ 15,000-40,000 flat × 3-6 客戶

- **GSMA Open Gateway 台灣三大電信 MID+ T+34 進穩態 → 首波 SME 對接 sprint 需求陡增 🔄**：中華電信、台灣大、遠傳、TWCA 統一介接平台自 7/1 上線後 T+34；14 項 Open API 首波 4 項開通、SIM Swap / Number Verification / Device Location 為主打；對做「SME 銀行 / 保險 / 電商 SMS OTP 遷 MID+」的 indie：narrative 由「T+33 first-mover」轉為「T+34 第一波實際對接需求陡增窗」；audit sprint NT$ 15,000-40,000 flat × 3-6 客戶保持、8 月為對接談判高峰

- **Sonnet 5 promo T-27 → 8/31 UTC 到期倒數 🔄**：$2/$10 → $3/$15 flat 50% 上漲；tokenizer 較 Sonnet 4.6 encode 1.0-1.35× tokens = 實質 20-35% 疊加；prompt caching 最多 90% 折 + batch 50% 折仍有效；對做「Anthropic bill 治理 audit」的 indie：narrative 精煉「T-27 → 8/31 UTC 前遷 batch / cache / Opus 5 default」；audit sprint NT$ 15,000-40,000 flat × 3-6 客戶保持、8 月中前為最後轉單窗

- **鴻海亞灣超算 Visionbay.ai T+4 定價 / 排隊追蹤 🔄**：7/31 商轉 T+4；utilization 90%+ 定價未公開 + 排隊 3-6 個月仍為關鍵變數；對做「亞灣超算 × 台灣 solo AI SaaS GPU 租用 vs 自架決策」audit sprint 的 indie：narrative 加「T+4 仍無公開新訊號 = direct engagement 為 only 途徑」；今日 (8/4 週二) 起主動 DM 亞灣超算 BD 拉估價為關鍵動作；audit sprint NT$ 25,000-60,000 flat × 3-5 客戶保持

- **Cursor Composer 3「Vega」T+4 週 → 公開 rollout「soon」但無具體日期 🔄**：leaked checkpoint 顯示 5 段 quota slugs (Vega-Fast / Vega-Medium / Vega-High / Vega-XHigh / Vega baseline) + 6 internal variants + 1.5T params on SpaceX Colossus[^colossus] + 從 Kimi K2.5[^kimi-k25] base 轉自主 pretrain frontier；價位預估「與 Composer 2.5 同層或稍高」+ 「Origin + Composer 3 bundled tier 或高於 Pro $20/月」；對做「AI IDE 遷移 audit」的 indie：narrative 保持「Composer 3 GA 前為 Composer 2.5 收單期、之後 stack 選型需再校準」；audit sprint NT$ 15,000-40,000 flat × 3-5 客戶保持

## 🔄 昨日追蹤

- 🆕 **MCP 2026-07-28 spec 正式版 stateless 化** — 7/28 官宣 T+7；正式版 spec + SDK 已釋出；MCP server 首度可上 serverless / edge
- 🆕 **DeepSeek V4 Flash 0731 公開 beta** — 7/31 釋出 T+3；$0.14/$0.28 + Terminal Bench 2.1 82.7 領先同價位
- 🆕 **台北市青年 AI 工具補助 8/1 開跑** — 8/1 開始 T+3；補助期至 10/31；一般青年最高 NT$ 4,000 / 低收 NT$ 8,000
- 🆕 **刑事局 8 月詐騙統計改版** — 7/20 公告 T+15；預計 8 月中前上路
- 🔄 **台股 8/3 週一 +266.66 收 43,386.41** — T+0；反彈延續但 TSMC 個股回調 -2.27%
- 🔄 **GitHub Copilot Billing Preview 8/3 退役** — T+1；已進穩態、Super App Q3 (10 月底前) GA 前置作業
- 🔄 **GSMA Open Gateway 台灣三大電信 MID+** — T+34；首波實際對接需求陡增窗
- 🔄 **Anthropic Sonnet 5 promo** — T-27；8/31 UTC 到期倒數；50% 名目 + tokenizer 20-35% 實質疊加
- 🔄 **鴻海亞灣超算 Visionbay.ai** — T+4；定價未公開 + 排隊 3-6 個月為 direct engagement only
- 🔄 **Cursor Composer 3「Vega」** — T+4 週；公開 rollout「soon」但無具體日期
- 🔄 **Nvidia Open Secure AI Alliance 37 家** — T+8；NOOA framework 已進 open source baseline 穩態
- 🔄 **Trump AI EO 8/1 deliverable** — T+3；「covered frontier model」定義官方文件仍未公開；律所 memo 對映窗
- 🔄 **AMD Anthropic 2GW MI450 / Helios $5B equity deal** — T+13；first gigawatt deployment 2027 H1

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會 / 威脅 |
| ---- | ---- | ---------------------- | ----------- |
| **台北市青年 AI 工具補助 8/1 開跑 T+3；一般青年 NT$ 4,000 / 低收 NT$ 8,000 上限；補助白名單 ChatGPT / Gemini / Claude / Canva / Adobe / Midjourney / Copilot / NotebookLM / Notion AI / Grammarly / Speak；明文排除中國大陸開發軟體；補助期 8/1-10/31 最遲 11/10 送件；先訂閱再申請一年一次每次最多 2 項** | [INSIDE — 台北市 8/1 起開放青年 AI 工具補助](https://www.inside.com.tw/article/41985-taipei-youth-ai-subsidy.md)、[104 職場力 — 北市青年 AI 工具補助最高 4000 元](https://blog.104.com.tw/taipei-youth-ai-tool-subsidy-2026/)、[BlockTempo — 台北市 35 歲以下青年補助 AI 工具 8/1 開跑](https://www.blocktempo.com/taipei-youth-ai-subsidy-chatgpt-claude-subscription-application-guide-2026/)、[華視 — 北市青年局推 AI 工具補助](https://news.cts.com.tw/cna/local/202607/202607293061080.html) | 台灣首度直補 SaaS 訂閱費 + 明文排除對岸軟體 = 一人 SaaS 若鎖定「北市青年學生 / 應屆」CAC 降至近零；一人顧問 / AI 培訓者可綁「培訓學分 + 補助流程」affiliate；反過來對做「本土 AI SaaS」的 一人公司：不在白名單 = 台北青年客群無補助拉力 | 機會：「北市青年 AI 工具補助 8/1 3 步驟 SOP」中文首篇 audit + 「AI 培訓 × 訂閱補助」聯合行銷 sprint NT$ 15,000-40,000 flat × 3-6 客戶；affiliate revenue 3-6 個月 NT$ 30,000-120,000；威脅：本土 SaaS 未進白名單 = 台北青年 CAC 需另找槓桿 |
| **台股 8/3 週一開 42,780.42 收 43,386.41 (+266.66, +0.62%)；台積電 (2330) 開 2,390 收 2,370 (-55, -2.27%) 未守住週五漲停 2,425；大盤反彈延續 vs 個股回調背離；今日 (8/4 週二) 08:30 UTC+8 開盤為「連兩天走勢確認 vs 個股分化擴散」關鍵訊號日** | [ETtoday — 台股收漲 266 點 台積電跌 55 元至 2370](https://finance.ettoday.net/news/3212399)、[Yahoo — 加權指數 ^TWII 走勢圖](https://tw.stock.yahoo.com/quote/%5ETWII)、[Yahoo — 台積電 2330.TW 走勢圖](https://tw.stock.yahoo.com/quote/2330.TW) | 週一僅 +266.66 = 反彈幅度較 7/31 +3,186.45 收斂 92%；台積電個股回調 = 大盤與 TSMC 走勢背離；今日開盤為「反彈延續 vs 分化擴散」訊號日；客戶 Q3 budget 觀望是否終止仍取決本週 | 機會：「大盤 vs 台積電 divergence 觸發線 SaaS dashboard」新 wedge NT$ 2,499-5,999 / 月 × 15-40 客戶；客戶談判 pivot 至非 AI 傳產客戶 audit NT$ 12,000-30,000 flat × 3-6 客戶；威脅：若今日大盤與 TSMC 雙跌 → 反彈行情確認短命 |
| **刑事局 8 月詐騙統計改版 T-14 內上路；區分「電信網路詐欺」/「非電信網路詐欺」/「假性財產犯罪」三類；改版避免公司交易糾紛、親友財務爭議、債務不履行、契約糾紛先入詐欺；6 月財損已降 47%** | [中時 — 詐騙統計 8 月大改版 刑事局校正增列假性財產犯罪](https://www.chinatimes.com/realtimenews/20260720002277-260402)、[ETtoday — 刑事局攜手遠東銀攔截 5.5 億詐團匯款 6 月降 47%](https://www.ettoday.net/news/20260720/3204247.htm)、[SETN — 打詐成果 6 月財損狂降 47%](https://www.setn.com/news/1875295) | 台灣防詐 SaaS 「打詐儀錶板即時追蹤」dashboard 需在 8 月中前重新校準 rubric；GSMA MID+ × 台灣詐防 API mini SaaS 的 narrative 加「電信網路詐欺占比會漂亮下修 → MID+ 對防詐 KPI 更易被看見」 | 機會：「刑事局改版 T-14 × 台灣防詐 SaaS rubric 校準 SOP」中文首篇 audit NT$ 15,000-40,000 flat × 3-6 客戶；GSMA MID+ 對接 sprint 新 wedge；威脅：若客戶 dashboard 用舊 rubric 曝光 → 客戶對「AI 詐防」信心受挑戰 |
| **GSMA Open Gateway 台灣三大電信 MID+ T+34 進穩態；首波 4 API 開通後第一波 SME 對接談判需求陡增窗；TWCA 統一介接為 gatekeeper；14 項 Open API 規劃中** | [iThome — 三大電信 MID Plus 升級 GSMA Open Gateway](https://www.ithome.com.tw/news/177027)、[CIO Taiwan — 三大電信開放 API 串聯金融業 TWCA](https://www.cio.com.tw/115972/) | 首波實際對接需求陡增窗；SME 銀行 / 保險 / 電商需 3-6 週工程 sprint 落地；TWCA 定價與流量限制官方公告為 8 月關鍵觸發線 | 機會：「MID+ × SME SMS OTP 3 週遷移 sprint」audit NT$ 15,000-40,000 flat × 3-6 客戶保持；「MID+ SDK reference implementation」NT$ 1,999-4,999 / 月 × 10-30 客戶；威脅：TWCA 沒公開定價 = 客戶談判缺 leverage |
| **半導體 232 條款[^section-232] 第二階段稅率 8 月中決策窗；第一階段自 2026/1/15 對進口半導體、設備、衍生產品 25% 已生效；第二階段稅率、涵蓋範圍、時間表尚未公布；台美 ART 15% 最惠國待遇 + 產能 2.5 倍配額為關鍵優惠** | [經濟日報 — 232 條款 台灣取得最惠國待遇為何比對等關稅更關鍵](https://money.udn.com/money/story/124512/8921707)、[台美關稅談判平台 — 2026 年 1 月 14 日 232 條款關稅措施相關要點整理](https://twustariff.ey.gov.tw/page/tariff/usa-order/13)、[勤業眾信 — 半導體 232 條款稅率 25% 供應鏈產銷雙向調整](https://www.deloitte.com/tw/tc/about/press-room/pr20260115-tax.html)、[華視 — 232 半導體稅率尚未出爐 鄭麗君續爭取業者權益](https://news.cts.com.tw/cna/politics/202605/202605283037135.html) | 第二階段稅率決策為 8 月最重要觸發線；若成熟製程 >15% → IC 設計 / 封測 / 半導體設備 24h audit 觸發；若 <15% → 台股延續反彈 | 機會：「232 稅率追蹤 dashboard」SaaS + IC 設計 / 封測 pass-through 定價 audit；威脅：8 月中若超乎預期 → 台股回檔壓力 |

## 🛠 新興 AI 工具

| 工具 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | -------- | ---- | ---------------- | -------- |
| **MCP 2026-07-28 spec 正式版 (T+7)** | Agent 互通開放協定 | Stateless request/response + MRTR + header routing (Mcp-Method / Mcp-Name) + MCP Apps / Tasks / Enterprise-Managed Authorization extensions | 開源免費；TS + Python Tier 1 SDK 各已破 10 億累計下載 | vs 2025-11-05 舊版：stateful → stateless；MCP server 首度可上 Cloudflare Workers / Vercel Edge / AWS Lambda 而非只能 VPS + supervisor；MCP Apps extension 讓 UI 可 render 在 chat 內 | 台灣 5-20 人 SaaS：立即評估把自家 API 包成 MCP server 上 registry；[Model Context Protocol Blog — The 2026-07-28 Specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/)、[Netlify — MCP goes stateless and extensible](https://www.netlify.com/blog/mcp-goes-stateless-and-extensible/) |
| **DeepSeek V4-Flash-0731 (T+3 公開 beta)** | Frontier LLM 低成本 agentic | 284B MoE / 13B active / 1M context / 131K output；Terminal Bench 2.1 82.7 (領先同價位)、Cybergym 76.7、Toolathlon 70.3、DSBench-FullStack 68.7 | $0.14 / $0.28 per M token；cached input $0.003 (98% 折) blended $0.06/M；verbose (3.4× generated tokens vs median) | vs GPT-5.6 Luna $0.20/$1.20：V4-Flash 便宜 30-77% 但 verbose 疊 3.4× 實質；vs Gemini 3.6 Flash $1.50/$7.50：V4-Flash agentic bench 領先且便宜 90%；vs Sonnet 5 promo $2/$10：V4-Flash 便宜 93% | 台灣 5-20 人「agentic coding / terminal automation」立即 A/B；一般 chat / summarization 保持 Luna；[XenoSpectrum — DeepSeek V4 Flash 0731 Launches Public Beta](https://xenospectrum.com/en/deepseek-v4-flash-0731-pricing/)、[Developers Digest — DeepSeek V4 Flash 0731 Official Release Benchmarks](https://www.developersdigest.tech/blog/deepseek-v4-flash-0731-opencode-guide) |
| **MCP Apps extension (2026-07-28 正式化)** | Chat 內 UI rendering | 第三方 app 於 Claude / ChatGPT / VS Code Insiders / Goose chat 視窗內 render 互動式 UI (charts / forms / dashboards / design canvases)；iframe sandbox + postMessage + explicit user approval | 開源 `@modelcontextprotocol/ext-apps` 免費 | vs 傳統「產生 markdown 給 LLM 貼」：MCP Apps 為 rich UI；9 家 launch partners (Amplitude / Asana / Box / Canva / Clay / Figma / Hex / monday.com / Slack) 已 day-one | 台灣 5-20 人「產品 UI 想上 Claude / ChatGPT」= 立即評估；[Alpic AI — MCP Apps Goes Official Claude ChatGPT Support](https://alpic.ai/blog/mcp-apps-goes-official-claude-chatgpt-support)、[Digital Applied — Anthropic MCP Apps Interactive UIs](https://www.digitalapplied.com/blog/anthropic-mcp-apps-interactive-ui-claude-guide) |
| **Cognition Devin 2.0 / Fusion (穩態)** | Multi-agent AI SWE + orchestration | Devin Fusion (harness, not model) 在同一份 plan 內決定哪支 model 跑哪段任務；6 月 29 日 shipped preview；Kanban Agent Command Center；ACP hot-swap Codex / Claude Agent | Free $0 / Pro $20 / Max $200 / Teams $80 + $40/seat；enterprise ACU billing | vs Cursor：Devin 走 GUI + Kanban orchestration；vs Claude Code：Devin 有 web + desktop GUI (Claude Code 為 CLI + hooks)；Fusion 為「模型不動、harness 智能」新層 | 台灣 5-20 人團隊「同時用 Codex + Claude Agent + Devin」= Devin Desktop 首選；[VentureBeat — Devin 2.0 slashes price to $20 per month](https://venturebeat.com/programming-development/devin-2-0-is-here-cognition-slashes-price-of-ai-software-engineer-to-20-per-month-from-500)、[eesel — Devin Fusion pricing](https://www.eesel.ai/blog/devin-fusion-pricing) |
| **Zapier Agents vs Make AI Agents vs n8n 2.0 (2026 定型)** | AI workflow automation + agent | Zapier Professional $29.99 / 月 (750 tasks) + Agents / AI Copilot；Make $9 / 月 (10,000 credits) + Maia AI + Make Grid enterprise；n8n 2.0 自架免費 (unlimited executions) 或 cloud $20 / 月 (2,500 executions) + LangChain native + 70+ AI nodes + persistent agent memory | Zapier / Make 為 SaaS 按用量；n8n 自架為 flat | 20-step × 5,000 次 / 月 workload：n8n 自架幾乎零、Zapier $29.99 (超額)、Make $9-$30；n8n 為 privacy + cost 敏感首選 | 台灣 5-20 人 automation：先 Zapier 快速 SaaS 整合、爆量 / privacy 需求切 n8n；[Digital Applied — Zapier vs Make vs n8n 2026](https://www.digitalapplied.com/blog/zapier-vs-make-vs-n8n-2026-automation-comparison)、[Cipher Projects — n8n vs Zapier Pricing Comparison 2026](https://www.cipherprojects.com/blog/posts/n8n-vs-zapier-automation-tool-comparison/) |
| **AMD Anthropic 2GW MI450 / Helios $5B equity (T+13)** | AI compute capacity deal | AMD 供 Anthropic 2GW MI450 Series GPUs (Helios rack-scale)；first gigawatt 2027 H1；AMD 投 Anthropic 最多 $5B equity 分階段釋放；已 confirmed Anthropic 用 AMD 現世代 MI355X | 交易總額估「tens of billions of dollars」；Anthropic 分階段拿 equity | vs Anthropic + Google TPU：多元 supply；vs OpenAI + Nvidia + SoftBank：AMD 為 AI 硬體第二選擇正式 buy-in；MI450 vs Nvidia B300 為 2027 H1 對打組 | 台灣 5-20 人「Anthropic bill 治理」的 indie：narrative 加「Anthropic 2027 H1 compute 供給拉開 = Sonnet / Opus 定價可能 8 月後穩定 / 有下修空間」；[AMD IR — Strategic Partnership 2GW MI450](https://ir.amd.com/news-events/press-releases/detail/1292/amd-and-anthropic-announce-strategic-partnership-to-deploy-up-to-2-gigawatts-of-amd-instinct-mi450-series-gpus)、[Yahoo Finance — AMD supply Anthropic 2GW Helios $5B](https://finance.yahoo.com/technology/ai/articles/amd-supply-anthropic-2-gigawatts-153858353.html) |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：「MCP 2026-07-28 stateless T+7 × 台灣 vertical SaaS API 包 MCP server 7 天 sprint」中文首篇 + audit sprint 🆕🔥

- **痛點來源**：MCP 2026-07-28 正式版 7/28 釋出 T+7 + stateless 讓 MCP server 首度可上 Cloudflare Workers / Vercel Edge / AWS Lambda + MCP Apps extension 讓 chat 內 render UI + Enterprise-Managed Authorization stable + TS + Python SDK 破 10 億累計下載 + Anthropic 已 confirmed「coming to Claude」+ 台灣本土 vertical SaaS (電商 POS / 診所排程 / 律所文件 / 中小旅遊 / 補習班 CRM / 建築案管) 「要不要接 MCP」問題陡增 + 中文快訊供給為 zero + T+7 為 first-mover 中間窗。
- **目標客群**：台灣 5-20 人 vertical SaaS 團隊有現成 REST API 者（估計 400-1,000 家）+ 對「MCP server 開發成本」有 CTO 質詢壓力的技術主管（250-500 位）+ 對「MCP registry 上架 first-mover」有意願的 solo SaaS 提供商（150-400 位）+ 想接「MCP integration 外包」的 一人顧問（100-300 位）。
- **技術複雜度**：3/5（既有 REST API → MCP server (stateless) 對映：TS SDK / Python SDK 挑選 + Cloudflare Workers / Vercel Edge 部署 pattern + Mcp-Method / Mcp-Name header routing + MRTR 對「用戶確認」的 UX flow + `@modelcontextprotocol/ext-apps` 若要 render UI + Enterprise-Managed Authorization 對接 IdP + registry 上架 SEO + smithery.ai / mcp.directory 選擇）。
- **預估 MRR**：NT$ 60,000-220,000（audit sprint NT$ 20,000-50,000 × 3-5 客戶 + monthly「MCP server 維運 + registry SEO」SOP NT$ 4,999-11,999 × 8-15 客戶 + 「7 天 sprint 交付 MCP server」consulting NT$ 40,000-100,000 flat × 1-2 客戶 / 月 + 「MCP server template repo」pay-once NT$ 3,999-9,999 × 10-30 買家）。
- **競品弱點**：MCP official blog / Anthropic / Netlify / Appwrite 為英文 tech 文；台灣現無中文 vertical SaaS 對映 SOP；「MCP 2026-07-28 stateless × 台灣 vertical SaaS 7 天 sprint」中文首篇 = zero 供給、T+7 為 first-mover 中間窗、Q3 內至少 3 個月 quiet 窗。
- **切入建議**：週三 (8/5) 22:00 UTC+8 前發中文首篇「MCP 2026-07-28 stateless T+7 × 台灣 vertical SaaS API 包 MCP server 7 天 sprint（+ TS / Python SDK 選型 + Cloudflare Workers vs Vercel Edge 部署 + registry 上架 + MCP Apps UI 加分）」+ GitHub template repo public + Loom 12-18 分鐘 SOP + 5 位 vertical SaaS CTO DM 試投→拿 3-5 個 audit 客戶 NT$ 60,000-220,000。

### 點子 2：「台北市青年 AI 工具補助 8/1 開跑 × AI 培訓 / 訂閱代辦 / 白名單 SaaS 聯合行銷 sprint」中文首篇 🆕🔥

- **痛點來源**：台北市青年局 7/29 公告 AI 工具補助 8/1 開跑 + 一般青年最高 NT$ 4,000 / 低收 NT$ 8,000 + 白名單 ChatGPT / Gemini / Claude / Canva / Adobe / Midjourney / Copilot / NotebookLM / Notion AI / Grammarly / Speak + 明文排除中國大陸軟體 + 台灣首度直補 SaaS 訂閱費 + 補助期 8/1-10/31 3 個月 + 申請門檻「修過 AI 課程或參加青年局培訓」= AI 培訓機構 + 訂閱代辦 + 白名單 SaaS affiliate 三方聯合行銷極限窗 + 中文一步驟走完 SOP 供給有限 (現有多為新聞層) + T+3 為 first-mover 極早中間窗。
- **目標客群**：台北市 18-35 歲設籍 6 個月以上的青年學生 / 應屆畢業生（估計 15-30 萬人）+ AI 培訓機構 / 補習班 / 家教平台（估計 100-300 家）+ 白名單 SaaS 台灣代理 / affiliate（估計 50-150 家）+ 對「AI 補助流程一站式」有需求的 solo consultant（80-200 位）。
- **技術複雜度**：2/5（申請流程拆解 + 白名單 SaaS × 補助上限比例對照表 + 「先修 AI 課程」對映青年局培訓 + 培訓機構名單 + affiliate link 追蹤 + 補助送件文件模板 + 排除清單警示）。
- **預估 MRR**：NT$ 50,000-180,000（audit sprint NT$ 15,000-40,000 × 3-5 培訓機構 / 白名單代理客戶 + monthly「補助流程 + affiliate 追蹤 SOP」NT$ 3,999-8,999 × 8-15 客戶 + 「AI 培訓 × 訂閱補助」聯合行銷 sprint consulting NT$ 25,000-70,000 flat × 1-2 客戶 / 月 + affiliate revenue 3-6 個月 NT$ 30,000-120,000）。
- **競品弱點**：INSIDE / 104 職場力 / BlockTempo / 華視 為新聞層報導無流程 SOP；青年局官方為 PR 通告不做 affiliate 聯合行銷指引；「補助 8/1 3 步驟 SOP + 白名單 SaaS 對照」中文首篇 = zero 供給、T+3 為 first-mover 中間窗、8 月為申請高峰。
- **切入建議**：今日 (8/4) 20:00 UTC+8 前發中文首篇「台北市青年 AI 工具補助 8/1 開跑 T+3 × 3 步驟一站式 SOP（+ 白名單 11 種 SaaS × 補助上限對照 + 培訓學分綁定 + affiliate 追蹤模板 + 排除清單警示 + 送件文件範本）」+ Loom 6-10 分鐘 SOP + affiliate link 佈設 + DM 5 家培訓機構 / 白名單代理→拿 3-5 個 audit 客戶 + affiliate 底流量 NT$ 50,000-180,000。

### 點子 3：「DeepSeek V4-Flash-0731 T+3 × 台灣 5-20 人 agentic coding stack A/B benchmark SOP」中文首篇 🆕

- **痛點來源**：DeepSeek 7/31 釋出 V4-Flash-0731 公開 beta + Terminal Bench 2.1 82.7 領先同價位 + $0.14/$0.28 為當前最便宜 agentic 選項 + 但 verbose (3.4× tokens vs median) 實質成本需 A/B 才能算 + 台灣 5-20 人「Cursor Composer 2.5 (Kimi K2.5 base) / Claude Code / Devin Fusion」stack 面對「V4-Flash 該不該加入 router 為 default terminal / codebase search / small agent tier」問題陡增 + 中文快訊供給為 zero + T+3 為 first-mover 中間窗、Composer 3 GA 前為 A/B 極限窗。
- **目標客群**：台灣 5-20 人 AI 產品團隊「agentic coding / terminal automation」stack 主力（估計 300-800 家）+ 對「LLM router 加 low-tier 選項」有工程壓力的 CTO（200-400 位）+ 對「DeepSeek 中國模型合規」有 CISO 質詢的 solo founder（150-400 位）+ 想接「LLM stack audit」外包的 一人顧問（100-300 位）。
- **技術複雜度**：3/5（V4-Flash 於 OpenRouter / DeepSeek 官方 API / self-host 三方對比 + Terminal Bench 2.1 / DSBench-FullStack 兩個 workload 台灣本地 code base 復現 + verbose 3.4× 疊加因子計算 + Cursor Composer 2.5 / Devin Fusion / Claude Code 三方 router 加入 V4-Flash 決策 + DeepSeek 中國模型「data-residency + 加解密 audit trail」對映 + 六方 low-tier 對照 (V4-Flash / Luna / Gemini 3.6 Flash / Sonnet 5 promo T-27 / Terra / Opus 5)）。
- **預估 MRR**：NT$ 60,000-200,000（audit sprint NT$ 20,000-50,000 × 3-5 客戶 + monthly「LLM router SOP 校準」NT$ 4,999-11,999 × 8-15 客戶 + 「V4-Flash 對接 sprint」consulting NT$ 30,000-80,000 flat × 1-2 客戶 / 月）。
- **競品弱點**：XenoSpectrum / Developers Digest / OpenRouter / BenchLM 為英文 spec 對照；DeepSeek 官方為模型 note；「V4-Flash × 台灣 agentic coding stack A/B」中文首篇 = zero 供給、T+3 為 first-mover 窗、Composer 3 GA 前收單窗。
- **切入建議**：週三 (8/5) 22:00 UTC+8 前發中文首篇「DeepSeek V4-Flash-0731 T+3 × 台灣 5-20 人 agentic coding stack A/B benchmark SOP（+ Terminal Bench 復現 + verbose 疊加因子 + Cursor / Devin / Claude Code router 加入決策 + 六方 low-tier 對照 + 中國模型合規 checklist）」+ Loom 12-18 分鐘 SOP + 5 位 CTO DM 試投→拿 3-5 個 audit 客戶 NT$ 60,000-200,000。

### 點子 4：「刑事局 8 月詐騙統計改版 T-14 × 台灣防詐 SaaS rubric 校準 SOP」中文首篇 🆕

- **痛點來源**：刑事局 7/20 公告 8 月改版詐欺統計 + 「電信網路詐欺」/「非電信網路詐欺」/「假性財產犯罪」三分 + 165 打詐儀錶板 dashboard 需重新校準 rubric + 台灣防詐 SaaS 現有「即時追蹤」stack 面對「舊分類漂亮下修但客戶會問是不是我漏收」+ GSMA MID+ × 台灣詐防 API mini SaaS 的 narrative 需加「電信網路詐欺占比會下修 = MID+ 對防詐 KPI 貢獻更易被看見」+ 中文快訊供給為 zero + T-14 為改版上路前極限窗。
- **目標客群**：台灣 SME 銀行 / 保險 / 電商 fraud team（150-400 家）+ 對「打詐儀錶板 rubric 校準」有 compliance 壓力的 CIO / CISO（200-400 位）+ 對「GSMA MID+ × 台灣詐防 API mini SaaS」有需求的 一人 SaaS 提供商（100-300 位）+ 想接「詐防 dashboard 校準」外包的 一人顧問（80-200 位）。
- **技術複雜度**：3/5（現有 dashboard rubric 「詐欺總量」拆為「電信網路 / 非電信網路 / 假性財產」三維 + 165 打詐儀錶板 API 對接 + 業別分類 (金融 / 電商 / 電信 / 遊戲) 對映 + 6 月財損降 47% baseline + 假性財產分離對「電信網路詐欺占比」的統計干擾修正 + GSMA MID+ 對防詐 KPI 貢獻對映）。
- **預估 MRR**：NT$ 50,000-160,000（audit sprint NT$ 15,000-40,000 × 3-5 客戶 + monthly「詐防 dashboard rubric 校準」SOP NT$ 3,999-9,999 × 8-15 客戶 + 「刑事局改版 × MID+ 整合」consulting NT$ 25,000-70,000 flat × 1-2 客戶 / 月）。
- **競品弱點**：中時 / ETtoday / SETN 為新聞層報導無 rubric SOP；「刑事局 8 月改版 × 台灣防詐 SaaS rubric 校準」中文首篇 = zero 供給、T-14 為 first-mover 中間窗。
- **切入建議**：週四 (8/6) 22:00 UTC+8 前發中文首篇「刑事局 8 月詐騙統計改版 T-14 × 台灣防詐 SaaS rubric 校準 SOP（+ 三類拆分模板 + 165 儀錶板對接 + 業別分類 + MID+ KPI 對映 + 客戶溝通 talking points）」+ Loom 6-10 分鐘 SOP + 5 位 CIO / CISO DM 試投→拿 3-5 個 audit 客戶 NT$ 50,000-160,000。

## 🧰 工具堆疊更新

- **MCP server 部署 stack 由 stateful 移向 stateless / edge**：MCP 2026-07-28 spec 正式版之後，Cloudflare Workers ($5/月 flat 含 10M req)、Vercel Fluid、AWS Lambda 都能跑 MCP server；一人 SaaS 開 MCP integration 從 $20-50/月 VPS + supervisor 掉到 $5/月 flat；registry 上架 (smithery.ai / mcp.directory / Anthropic 官方 registry) 為 discovery layer；TS + Python SDK 破 10 億累計下載 = 生態穩定；MCP Apps extension 讓 chat 內 render UI 為新加分 wedge；Enterprise-Managed Authorization stable + Anthropic / Microsoft / Okta 首波支援 = enterprise 對接進場。台灣 5-20 人 vertical SaaS：7-14 天內把 API 包 MCP server 上架 registry 是 first-mover 窗。
- **LLM low-tier 六方對照定型 (2026-08-04 基準)**：DeepSeek V4-Flash-0731 $0.14/$0.28 (verbose 3.4× 實質) × GPT-5.6 Luna $0.20/$1.20 × Gemini 3.6 Flash $1.50/$7.50 × Sonnet 5 promo $2/$10 (T-27 8/31 到期) × GPT-5.6 Terra $2/$12 × Opus 5 $5/$25；agentic coding / terminal 首選 V4-Flash；general chat / summarize 保持 Luna；長 reasoning / 高精度 Opus 5；Sonnet 5 促銷倒數需在 8/31 前規劃遷移。
- **AI 訂閱補助白名單影響 (台北市青年 8/1 起)**：ChatGPT / Gemini / Claude / Canva / Adobe / Midjourney / Copilot / NotebookLM / Notion AI / Grammarly / Speak 為政府直補白名單；本土 SaaS 未進 = 台北青年 CAC 補助拉力缺；聯合行銷 wedge：AI 培訓機構 (先修學分) + 訂閱代辦 (協助訂閱申請) + 白名單 SaaS 台灣代理 (affiliate) 三方組合。

## ⚡ 今日行動建議

- [ ] **08:30 UTC+8 台股開盤即時記錄大盤 / 台積電走勢**（成本 30 分鐘、產出 「大盤 vs TSMC divergence 觸發線」dashboard 新資料源）
- [ ] **20:00 UTC+8 前發「台北市青年 AI 工具補助 8/1 3 步驟一站式 SOP」中文首篇 + affiliate link 佈設 + DM 5 家培訓機構 / 白名單代理**（預期成本 3-4 小時、產出 3-5 個 audit lead NT$ 50,000-180,000 + affiliate 底流量）
- [ ] **週三 (8/5) 22:00 UTC+8 前發「MCP 2026-07-28 stateless T+7 × 台灣 vertical SaaS 7 天 sprint」中文首篇 + GitHub template repo public**（預期成本 5-7 小時、產出 3-5 個 audit lead NT$ 60,000-220,000）
- [ ] **週三 (8/5) 22:00 UTC+8 前發「DeepSeek V4-Flash-0731 T+3 × 台灣 agentic coding stack A/B benchmark SOP」中文首篇**（預期成本 4-5 小時、產出 3-5 個 audit lead NT$ 60,000-200,000）
- [ ] **週四 (8/6) 22:00 UTC+8 前發「刑事局 8 月詐騙統計改版 T-14 × 台灣防詐 SaaS rubric 校準 SOP」中文首篇**（預期成本 3-4 小時、產出 3-5 個 audit lead NT$ 50,000-160,000）
- [ ] **本週前**：完成 Sonnet 5 promo T-27 (8/31) 前 Anthropic bill 治理 audit 名單、DM 亞灣超算 BD 拉估價、232 條款 8 月中決策準備 dashboard 觸發線

## ⏳ 待觀察

- **8/4 (今日) 台股開盤 vs 台積電走勢**：大盤延續反彈但 TSMC 個股回調的背離是否擴散；今日開盤為訊號日
- **Trump AI EO 8/1 deliverable official document 公開時程**：「covered frontier model」定義 + 自願性 30 天 pre-release framework 正式文件何時公開；8 月中前為觀察 + 律所 memo 對映窗
- **鴻海亞灣超算 Visionbay.ai 實際定價 + 排隊順位公開**：T+4 未公開；8 月內若釋出「pay-per-hour」定價 → 台灣 solo AI SaaS 立即決策窗
- **Cursor Composer 3「Vega」公開 rollout 具體日期**：leaked checkpoint 顯示 6 variants + 5 段 quota slugs 已進 internal rollout；公開 GA 為 T+4 週後首要觀察
- **半導體 232 條款第二階段稅率決策**：8 月中窗；若成熟製程 >15% → 台積電 / IC 設計 / 封測 24h audit 觸發窗
- **Sonnet 5 promo T-27 8/31 UTC 過期**：$2/$10 → $3/$15 flat 50% + tokenizer 20-35% 實質；27 天倒數為 Anthropic bill 遷移最後窗
- **GSMA Open Gateway 三大電信 API 定價與流量限制官方公告**：TWCA 統一介接為 gatekeeper；SME 銀行 / 保險 / 電商 pay-per-call 定價為 8 月關鍵 leverage
- **刑事局 8 月詐騙統計改版正式上路日**：T-14 內；上路後 165 打詐儀錶板 dashboard 新分類資料為 GSMA MID+ KPI 對映關鍵
- **DeepSeek V4-Pro 公開 GA + V4 Ultra 傳言**：V4-Flash-0731 為 preview only；V4-Pro 何時公開 + Ultra 是否 8 月中前發布 = LLM 六方對照再校準

[^mcp-apps]: MCP Apps 是 MCP 2026-07-28 spec 內正式化的 extension，允許第三方 app 在 Claude / ChatGPT / VS Code Insiders / Goose 等 host 的 chat 視窗內直接 render 互動式 UI（表單、圖表、dashboard、design canvas 等），底層以 iframe sandbox 加 postMessage 交換訊息並要求使用者明示授權；官方 launch partners 有 Amplitude、Asana、Box、Canva、Clay、Figma、Hex、monday.com、Slack 等 9 家。

[^fake-financial-crime]: 「假性財產犯罪」是台灣刑事局 2026 年 8 月統計改版新增的分類，用來把公司交易糾紛、親友財務爭議、債務不履行與契約糾紛等在案情尚未釐清前先剝離出「詐欺」欄位，避免拉高整體詐騙統計、扭曲犯罪趨勢判讀；相關案件另行歸類追蹤，165 打詐儀錶板需依此重新校準指標。

[^section-232]: 232 條款出自美國《1962 年貿易擴張法》第 232 節，授權美國總統以國家安全為由對進口商品加徵關稅或設配額。2026 年 1 月 15 日對進口半導體、設備與衍生產品的第一階段 25% 稅率已生效；第二階段的稅率、涵蓋範圍與時程仍待美國商務部公告，是 8 月中對台灣半導體供應鏈的重要決策變數。

[^terminal-bench]: Terminal Bench 是評估 LLM 在真實 shell / terminal 環境下完成 agentic 任務（檔案操作、多步驟指令、debug、build & test 迴圈）的公開 benchmark；2.1 版擴充題目數量與難度分層，成為衡量 agentic coding 與 terminal automation 能力的主流指標之一，分數越高代表模型越能自行完成端到端的 CLI 任務。

[^colossus]: Colossus 指 xAI（Elon Musk 旗下）位於美國田納西州 Memphis 的巨型 GPU 訓練叢集，2024–2025 年間陸續擴充到十萬張以上 Nvidia H100 / H200 級別 GPU，是目前對外揭露規模最大的單一 AI 訓練站之一，也常被外部 frontier lab 租用做大規模 pretrain。

[^kimi-k25]: Kimi K2.5 是中國 Moonshot AI 於 2026 年釋出的開源長 context frontier model，因權重開放、agentic 任務表現不錯，被多家團隊拿來當作 fine-tune 或 continue-pretrain 的起點；隨著各家逐步自建資料與訓練管線，會轉為「自主 pretrain frontier」以擺脫對 base model 的依賴。

## 📚 引用來源

1. [Model Context Protocol Blog — The 2026-07-28 Specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/) — 2026-07-28
2. [Claude blog — MCP 2026-07-28 spec: stateless core, coming to Claude](https://claude.com/blog/bringing-mcp-2026-07-28-to-claude) — 2026-07
3. [Appwrite — What's new in the MCP 2026-07-28 specification](https://appwrite.io/blog/post/mcp-goes-stateless-in-the-2026-07-28-specification) — 2026-07
4. [Netlify — MCP goes stateless and extensible](https://www.netlify.com/blog/mcp-goes-stateless-and-extensible/) — 2026-07
5. [MCP.Directory — The Stateless Release Candidate Explained](https://mcp.directory/blog/mcp-2026-07-28-release-candidate) — 2026-07
6. [Stacktree — MCP 2026-07-28 spec: what changed, what breaks](https://stacktr.ee/blog/mcp-2026-spec-changes) — 2026-07
7. [Alpic AI — MCP Apps Goes Official Claude ChatGPT Support](https://alpic.ai/blog/mcp-apps-goes-official-claude-chatgpt-support) — 2026-07
8. [Digital Applied — Anthropic MCP Apps Interactive UIs Inside Claude](https://www.digitalapplied.com/blog/anthropic-mcp-apps-interactive-ui-claude-guide) — 2026
9. [XenoSpectrum — DeepSeek V4 Flash 0731 Launches Public Beta with Price Held at $0.14](https://xenospectrum.com/en/deepseek-v4-flash-0731-pricing/) — 2026-07-31
10. [Developers Digest — DeepSeek V4 Flash 0731 The Official Release Benchmarks and How to Run It in OpenCode](https://www.developersdigest.tech/blog/deepseek-v4-flash-0731-opencode-guide) — 2026-07-31
11. [Cosmic JS — DeepSeek V4 Flash Benchmarks Pricing Verdict](https://www.cosmicjs.com/blog/deepseek-v4-flash-benchmarks-pricing) — 2026-07
12. [OpenRouter — DeepSeek V4 Flash API Pricing Benchmarks](https://openrouter.ai/deepseek/deepseek-v4-flash) — 2026-07
13. [BenchLM — DeepSeek V4 Flash Benchmarks & Pricing August 2026](https://benchlm.ai/models/deepseek-v4-flash) — 2026-08
14. [INSIDE — 最高補助 8,000 元 台北市 8/1 起開放青年 AI 工具補助計畫](https://www.inside.com.tw/article/41985-taipei-youth-ai-subsidy.md) — 2026-07
15. [104 職場力 — 北市青年 AI 工具補助 ChatGPT Claude 最高 4000 元](https://blog.104.com.tw/taipei-youth-ai-tool-subsidy-2026/) — 2026
16. [ABMedia 鏈新聞 — 台北市青年 AI 工具補助 最高 8,000 元 ChatGPT Claude Gemini](https://abmedia.io/taipei-city-youth-ai-subscription) — 2026-07
17. [BlockTempo — 台北市 35 歲以下青年補助 AI 工具最高 4000 元 8/1 開跑申請步驟](https://www.blocktempo.com/taipei-youth-ai-subsidy-chatgpt-claude-subscription-application-guide-2026/) — 2026-07
18. [華視 — 北市青年局推 AI 工具補助 每年最高 4000 元](https://news.cts.com.tw/cna/local/202607/202607293061080.html) — 2026-07-29
19. [Yahoo 新聞 — 北市青年 AI 方案 8 月開跑 ChatGPT Gemini 都有補助 最高可領 8 千元](https://tw.news.yahoo.com/%E5%8C%97%E5%B8%82%E9%9D%92%E5%B9%B4ai%E6%96%B9%E6%A1%888%E6%9C%88%E9%96%8B%E8%B7%91-chatgpt-gemini%E9%83%BD%E6%9C%89%E8%A3%9C%E5%8A%A9-%E6%9C%80%E9%AB%98%E5%8F%AF%E9%A0%988%E5%8D%83%E5%85%83-075742769.html) — 2026-07-29
20. [ETtoday — 台股收漲 266 點 台積電跌 55 元至 2370](https://finance.ettoday.net/news/3212399) — 2026-08-03
21. [Yahoo — 加權指數 ^TWII 走勢圖](https://tw.stock.yahoo.com/quote/%5ETWII) — 2026-08-03
22. [Yahoo — 台積電 2330.TW 走勢圖](https://tw.stock.yahoo.com/quote/2330.TW) — 2026-08-03
23. [中時 — 詐騙統計 8 月大改版 刑事局校正增列假性財產犯罪](https://www.chinatimes.com/realtimenews/20260720002277-260402) — 2026-07-20
24. [ETtoday — 刑事局攜手遠東銀攔截 5.5 億詐團匯款 6 月詐騙財損金額降 47%](https://www.ettoday.net/news/20260720/3204247.htm) — 2026-07-20
25. [SETN — 最新打詐成果曝光 6 月財損狂降 47% 刑事局跨域聯防阻詐 5.5 億](https://www.setn.com/news/1875295) — 2026-07-20
26. [iThome — 強化金融防詐 臺灣行動實名認證 2026 升級 MID Plus](https://www.ithome.com.tw/news/177027) — 2026
27. [CIO Taiwan — 三大電信開放 API 串聯金融業 TWCA 建構行動身分認證生態](https://www.cio.com.tw/115972/) — 2026
28. [經濟日報 — 232 條款 台灣取得最惠國待遇為何比對等關稅更關鍵](https://money.udn.com/money/story/124512/8921707) — 2026
29. [台美關稅談判平台 — 2026 年 1 月 14 日 232 條款關稅措施相關要點整理 Proclamation 11002](https://twustariff.ey.gov.tw/page/tariff/usa-order/13) — 2026-01
30. [勤業眾信 — 半導體 232 條款稅率 25% 供應鏈產銷雙向調整](https://www.deloitte.com/tw/tc/about/press-room/pr20260115-tax.html) — 2026-01-15
31. [華視 — 232 半導體稅率尚未出爐 鄭麗君續爭取業者權益](https://news.cts.com.tw/cna/politics/202605/202605283037135.html) — 2026-05-28
32. [VentureBeat — Devin 2.0 is here Cognition slashes price of AI software engineer to $20 per month from $500](https://venturebeat.com/programming-development/devin-2-0-is-here-cognition-slashes-price-of-ai-software-engineer-to-20-per-month-from-500) — 2026
33. [eesel — Devin Fusion pricing what Cognition's AI engineer costs](https://www.eesel.ai/blog/devin-fusion-pricing) — 2026-06-29
34. [Digital Applied — Zapier vs Make vs n8n 2026 Automation Comparison](https://www.digitalapplied.com/blog/zapier-vs-make-vs-n8n-2026-automation-comparison) — 2026
35. [Cipher Projects — n8n vs Zapier Pricing & Comparison 2026 Exact Costs Plans and Features](https://www.cipherprojects.com/blog/posts/n8n-vs-zapier-automation-tool-comparison/) — 2026
36. [AMD IR — AMD and Anthropic Announce Strategic Partnership to Deploy Up to 2 Gigawatts of AMD Instinct MI450 Series GPUs](https://ir.amd.com/news-events/press-releases/detail/1292/amd-and-anthropic-announce-strategic-partnership-to-deploy-up-to-2-gigawatts-of-amd-instinct-mi450-series-gpus) — 2026-07-22
37. [Yahoo Finance — AMD to supply Anthropic with 2 gigawatts of Instinct MI450 GPUs invest up to $5 billion](https://finance.yahoo.com/technology/ai/articles/amd-supply-anthropic-2-gigawatts-153858353.html) — 2026-07
38. [Anthropic — Introducing Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5) — 2026
39. [Techtimes — Cursor Trains First Frontier Model From Scratch on Colossus 1.5 Trillion Parameters](https://www.techtimes.com/articles/318974/20260624/cursor-trains-first-frontier-model-scratch-colossus-15-trillion-parameters.htm) — 2026-06-24
40. [The Hacker News — NVIDIA Forms 37-Member Open Secure AI Alliance and Open-Sources NOOA Framework](https://thehackernews.com/2026/07/nvidia-forms-37-member-open-secure-ai.html) — 2026-07-28
