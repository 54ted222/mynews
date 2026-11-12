---
title: 每日創業情報 — 2026-11-13
date: 2026-11-13
tags: 創業情報, AI 產業, SaaS, 台灣
summary: Anthropic IPO book T+3 已 oversubscribed（CNBC「Day 1 book covered」+ Bloomberg「multiple times oversubscribed」+ FT 口徑承銷商考慮調升定價區間）+ pricing 收斂 11/18 earliest / 交易 11/19（11/12 brief 預期 11/13 pricing 已失效）+ $26B private placement 結構具體披露（Nvidia / Google 各 $10B、AMD $2.5B、Broadcom / Micron / 微軟 各 $1B、TSMC $500M、Class N 無投票權）+ OpenAI × Cursor cutoff T+1 當日無正式退場公告 + BYOK Chat/Agent 續行 + 金管會 FinLLM 2026 年底上線（中信金主導）為台灣在地新 AI 治理訊號 + OpenAI Agent Builder EOL T-17 Thanksgiving 前剩 13 天 + iPhone Duo Day 22 工作日第五日。
keywords: Anthropic IPO book oversubscribed Day 1 covered CNBC Bloomberg FT raise price range November 13 2026, Anthropic IPO pricing November 18 trading November 19 Nasdaq ANT 825M shares, Anthropic $26B private placement Class N non-voting Nvidia 10B Google 10B AMD 2.5B Broadcom Micron Microsoft 1B TSMC 500M, OpenAI Cursor cutoff November 12 2026 T+1 BYOK Chat Agent 5 percent traffic CEO, 金管會 FinLLM 2026 年底上線 中信金 銀行業 知識應用 金融業 AI 六大原則 代理式 AI 33 家, OpenAI Agent Builder EOL T-17 Thanksgiving 13 days ChatKit workflow uncertainty Agents SDK Workspace, Vercel AI SDK 7.0.143 HarnessAgent 10 harness adapters tool search toolCallConcurrency streamRetries, Claude Code 2.1.217 subagent concurrency nesting caps CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS, iPhone Duo Day 22 Week 3 Day 15 工作日第五日 11月雙11 新機降 NT$2000 傑昇回收價續行, 立法院中小微企業轉型條例 T+45 排審窗口第五日 11月通過機率續低 171.6 萬家受惠, 數發部 100 億 AI T+40 11月無 pipeline 刷新 SBIR 2026-01 上限調高替代路徑, 虛擬資產服務法 子法 2027 Q1 穩定幣 九項子法 金管會
---

# 每日創業情報 — 2026-11-13

## 🎯 今日 TL;DR

- **🆕 Anthropic IPO book T+3 oversubscribed + pricing 收斂 11/18 earliest / 交易 11/19 + 11/12 brief 預期 11/13 pricing 為錯誤收斂（實際最早 pricing 延後 5 日） + FT 口徑承銷商考慮上調定價區間 + CNBC「Day 1 book covered」+ Bloomberg「multiple times oversubscribed」+ 機構需求強過同期 SpaceX**：CNBC / FT / Bloomberg 口徑收斂一致；Stocktwits 另有「Anthropic retracts reported $70–$80 range, pricing update coming」口徑（單源、未經其他媒體佐證、持保留）；對台灣 Claude 大客戶：book T+3 oversubscribed + 承銷商考慮上調 → 上市後 Claude Pro / Teams / Enterprise 定價壓力由 11/12「溫和機率續升」改為「中性—短期可能上升」；pricing day 收斂 11/18 → Anthropic 情境 Live blog 窗口由 11/13 延 5 日
- **🆕 Anthropic $26B private placement Class N[^classn] 結構具體披露 + 無投票權 + 轉讓給未關係第三方才轉 Class A + TSMC 列名 $500M（最小一檔）+ 不計承銷折價**：Nvidia $10B / Google $10B / AMD $2.5B / Broadcom $1B / Micron $1B / 微軟 $1B / TSMC $500M = $26.5B（與 $26B 報導小有差異待釐清）；Class N 無經濟權益 / 無投票權、轉讓給未關係第三方才轉 Class A；對台灣投資散戶：TSMC 列名 $500M 為 7 家之末、與 Nvidia / Google 的 $10B 相差 20 倍 → 台積電在 Anthropic $26B 中實際占比有限、「台灣 AI 產業鏈縱向整合」敘事不宜過度放大；對台灣 Claude 大客戶：Class N 無投票權 → 7 家持有人（含 TSMC）對 Anthropic 治理無直接影響力、純為股權投資
- **🆕 OpenAI × Cursor cutoff T+1（11/13 週五）— 11/12 proposed cutoff 當日無 OpenAI / Cursor 正式退場公告 + BYOK Chat / Agent 續行確認 + Cursor CEO「OpenAI 僅占 5% 流量」口徑未變 + migration 路徑收斂為 Composer 2.5[^composer] / Claude Opus 5.5 / BYOK / Codex CLI 四分**：Cursor CEO「OpenAI 僅 5% 流量」為 Cursor 自家口徑、對整體衝擊有限；BYOK Chat / Agent 續行、Tab / Auto / Cloud Agents 不適用；對仍重度依賴 GPT-5.6 Sol 的 solo dev：T+1 當日為「切 BYOK 後第一天使用體驗」窗口；中文技術媒體口徑整合仍空白、7 天深度追蹤為新鮮度極高
- **🆕 金管會 FinLLM 中信金主導 / 2026 年底上線 / 首階段銀行業知識應用 + 金融業 AI 六大核心原則續行 + 代理式 AI 33 家業者已用 / 技術 / 資安 / 法遵三大挑戰 + 虛擬資產服務法九項子法最快 2027Q1**：金管會 2026 金融科技「區塊鏈金融 + AI」雙主軸；FinLLM 首階段聚焦銀行業知識應用、對 solo dev 的 B2B 金融業售案參照意義明顯 → 「專業領域 LLM + 本地監管合規」為台灣少數 solo dev 可參照落地路徑；虛擬資產服務法完成立法、九項子法含穩定幣規範、最快 2027Q1 公布 → 對台灣 AI × crypto SaaS 創業規劃仍為年度最大法遵訊號
- **🔄 OpenAI Agent Builder EOL T-17（11/13 → 11/30）— Thanksgiving 11/26 前美國窗口剩 13 天 + 48h 無新 migration tooling + ChatKit workflow 是否續存為尚未解答的核心疑慮 + Agents SDK export 續為 scaffold + Evals read-only Day +13 連續倒數**：OpenAI 官方 migration guide 僅為 export 流程：Agent Builder 內 Code → Agents SDK → TS/Python → 複製貼上；「workflow 透過 ChatKit 嵌入是否 11/30 後續跑」為 ChatKit sessions depend on workflow ID 的核心疑慮、OpenAI 官方未明確回應；對 solo dev：Thanksgiving 前 13 天為美國市場最後有效遷移窗口、ChatKit 嵌入用戶的最後決斷窗口
- **🔄 Vercel AI SDK 7.0.143（10 月口徑）+ HarnessAgent[^harness] experimental canary + 10 harness adapters + tool search + toolCallConcurrency + streamRetries + WebSocket chat + 自 6/25 GA 後無 7.1.x minor release（T+141）**：AI SDK 7 本體 2026-06-25 GA、HarnessAgent 續為 canary；10 個 harness adapters 支援 Claude Code / Codex / Pi / Deep Agents / OpenCode 等互換；10/x 到 11/13 無新 minor 版本（breaking change 預期續行）；對「TS Agent 底層 2 強」對決格局（AI SDK 7 vs Claude Agent SDK）續有壓力；對 solo dev：若已穩定走 Claude Agent SDK、無急迫切換理由
- **🔄 Claude Code 2.1.217 subagent concurrency / nesting caps + 2.1.212 session limits + 2.1.211 MCP tools re-sync + 2.1.157 plugins auto-load from .claude/skills**：CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS + CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH 新增；CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION + CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION 可選限制；對 fork subagents 預設 on + nested depth 限制為新治理面向
- **🔄 iPhone Duo Day 22 Week 3 Day 15（11/13 週五）— 工作日第五日完成第一個完整工作週後 + 台灣雙 11 新機通路降 NT$2,000 續行 + 48h 無 11 月新中港台二手具體價 + 傑昇回收報價「2026 年 11 月最新」標題（1TB NT$72,700 / 2TB NT$89,260）為最新權威中文口徑 + 中國炒家虧損普遍續行**：台灣 11 月第 2 週尚無二手行情中文媒體具體報導 → 新鮮度極高續行；Day 22 為工作日第五日、可做「工作週 5 日完整樣本 vs 週末 48h」首次完整差額曲線拆解
- **🔄 立法院中小微企業 1,000 億轉型條例 T+45（11/13 週五）+ 本週（11/10–11/14）排審窗口首個觀察週第五日 + 立院公開議程 2026-07/08 後無更新 + 11 月通過機率極低 + 本週結束後觀察週可能流失到 12 月**：10/8 行政院通過草案、原規劃 9 月送立院、實際送審時點晚於原定；立院經濟委員會公開議程最新仍為 2026-07/08 能源管理法；T+45 仍無進展訊號；R&D 抵減率 20% / 轉型設備投資抵減門檻 25 萬 / 171.6 萬家受惠為既定 soundbite；本週排審窗口第五日無媒體新進度 → 11 月通過機率續低
- **🔄 數發部 100 億 AI T+40（11/13 週五）— 8 月底累計口徑 10 家 / NT$2.55 億 / 民間帶動 NT$5.7 億 + 境外公司放寬 3 條件續行 + 36 家搭配投資人續行 + 11 月無 pipeline 刷新 + SBIR 2026-01 起上限調高為替代路徑**：11 月無新 pipeline 公告、第三方口徑最新仍為 CNA 10/04；SBIR 自 2026-01-01 起調高上限（先期研究 150 萬、研究開發 1,200 萬、加值應用 600 萬）+ 無人載具 / AI 智慧應用 / 淨零 三大核心、對 solo dev 為替代路徑續行

## 🔄 昨日追蹤

- **🆕 Anthropic pricing day 11/13（週五）earliest → 失效 / 收斂 11/18 earliest**：11/12 brief 情境分支「pricing 11/13 earliest + 首日交易目標 11/19（CNBC 口徑）」實際由 CNBC / FT / Bloomberg 多方收斂為 pricing 11/18 earliest + 交易 11/19（相隔僅 1 日）→ Anthropic pricing Live blog 窗口由 11/13 延 5 日至 11/18
- **🆕 Anthropic book T+3 oversubscribed 具體化**：CNBC「Day 1 book covered」+ Bloomberg「multiple times oversubscribed」+ FT「承銷商考慮上調定價區間」+ 機構需求強過同期 SpaceX；Stocktwits「$70–$80 retract + pricing update coming」單源持保留
- **🆕 Anthropic $26B private placement Class N 結構具體披露**：Nvidia / Google 各 $10B、AMD $2.5B、Broadcom / Micron / 微軟 各 $1B、TSMC $500M（$26.5B vs $26B 待釐清）；Class N 無投票權 / 無基本經濟權益 / 轉讓給未關係第三方才轉 Class A
- **🆕 Anthropic RSP 觸發等級 ASL-3 vs ASL-4 具體化未見**：11/12 brief 的「S-1/A2 關鍵 AI 安全警報已觸發」口徑 48h 無新具體等級披露、Anthropic RSP 自 2026-02-24 進入 v3.0 已走到 v3.4（2026-07-08）、官方 changelog 無 ASL-4 觸發公開資訊；中文技術媒體對「RSP 觸發對模型 release 節奏影響」續行空白
- **🔄 OpenAI × Cursor 11/12 T-0 → T+1**：11/12 proposed cutoff 當日無 OpenAI / Cursor 正式退場公告；BYOK Chat / Agent 續行確認；Cursor CEO「OpenAI 僅 5% 流量」口徑未變；Composer 2.5 nerfed 投訴 11/12 brief 口徑 48h 無 Cursor 官方回應續行
- **🔄 OpenAI Agent Builder EOL T-18 → T-17**：Thanksgiving 前剩 13 天；Evals read-only Day +13；ChatKit workflow 11/30 後是否續跑為核心疑慮
- **🔄 iPhone Duo Day 21 → Day 22**：Week 3 Day 14 → Day 15；工作日第四日 → 第五日；完成第一個完整工作週
- **🔄 立法院中小微企業 T+44 → T+45**：排審窗口第四日 → 第五日；本週末結束後觀察週可能流失到 12 月
- **🔄 數發部 100 億 AI T+39 → T+40**：11 月無 pipeline 刷新
- **🔄 TSMC 列名 Anthropic $26B 私募 → $500M 具體金額披露**：11/12 brief 口徑「具體金額占比待 S-1/A2 披露」48h 後確認為 $500M（7 家之末、僅 Nvidia/Google 1/20）→「台灣 AI 產業鏈縱向整合」敘事應收斂

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---- | ---- |
| **🆕 金管會 FinLLM[^finllm] 中信金主導 / 2026 年底上線 / 首階段銀行業知識應用 + 金融業 AI 六大核心原則續行 + 代理式 AI 33 家業者已用 / 技術 / 資安 / 法遵三大挑戰 + 2026 金融科技「區塊鏈金融 + AI」雙主軸**：金管會公布 2026 金融業 AI 調查首度納入「代理式 AI」已有 33 家業者使用；AI 六大核心原則 + 指引續行；FinLLM 首階段為銀行業知識應用、年底上線 | [iThome — 金融業運用 AI 六大核心原則](https://www.ithome.com.tw/news/175564)、[Money.udn — FinLLM 中信金主導](https://money.udn.com/money/story/5613/9817609)、[ctee — 金管會 2026 金融科技雙主軸](https://ctee.com.tw/news/20260819700750-430301) | 對台灣 B2B 金融業 solo dev：FinLLM 中信金主導 → 大型金控自有專用 LLM 為「本地監管 + 專業領域」雙門檻範本、solo dev 可作為「法遵知識 copilot」vertical 切入點；對 fintech SaaS 創業者：代理式 AI 33 家已用為新 TAM 訊號、但技術 / 資安 / 法遵三大挑戰續為門檻 | 機會：「金管會 FinLLM 2026 年底上線拆解 + 代理式 AI 33 家挑戰對 solo dev 的新 TAM 影響 + vertical LLM SaaS idea cluster（法遵 copilot / 風控 copilot / 客服 copilot）」深度文；T+30 FinLLM 上線倒數聯動；威脅：中信金主導 → 大型金控已自做、solo dev 僅能走「補位」路徑；代理式 AI 法遵風險可能擴散到 SaaS 供應鏈 |
| **🆕 TSMC 列名 Anthropic $26B 私募 $500M 具體金額披露 + 7 家之末 + 與 Nvidia / Google $10B 相差 20 倍 + Class N 無投票權 + 轉讓給未關係第三方才轉 Class A + 「台灣 AI 產業鏈縱向整合」敘事應收斂**：Nvidia $10B / Google $10B / AMD $2.5B / Broadcom $1B / Micron $1B / 微軟 $1B / TSMC $500M = $26.5B（與 $26B 報導小有差異待釐清） | [FourWeekMBA — Nvidia Google $10B Each Anthropic](https://fourweekmba.com/ai-nvidia-google-buy-10b-each-of-anthropics-26b-placement/)、[TheNeuron — Inside $26B Tech Bet](https://www.theneuron.ai/news/whos-investing-in-anthropics-ipo-inside-the-26-billion-tech-bet/)、[Cryptobriefing — Google Option Class N](https://cryptobriefing.com/anthropic-google-option-10b-class-n-stock/) | 對台灣投資散戶：TSMC $500M 為 7 家之末、與 Nvidia / Google $10B 相差 20 倍 →「台灣 AI 產業鏈縱向整合」敘事應收斂、不宜放大為「台積電入股 AI 模型公司」主敘事；對台灣 Claude 大客戶：Class N 無投票權 → 7 家持有人對 Anthropic 治理無直接影響力、純股權投資 | 機會：「TSMC $500M vs Nvidia / Google $10B 20 倍差額 + Class N 無投票權 + 對台灣 AI 產業鏈縱向整合敘事收斂」校正文、修正 11/12 brief 過度放大的敘事；威脅：若 pricing 11/18 上調至 $85+ / $90+ → $500M 最終股數與投票權差額可能再變、需 S-1/A3 披露 |
| **🔄 立法院中小微企業 1,000 億轉型條例 T+45 + 本週（11/10–11/14）排審窗口第五日結束 + 本週末後觀察週可能流失到 12 月 + 立院公開議程 2026-07/08 後無更新 + 11 月通過機率極低 + 171.6 萬家受惠為既定 soundbite**：R&D 抵減率 20% / 轉型設備投資抵減門檻 25 萬 soundbite 續行；T+45 仍無進展訊號；本週排審窗口第五日無媒體新進度 | [CNA — 政院修法投入千億助中小微企業升級](https://cna.com.tw/news/aipl/202610080165.aspx)、[iThome — 中小微企業轉型升級發展條例修正草案](https://www.ithome.com.tw/news/179523)、[立法院議事紀錄](https://www.ly.gov.tw/pages/MeetingList.aspx?nodeid=135) | 若法案通過，R&D 抵減率自約 15% 提高至 20%、轉型設備投資抵減門檻自產業創新條例 100 萬降至 25 萬；本週為立院排審第五日、無媒體新進度 → 11 月通過機率續低、觀察週可能流失到 12 月 | 機會：「11/13 立法院新會期第 6 週第五日 + 中小微條例觀察週流失到 12 月預測 + 25 萬門檻對 solo dev 轉型升級套利分析」深度文；威脅：送審至三讀期程 3–12 個月、11 月通過機率續低、本週末後排審窗口流失到 12 月機率超過 80% |
| **🔄 iPhone Duo Day 22 Week 3 Day 15 工作日第五日 + 完成第一個完整工作週 + 傑昇回收報價「2026 年 11 月最新」標題為最新權威中文口徑 + 台灣雙 11 新機通路降 NT$2,000 續行 + 台灣 11 月第 2 週尚無二手行情中文媒體具體報導 + 中國炒家虧損普遍續行**：傑昇 1TB NT$72,700 / 2TB NT$89,260；台灣起售價 NT$74,900；通路雙 11 新機降 NT$2,000；中國起售價 RMB 15,999、頂配 2TB RMB 26,499、發貨排至 2027/01；9 月二手溢價 RMB 5,000 上下 → 11 月 ifeng 商家囤 50 台虧本續行 | [傑昇 iPhone Duo 回收價表](https://www.jyes.com.tw/recycle/Apple-iPhone-Duo)、[technews.tw — iPhone Duo 台灣售價 74,900 元起](https://finance.technews.tw/2026/09/10/iphone-duo-affordable/)、[CNA — iPhone Duo 中國市場熱銷 發貨排至明年](https://www.cna.com.tw/news/acn/202610170102.aspx) | 對台灣 solo dev 創業敘事：iPhone Duo 二手行情中文媒體仍空白、新鮮度極高續行；可做「Day 22 工作週 5 日完整樣本 vs 週末 48h 首次完整差額曲線 + 台灣新機 vs 二手 vs 回收 三線對照」原創拆解 | 機會：「Day 22 工作週 5 日完整樣本 vs 週末 48h 首次完整差額曲線 + 台灣新機 vs 二手 vs 回收 三線對照 + 中國炒家虧損原因」深度文；威脅：台灣二手行情中文媒體具體報導仍空白、需實地查訪 Yahoo 拍賣 / 蝦皮 / 露天成交紀錄 |

## 🛠 新興 AI 工具

| 工具名 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **🆕 Anthropic IPO book T+3 oversubscribed + pricing 11/18 earliest / 交易 11/19 + FT 口徑承銷商考慮上調定價區間 + CNBC「Day 1 book covered」+ Bloomberg「multiple times oversubscribed」** | AI 模型供應商 / IPO 定價錨點 | 對台灣 Claude 大客戶：book T+3 oversubscribed + 承銷商考慮上調 → 上市後 Claude Pro / Teams / Enterprise 定價壓力由「溫和機率續升」改為「中性—短期可能上升」；pricing day 收斂 11/18 → Anthropic Live blog 窗口由 11/13 延 5 日 | Anthropic 定價 $70–78 × 825M 股 + greenshoe 123.75M 股；私募配售 $26B（Nvidia / Google 各 $10B at IPO price）；具體鎖股期、是否算入 825M 股待 S-1/A3 披露 | vs 11/12 brief 口徑「$70–78 中段」：FT 口徑承銷商考慮上調 → 定價區間上緣機率升高、$1.4T 天花板中段機率續升；vs Stocktwits「$70–80 retract + pricing update coming」單源持保留；vs 2025-11 Nvidia $10B 承諾：是否重複待釐清 | 🟢 一人 SaaS Claude 用戶：繼續用、短期 Claude 定價壓力中性；🟡 投資標的評估：11/18 pricing + 11/19 首日交易觀察；🟡 TSMC 列名 $500M 收斂為「列名象徵、非縱向整合主力」→ 台股 AI 類股敘事應修正 |
| **🆕 Anthropic $26B private placement Class N 結構具體披露 + 無投票權 + 轉讓給未關係第三方才轉 Class A + TSMC $500M（7 家之末、Nvidia / Google 1/20）** | AI 模型供應商 / 股權結構 / 治理分析 | 對台灣 Claude 大客戶：Class N 無投票權 → 7 家持有人（含 TSMC）對 Anthropic 治理無直接影響力、純股權投資；對台灣投資散戶：TSMC $500M 7 家之末 →「台灣 AI 產業鏈縱向整合」敘事應收斂、不宜放大 | 7 家合計 $26.5B：Nvidia $10B / Google $10B / AMD $2.5B / Broadcom $1B / Micron $1B / 微軟 $1B / TSMC $500M；至 IPO 價買入；無承銷折價；Class N 轉讓給未關係第三方才轉 Class A | vs 11/12 brief 口徑「$26B 私募含 TSMC 為縱向整合重大節點」：Class N 無投票權 + TSMC 僅 1/20 → 治理與估值敘事應修正；vs 若為 Class A 投票權份額：對 Anthropic 治理無影響力明顯降權 | 🟢 一人 SaaS Claude 用戶：Class N 結構不影響 API 存取；🟡 投資標的評估：$26.5B vs $26B 報導差異 → 待 S-1/A3 披露；🔴 11/12 brief 過度放大敘事應修正 → 寫「校正文」降低敘事風險 |
| **🆕 金管會 FinLLM 中信金主導 / 2026 年底上線 + 金融業 AI 六大核心原則 + 代理式 AI 33 家已用 + 虛擬資產服務法九項子法 2027Q1** | 本地 AI 治理 / vertical LLM 政策錨點 | 對台灣 B2B 金融業 solo dev：FinLLM 中信金主導為「本地監管 + 專業領域」雙門檻範本、solo dev 可作「法遵知識 copilot」vertical 切入點；對 fintech SaaS 創業者：代理式 AI 33 家已用為新 TAM、但技術 / 資安 / 法遵三大挑戰為門檻 | 金管會補助 / 政策推動；中信金主導 FinLLM 自建成本高、solo dev 不宜自建基礎 LLM；虛擬資產服務法完成立法、九項子法 2027Q1 公布為法遵新錨點 | vs Claude Opus 5.5 / GPT-5.6 Sol 通用 LLM：FinLLM 為本地監管合規垂直 LLM、B2B 金融售案的參照意義明顯；vs 歐美金融 LLM（Bloomberg BERT / FinGPT）：FinLLM 為台灣本地治理框架之內、solo dev 參照度高 | 🟢 B2B 金融業 solo dev：FinLLM 上線倒數為「法遵知識 copilot」vertical idea 窗口；🟡 fintech SaaS：代理式 AI 33 家為新 TAM、但需跟上六大核心原則與九項子法；🔴 AI × crypto SaaS：九項子法 2027Q1 公布為最大法遵訊號、不宜在子法未定時 push |
| **🔄 OpenAI × Cursor cutoff T+1（11/13 週五）— 11/12 proposed cutoff 當日無 OpenAI / Cursor 正式退場公告 + BYOK Chat / Agent 續行 + Cursor CEO「OpenAI 僅 5% 流量」未變 + migration 收斂為 Composer 2.5 / Opus 5.5 / BYOK / Codex CLI 四分** | AI coding / T+1 當日 / migration 窗口 | 仍以 Cursor 為主的 solo dev：T+1 當日為「切 BYOK 後第一天使用體驗」窗口；BYOK Chat / Agent 續行、Tab / Auto / Cloud Agents 不適用；Composer 2.5 nerfed 投訴 48h 無 Cursor 官方回應續行 | Cursor Plus $8 / Premium $30 / Super $100 / Ultra $200；Claude API Opus 5.5 $4/M in $20/M out；Composer 2.5 $0.50/M in $2.50/M out；OpenAI BYOK 按 OpenAI API 標準價 | vs 繼續用 Cursor + Composer 2.5：Composer 2.5 nerfed 投訴續行、Kimi K2.5 底層成本優勢在但品質恐降；vs 走 Claude Code CLI：訂閱結構差異大；vs Codex CLI + ChatGPT Pro：仍有 OpenAI 模型直連但無 Cursor 編輯器體驗；vs OpenRouter 第三方中繼：延遲與定價不穩 | 🔴 重度依賴 GPT-5.6 Sol：T+1 當日 BYOK 切換流程實測；🟡 Claude 已是主力：T+1 不急；🟢 全走 Claude Code CLI：無影響；🔴 BYOK 用戶：T+1 當日確認僅 local Chat / Agent 續行、Tab / Auto / Cloud Agents 不適用 |
| **🔄 OpenAI Agent Builder EOL T-17（11/13 → 11/30）— Thanksgiving 前 13 天 + ChatKit workflow 是否續存為核心疑慮 + Agents SDK export 續為 scaffold + Evals read-only Day +13** | AI agent / T-17 最後 17 天 / 遷移爭議 | Agent Builder 用戶：工程師 production → Agents SDK（TS / Python），非工程師可編輯 → ChatGPT Workspace Agents；ChatKit sessions depend on workflow ID → 「workflow 透過 ChatKit 嵌入是否 11/30 後續跑」為核心疑慮、OpenAI 未明確回應；Evals 用戶：匯出 dataset + Promptfoo[^promptfoo] YAML 轉換 | Promptfoo 開源 MIT；Langfuse[^langfuse] 社群版免費 / Pro $59/mo；ChatKit 保留不計 | vs ChatKit（embeddable chat UI 保留）：workflow ID 嵌入是否續跑未決；Agents SDK 選「engineer-owned workflow」、Workspace Agents 選「non-engineer editable automation」；Evals 遷移目標 Promptfoo + Langfuse 混搭 | 🔴 Agent Builder 用戶：T-17 Thanksgiving 前 13 天、建議 rebuild in Agents SDK；🔴 ChatKit 嵌入用戶：11/13 為最後決斷窗口、若 workflow ID 綁定 → 11/30 後可能 break；🟡 Evals 用戶：若尚未匯出 dataset，Thanksgiving（11/26）前補完 |
| **🔄 Vercel AI SDK 7.0.143（10 月口徑）+ HarnessAgent experimental canary + 10 harness adapters + tool search + toolCallConcurrency + streamRetries + WebSocket chat + 自 6/25 GA 後無 7.1.x minor release（T+141）** | AI agent / TS 底層 | TS solo dev agent 底層選型：AI SDK 7 本體 GA（2026-06-25）、HarnessAgent 續為 experimental canary；10 個 harness adapters 支援 Claude Code / Codex / Pi / Deep Agents / OpenCode 互換；10/x 到 11/13 無新 minor 版本（breaking change 預期續行） | AI SDK 7 開源免費；HarnessAgent 續為 experimental canary、breaking change 預期續行 | vs Claude Agent SDK 1.1（TS/Python）：Claude SDK 深度整合 Claude Code 2.1 Skills + subagent nesting；vs OpenAI Agents SDK：OpenAI 綁 Agents Builder 下線倒數、長期可信度不穩 | 🟡 TS 已用 AI SDK 7：HarnessAgent 續為 canary、不宜主線上 production；🟢 TS 新專案：優先走 Claude Agent SDK、HarnessAgent 作為互換層觀察；🔴 重度依賴 AI SDK 7 agent primitives：關注 HarnessAgent GA 確認時程 |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：金管會 FinLLM 中信金主導 2026 年底上線倒數 + 台灣 B2B 金融業 vertical LLM SaaS idea cluster + 代理式 AI 法遵 copilot 🆕

- **痛點來源**：金管會 FinLLM 中信金主導 / 2026 年底上線 / 首階段銀行業知識應用為台灣在地新 AI 治理訊號；代理式 AI 33 家業者已用、技術 / 資安 / 法遵三大挑戰；中文技術媒體對「FinLLM 上線倒數 + solo dev 補位 vertical LLM SaaS idea cluster」完全空白；「法遵知識 copilot / 風控 copilot / 客服 copilot」中文 solo dev 可參照案例近零
- **目標客群（台灣／亞洲）**：想做 B2B 金融業 vertical LLM SaaS 的台灣 solo dev（估 300–800 位）+ 關注 FinLLM 上線的中小金融業 IT（估 500–1,500 家）+ 關注代理式 AI 法遵風險的 fintech 創業者（估 300–800 位）+ 關注 vertical LLM 的 B2B 顧問（估 200–500 位）
- **技術複雜度**：3/5 — 內容型 + 1–2 小時 vertical LLM 原型；關鍵為「金管會 FinLLM 6 大核心原則 + 代理式 AI 33 家挑戰拆解 + 法遵 copilot / 風控 copilot / 客服 copilot vertical LLM SaaS idea cluster + Opus 5.5 / Sonnet 5.5 / Haiku 5.5 金融業 benchmark」
- **預估 MRR**：one-off NT$120K–320K per 深度文；訂閱「每週台灣 fintech AI 法遵週報」NT$500/mo × 250 用戶 ≈ NT$125K MRR；可 upsell 「FinLLM 上線倒數 playbook + vertical LLM SaaS idea cluster scorecard」Gumroad NT$2,500 × 50 份 ≈ NT$125K one-off
- **競品弱點**：中文技術媒體對「FinLLM 上線倒數 + solo dev 補位 vertical LLM SaaS」完全空白；大型技術媒體不會做「單人 vertical LLM SaaS idea cluster」拆解；「法遵 copilot / 風控 copilot / 客服 copilot」中文 solo dev 可參照案例近零
- **切入建議**：11/13 寫「金管會 FinLLM 2026 年底上線倒數 + 代理式 AI 33 家挑戰 + solo dev vertical LLM SaaS idea cluster + 法遵 copilot / 風控 copilot / 客服 copilot scorecard」 → 11/20 「vertical LLM SaaS MVP scaffold 實測」 → 11/27 Thanksgiving 前「FinLLM 上線倒數 T-30 關鍵進度追蹤」 → 12/15 「FinLLM 上線日前 15 天 deep dive」

### 點子 2：Anthropic $26B 私募 TSMC $500M 7 家之末 Class N 無投票權敘事校正文 🆕

- **痛點來源**：11/12 brief「TSMC 列名 Anthropic $26B 私募為台灣 AI 產業鏈縱向整合重大節點」為過度放大敘事；FourWeekMBA / TheNeuron 11/13 具體披露 TSMC $500M 僅 7 家之末、Nvidia / Google 1/20；Class N 無投票權 / 轉讓給未關係第三方才轉 Class A → 治理與估值敘事應修正；中文技術媒體對「$500M 收斂為列名象徵、非縱向整合主力」完全空白
- **目標客群（台灣／亞洲）**：關注 TSMC 持倉的台股投資散戶（估 15,000–40,000 位）+ 關注 AI 產業鏈縱向整合的台灣 solo dev（估 1,500–3,500 位）+ 關注 Anthropic 治理的 LLM 技術決策者（估 500–1,500 位）+ 關注敘事風險修正方法論的 blogger（估 300–800 位）
- **技術複雜度**：2/5 — 內容型 + 1 小時 Class N 結構拆解；關鍵為「$500M vs $10B 20 倍差額 + Class N 無投票權 / 無基本經濟權益 + 轉讓給未關係第三方才轉 Class A + 對台灣 AI 產業鏈縱向整合敘事收斂 + 11/12 brief 過度放大敘事風險複盤」
- **預估 MRR**：one-off NT$80K–240K per 校正文；訂閱「每週 AI 敘事風險複盤週報」NT$300/mo × 400 用戶 ≈ NT$120K MRR；可 upsell 「Anthropic $26B 私募 7 家持股結構 + 敘事收斂 playbook」Gumroad NT$1,500 × 80 份 ≈ NT$120K one-off
- **競品弱點**：中文技術媒體從未做過「Anthropic $26B 私募具體金額占比 + 敘事收斂校正」組合；財經媒體從「IPO 定錨」切入、不做治理與敘事風險層面；大型技術媒體不會做「單人敘事風險複盤」拆解；「Class N 無投票權對 Anthropic 治理影響」中文完全空白
- **切入建議**：11/13 寫「Anthropic $26B 私募 TSMC $500M 7 家之末 + Class N 無投票權敘事校正 + 對台灣 AI 產業鏈縱向整合敘事收斂 + 11/12 brief 過度放大敘事風險複盤」 → 11/18 pricing day 續行「上調情境下 $500M 最終占比變化拆解」 → 11/19 首日交易「Class N 轉讓第三方後 Class A 轉換機制深度拆解」

### 點子 3：OpenAI × Cursor cutoff T+1 當日 BYOK 切換流程實測 + Composer 2.5 nerfed 投訴 1 週深度追蹤 🆕

- **痛點來源**：11/12 proposed cutoff 當日無 OpenAI / Cursor 正式退場公告；BYOK Chat / Agent 續行確認；Cursor CEO「OpenAI 僅 5% 流量」口徑未變；Composer 2.5 nerfed 投訴 48h 無 Cursor 官方回應續行；中文技術媒體對「T+1 當日 BYOK 切換流程實測 + Composer 2.5 nerfed 投訴 1 週深度追蹤」完全空白；「切 BYOK 後第一天使用體驗 + Composer 2.5 nerfed 投訴跨週變化」中文完全空白
- **目標客群（台灣／亞洲）**：仍以 Cursor 為主的台灣 solo dev（估 2,000–5,000 位）+ 考慮切 BYOK 的中型團隊（估 200–600 家）+ 關注 AI coding 選型的技術 blogger / YouTuber（估 300–800 位）+ 成本敏感 batch task 用戶（估 500–1,500 位）
- **技術複雜度**：3/5 — 內容型 + 2–3 小時 benchmark + 1 小時 BYOK 切換實測；關鍵為「T+1 當日 BYOK 切換流程 + Composer 2.5 nerfed 投訴跨週變化 + CursorBench 4.0 口徑拆解 + Bito 混搭 75% / 省 57% 原理 + 個人 1 小時 benchmark 腳本」
- **預估 MRR**：one-off NT$100K–280K per 深度文；訂閱「每週 AI coding 選型週報」NT$300/mo × 500 用戶 ≈ NT$150K MRR；可 upsell 「T+1 當日 BYOK 切換 playbook + Composer 2.5 nerfed benchmark 腳本」Gumroad NT$2,000 × 60 份 ≈ NT$120K one-off
- **競品弱點**：台灣技術媒體口徑整合 + Composer 2.5 nerfed 投訴中文資源完全空白；大型技術媒體不會做「T+1 當日單人工作流 BYOK 實測」拆解；小型技術 blog 不會追 Cursor forum nerfed 投訴跨週變化
- **切入建議**：11/13 當日「OpenAI × Cursor T+1 當日 BYOK 切換流程實測 + Composer 2.5 nerfed 投訴 1 週深度追蹤 + CursorBench 4.0 口徑 + 個人 1 小時 benchmark 腳本 + Bito 混搭 heuristic」 → 11/18 Anthropic pricing day 聯動 → 11/19 Anthropic 首日交易聯動 → 11/26 Thanksgiving 前使用者回饋收尾

### 點子 4：OpenAI Agent Builder EOL T-17 Thanksgiving 前 13 天 + ChatKit workflow 嵌入 11/30 後續存疑慮解析 🔄

- **痛點來源**：OpenAI Agent Builder EOL T-17、Thanksgiving 11/26 前美國窗口剩 13 天；ChatKit sessions depend on workflow ID → 「workflow 透過 ChatKit 嵌入是否 11/30 後續跑」為核心疑慮、OpenAI 未明確回應；中文技術媒體口徑整合 + ChatKit 嵌入疑慮實測近零；Evals read-only Day +13 → 11/30 全下線倒數 17 天
- **目標客群（台灣／亞洲）**：仍用 OpenAI Agent Builder 的台灣 solo dev（估 500–1,500 位）+ 需遷移至 Agents SDK 的中型團隊（估 200–500 家）+ 關注 ChatKit 嵌入疑慮的台灣企業 IT（估 100–300 家）+ 關注 Workspace Agents 的 non-eng 用戶（估 300–800 位）
- **技術複雜度**：3/5 — 內容型 + 2–3 小時 Agents SDK scaffold 實測 + 1 小時 ChatKit workflow ID 嵌入疑慮實測；關鍵為「OpenAI 官方 migration guide 逐步拆解 + Agents SDK scaffold 實測踩坑 + ChatKit workflow ID 嵌入 11/30 後續存疑慮實測 + Promptfoo / Langfuse 替代 stack」
- **預估 MRR**：one-off NT$80K–240K per 深度文；訂閱「每週 OpenAI / Anthropic / Cursor 選型週報」NT$400/mo × 250 用戶 ≈ NT$100K MRR；可 upsell 「Agents SDK migration scaffold + ChatKit workflow ID 嵌入疑慮 playbook」Gumroad NT$2,000 × 60 份 ≈ NT$120K one-off
- **競品弱點**：中文技術媒體對 ChatKit workflow ID 嵌入 11/30 後續存疑慮近零；大型技術媒體不會做「單人工作流實際遷移 + ChatKit 嵌入疑慮實測」拆解；ChatKit 續行保留中文資源空白；OpenAI 官方 migration guide 翻譯 + 實測 + 踩坑 + ChatKit 疑慮中文完全空白
- **切入建議**：11/13 寫「OpenAI Agent Builder EOL T-17 Thanksgiving 前 13 天 + ChatKit workflow ID 嵌入 11/30 後續存疑慮實測 + Agents SDK scaffold 實測踩坑 + Promptfoo / Langfuse 替代 stack」 → 11/20 「Agents SDK scaffold 實測踩坑第 2 週」 → 11/26 Thanksgiving 前「ChatKit workflow ID 嵌入疑慮實測結果」 → 11/30 「全下線實況」

## 🧰 工具堆疊更新

- **🆕 Anthropic IPO book T+3 oversubscribed + pricing 11/18 earliest / 交易 11/19 + FT 口徑承銷商考慮上調定價區間 + CNBC「Day 1 book covered」+ Bloomberg「multiple times oversubscribed」**：Stocktwits「$70–80 retract + pricing update coming」單源持保留；對台灣 Claude 大客戶：短期定價壓力由「溫和機率續升」改為「中性—短期可能上升」
- **🆕 Anthropic $26B private placement Class N 結構具體披露**：Nvidia $10B / Google $10B / AMD $2.5B / Broadcom $1B / Micron $1B / 微軟 $1B / TSMC $500M = $26.5B；Class N 無投票權 / 無基本經濟權益 / 轉讓給未關係第三方才轉 Class A；「台灣 AI 產業鏈縱向整合」敘事應收斂
- **🆕 金管會 FinLLM 中信金主導 / 2026 年底上線 + 金融業 AI 六大核心原則 + 代理式 AI 33 家已用 + 虛擬資產服務法九項子法 2027Q1**：對台灣 B2B 金融業 solo dev 為「本地監管 + 專業領域」雙門檻範本；對 AI × crypto SaaS 創業規劃為年度最大法遵訊號
- **🔄 OpenAI × Cursor cutoff T+1 當日無正式退場公告 + BYOK Chat / Agent 續行確認 + Cursor CEO「OpenAI 僅 5% 流量」未變**：Cursor forum「Is Composer 2.5 being quietly nerfed?」帖續行、指約 2 週前起品質下降、Cursor 未官方回應續行
- **🔄 OpenAI Agent Builder EOL T-17 migration guide 明示「不保證完整遷移」+ ChatKit workflow ID 嵌入 11/30 後續存疑慮**：OpenAI 官方 migration guide 僅為 export 流程；ChatKit sessions depend on workflow ID → 「workflow 透過 ChatKit 嵌入是否 11/30 後續跑」為核心疑慮；Agents SDK vs Workspace Agents 雙路分化續行；Evals 11/30 全下線倒數 Day +13
- **🔄 Vercel AI SDK 7.0.143 + HarnessAgent experimental canary + 10 harness adapters + 自 6/25 GA 後無 7.1.x minor release（T+141）**：10 個 harness adapters 支援 Claude Code / Codex / Pi / Deep Agents / OpenCode 互換；breaking change 預期續行；對「TS Agent 底層 2 強」對決格局續有壓力
- **🔄 Claude Code 2.1.217 subagent concurrency / nesting caps + 2.1.212 session limits + 2.1.211 MCP tools re-sync + 2.1.157 plugins auto-load**：CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS + CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH 新增；對 fork subagents 預設 on + nested depth 限制為新治理面向
- **🔄 MCP 2026-07-28 spec 生效第 108 日 + 11 月無 Registry 數字刷新**：stateless core / MCP Apps / Tasks / 強化 OAuth / 棄 Roots / Sampling / Logging / 棄初始 handshake 改 per-request versioning；MCP Registry 9 月口徑 30,375 unique / 99,114 records / 36% stale 為最新權威

## ⚡ 今日行動建議

- [ ] **金管會 FinLLM 2026 年底上線倒數 + 台灣 B2B 金融業 vertical LLM SaaS idea cluster 深度文**：FinLLM 中信金主導 + 代理式 AI 33 家挑戰 + 法遵 copilot / 風控 copilot / 客服 copilot vertical LLM SaaS idea cluster + Opus 5.5 / Sonnet 5.5 / Haiku 5.5 金融業 benchmark（成本：3–4 小時；產出：長文 blog + vertical LLM SaaS idea cluster scorecard + 11/27 Thanksgiving 前倒數大綱）
- [ ] **Anthropic $26B 私募 TSMC $500M 7 家之末 Class N 無投票權敘事校正文**：$500M vs $10B 20 倍差額 + Class N 無投票權 / 無基本經濟權益 + 轉讓給未關係第三方才轉 Class A + 對台灣 AI 產業鏈縱向整合敘事收斂 + 11/12 brief 過度放大敘事風險複盤（成本：2–3 小時；產出：校正文 blog + 敘事收斂 playbook + 11/18 pricing day 續行大綱）
- [ ] **OpenAI × Cursor T+1 當日 BYOK 切換流程實測 + Composer 2.5 nerfed 投訴 1 週深度追蹤 Live blog**：BYOK 切換流程 + Composer 2.5 forum 投訴跨週變化 + CursorBench 4.0 口徑實測 + 個人 1 小時 benchmark 腳本（成本：3 小時；產出：Live blog + benchmark 腳本 + 11/18 Anthropic pricing day 聯動大綱）
- [ ] **OpenAI Agent Builder EOL T-17 Thanksgiving 前 13 天 + ChatKit workflow ID 嵌入 11/30 後續存疑慮實測深度文**：OpenAI 官方 migration guide 逐步拆解 + Agents SDK scaffold 實測踩坑 + ChatKit workflow ID 嵌入 11/30 後續存疑慮實測 + Promptfoo / Langfuse 替代 stack（成本：3–4 小時；產出：長文 blog + ChatKit 疑慮實測筆記 + Promptfoo YAML 範本 + 11/26 Thanksgiving 前倒數大綱）
- [ ] **iPhone Duo Day 22 工作週 5 日完整樣本 vs 週末 48h 首次完整差額曲線 + 台灣新機 vs 二手 vs 回收 三線對照深度文**：Day 22 工作週 5 日完整樣本 + 台灣雙 11 新機降 NT$2,000 + 傑昇回收價 4 層 + 中國炒家虧損原因（成本：2 小時；產出：長文 blog + 三線對照表 + 週末差額曲線 CSV）

## ⏳ 待觀察

- **Anthropic pricing day 11/18（earliest）+ 首日交易 11/19**：book T+3 oversubscribed + 承銷商考慮上調定價區間 → 11/18 上調至 $85+ / $90+ 情境機率升高；首日交易情境分支 A（11/19 開盤 + 上調定價）vs B（11/19 開盤 + 不上調）vs C（延後至 Thanksgiving 前）
- **Anthropic 定價區間是否上調**：FT 口徑承銷商考慮上調 + CNBC「Day 1 book covered」+ Bloomberg「multiple times oversubscribed」+ 機構需求強過同期 SpaceX → S-1/A3 若 11/15–11/17 間補發上調定價區間 → 「$70–78 → $85–90」情境具體化
- **Anthropic Stocktwits「$70–80 retract + pricing update coming」口徑**：單源、未經其他媒體佐證；若 11/13–11/17 間有其他權威源佐證 → 定價不穩訊號；若無佐證 → 單源持保留
- **Anthropic $26B vs $26.5B 披露差異**：FourWeekMBA 口徑 $26.5B（Nvidia / Google 各 $10B + AMD $2.5B + Broadcom / Micron / 微軟 各 $1B + TSMC $500M）vs 多數口徑 $26B；是否 TSMC $500M 未算入 / 或口徑差異為表述方式 → 待 S-1/A3 披露
- **OpenAI × Cursor 切斷實況 T+2（11/14 週六）**：Cursor 是否在 T+2 內公告退場補救方案；11/12 → 11/21 促銷價矛盾 9 天視窗如何結束；OpenAI / Cursor 無新公告續行；Composer 2.5 nerfed 投訴是否有 Cursor 官方回應
- **OpenAI Agent Builder EOL T-16（11/14 週六）**：是否補發 workflow graph export 工具（migration guide 現未承諾）；ChatKit workflow ID 嵌入 11/30 後續存疑慮是否 OpenAI 明確回應；Thanksgiving 前美國窗口剩 12 天
- **金管會 FinLLM 上線倒數 T-48（12/31 estimates）**：11 月後中信金是否補發 FinLLM 架構 / 首階段應用具體案例；代理式 AI 33 家業者是否有具體名單披露；虛擬資產服務法九項子法是否 11/15 前有新進度
- **TSMC 11 月 / 12 月月營收 YoY 續強 / 收斂**：10 月 +59.7% 加速、未現轉弱；11 月 / 12 月 YoY 若持續 +50% 以上區間 → AI megatrend 擴大化定案；若收斂至 +30–40% → 轉弱首個訊號
- **iPhone Duo Day 23 Week 4 Day 1（11/14 週六）**：週末 48h 首日；可做「工作週 5 日完整樣本 vs 週末 48h 首次完整差額曲線」拆解
- **Smithery T+14 Day +14（11/14 週六）**：第二週第六日；ToolBench grading × directory 擁有者條目中立性第二週第六日切片
- **立法院中小微企業轉型條例 T+46（11/14 週五排審窗口結束 → 11/15 週六後觀察窗可能流失到 12 月）**：本週（11/10–11/14）為委員會排審窗口最後 1 日；11 月通過機率續低、觀察週流失到 12 月機率超過 80%
- **數發部 100 億 AI T+41（11/14 週六）**：8 月底 10 家 / NT$2.55 億後 Q4 pipeline 是否公布；SBIR 2026-01 起上限調高為替代路徑
- **Vercel AI SDK 7 HarnessAgent GA**：自 6/25 experimental canary 已滿 T+141；若 11 月 GA 將改變「TS Agent 底層 2 強」對決格局；官方文件仍標記 experimental canary

[^finllm]: 金管會推動、由中國信託金控（中信金）主導的台灣金融業專用大型語言模型，首階段聚焦銀行業知識應用、預計 2026 年底上線；屬「本地監管合規 + 專業領域」雙門檻的台灣垂直 LLM 示範案，可作為其他本地業者或 solo dev「補位 vertical SaaS」的參照錨點。

[^promptfoo]: MIT License 開源的 LLM 評估框架，以 YAML 設定測試案例與 assertions 可對多模型做回歸測試與對照；常被用作閉源 Evals 平台的 self-host 替代選擇，適合預算與資料外洩考量兼顧的小團隊。

[^langfuse]: 開源的 LLM observability 平台，提供 trace、prompt 管理、評估與用量成本追蹤；社群版可自架免費、雲端 Pro 方案約 $59/mo，常與 Promptfoo 混搭以補齊「評估 + 觀測」兩個面向。

[^classn]: Anthropic 本次 $26B 私募特別發行的股份類別，「無投票權 + 無基本經濟權益」，須於轉讓給未關係第三方時才會轉換為一般 Class A 股；設計目的在於讓策略投資人（Nvidia、Google、TSMC 等）取得經濟敞口卻不介入治理。

[^composer]: Cursor 自家推出、底層為 Kimi K2.5 的 agentic coding 模型，官方定價明顯低於 Claude Opus 5.5（$0.50/M in、$2.50/M out）；近期 Cursor 論壇出現「品質靜默下調（quietly nerfed）」投訴，截至目前仍無 Cursor 官方回應。

[^harness]: Vercel AI SDK 7 的 experimental canary 模組，目標是讓 TS 應用能透過單一介面在 Claude Code、Codex、Deep Agents、OpenCode 等 10 個外部 agent harness 之間互換；至今仍標記 experimental、breaking change 預期續行。

## 📚 引用來源

1. [CNBC — Anthropic sets IPO price range of $70 to $78, trading Nov. 19](https://www.cnbc.com/2026/11/10/anthropic-sets-price-range-of-70-to-78-in-upcoming-ipo.html) — 2026-11-10
2. [Fortune — Anthropic sets IPO range valuing it at up to $1.4 trillion amid AI stock sell-off](https://fortune.com/2026/11/10/anthropic-ipo-price-range-ai-stock-sell-off/) — 2026-11-10
3. [Yahoo Finance — Anthropic IPO Could Top $1.5 Trillion as Banks Weigh Higher Pricing](https://finance.yahoo.com/markets/stocks/articles/anthropic-ipo-could-top-1-094802740.html) — 2026-11
4. [Qz — Anthropic IPO is said to be multiple times oversubscribed](https://qz.com/anthropic-ipo-oversubscribed-roadshow-demand-111126) — 2026-11
5. [BigGo Finance — Anthropic IPO Demand Surges, Underwriters Weigh Raising Offer Price](https://finance.biggo.com/news/c3d7c432-77e7-4c65-a4dd-e4d7bad34795) — 2026-11
6. [FourWeekMBA — Nvidia Google $10B Each of Anthropic's $26B Placement](https://fourweekmba.com/ai-nvidia-google-buy-10b-each-of-anthropics-26b-placement/) — 2026-11
7. [TheNeuron — Inside the $26 Billion Tech Bet](https://www.theneuron.ai/news/whos-investing-in-anthropics-ipo-inside-the-26-billion-tech-bet/) — 2026-11
8. [Cryptobriefing — Anthropic Gives Google Option Class N Stock](https://cryptobriefing.com/anthropic-google-option-10b-class-n-stock/) — 2026-11
9. [Stocktwits — Anthropic Retracts Reported $70–$80 IPO Price Range](https://stocktwits.com/news-articles/markets/equity/anthropic-retracts-reported-70-80-ipo-price-range-pricing-update-is-coming-listing-expected-next-week/cNGud3sR970) — 2026-11
10. [Anthropic — Roadshow Launch](https://www.anthropic.com/news/roadshow-launch) — 2026-11-10
11. [SEC EDGAR — Anthropic S-1/A Amendment 2026-11-10](https://www.sec.gov/Archives/edgar/data/0002130357/000162828026072484/anthropicpbc-sx1ax2.htm) — 2026-11-10
12. [Anthropic — Responsible Scaling Policy v3.4](https://www-cdn.anthropic.com/files/4zrzovbb/website/0bacdc8440ea96e62a8766d99ebe1d4eea6d5f3a.pdf) — 2026-07-08
13. [Anthropic — RSP Updates](https://www.anthropic.com/rsp-updates) — 2026
14. [OpenAI Help — Winding down OpenAI model access in Cursor](https://help.openai.com/en/articles/20001506) — 2026-11-13 存取
15. [OpenAI Blog — Decision on Cursor following SpaceX acquisition](https://openai.com/blog/our-decision-on-cursor-following-its-acquisition-by-spacex) — 2026-08-28
16. [Cursor Forum — Is Composer 2.5 being quietly nerfed?](https://forum.cursor.com/t/is-composer-2-5-being-quietly-nerfed/169779) — 2026
17. [developers.openai.com — Agent Builder Migration Guide](https://developers.openai.com/api/docs/guides/agent-builder/migrate-from-agent-builder) — 2026
18. [MCP Directory — OpenAI AgentKit Deprecation Migration Guide 2026](https://mcp.directory/blog/openai-agentkit-deprecation-2026) — 2026
19. [ecorpit.com — OpenAI shuts Agent Builder, Evals and reusable prompts on 30 November 2026](https://ecorpit.com/openai-agent-builder-evals-prompts-shutdown-november-2026/) — 2026
20. [iThome — 金融業運用 AI 六大核心原則](https://www.ithome.com.tw/news/175564) — 2026
21. [Money.udn — FinLLM 中信金主導 2026 年底上線](https://money.udn.com/money/story/5613/9817609) — 2026
22. [ctee — 金管會 2026 金融科技「區塊鏈金融 + AI」雙主軸](https://ctee.com.tw/news/20260819700750-430301) — 2026-08
23. [Meet 創業小聚 — 數發部百億 AI 新創計畫首年成績](https://meet.bnext.com.tw/articles/view/53073) — 2026
24. [CNA — 政院修法投入千億助中小微企業升級](https://cna.com.tw/news/aipl/202610080165.aspx) — 2026-10-08
25. [立法院議事紀錄](https://www.ly.gov.tw/pages/MeetingList.aspx?nodeid=135) — 2026-11-13 存取
26. [傑昇通信 — iPhone Duo 回收價表](https://www.jyes.com.tw/recycle/Apple-iPhone-Duo) — 2026-11
27. [technews.tw — iPhone Duo 台灣售價 74,900 元起](https://finance.technews.tw/2026/09/10/iphone-duo-affordable/) — 2026-09-10
28. [CNA — iPhone Duo 中國市場熱銷 發貨排至明年](https://www.cna.com.tw/news/acn/202610170102.aspx) — 2026-10-17
29. [Vercel Changelog — AI SDK 7 is now available](https://vercel.com/changelog/ai-sdk-7) — 2026-06-25
30. [Vercel Changelog — Program Agent Harnesses with AI SDK](https://vercel.com/changelog/program-agent-harnesses-with-ai-sdk) — 2026
31. [ai-sdk.dev — HarnessAgent docs](https://ai-sdk.dev/v7/docs/harnesses/harness-agent) — 2026
32. [Claude Code Changelog](https://code.claude.com/docs/en/changelog) — 2026
33. [Dev.to — The MCP Registry By The Numbers](https://dev.to/amareswer/the-mcp-registry-by-the-numbers-38nc) — 2026-09
