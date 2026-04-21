嗨，歡迎回到《2026 台灣 SaaS 創業現場》。前兩篇我們談了題目跟方法，今天這集專心聊一件事：如果你今天在台灣，想一個人 ship 一支 SaaS，你的 stack 到底長什麼樣子？

先講結論，這結論在三年前會被笑，但現在是真的。2026 年，一個人，一百美金的月預算，可以跑一支有用戶、有金流、有監控的 SaaS，還有餘裕買 AI token。前提只有一個：帳號系統、收款、發信、錯誤監控，這四件事，你一行程式都不要自己寫。

我把一個典型的 SaaS 拆成六層來看，由外往內：前端與邊緣、後端與資料庫、AI 層、付款、觀察，還有發信。我一層一層講我目前的預設選擇。

前端用 Vercel。Pro 方案一個人一個月二十美金，包一 TB 的 Fast Data Transfer，超額的部分還送二十塊的 credit 去抵。對台灣開發者有個很關鍵但很少人提的點：Vercel 的亞洲節點在東京，對台灣用戶往返延遲穩定在五十毫秒以內，比你自己把 Next.js 架在 Google Cloud 台灣區還省事。除非你接的是堅持資料要落地台灣的企業客，否則這層沒什麼好糾結。

後端跟資料庫用 Supabase。免費額度就給你五百 MB 資料庫、五萬個月活躍用戶、五 GB 流量；Pro 一個月二十五塊給到八 GB 資料庫、十萬月活躍用戶。這裡有一個我看很多人踩的坑：帳號系統直接用 Supabase 內建的 Auth 就好，不要再疊一個 Clerk 上去。Clerk 免費只給一萬月活躍用戶，超過之後每個用戶收你兩分錢，你長到五萬人的時候 auth 帳單就破八百美金。除非你要做企業版 SSO，這時候才去看 WorkOS，它的一般用戶管理免費給到一百萬，每個 SSO 連線才收你一百二十五。

AI 這層是 2026 的新戰場。我的預設是 Claude Sonnet 4.6 做主力，每百萬 token 輸入三塊、輸出十五塊；Haiku 4.5 做小任務，每百萬 token 一塊跟五塊；Opus 4.7 只有真的需要深度推理才叫。這邊有兩個絕對要記得的省錢技巧。第一，prompt caching，就是把系統提示跟長文件標記成可快取。命中快取之後，輸入費用只剩原價的十分之一，等於九折優惠再乘以九折，差非常多。第二，批次 API，背景跑的非互動任務丟進去，再砍一半。沒開這兩個開關的 agent 工作流，帳單真的會很難看。

付款的部分，台灣開發者不要再幻想 Stripe 會收你了。Stripe 在 2026 年第一季把自家的代收代付服務放進 private beta，據說會在標準手續費上再加三點五個百分點，比 Paddle 的五趴還貴。Lemon Squeezy 被 Stripe 併購之後，新用戶都往 Paddle、Polar、Creem 分流。對一個月費二十九到九十九美金的訂閱 SaaS 來說，Paddle 目前還是最好的折衷。

觀察層有兩組組合，不要同時裝三家。第一組是 Sentry 加 PostHog，一個管錯誤、一個管產品分析跟功能旗標。第二組是 Better Stack，把 log、uptime、事件管理打包在一起。選一組就好。

發信一律用 Resend，SendGrid 在 2025 年砍掉永久免費額度之後，indie 圈就集體搬家了。免費永久給三千封，Pro 二十塊美金五萬封。DX 比 SendGrid 好太多，API 乾淨，還可以用 React Email 寫元件當模板。

好，六層講完，接下來聊三級預算。聽眾看不到表格，我把重點直接念給你。

第一級，一個月一百美金以內，你還沒開始賺錢。這個階段其實綽綽有餘，Vercel 自用免費，Supabase 免費，Auth 內建免費，Resend 免費，Sentry 跟 PostHog 都吃免費方案，AI token 再抓二十到四十。全部加起來常常不到五十塊。剩下的錢我的建議是全部丟去買 AI token、一個像樣的 domain、還有一份 Figma。

第二級，一個月五百美金，你有第一批付費客戶。這時候 Vercel Pro、Supabase Pro、Sentry Team、Resend Pro 該升的升，infra 總共大概兩百四，AI token 抓一百五，加起來四百左右。這個級距有一個反直覺的事實：你付給 Paddle 的手續費，會變成你最大的單一支出。如果你月營收一千美金，Paddle 收你六十到八十，比所有 infra 加起來還貴。這很合理，你在買「不用處理全球稅務」這件事。

第三級，一個月兩千美金，你在成長中。infra 加一加也才七百，AI token 反而會飆到八百起跳，Opus 跟 Sonnet 混跑 agent workflow 輕鬆破千。這個時候你要省的不是 hosting，是 prompt caching、模型分流、批次 API。過了五百美金這條線，再去省 infra 的五十塊，都是自我感動。

接下來這段很重要：絕對不要自建的四件事。

第一，Auth。OAuth redirect、session 輪替、magic link、passkey、雙因子、帳號合併，每一個都有五個你想不到的邊界情況。交給 Supabase Auth、Clerk 或 WorkOS。

第二，billing 跟代收代付。全球稅務、增值稅、發票、退款、爭議款處理，交給 Paddle 或 LemonSqueezy，那五趴就是你買平安的費用。

第三，交易型郵件。DKIM、SPF、DMARC、退信處理、IP 熱機，Resend 二十塊一個月幫你搞定。

第四，錯誤監控跟觀察。自己架一套 Sentry 加 Grafana 加 Loki，半夜壞了沒人修。

那該自建的是什麼？你的核心資料模型、你的 prompt pipeline、你獨有的業務邏輯。這些才是差異化。

最後講台灣團隊的幾個獨有細節。

中文這件事要小心。OpenAI 的 text-embedding-3-small 對繁中可用但不驚艷，BGE-M3 跟 Cohere 的多語模型實測常常贏，建議在 pgvector 上同時存兩組 embedding 來對比，不要盲信單一模型。

跨境收款，Paddle 結算到 Wise 或 Payoneer，再匯回玉山或台新的外幣帳戶，匯損控制在零點五趴以內。不要直接打到國銀美金戶頭，會被要求補交易證明文件。

時區紅利這個講過很多次，但還是要提。台灣晚上十一點到早上八點，矽谷剛好開始上班。把 AI agent 的批次任務排在這段時間跑，用批次 API 再省一半，還可以避開美西尖峰的 429 錯誤。

繁中朗讀這塊，我自己的站就有在用。OpenAI 的 tts-1-hd 繁中腔調目前還是勝 ElevenLabs 的繁中預設 voice；但 ElevenLabs 的聲音複製在中文短句上穩定度更好。依用途挑，不要單一外包。

最後一張心智圖：用戶進到 Vercel Edge，Vercel 跑 Next.js，Next.js 一方面打到 Supabase 吃 Postgres 跟 Auth，一方面透過 OpenRouter 打 Claude 或 Gemini，同時把結帳丟給 Paddle、把信丟給 Resend、把錯誤跟事件丟給 Sentry 跟 PostHog。Supabase 的 pgvector 直接餵 AI 做檢索。就這樣。

這張圖上的每一支箭頭，一個人都 ship 得動。2026 最奇怪也最公平的一件事就是：infra 已經不是門檻了，題目跟獲客才是。下一集 Vol.5 第四篇，我們來聊分發，怎麼把這支 SaaS 送到第一批願意付錢的人手上。下次見。
