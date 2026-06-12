今天想聊昨天市場一次性把好幾件事兜起來的 6 月 12 號。如果你是 indie、小團隊老闆，或是賣 AI 工具給中型企業的顧問，這一天值得單獨抓出來複盤。

先從最大條的講起。SpaceX 的股票，代號 SPCX，6 月 12 號早上九點半在紐交所開出第一盤。開盤價 150 美元，比承銷價漲了 11%；午後一度衝到 176 塊半；最後收在 169 元，整天漲 25%。單日成交量 3.6 億股，訂單超額認購 3500 億美元，掛牌一天市值就破 2 兆美元。同一天另一邊的鏡像反應是：所謂「七巨頭」，也就是微軟、亞馬遜、蘋果、Google、輝達、特斯拉、Meta，七檔合計蒸發了差不多 2 兆美元市值。這背後的故事其實很簡單——夏天到秋天會陸續有 SPCX、Anthropic、OpenAI 三家超大型科技公司 IPO，市場擔心新供給會把錢從現有的七巨頭抽走，於是在 SPCX 上市這一天先反映了一波。

不過真正讓 indie 應該坐起來看的是 SPCX 申報文件 S-1 揭露的兩條合約。第一條，Anthropic 每月付給 SpaceX 旗下 xAI 12.5 億美元，租用一個叫 Colossus 1 的算力叢集，這份合約簽到 2029 年 5 月。第二條，Google 每月付 SpaceX 9.2 億美元，到 2029 年 6 月。兩筆加起來，光算力出租 SpaceX 一年就有 260 億美元的合約收入。簡單說，Colossus 1 是 xAI 自己訓練 Grok 用到一半發現混架構效能不佳，就乾脆轉租出去，Anthropic 與 Google 是兩個大房客。所以原本市場有點緊張「6 月 30 號 Colossus 1 折扣失效後 Anthropic 算力會不會出問題」、「Anthropic 半年內找不到新算力來源」的擔憂，今天一次反向被解掉——Anthropic 已經把算力 lock 到 2029 年，這從威脅變成 vendor moat。

對 indie 提案中型企業最直接的影響是：原本你寫提案要解釋「為什麼 Anthropic 算力不會崩」，現在反過來變成 narrative 加分項。加上業界中位數預測 Anthropic 12 月 15 號 IPO、估值 1.1 兆美元，所以從現在到 12 月 15 號這 6 個月，「6 個月後 Anthropic 要 IPO」這一頁附在採購提案後面，可能會變成台日中型企業採購文件的新標配。中文社群這層 narrative 的供給幾乎是零，要寫就是現在。

再來說當天另一個對 indie 很實際的消息。Linear，就是那個被很多軟體小團隊當 issue tracker 用的工具，6 月 11 號上了一個叫 coding sessions 的新功能。簡單講，你在 Linear 開一張 issue，可以直接點一個 delegate 按鈕把這張 issue 派給 Claude Code 或是 Codex 跑；agent 會自動把你的 repo 拉下來、讀一個叫 skills.md 的檔案——這個檔案是放在 repo 根目錄、用來告訴 agent 這個專案的程式風格、目錄結構、常用指令——然後跑完之後，把草稿 PR 跟 diff 貼回原本那張 issue 底下。除了 issue，從 chat、comment、Slack thread 也都可以觸發。定價走的是工作區共享的 promotional credit pool，每個沒被停用的使用者算 20 美元，整個 workspace 共用，不是 per-seat。Basic、Business、Enterprise 三個 plan 全開通。

這個功能對 5 到 20 人的軟體小團隊或是一個人公司是很大的事，因為這是「issue tracker 跟 coding agent 第一次原廠串接」。過去你要做這件事得自己架 webhook、自己接 GitHub API、自己想辦法做隔離，現在 Linear 直接收編了。所以如果你本來就在賣這類自架 SaaS，60 天內 niche 大概會被收窄；反過來如果你是賣 dev tool 顧問業務、賣 Claude Code agency 服務的 indie，這禮拜可以挑一條 vertical issue——bug fix、小 feature、refactor 都行——把完整 delegate 流程跑一遍，做成案例研究發 LinkedIn 跟 Threads。中文社群的供給目前是零。再進一階，把「Linear coding session 加 skills.md 加 workspace credit 試算」包成 30 天 1500 到 5000 美元的 fixed price audit，是這禮拜可以立刻動的事。如果客戶用的是 GitLab 不是 GitHub，Linear 原生不支援，那就加開源的 Cyrus 自架當 fallback。

第三條，Claude Code 在 6 月 11 號到 12 號連發三個小版本，2.1.173、2.1.174、2.1.175。最關鍵的兩件事：第一，VS Code 裡面的 `/usage` 指令終於把 24 小時跟 7 天兩個時間窗口的用量，拆成「cache miss、long context、sub-agents」跟「Skills、Agents、Plugins、MCP」兩個維度。過去 nested subagent 跟 workflow 燒了多少 token 是個黑箱，要自己架計帳工具才看得到，現在 Claude Code 內建就能看。第二，2.1.175 加了一個叫 `enforceAvailableModels` 的 managed setting，企業 admin 可以設定 model allowlist，當使用者或 default 設定指到 allowlist 之外的 model，系統會自動 fallback 到第一個允許的 model，使用者層級不能擴大白名單。這對賣中型企業 governance audit 的 indie 是很硬的合約條款——你可以直接把這個 setting 寫進 SLO 附錄。

時間軸上要注意：6 月 15 號 Anthropic Agent SDK 開始走雙池計費，`claude -p`、Agent SDK、Claude Code 在 GitHub Actions 跑、還有第三方 agent app，全部改吃獨立的 20、100、200 美元月度 credit，按 full API rate 收，沒有 rollover、沒有自動 fallback。所以今天等於是 6 月 15 號前最後一個工作天視窗，要 ship「Bugbot 加 Fable 5 加 Claude SDK 加 nested subagent」四邊的 spend cap 試算工具的話，後台資料源現在可以直接接 `/usage` 細項，比過去自己 scrape OAuth 容易很多。

再一條，是 indie 接 enterprise 的新 niche——Notion 的 Developer Platform。5 月 13 號 Notion 推出主版，包含 CLI、Workers 沙箱、雙向 webhook；6 月 10 號之後 Custom Agent 可以在 Slack 私頻道讀寫；Workers 是 Notion 自家 hosted runtime，你寫程式、用 CLI 部署、在 sandbox 跑，支援 database 同步、custom agent 工具、webhook trigger。Launch partner 包含 Claude Code、Cursor、Codex 跟 Decagon。最重要的是：現在到 8 月 11 號全部免費，之後才開始按 Notion credit 收費。所以這 60 天是「免費試吃」窗口。

如果你的客戶用 Notion 當 source of truth——很多 30 到 200 人的中型團隊都是這樣——這禮拜可以做的事，就是挑一條 vertical workflow（HR onboarding、行銷 brief、法務 contract review 都可以）把「Notion 是 source of truth、Custom Agent 寫 Worker 做 webhook trigger、database 雙向同步」這條 pipeline 跑通，8 月 11 號前拍 1 到 2 個 case study demo 影片發 LinkedIn 跟 Threads。台日中文社群現在幾乎零 Workers 教學，這是供給縫隙。

重點是，6 月 12 號這一天把好幾條 narrative 一次接起來：SPCX 首日大漲 25%，等於市場替 Anthropic 算力 lock-in 投了反向票；Linear 的 coding sessions 讓小團隊第一次有原廠的「issue tracker 接 coding agent」可用；Claude Code 的 `/usage` 細項讓 6 月 15 號雙池後的用量黑箱被打開；Notion Workers 是接下來 60 天免費的 enterprise niche。如果你是 indie 或顧問，這禮拜的 to-do 很清楚：寫 SPCX 加 Anthropic IPO 的中文 narrative pack、跑 Linear coding sessions 案例研究、ship spend cap 試算工具、跑 Notion Workers PoC——四條都做不完沒關係，挑你最近的客群最相關的一條先動。
