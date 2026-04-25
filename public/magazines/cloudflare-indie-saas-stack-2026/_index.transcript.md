這一集想跟大家聊一個我自己很想搞清楚的題目——2026 年要做一個 indie SaaS，後端到底要選什麼。

過去這幾年，這個問題的答案其實一直在變。最早大家是 AWS，自己拼 EC2、RDS、S3，配一堆 Lambda、DynamoDB、CloudFront；後來變成 Vercel 加 Supabase 這種套餐——一個處理前端與函式、一個處理 Postgres 跟 auth；再後來 Render、Fly.io、Railway 也分掉一塊「我就是想跑一個容器」的市場。但到了 2026 年，至少在 indie 圈，越來越多人講的不是這幾家，而是 Cloudflare 一家全包。這個轉變我覺得值得花一整期雜誌好好拆。

先說「為什麼會變」。Cloudflare 起家是 CDN 跟 DDoS 防護，但從 2017 年開始，他們把整套開發者平台一層一層疊起來——Workers 是邊緣運算、R2 是物件儲存、D1 是 SQLite 資料庫、Durable Objects 是 stateful 物件、Workers AI 是邊緣推理。到 2026 年 4 月，他們又把 Containers 跟 Sandboxes 推到正式版，等於連「我就是要跑一個完整 Node 程序」「我要跑客戶上傳的 Python」這兩條過去要丟去 Render 或 Fly 的路也補起來了。

但這期不是要當 Cloudflare 的廣告。重點不在「Cloudflare 有 70 個產品」這種行銷話，而是——對一個獨立開發者、一個小團隊來說，這 70 個裡面真正用得到的是哪幾個？哪些限制會在你做大之後咬人？哪些工作流目前還是不該丟給 Cloudflare？

我把這期分成六集來談。第一集是選型總覽，回答「為什麼 Cloudflare 是 2026 indie 的預設選項」，給你一張四題的決策樹自己對照。第二集講運算的三層——Workers、Pages、Containers，到底新專案該用哪個、Pages 在 2026 是不是已經該避開、Containers 解了什麼問題。第三集是儲存四件套——D1、R2、KV、Durable Objects，每一個的甜蜜點在哪、什麼時候會誤用，最後我會給兩個典型 indie SaaS 的架構圖示範怎麼配對。第四集談 AI——Workers AI、Vectorize、AI Gateway、Agents SDK，但這集會花最多時間講「什麼時候該外接 GPT-5 或 Claude 而不是用 Cloudflare 自己的模型」，因為這個判斷直接決定你的產品品質。第五集是錢——把一個 1,000 DAU 的真實 SaaS 從零拉到五十美一個月，每一塊錢花在哪，跟 Vercel 加 Supabase 的曲線比怎麼比。第六集是盲點——Cloudflare 不適合誰、什麼情境該混搭、哪些東西真的鎖死了搬不走。

為什麼這個題目值得花六集？因為 2026 年的 indie 後端選型，不是「哪家便宜哪家用」這麼簡單。你選的不只是工具，是未來兩三年的架構假設、是你的 lock-in 成本、是你撞牆時的退路。Cloudflare 厲害在哪我覺得很清楚——邊緣零冷啟、零 egress 流量費、一站式產品線，這三件事乘起來目前沒有對手追得上。但「目前沒有對手」不等於「全押進去就對」。Cloudflare 在 2025 年 11 月跟 2026 年 2 月各 down 過一次大事故，每次都是一連串站點同時黑掉；它的 stateful 原語一旦寫進去就難搬；它的 observability 還明顯輸給 Datadog 那一票成熟堆疊。這些都是值得你動手寫第一行 code 之前就先知道的事。

所以這期想給你的，不是一張「Cloudflare 是神」的清單，而是一張「在哪些維度上 Cloudflare 是默認選項、在哪些維度上你該保留退路」的地圖。我盡量把所有定價、限制、產品狀態都標到 2026 年 4 月，所有不確定的數字都標清楚是估算，文末附可追溯的來源。

讀完這期，你應該能比較有把握地回答兩個問題。第一，把 SaaS 蓋在 Cloudflare 上，前 12 個月的賬單長什麼樣？這個答案大致是——前 100 個付費用戶以內，月費可能還在 20 美以下。第二，當哪一個維度撞到天花板的時候，你該往哪裡拆？這個答案會是——D1 的 10GB、Workers 的 128MB 記憶體跟 5 分鐘 CPU、observability 這三條是最先撞到的。

接下來六集，我會把這條從「Cloudflare 是預設」走到「該怎麼escape」的路一步步畫完。我們從第一集開始——為什麼 Cloudflare 成了 indie SaaS 的預設後端。
