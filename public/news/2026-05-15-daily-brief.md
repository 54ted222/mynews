---
title: 每日創業情報 — 2026-05-15
date: 2026-05-15
tags: 創業情報, AI 產業, SaaS
summary: TanStack 供應鏈攻擊 5/11 詳細復盤（CVE-2026-45321 CVSS 9.6、首例帶 SLSA provenance 的惡意 npm）；OpenAI Deployment Company 5/11 正式啟動 $4B；Android Show 5/12 端出 Googlebooks 與「Create My Widget」vibe-code；Next.js / React 5/14 第三波 patch（15.5.18 / 16.2.6）；Vercel AI Gateway 推 Opus 4.7 Fast mode 與 Sandbox firewall proxy；Claude Code 5/14 補 AWS Bedrock service tier 與 `claude project purge`。
keywords: TanStack CVE-2026-45321 Mini Shai-Hulud OIDC token theft pull_request_target cache poisoning, TeamPCP SLSA provenance malicious npm first documented case, OpenAI Deployment Company 4 billion investment 19 firms Bain Capgemini McKinsey Tomoro acquisition, Anthropic JV unnamed Blackstone Goldman Hellman Friedman GIC Apollo General Atlantic, Android Show I/O Edition Googlebooks Acer Asus Dell HP Lenovo Gemini Intelligence, Create My Widget vibe-code Samsung Galaxy Pixel summer 2026 Pause Point Rambler, Gemini Omni leak May 11 2026 video model UI string Pro tier, Next.js 15.5.18 16.2.6 May 2026 third wave patch 13 advisories CVE-2026-23870, Vercel AI Gateway Fast mode Opus 4.7 research preview 2.5x faster output, Vercel Sandbox firewall proxy forwarding matchers Vercel Flags progressive rollouts schedule, Claude Code Bedrock service tier ANTHROPIC_WORKSPACE_ID CLAUDE_CODE_PLUGIN_PREFER_HTTPS claude project purge, Claude Platform on AWS Messages API Files API Batches Managed Agents IAM authentication, Sierra 950 million Series E 15 billion Tiger Global GV 150M ARR, CopilotKit 27 million Series A Glilot NFX SignalFire AG-UI Series A
---

# 每日創業情報 — 2026-05-15

## 🎯 今日 TL;DR

- **TanStack 5/11 供應鏈攻擊復盤完成**：CVE-2026-45321（CVSS 9.6）、@tanstack 命名空間 42 個 package × 84 個 artifact 在 19:20–19:26 UTC 連發；**TeamPCP** 用「`pull_request_target` 觸發 + GitHub Actions cache 中毒 + 從 runner process memory 抽 OIDC token」三段式攻擊；**史上第一個帶 valid SLSA[^slsa] provenance 的惡意 npm 套件**；@tanstack/react-router 週下載 12.7M——靠 SLSA / sigstore 簽章驗證就放心的 indie 必須補一層 release window + minimumReleaseAge
- **OpenAI 5/11 The Deployment Company 正式啟動**：$4B 初始投資、19 家 SI / 顧問 / 投資公司（Bain、Capgemini、McKinsey、Advent International 等）、**併購 Tomoro 拿到第一批 Forward Deployed Engineer**——前期 brief 列為「5/14 前是否揭露」的觀察點 5/11 已落地；對標 5/4 Anthropic JV（Goldman / Blackstone / H&F）+ 5/6 EPAM partnership，「Anthropic FDE 三條腿 vs OpenAI FDE 一個獨立公司」格局成形
- **Android Show 5/12 端出三條對 indie 重要的軌道**：(1) **Googlebooks** 秋季出貨，Acer / Asus / Dell / HP / Lenovo 各家做、預載 Gemini Intelligence[^geminiintel]；(2) **Create My Widget**[^createwidget] vibe-code 介面今夏先在 Samsung Galaxy / Pixel 上線——用自然語言描述就生 widget；(3) Gemini Omni[^geminiomni] 影片模型 5/11 提前洩漏，5/19–20 I/O 預期正式發；對 indie：vibe-code widget 開出來「dev 短期不必先寫 Android app 也能進主 launcher」一條新路
- **Next.js / React 5/14 第三波 patch（5/3 → 5/7 → 5/14）**：13 條 advisory 涵蓋 DoS / middleware proxy bypass / SSRF / cache poisoning / XSS；Next.js patched **15.5.18 / 16.2.6**（5/10 brief 的 15.5.16 / 16.2.5 已被取代）、React 對應 19.0.6 / 19.1.7 / 19.2.6；3 週內第三輪 patch 證明攻擊面（RSC[^rsc] 反序列化 + App Router middleware）仍在被外部研究員挖
- **Vercel 5/13–14 三條新訊**：(1) **Fast mode for Opus 4.7** 進 AI Gateway research preview（~2.5× output token 生成速度、premium 計價、`fast-mode-2026-02-01` beta header）；(2) **Sandbox firewall 支援 forwarding 到自管 proxy + matchers 過濾**；(3) **Flags progressive rollouts**（按時程逐步切流量、不是固定 A/B 比例）；對亞洲 indie 是 Claude Opus 4.7 互動式 UX 重新可用 + 受管 egress 終於有了

## 🔄 昨日追蹤

### Anthropic JV 是否在 5/14 前命名 🔄 追蹤更新（已確認未命名）

5/8、5/10、5/11 brief 連三天列。**5/14 deadline 已過、JV 仍未命名**——彭博 / Blackstone 新聞稿、TechCrunch 5/4 報導與 5/13 後續均維持「the new company」「the venture」這類無名稱寫法；新訊號是 **GIC 加入背書**（與 Apollo、General Atlantic、Leonard Green、Sequoia Capital 並列），但仍只稱 enterprise AI services firm。下一個觀察錨點：6 月 Anthropic IPO S-1 揭露時點。

### OpenAI The Deployment Company 是否在 5/14 前公開首批 logo 🔄 追蹤更新（已落地）

5/8、5/10、5/11 brief 列。**5/11 正式公告**：$4B 初始投資、19 家 partner（Bain & Company、Capgemini、McKinsey & Company、Advent International 等）、majority-owned by OpenAI、併購 **Tomoro** 取得第一批 Forward Deployed Engineer；但**仍未揭露第一批 customer logo**——只列「partner」與「投資人」名單。對 indie：FDE 流入 enterprise 的速度本月起被「兩條軌道」拉滿（Anthropic JV + EPAM vs OpenAI Deployment Company），mid-market 採購視窗從 5/11 起重新洗牌。

### TanStack / 第二輪 npm 供應鏈攻擊細節 🆕 全新資訊（補回 5/11 brief 漏報深度）

5/11 brief 只列「Shai-Hulud 累計 796 packages × 132M monthly downloads」一句，未獨立報 5/11 TanStack 事件。**今日補回**：實際細節（OIDC token 從 runner process memory 抽出、首例帶 valid SLSA provenance）對 indie 的影響遠大於 axios / SAP CAP 變種——意味「signed package + reputable maintainer」這條防線今天起破功，要靠 release window（minimumReleaseAge=1 day）+ pnpm v11 預設禁 postinstall + 主動 audit 才擋得住。

### Claude Managed Agents Outcomes / Multi-agent migration case study 🔄 追蹤更新

5/10、5/11 brief 列為「7–14 天看第二批 case study」。**5/12–5/14 仍未看到 ARR-grade 第二批 case study**——社群焦點被 5/11 TanStack 事件、5/11 OpenAI Deployment Company、5/12 Android Show 蓋住。Anthropic 5/14 自家動態反而是 **Claude Platform on AWS** 公告（Messages / Files / Batches / Managed Agents 都接 AWS billing + IAM authentication），等於把 5/8 Akamai 大單之外，再補上對 AWS 重度客戶的「在 AWS 內部用 Claude」路線。

### Next.js / React 第三輪 CVE 是否冒出 🔄 追蹤更新（已落地）

5/10、5/11 brief 列「7–10 天內可能第三批」。**5/14 落地**：第三波 13 條 advisory 集中於 RSC 反序列化、App Router middleware / proxy bypass、SSRF、cache poisoning、XSS；patched 版本被推進到 Next.js 15.5.18 / 16.2.6（5/10 的 15.5.16 / 16.2.5 已被取代）。3 週內三波 patch，對賣 Next.js boilerplate / SaaS template 的 indie 是「dependency pin + auto-PR + Playwright smoke test」標配化的訊號。

## 📰 AI 產業動態

| 事件 | 影響 | 機會/威脅 | 來源 |
| ---- | ---- | --------- | ---- |
| **TanStack npm 供應鏈攻擊 5/11 完整復盤（CVE-2026-45321, CVSS 9.6）**：19:20–19:26 UTC 在 @tanstack 命名空間 42 個 package × 84 個 artifact；TeamPCP 用「`pull_request_target` 觸發 + Actions cache 中毒 + 從 runner process memory 抽 OIDC token」三段式；**史上第一個帶 valid SLSA provenance 的惡意 npm**；@tanstack/react-router 週下載 12.7M | 對 indie 與 agency：靠 `signed by` / `provenance: true` 驗證就放心的 release pipeline 今天起破功；GitHub Actions 走 `pull_request_target` 的 monorepo（特別是 OSS）攻擊面被打開；任何依賴 @tanstack/* 的 React 專案要 audit 5/11 19:20 後 24 小時內的 install 主機 | 機會：(1) 推「TanStack 復盤 + 自家 GitHub Actions 安全審計」fixed-price service $1,500–$5,000；(2) 開源 `tanstack-supplychain-audit` CLI 掃 lock file + Actions workflow；(3) 賣「OIDC token 防護 + Actions cache 健檢」週訂閱；威脅：相信 SLSA provenance 一條腿走的 boilerplate / SaaS 不再有「我家簽章了所以安全」這條 sales pitch | [Snyk](https://snyk.io/blog/tanstack-npm-packages-compromised/) / [Wiz Blog](https://www.wiz.io/blog/mini-shai-hulud-strikes-again-tanstack-more-npm-packages-compromised) / [The Hacker News](https://thehackernews.com/2026/05/mini-shai-hulud-worm-compromises.html) / [Endor Labs](https://www.endorlabs.com/learn/shai-hulud-compromises-the-tanstack-ecosystem-80-packages-compromised) / [Socket](https://socket.dev/blog/tanstack-npm-packages-compromised-mini-shai-hulud-supply-chain-attack) / [Upwind](https://www.upwind.io/feed/shai-hulud-tanstack-supply-chain-worm) / [Lilting Channel — CVE-2026-45321](https://lilting.ch/en/articles/mini-shai-hulud-tanstack-mistral-npm-oidc) |
| **OpenAI Deployment Company 5/11 正式啟動**：$4B 初始投資、19 家 partner（Bain、Capgemini、McKinsey、Advent International 等）、majority-owned by OpenAI、併購 **Tomoro** 取得第一批 Forward Deployed Engineer；對標 5/4 Anthropic JV（Goldman / Blackstone / H&F）+ 5/6 EPAM partnership | mid-market（500–5,000 人）AI 採購窗從「Anthropic FDE 三條腿」變成「Anthropic FDE 三條腿 vs OpenAI 獨立公司」雙軌；indie agency 接案路徑被兩大廠 SI 體系夾擊；同時 Bain / Capgemini / McKinsey 內部專案會大量湧進「在 ChatGPT / OpenAI 上做 PoC」的副單 | 機會：(1) 寫一頁「我家 SaaS 為何不是 OpenAI Deployment Company 的客戶——但 30 天能上線」差異化 deck；(2) 在 Bain / Capgemini / McKinsey 開出的次外包接案管道（freelance + 短期合約）卡位；(3) 推「OpenAI Deployment Company 與 Anthropic JV 二選一的中介評估服務」單次 $3K；威脅：靠「我們幫你導入 GPT」的 indie 顧問接案被 SI 軌道壓縮 | [OpenAI 官方公告](https://openai.com/index/openai-launches-the-deployment-company/) / [PYMNTS — $4B](https://www.pymnts.com/news/artificial-intelligence/2026/openai-launches-4-billion-dollar-company-accelerate-enterprise-ai-adoption/) / [Neowin](https://www.neowin.net/news/openai-launches-a-standalone-company-for-enterprise-ai-deployment/) / [HPCwire / AIwire](https://www.hpcwire.com/aiwire/2026/05/11/openai-launches-deployment-company-to-scale-enterprise-ai-adoption/) / [Advent International](https://www.adventinternational.com/news/openai-launches-the-openai-deployment-company-to-help-businesses-build-around-intelligence/) / [OpenAI forward-deployed page](https://openai.com/business/the-openai-deployment-company/) |
| **Android Show 5/12 — 三條對 indie 有實質影響的軌道**：(1) **Googlebooks** 秋季出貨：Acer / Asus / Dell / HP / Lenovo 各家做、預載 Gemini Intelligence，定位是「Android 為核心、Gemini 為主介面」的筆電；(2) **Create My Widget**：用自然語言描述就生 widget，今夏先在 Samsung Galaxy / Pixel 上線；(3) Android Auto refresh、Pause Point（防無腦滑）、3D emoji、Gboard Rambler 模式 | 對 indie：(a) 「我要不要做 Android app」題目下，**Create My Widget 開出 deeper SDK 後 widget 可能變新 distribution 入口**；(b) Googlebook 是「ChromeOS 與 Android 真正合流」的硬體訊號，做 web app 的 indie 不必再針對 ChromeOS 做特例；(c) Aluminum OS 5/12 沒被正式公布，5/19–20 I/O 才有可能揭曉 | 機會：(1) 寫「Create My Widget × 你家 SaaS 的 5 個 widget 範本」內容稿；(2) 替亞洲 D2C 做「Googlebook 上市後第三方 Gemini Intelligence SDK 卡位」audit；(3) Pause Point / Rambler 等小工具給「替長者 / 注意力族群做 onboarding」的小 SaaS 借勢；威脅：自家 Android widget 賣點被 vibe-coded 個人化 widget 壓縮 | [9to5Google — full recap](https://9to5google.com/2026/05/12/the-android-show-2026/) / [TechCrunch — vibe-coded widgets](https://techcrunch.com/2026/05/12/everything-google-announced-at-its-android-show-from-googlebooks-to-vibe-coded-widgets/) / [Tom's Guide — Googlebook](https://www.tomsguide.com/phones/live/the-android-show-google-i-o-edition-live-all-the-latest-android-gemini-ai-and-android-xr-news-as-it-happens) / [TechRadar live](https://www.techradar.com/news/news/live/android-show-2026-live) / [Android.com I/O 2026](https://www.android.com/new-features-on-android/io-2026/) / [Google blog official recap](https://blog.google/products-and-platforms/platforms/android/android-show-io-edition-2026/) |
| **Next.js / React 5/14 第三波 patch（15.5.18 / 16.2.6）**：13 條 advisory，涵蓋 DoS / middleware proxy bypass / SSRF / cache poisoning / XSS；React 對應 patched 19.0.6 / 19.1.7 / 19.2.6；3 週內第三輪 patch（5/3 → 5/7 → 5/14）；Vercel / Netlify 同步出 changelog 與 advisory 摘要 | 距 5/7 第二輪（13 條 + CVE-2026-44575）僅一週、距 5/3 CVE-2026-23869 / -23870 兩週；攻擊面集中於 RSC 反序列化 + App Router middleware；indie 的 Next.js 升級疲勞 + 客戶端「你又要我重新部署？」的 SLA 拉鋸 | 機會：(1) 推「Next.js 5 月三波 CVE 自動化升級 + Playwright 回歸測」一次性報告 $800–$2K；(2) GitHub Action template：每週掃 CVE-2026-* / Next.js / React 版本差距 + Slack alert，前 50 家免費；(3) 替賣 Next.js boilerplate 的 indie 整理「dependency pin policy + auto-PR + smoke test」標準包；威脅：賣 Next.js template 但沒及時 push patch 的 indie 直接被 enterprise 客戶換掉 | [Vercel — Next.js May 2026 security release](https://vercel.com/changelog/next-js-may-2026-security-release) / [Netlify — May 2026 React / Next.js security](https://www.netlify.com/changelog/2026-05-08-react-nextjs-security-vulnerabilities/) / [Akamai — CVE-2026-23864 DoS](https://www.akamai.com/blog/security-research/cve-2026-23864-react-nextjs-denial-of-service) / [Endor Labs — RCE in React / Next.js](https://www.endorlabs.com/learn/critical-remote-code-execution-rce-vulnerabilities-in-react-and-next-js) |
| **Anthropic 5/14 Claude Platform on AWS 公告 + Claude Code 多項 dev quality 更新**：Claude Platform on AWS 把 Messages API、Files API、Batches API、Managed Agents、Agent Skills、code execution、tool use 都接 AWS billing + IAM；Claude Code 同期補 Bedrock service tier 選擇、`/resume` PR 搜尋、MCP handling、OpenTelemetry logging、`/model picker` 從 gateway 抓清單、`claude project purge`、`CLAUDE_CODE_PLUGIN_PREFER_HTTPS`、`ANTHROPIC_WORKSPACE_ID` 等 | 5/8 Akamai $1.8B（edge） + 5/14 Claude Platform on AWS（hyperscaler 內生） + Bedrock service tier，等於「客戶不離開既有雲就能用 Claude 全套」格局拼齊；對 indie：賣「在 AWS 後台串 Claude」服務的中介層差異化收窄、但同時 enterprise 客戶談 Anthropic 變容易；Claude Code 的 dev tool 體驗（plugin / workspace ID / project purge）成熟、值得把現有 hooks / MCP workflow 升級 | 機會：(1) 替 AWS 重客戶做「Bedrock 既有 Workflow → Claude Platform on AWS」遷移 audit；(2) Claude Code `ANTHROPIC_WORKSPACE_ID` workload identity 用法成熟、做「企業 SSO + Claude Code workspace 隔離」productized 服務；(3) `claude project purge` 變成 retainer-friendly 的「定期清舊 agent state」 SOP；威脅：賣「我們幫你接 Anthropic」的中介 wrapper SaaS 被 AWS 內生路線截胡 | [Anthropic Release Notes — May 2026](https://releasebot.io/updates/anthropic) / [Claude Code Changelog — May 2026](https://releasebot.io/updates/anthropic/claude-code) / [Claude Code Docs Changelog](https://code.claude.com/docs/en/changelog) / [Claude Help Center release notes](https://support.claude.com/en/articles/12138966-release-notes) |

## 🛠 新興 AI 工具

| 工具 | 類別 | 用途 | 定價 | 差異點 | 採用建議 |
| ---- | ---- | ---- | ---- | ------ | -------- |
| **Vercel AI Gateway — Fast mode for Claude Opus 4.7（research preview）** | LLM gateway | 同模型、同 intelligence、output token 生成 ~2.5× 加速；走 `speed: "fast"` + `model: claude-opus-4-7` + `fast-mode-2026-02-01` beta header | premium 計價（比標準 Opus 4.7 token 單價高）、需 waitlist | 第一個對 Opus 4.7 開出「同模型加速路徑」的公開 gateway；接 5/8 Akamai + 5/14 Claude Platform on AWS 的「Anthropic capacity 多軌」敘事 | 跑 IDE / agent / 互動式 UX、且月帳 $300–$5K 走 Opus 4.7 的 indie，把 chat-loop 與 retry-loop 切到 Fast mode；非互動式的批次任務維持標準路徑 |
| **Vercel Sandbox firewall — forward to self-managed proxy + matchers**（5/14 era） | runtime egress 控制 | 把特定 HTTP 請求轉發到自管 proxy（含 credentials brokering）；可用 matcher 過濾「哪些 request 才走 proxy」 | 隨 Vercel Pro / Enterprise | 過去只能整段走「黑白名單」；matcher + credentials brokering 讓單一 Sandbox 同時跑「公開 LLM call」與「企業內 API 透過 proxy」 | 跑 enterprise PoC 但 Vercel function 要打客戶內網 API 的 indie，本週用 matcher 切「外網 LLM = 公開、內網 API = forward to proxy」最小設定 |
| **Vercel Flags — progressive rollouts**（5/14 era） | feature flag | 不是固定 A/B 比例，而是按時程逐步把流量切到新 variant；可搭 5/7 JSON values 一起用 | 隨 Vercel Flags（免費 / Pro / Enterprise） | 過去要自寫 cron 改 weight；現在用 schedule rules 直接讓「Day 0 5% → Day 3 25% → Day 7 100%」自動跑 | 跑 LLM model swap、prompt template 改版的 indie 把 5/7 JSON values + 5/14 progressive rollouts 串成「Opus 4.7 → 4.7 Fast mode 兩週漸進切換」實驗範本 |
| **Anthropic Claude Platform on AWS**（5/14） | LLM platform | 在 AWS 內部用 AWS billing + IAM auth 跑完整 Anthropic API（Messages / Files / Batches / Managed Agents / Agent Skills / code execution / tool use） | AWS marketplace 帳單合併、Anthropic API 計價 | 過去要從 AWS 內接 Anthropic 得多繞 Bedrock；Claude Platform 直接把 Anthropic-managed infra 接成 AWS endpoint；對 AWS-only 客戶是「不離開 AWS 邊界就用 Claude 全棧」 | 重度 AWS 客戶（醫療、金融、政府）本週做「Bedrock vs Claude Platform on AWS」二選一決策表；indie 接這類客戶的考慮把 SDK abstraction 留好 |
| **OpenAI Deployment Company（5/11）+ Tomoro 併購** | enterprise AI SI / FDE | OpenAI 主控的獨立公司、負責把 ChatGPT / GPT 模型推進大廠生產；Tomoro 提供第一批 Forward Deployed Engineer | $4B 初始資本、Bain / Capgemini / McKinsey 等 partner 合資 | 第一個 OpenAI 自家「FDE-as-a-company」獨立法人；對標 Anthropic 5/4 JV + 5/6 EPAM 的「SI partnership」軌道 | indie 不是直接客戶；但接案 freelancer / boutique consultant 可在 Bain / Capgemini / McKinsey 外包鏈卡位；做 ChatGPT enterprise PoC retainer 的提前佈局 |
| **Claude Code 5/14：`claude project purge` + `ANTHROPIC_WORKSPACE_ID` + Bedrock service tier** | dev IDE agent | `claude project purge [path]` 清掉專案所有 Claude Code state（transcripts、tasks、file history、config）；`ANTHROPIC_WORKSPACE_ID` 走 workload identity federation；Bedrock service tier 對接 AWS 計費 | 隨 Claude Pro / Max / Team 訂閱 | 第一次把「企業 SSO + workspace 隔離 + 定期清 agent state」原生支援；plugin 走 HTTPS 取代 SSH（無 SSH key 環境也能裝外掛） | 大團隊用 Claude Code 的本週把 workspace 切按部門 / 客戶；retainer agency 用 `claude project purge` 做「客戶離場 SOP」一鍵清資料 |

## 💡 SaaS 點子

### 點子 1：TanStack 5/11 復盤後的「Actions Supply Chain Audit」服務 🆕

- 痛點來源：5/11 TanStack 攻擊把「`pull_request_target` 觸發 + Actions cache 中毒 + OIDC token 從 runner memory 抽出」三段式公開；首例帶 valid SLSA provenance 的惡意 npm；任何走 OSS monorepo + GitHub Actions release pipeline 的 indie / agency 都中槍，靠 sigstore / signed-by 一條腿走的不夠用
- 目標客群：跑 OSS / monorepo + GitHub Actions 自動 npm publish 的 1–30 人 SaaS、agency、indie maintainer；React / TanStack / Mistral 生態相關
- 技術複雜度：3/5
- 預估 MRR：$3K–$10K
- 競品弱點：Snyk / Socket.dev 偏掃 package、不專做「Actions workflow 安全 + OIDC token 健檢」；StepSecurity 偏 enterprise；GitHub 自家 advanced security 偏報告、不出修補 PR
- 切入建議：(1) 開源 `actions-supplychain-audit` CLI 掃 `.github/workflows/`：列出 `pull_request_target`、cache restore、OIDC token 暴露點；(2) 付費版 $49 / repo / 月加 PR 自動修補 + Slack alert + 每週 release window report；(3) fixed-price 一次性審計 $1,500（OSS 專案 $500），前 30 家免費換 case study；(4) 對 TanStack 用戶直接做「5/11 復盤稿模板 + 自家專案套用」7 天 retainer

### 點子 2：「OpenAI Deployment Company 二選一」mid-market 評估顧問 🆕

- 痛點來源：5/11 OpenAI Deployment Company 啟動後，500–5,000 人公司面臨「跟 Anthropic JV / EPAM 還是 OpenAI Deployment Company 二選一」的 sourcing 困難；Bain / Capgemini / McKinsey 都報自家，缺中立第三方
- 目標客群：mid-market enterprise（500–5,000 人）、CTO / VP Engineering / Head of AI；自己想做 PoC 但不確定走哪條軌道
- 技術複雜度：1/5（顧問服務）
- 預估 MRR：$5K–$30K
- 競品弱點：Gartner / Forrester 報告等 6 個月；Bain / Capgemini / McKinsey 自帶 conflict of interest；indie 顧問做不出 1 週交付的決策表
- 切入建議：30 天固定價 $25K「二選一評估」交付物：(1) 自家 use case × 兩條軌道（Anthropic JV vs OpenAI Deployment Company）feature matrix；(2) 三家 SI（Bain、Capgemini、McKinsey）vs Anthropic FDE 三條腿（in-house JV + EPAM + 自家 Black Belt）的 TCO 推估；(3) 30 天 PoC kit；前 5 家 $15K 限定價

### 點子 3：Create My Widget 範本市集（5/12 Android Show 後 30 天熱期）🆕

- 痛點來源：5/12 Android Show 揭露 Create My Widget vibe-code 介面今夏先在 Samsung Galaxy / Pixel 上線；多數 Android 開發者沒做過 widget；非工程師讀者期待「自家 SaaS 變一個 widget」但寫不出 prompt；範本市集還沒人做
- 目標客群：個人創業者、newsletter creator、SaaS 1–10 人小團；想把自家服務塞進 Android home screen 的；Samsung / Pixel 重度用戶族群
- 技術複雜度：2/5
- 預估 MRR：$1K–$5K
- 競品弱點：Google 官方範本偏「快速教學」、不分 vertical；現存 widget store（Themer、KWGT）非 vibe-code、需 KLWP 高門檻；Samsung Galaxy Store widget 庫缺中文化
- 切入建議：50 個 production-ready Create My Widget prompt 模板（健身追蹤、stock ticker、繁中農民曆、巴士 ETA、podcast 進度、Reddit subreddit watch、Notion daily snapshot）；單模板 $5、全包 $49 lifetime；前 1,000 名免費換 newsletter 訂閱；YouTube 短片每模板拍 30 秒 demo

## 🧰 工具堆疊更新

- **如果你用 @tanstack/* 或走 GitHub Actions 自動 publish**：本週優先 audit `.github/workflows/` 中 `pull_request_target` 使用、加 `actions/checkout` 的 `persist-credentials: false`、把 OIDC token 留存縮到只在 publish step；對 5/11 19:20–19:26 UTC 間 install 的開發機做 forensic（檢查 ~/.npmrc、Actions runner cache、新建 cron / launchd job）
- **如果你跑 Next.js App Router**：升 15.5.18 / 16.2.6 + React 19.x.6 對應 patch；Cloudflare 後面確認 5/7 emergency WAF rule 仍生效；自家 CI 加「每週掃 CVE-2026-23xxx / -44xxx / -45xxx」 GitHub Action；boilerplate 賣家本週把 patch policy 寫進 README
- **如果你跑 Vercel + Anthropic Claude Opus 4.7**：本週把互動式 chat-loop 切到 Fast mode research preview（waitlist）；批次任務維持標準路徑；同時把 5/7 JSON values 加 5/14 progressive rollouts 串「Opus 4.7 → Opus 4.7 Fast 兩週漸進切換」實驗範本
- **如果你跑 Vercel Sandbox**：本週用 firewall forward + matchers 拆「外網 LLM = 公開、內網 API = 自管 proxy」；接企業 PoC 的把 credentials brokering 走 proxy 而非直接放 env
- **如果你跑 AWS + 想試 Anthropic**：5/14 Claude Platform on AWS 已可用 AWS billing + IAM auth；本週對既有 Bedrock workload 做「同 prompt × 三條路徑（Bedrock Claude / Claude Platform on AWS / Vercel AI Gateway）」latency + cost 對比
- **如果你做 Android 端產品**：5/12 Create My Widget 今夏上線，本週列出自家服務「能變 widget 的 3 條 surface」；5/19–20 Google I/O 再看 SDK 公開節奏；Googlebook 出貨秋季前先把自家 web app 在 Chrome / Android 大螢幕的 layout 過一次

## ⚡ 今日行動建議

- [ ] 自家 GitHub Actions：掃 `.github/workflows/*.yml` 用 `pull_request_target` 的位置，加 `persist-credentials: false`、把 OIDC publish step 隔離出獨立 workflow（45 分鐘）
- [ ] 自家 npm / pnpm lock：列出 @tanstack/* 依賴版本；若 5/11 19:20–19:26 UTC 後安裝過、檢查 install 主機（pnpm: `pnpm why @tanstack/react-router`）（30 分鐘）
- [ ] 自家 Next.js 專案升 15.5.18 / 16.2.6 + React 19.x.6 對應 patch；跑一輪 Playwright smoke + 重新部署（30–60 分鐘）
- [ ] 自家 Anthropic 重度互動 path 加入 Vercel AI Gateway Fast mode for Opus 4.7 waitlist；列「哪 3 條 prompt loop 適合先切」（15 分鐘）
- [ ] 自家 Vercel Sandbox：把 1 條走企業內網 API 的 function 切到 firewall forward + matcher，credentials brokering 走 self-managed proxy（45 分鐘）

## ⏳ 待觀察

- Anthropic JV 是否在 5/19–20 Google I/O 前命名（5/14 deadline 已過、改觀察 6 月 IPO S-1）
- TanStack 攻擊後 7 天內：GitHub 是否對 `pull_request_target` 出官方安全 guidance（4/29 SAP CAP 變種事件後 GitHub 沒動）；npm 是否對 SLSA provenance 加 release window
- 5/19–20 Google I/O：Gemini 4.0 / Gemini Omni / Aluminum OS 是否正式發；Android XR SDK 給 indie 的 dev portal 開放程度；Gemini API rate limit / pricing 對 OpenAI Anthropic 的回擊
- 6/2–3 Microsoft Build：Azure AI Agent Service 是否擴大 Semantic Kernel / multi-agent workflows 開源；對標 Anthropic Agent Skills 12/2025、AG-UI 5/5 的開放標準動作
- 6/8–12 Apple WWDC：iOS 27 Siri 第三方 LLM extensions（Claude / Gemini）開放範圍；Xcode 內 Apple coding model 規格
- Claude Managed Agents Outcomes / Multi-agent orchestration 第二批 case study（7–14 天內 HN / Reddit r/LocalLLaMA / Anthropic blog 觀察）
- Cloudflare K2.5 → K2.6 alias 5/30 起跑後 indie 月帳實際漲幅（社群 7 天內可看出第一批數據）

[^slsa]: SLSA（Supply-chain Levels for Software Artifacts），OSSF / Google 主導的軟體供應鏈安全框架（讀作 "salsa"），定義 Level 1–4 與多項要求（build provenance、tamper-resistant 記錄、隔離環境等）；npm 自 2024 起逐步支援 `provenance: true` 把 GitHub Actions OIDC 簽章寫進 package metadata。5/11 TanStack 事件是首例「攜帶 valid SLSA provenance、但內容惡意」的 npm 套件，象徵單靠 provenance 驗證不足，需要 release window + 主動 audit 補強。

[^geminiintel]: Gemini Intelligence，Google 於 2026-05-12 Android Show 公布的品牌新稱呼，指「在進階 Android 裝置上跑的 Gemini 整合層」——含手機、手錶、車機、眼鏡、筆電；定位不只是 app，而是嵌入 OS 的 intelligence layer，與 Apple 的 Apple Intelligence 對標。Googlebook 是首批主打 Gemini Intelligence 的硬體。

[^createwidget]: Create My Widget，Google 於 2026-05-12 Android Show 公布的 vibe-code widget 建立功能：用自然語言描述（例如「顯示我今天的 ToDo」），Gemini 自動生成可放到 Home Screen 的 widget；今夏先在 Samsung Galaxy 與 Google Pixel 上線，是 Android widget 史上首次脫離 Java / Kotlin / KLWP 等正式 SDK 路徑、由 LLM 即時生成 UI 的範本。

[^geminiomni]: Gemini Omni，Google 預備於 2026 Google I/O（5/19–20）正式發表的 AI 影片生成模型；5/11 在 Gemini app 內部 UI string 與 Pro tier 使用者帳號意外洩漏出生成樣本；定位對標 OpenAI Sora、Runway Gen-4、Luma Dream Machine，可能與 Veo 系列並列為 Google 的 video model 主線。

[^rsc]: RSC（React Server Components），React 18 起新增的伺服器端渲染元件型別，元件在伺服器執行、把序列化結果送到瀏覽器渲染；Next.js App Router 預設使用 RSC。本月（2026/05）已連續三波 CVE 集中於 RSC 反序列化攻擊面（DoS、RCE、cache poisoning），對 React 19 與 Next.js 15/16 的 dependency-pin 政策造成壓力。

## 📚 引用來源

1. [TanStack npm Packages Hit by Mini Shai-Hulud | Snyk](https://snyk.io/blog/tanstack-npm-packages-compromised/) — 2026-05-12
2. [Mini Shai-Hulud Strikes Again: TanStack + more npm Packages Compromised | Wiz](https://www.wiz.io/blog/mini-shai-hulud-strikes-again-tanstack-more-npm-packages-compromised) — 2026-05-12
3. [Mini Shai-Hulud Worm Compromises TanStack, Mistral AI, Guardrails AI & More | The Hacker News](https://thehackernews.com/2026/05/mini-shai-hulud-worm-compromises.html) — 2026-05-12
4. [Shai-Hulud compromises the @tanstack ecosystem: 80+ packages | Endor Labs](https://www.endorlabs.com/learn/shai-hulud-compromises-the-tanstack-ecosystem-80-packages-compromised) — 2026-05-12
5. [TanStack npm Packages Compromised in Mini Shai-Hulud | Socket](https://socket.dev/blog/tanstack-npm-packages-compromised-mini-shai-hulud-supply-chain-attack) — 2026-05-12
6. [Shai-Hulud Worm Across the TanStack Ecosystem | Upwind](https://www.upwind.io/feed/shai-hulud-tanstack-supply-chain-worm) — 2026-05-12
7. [Mini Shai-Hulud hits TanStack & Mistral npm: CVE-2026-45321 | Lilting Channel](https://lilting.ch/en/articles/mini-shai-hulud-tanstack-mistral-npm-oidc) — 2026-05-12
8. [Mini Shai-Hulud Wave Hits 172 npm and PyPI Packages | Mend](https://www.mend.io/blog/mini-shai-hulud-is-back-172-npm-and-pypi-packages-compromised-in-latest-wave/) — 2026-05-13
9. [OpenAI launches the OpenAI Deployment Company | OpenAI](https://openai.com/index/openai-launches-the-deployment-company/) — 2026-05-11
10. [OpenAI Launches $4 Billion Company to Accelerate Enterprise AI Adoption | PYMNTS](https://www.pymnts.com/news/artificial-intelligence/2026/openai-launches-4-billion-dollar-company-accelerate-enterprise-ai-adoption/) — 2026-05-11
11. [OpenAI launches a standalone company for enterprise AI deployment | Neowin](https://www.neowin.net/news/openai-launches-a-standalone-company-for-enterprise-ai-deployment/) — 2026-05-11
12. [OpenAI Launches Deployment Company to Scale Enterprise AI Adoption | HPCwire / AIwire](https://www.hpcwire.com/aiwire/2026/05/11/openai-launches-deployment-company-to-scale-enterprise-ai-adoption/) — 2026-05-11
13. [OpenAI Deployment Company launch | Advent International](https://www.adventinternational.com/news/openai-launches-the-openai-deployment-company-to-help-businesses-build-around-intelligence/) — 2026-05-11
14. [Forward deployed engineering at OpenAI | OpenAI](https://openai.com/business/the-openai-deployment-company/) — 2026-05-11
15. [Everything announced at The Android Show | 9to5Google](https://9to5google.com/2026/05/12/the-android-show-2026/) — 2026-05-12
16. [Everything Google announced at its Android Show — Googlebooks, vibe-coded widgets | TechCrunch](https://techcrunch.com/2026/05/12/everything-google-announced-at-its-android-show-from-googlebooks-to-vibe-coded-widgets/) — 2026-05-12
17. [Android Show 2026 — Googlebook, Gemini Intelligence, Android Auto recap | Tom's Guide](https://www.tomsguide.com/phones/live/the-android-show-google-i-o-edition-live-all-the-latest-android-gemini-ai-and-android-xr-news-as-it-happens) — 2026-05-12
18. [Android Show: I/O Edition 2026 official recap | Google Blog](https://blog.google/products-and-platforms/platforms/android/android-show-io-edition-2026/) — 2026-05-12
19. [The Android Show: I/O Edition 2026 | android.com](https://www.android.com/new-features-on-android/io-2026/) — 2026-05-12
20. [Gemini Omni leak ahead of Google I/O 2026 | FelloAI](https://felloai.com/google-gemini-omni/) — 2026-05-12
21. [Next.js May 2026 security release | Vercel](https://vercel.com/changelog/next-js-may-2026-security-release) — 2026-05-14
22. [Next.js & React security release (May 2026) | Netlify](https://www.netlify.com/changelog/2026-05-08-react-nextjs-security-vulnerabilities/) — 2026-05-08（含後續更新）
23. [Critical RCE Vulnerabilities in React and Next.js | Endor Labs](https://www.endorlabs.com/learn/critical-remote-code-execution-rce-vulnerabilities-in-react-and-next-js) — 2026-05 查閱
24. [CVE-2026-23864: React and Next.js DoS via Memory Exhaustion | Akamai](https://www.akamai.com/blog/security-research/cve-2026-23864-react-nextjs-denial-of-service) — 2026-05 查閱
25. [Fast mode for Opus 4.7 available on AI Gateway | Vercel](https://vercel.com/changelog/fast-mode-for-opus-4-7-available-on-ai-gateway) — 2026-05-14
26. [Claude Opus 4.7 on AI Gateway | Vercel](https://vercel.com/changelog/opus-4.7-on-ai-gateway) — 2026-05 查閱
27. [Claude Opus 4.6 Fast Mode: 2.5x Faster, Same Brain | Build Fast With AI](https://www.buildfastwithai.com/blogs/claude-opus-4-6-fast-mode) — 2026 查閱
28. [Vercel Changelog](https://vercel.com/changelog) — 2026-05-14 查閱
29. [Anthropic Release Notes — May 2026 | Releasebot](https://releasebot.io/updates/anthropic) — 2026-05 查閱
30. [Claude Code Updates — May 2026 | Releasebot](https://releasebot.io/updates/anthropic/claude-code) — 2026-05 查閱
31. [Claude Code Changelog](https://code.claude.com/docs/en/changelog) — 2026-05 查閱
32. [Claude Help Center release notes](https://support.claude.com/en/articles/12138966-release-notes) — 2026-05 查閱
33. [AI agent startup Sierra valued at $15B in new $950M funding round | SiliconANGLE](https://siliconangle.com/2026/05/04/ai-agent-startup-sierra-valued-15b-new-950m-funding-round/) — 2026-05-04
34. [CopilotKit raises $27M to help devs deploy app-native AI agents | TechCrunch](https://techcrunch.com/2026/05/05/copilotkit-raises-27m-to-help-devs-deploy-app-native-ai-agents/) — 2026-05-05
35. [Anthropic Partners with Blackstone, Hellman & Friedman, and Goldman Sachs | Anthropic](https://www.anthropic.com/news/enterprise-ai-services-company) — 2026-05-04
36. [Anthropic Partners with GIC to Launch Enterprise AI Services Firm | GIC](https://www.gic.com.sg/newsroom/all/anthropic-partners-with-blackstone-hellman-friedman-and-goldman-sachs-to-launch-enterprise-ai-services-firm/) — 2026-05 查閱
