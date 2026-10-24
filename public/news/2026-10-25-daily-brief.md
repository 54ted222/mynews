---
title: 每日創業情報 — 2026-10-25
date: 2026-10-25
tags: 創業情報, AI 產業, SaaS, 台灣
summary: 週六 Anthropic IPO EDGAR S-1 Deadline Day（T±0）結果日 + iPhone Duo Day 3 Weekend T+2 二手溢價開始回落 + Evals read-only T-6 進入倒數個位數下半 + Cursor 10/12–13 pricing 大改單一 aggregator 捕獲 Plus $8 / Premium $30 / Super $100 / Ultra $200 新結構 + Claude Agent SDK 0.3.302 nested subagents 續延燒 + 國發基金 10 案 2.4 億政策容量未滿訊號續行。
keywords: Anthropic IPO EDGAR S-1 Deadline 10月25日 D-Day 11月9日 roadshow 15 日倒推, iPhone Duo Day 3 Weekend 10月25日 T+2 二手溢價回落 unwire 加價 2000 3000, Cursor pricing restructure PricingSaaS 10月12日 13日 Free Plus 8 Premium 30 Super 100 Ultra 200, OpenAI Evals read-only 10月31日 T-6 Agent Builder EOL 11月30日 T-36 reusable prompts, Claude Agent SDK TypeScript 0.3.302 nested subagents SessionStore skills 2026-10-16, Vercel AI SDK 7 2026-06-25 GA WorkflowAgent durable storage Codex Claude Code harness, Shopify WebMCP checkout get_checkout update_checkout complete_checkout 60/60 vs browser automation 56/60, 國發基金 100億 AI 新創基金 10 案 2.4 億 第 1 年 平均 2400 萬 vs 上限 2 億, Supabase Compute hosted sandbox Pricing GA 定價 Turso 收購 150M 融資, Shopify Editions 2026 Winter Summer MCP WebMCP UCP Universal Commerce Protocol Google
---

# 每日創業情報 — 2026-10-25

## 🎯 今日 TL;DR

- **週六 Anthropic IPO EDGAR S-1 Deadline Day T±0 — 結果日 + iPhone Duo Day 3 Weekend T+2 + Evals read-only T-6 + Agent Builder EOL T-36 + Haiku 5.5 production ramp Week 2 Day 1 T+18 + 期中選舉 T-9（11/3）+ Anthropic roadshow 可能日 T-15（11/9）+ 感恩節 Anthropic IPO 期限 T-32（11/26）** — 週六為 Day 3 Weekend 週末低流量日，但 S-1 Deadline 落在今日 → 本週關鍵 bear case 支點收斂日；下週收斂到 Evals dataset 匯出倒數 6 日 + Agents SDK scaffold 第二輪驗證 + 「S-1 flip 到 EDGAR」實地落實確認 3 件事
- **🔄 Anthropic IPO EDGAR S-1 Deadline Day T±0（10/25）結果日 — 10 月下旬截至今日仍無 EDGAR 公開 S-1 的第一手來源確認（10/4 Forkast + 9/29 社群觀察續行、10/22 Yonhap 預報「10/23 可能」未落實）+ Bloomberg 11/9 週可能起跑路演（距今 T-15 日）+ 感恩節 11/26 前上市目標 + 2 trillion valuation + 100B expected proceeds + 承銷 Goldman / Morgan Stanley / JPMorgan / Citigroup + confidential 自 6/1 起 146 天 + 15 日公開揭露規定[^15日公開揭露] 倒推 → 若今日 EDGAR 仍無 S-1，11/9 路演窗口技術上不可達成** — bear case 第 3 支點進入「落實觀察日」：10/26（週日）美東晚間至 10/27（週一）美東上午為「S-1 flip」最後 72 小時窗；若 10/27 EDGAR 仍無 → 11/9 路演延至 11/16（T-22）為基線情境、11/26 感恩節前上市目標進入「60/40 偏延後」機率空間；對一人 SaaS 影響：Anthropic 定價壓力推遲 → Astra / Haiku 定價調整 trigger 推至 11 月下旬
- **🔄 iPhone Duo 10/25 Day 3 Weekend T+2 — Apple 官網續引導「取貨查詢」+ 全線備貨 2027-01-25 延後續行 + 二手市場回落訊號續強（10/20 unwire 轉售報導：加價人民幣 2,000–3,000 元為中位、6,000 元加價已失價 → 收機商降低報價、囤貨炒家面臨虧損；eBay 2TB 夜曜黑 $4,999 USD vs Apple $3,199 USD 美國溢價 $1,800）+ 台灣 10/24 Day 2 現場 vs 10/23 Day 1 媒體關注顯著下滑 + 中國 10/17 CNA 報導發貨排至明年、黃牛價高漲後首波回落 + 本週 Mark Gurman Power On 批評 Apple「70+ 國家同步預購卻缺貨」策略仍為 bear 聲音** — Day 3 Weekend 關鍵訊號：「二手溢價回落速度」= 預購 vs 需求缺口的真實倍數測量 + Apple 10/24 pickup 查詢真實可取貨率回報 + 台灣門市 Day 3 流量進入「盤整期」；per-project「二手溢價回落 Live 追蹤 × 10/25–10/26 週末轉售買家 FAQ × Day 3 現場盤整分析」3 合一 Day 3 Weekend pack 可擠進一人 SaaS 收尾週
- **🆕 Cursor 新定價結構 10/12–13 PricingSaaS 單一 aggregator 捕獲 T+13 — Free / Plus $8 / Premium $30 / Super $100 / Ultra $200 / Teams $30+/user / Enterprise custom（取代原 Hobby/Pro $20/Pro+ $60/Ultra $200/Teams $40 結構）+ 新 mid-tier 為 $100「Super」而非舊 $60「Pro+」+ pricing 層數由 4 層擴至 6 層 + 單一第三方 aggregator（PricingSaaS）10/12–10/13 captures 間抓到 + 官方 cursor.com/pricing 公告仍未查得 + Cursor forum / Reddit r/cursor 討論仍無聲** — 本週 brief 10/22–10/24 誤差校正：先前續行 Christopher Alarcon blog 單一來源為「2026 新定價仍無變動」已過時，PricingSaaS 10/12–13 已經 flip 到 Super $100 新結構；對一人 SaaS 第 1 軸訊號：Cursor 的 pricing 層數擴至 6 層 → 使用者可擇定 Plus $8（最低門檻）或 Super $100 新 mid-tier；台灣 developer 需確認「Super $100 可用的 fast request 配額 vs Ultra $200」實際試用結果，待 Reddit / HN 社群第一手回報
- **🔄 Evals read-only T-6 進入倒數個位數下半 — 官方 developers.openai.com/api/docs/guides/evals 續確認 10/31 00:00 UTC read-only + 11/30 下線 + reusable prompts 同下線 + Agent Builder EOL T-36 + 官方 deprecations 頁指向 Promptfoo[^promptfoo] 為遷移目標 + Datasets 為實驗替代 + Langfuse v4 推出獨立 migration guide + OpenAI cookbook 要求「eval 已完整 run 過」才能匯出 runnable config + 第三方指出匯出路徑「not a full conversion」= workflow graph parity 需人工重驗** — 本週倒數個位數「下半」：10/25 Day 7 加價 20–40% 接案 landing 第二稿公開 + Langfuse v4 新選項補入 + Promptfoo YAML parity test skeleton 完稿；10/26 週日 Day 8 進入「10/26–10/30 Evals 遷移週」最後 5 日工作日；若今日 Day 7 補跑 dataset 匯出未完成 → 10/26 Day 8 為倒數 6 日前最後時機
- **🆕 OpenAI Agent Builder 遷移路徑第三方確認 T-36 — pickaxe.co / StackOne 續行官方立場「no full conversion」+ workflow graph parity + branching + handoffs 需人工重驗 + Agents SDK（Python/TypeScript）為官方優先遷移目標 + ChatGPT Workspace Agents 為第 2 路徑 + Agent Builder shutdown 11/30 後失去 UI 編輯 / 測試 / 操作 workflow graph 權限 + ChatKit 不受影響續行** — 對一人 SaaS 開發者第 2 軸訊號：Agent Builder 遷移難度 = 「visual workflow graph 不會自動轉為 Agents SDK code」，台灣 SI 顧問案接客機會窗仍剩 5 週；per-project「Agent Builder → Agents SDK 遷移諮詢」加價 30–50% 接案 NT$ 80K–280K per client
- **🔄 Claude Agent SDK 0.3.302 nested subagents 續延燒 T+9（2026-10-16 ship，10/23–10/24 brief 已覆蓋）— TypeScript 0.3.302 + Python 0.2.168 新功能續行：nested subagents with caps[^nested-subagents]（避免無限遞迴）+ SessionStore[^session-store]（跨 session 儲存狀態）+ skills（可組合技能）+ plugins + structured outputs + permission defaults + 版本綁 Claude Code CLI v2.1.302** — Week 2 Day 1 續行軸：10/25 Day 7「Claude Agent SDK 0.3.302 vs Vercel AI SDK 7」3,500 字對照 blog 第一稿寫作日 → 10/26 週日 Day 8 寫完 → 10/27 週一 Day 9 公開；台灣中文技術 blog 仍停在 0.2.x 版本描述、無與 Vercel AI SDK 7 WorkflowAgent[^WorkflowAgent] 的平行對照
- **🔄 Haiku 5.5 Week 2 Day 1 T+18 production ramp — Vals Index 54.31% + Refusal Rate 0.22% + Artificial Analysis Intelligence Index 43 at max effort + OSWorld 72.4% + Terminal-Bench 39.2% max effort + Over-refusal fix 仍無完成訊號（10 月 中旬第三方 benchmark 續引用 1.8% refusal 於 Terminal-Bench 12/660 samples）+ AutomationBench-AA 35% 待重測 + 1M context + 128K output + Claude Code v2.1.293 預設整合（10/8）+ Claude Agent SDK 0.3.302 新選型支持 nested subagents** — 進入 Week 2 Day 1 的「擴展階段」：切第 7 條「nested subagent（Claude Agent SDK 0.3.302 + Haiku 5.5）」或擴至 label normalize + transcription workflow；effort levels 配置 low 分類 / high 摘要 / low 轉譯 / low 標準化 / low 標籤 / medium nested subagent

## 🔄 昨日追蹤

- **🔄 Anthropic IPO EDGAR S-1 Deadline T+1 → T±0 Day** → bear case 第 3 支點進入「落實觀察日」；若今日 EDGAR 仍無 S-1 → 11/9 路演窗口技術上不可達成，可能延至 11/16 ⚠️ 進度：進入臨界結果日
- **🔄 iPhone Duo 10/24 Day 2 T+1 → 10/25 Day 3 Weekend T+2** → 二手溢價回落訊號續強 + 媒體關注 Day 3 Weekend 續降 + 中華電 500 門市 Day 3 進入「盤整期」 ✅ 進度：Day 3 Weekend 低流量日
- **🔄 Evals read-only T-7 → T-6** → Agent Builder 遷移路徑第三方確認「no full conversion」+ workflow graph parity 需人工重驗補強；本週倒數個位數下半 ⚠️ 進度：10/26 Day 8 為倒數 6 日前最後時機
- **🔄 Agent Builder EOL T-37 → T-36** → Agents SDK（Python/TypeScript）、ChatGPT Workspace Agents 兩路徑續行；ChatKit 不受影響續確認；code export「starting point only」續行 ⚠️ 風險：Agent Builder 11/30 失去 UI 編輯權限
- **🔄 Haiku 5.5 T+17 → T+18** → Week 2 Day 1；Over-refusal fix 仍無完成訊號、AutomationBench-AA 35% 重測結果未公告（續 skip） ✅ 進度：切第 7 條 nested subagent
- **🔄 Claude Agent SDK 0.3.302 T+8 → T+9** → nested subagents / SessionStore / skills 續延燒；今日 Day 7「vs Vercel AI SDK 7」3,500 字對照 blog 寫作日
- **🆕 Cursor 10/12–13 pricing 大改 PricingSaaS 單一 aggregator 捕獲** → 本日新增追蹤軸：Free / Plus $8 / Premium $30 / Super $100 / Ultra $200 新結構，官方 cursor.com/pricing 未公告、Reddit 聲音仍無

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🔄 iPhone Duo 10/25 Day 3 Weekend T+2 — 二手溢價開始回落 + Apple 全線備貨 2027-01-25 延後續行 + 媒體關注 Day 3 Weekend 續降 + 中華電 500 門市 Day 3 進入盤整期 + 10/20 unwire 轉售報導：中國加價人民幣 2,000–3,000 元為中位、6,000 元加價已失價、收機商降低報價、囤貨炒家面臨虧損 + eBay 2TB 夜曜黑 $4,999 USD vs Apple $3,199 USD 美國溢價 $1,800 + 中國 10/17 CNA 報導發貨排至明年續行 + Mark Gurman Power On 批評「70+ 國家同步預購卻缺貨」策略 bear 聲音續行** | [unwire — iPhone Duo scalpers resale price drop](https://unwire.hk/2026/10/20/iphone-duo-scalpers-resale-price-drop/mobile-phone/)、[中央社 — iPhone Duo 中國市場熱銷 發貨排至明年、黃牛價高漲](https://www.cna.com.tw/news/acn/202610170102.aspx)、[Dexerto — Apple's iPhone Duo preorders are reselling for thousands more as shipping slips to January](https://www.dexerto.com/entertainment/apples-iphone-duo-preorders-are-reselling-for-thousands-more-as-shipping-slips-to-january-3419373/)、[iFeng Tech — 博主號召大家抵制黃牛：iPhone Duo 溢價別接盤](https://tech.ifeng.com/c/8xLYzIPXYMO) | Day 3 Weekend 低流量日 → 媒體關注顯著下降 + 二手溢價回落速度 = 預購 vs 需求缺口真實倍數 + Apple 10/24 pickup 查詢真實可取貨率回報 + 中華電 500 門市 Day 3 進入「盤整期」；per-project「10/25 二手溢價回落 Live 追蹤 × 10/25–10/26 週末轉售買家 FAQ × Day 3 現場盤整分析 × eBay $4,999 vs Apple $3,199 美國溢價 $1,800 FAQ × 2TB NT$118,900 Day 3 現場回報」5 合一 Day 3 Weekend pack NT$ 100K–250K | 機會：**「10/25 Day 3 Weekend 二手溢價回落 Live × 週末轉售買家 FAQ × Day 3 現場盤整分析 × eBay $4,999 美國溢價 $1,800 FAQ × 中國 10/17 CNA 發貨排至明年續引用 × Mark Gurman「70+ 國家同步預購卻缺貨」bear 聲音續引用」6 合一 Day 3 Weekend pack NT$ 150K–280K**；甜蜜點 = 10/25 10:00「Day 3 Weekend 二手溢價回落 Live」push + 14:00「週末轉售買家 FAQ」push + 20:00「Day 3 收尾 vs Day 1–2 對比」push + 10/26 週日 10:00「Weekend 2 Day 收尾盤後分析」blog + 20:00「Day 4 補貨時程更新」push；威脅：10/25 Day 3 Weekend 媒體關注顯著下降 → 流量基數可能已低於 Day 1–2 的 1/3–1/5、per-project 甜蜜區間相對縮小；二手溢價回落速度為市場驗證期訊號、不代表「預購族實際放棄」—— push 需在 FAQ 註明「Weekend 回落 ≠ 預購需求消失」避免誤導 |
| **🆕 Anthropic IPO EDGAR S-1 Deadline Day 落實觀察 — 若今日 EDGAR 仍無公開 S-1 → 11/9 路演窗口技術上不可達成（15 日公開揭露規定倒推）+ Bloomberg 11/9 週可能起跑路演已成基線 + 2 trillion valuation + 100B expected proceeds + 承銷 Goldman / Morgan Stanley / JPMorgan / Citigroup + 感恩節 11/26 前上市目標 + confidential 自 6/1 起 146 天 + 10/22 Yonhap 預報「10/23 公開 S-1 可能」未落實 + 10/4 Forkast 「IPO slipped from October to November」續行** | [Implicator — Anthropic could start IPO roadshow week of Nov 9](https://www.implicator.ai/anthropic-could-start-ipo-roadshow-week-of-nov-9-putting-debut-before-thanksgiving/)、[Forkast — Anthropic's Public S-1 Still Missing From EDGAR as October IPO Window Opens](https://forkast.news/?p=131253)、[Parameter — Claude creator prepares $100B public offering ahead of Thanksgiving](https://parameter.io/claude-creator-prepares-100-billion-public-offering-ahead-of-thanksgiving/)、[Allocations — Anthropic S-1 Cap Table Shares Outstanding](https://www.allocations.com/insights/anthropic-s-1-cap-table-shares-outstanding-and-what-to-watch-before-the-ipo) | 對台灣一人 SaaS 開發者 2 階影響：若 Anthropic IPO 延至 11/16（T-22）或更後 → Claude Astra / Haiku 定價壓力推遲至 11 月下旬 + 一人 SaaS 選型「Claude Agent SDK 0.3.302 vs Vercel AI SDK 7」決策不受影響續行；per-project「Anthropic IPO EDGAR S-1 Deadline Day 落實追蹤 × 11/9 路演窗口 vs 11/16 延後情境分析 × 2T valuation vs 當前 965B 比值分析 × 100B expected proceeds 對 Claude API 定價影響鏈 × 感恩節 11/26 前上市 60/40 偏延後機率空間」5 合一 Live blog push NT$ 60K–180K per article | 機會：**「10/25 Anthropic IPO EDGAR S-1 Deadline Day 落實追蹤 × 11/9 路演 vs 11/16 延後情境分析 × 2T valuation 比值 FAQ × 100B proceeds 對 Claude API 定價影響鏈 × 感恩節 11/26 上市 60/40 偏延後機率空間 × Claude Agent SDK 0.3.302 vs Vercel AI SDK 7 選型不受影響 FAQ」6 合一 Live blog push NT$ 80K–220K per article**；甜蜜點 = 10/25 美東時間 09:00（台北 21:00）第 1 波「EDGAR 落實追蹤」push + 10/26 週日 10:00「11/9 路演窗口 vs 11/16 延後」push + 10/26 20:00「60/40 偏延後」blog + 10/27 週一「Day T+2 S-1 flip 最後 72 小時窗」push；威脅：Anthropic 可能選擇在美東週日晚（10/26）或週一早（10/27）flip S-1 → 落實觀察需跨 10/25–10/27 72 小時窗 + Yonhap 等預報來源曾出現「10/23」未落實的誤報風險、顧問服務需在 FAQ 註明「情境分析 vs 確定結論」區分 |
| **🔄 國發基金 100 億 AI 新創基金 10 案 2.4 億 政策容量未滿訊號續行 T+1 — 2026/9 數發部部長林宜敬 3/4 公告核定 5 家 6 案 7,500 萬 NT 續行 + 10 月初中央社報導「8 月底累計 10 家 2.55 億 NT + 民間投資 5.7 億 NT」+ 第 1 年投資速度偏慢「不到 0.1%」+ 單案最高額 NT$2 億 + 政策定位「10 年內 50 家 AI 獨角獸」+ 2026 預算 311 億 / 2027 預估 464 億 / 4 年合計 1,366 億 NT + 10 月 修正作業要點「放寬可投資於台灣境內執行主要營業活動的境外公司」+ StartupBlink[^StartupBlink] 2026 台灣由 25 升 20 名（+5 位）進入前 20 門檻** | [中央社 — 數發部百億 AI 投資方案 開放主要營運在台境外公司可納投](https://cna.com.tw/news/afe/202610040029.aspx)、[uanalyze — 數發部祭百億資金催生 AI 新創 100 片 GPU 算力池](https://uanalyze.com.tw/articles/1078148404)、[Business Next — 數發部 AI 新創 100 億計畫](https://www.bnext.com.tw/article/90239/moda-ai-startup-100billion-plan)、[TechNews — 百億 AI 基金首年僅投 7,500 萬 數發部公布 5 家獲投新創](https://technews.tw/?p=1520580) | 政策容量未滿訊號續行：第 1 年投資「不到 0.1%」= 剩餘 9 年 99.9%+ 可申請額度；放寬境外公司可納投意味台灣新創生態將納入海外華人 AI 新創；per-project「國發基金 100 億 AI 政策容量未滿 FAQ × 境外公司放寬納投條件 FAQ × 第 1 年 10 案平均 2,400 萬 vs 上限 2 億 8 倍成長空間 × 2027 預算 464 億政策追蹤 × StartupBlink 2026 台灣 20 名落地訊號」5 合一 vertical consulting NT$ 100K–380K per client | 機會：**「國發基金 100 億 AI 政策容量未滿 FAQ × 10 月放寬境外公司納投條件 × 10 案 2.4 億平均 2,400 萬 vs 上限 2 億 FAQ × 2027 預算 464 億 政策追蹤 × StartupBlink 2026 台灣 20 名落地訊號 × 50 家 AI 獨角獸 10 年目標分階段 KPI」6 合一 vertical consulting NT$ 100K–380K per client**；甜蜜點 = 10/25 下午寫「國發基金 100 億 AI 第 1 年進度不到 0.1% — 台灣一人 SaaS 的 3 個入口」blog + 10/27 Notion dashboard 嵌入 10 案 ROI 試算 + 境外公司放寬納投申請流程；威脅：第 1 年投資速度偏慢意味審核門檻可能高於預期 → 顧問服務需在前期揭露「2026–2027 核定率可能續低」風險；台灣目前無統一政策追蹤 dashboard，顧問服務可做差異化 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🆕 Cursor 新定價結構 10/12–13 PricingSaaS 單一 aggregator 捕獲（T+13）— Free / Plus $8 / Premium $30 / Super $100 / Ultra $200 / Teams $30+/user / Enterprise custom + 新 mid-tier 為 $100「Super」而非舊 $60「Pro+」+ pricing 層數由 4 層擴至 6 層 + 單一第三方 aggregator（PricingSaaS）10/12–10/13 captures 間抓到 + 官方 cursor.com/pricing 公告仍未查得 + Cursor forum / Reddit r/cursor 討論仍無聲** | AI IDE / 開發者 subscription 選型 / pricing restructure | 需 AI IDE 的 developer + 低門檻入門（Plus $8）或 Super $100 mid-tier；Ultra $200 深度用戶 | Plus $8 / Premium $30 / Super $100 / Ultra $200 / Teams $30+ / Enterprise custom（取代原 Hobby/Pro $20/Pro+ $60/Ultra $200/Teams $40） | vs Claude Code CLI v2.1.302（Anthropic 自家）/ Codex Cloud（OpenAI）/ Windsurf / Zed；差異在「6 層訂閱結構擴展 + Plus $8 低門檻入門 + Super $100 新 mid-tier」3 件齊發 | 🟢 現用 Pro $20 用戶：**今日 Day 7 試裝 — 比對「Super $100 可用的 fast request 配額 vs 原 Pro $20」實際試用結果，等 Reddit 社群第一手回報**；🟡 現用 Pro+ $60：Pro+ 已被 Super $100 取代、需升級或降至 Premium $30；🔴 Ultra $200 用戶：維持原方案；本週可做「Cursor 10/12–13 pricing 大改 FAQ + 新舊方案選型決策樹」blog + 顧問接案 |
| **🔄 Claude Agent SDK TypeScript 0.3.302 續延燒 T+9（2026-10-16 ship）+ Python 0.2.168（10/15）— 新功能：nested subagents with caps（避免無限遞迴）+ SessionStore（跨 session 儲存狀態）+ skills（可組合技能）+ plugins + structured outputs + permission defaults + 版本綁定 Claude Code CLI v2.1.302** | TypeScript / Python Agent 框架 / 一人 SaaS 底層 / nested subagent 架構 | 需 nested subagents 架構 + 跨 session 狀態 + 可組合 skills + 結構化輸出 + 權限邊界細緻的 agent | SDK 開源免費；Claude API 計費另計；Claude Code CLI 綁同版號 | vs Vercel AI SDK 7 WorkflowAgent（durable storage execution state）/ OpenAI Agents SDK（Python/TS，Agent Builder 11/30 遷移目標）；差異在「nested subagents with caps + SessionStore + skills + plugins」4 件齊發 | 🟢 使用 Claude Code 的一人 SaaS：**今日 Day 7「Claude Agent SDK 0.3.302 vs Vercel AI SDK 7」3,500 字對照 blog 寫作日**；🟡 現用 Vercel AI SDK 7：可平行試裝「Claude Agent SDK nested subagents vs WorkflowAgent durable storage」最小對照；🔴 深度依賴 LangGraph：Claude Agent SDK 0.3.302 + Vercel AI SDK 7 已形成「TS Agent 底層 2 強」競爭，2–4 週內評估遷移成本 |
| **🔄 Vercel AI SDK 7（2026-06-25 GA + 7.0.143 現版）— WorkflowAgent 類別支援 durable storage execution state（存活 deploy / process restart / interruption / delayed approval）+ Timeouts 可設 total / per-step / per-chunk / default tool / per-tool + 整合 Codex / Claude Code / Deep Agents / OpenCode / Pi 等 agent harness + Human approval / sandbox 內建 + MCP Apps + 終端 UI + provider-agnostic realtime voice/video + 遷移路徑 `npx @ai-sdk/codemod v7`** | TypeScript Agent 框架 / Next.js SaaS 底層 / durable agent runtime | 需 durable WorkflowAgent + 跨 restart / approval delay / sandbox 的 production agent + Next.js 內嵌 agent | AI SDK 7 本體開源免費；API 計費另計；Vercel 托管費另計 | vs Claude Agent SDK 0.3.302（nested subagents with caps + SessionStore + skills）/ OpenAI Agents SDK；差異在「durable WorkflowAgent + 跨 harness 整合 + MCP Apps + realtime voice/video + 可設 5 種 timeouts」 | 🟢 Next.js 一人 SaaS：**今日 Day 7 續昨 Day 6 的 WorkflowAgent + Codex harness PoC**；🟡 平行試裝 Claude Agent SDK 0.3.302 nested subagents 做對照；🔴 深度依賴 LangGraph：v7 的 durable WorkflowAgent 是直接競品，2–4 週內評估 |
| **🔄 OpenAI Agent Builder → Agents SDK 遷移路徑第三方確認 T-36 — Agents SDK（Python/TypeScript）為官方優先遷移目標 + ChatGPT Workspace Agents 為第 2 路徑 + ChatKit 不受影響續行 + Responses API 不受影響續行 + code export「starting point only」續行 + 第三方（pickaxe.co / StackOne）確認「no full conversion」+ workflow graph parity + branching + handoffs 需人工重驗 + shutdown 11/30 後失去 UI 編輯 / 測試 / 操作 workflow graph 權限** | AI agent 平台 / 11/30 EOL 遷移 crunch | 現用 Agent Builder 的工程師需 11/30 前完成遷移至 Agents SDK（code）或 ChatGPT Workspace Agents（no-code） | Agents SDK 開源免費；API 計費另計；Workspace Agents 跟隨 ChatGPT Workspace plan | vs Claude Agent SDK 0.3.302（Anthropic 自家）/ Vercel AI SDK 7 WorkflowAgent（第 3 方 TS）；差異在「workflow graph 需人工重建、no auto-conversion」 | 🟢 現用 Agent Builder 的台灣團隊：**今日 Day 7 Agents SDK scaffold 遷移第二輪驗證**；🟡 ChatGPT Workspace Agents 轉接目標：可平行試裝；🔴 遷移 crunch：11/30 失去 UI 權限、本週可做「Agent Builder → Agents SDK 遷移 FAQ」blog + 顧問接案 |
| **🔄 Haiku 5.5 production ramp Week 2 Day 1 T+18 — Vals Index 54.31% + Refusal Rate 0.22% + Artificial Analysis Intelligence Index 43 at max effort + OSWorld 72.4% + Terminal-Bench 39.2% max effort + Over-refusal fix 仍無完成訊號（10 月中旬第三方 benchmark 續引用 Terminal-Bench 1.8% refusal = 12/660 samples）+ AutomationBench-AA 35% 待重測 + 1M context + 128K output + Claude Code v2.1.293 預設整合（10/8）+ Claude Agent SDK 0.3.302 新選型支持 nested subagents** | LLM 小模型 / 高頻 subagent / production ramp Week 2 Day 1 | 短 context（≤100K）分類、摘要、轉譯、label normalize；effort levels 可調推理深度；nested subagent 架構底層 | $0.10/M in + $0.50/M out（≤100K）；$0.50/M in + $2.50/M out（>100K）；cache reads $0.01/M | vs Haiku 4.5（OSWorld 15.7%）跳升 56.7 ppt；vs Sonnet 5.5 Terminal-Bench 2 倍差距；vs Sol 6.1 Haiku 便宜 1/20；AutomationBench-AA 35% vs 對手 53–60%；Claude Agent SDK 0.3.302 下可做 nested subagents | 🟢 T+18 production ramp Week 2 Day 1：切第 7 條「nested subagent（Claude Agent SDK 0.3.302 + Haiku 5.5）」或擴至轉譯 workflow；🟡 effort levels：low 分類 / high 摘要 / low 轉譯 / low 標準化 / low 標籤 / medium nested subagent；🔴 禁區：agentic coding + Terminal + >100K + refusal 敏感；本週可擴至 10 條 production subagent |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：Anthropic IPO EDGAR S-1 Deadline Day 落實追蹤 Live blog + 11/9 路演 vs 11/16 延後情境分析 + 2T valuation 比值 FAQ 🆕

- **痛點來源**：Anthropic IPO EDGAR S-1 Deadline 落在今日（10/25），若 EDGAR 仍無公開 S-1 → 11/9 路演窗口技術上不可達成、11/26 感恩節前上市進入「60/40 偏延後」機率空間；Bloomberg 11/9 roadshow 續行、2 trillion valuation + 100B expected proceeds + 承銷 Goldman / Morgan Stanley / JPMorgan / Citigroup + confidential 自 6/1 起 146 天 + 10/22 Yonhap 預報「10/23 可能」未落實 + 10/4 Forkast 「IPO slipped from October to November」續行；台灣中文媒體 Anthropic IPO 落實追蹤近乎零
- **目標客群**：台灣 AI 新創開發者（估 5,000 家）+ 關注 Anthropic / Claude API 定價變化的一人 SaaS（估 2,000 家）+ 蘋概股 / AI 類股投資人（估 10,000 人）+ 跨境投資 SaaS 用戶（估 3,000 家）+ 台灣 Claude Code / Claude Agent SDK 用戶（估 2,000 家）
- **技術複雜度**：2/5 — service business + 文件整理；Node.js + EDGAR / SEC 公開 API scraping + Bloomberg / Reuters 追蹤 + Notion dashboard + Twitter / Threads 自動 push + Google Sheets 嵌入 2T valuation 比值試算
- **預估 MRR**：one-off NT$ 60K–180K per article × 2–4 articles / week = NT$ 120K–720K；若做訂閱式「Anthropic IPO + Claude API 定價追蹤 dashboard」→ NT$ 1,000/mo × 300 用戶 = NT$ 300K MRR
- **競品弱點**：台灣中文媒體 Anthropic IPO 落實追蹤近乎零；多數財經媒體偏向 US 市場視角、缺台灣一人 SaaS 影響鏈分析；多數 developer 不清楚「15 日公開揭露規定」倒推 11/9 路演窗口的技術限制；多數分析師只做 valuation 比值、缺情境分析（11/9 vs 11/16 vs 更後）
- **切入建議**：10/25 美東時間 09:00（台北 21:00）第 1 波「EDGAR 落實追蹤」push → 10/26 週日 10:00「11/9 路演窗口 vs 11/16 延後」push → 10/26 20:00「60/40 偏延後」blog → 10/27 週一「Day T+2 S-1 flip 最後 72 小時窗」push → 11/9 roadshow 日 Live blog → 11/16 延後情境 Live blog → 11/26 感恩節前上市最終觀察日 Live blog；分銷 Twitter / Threads / LinkedIn / Facebook Taiwan Developers Group / Dcard 投資版 / PTT Stock 版

### 點子 2：Cursor 10/12–13 pricing 大改 FAQ + 新舊方案選型決策樹 + Super $100 vs Ultra $200 fast request 配額對照 🆕

- **痛點來源**：Cursor 新定價結構 10/12–13 PricingSaaS 單一 aggregator 捕獲 → Free / Plus $8 / Premium $30 / Super $100 / Ultra $200 / Teams $30+/user / Enterprise custom（取代原 Hobby/Pro $20/Pro+ $60/Ultra $200/Teams $40 結構）；pricing 層數由 4 層擴至 6 層 + 新 mid-tier 為 $100「Super」而非舊 $60「Pro+」+ 單一第三方 aggregator 10/12–10/13 captures 間抓到 + 官方 cursor.com/pricing 公告仍未查得 + Cursor forum / Reddit r/cursor 討論仍無聲 → 台灣 Cursor 用戶（估 10,000+）無法確定新舊方案差異、fast request 配額是否變動、Super $100 是否值得升級
- **目標客群**：台灣 Cursor Pro $20 用戶（估 5,000 家）+ Cursor Pro+ $60 用戶（估 2,000 家）+ Cursor Ultra $200 用戶（估 500 家）+ Cursor Teams 用戶（估 1,000 家）+ 考慮從 Copilot / Windsurf / Zed 轉入 Cursor 的 developer（估 3,000 家）+ 一人 SaaS 工程師（估 2,000 家）
- **技術複雜度**：2/5 — service business + 文件整理；Node.js + Cursor API 試用 + Super $100 vs Ultra $200 fast request 配額對照試驗 + Notion / Google Sheets 嵌入選型決策樹 + Twitter 自動 push + Reddit r/cursor 社群追蹤
- **預估 MRR**：免費版 + Pro NT$299/mo（進階試算 + fast request 配額追蹤 + 多情境比較）× 100–500 用戶 = NT$ 30K–150K MRR；若接企業採購顧問 → NT$ 20K–60K per client × 2–5 clients / month = NT$ 40K–300K one-off
- **競品弱點**：全球有 PricingSaaS、aicoolies 等 pricing 整理頁，但缺「10/12–13 restructure 新舊方案對照 + Super $100 vs Ultra $200 fast request 配額對照」；台灣在地中文無類似工具；多數 developer 不清楚「Super $100 mid-tier 取代 Pro+ $60」的升級壓力
- **切入建議**：10/25 Day 7 試裝 Super $100 vs Ultra $200 做 1 條 production subagent 對照 → 10/26 Day 8「Cursor 10/12–13 pricing 大改 FAQ + 新舊方案選型決策樹」blog 第一稿 → 10/27 Day 9 Notion / Google Sheets 嵌入「fast request 配額對照 + 升級門檻 ROI 試算」→ 11/02 Week 3 Pro 版 landing + 開放企業採購顧問接案；分銷 Twitter / HN / Reddit r/cursor / Facebook Taiwan Developers Group

### 點子 3：Evals read-only T-6 crunch Day 7 加價接案 landing 第二稿 + Promptfoo vs Langfuse v4 對照 blog 續行 🔄

- **痛點來源**（接續 10/16–10/24 brief 點子 2）：OpenAI Evals 10/31 00:00 UTC 進入 read-only（T-6 進入倒數個位數下半） + 11/30 下線 + reusable prompts 同下線 + Agent Builder EOL T-36 + 官方 deprecations 頁指向 Promptfoo 為遷移目標 + Datasets 為實驗替代 + Langfuse v4 推出獨立 migration guide 新選項 + OpenAI cookbook 要求「eval 已完整 run 過」才能匯出 runnable config + 第三方確認 Agent Builder「no full conversion」= workflow graph parity + branching + handoffs 需人工重驗；若未在 10/31 前完成 dataset 匯出 → 11/01 起 read-only
- **目標客群**：以 OpenAI Evals 建 production LLM eval pipeline 的台灣中小企 / SI 顧問案（10–50 人規模，估 150–400 家）+ reusable prompts 11/30 同下線用戶群 + Agent Builder 遷移用戶群 + ChatGPT Workspace Agents 轉接目標 + Langfuse / Promptfoo 選型未定群
- **技術複雜度**：3/5 — service business + CLI 工具；OpenAI Evals API dataset 匯出 + reusable prompts 匯出 + Promptfoo migration scaffold + Langfuse v4 YAML 匯入 + Agents SDK TypeScript / Python workflow re-architecture + 遷移 checklist 可模板化 + workflow graph parity 人工重驗
- **預估 MRR**：N/A（one-off NT$ 60K–250K per client × 2–4 clients / month）；加上「10/26–10/30 Evals 遷移週」加價 20–40% 可達 NT$ 80K–350K per client；若做「Evals dataset 匯出 CLI + Promptfoo / Langfuse v4 選型工具」產品 → NT$ 2,000 one-off × 50 位客戶 = NT$ 100K
- **競品弱點**：台灣尚無針對 Evals read-only T-6 的專門 CLI 工具 + 顧問服務；多數 SI 顧問做「新建」而非「遷移」；OpenAI 官方 migration guide 只給框架、缺台灣在地整合顧問；Promptfoo + Langfuse v4 兩套遷移目標中文整合文件接近零；workflow graph parity 人工重驗需「visual to code」顧問經驗
- **切入建議**：10/25 Day 7 加價 20–40% 接案 landing 第二稿公開 + Langfuse v4 新選項補入 landing + 「no full conversion」workflow graph parity 人工重驗提醒補入 → 10/26 Day 8「10/26–10/30 Evals 遷移週」正式開啟 → 10/27 Day 9「Promptfoo vs Langfuse v4 Evals migration」3,000 字對照 blog → 11/01 進入「Agent Builder EOL 最後 29 天 crunch」接案 → 11/30 EOL 前 1 週關閉接案

### 點子 4：Claude Agent SDK 0.3.302 vs Vercel AI SDK 7 TS Agent 底層對照 blog 3,500 字 + nested subagents PoC + WorkflowAgent + Codex harness 整合 🔄

- **痛點來源**（接續 10/24 brief 點子 3）：Claude Agent SDK TS 0.3.302（10/16，T+9）+ Python 0.2.168（10/15）引入 nested subagents with caps、SessionStore（跨 session 狀態）、skills（可組合技能）、plugins、structured outputs、permission defaults；版本綁 Claude Code CLI v2.1.302；台灣中文技術 blog 仍停在 0.2.x 版本描述；此版本功能直接對應 Vercel AI SDK 7 WorkflowAgent 的 durable storage 定位，形成「TS Agent 底層 2 強」競爭；Vercel AI SDK 7 WorkflowAgent 可設 5 種 timeouts（total / per-step / per-chunk / default tool / per-tool）為額外差異軸
- **目標客群**：使用 Claude Code 的台灣一人 / 2–3 人 SaaS 團隊（估 2,000 家）+ 使用 Next.js + Vercel AI SDK 7 的 developer（估 2,000 家）+ 使用 LangGraph / LangChain 的 developer（估 500 家）+ 建 agentic SaaS 架構的工程師（估 500 家）+ 需 nested agent / durable storage 的 SI 顧問案（估 150 家）
- **技術複雜度**：3/5 — TypeScript + Claude Agent SDK 0.3.302 + nested subagents（with caps）設計 + SessionStore 跨 session 狀態 + skills 可組合技能 + Vercel AI SDK 7 WorkflowAgent + Codex harness 整合 + 5 種 timeouts 配置 + 平行對照；1–2 週可做 PoC
- **預估 MRR**：one-off NT$ 50K–150K per client × 2–4 clients / month = NT$ 100K–600K；若做訂閱式「nested subagent + WorkflowAgent 架構維護」→ NT$ 3K–8K/mo × 30–100 clients = NT$ 90K–800K MRR
- **競品弱點**：台灣尚無針對「Claude Agent SDK 0.3.302 nested subagents / SessionStore / skills vs Vercel AI SDK 7 WorkflowAgent」3,500 字對照 blog；多數 developer 不清楚「0.3.302 新版已 ship」；LangGraph 中文教學仍是 2025 版本；Vercel AI SDK 7 中文教學零星且無與 Claude Agent SDK 的平行對照；5 種 timeouts 配置 vs permission defaults 細節無人整理
- **切入建議**：10/25 Day 7「Claude Agent SDK 0.3.302 vs Vercel AI SDK 7」3,500 字對照 blog 第一稿寫作日（nested subagents vs WorkflowAgent、SessionStore vs durable storage、skills vs harness、permission defaults vs 5 種 timeouts）→ 10/26 週日 Day 8 寫完 → 10/27 週一 Day 9 公開 + nested subagents + Codex harness PoC 併發 → 11/02 Week 3 Pro 版 landing + 開放 2–3 位免費諮詢 → 11/09 Week 3 Day 15 開始接案

## 🧰 工具堆疊更新

- **🔄 Anthropic IPO EDGAR S-1 Deadline Day Live blog push**：10/25 美東時間 09:00（台北 21:00）第 1 波「EDGAR 落實追蹤」push + 10/26 週日 10:00「11/9 路演窗口 vs 11/16 延後」push + 10/26 20:00「60/40 偏延後」blog + 10/27 週一「Day T+2 S-1 flip 最後 72 小時窗」push
- **🔄 iPhone Duo 10/25 Day 3 Weekend T+2**：10:00「Day 3 Weekend 二手溢價回落 Live」push + 14:00「週末轉售買家 FAQ」push + 20:00「Day 3 收尾 vs Day 1–2 對比」push；10/26 週日 Day 4 10:00「Weekend 2 Day 收尾盤後分析」blog + 20:00「Day 4 補貨時程更新」push
- **🆕 Cursor 10/12–13 pricing 大改試裝**：今日 Day 7 試裝 Super $100 vs Ultra $200 做 1 條 production subagent 對照；10/26 Day 8 FAQ + 選型決策樹 blog 第一稿
- **🔄 Claude Agent SDK 0.3.302 vs Vercel AI SDK 7 對照 blog 第一稿**：今日 Day 7 寫作日；10/26 寫完；10/27 公開
- **🔄 Evals read-only T-6 crunch Day 7 加價接案 landing 第二稿**：Langfuse v4 新選項 + workflow graph parity 人工重驗提醒補入；10/26 Day 8 進入「10/26–10/30 Evals 遷移週」最後 5 日工作日
- **🔄 Vercel AI SDK 7 WorkflowAgent + Codex harness PoC**：續上週 Day 6 工作；今日 Day 7 可平行試裝與 Claude Agent SDK 0.3.302 對照 + 5 種 timeouts 配置
- **🔄 Haiku 5.5 T+18 production ramp Week 2 Day 1**：切第 7 條「nested subagent（Claude Agent SDK 0.3.302 + Haiku 5.5）」或擴至轉譯 workflow；effort levels 配置 low 分類 / high 摘要 / low 轉譯 / low 標準化 / low 標籤 / medium nested subagent
- **🔄 Agent Builder → Agents SDK 遷移 crunch T-36**：本週剩 1 日工作時間 → 10/27 進入 Week 3；code export scaffold → Agents SDK TypeScript / Python 選型；workflow graph parity 人工重驗

## ⚡ 今日行動建議

- [ ] Anthropic IPO EDGAR S-1 Deadline Day Live：21:00 第 1 波「EDGAR 落實追蹤」push（預期 2 小時 Live 工作）
- [ ] iPhone Duo 10/25 Day 3 Weekend Live：10:00 二手溢價回落 Live + 14:00 週末轉售買家 FAQ + 20:00 Day 3 收尾對比（預期 3 小時 Live 工作）
- [ ] Cursor 10/12–13 pricing 大改 Super $100 vs Ultra $200 fast request 配額試裝（預期 1.5 小時）
- [ ] Claude Agent SDK 0.3.302 vs Vercel AI SDK 7 對照 blog 3,500 字第一稿（預期 3 小時）
- [ ] Evals read-only T-6 加價接案 landing 第二稿 + Langfuse v4 新選項補入 + workflow graph parity 人工重驗提醒補入（預期 1.5 小時）
- [ ] Haiku 5.5 production ramp Week 2 Day 1：切第 7 條「nested subagent（Claude Agent SDK 0.3.302 + Haiku 5.5）」（預期 1 小時）
- [ ] 寫 1 篇中文 build-in-public：「Anthropic IPO EDGAR S-1 Deadline Day 落實追蹤」或「Cursor 10/12–13 pricing 大改 FAQ + 新舊方案選型決策樹」

## ⏳ 待觀察

- 10/25 全天：**Anthropic IPO EDGAR 公開 S-1 Deadline Day T±0**（11/9 路演倒推 15 天最後落實日）— 若今日仍無 → 11/9 路演窗口技術上不可達成、11/16 延後為基線
- 10/26 美東晚間至 10/27 美東上午：Anthropic S-1 flip 最後 72 小時窗 — 若 10/27 EDGAR 仍無 → 11/9 路演延至 11/16 或更後確認
- 10/26 週日 Day 4：iPhone Duo 第 1 個 Weekend 2 Day 收尾盤後分析（Day 1–4 累計缺口、二手溢價回落速度、Apple 補貨時程）
- 10/27 週一：若 10/25 EDGAR 無公開 S-1 → 「期中選舉後路演延至 11/16」訊號確認窗口開啟
- 10/31：OpenAI Evals read-only — T-6 倒數個位數下半；是否可延期尚無官方口徑
- 11/3：美國期中選舉 — Anthropic IPO 路演起點前的最後政治 trigger
- 11/9：Anthropic IPO 期中選舉後路演可能日 — S-1 flip（EDGAR）仍為先行觀察訊號
- 11/26：**感恩節 — Anthropic IPO 最終期限（Bloomberg 口徑）**，若 11/9 未路演 → 11/16 或更後
- 11/30：OpenAI Agent Builder + Evals + reusable prompts 三件事一次下線 — T-36 倒數
- Q4 底：Google Gemini 3.5 Pro / Gemini 4 預期落地 — 無新 October 訊號續行；若 Q4 底前落地 → 3 大供應商重排 trigger
- Haiku 5.5 Over-refusal fix：Anthropic 修補時程、AutomationBench-AA 重測結果（10/25 續 skip、無新進展）
- Supabase Compute：hosted sandbox 定價（T+23 仍未公開）
- Cursor 10/12–13 pricing restructure 官方 cursor.com/pricing 公告 + Reddit r/cursor / HN 社群第一手回報：Super $100 vs Ultra $200 fast request 配額對照、Plus $8 低門檻入門用戶實際反應
- OpenAI dots agent / Codex Cloud / Codex Security Cloud 定價明細：Pro + business premium 以外開放時程
- OpenAI Decisions API：limited preview 展開時程、具體用途與 pricing
- 國發基金 100 億 AI 第 1 年 vs 第 2 年：2027 預算 464 億是否能把平均核定提升至上限 2 億；10 月修正作業要點放寬境外公司納投條件後實際核定率
- MCP Registry 統計：16,967 servers 續成長至 Q4 2026 底的規模；Smithery 是否開始 pull from 官方 registry；2026-07-28 MCP spec revision 對 vendor 落實度（Vercel MCP + JupiterOne MCP 2.0 已跟）

## 📚 引用來源

1. [Implicator — Anthropic could start IPO roadshow week of Nov 9](https://www.implicator.ai/anthropic-could-start-ipo-roadshow-week-of-nov-9-putting-debut-before-thanksgiving/) — 2026-10
2. [Forkast — Anthropic's Public S-1 Still Missing From EDGAR as October IPO Window Opens](https://forkast.news/?p=131253) — 2026-10-04
3. [Parameter — Claude creator prepares $100B public offering ahead of Thanksgiving](https://parameter.io/claude-creator-prepares-100-billion-public-offering-ahead-of-thanksgiving/) — 2026-10
4. [Allocations — Anthropic S-1 Cap Table Shares Outstanding](https://www.allocations.com/insights/anthropic-s-1-cap-table-shares-outstanding-and-what-to-watch-before-the-ipo) — 2026-10
5. [LeverageShares — Anthropic IPO Tracker](https://leverageshares.com/us/anthropic-ipo-tracker/) — 2026-10
6. [unwire — iPhone Duo scalpers resale price drop](https://unwire.hk/2026/10/20/iphone-duo-scalpers-resale-price-drop/mobile-phone/) — 2026-10-20
7. [中央社 — iPhone Duo 中國市場熱銷 發貨排至明年、黃牛價高漲](https://www.cna.com.tw/news/acn/202610170102.aspx) — 2026-10-17
8. [Dexerto — Apple's iPhone Duo preorders are reselling for thousands more as shipping slips to January](https://www.dexerto.com/entertainment/apples-iphone-duo-preorders-are-reselling-for-thousands-more-as-shipping-slips-to-january-3419373/) — 2026-10
9. [iFeng Tech — 博主號召大家抵制黃牛：iPhone Duo 溢價別接盤](https://tech.ifeng.com/c/8xLYzIPXYMO) — 2026-10
10. [PricingSaaS — Cursor Pricing Plans & History 2026](https://pricingsaas.com/companies/cursor) — 2026-10
11. [PricingSaaS — Cursor plan overhaul 10/12-13 diff](https://pricingsaas.com/companies/cursor/diffs/2026D286) — 2026-10-13
12. [SpendHound — Actual Cursor Pricing 2026](https://www.spendhound.com/marketplace/cursor-pricing) — 2026-10
13. [OpenAI Developers — Evals Guide](https://developers.openai.com/api/docs/guides/evals) — 2026
14. [OpenAI Developers — Deprecations](https://developers.openai.com/docs/deprecations) — 2026
15. [Pickaxe — OpenAI Agent Builder Deprecation](https://pickaxe.co/post/openai-agent-builder-deprecation) — 2026
16. [StackOne — AI Agent Builder Sunset](https://www.stackone.com/blog/ai-agent-builder-sunset/) — 2026
17. [Langfuse — Migrate from OpenAI Evals](https://langfuse.com/resources/engineering/migrate-from-openai-evals) — 2026
18. [Vercel Blog — AI SDK 7](https://vercel.com/blog/ai-sdk-7) — 2026-06-25
19. [Vercel Changelog — AI SDK 7 is now available](https://vercel.com/changelog/ai-sdk-7) — 2026-06-25
20. [DevelopersDigest — Claude Agent SDK 2026 What's New](https://www.developersdigest.tech/blog/claude-agent-sdk-whats-new-2026) — 2026-10
21. [中央社 — 數發部百億 AI 投資方案 開放主要營運在台境外公司可納投](https://cna.com.tw/news/afe/202610040029.aspx) — 2026-10-04
22. [uanalyze — 數發部祭百億資金催生 AI 新創 100 片 GPU 算力池](https://uanalyze.com.tw/articles/1078148404) — 2026-10
23. [Business Next — 數發部 AI 新創 100 億計畫](https://www.bnext.com.tw/article/90239/moda-ai-startup-100billion-plan) — 2026
24. [TechNews — 百億 AI 基金首年僅投 7,500 萬 數發部公布 5 家獲投新創](https://technews.tw/?p=1520580) — 2026
25. [Shopify Dev — Checkout WebMCP](https://shopify.dev/docs/agents/carts-and-checkout/checkout-webmcp) — 2026-09-28
26. [ThePaypers — Shopify extends WebMCP support to checkout for AI agents](https://thepaypers.com/payments/news/shopify-extends-webmcp-support-to-checkout-for-ai-agents) — 2026
27. [cdata — The 2026-07-28 MCP Release Explained](https://www.cdata.com/blog/mcp-2026-07-28-release) — 2026-07
28. [HackerNoon — MCP's 2026 Update Makes Remote Servers Easier to Scale](https://hackernoon.com/mcps-2026-update-makes-remote-servers-easier-to-scale) — 2026

[^15日公開揭露]: 美國《JOBS Act》對 emerging growth company 的規定：若 IPO 公司選擇以 confidential submission 方式提交 S-1，必須在正式路演（roadshow）開始前至少 15 日把所有 draft submission 的完整版本公開揭露於 EDGAR；一旦 S-1 從 confidential 翻為 public，承銷團與機構投資人才能依法對外推介。對 Anthropic 這類仍在 confidential 階段的公司，公開揭露日的早晚直接決定路演與定價時間表。

[^promptfoo]: 開源 LLM eval 框架，以 YAML 檔描述 prompt、資料集、模型與 assertion 三軸矩陣，CLI 一行即可跑 regression 並輸出比對報告；OpenAI 2026-10 deprecations 頁明文指為 Evals 2026-11-30 下線後的官方建議遷移目標之一。

[^nested-subagents]: Claude Agent SDK 0.3.302 新增的子代理機制：允許一個 agent 在單次執行中遞迴呼叫其他 agent 當子工具；caps 為最大深度、並行數、token 預算等上限參數，用來避免 agent 自我呼叫無限遞迴耗盡算力，是對 Vercel AI SDK 7 WorkflowAgent 的直接對打設計。

[^session-store]: Claude Agent SDK 0.3.302 新增的跨 session 狀態儲存介面：將 agent 的工作記憶、工具呼叫結果、使用者偏好序列化到本地檔案或 KV store，下次啟動時 resume 續跑；對應 Vercel AI SDK 7 的 durable storage execution state，形成 TS Agent 底層的雙強競爭。

[^WorkflowAgent]: Vercel AI SDK 7 於 2026-06-25 GA 導入的 agent 類別，核心能力是 durable storage execution state：把 agent 執行進度、中間輸出、工具呼叫記錄持久化到外部儲存，deploy、process restart、使用者 approval 延遲都能從同一點續跑，另外還支援 total / per-step / per-chunk / default tool / per-tool 五種 timeouts 的 workflow runtime。

[^StartupBlink]: 位於瑞士的新創生態系調研機構，每年公布 Startup Ecosystem Index，以 quantity（新創數量）、quality（估值與退出）、business environment（政策與基建）三軸對逾 100 國、1,000 個城市打分，是全球被引用度最高的國家級新創排名之一；台灣 2026 年由第 25 名升至第 20 名的數據即出自此機構。
