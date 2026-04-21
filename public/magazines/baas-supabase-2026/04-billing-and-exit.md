---
title: Spend Cap 蓋不住的命門：Supabase 的帳單與退路
order: 4
date: 2026-04-22
summary: Spend Cap 不管 compute / PITR / egress 的結構性坑、$0.09/GB egress 的爆量情境，以及 Convex、Neon、自架 Docker 三條退路分別適合誰。
---

# Spend Cap 蓋不住的命門：Supabase 的帳單與退路

## TL;DR

- Spend Cap 的官方排除清單共 **11 項**，其中 Compute、PITR、IPv4、Read Replica、Log Drain 都在名單上——這意味「打開 Spend Cap 就安全」是誤解。
- 真正會爆帳單的是兩條結構性縫隙：閒置副專案的 **compute 小時在背景累積**（有人取消 Pro 後仍被收 $22.85），以及 **$0.09/GB egress** 在媒體流場景炸裂（某小型 ETL 3 天燒光 5GB 免費額度）。
- 退路有三條且各自適合不同型別的團隊：Convex（重函式、輕 DB 的 AI app）、Neon（純 Postgres + scale-to-zero 多環境）、自架 Docker（法遵或 compute 吃重又捨不得 $110/月 Large instance 的團隊）。

## 先講具體爆雷：三種最常見的意外帳單

**情境 1：取消 Pro 後還繼續被扣**。一位開發者在 DEV.to 寫了篇流傳甚廣的離職文：7 月 29 日取消 Pro plan 當晚仍被收 $22.85，客服回覆「我們是事後計費（in hindsight），上一個週期的 compute hours 尚未結算」，並且「compute usage fees are unfortunately non-refundable」。這位用戶有 4 個閒置 side project，每個都在背後跑 compute hours——Pro plan 的 $10 compute credit 只 cover 一個專案的主資料庫，其餘 3 個全按時計費。

**情境 2：媒體 / 圖像應用的 egress 爆量**。Supabase 的 egress 報價是 **$0.09/GB uncached、$0.03/GB cached**（截至 2026-04 為官方牌價），Pro plan 包 250GB。看起來很多，但算一下就知道：5,000 個使用者各下載一個 50MB 音檔，剛好 250GB、整月額度見底。另一個現實例子：某 marketplace 每月 100K 訪客、人均拉 3MB 圖片 → 300GB → 超額 $4.50；但衝到 500K 訪客就是 **$112.50/月** 只為了圖片流量。Fly.io 社群有人回報一個很小的 ETL 測試、只跑 dummy data，3 天就把免費 5GB 額度吃光。

**情境 3：你以為打開 Spend Cap 就安全**。Reddit / GitHub Discussions 上最常見的 $36 左右小額超收、image transformation 意外計費、compute 帳單跳 $22—$110 不等，這些全都有個共通點：**Spend Cap 並不覆蓋這些項目**。

## 定價結構為什麼會漏：Spend Cap 的白名單不是你想的那樣

Supabase 官方的 Spend Cap 文件寫得很清楚，**以下項目不在 Cap 的保護範圍內**（截至 2026-04）：

- Compute、Branching Compute、Read Replica Compute
- Point-in-Time Recovery
- IPv4 address
- Custom Domain
- 額外 Provisioned Disk IOPS / Throughput
- Log Drain Hours、Log Drain Events
- MFA Phone

官方的說詞是這些項目「predictable and explicitly opted into by the user」——你自己點了就要付。邏輯上成立，但三個坑直接疊在一起：

1. **Compute 是連續計費**。即使資料庫完全閒置、0 連線、0 query，instance 開著就是一小時一小時在跑。Pro 的 $10 credit 只夠抵一個 Micro 專案整月，副專案、測試環境、忘了刪的 branch 一律另計。
2. **升級到 Small / Large 的閥值很低**。PITR 要求 Small 起跳；production 稍微認真一點的團隊常常升到 Large，**約 $110/月、扣掉 $10 credit 實收 $100**，一下就讓「$25 Pro」變成 $125 起。
3. **事後計費 + 非退款**。Compute 是後付，所以就算你今天關掉專案，下個月還會有一張尾款；且官方立場是這種 usage fee 不退。

把這三條拼起來就是：你看到的帳單永遠比你以為的貴一截，而且 Spend Cap 的綠燈只是心理安慰。

## 退路地圖：Convex、Neon、自架 Docker 誰適合誰

| 退路 | 起價 | 計費重點 | 優勢 | 放棄什麼 |
| --- | --- | --- | --- | --- |
| Convex Pro | **$25 / developer / 月** | 按 compute GB-hours + function calls | 單一 TypeScript 後端、reactive DB、25M function calls/月 | Postgres 生態、SQL、pgvector 外掛 |
| Neon | 有 Free tier，Scale plan 起 | 按 compute second + storage | Serverless Postgres、branching、scale-to-zero | 沒有 Auth / Storage / Realtime / Edge Functions |
| Self-host Supabase（Docker） | VPS 成本（≈$20–80/月） | 按機器算 | 保留整套 API、無 per-project compute 收費 | 自己扛 backup、監控、升級、migration |

**什麼團隊適合 Convex**：backend 重在「函式執行邏輯」而非「SQL 複雜查詢」、已經 all-in TypeScript、AI agent 需要 reactive 狀態同步——Convex 的 25M function calls、250 GB-hours action compute、免費 startup 方案（合資格的早期公司可拿一年 Professional）非常對味。缺點：你放棄 Postgres 全家桶，RAG 要用它自家的 vector search，跟既有 pgvector 程式不通。

**什麼團隊適合 Neon**：你要的其實只是 Postgres，不是 BaaS。Neon 把 compute / storage 分離、支援 branching、閒置自動 scale-to-zero——對多環境（dev / staging / preview）特別划算，因為不用像 Supabase 那樣每個 branch 都在背景燒 compute。代價是你得自己拼 Auth（Clerk / Auth.js）、Storage（R2 / S3）、Realtime（Ably / Pusher），整個 stack 會變散，但每塊可以各自 best-of-breed。

**什麼團隊適合自架 Docker**：compute-heavy 又預算敏感（例如固定跑 ML inference 的 background job）、有法遵要地端、或單純是團隊有 DevOps 能力且不想被 per-project 計費綁。官方給了完整 Docker Compose 一鍵起，但 GitHub Discussions 上真實回饋很明確：**初始 8–16 小時設定、每月 2–4 小時維運**，最大痛點是「現有 data directory 不會 re-run 新 migration」——版本升級在 production 是驚悚片。Analytics container 也常吃爆 CPU / RAM。Hobbyist 別碰，**真的要有一個願意打開 terminal 的人**。

## 什麼新創應該留下：判斷準則

不是所有人都該跑。Supabase 在這四種情境仍然是值回票價的：

1. **速度 > 成本**。Pre-PMF、每月營收 < $10K 的團隊，省下的 engineering time 遠超過每月可能多出的 $50—$200 帳單。
2. **Postgres 重度用戶**。你用到 RLS、pgvector、pg_cron、pg_net、`realtime.broadcast_changes()`——這些換到 Neon 要手拼、換到 Convex 要重寫整個 schema model，遷移成本蓋過帳單焦慮。
3. **流量穩定、非媒體重**。API-first、回傳 JSON 為主、單一 production 資料庫、不跑一堆 preview branch——這種 profile 的帳單非常可預測，落在 $35–75/月。
4. **團隊人數 > DB 數**。Convex 是 $25/seat，10 人團隊每月 $250；Supabase 是 $25/org，同團隊用同一張帳單，seat 多時反而划算。

反過來，**以下紅旗出現兩個以上就該算退路帳**：每月 egress 穩定超過 500GB、有 5+ 閒置 side project 沒勇氣刪、已經升到 Large compute、PITR 跟 Read Replica 都開了、team 裡沒人看 usage dashboard。這種組合的帳單結構不是「優化一下就好」，是結構性會被啃。

真正的建議不是「離開 Supabase」，是**把它當一個有清楚成本邊界的工具**：閒置專案直接 pause、圖像走 CDN 不走 Supabase Storage egress、每月 1 號掃一次 usage 頁、跨過 $200/月就開始把 preview branch 搬到 Neon。Supabase 的問題從來不是定價太貴，是定價結構讓你**感覺便宜但實際不可預測**——而新創最不需要的就是每月帳單抽盲盒。

---

**來源**

- Supabase, *Spend cap* — 官方排除項目清單: <https://supabase.com/docs/guides/platform/spend-cap>
- Supabase, *Manage Egress usage* — $0.09/GB uncached、$0.03/GB cached: <https://supabase.com/docs/guides/platform/manage-your-usage/egress>
- Supabase, *Manage Compute usage* / *Billing FAQ*: <https://supabase.com/docs/guides/platform/manage-your-usage/compute> · <https://supabase.com/docs/guides/platform/billing-faq>
- Supabase, *Self-Hosting with Docker*: <https://supabase.com/docs/guides/self-hosting/docker>
- Supabase GitHub Discussions #39820, *Self-hosting: What's working (and what's not)?*: <https://github.com/orgs/supabase/discussions/39820>
- DEV.to（2024 – 仍在被引用）, *Why I'm Leaving Supabase: The Most Confusing Billing I've Ever Seen*: <https://dev.to/piper_5a29318bdbba1be28fe/why-im-leaving-supabase-the-most-confusing-billing-ive-ever-seen-19p1>
- Fly.io Community, *Supabase egress pricing is ridiculous*: <https://community.fly.io/t/supabase-egress-pricing-is-ridiculous/23680>
- Flexprice, *The Complete Guide to Supabase Pricing Models*: <https://flexprice.io/blog/supabase-pricing-breakdown>
- MetaCTO, *The True Cost of Supabase (2026)*: <https://www.metacto.com/blogs/the-true-cost-of-supabase-a-comprehensive-guide-to-pricing-integration-and-maintenance>
- Convex vs Supabase 官方比較 + Convex Plans 頁: <https://www.convex.dev/compare/supabase> · <https://www.convex.dev/plans>
- Neon, *Complete Supabase Migration Guide*: <https://neon.com/guides/complete-supabase-migration>
- Designrevision, *Supabase Pricing: Real Costs at 10K–100K Users*: <https://designrevision.com/blog/supabase-pricing>
