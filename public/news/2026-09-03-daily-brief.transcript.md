今天想聊 9 月 3 日這一天，剛好三條主線在同一天疊在一起，各自都有結構性的意涵，湊在一起看蠻能反映現在的產業節奏。

先從 SEMICON Taiwan 講起。昨天 9 月 2 日是主展 T-0，最重磅的事情是 Google Cloud 的 AI 與基礎設施總技術長 Amin Vahdat 做了他在亞洲的首場 keynote。這場 keynote 有三個訊號，逐一講一下。第一個訊號是他公開宣布，Google 台灣辦公室要擴充百分之六十的空間。這件事不是普通的房地產新聞，因為它把台灣的角色從「供應鏈」正式抬升到「工程樞紐」。第二個訊號更超乎預期，他說 chip cycle，也就是自研晶片的世代節奏，要從過去兩年一代改成一年兩代。這對做 TPU 供應鏈的台廠來說是結構性利多，聯發科、世芯、創意、京元電這一整串下游，R&D 節奏要跟著翻倍。第三個訊號是他一句原話「Taiwan is a critical engineering hub, co-design partner, not just supplier」，白話講就是把台灣視為共同設計的伙伴，不是接單的代工廠。這三條加起來，其實是 hyperscaler 對台供應鏈定位的一次公開對齊。

所以今天 T+1 是什麼？就是中文深度整理的極限窗。昨天 45 分鐘的第一手快速反饋窗已經過了，但主流中文媒體多半只寫議程摘要，沒把三個訊號 × 台廠八檔對照這件事講清楚。所以今天早上完稿「keynote 三信號 × TPU 供應鏈八檔對照 × 一年兩代 R&D 節奏敏感度」的中文首篇，就是產出點。

同一天 SEMICON 場外還有一件事，就是 TSMC 在高雄白埔工業區揭曉了 3 公頃的 supplier campus，2 棟模組化建築，跟經濟部、高雄市府共建。這件事的重點在數字：材料與設備的驗證效率會提升百分之二十五到五十，也就是說，過去中小型 supplier 送樣到 TSMC 驗證要好幾個月，未來如果進得了這個 co-design ring，時程可以直接砍半。再配上 CoWoS 產能到 2027 年年複合成長率超過百分之八十，南部半導體聚落等於是浮上檯面了。這裡有個順帶要說明的技術詞：SoIC，全名是 System on Integrated Chip，是 TSMC 的 3D 垂直堆疊封裝，跟 CoWoS 是互補的——CoWoS 做側向整合、SoIC 做垂直堆疊，AMD MI300、Apple 高階晶片都在用。反過來威脅面是，如果家碩、光洋科、崇越、群翊這些中小 supplier 沒擠進去 campus，就會被排除在下一波先進封裝供應鏈之外。這個分歧本身，就是南部半導體 vertical 顧問的切入點。

再來聊第二條主線，Claude Fable 5.1，這是 Anthropic 在 9 月 1 日釋出的版本，今天 T+2。這一版有意思的地方在於，per-token 定價完全沒動，還是 input 10 塊、output 50 塊美金一百萬 token，但是 cache reads 從 1 塊直接砍到 0.25，也就是砍了百分之七十五。Anthropic 官方給的估算是，典型工作流總帳會降百分之二十五，agentic 工作流會降百分之四十五。為什麼 agentic 場景折扣特別大？因為 agent 的特徵就是「同一個 prefix 讀很多次」——system prompt、tool definitions、docs、conversation history 這些每個 turn 都要重新灌進去，走 cache 就是結構性紅利。

不過這裡有個關鍵：折扣不會自動掉進你口袋，要把 workflow refactor 過才行。你得把 system prompt 跟 tool defs 全部走 prompt caching、cache breakpoint 要設得對，尤其是 Claude Code、Cursor 這種在 IDE 裡跑 agentic loop 的重度用戶，或者自建 MCP host 的團隊，都值得今天就做一次 cache audit，把 before 跟 after 的帳單對照抓出來。這件事的甜蜜點在於，中文 tech blog 現在多半只在寫「Fable 5.1 定價新聞」，很少人寫「怎麼實際把帳單降百分之四十五」的實作 SOP，這個真空就是機會。順帶一提，同天還發表了 Mythos 5.1，這是同一個底層模型放寬 biosecurity safeguard 的版本，只給 vetted 客戶用，主要是 cybersecurity 跟 life sciences 的專業場景。

第三條主線我想拉到 StartSphere Taipei 娛樂科技，這場 9 月 3 到 4 號今天 T-0 開跑，地點在南港的 POPOP Taipei，也就是瓶蓋工廠。8 國團隊，包括台日韓泰越新馬印跟美國，5 大論壇——AI 加 XR、電影製作、音樂 IP、遊戲商業化、娛樂投資——加上 Culturepreneurs 展區三軸：Game as Culture、Immersive Storytelling、Screen Culture。台灣獨立開發者的機會在於，「AI × 娛樂內容」這個 vertical 中文覆蓋幾乎是真空——SEMICON 大家搶著寫，但娛樂科技場，財經 KOL 不進去，內容創業 KOL 又不進論壇。所以今天下午開始做 5 論壇的即時筆記包、加上 8 國市場對照、9 月 5 號之後 outbound Culturepreneurs 那 25 位 speaker，就是很清楚的 vertical 打法。要注意的一點是體力：POPOP 跟 SEMICON 南港展覽館其實走路可到，兩邊時間會撞。

順便帶一下宏觀那條線。Fed 9 月 16 到 17 號 FOMC 前 T-13 天，升息機率三個平台呈現 razor-thin split：CME FedWatch 百分之五十六、Polymarket 百分之六十、Kalshi 百分之四十八，等於是硬幣拋在半空中。Warsh 在 Jackson Hole 的發言後遺症還在，下週 9 月 8 到 12 號的勞動跟通膨數據會是最後的 tie-breaker。台股這邊，昨天半導體類股午盤跌百分之二點零八、成交將近 2,900 億，強茂領跌百分之五點七三，剛好印證「SEMICON 開展後獲利了結」的窗，也就是說利多兌現、資金短線出場，這跟 9 月 2,000 億股息活水拉鋸，構成一個雙軌敘事。Anthropic 這邊，市場給百分之七十八的機率年底前 IPO，S-1 六月已經 confidential file，10 月 Nasdaq 目標未變。

重點是，今天 9 月 3 日這一天要抓的其實只有三件事。第一是把 Amin Vahdat keynote 三個信號跟台廠八檔 co-design 對照的中文首篇完稿，這是稀缺內容窗，過了今天就變雞肋。第二是為自己的 Claude Code 或 MCP 工作流做一次 prompt cache audit，把百分之四十五帳單優化落袋，並且寫成 case study 對外賣。第三是進場 StartSphere Taipei，開一個「AI × 娛樂內容」的新 vertical，中文即時筆記加 25 位 speaker 的 outreach。SEMICON 主展、Fable 5.1 折扣、娛樂科技場，這三件事分別對應硬體供應鏈、AI 成本結構、內容 IP 三條 vertical，剛好是接下來一季台灣獨立開發者可以同時操作的三個角度。
