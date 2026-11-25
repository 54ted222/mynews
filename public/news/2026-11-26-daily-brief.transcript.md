今天想聊一條很濃縮的主線：Anthropic 上市後第五個交易日沒有反彈，但三家券商已經排好隊給出 outperform 評等，而 Taipei 這邊同時卡在 Thanksgiving 休市、Black Friday 半日、還有 OpenAI Agent Builder 要在下週一正式下架這三件事湊在一起的 T-0 窗口。一次講清楚為什麼這對台灣的 solo dev、Claude 大客戶、還有想寫中文深度稿的 content creator 都是個很罕見的空窗期。

先從 ANT 這檔股票講起。11 月 25 號美股週三是 Anthropic 掛牌後第五天，盤中一度跌到 73 塊 86，morning 區段勉強撐在 79 附近，整天最高也就 80 塊 9。重點是什麼？第四天的低點是 80 塊 01，第五天不但沒反彈，還直接把下緣再往下擴大將近 8%。同一天 Nasdaq 大盤跌 3%、S&P 500 跌 2%，所以不能說是只有 ANT 自己出問題，但它確實跟著大盤共振，而且角度更陡。對 11 月 20 號首日 111 塊 5 進場的台灣散戶複委託投資人來說，浮虧從前一天的負 28% 擴大到負 34%。這是一個蠻痛的數字。

不過同一天盤中，Wedbush Securities 這家由 Dan Ives 領軍的研究團隊，發了一份 outperform 評等、目標價 120 塊，成為繼 Canaccord Genuity 開 135、Oppenheimer 開 150 之後，第三家 initiate coverage 的券商。三家目標價加起來，range 落在 120 到 150、中值大概 135。你拿這個中值去對第五天的低點 73 塊 86，upside 其實有 63% 到 104%。所以盤面跟券商口徑整個拉開，變成雙訊號衝突。簡單說，賣方分析師看好，但真正下單的 flow 還在賣，兩邊目前還沒調和。

為什麼這個衝突現在特別值得講？因為接下來四天沒有正常盤。11 月 26 號週四 Thanksgiving，美股全市場休市。11 月 27 號週五 Black Friday，美股只開半天，1 點 ET 早收。11 月 28 號、29 號是週末。要一直等到 11 月 30 號禮拜一，才是 Thanksgiving 後第一個完整交易日。所以如果你是 Claude 的大客戶，正在思考 2027 年上半年漲價會不會兌現，你現在拿到的最新訊號就是這個：Day 5 新低加三券商 initiate 的雙訊號衝突、然後休市四天沒新資料進來。對台灣的 Claude Pro、Teams 用戶來說，議約的機率再往上升一格，而中大型客戶發起議約的最佳時點，大概會落在 11 月 28 號到 12 月 2 號這連續 5 個交易日。對中文媒體來說，Thanksgiving 休市這 24 小時裡，美股盤面停住、但繁中讀者還在上班滑手機，整合首篇深度稿的獨佔窗口非常明確。

講到這邊，再把雙 passive flow catalyst 疊上去。12 月 14 號 Russell 1000 inclusion 開始生效，T-18 天；12 月 21 號 Nasdaq 100 也要納入，T-25 天。兩個指數追蹤 ETF 的被動買盤合計估 8 到 20 億美元，首月 passive buying 大概會到 19 億、吸收掉已發行股數的 29%。所以就算你完全不看券商 target，純看指數方法學，12 月中開始就會有具體日期的被動買盤進場。這也是為什麼第五天雖然無反彈，但「12/14 到 12/21 雙 passive flow 窗口變成 dominant reversal thesis」這個敘事在 Day 5 之後反而比之前更站得住腳。

再來聊 Agent Builder。OpenAI 的這個低程式碼 agent 編輯器，11 月 30 號禮拜一就是正式 EOL 的日子，今天往前算是 T-4。但你數一下日曆：今天 Thanksgiving 休市、明天 Black Friday 半日、週六週日放假，真的能動手處理 migration 的完整工作日，其實只剩禮拜五的半日跟禮拜一當天。然後同一天下架的還有 reusable prompt objects、還有 Evals dashboard 跟 Evals API。OpenAI 官方給的唯一遷移路徑是 ChatKit 的 advanced integration，加上 Agents SDK 匯出一份 skeleton code。但官方自己也老實寫了，這份 scaffold 不會幫你轉換 workflow graph，也不保證每個行為原封轉移，你還是要手動補 edge case 跟 guardrail。這對 US 的 team 蠻痛的，但對台灣 solo dev 反而是機會——因為 UTC+8 24 小時不中斷，剛好接得住 US 下班後遺留下來的 migration 急件。單案落在 2000 到 20000 美元，Upwork、Toptal 的 profile 設定一下就能跳進去接。

然後是 Black Friday。11 月 27 號是全球 SaaS 促銷的 T-1、11 月 30 號 Cyber Monday 是 T-4。促銷碼有幾組，BF2026、BLFCM2026、BF26、SWITCH50 都已經上線。相較去年 2025，今年 AI 工具促銷的規模翻倍，而且 AI 工具的占比第一次超過一般 SaaS 促銷的一半。不過要注意，大多數都是新訂閱才享、續訂不適用。對月度工具支出落在 3000 到 30000 台幣的 solo dev，這週就是 2026 工具堆疊年度更新的最後四天。搭配 Opus 4.7、Fable 5.2、Astra、Sol、MAI Code 2 Flash 這五強的年度 benchmark 來做選型，蠻合理的實務執行週。

快速掃一下其他主題。立法院中小微企業條例進入第二觀察窗 Day 10，連續 10 天沒有媒體進展，2027 年第一季作為申請起點的情境大概已經固化。金管會 9 項虛擬資產子法進入公告期第 24 天，剩 17 天截止，書面意見實質撰稿週的 Day 3，應用層 SaaS 不等發行端這個避險切入訊號還在。GPT-6.2 Astra 距離 Theo Browne 公開信已經第 9 天，OpenAI 沒回應，Thanksgiving T-0 這個窗口實質已經閉合，下一個觀察日要看 12 月第一週 Cyber Monday 之後。MAI Code 2 Flash 的 promo 進入第 10 天，距離明年 5 月 17 號 promo 結束還有 172 天，61% pass rate、每個 task 平均成本 5 塊 2 美分這兩個 anchor 已經出來。

所以重點是這樣：第五天 ANT 無反彈加 73 塊 86 新低、Wedbush 120 作為第三家 initiate、Thanksgiving 休市、Agent Builder T-4、Black Friday T-1，這五個事件被壓縮進同一個 24 小時窗口。盤面停住、券商 target 已經鋪好、但 US 那邊沒人上班。這就是台灣中文媒體跟 solo dev 這週唯一的空檔，接下來四天不會再有。把握住。
