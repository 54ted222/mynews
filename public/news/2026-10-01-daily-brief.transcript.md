今天想聊 10 月 1 號，週四。這一天很特別，如果你是台灣的獨立開發者、freelance、或是做 SaaS 的，我會說這可能是一整年最重要的單日。為什麼這樣講？因為它同時是七件事的疊加點。

第一，它是第四季的第一天，Q4 首日。第二，它剛好是中秋連假結束後的第六天，也就是節後首週的第三個工作日。第三，Anthropic 的 Claude Sonnet 5.5 是 9 月 28 號落地的，到今天正好 T-3，也就是模型換代已經穩定三天，router 全線 rebase 進入穩定期的第一天。第四，OpenAI 的 DevDay 是 9 月 29 號，到今天是 T+2，開發者實測期正式開跑。第五，iPhone Duo 的台灣預購倒數 T-15，也就是 15 天後開賣。第六，Next.js 昨天 9 月 30 號剛推 16.3.7 跟 15.5.27 版本，含五個 CVE 安全漏洞，今天是 T+1，各家 CI/CD 升級進行中。第七，經濟部商業發展署的服務業 AI 升級方案在 Q4 首日續發放，2.5 億元、目標 3 萬家企業。

所以你看，Q4 首日、中秋 T+6、Sonnet 5.5 T-3、DevDay T+2、iPhone Duo T-15、Next.js T+1 CVE、商業服務業 Q4 首日，七軸疊加。這種密度一年可能只有一兩次，指標意義非常強。

不過，別高興太早，還有一個懸念沒落地——Anthropic 的 Claude Haiku 5.5。9 月 22 號 Opus 5.5 發表時 Anthropic 說 Sonnet 跟 Haiku 兩支「in the coming weeks」會上線，Sonnet 5.5 已經在 9/28 落地，但 Haiku 5.5 到今天 T+9 還沒發布，官方沒有 model card、沒有 API 識別碼、沒有 pricing 頁、也沒有官方 eval。有些第三方寫 10 月 22 號，但那是估算佔位，不是官方日期。簡單說，這是 Q4 router rebase 剩下的最後一軸，特別是「邊緣、行動、on-device、便宜頻繁 call」這一塊還缺一個新錨。它會在 Q4 落地，還是拖到 Q1？這是台灣 indie SaaS 接下來幾週要密切追蹤的分水嶺。

再來聊今天最緊急的事：Next.js 五個 CVE。昨天 9/30 落地的兩個修補版本包了五顆漏洞。第一顆 CVE-2026-64648 是快取污染，同一個網址但不同 body 的請求可能拿到別人的快取內容，造成機密資料外洩。第二顆 64641 是 CPU DoS，攻擊者針對 App Router 加 Server Action 的組合手工發請求，就能把後續請求全部卡住。第三顆 64649 是 SSRF，Server Action 做轉發或重新導向時可能被打到惡意主機。第四顆 64643 是認證繞過，App Router 跟 cache endpoint 的 Server Action ID 會洩漏給未認證的使用者。第五顆最狠，CVE-2026-75604，Windows 上的反斜線路徑逃逸，可以暴露加密金鑰進而遠端執行程式碼，也就是 RCE。

這五顆的共通點是攻擊面全在 App Router 加 Server Action 這條主線上。所以如果你有客戶專案跑 Next.js、特別是 Windows self-host 的，今天下午到傍晚一定要把 CI/CD 的升級 last-mile 收掉。Windows RCE 那顆風險最高，如果你手上有這種案子，rushed audit 是可以直接開 pitch 的。

再來看硬體那條線。iPhone Duo 剩 15 天開賣，供應鏈的結構已經定型。Foxconn 跟台灣的 Shin Zu Shing 也就是新日興、股票代號 3376，合資拿下大約 65% 的樞紐訂單，剩下 35% 給美系的 Amphenol。這是雙軌供應，但 Foxconn 2026 出貨已經下修到 600 萬支，比原本預估的 700 萬支少了一百萬，主要卡點就是樞紐產能。iPhone Duo 用的是 3D 列印的樞紐加上鈦金屬構件，工藝門檻高。台灣三大電信都吃預購，中華電信 10/23 限量預約，台灣大哥大 10/16 晚上八點首發，遠傳也有。價格 256GB 從 74,900 元起跳，到 2TB 是 118,900 元。今天是 Q4 首日，這個 rerating 兌現觀察就特別重要——對照 9 月 10 號發表會當天蘋概股普跌，台積 -0.61、鴻海 -1.39、和碩 -0.99、廣達 -2.05，今天如果拉得起來，就是分岔訊號。SZS 3376 是這條線最精確的錨點。

還有一條結構性的：台積電 A16 也就是 1.6 奈米製程，2026 下半年量產確認，NVIDIA 是單一客戶，導入下一世代的 Feynman GPU 架構。這是 Blackwell 跟 Rubin 之後的後續世代。同時 N2 也就是 2 奈米，2025 第四季已經在新竹跟高雄廠量產，最大月產能 14 萬片，2 奈米 2027 年會跨到主流節點。NVIDIA 獨家 A16 是台積 2 奈米家族一個新的結構性訊號。

再來是開發者這邊。OpenAI DevDay T+2，Codex 從 preview 進入 GA，一般可用，同時推 Codex SDK、Slack integration、企業分析、選擇性開網路連線去裝套件跑測試，還有語音控制。語音跑的是 GPT-Live，這是 OpenAI 的全雙工語音模型，可以邊聽邊說，使用者說話期間模型持續作業，等於低延遲的對話式互動。除此之外還有 AgentKit，這是 production-grade 的 agent 開發工具箱，還有 Dots 常駐 agent，傳聞底層跑 Cerebras 的 Fast Mode silicon。這幾個東西加上 AWS Bedrock 上宣布的 Managed Agents，等於是對 Cursor Cloud Agents、Claude Code 遠端跟 SWE-2 CLI 打出一套組合拳。

台灣 freelance 跟 agency 今天的 dev tool router 因此變成四軸精確錨：Codex GA、Cursor Composer 2.5、Cognition SWE-2 T-9 免費倒數、Claude Code Sonnet 5.5。順帶提一下 SWE-2 免費只到 10 月 10 號，剩九天，之後 Devin Pro 20 美金、Max 200 美金一個月。這九天是集中做 shadow eval 的最後窗口。至於 Cursor Composer 3 Vega，今天 T+101，破 100 天里程碑，還沒有 confirmed release，是 2026 剩下唯一破百天的 vaporware 標本。

最後收在最實在的一條——經濟部商業發展署的服務業 AI 升級方案。2.5 億元投資、目標 3 萬家企業採納 AI、2 萬家門店部署 AI 應用、2 萬 8 千名 AI 專業人員培訓。補助分三檔：單店最高 10 萬、20 到 50 家的連鎖 300 萬、3 據點以上集團軟硬整合上限 2000 萬到 3000 萬，但業者要自籌一半。五大類：零售、餐飲、旅宿、運輸、專業服務。這是 Q4 首日 outbound 加速的新錨，「集團 2000 萬到 3000 萬 + 業者自籌一半」是 Q4 大案件的量化錨。

重點是，今天七軸疊加是 Q4 全季定調的關鍵日。三件事今天一定要做：一，Next.js T+1 升級 last-mile 收掉，Windows self-host 客戶優先，那條 RCE 太貴；二，商業服務業 3 萬家補助案的 Q4 outbound 今天要開跑，特別是集團案；三，Haiku 5.5 未落地要當成剩下一軸來監控，router rebase 的最後一塊拼圖擺在那邊等它下來。做完這三件，Q4 首日就沒白過。
