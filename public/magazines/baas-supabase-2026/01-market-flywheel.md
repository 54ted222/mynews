---
title: Firebase 殺手到 $10B 候選：Supabase 的市場飛輪
order: 1
date: 2026-04-22
summary: ARR 翻 2.3 倍、估值四個月翻倍、4 百萬開發者，Supabase 怎麼把「開源 Firebase 替代品」跑成 AI 世代新創的預設後端。
---

# Firebase 殺手到 $10B 候選：Supabase 的市場飛輪

## TL;DR

- **錢跑得比 ARR 還快**：2025-04 以 $2B 估值拿 $200M Series D，五個月後 2025-10 由 Accel 與 Peak XV 領投 $100M Series E，估值翻倍到 $5B；到 2026-04 據《The Information》報導，正與 GIC 談 $500M 左右的新一輪，目標把估值再翻到 **$10B**。
- **收入曲線撐得住**：ARR 在一年內從 $30M 衝到 $70M（+133%，Sacra 估計）；付費客戶破 10 萬家，**最新一批 YC 超過 50%（W25 據稱 59%）用 Supabase**。
- **AI 把流量洗了一遍**：4M 開發者、其中約 **30% 是「AI builders」**（透過 Bolt、Lovable、Cursor、Claude Code 等工具進場），每天新建 2,500 個資料庫。

---

## 一、數字長什麼樣（截至 2026-04）

| 指標 | 2024 底 | 2025 底 / 2026 Q1 | 成長倍數 |
|---|---|---|---|
| ARR | $30M | $70M | 2.3× |
| 開發者 | 1M | 4M | 4× |
| 估值 | — | $5B（2025-10）→ 傳聞 $10B | 4 個月翻倍 |
| GitHub Stars | ~65K | ~99K（近 100K 里程碑） | +52% |
| YC 新一批採用率 | ~40% | ~55–59%（W25） | +15pp |

幾個數字值得特別拎出來：

1. **估值步進異常陡**：Series C（2024-09, $80M, ~$765M）→ Series D（2025-04, $200M, $2B）→ Series E（2025-10, $100M, $5B）。一年內從 ~$765M 到 $5B，是 **6.5×** 的 valuation step-up。Paul Copplestone 在 TechCrunch podcast 公開放話：「Supabase 的未來，我希望是 $50B、$100B 的結果」。
2. **ARR 年增 133%，但估值年增 500%+**：投資人押的是「Postgres-as-default」這條敘事，不是當前現金流。
3. **Series E 少見地保留社群 co-invest 額度**：讓開發者社群能跟著機構一起認購股票——這是一個把「品牌 = 社群」寫進資本結構的動作，不只是行銷口號。

## 二、飛輪怎麼轉：YC → AI 工具 → Vercel 生態

這家公司不靠 enterprise sales team 衝量。Copplestone 多次公開說自己「會微笑著拒掉大型 enterprise 合約」，原因是會拖慢產品節奏、稀釋 DX。飛輪是三圈疊出來的：

**第一圈：YC 預設後端。**
Supabase 自己是 YC S20，跟 YC 社群關係緊。1,000+ 家 YC 公司用它；最近一批 YC 採用率從 40% 一路升到報導中的 55–59%。這件事在飛輪裡的意義不是「YC 貢獻多少 MRR」（不多），而是：**這批人 3 年後就是下一批獨角獸的 CTO**，他們下一家公司會再選 Supabase。

**第二圈：AI 程式工具接口。**
真正把 2025 這輪成長拉起來的是 AI 程式工具。Bolt、Lovable、Cursor、Claude Code、Replit 這些工具在生成 App 時，**預設接 Supabase** 當後端——一個理由是開源 Postgres + 一個 URL 就能跑，另一個理由是 Supabase 早早釋出了 MCP server 讓 LLM 能直接操作資料庫。結果是：Supabase 的 4M 開發者裡，約 30% 是被這些工具帶進來的「AI builders」，他們甚至不知道自己在用 Postgres。

**第三圈：Vercel / Next.js 生態。**
Vercel 與 Supabase 有 Marketplace 深度整合，Next.js 官方 repo 內建 `with-supabase` 範例。> 網路上流傳「Next.js on Vercel 部署的 45% 用 Supabase」的社群統計（截至 2026-Q1），此數字**目前查不到第一手出處**，合理當作上限參考；但從 Vercel Marketplace 的預設位置與 Next.js 範例的權重，可以確認 Supabase 是 Next.js 全端範式的預設後端。

三圈疊起來的結果是：**獲客成本幾乎為零**，因為客戶是被工具鏈推著進來的。

## 三、客戶組合：不是靠 Mozilla，是靠「十萬個 Mozilla」

官方掛出來的 logo 有 Mozilla（AI 產品線）、Zapier、Vercel、PwC、McDonald's、GitHub Next、eXp Realty、Resend、Xendit、Deriv、Udio。但 Supabase 的 ARR 不是靠這些 logo 撐的——100,000+ 付費客戶的分佈極扁平，Pro 方案 $25/月、Team 方案 $599/月，長尾才是主力。

這點跟它的定位完全一致：**Postgres + Auth + Storage + Vector 以一個可預期的訂閱價給你，不走 land-and-expand 的 enterprise sales**。Copplestone 自己的說法是「by developers, for developers」，意思是把 TAM 押在 developer 人頭數、而不是 deal size。

Series E 的錢要去哪？很明確：**Multigres**。Supabase 挖了 Vitess 共同創作者 Sugu Sougoumarane，要做 Postgres 版的 sharding + horizontal scale，解決「Postgres 長大以後撐不住」的上限問題。這是給 enterprise 敘事留的後路——**不是現在賣 enterprise，是讓飛輪轉到那批新創長大後不用離開 Supabase**。

## 四、風險與反方

不要只看 bull case。幾個明顯的裂縫：

- **Vendor lock-in 不在 Postgres，在 Auth**：資料庫本身是標準 Postgres、`pg_dump` 就能搬；但 Supabase Auth（JWT、OAuth、magic link）、Realtime、Edge Functions 是綁平台的，規模做大後遷出成本非線性增加。Hacker News 與 dev 社群已經有「Supabase 的 Auth 遷走要重寫」的抱怨串。
- **帳單地雷**：Pro 的 $25/月只是入場券，compute 與 egress 超用的計價寫得模糊。社群常見抱怨是「Disk IO budget 不透明」、「從 $25 跳到 $100/月才夠順跑」。這部分留給本期第 4 篇處理。
- **估值先於收入**：$70M ARR 對到 $5B 估值是 71× multiple、對到 $10B 則是 140×。就算用 2026 年底樂觀的 $150M ARR 估，也還是 65×。一旦 AI coding 熱潮降溫、Bolt/Lovable 的流量鬆動，這個 multiple 很難守。

---

## 來源

1. [Supabase nabs $5B valuation, four months after hitting $2B](https://techcrunch.com/2025/10/03/supabase-nabs-5b-valuation-four-months-after-hitting-2b/) — TechCrunch / Marina Temkin, 2025-10-03
2. [Exclusive: Supabase raises $100 million at $5 billion valuation as vibe coding soars](https://fortune.com/2025/10/03/exclusive-supabase-raises-100-million-at-5-billion-valuation-as-vibe-coding-soars/) — Fortune, 2025-10-03
3. [Supabase revenue, valuation & funding](https://sacra.com/c/supabase/) — Sacra, 2026-Q1 更新
4. [Database Startup Supabase in Talks to Double Valuation to $10 Billion](https://www.theinformation.com/articles/database-startup-supabase-talks-double-valuation-10-billion) — The Information, 2026-03
5. [1000 Y Combinator Founders Choose Supabase](https://supabase.com/blog/1000-yc-companies) — Supabase 官方 blog
