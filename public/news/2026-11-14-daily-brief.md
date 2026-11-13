---
title: 每日創業情報 — 2026-11-14
date: 2026-11-14
tags: 創業情報, AI 產業, SaaS, 台灣
summary: Anthropic IPO book T+4 Bloomberg 口徑「六倍 oversubscribed」具體倍數首次出現 + $90.4B total raise 口徑收斂 + pricing 11/18 earliest T-4 + 金管會 11/3 預告虛擬資產服務法 9 項子法 + 40 日公告期 ~12/13 截止 + 穩定幣 3 億資本 12 個月過渡期 + Supabase 收購 Turso + $150M GIC 對台灣 indie DB 選型重大節點 + Cursor Composer 2.5 BYOK bug 具體化 + OpenAI Agent Builder EOL T-16 Thanksgiving 前剩 12 天 + iPhone Duo Day 23 週末第一日 + 中小微條例 T+46 排審窗口第六日結束。
keywords: Anthropic IPO book six times oversubscribed Bloomberg 90.4 billion November 14 2026 pricing November 18, Anthropic IPO above range pricing demand retail allocation 20 percent SpaceX record, 金管會 虛擬資產服務法 9 項子法 2026-11-03 預告 40 日公告期 穩定幣 3 億資本 12 個月過渡期, 虛擬資產服務法 洗錢防制 金融機構 證期局 黃仲豪 2027 Q1 施行, Supabase acquires Turso 150M GIC October 2026 SQLite edge indie SaaS database 選型, Cursor Composer 2.5 BYOK bug This model does not support custom API keys forum 162152, OpenAI Agent Builder EOL T-16 November 30 Thanksgiving 12 days migration ChatKit workflow, MCP Registry 53541 servers 2026-10-31 vs 30375 unique 9 月口徑 註冊處戰爭, 立法院 中小微企業 1000 億 轉型條例 T+46 排審窗口第六日 11 月 通過機率, 數發部 100 億 AI T+41 11 月無 pipeline 刷新 SBIR 2026-01 替代, iPhone Duo Day 23 Week 4 Day 1 週末第一日 台灣雙 11 新機降 NT$2000 傑昇回收, Vercel AI SDK 7.0.143 HarnessAgent experimental canary 10 harness adapters 自 6/25 GA 後無 7.1.x minor release T+142
---

# 每日創業情報 — 2026-11-14

## 🎯 今日 TL;DR

- **🆕 Anthropic IPO book T+4 Bloomberg 口徑「六倍 oversubscribed」具體倍數首次出現 + Pymnts 口徑 total raise $90.4B（IPO ~$64B + 私募 $26B）+ pricing 11/18 earliest T-4 + 交易 11/19 + 分析師「pricing at or above $78 top of range」預測升高 + Anthropic 承銷商 retail allocation ~20% 目標**：11/13 brief「book T+3 oversubscribed」為定性口徑；11/14 Bloomberg 口徑「六倍」為首個具體倍數、機構需求強過 SpaceX；對台灣 Claude 大客戶：六倍機構超額認購 + 承銷商考慮上調定價區間 → 上市後 Claude Pro / Teams / Enterprise 定價壓力由「中性—短期可能上升」升級至「中期機率升高」；對台灣投資散戶：retail allocation ~20% 為新口徑、但「在 US-only 發行條件下、台灣散戶幾乎無直接管道」為限制訊號；pricing day T-4 → S-1/A3 若 11/15–11/17 間補發上調定價區間 → 「$70–78 → $85–90」情境具體化
- **🆕 金管會 11/3 預告虛擬資產服務法 9 項子法 + 40 日公告期 ~12/13 截止 + 穩定幣 3 億資本 + 12 個月過渡期 + 洗錢防制金融機構範疇 + 2027Q1 母子法同步施行**：金管會證期局副局長黃仲豪 2026-10-29 宣示；11/3 預告具體 9 項：證期局主管 8 項 VASP 管理法規（市場准入、人員管理、內控稽核、財務報告、公會自律、異常交易管理等）+ 銀行局主管穩定幣發行許可管理辦法及洗錢防制相關修正；穩定幣限銀行 / 金控 / 銀行轉投資子公司發行、非銀行發行人資本額最低 NT$3 億、幣別限新台幣 + 單一外幣、準備資產總值不低於流通餘額；新法實施後給予業者 12 個月申請過渡期；11/13 brief 僅寫「九項子法 2027Q1」，11/14 補完 11/3 預告具體時程 + 公告期 + 穩定幣規範；對台灣 AI × crypto SaaS 創業規劃：12/13 公告期結束 → 2027Q1 母子法同步施行 → 12 個月申請過渡期 → 2028Q1 截止申請、法遵窗口明確化
- **🆕 Supabase 2026-10-03 完成 $150M GIC 領投輪 + 收購 Turso[^turso]（條件未披露）+ 估值 $10.5B + Neon 2025-05 已被 Databricks 收購 + pgvector[^pgvector] 續為預設 + Convex[^convex] 2026 funding 無新披露**：三強 Supabase / Neon / Turso 實際收斂為 Supabase（+ Turso Edge SQLite 能力）vs Neon（Databricks 子公司）vs Convex（獨立）；對台灣 solo dev DB 選型：11/13 brief 的 "Supabase 替代者 Neon / Turso / Convex 三強之爭" prepared topic 需修正、實際為「Supabase 收購 Turso 完成 Postgres + SQLite 雙棧整合」 + 「Neon 已不是中立選項」+「Convex 成為唯一未被收購替代者」；對台灣 B2B SaaS indie：Supabase Turso 收購 → Edge SQLite 低延遲能力進入 Supabase 堆疊 → 全球 CDN-level 資料庫可選門檻降低
- **🆕 MCP Registry 10/31 口徑 53,541 servers（vs 9 月口徑 30,375 unique / 99,114 records）+ 增長 76% 1 個月內 + 官方 Registry 仍為 preview + Smithery 10/31 proxy 下線已 14 日 + 註冊處戰爭格局**：10/31 口徑為 glama.ai 公開；MCP Harbor 為新 aggregator（6 小時 auto-sync）；PulseMCP 暫停新 submission + listing 變更；對台灣獨立開發者：9 月 → 10 月 1 個月內增長 76% → MCP server 生態熱度續行、但「註冊處戰爭 + Smithery / PulseMCP 動盪 → 單一 directory 不可靠、需多地同步登記」成本上升；對 MCP server 創業者：10/31 53K+ server 池內「垂直領域 + 高品質」仍為稀缺、純 wrapper 類 server 續向 commodity 收斂
- **🆕 Cursor Composer 2.5 BYOK bug 具體化（forum 帖 162152 / 163374 / 164176）— 「This model does not support custom API keys」錯誤續行 + Composer 2.5、Spark、Grok 4.5 均受影響 + Cursor forum staff 稱為「intended behavior」 + Auto mode 唯一正常運作 + workaround 為關 BYOK toggle**：11/13 brief 僅寫「Composer 2.5 nerfed 投訴」+「BYOK Chat / Agent 續行」；11/14 具體化為「BYOK 啟用時 Composer 2.5 等 Cursor 自家模型完全無法使用」+「Cursor 架構將 BYOK key attach 到除 Claude / Gemini 外所有模型」；對仍重度綁 GPT-5.6 Sol 的 solo dev：OpenAI × Cursor cutoff T+2 後、BYOK 切換 + Composer 2.5 並行使用遇到架構性限制、需 toggle 切換手動管理；對 Cursor 選型：Composer 2.5 + BYOK 並行 = 必踩坑、Cursor 架構根本未支援
- **🔄 OpenAI Agent Builder EOL T-16（11/14 → 11/30）— Thanksgiving 11/26 前美國窗口剩 12 天 + 48h 無新 migration tooling + ChatKit[^chatkit] workflow 是否續存為尚未解答的核心疑慮 + Agents SDK export 續為 scaffold + Evals read-only Day +14 連續倒數**：OpenAI 官方 migration guide 僅為 export 流程：Agent Builder 內 Code → Agents SDK → TS/Python → 複製貼上；「workflow 透過 ChatKit 嵌入是否 11/30 後續跑」為 ChatKit sessions depend on workflow ID 的核心疑慮、OpenAI 官方未明確回應；對 solo dev：Thanksgiving 前 12 天為美國市場最後有效遷移窗口、ChatKit 嵌入用戶的最後決斷窗口
- **🔄 Vercel AI SDK 7.0.143（10 月口徑）+ HarnessAgent[^harness] experimental canary + 10 harness adapters + tool search + toolCallConcurrency + streamRetries + WebSocket chat + Cline adapter + 自 6/25 GA 後無 7.1.x minor release（T+142）**：AI SDK 7 本體 2026-06-25 GA、HarnessAgent 續為 canary；10 個 harness adapters 支援 Claude Code / Codex / Pi / Deep Agents / OpenCode / Cline 等互換；10/x 到 11/14 無新 minor 版本（breaking change 預期續行）；對「TS Agent 底層 2 強」對決格局（AI SDK 7 vs Claude Agent SDK）續有壓力
- **🔄 iPhone Duo Day 23 Week 4 Day 1（11/14 週六）— 週末 48h 首日 + 完成第一個完整工作週 vs 週末 48h 首次完整差額曲線觀察起點 + 傑昇回收報價「2026 年 11 月最新」標題（1TB NT$72,700 / 2TB NT$89,260）為最新權威中文口徑 + 傑昇 10 月整體回收量 +53% MoM 但主流機型回收價普遍回落（量增價跌）+ 中國炒家虧損普遍續行**：Day 23 為 Week 4 Day 1 週末第一日；工作週 5 日（Day 18–22）vs 週末 48h（Day 23–24）首次完整差額曲線觀察起點；台灣 11 月第 2 週末尚無二手行情中文媒體具體報導 → 新鮮度極高續行
- **🔄 立法院中小微企業 1,000 億轉型條例 T+46（11/14 週六）+ 本週（11/10–11/14）排審窗口第六日結束 + 下週（11/17–11/21）為第二個觀察週 + 立院公開議程 2026-07/08 後無更新 + 11 月通過機率極低 + 本週無排審 → 下週觀察窗流失到 12 月機率超過 80%**：本週為立院排審第六日最後一日、無媒體新進度；T+46 仍無進展訊號；R&D 抵減率 20% / 轉型設備投資抵減門檻 25 萬 / 171.6 萬家受惠為既定 soundbite
- **🔄 數發部 100 億 AI T+41（11/14 週六）— 8 月底累計口徑 10 家 / NT$2.55 億 / 民間帶動 NT$5.7 億 + 境外公司放寬 3 條件續行 + 36 家搭配投資人續行 + 11 月無 pipeline 刷新 + SBIR 2026-01 起上限調高為替代路徑**：11 月無新 pipeline 公告、第三方口徑最新仍為 CNA 10/04；SBIR 自 2026-01-01 起調高上限（先期研究 150 萬、研究開發 1,200 萬、加值應用 600 萬）+ 無人載具 / AI 智慧應用 / 淨零 三大核心、對 solo dev 為替代路徑續行

## 🔄 昨日追蹤

- **🆕 Anthropic book T+3 → T+4 具體倍數首次出現**：11/13 brief 「Day 1 covered + multiple times oversubscribed」為定性；11/14 Bloomberg 口徑「六倍」為首個具體倍數；機構需求強過同期 SpaceX 續行；Pymnts 口徑 total raise $90.4B（IPO + 私募）為新口徑
- **🆕 金管會 虛擬資產服務法 9 項子法 2026-11-03 預告具體化 + 40 日公告期 ~12/13 截止**：11/13 brief 僅寫「九項子法 2027Q1」；11/14 補完 11/3 預告 + 40 日公告期 + 穩定幣 3 億資本 + 12 個月過渡期細節
- **🆕 Supabase 2026-10-03 完成 $150M GIC + 收購 Turso**：前 3 日 brief 皆未提及；對「Supabase 替代者 Neon / Turso / Convex 三強之爭」prepared topic 需修正
- **🆕 Cursor Composer 2.5 BYOK bug 具體化**：11/13 brief 僅寫「Composer 2.5 nerfed 投訴」；11/14 具體化為 forum 帖 162152 的「BYOK key active 時 Composer 2.5 blocked」
- **🆕 MCP Registry 10/31 口徑 53,541 servers**：前 3 日 brief 持 9 月 30,375 unique / 99,114 records 口徑；10/31 數字為 glama.ai 公開新口徑、1 個月 +76%
- **🔄 OpenAI Agent Builder EOL T-17 → T-16**：Thanksgiving 前 13 → 12 天；Evals read-only Day +13 → +14
- **🔄 iPhone Duo Day 22 → Day 23**：Week 3 Day 15 → Week 4 Day 1；工作週 5 日完整樣本結束 → 週末 48h 首日
- **🔄 立法院中小微企業 T+45 → T+46**：排審窗口第五日 → 第六日結束；本週結束後觀察窗流失到 12 月
- **🔄 數發部 100 億 AI T+40 → T+41**：11 月無 pipeline 刷新
- **🔄 OpenAI × Cursor cutoff T+1 → T+2（11/14 週六）**：Cursor 是否在 T+2 內公告退場補救方案；OpenAI / Cursor 無新公告續行

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🆕 金管會 11/3 預告虛擬資產服務法 9 項子法 + 40 日公告期 ~12/13 截止 + 穩定幣 3 億資本 + 12 個月過渡期 + 洗錢防制金融機構範疇 + 2027Q1 母子法同步施行 + 母法 2026-06-30 三讀通過[^vasp] + 彭金隆口徑「取決於立院審查進度」**：證期局主管 8 項 VASP 管理法規（市場准入、人員管理、內控稽核、財務報告、公會自律、異常交易管理等）+ 銀行局主管穩定幣發行許可管理辦法 + 洗錢防制相關修正；穩定幣限銀行 / 金控 / 銀行轉投資子公司發行、非銀行發行人資本額最低 NT$3 億、幣別限新台幣 + 單一外幣、準備資產總值不低於流通餘額 | [uanalyze — 金管會預告 9 項子法草案](https://uanalyze.com.tw/articles/7237258297)、[storm.mg — 虛擬資產專法還有 9 子法 最快明年 Q1 實施](https://www.storm.mg/article/11145947)、[CNA — 金管會推動虛擬資產服務法 研擬 8 子法](https://www.cna.com.tw/news/afe/202510290312.aspx) | 對台灣 AI × crypto SaaS 創業規劃：12/13 公告期結束 → 2027Q1 母子法同步施行 → 12 個月申請過渡期 → 2028Q1 截止申請、法遵窗口明確化；對台灣 solo dev 考慮穩定幣相關 SaaS：資本門檻 NT$3 億 + 幣別限制 + 洗錢防制 → 「單純 solo dev 參與穩定幣發行」實務不可行、但「穩定幣應用層 SaaS」（支付整合、錢包、合規工具）窗口打開 | 機會：「金管會 11/3 預告 9 項子法 + 40 日公告期 ~12/13 截止 + solo dev 可切入的穩定幣應用層 SaaS idea cluster + 支付整合 / 錢包 / 合規 copilot scorecard」深度文；T+30 12/13 公告期結束倒數聯動；威脅：12 個月申請過渡期 → 2028Q1 截止 → 若法遵資源不足、solo dev 不宜在過渡期後 push；資本門檻高、無「法遵套件 SaaS」利基、需專精 B2B 法遵導向 |
| **🆕 Supabase 2026-10-03 $150M GIC 領投輪 + 收購 Turso（條件未披露）+ 估值 $10.5B + Neon 2025-05 已被 Databricks 收購 + pgvector 續為預設 + Convex 2026 funding 無新披露 + 三強格局實際為 Supabase（+ Turso Edge SQLite）vs Neon（Databricks 子）vs Convex（獨立）**：前 3 日 brief 皆未提及、11/14 首次納入；對台灣 indie DB 選型重大節點 | [verdict.co.uk — Supabase Raises $150M Buys Turso](https://fourweekmba.com/ai-supabase-150m-gic-turso-acquisition-terms-undisclosed/)、[dev.to — Turso vs Neon vs Supabase 2026](https://dev.to/devtoolpicks/turso-vs-neon-vs-supabase-for-indie-hackers-in-2026-1519)、[implicator.ai — Supabase Doubles to 10.5B](https://www.implicator.ai/supabase-doubles-to-10-5-billion-as-agents-deploy-most-of-its-databases) | 對台灣 B2B SaaS indie：Supabase Turso 收購 → Edge SQLite 低延遲能力進入 Supabase 堆疊 → 全球 CDN-level 資料庫可選門檻降低；對仍在 pgvector / Neon 選型猶豫的 solo dev：Neon 為 Databricks 子公司已非中立選項、Supabase 整合度續強、Convex 為唯一未被收購替代者 | 機會：「Supabase 收購 Turso + $150M GIC + Neon Databricks 子公司 + Convex 獨立 三強格局修正 + 台灣 indie B2B SaaS DB 選型 2026Q4 scorecard + pgvector vs Turso Edge SQLite benchmark」深度文；T+90 2027Q1 Supabase + Turso 整合初版關注；威脅：收購條件未披露 → Turso 現有用戶定價 / API 延續性不確定；pgvector 大型索引效能相對專用 vector DB 仍有差距、不宜 scale 到 10M+ embeddings |
| **🔄 立法院中小微企業 1,000 億轉型條例 T+46 + 本週（11/10–11/14）排審窗口第六日結束 + 下週（11/17–11/21）為第二個觀察週 + 立院公開議程 2026-07/08 後無更新 + 11 月通過機率極低 + 本週結束後觀察窗流失到 12 月機率超過 80% + 171.6 萬家受惠為既定 soundbite**：R&D 抵減率 20% / 轉型設備投資抵減門檻 25 萬 soundbite 續行；T+46 仍無進展訊號；本週排審窗口第六日無媒體新進度 | [CNA — 政院修法投入千億助中小微企業升級](https://cna.com.tw/news/aipl/202610080165.aspx)、[iThome — 中小微企業轉型升級發展條例修正草案](https://www.ithome.com.tw/news/179523)、[立法院議事紀錄](https://www.ly.gov.tw/pages/MeetingList.aspx?nodeid=135) | 若法案通過，R&D 抵減率自約 15% 提高至 20%、轉型設備投資抵減門檻自產業創新條例 100 萬降至 25 萬；本週為立院排審第六日最後一日、無媒體新進度 → 11 月通過機率續低、下週觀察窗可能流失到 12 月 | 機會：「11/14 立法院新會期第 6 週第六日結束 + 中小微條例觀察窗流失到 12 月預測 + 25 萬門檻對 solo dev 轉型升級套利分析 + 下週（11/17–11/21）第二個觀察窗情境」深度文；威脅：送審至三讀期程 3–12 個月、11 月通過機率續低、本週末後排審窗口流失到 12 月機率超過 80% |
| **🔄 iPhone Duo Day 23 Week 4 Day 1 週末 48h 首日 + 完成第一個完整工作週 vs 週末 48h 首次完整差額曲線觀察起點 + 傑昇回收報價「2026 年 11 月最新」標題為最新權威中文口徑 + 傑昇 10 月整體回收量 +53% MoM 但主流機型回收價普遍回落（量增價跌）+ 中國炒家虧損普遍續行 + 台灣 11 月第 2 週末尚無二手行情中文媒體具體報導**：傑昇 1TB NT$72,700 / 2TB NT$89,260；台灣起售價 NT$74,900；通路雙 11 新機降 NT$2,000；中國起售價 RMB 15,999、發貨排至 2027/01；台灣 11 月第 2 週末二手行情中文媒體仍空白 | [傑昇 iPhone Duo 回收價表](https://www.jyes.com.tw/recycle/Apple-iPhone-Duo)、[傑昇手機回收總覽](https://www.jyes.com.tw/recycle.php?act=list&cid=90)、[CNA — iPhone Duo 中國市場熱銷 發貨排至明年](https://www.cna.com.tw/news/acn/202610170102.aspx) | 對台灣 solo dev 創業敘事：iPhone Duo 二手行情中文媒體仍空白、新鮮度極高續行；可做「Day 23 週末第一日 vs 工作週 5 日完整樣本首次完整差額曲線 + 傑昇 10 月量增價跌 MoM 結構拆解」原創觀察 | 機會：「Day 23 週末第一日 vs 工作週 5 日完整樣本首次完整差額曲線 + 傑昇 10 月回收量 +53% 但主流機型回收價回落 MoM 結構拆解 + 台灣新機 vs 二手 vs 回收 三線對照」深度文；威脅：台灣二手行情中文媒體具體報導仍空白、需實地查訪 Yahoo 拍賣 / 蝦皮 / 露天成交紀錄 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🆕 Anthropic IPO book T+4 Bloomberg 口徑「六倍 oversubscribed」具體倍數首次出現 + Pymnts $90.4B total raise + pricing 11/18 earliest T-4 + 分析師「pricing at or above $78」預測升高 + retail allocation ~20%** | AI 模型供應商 / IPO 定價錨點 | 對台灣 Claude 大客戶：六倍機構超額認購 + 承銷商考慮上調 → 上市後 Claude Pro / Teams / Enterprise 定價壓力由「中性—短期可能上升」升級至「中期機率升高」；對台灣投資散戶：retail allocation ~20% 為新口徑、但「在 US-only 發行條件下、台灣散戶幾乎無直接管道」為限制訊號；pricing day T-4 → S-1/A3 若 11/15–11/17 間補發上調定價區間 → 「$70–78 → $85–90」情境具體化 | Anthropic 定價 $70–78 × 825M 股 + greenshoe 123.75M 股；私募配售 $26B（Nvidia / Google 各 $10B at IPO price） | vs 11/13 brief 口徑「multiple times oversubscribed」：11/14 Bloomberg「六倍」為首個具體倍數、口徑收斂；vs 2025-11 Nvidia $10B 承諾：是否重複待釐清；vs IBTimes「$100B haul / $2T valuation」口徑：該源為少數高估、不宜放大 | 🟢 一人 SaaS Claude 用戶：繼續用、短期 Claude 定價壓力中性偏升；🟡 投資標的評估：11/18 pricing + 11/19 首日交易觀察；🟡 台灣散戶：retail allocation ~20% 但 US-only 發行、台灣券商複委託管道有限；🔴 Composer 2.5 BYOK bug 已具體化 → 續行 Cursor 用戶需注意 Cursor 架構限制 |
| **🆕 Supabase 2026-10-03 $150M GIC 領投輪 + 收購 Turso（條件未披露）+ 估值 $10.5B + Neon 2025-05 已被 Databricks 收購 + pgvector 續為預設 + Convex 2026 funding 無新披露** | DBaaS / Edge SQLite / vector DB | 對台灣 indie DB 選型重大節點：Supabase（+ Turso Edge SQLite）vs Neon（Databricks 子）vs Convex（獨立）；對仍在 pgvector / Neon 選型猶豫的 solo dev：Neon 為 Databricks 子公司已非中立選項、Supabase 整合度續強、Convex 為唯一未被收購替代者 | Supabase Pro $25/mo；Turso 標準 $4.99/mo（Scaler $29/mo）；Neon 使用量計費自 2026-01；Convex Pro ~$25/seat × 5 + usage | vs Neon（Databricks 子）：Neon 2025-05 收購後、中立性 question mark 續行；vs Convex（獨立）：Convex 反應式架構 + TypeScript end-to-end 續為 TS indie 主流；vs PlanetScale：MySQL 棧為主、與 JS 生態整合度中等 | 🟢 TS solo dev 新專案：Supabase + Turso（Edge SQLite 低延遲）為新主流；🟡 Neon 用戶：評估 Databricks 子公司路徑是否影響長期採用；🟢 Convex 用戶：維持現狀、獨立性為加分；🟡 pgvector 大型索引：10M+ embeddings 時考慮 Turbopuffer / Qdrant |
| **🆕 Cursor Composer 2.5 BYOK bug 具體化 — forum 帖 162152 / 163374 / 164176「This model does not support custom API keys」錯誤續行 + Composer 2.5 / Spark / Grok 4.5 均受影響 + Cursor forum staff 稱為「intended behavior」 + Auto mode 唯一正常 + workaround 關 BYOK toggle** | AI coding / BYOK 架構限制 | 11/13 brief 僅寫「Composer 2.5 nerfed 投訴」+「BYOK Chat / Agent 續行」；11/14 具體化為「BYOK 啟用時 Composer 2.5 等 Cursor 自家模型完全無法使用」+「Cursor 架構將 BYOK key attach 到除 Claude / Gemini 外所有模型」；對仍重度綁 GPT-5.6 Sol 的 solo dev：OpenAI × Cursor cutoff T+2 後、BYOK 切換 + Composer 2.5 並行使用遇到架構性限制 | Cursor Plus $8 / Premium $30 / Super $100 / Ultra $200；BYOK 按 vendor API 標準價 | vs 完整走 Claude Code CLI：無 BYOK 架構衝突；vs Codex CLI + ChatGPT Pro：仍有 OpenAI 模型直連但無 Cursor 編輯器體驗；vs OpenRouter 第三方中繼：延遲與定價不穩 | 🔴 重度依賴 Composer 2.5 + OpenAI BYOK：架構根本未支援、需手動 toggle 切換、工作流被打斷；🟡 只用 Claude Opus 5.5：Claude 模型不受 BYOK 影響、不受此 bug 衝擊；🟢 全走 Claude Code CLI：無影響；🔴 想併用 Grok 4.5：同受此架構 bug 影響 |
| **🆕 MCP Registry 10/31 口徑 53,541 servers + 1 個月 +76%（vs 9 月 30,375 unique）+ 官方 Registry preview 標記 + Smithery 10/31 proxy 下線已 14 日 + MCP Harbor 6 小時 auto-sync + PulseMCP 暫停新 submission** | MCP infrastructure / 註冊處戰爭 | 對台灣獨立開發者：9 月 → 10 月 1 個月內增長 76% → MCP server 生態熱度續行、但「註冊處戰爭 + Smithery / PulseMCP 動盪 → 單一 directory 不可靠、需多地同步登記」成本上升；對 MCP server 創業者：10/31 53K+ server 池內「垂直領域 + 高品質」仍為稀缺、純 wrapper 類 server 續向 commodity 收斂 | 官方 Registry 免費；MCP Harbor 免費 aggregator；mcpservers.org 免費；Arcade.dev 使用者端免費 | vs 9 月口徑 30,375 unique / 99,114 records：10/31 53,541 servers 為單一來源公開數字、口徑是否可比待釐清；vs Arcade ToolBench 43,400+ / 219,069 工具：Arcade 自家口徑續持保留 | 🟢 新 MCP server 上架：官方 Registry + MCP Harbor + mcpservers.org 三地同步登記為 2026Q4 建議基線；🔴 現用 Smithery 團隊：T+14 Day +14 退款到帳三次檢查；🟡 現在 PulseMCP：submission 暫停、改用其他 directory；🟡 自建 MCP server 作為 SaaS 差異化點：commodity 化壓力升高 |
| **🔄 OpenAI Agent Builder EOL T-16（11/14 → 11/30）— Thanksgiving 前 12 天 + ChatKit workflow 是否續存為核心疑慮 + Agents SDK export 續為 scaffold + Evals read-only Day +14** | AI agent / T-16 最後 16 天 / 遷移爭議 | Agent Builder 用戶：工程師 production → Agents SDK（TS / Python），非工程師可編輯 → ChatGPT Workspace Agents；ChatKit sessions depend on workflow ID → 「workflow 透過 ChatKit 嵌入是否 11/30 後續跑」為核心疑慮、OpenAI 未明確回應；Evals 用戶：匯出 dataset + Promptfoo[^promptfoo] YAML 轉換 | Promptfoo 開源 MIT；Langfuse[^langfuse] 社群版免費 / Pro $59/mo；ChatKit 保留不計 | vs ChatKit（embeddable chat UI 保留）：workflow ID 嵌入是否續跑未決；Agents SDK 選「engineer-owned workflow」、Workspace Agents 選「non-engineer editable automation」；Evals 遷移目標 Promptfoo + Langfuse 混搭 | 🔴 Agent Builder 用戶：T-16 Thanksgiving 前 12 天、建議 rebuild in Agents SDK；🔴 ChatKit 嵌入用戶：11/14 為決斷窗口、若 workflow ID 綁定 → 11/30 後可能 break；🟡 Evals 用戶：若尚未匯出 dataset，Thanksgiving（11/26）前補完 |
| **🔄 Vercel AI SDK 7.0.143（10 月口徑）+ HarnessAgent experimental canary + 10 harness adapters（含新 Cline）+ tool search + toolCallConcurrency + streamRetries + WebSocket chat + 自 6/25 GA 後無 7.1.x minor release（T+142）** | AI agent / TS 底層 | TS solo dev agent 底層選型：AI SDK 7 本體 GA（2026-06-25）、HarnessAgent 續為 canary；10 個 harness adapters 支援 Claude Code / Codex / Pi / Deep Agents / OpenCode / Cline 等互換；10/x 到 11/14 無新 minor 版本（breaking change 預期續行） | AI SDK 7 開源免費；HarnessAgent 續為 experimental canary、breaking change 預期續行 | vs Claude Agent SDK 1.1（TS/Python）：Claude SDK 深度整合 Claude Code 2.1 Skills + subagent nesting；vs OpenAI Agents SDK：OpenAI 綁 Agents Builder 下線倒數、長期可信度不穩 | 🟡 TS 已用 AI SDK 7：HarnessAgent 續為 canary、不宜主線上 production；🟢 TS 新專案：優先走 Claude Agent SDK、HarnessAgent 作為互換層觀察；🔴 重度依賴 AI SDK 7 agent primitives：關注 HarnessAgent GA 確認時程 |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：金管會 11/3 預告虛擬資產服務法 9 項子法 + 40 日公告期 ~12/13 截止 + solo dev 可切入的穩定幣應用層 SaaS idea cluster 🆕

- **痛點來源**：金管會 11/3 預告 9 項子法 + 40 日公告期 ~12/13 截止 + 穩定幣限銀行 / 金控 / 銀行轉投資子公司發行、非銀行發行人資本額最低 NT$3 億 + 12 個月申請過渡期；中文技術媒體對「9 項子法 11/3 預告具體時程 + 公告期 + solo dev 可切入的穩定幣應用層 SaaS idea cluster」完全空白；「支付整合 / 錢包 / 合規 copilot」中文 solo dev 可參照案例近零
- **目標客群（台灣／亞洲）**：想做穩定幣應用層 SaaS 的台灣 solo dev（估 300–800 位）+ 關注 VASP 法遵風險的 fintech 創業者（估 500–1,500 位）+ 關注穩定幣整合的中小商家 IT（估 300–800 家）+ 關注 AI × crypto SaaS 合規風險的技術決策者（估 200–500 位）
- **技術複雜度**：3/5 — 內容型 + 1–2 小時應用層 SaaS 原型；關鍵為「9 項子法逐條拆解 + 穩定幣應用層 SaaS idea cluster（支付整合、錢包、合規 copilot、洗錢防制 KYC 加值）+ 2027Q1 母子法同步施行 + 12 個月過渡期 + 2028Q1 截止申請時程 + 11/13 brief FinLLM vertical LLM 聯動」
- **預估 MRR**：one-off NT$100K–280K per 深度文；訂閱「每週台灣 fintech AI × crypto 法遵週報」NT$500/mo × 200 用戶 ≈ NT$100K MRR；可 upsell 「穩定幣應用層 SaaS idea cluster + 合規 copilot scaffold + VASP 法遵 playbook」Gumroad NT$2,500 × 50 份 ≈ NT$125K one-off
- **競品弱點**：中文技術媒體對「9 項子法 11/3 預告具體時程拆解 + solo dev 可切入的應用層 SaaS idea cluster」完全空白；大型技術媒體不會做「單人 VASP 法遵 SaaS idea cluster」拆解；「穩定幣應用層 SaaS」中文 solo dev 可參照案例近零
- **切入建議**：11/14 寫「金管會 11/3 預告 9 項子法 + 40 日公告期 ~12/13 截止 + solo dev 可切入的穩定幣應用層 SaaS idea cluster + 支付整合 / 錢包 / 合規 copilot scorecard + 11/13 brief FinLLM vertical LLM 聯動」 → 11/21 「穩定幣應用層 SaaS MVP scaffold 實測」 → 12/13 公告期結束倒數「9 項子法最終版本拆解」 → 2027Q1 「母子法同步施行觀察 + 申請過渡期開始」

### 點子 2：Supabase 收購 Turso + $150M GIC 對台灣 indie B2B SaaS DB 選型 2026Q4 scorecard + pgvector vs Turso Edge SQLite benchmark 🆕

- **痛點來源**：Supabase 2026-10-03 完成 $150M GIC 領投輪 + 收購 Turso（條件未披露）+ 估值 $10.5B + Neon 2025-05 已被 Databricks 收購 + Convex 2026 funding 無新披露 → Supabase（+ Turso Edge SQLite）vs Neon（Databricks 子）vs Convex（獨立）實際格局修正；中文技術媒體對「2026Q4 indie DB 選型 scorecard」完全空白；pgvector vs Turso Edge SQLite benchmark 中文完全空白
- **目標客群（台灣／亞洲）**：想做 B2B SaaS 的台灣 TS solo dev（估 1,500–3,500 位）+ 關注 pgvector 選型的 AI SaaS 創業者（估 500–1,500 位）+ 關注 Edge SQLite 低延遲的中型團隊（估 200–500 家）+ 關注 DBaaS 中立性風險的技術決策者（估 500–1,500 位）
- **技術複雜度**：3/5 — 內容型 + 2–3 小時 pgvector vs Turso Edge SQLite benchmark；關鍵為「Supabase 收購 Turso 具體條件推測 + $150M GIC 估值 $10.5B 拆解 + Neon Databricks 子公司中立性 question mark + Convex 獨立優勢 + pgvector vs Turso Edge SQLite benchmark 實測」
- **預估 MRR**：one-off NT$120K–320K per 深度文；訂閱「每週 TS indie DB 選型週報」NT$400/mo × 300 用戶 ≈ NT$120K MRR；可 upsell 「DBaaS 選型 2026Q4 scorecard + pgvector vs Turso benchmark 腳本」Gumroad NT$2,000 × 60 份 ≈ NT$120K one-off
- **競品弱點**：中文技術媒體從未做過「Supabase 收購 Turso + $150M GIC + Neon Databricks 子 + Convex 獨立 三強格局修正 + pgvector vs Turso Edge SQLite benchmark」組合；大型技術媒體不會做「單人 DBaaS 中立性風險試算」拆解；中文對「Turso 用戶定價 / API 延續性」完全空白
- **切入建議**：11/14 寫「Supabase 收購 Turso + $150M GIC + Neon Databricks 子 + Convex 獨立 + pgvector vs Turso Edge SQLite benchmark + 2026Q4 indie B2B SaaS DB 選型 scorecard」 → 11/21 「Turso 用戶定價 / API 延續性 1 週深度追蹤」 → 12/15 「Supabase + Turso 整合初版路徑預測」 → 2027Q1 「Supabase + Turso 整合實測」

### 點子 3：Cursor Composer 2.5 BYOK bug 具體化 + Cursor 架構限制 + OpenAI × Cursor cutoff T+2 後 BYOK 並行工作流實測深度文 🆕

- **痛點來源**：Cursor forum 帖 162152 / 163374 / 164176「This model does not support custom API keys」錯誤續行 + Composer 2.5 / Spark / Grok 4.5 均受影響 + Cursor forum staff 稱為「intended behavior」 + Auto mode 唯一正常；中文技術媒體對「BYOK + Composer 2.5 並行架構限制具體化 + workaround 實測」完全空白
- **目標客群（台灣／亞洲）**：仍以 Cursor 為主的台灣 solo dev（估 2,000–5,000 位）+ 考慮 BYOK + Composer 2.5 並行的 solo dev（估 500–1,500 位）+ 關注 Cursor 架構限制的技術 blogger / YouTuber（估 300–800 位）+ 考慮完全移出 Cursor 的 solo dev（估 500–1,500 位）
- **技術複雜度**：3/5 — 內容型 + 2–3 小時 BYOK + Composer 2.5 並行工作流實測；關鍵為「forum 帖 162152 / 163374 / 164176 具體錯誤訊息拆解 + Cursor 架構將 BYOK key attach 到除 Claude / Gemini 外所有模型的原理 + Auto mode 唯一正常運作原因 + workaround（關 BYOK toggle）實測踩坑 + Claude Code CLI / Codex CLI / OpenRouter 替代路徑對比」
- **預估 MRR**：one-off NT$100K–280K per 深度文；訂閱「每週 AI coding 選型週報」NT$300/mo × 500 用戶 ≈ NT$150K MRR；可 upsell 「Cursor 架構限制 playbook + BYOK + Composer 2.5 並行 workaround 腳本」Gumroad NT$1,800 × 60 份 ≈ NT$108K one-off
- **競品弱點**：中文技術媒體對「BYOK + Composer 2.5 並行架構限制具體化」完全空白；大型技術媒體不會做「單人工作流 Cursor 架構限制踩坑實測」拆解；小型技術 blog 不會追 Cursor forum 162152 / 163374 / 164176 跨帖整合

- **切入建議**：11/14 寫「Cursor forum 帖 162152 / 163374 / 164176 BYOK bug 具體化 + Cursor 架構限制原理 + OpenAI × Cursor cutoff T+2 後 BYOK + Composer 2.5 並行工作流實測 + Claude Code CLI / Codex CLI 替代路徑對比」 → 11/21 「Cursor 架構限制 1 週使用者回饋」 → 11/26 Thanksgiving 前使用者回饋收尾 → 12/01 「完全移出 Cursor 的 solo dev 工作流報告」

### 點子 4：Anthropic IPO book T+4「六倍 oversubscribed」具體倍數 + pricing 11/18 earliest T-4 + retail allocation ~20% + 台灣散戶 US-only 發行條件限制深度文 🔄

- **痛點來源**：11/14 Bloomberg 口徑「六倍 oversubscribed」為首個具體倍數（11/13 brief「multiple times / Day 1 covered」為定性）+ Pymnts $90.4B total raise + pricing 11/18 earliest T-4 + 分析師「pricing at or above $78」預測升高 + retail allocation ~20%；中文技術媒體對「六倍具體倍數 + retail allocation 20% + 台灣散戶 US-only 發行限制」完全空白
- **目標客群（台灣／亞洲）**：關注 Anthropic 估值的台灣投資散戶（估 15,000–40,000 位）+ 關注 Claude 訂閱定價預期的 solo dev + indie（估 3,000–6,000 位）+ 關注 US-only 發行條件 + 複委託管道的台灣投資者（估 5,000–15,000 位）+ 關注 AI 模型供應商估值的技術決策者（估 1,000–3,000 位）
- **技術複雜度**：2/5 — 內容型 + 1 小時「六倍具體倍數 + pricing 11/18 T-4 情境分支」拆解；關鍵為「Bloomberg 六倍具體倍數 vs 11/13 brief 定性口徑收斂拆解 + Pymnts $90.4B total raise vs IBTimes $100B / $2T 口徑對照 + pricing 11/18 T-4 + retail allocation ~20% + 台灣散戶 US-only 發行條件限制 + 複委託管道評估」
- **預估 MRR**：one-off NT$80K–240K per 深度文；訂閱「每週 AI 模型供應商估值週報」NT$300/mo × 400 用戶 ≈ NT$120K MRR；可 upsell 「Anthropic IPO 六倍具體倍數 + pricing 11/18 T-4 情境分支模型」Gumroad NT$1,500 × 80 份 ≈ NT$120K one-off
- **競品弱點**：中文技術媒體對「Bloomberg 六倍具體倍數 + retail allocation 20% + 台灣散戶 US-only 發行限制 + 複委託管道評估」完全空白；大型技術媒體不會做「單人投資標的評估」拆解；小型技術 blog 不會追 Pymnts / Bloomberg / IBTimes 多源口徑對照
- **切入建議**：11/14 寫「Anthropic IPO book T+4 Bloomberg『六倍 oversubscribed』具體倍數 + Pymnts $90.4B total raise + pricing 11/18 earliest T-4 + retail allocation ~20% + 台灣散戶 US-only 發行條件限制」 → 11/18 pricing day Live blog → 11/19 首日交易情境命中分析 → 11/26 Thanksgiving 前使用者回饋收尾

## 🧰 工具堆疊更新

- **🆕 Anthropic IPO book T+4 Bloomberg「六倍 oversubscribed」具體倍數 + Pymnts $90.4B total raise + pricing 11/18 earliest T-4 + retail allocation ~20%**：11/13「multiple times / Day 1 covered」為定性口徑；11/14 Bloomberg「六倍」為首個具體倍數；對台灣 Claude 大客戶：中期定價壓力由「中性—短期可能上升」升級至「中期機率升高」
- **🆕 金管會 11/3 預告虛擬資產服務法 9 項子法 + 40 日公告期 ~12/13 截止 + 穩定幣 3 億資本 + 12 個月過渡期 + 2027Q1 母子法同步施行**：證期局 8 項 + 銀行局穩定幣發行許可管理辦法 + 洗錢防制相關修正；對台灣 AI × crypto SaaS 創業規劃為年度最大法遵訊號具體化
- **🆕 Supabase 2026-10-03 $150M GIC + 收購 Turso（條件未披露）+ 估值 $10.5B + Neon Databricks 子公司 + Convex 獨立**：對台灣 indie B2B SaaS DB 選型重大節點；pgvector 續為預設、Turso Edge SQLite 進入 Supabase 堆疊
- **🆕 Cursor Composer 2.5 BYOK bug 具體化（forum 帖 162152 / 163374 / 164176）**：「This model does not support custom API keys」錯誤續行 + Composer 2.5 / Spark / Grok 4.5 均受影響 + Cursor forum staff 稱為「intended behavior」 + Auto mode 唯一正常
- **🆕 MCP Registry 10/31 口徑 53,541 servers（vs 9 月 30,375 unique / 99,114 records）+ 1 個月 +76% + 官方 Registry preview + Smithery proxy 下線已 14 日 + MCP Harbor 6 小時 auto-sync + PulseMCP 暫停新 submission**：對台灣獨立開發者：單一 directory 不可靠、需多地同步登記
- **🔄 OpenAI Agent Builder EOL T-16 migration guide 明示「不保證完整遷移」+ ChatKit workflow ID 嵌入 11/30 後續存疑慮**：OpenAI 官方 migration guide 僅為 export 流程；ChatKit sessions depend on workflow ID → 「workflow 透過 ChatKit 嵌入是否 11/30 後續跑」為核心疑慮；Agents SDK vs Workspace Agents 雙路分化續行；Evals 11/30 全下線倒數 Day +14
- **🔄 Vercel AI SDK 7.0.143 + HarnessAgent experimental canary + 10 harness adapters（含 Cline）+ 自 6/25 GA 後無 7.1.x minor release（T+142）**：10 個 harness adapters 支援 Claude Code / Codex / Pi / Deep Agents / OpenCode / Cline 互換；breaking change 預期續行；對「TS Agent 底層 2 強」對決格局續有壓力
- **🔄 Claude Code 2.1.217 subagent concurrency / nesting caps + 2.1.212 session limits + 2.1.211 MCP tools re-sync + 2.1.157 plugins auto-load**：CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS + CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH 新增；對 fork subagents 預設 on + nested depth 限制為新治理面向

## ⚡ 今日行動建議

- [ ] **金管會 11/3 預告 9 項子法 + 40 日公告期 ~12/13 截止 + solo dev 可切入的穩定幣應用層 SaaS idea cluster 深度文**：9 項子法逐條拆解 + 穩定幣應用層 SaaS idea cluster（支付整合、錢包、合規 copilot、洗錢防制 KYC 加值）+ 2027Q1 母子法同步施行 + 12 個月過渡期 + 11/13 brief FinLLM vertical LLM 聯動（成本：3–4 小時；產出：長文 blog + 穩定幣應用層 SaaS idea cluster scorecard + 12/13 公告期結束倒數大綱）
- [ ] **Supabase 收購 Turso + $150M GIC + Neon Databricks 子 + Convex 獨立 三強格局修正 + 台灣 indie B2B SaaS DB 選型 2026Q4 scorecard + pgvector vs Turso Edge SQLite benchmark 深度文**：收購條件推測 + 估值 $10.5B 拆解 + Neon 中立性 question mark + pgvector vs Turso Edge SQLite benchmark 實測（成本：3–4 小時；產出：長文 blog + 2026Q4 DB 選型 scorecard + pgvector vs Turso benchmark 腳本）
- [ ] **Cursor Composer 2.5 BYOK bug 具體化 + Cursor 架構限制 + OpenAI × Cursor cutoff T+2 後 BYOK 並行工作流實測深度文**：forum 帖 162152 / 163374 / 164176 具體錯誤訊息拆解 + Cursor 架構將 BYOK key attach 到除 Claude / Gemini 外所有模型原理 + Auto mode 唯一正常運作原因 + workaround 實測（成本：2–3 小時；產出：長文 blog + workaround 腳本 + 替代路徑對比表）
- [ ] **Anthropic IPO book T+4「六倍 oversubscribed」具體倍數 + Pymnts $90.4B total + pricing 11/18 earliest T-4 + retail allocation ~20% + 台灣散戶 US-only 發行限制深度文**：Bloomberg 六倍具體倍數 vs 11/13 定性口徑收斂 + Pymnts vs IBTimes 口徑對照 + 台灣散戶複委託管道評估（成本：2 小時；產出：長文 blog + 情境分支模型表 + 11/18 pricing day 續行大綱）
- [ ] **iPhone Duo Day 23 週末 48h 首日 vs 工作週 5 日完整樣本首次完整差額曲線 + 傑昇 10 月量增價跌 MoM 結構拆解深度文**：Day 23 週末第一日切片 + 傑昇 10 月整體回收量 +53% MoM 但主流機型回收價回落 + 台灣新機 vs 二手 vs 回收 三線對照 + 中國炒家虧損原因（成本：2 小時；產出：長文 blog + 工作週 vs 週末差額曲線 CSV + 三線對照表）

## ⏳ 待觀察

- **Anthropic pricing day 11/18（T-4）+ 首日交易 11/19**：book T+4 Bloomberg「六倍 oversubscribed」+ 分析師「pricing at or above $78」預測升高 → 11/18 pricing above range 情境機率顯著升高；首日交易情境分支 A（11/19 開盤 + pricing above range）vs B（11/19 開盤 + 不上調）vs C（延後至 Thanksgiving 前）
- **Anthropic S-1/A3 上調定價區間揭露**：若 11/15–11/17 間補發上調定價區間 →「$70–78 → $85–90」情境具體化；Bloomberg「六倍」具體倍數若無修正 → 上調機率續升
- **金管會 11/3 預告 40 日公告期 ~12/13 截止**：中小企業 / solo dev 意見書窗口 ~12/13 前；是否有 solo dev 聯盟集體發函反映過渡期短、資本門檻高
- **Supabase + Turso 整合初版路徑**：10/03 公告後 11/14 已 T+42；Supabase 是否 11 月底 / 12 月補發整合技術細節；Turso 現有用戶定價 / API 延續性
- **Cursor BYOK bug 修復進度**：Cursor forum staff 稱「intended behavior」 → 11/14 為 OpenAI × Cursor cutoff T+2；Cursor 是否補發 BYOK + Composer 2.5 並行 workaround
- **OpenAI × Cursor cutoff T+3（11/15 週日）**：11/15 週日無交易；OpenAI / Cursor 無新公告續行；Composer 2.5 nerfed 投訴跨週變化
- **OpenAI Agent Builder EOL T-15（11/15 週日）**：是否補發 workflow graph export 工具；ChatKit workflow ID 嵌入疑慮是否 OpenAI 明確回應；Thanksgiving 前美國窗口剩 11 天
- **MCP Registry 10/31 → 11 月底口徑**：10/31 53,541 servers + 1 個月 +76% → 11 月底是否破 70K；官方 Registry preview 標記何時移除；MCP Harbor 與官方 Registry 競爭格局
- **iPhone Duo Day 24 Week 4 Day 2（11/15 週日）**：週末 48h 第二日；可做「工作週 5 日 vs 週末 48h 首次完整差額曲線」初版
- **立法院中小微企業轉型條例 T+47（11/15 週日 → 下週 11/17–11/21 第二個觀察窗）**：本週末後觀察窗流失到 12 月機率超過 80%；下週（11/17–11/21）為第二個觀察窗
- **數發部 100 億 AI T+42（11/15 週日）**：8 月底 10 家 / NT$2.55 億後 Q4 pipeline 是否公布；SBIR 2026-01 起上限調高為替代路徑
- **Vercel AI SDK 7 HarnessAgent GA**：自 6/25 experimental canary 已滿 T+142；若 11 月 GA 將改變「TS Agent 底層 2 強」對決格局；官方文件仍標記 experimental canary

[^vasp]: 虛擬資產服務法（VASP Act），2026-06-30 立法院三讀通過、7/22 公布的台灣加密資產專法，母法確立交易所、託管、新幣發行等活動的許可制；具體規範由證期局主管 8 項子法與銀行局主管穩定幣發行許可管理辦法共 9 項子法補完，預計 2027Q1 與母法同步施行、新業者享 12 個月申請過渡期。

[^promptfoo]: MIT License 開源的 LLM 評估框架，以 YAML 設定測試案例與 assertions 可對多模型做回歸測試與對照；常被用作閉源 Evals 平台的 self-host 替代選擇，適合預算與資料外洩考量兼顧的小團隊。

[^langfuse]: 開源的 LLM observability 平台，提供 trace、prompt 管理、評估與用量成本追蹤；社群版可自架免費、雲端 Pro 方案約 $59/mo，常與 Promptfoo 混搭以補齊「評估 + 觀測」兩個面向。

[^turso]: 以 libSQL（SQLite fork）為底的 Edge 資料庫服務，主打多區域 read replica 與低延遲，開源 CLI 可本地跑；2026 年 10 月被 Supabase 收購、後續承諾維持獨立 API 與定價，為 Edge SQLite 代表產品。

[^pgvector]: PostgreSQL 的向量相似度檢索擴充套件，支援 L2、cosine、inner product 距離與 HNSW／IVFFlat 索引，常見於 RAG 與語意搜尋；Supabase、Neon 等 managed Postgres 皆已內建預設。

[^convex]: TypeScript-first 的反應式後端平台，整合即時資料庫、server functions、檔案儲存與 cron，前端訂閱的查詢會自動同步更新；在 Supabase、Neon 相繼被併購後，為目前唯一獨立的同類替代者。

[^chatkit]: OpenAI 提供的可嵌入聊天 UI 元件庫，session 以 Agent Builder 建立的 workflow ID 綁定；Agent Builder 11/30 下線後，此 ID 綁定能否續跑為 11 月遷移討論的核心疑慮。

[^harness]: Vercel AI SDK 7 的實驗性 agent 包裝層，把 Claude Code、Codex、OpenCode、Cline 等外部 CLI 以統一介面抽象成 harness adapter，彼此可互換；仍標為 experimental canary，breaking change 預期續行。

## 📚 引用來源

1. [investinglive — Anthropic IPO oversubscribed several times ahead of record $90 billion listing](https://investinglive.com/stocks/anthropic-ipo-oversubscribed-several-times-ahead-of-record-90-billion-listing/) — 2026-11
2. [investinglive — Anthropic IPO six times oversubscribed](https://investinglive.com/stocks/anthropic-ipo-six-times-oversubscribed-what-retail-investors-can-realistically-expect/) — 2026-11
3. [aiera — Anthropic IPO Oversubscribed Six Times the Shares](https://aiera.blog/anthropic-ipo-oversubscribed/) — 2026-11
4. [Morningstar — Anthropic We See Stock as Undervalued in IPO Pricing Range](https://www.morningstar.com/stocks/anthropic-we-see-stock-undervalued-ipo-pricing-range) — 2026-11
5. [pomegra — Anthropic IPO ANT 6x Oversubscribed Pricing Above Range](https://pomegra.io/news/anthropic-ipo-ant-6x-oversubscribed-pricing-above-range) — 2026-11
6. [cryptobriefing — Anthropic IPO reportedly oversubscribed as demand may push valuation past](https://cryptobriefing.com/anthropic-ipo-reportedly-oversubscribed-as-demand-may-push-valuation-past/) — 2026-11
7. [investinglive — Anthropic lines up $26 billion from Nvidia Google others as IPO priced at $70 to $80](https://investinglive.com/stocks/anthropic-lines-up-26-billion-from-nvidia-google-others-as-ipo-priced-at-70-to-80/) — 2026-11
8. [SEC EDGAR — Anthropic S-1/A Amendment 2026-11-10](https://www.sec.gov/Archives/edgar/data/0002130357/000162828026072484/anthropicpbc-sx1ax2.htm) — 2026-11-10
9. [Renaissance Capital — Anthropic sets terms for $61B IPO targeting a $1.2T market cap](https://www.renaissancecapital.com/IPO-Center/News/122657/anthropic-sets-terms-for-61-billion-ipo-targeting-a-1.2-trillion-market-cap) — 2026-11
10. [uanalyze — 金管會預告虛擬資產服務法 9 項子法草案](https://uanalyze.com.tw/articles/7237258297) — 2026-11
11. [storm.mg — 虛擬資產專法還有 9 子法 最快明年 Q1 實施](https://www.storm.mg/article/11145947) — 2026-11
12. [CNA — 金管會推動虛擬資產服務法 研擬 8 子法](https://www.cna.com.tw/news/afe/202510290312.aspx) — 2026-10-29
13. [grenade.tw — 台灣穩定幣發行辦法草案出爐](https://grenade.tw/blog/taiwan-stablecoin-issuance-rules/) — 2026-11
14. [fourweekmba — Supabase Raises $150M Buys Turso Terms Undisclosed](https://fourweekmba.com/ai-supabase-150m-gic-turso-acquisition-terms-undisclosed/) — 2026-10
15. [dev.to — Turso vs Neon vs Supabase for Indie Hackers in 2026](https://dev.to/devtoolpicks/turso-vs-neon-vs-supabase-for-indie-hackers-in-2026-1519) — 2026
16. [implicator.ai — Supabase Doubles to $10.5B as Agents Deploy Most of Its Databases](https://www.implicator.ai/supabase-doubles-to-10-5-billion-as-agents-deploy-most-of-its-databases.md) — 2026
17. [tech-insider — Supabase 150M Turso Acquisition Agent Database 2026](https://tech-insider.org/supabase-150m-turso-acquisition-agent-database-2026/) — 2026
18. [Cursor Forum — Bug Composer 2.5 explicitly selected requests blocked when OpenAI BYOK key is active](https://forum.cursor.com/t/bug-composer-2-5-explicitly-selected-requests-blocked-when-openai-byok-key-is-active/162152) — 2026
19. [Cursor Forum — Composer 2.5 error This model does not support custom API keys](https://forum.cursor.com/t/composer-2-5-error-this-model-does-not-support-custom-api-keys/163374/7) — 2026
20. [Cursor Forum — Composer 2.5 fails with BYOK](https://forum.cursor.com/t/composer-2-5-fails-with-byok/164176) — 2026
21. [OpenAI Help — Winding down OpenAI model access in Cursor](https://help.openai.com/en/articles/20001506) — 2026-11-14 存取
22. [OpenAI Blog — Decision on Cursor following SpaceX acquisition](https://openai.com/blog/our-decision-on-cursor-following-its-acquisition-by-spacex) — 2026-08-28
23. [developers.openai.com — Agent Builder Migration Guide](https://developers.openai.com/api/docs/guides/agent-builder/migrate-from-agent-builder) — 2026
24. [Community OpenAI — Deprecation notice Agent Builder](https://community.openai.com/t/deprecation-notice-agent-builder/1382650/1) — 2026
25. [ecorpit — OpenAI shuts Agent Builder Evals and reusable prompts on 30 November 2026](https://ecorpit.com/openai-agent-builder-evals-prompts-shutdown-november-2026/) — 2026
26. [Apideck — MCP Server Directories](https://www.apideck.com/blog/mcp-server-directories.md) — 2026
27. [glama.ai — The State of MCP in 2025](https://glama.ai/blog/2025-12-07-the-state-of-mcp-in-2025) — 2026
28. [modelcontextprotocol — MCP Registry](https://libhunt.com/r/modelcontextprotocol/registry) — 2026
29. [Vercel Changelog — AI SDK 7 is now available](https://vercel.com/changelog/ai-sdk-7) — 2026-06-25
30. [Vercel Changelog — Program Agent Harnesses with AI SDK](https://vercel.com/changelog/program-agent-harnesses-with-ai-sdk) — 2026
31. [createwith — Vercel adds Cline harness adapter to AI SDK](https://createwith.com/tool/vercel/updates/vercel-adds-cline-harness-adapter-to-ai-sdks-unified-interface) — 2026
32. [CNA — 政院修法投入千億助中小微企業升級](https://cna.com.tw/news/aipl/202610080165.aspx) — 2026-10-08
33. [iThome — 中小微企業轉型升級發展條例修正草案](https://www.ithome.com.tw/news/179523) — 2026
34. [立法院議事紀錄](https://www.ly.gov.tw/pages/MeetingList.aspx?nodeid=135) — 2026-11-14 存取
35. [傑昇通信 — iPhone Duo 回收價表](https://www.jyes.com.tw/recycle/Apple-iPhone-Duo) — 2026-11
36. [傑昇通信 — iPhone 摺疊機回收價總覽](https://www.jyes.com.tw/recycle.php?act=list&cid=90) — 2026-11
37. [CNA — iPhone Duo 中國市場熱銷 發貨排至明年](https://www.cna.com.tw/news/acn/202610170102.aspx) — 2026-10-17
38. [CNA — 數發部百億 AI 投資方案 開放境外公司可納投](https://cna.com.tw/news/afe/202610040029.aspx) — 2026-10-04
39. [technews — 百億 AI 基金首年僅投 7,500 萬](https://technews.tw/?p=1520580) — 2026
40. [Claude Code Changelog](https://code.claude.com/docs/en/changelog) — 2026
