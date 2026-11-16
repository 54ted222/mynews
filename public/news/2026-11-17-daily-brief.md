---
title: 每日創業情報 — 2026-11-17
date: 2026-11-17
tags: 創業情報, AI 產業, SaaS, 台灣
summary: Nvidia FY2027 Q3 法說 T-0（11/17 盤後 17:00 ET）+ Anthropic pricing T-1（11/18）+ MiniMax H3-Image 折扣 T-0 收尾（16:00 UTC）+ 首次「同週三訊號」anchor 日 + Cloudflare Kitesurf 11/13 開源 Workers-based agent browser + Google AdMob 讓 Claude Code / Codex 架設 app ads + 立法院中小微企業條例第二觀察窗 Day 1 + 金管會 9 項子法 T-27 第 15 日 + Meet Taipei Startup Festival 11/19–21 T-2 + Y Combinator Startup School Taipei 11/12 T+5 + iPhone Duo Day 26 工作週第二週 Day 2 + Weta FX × TAICCA Taiwan AI screen hub 11/6 T+11。
keywords: Nvidia FY2027 Q3 November 17 2026 earnings after market close consensus 108.80 billion EPS 2.47, Nvidia guidance 108 billion plus minus 2 percent China exclusion data center Blackwell B200 GB200, Anthropic IPO pricing November 18 2026 above range Hyperliquid perp 101 FT bankers 1.5T retail 20 percent US only, Anthropic S-1/A3 November 17 2026 SEC last working day amendment price range 70 78 book six times oversubscribed, MiniMax H3-Image launch discount end November 17 16 UTC 4K image 0.034 to 0.069 Hugging Face weights RTX 3090 local, Cloudflare Kitesurf agent browser open source Apache 2.0 November 13 2026 Workers engine indie developer, Google AdMob AI agent Claude Code Codex app ads setup Gemini assistant November 16 2026, OpenAI Agent Builder EOL T-13 ChatKit workflow ID post-shutdown unresolved migration advanced integration server-side agent, Taiwan 立法院 中小微企業 1000 億 轉型條例 第二觀察窗 Day 1 November 17 21 2026 R&D 20 percent, 金管會 虛擬資產服務法 9 項子法 2026-11-03 預告 40 日公告期 T-27 第 15 日 穩定幣 3 億 12 個月過渡 2027Q1, Meet Taipei Startup Festival 2026 November 19 21 Taipei Expo Dome AI theme T-2 indie dev showcase, Y Combinator Startup School Taipei November 12 2026 T+5 Paxel Builders 技術人才, Weta FX TAICCA Taiwan AI screen production hub November 6 Taipei Creative Content Fest, Dataconomy 台股 TaiEx 2026 漲幅 50 percent 擠壓早期創投 AI 股熱錢排擠, 傑昇 iPhone Duo Day 26 工作週第二週 Day 2 回收價 unchanged 11 月量增價跌 3 percent, TSMC Q4 guidance 52.3 54.3 billion 65 67 gross margin 11 月營收 12/10 公告倒數 T-23
---

# 每日創業情報 — 2026-11-17

## 🎯 今日 TL;DR

- **🆕 Nvidia FY2027 Q3 法說 T-0（11/17 週二美東盤後 17:00 ET + call 14:00 PT）+ 公司自提財測 $108B ±2% 排除中國 + Blackwell[^nvidia] B200 / GB200 為主力 SKU + 市場共識營收 $108.80B / EPS $2.47 + 毛利率 74% ±50bp + Q4 毛利率 HBM3e / HBM4 記憶體漲價續走低情境 unchanged + 10 月 TSMC 營收低於市場預期 2.7% 後第一個 AI 需求端大客戶首次同週驗證 + Anthropic IPO pricing 11/18 T-1 + MiniMax H3-Image 折扣結束 T-0 16:00 UTC 三訊號 24h 內到齊**：對台灣 Claude / OpenAI 大客戶：若 Nvidia Q3 營收超過 $108.80B 共識 → AI megatrend 擴大化敘事強化、Anthropic 11/18 pricing above range 機率同步升高；若財測毛利率 Q4 顯著走低 → 「需求續強但利潤率結構性受壓」雙訊號確認；對台灣散戶：11/17 盤後至 11/18 開盤的 48h 為 ADR 與台股聯動最緊觀察窗；中文技術媒體對「Nvidia T-0 + Anthropic T-1 + MiniMax T-0 同日三訊號」整合仍近零——solo dev 11/17 晚間至 11/18 中午的 18h 窗口原創分析新鮮度極高
- **🆕 Anthropic pricing day T-1（11/18 週三）+ 首日交易 11/19 T-2 + Nasdaq ticker ANT 續行 + 11/16 CNBC guide 續未推翻 $70–78 range + 分析師「pricing at or above $78」共識續行 + Hyperliquid[^hyperliquid] perp 11/13–11/16 四日未見溢價崩盤 + 11/17 S-1/A3 若補發為最後 SEC 工作日 + 承銷協議 / 法律意見書待 pricing 近日補發**：對台灣 Claude 大客戶：若 11/18 pricing above range → Claude Pro / Teams / Enterprise 中期定價壓力由「中期機率升高」升級至「2027 上半年機率顯著升高」+ above range 作為 Anthropic 2027 財務結構的 anchor 具體化；對台灣散戶複委託：Anthropic 20% retail allocation 但 US-only 發行條件 unchanged、11/18 pricing + 11/19 開盤為最後配售決策點；中文技術媒體對「pricing 前一日 S-1/A3 最後工作日 vs 11/18 pricing above range vs 11/19 首日開盤情境分支」具體整合仍近零
- **🆕 MiniMax[^minimax] H3-Image launch discount 11/17 16:00 UTC（T-0、約台灣時間 11/18 00:00）收尾 + ≥16.6 MP 圖像 50% off + 4K 一張 $0.034 → $0.069（標準）/ $0.065 → $0.130（Highspeed）正式價 + 11/18 16:00 UTC 起恢復 + 11/10 開源發布後第 7 日 + Hugging Face weights 續可下載 + 本地 RTX 3090 56s per 4K image + 45 GiB peak memory + MiniMax 官方聲明「這些不是固定單價、計費以 token 為基礎」續行 + Pixel Dojo 小樣本 benchmark 更勝 GPT-Image-2.6**：對台灣圖像 SaaS 創業者：T-0 為「API 低價窗口 vs 本地部署 crossover」最後 8 小時決策點；對 solo dev 的 B2B 圖像應用：11/17 當日堆量 benchmark 為「discount 期間成本最低 arbitrage 窗口」最後機會、11/18 後主流策略轉為「本地 RTX 3090 + ComfyUI 0.44.0 + P-H3 蒸餾版」；對第三方 reproducible head-to-head benchmark：至 T-0 仍未出現系統化比較、收尾後首週（11/18–11/24）為第一波社群 benchmark 可能成形窗口
- **🆕 Cloudflare Kitesurf 11/13 開源 Apache 2.0 + Workers-based agent browser engine + 2026-08 首度 debut 後承諾開源 11/13 兌現 + 11/16 第三方媒體具體報導 + GitHub repo 公開可 fork + 相對 Anthropic Claude Browser / Playwright 為 edge 佈署的 agent browser 第三條路線**：對 solo dev 的 AI agent 應用：「agent 要能瀏覽網頁」的技術棧多了可 self-host 的開源選項、不必依賴 cloud 服務的 token 計費；對台灣 indie：Cloudflare Workers 免費層可跑 Kitesurf 為小型 agent prototype 的零成本路徑；對中文技術媒體：Kitesurf 技術深度解析 + 與 Playwright / Claude Browser 對比 benchmark 具體內容空白、新鮮度極高
- **🆕 Google AdMob 11/16 開放 AI agent（Claude Code / Codex 具名）直接架設 app ads + Gemini 內建 ad problem 修復 assistant + 多數工具仍在測試中 + AdMob 首度明文列出「AI agent」為 setup entry**：對台灣一人 app / web 開發者：「寫完 app 讓 agent 幫你設廣告」的 agent-driven ad ops 進入主流 vendor 視野；對 solo dev 的 ad-based 商業模式：AdMob × Claude Code setup flow 為「ad ops 自動化」的第一個官方入口、過去只有 Mintegral / Unity Ads 第三方 MCP server；對 ad fraud / brand safety 疑慮：agent 幫設廣告 → 誰負責 target settings 正確性、agent 錯設導致 CTR 崩掉時的 chargeback 流程待 Google 明確說明
- **🆕 Meet Taipei Startup Festival 2026 11/19–21（T-2 至 T+4）+ Taipei Expo Dome + 全展 AI 主題 + 國發會 / 經濟部主辦級活動 + 預估 500+ 新創 + Taiwan AI 新矽島 政策 11/11 落地案例 + TiBOOST 得獎者 11/11 名單場展延續**：對台灣 solo dev：T-2 已是「展前最後能登記 pitch session 的 48h」、不去的話下一個同級活動為 2027Q1 Computex Taipei；對創業早期：Dataconomy 11/3 揭露「2026 台股 +50% 擠壓早期創投」、本次展覽為 11 月「現場 angel 密度最高」3 日；對中文技術媒體：Meet Taipei × AI 新矽島 政策 × TiBOOST 得獎者 現場 cluster 整合空白
- **🆕 Y Combinator Startup School Taipei 11/12 T+5 + Paxel / Builders 等台灣 YC 校友承辦 + 「not yet running a company」技術人才為明確 target + 首次 YC Startup School 進台北 + YC 11 月同步在 Taipei 設有正式辦公連絡窗口**：對台灣全端 / solo dev：「尚未創業的工程師」為明確 target、YC founder path 的第一道正式入口首度在地化；對 YC 兩年前已明示「亞洲是下一個 batch 主力」策略：Taipei 11/12 Startup School 為「台灣接 YC batch 的第一個官方訊號」；對台灣早期創投：YC 直接繞過當地 VC 階段的路徑開始成形、早期 pre-seed 競爭結構潛在改變
- **🆕 Weta FX × TAICCA Taiwan AI screen production hub partnership 11/6（T+11）+ Taipei Creative Content Fest + 三軸：聯合投資、AI R&D、人才培訓 + 台灣首次國際級 AI 製片正式合作案 + 文策院主導、Weta FX 投入 artist + infra**：對台灣 content creator × AI 創業：「AI 影視製片」政策基座首度明朗化、與 11/11 AI 新矽島 政策軌道互補；對 solo dev 技術棧延伸：Weta FX 技術伙伴（Unreal / Houdini + AI pipeline）開啟台灣 VFX pipeline SaaS 可切入點；對中文媒體：「Weta × TAICCA × AI 影視」深度解析空白
- **🔄 OpenAI Agent Builder EOL T-13（11/17 週二）+ Thanksgiving 11/26 前美國實質可動工窗口剩 9 天 + ChatKit 官方 guide 續不明示「post-shutdown 是否支援 Agent Builder workflow ID」+ migration 官方路徑確認為「advanced integration + 自建 server-side agent」+ Agents SDK export 續為 scaffold + Agent Builder overview 頁推薦「hosted ChatKit 路徑」與 ChatKit 頁「deprecated」口徑續分歧 + 第三方分析「Evals 10/31 轉 read-only」官方無確認**：11/16 T-14 → 11/17 T-13、Thanksgiving 前實質 9 天；對 ChatKit 嵌入用戶：workflow ID 綁定 + OpenAI 無明示 → 11/30 後 break 機率續為「中性—機率升高」；對 Evals 用戶：第三方 10/31 口徑官方無確認、建議仍以 dataset 本週內完成匯出
- **🔄 立法院中小微企業 1,000 億轉型條例 第二觀察窗 Day 1（11/17 週二）+ 11 月立院公開議程仍缺更新（截至 11/17 中午）+ 11 月通過機率下修為極低續行 + 觀察窗流失到 12 月機率 > 85% + R&D 抵減率 20% / 轉型設備投資抵減門檻 25 萬 / 171.6 萬家受惠 soundbite unchanged + 行政院 10/8 通過 38 條草案 + 經濟部中小及新創企業署主責**：第二觀察窗 Day 1 為「下週首日 vs 11 月通過作廢」首個媒體觀察日；對 solo dev：「若 11/17–11/21 內仍無媒體進展 → 11 月通過實質確定作廢」續為本週硬斷點、「必須以 2027Q1 作為申請起點情境」準備動作為當週完成
- **🔄 金管會虛擬資產服務法 9 項子法 40 日公告期 T-27（~12/13 截止）第 15 日 + 第二週首個工作日 + 11/3 預告後 solo dev / 中小企業意見書窗口 ~12/13 前續開啟 + 穩定幣 3 億資本 / 12 個月過渡期 unchanged + 2027Q1 母子法同步施行 + 2028Q1 申請截止 unchanged + 11 月 KuCoin「10 月 Travel Rule」報導與 Q1 2027 時程續分歧**：第 15 日為公告期第二週首個工作日、第二週內有意見書計畫者需 11 月底前初稿；對台灣 AI × crypto SaaS 創業者：「12/13 公告期結束倒數 T-27 + solo dev 聯盟意見書 cluster 空白」續為可切入點
- **🔄 Cursor BYOK bug 修復進度 T+2（11/15–11/17）+ staff「tracking with high internal priority / can't share ETA」+ 「current behavior by design, not a bug」雙口徑續並存 + workaround Settings 關 BYOK toggle 或 Auto mode 保 BYOK 續行 + Composer 2.5 nerfed 投訴跨週變化 unchanged + Composer 3 / Vega release date 官方續不預告**：11/17 為跨週追蹤第 3 日、staff 口徑內部分歧續未收斂；對仍以 Cursor 為主的 solo dev：bug / by-design 分歧 → 時程不可預期性續行、遷出判斷為「若 11 月底 Cursor 無正式公告 → 12 月起 Claude Code CLI 或 Codex CLI 全走」
- **🔄 iPhone Duo Day 26 工作週第二週 Day 2（11/17 週二）+ 傑昇回收報價 1TB NT$72,700 / 2TB NT$89,260 unchanged + 傑昇 10 月整體回收量 +53% MoM 但主流機型回收價普遍下滑續行 + iPhone 整體回收增值 +3%（遠遜安卓旗艦）+ 香港 price.com.hk 10/23 Duo resale 數據 + 台灣 11 月第 2 週具體報導續空白**：Day 26 為「第一個工作週（Day 18–22）vs 第二個工作週前 2 日（Day 25–26）」首個對照 anchor；對 solo dev 創業敘事：中文媒體具體報導空白續行、新鮮度極高續行
- **🔄 TSMC 11 月營收 12/10 公告倒數 T-23 + Q4 guidance $52.3B–$54.3B / 毛利率 65–67% + 10 月 NT$586.89B 占上緣 34% + 11/12 月需合計 NT$1.14T 達 top of range + 匯率 assumption 31.8 TWD/USD vs 實際台幣更弱 + 10 月 YoY +59.7% 低於市場預期 2.7%**：11 月 YoY 若收斂至 +40–50% → AI megatrend 擴大化敘事修正；若續強 +55–60% → 續強敘事確認；對台灣供應鏈股：TSMC 11/12 月雙月若合計達不到 NT$1.14T → Q4 guidance 下緣機率升高
- **🔄 Anthropic S-1/A 11/2 為最新補發（Amendment No.1）+ Q3 2026 營收 $17B / 9 個月累計 $5B 短期算力承諾 / $895.4B 長期算力承諾 + 價格區間 $70–78 / Class A 825M 股 + greenshoe[^greenshoe] 123.75M 股 / 11/18 pricing / 11/19 trading 続行 + CIK 2130357 + Nasdaq ticker ANT**：若 11/17 補發 S-1/A3 揭露上調定價區間 → 「$70–78 → $85–90」情境具體化；若無補發 → $70–78 top of range 定價機率升高（Hyperliquid perp $101 為市場暗示上調訊號）

## 🔄 昨日追蹤

- 🔄 **Nvidia FY2027 Q3 法說**：昨日 T-1 → 今日 T-0（17:00 ET 盤後、約台北 06:00 11/18）；市場共識維持 $108.80B / EPS $2.47、Q4 毛利率續走低情境 unchanged；為本週首個 48h 關鍵視窗起點
- 🔄 **Anthropic pricing**：昨日 T-2 → 今日 T-1；分析師「pricing at or above $78」共識續行、11/16 CNBC guide 未推翻、FT 「承銷商考慮 above range」口徑未見否認；11/17 若 S-1/A3 補發揭露上調 → 情境具體化
- 🔄 **MiniMax H3-Image 折扣結束**：昨日 T-1 → 今日 T-0（16:00 UTC）；定價 unchanged、恢復正價邏輯確認；社群 reproducible benchmark 續缺、本週（11/18–11/24）為第一波可能成形窗口
- 🔄 **OpenAI Agent Builder EOL**：T-14 → T-13；Thanksgiving 前實質 9 天；ChatKit guide 續不明示 workflow ID 續行性；migration 路徑為「advanced integration + 自建 server-side agent」確認
- 🔄 **金管會 9 項子法 公告期**：T-28 第 14 日 → T-27 第 15 日；第二週首個工作日起點
- 🔄 **立法院中小微企業條例**：T+48 → 第二觀察窗 Day 1（11/17）；11 月公開議程續缺更新；觀察窗流失至 12 月機率 > 85% 續行
- 🔄 **Cursor BYOK bug**：staff「no ETA」與「by design」雙口徑續並存、11/16 → 11/17 無新公告
- 🔄 **Supabase + Turso 整合**：T+45 → T+46 無新訊號；2027Q1 整合初版路徑預期 unchanged
- 🔄 **iPhone Duo**：Day 25 → Day 26；工作週第二週 Day 1 → Day 2；傑昇回收價 unchanged
- 🔄 **數發部 100 億 AI**：T+43 → T+44；11 月無 pipeline 刷新續行
- 🔄 **TiBOOST 2026 / AI 新矽島**：11/11 政策具體化後第 6 日；創新板 tib-創 referral 實際跟進尚無公開案例、Meet Taipei 11/19–21 為下個觀察窗

## 📰 台灣特定產業動向

| 事件 | 來源 | 對台灣獨立開發者的影響 | 機會/威脅 |
| ---- | ---- | ---------------------- | --------- |
| 立法院中小微企業轉型條例 第二觀察窗 Day 1（11/17 週二）+ 11 月議程續缺更新 + R&D 抵減率 20% / 設備投資抵減門檻 NT$25 萬 / 171.6 萬家受惠 soundbite unchanged | [行政院新聞稿](https://www.ey.gov.tw/File/2EAFB13BE953C684?A=C)、[Taipei Times 2026-09-11](https://www.taipeitimes.com/News/taiwan/archives/2026/09/11/2003864074) | 若 11/17–11/21 無進展 → 11 月通過作廢、2027Q1 作為申請起點情境定型；solo dev 本週內需準備 2027Q1 情境下的 R&D 支出帳務切割 | 機會：R&D 抵減率 20%（高於上一版）為 solo dev 友善；威脅：若拖至 2027Q1、現金流緊的 team 整個 2026 稅年落空 |
| 金管會虛擬資產服務法 9 項子法 40 日公告期 T-27（~12/13 截止）第 15 日 + 第二週首個工作日 + 穩定幣 3 億資本 / 12 個月過渡期 unchanged + KuCoin「10 月 Travel Rule」與 Q1 2027 時程續分歧 | [TRM Labs Virtual Asset Service Act 解析](https://www.trmlabs.com/resources/blog/unpacking-taiwans-virtual-asset-service-act-what-crypto-and-stablecoin-issuers-need-to-know)、[Lee and Li 法規快訊](https://www.leeandli.com/EN/NewslettersDetail/7658.htm) | 第二週內有意見書計畫者需 11 月底完成初稿；solo dev 聯盟集體發函反映過渡期短 / 資本門檻高的 cluster 可切入 | 機會：穩定幣應用層 SaaS idea cluster 窗口續明確；威脅：3 億資本門檻為 solo dev 進入穩定幣發行絕對硬斷點 |
| Meet Taipei Startup Festival 2026 11/19–21（T-2 至 T+4）+ Taipei Expo Dome + 全展 AI 主題 + 預估 500+ 新創 | [Action Community Entrepreneurship 活動頁](https://ace.sg/gem-events/meet-taipei-startup-festival-2026/) | T-2 為最後 48h pitch session 登記 + 預登場名單不公開現場接觸為主；solo dev 可做展前 pre-outreach 鎖定 3–5 名 target investor | 機會：11 月「現場 angel 密度最高」3 日、與 AI 新矽島 政策對接；威脅：Dataconomy 11/3 揭露「台股 +50% 擠壓早期創投」→ angel ticket 普遍縮小 |
| Y Combinator Startup School Taipei 11/12 T+5 + Paxel / Builders 承辦 + 首次 YC Startup School 進台北 + 「尚未創業的工程師」明確 target | [bit.fan — YC Startup School 進台北](https://www.bit.fan/en/news/list/y-combinator-startup-school-taipei-paxel-builders-22e78f94-en-keyName-afe51d6b) | YC founder path 第一道正式入口首度在地化；台灣早期 pre-seed 競爭結構潛在改變、YC 繞過當地 VC 階段可能性具體化 | 機會：直接進 YC batch 的通道對台灣全端工程師為上線首例；威脅：台灣早期創投可能失去 pre-seed 階段 top deal flow |
| Weta FX × TAICCA Taiwan AI screen production hub partnership 11/6 T+11 + Taipei Creative Content Fest + 聯合投資 / AI R&D / 人才培訓三軸 | [Variety — Weta FX & TAICCA partner](https://variety.com/2026/film/markets-festivals/weta-fx-taicca-partner-taiwan-ai-screen-production-hub-1236938968/) | AI 影視製片政策基座首度明朗、與 11/11 AI 新矽島 政策軌道互補；Weta FX 技術伙伴（Unreal / Houdini + AI pipeline）開啟 VFX pipeline SaaS 可切入點 | 機會：台灣首個國際級 AI 製片正式合作、solo dev VFX tooling niche；威脅：AI 製片 pipeline 需 cross-discipline、純 web / app solo dev 需學 3D / compositing 門檻 |
| Dataconomy 11/3 揭露 TaiEx 2026 漲幅 +50% 擠壓早期創投資金 + 熱錢排擠 VC + 台股「已上市股票」為主流選擇 | [Dataconomy — Taiwan AI stock boom squeezes early-stage startup funding](https://dataconomy.com/2026/11/03/taiwans-ai-stock-boom-squeezes-early-stage-startup-funding/) | 早期創業募資環境在 11 月續行惡化、2026Q4 / 2027Q1 pre-seed ticket size 預期縮小 | 機會：倒逼「bootstrap SaaS + revenue-first」路線為主流；威脅：純研發型 AI startup 現金流壓力顯著升高 |

## 🛠 新興 AI 工具

| 工具 | 類別 | 核心用途 | 定價 | 與主流替代品差異 | 採用建議 |
| ---- | ---- | -------- | ---- | ---------------- | -------- |
| Cloudflare Kitesurf[^kitesurf] | agent browser engine | AI agent 可 self-host 的網頁瀏覽後端（Workers-based） | 開源 Apache 2.0、Workers 免費層可跑 | 相較 Anthropic Claude Browser 需 cloud 計費 / Playwright 需本地 compute、Kitesurf 跑在 Cloudflare Workers edge 上免 cold start | solo dev AI agent 應用「網頁瀏覽」技術棧第三條路線、11/13 開源為上線訊號、本週內可 fork 做 PoC |
| Google AdMob for AI agents | ad ops × AI agent | 讓 Claude Code / Codex 直接幫 app 設 app ads + Gemini 內建 ad problem 修復 assistant | AdMob 本身免費、ad spend 另計 | 過去只有 Mintegral / Unity Ads 第三方 MCP server、AdMob 首度明文 agent-driven | ad-based 商業模式的 solo dev 可試 Claude Code setup flow；brand safety 疑慮待 Google 補充 target settings 錯誤 chargeback 流程 |
| MiniMax H3-Image launch discount 收尾 T-0 | 4K text-to-image | 16MP 高解析度圖像生成 + 本地 RTX 3090 56s per image | 16:00 UTC 前：4K $0.034 / Highspeed $0.065；16:00 UTC 後：4K $0.069 / Highspeed $0.130 | 相較 GPT-Image-2.6 Pixel Dojo 小樣本 benchmark 更勝自然度、Hugging Face weights 可下載本地部署 | 11/17 當日最後 arbitrage 窗口堆量 benchmark；11/18 後主流轉為「本地 + P-H3 蒸餾版 + ComfyUI 0.44.0」工作流 |
| Agents SDK（OpenAI、作為 Agent Builder EOL 的 migration 目標） | server-side agent framework | 從 Agent Builder export 的 scaffold 為基礎自建 server-side agent | 開源 MIT、API 用量正常計費 | 相較 Agent Builder 可視化 workflow / ChatKit hosted 整合，Agents SDK 為 code-first + 需自建 chat server | ChatKit 嵌入用戶：T-13 下週必起動 migration；Agent Builder workflow export 作為 scaffold、prompts / tool calls / 結構手工補完整 |
| Langfuse[^langfuse]（續列、Evals 替代主流） | LLM observability + eval | trace / eval / prompt management 一體化、OpenAI Evals EOL 遷移目標 | 開源 MIT 社群版免費、Pro $29–59/mo、可 self-host | 相較 Braintrust[^braintrust] 以 eval-first 定位、Langfuse observability 更完整；相較 LangSmith 綁 LangChain、Langfuse 框架無關 | OpenAI Evals 用戶：11/17 T-13 至 11/30 EOL 為 migration 窗口、dataset 本週內先匯出、Langfuse / Braintrust 二選一 |

## 💡 台灣個人可實作 SaaS 點子

### 點子 1：Cloudflare Kitesurf 11/13 開源 + Workers edge agent browser + 「agent-driven web automation」零成本 PoC playbook 🆕

- 痛點來源：Cloudflare 2026-08 首度 debut Kitesurf、11/13 開源 Apache 2.0 兌現承諾；對 solo dev「agent 要能瀏覽網頁」原本只有 Playwright（需本地 compute）+ Claude Browser（cloud 計費）兩條路、Kitesurf 為 edge 第三條；中文技術媒體對 Kitesurf 技術深度解析完全空白
- 目標客群（台灣／亞洲）：全端 solo dev（Node.js / TS stack、Cloudflare Workers 熟）、2026Q4 想試 agent-driven workflow 但不想付 cloud API fee 的 indie
- 技術複雜度：2.5/5——Workers edge 已熟者可 1 日內 fork Kitesurf repo、串本地 Claude Code agent 跑 PoC
- 預估 MRR：\$0（PoC 階段）；若轉為 SaaS 包裝「Kitesurf-as-a-service」目標市場為「不想自建 Cloudflare 帳號」的個人創業者、\$29–59/mo × 100 users = \$2.9K–5.9K MRR
- 競品弱點：Playwright 需本地 compute cold start、Claude Browser cloud 計費不透明、Puppeteer 無 agent 整合——Kitesurf edge + Apache 2.0 為 3 條差異化
- 切入建議：Day 1 fork Kitesurf GitHub repo → Day 3 搭 Workers 免費層 demo「Claude Code → Kitesurf → 讀取網頁 → 回傳 markdown」端到端；Day 7 寫中文技術 blog 卡位「Kitesurf vs Playwright vs Claude Browser 三者對比」為中文首篇；Day 14 社群 feedback 後決定是否轉 SaaS

### 點子 2：Nvidia T-0 + Anthropic T-1 + MiniMax T-0 同日三訊號 + 「台灣散戶 48h 連動 ADR / 台股供應鏈」情境分支 playbook SaaS 🆕

- 痛點來源：11/17 盤後 + 11/18 pricing 為「AI megatrend 擴大化 vs 修正」48h 關鍵視窗；台灣散戶複委託受限 US-only 發行條件、且中文技術媒體對「三訊號同週 anchor 情境分支」整合近零；多數台灣投資人靠 Yahoo 財經 / cnyes 片段式新聞、無系統化情境分析
- 目標客群（台灣／亞洲）：台灣散戶 + 複委託投資人（永豐金、富邦、國泰世華）、AI 相關個股配置者（TSMC、聯發科、緯創、技嘉）、2026Q4–2027Q1 想做 Anthropic ANT 配售的個人
- 技術複雜度：2/5——以中文 content 為主、每日 brief 自動化 Playwright 爬 10–15 個來源 + Claude Opus 寫 summary、ReactMarkdown + Tailwind 顯示為 static site
- 預估 MRR：\$0–3K（免費 brief + Patreon \$5–15 tier）、若轉付費 newsletter Beehiiv $5 user × 300 users = \$1.5K MRR；高峰在 Anthropic IPO 當週（11/18–11/22）為訂閱轉換窗口
- 競品弱點：Yahoo 財經為片段式新聞、cnyes 無情境分析、PressPlay 無針對台灣散戶 AI 配置 niche——「情境分支 + 48h 窗口 + 複委託具體 workflow」為 3 條差異化
- 切入建議：Day 0（即今日 11/17 晚間）PT 15:00 盤後 Nvidia Q3 Earnings → Day 1 早上中文 brief 推出「Nvidia Q3 vs Anthropic pricing above range」情境樹；Day 2（11/19 Anthropic 首日交易後）推出「11/19 開盤 + pricing above range → 台股供應鏈連動 Matrix」；Day 14 轉為週報形態、月費 $5 tier

### 點子 3：MiniMax H3-Image 折扣收尾 T-0 + 「本地 RTX 3090 + ComfyUI + P-H3 蒸餾」4K 圖像工作流 solo dev SaaS 🆕

- 痛點來源：11/17 16:00 UTC 後 MiniMax H3-Image API 恢復正價（4K 一張 $0.034 → $0.069 翻倍）；本地 RTX 3090 跑 P-H3 蒸餾版 56s per image + 45 GiB peak memory 可行；中文媒體對「API vs 本地 crossover 時點 + ComfyUI 0.44.0 workflow」具體內容空白；台灣 B2B 圖像應用（電商 banner、產品圖、部落格封面）過去靠 Midjourney 月費 + 手工調整
- 目標客群（台灣／亞洲）：台灣電商小店（Shopify / 91App）、內容創業者（Medium / Substack 中文圈）、擁有 RTX 3090 / 4090 顯卡的 developer freelance
- 技術複雜度：3.5/5——ComfyUI 0.44.0 + MiniMax P-H3 LoRA 整合 workflow 需熟 Diffusion pipeline、硬體含顯卡與散熱、Claude Code 可協助寫批次 Node.js API wrapper
- 預估 MRR：\$2–5K（\$29/mo × 100 users 或 \$0.10/image credit × 50K images/mo）；高峰在 11/18–12/31 的「API 恢復正價 → 本地 arbitrage」窗口
- 競品弱點：Midjourney 月費 $30 + 無 4K + 無 API；Replicate 以雲端 inference 計費 + 無蒸餾版；Nano Banana Pro 70% 貴於 MiniMax——「本地 + 4K + 蒸餾 + ComfyUI workflow bundle」為 4 條差異化
- 切入建議：Day 1（11/17）堆量 MiniMax discount API benchmark 3 類（人像 / 產品圖 / 風景）；Day 3 RTX 3090 本地跑 P-H3 蒸餾對 benchmark；Day 7 ComfyUI workflow YAML 匯出 + GitHub 公開；Day 14 轉為 SaaS「Taiwan 4K Image Pipeline」月費 \$29、附圖像素材庫 + workflow 模板

### 點子 4：Y Combinator Startup School Taipei 11/12 T+5 + Meet Taipei 11/19–21 + 「台灣全端工程師 YC founder path」導航 content SaaS 🔄

- 痛點來源：YC Startup School 首度進台北（11/12 T+5）+ Meet Taipei 11/19–21 全展 AI 主題 + Dataconomy 11/3「台股擠壓早期創投」+ TaiEx 2026 +50% + TiBOOST 創新板 tib-創 referral + AI 新矽島 政策 11/11——「台灣全端工程師如何在 2026Q4 走上 YC / 創新板 / 國發會補助三條路徑」中文整合導航完全空白；多數 solo dev 靠 Twitter / 分散部落格片段資訊
- 目標客群（台灣／亞洲）：全端工程師（TS / Node / React / 雲端）、2026Q4–2027Q1 想從「副業 side project → 全職 founder」轉換的個人、過去主要靠日本 / 新加坡亞洲 VC 管道而非 YC
- 技術複雜度：1.5/5——中文長文 content 為主、site 用 Astro / Next.js、可內嵌 YC application timeline / 創新板上市條件 / AI 新矽島 申請流程 interactive table
- 預估 MRR：\$0–2K（免費 content + Patreon \$5 tier + 專屬 YC batch 互助 Discord \$15 tier）；高峰在 Meet Taipei 11/19–21 + YC Winter 2027 batch application window 1–2 月 2027
- 競品弱點：StartupIsland.tw 為國發會官方、不適合深度輔導；AppWorks 為台灣本地 accelerator、不等於 YC；PressPlay 多為技術內容、不碰創業——「YC 入口 + 創新板 + 國發會補助」3 路徑整合比對為差異化
- 切入建議：Day 1 盤點 Paxel / Builders 等台灣 YC 校友 2024–2026 batch 名單 + 可公開訪談；Day 3 中文首篇「台灣全端工程師 YC founder path vs 創新板 tib-創 vs 國發會補助 三路徑比對表」；Day 7 Meet Taipei 現場採訪 + 5–10 份 YC application draft 快速 feedback；Day 14 轉 content hub + Discord 社群

## 🧰 工具堆疊更新

- **Google AdMob 11/16 開放 AI agent setup**：對 ad-based 商業模式的 solo dev 影響顯著、Claude Code / Codex 具名首度進入 vendor 文檔；對 brand safety 疑慮：agent 錯設 target 導致 CTR 崩潰時的 chargeback 流程 Google 尚未明示、建議仍以「agent 起草 + 人工 review 最終 setup」為當前標準工作流
- **Cloudflare Kitesurf 11/13 開源**：Workers-based agent browser 為「self-host agent web automation」零成本第三路徑；Playwright + Claude Browser 二分格局打破；建議 solo dev 本週內 fork repo 做 PoC、寫中文 blog 卡位
- **MiniMax H3-Image 11/17 16:00 UTC 折扣收尾**：11/18 後主流策略為「本地 RTX 3090 + ComfyUI 0.44.0 + P-H3 蒸餾版」；「API 恢復正價 → 本地 arbitrage」窗口在 11/18–12/31；social media 圖像批量生成的 solo dev 建議完成硬體決策
- **OpenAI Agent Builder → Agents SDK migration**：T-13 剩 9 工作日（Thanksgiving 前）；migration 路徑確認為「advanced ChatKit integration + 自建 server-side agent + Agents SDK scaffold 手工補完整」
- **Langfuse / Braintrust（OpenAI Evals EOL migration）**：Evals 10/31 轉 read-only 第三方口徑官方無確認、建議仍以 dataset 本週內先匯出為保險動作；Langfuse Pro $29–59/mo + self-host 為 solo dev 首選、Braintrust 以 eval-first 需洽談為大 team 首選

## ⚡ 今日行動建議

- [ ] **今晚（11/17 21:00–24:00 台北）設鬧鐘**：Nvidia FY2027 Q3 Earnings 17:00 ET（約台北 06:00 11/18）發布前 48h 準備好「情境 A（beat + guidance 續強）／ B（beat + guidance 毛利率走低）／ C（miss）」三情境摘要模板、盤後第一時間 15 分內中文發佈（成本：準備 2h / 盤後 15 分發布；產出：「Nvidia T-0 + Anthropic T-1 + MiniMax T-0 同日三訊號」整合中文首篇）
- [ ] **Day 0 fork Cloudflare Kitesurf repo**（成本：\$0、Cloudflare Workers 免費層；產出：「Claude Code → Kitesurf → 讀取網頁 → 回傳 markdown」端到端 PoC + 中文技術 blog 首篇卡位）
- [ ] **今日 23:59 UTC 前執行 MiniMax H3-Image discount 最後堆量**（成本：\$5–20 API spend；產出：人像 / 產品圖 / 風景三類 4K benchmark 樣本庫 + 11/18 本地 P-H3 蒸餾對照 benchmark 材料）
- [ ] **下週一（11/23 一）前備好 Meet Taipei Startup Festival 11/19–21 pre-outreach 名單**（成本：2h research + 2h 寫 outreach；產出：3–5 名 target investor 現場互動時段 + 1–2 份 pitch deck draft）
- [ ] **本週四（11/19）前 OpenAI Evals dataset 匯出 + Agent Builder workflow 手動備份**（成本：1–2h；產出：若 OpenAI 11/30 EOL 執行續不透明、dataset 本地保險 + migration 到 Langfuse 第一步完成）
- [ ] **本週五（11/20）前觀察立法院中小微企業條例進度 + 若無媒體進展則啟動「2027Q1 作為申請起點」情境準備**（成本：0.5h 每日追蹤；產出：若觀察窗流失 → R&D 支出帳務切割 2026 vs 2027 的會計準備動作）

## ⏳ 待觀察

- **Nvidia FY2027 Q3 法說實際結果（11/17 盤後 → 11/18 開盤）**：營收 vs 共識 $108.80B、EPS vs $2.47、Q4 財測毛利率；若 Q4 guidance 毛利率顯著低於 74% → 「需求續強但利潤率結構性受壓」雙訊號確認；若營收超越共識 2% 以上 → Anthropic 11/18 pricing above range 機率同步升高
- **Anthropic pricing day 11/18 T-1 結果**：pricing 於 $70–78 vs above range vs 延後；若 above range → Claude Pro 中期定價壓力 2027 上半年升高情境具體化
- **MiniMax H3-Image 11/17 16:00 UTC 後定價是否調整**：MiniMax 聲明「不是固定單價」留下調價彈性、恢復正價後 1 週（11/18–11/24）內是否微調；本地 RTX 3090 部署 1 週使用者回饋 + 第三方 reproducible head-to-head benchmark 首發訊號
- **Cloudflare Kitesurf 11/13 開源後社群採納**：GitHub stars 1 週後 vs 2 週後 trajectory、第三方 agent framework（LangGraph、CrewAI）是否整合 Kitesurf 為 default web backend；Cloudflare 官方是否 11 月底發布 benchmark vs Playwright
- **Google AdMob AI agent setup 完整文檔公布**：brand safety 疑慮（target 錯設 chargeback 流程）Google 是否明文回應；Gemini ad problem assistant beta → GA 時程
- **OpenAI Agent Builder EOL T-13 → T-0**：11/17 → 11/30 內是否補發 workflow graph export 工具；ChatKit workflow ID 嵌入 11/30 後是否續跑 OpenAI 明確答覆；Evals read-only 第三方 10/31 口徑官方確認
- **立法院中小微企業條例第二觀察窗 11/17–11/21**：Day 1（11/17）→ Day 5（11/21）內若仍無媒體進展 → 11 月通過實質確定作廢、2027Q1 作為申請起點
- **金管會 9 項子法 40 日公告期 T-27 → T-13**：第 15 日 → 第 28 日；是否有 solo dev 聯盟 / 中小企業商業公會集體發函反映過渡期短 / 3 億資本門檻過高
- **Cursor BYOK bug T+3 修復**：staff 內部「bug vs by design」口徑是否 11 月底前收斂；Composer 3 / Vega release date 是否 12 月發布
- **Supabase + Turso 整合 T+45 → T+60 無新訊號**：Supabase 是否 11 月底 / 12 月補發整合技術細節；Turso 現有用戶定價 / API 延續性
- **iPhone Duo 第二個完整工作週（Day 25–29）vs 第一個工作週（Day 18–22）回收價差**：Day 29（11/20）為第二個完整工作週首次可對照 anchor；傑昇 11 月整體回收量 MoM 趨勢
- **TSMC 11 月營收 12/10 公告 T-23**：11 月 YoY 若收斂至 +40–50% → AI megatrend 擴大化敘事修正；若續強 +55–60% → 續強敘事確認
- **Meet Taipei Startup Festival 11/19–21 現場 angel 密度實測**：Dataconomy「台股 +50% 擠壓創投」觀察的現場驗證；現場 pitch session 平均 ticket size 落點
- **Y Combinator Taipei 11/12 T+5 → T+30 後續活動**：YC 是否 12 月 / 2027Q1 在 Taipei 設固定 office hours；YC Winter 2027 batch 台灣申請數 vs 2026 batch trajectory
- **Weta FX × TAICCA 合作 11/6 T+11 → 具體落地第一個專案**：聯合投資第一波名單是否 11 月底 / 12 月公布；AI R&D 投入 artist 名額與人才培訓課程時程
- **Dataconomy 11/3 台股擠壓創投敘事續行**：11 月中下旬是否出現 pre-seed 冷場具體案例、2026Q4 整體台灣 pre-seed deal count YoY 落點
- **Vercel AI SDK 7 HarnessAgent GA**：自 6/25 experimental canary 已滿 T+145；若 11 月 GA 將改變「TS Agent 底層 2 強」對決格局；官方文件仍標記 experimental canary

[^nvidia]: Nvidia（輝達）為全球 AI 訓練 / 推論資料中心 GPU 市場主導廠商（2026 Q3 市佔估逾 80%），Blackwell 架構 B200 / GB200 為本波主力 SKU；FY2027 Q3 公司自提財測 $108B ±2% 已排除中國資料中心貢獻，Q4 毛利率受 HBM3e / HBM4 記憶體漲價續走低情境續行。

[^hyperliquid]: Hyperliquid 為 Layer-1 鏈上永續合約交易所，支援未上市公司股票代幣化的 pre-IPO perpetuals；其 Anthropic 永續合約 11/13 掛牌 $101，較 S-1 招股區間上緣 $78 溢價約 30%，被視為次級市場對一級定價區間的暗示訊號，但流動性與價格發現機制與正式 IPO 不同，不宜直接推論定價。

[^minimax]: MiniMax 為中國 AI 新創（上海）、海外註冊於開曼，旗下 Hailuo（視訊）與 H3 系列（圖像 / 文字）為主力產品；H3-Image 為 16MP 開源 text-to-image 模型、2026-11-10 開源權重至 Hugging Face、11/17 16:00 UTC 結束為期 7 日的 50% launch discount，正式價 4K 一張 $0.069（標準）/ $0.130（Highspeed）。

[^kitesurf]: Kitesurf 為 Cloudflare 基於 Workers edge 平台打造的 AI agent browser engine，2026-08 首度 debut、2026-11-13 以 Apache 2.0 開源至 GitHub；相較 Playwright（本地 compute）與 Anthropic Claude Browser（cloud 計費），Kitesurf 跑在 edge 上免 cold start、Workers 免費層可跑小型 agent prototype。

[^langfuse]: Langfuse 為開源 LLM observability 平台，支援 trace、eval、prompt management 一體化，社群版 MIT 免費、Pro $29–59/mo，可 self-host；2026-01 收購 ClickHouse 後後端資料層走向開源可自架，是 OpenAI Agent Builder / Evals EOL 後的主流遷移目標之一。

[^braintrust]: Braintrust 為 eval-first LLM 開發平台，強調 eval-gated pipelines 與 dataset 版本管理，定價未公開需洽談；常與 Langfuse 這類 observability 工具混搭形成「observability + eval」組合，屬 OpenAI Evals read-only 後的常見替代方案。

[^greenshoe]: Greenshoe（超額配售權 / over-allotment option）為美股 IPO 慣例條款，允許承銷商於定價後 30 天內以發行價再加購最多 15% 股份、用以穩定開盤股價；Anthropic 本次 S-1 揭露原始 825M 股 + greenshoe 123.75M 股即為此結構，若上調定價區間則 greenshoe 行使價同步上升。

## 📚 引用來源

1. [OANDA — NVIDIA Q3 earnings preview November 2026](https://www.oanda.com/uk-en/skills-and-insights/education/trading-asset-classes/shares/nvidia-q3-earnings-preview-nov-2026/) — 2026-11
2. [Mondeum Capital — When Does Nvidia Report Earnings Fiscal Q3 2027](https://mondeumcapital.co.uk/knowledge-hub/when-does-nvidia-report-earnings-fiscal-q3-2027-date-guidance-and-expected-move/) — 2026-11
3. [TradingKey — Nvidia Q3 Earnings Preview AI Chip Deliveries CEO Transition](https://www.tradingkey.com/analysis/stocks/us-stocks/262306518-nvidia-q3-earnings-ai-chip-delivery-ceo-transition-tradingkey) — 2026-11
4. [betafinch — NVIDIA Fiscal 2027 Q2 Data Center Revenue 89B Q3 Guided 108B](https://betafinch.com/blog/nvidia-fiscal-2027-data-center-guidance) — 2026-11
5. [Yahoo Finance — Anthropic Sets IPO Price Range 70 to 78 1.4 Trillion](https://finance.yahoo.com/markets/stocks/articles/anthropic-sets-ipo-price-range-140602411.html) — 2026-11
6. [CNBC — Anthropic sets IPO price range 70 to 78 November 19 trading](https://www.cnbc.com/2026/11/10/anthropic-sets-price-range-of-70-to-78-in-upcoming-ipo.html) — 2026-11-10
7. [CNBC — Anthropic IPO guide price range date](https://www.cnbc.com/2026/11/16/anthropic-ipo-date-price-range.html) — 2026-11-16
8. [TradingKey — Anthropic IPO Can ANT Price Above 78 November 14 2026](https://www.tradingkey.com/analysis/stocks/us-stocks/262304476-anthropic-ipo-ant-price-above-78-orders-six-times-november-14-2026-tradingkey) — 2026-11-14
9. [TradingKey — Anthropic IPO Nears Claude Maker Nasdaq November 19](https://www.tradingkey.com/analysis/stocks/us-stocks/262306494-anthropic-ipo-claude-developer-set-debut-nasdaq-tradingkey) — 2026-11
10. [FourWeekMBA — MiniMax Prices 4K Images 29 Percent Google Nano Banana Pro](https://fourweekmba.com/ai-minimax-prices-4k-images-at-29-of-googles-nano-banana-pro/) — 2026-11
11. [Segmind — MiniMax H3 Text to Image Pricing](https://www.segmind.com/models/minimax-h3-text-to-image/pricing) — 2026-11
12. [OpenAI ChatKit Guide](https://developers.openai.com/api/docs/guides/chatkit.md) — 2026-11
13. [OpenAI Community — Deprecation notice Agent Builder](https://community.openai.com/t/deprecation-notice-agent-builder/1382650/1) — 2026
14. [MCP Directory — OpenAI winding down Agent Builder Evals migration guide](https://mcp.directory/blog/openai-agentkit-deprecation-2026) — 2026
15. [Cloudflare Kitesurf open-source agent browser GitHub](https://betanews.com/article/kitesurf-browser-engine-open-source/) — 2026-11-13
16. [TheNextWeb — Google AdMob lets AI agents like Claude Code set up app ads](https://thenextweb.com/news/google-admob-ai-agents-claude-code-codex-ask-admob) — 2026-11-16
17. [Variety — Weta FX and TAICCA Partner Taiwan AI Screen Production Hub](https://variety.com/2026/film/markets-festivals/weta-fx-taicca-partner-taiwan-ai-screen-production-hub-1236938968/) — 2026-11-06
18. [Dataconomy — Taiwan AI Stock Boom Squeezes Early-stage Startup Funding](https://dataconomy.com/2026/11/03/taiwans-ai-stock-boom-squeezes-early-stage-startup-funding/) — 2026-11-03
19. [bit.fan — Y Combinator Startup School Taipei Paxel Builders](https://www.bit.fan/en/news/list/y-combinator-startup-school-taipei-paxel-builders-22e78f94-en-keyName-afe51d6b) — 2026-11
20. [ACE — Meet Taipei Startup Festival 2026](https://ace.sg/gem-events/meet-taipei-startup-festival-2026/) — 2026-11
21. [Sparknify — Taiwan Center Stage TechCrunch Disrupt 2026 Physical AI](https://www.sparknify.com/post/20261015-taiwan-at-techcrunch-2026-en) — 2026-10-15
22. [e27 — Taiwan Pavilion SWITCH 2026 33 Taiwanese Startups Singapore](https://e27.co/taiwan-pavilion-at-switch-2026-meet-the-33-taiwanese-startups-heading-to-singapore-20261022/) — 2026-10-22
23. [TSMC October 2026 Revenue Report](https://pr.tsmc.com/english/news/3349) — 2026-11-10
24. [TSMC SEC Form 6-K FY2026 November Filing](https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000796/tsm-revenue20261110.htm) — 2026-11-10
25. [CryptoBriefing — TSMC forecasts Q4 revenue jump up to 61 percent](https://cryptobriefing.com/tsmc-q4-revenue-forecast-record-q3-profit/) — 2026-10
26. [InvestingCube — TSMC October Revenue 59.7 can chipmaker beat Q4 forecast](https://www.investingcube.com/shares/tsmc-october-revenue-jumps-59-7-can-the-chipmaker-beat-its-q4-forecast/) — 2026-11
27. [Cursor Forum — Composer 2.5 fails with BYOK 164176](https://forum.cursor.com/t/composer-2-5-fails-with-byok/164176) — 2026-11
28. [Cursor Forum — Bug Composer 2.5 explicitly selected requests blocked OpenAI BYOK 162152](https://forum.cursor.com/t/bug-composer-2-5-explicitly-selected-requests-blocked-when-openai-byok-key-is-active/162152/23) — 2026-11
29. [Cursor Forum — Composer 2.5 extremely slow after client update 167376](https://forum.cursor.com/t/composer-2-5-extremely-slow-after-cursor-client-update-switching-models-only-temporarily-helps/167376) — 2026-11
30. [TRM Labs — Unpacking Taiwan's Virtual Asset Service Act](https://www.trmlabs.com/resources/blog/unpacking-taiwans-virtual-asset-service-act-what-crypto-and-stablecoin-issuers-need-to-know) — 2026
31. [Lee and Li — Taiwan Virtual Asset Service Act Newsletter](https://www.leeandli.com/EN/NewslettersDetail/7658.htm) — 2026
32. [The Block — Taiwan passes key crypto law digital asset sector](https://www.theblock.co/post/406816/taiwan-passes-crypto-law) — 2026-07-01
33. [Executive Yuan — 中小微企業轉型升級發展條例 cabinet presentation](https://www.ey.gov.tw/File/2EAFB13BE953C684?A=C) — 2026-10-08
34. [Taipei Times — Premier Cho SMEs Startups Bill Legislative Yuan September](https://www.taipeitimes.com/News/taiwan/archives/2026/09/11/2003864074) — 2026-09-11
35. [傑昇通信 — iPhone Duo 回收價表](https://www.jyes.com.tw/recycle/Apple-iPhone-Duo) — 2026-11
36. [LogRocket — AI dev tool power rankings November 2026](https://blog.logrocket.com/ai-dev-tool-power-rankings/) — 2026-11
37. [Anthropic — Introducing Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7) — 2026
