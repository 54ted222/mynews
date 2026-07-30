---
title: 每日創業情報 — 2026-07-31
date: 2026-07-31
tags: 創業情報, AI 產業, SaaS
summary: OpenAI 昨夜開砍 GPT-5.6 Luna/Terra 價格（-80% / -20%）、Microsoft Copilot Super App 由 Nadella 親口確認、AI WAVE SHOW 台北世貿今日開展 T+0、MODA「AI 技服機構登錄」今日截止。
keywords: GPT-5.6 Luna Terra 降價 2026-07-30, Microsoft Copilot Super App Nadella earnings, AI WAVE SHOW 2026 台北世貿, moda AI 技服機構登錄 2026-07-31, Moonshot Kimi F round valuation 350 billion, Cursor Composer 2.5 iOS beta July 2026, Anthropic voice mode Opus Sonnet Haiku 2026, GitHub Copilot AI credits pricing 2026
---

# 每日創業情報 — 2026-07-31

## 🎯 今日 TL;DR

- **OpenAI 昨夜 (7/30) 開砍 GPT-5.6 Luna 80% / Terra 20% 價格**——Luna $0.20/$1.20、Terra $2/$12（per M token in/out）；Sol 不變、但新推 Fast mode（2.5× 速度、2× 價格），中量 API bill 台灣 solo SaaS 值得今晚重算 routing table。
- **Microsoft Copilot Super App 由 Nadella 財報親口確認**——GitHub Copilot × Copilot chat × Copilot Cowork[^cowork] × Autopilot agent[^autopilot] 四合一、目標 2026 夏末上線；「一站式」對台灣 5-20 人團隊選型再加變數。
- **AI WAVE SHOW 2026 今日 (7/31) 台北世貿 Hall 1 開展**——400 booths、預估 50,000 人次、8/2 結束；當日 T+0 leads 收集是台灣 SaaS 首發極限窗。
- **MODA[^moda]「AI 技服機構服務能量登錄[^registry]」今日截止**——第一梯次申請日 (7/31)；未登錄的資服業者將無法接下期政府案，24h 內為最後窗。

## 🔄 昨日追蹤

- 🆕 **GPT-5.6 Luna / Terra 降價** — 昨日 (7/30) 官宣；今日 T+0：SDK 已 live、Cursor 20 分鐘內 route 生效、Replicate 同日供給；「三 tier bill 治理表」需重畫，Anthropic Opus 5 $5/$25 vs Sol $5/$30 已進「幾乎同價」帶。
- 🆕 **Microsoft Copilot Super App** — 昨日 (7/30) 財報後 confirm；今日 T+0；Nadella 明說「一支 app 給 consumer + business」、Autopilot merge 進 GitHub Copilot、Agent Merge 已 preview（處理 PR review / check / merge 全鏈路）。
- 🔄 **台股 / 台積電** — T+1；週三 (7/30) 加權開高走低、盤中最高 41,155.42 → 收 39,933.3 (-105.88)、失守 40,000；台積電逆勢 +5 至 2,205、聯電漲停 112.5、聯發科 +85 至 3,235、鴻海 -7.5 至 229.5；週四 (7/31) 為財報季密集公布 + AI WAVE SHOW 開展雙頭窗。
- 🔄 **MCP[^mcp] 2026-07-28 Final Spec** — T+3；stateless / SDK v2 GA / RFC 9728 已進穩態；今日焦點轉向 registry 生態（Smithery、FastMCP、MCP Bundles）而非 spec 本身。
- 🔄 **Cursor Composer 3「Vega」** — T+7；公開 launch 仍未 confirm，官方 changelog 續推 Composer 2.5 pricing 與 iOS beta；India-only「Cursor Start」₹649 / 月 於 7/28 上架、含 Grok 4.5 + Composer。

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會 / 威脅 |
| ---- | ---- | ---------------------- | ----------- |
| **AI WAVE SHOW 2026 台北世貿 Hall 1 開展 (7/31–8/2、400 booths、50k 人次)** | [Meet Taiwan AI WAVE SHOW](https://mice.meettaiwan.com/meettaiwan/home/en/m/news/N2025090003/info.html)、[TIOTA 展會通告](https://www.twiota.org/en/eventDetails.aspx?id=f22c61dd-b8b1-4ff9-9c37-095a17f65b41) | 台灣 SaaS 一年少數「50k 目標客戶集中」窗；一人團隊今天到場 = 3 天內拿到 30-80 leads 可行 | 機會：T+0 首日發 print 版 SaaS demo 卡；威脅：來不及印 QR code / landing 者 3 天窗結束後 CAC 回歸 |
| **7/30 加權 39,933.3 (-105.88)、盤中大逆轉逾 1,116 點；台積電 +5 至 2,205、聯電漲停** | [鉅亨 台股開盤](https://news.cnyes.com/news/id/6539558)、[ETtoday 台股收盤快訊](https://finance.ettoday.net/news/3210350)、[壹蘋 新聞台股收跌](https://news.nextapple.com/finance/20260730/3FDB5DD7AC5A35F129FC885D486402EF) | 「盤中大反轉、尾盤翻黑」= 客戶擔憂本週財報季；SaaS 客戶談判需準備「Q2 財報季陪跑」訊號 | 機會：財報季客戶決策 SOP 陪跑；威脅：科技類股回檔仍未止跌，客戶 Q3 budget 觀望 |
| **MODA「AI 技服機構服務能量登錄」今日 (7/31) 截止** | [moda AI 專區](https://moda.gov.tw/major-policies/ai/1781)、[moda 首頁](https://moda.gov.tw/) | 台灣資服業者若未登錄，無法接下期 AI 補助案（AI Agent 整合 up to 2,000 萬）；一人 SaaS 個人也可以資訊服務業身份登錄 | 機會：24h 內衝刺登錄可拿 2026 下半年補助資格；威脅：錯過即等 2027 |
| **國發會 2026 年科技預算 1,601 億元、聚焦五大信賴產業 (半導體、AI、次世代通訊、資安、軍事科技)** | [北美智權報 2026 科技預算](https://naipnews.naipo.com/27914/) | 補助結構明確 → 台灣一人 SaaS 若能對映「AI × 半導體」或「AI × 資安」，2026 Q4 補助窗值得規畫 | 機會：垂直對映「半導體 SaaS」/「資安 AI」有政策順風；威脅：與大廠競爭補助資源 |
| **Moonshot AI Kimi F-round $3.5B、valuation $350B、Pre-IPO G-round $500B** | [新浪 AI 熱點 2026-07-30](https://k.sina.com.cn/article_7857201856_1d45362c001908hh24.html?from=tech) | Kimi K3 hosted API 有大廠續押 → 台灣 solo SaaS 短期不必擔心 LLM router 中 Kimi K3 fallback 消失 | 機會：Kimi K3 $3/$15 fallback 為 Opus 5 $5/$25 的 60% 折扣，router 值得保留；威脅：估值高漲 = 未來漲價可能 |

## 🛠 新興 AI 工具

| 工具 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | -------- | ---- | ---------------- | -------- |
| **GPT-5.6 Luna (降價 80%)** | Frontier LLM | 高吞吐量、低成本推論；classification / summarize / RAG 前端輕量任務 | $0.20 / $1.20 per M token (in/out)；1M context | 比原價便宜 5×；比 Gemini Flash / Claude Haiku 更便宜、context 更大 | 台灣 solo SaaS 今日重畫 routing：批次 classification / summarize 建議切到 Luna；[OpenAI 官方 pricing 更新](https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/)、[Unite.AI 深度分析](https://www.unite.ai/openai-cuts-api-prices-on-its-two-cheaper-gpt-5-6-tiers/) |
| **GPT-5.6 Terra (降價 20%)** | Frontier LLM | 中量推論；agent 中段 reasoning / mid-tier chatbot | $2 / $12 per M token；1M context | Terra 已進「Opus 5 $5/$25 replacement」帶；比 Sonnet 4.5 便宜、context 更大 | 台灣一人 SaaS 若目前 default 為 Sonnet 4.5 / Opus 5，值得跑一輪 eval 對照；[CNBC 報導](https://www.cnbc.com/2026/07/30/open-ai-price-cut-gpt.html)、[Yahoo Finance](https://finance.yahoo.com/technology/ai/articles/openai-cuts-gpt-5-6-173045044.html) |
| **GPT-5.6 Sol Fast mode (2.5× 速度)** | Frontier LLM speed tier | 對延遲敏感的互動 UX（客服、code 補完）；取代原 Priority Processing | $10 / $60 per M token（2× 原價）；up to 2.5× throughput | 對照 Anthropic Opus 5 effort=high 延遲 68s max；Sol Fast 更適合「延遲 < 5s」的 UX 場景 | 台灣 solo SaaS 若延遲為主要客訴，可 A/B Sol Fast vs Opus 5 medium；[Axios GPT-5.6 Fast mode](https://www.axios.com/2026/07/30/openai-cuts-prices-gpt-terra-luna5) |
| **Microsoft Copilot Super App (preview)** | Unified AI IDE | GitHub Copilot + Copilot chat + Copilot Cowork + Autopilot agent 四合一 | 隨 Copilot Pro $10 / Pro+ $39 / Max $100 credits 定價（[GitHub AI Credits](https://tech-insider.org/ie/github-copilot-ai-credits-pricing-2026/)） | 對 Windows 團隊「一支 app 從 chat 到 agent 到 code merge」；vs Cursor 需 IDE 切換、vs Claude Code 需 terminal | 台灣 5-20 人 微軟客戶等夏末 GA 再切；[GitHub 官方 blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)、[Techweez 深度](https://techweez.com/2026/07/30/microsoft-unified-copilot-app-2026/) |
| **Cursor for iOS (public beta, all paid plans)** | Mobile AI coding | iPhone 上啟動 always-on cloud agents、遠端 steer desktop agents | 隨 Cursor 訂閱含（Pro $20+ / Business）；6/29 起、iOS public beta | 對照 GitHub Codespaces mobile 為純瀏覽器；Cursor iOS 為 native + Live Activities + push | 台灣 solo founder 「隨處 review agent PR」場景可用；[explainx.ai 深度](https://www.explainx.ai/blog/cursor-big-day-ben-lang-composer-3-spacex-june-2026)、[Cursor 官方](https://releasebot.io/updates/cursor) |
| **Anthropic voice mode 擴至 Opus / Sonnet / Haiku** | AI voice + tool | 語音對話 × 連 Gmail / Slack 等 tool；語言擴增 | 隨 Claude Pro $20 / Max $100+；[Anthropic release notes](https://platform.claude.com/docs/en/release-notes/overview) | 從只跑 Haiku 擴到全家族；vs OpenAI ChatGPT voice 為多模型 + tool connect | 台灣一人 SaaS 「語音 × email 摘要」場景可以 Opus 走 quality tier；[wiki Claude](https://en.wikipedia.org/wiki/Claude_(language_model)) |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：「GPT-5.6 Luna/Terra 降價 T+0 × 台灣 solo SaaS API bill 重畫決策表」中文首篇 + audit sprint 🆕

- **痛點來源**：昨夜 (7/30) OpenAI 官宣 Luna -80% / Terra -20% + Sol Fast mode 上線 + Anthropic Opus 5 $5/$25 vs Sol $5/$30 進入「幾乎同價」帶 + Terra 進入「Opus 5 replacement」候選 + 台灣 5-20 人 AI 產品小團隊「一半 API bill 在 Anthropic + 另一半在 OpenAI」為新校準窗；中文快訊供給為 zero、今日 09:00 UTC+8 前發為 first-mover 極限。
- **目標客群**：台灣 5-20 人 AI 產品小團隊已用 OpenAI + Anthropic 雙軌 API（估計 400-1,000 家）+ 對「三 tier bill 治理表」有 monthly bill $3,000+ 壓力的 CTO（200-400 位）+ 對「Terra 是否可 replace Opus 5 for mid-tier reasoning」有 eval 疑問的 solo founder（300-700 位）+ 對「Luna $0.2 適不適合 RAG 前端 embedding classify」有預算敏感的 一人 SaaS 創業者（200-500 位）。
- **技術複雜度**：3/5（三家 pricing 對照表：Anthropic Opus 5 $5/$25 × Sonnet 4.5 $3/$15 × OpenAI Sol $5/$30 × Terra $2/$12 × Luna $0.2/$1.2 × Kimi K3 hosted $3/$15 六方對映 + Sol Fast mode 延遲 vs 成本 A/B 決策樹 + LLM router selectivity 重畫）。
- **預估 MRR**：NT$ 60,000-220,000（audit sprint NT$ 25,000-60,000 × 3-5 客戶 + monthly「三 tier bill 校準」SOP NT$ 4,999-11,999 × 8-15 客戶 + 「routing table 遷移」consulting 一次 NT$ 30,000-90,000 flat × 1-2 客戶 / 月 + 「Luna RAG embedding」設計 NT$ 15,000-40,000 flat × 3-6 客戶 / 月）。
- **競品弱點**：OpenAI / Anthropic 官方 blog 皆推自家 tier；Vellum / eesel / BuildFastWithAI 為英文 benchmark 不做台灣本地 stack 建議；中文「GPT-5.6 六方 routing 決策表 for 台灣 5-20 人團隊」= zero 供給、今日 09:00 UTC+8 前為 first-mover 極限。
- **切入建議**：09:00 前發中文首篇「GPT-5.6 Luna/Terra 降價 × 台灣一人 SaaS 六方 routing 重畫（+ Sol Fast mode 延遲代價 + Terra 是否 replace Opus 5）」+ Loom 8-12 分鐘 SOP + 5 位 CTO DM 試投→拿 3-5 個 audit 客戶 NT$ 60,000-220,000。

### 點子 2：「AI WAVE SHOW T+0 首日 booth 陪跑 + leads 收集 SaaS + AI 補助對映 sprint」🆕

- **痛點來源**：AI WAVE SHOW 2026 今日 (7/31) 台北世貿 Hall 1 開展 + 400 booths + 50k 目標客戶集中 + 8/2 結束 = 3 天窗；台灣 SaaS 首發極限窗；MODA「AI 技服機構登錄」今日截止兩窗疊加；booth 現場 leads 收集 SaaS + 補助對映 SOP 為 zero 供給；今日 09:00-18:00 為 first-mover 極限。
- **目標客群**：AI WAVE SHOW 首日參展 200-400 家 booth 主 + 台灣 5-20 人 SaaS 首發團隊（估計 200-500 家）+ 對「3 天窗 30-80 leads 收集」有實作壓力的 solo founder（150-400 位）+ 對「MODA 補助登錄 + 展會現場曝光」有雙窗規畫的 CTO（100-300 位）。
- **技術複雜度**：2/5（QR code 現場 leads 收集 mini SaaS（Google Sheets + Zapier + Cal.com 三方組合）+ MODA AI 補助 5 大類對映決策表 + AI 技服機構登錄 24h checklist SOP + 3 天窗 leads 分層跟進 SOP）。
- **預估 MRR**：NT$ 40,000-150,000（現場快閃 audit NT$ 8,000-25,000 × 5-8 booth × 3 天 + monthly「展後 leads 分層」SOP NT$ 3,999-8,999 × 6-12 客戶 + MODA 補助對映 consulting 一次 NT$ 25,000-70,000 flat × 1-2 客戶 / 月）。
- **競品弱點**：TCA / MEET TAIWAN 官方新聞為英文通告不做客戶端 SaaS 陪跑；一般行銷公司做展會 leads 收集但不做 SaaS-first + AI 補助雙窗對映；「booth 3 天窗 + MODA 補助」中文首篇為 zero 供給。
- **切入建議**：09:00-12:00 UTC+8 到場拍 5-10 個 booth QR code 現場設計 → 12:00 發「AI WAVE SHOW 首日 T+0 leads 收集 mini SaaS SOP + MODA 補助雙窗指南」中文首篇 + Loom → 14:00-18:00 現場 DM 8-15 位 booth 主 → 3 天窗拿 5-8 個快閃 audit 客戶 NT$ 40,000-150,000。

### 點子 3：「Microsoft Copilot Super App T+0 preview × 台灣 5-20 人團隊四方選型再校準」中文首篇 🆕

- **痛點來源**：昨日 (7/30) Nadella 財報親口 confirm Copilot Super App（GitHub Copilot + Copilot chat + Copilot Cowork + Autopilot agent 四合一，夏末 GA）+ Agent Merge preview 上線 + Microsoft 365 Copilot 已破 30M paid seats + 台灣 5-20 人團隊「原本剛做完 Devin × Cursor × Copilot × Claude Code 四方選型」需再加「Super App 夏末上線」等待決策 + Windows / Office 為主客戶端者尤其焦慮；今日 UTC+8 09:00 為 first-mover 極限。
- **目標客群**：台灣 5-20 人 AI 產品小團隊使用 Windows / Office 365 為主（估計 700-1,500 家）+ 已購 GitHub Copilot Business $19/seat 的 CTO（300-800 位）+ 對「Super App 夏末等待 vs Cursor / Claude Code 立即遷移」有預算 monthly $500+ 壓力的 solo founder（200-500 位）。
- **技術複雜度**：3/5（Copilot Super App 四合一元件對映（chat / Cowork / GitHub Copilot / Autopilot）+ Agent Merge PR review / check / merge 全鏈路 vs Cursor Automations vs Claude Code hooks 三方對映 + GitHub AI Credits Pro $10 / Pro+ $39 / Max $100 三 tier bill 決策 + 夏末 GA 等待決策樹）。
- **預估 MRR**：NT$ 60,000-180,000（audit sprint NT$ 25,000-55,000 × 3-5 客戶 + monthly「Copilot Super App 等待 SOP」NT$ 4,999-9,999 × 6-12 客戶 + 「Windows / Office 客戶 AI IDE 遷移」consulting NT$ 30,000-80,000 flat × 1-2 客戶 / 月）。
- **競品弱點**：GitHub 官方 blog / Microsoft 官方為英文 + PR 定位；[Techweez](https://techweez.com/2026/07/30/microsoft-unified-copilot-app-2026/) / [WindowsForum](https://windowsforum.com/windows-news.4/microsoft-copilot-super-app-to-unite-chat-code-and-agents-in-2026.440876/) 為英文分析不做台灣本地 stack 建議；中文「Super App × 台灣 Windows 團隊 5-20 人選型」= zero 供給。
- **切入建議**：09:00 前發中文首篇「Microsoft Copilot Super App T+0 preview × 台灣 5-20 人 Windows 團隊四方選型再校準（+ Agent Merge PR 全鏈路 vs Cursor Automations vs Claude Code hooks + 夏末 GA 等待決策樹）」+ Loom 10 分鐘 SOP + 5 位 Windows 客戶 CTO DM 試投→拿 3-5 個 audit 客戶 NT$ 60,000-180,000。

### 點子 4：「Opus 5 T+7 × GPT-5.6 Terra 進「Opus 5 replacement」帶：台灣 solo SaaS effort tier eval sprint」🔄

- **痛點來源**：Opus 5 T+7（7/24 launch）+ default effort **high** 於 hallucination 50% × 延遲 68s max 已進 baseline；今日 (7/31) GPT-5.6 Terra $2/$12 進「Opus 5 $5/$25 replacement」候選 + Sol Fast mode 對比 Opus 5 effort=high 延遲代價 + 台灣 5-20 人小團隊「Opus 5 initial migration T+7 後」需要「replace vs 保留」eval sprint；昨日已有 Opus 5 三 tier bill 治理表、今日進入「eval evidence」階段。
- **目標客群**：台灣 5-20 人 AI 產品小團隊已用 Anthropic Opus 5 於 mid-tier reasoning（估計 300-700 家）+ 對「Terra 是否可 replace Opus 5 for domain reasoning」有 eval 需求的 CTO（200-400 位）+ 對「effort tier vs 三家 6 tier 對照」有選型糾結的 solo founder（150-400 位）。
- **技術複雜度**：4/5（Opus 5 effort=low/medium/high 三 tier × Terra × Luna × Sol Fast 五方 eval harness + AA-Omniscience benchmark[^omniscience] 對映 + hallucination 50% × 延遲 68s max 兩維度 + domain reasoning 樣本設計 + eval CI 自動化）。
- **預估 MRR**：NT$ 80,000-260,000（eval sprint NT$ 30,000-75,000 × 3-5 客戶 + monthly「effort tier + 6 tier 對照 CI」SOP NT$ 5,999-12,999 × 8-15 客戶 + 「Terra 遷移」consulting 一次 NT$ 40,000-100,000 flat × 1-2 客戶 / 月）。
- **競品弱點**：Anthropic 官方為 launch 通告不做中文 eval SOP；OpenAI 官方為 pricing 通告不做 replace-analysis；Vellum / Braintrust / Langfuse 為英文 eval framework 不做「Opus 5 vs Terra replace」實測；中文首篇 zero 供給。
- **切入建議**：09:00 前發中文首篇「Opus 5 T+7 × GPT-5.6 Terra 是否可 replace：台灣 solo SaaS 五方 eval sprint SOP」+ 開源 eval harness (github repo) + 5 位 CTO DM 試投→拿 3-5 個 eval sprint 客戶 NT$ 80,000-260,000。

## 🧰 工具堆疊更新

- **LLM router 定價校準**：昨夜 GPT-5.6 Luna $0.2/$1.2、Terra $2/$12 開砍，Anthropic Sonnet 4.5 $3/$15、Opus 5 $5/$25 相對貴 30-100%；台灣 solo SaaS「classification / summarize 走 Luna、mid-tier reasoning A/B Terra vs Sonnet 4.5、frontier 保留 Opus 5 / Sol」為新 baseline。[Puter Developer GPT-5.6 Sol 規格](https://developer.puter.com/ai/openai/gpt-5.6-sol/)
- **GitHub AI Credits vs Cursor vs Claude Code 三方**：Copilot Pro $10 (含 $5 flex)、Pro+ $39 (含 $31 flex)、Max $100 (含 $100 flex)、Business $19/seat；台灣 5-20 人團隊「重度 agent 用戶」月支出可達 $60-100/user、需觀察 Super App 夏末 GA 是否重新定價。[GitHub Copilot 定價 2026](https://tech-insider.org/au/github-copilot-usage-based-billing-2026/)

## ⚡ 今日行動建議

- [ ] **09:00 UTC+8 前**：發中文首篇「GPT-5.6 Luna/Terra 降價 × 台灣一人 SaaS 六方 routing 重畫決策表（+ Sol Fast mode 延遲代價 + Terra 是否 replace Opus 5）」+ Loom 8-12 分鐘 SOP（預期 7 天內 3-5 家 audit 客戶 NT$ 60,000-220,000）
- [ ] **09:00-18:00 UTC+8**：AI WAVE SHOW 台北世貿 Hall 1 現場：拍 5-10 個 booth QR code 現場設計 → 12:00 發「首日 T+0 leads 收集 mini SaaS SOP + MODA 補助雙窗指南」+ DM 8-15 位 booth 主（預期 3 天窗 5-8 個快閃 audit NT$ 40,000-150,000）
- [ ] **23:59 UTC+8 前**：完成 MODA「AI 技服機構服務能量登錄」提交（截止今日）；未登錄者將無法接下期 AI 補助案，24h 內為最後窗
- [ ] **本日內**：檢查台積電盤中價 + 週四財報季密集公布，客戶「Q2 財報季陪跑」訊號準備第二波 SOP

## ⏳ 待觀察

- **Cursor Composer 3「Vega」公開 launch** — T+7 leaked checkpoint 靜默；預期 H2 2026 limited rollout，需觀察 Composer 2.5 pricing 是否於 8 月前調整
- **Microsoft Copilot Super App 夏末 GA 實際定價** — Nadella 未明說是否重新定價、是否 GA 併入 GitHub AI Credits；台灣 Windows 客戶「等 or 遷移」決策需 dashboard 追蹤
- **AI WAVE SHOW 首日 T+0 booth 熱度數據** — 首日參觀人流 vs 預估 50k、booth QR 收集 leads 平均值；作為明日「T+1 booth 分層跟進 SOP」骨架
- **台股週四財報季密集公布 + 台積電 2,205 是否守住** — 今日開盤動能 + 週五 (8/1) 為第一波驗證；SaaS 客戶「Q2 財報季陪跑」訊號待實測

[^cowork]: Copilot Cowork 是 Microsoft 於 2026 年釋出的 Copilot 產品線之一，主打「多人＋AI 代理人」共同編輯的雲端協作 canvas，讓團隊成員能與多個 Copilot agent 在同一份文件或專案空間並行工作、指派任務並追蹤進度。與 chat 或 IDE 內 assistant 不同，Cowork 定位為長期專案的協作場，將併入 Microsoft Copilot Super App 統一介面。

[^autopilot]: Autopilot agent 是 Microsoft 於 GitHub Copilot 推出的 agentic workflow 工具，可背景自動處理 issue → PR → review → merge 全鏈路：開發者只需描述目標，Autopilot 便會實際寫 code、跑測試、開 PR。屬於非同步、雲端執行的 agent，區別於 IDE 內即時補完，未來將整合進 Copilot Super App。

[^moda]: MODA 全名 Ministry of Digital Affairs，中華民國「數位發展部」，2022 年 8 月掛牌成立，統籌數位政策、資通安全、產業推動與網路建設。旗下設「數位產業署（數產署）」負責 AI 補助、資服業者能量登錄、算力平台申請等業務，是台灣資服與 AI 新創與政府接軌的主要窗口。

[^registry]: 「AI 技服機構服務能量登錄」是 MODA 數位產業署辦理的資服業者資格認定機制，通過登錄的業者才具備承接政府 AI 專案（含 AI Agent 整合輔導、AI 導入補助案等）的資格門票。一人 SaaS 個人若以資訊服務業身分申請亦可，登錄採「梯次制」，錯過梯次需等下期釋出才能再送件。

[^mcp]: MCP 為 Model Context Protocol，由 Anthropic 於 2024 年底提出、2026-07-28 進入 Final Spec 的開放協議，用途是把 LLM 與外部工具、資料源、檔案系統以統一介面串接，取代早期各家自造的 function calling 適配層。目前 SDK v2 已 GA，並形成 Smithery、FastMCP、MCP Bundles 等 registry 生態。

[^omniscience]: AA-Omniscience 是 Artificial Analysis 團隊維護的 LLM 公開評測基準，聚焦「跨領域事實記憶 × 幻覺率」兩維度，會給每個受測模型一組 accuracy 與 hallucination rate 分數，是近期業界比較 frontier 模型 domain knowledge 深度與可靠性的主要指標之一，也常被拿來對比不同 effort tier 的取捨。

## 📚 引用來源

1. [OpenAI cuts GPT-5.6 Luna and Terra prices by up to 80% — Yahoo Finance](https://finance.yahoo.com/technology/ai/articles/openai-cuts-gpt-5-6-173045044.html) — 2026-07-30
2. [OpenAI Cuts API Prices on Its Two Cheaper GPT-5.6 Tiers — Unite.AI](https://www.unite.ai/openai-cuts-api-prices-on-its-two-cheaper-gpt-5-6-tiers/) — 2026-07-30
3. [OpenAI cuts prices for two of its GPT-5.6 AI models — CNBC](https://www.cnbc.com/2026/07/30/open-ai-price-cut-gpt.html) — 2026-07-30
4. [Advancing the price-performance frontier with GPT-5.6 — OpenAI](https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/) — 2026-07-30
5. [OpenAI discounts GPT-5.6 Terra and Luna — Axios](https://www.axios.com/2026/07/30/openai-cuts-prices-gpt-terra-luna5) — 2026-07-30
6. [Microsoft to Merge Copilot, GitHub Copilot, and AI Agents Into One App — Techweez](https://techweez.com/2026/07/30/microsoft-unified-copilot-app-2026/) — 2026-07-30
7. [Microsoft Copilot Super App: Unify Chat, GitHub, Agents, and Autopilot by End of Summer 2026 — Windows News](https://windowsnews.ai/article/microsoft-copilot-super-app-unify-chat-github-agents-and-autopilot-by-end-of-summer-2026.420879) — 2026-07-30
8. [GitHub Copilot app: The agent-native desktop experience — GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) — 2026-07
9. [ASRock Industrial, AMD Partner for AI WAVE SHOW 2026 — Times of India Tech](https://timestech.in/asrock-industrial-amd-partner-for-ai-wave-show-2026/) — 2026-07
10. [AI WAVE SHOW Brings Together 200 Companies — TIOTA](https://www.twiota.org/en/eventDetails.aspx?id=f22c61dd-b8b1-4ff9-9c37-095a17f65b41) — 2026-07
11. [7/30 台股強彈逾 1,100 點後翻黑 收跌 105 點 — 蘋果家](https://applealmondrealty.com/posts/51143) — 2026-07-30
12. [快訊／台股收跌 105.88 點 台積電漲 5 元 — ETtoday](https://finance.ettoday.net/news/3210350) — 2026-07-30
13. [台股收跌 105 點失守 4 萬 台積電收 2,205 — 壹蘋新聞網](https://news.nextapple.com/finance/20260730/3FDB5DD7AC5A35F129FC885D486402EF) — 2026-07-30
14. [新浪 AI 熱點 2026-07-30：Moonshot Kimi F 輪 3.5B / 估值 350B](https://k.sina.com.cn/article_7857201856_1d45362c001908hh24.html?from=tech) — 2026-07-30
15. [moda AI 專區 — 數位發展部](https://moda.gov.tw/major-policies/ai/1781) — 2026-07
16. [數產署 AI 算力平台 2026 年開放申請 — 經濟日報](https://money.udn.com/money/story/7307/9572626) — 2026-07
17. [國發會 2026 年科技預算 1,601 億元 — 北美智權報](https://naipnews.naipo.com/27914/) — 2026-07
18. [GitHub Copilot Ends Flat-Rate Billing — Enterprise DNA](https://enterprisedna.co/resources/news/github-copilot-usage-based-billing-enterprise-2026/) — 2026-06
19. [Cursor for iOS: Cloud Agents on iPhone — explainx.ai](https://www.explainx.ai/blog/cursor-big-day-ben-lang-composer-3-spacex-june-2026) — 2026-06-30
20. [Claude Platform release notes — Anthropic](https://platform.claude.com/docs/en/release-notes/overview) — 2026-07
