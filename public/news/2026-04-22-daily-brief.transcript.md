今天想聊的是四月中旬這一波融資跟工具上線，把一件事情講得很清楚：錢跟注意力正在快速堆到 AI 的基礎設施層，不是直接做給人用的應用，而是給 agent 用的那一層。我會從 4/14 那天的幾筆融資切進去，然後聊 Mintlify 怎麼把文件重新定義成 agent 通道，最後再談 SendGrid 砍免費方案、還有 Baton、Claudoscope 這種專門補 agent 工作流缺口的周邊小工具。

先從 4/14 這一天說起。很少見的是，同一天有五筆比較大的融資一次冒出來。規模由大到小分別是：自駕網路 Glydways 拿到一億七千萬美金、量子 AI 伺服器廠 Sygaldry 一億零五百萬、做光互連的 nEye.ai 八千萬、技術文件平台 Mintlify 四千五百萬，還有做 B2B agentic marketing 的 Bluefish 四千三百萬。這五筆疊在一起看，共通點非常明顯——它們幾乎都不是做給終端使用者的應用層，而是應用層底下那一層。自駕需要網路、AI 需要伺服器、資料中心需要光互連、agent 需要文件介面、行銷流程需要 agent orchestration。所以整個訊號其實很直接：資金往中間層走，純應用層創業的估值倍數這一季會繼續往下修。

這五筆裡面，最值得單獨拉出來講的是 Mintlify。簡單介紹一下，Mintlify 是一家做技術文件平台的公司，過去大家熟悉的競品是 Docusaurus、GitBook、Readme.com。它這輪拿了四千五百萬、估值五億，a16z 跟 Salesforce Ventures 領投，而且去年一年 ARR 從一百萬長到一千萬，十倍成長，已經服務兩萬多家公司。數字漂亮，但真正讓這輪募資變得有意義的是它揭露的一個數據：它們家文件的流量，有一半是 AI agent 抓的，不是真人瀏覽。這個比例如果真的能被其他平台驗證，那意思就是——文件這個品類正在被重新定義。過去文件是寫給工程師讀的，現在得同時寫給語言模型消費。結構化、可機讀、有 schema、有 llms.txt、有 MCP endpoint 這些東西，會從加分項變成必備項。純靜態站生成器如果沒跟上，agent 相容性就會落後。所以機會在哪？在於「把既有文件自動轉成 agent-friendly 格式」這個中間層工具。很多中小 SaaS 已經有文件，但沒預算整站搬去 Mintlify，這中間就有一個 CLI 或 SaaS 可以做。

接著講 SendGrid。SendGrid 是 Twilio 旗下的 email 發送 API，很多 side project 跟 MVP 都靠它每天一百封的永久免費方案起家。這個月它正式把這個免費層砍掉。意思是一堆依賴它的小專案，這個月之內得搬家。受益最明顯的是 Resend，它還維持每個月三千封免費，而且 API 設計比較新。這件事其實是一個更大趨勢的縮影——SaaS 定價在雙向分化。企業端往 usage-based 走，消費端跟 indie 端反而被大廠放棄，留下機會窗口給新的開源或低價替代品。對獨立開發者來說，這週最該做的就是三十分鐘盤點手上所有 SendGrid key，評估搬去 Resend 或自架 Plunk。這裡也藏著一個七天就能做完的點子：寫一個開源 codemod，掃 GitHub repo 偵測 SendGrid SDK、自動改寫成 Resend 呼叫，一次性收十九塊或做成 GitHub Action 鋪量。

再來聊這次比較好玩的一塊——AI coding agent 的周邊工具層。前面幾刊我們已經看了很多新 IDE，像 Cursor 3、Windsurf、Kiro、Replit、Apfel，這類你可以想成主戰場上的大件裝備。但這幾天開始冒出來的是配件層，也就是管理既有 agent 的小工具。第一個叫 Baton，四十九塊美金一次買斷，不是訂閱，這點很重要。它是一個桌面 app，Mac、Windows、Linux 都能跑，直接包住 Claude Code、Codex CLI、OpenCode、Gemini CLI 這些命令列 agent，然後用 git worktree 把每個 agent 丟到各自的資料夾，讓它們同時跑多條任務、檔案完全不互相污染。概念跟 Cursor 3 的 Agents Window 很像，差別在它不綁定編輯器，而且一次付清對抗訂閱疲勞。第二個叫 Claudoscope，免費、MIT 開源，是一個 macOS menu bar 工具，讀本地 session 檔幫你算成本，把 token 分桶成輸入、輸出、快取三類，對應 Anthropic 跟 Vertex 的定價。還有一個叫 Claude Usage Tracker，自動偵測九個以上工具的本地 log，做日成本、熱圖、月投射。

這三個一起看，訊號也很清楚：上個月你還得自己寫 script parse log，現在開源工具已經把個人 FinOps 那層吃掉一大半。所以如果你原本打算做「Token Spend Guard」這種產品，個人 CLI 那條路已經沒了，切入點必須往上一層，變成跨組織 dashboard、加 SSO、加 RBAC、加預算審批。鎖定五到三十人的開發團隊，CTO、FinOps、InfoSec 這三個角色一起賣，才有真正的付費點。

最後補一個有趣的案例，叫 AgentMail。它三月中宣布拿了六百萬種子輪，General Catalyst 領投，Paul Graham、HubSpot 的 Dharmesh Shah、Supabase 執行長都參投，而且是 YC 2025 夏季梯次。它做的事情是：給 AI agent 一個專屬的 email inbox，支援雙向對話、解析、標籤、搜尋。為什麼這件事重要？因為 email 是目前最通用、最不會被封鎖的 agent 輸出通道，比 webhook、比 Slack API 都還要普遍。一旦 agent 有了穩定的信箱，它就能跟真人客戶、跟第三方系統異步溝通。這塊做起來，就是 agent 時代的通訊基礎設施。

重點是：四月中這一批動作，主線其實只有一條——AI 的基礎設施層正在被資金跟開源工具同時加厚。Mintlify 把文件變成 agent 通道、SendGrid 退場讓出 email indie 市場、Baton 跟 Claudoscope 補齊 agent 工作流的觀測跟編排。如果你是獨立開發者，這週最值得做的三件事是：盤點 SendGrid 用量準備搬家、檢查自家文件有沒有 llms.txt 跟 MCP endpoint、還有如果每月 Claude Code 帳單超過一百塊，花五分鐘裝 Claudoscope 抓出 cache miss 最高的 prompt，通常可以直接省下兩到四成 token。應用層估值繼續下修的同時，中間層的切入機會正在變大，這是今天最想傳達的訊號。
