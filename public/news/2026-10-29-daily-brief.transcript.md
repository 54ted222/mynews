今天想聊的，是 10 月 29 日這一天最緊的那個時間窗口：Smithery 的 MCP Proxy 和 OpenAI Evals，兩邊都在 10 月 31 日同一天進入關閉或唯讀，從現在算起只剩 48 小時。對台灣在用這些服務的獨立開發者和一人 SaaS 來說，這兩天不只是倒數，而是最後能把搬遷做完、順便收一筆 crunch 顧問案的窗口。

先講 Smithery 這邊。Smithery 本來是幫大家把各家 MCP 伺服器集中接起來的中介平台，提供 run.tools 或者 server.smithery.ai 開頭的 proxy URL，附帶身份驗證、session 管理，還有自己的 CLI 跟 SDK。今年 8 月 5 日被 Arcade.dev 收購之後，就宣布 10 月 31 日把 proxy 整組下架：所有 server URL、API、Connect、Toolbox、帳號、API keys、CLI 跟 SDK 全部標為 deprecated；8 月 5 日之後的付費已經在陸續退款。保留下來的，只剩 smithery.ai 這個目錄站本身，認證過的伺服器會改成顯示 vendor 自己的官方 MCP URL。

這裡最容易被低估的地雷，是一個叫 apitracker.io 的追蹤站 10 月 23 日那篇更新點出來的：你以為把 URL 換成官方的就沒事，但 Smithery 原本幫你做的 auth 和 session management 也會一併消失。他們實際盤點，目前明確對映到替代 URL 的，只有 Linear 的兩條 proxy alias；其他絕大多數條目還沒有確認的對應關係。而且，名字長得像不代表就是同一家，必須回到 publisher 的官方文件去逐一驗證。

所以如果你是現在線上生產環境有在用 Smithery 的台灣團隊，10 月 29 到 30 這兩天要做的事情很明確：第一，把你所有在用的 MCP server URL 列出來、對到 vendor 的官方 MCP URL；第二，Smithery 原本幫你管的 OAuth 跟 session，要決定自己接 identity provider、還是換到別家做；第三，CLI 跟 SDK 的呼叫全部換掉。這三件事本身就是一份完整的 crunch 顧問案 scope，加價 30% 到 60% 接案是合理的，因為窗口就只有 48 小時，過了這天就是救火不是搬遷了。

接下來是 OpenAI Evals 這一邊。OpenAI 開發者文件的 deprecations 頁面寫得很清楚：台北時間 10 月 31 日早上 8 點，也就是 UTC 的 00:00，所有既有的 eval 進入唯讀；再過整整一個月，到 11 月 30 日，整個 Evals dashboard 加 API 下架。同一天下架的還有 reusable prompts，而且 reusable prompts 這邊更麻煩，因為官方沒有提供匯出 API，只能從 dashboard 一條一條手動複製。官方的 cookbook 雖然給了「從 Evals 搬到 Promptfoo」的腳本，但有一個前提：你的 eval 要已經完整跑過一次，才能把 runnable config 匯出來。

替代方案目前主流兩條路。一條是 Promptfoo，開源、免費、本機 CLI、YAML 設定，對小團隊很友善，而且 red-teaming 這一塊 Langfuse 自己也承認沒有對應功能，所以必須保留 Promptfoo 混搭。另一條是 Langfuse v4，走 dashboard 加 production log 的路線，官方 migration guide 自己宣稱可以達到 165 倍的速度優勢。至於 Agent Builder，OpenAI 自己的 migration page 很誠實地寫了一句話，workflow graph 的行為不保證完整轉換，所以搬完必須人工重驗，這個檢查清單本身也是一個可以接的服務。

對接案的台灣 SI 來說，10 月 29 日這 48 小時可以做的事其實很具體：第一，寫一支 Playwright 或 Puppeteer 腳本，把 reusable prompts 從 dashboard 爬下來、整理成 Responses API 用得到的格式；第二，寫一篇 Promptfoo 跟 Langfuse v4 的選型決策樹文章，把 red-teaming 要保留 Promptfoo 這個細節講清楚；第三，寫一份 Agents SDK workflow graph parity 人工重驗的 FAQ 範本。這三樣湊起來，就是一個完整的 48 小時 crunch 服務包，接下來 11 月的 Agent Builder EOL 一個月 crunch 也接得起來。

為什麼要特別強調這兩件事在同一天？因為 10 月 31 日之後，兩邊都還有後續的尾巴，可以繼續切成第二波內容。Smithery 這邊，10 月 31 日 00:00 UTC 關閉的首小時，可以直接做 Live blog 觀察；之後 Arcade.dev 作為新母公司，又同時運營 ToolBench 評測，中立性值得社群長期追蹤。OpenAI 這邊，11 月 30 日之前整整還有一個月的 Agent Builder EOL crunch 可以接，再加上 reusable prompts 搬到 Responses API input 的最佳實踐，都是後續可以寫下去的題材。

不過也要說一下，同一天其實還有其他大事在跑。GitHub Universe 2026 的 Day 1 keynote 在台北時間 10 月 29 日 00:00 剛剛結束，主題叫做「All together now, in the agentic era」，場地在舊金山的 Fort Mason，Day 2 的 closing keynote 又會在明天台北時間早上 5 點登場，主軸是 Copilot delegation 跟 Agent HQ 多模型統一中介。Anthropic 的 S-1 送件後進入第 4 天，1H26 營收 163 億美元、兩個客戶吃掉 25% 的集中度風險，roadshow 預計 11 月 9 日那一週啟動。這些故事都在跑，但相對 Smithery 跟 Evals 這兩個硬倒數，它們都還有時間可以追。

重點是這樣：48 小時聽起來很短，但如果今天就把 vendor URL 清單、auth 替換選型、Playwright 爬 prompts 的腳本這三件事排好，兩天內是做得完的；而且因為是 crunch 窗口，接案報價往上加三到六成也站得住腳。真正的風險不是技術難度，是等到 10 月 31 日當天才動手——那時候就不是搬遷，是救火了。所以今天最該做的，不是再多讀一篇官方 blog，而是打開你的 server URL 清單，從第一條開始對。
