今天想聊三條主線：Microsoft Build 大會一口氣端出七個自家 MAI 模型、OpenAI Codex 正式在 AWS Bedrock 全面上線，還有 Anthropic 上週五釋出的 Claude Opus 4.8 加 Dynamic Workflows，這三件事疊在一起，等於是大型雲廠跟模型廠在六月初把整個 agent 戰場重新洗了一輪。

先講 Microsoft Build。會期是六月二號到四號，在舊金山。Mustafa Suleyman 帶出來的最重要訊息是，Microsoft 終於擁有七個自家的 MAI 模型家族。第一個叫 MAI-Thinking-1，是 reasoning 模型，盲測的時候跟 Claude Sonnet 4.6 打平，coding benchmark 對標 Opus 4.6，意思是 Microsoft 在 frontier reasoning 這塊真的追上來了。第二個叫 MAI-Code-1-Flash，只有五十億參數，但已經直接預載進 VS Code 跟 GitHub Copilot，這個動作很關鍵，後面再講為什麼。剩下還有圖像、轉錄、語音的型號，轉錄那顆支援四十三種語言、跑得比競品快五倍。所以簡單說，Microsoft 這次的訊號就是「我不再單靠 OpenAI」，自家模型直接內嵌進開發者每天用的工具。

同一場大會還有第二個重點，Windows 被重新定位成 AI Agent OS。Microsoft 端出一整套東西，包括 Windows Development Skills、Intelligent Terminal、Microsoft Execution Containers、Windows 365 for Agents、還有一個叫 Aion 1.0 Plan 的東西。對獨立開發者來講，這代表如果你的 agent 工具現在只跑 macOS 或 Linux，你失去了單機差異化，因為 Windows 本身要變成 agent 的執行底層。

第三個重點是 GitHub Copilot desktop app，technical preview 階段，Windows、Mac、Linux 都支援。它最特別的地方是每一個 agent session 都會跑在一個獨立的 git worktree 裡面。worktree 是 Git 內建功能，可以在同一個 repo 底下開出多個掛在不同 branch 的工作目錄，這樣多 agent 可以平行做事不會打架。再加上 canvases 雙向介面、本機跟雲端 sandbox、跨 repo 的 My Work dashboard，等於是直接對 Cursor、Claude Code、Codex desktop 這幾個產品正面開戰。同時 Copilot SDK 對 Node、Python、Go、.NET、Rust、Java 全部 GA，意思是周邊插件生態正式開放。

接下來想聊第二條主線，OpenAI Codex 跟 GPT-5.5、GPT-5.4 在六月一號正式在 Amazon Bedrock 全面 GA。這件事其實只預覽了一個月就直接進 production，速度非常快。重點不是模型本身，而是商業模式變了。價格對齊 OpenAI 直連，GPT-5.5 是每百萬 token 五塊錢 input、三十塊 output，不需要 seat license，可以直接吃 AWS 的 spending commit。換句話說，過去企業採購流程裡那種「要不要為了 OpenAI 額外開一條帳」的卡點，一夜之間沒了。客戶可以用自家的 AWS 帳單跟 IAM 治理，agent 流量自動套上 KMS 加密跟 CloudTrail audit。Codex 的週活已經到五百萬，一個月內成長兩成五。對企業 SI 或 agency 來講這就是一條直接的生意，可以幫客戶做 Codex on Bedrock 的採購遷移跟 IAM 設計，固定價格的 audit 就能收兩千到六千美金。

第三條主線是 Anthropic 上週五，也就是五月二十八號，釋出的 Claude Opus 4.8 加 Dynamic Workflows 加 Ultracode。模型 ID 是 claude-opus-4-8，同步上 Bedrock、Vertex 跟 Foundry，定價跟 4.7 一樣沒漲。但 Fast Mode 速度拉到兩點五倍，而且比上一代便宜三倍，這是很猛的成本下殺。真正改遊戲規則的是 Dynamic Workflows，這是 research preview 功能，讓 Claude 自己 plan 一個任務，然後 fan-out 出去幾百個 subagent 平行跑，單一 workflow 上限可以到一千個 subagent。目標就是用既有的 test suite 當驗收線，做 codebase 等級的遷移。在 Claude Code 裡面用 ultracode 這個 keyword 觸發，相當於最高的 reasoning effort 加上自動 workflow 編排。這個東西出來，等於直接對標 Blitzy 五月初那個三千 agent 並行的 GTM 故事。對獨立開發者來講，這意味著一個五萬行的 Rails 轉 Node 任務，可以丟給單一 workflow 從頭跑到 merge，這在以前是要切好幾個 session 接力做的。

把這三條主線串起來，你會看到一個共同模式。Microsoft 用自家模型加 Windows agent OS 把開發者環境鎖在自家生態，OpenAI 用 Bedrock GA 把企業採購流程打通，Anthropic 用 1000 subagent cap 把長 horizon coding 任務一次性解掉。三家走的是不同切入點，但都在搶同一塊大餅，就是「agent 怎麼進企業日常工作」。

順便補一下三條值得追蹤的小訊號。Stripe Sessions 已經在四月底開完，一次發了 288 個產品，MPP 跟 SPT 兩個支付協議讓 agent 收費跟 stablecoin 微付款這件事變得簡單，做 agent SaaS 的人本週可以直接 spike 一輪。Vercel 在六月一號跟二號也連發三個更新，最值得用的是 Blob signed URLs，走 OIDC、最多七天 expiry，browser 可以直傳 multipart 大檔不用過 server，省下來的 CPU 跟流量很可觀。另外 Microsoft 那個 Work IQ APIs 六月十六號 GA，做 Teams 跟 Outlook 自動化的人要盯緊，niche 收窄的速度會很快。

所以重點是，這禮拜不是某一家放大招，而是三家同時把 agent 推進企業真正可採購的階段，獨立開發者本週該做的事，就是把自己的 50 條典型 prompt 跑一遍 MAI-Code-1-Flash、Cursor、Claude Code 三方對比，再把 Codex CLI auth 切去 Bedrock 試一條 PR，最後找一個 5000 行的 refactor 任務丟給 Ultracode 跑，三個動作做完，你就會知道接下來六個月該押哪邊。
