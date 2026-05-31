今天想聊一條主線——就是 6 月 1 號，今天，GitHub Copilot AI Credits 正式 LIVE，然後 6 月 8 號 Cursor 的 Bugbot 也要切 usage-based。一週之內、兩家旗艦同時把計價從「按人頭 seat」改成「按用量 token」。這不是兩件獨立的事，是整個產業「seat to usage」大遷徙的第一槍打下去。

先講 GitHub Copilot 今天到底發生什麼事。原本舊制叫 Premium Request Unit，簡稱 PRU，一次互動算一個 PRU，用完就限速或拒絕。今天起 PRU 直接退役，換成 AI Credits，1 個 credit 等於 0.01 美金，input、output、cached tokens 全部按各家模型的 API rate 乘出來扣。Pro 方案月費 10 美金、含 10 美金 credits；Pro+ 39 美金含 39；Business 19 含 19；Enterprise 39 含 39。Business 跟 Enterprise 在 6 到 8 月有過渡 credits，多送 30 跟 70 美金；舊的 PRU 預算自動轉成 AI credits 預算；code completion 跟 next edit suggestion 還是免費。

聽起來算公道，對吧？但社群實測一跑就炸了。有開發者拿官方 preview 工具回頭算 4 月的實際用量——同樣的操作，舊制 39 美金 PRU，新制換算下來 902 美金 token billing。差了大概 23 倍。不只這條，Pro 月 10 美金 credits 大約只能跑 33 個 Opus 4.7 的 session 就用完；如果你每天問 10 個 chat 問題、每題輸入 10K tokens、輸出 2K，月 budget 第 17 天就會爆。

然後還有一條沒人注意的細節——code review 在 private repo 走「雙重計價」。意思是同一次 review、AI credits 扣一次、GitHub Actions minutes 又扣一次。public repo 還是免費。Codacy 5 月 30 號出了一篇文章標題就是「used to be included, from June 1st you pay twice」——以前包在裡面、6 月 1 號開始你要付兩次錢。這個訊息今天會擴散得很快。

社群反應呢，官方 thread 已經 400 多則留言、將近 900 個 downvote。TechCrunch 5 月 30 號直接用「What a joke」當標題。「我退了 Copilot Pro+、改用 Claude Code Max」這種公開案例一個一個冒。更尷尬的是，Pro、Pro+、Student 三個方案的新註冊從 4 月底起就一直暫停到現在，agentic workload 把訂閱燒爆，官方還沒給重開日期。所以如果你現在還在訂、千萬不要解約——解掉就切不回來了。

對 indie 開發者來說，今天該做三件事。第一，把自家跟客戶的 Copilot budget 上限設好，估一下 6 月 1 號之後 7 天 Cloud Agent、Chat、CLI 的 burn rate。第二，如果你有跑 PR 自動化的中介 SaaS，今天就要發客戶溝通信，承諾自家不會跟著漲、順便幫客戶估 burn rate。第三，內容軸——「我從 Copilot Pro+ 換 Claude Code Max 的 7 天實測加模型路由 SOP」這個題目接下來 30 天都熱，今天起稿正是時候。

再來——明天 6 月 2 號，Microsoft Build 開幕、倒數 1 天。Nadella 9:30 AM 太平洋時間在舊金山 Fort Mason 開 keynote、線上免費直播；現場 in-person 票 1,099 美金、限額 2,500 人，比往年砍掉一半。重點 session 是 BRK207，標題「GitHub Copilot in Visual Studio: Agents That Debug, Profile, Test」。會深拆兩個功能，一個叫 /fleet，就是給一個 prompt、CLI 自動拆多個 task 並行跑；另一個叫 autopilot，CLI 自動批准 tool call、自動 retry、tools 提問也自動回，避免卡住停下來。

Build 還有幾個東西要看。Copilot Super App——這是 Microsoft 計畫把 GitHub Copilot、Chat、Cowork、Autopilot 統合進單一 app 的產品線，Jacob Andreou 操盤、暑末 launch。Fortune 5 月 29 號的爆料說，明天「會提但不 showcase」——本體留 placeholder、demo 主軸放在組件上。然後是 Windows Agent Runtime，簡稱 WAR——OS 層級的 agent 基礎元件，背景 service 管 agent 的生命週期、記憶體、權限，建在 WinRT 上加 rule engine 做細粒度存取，讓 agent 可以直接呼叫檔案管理、排程器、硬體感測器，不用再被困在 Electron 或 Tauri 殼裡跑。另外還有 Microsoft 自家的小模型線，跟 OpenAI、Anthropic、開源並行；以及 Azure AI Foundry 跟 Dynamic Workflows 的整合 demo。

對 indie 來說，明天 keynote 之後 24 小時、把觀察清單貼起來：Super App 有沒有揭具體開發者預覽日、自家小模型怎麼定價、WAR 開發者入口在哪、Foundry 跟 Dynamic Workflows 有沒有官方範本、fleet mode 跟 autopilot 對 6 月 1 號這套 AI Credits 計價會不會出補丁。隱私、離線、低延遲那種垂直市場——診所、事務所、製造業——24 小時內趕快寫一篇「WAR 1 小時上手」搶時效。

接下來是 Cursor Bugbot——6 月 8 號生效。原本 40 美金一個 seat 一個月，砍掉，改純 usage-based。平均一次 PR review 收 1 到 1.5 美金、按 PR 大小跟複雜度算。新增一個叫 effort level 的東西，分 default、high、custom 三檔，你可以讓 Bugbot 想久一點跑深度 review、或寫 custom logic 動態決定 effort 等級。Teams 方案走 on-demand spend、Individual 走 included usage、年訂閱戶要到下一次 renewal 才切——5 月買的等於可以拖到 27 年 5 月。dashboard 可以提前切。

這條疊上 6 月 1 號 Copilot AI Credits，就是「一週兩家旗艦 seat to usage 遷徙」這個論述成型的關鍵。靠「比 Bugbot 40 美金一個 seat 便宜」當賣點的 SaaS 全部要重算單位成本。做 PR 自動化、code review SaaS 中介的，這禮拜就要重排「per-seat 40 月費」對「per-PR 1 到 1.5」的差異化。

第四條——是一個前幾天的 brief 漏報的東西要補回來。Gemini Spark 5 月 29 號已經對美國 Google AI Ultra 100 美金月費的訂戶 LIVE 了，歐盟跟英國還在等合規。Spark 是什麼？簡單說就是 Google 的 24/7 雲端 personal agent——Gemini 3.5 當底、上面套 Google 自家的 agentic harness 叫 Antigravity，跑在 Google 伺服器上，你裝置關機它還在跑，可以監控收件匣、跑排程 workflow、跨 Google Workspace 自動動作。launch 接 Canva、OpenTable、Instacart 三家，用的協定就是 MCP——Model Context Protocol，Anthropic 2024 年底推的開放協定，讓 LLM 用統一介面呼叫外部工具。夏季 2026 再加 Adobe、Samsung、Spotify、CapCut、GitHub、Notion、Slack。

重點是，這是 MCP 第一次成為「通用 personal agent」消費端 distribution layer 的官方協定。Notion 跟 Slack 進名單的意思，就是 knowledge work 類工具優先——對 indie SaaS 來說，這禮拜真的要評估自家寫不寫 MCP server、要不要進 Spark 夏季名單。不寫的話、在「消費端 personal agent」這條生態裡會慢慢被邊緣化。順便提一個思考點——使用者花在 Spark 後台跑 task 的時間，就是花在你家 dashboard 上的時間少。靠「使用者打開我家 app 看 dashboard」當差異化的 SaaS，6 個月內會被擠出 attention。

最後一條，講 Mythos。Anthropic 5 月 28 號隨 Series H 那輪 65 億募資、965 億 post-money 估值、外加 Opus 4.8 一起公告 Mythos「coming weeks」公開。倒數大概落在 14 到 30 天區間，也就是 6 月 11 號到 6 月 27 號之間。Mythos 是 Anthropic 在做的 AI 安全研究模型，主打自動找程式漏洞、自動寫 exploit。內測叫 Project Glasswing，掃了 1,000 多個開源專案、回報 23,019 個潛在漏洞、6 家獨立資安公司驗證 90.6% true positive、62.4% 是高危跟危險級別。但有個新瓶頸——已通報 530 個漏洞、只 75 個被修了，修復率只有 14%。這就是新的內容軸——「OSS maintainer 自動分類加 PR 提交加維護者溝通」的助手機會繼續發酵。

收尾——重點是這樣。今天 6 月 1 號是「seat to usage」大遷徙的起點，明天 6 月 2 號 Microsoft Build keynote 是「OS 級 agent primitive」的揭曉日，6 月 8 號 Bugbot 切過去就是兩家旗艦同週成局，再加上 Spark 在美國已經 LIVE、MCP 變成消費端 agent 的標準協定，然後 Mythos 接下來 2 到 4 週內會公開。這五件事疊在一起，1 到 10 人的 indie 開發者這禮拜該做的事是——budget 上限設好、客戶溝通信發出去、模型路由 SOP 寫出來、自家要不要做 MCP server 想清楚、Copilot 訂閱不要解約鎖在那邊。今天的 30 天熱度從這裡開始算。
