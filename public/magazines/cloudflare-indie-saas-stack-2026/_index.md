---
title: Cloudflare 給 indie SaaS 的開發者平台地圖
issue: Vol.10
date: 2026-04-26
tags: Cloudflare, 雲端基礎設施, indie SaaS, 邊緣運算, 開發者平台
summary: 把 Cloudflare 七十多個產品收斂成一張對 indie SaaS 真正有意義的清單——Workers、儲存四件套、Workers AI、Containers GA——附成本曲線與盲點。
---

2026 年要做一個 indie SaaS[^indie-saas]，預設後端從「AWS + 自己拼」變成「Cloudflare[^cloudflare] 全包」的速度比想像中快。Workers[^workers] 在 330 多個城市跑 V8 isolate[^v8-isolate]、零冷啟、$5/月 包含千萬請求；R2[^r2] 給你零 egress[^egress] 的 S3 相容物件儲存；D1[^d1] 是真 SQLite[^sqlite]、5GB 在免費額度內；Durable Objects[^durable-objects] 把「stateful 邊緣物件」做成可以一個用戶開一個的單元；Workers AI[^workers-ai] 的開源模型在邊緣推理，10,000 neuron[^neuron]/day 免費；2026 年 4 月 Agents Week 又把 Containers[^containers] / Sandboxes[^sandboxes] 推到 GA——一條從 hello world 到「跑客戶上傳的 Python」的完整路徑就此打通。

但這張清單看似豐富，對 indie SaaS 真正能用、真正划算的子集才是這期想討論的。重點不在「Cloudflare 有 X 個產品」（那已經超過 70 個），而是：哪幾個是 indie 真的會碰、能在 $0 / $5 / $20 月費階段把產品撐起來；哪些限制（Workers 30 秒 CPU、D1 10GB cap、128MB 記憶體、單執行緒）會在 1,000 用戶之後變成痛點；以及哪些工作流仍要丟回 AWS / Render / Supabase。

本期六篇：第一篇給選型總覽，回答「為什麼 indie 該認真考慮 Cloudflare」與「不適合誰」；第二篇拆解 Workers / Pages / Containers 三層 compute 怎麼選；第三篇講 D1 / R2 / KV / Durable Objects 四件套儲存的甜蜜點與互補；第四篇談 Workers AI / Vectorize / AI Gateway / Agents SDK 在 2026 年的位置；第五篇把真實 indie SaaS 的成本從 $0 拉到 $50/月，對比 Vercel / Supabase 的曲線；第六篇回到盲點——什麼時候不該全押 Cloudflare、退場路徑長什麼樣。

所有定價、限制、產品狀態都標到 2026-04，文末附可追溯來源；不確定的數字一律標「估算」。讀完這期，你應該能回答兩件事：把 SaaS 蓋在 Cloudflare 上，前 12 個月的賬單會長成什麼樣子？以及，當哪一個維度撞到天花板時，該往哪裡拆。

[^indie-saas]: indie SaaS 指由個人或小團隊獨立開發的訂閱制軟體服務。相對於有 VC 資金支持的大公司產品，indie 開發者通常一人或兩三人兼任所有角色，預算緊、需要在沒有 PMF 之前用最低成本維持產品上線。
[^cloudflare]: Cloudflare 起家於 CDN 與 DDoS 防護，2017 年起逐步把整套開發者平台疊上來，到 2026 年已有超過 70 個產品，從 compute、儲存到 AI 一站收齊，是除了 AWS / Azure / GCP 之外最完整的雲端供應商之一。
[^workers]: Cloudflare Workers 是 Cloudflare 的無伺服器運算產品，程式跑在全球 330 多個城市的邊緣節點上、由 V8 isolate 提供毫秒級啟動。寫一個 fetch handler 就能部署，是 Cloudflare 整個開發者平台的入口。
[^v8-isolate]: V8 是 Google Chrome 與 Node.js 用的 JavaScript 引擎，isolate 是 V8 提供的輕量執行單元——一個 Node 程序可以同時容納成千上萬個 isolate，啟動只要幾毫秒，沒有作業系統層級的開銷。Cloudflare Workers 用 isolate 取代傳統容器，這是它能宣稱「零冷啟」的關鍵。
[^r2]: Cloudflare R2 是與 Amazon S3 API 相容的物件儲存服務，最大特色是「egress 永久免費」——對外送資料不收頻寬費。儲存價格約 $0.015/GB-月，比 S3 便宜，且省下的 egress 對流量大的應用是壓倒性的成本差距。
[^egress]: Egress 指資料從雲端服務出站到外部網路的流量。傳統雲端供應商（AWS、GCP、Azure）對 egress 收取每 GB 約 $0.05–0.09 的費用，這往往是雲端帳單裡最不可預測、最容易爆掉的一項。
[^d1]: Cloudflare D1 是把 SQLite 包成託管服務的關聯式資料庫，跑在 Durable Objects 之上、跟 Worker 同網路。Free tier 5GB、Workers Paid 含 25B reads + 50M writes/月、單庫硬上限 10GB。
[^sqlite]: SQLite 是嵌入式關聯式資料庫，一個檔案就是一座資料庫、不用獨立 server，全球部署量超過 PostgreSQL 與 MySQL 加總。輕量、可靠、SQL 支援度高，但傳統上不被視為「正規 SaaS 後端」——D1 與 Durable Objects 把它推到了邊緣 server 端。
[^durable-objects]: Cloudflare Durable Objects（簡稱 DO）是「全球可定址的單執行緒 stateful 物件」——你可以為每個使用者、每個聊天室、每個文件開一個 DO 實例，每顆都有自己的記憶體與 SQLite，且全球只會有一份在跑（避免多寫衝突）。是 Cloudflare 最獨特、也最難在他處複製的 primitive。
[^workers-ai]: Cloudflare Workers AI 是在 Cloudflare 邊緣 GPU 上跑開源模型（Llama、Mistral、BGE、FLUX 等）的推理服務。對 indie 的吸引力在零 API key、和 Worker 同網路、每日 10,000 Neurons 免費，但模型品質落後 GPT-5 / Claude 一個等級。
[^neuron]: Neuron 是 Cloudflare Workers AI 的計費單位，把不同模型的 token、圖像、音訊用量換算成統一的「神經元」數字，再以 $0.011 / 1,000 Neurons 計價。每個帳號每天送 10,000 Neurons 免費，prototype 階段大概用不完。
[^containers]: Cloudflare Containers 在 2026 年 4 月 Agents Week 進入 GA，讓開發者能把任意 Docker image 部署到 Cloudflare 邊緣，由 Worker 路由、由 Durable Objects 管生命週期。補上了 Workers 跑不了 ffmpeg、Chromium、native binding 套件的缺口。
[^sandboxes]: Cloudflare Sandboxes 是建在 Containers 之上的薄層 SDK，給 AI agent 一個可重啟的 Linux 容器執行不可信代碼——使用者上傳的 Python script、AI 自己寫的程式都丟到 Sandbox 跑，snapshot restore 約 2 秒、相對於完整冷啟的 30 秒快了一個量級。
