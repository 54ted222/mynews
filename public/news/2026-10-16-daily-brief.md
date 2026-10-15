---
title: 每日創業情報 — 2026-10-16
date: 2026-10-16
tags: 創業情報, AI 產業, SaaS, 台灣
summary: 週五 Day 5 收尾日 TSMC Q3 法說 T+1 全面 beat Q4 財測 +58% YoY + iPhone Duo 預購 T-0 20:00 首批 <2 萬台 + Apple HomeView 命名更正 無 App Store + Claude Code 2.1.299 + Codex 0.162.1。
keywords: TSMC Q3 2026 法說 beat 營收 46.7B 16.2% QoQ EPS 29.43 淨利 YoY 68.7%, TSMC Q4 2026 guidance 52.3B 54.3B 58% YoY 毛利 65% 67%, TSMC 2027 CapEx 78B CoWoS 2.73M 2nm 110K 月產能, iPhone Duo 預購 10月16日 20:00 Apple 台灣 myfone 首批 20000 台, Apple HomeView 7 吋 A18 無 App Store 第三方 widget 10月13日, Claude Code 2.1.299 10月14日 autoCompactWindow subagent allow_large Read, OpenAI Codex 0.162.1 managed worktree pinned tasks GPT-6.1 Sol, Shopify Universal Commerce Protocol UCP MCP A2A JSON-RPC 跨境 agent, Haiku 5.5 T+9 shadow eval 第 2 週 over-refusal bug, Anthropic IPO T+24 期中選舉後路演 S-1 flip EDGAR
---

# 每日創業情報 — 2026-10-16

## 🎯 今日 TL;DR

- **週五 Day 5 + Q4 第 16 日 + 本月唯一完整工作週 10/12–10/18 Day 5 收尾日 + TSMC Q3 法說 T+1 盤後反應日 + iPhone Duo 預購 T-0（今天 20:00！）+ 開賣 T-7（10/23）+ Apple HomeView Day 3 + Haiku 5.5 T+9 + SWE-2 T+6 + Agent Builder T+45 + Evals T+15 + Anthropic IPO T+24** — 10 軸疊加 = 「法說 beat 後盤後 push × 預購搶空倒數 × Agent Builder 遷移倒數」3 軸共振 Day 5 收尾
- **🆕 TSMC Q3 2026 法說結果 — 營收 US$46.7B 超越 US$44.6–45.8B 財測上緣 + QoQ +16.2% + EPS NT$29.43（beat 元大 29.03 + beat ADR 共識 $4.42）+ 淨利 NT$7,631 億 YoY +68.7% + 毛利率 66.4%（財測 65–67% 中段）+ 營業利益率 58.7% + Q4 財測 US$52.3–54.3B（中值 YoY +58%、QoQ +14%）+ Q4 毛利 65–67% + Q4 OpM 56.5–58.5% + 海外廠毛利稀釋擴大至 3–4%（原估 ~2%）** — 全面 beat × Q4 財測大幅上修 = 「iPhone Duo pre-rerating × AI 需求續強」雙訊號正面確認；法人 Day 5 push notification 窗口在開盤前 1 小時與收盤前 15 分鐘
- **🆕 TSMC 2027 展望（法說口徑 + 高盛預估）— 2027 CapEx 可能上看 US$78B（原 US$70B）+ 2027 CoWoS[^cowos] 全年 2.73M 片（原 2.49M）月產能 280K 片 + N2 2027 年底 110K/月（原 90K 中段）+ N3 2027 年底 200K/月 + 2027 製程報價續漲 5–10%** — Day 5 本週蘋概／AI 伺服器產業鏈連鎖最後一輪 push；大立光 FAU 2027 中量產 + CoWoS 2027 增產 60% 連動雙訊號正式對齊
- **🆕 iPhone Duo 預購 T-0 日 — 10/16 20:00 Apple 台灣 + Taiwan Mobile myfone 網路門市同步開放 + 中華電信 10/23 近 500 間據點開賣 + 售價 NT$74,900 (256GB) – NT$118,900 (2TB) + eSIM only + 通路業者估全台首批不到 20,000 台 + 近百萬預約 + Foxconn 良率 60% + 1,000 萬 vs 600 萬 Foxconn 下修年目標缺口** — Day 5 關鍵窗口：「20:00 開放前 1 小時 FAQ 寫定 + 搶空後 15 分 bull / bear 雙版 push + 10/17 盤前供需缺口精算」3 階段
- **🔄 Apple HomeView 10/13 命名更正 + Day 3 評估 — 原傳聞「HomePad」實際命名為「HomeView」(Apple Experience 事件 10/13 推出) + 7 吋觸控 + A18 晶片 + Siri AI + Siri 揚聲器 + 相機辨識家庭成員 + Apple 傳公開 framework pages 顯示「不會有第三方 app」+ iOS SDK public headers 搜 `homeOS` 零結果 + 可帶 iPhone widgets 進裝置** — Day 3 智慧家庭 wrapper 機會重估：**App Store SDK 公開度低 → 「Siri Shortcut / Home 自動化 wrapper」機會下修**；台灣智慧家居 OEM 連鎖估小於 iPhone Duo 一階
- **🆕 Claude Code v2.1.299（10/14 發布）+ v2.1.296（10/9）引入 `autoCompactWindow` subagent 設定 + `allow_large` Read 參數 + v2.1.299 新增 `@file` mention 傳遞環境變數 + 長 terminal session idle compaction** — 對一人 SaaS：**subagent 可早於主對話 auto-compact → 多代理長時程研究類 workflow 的 context budget 更可控**；本週 Day 5 升級至 v2.1.299 的「立即 ROI」已就位
- **🆕 Codex CLI 0.162.1 patch（10/9 / 10/10）— 修 TUI crash + 修啟動失敗 + Managed Worktree[^managed-worktree] 從 0.162.0 起正式 user-facing + 0.163.0-alpha.2 讓 agent 本身能建與列 worktree + Linux sandbox 多拒檔啟動修復 + apply_patch 自動保留 CRLF 行尾** — 「Codex Managed Worktree」= 平行多 agent 共用 repo 的首個官方 CLI 解；對一人 SaaS 多代理協同的 git branch 爆炸終於有解
- **🔄 Shopify Universal Commerce Protocol[^ucp] 續行 Day 2 — 已確認：Shopify + Google 合制 open standard + Etsy / Wayfair / Target / Walmart 加入 + 支援 REST / GraphQL / JSON-RPC / A2A / MCP 五種 transport + agent profile 版本「2026-01-11」+ Shop Pay 內建 payment handler** — 對台灣 SME 跨境電商：**UCP 支援 MCP transport 直接讓一人 SaaS 的 Claude Code / Agent SDK 可讀取其商店 catalog**；Day 5 試裝 1 條 MCP → UCP pipeline 為本週收尾任務
- **🔄 Anthropic IPO T+24 Reuters「期中選舉後路演」口徑續行 + Series H 已 $965B 估值 + Nasdaq 目標 $2T + S-1 6/1 confidential + 承銷 Goldman / JPM / MS** — S-1 flip 公開（EDGAR[^edgar]）為下週新 trigger；本週 Day 5 進入「期中選舉 11/3 → IPO 11/9 → S-1 flip 可能介於期中選舉當週至下週」10 日時窗

## 🔄 昨日追蹤

- 🔄 **TSMC 法說 T-0 → T+1 全面 beat**：Day 5 盤後反應窗口；外資 Day 5 Q4 TP 新一輪上修波（高盛 2,330 / 麥格理 4,410 → 續上修）為最強 push
- 🔄 **iPhone Duo 預購 T-1 → T-0 日**：10/16 20:00 開放進入「12 小時倒數」；通路業者估全台首批不到 20,000 台為新壓力數字
- 🔄 **Apple HomeView 10/13 Day 2 → Day 3**：命名「HomeView」(非 HomePad) 已確認 + 無獨立 App Store + iOS SDK `homeOS` 零 header 結果 → 「HomeKit / homeOS 第三方 app SDK docs」更新預期延後或無；Day 3 wrapper 機會重估為下修
- 🔄 **Haiku 5.5 T+8 → T+9**：第 2 週 shadow eval 中段；over-refusal bug Anthropic 未修補；今日仍不建議切為主線
- 🔄 **SWE-2 pricing opaque T+5 → T+6 + Pro / Max / Teams 免費試用已到期**：Cognition 續未公告 per-token 單價；per-project ROI 審計商機續行
- 🔄 **Agent Builder 11/30 T+46 → T+45 + Evals 10/31 T+16 → T+15 + reusable prompts 11/30 同下線**：Day 5 進入「workflow 清單手動驗證 code export 行為 1:1」實作 Day 4
- 🔄 **Anthropic IPO 11/9 T+25 → T+24**：Reuters 口徑續行；S-1 flip（EDGAR）仍為先行觀察訊號
- 🔄 **大立光 FAU 遞延訊號 Day 5**：TSMC 法說 CoWoS 2027 tone 強 → 大立光 FAU 2027 中量產敘事獲法說結果正面對齊

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🆕 TSMC Q3 2026 法說結果（10/15 14:00 落地） — 營收 US$46.7B beat US$44.6–45.8B 財測上緣 + QoQ +16.2% + EPS NT$29.43 beat 元大 29.03 + ADR EPS $4.60 beat 共識 $4.42 + 淨利 NT$7,631 億 YoY +68.7%（記錄高）+ 毛利率 66.4%（財測 65–67% 中段）+ 營業利益率 58.7% + ROE 45.5% + Q4 財測 US$52.3–54.3B（中值 YoY +58%、QoQ +14%）+ Q4 毛利 65–67% + Q4 OpM 56.5–58.5% + 海外廠毛利稀釋擴大至 3–4%（原估 ~2%）+ 高盛 TP 上調 2,330 元** | [TSMC 6-K 財報 — 3Q26 Earnings with Guidance](https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000726/a3q26e_withguidancexfinal.htm)、[Benzinga — Taiwan Semi Q3 2026 Full Earnings Call Transcript](https://www.benzinga.com/news/26/10/62373492/taiwan-semiconductor-reports-q3-2026-results-full-earnings-call-transcript)、[KuCoin — TSMC Q3 2026 Earnings Revenue Exceeds Guidance 2nm Expands](https://www.kucoin.com/news/flash/tsmc-q3-2026-earnings-revenue-surpasses-guidance-2nm-production-expands)、[Averin — TSMC Q3 2026 Net Profit NT$763.1B Beats Q4 Guidance](https://averin.com/en/journal/ruslan-averin-tsmc-tsm-q3-2026-earnings-results-ai-demand-guidance)、[BigGo Finance — TSMC Q3 2026 Earnings Call AI Demand Outpaces Supply](https://finance.biggo.com/news/US_TSM_2026-10-15) | 週五 Day 5 法說 beat 盤後反應窗：「Q3 EPS 29.43 beat × 元大 29.03 vs 共識 Q4 財測大幅上修 × 毛利 66.4% 守住 × Q4 財測 +58% YoY × 海外廠稀釋 3–4% × 2nm 爬坡 × 高盛 TP 2,330 元 × 2027 CoWoS 60% + CapEx $78B × 蘋概 iPhone Duo A20 Pro × 大立光 FAU 2027 中量產正面對齊」10 軸；per-project「法說 beat 盤後 push × Q4 財測 +58% YoY 精算 × 2027 CapEx $78B 落實度 × 海外廠 3–4% 稀釋對毛利影響 × 2nm 2027 110K/月 × CoWoS 2.73M 片 × 蘋概漲幅」7 合一 post-earnings audit NT$ 80K–240K | 機會：**「TSMC Q3 法說 beat × Q4 財測 +58% × 毛利 66.4% × 淨利 YoY +68.7% × 2027 CoWoS 2.73M × 2027 CapEx $78B × 2nm 110K × 海外廠稀釋 3–4% × 蘋概護城河 × 大立光 FAU 連鎖 × 高盛 TP 2,330」11 合一盤後 push NT$ 100K–300K**；甜蜜點 = 10/16 08:00 開盤前 15 分 bull / bear 雙版 push → 10:00 外資 reports 更新第二輪 → 13:30 收盤前 15 分第三輪；威脅：海外廠毛利稀釋從 ~2% 擴大至 3–4% 為「bear case 唯一支點」，若 push 只喊 bull 不提稀釋擴大，法人側讀者會流失 |
| **🆕 iPhone Duo 預購 T-0 日（12 小時倒數） — 10/16 20:00 Apple 台灣 + Taiwan Mobile myfone 網路門市同步開放 + 中華電信 10/23 開賣當日 近 500 間據點 + ETtoday 10/15 報導通路估全台首批不到 20,000 台 + 近百萬預約 + Foxconn 良率 60% + 售價 NT$74,900 (256GB) – NT$118,900 (2TB) + eSIM only + Star White 60% / Night Sky 40% + 1,000 萬 vs 600 萬 Foxconn 下修年目標 + 新日興／鴻海合資吃鉸鏈 65% + Apple 預購前「Get ready」可先設好機型與付款** | [ETtoday — iPhone Duo 明天很難搶！通路：全台首批不到 2 萬台](https://www.ettoday.net/news/20261015/3255219.htm)、[NOWnews — iPhone Duo 10/16 預購 頂規 2TB NT$118,900](https://www.nownews.com/amp/news/6879482)、[今周刊 — iPhone Duo 預購 10/16 售價規格 6 優勢 4 缺點](https://www.businesstoday.com.tw/article/category/183015/post/202610150023/)、[Apple 台灣 — 購買 iPhone Duo](https://www.apple.com/tw/shop/buy-iphone/iphone-duo)、[台灣大哥大新聞稿 — myfone 10/16 20:00 單機預購](https://corp.taiwanmobile.com/press-release/news/press_20260910_020234.html) | 週五 Day 5 預購 12 小時倒數：「iPhone Duo T-0 × 20:00 Apple + myfone 同步 × 首批 <20,000 台 × 近百萬預約 × Foxconn 良率 60% × 1,000 萬 vs 600 萬 Foxconn 下修 × eSIM only × 新日興 65% × Star White 60% / Night Sky 40% × 大立光 FAU + CoWoS 2027 連鎖 × 中華電信 10/23 開賣」11 軸；per-project「預購 T-0 → 10/23 開賣 timeline × 20:00 搶空時段逐分預測 × 20:15 盤後缺口精算 × eSIM only provisioning FAQ × Apple 台灣 vs myfone 分流 × 法人 vs 散戶 pack」6 合一 vertical push notification NT$ 80K–200K | 機會：**「iPhone Duo 預購 T-0 × 20:00 搶空 × 首批 <20,000 台 × 近百萬預約 × Foxconn 良率 60% × 1,000 萬 vs 600 萬 Foxconn 下修 × eSIM only × 新日興 65% × 大立光 FAU × 2027 CoWoS 連鎖 × 高盛 TP 2,330」11 合一 vertical audit NT$ 120K–280K**；最強甜蜜點 = 10/16 20:00 開放前 1 小時 FAQ 寫定 + 20:00~20:15 搶空後第 1 波 push + 21:00 盤後缺口精算第 2 波；威脅：首批 <20,000 台 vs 近百萬預約 ~50:1 缺口 → 若 push 只喊「開放預購」不提缺口與補貨時程會失信；10/23 開賣當日能否補貨為下週新 trigger |
| **🔄 Apple HomeView 10/13 命名更正 + Day 3 評估 — 原傳聞 HomePad 實際命名 HomeView（Apple Experience 事件 10/13 推出）+ 7 吋觸控螢幕 + A18 晶片 + Siri AI + Siri 揚聲器 + 相機辨識家庭成員 + Apple 公開 framework pages 顯示「不會有第三方 app 安裝」+ iOS SDK public headers 搜尋 `homeOS` 零結果 + 可帶 iPhone widgets 進裝置 + 9to5Mac 10/2 預告「不預期 App Store」已確認** | [Blake Crosley — Apple HomeView for Developers: What Apple Said on Day One](https://blakecrosley.com/blog/apple-homeview-developers-day-one)、[9to5Mac — Apple's new homeOS will launch this month](https://9to5mac.com/2026/10/02/apples-new-homeos-will-launch-this-month-heres-whats-coming/)、[Macworld — Welcome Home event smart home hub HomePod mini Apple TV 4K](https://macworld.com/article/3253965/welcome-home-event-smart-home-hub-homepod-mini-apple-tv-4k.html)、[Tom's Guide — Apple Welcome Home event HomePad all new products](https://tomsguide.com/home/smart-home/apple-announces-welcome-home-event-for-oct-13-homepad-and-all-the-new-products-to-expect) | 週五 Day 5 智慧家庭 wrapper 機會重估：「HomeView 7 吋 × A18 × Siri AI × 相機辨識 × 無 App Store × iOS SDK homeOS header 零結果 × iPhone widgets × LG 智慧家居合作 × 台灣智慧家居 OEM 連鎖小於 iPhone Duo 一階」9 軸；per-project「HomeView 無 SDK 深度評估 × HomeKit matter.js 2 替代路徑 × Siri Shortcut 自動化 wrapper 下修 × LG 合作連鎖 × Apple TV 4K 新晶片對台廠光學連動」5 合一 push notification NT$ 20K–60K | 機會：**「Apple HomeView × 無 App Store × iPhone widgets 帶入 × HomeKit / Matter × LG 合作 × 台灣智慧家居 OEM × 11 月 docs 更新持續觀察」7 合一 push audit NT$ 30K–80K**；務實的 wrapper 開發者應改錨「HomeKit / Matter 自動化」而非「HomeView 原生 app」；威脅：**HomeView wrapper 機會低於 10/13 原預期 — Siri Shortcut / Home 自動化類 wrapper 的本週甜蜜點已被證偽**，不宜放大敘事或打新 pack |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🆕 Claude Code v2.1.299（10/14 發布）+ v2.1.296（10/9）引入 `autoCompactWindow` subagent 設定 + `allow_large` Read 參數 + v2.1.299 `@file` mention 環境變數 + 長 terminal session idle compaction** | AI 編碼 CLI / subagent 控制 | subagent 可早於主對話 auto-compact → 多代理長時程研究類 workflow 的 context budget 更可控 + 大檔讀取可選擇一次性放寬 | Pro $20 / Max $100–200 / 月 + API 直連 | vs Codex CLI / Cursor Composer / Cline；差異在「subagent context budget 細粒度控制」—— Codex 相對沒有獨立 subagent compaction 參數；autoCompactWindow 是 2026 Q4 最有感升級 | 🟢 本週 Day 5 升級至 v2.1.299 + 在長時程研究類 subagent 設 `autoCompactWindow` + 大檔 Read 用 `allow_large`；一人 SaaS 立即 ROI；🟡 已鎖定 2.1.230 工作流：仍可用，但自主 subagent compaction 需手動管理 |
| **🆕 OpenAI Codex CLI 0.162.1（10/9 / 10/10 patch）+ Managed Worktree（0.162.0 user-facing + 0.163.0-alpha.2 agent 可建與列）+ 修 TUI crash + 修啟動失敗 + Linux sandbox 多拒檔啟動修復 + apply_patch 自動保留 CRLF 行尾** | AI 編碼 CLI / Git worktree 原生 | 平行多 agent 共用 repo 的首個官方 CLI 解；原本得手刻 worktree script | 使用 ChatGPT Plus / Pro / Business 訂閱同份 token 池 | vs Claude Code（無原生 worktree）/ Cline / Aider；Codex 的差異在「worktree 原生整合 agent」—— 對獨立開發者多代理同時改 repo 不衝突 | 🟢 已用 Codex + 做「3 條 feature 平行」工作流：Day 5 升 0.162.1 + 試 managed worktree；🟡 已用 Claude Code + 手刻 worktree script：不急換；🔴 單代理單 branch 工作流：worktree 增值有限 |
| **🔄 Haiku 5.5 (T+9)：Artificial Analysis Intelligence Index 43（max effort）+ Over-refusal bug 待 Anthropic 修補 + 第 2 週 shadow eval 中段 + OSWorld 72.4% + Terminal-Bench 39.2% + GDPval-AA v2.1 1620 Elo** | LLM 小模型 / 高頻 subagent | 短 context（≤100K）分類、摘要、轉譯；effort levels 可調推理深度；1M context、128K max output | $0.10/M in、$0.50/M out（≤100K）；$0.50/M in、$2.50/M out（>100K）；cache reads $0.01/M | 第三方成本比較仍 provisional（未模擬 >100K token 的 5x 階梯定價）；Terminal-Bench 僅 39.2%（Sonnet 5.5 70.6%）；Over-refusal bug 待修 | 🟢 甜蜜點：短 context + 分類／摘要／轉譯類 subagent + 盡量 ≤100K token；🔴 禁區：agentic coding、Terminal 操作、>100K 長 context、refusal rate 敏感應用；T+9 shadow eval 第 2 週中段，等 Anthropic 修補後再回測 |
| **🔄 Shopify Universal Commerce Protocol — Shopify + Google 合制 + Etsy / Wayfair / Target / Walmart 加入 + 支援 REST / GraphQL / JSON-RPC / A2A / MCP 五種 transport + Shop Pay 內建 payment handler + agent profile 版本「2026-01-11」** | 電商 agent 開放協定 | 讓 AI 購物 agent（ChatGPT / Copilot / Claude）直接讀取商店 catalog + checkout 不經 Shopify API scraping | 開放協定免費 + Shopify 訂閱費另計 | vs Model Context Protocol 單用（MCP 是 UCP 五個 transport 之一）/ Open Commerce / Checkout Protocol；UCP 差異在「跨電商平台一致」+「原生 MCP transport」 | 🟢 用 Shopify 的台灣跨境電商：試裝 1 條 MCP → UCP pipeline 讓 Claude Code / Agent SDK 可讀商店 catalog；🟡 想做 cross-platform agent 的 developer：UCP 可當 single integration 替代 N 個商店整合；🔴 非 Shopify 商家：UCP 需等待其他平台採用 |
| **🔄 Vercel AI SDK v7 HarnessAgent[^harness-agent] experimental canary + codemod + Node ≥22 + 純 ESM；codemod 不覆蓋 HarnessAgent 專用遷移須手動補** | TS AI SDK / agent harness | HarnessAgent 跑 Claude Code / Codex / Pi 的 sandboxed sessions；一個 API 操控多家 agent harness；durable agent state；pause for human approval | 開源免費 | vs CrewAI / Mastra 1.0 / LangGraph.js / Anthropic Agent SDK / OpenAI Agents SDK；HarnessAgent 是「唯一在 TS 側原生整合 Claude Code + Codex + Pi 的 experimental API」；注意 experimental canary = API 可能變 | 🟢 Day 5 跑 `npx @ai-sdk/codemod v7` + 手動補 HarnessAgent provider / sandbox 設定；Node ≥22 + 純 ESM 要先確認；🟡 既有 LangGraph / CrewAI production agent 可觀望 1–2 週 |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：TSMC 法說 beat 後盤後 bull / bear 雙版 push notification SaaS（T+1 立即啟動）🔄

- **痛點來源**（接續 10/15 brief 點子 1）：10/15 14:00 法說 beat × Q4 財測 +58% YoY × 毛利 66.4% × 淨利 YoY +68.7% 已落地；台灣受眾 10/16 開盤前 1 小時最需要「同一組 beat 結果怎麼解讀出 bull vs bear」的分流 push —— 多數鉅亨／MoneyDJ／工商 push 都是「單側敘事」且未更新海外廠稀釋 3–4%（vs 原 2%）這條唯一 bear case
- **目標客群**：台灣／亞洲做蘋概股 / 半導體 push notification SaaS 的獨立開發者（估 50–150 家）+ 想做「法說 beat 後 bull / bear 雙版 pack」vertical SaaS 的 solo founder
- **技術複雜度**：3/5 — Node.js + TSMC 投資人關係 EDGAR 6-K 原文 + 外資報告 scraping + push notification 棧（APNs + FCM + LINE Notify）+ bull / bear 共識對照資料庫 + 可選 Claude Haiku 5.5 分類（≤100K token 甜蜜點）
- **預估 MRR**：訂閱 NT$ 399–1,299/mo × 500–1,500 用戶 = NT$ 200K–1.9M MRR；10/16 開盤前 1 小時 MVP 直接 live beta
- **競品弱點**：台灣目前無「bull / bear 雙版 + 海外廠 3–4% 稀釋納入敘事節制」法說結果 push
- **切入建議**：10/16 07:00 FAQ / FAQ pack 定稿（含海外廠 3–4% bear 支點）→ 08:00 開盤前 15 分 bull / bear 雙版 push → 10:00 外資 reports 更新第二輪 → 13:30 收盤前 15 分第三輪；10/16 24 小時內有 50+ 下載即啟動付費版

### 點子 2：iPhone Duo 20:00 預購搶空即時缺口精算 push SaaS 🆕

- **痛點來源**：10/16 20:00 Apple 台灣 + Taiwan Mobile myfone 同步開放 + 首批 <20,000 台 vs 近百萬預約 ~50:1 缺口 + eSIM only provisioning 新瓶頸；台灣消費者 20:00~20:30 時段最需要「即時各 SKU 售罄順序 + eSIM provisioning 排隊秒數 + myfone vs Apple 哪邊快」情報
- **目標客群**：10/16 20:00 想搶首批 iPhone Duo 的台灣消費者（估 10 萬人試搶）+ 蘋概股蘋果供應鏈分析師（估 500 人）+ 跨境代購（估 1,000 家）
- **技術複雜度**：3/5 — Node.js + Apple 台灣 / myfone 網頁 structured data scraping（公開 catalog 不涉違規）+ WebSocket push + APNs / FCM + 快取控制避免 scraping 被 ban
- **預估 MRR**：one-off NT$ 50–100 × 10 萬搶購者 = NT$ 500K–1M event-based revenue；若擴展為「蘋果新品預購即時缺口 push」訂閱產品 → NT$ 199/mo × 1,000 用戶 = NT$ 200K MRR
- **競品弱點**：台灣目前無「iPhone 預購搶空即時精算 + eSIM provisioning 排隊秒數」vertical push；一般 Yahoo 奇摩股市 / 鉅亨 push 只給事後結果
- **切入建議**：10/16 15:00 scraping script + push notification MVP 定稿 → 19:00 預熱 push「20:00 要搶哪個 SKU」→ 20:00~20:15 搶空後第 1 波「各 SKU 售罄順序 + eSIM provisioning 排隊」push → 21:00 盤後缺口精算第 2 波；10/23 開賣當日複用同 pipeline 做第二輪

### 點子 3：Agent Builder → Agents SDK 遷移顧問服務（T-45 倒數加壓）🔄

- **痛點來源**（接續 10/15 brief 點子 3）：11/30 下線剩 45 天 + 10/31 Evals read-only 剩 15 天 + code export「starting point only」不保證 1:1 + multi-agent branching / handoffs 需人工重驗；本週 Day 5 進入「workflow 清單手動驗證 code export 行為 1:1」實作 Day 4；reusable prompts 11/30 同下線加壓
- **目標客群**：以 Agent Builder 搭建 production agent 的台灣中小企 / SI 顧問案（10–50 人規模）；reusable prompts 11/30 同下線用戶群
- **技術複雜度**：2/5 — service business；Agents SDK TypeScript / Python + workflow re-architecture
- **預估 MRR**：N/A（one-off NT$ 60K–200K per client × 2–4 clients / month）
- **競品弱點**：台灣尚無針對 Agent Builder EOL 的專門顧問；多數 SI 顧問做「新建」而非「遷移」
- **切入建議**：10/16 Day 5 把自家 2 條 pipeline 跑完 code export + 手動驗證行為 1:1 收尾；寫 1 篇「Agent Builder → Agents SDK 遷移 checklist」blog；本週 10/18 前完成遷移路線設計、下週進入實作

## 🧰 工具堆疊更新

- **🆕 Claude Code v2.1.299 升級（10/14 發布）**：Day 5 升級 + 在長時程研究類 subagent 設 `autoCompactWindow` + 大檔 Read 用 `allow_large`；立即 ROI 到位
- **🆕 Codex CLI 0.162.1 patch + Managed Worktree 試用**：Day 5 升 + 做「3 條 feature 平行」工作流試裝；注意 0.163.0-alpha.2 agent 可自建 worktree 尚為 alpha
- **🆕 TSMC 法說 bull / bear 雙版 push 寫定 Day 5**：Q3 beat × Q4 財測 +58% × 毛利 66.4% × 淨利 YoY +68.7% × 海外廠 3–4% 稀釋（bear 支點）× 2027 CoWoS 2.73M + CapEx $78B × 蘋概 連鎖 7 軸；bull / bear 版本缺一不可
- **🆕 iPhone Duo 20:00 預購搶空 push 寫定 Day 5**：「20:00 開放前 1 小時 FAQ + 20:00~20:15 搶空第 1 波 + 21:00 盤後缺口精算 + 10/23 開賣當日補貨 push」4 波；首批 <20,000 台 vs 近百萬預約 ~50:1 缺口必在 FAQ 中揭露
- **🔄 Apple HomeView wrapper 評估收尾 Day 3**：Day 5 確認「無 App Store + iOS SDK homeOS header 零結果」= HomeView 原生 wrapper 機會下修；改錨「HomeKit / Matter 自動化」為務實路徑；本週 Day 5 停止進一步 docs 深讀
- **🔄 Shopify UCP MCP transport pipeline 試裝**：Day 5 試裝 1 條 MCP → UCP 讓 Claude Code / Agent SDK 讀取商店 catalog；台灣跨境電商 Shopify 商店試點目標 1 家
- **🔄 Haiku 5.5 shadow eval T+9**：第 2 週中段；over-refusal bug 未修補；今日仍不建議切為主線；等 Anthropic 修補後再回測
- **🔄 Agent Builder 清單手動驗證 Day 4**：workflow 清單今日 Day 4 驗 1–2 條 code export 後行為 1:1；10/18 前完成全清單
- **🔄 Vercel AI SDK v7 codemod + HarnessAgent 手動補丁**：Day 5 若主線還在 v6 要先跑 codemod + 手動補 HarnessAgent provider / sandbox；注意 experimental canary = API 可能變

## ⚡ 今日行動建議

- [ ] TSMC 法說 beat 盤後 push notification pack Day 5 定稿 + bull / bear 雙版本：「Q3 EPS 29.43 beat × Q4 財測 +58% YoY × 毛利 66.4% × 淨利 YoY +68.7% × 海外廠 3–4% 稀釋 bear 支點 × 2027 CoWoS 2.73M × 2027 CapEx $78B × 高盛 TP 2,330 × 蘋概連鎖 × 大立光 FAU」10 軸（預期 3 小時）
- [ ] iPhone Duo 20:00 預購搶空 push 寫定 + 加入「首批 <20,000 台 vs 近百萬預約 ~50:1 缺口」、「20:00 Apple 台灣 vs Taiwan Mobile myfone 搶空分流」、「eSIM only provisioning 排隊秒數」FAQ（預期 2 小時）
- [ ] Claude Code v2.1.299 升級 + autoCompactWindow / allow_large 試裝 2 條 subagent workflow 比對 token 消耗（預期 1.5 小時）
- [ ] Codex CLI 0.162.1 升級 + Managed Worktree 做「3 條 feature 平行」試裝 1 條（預期 1.5 小時）
- [ ] Shopify UCP MCP transport 試裝 1 條 pipeline → Claude Code 讀商店 catalog（預期 2 小時）
- [ ] 完成 Agent Builder workflow 清單 code export 行為 1:1 驗證 Day 4（10/18 前完成全清單；預期 2 小時）
- [ ] 寫 1 篇中文 build-in-public：「TSMC 法說 beat 後 bull / bear 雙版對照」或「iPhone Duo 預購 20:00 搶空即時缺口 push 48 小時 build log」

## ⏳ 待觀察

- 10/16 08:00 開盤：TSMC 法說 beat 後台股蘋概／AI 伺服器類漲幅、外資 TP 上修波次
- 10/16 20:00：iPhone Duo 預購 Apple 台灣 + Taiwan Mobile myfone 同步開放；首批 <20,000 台 vs 近百萬預約 ~50:1 缺口的「各 SKU 售罄順序 + eSIM provisioning 排隊秒數」為盤後 push 最強 trigger
- 10/23 08:00：iPhone Duo 中華電 500 間據點開賣；Foxconn 良率 60% 下 1,000 萬 vs 600 萬年目標缺口的「首波貨源到位度」訊號
- 10/31：OpenAI Evals read-only — T-15 倒數
- 11/9：Anthropic IPO 期中選舉後路演起點 — S-1 flip 公開（EDGAR）為先行觀察訊號 T-24
- 11/30：OpenAI Agent Builder + reusable prompts 11/30 EOL — T-45 倒數
- Apple HomeView 10/13 Day 3 後：11 月 Apple 開發者 docs 是否補 HomeKit matter.js 2 / Siri Shortcut 新 widget API；若無，智慧家庭 wrapper 機會窗口關閉
- Haiku 5.5 over-refusal bug：Anthropic 修補時程、Artificial Analysis AutomationBench-AA 重測結果（現為 35%）
- Shopify UCP 台灣 Shopify 商店 MCP transport 採用度 + agent profile 2026-01-11 版本是否快速 iterate

[^cowos]: 台積電先進 2.5D 封裝技術，正式名稱 Chip-on-Wafer-on-Substrate，把邏輯晶片與 HBM 高頻寬記憶體並排焊到共用矽中介層再接基板。Nvidia H100、B200 等 AI 加速器皆仰賴此封裝，產能為當前 AI 伺服器出貨的最大瓶頸。

[^edgar]: 美國證券交易委員會（SEC）的公開文件電子資料庫，全名 Electronic Data Gathering, Analysis, and Retrieval。在美上市或申請 IPO 的公司，S-1、10-K、6-K 等揭露文件皆上傳至此平台，為市場即時可查的一手財報來源。

[^managed-worktree]: Codex CLI 從 0.162.0 起內建的 git worktree 管理機制，讓同一 repo 可同時掛多個 agent 分支目錄而不衝突，省去使用者自寫 shell script 建、追蹤、清理 worktree 的流程；0.163.0-alpha.2 進一步讓 agent 自身能呼叫建立與列舉。

[^harness-agent]: Vercel AI SDK v7 推出的 experimental API，於 TypeScript 側以單一介面操控多家 coding agent harness（Claude Code、Codex、Pi 等）執行 sandboxed sessions，支援 durable state 與人工審核暫停。目前仍處 canary 階段，API 可能變動。

[^ucp]: Universal Commerce Protocol，Shopify 與 Google 合制的開放電商協定，讓 AI agent 直接讀取商店 catalog 與下單，不必再逐家 scraping REST API。支援 REST、GraphQL、JSON-RPC、A2A、MCP 五種 transport，Etsy、Wayfair、Target、Walmart 已加入。

## 📚 引用來源

1. [TSMC 6-K 財報 — 3Q26 Earnings with Guidance Final](https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000726/a3q26e_withguidancexfinal.htm) — 2026-10-15
2. [Benzinga — Taiwan Semiconductor Reports Q3 2026 Results Full Earnings Call Transcript](https://www.benzinga.com/news/26/10/62373492/taiwan-semiconductor-reports-q3-2026-results-full-earnings-call-transcript) — 2026-10-15
3. [KuCoin — TSMC Q3 2026 Earnings Revenue Exceeds Guidance 2nm Production Expands](https://www.kucoin.com/news/flash/tsmc-q3-2026-earnings-revenue-surpasses-guidance-2nm-production-expands) — 2026-10-15
4. [KuCoin — TSMC Q3 2026 Earnings Surpass Expectations Profit Rises 68.7%](https://www.kucoin.com/news/flash/tsmc-q3-2026-earnings-surpass-expectations-profit-rises-68-7) — 2026-10-15
5. [Averin — TSMC Q3 2026 Net Profit NT$763.1B Beats Q4 Guidance $52.3–54.3B](https://averin.com/en/journal/ruslan-averin-tsmc-tsm-q3-2026-earnings-results-ai-demand-guidance) — 2026-10-15
6. [BigGo Finance — TSMC Q3 2026 Earnings Call AI Demand Outpaces Supply](https://finance.biggo.com/news/US_TSM_2026-10-15) — 2026-10-15
7. [Digg — TSMC posts Q3 2026 earnings 69% profit surge revenue above guidance](https://digg.com/tech/3q9iowv9) — 2026-10-15
8. [ETtoday — iPhone Duo 明天很難搶！通路：全台首批不到 2 萬台](https://www.ettoday.net/news/20261015/3255219.htm) — 2026-10-15
9. [NOWnews — iPhone Duo 10/16 預購 頂規 2TB NT$118,900](https://www.nownews.com/amp/news/6879482) — 2026-10
10. [今周刊 — iPhone Duo 預購 10/16 售價規格 6 優勢 4 缺點](https://www.businesstoday.com.tw/article/category/183015/post/202610150023/) — 2026-10-15
11. [Apple 台灣 — 購買 iPhone Duo](https://www.apple.com/tw/shop/buy-iphone/iphone-duo) — 2026-10
12. [台灣大哥大新聞稿 — myfone 10/16 20:00 iPhone Duo 單機預購](https://corp.taiwanmobile.com/press-release/news/press_20260910_020234.html) — 2026-09-10
13. [Blake Crosley — Apple HomeView for Developers: What Apple Said on Day One](https://blakecrosley.com/blog/apple-homeview-developers-day-one) — 2026-10-13
14. [9to5Mac — Apple's new homeOS will launch this month](https://9to5mac.com/2026/10/02/apples-new-homeos-will-launch-this-month-heres-whats-coming/) — 2026-10-02
15. [Macworld — Welcome Home event smart home hub HomePod mini Apple TV 4K](https://macworld.com/article/3253965/welcome-home-event-smart-home-hub-homepod-mini-apple-tv-4k.html) — 2026-10
16. [Tom's Guide — Apple Welcome Home event HomePad all new products](https://tomsguide.com/home/smart-home/apple-announces-welcome-home-event-for-oct-13-homepad-and-all-the-new-products-to-expect) — 2026-10-08
17. [Classmethod Dev — Claude Code v2.1.296 Major Updates autoCompactWindow Sub-agents allow_large Read](https://dev.classmethod.jp/en/articles/20261010-cc-updates-v2-1-296/) — 2026-10-10
18. [Releasebot — Claude Code Updates by Anthropic October 2026 (v2.1.299)](https://releasebot.io/updates/anthropic/claude-code) — 2026-10
19. [Developers Digest — Codex CLI 0.162 Managed Worktrees Pinned Tasks 2026](https://www.developersdigest.tech/blog/codex-cli-0-162-managed-worktrees-pinned-tasks-2026) — 2026-10-08
20. [Daniel Vaughan — Reading the v0.163.0 Alpha Sprint Codex Worktrees Terminal Signals](https://codex.danielvaughan.com/2026/10/11/codex-v0163-managed-worktrees-osc-7501-grpc-stdio-agent-ux-maturity/) — 2026-10-11
21. [Shopify — Universal Commerce Protocol](https://www.shopify.com/in/ucp) — 2026-10
22. [Tech Insider — Claude Code vs Codex vs Copilot: 65.5% Dev Share 2026](https://tech-insider.org/claude-code-vs-codex-vs-github-copilot-2026/) — 2026-10
23. [Morph LLM — Codex vs Claude Code October 2026 Benchmarks Subagents Limits](https://www.morphllm.com/comparisons/codex-vs-claude-code) — 2026-10
24. [AI-TLDR — openai codex cli 0 162](https://ai-tldr.dev/releases/openai-codex-cli-0-162/) — 2026-10
25. [MetricNexus — Claude Haiku 5.5 Benchmarks and Real Cost Math](https://metricnexus.ai/blog/claude-haiku-5-5-benchmarks-pricing) — 2026-10
26. [AI Weekly — Anthropic Haiku 5.5 Price Cut 75%](https://aiweekly.co/alerts/introducing-claude-haiku-55) — 2026-10
27. [NPR — AI giant Anthropic prepares to sell stock to the public](https://www.npr.org/2026/06/01/nx-s1-5843199/anthropic-ipo-filing-ai-large) — 2026-06-01
28. [MCP Directory — OpenAI AgentKit 11/30 EOL 遷移路徑](https://mcp.directory/blog/openai-agentkit-deprecation-2026) — 2026-10-12
29. [AI Weekly — OpenAI tells devs to trim Skills, prompts for GPT-6 Astra](https://aiweekly.co/alerts/openai-tells-devs-to-trim-skills-prompts-for-gpt-6-astra) — 2026-10
30. [Runtime Wire — Vercel AI SDK v7 HarnessAgent](https://runtimewire.com/article/vercel-ai-sdk-7-adds-harnessagent-for-coding-agent-harnesses) — 2026-10
