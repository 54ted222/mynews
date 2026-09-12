今天想聊的重點就一個——明天週一 9/14 是「雙 event 日」。同一天，兩件對開發者影響巨大的事會同時發生，然後週三 FOMC 再補一刀。所以這個週日下午到明天中午，是一個很短、很緊的最後準備窗。

第一件事，是 DeepSeek V4-Pro 的死線。DeepSeek 官方 Change Log 明確寫著，9/14 04:00 UTC，也就是台灣時間中午 12 點，所有還在打 V4-Pro 的請求，會被強制 route 到 V4.1-Flash 這個新模型，而且直接改收 Flash 的費率，一路到之後 V4.1-Pro 上線為止。也就是說，如果你今天沒做遷移驗證，明天中午之後你的產品可能還在跑，但拿到的答案已經不一樣了。V4.1-Flash 雖然帳面數字更大，552B 的 MoE 架構、1M context、原生多模態、KV cache 只有前代的四分之一，可是它的 prompt 表現跟 V4-Pro 不是一比一。你以為只是換模型，實際上是你的整個 prompt template 要重新驗證一輪。

不過這裡有個變數要小心。Intelligent Living、Bitrue 這些二手來源披露了一則消息，說 DeepSeek 因為用戶反應，決定 9/14 之後繼續提供 V4-Pro API，billing 也不變。可是官方 Change Log 到今天為止沒改。所以簡單說，以 DeepSeek 官方 Change Log 和官方 X 帳號為準，不要看到二手消息就放心不做遷移。真的等到 04:00 UTC 被靜默 route 才發現，帳單和輸出品質同時翻車，那就來不及了。

第二件事，是 iOS 27 明天 9/14 正式上線。這次最大的訊號，是 Siri 換腦——Siri AI 的 beta 版直接由 Google Gemini 2.5 Pro 提供動力，走 Apple 自己的 Private Cloud Compute 架構，Google 拿不到個人資料。但這裡有幾個限制條件要記住：每日呼叫有上限、iCloud+ 訂閱者有更高的 cap、EU 只允許 Mac 和 Vision Pro 用、中國大陸完全不上線、首發只支援英文、只有 iPhone 15 Pro 跟 16 系列以上支援。台灣屬於 iCloud+ 主要輸出市場，所以這件事對台灣 iOS 開發者影響很大。特別是「Siri AI 呼叫優先權」這件事——當使用者的每日 quota 有限的時候，你的 App 有沒有被 Siri 優先呼叫，會變成 App Intent 和 Shortcut 開發者一個全新的競技場。

再來，週三 9/16 的 FOMC 決策。這個現在幾乎是板上釘釘的 25 個基點升息。BigGo 給的機率是 79.5%，是近 6 週最高。加上 CPI hot beat、PPI 月增 0.4%、非農就業增加 16 萬 2 千人、還有 Warsh 8/28 在 Jackson Hole 那場鷹派演講，這四樣加起來，rate hold 的情境基本上是 off the table 了。真正還要看的，是 9/16 當天的 dot plot——就是聯準會 19 位成員每人畫一顆點的那個利率預期圖——它會告訴市場「今年還有沒有第二次升息」。這個資訊對跨境 SaaS 影響很直接：升息確定等於美元強、台幣壓、CoWoS 供應鏈持續看多，但你的訂閱定價敏感度會被壓縮。

再來聊 Grok。Grok 4.7 這已經是第三度延遲了。Musk 9/11 在 X 上說「還需要幾天做 RL tuning」，可是 xAI 官方 docs 到目前都還列 grok-4.6 是最新。8/22 說「3 到 4 週」、後來變成 9/12、現在又 slip 過去，也沒給第四個窗口。所以簡單說，不要為一個還沒發布的模型改工作流。目前主力還是 Sonnet 5、Fable 5.1、Astra、Gemini 3.8 Flash、DeepSeek V4.1 Flash 這五軸。

蘋果這邊有兩條線同時進行，而且方向相反，非常有意思。第一條是 iPhone Duo，也就是蘋果第一支折疊機。週末的 hands-on 評測全面加碼，Bloomberg 直接下標「iPhone X 以來最興奮」，9to5Mac 出了 gallery，Gear Patrol 出 first thoughts，Macworld 出 release guide，情感高點爆棚。折疊機 10/16 開放預購、10/23 開賣。

但同一個週末發生了第二件事：iPhone 18 Pro 昨天 9/12 早上美西 5 點開放預購，AppleInsider 說是「surprisingly slow start」——半小時後所有 SKU 都沒有 shipping delay，9/18 交機完全無壓力。這對蘋果來說是反常的，因為以往 iPhone Pro 預購頭半小時很多 SKU 就會排到後面出貨，這次沒有。合理的解讀是三個因素疊加：Duo 即將上市讓消費者觀望、上一代 17 Pro 升級太強沒動力換、加上週六這個反常的預購時段。不過重點是——Duo 排擠 18 Pro 已經是結構性訊號，不是短期一次性。這對台廠光電、光學、hinge、FPC 這四軸供應鏈的 Q4 rerating 會有影響。

再來聊台灣供應鏈本身。TechNews 昨天 9/12 快訊：TSMC CoWoS 產能供不應求，訂單外溢到聯電、Amkor。CoWoS 就是先進封裝，把邏輯晶片和 HBM 記憶體疊在同一片矽中介層上，是 NVIDIA H100、B100 這類 AI 加速器的關鍵。台積電獨家、產能長期不夠。摩根士丹利預估 2026 年 CoWoS 月產能會突破 10 萬片，2028 年會是 2026 年的兩倍。另外 2 奈米良率已經突破 90%，蘋果包下 2026 年竹科寶山廠首批過半產能。所以 Q4 台股的結構主線就是這個：CoWoS 續看多、加上台幣壓、加上折疊機 T-33 供應鏈 rerating、再加上 iPhone 18 Pro 預購冷清 rerating 下修，這四個訊號會在明天週一開盤同時反應。

開發者工具這邊，兩則重要更新。Claude Code v2.1.269 週四 9/11 發布，最大亮點是 `claude plugin eval` 這個指令——它會把你寫的 plugin 跑一整組 eval suite，然後回傳可複製、有分數的評測結果。對 skills 或 plugin 開發者來說，這是「demo fever」時代第一個能量化質量的方法論。另外 `/output-style [name]` 可以跨 Remote Control、cloud、headless session 切換，Bash 檔案編輯會直接印 diff，OTEL metrics 加上 vcs repository 屬性。這幾個小功能疊起來，就是 skills / plugin 質量 SOP 可以正式進企業交付流程了。

OpenAI 這邊也有大事。9/10 三天前，OpenAI Agents API 進入 public beta，把原本 Codex CLI 用的 harness 直接開放給開發者當雲端服務。你只要定義 task、model、tools、compute environment，OpenAI 幫你管 session orchestration、context compaction、recovery。首波 9 家 partner 包括 Cloudflare、Vercel、Blaxel、Daytona、DigitalOcean、E2B、Modal、Oracle、Runloop。hosting fee 從 1GB 的三美分到 64GB 的一塊九，20 分鐘一段 session，5 分鐘計費最小；web search 是 10 美元一千次 query。這是 OpenAI 第一次直接對 Anthropic 的 Managed Agents 和 Claude Agent SDK 做正面應對，「agent loop 我來管、compute 你選 vendor」變成新分工。

重點是——明天週一，你手上要準備四份東西。第一，DeepSeek V4-Pro 遷移驗證套件，包括 shadow eval、Flash rate 帳單推估、prompt 差異對照，然後盯著 DeepSeek 官方 X 看那則「持續提供」的變數到底怎麼演。第二，iOS 27 Siri AI Gemini 呼叫優先權 audit，還有 iCloud+ 訂閱定價敏感度模型。第三，FOMC 9/16 三天倒數 dashboard，包括跨境 SaaS 匯率避險 SOP、蘋概股 rerating 追蹤、iPhone Duo T-33 和 18 Pro 預購冷清雙訊號。第四，Claude Code plugin eval SOP，這個可以直接進商業服務業 AI 導入 10 萬案的交付流程做質量控制。

明天中午 12 點台灣時間，也就是 04:00 UTC，就是這波最緊迫的死線。今天下午到明天早上這段時間，是最後的驗證窗。以上就是今天的每日創業情報，我們明天再聊。
