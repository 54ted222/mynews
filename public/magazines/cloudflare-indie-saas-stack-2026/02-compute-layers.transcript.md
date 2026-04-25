上一集我們把 Cloudflare 對 indie 為什麼是預設後端講了一遍，這集我們往下挖一層——具體到底要用哪一個運算產品。Workers、Pages、Containers，三層各自的物理事實是什麼，新專案該怎麼選。

先說結論再展開——2026 年新開的專案，預設用 Workers 加 Static Assets，不要再開 Pages。Workers 自己長出了靜態資產跟全棧能力，Pages 在 2025 年起就是「Workers 收編 Pages 功能」而不是反過來。Containers 是 2026 年 4 月才正式 GA 的新東西，解的是「我就是要跑一個完整 Node 程序、跑 ffmpeg、跑客戶上傳的代碼」這幾種以前 Workers 做不到的事。

我先把三層的物理事實講清楚。Workers 跑在 V8 isolate 裡，這個概念上集稍微提過——它不是「快一點的容器」，是另一個物種。沒有 VM 開機、沒有 OS 載入、沒有 runtime 初始化，新 isolate 在已經跑著的 Node 程序裡幾毫秒就建出來，p99 冷啟在 2 到 5 毫秒。對比 AWS Lambda 平均 280 毫秒、安靜段後可飆到 500 毫秒以上，這是兩個不同數量級。代價是你拿到的不是一台機器——128 MB 記憶體、單執行緒、不能開 socket、不能跑 fork、不能 require 任何依賴 Node native binding 的 npm 套件，除非走 nodejs_compat flag 而且該模組在 workerd 已經實作的子集裡。

Pages 的物理事實是——它底層其實就是 Workers，加 Git 連動、自動 framework 偵測、加上一個叫 Pages Functions 的東西本質就是路由到 worker。Cloudflare 自己的官方說法是「going forward, all of our investment, optimizations, and feature work will be dedicated to improving Workers」——Pages 不會被砍，但 Secrets Store、Workflows、Containers 這些新功能直接跳過 Pages、只在 Workers 出。對 2026 年的新專案，這是個明確的訊號。

Containers 的物理事實——它把一個 Docker image 部署到 Cloudflare 邊緣，每個 container 實例由一個 Durable Object 路由與管理。請求路徑是這樣——使用者打進來、先到 Worker、Worker 路由到 Durable Object、再啟動或喚醒對應的 Container。配置上有六個固定 instance type，從最小的「lite」一個 vCPU 16 分之 1、256 MB 記憶體，到最大的「standard-4」4 個 vCPU、12 GB 記憶體。按 active CPU 每 10 毫秒計費，閒置十分鐘後會被睡掉、再過十五分鐘就完全 SIGKILL。這裡有個很重要的細節——下次起來磁碟是乾淨的，不要把 Container 當持久儲存用，那是 R2 跟 D1 的工作。

接下來講「Workers 自己能撐到哪裡」，因為我覺得 indie 直覺上以為的範圍比實際上小很多。nodejs_compat 在 2025 到 2026 年補上了 Buffer、EventEmitter、stream、node:crypto 這些大宗模組。Hono 框架、Drizzle ORM、Postgres.js 配 Hyperdrive、Auth.js、Stripe SDK 都跑得起來。React Router v7、Astro、Vue、Nuxt、SvelteKit 已經正式可以在 Workers 上跑全棧。所以一個典型的 indie 配置——shadcn/ui 加 API 加邊緣 KV——成本壓到趨近於 Workers Paid 的五美固定月費。

那 Workers 撞牆的位置在哪？很具體——重 CPU 任務會吃掉 30 秒預設 CPU 上限、可以調到五分鐘但這是 2025 年 3 月才開放的，免費版仍然是 10 毫秒。128 MB 記憶體對 LLM 推理 batch 跟大型 JSON 處理會卡。沒有 raw TCP socket 意味著沒辦法跑某些自架的東西。然後 Node native binding——任何含 .node 檔的 npm 套件——直接陣亡。我看到 indie 在 Workers 上最常踩到的是這三類——想跑 Playwright、想跑 LibreOffice 轉檔、想用某個只有舊版 Node SDK 的服務。前兩個現在的乾淨答案就是 Containers。

這裡有個容易混淆的點要特別講。Workers 的 wall-clock time 沒有硬上限。一個 Worker 可以慢慢拉一個 30 秒才回完的 SSE stream，只要 client 還在連著、I/O 等待不算 CPU，這完全合法、且不額外計費。Cloudflare 2023 年改了計費模式就是「never pay to wait on I/O」。所以「我有一個 LLM streaming」「我要 long polling」這類需求其實不需要 Container，Worker 本身就吃得下。真正的判準是——你的 30 秒裡面有多少是 CPU 在跑數字，不是總時長。

那 Pages 還剩什麼角色？我直接說——2026 年新開專案不要用 Pages。把它留給兩種場景。第一種是純靜態站、只有 index.html 加少量 JS、從 GitHub push 就部署、永遠不會長出 backend——個人 blog、文件站、landing page。第二種是已經跑在 Pages 上的舊專案，「正在賺錢的東西不要動」這條原則照舊。但只要你想加 Cron Trigger、Durable Objects 直接 binding、Workflows、Containers，這些 Pages 拿不到——那就是該排遷移的訊號。

最後講 Containers 解了什麼問題、代價是什麼。三個典型場景——跑客戶上傳的代碼，這是 Sandboxes 的主場；跑重 binary 像 FFmpeg 轉檔、Chromium 截圖、PDF 生成；跑「就是要完整 Node」的舊套件。代價分四層——必須 Workers Paid 五美起跳，免費仔不能用；按 active CPU 每 10 毫秒計費；每個 container 綁一個 Durable Object，你的心智模型要把 DO 學起來；磁碟在 sleep 後清空，需要保留的東西必須寫到 R2 或 D1。

那「我整個 SaaS 都用 Container 跑不就好了？」可以，但會回到 AWS Lambda 那種冷啟代價，失去 Workers 全球 V8 isolate 的延遲優勢。Cloudflare 的隱含建議是——Worker 當路由與接面、Container 當重活的後段，混合用而不是二選一。

所以重點是——實務上 90% 的 indie SaaS 路徑落在「Workers 加 Static Assets 一份 worker 把前端、API、SSR 都收掉」。判斷時間點不要看「我未來會不會」，看「現在這週的 issue list 裡有沒有」需要 Container 的事情。下一集我們進到儲存層——D1、R2、KV、Durable Objects 這四件套，每一個的甜蜜點跟兩個典型架構怎麼配對。
