今天想聊三條彼此沒有直接關係、卻同時都在 6 月 17 號這天爆出來的大新聞，再帶兩個比較小但同樣值得放在追蹤清單的訊號，最後幫你整理今晚睡前可以動手的幾件事。

先講第一條，Anthropic 正式在首爾開辦公室，這是他們在亞太地區繼東京、班加羅爾之後的第三個據點，由前 Snowflake 韓國總經理 KiYoung Choi 出任 Representative Director。但重點不是「他們開了一間辦公室」，而是同一天宣布的合作夥伴清單，幾乎等於把整個南韓財閥圈一次收編。NAVER 整個工程組織全面導入 Claude Code，Samsung SDS 把 Claude Cowork 跟 Claude Code 推給三星電子內部使用，LG CNS 變成 LG 集團的 Claude 通路，Nexon 用 Claude Code 來做 live-service 遊戲開發，Hanwha Solutions 走 AWS Bedrock 在地部署，連 Channel Talk 這種服務超過 23 萬商家的客服平台，也把 Claude 接進產品線。另外還跟韓國科學技術部簽了 AI safety 的合作備忘錄、提供 Claude 給 KAIST、延世、浦項、高麗大學總共 60 位研究者。

簡單說，這是亞洲第一次出現「整個鄰國市場被 Claude 收編」的直接訊號。如果你是台灣的 indie SaaS，這件事的意義是，下一輪你跟台積電、鴻海、廣達、台塑這些大廠的供應鏈 vendor 對話時，他們的韓國同行已經全面 Claude Code 化，這個壓力會傳下來。所以與其再去賣「我們用 GPT 包了一層」這種定位，不如開始把「Claude Code 一到兩週導入 productized 顧問服務」、或者「韓國台灣跨境企業 Claude 流程整合」當成新切角。

第二條更刺激一點，叫做 @mastra npm scope 在 88 分鐘內被一次性植入 142 個後門包。整個時間線是這樣，UTC 時間 6 月 17 號凌晨一點十二分到兩點三十九分，一個叫 ehindero 的 contributor 帳號被劫持，然後自動化地把整個 @mastra scope 底下的 142 個包重新發佈，全部塞進一個叫 easy-day-js 的相依套件。這個 easy-day-js 是 dayjs 的 typosquat，名字看起來很正常，但安裝的時候會跑 postinstall hook，跨 Windows、Mac、Linux 三個平台 drop 一個兩段式的 info stealer，瞄準 wallet 私鑰跟各家 AI provider 的 API key，跑完之後還會自刪。

問題的規模有多大？@mastra/core 自己一週下載量大概 91 萬 8 千次，整個 scope 一週超過 110 萬次下載暴露在風險裡。微軟、StepSecurity、Socket、Orca、Snyk 全部都已經把這個攻擊歸因到北韓 Lazarus 旗下的 BlueNoroff，也就是 Sapphire Sleet。所以這集對你的意義非常直接，只要你 6 月 17 號之後跑過 npm install、而且專案有用到 @mastra 任何一個包，你都該假設你的開發機跟 CI runner 上的 token 已經外洩，今晚就去輪替所有 LLM provider key、AWS IAM、加密錢包私鑰，不要拖。

第三條是 Odyssey 拿了 3 億 1 千萬美金 Series B，估值 14.5 億，由 Natural Capital 領投，Amazon、AMD Ventures、GV、EQT、IQT 都跟。天使陣容很狂，Jeff Dean、Garry Tan、Vercel 的 Guillermo Rauch、Elad Gil、Cruise 的 Kyle Vogt 都進來。創辦人 Oliver Cameron 跟 Jeff Hawke 都是自駕老兵，從 Cruise 跟 Wayve 出來。

但 Odyssey 不做 LLM。他們做的是 world model，意思是訓練一個能模擬物理、因果、環境動態的 foundation model，目標市場是機器人、遊戲、醫療影像、教育、科學模擬、國防。這次募資還有一個很有意思的細節，AWS 變成他們的 preferred cloud，而且明確會用 Trainium 來替代部分 NVIDIA。這代表 world model 第一次從研究階段走到商業化，indie 第一次有「不靠語言模型也能做 AI 應用層」的選項。如果你在做遊戲、VR、AR、教育模擬，現在就該去申請 research access、開始想接 Unity 或 Unreal plugin 的可能性。

講完三條主線，再帶兩個比較次要但別忽略的訊號。一個是 Anthropic 成為第一家加入 Frontier 碳移除聯盟的 AI 新創，跟 Google、Stripe、Meta、Salesforce、Shopify、麥肯錫一起新注入 9 億 1 千 5 百萬美金，Frontier 總規模翻倍到 18 億。策略也變了，現在是「砸大專案、要能年除 1 Gigaton CO2 的才投」，技術涵蓋海洋鹼化、生物質移除、強化岩石風化、直接空氣捕捉。對 indie 來說，這意味著賣 SaaS 給有 ESG KPI 的歐洲跟日本企業時，沒有自家碳承諾會變成新的 churn 原因，這是接下來一年慢慢會壓上來的趨勢。

另一個訊號是 Devin Desktop，也就是改名前的 Windsurf。從 6 月 2 號開始，Cognition 把 Agent Client Protocol、簡稱 ACP，內建進去當預設介面。Codex、Claude Agent、OpenCode 全部可以 plug-in，預設介面也從傳統 editor 改成 Kanban 風格的 Agent Command Center，讓你同時管本機跟雲端 agent。MCP 是 agent 對工具、A2A 是 agent 對 agent、AG-UI 是 agent 對 UI，現在 ACP 是第四個 agent 開放協定，戰場正式打到 IDE 殼層。如果你已經受夠在不同 IDE 之間切換 agent，這禮拜花 30 分鐘試 Devin Desktop free 版很值得。

重點是，今晚有三件事你可以馬上動手。第一，跑一次 grep 在所有 lockfile 找 easy-day-js，如果中了就立刻輪替所有 API key 跟 wallet key。第二，花 45 分鐘寫一頁「亞洲企業 Claude Code 導入 readiness」的說帖，下週就能拿去談 PoC。第三，花半小時試 Devin Desktop 跟 ACP，記下你願意付 Pro 二十美金的三個理由、或不付的三個理由。Odyssey 跟 Frontier 短期不用做事，但都該放進你的月度追蹤清單。今天就到這邊。
