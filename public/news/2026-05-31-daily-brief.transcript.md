今天想聊三條 5/31 同日撞在一起的主線，外加一個倒數時間鎖。聽起來很多，但其實它們都指向同一件事：這禮拜是 indie 開發者「平台、計價、安全、大會」四重壓力測試的收尾日，下禮拜起整個生態的長相會被重畫。

先講第一條，Microsoft Copilot Super App。Fortune 在 5/29 出了獨家，標題就叫 Microsoft 在做 super app，內部代號「Delivering one Copilot」。簡單說，他們要把現在分散的四件產品，也就是 GitHub Copilot 寫程式那條、Copilot Chat 那條、Copilot Cowork 協作那條、還有 Autopilot agentic workflow 那條，全部收進同一個桌面 app。操盤的是 5 月剛上任的 Copilot 負責人 Jacob Andreou，預定的上線時間是今年暑假末，大概 8 月底。Microsoft 還保留了兩個切換 toggle，一個是 super app 跟各個獨立 Copilot 之間切，一個是 personal 跟企業版 365 Copilot 之間切。

這個消息為什麼重要？因為 6/2 到 6/3 就是 Microsoft Build，現在倒數兩到三天。Build 的 session catalog 已經放出來，有三條新主軸：第一條 BRK207，會深拆 GitHub Copilot 在 Visual Studio 裡面的 fleet 模式跟 autopilot 模式，autopilot 就是 CLI 全自動批准 tool call、自動 retry、自動回 tools 提問避免 stall 的那個全自動模式。第二條叫做 Microsoft homegrown AI models power Copilot，就是 Microsoft 開始推自家的小模型，跟 OpenAI、Anthropic、open source 並行。第三條是 Windows Agent Runtime，簡稱 WAR，這是一個系統級的 agent runtime，背景 service 管 agent 的 lifecycle、memory 跟權限，建在 WinRT 上面加 rule engine 做細粒度存取控制。

不過要注意，Fortune 那篇明確說了，Build 會提 Super App 但不會 showcase 本體，真正會 demo 的是 Autopilot、fleet mode、WAR 這些零件。對 indie 的意思是，如果你現在在做「Copilot Chat 加 GitHub Copilot 加 Slack、Teams、Linear 跨工具串接、Inbox 整合」這種中介 SaaS，「同一個 app 內全部串完」這件事 8 月底會發生，所以你的差異化窗口大概就只剩三個月。本週要做的，是把自家產品對 Super App 的 12 個月路線重排一次。

再來，第二條，Anthropic 的 Mythos。這條更緊。5/28 Anthropic 一口氣做了三件事：Series H 募了 65 億美金、估值 9650 億、發布 Opus 4.8，然後正式公告 Mythos 公開時程是「coming weeks」。以前我們在 5/27 的 brief 裡只能說是訊號推測，現在 Fortune、Engadget、TechCrunch、VentureBeat、The Register、BleepingComputer 同口徑覆蓋，這事坐實了。

更關鍵的是，Anthropic 同步揭了 Project Glasswing 的實測底數，這就是重點。底數有四個數字要記住：Mythos 已經掃了一千多個 OSS 專案，找出兩萬三千多個潛在漏洞，其中六千兩百多個被估為高危或致命，然後由六家獨立資安公司驗證，true positive 率 90.6%，其中 62.4% 確認是高危或致命。這幾個數字直接把過去那個反論點「LLM 找漏洞 false positive 太高、不可信」給堵死了。

但也冒出一個新瓶頸：530 件高危已通報給 maintainer，但只有 75 件被修，修復率 14%。也就是說，LLM 找漏洞變快了，可是 OSS maintainer 修補追不上。其中 wolfSSL 那個 CVE-2026-5194 已經修了，那個漏洞嚴重到可以讓 Mythos 自動建出能偽造 https 憑證的 exploit，而 wolfSSL 本身在數十億裝置上跑。

對 indie 的意思是，Mythos 一公開等於攻擊者拿到一份自動化 audit，這個時鐘正在走向「拿得到」。所以這 14 到 30 天是個熱期，可以做「Mythos 公開倒數 X 天 repo 安全加固」這種 productized 服務，定價 1500 到 5000 美金。另一條是 maintainer 修補 bottleneck 那邊，目前沒人做專屬工具，自動分類通報加自動 PR 提交加維護者溝通的助手，是個 99 美金月費的訂閱機會。

然後，第三條主線，是供應鏈跟輸入面的三件安全事。先說 Claude Code Dynamic Workflows 的規格修正：5/30 brief 寫「只給 Max、Team、Enterprise」要修正，其實 Pro 也開了，只是 Pro 要去 /config 手動打開、必須選 Opus 4.8、Claude Code 版本要 2.1.154 或更新。Max、Team、API、Bedrock、Vertex、Foundry 預設都是開的。Enterprise 反而預設關，要 admin 在 managed settings 開，這是為了避免企業合規的意外。1000 個 subagent、16 個並行的上限不變。

第二件，5/22 Perplexity 開源了 Bumblebee。這是一個 Apache 2.0 授權、單檔 Go binary 的 read-only dev endpoint 掃描器，七天內 GitHub 衝到一千四百五十顆星、一百一十二個 fork。它掃 npm、pnpm、Yarn、Bun、PyPI、Go modules、RubyGems、Composer 的套件，還掃 MCP server config、IDE extension、browser extension、lockfile 跟 package cache。設計上零外部相依、不跑 install script，就是為了避免「掃描動作本身觸發 supply chain worm」。它跟既有的 Snyk、Semgrep、Dependabot 不一樣，那些工具偏 production 跟 repo 掃描，Bumblebee 專攻本地開發機這一塊。

第三件，5/29 Permiso 揭了 ChatGPhish，這是個 ChatGPT 的漏洞。簡單說，ChatGPT 會「信任剛剛 summarize 的那個第三方頁面裡面的 markdown link 跟 markdown image URL」，會自動 fetch 那些圖片、會把連結 surface 成在 UI 裡面看起來像是 assistant 親口回的可點 element。任何使用者請 ChatGPT 摘要的 GitHub README、文件、blog、SaaS dashboard，都可以暗藏惡意指令。可以塞偽造的「系統安全警示」，可以從攻擊者的 S3 出 QR code，繞過 desktop 的 URL filter 跟企業 EDR。Permiso 4/29 經 Bugcrowd 通報 OpenAI，被標 not reproducible，然後又被標 duplicate，5/29 公開時還沒確認是否已修。

所以這條的橫向擴散風險是，任何「跑 ChatGPT、Claude、Gemini 處理使用者貼上 URL」的 SaaS，不管是內容摘要、客服 triage、自動 PR review，本週都要評估自家「URL fetch 加 markdown render」這條管線是不是吃同類型的 prompt injection。

最後收尾，倒數時間鎖。今天是 5/31，GH-600 Agentic AI Developer 認證 beta 截止本日，10 分鐘決定要不要報。明天 6/1 GitHub Copilot AI Credits 開始計價，1 credit 等於 1 美分，input、output、cached 各乘各模型的 API rate，code completion 跟 NES 還是免費，但 Cloud Agent、Chat、CLI、Spaces、Spark、第三方 coding agent 都會計費，今天要把 budget 上限設好。後天 6/2 上午 10 點太平洋時間，Nadella 在 Fort Mason 做 Build 主題演講，倒數兩天。

重點是，這禮拜不只是看新聞，是收尾。三條主線——Super App、Mythos、Bumblebee 加 ChatGPhish——都在這禮拜把長期的可能性鎖死成短期的時鐘。Super App 暑末 launch，差異化窗口剩三個月。Mythos coming weeks，repo 安全加固熱期 14 到 30 天。Bumblebee 跟 ChatGPhish 是 dev endpoint 跟 LLM 輸入兩端的被動曝險新戰線，本週就要動手。如果你只挑一件事做，就把 budget 上限設好，跑一次 Bumblebee baseline，然後把 Build 揭曉後 24 小時的內容稿大綱備好，這三件加起來大概兩個小時，但會決定你下個季度站在哪一邊。
