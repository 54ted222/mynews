---
title: 每日創業情報 — 2026-10-20
date: 2026-10-20
tags: 創業情報, AI 產業, SaaS, 台灣
summary: 週二 iPhone Duo 10/23 開賣 T-3 + Supabase 收購 Turso T+18 + Anthropic IPO 期中選舉 T-14 + Evals read-only T-11 + Agent Builder EOL T-41 + Haiku 5.5 production T+13 + Cursor $8–$200 新定價 T-8 — 一人 SaaS 架構 freeze 週 Day 2。
keywords: iPhone Duo 10月23日 開賣 T-3 中華電 500 門市 8:00, 台灣大 遠傳 iPhone Duo 實體開賣 10/23 門市時程, Cursor 10月12日 新定價 Plus 8 Premium 30 Super 100 Ultra 200 Grok 共享池, OpenAI Evals read-only 10月31日 T-11 reusable prompts, OpenAI Agent Builder EOL 11月30日 T-41 Agents SDK 遷移, Supabase 收購 Turso T+18 agentic database SQLite Postgres, Anthropic IPO S-1 EDGAR 期中選舉 11月3日 T-14, Claude Haiku 5.5 production T+13 72.4% OSWorld subagent, Claude Code v2.1.287 Claude Mods You Should Know 插件市場, 台灣 數發部 百億 AI 新創 100 片 GPU 2026 第四屆新創投資年會
---

# 每日創業情報 — 2026-10-20

## 🎯 今日 TL;DR

- **週二 Day 2 iPhone Duo 開賣準備週 + iPhone Duo 10/23 開賣 T-3 + Cursor 10/12 新定價 T-8 已滲透 + Supabase 收購 Turso T+18 + Evals read-only T-11 + Agent Builder T-41 + Haiku 5.5 production T+13 + Anthropic IPO 期中選舉 T-14 + 10/25 EDGAR[^edgar] S-1 公開 Deadline T+5** — 9 軸共振進入「本週 iPhone Duo 開賣 Live 週 Day 2 + Cursor 新定價一週後社群反應收斂 + 遷移 crunch 最後 6 週 + 一人 SaaS 架構 freeze 週 Day 2」
- **🔄 iPhone Duo 10/23 開賣 T-3 — 中華電 500 門市 8:00 開賣已確認；台灣大 myfone 10/16 20:00 預購結束、實體開賣時程至今無官方公告 進入 T-3 仍無資訊；遠傳 10/16 10:00 開放搭資費／空機預約但實體開賣時程未公告；地標網通 10/16 20:00 至 10/22 21:30 全台 53 門市 + 官網開放預約；Yahoo 購物 10/16 00:00–10/22 10:00 開放預約登記 + 全電商預購最高享 12% 回饋；首批 <20,000 台 vs 近百萬預約 ~50:1 缺口；Foxconn 良率 60%；內螢幕維修 NT$37,000** — 進入「中華電 500 門市地圖 bind 地圖 API × 原廠 vs 電信通路優惠差異表 freeze × eSIM provisioning 排隊秒數指南 Dry Run × 內螢幕 NT$37,000 維修費 FAQ × 中華電為唯一通路可能性風險提示」5 軸收尾週 Day 2
- **🆕 Cursor 10/12 新定價 T-8 滲透期 — Plus $8 / Premium $30 / Super $100 / Ultra $200 四層新架構；內含用量僅覆蓋 Grok 模型、Claude GPT Gemini 按 API 標價另計；$20 Pro 已對新用戶關閉；用量為 Grok 共享池[^grok-pool]、每週刷新** — 一人 SaaS 開發者第二軸訊號：Grok 共享池 + 第三方模型拆帳 = 從「訂閱 unlimited」轉向「訂閱 + 用量」hybrid；對只用 Claude Code 的工程師，Cursor 的性價比優勢在 Haiku 5.5 production T+13 後進一步瓦解

## 🔄 昨日追蹤

- **🔄 iPhone Duo 10/23 開賣 T-3（昨 T-4）** → 中華電 500 門市 8:00 開賣確認；台灣大、遠傳實體開賣時程仍無官方公告（T-3 仍無資訊 = 中華電唯一實體通路風險加壓）；10/16 預購「兩分鐘內售罄」已成媒體共識 ✅ 進度：架構 freeze Day 2
- **🔄 Supabase 收購 Turso T+18（昨 T+17）** → Glauber Costa 擔任 Head of Agentic Services、per-tenant 定價仍無公開、SQLite 先 Postgres 後的 agent-generated database 路線確認；Databricks 收購 Neon 的對照仍成立 ✅ 選型訊號第 2 週：對一人 SaaS 架構師意義是「SQLite + libSQL[^libsql] 現在是 Supabase 一等公民」
- **🔄 Agent Builder EOL T-41（昨 T-42）** → Agents SDK[^agents-sdk] migration 官方口徑未更新；ChatKit 不受影響、Responses API 不受影響已確認；Promptfoo[^promptfoo] 作為 Evals 遷移目標的指引仍為二手來源，openai.com 官方公告搜尋未命中 ⚠️ 風險：code export 僅是 scaffold、node parity / tool behavior / guardrails 需直接測試
- **🔄 Evals read-only T-11（昨 T-12）** → 10/31 00:00 UTC 進入 read-only 的風險：reusable prompts 下線 + 匯出時窗剩 11 天；進度：建議本週完成 dataset 匯出
- **🔄 Haiku 5.5 production T+13（昨 T+12）** → 10/7 釋出的 Haiku 5.5 已進入 Claude Code v2.1.293（10/8）作為預設模型（1M context）；Over-refusal bug 時程、Artificial Analysis AutomationBench-AA 重測結果仍未更新 ✅ 進度：切 production Day 2
- **🔄 Anthropic IPO T-14（昨 T+21）** → 11/3 期中選舉 T-14、11/9 路演可能日 T-20；10/25 EDGAR S-1 公開 Deadline T+5（11/9 路演倒推 15 天）；confidential S-1 vs public S-1 flip 仍為先行觀察訊號

## 📰 AI 產業動態

| 事件 | 影響 | 機會/威脅 | 來源 |
| ---- | ---- | --------- | ---- |
| 🔄 iPhone Duo 10/23 開賣 T-3；中華電 500 門市 8:00 + 全台電商預購最高 12% 回饋 | 台灣 Day 2 開賣準備週：原廠 vs 電信通路優惠差異表進入收尾；首批 <20,000 台 vs 近百萬預約 ~50:1 缺口；eSIM-only + 內螢幕維修 NT$37,000 | 機會：10/23 Live push 內容 slot 進入定稿期；中華電 500 門市地圖 bind + 排隊秒數指南 Dry Run；威脅：台灣大 / 遠傳 T-3 仍無開賣時程 = 中華電唯一通路、流量集中 | [自由時報](https://ec.ltn.com.tw/article/breakingnews/5606880) |
| 🔄 Cursor 10/12 新定價 T-8 滲透期：Plus $8 / Premium $30 / Super $100 / Ultra $200 | 四層新架構 + 內含用量僅覆蓋 Grok 模型、Claude GPT Gemini 按 API 標價另計；$20 Pro 對新用戶關閉；用量 Grok 共享池每週刷新 | 機會：訂閱 unlimited → 訂閱 + 用量 hybrid 可能成為 2026 AI dev tool 定價標準；對 Haiku 5.5 production + Claude Code v2.1.293 預設模型組合有利；威脅：Cursor 現有 Pro 用戶續約時 bill shock、估算每月增加 USD 10–60 | [SmartScope](https://smartscope.blog/en/blog/cursor-x-subscription-pricing-third-party-models-2026/) |
| 🔄 Agent Builder + Evals + reusable prompts 11/30 EOL T-41；Evals read-only 10/31 T-11 | 遷移 crunch 最後 6 週；ChatKit 不受影響；Responses API 不受影響；code export 僅是 scaffold | 機會：Agents SDK TypeScript / Python 選型此時進場；Promptfoo 作為 Evals 遷移目標持續檢驗；威脅：node parity / tool behavior / guardrails / tracing / latency / cost / ChatKit integration 需直接測試、不保證一比一 | [MCP Directory 遷移指南](https://mcp.directory/blog/openai-agentkit-deprecation-2026) |
| 🔄 Supabase 收購 Turso T+18；Glauber Costa Head of Agentic Services；per-tenant pricing + agent-generated database 細節未公開 | 一人 SaaS 架構師：SQLite + libSQL 現在是 Supabase 一等公民；SQLite 先 Postgres 後的遷移路線；Databricks + Neon 對照仍成立 | 機會：agent-generated database 需求爆發 + per-tenant 隔離；每週推出 >1M 資料庫的 scale；威脅：價格、SLA、交易完成日期仍未公開 | [Supabase 收購 Turso 官方部落格](https://supabase.com/blog/supabase-is-acquiring-turso) |
| 🔄 Anthropic IPO 期中選舉 T-14；S-1 EDGAR 公開 Deadline T+5（10/25） | 11/3 期中選舉前 S-1 flip 可能性；路演 11/9 可能起點；confidential vs public S-1 flip | 機會：若 11/9 路演起點確認 → S-1 flip 將是先行訊號；威脅：若 10/25 EDGAR 仍無 S-1 → bear case 第三支點加壓；市場條件 + SEC review 兩大變數 | [Shacknews — Anthropic S-1 Official](https://www.shacknews.com/article/149384/anthropic-ipo-filing-official) |

## 🛠 新興 AI 工具

| 工具 | 類別 | 用途 | 定價 | 差異點 | 採用建議 |
| ---- | ---- | ---- | ---- | ------ | -------- |
| 🔄 Claude Code v2.1.287 Claude Mods + You Should Know Agent | AI IDE / Agent | 插件可修改更深層行為；opt-in agent 提醒使用者可能遺漏的事項 | Claude 訂閱內含 | Claude Mods 是 2026 下半年 Claude Code 最深層 plugin API；You Should Know 類似「編輯台 reviewer」agent | 一人 SaaS 開發者：Claude Mods 現在可取代大部分 Cursor 擴充需求；You Should Know 作為 commit 前 reviewer |
| 🔄 Claude Code v2.1.292 插件市場直裝 + subagent 工作強度控制 | AI IDE / Agent | 從 marketplace 一鍵安裝插件；可控 subagent 「work hard」強度 | Claude 訂閱內含 | 比 .claude/skills 目錄自動載入（5 月 v2.1.157）更進一步；subagent intensity 類似 effort knob | 若需 marketplace 分發 skills／plugins → 現在是最合適時機 |
| 🔄 Claude Code v2.1.293 預設模型切 Haiku 5.5 (1M context) | AI IDE / Model | 10/8 起 Claude Code 預設模型；1M context window | Claude 訂閱內含 | 比 Haiku 4.5 平均便宜 ~75%、1M context、OSWorld[^osworld] 2.1 (offline subset) 72.4%；subagent 定位 | 一人 SaaS：此為「切 production Day 2」訊號；對 Cursor 新定價是直接競爭 |
| 🆕 Claude Code v2.1.294 Instruction hooks 修復 | AI IDE / Hooks | 修復 instruction-based hooks 阻止規則生效 bug | Claude 訂閱內含 | 10/8 版本後 hooks 系統 reliability 提升；blocking rules 現在真的生效 | 若使用 PreToolUse / UserPromptSubmit hooks 做 compliance / lint gate → 建議立刻升級 |
| 🔄 v0 by Vercel Design Systems 2.0 + Marketplace Integrations | AI UI 生成 / Design | 用自己的組件、配色、字體、規範建構 UI；Vercel Marketplace Integrations 直接可用 | 免費額度 $5（新用戶一次性）+ 每日 7 條訊息上限；付費 Pro / Pro+ / Max / Max Fast | Design Systems 2.0 讓 v0 從「樣板產生器」升級為「brand-aware UI 生成器」；一次性 $5 額度明顯緊縮 | 若做 BrandOps / Design-first 一人 SaaS → 現在是好時機；對 free-tier 試用者則變得非常緊 |

## 💡 SaaS 點子

### 點子 1：Grok 共享池用量視覺化儀表（Cursor 新定價副作用）🆕

- 痛點來源：Cursor 10/12 新定價將 Grok 設為共享池、每週刷新；Reddit / HN 已出現「本週還剩多少 Grok 配額」焦慮；第三方模型按 API 標價另計 → 月末 bill shock
- 目標客群：Cursor Plus/Premium/Super 用戶（台灣估約 3,000–8,000 位獨立開發者，以 Line Dev / FB Taiwan Developers Group 社團流量推估）
- 技術複雜度：3/5
- 預估 MRR：USD 300–1,200（NT$9,000–36,000）
- 競品弱點：Cursor 原生儀表簡化、不支援預警 webhook；市面無專門追蹤 Grok 共享池 + 第三方模型拆帳的工具
- 切入建議：Chrome Extension + 自建 proxy middleware 擷取 /api/usage endpoint；MVP 7 天內可上線；分銷 Twitter / HN；定價 USD 3/月 solo、USD 9/月 team

### 點子 2：Agent Builder → Agents SDK 遷移檢核 CLI（T-41 crunch 工具）🆕

- 痛點來源：Agent Builder 11/30 EOL T-41；code export 僅是 scaffold、node parity / tool behavior / guardrails 需直接測試；MCP Directory + AgenticWire 都指出需要「parity test harness」
- 目標客群：全球估約 15,000–40,000 個 Agent Builder 工作區（OpenAI 社群貼文統計推估）；台灣估 100–300 位
- 技術複雜度：4/5
- 預估 MRR：USD 1,500–4,000（NT$45,000–120,000）
- 競品弱點：Promptfoo 聚焦 LLM eval、不含 workflow graph 比對；OpenAI 官方 export 工具不含驗證
- 切入建議：CLI + Agent Builder 工作區 JSON 匯入 + Agents SDK 匯出 → 跑 N 組 fixture 比對行為；6 週內上線搶在 11/30 EOL 前；單次 USD 49 solo / USD 199 team；分銷 OpenAI 社群 + Reddit r/OpenAI

### 點子 3：iPhone Duo 10/23 開賣當日「中華電 500 門市即時庫存地圖」🆕

- 痛點來源：中華電 500 門市 8:00 開賣、首批 <20,000 台 vs 近百萬預約 ~50:1 缺口；台灣大、遠傳實體開賣時程至 T-3 仍無公告 = 中華電唯一通路；消費者需輪詢各門市電話
- 目標客群：10/23 當日想入手 iPhone Duo 的台灣消費者，估 20,000–100,000 UV
- 技術複雜度：2/5
- 預估 MRR：N/A（Spike 流量產品）；但 Day 1 流量可作為後續 「電信門市即時庫存地圖」SaaS 的 user acquisition hook
- 競品弱點：中華電官網不提供即時庫存；地圖 API bind + 門市列表為公開資料
- 切入建議：Vercel 部署 + Supabase + crowdsourced 回報 + Google Maps API；10/22 完成 Dry Run、10/23 上線；可為後續 Pixel / Samsung 新機開賣當日通路地圖 pivot

## 🧰 工具堆疊更新

- 🔄 **Claude Code v2.1.287–v2.1.294 10 月更新密集**（Claude Mods、插件市場直裝、Haiku 5.5 預設模型、hooks 修復）→ 一人 SaaS 開發者 workflow 更新最佳時機
- 🔄 **Cursor 10/12 新定價 T-8**（Plus $8 / Premium $30 / Super $100 / Ultra $200；內含 Grok、第三方模型 API 計價）→ Cursor Pro $20 現有訂閱者續約時 bill shock 風險
- 🆕 **v0 免費額度改為一次性 $5**（新用戶）+ 每日 7 條訊息上限 → free-tier 試用者需提早付費決策
- 🔄 **Supabase + Turso 整合進度未公開**；SQLite + libSQL 作為 Supabase 一等公民 → agent-generated database per-tenant 架構師進入觀察窗

## ⚡ 今日行動建議

- [ ] **10/23 iPhone Duo 開賣當日 push notification MVP 架構 freeze**（預期成本 NT$0；產出：10/22 Dry Run checklist + 中華電 500 門市地圖 bind + eSIM 排隊秒數指南 + 內螢幕 NT$37,000 FAQ）
- [ ] **Agent Builder → Agents SDK 遷移 crunch**（T-41；預期成本：半天工程時間；產出：workflow graph JSON 匯出 + Agents SDK scaffold + 1 組 fixture 比對）
- [ ] **OpenAI Evals dataset 匯出 T-11**（10/31 00:00 UTC 進入 read-only；預期成本：1 小時；產出：所有 reusable prompts + eval results JSON 匯出）
- [ ] **Cursor 新定價試算：若為 Pro $20 現有訂閱者，Plus $8 vs Premium $30 選型決策表**（預期成本：30 分鐘；產出：個人 workload 下 Grok 共享池用量試算 + Claude API 補位成本）
- [ ] **Claude Code v2.1.287+ 升級 + Claude Mods 探索**（預期成本：1 小時；產出：至少 1 個自訂 mod + You Should Know agent opt-in）

## ⏳ 待觀察

- 10/22：Yahoo 購物 iPhone Duo 預約登記截止 10:00 — T+2 當日尾盤訊號
- 10/22：地標網通 iPhone Duo 預約截止 21:30 — T+2
- 10/23：iPhone Duo 中華電 500 門市 8:00 開賣 — T+3 Day 1 Live push 日
- 10/25：Anthropic IPO EDGAR 公開 S-1 Deadline（11/9 路演倒推 15 天）— T+5 若仍無 → bear case 第三支點加壓
- 10/31：OpenAI Evals read-only — T-11 倒數；是否可延期尚無官方口徑
- 11/3：美國期中選舉 — Anthropic IPO 路演起點前的最後政治 trigger
- 11/9：Anthropic IPO 期中選舉後路演可能日 — S-1 flip（EDGAR）仍為先行觀察訊號
- 11/30：OpenAI Agent Builder + Evals + reusable prompts 三件事一次下線 — T-41 倒數
- Q4 底：Google Gemini 4 預期落地 — DeepMind COO 「much earlier」than year-end 口徑；若 11 月前落地 → 3 大供應商重排 trigger
- 8/31 2027：Shopify legacy MCP cart tools EOL — T-315 遠期倒數
- Haiku 5.5 Over-refusal bug：Anthropic 修補時程、Artificial Analysis AutomationBench-AA 重測結果
- Supabase 收購 Turso：per-tenant pricing + agent-generated database limits 細節、Head of Agentic Services roadmap 第一次公開
- Microsoft Agent Framework vs AutoGen maintenance mode：後續 roadmap 清晰度
- 台灣大 / 遠傳 iPhone Duo 實體開賣時程：至 10/20 T-3 仍未見官方公告，10/23 前若未落實 → 消費者需面對「中華電為唯一實體通路」
- Cursor 新定價社群反應收斂：T-8 已滲透；Reddit r/cursor + HN 本週情緒走向決定「訂閱 + 用量」hybrid 是否成為 2026 標準

[^edgar]: 美國證券交易委員會（SEC）的 Electronic Data Gathering, Analysis, and Retrieval 系統，所有公開發行文件（含 S-1 IPO 註冊聲明書）皆於此公告；confidential filing 轉為 public 的時點，即可在 EDGAR 檢索到對應編號，是 IPO 時程最可靠的先行觀察點。

[^grok-pool]: Cursor 2026-10 新訂閱架構底下，將 xAI Grok 模型的內含用量切成所有付費方案共用的額度池，每週刷新；Claude、GPT、Gemini 則不列入此池，改按模型供應商 API 標價另外計費，因此月末容易出現 bill shock。

[^libsql]: Turso 於 2022 年從 SQLite fork 出來的 open contribution 分支，加入了伺服器端協定、嵌入式 replication 與 vector 擴充；在 Supabase 收購 Turso 之後，被定位為「寫入在邊緣、同步到中央」的 agent-generated database 底層選型。

[^agents-sdk]: OpenAI 2025 年推出的多代理人開發框架（有 Python 與 TypeScript 版），以程式碼直接定義 agent、tool 與 handoff；在 2026-11-30 Agent Builder 下線後，被官方指定為 workflow 遷移的替代路徑，但 node parity 與 guardrails 不保證一比一。

[^promptfoo]: 開源 LLM 評估與測試工具，支援以 YAML 設定跑多模型回歸、assertion 與 red-teaming；在 OpenAI Evals 於 2026-10-31 進入 read-only 之後，被社群遷移指南列為可對接的替代評估棧，但不含 workflow graph 比對能力。

[^osworld]: 由香港大學 2024 年提出的多工作業系統代理人基準測試，涵蓋真實桌面應用（檔案、瀏覽器、辦公軟體等）跨 369 個任務；offline subset 為去掉網路依賴後的穩定子集，常被用於跨模型對照，數字愈高代表完成率愈好。

## 📚 引用來源

1. [自由時報 — iPhone Duo 折疊機來了 全電商預購最高享 12% 回饋](https://ec.ltn.com.tw/article/breakingnews/5606880) — 2026-10-16
2. [自由時報 — 蘋果 iPhone Duo 摺疊新機中華電信開放限量網路預約](https://ec.ltn.com.tw/article/breakingnews/5569149) — 2026-09-10
3. [中央社 — 台灣大哥大 myfone 10/16 20:00 開放預購 iPhone Duo](https://www.cna.com.tw/business/chinese/447172) — 2026-10
4. [TVBS — iPhone Duo 預購今晚 8 點開搶 台灣售價 官網搶購技巧](https://news.tvbs.com.tw/tech/4037011) — 2026-10-16
5. [SmartScope — Cursor X Subscription Pricing Third Party Models 2026](https://smartscope.blog/en/blog/cursor-x-subscription-pricing-third-party-models-2026/) — 2026-10-13
6. [StandardCompute — Cursor Pricing Guide（事實核驗 2026-10-13）](https://standardcompute.com/cursor-pricing) — 2026-10-13
7. [MCP Directory — OpenAI winding down Agent Builder and Evals Migration Guide](https://mcp.directory/blog/openai-agentkit-deprecation-2026) — 2026
8. [AgenticWire — Migrate from OpenAI Agent Builder: SDK vs Workspace Nov 30 Deadline](https://www.agenticwire.news/article/openai-agent-builder-migration-sdk-workspace) — 2026
9. [Pickaxe — OpenAI Agent Builder Deprecation](https://pickaxe.co/post/openai-agent-builder-deprecation) — 2026
10. [Supabase — Acquiring Turso 官方部落格](https://supabase.com/blog/supabase-is-acquiring-turso) — 2026-10-02
11. [Webull — Supabase Announces $150M in New Funding and Turso Acquisition](https://www.webull.com/news/15678771187762176) — 2026-10-02
12. [SiliconAngle — Database startup Supabase raises $150M acquires Turso](https://siliconangle.com/?p=849239) — 2026-10
13. [Vals AI — Claude Haiku 5.5 Model](https://www.vals.ai/models/anthropic_claude-haiku-5-5) — 2026-10
14. [Gori.me — Claude Haiku 5.5 登場 比 Haiku 4.5 便宜 75%](https://gori.me/?p=171039) — 2026-10
15. [Havoptic — Claude Code October 2026 Releases](https://www.havoptic.com/releases/claude-code/2026/10) — 2026-10
16. [DEV.classmethod — Claude Code v2.1.156 to v2.1.158 Major Updates](https://dev.classmethod.jp/en/articles/20260529-cc-updates-v2-1-158/) — 2026-05
17. [Shacknews — Anthropic IPO Officially Coming S-1 Form With SEC](https://www.shacknews.com/article/149384/anthropic-ipo-filing-official) — 2026
18. [RichNerds — Anthropic IPO 965B Bet](https://richnerds.substack.com/p/anthropic-ipo-filing-2026) — 2026
19. [NPR — AI Giant Anthropic Files Paperwork for IPO](https://www.npr.org/2026/06/01/nx-s1-5843199) — 2026-06-01
20. [LetsDataScience — Anthropic Confidentially Files Form S-1 for IPO](https://letsdatascience.com/news/anthropic-confidentially-files-form-s-1-for-ipo-2d067167) — 2026
21. [Yespress — v0 by Vercel 更新整理](https://yespress.io/products/v0.md) — 2026
22. [Vercel Changelog — Vercel Marketplace Integrations Now Available In v0](https://vercel.com/changelog/vercel-marketplace-integrations-now-available-in-v0) — 2026
23. [UsagePricing — Vercel 2026-10-04 v0 Free Credits One Time](https://www.usagepricing.com/blueprint/activity/vercel-2026-10-04-v0-free-credits-one-time) — 2026-10-04
24. [TrendForce — TSMC Reportedly Targets 22 2nm 16 3nm Capacity Boost by Mid 2027 CoWoS to Double by 2028](https://www.trendforce.com/news/2026/09/14/news-tsmc-reportedly-targets-22-2nm-16-3nm-capacity-boost-by-mid-2027-cowos-to-double-by-2028/) — 2026-09-14
25. [Focus Taiwan — TSMC Q3 2026 earnings](https://focustaiwan.tw/business/202610150018) — 2026-10-15
26. [BetaNews — OpenAI GPT-6 Astra AGI Era](https://betanews.com/article/openai-gpt-6-astra-agi-era/) — 2026-09-03
27. [FourWeekMBA — GPT-6 Astra Launches Today Rollout Architecture](https://fourweekmba.com/ai-openai-gpt-6-astra-launch-rollout-analysis/) — 2026-09-03
28. [TechNews — 百億 AI 基金首年僅投 7,500 萬 數發部公布 5 家獲投新創](https://technews.tw/?p=1520580) — 2026
29. [uanalyze — 數發部祭百億資金催生 AI 新創已核定 6 案 盼添購 100 片 GPU 擴充算力池](https://uanalyze.com.tw/articles/1078148404) — 2026
30. [Business Next — moda AI startup 100 billion plan](https://www.bnext.com.tw/article/90239/moda-ai-startup-100billion-plan) — 2026
