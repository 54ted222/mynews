今天想聊一條 24 小時內就被當事人親自反擊的故事——昨天我們才把「Anthropic 會不會被 OpenAI 那波 Codex 紅利逼著放寬 quota」列為待觀察，結果今天 5 月 6 號，Anthropic 一次給出三個 over-deliver 的答案，順便把整個 LLM 軍備競賽的敘事，從「比模型」拉回到「比物理 capacity」。

先講最大條的這一塊。Anthropic 直接跟 SpaceX 簽下了 Memphis 那座 Colossus 1 datacenter 整座的算力——300 兆瓦的電、22 萬張 NVIDIA GPU，混合 H100、H200 跟 GB200，預計一個月內全部到位。這跟過去那種「我們又下了一筆 cloud 訂單」的公告不一樣，它是把一整座 site 包下來。然後 Anthropic 同一天就把這批 capacity 換成三條使用者體感得到的福利。第一，Claude Code 的 5 小時 rate limit，對 Pro、Max、Team、Enterprise 全部翻倍。第二，Pro 跟 Max 帳號的 peak hours 限制直接拿掉，也就是過去白天尖峰會卡住的那條牆沒了。第三，Opus 的 API Tier 1，每分鐘的 input token 加了 1500%，output token 加了 900%。簡單說，就是把過去一個月大家在 Twitter 上罵 Claude rate limit 太緊的怨氣，一次清空。

對獨立開發者的意義很直接。如果你過去 30 天因為 5 小時的 rate limit 被擋，把 vibe coding 或 long batch 的任務，像是 migration、文件翻譯、reranker 評分，改去 Codex 或 Cursor 跑，這週可以把它們搬一條回來，跑個 24 小時對比一下 cost 跟 pass rate。Anthropic 這波是反向 migration 的時間窗。

順著這條講昨天另一個待觀察。我們本來在問：OpenAI 把 Codex daily cap 加了 10 倍以後，會不會在 7 到 10 天內進一步調整 burst window。截至今天 OpenAI 沒有官方訊號，但 Anthropic 這一刀下去，等於把整個產業的 baseline 一次拉高，OpenAI 那波紅利的邊際效益就被沖淡了。所以觀察點要改寫——改成 5 月 14 號之前 OpenAI 會不會再加碼，例如 Codex API rate limit 同步翻倍，或是把 Codex CLI 開放 Bedrock 給企業。

再來聊另一條 enterprise 訊號，Blitzy。這家在 5 月 5 號拿了 2 億美金，估值 14 億，Northzone 領投，PSG、Battery、Jump Capital、NFX 都跟。重點不是錢，重點是它同時公布了 SWE-Bench Pro 跑出 66.5% 的成績，而且是給 Quesma 獨立驗證過的，超過 GPT-5.4 base model 的 57.7%。SWE-Bench Pro 是 Princeton SWE-Bench 的進階版，題目更貼近真實 enterprise 的多檔修改情境，所以這個分數含金量比 Verified 高一個級距。Blitzy 平台會同時跑超過 3000 個 agent，平行處理 Global 2000 客戶的 legacy codebase migration，已經賣進好幾十家。

這條的產業意義是，agent harness——也就是包在 base LLM 之上的多 agent 編排層——第一次有了真實的估值錨點。過去大家在問「wrapper 到底有沒有 moat」，Blitzy 用 14 億美金回答你，harness 跟 base model 一樣值錢，前提是你做的是 enterprise legacy migration 這種重度場景。對 5 到 50 人的 SaaS 來說，純粹賣「我家 wrapper 幫你寫 50% 程式碼」這種定位，會被 enterprise 採購當成過渡品。比較合理的玩法是接 Blitzy 當 implementation partner，或是退一步瞄準中型市場，500 到 5000 人的客戶，走「人加 agent 混合」的差異化。

第三條是 Vercel 把 observability 做進 CLI 給 agent 用。`vercel metrics` 這個指令進了 public beta，掛在 Observability Plus 計畫底下，可以從命令列查 team 跟 project 的 metrics、列 schema、看 dimensions，最關鍵的是支援 `--format json`，讓 coding agent 可以自動化讀取。同一週 Vercel 還上了 native integration resources 的 production-only scoping——資源被標成 production-only 之後，credentials 自動轉成 sensitive env vars，連 Dashboard 跟 CLI 都讀不到原值。這代表 Vercel 把「coding agent 直接 query observability」當成一級接口在做，agent friendly 工程比同業早了一拍。

這對獨立開發者來說有一個明顯的商機切口，就是做 `vercel metrics` 上面的 alerting bot，自動偵測 token 用量、cost、error rate 跟 latency p95 的異常，發到 Slack。免費版做成 GitHub Action 一鍵裝，付費版每個 project 每個月 19 鎂加自訂規則跟 on-call rotation。瞄準那種跑 agent farm 但又養不起專責 SRE 的 5 到 50 人 SaaS。

第四條是 Stripe 的 Agentic Commerce Suite，這次把支付端通往 agent surface 那一整段補齊了。它跟 Google 合作，把 UCP——也就是 Universal Commerce Protocol——接進 Google AI Mode 跟 Gemini app，意思是消費者可以直接在 ChatGPT、Gemini、Microsoft Copilot 裡面買 Shopify 商家的東西。它跟 Meta 合作，在 Facebook 廣告裡做 native checkout。最值得注意的是，它推出了 agent-ready financial accounts——agent 可以查餘額、付發票、開卡、轉帳、管現金流。這已經不是 discovery 加 checkout 的事了，是往上吃到會計、收付款跟現金流。

Shopify 順勢公布了一個漂亮的數字，從 2025 年 1 月起，AI 來源的流量年增 8 倍、AI 來源的訂單年增 15 倍。所以對非 Shopify 的中型 D2C 來說，5 月底前要做一個決策題：接不接 ACP 或 UCP。不接，這條 15 倍的 channel 就讓給對手。

最後一塊是 Claude Code 5 月的更新，把 gateway、Bedrock 跟 multi-repo workflow 的缺口補齊。`/model` picker 現在會從 gateway 的 `/v1/models` 動態讀取。新增了 `claude project purge` 指令，可以一鍵清掉某個 repo 的 transcripts、tasks 跟 file history，還支援 `--dry-run`。`ANTHROPIC_BEDROCK_SERVICE_TIER` 這個環境變數可以選 default、flex 或 priority，對走 Bedrock 採購的企業來說 SLA 直接解。`/resume` 搜尋框現在貼一個 PR URL 就能找到當時的 session，GitHub、GitHub Enterprise、GitLab、Bitbucket 都支援。

所以重點是，今天最大的訊號就是 Anthropic 用一座整座的 datacenter 把昨天的問題一次回答完，把 Claude Code 的 5 小時 rate limit 翻倍、把 Opus API Tier 1 input 加了 1500%；Blitzy 用 14 億估值跟 SWE-Bench Pro 66.5% 告訴你 enterprise harness 這條路是真的；Vercel 把 observability 做給 agent 用；Stripe 把 agent commerce 從結帳往上吃到財務。對獨立開發者最直接的動作有兩個——把過去切去 Codex 的 long batch 搬回 Claude 對比 24 小時，還有把 `vercel metrics --format json` 接進你的 daily cron 做三條 baseline 的 alert。
