前面四集我們把運算、儲存、AI 各層拆完了，這集進到我覺得最 indie 會關心的問題——錢。一個真實的 indie SaaS 從零開始，月費怎麼長？什麼時候會跳價？跟 Vercel 加 Supabase 的曲線比怎麼比？我用一個 1,000 DAU 的假想 SaaS 算給你聽。

先給你一張總覽——零美階段、五美階段、二十到五十美階段，三個區段各自的特徵不一樣。

零美階段——免費 tier 對 90% 的 indie SaaS 真的夠到 demo 階段。Workers Free 是每天 10 萬個請求加每次調用 10 毫秒 CPU；Workers KV 是每天 10 萬讀加 1,000 寫；D1 是每天 500 萬讀加 10 萬寫加 5GB；R2 是 10GB 加每月 100 萬個 Class A 操作加 1,000 萬個 Class B 操作、egress 永遠免費；Workers AI 每天 10,000 Neurons；Pages 每月 500 個 build。

把這些換算成「真實的 indie SaaS」——每天 10 萬請求大概等於每秒 1.16 個的長期負載，配上每使用者每天 30 個 page view，意思是大約 3,300 個 daily active users 才會撞到 Workers 免費上限。10GB R2 在每使用者 50MB 上傳的情境下大概能容 200 個重度使用者，或 2,000 個只放頭像加一兩張附件的使用者。D1 的 5GB 是真的很多——按每行 200 bytes 的典型業務資料計算等於約 2,500 萬列。

但有兩個地方會先咬人。第一是 Workers 免費 plan 的 10 毫秒 CPU——一旦你做圖片縮圖、JSON Schema 驗證迴圈、Markdown render，在 100 毫秒級的 cold path 很容易就破。第二是 KV 的每天 1,000 寫——只要你拿 KV 當 session store 或計數器，10 個活躍使用者就會把這個額度吃光。我看過的 reddit 抱怨幾乎都集中在這兩點。處方很清楚——KV 當 read-heavy cache，session 跟 counter 改用 Durable Objects 或 D1；CPU-ms 用 wrangler tail 觀察、超過 3 毫秒就要找原因。

接下來五美階段。升上 Workers Paid 那一刻整張表全變了——10M requests、30M CPU 毫秒、KV 是 10M reads 加 1M writes、Hyperdrive 不限查詢、D1 是 25 億 reads 加 5,000 萬 writes 加 5GB、Durable Objects 是 1M req 加 40 萬 GB-second 加 5GB SQLite。

這裡最反直覺的是 D1 的 25 億 reads。把 1,000 DAU 各自每天打 100 次 query 算進去，一個月總 reads 等於 1,000 乘 100 乘 30 等於 300 萬——只用了配額的萬分之一。很多 indie 的故事就是這樣——以為「商業級資料庫每月幾十塊很便宜」，結果一上 Cloudflare 才發現原來「便宜」是兩個數量級的差距。

我把 1,000 DAU 的算術走一遍給你聽——假設每使用者每天 30 個 page view，每個 page view 等於 1 個 Worker 請求加 2 次 D1 讀加 0.1 次 D1 寫，每使用者上傳 50MB 到 R2、每月撈 5 次。月度用量大概是——Workers 90 萬請求包進 10M、CPU 假設每請求 5 毫秒等於 450 萬 CPU 毫秒包進 30M、D1 讀 180 萬包進 25 億、D1 寫 9 萬包進 5,000 萬、R2 儲存 50GB 超出免費 10GB 的 40GB 乘 1.5 美分等於六毛、R2 Class B 15 萬次包進 10M。

這個月帳單——5 美 base 加 6 毛超量等於 5.6 美。這是「使用者付你 10 美一個月、你的後端成本是 5%」的階段。dev.to 上有個跑 production RAG 的 indie 公開帳單是 8 到 10 美一個月，每天處理 1 萬次搜尋——Workers 3 美加 Workers AI embedding 3 到 5 美加 Vectorize 2 美，替代掉 Pinecone 50 到 70 美加 OpenAI embedding 30 到 50 美加 EC2 的 35 到 50 美，省下 90% 以上。

現在進到二十到五十美階段。重點是——升到這裡通常不是「使用者變多」，而是踩中三條坡度比較陡的曲線。

第一條 Workers AI 推理量。免費額度是每天 10,000 Neurons 等於每月 30 萬，超過後是每千 Neurons 1.1 美分。一個輕量 7B 模型單次推理大概 100 到 500 個 Neurons，意思是免費可以跑每天 600 到 3,000 次。一旦你做的是「每使用者每天打 30 次推理」、1,000 DAU 就等於每天 90 萬 Neurons、超出 89.9 萬，月超量等於 2,700 萬 Neurons 乘 1.1 美分等於 297 美。這個維度上 Cloudflare 不便宜——同樣負載丟到 OpenAI GPT-5.4 nano 通常更划算。

第二條 Stream。Cloudflare Stream 的定價是 storage 5 美每千分鐘加 delivery 1 美每千分鐘。聽起來便宜，直到你做的是「使用者上傳一小時影片、平均每支被觀看 50 次」——存 100 支等於 6,000 分鐘 storage 等於 30 美、delivery 100 乘 60 乘 50 等於 30 萬分鐘等於 300 美。每月 330 美一下就把 indie 級預算打穿。要做使用者觀看為主的 SaaS——教學、健身、播客 video——Stream 不是預設答案。

第三條 Class A operations 失控。R2 的 Class A 是 PUT、COPY、POST、LIST，每百萬次 4.5 美。聽起來很多，但只要你 import 大量小檔案——Markdown 站靜態圖、log shipping 一條一個 PUT——一百萬次很快就破。我看過一個案例是把 OCR 後的單字級結果寫成 R2 物件、平均每使用者每天產生 2,000 個 PUT——1,000 DAU 一天等於 200 萬 PUT 乘 30 等於 6,000 萬一個月，超量等於 5,900 萬乘 4.5 美等於 265 美。處方——要嘛 batch 寫到 D1、要嘛改寫到 Durable Objects 的 SQLite 每百萬次只要 1 美。

實際上多數正常的 indie SaaS 在 1,000 到 5,000 DAU 階段月費落在 8 到 25 美區間——5 美 base 加 R2 storage 超量 1 到 5 美加偶爾 Workers AI 推理 2 到 10 美加 DO 寫入 1 到 5 美。要超過 50 美一定是上述三條曲線之一被觸發。

把同一個假設的 1,000 DAU SaaS 擺到 Vercel 加 Supabase——base 月費是 Vercel Pro 20 美加 Supabase Pro 25 美等於 45 美。200GB egress 在 Cloudflare 是 0 美、在 Vercel 跟 Supabase 是 13.5 美。月費合計大概 58 到 60 美——是 Cloudflare 的 7 到 10 倍。

但這不是公平比較，因為兩邊的 DX 不一樣。Vercel 加 Supabase 給你的是 Postgres 不是 SQLite、Next.js full SSR 沒任何 30 秒 CPU 限制、內建 auth UI。如果你是 Next.js 起家的團隊，省下的不是月費而是時間。

真正的觸發點是——Vercel 的 bandwidth 超量每 GB 4 毛、破 1TB 後每多 100GB 多 40 美的曲線是 Cloudflare 沒有的。R2 加 Workers 對 indie SaaS 等於把那條斜線壓平到零。Supabase 的 DB egress 50GB 後每 GB 9 分美也是另一條會在使用者操作頻繁時加速的曲線。換句話說——Cloudflare 的成本曲線在 indie 階段是橫的，其他家是先平後陡。

所以要記住的三件事——免費 tier 對 90% 的 indie 真的夠到 demo 階段，主要要避開的是 KV writes 跟 CPU-ms 不是儲存。5 美是平台費不是上限，升上 Workers Paid 是把整套服務拉進「包月模式」，1,000 DAU 級別的真實月帳通常落在 5 到 15 美。50 美以上是維度問題不是規模問題，Workers AI 大量推理、Stream 大量觀看、Class A 失控才是真正會把你拉出 50 美區間的觸發點。

這條曲線的形狀就是 Cloudflare 對 indie 最強的承諾——前 12 個月幾乎不會有「驚嚇月帳單」。下一集我們把它翻過來，談盲點——什麼時候不該全押 Cloudflare、退場路徑長什麼樣。
