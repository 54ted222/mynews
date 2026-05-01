---
title: 每日創業情報 — 2026-05-02
date: 2026-05-02
tags: 創業情報, AI 產業, SaaS
summary: Microsoft Agent 365 昨日 GA，把 agent 治理當 $15/user/月 SaaS 賣；OpenAI 同週上 AWS Bedrock 終結七年 Azure 獨佔；Mistral Medium 3.5 試水溫被罵價格貴。
keywords: Microsoft Agent 365 GA May 1 2026, Microsoft 365 E7 Frontier Suite $99, OpenAI AWS Bedrock April 28 2026 GPT-5.5 Codex, Microsoft OpenAI Azure exclusivity end 2026, Mistral Medium 3.5 Vibe remote agents April 29 2026, Mistral Medium 3.5 pricing criticism HackerNews, Vercel AI Gateway DeepSeek V4 GPT-5.5 GPT Image 2, Bedrock Managed Agents OpenAI 2026, agent governance control plane SMB
---

# 每日創業情報 — 2026-05-02

## 🎯 今日 TL;DR

- **Microsoft Agent 365** 昨日（5/1）正式 GA，獨立方案 $15 / user / 月、或包進 $99 的 M365 E7 Frontier Suite[^e7]，把「agent 治理控制台」直接做成 SaaS 賣——所有用 Microsoft Foundry[^foundry] / Copilot Studio[^copilotstudio] / 第三方 agent 的人都會被推著買單
- **OpenAI 4/28 正式上 AWS Bedrock**：GPT-5.4、GPT-5.5（limited preview）、Codex、以及 Bedrock Managed Agents[^bedrock] 都同步開放；終結 2019 年起 Microsoft 的七年 Azure 獨佔，雲端三強第一次同時握有 OpenAI 入口
- **Mistral 4/29 發布 Medium 3.5（128B dense、open-weights）**並推出 Vibe[^vibe] remote agents（cloud 端跑 coding agent）；定價 $1.50 / $7.50 per 1M tokens、改良 MIT 授權、四張 GPU 可自架——但 HN / X 圈罵「比中國對手又貴又輸 benchmark」
- **Vercel AI Gateway** 同週把 GPT-5.5 / GPT-5.5 Pro、DeepSeek V4 Pro / Flash、GPT Image 2 全部接好；把昨天還要 OpenRouter 一層的事直接吃掉

## 🔄 昨日追蹤

### DeepSeek V4 殺價戰 🔄 追蹤更新

4/26 寫的主軸是「open-weight frontier 把 GPT-5.5 / Opus 4.7 議價空間打回來」。今天的後續是 **Vercel AI Gateway 直接收編 V4 Pro / Flash**——你不必再從 OpenRouter 過一層，前端 SaaS 就能在 Vercel 帳單裡直接拉出 V4 用量曲線。對 Vercel 上線、又用 Cursor / Claude Code 工作的 indie dev，這代表「同時部署 + 同時用模型」的成本透明度變高一個 order of magnitude。

### 三大雲算力綁定 🔄 追蹤更新

4/25 寫的是 Google $40B + Amazon $100B 把 Anthropic 算力綁住、Azure 仍是 OpenAI 的「primary」。**今天的另一邊：4/28 OpenAI 正式上 AWS Bedrock**——Microsoft 的「unilateral lock-in」結束，剩下的是 license 至 2032。意義上：之後寫定價模型不能再假設「OpenAI = Azure / Anthropic = AWS+GCP」，三強都會在三家雲上看得到，談判槓桿會跑回客戶手上。

### Anthropic Rate Limits API 治理戰 🔄 追蹤更新

4/26 提到 Rate Limits API 補完 postmortem 的對帳工具承諾。今天的競爭壓力來自微軟——**Agent 365 把跨多家 agent vendor 的 governance 直接做成可上架的 SKU**。Anthropic 還停在「我家的 quota API」，微軟已經把「不管你用誰家 agent，policy / runtime block / Intune 串好給你」當成 $15 月費賣。這條 Anthropic 不快點補，企業客戶就會把治理工作交給微軟。

## 📰 AI 產業動態

| 事件 | 影響 | 機會/威脅 | 來源 |
| ---- | ---- | --------- | ---- |
| Microsoft 5/1 將 **Agent 365**[^agent365] 推上 GA：獨立 $15 / user / 月、或包進 $99 的 M365 E7（含 E5 + Copilot + Entra Suite + Agent 365）；context mapping、policy controls、runtime block / alert 透過 Intune / Defender 6 月公測 | agent governance 從 internal tool 變成商品化的 control plane；Microsoft 對「無論你 agent 跑在哪都要有人治理」這層收稅 | 機會：對 5–50 人團隊做「比 $15 便宜、不必綁 M365」的輕量 governance 工具；威脅：原本 sell governance 的 startup 會被 Microsoft bundle 推到沒有差異 | [Microsoft Security Blog](https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/) / [SAMexpert](https://samexpert.com/microsoft-365-e7-licensing-guide/) / [Trustmarque](https://trustmarque.com/microsoft-365-e7-agent-365-whats-launching-1-may-and-what-it-means) |
| OpenAI 4/28 把 GPT-5.4、GPT-5.5（limited preview）、Codex、Bedrock Managed Agents 上 **AWS Bedrock**；Azure 仍是「primary」但七年 Microsoft 獨佔正式結束 | 終結 single-vendor cloud lock-in；OpenAI 並補上 4/2025 年的 $38B 七年 AWS 算力承諾（GB200 / GB300 GPU） | 機會：把 LLM 的 cloud routing 寫成「同模型 × 三家雲」對沖（成本 / 區域 / availability）；威脅：純 wrapper 一直靠「我比 Azure 直連便宜」差價的 SaaS 利基會被擠掉 | [OpenAI](https://openai.com/index/openai-on-aws/) / [The Register](https://www.theregister.com/2026/04/28/openai_climbs_into_amazons_bedrock) / [AWS Bedrock](https://aws.amazon.com/bedrock/managed-agents-openai/) |
| Mistral 4/29 發布 **Medium 3.5**（128B dense、open-weights、改良 MIT 授權、4 張 GPU 自架可行）與 **Vibe remote agents**（cloud 端跑 async coding agent，Le Chat / Vibe CLI 啟動）；API $1.50 / $7.50 per 1M tokens | 歐系玩家難得有夠大、可商用授權的 open-weight 模型；但 SWE-Bench Verified 77.6% 與定價對中國對手沒有競爭力 | 機會：Mistral 3.5 適合對 EU 市場做「資料不出歐」的 SaaS 賣點；威脅：純拿 Mistral 跑通用 agent，今天還搶不過 V4 Flash 的價格 / 性能 | [Mistral](https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5) / [Decrypt](https://decrypt.co/366275/mistral-ai-open-source-model-agents-internet-not-impressed) / [HN 討論](https://news.ycombinator.com/item?id=47949642) |
| **Vercel AI Gateway** 4 月底連續上線 GPT-5.5 / GPT-5.5 Pro、DeepSeek V4 Pro / Flash（1M context）、GPT Image 2；用同一支 Gateway key 就能切，內建 retry / failover / BYOK / 自家 observability | 把 OpenRouter / Portkey 的「routing layer」價值再往前推；對既有 Vercel 用戶是 zero-config 的成本與品質實驗 | 機會：把「在 Vercel Gateway 上跑 cost / latency 對比週報」做成 SaaS；威脅：以 SDK 包裝多 vendor 的小 wrapper 工具空間又少一塊 | [Vercel Changelog](https://vercel.com/changelog/deepseek-v4-on-ai-gateway) / [Vercel Updates](https://releasebot.io/updates/vercel) |

## 🛠 新興 AI 工具

| 工具 | 類別 | 用途 | 定價 | 差異點 | 採用建議 |
| ---- | ---- | ---- | ---- | ------ | -------- |
| Microsoft Agent 365 | agent governance / 控制平面 | 集中管理 Foundry、Copilot Studio、第三方 agent 的身分、權限、政策、稽核 | $15 / user / 月（獨立）或 $99 E7 bundle | 把 agent 治理當成 SaaS 賣，而非 add-on；Intune / Defender 整合 6 月公測 | 已有 M365 E3 / E5 客戶可直接 staging 試；非 Microsoft stack 的 indie dev 用不到、但要關注「他家 vs 自架 OPA / OpenFGA」的成本曲線 |
| Bedrock Managed Agents（OpenAI 版） | 託管 agent runtime | 在 Bedrock 上一條 API 跑 OpenAI 模型 + tool use + memory + sandbox | 隨 Bedrock 用量計費 | AWS 第一次有 OpenAI 加持的 first-party agent runtime；可直接吃 IAM / VPC / CloudTrail | 已在 AWS、又想用 OpenAI 模型的團隊先測；Codex on Bedrock 對 enterprise SOC2 / HIPAA 場景特別省事 |
| Mistral Medium 3.5 + Vibe Remote Agents | open-weight LLM + cloud coding agent | 128B dense / 256K context / 修改版 MIT；coding agent 從 CLI / Le Chat 派發到雲端，跑完通知 | API $1.50 / $7.50 per 1M；Vibe 需 Pro / Team / Enterprise 訂閱 | 4 GPU 可自架；歐盟資料不出境的 SaaS 賣點 | 通用 task 比起 V4 Flash 貴一個 order；但「自架 + 商用授權 + EU」場景值得做 PoC |
| Vercel AI Gateway（DeepSeek V4 / GPT-5.5 / GPT Image 2） | 多模型 gateway / observability | 同支 Gateway key 切 GPT-5.5、V4 Pro / Flash、GPT Image 2；含 retry、failover、BYOK | 既有 Vercel 方案（按 token 加價分潤） | 對 Vercel 用戶 zero-config；把 OpenRouter 那層直接收掉 | 既有 Vercel 部署的 SaaS 直接切過去看 24h 結帳；非 Vercel 用戶就略過 |
| OpenAI Codex on Bedrock | enterprise coding agent | Codex CLI / 雲端 sandbox 透過 AWS 帳號計費，無須換 OpenAI billing | 隨 Bedrock 用量計費（Codex 本身需訂閱） | 終於可以走公司 AWS PO 結帳；對 enterprise 採購流程是大解鎖 | enterprise team 趁這波把 Codex 從 individual 訂閱遷成 BYO-AWS；solo dev 反而用不到 |

## 💡 SaaS 點子

### 點子 1：SMB 版 Agent Governance（Agent 365 的反面） 🆕

- 痛點來源：5/1 Microsoft Agent 365 上線，把 agent 治理 commodity 化；但 5–50 人團隊不會為了一個 control plane 升 M365 E5 / Copilot / Entra 一整套 $99 / user
- 目標客群：跑 Claude Code / Cursor / Codex 的 5–50 人 dev / product 團隊、AI agency
- 技術複雜度：3/5
- 預估 MRR：$3K–$15K
- 競品弱點：Microsoft 綁 Entra；OPA / OpenFGA 太工程；Lakera / WhyLabs 偏 ML observability、不管 agent runtime
- 切入建議：先做「單人也能架的 agent activity ledger + policy linter」（Claude Code、Codex CLI、Cursor 的 session log → 分類 + tag + alert），$5–$10 / user / 月切微軟下面

### 點子 2：Cross-Cloud LLM Cost Arbitrator 🆕

- 痛點來源：4/28 後 OpenAI 同時在 Azure / AWS Bedrock，Anthropic 已在 AWS / GCP；同一支 prompt 在三家雲價格與 latency 不同，但沒人幫你跑日級對比
- 目標客群：月帳 $5K–$200K LLM 的 indie / mid-sized SaaS、agent SaaS、内容自動化
- 技術複雜度：3/5
- 預估 MRR：$2K–$12K
- 競品弱點：Vercel AI Gateway 偏路由、不偏 cloud arbitrage；OpenRouter 不接雲端帳號；FinOps 工具不熟 LLM
- 切入建議：每天從客戶 BYOC 設定跑 100 條 sample prompt × 三家雲，輸出「同 prompt × 同模型 × 三家雲」cost / latency / availability 表，週報 + Slack alert

### 點子 3：Mistral 3.5 Fixed-Price Self-Host Audit 🆕

- 痛點來源：Medium 3.5 開源 + 4 GPU 可自架 → 「能不能自架、要花多少錢、值不值得」變成 EU SaaS 老闆每週問題；多數人沒興趣讀 vLLM / SGLang config
- 目標客群：歐盟 / GDPR / 受規管行業（健康、金融）想用 LLM 的 5–50 人 SaaS 團隊
- 技術複雜度：4/5
- 預估 MRR：$2K–$15K
- 競品弱點：Together / Fireworks 賣 hosted；缺一個只賣「幫你跑起 Mistral 3.5 在自家 EU infra」的 productized service
- 切入建議：固定價提供 4×L40S / 4×H100 兩個 reference deployment + cost calc + throughput 基準；用 fixed-price audit 收第一波，後期轉 retainer

## 🧰 工具堆疊更新

- **如果你在 AWS 上又想用 OpenAI**：今天就把 GPT-5.4 / 5.5 Bedrock 路徑接進 staging，比較 BYO-Azure 的 latency 與計費差；多數 enterprise 採購流程因此可以把 OpenAI 訂閱併進既有 AWS Enterprise Discount Program
- **如果你跑 Vercel**：把現有 LLM 呼叫切到 Vercel AI Gateway，至少把 GPT-5.5 vs DeepSeek V4 Flash 兩條跑出 24 小時對比表（很可能省 60%+）
- **如果你做 EU 市場 SaaS**：Mistral Medium 3.5 + Vibe 是新的「資料不出歐」說詞；但別只信 demo，先在自架環境跑你自己的 golden set
- **如果你被 Agent 365 推銷打爆**：先列「我有沒有跨多家 agent vendor 的真實治理需求」這條清單；只用 Claude Code 一條線的 solo dev 不必動，多 vendor 多 repo 的 SI / agency 才該認真評估

## ⚡ 今日行動建議

- [ ] 用 1 條既有 prompt 在 Vercel AI Gateway 跑 GPT-5.5、DeepSeek V4 Pro、V4 Flash 三組，記錄 cost / latency / pass rate（30 分鐘）
- [ ] 若你已在 AWS：開一個 Bedrock 帳號權限，把 GPT-5.5 limited preview 申請排隊（10 分鐘現在排、未來 2 週可拿到）
- [ ] 在 internal Notion 寫一頁「我家的 agent governance 應該由誰管」備忘——是 Microsoft Agent 365？是自架 OPA？還是先沒有？（45 分鐘，下週採購季用得上）
- [ ] 若做 EU 客戶：跑一輪 Mistral Medium 3.5 在你家 task 的 50 條 golden set，對比 Sonnet 4.6 與 V4 Pro 的 cost / quality / EU 條件三維度（90 分鐘）
- [ ] 若你做的是 wrapper SaaS：把「為什麼客戶不直接 Vercel AI Gateway」答案寫進 sales FAQ——不只是價格，要講 evals、rerank、你自家 prompt graph 的差異點

## ⏳ 待觀察

- Mistral Medium 3.5 撐不撐得住 $1.50 / $7.50 定價，還是兩週內就被推著降價對齊 V4 Pro
- OpenAI 上 Bedrock 後，Azure 上的 OpenAI 客戶會不會大量遷移；Microsoft 是否被迫降 Azure OpenAI 價
- Microsoft Agent 365 的 Intune / Defender 公測（6 月）若順利，governance 是否變成「Microsoft 一家獨佔」的版圖
- Anthropic 是否補出對標 Agent 365 的「Claude Governance Plane」——目前 Rate Limits API 只是讀，缺 policy / runtime block
- Vercel AI Gateway 持續吃 OpenRouter 業務，OpenRouter 是否轉去做純 enterprise multi-cloud routing
- DeepSeek V4 Pro / Flash 在 Vercel 計費下的真實使用量（5 月底 changelog 應該會有半官方數據）

[^agent365]: Microsoft Agent 365 是微軟在 2026-05-01 GA 的 agent 治理平台，把 identity（Entra）、device（Intune）、threat（Defender）、policy 與 audit 集中成一個 SKU。涵蓋 Microsoft Foundry、Copilot Studio 自建 agent，也支援第三方廠牌；獨立方案 $15 / user / 月，或包進 $99 的 Microsoft 365 E7 Frontier Suite。設計目標是「不管 agent 從哪家來，治理面歸我」，把 governance 從 internal tool 變成商品化的 control plane。

[^e7]: Microsoft 365 E7 Frontier Suite 是微軟 2026-03 預告、5/1 GA 的最高階 365 訂閱，bundle Microsoft 365 E5（$60）、Microsoft 365 Copilot（$30）、Entra Suite（$12）、Agent 365（$15）四項，總價 $99 / user / 月（比拆買省 $18）。命名上對齊「E3 / E5 / E7」階梯，是微軟把 agent 治理直接寫進旗艦套餐的關鍵動作。

[^bedrock]: Amazon Bedrock 是 AWS 的 fully managed foundation model 服務，把多家供應商的 LLM 統一在 IAM / VPC / CloudTrail 下計費呼叫；2026-04-28 起新增 OpenAI（GPT-5.4、GPT-5.5 limited preview、Codex）。Bedrock Managed Agents 則是 AWS 自家的 hosted agent runtime，把 tool use、state、sandbox、failure handling 包進 API，讓開發者不必自己拼 orchestration。

[^foundry]: Microsoft Foundry（前身 Azure AI Foundry）是微軟把 Azure 上的模型目錄、agent SDK、評測、部署、監控整合成一站式的 AI 開發平台，定位類似 AWS Bedrock 加上 agent IDE；開發者可在裡面選 OpenAI、Mistral、Llama 等模型，組裝 tool use 與 RAG，再透過 Entra / Defender 串到企業治理。是微軟把「自建 agent」的官方入口。

[^copilotstudio]: Copilot Studio 是微軟為非工程使用者提供的 low-code agent / copilot 建構工具，前身為 Power Virtual Agents；可在拖拉介面接 Microsoft 365 資料、外部 API、自訂 prompt 與 workflow，不寫程式就能上架到 Teams / SharePoint。與 Microsoft Foundry 形成「business user vs developer」兩條路徑，兩者最終都會被 Agent 365 統一治理。

[^vibe]: Vibe 是 Mistral 的 coding agent 產品線，包含本地的 Vibe CLI 與雲端 Vibe remote agents 兩種型態，後者於 2026-04-29 隨 Medium 3.5 一起推出；agent 從 Le Chat（Mistral 自家的 ChatGPT-like 對話介面）或 CLI 派發任務到 Mistral cloud sandbox 執行，跑完通知。定位類似 Codex Cloud / Claude Code 的雲端版，主打歐盟資料落地。

## 📚 引用來源

1. [Microsoft Agent 365, now generally available, expands capabilities and integrations | Microsoft Security Blog](https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/) — 2026-05-01
2. [Microsoft 365 E7: $99 Bundle Breakdown | SAMexpert Guide](https://samexpert.com/microsoft-365-e7-licensing-guide/) — 2026-04 查閱
3. [Microsoft 365 E7 & Agent 365 — What's Launching 1 May | Trustmarque](https://trustmarque.com/microsoft-365-e7-agent-365-whats-launching-1-may-and-what-it-means) — 2026-04 查閱
4. [OpenAI models, Codex, and Managed Agents come to AWS | OpenAI](https://openai.com/index/openai-on-aws/) — 2026-04-28
5. [OpenAI jumps out of Microsoft's bed, into Amazon's Bedrock | The Register](https://www.theregister.com/2026/04/28/openai_climbs_into_amazons_bedrock) — 2026-04-28
6. [Amazon Bedrock Managed Agents (OpenAI) | AWS](https://aws.amazon.com/bedrock/managed-agents-openai/) — 2026-04-28
7. [Remote agents in Vibe — Powered by Mistral Medium 3.5 | Mistral AI](https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5) — 2026-04-29
8. [Mistral AI Drops New Open-Source Model — Internet Is Not Impressed | Decrypt](https://decrypt.co/366275/mistral-ai-open-source-model-agents-internet-not-impressed) — 2026-04-29
9. [Mistral Medium 3.5 Discussion | Hacker News](https://news.ycombinator.com/item?id=47949642) — 2026-04-29
10. [DeepSeek V4 on AI Gateway | Vercel Changelog](https://vercel.com/changelog/deepseek-v4-on-ai-gateway) — 2026-04 查閱
11. [Vercel Release Notes — April 2026 | Releasebot](https://releasebot.io/updates/vercel) — 2026-04 查閱
