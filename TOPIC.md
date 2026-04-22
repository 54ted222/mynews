# TOPICS

## 興趣 interest

- 軟體工程師
- SaaS
- 想創業
- 會 JS 前後端
- 行銷
- AI
- 點子
- 一人公司
- 台灣
- 內容創業
- 獨立開發者
- app web
- developer tools
- 產品開發

## 建議主題 suggested topic

- **Claude Agent SDK 實戰：subagent 與 orchestration** — 關鍵字：Claude Agent SDK 2026, subagent orchestration, agent framework benchmark
- **AI 程式碼審查 workflow：Greptile vs CodeRabbit** — 關鍵字：Greptile vs CodeRabbit 2026, AI code review PR, LLM static analysis dev
- **Bun vs Deno vs Node 2026 runtime 現況** — 關鍵字：Bun 1.3 benchmark, Deno 2 production usage, Node 24 performance
- **Edge Functions 第二戰：Vercel vs Cloudflare vs Railway** — 關鍵字：Vercel Edge 2026 limits, Cloudflare Workers AI, serverless cold start
- **Programmatic SEO 與 Google AI Overview 後的流量賽局** — 關鍵字：programmatic SEO 2026, Google AI Overview traffic drop, AI content detection
- **一人 SaaS 客服自動化架構** — 關鍵字：AI customer support stack 2026, Intercom Fin alternative, LLM 客服成本 solo
- **向量資料庫 2026 價格戰：pgvector vs Pinecone vs Turbopuffer** — 關鍵字：pgvector vs Pinecone 2026, halfvec cost, Turbopuffer pricing
- **LLM Router 與多模型路由實戰** — 關鍵字：OpenRouter vs Portkey 2026, LLM router cost optimization, model fallback
- **Dev Tool PLG playbook：從 GitHub trending 到付費轉換** — 關鍵字：PLG dev tool 2026, GitHub trending launch, HN launch playbook
- **AI agent 留存：為什麼使用者 7 天後就消失** — 關鍵字：AI agent retention D7, agent onboarding friction, never activated churn
- **一人創業法遵基線：GDPR / EU AI Act / 跨境稅務** — 關鍵字：indie hacker compliance 2026, GDPR solo founder, EU AI Act micro SaaS
- **開發者 TikTok / Shorts 獲客實錄** — 關鍵字：developer TikTok marketing 2026, dev tool Shorts funnel, creator-led dev acquisition
- **垂直 Copilot 的 2026 機會地圖** — 關鍵字：vertical AI copilot 2026 niches, domain specific LLM, vertical SaaS AI moat
- **AI 語音應用棧：ASR / TTS / voice agent 選型** — 關鍵字：Deepgram vs Whisper 2026, ElevenLabs alternatives, voice agent stack
- **evals-first：測試先於 prompt 的開發流程** — 關鍵字：LLM eval framework 2026, Braintrust vs Langfuse, offline eval CI
- **Fine-tuning 2026 決策樹：RFT、SFT 還是純 prompt** — 關鍵字：fine tune vs prompt 2026, RFT reinforcement fine tuning, small model specialize
- **自動化 growth loop：SEO + 社群 + 產品內推薦** — 關鍵字：growth loop indie SaaS 2026, viral coefficient, referral flywheel
- **Stripe 之後：一人 SaaS 跨境支付與稅務** — 關鍵字：Stripe alternatives 2026, Lemon Squeezy merchant of record, Paddle pricing change
- **Supabase 替代者：Neon / Turso / Convex 三強之爭** — 關鍵字：Neon vs Turso 2026, Convex reactive backend, Supabase alternative indie
- **AI 前端新棧：v0 / Lovable / Bolt 的真實工作流** — 關鍵字：v0 dev workflow 2026, Lovable vs Bolt, AI UI generation

## 預備主題 prepared topic

### RAG 實作細節與精準優化：pgsql + nodejs 技術棧

關鍵字：pgvector 2026 tuning, hybrid search BM25 rerank, RAG eval recall, llamaindex vs langchain, embedding cost halfvec

描述：Retrieval-Augmented Generation 已經從「把文件丟給 LLM」進化到工程化深坑。對一位 JS 全端工程師而言，Postgres + pgvector + Node.js 這條路是成本與主導權最好的組合——不必引入 Pinecone 之類的 managed vector DB，但必須做對 hybrid search（BM25 + semantic）、chunking 策略、reranker、offline evaluation loop 才會真的有用。這題的切面包含：索引架構怎麼設計、為什麼 halfvec 能把儲存成本砍一半、recall / precision 的 offline 評測怎麼跑、reranker 要不要自架、以及 2026 年 managed 服務與 DIY 的成本分界點。不提供可直接複製的程式碼，只談技術棧決策。

### 一人公司的組織設計：從工具堆疊到決策節奏

關鍵字：one person unicorn 2026, solo founder workflow, operator CEO playbook, AI agent workforce, calendar ops indie

描述：Karpathy 那條 vibe coding 推文之後，「一個人的獨角獸」從笑話變成了估算模型——2026 年的討論已經從「可不可能」移到「做到某規模後要怎麼不崩潰」。這題要談的不是人生勵志，而是可複製的組織設計：每日 / 每週 / 每季的決策節奏、哪些決策讓 AI agent 代跑、哪些一定得人做、工具堆疊（客服、法遵、會計、營運）的最小可行版本、以及什麼訊號出現就該招第一個人。Payout、MiroFish 等真實案例提供骨架，但要避免直接 copy——規模與利基不同，節奏就不同。

### 內容創業與 SaaS 的交會帶：developer creator 模式

關鍵字：developer creator 2026, content led SaaS growth, newsletter SaaS flywheel, YouTube dev channel monetize, technical storytelling

描述：2026 年最 underrated 的獨立開發者路線不是「做 SaaS 也寫部落格」，而是 content-first：先用內容把 niche audience 養起來，再對這個 audience 推 SaaS。這題談的是從技術型內容（文章、影片、newsletter）養起社群、再讓內容變成 SaaS 的 distribution flywheel——怎麼選內容垂直、怎麼把 dev audience 從讀者轉成付費用戶、SaaS 反過來餵內容的題材、以及 content 與 SaaS 的成本時間差怎麼抓。可參照 The Bootstrapped Founder、Indie Hackers 近期的 content-to-SaaS 訪談。

### AI 產業鏈全景：從晶片、模型、工具到應用層的分工

關鍵字：AI value chain 2026, model provider market share, inference cost trend, foundation model commoditize, application layer moat

描述：要在 AI 上創業，先搞清楚自己站在哪一層。這題要畫一張 2026 年的 AI 產業鏈 map：下游的晶片（NVIDIA、AMD、Cerebras、TPU）與雲（AWS、GCP、Azure、CoreWeave）、中游的 foundation model 供應商（Anthropic、OpenAI、Google、Meta、Mistral、DeepSeek）與 inference infra（Groq、Together、Fireworks）、上游的 agent framework 與工具層、最上層的應用 SaaS。重點在於每一層的 moat 在哪、利潤流向哪、以及為什麼獨立開發者只適合玩最上面兩層。

### AI 工具評測方法論：怎麼把 demo fever 變成可複製決策

關鍵字：AI tool evaluation framework, dev tool benchmark 2026, demo fever critique, replicable decision tree, tool stack audit

描述：開發者每週被新工具洗版——Cursor 出新版、Replit 發 Agent 3、某家 MCP server 突然爆紅——但看到一支 demo 就換工具的代價是堆疊崩潰。這題要建立一套個人級的評測方法論：怎麼辨識 demo video 的話術、怎麼設計 1 小時內能跑完的小 benchmark、從成本 / 速度 / 可控性三個維度做決策、以及什麼時候該忍住不換。目標是把「AI 工具評測」這件事從情緒驅動變成可複製流程，讓讀者有一張決策表可以直接套用。

### AI 產品經驗談：從 idea 到 10 個付費用戶的實話

關鍵字：AI product first 10 customers, cold outbound AI SaaS, idea validation 2026, pricing psychology indie, founder led sales

描述：做出 AI 產品不等於有人付費。這題要整理的是最前段 10 個付費用戶從哪來：idea 選擇（不是「這題我喜歡」而是「這 10 個人會付」）、冷開發 outbound、第一波 beta 怎麼談定價、onboarding 要做到什麼程度才敢收月費、early feedback 怎麼分辨真訊號與雜訊。目標讀者是第一次把技術產品推向市場的工程師，所以會刻意繞開矽谷式 growth hack 敘事，聚焦在 bootstrap 可執行的動作與心理門檻。

### AI 產品開發實錄：一個 SaaS 從零到第一次付費的 90 天拆解

關鍵字：AI SaaS build in public 90 days, indie hacker launch timeline, MVP to revenue 2026, product journey transparency, paying customer milestone

描述：本題是「AI 產品經驗談」的姊妹題，差別在時間軸導向——用一個真實 SaaS 的 90 天為骨架：D0 選題與 kill criteria、D1–15 MVP 與第一次 public build log、D15–45 early user 招募與 pivot 訊號、D45–75 pricing experiment 與第一次 paid conversion、D75–90 retention 訊號與是否繼續投入的決策點。不要寫成流水帳，每段只留「如果重來會怎麼做」的 meta-lesson，方便讀者對映自己的時程。

### Claude Code 技術工具整合：hooks / subagent / MCP 的組合拳

關鍵字：Claude Code hooks 2026, subagent coordination, MCP server Claude Code, automation agentic workflow, Claude Code plugin system

描述：Claude Code 從「AI IDE」變成 2026 獨立開發者最常用的主控台。這題要拆的不是工具比較，而是組合戰術：hooks 怎麼串 git / CI / test runner，讓寫完程式就自動跑一輪驗證；subagent 怎麼分派研究、寫作、審查三種角色避免 context 互相污染；MCP server 怎麼接內部系統讓 agent 真的能動手；plugins 與自訂 skills 如何打造個人化 playbook。目標是給讀者一張可抄的、1 週內能架起的「個人 AI 工作站」藍圖。

### MCP server 生態盤點：500+ servers 與 Smithery 登記處戰爭

關鍵字：MCP server registry 2026, Smithery MCP Docker Hub, Linux Foundation Agentic AI, GitHub MCP server deploy, MCP OAuth 2.1 streaming

描述：MCP 在 2026 年 4 月已經是 AI 工具界最健康的開放協定——超過 500 個官方加 10,000 個公開 server、Linux Foundation Agentic AI Foundation 接手治理、Streamable HTTP 與 MCP Tasks 與 OAuth 2.1 都進了規格。對獨立開發者這是兩面刃：一方面新專案有大量可重用的整合，另一方面 registry 戰爭（Smithery、FastMCP、MCP Bundles）還沒分勝負。這期要談：哪 10 個 server 值得先裝、選 registry 要看哪些指標、作為 SaaS 創業者該「自建 MCP server 暴露 API」還是「寫一個消費其他 MCP 的 agent」、以及資安與權限邊界怎麼畫。

### SaaS 新定價模型：seat、用量、outcome 的 2026 戰場

關鍵字：seat based pricing death 2026, Intercom Fin outcome pricing, hybrid SaaS pricing, AI compute tax, usage based backlash

描述：2026 是 seat-based 定價的轉折年——Monday.com 把 100 個 SDR 換成 AI agent、Atlassian 首次出現 seat 數下滑、整個 SaaS 類股蒸發 2,850 億美元。同時 usage-based 也碰壁：Cursor 的調價引起 Reddit / HN 連環炎上，使用者不喜歡 bill shock。結果是 hybrid（訂閱 + 用量，56% 採用）、outcome-based（Intercom Fin $0.99 / resolved）成為主流。這題要回答：一個要上線的 AI SaaS，怎麼選第一天的定價結構？什麼時候轉 hybrid、什麼時候敢收 outcome？價格討論怎麼跟客戶談、公開定價頁要不要揭露三種方案？

## 下期主題 next topic

### 一人 Vibe Coding 能吃下多大專案？2026 的成敗分界線與新規則

關鍵字：vibe coding Karpathy 2025 definition, vibe coding solo founder SaaS revenue 2026, vibe coding hangover technical debt enterprise, Claude Code Cursor spec driven development 2026, AI generated code bug density edge case, Payout Connor Burd 20k MRR, Lovable security vulnerability vibe coding, arxiv 2512.11922 vibe coding flow debt

短文：Vibe coding 從 Karpathy 2025 年 2 月那則 tweet 走到 2026 年 4 月，已經不再只是「打打看」的 meme——Indie Hackers 估計 2026 Q1 有 34% 的新 micro-SaaS 由沒有程式基礎的創辦人送出，當中不乏 Payout（Connor Burd，14 天上線、50 天做到 $20K MRR）這類真實案例。對我們這位「會 JS 前後端、想做 SaaS」的讀者而言誘惑很清楚：用 AI 槓桿把腦中點子在 4 週內搬上線。但另一邊是「hangover」——Harvard Gazette 2026-04-01 整理出 AI 產出的代碼在錯誤處理路徑 bug 密度高出人手 35–40%，Lovable 1,645 個 app 裡有 170 個洩漏個資，arxiv 2512.11922 把整個現象歸納成 flow-debt tradeoff。本期不重做「vibe coding 是什麼」的科普，而是鎖定一個更具體的問題：**一位 JS 全端工程師，用 AI 槓桿到底能吃下多大的專案？哪一條線過去後就要改寫、該怎麼改寫？** 目前規劃四條主線：（一）獨立開發者的甜蜜區與天花板，用 Payout / MiroFish / Lovable 三個真實案例拆骨架；（二）spec-driven development + Claude Code 搭 Cursor 的 2026 實戰流程，回答「大型專案」怎麼不崩；（三）從 MVP 到第一個付費版本要避開哪些 hangover，涵蓋依賴幻覺、安全漏洞、維護悖論；（四）行銷角度怎麼講一個「AI 寫的 SaaS」故事、信任如何建立、定價是否要揭露 AI 占比。目標是讓讀者讀完後有一條清楚的「現在能做／該收手／該改寫」決策線。

參考來源：

1. [Vibe coding — Wikipedia](https://en.wikipedia.org/wiki/Vibe_coding) — Wikipedia 條目，彙整 2025–2026 定義與爭議
2. [Vibe Coding in Practice: Flow, Technical Debt, and Guidelines for Sustainable Use](https://arxiv.org/abs/2512.11922) — Waseem et al., arXiv, 2025-12-11
3. [Vibe coding may offer insight into our AI future](https://news.harvard.edu/gazette/story/2026/04/vibe-coding-may-offer-insight-into-our-ai-future/) — Harvard Gazette, 2026-04-01
4. [Vibe coding could cause catastrophic 'explosions' in 2026](https://thenewstack.io/vibe-coding-could-cause-catastrophic-explosions-in-2026/) — The New Stack, 2026
5. [Using spec-driven development with Claude Code](https://heeki.medium.com/using-spec-driven-development-with-claude-code-4a1ebe5d9f29) — Heeki Park, Medium, 2026-03
6. [AI SaaS Solo Founder Success Stories (2026)](https://crazyburst.com/ai-saas-solo-founder-success-stories-2026/) — Crazyburst, 2026
