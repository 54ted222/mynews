今天想聊 6 月 29 號這份每日創業情報裡面，對 indie 開發者最關鍵的三件事，以及這週實際該動手做什麼。

先講最重要的那條。Axios 在 6 月 27 號放出一個獨家消息，引用兩位接近談判的消息來源說，Anthropic 的 Fable 5 模型，限制有可能「最快這一週內」就會解除。這個訊號很重要，因為昨天，也就是 6 月 28 號的 brief，我們還在寫「Fable 5 預計 7 月到 8 月中段才會復原，時間還不明朗」。一天之內整個 narrative 就要往前拉，從原本的「兩個月後」變成「本週內就可能發生」。

同一天，商務部長 Lutnick 寫了一封信給 Anthropic 的 Tom Brown，信裡面附了一份所謂的 Annex A，也就是「Anthropic 美國法人實體核准清單」。被列在這份 Annex A 裡面的公司、它們的外籍員工、還有美國聯邦民用機關跟國家實驗室，使用 Mythos 5 都不需要再申請出口許可。但這份附錄裡沒有 Fable 5，所以 Fable 5 嚴格來說仍然是全面禁用狀態。Axios 那條消息要兜的，就是這個禁用狀態本週可能就要鬆綁。

對 indie 來說，這意味著昨天剛寫進客戶 SLO 的「Fable 5 預計 7 到 8 月中段才回來」這句話，今天就得改。改成「Mythos 5 已經在 Annex A 名單內、Fable 5 本週內預期解禁、Opus 4.8 作為 baseline」，再加一個第四層的「萬一拖到 8 月前的 fallback 方案」。如果你昨天剛把「Fable 5 八月之前不用押」這個 narrative 寫進客戶 deck，今天最好補一封訂正信，把 Axios 那兩個消息來源附上去，避免客戶事後覺得你資訊不靈光。

簡單說，這條的 takeaway 是：客戶 SLO 從原本的三層改成四層，48 小時內動，中文跟日文圈這個話題的供給目前是零，是個短期的 first-mover 機會。

接著聊第二條，是這份 brief 裡份量最重的一條，講 MCP，也就是 Model Context Protocol。MCP 上週公布了 2026 年 7 月 28 號的 release candidate，這是 MCP 規格上「規模最大」的一次修訂。三個重點。

第一個叫 stateless core。原本的 MCP 規格裡有 session 的概念，現在整個拿掉了，這樣 server 就可以跑在一般的 HTTP 基礎設施上，不需要黏住單一個連線。第二個叫 Tasks extension，處理的是長時間執行的工作。server 不再直接同步回傳結果，而是回一個 task handle，client 就用這個 handle 去 get、去 update、去 cancel 這個任務，整個生命週期由 server 端主導。第三個叫 MCP Apps，正式編號是 SEP-1865，這個 SEP 就是 Specification Enhancement Proposal 的縮寫，1865 是第一千八百六十五號提案。MCP Apps 允許 server 把互動式 HTML 投到 host 那邊的沙箱化 iframe 裡面跑，UI 跟 host 共用同一條 JSON-RPC 通道，所有 UI 觸發的動作都走 host 既有的 audit 跟 consent 流程，所以安全模型是統一的。

時程上，SDK 維護者有 10 週驗證期，最後在 7 月 28 號 final spec 公布的同一週、Tier 1 的官方 SDK 一定要 ship 對應支援。對於自己有在做 MCP server 的 indie 來說，從今天 6 月 29 號開始，等於是進入「10 週遷移倒數」。建議的節奏是，6 月 29 號到 7 月 13 號，先把現有的 stateful session 邏輯盤點出來；7 月 14 號到 7 月 28 號，改寫成 stateless 加上 Tasks extension；7 月 28 號規格 release 那一週，正式切換。

MCP Apps 還有一個額外的點，它幾乎是個 SaaS 的點子寶礦。把你自家 SaaS 的某段 UI 包成 MCP App，讓使用者在 Claude Code、Cursor、Codex 裡面直接彈窗操作，是 7 月最有機會的 PLG 軌道之一。

再來第三條，比較急、但範圍小。Cognition 旗下的 Cascade，也就是原本 Windsurf 的 local agent，7 月 1 號就要正式 EOL，距離今天剩兩天。取代它的是 Devin Local，用 Rust 重寫過，支援平行的 subagents，官方數據比 Cascade 省大概 30% 的 token 消耗，原生支援 ACP，也就是 Cognition 主導的 Agent Client Protocol，跟 MCP 不太一樣，MCP 是規範 server 提供的工具跟資料來源，ACP 規範的是 agent runtime 跟 host 容器之間的互動。

好消息是，原本 Cascade 的設定、extension、keybindings、MCP connection 都會自動搬過去。不過要注意一件事，CI 流程裡面如果有顯式呼叫 `cascade` 這個命令的，這部分不會自動換，必須手動改成 `devin-local`。所以接下來 24 小時內，建議 grep 自己跟客戶的 repo，找 `.github/workflows` 底下的 yaml、Makefile、package.json 的 scripts、shell wrapper 這些地方，把 `cascade` 字串替換掉。不然 7 月 1 號之後 CI 就會壞。

這三條之外，補一段背景。OpenAI 6 月 24 號跟 Broadcom 一起公布了第一顆自製 AI 推論晶片，代號 Jalapeño，9 個月從設計到 tape-out，年底開始部署。對 indie 短期沒有 actionable，但長期推論成本會繼續往下走。另外，GitHub Copilot SDK 6 月 2 號 GA，支援 Node、TypeScript、Python、Go、.NET、Rust、Java 全套，原生支援 MCP 跟 custom tool，這對自己在 wrap LLM provider 的 indie agent SaaS 來說，是個值得評估的替代方案。配合同步推出的 Cloud Sandbox，計費是每秒 0.000024 美元的計算費，加上記憶體跟儲存的微量計價，透明度比過去高。

收尾講「這週實際該做什麼」。

第一，今天先把客戶 SLO 從 Fable 5 三層改成四層，48 小時內 ship 一個 landing page，賣「Fable 5 SLO 改寫 + Axios scoop 訂正信 + 解禁當天 benchmark 補完範本」，定價抓 500 到 2000 美元。

第二，如果你有自家 MCP server，今天就開好 10 週遷移時程表，第一週先盤點 stateful session 邏輯。順手評估一下要不要趁這個機會做一個 MCP Apps 的範本上 Gumroad 或 Polar 賣 19 到 99 美元。

第三，明天之內 grep 你的 repo，把 `cascade` 全換成 `devin-local`，順便對 6 月 28 號之前還在推「Windsurf vs Cursor」這個比較的 indie，補一封訂正信，把 Devin Desktop 跟 Devin Local 的差異講清楚。

重點是，這三條的共通點都是時間敏感、48 到 72 小時是 first-mover 窗口，中文跟日文圈的供給目前都是零，動手早的人吃到流量機會比較大。
