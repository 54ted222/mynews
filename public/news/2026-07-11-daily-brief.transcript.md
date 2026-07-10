今天想跟你聊三條主線。第一條是 Fable 5 跟 DeepSeek V4 兩個 deadline 湊到同一週，第二條是 Cursor 昨天 brief 我們寫錯了最低版本、順便補一下 MCP 的 SDK v2 beta，第三條是台灣國家隊這禮拜三軌一起打訊號。

先講第一條。Anthropic 的 Fable 5，原本 7/7 那天訂閱制就要停、改成 metered credits 這種每百萬 token 十塊到五十塊美金的計價，但因為反彈太大，官方帳號延了五天，改到 7/12。也就是說，今天算 7/11，明天就是最後一天。7/13 開始你要用 Fable 5 就一定要另外買 credits，這個價位大概是 Anthropic 現有 GA 模型裡最貴的一檔。

然後幾乎同一個時間，DeepSeek 也有一個 migration deadline，是 7/24 下午三點五十九分 UTC。舊的別名，deepseek-chat 跟 deepseek-reasoner，那個時間會直接停掉回錯誤。換成 deepseek-v4-pro 或 deepseek-v4-flash 就好，這件事本身是 one-line。但陷阱在這裡：舊的 deepseek-reasoner 對應到的新別名，不是你直覺以為的 V4-Pro，是 V4-Flash 的 thinking mode。所以你原本拿 reasoner 跑重推理的 team，隨手把 alias 換掉，就會被默默降到 Flash 檔的價位跟 Flash 檔的推理能力，兩邊都掉。

這兩個 deadline 疊在一起的意義，簡單說就是台灣做 AI SaaS、走 model router 的獨立開發者，這個週末如果沒把這件事一次做完，你就會分兩次踩雷。建議行動是直接開一個 audit，客戶用的 Anthropic 跟 DeepSeek 模型全部盤一遍，Fable 5 該搬 Sonnet 5 promo 就搬，DeepSeek 這邊 workload 分派表寫清楚，重推理走 V4-Pro、成本敏感走 V4-Flash，別讓客戶被 alias 陷阱吃掉。

再來第二條，Cursor 跟 MCP。先修正一件事，我昨天 brief 寫最低版本是 Cursor 3.7，這是錯的。實際上 6/18 就已經到 3.8 了，客戶 SLO 應該以 3.8 為 baseline。3.8 帶進來最重要的是一個叫 /automate 的 skill，你用自然語言設觸發條件、指令跟工具，然後配上 Slack emoji reaction 觸發——你在 Slack 上貼一個 emoji，Cursor 的 cloud agent 就開始跑。GitHub 那邊也多了五個 trigger，Cloud Agents 也支援 computer use，可以產截圖、影片這種 proof-of-work。Cursor 這條線的 narrative，已經從 IDE 裡的 copilot 變成一整個 full-stack 的 dev-ops agent 平台。

MCP 這邊 6/29 官方 blog 把 beta SDK 全發完了。Python 是 mcp==2.0.0b1，穩定版還是 1.28 系列。TypeScript 變動比較大，原本 monorepo 的那個 @modelcontextprotocol/sdk 拆成兩個獨立包，一個 server、一個 client，再加四個薄薄的 adapter 對 Node、Express、Hono、Fastify。這個 package 名字的遷移對現有 SaaS 是硬 breaking change，畢竟每週有六千多次 npm 下載在跑。stable v2 目標是 7/27，比 7/28 那個 final spec 早一天。你賣自家 MCP server 訂閱的話，7/13 之前先 audit stateful 的部分，7/14 到 7/27 這兩個禮拜完成 stateless 遷移、把 header 補上、Tasks 改成 polling、Apps 改成 iframe sandbox，時間點就是這樣算的。

最後一條聊台灣國家隊。這禮拜是三軌一起打訊號，剛好接在 TAI1 加速器首屆 7/10 收尾的隔天。第一軌是政策，賴清德在「2026 台灣創投暨私募投資年會」的致詞明講一句：台灣不能只守既有優勢，要把半導體、AI 實力轉成資本市場的吸引力跟國際競爭力，從科技製造中心變成科技投資中心。這個 framing 對獨立開發者的意義是，接下來一兩年台灣資本市場的 narrative，就是 AI 供應鏈、資本入口這個方向。

第二軌是資本。永豐 00410A 這檔 ETF 7/13 開募，主動選股、鎖定台灣 AI 上下游供應鏈，是少數用主動管理方式賣的 AI 主題 ETF，不是追指數的那種。市場會把首週募集金額當成「AI 供應鏈續強」這個 narrative 是不是真的的一個指標。搭配金管會去年十月啟動的亞洲創新資本平台，鎖定 AI、半導體、智慧製造、生技醫療、國防航太這五個領域，這就是獨立開發者接下來找資本入口的正式清單。

第三軌是產業鏈跟人才。GaN 跟 SiC 這兩個第三代寬能隙半導體，正式列進國家核心關鍵技術清單，白話說就是加了一道防挖角、防外流的防火牆。教育部 AI 人才方舟計畫 117 億元 4 年 6 個子計畫繼續執行，加上數位發展部數位產業署那個 AI 算力平台，全年開放到 10/30，等於是 TAI1 收尾之後接手的下一線入口。

重點是這樣：明天 7/12 是 Fable 5 訂閱制的最後一天，7/13 開始強制轉 credits、同時也是 00410A 開募的第一天，7/24 是 DeepSeek 別名下線，7/27 是 MCP SDK v2 stable，7/28 是 MCP final spec。這幾個日期抄一下貼牆上，接下來三個禮拜就照著推。台灣端這邊，賴清德政策談話、亞洲創新資本平台、AI 人才方舟、數產署算力這四個入口，是接下來 111 天內獨立開發者拿補助跟找資本的主要 map。就這樣，我們明天見。
