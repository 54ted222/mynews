今天想聊三條台灣創業者這個禮拜最後一個完整工作日最該注意的訊號，一條是台積電法說結果、一條是今晚八點 iPhone Duo 預購、最後一條是開發工具這週同時跳版的 Claude Code 跟 Codex。

先講台積電。昨天下午法說會結果幾乎是全面超標。第三季營收四百六十七億美元，不但超過原本財測上緣，季增還有百分之十六。每股盈餘二十九塊四毛三元，比元大共識的二十九塊零三還高，美股 ADR 這邊也比華爾街共識多了快兩毛。淨利年增百分之六十八點七，寫下歷史新高。毛利率六十六點四，剛好落在財測六十五到六十七的中段，營益率五十八點七。更關鍵的是 Q4 財測，中值直接大幅上修到年增百分之五十八、季增百分之十四，毛利守在六十五到六十七的區間。簡單說，就是「iPhone Duo 預購拉貨」加上「AI 需求續強」兩條敘事一次被確認。

不過也不是全好，有一個 bear 支點要注意。海外廠毛利稀釋從原本預估的百分之二，擴大到百分之三到四。你今天盤後要寫 push notification 一定要雙版本：bull 版喊 Q4 財測 +58% 跟毛利守住，bear 版就加這條稀釋擴大。只喊漲忽略稀釋的話，法人側讀者馬上流失。

法說還順便揭露 2027 展望。CapEx 可能上看七百八十億美金，比原估七百億還高；2027 全年 CoWoS，就是那個把 Nvidia GPU 跟 HBM 封在一起、現在是 AI 伺服器最大瓶頸的 2.5D 封裝，產能要衝到兩百七十三萬片，比原本的兩百四十九萬片增產六成；N2 也就是兩奈米，2027 年底月產能上拉到十一萬片。這幾個數字對做蘋概、AI 伺服器 push 的開發者，是本週最後一輪敘事升級的素材；大立光那個 FAU 2027 中量產的敘事，也在這一刻被法說結果正面對齊。

高盛 Day 5 把目標價上修到兩千三百三十元，這是今天開盤前最強的外資 trigger。

再來第二條，iPhone Duo 預購今晚八點開放。Apple 台灣跟台灣大哥大 myfone 網路門市同步。ETtoday 昨天報導通路業者估全台首批不到兩萬台，但預約人數已經接近百萬，等於五十比一的缺口。售價從兩百五十六 GB 的七萬四千九百，一路到頂規兩 TB 的十一萬八千九百，而且全系列是 eSIM only，沒有實體卡槽。顏色比例傳 Star White 占六成、Night Sky 占四成。Foxconn 良率只有六成，所以 Foxconn 把年目標從一千萬下修到六百萬，中間差了四百萬台。中華電信那邊沒搶到的要等到十月二十三號才在近五百間據點開賣。

這對做 push notification SaaS 的獨立開發者，就是今天最強的 vertical trigger。甜蜜點在哪？八點開放前一小時 FAQ 要先寫定，先把首批不到兩萬台的壓力數字跟 eSIM 開通流程告訴用戶；然後八點到八點十五搶空後第一波，各 SKU 售罄順序直接推；九點盤後第二波做缺口精算；之後十月二十三號開賣當日 pipeline 複用一次。粗估一次性付費五十到一百塊、十萬搶購者裡抓一小部分，event-based revenue 大概有五十萬到一百萬台幣可以吃。

同一時間 Apple 另一條 HomeView，就是昨天本來傳叫 HomePad 的那個智慧家庭中樞，命名正式確認叫 HomeView。七吋觸控螢幕、A18 晶片、Siri AI、相機能辨識家庭成員。但壞消息是 Apple 公開頁面已經明講不會有第三方 app 安裝，iOS SDK 的 public header 搜 homeOS 零結果。本來想做 HomeView 原生 wrapper 的開發者，這個甜蜜點等於被證偽。務實路徑應該改錨到 HomeKit 跟 Matter 自動化，不要再押原生 app 這條路。

第三條，開發工具這週有兩個關鍵升級值得今天動手。Claude Code 2.1.299 在十月十四號發布，加上十月九號的 2.1.296，兩個版本一起引入了一個蠻關鍵的參數叫 autoCompactWindow，可以單獨設定 subagent 的 context 壓縮時機，不用再等主對話一起 compaction。還有一個 allow_large 的 Read 參數，大檔讀取可以選擇性放寬。對一人 SaaS 跑長時程多代理研究類 workflow，這是本季最有感的 ROI 升級。

OpenAI 這邊 Codex CLI 跳到 0.162.1 patch，修了 TUI crash 跟啟動失敗，比較大的新亮點是 Managed Worktree 正式 user-facing。這是第一個官方 CLI 原生整合 git worktree 的解法，平行開三條 feature 分支給三個 agent 不會互撞；0.163.0-alpha.2 更進一步，讓 agent 自己能建跟列 worktree。如果你本來就在手刻 worktree script，今天升級完直接幫你省掉半個下午。

還有兩條次要訊號值得掃一眼。Shopify 的 UCP，也就是 Universal Commerce Protocol，繼續跟 Google 推進，Etsy、Wayfair、Target、Walmart 都加入了，支援五種 transport 包含 MCP。對台灣做跨境電商的 Shopify 商家，MCP 這條 transport 讓 Claude Code 或 Agent SDK 可以直接讀商店 catalog，今天試裝一條 pipeline 剛好當本週收尾。另外 Anthropic IPO 進入 T 減二十四，Reuters 口徑是期中選舉後路演，S-1 從 confidential 轉公開到 EDGAR 的時間點，會是下週最強的新 trigger。

重點是，今天是這週最後一個完整工作日，三個 push 窗口不要錯過：早上八點開盤前一小時 TSMC bull 跟 bear 雙版本、晚上八點 iPhone Duo 預購搶空倒數、以及工具這邊跑一次 Claude Code 2.1.299 加 Codex 0.162.1 升級。做完這三件事，週末可以安心休。
