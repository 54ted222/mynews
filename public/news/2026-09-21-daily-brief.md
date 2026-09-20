---
title: 每日創業情報 — 2026-09-21
date: 2026-09-21
tags: 創業情報, AI 產業, SaaS, 台灣
summary: 週一 9/21 T+3 iPhone 18 Pro 交機後首個工作日；商業服務業 10 萬案 deadline 修正：民國 116/10/20 = 2027-10-20 不是 2026-10-20，前幾期誤記需勘誤；SWE-2 免費 T-19；Grok 4.7 T+9 Musk 9/14 首次自比「on par with Opus 5.0 not 5.1」；Fable 5.1 cache reads $1→$0.25 75% 減；MODA NT$100 億 AI 新創資金；中秋 T-4 週一為最後 outbound 執行日。
keywords: 商業服務業 AI 導入補助 民國 116 2027 截止日期修正 aoc.gov.tw 584, iPhone 18 Pro T+3 週一交機首週後首個工作日 台廠光電 2026-09-21, Cognition SWE-2 free T-19 October 10 2026 Devin Desktop CLI Kimi K3, Grok 4.7 T+9 Musk September 14 on par Opus 5.0 not 5.1 xAI, Claude Fable 5.1 cache read 0.25 down from 1.00 75 percent cut September 1 2026, MODA NT$10 billion AI startup investment global market share IPO, iPhone Duo T-25 Taiwan Mobile October 16 preorder Chunghwa October 23, Gemini 3.8 Flash 0.75 3.75 introductory price December 31 2026 Antigravity, Cursor Composer 3 Vega T+91 three months no confirmed release vaporware, 中秋節 9/25 T-4 週一 outbound 最後執行日 蝦皮 momo LINE OA, Cloudflare Workers 51 vs Vercel 1640 32x edge compute gap 100M requests, MCP Registry preview 2026-07-28 spec stateless core Tasks Apps
---

# 每日創業情報 — 2026-09-21

## 🎯 今日 TL;DR

- **商業服務業 AI 導入 10 萬案 deadline 修正：民國 116/10/20 = 2027-10-20 不是 2026-10-20（本 brief 前 5 期系列誤記需勘誤）** — `.aoc.gov.tw 584`「受理期間：民國 115 年 4 月 20 日至民國 116 年 10 月 20 日」+ `.maplefeather`「AI 導入補助 10 萬怎麼申請？受理到 2027 年，全網都把截止日寫錯一年」；本 brief 9/16–9/20 系列一致誤寫「T-31 五週衝刺 + 2026-10-20 截止」= 全數需勘誤為「受理至 2027-10-20（或補助經費用罄止）」= 剩下窗口實為 13 個月非 5 週；但「補助經費有上限、經費用罄提前收件」仍為結構性變數
- **iPhone 18 Pro T+3 交機首週後首個工作日 + Chunghwa 首發 2 分鐘售罄的一手數據** — `.Focus Taiwan` 9/12「Apple's latest iPhones — iPhone 18 Pro series and iPhone Duo — sold out within two minutes of preorders opening Thursday afternoon at Chunghwa Telecom」續為官方一手數據；台灣光電光學台廠敘事「Q4 主升段 = iPhone 18 Pro」在週一開盤後續驗證；下一節點 T-25 Duo 預購倒數（10/16 8pm Taiwan Mobile）
- **Cognition SWE-2 免費 T-19 剩 19 天 + Devin Pro $20 全月免費捆綁 + 64% cheaper than Fable 5.1** — `.MarkTechPost` / `.MindStudio` / `.saascity` 一致「SWE-2 bundled into Devin Pro at $20/mo, SWE-2 usage included free through October 10, 2026」+「post-trained from Kimi K3 2.8T-parameter base with multi-trillion-parameter RL」+「64% cheaper than Fable 5.1 at FrontierCode comparison point」；per-token pricing 未公布仍為採用最大阻礙、cloud runtime 不含免費；「零成本 19 天 A/B」為獨立開發者剩下 shadow eval 窗
- **Grok 4.7 T+9 Musk 9/14 首次自比「roughly on par with Opus 5.0, not 5.1」= vaporware pattern 進入「降低期望值」新階段** — `.CellCog` / `.orcarouter` / `.iweaver`「Elon Musk posted on September 1 that it comes out in 10 days, that day passed with no release; September 11 he wrote Grok 4.7 needs a few more days to cook; September 14 first time placed the model beside a named competitor: roughly on par with Opus 5.0, not 5.1」；xAI dev docs 仍列 4.6 為最新可用模型；「口頭 T-10 → T+11 需要 more time → T+13 降級為 Opus 5.0 tier」= 2026 兩大 vaporware pattern（Composer 3 + Grok 4.7）新標本
- **Claude Fable 5.1 cache reads $1.00 → $0.25 75% 減 + 25%–45% typical workload 便宜（9/1 T+20 續驗證）** — `.VentureBeat` / `.tech-insider` / `.digitalapplied`「Anthropic says the model costs an estimated 25% less than Fable 5 for typical workloads and up to about 45% less for heavily agentic work」+「Cache hits dropped to just $0.25 per input, down from $1.00, a 4x cut」；per-project「長跑 agent 快取重度」為 Sonnet 5 / Fable 5.1 分工新軸；台灣 indie SaaS「router 快取層 rebase」新窗
- **MODA NT$100 億 AI 新創資金 + 商業服務業 vertical 天然搭配 + AI Basic Act 為政策長線骨架** — `.moda.gov.tw press 19082` / `.digitimes` 2026-07-31「MODA has planned NT$10 billion (US$326 million) in financial assistance for AI startups to invest in growth and marketing」+「Taiwan's AI Basic Act passed Dec 23 2025, entered force Jan 14 2026」；MODA 新任部長林宜敬 9/3 Focus Taiwan「Taiwan AI island」10 大計畫 + NT$1,000 億跨年投資基線；「MODA 100 億 startup 資金 + 商業服務業 10 萬案 vertical + MODA 主權語料庫」= Q4 三合一政策 pitch 主軸
- **iPhone Duo T-25 + Taiwan Mobile 10/16 8pm vs Chunghwa 10/23 + hinge 短缺 TrendForce 5M / 24.8% 折疊機市佔上限** — `.MacRumors` / `.Taiwan News` / `.TrendForce` 續為結構性上限；「256GB NT$74,900 起 / 2TB NT$118,900 / Star White / Night Sky 兩色」；「首發 pre-order 兩軌通路落差 = 兩段 T-25 → T=0（10/16 Taiwan Mobile）→ T=+7（10/23 Chunghwa）新軸」；「for Taiwanese suppliers, foldables are no longer the main growth focus」= 台廠敘事已撤回 iPhone 18 Pro 光電光學
- **中秋 9/25 T-4 週一為最後 outbound 執行日 + 蝦皮 38% / momo 31% / PChome 12% / 酷澎 990K MAU 續為結構性壓力** — 昨日 T-5 週日 → 今日 T-4；「6 週檔期壓縮到 T-4」= 週三 T-2 出貨 SLA 截止；週日 T=0 為節後回購準備；「禮盒頁 + LINE 名單再喚 + 客服 SLA + 出貨規則 + 節後回購」5 錨點週一為最後可跑 outbound 執行日、週二起進入交付準備
- **Edge Compute 三強 32× 定價 gap 全量化：Cloudflare $51 vs Vercel $1,640 於 100M requests 同 workload** — `.bex.co`「Cloudflare Workers Bills $51, Vercel Bills $1,640: The Real Math Behind a 32x Edge-Compute Gap」+「$0.30/M requests 無 per-seat」+「Vercel Pro $20/seat + $2/M edge requests + $0.15/GB bandwidth」；台灣 indie SaaS「serverless 100M req/mo 規模 = 32× 定價 gap」為結構性選型變數；Next.js DX = Vercel / 成本敏感 = Cloudflare / Docker 全控制 = Fly.io 三軸未變

## 🔄 昨日追蹤

- 🔄 **iPhone 18 Pro T+2 → T+3 交機首週後首個工作日**：Chunghwa 2 分鐘售罄一手數據續為 pitch base；台廠光電光學 rerating 於週一開盤後為結構性訊號；顏色需求分岔（冰川藍 46% / 勃根地紅 26%）續為零售 vertical 深度訊號
- 🔄 **iPhone Duo T-26 → T-25 台灣預購倒數**：Taiwan Mobile 10/16 8pm 首發預購 + Chunghwa 10/23 開賣兩軌不變；TrendForce 5M / 24.8% 上限續、hinge 短缺結構性上限
- 🔄 **Cognition SWE-2 免費 T-20 → T-19 剩 19 天**：Kimi K3 post-trained + 64% cheaper than Fable 5.1 + FrontierCode comparison point 續為 pitch 定調；「零成本 19 天 A/B」為獨立開發者剩下 shadow eval 大窗
- 🔄 **Anthropic Claude Docs / Slides T+4 → T+5 續 Pro / Max rollout**：`.AI Weekly` / `.WOWTALE` 為新確認源；export 到 Google Docs / Microsoft Word / PowerPoint / PDF 續為結構性軸；商業服務業 vertical 模板 pitch 續有效
- 🔄 **Grok 4.7 T+8 → T+9 Musk 9/14 首次自比 Opus 5.0 not 5.1**：從「10 days」→「a few more days to cook」→「on par with Opus 5.0, not 5.1」三階段降低期望值；xAI dev docs 仍列 4.6 為最新；「大廠口頭承諾 → 期望值降級 → 無 confirmed release」pattern 進入新階段
- 🔄 **Cursor Composer 3 Vega T+90 → T+91（3 個月）續無 confirmed release**：Community Forum「Please release Composer 3 soon」續發酵；2026 兩大 vaporware pattern 續有效
- 🔄 **MODA 主權 AI 語料庫 T+5 → T+6 民間語料徵集**：7 個工作日審核 = 9/24 週四 / 9/25 週五授權到手；商業服務業 10 萬案「非中國廠牌」天然搭配續
- 🔄 **中秋節 9/25 T-5 → T-4 週一為 outbound 最後執行日**：週二起進入交付準備；蝦皮 38% / momo 31% / PChome 12% 續、酷澎 990K MAU 結構性壓力續
- 🆕 **商業服務業 10 萬案 deadline 修正：民國 116/10/20 = 2027-10-20**：本 brief 9/16–9/20 系列一致誤寫「T-31 五週衝刺」= 全數需勘誤為「受理至 2027-10-20 或補助經費用罄」；剩下窗口實為 13 個月非 5 週；但「經費用罄提前收件」仍為結構性變數
- 🆕 **Claude Fable 5.1 cache reads $1.00 → $0.25 75% 減 T+20 續驗證**：25%–45% typical workload 便宜；重度 agent 快取為降本結構性變數；台灣 indie SaaS「router 快取層 rebase」新窗
- 🆕 **MODA NT$100 億 AI 新創資金 + AI Basic Act 政策骨架**：「MODA 100 億 startup 資金 + 商業服務業 10 萬案 + MODA 主權語料庫」= Q4 三合一政策 pitch 主軸
- 🆕 **Edge Compute 32× 定價 gap 全量化**：Cloudflare $51 vs Vercel $1,640 於 100M requests 同 workload = 結構性選型變數；「規模到 100M req/mo」為決策臨界值

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **商業服務業 AI 導入 10 萬案 deadline 修正：民國 116/10/20 = 2027-10-20（本 brief 前 5 期系列誤記）+ 但補助經費用罄提前收件為結構性變數** | [經濟部商業發展署 — 提升商業服務業營運效能強化韌性計畫](https://www.aoc.gov.tw/showPublic/584)、[Maple Feather — AI 導入補助 10 萬怎麼申請？受理到 2027 年，全網都把截止日寫錯一年](https://maplefeather.com/article/ai-adoption-subsidy-100k-application-2026)、[metabiz — 2026 中小微企業 AI 補助大補帖](https://metabiz.tw/smb-ai-digital-transformation-subsidy-guide-2026/)、[長典創新 — 政府補助 AI 導入最高 10 萬元商業服務業](https://cimc.com.tw/%E3%80%902026%E6%9C%80%E6%96%B0%E6%94%BB%E7%95%A5%E3%80%91%E6%94%BF%E5%BA%9C%E8%A3%9C%E5%8A%A9ai%E5%B0%8E%E5%85%A5%E6%9C%80%E9%AB%9810%E8%90%AC%E5%85%83%E5%95%86%E6%A5%AD%E6%9C%8D%E5%8B%99%E6%A5%AD/) | 本 brief 誤記勘誤：「T-31 五週衝刺」為 2026 節奏概念、正確為「受理至 2027-10-20 或補助經費用罄」= 剩下窗口實為 13 個月非 5 週；但「補助經費有上限、經費用罄提前收件」仍為結構性變數；「單店 10 萬 + 多店 300 萬 + 整合 2,000 萬」三軌 pitch 明確覆蓋 SME → mid-market → 大型連鎖續為主軸 | 機會：**「補助 deadline 勘誤系列」10 萬案客戶 outreach 話術重寫 pitch base**；per-project「補助案 pitch」NT$ 15K-40K + 月度顧問 NT$ 3K-8K；「補助案受理 13 個月 vs 經費用罄提前」= 客戶決策節奏顧問新軸；「維持補助案 outbound 但不用『五週衝刺』威脅式語言」為長線信任錨；威脅：媒體全網「2026 截止」誤記為 SEO 深洞、需以「Maple Feather 勘誤源 + aoc.gov.tw 原文」差異化 |
| **iPhone 18 Pro T+3 交機首週後首個工作日 + Chunghwa 首發 2 分鐘售罄一手數據 + 台廠光電光學 rerating 週一驗證** | [Focus Taiwan — New iPhones sell out 2 minutes after preorders open Vendor](https://focustaiwan.tw/business/202609120006)、[Focus Taiwan — Early buyers snap up iPhone 18 Pro models](https://focustaiwan.tw/business/202609180007)、[Digitimes — iPhone 18 Pro sellouts across Taiwan as foldable Duo looms](https://www.digitimes.com/news/a20260918PD203/iphone-apple-taiwan-demand-e-commerce.html)、[Digitimes — iPhone 18 Pro preorders rise up to 20% in Taiwan as foldable Duo debuts](https://www.digitimes.com/news/a20260917PD217/apple-iphone-foldable-smartphone-taiwan.html) | 台廠光電光學 vertical Q4 深度研究窗續擴大：「Chunghwa 2 分鐘售罄一手數據 + Digitimes 預購上升 20% + Data Express Pro > Duo」= 三軌一手數據齊備；週一開盤台廠光電光學鏈 rerating 為結構性訊號；per-project「iPhone 18 Pro T+3 交機首週後首個工作日 dashboard × Data Express Pro > Duo × 台廠光電光學 rerating × Duo T-25 預購倒數」四合一 audit NT$ 40K-120K | 機會：**「iPhone 18 Pro T+3 交機首週後首個工作日 × 台廠光電光學 rerating × Duo T-25 預購倒數 × TrendForce 5M / 24.8% 上限」四合一週一盤前 audit NT$ 40K-120K** + 事件 pack NT$ 12K-30K；「Chunghwa 2 分鐘售罄」為 T+3 敘事一手數據錨；威脅：財經媒體 iPhone launch 已滿溢、需以「獨立開發者角度 + 週一盤前 rerating diff + Duo T-25 通路兩軌落差」差異化 |
| **MODA NT$100 億 AI 新創資金 + AI Basic Act + 林宜敬部長「AI island 10 大計畫 + 1,000 億跨年投資基線」政策長線骨架** | [MODA Press Release — MODA's Four Major Policy Initiatives Yields Remarkable Results](https://moda.gov.tw/en/press/press-releases/19082)、[Digitimes — Taiwan steps up investment in AI startups compute infrastructure](https://www.digitimes.com/news/a20260731PD206/taiwan-investment-infrastructure-development-moda.html)、[Focus Taiwan — New MODA head lays out ambitions for Taiwan AI ecosystem](https://focustaiwan.tw/sci-tech/202509030010)、[TechPolicy.Press — Taiwan's AI Basic Act Can Be a Model for Asia](https://www.techpolicy.press/taiwans-ai-basic-act-can-be-a-model-for-asia/) | Taiwan indie SaaS + vertical SaaS 政策 pitch 主軸擴大：「MODA 100 億 startup 資金 + 商業服務業 10 萬案 vertical + MODA 主權語料庫 + AI Basic Act 骨架」= Q4 四合一政策 pitch 主軸；per-project「MODA 100 億資金申請顧問 + AI Basic Act 合規對照」audit NT$ 40K-120K；「AI island 10 大計畫」為 2027 深度研究長線 | 機會：**「MODA 100 億 AI 新創資金 × 商業服務業 10 萬案 × MODA 主權語料庫 × AI Basic Act × iPhone 18 Pro rerating」五合一 Q4 政策 SaaS 產品 pitch deck**；per-project 政策合規 audit NT$ 40K-120K + 月度政策追蹤 NT$ 3K-8K / mo；威脅：MODA 官方 documentation 中英文分裂、需自建 how-to 內容領流量 |
| **中秋 9/25 T-4 週一為最後 outbound 執行日 + 週二起進入交付準備 + 蝦皮 38% / momo 31% / PChome 12% / 酷澎 990K MAU 4 大平台結構性壓力續** | [EasyStore — 2026 年全方位行銷佈局](https://blog.easystore.co/en-us/blog-2026-marketing-year-plan)、[歐鎷資訊 — 2026 節慶行銷行事曆](https://www.allmarketing.com.tw/news/web-marketing/marketing-calendar-2026)、[安永生活 — 2026 節慶行銷檔期總整理](https://www.anyong.com.tw/38003)、[邦妮 2 兔 — 蝦皮打折時間 2026](https://bonnie22.com/coupon/11306/) | 電商 vertical 品牌 pitch 續為 Q3–Q4 outbound 主軸：「中秋 T-4 週一 outbound 最後執行 + T-2 出貨 SLA 截止 + T=0 節後回購準備」= 三段節奏；「烤肉 + 月餅禮盒 + 送禮 + LINE OA 名單再喚 + 客服 SLA + 出貨規則 + 節後回購」7 錨點；週一 outbound = 蝦皮 / momo / PChome / 酷澎 + LINE OA 5 錨點壓縮到剩 T-4 執行日；per-project「中秋 T-4 → T=0 → 節後 T+7 三段電商轉單顧問」NT$ 15K-40K + 訂閱制 NT$ 3K-8K / mo | 機會：**「中秋 T-4 週一 outbound 最後執行 × 蝦皮 / momo / PChome / 酷澎 × LINE OA 名單再喚 × 節後回購」五合一電商轉單 audit NT$ 15K-40K**；per-project 電商 vertical pitch 續為主軸；威脅：媒體「中秋 / 月餅 / 烤肉」已滿溢、需以「LINE OA 名單再喚具體 SOP + 4 大平台流量分配實訊號」差異化 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **Cognition SWE-2 免費 T-19 剩 19 天 + Kimi K3 post-trained + 64% cheaper than Fable 5.1[^swe2-t19]** | AI coding agent（Devin ecosystem） | `.MarkTechPost` / `.MindStudio` / `.saascity` / `.aitrove.ai` 一致「SWE-2 launched September 10, 2026, post-trained from Kimi K3 2.8T-parameter base with multi-trillion-parameter RL that trains all reasoning-effort levels in a single run」+「64% cheaper than Fable 5.1 at the FrontierCode comparison point and about a quarter of GPT-6 Astra's cost」；per-token pricing 未公布仍為採用最大阻礙；「零成本 19 天 A/B」為獨立開發者剩下 shadow eval 窗 | Devin Free $0 / Pro $20 / Max $200 / Team $80 base + $40 per seat；SWE-2 至 10/10 全 Desktop + CLI 免費（cloud runtime 不含）；per-token pricing 未公布 | vs Fable 5.1（$10 / $50）：SWE-2 為 coding-specific + 免費至 10/10 + 64% cheaper at FrontierCode；vs Sonnet 5（$2 / $10）：SWE-2 為 coding 專項 vs Sonnet 通用；vs Cursor Composer 2.5（$0.50 / $2.50）：SWE-2 為 agent-native + web / fusion rollout underway；「Windsurf → Devin Desktop rebranded 2026-06-02」為產品線清晰化 | 立即：**Taiwan indie SaaS + Devin 訂閱團隊「SWE-2 免費至 10/10 全量測跑 vs Fable 5.1 shadow eval」剩下 19 天**；per-project「SWE-2 + Cursor Composer 2.5 + Claude Code Fable 5.1」三軸 coding cost audit NT$ 30K-80K + 月度 benchmark NT$ 2K-5K / mo；「64% cheaper at FrontierCode + Kimi K3 post-trained」為 pitch 定調更新；10/10 後定價回覆 Devin Pro / Max |
| **Claude Fable 5.1 cache reads $1.00 → $0.25 75% 減 + 25%–45% typical workload 便宜 T+20 續驗證[^fable51-cache]** | LLM inference（Anthropic Fable series） | `.VentureBeat` / `.tech-insider` / `.digitalapplied` 一致「Anthropic released Claude Fable 5.1 on 1 September 2026 at the same $10/$50 price as Fable 5」+「cache hits dropped to just $0.25 per input, down from $1.00 for Fable 5, a 4x cut」+「Anthropic says the model costs an estimated 25% less than Fable 5 for typical workloads and up to about 45% less for heavily agentic work」；`.llm-stats` 為 benchmark reference | Fable 5.1 $10 / M input / $50 / M output + cache read $0.25 / M（原 $1.00）；Mythos 5.1 restricted-access programs；Sonnet 5 $2 / M input / $10 / M output 續為 mid-tier | vs Fable 5：input / output 同價但 cache read 4× 便宜 = 重度 agent workload -25%–45%；vs Sonnet 5 $2 / $10：Fable 5.1 為 coding 專項頂尖 vs Sonnet 為性價比中階；vs SWE-2：Fable 5.1 為 API 直用 vs SWE-2 為 Devin 綁定；「快取重度 = Fable 5.1 首選」為 router 分工新軸 | 立即：**Taiwan indie SaaS「router 快取層 rebase」新窗**；per-project「Fable 5.1 cache 重度 workload rebase + Sonnet 5 分工」audit NT$ 30K-80K + 月度 benchmark NT$ 2K-5K / mo；「Fable 5.1 為重度 agent + Sonnet 5 為性價比 + SWE-2 為 Devin 綁定」為 2026 Q4 選型三角新軸 |
| **Anthropic Claude Docs / Slides beta T+5 續 Pro / Max rollout + `.AI Weekly` / `.WOWTALE` 新確認源[^claude-docs-t5]** | AI 文件 / 簡報 generator（one Claude 整合） | 9/16 T=0 → 9/21 T+5；`.AI Weekly` / `.WOWTALE` / `.Coursiv Blog` / `.Kantan.News` 一致「Anthropic Merges Cowork and Chat, Launches Claude Docs and Slides」+「Pro and Max users get the rollout first, with Team and Free plans to follow」+「native export to Google Docs, Microsoft Word, PowerPoint and PDF」；「Colleagues can work in the same document at the same time」為協作新軸 | Claude Pro $20 / mo、Max $100 或 $200 / mo、Team $30 / user、Enterprise 議價；Claude Docs / Slides beta 內建 Pro / Max 訂閱 | vs OpenAI ChatGPT Work：Anthropic 為 chat + Cowork + Docs / Slides + Design 四合一 vs ChatGPT + Codex 兩合一；vs Google Antigravity：Anthropic 為 standalone superapp + one Claude 統一介面 vs Google 綁 Workspace / AI Mode；vs Microsoft 365 Copilot：Anthropic 為 AI-native vs Microsoft 綁 Office；「export 到 Word / PowerPoint / PDF」為 hybrid workflow 新軸 | 立即：**Taiwan indie SaaS + 商業服務業 10 萬案 vertical use case T+5「Claude Docs / Slides beta 商業服務業模板」新窗續行**；per-project「Claude Docs vertical 模板（ERP / 雲庫存 / HR / 智慧排程 / 財會 / 資安）」audit NT$ 40K-120K + 月度顧問 NT$ 3K-8K；「Anthropic Claude super-interface × 商業服務業 10 萬案 vertical 模板 × LINE OA × MODA 主權語料庫」四合一 pitch |
| **Grok 4.7 T+9 Musk 9/14 首次自比「roughly on par with Opus 5.0, not 5.1」= vaporware pattern 降低期望值新階段[^grok47-t9]** | LLM inference（未發布） | `.CellCog` / `.orcarouter` / `.iweaver` 一致「Elon Musk posted on September 1 that it comes out in 10 days, that day passed with no release; September 11 he wrote Grok 4.7 needs a few more days to cook; September 14 first time placed the model beside a named competitor: roughly on par with Opus 5.0, not 5.1」；xAI dev docs 仍列 4.6 為最新可用模型；2.1T parameters + SpaceX 訓練 tease 續為 leak 主源 | Grok 4.6 (現行) 為 xAI SuperGrok Heavy $50 / mo；Grok 4.7 pricing 未公布 | vs Composer 3 Vega：Grok 4.7 為「口頭 T-10 → T+11 需要 more time → T+13 降級為 Opus 5.0 tier」vs Composer 3 為「Compile 6/22 tease T+91 無 confirmed release」；vs Opus 5.0：Grok 4.7 首次自比為降級信號、不建議為未發布模型改工作流；「口頭承諾 → 期望值降級 → 無 confirmed release」= 2026 三段 vaporware pattern 標本 | 立即：**Taiwan indie SaaS 週一 T+9「Grok 4.7 期望值降級 = 不 rebase」續行**；不建議為未發布模型改工作流；「Cursor Composer 2.5 × SWE-2 至 10/10 免費 × Fable 5.1 × Sonnet 5 × GPT-6 Astra × Gemini 3.8 Flash」六軸 router 選型續為主戰場；per-project coding model 選型 audit NT$ 30K-80K |
| **Gemini 3.8 Flash $0.75 / $3.75 introductory price 至 2026-12-31 + Antigravity IDE 整合 + Cyber 3.8 Flash 新[^gemini38flash-dec31]** | LLM inference（Google workhorse） | `.9to5google` / `.theregister` / `.Google blog`「Gemini 3.8 Flash rolling out three weeks after last release」+「introductory price of $0.75/1M input tokens and $3.75/1M output tokens until December 31」+「Gemini 3.8 Flash Cyber (replacing 3.5) for trusted testers via a new Fairwind Program with frontier-level performance in autonomous vulnerability discovery」；`.Antigravity X` 為 Gemini 3.8 Flash 整合官方確認 | Gemini 3.8 Flash: $0.75 / M input / $3.75 / M output（至 12/31 introductory）；Gemini API + Antigravity + Enterprise Agent Platform + Cloud 均可用；Cyber 3.8 Flash 為 Fairwind Program trusted testers | vs GPT-6 Astra ($10 / $50)：Gemini 為 workhorse commodity vs Astra 為 frontier；vs Sonnet 5 ($2 / $10)：Gemini 為 latency + throughput 首選 vs Sonnet 為 reasoning；vs Fable 5.1 cache $0.25：Gemini 為 base pricing 更低 vs Fable 為 cache 極致；「introductory 至 12/31 T-100 天」為結構性壓縮窗、獨立開發者 Q4 選型變數 | 立即：**Taiwan indie SaaS「router 6 軸 + Gemini 3.8 Flash T-100 天 introductory pricing lock-in」pitch 續為主戰場**；per-project「Gemini 3.8 Flash × Fable 5.1 cache × SWE-2 免費 × router 6 軸」四合一 audit NT$ 30K-80K + 月度 benchmark NT$ 2K-5K / mo；「$0.75 / M input」為成本敏感 SaaS 首選、agent 首選 workhorse |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：商業服務業 10 萬案「deadline 勘誤」× 補助合規 SOP × MODA 100 億 startup 資金 × 政策 pitch deck 內容內容深度化 🆕🔥

- **痛點來源**：本 brief 9/16–9/20 系列一致誤寫「T-31 五週衝刺 + 2026-10-20 截止」= 全數需勘誤為「受理至 2027-10-20 或補助經費用罄」= 剩下窗口實為 13 個月非 5 週；`.Maple Feather` 為勘誤主源、`.aoc.gov.tw 584` 官方原文為權威源；但「補助經費有上限、經費用罄提前收件」仍為結構性變數；台灣 vertical SaaS 「補助案 pitch deck deadline 勘誤 + MODA 100 億 startup 資金 + AI Basic Act 合規」= 三軸 pitch 主軸；未做「deadline 勘誤 + 政策合規深度化」的 SI 會靜默錯過 Q4 商業服務業 10 萬案 pitch 的信任錨窗
- **目標客群（台灣／亞洲）**：Taiwan vertical SaaS 創業者、商業服務業 10 萬案 SI、亞洲 8 國出海團隊、台灣政策合規顧問；per-project「補助案 pitch deck 勘誤系列 + MODA 100 億資金申請 + AI Basic Act 合規對照」audit NT$ 20K-50K + 訂閱制 NT$ 3K-8K / mo
- **技術複雜度**：2/5（aoc.gov.tw 584 原文 parse + Maple Feather 勘誤源 + AI Basic Act 條文對照 + MODA 100 億資金申請 SOP + 商業服務業 11 大類 vertical 模板 SOP）
- **預估 MRR**：NT$ 60K-180K（30-50 個訂閱 tenant + 10-15 個政策合規 audit + 商業服務業 10 萬案 pitch 5-10 家）
- **競品弱點**：中文 SEO「2026-10-20 五週衝刺」為結構性誤記深洞；`.Maple Feather` 為少數勘誤源、其他多為誤記；商業服務業 10 萬案 SI 多為「威脅式 outbound 話術」缺乏「補助 13 個月 + 經費用罄 vs 五週」精確語言；MODA 100 億 startup 資金 documentation 稀少
- **切入建議**：今日 9/21 T=0 完稿「補助 deadline 勘誤 + MODA 100 億資金 + AI Basic Act」政策 pitch deck v0；9/22 T+1 outbound 30-50 家 Taiwan vertical SaaS + 商業服務業 10 萬案 SI + 政策合規顧問；長線月度 MODA + AI Basic Act + 商業服務業 補助 3 軸更新續為主戰場

### 點子 2：Fable 5.1 cache $1→$0.25 75% 減 × SWE-2 免費 T-19 × Gemini 3.8 Flash T-100 天 × Router 快取層 rebase 顧問 🆕

- **痛點來源**：Claude Fable 5.1 cache reads $1.00 → $0.25 75% 減 + 25%–45% typical workload 便宜 T+20 續驗證 + SWE-2 免費至 10/10 T-19 天 + Gemini 3.8 Flash introductory pricing 至 12/31 T-100 天；獨立開發者「router 6 軸選型 + 快取層 rebase」= 剩下 Q4 三軸大變數；未做「Fable 5.1 快取重度 workload rebase」的團隊會在重度 agent workload 多付 25%–45%；未做「SWE-2 20 天 shadow eval」的團隊會錯過零成本 A/B 剩下 19 天窗
- **目標客群（台灣／亞洲）**：Taiwan indie SaaS 團隊、Devin 訂閱團隊、Cursor 訂閱團隊、Claude Code 訂閱團隊、Gemini API / Antigravity 訂閱團隊；per-project「Fable 5.1 快取層 + SWE-2 shadow eval + Gemini 3.8 Flash Q4 選型」audit NT$ 30K-80K + 訂閱制 NT$ 2K-5K / mo
- **技術複雜度**：3/5（Anthropic Claude API + prompt-cache instrumentation + Devin API + Google Gemini API + Cursor Composer API + 6 軸 benchmark 自動化 + task-fit 決策樹）
- **預估 MRR**：NT$ 60K-180K（30-50 個訂閱 tenant + 10-15 個 shadow eval audit）
- **競品弱點**：Anthropic 官方 docs 只寫「4× cache read 便宜」缺乏「重度 agent workload 決策樹」；中文「Fable 5.1 cache × SWE-2 × Gemini 3.8 Flash × Sonnet 5 × GPT-6 Astra × Grok 4.6」六軸 task-fit 決策儀表板空白；獨立開發者多為「用一個模型測全部」缺乏 task-specific benchmark
- **切入建議**：今日 9/21 T=0 完稿「Fable 5.1 快取 + SWE-2 T-19 + Gemini 3.8 Flash T-100」三軸 router 選型 v0；9/22 T+1 outbound 30-50 家 Taiwan indie SaaS + Devin 訂閱團隊；10/10 前每週更新 benchmark；「Grok 4.7 期望值降級 = 不 rebase」為結構性紀律

### 點子 3：iPhone 18 Pro T+3 交機首週後首個工作日 × Duo T-25 台灣預購兩軌 × 台廠光電光學週一 rerating dashboard 🆕

- **痛點來源**：iPhone 18 Pro T+3 交機首週後首個工作日 + Chunghwa 首發 2 分鐘售罄一手數據 + 台廠光電光學 rerating 週一開盤驗證 + Duo T-25 台灣預購倒數 + Taiwan Mobile 10/16 8pm vs Chunghwa 10/23 兩軌 + TrendForce 5M / 24.8% 上限 + hinge 短缺結構性上限；未做「iPhone 18 Pro T+3 交機首週後首個工作日 × Duo T-25 兩軌 × 台廠光電光學 rerating」四合一週一盤前 dashboard 的產品會錯過交機首週後首個工作日的 rerating 窗
- **目標客群（台灣／亞洲）**：財經 SaaS 創業者、跨境 SaaS 團隊、台灣蘋概股散戶、供應鏈 SI、TSMC ADR 投資分析師、零售 vertical SI；per-project 秋季蘋概股 dashboard NT$ 30K-80K + 訂閱制 NT$ 2K-5K / mo
- **技術複雜度**：3/5（TWSE / TAIFEX 三軌 API + 台廠光電光學 GS 11 檔 rerating 模型 + iPhone 18 Pro T+3 敘事 + Duo T-25 兩軌預購通路落差 + TrendForce 5M / 24.8% 結構性上限）
- **預估 MRR**：NT$ 80K-250K（40-60 個訂閱 tenant + 10-15 個 Q4 蘋概股週一盤前 audit + 供應鏈 SI 5-10 家）
- **競品弱點**：財經媒體週一盤前 live blog 多為單一敘事、中文「iPhone 18 Pro T+3 交機首週後 × Chunghwa 2 分鐘售罄一手數據 × Duo T-25 兩軌預購 × 台廠光電光學 rerating × TrendForce 上限」五合一空白；台灣散戶多為單一敘事、缺乏 dashboard 化
- **切入建議**：今日 9/21 T=0 完稿「iPhone 18 Pro T+3 × Duo T-25 × 台廠光電光學」三合一週一盤前 dashboard；9/22 T+1 outbound 40-60 家財經 SaaS + 供應鏈 SI + TSMC ADR 投資分析師；長線月度 iPhone 18 Pro / Duo / 台廠光電光學 dashboard 續為主戰場

## 🧰 軟體相關創新點子／產品

- **Edge Compute 32× 定價 gap 全量化**：Cloudflare $51 vs Vercel $1,640 於 100M requests 同 workload = 結構性選型變數（`.bex.co` 為量化主源）；「100M req/mo 為臨界值」= Next.js DX 綁定 Vercel vs 成本敏感選 Cloudflare 為 2026 Q4 選型明確錨；台灣 indie SaaS「serverless 100M req/mo 規模 = 32× 定價 gap」為結構性變數
- **Windsurf → Devin Desktop rebranded 2026-06-02**：Cognition 產品線清晰化 = SWE-1 / SWE-2 model line + Devin Desktop / Cloud / CLI product line 二分；「AI IDE + agent-native」= 台灣 indie SaaS Q4 IDE 選型三軸（Cursor Composer 2.5 / Cursor Composer 3 Vega 未發布 / Devin Desktop with SWE-2）新錨
- **MODA NT$100 億 AI 新創資金 + AI Basic Act 為政策長線骨架**：MODA 新任部長林宜敬「AI island 10 大計畫 + 1,000 億跨年投資基線」+ AI Basic Act 已於 2026-01-14 生效；台灣 vertical SaaS 「MODA 100 億 startup 資金 + 商業服務業 10 萬案 + MODA 主權語料庫」= Q4 三合一政策 pitch 主軸新錨

## ⚡ 今日行動建議

- [ ] **完稿「商業服務業 10 萬案 deadline 勘誤 pitch deck v0」**：把本 brief 9/16–9/20 系列「T-31 五週衝刺 + 2026-10-20 截止」全數改為「受理至 2027-10-20 或補助經費用罄」，把客戶 outbound 話術由「威脅式五週衝刺」改為「補助案 13 個月 vs 經費用罄提前」精確語言（預期成本 4-6 hr / 產出：商業服務業 10 萬案 SI 信任錨系列）
- [ ] **啟動「Fable 5.1 cache $1→$0.25 75% 減 + SWE-2 免費 T-19 + Gemini 3.8 Flash T-100 天」router 快取層 rebase v0**（預期成本 6-10 hr + Anthropic + Google + Devin API + prompt-cache instrumentation / 產出：Q4 選型顧問 pitch base 素材）
- [ ] **完稿「iPhone 18 Pro T+3 × Duo T-25 × 台廠光電光學」三合一週一盤前 dashboard v0**（預期成本 6-12 hr + Twelve Data API $30 / mo + TWSE 免費 / 產出：週二 outbound 40-60 家財經 SaaS + 供應鏈 SI + TSMC ADR 投資分析師 base）
- [ ] **中秋 9/25 T-4 週一為 outbound 最後執行日**：把商業服務業 10 萬案客戶清單 + 電商轉單客戶交叉「禮盒頁 + LINE 名單再喚 + 客服 SLA + 出貨規則 + 節後回購」5 錨點做最後一輪 outbound（預期成本 2-4 hr / 產出：中秋節前 2-3 家 SME 補助案簽約 + 3-5 家電商轉單）
- [ ] **申請 MODA 100 億 AI 新創資金 pre-eligibility 檢查**：交叉「MODA 100 億 startup 資金申請條件 + AI Basic Act 合規對照 + 商業服務業 10 萬案 vertical 」pre-eligibility checklist（預期成本 3-5 hr / 產出：Q4 政策合規 SaaS 產品 pre-launch 檢查表）

## ⏳ 待觀察

- **商業服務業 10 萬案「經費用罄提前收件」訊號**：aoc.gov.tw 584 官方原文為「受理至 2027-10-20 或補助經費用罄」；經費用罄實際訊號為 Q4 outbound 剩下最後窗；「經費用罄」新聞出現前是本 brief 誤記「五週衝刺」的最後窗
- **Grok 4.7 T+9 → T+16 Musk「Opus 5.0 tier」自比是否兌現**：xAI dev docs 是否更新 4.7 model ID + pricing + benchmark；「口頭 → 期望值降級 → 無 confirmed release」為結構性 vaporware pattern
- **Cursor Composer 3 Vega T+91 是否 10 月釋出**：Compile 2026-06-22 tease 已 3 個月無下文、Community Forum「Please release Composer 3 soon」持續發酵；10 月是否進入公測為 Q4 IDE 選型變數
- **iPhone Duo T-25 → T=0 10/16 Taiwan Mobile 8pm 首發預購是否 2 分鐘售罄**：Taiwan Mobile vs Chunghwa 兩軌預購通路落差為 Q4 通路深度變數；hinge 短缺 TrendForce 首季估砍到 500 萬台為結構性上限
- **MODA 主權語料庫 T+6 → 到年底 tokens 是否達到 30 億**：6 月 6 億 → 8 月 22 億 3.6× 為結構性主軸；民間語料徵集為關鍵變數
- **Fable 5.1 cache $0.25 75% 減 T+20 → T+30 是否傳導到大廠 GPT-6 Astra 快取降價**：4× cache read 降價為結構性壓力；OpenAI / Google 是否跟進為 2026 Q4 定價戰新變數

[^swe2-t19]: Cognition 於 2026 年 9 月 10 日推出的第二代 coding agent，post-trained from Kimi K3 2.8T-parameter base，主打 pull request 級自主任務。免費期截止日為 2026-10-10（Devin Desktop 與 CLI，不含 cloud runtime），距今剩 19 天；FrontierCode 比較點下較 Fable 5.1 便宜 64%、成本約為 GPT-6 Astra 的四分之一；per-token pricing 至今未公布為採用主要阻礙。

[^fable51-cache]: Anthropic 於 2026-09-01 推出的 Claude Fable 5.1，input / output 定價維持 $10 / $50 不變，但 prompt cache read 由 $1.00 / M 降至 $0.25 / M（4× 便宜）；重度 agent workload 綜合成本較 Fable 5 便宜 25%–45%。適合以「快取重度」為 workload profile 的獨立開發者與 SaaS，是 2026 Q4 router 快取層 rebase 的結構性變數。

[^claude-docs-t5]: Anthropic 於 2026-09-16 併入「one Claude」統一介面推出的 beta 功能，讓使用者直接在 chat 內產出、編輯、共同協作與匯出文件、投影片。首波開放 Pro 與 Max 訂閱者，Team、Free 分階段跟進；文件可匯出 Google Docs 與 Microsoft Word，簡報可下載為 PowerPoint 或 PDF；今日 T+5 rollout 續行。

[^grok47-t9]: xAI 由 Musk 於 2026-09-01 X 貼文預告的下一代 Grok 模型，宣稱 2.1T 參數、以 SpaceX 工程資料訓練。原目標日 9/11 已過，9/11 Musk 改口「a few more days to cook」，9/14 首次自比「roughly on par with Opus 5.0, not 5.1」= 降低期望值三段標本；xAI 開發者文件仍列 4.6 為最新可用模型；與 Cursor Composer 3「Vega」並列為 2026 年兩大 vaporware pattern。

[^gemini38flash-dec31]: Google 於 2026-09-02 推出的第三代 Flash workhorse 模型，定位為 latency + throughput 優先、成本敏感的 batch / agent 主力；$0.75 / M input + $3.75 / M output 為 introductory pricing、至 2026-12-31 止，之後可能調升；提供 Google AI Studio、Antigravity IDE、Enterprise Agent Platform、Cloud 等入口。同步發布的 Gemini 3.8 Flash Cyber 為 Fairwind Program trusted testers 專屬。

## 📚 引用來源

1. [經濟部商業發展署 — 提升商業服務業營運效能強化韌性計畫](https://www.aoc.gov.tw/showPublic/584) — 2026
2. [Maple Feather — AI 導入補助 10 萬怎麼申請？受理到 2027 年](https://maplefeather.com/article/ai-adoption-subsidy-100k-application-2026) — 2026
3. [metabiz — 2026 中小微企業 AI 補助大補帖](https://metabiz.tw/smb-ai-digital-transformation-subsidy-guide-2026/) — 2026
4. [長典創新 — 政府補助 AI 導入最高 10 萬元商業服務業](https://cimc.com.tw/%E3%80%902026%E6%9C%80%E6%96%B0%E6%94%BB%E7%95%A5%E3%80%91%E6%94%BF%E5%BA%9C%E8%A3%9C%E5%8A%A9ai%E5%B0%8E%E5%85%A5%E6%9C%80%E9%AB%9810%E8%90%AC%E5%85%83%E5%95%86%E6%A5%AD%E6%9C%8D%E5%8B%99%E6%A5%AD/) — 2026
5. [Focus Taiwan — New iPhones sell out 2 minutes after preorders open](https://focustaiwan.tw/business/202609120006) — 2026-09-12
6. [Focus Taiwan — Early buyers snap up iPhone 18 Pro models](https://focustaiwan.tw/business/202609180007) — 2026-09-18
7. [Digitimes — iPhone 18 Pro sellouts across Taiwan as foldable Duo looms](https://www.digitimes.com/news/a20260918PD203/iphone-apple-taiwan-demand-e-commerce.html) — 2026-09-18
8. [Digitimes — iPhone 18 Pro preorders rise up to 20% in Taiwan](https://www.digitimes.com/news/a20260917PD217/apple-iphone-foldable-smartphone-taiwan.html) — 2026-09-17
9. [Taipei Times — Early buyers snap up iPhone 18 Pro models](https://www.taipeitimes.com/News/biz/archives/2026/09/19/2003864509) — 2026-09-19
10. [MacRumors — iPhone Duo Release Date and Pre-Orders](https://www.macrumors.com/2026/09/10/iphone-duo-release-date-pre-orders/) — 2026-09-10
11. [Taiwan News — Taiwan telecoms launch iPhone 18 Pro preorder campaigns](https://www.taiwannews.com.tw/news/6437480) — 2026-09-10
12. [TrendForce — iPhone Duo Expected to Capture Nearly 25% of Foldable Smartphone Market](https://www.trendforce.com/presscenter/news/20260910-13228.html) — 2026-09-10
13. [MarkTechPost — Cognition Releases SWE-2 A Kimi K3 Post-Trained Coding Model](https://www.marktechpost.com/2026/09/12/cognition-releases-swe-2-a-kimi-k3-post-trained-coding-model-that-matches-fable-5-1-on-frontiercode-at-64-lower-cost/) — 2026-09-12
14. [MindStudio — Cognition SWE-2 Benchmarks Pricing Real Test Results](https://www.mindstudio.ai/blog/cognition-swe-2-coding-model) — 2026-09
15. [saascity — SWE-2 Is Free on Devin's $20 Plan](https://saascity.io/blog/devin-swe-2-20-dollar-plan-september-2026) — 2026-09
16. [aitrove.ai — Cognition SWE-2 Near-Frontier Coding AI at 64% Lower Cost](https://www.aitrove.ai/blog/cognition-swe-2-coding-model-64-percent-cheaper-2026) — 2026-09
17. [Devin Cognition — Plans and Pricing](https://devin.ai/pricing) — 2026-09
18. [VentureBeat — Anthropic's Claude Fable 5.1 and Mythos 5.1 arrive with a 75% cost reduction for Fable cache reads](https://venturebeat.com/technology/anthropics-claude-fable-5-1-and-mythos-5-1-arrive-with-a-75-cost-reduction-for-fable-cache-reads) — 2026-09-01
19. [tech-insider — Anthropic Fable 5.1 Mythos 5.1 Cut Cache Cost 75%](https://tech-insider.org/anthropic-claude-fable-5-1-mythos-5-1-launch-2026/) — 2026-09
20. [Digital Applied — What Claude Fable 5.1 Costs and What It Breaks](https://www.digitalapplied.com/blog/claude-fable-5-1-cost-and-breaking-changes) — 2026-09
21. [AI Weekly — Anthropic Unifies Claude Chat and Cowork Adds Slide Export](https://aiweekly.co/alerts/anthropic-unifies-claude-chat-and-cowork-adds-slide-export) — 2026-09
22. [WOWTALE — Anthropic Merges Cowork and Chat Launches Claude Docs and Slides](https://en.wowtale.net/2026/09/19/235174/) — 2026-09-19
23. [Coursiv Blog — Claude Docs Slides Design Rollout Exports Open Questions](https://coursiv.io/blog/claude-docs-slides-design) — 2026-09
24. [CellCog — Grok 4.7 Release Date What Musk Promised What xAI Shipped](https://cellcog.ai/blog/grok-4-7-release-date/) — 2026-09
25. [OrcaRouter — Grok 4.7 Release Date Why the September 18 Window Closed](https://www.orcarouter.ai/blog/grok-4-7-release-date) — 2026-09
26. [iweaver.ai — Grok 4.7 Release Date Features Latest Updates](https://www.iweaver.ai/blog/grok-4-7/) — 2026-09
27. [9to5google — Gemini 3.8 Flash rolling out three weeks after last release](https://9to5google.com/2026/09/02/gemini-3-8-flash-launch/) — 2026-09-02
28. [The Register — With Gemini 3.8 Flash Google reminds everyone it's still in the race](https://www.theregister.com/ai-and-ml/2026/09/02/with-gemini-38-flash-google-reminds-everyone-its-still-in-the-race/5294049) — 2026-09-02
29. [Google Blog — Introducing Gemini 3.8 Flash and 3.8 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/) — 2026-09
30. [MODA Press — MODA's Four Major Policy Initiatives Yields Remarkable Results](https://moda.gov.tw/en/press/press-releases/19082) — 2026
31. [Digitimes — Taiwan steps up investment in AI startups compute infrastructure](https://www.digitimes.com/news/a20260731PD206/taiwan-investment-infrastructure-development-moda.html) — 2026-07-31
32. [Focus Taiwan — New MODA head lays out ambitions for Taiwan AI ecosystem](https://focustaiwan.tw/sci-tech/202509030010) — 2026-09-03
33. [TechPolicy.Press — Taiwan's AI Basic Act Can Be a Model for Asia](https://www.techpolicy.press/taiwans-ai-basic-act-can-be-a-model-for-asia/) — 2026
34. [bex.co — Cloudflare Workers Bills $51 Vercel Bills $1640 32x Edge Compute Gap](https://bex.co/blog/2026/07/11/cloudflare-workers-vercel-edge-compute-cost) — 2026-07-11
35. [morphllm — Cloudflare Workers vs Vercel 2026 pricing cold starts limits](https://www.morphllm.com/comparisons/cloudflare-workers-vs-vercel) — 2026
36. [EasyStore — 2026 年全方位行銷佈局](https://blog.easystore.co/en-us/blog-2026-marketing-year-plan) — 2026
37. [安永生活 — 2026 節慶行銷檔期總整理](https://www.anyong.com.tw/38003) — 2026
38. [邦妮 2 兔 — 蝦皮打折時間 2026](https://bonnie22.com/coupon/11306/) — 2026
