今天想聊的其實是同一件事的兩面：一邊是「用 AI 的錢」怎麼變貴、變複雜，另一邊是「賺 AI 錢的公司」怎麼在這幾天扎堆給市場丟訊號。

先講模型這邊。今天凌晨 03:00 美東時間，Anthropic 那個代號 Fable 5 的頂端模型，正式從訂閱免費額度裡剝離，改成純 metered 計價：每百萬 token 輸入 10 塊美金、輸出 50 塊美金，是他們家有史以來最貴的 GA 模型。之前延過兩次期，今天算是最終落地。訂閱用戶不是不能用，只是要從獨立的 credits 池扣款，不再吃週用量那 50% 額度。網路上第一時間的情緒，Hacker News 熱門留言直接寫「我們知道現在是壟斷，會一直搜刮你的錢，直到有人拿出更便宜的競品」，就是這個氣氛。

大家馬上會問，那改用 Sonnet 5 是不是就便宜？表面看是啊，Sonnet 5 promo 現在 2 塊 / 10 塊，比 Fable 5 便宜 5 倍。但這裡有兩個陷阱要校準。第一，promo 只到 8 月 31 號，還剩 49 天，9 月 1 號起漲到 3 塊 / 15 塊，一次漲 50%。第二個更陰險，Anthropic 官方自己講的：Sonnet 5 換了新 tokenizer，同一段文字會產出多 30% 的 tokens。他們把這叫 cost-neutral。所以簡單說，實際的價差不是 5 倍，是大約 3.4 倍。

同一時間，DeepSeek V4 遷移剩 11 天，7 月 24 號 UTC 15:59 舊別名徹底停回，而且官方明講「沒有 grace period、不會延期」。更麻煩的是，你如果還在用 `deepseek-chat` 或 `deepseek-reasoner` 舊別名，其實已經被靜默降到 V4-Flash 上跑了，可能還不知道。`deepseek-reasoner` 那個別名尤其會踩雷，它不會自動導到 V4-Pro，而是導到 V4-Flash 開 thinking mode。V4-Pro 反而是這次降價 75% 的主角，重推理 workload 該去那邊。

這兩件事併起來看，接下來 30 天對台灣獨立開發者是一個很清楚的短窗：中文、日文的 case study 供給幾乎是零，能一次講清楚「Fable 5 metered 遷到 Sonnet 5 promo 校準再分派 DeepSeek V4」的 audit sprint，客戶願意付一到三千美金，模板還能長期賣。

再來換到資本市場那頭，這 3 到 4 天的 signal 密度異常高。

先講 SK Hynix，就是韓國海力士，今天正式在 Nasdaq 掛出永久代號 SKHY，同一天配對的 SKUU 三倍槓桿跟 SKDD 三倍反向 ETF 一起上線。7 月 10 號 IPO 首日用臨時代號 SKHYV 掛牌，一天漲 13%，收 168 塊美金。HBM，也就是高頻寬記憶體，是 AI 加速器的核心零組件，這條 shortage 敘事還會撐一陣子。

再來，永豐投信首檔主動式 ETF，代號 00410A，今天到 7 月 17 號開募，一共 5 天窗。它用 W.I.N 策略搭配 RICHED 六指標，從 1,800 檔裡集中選 AI 供應鏈個股，10 塊入場、半年配息。小資族用它對比大盤指數 ETF，是新選擇。

壓軸是台積電 7 月 16 號法說，剩 3 天。市場預期 EPS 3 塊 8 毛 1 美元、Q2 營收 400 億美金上下，年增 33%，2026 資本支出上緣拉到 520 到 560 億。要盯的是摩根士丹利那個提問：66% 毛利率天花板還能撐多久？還有 Forbes 那篇「AI 建置有沒有天花板」也在同一週丟出來。這場法說會決定 AI 供應鏈類股接下來一整季的估值 anchor。

最後鴻海這邊，董事長劉揚偉 7 月 7 號預告集團旗下一家 IC 設計子公司當年會登創新板，市場普遍猜是鴻晶科技，就是 2001 年成立、做 SoC 設計的那家 Socle Technology。這件事把賴清德 7 月 9 號「科技製造中心變科技投資中心」的政策談話真正落地。所以 7/13 到 7/16 這 4 天，台灣加韓國 AI 供應鏈整條鏈的資本訊號一次到齊。

補一下工具面的更正。昨天的 brief 說 Cursor 這個月沒看到 3.10 官方 release，這個寫錯了。實際上 6 月 30 號 Cursor 3.10 就 GA，主打是 MCPs 進 Team Marketplaces；7 月 10 號 3.11 又 GA，帶三個大功能：一個是 Side Chats，用斜線指令 side 或 btw 開新的側邊對話，可以 at-mention 拉回主線；一個是 Conversation Search，Cmd+K 搜歷史 agent 對話，本地 index 千級對話都很快；再來是 Agent Hooks 五個 hook，包含 beforeSubmitPrompt、afterAgentResponse、afterAgentThought、stop、subagentStart，可以拿來搭 subagent 分工加自我修正 loop。已經在賣 Cursor 治理 audit 的獨立開發者，今天就要發 email 給客戶更正。

重點是，接下來 30 天抓住三條線就夠了。第一條是模型端 8 月 31 號 Sonnet 5 promo 到期倒數，把 tokenizer 30% 膨脹加上 9 月 1 號漲 50% 這個算式講清楚，是硬需求。第二條是 7 月 13 到 16 號台灣韓國資本市場 4 天窗集中訊號，做 dashboard SaaS 的短鏈就在這裡。第三條是 Cursor 3.11 Agent Hooks 樣板 marketplace，趁著中文日文供給還是零，24 小時內把 landing 掛出去。三條線不用都做，挑一條你已經有客戶基礎的下去，這一週就會有東西可以賣。
