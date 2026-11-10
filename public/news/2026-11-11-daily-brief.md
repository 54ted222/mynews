---
title: 每日創業情報 — 2026-11-11
date: 2026-11-11
tags: 創業情報, AI 產業, SaaS, 台灣
summary: T+1 三題齊現命中日 — Anthropic S-1/A2 11/10 已提交（$70–78 × 825M 股 / 隱含募資 $57.8–64.35B / Nasdaq ANT / roadshow 已啟動）+ TSMC 10 月營收 NT$5,868.9 億破紀錄 YoY +59.7% 超 Q4 guidance 上限 + TiBOOST 前三名公布（亞洲準譯 / 振生半導體 / DOGU Robotics 列名順序）+ OpenAI 砍 Cursor T-1 無新變動 + Veterans Day SEC 休市 + Agent Builder EOL T-19 Thanksgiving 前剩 15 天美國窗口。
keywords: Anthropic S-1A2 price range 70 78 per share 825 million shares Nasdaq ANT roadshow launched 2026-11-10, Anthropic IPO implied raise 57.8 64.35 billion greenshoe trading debut November 16 19 20, TSMC October 2026 monthly revenue 586.89 billion YoY 59.7 MoM 14.7 Q4 guidance beat, 台積電 2026年10月 月營收 5868億 創新高 AI 2奈米 iPhone 拉貨, TiBOOST 2026 決賽 前三名 亞洲準譯 振生半導體 DOGU Robotics 11月10日 卓榮泰, OpenAI Cursor model cutoff November 12 T-1 Veterans Day SEC closed, OpenAI Agent Builder EOL T-19 Thanksgiving 15 days migration SDK, iPhone Duo Day 20 Week 2 Day 13 工作日第三日 二手無新數據 中國炒家虧損續行, Composer 2.5 vs Opus 5.5 CursorBench 4.0 口徑修正 27.7 vs 57.8 Bito 混搭 75 省 57, 立法院中小微企業轉型條例 T+43 排審窗口第三日無進度, 數發部 100 億 AI T+38 11 月無 pipeline 刷新 SBIR 2026-01 替代路徑, MCP Registry 30375 unique 99114 records 36 stale 2026-07-28 spec 第 106 日
---

# 每日創業情報 — 2026-11-11

## 🎯 今日 TL;DR

- **🆕 Anthropic S-1/A2 已於 11/10 提交 + Roadshow 正式啟動 + 定價 $70–78 × 825M 股 + 隱含募資 $57.8–64.35B + Nasdaq 代號 ANT + 首日交易目標 11/16 或 11/19–11/20**：EDGAR CIK 2130357 11/10 補發 S-1/A2（`anthropicpbc-sx1ax2.htm`）；Anthropic 801.35M 股 + 既有股東 23.65M 股 + 承銷商 30 日 123.75M 股 greenshoe[^greenshoe]；對應隱含市值需另算 share class total、投資人口徑 $1.0–1.5T 區間續行、Bloomberg 預熱 $1.2–1.3T；11/10 brief 情境分支 A（盤前 A2 填入 price range → roadshow 當日啟動）實際命中、分支 B / C（無動靜 / 延後）失效；對台灣 Claude 大客戶：$70–78 定價區間落在 Bloomberg 下修口徑中段 → 上市後 Claude Pro / Teams / Enterprise 定價壓力溫和機率續升、Reuters 11/5 「投資人懷疑」口徑明顯降權
- **🆕 TSMC 10 月月營收 T+1 情境命中「更強版本」— NT$5,868.9 億 / YoY +59.7% / MoM +14.7% + 超 Q4 guidance 單月均上限 NT$5,756 億達 +1.96% + 2025-10 base +16.9% 的 3.5 倍加速 + 1–10 月累計 NT$4.49 兆 YoY +43.3%**：11/10 brief 情境分支「若 10 月落 5,500 億 → YoY +50% 區間」實際落在更強版本（+59.7% > +54.6% 9 月 / 加速、非收斂）→ AI megatrend 動能續強且加速、未現轉弱訊號；媒體口徑：AI 晶片需求 + iPhone 拉貨 + 2 奈米量產推升、Q4 開門紅；對一人 SaaS inference 成本：Claude / OpenAI / Groq inference 單位成本續壓低速率續行、不會因 AI 需求放緩而減緩；對 Anthropic IPO roadshow 投資人情緒：AI megatrend 擴大化 → $70–78 定價區間上緣機率升高
- **🆕 TiBOOST 2026 決賽前三名公布 — 卓榮泰院長親頒「亞洲準譯[^asia-translation] / 振生半導體[^zhensheng] / DOGU Robotics[^dogu-robotics]（韓國）」列名順序 + 名次對應未官方明示 + 500 萬獎金池 + 技術棧細節決賽後仍未披露**：行政院新聞稿列名順序推測對應 1/2/3 名（NT$250 萬 / 150 萬 / 100 萬），但官方未明示；亞洲準譯為 AI 翻譯（跨語種專業領域翻譯）、振生半導體為先進封裝 / 製程技術、DOGU Robotics 為韓國機器人、為少數 TiBOOST 得獎海外團隊；行動貝果（MoBagel）[^mobagel]、醫守科技（EDoc）、台灣若美[^juvo-tech] 落榜；對台灣 solo dev 參照度：AI 翻譯（亞洲準譯）為最可參照、振生半導體為硬體密集、DOGU Robotics 為硬體密集 → 直接 copy 難度高、技術棧快拆窗口續開
- **🔄 OpenAI 11/12 砍 Cursor Models T-1（11/11 → 11/12）— 48h 無新 OpenAI / Cursor 正式公告 + 媒體口徑仍為「proposed」 + 11/21 GPT-5.6 Sol 促銷價表矛盾視窗 10 天續行 + Veterans Day SEC 休市但非 OpenAI 公司事件窗口**：OpenAI 官方 help page（8/29 口徑）仍未更新；Tom's Guide / Hyrax / aws.plainenglish.io / moclaw.ai 口徑沿用「proposed、Cursor 可提前終止」；Cursor forum 無新遷移貼、Reddit r/cursor 無具體遷移文；Cursor CEO「OpenAI 僅 5%」口徑未變；對仍重度綁 GPT-5.6 Sol 的 solo dev：T-1 最後 24 小時為「Composer 2.5 vs Opus 5.5 vs Codex CLI benchmark」最後窗口、口徑建議重跑 CursorBench 4.0
- **🔄 OpenAI Agent Builder EOL T-19（11/11 → 11/30）— Thanksgiving 11/26 前美國窗口剩 15 天 + 48h 無新 migration tooling + Agents SDK export 續為 scaffold + ChatKit 續存 + Evals read-only Day +11 連續倒數**：OpenAI 官方 guide 仍「Code → Agents SDK → TS/Python 複製貼上」、不保證 workflow graph / 完整遷移；dev.to / mcp.directory / agenticwire 無新 tooling；Promptfoo[^promptfoo] 續為主要替代、Langfuse[^langfuse] 併用紅隊 / observability；對 solo dev：Thanksgiving 前 15 天為美國市場最後有效遷移窗口、感恩節後週餘 2 日倒數為最後實作期
- **🔄 iPhone Duo Day 20 Week 2 Day 13（11/11 週三）— 工作日回歸第三日 + 48h 無 11 月新中港台價格數字 + 中國炒家虧損普遍續行 + ifeng 商家囤 50 台虧本（6,000 加價 → 二手回收 3,000 元封頂）為最新具體口徑 + 折疊屏產能爬坡超預期**：Gizmochina 11/05「幾乎所有炒 iPhone Duo 的黃牛現在都在虧錢」+ 深圳 1TB 黑色砍 2,800 RMB + SCMP China premium evaporating + Vietnamnet 螢幕憂慮折價倒賣 11 月續行；台灣 11 月第 2 週尚無二手行情中文媒體具體報導 → 新鮮度極高；Day 20 為工作日第三日、可做「工作日 3 日 vs 週末 48h」差額曲線拆解
- **🔄 Smithery MCP Proxy T+11 Day +11（11/11 週三）— 連續 2 週中立性觀察第二週第三日 + MCP 2026-07-28 spec 生效第 106 日 + 11 月無 Registry 數字刷新 + MCP Registry 9 月口徑 30,375 unique / 99,114 records / 36% stale 為最新權威 + ToolBench 43,400+ / 219,069 工具為 Arcade 自家持保留**：10/31 UTC 00:00 下線後第 11 日；第二週第三日切片；對 2026-07-28 spec 支援度為選型新指標續行；對一人 SaaS：第二週第三日為「arcade / modelcontextprotocol.io / pulse-mcp / mcp-get 四地重複度 + 各自 stale 比例」首個可比切片續行
- **🔄 立法院中小微企業 1,000 億轉型條例 T+43（11/11 週三）+ 本週（11/10–11/14）為委員會排審窗口首個觀察週第三日 + 立院公開議程 2026-07/08 後無更新 + 11 月通過機率極低**：10/8 行政院通過草案、原規劃 9 月送立院、實際送審時點晚於原定；立院經濟委員會公開議程最新仍為 2026-07/08 能源管理法；T+43 仍無進展訊號；R&D 抵減率 20% / 轉型設備投資抵減門檻 25 萬 / 171.6 萬家受惠為既定 soundbite；本週排審窗口第三日無媒體新進度 → 11 月通過機率續低
- **🔄 數發部 100 億 AI T+38（11/11 週三）— 8 月底累計口徑 10 家 / NT$2.55 億 / 民間帶動 NT$5.7 億 + 境外公司放寬 3 條件續行 + 36 家搭配投資人續行 + 11 月無 pipeline 刷新 + SBIR 2026-01 起上限調高為替代路徑**：11 月無新 pipeline 公告、第三方口徑最新仍為 CNA 10/04；SBIR 自 2026-01-01 起調高上限（先期研究 150 萬、研究開發 1,200 萬、加值應用 600 萬）+ 無人載具 / AI 智慧應用 / 淨零 三大核心、對 solo dev 為替代路徑續行

## 🔄 昨日追蹤

- **🆕 Anthropic S-1 / IPO T-0 → T+1 情境命中**：11/10 roadshow 當日 A2 補發 + 定價 $70–78 + 825M 股 + Nasdaq ANT + 首日交易目標 11/16 / 11/19–11/20；分支 A 情境實際命中、Bloomberg 下修口徑中段機率續升
- **🆕 TSMC 10 月月營收 T-0 → T+1 情境命中「更強版本」**：NT$5,868.9 億 / +59.7% YoY / +14.7% MoM 超 Q4 guidance 上限 → AI megatrend 擴大化
- **🆕 TiBOOST T-0 → T+1 情境命中**：11/10 17:30 公布前三名「亞洲準譯 / 振生半導體 / DOGU Robotics」列名順序、名次對應待補；技術棧細節仍未披露
- **🔄 OpenAI 11/12 砍 Cursor Models T-2 → T-1**：48h 無新公告；最後 24 小時 benchmark 窗口
- **🔄 OpenAI Agent Builder EOL T-20 → T-19**：無新 migration tool；Thanksgiving 前剩 15 天
- **🔄 iPhone Duo Day 19 → Day 20**：Week 2 Day 12 → Day 13；工作日回歸第二日 → 第三日；ifeng 商家囤 50 台虧本為新口徑
- **🔄 Smithery T+10 → T+11**：第二週第二日 → 第三日
- **🔄 立法院中小微企業 T+42 → T+43**：排審窗口首個觀察週第二日 → 第三日
- **🔄 數發部 100 億 AI T+37 → T+38**：11 月無 pipeline 刷新
- **🆕 Veterans Day 11/11 SEC 休市**：Anthropic pricing 延後至 11/13 earliest、交易 11/16 earliest 續行

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🆕 TSMC 10 月月營收破紀錄 — NT$5,868.9 億 / YoY +59.7% / MoM +14.7% + 超 Q4 guidance 單月均上限 NT$5,756 億達 +1.96% + 1–10 月累計 NT$4.49 兆 YoY +43.3% + 2025-10 base +16.9% 的 3.5 倍加速 + AI 晶片需求 + iPhone 拉貨 + 2 奈米量產推升 + Q4 開門紅**：單月營收創歷史新高；對照 9 月 YoY +54.6%、MoM -0.6% → 10 月由收斂轉為加速；超 Q4 guidance 上限暗示 11/12 月仍有加速空間 | [SEC Form 6-K TSMC Revenue 2026-11-10](https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000796/tsm-revenue20261110.htm)、[money.udn — 台積電 10 月營收 5,868 億](https://money.udn.com/money/story/5710/9869070)、[ctee 10 月營收](https://www.ctee.com.tw/news/20261110701219-430501)、[chinatimes 10 月營收 2 奈米加速](https://www.chinatimes.com/realtimenews/20261110002838-260410)、[自由財經 10 月營收](https://stock.ltn.com.tw/article/xcduhdpnatw7) | 對一人 SaaS inference 成本：YoY +59.7% 加速 → N3 / N2 產能緊、inference 單位成本續壓低速率續行、未現轉弱訊號；對 Anthropic IPO roadshow 投資人情緒：AI megatrend 擴大化 → $70–78 定價區間上緣機率升高；對台灣 solo dev 創業敘事：「AI megatrend 未緩」為 11/11–11/12 blog 主線 | 機會：T+1 「TSMC 10 月營收情境命中更強版本深度拆解 + 對 Anthropic 定價區間影響鏈 + 對一人 SaaS inference 成本預期」+ T+2 「連續 3 個月 MoM 結構拆解 + Q4 guidance 單月均偏差率 + 11/12 砍 Cursor 同日聯動」深度文；威脅：base effect 跳變大、YoY 單月不足以判斷 2027 趨勢、需看 11 月 + 12 月連續訊號 |
| **🆕 TiBOOST 2026 決賽前三名公布 — 卓榮泰院長親頒「亞洲準譯 / 振生半導體 / DOGU Robotics」列名順序 + 名次對應未官方明示 + 500 萬獎金池 + 行動貝果 / 醫守科技 / 台灣若美落榜 + 技術棧細節仍未披露**：亞洲準譯 = AI 翻譯（跨語種專業領域）、振生半導體 = 先進封裝 / 製程技術、DOGU Robotics = 韓國機器人；行政院新聞稿列名順序推測對應 NT$250 萬 / 150 萬 / 100 萬 | [行政院新聞稿](https://www.ey.gov.tw/Page/9277F759E41CCD91/008fe836-d6f6-4636-8805-2d8066f35e97)、[money.udn — TiBOOST 創業大聯盟競賽](https://money.udn.com/money/story/5612/9868977)、[ctee TiBOOST 決賽](https://www.ctee.com.tw/news/20261110701126-430201)、[yam TiBOOST 11月10日](https://n.yam.com/Article/20261110899991) | 對台灣 solo dev 參照度：AI 翻譯（亞洲準譯）為最可參照（純軟體、1 人可做 MVP、垂直 LLM 專業領域為當紅主題）、振生半導體 / DOGU Robotics 為硬體密集直接 copy 難度高；評審 TSMC / 中華電信 / 光寶對 AI 翻譯優先 → solo dev 「專業領域跨語種 LLM」題材被官方背書 | 機會：T+1 「TiBOOST 前三名技術棧快拆 + 亞洲準譯 AI 翻譯 solo 可複製難度評分 + 評審口徑推測」+ T+3 「AI 翻譯垂直 LLM SaaS idea cluster 深度文」；威脅：名次對應未官方明示、需 ey.gov.tw 原文或證交所公告確認；技術棧未披露、複製難度評分僅能從公開資料推估 |
| **🆕 Anthropic S-1/A2 11/10 補發 + Roadshow 正式啟動 + 定價 $70–78 × 825M 股 + 隱含募資 $57.8–64.35B + Nasdaq ANT + 首日交易目標 11/16 或 11/19–11/20 + Veterans Day SEC 休市不影響 Anthropic 公司事件**：EDGAR CIK 2130357 補發 S-1/A2；Anthropic 801.35M + 既有股東 23.65M 股 + 承銷商 30 日 123.75M 股 greenshoe；pricing 最早 11/13 續行 | [Anthropic — Roadshow Launch](https://www.anthropic.com/news/roadshow-launch)、[SEC EDGAR S-1/A Amendment](https://www.sec.gov/Archives/edgar/data/0002130357/000162828026072484/anthropicpbc-sx1ax2.htm)、[Tribune India — Anthropic IPO $64.35B](https://tribune.com.pk/story/2554107/anthropic-targets-up-to-6435-billion-in-us-ipo) | 對台灣 Claude 大客戶：$70–78 定價區間落在 Bloomberg 下修口徑中段 → 上市後 Claude Pro / Teams / Enterprise 定價壓力溫和機率續升、Reuters 11/5「投資人懷疑」口徑明顯降權；對台灣 solo dev inference stack：Claude Opus 5.5 / Sonnet 5.5 直連為 11/12 砍 Cursor 後主要替代路徑續行 | 機會：T+1 「Anthropic 定價 $70–78 對台灣 Claude 用戶定價預期影響鏈 + roadshow 啟動 → 11/16 交易日情境命中分析 + AI megatrend 與 TSMC 10 月營收聯動」+ T+3 「11/13 pricing day 情境 + 11/16 WSJ pricing week 首日交易」深度文；威脅：隱含市值仍待算 share class total、投資人口徑 $1.0–1.5T 區間續行；greenshoe 完全行使對估值敏感度中等 |
| **🔄 立法院中小微企業 1,000 億轉型條例 T+43 + 本週（11/10–11/14）為委員會排審窗口首個觀察週第三日 + 立院公開議程 2026-07/08 後無更新 + 11 月通過機率極低 + 171.6 萬家受惠為既定 soundbite**：R&D 抵減率 20% / 轉型設備投資抵減門檻 25 萬 soundbite 續行；T+43 仍無進展訊號；本週排審窗口第三日無媒體新進度 | [CNA — 政院修法投入千億助中小微企業升級](https://cna.com.tw/news/aipl/202610080165.aspx)、[uanalyze — 171.6 萬家受惠](https://uanalyze.com.tw/articles/5191156753)、[立法院議事紀錄](https://www.ly.gov.tw/pages/MeetingList.aspx?nodeid=135) | 若法案通過，R&D 抵減率自約 15% 提高至 20%、轉型設備投資抵減門檻自產業創新條例 100 萬降至 25 萬；本週為立院排審第三日、無媒體新進度 → 11 月通過機率續低、但 25 萬門檻對 solo dev 轉型升級為新契機 | 機會：「11/11 立法院新會期第 6 週第三日 + 中小微條例委員會排審預測續行」+「25 萬元設備投資抵減自認試算 + R&D 20% 抵減個案拆解」深度文；威脅：送審至三讀期程 3–12 個月、11 月通過機率續低、11 月排審窗口可能流失到 12 月 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🆕 Anthropic 公開 IPO 定價 $70–78 × 825M 股 + Nasdaq ANT + 隱含募資 $57.8–64.35B — 對 Claude 訂閱定價預期影響鏈** | LLM 模型供應商 / IPO 定價錨點 | 對台灣 Claude 大客戶：$70–78 定價區間落在 Bloomberg 下修口徑中段、Reuters $1.5T 口徑降權、Bloomberg $1.2–1.3T 口徑中段機率升高 → 上市後 Claude Pro / Teams / Enterprise 定價壓力溫和 | Claude API Opus 5.5 $4/M in $20/M out、Sonnet 5.5 $2/$10、Haiku 5.5 $0.10/$0.50（<100K）；Claude Pro $20/mo、Teams $30/mo、Enterprise custom | vs Bloomberg 11/6 $1.2–1.3T 預熱口徑：$70–78 × 825M 股 + greenshoe 隱含市值仍待算完整 share class → 中段口徑續行；vs Reuters 11/5「投資人懷疑」口徑：11/10 A2 補發 + roadshow 啟動明顯降權 | 🟢 一人 SaaS Claude 用戶：繼續用、定價壓力溫和；🟢 考慮自建 inference：仍以 Claude Opus 5.5 orchestrator + Haiku 5.5 sub-agent + Sonnet 5.5 draft 三層混搭為最穩；🟡 投資標的評估：11/13 pricing day + 11/16 首日交易觀察 |
| **🔄 Composer 2.5 vs Opus 5.5 CursorBench 4.0 口徑修正續行 + Bito 混搭 75% / 省 57% + 11/12 OpenAI 砍 Cursor T-1 最後 benchmark 窗口 + 48h 無新 Composer / Opus 版本** | AI coding / 模型選型 / T-1 窗口 | 仍以 Cursor 為主的 solo dev：T-1 最後 24 小時為「Composer 2.5 vs Opus 5.5 vs Codex CLI benchmark」最後窗口；CursorBench 4.0 口徑：Opus 5.5 Max 57.8% / Composer 2.5 27.7%（差 30 分）、成本 $0.68 vs $13.43（差 20 倍）；Bito 混搭「常規 Composer + 難題 Opus」= 75% / 比純 Opus 省 57% | Cursor Plus $8 / Premium $30 / Super $100 / Ultra $200；Claude API Opus 5.5 $4/M in $20/M out；Codex CLI 自家；Composer 2.5 標準價 $0.50/M in $2.50/M out | vs 繼續用 Cursor：Composer 2.5 補 OpenAI 空缺但 benchmark 差 30 分、需配 Opus 5.5 混搭；vs 直接走 Claude Code CLI：訂閱結構差異大；vs Codex 自家 CLI + ChatGPT Pro：仍有 OpenAI 模型直連但無 Cursor 編輯器體驗；vs OpenRouter 第三方中繼：延遲與定價不穩 | 🔴 重度依賴 GPT-5.6 Sol：T-1 最後 24 小時立刻並行跑 CursorBench 4.0 口徑 Composer 2.5 vs Opus 5.5 benchmark；🟡 Claude 已是主力：T-1 不急；🟢 全走 Claude Code CLI：無影響；🔴 BYOK 用戶：確認僅 local Chat / Agent 續行 |
| **🔄 OpenAI Agent Builder EOL T-19（11/11 → 11/30）— Thanksgiving 前美國窗口剩 15 天 + 48h 無新 migration tooling + Agents SDK export 續為 scaffold + ChatKit 續存 + Evals read-only Day +11** | AI agent / T-19 最後 19 天 | Agent Builder 用戶：工程師 production → Agents SDK（TS / Python），非工程師可編輯 → ChatGPT Workspace Agents（需 Business / Enterprise / Edu workspace）；OpenAI 官方明示「不保證 workflow graph 轉換、不保證每項行為完整遷移」→ 視 Agents SDK export 為 scaffold；Evals 用戶：匯出 dataset + Promptfoo YAML 轉換 | Promptfoo 開源 MIT；Langfuse 社群版免費 / Pro $59/mo / Enterprise custom；ChatKit 保留不計 | vs ChatKit（embeddable chat UI 保留）；Agents SDK 選「engineer-owned workflow」、Workspace Agents 選「non-engineer editable automation」；Evals 遷移目標 Promptfoo + Langfuse 混搭；Agents SDK export 僅第一稿、knowledge bases / custom tools 可能需手工 rework | 🔴 Agent Builder 用戶：T-19 Thanksgiving 前 15 天、建議 rebuild in Agents SDK（export 僅第一稿）；🟡 Evals 用戶：若尚未匯出 dataset，Thanksgiving（11/26）前補完；🟢 red-teaming 需求：保留 Promptfoo + Langfuse 混搭 |
| **🔄 Smithery MCP Proxy T+11 Day +11（11/11 週三）— 第二週第三日切片 + MCP 2026-07-28 spec 生效第 106 日 + 11 月無 Registry 數字刷新 + 48h 無新中立性觀察訊號**：MCP Registry 9 月口徑 30,375 unique / 99,114 records / 36% stale 為最新權威（11 月無刷新）；ToolBench 43,400+ servers / 219,069 tools 為 Arcade 自家口徑（持保留） | MCP infrastructure / 第二週第三日 | 已遷移完成的團隊：週三為「連續 2 週中立性觀察第二週第三日」切片；未遷移團隊：用 vendor 官方 MCP URL + 自建或選第三方 OAuth 2.1 identity provider 補 auth / session management；對 2026-07-28 spec 支援度為選型新指標續行 | Arcade.dev directory 使用者端免費；modelcontextprotocol.io 官方 registry 免費；Pulse MCP / mcp-get 免費 | vs 直接 vendor 官方 MCP URL / Pulse MCP / mcp-get / modelcontextprotocol.io 官方 registry（2,000+ servers、server.json manifest、9 月口徑 30,375 unique / 99,114 records）；差異在 Arcade 2026-08-05 已收購 Smithery + 同時運營 ToolBench grading；ToolBench 43,400+ / 219,069 為 Arcade 自家數字持保留 | 🔴 現用 Smithery 團隊：T+11 Day +11 退款到帳三次檢查；🟡 Arcade 中立性觀察：第二週第三日切片、月底前可做「連續 2 週中立性觀察終結報告」；🟢 新建 MCP server：直接走 vendor 官方 URL + 考慮同步登記官方 MCP Registry |
| **🔄 Claude 5.5 家族三層混搭 + Claude Code 2.1 Skills / Subagent nesting 5 levels / disallowed-tools frontmatter + Anthropic IPO 定價 $70–78 後「inference stack 定價壓力溫和」為新敘事**：Opus 5.5（$4/$20、orchestrator）+ Sonnet 5.5（$2/$10、draft / bugfix）+ Haiku 5.5（$0.10/$0.50 <100K、sub-agent）三層成本比約 40:20:1；Claude Code 2.1.197（6/30）Sonnet 5 預設 + 1M context、2.1.172 subagent nesting 5 levels、2.1.198 subagent creation flow 改 | LLM 模型家族 + Agent 框架 底層 + IPO 定價錨點 | 一人 SaaS inference stack 續行穩定；Claude Code 2.1 Skills 已成為 agent 工具跨 vendor 共通設定（AGENTS.md）落地路徑；IPO 定價 $70–78 落在 Bloomberg 下修口徑中段 → 上市後 Claude 訂閱定價壓力溫和機率續升、長期 inference 成本預期更可預測 | Claude API 計費；SDK 開源免費；Composer 2.5 併入 Cursor 訂閱；Cursor CLI 用 Composer 2.5 fast mode 平均 $0.44 / task | vs 11/12 後 Cursor OpenAI 退場：Claude 5.5 三層 + Agent SDK 直連為最穩走法；Composer 2.5 底層走 Kimi K2.5 + Cursor RL、CursorBench 4.0 落後 Opus 5.5 Max 30 分；Bito 混搭為新中點 | 🟢 一人 SaaS：Opus 5.5 orchestrator + Haiku 5.5 tool-heavy sub-agent + Sonnet 5.5 doc / small code 3 層混搭已穩定；🟡 Composer 2.5：成本敏感 / 大量 batch task 可試、不宜當主力重度編碼；🔴 重度編碼：Claude Opus 5.5 Max / High 為主、Composer 2.5 混搭為省 57% 選項 |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：Anthropic IPO 定價 $70–78 + TSMC 10 月營收破紀錄 + TiBOOST 得主三題聯動 T+1 命中分析深度文 🆕

- **痛點來源**：三題同日 11/10 公告 / 決賽 / A2 補發 + roadshow 啟動 → 11/11 為「T+1 情境命中分析」黃金窗口；中文技術媒體口徑整合近零；3 題「獨立發文」vs「同日三題聯動 T+1 命中分析 + 定價區間 vs AI megatrend 擴大化 vs 得主技術棧交叉拆解」差異顯著；T+1（11/11）× T+2 Anthropic pricing day 前夕（11/12）× T+6 WSJ pricing week（11/16）× T+9 首日交易（11/19–11/20）四段連載視窗為全年少見
- **目標客群（台灣／亞洲）**：關注 AI 資本動向的台灣 solo dev + indie（估 2,000–5,000 位）+ 關注 TSMC / 台股 AI 類股的投資散戶（估 10,000–30,000 位）+ 關注 Anthropic Claude 訂閱定價預期的企業用戶（估 500–1,500 家）+ 想參照 TiBOOST 得主技術棧的新手 indie（估 1,500–3,000 位）
- **技術複雜度**：2/5 — 內容型；關鍵為「Anthropic $70–78 × 825M 股 + greenshoe 隱含募資 $57.8–64.35B 拆解 + TSMC +59.7% YoY 超 Q4 guidance 上限對 AI megatrend 擴大化影響 + TiBOOST 得主『亞洲準譯 / 振生半導體 / DOGU Robotics』列名順序名次推測 + 三題交叉聯動對台灣 solo dev 的意義」
- **預估 MRR**：one-off NT$150K–400K per 深度文 × 4 段連載 = NT$600K–1.6M；若做「每月 3 題同日聯動快拆」訂閱系列 → NT$500/mo × 400 用戶 ≈ NT$200K MRR；可 upsell 「Anthropic IPO 定價試算 + TSMC YoY 情境模型 + TiBOOST 得主技術棧 cluster」Gumroad NT$2,000 × 50 份 ≈ NT$100K one-off
- **競品弱點**：中文技術媒體從未做過「同日 3 題 T+1 聯動命中分析 + 隱含募資 + YoY 情境 + 得主列名順序推測」組合；財經媒體從「晶片 / 新創 / IPO」各自切入、不做跨議題聯動；大型技術媒體傾向財經角度、不會做「單人 T+1 命中分析技術工作流」拆解
- **切入建議**：11/11 當日「Anthropic $70–78 × 825M 股 + TSMC +59.7% YoY + TiBOOST 前三名三題聯動 T+1 命中分析 + 定價區間 vs AI megatrend 擴大化 vs 得主技術棧交叉拆解」 → 11/12 Anthropic pricing day 前夕 + OpenAI × Cursor 切斷當日「雙題聯動快拆」 → 11/13 pricing day 當日 Live blog → 11/16 首日交易 / WSJ pricing week → 11/19–11/20 首日交易情境命中分析尾聲

### 點子 2：亞洲準譯 TiBOOST 得主 AI 翻譯 solo 可複製難度評分 + 垂直 LLM SaaS idea cluster 🆕

- **痛點來源**：亞洲準譯為 TiBOOST 2026 前三名列名之首、AI 翻譯（跨語種專業領域）為少數「純軟體、1 人可做 MVP、垂直 LLM 專業領域為當紅主題」的得主；行動貝果 / 醫守科技 / 台灣若美落榜 → 評審 TSMC / 中華電信 / 光寶對「AI 翻譯垂直 LLM」優先 → solo dev 「專業領域跨語種 LLM」題材被官方背書；中文技術媒體對「AI 翻譯 solo 可複製難度評分」口徑整合近零
- **目標客群（台灣／亞洲）**：想做專業領域垂直 LLM SaaS 的台灣 solo dev（估 500–1,500 位）+ 關注 AI 翻譯 / 跨語種 LLM 的中小企業（估 300–800 家）+ 關注 TiBOOST 得主可複製難度的新手 indie（估 1,000–2,500 位）+ 考慮「醫療 / 法律 / 金融 / 技術文件」垂直 LLM 的 B2B 顧問（估 200–500 位）
- **技術複雜度**：3/5 — 內容型 + 1–2 小時 AI 翻譯 MVP 原型；關鍵為「亞洲準譯官方資料拆解 + AI 翻譯 solo 可複製難度評分表 + 專業領域跨語種 LLM SaaS idea cluster + Opus 5.5 / GPT-5.6 Sol / DeepSeek R2 跨語種 benchmark」
- **預估 MRR**：one-off NT$80K–240K per 深度文；訂閱「每週垂直 LLM SaaS idea cluster」NT$300/mo × 400 用戶 ≈ NT$120K MRR；可 upsell 「AI 翻譯 MVP scaffold + 專業領域跨語種 LLM benchmark」Gumroad NT$1,500 × 80 份 ≈ NT$120K one-off
- **競品弱點**：台灣技術媒體對「TiBOOST 得主可複製難度評分」完全空白；大型技術媒體不會做「單人垂直 LLM SaaS idea cluster」拆解；小型技術 blog 不會追 TiBOOST 得主與 solo dev 可複製難度；「亞洲準譯 vs OpenAI 專業領域翻譯 vs DeepL Pro」中文完全空白
- **切入建議**：11/11 寫「亞洲準譯 TiBOOST 得主 AI 翻譯 solo 可複製難度評分 + 專業領域跨語種 LLM SaaS idea cluster + Opus 5.5 / GPT-5.6 Sol / DeepSeek R2 跨語種 benchmark」 → 11/18 「AI 翻譯 MVP scaffold 實測踩坑」 → 11/25 「專業領域跨語種 LLM SaaS 定價實驗」 → 12/02 「亞洲準譯官方技術棧補充披露深度拆解」

### 點子 3：Anthropic IPO 定價 $70–78 對台灣 Claude 用戶定價預期影響鏈 + pricing day 11/13 / 首日交易 11/19–11/20 情境命中模型 🆕

- **痛點來源**：Anthropic $70–78 × 825M 股 + greenshoe 隱含募資 $57.8–64.35B + Nasdaq ANT + 首日交易目標 11/16 / 11/19–11/20；對台灣 Claude 大客戶定價預期影響近零中文資源；pricing day 11/13 + 首日交易 11/16 / 11/19–11/20 情境命中模型中文完全空白；「Anthropic IPO 定價 vs OpenAI / Google Gemini 類比估值 + 對 Claude Pro / Teams / Enterprise 定價壓力影響」中文完全空白
- **目標客群（台灣／亞洲）**：台灣重度使用 Claude 的 solo dev + indie（估 3,000–6,000 位）+ 關注 Claude 訂閱定價的中小企業 IT（估 500–1,500 家）+ 關注 Anthropic IPO 投資標的的台灣投資散戶（估 5,000–15,000 位）+ 關注 Claude vs OpenAI vs Gemini 比較的技術決策者（估 1,000–3,000 位）
- **技術複雜度**：2/5 — 內容型 + 1 小時 pricing day / 首日交易情境模型；關鍵為「Anthropic $70–78 × 825M 股 + greenshoe 隱含募資 $57.8–64.35B 拆解 + Bloomberg $1.2–1.3T 口徑中段對應 + pricing day 11/13 / 首日交易 11/16 / 11/19–11/20 情境分支 + 對台灣 Claude 用戶定價預期影響鏈」
- **預估 MRR**：one-off NT$100K–280K per 深度文；訂閱「每週 LLM 訂閱定價趨勢快拆」NT$400/mo × 300 用戶 ≈ NT$120K MRR；可 upsell 「Anthropic IPO 定價情境模型 + Claude 訂閱定價預期試算」Gumroad NT$1,800 × 60 份 ≈ NT$108K one-off
- **競品弱點**：中文技術媒體從未做過「Anthropic IPO 定價 vs Claude 訂閱定價預期影響鏈 + 首日交易情境模型」組合；財經媒體從「IPO 定價」切入、不做對終端用戶定價預期的下游影響鏈；大型技術媒體傾向重度編碼視角、不會做「單人訂閱定價趨勢試算」拆解
- **切入建議**：11/11 寫「Anthropic $70–78 × 825M 股 + greenshoe 隱含募資 $57.8–64.35B + pricing day 11/13 情境分支模型 + 首日交易 11/16 / 11/19–11/20 情境分支 + 對台灣 Claude 用戶定價預期影響鏈」 → 11/13 pricing day Live blog → 11/16 Veterans Day 後首個交易日觀察 → 11/19–11/20 首日交易情境命中分析

### 點子 4：OpenAI 11/12 砍 Cursor T-1 最後 24 小時 Composer 2.5 vs Opus 5.5 benchmark 實測 + Bito 混搭 75% / 省 57% 深度文 🔄

- **痛點來源**：OpenAI 11/12 砍 Cursor T-1 最後 24 小時 + 48h 無新 OpenAI / Cursor 正式公告 + Cursor forum 無新遷移貼 + Reddit r/cursor 無具體遷移文；CursorBench 4.0 口徑：Opus 5.5 Max 57.8% / Composer 2.5 27.7%（差 30 分、非 4 分）、成本 $0.68 vs $13.43（差 20 倍）；Bito 混搭「常規 Composer + 難題 Opus」= 75% / 比純 Opus 省 57%（純 Opus 90%）；中文技術媒體對「T-1 最後 24 小時 benchmark 實測踩坑」完全空白
- **目標客群（台灣／亞洲）**：仍以 Cursor 為主的台灣 solo dev（估 2,000–5,000 位）+ 考慮切 Claude Opus 5.5 的中型團隊（估 200–600 家）+ 關注 AI coding 選型的技術 blogger / YouTuber（估 300–800 位）+ 成本敏感 batch task 用戶（估 500–1,500 位）
- **技術複雜度**：3/5 — 內容型 + 2–3 小時 benchmark；關鍵為「T-1 最後 24 小時 benchmark 實測 + CursorBench 4.0 口徑拆解 + Bito 混搭 75% / 省 57% 原理 + 個人 1 小時 benchmark 腳本 + 常規 Composer + 難題 Opus 切換 heuristic」
- **預估 MRR**：one-off NT$80K–240K per 深度文；訂閱「每週 AI coding 選型週報」NT$300/mo × 400 用戶 ≈ NT$120K MRR；可 upsell 「Composer 2.5 vs Opus 5.5 個人 benchmark + Bito 混搭 heuristic」Gumroad NT$1,500 × 80 份 ≈ NT$120K one-off
- **競品弱點**：台灣技術媒體口徑整合 + Bito 混搭中文資源完全空白；大型技術媒體不會做「T-1 最後 24 小時單人工作流實際 benchmark 實測」拆解；小型技術 blog 不會追 CursorBench 4.0 vs Cursor 自家舊 benchmark 口徑差異
- **切入建議**：11/11 寫「OpenAI 11/12 砍 Cursor T-1 最後 24 小時 Composer 2.5 vs Opus 5.5 CursorBench 4.0 口徑修正 + Bito 混搭 75% / 省 57% 實測 + 個人 1 小時 benchmark 腳本 + 常規 Composer + 難題 Opus 切換 heuristic」 → 11/12 OpenAI 砍 Cursor 當日 Live blog → 11/19 第一週使用者反應深度文 → 11/26 Thanksgiving 前使用者回饋收尾

## 🧰 工具堆疊更新

- **🆕 Anthropic 公開 IPO 定價 $70–78 × 825M 股 + Nasdaq ANT + 隱含募資 $57.8–64.35B**：EDGAR CIK 2130357 11/10 補發 S-1/A2；Anthropic 801.35M + 既有股東 23.65M + 承銷商 123.75M 股 greenshoe；pricing 最早 11/13、交易最早 11/16；對台灣 Claude 用戶：$70–78 落在 Bloomberg $1.2–1.3T 下修口徑中段 → 上市後 Claude 訂閱定價壓力溫和機率續升
- **🆕 TSMC 10 月月營收 NT$5,868.9 億破紀錄 / YoY +59.7% / MoM +14.7% / 超 Q4 guidance 上限 NT$5,756 億達 +1.96%**：9 月 YoY +54.6% → 10 月 +59.7% 加速、未現收斂；1–10 月累計 YoY +43.3%；AI 晶片需求 + iPhone 拉貨 + 2 奈米量產推升；對一人 SaaS inference 成本：Claude / OpenAI / Groq inference 單位成本續壓低速率續行、不會因 AI 需求放緩而減緩
- **🆕 TiBOOST 2026 決賽前三名列名「亞洲準譯 / 振生半導體 / DOGU Robotics」**：卓榮泰院長親頒、名次對應未官方明示；500 萬獎金池前三 NT$250 / 150 / 100 萬；行動貝果 / 醫守科技 / 台灣若美落榜；對台灣 solo dev：AI 翻譯（亞洲準譯）為最可參照、振生半導體 / DOGU Robotics 為硬體密集直接 copy 難度高
- **🔄 Composer 2.5 vs Opus 5.5 CursorBench 4.0 口徑續行**：Opus 5.5 Max 57.8% / Composer 2.5 27.7%（差 30 分）、排名 50/57；Opus 5.5 High 56.0% / $3.97；成本 $0.68 vs $13.43（差 20 倍）；Bito 混搭「常規 Composer + 難題 Opus」= 75% / 比純 Opus 省 57%（純 Opus 90%）；BenchLM 2026-11-07 Composer 2.5 第 13
- **🔄 OpenAI × Cursor 模型供應中止 T-1**：OpenAI 官方 help page 已公告 11/12 結束對 Cursor 的模型供應；48h 無新公告；Cursor 模型文件仍把 GPT-5.6 Sol promotional pricing 排到 11/21 → 切斷後 9 天矛盾視窗續行；對一人 SaaS 影響：Claude Opus 5.5 / Cursor Composer 2.5 / Codex CLI 替代路徑成形
- **🔄 OpenAI Agent Builder EOL T-19 migration guide 明示「不保證完整遷移」**：OpenAI 官方 migration guide 僅為 export 流程：Agent Builder 內 Code → Agents SDK → TS/Python → 複製貼上；視為 scaffold、後續仍需測試；Agents SDK vs Workspace Agents 雙路分化續行；ChatKit 不下線續行；Evals 11/30 全下線倒數 Day +11
- **🔄 MCP 2026-07-28 spec 生效第 106 日 + 11 月無 Registry 數字刷新**：stateless core / MCP Apps / Tasks / 強化 OAuth / 棄 Roots / Sampling / Logging / 棄初始 handshake 改 per-request versioning；MCP Registry 9 月口徑 30,375 unique / 99,114 records / 36% stale 為最新權威（11 月無刷新）；ToolBench 43,400+ servers / 219,069 tools 為 Arcade 自家口徑（持保留）
- **🔄 Claude Code 2.1 Skills + Subagent nesting 5 levels + disallowed-tools frontmatter 續行**：2.1.197（6/30）Sonnet 5 預設 + 1M context；2.1.172 subagent nesting 5 levels；2.1.198 subagent creation flow 改；Skills preload 進 subagent context；對 fork subagents 預設 on + nested 為自然搭配

## ⚡ 今日行動建議

- [ ] **Anthropic $70–78 + TSMC +59.7% + TiBOOST 前三名三題聯動 T+1 命中分析深度文**：Anthropic 隱含募資 $57.8–64.35B 拆解 + TSMC +59.7% 超 Q4 guidance 上限對 AI megatrend 擴大化影響 + TiBOOST 得主列名順序名次推測 + 三題交叉聯動對台灣 solo dev 意義（成本：3–4 小時；產出：長文 blog + Twitter thread + Dcard soft_job / PTT Soft_Job 分銷 + 11/12–11/13 pricing day 續行大綱）
- [ ] **亞洲準譯 AI 翻譯 solo 可複製難度評分 + 垂直 LLM SaaS idea cluster**：官方資料拆解 + 可複製難度評分表 + 專業領域跨語種 LLM SaaS idea cluster + Opus 5.5 / GPT-5.6 Sol / DeepSeek R2 跨語種 benchmark（成本：3 小時；產出：長文 blog + idea cluster 表 + 11/18 MVP scaffold 大綱）
- [ ] **Anthropic IPO 定價 $70–78 對台灣 Claude 用戶定價預期影響鏈 blog**：隱含市值 vs Bloomberg $1.2–1.3T 口徑中段 + pricing day 11/13 / 首日交易 11/16 / 11/19–11/20 情境分支模型 + Claude Pro / Teams / Enterprise 定價壓力試算（成本：2 小時；產出：長文 blog + 情境分支模型表）
- [ ] **OpenAI 11/12 砍 Cursor T-1 最後 24 小時 Composer 2.5 vs Opus 5.5 benchmark 實測 + Bito 混搭 75% / 省 57%**：CursorBench 4.0 口徑拆解 + 個人 1 小時 benchmark 腳本 + 常規 Composer + 難題 Opus 切換 heuristic（成本：3 小時；產出：長文 blog + benchmark 腳本 + 11/12 Live blog 大綱）
- [ ] **TSMC +59.7% YoY 情境命中「更強版本」對一人 SaaS inference 成本預期影響鏈**：連續 3 個月 MoM 結構拆解 + Q4 guidance 單月均偏差率 + 11 月 / 12 月 YoY 對照預測模型（成本：2 小時；產出：深度文 + 預測模型表 + 11/12 續行大綱）

## ⏳ 待觀察

- **Anthropic pricing day 11/13（週五）earliest + Veterans Day 11/11 SEC 休市後首個交易日**：A2 已填入 $70–78 定價區間 → 11/13 earliest pricing + 11/16 earliest trading（週一）；首日交易情境分支 A（11/16 開盤）vs B（11/19–11/20）vs C（Thanksgiving 前最後窗口）
- **Anthropic 隱含市值 / 完整 share class total**：$70–78 × 825M 股 + greenshoe = 隱含募資 $57.8–64.35B；完整隱含市值需算 share class total（Class A + B + C）；Bloomberg $1.2–1.3T vs Reuters $1.5T vs $70–78 對應區間
- **OpenAI × Cursor 切斷實況 11/12 T-0**：Cursor 是否在 T-0 內公告退場補救方案；11/12 → 11/21 促銷價矛盾 9 天視窗如何結束（提前下架 / 延續 / 其他）；OpenAI / Cursor 無新公告續行
- **TiBOOST 得主名次對應官方確認**：行政院新聞稿列名順序推測對應 1/2/3 名、但官方未明示；需 ey.gov.tw 原文或證交所公告確認；得主技術棧 / 評審口徑細節 24h 內是否披露
- **TSMC 11 月 / 12 月月營收 YoY 續強 / 收斂**：10 月 +59.7% 加速、未現轉弱；11 月 / 12 月 YoY 若持續 +50% 以上區間 → AI megatrend 擴大化定案；若收斂至 +30–40% → 轉弱首個訊號
- **OpenAI Agent Builder EOL T-18（11/12 週四）**：是否補發 workflow graph export 工具（migration guide 現未承諾）；Thanksgiving 前美國窗口剩 14 天
- **iPhone Duo Day 21 Week 2 Day 14（11/12 週四）**：工作日回歸第四日；可做「工作日 4 日曲線 vs 週末 48h」差額拆解
- **Smithery T+12 Day +12（11/12 週四）**：第二週第四日；ToolBench grading × directory 擁有者條目中立性第二週第四日切片
- **立法院中小微企業轉型條例 T+44（11/12 週四）**：9/29 開議第 44 日；本週（11/10–11/14）為委員會排審窗口首個觀察週第四日；立院公開議程 2026-07/08 後無更新續行
- **數發部 100 億 AI T+39（11/12 週四）**：8 月底 10 家 / NT$2.55 億後 Q4 pipeline 是否公布；SBIR 2026-01 起上限調高為替代路徑
- **亞洲準譯官方技術棧 / 商業模式披露**：TiBOOST 得主前三名技術棧 24–48h 內是否披露；對 solo dev AI 翻譯垂直 LLM SaaS idea cluster 的直接參照度
- **Vercel AI SDK 7 HarnessAgent GA**：自 6/25 experimental 已滿 T+139；若 11 月 GA 將改變「TS Agent 底層 2 強」對決格局；官方文件仍標記 experimental canary

[^greenshoe]: 承銷商超額配售選擇權（Over-allotment option），IPO 常見機制：承銷商可在掛牌後 30 日內，以發行價向發行方額外購入至多 15% 股份，用來吸收超額認購、穩定二級市場股價。詞源出自 1919 年 Green Shoe Manufacturing 首度採用。

[^asia-translation]: 亞洲準譯為台灣 AI 新創，聚焦法律、醫療、金融、技術文件等專業領域的跨語種翻譯，主打相較通用 LLM 更高的術語一致性與領域準確度。於 TiBOOST 2026 決賽前三名列名之首，官方頒獎時技術棧與商業模式細節尚未公開披露。

[^zhensheng]: 振生半導體為台灣新創，核心方向為先進封裝與製程技術研發，屬資本與硬體密集路線。於 TiBOOST 2026 決賽前三名列名第二。評審包含 TSMC、中華電信、光寶等代表性企業，顯示其技術路線受上游供應鏈關注。

[^dogu-robotics]: DOGU Robotics 為韓國機器人新創，為 TiBOOST 2026 少數獲獎的海外隊伍、列名前三之末。核心在機器人硬體平台與感測整合。對台灣 solo dev 而言主要作為「海外團隊入選本土國家級競賽」的參照指標，而非可直接複製的題材。

[^mobagel]: 行動貝果 MoBagel 為台灣老牌 AI 新創，主力為 AutoML 與無程式碼預測分析平台，服務企業資料科學團隊加速模型開發。此次參與 TiBOOST 2026 未入前三，常被視為台灣 ML 平台代表性公司之一。

[^juvo-tech]: 台灣若美（Juvo Tech）為台灣新創，產品聚焦健康與生活資料結合 AI 的垂直應用。此次參與 TiBOOST 2026 未入前三。與獲獎的亞洲準譯同屬純軟體、低硬體門檻路線，為 solo dev 可參照的題材類型。

[^promptfoo]: 開源 LLM 評測框架（MIT 授權），以 YAML 設定批次執行 prompts、支援多模型 A/B 對照、assertion 與紅隊測試。常作為 OpenAI Evals 的在地替代方案，可整合至 CI 管線執行回歸測試。

[^langfuse]: 開源 LLM observability 平台（社群版免費、Pro / Enterprise 另計付費），可記錄 prompts、responses、成本與延遲，支援 trace、評分與資料集管理。常與 Promptfoo 混搭作為 OpenAI Evals 的替代組合。

## 📚 引用來源

1. [Anthropic — Roadshow Launch](https://www.anthropic.com/news/roadshow-launch) — 2026-11-10
2. [SEC EDGAR — Anthropic S-1/A Amendment 2026-11-10](https://www.sec.gov/Archives/edgar/data/0002130357/000162828026072484/anthropicpbc-sx1ax2.htm) — 2026-11-10
3. [Tribune India — Anthropic Targets Up to $64.35B in US IPO](https://tribune.com.pk/story/2554107/anthropic-targets-up-to-6435-billion-in-us-ipo) — 2026-11-10
4. [SEC Form 6-K — TSMC Revenue 2026-11-10（10 月）](https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000796/tsm-revenue20261110.htm) — 2026-11-10
5. [money.udn — 台積電 10 月營收 5,868 億 創新高](https://money.udn.com/money/story/5710/9869070) — 2026-11-10
6. [ctee — 台積電 10 月營收](https://www.ctee.com.tw/news/20261110701219-430501) — 2026-11-10
7. [chinatimes — 台積電 10 月營收 2 奈米加速](https://www.chinatimes.com/realtimenews/20261110002838-260410) — 2026-11-10
8. [自由財經 — 台積電 10 月營收](https://stock.ltn.com.tw/article/xcduhdpnatw7) — 2026-11-10
9. [行政院新聞稿 — TiBOOST 創業大聯盟競賽前三名頒獎](https://www.ey.gov.tw/Page/9277F759E41CCD91/008fe836-d6f6-4636-8805-2d8066f35e97) — 2026-11-10
10. [money.udn — TiBOOST 創業大聯盟競賽](https://money.udn.com/money/story/5612/9868977) — 2026-11-10
11. [ctee — TiBOOST 決賽](https://www.ctee.com.tw/news/20261110701126-430201) — 2026-11-10
12. [yam — TiBOOST 11月10日](https://n.yam.com/Article/20261110899991) — 2026-11-10
13. [Tom's Guide — OpenAI is Leaving Cursor in November](https://www.tomsguide.com/ai/openai-is-leaving-cursor-in-november-here-are-your-3-options) — 2026
14. [Hyrax — OpenAI Cuts Cursor November 12](https://hyrax.dev/blog/openai-cuts-cursor-november-12-derisking-ai-coding-stack) — 2026
15. [OpenAI Blog — Our decision on Cursor following its acquisition by SpaceX](https://openai.com/blog/our-decision-on-cursor-following-its-acquisition-by-spacex) — 2026-08-28
16. [OpenAI Help — Winding down OpenAI model access in Cursor](https://help.openai.com/en/articles/20001506) — 2026-11-11 存取
17. [developers.openai.com — Agent Builder Migration Guide](https://developers.openai.com/api/docs/guides/agent-builder/migrate-from-agent-builder) — 2026
18. [Agentic Wire — OpenAI Agent Builder Migration SDK Workspace](https://www.agenticwire.news/article/openai-agent-builder-migration-sdk-workspace) — 2026-10-27
19. [neuraltrust.ai — CursorBench 4.0 Opus 5.5 Max 57.8% vs Composer 2.5 27.7%](https://neuraltrust.ai/blog/claude-code-vs-cursor-benchmark) — 2026
20. [bito.ai — Cursor Composer + Opus 混搭 75% / 省 57%](https://bito.ai/blog/cursor-composer-opus-model-switching-cost/) — 2026
21. [benchlm.ai — 2026-11-07 CursorBench leaderboard](https://benchlm.ai/benchmarks/cursorbench) — 2026-11-07
22. [ifeng — 商家囤 50 台 iPhone Duo 虧本](https://tech.ifeng.com/c/8xLKmXFldKG) — 2026
23. [Gizmochina — iPhone Duo scalpers resale price drop](https://unwire.hk/2026/10/20/iphone-duo-scalpers-resale-price-drop/mobile-phone/) — 2026-11-05
24. [SCMP — Apple iPhone Duo price premiums evaporate](https://www.scmp.com/tech/article/3372169/apple-iphone-duo-price-premiums-evaporate-chinas-scalper-market) — 2026-11
25. [Arcade.dev — Smithery joins Arcade](https://arcade.dev/blog/smithery-joins-arcade) — 2026-08
26. [Dev.to — The MCP Registry By The Numbers](https://dev.to/amareswer/the-mcp-registry-by-the-numbers-38nc) — 2026-09
27. [modelcontextprotocol.info — MCP Registry FAQ](https://modelcontextprotocol.info/tools/registry/faq/) — 2026
28. [CNA — 政院修法投入千億助中小微企業升級](https://cna.com.tw/news/aipl/202610080165.aspx) — 2026-10-08
29. [uanalyze — 171.6 萬家受惠 中小微升級](https://uanalyze.com.tw/articles/5191156753) — 2026
30. [立法院議事紀錄](https://www.ly.gov.tw/pages/MeetingList.aspx?nodeid=135) — 2026-11-11 存取
31. [中央社 — 數發部百億 AI 投資方案 開放境外公司可納投](https://cna.com.tw/news/afe/202610040029.aspx) — 2026-10-04
32. [BGov — Anthropic Said to Target Mega-IPO Before Thanksgiving](https://news.bgov.com/banking-law/anthropic-said-to-target-mega-ipo-before-thanksgiving-holiday) — 2026
33. [Sacra — Anthropic S-1 Amendment Not Finalizing IPO](https://sacra.com/chat/h/a2d43b74-19f7-450e-a230-cb99d77e4a15/) — 2026
