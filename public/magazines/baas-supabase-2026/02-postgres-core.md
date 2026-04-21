---
title: 一切塞進 Postgres：Supabase 的 BaaS 哲學
order: 2
date: 2026-04-22
summary: RLS 取代 auth middleware、pgvector 取代向量 DB、pg_cron 取代 scheduler、pgmq 取代 SQS——Supabase 怎麼把後端的半個服務棧折進一張 Postgres。
---

# 一切塞進 Postgres：Supabase 的 BaaS 哲學

## TL;DR

- Supabase 的核心判斷是「**後端需要的大部分服務都已經長在 Postgres 裡了，只是沒人認真用**」。RLS 取代 auth middleware、pgvector 取代 Pinecone、pg_cron 取代 Cloud Scheduler、pgmq 取代 SQS、Realtime 靠 WAL 取代 pub/sub。
- 這條路徑的好處是**單一資料面**（single source of truth）：權限、向量、排程、佇列全都跟業務資料同一個 ACID 邊界，用同一個 `psql` 連線就能 debug。
- 極限也很清楚：RLS policy 在 join 與高 QPS 多租戶下會踩到 initPlan、policy 評估、連線數等坑；pgmq 撞 10k msg/s 就該考慮 SQS；cron 與 queue 目前還沒跟 branching 相容（截至 2026-04）。

## 一個判斷：Postgres 是平台，不是資料庫

多數 BaaS 的做法是把 Postgres 當成「資料儲存層」，上面再疊 auth service、queue service、scheduler、向量 DB、pub/sub bus——每一個都是獨立進程、獨立帳單、獨立 IAM、獨立 runbook。Supabase 賭的是另一條線：**把 Postgres 當平台**，用擴充套件（extension）把這些能力長回資料庫本體，對外只暴露一張 schema。

這不是「什麼都塞進 DB」的原教旨主義，而是一個很實際的商業判斷。每多一個外部服務，就多一組連線字串、多一層網路延遲、多一個 webhook 要校對資料一致性、多一個地方要寫 IaC。如果能用一句 `create extension` 解決，大多數的新創寧願吃 Postgres 的 scaling ceiling，也不想一開始就背五個元件的維運。

接下來四個元件是這條哲學的實作。

## RLS：把 auth middleware 編譯進 WHERE

傳統後端的權限檢查分散在 middleware、ORM hook、service layer 裡。Supabase 的選擇是**把 policy 變成 SQL 的一部分**，用 Postgres 原生的 Row Level Security：

```sql
create policy "users read own rows"
on documents for select
to authenticated
using ( (select auth.uid()) = owner_id );
```

每一個送進來的 request 都掛著 JWT，`auth.uid()` 從 `request.jwt.claims` 解出使用者 ID，policy 變成被自動 AND 進 query 的 implicit WHERE。好處是 PostgREST、Realtime、Storage、甚至 `psql` 直連，全都共用同一套授權邏輯。壞處在效能：

- 寫成 `auth.uid() = user_id` 時，Postgres 會對每一列都呼叫一次函式；包成 `(select auth.uid()) = user_id` 後，planner 會走 **initPlan**，整個 statement 只算一次，大表上可以快上兩到三個數量級。這是 Supabase Advisor `0003_auth_rls_initplan` 專門 lint 的反模式。
- 跨表 join 時，每張開啟 RLS 的表各自再跑一次 policy，複合條件容易被 planner 放到錯的位置。常見解法是把跨表查詢包進 `security definer` + `stable` 函式，讓它跳過 RLS 並讓 planner 快取結果。
- `auth.uid()` 對未登入請求回傳 `null`，而 `null = user_id` 是 `null` 不是 `false`——不加 `to authenticated` 或不明確過濾 anon role，會留下靜默的漏洞。

RLS 真正換掉的不是 middleware，而是「權限邏輯要放哪」的決策——它強迫你把規則寫在資料最靠近的那一層。代價是你得接受一套 SQL-first 的 debug 流程。

## pgvector：為什麼 AI 新創沒再買 Pinecone

pgvector 讓 `vector(1536)` 變成 Postgres 的一個欄位型別，用 `<=>`（cosine distance）、`<->`（L2）之類的運算子做 ANN 查詢。索引有兩種：

- **IVFFlat**：用 k-means 分桶，構建快、索引小，但索引品質吃資料分佈——資料新增多了就要 `reindex`。
- **HNSW**：圖結構，query QPS 明顯好（社群基準 recall 0.998 下約為 IVFFlat 的 15 倍），構建慢約 30 倍、索引大約 2.8 倍，但**線上增量寫入安全**。

截至 2026-04，Supabase 官方文件直接建議把 HNSW 當預設。對新創的意義是：RAG pipeline 需要的「存 chunk、存 embedding、存 metadata、做 hybrid search（向量 + 全文）、套 RLS 限租戶」全都發生在同一張 Postgres，不用為了「向量」去簽第二家 SaaS、再寫一層 sync job 維護最終一致性。

## pg_cron 與 pgmq：把 scheduler 與 queue 內嵌

**pg_cron** 把 crontab 語法搬進 SQL：`select cron.schedule('nightly', '0 3 * * *', 'call rebuild_search_index()')`。Supabase Cron 只是 Studio 上那層 UI，底層就是 pg_cron。限制是現實的：截至 2026-04，pg_cron 1.6.4 在 Supabase 上**建議同時並發不超過 8 job、單 job 不超過 10 分鐘**，上限是 32 個 job 各吃一條連線；跑 minute-level job 要記得定期清 `cron.job_run_details`，否則會慢下來；job 名稱衝突會直接覆蓋，這是很容易在多環境下踩到的坑。

**pgmq** 是 Tembo 開源、後來被 Supabase 整合的 Postgres 原生訊息佇列。API 跟 SQS 幾乎對齊：`pgmq.send`、`pgmq.read`（帶 visibility timeout）、`pgmq.archive`。承諾的是 **visibility timeout 內的 exactly-once**——超時沒 ack 訊息就重新可見，行為等同 at-least-once + dedup window。要求 PostgreSQL 15.6.1.143 以上。

為什麼值得用 pgmq 而不是 SQS？

- 佇列裡的訊息跟業務資料在**同一個交易邊界**：把「寫訂單 + 入佇列」寫成一個 `begin; … commit;`，再也不會發生「DB 寫成功但 SQS 丟訊息失敗」的補償地獄。
- 同一套 RLS、同一套 observability、同一條連線，不用多一個 IAM。

什麼時候該誠實地換掉它？社群與 HN 的共識：**持續 10k msg/s 以上**就要開始擔心 WAL 壓力與 vacuum 成本；極高 fan-out 或嚴格的毫秒級排程，SQS/Kafka/Redis Streams 還是更適合。Postgres-as-queue 的老問題依然在——`FOR UPDATE SKIP LOCKED` 雖然把熱點競爭壓下去，但它仍是個 DB，不是專為吞吐設計的 log 結構。Supabase 在 2026 公告了 partitioned queues，大致就是在往這個天花板逼近。

## Realtime：把 WAL 當 event bus

Supabase Realtime 是一個 Elixir（Phoenix）叢集，訂閱 Postgres 的 **logical replication slot**，透過 `wal2json` 把 WAL 解成 JSON，再以 WebSocket 廣播給訂閱的 client。關鍵在 **walrus**（Write Ahead Log Realtime Unified Security）——它是 Supabase 自家的擴充，**在 WAL 流轉給 client 之前，針對每一筆變更模擬訂閱者身份、重跑 RLS policy，才決定要不要送**。同一套 policy 同時管住 REST query 和 Realtime 訂閱，不需要兩套授權邏輯。

這條路讓「DB 即 event source」變成預設行為：只要寫入資料，前端與其他訂閱者就會拿到事件，不必多拉一個 Kafka 或 Pusher。代價是 WAL 是整個 cluster 的序列化點——訂閱數量、行寬、policy 複雜度都會回壓到主庫的 I/O；Broadcast 和 Presence 是故意為此設計的旁路，把「訊息」和「線上狀態」從 WAL 拉出來，走 Phoenix 叢集內記憶體與 CRDT。

## 這套哲學的極限

四個老實話，截至 2026-04：

1. **多租戶的 RLS 不是免費午餐**。policy 複雜到一定程度、table 交錯 join 一多、熱資料單表超過千萬列，initPlan 與 planner 的交互會變得難以預測，得靠 explicit index、`security definer` 函式、以及 JWT claim 裡就帶好 `tenant_id` 來繞。
2. **pgmq 不是 Kafka**。把它當 SQS 替身很對，當 event log / stream processor 就會吃虧；持續高吞吐下要認真評估 partitioned queues 或直接上 SQS/Kinesis。
3. **Schema migration 的 blast radius 變大**。當 auth、queue、scheduler、向量索引全部共用同一張 Postgres，一次失敗的 migration 可能同時弄壞登入、排程與佇列。Supabase branching 是針對這點的答案，但**cron 與 queue 目前還沒跟 branching 相容**——這也是為什麼 2026-04 的 Developer Update 特別強調 GitHub Integration 下放到 free tier，讓 CI/CD 從 main 分支部署 migration，不必走 branching 就能把變更流程拉起來。
4. **縱向擴展終究會遇到瓶頸**。Supabase 的答案是 Multigres——一個在 2026-04 開源的 Kubernetes operator，管理分片、多可用區、zero-downtime rolling upgrade、pgBackRest PITR 備份。哲學沒變，只是把「一張 Postgres」擴大成「一張邏輯上的 Postgres」。

「一切塞進 Postgres」不是信仰，是一個有清楚極限的工程選擇：在極限以內，它換來一個單一 schema、單一授權模型、單一交易邊界的後端。對 80% 的新創來說，這個 trade-off 划算到不需要思考。

---

**來源**

- [Row Level Security — Supabase Docs](https://supabase.com/docs/guides/database/postgres/row-level-security) 與 [RLS Performance and Best Practices](https://supabase.com/docs/guides/troubleshooting/rls-performance-and-best-practices-Z5Jjwv)
- [pgmq GitHub](https://github.com/pgmq/pgmq) 與 Supabase 官方 [PGMQ Extension 文件](https://supabase.com/docs/guides/queues/pgmq)、[Show HN: An SQS Alternative on Postgres](https://news.ycombinator.com/item?id=40307454)
- [pg_cron on Supabase](https://supabase.com/docs/guides/database/extensions/pg_cron) 與 [pg_cron debugging guide](https://supabase.com/docs/guides/troubleshooting/pgcron-debugging-guide-n1KTaz)
- [supabase/walrus — Applying RLS to PostgreSQL WAL](https://github.com/supabase/walrus)、[Realtime Architecture](https://supabase.com/docs/guides/realtime/architecture)、[Supabase Release Developer Update — April 2026](https://github.com/supabase/supabase/releases/tag/v1.26.04)
