這一集我們聊背景任務——什麼時候 indie 會撞到「需要背景任務」這道牆，撞牆之後 Vercel 的 Cron、Queues、Workflow 三件武器各自的位置在哪，以及對手 Inngest、Trigger.dev 怎麼選。

上一集我們講了資料層怎麼選。今天我們聊另一個你產品長到一定規模一定會遇到的問題——你的某個請求開始太慢了。

獨立開發者最初幾週幾乎不會想到背景任務。所有事情都在一個 Next.js route handler 裡同步跑完——查 DB、呼叫 OpenAI、寄 email、回 200。直到下面其中一個場景出現你才會意識到問題。

第一個——Stripe 或 Polar 的 webhook 開始漏單。Stripe 只給你 10 秒回 2xx，超過就視為失敗、走最多 3 天的 exponential backoff 重送。如果你在 webhook handler 裡同步去更新資料庫、寄 email、推 Slack、再呼一次 OpenAI 改寫感謝信，10 秒一定爆。

第二個——使用者註冊後寄歡迎信卡住前端。SMTP 提供商偶爾抽風，2 秒變 12 秒，你的 /api/signup 也跟著 12 秒回——使用者已經在按 F5 了。

第三個——AI 任務跨越 function timeout。Hobby plan function 是 60 秒上限，而真正會賣錢的 AI agent 通常跑 2 分鐘到 2 小時。研究 deep search、長文翻譯、影片轉錄都中。

第四個——你要排程，每天清過期 session、每週寄 digest、月結算 usage。

這四種需求對應到三件不同的工具。Indie 常見的錯誤是「全部都丟 cron 加 DB poll」或者「全部都上 Temporal」——前者撐不住流量，後者把週末玩具搞成 SRE 工作。

我們把這三件武器一個一個講。

Vercel Cron 是最簡單的——你只是想按時間跑。vercel.json 寫一個 schedule、指向一個 function。每天三點觸發、執行完就結束。沒有狀態、沒有重試，function 跑掛就是跑掛、下次再說。適合冪等的清理工作、寄日報、refresh quota。

Vercel Queues 是要把「請求進來」跟「工作完成」解耦。2026 年 2 月進入 public beta。模型是 publish 到 topic、多個 consumer group 各自獨立消費，每則訊息至少送達一次——所以你的 consumer 一定要寫成冪等。對 indie 的白話是——任何「我想立刻回 200，工作丟到後面慢慢做」的場景，Stripe webhook、寄歡迎信、生成縮圖，Queue 就是收件匣。

Vercel Workflow 才是這集的主角。2026 年 4 月 16 日 GA，從 2025 年 10 月 beta 起跑超過 1 億 runs。它的核心訴求是「durable execution」——你寫的非同步函式可以跨 deploy、跨 crash、跨數月睡眠還能從同一行繼續。

寫法是兩個 directive。一個 use workflow 標記主函式、一個 use step 標記每個外部副作用。比方說一個 onboardingWorkflow——載入 user、寄歡迎信、sleep 14 天、檢查還是 free plan 就寄試用結束信。中間的 sleep 14 天 function 不會佔資源，到時間自動 resume。每個 step 失敗自動重試，成功後結果寫入 event log。

機制是這樣——use workflow 標記的函式，每次呼叫一個 step 函式時，runtime 會去 event log 查這個 step 是否跑過。跑過就直接回快取結果，沒跑過就 enqueue 到 Queue 排隊執行、workflow 暫停、執行完再 resume。所以 workflow 函式體本身必須是 deterministic 的——你不能 Math.random 或 Date.now 寫在 workflow 層、要包進 step。

接著我們講三個典型場景。

場景一是 Stripe webhook 永遠不漏單。正規架構是兩段式——webhook handler 只做兩件事：驗 signature、把 event 丟進 Queue，然後立刻回 200。所有真正的工作放到 workflow 裡的 step。每個 step 各自 checkpoint、各自重試。Stripe 重送整個 webhook 也只是再 enqueue 一次，workflow 用 event id 當 idempotency key 去查 event log，已經跑過就直接回快取。這也直接解了 Stripe webhook 兩個歷史痛點——10 秒限制爆掉、step 級別重送 email。

場景二是寄歡迎信不要卡前端。最小作法用 waitUntil 就好，這是 Vercel 的 fire-and-forget；中規模用 Queue；要做 drip campaign，比方說註冊後 day 0、day 3、day 14 各寄一封，就上 Workflow——直接 await sleep 14 days，state 由 runtime 管，不用為這個建一張 schedule 表。

場景三是 AI agent 跑 1 小時長任務。AI agent 的形狀通常是——規劃拆 10 個子任務、並行跑 10 個、等中間有人類 approve 可能 5 分鐘也可能 5 天、整理輸出寄報告。use workflow 把整段寫成一個 async function，sleep、平行、等 hook 全部走語言原生語法，不用學新 DSL。

但我也要講反例——什麼時候你不該上 Workflow。如果是 MVP 不到 100 用戶、webhook 一天少於 10 次，webhook handler 直接同步處理加上一張 processed_stripe_events 表擋重複，10 行程式解決。如果只是寄一封信，waitUntil 就夠。如果是每天三點清資料，cron 一行 path 結束。判準是——你的流程需要「跨 function invocation 還活著」嗎？不需要就別上 durable execution。

最後我們比較一下對手——Inngest 跟 Trigger.dev v3。三家都解同一個問題，但取向差很多。

Vercel Workflow 的 compute 只能在 Vercel Functions、Inngest 你選 compute 在哪、Trigger.dev v3 在他們自己的 long-running infra 跑、沒有 serverless timeout。

對 indie 三段決策——整站已在 Vercel、流程不超過幾分鐘、不想多一個 vendor，選 Workflow。你的 compute 不在 Vercel，比方說 Cloudflare Workers、自架 Node、Python FastAPI，選 Inngest。任務真的會跑 30 分鐘以上、或你超在意 step 級 debug log，選 Trigger.dev v3。

Workflow 對 indie 的真正意義不是「比對手強」，而是「少一個 vendor、少一張帳單、observability 直接整合」。代價是 vendor lock——哪天要逃離 Vercel，use workflow 的程式幾乎要重寫。但 indie 在第一年談這個是早優化；先把產品做出來，30 個付費客戶之後再煩惱搬家。

下一集我們就來聊「該逃離 Vercel」的訊號——什麼時候 Workflow、Queues、Functions 的便利會反過來咬你。我們下集見。
