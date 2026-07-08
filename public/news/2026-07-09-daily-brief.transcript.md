今天想聊三條同時發生、又互相牽動的線：OpenAI 的 GPT-5.6 Sol、Terra、Luna 三個模型在今天，七月九號，正式對外全面開放；Cursor 的 Automations 平台在同一天走到 GA、變成新用戶預設；還有 TAI1 台灣 AI 加速器只剩最後一天可以送件，明天週五晚上十一點五十九分就關窗。這三件事對一位在台灣做 SaaS 或做工具的一人公司來說，剛好構成一個「重新選模型、重新選自動化 stack、重新盤點資金入口」的黃金四十八小時。

先講 GPT-5.6。OpenAI 這次一次推三個型號，把定價切成三個層級。最高階的 Sol，每一百萬個 input token 收五塊美金、output 三十塊；中間的 Terra 是二點五和十五塊；最便宜的 Luna 只要一塊和六塊。這個切法本身不新奇，真正影響定價戰的是中間的 Terra——因為 Anthropic 家裡 Sonnet 5 現在還在跑八月三十一號到期的促銷價，也就是二塊和十塊。換句話說，同樣的 workload 丟到 Sonnet 5 上，input 比 Terra 便宜兩成、output 便宜三分之一，這是護城河，但只到八月底。所有現在在中間層做 model routing 決策的人，未來三十天內大概都得把 monthly bill 全部重算一次。

Sol 這邊還有第二個大新聞，就是 Sol Ultra 這個模式。簡單說，它是 subagent 平行架構——你在 Codex CLI 裡跑一輪對話，模型內部會把問題切成好幾個 sub-problem，派多個 sub-agent 同時跑，跑完再合成一個答案。官方在 Terminal-Bench 2.1 這個 agentic 命令列 benchmark 上，標準版 Sol 拿到八十八點八分、Ultra 直接上到九十一點九，加了三點一分，是目前這個榜上的最高分。不過要注意的是，如果你的 workload 偏 file editing agent、也就是像 SWE-bench Verified 那類的活，Fable 5 的九十五點零和 Opus 4.8 的八十八點六還是排在 Sol 前面。所以現在的實務結論是——沒有單一 baseline，重點是你要有一張 workload 對照表。

再來，還有個容易被忽略的細節是新的 prompt caching。OpenAI 這次把最短 cache life 縮到三十分鐘，然後允許你自己下 explicit cache breakpoint，也就是明白地告訴模型「這段快取起來」；寫入 cache 的時候會收 uncached input 的一點二五倍，但讀 cache 只要一折。對長 context、重複前綴很多的 agent workload 來說，這是一個可以立刻擠出成本的機會。

第二條主線是 Cursor Automations 走到 GA。過去 Cursor 被大家講的都是 IDE 裡面的 agent，這次的 GA 直接把它抬到 workflow 平台的位置。四個新東西合在一起變成預設值：第一，Slack emoji 觸發——你的團隊成員在 Slack 訊息上按一個指定表情，例如 triage 分診、或是自訂的 tai1-submit 送件，Cursor 那邊就自動 kick off 一個 automation；第二，多了五個新的 GitHub trigger，包括 Issue comment、PR review 的 inline comment、PR review submitted、Review thread 的 resolved 跟 unresolved 這類事件；第三，slash automate 這個 skill，讓你在 agent 裡直接用自然語言講「幫我配一個星期一早上跑週報的 automation」，不用再寫 YAML；第四，computer use tool，可以幫 automation 抓截圖或錄影，作為 demo 或 artifact 產出。加上原本就支援的 Linear、PagerDuty、cron，等於一次擠掉 GitHub Actions、n8n、Zapier 三軌的市場位。對正在賣一人公司 workflow audit 或幫五到二十人小團隊做治理的 indie，這是新開的一條線——把 trigger family 的選型、Slack emoji SOP、PR review comment 自動修的樣板打包，就是一份可以賣五百到一千五美金的 audit。

第三條主線是 TAI1 台灣 AI 加速器的 golden hour。今天是七月九號、週四；明天週五晚上十一點五十九分收件截止。獲選最高可以拿三百萬新台幣、NVIDIA H100 算力配額和矽谷生態連結。過去七天 StarFab 官方沒有公告延期。從第一屆十四家新創的落地方向看，智慧製造、醫療、機器人這種產業題目過審率明顯比純 API wrapper 高，這點值得手上還在猶豫要不要送件的人參考。如果 pitch deck 跟 demo 已經有雛型，接下來這二十四小時真的就是全職衝一波的最後窗；而如果你剛好在賣 pitch deck 修磨這種顧問服務，這也是本週最後一個明確可以收快錢的機會。

順便把幾條副線帶一下。第一，Anthropic 的 KYC，也就是身份驗證要求，昨天七月八號正式生效，到今天為止進入 Day 1。要注意兩件事：Claude API 完全豁免、只有消費 tier 的 Free / Pro / Max 才會被 flag；然後官方一直沒有公開什麼條件會被 flag，Reddit 跟 X 上也沒有大規模抱怨，暗示「小 subset flagged」這個定調應該落地了。對賣 Claude Apps Gateway 導入或 Team 升級的 indie，這個熱期會延續三十天。

第二，Fable 5 的 credits 進到 Day 2。Anthropic 到今天還是沒公告「pool 空了會自動降回 metered」的補救，所以 hard stop 這個陷阱還在。有趣的是 Sol Ultra 現在的定價正好是 Fable 5 的一半——五塊對十塊、三十塊對五十塊，重度依賴 Fable 5 跑 codebase scan 或大 context RAG 的人，接下來會開始做對照。

第三，Gemini 3.5 Pro 七月十七號 GA，倒數八天；MCP 的下一版 spec 七月二十八號 release candidate，倒數十九天。兩個 timeline 疊在一起，加上今天 GPT-5.6 三價階公開，等於未來三週三家旗艦的 model router 決策樹會被整套重跑。

所以重點是：今天七月九號同時發生的 GPT-5.6 全面公開、Cursor Automations GA、TAI1 明日截止，這三件事共同把「重估三家旗艦模型、換掉自動化 stack、抓最後一波政府資金」的視窗壓到二十四到七十二小時之內。手上有 pitch deck 的衝 TAI1；賣 model router 治理或 Cursor 治理的 indie 今天就開新的一條線；其他人先把 Sonnet 5 對 Terra、Sol Ultra 對 Fable 5 這兩張對照表列出來，這樣接下來三十天不管定價戰怎麼打，你至少知道自己站在哪一格。
