上一集講了運算的三層怎麼選，這集我們把焦點拉到儲存——Cloudflare 在 indie 階段真正會用到的四件套，D1、R2、KV、Durable Objects，每一個的甜蜜點在哪、怎麼避開誤用、最後怎麼拼成一個典型 SaaS 架構。

先把每個的角色用一句話總結。D1 是你的關聯資料庫主場，但別當無限用。R2 是「所有不是用來查詢的 bytes」都丟這。KV 是 cache，不是資料庫。Durable Objects 是「per-tenant 的單執行緒 stateful server」，是這四個裡面最強、也最容易被誤解的。

從 D1 開始講。D1 是 Cloudflare 在 Workers 之上跑的 SQLite-as-a-service。技術上它就是 SQLite——Worker 透過 binding 對某顆 D1 database 發 query，背後是一顆 Durable Object 在某個地理區裝載 SQLite 檔案，加上時間點還原、複本、Smart Placement 這些功能。

D1 的限制有幾個你一開始就要記住。第一，單庫 10GB 是硬上限，不能加大、不是 quota、不是聯絡 sales 可以開的。Cloudflare 的官方答案是「水平切」——Paid plan 一個帳號可以開到 50,000 個資料庫。對 indie 來說 10GB 在前一到三年都裝不滿，但你必須一開始就決定「我永遠用一顆主庫」還是「我為每個 workspace 開一顆」，事後改 schema 痛苦遠比 PostgreSQL 多。第二，計費——Paid 包進去 25 億 reads 加 5,000 萬 writes 一個月。這意味著什麼？讀超便宜、寫不便宜、儲存不便宜。25 億 reads 大概等於每月一萬 DAU 每人一天打 80 次 query——indie SaaS 在這個量級之前讀不要錢。

什麼時候別用 D1？三個情境——你需要 Postgres 才有的功能像 PostGIS、pgvector、JSONB GIN、stored procedure，那走 Hyperdrive 加 Neon 或 Supabase。單表預期超過 10GB 又不想 sharding，那改用 R2 加 Parquet 或外部 OLAP。重度分析查詢、需要在數百萬列上跑 window function——SQLite 雖然有 window function 但不擅長這量級，30 秒會被 timeout 切。

接下來是 R2。R2 在 indie 心智裡的位置很單純——所有不是用來查詢的 bytes 都丟這。使用者上傳的圖片、頭像、附件、生成的 PDF、影片轉碼產物、備份 dump、靜態 build artifact、AI 模型權重、訓練資料。

它跟 S3 的差距三件事——egress 永遠免費、API 是 S3 相容、儲存價格便宜。同樣 10TB 月出站 R2 大概十五美、S3 大概八百九十一美。

對 indie 真正關鍵的架構規矩——Worker 不要中繼整顆檔案。Worker 只有 128MB 記憶體，遇到 100MB 影片會炸。正確做法是讓使用者瀏覽器直接 PUT 到 R2 的 presigned URL，Worker 只負責驗權限、簽 URL、上傳完成後寫一筆 metadata 到 D1。Cloudflare 官方參考架構就是這個 pattern。

R2 的雷區——Infrequent Access tier 強制 30 天最少存放，提早刪也照收，所以 hot upload 不要丟錯 tier。歐盟客戶要 data residency 的，R2 有 EU jurisdiction 設定要去查清楚。然後 2025 年 2 月 R2 發生過 59 分鐘 outage——人為誤操作關掉 Gateway，無資料損失但服務中斷——所以「絕對不可離線」的應用要評估 cross-region 備份。

接下來是 KV，它是被新手誤用最多的——名字像資料庫、行為像 CDN cache。它真正的特性是——最終一致性，每筆寫入要 60 秒以上才在所有 PoP 一致；每個 key 一秒只能寫一次；計費上寫一百萬次要五美、讀一百萬次只要五毛——寫多絕對不選 KV。

KV 的甜蜜點是這幾種——feature flag 的 read-through cache、session token 查找一次寫之後純讀、API key 跟路由表跟短網址映射、A/B 測試的 bucket。共同特徵是讀爆、寫罕見、不怕 60 秒延遲。什麼時候別用？使用者 profile 不能用 KV，因為「我剛改密碼但 60 秒內還能用舊的」這種狀況不能接受。任何「讀剛寫進去的東西」這種 read-after-write 場景也不行。計數器、leaderboard、限流也不該用 KV，因為寫太頻繁又有單 key 一秒一次的上限。

簡言之 KV 不等於 Redis。要 Redis 行為就用 Durable Objects 包一顆 in-memory counter，或上 Upstash Redis。

最後是 Durable Objects——四件套裡最強、也最不直覺的。最精準的描述是「全球散布的、無限多顆、單執行緒的 server」。你可以程式化開無限顆，每顆是一台單執行緒 server，自帶 in-memory state 跟持久化的 SQLite，sticky 跑在某個地理區。每顆 DO 內建一個 SQLite，2026 年 4 月 v2 SQLite-backed 是 GA 預設後端，每顆 10GB。SQLite 跑在 DO 同一個 thread，query 等於本機呼叫——零延遲。

DO 的甜蜜點很多——多人即時協作（Figma、Notion、Excalidraw 那一類）一個文件一顆 DO、WebSocket 全進去、CRDT 直接存 SQLite。聊天室或多人遊戲房一個 room 一顆 DO，hibernation 機制讓 99% 閒置 room 不收費。per-user 的 inbox 或通知中心、per-tenant 計費 ledger、rate limiter，這些都是甜蜜點。

雷區也清楚——單顆約 1,000 req/s 軟上限，熱點 tenant 會卡，要設計分片 fallback。128MB 記憶體不要把整個 SQLite 表 load 進記憶體。lock-in 最深——D1 還能 export 檔案、R2 是 S3 相容、KV 大不了拋掉重寫，但 DO 是 Cloudflare 獨家、遷出要重寫架構。然後 SQLite 計費 2026 年 1 月 7 號才正式啟用，如果你 2025 拿 DO 當無上限 KV 塞，2026 要重新審帳單。

把這四件套配起來會長什麼樣？我給兩個典型 indie 架構。第一個是 dashboard 類 SaaS——Linear、Notion-lite、Figma 類。D1 放使用者、團隊、訂閱、帳單明細這種交易型 schema。R2 放上傳的檔案，瀏覽器直傳走 presigned URL。KV 做 feature flag 跟 session 的邊緣 cache。Durable Objects 做協作型 doc 一個 DO，WebSocket 全進去、CRDT op 直接存 DO 內嵌 SQLite。什麼時候會壞？D1 主庫的 user 表逼近 10GB 就會被迫 sharding。

第二個是上傳重加 AI 處理——影片站、圖庫、AI 工具站。R2 是主角，所有原始跟處理過的 binary 都在這，零 egress 對影片站是命門。D1 只放 metadata，不在 D1 存任何 BLOB。Durable Objects 每個處理任務一個 DO，當有限狀態機——upload 到 transcode queue 到 AI inference 到 done。KV 做公開影片的 metadata snapshot 邊緣快取。

兩個架構的共同心法——D1 等於 transactional metadata、R2 等於 bytes、KV 等於 read-mostly cache、DO 等於 stateful coordinator。把每樣東西放對抽屜，整個 stack 在 Workers Paid 5 美加上偶爾超量的階梯計費下，一個 indie SaaS 走到月活幾千、營收幾千美的階段，月費極可能還在 20 到 50 美內。

所以重點是——D1 是主資料庫但別當無限、R2 是所有 bytes 的家、KV 是 cache 不是 DB、Durable Objects 是你最強的武器但 lock-in 也最深。下一集我們進到 AI 那層——Workers AI、Vectorize、AI Gateway、Agents SDK 在 2026 年是什麼位置，特別是「什麼時候該外接 GPT-5 而不是用 Cloudflare 自家模型」這個關鍵判斷題。
