今天想聊三條對 indie 都很要命、而且剛好同一週爆出來的線。一條是 Apple WWDC 把 Claude 跟 Gemini 抬成 iOS 系統預設助理，一條是 GitHub Copilot 自己出了一個桌面 App、SDK 也一次 GA 六個語言，再來一條是 Anthropic 在東京開的 Code with Claude 已經倒數最後一天。這三件事擺在一起，會把六月剩下半個月該怎麼動講得很清楚。

先講 Apple。昨天 6 月 8 號 Cupertino 的 keynote，重點不是 Liquid Glass 變漂亮、不是 macOS Golden Gate 變快。重點是 iOS 27 開了一個新的 Extensions API，讓使用者可以在設定裡，把 Siri、Writing Tools 跟 Image Playground 預設的對話模型，直接改成 Claude、Gemini、ChatGPT 或 Grok。不是隨選 fallback，是系統級預設。同時 App Store 開了一個叫 AI Extensions 的新專區，等於是給這類 Extension 一個 App Store icon 等級的 distribution slot。開發者工具今天就 beta，正式 GA 在今年秋天跟 iOS 27 一起。

這對 indie 是一刀兩面的。如果你做的是「我把 ChatGPT 包一層做成 iOS app」這種對話 wrapper，半年內你會被預設的 Claude 跟 Gemini 直接吃掉，使用者沒理由再開你的 app。反過來，如果你做的是 vertical Extension，比如說合約、健身教練、家計簿、補習班排程、診所掛號這種，秋天之前是你拿第一波 AI Extensions 上架紅利的機會。Apple 文件偏歐美大廠，台日中小 SaaS 對 Apple Foundation Models SDK 加上 Extensions API 都不太熟，這就是顧問業務跟 vertical PoC 同時可以切的窗口。

順便提一下底層架構，因為這也是訊號。Apple 這次明說 Siri 走三段路由，簡單任務在裝置上跑 Apple 自家小模型，中等請求走 Apple 自己的 Private Cloud Compute，複雜推理就外包給 Google Cloud 的 Blackwell B200 跑 1.2 兆參數的客製 Gemini，Apple 每年付 Google 大約十億美金。Apple 等於公開承認自己 outsource frontier reasoning，這在過去是不可能聽到的話。同時這也是 Gemini 3.5 Pro 月底前發表機率的一個強訊號，Polymarket 已經把 6/30 前發定在九成左右。

第二條線轉到 GitHub Copilot。Microsoft Build 也是 6 月 8 號，主舞台把 Copilot Desktop App 從技術預覽擴大到所有 Copilot Pro、Pro+、Business、Enterprise 訂閱戶，macOS、Windows、Windows on ARM、Linux 全平台都有。重點不是它變成一個 standalone client 而已，而是它把幾個東西串起來了。

第一個叫 My Work，可以跨 repo 看你現在所有的 active session、issue、PR、背景自動化任務，一個畫面看完。第二個叫 canvases，簡單說就是一個共享工作畫布，人跟 agent 看到的是同一份 context，可以同時擺 plan、PR、browser session、terminal、部署 dashboard、workflow 狀態，多個視窗並列、agent 自己會新增跟更新。第三個叫 Agent Merge，這個比較狠，agent 自己接 PR review 回饋、自己等 CI、滿足 required reviewer 條件之後直接 merge，整個流程留在 PR timeline 給人類事後追溯。然後每個 session 跑在自己的 git worktree 裡，等於是 Git 內建那個多工作目錄機制，讓每個 agent 各自有獨立的修改空間、不會互卡。

同一天 GitHub Copilot SDK 也一次 GA 六個語言，Node、Python、Go、.NET、Rust、Java 都進 production，等於是把 Copilot 同一個 agentic runtime 暴露給你做自家產品的 agent。然後 Copilot Max 一百美金一個月的新層也上線了，含一百美金 credits 加一百美金 flex，總共一個月吃到飽兩百美金。

這條線跟 Anthropic 6/15 雙池計費剛好對打。Anthropic 那邊 6/15 起 Agent SDK、claude -p、Claude Code GitHub Actions、第三方 agent app，會獨立走二十、一百、兩百美金的月 credit，按 full API rate 算，沒有 rollover、沒有自動 fallback，credit 用完就斷。Anthropic 從 6/8 開始發 credit claim 信，今天是第二天，所有訂閱戶都應該收到了，沒收到要主動去 console.anthropic.com 帳戶設定領，不領就等於 6/15 開始 SDK 完全沒額度。

所以這禮拜對 dev team 是有史以來第一次有三條真實對比軸：一條是 Cursor Bugbot 每個 PR 一美金的明碼定價、一條是 Copilot Max 兩百美金月吃到飽加 Agent Merge 全自動、一條是 Claude Pro 跟 Max 雙池計費的訂閱補貼。Bugbot 也是 6/8 GA，今天進入第二天，已經有 indie 開始發第一天的成本資料。對做 dev tool 顧問或 agency 的 indie，這禮拜到 6/14 是發三方成本對比內容、做試算工具的最佳視窗，過了下禮拜熱度會掉。

第三條線是 Anthropic 在東京的 Code with Claude。Code with Claude 是 Anthropic 今年辦的開發者大會系列，舊金山、倫敦、東京三城收官，東京這場是亞洲唯一場，明天 6/10 開講。speaker 三位主軸都很重，Anthropic CPO Ami Vora、Claude Code 負責人 Boris Cherny、Claude API 跟 SDK 產品負責人 Angela Jiang。三條 track 是 Research、Claude Platform、Claude Code，全天有 demos 跟 office hours，從早上十點半到晚上八點，可以直接抓工程師對話，雙向同步口譯，全球免費 livestream。然後 6/11 還有一場 Extended，整天 founder stories 加上 Applied AI 團隊的 laptops-open workshop，現在線上登記還開著。

對日台 indie 今天就三件事。第一，預約 6/10 livestream，把自己現有跟 Claude 相關的 case study 壓成一頁簡報。第二，登記 6/11 Extended，這是用最低成本拿 Anthropic Applied AI 工程師直接 feedback 的窗口，對做 Anthropic-first vertical SaaS 的人很值得。第三，6/11 到 6/14 那禮拜在 LinkedIn、Threads 連發「Claude × 你的 niche」內容，搭 Anthropic 自己社群放大週期。

最後把三條線收一下。重點是這禮拜剩下幾天，是 Apple 秋天 distribution、GitHub Copilot 跟 Anthropic 雙池計費 6/15、東京活動三個視窗第一次同框。如果你做 iOS native vertical，這禮拜就裝 Xcode 26 beta 跑 Foundation Models 加 Extensions hello world，目標秋天 GA 前 ship 第一版 Extension。如果你跑多 agent CI，今天就裝 Copilot Desktop App 跑 Agent Merge 端到端、同時對比一下 Bugbot 一美金每 PR 的成本，6/15 前評估要不要切 Copilot Max 兩百月吃到飽。如果你跑 Claude 上的背景自動化，今天該收到 credit claim 信、沒收到就主動去領，同時把 Cloudflare AI Gateway 的 spend limits 接上，這個就是 Cloudflare 把多家 LLM 呼叫收成同一個 proxy、加上預算上限的產品，是 6/15 雙池 credit overflow 最現成的解。如果你做 dev tool 顧問，這禮拜到 6/14 趕快把三方成本對比的試算工具跟內容 ship 出去。重點是，這禮拜不動，下禮拜 6/15 一到，很多 niche 視窗就會開始收。
