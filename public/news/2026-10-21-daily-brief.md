---
title: 每日創業情報 — 2026-10-21
date: 2026-10-21
tags: 創業情報, AI 產業, SaaS, 台灣
summary: 週三 iPhone Duo 10/23 開賣 T-2 遠傳舊換新折 5 萬公告落實 + Cursor 新定價 T-9 滲透期 + Evals read-only T-10 進入倒數 2 位數 + Agent Builder EOL T-40 + Haiku 5.5 production ramp Day 3 + Anthropic IPO 期中選舉 T-13 的架構 freeze 最後一日。
keywords: iPhone Duo 10月23日 開賣 T-2 中華電 500 門市 8:00 遠傳舊換新 5 萬, 台灣大 遠傳 iPhone Duo 10/23 實體開賣 舊換新 空機 專案價, Cursor Plus 8 Premium 30 Super 100 Ultra 200 Reddit 社群反應 T-9, OpenAI Evals read-only 10月31日 T-10 reusable prompts 匯出 crunch 最後週, OpenAI Agent Builder EOL 11月30日 T-40 Agents SDK ChatGPT Workspace Agents, Supabase 收購 Turso T+19 Supabase Compute agent sandbox 每週 100 萬 database, Anthropic IPO S-1 EDGAR 期中選舉 11月3日 T-13 roadshow 15 天前, Claude Haiku 5.5 production ramp Day 3 Over-refusal 待修 AutomationBench-AA 35, GitHub Copilot usage-based billing AI Credits 6月1日 Pro 10 Pro+ 39 Max 100, Vercel AI SDK 6 Agent primitive ToolLoopAgent human-in-the-loop MCP TypeScript
---

# 每日創業情報 — 2026-10-21

## 🎯 今日 TL;DR

- **週三 Day 3 iPhone Duo 開賣準備週 + iPhone Duo 10/23 開賣 T-2 + Cursor 新定價 T-9 已滲透 + Evals read-only T-10 進入倒數 2 位數週 + Agent Builder EOL T-40 + Haiku 5.5 production ramp Day 3 + Anthropic IPO 期中選舉 T-13 + Supabase 收購 Turso T+19 + 10/25 EDGAR[^edgar] S-1 公開 Deadline T+4** — 架構 freeze 週最後一日：10 月最後一哩 crunch 工作面全部收斂到「本週內把 iPhone Duo Live push + Evals dataset 匯出 + Agents SDK 遷移 scaffold」三件事落地
- **🔄 iPhone Duo 10/23 開賣 T-2 — 中華電 500 門市 8:00 開賣 + 遠傳 10/23 起 iPhone Duo + 舊換新最高折 NT$50,000 公告落實（含搭資費 / 空機兩路線）+ 台灣大 10/23 開賣 256GB 搭 $1,599 月租 48 期專案價 NT$47,300、舊換新最高折 NT$52,500 + myfone 預購 10/16 已結束 + 首批 <20,000 台 vs 近百萬預約 ~50:1 缺口 + Foxconn 良率 60% + 內螢幕維修 NT$37,000** — Day 3 收斂到「電信三雄舊換新折抵差異矩陣（中華電 vs 台灣大 NT$52,500 vs 遠傳 NT$50,000）× eSIM provisioning Dry Run 全路徑 × 中華電 500 門市地圖 bind 地圖 API × 10/22 bear 支點 FAQ 定稿」4 軸
- **🆕 Cursor 新定價社群反應收斂 T-9 — 新四層 Plus $8 / Premium $30 / Super $100 / Ultra $200 僅在部分供應商試算頁出現，官方 pricing page 仍以 Pro $20 / Pro+ $60 / Ultra $200 / Teams $40 / Enterprise 為主軸** — 這個差異意味 Cursor 10/12 新定價仍處「分階段 rollout + 社群試算頁與 vendor 頁未同步」階段，Pro $20 對新用戶關閉 vs 兩套 pricing 共存，社群 bill shock 焦慮延續 T-9 仍無收斂訊號；一人 SaaS 開發者第 2 軸訊號：「訂閱 unlimited → 訂閱 + 用量 hybrid」轉型進入「訊息擾動」階段
- **🔄 Evals read-only T-10 進入 2 位數倒數最後週 — reusable prompts 11/30 同下線 + Agent Builder EOL T-40（本週剩 5 日工作時間）** — 本週 Day 3 進入「10/25–10/31 Evals 遷移週」倒推期：Day 3 Evals dataset 匯出 CLI 腳本定稿 + Day 4 跑實際 dataset 匯出 + Day 5–7 Promptfoo[^promptfoo] parity test skeleton；若本週內完成即可以「10/31 前 Evals 匯出完成 case study」blog 走接案 landing
- **🔄 Supabase 收購 Turso T+19 + Supabase Compute 同步發表 — Hosted sandboxes for long-running AI agents + 70% of new databases now created by agents / AI-driven tools + Supabase 每週開 >100 萬 database + Glauber Costa 任 Head of Agentic Services[^agentic-services] + Turso 平台繼續運作 + 不公開 financial terms** — 一人 SaaS 架構師第 2 週訊號收斂：「大 project Postgres[^rls] + per-tenant 小 SQLite + Supabase Compute agent sandbox」3 層已成形；今日 Day 3 審計訊號「Neon Launch $19/mo + 用量 vs Convex Pro $25/mo vs Supabase Pro $25/mo + Turso Scaler $29/mo」4 家並排 pricing freeze
- **🆕 GitHub Copilot usage-based billing 6/1 已切 AI Credits 計費 — Pro $10/mo + $15 credits、Pro+ $39/mo + $70 credits、Max $100/mo + $200 credits、Business $19/user/mo、Enterprise $39/user/mo + 完成補完全線切換 + 完稿補完仍免費 + Claude Opus 4.7 僅 Pro+ 以上可用、舊 Opus 全線下架 + 個人方案註冊暫停** — 對一人 SaaS 開發者：GitHub Copilot 和 Cursor 同時進入「credit / usage-based + 高階模型 gating」階段 → 2026 Q4「AI IDE 定價 2.0」結構確立；若 Opus 4.7 是主力模型 → Copilot Pro+ $39 vs Claude Code 訂閱 vs Cursor Premium $30 三家 benchmark 需本週內定稿
- **🆕 Vercel AI SDK 6 Agent primitive 已 GA — ToolLoopAgent[^tool-loop-agent] 類別處理完整 tool execution loop + Human-in-the-loop approval 內建 + MCP support + DevTools + `npx @ai-sdk/codemod v6` 遷移路徑 + 預設 TypeScript** — 對一人 SaaS 技術棧：Agents SDK（OpenAI、11/30 遷移目標）vs Vercel AI SDK 6 Agent（TypeScript 原生）vs Claude Agent SDK（Anthropic）三家 TypeScript Agent 框架選型已成形；Vercel AI SDK 6 的 ToolLoopAgent + human approval 是 Next.js SaaS 的最小摩擦路徑
- **🔄 Anthropic IPO T-13 期中選舉 — 11/3 期中選舉 T-13 + 10/25 EDGAR S-1 公開 Deadline T+4（11/9 路演倒推 15 天）+ confidential 自 6/1 起已 142 天 + S-1 flip 已二度延後（8/底、9/底）+ 承銷 Goldman / JPM / MS / Citigroup** — bear case 第三支點加壓中：若 10/25 EDGAR 仍無 S-1 → 期中選舉後路演窗口壓縮，可能延至 11/16 或更後；對一人 SaaS 影響小，但「2026 Q4 AI 大廠流動性事件」的時程清晰度仍為市場敘事錨點
- **🔄 Haiku 5.5 production ramp Day 3 T+14 — 10/7 釋出已 14 天 + Vals Index 54.31% / Refusal Rate 0.22% / Artificial Analysis Intelligence Index 43 at max effort（較前代 +26 ppt）+ Over-refusal bug 待修（AutomationBench-AA 35% vs 對手 53–60%）+ Anthropic 承諾 fix 後重跑** — Day 3 工作重點：切第 3 條分類 subagent + 擴至摘要 workflow（禁區外的 ≤100K + max effort 甜蜜點）+ latency 分佈紀錄入帳

## 🔄 昨日追蹤

- **🔄 iPhone Duo 10/23 開賣 T-3 → T-2** → 遠傳 10/23 iPhone Duo 舊換新最高折 NT$50,000 公告落實（搭資費 + 空機兩路線）；台灣大 10/23 開賣 256GB 專案價 NT$47,300 + 舊換新 NT$52,500；中華電 500 門市 8:00 開賣續確認；台灣大 / 遠傳實體開賣門市清單仍未見公告 ✅ 進度：架構 freeze Day 3 收斂 4 軸
- **🔄 Cursor 10/12 新定價 T-8 → T-9** → 社群試算頁出現 Plus $8 / Premium $30 / Super $100 / Ultra $200 四層新架構；官方 pricing page 仍以 Pro $20 / Pro+ $60 / Ultra $200 / Teams $40 為主軸；分階段 rollout + bill shock 焦慮延續 ⚠️ 風險：Pro $20 對新用戶關閉 vs 兩套 pricing 共存，社群尚無收斂訊號
- **🔄 Supabase 收購 Turso T+18 → T+19** → Supabase Compute「hosted sandboxes for long-running AI agents」同步發表確認、70% 新 database 由 agents 建立確認、1M databases per week 確認；Turso 平台繼續運作、financial terms 未公開 ✅ 選型訊號第 3 週：3 層架構（大 project Postgres + per-tenant 小 SQLite + agent sandbox）成形
- **🔄 Agent Builder EOL T-41 → T-40** → Agents SDK（Python/TypeScript）為 developer 遷移路徑、ChatGPT Workspace Agents 為非技術使用者路徑；ChatKit 保留；多步 branching / handoffs 需人工重驗 ⚠️ 風險：code export 僅是 scaffold，node parity / tool behavior / guardrails 需直接測試
- **🔄 Evals read-only T-11 → T-10** → 10/31 00:00 UTC 進入 read-only；reusable prompts 11/30 同下線；進入倒數 2 位數最後週；Promptfoo 作為遷移目標仍為二手來源
- **🔄 Haiku 5.5 T+13 → T+14** → Artificial Analysis Intelligence Index 43 at max effort（+26 ppt vs Haiku 4.5）；Over-refusal fix 時程仍未公告；Vals.ai Refusal Rate 0.22% ✅ 進度：切 production Day 3
- **🔄 Anthropic IPO T-14 → T-13** → 10/25 EDGAR S-1 公開 Deadline T+4；confidential 自 6/1 起已 142 天；S-1 flip 已二度延後；期中選舉 T-13；路演可能日 11/9 T-19

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🔄 iPhone Duo 10/23 開賣 T-2 — 遠傳 10/23 iPhone Duo 舊換新最高折 NT$50,000 公告落實（搭資費 + 空機兩路線，VIP 搭資費方案再折最高 NT$5,000）+ 台灣大 10/23 開賣 256GB 搭 $1,599 月租 48 期專案價 NT$47,300、舊換新最高折 NT$52,500 + 中華電 500 門市 8:00 開賣（9/10 公告續確認）+ 首批 <20,000 台 vs 近百萬預約 ~50:1 缺口 + Foxconn 良率 60% + 內螢幕維修 NT$37,000 + 全球備貨 600–800 萬 vs 1,000 萬 2–4 成缺口** | [中央社 — 中華電信 iPhone Duo 10/23 開賣](https://www.cna.com.tw/postwrite/chi/444605)、[Mirror Media / SETN — 遠傳 iPhone Duo 10/23 舊換新最高折 5 萬](https://www.mirrormedia.mg/external/setn_1904699)、[CTEE — 遠傳台灣大 iPhone 18 Pro 預購時間 性價比高](https://ctee.com.tw/news/consume/351430.html)、[TVBS — iPhone Duo 預購 8 點開搶 台灣售價 官網技巧](https://news.tvbs.com.tw/tech/4037011) | 週三 Day 3 架構 freeze 最後一日：「電信三雄舊換新折抵差異矩陣（中華電 vs 台灣大 NT$52,500 vs 遠傳 NT$50,000）× eSIM provisioning Dry Run 全路徑 × 中華電 500 門市地圖 bind 地圖 API × 10/22 bear 支點 FAQ 定稿」4 軸收斂日；per-project「電信三雄舊換新試算 + eSIM 排隊秒數指南 + 中華電 500 門市地圖 + 內螢幕 NT$37,000 FAQ + Foxconn 60% 良率缺口精算」5 合一 vertical push notification NT$ 150K–280K | 機會：**「10/23 中華電 500 門市地圖 × 電信三雄舊換新折抵差異（中華電未公告 vs 台哥大 52,500 vs 遠傳 50,000）× eSIM Dry Run × 內螢幕 NT$37,000 FAQ × 全球備貨 600–800 萬 vs 1,000 萬 bear 支點 × Foxconn 60% 良率」6 合一 T-2 開賣前最後一日 pack NT$ 180K–320K**；甜蜜點 = 10/21 10:00「電信三雄舊換新矩陣」+ 15:00 中華電 500 門市地圖 bind + 20:00 內螢幕維修 FAQ 定稿；威脅：台灣大 / 遠傳實體門市清單至 T-2 仍無公告 → 消費者 10/23 當日可能跑錯通路；舊換新折抵條件（手機狀況 / 綁約月份）細則不公開 → push 需在 FAQ 內明示「實際折抵需以通路評估為準」 |
| **🔄 數發部 100 億 AI 新創基金 Day 5 — 已核定投資 5 家企業、6 案 + 累計注資 >NT$7,500 萬 vs 100 億 10 年目標大幅落後 + 2026 期盼添購 100 片 GPU 擴充算力池（2025 預算曾遭刪減）+ 經濟部產業競爭力輔導團 2026/3 底累計輔導 2,058 家 AI 導入（中小企業佔 91%）+ 行政院 AI 新十大建設 2026 首年規劃推進 + 經濟部研擬修《中小微企業轉型升級發展條例》提高 AI 工具租稅誘因** | [TechNews — 百億 AI 基金首年僅投 7,500 萬 數發部公布 5 家獲投新創](https://technews.tw/?p=1520580)、[uanalyze — 數發部祭百億資金催生 AI 新創已核定 6 案 100 片 GPU 算力池](https://uanalyze.com.tw/articles/1078148404)、[actgsys — 2026 台灣中小企業 AI 補助完整攻略](https://actgsys.com/zh/blog/taiwan-sme-ai-subsidy-guide-2026)、[meta-intelligence — Insight AI Subsidies Taiwan](https://meta-intelligence.tech/insight-ai-subsidies-taiwan) | 週三 Day 5 政策追蹤：「百億基金進度 × 7,500 萬注資 vs 100 億 10 年目標 × 2,058 家輔導統計 × AI 新十大建設 × 《中小微企業轉型升級發展條例》修法」5 軸；per-project「30 人以下中小企 AI 補助申請顧問 × 經濟部韌性特別預算（500 萬 / 4,000 萬）× 數發部 GPU 算力池申請流程 × 修法後租稅誘因試算 × AI 新十大建設政策追蹤」5 合一 vertical consulting NT$ 80K–300K per client | 機會：**「30 人以下中小企 AI 補助 × 經濟部韌性特別預算 × 數發部 GPU 算力池 × 修法後租稅誘因試算 × AI 新十大建設政策追蹤」5 合一諮詢服務 NT$ 80K–300K per client**；甜蜜點 = 10/21 Day 5 寫 1 篇「《中小微企業轉型升級發展條例》修法對一人 SaaS 的 3 大影響」blog + 1 篇「2026/3/10 已過期 115 年度計畫，116 年度何時開放」實務追蹤；威脅：百億基金進度嚴重落後 + 2027 政策方向未定 → 顧問服務「2027 後接案」仍須在合約內揭露風險 |
| **🔄 第四屆台灣新創投資年會 10/14–15 已結束 T+6 → T+7 — 「擁抱變革」主題 + 36 位頂尖新創創辦人 + 2024 新創投資額破 NT$1,002 億 10 年新高 + 2025 底台灣新創總數 10,552 家 + 2026 創新創業白皮書列「鼓勵大企業投資新創 + 研發抵減 + 研發成果資本化」最急迫 + 賴清德千億計畫 2040 年前協助 100 萬家中小微企業智慧轉型** | [Business Next — 千人規模第四屆新創投資年會 10 月登場](https://www.bnext.com.tw/article/92340/tsic_2026.09)、[uanalyze — 台灣新創動能爆發 吸金破千億創 10 年新高 聚焦 4 大關鍵產業](https://uanalyze.com.tw/articles/4672147147) | 對一人 / 2–3 人團隊：年會訊號 T+7 消化期，「鼓勵大企業投資新創」+「2040 年 100 萬家中小微企業智慧轉型」+ 研發抵減修法 = 2026 Q4 到 2027 bootstrap-to-enterprise-pilot 窗口持續；per-project「大企業新創合作 pilot 顧問 × 研發抵減申請 × 研發成果資本化流程指南 × 中小微企業智慧轉型方案上架 SME AI 平台」4 合一 vertical consulting NT$ 60K–250K per client | 機會：**「大企業新創合作 pilot 顧問 × 研發抵減申請顧問 × 2026 創新創業白皮書解讀 × 大企業 pilot 入口 landing page × SME AI 平台方案上架顧問」5 合一 vertical consulting NT$ 80K–280K per client**；甜蜜點 = 10/21 Day 7 寫「SME AI 平台方案上架 + 研發抵減申請」實務流程 blog；威脅：白皮書訊號下，若 2027 年前「研發抵減 + 研發成果資本化」政策細則未落實，顧問服務需在前期揭露風險 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🆕 Vercel AI SDK 6 Agent primitive GA — ToolLoopAgent 類別處理完整 tool execution loop + Human-in-the-loop approval 內建 + MCP support + DevTools + `npx @ai-sdk/codemod v6` 遷移路徑 + TypeScript 原生 + Next.js 深度整合** | TypeScript Agent 框架 / AI SaaS 底層 | Next.js SaaS 內嵌 Agent + 多模型 fallback + 內建 approval UI pattern | AI SDK 6 本體開源免費；API 計費另計；Vercel 托管費另計 | vs OpenAI Agents SDK（Python/TypeScript，Agent Builder 11/30 遷移目標）/ Claude Agent SDK（Anthropic）；差異在「TypeScript 原生 + Next.js 深度整合 + 內建 human approval + MCP + ToolLoopAgent」 | 🟢 一人 SaaS 使用 Next.js：**今天 Day 3 試裝 1 條「ToolLoopAgent + MCP + human approval」最小 PoC**；🟡 現用 LangGraph / LangChain：先維持觀察，Agent primitive 的生產級 reuse pattern 需 2–4 週驗證；🔴 深度依賴 Python 生態：Agents SDK（Python）仍是遷移優先路徑；下週 Day 1 可做 1 篇「AI SDK 6 vs Agents SDK vs Claude Agent SDK TypeScript 選型」blog |
| **🆕 GitHub Copilot usage-based billing（6/1/2026 已切）AI Credits 計費 — Pro $10/mo + $15 credits、Pro+ $39/mo + $70 credits、Max $100/mo + $200 credits、Business $19/user/mo、Enterprise $39/user/mo + 完稿補完仍免費 + Claude Opus 4.7 僅 Pro+ 以上可用、舊 Opus 全線下架 + 個人方案註冊暫停（部分來源）** | AI IDE / coding assistant / usage pricing | AI 編碼補完 + CLI / Fleet subagent + 多模型 | $10–$100/mo + credit 用量 | vs Cursor（Pro $20 / Pro+ $60 / Ultra $200）/ Claude Code（Anthropic 訂閱內含）/ Codex；差異在「GitHub 原生整合 + VS Code 深度 + 公司信用卡易採購」 | 🟢 現用 Pro 的個人：若主力模型是 Opus 4.7 → 必升 Pro+ $39；🟡 公司採購：Business $19 比 Cursor Teams $40 便宜，但 credit 用量需試算；🔴 個人新用戶：註冊暫停風險；今天 Day 3 可做 1 份「Copilot Pro+ $39 vs Claude Code 訂閱 vs Cursor Premium $30」三家 benchmark 試算表 |
| **🔄 Cursor 新定價 T-9 社群反應收斂期 — 新四層 Plus $8 / Premium $30 / Super $100 / Ultra $200 僅在部分供應商試算頁出現 + 官方 pricing page 仍為 Pro $20 / Pro+ $60 / Ultra $200 / Teams $40 / Enterprise + Pro $20 對新用戶關閉 + 兩套 pricing 共存 + bill shock 焦慮延續** | AI IDE / coding assistant | AI 編碼補完 + Agent + 多模型切換 + credit 用量 | 兩套：官方 Pro $20 / Pro+ $60 / Ultra $200 / Teams $40 vs 試算頁 Plus $8 / Premium $30 / Super $100 / Ultra $200 | vs Copilot（AI Credits）/ Claude Code（訂閱內含）；差異在「分階段 rollout + credit pool」 | 🟢 現用 Pro $20：等官方確認分階段 rollout 時程；🟡 新用戶：Pro $20 已關、必走 Pro+ $60；🔴 深度依賴 Opus 4.7：Claude Code 訂閱可能更划算；今天 Day 3 做 1 份「Cursor 兩套 pricing 分階段 rollout 時程 FAQ」blog |
| **🔄 Claude Haiku 5.5 production ramp Day 3 T+14 — Vals Index 54.31% + Refusal Rate 0.22% + Artificial Analysis Intelligence Index 43 at max effort（+26 ppt vs Haiku 4.5）+ OSWorld[^osworld] 72.4% + Terminal-Bench 39.2% max effort + Over-refusal bug 待修 + Anthropic 承諾 fix 後重跑 + 1M context + 128K output + Claude Code v2.1.293 預設整合** | LLM 小模型 / 高頻 subagent / production ramp | 短 context（≤100K）分類、摘要、轉譯；effort levels 可調推理深度 | $0.10/M in、$0.50/M out（≤100K）；$0.50/M in、$2.50/M out（>100K）；cache reads $0.01/M | vs Haiku 4.5（OSWorld 15.7%）跳升 56.7 ppt；vs Sonnet 5.5 Terminal-Bench 2 倍差距；AutomationBench-AA 35% vs 對手 53–60%；Over-refusal fix 後 score 預期上修 | 🟢 T+14 production ramp Day 3：切第 3 條分類 subagent + 擴至摘要 workflow；🟡 effort levels：low 做分類、high 做摘要；🔴 禁區：agentic coding + Terminal 操作 + >100K + refusal 敏感；本週可擴至 5–10 條 production subagent |
| **🔄 Supabase Compute（10/2 隨 Turso 收購同步發表）T+19 — Hosted sandboxes for long-running AI agents + Supabase 每週開 >100 萬 database + 70% 新 database 由 agents / AI-driven tools 建立 + Turso 平台繼續運作 + Glauber Costa 任 Head of Agentic Services** | Agent sandbox / per-tenant 資料庫 / 邊緣 SQLite | 大 project Postgres + 大量小型 agent-generated per-tenant database + hosted long-running agent sandbox | Supabase Pro $25/mo（100K MAU、8GB disk、250GB egress、100GB storage）+ Turso Scaler $29/mo + Supabase Compute 未公開定價 | vs Neon Launch $19/mo + 用量 / Convex Pro $25/mo / Firebase 傳統 Postgres；差異在「3 層架構一次收攏」 | 🟢 一人 SaaS：**今天 Day 3 審計「Supabase Pro + Neon Launch + Convex Pro + Turso Scaler」4 家並排 pricing freeze**；🟡 已用 Turso：維持觀察、不急遷；🔴 深度 Postgres RLS 依賴：Supabase 續領先；下週 Day 1 試裝「Supabase project + per-user Turso + Supabase Compute agent sandbox」3 層 PoC |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：iPhone Duo 10/23 開賣 Live push MVP + 電信三雄舊換新折抵矩陣 + eSIM 排隊 Dry Run（T-2 架構 freeze 最後一日）🔄

- **痛點來源**（接續 10/17–10/20 brief 點子 1）：中華電 500 門市 8:00 開賣已確認 + 遠傳 10/23 iPhone Duo 舊換新最高折 NT$50,000 公告落實 + 台灣大 10/23 開賣 256GB 專案價 NT$47,300 + 舊換新 NT$52,500；一般媒體 push 只提事後結果，缺「開賣前中華電 500 門市地圖 × 電信三雄舊換新折抵矩陣（中華電未公告 vs 台哥大 52,500 vs 遠傳 50,000）× eSIM provisioning Dry Run × 內螢幕維修 NT$37,000 FAQ × 全球備貨 600–800 萬 vs 1,000 萬 bear 支點 × Foxconn 60% 良率」6 合一 vertical；T-2 架構 freeze 最後一日的「舊換新 FAQ」是本波唯一能搶的 vertical slot
- **目標客群**：10/23 想搶首批 iPhone Duo 的台灣消費者（估 30 萬人試搶）+ 電信通路業務（估 1,500 人）+ 跨境代購（估 1,000 家）+ 蘋概股分析師（估 500 人）+ 蘋果維修 / 配件商（估 500 家）
- **技術複雜度**：3/5 — Node.js + 中華電 500 門市公開 catalog scraping + Google Maps API 整合 + WebSocket push + APNs / FCM + 快取控制 + eSIM provisioning 流程手動測試 + 內螢幕維修費 FAQ 整合蘋果官方 AppleCare+ 試算 + 舊換新折抵條件抓取（Mirror Media / CTEE 二手來源）
- **預估 MRR**：one-off NT$ 50–100 × 30 萬搶購者 = NT$ 500K–1.5M event-based；若擴展為「蘋果新品預購 + 開賣當日缺口 + 門市地圖 + 維修費 push + 舊換新折抵矩陣」訂閱產品 → NT$ 199/mo × 1,500 用戶 = NT$ 300K MRR
- **競品弱點**：台灣目前無「iPhone 開賣當日中華電 500 門市地圖 × 電信三雄舊換新折抵矩陣 × eSIM provisioning Dry Run × 內螢幕 NT$37,000 FAQ」vertical push；10/23 開賣是本月最後第 2 波機會
- **切入建議**：10/21 Day 3 架構 freeze 最後一日：10:00「電信三雄舊換新折抵矩陣」寫定 → 15:00 中華電 500 門市地圖 bind Google Maps API 收尾 → 20:00 內螢幕 NT$37,000 FAQ 定稿 → 10/22 Day 4 Dry Run 全路徑 → 10/23 Live：07:00 開賣前 FAQ 定稿 + 08:00 開賣第 1 波「中華電 500 門市首批貨源分配 + eSIM provisioning + 內螢幕維修 bear 支點 + 舊換新折抵最高額」push + 15:00 第 2 波盤後缺口精算 + 20:00 補貨時程更新 push

### 點子 2：Evals read-only T-10 crunch 匯出 CLI + 顧問接案 landing（10/25–10/31 Evals 遷移週搶案）🔄

- **痛點來源**（接續 10/16–10/20 brief 點子 2）：OpenAI Evals 10/31 00:00 UTC 進入 read-only + reusable prompts 11/30 同下線 + Agent Builder EOL T-40（本週剩 5 日工作時間）；T-10 已進入倒數 2 位數最後週，若未在 10/31 前完成 dataset 匯出 → 11/01 起 read-only，匯出路徑未知；Promptfoo 作為遷移目標仍為二手來源，openai.com 官方口徑未更新；多數台灣 SI 顧問做「新建」而非「遷移」
- **目標客群**：以 OpenAI Evals 建 production LLM eval pipeline 的台灣中小企 / SI 顧問案（10–50 人規模，估 150–400 家）+ reusable prompts 11/30 同下線用戶群 + Agent Builder 遷移用戶群 + ChatGPT Workspace Agents 轉接目標
- **技術複雜度**：3/5 — service business + CLI 工具；OpenAI Evals API dataset 匯出 + reusable prompts 匯出 + Promptfoo migration scaffold + Agents SDK TypeScript / Python workflow re-architecture + 遷移 checklist 可模板化
- **預估 MRR**：N/A（one-off NT$ 60K–200K per client × 2–4 clients / month）；加上「10/25–10/31 Evals 遷移週」加價 20–40% 可達 NT$ 80K–280K per client；若做「Evals dataset 匯出 CLI」工具產品 → NT$ 2,000 one-off × 50 位客戶 = NT$ 100K
- **競品弱點**：台灣尚無針對 Evals read-only T-10 的專門 CLI 工具 + 顧問服務；多數 SI 顧問做「新建」而非「遷移」；OpenAI 官方 migration guide 只給框架、缺台灣在地整合顧問
- **切入建議**：10/21 Day 3 Evals dataset 匯出 CLI 腳本定稿 → 10/22 Day 4 跑實際 dataset 匯出 → 10/23 Day 5 Promptfoo parity test skeleton → 10/25–10/31「Evals 遷移週」加價接案 landing 第二稿 → 11/01 進入「Agent Builder EOL 最後 29 天 crunch」接案 → 11/30 EOL 前 1 週關閉接案

### 點子 3：Supabase + per-user Turso + Supabase Compute 3 層 agentic SaaS 架構顧問 + 4 家 pricing 審計 blog（T+19 收斂訊號）🔄

- **痛點來源**（接續 10/19–10/20 brief 點子 3）：Supabase 10/2 $150M + 收購 Turso 已 T+19 + Supabase Compute「hosted sandboxes for long-running AI agents」同步發表 + 70% 新 database 由 agents 建立 + 每週開 >100 萬 database；對一人 SaaS：「大 project Postgres + per-tenant 小 SQLite + Supabase Compute agent sandbox」3 層已成形 → 需知道新路線圖、per-tenant pricing、agent-generated database limits、Supabase Compute 定價
- **目標客群**：使用 Supabase 的台灣一人 / 2–3 人 SaaS 團隊（估 1,500 家）+ 使用 Turso 的 edge SQLite 用戶（估 300 家）+ 建 agentic SaaS 架構的 developer（估 500 家）+ 需 long-running agent sandbox 的 SI 顧問案（估 200 家）
- **技術複雜度**：3/5 — Postgres / SQLite 架構設計 + per-tenant isolation + agent-generated database provisioning + Supabase RLS + Turso schema sync + Supabase Compute hosted agent sandbox；顧問服務可模板化
- **預估 MRR**：one-off NT$ 40K–120K per client × 3–5 clients / month = NT$ 120K–600K；若做訂閱式「agentic SaaS 架構維護 + 4 家 pricing 審計」→ NT$ 3K–8K/mo × 30–100 clients = NT$ 90K–800K MRR
- **競品弱點**：台灣尚無針對「Supabase + Turso + Compute 3 層架構」的專門顧問；多數 developer 不清楚「大 project Postgres」vs「per-tenant small SQLite」vs「Compute agent sandbox」3 條路徑的分界
- **切入建議**：10/21 Day 3 寫「Supabase + Turso + Compute 3 層 agentic SaaS 架構路線圖」中文 blog + 「Supabase Pro / Neon Launch / Convex Pro / Turso Scaler」4 家 pricing 審計 blog + landing page 第二稿 → 10/22 Day 4 開放免費 1 小時諮詢 slot → 下週起接案

### 點子 4：GitHub Copilot vs Cursor vs Claude Code 三家 AI IDE 試算 SaaS（Credit / Usage pricing 2.0 比較工具）🆕

- **痛點來源**：GitHub Copilot 6/1/2026 已切 AI Credits 計費（Pro $10 + $15 credits、Pro+ $39 + $70 credits、Max $100 + $200 credits）+ Cursor 10/12 新定價 T-9 兩套 pricing 共存（官方 Pro $20 / Pro+ $60 / Ultra $200 vs 試算頁 Plus $8 / Premium $30 / Super $100）+ Claude Code 訂閱內含 Haiku 5.5 預設 + Claude Opus 4.7 僅 Copilot Pro+ 以上可用 + 2026 Q4「AI IDE 定價 2.0」結構確立；開發者需要可比較的試算工具
- **目標客群**：台灣全端工程師（估 50,000 人）+ 一人 SaaS 開發者（估 5,000 家）+ 公司採購 decision maker（估 500 家）+ SI 顧問案（估 200 家）
- **技術複雜度**：2/5 — 前端表單 + credit 用量試算 + 多模型 pricing 整合 + Google Sheets / Notion 可嵌入；Node.js + Next.js + Vercel 1 週可上線
- **預估 MRR**：免費版 + Pro NT$199/mo（進階試算 + 多情境比較 + 匯出）× 300–1,000 用戶 = NT$ 60K–200K MRR；若接企業採購顧問 → NT$ 20K–60K per client × 2–5 clients / month = NT$ 40K–300K one-off
- **競品弱點**：全球有 CostBench、aicoolies、morphllm 等 pricing 整理頁，但缺「Credit / Usage pricing 2.0 可試算的互動表單 + 多模型 fallback 情境」；台灣在地中文無類似工具
- **切入建議**：10/21 Day 3 寫「GitHub Copilot vs Cursor vs Claude Code 三家 AI IDE 試算 FAQ」blog + Notion 可嵌入試算表 → 10/22 Day 4 開發 Next.js 試算 SaaS 第一稿 → 11 月 Day 1 上線 Pro 版 + 開放企業採購顧問接案；分銷：Twitter / HN / Reddit r/cursor / Facebook Taiwan Developers Group

## 🧰 工具堆疊更新

- **🆕 Vercel AI SDK 6 Agent primitive 試裝**：今日 Day 3 試裝 1 條「ToolLoopAgent + MCP + human approval」最小 PoC；下週可做「AI SDK 6 vs Agents SDK vs Claude Agent SDK TypeScript 選型」blog
- **🆕 GitHub Copilot Credit 用量試算**：Pro+ $39 vs Cursor Premium $30 vs Claude Code 訂閱 benchmark 試算表定稿；下週接企業採購顧問接案
- **🔄 Cursor 兩套 pricing 分階段 rollout 時程追蹤**：官方 pricing 頁 vs 試算頁差異 FAQ 定稿；社群試算頁的 Plus $8 / Premium $30 / Super $100 / Ultra $200 需實地驗證
- **🔄 Supabase + per-user Turso + Supabase Compute 3 層 PoC 準備**：今日 Day 3 審計「Supabase Pro + Neon Launch + Convex Pro + Turso Scaler」4 家 pricing freeze；下週 Day 1 試裝 3 層 agentic SaaS PoC
- **🔄 Haiku 5.5 T+14 production ramp Day 3**：切第 3 條分類 subagent + 擴至摘要 workflow；本週可擴至 5–10 條 production subagent；effort levels 甜蜜點 = low 分類 / high 摘要
- **🔄 Agent Builder → Agents SDK 遷移 crunch T-40**：本週剩 5 日工作時間；10/25–10/31 進入「Evals 遷移週」加價接案；code export scaffold → Agents SDK TypeScript / Python 選型
- **🔄 iPhone Duo 10/23 開賣 push MVP Day 3 架構 freeze 最後一日**：電信三雄舊換新折抵矩陣寫定 + 中華電 500 門市地圖 bind 收尾 + 內螢幕 NT$37,000 FAQ 定稿；10/22 Day 4 Dry Run 全路徑；10/23 Live

## ⚡ 今日行動建議

- [ ] iPhone Duo 10/23 開賣 Day 3 架構 freeze 最後一日：10:00「電信三雄舊換新折抵矩陣（中華電 vs 台哥大 52,500 vs 遠傳 50,000）」寫定 + 15:00 中華電 500 門市地圖 bind Google Maps API 收尾 + 20:00 內螢幕 NT$37,000 FAQ 定稿（預期 3.5 小時）
- [ ] Evals read-only T-10 匯出 CLI 腳本定稿 + Promptfoo parity test skeleton 第一稿（預期 2.5 小時）
- [ ] Supabase + Turso + Compute 3 層 agentic SaaS 架構路線圖 blog + 「Supabase / Neon / Convex / Turso」4 家 pricing 審計 blog（預期 2 小時）
- [ ] Vercel AI SDK 6 Agent primitive 試裝「ToolLoopAgent + MCP + human approval」最小 PoC（預期 2 小時）
- [ ] GitHub Copilot Pro+ $39 vs Cursor Premium $30 vs Claude Code 訂閱 benchmark 試算表定稿（預期 1.5 小時）
- [ ] Haiku 5.5 production ramp Day 3：切第 3 條分類 subagent + 擴至摘要 workflow；latency 分佈紀錄入帳（預期 1.5 小時）
- [ ] 寫 1 篇中文 build-in-public：「iPhone Duo 10/23 開賣 push 48 小時 build log Day 3」或「GitHub Copilot vs Cursor vs Claude Code 三家 AI IDE 2026 Q4 Credit / Usage pricing 2.0 試算」

## ⏳ 待觀察

- 10/22：iPhone Duo 10/23 開賣前最後一日 — Day 4 Dry Run 全路徑；台哥大 / 遠傳實體門市清單是否公告為最後一個 trigger
- 10/23 08:00：iPhone Duo 中華電 500 門市開賣 — T+0 Day 1 Live push 日；首波貨源分配 vs 排隊人數比的真實缺口感
- 10/25：Anthropic IPO EDGAR 公開 S-1 Deadline（11/9 路演倒推 15 天）— T+4 若仍無 → bear case 第三支點加壓
- 10/31：OpenAI Evals read-only — T-10 倒數；是否可延期尚無官方口徑
- 11/3：美國期中選舉 — Anthropic IPO 路演起點前的最後政治 trigger
- 11/9：Anthropic IPO 期中選舉後路演可能日 — S-1 flip（EDGAR）仍為先行觀察訊號
- 11/30：OpenAI Agent Builder + Evals + reusable prompts 三件事一次下線 — T-40 倒數
- Q4 底：Google Gemini 4 預期落地 — DeepMind COO 「much earlier」than year-end 口徑；若 11 月前落地 → 3 大供應商重排 trigger
- 8/31 2027：Shopify legacy MCP cart tools EOL — T-314 遠期倒數
- Haiku 5.5 Over-refusal fix：Anthropic 修補時程、AutomationBench-AA 重測結果
- Supabase Compute：hosted sandbox 定價、agent-generated database limits、Head of Agentic Services roadmap 第一次公開
- Cursor 兩套 pricing 分階段 rollout：Plus $8 / Premium $30 / Super $100 試算頁 vs 官方 Pro $20 / Pro+ $60 / Ultra $200 何時收斂
- GitHub Copilot 個人方案註冊暫停：是否重啟 + Pro+ $39 的 Claude Opus 4.7 用量限制細則

## 📚 引用來源

1. [中央社 — 中華電信 iPhone Duo 10/23 開賣](https://www.cna.com.tw/postwrite/chi/444605) — 2026-09-10
2. [Mirror Media / SETN — 遠傳 iPhone Duo 10/23 舊換新最高折 5 萬](https://www.mirrormedia.mg/external/setn_1904699) — 2026-09-10
3. [CTEE — 遠傳台灣大 iPhone Pro 預購時間 性價比高](https://ctee.com.tw/news/consume/351430.html) — 2026-10
4. [TVBS — iPhone Duo 預購今晚 8 點開搶 台灣售價 官網搶購技巧](https://news.tvbs.com.tw/tech/4037011) — 2026-10-16
5. [中央社 — 台灣大哥大 myfone 10/16 20:00 開放預購 iPhone Duo](https://www.cna.com.tw/business/chinese/447172) — 2026-10
6. [Focus Taiwan — New iPhones sell out 2 minutes after preorders open](https://focustaiwan.tw/business/202609120006) — 2026-09-12
7. [Retail News Asia — Taiwan Telecoms Sell Out Initial iPhone 18 Pro and Foldable Duo Preorders in Minutes](https://retailnews.asia/taiwan-telecoms-sell-out-initial-iphone-18-pro-and-foldable-duo-preorders-in-minutes) — 2026
8. [OpenAI Developers — Deprecations](https://developers.openai.com/docs/deprecations) — 2026
9. [OpenAI Community — Deprecation notice: Agent Builder](https://community.openai.com/t/deprecation-notice-agent-builder/1382650) — 2026-06
10. [MCP Directory — OpenAI winding down Agent Builder and Evals Migration Guide](https://mcp.directory/blog/openai-agentkit-deprecation-2026) — 2026
11. [DevelopersDigest — OpenAI Agent Builder Evals Migration](https://www.developersdigest.tech/blog/openai-agent-builder-evals-migration) — 2026
12. [Pickaxe — OpenAI Agent Builder Deprecation](https://pickaxe.co/post/openai-agent-builder-deprecation) — 2026
13. [Classmethod — OpenAI AgentKit Workspace Agents Claude Cowork Nocode Comparison](https://dev.classmethod.jp/en/articles/openai-agentkit-workspace-agents-claude-cowork-nocode-agent-comparison/) — 2026
14. [Supabase — Acquiring Turso 官方部落格](https://supabase.com/blog/supabase-is-acquiring-turso) — 2026-10-02
15. [Pulse 2 — Supabase Raises $150M And Acquires Turso](https://pulse2.com/supabase-raises-150-million-and-acquires-turso/) — 2026-10-02
16. [Dealroom — Supabase raises $150M buys Turso agent database boom](https://dealroom.co/news/158564-supabase-raises-150m-buys-turso-to-chase-the-agent-database-boom/) — 2026-10
17. [Beri — Supabase buys Turso and $4.99 unlimited database plan](https://www.beri.net/article/supabase-turso-acquisition-database-per-agent-sqlite-postgres-pricing-continuity) — 2026-10
18. [AI Weekly — Supabase raises $150M buys Turso for AI Agent Databases](https://aiweekly.co/alerts/supabase-raises-150m-buys-turso-for-ai-agent-databases) — 2026-10
19. [Vals AI — Claude Haiku 5.5 Model](https://www.vals.ai/models/anthropic_claude-haiku-5-5) — 2026-10
20. [Metric Nexus — Claude Haiku 5.5 Benchmarks and Real Cost Math](https://metricnexus.ai/blog/claude-haiku-5-5-benchmarks-pricing) — 2026-10
21. [TechJackSolutions — Claude Haiku 5.5 Benchmark Pricing Artificial Analysis](https://techjacksolutions.com/ai-brief/claude-haiku-5-5-benchmark-pricing-artificial-analysis/) — 2026-10
22. [ComputingForGeeks — Claude Haiku 5.5 Released Features Benchmarks](https://computingforgeeks.com/claude-haiku-5-5-released-features-benchmarks/) — 2026-10
23. [Forkast — Anthropic IPO slip October November 2026 EDGAR S-1](https://forkast.news/?p=131253) — 2026-10-04
24. [LeverageShares — Anthropic IPO Date Valuation S-1 Status](https://leverageshares.com/us/anthropic-ipo-tracker/) — 2026
25. [Vercel Blog — AI SDK 6](https://vercel.com/blog/ai-sdk-6) — 2026
26. [AI SDK Dev — Announcing AI SDK 6 Beta](https://ai-sdk.dev/v5/docs/announcing-ai-sdk-6-beta) — 2026
27. [Noqta — Vercel AI SDK 6 TypeScript AI Agents Guide 2026](https://noqta.tn/en/blog/vercel-ai-sdk-6-typescript-ai-agents-guide-2026) — 2026-06-10
28. [Simon Willison — GitHub Copilot usage based billing](https://simonwillison.net/tags/github-copilot/) — 2026
29. [Codex / Daniel Vaughan — GitHub Copilot usage billing codex CLI cost comparison migration](https://codex.danielvaughan.com/2026/04/29/github-copilot-usage-billing-codex-cli-cost-comparison-migration/) — 2026-04-29
30. [Gigazine — GitHub Copilot Update Plan](https://gigazine.net/gsc_news/en/20260602-github-copilot-update-plan) — 2026-06-02
31. [eesel — Cursor Pricing 2026 Hobby Pro Business Plans](https://eesel.ai/blog/cursor-pricing) — 2026
32. [AICodeReview — Cursor Pricing in 2026 Hobby Pro Pro+ Ultra Teams Enterprise](https://aicodereview.cc/blog/cursor-pricing) — 2026
33. [Jetadmin — Cursor pricing explained plans credit system real costs 2026](https://www.jetadmin.io/blog/cursor-pricing-explained-plans-credit-system-and-real-costs-in-2026/amp/) — 2026
34. [TechNews — 百億 AI 基金首年僅投 7,500 萬 數發部公布 5 家獲投新創](https://technews.tw/?p=1520580) — 2026
35. [uanalyze — 數發部祭百億資金催生 AI 新創已核定 6 案 100 片 GPU 算力池](https://uanalyze.com.tw/articles/1078148404) — 2026
36. [actgsys — 2026 台灣中小企業 AI 補助完整攻略](https://actgsys.com/zh/blog/taiwan-sme-ai-subsidy-guide-2026) — 2026
37. [Business Next — 千人規模第四屆新創投資年會 10 月登場 擁抱變革](https://www.bnext.com.tw/article/92340/tsic_2026.09) — 2026-09
38. [uanalyze — 台灣新創動能爆發 吸金破千億創 10 年新高](https://uanalyze.com.tw/articles/4672147147) — 2026

[^edgar]: 美國證管會（SEC）的電子公開文件系統（Electronic Data Gathering, Analysis and Retrieval），上市公司 S-1、10-K 等法定申報文件都公告於此；首度公開 S-1 到路演起點之間通常需保留至少 15 日空窗，是 IPO 時程推算的核心錨點。

[^rls]: Postgres 的列級存取控制（Row Level Security），可依連線使用者身份對同一張表的不同列套用讀寫規則；Supabase 以此實作多租戶 per-user 隔離，是其跨越 Firebase 類 BaaS 的核心賣點之一，複雜 join 時需額外注意 planner 行為。

[^osworld]: 由香港大學 2024 年提出的多工作業系統代理人基準測試，涵蓋真實桌面應用（檔案、瀏覽器、辦公軟體等）跨 369 個任務；offline subset 為去掉網路依賴後的穩定子集，常被用於跨模型對照，數字愈高代表完成率愈好。

[^promptfoo]: 開源 LLM 評估與測試工具，支援以 YAML 設定跑多模型回歸、assertion 與 red-teaming；在 OpenAI Evals 於 2026-10-31 進入 read-only 之後，被社群遷移指南列為可對接的替代評估棧，但不含 workflow graph 比對能力。

[^tool-loop-agent]: Vercel AI SDK 6 新增的 Agent 類別，把「呼叫模型 → 解析工具呼叫 → 執行工具 → 回填結果」的迴圈封裝起來，原生支援 human-in-the-loop approval 中斷點與 MCP 工具；相較於手刻 while 迴圈，開發者可直接拿到 DevTools 可觀測性與 TypeScript 型別推論。

[^agentic-services]: Supabase 2026-10-02 收購 Turso 後新設的部門，由前 Turso 共同創辦人 Glauber Costa 掛帥，統籌 hosted sandbox、per-tenant SQLite 等為 AI 代理人設計的資料服務；此組織調整被外界視為 Postgres BaaS 正式轉型為 agent-first 平台的訊號。
