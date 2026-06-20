今天想聊的，其實是一個從這週三、四、五連續三天累積出來的訊號。表面上是三件看起來各自獨立的事——Cursor 出了 3.8、Claude Code 多了一批安全相關的新功能、然後 Baseten 又傳出一輪新的募資——但放在一起看，整個禮拜其實在改寫同一個問題，就是：AI infra 到底要怎麼真正接進個人開發者跟小團隊的日常。我想用這條主線把今天的 brief 串一遍。

先從 Cursor 講起，因為它最有體感。Cursor 在 6/18 推了 3.8，這次最關鍵的改動，是把原本只是個附屬功能的 automate 指令，正式推成所謂的「always-on agent」核心。簡單說，以前你在 Cursor 裡叫 agent 做事，是「我下一個 prompt、它做一次」，做完就斷。3.8 之後，你可以在普通的 local agent session 裡直接用 use slash automate，然後用自然語言描述你想自動化的工作，Cursor 就會幫你配好觸發條件——可能是某個 GitHub PR 開出來、可能是 Slack 上有人對某則訊息按特定的表情符號、可能是排程、可能是 webhook，甚至可以接到 incident 通報工具。它會把這些觸發條件、要做什麼、要用什麼工具，整套包進一個 automation 裡。而且 computer use 是預設開啟的，你還可以在指令裡叫 agent 跑完後 demo 一次給你看結果。

這對個人開發者跟小團隊有兩個立即的意義。第一個是，你原本掛在 GitHub Actions 或 cron job 上跑的 PR review、夜間重構、Slack 客服分類，這些其實都可以遷到 Cursor 的 automation 裡，省下一條 CI 維護線。第二個是，如果你本來就在做 dev tool 顧問業的話，這就是一個 7 天熱門的新接案 niche——幫客戶把現有的 GitHub Actions、Zapier、n8n 工作流改寫成 Cursor automation 的 SOP，audit 報價大概落在 1,500 到 5,000 美金之間。重點是，中文社群的供給目前接近零，所以你下週發中文 case study，inbound 的潛力是很高的。

接著看 Claude Code。Anthropic 在 6/19 推了一批新東西，分兩個層次。第一個層次是 auto mode 的安全性大幅補強。以前最讓人不敢開自動模式的原因，就是怕 agent 一鍵 git reset hard，把你 4 小時的工作直接沖掉。6/19 之後，像 git reset hard、git checkout 點、git clean fd、git stash drop 這幾個指令，如果使用者沒有明確說要丟掉本地變更，就會被直接擋下來。git commit amend 也只有在 commit 是 agent 自己這個 session 做的時候才會允許。terraform、pulumi、cdk 的 destroy 指令，預設都得指定 stack 名稱。簡單說，就是把那些「按下去就回不去」的指令全部加了安全網。

第二個層次更重要，是 Claude Platform 的自架 sandbox 跟 MCP tunnel 正式 GA，從先前的 public beta 跟 research preview 畢業了。這兩個東西配在一起的意義，是第一次有 frontier coding agent 的官方參考架構，可以讓「agent 的推理邏輯留在 Anthropic、tool 執行卻完全留在你自家 VPC」這件事變成正常可落地的方案。MCP tunnel 是個 outbound-only 的反向連線，你的 MCP server 主動撥到 Anthropic 邊界節點，所以企業 VPC 不必對外開 inbound port、也不用再架 ngrok 或 Tailscale 那種 ad-hoc 隧道。

對個人開發者，這意味著兩件事。一個是 auto mode 終於敢開了——本來保守的人這禮拜就可以把 dash dash auto 寫進 GitHub Actions 跑一週實測。另一個是，如果你想跨進金融、醫療、法律、政府這些 regulated 的 vertical SaaS，這是亞洲第一次有公開、可抄的 reference architecture。你可以接「Claude Code agent loop 留在 Anthropic、tool execution 拉回客戶 VPC」這種 audit 加部署，5,000 到 25,000 美金，搭配 Cloudflare、Daytona、Modal、Vercel 任一家 sandbox provider 就能上。

然後是 Baseten。6/18 到 6/19 傳出他們已經完成 15 億美金募資，估值 130 億，是五個月前的 2.6 倍。領投陣容包含 Altimeter、Conviction、Spark Capital、Sands Capital、Wellington，這輪 deal 結構是雙層的——一部分按 110 億估值、一部分按 130 億。Baseten 是做 serverless AI 推論平台的，客戶大量轉去用開源模型替代昂貴的閉源 API，是這輪估值跳升的直接推力。

這件事對 indie 有三個訊號。第一，這基本上把「LLM router 走 open source 路線」的基本面 confirm 了。把 Claude 跟 GPT 留給高風險、高複雜度的任務，其餘改用 GLM-5.2、Kimi K2.7、Llama 4，已經是主流動作，不再只是省錢偏方。第二，那個老問題——「我到底要自架推論還是用 Baseten、Modal、Replicate、Fireworks」——已經變成 indie 反覆問的問題，現在做三家對比 audit，1,500 到 3,000 美金，是接下來 7 天的熱門 niche。第三，Anthropic IPO 倒數 12/15、加上 Baseten 130 億這條新聞線一起串，你給客戶的提案多加一頁「open source fallback」reframe，會比上個月更容易賣出去。

那麼把這三件事拼回主線。Cursor 3.8 是「automation 的入口從 CI 工具搬進 IDE 內、變成 always-on」；Claude Code 是「agent 的執行環境從雲端黑盒搬進你自己的 VPC、變成可控可審」；Baseten 130 億是「推論的供給從少數閉源大廠搬進開源 + 多供應商的競爭市場」。三件事都在同一週發生，都在把原本屬於大公司 infra 團隊的能力，往個人開發者跟小團隊推。這也是為什麼今天 brief 裡的點子全部都圍著「顧問 + audit + 落地 SOP」打——因為這套基礎建設真的剛好在這禮拜對個人開發者打開窗口。

順便提一些今天該收進視野的東西。Fable 5 的退費窗在台北時間 6/21 下午 3 點正式關掉，沒送單的人已經沒救了，剩下的策略只能轉成「stack 重設加 Opus 4.8 baseline 確認」。GPT-5.6 的 launch window 從 6/22 開始 7 天倒數、Polymarket 機率仍鎖在 83%，這禮拜內你最好把 LLM router 的權重重排模板先寫好、把 eval scoreset 至少留 10 條代表性 prompt 準備好，6/24 上線當天就可以跑 A/B。Qualcomm 在 6/16 傳出要收 Jim Keller 帶的 Tenstorrent，估值 80 到 100 億；這對 indie 短期沒影響，但是「RISC-V 加開放 AI 晶片」第二個大廠背書，對「NVIDIA 永遠是 default」的客戶提案 narrative 要開始多備一頁。MCP 的 7/28 spec release candidate 也釋出了，stateless protocol 是大改，自架 MCP server 的人這禮拜先讀 spec、預留 7 月最後一週做升級。

重點是這樣。這禮拜的訊號合起來看，AI infra 對個人開發者的友善度，是過去半年最大的一次跳升。Cursor、Claude Code、Baseten 三條線都把原本要花 6 個月才能組起來的東西，壓縮成個人開發者一週內就可以落地的選項。如果你只能挑一個今天動手做的事，我建議是花 45 分鐘把自家一個 GitHub Actions 或 cron job 遷成 Cursor 3.8 的 automate，記錄遷移痛點跟 7 天 ROI 預期數字，然後發一篇中文短文出去。中文供給為零、現在動手就是先機。
