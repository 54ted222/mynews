今天想聊的，是這一週對 indie 和 agency 來說最該記住的三件事，全部集中在五月十三到五月十五這三天，Anthropic 那邊兩個重磅、Ramp 一個歷史性的數據翻盤。講白一點，就是「AI 自動化的成本曲線」跟「AI SaaS 行銷的主軸」同時被翻了一次牌。

先講最直接會打到荷包的那件。Anthropic 五月十四號宣布 Agent SDK Credit Pool，六月十五號正式生效。意思是說，以前你訂 Claude Pro 兩百美金的方案啊不是、是兩十美金一個月，可以拿這個訂閱去跑各種 claude minus p 的非互動指令、Agent SDK、Claude Code 的 GitHub Actions、甚至像 OpenClaw 這種第三方 wrapper harness，全部都共用同一個 rate limit。六月十五號之後不一樣了，這些「程式化用量」會被切出來，變成另一條獨立的月固定 credit。Pro 五個方案的人拿到二十美金 credit、Max 五倍是一百美金、Max 二十倍是兩百美金，全部按 API 牌價燒，剩下不結轉、月底直接歸零。

互動式的用量，就是你坐在電腦前面手動跟 Claude Code 聊、開 Claude.ai 網頁、或用 Claude Cowork 那些，照舊吃訂閱配額、完全沒變。但你要是有自動 PR bot、夜間跑 unattended pipeline、CI 裡面塞了一堆 claude minus p，這些都從「吃訂閱餐」變成「吃 API 計量表」。簡單說，過去這半年靠「我訂 Max 二十倍兩百美金、就讓我家 agent farm 跑整天」這招的個體戶，月帳會實質再升一階。

Anthropic 這套是三段式收掉的。四月先禁 OpenClaw 這類第三方 wrapper、五月十三號部分鬆綁、五月十四號 Agent SDK credit 計量化收編，整套完成。OpenClaw 是去年底由獨立開發者開源的東西，靠 Claude 訂閱認證來跑，等於把 Pro 二十美金當無限自助餐。現在 Anthropic 正式承認你可以用，但用量改吃獨立 credit。對社群來說 OpenClaw 回來了，可是回來的方式跟原本不一樣。

同一天 Anthropic 還推了第二發，叫 Claude Code Routines。這個更狠。它把整套 Claude Code 搬上 Anthropic 自家雲，給你三種觸發方式：第一種叫 scheduled，就是 cron 替代；第二種是 API endpoint 加 auth token，外部系統打一個 HTTP 就能叫它跑；第三種是 GitHub webhook，PR、issue、release event 過 filter 之後直接叫 routine 起跑。額度方面，Pro 每天五個 routine、Max 每天十五個、Team 跟 Enterprise 每天二十五個。

對 indie 開發者來說，這代表你過去要養一台 EC2 跑 cron、寫 GitHub Actions、設 Trigger.dev 這些事情，現在可以一路收進 Anthropic 雲端。watch PR、自動寫 release notes、補測試、掃 docs 漂移，這些通通不用自己養機器。但同時 Anthropic 把 vendor lock-in 又拉高一級——你的夜間自動工程從「綁訂閱」變成「綁雲端執行環境」，要遷出去成本明顯變高。

第三件，也是真的有歷史意義的，是 Ramp 五月十三號發的 AI Index。Ramp 是美國的公司卡服務商，他們手上有五萬家美國企業的刷卡數據，每個月會發一份報告看大家 AI 工具到底花在哪。四月份的數字出來，Anthropic 商用採用率三十四點四趴、OpenAI 三十二點三趴，Anthropic 史上第一次超越 OpenAI。再看年增率更驚人——Anthropic 過去十二個月商用採用翻了四倍，OpenAI 同期只成長百分之零點三。

還有一個更嚇人的數字：Claude Code 四月份已經寫掉了全球 GitHub public commit 大概百分之四，前一個月才百分之二，單月翻倍。Dario 在五月六號那場 Code with Claude 親口說 Claude Code 是史上最快達到十億美金 ARR 的軟體產品。

這對 indie 的意義是什麼？兩件事。第一，你家 SaaS 第一頁的 marketing 文案，「ChatGPT plugin」跟「Claude integration」這兩個賣點的順序，從這個月開始要對調。第二，enterprise procurement 對你問「為什麼不是 Anthropic」這種反問會越來越多，indie 要先把答案準備好。早期那種「我們是 ChatGPT-only」的 sales pitch，五月十三號開始會被反問。

再來補一個次要但很急的：OpenAI 五月十五號自爆，他們有兩台員工的 Mac 在五月十一號那波 TanStack mini Shai-Hulud 供應鏈攻擊中被植入 RAT。mini Shai-Hulud 是今年四月起在 npm 出現的蠕蟲式攻擊家族，攻擊面集中在「簽章合法、內容惡意」的套件——攻擊者拿到受信任維護者的帳號之後 publish 帶 valid SLSA provenance 的惡意版本。SLSA 念作 salsa，是 Google 跟 OSSF 主導的軟體供應鏈安全框架。

OpenAI 強調沒有客戶資料、沒有生產系統外洩，但因為失竊憑證可能被拿去簽章，所以 Codex App、Codex CLI、ChatGPT Desktop、Atlas browser 全部 macOS 簽章要 rotation，使用者六月十二號之前一定要升級，舊版在那天之後會被 macOS Gatekeeper 擋掉。對 indie 跟 agency 的意義是，你客戶端裝過這些 app 的話，本週起 enterprise 客戶會追問升級狀態。這也順便變成一個一次性 audit 的賺錢機會——掃公司有哪些員工裝過 ChatGPT Desktop、Codex CLI，整理升級清單，這種服務報價大概五百到兩千美金。

最後快速提一下五月十三號 Anthropic 另外推了 Claude for Small Business，包了十五個 ready-to-run 的 agentic workflow、十五個可重用 skill、八條 connector——QuickBooks、PayPal、HubSpot、Canva、Docusign、Google Workspace、Microsoft 365、Slack。差異化點是「不換你既有的 stack 就能跑 AI」，對標 Notion AI Business、Microsoft 365 Copilot。如果你做 SMB SaaS，本週要列「我哪三條 SOP 已經被這十五個 workflow 蓋掉」，賣 SMB 自動化要把「為何不用 Claude 內建」當必答題。

所以重點是，這三天加起來代表兩件事同時發生——一個是 indie 跟 agency 的自動化成本曲線被 Anthropic 系統性重設，從訂閱補貼變成計量計費；另一個是 AI SaaS 的行銷主軸第一次出現「Anthropic 優先」的訊號。六月十五號之前如果你有任何 unattended 的 claude minus p 或 Agent SDK 在跑，今天就盤點過去三十天用量、推估最差情境月帳。六月十二號前如果你或你客戶有 Mac 裝過 OpenAI 桌面 app，排升級。其他都可以慢慢來，但這兩個 deadline 不要錯過。
