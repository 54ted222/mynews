---
title: 每日創業情報 — 2026-09-02
date: 2026-09-02
tags: 創業情報, AI 產業, SaaS, 台灣
summary: 週三 9/2 三事件疊加日：SEMICON Taiwan 2026 主展 T-0 開幕（南港展覽館，1,300 展商 / 4,300 攤位 / 65 國、CEO Summit 首度全日、Google Amin Vahdat 亞洲首度 keynote、NVIDIA Michael Kagan、TSMC Cliff Hou × ASE Tien Wu 共主）+ MCP 2026-07-28 spec 正式版落地 T+35（stateless core / OAuth 2.1 / MCP Apps / Tasks / Server Cards 五件套）+ Fed 9/16-17 FOMC hike odds CME 8/31 已升至 66%（Warsh + Jackson Hole 反饋）；Claude Code 9 月更新 scheduled tasks server-side + Skill / Plugin security scanning Enterprise beta；GPT-5.6 Sol $5/$30、Terra $2/$12、Luna $0.2/$1.2 vs Sonnet 5 $2/$10 三軸定價戰場成形；DDR5 32GB kit $392（YoY 3 倍）+ Q3 +13-18% QoQ 續飆；Cursor Composer 3（Vega）9/2 T-1 續延；台股 9 月 2,000 億股息 + SEMICON 展場動能同框；Anthropic S-1 進入 9 月上旬窗（6/1 confidential file、10 月 Nasdaq 目標）。
keywords: SEMICON Taiwan 2026 September 2 opening day Nangang Amin Vahdat Google keynote NVIDIA Michael Kagan Cliff Hou TSMC ASE Tien Wu CEO Summit full day 1300 exhibitors 4300 booths, MCP 2026-07-28 specification stateless core OAuth 2.1 MCP Apps Tasks Server Cards Extensions framework Model Context Protocol, Claude Code September 2026 scheduled tasks server-side Skill Plugin security scanning Enterprise beta plugin marketplace, GPT-5.6 Sol Terra Luna pricing $5 $30 $2 $12 $0.20 $1.20 vs Claude Sonnet 5 $2 $10 permanent September 1, Fed September 16 17 FOMC hike odds 66% CME FedWatch Warsh Jackson Hole razor thin split, DDR5 32GB kit $392 Q3 2026 TrendForce +13-18% QoQ memory shortage AI displacement HBM reallocation, Cursor Composer 3 Vega release delay September 2026 SpaceX Colossus training compute Fast Medium High XHigh Reasoning modes, Anthropic S-1 IPO filing October 2026 Nasdaq listing $965B valuation Goldman JPMorgan Morgan Stanley $60B raise, 台股 9月 2000億 股息 SEMICON 半導體 記憶體 CPO 先進封裝 資金卡位, TSMC A16 1.6nm Q4 2026 mass production N2P 2H26 five 2nm fabs ramp advanced packaging CoWoS SoIC, v0 Vercel Lovable Bolt 2026 September AI app builder production Next.js Supabase React, 數位發展部 經濟部 AI 應用躍昇計畫 3000萬 補助 商業服務業 10萬 生成式AI 台灣
---

# 每日創業情報 — 2026-09-02

## 🎯 今日 TL;DR

- **SEMICON Taiwan 2026 主展 T-0 開幕**（南港展覽館）：1,300 展商 / 4,300 攤位 / 65 國、CEO Summit 首度全日、Google Amin Vahdat[^amin-vahdat] 亞洲首度 keynote（09:00-09:50 Room 701AB / 邀請制）、NVIDIA CTO Michael Kagan 談 chips + accelerated computing + open models + networking + power / cooling；TSMC Cliff Hou × ASE Tien Wu 共主
- **MCP 2026-07-28 spec 正式版落地 T+35**：五件套 stateless core（無 handshake / session id / sticky routing）+ OAuth 2.1[^oauth21] + MCP Apps（sandboxed iframe HTML UI）+ Tasks Extension（server-directed 長工作）+ Server Cards（capability discovery）；10 週 validation window 內為 SDK / client 適配窗
- **Claude Code 9 月更新**：scheduled tasks server-side（無需裝置常駐）+ Skill / Plugin security scanning Enterprise beta（第三方上傳惡意內容掃描）
- **GPT-5.6 三軸定價戰場成形**：Sol $5 / $30、Terra $2 / $12、Luna $0.2 / $1.2（per M tokens）vs Sonnet 5 $2 / $10 永久（8/10 定案、9/1 起實施）；Terra 已與 Sonnet 5 進入正面重疊帶
- **Fed 9/16-17 FOMC hike odds CME 8/31 已升至 66%**（Warsh Jackson Hole 反饋 + T+2 週末 hawkish shift）；razor-thin split 進入 66-43 上緣，T-14 前僅剩勞動 / 通膨數據 tie-breaker
- **DDR5 32GB kit $392**（YoY ~3x）+ Q3 TrendForce +13-18% QoQ 續飆；shortage 為結構性 HBM reallocation[^hbm-realloc]，非短期需求，2025 pricing 回不去
- **Cursor Composer 3（Vega）9/2 T-1 續延**：8 月末 tease 未兌現、9 月上旬為新窗；SpaceX Colossus 從零訓練 10x total compute 為結構性 delay
- **台股 9 月 2,000 億股息活水 × SEMICON 展場動能同框**：資金卡位主軸「先進封裝 + 矽光子 + FOPLP + Memory Co-Design」續延；南亞科 / 華邦電 / 群聯 / 南電 / 台燿 / 景碩 6 檔為 T-0 觀察指標

## 🔄 昨日追蹤

- 🔄 **MSCI T+1 記憶體 6 檔動能印證**：9/1 已 baked in，動能延續至 T+2；南亞科 530 元天價 T+1 續觀察，若今日 SEMICON 開幕日再攻新高 = pre-load 未過度、追買動能持續至展場首日
- 🔄 **SEMICON 9/2 CEO Summit Amin Vahdat Google 亞洲首度 keynote**：今日 09:00 開場 → 中文首篇「keynote 3 分鐘摘要 + 台廠對照」的極限窗為 09:00-09:45（keynote 結束前 5 分鐘）；出手速度是關鍵
- 🔄 **Anthropic S-1 file 延期時程**：6/1 confidential file 已 T+93、8/31 file 窗未 file → 進入 9 月上旬新窗；若 9 月中之後才 file → 與 9/16-17 FOMC 疊加變數；10 月 Nasdaq 目標未變、$965B Series H valuation、$47B ARR、Goldman + JPMorgan + Morgan Stanley 領銜 $60B 募資
- 🔄 **Warsh T+4 台北反饋 + FOMC hike odds**：8/28 Jackson Hole 39.9% → 57%（8/29）→ 66%（8/31 CME）；「razor-thin split」進入 66-43 上緣，下週勞動 / 通膨數據為 tie-breaker signal；9/16-17 FOMC 前僅 T-14
- 🔄 **Cursor Composer 3（Vega）release**：8 月末 tease 落空、9/1 T+3 續延；SpaceX Colossus 從零訓練 10x total compute 為結構性延遲成因；9 月上旬新窗
- 🆕 **MCP 2026-07-28 spec 落地 T+35**：昨日未涵蓋；今日納入正文主段（見主題二）

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| SEMICON Taiwan 2026 主展 9/2-9/4 T-0 開幕（南港展覽館，1,300 展商 / 4,300 攤位 / 65 國、100,000 人）；CEO Summit 首度全日、Amin Vahdat Google 亞洲首度 keynote、NVIDIA CTO Kagan、TSMC Cliff Hou × ASE Tien Wu 共主 | [Focus Taiwan 8/30](https://focustaiwan.tw/sci-tech/202608300005)、[EE Times Asia 8](https://www.eetasia.com/semicon-taiwan-2026-debuts-first-full-day-ceo-forum-and-ecosystem-executive-summit/)、[SEMICON 官方 schedule](https://www.semicontaiwan.org/en/special-features/schedule-at-a-glance) | 6 大主題平台（先進 AI chips + 矽光子 CPO + 量子 + smart fab + 化合物半導體 / 綠色製造 + physical AI 智慧機器人 / 無人機）+ 新增 Quantum Zone / Smart Fab Zone / Chiplet Pavilion；本地 vertical 顧問窗 4 天 | 機會：中文首篇 keynote 摘要 + 台廠對照 45 分鐘極限窗（09:00 開場 → 09:45 前送出）；4 天 outbound 65 國 buyer 動能 |
| TSMC A16（1.6nm）Q4 2026 量產目標 + N2P 2H26 + 五座 2nm fab 齊放；SoIC[^cowos-soic] 導入時程縮短 ~75%、CoWoS 擴產不停 | [Tom's Hardware — TSMC roadmap 2029](https://www.tomshardware.com/tech-industry/semiconductors/tsmc-unveils-process-technology-roadmap-through-2029-a12-a13-n2u-announced-a16-slips-to-2027)、[TrendForce — TSMC N2P 2H26](https://www.trendforce.com/news/2025/10/16/news-tsmc-confirms-n2p-for-2h26-joins-a16-to-cement-2nm-class-as-major-long-lived-node/)、[Semiwiki — Cliff Hou N2](https://semiwiki.com/semiconductor-manufacturers/tsmc/368805-dr-cliff-hou-and-the-tsmc-n2-process-technology/) | 2nm 進入五 fab 齊放最激進擴張期、A16 backside power rail vs N2P 效能 +8-10% / 功耗 -15-20%；SoIC 縮 75% 對 chiplet 供應鏈是結構性利多 | 機會：先進封裝 vertical 顧問可切入 chiplet / SoIC / CoWoS 三軸；威脅：報價續漲對 fabless BOM 為續壓 |
| 台股 9 月 2,000 億元股息活水 + SEMICON 展場動能同框；資金卡位主軸「先進封裝 + 矽光子 CPO + FOPLP + Memory Co-Design」；南亞科 / 華邦電 / 群聯 / 南電 / 台燿 / 景碩 6 檔 T-0 續觀察 | [聯合 — SEMICON 9/2 登場](https://udn.com/news/story/7240/9722270)、[商周 — 記憶體概念股](https://www.businessweekly.com.tw/business/blog/3021561) | 訂閱制 / 一次性 payment SaaS 短線題材（B2C 消費傳導）；MSCI T+1 6 檔續強 = pre-load 未過度、追買動能持續 | 機會：股息活水 9 月中至 Q4 初印證窗；威脅：南亞科 530 元天價短線壓力測試、記憶體天花板效應 |
| Fed 9/16-17 FOMC hike odds CME 8/31 已升至 66%（razor-thin split 上緣）；Warsh Jackson Hole 8/28 39.9% → 57% → 66% 三跳；下週勞動 / 通膨數據為 tie-breaker signal；T-14 前 signal 敏感度極高 | [Forbes — CME FedWatch 66%](https://www.forbes.com/sites/digital-assets/2026/08/31/cme-fedwatch-provides-a-66-chance-fed-will-hike-rates-in-september/)、[KuCoin — 57%](https://www.kucoin.com/news/flash/cme-fedwatch-probability-of-fed-hiking-rates-in-september-rises-to-57) | 台灣獨立開發者跨境訂閱制定價（美元計價）對匯率 / 資金成本敏感；hike 情境 = 美元強、台幣壓；hold 情境 = 美元弱、台股續強 | 機會：hike signal 敏感度顧問 + FinOps 儀表板；威脅：跨境支付成本上升壓縮 marginal ARPU |
| 數位發展部 + 經濟部「AI 應用躍昇計畫」（單案最高 3,000 萬）+ 商業服務業 AI 導入補助（最高 10 萬 / 補助比 50%）；8 大優先產業（化工塑膠 / 金屬加工 / 半導體 / 精密機械 / 醫療照護 / 電子組裝 / 零售通路 / 農食）；生成式 AI 實驗、跨域整合為新創切點 | [經濟部 — AI 應用躍昇計畫](https://www.moea.gov.tw/Mns/populace/news/News.aspx?kind=1&menu_id=40&news_id=120600)、[moda AI 專區](https://moda.gov.tw/major-policies/ai/1781)、[長典 — 補助攻略](https://cimc.com.tw/%E3%80%902026%E6%9C%80%E6%96%B0%E6%94%BB%E7%95%A5%E3%80%91%E6%94%BF%E5%BA%9C%E8%A3%9C%E5%8A%A9ai%E5%B0%8E%E5%85%A5%E6%9C%80%E9%AB%9810%E8%90%AC%E5%85%83%E5%95%86%E6%A5%AD%E6%9C%8D%E5%8B%99%E6%A5%AD/) | 一人 SaaS 若以「協助商業服務業導入 AI」為切點，客戶端可申請補助降低採購門檻；投案能力本身為顧問服務 | 機會：申請 SOP + AI 導入 pipeline 顧問；威脅：政府採購常態化的合規門檻高、單筆 recurring 難拉 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **MCP 2026-07-28 spec RC**（正式版落地 T+35）[^mcp2026] | Agent 協定 | stateless core（無 handshake / session id / sticky routing）+ OAuth 2.1 + MCP Apps（sandboxed iframe HTML UI）+ Tasks Extension（server-directed 長工作）+ Server Cards | 開源、免費（Anthropic + Linux Foundation Agentic AI 治理） | 相對 2025 版 stateful：任何 request 可打任何 server instance（無 sticky）→ MCP server 部署完全 serverless 化；Client ID Metadata Documents 取代 Dynamic Client Registration | 立即：自寫 MCP server 應在 10 週 validation window（8-11 月）內 stateless 化；Tasks 適合長工作型（爬蟲 / batch 生成 / 資料同步）；MCP Apps 適合需要 UI 的 tool（表單 / 儀表板） |
| **Claude Code September 2026 更新** | AI IDE + 排程 | scheduled tasks server-side（無需裝置常駐）+ Skill / Plugin security scanning Enterprise beta（第三方上傳惡意內容掃描） | Pro $20 / mo（含 Sonnet 5 $2 / $10 額度）、Enterprise per seat（scanning 附加） | 相對 GitHub Copilot / Cursor：不需自建 cron 或 CI 就能排程（server-side）；Skill / Plugin 掃描為 marketplace 治理成熟訊號 | 立即：把個人 daily digest / weekly report / SEO monitor 遷移到 scheduled tasks；企業用戶可提前試 scanning beta 為第三方 plugin 建 policy |
| **GPT-5.6 Sol / Terra / Luna**（GA 7/9、降價 7/30） | 通用 LLM 三軸 | Sol（flagship）+ Terra（balanced、比 5.5 便宜 ~2x）+ Luna（fastest / cheapest）+ Sol Ultra 高強度 mode | Sol $5 / $30、Terra $2 / $12、Luna $0.2 / $1.2（per M tokens） | 相對 Sonnet 5 $2 / $10：Terra $2 / $12 已進入正面重疊帶（Terra 略貴 output）；Luna 為當前市場最便宜 flagship-tier 模型；Sol Ultra 對標 Opus 4.x | 立即：多模型 LLM Router 應把 Luna 加入 low-tier fallback（成本再砍 90%）；Terra vs Sonnet 5 走 eval 對照決策 |
| **TSMC A16 1.6nm 生態**（Q4 2026 量產目標 + N2P 2H26） | 半導體製程 | backside power rail + nanosheet transistor；vs N2P 效能 +8-10% / 功耗 -15-20% | fabless 客戶議價、非公開；報價續漲 | 相對 Intel 18A / Samsung SF2P：TSMC 五 fab 齊放為最激進擴張、良率領先訊號未變；SoIC 導入縮 ~75% 為 chiplet 供應鏈利多 | 台灣獨立開發者若做 hardware 相關 SaaS（EDA cloud、chiplet BOM 管理、fabless 供應鏈儀表板），A16 生態為 24 個月窗 |
| **v0 by Vercel / Bolt.new / Lovable**（7 月更新後）[^v0lovablebolt] | AI 應用建構 | v0：Git + Editor + DB + 一鍵部署 + Next.js API routes；Lovable：全端 React + Supabase + GitHub sync；Bolt：完整 IDE + Supabase | v0：Pro $20 / mo；Lovable：$25-100 / mo；Bolt：$20 / mo | v0 已跨過「生產可用」門檻，客戶團隊把 v0 生成 UI 直接進 prod；Lovable 為快速 MVP、Bolt 為完整 IDE | 台灣獨立開發者：POC / MVP → Lovable 或 Bolt 3 天出可 demo；上線 → v0 進 Vercel pipeline；三者今日皆為「拿來就用」等級 |
| **Cursor Composer 3（Vega）**續延 | AI IDE 核心模型 | Fast / Medium Reasoning / High Reasoning / XHigh Reasoning 四模式（leaked checkpoint 顯示） | 未公佈 | 尚未 release：8 月末 tease → 9/1 T+3 → 9/2 T+4 續延；SpaceX Colossus 從零訓練 10x total compute 為結構性延遲；不建議為未發布模型改工作流 | 觀察：9 月上旬為新窗；當前工作流以 Sonnet 5 / GPT-5.6 Terra 為主，Composer 3 release 後再 eval |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：SEMICON Taiwan 2026 中文首篇 keynote 45 分鐘極限窗 SOP × 4 天現場 vertical 顧問 × Amin Vahdat / Kagan / Cliff Hou / Tien Wu 4 keynote map 🆕🔥

- **痛點來源**：SEMICON 主展 9/2-9/4，Amin Vahdat 09:00 開場、NVIDIA Kagan、TSMC Cliff Hou × ASE Tien Wu 共主的 CEO Summit 首度全日；6 大主題平台（AI chip + 矽光子 CPO + 量子 + smart fab + 化合物 / 綠色 + physical AI）+ 3 新 zone（Quantum / Smart Fab / Chiplet Pavilion）4 天量爆表；中文 timely 摘要為稀缺
- **目標客群（台灣／亞洲）**：本地半導體投資人 / SaaS founder / 產業分析師 / 65 國 buyer；訂閱制 NT$ 1,500-4,500 / mo（4 天現場包 NT$ 12,000）
- **技術複雜度**：3/5（現場拍照 + Claude Code + Whisper transcribe + Sonnet 5 摘要 + 靜態站部署）
- **預估 MRR**：NT$ 60K-180K（4 天現場包爆量、9 月 SaaS 訂閱轉單）
- **競品弱點**：Focus Taiwan / 聯合 / 商周慢 24 小時、多為中文抄英文；45 分鐘極限窗 = 09:00-09:45 送出首篇為關鍵
- **切入建議**：今日 T-0 立即開跑；4 keynote 每場預留 5 分鐘結構 template（重點 3 條 + 台廠對照 5 檔 + 產業影響 2 段）；4 天 outbound 收 email + 9 月 SaaS conversion

### 點子 2：MCP 2026-07-28 spec 落地 T+35 stateless 遷移顧問 × OAuth 2.1 / MCP Apps / Tasks / Server Cards 五件套 audit × 10 週 validation window SOP 🆕🔥

- **痛點來源**：MCP 2026-07-28 spec 正式版 T+35，五件套（stateless core + OAuth 2.1 + MCP Apps + Tasks + Server Cards）；stateless 化讓 MCP server 完全 serverless 部署，OAuth 2.1 對 SaaS 合規為結構性升級；10 週 validation window（7/28-10/6）為 SDK / client 適配關鍵窗
- **目標客群（台灣／亞洲）**：MCP server 開發團隊、自建 agent SaaS、企業內 MCP registry 部署團隊；per project NT$ 80K-300K（stateless 遷移 audit + OAuth 2.1 對接）
- **技術複雜度**：4/5（MCP protocol 熟稔 + OAuth 2.1 iss validation / RFC 9207 + serverless 部署 + Tasks extension server-side 排程 + MCP Apps sandboxed iframe UI）
- **預估 MRR**：NT$ 120K-400K（企業 audit 一次性 + 半年續約維運）
- **競品弱點**：多數 MCP guide 仍為 2025 stateful 版本；stateless 遷移 SOP + OAuth 2.1 中文 audit 為稀缺
- **切入建議**：先為 3-5 個自建 MCP server 做遷移 case study + tech blog；9 月上旬前 outbound 台廠 AI infra 團隊（Trend Micro / 玉山金 / 台哥大 AI）

### 點子 3：GPT-5.6 三軸（Sol / Terra / Luna）× Sonnet 5 $2/$10 永久 × 多模型 LLM Router 定價戰場儀表板 × Terra vs Sonnet 5 eval 對照 SOP 🆕🔥

- **痛點來源**：GPT-5.6 三軸定價（Sol $5/$30、Terra $2/$12、Luna $0.2/$1.2）+ Sonnet 5 $2/$10 永久（9/1 起實施）→ Terra 與 Sonnet 5 進入正面重疊帶、Luna 為最便宜 flagship-tier；多模型 router（OpenRouter / Portkey / LiteLLM）成本優化為 2026 Q4 主軸
- **目標客群（台灣／亞洲）**：LLM 應用開發團隊、AI SaaS、企業 AI 導入專案；per tenant NT$ 3K-15K / mo（router + FinOps 儀表板）
- **技術複雜度**：3/5（router SDK + eval framework Braintrust / Langfuse + FinOps dashboard + 三軸 fallback tree）
- **預估 MRR**：NT$ 60K-240K（20-40 個 tenant）
- **競品弱點**：多數 router 為英文介面、中文 eval report 稀缺；台灣客戶對「成本 -30% 但品質不掉」有具體驗收標準
- **切入建議**：先為自家 3 個場景（客服 QA / 內容生成 / 程式碼摘要）建 Terra vs Sonnet 5 eval baseline；tech blog 公開 recall / precision / cost 三軸表；接 20-40 tenant

### 點子 4：Claude Code September 2026 scheduled tasks server-side × Skill / Plugin security scanning 治理顧問 × 台灣 SaaS 全端遷移 SOP 🆕🔥

- **痛點來源**：Claude Code 9 月新增 scheduled tasks server-side（無需裝置常駐）+ Skill / Plugin security scanning Enterprise beta；對「一人 SaaS + 每日自動化」為結構性利多，也讓企業導入 Claude Code 的第三方 plugin 治理成為新需求
- **目標客群（台灣／亞洲）**：一人 SaaS founder、企業 AI 導入專案（Enterprise plan）、內容創業 / newsletter operator；per project NT$ 40K-200K
- **技術複雜度**：3/5（Claude Code CLI + scheduled task migration + Skill / Plugin policy + 第三方掃描介接）
- **預估 MRR**：NT$ 40K-160K（一人 SaaS 遷移一次性 + 企業每月 scanning policy 維運）
- **競品弱點**：多數 scheduled task 教學仍圍繞 cron / GitHub Actions；server-side scheduled tasks + skill scanning 為 9 月新落地功能，中文文檔真空
- **切入建議**：先把自家 daily brief / SEO monitor / competitor scan 遷移到 scheduled tasks，寫 case study；outbound 5-10 家 Enterprise 客戶做 skill scanning policy pilot

## 🧰 工具堆疊更新

- **MCP 2026-07-28 spec RC** 正式版 T+35；stateless core + OAuth 2.1 + MCP Apps + Tasks + Server Cards 五件套；10 週 validation window（7/28-10/6）為 SDK / client 適配窗；自寫 MCP server 建議 9 月內完成 stateless 化
- **Claude Code September 2026 更新**：scheduled tasks server-side + Skill / Plugin security scanning Enterprise beta；把個人自動化任務從 cron / GitHub Actions 遷移為新選項
- **GPT-5.6 三軸**（Sol $5/$30、Terra $2/$12、Luna $0.2/$1.2）+ **Sonnet 5 $2/$10 永久**（9/1 起）：多模型 router 應把 Luna 加入 low-tier fallback、Terra vs Sonnet 5 走 eval 對照；三軸並存為 Q4 主軸
- **v0 / Lovable / Bolt 7 月更新後**：v0 生產可用線已跨過、Lovable 適合 MVP、Bolt 適合完整 IDE；台灣獨立開發者三者為「拿來就用」等級
- **Cursor Composer 3（Vega）續延** T-1：不建議為未發布模型改工作流；當前以 Sonnet 5 / GPT-5.6 Terra 為主
- **DDR5 32GB kit $392**（YoY ~3x）+ Q3 +13-18% QoQ：硬體採購續延；雲端 fallback 為短線選項

## ⚡ 今日行動建議

- [ ] **09:00-09:45 SEMICON Amin Vahdat keynote 45 分鐘極限窗**：現場 / 直播雙軌，Whisper transcribe + Sonnet 5 摘要 + 台廠對照 5 檔 + 產業影響 2 段；09:45 前送出中文首篇（成本：現場 NT$ 5K / 遠端零、產出：SEO 流量 + email lead）
- [ ] **開始 MCP 2026-07-28 stateless 遷移 audit**：先 audit 自家 3 個 MCP server（今日 4 小時），列出 stateless 化 checklist + OAuth 2.1 iss validation + Client ID Metadata Documents 遷移；成本：4 小時、產出：case study + outbound 材料
- [ ] **建立 Terra vs Sonnet 5 eval baseline**：3 場景（客服 QA / 內容生成 / 程式碼摘要）× 50 sample × Braintrust；成本：2 小時 + LLM cost < NT$ 200；產出：中文 eval report tech blog、客戶 outbound 材料
- [ ] **把 daily brief 遷移到 Claude Code scheduled tasks server-side**：測試 no-device-required 排程；成本：1 小時、產出：架構升級 + tech blog 素材
- [ ] **9 月股息 2,000 億 × SEMICON 展場動能 dashboard**：南亞科 / 華邦電 / 群聯 / 南電 / 台燿 / 景碩 6 檔 T-0 收盤追蹤（下午 13:35 集合競價）+ 展場現場 vertical 顧問 4 天窗；成本：1 小時、產出：中文 timely 分析

## ⏳ 待觀察

- **SEMICON T-0 Amin Vahdat / Kagan / Cliff Hou / Tien Wu 4 keynote 內容**：今日 09:00 開場、CEO Summit 首度全日；中文首篇 45 分鐘極限窗（09:00-09:45）為 T+0 執行敏感度指標
- **MCP 2026-07-28 spec 10 週 validation window**：7/28-10/6 為 SDK / client 適配關鍵窗；Anthropic / MCP working group release timeline 對照官方 GitHub / blog；stateless 化採用率 signal 於 Q4 出現
- **Fed 9/16-17 FOMC hike odds 續動**：CME 8/31 66% → 下週勞動 / 通膨數據 tie-breaker；9/16-17 FOMC 前 T-14；hike / hold 情境對 fabless BOM / 訂閱制 SaaS 定價敏感
- **Anthropic S-1 file 9 月上旬窗**：6/1 confidential file → 8/31 file 窗未 file → 9 月上旬新窗；若延至 9 月中 → 與 FOMC 疊加；$965B Series H valuation、$47B ARR、Nasdaq 10 月目標
- **Cursor Composer 3（Vega）release**：9/2 T-1 續延；9 月上旬為新窗；SpaceX Colossus 10x compute 為結構性延遲；不建議為未發布模型改工作流
- **DDR5 32GB kit $392 + Q3 +13-18% QoQ**：Q3 續飆、shortage 為結構性 HBM reallocation；台廠南亞科 / 華邦電 / 群聯 5 檔為觀察指標；Apacer CEO 2027 中 vs SK Hynix 2027 essentially sold out
- **GPT-5.6 Sol Ultra 高強度 mode 定價 + rate limit**：對比 Sonnet 5 xhigh reasoning 的極限 case eval 為 Q4 焦點
- **台股 9 月 2,000 億股息活水 × SEMICON 展場動能同框**：資金卡位主軸「先進封裝 + 矽光子 + FOPLP + Memory Co-Design」延續；印證窗 9 月中至 Q4 初
- **經濟部 AI 應用躍昇計畫 + 商業服務業補助執行率**：8 大優先產業（含半導體 / 醫療 / 零售）9 月申請動能為新創切點指標

[^amin-vahdat]: Google Cloud SVP & Chief Technologist for AI & Infrastructure，長年主導 Google 資料中心網路（Jupiter、Andromeda）與 TPU、光交換等 AI 超級電腦基建，是 hyperscaler 這一側對台廠先進製程、矽光子與 HBM 供應鏈拍板的關鍵決策者之一。2026 SEMICON Taiwan 亞洲首度公開 keynote，被視為 Google 對台供應鏈策略對齊的公開訊號。

[^oauth21]: OAuth 2.1 為 IETF 對 OAuth 2.0 十餘年實作經驗的整合升級版，強制推行安全預設（PKCE 必用、implicit / password grant 廢除、redirect_uri 完全匹配），並於 MCP 2026-07-28 spec 中新增 iss validation（RFC 9207）、client credentials 綁定發行者、以 Client ID Metadata Documents 取代 Dynamic Client Registration。對 SaaS 與 AI agent 平台為結構性合規升級。

[^mcp2026]: MCP（Model Context Protocol）2026-07-28 spec 為 Anthropic 與 MCP working group 5/21 公佈的 release candidate，7/28 正式落地，是 2024 年 11 月首發以來最大改版。核心變動為 stateless core（無 handshake / session id / sticky routing、任何 request 可打任何 server instance）；並新增 OAuth 2.1 authorization hardening、MCP Apps（tools 可 ship 互動式 HTML UI 於 sandboxed iframe）、Tasks Extension（server-directed 長工作 handle）、Server Cards（capability discovery via .well-known）。10 週 validation window 為 SDK / client 適配窗。

[^v0lovablebolt]: 三家 2026 AI 應用建構主流工具：**v0**（Vercel）走純前端起家、7 月更新後生產可用線跨過、與 Next.js / Vercel 生態深度整合；**Lovable** 全端 React + Supabase + GitHub sync、以 MVP 快速上線為訴求；**Bolt.new** 完整 IDE + Supabase 後端、直接可改 code。三者定價皆為 $20-100 / mo 級。台灣獨立開發者常見 stack：POC → Lovable 或 Bolt 3 天出 demo → 上線遷移 v0 進 Vercel pipeline。

[^hbm-realloc]: HBM（High Bandwidth Memory）為堆疊式 DRAM，供 AI 加速器高頻寬存取。「reallocation」指原本產一般 DDR5 的晶圓與封裝產能被 HBM 訂單優先卡位，使一般 DRAM 供給結構性減少；2026-2027 三大廠 HBM 產能多已被 NVIDIA、AMD 綁定，屬長期定價轉軌而非短期缺貨，即使 AI 需求驟降，短期內產能也難回頭轉回一般記憶體。

[^cowos-soic]: CoWoS（Chip-on-Wafer-on-Substrate）為 TSMC 的 2.5D 先進封裝技術，將 GPU 晶片與 HBM 堆疊放到矽中介層上，是 NVIDIA H100 / B200 系列的關鍵封裝方案。SoIC（System on Integrated Chips）為 3D 混合鍵合技術，晶粒可直接堆疊、無需微凸塊，密度與功耗優於 CoWoS，主要用於 AMD MI300 與後續 chiplet 旗艦，是 TSMC 先進封裝的下一波成長引擎。

## 📚 引用來源

1. [Focus Taiwan — SEMICON Taiwan 2026: What to watch](https://focustaiwan.tw/sci-tech/202608300005) — 2026-08-30
2. [EE Times Asia — SEMICON Taiwan 2026 Debuts First Full-day CEO Forum and Ecosystem Executive Summit](https://www.eetasia.com/semicon-taiwan-2026-debuts-first-full-day-ceo-forum-and-ecosystem-executive-summit/) — 2026-08
3. [SEMICON Taiwan — Schedule-at-a-Glance](https://www.semicontaiwan.org/en/special-features/schedule-at-a-glance) — 2026-08
4. [SEMICON Taiwan — Opening Ceremony](https://www.semicontaiwan.org/en/special-features/opening-ceremony) — 2026-08
5. [Yahoo Finance — SEMICON Taiwan 2026 Global Stage](https://finance.yahoo.com/technology/articles/semicon-taiwan-2026-serve-global-030000754.html) — 2026-08
6. [Focus Taiwan — SEMICON Taiwan 2026 forum full-day format](https://focustaiwan.tw/sci-tech/202608150006) — 2026-08-15
7. [Taipei Times — Semicon Taiwan to be a whole-day event for first time](https://www.taipeitimes.com/News/taiwan/archives/2026/08/16/2003862578) — 2026-08-16
8. [Model Context Protocol Blog — 2026-07-28 Release Candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/) — 2026-07-28
9. [Equixly — Stateless MCP: 2026-07-28 security](https://equixly.com/blog/2026/08/05/stateless-mcp/) — 2026-08-05
10. [NashTech — MCP 2026-07 Stateless Core, Tasks, Serverless Deployments](https://blog.nashtechglobal.com/new-mcp-2026-07-28-stateless-core-brings-mcp-closer-to-internet-scale-infrastructure/) — 2026-07
11. [Anthropic — Introducing Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5) — 2026-06-30
12. [Cosmic JS — Claude Sonnet 5 Benchmarks Pricing](https://www.cosmicjs.com/blog/claude-sonnet-5-benchmarks-pricing-developers) — 2026-08
13. [Enterprise DNA — Claude Sonnet 5 Pricing Permanent Reversal](https://enterprisedna.co/resources/news/anthropic-claude-sonnet-5-pricing-permanent-reversal-august-2026/) — 2026-08
14. [Tech Journal — Claude Sonnet 5 Pricing Now Permanent](https://techjournal.org/claude-sonnet-5-pricing-now-permanent) — 2026-08
15. [Karo Zieminski — Claude Guide 2026: Cowork, Code, Design, Skills](https://karozieminski.substack.com/p/claude-guides-code-cowork-skills-workflows) — 2026-08
16. [Releasebot — Claude Code Updates August 2026](https://releasebot.io/updates/anthropic/claude-code) — 2026-08
17. [OpenAI — Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/) — 2026-04-23
18. [eesel AI — GPT-5.6 pricing Sol Terra Luna](https://www.eesel.ai/blog/gpt-5-6-pricing) — 2026-07
19. [Vellum — GPT-5.6 Sol vs Terra vs Luna](https://www.vellum.ai/blog/gpt-5-6-sol-terra-luna-explained) — 2026-07
20. [Eden AI — GPT-5.6 Sol Benchmarks Pricing API Access](https://www.edenai.co/post/gpt-5-6-sol-benchmarks-pricing-api-access-guide) — 2026-07
21. [Forbes — CME FedWatch 66% Fed Rate Hike September](https://www.forbes.com/sites/digital-assets/2026/08/31/cme-fedwatch-provides-a-66-chance-fed-will-hike-rates-in-september/) — 2026-08-31
22. [KuCoin — CME FedWatch Fed Rate 57% September](https://www.kucoin.com/news/flash/cme-fedwatch-probability-of-fed-hiking-rates-in-september-rises-to-57) — 2026-08
23. [CNBC — Sept Fed decision coin flip rate hike odds](https://www.cnbc.com/2026/08/07/odds-the-fed-hikes-in-september-tumble-following-big-july-jobs-miss.html) — 2026-08-07
24. [Anthropic — confidentially submits draft S-1 to SEC](https://www.anthropic.com/news/confidential-draft-s1-sec) — 2026-06-01
25. [CNBC — Anthropic confidentially files IPO prospectus](https://www.cnbc.com/2026/06/01/anthropic-ipo-s1-prospectus.html) — 2026-06-01
26. [Yahoo Finance — Anthropic Files Confidential S-1 $3T AI IPO Race](https://finance.yahoo.com/markets/stocks/articles/anthropic-files-confidential-1-joins-161008569.html) — 2026-06
27. [Tom's Hardware — TSMC roadmap through 2029 A12 A13 N2U A16](https://www.tomshardware.com/tech-industry/semiconductors/tsmc-unveils-process-technology-roadmap-through-2029-a12-a13-n2u-announced-a16-slips-to-2027) — 2026-08
28. [TrendForce — TSMC N2P 2H26 A16 2nm-class](https://www.trendforce.com/news/2025/10/16/news-tsmc-confirms-n2p-for-2h26-joins-a16-to-cement-2nm-class-as-major-long-lived-node/) — 2025-10-16
29. [Semiwiki — Dr. Cliff Hou TSMC N2 Process](https://semiwiki.com/semiconductor-manufacturers/tsmc/368805-dr-cliff-hou-and-the-tsmc-n2-process-technology/) — 2026-08
30. [Igor's Lab — TrendForce DRAM NAND Q3 2026](https://www.igorslab.de/en/dram-and-nand-remain-more-expensive-trendforce-sees-slowing-but-still-rising-memory-prices-q3-2026/) — 2026-08
31. [Tech Insider — DDR5 RAM Prices Up 110% AI](https://tech-insider.org/ddr5-ram-prices-2026/) — 2026-08
32. [聯合新聞網 — SEMICON 9/2 登場 聚焦 3 大主軸](https://udn.com/news/story/7240/9722270) — 2026-08
33. [商業周刊 — 2026 記憶體概念股](https://www.businessweekly.com.tw/business/blog/3021561) — 2026-08
34. [經濟部 — AI 應用躍昇計畫](https://www.moea.gov.tw/Mns/populace/news/News.aspx?kind=1&menu_id=40&news_id=120600) — 2026
35. [moda — AI 專區重點政策](https://moda.gov.tw/major-policies/ai/1781) — 2026
36. [長典 — 2026 政府補助 AI 導入 10 萬元商業服務業](https://cimc.com.tw/%E3%80%902026%E6%9C%80%E6%96%B0%E6%94%BB%E7%95%A5%E3%80%91%E6%94%BF%E5%BA%9C%E8%A3%9C%E5%8A%A9ai%E5%B0%8E%E5%85%A5%E6%9C%80%E9%AB%9810%E8%90%AC%E5%85%83%E5%95%86%E6%A5%AD%E6%9C%8D%E5%8B%99%E6%A5%AD/) — 2026
37. [Times Of AI — Cursor Composer 3 Vega leak](https://x.com/TimesOfAI_/status/2079438176717029770) — 2026-07
38. [Memeburn — Cursor Composer 3 Leaks Vega](https://memeburn.com/cursor-composer-3-leaks-what-we-know/) — 2026-07
39. [ToolJet — Lovable vs Bolt vs V0 2026](https://blog.tooljet.com/lovable-vs-bolt-vs-v0/) — 2026
40. [Make an App Like — Vercel v0 2026 Production Ready](https://makeanapplike.com/news/launches/vercel-v0-production-ready-2026) — 2026
