今天想聊的，其實是一個看起來很分散、但骨架非常清楚的一天。Anthropic 在同一個窗口裡一口氣推了三件事：一個新產品線 Claude Science、一整套 Enterprise 的成本與治理工具、加上一個給科學家的資助計畫。三件事放在一起，你會發現 Anthropic 現在講的故事，已經不是「我有更聰明的模型」，而是「我把模型、技能、資料、算力、資助鉤子這一整套打包給你」。

先講 Claude Science。這是 Anthropic 第一次做的、不靠新模型當賣點的產品，等於是一個給研究者用的 workbench。他們接進六十多個科學資料庫，附上像 genomics、single-cell、proteomics、structural biology、cheminformatics 這幾個預先配好的 skill，跑出來的東西是可稽核、可追溯的實驗紀錄。Beta 對 Pro、Max、Team、Enterprise 都開放。簡單說，Anthropic 是在示範：foundation lab 的下一步，不是繼續刷 benchmark，而是把模型、技能、資料、算力、資助這幾個環節，直接打包成一個垂直的工作台。

跟 Claude Science 綁在一起的，還有 AI for Science 資助計畫——挑五十個專案，每個給三萬美金的 Claude credits，合作的算力平台 Modal 再加碼兩千美金 compute。申請截止 7 月 15 號，錄音當下大概還剩十一天倒數。對做生技、藥學、學術、研發客戶的 indie 或 agency 來講，這是一條可以馬上開的顧問線——七月中之前幫客戶寫申請書，一單五百到一千五百美金，還可以附上營收分成。如果你不做科學垂直也不用覺得沒事，這個「模型加技能加資料加可稽核輸出加資助鉤子」的樣板可以抽象化，套進法律、財務、開發工具這幾個領域，就是一份現成的 vertical wrapper 決策樹。

再來是第二軌，Claude Enterprise。這一波 Anthropic 把三件事同時 ship 給企業客戶。第一，admin analytics 儀表板，依 group、依用戶看用量與花費，還會標出誰動了幾個 artifacts、改了幾份檔案、掛了哪些 skill 或 connector；資料可以透過 Analytics API 直接接進 Datadog 的 Cloud Cost Management，或接進 CloudZero 這個 FinOps SaaS，讓工程跟財務共讀同一份成本檢核。第二，模型 entitlement——管理員可以在 Chat、Cowork、Claude Code 三個介面各自指定新對話的預設模型，也可以限制哪些 role 或 org 才能碰哪些模型。第三，spend alert：組織用量到 75% 跟 90% 通知管理員，用戶自己 75% 跟 95% 收到 in-app 提醒，還可以直接在 Claude 裡跟管理員申請調 limit。

三件事一起看，Claude Enterprise 就從一個 seat license，升級成一個 FinOps-ready 的治理平台。所以本來在賣 Claude Team、Claude Pro 給客戶的 indie，upsell 話術可以直接改成——「升 Enterprise 不只是換 seat，你買的是治理跟成本可見度」。把 Sonnet 5 當 baseline、Opus 4.8 當高階任務 opt-in，配上 75%、90% Slack webhook 跟 Datadog 儀表板整合，就是一份新的服務包裝。一到三千美金的導入 audit 加上 FinOps dashboard 月訂閱，可以馬上上架。中文、日文的 case study 現在幾乎是零供給，48 小時內就是最好的先發窗。

第三軌跳到 GitHub Copilot。Copilot 6 月 2 號 SDK GA 之後，一個月內連 ship 兩支「非 OpenAI、非 Anthropic」的主力模型——一支 MAI-Code-1-Flash，7 月 2 號給 Business 跟 Enterprise 上線；另一支就是今天真正有話題的 Kimi K2.7 Code。Kimi 是 Moonshot 出的 open-weight 模型，7 月 1 號進 Copilot picker，Pro、Pro+、Max 這幾層 first-wave，Business 跟 Enterprise 需要管理員主動開一個 opt-in policy 才能啟用。模型放在 Azure 上跑，走 usage-based billing。這是第一個開源模型進主流 AI IDE 的 default picker——Copilot 從原本 MAI-Code 加 Sonnet 5 加 GPT-5.6 Sol 的三軌 router，一口氣升成四軌並存，多了一條「開源、可自審、可離線 audit」的軌。

把 Anthropic 那三軌，跟 Copilot 這條四軌並存擺在一起看，圖就很清楚：企業買 AI 的邏輯，已經不是「哪一支模型最強」，而是「怎麼把不同任務分派到不同軌」。所以 indie 這時候要做的事情很具體——ship 一份四軌 router 的 cost dashboard，把 MAI-Code 給 high-volume、Sonnet 5 當 baseline、GPT-5.6 Sol 走 frontier、Kimi K2.7 拿去做 mid-frequency、非敏感、又對成本敏感的任務。再加上一份「開源模型 audit 合規檢核」清單，一份 audit 一到三千美金，一份 SOP 九十九到一百九十九美金，都是 48 小時內可以先發的東西。

最後兩件快講收尾。第一，Anthropic KYC 7 月 8 號生效，錄音當下大概倒數四天。這件事已經在 Reddit 主流 AI thread 被定調成「Anthropic 開始 enshittification」，24 小時內沒有收斂的跡象。scope 目前限定 Claude Free、Pro、Max 這三個消費層，Team、Enterprise、Platform 豁免。麻煩的是 flagged trigger 條件到現在還沒公開，你可能連用幾個月都沒事，也可能中途突然被要求驗證。加上生物辨識代辦廠商 Persona 在 2 月一批 Discord 檔案公開暴露的爭議，跟 Founders Fund、Peter Thiel 的交叉持股一起被媒體疊寫，這條 narrative 這幾天不會退。如果你自己的 SaaS 有依賴 Claude 消費層——尤其是有中國、東南亞、中東用戶的——48 小時內把 flow audit 收尾，客戶那邊也要在 4 天內把提醒信、Team 或 Enterprise 升級決策樹一併打包 ship 出去。

第二件更快。Claude Code 7 月 2 號 ship 了 2.1.199，一個很務實的 reliability release。三個重點：stacked slash-skill 現在載入前五個 skill，不是只吃第一個；Linux 上的 background agent daemon 修好了 unclean shutdown 每五十秒左右自殺、順便殺光所有 agent 的 bug；還有 subagent 在 API mid-stream error 或 rate limit 時，會保留 partial output 加上 incomplete-response 標記，不再靜靜地丟掉。這個版本對用 Claude Code 的 indie 是個 no-brainer，馬上升；客戶 SOP 順手把這段 changelog 補進去。

重點是這樣。Anthropic 這一天 ship 出來的不是三個獨立的新聞，而是同一個故事的三個面——model、workbench、FinOps 一起打包，narrative 已經從「賣模型」變成「賣治理加垂直深度」。Copilot 把 Kimi K2.7 塞進 default picker，是這個故事另一邊的鏡像——多軌並存變成 baseline。你手上如果有 indie 生意、有客戶 pipeline，48 小時的窗口就是把中文、日文的 case study、audit 提案、SOP 範本先發出去；同時 KYC 4 天倒數、Claude Code 2.1.199 這兩件事順手處理掉，就不會被追著跑。
