---
title: 每日創業情報 — 2026-11-12
date: 2026-11-12
tags: 創業情報, AI 產業, SaaS, 台灣
summary: T-0 雙題齊發當日 — OpenAI 砍 Cursor 模型存取 11/12 正式日 + Anthropic S-1/A2 揭露「關鍵 AI 安全警報已觸發」+ Nvidia $10B / Google $10B anchor + $26B private placement（AMD / Broadcom / Micron / 微軟 / TSMC）+ 首日交易目標 11/19 + 隱含估值天花板 $1.4T + Composer 2.5 nerfed 投訴 Reddit 續行 + Agent Builder EOL T-18 + iPhone Duo Day 21 雙 11 新機降 NT$2,000 + TSMC 10 月 YoY +59.7% 情境命中深度續行。
keywords: Anthropic S-1A2 safety alarm triggered Capability Threshold ASL-4 November 10 disclosure IPO, Anthropic IPO price 70 78 825 million shares trading debut November 19 2026 fully diluted 1.4 trillion, Nvidia 10 billion Google 10 billion anchor Anthropic IPO private placement AMD Broadcom Micron Microsoft TSMC 26 billion, OpenAI Cursor model cutoff November 12 2026 T-0 actual day Composer 2.5 BYOK API key, Cursor Composer 2.5 nerfed forum complaints quality degradation November 2026 Kimi K2.5 底層, OpenAI Agent Builder EOL T-18 November 30 Thanksgiving 14 days migration SDK Workspace Agents, iPhone Duo Day 21 Week 3 Day 14 工作日第四日 台灣雙11 新機降 NT$2000 二手續行, TSMC October 2026 revenue 5868 億 T+2 YoY 59.7% 超 Q4 guidance 上限 AI megatrend 擴大化, 立法院中小微企業轉型條例 T+44 排審窗口第四日 11 月通過機率續低, 數發部 100 億 AI T+39 11 月無 pipeline 刷新 SBIR 2026-01 上限調高替代, Smithery MCP Proxy T+12 Day +12 MCP 2026-07-28 spec 第 107 日 Arcade 中立性觀察第二週第四日, Vercel AI SDK 7 HarnessAgent experimental canary T+140 GA 未確認 Claude Code Codex 整合
---

# 每日創業情報 — 2026-11-12

## 🎯 今日 TL;DR

- **🆕 OpenAI × Cursor 模型存取 11/12 T-0 當日 — 「proposed」口徑最後一天 + Composer 2.5 Reddit nerfed 投訴續行 + BYOK Chat / Agent 續行、Tab / Auto / Cloud Agents 不適用 + Cursor CEO 口徑 OpenAI 僅 5% 流量 + T-0 當日無新 OpenAI / Cursor 正式退場公告**：Hackernoon / Tom's Guide / VPSRanking / cybernews 多方口徑確認 11/12 為 proposed cutoff；OpenAI 官方 help page（8/29 口徑）仍未更新終止日；Cursor forum「Is Composer 2.5 being quietly nerfed?」帖續行、指約 2 週前起品質下降；對仍重度綁 GPT-5.6 Sol 的 solo dev：T-0 當日為「最後一次用 Cursor 內建方式使用 OpenAI 模型」機會；migration 替代路徑：Composer 2.5（Kimi K2.5[^kimi-k25] 底層 + Cursor RL）／Claude Opus 5.5 直連／BYOK（Chat / Agent 限定）／Codex CLI
- **🆕 Anthropic S-1/A2 11/10 揭露「關鍵 AI 安全警報已觸發」+ 填入 $70–78 定價區間 + 825M 股 + Nvidia / Google 各 $10B anchor + $26B private placement（AMD / Broadcom / Micron / 微軟 / TSMC）+ 首日交易目標 11/19（CNBC 口徑）/ 隱含估值天花板 $1.4T 全攤薄**：Fortune 11/10 口徑「Anthropic sets IPO range valuing it at up to $1.4 trillion amid AI stock sell-off」+ CNBC「trading Nov. 19」為最新權威源；Yahoo Finance 口徑「Anthropic expects AI to speed up its own research enough to trigger one of its key safety alarms. On Tuesday, in the same filing that set a price range for its record-setting IPO, it said that has now happened.」→ 安全警報口徑為 Anthropic 自家 Responsible Scaling Policy[^rsp] Capability Threshold 之一觸發、具體等級待補；對台灣 Claude 大客戶：$70–78 × 825M × $1.4T 天花板 + 安全警報觸發首次具體公開 → 上市後 Claude 訂閱定價壓力溫和、但模型 release 節奏可能受 RSP 限制加劇
- **🆕 Anthropic IPO 定錨 Nvidia $10B + Google $10B at IPO price 細節披露 + $26B private placement 含 AMD / Broadcom / Micron / 微軟 / TSMC**：Fortune 11/10 口徑「Nvidia and Alphabet's Google are each buying $10 billion of Anthropic stock at the IPO price, part of a $26 billion private placement with AMD, Broadcom, Micron, Microsoft, and Taiwan Semiconductor」；對台灣投資散戶：TSMC 列名 Anthropic $26B private placement → 台積電參與 Anthropic 股權的 AI 產業鏈縱向整合首次公開具體化、對 TSMC 11 月營收續強預期加成；Nvidia 的 $10B anchor 與 2025-11 口徑「Nvidia 投 Anthropic $10B + Anthropic 承諾買 $30B Azure 算力」是否重複待釐清
- **🔄 OpenAI Agent Builder EOL T-18（11/12 → 11/30）— Thanksgiving 11/26 前美國窗口剩 14 天 + 48h 無新 migration tooling + Agents SDK export 續為 scaffold + ChatKit 續存 + Evals read-only Day +12 連續倒數**：OpenAI 官方 guide 仍「Code → Agents SDK → TS/Python 複製貼上」、不保證 workflow graph / 完整遷移；Agents SDK vs Workspace Agents 雙路分化續行；Evals 11/30 全下線倒數 Day +12；對 solo dev：Thanksgiving 前 14 天為美國市場最後有效遷移窗口、感恩節後週餘 2 日倒數為最後實作期
- **🔄 TSMC 10 月月營收 T+2 情境命中「更強版本」續行 — NT$5,868.9 億 / YoY +59.7% / MoM +14.7% + 超 Q4 guidance 單月均上限 + 48h 無法人修正 11 月 / 12 月預期 + AI megatrend 擴大化對 Anthropic IPO $1.4T 定錨加成**：媒體口徑：AI 晶片需求 + iPhone 拉貨 + 2 奈米量產推升、Q4 開門紅續行；對一人 SaaS inference 成本：Claude / OpenAI / Groq inference 單位成本續壓低速率續行、不會因 AI 需求放緩而減緩；對 Anthropic IPO roadshow 投資人情緒：$1.4T 天花板中段機率續升、$70–78 定價區間上緣機率升高
- **🔄 iPhone Duo Day 21 Week 3 Day 14（11/12 週四）— 工作日回歸第四日 + 48h 無 11 月新中港台二手具體價 + 台灣雙 11 新機通路降 NT$2,000（非二手） + 中國炒家虧損普遍續行 + 折疊屏產能爬坡超預期**：台灣通路 11 月雙 11 推「iPhone Duo 全面降 2 千」為新機促銷、非二手行情；中國起售價 RMB 15,999 元、頂配 2TB RMB 26,499 元、發貨排至 2027/01；9 月二手溢價 RMB 5,000 上下 → 11 月 ifeng 商家囤 50 台虧本（6,000 加價 → 二手回收 3,000 元封頂）為最新具體口徑；Day 21 為工作日第四日、可做「工作日 4 日 vs 週末 48h」差額曲線拆解
- **🔄 Smithery MCP Proxy T+12 Day +12（11/12 週四）— 連續 2 週中立性觀察第二週第四日 + MCP 2026-07-28 spec 生效第 107 日 + 11 月無 Registry 數字刷新 + MCP Registry 9 月口徑 30,375 unique / 99,114 records / 36% stale 為最新權威**：10/31 UTC 00:00 下線後第 12 日；第二週第四日切片；對 2026-07-28 spec 支援度為選型新指標續行；對一人 SaaS：第二週第四日為「arcade / modelcontextprotocol.io / pulse-mcp / mcp-get 四地重複度 + 各自 stale 比例」首個可比切片續行
- **🔄 立法院中小微企業 1,000 億轉型條例 T+44（11/12 週四）+ 本週（11/10–11/14）為委員會排審窗口首個觀察週第四日 + 立院公開議程 2026-07/08 後無更新 + 11 月通過機率極低**：10/8 行政院通過草案、原規劃 9 月送立院、實際送審時點晚於原定；立院經濟委員會公開議程最新仍為 2026-07/08 能源管理法；T+44 仍無進展訊號；R&D 抵減率 20% / 轉型設備投資抵減門檻 25 萬 / 171.6 萬家受惠為既定 soundbite；本週排審窗口第四日無媒體新進度 → 11 月通過機率續低
- **🔄 數發部 100 億 AI T+39（11/12 週四）— 8 月底累計口徑 10 家 / NT$2.55 億 / 民間帶動 NT$5.7 億 + 境外公司放寬 3 條件續行 + 36 家搭配投資人續行 + 11 月無 pipeline 刷新 + SBIR 2026-01 起上限調高為替代路徑**：11 月無新 pipeline 公告、第三方口徑最新仍為 CNA 10/04；SBIR 自 2026-01-01 起調高上限（先期研究 150 萬、研究開發 1,200 萬、加值應用 600 萬）+ 無人載具 / AI 智慧應用 / 淨零 三大核心、對 solo dev 為替代路徑續行

## 🔄 昨日追蹤

- **🆕 OpenAI × Cursor T-1 → T-0**：11/12 proposed cutoff 當日；48h 無新 OpenAI / Cursor 正式退場公告；Cursor forum Composer 2.5 nerfed 投訴續行
- **🆕 Anthropic S-1/A2 11/10 揭露「安全警報已觸發」細節**：Yahoo Finance / Fortune 口徑確認 Anthropic 在定價區間填入同份 S-1/A2 中首次具體公開 RSP Capability Threshold 觸發；具體等級（ASL-3[^asl] / ASL-4）待補
- **🆕 Anthropic IPO 定錨投資人具體化 — Nvidia $10B + Google $10B + $26B private placement**：Fortune 11/10 口徑，含 AMD / Broadcom / Micron / 微軟 / TSMC；TSMC 列名加成 11 月營收續強預期
- **🔄 Anthropic 首日交易目標 11/19（CNBC 口徑）**：11/11 brief 目標 11/16 或 11/19–11/20，今日 CNBC 收斂到 11/19；Pricing 日未確認、11/13 earliest 續行
- **🔄 TSMC 10 月月營收 T+1 → T+2**：情境命中「更強版本」續行；48h 無法人修正 11 月 / 12 月預期
- **🔄 TiBOOST[^tiboost] T+1 → T+2**：11/10 公布前三名後 48h 得主技術棧 / 商業模式細節仍未披露、名次對應仍未官方明示
- **🔄 OpenAI Agent Builder EOL T-19 → T-18**：Thanksgiving 前剩 14 天；Evals read-only Day +12
- **🔄 iPhone Duo Day 20 → Day 21**：Week 2 Day 13 → Week 3 Day 14；工作日第三日 → 第四日；台灣雙 11 新機降 NT$2,000 為新口徑
- **🔄 Smithery T+11 → T+12**：第二週第三日 → 第四日
- **🔄 立法院中小微企業 T+43 → T+44**：排審窗口首個觀察週第三日 → 第四日
- **🔄 數發部 100 億 AI T+38 → T+39**：11 月無 pipeline 刷新

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🆕 TSMC 列名 Anthropic IPO $26B private placement — 與 AMD / Broadcom / Micron / 微軟同列 + 台積電首度具體化參與 AI 模型公司股權 + 對 11 月營收續強預期加成 + 對台灣 AI 產業鏈縱向整合口徑首次公開**：Fortune 11/10 口徑「$26 billion private placement with AMD, Broadcom, Micron, Microsoft, and Taiwan Semiconductor」；私募配售具體金額對 TSMC 的占比待 S-1/A2 細節披露；對台積電股價短期為正面訊號、長期為「晶圓代工 → AI 模型訓練 → AI 模型上市」縱向整合敘事重大節點 | [Fortune — Anthropic sets IPO range valuing it at up to $1.4 trillion amid AI stock sell-off](https://fortune.com/2026/11/10/anthropic-ipo-price-range-ai-stock-sell-off/)、[CNBC — Anthropic sets IPO price range of $70 to $78](https://www.cnbc.com/2026/11/10/anthropic-sets-price-range-of-70-to-78-in-upcoming-ipo.html)、[TradingView — Anthropic Begins IPO Roadshow at $70-$78 Per Share](https://www.tradingview.com/news/tradingview:7fd26768055eb:0-anthropic-pbc-begins-ipo-roadshow-at-70-78-per-share/) | 對一人 SaaS inference 成本：TSMC 參與 Anthropic 股權 → 未來 Claude API 成本與 TSMC 產能連動性升高、長期 inference 成本可預測性升高；對台灣 solo dev 創業敘事：「晶片廠入股 AI 模型公司」為跨領域議題、可寫「縱向整合對 AI 應用層 moat 的影響」長文；對台股投資散戶：TSMC 列名加成 11 月營收續強預期、Q4 guidance 單月均上限的有效性加成 | 機會：「TSMC × Anthropic $26B 私募配售具體口徑 + 對台灣 AI 產業鏈縱向整合影響鏈 + 對 solo dev 應用層 moat 的意義」深度文；T+1 「11/13 pricing day Anthropic $1.4T 天花板 + TSMC 11 月營收預期聯動」續行；威脅：具體金額占比、鎖股期、是否算入 825M 股待 S-1/A2 細節披露；完整 share class total 仍待算 |
| **🔄 立法院中小微企業 1,000 億轉型條例 T+44 + 本週（11/10–11/14）為委員會排審窗口首個觀察週第四日 + 立院公開議程 2026-07/08 後無更新 + 11 月通過機率極低 + 171.6 萬家受惠為既定 soundbite**：R&D 抵減率 20% / 轉型設備投資抵減門檻 25 萬 soundbite 續行；T+44 仍無進展訊號；本週排審窗口第四日無媒體新進度 | [CNA — 政院修法投入千億助中小微企業升級](https://cna.com.tw/news/aipl/202610080165.aspx)、[iThome — 中小微企業轉型升級發展條例修正草案](https://www.ithome.com.tw/news/179523)、[立法院議事紀錄](https://www.ly.gov.tw/pages/MeetingList.aspx?nodeid=135) | 若法案通過，R&D 抵減率自約 15% 提高至 20%、轉型設備投資抵減門檻自產業創新條例 100 萬降至 25 萬；本週為立院排審第四日、無媒體新進度 → 11 月通過機率續低、但 25 萬門檻對 solo dev 轉型升級為新契機 | 機會：「11/12 立法院新會期第 6 週第四日 + 中小微條例委員會排審預測續行」+「25 萬元設備投資抵減自認試算 + R&D 20% 抵減個案拆解」深度文；威脅：送審至三讀期程 3–12 個月、11 月通過機率續低、11 月排審窗口可能流失到 12 月 |
| **🔄 iPhone Duo 台灣雙 11 新機通路降 NT$2,000 — 非二手行情 + 台灣 11 月二手中文媒體具體報導仍空白 + 中國炒家虧損普遍續行 + 折疊屏產能爬坡超預期**：台灣起售價 NT$74,900；通路雙 11 「iPhone Duo 全面降 2 千」為新機促銷；回收價 256GB NT$56,150 / 512GB NT$61,420 / 1TB NT$72,700 / 2TB NT$89,260；中國起售價 RMB 15,999、頂配 2TB RMB 26,499、發貨排至 2027/01；9 月二手溢價 RMB 5,000 上下 → 11 月 ifeng 商家囤 50 台虧本為最新口徑 | [technews.tw — iPhone Duo 台灣售價 74,900 元起](https://finance.technews.tw/2026/09/10/iphone-duo-affordable/)、[CNA — iPhone Duo 中國市場熱銷 發貨排至明年](https://www.cna.com.tw/news/acn/202610170102.aspx)、[JYES 回收價表](https://www.jyes.com.tw/recycle/Apple-iPhone-Duo) | 對台灣 solo dev 創業敘事：iPhone Duo 二手行情中文媒體仍空白、新鮮度極高續行；可做「Day 21 工作日第四日 vs 週末 48h 差額曲線 + 台灣新機 vs 二手 vs 回收 三線對照」原創拆解 | 機會：「iPhone Duo Day 21 工作日第四日 vs 週末 48h 差額曲線 + 台灣新機 vs 二手 vs 回收 三線對照 + 中國炒家虧損原因」深度文；威脅：台灣二手行情中文媒體具體報導仍空白、需實地查訪 Yahoo 拍賣 / 蝦皮 / 露天成交紀錄 |
| **🔄 數發部 100 億 AI T+39 — 8 月底累計 10 家 / NT$2.55 億 / 民間帶動 NT$5.7 億 + 境外公司放寬 3 條件續行 + 36 家搭配投資人續行 + 11 月無 pipeline 刷新 + SBIR 2026-01 起上限調高為替代路徑**：平均單案 NT$2,550 萬 vs 上限 NT$2 億 = 8 倍槓桿空間；40 片 GPU POC 算力池續行；數發部以「算力 / 資料 / 人才 / 行銷媒合 / 資金」五大政策工具推動 AI 產業生態系 | [CNA — 數發部百億 AI 投資方案 開放境外公司可納投](https://cna.com.tw/news/afe/202610040029.aspx)、[technews — 百億 AI 基金首年僅投 7,500 萬](https://technews.tw/?p=1520580)、[moda 政策工具](https://www-api.moda.gov.tw/File/Get/moda/zh-tw/P6bhEIBFauOqqVd) | 對 solo dev：直接 pitch 命中率極低、但境外公司放寬打開「海外註冊、台灣營運」架構路徑；40 片 GPU POC 為「境內小規模驗證」額外補助；SBIR 2026-01 上限調高為替代路徑續行 | 機會：「數發部 100 億 AI T+39 + SBIR 2026-01 上限調高替代路徑拆解 + 境外公司放寬 3 條件 solo dev 可用性評分」深度文；威脅：11 月無新 pipeline 公告、Q4 累計進度緩慢、距百億目標仍極遠 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🆕 OpenAI × Cursor 模型存取 11/12 T-0 當日 — 「proposed」口徑最後一天 + Composer 2.5 nerfed 投訴續行 + BYOK Chat / Agent 續行、Tab / Auto / Cloud Agents 不適用 + Cursor CEO OpenAI 僅 5% 流量** | AI coding / T-0 當日 / migration 窗口 | 仍以 Cursor 為主的 solo dev：T-0 當日為「最後一次用 Cursor 內建方式使用 OpenAI 模型」機會；替代路徑：Composer 2.5（Kimi K2.5 底層 + Cursor RL）／Claude Opus 5.5 直連／BYOK（Chat / Agent 限定）／Codex CLI；Cursor forum「Is Composer 2.5 being quietly nerfed?」帖續行、指約 2 週前起品質下降 | Cursor Plus $8 / Premium $30 / Super $100 / Ultra $200；Claude API Opus 5.5 $4/M in $20/M out；Composer 2.5 $0.50/M in $2.50/M out；OpenAI BYOK 按 OpenAI API 標準價 | vs 繼續用 Cursor + Composer 2.5：Composer 2.5 nerfed 投訴續行需實測、Kimi K2.5 底層成本優勢在但品質恐降；vs 走 Claude Code CLI：訂閱結構差異大；vs Codex CLI + ChatGPT Pro：仍有 OpenAI 模型直連但無 Cursor 編輯器體驗；vs OpenRouter 第三方中繼：延遲與定價不穩 | 🔴 重度依賴 GPT-5.6 Sol：T-0 當日最後 24 小時立刻切換 BYOK 或走 Codex CLI；🟡 Claude 已是主力：T-0 不急；🟢 全走 Claude Code CLI：無影響；🔴 BYOK 用戶：確認僅 local Chat / Agent 續行、Tab / Auto / Cloud Agents 不適用 |
| **🆕 Anthropic IPO 定錨 Nvidia $10B / Google $10B at IPO price + $26B private placement — AMD / Broadcom / Micron / 微軟 / TSMC** | AI 模型供應商 / IPO 定錨 / 晶片廠入股 | 對台灣 Claude 大客戶：Nvidia + Google 各 $10B anchor + $26B private placement 含 TSMC → 上市後 Claude 定價壓力溫和機率續升、長期 inference 成本預期更可預測；對台灣投資散戶：TSMC 列名 Anthropic 股權的 AI 產業鏈縱向整合首次公開具體化、對 TSMC Q4 展望加成 | Anthropic 定價 $70–78 × 825M 股 + greenshoe 123.75M 股；私募配售 $26B；Nvidia / Google 各 $10B at IPO price；具體鎖股期、是否算入 825M 股待 S-1/A2 細節披露 | vs Bloomberg 11/6 $1.2–1.3T 預熱口徑：$1.4T 天花板上緣機率續升；vs Reuters 11/5「投資人懷疑」口徑：$26B 私募 + 多家晶片 / 雲端大廠列名明顯降權；vs 2025-11 Nvidia $10B 承諾：是否重複 / 是否新投資待釐清 | 🟢 一人 SaaS Claude 用戶：繼續用、定價壓力溫和、晶片廠入股為加成；🟢 自建 inference 評估：仍以 Claude Opus 5.5 orchestrator + Haiku 5.5 sub-agent + Sonnet 5.5 draft 三層混搭為最穩；🟡 投資標的評估：11/13 pricing day + 11/19 首日交易觀察；🟢 TSMC 列名加成 → 台股 AI 類股持倉可續 |
| **🆕 Anthropic S-1/A2 揭露「關鍵 AI 安全警報已觸發」— Responsible Scaling Policy Capability Threshold 之一觸發 + 同份 A2 與定價區間並列公開 + 具體等級 ASL-3 / ASL-4 待補** | LLM 模型供應商 / 安全治理 / IPO 定錨 | 對 solo dev：Anthropic RSP 觸發後可能限制模型 release 節奏、對 Claude Opus 5.5 / Sonnet 5.5 / Haiku 5.5 的下個版本時程產生潛在影響；對 Claude 大客戶：RSP 限制加劇 → 模型能力軍備競賽可能放緩、長期對「用 Claude 做 agentic 工作流」的 solo dev 影響中性偏正；對投資散戶：觸發揭露可能影響 IPO 情緒但 $70–78 已填入 → 影響有限 | Claude API 計費不變；SDK 開源免費；RSP 為 Anthropic 自家治理政策、非法規要求 | vs OpenAI Preparedness Framework：RSP 揭露層級透明度續高；vs Google DeepMind Frontier Safety Framework：Anthropic 首次具體公開 Capability Threshold 觸發、對 industry 治理為重大節點；vs 無治理框架的模型供應商：Anthropic RSP 為可觀察的治理 benchmark | 🟢 一人 SaaS Claude 用戶：繼續用、RSP 觸發不影響 API 存取；🟡 重度依賴最新模型節奏：觀察 RSP 觸發是否影響 Opus 5.6 / Sonnet 5.6 的 release 時程；🟢 agentic 工作流為主：RSP 限制可能為正面訊號、對長期可信度加成 |
| **🔄 Composer 2.5 vs Opus 5.5 CursorBench 4.0 口徑 + Cursor forum nerfed 投訴續行 + Bito 混搭 75% / 省 57% + 11/12 T-0 當日 benchmark 最後有效窗口** | AI coding / 模型選型 / T-0 當日 | CursorBench 4.0 口徑：Opus 5.5 Max 57.8% / Composer 2.5 27.7%（差 30 分）、成本 $0.68 vs $13.43（差 20 倍）；Cursor forum「Is Composer 2.5 being quietly nerfed?」帖續行、指約 2 週前起品質下降、Cursor 未官方回應；Bito 混搭「常規 Composer + 難題 Opus」= 75% / 比純 Opus 省 57% | Cursor Plus $8 / Premium $30 / Super $100 / Ultra $200；Claude API Opus 5.5 $4/M in $20/M out；Codex CLI 自家；Composer 2.5 標準價 $0.50/M in $2.50/M out | vs 繼續用 Cursor：Composer 2.5 補 OpenAI 空缺但 benchmark 差 30 分 + nerfed 投訴續行；vs 直接走 Claude Code CLI：訂閱結構差異大；vs Codex 自家 CLI + ChatGPT Pro：仍有 OpenAI 模型直連但無 Cursor 編輯器體驗；vs OpenRouter 第三方中繼：延遲與定價不穩 | 🔴 重度依賴 GPT-5.6 Sol：T-0 當日切換 BYOK 或走 Codex CLI；🟡 Claude 已是主力：T-0 不急；🟢 全走 Claude Code CLI：無影響；🔴 Composer 2.5 nerfed 疑慮：T-0 後 1 週內重跑 CursorBench 4.0 口徑實測 |
| **🔄 OpenAI Agent Builder EOL T-18（11/12 → 11/30）— Thanksgiving 前美國窗口剩 14 天 + 48h 無新 migration tooling + Agents SDK export 續為 scaffold + ChatKit 續存 + Evals read-only Day +12** | AI agent / T-18 最後 18 天 | Agent Builder 用戶：工程師 production → Agents SDK（TS / Python），非工程師可編輯 → ChatGPT Workspace Agents（需 Business / Enterprise / Edu workspace）；OpenAI 官方明示「不保證 workflow graph 轉換、不保證每項行為完整遷移」→ 視 Agents SDK export 為 scaffold；Evals 用戶：匯出 dataset + Promptfoo[^promptfoo] YAML 轉換 | Promptfoo 開源 MIT；Langfuse[^langfuse] 社群版免費 / Pro $59/mo / Enterprise custom；ChatKit 保留不計 | vs ChatKit（embeddable chat UI 保留）；Agents SDK 選「engineer-owned workflow」、Workspace Agents 選「non-engineer editable automation」；Evals 遷移目標 Promptfoo + Langfuse 混搭；Agents SDK export 僅第一稿、knowledge bases / custom tools 可能需手工 rework | 🔴 Agent Builder 用戶：T-18 Thanksgiving 前 14 天、建議 rebuild in Agents SDK（export 僅第一稿）；🟡 Evals 用戶：若尚未匯出 dataset，Thanksgiving（11/26）前補完；🟢 red-teaming 需求：保留 Promptfoo + Langfuse 混搭 |
| **🔄 Vercel AI SDK 7 HarnessAgent T+140 — experimental canary 續行 + GA 未確認 + Claude Code / Codex 整合已確認 + 10 個 harness adapters / tool search / toolCallConcurrency / streamRetries / WebSocket chat 新增** | AI agent / TS 底層 | TS solo dev agent 底層選型：AI SDK 7 本體 GA（2026-06-25）、HarnessAgent 續為 experimental canary；對「TS Agent 底層 2 強」對決格局（AI SDK 7 vs Claude Agent SDK）續有壓力；10 個 harness adapters 支援 Claude Code / Codex 等 coding agent 互換；對 solo dev：若已穩定走 Claude Agent SDK、無急迫切換理由 | AI SDK 7 開源免費；HarnessAgent 續為 experimental canary、breaking change 預期續行 | vs Claude Agent SDK 1.1（TS/Python）：Claude SDK 深度整合 Claude Code 2.1 Skills + subagent nesting；vs OpenAI Agents SDK：OpenAI 綁 Agents Builder 下線倒數、長期可信度不穩 | 🟡 TS 已用 AI SDK 7：HarnessAgent 續為 canary、不宜主線上 production；🟢 TS 新專案：優先走 Claude Agent SDK、HarnessAgent 作為互換層觀察；🔴 重度依賴 AI SDK 7 agent primitives：關注 HarnessAgent GA 確認時程 |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：OpenAI × Cursor 11/12 T-0 當日最後 24 小時 BYOK + Composer 2.5 nerfed 投訴實測深度文 🆕

- **痛點來源**：11/12 為 OpenAI 退出 Cursor proposed cutoff 當日、「最後一次用 Cursor 內建方式使用 OpenAI 模型」機會；Cursor forum「Is Composer 2.5 being quietly nerfed?」帖續行、指約 2 週前起品質下降、Cursor 未官方回應；中文技術媒體對「T-0 當日最後 24 小時 BYOK + Composer 2.5 nerfed 投訴實測」完全空白；T-0 當日 Live blog + T+1 「使用者切 BYOK 後第一天使用體驗」+ T+7 「Composer 2.5 nerfed 投訴一週深度追蹤」三段連載視窗極稀缺
- **目標客群（台灣／亞洲）**：仍以 Cursor 為主的台灣 solo dev（估 2,000–5,000 位）+ 考慮切 BYOK 的中型團隊（估 200–600 家）+ 關注 AI coding 選型的技術 blogger / YouTuber（估 300–800 位）+ 成本敏感 batch task 用戶（估 500–1,500 位）
- **技術複雜度**：3/5 — 內容型 + 2–3 小時 benchmark + 1 小時 BYOK 切換實測；關鍵為「T-0 當日最後 24 小時 BYOK 切換流程 + Composer 2.5 nerfed 投訴實測 + CursorBench 4.0 口徑拆解 + Bito 混搭 75% / 省 57% 原理 + 個人 1 小時 benchmark 腳本」
- **預估 MRR**：one-off NT$100K–280K per 深度文；訂閱「每週 AI coding 選型週報」NT$300/mo × 500 用戶 ≈ NT$150K MRR；可 upsell 「T-0 當日最後 24 小時 BYOK 切換 playbook + Composer 2.5 nerfed benchmark 腳本」Gumroad NT$2,000 × 60 份 ≈ NT$120K one-off
- **競品弱點**：台灣技術媒體口徑整合 + Composer 2.5 nerfed 投訴中文資源完全空白；大型技術媒體不會做「T-0 當日最後 24 小時單人工作流 BYOK 實測」拆解；小型技術 blog 不會追 Cursor forum nerfed 投訴跨週變化
- **切入建議**：11/12 當日「OpenAI × Cursor T-0 當日最後 24 小時 BYOK + Composer 2.5 nerfed 投訴實測 + CursorBench 4.0 口徑 + 個人 1 小時 benchmark 腳本 + Bito 混搭 heuristic」Live blog → 11/13 「切 BYOK 後第一天使用體驗 + Anthropic pricing day 聯動」 → 11/19 「Composer 2.5 nerfed 投訴一週深度追蹤 + Anthropic 首日交易聯動」 → 11/26 Thanksgiving 前使用者回饋收尾

### 點子 2：Anthropic IPO 定錨 Nvidia + Google + $26B 私募 TSMC 列名對台灣 AI 產業鏈縱向整合影響鏈深度文 🆕

- **痛點來源**：Fortune 11/10 口徑「Nvidia and Alphabet's Google are each buying $10 billion of Anthropic stock at the IPO price, part of a $26 billion private placement with AMD, Broadcom, Micron, Microsoft, and Taiwan Semiconductor」；TSMC 列名 Anthropic $26B 私募首次具體化；中文技術媒體對「晶片廠入股 AI 模型公司對產業鏈縱向整合影響鏈」完全空白；「TSMC × Anthropic × Claude 大客戶定價預期 vs Nvidia 承諾 vs Google 承諾」中文完全空白
- **目標客群（台灣／亞洲）**：關注 AI 產業鏈縱向整合的台灣 solo dev + indie（估 2,000–5,000 位）+ 關注 TSMC 持倉的台股投資散戶（估 15,000–40,000 位）+ 關注 Claude 訂閱定價的中小企業 IT（估 500–1,500 家）+ 關注 AI 產業鏈 moat 的技術決策者（估 1,000–3,000 位）
- **技術複雜度**：2/5 — 內容型 + 1 小時產業鏈縱向整合模型；關鍵為「TSMC × Anthropic $26B 私募具體金額占比推估 + Nvidia 2025-11 $10B 承諾與 2026-11 $10B at IPO price 重複性拆解 + Google $10B 首次具體化 + 對台灣 AI 產業鏈縱向整合影響鏈 + 對 solo dev 應用層 moat 的意義」
- **預估 MRR**：one-off NT$120K–320K per 深度文；訂閱「每週 AI 產業鏈縱向整合週報」NT$400/mo × 350 用戶 ≈ NT$140K MRR；可 upsell 「Anthropic × TSMC × Nvidia × Google 私募配售試算模型」Gumroad NT$2,500 × 60 份 ≈ NT$150K one-off
- **競品弱點**：中文技術媒體從未做過「晶片廠入股 AI 模型公司對產業鏈縱向整合影響鏈」深度拆解；財經媒體從「IPO 定錨」切入、不做對終端用戶定價預期的下游影響鏈；大型技術媒體傾向重度編碼視角、不會做「單人產業鏈縱向整合試算」拆解
- **切入建議**：11/12 寫「Anthropic IPO 定錨 Nvidia + Google + $26B 私募 TSMC 列名 + 對台灣 AI 產業鏈縱向整合影響鏈 + 對 solo dev 應用層 moat 的意義」 → 11/13 pricing day Live blog → 11/19 首日交易 + 「TSMC × Anthropic 鎖股期披露深度拆解」 → 11/26 Thanksgiving 前尾聲

### 點子 3：Anthropic S-1/A2 「關鍵 AI 安全警報已觸發」對 Claude 模型 release 節奏影響 + RSP Capability Threshold 等級推測 🆕

- **痛點來源**：Yahoo Finance 11/10 口徑「Anthropic expects AI to speed up its own research enough to trigger one of its key safety alarms. On Tuesday, in the same filing that set a price range for its record-setting IPO, it said that has now happened.」；Anthropic 首次在 S-1/A2 同份文件中具體公開 RSP Capability Threshold 觸發；具體等級 ASL-3 / ASL-4 待補；中文技術媒體對「RSP 觸發對模型 release 節奏影響」完全空白；「Anthropic Opus 5.6 / Sonnet 5.6 time line 是否受 RSP 觸發影響」中文完全空白
- **目標客群（台灣／亞洲）**：重度依賴 Claude 最新模型節奏的台灣 solo dev（估 1,500–3,500 位）+ 關注 AI 治理政策的技術決策者（估 500–1,500 位）+ 關注 Anthropic 長期可信度的中小企業 IT（估 300–800 家）+ 關注 agentic 工作流穩定性的 solo dev（估 1,000–2,500 位）
- **技術複雜度**：3/5 — 內容型 + 1–2 小時 RSP 政策梳理；關鍵為「Anthropic RSP Capability Threshold 四層（ASL-1/2/3/4）推測 + 觸發等級 ASL-3 vs ASL-4 判斷標準 + 對模型 release 節奏影響 + 對 Claude Opus 5.6 / Sonnet 5.6 time line 的潛在影響 + vs OpenAI Preparedness Framework / Google DeepMind Frontier Safety Framework 對比」
- **預估 MRR**：one-off NT$80K–240K per 深度文；訂閱「每週 AI 治理政策影響週報」NT$300/mo × 400 用戶 ≈ NT$120K MRR；可 upsell 「Anthropic RSP ASL-3 / ASL-4 觸發判斷 playbook」Gumroad NT$1,800 × 70 份 ≈ NT$126K one-off
- **競品弱點**：中文技術媒體對「RSP 觸發對模型 release 節奏影響」完全空白；大型技術媒體不會做「單人 AI 治理政策影響試算」拆解；小型技術 blog 不會追 Anthropic RSP 細節
- **切入建議**：11/12 寫「Anthropic S-1/A2 『關鍵 AI 安全警報已觸發』+ RSP Capability Threshold 等級推測 + 對模型 release 節奏影響 + 對 Claude Opus 5.6 / Sonnet 5.6 time line 的潛在影響」 → 11/19 首日交易「RSP 觸發是否影響開盤情緒」 → 11/26 Thanksgiving 前「RSP 觸發後 2 週模型 release 節奏觀察」

### 點子 4：TSMC 10 月 YoY +59.7% 情境命中「更強版本」T+2 續行 + 對一人 SaaS inference 成本預期影響鏈 🔄

- **痛點來源**：TSMC 10 月 YoY +59.7% / MoM +14.7% / 超 Q4 guidance 上限 + 1–10 月累計 YoY +43.3% + 2025-10 base +16.9% 的 3.5 倍加速 + 48h 無法人修正 11 月 / 12 月預期；中文技術媒體對「連續 3 個月 MoM 結構拆解 + Q4 guidance 單月均偏差率 + 對一人 SaaS inference 成本預期影響鏈」完全空白；對 solo dev 的「inference 成本續壓低速率」預期模型中文完全空白
- **目標客群（台灣／亞洲）**：關注 AI inference 成本的台灣 solo dev（估 2,000–5,000 位）+ 關注 TSMC 持倉的台股投資散戶（估 15,000–40,000 位）+ 關注 Claude / OpenAI / Groq 推論成本的中小企業 IT（估 500–1,500 家）+ 關注 AI megatrend 擴大化的技術決策者（估 1,000–3,000 位）
- **技術複雜度**：2/5 — 內容型 + 1 小時 inference 成本預期模型；關鍵為「連續 3 個月 MoM 結構拆解（8 月 +3.8% / 9 月 -0.6% / 10 月 +14.7%）+ Q4 guidance 單月均 NT$5,544–5,756 億偏差率（10 月超 +1.96%）+ 11 月 / 12 月 YoY 對照預測模型 + 對 inference 成本續壓低速率的意義」
- **預估 MRR**：one-off NT$80K–240K per 深度文；訂閱「每週 AI inference 成本預期週報」NT$300/mo × 400 用戶 ≈ NT$120K MRR；可 upsell 「TSMC 月營收 vs AI inference 成本預期試算模型」Gumroad NT$1,500 × 80 份 ≈ NT$120K one-off
- **競品弱點**：中文技術媒體從未做過「連續 3 個月 MoM 結構拆解 + Q4 guidance 偏差率 + 對 inference 成本預期影響鏈」深度拆解；財經媒體從「晶片需求」切入、不做對 solo dev 的下游影響鏈；大型技術媒體不會做「單人 inference 成本預期試算」拆解
- **切入建議**：11/12 寫「TSMC 10 月 YoY +59.7% T+2 續行 + 連續 3 個月 MoM 結構拆解 + Q4 guidance 單月均偏差率 + 對一人 SaaS inference 成本預期影響鏈 + 對 Anthropic IPO $1.4T 定錨加成」 → 11/19 首日交易「TSMC × Anthropic 聯動」 → 12/10 「TSMC 11 月營收 T+0 情境命中分析 + 連續 4 個月 MoM 續行」

## 🧰 工具堆疊更新

- **🆕 OpenAI × Cursor 模型存取 11/12 T-0 當日 — 「proposed」口徑最後一天 + Composer 2.5 Reddit forum nerfed 投訴續行 + BYOK Chat / Agent 續行、Tab / Auto / Cloud Agents 不適用 + Cursor CEO OpenAI 僅 5% 流量**：OpenAI 官方 help page（8/29 口徑）仍未更新；Hackernoon / Tom's Guide / VPSRanking / cybernews 多方口徑確認 11/12 為 proposed cutoff；Cursor forum「Is Composer 2.5 being quietly nerfed?」帖續行、指約 2 週前起品質下降
- **🆕 Anthropic IPO 定錨 Nvidia $10B / Google $10B at IPO price + $26B private placement（AMD / Broadcom / Micron / 微軟 / TSMC）**：Fortune 11/10 口徑；TSMC 列名加成 11 月營收續強預期、對台灣 AI 產業鏈縱向整合口徑首次公開具體化；CNBC 口徑「trading Nov. 19」收斂目標交易日
- **🆕 Anthropic S-1/A2 揭露「關鍵 AI 安全警報已觸發」— RSP Capability Threshold 之一觸發 + 同份 A2 與定價區間並列公開 + 具體等級 ASL-3 / ASL-4 待補**：Yahoo Finance 11/10 口徑；首次具體公開 Capability Threshold 觸發、對 industry 治理為重大節點
- **🔄 Composer 2.5 vs Opus 5.5 CursorBench 4.0 口徑續行 + Cursor forum nerfed 投訴續行**：Opus 5.5 Max 57.8% / Composer 2.5 27.7%（差 30 分）、排名 50/57；Opus 5.5 High 56.0% / $3.97；成本 $0.68 vs $13.43（差 20 倍）；Bito 混搭「常規 Composer + 難題 Opus」= 75% / 比純 Opus 省 57%（純 Opus 90%）；BenchLM Opus 5.5 coding 82.8 / 排名 1/157 續行
- **🔄 OpenAI Agent Builder EOL T-18 migration guide 明示「不保證完整遷移」**：OpenAI 官方 migration guide 僅為 export 流程：Agent Builder 內 Code → Agents SDK → TS/Python → 複製貼上；視為 scaffold、後續仍需測試；Agents SDK vs Workspace Agents 雙路分化續行；ChatKit 不下線續行；Evals 11/30 全下線倒數 Day +12
- **🔄 MCP 2026-07-28 spec 生效第 107 日 + 11 月無 Registry 數字刷新**：stateless core / MCP Apps / Tasks / 強化 OAuth / 棄 Roots / Sampling / Logging / 棄初始 handshake 改 per-request versioning；MCP Registry 9 月口徑 30,375 unique / 99,114 records / 36% stale 為最新權威（11 月無刷新）；ToolBench 43,400+ servers / 219,069 tools 為 Arcade 自家口徑（持保留）
- **🔄 Vercel AI SDK 7 HarnessAgent T+140 experimental canary 續行**：AI SDK 7 本體 2026-06-25 GA、HarnessAgent 續為 canary；10 個 harness adapters / tool search / toolCallConcurrency / streamRetries / WebSocket chat 新增；對「TS Agent 底層 2 強」對決格局續有壓力；對 solo dev：若已穩定走 Claude Agent SDK、無急迫切換理由
- **🔄 Claude Code 2.1 Skills + Subagent nesting 5 levels + disallowed-tools frontmatter 續行**：2.1.197（6/30）Sonnet 5 預設 + 1M context；2.1.172 subagent nesting 5 levels；2.1.198 subagent creation flow 改；Skills preload 進 subagent context；對 fork subagents 預設 on + nested 為自然搭配

## ⚡ 今日行動建議

- [ ] **OpenAI × Cursor 11/12 T-0 當日最後 24 小時 BYOK + Composer 2.5 nerfed 投訴實測 Live blog**：BYOK 切換流程 + Composer 2.5 forum 投訴跨週變化 + CursorBench 4.0 口徑實測 + 個人 1 小時 benchmark 腳本（成本：3 小時；產出：Live blog + benchmark 腳本 + T+1 BYOK 使用體驗大綱）
- [ ] **Anthropic IPO 定錨 Nvidia + Google + $26B 私募 TSMC 列名深度文**：Nvidia 2025-11 vs 2026-11 口徑重複性拆解 + Google $10B 首次具體化 + TSMC × Anthropic 鎖股期推估 + 對台灣 AI 產業鏈縱向整合影響鏈（成本：3–4 小時；產出：長文 blog + 產業鏈縱向整合模型 + 11/13 pricing day 續行大綱）
- [ ] **Anthropic 「關鍵 AI 安全警報已觸發」RSP ASL-3/ASL-4 推測 + 對 Claude 模型 release 節奏影響**：RSP 四層政策梳理 + 觸發等級判斷標準 + 對 Opus 5.6 / Sonnet 5.6 time line 影響 + vs OpenAI Preparedness / Google DeepMind Frontier Safety 對比（成本：3 小時；產出：長文 blog + RSP 等級判斷表 + 11/19 首日交易聯動大綱）
- [ ] **TSMC 10 月 YoY +59.7% T+2 續行對一人 SaaS inference 成本預期影響鏈**：連續 3 個月 MoM 結構拆解 + Q4 guidance 單月均偏差率 + 11 月 / 12 月 YoY 對照預測模型 + 對 inference 成本續壓低速率的意義（成本：2 小時；產出：深度文 + 預測模型表 + 11/19 聯動大綱）
- [ ] **iPhone Duo Day 21 工作日第四日 vs 週末 48h 差額曲線 + 台灣新機 vs 二手 vs 回收 三線對照**：Day 21 工作日第四日切片 + 台灣雙 11 新機降 NT$2,000 + 回收價 4 層 + 中國炒家虧損原因（成本：2 小時；產出：長文 blog + 三線對照表）

## ⏳ 待觀察

- **Anthropic pricing day 11/13（週五）earliest + 首日交易 11/19（CNBC 口徑）**：A2 已填入 $70–78 定價區間 → 11/13 earliest pricing + 11/19 trading（CNBC 收斂目標）；首日交易情境分支 A（11/19 開盤）vs B（Thanksgiving 前最後窗口）vs C（延後至 12 月）
- **Anthropic RSP 觸發等級 ASL-3 vs ASL-4**：S-1/A2 「關鍵 AI 安全警報已觸發」具體等級待補；對 Opus 5.6 / Sonnet 5.6 release 節奏影響待觀察；24–72h 內是否補發明確等級披露
- **Anthropic × TSMC × Nvidia × Google 私募配售具體金額占比 + 鎖股期**：Fortune 11/10 口徑「$26B private placement」+ Nvidia / Google 各 $10B；具體金額占比、是否算入 825M 股、鎖股期待 S-1/A2 細節披露
- **OpenAI × Cursor 切斷實況 11/12 T-0 當日**：Cursor 是否在 T-0 內公告退場補救方案；11/12 → 11/21 促銷價矛盾 9 天視窗如何結束（提前下架 / 延續 / 其他）；OpenAI / Cursor 無新公告續行；Composer 2.5 nerfed 投訴是否有 Cursor 官方回應
- **TSMC 11 月 / 12 月月營收 YoY 續強 / 收斂**：10 月 +59.7% 加速、未現轉弱；11 月 / 12 月 YoY 若持續 +50% 以上區間 → AI megatrend 擴大化定案；若收斂至 +30–40% → 轉弱首個訊號
- **OpenAI Agent Builder EOL T-17（11/13 週五）**：是否補發 workflow graph export 工具（migration guide 現未承諾）；Thanksgiving 前美國窗口剩 13 天
- **iPhone Duo Day 22 Week 3 Day 15（11/13 週五）**：工作日回歸第五日；可做「工作週 5 日完整樣本 vs 週末 48h」差額拆解
- **Smithery T+13 Day +13（11/13 週五）**：第二週第五日；ToolBench grading × directory 擁有者條目中立性第二週第五日切片
- **立法院中小微企業轉型條例 T+45（11/13 週五）**：9/29 開議第 45 日；本週（11/10–11/14）為委員會排審窗口首個觀察週第五日；立院公開議程 2026-07/08 後無更新續行
- **數發部 100 億 AI T+40（11/13 週五）**：8 月底 10 家 / NT$2.55 億後 Q4 pipeline 是否公布；SBIR 2026-01 起上限調高為替代路徑
- **TiBOOST 得主技術棧 / 商業模式披露**：亞洲準譯 / 振生半導體 / DOGU Robotics 48h 內是否補發技術棧 / 商業模式細節；名次對應官方明示
- **Vercel AI SDK 7 HarnessAgent GA**：自 6/25 experimental canary 已滿 T+140；若 11 月 GA 將改變「TS Agent 底層 2 強」對決格局；官方文件仍標記 experimental canary

[^kimi-k25]: Moonshot AI 於 2026 年發布的開源大型語言模型 Kimi K2.5；Cursor 將其作為自家 Composer 2.5 編碼助手的底層模型，並在其上以 reinforcement learning（RL）針對程式碼編輯任務微調，取代原本由 OpenAI GPT 系列承擔的大部分 agentic coding 流量。
[^rsp]: Anthropic Responsible Scaling Policy，公司自 2023 年起公布的自家 AI 安全治理框架，將模型能力依 Capability Threshold 分為 ASL-1 到 ASL-4 數層，對應不同的評測、部署限制與 release 審核程序，為能力逼近高風險區時的分層治理機制。
[^promptfoo]: 以 MIT 授權的開源 LLM 評測框架，用 YAML 設定檔定義測試矩陣、prompt、模型與 assertion，可本機跑 regression 比對不同模型或 prompt 版本的輸出品質，常被用來替代 OpenAI Evals 等雲端 SaaS 評測服務。
[^langfuse]: 開源 LLM observability 平台，提供 trace、session、cost、prompt version 與 evaluation 等觀測能力；社群版 self-host 免費、SaaS 另有 Pro 與 Enterprise 分層，是 agentic 工作流事後追蹤的常見選項。
[^asl]: AI Safety Level，Anthropic Responsible Scaling Policy 內對模型能力的分層標記：ASL-1 無重大風險、ASL-2 對應當前前沿模型、ASL-3 代表可明顯放大非專家造成重大傷害的能力、ASL-4 則接近具備自主 AI 研究能力；進入更高層會觸發對應的部署與安全評測要求。
[^tiboost]: 由行政院主辦的台灣新創大聯盟競賽，聚焦 AI、半導體、Robotics 等深科技領域，2026 年由亞洲準譯、振生半導體、DOGU Robotics 進入前三名，用以展示政府對本土 deep tech 新創的資源整合與產業鏈串接。

## 📚 引用來源

1. [Fortune — Anthropic sets IPO range valuing it at up to $1.4 trillion amid AI stock sell-off](https://fortune.com/2026/11/10/anthropic-ipo-price-range-ai-stock-sell-off/) — 2026-11-10
2. [CNBC — Anthropic sets IPO price range of $70 to $78, trading Nov. 19](https://www.cnbc.com/2026/11/10/anthropic-sets-price-range-of-70-to-78-in-upcoming-ipo.html) — 2026-11-10
3. [TradingView — Anthropic PBC Begins IPO Roadshow at $70-$78 Per Share](https://www.tradingview.com/news/tradingview:7fd26768055eb:0-anthropic-pbc-begins-ipo-roadshow-at-70-78-per-share/) — 2026-11-10
4. [Anthropic — Roadshow Launch](https://www.anthropic.com/news/roadshow-launch) — 2026-11-10
5. [Gizmodo — Anthropic Reveals IPO Price as AI Market Jitters Grow](https://gizmodo.com/anthropic-still-plans-to-go-public-as-soon-as-next-week-report-2000837422) — 2026-11-10
6. [Tom's Guide — OpenAI is Leaving Cursor in November](https://www.tomsguide.com/ai/openai-is-leaving-cursor-in-november-here-are-your-3-options) — 2026
7. [Hackernoon — What OpenAI's Cursor Cutoff Means for Your Team](https://hackernoon.com/what-openais-cursor-cutoff-means-for-your-team) — 2026
8. [cybernews — OpenAI pulls the plug on Cursor following SpaceX acquisition](https://cybernews.com/ai-news/openai-cursor-spacex-contract-termination/) — 2026
9. [VPSRanking — OpenAI to wind down OpenAI model access in Cursor by November 12, 2026](https://vpsranking.com/news/ai/ai-2026-08-28-openai-cursor-contract-winddown/) — 2026-08-28
10. [Cursor Forum — Is Composer 2.5 being quietly nerfed?](https://forum.cursor.com/t/is-composer-2-5-being-quietly-nerfed/169779) — 2026
11. [BenchLM — Claude Opus 5.5 vs Composer 2.5](https://benchlm.ai/compare/claude-opus-5-5-vs-composer-2-5) — 2026
12. [developers.openai.com — Agent Builder Migration Guide](https://developers.openai.com/api/docs/guides/agent-builder/migrate-from-agent-builder) — 2026
13. [MCP Directory — OpenAI AgentKit Deprecation Migration Guide 2026](https://mcp.directory/blog/openai-agentkit-deprecation-2026) — 2026
14. [ecorpit.com — OpenAI shuts Agent Builder, Evals and reusable prompts on 30 November 2026](https://ecorpit.com/openai-agent-builder-evals-prompts-shutdown-november-2026/) — 2026
15. [SEC Form 6-K TSMC Revenue 2026-11-10](https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000796/tsm-revenue20261110.htm) — 2026-11-10
16. [money.udn — 台積電 10 月營收 5,868 億 創新高](https://money.udn.com/money/story/5710/9869070) — 2026-11-10
17. [ctee — 台積電 10 月營收](https://www.ctee.com.tw/news/20261110701219-430501) — 2026-11-10
18. [chinatimes — 台積電 10 月營收 2 奈米加速](https://www.chinatimes.com/realtimenews/20261110002838-260410) — 2026-11-10
19. [CNA — 政院修法投入千億助中小微企業升級](https://cna.com.tw/news/aipl/202610080165.aspx) — 2026-10-08
20. [iThome — 中小微企業轉型升級發展條例修正草案](https://www.ithome.com.tw/news/179523) — 2026
21. [立法院議事紀錄](https://www.ly.gov.tw/pages/MeetingList.aspx?nodeid=135) — 2026-11-12 存取
22. [CNA — 數發部百億 AI 投資方案 開放境外公司可納投](https://cna.com.tw/news/afe/202610040029.aspx) — 2026-10-04
23. [technews — 百億 AI 基金首年僅投 7,500 萬](https://technews.tw/?p=1520580) — 2026
24. [行政院新聞稿 — TiBOOST 創業大聯盟競賽前三名頒獎](https://www.ey.gov.tw/Page/9277F759E41CCD91/008fe836-d6f6-4636-8805-2d8066f35e97) — 2026-11-10
25. [technews.tw — iPhone Duo 台灣售價 74,900 元起](https://finance.technews.tw/2026/09/10/iphone-duo-affordable/) — 2026-09-10
26. [CNA — iPhone Duo 中國市場熱銷 發貨排至明年](https://www.cna.com.tw/news/acn/202610170102.aspx) — 2026-10-17
27. [ifeng — 商家囤 50 台 iPhone Duo 虧本](https://tech.ifeng.com/c/8xLKmXFldKG) — 2026
28. [Vercel — AI SDK 7 is now available](https://vercel.com/changelog/ai-sdk-7) — 2026-06-25
29. [Vercel Changelog — Program Agent Harnesses with AI SDK](https://vercel.com/changelog/program-agent-harnesses-with-ai-sdk) — 2026
30. [Dev.to — The MCP Registry By The Numbers](https://dev.to/amareswer/the-mcp-registry-by-the-numbers-38nc) — 2026-09
31. [Arcade.dev — Smithery joins Arcade](https://arcade.dev/blog/smithery-joins-arcade) — 2026-08
