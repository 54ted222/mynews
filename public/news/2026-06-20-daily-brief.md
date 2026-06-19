---
title: 每日創業情報 — 2026-06-20
date: 2026-06-20
tags: 創業情報, AI 產業, SaaS
summary: Fable 5 退費窗口今晚 23:59 截止、6/9–6/14 升級的 Pro/Max/Team 訂閱要立刻送單；GPT-5.6 Polymarket 83% 命中 6/22–6/28、context 拉到 1.5M；Harvey 開新加坡辦公室、Cloudflare 把 Kimi K2.7 Code 與 GLM-5.2 上 Workers AI。
keywords: Fable 5 refund deadline 11:59 PM June 20 2026 Anthropic Pro Max Team prorate, GPT-5.6 Polymarket 83% June 22 28 launch 1.5M context GPT-Bidi-1, Harvey Singapore office APAC NUS Law Rajah Tann 40 hires 2027, Mastra ehindero LinkedIn phishing root cause former contributor scope revoke, pnpm v10 postinstall block npm yarn lifecycle script supply chain, Cloudflare Workers AI Kimi K2.7 Code GLM-5.2 262K context Z.ai, Cursor Bugbot Composer 2.5 90 seconds 1.62 bugs run review command, Antigravity CLI weekly compute cap cooldown Reddit June 19 paperweight, Devin Desktop ACP Codex Claude OpenCode Junie Gemini CLI June 2 rebrand, hybrid SaaS pricing 43% 61% 2026 indie founder usage seat outcome
---

# 每日創業情報 — 2026-06-20

## 🎯 今日 TL;DR

- **Fable 5 退費窗口今晚 23:59（美西）就關**：Anthropic 對 6/9–6/14 升級 Pro/Max/Team 但因 6/12 商務部禁令而沒用到 Fable 5 的訂閱戶開放 prorated 退費，**今天是最後一天**——已升級的 indie 沒申請就吃下去；同時 Fable 5 對 paid subscribers 的免費試用窗 6/22 收尾。**沒升、或升了已實際使用到 Mythos-class capability 的不在退費範圍**，分清楚。
- **GPT-5.6 下週上線機率 83%**：Polymarket 把 6/22–6/28 區間機率定在 83%、市場共識指向 6/24（週二），OpenAI 內部訊號顯示 context 拉到約 1.5M tokens（GPT-5.5 是 1M、+43%），同步發 GPT-Bidi-1[^bidi] 雙向音訊模型直接挑 ChatGPT Advanced Voice Mode。**做 LLM router 的 indie 下週要重設 weight、跑新 SWE-Bench Pro / Terminal-Bench 2.2 比較**；做語音 agent 的要評估是否 fork 出 Bidi 專線。
- **Harvey 6 月開新加坡辦、APAC 第三站、5 月才開巴黎**：CEO Winston Weinberg 承認「APAC 是主要成長引擎」，已簽 Rajah & Tann、Drew & Napier、Lee & Lee、Oon & Bazul、TSMP、Airwallex、新加坡司法部；NUS Faculty of Law 列為策略合作教育機構；新加坡團隊 6 個月內目標 32 hires、1H 2027 擴到 40 人。**Harvey 走完 Sydney (2024)、Bengaluru、Paris、Singapore (6 月)、Chicago (7 月) 路線後，台灣 / 香港 / 東京就是下一波**——華語區律所做 Harvey shadow stack 的 6–9 個月視窗已開。

## 🔄 昨日追蹤

### Mastra 6/17 npm scope takeover 🔄 → root cause 正式歸因「LinkedIn 社交釣魚 + 未撤回的舊 contributor 帳號」

Microsoft、Snyk、StepSecurity、Orca、SafeDep、OX Security 5 家 IR 報告交叉一致：被劫持的 `ehindero` 是**前 contributor**，scope access 沒在離專案時被收回；攻擊者透過 LinkedIn 假徵才連線、誘導點擊偽裝面試平台的 link，竊取 npm publish token。Mastra 維運在 GitHub issue [#18061](https://github.com/mastra-ai/mastra/issues/18061) 公佈 IR 後，**還沒回應「為何 contributor 離開時沒走撤權 SOP」**——這是事件最具教訓的一條。對 indie SaaS 兩個直接動作：(1) 立刻盤 npm 組織 / GitHub org 的歷史 collaborator 並掃 stale token；(2) `npm config set ignore-scripts true` 或直接遷 pnpm v10（postinstall / preinstall 預設關，攻擊面砍掉一塊）——npm 與 yarn classic 至今仍預設執行 lifecycle script。

### Antigravity CLI 6/18 hard cut Gemini CLI 🔄 Day 2 — quota 每週上限被 Reddit 噴爆

Google 把 Gemini CLI 1,000 req/day 改成 Antigravity CLI **weekly compute-based cap**，重度使用者（>200 req/day）反映 **2–3 天內燒完、之後多日 cooldown**；Google 也明說「launch 不會 1:1 feature parity」。Migration guide 教大家把舊 Node.js 工具流改 Go binary，但 background agent 流程（project-wide refactor 不鎖 terminal）對 indie 是新賣點。**正在賣 Gemini CLI 自動化 workflow 的 dev tool agency 14 天熱期還在**：寫 cheat sheet、charge $500–$1,500 做 audit。

### Anthropic 6/15 雙池撤回 → 6/16 正式 confirm「revising the plan」🔄 第 5 天 + 新 MCP Okta 連線器同步

繼 6/15 撤回 ACP[^acp] / `claude -p` / Agent SDK 雙池後，Anthropic 在 Help Center 正式聲明 billing change **暫不生效、任何新版上路前會先預告**；同期同推 **Enterprise-managed MCP connector access**（首發 Okta）——admin 一次配 connector、user 第一次登入零觸點，Team / Enterprise plans 可用，跨 Claude chat / Claude Code / Cowork 集中授權。**indie 沒事，但留意：Okta MCP 一旦穩定，Auth0 / Clerk / WorkOS 顯然下一步**，做 Claude integration 顧問的可提早接 RFP。

### Cursor Bugbot 7/1 計價改 usage-based 🔄 倒數 11 天 + 6/10 Composer 2.5 新數字

6/10 那一波 update（Composer 2.5）數字出來了：平均 review 從 5 分鐘掉到 **90 秒**、**每 run 找到 1.62 個 bug（前一版 0.56、+189%）**、**每 run 成本 –22%**、90% run 在 3 分鐘內完成。新 command 來了：`/review`（選跑哪個 agent）、`/review-bugbot`、`/review-security`，且 push 已 review 過的 diff 開 PR 會跳過、留 comment。**這把 CodeRabbit Pro $24/seat、Greptile $30/seat 的差異化壓力直接拉大**；做 PR review 顧問的別再賣「人工 + Bugbot」，改賣「Bugbot 拒絕誤判清單 + 自家 rules 集」。

## 📰 AI 產業動態

| 事件 | 影響 | 機會 / 威脅 | 來源 |
| ---- | ---- | --------- | ---- |
| Fable 5 退費窗 6/20 23:59 截止；6/22 paid subscriber 免費試用同步結束 | Pro / Max / Team 在 6/9–6/14 升級且未實際用到 Mythos-class capability 者可申請 prorated 退款 | 機會：訂閱戶要立刻送單、可順手寫「Fable 5 stack 重設」audit；威脅：升級時點選錯週末沒回信會錯過 | [Tech Jacks](https://techjacksolutions.com/ai-brief/ai-models-news-fable-5-refund-window-closes-june-20-what-pro/) |
| GPT-5.6 Polymarket 6/22–6/28 命中機率 83%；1.5M context；GPT-Bidi-1 雙向音訊 | OpenAI chief scientist 公開描述為「meaningful leap」、Pro 用戶已抓到 GPT-5.6 Pro build trace | 機會：LLM router 重排權重、語音 SaaS 卡位 Bidi 介面；威脅：上線 24h prompt 漂移、現有 eval 全部要 rerun | [TechTimes](https://www.techtimes.com/articles/318492/20260616/gpt-56-openai-chief-scientist-calls-it-meaningful-leap-june-launch-nears.htm) / [Polymarket](https://polymarket.com/event/when-will-gpt-5pt6-be-released) |
| Harvey 6 月開新加坡辦公室、目標 6 個月 32 hires；簽 Rajah & Tann、Drew & Napier、新加坡司法部、Airwallex、NUS Law | APAC 第三站、繼 Sydney / Bengaluru 後，跨境法律 AI 進入華語法系前夜 | 機會：台 / 港律所做 Harvey shadow stack 的 6–9 個月顧問視窗；威脅：本地 legal SaaS 被輾壓 | [Harvey blog](https://www.harvey.ai/blog/harvey-to-open-singapore-office-in-june) |
| Mastra 6/17 事件 root cause：LinkedIn 假徵才釣魚 + 未撤回 ex-contributor (`ehindero`) scope access | 5 家 IR 全部歸因 BlueNoroff（Sapphire Sleet）[^bluenoroff]，新管理風險：舊 collaborator 名單就是 attack surface | 機會：賣 npm / GitHub org access audit + collaborator pruning SOP；威脅：仍跑 npm 預設 install 的 SaaS 隨時可能再中招 | [Snyk](https://snyk.io/blog/a-forgotten-contributor-account-compromised-the-entire-mastra-npm-package-scope/) / [StepSecurity](https://www.stepsecurity.io/blog/mastra-npm-packages-compromised-using-easy-day-js) |
| Cloudflare Workers AI 加入 Kimi K2.7 Code（1T MoE[^mxe] / 256K / 開源 Modified MIT）與 Z.ai GLM-5.2，再開 Durable Object Facets + Mesh VPC | indie 不必租 GPU、可在 Workers Edge 直接打 K2.7 Code，每千 tokens 推估顯著低於 Claude / GPT | 機會：把 router 改成「Claude 給高代碼複雜度 + K2.7 跑 batch 任務 + Workers 跑 edge」三層；威脅：Cursor / Devin 加深綁定，獨立工具流壓力升 | [Cloudflare changelog](https://developers.cloudflare.com/changelog/product/workers-ai/) |

## 🛠 新興 AI 工具

| 工具 | 類別 | 用途 | 定價 | 與主流差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ------ | -------- |
| **Kimi K2.7 Code on Workers AI**（6/19 上架，模型本體 6/12 release） | open-source coding model + edge inference | 跑 batch refactor / 文件總結 / agent 長任務 | API $0.95 / $4.00 per 1M in/out；Workers AI 用 CF 計價 | 1T MoE、32B active、256K context、reasoning token –30%、Modified MIT 可商用；對標 Claude Opus 4.8 但價差 ~6× | 把 router 中低複雜度 task 全切到 K2.7、Claude 留 Opus 給 high-stakes diff |
| **Devin Desktop（前 Windsurf，6/2 rebrand）+ ACP** | IDE 殼層 + agent 路由 | 同一 editor 跑 Codex / Claude Agent / OpenCode / Junie / Gemini CLI / Devin Cloud 多 agent | 沿用前 Windsurf plan / pricing | ACP 開放協議讓 IDE 與 agent 解耦；Kanban 介面集中管理 cloud + local agent | 不換 IDE 也可借鏡 ACP 接 Claude Code subagent 與 Codex 平行跑 |
| **Cloudflare Mesh + Workers VPC**（6/19 同梯） | agent infra | 給 agent 範圍限定的 private DB / API 存取，免手刻 tunnel | 隨 Workers / VPC 計費 | 取代 ngrok / Tailscale 在 agent 場景的 ad-hoc tunnel | 做 agent SaaS 接客戶內網時的 onboarding 卡片可直接寫 Mesh |
| **pnpm v10 default `ignore-scripts`** | package manager | 預設關 postinstall / preinstall，需 allowlist | OSS 免費 | npm / yarn classic 至今未跟進；Bun、Yarn Berry 已類似 | 馬上遷 pnpm 或 `npm config set ignore-scripts true`；CI image 同步換 |
| **Cursor `/review` + Composer 2.5 Bugbot**（6/10 update） | PR review | 90 秒做完一輪 review、找 1.62 bugs/run、跳過 already-reviewed diff | Pro $20/mo（7/1 改 usage-based） | 比 CodeRabbit Pro $24/seat、Greptile $30/seat 更深入 IDE | 自家 PR template 加 `/review` 為合併前必跑 |

## 💡 SaaS 點子

### 點子 1：「Fable 5 退費快篩 + 訂閱結構重排」chatbot 與 1 對 1 audit 🆕

- **痛點來源**：今天 23:59 退費就關，Pro / Max / Team 用戶分不清自己「升級了但沒用到 Fable 5」是否符合；客服回信慢、社群討論串資訊雜亂。
- **目標客群**：6/9–6/14 升級 Anthropic 訂閱的 indie / 小工作室（北美 + 亞洲皆有）。
- **技術複雜度**：1/5（單頁表單 + 規則引擎 + GA / Plausible 蒐集點擊事件）。
- **預估 MRR**：今天 24 小時內可賣 $19 一次性審核 + $99 訂閱結構重排，估算 50–150 單、$1.5K–$5K LTV（一次性事件、不續）。
- **競品弱點**：Anthropic 客服只回是 / 否；沒人在賣「退費 + 替代訂閱重排」打包。
- **切入建議**：今晚 4 小時內推 LP + Twitter / Threads；明天起轉做「Fable 5 後 stack 重設」audit。

### 點子 2：「Harvey APAC shadow stack」華語法系顧問包 🆕

- **痛點來源**：Harvey 6 月開新加坡、簽 Rajah & Tann / Drew & Napier 與 NUS Law，台 / 港 / 中律所看到競爭壓力但不知怎麼起手。
- **目標客群**：台北 / 香港中型律所（30–200 人）、跨境交易與 IP 業務佔比 >30% 者。
- **技術複雜度**：3/5（Claude Code / Cowork 部署 + 中文法律語料 RAG + LegalBench 評測 + 資安 / GDPR 報告）。
- **預估 MRR**：單案 $20K–$50K 顧問費 + $3K–$8K 月維運；6 個月窗內可接 3–5 個案、年化 $200K–$500K。
- **競品弱點**：Harvey 本地化要 2027 Q1 後才會落 APAC 華語版；本土 SaaS 沒法律專屬模型。
- **切入建議**：先以「不取代 Harvey、補 Harvey 不做的繁中合約 + 台灣 case law」定位；接 NUS Law / 台大 / 政大法律院校 做 case study。

### 點子 3：「Kimi K2.7 × Claude Opus 4.8 router cost optimizer」開源工具 + audit 🆕

- **痛點來源**：6 月以來 Claude / OpenAI 連續調價 + Cloudflare 上架 K2.7 Code，indie 想省 60–70% 推理成本但不會切；router 多 model fallback 邏輯沒人標準化。
- **目標客群**：月 LLM 帳單 $500–$10,000 的 indie SaaS / agency。
- **技術複雜度**：3/5（Hono + Workers AI + Anthropic SDK + 路由評分演算法 + 觀測 dashboard）。
- **預估 MRR**：開源工具當引流 + audit $1,500 / $3,000 / $6,000 三檔；6 個月可達 $5K–$15K MRR。
- **競品弱點**：OpenRouter / Portkey 只給 routing 不給「成本節省 audit + 數據後驗」；Cloudflare Workers AI 缺成本決策工具。
- **切入建議**：先做 1 個 case「把月帳 $3,000 砍到 $1,200」配真實 dashboard 截圖 + token 拆解，HN / r/SaaS 發文。

## 🧰 工具堆疊更新

- **GitHub Copilot 6/1 全面改 usage-based**：原月費取消、改 GitHub AI Credits、按 token 計。**Uber 整年 AI 預算 4 個月內燒光**，Claude Code 採用率從 32% → 84%、單工程師月帳 $500–$2,000；Microsoft Experiences & Devices 部門 6/30 起改用 Copilot CLI、退掉 Claude Code。**indie 看：個人裝 Copilot 還是 $10、但企業合約已不再保證 flat-rate**。
- **pnpm v10 default `ignore-scripts`**：Mastra 事件直接讓這個本來只是「nice to have」的開關變必選；CI image、Dockerfile、`package.json` 三個地方今天就改。
- **hybrid SaaS pricing 43% → 61% by EOY 2026**：base $29–$49 + usage overage 的雙軌格式被廣泛 adopt；CRV 數據顯示 hybrid 模式年化營收 +38%、NDR[^ndr] +38%；indie 新上線產品 day 1 採 hybrid 已成共識，pure seat 例外。

## ⚡ 今日行動建議

- [ ] **送 Fable 5 退費單**（如有 6/9–6/14 升級紀錄）：到 Anthropic billing → Contact support → 引述 "Fable 5 export ban prorated refund window"；**今晚 23:59 PT 前必完成**。預期成本 0、產出可退 $20–$200。
- [ ] **盤 npm / GitHub org 的 stale collaborator**：3 條 command — `npm org ls <scope>`、`gh api orgs/<org>/members`、檢查最後活動 > 6 個月者撤權；同步 `npm config set ignore-scripts true` 或 PR 換 pnpm v10。預期 1–2 小時、產出 1 份內部「collaborator hygiene SOP」可重複用。
- [ ] **寫一篇「GPT-5.6 跨 model 評測 prep」推文 / newsletter**：列出你自家 SaaS 用 Claude / GPT 的 5 個關鍵 prompt + eval scoreset，下週 GPT-5.6 上線當天即可跑 A/B。預期 2 小時、產出 PV 與 inbound 顧問詢問各 1 條。

## ⏳ 待觀察

- GPT-5.6 是否 6/24 準時上線、是否同梯出 Pro variant；OpenAI 官方公告若 6/22 前未出將 Polymarket 機率重排
- Anthropic billing change 修訂版預告窗口（已撤回但官方說「will share advance notice before any future change」）；indie agentic 訂閱戶要留意 7 月初信件
- Harvey 新加坡完成 32 hires 速度（Q3 末 vs 2027 1H）；NUS / SMU / 港大 / 台大同類合作會不會被搶簽
- Cursor 7/1 Bugbot usage-based 上線後價差實測；可能拉動 CodeRabbit / Greptile 同步調價
- Mastra 維運是否補發 contributor pruning SOP；npm 是否公告強制收回 stale collaborator scope
- Cloudflare K2.7 / GLM-5.2 上 Workers AI 後實測延遲與費率；Z.ai 是否同步在亞洲區 PoP 加碼
- 6/22 Fable 5 paid subscriber 試用窗收尾後 Anthropic 對 Mythos-class 是否有新出貨節奏（rumor 點向 6 月底 Sonnet 4.8 也有版本變動）

[^bidi]: GPT-Bidi-1 是 OpenAI 預計與 GPT-5.6 同梯推出的雙向音訊（bidirectional audio）基礎模型，設計上同時做 ASR 與 TTS、可在說話的同時聽輸入，主打「打斷友善」的真實對話節奏。產業定位類似 Google Gemini Live 的下一代、ChatGPT 既有 Advanced Voice Mode 將與 Bidi 並存。

[^acp]: Agent Client Protocol，由 Cognition 主導推出的開放協定，定義 IDE 殼層與 coding agent 之間的雙向通訊規格。讓單一 IDE 可同時掛載 Codex、Claude Agent、OpenCode、Junie、Gemini CLI 等任何相容 agent，使用者不必為了換 agent 而換編輯器；產業定位類似 LSP 對程式語言伺服器、或 MCP 對工具呼叫。

[^bluenoroff]: BlueNoroff 是北韓國家級駭客組織 Lazarus Group 的子單位，又被資安業界稱為 Sapphire Sleet 或 APT38。早年以 SWIFT 銀行系統與加密貨幣交易所盜竊聞名，近兩年戰術轉向 supply chain 與 developer-targeting，常見手法包含 LinkedIn 招募詐騙、惡意 npm / PyPI 套件、以及偽裝會議軟體的木馬，目的是抓開發者機台上的 wallet 與 API key。

[^ndr]: Net Dollar Retention 的縮寫，中文常譯「淨收益留存率」，計算「同一批訂閱客戶」在 12 個月後（含 expansion、downgrade、churn 後）相對原 ARR 的比例。SaaS 業界視 NDR > 110% 為健康、> 130% 為頂尖；hybrid pricing 之所以拉抬 NDR，是因為 expansion 走用量自動長、不需要重新 upsell。

[^mxe]: Mixture of Experts，混合專家架構。模型總參數量很大（如 K2.7 Code 1T），但每個 token 只啟動一小部分「expert」（K2.7 是 32B），相當於同時保持容量與推理成本優勢。Anthropic 從 Sonnet 3.5 後也採類似設計；GPT-4 / GPT-5 系列普遍被推測為 MoE。

## 📚 引用來源

1. [Fable 5 Refund Window Closes June 20: What Pro, Max, and Team Subscribers Must Do](https://techjacksolutions.com/ai-brief/ai-models-news-fable-5-refund-window-closes-june-20-what-pro/) — Tech Jacks Solutions, 2026-06-19
2. [GPT-5.6: OpenAI Chief Scientist Calls It a Meaningful Leap, June Launch Nears](https://www.techtimes.com/articles/318492/20260616/gpt-56-openai-chief-scientist-calls-it-meaningful-leap-june-launch-nears.htm) — TechTimes, 2026-06-16
3. [When will GPT-5.6 be released?](https://polymarket.com/event/when-will-gpt-5pt6-be-released) — Polymarket
4. [Harvey to Open Singapore Office in June](https://www.harvey.ai/blog/harvey-to-open-singapore-office-in-june) — Harvey, 2026-06
5. [NUS Law strengthens AI-enabled legal education through collaboration with Harvey](https://news.nus.edu.sg/nus-law-ai-enabled-legal-education-harvey/) — NUS News
6. [A Forgotten Contributor Account Compromised the Entire @mastra npm Package Scope](https://snyk.io/blog/a-forgotten-contributor-account-compromised-the-entire-mastra-npm-package-scope/) — Snyk, 2026-06
7. [Mastra npm Supply Chain Attack: 140+ Packages Backdoored via easy-day-js Typosquat](https://www.stepsecurity.io/blog/mastra-npm-packages-compromised-using-easy-day-js) — StepSecurity, 2026-06-18
8. [INCIDENT REPORT 2026-06-16: Mastra hit by supply-chain attack](https://github.com/mastra-ai/mastra/issues/18061) — GitHub Issue
9. [Cloudflare Workers AI Changelog (Kimi K2.7 Code, GLM-5.2, Durable Object Facets, Mesh)](https://developers.cloudflare.com/changelog/product/workers-ai/) — Cloudflare, 2026-06-19
10. [Kimi K2.7-Code: Moonshot AI Open Coding Model (1T MoE, Modified MIT)](https://www.explainx.ai/blog/kimi-k2-7-code-open-source-coding-model-2026) — explainx.ai, 2026-06-12
11. [Cursor Bugbot Reviews in 90 Seconds: The June Update](https://www.digitalapplied.com/blog/cursor-bugbot-90-second-reviews-june-2026-release) — Digital Applied, 2026-06-10
12. [Anthropic pauses Claude Agent SDK subscription change on day it was due to take effect](https://thenewstack.io/anthropic-pauses-claude-agent-sdk-subscription-change/) — The New Stack, 2026-06-16
13. [Windsurf is now Devin Desktop](https://devin.ai/blog/windsurf-is-now-devin-desktop) — Cognition, 2026-06-02
14. [Gemini CLI Dies June 18: The Antigravity Migration Guide](https://www.digitalapplied.com/blog/gemini-cli-to-antigravity-cli-migration-june-18-2026-guide) — Digital Applied, 2026-06-18
15. [npm Supply Chain Security in 2026: What Your Package Manager Does (and Doesn't) Protect You From](https://mondoo.com/blog/npm-supply-chain-security-package-manager-defenses-2026) — Mondoo, 2026-06
16. [Hybrid Pricing in SaaS 2026: Seats, Usage, Outcomes](https://www.saasmag.com/hybrid-pricing-saas-growth-2026/) — SaaS Mag, 2026
