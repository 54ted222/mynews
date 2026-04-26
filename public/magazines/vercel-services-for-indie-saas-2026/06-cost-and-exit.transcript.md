這一集是這一輯雜誌的最後一篇——我們講反面。前面五集都在告訴你 Vercel 怎麼用得順，這集要誠實聊三個最容易爆的隱性成本，以及什麼時候該逃、怎麼逃。

先把我的立場講清楚。這集不是反 Vercel——對流量低、靜態為主、Next.js 重度依賴的 indie SaaS，Vercel 留在每個月 20 美元是真實場景。但對 bandwidth-heavy、image-heavy、long-running 工作負載的 SaaS，提早設好 Spend Management 跟 exit plan 才是負責任的做法。

我們先講三個最容易爆的隱性成本。

第一個是 bandwidth——每 GB 0.15 美元，超過 Pro 內含的 1 TB 之後就開始算。1 TB 聽起來很多，但實際換算非常容易見底。一張未壓縮的桌面截圖大概 2 到 5 MB，1 TB 約 20 到 50 萬次完整載入。一支 1080p 短片 30 秒大概 10 到 30 MB，1 TB 約 3 到 10 萬次播放。聽起來還行對吧？

問題是「意外爆紅」這件事不是漸進的。一篇 Hacker News 首頁文、一個 viral tweet、一支 TikTok demo，可以在 24 小時內讓你的 bandwidth 從每天 5 GB 跳到 500 GB。回頭結帳，超出 1 TB 的 5.6 TB 大約是 840 美元——這還算少的。Indie Hackers 跟 Reddit 上有人月帳衝到 1800 美元，有人受 DDoS 攻擊收到 23000 美元帳單——Vercel 對所有 traffic 收費，包含惡意請求，只能靠 WAF 或 spend cap 自救。

更陰險的是——bandwidth 不只算 HTML 跟圖片。/api 的 response body、Server Components 的 RSC payload、next/image 優化後的 webp 全部算。有人發現 React Server Components 的序列化 payload 在某些頁面比 HTML 還大。

第二個是 Image Optimization。next/image 在 Vercel 上是預設啟動的 hosted service。Pro 內含 5000 張 source image，超出每 1000 張大概 5 美元。HowdyGo 的案例是教科書範例——他們是互動式 web app 錄製重播工具，本來就是 image-heavy 場景，月優化量 28000 張。他們自己的話是——「這會在我們 20 美元一個月的 hosting 費用上多加 115 美元，幾乎是 7 倍。」他們的解法是自架 AWS Lambda 加 S3 加 CloudFront，整體減少超過 80% 的託管成本。這個案例的教訓不是 Vercel 太貴，而是——單一 SaaS 一旦進入「優化是核心使用情境」的領域，hosted Image Optimization 的單位成本必然失控。

第三個是 Active CPU 加上 Provisioned Memory，這是慢性累積。2024 到 2025 年 Vercel 把計費從 GB-second 改成這兩段。對短任務、I/O bound 的工作——API 接 LLM、查資料庫等回應——這個改動實際省 80 到 90%。但對長 server 持續工作——cron job、影片轉檔、批次處理、長 SSE streaming——情況反過來。function 開著就在收 memory 費、CPU 跑著就在收 CPU 費。這類 workload 走「Vercel 的 sweet spot 之外」，搬到 Hetzner 5 美元一個月 VPS 跑 Node 持續服務反而便宜兩個數量級。

接著我們講真實案例——留下來的人、跟搬走的人。

留下來的人——比方說小型 B2B SaaS dashboard，流量低於 50 GB 一個月、5000 張圖片以內、API 都打外部第三方，每月實付就是 base 20 美元，連 spend management 都不用設。或者靜態文件站加上 Cloudflare 反代，把 bandwidth-heavy 的圖片影片丟給 Cloudflare R2 / Stream，Vercel 只服務 HTML 跟 dynamic API，多數人月帳穩定 20 美元。

搬走的人——HowdyGo 我們講過了，自架 AWS 後省 80%。Indie Hackers 上有個叫 mdx-one 的案例，月帳 1800 美元不可持續，重構降回 20 美元。影音、檔案下載類，bandwidth 一定爆，社群普遍建議直接 Cloudflare Pages 加 R2。

留 vs 逃不是價值判斷，是工作負載判斷。同一個 Vercel，對不同 workload 的單位成本可以差兩個數量級。

接下來我想花一點時間講 Vercel 自己提供的 Spend Management。它能不能救你？可以救一部分，但不要當成唯一防線。三個關鍵限制要記住——第一，檢查不是 realtime，每幾分鐘檢查一次。你設 200，實際可能在 215 到 250 才停。對 bandwidth burst 攻擊或 viral 事件，幾分鐘內可以多燒幾百美元。第二，暫停是「整個 team 所有 production project」，不能只停某個 leak 嚴重的 project，會把你整個 team 全部停掉、回 503。第三，資源範圍只算 metered usage，不含 seats、Marketplace integration、add-ons。實務建議是——spend cap 設在你絕對上限的 70 到 80%，再搭配 webhook 自己接 Slack 或 SMS，做到第一時間人為介入。

最後我們講 exit playbook。

我的建議是漸進式退出，不要一次大搬家。先把流量大戶切走、Vercel 主站留著。

第一階段一個下午——靜態 asset、影片、大檔案改 host 在 Cloudflare R2，DNS 指過去。bandwidth 立刻砍掉七八成。

第二階段一週——圖片改走 Cloudflare Images，把 next/image 的 loader 換成自訂 loader 指向 Cloudflare。

第三階段兩週——long-running API 拆出去 Fly.io 或 Hetzner。Vercel 上保留 short Edge function。

第四階段一個月，這是 optional——整站搬 Cloudflare Pages 加 Workers。Next.js 的 App Router 有些 RSC 模式在 Cloudflare adapter 上有 edge case，要留時間做 regression test。

替代方案沒有銀彈。Cloudflare Pages 加 Workers 加 R2 是零 egress，但 DX 跟 Next.js 相容性是有代價的。Netlify 跟 Vercel 邏輯類似。Railway 適合 monorepo 加 DB 全包。Render 適合需要傳統 always-on server。Fly.io 適合真的需要 multi-region 控制。Hetzner 跟 VPS 是規模化最便宜，但你要全 SRE 自己來。

我們把整輯雜誌做個收尾。這一輯六篇，從第一篇的全產品線地圖、第二篇的 Hobby 到 Pro 起步路徑、第三篇的 AI 三件套、第四篇的資料層決策樹、第五篇的背景任務、到今天這篇的 exit playbook——其實是同一條故事線。Vercel 在 2026 年是 indie SaaS 最快上線的選擇，但它的 sweet spot 有邊界。知道邊界在哪、知道怎麼設防護、知道哪一天該逃，比起單純說「Vercel 好」或「Vercel 爛」更值錢。

希望這一輯讓你少走一點冤枉路。如果你正在做產品，記得——把 Hobby 當「真正非商用」用、把 Pro 當「合規加上第一張保險」買、第一天就設 Spend Management、知道你的工作負載對應地圖上的哪一格、別在 day 0 就把所有東西全裝起來。

謝謝你聽到這裡，我們下一輯雜誌見。
