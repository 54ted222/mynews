今天想聊的是 9/20 週日這一天，六條主線疊在一起，把秋季的敘事窗收得很緊。

先從蘋果講起。今天是 iPhone 18 Pro 交機的 T+2、也就是週末的最後一天。過去三天，Taipei Times、Digitimes、Focus Taiwan 三家獨立來源都用同一組訊號回聲：Chunghwa 排隊取貨、多通路售罄、顏色需求分岔——冰川藍拿到 46%、勃根地紅 26%。這種 T=0、T+1、T+2 三日連續驗證，等於把「Pro 是 Q4 主升段、Duo 是分眾探索」這條雙軌敘事釘進市場記憶。

順著這條線接下去，就是 iPhone Duo 台灣預購倒數 T-26。這裡有個新訊號值得記：Taiwan Mobile 會在 10/16 晚上 8 點開首發預購，但 Chunghwa 一直要等到 10/23 才開賣，兩軌通路落差首次明確。價錢 NT$74,900 起、頂規 2TB 到 NT$118,900，顏色只有 Star White 跟 Night Sky 兩色。TrendForce 估 2026 年賣 500 萬台、拿下折疊機市佔 24.8%，聽起來不小，但這個上限主要卡在鉸鏈短缺，是結構性天花板不是需求問題。

再來聊模型端。Cognition 的 SWE-2 免費倒數，今天剩 T-20、也就是 20 天。10/10 是 Desktop 跟 CLI 通道的免費截止日，不含 cloud。這個模型是拿 Kimi K3 做 post-training、宣稱比同級 frontier 便宜 70%，KingBench 3 拿 83.75%，領先 DeepSeek V4.1 Flash 的 81.25%。不過最大採用阻礙沒解決：per-token 定價至今沒公布。所以獨立開發者能做的事就是把握剩下 20 天，用零成本 A/B 的方式跟 Fable 5.1、Sonnet 5、GPT-6 Astra、Gemini 3.8 Flash、Cursor Composer 2.5 一起跑 shadow eval，10/10 定價浮出來再決定要不要 rebase。

再來，Grok 4.7 今天是 T+8。Musk 9/2 在 X 上放話「10 天內釋出」，9/12 目標日已過整整八天，可是 xAI 開發者文件到今天為止還是把 4.6 列為最新版，沒有 model ID、沒有 pricing、沒有 benchmark card。所謂 2.1 兆參數、SpaceX 工程資料訓練，全部停留在 leak 傳言。這個 pattern 跟 Cursor Composer 3 Vega 拖了 90 天完全一樣：口頭承諾、leaked spec、沒有 confirmed release。簡單說，這變成 2026 年兩大 vaporware 標本，紀律就一句話：不 rebase 工作流。

換一條，Gemini 3.8 Flash。定價維持 $0.75 input、$3.75 output，跟 3.7 Flash 一樣。重點是 Google 六週內連發三次 Flash，這是明確的頻率武器。Google 對這一版的定位是「最聰明的 workhorse」，主打軟體工程、agent 任務、多步驟推理，配合 Antigravity IDE、AI Studio、Enterprise Agent Platform、Cloud 四個入口，等於把開發者生態圈起來。所以台灣 indie SaaS 的 router 選型就變成六軸：Sonnet 5、GPT-6 Astra、Gemini 3.8 Flash、Fable 5.1、Grok 4.6、SWE-2 分工，做一份 task-fit 決策儀表板去 pitch Devin 跟 Cursor 訂閱團隊。

不過 Edge Compute 三強今天也定型了。Cloudflare Workers 冷啟動小於 5 毫秒、330 個城市節點、每百萬請求 $0.30、沒有 per-seat 費，是成本敏感選項。Vercel 靠 Fluid Compute 對 React SSR 有 1.2 到 5 倍效能優勢、Pro 每 seat $20，Next.js DX 最好。Fly.io 每月最低 $5、Docker 型態，適合要 runtime 全控的團隊。三軸差異一句話：Next.js 選 Vercel、成本敏感選 Cloudflare、想控 runtime 選 Fly.io。

順著這條線再多補一條 MCP Registry preview 的訊號。Registry 現在是 MCP servers 的 single source of truth，同時支援私有 sub-registry。配合 2026-07-28 spec 的 stateless core、Extensions、Tasks、MCP Apps 四大結構性改動，等於給台灣 SI 一個新的 pitch 軸：私有 sub-registry 加 MCP Apps 加非中國廠牌，可以直接對接商業服務業 10 萬案的資安條款。

最後兩條台灣本地的收尾。商業服務業 AI 導入 10 萬案今天是 T-30，剩五週衝刺。名義截止日 10/20，但補助經費用罄會提前結案。三軌配置：單店 10 萬、多店 300 萬、整合 2000 萬。條款寫「絕對不得採購中國廠牌」，等於 DeepSeek、阿里、百度全部出局，這反而給 MODA 主權 AI 語料庫一個天然搭配位置。MODA 今天 T+5，語料庫從 6 月 6 億 tokens 長到 8 月 22 億、成長 3.6 倍，7 個工作日審核 = 9/26 週五拿到授權，正好可以週末啟動 fine-tune。

再來就是中秋 9/25 的 T-5，也是週日轉單的最後一個窗口。週六 T-1 是出貨 SLA 截止日、週一 T-4 是最後可以跑 outbound 的執行日。通路排序：蝦皮 MAU 12.5 百萬、市佔 38%，momo 98 萬 MAU、31%，PChome 62 萬 MAU、12%，酷澎 99 萬 MAU 已經超越博客來。今天要做的五個錨點：禮盒頁、LINE 名單再喚、客服 SLA、出貨規則、節後回購。

重點是這樣：週日這一天把六條線疊在一起看，會發現它們共同壓在同一個五週窗口——蘋果供應鏈 Q4、模型 router 六軸、Edge Compute 三強、MCP Registry 新軸、商業服務業 10 萬案加中秋轉單。獨立開發者要做的不是全押，而是挑一到兩條敘事做深，把 pitch 完稿放到週一 outbound 名單上。SWE-2 免費 20 天、MODA 授權 7 天、中秋 5 天、商業服務業 30 天，四個倒數計時器同時在跑，紀律就是別讓時間白過。Grok 4.7 這種 vaporware 就當背景雜訊，不 rebase。就這樣。
