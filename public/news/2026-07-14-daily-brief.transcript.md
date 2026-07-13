今天想聊四件跟台灣獨立開發者最相關、時間壓力最緊的事，其中一件其實是自己昨天寫錯的校正。

第一件是 Anthropic 的 Fable 5。這是他們最頂端、算力也最貴的旗艦模型，本來 7/12 就要進 metered 收費，結果先延到 7/13，然後又再延到 7/19，這已經是第三次延期。所以昨天那篇 brief 寫「今天就是 metered Day 1」是錯的，這裡先鄭重校正一下。正確的版本是這樣：從 7/13 到 7/19 這整整一週，Pro、Max、Team、還有部分 Enterprise 訂閱戶還是可以免加價用 Fable 5，只是會吃掉週用量 50% 的上限；Claude Code 那 50% 的 boost 也一起同步展延到 7/19。真正的硬期限是 7/20，換算台灣時間是下午 3 點，metered 開始，一 million token input 十美元、output 五十美元，是 Anthropic 目前最貴的 GA 定價，而且吃的是獨立的 credits pool、不再算進週用量 50% 上限裡。所以如果你已經在賣 Anthropic 相關的 audit 或 SLO 給客戶，第一件事就是把昨天那條 SOP 校正回來，第二件事是把「三延節奏日曆通知」這個東西做成標準品，因為 Reddit 跟 X 上重度用戶的情緒已經很明確，不少人開始覺得 Opus 4.8 對日常工作已經夠用了，Fable 5 該留給真正長鏈、複雜的任務。

第二件是 DeepSeek 的 V4 遷移，剩下 10 天。原本 deepseek-chat 跟 deepseek-reasoner 這兩個舊 model 別名會在 7/24 UTC 下午 3 點 59 分停止服務，直接回 404 或 400，而且官方明確講「沒有 grace period、不會再延」。這幾天大家在講的新陷阱是：新的 deepseek-v4-flash 預設是「thinking mode 開啟」，這跟舊的 deepseek-chat 預設非思考模式剛好相反。意思是說，如果你只把 model 字串從 deepseek-chat 換成 deepseek-v4-flash、其他什麼都不加，你的延遲會拉高、output token 數會膨脹、每一個 request 的帳單會靜默上升，粗估四到八成。正確的做法是這樣：deepseek-chat 對應到 v4-flash 加上 thinking type disabled；deepseek-reasoner 對應到 v4-flash 加上 thinking type enabled；重推理的走 v4-pro，那顆是 1.6 兆總參數、49B active、1M context、384K max output。這件事跟 Fable 5 疊在一起看，重點很清楚：這禮拜幾乎所有主流大廠都在動 pricing 跟 default，你只要不做 explicit 的參數宣告，帳單就會漂。

第三件是台灣本地的機會，經濟部 115 年 AI 創新服務研發補助計畫，7/24 截止，剛好跟 DeepSeek 遷移是同一天。這條的重點在於：只要你是有稅籍登記的一人公司，就在補助對象裡；SBIR 也就是小型企業創新研發計畫，Phase 1 補助金額 150 到 600 萬、沒有產業別限制；SIIR、CITD、SBIR 三軌可以疊。也就是說，如果你昨天還在猶豫要不要開一人公司稅籍，接下來 10 天就是最後一個「稅籍登記等於補助入場券」的窗。中文的 sprint checklist 跟申請書樣板現在市面上很分散，這是一個明顯可以做 SaaS 的縫。

第四件是台積電 7/16 法說，剩兩天。這裡有兩個數字要注意：EPS 共識從 3 塊 81 收斂到 3 塊 77，稍微下修一點；Morgan Stanley 給的毛利率預估 67.4%，落在公司自己 guidance 65.5 到 67.5 這個區間的上緣。capex 2026 全年估 520 到 560 億美元、往高端走；全年 USD 營收成長估超過 30%。對台灣 indie 來說，這兩天是資本市場的熱期，做「高含積 ETF signal dashboard」或是「主動 ETF vs 大盤 ETF vs 個股決策樹」的訂閱型工具，7/14 到 7/17 就是那個 first-mover 週。

剩下的倒數就快速帶過。Gemini 3.5 Pro 目標 7/17 GA，剩三天，但 Google 官方到現在還沒放 model card、pricing page 也沒有，第三方媒體一致 hedge 說「every spec remains unconfirmed」，簡單說就是可以規劃、但不建議做 production dependency。MCP 那邊，RC 的目標是 7/28、stable v2 是 7/27，剩兩週左右，SEP-2575 把舊的 initialize / initialized handshake 全砍掉、改成每個 request 都要帶 `_meta` 欄位，對舊的 client 跟 server 都是 breaking，如果你有自家的 MCP server，這兩週就要開始遷測。最後是 GitHub 那個 Cordyceps checkout v7 backport，7/16 剩兩天，pinned SHA 的 team 這 48 小時就是最後 last-chance，該跑 Dependabot 的趕快跑。

所以重點是：今明兩天做三件事就好。第一，把昨天那條 Fable 5 metered Day 1 的 SOP 校正成「三延展延窗，7/20 才是真的硬期限」；第二，DeepSeek 客戶的 model router 補上 explicit thinking 參數，避免帳單靜默漂 40 到 80%；第三，如果你或你的客戶是有稅籍登記的一人公司，115 年 AI 補助這 10 天就是那個機會之窗。其他的倒數放行事曆，不用今天全部處理。今天就講到這裡。
