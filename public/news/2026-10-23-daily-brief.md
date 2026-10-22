---
title: 每日創業情報 — 2026-10-23
date: 2026-10-23
tags: 創業情報, AI 產業, SaaS, 台灣
summary: 週五 iPhone Duo 開賣日 Day 1 T+0 蘋果 10/24 才查取貨庫存、首批 <20,000 vs 近百萬預約 ~50:1 + Evals read-only T-8 進入倒數個位數 + Agent Builder EOL T-38 + Anthropic IPO EDGAR 公開 S-1 Deadline T+2 + GPT-6.1 Sol 定價 Astra 的 1/5 開始滲透 + Vercel AI SDK 7 已 GA 4 個月（前幾天的「AI SDK 6 Beta」是過時描述）+ Haiku 5.5 Over-refusal fix 仍未公告。
keywords: iPhone Duo 10月23日 開賣日 Day 1 T+0 中華電 500 門市 8:00 蘋果不販售現貨, Apple iPhone Duo 10/24 查取貨庫存 首批 20000 vs 近百萬預約, Vercel AI SDK 7 2026-06-25 GA WorkflowAgent durable agents harness Codex Claude Code, OpenAI DevDay 2026 recap dots agent Codex Cloud Security Cloud GPT-6.1 Sol, GPT-6.1 Sol 2 10 token Astra 1/5 cache 0.10 Artificial Analysis 52, OpenAI Evals read-only 10/31 T-8 reusable prompts dataset 匯出 crunch, OpenAI Agent Builder EOL 11月30日 T-38 Agents SDK Workspace Agents, Anthropic IPO EDGAR S-1 公開 Deadline 10月25日 T+2 期中選舉 T-11, TSMC Q4 2026 revenue guidance 52.3 54.3 bln 2nm 8% UBS 2027 90 bln, Shopify WebMCP checkout get_checkout update_checkout complete_checkout 原 Storefront cart retired
---

# 每日創業情報 — 2026-10-23

## 🎯 今日 TL;DR

- **週五 iPhone Duo 開賣日 Day 1 T+0 + Evals read-only T-8 進入倒數個位數 + Agent Builder EOL T-38 + Haiku 5.5 production ramp Day 5 + Anthropic IPO EDGAR[^edgar] S-1 公開 Deadline T+2（10/25）+ 期中選舉 T-11 + Supabase Compute 定價等待 T+21 + Cursor 新定價 T-11 Reddit 2026 聲音仍無 + Vercel AI SDK 7 已 GA 4 個月（AI SDK 6 Beta 為過時描述）** — 開賣日 Live 日：中華電 500 門市 08:00 開賣 + 10/23 08:00 Live push 應已實跑；下週收斂到 Evals dataset 匯出完成 + Agents SDK scaffold 驗證 + GPT-6.1 Sol 試裝 3 件事
- **🔄 iPhone Duo 10/23 開賣日 Day 1 T+0 最新確認 — 蘋果已指示員工勸退未預購顧客（MacRumors[^macrumors] 轉述，台灣適用）+ Apple 官網取貨頁面要求消費者「10/24 再查看取貨庫存」= 首日直營店實體銷售幾乎為零 + 中華電 500 門市 08:00 開賣（9/10 公告落實）+ 台灣大 myfone 10/16 預約「2 分鐘內售罄」+ 遠傳 10/16 10:00 預購開放 + 首批 <20,000 台 vs 近百萬預約 ~50:1 缺口 + 售價 256GB NT$74,900 / 512GB NT$81,900 / 1TB NT$96,900 / 2TB NT$118,900 + Foxconn 良率 60% + 內螢幕維修 NT$37,000** — Day 1 Live 關鍵訊號：「Apple 10/24 才查取貨庫存」= 直營店首日幾乎無現場流量 → 消費者流向電信通路取貨 + 中華電 500 門市排隊真實秒數指南首波現場樣本 + 台灣大 / 遠傳 10/23 現場開賣訊號仍未公告（T+0 當日仍待確認）
- **🆕 Vercel AI SDK 7 重要訂正 — 2026-06-25 已 GA + 現為 7.0.143（10 月中旬 npm 版號）+ WorkflowAgent[^workflowagent] 類別把 agent 執行狀態存入 durable storage，支援 restart / interruption / delayed approval resume + 支援整合 Codex / Claude Code / Deep Agents / OpenCode / Pi 等 agent harness + Human approval / timeouts / sandbox 內建 + MCP Apps + 終端 UI + provider-agnostic realtime voice/video + 遷移路徑 `npx @ai-sdk/codemod v7`** — 本週 brief 誤差校正：先前 (10/20–10/22) 所述「AI SDK 6 Beta」已是過時描述，V7 於 2026-06-25 GA 後已跑了 4 個月、v6 已非主線；一人 SaaS 應以「AI SDK 7 WorkflowAgent + Codex / Claude Code harness 整合」為 2026 Q4 TypeScript Agent 底層選型基準
- **🆕 OpenAI DevDay 2026 recap 已公開（9/29 San Francisco，T+24） — dots agent[^dotsagent]（always-on cloud computer agent，Pro + business premium 先行）+ Codex Cloud（session 可遠端在 OpenAI infra 跑、PC 關機也不中斷）+ Codex Security Cloud（GitHub repo 自動掃漏洞 + 自動修 PR）+ GPT-6.1 Sol 已於 9/29 ChatGPT Work + Codex 上線（Astra 的 1/5 token 價）+ Agents API 支援 computer use + Decisions API limited preview + ChatGPT 作為「人 + agent 共享介面」+ ChatGPT native plugin extension** — 本週 brief 誤差校正：先前 (10/19–10/22) 一直把「DevDay 2026 recap 待實地 fetch」放待觀察區，實際上 recap 已完整公開；dots agent 的「always-on cloud」定位 = 直接對應 Supabase Compute hosted sandbox 的競品
- **🆕 GPT-6.1 Sol 定價結構揭露 T+24 — $2/M input + $10/M output（Astra 的 1/5：Astra 為 $10/M input + $50/M output）+ cached input $0.10/M（Astra $1/M = 10 倍差）+ long context >272K input 另計（Sol $4/M in + $15/M out；Astra $20/M in + $75/M out）+ Batch / Flex 再 50% off + Fast mode 2x + 區域處理加 10% + Artificial Analysis Intelligence Index[^aaii] 52（Astra 53、Opus 5.5 58、Sonnet 5.5 56）** — 對一人 SaaS 開發者第 1 軸訊號：Sol 6.1 定位 = 「Astra 1/5 價格、Index 低 1 分」的 Astra 替代；對 Opus 5.5（58）/ Sonnet 5.5（56）仍有 4–6 分差距，但在「成本 vs intelligence」平衡的 production subagent 可做為新選型基準；Haiku 5.5 $0.10/M in + $0.50/M out 仍是最便宜（Sol 的 1/20），短 context 分類 / 摘要 subagent 續領先
- **🔄 Anthropic IPO EDGAR 公開 S-1 Deadline T+2（10/25） — confidential 自 6/1 起已 144 天 + 2 度延後（8/底、9/底）+ 承銷 Goldman / Morgan Stanley / JPMorgan / Citigroup + target valuation ~US$2T vs 當前 US$965B + 期中選舉 11/3 T-11 + 可能路演日 11/9 T-17** — bear case 第 3 支點進入臨界 48 小時：若 10/25 EDGAR 仍無公開 S-1 → 11/9 路演窗口無法達成，可能延至 11/16 或更後；對一人 SaaS 影響小，但「2026 Q4 AI 大廠流動性事件」錨點清晰度進入最後倒數
- **🔄 Evals read-only T-8 進入倒數個位數最後週 — 10/31 00:00 UTC 進入 read-only + reusable prompts 11/30 同下線 + Agent Builder EOL T-38（本週剩 3 日工作時間）** — Day 5 10/23 必做：若昨 Day 4 dataset 匯出未完成 → 今日補跑、擠進倒數個位數前最後時機；10/24–10/26 Day 6–7 Promptfoo[^promptfoo] parity test skeleton 完稿；10/25–10/31 Evals 遷移週加價 20–40% 接案 landing 第二稿上線
- **🔄 Haiku 5.5 production ramp Day 5 T+16 — Vals Index[^valsindex] 54.31% + Refusal Rate 0.22% + Artificial Analysis Intelligence Index 43 at max effort + Over-refusal fix 仍無完成訊號（AutomationBench-AA 35% vs 對手 53–60%）+ Anthropic 承諾 fix 後重跑但未公告時程** — Day 5 工作重點：昨 Day 4 第 4 條「摘要 subagent」完成 → 今日切第 5 條「label normalize subagent」或擴至轉譯 workflow；effort levels low 分類 / high 摘要 / low 轉譯 / low 標準化；本週可擴至 7–10 條 production subagent
- **🆕 Shopify WebMCP[^webmcp] checkout 工具已 GA — 新增 `get_checkout` / `update_checkout` / `complete_checkout` 3 件 WebMCP 工具 + 已 rollout 至所有 eligible merchants + 原 Storefront MCP catalog + cart tools 已於 2026-10-01 退場（`search_shop_catalog` 等舊呼叫會失敗）+ 現行工作走 UCP endpoints + WebMCP 僅支援 Chromium 系瀏覽器 agent + Shopify Agents docs 已 live** — 對一人 SaaS 開發者第 2 軸訊號：若有 Shopify store 整合計劃 → `search_shop_catalog` 舊呼叫立即失效、需遷移至 UCP MCP server + WebMCP checkout 工具；台灣跨境電商 / 代購 SaaS 可做「WebMCP 遷移諮詢 + checkout 工具 PoC」vertical

## 🔄 昨日追蹤

- **🔄 iPhone Duo 10/23 開賣 T-1 → T+0 Day 1** → 蘋果員工勸退訊號續確認（MacRumors 轉述）+ Apple 官網「10/24 再查取貨庫存」訊號補強 = 直營店首日流量幾乎為零 + 中華電 500 門市 08:00 開賣續確認 + myfone 預約 2 分鐘售罄 ✅ 進度：Live 日 Day 1
- **🔄 Cursor 新定價 T-10 → T-11 Reddit 2026 聲音仍無** → 單一來源 Christopher Alarcon blog 續存在、官方 pricing page 仍以 Pro $20 / Pro+ $60 / Ultra $200 / Teams $40 / Enterprise 為主軸 + 2025 forum 投訴仍為最大 Reddit 樣本；Cursor 分階段 rollout 11 日仍無收斂訊號 ⚠️ 風險：T-11 已進入「2 位數下半區」仍無社群聲音；可能持續到年底未公開 pricing
- **🔄 Evals read-only T-9 → T-8** → 10/31 00:00 UTC 進入 read-only + reusable prompts 11/30 同下線 + Agent Builder EOL T-38；本週剩 3 日工作時間 ⚠️ 進度：Day 5 補跑或完稿 dataset 匯出
- **🔄 Supabase + Turso T+20 → T+21** → Supabase Compute hosted sandbox 定價仍未公開；DevToolLab 10/15 二手來源 Pro $10 compute credit / Micro / Large $110/mo / XL $210/mo 為 compute（非 Compute 產品） ✅ 選型訊號第 3 週收斂：Supabase Compute 具體定價仍為最大未知
- **🔄 Agent Builder EOL T-39 → T-38** → Agents SDK（Python/TypeScript）、ChatGPT Workspace Agents 兩路徑續行；ChatKit、Responses API 不受影響續確認；code export「starting point only」續行 ⚠️ 風險：workflow graph parity / branching / handoffs 需人工重驗
- **🔄 Haiku 5.5 T+15 → T+16** → Over-refusal fix 仍無完成訊號、AutomationBench-AA 35% 重測結果未公告 ✅ 進度：切 production Day 5、第 4 條摘要 subagent 昨已完成
- **🔄 Anthropic IPO T-12 → T-11** → EDGAR 公開 S-1 Deadline 10/25 T+2 進入臨界 48 小時；期中選舉 11/3 T-11；可能路演日 11/9 T-17

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🔄 iPhone Duo 10/23 開賣日 Day 1 T+0 — Apple 官網取貨頁面要求「10/24 再查看取貨庫存」= Apple 直營店首日幾乎無現場流量（蘋果員工勸退訊號續確認、MacRumors 轉述）+ 中華電 500 門市 08:00 開賣（9/10 公告落實）+ 台灣大 myfone 10/16 預約 2 分鐘內售罄 + 遠傳 10/16 10:00 預購開放 + 首批 <20,000 台 vs 近百萬預約 ~50:1 缺口 + 售價 256GB NT$74,900 / 512GB NT$81,900 / 1TB NT$96,900 / 2TB NT$118,900 + Foxconn 60% 良率 + 內螢幕 NT$37,000 維修費 + 台灣大 Duo 預約占整體預購 ~10%** | [NowNews — iPhone Duo 10/23 中華電 500 門市 08:00 開賣](https://www.nownews.com/news/6876097)、[Mrmad — iPhone Duo 上市日買不到現貨 蘋果要員工勸退未預購](https://mrmad.com.tw/?p=192680)、[中央社 — 台灣大哥大 myfone 10/16 20:00 開放預購 iPhone Duo](https://www.cna.com.tw/business/chinese/447172)、[Focus Taiwan — New iPhones sell out 2 minutes after preorders open](https://focustaiwan.tw/business/202609120006)、[udn 聯合新聞網 — iPhone Duo 下週五開賣 台灣大 遠傳預購起跑](https://money.udn.com/money/story/5607/9819868) | 開賣日 Day 1 T+0：「Apple 10/24 才查取貨庫存」=「直營店首日幾乎無現場流量」+「中華電 500 門市為台灣首日唯一實體開賣通路」兩訊號；per-project「中華電 500 取貨門市即時排隊地圖（crowdsourced） × 蘋果 10/24 查庫存 FAQ × 電信三雄首日取貨人流差異 × 蘋果員工勸退訊號在台落實度追蹤 × 2TB NT$118,900 漲價 FAQ」5 合一 push NT$ 200K–400K | 機會：**「10/23 中華電首日排隊地圖 × 10/24 Apple 取貨查詢指南 × 電信三雄首日取貨人流差異 × 蘋果不販售現貨實測 × 2TB NT$118,900 漲價 FAQ × 內螢幕 NT$37,000 FAQ × 10/23–10/24 補貨時程追蹤」7 合一 Day 1–2 pack NT$ 250K–450K**；甜蜜點 = 10/23 08:00 中華電首日排隊地圖 Live + 10:00 第 1 波「Apple 10/24 查庫存指南」push + 15:00 盤後缺口精算 + 20:00 補貨時程更新 + 10/24 第 1 批現場取貨回報；威脅：Apple 官網「10/24 才查取貨」訊號僅為官網檢索路徑描述，實際上可能部分台灣直營店首日仍有現場現貨 → push 需在 FAQ 註明「依現場為準」+ 中華電首日排隊秒數屬動態 crowdsourced，需在 FAQ 標註「數據可能延遲 5–15 分鐘」 |
| **🔄 TSMC Q4 2026 revenue guidance $52.3–54.3B + 55–61% YoY 成長 + 2nm 貢獻 Q3 wafer revenue 8% + UBS 2027 capex 預估 $90B / 2028 $105B + Morgan Stanley 2027 $83B / 2028 $92B + A14 risk production 2027 / volume 2028 + N2 annual capacity 2027 翻倍 + 3nm 4 座 fab + Q3 Gross margin 2nm ramp 壓抑 + 承認 "tool inflation is real"** | [CryptoBriefing — TSMC forecasts Q4 revenue jump up to 61% after record Q3 profit](https://cryptobriefing.com/tsmc-q4-revenue-forecast-record-q3-profit/)、[MobileWorldLive — TSMC hikes capex as Q4 profit rises](https://www.mobileworldlive.com/greater-china/tsmc-hikes-capex-as-q4-profit-rises/)、[DataCenterDynamics — TSMC announces 2026 capex spend of 56bn after 8th consecutive quarter of growth](https://datacenterdynamics.com/en/news/tsmc-announces-2026-capex-spend-of-56bn-after-posting-eighth-consecutive-quarter-of-growth/)、[Techsoda — TSMC Expresses Conservative Optimism for AI Boom in 2026](https://techsoda.substack.com/p/tsmc-expresses-conservative-optimism) | 對台灣一人 SaaS 開發者第 2 階影響：UBS 2027 $90B / 2028 $105B（Morgan Stanley 更保守 $83B / $92B）= 分析師意見顯著分歧，「2027 景氣能見度」投資決策需同時納入兩套 range + A14 risk 2027 / volume 2028 → 2027–2028「3nm 大擴產 + A14 bridge」= 台灣電子供應鏈 2027–2028 景氣 2 階段擴產；per-project「蘋概股分析師訂閱 SaaS（UBS vs MS 預估對照）+ 供應鏈 ERP + 工廠 OEE[^oee] / IE 排程 + 2nm ramp 良率追蹤 + A14 bridge 2027 擴產 blog」5 合一 vertical bootstrap NT$ 80K–350K per client | 機會：**「UBS vs MS 2027–2028 capex 預估對照 dashboard × 2nm 貢獻 Q3 wafer 8% 追蹤 × A14 risk / volume 2027–2028 時程 × TSMC "tool inflation" 承認後的設備股 blog × N2 2027 翻倍擴產地圖」5 合一 vertical NT$ 100K–380K per client**；甜蜜點 = 10/23 下午寫「TSMC Q4 revenue guide 55–61% 成長：UBS vs MS 2027 capex 分歧對一人 SaaS 的 2 大影響」blog + Notion 可嵌入 UBS / MS 2027–2028 預估對照 chart；威脅：analysts 2027–2028 預估分歧 15–20% 意味市場 consensus 未定 → 顧問 / SaaS 合約需揭露「2027 capex 估值 range 偏大」風險 |
| **🔄 經濟部產業競爭力輔導團 Day 6 — 2026/9 龔明鑫公告輔導員 2,700+ 位 + 已輔導 1.3 萬家 AI 導入 + 經濟部韌性特別預算個案最高 NT$5M / 聯盟 NT$40M 已補助 197 家 + 2027 每年擬投入 NT$25B 目標 100 萬家中小微企業 AI 導入 + 數發部 100 億 AI 基金核定 5 家 6 案 + 行政院《中小微企業及新創產業轉型升級條例》草案 9 月送立院審議（最新進度不詳）+ AI 新十大建設 2040 年 50 萬 AI 人才 + NT$100B 中小微企業升級計畫** | [actgsys — 2026 台灣中小企業 AI 補助完整攻略](https://actgsys.com/zh/blog/taiwan-sme-ai-subsidy-guide-2026)、[TechNews — 百億 AI 基金首年僅投 7,500 萬 數發部公布 5 家獲投新創](https://technews.tw/?p=1520580)、[uanalyze — 數發部祭百億資金催生 AI 新創已核定 6 案 100 片 GPU 算力池](https://uanalyze.com.tw/articles/1078148404)、[Taiwannews — Computex 賴清德 AI 新十大建設 2040 50 萬 AI 人才 1000 億計畫](https://www.taiwannews.com.tw/zh/news/6374811) | Day 6 政策追蹤：「輔導 1.3 萬家 AI 導入 × 2,700 位輔導員 × 2027 擬投 NT$25B × 數發部 100 億 AI 基金 × 中小微企業條例草案 × AI 新十大建設」6 軸；per-project「30 人以下中小企 AI 補助申請顧問 × 經濟部韌性特別預算（NT$5M / NT$40M）× 數發部 GPU 算力池申請流程 × 中小微企業條例修法後租稅誘因試算 × AI 新十大建設政策追蹤 × 2027 NT$25B 預算下 100 萬家導入目標的入口」6 合一 vertical consulting NT$ 100K–380K per client | 機會：**「2027 NT$25B 100 萬家 AI 導入目標 FAQ × 中小微企業條例修法後租稅誘因試算 × 數發部 100 億 AI 基金進度 × 經濟部韌性特別預算 NT$5M/40M × AI 新十大建設 50 萬人才培育 × 2026/9 輔導員 2,700 位結構變化」6 合一 vertical consulting NT$ 100K–380K per client**；甜蜜點 = 10/23 下午寫「2027 NT$25B 100 萬家 AI 導入 — 一人 SaaS 可以用的 3 個入口」blog；威脅：中小微企業條例草案 9 月送立院審議後最新進度不詳 → 顧問服務需在前期揭露「2027 前條例可能仍未落實」風險 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🆕 Vercel AI SDK 7 本月訂正（2026-06-25 已 GA，現 7.0.143）— `WorkflowAgent` 類別支援 agent 執行狀態存入 durable storage，restart / interruption / delayed approval resume + 整合 Codex / Claude Code / Deep Agents / OpenCode / Pi 等 agent harness + Human approval / timeouts / sandbox 內建 + MCP Apps + 終端 UI + provider-agnostic realtime voice/video + 遷移路徑 `npx @ai-sdk/codemod v7`** | TypeScript Agent 框架 / AI SaaS 底層 / production-grade agent | 需要跨 restart / approval delay / sandbox 的 production agent + Next.js SaaS 內嵌 agent + 多 harness 整合（Codex / Claude Code） | AI SDK 7 本體開源免費；API 計費另計；Vercel 托管費另計 | vs OpenAI Agents SDK（Python/TypeScript、Agent Builder 11/30 遷移目標）/ Claude Agent SDK（Anthropic）；差異在「durable WorkflowAgent + 跨 harness 整合 + MCP Apps + realtime voice/video」 | 🟢 使用 Next.js 的一人 SaaS：**今日 Day 5 本週首要訂正 — v6 Beta 已非主線、v7 已跑 4 個月**；試裝 1 條 `WorkflowAgent` + Codex harness 整合 PoC；🟡 現用 Agents SDK Python：先維持觀察、下週 Day 1 做「Agents SDK Python vs AI SDK 7 TypeScript」選型 blog；🔴 深度依賴 LangGraph：v7 的 durable WorkflowAgent 是直接競品，2–4 週內評估遷移成本 |
| **🆕 OpenAI DevDay 2026 recap 已公開 T+24（9/29 San Francisco） — dots agent（always-on cloud computer agent，Pro + business premium 先行）+ Codex Cloud（session 可遠端在 OpenAI infra 跑、PC 關機也不中斷）+ Codex Security Cloud（GitHub repo 自動掃漏洞 + 自動修 PR）+ GPT-6.1 Sol 已於 9/29 ChatGPT Work + Codex 上線 + Agents API 支援 computer use + Decisions API limited preview + ChatGPT 作為「人 + agent 共享介面」+ ChatGPT native plugin extension** | AI 大廠 2026 Q4 roadmap / 一人 SaaS 競爭地圖 | always-on agent + remote cloud session + 自動安全掃描 + GPT-6.1 Sol「Astra 1/5 價」= 2026 Q4 開發者工作流大改 | dots / Codex Cloud / Security Cloud 定價未全公開；GPT-6.1 Sol $2/M in + $10/M out | vs Supabase Compute hosted sandbox（agent-generated database）/ Vercel AI SDK 7 WorkflowAgent（durable agent runtime）；差異在「always-on cloud computer」+「GitHub repo 自動漏洞修補」兩個新定位 | 🟢 一人 SaaS：**今日 Day 5 必做 — WebFetch openai.com/index/devday-2026-recap 做 1 次完整 recap 筆記**；🟡 若有 ChatGPT Work 訂閱 → 試 dots agent beta；🔴 Codex Security Cloud 可能衝擊「GitHub repo 代碼 review SaaS」+「漏洞掃描 SaaS」vertical；本週可做「dots agent vs Claude Code background mode vs Codex Cloud」3 家對照 blog |
| **🆕 GPT-6.1 Sol 定價結構 T+24 — $2/M input + $10/M output（Astra 的 1/5）+ cached input $0.10/M（Astra $1/M 的 1/10）+ long context >272K input 另計（Sol $4/M in + $15/M out）+ Batch / Flex 再 50% off + Fast mode 2x + 區域處理加 10% + Artificial Analysis Intelligence Index 52（Astra 53、Opus 5.5 58、Sonnet 5.5 56）** | LLM / production subagent / Astra 替代 | 中 context agent 任務 + 需 Astra 等級但預算有限 + Batch / Flex 處理非即時任務 | $2/M in + $10/M out；Batch $1/M in + $5/M out；Fast $4/M in + $20/M out | vs Astra（$10/M in + $50/M out、Index 53）/ Opus 5.5（Index 58）/ Sonnet 5.5（Index 56）/ Haiku 5.5（$0.10/M in + $0.50/M out、Index 43 max effort）；差異在「Index 比 Astra 低 1 分、價格僅 1/5」 | 🟢 一人 SaaS：**今日 Day 5 試裝 Sol 6.1 做 1 條 production subagent（取代原本 Astra 的「中等 context 分類 + 摘要」工作，預期成本降 80%）**；🟡 depth 任務（長 context / 複雜 reasoning）：Opus 5.5 / Sonnet 5.5 仍為首選；🔴 cost-sensitive 短 context：Haiku 5.5 仍是最便宜（Sol 的 1/20），不換 |
| **🆕 Shopify WebMCP checkout 工具 GA — 新增 `get_checkout` / `update_checkout` / `complete_checkout` 3 件 WebMCP 工具 + 已 rollout 至所有 eligible merchants + 原 Storefront MCP catalog + cart tools 已於 2026-10-01 退場 + 現行工作走 UCP endpoints + WebMCP 僅支援 Chromium 系瀏覽器 agent + Shopify Agents docs live** | Agentic commerce / Shopify 整合 / MCP server | AI agent 幫消費者在 Shopify store 下單結帳 + 代購 SaaS 自動化 | Shopify 商家 Standard $29/mo 起 + MCP server 免費；merchant payment processing 另計 | vs 自建 Shopify Admin API 整合 / Stripe Checkout 自動化；差異在「WebMCP 瀏覽器內 agent 直接下單結帳 + 跨商家標準協定」 | 🟢 跨境代購 / 比價 SaaS：**今日 Day 5 試裝 Shopify WebMCP checkout 3 工具 PoC（Chromium 瀏覽器 agent）**；🟡 使用舊 Storefront MCP cart 的用戶：10/01 起 `search_shop_catalog` 等舊呼叫已失效，立即遷移至 UCP MCP；🔴 深度客製商店：UCP + WebMCP 可能需較多 custom integration；本週可做「Shopify WebMCP checkout 遷移 FAQ」blog + 顧問接案 |
| **🔄 Claude Haiku 5.5 production ramp Day 5 T+16 — Vals Index 54.31% + Refusal Rate 0.22% + Artificial Analysis Intelligence Index 43 at max effort + OSWorld[^osworld] 72.4% + Terminal-Bench 39.2% max effort + Over-refusal fix 仍無完成訊號 + AutomationBench-AA 35% 待重測 + 1M context + 128K output + Claude Code v2.1.293 預設整合（10/8）** | LLM 小模型 / 高頻 subagent / production ramp | 短 context（≤100K）分類、摘要、轉譯、label normalize；effort levels 可調推理深度 | $0.10/M in + $0.50/M out（≤100K）；$0.50/M in + $2.50/M out（>100K）；cache reads $0.01/M | vs Haiku 4.5（OSWorld 15.7%）跳升 56.7 ppt；vs Sonnet 5.5 Terminal-Bench 2 倍差距；vs Sol 6.1 Haiku 便宜 1/20；AutomationBench-AA 35% vs 對手 53–60%；Over-refusal fix 完成後 score 預期上修 | 🟢 T+16 production ramp Day 5：切第 5 條「label normalize subagent」或擴至轉譯 workflow；🟡 effort levels：low 分類 / high 摘要 / low 轉譯 / low 標準化；🔴 禁區：agentic coding + Terminal + >100K + refusal 敏感；本週可擴至 7–10 條 production subagent |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：iPhone Duo 10/23 開賣日 Day 1 T+0 Live push + 10/24 Apple 取貨查詢指南 + 中華電首日排隊地圖（crowdsourced） 🔄

- **痛點來源**（接續 10/17–10/22 brief 點子 1）：Apple 官網取貨頁面要求「10/24 再查取貨庫存」= 直營店首日幾乎無現場流量 + 中華電 500 門市 08:00 開賣（9/10 公告落實）成台灣首日唯一實體開賣通路 + 消費者仍會到 Apple 直營店排隊 → 蘋果員工勸退、消費者不解、糾紛風險 + 一般媒體 push 事後才報、缺「Apple 10/24 取貨查詢指南 × 中華電 500 門市首日排隊地圖 × 蘋果員工勸退訊號在台落實度 × 2TB NT$118,900 漲價 FAQ × 內螢幕 NT$37,000 FAQ × 電信三雄首日取貨人流差異」6 合一 Day 1–2 vertical push slot
- **目標客群**：10/23 想搶首批 iPhone Duo 的台灣消費者（估 30–50 萬人試搶）+ 電信通路業務（估 1,500 人）+ 蘋果直營店員工（估 500 人，勸退話術 FAQ）+ 跨境代購（估 1,000 家）+ 蘋概股分析師（估 500 人）+ 蘋果維修 / 配件商（估 500 家）
- **技術複雜度**：3/5 — Node.js + 中華電 500 門市公開 catalog scraping + Google Maps API + WebSocket push + APNs / FCM + crowdsourced 回報接口 + Apple 10/24 取貨查詢指南整合 Apple Store API + eSIM provisioning 流程手動測試 + 內螢幕 NT$37,000 FAQ 整合 AppleCare+ 試算 + 2TB NT$118,900 漲價試算
- **預估 MRR**：one-off NT$ 50–100 × 30–50 萬搶購者 = NT$ 500K–2.5M event-based；若擴展為「蘋果新品預購 + 開賣當日缺口 + 門市地圖 + 維修費 push + 舊換新折抵矩陣」訂閱產品 → NT$ 199/mo × 1,500 用戶 = NT$ 300K MRR
- **競品弱點**：台灣目前無「iPhone 開賣當日 Apple 10/24 取貨查詢指南 × 中華電 500 門市排隊地圖（crowdsourced） × 電信三雄首日取貨人流差異 × 蘋果員工勸退訊號在台落實度 × 2TB NT$118,900 漲價 FAQ × 內螢幕 NT$37,000 FAQ」6 合一 Day 1–2 vertical push
- **切入建議**：10/23 Day 1 Live：07:00 開賣前最後 FAQ 定稿 + 08:00 第 1 波「中華電首日排隊地圖 + Apple 10/24 查庫存指南 + eSIM provisioning + 內螢幕 NT$37,000 bear 支點 + 蘋果不販售現貨實測」push + 15:00 第 2 波盤後缺口精算 + 20:00 補貨時程更新 push → 10/24 Day 2：10:00「Apple 第 1 批現場取貨回報」push + 15:00 Day 2 補貨時程精算 + 20:00「首批 <20,000 vs 近百萬預約 ~50:1 Day 2 真實落差」blog；10/25–10/27 Week 2 Pro 版 landing + 開放 1 小時諮詢 slot

### 點子 2：Evals read-only T-8 crunch dataset 匯出補跑 + Promptfoo parity 完稿 + 10/25–10/31 Evals 遷移週加價接案 landing 第二稿 🔄

- **痛點來源**（接續 10/16–10/22 brief 點子 2）：OpenAI Evals 10/31 00:00 UTC 進入 read-only（T-8 進入倒數個位數最後週） + reusable prompts 11/30 同下線 + Agent Builder EOL T-38（本週剩 3 日工作時間）；若未在 10/31 前完成 dataset 匯出 → 11/01 起 read-only，匯出路徑未知；Promptfoo 作為遷移目標仍為二手來源，openai.com 官方口徑未更新；多數台灣 SI 顧問做「新建」而非「遷移」
- **目標客群**：以 OpenAI Evals 建 production LLM eval pipeline 的台灣中小企 / SI 顧問案（10–50 人規模，估 150–400 家）+ reusable prompts 11/30 同下線用戶群 + Agent Builder 遷移用戶群 + ChatGPT Workspace Agents 轉接目標
- **技術複雜度**：3/5 — service business + CLI 工具；OpenAI Evals API dataset 匯出 + reusable prompts 匯出 + Promptfoo migration scaffold + Agents SDK TypeScript / Python workflow re-architecture + 遷移 checklist 可模板化
- **預估 MRR**：N/A（one-off NT$ 60K–200K per client × 2–4 clients / month）；加上「10/25–10/31 Evals 遷移週」加價 20–40% 可達 NT$ 80K–280K per client；若做「Evals dataset 匯出 CLI」工具產品 → NT$ 2,000 one-off × 50 位客戶 = NT$ 100K
- **競品弱點**：台灣尚無針對 Evals read-only T-8 的專門 CLI 工具 + 顧問服務；多數 SI 顧問做「新建」而非「遷移」；OpenAI 官方 migration guide 只給框架、缺台灣在地整合顧問；Promptfoo 中文整合文件接近零
- **切入建議**：10/23 Day 5 補跑 dataset 匯出（若昨 Day 4 未完成）→ 10/24–10/26 Day 6–8 Promptfoo parity test skeleton 完稿 + Agents SDK scaffold 驗證 → 10/25 Day 7 「10/25–10/31 Evals 遷移週」加價接案 landing 第二稿公開 → 11/01 進入「Agent Builder EOL 最後 29 天 crunch」接案 → 11/30 EOL 前 1 週關閉接案

### 點子 3：GPT-6.1 Sol 試裝 + production subagent 第 2 代選型 blog + 「Sol vs Astra vs Opus 5.5 vs Haiku 5.5」4 家對照試算表 🆕

- **痛點來源**：GPT-6.1 Sol 於 9/29 ChatGPT Work + Codex 上線 + $2/M in + $10/M out（Astra 的 1/5） + cached input $0.10/M（Astra $1/M 的 1/10） + Artificial Analysis Index 52（Astra 53、Opus 5.5 58、Sonnet 5.5 56） + Batch / Flex 再 50% off + >272K long context 另計；一人 SaaS 用 Astra 做 production subagent 的成本可降 80%，但 Index 低 1 分、complex reasoning 任務需權衡
- **目標客群**：使用 Astra 做 production 的台灣一人 / 2–3 人 SaaS 團隊（估 1,500 家）+ 用 Haiku 5.5 做高頻 subagent 的開發者（估 300 家）+ 使用 Claude Opus 做 depth 任務的工程師（估 500 家）+ 用 Codex 做內部工具的 SI 顧問案（估 200 家）
- **技術複雜度**：2/5 — API 替換 + 多模型 fallback；Node.js + OpenAI SDK（支援 Sol 6.1 以 model 字串切換）+ Vercel AI SDK 7 的 model switching；試算表可用 Google Sheets / Notion 嵌入
- **預估 MRR**：免費版 + Pro NT$299/mo（進階試算 + 多情境比較 + Batch / Flex / Fast 試算）× 100–500 用戶 = NT$ 30K–150K MRR；若接企業採購顧問 → NT$ 20K–60K per client × 2–5 clients / month = NT$ 40K–300K one-off
- **競品弱點**：全球有 CostBench、aicoolies 等 pricing 整理頁，但缺「Sol 6.1 定價結構 + Batch / Flex / Fast / 區域處理 modifiers 可試算的互動表單」；台灣在地中文無類似工具
- **切入建議**：10/23 Day 5 試裝 Sol 6.1 做 1 條 production subagent → 10/24 Day 6「Sol vs Astra vs Opus 5.5 vs Sonnet 5.5 vs Haiku 5.5」5 家對照試算表 + blog 第一稿 → 10/27 Day 9 Notion 可嵌入試算表 + landing page → 11/02 Week 2 Pro 版上線 + 開放企業採購顧問接案；分銷 Twitter / HN / Reddit r/OpenAI / Facebook Taiwan Developers Group

### 點子 4：Vercel AI SDK 7 WorkflowAgent 本月訂正 blog + 「v6 Beta 已過時、v7 已 GA 4 個月」FAQ + Codex / Claude Code harness 整合 PoC 🆕

- **痛點來源**：Vercel AI SDK 7 於 2026-06-25 已 GA + 現為 7.0.143 + WorkflowAgent 類別支援 durable storage execution state + 整合 Codex / Claude Code / Deep Agents / OpenCode / Pi 等 agent harness + MCP Apps + 終端 UI + realtime voice/video；本週 brief 10/20–10/22 誤差：描述「AI SDK 6 Beta」已是過時描述，v7 已跑 4 個月；多數台灣中文技術 blog 仍在描述 v6
- **目標客群**：使用 Next.js 的台灣一人 / 2–3 人 SaaS 團隊（估 2,000 家）+ 使用 LangGraph / LangChain 的 developer（估 500 家）+ 建 agentic SaaS 架構的工程師（估 500 家）+ 需 durable agent runtime 的 SI 顧問案（估 150 家）
- **技術複雜度**：3/5 — TypeScript + Next.js + Vercel AI SDK 7 WorkflowAgent + durable storage（Redis / Postgres）+ Codex / Claude Code harness 整合 + MCP server 設定；1 週可做 PoC
- **預估 MRR**：one-off NT$ 50K–150K per client × 2–4 clients / month = NT$ 100K–600K；若做訂閱式「durable agent runtime 架構維護」→ NT$ 3K–8K/mo × 30–100 clients = NT$ 90K–800K MRR
- **競品弱點**：台灣尚無針對「Vercel AI SDK 7 WorkflowAgent + Codex / Claude Code harness 整合」的中文技術 blog；多數 developer 不清楚「v6 Beta 已過時、v7 已 GA 4 個月」；LangGraph 中文教學仍是 2025 版本
- **切入建議**：10/23 Day 5 寫「Vercel AI SDK v6 Beta 本月已過時 — v7 已 GA 4 個月，WorkflowAgent 新選型 3 大軸」blog（本次 brief 校正 + 落實）→ 10/24 Day 6 試裝「WorkflowAgent + Codex harness」最小 PoC → 10/27 Day 9 「WorkflowAgent + Claude Code harness」第 2 稿 → 11/02 Week 2 開放 2–3 位免費諮詢 → 下週起接案

## 🧰 工具堆疊更新

- **🔄 iPhone Duo 10/23 開賣日 Day 1 T+0**：07:00 FAQ 最後定稿 + 08:00 第 1 波 Live push + 10:00「Apple 10/24 查庫存指南」+ 15:00 盤後缺口精算 + 20:00 補貨時程更新；10/24 Day 2 繼續「Apple 現場取貨回報」+「Day 2 補貨精算」+「首批 <20,000 vs 近百萬預約 ~50:1 Day 2 落差」blog
- **🔄 Evals read-only T-8 dataset 匯出補跑**：若昨 Day 4 未完成 → 今日 Day 5 補跑；10/24–10/26 Day 6–8 Promptfoo parity test skeleton 完稿；10/25 Day 7「Evals 遷移週」加價接案 landing 第二稿
- **🆕 Vercel AI SDK 7 WorkflowAgent 本月訂正**：先前 (10/20–10/22) 寫 v6 Beta 已過時，v7 已 GA 4 個月；今日 Day 5 試裝 1 條 WorkflowAgent + Codex harness 最小 PoC；下週 Day 1 做「v6 Beta vs v7 WorkflowAgent 選型校正」blog
- **🆕 GPT-6.1 Sol 試裝 + 定價結構 blog**：今日 Day 5 試裝 Sol 6.1 做 1 條 production subagent（取代 Astra 的中等 context 分類 + 摘要）；下週做「Sol vs Astra vs Opus 5.5 vs Haiku 5.5」4 家對照試算表
- **🆕 Shopify WebMCP checkout 工具試裝**：若有 Shopify store 整合計劃 → 今日 Day 5 試裝「get_checkout / update_checkout / complete_checkout」3 工具 PoC（Chromium 瀏覽器 agent）；下週做「WebMCP 遷移 FAQ」blog
- **🔄 Haiku 5.5 T+16 production ramp Day 5**：切第 5 條「label normalize subagent」或擴至轉譯 workflow；effort levels 配置 low 分類 / high 摘要 / low 轉譯 / low 標準化；本週可擴至 7–10 條 production subagent
- **🔄 Agent Builder → Agents SDK 遷移 crunch T-38**：本週剩 3 日工作時間；10/25–10/31 進入「Evals 遷移週」加價接案；code export scaffold → Agents SDK TypeScript / Python 選型

## ⚡ 今日行動建議

- [ ] iPhone Duo 10/23 開賣日 Day 1 Live：07:00 FAQ 最後定稿 + 08:00 第 1 波 Live push + 10:00「Apple 10/24 查庫存指南」+ 15:00 盤後缺口精算 + 20:00 補貨時程更新（預期 5 小時 Live 工作）
- [ ] Evals read-only T-8 dataset 匯出補跑（若昨 Day 4 未完成）+ Promptfoo parity test skeleton 完稿第一輪（預期 2 小時）
- [ ] WebFetch openai.com/index/devday-2026-recap 做完整 DevDay recap 筆記（dots agent / Codex Cloud / Security Cloud / GPT-6.1 Sol / Agents API computer use / Decisions API；預期 1 小時）
- [ ] Vercel AI SDK 7 WorkflowAgent 試裝「WorkflowAgent + Codex harness」最小 PoC（預期 2 小時）
- [ ] GPT-6.1 Sol 試裝 1 條 production subagent（取代 Astra 的中等 context 分類 + 摘要，預期成本降 80%，預期 1.5 小時）
- [ ] Haiku 5.5 production ramp Day 5：切第 5 條「label normalize subagent」或擴至轉譯 workflow（預期 1.5 小時）
- [ ] 寫 1 篇中文 build-in-public：「iPhone Duo 10/23 開賣 Day 1 Live push 實戰紀錄」或「Vercel AI SDK v6 Beta 本月已過時 — v7 已 GA 4 個月，WorkflowAgent 新選型 3 大軸」

## ⏳ 待觀察

- 10/23 全天：iPhone Duo 中華電 500 門市首日排隊人流實際 vs ~50:1 預估缺口；台灣大 / 遠傳 10/23 現場開賣訊號是否公告（T+0 當日仍待確認）
- 10/24：iPhone Duo Day 2 — Apple 官網取貨庫存可查日；台灣直營店首批現場取貨回報
- 10/25：Anthropic IPO EDGAR 公開 S-1 Deadline（11/9 路演倒推 15 天）— T+2 進入臨界 48 小時；若仍無 → bear case 第三支點加壓至臨界、11/9 路演窗口可能延至 11/16
- 10/31：OpenAI Evals read-only — T-8 倒數個位數；是否可延期尚無官方口徑
- 11/3：美國期中選舉 — Anthropic IPO 路演起點前的最後政治 trigger
- 11/9：Anthropic IPO 期中選舉後路演可能日 — S-1 flip（EDGAR）仍為先行觀察訊號
- 11/30：OpenAI Agent Builder + Evals + reusable prompts 三件事一次下線 — T-38 倒數
- Q4 底：Google Gemini 3.5 Pro / Gemini 4 預期落地 — Gemini 3.1 Pro preview 2/19 已 roll out；若 Q4 底前 Gemini 3.5 / 4 落地 → 3 大供應商重排 trigger
- 8/31 2027：Shopify legacy MCP cart tools EOL 已過期（10/01 已退場，`search_shop_catalog` 等舊呼叫已失效）
- Haiku 5.5 Over-refusal fix：Anthropic 修補時程、AutomationBench-AA 重測結果（10/23 仍無完成訊號）
- Supabase Compute：hosted sandbox 定價（T+21 仍未公開）、agent-generated database limits、Head of Agentic Services roadmap
- Cursor 兩套 pricing 分階段 rollout：Reddit 2026 新定價回合實地反應（T-11 仍為零）
- OpenAI dots agent / Codex Cloud / Codex Security Cloud 定價明細：Pro + business premium 以外的開放時程
- OpenAI Decisions API：limited preview 展開時程、具體用途與 pricing

## 📚 引用來源

1. [NowNews — iPhone Duo 10/23 開賣 中華電 500 門市 08:00](https://www.nownews.com/news/6876097) — 2026-10
2. [Mrmad — iPhone Duo 上市日買不到現貨 蘋果要員工勸退未預購](https://mrmad.com.tw/?p=192680) — 2026-10
3. [中央社 — 台灣大哥大 myfone 10/16 20:00 開放預購 iPhone Duo](https://www.cna.com.tw/business/chinese/447172) — 2026-10
4. [Focus Taiwan — New iPhones sell out 2 minutes after preorders open](https://focustaiwan.tw/business/202609120006) — 2026-09-12
5. [udn 聯合新聞網 — iPhone Duo 下週五開賣 台灣大 遠傳預購起跑](https://money.udn.com/money/story/5607/9819868) — 2026-10
6. [TaiwanNews — Taiwan 2026 Pro Max Carrier Preorder](https://www.taiwannews.com.tw/news/6437480) — 2026
7. [Vercel Blog — AI SDK 7](https://vercel.com/blog/ai-sdk-7) — 2026-06-25
8. [Vercel Changelog — AI SDK 7 is now available](https://vercel.com/changelog/ai-sdk-7) — 2026-06-25
9. [Noqta — Vercel AI SDK 7 durable agents voice developer guide 2026](https://noqta.tn/en/blog/vercel-ai-sdk-7-durable-agents-voice-developer-guide-2026) — 2026
10. [DevelopersDigest — What's New in Vercel AI SDK 7 (October 2026) Harnesses Tool Search Retries](https://www.developersdigest.tech/blog/vercel-ai-sdk-whats-new-2026) — 2026-10
11. [OpenAI DevDay 2026 Recap](https://openai.com/index/devday-2026-recap/) — 2026-09-29
12. [Codex / Daniel Vaughan — OpenAI DevDay 2026 recap Codex Cloud agents view GPT-6.1 Sol Code Review Security Cloud](https://codex.danielvaughan.com/2026/10/08/openai-devday-2026-recap-codex-cloud-agents-view-gpt61-sol-code-review-security-cloud/) — 2026-10-08
13. [Digg — OpenAI launches GPT-6.1 Sol claiming near-Astra performance at one-fifth of Astra's standard API token prices](https://digg.com/tech/mz36yngf) — 2026
14. [BrainDetox — How Far Does One-Fifth of Astra's Price Go GPT-6.1 Sol Pricing Structure](https://braindetox.kr/en/posts/gpt_6_1_sol_release_pricing_2026.html) — 2026
15. [DevTK — GPT-6 API Pricing Guide 2026 Astra GPT-6.1 Sol Luna Token Costs](https://devtk.ai/en/blog/gpt-6-api-pricing-guide-2026/) — 2026
16. [CryptoBriefing — TSMC forecasts Q4 revenue jump of up to 61% after record Q3 profit](https://cryptobriefing.com/tsmc-q4-revenue-forecast-record-q3-profit/) — 2026-10
17. [MobileWorldLive — TSMC hikes capex as Q4 profit rises](https://www.mobileworldlive.com/greater-china/tsmc-hikes-capex-as-q4-profit-rises/) — 2026-10
18. [DataCenterDynamics — TSMC announces 2026 capex spend of 56bn after 8th consecutive quarter of growth](https://datacenterdynamics.com/en/news/tsmc-announces-2026-capex-spend-of-56bn-after-posting-eighth-consecutive-quarter-of-growth/) — 2026
19. [Techsoda — TSMC Expresses Conservative Optimism for AI Boom in 2026](https://techsoda.substack.com/p/tsmc-expresses-conservative-optimism) — 2026
20. [OpenAI Developers — Deprecations（Agent Builder、Evals、reusable prompts）](https://developers.openai.com/docs/deprecations) — 2026
21. [MCP Directory — OpenAI winding down Agent Builder and Evals Migration Guide](https://mcp.directory/blog/openai-agentkit-deprecation-2026) — 2026
22. [Supabase — Acquiring Turso 官方部落格](https://supabase.com/blog/supabase-is-acquiring-turso) — 2026-10-02
23. [Webull — Supabase Announces $150M in New Funding and Turso Acquisition](https://www.webull.com/news/15678771187762176) — 2026-10-02
24. [DevToolLab — Supabase alternatives](https://devtoollab.com/blog/supabase-alternatives) — 2026-10-15
25. [Vals AI — Claude Haiku 5.5 Model](https://www.vals.ai/models/anthropic_claude-haiku-5-5) — 2026-10
26. [Metric Nexus — Claude Haiku 5.5 Benchmarks and Real Cost Math](https://metricnexus.ai/blog/claude-haiku-5-5-benchmarks-pricing) — 2026-10
27. [NPR — AI Giant Anthropic Files Paperwork for IPO](https://www.npr.org/2026/06/01/nx-s1-5843199) — 2026-06-01
28. [LetsDataScience — Anthropic confidentially files Form S-1 for IPO](https://letsdatascience.com/news/anthropic-confidentially-files-form-s-1-for-ipo-2d067167) — 2026
29. [Christopher Alarcon — Cursor Pricing 2026-10-18](https://christopheralarcon.com/blog/cursor-pricing/) — 2026-10-18
30. [Shopify Dev Docs — Web MCP](https://shopify.dev/docs/api/web-mcp) — 2026
31. [Vercel KB — Build a Shopify MCP Agent on Vercel](https://vercel.com/kb/guide/build-a-shopify-mcp-agent-on-vercel) — 2026-10-01
32. [ThePaypers — Shopify extends WebMCP support to checkout for AI agents](https://thepaypers.com/payments/news/shopify-extends-webmcp-support-to-checkout-for-ai-agents) — 2026
33. [actgsys — 2026 台灣中小企業 AI 補助完整攻略](https://actgsys.com/zh/blog/taiwan-sme-ai-subsidy-guide-2026) — 2026
34. [TechNews — 百億 AI 基金首年僅投 7,500 萬 數發部公布 5 家獲投新創](https://technews.tw/?p=1520580) — 2026
35. [uanalyze — 數發部祭百億資金催生 AI 新創已核定 6 案 100 片 GPU 算力池](https://uanalyze.com.tw/articles/1078148404) — 2026
36. [TaiwanNews — Computex 賴清德 AI 新十大建設 2040 50 萬 AI 人才 1000 億計畫](https://www.taiwannews.com.tw/zh/news/6374811) — 2026

[^edgar]: 美國證券交易委員會（SEC）的公開文件電子存檔系統（Electronic Data Gathering, Analysis, and Retrieval），上市公司或準備 IPO 的公司透過它遞交 S-1、10-K、10-Q 等揭露文件；一旦內容在 EDGAR 公開，任何人都可免費檢索，因此 IPO 市場通常把「S-1 從 confidential flip 到 EDGAR 公開」當成路演與訂價的倒數起算點。

[^macrumors]: 1999 年創立的 Apple 消息匯整網站，以供應鏈情資、零組件線索、beta 版本解析長期追蹤 Apple 新品，是蘋果記者圈最常被引用的英語二手來源；該站本身非 Apple 官方，刊載內容多為「業界訊息轉述」或「供應鏈分析師發言摘錄」，正式公告仍須回到 Apple Newsroom 查證。

[^promptfoo]: 開源的 LLM 評估框架，以 YAML 定義 prompt、assertion 與 model matrix 跑 regression test，CLI 與 CI pipeline 友善；支援匯入既有 dataset、同時呼叫 OpenAI、Anthropic、Azure、local 模型做 A/B 比較，在 OpenAI Evals 下線潮中被不少中小團隊視為自架 eval pipeline 的替代選項。

[^osworld]: 由香港大學 2024 年提出的多工作業系統代理人基準測試，涵蓋真實桌面應用（檔案、瀏覽器、辦公軟體等）跨 369 個任務；offline subset 為去掉網路依賴後的穩定子集，常被用於跨模型對照，數字愈高代表完成率愈好。

[^oee]: Overall Equipment Effectiveness，製造業衡量單一設備生產力的綜合指標，由「可用率 × 效能 × 良率」三者相乘；OEE SaaS 讓中小製造廠不必自建 MES（Manufacturing Execution System）就能即時監測產線損失，台灣中部機械業 2026 Q4 起有加速採用訊號。

[^workflowagent]: Vercel AI SDK 7 新引入的 agent 類別，把「下一步要做什麼」寫入 durable storage，就算 process restart、worker 掛掉或人類審核等好幾天也能從中斷點續跑；相較於傳統 ToolLoopAgent 把狀態放在記憶體，WorkflowAgent 讓長任務與人機交互型工作流在 production 的可靠度顯著提升，適合搭配 Codex、Claude Code 等外部 harness。

[^dotsagent]: OpenAI 於 2026 DevDay 揭露的 always-on 雲端電腦代理人（codename「dots」），租用 OpenAI infra 內的虛擬電腦執行瀏覽、填表、檔案操作等任務，使用者關機後仍能繼續跑；定位為通用 computer-use agent 而非程式碼專用，初期僅開放 ChatGPT Pro 與 Business Premium 方案試用，與 Codex Cloud 功能相近但目標使用者不同。

[^aaii]: Artificial Analysis Intelligence Index，由第三方評測機構 Artificial Analysis 以推理、知識、程式碼、數學等 10 項 benchmark 合成的綜合分數（0–100、愈高愈強），所有 LLM 都在 max effort 下用同一組題目重跑，常被引用來快速比較 Opus、Sonnet、Astra、Sol、Haiku 等家族的智力水準，官方自報分數不可直接對照。

[^valsindex]: Vals AI 建立的模型綜合評分，以金融、法務、醫療等實務題庫為主，比 Artificial Analysis Intelligence Index 更偏向「專業產業實用度」而非一般推理；分數以百分比呈現（例：Haiku 5.5 54.31%），常與 Refusal Rate 等拒答率指標並列，是企業採購評估 production 可用性時的常見第三方參考。

[^webmcp]: 由 Shopify、Vercel 等推動的網頁內 MCP 協定，讓 Chromium 系瀏覽器中的 AI agent 直接在使用者已登入的頁面上呼叫 `get_checkout`、`update_checkout`、`complete_checkout` 等標準工具下單結帳，不需另發後端 API key；與伺服器端的 MCP server 不同，WebMCP 走前端、仰賴瀏覽器 sandbox 與使用者 session，目前僅 Chromium 系瀏覽器 agent 可用。
