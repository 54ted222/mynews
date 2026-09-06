今天想聊 9 月 7 日星期天這一天的情報，是週末盤整加下週三大事件——Apple 9 月 9 日 event、9 月 11 日 CPI、9 月 16 到 17 日 FOMC——同時擠進來的一週，所以我打算從三個角度切：SEMICON 收關第三天的定調、FUTUREMODE 這個亞洲最大 AI 加 Web3 節收關第一天的觀察，還有這週不能忽略的 Nvidia 加 Hugging Face 併購 30 天窗。

先講半導體。SEMICON Taiwan 2026 前天結束，今天已經是 T 加 3、週日長篇窗還沒關。台積電副共同營運長侯永清在收關的座談會上丟了一個很重的數字——去年底規劃今年的季度晶圓製造設備採購時是 1 倍，一季後跳到 1.5 倍，到今年 7 月已經是 1.9 倍。同時他們現在全球同時在建 25 座廠——台灣 13 座、海外 5 到 6 座、加上先進封裝廠，合起來近 20 座；而過去同一時間，台積電只能推 4 到 5 座。他自己說「AI 需求變化速度是 30 年沒見過的」。所以簡單說，這一整套資本支出的擴張節奏，是不會回頭了。外資最新目標價已經拉到 547.38 美元，維持買進。

再來是 FUTUREMODE 台灣未來祭，前身是 Taipei Blockchain Week，昨天 9 月 6 日剛結束。這個節活動 9 月 4 到 6 日三天在台北花博公園爭豔館，號稱 6000 個 builder、150 位講者、40 場 talk、30 場 workshop、80 個側活動，還有一個獎金加起來 9 萬美元的 BUILDMODE hackathon。重點是它跟同一週的 SEMICON 硬體展形成一個很有意思的對照——南港是硬體、花博是軟體加內容——這種同時兩極化的活動組合，中文完整覆蓋現在還很少人做，因為 Web3 標籤讓多數財經媒體直接略過，但實際上 AI 加 robotics 加 creator economy 才是主軸。這個是我今天想推的「週末長篇」的第一個好題。

然後是 Nvidia 加 Hugging Face 併購的第 5 天。9 月 2 日的 SEC 8-K 之後，HSR 通報——就是併購案的法定門檻——的 30 天 waiting period 現在正式進到實質窗。Nvidia 副總 Kari 對外把它定調叫「deconcentration platform」，也就是「我們是幫忙分散 AI 給每一個國家、每一個產業」，這是很聰明的 antitrust 反守為攻 framing，但同時 DOJ 對 Nvidia 本身已經有 antitrust probe 在跑，兩個疊在一起，這個 close 到 1H27 前的 alternative 導入時窗還是要建。台灣獨立開發者本週應該做的事，還是把 HF 依賴度做一次 audit，把 Ollama 自架、Modal Serverless GPU、Replicate、Together 這四個 alternative 至少評兩軸備援。

接下來講幾個工具。首先是 GPT-6 Astra 跟 Claude Fable 5.1 這兩個 flagship，發表隔 2 天，現在到了第 5 天雙軌 benchmark 都出爐了。Artificial Analysis 綜合分是 Fable 5.1 拿 66、Astra 拿 61，Coding Agent Index 也是 Fable 70 對 Astra 67；但 Astra 在 OSWorld 2.0 也就是電腦操作類拿 72.6% 領先，數學題 FrontierMath Tier 4 v2 更是拿 97.6% saturates。兩個模型都是 10 塊美元 input、50 塊美元 output 每百萬 token，但 cache reads 是 Fable 0.25 對 Astra 1，差 4 倍——這個差距只在高流量 agentic workload 才會浮現。實務上的結論是：一般智力跟 coding 選 Fable 5.1，電腦使用跟數學跟資安選 Astra，這是第一次出現「無單一贏家」的 flagship 對照。台灣 SI 客戶應該建 dual-model eval 而不是單選。

再來是三個從 Product Hunt 上這週上線的新工具。TrustedRouter 是 9 月 1 日上線的 LLM router，把 600 多個模型跟 90 多個供應商包成 OpenAI-compatible API，然後多打一個「verifiable privacy proof」——也就是可驗證的無日誌 attestation——這在 OpenRouter、Portkey、Groq Cloud、Together 這 4 個既有 aggregator 之間第一次拉出隱私差異；月底剛募到 125 萬美元種子。第二個 Keiki 是全通道 AI agent orchestrator，一次建、多通道部署——web chat、LINE、WhatsApp、Slack、email、電話都能出。第三個 ThunderPhone 是 AI 電話 agent 平台，每分鐘 2 美分入門，這個定價在 Bland AI、Vapi、Retell 這條線是最便宜的。

MCP 生態這週末也有更新。FastMCP 4 加了 interactive tools——就是 agent 執行途中可以回問使用者——還有無 session 的 state management、background tasks，以及一個叫 fastmcp-remote 的東西，是讓只支援 stdio 的 host——像舊版 Claude Desktop、舊版 VS Code MCP——可以橋接到 HTTP 加 OAuth 的伺服器。同時修了一個 Starlette 的 CVE，編號 2026-48710，是強制升級。如果你有 Python MCP server，這週末排時間升 v4 是必要的。

台灣中小企業這邊，LINE 這週丟了兩個消息。第一是 LINE Premium 台灣 Q4 上線，一個月 165 元台幣，5 大功能包括跨系統的 advanced backup；第二是 LINE OA 加 OA Plus 的 AI Conversation Assistant Q1 2026 上線，讓零售跟餐飲品牌可以快速建 chat service。這個對台灣做 LINE OA 外包的獨立開發者是雙面刃——一方面 Shopee 跟 Momo 廣告成本上升、私域 LINE OA 是 2026 主軸，需求會擴大；另一方面 Q1 官方 AI 上線後，「純陽春 LINE 機器人外包」會變降維打擊。所以未來 6 個月的競爭窗，重點是切 vertical use case 深度整合，不是純 workflow 加值。這個跟商業服務業 AI 補助 10 萬 10 月 20 日截止還剩 43 天可以綁在一起——LINE OA 加 AI 加訂閱制加補助 10 萬四合一顧問方案，週日是業主唯一有空討論的時段，今天適合把 pitch deck 收尾。

再來是下週的三大事件。9 月 9 日星期三，Apple event，主題「Surprise and Shine」——iPhone 18 Pro、Pro Max、加上首度的折疊機 iPhone Ultra、Apple Watch Series 12 跟 Ultra 4、iOS 27 會首度公開 Siri AI、還有一個叫 HomeOS 的新品類，就是可以掛牆或接喇叭的智慧螢幕。A20 Pro 用 2 奈米，這個對台積電是大單續補。台廠 iPhone 供應鏈這一週會 rerating。9 月 11 日星期五 CPI 出爐，這是 Fed 9 月 16 到 17 日 hike 決斷的第二 signal——8 月非農 +162K 已經把 CME 從 52% 推到 66%、但 Kalshi 反向壓到 26%、Polymarket 是 60%，三平台 divergence 40 個百分點，是 8 月以來最極端，CPI 是 tie-breaker。所以 hike 情境跟 hold 情境的跨境 SaaS 匯率跟訂閱定價敏感度 dashboard 這個週末該建 base case。

Cursor Composer 3 也就是代號 Vega 那個，今天已經是 T 減 10，續延中。SpaceX Colossus 從零訓練 1.5T+ 參數是結構性延遲，這一週還是別為未發布的模型改工作流。當前主軸是 Sonnet 5 加 Fable 5.1 cache 走滿加 Astra 加 Gemini 3.8 Flash 四軸。

所以重點是：SEMICON 定調台積電資本支出擴張回不了頭，AI 需求是 30 年沒見的節奏；FUTUREMODE 這種 6000 人的 AI 加 Web3 節收關第一天，跟 SEMICON 硬體展的雙軌對照是週末長篇好題；Nvidia 加 HF 30 天 HSR 窗開了，alternative 導入是本週動作；Fable 5.1 跟 Astra 出現 flagship 首度「無單一贏家」，dual-model eval 是 Q4 標配；Product Hunt 新工具 TrustedRouter 帶進「privacy-provable」新賽點；LINE OA Q1 2026 AI 官方版上線前是 6 個月「vertical use case 深度整合」關鍵過渡期；下週三個大事件——Apple 9/9、CPI 9/11、FOMC 9/16-17——本週末先把 dashboard 建好，週間就能出手了。
