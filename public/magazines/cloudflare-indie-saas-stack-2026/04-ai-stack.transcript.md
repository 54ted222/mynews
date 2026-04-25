上一集我們把儲存四件套講完了，這集進到 AI——這也是 2026 年 4 月 Cloudflare 動作最大的一塊。我想用這集回答四個問題——Workers AI 的甜蜜點在哪、Vectorize 跟 AI Search 解掉多少 RAG 需求、AI Gateway 為什麼是被低估的元件、Agents SDK 加 Sandboxes 怎麼拼成一個會記憶的 agent。但這集最關鍵的判斷題其實是——什麼時候該外接 GPT-5 或 Claude，不要用 Cloudflare 自家的模型。

先給背景。2026 年 4 月 Cloudflare 一週之內把「AI agent 該需要的東西」全部攤開——Sandboxes 正式版、Project Think 釋出、AI Search 整合、Agent Memory 上線、Workflows v2 拉到 5 萬並行、AI 推理層串 14 個以上的 provider。indie SaaS 第一次擁有一條從「呼叫一顆模型」走到「跑一個會記憶、會排程、會自己寫 code 的 agent」的單一供應商路徑。

但「拼齊」不等於「最佳」。我先講 Workers AI 的甜蜜點跟死角。

Workers AI 在 2026 年是 per-model pricing，每帳號每天送 10,000 Neurons 免費——對 indie 等於 embedding 跟 reranker 在 prototype 階段幾乎不用錢。實測代表性的數字——小模型 Llama-3.2-1B 每百萬 input token 兩分七美、output 兩毛；中型 Mistral-7B 每百萬 input 一毛一、output 一毛九；大模型 Llama-3.1-70B 每百萬 input 兩毛九、output 兩塊兩毛五；文字 embedding BGE-Small 每百萬兩分美。對照之下，OpenAI GPT-5.5 跟 Anthropic Claude Mythos 這種旗艦每百萬 output token 還是兩位數美金等級。

所以我的結論是——Workers AI 是價格地板，不是智能上限。它的甜蜜點清楚四種——embedding 跟 reranker 跟 Vectorize 同網路、幾乎不用錢；分類抽取結構化解析這種任務，用小模型每百萬 token 兩三毛美就夠；批次背景任務像寫摘要做標籤；圖像生成的低成本選項像 FLUX-Schnell 一張 512x512 大概萬分之五美。

不適合的場景也清楚——複雜推理、長思維鏈、agent 工具呼叫，Workers AI 沒有 GPT-5 跟 Claude 級別的模型，差距在 agent benchmark 上很明顯。延遲敏感的對話——Cloudflare 自己 docs 寫「Workers AI 跑在共享基礎建設、沒有延遲 SLA」，Workers 本身 5 毫秒沒錯，但 GPU 推理的排隊跟冷啟動不在這個保證裡。要做完整 fine-tune 控制——Workers AI 支援 LoRA，但要全參數 fine-tune 還是回 Replicate 或 Together 或自架。

接下來講 Vectorize 跟 AI Search。Vectorize 是向量資料庫，定位是「跟 Worker 同網路、沒有外部 API call」。對照組——Pinecone Standard 每月起跳 50 美 floor 不論用量。Vectorize 在 Workers Paid 上免費額度是五百萬個儲存維度加三千萬個查詢維度。對 indie 來說大致等於五千篇長文或五萬段 1024 維的 chunk，已足以撐到第一批付費客戶。

2026 年 4 月 Cloudflare 把 AutoRAG 改名 AI Search 並升級成「動態搜尋實例加上混合檢索加上相關性增強」。對 indie 的意義是——你不必自己拼 chunker、embedder、retriever、reranker、generator。丟一個 R2 bucket 進去，AI Search 自己 ingest、向量化、查詢、生成，期間都在 Cloudflare 內網。

什麼時候 AI Search 不夠？想自選 embedding 模型、要做圖搜或影片搜這類多模態、嚴格資料駐留、規模超過一億向量加企業級延遲 SLA——這幾種仍要 Pinecone 或 Qdrant 或自己拼 Vectorize。簡單心智模型是——indie 文字主導加百萬文件以下，AI Search 直接上；想自選 embedding 或多模態用 Vectorize 自己拼；企業級嚴格 SLA 外接。

接下來講 AI Gateway——我覺得這是整套堆疊裡最被低估的元件。它常被講成「LLM 觀測 dashboard」，但對 indie 真正的價值是——讓 multi-provider 策略幾乎免費。2026 年 4 月的設計支援 14 家以上的 provider——Workers AI、OpenAI、Anthropic、Gemini、Replicate、Hugging Face、Perplexity、Groq 等等。核心功能有快取、限流、retry、model fallback、log、即時 analytics。fallback 設定一條 list——第一個 provider 出錯就自動打第二第三家。

計費上 Gateway 本體沒有 per-request 費，按 log 留存量計。Free 10 萬條 log、Workers Paid 100 萬條。注意這是硬上限不是 pay-as-you-go，超過會停止儲存舊 log。

對 indie 的策略含意有三個。第一，80/20 路由——80% 流量像 embedding、分類、摘要打 Workers AI；20% 流量像複雜推理、最終生成打 GPT-5 或 Claude。Gateway 把這個切換從應用層 if-else 變成設定層。第二，fallback 不再是奢侈品——以前要自己包 retry 邏輯，現在 Gateway 一條 list 就解決。第三，快取等於現金——對話應用裡常常同樣的 prompt 被觸發 N 次，Gateway cache 直接擋下，省的是真正的 OpenAI 帳單。

最後講 Agents SDK 跟 Sandboxes。Agents SDK 的核心是 Durable Objects——每個 agent 是一個物件，物件內含內建 SQLite、會自動 sync 到 client 的 KV state、scheduler 支援延遲跟 cron、AIChatAgent 把訊息歷史跟 tool calling 包好、provider 可以一行換。

2026 年 4 月又補上——Project Think 強調 thinking、acting、persistence 三大原語跟 sub-agent 協調。Agent Memory 是 managed 的長期記憶服務。Sandboxes 給每個 agent 一個真電腦——shell、filesystem、背景行程、PTY、snapshot 復原，按 active CPU 計費。Workflows v2 給 long-running agent 用、5 萬並行 step。Browser Run 讓 agent 操作真實瀏覽器。

對 indie 這意味著——以前要做一個「會記憶、會排程、會跑使用者程式」的 agent，得自己拼 Postgres 加 Redis 加 Sidekiq 加 Firecracker 加 LangChain。現在這四件事被收進 Cloudflare 一個 SDK 一張帳單。但別誤會——agent 的「智能」依然主要由你選哪一顆模型決定，不是由 SDK 決定。

所以這集最重要的判斷題——什麼時候外接 GPT-5 或 Claude？我建議流程——預設用 Workers AI 跑 embedding、reranker、分類、抽取、摘要，這幾類任務 Llama 跟 Mistral 跟 BGE 已經夠好。任何把這幾件事打到 GPT-5 的 indie 都是燒錢。使用者面對的「最終生成」跟「複雜 agent 推理」打外接，透過 AI Gateway 路由到 GPT-5 或 Claude。多步 agent 的「思考主迴圈」打外接、「工具與子任務」打 Workers AI——讓 orchestrator 是 Claude、子 agent 是 Llama-70B。任何延遲 SLA 寫進合約的場景直接外接。要完整 fine-tune 走 Replicate 或自架。

反過來，全押 Cloudflare 的場景是——純後端批次任務、原型期 100 DAU 以下、預算極緊。

所以重點是——Workers AI 是 indie 的價格地板，AI Gateway 是讓你雙押 Workers AI 加 frontier model 的關鍵層，Agents SDK 把 stateful agent 降到一個 Durable Object 起跳。但「真正能用的 agent」還是要 frontier model 撐起來。下一集我們把錢攤開來講——同一個 1,000 DAU 的 SaaS 在 Cloudflare、Vercel、Supabase 三家曲線怎麼走。
