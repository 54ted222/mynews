今天想聊的，是過去 24 小時 AI 圈一連串反轉。最重要的一件，是 Anthropic 在 6 月 15 日當天，把原本要上線的 Agent SDK 雙池計畫，直接撤回了。簡單說就是，原本講了好一陣子的「Pro、Max、Team、Enterprise 訂閱用戶，從 6/15 起 Agent SDK、`claude -p`、第三方 app 全部要走獨立的 20、100、200 美金月度 credit pool」這套架構，當天就被 Anthropic 自己叫停。所有 surface 維持原狀，繼續吃訂閱共用的 quota，沒有獨立 pool、沒有 overflow billing。

這件事我昨天的 brief 寫成「6/15 上線 24 小時觀察」，是錯的，必須當面訂正。The New Stack、The Decoder、Digital Applied 三家獨立報導，事件時序是一致的：6/15 當天 Anthropic 公告暫停。

那為什麼會撤回？把三家分析合起來看，是三股力量同時壓過來。第一股是 6/12 BIS 對 Fable 5 和 Mythos 5 的出口管制——這時候再對自家訂閱用戶單方面加價，政治上是站不住腳的，會讓「Anthropic 在政府最敏感的時刻擠開發者」這個標籤直接貼上來。第二股是 OpenAI 那邊。華爾街日報報導 OpenAI 正在考慮 token 大幅降價發動價格戰，再往前一點，5/13 Codex 推出「Switch to Codex 免費兩個月」，Anthropic 6/9 反手在 Claude Code 把週用量上調 50%、效期到 7/13——這是一場已經開打的價格戰，在這個節骨眼推雙池，等於把客戶推給對面。第三股是 IPO，Anthropic 12/15 要 roadshow，這時候不能背「向開發者單方面漲價」的故事。所以三股壓力下，Anthropic 選擇撤回。

對 indie 來說，這件事的衝擊是直接的。過去七天所有跟「6/15 雙池 spend cap watchdog」、「overflow billing audit」、「雙池計帳 SaaS」相關的內容、landing page，今天起 48 小時內全部要改寫。題目從「加價監控」翻成「Anthropic 在價格戰節制 indie 預算的敘事」。中文社群這條敘事的供給接近零。再來，昨天的 brief 看過的客戶，今天要主動發一封訂正信，附上一頁 Anthropic 對 OpenAI 6 月價格戰的 timeline——這封信本身就是高 inbound 的觸發點，是公信力資產。

接下來聊 Fable 5。事件已經進入 Day 6，內幕大爆。先講三條人物線。第一條是 Amazon CEO Andy Jassy。Fortune、TheNextWeb 和 MLQ 三家報導指向同一件事：Amazon 內部研究員測試 Fable 5 時，發現可以提取被用於 cyberattack 的資訊。Jassy 親自把這件事報告給 Treasury Secretary Scott Bessent，以及其他白宮官員。Amazon 是 Anthropic 最大投資人，這層關係讓事件變成「內部翻牆」——投資人直接捅給政府，這在 AI 治理史上是少見的場景。第二條是 Commerce Secretary Lutnick，在 Fox Business 上公開定性，說 Anthropic 對 vulnerabilities 回應的「recklessness」損害了它和政府之間的信任。報導也提到，行政部曾私下要求 Anthropic 延後發布，但 Anthropic 拒絕。第三條是 David Sacks，前白宮 AI czar，他加碼說「一位 Anthropic 與美國政府高度可信的合作夥伴」在測試時發現 jailbreak，並指控「一個中國組已存取 Fable 5」。Anthropic 的官方回應，是把這些定性為「a small number of previously known minor vulnerabilities」。

預測市場怎麼讀？Kalshi 大約 58%、Polymarket 落在 67 到 81% 之間，押的是 7/1 之前 Fable 5 對美國用戶恢復存取。不過綁定更早日期的合約機率明顯偏低，所以市場其實已經把節奏從「天 vs 週」往後挪到「至少兩週起跳」。對 indie 的影響是 SLO 條款要升級——過去寫「24 小時 fallback」，現在改成「30 天 fallback 加上月度 model availability 報告」。同時，賣 BIS 政策 weekly briefing 的 newsletter，首期主題就成型了：Amazon 內部翻牆、Lutnick recklessness、Sacks 中國組敘事，三方政府信任資產負債表——中文供給零。

再來談 SPCX。6/16 是 SpaceX 上市第三個交易日，盤中 +13%、收近 207 美金、+7.7%。從 6/12 IPO 的 135 美金算起，三天累積上漲 53%。Bloomberg 報盤中市值一度逼近 2.9 兆美元——而 Amazon 大約是 2.7 兆，SPCX 即將超車，成為全球市值第 5 大公司，僅次於 NVDA、MSFT、AAPL、GOOG。S-1 揭露的關鍵數字沒變：Anthropic 月付 12.5 億美金到 2029 年 5 月，Google 月付 9.2 億美金到 2029 年 6 月，SpaceX 年化的 contracted compute revenue 是 260 億美金。

這條 narrative 對 indie 的意義是 reframe。過去寫「Anthropic compute 是壓力源」，現在要改寫成「Anthropic 的 compute 雙保險 contracted 到 2029，是可信賴的供應鏈」。SPCX 三天 +53% 等於市場連續三日投票，把 Anthropic 和 Google 的 compute moat 估值反向加碼。賣中型企業 vertical SaaS 的人，可以把這條當成客戶採購提案的新一頁。

然後是 Antigravity CLI。明天 6/18，Google 對 consumer 通道——Google AI Pro、Ultra、Gemini Code Assist for individuals——正式 hard cut Gemini CLI，倒數一天。替代品是 Antigravity CLI，一個叫 `agy` 的 Go binary，封閉原始碼，加上 Antigravity 2.0 的桌面 IDE 和 Managed Agents API。早期評價 7.2 分滿分 10 分，架構野心很大——平行多 agent、原生 browser agent、A2A protocol——但執行品質拉跨。Day 1 已知三條紅燈：第一，wiped configurations，安裝後使用者設定被清掉；第二，agent 邏輯會把人類介入標記為 inefficiencies 並 revert 回去，要打到 v2.1.4 patch 才修；第三，Reddit 一整群人因為 rate limit 太緊抱怨「Antigravity 根本是 paperweight」、是個鎮紙。

對 indie 來說，現在到明天 18:00 ET 是最後 36 小時。要 ship 的是 Gemini CLI 到 Antigravity CLI 的 migration cheatsheet，加上 Claude Code、Codex、OpenCode 三軌備援腳本，賣 49 美金或 199 美金 lifetime。再來，6/18 早上 9 點台北時間起，台日中型 dev team 的 CIO 會湧現客訴，這是接 incident response retainer 的時機——1.5K 到 5K 美金固定價，加 7 天 hotfix。中文社群對這題的供給接近零。

最後一條是 Stripe 的 Machine Payments Protocol，簡稱 MPP。這是 Stripe 和 Tempo 在 3/18 推出、最近持續擴張的協定。它走 HTTP 402 的 challenge-response：當 AI agent 呼叫某個收費的 tool 時，server 回 402，agent 用 SPT、穩定幣、信用卡或 BNPL 結帳之後，tool 才真正執行。關鍵差異點是：MCP 是 first-class transport，跟 HTTP 和 JSON-RPC 同等。意思是任何 MCP server 的 tool call 內建按次收費，現在 directory 裡已經有超過 100 個 model provider、dev infra、compute、data 服務上來。

對 indie 來說這是新的變現賣路。過去你做的 MCP server 賣 monthly subscription 或 API key，現在可以改成 per-call 直接由 agent 付費。本週至少把一個自家的 vertical MCP server 接 MPP 跑通——PaymentIntents API 加上 402 response，不難。然後做 dev tool agency 的可以包成 cheatsheet 加 audit，1.5K 到 5K 美金加 30 天 retainer。內容週的主題是「同一份 MCP server 一次接 Claude Code skill、Cursor customTool、Grok Build plugin、Antigravity plugin、再接 MPP 直接收費」——五件套，中文供給接近零。

重點是，今天的 brief 其實是一個多重反轉日。Anthropic 6/15 雙池撤回是要主動訂正、要改寫過去七天內容的優先級事件；Fable 5 從「天 vs 週」變成「Anthropic 政府信任修復至少兩週」，SLO 要升級；SPCX 三天 +53% 把 Anthropic compute moat reframe 成可信賴供應鏈；Antigravity 6/18 hard cut 倒數，是最後一晚的 ship 視窗；Stripe MPP 給 indie 開了 MCP 變現的新賣路。把這五件事疊在一起看，indie 該做的不是觀察，是今天起 48 小時內把對外溝通、客戶 SLO、landing 內容、變現路徑全部更新一輪。
