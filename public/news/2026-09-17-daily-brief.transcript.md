今天想聊 9 月 17 號這一天的創業情報。這一天很特別，因為前一天，也就是 9 月 16 號，是聯準會的利率決策日，同時 iPhone 18 Pro 的一波媒體評測也集中在同一天出爐，Anthropic 又剛好在同一天宣布把 Claude Chat 跟 Cowork 這兩支產品合體、推出 Claude Docs 跟 Claude Slides 的 beta。所以 9/17 這一天其實是三大訊號的「決策次日」，剛好落在同一個星期四。我想從最重的那條、也就是 FOMC 開始講起，因為它會影響台幣、影響蘋概股，最後也會影響到我們這些做跨境 SaaS 的人怎麼定價。

先講 FOMC。9/16 那天聯準會全票通過升息一碼、也就是 25 個基點，把聯邦基金利率上緣從 3.75% 拉到 4.00%。這是三年來第一次升息，而且是全票、沒有一票異議。這件事本身就很不尋常，因為過去兩三年市場的預期一直是「降息路徑」，這次直接反向逆轉。更重要的是，這是新任主席 Warsh 上任後的第一場記者會，他一開口就說「今年夏天的通膨數據並沒有告訴我基本趨勢有實質改善」——這句話翻成白話就是「通膨還太高、我們短期內不會鬆」。所以整個市場當天就把利率預期重新校準成「higher for longer」，就是「利率會維持在高檔更久」的意思。

還有一個技術細節值得注意，就是 Fed 每一季會公布一份叫做 SEP 的東西，全名是 Summary of Economic Projections，其中最有名的就是 dot plot、點陣圖，收集每一位 FOMC 委員對未來利率的匿名預測，用中位數看共識。這次 SEP 的中位數告訴我們：今年還會再有兩次升息。而 Warsh 自己選擇不放自己的那一點，這是主席保持中立的傳統做法。所以整個組合起來就是——「今天升一碼、今年還會再升兩碼、主席不表態但語氣鷹派」，這個訊號組合對台幣是很直接的壓力。

台幣的反應也真的來了。9/16 收盤 31.888，連五天貶值，市場開始擔心 32 這個心理防線會不會被打穿。這對誰有影響？第一，是所有訂閱美元 SaaS 的台灣團隊——你的 AWS、你的 OpenAI、你的 Anthropic 帳單，換算回台幣直接貴 5% 到 8%，這是財測層級的壓力。第二，是蘋概股，因為 FOMC 升息會壓抑消費，剛好又碰到 iPhone 18 Pro 明天就要交機、iPhone Duo 還有 29 天就開放台灣預購，供應鏈的 Q4 rerating 會全面重算。第三，是 TSMC 的 ADR，9/16 剛好除息 1.114 美元，除息當天遇到 FOMC 升息，等於雙重訊號同時衝擊。

接著講 iPhone 18 Pro。9/16 是媒體評測解禁日，Engadget、The Verge、MacRumors 三家幾乎同時上稿，定調非常一致：「iterative but excellent」，也就是「該有的都很優秀，但沒什麼驚喜」。Engadget 說它是「標準制定者」、The Verge 直接寫「excellent and utterly iterative」、MacRumors 標題更直接：「Excellent Yet... Meh?」。核心亮點是可變光圈主鏡頭、A20 Pro 兩奈米、vapor chamber 均熱板、電池升級，還有 Siri AI 這個軟體加分軸——不過 Siri AI 底層其實是 Gemini 2.5 Pro 驅動的。這種「S-cycle」定調對台廠的意義是什麼？意義是「台廠光電光學這條線 Q4 的估值可能要下修」，因為沒有大改版就沒有換機潮。同時 Pro Max 的預購時程還被延後到 10/6 到 10/13 出貨，Pro 則是 9/29 到 10/6，這也隱隱透露供給端還在追良率。

再來聊今天最有意思的那條——Anthropic 9/16 宣布把 Claude Chat 跟 Cowork 合體。Cowork 是 Anthropic 之前的 agentic 產品線，可以接大工作、產出檔案。原本這是兩支獨立產品，使用者要自己判斷「這個任務要走 Chat 還是走 Cowork」。現在合體後，Claude 會自己判斷你的問題是要快問快答、還是要接大工作，然後自動回傳可編輯的檔案。同時他們還把 Claude Docs 跟 Claude Slides beta 一起推出、把 4 月就推的 Claude Design 一併收進來。整個訊號很明確——Anthropic 在推一支「AI superapp」，直接對打 OpenAI 7 月推的 ChatGPT Work，那邊是 chatbot 加 Codex 兩合一，Anthropic 這邊是 chat 加 Cowork 加 Docs 加 Slides 加 Design 五合一。Pro 跟 Max 用戶先 rollout，Team 跟 Free 後續，Enterprise 有 30 天前通知。

這對台灣獨立開發者的意義是什麼？意義是「商業服務業 AI 導入 10 萬案」現在剩 33 天衝刺期，剛好有一個現成的 vertical 模板需求缺口——你可以用 Claude Docs / Slides beta 幫商業服務業 11 大類（ERP、雲庫存、供應鏈、HR、智慧排程、財會、資安）做出範本，per-project 收 4 到 12 萬台幣完全合理。這是今天 pitch 得起來的一個具體案子。

跟這個 pitch 平行的另一條線，是 Cognition 的 Devin 突然宣布 SWE-2 免費捆綁到 10/10。SWE-2 是他們 9/10 推的新 coding 模型，FrontierCode 1.1 Main 得分 50%、逼近 Fable 5.1 的 50.9%，但成本便宜 64%。訂 Devin Pro 一個月 20 美金，Desktop 加 CLI 全量免費用 SWE-2 到 10/10。這對獨立開發者是什麼機會？簡單說——你有 23 天可以用 20 美金跑 SWE-2 vs Fable 5.1 vs Cursor Composer 2.5 的三軸 shadow eval，零成本 A/B 測試。10/10 之後定價回覆為 Devin Pro 或 Max 綁定計費，per-token 定價目前還沒公布，這是採用的最大不確定性。

還有幾件事快速提一下。DeepSeek 從 9/14 起，把所有 V4-Pro 的請求路由到 V4.1 Flash 並按 Flash 費率計費，輸出價從 1.98 美金降到 0.60，等於 70% 折扣——不過商業服務業 10 萬案有一條「絕對不得採購中國大陸廠牌」的條款，所以 DeepSeek 這條路對台灣 vertical SaaS 是死路。Grok 4.7 又跳票了，Musk 已經連續五次承諾「幾週內」但都沒兌現，prediction market 已經放棄追這個消息。Vercel AI Gateway 新增 user-scoped budgets，可以對個別使用者設支出上限，補齊 team、project、API key 三層；Cloudflare Workers 新增 Durable Object 管理的 Containers、AI Gateway cache 費率可以自己客製——這些都是給多租戶 SaaS 團隊的新工具。

最後兩件在地訊號。中秋節還有 8 天，蝦皮 38%、momo 31%、PChome 12%，這是第二波電商促銷檔期的高峰，酷澎 MAU 990 萬繼續施壓。商業服務業 AI 導入 10 萬案剩 33 天，補助上限 10 萬、50% 補助率，11 大類明確錨點，這是台灣獨立開發者最實在的 outbound 窗口。

重點是：FOMC 這一升息，把「higher for longer」從市場猜測變成官方定價，台幣 32 保衛戰、蘋概股 rerating、跨境 SaaS 5-8% 成本壓力，這三條訊號同時打進來。獨立開發者今天最該做的事情有兩件——一是把「FOMC 決策次日 + 台幣 32 + iPhone 交機 + Duo 預購」串成一份七合一 dashboard，賣給財經 SaaS 跟匯率避險顧問；二是抓住 Devin 20 美金免費 SWE-2 的 23 天視窗，跑完 shadow eval，同時把 Anthropic Claude Docs / Slides beta 兜成商業服務業 10 萬案的 vertical 模板 pitch。兩件事都可以在這個週末動起來，10/10 之後 SWE-2 就不免費了，這是實打實的時間窗。今天就聊到這裡。
