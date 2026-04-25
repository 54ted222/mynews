前面五集我們把 Cloudflare 拼成一張對 indie 很誘人的圖——邊緣運算、零 egress、SQLite-on-edge、AI 一站式、月費橫的。這集把整期收尾，我們翻到背面，談盲點——什麼時候不該全押、哪些東西真的鎖死了搬不走、退場路徑該怎麼提前規劃。

先說立場——這集刻意只談四件事。第一，結構性盲點清單。第二，真實搬遷案例與引用。第三，每項服務的 portable 程度。第四，全押還是混搭的決策建議。其他篇談過的限制只引用結論、不重複展開。

第一個盲點是 D1 的 10GB 上限加單執行緒。這個上限不是軟限制、不是 quota、不是聯絡 sales 可以開的——官方文件白紙黑字寫「Maximum database size: 10GB Workers Paid 跟 500MB Free」、且「不能再進一步提高」。Cloudflare 的設計哲學是「橫向擴展、每用戶或每租戶一個庫」，但目前並沒有給足這個哲學需要的工具——dynamic bindings 在 Worker runtime 沒有原生支援，要嘛走 HTTP API 自管 binding 層，要嘛像 Medium 上 Tristan Trommer 那樣手刻 50 個 shard、用 UUID 內嵌 shard ID。

更陰險的是單執行緒加主寫 region。Hacker News 那篇 D1 討論串裡，有用了一年以上 production 的使用者直接寫——簡單 query 經常 400 毫秒以上、北美延遲 200 毫秒每 query、跨請求交易不能 span。這些不是文件能事先告訴你的，是 production 跑久了才會看到的尾巴。

第二個盲點是 Worker 的 CPU、記憶體、Bundle 三個天花板組合起來。HTTP 請求最長 5 分鐘 CPU、記憶體 128MB 不分免費付費、bundle 壓縮後 10MB。盲點不在數字本身，而在組合——你不能在 Worker 裡跑 headless Chrome、不能把 1GB 的 ML 模型直接 load 進記憶體、不能跑 ffmpeg 跟 Pandoc 跟 LibreOffice 這類二進位、不能持有長連線。這四件事任何一件命中，Worker 就不再是「便宜的 V8 isolate」而是「需要再叫一條 compute 的入口」。

第三個盲點是 observability 仍在追趕。2026 年 4 月的進度——Workers 已支援 OpenTelemetry traces 跟 logs export 到 Honeycomb、Grafana Cloud、Axiom、Sentry，automatic tracing 在 2026 年 3 月進 open beta，Datadog 也能透過 Logpush 收 HTTP 請求 log。但和你在 Render、Fly、AWS 上習慣的「裝個 agent 就有 USE/RED/four golden signals」相比仍有落差——Tail Workers 對 multi-tenant 平台型 SaaS 仍偏弱、Worker 之間的 service binding 呼叫鏈 trace propagation 要手動補、D1 query plan 跟 KV cache hit 的 metric 顆粒度比 RDS slow log 加 CloudWatch 粗。

值得一提——Cloudflare 自己 2025 年 11 月那次 Bot Management 的事故、跟 3 月 21 日 R2 Gateway Worker 因 deploy 漏寫 env 把 credential 推到錯環境的事件，都顯示「Cloudflare 自己對自家 Worker 的可觀測性也不夠好」——他們在事後檢討文「Code Orange: Fail Small」裡承認的。對 indie 而言這不致命，但意味你要嘛接受次一級的視野，要嘛從第一天就把 OTLP exporter 跟外部 APM 計費納入成本模型。

第四個盲點是 vendor lock-in 集中在 stateful 原語上。R2 走 S3 相容 API，搬走幾乎不痛——AWS 還會幫付反向遷移的 egress。Pages 跟 Workers 寫成 Hono App，跨平台只剩「換 adapter」。Hyperdrive 接的 Postgres 一樣可以從 Render、Fly、Lambda 連回去。但真正鎖死的是這四個——Durable Objects 沒有任何其他平台有對等物件，要自己用 Redis 加 Postgres advisory lock 加 actor framework 重建一致性語義。KV 的一致性 SLA 跟其他 KV 不一樣、搬移時要重新驗證程式邏輯。Workers AI 的 model ID 跟 binding API 都是 Cloudflare 私有，搬走要改成 OpenAI、Anthropic、Bedrock。Queues 加 Cron Triggers 在其他平台精度跟重試語義不同。

對 indie 的應對策略是把這些 stateful 原語包成你自己的 interface——類似六角形架構的 port——讓 swap 出來的工作可控。寫程式時把所有「Cloudflare 專屬呼叫」集中在一個資料夾，所有業務邏輯只認你自己定義的 KeyValueStore、ObjectStore、PubSub interface。Cloudflare 退場那天，你動的是 adapter 不是業務碼。

第五個盲點是管理型 Postgres 的缺位。D1 加 Hyperdrive 這個組合的潛台詞是——Cloudflare 不打算做管理型 Postgres。意思是只要你的 SaaS 需要 Postgres 特定能力——GIN 索引、PostGIS、邏輯複製、partition 表——你的「資料庫帳單」永遠在 Cloudflare 之外。這在帳單上是好事不被綁死，在運維上是壞事——你還是要管一個外部資料庫的 backup、failover、版本升級。「Cloudflare 全包」的故事到資料層就斷了一截。

第六個盲點是免費額度甜蜜、但跨過免費線那個瞬間會跳價。免費階段非常好用，但 indie 真正會痛的是——Workers Paid 起跳 5 美加 Durable Objects 請求每百萬 1 毛 5 加 storage 每 GB 月 2 毛、活躍 wall-clock 每百萬 GB-second 12 美 5。R2 Class A 4 美 5、Class B 3 毛 6——大量小檔的服務會被 Class A 吃到。Workers AI 用量超過免費額度後是 per-Neuron 計費。這些單價都不貴，但組合起來在某個用戶數突然非線性的曲線。

退場路徑——我給你一個 portable 程度由低到高的排序——R2 高、Pages 靜態高、Workers 純 fetch handler 中高、Hyperdrive 後面的 Postgres 高、Cron Triggers 中、Queues 中、KV 中低、Workers AI 低、Durable Objects 很低、Vectorize 中低。

決策建議——什麼情況「全押」是合理的？MVP 早期、月活 5,000 以下、DB 預期一年內 5GB 以下、業務本身偏邊緣、願意把 Postgres 那塊外接 Neon 或 Supabase、沒有 GPU 跟長任務跟二進位的硬需求。

什麼情況該「混搭」？寫入吞吐每秒 100 以上、單表預期破 5GB——資料層改 Hyperdrive 加 Neon 或 RDS、Cloudflare 只當 compute 加 CDN。有 ML 推理需要客製模型——Workers AI 留輕量、重模型送 Replicate 或 Bedrock。需要長任務——丟 Containers 或乾脆走 Render、Fly、Lambda。Compliance 像 HIPAA 跟 PCI L1 有特殊區域要求——AWS 跟 GCP 仍領先。

什麼情況不該選 Cloudflare 當主場？你的核心價值是「跑客戶上傳的任意 binary」、Northflank 跟 Fly 跟 Railway 更直接。團隊用 Python 或 Go 或 Rust 已經有大量服務碼——Workers 不會是零摩擦選項。你需要極細顆粒的 observability 跟 APM——AWS 加 Datadog 仍是業界標配。你的市場是中國或受 GFW 影響地區——Cloudflare 在牆內表現不穩。

最後一條對 indie 最重要的策略——把「驗證假設、活到 PMF」放第一、把「lock-in 風險」放第二。寫死 Durable Objects 的程式如果讓你比競爭對手早三個月發 v1、那就是對的選擇。只是要記得在你開始有 50 個付費客戶的那一刻，把 stateful 原語包進 interface、把資料庫從 D1 搬到 Hyperdrive，這些工作排進下個 sprint。早一個月做這件事比晚一個月做便宜十倍。

整輯六集到這裡走完了。你應該能比較有把握地回答兩件事——把 SaaS 蓋在 Cloudflare 上前 12 個月的賬單長什麼樣，前 100 個付費用戶以內你不會超過 20 美一個月。當哪一個維度撞到天花板時該往哪裡拆，答案是 D1 的 10GB cap、Workers 的 5 分鐘 CPU 跟 128MB 記憶體、observability 弱於 Datadog 這三條最先撞到。

所以這期的 takeaway 是——Cloudflare 是 2026 年 indie SaaS 的預設後端、但不是「all-in 一輩子」的選項；它是 default-but-escapable，前提是你從第一天就規劃 escape 的路。寫一行程式碼之前先問自己——這段碼能不能 swap？這個資料能不能 export？這個服務 down 了我有沒有降級路徑？把這三個問題放在心裡，Cloudflare 就會是你最強的工具，而不是最大的負債。我們這期就到這裡，謝謝你聽到最後。
