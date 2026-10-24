今天想聊三件事，再順便帶過幾條比較小、但一樣值得留意的訊號。

第一條，是 Anthropic 的 IPO。今天是 10 月 25 號，剛好落在他們公開 S-1 的截止期。這件事為什麼卡在這一天？因為 Bloomberg 之前抓到的消息是，Anthropic 希望 11 月 9 號那週啟動路演。而美國 JOBS Act 有一條規則，叫作 15 日公開揭露，意思是，一間用 confidential 方式遞件的公司，要在正式路演前至少 15 天，把 S-1 從私密狀態翻成公開版，掛到 SEC 的 EDGAR 系統上。從 11 月 9 號倒推 15 天，剛好就是今天。

所以今天如果 EDGAR 還看不到 Anthropic 的 S-1 公開版，11 月 9 號路演在技術上就不可能發生，整個 IPO 時程會往後推。最早可能滑到 11 月 16 號，最壞的情境是感恩節 11 月 26 號前能不能掛牌都要打上問號。目前的估值傳聞是兩兆美金，募資規模 1,000 億，承銷團是高盛、摩根士丹利、JP Morgan、花旗。10 月 22 號韓國 Yonhap 預報過「10/23 可能公開」，結果沒落實。所以今天真正要盯的，不是行情，而是 EDGAR 上有沒有那份文件冒出來。

對台灣一人 SaaS 工程師來說，這跟你有什麼關係？簡單說，Anthropic 延後上市，就代表他們還不急著用 Claude 的 API 定價壓力去撐估值。Astra、Haiku 這一波的定價調整會往後推，大概會延到 11 月下旬才會有新訊號。

第二條，是 iPhone Duo。今天進到 Day 3 Weekend，週六，媒體關注度本來就會明顯掉。但真正的看點在二手市場。香港 unwire 10 月 20 號的報導說，中國大陸轉售加價，從一開始的人民幣 6,000 元，已經快速回落到 2,000 到 3,000 元中位；更明顯的是，收機商開始降價，囤貨的黃牛面臨虧損。eBay 上 2TB 夜曜黑掛 4,999 美金，Apple 原價 3,199，溢價差不多 1,800 美金。中國 10 月 17 號中央社的報導是出貨排到明年。這些訊號加起來，就是預購需求和真實購買力的缺口在被市場重新 price in。

Apple 全線備貨仍然延到 2027 年 1 月 25 號，Mark Gurman 在 Power On 也繼續罵「70 幾個國家同步預購卻缺貨」是爛策略。所以今天真正該觀察的，是二手溢價回落的速度——這是預購跟需求缺口倍數的真實測量。

第三條，是 Cursor。這個很有意思，因為官方到現在都沒公告，但第三方的 pricing 聚合平台 PricingSaaS，在 10 月 12 到 13 號之間抓到他們整個訂閱結構大改。從原本 4 層的 Hobby、Pro 20 美金、Pro+ 60 美金、Ultra 200 美金，變成 6 層：Free、Plus 8 美金、Premium 30 美金、Super 100 美金、Ultra 200 美金，再加上 Teams 30 美金起跳。重點是，中段多了一個 Super 100 美金的新選項，取代了原本的 Pro+ 60 美金。

這表示什麼？原本付 Pro+ 60 的用戶，現在被推上去 Super 100；原本付 Pro 20 的用戶，現在可以降到 Plus 8。Reddit、Hacker News、Cursor 自家論壇都還沒聲音，所以我們還不知道 Super 100 的 fast request 配額跟 Ultra 200 到底差多少——這就是今天可以做的事：試裝一下、把對照寫成 FAQ，接幾個企業採購顧問案都夠。

接下來是幾條輔線。

不過先講 OpenAI 的 Evals，今天是 T 減 6，倒數個位數進入下半場。10 月 31 號會變 read-only，11 月 30 號下線，reusable prompts 一併下線，Agent Builder 也同一天 EOL。官方指到的遷移目標是 Promptfoo，另外 Langfuse v4 也出了獨立的 migration guide。第三方 pickaxe 跟 StackOne 都已經確認——Agent Builder 的 workflow 不會自動轉成 Agents SDK 的 code，branching、handoffs 這些都要人工重做。這對台灣 SI 顧問來說是個很窄、但很具體的接案機會窗。

再來是技術選型。今天的功課，是把 Claude Agent SDK 0.3.302 跟 Vercel AI SDK 7 放一起對照。Claude 這版帶來的是 nested subagents、SessionStore、skills；Vercel AI SDK 7 的 WorkflowAgent 賣點是 durable storage，就是 deploy 跟 process restart 都能續跑。這兩者等於正式成為 TypeScript Agent 底層的雙強競爭，而台灣中文技術 blog 這一塊還停在 0.2.x 版本的描述，缺口相當大。寫一篇 3,000 到 3,500 字的平行對照，週末就可以收。

最後一條是政策訊號。國發基金的百億 AI 新創計畫，第一年只投出 10 案、2.4 億台幣，相對 100 億的額度，進度不到 0.1%。10 月修正作業要點，放寬「主要營運在台的境外公司」也能申請。StartupBlink 2026 台灣的生態系排名從第 25 升到第 20。平均核定一案 2,400 萬，相對單案上限 2 億，中間還有 8 倍成長空間。對台灣一人 SaaS 來說，這代表接政策顧問、或自己走這條基金的入口還大開著。

重點是，今天這一天如果只能盯一件事，就是美東晚間到週一早晨這 72 小時——EDGAR 上 Anthropic 的 S-1 到底 flip 不 flip。這一個訊號決定 11 月整個產業時程會往哪邊收斂。其他訊號——Cursor pricing、iPhone 二手回落、Evals 遷移——是接下來一週要同步處理的工作節奏。就這樣，下回再見。
