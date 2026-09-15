今天想聊五條線，都擠在 9 月 16 日這個星期三：Fed 決策當日、iPhone 18 Pro 評測解禁前 48 小時、Cognition 剛推出的 SWE-2、台灣數位發展部主權 AI 語料庫三倍擴張，還有 Perplexity 在 Mac 上新做的 Hybrid Compute。這五條線看起來各自獨立，但如果你在做跨境 SaaS 或台灣獨立開發，其實會發現它們互相咬在一起。

先講 Fed。今天美東時間下午兩點半，鮑爾——實際上這次已經換成 Warsh 主席——會在記者會上宣布利率決策。市場現在把賭注壓得非常滿：Polymarket 從週日到週一連續上調，升息一碼、也就是 25 個基點的機率被推到 79.3%。ING、Achiever、Cambridge Currencies、Seeking Alpha 這幾家研究機構的解讀一致：Warsh 8 月底在 Jackson Hole 就講得很鷹派，加上 8 月 PPI 月增 0.4%、年增 5.4%、CPI 也超預期，非農再加 16.2 萬人，四個數據疊在一起，升息這條路幾乎鋪好了。

所以今天真正的看點不是「升不升」，而是升完之後怎麼講。市場最想聽到的是「one-and-done」——這次升完就結束——這會是盤中最主要的下游敘事。第二層定調則要看利率點陣圖，也就是 dot plot：19 位委員各自對未來三年利率預測的匿名點狀圖，散布得越集中越代表共識，散得越開就代表內部意見分歧。這張圖每季更新一次，是記者會之外市場拿來推估「一次收手」還是「還會再升」的關鍵工具。

對台灣獨立開發者，這件事有三個即時訊號。第一，台幣如果破 32，蘋概股會迎來一波 Q4 的重評價。第二，跨境訂閱型 SaaS 會發現美元訂閱換回台幣後成本上升 5% 到 8%，直接壓縮財測。第三，做匯率避險或跨境定價顧問的獨立開發者，這幾天的每日儀表板可以直接商品化，訂閱一個月開到台幣 1,800 到 4,000 元的價格帶，或者做 per-project 的匯率避險 case study，一單開到 3 萬到 8 萬。

接下來看 iPhone 18 Pro。這台週五 9/18 才交機，但評測解禁時間就是今天美西時間清晨 5 點、也就是台北時間今天晚上 8 點。Forbes 的 David Phelan 從 9 月 6 號、9 月 11 號、9 月 12 號連續三篇報導都寫得很明確，Apple 這次因為 keynote 時間比較晚，特別給了媒體多一天做評測；所以 Verge、Wired、MKBHD、Engadget 這幾家會在同一個時間點統一發稿。今天晚上 8 點台北時間，會是這一波蘋果內容的爆點。

規格重點大家已經看過很多次了：A20 Pro 走 2 奈米、主鏡頭可變光圈、內建 vapor chamber 蒸氣室散熱、電池升級。但更值得注意的是 9to5Mac 9/14 那條——Pro Max 交機延到 10 月 6 日到 10 月 13 日、Pro 是 9 月 29 日到 10 月 6 日，只有 9 月 12 號清晨美西時間搶到首波預購的人 9/18 才拿得到。這個延後有兩種解讀：一種是「供不應求、需求爆棚」，另一種是「Q4 需求疲軟、Apple 保守出貨」——今天晚上 8 點以後的評測反應，會決定哪一派敘事勝出。

第三條線是 Cognition 的 SWE-2。這個模型 9 月 10 號發布，是專門做軟體工程的模型，基於月之暗面的 Kimi K3 做 post-training，最大的亮點是 first SWE model with reasoning effort levels——你可以像 GPT o1 那樣調推理力度。在 FrontierCode 1.1 Main 這個 benchmark 上，SWE-2 拿 50.0%，Fable 5.1 是 50.9%、GPT-6 Astra 53.3%，SWE-2 跟前兩名只差一分，但成本大概只有 Fable 的三分之一、GPT-6 Astra 的四分之一。跟前代 SWE-1.7 比，回合數少 58%、成本降 81%，分數還更高。

不過 SWE-2 有個很現實的採用阻礙——per-token 定價還沒公布，目前只有 Devin 訂閱者能用，Enterprise 檔一個月 500 美元起跳。所以就算你想在 Cursor 或 Windsurf 裡切一顆試試看，現階段還做不到。如果你在做程式碼路由、想把 Sonnet 5、Fable 5.1、GPT-6 Astra、Gemini 3.8 Flash、DeepSeek V4.1 Flash 這幾軸做選型 audit，SWE-2 是一顆你今天需要放在觀察名單、但先別 rebase 的候選。

第四條線是台灣的 MODA 主權 AI 語料庫。Taipei Times 9 月 15 號的頭條——「Taiwan's AI training data triples under ministry's efforts」——數位發展部把資料集從去年的 1,600 多筆擴到 5,000 筆、tokens 數推到 21 億。涵蓋範圍很廣：民俗、本地語言、生態、旅遊、出版、法律、藝術、文化、經濟、地理、交通、醫療、歷史，13 個 vertical 全部進來。而且不只給台灣用——這批語料庫對台灣、日本、美國三地的 AI 開發團隊 opt-in 開放。

這件事跟另一則政策——「Taiwan aims to train 500,000 AI professionals by 2040」——搭在一起看，就是台灣國家隊在 AI 供給側同時鋪語料跟鋪人力。對獨立開發者的意義很直接：「使用台灣主權語料庫 fine-tune 中文模型」現在可以正式寫進 pitch deck，變成一條 non-中國廠牌的天然差異化敘事。而這條敘事跟商業服務業 AI 導入 10 萬案「絕對不得採購中國大陸廠牌」的規定完美咬合——你去提案的時候，客戶最擔心的資料主權跟 vendor 政策風險，主權語料庫這一句就同時打掉。

最後一條，Perplexity Hybrid Compute。這個功能 9 月 1 號在 macOS 上線，Pro、Max、Enterprise 訂閱者都有。做法很清楚：雲端負責前沿推理、網路搜尋、規劃這類重型任務，本地負責處理私人檔案、敏感資料、on-device 動作。本地端用三顆模型——Google 的 Gemma 4 E4B、阿里的 Qwen3.6 35B-A3B、還有 Perplexity 自訓的 Computer 模型。硬體門檻是 Apple silicon Mac 加上 macOS 15 以上、24GB 統一記憶體以上。

這個「敏感資料本地、通用推理雲端」的分工方式，剛好跟 9 月 15 號在 Product Hunt 拿下當日第一的 Resurf 那組敘事對接——Resurf 做的是 macOS 上的個人上下文圖書館，跨 Slack、Notion、Mail、瀏覽器保存使用者意圖，變成 AI 可以呼叫的 context 層。兩個東西合起來，會是 Q4「敏感資料本地、通用推理雲端」這條新分工敘事的完整範本。對台灣 SI、顧問公司、律師事務所、醫療、金融這些 vertical 客戶——他們最大的痛點就是敏感資料不能上雲——Perplexity Hybrid Compute 加 Resurf 加 MODA 主權語料庫，這三合一的 pitch pack 現在就可以做起來。

重點是，今天 9/16 是一個非常密集的觀察窗：Fed 決策當日、iPhone 18 Pro 評測今晚 8 點解禁、Cognition SWE-2 已經釋出、MODA 主權語料庫三倍擴張剛公布、Perplexity Hybrid Compute 上線兩週。這五條線每一條都能單獨變成一份週報、一組 pitch deck、或是一個 per-project audit。如果你這個週末只想動一條，我會選主權語料庫加商業服務業 10 萬案這條——它是本週唯一一個「政策順風、時間視窗未關、競爭尚未擁擠」的 vertical，其他四條的資訊密度都已經被國際媒體吃掉一大半。今天下午到晚上，先把 Fed 記者會、dot plot、iPhone 18 Pro 首波評測這三個爆點盯完，明天再挑一條動手。
