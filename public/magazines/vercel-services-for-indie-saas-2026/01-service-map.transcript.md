這一集是這一輯雜誌的第一篇——我們先把 Vercel 的全產品線地圖攤開來看。

先講一下背景。四個月前我們在 Vol.3 拆過一次 Vercel，那一次的角度是「為什麼這家公司會變成 AI 新創的預設底座」——比較像市場觀察。這一輯換個角度——你是個人 SaaS 創業者，從零開始要做一個能收錢的東西，Vercel 賣的這一整套到底該怎麼選？

要回答這個問題，我們得先看清楚地圖。Vercel 在 2025 到 2026 這段時間，把自己的產品線從原本「Next.js 託管加上 Functions」這兩塊，擴成五大類、十多個 SKU。每一條獨立計價、各有 Hobby 跟 Pro 的限制。如果你不知道這張地圖長什麼樣，後面五篇你都會在某個地方踩雷。

那我先用講的，把這五大類描一遍——你閉著眼睛大概也能想像。

第一類叫 Compute，就是「跑你程式」的地方，底下有四條 SKU：Functions、Sandbox、Workflow、Queues。Functions 是最常見的、跑 API 跟 SSR；Sandbox 是專門跑使用者寫的、或者 LLM 產出的不可信程式碼，用 Firecracker microVM 隔離起來；Workflow 是寫長流程的，可以跨 deploy 跨數天還能繼續跑；Queues 是 Workflow 底下更基礎的事件流。

第二類叫 Storage，就是「放東西」的地方，有兩條：Blob 是檔案儲存，跟 S3 同級；Edge Config 是全球同步的小型 KV，讀很快、寫得慢、放 feature flag 用。

第三類叫 AI，給你串模型用的，有 AI SDK、AI Gateway、v0 三條。SDK 是 TypeScript library；Gateway 是路由近百個模型的 HTTP endpoint；v0 是 AI app builder，可以幫你直接生 Next.js 加 shadcn 程式碼。

第四類叫 DX，就是 developer experience——CLI、Toolbar、Flags、Observability 這些開發工具。

第五類叫 Marketplace，這是最重要、也最容易被忽略的——Vercel 不再自己賣資料庫了，你想要 Postgres 就接 Neon，想要一條龍 Auth 加 DB 就接 Supabase，想要 Redis 就接 Upstash，這些都是從 Marketplace 走進去、credentials 自動寫到 env、計費合進 Vercel 月帳。

聊完五大類，我想跟你建立兩個觀念，因為這兩個沒抓住，你看 pricing 頁會看到頭爆掉。

第一個觀念是——「產品」跟「計價單位」不是一對一。你不要看到 Functions 是一條 SKU 就以為它只有一條費用線。實際上 Functions 底下會被切成 Active CPU、Provisioned Memory、Function Invocations 三條費用線。Blob 更狠，切成 Storage、Simple Operations、Advanced Operations、Data Transfer 四條。所以 Hobby 看起來是「一張表全綠」，但 Pro 對你來說是「十幾個小儀錶板每個都會冒費用」。第一天就要心理準備好。

第二個觀念是——Fluid Compute 不是新產品，是 Functions 的執行模型。Vercel 從 2025 年 4 月對所有新專案預設打開這個東西，意思是多個 invocation 可以共用同一個 instance、I/O 等待的時候不算 CPU 錢。對 indie 的意義很直接——LLM call、AI agent 這類「大半時間在等 OpenAI API 回應」的工作，CPU 帳單會比 2024 年舊的 GB-Hours 制度便宜 60% 到 90%。所以後面講「Compute / Functions」的時候，你不用再分 Edge 跟 Serverless 兩條路想——支援 Node、Python、Edge、Bun、Rust，預設都是 Fluid。

接下來我們講一個重要的觀察——Marketplace 是 Vercel Postgres 退役之後的補丁。Vercel 自家的 Postgres 在 2025 年下架，原本的用戶被遷移到背後本來就在跑的 Neon。今天你要在 dashboard 按一個鈕開資料庫，本質都是去 Marketplace 接外部服務。對你的意義有兩層——好處是 Vercel 不再賣資料層，所以你不會被 Vercel 全家桶 lock-in 死死的；壞處是你會多一張帳單要看，Vercel 那邊一張、provider 那邊一張，有的可以合併、有的不行。

那 indie 第一年到底會用到多少條 SKU 呢？我的觀察是——通常只會碰四條：Functions 含 Fluid、Blob、Marketplace 上一個 Postgres、AI Gateway。等流量起來、流程變複雜，才會輪到 Sandbox 跑使用者程式碼、Workflow 跑長流程、Edge Config 放低延遲設定。

所以這一集的重點是——把這張地圖收進腦袋，後面五篇每一篇都會對應到地圖上的某一格。下一集我們從第二篇開始，談一件大多數 indie 都低估的事——Vercel 的 Hobby plan 條款明文禁止商用，這條紅線你不知道就慘了。我們下集見。
