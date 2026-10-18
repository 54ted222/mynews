---
title: 每日創業情報 — 2026-10-19
date: 2026-10-19
tags: 創業情報, AI 產業, SaaS, 台灣
summary: 週一 iPhone Duo 10/23 開賣 T-4 進入準備週 Day 1 + Supabase 收購 Turso T+17 一人 SaaS 選型訊號 + Agent Builder T-42 + Evals T-12 + Haiku 5.5 T+12 shadow eval 收尾切 production 日。
keywords: iPhone Duo 中華電 500 門市 10月23日 8點 開賣, iPhone Duo Foxconn 良率 60% 鴻海 新日興 鉸鏈 Samsung Display 面板, Supabase 收購 Turso 150M GIC October 2 2026 agentic database, Supabase Head of Agentic Services Glauber Costa Pekka Enberg, OpenAI Agent Builder Agents SDK 11月30日 EOL code export workflow graph, OpenAI Evals read-only 10月31日 reusable prompts 下線 T-12, Claude Haiku 5.5 T+12 第三週 production ramp 分類 subagent, Anthropic IPO T+21 S-1 EDGAR 期中選舉 11月3日 路演, 第四屆台灣新創投資年會 10/14 15 擁抱變革 36 位創辦人, 數發部 100 億 AI 基金 100 片 GPU 算力池 2026 行動計畫 2.0
---

# 每日創業情報 — 2026-10-19

## 🎯 今日 TL;DR

- **週一 Day 1 開賣準備週啟動 + iPhone Duo 10/23 開賣 T-4 + Haiku 5.5 T+12（shadow eval 第 2 週收尾完成切 production Day 1）+ Agent Builder T-42 + Evals read-only T-12 + Anthropic IPO T+21 + GPT-6 Astra T+46 + Supabase 收購 Turso T+17 + 數發部 2.0 計畫最後執行年度** — 9 軸共振進入「本週 iPhone Duo 開賣 Live 週 + Haiku 5.5 production ramp Day 1 + 遷移 crunch 進最後 6 週」
- **🔄 iPhone Duo 10/23 開賣 T-4 — 中華電 500 門市 10/23 8:00 開賣已確認 + 中華電 9/10 已不再開放第二波預購 + 台灣大 myfone 10/16 20:00 預購結束、實體開賣時程仍未見官方公告 + 遠傳 10/16 10:00 開放搭資費／空機預約但實體開賣時程未公告 + Foxconn 9/17 良率 60% + Samsung Display 摺疊 OLED 面板 + 鉸鏈低良率 + 鴻海 + 新日興合資鉸鏈大單 + 內螢幕維修費高達 NT$37,000 元 + 2026 全球備貨 600–800 萬台 vs 原估 1,000 萬 ~2–4 成缺口** — 進入「10/23 Live push 架構 freeze × eSIM provisioning 排隊秒數指南 Dry Run × 中華電 500 門市地圖 bind 地圖 API × 原廠 vs 電信通路優惠差異表 freeze × 內螢幕維修費 NT$37,000 FAQ」5 軸收尾週
- **🆕 Supabase 完成 $150M growth financing（GIC[^gic] lead + CapitalG / IronArc / SquarePeg）+ 同步宣布收購 Turso T+17（10/2 公告）+ Turso 創辦人 Glauber Costa 轉任 Head of Agentic Services at Supabase + 共同創辦人 Pekka Enberg 同入 + Supabase 每週開 >100 萬 database + 強調 agent-generated software 將推需求超過當前容量 + Turso 平台繼續運作 + Supabase 規劃路徑讓 Turso 客戶使用更廣 Supabase 生態** — 對一人 SaaS 的 Postgres / SQLite 選型：**Supabase 一次把「大 project database」+「大量小型 agent-generated per-tenant database」兩條路徑收攏** → 原本「Supabase + Turso 混搭」堆疊方案進入觀察期；今日 Day 1 建議「Supabase pricing page 快照 + Turso 路線圖觀察 + Convex / Neon 替代選型」3 軸審計
- **🔄 Agent Builder → Agents SDK[^agents-sdk] 遷移 T-42 + Evals read-only T-12 + reusable prompts 11/30 同下線 — OpenAI 官方 deprecations 頁面確認 11/30 日期不變 + ChatKit 保留 + Responses API 不下線 + code export「starting point only」+ 不保證 workflow graph 轉換 + 不保證 1:1 behavior + multi-agent branching / handoffs 需人工重驗** — 週一 Day 1 進入「遷移 checklist blog 公開發佈 + landing page 第一稿定稿 + 2–4 slot per month 開放 + 10/31 Evals read-only 前兩週倒數 trigger」4 軸；本週剩 5 日工作時間
- **🔄 Haiku 5.5 T+12 — 第 2 週 shadow eval 收尾完成 + 本週 Day 1 進入「production ramp」第 1 日 + 甜蜜點：短 context + 分類 / 摘要 / 轉譯 subagent + ≤100K + max effort + Vals Index #16 of 45 (54.31%) + OSWorld 72.4%（vs Haiku 4.5 15.7%）+ 禁區：agentic coding + Terminal 操作 + >100K + refusal 敏感 + Haiku 5.5 已預設整合 Claude Code v2.1.293（10/7 release，1M context default）** — 今日 Day 1 建議切「至少 2 條分類 subagent 從 Opus 4.7 → Haiku 5.5」比對：GDPval 成本降幅 + Over-refusal rate 真實落點 + response latency 分佈
- **🆕 Google Gemini 4「much earlier」than year-end — DeepMind COO Koray Kavukcuoglu 9/25 在 Computerworld 訪談說 Gemini 4 已進入「early post-training」+ 延遲的 Gemini 3.5 Pro 仍未現身 + Gemini 3 Pro 自 2025/11 僅更新一次 + 外部投稿 speculation 可能 10 月發布** — 對一人 SaaS：若 11 月前 Gemini 4 落地 + 10/31 OpenAI Evals read-only + 11/30 Agent Builder EOL → Q4 底「3 大模型供應商重排」已成高機率事件；今日 Day 1 建議預留 Gemini API key + 預寫 model router[^model-router] 架構
- **🔄 Anthropic IPO T+21 — EDGAR[^edgar] 公開 S-1 仍無蹤影 + Forkast 10/4 分析指 slip 至 11 月 + Reuters「期中選舉 11/3 後路演」口徑續行 + 傳 target valuation ~US$2T vs 當前 US$965B（5/2026 series） + 公開 S-1 需在路演前 ≥15 天出現 + 承銷 Goldman Sachs + Morgan Stanley + JPMorgan + Citigroup** — 本週 Day 1：倒推「11/3 期中選舉 → 11/9 路演可能日 → 需 10/25 前出現公開 S-1」3 階段；10/25 若仍無 EDGAR S-1 → bear case 第三支點
- **🔄 第四屆台灣新創投資年會 10/14–15 已結束 — 「擁抱變革」主題 + 36 位頂尖新創創辦人 + 分為創辦人論壇與投資人論壇 + 2024 國內新創投資額破 NT$1,002 億 10 年新高 + 2025 底台灣新創總數 10,552 家 + 2026 創新創業白皮書列「鼓勵大企業投資新創 + 研發抵減 + 研發成果資本化」最急迫** — 對一人 / 2–3 人團隊：年會「鼓勵大企業投資新創」訊號下，「for enterprise」SaaS vertical 2026 Q4 到 2027 可能是 bootstrap-to-equity 的新窗口

## 🔄 昨日追蹤

- 🔄 **iPhone Duo 10/23 開賣 T-5 → T-4**：中華電 500 門市 8:00 開賣已三度確認（9/10 公告 + 10/18 brief 落實 + 10/19 本日複驗）；台灣大 myfone、遠傳實體開賣時程仍未見官方公告；進入「本週 Live 架構 freeze」階段
- 🔄 **TSMC Q3 法說 beat T+3 → T+4**：盤後反應窗結束；外資第二輪 TP 上修觀察續行；10 月的券商報告未見；本週關注 N2 / CoWoS[^cowos] 2027 細節
- 🔄 **Haiku 5.5 T+11 → T+12**：第 2 週 shadow eval 收尾日完成 → 進入 production ramp Day 1；甜蜜點：短 context + 分類 subagent + max effort；今日切 2 條 subagent 到 production
- 🔄 **Agent Builder 11/30 T-43 → T-42 + Evals 10/31 T-13 → T-12 + reusable prompts 同下線**：遷移 checklist blog 定稿日 → Day 1 公開發佈 + landing page + 開放 2–4 slot per month
- 🔄 **Anthropic IPO 11/9 T+22 → T+21**：EDGAR 仍無公開 S-1；若 10/25 前仍無 → bear case 第三支點加壓
- 🔄 **GPT-6 Astra T+45 → T+46**：9/3 釋出已滿 46 天；定價 $10 / $50 per M 偏貴續行；今日 Day 1「Astra 主推理 + Haiku 5.5 分類 subagent」雙模型 pipeline 比對成本 Day 3 紀錄入帳
- 🔄 **Shopify UCP cart MCP 遷移 PoC**：legacy `/api/mcp` → 新 `/api/ucp/mcp` 試裝 Day 2 → Day 3；跨境賣家 1-day migration consulting landing page 第一稿

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🔄 iPhone Duo 10/23 開賣 T-4 — 中華電 500 門市 10/23 8:00 開賣已確認（9/10 公告 + 中華電 10/18 不再開放第二波預購）+ 台灣大 myfone 10/16 20:00 預購結束、實體開賣時程仍未見官方公告 + 遠傳 10/16 10:00 開放預約但實體開賣未公告 + Foxconn 9/17 良率 60% + 內螢幕維修 NT$37,000 元 + 售價 NT$74,900 起（頂規 2TB NT$118,900）+ 全球備貨 600–800 萬 vs 原估 1,000 萬 2–4 成缺口 + 僅支援雙 eSIM + Samsung Display 摺疊 OLED 面板 + 鉸鏈供應 + 100+ 鉸鏈零件 + 鴻海 + 新日興合資鉸鏈大單** | [中央社 — 中華電信 iPhone Duo 10/23 開賣](https://www.cna.com.tw/postwrite/chi/444605)、[自由時報 — 蘋果 iPhone Duo 摺疊新機中華電信開放限量網路預約](https://ec.ltn.com.tw/article/breakingnews/5569149)、[TVBS — iPhone Duo 預購今晚 8 點開搶](https://news.tvbs.com.tw/tech/4037011)、[Ubergizmo — iPhone Duo Delayed Foldable Production Hurdles](https://www.ubergizmo.com/2026/09/iphone-duo-to-be-delayed-foldable-faces-production-hurdles-ahead-of-october-launch/)、[Channel News — Apple's $3,950 Duo Foldable Heavily Reliant On Samsung Technology](https://www.channelnews.com.au/apples-3950-duo-foldable-heavily-reliant-on-samsung-technology/)、[AsiaNews — Why Apple's first foldable may be its most Korea-dependent iPhone yet](https://asianews.network/?p=300331)、[iDevice — iPhone Duo launch stock yields reported near 60](https://idevice.com/iphone-duo-launch-stock-could-be-thin-with-assembly-yields-reported-near-60) | 週一 Day 1 開賣準備週啟動：「10/23 Live push 架構 freeze × eSIM provisioning 排隊秒數指南 Dry Run × 中華電 500 門市地圖 bind 地圖 API × 原廠 vs 電信通路優惠差異表 freeze × 內螢幕維修費 NT$37,000 FAQ」5 軸收尾；per-project「10/23 中華電 500 門市地圖 + 電信三雄實體開賣差異 FAQ + 原廠 vs 電信通路優惠差異 + eSIM provisioning 排隊秒數指南 + 全球 600–800 萬備貨 vs 1,000 萬差距 bear 支點 + 內螢幕維修 NT$37,000 元 bear 支點 + 鴻海 / 新日興鉸鏈大單 bull 支點」7 合一 vertical push notification NT$ 100K–220K | 機會：**「10/23 中華電 500 門市地圖整合 × 電信三雄實體開賣差異 FAQ × 原廠 vs 電信通路優惠差異 × eSIM provisioning 排隊秒數指南 × 內螢幕維修 NT$37,000 bear 支點 × Foxconn 良率 60% × Samsung Display 鉸鏈 / 面板低良率 × 全球備貨 600–800 萬 vs 1,000 萬差距」8 合一 T-4 開賣週 Day 1 pack NT$ 120K–280K**；甜蜜點 = 10/19 10:00「10/23 Live push 架構 freeze + 內螢幕維修費 FAQ」+ 15:00 eSIM provisioning 指南 Dry Run + 20:00 中華電 500 門市地圖 bind；威脅：中華電 500 門市量能是全台首批主軸，但「首批 <20,000 vs 500 門市」= 平均每店 ~40 台 ÷ 開賣當日 8:00 排隊人數，若 push 只喊「10/23 搶首批」會低估「平均每店 40 台」真實缺口感；台灣大 / 遠傳實體開賣時程至今未公告 → 消費者可能誤以為中華電為唯一通路 → push 可補「其他電信實體開賣觀察清單」 |
| **🔄 第四屆台灣新創投資年會 10/14–15 已結束 — 「擁抱變革」主題 + 36 位頂尖新創創辦人 + 分為創辦人論壇與投資人論壇 + 2024 新創投資額破 NT$1,002 億 10 年新高（健康醫療、生技、能源、AI）+ 2025 底台灣新創總數 10,552 家 + 2026 創新創業白皮書列「鼓勵大企業投資新創 + 研發抵減 + 研發成果資本化」最急迫** | [Business Next — 千人規模第四屆新創投資年會 10 月登場](https://www.bnext.com.tw/article/92340/tsic_2026.09)、[uanalyze — 台灣新創動能爆發 吸金破千億創 10 年新高](https://uanalyze.com.tw/articles/4672147147) | 對一人 / 2–3 人團隊：年會「擁抱變革」+「鼓勵大企業投資新創」訊號下，「for enterprise」SaaS vertical 2026 Q4 到 2027 可能是 bootstrap-to-equity 的新窗口；per-project「大企業新創合作 pilot 顧問 × 研發抵減申請 × 研發成果資本化流程指南」3 合一 vertical consulting NT$ 60K–200K per client | 機會：**「大企業新創合作 pilot 顧問 × 研發抵減申請顧問 × 2026 創新創業白皮書解讀 blog + 大企業 pilot 入口 landing page」4 合一 vertical consulting NT$ 80K–250K per client**；甜蜜點 = 10/19 Day 1 寫「2026 創新創業白皮書 3 大急迫議題解讀」blog + 1 篇「大企業新創 pilot 合作架構 FAQ」blog；威脅：白皮書訊號下，若 2027 年前「研發抵減 + 研發成果資本化」政策細則未落實，顧問服務需在前期揭露風險 |
| **🔄 數發部 100 億 AI 新創基金進度 Day 3 — 已核定投資 5 家企業、6 案 + 累計注資 >NT$7,500 萬 + 進度相對 10 年 100 億目標大幅落後 + 2026 期盼添購 100 片 GPU 擴充算力池（2025 預算曾遭刪減）+ 經濟部產業競爭力輔導團 2026/3 底累計輔導 2,058 家 AI 導入（中小企業佔 91%）+ 經濟部韌性特別預算個案最高 500 萬 + 聯盟最高 4,000 萬 + 行政院「台灣 AI 新十大建設」計畫逐年規劃** | [uanalyze — 數發部祭百億資金催生 AI 新創已核定 6 案](https://uanalyze.com.tw/articles/1078148404)、[Business Next — moda AI startup 100 billion plan](https://www.bnext.com.tw/article/90239/moda-ai-startup-100billion-plan)、[TechNews — 百億 AI 基金首年僅投 7,500 萬](https://technews.tw/?p=1520580)、[actgsys — 2026 台灣中小企業 AI 補助完整攻略](https://actgsys.com/zh/blog/taiwan-sme-ai-subsidy-guide-2026) | 週一 Day 3 政策追蹤：「百億基金進度 × 7,500 萬注資 vs 100 億 10 年目標 × 經濟部 2,058 家輔導統計 × 行政院 AI 新十大建設 × 2027 行動計畫 2.0 後續未定」5 軸；per-project「30 人以下中小企 AI 補助申請顧問 × 經濟部韌性特別預算（500 萬 / 4,000 萬）申請顧問 × 數發部 100 片 GPU 算力池申請流程指南 × A+ 早期新創補助 landing page + AI 新十大建設政策追蹤」5 合一 vertical consulting NT$ 60K–250K per client | 機會：**「30 人以下中小企 AI 補助 × 經濟部韌性特別預算 500 萬 / 4,000 萬 × 數發部 GPU 算力池 × A+ 早期新創補助 × AI 新十大建設政策追蹤」5 合一諮詢服務 NT$ 80K–300K per client**；甜蜜點 = 10/19 Day 3 寫 1 篇「經濟部韌性特別預算 500 萬 / 4,000 萬申請指南」blog + 1 篇「數發部 100 片 GPU 算力池申請流程」blog + 1 篇「AI 新十大建設 2026 首年規劃解讀」blog；威脅：100 億基金進度嚴重落後 + 2027 政策方向未定 → 顧問服務「2027 後接案」風險提高 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🆕 Supabase 收購 Turso + $150M growth financing（10/2 公告 T+17）— GIC lead + CapitalG + IronArc + SquarePeg + Turso 創辦人 Glauber Costa → Head of Agentic Services at Supabase + 共同創辦人 Pekka Enberg 同入 + Supabase 每週開 >100 萬 database + 強調 agent-generated software 將推需求超容量 + Turso 平台繼續運作 + Supabase 規劃讓 Turso 客戶跨 Supabase 生態** | 一人 SaaS 後端 / 向量資料庫 / per-tenant / 邊緣 SQLite | 大 project Postgres + 大量小型 agent-generated per-tenant database 兩條路徑收攏 | Supabase Pro $25/mo（100K MAU、8GB disk、250GB egress、100GB storage）；Turso Scaler $29/mo | vs Neon Launch $19/mo + 用量計費 / Convex Pro $25/mo / Firebase 傳統 Postgres；差異在「同時覆蓋大 project + 大量小型 agent database」 | 🟢 一人 SaaS：**今天 Day 1 審計「Supabase pricing + Turso 路線圖觀察 + Neon / Convex 替代」3 軸**；🟡 已用 Turso：維持觀察、不急遷；🔴 深度 Postgres 功能依賴（Row Level Security[^rls]、PgVector 複雜 join）：Supabase 續領先；下週可試裝 1 條「Supabase + per-user Turso」agentic SaaS PoC |
| **🆕 Google Gemini 4「much earlier」than year-end — DeepMind COO Koray Kavukcuoglu 9/25 Computerworld 訪談 + 已進入 early post-training + 延遲 Gemini 3.5 Pro 仍未現身 + Gemini 3 Pro 自 2025/11 僅更新一次 + 外部 speculation 10 月發布可能 + Gemini 3 Pro 已有 1M context + Gemini 3 Flash subrelease 多次** | LLM 旗艦模型 / Agent 核心推理 | 複雜 Agent 核心推理、長 context 任務、Google / Workspace 深度整合 | 預期 vs Gemini 3 Pro（$1.25 / $5 per M < 128K；$2.5 / $15 per M ≥ 128K）+ cached reads $0.31; 預期 Gemini 4 定價持平或略貴 | vs OpenAI Astra ($10 / $50) / Claude Opus 4.7 / GPT-6 Astra；若 Q4 底落地 → 「3 大模型供應商重排」高機率事件 | 🟢 本週 Day 1 預留 Gemini API key + 預寫 model router 架構（避免 11 月 3 大供應商重排後重寫）；🟡 Agent core 推理：Opus 4.7 保 + Astra / Gemini 4 試裝；🔴 單一模型依賴：Q4 底前應提前多模型 fallback；下週 Day 1 跑 1 條「Opus 4.7 ↔ Astra ↔ Gemini 3 Pro ↔ Haiku 5.5」4 模型 benchmark |
| **🔄 Claude Haiku 5.5 T+12 — 第 2 週 shadow eval 收尾完成 + 本週 Day 1 production ramp 第 1 日 + Vals Index #16 of 45（54.31%）+ OSWorld 72.4% + Terminal-Bench 39.2%（max effort）vs Sonnet 5.5 70.6% + Artificial Analysis AutomationBench-AA 35% + Over-refusal bug 待修 + 1M context + 128K output + Claude Code v2.1.293 已預設整合 Haiku 5.5 1M context（10/7 release）+ effort levels 可調 + max effort GDPval-AA 1620 vs medium 1277（差 343 ppt）** | LLM 小模型 / 高頻 subagent / production ramp | 短 context（≤100K）分類、摘要、轉譯；effort levels 可調推理深度 | $0.10/M in、$0.50/M out（≤100K）；$0.50/M in、$2.50/M out（>100K）；cache reads $0.01/M | vs Haiku 4.5（15.7% OSWorld）；OSWorld 72.4% 跳升 56.7 ppt；vs Sonnet 5.5 Terminal-Bench 2 倍差距；AutomationBench-AA 35% 落後對手 53–60%；effort levels max vs medium 差 343 ppt；Over-refusal bug 待修補 | 🟢 T+12 production ramp Day 1：切「至少 2 條分類 subagent 從 Opus 4.7 → Haiku 5.5」+ 比對「GDPval 成本降幅 × Over-refusal rate 真實落點 × response latency 分佈」；🟡 effort levels：先 low 做分類、high 做摘要；🔴 禁區：agentic coding + Terminal 操作 + >100K + refusal 敏感；本週可大量切分類 subagent 到 production |
| **🔄 OpenAI Agent Builder → Agents SDK 遷移 T-42 + Evals read-only T-12 + reusable prompts 11/30 同下線 + OpenAI 官方 deprecations 頁面確認 11/30 日期不變 + ChatKit 保留 + Responses API 不下線 + code export「starting point only」+ 不轉換 workflow graph + 不保證 1:1 behavior + multi-agent branching / handoffs 需人工重驗** | Agent 框架遷移 / developer tool | 從 no-code Agent Builder 遷移到 code-first Agents SDK | Agents SDK 免費（開源）+ API 計費另計；Workspace Agents 2026 Q4 已開放 | vs Workspace Agents / Claude Agent SDK / LangGraph；Agents SDK 的差異在「OpenAI 官方 + TypeScript / Python + 整合 ChatKit / Responses API」 | 🟢 以 Agent Builder 建 production agent 的台灣中小企 / SI 顧問案：**今天 Day 1 公開發佈遷移 checklist blog + landing page 第一稿定稿 + 開放 2–4 slot per month**；🟡 用 reusable prompts 的用戶：11/30 同下線，需同時遷移；🔴 ChatKit / Responses API 保留 → 不急遷；10/31 Evals read-only T-12 trigger 可切「10/25–10/31 Evals 遷移週」 |
| **🆕 Octane AI 10/4 pricing drop T+15 — 底層價 $50 → $43 月（-14%）+ 頂層仍 $500/mo + 四個 plan 區間 $43–$500/mo + CostBench 自動偵測 + 已複核 vendor 頁** | AI 購物助手 / Shopify SMB SaaS | Shopify 商家網站 AI 購物助手與個人化推薦 | $43–$500/mo | vs Rebuy Engine / Rep AI / Zoovu；Octane AI 的差異在「專注 Shopify + 底層價剛下調」 | 🟢 台灣 Shopify 跨境賣家：底層價 $43 試裝 PoC 風險低；🟡 已用其他 Shopify AI 助手：等 Rebuy / Rep AI 跟進；🔴 非 Shopify 商家：等 UCP 擴張；本週 Day 1 可與 Shopify UCP cart MCP 遷移 PoC 一起試裝 |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：iPhone Duo 10/23 開賣 Live push MVP + 中華電 500 門市地圖 + 內螢幕維修 NT$37,000 FAQ（T-4 準備週 Day 1）🔄

- **痛點來源**（接續 10/17, 10/18 brief 點子 1）：中華電 500 門市 10/23 8:00 開賣已確認 + 中華電不再開放第二波預購 + 台灣大 myfone 預購結束但實體開賣未公告 + 遠傳實體開賣未公告 + Foxconn 9/17 良率 60% + 內螢幕維修費高達 NT$37,000 元（約機身價 50%）+ 僅支援雙 eSIM 新流程 + 全球備貨 600–800 萬 vs 1,000 萬 2–4 成缺口 + 平均每店 ~40 台 ÷ 開賣當日 8:00 排隊人數的真實缺口感；一般媒體 push 只提事後結果，缺「開賣前中華電 500 門市地圖 × 內螢幕維修 NT$37,000 bear 支點 × eSIM provisioning 排隊秒數 × 電信三雄實體通路差異化 FAQ」vertical
- **目標客群**：10/23 想搶首批 iPhone Duo 的台灣消費者（估 30 萬人試搶）+ 電信通路業務（估 1,500 人）+ 跨境代購（估 1,000 家）+ 蘋概股分析師（估 500 人）+ 蘋果維修 / 配件商（估 500 家）
- **技術複雜度**：3/5 — Node.js + 中華電 500 門市公開 catalog scraping（公開資訊不涉違規）+ Google Maps API 整合 + WebSocket push + APNs / FCM + 快取控制 + eSIM provisioning 流程手動測試 + 內螢幕維修費 FAQ 整合蘋果官方 AppleCare+ 試算
- **預估 MRR**：one-off NT$ 50–100 × 30 萬搶購者 = NT$ 500K–1.5M event-based；若擴展為「蘋果新品預購 + 開賣當日缺口 + 門市地圖 + 維修費 push」訂閱產品 → NT$ 199/mo × 1,500 用戶 = NT$ 300K MRR
- **競品弱點**：台灣目前無「iPhone 開賣當日中華電 500 門市地圖 × 內螢幕維修 NT$37,000 FAQ × 電信三雄實體開賣差異 × eSIM provisioning 排隊秒數」vertical push；10/23 開賣是本月最後第 2 波機會
- **切入建議**：10/19 Day 1 架構 freeze + 中華電 500 門市地圖 bind Google Maps API + 內螢幕維修 NT$37,000 FAQ 寫定 → 10/20 Day 2 WebSocket push + APNs 整合 → 10/22 Day 4 Dry Run → 10/23 Live：07:00 開賣前 FAQ 定稿 + 08:00 開賣第 1 波「中華電 500 門市首批貨源分配 + eSIM provisioning 排隊秒數 + 內螢幕維修 NT$37,000 bear 支點」push + 15:00 第 2 波盤後缺口精算 + 20:00 補貨時程更新 push

### 點子 2：Agent Builder → Agents SDK 遷移顧問 landing page + 10/31 Evals T-12 加壓接案（T-42 Day 1 公開）🔄

- **痛點來源**（接續 10/16, 10/17, 10/18 brief 點子 2）：11/30 下線剩 42 天 + 10/31 Evals read-only 剩 12 天 + reusable prompts 11/30 同下線 + OpenAI 官方 deprecations 頁面確認 11/30 日期不變 + code export「starting point only」+ 不轉換 workflow graph + 不保證 1:1 behavior + multi-agent branching / handoffs 需人工重驗 + ChatKit 保留 + Responses API 不下線；本週 Day 1 進入「遷移 checklist blog 公開發佈 + landing page 定稿 + 開放 2–4 slot per month」3 軸
- **目標客群**：以 Agent Builder 搭建 production agent 的台灣中小企 / SI 顧問案（10–50 人規模）+ reusable prompts 11/30 同下線用戶群 + ChatKit + Responses API 用戶 + 10/31 Evals read-only 前兩週倒數 trigger 用戶
- **技術複雜度**：2/5 — service business；Agents SDK TypeScript / Python + workflow re-architecture + ChatKit / Responses API 保留部分不動 + 遷移 checklist 可模板化 + 10/31 Evals 前兩週倒數的「Evals 遷移週」可模組化
- **預估 MRR**：N/A（one-off NT$ 60K–200K per client × 2–4 clients / month）；加上「10/25–10/31 Evals 遷移週」加價 20–40% 可達 NT$ 80K–280K per client
- **競品弱點**：台灣尚無針對 Agent Builder EOL 的專門顧問；多數 SI 顧問做「新建」而非「遷移」；OpenAI 官方 Migrate from Agent Builder 文件只給技術框架，缺台灣在地整合顧問
- **切入建議**：10/19 Day 1 遷移 checklist blog 公開發佈 + landing page 第一稿定稿 + 開放 2–4 slot per month → 10/25–10/31「Evals 遷移週」加價接案 → 11/01 進入「Agent Builder EOL 最後 29 天 crunch」接案 → 11/30 EOL 前 1 週關閉接案

### 點子 3：Supabase + per-user Turso agentic SaaS 架構顧問 + Supabase pricing 審計 blog（Supabase T+17 收購 Turso 訊號）🆕

- **痛點來源**：Supabase 10/2 $150M + 收購 Turso 已 T+17 + Turso 創辦人入 Head of Agentic Services + Supabase 每週開 >100 萬 database + 強調 agent-generated software 將推需求超容量；對一人 SaaS：「大 project database」+「大量小型 agent-generated per-tenant database」兩條路徑收攏 → 原本「Supabase + Turso 混搭」堆疊方案進入觀察期 → 需知道新路線圖、per-tenant pricing、agent-generated database 的 limits
- **目標客群**：使用 Supabase 的台灣一人 / 2–3 人 SaaS 團隊（估 1,500 家）+ 使用 Turso 的 edge SQLite 用戶（估 300 家）+ 建 agentic SaaS 架構的 developer（估 500 家）
- **技術複雜度**：3/5 — Postgres / SQLite 架構設計 + per-tenant isolation + agent-generated database provisioning + Supabase RLS + Turso schema sync；顧問服務可模板化
- **預估 MRR**：one-off NT$ 40K–120K per client × 3–5 clients / month = NT$ 120K–600K；若做訂閱式「agentic SaaS 架構維護 + Supabase pricing 審計」→ NT$ 3K–8K/mo × 30–100 clients = NT$ 90K–800K MRR
- **競品弱點**：台灣尚無針對「Supabase + Turso 收購後路線圖」的專門顧問；多數 developer 不清楚「大 project Postgres」vs「per-tenant small SQLite」兩條路徑的分界；Supabase pricing 需定期審計（CostBench 自動偵測可做工具 moat）
- **切入建議**：10/19 Day 1 寫「Supabase 收購 Turso 的 agent-generated database 路線圖解讀」中文 blog + 「Supabase + per-user Turso agentic SaaS 架構 FAQ」blog + landing page 第一稿 → 10/22 Day 4 開放免費 1 小時諮詢 slot → 下週起接案

### 點子 4：Google Gemini 4 預期落地前 model router 架構服務 + Opus / Astra / Gemini / Haiku 多模型 fallback 顧問（Q4 底 3 大供應商重排前搶案）🆕

- **痛點來源**：Google Gemini 4 DeepMind COO 9/25 說「much earlier」than year-end + 延遲 Gemini 3.5 Pro 仍未現身 + 10/31 OpenAI Evals read-only + 11/30 Agent Builder EOL → Q4 底「3 大模型供應商重排」已成高機率事件；對一人 SaaS：若單一模型依賴 → Q4 底 Risk 高 → 需提前多模型 fallback；model router（OpenRouter、Portkey、LiteLLM 等）配置 + 成本 benchmark 的 vertical 顧問空間打開
- **目標客群**：使用單一模型（OpenAI 或 Anthropic）的台灣一人 SaaS（估 2,000 家）+ 建 AI agent 的 developer（估 500 家）+ 需跨模型 fallback 的 SI 顧問案（估 200 家）
- **技術複雜度**：2/5 — service business + 架構顧問；OpenRouter / Portkey / LiteLLM + model router 配置 + 多模型 fallback + 成本 benchmark + 需熟悉 Opus 4.7 / Astra / Gemini 3 Pro / Haiku 5.5 的 pricing + context + benchmark 數據
- **預估 MRR**：one-off NT$ 30K–100K per client × 3–5 clients / month = NT$ 90K–500K；若做訂閱式「multi-model fallback 維護」→ NT$ 2K–5K/mo × 50–150 clients = NT$ 100K–750K MRR
- **競品弱點**：台灣尚無針對「Q4 底 3 大模型供應商重排」的 model router 顧問；多數 developer 不清楚 OpenRouter vs Portkey vs LiteLLM 的 trade-off；Gemini 4 落地時程不明 → 顧問 window 僅限 Q4 底
- **切入建議**：10/19 Day 1 寫「model router 架構 2026 Q4 選型 FAQ」blog + 「Opus 4.7 ↔ Astra ↔ Gemini 3 Pro ↔ Haiku 5.5 4 模型 benchmark」blog → 10/22 Day 4 開放免費 1 小時諮詢 → 11 月進入 crunch 接案期

## 🧰 工具堆疊更新

- **🆕 Supabase + per-user Turso agentic SaaS PoC**：今日 Day 1 審計「Supabase pricing + Turso 路線圖觀察 + Neon / Convex 替代」3 軸；下週可試裝 1 條「Supabase project database + per-user Turso SQLite」agentic SaaS PoC；若 agent-generated database 需求成立，可考慮主線
- **🆕 Google Gemini 4 model router 預留**：今日 Day 1 預留 Gemini API key + 預寫 model router 架構（避免 11 月 3 大供應商重排後重寫）；下週可試裝 1 條「OpenRouter / Portkey / LiteLLM」3 工具並排 PoC
- **🔄 Haiku 5.5 T+12 production ramp Day 1**：切「至少 2 條分類 subagent 從 Opus 4.7 → Haiku 5.5」+ 比對「GDPval 成本降幅 × Over-refusal rate 真實落點 × response latency 分佈」；下週可擴至 5–10 條 production subagent
- **🔄 Agent Builder → Agents SDK 遷移 checklist blog Day 1 公開發佈**：ChatKit / Responses API 保留清單 FAQ + landing page 第一稿 + 開放 2–4 slot per month；10/25–10/31 進入「Evals 遷移週」加價接案
- **🔄 iPhone Duo 10/23 開賣 push MVP Day 1 架構 freeze**：中華電 500 門市地圖 bind Google Maps API + 內螢幕維修 NT$37,000 FAQ 寫定；10/20–10/22 Day 2–4 整合、Dry Run；10/23 Live
- **🔄 Shopify UCP cart MCP 遷移 PoC Day 3**：legacy `/api/mcp` → 新 `/api/ucp/mcp` 試裝；跨境賣家 1-day migration consulting landing page 第一稿；可與 Octane AI 底層價 $43 試裝一起打包
- **🔄 GPT-6 Astra 主推理 + Haiku 5.5 分類 subagent 雙模型 pipeline Day 3**：比對成本紀錄入帳；Astra $10 / $50 per M 貴但 OSWorld 2.0 72.6% 最高；Haiku 5.5 $0.10 / $0.50 per M 便宜但 Terminal-Bench 39.2% 禁區
- **🔄 TSMC 法說 bull / bear 雙版 pack 收尾完成**：10/15 Q3 beat × Q4 財測 +58% × 毛利 66.4% × 2027 CoWoS 2.17M × 高盛 TP 2,330 × Aletheia TP 2,400 × 海外廠 3–4% 稀釋 bear 支點；本週關注外資第二輪 TP 上修

## ⚡ 今日行動建議

- [ ] iPhone Duo 10/23 開賣 push MVP Day 1 架構 freeze：中華電 500 門市地圖 bind Google Maps API + 內螢幕維修 NT$37,000 FAQ 寫定 + eSIM provisioning 排隊秒數指南 Dry Run（預期 3.5 小時）
- [ ] Agent Builder → Agents SDK 遷移 checklist blog Day 1 公開發佈 + landing page 第一稿定稿 + 開放 2–4 slot per month（預期 2.5 小時）
- [ ] Supabase 收購 Turso 的 agent-generated database 路線圖解讀 blog + Supabase + per-user Turso agentic SaaS 架構 FAQ（預期 2 小時）
- [ ] Google Gemini 4 預期落地前 model router 架構 FAQ blog + 預留 Gemini API key + 預寫 OpenRouter / Portkey / LiteLLM 3 工具 fallback skeleton（預期 2 小時）
- [ ] Haiku 5.5 production ramp Day 1：切 2 條分類 subagent 從 Opus 4.7 → Haiku 5.5；比對「GDPval 成本降幅 × Over-refusal rate × latency 分佈」（預期 2 小時）
- [ ] 2026 創新創業白皮書 3 大急迫議題解讀 blog + 經濟部韌性特別預算 500 萬 / 4,000 萬申請指南 blog 草稿（預期 1.5 小時）
- [ ] 寫 1 篇中文 build-in-public：「iPhone Duo 10/23 開賣 push 96 小時 build log Day 1」或「Supabase + per-user Turso agentic SaaS 架構實戰」

## ⏳ 待觀察

- 10/23 08:00：iPhone Duo 中華電 500 門市開賣 — T-4 倒數；全台首波貨源分配 vs 排隊人數比的真實缺口感
- 10/25：Anthropic IPO EDGAR 公開 S-1 Deadline（11/9 路演倒推 15 天）— T+15 若仍無 → bear case 第三支點加壓
- 10/31：OpenAI Evals read-only — T-12 倒數；是否可延期尚無官方口徑
- 11/3：美國期中選舉 — Anthropic IPO 路演起點前的最後政治 trigger
- 11/9：Anthropic IPO 期中選舉後路演可能日 — S-1 flip（EDGAR）仍為先行觀察訊號
- 11/30：OpenAI Agent Builder + Evals + reusable prompts 三件事一次下線 — T-42 倒數
- Q4 底：Google Gemini 4 預期落地 — DeepMind COO 「much earlier」than year-end 口徑；若 11 月前落地 → 3 大供應商重排 trigger
- 8/31 2027：Shopify legacy MCP cart tools EOL — T-316 遠期倒數；跨境賣家需在上半年完成遷移
- Haiku 5.5 Over-refusal bug：Anthropic 修補時程、Artificial Analysis AutomationBench-AA 重測結果
- Supabase 收購 Turso：per-tenant pricing + agent-generated database limits 細節、Turso 創辦人 Head of Agentic Services 的 roadmap 第一次公開
- Microsoft Agent Framework vs AutoGen maintenance mode：後續 roadmap 清晰度
- 台灣大 / 遠傳 iPhone Duo 實體開賣時程：至 10/19 仍未見官方公告，10/23 前若未落實 → 消費者需面對「中華電為唯一通路」

[^agents-sdk]: OpenAI 2026 推出的開源 Agent 框架，支援 TypeScript 與 Python，以程式碼而非拖拉介面建構 multi-agent workflow，整合 Responses API 與 ChatKit；為 11/30 下線的 no-code Agent Builder 指定遷移目標，但官方 code export 僅是 starting point、不保證行為一比一。

[^gic]: 新加坡政府投資公司（GIC Private Limited），1981 年成立的主權財富基金，長期管理約 US$8,000 億等級的外匯儲備，活躍於全球後期 PE / VC 大額輪，常任 anchor investor；此次領投 Supabase $150M growth round。

[^edgar]: 美國證管會（SEC）的電子公開文件系統（Electronic Data Gathering, Analysis and Retrieval），上市公司 S-1、10-K 等法定申報文件都公告於此；首度公開 S-1 到路演起點之間通常需保留至少 15 日空窗，是 IPO 時程推算的核心錨點。

[^model-router]: LLM 流量路由中介層，依請求類型、成本、延遲把 call 分派給不同模型供應商；代表工具為 OpenRouter、Portkey 與 LiteLLM，用於跨供應商 fallback、統一計費與 A/B 比較，常被當作避免「單一模型綁死」的保險架構。

[^cowos]: 台積電 2.5D 先進封裝技術（Chip-on-Wafer-on-Substrate），把 GPU、HBM 等多顆 die 整合到同一片 interposer 上；Nvidia H100 / B100 等 AI 加速器產能瓶頸主要卡在 CoWoS 月產能，是追蹤 TSMC AI 業績時的關鍵變數。

[^rls]: Postgres 的列級存取控制（Row Level Security），可依連線使用者身份對同一張表的不同列套用讀寫規則；Supabase 以此實作多租戶 per-user 隔離，是其跨越 Firebase 類 BaaS 的核心賣點之一，複雜 join 時需額外注意 planner 行為。

## 📚 引用來源

1. [中央社 — 中華電信 iPhone Duo 10/23 開賣](https://www.cna.com.tw/postwrite/chi/444605) — 2026-09-10
2. [自由時報 — 蘋果 iPhone Duo 摺疊新機中華電信開放限量網路預約](https://ec.ltn.com.tw/article/breakingnews/5569149) — 2026-09-10
3. [TVBS — iPhone Duo 預購今晚 8 點開搶 台灣售價 官網搶購技巧](https://news.tvbs.com.tw/tech/4037011) — 2026-10-16
4. [中央社 — 台灣大哥大 myfone 10/16 20:00 開放預購 iPhone Duo](https://www.cna.com.tw/business/chinese/447172) — 2026-10
5. [Ubergizmo — iPhone Duo Delayed Foldable Production Hurdles Ahead of October Launch](https://www.ubergizmo.com/2026/09/iphone-duo-to-be-delayed-foldable-faces-production-hurdles-ahead-of-october-launch/) — 2026-09
6. [Channel News — Apple's $3,950 Duo Foldable Heavily Reliant On Samsung Technology](https://www.channelnews.com.au/apples-3950-duo-foldable-heavily-reliant-on-samsung-technology/) — 2026-10
7. [AsiaNews — Why Apple's first foldable may be its most Korea-dependent iPhone yet](https://asianews.network/?p=300331) — 2026
8. [iDevice — iPhone Duo launch stock yields reported near 60](https://idevice.com/iphone-duo-launch-stock-could-be-thin-with-assembly-yields-reported-near-60) — 2026-09
9. [Mactrast — iPhone Duo Facing Production Problems](https://www.mactrast.com/2026/09/iphone-duo-facing-production-problems-claims-new-report/amp/) — 2026-09
10. [Wantgoo — 蘋果 iPhone Duo 鴻海 新日興合資握鉸鏈百億大單](https://www.wantgoo.com/blog/407988/post/774) — 2026-09
11. [Webull — Supabase Announces $150M in New Funding and Turso Acquisition](https://www.webull.com/news/15678771187762176) — 2026-10-02
12. [Pulse 2 — Supabase Raises $150M And Acquires Turso To Expand Agentic Database Infrastructure](https://pulse2.com/supabase-raises-150-million-and-acquires-turso/) — 2026-10-02
13. [RuntimeWire — Supabase raises $150M and agrees to acquire Turso for agent databases](https://runtimewire.com/article/supabase-raises-150m-acquires-turso) — 2026-10
14. [SiliconAngle — Database startup Supabase raises $150M acquires Turso](https://siliconangle.com/database-startup-supabase-raises-150m-acquires-turso) — 2026-10
15. [SaaSrise — Supabase acquires Turso to bolster serverless database stack for AI-driven SaaS](https://www.saasrise.com/news/supabase-acquires-turso-to-bolster-serverless-database-stack-for-aidriven-saas-e98f10d5-0ab2-49ea-b298-278995197bef) — 2026-10
16. [OpenAI Developers — Deprecations](https://developers.openai.com/docs/deprecations) — 2026
17. [OpenAI Community — Deprecation notice: Agent Builder](https://community.openai.com/t/deprecation-notice-agent-builder/1382650) — 2026-06
18. [MCP Directory — OpenAI winding down Agent Builder and Evals Migration Guide](https://mcp.directory/blog/openai-agentkit-deprecation-2026) — 2026
19. [AgenticWire — Migrate from OpenAI Agent Builder: SDK vs Workspace Nov 30 Deadline](https://www.agenticwire.news/article/openai-agent-builder-migration-sdk-workspace) — 2026
20. [Vals AI — Claude Haiku 5.5 Model](https://www.vals.ai/models/anthropic_claude-haiku-5-5) — 2026-10
21. [Havoptic — Claude Code October 2026 Releases](https://www.havoptic.com/releases/claude-code/2026/10) — 2026-10
22. [Computerworld — Google plans Gemini 4 release before year-end](https://www.computerworld.com/?p=4226640) — 2026-09-25
23. [Business Next — 千人規模第四屆新創投資年會 10 月登場 擁抱變革 36 位頂尖新創創辦人](https://www.bnext.com.tw/article/92340/tsic_2026.09) — 2026-09
24. [Accupass — 2026 Taiwan Global Venture Forum](https://www.accupass.com/event/2606191554462942766760) — 2026
25. [uanalyze — 台灣新創動能爆發 吸金破千億創 10 年新高 聚焦 4 大關鍵產業](https://uanalyze.com.tw/articles/4672147147) — 2026
26. [uanalyze — 數發部祭百億資金催生 AI 新創已核定 6 案 盼添購 100 片 GPU 擴充算力池](https://uanalyze.com.tw/articles/1078148404) — 2026
27. [Business Next — moda AI startup 100 billion plan](https://www.bnext.com.tw/article/90239/moda-ai-startup-100billion-plan) — 2026
28. [TechNews — 百億 AI 基金首年僅投 7,500 萬 數發部公布 5 家獲投新創](https://technews.tw/?p=1520580) — 2026
29. [actgsys — 2026 台灣中小企業 AI 補助完整攻略](https://actgsys.com/zh/blog/taiwan-sme-ai-subsidy-guide-2026) — 2026
30. [CostBench — Octane AI Pricing Change October 2026](https://costbench.com/changelog/octane-ai-pricing-update-2026-10/) — 2026-10-04
31. [AI Funding — This Week in AI Funding Oct 5 Oct 9 2026](https://aifunding.me/insights/weekly-roundup-oct-5-9-2026) — 2026-10
32. [Forkast — Anthropic IPO slip October November 2026 EDGAR S-1](https://forkast.news/?p=131253) — 2026-10-04
33. [Allmind — Anthropic IPO Preview Valuation Timing and What to Watch](https://allmind.ai/research/anthropic-ipo-preview) — 2026
34. [LeverageShares — Anthropic IPO Date Valuation S-1 Status and How to Invest](https://leverageshares.com/us/anthropic-ipo-tracker/) — 2026
