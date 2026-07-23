今天想聊的東西其實有點壓縮,因為 7 月 24 號這一天,同一天要收兩個 hard-stop、Anthropic 又剛推了一個新的 Connector、加上 Opus 5 那個被預測到今天要發的傳言,昨天正式破功。四條線疊在一起,對一個做獨立產品的人來說,今天的時間切割會非常需要規劃。

先講兩個 hard-stop,這是今天的骨架。第一個是經濟部 115 年的 AI 補助,截止時間就是今天下午 4 點 59 分 59 秒;第二個是 DeepSeek 那個 V4 alias 的正式退場,換算成台灣時間也是今天晚上 11 點 59 分。兩件事撞在同一天,實質工作時間其實只剩八小時。所以如果你今天早上八點才開工,建議的節奏會是這樣:早上先打單、發 LINE 或 Email 給那些還在猶豫的補助客戶;中午 12 點以前把單收好;下午 4 點以前把 DIGIPlus 補助送件送出去;晚上 10 點以前把 DeepSeek 那邊的 code migration 全部 push 完。這是雙鎖點。

補助這邊要提醒的是,審查條款寫得很白,「絕對不得採購或使用中國大陸廠牌之資通訊產品」,所以你如果拿了補助又想繼續用 DeepSeek,就必須走 self-host、EU region、或是長期改用 v4-flash 這種變通方式,這個一定要在資安評級 checklist 裡處理掉。

然後是 DeepSeek 這邊。過了今晚 23:59 之後,原本的 deepseek-chat 跟 deepseek-reasoner 這兩個舊 alias 就直接回錯誤了,你的 SaaS API 會全掛。遷移路徑本身不難,一行改成 deepseek-v4-flash 就可以,reasoner 那條走 v4-flash 加 thinking parameter、或者升級到 v4-pro。不過陷阱點在 thinking mode——它以前是寫在 model name 裡的,現在改成 request parameter,這個要人工審 diff,不能盲信 sed 全域取代。這是今天最容易出事的地方。

再來換一條線,講 Anthropic Economic Index Connector。這是他們前天 7 月 22 號上線的東西,滿有意思的。簡單說,你只要在 claude.ai 的 directory 裡一鍵 enable,然後任何 Claude model 都可以直接問類似「哪些職業使用 AI 最多」、「教師怎麼用 Claude」、「Colorado 州民怎麼用 Claude」這種問題。底層是他們六月那份 Cadences 報告,蒐集了大約 9,700 名工作者的樣本。這件事的機會在哪裡?機會在於中文供給幾乎是零。目前台灣國內只有一家叫 aiposthub 的網站發了一篇比較通用的 SEO 文,深度中文 SOP、教師業務工程師這種三職種對照分析,還沒人做。所以如果你手上有職涯、HR、教育相關的內容線,明天 7 月 25 號早上八點以前把中文首篇 SOP 寫出來,加上一段五分鐘的 Loom 錄影發出去,就是很典型的 first-mover 窗口。這條線我覺得比補助 sprint 更長線一點,可以順著這波接三到五家 HR 或職涯教練的 audit 客戶。

再來是 Opus 5 這條線,這條線的重點反而是它「沒發生」。Polymarket 上有一個合約,賭 Anthropic 會在 7 月 23 號這天釋出 Opus 5,機率一度衝到 88%。結果昨天過期,Anthropic Newsroom、model card、API changelog 通通零公告。有幾家中文分析文,像 Fello、Coursiv、Aireiter,都把預測時點往後延到 Polymarket 的正式決算日 7 月 25 號,也就是明天。這對兩種人有影響:一種是做 Anthropic model router 治理的顧問,你要繼續用 Opus 4.8 當 default、Fable 5 當 hard-only agentic 這種二層分派,不要因為傳言就搶先把 Opus 5 寫進 SLO;另一種是做「發布時點預測」內容的創作者,如果明天決算日還是沒有公告,這一次要正式記入 base rate,那條「未寫進官方 docs 前一律當虛構」的冷靜線就要續延第二次。這是預測市場信任度的一次事件,不是模型本身的事件。

除了這三條主線以外,還有幾件事你可以順手放進本週的 checklist。第一,台股 7 月 23 號尾盤翻紅收 44,850,台積電尾盤翻紅收 2,405;技術面看,月線 45,301 是反壓、季線 43,895 是支撐,短期就在這個箱型裡震盪,45K 前追高要分批。第二,MCP 2026-07-28 的 release candidate 下週一發布,還有四天,stateless、Streamable HTTP、Mcp-Method / Mcp-Name headers、OAuth 2.0 / OIDC 這些變更要提前讀完。第三,政院 AI 基本法施行方案,7 月底所有政府機關要完成 AI 使用風險評估,這對做政府採購 AI Agent 顧問是 6 到 12 個月的 pipeline 窗,本週可以先 outbound 三到五家 SI 廠商跟地方政府 IT 科。第四,AI 應用大展 7 月 30 到 8 月 1 號在世貿一館,350 種 AI 應用、200 家廠商、50 場論壇,剩 6 天,展前 landing 校準跟 booth 陪跑可以開始開單。

重點是,今天這種雙 hard-stop 的極限日,你的時程必須縮到「早上打單、中午收單、下午四點前補助送件、晚上十點前 code push」這種硬節奏,今天沒有給你猶豫的空間。同時明天再多做兩件事:把 Anthropic Economic Index Connector 的中文首篇發出去、然後把 Anthropic Newsroom 監控頻率維持每兩小時、等 Polymarket 決算日結果。這幾條線都收好,這一週就完整走完了。
