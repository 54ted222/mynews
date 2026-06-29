今天想聊三條對獨立開發者影響很大、而且時間點都壓在這個禮拜的事。一個是 Anthropic Fable 5 解禁時程被 Polymarket 修正、一個是 Vercel AI SDK 7 正式 GA、再來是美國 Colorado AI Act 今天立刻生效，搭配 Cascade 跟 Replit 兩條同步倒數。

先講 Fable 5。前一天的 brief 寫的是「Axios 消息源說這個禮拜內會解禁」，所以建議客戶的 SLO 文件就照「本週內復原」這個敘事去寫。不過今天看 Polymarket 上面那個「Fable 5 restored for US customers」市場，它給出的動態 odds 在三個時間點完全不同。6 月 30 號當天收盤前只有 41.5%、隔天 7 月 1 號才跳到 43%、要等到 7 月 31 號才看到 90.2%、8 月底 95.5%、年底 97.4%。簡單說，市場其實不認為今天當天會解禁，比較看好的反而是 7 月 1 號到 3 號這個區間翻面，而且還留一條尾巴到月底。所以我們的建議是，原本給客戶寫的「本週內復原」要訂正成「7 月 1 號到 3 號預期區間，第四層 fallback 拉到 7 月 31 號前」。一樣是四層，但每一層的時間點都要重寫。對昨天已經把 deck 寄出去的人，24 小時內補一封訂正信，理由就直接引 Polymarket 三個時間點的 odds，比拿主觀預期解釋更有說服力。

順便提一下脈絡。Anthropic 內部對話這個週末會繼續、Mythos 5 已經在 6 月 26 號的 letter 裡解禁給大約 100 家 entity、6 月 27 號 deployment 路徑也開了，但 Fable 5 在那封 letter 完全沒提到、目前還是 fully suspended 狀態。所以這次的訂正主要是「Mythos 5 已經回來，但 Fable 5 還沒，而且回來的時間預期被市場拉長」。

這帶出一個比較有意思的衍生產品想法。既然客戶 SLO 寫死「本週內」會被打臉、寫主觀數字又很難稽核，那不如直接在 SLO 文件裡放兩個動態 placeholder，一個叫 30 天 odds、一個叫 7 天 odds，後台透過 CryptoSlate API 或 Polymarket subgraph 每天 webhook 抓最新數字進去 render。我們估這個範本可以做成一個 lifetime 99 到 199 美金的客戶 SOP，配合一次性 audit 收 500 到 2000 美金。中文跟日文的供給目前是零，48 小時 first-mover 窗口算很開。

第二條，Vercel AI SDK 7 在 6 月 25 號正式 GA。這個版本是個分水嶺，從原本「跟 LLM 講話 + chat primitives」直接跳到「production agent platform」。它一次端出五大支柱。第一個是 WorkflowAgent，可以做跨 process、跨 deploy 的持久化執行，agent 中途崩了還能 resume，不必整個對話重跑。第二個是 tool approvals，工具呼叫前先卡一道 human approval，這對賣生產級 SaaS 是必備。第三個是 first-class timeouts 加上 sandbox，agent 跑在隔離的沙箱裡、強制 timeout。第四個比較關鍵，是 MCP Apps 的原生支援，也就是 MCP 那個 SEP-1865 提案的 server-rendered UI 沙箱化 iframe，SDK 7 是第一個主流 TypeScript client SDK 預先整合進去，比 MCP 官方 7 月 28 號 release candidate 還早。第五個是 reasoning 跨供應商統一，原本你要自己 wrap OpenAI、Anthropic、Google、Groq、xAI、Bedrock、Fireworks、DeepSeek，現在頂層一個 reasoning option 自動映射到 10 家原生設定。同時 telemetry 整套重寫，有 `@ai-sdk/otel`、Node.js tracing channel、lifecycle callback、step performance statistics。

這對 indie 是兩面刃。好的是 48 小時 first-mover 窗很開、可以馬上 ship「SDK 6 升 7 的 audit + WorkflowAgent + MCP Apps + reasoning 跨供應商」這條 landing page，收 1000 到 3000 美金。壞的是，如果你過去的賣點是「我幫你 wrap LLM provider、自己做 router」，那這次 reasoning option 跨 10 家供應商，router agency 收入會直接砍半，要趕快轉骨。另外，前一天本來就規劃的 MCP Apps 範本 marketplace，因為 SDK 7 預先整合，PLG 通道直接打通，可以加速 ship。

第三條是法規。今天 6 月 30 號是 Colorado AI Act 立即生效的日子，全名是 SB 24-205 Consumer Protections for Artificial Intelligence Act，是美國第一個跨產業的 AI consumer protection 法案。它鎖定七大類所謂的「高風險 AI」：僱用、教育、金融服務、政府服務、醫療、住房、法律服務。只要你的 SaaS 服務 Colorado 居民，今天就要做到四件事——風險管理計畫、年度影響評估、對 consumer 揭露 AI 介入、以及 adverse decision 的救濟機制，主管機關是 Colorado 州 Attorney General。

這條的重點是，很多人腦袋裡的 narrative 還停留在「歐洲才有法，美國等於沒法」，因為 EU AI Act Article 50 還有 33 天才生效，所以前一天 brief 也是這樣寫。但 Colorado 已經立刻生效，所以如果你賣 hiring SaaS、HR、mortgage、loan、law tech、教育 tutor、醫療輔助、住房相關服務給美國客戶，今天就要動。Indie 可以做的有兩件事：24 小時內寫一份「七類高風險 SaaS 合規清單」、48 小時內 ship 一條「Colorado AI Act 合規 audit + 範本」的 landing，一樣收 1000 到 3000 美金。中文跟日文供給為零、first-mover 窗很開。對昨天還在推「歐洲不等於美國等於沒法」的客戶，要補訂正信，把客戶 RFP 改成四時程版本：EU 8 月 2 號 + Claude Tag 8 月 3 號 + EU 12 月 2 號 grace period + 美國 Colorado 6 月 30 號。

再來搭配兩條同期倒數。第一是 Cognition 那個 Cascade 編輯器，7 月 1 號 EOL、剩 1 天，今天最後一波要 grep 自家跟客戶 repo 裡所有 `cascade` 這個字串、把 CI 跟 automation script 改成 `devin-local`。Cascade 整個被 Devin Local 取代，後者用 Rust 重寫、parallel subagents、token 效率比 Cascade 省 30%，協定也開放成 ACP，叫 Agent Client Protocol。第二是 Replit 的 Effort-Based Pricing，7 月 2 號 2 天後全量切換，建議客戶 SOP 加一條「per-user spend cap 跟 monthly aggregate cap 雙保險」的設定，避免單一 session 把預算燒爆。

那這集重點是什麼？三條主線都壓在這禮拜——Polymarket 把 Fable 5 解禁的敘事從「本週內」修正成「7 月 1 到 3 號預期加 7 月 31 號前 90%」、Vercel AI SDK 7 是 TypeScript agent stack 的世代分水嶺、Colorado AI Act 把美國法規從「以為沒事」變成「今天就要合規」。三條都有 48 小時的 first-mover 窗、都可以做成 1000 到 3000 美金的 audit、中文日文供給都是零。先動的人這個禮拜的 inbound 會明顯不一樣，至於昨天已經發出去的 deck 跟客戶溝通，今天最重要的事就是補訂正信。
