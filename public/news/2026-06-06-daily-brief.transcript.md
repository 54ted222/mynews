今天想聊三條主線：OpenAI 在六月四號跟六月五號連續放出 Dreaming V3 記憶架構加 ChatGPT Ads Manager 兩個大招，等於把 ChatGPT 從一個 chatbot 升級成平台；Anthropic 同一週把 Colossus 1 合約細節、IPO 機密申報、共同創辦人上 CNN 喊「放慢」三件事一起推出來，是很典型的「safety-first」當 GTM 操作；最後我會給獨立開發者一份本週可以實作的清單。

先講 OpenAI 雙線。六月四號開始，ChatGPT Plus 跟 Pro 在美國滾出新的記憶架構，名字叫 Dreaming V3。舊版的記憶你應該有印象，就是你跟它講過一句話，它幫你存一條 bullet，要查還要進設定頁面看，東一條西一條很零散。Dreaming V3 完全換掉這個邏輯，改成背景模型跨 session 自動合成一份 user profile，會自己 roll forward 過期的事實，比方說你三月時跟它說「我七月要去新加坡」，到了八月它會自己改寫成「你在 2026 年 7 月去過新加坡」。OpenAI 自家的 eval 顯示 factual recall 從 41.5% 拉到 82.8%，幾乎翻倍。能 scale 的關鍵是 dreaming 服務的 compute cost 降了五倍，沒這個基礎根本撐不住免費跟付費全量用。免費用戶、Go 用戶跟國際版要等「coming weeks」才會看到。

這件事為什麼重要？因為 ChatGPT 從「無記憶 chatbot」變「persistent 個人作業系統」。你的 SaaS 如果有接 ChatGPT 當 OAuth SSO，現在要重新評估一件事：使用者的 context 會不會被 ChatGPT 提前 surface？你的產品名、定價、版本，半年內全部會被 Dreaming 自動內化。對 indie SaaS 的衝擊就是，靠「我幫你記住 context」做差異化的那種個人筆記類、journaling 類產品，會直接被免費功能吃掉。

第二條 OpenAI 訊號是六月五號上線的 ChatGPT Ads Manager conversion-optimized campaigns。這是 self-serve beta，限美國 business 用戶，可以用 CPA bidding，也就是按每次轉換出價，事件可以走 JS Pixel 或 server-side 的 Conversions API 上傳。Conversions API 簡單說就是後端對後端的傳事件管道，繞過瀏覽器端那些 ITP、廣告攔截跟 iOS ATT 造成的資料丟失，CPA bidding 要訓練得好就一定要有可靠的事件流。早期 access 限六月一號前已經接好 pixel 的廣告主，所以遲到一週你就失去 onboarding 加速。programmatic CPM 上週環比漲了 34%，意思是廣告主已經在搶位置。

這兩個動作合起來看，OpenAI 等於同一週把「使用者 context 載體」跟「廣告 funnel」都拿下了。半年內你要做行銷，ChatGPT 會是 Meta 跟 Google 以外多一條必經 funnel。獨立開發者本週最該做的事，就是去 ads.openai.com 申請 self-serve beta、把網站接上 Pixel 跟 Conversions API，開五百美金小預算試七天 conversion 廣告，這是早期紅利窗口，過了就沒了。

接下來想聊第二條主線，Anthropic 同一週做的三件事。第一件是六月三號到五號媒體陸續披露的 Colossus 1 合約細節。Colossus 1 是 Elon Musk 的 xAI 在田納西州 Memphis 建的 22 萬顆 GPU 超算園區，包含 H100、H200 跟下一代的 GB200，原本是拿來練 Grok 的。Anthropic 跟 xAI 簽的合約是每個月 12.5 億美金，跑到 2029 年 5 月，累計超過 400 億美金，用量 cap 在園區的 11% 容量。重點是 discount rate 只跑到 2026 年 6 月底，七月起就要進 full pricing。Anthropic 明確說這些算力是拿去跑 inference，不是訓練，目標是把 Claude Pro 跟 Max 的用量上限直接放大。對應到行動就是，這個月底前你如果有 Claude 高 token 用量的批次任務，比方說 migration 或是大批 eval，現在就排隊跑完，七月起單位 token 成本估算保守加 10% 到 15%。

第二件事是六月一號 Anthropic 機密提交 S-1，目標是兆元級 IPO，跟 SpaceX、OpenAI 並列三大 trillion AI IPO。Revenue run rate 從去年 100 億美金衝到 470 億，post-money 來到 9650 億美金。第三件事最有趣，IPO 申報的同一週，共同創辦人 Jack Clark 上 CNN 的 AC360 公開呼籲整個 AI 產業「放慢」。表面看是矛盾，實際上是 Anthropic 一貫的招式，就是把「我們很危險所以你要選我們」當成銷售台詞。這套對 EU 監管機構、銀行、保險、醫療這種保守採購流程是直接解。OpenAI 跟 Microsoft 站「速度優先」這條敘事，Anthropic 站「慢但可信」對比之下顯眼。六月七號 IPO 路演開始之後一直到月底，「safety-first」這個招牌寫在 SaaS landing page 上的 ROI 是這半年最高的。

第三條主線給獨立開發者，本週可以實作的清單我整理成五件事。第一件，把你現在 ChatGPT Plus 帳號的 saved memory 全部清空，跑一週讓 Dreaming 自己生 user profile，然後把對比結果寫成短文發 LinkedIn 或 Threads，這是 15 分鐘設定加七天觀察就拿得到的內容紅利。第二件，去 ads.openai.com 申請 self-serve beta，網站接 Pixel 加一條 server-side Conversions API endpoint，90 分鐘可以做完。第三件，月底前把所有需要 Claude Pro 或 Max 限額的批次任務排隊跑完，順手記 token 用量做七月的成本 baseline。第四件，找一個現有 SaaS 試裝 Cloudflare 上週剛推的 Dynamic Workers，這東西可以在毫秒級 cold start 的 isolate 裡跑 LLM 生成的程式碼，比傳統 container 快 100 倍，做教育、low-code、prompt sandbox 類的產品這條替換 AWS Lambda 加 Firecracker 可以省非常多工程力。第五件，如果你是 Cursor Bugbot 用戶，六月八號開始計費改成 usage-based，每次 PR run 從一塊錢到一塊半，去 dashboard 點 early opt-in，把 effort level 設深度 review 跑一週對比成本。

順便補三個值得追蹤的小訊號。Coralogix 六月三號拿了 2 億美金 Series F，post-money 16 億，主打的是自家 agent 叫 Olly，超過一半 enterprise 客戶已經用 Olly 或自家 LLM 查 telemetry，agent observability 這層正式進入 SaaS 棧必備。Cloudflare Agents Week 收尾包除了 Dynamic Workers 還有 Workflows V2，加了 deterministic replayable execution、5 萬並發 instance、200 萬 queued，讓「agent 不用養 infra」這條故事從 demo 變 production。最後 EU AI Act 的 GPAI 條文倒數 57 天，八月二號開始強制執行，賣 EU 客戶的 indie 這個月底前要把 fine-tuning rebrand 跟 transparency 文件補齊，過了就是真實罰款不是警告。

重點是，這禮拜的關鍵字是「平台化」跟「safety-first」。OpenAI 把 ChatGPT 變成記憶加廣告雙引擎的平台，Anthropic 把「我們很危險」當成 enterprise GTM。獨立開發者本週做完上面那五件事，就會知道下半年該押哪邊，以及怎麼跟自家客戶解釋為什麼採購要從 ChatGPT 跟 Claude 之間二選一變成二選二。
