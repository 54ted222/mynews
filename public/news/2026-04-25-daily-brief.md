---
title: 每日創業情報 — 2026-04-25
date: 2026-04-25
tags: 創業情報, AI 產業, SaaS
summary: Google 砸 $40B、Amazon 追加 $25B 押 Anthropic 算力；Anthropic 同步公布 Claude Code 兩個月品質衰退 postmortem 並重置額度；今日起 Copilot 個人方案資料預設進訓練集。
keywords: Google Anthropic 40 billion investment April 24 2026, Amazon Anthropic 25 billion 100 billion AWS deal April 20 2026, Claude Code April 23 postmortem caching bug reasoning effort, Anthropic Claude Opus 4.7 GA April 16 2026, Orkes 60M Series B agentic workflow April 23 2026, Cloudsmith 72M Series C software supply chain April 23 2026, GitHub Copilot data training opt out April 24 2026, Supabase April 2026 Multigres Vector Buckets Stripe Sync, IP Fabric MCP server governance April 23 2026, Vercel AI Gateway Kimi K2.6 April 20 2026
---

# 每日創業情報 — 2026-04-25

## 🎯 今日 TL;DR

- Google 4/24 宣布對 Anthropic 投資最高 $40B（首筆 $10B、估值 $350B）並承諾 5 年內交付 5GW Google Cloud 算力；與 4/20 Amazon 的 $25B 追加 + Anthropic 回頭承諾十年 $100B AWS 開銷合起來，等於 Anthropic 在一週內綁定了三家大雲
- Anthropic 4/23 發布 Claude Code 兩個月品質衰退 postmortem[^postmortem]：坦承 3/4 把預設 reasoning effort 從 high 調到 medium、3/26 cache 清除邏輯有 bug、4/16 加了降低 verbosity 的 system prompt——三條都已回滾，並為受影響用戶**重置 usage limits**
- **今天（4/24）起 GitHub Copilot Free / Pro / Pro+ 的 prompt、code snippet、context 會預設被拿去訓練模型**，Business / Enterprise 不受影響；若還沒 opt out，下午就去 `/settings/copilot/features` 關掉
- 資金面同步發聲：Orkes 拿 $60M Series B 做 agentic workflow[^agentic] 持久化執行、Cloudsmith 拿 $72M Series C 做 AI 時代軟體供應鏈；「agent 能跑」之後下一個錢潮是「agent 跑得穩、可審計、不出事」

## 🔄 昨日追蹤

### AI coding 成本 / 治理 🔄 追蹤更新

昨天寫的主軸是「需求沒降，供應商在把入口從便宜好買改成可控可審」。今天兩條後續把這個結構再推一步：

- **Anthropic 自己承認過去兩個月 Claude Code 品質下滑不是錯覺**：三個產品端變更一起造成退化，並用「全員重置 usage limits」補償——這等於承認 agent 定價模型裡的不可見惡化，使用者有權利要求對帳
- **GitHub 個人方案今天起預設拿資料訓練**：Business / Enterprise 不受影響，代表「若你是付費但仍在 Pro / Pro+ 的 solo dev，你變成訓練資料的第一順位」

### agent 治理層 🔄 追蹤更新

昨日與前日都在寫 GitHub 把 agent 塞進 issue / project、Vercel 事件、Cloudflare MCP[^mcp] portal。今天 Orkes $60M 是**同一個故事的另一面**——把 workflow 做成 durable execution[^durable]、支援 human-in-the-loop[^hitl] 與 governance，市場願意為「agent 可靠性」付 Series B 估值。Cloudsmith 的 $72M Series C 則在供應鏈端補位：AI agent 跑得多，artifact、secret、dependency 的流動風險也就多。

## 📰 AI 產業動態

| 事件 | 影響 | 機會/威脅 | 來源 |
| ---- | ---- | --------- | ---- |
| Google 4/24 承諾投資 Anthropic 最高 $40B（首筆 $10B，估值 $350B），另提供 5 年 5GW Google Cloud 算力；與 4/20 Amazon 再投 $25B（$5B 立即）、Anthropic 回頭承諾 10 年 $100B AWS 的交易呼應 | Claude 的供給側今年被大幅放大，短期使用者可見的是 usage limit 漲、供應穩；中期則是 Anthropic 對兩大雲的績效義務變成產品決策隱性約束 | 機會：把這一輪算力釋出假設明確寫進 cost 模型；威脅：期待「更便宜」的獨立開發者可能要轉向 OSS / 較小模型才會真正降本 | [TechCrunch](https://techcrunch.com/2026/04/24/google-to-invest-up-to-40b-in-anthropic-in-cash-and-compute/) / [CNBC](https://www.cnbc.com/2026/04/24/google-to-invest-up-to-40-billion-in-anthropic-as-search-giant-spreads-its-ai-bets.html) / [TechCrunch Amazon](https://techcrunch.com/2026/04/20/anthropic-takes-5b-from-amazon-and-pledges-100b-in-cloud-spending-in-return/) |
| Anthropic 4/23 發布 Claude Code 兩個月品質衰退 postmortem：3/4 預設 reasoning effort 從 high 改 medium、3/26 cache 清除邏輯錯誤、4/16 verbosity 系統指令有害，三者已全部回滾；v2.1.116 修復 cache bug，並**全員重置 usage limits** | 「agent shrinkflation」第一次有廠商正式認帳；之後所有 agent vendor 都會被用同一把尺量 | 機會：把「回歸測試 + 行為 diff + cost diff」做成可訂閱報告；威脅：以前靠 prompt engineer 默默補品質的產品，現在被期待有公開 SLA | [Anthropic postmortem](https://www.anthropic.com/engineering/april-23-postmortem) / [VentureBeat](https://venturebeat.com/technology/mystery-solved-anthropic-reveals-changes-to-claudes-harnesses-and-operating-instructions-likely-caused-degradation) |
| Orkes 4/23 宣布 Series B 募得 $60M（AVP 領投，Prosperity7、Nexus、Battery、Vertex 跟投）做 durable agentic workflow orchestration | agent 正從「能跑就好」進到「要可回放、可重試、可暫停等人」；workflow engine 成為 2026 下半年 infra 必備層 | 機會：在 Orkes / Temporal / Trigger.dev 等 enterprise 方案之外做 SMB / solo 版本；威脅：自己拼 queue + cron + retry 的 side project 越來越難升級成產品 | [Finsmes](https://www.finsmes.com/2026/04/orkes-raises-60m-in-series-b-funding.html) / [AVP](https://avpcap.com/orkes-raises-60m-as-developers-increasingly-use-its-platform-to-deploy-ai-confidently-in-production/) |
| Cloudsmith 4/23 宣布 Series C $72M（TCV 領投、Insight Partners 參投）聚焦 AI 時代軟體供應鏈（artifact / dependency / SBOM） | agent 大規模 commit 程式碼，依賴與 artifact 流動頻率暴增；供應鏈工具從合規成本變成營收前置條件 | 機會：做針對 AI 生成依賴的審計層、agent commit SBOM 驗證；威脅：沒有驗證 agent 產出依賴來源的中小團隊風險變大 | [Tech.eu](https://tech.eu/2026/04/23/cloudsmith-raises-72m-series-c-to-secure-the-ai-era-software-supply-chain/) |
| **GitHub Copilot 4/24 起**把 Free / Pro / Pro+ 的 prompts、code snippets、context 納入模型訓練（預設 opt-in），Business / Enterprise 不受影響；使用者可於 `/settings/copilot/features` 關閉 | 獨立開發者的「日常工作內容」從今天起就是 GitHub 的訓練資料；若 repo 裡有客戶 PII、金鑰、未發表 IP，風險直接落到個人 | 機會：做 Copilot 組織 / 個人 opt-out 稽核工具、給 agency / SI 用的政策模板；威脅：客戶合約若禁止資料訓練，continue 用 Copilot 個人方案 = 違約 | [GitHub Blog](https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/) / [Changelog](https://github.blog/changelog/2026-03-25-updates-to-our-privacy-statement-and-terms-of-service-how-we-use-your-data/) |

## 🛠 新興 AI 工具

| 工具 | 類別 | 用途 | 定價 | 差異點 | 採用建議 |
| ---- | ---- | ---- | ---- | ------ | -------- |
| Claude Code v2.1.116 | AI IDE / agent CLI | 回滾 reasoning effort 與 verbosity 變更、修復 cache 清除 bug；subscribers usage limits 全員重置 | 依既有 Claude Pro / Max 方案 | 第一次有 agent vendor 為品質回退發 postmortem 並補償使用者 | 建議立即升級並跑一輪既有 golden set（複雜 refactor、long context 任務）量化前後差 |
| Orkes Conductor 2026 / Agent Runtime | durable agentic workflow | 把 LLM 呼叫、tool use、human-in-the-loop 包進 structured process stages，支援暫停 / 重試 / 回放 | Cloud Conductor 有 free tier；企業另報價 | 原本就是 workflow engine 老玩家，這次升級把 agent 當一等公民 | 若你已經卡在自寫 cron / queue / retry，先挑一條最會掛的 pipeline 試遷移 |
| IP Fabric MCP Server | 企業 AIOps / 網路治理 | 把 IP Fabric 的 network / cloud 全景透過 MCP 暴露給 agent，opt-in 預設、帶 prompt library | 既有 IP Fabric 客戶方案；無額外 MCP 費用 | 這是第一批「預設 opt-in、內建 prompt library」的垂直 MCP 服務 | 企業 IT 想試 agentic AIOps 的起點；小團隊可借鑑其 opt-in 與權限設計模式 |
| Supabase 2026-04 Developer Update | BaaS / Postgres platform | Multigres Kubernetes Operator[^multigres] 開源、Stripe Sync Engine 一鍵整合、Vector Buckets public alpha、Studio「Fix with Assistant」、GitHub 整合下放至免費方案 | 既有 Supabase 方案 | Postgres + vector + Stripe + K8s operator 等一起進來，把 Supabase 再往「AI-native backend」推 | 若你在 Neon / Turso / Convex 之間還沒定案，這版是觀察 Supabase 是否夠用的好時間 |
| Vercel AI Gateway: Kimi K2.6 | 多模型路由 / edge inference | Moonshot Kimi K2.6 於 4/20 上架，適合長程 coding、前端生成與 agent workflow；直接在 AI Gateway 計費 | $0.80 / 1M input tokens、$3.50 / 1M output tokens | 對比主流 frontier 模型便宜很多，適合做 fallback / 大量 agent 任務 | 把它接進既有 LLM router 跑一批非關鍵任務（文件分類、issue triage）先驗證品質 |

## 💡 SaaS 點子

### 點子 1：Agent Behaviour Diff & Regression 🆕

- 痛點來源：Anthropic 這次 postmortem 顯示 agent 品質會被「看起來無害的預設改動」拉走；使用者沒工具能證明、沒工具能止損
- 目標客群：重度依賴 Claude Code / Codex / Cursor 的 3–50 人開發團隊、AI agent SaaS 創業者
- 技術複雜度：3/5
- 預估 MRR：$2K–$10K
- 競品弱點：既有 eval 工具偏學術 / offline；沒工具專門追「同一 prompt 隨時間的品質與 cost drift」
- 切入建議：從 Claude Code / Codex / Cursor 抓 session log，跑 golden set 的定期 replay，產出「週報 + 告警」；先開源，後付費做跨組織 dashboard

### 點子 2：Copilot Training Consent Auditor 🆕

- 痛點來源：4/24 起 Copilot 個人方案資料預設進訓練；仰賴 Copilot 的 agency、freelancer、外包團隊必須向客戶證明「這帳號已 opt out」，但 GitHub 不提供組織視角的一鍵報告
- 目標客群：軟體顧問 / agency、自由接案工程師、MSP
- 技術複雜度：2/5
- 預估 MRR：$1K–$5K
- 競品弱點：Copilot 沒為 agency 做多帳號 / 多客戶矩陣工具；現存合規平台大多不接 GitHub 個人帳號設定
- 切入建議：做 GitHub OAuth + 個人 / 組織層設定抓取，生成帶時戳的 PDF opt-out 證明；再把 ruleset 擴張到 VS Code、Cursor、Codex

### 點子 3：Solo-scale Durable Agent Runner 🆕

- 痛點來源：Orkes 這類 $60M 級產品太重，5 人以下團隊用不起；但自寫 queue + retry + cron 很快就卡 human-in-the-loop 與回放
- 目標客群：indie SaaS、solo founder、內容 / 行銷自動化團隊
- 技術複雜度：3/5
- 預估 MRR：$1K–$8K
- 競品弱點：Temporal / Orkes / Inngest 對個人使用者來說仍太工程；Trigger.dev 側重背景任務但缺 HITL UI
- 切入建議：先做 GitHub App 介面的「把某 workflow 放成 durable run」，用 YAML 定義，讓 Claude Code / Codex 產 workflow 時能直接塞進來

## 🧰 工具堆疊更新

- **如果你用 Claude Code**：跑一次 `/upgrade` 拉到 v2.1.116 並重測 golden tasks；順便**用被重置的 limit** 把積欠任務清一清（Anthropic 這次補償不會每次都有）
- **如果你付 Copilot 個人方案**：今天就去 Settings → Copilot → Privacy 關掉「Allow GitHub to use my data for AI model training」；幫客戶寫 code 的 freelancer 一定要做
- **如果你卡在「agent 跑一半壞掉要重頭跑」**：Orkes / Temporal / Inngest / Trigger.dev 之中挑一個試一週，別再自己寫 cron
- **如果你在 Supabase 上**：試 Vector Buckets public alpha，比自己 tune pgvector 參數可能快很多；Stripe Sync Engine 省一條 webhook 接線

## ⚡ 今日行動建議

- [ ] 立刻檢查 GitHub Copilot 個人方案的 data training 設定（5 分鐘，可直接降合規風險）
- [ ] 用既有 agent 任務測 Claude Code v2.1.116 前後差異，抓一組「cost + pass rate」對照表（60 分鐘）
- [ ] 若你主要成本是 Anthropic，把 Google $40B / Amazon $100B 的算力交付節奏（$10B 立即、5GW 5 年）寫進明年定價模型（30 分鐘）
- [ ] 若產品裡有 agent pipeline，先列出「一個 step 失敗就整條重跑」的任務，排名後挑第一條試 durable workflow（90 分鐘）
- [ ] 把 Vercel AI Gateway Kimi K2.6 接進 LLM router，跑 100 筆非核心任務比對 Claude / GPT 的 cost & latency（1 小時）

## ⏳ 待觀察

- Anthropic postmortem 後，會不會把「behaviour change 事前公告」做成像 AWS 式的 change log
- GitHub Copilot 資料訓練政策會不會讓部分歐盟客戶轉用 Business / Enterprise 或改採自架 agent
- 下一輪 agent 平台募資會不會集中在「durable execution / human-in-the-loop / audit」這三條軸線
- Google 與 Amazon 對 Anthropic 的雙重綁定，是否導致中小 API 用戶價格被推向分層（企業價 vs 零售價差距拉大）
- Supabase Vector Buckets 正式公開後，會不會啃到 Pinecone / Turbopuffer / Qdrant 的獨立開發者客層

[^postmortem]: postmortem 是工程團隊在事故或品質事件後發布的事後檢討報告，通常包含時序、根因、影響範圍與補救措施。慣例上以「對事不對人」為原則，要求寫清楚哪個變更在哪個時間點產生何種影響，並列出已採取與未來將採取的行動，讓外部可以用它來衡量廠商透明度。

[^multigres]: Multigres 是 Supabase 以 Vitess 思路為 Postgres 打造的水平擴展方案，透過 Kubernetes Operator 將單一 Postgres 切成多個 shard 並保留原生 SQL 介面。目標是讓既有 Postgres 應用能在不改 client 程式碼的情況下跨越單機容量上限，適合資料量與併發量同步成長的 SaaS 後端。

[^agentic]: agentic workflow 指由 LLM 主動規劃步驟、挑選工具、判讀中間結果並決定下一步的自動化流程，相較傳統線性 pipeline，節點之間的分支由模型即時決策。這類工作流對重試、狀態保存、可觀測性的需求比一般背景任務更高，因此催生了 Orkes、Temporal、Inngest 等專門承載 agent 的執行層。

[^mcp]: MCP（Model Context Protocol）是 Anthropic 主導的開放協定，讓 LLM 透過標準化介面連接外部工具、資料庫與 SaaS。伺服器端宣告可呼叫的 function 與資源，客戶端（如 Claude、Cursor）再把它接進 agent；效果類似「給 AI 的 USB」，讓整合不必一對一重寫，也便於集中做權限與稽核。

[^durable]: durable execution（持久化執行）是一種 workflow 模式：引擎會把每一步的輸入、輸出、時戳寫入外部存儲，行程崩潰或機器重啟後可以從中斷點繼續、而非從頭重跑。Temporal、Orkes Conductor、Inngest、Trigger.dev 是常見實作，特別適合跑多小時的 LLM agent 或需要等待人工審核的流程。

[^hitl]: human-in-the-loop（HITL）指在自動化流程中保留明確的人為審核或介入點，由真人在關鍵步驟批准、修正或終止 agent 的行動。常見用途包括法遵審查、高風險工具呼叫、客服升級場景；技術實作通常需要 workflow 能暫停、通知、再以同一狀態續跑，因此與 durable execution 常一起出現。

## 📚 引用來源

1. [Google to invest up to $40B in Anthropic in cash and compute | TechCrunch](https://techcrunch.com/2026/04/24/google-to-invest-up-to-40b-in-anthropic-in-cash-and-compute/) — 2026-04-24
2. [Google to invest up to $40 billion in Anthropic | CNBC](https://www.cnbc.com/2026/04/24/google-to-invest-up-to-40-billion-in-anthropic-as-search-giant-spreads-its-ai-bets.html) — 2026-04-24
3. [Anthropic takes $5B from Amazon and pledges $100B in cloud spending in return | TechCrunch](https://techcrunch.com/2026/04/20/anthropic-takes-5b-from-amazon-and-pledges-100b-in-cloud-spending-in-return/) — 2026-04-20
4. [An update on recent Claude Code quality reports | Anthropic](https://www.anthropic.com/engineering/april-23-postmortem) — 2026-04-23
5. [Mystery solved: Anthropic reveals changes to Claude's harnesses | VentureBeat](https://venturebeat.com/technology/mystery-solved-anthropic-reveals-changes-to-claudes-harnesses-and-operating-instructions-likely-caused-degradation) — 2026-04-23
6. [Orkes Raises $60M in Series B Funding | Finsmes](https://www.finsmes.com/2026/04/orkes-raises-60m-in-series-b-funding.html) — 2026-04-23
7. [Cloudsmith raises $72M Series C to secure the AI-era software supply chain | Tech.eu](https://tech.eu/2026/04/23/cloudsmith-raises-72m-series-c-to-secure-the-ai-era-software-supply-chain/) — 2026-04-23
8. [Updates to GitHub Copilot interaction data usage policy | GitHub Blog](https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/) — 2026-03-25
9. [Managing GitHub Copilot policies as an individual subscriber | GitHub Docs](https://docs.github.com/copilot/how-tos/manage-your-account/managing-copilot-policies-as-individual-subscriber) — 2026-04 查閱
10. [IP Fabric MCP server adds governance and control | Help Net Security](https://www.helpnetsecurity.com/2026/04/23/ip-fabric-mcp-server/) — 2026-04-23
11. [Release Developer Update - April 2026 | Supabase GitHub](https://github.com/supabase/supabase/releases/tag/v1.26.04) — 2026-04
12. [Kimi K2.6 on AI Gateway | Vercel Changelog](https://vercel.com/changelog/kimi-k2.6-on-ai-gateway) — 2026-04-20
