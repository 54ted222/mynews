今天想聊的是 2026 年 10 月 12 日，連假後正式開工的第一天。這一天比較特別，有兩層時間背景要先交代。第一層，是這週剛好是本月唯一一個完整的工作週，從 10 月 12 日一路到 10 月 18 日，中間都沒有國定假日，是整個 10 月最適合推進專案的 5 個工作天。第二層，是下週緊接著就是 TSMC 第三季法說會，10 月 15 日舉行，今天是 T-3，也就是靜默期的第 8 天。所以今天這個開工日，本質上是「本週收心、下週法說、下下週 Agent Builder 遷移倒數」這個三階段節奏的起點。

先講最緊迫的事情，就是 Claude Haiku 5.5 的 shadow eval 收尾決策。Haiku 5.5 上線到今天是 T+5，過去這幾天其實就是跑 shadow eval 的收尾期；今天是最後一天決定，到底要不要把現有的某一條 pipeline 正式切換過去用 Haiku 5.5。如果再拖，就會錯過本週這個完整工作週的切換窗口，下週一堆法說會跟預購事件壓進來，就沒時間做這種底層切換了。簡單說，建議的切換甜蜜點是短 context，小於 100K token，然後是分類、摘要、轉譯這三類子任務；禁區是 agentic coding、terminal 操作，還有超過 100K 的長 context，這幾類 Haiku 5.5 的 benchmark 數字還不夠看，Terminal-Bench 連 40% 都勉強過，比 Sonnet 5.5 的 70% 差了快一倍，不要硬塞。

再來談今天最 underrated 的一個工具堆疊訊號，就是 Vercel AI SDK v7 的 HarnessAgent。這版本其實 6 月底就 release 了，但真正值得注意的是，它用一組 TypeScript API 就可以同時操控 Claude Code、OpenAI Codex、還有 Pi 這三家的 agent harness。意思是，你今天用 Claude Code 當底層的 agent，明天想試 Codex，應用層的程式碼不用改，只要換 provider 設定就好。對一人 SaaS 來說，這個「不綁 provider」的訊號很重要，因為過去一年我們看到 Anthropic、OpenAI 的模型迭代太快，誰押錯一邊都會很累。所以今天開工第一件事，建議先把現有的某一條 pipeline 跑一次 v7 的 codemod；要注意 v6 到 v7 有幾個 breaking change，像是 stepCountIs 改成 isStepCount、onFinish 改成 onEnd、generateObject 可能要手動修。跑完先 shadow production 一週，再切主線，不要衝進去。

另一條今天的大新聞是 Supabase Multigres 開源，加上 6 月的 Series F 融資 5 億美元、估值 105 億美元，由 GIC 領投。Multigres 簡單說就是 Postgres 版的橫向擴展方案，概念上類似 MySQL 世界的 Vitess。對已經走 Supabase 深坑的一人 SaaS 來說，這條訊息的意義是：Supabase 現在把 Postgres backend、原生 vector、原生 realtime、原生 auth、再加上原生 horizontal scaling，通通整合在同一個全家桶裡，護城河又加深一格。對 Convex、Neon、Turso 這三家的壓力就會變大。不過要提醒，Multigres 現在還是 alpha，production 不建議，想試的話就跑一條 benchmark，確認橫向擴展模式對自己的產品架構有沒有影響就好。

接下來講下週 TSMC 法說。Reuters 最新彙整的口徑是，第三季營收累計 1.49 兆台幣、約 467 億美元、年增 50%，比先前「超過美元財測上緣」的講法又多了大約 10 億美元。所以 10 月 15 日法說會的焦點已經不是營收 beat or miss，那個已經確定是 beat；焦點變成五個軸：第一，毛利率 65 到 67% 守不守得住；第二，2nm 製程 ramp 會不會稀釋毛利 3 到 4 個百分點；第三，海外三廠，就是 Arizona、台灣新廠、熊本廠，早期稀釋大概 2 到 3 個百分點，合計 5 到 7 個百分點；第四，全年 CapEx 60 到 64 億美元會不會再往上修；第五，2027 年的 tone 到底是溫和還是緊張。這五軸就是今天下午要定稿的 TSMC pitch pack 的內容。

然後是蘋概股這條線。iPhone Duo 開賣倒數 T-11，10 月 23 日中華電信近 500 間據點 08:00 開賣。台灣大哥大 myfone 預購 T-4，10 月 16 日晚上 8 點，但要特別注意，是 myfone 網路門市，不是全台實體門市，先前有誤傳。Apple 官網台灣同步 10 月 16 日晚上 8 點開放預訂。美國 Apple 官網的「Get ready」準備窗口是 10 月 12 日到 10 月 15 日，所以今天就是 Day 1，也是下週預購前最後的觀察窗口，可以安排一波 push notification 給蘋概股的訂閱用戶。

最後講一下 Anthropic 的 IPO。Reuters 的口徑從原本「10 月中路演」改成「11 月期中選舉 11 月 9 日之後路演」。Series H 融資後估值 965 億，投資人預期 2 兆，首日市值模型估 1.1 兆。下週可以觀察 EDGAR，就是美國 SEC 的電子申報系統，看 S-1 有沒有從機密版翻成公開版。如果真的是 11 月 9 日期中選舉後路演，那 Haiku 5.5 這波 75% 的降價，可能就是 pre-IPO 最後一次紅利，多年合約的談判窗口會落在 11 月。

所以重點是，今天這個連假後開工日，重心有三塊。第一塊是本週內要收掉的：Haiku 5.5 shadow eval 收尾決策，今天就要拍板。第二塊是本週開跑、下週收尾的：Vercel AI SDK v7 的 codemod 跑一條 pipeline、Supabase Multigres alpha 跑一條 benchmark、Agent Builder 遷移路線設計初稿。第三塊是下週要盯的大事件：10 月 15 日 TSMC 法說、10 月 16 日 Taiwan Mobile 預購、10 月 23 日 iPhone Duo 開賣、還有 11 月的 Anthropic IPO 路演。本月唯一的完整工作週 5 天就這樣安排進去，連假收心操完的這一天，就把節奏打到位。
