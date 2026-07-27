今天想聊的是 7 月 28 日，週一，我把它叫做「雙撞牆日」。同一天，早上跟晚上各有一顆會炸掉台灣獨立開發者週計畫的大石頭。

第一顆石頭，是 MCP 這個協定的 2026-07-28 final spec 正式發布。MCP 就是 Model Context Protocol，Anthropic 兩年前開的那個讓 LLM 接外部工具的規格。今天這一版是它從 2024 年 11 月上線以來，改動最大的一次。改在哪？最痛的是 stateless 這件事變成 breaking change。簡單說，以前你在遠端跑一個 MCP server，client 跟 server 之間會綁 session，你就得配 sticky sessions、共享 session store，或者用 gateway 去看 packet 內容做 route。今天以後不用了，你可以用最普通的 round-robin load balancer，加上一個叫做 Mcp-Method 的新 header 做 body-less routing，client 端再快取 tools 列表的回應，就完事。這個改法讓 hosting 成本大概便宜三成到七成。

不過改動遠不只這個。OAuth 2.1 對齊、RFC 9728 這個 protected resource metadata 標準變成必要項，還有一個叫做 EMA、也就是 Enterprise-Managed Authorization 的擴充也 stable 了，Anthropic、Microsoft、Okta 都跳下去採用了。這代表什麼？政府、金融、醫療這些以前對 MCP 很觀望的客戶，採購 baseline 就位了。另外 SDK v2 四種語言，Python、TypeScript、Go、C#，今天起可以 pin 版本，官方也給了正式的 deprecation policy，保證 12 個月的過渡窗，這對做一人 SaaS 的人是好消息，不會被半夜升級搞死。整體生態基數目前有一萬個以上公開的 MCP server 在跑，SDK 一個月被下載九千七百萬次，量體已經不小。

第二顆石頭，是 PayPal 今天開盤前公布 Q2 財報。分析師共識是 EPS 1.28 美金，營收 85.1 億，TPV，也就是支付總額，4745 億美金，成長 7 個百分點。但真正在跑的暗線，是 PayPal 董事會在 7 月 20 日已經拒絕 Stripe 跟 Advent 那個 60.50 美金的收購 offer，董事會的心理價位是 70 美金以上，背後還有 500 億美金的銀行融資撐腰。所以今天財報有很清楚的三分支：如果 EPS 高過 1.30，董事會有底氣 push back，收購談成率掉到 30% 以下；1.20 到 1.30 之間是拉鋸；如果掉到 1.20 以下，董事會就沒籌碼了，談成機率會升到七成以上。這件事跟台灣獨立開發者有什麼關係？很大關係。你想想，做一人 SaaS 對美收款，PayPal Business、Lemon Squeezy、Paddle、Stripe Connect 這幾條線，手續費結構、稅務歸屬、有沒有 Merchant of Record 幫你代扣代繳，都不一樣。如果 PayPal 真的被 Stripe 收走，未來六到十二個月費率跟產品線一定會亂。所以今天晚上 21:30 台灣時間財報出來以後，60 分鐘內誰能出一篇中文速訊，把三分支對照組講完，那個人就吃到中文 first-mover 的位置。

再來，前面兩顆石頭之外，還有幾條同時在燒的線。第一條，半導體 232 條款，7 月 31 日、大概後天，最終稅率會出爐。台經院劉佩真 7 月 24 日已經先給了定調：先進製程幾乎沒有影響、成熟製程才是這一輪的主軸。資通訊產品佔台灣輸美七成，暫時不吃 301 的效果。台灣現在爭取的是「台美 21 世紀貿易倡議」的同等待遇。如果最後成熟製程被課超過 15%，IC 設計、封測、半導體設備這些上游廠商 24 小時內就會需要 audit sprint，這個是接案窗。

第二條，Kimi K3，Moonshot AI 那個 2.8 兆參數的 sparse Mixture-of-Experts 模型，昨天 open weight 上 Hugging Face。今天 T+1，授權條款已經確認是 Modified MIT，允許商用，但訓練資料跟訓練程式碼不公開。hosted API 是 3 塊跟 15 塊，等於是 Opus 5 五塊跟二十五塊的六折。這對做「一人 SaaS on Anthropic」的人，你的三 model router 裡那個「hard-only agentic fallback」的位置，Kimi K3 就進了替補名單。不過要提醒的是，hosted API 資料會傳去中國，做醫療、金融、政府這種 regulated industry 的客戶，這條你得自架，門檻是四到八張 H100 80GB，個人玩不動。

第三條，Opus 5 launch 已經 T+4，中文 SOP 首篇窗還是零。加上 Sonnet 5 的 promo pricing、也就是 2 塊 10 塊的入門價，8 月 31 日 UTC 過期，過期後回到 3 塊 15 塊，再加上 tokenizer 本身 encode 出來多了大概 1.35 倍的 token，實質等於 20 到 35% 漲。5 到 20 人的 AI 團隊，如果不重算 monthly bill，9 月 1 日 bill 出來會嚇一跳。這是「Anthropic bill 治理 audit」這條 audit sprint 的絕佳觸發點。

第四條，AI Wave Show T-2，7 月 30 日到 8 月 1 日，世貿一館。AMD、威聯通、凌群、緯謙、台灣是德、意藍、鄧白氏、資誠、日本軟銀，全部確認名單。三大展區是 Agent、Edge、國際級主題館，合計 350 種 AI 應用。做 booth 陪跑的人，今天是最後 pre-work 窗，週一急件。

重點是，把上面全部收攏，你今天要盯的其實只有兩個 first-mover 窗。第一個，明天早上 8 點台北時間之前，發中文首篇 MCP 2026-07-28 final spec 的一人 SaaS 快取遷移 checklist，把 stateless、OAuth 2.1、RFC 9728、SDK v2 四個 tier 對照，加上 WorkOS、Auth0、Okta 三家 IdP 的抉擇表，還有 EMA 什麼時候要採，全部一次寫清楚。第二個，今晚 21:30 之後 60 分鐘內，發 PayPal Q2 財報乘上 Stripe 收購三分支對照組、乘上台灣一人 SaaS 收款 stack 三分支建議的中文速訊。這兩篇今天不寫，明天中文空間裡就有別人佔位了，之後想切進來要付出好幾倍成本。台股週一開盤前 60 分鐘是客戶 SOP 校正的最後窗，加權 43,634、台積電 2,350，開盤如果開低過一百點，43,000 就是二次探底的支撐位，這個大盤脈絡放心裡就好。以上，就是今天雙撞牆日的完整脈絡。
