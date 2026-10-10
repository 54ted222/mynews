---
title: 每日創業情報 — 2026-10-11
date: 2026-10-11
tags: 創業情報, AI 產業, SaaS, 台灣
summary: 國慶連假末日（10/9 補假、10/10 國慶、10/11 週日 3 天連假制 2026 新制「只補假、不補班」10/12 週一正常上班）+ 🔄 TSMC Q3 累計 NT$1.4942 兆 10/8 已公告超過上緣 共識 → 10/15 法說焦點僅剩毛利率、2nm ramp 與 Q4 展望 + 🔄 Haiku 5.5 T+4 第三方 benchmark 分化訊號浮現（Vals.ai #16/45、Terminal-Bench 僅 39.2%）+ 🔄 SWE-2 pricing cliff T+1 進入未揭露 per-token 單價期 + 🆕 OpenAI DevDay 2026 補充 context（Codex 雲端執行、CLI 語音、/agents interface、Agents API 支援 computer use）+ 🔄 Anthropic IPO 11/9 vs 10 月中路演時程衝突 + 🔄 Veo 3 API 6/30 已下線 Veo 3.1 取代 + iPhone Duo T-5 預購 T-12 開賣 + Agent Builder 11/30 T+50 Evals 10/31 T+20。
keywords: TSMC 9月 累計 Q3 1.4942 兆 法說 10/15 毛利率 2nm ramp CapEx 2027, Claude Haiku 5.5 T+4 Vals.ai 第三方 benchmark Terminal-Bench 39.2 shadow eval, SWE-2 pricing cliff T+1 per-token 未公告 Devin Pro Max Teams 10/10, DevDay 2026 Codex 雲端 CLI 語音 Agents API computer use 補充, Anthropic IPO 時程衝突 11/9 Bloomberg 10 月中 Reuters midterm, Veo 3.1 取代 Veo 3 6/30 下線 AI 影片 Sora 停役 context, iPhone Duo T-5 預購 T-12 開賣 Taiwan Mobile myfone 10/16 20:00, Agent Builder 11/30 T+50 Evals 10/31 T+20 Agents SDK Workspace Agents, 國慶連假 2026 10/9 補假 10/10 國慶 10/11 週日 10/12 週一正常上班 新制, 國慶焰火 台東 1.9 萬發 南島臺灣 台北 101 無人機 600 台
---

# 每日創業情報 — 2026-10-11

## 🎯 今日 TL;DR

- **連假末日（週日）+ Q4 第 11 日 + 中秋 T+16 + 2026 新制「只補假、不補班」3 日連假（10/9 補假 → 10/10 國慶 → 10/11 週日）收尾 + 下週 10/12 週一正常開工** — 前幾日 brief「10/12 補假」判讀為錯誤，實際補假已於 **10/9（週五）** 完成；10/12 為「本月唯一無節日的完整工作週 + 下週 pitch 定稿正式日」
- **🔄 TSMC 9 月營收已於 10/8 公告：NT$5,118.57 億（月減 0.6%、年增 54.6%）+ Q3 累計 NT$1.4942 兆（季增 17.62%）+ 超過原財測美元 $44.6–45.8B 區間換算 NT$1.4272–1.4656 兆上緣 → 10/15 T-4 法說焦點僅剩「毛利率、2nm ramp 稀釋、CapEx 展望、2027 tone」4 軸** — 數字變數已被 10/8 月報預先解決，前幾日 brief 的「Q3 beat/miss 76.09 共識」已過時，應改追「毛利 65–67% 守得住否、2nm 商業 ramp 稀釋幅度、CoWoS 2027+ tightness 具體延長至何時」
- **🔄 SWE-2 pricing cliff T+1 已過 + per-token 單價仍未揭露 + Devin Pro $20 / Max $200 / Teams $80 + $40/seat 為唯一續用路徑** — 昨日為最後決策日，今日起進入「用了但不知每月帳單上限多少」的 opaque 期；per-project ROI 自動審計工具的需求浮現為 fresh 訊號
- **🔄 Haiku 5.5 T+4 — 第三方 benchmark 分化訊號浮現**：[Vals.ai](https://www.vals.ai/models/anthropic_claude-haiku-5-5)[^vals-ai] 綜合排名 #16/45（54.31%）、Artificial Analysis[^artificial-analysis] 智慧指數 43（Xhigh 變體 41）、[eesel.ai](https://www.eesel.ai/blog/claude-haiku-5-5-review) 評「≤100K 便宜區間強、>100K token-hungry 划不來、agentic coding 弱」、Terminal-Bench 4.0[^terminal-bench] 僅 39.2% vs Sonnet 5.5 的 70.6%。對一人 SaaS 的意義：**Haiku 5.5 的「shadow eval」要跑在「短 context + 分類／摘要／轉譯」3 類子任務，不要用在 agentic coding**

## 🔄 昨日追蹤

- 🔄 **TSMC Q3 beat/miss 判讀修正**：10/8 月報已公告 → Q3 累計 NT$1.4942 兆**超過**原美元財測上緣，前幾日 brief 連日追「EPS 76.09 共識 beat/miss」為過時焦點，實際關鍵已切換至毛利率與展望
- 🔄 **國慶連假制度修正**：2026 起「只補假、不補班」新制，10/9（週五）為補假日、10/10（週六）國慶、10/11（週日）連假末日；前幾日 brief 中「10/12 補假」或「10/13 週一正式切換」為錯誤判讀，正確為 **10/12 週一正常上班**
- 🔄 **SWE-2 T-0 → T+1**：免費期昨日（10/10）已結束；Cognition 仍未公告 per-token 單價，進入「訂閱即用但帳單 opaque」期
- 🔄 **Haiku 5.5 T+3 → T+4**：第三方 benchmark 齊備（Vals.ai、Artificial Analysis、eesel 評測），shadow eval 的「適用邊界」逐漸清晰——短 context、便宜高頻任務是甜蜜點，agentic coding 不行
- 🔄 **Codex SDK/Slack T+11 → T+12**：連假末日第 2 完整工作週（10/12–10/18）開工倒數
- 🔄 **iPhone Duo 預購 T-6 → T-5（10/16 20:00 Taiwan Mobile myfone[^myfone]）+ 開賣 T-13 → T-12（10/23 08:00 中華電信 500 間）**：美國 Apple 官網 10/12–10/15「Get ready」準備窗口恰好對應台股連假後 3 日
- 🔄 **TSMC Q3 法說 T-5 → T-4**：Quiet Period Day 7（10/5–10/14）進入收尾階段
- 🔄 **Agent Builder 11/30 T+51 → T+50 + Evals 10/31 T+21 → T+20**：Evals read-only 剩 20 天
- 🔄 **TiBOOST 入圍名單 T+5 → T+6 未公告**：10/12 開工後仍無聲，官方可被動催促

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🔄 TSMC 2026 年 9 月營收 NT$5,118.57 億（10/8 公告）+ Q3 累計 NT$1.4942 兆**（季增 17.62%、年增 54.6%）**+ 前 9 月累計 NT$3.90 兆**（年增 41.1%）+ 超過原美元財測 $44.6–45.8B 區間換算 NT$1.4272–1.4656 兆上緣 + 10/15 T-4 法說焦點切換為「毛利 65–67% 守得住否、2nm 商業 ramp 稀釋 3–4 ppt、海外三廠（Arizona + 熊本 + Taiwan）早期稀釋 2–3 ppt、CoWoS[^cowos] 2027+ tightness 延長幅度、CapEx $60–64B 是否再上修、2027 tone」 | [TSMC 官方 9 月營收 PDF](https://pr.tsmc.com/system/files/newspdf/attachment/8774bca661e0743c52a8bb9c62c82f9c86f2b444/September%202026%20%28C%29_final_wmn.pdf)、[經濟日報 — 台積電 9 月營收 5,118 億創歷年同期新高 優於法人 Q3 預期](https://money.udn.com/money/story/5607/9802747)、[TechNews — 台積電 9 月營收年增 54.7%](https://finance.technews.tw/2026/10/08/tsmc-2330-202609-financial-report/)、[優分析 — Q3 1.49 兆飛越財測高標](https://uanalyze.com.tw/articles/9459256745) | 連假末日 pre-rerating 焦點切換：「TSMC Q3 營收數字已定案 × 法說 T-4 僅剩毛利/CapEx/2027 展望 4 軸 × 原 EPS 76.09 共識 beat/miss 焦點已過時 × 9 月月減 0.6% 為小幅季節調整 × 年增 54.6% 續強」= 下週一 10/12 開工首要議程「蘋概股 pre-rerating audit 的錨從營收換成毛利」；per-project「毛利率 beat/miss 65–67% dashboard × 2nm 稀釋幅度精算 × CoWoS 2027+ 到底延到何時 × CapEx 上修 vs 不變 × Q4 展望逐字稿」5 合一 pitch pack NT$ 15K–40K | 機會：**「TSMC Q3 1.4942 兆已超過上緣 × 法說 T-4 毛利率 65–67% × 2nm 稀釋 3–4 ppt + 海外 2–3 ppt 合計 5–7 ppt × CapEx $60–64B 可能再上修 × CoWoS 2027+ tightness × 2027 tone × iPhone Duo T-5 × A20 Pro × 外資 TP NT$1,800 × 配息 NT$24 +33% YoY」10 合一 pre-rerating audit NT$ 40K–120K**；「焦點切換」為新 pitch angle；威脅：原「EPS 76.09 共識 beat/miss」焦點作廢，若仍 pitch 這條會顯得資訊落後；需以「毛利率守得住否 × 2nm ramp 稀釋 × 海外早期稀釋 × CapEx 再上修機率 × 2027 tone」多軸差異化 |
| **2026 國慶連假「只補假、不補班」新制首度適用 + 10/9（週五）補假 + 10/10（週六）國慶 + 10/11（週日）連假末日 + 3 日連假 + 10/12（週一）正常上班 + 台東國慶焰火 1.9 萬發 30 分鐘 24 吋 「世界的方舟：南島臺灣」主題 + 台北 101 無人機 600 台（去年 500 台 +20%）結合煙火與建築燈光 14 分鐘 + 新北市承辦國慶晚會** | [Yourator — 2026 行事曆](https://www.yourator.co/articles/522)、[Taiwan News — 2026 國慶晚會新北、焰火台東](https://www.taiwannews.com.tw/zh/news/6403564)、[公視新聞 — 國慶焰火台東](https://news.pts.org.tw/article/829260) | 連假末日「bench time」收尾日 + 下週 10/12 正常開工：前幾日 brief 中「10/12 連假第 3 日」或「10/13 週一切換」為錯誤判讀，正確節奏為「10/11 收尾日 → 10/12 開工全程」；per-project「連假 3 日工具堆疊重整 playbook（Haiku 5.5 shadow eval 收尾 + SWE-2 續訂決策複盤 + Codex SDK 第 2 週預備 + Agent Builder 遷移 timeline 寫定 + Vercel AI SDK v7 codemod）」5 合一；對台灣 indie 社群的意義：「只補假、不補班」把連假從 4 日壓縮至 3 日，Q4 下一波有效 bench time 要等到 11/29 元旦前 | 機會：**連假「3 日 bench time + 下週首個完整工作週 + 下下週 TSMC 法說 + 下下下週 iPhone Duo 預購」4 階段 outbound 新節奏，比往年「國慶 4 日連假 + 連假後軟性開工」更密集**；內容型 SaaS 可包裝「2026 國慶 3 日高強度 bench playbook」+ 2026 新制「只補假不補班」對 Q4 outbound 衝量的影響分析（新 angle）；威脅：連假末日心理「準備收心」vs「下週高密度節奏」為反差點，建議 push notification 時段避開 10/11 晚間 20:00–22:00 的「收假情緒」 |
| **🔄 iPhone Duo T-12（10/23 開賣）+ Taiwan Mobile myfone 單機預購 10/16 20:00 T-5 + Apple 官網台灣同時 10/16 20:00 開放預訂 + 中華電信 10/23 08:00 全台近 500 間指定服務據點正式開賣 + NT$74,900（256GB）–NT$118,900（2TB）+ Star White 60% vs Night Sky 40% + 近百萬預約 + 首年預估 1,000 萬台 vs 600 萬 Foxconn 下修 + Apple A20 Pro + 美國 Apple 官網 10/12–10/15「Get ready」準備窗口 + 中國官網無預備窗口 + 9/10 利多出盡：新日興（3376）-7.52% + 玉晶光（3406）-3.15% + 大立光 -2.11% + 鴻海 -1.39% + 臻鼎-KY -1.39% + 2026 臻鼎 Apple 相關營收估 60–65% + 蘋果「ASP/BOM 單機價值 vs 衝量」策略分化** | [Taiwan News — Taiwan Mobile 10/16 20:00 預購 iPhone Duo](https://www.taiwannews.com.tw/news/6437480)、[Focus Taiwan — 中華電 Duo 9/18 預約 2 分鐘搶空](https://focustaiwan.tw/business/202609120006)、[TrendForce — Apple 擬 Taiwan pilot India mass production foldable](https://www.trendforce.com/news/2025/09/18/news-apple-reportedly-mulls-taiwan-pilot-india-mass-production-for-foldable-targets-10-shipment-growth/) | 連假末日台廠精密機構 pre-rerating 第 5 日 + 美國「Get ready」窗口第 1 日（10/12）為下週首要事件：「iPhone Duo T-12 開賣 × Taiwan Mobile 10/16 20:00 T-5 預購 × 美國 10/12–10/15 Get ready × 中國無窗口 × 台灣無公告 × 近百萬預約 × 1,000 萬首年 vs 600 萬 Foxconn 下修 × Star White 60% × Night Sky 40% × 鉸鏈 (3376) + FPCB (臻鼎) + 光學 (3406 / 大立光) + PCB (華通 / 台郡) 4 軸」10 軸；per-project「iPhone Duo T-12 開賣 × 10/16 20:00 預購搶空預測 × 美國 Get ready 窗口 4 日對照台灣預購 × 蘋概股 push notification 時段為週一 10/12 早盤 + 週四 10/16 預購前 1 小時 × 配貨 pack × 新日興富聯合資 鉸鏈供應鏈 dashboard」6 合一 audit NT$ 50K–150K | 機會：**「iPhone Duo T-12 × 預購 T-5 × 近百萬預約 × 1,000 萬首年 vs 600 萬 Foxconn 下修 × Star White 60% × 美國 Get ready 窗口 10/12–10/15 × 蘋果 ASP/BOM 策略 × 臻鼎 Apple 60–65% × 新日興富聯合資鉸鏈 × 大立光 + 玉晶光 光學 × 華通 + 台郡 PCB/FPCB」11 合一 vertical audit NT$ 50K–150K** + Q4 連假末日 pitch pack NT$ 15K–40K；「美國 Get ready 10/12 起 + 台灣預購 T-5」為下週首要 trigger；威脅：「600 萬 Foxconn 下修 vs 1,000 萬首年」仍為結構性瓶頸，需以「10/16 20:00 預購 T-5 + 10/23 開賣 T-12 + 美國 Get ready 窗口對照 + Star White 60% + 蘋果 ASP/BOM 策略」多軸差異化 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🔄 Claude Haiku 5.5（T+4 第三方 benchmark 分化訊號浮現）** | LLM 小模型 / 高頻 subagent | 短 context（≤100K）分類、摘要、轉譯；effort levels[^effort-levels] 可調推理深度 | $0.10/M in、$0.50/M out（≤100K token）、$0.20/M in、$1.00/M out（>100K token） | Vals.ai 綜合 #16/45、Artificial Analysis 智慧指數 43（Xhigh 變體 41）；Terminal-Bench 4.0 僅 39.2%（Sonnet 5.5 的 70.6%），**agentic coding 不適用**；eesel.ai 評「≤100K 便宜區間強、>100K token-hungry 划不來」 | 🟢 shadow eval 甜蜜點：日報轉譯、分類標籤、subagent 子任務；🔴 禁區：agentic coding、長 context（>100K）、Terminal 操作；今日連假末日為 shadow eval 第 2 天收尾、下週一 10/12 開工前決定「哪 1 條 pipeline 正式切換」 |
| **🔄 Cognition SWE-2 (Devin)（T+1 pricing cliff 已過 + per-token 單價 opaque）** | AI 編碼 agent | multi-file refactor、Fusion rollout[^fusion] 全線整合（Desktop + CLI + Web + IDE）；SWE-2 僅在 Devin 內提供、無獨立 API | Devin Pro $20/mo + Max $200/mo + Teams $80/mo base + $40/mo per seat + Free $0；SWE-2 per-token 單價未公告 | vs Codex SDK + Slack / Claude Code Sonnet 5.5 / Cursor Composer 2.5 / Replit Agent 3 Pro；SWE-2「從 Kimi K3 post-train + FrontierCode 50% 內 1 pt + 比 Fable 5.1 便宜 64%（vendor 自報）」+ Fusion 全線整合為差異點；但 10/10 後 per-token 單價不透明是重大 ROI 風險 | 🟡 已訂閱 Pro：先用 1 個月、每日記下 context 用量、月底算 ROI；🔴 未訂閱：先不續訂、等 Cognition 揭露 per-token 單價或獨立 API；🟢 fresh 商機：「SWE-2 / Devin 月費 ROI 自動審計 CLI」是本週可做的開源點子 |
| **🆕 OpenAI DevDay 2026 補充 context（9/29 已舉行、T+12）** | AI 編碼 agent 生態 | Codex 加上雲端執行（可從其他裝置 remote 啟動 task）+ Codex CLI 加語音輸入 + /agents interface 多任務管理 + Agents API 支援 computer use（GUI 操作） | 隨 ChatGPT Plus / Pro / Business / Edu / Enterprise 5 tier；Agents API computer use 定價未揭露 | vs Google Antigravity + Gemini 3 Pro（11/18/2025 released、agent-first IDE）/ Anthropic Claude Code + computer use / Replit Agent 3 + App Testing；Codex「GA + SDK + Slack + 雲端 remote 啟動 + CLI 語音 + /agents 多任務 + Agents API computer use + CI/CD + 5 tier」為最完整組合 | 🟢 連假末日為「Codex SDK 第 1 完整週深度試用」收尾日、下週 10/12 開工為第 2 完整週深化階段；remote 啟動 task + CLI 語音 2 項新 primitive 為小團隊 Codex 工作流 upgrade；注意 Agent Builder 11/30 下線、Agents SDK 長期路徑、reusable prompt objects 同步 11/30 下線 |
| **🔄 Veo 3.1 API（Veo 3 已於 6/30 下線取代 context）** | AI 影片生成 | 4、6、8 秒 clips 最高 4K；取代 Veo 3 API（6/30 已下線）、取代退場的 Sora App（4/26）+ Sora API（9/24） | 需查 ai.google.dev 官方定價頁；Vertex AI + Google AI Studio 雙管道 | vs Runway Gen-4.5 / Luma Ray 3.2 / Kling 3.0 / Seedance 2.0；Veo 3.1「取代 Veo 3 API + 4K + 多 keyframe + 多鏡頭控制」為 2026 Q4 AI 影片生成第一線 | 🟡 影片 vertical SaaS：Sora App/API 停役後必換 provider；Veo 3.1 + Runway Gen-4.5 + Luma Ray 3.2 三軸 fallback 配置；🟢 本週無法移動，等下週 10/12 開工後跑 2 分鐘 benchmark 選主備 |
| **🔄 OpenAI Agent Builder 11/30 下線（T+50）+ Evals 10/31 read-only（T+20）** | agentic 開發棧生命週期 | Agent Builder 11/30 停役、Evals 10/31 轉 read-only + Agents SDK 為代碼路徑長期取代 + ChatGPT Workspace Agents 為 no-code 取代 + ChatKit 續可用 + Responses API 續可用 + reusable prompts v1/prompts 同 11/30 下線（code export 僅 starting point、不保證行為 1:1 轉換） | 停役本身無新費用；Agents SDK 走底層 model API usage；ChatKit 續商用 | vs Anthropic Agent SDK + CrewAI + LangGraph.js + Mastra 1.0 + Vercel AI SDK v7；Agent Builder「視覺化 drag-and-drop canvas」已 EOL vs「Agents SDK code-first + Workspace Agents no-code + ChatKit continues」= OpenAI 自身 agentic 分流清晰 | 🔴 11/30 下線剩 50 天 + 10/31 Evals read-only 剩 20 天：下週 10/12 開工首要議程「列出所有以 Agent Builder 搭建的 workflow + 手動驗證 code export 後行為」；可外包 1 條單線 pipeline 作為「Agent Builder → Agents SDK 遷移顧問」切入商機 |
| **Replit Agent 3 Pro（effort-based billing 續爭議）** | SaaS AI coding（低碼平台） | 自動建 Neon Postgres + auth + deploy + 200 分鐘 autonomous + App Testing；Economy / Standard / Turbo 3 模式 | Free / Core $20（原 $25）/ Pro $100；Core 月費 2 agents 並行、Pro 月費 10 agents 並行；Turbo Mode 2× 速 6× 成本（Pro/Enterprise）；effort-based billing 爭議續行 | vs Codex SDK + Slack / Cursor Composer 2.5 / Claude Code / Lovable / v0；Replit「全棧低碼 + Neon + auth 自動 + 200 分鐘 autonomous + Turbo Mode 6× 成本」= 無碼 MVP 甜蜜點 vs 工程師主場 Codex / Cursor | 🟡 一人創業「無程式背景但要做 MVP」場景可試；🔴 工程師主場仍是 Codex SDK + Claude Code 組合；Turbo Mode 6× 成本是 bill shock 風險，Economy Mode（1/3 成本）為 default 建議 |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：SWE-2 / Devin 月費 ROI 自動審計 CLI 🆕

- **痛點來源**：SWE-2 免費期昨日（10/10）結束 + Cognition 未揭露 per-token 單價 → 續訂的 Devin Pro / Max / Teams 用戶面臨「月費固定但 context 用量不透明」的黑盒；[Replit Discourse](https://replit.discourse.group/t/agent-3-cost-my-observation/7071) 的「Agent 3 Cost」討論串、[The Register — Replit Agent 3 cost overruns](https://www.theregister.com/2025/09/18/replit_agent3_pricing/) 已反覆出現「不敢繼續用」的 bill shock 抱怨；SWE-2 的 opaque 期才剛開始
- **目標客群**：使用 Devin / Cursor Pro / Replit Agent 的 1–5 人獨立開發團隊，特別是「不想自己做試算表追用量」的台灣／亞洲工程師
- **技術複雜度**：2/5 — Node.js + Devin / Cursor / Replit API 抓用量 + heuristic 省錢建議
- **預估 MRR**：$3–10K（$9/mo 單人、$29/mo 團隊）；開源 CLI 免費版打 awareness、$29/mo cloud dashboard 收團隊
- **競品弱點**：Portkey / Helicone / Braintrust 偏 LLM Observability + API 直連模式，不覆蓋 Devin / Cursor / Replit 這類「IDE 內 opaque」用量；也沒針對「省錢建議」做 heuristic
- **切入建議**：先接 Devin + Cursor + Replit Agent 3 共 3 個 vendor；關鍵訊號是「使用者看完 report 後實際行動（降階 / 換模型 / 取消訂閱）的比例」而非 MRR；10/12 開工首日把 Devin Admin API 探索 1 小時，確認資料可取；若通，7 日內 HN 丟一次

### 點子 2：Haiku 5.5 「適用邊界」自動分流 Router 🆕

- **痛點來源**：Haiku 5.5 benchmark 分化訊號（Terminal-Bench 僅 39.2% vs Sonnet 5.5 的 70.6%、>100K token-hungry）→ 一人團隊很難憑手感判斷「這個 request 要丟 Haiku 5.5 還是 Sonnet 5.5」；OpenRouter / Portkey 的 LLM router 偏重 cost / latency 平衡，不考慮「task shape × model fitness」的分流
- **目標客群**：Agentic SaaS 一人團隊（台灣 + 亞洲），特別是「有多 provider 多 model 但沒時間建 eval harness」的工程師
- **技術複雜度**：3/5 — Node.js + 建 task classification + 預先跑 100 條 benchmark 存成分流規則
- **預估 MRR**：$5–15K（$19/mo 單人、$79/mo 團隊）；對嗆 OpenRouter 的差異化在「自動分流規則 + 省錢建議 heuristic」而非 raw routing
- **競品弱點**：OpenRouter / Portkey 偏價格撮合，缺「Haiku vs Sonnet vs Opus」這類同家族的 fine-grained 分流；Braintrust / Langfuse 偏企業 eval，不是 production router
- **切入建議**：10/12 開工日先把現有產品 1 條 pipeline 的 100 筆真實 request 跑 Haiku 5.5 + Sonnet 5.5，手動標 ground truth，計算「fitness heuristic」；若 heuristic 準確度 >80% 就寫 1 篇 build-in-public 投 HN

### 點子 3：Agent Builder → Agents SDK 遷移顧問服務 🆕

- **痛點來源**：11/30 下線剩 50 天 + 10/31 Evals read-only 剩 20 天 + code export「starting point only，不保證行為 1:1 轉換」+ 多 agent workflow 的 branching / handoffs 需人工重驗 → 中小企業的既有 Agent Builder workflow 可能完全撐不住遷移
- **目標客群**：以 Agent Builder 搭建 production agent 的台灣中小企業 / SI 顧問案（10–50 人規模）
- **技術複雜度**：2/5 — 本質是 service business，技術門檻為 Agents SDK[^agents-sdk] TypeScript / Python 熟練 + workflow re-architecture 經驗
- **預估 MRR**：N/A（one-off NT$ 60K–200K per client × 2–4 clients / month）
- **競品弱點**：台灣目前尚無針對 Agent Builder EOL 的專門顧問服務；多數 SI 顧問案做「新建 agentic workflow」而非「遷移既有的」
- **切入建議**：10/12 開工首日發 2 封台灣中小企業 SI 社群 cold outbound（「您的 Agent Builder workflow 準備好 11/30 下線了嗎？」），同時寫 1 篇「Agent Builder → Agents SDK 遷移 checklist」blog 文章卡位；若 48 小時內有 2+ 回應，就正式啟動

## 🧰 工具堆疊更新

- **🔄 Haiku 5.5 shadow eval 收尾**：連假末日為 shadow eval 第 2 天收尾日；下週 10/12 開工前決定「哪 1 條 pipeline 正式切換到 Haiku 5.5」（限短 context + 分類／摘要／轉譯類子任務）
- **🔄 SWE-2 續訂決策複盤**：已過 cliff，若已續 Pro $20，10/12–10/18 第 1 週要每日記下 context 用量；月底算 ROI 決定續不續
- **🔄 Codex SDK 第 2 完整週預備**：10/12–10/18 深化階段首日把 remote 啟動 task + CLI 語音 + /agents interface 3 項新 primitive 跑一次 1 小時 benchmark
- **🔄 Agent Builder 遷移 timeline 寫定**：11/30 下線剩 50 天，10/12 開工日列出所有以 Agent Builder 搭建的 workflow 名單；10/13 開始手動驗證 code export 後行為
- **🔄 Vercel AI SDK v7 codemod**：若主線仍在 v6，10/11 連假末日跑一次 codemod；1 小時可完成；breaking changes 不多
- **🔄 影片生成 provider 重估**：Sora 已停、Veo 3 已換 Veo 3.1、Runway Gen-4.5、Luma Ray 3.2 為第一線；下週 10/12 跑 2 分鐘 benchmark 決定主備
- **🆕 新增至堆疊**：Replit Agent 3 Pro 的 Economy Mode（1/3 成本）作為「無碼 MVP 快速驗證」第二選項（主選仍是 Codex SDK + Claude Code）

## ⚡ 今日行動建議

- [ ] **🔴 高優先（60 分鐘）**：Haiku 5.5 shadow eval 收尾 — 把昨日啟動的 20 條 sample 跑完、對比 cost × quality × latency、寫 1 頁報告決定「正式切換 or 不切」
- [ ] **🟡 中優先（90 分鐘）**：下週 pitch 定稿預備 — 列出 10/12–10/18 要發的 3 個 pitch、各寫 1 頁 one-pager（含 TSMC Q3 法說 T-4、iPhone Duo 預購 T-5、Agent Builder 遷移 T+50 3 條 angle）
- [ ] **🟡 中優先（30 分鐘）**：SWE-2 續訂決策複盤 — 若已續 Pro，寫 1 頁「每日 context 用量追蹤表」範本；若未續，撤銷訂閱並記在 memo 裡
- [ ] **🟢 低優先（可選）**：若主線用 Vercel AI SDK，跑一次 v7 codemod 升級；若主線用 Agent Builder，列出所有 workflow 名單等 10/12 開工啟動遷移

## ⏳ 待觀察

- **TSMC Q3 法說（10/15 T-4）**：焦點已切至「毛利 65–67% × 2nm 稀釋 × CoWoS 2027+ tightness × CapEx 再上修 × 2027 tone」，Q3 數字變數已被 10/8 月報預先解決
- **Anthropic IPO 時程衝突**：[Bloomberg 版本](https://cryptobriefing.com/anthropic-targets-november-ipo-delay/) 說可能延後至 **11/9 週**啟動路演；Reuters/其他媒體說 10 月中啟動、11 月 midterm 前上市；本週仍無公開 S-1 於 EDGAR 現身——SEC 規定公開版本須在路演前 15 天送達投資人，EDGAR 公開 S-1 為下一個關鍵事件
- **TiBOOST 入圍名單 T+6**：10/12 開工後若仍無聲，官方應被動催促；入圍名單公告為下週首要落榜補位 trigger
- **SWE-2 per-token 單價揭露**：Cognition 可能在 10/12 開工後第 1 個完整工作週揭露、也可能繼續 opaque；每日追 1 次 cognition.ai 定價頁
- **iPhone Duo 美國 Get ready 窗口 10/12–10/15**：若 10/12 美國窗口開啟後臺灣供應鏈股有連動，10/16 20:00 Taiwan Mobile 預購搶空信號為 confirmed trigger
- **Haiku 5.5 第三方 benchmark 收尾**：下週預計會有 Reddit / HN 的「我把 Opus 子任務換成 Haiku 5.5」實戰心得；10/13 起每日追 r/LocalLLaMA + HN「Haiku 5.5」

[^effort-levels]: Anthropic 於 Claude 系列推出的 API 參數，允許呼叫端指定模型推理「思考深度」（例如 low／medium／high），在同一模型內切換速度與回答完整度的 trade-off；effort 越高耗費 token 越多、延遲越長但推理更細。過去僅 Opus/Sonnet 支援，Haiku 系列首次納入是在 5.5 版。

[^cowos]: Chip on Wafer on Substrate，TSMC 的 2.5D 先進封裝技術，把邏輯晶片與高頻寬記憶體（HBM）堆疊在同一介層上，是 NVIDIA、Broadcom、AMD 等 AI 加速器晶片的瓶頸產能。CoWoS 供給緊俏會直接牽動 GPU 交期與雲端 inference 報價，是半導體與 LLM 成本結構之間的連動變數。

[^fusion]: Cognition 於 2026 年推出的 Devin 全線整合層，將 Desktop App、CLI、Web、IDE plugin 四個介面接到同一 agent session，使任務可以跨介面無縫接手與觀察；「Fusion rollout」指此整合層的分階段釋出，是 SWE-2 模型之外的產品化差異點。

[^vals-ai]: Vals.ai 是以第三方立場公開評比各家 LLM 的榜單站，每月更新綜合排行與分項得分，涵蓋法律、金融、代碼等多類基準，常被工程師用來交叉驗證模型廠商自家發布的 benchmark 數字。

[^artificial-analysis]: Artificial Analysis 是獨立聚合 LLM 智慧指數、速度與單位 token 成本的評比站，彙整多家 benchmark 數據以單一「Intelligence Index」排序；因兼顧性能與價格，常被業界引用做 model selection 的比價基準。

[^terminal-bench]: Terminal-Bench 是以真實命令列操作任務（檔案搜尋、環境配置、腳本修補等）評估 LLM agent 的 benchmark 套件，4.0 版加入更長任務序列與更嚴苛的成功判定，用於衡量模型在 shell 環境內自主完成任務的能力。

[^agents-sdk]: OpenAI 於 2026 推出的代碼優先 agent 開發棧，提供 Python 與 TypeScript 雙 runtime，取代 11/30 將下線的 Agent Builder 視覺化畫布；內建 handoff、工具呼叫與 session 管理，是官方指定的 agentic 應用長期路徑。

[^myfone]: 台灣大哥大經營的電信與行動服務品牌通路，涵蓋網路門市與實體據點，常用於首賣旗艦手機的線上預購入口；本次 iPhone Duo 預購同步開放 Apple 官網與 myfone 兩個管道搶貨。

## 📚 引用來源

1. [TSMC 2026 年 9 月營收報告 PDF](https://pr.tsmc.com/system/files/newspdf/attachment/8774bca661e0743c52a8bb9c62c82f9c86f2b444/September%202026%20%28C%29_final_wmn.pdf) — 2026-10-08
2. [經濟日報 — 台積電 9 月營收 5,118 億創歷年同期新高 優於法人 Q3 預期](https://money.udn.com/money/story/5607/9802747) — 2026-10-08
3. [TechNews — 台積電 2330 2026-09 月營收公告](https://finance.technews.tw/2026/10/08/tsmc-2330-202609-financial-report/) — 2026-10-08
4. [優分析 — 台積電 Q3 1.4942 兆飛越財測高標](https://uanalyze.com.tw/articles/9459256745) — 2026-10-08
5. [eesel.ai — Claude Haiku 5.5 review: a real bargain, but only under 100k tokens](https://www.eesel.ai/blog/claude-haiku-5-5-review) — 2026-10
6. [Vals.ai — Claude Haiku 5.5 ranking](https://www.vals.ai/models/anthropic_claude-haiku-5-5) — 2026-10
7. [Computing Forgeeks — Claude Haiku 5.5 features and benchmarks](https://computingforgeeks.com/claude-haiku-5-5-released-features-benchmarks/) — 2026-10
8. [Apidog — Claude Haiku 5.5 benchmarks](https://apidog.com/blog/claude-haiku-5-5-benchmarks/) — 2026-10
9. [InfoQ — OpenAI DevDay 2026](https://infoq.com/news/2026/10/openai-devday-2026) — 2026-10
10. [OpenAI DevDay 2026 Recap 官方](https://openai.com/index/devday-2026-recap/) — 2026-09-29
11. [AgenticWire — OpenAI Agent Builder migration SDK vs Workspace Nov 30 deadline](https://www.agenticwire.news/article/openai-agent-builder-migration-sdk-workspace) — 2026
12. [Crypto Briefing — Anthropic targets November for IPO pushing back from October](https://cryptobriefing.com/anthropic-targets-november-ipo-delay/) — 2026
13. [AllMind — Anthropic IPO preview valuation timing](https://allmind.ai/research/anthropic-ipo-preview) — 2026
14. [Yourator — 2026 行事曆（國慶 10/9 補假）](https://www.yourator.co/articles/522) — 2026
15. [Taiwan News — 2026 國慶晚會新北、國慶焰火台東](https://www.taiwannews.com.tw/zh/news/6403564) — 2026-07
16. [公視新聞 — 國慶焰火台東 1.9 萬發 24 吋 南島臺灣](https://news.pts.org.tw/article/829260) — 2026-10
17. [Taiwan News — Taiwan Mobile 10/16 20:00 預購 iPhone Duo](https://www.taiwannews.com.tw/news/6437480) — 2026-09-10
18. [Focus Taiwan — 中華電 Duo 9/18 預約 2 分鐘搶空](https://focustaiwan.tw/business/202609120006) — 2026-09-12
19. [Provimedia — AI Video Generation 2026 Veo Kling Runway 比較](https://provimedia.de/en/blog/ai-video-tools-2026) — 2026-07
20. [Replit Discourse — Agent 3 Cost: My Observation](https://replit.discourse.group/t/agent-3-cost-my-observation/7071) — 2025-09
21. [The Register — Replit Agent 3 pricing cost overruns](https://www.theregister.com/2025/09/18/replit_agent3_pricing/) — 2025-09-18
22. [MetricNexus — Claude Haiku 5.5 Benchmarks and Real Cost Math](https://metricnexus.ai/blog/claude-haiku-5-5-benchmarks-pricing) — 2026-10
23. [AlternativeTo — Replit restructures plans Core $20 Pro $100](https://alternativeto.net/news/2026/2/replit-restructures-plans-with-lower-core-pricing-and-launches-pro-for-advanced-teams) — 2026-02
