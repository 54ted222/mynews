---
title: 每日創業情報 — 2026-06-21
date: 2026-06-21
tags: 創業情報, AI 產業, SaaS
summary: Cursor 3.8 /automate 把一次性 prompt 變 always-on agent；Baseten 傳完 $1.5B @ $13B 五個月翻 2.6 倍、open source inference 需求上桌；Claude Code 6/19 加自動安全模式 + 自架 sandbox / MCP tunnel GA；GLM-5.2 已在 Workers AI、價差對 Claude 約 6×。
keywords: Cursor 3.8 automate skill always on agents June 18 2026 GitHub Slack triggers computer use, Baseten 1.5B Series F 13B valuation June 18 19 2026 Altimeter Conviction Spark Capital inference, Claude Code June 19 2026 auto mode safety destructive git terraform block self hosted sandbox MCP tunnel public beta, GLM-5.2 Z.ai 744B MoE 40B active MIT Terminal Bench 81 SWE-bench Pro 62, OpenAI GPT-5.6 release Polymarket 83 percent June 22 28 1.5M context launch countdown, MCP 2026-07-28 release candidate stateless protocol Tasks Apps authorization hardening deprecation, Qualcomm Tenstorrent acquisition 10 billion June 16 RISC-V AI chip Jim Keller, Fable 5 refund window closed June 20 23:59 PT post mortem indie Anthropic Pro Max Team prorated, OpenAI Realtime API GA GPT-Realtime-2 Translate Whisper voice agent indie SaaS, Replit Enterprise self serve pricing page June 2026 per user agent spend limit
---

# 每日創業情報 — 2026-06-21

## 🎯 今日 TL;DR

- **Cursor 3.8（6/18）把 `/automate` 推成「always-on agent」核心命令**：在普通 local agent session 內 `/use /automate`、用自然語言描述要自動化的 task，Cursor 會幫你配 triggers（GitHub PR、Slack 表情符號、schedule、webhook、incident tool）+ instructions + tools；computer use 預設啟用、可在 instructions 內要 agent demo 自己跑過一輪結果。**對 indie 兩條 immediate**：(a) 自家 PR review / nightly refactor / Slack 客服 triage 直接從 GitHub Actions / cron 遷到 Cursor automation，省一條 CI 維護；(b) 做 dev tool agency 的 indie 接「Cursor 3.8 automation playbook」audit $1.5K–$5K，把客戶現有 GitHub Actions / Zapier / n8n 工作流改寫成 `/automate` SOP，中文供給為零。
- **Baseten[^baseten] 傳 6/18–19 完成 $1.5B @ $13B（五個月內估值從 $5B 翻 2.6 倍）**：Altimeter / Conviction / Spark Capital / Sands Capital / Wellington 共領；deal 是 dual-tier 結構（部分 $11B 部分 $13B）；客戶用 open source 模型替代昂貴 closed-source 的 demand 是直接推力。**對 indie 三條訊號**：(a) Baseten 估值跳 = 「LLM router 走 open source 路線」基本面 confirm，把 Claude / GPT 留給 high-stakes、其餘改 GLM-5.2 / K2.7 / Llama 4 已是主流動作；(b) 「自架 inference 還是用 Baseten / Modal / Replicate / Fireworks」決策被 indie 反覆問，3 家對比 audit $1.5K–$3K 是 7 天 hot niche；(c) Anthropic IPO 12/15 倒數 + Baseten $13B 連動，Anthropic 自家 inference cost narrative 客戶提案多加一頁「open source fallback」reframe。
- **Claude Code 6/19 更新加自動安全模式 + 自架 sandbox / MCP tunnel[^mcp-tunnel] GA**：Claude Code 6/19 把 `git reset --hard` / `git checkout -- .` / `git clean -fd` / `git stash drop` 在「使用者沒明說要丟掉本地變更」時直接 block；`git commit --amend` 在「commit 不是 agent 這 session 做的」時 block；`terraform destroy` / `pulumi destroy` / `cdk destroy` 預設要指定 stack；同期 Claude Platform 自架 sandbox 與 MCP tunnel 都 GA（先前是 public beta / research preview，5/26 Code with Claude London 公告）。**對 indie 兩條落地**：(a) Auto mode 終於敢開——本來怕「agent 一鍵 reset --hard 把 4 小時工作沖掉」的 indie 今天起 1 週測試把 `--auto` 寫進 GitHub Actions；(b) 接「金融 / 醫療 vertical SaaS 把 Claude Code agent loop 留在 Anthropic、tool execution 拉回自家 VPC」audit + 部署 $5K–$25K，搭 Cloudflare / Daytona / Modal / Vercel 任一家 sandbox provider、用 MCP tunnel 替 ngrok / Tailscale 的 ad-hoc 隧道，是亞洲 regulated SaaS 第一次有公開 reference architecture。

## 🔄 昨日追蹤

### Fable 5 退費窗 ✅ 6/20 23:59 PT 已關 → 6/22 paid subscriber 免費試用同步收尾倒數 1 天

退費窗如預告於台北時間 6/21 14:59 截止。Anthropic 沒有公開未送單戶數，但 Reddit / X / Threads 整晚有大量「我剛送掉、客服秒回 acknowledgement」迴響；**沒送單的 indie 已無補救路徑**，只能轉成「stack 重設 + Opus 4.8 baseline 確認」audit；同時 Fable 5 對 paid subscribers 的免費試用窗 **6/22 截止**——還沒實際跑過 Mythos-class capability 的人剩 1 天可摸一輪、決定要不要在 trial 後再升級。**訂閱戶今天的事**：跑一次 Opus 4.8 vs Sonnet 4.6 vs GPT-5.5 三軌 baseline，把客戶 PoC SLO 從「Fable 5 = next-best」改寫成「Opus 4.8 + Sonnet 4.6 + 第三家 fallback（GPT-5.6 / GLM-5.2）」三軌定論。

### GPT-5.6 launch window 🔄 倒數 1 天 → 6/22 起 7 天窗、Polymarket 仍 83%

Polymarket「6/22–6/28 命中」機率仍鎖 83%、市場共識點向週二 6/24；TestingCatalog 已抓到 GPT-5.6 / GPT-5.6-Mini / GPT-5.6-Pro 三 build trace；context 跳 1.5M（GPT-5.5 是 400K，+275%）為內部訊號最強。**indie 倒數 1 天 to-do**：(a) 自家 LLM router 重排權重模板今天就先寫好，6/22 上線當天直接套；(b) eval scoreset 至少留 10 條代表性 prompt + golden answer，6/24 上線 12 小時內跑完 A/B；(c) 寫 1 頁「GPT-5.6 對 indie 三條 immediate decision」中文短文，6/22 launch 後 1 小時內發 LinkedIn / Threads / Discord，中文供給仍接近零。

### Antigravity CLI Day 3–4 🔄 Reddit / X 主聲量轉「paperweight」case study；agy 仍未進 Homebrew / apt

XDA Developers 6/20 發專文「I tried Google's Antigravity for a week, and this limitation made me close it for good」，主訴 opaque credit system + 重度使用 2–3 天內 cooldown；Google 6/19–6/20 未推 Logic Patch v2.1.5+ 修 Logic Suspension（人類介入被 flag 為 inefficiency 反轉 commit）。**昨日提的「Antigravity Day 0 incident response」audit 7 天 hot 視窗仍開**：寫一頁「為什麼我把客戶從 Antigravity 退回 Claude Code + Codex 三軌」中文 case study，6/22–6/26 LinkedIn / Reddit r/programming 發。

### Mastra 6/17 npm scope takeover 🔄 6 天後 Snyk / StepSecurity / Microsoft 推「forgotten contributor」SOP 模板

整週社群把焦點從事件本身轉到「postinstall hook 預設要不要關」與「stale collaborator pruning SOP」。**對 indie 一條補強**：把 `npm config set ignore-scripts true` 或遷 pnpm v10 寫進新人 onboarding checklist + CI image；給服務客戶的「npm / GitHub org collaborator hygiene SOP」單頁可賣 $99–$299 lifetime（中文供給為零）。

### Cursor Bugbot 7/1 改 usage-based 🔄 倒數 10 天 + Cursor 3.8 automation 並行

Cursor 3.8 把 automation 推進 always-on agent 階段，與 Bugbot 7/1 改 usage-based（$1.00–$1.50/run）形成「automation 計次 + Bugbot 計次」雙計次模型。中型 dev team 預算今天起 10 天要重做——把「PR 數量 × Bugbot run + automation 觸發次數」估算 6 / 7 月對比，給 IT 主管做 ROI 決策表，是 7 天高優先 niche。

## 📰 AI 產業動態

| 事件 | 影響 | 機會 / 威脅 | 來源 |
| ---- | ---- | --------- | ---- |
| **Baseten 傳 6/18–19 完成 $1.5B @ $13B（5 個月內估值 ×2.6）**；dual-tier $11B / $13B；Altimeter / Conviction / Spark / Sands / Wellington 共領；客戶轉 open source inference 為直接推力 | 「LLM router 走 open source」基本面 confirm；Anthropic IPO 12/15 倒數時 Baseten / Modal / Fireworks / Replicate 四家成 indie 替代 inference 主供應商 | 機會：「自架 vs Baseten vs Modal vs Fireworks 3 家對比」audit $1.5K–$3K；幫客戶把月 LLM 帳 $3K–10K 砍 50% 寫 case study；威脅：單押 Claude / GPT API 的 indie 客戶提案多一頁「open source fallback」reframe | [TechCrunch](https://techcrunch.com/2026/06/18/ai-inference-startup-baseten-reportedly-raising-1-5b-months-after-its-last-mega-round/) / [MLQ News](https://mlq.ai/news/baseten-nears-15b-raise-at-13b-valuation-tripling-in-five-months/) / [SiliconANGLE](https://siliconangle.com/2026/06/18/ai-inference-provider-baseten-reportedly-raising-1-5b-funding/) |
| **Qualcomm 6/16 傳出洽購 Tenstorrent[^tenstorrent]、估值 $8–10B**；Jim Keller 創辦的 RISC-V AI chip startup；目標 data center + HPC 補齊 Qualcomm 在 NVIDIA / AMD 主導市場的空缺 | 對 indie 短期無直接影響，但是「RISC-V + open AI chip」第二個大廠背書（前一個是 AWS Trainium）；如果成交，下一波 inference cost reframe 從 6–12 個月後開始；對賭「NVIDIA H200 / B200 永遠是 default」narrative 的客戶提案需多一頁 | 機會：寫「indie AI SaaS chip dependency map：NVIDIA vs AMD vs Trainium vs Tenstorrent」中文 1 頁帶圖（中文供給為零）；對賣硬體 vendor 配合的台日 dev tool 顧問可順手接 PoC 詢問；威脅：押單一 chip vendor / cloud 的 SaaS narrative 6 個月內過時 | [Reuters via Yahoo Finance](https://finance.yahoo.com/technology/ai/articles/qualcomm-talks-acquire-ai-chip-230401789.html) / [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/qualcomm-mulls-taking-over-jim-kellers-tenstorrent-report-claims-deal-for-ai-chipmaker-would-value-the-company-at-between-usd8-billion-and-usd10-billion) / [The Register](https://www.theregister.com/systems/2026/06/16/qualcomm-said-to-be-circling-ai-chip-biz-tenstorrent-in-10b-risc-v-power-play/5256084) |
| **MCP 2026-07-28 spec RC 釋出**：stateless protocol core、Extensions framework、MCP Tasks、MCP Apps、authorization hardening、formal deprecation policy；6 件 SEP[^sep]（Specification Enhancement Proposal）聯動 | 取消 init handshake 與 protocol-level session header，把 remote MCP server 放在普通 HTTP infra 後變正常事；對 indie 自架 MCP server 落地門檻顯著降；Tasks / Apps 等於 MCP 自帶長任務 + UI 描述能力，多個 client 共用一份 server 變 default | 機會：把現有自架 MCP server 升 RC、寫「stateless MCP server in production」中文 case study；做 vertical MCP audit + 升級 retainer $1.5K–$5K + 7 天熱期 inbound；威脅：仍跑 stateful session 的舊 MCP server 7/28 後 client 相容性會逐漸退化、客戶會嫌「為何我家 MCP 不能放 Cloudflare Workers」 | [MCP Spec RC blog](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/) / [MCP roadmap 2026 — ChatForest](https://chatforest.com/guides/mcp-2026-roadmap-whats-coming/) / [MCP Dev Summit 2026 readout — Digital Applied](https://www.digitalapplied.com/blog/mcp-dev-summit-2026-readout-protocol-roadmap-analysis) |
| **Fable 5 退費窗 6/20 23:59 PT 已關 + 6/22 paid subscriber 免費試用窗收尾倒數 1 天**：Anthropic 未公佈未送單戶數；Reddit / X 整晚回報「客服秒回 acknowledgement」；6/22 後 Fable 5 / Mythos 5 對所有 plan 仍維持「export-control suspended」 | 6/9–6/14 升級但沒送單的 indie 訂閱費直接吃下；接下來 1 週客戶會以為「Fable 5 = 沒戲」直接把 PoC 改回 Opus 4.8 baseline；對賭「7/1 前復活」的 indie 11 天後 narrative 將決定 Opus 4.8 是否從「fallback」升「長期主力」 | 機會：賣「Fable 5 退費窗結束後 stack 重設」audit $1.5K–$5K + 1 週 retainer；首期主打把客戶 PoC SLO 改寫成「Opus 4.8 + Sonnet 4.6 + GPT-5.6 / GLM-5.2」三軌 fallback；威脅：訂閱戶不送單就吃悶虧；對賭「7/1 復活」未實現的 indie 客戶提案 narrative 要重寫 | [Tech Jacks Solutions](https://techjacksolutions.com/ai-brief/fable-5-refund-window-closes-june-20-what-anthropics-billing/) / [explainx.ai blog](https://explainx.ai/blog/when-will-fable-5-be-available-again-2026) |
| **GPT-5.6 launch window 6/22–6/28 倒數 1 天、Polymarket 仍鎖 83%**：TestingCatalog 抓到 5.6 / 5.6-Mini / 5.6-Pro 三 build trace；context 跳 1.5M（GPT-5.5 是 400K，+275%）；100+ tool calls agentic coding；FrontierMath tier 4 改進 | Fable 5 不可用後第一個 1M+ context 的 frontier model；做 LLM router 的 indie 下週要重設權重 + rerun SWE-Bench Pro / Terminal-Bench 2.2；做語音 agent 的要評估 GPT-Realtime-2（5 月 GA）+ GPT-5.6 配合 | 機會：6/22 launch 後 1 小時內發「GPT-5.6 對 indie 3 條 immediate」中文短文（中文供給接近零）；做 dev tool agency 包「GPT-5.6 1.5M vs Opus 4.8 1M vs GLM-5.2 1M vs Gemini 3 Pro 2M」四方對比 + KB rebuild PoC benchmark $1.5K–$5K；威脅：上線 24h 內既有 prompt 漂移、自家 eval 全要 rerun | [TechTimes](https://www.techtimes.com/articles/318492/20260616/gpt-56-openai-chief-scientist-calls-it-meaningful-leap-june-launch-nears.htm) / [Geeky Gadgets](https://www.geeky-gadgets.com/gpt-5-6-june-2026-release/) / [TestingCatalog](https://www.testingcatalog.com/openai-prepares-gpt-5-6-models-for-the-upcoming-release/) |

## 🛠 新興 AI 工具

| 工具 | 類別 | 用途 | 定價 | 與主流差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ------ | -------- |
| **Cursor 3.8 `/automate` + always-on agents（6/18）** | IDE 內 workflow automation | 用自然語言描述 task → Cursor 配 triggers（GitHub PR / Slack 表情 / schedule / webhook / incident tool）+ instructions + tools；computer use 預設啟用、可要 agent 在結尾 demo 一輪 | 沿用 Cursor Pro $20 / Teams 計價；automation 跑會吃 run 數（與 Bugbot 7/1 usage-based 同步） | 第一個把 always-on agent + computer use + Slack 表情 trigger 包進 IDE 的主流產品；對 GitHub Actions / Zapier / n8n 簡單流程是直接替代 | 自家 PR review / nightly refactor / Slack 客服 triage 從 GitHub Actions / cron 遷 1 條過去測；做 dev tool agency 包「automation 改寫 audit」$1.5K–$5K |
| **Claude Code 6/19 auto mode safety + self-hosted sandbox / MCP tunnel GA** | enterprise-grade coding agent | 自動 block 破壞性 `git reset --hard` / `terraform destroy` 等；`--amend` 限制在 agent 本 session；自架 sandbox（Cloudflare / Daytona / Modal / Vercel）+ MCP tunnel（outbound-only，免開 inbound port）正式 GA | Claude Enterprise / API 同價 | 第一次有 frontier coding agent 公開的「auto mode 不會把你 4 小時工作沖掉」承諾；regulated industry vertical 第一個有可抄的 reference architecture | indie 把 `--auto` 寫進 GitHub Actions 跑 1 週測；金融 / 醫療 vertical SaaS 包 self-hosted sandbox + MCP tunnel 部署 audit $5K–$25K |
| **Z.AI GLM-5.2（MIT 開源、6/12–6/19 已上 Cloudflare Workers AI / Together / OpenRouter / FriendliAI）** | open source coding LLM | 744B MoE[^moe] / 40B active；1M context；Terminal-Bench 2.1 81.0 / SWE-bench Pro 62.1（公開 open source 第一）；長 horizon coding agent trajectory 穩 | $1.40 / $4.40 per 1M in/out（FriendliAI）；cached input $0.26 per 1M | 跟 Claude Opus 4.8 價差約 6×；對 K2.7 Code 是同一 niche 的 dual-source 選項；MIT 可商用、客戶資料不出網域 | router 把中低複雜度 task 改 GLM-5.2、Claude Opus 留高 stakes diff；做 dev tool agency 包「GLM-5.2 vs K2.7 vs Sonnet 4.6 cost / latency」benchmark $1.5K–$3K |
| **OpenAI Realtime API GA（5/7 推、6 月持續滲透）：GPT-Realtime-2 + GPT-Realtime-Translate + GPT-Realtime-Whisper** | voice agent 三件套 | GPT-Realtime-2：GPT-5-class reasoning 跑連續串流音訊；Translate：70+ in / 13 out 語言；Whisper：streaming 低延遲 ASR | API 計費；GA 後價格進入 production-ready | 第一次有 GPT-5 等級 reasoning 直接吃 audio stream、不必拆成 ASR + LLM + TTS；對 Deepgram / ElevenLabs / Vapi 的 voice agent stack 是直接挑戰 | 做語音 SaaS / cross-border 客服 / 直播即時字幕的 indie 1 週內跑 PoC；做 dev tool agency 包「OpenAI Realtime vs Deepgram vs Vapi」3 家對比 + 1 段 case demo |
| **Replit Enterprise 6/19 開放自助購買 + per-user agent spend limit** | vibecoding 平台 | Pricing 頁可直接買 Enterprise（不必過 sales call）；Enterprise admin 可給單一 workspace member 設 agent spend cap（覆蓋 group / workspace default） | 沿用 Starter / Core / Pro / Enterprise 四軌；Core $100/月 | 第一次有 vibecoding 大廠把 enterprise plan 走 self-serve；per-user spend cap 對「agent 跑爆預算」是直接解 | 5–20 人 indie team 想統一 vibecoding 工具流可省 1 輪 sales；做 vibecoding 顧問的 indie 包「Replit Enterprise 落地 + spend cap policy」$3K–$8K |
| **MCP 2026-07-28 spec RC + MCP Tasks + MCP Apps** | agent 開放協定 | stateless protocol core 把 remote MCP server 放普通 HTTP infra 變正常；Tasks 支援長任務；Apps 定義可被多 client 共用的 UI 描述 | 開源規格、無計費 | 第一個正式有 deprecation policy 的版本；authorization hardening 變 enterprise 採購預設條件 | 自架 MCP server 升 RC、寫 1 篇中文「stateless MCP server in production」case study；做 MCP audit + 升級 retainer $1.5K–$5K |

## 💡 SaaS 點子

### 點子 1：Cursor 3.8 `/automate` 改寫顧問包（dev agency niche、7 天熱期）🆕

- **痛點來源**：Cursor 3.8 把 `/automate` + computer use + GitHub / Slack triggers 推成 always-on agent；多數 dev team 仍跑 GitHub Actions / Zapier / n8n 做 PR review / nightly refactor / Slack 客服 triage，但這些 workflow 的維運 / debug / 成本不透明；中文社群「Cursor automation playbook」幾乎為零，現有英文文章偏單一 trigger demo、不談多 trigger 組合與 ROI 計算。
- **目標客群**：5–50 人 dev team（特別是用 Cursor Pro / Teams 的）；做 dev tool agency / 自由顧問的 indie；台日中文 vertical SaaS。
- **技術複雜度**：2/5（讀 Cursor 文檔 + 3 個現成 GitHub Actions / Zapier flow 改寫 + 寫 SOP）。
- **預估 MRR**：$3K–$10K（playbook 訂閱 + 顧問費）；單次 audit $1.5K–$5K。
- **競品弱點**：Cursor 官方文檔偏 SDK 與 syntax，少談跨 trigger 組合；Zapier / n8n 顧問不熟 IDE 內 automation；台日中文 case study 為零。
- **切入建議**：(a) 今天起 7 天內 ship landing「Cursor /automate 改寫範本 + 3 種常見 trigger SOP（GitHub PR + Slack 表情 + schedule）」$49 / $199 lifetime；(b) 接 fixed-price audit $1.5K–$5K，輸出 client 既有 workflow 的 Cursor 化遷移計畫 + 1 個月成本對比；(c) 6/22–6/28 Reddit r/cursor / Discord / Twitter 中文連發 3 篇 case study（中文供給為零）。

### 點子 2：Claude Code 自架 sandbox + MCP tunnel 落地包（regulated SaaS niche）🆕

- **痛點來源**：6/19 Claude Code 自架 sandbox + MCP tunnel 全部 GA；金融 / 醫療 / 法律 / 政府 / 公部門 vertical SaaS 一直被卡在「資料 / tool execution 不能出公司 VPC」這條無法繞過的合規線；現有部署文檔偏單一 sandbox provider 介紹，少談「Cloudflare vs Daytona vs Modal vs Vercel 四家對 indie 真實 cost / latency 對比」；台日中文 reference architecture 為零。
- **目標客群**：200–2,000 員台日 regulated industry vertical SaaS；做 enterprise vertical 顧問的 indie / boutique SI；金融 / 醫療 / 法律 vertical IT 主管。
- **技術複雜度**：4/5（Claude Code agent loop 設定 + 任一 sandbox provider 落地 + MCP tunnel 配置 + 客戶 VPC 對接 + DPIA[^dpia] / 合規報告）。
- **預估 MRR**：$10K–$30K（白皮書訂閱 + 顧問）；單次部署 $5K–$25K + 月維運 $1K–$3K。
- **競品弱點**：Anthropic 官方文檔偏 SDK；Cloudflare / Daytona / Modal / Vercel 各自不做跨家對比；台日中文 regulated industry reference architecture 為零；現有 SI 沒做過 MCP tunnel 部署。
- **切入建議**：(a) 今天起 14 天 ship landing「Claude Code self-hosted sandbox + MCP tunnel 部署 SOP」$199 / $799 lifetime（含 4 家 sandbox provider 對比 + DPIA 範本）；(b) fixed-price 部署 audit $5K–$25K + 30 天 retainer；(c) 6/22–6/28 LinkedIn / 商周線上連發中文 case study「我們 7 天把 Claude Code 落到客戶 VPC 內，IT 主管原本給我半年」。

### 點子 3：Open source LLM router cost optimizer（GLM-5.2 × K2.7 × Sonnet 4.6 三軌、Baseten $13B 順風車）🆕

- **痛點來源**：6/18 Baseten $1.5B @ $13B 把 open source inference demand 推到頭條；月 LLM 帳 $500–$10,000 的 indie SaaS / agency 知道該切但不會切；router 的多 model fallback / cost-aware routing / observability 沒人標準化；中文社群「Claude Opus 4.8 + GLM-5.2 + K2.7 + Sonnet 4.6」四軌 router playbook 供給接近零。
- **目標客群**：月 LLM 帳 $500–$10,000 的 indie SaaS / agency；台日中文 vertical SaaS；做 LLM cost optimization 顧問的 indie。
- **技術複雜度**：3/5（Hono / Express + Workers AI + Anthropic / OpenAI / Z.AI / Moonshot SDK + 路由評分 + observability dashboard）。
- **預估 MRR**：$5K–$15K（開源工具引流 + audit 服務）。
- **競品弱點**：OpenRouter / Portkey 只做 routing 不做「節省 audit + 後驗 dashboard」；Cloudflare Workers AI 缺成本決策工具；Baseten / Modal / Fireworks 做 inference 但不做 router；中文供給為零。
- **切入建議**：(a) 今天起 7 天開源 `llm-router-cost-optimizer`（Hono + Workers AI bind），4 model fallback 預設 + token / latency / quality dashboard；(b) audit 三檔 $1,500 / $3,000 / $6,000（含 1 個月帳單拆解 + 切換實作 + 後驗報告）；(c) 先做 1 個 case「把月帳 $3,000 砍到 $1,200」配 dashboard 截圖、HN / r/SaaS / Threads 中文發文。

## 🧰 工具堆疊更新

- **Cursor 用戶**：3.8 釋出後，把 1 個 GitHub Actions / cron job 遷成 `/automate`、實測 7 天 ROI；同時 Bugbot 7/1 改 usage-based 倒數 10 天，把「PR 數 × Bugbot run + automation 觸發」估算 6 / 7 月對比表給 IT 主管。
- **Claude Code 用戶**：6/19 update 升上去，auto mode 終於敢開；自家 GitHub Actions 加 `--auto` 跑 1 週測試；想跨進金融 / 醫療 vertical 的 indie 試一次自架 sandbox + MCP tunnel 部署，挑 Cloudflare / Daytona / Modal / Vercel 任一家對比 latency。
- **LLM router / inference 決策**：Baseten 估值跳 + GLM-5.2 已上 Workers AI = 「Claude Opus 4.8 留 high stakes、GLM-5.2 / K2.7 / Sonnet 4.6 跑量產」是 7 月起的 default；現在沒 router 的 indie 本週寫一個最小可行版（3 model fallback + cost 紀錄即可）。
- **MCP server 維護者**：7/28 RC 發布、stateless protocol core 與 Tasks / Apps 是大改；本週讀 spec、預留 7 月最後 1 週做升級；自家 vertical MCP server 寫 1 篇中文 case study「stateless 化的取捨」搶 SEO。
- **語音 SaaS / 客服自動化**：OpenAI Realtime API GA 是「不必再拆 ASR + LLM + TTS」第一個 frontier 選項；做跨國客服 / 直播即時字幕 / cross-border sales agent 的 indie 1 週內試 GPT-Realtime-2 + Translate PoC，與 Deepgram / Vapi 跑成本對比。
- **訂閱戶（Claude Pro / Max / Team）**：6/20 退費窗結束、6/22 paid subscriber 免費試用窗收尾倒數 1 天；今天跑一次 Opus 4.8 vs Sonnet 4.6 vs GPT-5.5 三軌 baseline + token 拆解；下週 GPT-5.6 GA 後即可加第 4 軌。
- **vibecoding（Replit / Lovable / Bolt / v0）**：Replit Enterprise self-serve + per-user spend cap 已開；5–20 人 indie team 想統一 vibecoding 工具流可省一輪 sales；做 vibecoding 顧問可包「Replit Enterprise 落地 + spend cap policy」$3K–$8K。

## ⚡ 今日行動建議

- [ ] **45 分鐘** 把自家 1 個 GitHub Actions / cron job 遷成 Cursor 3.8 `/automate`（挑 PR review 或 nightly refactor），記錄遷移痛點 + 7 天 ROI 預期數字。預期產出：1 篇中文「Cursor /automate 實測」短文（LinkedIn / Threads）+ 顧問詢問 inbound。
- [ ] **30 分鐘** 跑 Opus 4.8 vs Sonnet 4.6 vs GPT-5.5 三軌 baseline（挑自家代表性 5 個 prompt），把 token / latency / quality 三欄寫成內部表；6/22 GPT-5.6 GA 後直接加第 4 欄。預期產出：客戶 PoC SLO 改寫成「Opus 4.8 + Sonnet 4.6 + GPT-5.6 / GLM-5.2」三軌 fallback 模板。
- [ ] **60 分鐘** ship landing「Claude Code self-hosted sandbox + MCP tunnel 部署 SOP」$199 lifetime（含 Cloudflare / Daytona / Modal / Vercel 四家對比 + DPIA 範本）；同步開「金融 / 醫療 vertical SaaS 落地 audit $5K–$25K」inbound 表單。預期成本 0、第一週 5–10 inbound。
- [ ] **30 分鐘** 自家 LLM router 寫最小可行版：Claude Opus 4.8（high stakes）+ GLM-5.2（量產）+ Sonnet 4.6（fallback）；先在 1 條 production endpoint 試 24h、看 cost 變化。預期：月帳 30–60% 下修。
- [ ] **20 分鐘** 寫 1 頁「GPT-5.6 對 indie 3 條 immediate decision」中文短文草稿；6/22 launch 後 1 小時內補 5.6 實測數字發 LinkedIn / Threads / Discord。中文供給為零、inbound 潛力高。
- [ ] **15 分鐘** Read MCP 2026-07-28 RC blog，把 stateless protocol / Tasks / Apps 三件套對自家 MCP server 的影響列點；安排 7 月最後 1 週做升級 PoC。

## ⏳ 待觀察

- 6/22–6/28 GPT-5.6 是否如 Polymarket 83% 預測的時間窗 GA、是否同梯出 5.6 Pro；若 6/28 未上線，Polymarket 機率會重排、LLM router 重設權重時程順延 1 週
- 6/22 Fable 5 paid subscriber 免費試用窗收尾後 Anthropic 是否對 Mythos-class 出新出貨節奏 rumor（6 月底 Sonnet 4.8 也有版本變動傳聞）；對賭「7/1 復活」的 11 天進入決定期
- Cursor 3.8 `/automate` 第一週 Reddit / Discord / Twitter 對「Slack 表情 trigger 誤觸」與「computer use 安全邊界」回饋；若 7 天內出 incident 案例，dev tool agency「automation 安全 audit」niche 加碼
- Baseten $1.5B 是否在 6/27 前正式 confirm；若是、估值 $13B 是否引發 Modal / Fireworks / Replicate 同步 fundraise；LLM router 顧問 inbound 跟著加溫
- Qualcomm-Tenstorrent 是否在 7 月前公開談判結果；若達成、RISC-V AI chip 第二大廠背書、indie 寫「chip dependency map」內容話題期 60 天
- MCP 2026-07-28 RC 至正式發布 5 週內 client（Claude Desktop / Claude Code / Cursor / Cline / Continue / Cody）是否同步升 stateless；若分裂，自架 MCP server 7/28 後一段時間需雙軌相容
- Antigravity CLI 三條 Day 0 紅燈（Logic Suspension / rate limit paperweight / agy 未進 Homebrew / apt）Google 是否在本月底前推 Logic Patch v2.1.5 修；若沒推、Day 0 incident response audit 7 天 hot 視窗延長
- OpenAI Realtime API GA 後 Deepgram / Vapi / Retell AI 等 voice agent 第三方公司是否調價或推 OpenAI-compatible 包裝；voice SaaS niche 7 月起價格戰可能成形
- EU AI Act 8/2 enforcement 倒數 42 天進入 enterprise RFP 高峰前 14 天；下週起台日 indie 賣 EU 客戶 RFP 應已開始

[^baseten]: serverless AI 推論平台，把 open source 或自訂模型包成 production-grade 的 HTTP / gRPC endpoint，主打 cold start 壓秒級、跨 GPU 自動 autoscale；客戶用它跑 Llama / GLM / Qwen / Mistral 等開源模型替代 OpenAI / Anthropic API，是 Modal、Replicate、Fireworks、Together 同一賽道的主要玩家。

[^tenstorrent]: 由前 Apple / Tesla / AMD 晶片大師 Jim Keller 主導的 RISC-V AI 晶片公司，主打 open ISA + open source 軟體 stack，目標 data center 與 HPC 推論市場；硬體用自家 Tensix core 串接、走 chiplet 路線，被視為 NVIDIA / AMD 之外少數有機會吃下 AI inference 第二供應商位置的初創。

[^moe]: Mixture of Experts，把單一大模型拆成多個「expert」子網路，每個 token 只路由到少數 expert 啟用，總參數量可衝到數百 B 卻只 activate 數十 B，推論成本接近小模型而能力接近大模型；GLM-5.2 的 744B 總參數 / 40B activate 即此架構，Mistral、DeepSeek、Qwen 近一年新模型多走同路。

[^mcp-tunnel]: Anthropic 6/19 GA 的 outbound-only 連線方式：自架的 MCP server 主動撥號到 Anthropic 邊界節點建立反向通道，agent 透過該通道呼叫 server 的 tool，不必在企業 VPC 對外開 inbound port、也不必架 ngrok / Tailscale。對 regulated industry 是「資料 / tool 留在 VPC、模型留在 Anthropic」的合規組合。

[^dpia]: Data Protection Impact Assessment，GDPR 第 35 條要求的資料保護影響評估，當資料處理可能對個人權益造成高風險時須事前撰寫，內容含資料流圖、必要性與比例性分析、風險與緩解措施；EU AI Act 8/2 enforcement 後也成 enterprise RFP 標準附件，台日 SaaS 賣 EU 客戶幾乎必備。

[^sep]: Specification Enhancement Proposal，MCP 規格的提案改進文件，與 IETF RFC 或 Python PEP 角色相同——任何規格層級的重大改動須走 SEP 流程，公開徵求社群與 client / server 實作者意見後再進主規格。2026-07-28 RC 是首次以 6 件 SEP 聯動完成主版本升級的範例。

## 📚 引用來源

1. [AI inference startup Baseten reportedly raising $1.5B months after its last mega-round — TechCrunch](https://techcrunch.com/2026/06/18/ai-inference-startup-baseten-reportedly-raising-1-5b-months-after-its-last-mega-round/) — 2026-06-18
2. [Baseten Nears $1.5B Raise at $13B Valuation, Tripling in Five Months — MLQ News](https://mlq.ai/news/baseten-nears-15b-raise-at-13b-valuation-tripling-in-five-months/) — 2026-06-19
3. [AI inference provider Baseten reportedly raising $1.5B in funding — SiliconANGLE](https://siliconangle.com/2026/06/18/ai-inference-provider-baseten-reportedly-raising-1-5b-funding/) — 2026-06-18
4. [Qualcomm in Talks to Acquire AI Chip Startup Tenstorrent for Up to $10 Billion — Yahoo Finance / Reuters](https://finance.yahoo.com/technology/ai/articles/qualcomm-talks-acquire-ai-chip-230401789.html) — 2026-06-16
5. [Qualcomm mulls taking over Jim Keller's Tenstorrent — Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/qualcomm-mulls-taking-over-jim-kellers-tenstorrent-report-claims-deal-for-ai-chipmaker-would-value-the-company-at-between-usd8-billion-and-usd10-billion) — 2026-06-16
6. [Qualcomm said to be circling AI chip biz Tenstorrent in $10B RISC-V power play — The Register](https://www.theregister.com/systems/2026/06/16/qualcomm-said-to-be-circling-ai-chip-biz-tenstorrent-in-10b-risc-v-power-play/5256084) — 2026-06-16
7. [The 2026-07-28 MCP Specification Release Candidate — MCP Blog](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/) — 2026-06
8. [MCP 2026 Roadmap: What's Coming in the Next Spec Release — ChatForest](https://chatforest.com/guides/mcp-2026-roadmap-whats-coming/) — 2026-06
9. [MCP Dev Summit 2026 Readout: The Protocol Grows Up — Digital Applied](https://www.digitalapplied.com/blog/mcp-dev-summit-2026-readout-protocol-roadmap-analysis) — 2026-06
10. [Improvements to Cursor Automations — Cursor changelog 06-18-26](https://cursor.com/changelog/06-18-26) — 2026-06-18
11. [Cursor /automate Explained: What the New Automation Skill Means for AI Coding Agents — Kingy AI](https://kingy.ai/news/cursor-automate-skill-ai-coding-agents/) — 2026-06-18
12. [Cursor Automations: Always-On Agentic Coding Guide — Digital Applied](https://www.digitalapplied.com/blog/cursor-automations-always-on-agentic-coding-agents-guide) — 2026-06
13. [Claude Code changelog — Claude Code Docs](https://code.claude.com/docs/en/changelog) — 2026-06-19
14. [Anthropic debuts MCP tunnels and self-hosted sandboxes to lock down AI agent infrastructure — The New Stack](https://thenewstack.io/anthropic-mcp-tunnels-sandboxes/) — 2026-05–06
15. [Claude Managed Agents: Self-Hosted Sandboxes and MCP Tunnels Setup Guide — DEV Community](https://dev.to/akaranjkar08/claude-managed-agents-self-hosted-sandboxes-and-mcp-tunnels-setup-guide-4ha4) — 2026-06
16. [Anthropic Self-Hosted Sandbox: 7 Production Patterns 2026 — Digital Applied](https://www.digitalapplied.com/blog/anthropic-self-hosted-sandbox-7-production-patterns-2026) — 2026-06
17. [Z.ai's open-weights GLM-5.2 beats GPT-5.5 on multiple long-horizon coding benchmarks for 1/6th the cost — VentureBeat](https://venturebeat.com/technology/z-ais-open-weights-glm-5-2-beats-gpt-5-5-on-multiple-long-horizon-coding-benchmarks-for-1-6th-the-cost) — 2026-06
18. [GLM-5.2 Benchmarks, Pricing & Context Window — LLM Stats](https://llm-stats.com/models/glm-5.2) — 2026-06
19. [GLM-5.2 Pricing: API Cost, Cached Input — apidog](https://apidog.com/blog/glm-5-2-pricing/) — 2026-06
20. [Advancing voice intelligence with new models in the API — OpenAI](https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/) — 2026-05-07
21. [OpenAI launches three new real-time audio API models — Notebookcheck](https://www.notebookcheck.net/OpenAI-launches-three-new-real-time-audio-API-models.1293110.0.html) — 2026-05
22. [OpenAI Launches 3 New Realtime Voice API Models: What Builders Need to Know Right Now — MindStudio](https://www.mindstudio.ai/blog/openai-realtime-voice-api-3-new-models-builders-guide) — 2026-05
23. [Fable 5 Refund Window Closes June 20: What Anthropic's Billing Restructure Means for Your Stack — Tech Jacks Solutions](https://techjacksolutions.com/ai-brief/fable-5-refund-window-closes-june-20-what-anthropics-billing/) — 2026-06-19
24. [GPT-5.6: OpenAI Chief Scientist Calls It a Meaningful Leap, June Launch Nears — TechTimes](https://www.techtimes.com/articles/318492/20260616/gpt-56-openai-chief-scientist-calls-it-meaningful-leap-june-launch-nears.htm) — 2026-06-16
25. [What to Expect from OpenAI's GPT-5.6 Release in June 2026 — Geeky Gadgets](https://www.geeky-gadgets.com/gpt-5-6-june-2026-release/) — 2026-06
26. [OpenAI prepares GPT-5.6 models for the upcoming release — TestingCatalog](https://www.testingcatalog.com/openai-prepares-gpt-5-6-models-for-the-upcoming-release/) — 2026-06
27. [Replit Release Notes — Releasebot](https://releasebot.io/updates/replit) — 2026-06-19
28. [I tried Google's Antigravity for a week, and this limitation made me close it for good — XDA Developers](https://www.xda-developers.com/tried-googles-antigravity-limitation-made-close-it-good/) — 2026-06-20
