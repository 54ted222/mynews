今天想聊的是 10 月 27 號禮拜一的每日創業情報。本週有一個很重要的時間節點，就是 10 月 31 號下週五，一天會同時發生兩件 AI 開發者圈的大事，影響到所有在接 AI 顧問案、或是自己做 SaaS 的台灣獨立開發者。這個 anchor 我們等一下會講清楚。

先講今天最新的頭條訊號。第一件事，是 Smithery 的 MCP Proxy 要在 10 月 31 號正式關閉。Smithery 這個名字可能很多人聽過，簡單說它是過去這一年開發者圈最常用的 MCP server 註冊中介——你如果用 Claude Code、Cursor、或是 Codex 這些 agent host 要掛各種工具，你可以不用一個一個去設 vendor 的原生 URL，直接在 Smithery 這邊選就好，它會幫你 proxy 過去。

那為什麼要關呢？因為今年 8 月 5 號 Smithery 被一家叫 Arcade.dev 的公司收購了。Arcade 本身也在做 agent 的 tool runtime，而且它同時在運營一個叫 ToolBench 的 grading leaderboard。所以社群其實蠻緊張的：一方面是 registry 中介被整併掉，一方面是 Arcade 現在同時掌握工具目錄跟 benchmark，中立性會不會有問題，這點要觀察。

那對我們一人 SaaS 開發者的直接影響是什麼？如果你過去三個月有用 Smithery 的 CLI、SDK，或是你產品線上有打 run.tools、server.smithery.ai 這幾個 URL，10 月 31 號之後全部不能用。你要在這週內做兩件事：第一是把所有 server URL 換成各 vendor 的官方 MCP URL，第二是把 CLI 跟 SDK 的呼叫全部換掉。好消息是 Smithery 從 8 月 5 號開始已經全額退款給付費用戶，smithery.ai 這個目錄本身還會留著，交給 Arcade 繼續運營，認證過的 server 會直接顯示 vendor 官方的 MCP URL 讓你抄。

接下來是第二個訊號——Cursor X Subscription 的 10 月 12 號 bundle 方案終於有第二家獨立來源確認了。這個題目我們上禮拜 10 月 25 號的 brief 就有講，但那時候只有 PricingSaaS 一家 aggregator 的資料，不敢全信、也不敢推薦讀者行動。這週 inside.com.tw、Tesla North、The New Stack、FreePressJournal 等好幾家獨立媒體都報了，所以可以當確定事實來處理了。

架構簡單講一下。原本大家熟悉的 Cursor Pro 20 美元方案現在只對 legacy 現有用戶開放，新註冊是不能選的。新架構分成五層：免費版、Plus 8 美元、Premium 30 美元、Super 100 美元、Ultra 200 美元。這裡有兩個坑要特別注意：第一，Grok 跟 Cursor 共用同一份週 usage 配額，你用 Grok 聊天會吃掉你 Cursor 可用的額度，反之亦然；第二，如果你要用第三方模型，像是 Claude 或 GPT，從第一次請求開始就要用 API 原價另外計費，而且要 Premium 以上才能用。

所以選型建議是這樣：你本來就付 Cursor Pro 20 美元的話，不急著切，legacy 繼續用就好；新用戶想入門可以先 Plus 8 美元試試；深度 Claude Code 用戶其實 Super 100 美元不划算，不如直接 Premium 30 美元搭配 API credit 預繳策略比較實在。

好，再來講一個今天時間最緊的——Anthropic IPO 的 S-1 72 小時窗現在到 Day 3 了，今天美東上午 9 點，也就是台北時間晚上 9 點，是最關鍵的觀察時點。背景是這樣的：Anthropic 從 6 月 1 號開始走 confidential submission 遞件 S-1，到今天已經 148 天了。Bloomberg 爆料 roadshow 可能在 11 月 9 號那週開跑，根據美國 SEC 的 15 天公開揭露規則倒推，如果今天 EDGAR 上面還沒看到公開版的 S-1 出現，11 月 9 號路演窗口在技術上就不可能達成了。

那會怎麼演變？基線情境會變成路演延到 11 月 16 號、11 月 23 到 26 號感恩節週定價的機率歸零、整個上市目標會被推到 2027 年第一季。對我們的影響是：如果 Anthropic 延後上市，它就不急著用降價吸眼球，所以 Claude Astra、Haiku 的下一波定價調整可能也會推到 11 月下旬偏後。不過這邊順便提，9 月 1 號 Fable 5.1 cache reads 降 75% 這件事，現在回頭看其實是「IPO 前主動降價」的一個論述支點，可以當個 narrative 掛起來。

快速掃一下其他續行軸。iPhone Duo 來到 Day 5，今天最新訊號是 Apple 門市內部備忘流出，講明不會給現場未預購顧客任何現貨，還要求店員主動勸退想排隊的人。這是官方端第一次間接承認供需缺口。二手市場加價繼續跌，中國從加價 2,000 到 3,000 塊人民幣已經變成中位，6,000 塊的加價基本上賣不掉了。另外 GitHub Universe 2026 明天 10 月 28 號開幕，台北時間 10 月 29 號凌晨 1 點可能會有 keynote，主題「All together now, in the agentic era」，重點 session 包含 Copilot delegation 跟 MCP security，值得追一下 Live blog。

重點是這個：10 月 31 號下週五一天會同時發生兩件事——OpenAI Evals 進入 read-only，Smithery MCP Proxy 關閉。這是本月第二次 MCP 生態重大變動訊號，上一次是 9 月 28 號 Shopify WebMCP checkout 60/60 落實。所以你這週剩下四個工作日的優先順序就很清楚：10 月 27 號到 10 月 30 號，一邊把 Evals 的 dataset 跟 reusable prompts 匯出，一邊把 Smithery 的 server URL 跟 CLI 換成 vendor 原生版本。兩件事都排完，你 11 月 1 號醒來才不會發現產線整個壞掉。那我們明天見。
