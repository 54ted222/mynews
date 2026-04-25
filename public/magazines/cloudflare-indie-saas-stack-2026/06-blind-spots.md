---
title: 什麼時候不該全押 Cloudflare：盲點與退場路徑
order: 6
date: 2026-04-26
summary: Worker 30 秒 CPU、D1 10GB cap、單執行緒、缺管理型 Postgres、observability 弱項；以及 R2 / Workers 的 portable 替代。
keywords: Cloudflare 盲點, D1 10GB 限制, Workers CPU 限制, vendor lock-in, Durable Objects 移轉, Hyperdrive Postgres, R2 S3 相容, indie SaaS 退場路徑, Hono 多平台, Cloudflare 可觀測性
---

# 什麼時候不該全押 Cloudflare：盲點與退場路徑

## TL;DR

- Cloudflare 的甜蜜點明確（邊緣、零 egress[^egress]、$5 起跳），但有四個結構性天花板會在「成功之後」才浮現：D1[^d1] 的 10GB／單執行緒、Worker[^workers] 的 CPU/記憶體/Bundle、stateful 原語的 vendor lock-in[^vendor-lock-in]、observability[^observability] 仍輸給 Datadog/Honeycomb 那一票成熟堆疊。
- 真實案例存在：在 Hacker News D1 討論串上有開發者寫「我的 D1 簡單查詢經常 400ms 起跳」、在 Northflank 比較文中明確指出「需要 GPU 自訂、持久連線、長任務時請去別處」。這些都不是黑稿，是「scale 之後的工程現實」。
- 退場路徑可規劃：R2[^r2]（S3 相容）幾乎零成本搬走；Workers 程式可改寫為 Bun[^bun]/Node + Hono[^hono]；資料層提早用 Hyperdrive[^hyperdrive] 接 Neon[^neon]/RDS 就保住了 Postgres 出路。真正鎖死的是 Durable Objects[^durable-objects]、KV[^kv] 一致性語義、Workers AI[^workers-ai] 的模型 ID。

## 為什麼要單獨寫一篇盲點文

前五篇把 Cloudflare 拼成一張對 indie SaaS 很誘人的圖：邊緣 compute、零 egress 物件儲存、SQLite-on-edge、向量搜尋、AI Gateway，一路到 Containers GA。但雜誌的責任不是賣硬廣，而是把「成功之後會踩到的牆」先標出來——不是要你不用 Cloudflare，而是希望你動工那天就知道哪幾條退路要保留。

這一篇刻意只談四件事：第一，結構性盲點清單；第二，真實搬遷案例與引用；第三，每項服務的 portable 程度；第四，「全押 vs 混搭」的決策建議。其他篇已經談過的限制只引用結論、不重複展開。

## 結構性盲點清單

### 盲點一：D1 的 10GB 上限與單執行緒

D1 的 10GB 不是軟限制、不是 quota、不是聯絡 sales 可以開的——官方文件白紙黑字「Maximum database size: 10 GB（Workers Paid）/ 500 MB（Free）」，且「不能再進一步提高」。Cloudflare 的設計哲學是「橫向擴展、每用戶/租戶一個庫」，但官方目前並沒有給足這個哲學需要的工具：dynamic bindings 在 Worker runtime 沒有原生支援，要嘛走 HTTP API 自管 binding[^binding] 層，要嘛 Medium 上那位 Tristan Trommer 那樣手刻 50 個 shard[^sharding]、用 UUID 內嵌 shard ID 的方案。

更陰險的是單執行緒 + 主寫 region。Hacker News HN43572511 那篇 D1 討論串裡，有用了一年以上的使用者直接寫「response times to simple queries regularly take 400ms and beyond」、北美延遲「200ms+ per query, spiking to 500ms or higher」、跨請求交易「transaction cannot span multiple D1 requests」——這些不是文件能事先告訴你的，是 production 跑久了才會看到的尾巴。第三篇已經談過 D1 的甜蜜點，這裡只強調盲點：當你的單一表開始逼近 5GB、寫入 QPS[^qps] 過 50，就該認真評估 Hyperdrive + Neon 而不是再切第 51 個 shard。

### 盲點二：Worker 的 CPU、記憶體、Bundle 三個天花板

第二篇已經把限制列過：HTTP 請求最長 5 分鐘 CPU（預設 30 秒）、記憶體 128MB（不分 free/paid）、bundle 壓縮後 10MB。盲點不在數字本身，而在組合：

- 你不能在 Worker 裡跑 headless Chrome[^headless-browser]（Browser Rendering 走另一條服務，要錢、有獨立 quota）。
- 你不能把 1GB 的 ML 模型直接 load 進記憶體（Workers AI 強迫你走 binding 走他們的 catalog）。
- 你不能跑 ffmpeg[^ffmpeg]、Pandoc、LibreOffice 這類二進位（直到 Containers[^containers]/Sandboxes[^sandboxes] GA，但那是另一條 compute、另一條帳單）。
- 你不能持有長連線（WebSocket[^websocket] 要透過 Durable Objects hibernation API、SSE[^sse] 要算 wall-clock 用量）。

這四件事任何一件命中，Worker 就不再是「便宜的 V8 isolate」而是「需要再叫一條 compute 的入口」。對 indie SaaS 來說，提早確認這些 use case 是否在 roadmap 上比後期搬家划算。

### 盲點三：observability 仍在追趕

2026 年 4 月的進度：Workers 已支援 OpenTelemetry[^otel] traces/logs export 到 Honeycomb、Grafana Cloud、Axiom、Sentry，automatic tracing 在 March 2026 進 open beta，Datadog 也能透過 Logpush 收 HTTP request log。但和你在 Render/Fly/AWS 上習慣的「裝個 agent 就有 USE/RED/four golden signals」相比仍有落差：

- Tail Workers 對 multi-tenant 平台型 SaaS 仍偏弱，要自己寫聚合。
- Worker 之間的 service binding 呼叫鏈，trace propagation 要手動補。
- D1 query plan、KV cache hit、Durable Object 內部存取的 metric 顆粒度都比 RDS slow log + CloudWatch 粗。
- 11 月 18 日 Bot Management 的 generation logic bug、3 月 21 日 R2 Gateway Worker 因為 deploy 漏寫 `--env` 把 credential 推到錯環境的事件，都顯示出「Cloudflare 自己對自家 Worker 的可觀測性也不夠好」——他們在事後檢討文「Code Orange: Fail Small」裡承認的。

對 indie 而言這不致命，但意味你要嘛接受次一級的視野，要嘛從 day one 就把 OTLP exporter、外部 APM 計費納入成本模型。

### 盲點四：vendor lock-in 集中在 stateful 原語

R2 走 S3 相容 API，搬走幾乎不痛——AWS 還會幫付反向遷移的 egress。Pages/Workers 寫成 Hono App，跨平台只剩「換 adapter」。Hyperdrive 接的 Postgres（Neon/Supabase/RDS）一樣可以從 Render、Fly、AWS Lambda 連回去。

真正鎖死的是這四個：Durable Objects（沒有任何其他平台有對等物件，要自己用 Redis[^redis]/Postgres advisory lock + actor framework 重建一致性語義）、KV（其他 KV 的一致性 SLA 不一樣，搬移時要重新驗證程式邏輯）、Workers AI（model ID、binding API 都是 Cloudflare 私有，搬走要改成 OpenAI/Anthropic/Bedrock）、Queues[^queues] + Cron Triggers[^cron-triggers]（其他平台的精度/重試語義不同，最細時序是 1 分鐘 cron）。

Vercel 那篇「anti-vendor-lock-in cloud」雖然立場明顯，但他們指出的核心是對的：「當你把程式寫向平台原語而非框架，搬遷就不是改 deploy script 而是 rewrite。」對 indie 的應對策略是把這些 stateful 原語包成你自己的 interface（類似 Hexagonal Architecture[^hexagonal] 的 port），讓 swap 出來的工作可控。

### 盲點五：管理型 Postgres 的缺位

D1（SQLite[^sqlite]）+ Hyperdrive（外接 Postgres）這個組合的潛台詞是：Cloudflare 不打算做管理型 Postgres。意思是只要你的 SaaS 需要 Postgres 特定能力（GIN/GiST、PostGIS[^postgis]、邏輯複製、pg_partman、partial index），你的「資料庫帳單」永遠會在 Cloudflare 之外——Neon、Supabase[^supabase]、RDS、Crunchy 二選一。這在帳單上是好事（不被綁死），在運維上是壞事（你還是要管一個外部資料庫的 backup、failover、版本升級）。

「Cloudflare 全包」的故事，到資料層就斷了一截。提早承認這件事比晚點才意識到要好。

### 盲點六：免費額度甜蜜，但「成功路徑」會跳價

免費階段非常好用：Workers 100k req/day、D1 5GB、R2 10GB + 10M Class B ops、Workers AI 10k neurons/day。但 indie 真正會痛的是「跨過免費線」那個瞬間：

- Workers Paid 起跳 $5/月，加 Durable Objects 請求 $0.15/M、storage $0.20/GB-月，活躍 wall-clock $12.50/M GB-second。
- R2 Class A operations[^class-a] $4.50/M、Class B $0.36/M（Standard）——大量小檔的服務（縮圖、頭貼）會被 Class A 吃到。
- Workers AI 用量超過免費額度後是 per-neuron[^neuron] 計費，跑 Llama 3 70B 跟 SDXL 的單價差異極大。

這些單價都不貴，但「組合起來在某個用戶數突然非線性」的曲線，第五篇的成本圖會說明。本篇要強調的是：免費 → $5 → $20 那條曲線之後，下一個跳點往往是「你發現你需要 Postgres / GPU / 長任務 / 客製模型」——那一刻就是評估退場路徑的時機。

## 退場路徑：哪些服務 portable、哪些不

依「搬走的痛」由低到高：

| 服務 | Portable 程度 | 替代 | 主要工作 |
| --- | --- | --- | --- |
| R2 | 高（S3 API 相容） | AWS S3、Backblaze B2、MinIO | 改 endpoint、改 IAM、規劃 egress 預算 |
| Pages（靜態） | 高 | Vercel、Netlify、CloudFront | 改 build pipeline、調整 redirect rules |
| Workers（純 fetch handler） | 中高 | Bun + Hono、Node + Hono、AWS Lambda、Deno Deploy | 換 adapter、補 fs/crypto polyfill |
| Hyperdrive 後面的 Postgres | 高 | 直接從新平台連 Neon/Supabase/RDS | 重建 connection pool 設定 |
| Cron Triggers | 中 | GitHub Actions、Render Cron、systemd timer、Lambda EventBridge | 重新校準時序、補事件去重 |
| Queues | 中 | SQS、Cloud Tasks、BullMQ | 重寫 producer/consumer、處理重試語義 |
| KV | 中低 | Redis、DynamoDB、Upstash | 重新驗證 eventual consistency 假設 |
| Workers AI | 低 | OpenAI、Anthropic、Bedrock、Replicate | 改 prompt、改 binding 為 HTTP client |
| Durable Objects | 很低 | Redis + 自寫 actor、Postgres advisory lock、Temporal | 重建一致性語義、重寫狀態機 |
| Vectorize | 中低 | pgvector、Pinecone、Qdrant | 重建 index、重新 ingest |

實作建議：寫程式時把「Cloudflare 專屬呼叫」集中在 `src/integrations/cloudflare/*` 一個資料夾，所有業務邏輯只認你自己定義的 `KeyValueStore`、`ObjectStore`、`PubSub` interface。Cloudflare 退場那天，你動的是 adapter 不是業務碼。

## 真實案例引用

- **D1 性能**：Hacker News HN43572511 上的 StanAngeloff（一年以上 production）寫「response times to simple queries regularly take 400ms and beyond」、「constant network, connection and a plethora of internal errors」。mbforbes 寫「support channel was a discord, so I posted in it and never got a reply」。fastball 直接建議「you can use a hosted Postgres solution and get much more power and performance」。
- **D1 規模**：Cloudflare Discord 的官方建議是「per-user/per-tenant database」，但 Medium 上 Tristan Trommer 的「Scaling D1 from 10GB to 500GB with Manual Database Sharding」記錄手刻 50 shards、UUID 嵌 shard ID 的工程量。pizzaconsole.com 也有類似 sharding solution 的踩坑紀錄。
- **官方事故**：2025-03-21 R2 Gateway Worker credential 推錯環境，1 小時 7 分鐘全球寫入失敗、部分讀失敗；2025-06-12 Workers KV 底層 storage 故障 2 小時 28 分鐘，連帶 Access、WARP、Dashboard 一起掛；2025-11-18 Bot Management feature file 生成 bug 拖垮多服務。Cloudflare 自己宣布 「Code Orange: Fail Small」 計畫承認爆炸半徑太大。
- **Workers 限制**：Northflank 的比較文明確列出「需要 >128MB 記憶體、複雜計算、有狀態服務、持久連線、自訂 GPU/模型」就該找別處。
- **Pages → Workers 移轉**：cogley.jp 與 alex.zappa.dev 的兩篇 2026 移轉日誌都提到 GitHub Actions 帳單在兩週內燒光、原本免費的 Pages build 變成計費分鐘——這是 Cloudflare 內部「整併產品」也會帶來的隱性成本。

## 決策建議

什麼情況「全押 Cloudflare」是合理的：

- MVP / 早期，月活 < 5,000，DB 預期 1 年內 < 5GB。
- 業務模型本身偏邊緣（全球分散讀者、低延遲頁面、A/B 邊緣決策）。
- 願意把 Postgres 那塊外接 Neon/Supabase（不算 lock-in）。
- 沒有 GPU、長任務、二進位執行的硬需求。

什麼情況該「混搭」：

- 寫入吞吐 > 100 QPS、單表預期破 5GB——資料層改 Hyperdrive + Neon/RDS，Cloudflare 只當 compute + CDN。
- 有 ML inference 需要客製模型——Workers AI 留給輕量模型，重模型送 Replicate/Bedrock。
- 需要長任務（影片轉檔、PDF 渲染、爬蟲 session）——丟 Containers/Sandboxes 或乾脆走 Render/Fly/Lambda。
- Compliance（HIPAA、PCI L1）有特殊區域要求——AWS/GCP 的成熟度仍領先。

什麼情況不該選 Cloudflare 當主場：

- 你的核心價值是「跑客戶上傳的任意 binary」（自己的 PaaS、CI runner、workflow engine）——Northflank/Fly/Railway 更直接。
- 你的團隊用 Python/Go/Rust 已經有大量服務碼——Workers 不會是你的零摩擦選項。
- 你需要極細顆粒的 observability、APM trace 串接所有服務——AWS + Datadog 仍是業界標配。
- 你的市場是中國／受 GFW 影響地區——Cloudflare 在牆內表現不穩。

最後一條對 indie 最重要的策略：把「驗證假設、活到 PMF[^pmf]」放第一，把「lock-in 風險」放第二。寫死 Durable Objects 的程式如果讓你比競爭對手早三個月發 v1，那就是對的選擇——只是要記得在你開始有 50 個付費客戶的那一刻，把 stateful 原語包進 interface、把資料庫從 D1 搬到 Hyperdrive，這些工作排進下個 sprint。早一個月做這件事比晚一個月做便宜十倍。

---

[^egress]: Egress 指資料從雲端服務出站到外部網路的流量，傳統雲端供應商按 GB 收費，是雲端帳單裡最不可預測的一項；Cloudflare 整套服務都不收 egress。
[^d1]: Cloudflare D1 是把 SQLite 包成託管服務的關聯式資料庫，跑在 Durable Objects 之上、跟 Worker 同網路，單庫硬上限 10GB。
[^workers]: Cloudflare Workers 是 Cloudflare 的無伺服器運算產品，跑在全球邊緣節點、由 V8 isolate 提供毫秒級啟動。
[^vendor-lock-in]: Vendor lock-in（供應商鎖定）指應用越用某家供應商的私有原語，搬到別家的成本就越高。Workers AI 的 model ID、Durable Objects 的 actor 模型、KV 的最終一致性語義都是典型 lock-in。
[^observability]: Observability 指系統在 production 出狀況時，工程師能透過 log、metrics、distributed trace 看穿內部發生什麼事的能力。Datadog、Honeycomb、New Relic 是這個領域的成熟工具。
[^r2]: Cloudflare R2 是與 Amazon S3 API 相容的物件儲存服務，最大特色是 egress 永久免費，搬到其他 S3 相容服務（B2、MinIO）幾乎零成本。
[^bun]: Bun 是 Jarred Sumner 在 2022 年開源的 JavaScript runtime，主打「比 Node 快很多 + 內建 bundler/test runner」，2024 年後在 indie 圈快速崛起，是 Workers 程式碼跨平台搬家最常被點名的 Node 替代。
[^hono]: Hono 是輕量化的 Web framework，主打跨 runtime（Cloudflare Workers、Bun、Deno、Node、Lambda），同一份程式碼可以無縫換 adapter 跑在不同平台，是 Workers 退場路徑的關鍵磚塊。
[^hyperdrive]: Cloudflare Hyperdrive 是「給 Worker 用的 Postgres 連線池與快取」，把外接 Postgres 連線變得低延遲、可長連線，等於 Cloudflare 自己不做 Postgres，但把外接這條路鋪平。
[^neon]: Neon 是 serverless Postgres 服務商，2022 年成立，特色是儲存運算分離、可分支、按用量計費，被 Cloudflare 列為 Hyperdrive 的官方推薦 Postgres 後端之一。
[^durable-objects]: Cloudflare Durable Objects 是「全球可定址的單執行緒 stateful 物件」，每顆都有自己的記憶體與 SQLite，是 Cloudflare 最獨特、也最難在他處複製的 primitive。
[^kv]: Workers KV 是 Cloudflare 的全球分散式鍵值儲存，最終一致性、寫入要 60 秒才全球可見，搬到 Redis / DynamoDB 要重新驗證所有 read-after-write 假設。
[^workers-ai]: Cloudflare Workers AI 是在 Cloudflare 邊緣 GPU 上跑開源模型的推理服務，model ID 與 binding API 都是 Cloudflare 私有。
[^binding]: Binding 是 Cloudflare Workers 的核心抽象，把外部資源以變數形式注入 Worker 環境，呼叫起來像本地物件。dynamic binding 指「在 runtime 才決定要綁哪個資源」的能力，目前 D1 沒有原生支援。
[^sharding]: Sharding 指把一個資料庫水平切成多個分庫，每個分庫負責一部分資料。能突破單庫容量上限，代價是 cross-shard 查詢變難、應用層要管路由。
[^qps]: QPS（Queries Per Second）指每秒查詢數，是衡量資料庫負載的核心指標。50 QPS 寫入聽起來不大，但對單執行緒 SQLite 已是相當高的壓力。
[^headless-browser]: Headless browser 指沒有 GUI 的瀏覽器，用程式控制做網頁截圖、PDF 生成、爬蟲、自動化測試。Puppeteer 與 Playwright 是兩個主流套件，都需要 Chromium binary，Workers 跑不了。
[^ffmpeg]: FFmpeg 是開源跨平台多媒體處理工具，能轉碼、剪輯、混音幾乎所有格式的影片與音訊，是後端做媒體處理的事實標準，但在 Workers 跑不了。
[^containers]: Cloudflare Containers 在 2026-04-13 GA，讓任意 Docker image 部署到 Cloudflare 邊緣，補上 Workers 跑不了 ffmpeg、Chromium、native binding 套件的缺口。
[^sandboxes]: Cloudflare Sandboxes 是建在 Containers 之上的 SDK，給 AI agent 一個可重啟的 Linux 容器執行不可信代碼。
[^websocket]: WebSocket 是 HTML5 的全雙工通訊協定，client 與 server 建一條長連線後雙向送訊息，常用於聊天、即時協作、行情推送。在 Workers 上必須透過 Durable Objects hibernation API 才有合理成本。
[^sse]: SSE（Server-Sent Events）是基於 HTTP 的單向長連線推送協定，server 不斷把事件流回 client。比 WebSocket 簡單、但只能 server 推 client。LLM 流式回應常用 SSE。
[^otel]: OpenTelemetry（OTel）是 CNCF 主導的可觀測性標準，把 trace、metric、log 三大資料類型統一成跨工具的 spec，讓你的應用可以無痛切換 Datadog / Honeycomb / Grafana 等後端。
[^queues]: Cloudflare Queues 是 Cloudflare 的訊息佇列服務，提供 at-least-once delivery 與 batching。對應 AWS SQS、GCP Pub/Sub，但語義不完全相同——搬家要重新驗證重試策略。
[^cron-triggers]: Cron Triggers 是 Cloudflare Workers 的排程功能，最細粒度 1 分鐘。要更精確的時序（秒級）或更複雜的條件，需要其他平台或自己用 Durable Objects scheduler 拼。
[^redis]: Redis 是 2009 年開源的記憶體鍵值資料庫，支援豐富資料結構與 atomic 操作，是 cache、counter、queue、leaderboard 的事實標準，常被拿來實作 actor 模式以替代 Durable Objects。
[^hexagonal]: Hexagonal Architecture（六角形架構）是 Alistair Cockburn 在 2005 年提出的軟體架構，核心是把業務邏輯與外部世界（DB、UI、外部 API）用 port + adapter 隔開——對抗 vendor lock-in 最常被引用的設計範式之一。
[^sqlite]: SQLite 是嵌入式關聯式資料庫，一個檔案就是一座資料庫，全球部署量比 PostgreSQL 加 MySQL 還多。
[^postgis]: PostGIS 是 PostgreSQL 的地理空間擴充套件，提供地圖、座標、地理查詢能力，是 D1 / SQLite 還補不齊的領域之一。
[^supabase]: Supabase 是「開源 Firebase 替代品」，2020 年起以 Postgres 為核心打包 auth、storage、realtime、edge function 等服務。
[^class-a]: Class A operations 是 R2 中「會修改物件狀態」的操作（PUT、COPY、POST、LIST），單價較貴 $4.50/M。
[^neuron]: Neuron 是 Workers AI 的計費單位，把不同模型的 token、圖像、音訊用量換算成統一數字，再以 $0.011 / 1,000 Neurons 計價。
[^pmf]: PMF（Product-Market Fit）指「產品在某個市場真正有需求」的狀態，通常以「使用者主動推薦、自然成長、留存率高」為訊號。沒有 PMF 之前的工程選擇，目標是「快速驗證假設」而不是「打磨架構」。

## 來源

- Cloudflare D1 Limits — <https://developers.cloudflare.com/d1/platform/limits/>（10GB hard cap、單執行緒、queries/invocation 上限，2026-04 截至）
- Cloudflare Workers Limits — <https://developers.cloudflare.com/workers/platform/limits/>（CPU 5 分鐘 / 記憶體 128MB / Bundle 10MB / Cron Trigger 5–250）
- Cloudflare Hyperdrive — <https://developers.cloudflare.com/hyperdrive/>（支援 AWS、GCP、Azure、Neon、PlanetScale、CockroachDB、Timescale）
- Cloudflare R2 Pricing — <https://developers.cloudflare.com/r2/pricing/>（Class A $4.50/M、Class B $0.36/M、Storage $0.015/GB-月）
- Cloudflare Durable Objects Pricing — <https://developers.cloudflare.com/durable-objects/platform/pricing/>（請求 $0.15/M、wall-clock $12.50/M GB-sec、storage $0.20/GB-月）
- Hacker News：Journey to Optimize D1 Database Queries — <https://news.ycombinator.com/item?id=43572511>（StanAngeloff、mbforbes、fastball、kpozin 等用戶實測引用）
- Medium：Scaling Cloudflare D1 from 10GB to 500GB with Manual Database Sharding — <https://medium.com/@tristantrommer/scaling-cloudflare-d1-from-10-gb-to-500-gb-with-manual-database-sharding-4e95d6deb742>
- PizzaConsole：Building a Scalable Sharding Solution for Cloudflare D1 — <https://pizzaconsole.com/blog/posts/programming/d1-sharding>
- Cloudflare Postmortem 2025-03-21 — <https://blog.cloudflare.com/cloudflare-incident-march-21-2025/>（R2 Gateway Worker `--env` 漏寫事件）
- Cloudflare Postmortem 2025-06-12 — <https://blog.cloudflare.com/cloudflare-service-outage-june-12-2025/>（Workers KV storage 底層 2h28m 故障）
- Cloudflare Postmortem 2025-11-18 — <https://blog.cloudflare.com/18-november-2025-outage/>（Bot Management feature file 生成 bug）
- Cloudflare Code Orange: Fail Small — <https://blog.cloudflare.com/fail-small-resilience-plan/>（官方承認爆炸半徑問題）
- Cloudflare Workers Observability Ecosystem — <https://blog.cloudflare.com/observability-ecosystem/>（Datadog、Honeycomb、New Relic、Sentry、Splunk、Sumo Logic 整合）
- Cloudflare Workers Automatic Tracing Open Beta — <https://blog.cloudflare.com/workers-tracing-now-in-open-beta/>（OTLP 匯出，2026-03 進 open beta）
- Vercel：The anti-vendor-lock-in cloud — <https://vercel.com/blog/vercel-the-anti-vendor-lock-in-cloud>（框架 vs 平台原語論點，立場明顯但問題定義準確）
- Northflank：Best Cloudflare Workers Alternatives — <https://northflank.com/blog/best-cloudflare-workers-alternatives>（Workers 不適用情境清單）
- Cogley.jp：Cloudflare Pages vs Workers in 2026 Migration Guide — <https://cogley.jp/articles/cloudflare-pages-to-workers-migration>
- Alex Zappa：Migrating from Cloudflare Pages to Workers — <https://alex.zappa.dev/blog/cloudflare-pages-to-workers-migration/>（GitHub Actions 帳單兩週燒光的真實紀錄）
- Hono Migration Guide — <https://github.com/honojs/hono/blob/main/docs/MIGRATION.md>（同程式碼跨 Workers / Bun / Node / Lambda）
- DEV：Hono.js on Cloudflare Workers — <https://dev.to/whoffagents/honojs-on-cloudflare-workers-typed-apis-that-actually-run-at-the-edge-3930>
- Bun + Cloudflare Workers Discussion — <https://github.com/oven-sh/bun/discussions/14859>（Bun 移轉相容性踩坑）

時效標註：所有 Cloudflare 產品定價與限制截至 2026-04，產品文件以官方為準；用戶引用截自 2025–2026 期間之 Hacker News、Medium、Cloudflare 社群與官方 postmortem。文中「估算」之處（成本曲線跳點、Worker 對 Datadog 顆粒度比較）為主觀工程判斷，非官方數字。
