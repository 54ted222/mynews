這一集想聊的是——為什麼 2026 年做 indie SaaS，後端越來越預設選 Cloudflare。

不過先把行銷話切掉。你大概聽過「邊緣運算」「全球 330 個城市」「零冷啟」這種話，這些單獨拿出來都不會讓你做選擇——因為 Vercel 也喊邊緣、Fly.io 也喊全球、AWS Lambda 邊緣也說低延遲。Cloudflare 真正特別的地方，不在任何一個單點，而在三件事乘起來的位置。我想用這一集把這三件事的乘積為什麼有效講清楚，順便給你一張四題的決策樹自己對照。

第一件事是執行架構。Cloudflare Workers 跑在 V8 isolate 上面——你可以把 isolate 想成 Chrome 分頁那種輕量沙箱。它不是容器，不用開機、不用載 OS，新的 isolate 在已經跑著的 Node 程序裡幾毫秒就建出來，所以冷啟動 p99 落在兩到五毫秒，比 AWS Lambda 平均快將近四倍。對 indie 的意義是——你不用煩「哪個 region 比較熱、要不要 provisioned concurrency」這類 AWS 才會出現的問題。2026 年 4 月 Agents Week 又把 Containers 跟 Sandboxes 推到正式版，等於連「跑客戶上傳的 Python script」這種以前要自己拼 Firecracker 的事，現在 npm install 一個套件就能用。

第二件事是錢，特別是流量錢。Cloudflare 的 bandwidth、不論免費還付費、永遠不收。R2 物件儲存出站也永遠零 egress。對比一下——AWS S3 每 GB egress 收九美分，Vercel Pro 用超 1TB 後每 GB 收四毛美。同樣 10TB 月出站，R2 大概十五美、S3 大概八百九十一美。對 indie 而言這還不只是錢的事。它真正解的是另一個焦慮——「我做了一個會被分享的工具，會不會在 Hacker News 首頁的那天破產」。Vercel 確實對 indie 也有甜蜜點，但你要為一次小爆紅準備一張不可預測的帳單；Cloudflare 不會。這是心理價格、不是帳面價格。

第三件事是「surface area」，就是產品全不全。Cloudflare 自己的 blog 講過產品數已經超過 70 個，這聽起來像 AWS 的詛咒。但 indie 真正會碰的子集很小——做運算用 Workers 跟 Pages、物件用 R2、關聯資料庫用 D1、邊緣設定用 KV、stateful 用 Durable Objects、AI 推理用 Workers AI、async job 用 Queues、長任務用 Containers。八件、一個 wrangler 設定檔、一個帳單。這個「不用 glue 不同 vendor」的省力感，是讓 Cloudflare 變成預設選項的關鍵。

但是——重點來了——這三件事相乘對 indie 友善，不代表對所有人都友善。Cloudflare 的取捨明顯偏向「請求驅動、stateless、扇出全球」這種應用，也就是 2026 年絕大多數 indie 在做的東西——AI wrapper、生產力小工具、Chrome 擴充功能、SaaS dashboard。流量 spiky、單請求小、需要全球低延遲、後端邏輯薄、資料量在 GB 不是 TB。Cloudflare 整套就是為這種形狀設計的。反過來，如果你的 SaaS 是跑長任務的 ETL、要 256GB 記憶體載大模型、要 Postgres 全套擴充功能、要重 observability——那 Cloudflare 不是你的預設選項。

我建議你判斷自己該不該全押 Cloudflare 的時候，回答四個問題。第一，你的請求形狀——單請求 CPU 100 毫秒以內、回傳資料量小、偏 stateless 嗎？是的話 Cloudflare 一拳打死所有對手。第二，你的資料形狀——是「很多獨立 tenant、各自不到 1GB」還是「一個大型 normalized schema、跨表 join 很多」？前者用 D1 加 R2 加 KV 加 Durable Objects 拼一拼足夠，後者要 Postgres、那層丟給 Neon。第三，你的 observability 需求——只要 log 加基本 metrics 就夠？Cloudflare 自家工具夠用。要 distributed tracing 加長保留期？把 log 推出去到 Datadog 或 Axiom。第四，你對 vendor lock-in 的容忍度——R2 是 S3 相容好搬、Workers 走 Web 標準理論上可移到 Bun 或 Deno Deploy；但 D1、Durable Objects、Queues、Workers AI 這幾個搬走是 rewrite 不是換 deploy script。

這四題裡面有任何一題回答「不適合」，不代表你要放棄 Cloudflare。通常意思是——那一層丟給別人做，其他層仍然全用 Cloudflare。我把這個策略叫做「default-but-escapable」——Cloudflare 是預設，但你保留 escape 的路。

最後想留兩個被低估的風險給你。第一，concentration。Cloudflare 處理全球大概 28% 的 HTTP 流量。2025 年 11 月那次大 outage——根因是 Bot Management 用的 ClickHouse 資料庫一個權限變更，導致一個特徵檔大小翻倍——把 X、ChatGPT、Anthropic 一連串站點同時打掉，業界估算成本兩億五到三億美。當你把運算、儲存、CDN、DNS、auth 全押在 Cloudflare 上，他們一掛你就是全黑、不是降級、不是慢、是 502。應對不是「不要用」，是把 R2 設一個 S3 cross-region replica、把 D1 schema 設計成可以 export 到 Postgres、把 DNS 不要也託在 Cloudflare。

第二個風險，產品越多、心智越散。70 個產品的另一面是你要花心力判斷「這個 use case 用 KV 還是 D1 還是 Durable Objects」「這個任務用 Queues 還是 Workflows 還是 Cron Trigger」。indie 沒這個時間成本。所以一個經驗法則是——在 indie 階段只用八個產品就好，把 Vectorize、AI Gateway、Hyperdrive、Containers 等列為「下一階段才碰」。

所以重點是——前 12 個月的帳單骨架已經很清楚，Workers 五美、R2 幾分錢、D1 免費額度、bandwidth 永遠零，前 100 個付費用戶以內你不會超過 20 美一個月。當哪個維度撞到天花板？最先撞到的是 D1 的 10GB cap、Workers 的 5 分鐘 CPU 跟 128MB 記憶體、observability 這三條。下一集我們進到具體的運算層——Workers、Pages、Containers 三層怎麼選。
