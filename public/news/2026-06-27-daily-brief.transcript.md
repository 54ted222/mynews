今天想聊三件事，但主軸只有一條，就是 OpenAI 終於把 GPT-5.6 推出來了，可是推得很奇怪、也很不像以往那種「全網開接」的玩法。我把這條當骨幹，再順著它把 Anthropic 那邊、還有獨立開發者最在意的金流改價，這兩條穿插進來。

先講 GPT-5.6。昨天的情報我寫的是「Polymarket 認為 6/28 前不會 launch 的機率有 78%、7/31 前 launch 的機率高達 97%」，所以當時的判斷是這週應該不會看到。結果今天台灣時間半夜、也就是美國 6/26 早上十點，OpenAI 直接出了一份完整的 system card，把三個新模型一次端上來，分別叫 Sol、Terra 跟 Luna。Sol 是旗艦，每百萬 input token 五塊美金、output 三十塊；Terra 是平衡款，性能對標前一代 GPT-5.5、但價格只有一半，是 2.5 塊跟 15 塊；Luna 是高速便宜版，1 塊跟 6 塊。光看價格，Terra 跟 Luna 對獨立開發者的吸引力其實非常大，特別是 Luna 1 塊跟 6 塊這個級距，幾乎就是直接打 Anthropic 的 Haiku、也打自家的 GPT-5.5 mini。

但問題來了，價格再香、你今天也接不到。OpenAI 這次同步公告的，是只給大約 20 個 trusted partner、也就是「受信任合作夥伴」拿到 API 跟 Codex 的存取權，其他人要等所謂的 coming weeks、也就是大概接下來幾週才會普遍開放。為什麼這樣搞？因為 Trump 政府在 6/25 正式要求 OpenAI 採取所謂的 staggered release，分階段發布，一定要先通過 system card 跟 deployment safety 兩道審查，才能放給更多 partner。簡單說，這是美國政府第一次對 frontier model 的發布設下 access gate、設下存取閘門。對獨立開發者的意義是，過去那種「OpenAI 出新模型、我們隔天就能接」的預設，從今天起得改寫了。

那這對昨天我給客戶的提案有什麼衝擊？衝擊很大。任何在 RFP 或提案裡寫「GPT-5.6 API 直接接」、或者寫「6/25 launch」的，今天都得補一封訂正信，把時程改成「7 月中 GA、目前是 trusted partner waitlist」。Polymarket「7/31 前 GA」的 97% 機率，理論上也已經被剛剛這個 limited preview 打回中段，因為市場可能會覺得「給 20 個 partner 用不算真正的 GA」，所以 odds 應該會掉、需要重新監控。換句話說，這條新聞對獨立開發者，是一個「不必慌、但要立刻訂正客戶溝通」的事件。Luna 1 塊 6 塊這個價格，如果之後真的開放，倒是有機會排進 router 第 5 軌備案，原本我們是 Opus 4.8、Sonnet 4.6、GLM-5.2、K2.7 Code 這四軌主壓，那 Luna 可以放在第五位，等 GA 後再評估。

OK，這是第一條主線。再來，第二條穿插，是 Anthropic 那邊。同樣這幾天 Anthropic 做了一件非常勁爆的事，他們在 6/24 公開指控阿里巴巴，說阿里用了 25,000 個假帳號、在 4/22 到 6/5 之間跑了 2880 萬次對話，目的是大規模 distill、也就是蒸餾 Claude 的能力去訓練自家的 Qwen 模型。蒸餾這個詞簡單講就是「我用你的強模型大量產生答案、再拿這些答案訓練我自己的模型」，等於是繞過幾十億美金的訓練成本、直接複製 frontier lab 的能力。Anthropic 形容這是「中國公司針對美國 frontier lab 史上最大規模的搭便車行為」。

那這對我們獨立開發者有什麼意義？兩個層面。一個是，如果你自己有跑 LLM proxy、或者 API SaaS、或者 agent SaaS，那你今天就要把 API abuse detection、假帳號 fingerprinting、rate limit 多層防護，這些東西寫進客戶 SLO。因為阿里這套「成本中心化、撒大量假帳號」的 playbook，是任何 frontier API 都防得了、也都該防的事。中文跟日文圈現在對「API 蒸餾偵測 SOP」的供給接近於零，這是一個 7 天最熱、30 天熱期的 first-mover window。另一個層面是，同樣這六天裡，4 位 Google Gemini 跟 DeepMind 的核心研究員，包括 Jonas Adler、Alexander Pritzel、還有拿過 2024 諾貝爾化學獎、做 AlphaFold 的 John Jumper，連同 Noam Shazeer，全部離開 Google，跑去 Anthropic 或 OpenAI。原因主要是 pre-IPO equity、就是 Anthropic 跟 OpenAI 兩家都在年內可能 IPO，他們的股票期權現在最值錢。

把這兩件事擺在一起看，你會發現「為什麼選 Claude over Gemini」這個 narrative，今天起對企業客戶可以加上一段 talent flow 反擊「Gemini 比較便宜」這種說法。再加上 Anthropic 跟 Amazon 那個 100 億美金、5GW Trainium 晶片的合作，Project Rainier 已經部署百萬顆 Trainium2、Q4 前會有 1GW 上線，整個 compute 容量緩解的故事也成立。對於賣 enterprise deck 的獨立開發者來說，這是今天就能更新的素材。

OK 第三條穿插，比較貼地、但對小型 SaaS 很實際，是 Polar 改價的事。我昨天的 brief 裡寫的是「Polar 還是 4% 加 40 美分、比 Lemon Squeezy 5% 加 50 美分便宜一截」，那是錯的、需要訂正。今天回頭翻 Polar 自己的 pricing page，發現他們其實在 5/27 就已經悄悄改成 tiered 結構了。免費的 Starter 方案，現在是 5% 加 50 美分，跟 Lemon Squeezy 還有 Paddle 完全並列、便宜不到了。原本那個 4% 加 40 美分的費率，現在被改名叫做 Early Member，只給 5/27 之前開戶、而且從來沒升過付費方案的舊組織。重點是，只要你升 Pro 一次，這個費率就永遠拿不回來。新的付費級距是 Pro 每月 20 塊、費率 3.8% 加 40 美分；Growth 100 塊、3.6% 加 35 美分；Scale 400 塊、3.4% 加 30 美分。

那 break-even、也就是升 Pro 划不划算的臨界點在哪？大約是月 GMV 4,000 美金。低於這個數字，付每月 20 塊去拿 3.8% 不划算，不如留 Starter 5% 加 50 美分，或者改用 Dodo Payments。Dodo 是印度起家的 MoR 服務商，4% 加 40 美分、沒有月費，是一個被中文圈忽略的便宜中段選項。所以如果你昨天用我那個過時的「換 Polar 馬上省一個百分點」推薦給客戶，今天最務實的事，就是補一封訂正信，附上一張真實的五軌比較表，把 Stripe、Polar Starter、Polar Pro、Lemon Squeezy、Dodo Payments 列在一起，用客戶實際的月 GMV 算一次 break-even。這件事 48 小時內做完，narrative 信任就維護住、還能順便接到 2 到 5 個「我月 GMV 多少該怎麼選」的諮詢 inbound。

重點是這樣，今天三條主線整理一下。第一，GPT-5.6 launch 了、但給 20 個 partner，所以你客戶提案的時程要改、router 要把 Luna 1 塊 6 塊預留第五軌位置，這件事 48 小時內 first-mover 寫一篇中文 case study 會吃下整個熱期。第二，Anthropic 指控阿里大規模蒸餾，加上 Google 連掉 4 位核心研究員，這兩件事讓「為何選 Claude」的故事多了 talent 跟 compute 兩個新引擎，可以立刻寫進 enterprise deck。第三，Polar 5/27 已經偷偷改價，4% 加 40 美分基本上死了，今天就補訂正信、做一張五軌 break-even 表，順便把 Dodo Payments 這個被忽略的選項補進去。其他像 Claude Code 2.1.191 三個小修、Deno 2.9 那個可以從 web stack 直接編譯成 native desktop app 的 deno desktop 新功能、還有 Next.js 16.3 preview 的 Instant Navigations，都是值得追、但今天不是主菜，可以放在這週稍後再評估。
