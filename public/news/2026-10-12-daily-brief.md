---
title: 每日創業情報 — 2026-10-12
date: 2026-10-12
tags: 創業情報, AI 產業, SaaS, 台灣
summary: 週一連假後正式開工 + Q4 第 12 日 + 本月唯一完整工作週 10/12–10/18 Day 1 + TSMC Q3 法說 T-3 Quiet Period Day 8 + Haiku 5.5 T+5 shadow eval 收尾決策日 + SWE-2 pricing opaque T+2 + iPhone Duo T-11 開賣 + Taiwan Mobile myfone 預購 T-4 + Agent Builder 11/30 T+49 + Evals 10/31 T+19 + Supabase Multigres 開源橫向擴展 Postgres + Vercel AI SDK v7 HarnessAgent 統一 Codex / Claude Code / Pi + Anthropic IPO 11/9 期中選舉後路演。
keywords: 2026-10-12 週一開工 連假後首個完整工作週, TSMC Q3 法說 10月15日 T-3 Quiet Period 毛利率 65-67 2nm ramp CoWoS 2027, Claude Haiku 5.5 T+5 shadow eval 決策日 OSWorld Terminal-Bench 分化, Supabase Multigres 開源 horizontal scaling Postgres alpha June 2026, Vercel AI SDK v7 HarnessAgent Codex Claude Code durable agents stepCountIs isStepCount, iPhone Duo T-11 開賣 10月23日 Taiwan Mobile myfone 10月16日 20:00 預購, OpenAI Agent Builder 11月30日 下線 T+49 Evals read-only 10月31日 T+19 Agents SDK, Anthropic IPO 11月9日 期中選舉 Reuters 路演 S-1 2 trillion 估值, SWE-2 Devin pricing opaque T+2 per-token Pro 20 Max 200 Teams 80, MCP Registry 16967 servers Smithery 官方 modelcontextprotocol.io v0.1 preview
---

# 每日創業情報 — 2026-10-12

## 🎯 今日 TL;DR

- **週一連假後正式開工 + Q4 第 12 日 + 本月唯一完整工作週 10/12–10/18 Day 1 + 下週 TSMC Q3 法說 T-3 + Haiku 5.5 shadow eval T+5 收尾決策日 + SWE-2 pricing opaque T+2 + iPhone Duo 開賣 T-11 + Taiwan Mobile 預購 T-4 + Agent Builder 11/30 T+49 + Evals 10/31 T+19** — 10 軸疊加 = 「本週收心開工 + 下週法說 / 預購集中周 + 下下週 Agent Builder 遷移倒數」3 階段節奏起點
- **🔄 TSMC Q3 Reuters 口徑 Q3 累計 NT$1.49 兆（US$46.71B）+ YoY +50%** — 比先前「超過美元財測上緣」口徑再加 ~$1B，法說 10/15 T-3 焦點僅剩「毛利率 65–67% 守得住否、2nm ramp 稀釋 3–4 ppt、海外三廠早期稀釋 2–3 ppt、CapEx 60–64B 是否再上修、2027 tone」5 軸
- **🆕 Supabase Multigres[^multigres] 開源 — 開源 horizontal scaling Postgres（6 月 Alpha）+ Supabase 6 月 Series F US$500M at $10.5B（GIC 領投）** — pgvector 繼續原生支援；對一人 SaaS 的意義：**「全家桶 Postgres backend + 原生 vector + 原生 realtime + 原生 auth + 現在加上原生 horizontal scaling」= 走 Postgres 深坑的最大一條護城河加深 1 格、Convex / Neon / Turso 三家壓力增加**
- **🆕 Vercel AI SDK v7 `HarnessAgent`[^harness-agent] 統一 API — 一個 API 操控 Claude Code / Codex / Pi 3 家 agent framework** — 加上 `WorkflowAgent` durable state + checkpoint resume + 人類審批 primitive，v6 → v7 跑 `npx @ai-sdk/codemod v7`；對一人 SaaS 的意義：**「做 agent product 不再綁 provider」是今日最 underrated 的工具堆疊訊號；下週 10/12–10/18 Day 1 把現有 1 條 pipeline 跑過 v7 codemod**
- **🔄 Anthropic IPO 時程 — Reuters 最新口徑改為「11 月 11/9 期中選舉後路演」+ 原 10 月中路演說法為舊訊號** — Series H $65B 融資後估值 $965B、投資人預期 $2T + 市值模型估首日 $1.1T；下週可以觀察有無 S-1 正式 flip 公開（EDGAR[^edgar]）

## 🔄 昨日追蹤

- 🔄 **TSMC Q3 Reuters 口徑新錨**：昨日用「NT$1.4942 兆」為 10/8 月報口徑；Reuters 進一步彙整為「Q3 累計 NT$1.49 兆、US$46.71B、YoY +50%」更乾淨的對外數字，10/15 法說仍為 T-3 不變
- 🔄 **Haiku 5.5 T+4 → T+5**：連假末日第 2 天 shadow eval 收尾日已過；今日為「決定哪 1 條 pipeline 正式切換」最後決策日 — 建議限「短 context (<100K) + 分類／摘要／轉譯」3 類子任務
- 🔄 **SWE-2 pricing opaque T+1 → T+2**：Cognition 仍未公告 per-token 單價；per-project ROI 自動審計工具的需求續行
- 🔄 **iPhone Duo T-5 → T-4（Taiwan Mobile myfone 預購 10/16 20:00）+ 開賣 T-12 → T-11（10/23 中華電 08:00 近 500 間）**：美國 Apple 官網「Get ready」窗口 10/12–10/15 **今日為 Day 1**
- 🔄 **Agent Builder 11/30 T+50 → T+49 + Evals 10/31 T+20 → T+19**：Evals read-only 剩 19 天、Agent Builder 剩 49 天；今日開工首要議程為「列出所有以 Agent Builder 搭建的 workflow + 手動驗證 code export 行為 1:1」
- 🔄 **Codex SDK / Slack T+12 → T+13**：連假末日為第 1 完整工作週收尾；今日為第 2 完整週 Day 1 深化階段啟動
- 🔄 **TiBOOST 入圍名單 T+6 → T+7 未公告**：10/5 徵件截止 + 19 國逾百件；開工首日官方仍無聲 → 可考慮主動催促

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🔄 TSMC Q3 2026 法說 10/15 T-3 + Quiet Period Day 8（10/5–10/14）+ Reuters 口徑 Q3 累計 NT$1.49 兆（US$46.71B、YoY +50%）+ 9 月營收 NT$5,118.57 億 10/8 已公告 + 共識 EPS NT$76.09（約 US$4.39 per ADR）+ 全年 CapEx $60–64B（+15–20%）+ 毛利 65–67% + 營益 56–58% + 2nm 爬坡致 3–4 ppt 毛利稀釋 + 海外三廠（Arizona + Taiwan + 熊本）早期 2–3 ppt 稀釋合計 5–7 ppt + CoWoS[^cowos] 2027+ tightness + A16 (1.6nm) 2026 H2 量產 + NVIDIA 獨家 + Apple A20 Pro iPhone Duo 首波 + 外資 TP NT$1,800** | [TSMC 投資人季度結果](https://investor.tsmc.com/schinese/quarterly-results)、[Hudson Labs — TSMC Q3 2026 Earnings Preview](https://www.hudson-labs.com/research/tsmc-q3-2026-earnings-preview-tsm-revenue-and-margins)、[Crypto Briefing — TSMC Oct 15 earnings call put Nvidia Broadcom AMD investors on watch](https://cryptobriefing.com/tsmc-q3-earnings-nvidia-broadcom-amd/)、[TrendForce — TSMC lifts 2026 CapEx 15%](https://www.trendforce.com/news/?p=65041) | 連假後首個完整工作週 Day 1 + 法說 T-3 Quiet Period Day 8：「TSMC Q3 累計 NT$1.49 兆 × YoY +50% × 毛利 65–67% 守得住否 × 2nm 稀釋 3–4 ppt × 海外 2–3 ppt 合計 5–7 ppt × CapEx 60–64B × CoWoS 2027+ × A16 2026 H2 × NVIDIA 獨家 × A20 Pro × iPhone Duo T-11 × 外資 TP NT$1,800」= 蘋概股 pre-rerating audit 的「焦點切換」已完成；per-project「毛利率 beat/miss dashboard × 2nm ramp 稀釋精算 × CoWoS 2027+ supplychain tracking × 三廠進度 mapping × CapEx 再上修機率 × 2027 tone 逐字稿」6 合一 pitch pack NT$ 20K–60K | 機會：**「TSMC Q3 1.49 兆 Reuters 口徑 × 法說 T-3 × 毛利 65–67% × 2nm 3–4 + 海外 2–3 ppt 合計 5–7 ppt × CapEx 60–64B 再上修 × CoWoS 2027+ × 2027 tone × iPhone Duo T-11 × A20 Pro × 外資 TP NT$1,800」10 合一 pre-rerating audit NT$ 40K–120K**；下週一 Q3 法說結果出爐前「Quiet Period 資訊真空」為 push notification 甜蜜點；威脅：Q3 數字已超過上緣故「beat/miss 76.09 EPS」為過時口徑，若仍 pitch 這條會顯資訊落後，需改以「毛利率守得住否 × 2nm 稀釋 × 海外早期稀釋 × CapEx 再上修 × 2027 tone」5 軸差異化 |
| **🔄 iPhone Duo 開賣 T-11（10/23 08:00 中華電信近 500 間據點）+ Taiwan Mobile myfone 單機預購 T-4（10/16 20:00，網路門市不是全台門市）+ Apple 官網台灣同時 10/16 20:00 開放預訂 + 美國 Apple 官網「Get ready」準備窗口 10/12–10/15 Day 1 今日啟動 + 中國官網無預備窗口 + NT$74,900（256GB）–NT$118,900（2TB）+ Star White 60% / Night Sky 40% + 近百萬預約 + 首年預估 1,000 萬台 vs 600 萬 Foxconn 下修 + 2026 臻鼎 Apple 相關營收估 60–65%** | [Taiwan News — Taiwan Mobile 10/16 20:00 預購 iPhone Duo](https://www.taiwannews.com.tw/news/6437480)、[CNA — iPhone 18 Pro + Duo 台灣大 myfone 9/11 預約](https://www.cna.com.tw/business/chinese/443802)、[Mirror Media / SETN — 中華電信 10/23 近 500 間據點](https://www.mirrormedia.mg/external/setn_1904699) | 連假後 Day 1 美國 Get ready 窗口啟動 + 預購 T-4 + 開賣 T-11：「iPhone Duo T-11 × Taiwan Mobile 預購 T-4 × Apple 官網台灣 10/16 20:00 同步 × 美國 Get ready 10/12–10/15 Day 1 × 中國無窗口 × 近百萬預約 × 1,000 萬 vs 600 萬 × Star White 60% × 鉸鏈 (3376) + FPCB (臻鼎) + 光學 (3406 / 大立光) + PCB (華通 / 台郡) 4 軸」8 軸；per-project「iPhone Duo T-11 × 10/16 20:00 預購 T-4 搶空預測 × 美國 Get ready 窗口 Day 1 對照台灣預購 × 蘋概股 push notification 週一盤前 + 週四預購前 1 小時 × 配貨 pack × 鉸鏈供應鏈 dashboard」6 合一 NT$ 50K–120K | 機會：**「iPhone Duo T-11 開賣 × T-4 預購 × Get ready Day 1 × 近百萬預約 × 1,000 萬首年 vs 600 萬 Foxconn × Star White 60% × 蘋果 ASP/BOM 策略 × 臻鼎 60–65% × 新日興富聯合資 × 大立光 + 玉晶光 × 華通 + 台郡」10 合一 vertical audit NT$ 50K–150K**；美國 Get ready Day 1 為「下週預購前最後觀察窗口」push notification 新 trigger；威脅：「600 萬 Foxconn 下修 vs 1,000 萬首年」結構性瓶頸續行、Taiwan Mobile 預購地點為「myfone 網路門市」而非全台門市（先前判讀的「門市預購」為錯誤）需在對台灣受眾的 pack 中更正 |
| **🆕 國發基金 2026 年度預算案 135 億 + 較前年 +7 億 + 新增 AI 新創投資方案編列 3 億 + 主題式百億基金 8 月底累投 692 家 + 229 億 + 國聯青鋒 AI 半導體新基金 3/27 啟動（國聯創投受委託管理）** | [TechNews — 國聯青鋒啟動 AI 半導體新基金](https://finance.technews.tw/2026/03/27/ai-semiconductor-new-fund/)、[CIO Taiwan — 國發基金 2026 預算案 135 億](https://www.cio.com.tw/87937/)、[cnYes 哇買 — 國發基金攜手國聯青鋒 AI 半導體新基金](https://hao.cnyes.com/post/239284) | 連假後 Day 1 新錨「2026 預算案 135 億 + 新增 AI 新創方案 3 億」為 Q4 立法新窗 context；per-project「135 億 預算案 pitch × AI 新創 3 億 proposal 範本 × 主題式百億 692 家 vs 229 億分流 × 國聯青鋒 AI 半導體 Partner × 新創總會白皮書 14 項建言 搭配」5 合一 outbound NT$ 30K–100K；「AI 新創 3 億」為 2026 立法新窗 **但平均每家可得金額取決於核定件數**（尚未公告）、建議先備 1 億 pitch 範本等核定機制明朗後對應投案 | 機會：**「國發基金 2026 預算 135 億 × AI 新創 3 億 新增 × 主題式百億 692 家 × 229 億累投 × 國聯青鋒 AI 半導體 × 新創總會白皮書 14 項建言 × 新創一法 lobby × 大企業投資稅抵」8 合一 Q4 outbound audit NT$ 30K–100K**；「3 億 AI 新創方案」為下週 10/12–10/18 新 Partner 窗口；威脅：3 億為新增但相對 135 億總量僅 2.2%、「新創身分明確定義」尚未立法 → 多數獨立開發者仍無法直接申請，需以「主題式百億 229 億已投資 vs 3 億新增」差異化 pitch |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🆕 Supabase Multigres（6 月 Alpha 開源 horizontal scaling Postgres）+ Series F $500M at $10.5B** | 全家桶 Postgres BaaS | horizontal scaling Postgres；pgvector 續原生支援；Series F 6/4/2026 GIC 領投 | 開源 Multigres 本體免費；Supabase hosted plan 延用（Free / Pro / Team / Enterprise） | vs Neon（branching-first + Launch / Scale tier）/ Convex（reactive TS-first 無 SQL）/ PlanetScale / Turso / Firebase；Supabase 現以「Postgres + Multigres 原生橫向擴展 + pgvector + realtime + auth」= 全家桶最深護城河 | 🟢 一人 SaaS 走 Postgres 深坑：下週 10/12–10/18 Day 1 把 Multigres alpha 跑 1 條 benchmark、確認橫向擴展模式對產品架構影響；🟡 走 Convex / Neon 的團隊暫不急移動（都還各有獨特價值）；🔴 Alpha 階段 production 不建議 |
| **🆕 Vercel AI SDK v7（6/25 release）+ HarnessAgent 統一 API 支援 Codex / Claude Code / Pi + WorkflowAgent 可 checkpoint resume + 人類審批 primitive** | TS AI SDK / agent framework | 一個 API 操控多家 agent framework；durable agent state；pause for human approval；stable voice | 開源免費（Vercel 服務另計） | vs CrewAI / Mastra 1.0 / LangGraph.js / Anthropic Agent SDK + OpenAI Agents SDK；v7「HarnessAgent 統一 Codex + Claude Code + Pi + WorkflowAgent checkpoint resume + 人類審批 + stable voice」= 一人 agent SaaS 不綁 provider 的最強組合 | 🟢 下週 10/12–10/18 Day 1 把現有 1 條 pipeline 跑 `npx @ai-sdk/codemod v7`；v6 → v7 breaking changes（`stepCountIs` → `isStepCount`、`onFinish` → `onEnd`、`generateObject` 可能需手動改）；🟡 agent-in-production 現狀若用 LangGraph / CrewAI 可觀望 1–2 週、不急換 |
| **🔄 Claude Haiku 5.5（T+5 第三方 benchmark 分化訊號 + shadow eval 收尾決策日）** | LLM 小模型 / 高頻 subagent | 短 context（≤100K）分類、摘要、轉譯；effort levels 可調推理深度 | $0.10/M in、$0.50/M out（≤100K token）；$0.20/M in、$1.00/M out（>100K token） | Vals.ai 綜合 #16/45 (54.31%)；OSWorld 2.1 72.4%（Haiku 4.5 15.7%）；Humanity's Last Exam 無工具 45.9% / 工具 57.4%；Terminal-Bench[^terminal-bench] 4.0 僅 39.2%（Sonnet 5.5 70.6%）；1M-token context、128K max output | 🟢 甜蜜點：短 context + 分類／摘要／轉譯類 subagent 子任務；🔴 禁區：agentic coding、Terminal 操作、>100K 長 context；今日為「shadow eval 收尾決策日」最後 1 天，決定「哪 1 條 pipeline 正式切換」—延後決策會錯過本月單一完整工作週 10/12–10/18 的切換窗口 |
| **🔄 OpenAI Agent Builder 11/30 下線（T+49）+ Evals 10/31 read-only（T+19）+ reusable prompt objects 11/30 下線** | agentic 開發棧生命週期 | Agent Builder 11/30 停役、Evals 10/31 read-only + Agents SDK 為代碼路徑長期取代 + ChatGPT Workspace Agents 為 no-code 取代 + ChatKit 續可用 + Responses API 續可用 + reusable prompts v1/prompts 同 11/30 下線（code export starting point only、不保證行為 1:1 轉換） | 停役本身無新費用；Agents SDK 走底層 model API usage；ChatKit 續商用 | vs Anthropic Agent SDK + CrewAI + LangGraph.js + Mastra 1.0 + Vercel AI SDK v7；Agent Builder「視覺化 drag-and-drop canvas」已 EOL vs「Agents SDK code-first + Workspace Agents no-code + ChatKit continues」= OpenAI 自身 agentic 分流清晰 | 🔴 11/30 下線剩 49 天 + 10/31 Evals read-only 剩 19 天：**今日開工 Day 1 首要議程**「列出所有以 Agent Builder 搭建的 workflow + 手動驗證 code export 後行為 1:1」；可外包 1 條單線 pipeline 作為「Agent Builder → Agents SDK 遷移顧問」切入商機；本週收尾 10/18 前完成遷移路線設計、下週 10/19–10/25 進入實作 |
| **🔄 Cognition SWE-2 (Devin) + Fusion rollout（T+2 pricing opaque 續行）** | AI 編碼 agent | multi-file refactor、Fusion rollout 全線整合（Desktop + CLI + Web + IDE）；SWE-2 僅在 Devin 內提供、無獨立 API | Devin Pro $20/mo + Max $200/mo + Teams $80/mo base + $40/mo per seat + Free $0；SWE-2 per-token 單價仍未公告 | vs Codex SDK + Slack / Claude Code Sonnet 5.5 / Cursor Composer 2.5 / Replit Agent 3 Pro；SWE-2「Kimi K3 post-train + FrontierCode 50% 內 1 pt vs Fable 5.1 + 便宜 64%」+ Fusion 全線整合為差異點；但 10/10 後 per-token 單價不透明是 ROI 風險 | 🟡 已訂閱 Pro：先用 1 個月、每日記 context 用量、月底算 ROI；🔴 未訂閱：先不續訂、等 Cognition 揭露 per-token 單價或獨立 API；🟢 fresh 商機：「SWE-2 / Devin 月費 ROI 自動審計 CLI」續為本週可做的開源點子 |
| **🔄 MCP Registry 繼續擴張（7/16 已 16,967 servers）+ Smithery 續走 ai.smithery/* namespace + hosted + billing + Glama / PulseMCP 增量 draw from upstream** | AI agent 整合協定 | registry.modelcontextprotocol.io 官方 v0.1 preview；Smithery 續走商用；GitHub MCP registry 自建 curated 分流 | 官方 registry 免費；Smithery hosted / billing 分級；GitHub registry 綁 Copilot | vs 自建 MCP server；「官方 upstream + Smithery hosted + GitHub curated」= 3 層分工 → 一人 SaaS 選擇路徑：先消費既有 MCP、自建放到 upstream + Smithery hosted 以增曝 | 🟡 一人 SaaS：「選 10 個 MCP 消費 + 自建 1 個 upstream + Smithery hosted」= 下週 10/12–10/18 可做的 2 日專案；🟢 商機：「MCP server 權限與資安邊界 compliance 顧問」續為 vertical 新 Partner |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：Supabase Multigres 遷移與架構決策顧問 🆕

- **痛點來源**：Supabase Multigres 6 月 alpha 開源 + Series F $500M at $10.5B 代表大規模產品化即將開始；台灣與亞洲中小團隊用 Supabase 走 Postgres 深坑的為數不少，但現有 schema 設計未考量 horizontal scaling，Multigres GA 後既有產品若直接套用會踩許多坑；「要不要移？什麼時候移？怎麼切 shard key？」為顧問需求
- **目標客群**：以 Supabase 為 primary backend 的台灣 / 亞洲一人 SaaS 或 2–5 人團隊（估約 300–800 家），特別是「DB 已超過 100GB 或準備開第二國市場」的
- **技術複雜度**：3/5 — Postgres schema 熟悉 + Multigres alpha 熟練 + sharding 策略設計 + 遷移工具熟
- **預估 MRR**：one-off NT$ 60K–200K per client × 2–4 clients / month；可接著做 $29/mo monitoring dashboard
- **競品弱點**：台灣目前尚無 Multigres 專門顧問；Supabase 原廠的 enterprise support 門檻高、中小團隊無法支付；一般 DBA 熟悉 Vitess[^vitess]（MySQL sharding）但 Multigres 為 Postgres fork、場景設計不完全重疊
- **切入建議**：10/12 開工首日先把自家 1 條 pipeline 跑 Multigres alpha benchmark、寫 1 篇中文 build-in-public；若有 2+ Supabase 用戶社群回應就啟動 outbound；優先台灣 vertical SaaS（AI 內容、金融 Fintech）

### 點子 2：Vercel AI SDK v7 遷移 + HarnessAgent 不綁 provider 升級顧問 🆕

- **痛點來源**：AI SDK v7 6/25 已 release + HarnessAgent 統一 Codex / Claude Code / Pi + WorkflowAgent checkpoint resume + 人類審批 primitive，但 v6 → v7 多個 API rename（`stepCountIs` → `isStepCount`、`onFinish` → `onEnd`）+ `generateObject` 需手動改 + 既有 agent-in-production 用 LangGraph / CrewAI 的團隊若要「不綁 provider」轉 v7 無現成遷移 playbook
- **目標客群**：已用 Vercel AI SDK v6 的台灣 / 亞洲一人 SaaS 或 2–5 人團隊（估 150–400 家）+ 用 LangGraph / CrewAI 想轉「不綁 provider」的團隊（估 50–150 家）
- **技術複雜度**：2/5 — TypeScript + v7 codemod + HarnessAgent 設定 + WorkflowAgent state 設計
- **預估 MRR**：one-off NT$ 30K–100K per client × 3–6 clients / month；可接著做 $19/mo monitoring dashboard
- **競品弱點**：Vercel 原廠 docs 為英文 + 無遷移服務；LangGraph / CrewAI 的中文教學不涵蓋「轉去 Vercel AI SDK v7」場景
- **切入建議**：10/12 開工首日把自家 1 條 pipeline 跑 codemod + HarnessAgent 試用、寫 1 篇中文 build-in-public；重點 angle 是「不綁 provider = 你可以明天就把現用的 Claude Code 換成 Codex 試用而不改應用程式碼」

### 點子 3：Agent Builder → Agents SDK 遷移顧問服務 🔄

- **痛點來源**（接續 10/11 brief 點子 3）：11/30 下線剩 49 天 + 10/31 Evals read-only 剩 19 天 + code export 不保證 1:1 行為 + multi-agent branching / handoffs 需人工重驗；今日開工 Day 1 為「本月單一完整工作週 10/12–10/18 遷移路線設計」最後窗口
- **目標客群**：以 Agent Builder 搭建 production agent 的台灣中小企 / SI 顧問案（10–50 人規模）；本次新增客群：reusable prompts 11/30 同下線的用戶群
- **技術複雜度**：2/5 — service business，Agents SDK TypeScript / Python 熟練 + workflow re-architecture
- **預估 MRR**：N/A（one-off NT$ 60K–200K per client × 2–4 clients / month）
- **競品弱點**：台灣目前尚無針對 Agent Builder EOL 的專門顧問服務；多數 SI 顧問做「新建」而非「遷移」
- **切入建議**：10/12 開工首日發 2 封台灣中小企 SI 社群 cold outbound（「您的 Agent Builder workflow 準備好 11/30 下線了嗎？」）+ 寫 1 篇「Agent Builder → Agents SDK 遷移 checklist」blog；48 小時內有 2+ 回應就正式啟動

## 🧰 工具堆疊更新

- **🔄 Haiku 5.5 shadow eval 收尾決策日**：今日為最後決策日；延後會錯過本月單一完整工作週 10/12–10/18 的切換窗口；若 shadow eval 已跑完 100 條 benchmark 且短 context 類的 cost × quality 曲線 OK，就正式切換 1 條 pipeline，否則維持 Opus / Sonnet 5.5 + 本週收尾不再延期
- **🆕 Vercel AI SDK v7 遷移**：今日開工 Day 1 把 1 條 pipeline 跑 `npx @ai-sdk/codemod v7`；若 codemod 通過 + 手動改完 `generateObject` 等殘留，先 shadow production 1 週再切主線
- **🆕 Supabase Multigres alpha 試水**：今日開工 Day 1 跑 1 條 benchmark、如果資料量 >100GB 或準備開第二國市場、下週開始評估 sharding 策略

## ⚡ 今日行動建議

- [ ] 連假後開工首日 09:00：跑 Haiku 5.5 shadow eval 收尾決策（最後 1 天）+ 列出「哪 1 條 pipeline 切換」+ 完成 code review before merge
- [ ] 10:30：Agent Builder → Agents SDK 遷移路線設計初稿（本月單一完整工作週 Day 1、11/30 下線剩 49 天 + Evals 10/31 剩 19 天）
- [ ] 下午：Vercel AI SDK v7 codemod 跑 1 條 pipeline + 檢查 breaking changes（`stepCountIs` → `isStepCount`、`onFinish` → `onEnd`、`generateObject`）
- [ ] 盤前 09:00：蘋概股 push notification（iPhone Duo T-11 + 美國 Get ready Day 1 + Taiwan Mobile 預購 T-4）
- [ ] 17:00：TSMC Q3 法說 T-3 pitch pack 定稿（毛利 65–67% × 2nm 稀釋 × CoWoS 2027+ × CapEx 60–64B × 2027 tone 5 軸）

## ⏳ 待觀察

- **Anthropic IPO 時程 Reuters 口徑從「10 月中」改為「11 月期中選舉後」**：下週可觀察 EDGAR 是否有 S-1 正式 flip；若「期中選舉後 11/9 路演」確認，則 Haiku 5.5 的 75% 降價可能是 pre-IPO 最後紅利 → 多年合約談判在 11 月是機會窗口
- **TSMC Q3 法說 10/15 盤後**：若「毛利守 65–67% + CapEx 不再上修 + 2027 tone 溫和」= 蘋概股 pre-rerating 第 1 波結束；若「毛利跌破 65% + CapEx 再上修 + 2027 緊張」= 另一波 downstream 壓力傳導
- **Supabase Multigres GA 時間**：alpha → GA 一般 3–6 個月；下週追蹤 Supabase 官方 blog + GitHub release
- **TiBOOST 入圍名單 10/5 截止 T+7 仍未公告**：10/12 開工後首日官方仍無聲 → 可主動透過 TVCA / TPEA 社群詢問時程

[^multigres]: Supabase 於 2026 年 6 月開源的 Postgres 橫向擴展方案，透過 proxy + 分 shard 讓單一邏輯 Postgres 跨多台機器水平擴展，架構理念與 MySQL 世界的 Vitess 類似；目前仍處 alpha，GA 時間未定。

[^harness-agent]: Vercel AI SDK v7 新增的統一 agent 介面，用同一組 TypeScript API 操控 Claude Code、OpenAI Codex、Pi 等不同廠商的 agent harness，讓應用程式碼不必綁定單一 provider，可快速切換底層 agent 實作。

[^edgar]: Electronic Data Gathering, Analysis, and Retrieval system，美國證管會（SEC）公開文件電子資料庫；IPO 的 S-1、季報、年報等正式文件在此公告，是觀察美國上市公司法規申報進度的第一手來源。

[^cowos]: Chip-on-Wafer-on-Substrate，TSMC 的 2.5D 先進封裝技術，用矽中介層把 HBM 記憶體與 GPU / AI 加速器晶片整合在同一基板上；NVIDIA、AMD、Apple 的高階 AI 晶片仰賴此製程，產能供不應求是 AI 伺服器出貨瓶頸主因之一。

[^terminal-bench]: 針對 LLM / coding agent 設計的 benchmark，測試在真實 shell 與 terminal 環境做檔案操作、git、網路工具、多步除錯的能力；成績通常比純文字類 benchmark 低很多，是衡量 agentic coding 實戰力的硬指標。

[^vitess]: YouTube 2010 年開源的 MySQL 橫向擴展層，透過 vtgate proxy 與 vtablet 分 shard 讓單一邏輯 MySQL 跨多台機器水平擴展；Slack、Square 等大型平台採用，是「資料庫 sharding middleware」的典範實作。

## 📚 引用來源

1. [TSMC 投資人季度結果](https://investor.tsmc.com/schinese/quarterly-results) — 2026-10-12
2. [Hudson Labs — TSMC Q3 2026 Earnings Preview](https://www.hudson-labs.com/research/tsmc-q3-2026-earnings-preview-tsm-revenue-and-margins) — 2026-10
3. [Crypto Briefing — TSMC Oct 15 earnings call](https://cryptobriefing.com/tsmc-q3-earnings-nvidia-broadcom-amd/) — 2026-10
4. [TrendForce — TSMC lifts 2026 CapEx 15%](https://www.trendforce.com/news/?p=65041) — 2026-07-16
5. [Taiwan News — Taiwan Mobile 10/16 20:00 預購 iPhone Duo](https://www.taiwannews.com.tw/news/6437480) — 2026-09
6. [CNA — iPhone 18 Pro + Duo 台灣大 myfone 9/11 預約](https://www.cna.com.tw/business/chinese/443802) — 2026-09
7. [TechNews — 國聯青鋒啟動 AI 半導體新基金](https://finance.technews.tw/2026/03/27/ai-semiconductor-new-fund/) — 2026-03-27
8. [CIO Taiwan — 國發基金 2026 預算案 135 億](https://www.cio.com.tw/87937/) — 2026
9. [Supabase Investor Tear Sheet — Multigres alpha + Series F $500M at $10.5B](https://siliconvalleyinvestclub.com/companies/supabase/tear-sheet.pdf) — 2026-06
10. [noqta.tn — Vercel AI SDK v7 durable agents voice developer guide 2026](https://noqta.tn/en/blog/vercel-ai-sdk-7-durable-agents-voice-developer-guide-2026) — 2026-06-29
11. [Vercel Community — Vercel Weekly 2026-06-29](https://community.vercel.com/t/vercel-weekly-2026-06-29/44602) — 2026-06-29
12. [Vals.ai — Claude Haiku 5.5](https://www.vals.ai/models/anthropic_claude-haiku-5-5) — 2026-10
13. [AI Weekly — Introducing Claude Haiku 5.5](https://aiweekly.co/alerts/introducing-claude-haiku-55) — 2026-10-07
14. [OpenAI Developers — Deprecations](https://developers.openai.com/api/docs/deprecations/index.html) — 2026-10
15. [ecorpit — OpenAI shuts Agent Builder Evals and reusable prompts on November 30 2026](https://ecorpit.com/openai-agent-builder-evals-prompts-shutdown-november-2026/) — 2026
16. [TowardsAI — MCP Registries in Mid-2026: One Upstream Won](https://pub.towardsai.net/mcp-registries-in-mid-2026-one-upstream-won-2ce541b92036) — 2026-07
17. [Finance Yahoo — Anthropic Files Confidential S-1](https://finance.yahoo.com/markets/stocks/articles/anthropic-files-confidential-1-1-181246257.html) — 2026-06
18. [allmind.ai — Anthropic IPO Preview Valuation Timing](https://allmind.ai/research/anthropic-ipo-preview) — 2026
