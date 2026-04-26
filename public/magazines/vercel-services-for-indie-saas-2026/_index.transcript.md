這一輯雜誌想跟你聊一件事——如果你是一個個人開發者，現在從零開始做一個能收錢的 SaaS，Vercel 這家公司賣的這一整套東西，到底該怎麼用？

四個月前我們做過 Vol.3，那一期談的比較像市場觀察——為什麼幾乎你聽過的 AI 新創都壓在 Vercel 上面，它怎麼變成 AI 新創的預設底座、引擎是什麼、帳單長什麼樣。那一集的角度是「現象」。

這一輯換個位置坐。我們不再是觀察者，我們是要動手做產品的人。所以同樣一家公司、同樣一套產品線，我們要問的問題完全不一樣——不是「Vercel 為什麼會贏」，而是「我這個一個人團隊，要不要用？要用哪一塊？什麼時候該用？什麼時候該逃？」

這個問題比你想像的難。Vercel 在過去 18 個月把產品線從「Next.js 託管加上 serverless functions」這兩塊，擴張到八條主要產品線——有跑你程式的 Functions、有跑不可信程式碼的 Sandbox、有處理長流程的 Workflow、有事件佇列 Queues、有檔案儲存 Blob、有全球 KV 叫 Edge Config、有外接資料庫的 Marketplace、有給 AI 用的 Gateway 跟 SDK，還有一個叫 v0 的 AI app builder。每一塊都獨立計價、各自有 Hobby plan 跟 Pro plan 的限制。你選錯就燒錢，選對就能讓一個人撐起一條產品線。

這一輯雜誌總共有六篇。我大概帶你過一下會聊什麼。

第一篇是地圖。我們會把這八條產品線一張表攤開，告訴你每一條是幹嘛的、Hobby 給多少額度、Pro 怎麼計價、indie 視角下什麼時候該用。沒看過這張地圖，後面五篇你會在某個地方踩雷。

第二篇講起步路徑。我們會深入聊一件大多數 indie 不知道、但條款寫得很清楚的事——Vercel 的 Hobby plan 不是「免費 tier」，它是一份「非商用」契約。你只要在站上放 pricing 頁、放 AdSense、宣傳你的服務，理論上就違反了。第一個付費客戶的當天就該升 Pro，這個觸發點為什麼這麼乾淨，我們會慢慢拆。

第三篇進到 AI SaaS 的最短路徑。我們把 AI SDK、AI Gateway、Vercel Sandbox 這三件套各自的職責拆清楚——SDK 是膠水、Gateway 是路由、Sandbox 是隔離區。三件套不需要同時用，但用對的時間用對的，整個 AI 產品的開發成本會差很多。

第四篇講資料層。Vercel 自家的 Postgres 已經退役了，現在資料庫都是從 Marketplace 接 Neon、Supabase、Upstash 這些外部 provider。我們會給你一棵按工作負載對應 provider 的決策樹——你要 Auth 一條龍就 Supabase，你要最便宜的 Postgres 就 Neon，你要 cache 跟 rate limit 就 Upstash。

第五篇談背景任務。Stripe webhook 漏單、寄信卡住前端、AI 任務跨越 60 秒 timeout——這三個訊號是 indie 第一次需要背景任務的時候。我們會聊 Vercel 自己的 Cron、Queues、Workflow 各自的位置，也會跟 Inngest、Trigger.dev 比一下你該選哪個。

最後一篇是反面。我們會誠實聊三個最容易爆 Vercel 帳單的隱性成本——bandwidth、Image Optimization、長時間執行的 Function。也會給你一條 exit playbook——什麼時候該漸進地搬一部分到 Cloudflare、Hetzner，什麼時候你還是該留下來。

整輯雜誌的定位是工具書，不是 Vercel 的廣告，也不是反 Vercel 檄文。資料截至 2026 年 4 月，所有定價跟限制以官方頁面為準。

如果你正在做、或者正在想做一個個人 SaaS，這六篇應該能幫你少走滿多冤枉路。我們從第一篇地圖開始。
