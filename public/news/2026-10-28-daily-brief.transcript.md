今天想聊三件綁在同一個 72 小時窗裡的事，一件是昨天漏掉的大事補正，一件是今晚凌晨要開場的實況，還有一件是這週五一次要收的兩個下線倒數。

先講最重要的補正。昨天的 brief 寫 Anthropic S-1 的 72 小時窗來到第三天還沒看到檔案，當時下的判斷是偏向延後；結果這個判斷是錯的。Anthropic 其實已經在 10 月 26 號美東時間向 SEC 的 EDGAR 系統正式遞交了 S-1 註冊書，Anthropic 官方的 X 帳號美東時間下午一點零五也同步公告過。所以到今天 10 月 28 號，實際上是 S-1 落實後的第三天，不是「仍無」的第三天。

既然檔案已經出來了，裡面幾個數字就值得特別停一下。他們打算用的 ticker 是 ANT，掛在 Nasdaq。2026 年上半年營收 163 億美元，拆開看第一季 47.3 億、第二季 115 億，季對季等於成長 143%，這個斜率非常陡。上半年淨損 807 億美元，看起來很嚇人，但要特別講一下的是，裡面 724 億是可轉換債跟 SAFE 的公允價值變動，是會計性的、不是真的燒掉的現金，媒體報導多半沒把這塊分開寫，所以之後做 FAQ 的時候一定要幫讀者區分「會計虧損」跟「營運虧損」。再來，截至 2029 年累積的運算承諾總額是 1,205 億美元，很長的一條算力綁約。還有一個比較敏感的數字，前兩大客戶合計吃掉 25% 營收，這個客戶集中度風險是這份 S-1 裡最值得被討論的紅字。至於股價、股數、募資規模三格，目前都還留空白，要等後續修訂版補。簡單說，上市節奏從昨天看起來偏延後，重新變回偏準時，Bloomberg 口徑裡的 11 月 9 號那週開 roadshow，從技術面倒推是可以趕得上感恩節 11 月 26 號前上市這條線的。

第二件事是今天凌晨要盯的 live。GitHub Universe 2026 Day 1 的 keynote，美西時間 10 月 28 號早上九點開場，換算台北時間就是今天晚上 10 月 29 號凌晨零點。地點在舊金山的 Fort Mason，主會場是園區裡那間挑高倉庫改造的 Festival Pavilion。這一屆的主題是「All together now, in the agentic era」，講白了就是圍著 agent 打。預告出來的幾條線很值得追，一條是 Copilot 的 evaluation framework，官方強調可以重現的 benchmark 搭配 LLM 當評審的 assertions；一條直接把口號打成「Stop prompting, start delegating」，就是從下 prompt 的時代走向 delegate 任務給 agent 的時代；另外還有 MCP security、Agent Merge。講者陣容也不小，AMD、Figma、NVIDIA、Coinbase，加上 Anthropic 跟 OpenAI 都有人上台。對一人 SaaS 開發者來說，這場 keynote 之後 24 小時要做的事其實很清楚，就是 live 盯、凌晨兩點做第一波彙整，然後把「Copilot delegation 怎麼在台灣落地」做成 FAQ 推出去。

第三件事更實務一點，是 10 月 31 號這天同時有兩個東西要下線，現在就是 T-3，進最後 72 小時。

第一個下線的是 Smithery 的 MCP Proxy。昨天 10 月 27 號 Smithery 在官方的 /future 頁證實了，10 月 31 號會停掉的範圍包含 run.tools 跟 server.smithery.ai 這兩組 server URL、所有 Smithery API、Connect、Toolbox，連帳號跟 API key、CLI 跟 SDK 也全部標成 deprecated。從 8 月 5 號起付的錢全額退。保留下來的只有 smithery.ai 這個目錄站，由收購它的 Arcade.dev 繼續運營，但不再做中間 proxy，認證過的 server 就直接秀出該廠商自己的官方 MCP URL。問題是第三方的 apitracker.io 盤點下來，目前有確認替換路徑的只有 Linear 的兩條 proxy 別名，其他大多數還沒對映過去。所以如果你的 production pipeline 裡 MCP 連線還掛在 Smithery，這週就是最後的遷移窗口。

第二個下線的是 OpenAI Evals。官方 developers.openai.com 的 deprecations 頁寫得很清楚，10 月 31 號 UTC 零點，現有的 evals 全部進 read-only，到 11 月 30 號整個下架。更麻煩的是 reusable prompts 一起下線，而且沒有 API 可以匯出，只能人工去 dashboard 一份一份複製，所以才會有人這週要寫 Playwright 的爬蟲 CLI 來半自動化。遷移方向 OpenAI 自己指向的是 Promptfoo，一個開源的 YAML 本地 CLI 評測工具；但同一時間 Langfuse v4 也很積極搶這批人，官方號稱查詢速度比前代快到兩個數量級。選型上要注意兩點，一是 Langfuse 的 export 腳本要在 10 月 31 號前先跑完，過了那天就沒 API 可用；二是 Langfuse 自己也承認 Promptfoo 的 red-teaming 它沒對應，要留著混用。

次要帶兩條台灣的事。一個是 iPhone Duo 進第六天，蘋果今天公布全球直營店的現貨規則，台灣不在開放 walk-in 的名單裡，首波就是線上訂購加門市取貨，現場沒預購直接禁排隊，等於把昨天「門市內部備忘勸退」的間接訊號升級成官方規則；日本、香港、韓國也一起被列進禁 walk-in 區，日本預購流量轉來台灣水貨代購的窗口因此打開。另一條是數發部那個 100 億 AI 新創基金，10 月修正的作業要點裡放寬了「主要營運在台的境外公司」也能納投，所以如果你是在矽谷或新加坡掛的公司，但實際團隊跟營運都在台灣，這週就值得重新評估申請。

所以重點是，接下來 72 小時這個窗口非常密。先在今天上午把昨天 S-1「仍無」的誤判補正清楚，附上 ticker ANT、163 億營收、兩客戶 25%、1,205 億運算承諾那幾個數字的 FAQ；下午處理數發部境外公司放寬那條落地教學跟 iPhone Duo 禁 walk-in 的規則確認；今晚熬夜盯 GitHub Universe keynote；明天到週五把 Smithery 遷移跟 OpenAI Evals 匯出這兩個 crunch 顧問案推出去。這週的時間基本上就被這條主線佔滿了。
