---
title: 每日創業情報 — 2026-10-15
date: 2026-10-15
tags: 創業情報, AI 產業, SaaS, 台灣
summary: 週四 TSMC Q3 法說 T-0 日 14:00 登場 Quiet Period 已結束 + iPhone Duo 預購 T-1 10/16 20:00 + Apple Welcome Home Day 2 + Haiku 5.5 T+8 + Shopify Spring '26 UCP。
keywords: TSMC Q3 法說 10月15日 14:00 T-0 Quiet Period 結束, iPhone Duo 預購 T-1 10月16日 20:00 Apple 台灣 Taiwan Mobile myfone, Apple Welcome Home HomePad homeOS 10月13日 Day 2 docs 更新, Claude Haiku 5.5 Artificial Analysis 43 OSWorld 72.4% Terminal-Bench 39.2% refusal bug, Shopify Spring '26 Edition Universal Commerce Protocol Sidekick Taiwan SME 跨境電商, 大立光 FAU 2027 中量產 2028 貢獻, Anthropic IPO 11月9日 Nasdaq 2T S-1 confidential Series H 965B, OpenAI Agent Builder 11月30日 Evals 10月31日 T-16 Agents SDK, Cosine Swarm Kilo Code v7 平行 agent Claude Code Codex SDK, Vercel AI SDK v7 HarnessAgent codemod Node 22 ESM 遷移
---

# 每日創業情報 — 2026-10-15

## 🎯 今日 TL;DR

- **週四 Day 4 + Q4 第 15 日 + 本月唯一完整工作週 10/12–10/18 Day 4 + TSMC Q3 法說 T-0 日（14:00 Taiwan time）Quiet Period 已結束 + iPhone Duo 預購 T-1（10/16 20:00）+ 開賣 T-8（10/23）+ Apple Get Ready Day 4 + Haiku 5.5 T+8 + SWE-2 T+5 + Agent Builder T+46 + Evals T+16 + Anthropic IPO T+25** — 10 軸疊加 = 「TSMC 法說 14:00 盤後數小時 × 預購倒數 24 小時 × Agent Builder 遷移倒數 46 天」3 軸共振 Day 4 收斂日
- **🔄 TSMC Q3 法說 T-0 日 14:00 開始 — 財測 Q3 營收 US$44.6–45.8B YoY +37% + 毛利率財測 65–67% + 元大 Q3 EPS 29.03 beat 共識 + 共識 Q3 稅後淨利 YoY +65% ~NT$7,463 億 + CapEx FY26 US$60–64B 區間 + 2nm 爬坡下半年毛利稀釋 3–4 ppt + 市場聚焦 FY27 EPS 157.29 外推、CapEx FY27 是否破 US$80B、2027 製程報價漲 5–10% 口徑是否落實** — 法說結果出爐後 1 小時「6 軸對照 push」為本週 push notification 最強窗口；外資 TP spread 麥格理 4,410 vs MS 3,088 隱含 ~43% 的 bull / bear 分化
- **🔄 iPhone Duo 預購 T-1 24 小時倒數 — 10/16 20:00 Apple 台灣 + Taiwan Mobile myfone 網路門市同步開放 + 中華電信 10/23 近 500 間據點開賣（Taiwan Mobile 10/16 20:00 單機預購 vs 中華電信 10/23 門市分流）+ 售價 NT$74,900 起 + eSIM only + Star White 60% / Night Sky 40% + 近百萬預約 + Foxconn 良率 60% + 新日興／鴻海合資吃鉸鏈 65% + 1,000 萬 vs Foxconn 下修 600 萬年目標缺口** — Day 4 為「10/16 20:00 預購搶空時段預測 + eSIM only provisioning FAQ 寫定」窗口
- **🆕 Shopify Spring '26 Edition Universal Commerce Protocol[^ucp] + Catalog + Sidekick agent 升級 — 把產品資料「不用額外整合」直接推給 ChatGPT / Microsoft Copilot 購物 agent + Sidekick 從只能講話升級為可以執行 action + 小商家被 agent-first commerce 直接拉上牌桌** — 對台灣 SME 跨境電商（估 3,000+ 家 Shopify 商店）：「LINE OA + Shopify Magic 多語 listing + UCP agent commerce」3 合一新窗口；中小商家不需自建 agent integration 就能被 AI 購物 agent 找到
- **🆕 Apple「Welcome Home」事件 10/13 Day 2 遞延訊號 — HomePad[^homepad]（6 吋觸控 + HomePod 揚聲 + 相機辨識家庭成員）+ HomePod mini 新一代 + Apple TV 4K + homeOS[^homeos] 平台 + LG 共同開發 + 傳聞 Mark Gurman 口徑「10 月正式對外」已落地** — HomeKit / homeOS 第三方 app SDK docs 預計 24–72 小時內更新；台灣智慧家居 OEM 本週 Day 4–5 內必須評估「HomePad SDK / Siri Shortcut / Home 自動化類 wrapper 機會」
- **🔄 Haiku 5.5 T+8 Artificial Analysis Intelligence Index 43 max effort + 第三方 cost per task 仍 provisional（未模擬 >100K token 的 5x 階梯定價）+ OSWorld 2.1 72.4% + Terminal-Bench 4.0 僅 39.2% + Over-refusal bug 壓低 AutomationBench-AA 至 35%（待 Anthropic 修補後重測）** — 第 2 週 shadow eval 新發現：Over-refusal bug 為「切換後實際遇到的拒答率升高」提供第三方驗證
- **🔄 Anthropic IPO T+25 Reuters「期中選舉後路演」口徑續行 + Series H 已 $965B 估值 + Nasdaq 目標 $2T + S-1 6/1 confidential + 承銷 Goldman / JPM / MS** — S-1 flip 公開（EDGAR）為下週新 trigger；本週 Day 4 進入「期中選舉 11/3 → IPO 11/9 → S-1 flip 可能介於期中選舉當週至下週」10 日時窗
- **🔄 大立光 10/8 法說遞延訊號 Day 4 收斂 — FAU[^fau] 首張量產訂單確定 + 2027 中量產 + 2028 才貢獻營收 + 11 月拉貨下滑（10 月與 9 月相當）+ 2027 EPS 共識 ~209 元 + 10/12 漲停 7,325 + 高盛 TP 11,000** — Day 4 本週關鍵分流：「2027 中量產 / 2028 貢獻營收」vs「2026 立即營收」敘事節制必須守住；若 10/15 TSMC 法說 CoWoS 2027 tone 強 → 大立光 FAU 連動補漲加速

## 🔄 昨日追蹤

- 🔄 **TSMC 法說 T-1 → T-0 + Quiet Period Day 10（最後 1 日）→ 已結束**：今日 Day 4 為「法說結果出爐前最後 2 小時 + 盤後反應前 1 小時」雙 push notification 窗口
- 🔄 **iPhone Duo T-9 → T-8 開賣 + T-2 → T-1 預購 + Apple Get Ready Day 3 → Day 4**：預購 24 小時倒數；「10/16 20:00 預購時段分流（Apple 台灣 vs Taiwan Mobile myfone）+ eSIM only provisioning FAQ」今日寫定
- 🔄 **Haiku 5.5 T+7 → T+8**：Artificial Analysis Intelligence Index 43 max effort + Over-refusal bug 新訊號；shadow eval 第 2 週計入 refusal rate
- 🔄 **SWE-2 pricing opaque T+4 → T+5 + Pro / Max / Teams 免費試用已到期**：Cognition 續未公告 per-token 單價；今日 Day 4 「SWE-2 / Devin 月費 ROI 自動審計 CLI」商機日續行
- 🔄 **Agent Builder 11/30 T+47 → T+46 + Evals 10/31 T+17 → T+16 + reusable prompts 11/30 同下線**：Evals read-only 剩 16 天、Agent Builder 剩 46 天；今日 Day 4 「workflow 清單手動驗證 code export 行為 1:1」實作 Day 3
- 🔄 **Anthropic IPO 11/9 T+26 → T+25**：Reuters 期中選舉後路演口徑續行；S-1 flip（EDGAR）仍為先行觀察訊號；T-25 進入 10 日 S-1 flip 可能窗口
- 🔄 **Apple Welcome Home 10/13 Day 2**：Apple docs 更新預計 24–72 小時內（Day 2 已過半）；HomePad SDK / HomeKit 深度整合 docs 本週 Day 4–5 內必須讀完一次
- 🔄 **大立光 FAU 遞延訊號 Day 4**：「2027 中量產 vs 2028 貢獻營收」敘事節制窗口；本週關鍵分流點

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🔄 TSMC Q3 法說 10/15 14:00 T-0 日 Quiet Period 已結束 + 財測 Q3 營收 US$44.6–45.8B YoY +37% + 毛利率 65–67% + 共識 Q3 稅後淨利 YoY +65% ~NT$7,463 億 + 元大 Q3 EPS 29.03 beat + 市場共識毛利率 ~66.5% 營業利益率 ~57.1% + CapEx FY26 US$60–64B + 2nm 爬坡下半年毛利稀釋 3–4 ppt + 外資 TP spread 麥格理 NT$4,410（最高）vs MS NT$3,088（最低）~43% + 法人聚焦 6 大問：FY27 營收成長、CapEx FY27 是否 US$80B、2027 製程報價漲 5–10%、2nm 月產能 12 萬片、CoWoS-L 2027 擴產 60%、A16 2026 H2 量產 NVIDIA 獨家** | [TSMC 投資人關係 — 法說 10/15 14:00 + Quiet Period 10/5–10/14](https://investor.tsmc.com/quarterly-results)、[Hudson Labs — TSMC Q3 2026 Earnings Preview](https://www.hudson-labs.com/research/tsmc-q3-2026-earnings-preview-tsm-revenue-and-margins)、[Tikr Blog — TSMC Q3 earnings preview 65% profit growth 50% margin](https://www.tikr.com/blog/tsmcs-q3-earnings-preview-65-profit-growth-but-net-margin-seen-slipping-to-50)、[元大投顧 — TSMC Q3 EPS 29.03 元上修](https://finance.technews.tw/2026/10/07/tsmcs-advanced-process-technology-has-no-rivals-recently/)、[TrendForce — CapEx 60–64B 2026 上修](https://www.trendforce.com/news/2026/07/16/news-tsmc-lifts-2026-capex-15-to-60-64b-hikes-sales-outlook-to-over-40-despite-q3-margin-dip/) | 週四 Day 4 法說 T-0 日：「Q3 EPS 元大 29.03 vs 共識 beat/miss × 毛利 65–67% 守得住否 × FY27 EPS 157.29 元 × CapEx FY27 US$80B 落實否 × 2027 製程漲 5–10% 口徑 × 麥格理 4,410 vs MS 3,088 ~43% spread × 2nm 12 萬片 CoWoS-L × A16 NVIDIA 獨家 × 2027 tone × iPhone Duo A20 Pro 蘋概連動」10 軸；per-project「法說當天盤後 1 小時 beat/miss 快報 × 共識對照 push × 外資 TP 收斂度評估 × 蘋概漲幅精算 × FY27 EPS 157.29 外推度評估」5 合一 pitch pack NT$ 60K–180K | 機會：**「TSMC 法說 T-0 日 × Q3 EPS 元大 29.03 beat × FY27 EPS 外推 × CapEx FY27 落實度 × 2027 製程漲 × 麥格理 4,410 vs MS 3,088 ~43% spread 收斂度 × 2nm 12 萬片 × CoWoS-L × A16 × 2027 tone × iPhone Duo A20 Pro 蘋概漲幅」11 合一 post-earnings audit NT$ 80K–240K**；最強甜蜜點 = 14:00 法說開始 → 15:00 Q&A → 16:00 外資 report 1 小時內出手；威脅：法人分化 ~43%，單押元大 29.03 bull 側會錯失 MS 保守側讀者；須分流 bull / bear 兩版 push |
| **🔄 iPhone Duo 預購 T-1（24 小時倒數）+ 10/16 20:00 Apple 台灣 + Taiwan Mobile myfone 網路門市同步開放 + 中華電信 10/23 近 500 間據點開賣（10/16 20:00 中華電信預購時段未明確公告，建議讀者直接查官網）+ 售價 NT$74,900 (256GB) – NT$118,900 (2TB) + eSIM only + Star White 60% / Night Sky 40% + 近百萬預約 + Foxconn 組裝良率 60% + 新日興／鴻海合資吃鉸鏈 65% + Amphenol 良率不如預期由新日興頂上 + 1,000 萬 vs 600 萬 Foxconn 下修年目標** | [中央社 — iPhone Duo 10/16 20:00 預購 10/23 發售（蘋果中國官網公布）](https://www.cna.com.tw/news/afe/202610020083.aspx)、[ETtoday — Apple 台灣 10/12 Get Ready + 10/16 20:00 預購 + 10/23 開賣](https://www.ettoday.net/news/20261002/3247876.htm)、[Mirror Media / SETN — 中華電信 10/23 近 500 間據點](https://www.mirrormedia.mg/external/setn_1904699)、[AppleInsider — Foxconn 良率 60% + 鉸鏈 65%](https://www.appleinsider.com/articles/26/09/29/making-millions-of-iphone-duos-is-proving-harder-than-apple-hoped)、[PeopleNews — iPhone Duo 售價 NT$74,900 起](https://www.peoplenews.tw/articles/lifestyle/54587) | 週四 Day 4 預購 24 小時倒數：「iPhone Duo T-1 預購 × 10/16 20:00 Apple 台灣 vs Taiwan Mobile myfone 同步 × 中華電信 10/23 門市 500 據點 × eSIM only × 新日興 65% 鉸鏈 × Foxconn 良率 60% × Star White 60% / Night Sky 40% × 近百萬預約 × 1,000 萬 vs 600 萬 Foxconn 下修 × A20 Pro × 大立光 FAU 連動 × 玉晶光 + 華通 + 台郡 + 臻鼎 60–65%」12 軸；per-project「預購 T-1 → T-0 → 10/23 開賣 timeline × 10/16 20:00 搶空時段預測 × eSIM only provisioning FAQ × Apple 台灣官網 vs Taiwan Mobile myfone 中華電信分流 × 盤後 push notification 時效窗口」5 合一 vertical push notification NT$ 60K–180K | 機會：**「iPhone Duo T-1 預購 × 10/16 20:00 搶空 × Apple 台灣 vs Taiwan Mobile myfone × 中華電信 10/23 × eSIM only × 新日興 65% × Foxconn 良率 60% × Star White 60% / Night Sky 40% × A20 Pro × 大立光 FAU × 蘋概護城河 × 鴻海 1.15 兆首破兆」12 合一 vertical audit NT$ 100K–240K**；10/16 20:00 預購時段為「push notification 盤後時效最後甜蜜點」；威脅：中華電信 10/16 20:00 預購時段無明確公告，直接等同台灣大哥大 myfone 時段會誤導讀者；須在 FAQ 中註明「中華電信 10/23 開賣當天為主，預購請留意官網」 |
| **🆕 Shopify Spring '26 Edition Universal Commerce Protocol + Catalog + Sidekick agent 升級 — 把產品資料「不用額外整合」直接推給 ChatGPT / Microsoft Copilot 等 agent + Sidekick 從純對話升為可執行 action + 小商家被 agent-first commerce 直接拉上牌桌（Small Business Trends 8/30 報導 US-focused，台灣 SME 跨境電商估 3,000+ 家 Shopify 商店本週 Day 4–5 須評估）** | [Novo — Shopify Unveils Tools for AI-Driven Shopping](https://www.novo.co/small-business-news/shopify-unveils-tools-for-ai-driven-shopping-experiences-and-merchant-success)、[PowerCommerce — Shopify Agentic AI 轉型](https://powercommerce.com/da/blogs/ecommerce-hub/shopifys-strategic-shift-towards-agentic-ai-navigating-the-future-of-e-commerce)、[Presta — Shopify Agentic plan pricing 2026](https://wearepresta.com/shopify-agentic-plan-pricing-and-ai-strategy-for-2026/)、[ACTGSys — AI Cross-Border Ecommerce Playbook 2026 Taiwan SME](https://actgsys.com/en/blog/ai-cross-border-ecommerce-sme-2026) | 週四 Day 4 跨境電商 vertical SaaS 新窗口：「Shopify UCP × Sidekick agent × ChatGPT / Microsoft Copilot 購物 agent × Taiwan SME 跨境電商 3,000+ 家 × LINE OA + Shopify Magic 多語 listing × 亞洲 / 日本 / 美國 市場 × scraping 錯誤商品資訊風險」7 軸；per-project「UCP + LINE OA 多語 listing × AI agent 搜尋優化（跨境版 LLMO）× Sidekick 自動化運營 workflow × 風險控制 scraping 錯誤 × Taiwan Shopify 商店 SI 顧問案」5 合一 vertical pitch NT$ 50K–150K | 機會：**「Shopify UCP × Sidekick × ChatGPT / Microsoft Copilot agent × Taiwan SME 跨境電商 × LINE OA × 多語 listing × 跨境 LLMO × 風險控制」8 合一 vertical audit NT$ 60K–160K**；台灣中小商家不需自建 agent integration 就能被 AI 購物 agent 找到；威脅：UCP 美國先行、台灣 Shopify 商店 UCP 相容度、Catalog 自動 feed 商品是否會 scrape 錯誤多語資訊，須在實施前先做 FAQ 評估 |
| **🔄 Apple「Welcome Home」事件 10/13 Day 2 遞延訊號 — HomePad（6 吋觸控 + HomePod 揚聲 + 相機辨識家庭成員）+ HomePod mini 新一代 + Apple TV 4K + homeOS 平台 + LG 共同開發 + 已確認 Mark Gurman 口徑「10 月正式對外」已落地 + Apple docs 預計 24–72 小時內更新 Day 2 已過半** | [Tom's Guide — Apple Welcome Home 10/13 HomePad all new products](https://tomsguide.com/home/smart-home/apple-announces-welcome-home-event-for-oct-13-homepad-and-all-the-new-products-to-expect)、[Macworld — Welcome Home event smart home hub HomePod mini Apple TV 4K](https://macworld.com/article/3253965/welcome-home-event-smart-home-hub-homepod-mini-apple-tv-4k.html)、[iPhoneSoft — HomePad homeOS 10 月 Gurman 口徑](https://iphonesoft.fr/2026/09/22/homepad-nouveau-systeme-homeos-combine-ios-tvos-watchos)、[9to5mac — Apple Welcome Home October 13](https://9to5mac.com/?p=1073476) | 週四 Day 4 智慧家庭題材 Day 2 評估：「HomePad 6 吋觸控 × HomePod mini 新一代 × Apple TV 4K × homeOS 平台 × LG 智慧家居合作 × Apple docs 24–72 小時內更新倒數 × Siri Shortcut / Home 自動化 wrapper」7 軸；per-project「HomePad SDK docs 深度閱讀 × HomeKit 第三方 widget 評估 × homeOS 平台開放度 × LG 合作連鎖 OEM × Apple TV 4K 新晶片台廠光學連動」5 合一 push notification NT$ 20K–60K | 機會：**「Apple Welcome Home × HomePad × HomePod mini × Apple TV 4K × homeOS × HomeKit 第三方 app × LG 合作 × 台灣智慧家居 OEM 連鎖 × Siri Shortcut 自動化 wrapper」9 合一 push audit NT$ 30K–90K**；本週 Day 4–5 docs 更新窗口為最後觀察點；威脅：Apple 稱事件屬「Apple Experience」非 keynote 直播，規模可能比預期小、SDK 開放度可能保守、不宜放大敘事；若 docs 更新 Day 4 結束仍沒出，Day 5 前續行觀察但不改變行動 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🆕 Shopify Sidekick agent 升級版（Spring '26 Edition — Sidekick 從純對話升為可執行 action + Universal Commerce Protocol + Catalog 自動 feed）** | 電商 AI agent / Shopify 原生 | 商家可用自然語言請 Sidekick 執行 action（新增產品、改價、安排促銷、生成 marketing copy）；UCP 把產品自動 feed 給 ChatGPT / Microsoft Copilot 購物 agent | 內建於 Shopify 訂閱（Basic $29 / Shopify $79 / Advanced $299 / Plus $2,300+）；Agentic 功能無額外費用 | vs Zendesk AI / Intercom Fin / Octane AI；Sidekick 的差異在「原生 Shopify 資料 + 可直接改商店」—— 外部 agent 需要 API 整合，Sidekick 不用 | 🟢 已用 Shopify 的台灣 SME 跨境電商：本週 Day 4–5 試裝 Sidekick agent 跑 1 個 workflow（例如自動生成多語 product description + 自動發 LINE promo）；🟡 多店多平台（Shopify + WooCommerce + 蝦皮）：Sidekick 只動 Shopify 側，不能全棧替代；🔴 商品非跨境、純內銷 LINE 商店：Sidekick 不是主線 |
| **🔄 Haiku 5.5 (T+8)：Artificial Analysis Intelligence Index 43（max effort）+ 略勝 Gemini 3.8 Flash (41) + GPT-6 Luna (38) + Over-refusal bug 壓低 AutomationBench-AA 至 35% + OSWorld 2.1 72.4% + Terminal-Bench 4.0 39.2% + SWE-Bench Pro 64.8（max effort）+ GDPval-AA v2.1 1620 Elo（vs Haiku 4.5 735）** | LLM 小模型 / 高頻 subagent | 短 context（≤100K）分類、摘要、轉譯；effort levels 可調推理深度；1M context、128K max output | $0.10/M in、$0.50/M out（≤100K）；$0.50/M in、$2.50/M out（>100K）；cache reads $0.01/M；cache 最低 token 數從 Haiku 4.5 的 4,096 降至 512 | 第三方成本比較仍 provisional（未模擬 >100K token 的 5x 階梯定價）；Terminal-Bench 僅 39.2%（Sonnet 5.5 70.6%）；Over-refusal bug 待 Anthropic 修補；GDPval-AA 1620 Elo 強但知識 benchmark 不代表 agentic coding | 🟢 甜蜜點：短 context + 分類／摘要／轉譯類 subagent + 盡量 ≤100K token；🔴 禁區：agentic coding、Terminal 操作、>100K 長 context、refusal rate 敏感應用；T+8 第 2 週 shadow eval 加入 refusal rate 指標、等 Anthropic 修補後重估 |
| **🔄 Cosine Swarm（倫敦 Cosine AI 10/13 Product Hunt 首頁）— 多代理分層 Orchestrator / Task Owner / Worker + CLI + Desktop + Cloud 單一 runtime** | AI 編碼 agent / 多代理協調 | 長時程 SWE 任務；多代理分層執行；單一 runtime 跨 CLI、Desktop、Cloud | 定價未公開（商業 contact-sales）；試用方案尚未對外 | vs Devin SWE-2（單代理）/ Claude Code（single-session agent + subagent）/ Codex SDK；Cosine Swarm 差異在「多代理分層」而非「單代理深度」—— 用於「可拆成多子任務的大型 refactor」最合理 | 🟢 本週 Day 4–5：若有「大型 monolith 拆解」「multi-service 一次性 refactor」等長時程 SWE 專案，考慮申請 beta；🟡 多數一人 SaaS 的「單檔案改 + 多檔案小改」還是 Claude Code / Codex SDK 更合算；🔴 定價未公開前不投產 |
| **🔄 Kilo Code v7 for VS Code — 平行 AI agent in VS Code + 完全免費 open source** | VS Code AI agent extension | 在 VS Code 內平行跑 AI agent；替代 Cursor Composer / Cline / Continue | 完全免費 open source | vs Cursor Composer 2.5 / Cline / Continue / Codex VS Code extension；Kilo Code v7 的差異為「平行 agent + 免費」—— 對不願換 VS Code → Cursor 的獨立開發者是誘因 | 🟢 已用 VS Code + 想試 agent extension 但不願換 Cursor：本週 Day 4–5 安裝試一條 pipeline；🟡 已重度用 Claude Code / Codex SDK：不急換，記下 v7 為 B 計畫；🔴 Kilo Code 商業模式未明 → 不投產作為主線 |
| **🔄 shadcn/ui + Base UI 1.8.0（9/4 發佈）+ Toast + React Aria 選項 + shadcn/typeset — 7/3 已改預設 Base UI** | React UI library | 元件 variant 可用 copy-paste 流程；Base UI 1.8.0 已達六百萬週下載 + create 工具用戶 2:1 選 Base UI 而非 Radix | 完全免費 open source | vs Radix（傳統預設）/ Headless UI / Mantine；shadcn 2026 Q3 已把 Base UI 作為預設 → 新專案自動吃；Button 不再有 asChild，改用 render prop | 🟢 新專案 + 本站 mynews 已 Base UI 1.8.0：持續；🟡 既有 Radix 專案：保持現狀不急換、每次 commit 遷一個元件、重大 breaking change 為 asChild → render prop；🔴 不要只為「跟上預設」而全站重寫 |
| **🔄 Vercel AI SDK v7 HarnessAgent（6/5–6/12 社群週報已登場 experimental canary）+ codemod (`npx @ai-sdk/codemod v7`) + Node ≥22 + 純 ESM；codemod 不覆蓋 HarnessAgent 專用遷移須手動補** | TS AI SDK / agent framework | HarnessAgent 跑 Claude Code / Codex / Pi 的 sandboxed sessions；一個 API 操控多家 agent harness；durable agent state；pause for human approval | 開源免費 | vs CrewAI / Mastra 1.0 / LangGraph.js / Anthropic Agent SDK / OpenAI Agents SDK；HarnessAgent 是「唯一在 TS 側原生整合 Claude Code + Codex + Pi 的 experimental API」；注意 experimental canary = API 可能變 | 🟢 Day 4 跑 `npx @ai-sdk/codemod v7` + 手動補 HarnessAgent provider / sandbox 設定；Node ≥22 + 純 ESM 要先確認；🟡 既有 LangGraph / CrewAI production agent 可觀望 1–2 週 |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：TSMC 法說結果 2 小時內「bull vs bear 雙版」push notification SaaS 🆕

- **痛點來源**：TSMC Q3 法說 10/15 14:00 外資 TP spread 麥格理 4,410 vs MS 3,088 ~43%、元大 29.03 bull vs MS 保守側差 ~17 元 EPS；台灣受眾看「鉅亨／MoneyDJ／工商」法說新聞 push 都是「單側敘事」—— 不知道同一組事實怎麼解讀出 bull 或 bear、也沒時間自己翻 10 份外資 report
- **目標客群**：台灣／亞洲做蘋概股 / 半導體 push notification SaaS 的獨立開發者（估 50–150 家）+ 想做「法說結果 bull vs bear 雙版快報」vertical SaaS 的 solo founder
- **技術複雜度**：3/5 — Node.js + TSMC 投資人關係 API + 外資報告 scraping + push notification 棧（APNs + FCM + LINE Notify）+ bull / bear 共識對照資料庫 + 可選 Claude Haiku 5.5 分類（≤100K token 甜蜜點）
- **預估 MRR**：訂閱 NT$ 399–1,299/mo × 500–1,500 用戶 = NT$ 200K–1.9M MRR（規模化後）；初版 freemium
- **競品弱點**：台灣目前無 bull / bear 雙版本法說結果 push；一般快報只給事實不給解讀分流
- **切入建議**：10/15 14:00 法說當天 MVP 直接 live beta → 15:00 Q&A 結束前推第一輪 bull / bear 對照 push → 16:00 外資 report 更新第二輪 → 10/16 盤前算第三輪；10/15 24 小時內有 100+ 下載即啟動付費版

### 點子 2：Shopify UCP + LINE OA 跨境代操顧問服務 🆕

- **痛點來源**：Shopify Spring '26 Edition 推 Universal Commerce Protocol + Catalog + Sidekick agent → 台灣 SME 跨境電商（估 3,000+ 家 Shopify 商店）本週 Day 4–5 需評估「UCP 自動 feed 到 ChatGPT / Microsoft Copilot + Sidekick 自動化運營 + LINE OA + 多語 listing」，但多數商家對 UCP 文件、Catalog 設定、agent commerce 風險（scraping 錯誤商品資訊）沒時間跟
- **目標客群**：台灣 3,000+ 家既有 Shopify 商店（主要跨境到日本、美國）+ 新開跨境站的中小商家
- **技術複雜度**：2/5 — service business；Shopify API + UCP 文件熟 + LINE Messaging API + 多語 content strategy + Sidekick workflow 設計；非程式技能門檻為主
- **預估 MRR**：one-off 設定 NT$ 30K–80K per client + 月更 $29–99/mo（含「UCP + Sidekick + LINE OA 最新改動」通報 + 風險控制），3–6 個月後 50 家 clients × $59/mo = NT$ 90K MRR
- **競品弱點**：台灣目前無專門「Shopify UCP + Sidekick + LINE OA + 多語 跨境」顧問；一般 Shopify 顧問做建站不做 agent commerce / LLMO
- **切入建議**：10/15 Day 4 讀 Shopify Spring '26 Edition 官方文件 → Day 4–5 把自家 Shopify 跑一條 Sidekick workflow 的 build-in-public → Day 6 開 LinkedIn / X / threads 介紹服務；若 48 小時內有 3+ 商家回應就啟動

### 點子 3：Agent Builder → Agents SDK 遷移顧問服務（T-46 倒數加壓）🔄

- **痛點來源**（接續 10/14 brief 點子 3）：11/30 下線剩 46 天 + 10/31 Evals read-only 剩 16 天 + code export「starting point only」不保證 1:1 + multi-agent branching / handoffs 需人工重驗；今日 Day 4 進入「workflow 清單手動驗證 code export 行為 1:1」實作 Day 3；reusable prompts 11/30 同下線加壓
- **目標客群**：以 Agent Builder 搭建 production agent 的台灣中小企 / SI 顧問案（10–50 人規模）；本次新增「reusable prompts 11/30 同下線」用戶群
- **技術複雜度**：2/5 — service business；Agents SDK TypeScript / Python + workflow re-architecture
- **預估 MRR**：N/A（one-off NT$ 60K–200K per client × 2–4 clients / month）
- **競品弱點**：台灣尚無針對 Agent Builder EOL 的專門顧問；多數 SI 顧問做「新建」而非「遷移」
- **切入建議**：10/15 Day 4 把自家 2 條 pipeline 跑完 code export + 手動驗證行為 1:1；寫 1 篇「Agent Builder → Agents SDK 遷移 checklist」blog；本週收尾 10/18 前完成遷移路線設計、下週進入實作

## 🧰 工具堆疊更新

- **🆕 Shopify Spring '26 Edition UCP + Sidekick agent 評估**：10/15 Day 4 讀 Shopify 官方文件 → Day 4–5 試裝 1 條 workflow；台灣 SME 跨境電商估 3,000+ 家 Shopify 商店 Day 4–5 內需評估
- **🔄 Apple HomePad / homeOS SDK Day 2 評估**：10/13 Welcome Home 事件後 Apple docs 24–72 小時內更新；Day 2 已過半、Day 4–5 內 SDK docs 要讀完
- **🔄 TSMC 法說 push 寫定 Day 4**：T-0 日 14:00 開始；「Q3 EPS 元大 29.03 vs 共識 beat/miss × 毛利 65–67% × FY27 EPS 157.29 × CapEx FY27 US$80B 落實 × 2027 製程漲 × 麥格理 4,410 vs MS 3,088 ~43% spread 收斂度 × 2nm 12 萬片 × CoWoS-L × A16 × 2027 tone × A20 Pro」11 軸 push notification 定稿 + bull / bear 雙版本
- **🔄 iPhone Duo 預購 push 寫定 Day 4**：T-1 預購 → push notification 建議「10/16 18:00 預購前 2 小時 + 20:00 開放前 1 分 + 預購結束後 15 分 + 10/23 開賣當日盤前」4 波；加「中華電信 10/16 20:00 預購時段無明確公告 → 讀者直接等 10/23 開賣」FAQ
- **🔄 Haiku 5.5 shadow eval T+8**：第 2 週加入 refusal rate 指標；若切換後 refusal rate 升高 >5%，先回 Sonnet 5.5；等 Anthropic 修補 over-refusal bug 後重估
- **🔄 Agent Builder 清單手動驗證 Day 3**：workflow 清單今日 Day 3 驗 1–2 條 code export 後行為 1:1；10/18 前完成全清單
- **🔄 Vercel AI SDK v7 codemod + HarnessAgent 手動補丁**：Day 4 若主線還在 v6 要先跑 codemod + 手動補 HarnessAgent provider / sandbox；注意 experimental canary = API 可能變
- **🔄 shadcn Base UI 1.8.0 已登場**：7/3 預設切 Base UI、9/4 升到 1.8.0；本站 mynews 已 Base UI；既有 Radix 專案可持續用

## ⚡ 今日行動建議

- [ ] TSMC 法說 push notification pack Day 4 定稿 + bull / bear 雙版本：「Q3 EPS 元大 29.03 × 毛利 65–67% × FY27 EPS 157.29 × CapEx FY27 US$80B × 2027 製程漲 × 麥格理 4,410 vs MS 3,088 ~43% spread × 2nm 12 萬片 × CoWoS-L × A16 × 2027 tone × A20 Pro」11 軸（預期 3–4 小時）
- [ ] iPhone Duo 預購 push notification 寫定 + 加入「10/16 20:00 Apple 台灣 vs Taiwan Mobile myfone 同步 + 中華電信 10/23 開賣 + eSIM only provisioning」FAQ（預期 2 小時）
- [ ] 讀 Shopify Spring '26 Edition 官方 docs + 試裝 1 條 Sidekick workflow（例如多語 product description 自動生成）寫 build-in-public（預期 3 小時）
- [ ] 讀 Apple 10/13 Welcome Home 事件後 docs：HomePad SDK / HomeKit 深度整合 / homeOS 平台（Day 4 docs 24–72 小時內更新窗口；預期 2 小時）
- [ ] 驗 1–2 條 Agent Builder 的 code export 行為 1:1（11/30 遷移倒數 46 天；預期 2 小時）
- [ ] 試裝 Kilo Code v7（若 VS Code 用戶）或申請 Cosine Swarm beta（若有大型 refactor 需求）跑一條 benchmark（預期 2 小時）
- [ ] 寫 1 篇中文 build-in-public：「TSMC Q3 法說結果 bull vs bear 雙版對照解讀」或「Shopify UCP + LINE OA 跨境電商 Day 4 build-in-public」

## ⏳ 待觀察

- 10/15 14:00：TSMC Q3 法說結果 — Q3 EPS 元大 29.03 beat/miss × 毛利 65–67% 守得住否 × FY27 EPS 外推 × CapEx FY27 US$80B 落實 × 2027 製程漲 5–10% × 2027 tone 6 軸
- 10/15 法說後 1–2 小時：外資反應 — 麥格理有無再上修 TP > 4,410、MS 是否跟 FY27 EPS 157.29 靠攏、高盛 / JP 摩根 TP 修訂
- 10/16 20:00：iPhone Duo Apple 台灣 + Taiwan Mobile myfone 預購同步開放；eSIM only 的 provisioning 速度、Star White 60% / Night Sky 40% 比例、各 SKU 售罄順序為盤後 push notification 最強 trigger
- 10/23 08:00：iPhone Duo 中華電 500 間據點開賣；Foxconn 良率 60% 下 1,000 萬 vs 600 萬年目標缺口的「首波貨源到位度」訊號
- 10/31：OpenAI Evals read-only — T-16 倒數
- 11/9：Anthropic IPO 期中選舉後路演起點 — S-1 flip 公開（EDGAR）為先行觀察訊號
- 11/30：OpenAI Agent Builder + reusable prompts 11/30 EOL — T-46 倒數
- Apple 10/13 Welcome Home 事件後：HomePad SDK / HomeKit 深度整合 / homeOS 平台開放度 docs 24–72 小時內更新（Day 2 已過半）
- Haiku 5.5 over-refusal bug：Anthropic 修補時程、Artificial Analysis AutomationBench-AA 重測結果（現為 35%）
- Shopify Spring '26 Edition UCP 台灣 Shopify 商店相容度 + Catalog scraping 錯誤多語資訊風險驗證窗口

[^ucp]: Universal Commerce Protocol，Shopify 2026 Spring Edition 推出的開放協定，讓產品資料不經商家自建整合即可被 AI 購物 agent（ChatGPT、Microsoft Copilot 等）識別與推薦；搭配 Catalog 自動 feed 與 Sidekick agent 升級，形成 Shopify 的 agent-first commerce 棧，對中小跨境電商降低了「被 AI 購物 agent 找到」的技術門檻。

[^homepad]: Apple 於 2026 年 10 月 13 日「Welcome Home」事件推出的全新智慧家庭 hub；配備 6 吋方形觸控螢幕、HomePod 等級揚聲器、相機辨識家庭成員；初步傳聞價格起跳約 US$350；可視為 Echo Show / Nest Hub 的 Apple 對標產品，承擔家庭 Siri / Apple Intelligence 門面角色。

[^homeos]: Apple 傳聞中的智慧家庭專用作業系統，與 iOS / iPadOS / tvOS 平行；可能同時推出對應 SDK 供第三方 app 整合 HomeKit 與 HomePad 原生 widget；為 2026 Q4 新平台機會窗口，台灣智慧家居 OEM 與 Siri Shortcut / Home 自動化類獨立開發者是主要受眾。

[^fau]: Fiber Array Unit，光纖陣列單元；為矽光子（Silicon Photonics）與共封裝光學（CPO）封裝的關鍵元件，將多條光纖以亞微米級對準整合至光學晶片 I/O；大立光以此跨入 AI 伺服器光通訊供應鏈，與傳統手機鏡頭業務形成第二成長曲線。

## 📚 引用來源

1. [TSMC 投資人關係 — 法說 10/15 14:00 + Quiet Period 10/5–10/14](https://investor.tsmc.com/quarterly-results) — 2026-10
2. [Hudson Labs — TSMC Q3 2026 Earnings Preview 共識毛利率 66.5%](https://www.hudson-labs.com/research/tsmc-q3-2026-earnings-preview-tsm-revenue-and-margins) — 2026-10
3. [Tikr Blog — TSMC Q3 earnings preview 65% profit growth 50% margin](https://www.tikr.com/blog/tsmcs-q3-earnings-preview-65-profit-growth-but-net-margin-seen-slipping-to-50) — 2026-10
4. [TrendForce — TSMC lifts 2026 CapEx 15% to 60–64B](https://www.trendforce.com/news/2026/07/16/news-tsmc-lifts-2026-capex-15-to-60-64b-hikes-sales-outlook-to-over-40-despite-q3-margin-dip/) — 2026-07
5. [元大投顧 — TSMC Q3 EPS 29.03 元上修](https://finance.technews.tw/2026/10/07/tsmcs-advanced-process-technology-has-no-rivals-recently/) — 2026-10-07
6. [中央社 — iPhone Duo 10/16 20:00 預購 10/23 發售（蘋果中國官網）](https://www.cna.com.tw/news/afe/202610020083.aspx) — 2026-10
7. [ETtoday — Apple 台灣 10/12 Get Ready + 10/16 20:00 預購 + 10/23 開賣](https://www.ettoday.net/news/20261002/3247876.htm) — 2026-10-02
8. [Mirror Media / SETN — 中華電信 10/23 近 500 間據點](https://www.mirrormedia.mg/external/setn_1904699) — 2026-09-10
9. [PeopleNews — iPhone Duo 售價 NT$74,900 起 快手登記](https://www.peoplenews.tw/articles/lifestyle/54587) — 2026-09-10
10. [AppleInsider — iPhone Duo Foxconn 良率 60% + 鉸鏈 65%](https://www.appleinsider.com/articles/26/09/29/making-millions-of-iphone-duos-is-proving-harder-than-apple-hoped) — 2026-09-29
11. [Tom's Guide — Apple Welcome Home 10/13 HomePad](https://tomsguide.com/home/smart-home/apple-announces-welcome-home-event-for-oct-13-homepad-and-all-the-new-products-to-expect) — 2026-10-08
12. [Macworld — Welcome Home event smart home hub HomePod mini Apple TV 4K](https://macworld.com/article/3253965/welcome-home-event-smart-home-hub-homepod-mini-apple-tv-4k.html) — 2026-10
13. [iPhoneSoft — HomePad homeOS 10 月 Gurman 口徑](https://iphonesoft.fr/2026/09/22/homepad-nouveau-systeme-homeos-combine-ios-tvos-watchos) — 2026-09-22
14. [9to5mac — Apple Welcome Home October 13](https://9to5mac.com/?p=1073476) — 2026-10
15. [Novo — Shopify Unveils Tools for AI-Driven Shopping Experiences and Merchant Success](https://www.novo.co/small-business-news/shopify-unveils-tools-for-ai-driven-shopping-experiences-and-merchant-success) — 2026-08-30
16. [PowerCommerce — Shopify Agentic AI 轉型](https://powercommerce.com/da/blogs/ecommerce-hub/shopifys-strategic-shift-towards-agentic-ai-navigating-the-future-of-e-commerce) — 2026
17. [Presta — Shopify Agentic plan pricing 2026](https://wearepresta.com/shopify-agentic-plan-pricing-and-ai-strategy-for-2026/) — 2026
18. [ACTGSys — AI Cross-Border Ecommerce Playbook 2026 Taiwan SME](https://actgsys.com/en/blog/ai-cross-border-ecommerce-sme-2026) — 2026
19. [MetricNexus — Claude Haiku 5.5 Benchmarks and Real Cost Math](https://metricnexus.ai/blog/claude-haiku-5-5-benchmarks-pricing) — 2026-10
20. [AI Weekly — Anthropic Haiku 5.5 Price Cut 75%](https://aiweekly.co/alerts/introducing-claude-haiku-55) — 2026-10
21. [TechJackSolutions — Haiku 5.5 Artificial Analysis Intelligence Index 43 + AutomationBench 35%](https://techjacksolutions.com/ai-brief/claude-haiku-5-5-benchmark-pricing-artificial-analysis/) — 2026-10
22. [LetsDataScience — Haiku 5.5 Effort Controls Pricing](https://letsdatascience.com/news/anthropic-releases-claude-haiku-55-with-lower-prices-and-eff-f698c663) — 2026-10
23. [OpenReplay Blog — shadcn/ui Base UI 遷移 asChild → render](https://blog.openreplay.com/shadcn-ui-radix-base-ui-switch/) — 2026
24. [LabMemo — shadcn/ui Base UI 遷移 2026/07/03 + 1.8.0 2026/09/04](https://labmemo.com/?p=45899) — 2026-07
25. [Richnerds — Anthropic IPO Files $965B 估值](https://richnerds.substack.com/p/anthropic-ipo-filing-2026) — 2026-10
26. [NPR — AI giant Anthropic prepares to sell stock to the public](https://www.npr.org/2026/06/01/nx-s1-5843199/anthropic-ipo-filing-ai-large) — 2026-06-01
27. [MCP Directory — OpenAI AgentKit 11/30 EOL 遷移路徑](https://mcp.directory/blog/openai-agentkit-deprecation-2026) — 2026-10-12
28. [AI Weekly — OpenAI tells devs to trim Skills, prompts for GPT-6 Astra](https://aiweekly.co/alerts/openai-tells-devs-to-trim-skills-prompts-for-gpt-6-astra) — 2026-10
29. [Runtime Wire — Vercel AI SDK v7 HarnessAgent](https://runtimewire.com/article/vercel-ai-sdk-7-adds-harnessagent-for-coding-agent-harnesses) — 2026-10
30. [AlphaSignal — Vercel AI SDK 7 Swap Claude Code and Codex-like Models](https://alphasignal.ai/news/vercel-s-ai-sdk-7-lets-developers-swap-claude-code-and-codex-like-models) — 2026-10
