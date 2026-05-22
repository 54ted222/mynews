今天想聊 5 月 23 號這天，對 indie 開發者來說特別值得停下來看的三件事。這三件如果你是一兩個人在做 SaaS、做 agent 整合、或是接 SMB 客戶的顧問，未來兩三週的 GTM 路徑會直接被它們重寫。

先講第一件，也是今天份量最重的——OpenAI 在 5 月 22 號把 Secure MCP Tunnel 推進 enterprise GA。簡單說，所謂 MCP Tunnel 就是讓 ChatGPT、Codex、Responses API、還有 AgentKit 這四件套，可以反向接進客戶自己機房或私網裡的 MCP server。它的關鍵在於連線方向是從客戶內網往外撥 HTTPS，不需要客戶打開任何 inbound 防火牆，也不需要對外曝露任何 public endpoint。對企業 IT 來說，這基本上是把過去 agent 進客戶機房最大的那道資安阻力直接拆掉。然後 OpenAI 還配齊了 enterprise networking 的全套——outbound proxy、custom CA bundle、control-plane 用 client cert、MCP server 那一端用 mTLS——所以這次 GA 是真的瞄準金融、醫療、法務、政府這種強合規場景。

不過這次 GA 是 account-led rollout，不是 self-serve，意思就是客戶要打電話給 OpenAI sales 才開得通。這聽起來有點麻煩，但其實對 indie 來說反而是機會——你變成那個幫客戶跑流程的中間人。

那為什麼這件事這麼重要？因為三天前，也就是 5 月 19 號，Anthropic 才剛推出 MCP Tunnels，但他們那是 research preview、要 request access。OpenAI 等於是同一個月內就把對手的牌跟掉，而且直接做到 GA。所以你現在有兩家 frontier lab 同月把「agent 進客戶內網」這條路徑全部開通。對在做 SMB 或 30 到 500 人企業整合的 indie，未來兩週可以開始準備一份 vendor selection deck，把合規、資安、cost、reliability、ecosystem fit，再加上一條新的維度叫 Tunnel maturity，這六條維度做成評分表，賣給客戶的 IT lead 當決策依據。比較積極的做法是直接幫客戶跑雙 PoC——OpenAI Tunnel 配 Codex，跟 Anthropic Tunnel 配 Self-hosted Sandbox 各跑 14 天，做月帳跟 reliability 對比。一週 demo 加 14 天觀察，這種 productized service 抓 5K 到 15K 美金是合理價位。

再來講第二件，GitHub Copilot 在 5 月 20 號跟 5 月 21 號連續做了兩件動作，合起來看就是 Copilot 在收網。第一件是 5/20 把 Copilot Chat 網頁版的所有 Gemini 模型、加上 GPT-5.2 Codex、GPT-5.4 nano 全部移除，整個 model lineup 從原本各家混搭，收成只剩 OpenAI 跟 Claude 兩家。這個訊號很明確——Copilot 已經不打算當 multi-vendor 的 model router，他選邊站了，就是 OpenAI 跟 Anthropic 雙穩態。

第二件是 5/21 把 Copilot for Eclipse 整個用 MIT license 開源，code 放上 GitHub，邀請社群進來貢獻。這個動作要從兩個角度看，一個是 GitHub 不想自己長期負擔 Eclipse 這條傳統 IDE 生態的維護成本，丟給社群是合理止血。另一個是對做 IDE 整合的 indie 來說，這是一個 fork 跟跑 PR 把自己作品集做厚的機會——傳統 enterprise Java、嵌入式開發那些用 Eclipse 的客戶仍然存在，而且這群人過去三年其實沒被 AI tooling 好好服務過。

對 indie 的具體影響有兩條。第一條，如果你過去在做「Copilot Chat 內接 Gemini」的 wrapper，那條路 5/20 之後就斷了，今天就要把 model lineup 重排。第二條，如果你做 IDE 整合 vertical 的顧問，今天就可以派人 fork microsoft/copilot-for-eclipse，跑一兩條 PR 或寫 docs，這個 OSS portfolio 對接 Eclipse 系企業客戶會很有幫助。然後再提醒一下，Microsoft Build 6 月 2 號到 3 號還剩 10 天，預期會揭 Copilot for Indie 或 Solo Tier 的方案，這個要先 track 起來。

第三件，講 Anthropic。5 月 20 到 21 號 Anthropic 跟投資人揭了 Q2 數字，這份數字蠻嚇人的——Q2 也就是 4 到 6 月，預期營收 109 億美金，而 Q1 才 48 億，等於一季 over 一季成長 127%。更關鍵的是，Anthropic 預期 Q2 會出現首次的季度營業利潤，大約 5.59 億美金，這是公司成立以來第一次正常獲利。同時市場估值預期會從 OpenAI 當前的 8500 億追上來，到 9000 億，第一次超越 OpenAI。Amodei 自己也親述 Q1 用量年化成長 80 倍。

這對 indie 表面上看是新聞，但實際上影響的是 sales pitch。過去你跟 SMB 或 enterprise 客戶賣「為什麼押 Claude 不押 GPT」，講的多半是 model 等級的對比，opus、sonnet、haiku 哪個強。從今天起，你的 sales deck 第一次可以加上一條「Anthropic 是首次盈利的 frontier lab」這個 talking point。對要簽 12 個月以上長約的客戶，他最怕的就是這家供應商 12 個月內出事，現在你多了一條公司財務面的論點。再加上 OpenAI 同月也在做 IPO 的 confidential filing，兩家頂尖 lab 預期 2026 年內同年上市，這個重新定位的 deck 寫起來蠻好賣的，PDF 抓個 29 美金、一對一審核 99 美金都有空間。

不過要注意，估值往上衝代表 IPO 時的 valuation overhang 也在累積，客戶端買方可能會用「為什麼 Anthropic 不會降價」反問你，這個反論點要先準備好。

簡單說一下今天其他幾件比較小但要記的事。Supabase 5/22 那個 OAuth token endpoint 從 201 切到 200，過了 24 小時 Discord、Reddit、Hacker News 都沒有 horror story，主流 OAuth client 用 response.ok 範圍判斷的都沒事，這件警報可以解除。然後 Tokyo Code w/ Claude 的日期更正——前五篇 brief 一直寫成 6/5 到 6/6 是錯的，官方確認是 6/10 跟 6/11，現在剩 18 天，5/30 前要先卡 livestream 註冊位。最後是 OpenAI Daybreak 那個 cyber 平台補追，三層 model 架構加上 Codex Security 已經修了 3000 多個漏洞，配上 Microsoft 5/20 開源的 RAMPART 跟 Clarity，indie 做 agent safety 顧問可以開始用這三件套包成 productized service 賣 SMB。

重點是——今天看下來，indie 在 5 月 23 號這個時間點要做的不是觀望，是動手。OpenAI Tunnel 申請 access、Copilot wrapper 移除 Gemini 軌道、sales deck 加 Anthropic 盈利 talking point，這三件如果今天能各花半小時推進，下週對客戶的對話就會完全不一樣。
