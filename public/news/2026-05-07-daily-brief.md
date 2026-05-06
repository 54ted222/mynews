---
title: 每日創業情報 — 2026-05-07
date: 2026-05-07
tags: 創業情報, AI 產業, SaaS
summary: Anthropic 5/6 用 SpaceX Colossus 1 把 Claude Code 5h limits 翻倍、Opus API Tier 1 input 暴增 1500%；Blitzy $200M @ $1.4B、SWE-Bench Pro 66.5%；Stripe Agentic Commerce Suite 接上 Google AI Mode + Meta 廣告。
keywords: Anthropic SpaceX Colossus 1 compute deal May 6 2026, Claude Code 5 hour rate limit doubled Pro Max Team Enterprise, Opus API Tier 1 input tokens 1500 percent increase, peak hours limit removed Claude Code, Blitzy 200M Series Northzone $1.4B valuation autonomous software, Blitzy SWE-Bench Pro 66.5 percent record Quesma verified, Vercel metrics CLI Observability Plus beta May 6, Vercel production-only resource scoping native integration, Stripe Agentic Commerce Suite Google UCP Gemini Meta Facebook, agent-ready financial accounts Stripe Link wallet, Claude Code project purge ANTHROPIC_BEDROCK_SERVICE_TIER PR URL resume
---

# 每日創業情報 — 2026-05-07

## 🎯 今日 TL;DR

- **Anthropic 5/6 用 SpaceX Colossus 1[^colossus] 對標 OpenAI 5/5 的 Codex 紅利**：簽下 Memphis 整座 Colossus 1 的 compute、300MW + 220K NVIDIA GPU（H100、H200、GB200）一個月內到位；同步把 Claude Code 5h rate limits 對 Pro / Max / Team / Enterprise 全翻倍、Pro / Max 移除 peak hours 限制、Opus API Tier 1 input tokens / 分鐘 +1500%、output tokens / 分鐘 +900%——昨日 brief 列為「待觀察是否被 OpenAI 逼著加 quota」的問題 24h 內被 Anthropic 直接 over-deliver 回答
- **Blitzy[^blitzy] 5/5 拿 $200M @ $1.4B、SWE-Bench Pro[^swe-bench-pro] 創 66.5% 紀錄**：Northzone 領投，PSG、Battery、Jump Capital、NFX 跟投；平台同步跑 3,000+ agents 平行做企業 legacy codebase migration，已賣進數十家 Global 2000；分數由 Quesma 獨立驗證、超越 GPT-5.4 base model 的 57.7%——「跑數千 agent」這條 enterprise 路線第一次有真實估值錨點
- **Vercel 5/6 把 observability 做進 CLI 給 agent 用**：`vercel metrics` 進 public beta（Observability Plus），人類與 coding agent 共用同一條查詢介面；同週上線 native integration resources 的 production-only scoping——資源被標 production-only 後，credentials 自動轉 sensitive env vars、Dashboard / CLI 都讀不到原值
- **Stripe Agentic Commerce Suite 把支付端通往「agent surface」整段補齊**：與 Google 合作把 UCP[^ucp] 接進 Google AI Mode 與 Gemini app（消費者可在 ChatGPT / Gemini / Microsoft Copilot 內直接買 Shopify 商家商品）；與 Meta 合作在 Facebook 廣告內做 native checkout；推出 **agent-ready financial accounts**——agent 可查餘額、付發票、開卡、轉帳、管理現金流
- **Claude Code 5 月更新把 gateway / Bedrock / multi-repo workflow 補齊**：`/model` picker 改為從 gateway `/v1/models` 動態讀取；新增 `claude project purge`（含 `--dry-run`）一鍵清掉某 repo 的 transcripts / tasks / file history；`ANTHROPIC_BEDROCK_SERVICE_TIER` 可選 default / flex / priority；`/resume` 搜尋框貼 PR URL 直接找到原始 session（GitHub、GitHub Enterprise、GitLab、Bitbucket）

## 🔄 昨日追蹤

### Anthropic 是否被 OpenAI 福利逼著對 Pro / Max 加 Claude Code session quota 🔄 追蹤更新

5/6 brief 把這條列為「5 月底可確認」。**24h 內被 Anthropic 給出 over-delivered 答案**：5/6 同日公告 (1) Claude Code 5h rate limits 對 Pro / Max / Team / Enterprise 全部翻倍、(2) Pro / Max 移除 peak hours 限制、(3) Opus API rate limits 大幅提高（Tier 1 input tokens / 分鐘 +1500%、output / 分鐘 +900%）。底層支援是 SpaceX Colossus 1 整座 datacenter 的 compute swap——300MW、220K GPU（H100 / H200 / GB200）一個月內到位。對獨立開發者：(a) 過去 7 天因 5h rate limit 被擋的 vibe-coding 議題本週直接消失；(b) 跑 LLM-heavy 後端的 indie，可把長 batch 任務（migration、翻譯、reranker）排回 Anthropic API 而不必再切 router。

### Codex 用量 ×10 後是否在 5 月底前出現 rate limit 改 burst window 🔄 追蹤更新

5/6 brief 待觀察列了「社群 7–10 天可看出」。**截至今日無 OpenAI 官方訊號**——但 Anthropic 5/6 反擊把整個產業的 LLM rate limit baseline 一次拉高，等於把 OpenAI 把 Codex daily caps ×10 的紅利 marginal 化。觀察改成「OpenAI 是否在 5/14 前進一步加碼（例如 Codex API rate limits 同步翻倍、或開放 Codex CLI Bedrock support 對企業）」。

### Shopify Agentic Storefronts 對非 ACP 商家差異化 🔄 追蹤更新

5/6 brief 列為「6 月顯現」。**今日新增資料點**：Stripe 5 月把 Agentic Commerce Suite 與 Google AI Mode、Gemini app、Meta 廣告打通；UCP 背書方擴張到 Amazon、American Express、Etsy、Mastercard、Meta、Microsoft、Salesforce、Stripe、Target、Walmart、Visa；Shopify 公布**自 2025/1 起 AI 來源流量 8× YoY、AI 來源訂單 15× YoY**。對非 Shopify 的中型 D2C 是 6 月前必須做的決策題：「不接 ACP / UCP 等於把這條 15× 的 channel 讓出去」。

### ACP 25+ partners 誰會把 GMV 拉到 $10M+ ARR 🔄 追蹤更新

5/6 brief 列為「過去 90 天 ARR 動向」。**今日仍無單家 ARR 公開**，但 Stripe 同週推「agent-ready financial accounts」（agent 可主動付發票、查餘額、開卡）將把 ACP merchant 的 receivables 自動化——下一輪訊號會出現在 6 月底各家 ACP partner 的 Sessions follow-up post。

## 📰 AI 產業動態

| 事件 | 影響 | 機會/威脅 | 來源 |
| ---- | ---- | --------- | ---- |
| **Anthropic 5/6 簽下 SpaceX Colossus 1**：取得 Memphis 整座 datacenter compute；300MW + 220K NVIDIA GPU（H100 / H200 / GB200）月內到位；同步 Claude Code 5h limits 翻倍（Pro / Max / Team / Enterprise）、Pro / Max 移除 peak hours、Opus API Tier 1 input +1500% / output +900% | LLM 軍備從「誰的模型快」轉到「誰的 capacity 厚」；Anthropic 直接把 5/5 OpenAI Codex 紅利 marginal 化 | 機會：把昨日因 rate limit 改去 Codex 的 batch 任務搬回 Claude；做 enterprise 多 vendor router 的 indie 可把 Anthropic 視為「短期最寬」；威脅：以「Claude rate limit 太緊所以我家 wrapper 更穩」當賣點的中介 SaaS 失去差異化 | [CNBC](https://www.cnbc.com/2026/05/06/anthropic-spacex-data-center-capacity.html) / [Bloomberg](https://www.bloomberg.com/news/articles/2026-05-06/anthropic-inks-computing-deal-with-spacex-to-meet-ai-demand) / [Axios](https://www.axios.com/2026/05/06/anthropic-spacex-elon-musk-compute) / [Coindesk](https://www.coindesk.com/tech/2026/05/06/anthropic-signs-elon-musk-s-spacex-for-colossus-1-compute-ahead-of-june-ipo) / [XDA](https://www.xda-developers.com/anthropic-is-doubling-claude-codes-hourly-rate-limits-removing-peak-hours-andworking-with-spacex/) / [AIM](https://analyticsindiamag.com/ai-news/anthropic-secures-access-to-220000-nvidia-gpus-through-spacex-deal) |
| **Blitzy 5/5 拿 $200M @ $1.4B、SWE-Bench Pro 66.5% 創紀錄**：Northzone 領投，PSG、Battery、Jump Capital、NFX、Link、Flybridge 跟投；平台跑 3,000+ agents 平行做 enterprise legacy codebase migration；分數獲 Quesma 獨立驗證；客戶橫跨數十家 Global 2000；半年 headcount 翻倍 | 「autonomous software development」從 Cognition Devin demo 變成有真實 ARR 的 enterprise 類別；harness[^harness]（agent orchestration）開始與 base model 一樣值錢 | 機會：替中型企業（500–5000 人）做「Blitzy / Devin / Augment 對比 PoC + ROI 評估」的 fixed-price audit；Blitzy 主攻 Global 2000，indie 可瞄準 mid-market；威脅：賣「我家 SaaS 幫你寫 50% 程式碼」的純 wrapper boilerplate，被 enterprise 採購視為過渡品 | [Crunchbase](https://news.crunchbase.com/ai/blitzy-funding-valuation-autonomous-software-development-vibe-coding-startups/) / [SiliconANGLE](https://siliconangle.com/2026/05/05/blitzy-raises-200m-1-4b-valuation-deploy-thousands-coding-agents-parallel/) / [BusinessWire](https://www.businesswire.com/news/home/20260505342338/en/Blitzy-Raises-$200-Million-at-$1.4-Billion-Valuation-to-Advance-Autonomous-Software-Development-for-the-Enterprise) / [Blitzy Blog](https://blitzy.com/blog/blitzy-scores-a-record-66-5-on-swe-bench-pro) / [Quesma](https://quesma.com/blog/verifying-blitzy-swe-bench-pro/) |
| **Vercel 5/6 把 observability 給 agent 用**：`vercel metrics` 進 public beta（Observability Plus）；可從 CLI query teams / projects 的 metrics、列 schema、看 dimensions；`--format json` 給 agent 自動化；同週上 native integration resources 的 **production-only scoping**——資源標 production-only 後，credentials 變 sensitive env vars，Dashboard / CLI 讀不到原值 | Vercel 把「coding agent 直接 query observability」當一級接口——上週 Sandbox 連 Postgres、本週 metrics 給 agent，agent-friendly 工程在 Vercel 比同業早一拍 | 機會：做 `vercel metrics` 之上的 alerting / cost anomaly bot，瞄準「跑 agent farm 但沒專責 SRE」的 5–50 人 SaaS；威脅：賣 Vercel 帳號 cost dashboard wrapper 的個人 SaaS 被官方原生指令吃掉 | [Vercel Changelog](https://vercel.com/changelog) / [vercel metrics docs](https://vercel.com/docs/cli/metrics) |
| **Stripe Agentic Commerce Suite 接 Google AI Mode + Gemini + Meta 廣告 + agent-ready financial accounts**：Google AI Mode / Gemini app 內直接購 UCP 商家商品；Facebook 廣告內 native checkout；agent 可代查餘額、付發票、開卡、轉帳、管現金流 | agent commerce 從「discovery + checkout」往上吃到「會計 / 收付款 / 現金流」；獨立開發者第一次面對「我家後台是否要把財務功能直接暴露給 agent」 | 機會：替 SMB 做「agent 對 Stripe Treasury 的 read-only audit / approval workflow」productized service；威脅：純做「Stripe webhook 對 SaaS 帳本 reconciliation」的中介工具被原生 agent feature 收走 | [Stripe Newsroom](https://stripe.com/newsroom/news/agentic-commerce-suite) / [Stripe Blog](https://stripe.com/blog/agentic-commerce-suite) / [Payments Dive](https://www.paymentsdive.com/news/stripe-google-partner-on-agentic-commerce/818915/) / [commercetools](https://commercetools.com/press-releases/commercetools-supports-stripes-new-agentic-commerce-suite-giving-enterprise-customers-a-faster-path-to-sell-through-ai-agents-with-transactional-security) |
| **Claude Code 5 月底 update**：`/model` picker 改用 gateway `/v1/models` 動態讀；新指令 `claude project purge [path]`（支援 `--dry-run`、`-i`）；`ANTHROPIC_BEDROCK_SERVICE_TIER` 環境變數選 default / flex / priority；`/resume` 框貼 PR URL 直接找到當時 session（GitHub、GitHub Enterprise、GitLab、Bitbucket）；`cleanupPeriodDays` 擴展到 `~/.claude/tasks`、`shell-snapshots`、`backups` | Claude Code 把「跨 repo / 跨 PR / 多後端」的工作流缺口補齊；對 enterprise SSO + Bedrock 採購流程是直接緩解 | 機會：做「Claude project purge」之上的 cross-repo session migration tool（avocet for repo cleanup）；以 PR URL → session 為錨做 PR 內 reviewer 工作流自動化；威脅：賣 Claude Code 周邊「session 管理」插件的小工具差異化收窄 | [Releasebot](https://releasebot.io/updates/anthropic/claude-code) / [Anthropic Releases](https://github.com/anthropics/claude-code/releases) |

## 🛠 新興 AI 工具

| 工具 | 類別 | 用途 | 定價 | 差異點 | 採用建議 |
| ---- | ---- | ---- | ---- | ------ | -------- |
| Anthropic Claude（5/6 limits 翻倍版） | frontier LLM + IDE agent | Opus 4.7 API Tier 1 input +1500% / output +900%；Claude Code 5h rate limits 對 Pro / Max / Team / Enterprise 全翻倍；Pro / Max 移除 peak hours 限制 | 訂閱費不變，產量上限大幅放寬 | 大型 batch 任務在 Claude 上的 cost / token 第一次比 Codex burst 更穩定 | 把 5/5 後切去 Codex 的 long-batch 任務拉一條回 Claude API 對比 24h；做 LLM router 的 indie 把 Anthropic priority 拉高 |
| Blitzy 平台（$1.4B 估值版） | autonomous software development | 3,000+ agent 平行做 enterprise legacy codebase migration、自動測試、quality validation；SWE-Bench Pro 66.5% 為公開最高 | enterprise 採購、未公開定價（typically $100K+ ARR） | harness 不只是 wrapper：dynamic knowledge graph + multi-model orchestration；獨立驗證分數 | 5–50 人 SaaS 不直接用，但要把 demo 抓回來看 enterprise 客戶如何被定義；做 client-work 的 agency 評估「Blitzy + 我家專業」雙軌 |
| Vercel `vercel metrics` CLI（beta） | agent 對 observability 介面 | CLI 內 query Observability Plus metrics；schema / aggregations / dimensions 可列；`--format json` 給 agent | 含 Observability Plus 計畫 | 第一個把「agent 對 observability」當一級概念的 PaaS CLI | 跑 Vercel agent farm 的團隊把 `vercel metrics --format json` 接進 cost / latency alert；賣 PaaS cost dashboard 的 indie 評估是否要 pivot |
| Stripe Agent-Ready Financial Accounts | agent 對財務系統 | agent 可查餘額、付發票、儲值、開卡、轉帳、管現金流；綁 Stripe Link wallet | 隨 Stripe 標準計費 + Treasury 抽成 | 第一個「agent 對企業財務」原生介面；不必再透過第三方 RPA | 跑 ops automation 的 indie SaaS 把這條接進 monthly recon；做帳務軟體的 startup 重新評估自家 moat |
| Cloudflare `@cloudflare/dynamic-workflows` | edge workflow runtime | 在 Dynamic Workers 內用 durable Workflows，可 sleep / resume / retry，不必先註冊每條 workflow | 隨 Workers 計費 | runtime-loaded 程式碼也能 durable，配合 Hyperdrive[^hyperdrive] VPC 連私有 DB | 做「跑 1000 條 long-running agent task」的團隊立刻試；以前用 Inngest / Trigger.dev 為主的可比 latency |

## 💡 SaaS 點子

### 點子 1：Claude Code Project Purge Migration Bot 🆕

- 痛點來源：5 月 Claude Code 更新後 `claude project purge [path]` 可一鍵清 transcripts / tasks / file history，但很多 indie / agency 跑了 30–100 個 client repo，缺一條「先匯出 session 摘要再 purge」的 pre-flight；同時 `/resume` 貼 PR URL 找 session 提供了 cross-repo 的搜索 anchor
- 目標客群：5–50 人 dev agency、freelancer、做 client-work 的 indie；用 Claude Code 跑多 repo 的小團隊
- 技術複雜度：2/5
- 預估 MRR：$1K–$6K
- 競品弱點：Anthropic 自家命令只清不導；現存 IDE plugin 多停在單 repo 視角；GitHub Copilot 不跨 IDE 工具
- 切入建議：CLI 工具（npm 一行裝）`ccpurge --dry-run --export-summary`，先把每個 session 摘要 + PR link export 到 markdown，再呼叫 Anthropic 原生 purge；定價 $9 / 月或一次性 $49 enterprise lifetime

### 點子 2：Anthropic Limit Reclaim Audit（5/6 後 24h 內最熱） 🆕

- 痛點來源：Anthropic 5/6 把 Claude Code 5h limits 翻倍 + Opus API Tier 1 input +1500%，過去一個月因 rate limit 被切到 Codex / Cursor 的 LLM 流量現在可以搬回；但多數 indie 沒有「自家 prompt 在 Claude vs Codex 的 cost / pass rate 對比表」可立刻決策
- 目標客群：月帳 $2K–$30K LLM 的 SaaS；過去 30 天因 Claude rate limit 切去 Codex 的團隊
- 技術複雜度：2/5
- 預估 MRR：$2K–$10K
- 競品弱點：OpenRouter / Vercel AI Gateway 偏路由不偏單帳號 reclaim；前一個 5/6 brief 列的「Codex Migration Audit」是反方向、本題是 reverse migration
- 切入建議：fixed-price audit（$1,500–$3,500）跑 50 條既有 prompt × Claude API（5/6 後 limits）vs 5/5 後 Codex，輸出 cost / pass rate / latency 對比；前 30 家做完轉訂閱

### 點子 3：Vercel Metrics → Slack Anomaly Bot 🆕

- 痛點來源：5/6 `vercel metrics` CLI public beta 把 observability 變成可程式化介面，但「自動偵測 token / cost / error 異常並發 Slack」沒有原生；做 agent farm 的 5–50 人 SaaS 不會自架 Datadog
- 目標客群：用 Vercel + 跑 agent / LLM-heavy backend 的 indie SaaS、agency
- 技術複雜度：3/5
- 預估 MRR：$1K–$6K
- 競品弱點：Datadog / Honeycomb 對 Vercel 偏粗；Vercel 自家 dashboard 不發 webhook；Inngest / Trigger.dev 偏 workflow 不偏 metric
- 切入建議：免費 GitHub Action 一鍵裝（用 `vercel metrics --format json`），三條預設規則（cost spike、error rate、latency p95）；付費版 $19 / project / 月加自訂規則 + on-call rotation

## 🧰 工具堆疊更新

- **如果你過去一個月因 Claude rate limit 切到 Codex / Cursor**：5/6 後 Anthropic 已 over-deliver、Pro / Max 翻倍且 Opus API Tier 1 +1500%——把 long-batch 任務（migration、文檔翻譯、code review）這週切回 Claude 對比 24h 看 cost / pass rate
- **如果你做 enterprise client-work**：Blitzy 把 SWE-Bench Pro baseline 拉到 66.5%，純「我家 wrapper 寫 code」的賣法擋不住採購比較；要嘛接 Blitzy 當 implementation partner、要嘛瞄準 mid-market（500–5000 人）走「人 + agent 混合」差異化
- **如果你跑 Vercel agent farm**：把 `vercel metrics --format json` 接進 daily cron，先做 cost、error rate、latency p95 三條 baseline；同時把 native integration resources 該設 production-only 的全 audit 一次（credentials 不再被 Dashboard / CLI 讀到）
- **如果你做 D2C / 訂閱媒體**：Stripe Agentic Commerce Suite + Google AI Mode + Meta Facebook 廣告 + agent-ready financial accounts，Shopify AI 流量 8× / AI 訂單 15×——5 月底前要決定接 ACP / UCP 還是把流量留給對手
- **如果你跑 Bedrock 採購流程**：Claude Code 新增 `ANTHROPIC_BEDROCK_SERVICE_TIER`（default / flex / priority）；走 priority 對 enterprise SLA 是直接解；Bedrock 上 Opus 4.7 已 GA、配合 5/6 limits 翻倍幾乎打通

## ⚡ 今日行動建議

- [ ] 把過去 30 天因 Claude 5h rate limit 被切去 Codex 的 5 條 batch task，今天搬回 Claude API 對比 24h cost / pass rate（30 分鐘設定 + 24h 跑）
- [ ] `npm i -g vercel@latest && vercel metrics --schema`，列出自家 project 可查的 metric，挑 3 條接 daily cron Slack（45 分鐘）
- [ ] 讀 [Blitzy SWE-Bench Pro 66.5% 文章](https://blitzy.com/blog/blitzy-scores-a-record-66-5-on-swe-bench-pro) 與 [Quesma 獨立驗證](https://quesma.com/blog/verifying-blitzy-swe-bench-pro/)，列出自家 enterprise 客戶 demo 必須能回答的 3 個比較問題（30 分鐘）
- [ ] 對自家 Vercel 既有 native integration resources 做 production-only scoping audit；至少把生產環境 DB / payment provider credentials 鎖到 sensitive（30 分鐘）
- [ ] 讀 [Stripe Agentic Commerce Suite 公告](https://stripe.com/blog/agentic-commerce-suite)，決定本週是否啟動 ACP / UCP 接入，列出第一波 5 個 SKU / API endpoint（45 分鐘）

## ⏳ 待觀察

- OpenAI 是否在 5/14 前回擊 Anthropic 5/6 反擊（例如 Codex API rate limits 翻倍、Codex CLI Bedrock support、或 GPT-5.5 mini 提前釋出）
- Anthropic SpaceX Colossus 1 兌現時程：「month 內 220K GPU」是否真的在 6/6 前可用、Claude.ai chat latency 是否同步下降
- Blitzy 對手反應：Cognition Devin、Cursor enterprise tier、Anthropic 自家 Claude Code enterprise 是否在 5/14 前發布對標 SWE-Bench Pro 分數
- Stripe Agent-Ready Financial Accounts 在小型 SMB 的真實採用率（會計 / 帳務工具大廠 Intuit / Xero / FreshBooks 的反應）
- Cloudflare Dynamic Workflows / Hyperdrive VPC 對「跑 1000 條 long-running agent task」團隊的真實 latency 與成本（社群 7 天可看出第一批 benchmark）
- Anthropic 與 SpaceX 「太空 GW 級 compute」備忘錄是否在 6 月有具體 timeline；對 LLM 軍備競賽的「物理基礎建設」敘事影響

[^colossus]: Colossus 1 是 Elon Musk 旗下 xAI 在 Tennessee 州 Memphis 蓋的超大規模 AI datacenter 名稱，曾號稱是世界最大 AI training cluster。本次 Anthropic 是直接透過 SpaceX 簽約取用整座 Colossus 1 的 compute。注意與 SpaceX 既有設施名稱重複時的辨識。

[^blitzy]: Blitzy 是一家專做「autonomous software development」的 enterprise startup，主打用 thousands of agents 平行處理 Global 2000 客戶的 legacy codebase migration、自動化測試與品質驗證；定位上偏 agent harness（多 agent orchestration 包覆層），而非單純 LLM wrapper。

[^ucp]: Universal Commerce Protocol，由 Google 與 Shopify 共推的開放規格，把商品 catalog、屬性與庫存以結構化方式提供給 AI agent，用於前端商品發現與比較；常與 OpenAI / Stripe 主導的後端結帳協定 ACP 搭配，組成 agent commerce 的前後端雙協定。

[^swe-bench-pro]: SWE-Bench Pro 是 Princeton SWE-Bench 系列下的進階變體，題目來自更貼近真實 enterprise 的多檔修改與長依賴情境，比 SWE-Bench Verified 更難；常被用來評估 agent harness 而非單一模型的端到端解題能力。

[^harness]: Agent harness 指包在 base LLM 之上的 orchestration 層——負責多 agent 排程、工具調用、knowledge graph、retry / 評分與品質驗證；產業近期的差異化從「誰的 base model 強」轉向「誰的 harness 把多 agent 編排得穩」。

[^hyperdrive]: Hyperdrive 是 Cloudflare Workers 平台的資料庫連線快取與加速層，會把 Workers 對遠端 Postgres / MySQL 的連線 pool 化、把熱查詢結果快取到 edge，降低 cold start 與跨區延遲；近期擴充支援 VPC 私有 DB 連線。

## 📚 引用來源

1. [Anthropic, SpaceX announce compute deal that includes space development | CNBC](https://www.cnbc.com/2026/05/06/anthropic-spacex-data-center-capacity.html) — 2026-05-06
2. [Anthropic, SpaceX Sign Deal to Boost AI Computing Power for Claude Software | Bloomberg](https://www.bloomberg.com/news/articles/2026-05-06/anthropic-inks-computing-deal-with-spacex-to-meet-ai-demand) — 2026-05-06
3. [Anthropic will get compute capacity from Elon Musk's SpaceX | Axios](https://www.axios.com/2026/05/06/anthropic-spacex-elon-musk-compute) — 2026-05-06
4. [Anthropic signs Elon Musk's SpaceX for Colossus 1 compute ahead of June IPO | CoinDesk](https://www.coindesk.com/tech/2026/05/06/anthropic-signs-elon-musk-s-spacex-for-colossus-1-compute-ahead-of-june-ipo) — 2026-05-06
5. [Anthropic is doubling Claude Code's hourly rate limits, removing peak hours, and working with SpaceX | XDA Developers](https://www.xda-developers.com/anthropic-is-doubling-claude-codes-hourly-rate-limits-removing-peak-hours-andworking-with-spacex/) — 2026-05-06
6. [Anthropic Secures Access to 220,000 NVIDIA GPUs Through SpaceX Deal | Analytics India](https://analyticsindiamag.com/ai-news/anthropic-secures-access-to-220000-nvidia-gpus-through-spacex-deal) — 2026-05-06
7. [Blitzy Raises $200M At $1.4B Valuation For Autonomous Software Development | Crunchbase](https://news.crunchbase.com/ai/blitzy-funding-valuation-autonomous-software-development-vibe-coding-startups/) — 2026-05-05
8. [Blitzy raises $200M at $1.4B valuation to deploy thousands of coding agents in parallel | SiliconANGLE](https://siliconangle.com/2026/05/05/blitzy-raises-200m-1-4b-valuation-deploy-thousands-coding-agents-parallel/) — 2026-05-05
9. [Blitzy Raises $200 Million at $1.4 Billion Valuation | BusinessWire](https://www.businesswire.com/news/home/20260505342338/en/Blitzy-Raises-$200-Million-at-$1.4-Billion-Valuation-to-Advance-Autonomous-Software-Development-for-the-Enterprise) — 2026-05-05
10. [Blitzy Record 66.5% on SWE-Bench Pro | Blitzy Blog](https://blitzy.com/blog/blitzy-scores-a-record-66-5-on-swe-bench-pro) — 2026-05 查閱
11. [Compare harnesses not models: Blitzy vs GPT-5.4 on SWE-Bench Pro | Quesma](https://quesma.com/blog/verifying-blitzy-swe-bench-pro/) — 2026-05 查閱
12. [Vercel Changelog](https://vercel.com/changelog) — 2026-05-06 查閱
13. [vercel metrics | Vercel Docs](https://vercel.com/docs/cli/metrics) — 2026-05 查閱
14. [Stripe launches the Agentic Commerce Suite | Stripe Newsroom](https://stripe.com/newsroom/news/agentic-commerce-suite) — 2026-04-29
15. [Introducing the Agentic Commerce Suite | Stripe Blog](https://stripe.com/blog/agentic-commerce-suite) — 2026-04-29
16. [Stripe, Google partner on agentic commerce | Payments Dive](https://www.paymentsdive.com/news/stripe-google-partner-on-agentic-commerce/818915/) — 2026-04-29
17. [commercetools Supports Stripe's New Agentic Commerce Suite | commercetools](https://commercetools.com/press-releases/commercetools-supports-stripes-new-agentic-commerce-suite-giving-enterprise-customers-a-faster-path-to-sell-through-ai-agents-with-transactional-security) — 2026-04-29
18. [Claude Code Updates by Anthropic — May 2026 | Releasebot](https://releasebot.io/updates/anthropic/claude-code) — 2026-05 查閱
19. [Built-in memory for Claude Managed Agents | Claude](https://claude.com/blog/claude-managed-agents-memory) — 2026-04-23
20. [Cloudflare Release Notes — May 2026 | Releasebot](https://releasebot.io/updates/cloudflare) — 2026-05 查閱
