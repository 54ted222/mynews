---
title: 每日創業情報 — 2026-06-05
date: 2026-06-05
tags: 創業情報, AI 產業, SaaS
summary: Microsoft Build 6/2–6/4 連發 7 個 MAI 自家模型 + GitHub Copilot desktop app + Windows agent OS；OpenAI Codex on Bedrock 6/1 GA、5M 週活；Claude Opus 4.8 + Dynamic Workflows 解鎖 1,000 subagent codebase 級遷移。
keywords: Microsoft Build 2026 June 2 MAI seven models Mustafa Suleyman, MAI-Thinking-1 reasoning Claude Sonnet 4.6 blind test, MAI-Code-1-Flash 5B parameters VS Code GitHub Copilot, GitHub Copilot desktop app canvases worktrees sandboxes, Microsoft Scout Frontier OpenClaw Teams Outlook, Work IQ API Web IQ MCP-native search, OpenAI GPT-5.5 Codex Amazon Bedrock GA June 1 2026 pricing, Codex 5 million weekly users 25 percent growth preview, Claude Opus 4.8 dynamic workflows ultracode 1000 subagents, Opus 4.8 Fast Mode 3x cheaper coding migration, Vercel Blob signed URLs 2.4.0 OIDC time-bound, Vercel elastic build memory OOM auto adjust June 1
---

# 每日創業情報 — 2026-06-05

## 🎯 今日 TL;DR

- **Microsoft Build 2026（6/2–6/4 SF）的「agent-first」三連發**：(1) Mustafa Suleyman 帶出 **7 個自家 MAI 模型**——MAI-Thinking-1[^mai-thinking]（reasoning，blind test 與 Claude Sonnet 4.6 打平、coding benchmark 對標 Opus 4.6）、MAI-Code-1-Flash（5B params、已在 VS Code 與 GitHub Copilot rollout）、MAI-Image-2.5、MAI-Transcribe-1.5（43 語言、5× 競品速度）、MAI-Voice-2（15 語言）等；(2) Windows 被官方重新定位成 **AI Agent OS**——Windows Development Skills、Intelligent Terminal、Microsoft Execution Containers、Windows 365 for Agents、Aion 1.0 Plan；(3) **GitHub Copilot desktop app**（technical preview，Windows/Mac/Linux）把每個 session 跑進獨立 git worktree[^worktree]、加 canvases + 本機 / 雲端 sandbox；GitHub Copilot SDK 同時對 Node/Python/Go/.NET/Rust/Java GA
- **OpenAI GPT-5.5 + GPT-5.4 + Codex 6/1 在 Amazon Bedrock 全面 GA**：限定預覽僅一個月即進入 production；Bedrock 定價對齊 OpenAI direct（GPT-5.5：$5 input / $30 output per M tokens）、無 seat license、可吃 AWS spending commit；Codex 週活 5M（一個月內 +25%）；走 Codex App / CLI / VS Code / JetBrains / Xcode，agent 流量可記在客戶 AWS 帳上——對 enterprise PO 流程是直接解
- **Anthropic 5/28 釋 Claude Opus 4.8 + Dynamic Workflows[^dynamic-workflows] + Ultracode[^ultracode]**：API model id `claude-opus-4-8`，同價於 4.7、同步上 Bedrock / Vertex / Foundry；Fast Mode 跑到 2.5× 速度且**比上一代便宜 3 倍**；Dynamic Workflows 在 Claude Code 內 plan + 跑數百 subagent（單 workflow 上限 1,000），可從 kickoff 到 merge 跨數十萬行做 codebase 級遷移、以既有 test suite 為驗收線
- **Stripe Sessions 2026（4/29–4/30，已舉行、上次 brief 待觀察）的回填**：288 個產品；**MPP[^mpp]（Machine Payments Protocol）** 與 Tempo 共推、3/18 mainnet、Sessions 加 streaming payments；**SPT[^spt]（Shared Payment Tokens）** 讓 agent 走 Payment Intents API 收 card / Klarna / Affirm / stablecoin；UCP 把購物進 Google AI Mode / Gemini app；Meta 廣告 native checkout；Link agent wallet 全開；Revenue suite 加 dimensional pricing 與 streaming payments
- **Vercel 6/1–6/2 三條更新**：(1) **Blob signed URLs**（@vercel/blob 2.4.0）走 OIDC、單一 operation / pathname、最多 7 天 expiry，browser 直傳 multipart 不必過 server；(2) elastic build machines 自動偵測 memory 並調整避免 OOM；(3) monorepo Git settings 一次套用所有 sub-project；同期 Qwen 3.7 Plus 上 AI Gateway，6/4 前 paid user 免費

## 🔄 昨日追蹤

### Microsoft Copilot for M365 對 Anthropic add-ins 的反應（5/8 brief 待觀察） 🔄 追蹤更新

5/8 brief 列為「強制要走 Microsoft Graph 還是放任」。**Build 2026 答案是「自家平台補齊、不正面擋」**——Microsoft 同週推 MAI-Code-1-Flash 進 VS Code 與 GitHub Copilot、Microsoft Scout 在 Frontier 客戶與 Teams/Outlook/OneDrive/SharePoint 深整合、Work IQ APIs 6/16 GA；Anthropic 的 Excel/PowerPoint/Word/Outlook add-ins 仍 GA、未被擋；雙方明顯走「Microsoft 把 platform-grade 整合用 MAI + Scout 拉回來、Anthropic 留 vertical agent 範本當 add-in」分工。對獨立開發者：若做 Excel-heavy vertical 仍可押 Anthropic add-in、若做跨 app 的工作流自動化（Teams + Outlook + Office）要追蹤 Work IQ APIs 6/16 開放後文件。

### 5/14 Stripe Sessions 是否同台公布 ACP / MPP 進展（5/8 brief 待觀察） 🔄 追蹤更新

5/8 brief 推測 5/14 Stripe Sessions。**實際日期是 4/29–4/30 已舉行**——Stripe 一次發 288 個產品、MPP 與 Tempo 共推（3/18 已 mainnet、Sessions 加 streaming payments）、SPT 把 stablecoin / card / Klarna / Affirm 統一進 Payment Intents API、UCP 接 Google AI Mode 與 Gemini app、Meta 廣告 native checkout、Revenue suite 加 dimensional pricing 與 streaming payments。對 indie 影響：(1) 想做 agent 收費的 SaaS 本月可直接套 MPP（HTTP-native，比自己刻 metered billing 簡單）；(2) 想用 stablecoin 收 agent 微付款者可走 SPT，不必接鏈上 SDK。

### OpenAI The Deployment Company 5/14 前公開首批 logo（5/8 brief 待觀察） 🔄 追蹤更新

**24h 內仍無單家 logo 公開**——OpenAI 與 Anthropic 雙 JV 公告後 4 週，TPG / Brookfield / Bain 圈內未走漏。下一個觀察點：YC P26 Demo Day 6/16 前後是否有 Frontier 客戶站台。

### Anthropic SpaceX Colossus 1（220K GPU「月內到位」、原 6/6 前可驗，5/8 brief 待觀察） 🔄 追蹤更新

**截至 6/5 無 Anthropic 官方時程更新**——但 5/28 釋出 Opus 4.8 + Dynamic Workflows 1,000 subagent 上限暗示後端算力已寬鬆；社群仍無 Claude.ai chat 公開 latency 比較。明日是 5/8 brief 的「6/6 前可驗」分水嶺。

### RadixArk 對亞洲 region inference availability 6 月公布（5/8 brief 待觀察） 🔄 追蹤更新

**24h 內無新訊號**。RadixArk 仍以 US-based 為主；亞洲 indie 想跑 SGLang frontier inference 仍需自架或走 Together / Fireworks。

## 📰 AI 產業動態

| 事件 | 影響 | 機會/威脅 | 來源 |
| ---- | ---- | --------- | ---- |
| **Microsoft Build 2026 6/2–6/4：7 個 MAI 自家模型 + Windows 變 Agent OS**：MAI-Thinking-1（reasoning，blind test 與 Sonnet 4.6 打平、coding benchmark 對標 Opus 4.6）、MAI-Code-1-Flash（5B、進 VS Code / GitHub Copilot）、MAI-Image-2.5（image-edit 榜第二、贏 Nano Banana Pro）、MAI-Transcribe-1.5（43 語言、5× 競品速度）、MAI-Voice-2（15 語言）+ 兩款未公開；Windows 端推 Windows Development Skills、Intelligent Terminal、Microsoft Execution Containers、Windows 365 for Agents、Aion 1.0 Plan | Microsoft 想脫 OpenAI 依賴、自有模型直接內嵌 VS Code 與 Copilot；Windows agent runtime 化讓 macOS / Linux only 的 agent 工具失去單機差異 | 機會：賣「MAI-Code-1-Flash vs Codex CLI vs Claude Code 對比 audit」（client-work）、做 Windows AI Agent OS 內的 vertical agent skill；威脅：靠「我家 IDE plugin 把 GPT 接進 VS Code」當差異化的 indie 被 MAI-Code-1-Flash 預載蓋掉 | [Microsoft AI Blog](https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/) / [GeekWire](https://www.geekwire.com/2026/microsoft-unveils-seven-homegrown-ai-models-in-bid-for-long-term-self-sufficiency/) / [CNBC](https://www.cnbc.com/2026/06/02/microsoft-unveils-new-ai-models-lessen-reliance-on-openai-lower-costs.html) / [VS Magazine](https://visualstudiomagazine.com/articles/2026/06/02/at-build-2026-microsoft-sets-up-windows-as-an-os-for-ai-agents.aspx) / [Microsoft Blog](https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work/) |
| **GitHub Copilot desktop app（technical preview，Build 2026）**：每個 session 跑獨立 git worktree、加 canvases bidirectional surface、本機 + 雲端 sandbox；My Work dashboard 跨 repo 集中 active sessions、issues、PRs、background automation；技術預覽支援 Windows 11、Windows 11 on Arm、Mac、Linux；Copilot SDK Node / Python / Go / .NET / Rust / Java GA | 「IDE 內的 chat sidebar」演化到「桌面端的 agent OS client」——對 Cursor / Claude Code / Codex desktop 等同類產品形成直接競爭，但 sandbox 與 worktree 路線 Anthropic 5 月 Claude Code 也走同一條 | 機會：做 Copilot SDK 的 vertical skill（測試生成、PR 風險評估）、做「Copilot canvases 模板市集」；威脅：賣「IDE agent UI 加值版」的小 SaaS 被原生 desktop 體驗收走 | [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) / [Thurrott](https://www.thurrott.com/dev/336962/build-2026-microsoft-announces-github-copilot-app) / [Hands On VS Magazine](https://visualstudiomagazine.com/articles/2026/06/03/hands-on-with-new-github-copilot-app-turning-a-blazor-issue-into-a-pull-request.aspx) / [Windows Report](https://windowsreport.com/microsoft-launches-github-copilot-desktop-app-for-agent-native-development/) |
| **OpenAI GPT-5.5 / GPT-5.4 / Codex 6/1 在 Bedrock 全面 GA**：限定預覽僅 1 個月即進 production；定價對齊 OpenAI direct ($5 input / $30 output per M tokens for 5.5)、無 seat license；GPT-5.5 在 us-east-2、GPT-5.4 在 us-east-2 與 us-west-2；Codex 週活 5M（一月 +25%）；走 Codex App / CLI / VS Code / JetBrains / Xcode；agent 流量自動套 KMS encryption + CloudTrail audit | enterprise 採購流程一夜變簡單——「用 OpenAI 但全部走自家 AWS 帳單與資料治理」第一次全 GA；Codex 與 Claude Code 在 AWS 上正面 PK | 機會：賣「Codex on Bedrock 採購遷移 + IAM 設計」fixed-price audit（瞄 mid-market AWS-heavy 客戶）；做 Codex CLI / VS Code workflow plugin、避開 OpenAI 自家方案的 niche；威脅：賣「我家 SaaS 是 OpenAI proxy」的中介產品被 Bedrock 收編 | [AWS Blog](https://aws.amazon.com/blogs/aws/get-started-with-openai-gpt-5-5-gpt-5-4-models-and-codex-on-amazon-bedrock/) / [About Amazon](https://www.aboutamazon.com/news/aws/bedrock-openai-models) / [TechBriefly](https://techbriefly.com/2026/06/02/openai-gpt-5-5-codex-available-amazon-bedrock/) / [Memeburn](https://memeburn.com/openai-models-and-codex-are-now-generally-available-on-aws/) / [AWS ML Blog](https://aws.amazon.com/blogs/machine-learning/openai-models-and-codex-on-amazon-bedrock-are-now-generally-available/) |
| **Anthropic 5/28 Claude Opus 4.8 + Dynamic Workflows + Ultracode**：API id `claude-opus-4-8`，同步 Bedrock / Vertex / Foundry、同價 4.7；Fast Mode 2.5× 速度且**比上代便宜 3 倍**；Dynamic Workflows 在 Claude Code 內 plan + 跑數百 subagent（單 workflow 上限 1,000），可跨數十萬行做 codebase 級遷移、以既有 test suite 為驗收線；Ultracode = xhigh effort + auto orchestration | enterprise 對「跨數十萬行 codebase migration」這條任務有原生答案；Blitzy 5/5 的 3,000 agent 並行 GTM 立刻被 Anthropic 1,000 subagent + claude-opus-4-8 反擊 | 機會：替 mid-market 跑「Claude Dynamic Workflows vs Blitzy vs Cognition Devin」對比 audit；做 Ultracode workflow 模板市集（migration / test gen / refactor）；威脅：用 Opus 4.7 的單 agent flow 寫 plugin 的 indie 要重評估 moat | [Anthropic — Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8) / [TechCrunch](https://techcrunch.com/2026/05/28/anthropic-releases-opus-4-8-with-new-dynamic-workflow-tool/) / [MarkTechPost](https://www.marktechpost.com/2026/05/28/anthropic-ships-claude-opus-4-8-alongside-dynamic-workflows-and-cheaper-fast-mode-with-workflows-capped-at-1000-subagents/) / [The Zvi](https://thezvi.substack.com/p/claude-opus-48-capabilities-and-reactions) / [allthings.how](https://allthings.how/claude-opus-4-8-dynamic-workflows-in-claude-code-explained/) |
| **Vercel 6/1–6/2 release pack**：**Blob signed URLs**（@vercel/blob 2.4.0、OIDC、單一 operation / pathname、≤7 天 expiry、browser 直傳 multipart 大檔不過 server）；**elastic build machines** 自動偵測 memory 並調整避免 OOM；monorepo 跨 sub-project Git settings 一次套；Qwen 3.7 Plus 上 AI Gateway（paid 用戶 6/4 前免費） | Vercel 把「server-less + agent-friendly」做到上傳路徑、build 韌性、與多模型 router 三個地方；單人創業者本月內可去掉自家 S3 presign 與 OOM 工程 | 機會：做 Blob signed URL workflow + audit log 的 add-on、做 Qwen 3.7 Plus 對 Opus 4.8 / GPT-5.5 的 niche 對比；威脅：賣「我家 SaaS presign + multipart upload」中介函式庫的 boilerplate 賣家流失差異化 | [Vercel Changelog](https://vercel.com/changelog) / [Signed URLs](https://vercel.com/changelog/signed-urls-are-now-available-for-vercel-blob) / [Vercel Blob Docs](https://vercel.com/docs/vercel-blob) |

## 🛠 新興 AI 工具

| 工具 | 類別 | 用途 | 定價 | 差異點 | 採用建議 |
| ---- | ---- | ---- | ---- | ------ | -------- |
| MAI-Code-1-Flash（5B params） | inline coding model | VS Code / GitHub Copilot 內預載；低 latency code completion、小 refactor、in-editor inline diff | 含 Copilot 訂閱（待 Microsoft 公布 standalone token pricing） | 第一個 Microsoft 自家不用 OpenAI / Anthropic 的 coding model 預裝 IDE；5B param 在 latency / cost 對 Cursor Composer 2、Claude Code Fast Mode 是直接挑戰 | 本週把它對自家 prompt 跑 50 條 vs Cursor / Claude Code 對比表（cost / latency / pass rate）；做 client-work 的 agency 把它列進「客戶有 Copilot 訂閱就免費」採購備案 |
| MAI-Thinking-1（reasoning） | reasoning LLM | 多步推理、agent planning、複雜 coding task；blind test 對標 Claude Sonnet 4.6、coding benchmark 對標 Claude Opus 4.6 | 含 Microsoft Foundry、Azure OpenAI、未公開 API price | Microsoft 第一個 frontier-class 自家 reasoning model；強調「不依賴 OpenAI」 | 做 LLM router 的 indie 把 MAI-Thinking-1 加進備援（避免單一 vendor 風險）；做 enterprise SI 的 agency 評估「客戶 PO 走 Azure 帳單」的話 MAI-Thinking-1 是首選 |
| GitHub Copilot desktop app（technical preview） | agent-native IDE client | 跨 repo My Work dashboard；每 session 跑獨立 git worktree；canvases bidirectional surface；本機 + 雲端 sandbox；waitlist for Copilot Free | 含 Copilot 訂閱（將開放 Copilot Free） | 第一個跨 Windows / Mac / Linux 的 agent-first desktop；SDK GA Node / Python / Go / .NET / Rust / Java | 用 Cursor / Claude Code 的個人開發者本週申請 waitlist、跑同條 PR 任務對比 session 切換成本；做 IDE 周邊工具的 indie 評估 SDK 開放後的 plugin 市場 |
| Claude Opus 4.8 + Dynamic Workflows + Ultracode | frontier coding LLM + 多 agent orchestration | 在 Claude Code 內 plan 後 fan-out 數百 subagent（上限 1,000）做 codebase-scale migration；Ultracode = xhigh effort + auto orchestration；Fast Mode 比上代便宜 3× | 同 Opus 4.7 token price；Fast Mode 3× cheaper | 1,000 subagent cap 是 enterprise codebase migration 的原生 answer；Blitzy 3,000 agent GTM 被直接對標 | 跑 1 條 5 萬行的 internal repo migration 任務 24h 測完 cost / pass rate；做 enterprise client-work 把「Claude Dynamic Workflow 模板」當 reusable deliverable |
| OpenAI Codex on Amazon Bedrock（GA） | enterprise agent CLI / IDE 整合 | Codex App / CLI / VS Code / JetBrains / Xcode 把 model request 走 Bedrock managed auth；GPT-5.5 $5 input / $30 output per M tokens；含 KMS + CloudTrail | 對齊 OpenAI direct；走 AWS spending commit | 第一個非 Microsoft 雲提供 frontier OpenAI 的 GA；agent 流量自動進 AWS 治理 | AWS-heavy 客戶本週把 Codex CLI auth 切到 Bedrock 跑 dev branch；做 enterprise SI 的 agency 把「Codex on Bedrock 採購流程」當 fixed-price audit 賣 |
| Vercel Blob signed URLs（@vercel/blob 2.4.0） | object storage 上傳 / 下載介面 | OIDC token 簽 single-operation single-pathname URL（≤7 天）；browser 直傳 multipart 大檔不過 server | 含 Vercel Blob 標準計費 | 對標 S3 / R2 presigned URL；對 Next.js / SvelteKit indie 是「不必自架 S3 SDK」首選 | 把自家「user 上傳大檔給 LLM 處理」流程改走 signed URL multipart；省下的 server CPU / 流量本月可量化 |

## 💡 SaaS 點子

### 點子 1：Codex on Bedrock 採購遷移 + IAM 顧問（24h 後最熱） 🆕

- 痛點來源：6/1 Codex GA on Bedrock 把「不必綁 OpenAI 帳號、用客戶 AWS 帳走」變成現實，但中型企業（500–5,000 人）的 IAM policy、CloudTrail audit、CostExplorer breakdown 與 IDE 端 CLI auth 對接細節仍空白；多數 5–50 人 SaaS / agency 沒人專責 enterprise AWS
- 目標客群：用 Cursor / Claude Code 的中型 SaaS、AWS-heavy enterprise client、做 client-work 的 5–50 人 agency
- 技術複雜度：3/5
- 預估 MRR：$3K–$12K
- 競品弱點：AWS 自家 docs 不教 IDE / CLI workflow；OpenAI direct 不教 Bedrock IAM；現存 LLM cost 工具不把 Codex 與其他 Bedrock model 對比
- 切入建議：fixed-price audit（$2,000–$6,000）跑客戶 30 條典型 prompt × Codex on Bedrock vs Codex direct vs Claude Opus 4.8，輸出 cost / latency / pass rate 對比 + Terraform IAM 模板；前 30 家做完轉訂閱 $499 / 月持續 cost monitoring

### 點子 2：MAI-Code-1-Flash vs Codex CLI vs Claude Code 對比 audit（VS Code 端） 🆕

- 痛點來源：Build 2026 把 MAI-Code-1-Flash 預載進 VS Code 與 Copilot，但「我家團隊現有 Cursor / Claude Code 該不該切」沒有公開對比表；5B params 在 latency 與 cost 上應該是直接挑戰 Cursor Composer 2 與 Claude Code Fast Mode
- 目標客群：5–30 人 dev shop、AI agency；用 VS Code base 但訂閱 Copilot 的小團隊
- 技術複雜度：2/5
- 預估 MRR：$1K–$6K
- 競品弱點：Microsoft 自家 launch 沒做對比；現存 Cursor / Claude Code 評測沒納入 MAI；Copilot 內建 metric 不給跨 model 對比
- 切入建議：免費 GitHub Action 跑 50 條 prompt × MAI-Code-1-Flash vs Cursor vs Claude Code Fast Mode；輸出 markdown 比較表；付費版 $39 / 月加 weekly regression monitoring

### 點子 3：Claude Dynamic Workflow 模板市集（Ultracode 配方） 🆕

- 痛點來源：5/28 Dynamic Workflows + Ultracode 把「跑 1,000 subagent 做 migration」放上桌；但多數 indie / agency 不知道「我這個 client 5 萬行 Rails-to-Node 任務」要怎麼下 Ultracode prompt 與 subagent split；現成 cookbook 偏單 agent
- 目標客群：做 legacy migration / client-work 的 5–50 人 agency；用 Claude Code 的 indie SaaS dev team
- 技術複雜度：3/5
- 預估 MRR：$2K–$10K
- 競品弱點：Anthropic Cookbook 偏 demo 不偏 migration scenarios；Blitzy 平台閉源；Cursor 沒有等價的「workflow 化 agent group」
- 切入建議：30 個 production-ready Dynamic Workflow 模板（Rails → Node、Vue 2 → 3、jQuery → React、CommonJS → ESM、CSS → Tailwind）；單模板 $29、全包 $199 lifetime；做完 5 個寫 case study 衝 HN

## 🧰 工具堆疊更新

- **如果你做 enterprise AWS client-work**：6/1 Codex on Bedrock GA 後本週就能把客戶 PO 流程從「我幫客戶接 OpenAI 帳號」改成「客戶用自家 AWS spending commit」——重寫一頁 sales deck 寄給最近 5 個 stalled lead
- **如果你 IDE 主流是 Cursor / Claude Code**：把 MAI-Code-1-Flash（VS Code / Copilot 預載）跑同條 50 prompt benchmark；GitHub Copilot desktop app 開 waitlist；本月底前決定是否切回 Copilot 體系
- **如果你跑 Vercel + Next.js**：把現有 user upload 流程改用 @vercel/blob 2.4.0 signed URLs（browser 直傳 multipart）；省下的 server CPU / 流量這週可量化
- **如果你跑長 horizon coding agent**：Claude Opus 4.8 Dynamic Workflows + Ultracode（1,000 subagent cap）+ Fast Mode 3× cheaper，把「以前要切多個 session 跑 migration」整合成單一 workflow；做 enterprise client-work 把這個 cap 寫進 SOW
- **如果你做 agent 收費的 SaaS**：Stripe MPP（4/29–4/30 Sessions 已上 streaming payments）+ SPT（card / Klarna / Affirm / stablecoin 統一）讓「agent 微付費」不必自己刻 metered billing；本週 spike 一輪
- **如果你寫 Windows 桌面 / 跨 OS app**：Build 2026 的 Windows Development Skills、Intelligent Terminal、Microsoft Execution Containers 把「在 Windows 跑 agent」變一級概念；macOS / Linux only 的 agent 工具要評估補 Windows 路徑

## ⚡ 今日行動建議

- [ ] 把今天的「典型 50 條 prompt」跑 MAI-Code-1-Flash（VS Code / Copilot）、Cursor、Claude Code 三組，明天輸出 cost / latency / pass rate 對比表（45 分鐘設定 + 24h 跑）
- [ ] `aws bedrock list-foundation-models | grep -i openai`，把 Codex CLI auth 切去 Bedrock 跑一條 PR（30 分鐘）
- [ ] 跑一條既有 internal repo 的 5,000 行 refactor 用 Claude Code `/ultracode`（或 dynamic workflow trigger），記錄 token / 時間 / pass rate（45 分鐘設定 + 60–90 分鐘跑）
- [ ] `npm i @vercel/blob@latest`，把自家 user upload 流程改 signed URL multipart；本機 dev 跑 30 MB 檔案測通（30 分鐘）
- [ ] 訂閱 [GitHub Copilot desktop app waitlist](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)，搶 technical preview（5 分鐘）

## ⏳ 待觀察

- Microsoft Work IQ APIs 6/16 GA 後對「Teams + Outlook + OneDrive 自動化」的 indie SaaS 是否壓縮 niche；3–5 個 vertical 自動化新創會立刻顯露 moat 收窄
- YC P26 Demo Day 6/16 是否出現「跑 1,000 subagent 對標 Blitzy / Claude Dynamic Workflow」的新對手；以及 AI agent 框架類占比是否續高
- MAI-Code-1-Flash 是否在 6 月底前出現 standalone API endpoint（脫離 Copilot 訂閱）；對 indie 是否變成「Microsoft 版 GPT-5.5 mini」的成本選項
- Anthropic SpaceX Colossus 1 220K GPU「月內到位」原 6/6 前可驗，是否在本週末有 Claude.ai latency 公開 benchmark
- OpenAI The Deployment Company 首批客戶 logo 是否在 YC Demo Day 前公開；對「Palantir-style forward-deployed」這條 enterprise GTM 是 anchor
- Codex on Bedrock GA 後 30 天內 AWS region 是否擴張到 EU / APAC（目前 us-east-2 與 us-west-2）；對亞洲 indie 走 Bedrock auth 是否仍有 latency 阻礙
- Vercel monorepo Git settings 是否補 GitLab / Bitbucket 支援；多 repo agency 是否能一次 sync 所有 client project

[^mai-thinking]: MAI-Thinking-1 是 Microsoft 自家 superintelligence team 在 2026-06-02 Build 大會公布的旗艦 reasoning model，與 Anthropic Claude Sonnet 4.6 在 blind human test 打平、在常用 coding benchmark 對標 Opus 4.6；策略意義是 Microsoft 想脫離對 OpenAI 模型的單一依賴。

[^worktree]: git worktree 是 Git 內建功能，可在同一 repo 下建立多個「掛在不同 branch」的工作目錄，避免來回 `git checkout` 衝突；GitHub Copilot desktop app 把每個 agent session 各跑一個 worktree，讓多 agent 平行作業而不互相覆蓋變更。

[^dynamic-workflows]: Claude Dynamic Workflows 是 Anthropic 在 2026-05-28 隨 Opus 4.8 釋出的 research preview 功能，讓 Claude 自己 plan 一個任務再 fan-out 數百 subagent 平行跑（單 workflow 上限 1,000），目標是「以既有 test suite 為驗收線」做 codebase 級遷移；在 Claude Code 內用 keyword `ultracode` 觸發。

[^ultracode]: Ultracode 是 Claude Code 為 Dynamic Workflows 設計的 high-level 觸發 keyword，相當於「xhigh reasoning effort + 自動 workflow 編排」，Claude 自行判斷任務是否值得 fan-out subagent group；前身 trigger keyword 為 `workflow`，2026-06 改名 `ultracode`。

[^mpp]: MPP（Machine Payments Protocol）是 Stripe 與 Tempo 共制的開放 HTTP-native 標準，2026-03-18 隨 Tempo 主網上線；用來把 agent 收費從「單次 API call」擴成「訂閱、串流計量、取消、對帳」一整套；Sessions 2026 又加上 streaming payments 與 stablecoin 直結。

[^spt]: SPT（Shared Payment Tokens）是 Stripe Sessions 2026 公布的支付介面，把 agent 對 card / Klarna / Affirm / stablecoin 的支付統一進 Payment Intents API；解決 indie 想接 agent 微付款但不想自己刻多 wallet 整合的痛點。

## 📚 引用來源

1. [Building a hill-climbing machine: Launching seven new MAI models | Microsoft AI](https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/) — 2026-06-02
2. [Microsoft unveils seven homegrown AI models in new bid for 'long term self-sufficiency' | GeekWire](https://www.geekwire.com/2026/microsoft-unveils-seven-homegrown-ai-models-in-bid-for-long-term-self-sufficiency/) — 2026-06-02
3. [Microsoft unveils new AI models to lessen reliance on OpenAI and lower costs for developers | CNBC](https://www.cnbc.com/2026/06/02/microsoft-unveils-new-ai-models-lessen-reliance-on-openai-lower-costs.html) — 2026-06-02
4. [Microsoft Build 2026: Be yourself at work | Microsoft Official Blog](https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work/) — 2026-06-02
5. [At Build 2026, Microsoft Sets Up Windows as an OS for AI Agents | Visual Studio Magazine](https://visualstudiomagazine.com/articles/2026/06/02/at-build-2026-microsoft-sets-up-windows-as-an-os-for-ai-agents.aspx) — 2026-06-02
6. [GitHub Copilot app: The agent-native desktop experience | GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) — 2026-06-02
7. [Build 2026: Microsoft Announces GitHub Copilot App | Thurrott](https://www.thurrott.com/dev/336962/build-2026-microsoft-announces-github-copilot-app) — 2026-06-02
8. [Hands On with GitHub Copilot App Technical Preview | Visual Studio Magazine](https://visualstudiomagazine.com/articles/2026/06/03/hands-on-with-new-github-copilot-app-turning-a-blazor-issue-into-a-pull-request.aspx) — 2026-06-03
9. [Microsoft Launches GitHub Copilot Desktop App for Agent-Native Development | Windows Report](https://windowsreport.com/microsoft-launches-github-copilot-desktop-app-for-agent-native-development/) — 2026-06-03
10. [Get started with OpenAI GPT-5.5, GPT-5.4 models, and Codex on Amazon Bedrock | AWS Blog](https://aws.amazon.com/blogs/aws/get-started-with-openai-gpt-5-5-gpt-5-4-models-and-codex-on-amazon-bedrock/) — 2026-06-01
11. [OpenAI models GPT-5.5 and GPT-5.4—and Codex—now generally available on Amazon Bedrock | About Amazon](https://www.aboutamazon.com/news/aws/bedrock-openai-models) — 2026-06-01
12. [AWS launches OpenAI GPT-5.5 and Codex on Amazon Bedrock | TechBriefly](https://techbriefly.com/2026/06/02/openai-gpt-5-5-codex-available-amazon-bedrock/) — 2026-06-02
13. [OpenAI Models and Codex Are Now Generally Available on AWS | Memeburn](https://memeburn.com/openai-models-and-codex-are-now-generally-available-on-aws/) — 2026-06-01
14. [OpenAI models and Codex on Amazon Bedrock are now generally available | AWS ML Blog](https://aws.amazon.com/blogs/machine-learning/openai-models-and-codex-on-amazon-bedrock-are-now-generally-available/) — 2026-06-01
15. [Introducing Claude Opus 4.8 | Anthropic](https://www.anthropic.com/news/claude-opus-4-8) — 2026-05-28
16. [Anthropic releases Opus 4.8 with new 'dynamic workflow' tool | TechCrunch](https://techcrunch.com/2026/05/28/anthropic-releases-opus-4-8-with-new-dynamic-workflow-tool/) — 2026-05-28
17. [Anthropic Ships Claude Opus 4.8 Alongside Dynamic Workflows and Cheaper Fast Mode | MarkTechPost](https://www.marktechpost.com/2026/05/28/anthropic-ships-claude-opus-4-8-alongside-dynamic-workflows-and-cheaper-fast-mode-with-workflows-capped-at-1000-subagents/) — 2026-05-28
18. [Claude Opus 4.8: Capabilities and Reactions | The Zvi](https://thezvi.substack.com/p/claude-opus-48-capabilities-and-reactions) — 2026-05-28
19. [Claude Opus 4.8 dynamic workflows in Claude Code, explained | allthings.how](https://allthings.how/claude-opus-4-8-dynamic-workflows-in-claude-code-explained/) — 2026-05-28
20. [Everything we announced at Sessions 2026 | Stripe Blog](https://stripe.com/blog/everything-we-announced-at-sessions-2026) — 2026-04-30
21. [Stripe builds out the economic infrastructure for AI with 288 launches | Stripe Newsroom](https://stripe.com/newsroom/news/sessions-2026) — 2026-04-30
22. [Introducing the Machine Payments Protocol | Stripe Blog](https://stripe.com/blog/machine-payments-protocol) — 2026-03-18
23. [Why Stripe's Machine Payments Protocol Signals A Turning Point For Micropayments | Forrester](https://www.forrester.com/blogs/why-stripes-machine-payments-protocol-signals-a-turning-point-for-micropayments/) — 2026-04 查閱
24. [Vercel Changelog](https://vercel.com/changelog) — 2026-06 查閱
25. [Signed URLs are now available for Vercel Blob | Vercel](https://vercel.com/changelog/signed-urls-are-now-available-for-vercel-blob) — 2026-06-02
26. [Vercel Blob Docs](https://vercel.com/docs/vercel-blob) — 2026-06 查閱
27. [2026 Demo Day Dates | Y Combinator](https://www.ycombinator.com/blog/2026-demo-days) — 2026 查閱
