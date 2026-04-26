這一集我們進到 AI SaaS 的最短路徑——Vercel 給你的三件套，AI SDK、AI Gateway、Sandbox，到底各自做什麼、什麼時候該疊起來、什麼時候只用其中一塊就好。

上一集我們講了從 Hobby 升到 Pro 的成本曲線。今天假設你已經升了 Pro，要開始做一個 AI 產品——可能是 chat bot、可能是讓使用者貼程式碼進來執行的工具、可能是 RAG 問答系統——這套三件套對你的意義是什麼？

我先用一句話定位這三塊——AI SDK 是膠水、Gateway 是路由、Sandbox 是隔離區。三件套各管一層，疊起來才是一個能跑使用者程式碼的 AI 產品。少一塊，你就會在不該妥協的地方妥協——綁死單一供應商、或者把使用者的 Python script 直接 eval 進你的 serverless function。

我們一塊一塊講。

第一塊，AI SDK。這是 Vercel 開源的 TypeScript library，2026 年 4 月當前版本是 v6。它做的事情其實單純——把 OpenAI、Anthropic、Google、Mistral 等 20 多家模型 SDK 抽到一個統一介面。你寫 streamText、generateObject 這種 function，底下換 provider 只要改一個字串。它還給你一組 React、Vue、Svelte 的 hook，最常用的是 useChat、useCompletion，會把 SSE stream 直接吐進 UI。

對 indie 來說，AI SDK 真正值錢的不是抽象介面——很多 wrapper 都做得到——而是型別。它把訊息流的型別從 server 一路推到 client，這在多步 agent 加上 tool calling 的場景，能省掉很多 runtime 才會炸的 bug。

第二塊，AI Gateway。這是一個 OpenAI 相容的 HTTP endpoint，幫你做四件事——一把 key 用所有模型、上游某家掛了自動 fallback、內建 spend monitoring 跟 budget cap、支援 BYOK（你自己的 API key 也能用）。

關鍵的計價結構是這樣——每個 Vercel team 月領 5 美元免費 credit、token 按上游 list price、0 加成。但有一個例外要注意——ZDR，也就是 zero data retention 模式，要付 0.1 美元 / 1000 個成功請求。OpenRouter 對 ZDR 不另外收錢，所以「Vercel vs OpenRouter 誰便宜」其實要看你需不需要 ZDR。對沒有監管 ZDR 需求的 indie，Vercel Gateway 在「跟 AI SDK 整合度」上贏，純價格差距不大。

第三塊，Sandbox。這是 ephemeral compute primitive，跑在 Firecracker microVM 上——跟 AWS Lambda 同一套隔離技術。OS 是 Amazon Linux 2023、runtime 支援 node24、node22、python3.13。啟動是毫秒級，每個 sandbox 32 GB 暫存儲存。Hobby 單次最長 45 分鐘、Pro 最長 5 小時。

最重要的安全特性叫 credentials brokering。你可以想像一個 proxy 蹲在 sandbox 邊界外，sandbox 內的程式碼往外打 API 的時候，proxy 把你存在 Vercel 的 secret 注入到 outbound 的 HTTP header 裡。如果惡意程式碼自己塞同名 header 想把認證請求改 redirect 到攻擊者 server，proxy 會把它覆蓋掉。換句話說——sandbox 內的程式碼永遠看不到你的 secret，但又能用它打外部 API。對「跑 user-generated code」這個場景，這是缺一不可的。

那這三件套怎麼串呢？最常見的請求路徑是這樣——使用者在前端跟你的 chat bot 對話，bot 在某一輪決定呼叫一個 tool，比方說「執行使用者貼的 code」。這時 Sandbox 才登場。前端 useChat 把訊息送到後端，後端用 streamText 經過 Gateway 路由到 Anthropic 或 OpenAI，token 一邊吐回前端。當模型決定要呼叫 runCode tool 時，後端開一個 Sandbox、跑 python，stdout 跟 exitCode 收回來、再灌回給模型，模型吐最後答案。

幾個對 indie 重要的觀察。第一——三件套不需要同時上線。早期 MVP 通常只有 AI SDK 加 Gateway，UI 流暢、計費單純就先走。等到產品功能要「執行使用者貼的程式碼或檔案」才把 Sandbox 接上，省得一開始就為了不會用到的隔離層付錢。第二——Sandbox 不在 hot path。它應該是 tool call 觸發的，不要綁進 streaming response 的同步路徑。第三——Sandbox 跟 Vercel Functions 是不同的計費。新手最常踩雷的是 Provisioned Memory——它按掛載時間算，sandbox 開著等使用者下一句話就是在燒記憶體錢。

接著聊一下成本邏輯。為什麼 0 加成加上 Active CPU 對 LLM 工作負載特別便宜？因為 LLM 呼叫的時間結構是——大半時間在等 token、CPU 幾乎閒置。傳統 serverless 計費是按 wall-clock，人在等就算錢。Vercel 的 Active CPU 把這拆開——只算 CPU 真的在算的時間。對 LLM 場景帳單能省到 90%。但前提是你的工作負載真的 I/O bound——如果你跑 GPU 推論、本地 vector search、heavy parsing，Active CPU 沒省到任何錢。

跟對手比一下。E2B 一個 vCPU-hour 是 0.0504 美元，全 wall-clock，看起來比 Vercel 的 0.128 便宜 2.5 倍——但 E2B 是「等網路也算錢」，實際 LLM 工具場景 Vercel 通常更便宜。E2B 的優勢在 24 小時 session、stateful pause/resume、Jupyter Code Interpreter 結構化輸出，那是另一種工作負載。

最後給你一個實戰經驗法則。MVP 先 AI SDK 加 Gateway 兩件套，能不能跑得起來看用戶有沒有需求。確定要做「執行使用者程式碼」這條功能線時，再加 Sandbox。不要在 day 0 就把三件套全裝起來——AI SDK 跟 Gateway 加上去幾乎免費，Sandbox 加上去你會在沒有用戶的時候先付一筆 idle memory 錢。

下一集我們講資料層——Vercel Postgres 退役之後，Marketplace 上的 Neon、Supabase、Upstash 該怎麼選。我們下集見。
