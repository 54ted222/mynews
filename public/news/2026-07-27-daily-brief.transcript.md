今天想聊 7 月 27 日星期天的每日創業情報。整份 brief 的密度很高，我幫你把主線抽出來講。

第一件、也是今天最大的事，就是中國 Moonshot AI 在今天正式把 Kimi K3 的權重放上 Hugging Face，這是史上最大的一次開源權重釋出。整個模型有 2 點 8 兆參數，用的是稀疏 MoE 架構，也就是 Mixture of Experts，雖然總參數量非常大，但每個 token 只會啟動其中 16 位專家，所以推論成本沒有想像中那麼恐怖。它在 Arena 前端程式碼排行榜上直接搶到第一名、把 Claude Fable 5 擠下去，官方託管的 API 定價是每百萬 token 輸入 3 塊美金、輸出 15 塊，等於是 Opus 5 的六折。不過如果你想要自架，硬體門檻是 4 到 8 張 H100 80G 的 GPU、VRAM 大概要 1.4TB，個人筆電、4090、Mac Studio 全都跑不動，就算量化過也一樣。所以簡單說，對台灣 5 到 20 人的 AI 小團隊來說，這是一個新的 router 決策點：Opus 5 當日常預設、Fable 5 留給硬派 agentic、Kimi K3 hosted 當便宜的 fallback；但如果你的客戶是醫療、金融、政府這種對資料落地敏感的產業，hosted 因為資料會傳到中國會被卡、自架又貴，所以要另外處理。

再來，明天星期一 7 月 28 日是一個雙撞牆日。第一撞牆是 MCP、就是 Model Context Protocol，會發布 launch 以來最大的一次改版 final spec。這次的重點是把整個協定改成 stateless，走一般 HTTP、不再需要 sticky sessions，光這一項就可以讓 MCP server 便宜個三到七成；另外 OAuth 2.1 對齊、要求所有 server 一定要支援 RFC 9728，也就是 Protected Resource Metadata，SDK v2 beta 的 Python、TypeScript、Go、C# 四個語言版本都已經上線。對做 MCP 顧問的一人團隊，這是三個問題的檢核：你的 server 有沒有 OAuth 2.1、你的 client 還在不在用 sticky sessions、SDK 有沒有 pin 到 v2。

第二撞牆是 PayPal Q2 財報，明天晚上 21 點 UTC 公告，EPS 預估 1 塊 2 毛 8、營收 85 點 2 億。重點不是財報本身，而是 7 月 20 日董事會已經拒絕了 Stripe 加 Advent 提出的 530 億美元、每股 60 塊 5 的收購案，覺得太低；William Blair 分析師的目標價是 70 塊，Polymarket 上收購成交機率是 82%。所以財報的 EPS 會決定董事會有沒有底氣繼續推 70 塊的 counter-bid，這對做跨境收款替代方案、像是 Lemon Squeezy、Paddle、Stripe Connect 的顧問，是很明確的 pipeline 觸發點。

再來是半導體 232 條款，倒數第 4 天，也就是預計 7 月 31 日前後會公告最終稅率。台灣經濟研究院的劉佩真在 7 月 24 日已經定調：先進製程幾乎沒有影響，成熟製程才是這次調查的主軸。加上台灣資通訊產品佔對美出口 7 成、暫時不受 301 影響，所以 232 才是決定性的關卡。

跟這個相關的，就是經濟部 7 月 25 日公布的 7 傳產轉優勢評估。機械、工具機、手工具、水五金、塑膠、紡織、醫療器材這 7 類，台灣是 10% 而且不疊加 MFN，日韓 12.5% 也不疊加，但中國、越南、泰國 12.5% 是要疊加、實質變成 15% 以上。工具機這次首度比日韓便宜 2.5 個百分點、手工具跟自行車比中國便宜 40 個百分點以上。所以對做輸美製造業 audit 的 agency，明天早上 8 點前發中文首篇「7 傳產 4 大優勢類別加對日韓對中越的 pass-through 定價建議」，會是難得的 first-mover 窗。

再來還有兩個要記的時間點。Anthropic Opus 5 已經上線第 3 天，5 塊對 25 塊半價加五段 effort toggle，中文首篇 SOP 目前還是零供給；Sonnet 5 的 promo 定價倒數 35 天、8 月 31 日 UTC 過期之後從 2 塊對 10 塊恢復成 3 塊對 15 塊，考慮到 tokenizer 會多 encode 1 到 1.35 倍 tokens，實質是 20 到 35% 的漲價。所以對做 Anthropic 帳單治理的 indie，8 月底前要把客戶的 Sonnet 5 workload 遷移成 Opus 5 default，是一條明確的 audit 主線。

另外 AI Wave Show 2026 倒數第 3 天，7 月 30 日到 8 月 1 日在台北世貿一館，AMD、威聯通、凌群、緯謙、台灣是德、意藍、鄧白氏、資誠、還有日本軟銀首度參展；如果你做 booth 陪跑，今天就是最後一個週日急件窗。

重點是：這個週日雖然台股休市、看起來安靜，但明天一天內就有 MCP final spec 加 PayPal 財報兩個 pipeline 窗、加上 7 月 31 日半導體 232 結果、7 月 30 日世貿開展、Sonnet 5 promo 倒數、Kimi K3 開源第一天，所有中文首篇窗都會在明天早上 8 點之前結束。你只要挑其中一條吃到極致，就贏了。
