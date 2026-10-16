---
title: 每日創業情報 — 2026-10-17
date: 2026-10-17
tags: 創業情報, AI 產業, SaaS, 台灣
summary: 週六 iPhone Duo 預購 T+1 + TSMC Q3 法說 beat T+2 + 10/23 開賣 T-6 + Agent Builder T-44 倒數 + Haiku 5.5 T+10 + GPT-6 Astra T+44 + Anthropic IPO T+23 週末 build day。
keywords: iPhone Duo 預購 10月16日 搶空 售罄 Apple myfone eSIM, iPhone Duo 10月23日 開賣 中華電 500 間據點 Foxconn 良率 60%, TSMC Q3 2026 法說 beat Q4 財測 58% YoY 2027 CoWoS 2.73M CapEx 78B, OpenAI Agent Builder EOL 11月30日 Agents SDK migration code export 1:1, Evals read-only 10月31日 reusable prompts 下線 reusable prompts, Haiku 5.5 T+10 shadow eval 第 2 週收尾 Terminal-Bench 39.2% Over-refusal bug, GPT-6 Astra 9月3日 release Daybreak OSWorld 72.6% 10/50 pricing, Shopify UCP legacy MCP 6月15日 EOL agent profile 2026-01-11 Spring 26 self-serve, Anthropic IPO T+23 期中選舉 11月3日 S-1 flip EDGAR Morgan Stanley Goldman Sachs, 週末 build day 一人 SaaS iPhone Duo 10/23 開賣 補貨 push notification MVP
---

# 每日創業情報 — 2026-10-17

## 🎯 今日 TL;DR

- **週六 Day 1 週末 + iPhone Duo 預購 T+1 日 + TSMC Q3 法說 beat T+2 + iPhone Duo 開賣 T-6（10/23）+ Apple HomeView Day 4 + Haiku 5.5 T+10（已釋出 10/7）+ Agent Builder T-44（11/30 EOL）+ Evals T-14（10/31 read-only）+ GPT-6 Astra T+44 + Anthropic IPO T+23** — 9 軸疊加 = 「iPhone Duo 預購 T+1 盤後 × 10/23 開賣 T-6 倒數 × Agent Builder EOL T-44 build day」3 軸共振的週末「單人 build day」
- **🔄 iPhone Duo 預購 T+1 日 — 10/16 20:00 Apple 台灣 + Taiwan Mobile myfone 同步開放的「首批 <20,000 台 vs 近百萬預約 ~50:1 缺口」已進入 T+1 消化期；eSIM-only 設定 + Star White 60% / Night Sky 40% + Foxconn 良率 60% + 1,000 萬 vs 600 萬 Foxconn 年目標缺口 + 10/23 中華電 500 間據點開賣 T-6 倒數** — 週六 Day 1 進入「補貨時程 FAQ 寫定 × 10/23 開賣當日各通路首波貨源到位預測 × eSIM provisioning 排隊秒數指南 push」3 軸收尾；黃牛溢價為下週新 trigger
- **🔄 TSMC Q3 法說 beat T+2 — 10/15 法說結果 Q3 EPS NT$29.43 beat 元大 29.03 + 淨利 NT$7,631 億 YoY +68.7% + 毛利 66.4% + Q4 財測 US$52.3–54.3B（中值 YoY +58%、QoQ +14%）+ 高盛 TP 上調 2,330 元 + Aletheia Capital TP 2,400 元 + 2027 CoWoS[^cowos] 預估上修至 217.1 萬片 + 2027 CapEx 可能上看 US$78B + 海外廠毛利稀釋 3–4%** — 週六 Day 1 build day：「法說 beat 後 bull / bear 雙版 pack 收尾 × 2027 CoWoS 2.17M 修訂落實度 × 蘋概週末盤後議題拆解」3 軸
- **🔄 Agent Builder → Agents SDK 遷移 T-44 倒數 + Evals read-only T-14 + reusable prompts 11/30 同下線 — code export「starting point only」不保證 1:1 + multi-agent branching / handoffs 需人工重驗 + ChatKit 保留 + Responses API 不下線** — 週六 Day 1 進入「workflow 清單全驗 code export 行為 1:1 收尾 + 寫顧問服務落地頁 + 1 篇遷移 checklist blog 草稿」3 階段；本週剩 2 日工作時間（週日為緩衝）
- **🔄 Haiku 5.5 T+10 — 10/7 已正式釋出 + Vals Index 排名 #16 of 45（54.31%）+ OSWorld[^osworld] 72.4%（vs Haiku 4.5 15.7%）+ Over-refusal bug 待修補 + Terminal-Bench 39.2% + 1M context + 128K output + $0.10/M in、$0.50/M out（≤100K）＄$0.50/M in、$2.50/M out（>100K）＄cache reads $0.01/M** — 第 2 週 shadow eval 收尾：甜蜜點 = 「短 context + 分類/摘要/轉譯 subagent + ≤100K」已確認；禁區 = 「agentic coding + Terminal 操作 + >100K 長 context」已確認；T+10 後可開始切 production 的分類類 workflow
- **🆕 GPT-6 Astra T+44（9/3 釋出）+ Daybreak 已開放至 ChatGPT 付費 + OSWorld 2.0 72.6%（vs GPT-5.6 Sol 65.7%）+ 1,050K context + 128K output + 定價 $10 in / $50 out per 1M tokens + cached reads $1 + cache writes $12.50 + 首個 Critical cybersecurity rating** — 對一人 SaaS：**「複雜 Agent 核心推理」轉用 Astra + 「分類 / 摘要 subagent」用 Haiku 5.5 → 用 Astra 一半的錢換 Sonnet 5.5 等級推理**；注意：此為 2026 Q4 二選一「貴但強」vs「便宜但 refusal 高」
- **🔄 Shopify UCP[^ucp]: legacy Storefront MCP 已於 6/15 EOL + 新 endpoint `/api/ucp/mcp` + UCP 由 Shopify + Google 共制 open standard + Technical Council 已擴至 10 席（新增 Amazon、Meta、Microsoft、Salesforce、Stripe）+ Spring '26 Edition 已開放全開發者 self-serve + Google 推 Universal Cart 擴至 YouTube Shopping 廣告 + 加拿大／澳洲為下一波擴張** — 對台灣 SME 跨境電商：**UCP 已進「全開發者 self-serve」階段 → 一人 SaaS 的 MCP → UCP pipeline 試裝甜蜜點已過半 → 下週可直接 integrate Google Marketing**；台灣 Shopify 商家本週開始可做 PoC
- **🔄 Anthropic IPO T+23 Reuters「期中選舉 11/3 後路演」口徑續行 + S-1 confidential 自 6/1 起 + 承銷 Goldman / JPM / MS / Citigroup + 估值 US$965B（Series H）+ 公開 S-1 flip EDGAR[^edgar] 仍未見** — 本週 Day 6 進入「期中選舉 11/3 → S-1 flip 可能介於期中選舉後至 11/9 前 → IPO 11/9 目標」3 階段；週末無新進展

## 🔄 昨日追蹤

- 🔄 **TSMC 法說 T+1 → T+2**：10/16 盤後反應窗結束；本週蘋概／AI 伺服器類漲幅已入帳；下週關注點移至外資第二輪 TP 上修 + Q4 財測落實度
- 🔄 **iPhone Duo 預購 T-0 → T+1 日**：10/16 20:00 Apple 台灣 + myfone 開放已結束；重點移至「補貨時程 + 10/23 中華電 500 間據點首波貨源到位」10/17 Day 1 收尾
- 🔄 **Apple HomeView 10/13 Day 3 → Day 4**：「無 App Store + iOS SDK homeOS header 零結果」已確認；週六 Day 4 wrapper 機會窗口進入「11 月 docs 更新前觀望期」；本週不再加碼研究
- 🔄 **Haiku 5.5 T+9 → T+10**：第 2 週 shadow eval 收尾日；Terminal-Bench 39.2% 已確認（Sonnet 5.5 70.6%）；T+10 後可開始切 production 的分類類 workflow（不切 agentic coding）
- 🔄 **SWE-2 pricing opaque T+6 → T+7 + Cognition 續未公告 per-token 單價**：per-project ROI 審計商機續行；本週無新價格訊號
- 🔄 **Agent Builder 11/30 T+45 → T+44 + Evals 10/31 T+15 → T+14 + reusable prompts 11/30 同下線**：workflow 清單全驗 code export 行為 1:1 Day 5 收尾日
- 🔄 **Anthropic IPO 11/9 T+24 → T+23**：Reuters 口徑續行；S-1 flip（EDGAR）仍為先行觀察訊號；週末無新進展
- 🔄 **大立光 FAU[^fau] 遞延訊號 Day 6**：TSMC 法說 CoWoS 2027 預估上修至 217.1 萬片 → 大立光 FAU 2027 中量產敘事獲法說結果正面對齊續行

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🔄 iPhone Duo 預購 T+1 日 — 10/16 20:00 Apple 台灣 + Taiwan Mobile myfone 同步開放已結束；首批 <20,000 台 vs 近百萬預約 ~50:1 缺口 + eSIM-only 設定 + Star White 60% / Night Sky 40% + Foxconn 良率 60% + 1,000 萬 vs 600 萬 Foxconn 下修年目標缺口 + 新日興／鴻海合資吃鉸鏈 65% + 10/23 中華電 500 間據點開賣 T-6 倒數 + 中國大陸黃牛叫價 9.9 萬元人民幣 + 京東自營預約人數 >120 萬** | [ETtoday — iPhone Duo 預購「全台首批不到 2 萬台」](https://www.ettoday.net/news/20261015/3255219.htm)、[NOWnews — iPhone Duo 10/16 預購 頂規 2TB NT$118,900](https://www.nownews.com/amp/news/6879482)、[今周刊 — iPhone Duo 預購 10/16 售價規格 6 優勢 4 缺點](https://www.businesstoday.com.tw/article/category/183015/post/202610150023/)、[Apple 台灣 — 購買 iPhone Duo](https://www.apple.com/tw/shop/buy-iphone/iphone-duo)、[udn — 折疊 iPhone 量產卡關 牽動蘋果今年整體手機銷售量](https://udn.com/news/story/6811/9769184)、[cnYES — iPhone Duo 預售訂單大幅溢價成交 預約購買者已近百萬](https://hao.cnyes.com/post/267410)、[gizchina — iPhone Duo Preorders Open Friday Will It Be Hard to Get](https://www.gizchina.com/apple/iphone-duo-preorders-open-friday-will-it-be-hard-to-get)、[unwire — iPhone Duo 中國黃牛預售瞬間抢空](https://unwire.hk/2026/09/15/iphone-duo-china-scalper/mobile-phone/) | 週六 Day 1 補貨時程 FAQ 寫定：「iPhone Duo T+1 × 補貨時程 × 10/23 中華電 500 間據點首波貨源到位 × eSIM provisioning 排隊秒數指南 × Foxconn 良率 60% × 1,000 萬 vs 600 萬下修 × 黃牛溢價 ~1.3x 預期 × 新日興 65% × 大立光 FAU + 2027 CoWoS 2.17M 連鎖 × Star White 60% / Night Sky 40%」10 軸；per-project「補貨 FAQ × 10/23 開賣當日首波貨源精算 × eSIM provisioning 指南 × 黃牛 vs 原廠溢價觀察 × 蘋概週末盤後整理」5 合一 vertical push notification NT$ 60K–150K | 機會：**「iPhone Duo 預購 T+1 × 補貨時程 × 10/23 開賣 T-6 × eSIM provisioning 指南 × 黃牛溢價 × 蘋概週末追蹤 × 新日興 65% × 大立光 FAU × 2027 CoWoS 2.17M × 高盛 TP 2,330 × 10/23 中華電 500 間據點」11 合一 build day pack NT$ 80K–200K**；甜蜜點 = 10/17 09:00 補貨時程 FAQ + 15:00 10/23 開賣當日首波貨源精算 + 20:00 eSIM provisioning 指南；威脅：首批 <20,000 台 vs 近百萬預約 ~50:1 缺口 → 若 push 只喊「10/23 搶首批」不提補貨與二波，用戶 unsub 風險提高；黃牛溢價為下週雙面刃 trigger |
| **🔄 TSMC Q3 法說 beat T+2 — 10/15 法說結果已入盤後反應期尾聲：Q3 EPS NT$29.43 beat 元大 29.03 + 淨利 NT$7,631 億 YoY +68.7% + 毛利 66.4%（財測 65–67% 中段）+ Q4 財測 US$52.3–54.3B（中值 YoY +58%、QoQ +14%）+ Q4 毛利 65–67% + Q4 OpM 56.5–58.5% + 海外廠毛利稀釋擴大至 3–4%（原估 ~2%）+ 高盛 TP 上調 2,330 元 + Aletheia Capital TP 2,400 元 + 2027 CoWoS 預估上修至 217.1 萬片（原估約 2.49M → 高盛新估 2.17M）+ 2027 CapEx 可能上看 US$78B + 2027 N2 110K/月 + 2027 製程報價續漲 5–10% + 高盛 CoWoS 營收 2026、2027 分別 YoY +102.5% / +81.2%** | [TSMC 6-K 財報 — 3Q26 Earnings with Guidance](https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000726/a3q26e_withguidancexfinal.htm)、[Benzinga — Taiwan Semi Q3 2026 Full Earnings Call Transcript](https://www.benzinga.com/news/26/10/62373492/taiwan-semiconductor-reports-q3-2026-results-full-earnings-call-transcript)、[Averin — TSMC Q3 2026 Net Profit NT$763.1B Beats Q4 Guidance](https://averin.com/en/journal/ruslan-averin-tsmc-tsm-q3-2026-earnings-results-ai-demand-guidance)、[Kaohoo International — TSMC Sees Record Quarterly Revenue in 3Q26 AI Demand](https://www.kaohooninternational.com/?p=592325)、[TrendForce — TSMC September Revenue Record Quarter](https://www.trendforce.com/news/?p=65041)、[TechNews — 高盛關注台股 AI 供應鏈 台積電 聯發科 日月光投控給予積極評價](https://technews.tw/?p=1408447) | 週六 Day 1 build day：「法說 beat 後 bull / bear 雙版 pack 收尾 × 2027 CoWoS 2.17M 修訂落實度 × 蘋概週末盤後議題拆解」3 軸；per-project「法說 beat × Q4 財測 +58% YoY × 毛利 66.4% × 淨利 YoY +68.7% × 海外廠 3–4% 稀釋 bear 支點 × 2027 CoWoS 2.17M × 2027 CapEx $78B × 高盛 TP 2,330 × Aletheia TP 2,400 × 蘋概連鎖 × 大立光 FAU」11 合一 post-earnings audit NT$ 100K–280K | 機會：**「TSMC Q3 法說 beat × Q4 財測 +58% × 毛利 66.4% × 淨利 YoY +68.7% × 2027 CoWoS 2.17M × 2027 CapEx $78B × 2nm 110K × 海外廠稀釋 3–4% × 蘋概護城河 × 大立光 FAU 連鎖 × 高盛 TP 2,330 × Aletheia TP 2,400」12 合一週末 build day pack NT$ 120K–320K**；甜蜜點 = 10/17 10:00 法說 beat 整週回顧 pack 定稿 + 14:00 2027 CoWoS 2.17M 修訂落實度 Analysis + 20:00 蘋概週末 push；威脅：海外廠毛利稀釋 3–4% 的中長期毛利侵蝕為「bear case 唯一支點」，若 push 只喊 bull 不提稀釋，法人側讀者會流失 |
| **🔄 數發部 100 億 AI 新創基金進度 + 經濟部 A+ 早期新創補助即將啟動 + 數發部 2026 增購 100 片 GPU 擴充算力池 + 2026 是「臺灣 AI 行動計畫 2.0」最後執行年度 + 經濟部 2026 預算 >NT$460 億用於產業數位轉型與 AI + 30 人以下中小企業補助上限 NT$10 萬** | [TechNews — 百億 AI 基金首年僅投 7,500 萬 數發部公布 5 家獲投新創](https://technews.tw/?p=1520580)、[Uanalyze — 數發部祭百億資金催生 AI 新創已核定 6 案 盼添購 100 片 GPU 擴充算力池](https://uanalyze.com.tw/articles/1078148404)、[Business Next — moda AI startup 100 billion plan](https://www.bnext.com.tw/article/90239/moda-ai-startup-100billion-plan)、[actgsys — 2026 台灣中小企業 AI 補助完整攻略](https://actgsys.com/zh/blog/taiwan-sme-ai-subsidy-guide-2026) | 週六 Day 1 政策追蹤：「百億基金進度 × 7,500 萬注資 vs 100 億 10 年目標 × 2027 後續計畫方向未定 × 30 人以下中小企 AI 補助 10 萬」4 軸；per-project「中小企 AI 補助申請顧問服務 × 數發部 100 片 GPU 算力池申請流程指南 × A+ 早期新創補助 landing page × 2027 計畫 2.0 後續版本政策追蹤」4 合一 vertical consulting NT$ 30K–150K per client | 機會：**「30 人以下中小企業 AI 補助申請顧問 × 數發部 GPU 算力池 × A+ 早期新創補助指南 × 2027 行動計畫 2.0 後續追蹤」4 合一諮詢服務 NT$ 50K–200K per client**；甜蜜點 = 10/17 Day 1 寫 2 篇「30 人以下中小企 AI 補助 10 萬申請指南」+「數發部 GPU 算力池申請流程」+「A+ 早期新創補助即將啟動 FAQ」blog；威脅：100 億基金 10 年內投完 → 首年 7,500 萬進度明顯落後 → 2027 計畫 2.0 後續方向未定可能讓補助連續性斷鏈，需在諮詢時揭露 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🆕 GPT-6 Astra（9/3 釋出 + T+44）+ Daybreak 已開放至 ChatGPT 付費 + OSWorld 2.0 72.6%（vs GPT-5.6 Sol 65.7%）+ 1,050K context + 128K output + 首個 Critical cybersecurity rating** | LLM 旗艦模型 / Agent 核心推理 | 複雜 Agent 核心推理、長 context 任務、cybersecurity 相關敏感應用 | $10/M in、$50/M out、cached reads $1/M、cache writes $12.50/M | vs Claude Opus 4.7 / GPT-5.6 Sol / Gemini 3；差異在「OSWorld 2.0 72.6% 當前最高」+「1,050K context 僅次於 Gemini」+「Critical cybersecurity rating 首個」 | 🟢 複雜 agentic coding、long-horizon planning、security review：切 Astra；🟡 多步 agent orchestration：主推理用 Astra、subagent 用 Haiku 5.5 分流；🔴 短 context 分類／摘要：定價過高，用 Haiku 5.5 更划算；🟡 本週 Day 1 試裝 1 條「主推理 Astra + subagent Haiku 5.5」雙模型 pipeline 比對成本 |
| **🔄 Claude Haiku 5.5（10/7 釋出 T+10）+ 第 2 週 shadow eval 收尾日 + Vals Index #16 of 45（54.31%）+ OSWorld 72.4%（vs Haiku 4.5 15.7%）+ Terminal-Bench 39.2% + Over-refusal bug 待修補 + 1M context + 128K output + effort levels 可調 + AWS Bedrock + LLM Gateway 已上架** | LLM 小模型 / 高頻 subagent | 短 context（≤100K）分類、摘要、轉譯；effort levels 可調推理深度 | $0.10/M in、$0.50/M out（≤100K）；$0.50/M in、$2.50/M out（>100K）；cache reads $0.01/M | vs Haiku 4.5（15.7% OSWorld）；OSWorld 72.4% 跳升 56.7 ppt；Vals Index 54.31% 排名中段；Terminal-Bench 39.2%（Sonnet 5.5 70.6%）→ agentic coding 禁區；Over-refusal bug 待修 → refusal 敏感應用禁區 | 🟢 T+10 後：短 context + 分類／摘要／轉譯類 subagent 切為 production + ≤100K token；🟡 effort levels：先用 low 做分類、high 做摘要；🔴 禁區：agentic coding、Terminal 操作、>100K 長 context、refusal rate 敏感；T+10 完成第 2 週 shadow eval 收尾，下週可開始切大量 subagent 到 production |
| **🔄 Shopify UCP[^ucp] + Spring '26 Edition 已開放全開發者 self-serve + Legacy Storefront MCP 已 6/15 EOL + 新 endpoint `/api/ucp/mcp` + agent profile 版本「2026-01-11」+ Shop Pay 內建 payment handler + Technical Council 擴至 10 席（新增 Amazon、Meta、Microsoft、Salesforce、Stripe）+ Google 推 Universal Cart 擴至 YouTube Shopping 廣告 + 加拿大／澳洲為下一波擴張** | 電商 agent 開放協定 | AI 購物 agent（ChatGPT / Copilot / Claude / Gemini）直接讀商店 catalog + checkout；跨電商平台一致 | 開放協定免費 + Shopify 訂閱費另計 | vs 單用 MCP（UCP 將 MCP 作為 5 種 transport 之一）/ Open Commerce / Checkout Protocol；UCP 差異在「跨電商平台一致 + 原生 MCP transport + Google / Amazon / Meta / Microsoft / Salesforce / Stripe 共制」 | 🟢 用 Shopify 的台灣跨境電商：Spring '26 self-serve 已開放 → 本週 Day 1 試裝 1 條 MCP → UCP pipeline → Claude Code / Agent SDK 讀商店 catalog；🟡 做 cross-platform agent 的 developer：UCP 可當 single integration 替代 N 個商店整合；🔴 非 Shopify 商家：UCP 需等待其他平台採用；下週可整合 Google Marketing / YouTube Shopping |
| **🆕 Smithery 已被 Arcade.dev 收購（8/2026）+ 官方 MCP Registry 已上線 registry.modelcontextprotocol.io preview + API v0.1 frozen + 公開 server >16,967（7/2026 數據）+ Smithery 列 >17,300 MCPs + Glama >37,000 servers + 需 namespace ownership verification** | MCP server registry 治理 | 一人 SaaS 挑選、裝設、治理 MCP server 的中央入口 | 開放免費 + Smithery managed hosting 另計 | vs Glama / mcp.so / 自建；Smithery 的差異在「Arcade.dev 收購後走 managed hosting + billing 商業模式」；官方 Registry 的差異在「namespace ownership verification + 全開放可自驗證」 | 🟢 一人 SaaS 架 MCP server：先註冊到官方 MCP Registry（namespace 要先驗）；🟡 managed hosting：Smithery / Arcade.dev 有優勢；🔴 自建 registry：市場已飽和（>500 個官方 + 17,300 / 37,000 公開 server），不建議；本週 Day 1 試註冊 1 個自家 MCP 到官方 Registry |
| **🔄 Cursor Composer 2.5（5/19 釋出）+ built on Kimi K2.5 + Opus 4.7 等級 coding + 低成本 + Cursor $20/mo + GitHub Copilot $10/mo + GitHub Copilot Coding Agent 3/2026 GA** | AI 編碼 IDE / coding agent | 多檔案 refactor、長時程 coding task、agent 分支工作流 | Cursor $20/mo、GitHub Copilot $10/mo | vs Claude Code / Codex CLI；Cursor Composer 2.5 的差異在「IDE 中整合 agent 分支工作流 + 單一 editor 完成全流程」；GitHub Copilot 的差異在「GitHub 原生工作流 + 價格優勢」 | 🟢 已用 Cursor + 做長時程 refactor task：繼續 2.5 版；🟡 GitHub-heavy workflow + 預算緊：GitHub Copilot $10/mo 划算；🟡 已用 Claude Code / Codex CLI + 不急換 IDE：維持現狀；下週 Day 1 可選一個 side project 試 Cursor Composer 2.5 做 PoC |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：iPhone Duo 10/23 開賣當日首波貨源精算 + eSIM provisioning 指南 push SaaS（T-6 build day 啟動）🆕

- **痛點來源**：10/16 20:00 預購已結束，首批 <20,000 台 vs 近百萬預約 ~50:1 缺口 + 10/23 開賣當日中華電 500 間據點首波貨源分配 + eSIM-only provisioning 新流程讓首次使用者需要排隊 10–60 分鐘 + Foxconn 良率 60% 下 10 月出貨補量存疑；一般 Yahoo 奇摩股市 / 鉅亨 push 只提事後結果，缺「開賣前即時缺口精算 + eSIM 排隊秒數指南」vertical
- **目標客群**：10/23 想搶首批 iPhone Duo 的台灣消費者（估 30 萬人試搶）+ 蘋概股蘋果供應鏈分析師（估 500 人）+ 跨境代購（估 1,000 家）+ 中華電 500 間據點店員（估 1,500 人）
- **技術複雜度**：3/5 — Node.js + Apple 台灣 / myfone / 中華電 structured data scraping（公開 catalog 不涉違規）+ WebSocket push + APNs / FCM + 快取控制避免 scraping 被 ban + eSIM provisioning 流程手動測試
- **預估 MRR**：one-off NT$ 50–100 × 30 萬搶購者 = NT$ 500K–1.5M event-based；若擴展為「蘋果新品預購 + 開賣當日缺口 push」訂閱產品 → NT$ 199/mo × 1,500 用戶 = NT$ 300K MRR
- **競品弱點**：台灣目前無「iPhone 開賣當日各通路首波貨源 + eSIM provisioning 排隊秒數」vertical push；10/16 20:00 預購搶空第 1 波已結束，10/23 開賣是第 2 波機會
- **切入建議**：10/17 Day 1 寫 scraping script + push notification MVP → 10/19 Day 3 跑 1 次預演 + 10/22 Day 6 Dry Run → 10/23 開賣當日：07:00 開賣前 FAQ 定稿 + 09:00 開賣第 1 波「各通路首波貨源到位 + eSIM provisioning 排隊秒數」push + 15:00 第 2 波盤後缺口精算 + 20:00 補貨時程更新 push

### 點子 2：Agent Builder → Agents SDK 遷移顧問服務 + 遷移 checklist blog（T-44 加壓）🔄

- **痛點來源**（接續 10/16 brief 點子 3）：11/30 下線剩 44 天 + 10/31 Evals read-only 剩 14 天 + reusable prompts 11/30 同下線 + code export「starting point only」不保證 1:1 + multi-agent branching / handoffs 需人工重驗 + ChatKit 保留 + Responses API 不下線（部分文章仍混淆）；本週 Day 1 進入「workflow 清單全驗 code export 行為 1:1」收尾日
- **目標客群**：以 Agent Builder 搭建 production agent 的台灣中小企 / SI 顧問案（10–50 人規模）+ reusable prompts 11/30 同下線用戶群 + ChatKit + Responses API 用戶
- **技術複雜度**：2/5 — service business；Agents SDK TypeScript / Python + workflow re-architecture + ChatKit / Responses API 保留部分不動 + 遷移 checklist 可模板化
- **預估 MRR**：N/A（one-off NT$ 60K–200K per client × 2–4 clients / month）；寫 1 篇遷移 checklist blog 可做 lead gen 工具
- **競品弱點**：台灣尚無針對 Agent Builder EOL 的專門顧問；多數 SI 顧問做「新建」而非「遷移」；OpenAI 官方 Migrate from Agent Builder 文件只給技術框架，缺台灣在地整合顧問
- **切入建議**：10/17 Day 1 寫「Agent Builder → Agents SDK 遷移 checklist」blog 草稿（含 ChatKit / Responses API 保留清單 + code export 1:1 驗證模板）→ 10/19 Day 3 完成並發佈 → 10/22 Day 6 landing page + 開放 2–4 個 slot per month → 11/30 EOL 前 1 週關閉接案

### 點子 3：30 人以下中小企業 AI 補助 10 萬申請顧問 + 數發部 GPU 算力池申請指南（Day 1 政策追蹤）🆕

- **痛點來源**：經濟部 2026 預算 >NT$460 億用於產業數位轉型與 AI + 30 人以下中小企業補助上限 NT$10 萬 + 數發部 2026 增購 100 片 GPU 擴充算力池 + 經濟部 A+ 早期新創補助即將啟動；多數台灣中小企業不知道如何申請、不知道哪些 AI 導入可補助、不知道數發部 GPU 算力池如何無／低成本使用
- **目標客群**：30 人以下台灣中小企業（估 50 萬家）+ 想做 AI 工具導入的中小企業（估 10 萬家）+ 早期 AI 新創（估 500 家 within 3 years）
- **技術複雜度**：1/5 — 顧問服務；熟悉經濟部 / 數發部補助申請流程 + AI 工具導入規劃 + 寫申請書
- **預估 MRR**：one-off NT$ 20K–50K per client × 10–30 clients / month = NT$ 200K–1.5M；若做訂閱式「補助申請維護」→ NT$ 2K–5K/mo × 100–500 clients = NT$ 200K–2.5M MRR
- **競品弱點**：台灣有「補助申請顧問」但多數不懂 AI 工具導入規劃；AI 顧問多數不熟悉補助申請；兩者結合的 vertical consulting 空缺
- **切入建議**：10/17 Day 1 寫 3 篇 SEO 導流 blog「30 人以下中小企業 AI 補助 10 萬申請指南 2026」、「數發部 100 片 GPU 算力池申請流程」、「經濟部 A+ 早期新創補助即將啟動 FAQ」→ 10/22 Day 6 開放免費諮詢 slot → 下週起接案

## 🧰 工具堆疊更新

- **🆕 GPT-6 Astra 試裝「主推理 Astra + subagent Haiku 5.5」雙模型 pipeline**：Day 1 試裝 1 條；甜蜜點：複雜 agent 核心推理用 Astra、分類／摘要類 subagent 用 Haiku 5.5；成本比對紀錄明天入帳
- **🔄 Haiku 5.5 T+10 shadow eval 收尾**：第 2 週收尾日；甜蜜點 = 短 context + 分類／摘要 subagent + ≤100K token；禁區 = agentic coding + >100K；下週可開始切 production 的分類類 workflow
- **🔄 Shopify UCP MCP transport pipeline 試裝**：Day 1 試裝 1 條 MCP → UCP 讓 Claude Code / Agent SDK 讀取商店 catalog；台灣跨境電商 Shopify 商店試點目標 1 家；下週可整合 Google Marketing / YouTube Shopping
- **🔄 Agent Builder workflow 全驗收尾 Day 5**：workflow 清單今日 Day 5 收尾日；code export 行為 1:1 驗證完成；下週開始寫遷移 checklist blog + landing page
- **🔄 TSMC 法說 bull / bear 雙版 pack 收尾**：10/15 Q3 beat × Q4 財測 +58% × 毛利 66.4% × 淨利 YoY +68.7% × 2027 CoWoS 2.17M × 高盛 TP 2,330 × Aletheia TP 2,400 × 海外廠 3–4% 稀釋 bear 支點 7 軸；bull / bear 版本缺一不可
- **🔄 iPhone Duo 10/23 開賣 push 寫定 Day 1**：補貨 FAQ + 10/23 開賣當日首波貨源精算 + eSIM provisioning 指南 + 黃牛溢價觀察 4 軸；10/17 Day 1 寫 MVP、10/22 Dry Run、10/23 Live
- **🔄 Smithery / 官方 MCP Registry 註冊試驗**：Day 1 試註冊 1 個自家 MCP 到官方 Registry；namespace ownership verification 流程需試驗
- **🔄 Claude Code / Codex CLI 升級後跟蹤**：昨日已升 Claude Code v2.1.299 + Codex 0.162.1；今日 Day 1 跑 2 條 subagent workflow 比對 token 消耗落實度
- **🔄 Cursor Composer 2.5 side project PoC**：Day 1 選 1 個 side project 試 Composer 2.5；若 token / 時間成本比 Claude Code 划算 → 考慮加入主線工具堆疊

## ⚡ 今日行動建議

- [ ] iPhone Duo 10/23 開賣當日 push MVP Day 1 寫定：scraping script + WebSocket push + APNs / FCM + eSIM provisioning 指南模板（預期 3 小時）
- [ ] Agent Builder → Agents SDK 遷移 checklist blog Day 1 草稿：ChatKit / Responses API 保留清單 + code export 1:1 驗證模板 + 11/30 EOL 時程 FAQ（預期 2.5 小時）
- [ ] 30 人以下中小企業 AI 補助 10 萬申請指南 blog Day 1 草稿 + 數發部 GPU 算力池申請流程 Day 1 草稿（預期 2 小時）
- [ ] GPT-6 Astra + Haiku 5.5 雙模型 pipeline 試裝 1 條：主推理 Astra + 分類 subagent Haiku 5.5；比對成本 / 時間 / 品質（預期 2 小時）
- [ ] Shopify UCP Spring '26 self-serve 試裝 1 條 MCP → UCP pipeline → Claude Code 讀取商店 catalog（預期 2 小時）
- [ ] 官方 MCP Registry 試註冊 1 個自家 MCP + namespace ownership verification 試驗（預期 1 小時）
- [ ] 寫 1 篇中文 build-in-public：「iPhone Duo 10/23 開賣 push 48 小時 build log」或「Agent Builder → Agents SDK 遷移 checklist」

## ⏳ 待觀察

- 10/23 09:00：iPhone Duo 中華電 500 間據點開賣；Foxconn 良率 60% 下 1,000 萬 vs 600 萬年目標缺口的「首波貨源到位度」訊號 — T-6 倒數
- 10/31：OpenAI Evals read-only — T-14 倒數；是否可延期尚無官方口徑
- 11/3：美國期中選舉 — Anthropic IPO 路演起點前的最後政治 trigger
- 11/9：Anthropic IPO 期中選舉後路演可能日 — S-1 flip 公開（EDGAR）為先行觀察訊號 T+1
- 11/30：OpenAI Agent Builder + reusable prompts 11/30 EOL — T-44 倒數
- Apple HomeView 10/13 Day 4 後：11 月 Apple 開發者 docs 是否補 HomeKit matter.js 2 / Siri Shortcut 新 widget API；若無，智慧家庭 wrapper 機會窗口關閉
- Haiku 5.5 Over-refusal bug：Anthropic 修補時程、Artificial Analysis AutomationBench-AA 重測結果
- Shopify UCP 加拿大／澳洲擴張時程 + agent profile 2026-01-11 版本 iterate 速度 + Google Universal Cart YouTube Shopping 整合落實度
- 數發部 100 億 AI 新創基金：首年 7,500 萬進度 vs 10 年 100 億目標；2027 行動計畫 2.0 後續版本政策方向
- GPT-6 Astra 定價是否會向下調整（$10 / $50 當前偏貴）；Daybreak 開放至免費 ChatGPT 的時程

[^ucp]: Universal Commerce Protocol，Shopify 與 Google 共同主導的開放電商協定，讓 ChatGPT、Copilot、Claude、Gemini 等 AI 代理能跨平台讀取商店 catalog 並代為結帳；將 MCP 列為 5 種 transport 之一，透過新 endpoint `/api/ucp/mcp` 存取，Technical Council 另涵蓋 Amazon、Meta、Microsoft、Salesforce、Stripe 等席次。

[^cowos]: Chip-on-Wafer-on-Substrate，台積電自研的 2.5D 先進封裝技術，把 GPU 與 HBM 高頻寬記憶體整合在同一基板上，是 NVIDIA H100／B200 等 AI 伺服器晶片的瓶頸工序；法人估 2027 年產能上看 217 萬片，為台積電 AI 題材的核心產能指標之一。

[^osworld]: 2024 年由學界提出的作業系統級代理人基準，讓模型在真實 Ubuntu、Windows 或 macOS 桌面上操作瀏覽器、Office、終端機完成多步任務（編輯檔案、填表、跨 app 搬資料），用以衡量「電腦使用」代理人的實用能力；2.0 版於 2026 擴題並加入更複雜的工作流。

[^edgar]: Electronic Data Gathering, Analysis, and Retrieval system，美國證券交易委員會（SEC）的公開文件資料庫；在美申請上市的公司最終要在此公開 S-1 等註冊文件，追蹤 IPO 時「S-1 由 confidential 翻 public」的動作，實務上就是看 EDGAR 當日有無新上線的 S-1 檔。

[^fau]: 大立光（Largan Precision）內部對特定高度自動化鏡頭組裝產線的代號，被供應鏈視為折疊 iPhone 與下一代光學模組量產關鍵；外界以 FAU 的量產時程與遞延訊號，推估大立光於 2027 年蘋果鏡頭供應鏈的貢獻度與 CoWoS 連鎖敘事。

## 📚 引用來源

1. [ETtoday — iPhone Duo 預購「全台首批不到 2 萬台」](https://www.ettoday.net/news/20261015/3255219.htm) — 2026-10-15
2. [NOWnews — iPhone Duo 10/16 預購 頂規 2TB NT$118,900](https://www.nownews.com/amp/news/6879482) — 2026-10-15
3. [今周刊 — iPhone Duo 預購 10/16 售價規格 6 優勢 4 缺點](https://www.businesstoday.com.tw/article/category/183015/post/202610150023/) — 2026-10-15
4. [Apple 台灣 — 購買 iPhone Duo](https://www.apple.com/tw/shop/buy-iphone/iphone-duo) — 2026-10-16
5. [udn — 折疊 iPhone 量產卡關 牽動蘋果今年整體手機銷售量](https://udn.com/news/story/6811/9769184) — 2026-10
6. [cnYES — iPhone Duo 預售訂單大幅溢價成交 預約購買者已近百萬](https://hao.cnyes.com/post/267410) — 2026-09
7. [TSMC 6-K 財報 — 3Q26 Earnings with Guidance](https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000726/a3q26e_withguidancexfinal.htm) — 2026-10-15
8. [Benzinga — Taiwan Semi Q3 2026 Full Earnings Call Transcript](https://www.benzinga.com/news/26/10/62373492/taiwan-semiconductor-reports-q3-2026-results-full-earnings-call-transcript) — 2026-10-15
9. [Averin — TSMC Q3 2026 Net Profit NT$763.1B Beats Q4 Guidance](https://averin.com/en/journal/ruslan-averin-tsmc-tsm-q3-2026-earnings-results-ai-demand-guidance) — 2026-10-15
10. [TechNews — 高盛關注台股 AI 供應鏈 台積電 聯發科 日月光投控給予積極評價](https://technews.tw/?p=1408447) — 2026
11. [MCP Directory — OpenAI winding down Agent Builder and Evals Migration Guide](https://mcp.directory/blog/openai-agentkit-deprecation-2026) — 2026
12. [ecorpit — OpenAI shuts Agent Builder Evals and reusable prompts on 30 November 2026](https://ecorpit.com/openai-agent-builder-evals-prompts-shutdown-november-2026/) — 2026
13. [AgenticWire — Migrate from OpenAI Agent Builder: SDK vs Workspace](https://www.agenticwire.news/article/openai-agent-builder-migration-sdk-workspace) — 2026
14. [LetsDataScience — Anthropic Releases Claude Haiku 5.5 With Lower Prices and Effort Controls](https://letsdatascience.com/news/anthropic-releases-claude-haiku-55-with-lower-prices-and-eff-f698c663) — 2026-10-07
15. [Vals AI — Claude Haiku 5.5 Model](https://www.vals.ai/models/anthropic_claude-haiku-5-5) — 2026-10
16. [Datanorth — OpenAI launches GPT-6 Astra](https://datanorth.ai/news/openai-launches-gpt-6-astra) — 2026-09-03
17. [Pasqualepillitteri — OpenAI Launches GPT-6 Astra Pricing Benchmarks Who Gets It First](https://pasqualepillitteri.it/en/news/14246/openai-launches-gpt-6-astra-pricing-benchmarks) — 2026-09
18. [Weaverse — Every Shopify Hydrogen Storefront is Now an AI Agent Endpoint](https://studio.weaverse.io/blogs/every-shopify-hydrogen-storefront-is-now-an-ai-agent-endpoint) — 2026
19. [Shopify Tenten — Shopify AI Dev Ecosystem MCP Server CTO Guide to Agentic Commerce Architecture 2026](https://shopify.tenten.co/shopify-ai-dev-ecosystem-mcp-server-the-cto-s-guide-to-agentic-commerce-architecture-in-2026) — 2026
20. [TowardsAI — MCP Registries in Mid-2026: One Upstream Won](https://pub.towardsai.net/mcp-registries-in-mid-2026-one-upstream-won-2ce541b92036) — 2026
21. [AI.engineer — Smithery AI agent integrations and MCP infrastructure](https://www.ai.engineer/orgs/smithery) — 2026
22. [TechNews — 百億 AI 基金首年僅投 7,500 萬 數發部公布 5 家獲投新創](https://technews.tw/?p=1520580) — 2026
23. [Business Next — moda AI startup 100 billion plan](https://www.bnext.com.tw/article/90239/moda-ai-startup-100billion-plan) — 2026
24. [actgsys — 2026 台灣中小企業 AI 補助完整攻略](https://actgsys.com/zh/blog/taiwan-sme-ai-subsidy-guide-2026) — 2026
25. [RuntimeWire — Vercel AI SDK 7 adds HarnessAgent for coding-agent harnesses](https://runtimewire.com/article/vercel-ai-sdk-7-adds-harnessagent-for-coding-agent-harnesses) — 2026-06
26. [LeverageShares — Anthropic IPO Date Valuation S-1 Status and How to Invest](https://leverageshares.com/us/anthropic-ipo-tracker/) — 2026
27. [TechJackSolutions — Anthropic's S-1 is now with the SEC the $47B ARR accounting question](https://techjacksolutions.com/ai-brief/anthropics-s-1-is-now-with-the-sec-the-47b-arr-accounting-qu/) — 2026
