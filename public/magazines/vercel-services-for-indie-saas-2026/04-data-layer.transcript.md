這一集我們聊資料層。如果你有聽前一集，我們講了 AI SDK、Gateway、Sandbox 三件套——AI 那塊講完了，今天回到一個更基本的問題——你的 SaaS 把資料存哪？

我先講一件可能很多人還沒注意到的事——Vercel 已經退出資料庫經營了。2024 年底到 2025 年初，他們默默把所有 Vercel Postgres store 搬到 Neon，新案子直接從 Marketplace 走 Neon native integration。表面上看是基礎設施調整，實際上是個明確的政治宣告——Vercel 不打算自營資料庫，他們把這件事外包給更專業、也更願意打價格戰的 serverless DB 公司。

對 indie 來說這是好事，理由有三個。第一——競爭壓低成本。Marketplace 上 Neon、Supabase、Upstash、EdgeDB、AWS Aurora 全部在同一個介面下被你直接比較，2025 年 Neon 被 Databricks 收購之後，反而把 storage 從 1.75 美元砍到 0.35 美元一個 GB-month。第二——整合不再是賣點。以前選 Vercel Postgres 是為了「按一鍵就接好」，現在 Marketplace 任一家都會自動把 connection string 寫進 env、計費合併。第三——Vercel 專心顧自己會贏的兩塊：Blob 跟 Edge Config。

那我們先把 Vercel 自家剩下這兩塊講完，再進到 Marketplace 三巨頭。

Vercel Blob 是檔案儲存，定位是「用戶頭像、產品圖、影片、PDF」，跟 S3 / R2 同級。對 indie 的意義是——你做 SaaS 一定會碰到 user upload，這條路不用再額外開 AWS 帳號、不用設 IAM。但如果你的檔案量會破 100 GB 或者 transfer 是主要成本，Cloudflare R2 仍是更便宜的選擇——因為 R2 不收 egress 費。

Edge Config 比較容易被誤用。它是全球同步的小型 KV，P99 小於 15 毫秒，跟 Middleware 搭配可以做 feature flag、IP blocklist、緊急 redirect、維運開關——但有三條硬限制要記住。第一——寫入要全球傳播最多 10 秒，所以不適合即時寫入。第二——每個 project 最多接 3 個 store。第三——少而大的 store 比多而小的好。要把它當「部署一次、之後隨時無痛調整參數」的設定檔，不是線上 DB。

接著講 Marketplace 三大主力。我用一個很簡單的方式描繪三者的差別——你可以想像成三個人的對話。

Neon 說，我是 serverless Postgres，scale-to-zero 是我的殺手鐧——5 分鐘閒置自動 suspend，閒置成本趨近於零，但 cold start 會吃 100 到 300 毫秒。我還有一個內建殺手鐧叫 database branching——你可以為每個 PR 開一個 DB branch，preview env 真的有真實資料。我的計價是用量制，Launch 19 美元起。

Supabase 說，我不是 DB，我是 platform——Postgres 之外還幫你包了 Auth、Storage、Realtime、Edge Functions。如果你想自己刻 OAuth、email magic link、RBAC，大概要燒 2 到 4 週，我一個下午搞定還順便給你 RLS。但如果你只用我的 Postgres，等於繳了平台稅。我的 Pro 25 美元一個月起。

Upstash 說，我是 serverless Redis，但我跟傳統 Redis 不一樣——我走 HTTP REST，每次請求自帶認證，沒有 connection pooling 的鬼故事。傳統 Redis 的 TCP 長連線在 Edge Function 跟 Lambda 環境會吃光連線池，我直接繞掉這個問題。我還有 Vector 跟 QStash。我的計價是按 request 算，500K commands 一個月免費。

那實務上你怎麼選？我想給你一棵決策樹的口語版。

第一刀——你要存的是結構化關聯資料，還是非結構化？這刀不要省，搞錯會讓你之後重寫一次。

如果是結構化——再問你需不需要 Auth、Realtime、Storage 一條龍？需要的話 Supabase 直接選下去；不需要的話再問流量起伏大不大、需不需要 DB branching。起伏大或要 branching 就 Neon；流量穩定要 always-on 就考慮 Aurora 或者還是 Neon。

如果是非結構化——再分檔案、設定、cache 三條。檔案而且量小走 Vercel Blob；檔案而且 transfer 大走 Cloudflare R2。設定就是 Edge Config。cache 或 rate limit 或 session 就 Upstash Redis。如果是 vector，問你已經在用 Postgres 了嗎？是的話直接 Neon 加 pgvector，少維護一個 service；否則 Upstash Vector。

最後我想講三件 Marketplace 的成本含意，初次聽到滿違反直覺的。

第一——整合計費不等於比較便宜。你付的價格跟直接從 Neon、Supabase、Upstash 官網開帳號通常是一樣的，差別只在請款流程：少一張信用卡、少一筆對帳。對 indie 來說，這已經有價值了。

第二——vendor lock-in 是真的。env var 由 Vercel 管，搬家時你要自己處理 connection string 移植。建議在 code 裡用自定 env 名比方說 DATABASE_URL，再從 Vercel 注入的 POSTGRES_URL alias 過去，避免硬編死。

第三——用量制 provider 半夜可以被 bot 打到飛，第一週上線就把 spend cap 設好。Neon 有 5 / 19 / 69 三檔起跳，Upstash 也有 monthly budget alert。

整集的結論是——在 2026 年，「Vercel 加上 Marketplace 三巨頭其中之二」幾乎是 indie SaaS 的預設組合。你不需要每個產品線都自己重新評估，把這套組合當 default、只在有具體理由時才偏離，能省下大量決策疲勞。

下一集我們進到背景任務——Stripe webhook、寄信、AI 長任務這三個典型場景，Vercel 的 Cron、Queues、Workflow 該怎麼選。我們下集見。
