今天想聊的是九月十四號，週一。如果要幫這一天下個標籤，我會叫它「反轉日」。因為打從一大早翻情報，最搶眼的那則新聞，就是官方親手把自己昨天才貼出的死線給撕掉。

先講最戲劇性的那條——DeepSeek V4-Pro。昨天大家都在準備遷移，因為 dashboard 上明確寫著九月十四號 04:00 UTC 之後 V4-Pro 就會下線、強制切到新的 V4.1-Flash。台灣這邊、亞洲成本敏感 vertical，很多做客服、教育、訂閱盒的產品，全部都在跑 shadow eval、算帳單、寫 fallback。結果今天早上，DeepSeek 的 pricing page 直接改了，寫得很白：Pro API 服務繼續、billing 不變。連二手來源都在轉述官方的說法——因為用戶反應強烈，所以九月十四號之後繼續提供。

所以昨天所有做遷移準備的產品，今天可以緩一口氣。但是——這裡有個很重要的但是——不是叫你把 shadow eval 收起來。V4.1-Flash 是還在，peak time 每百萬 input token 三毛美金、KV cache 縮到前代的四分之一，這個 Flash 選項並沒有消失。真正變的是，router 選型現在多了一個新維度，叫做「vendor 政策風險」。一個 open-weight 廠商在用戶壓力下能把死線撤回，這是史上第一次；反過來說，也代表下次它可能再宣布、再撤回，或宣布了不撤回。所以我的建議是，六十天的雙棧 shadow eval 該做還是要做，把它當長期投入，不要當急救包。

第二條主線，是 iOS 27 今天全球上線。時間是美西早上十點，換算成台北時間，就是台灣週一晚上凌晨一點，等於台灣人是週一晚上或週二一早起床才會看到推播。這一版最大的賣點是 Siri AI beta，底層是 Google 的 Gemini 2.5 Pro，走 Apple 自己的 Private Cloud Compute，個資不會外洩給 Google。Engadget 早期測試的結論是——能處理複雜的多步驟 prompt，這是一個正面訊號。iPhone 11 以上可以升 iOS 27，但要用 Siri AI，機型必須是 iPhone 15 Pro、16 系列、18 Pro 或 Duo 以上，等於三代半的硬體門檻。EU 只有 Mac 跟 Vision Pro 拿得到，iPhone iPad Watch 都被鎖住；中國本土市場暫時不上線；首發只有英文，法日韓葡西要等十月。另外一個對開發者比較敏感的節點是——二〇二七年四月起，App Store 就會強制送 iOS 27 SDK，等於現在到明年四月，是六個月的 roadmap 錨點。

第三條主線，是這週三的 FOMC。今天離會議剩兩天，25bp 升息的機率在市場上出現了明顯分歧。Polymarket 是 56%、CME FedWatch 也是 56%，但 BigGo 標的高達 79.5%，三個來源差了二十幾個百分點。背景是——CPI 八月 3.4% 頭條、核心 2.4%，PPI 月增 0.4%、年增 5.4%，八月非農加了十六萬二千人，再加上新任 Fed Chair Kevin Warsh 八月底在 Jackson Hole 發表偏鷹派演說，四件事湊在一起就是升息派的火藥。所以明天週二 9/15，一邊是 FOMC 開會 T-0、一邊是 iOS 27 上線首日，週二美股開盤，跨境 SaaS、蘋概股、折疊機供應鏈三面同時反應。週三會議後還有一次 dot plot 公布，也就是聯準會官員各自的利率預估點陣圖，那會是第二次定調的機會。

再來聊 iPhone 18 Pro，週五就要交機。9to5Mac 昨天說大部分 SKU 都可以九月十八號當天到貨，但——Pro Max 部分規格已經 slip 到十月，尤其是 Max 高階；而 2TB 各色反而還是 launch day 可到。MacRumors 也發了一篇「還沒預購？現在要等多久」的觀察文。四個訊號合在一起——Duo 即將預購、上一代升級太強、週六反常的預購潮、Max 高 SKU 出貨延後——這已經不是隨機噪音，而是結構性訊號了。台廠光電、光學的 Q4 rerating，得盯 Max 分槽出貨後半段。

Grok 4.7 這邊，Musk 上週四說「再幾天就上」，到今天 T+3 還沒看到。cryptobriefing 週五也發了一篇，把延期原因列得很清楚——response length penalty、task management、self-checking 都是問題。xAI 的 docs 到現在還是把 grok-4.6 列為最新版本。所以簡單說，別為一個沒發布的模型改工作流，當下的主力還是 Sonnet 5、Fable 5.1、Astra、Gemini 3.8 Flash，加上今天轉彎繼續留下來的 DeepSeek V4-Pro，五軸並行。

技術層面還有一則——Claude Code v2.1.270 昨天上，這一版只做一件事，就是修 v2.1.269 的權限 regression。什麼 regression？就是連 git status、git log 這種 read-only 指令，在長 session 用一陣子之後會突然跳出來要求授權。這個是很煩的 bug，所以有在做 skills 或 plugin 的團隊，週一必升。順帶一提，v2.1.269 上線的 claude plugin eval 指令，可以跑可複製、有分數的 plugin 品質評估，對於「demo 好看、實測不穩」這種老問題是一個決策方法論新利器。

不過重點是——今天為什麼叫「反轉日」。因為它同時包了三個層面的反轉。第一，是模型層——DeepSeek 把退場死線收回去，這是 open-weight 廠商第一次示範「用戶壓力可逆退場」，往後 GPT、Claude 遇到用戶反彈時要不要比照，是新的變數。第二，是平台層——iOS 27 帶 Gemini 進 Siri，等於 Apple 把系統級 AI 助理的核心外包給 Google，這是 Siri 誕生以來最大的策略反轉。第三，是政策層——FOMC 這週從降息週期切換到重新開啟升息討論，加上 Kevin Warsh 這位新任主席立場鷹派，貨幣政策的方向也在反轉。

所以如果你今天只做一件事，我會建議是——把 vendor 政策風險這個維度，補進你手上的 model router 選型文件。不必急著遷移、不必砍掉重練，就是加一欄，記錄一下每個 provider 這一年做過幾次 pivot、對用戶壓力的反應如何。這種東西平常沒用，pivot 那天就是救命符。今天就聊到這裡，我們明天週二 FOMC T-1 見。
