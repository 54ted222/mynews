今天想聊 2026 年 7 月 2 日的每日創業情報，這一天最大條的新聞其實是一個大逆轉，跟我們前一天 brief 寫的完全反過來。

我們先從 Fable 5 講起。Fable 5 跟 Mythos 5 是 Anthropic 這一波兩條旗艦模型線的代號，Fable 5 是給一般開發者跟 Claude、Claude Code 用的那條，Mythos 5 則是企業跟政府那條。6 月 12 號的時候，美國商務部以 export-control 的名義，把這兩條線從海外供應全部切斷，Anthropic 也緊急下架。當時 Polymarket 上有個賭盤在賭「什麼時候恢復」，數字大概像是 6 月 30 號 41.5%、7 月 1 號 44.5%、要到 7 月底才拉到 90%、年底 97%。所以我們前一天 7 月 1 號的 brief，其實就照著這個賭盤寫成一個三段 ramp 的預期，還讓客戶的 SLO 加了一個「第四層 fallback」，要撐到 7 月 31 號。

結果 6 月 30 號當天，商務部長 Lutnick 直接寫了一封信給 Anthropic，把 6 月 12 號那個 export-control 指令整個撤回。Anthropic 7 月 1 號就正式公告說「Wednesday 起」，Claude、Claude.AI、Claude Code 對全球所有使用者恢復。CNBC、VentureBeat、CoinDesk、TheNextWeb、Euronews、Hacker News 這一批媒體 6/30 到 7/1 交叉確認。也就是說，Polymarket 那個「44.5% 慢慢爬」的預期，直接被實際的「一天內全開」打臉。

那 Anthropic 用什麼換的呢？他們主動答應三件事。第一，主動偵測跟回報 malicious activity。第二，幫政府 develop future model standards。第三，針對 6 月 11 號 Amazon 那個研究員公開的 jailbreak 手法訓一個 classifier，Anthropic 6/30 write-up 說這個 classifier 在超過 99% 的情境下擋得住那個手法。這個對我們獨立開發者其實是很強的訊號，因為它把「Anthropic 主動跟美國政府對接 standards」寫成一個公開姿態，等於我們客戶 deck 講「為什麼要選 Anthropic 而不是 OpenAI」時，可以從原本的六引擎升到八引擎，多加了 Sonnet 5 的性價比，還有這個 standards 對接的訊號。

不過，這也表示我們前一天 brief 有問題。所以今天最緊急的動作，是對那些已經照著我們「Polymarket ramp」寫進客戶 deck 或 SLO 的獨立開發者，24 小時內補一封訂正信，把第四層 fallback 拆掉，並且把 `FABLE5_RESTORE_POLYMARKET_ODDS` 跟 `FALLBACK_LAYER_4_ACTIVE` 這兩個動態 placeholder 從模板裡清掉。同時，48 小時內用中文跟日文寫一篇 case study，題目就是「Fable 5 解禁對上 Polymarket ramp 的預期落差、加上 Anthropic 換來的條件對 indie SaaS 資安 SOP 的影響」，這塊中文供給是零，先機很大。

再來聊 Replit。Replit 的 Effort-Based Pricing 今天 7 月 2 號正式全量 rollout，這是六月中先給新註冊用戶試跑兩週之後的全量上線。簡單的 edit 一個 checkpoint 不到 0.25 美金，複雜的一包可能一個 checkpoint 超過 0.25，價格反映的是 effort 加時間加運算量。同一時間他們也上了「high power model」跟「extended thinking」兩個 per-request toggle，讓使用者自己決定要不要開重砲。

這裡歷史很重要。2025 年 7 月，Replit 上 Agent 3 的時候，就發生過一波帳單暴漲 6 倍的 Reddit 大反彈，一堆人一晚上燒掉月預算的三分之一，執行長 Amjad Masad 當時上 X 說「aware of issues + actively fixing」，然後補了 10 美金 credit 給大家。所以我們判斷，今天全量之後 24 到 72 小時內，Reddit 跟 Hacker News 大概還會有一波 cost overrun 的訊號出現。

那我們該做什麼？三件事。第一，把客戶 SOP 打包上架，Gumroad 或 Polar 賣 99 到 199 美金 lifetime，內容就是每個使用者每天 5 到 20 美金的 spend cap，加每月 50 到 200 美金的雙保險，然後 high power model 跟 extended thinking 的 toggle 決策樹，最後附上 2025 那波 6 倍反彈的 FAQ 當歷史對照。第二，中文跟日文都寫一篇「Replit 全量之後 14 天月帳實測 SOP、加 toggle 決策樹、加 2025 對比 2026」的 evergreen 短文。第三，7 月 2 號到 16 號之間每天開一個 Replit spend log 的 dashboard 客戶 audit，一單 500 到 1500 美金。順手也把我們自家 SaaS 用 Replit 的部分，spend cap 雙保險加 Slack alert pipeline 一次上緊。

再來是 ACP。ACP 全名是 Agent Client Protocol，是 Cognition 隨 Devin Desktop 推出來的一個開放協定。簡單說，它定義的是「編輯器」跟「agent runtime」中間那道介面，讓 Codex、Claude Agent、OpenCode，甚至你自己 in-house 寫的 agent，都可以跑進 Devin Desktop 這個殼裡面。這跟大家熟悉的 MCP 剛好互補，MCP 管的是「agent 對外部工具」的介面，ACP 管的是「編輯器對 agent」的介面，一個是 tool 介面、一個是 runtime 介面。

對獨立開發者來說，這是「不被單一 vendor 綁死」這個 narrative 這半年最強的訊號，因為它意味著我們寫的 agent 未來既能跑進 Devin Desktop，也能跑進 Codex、Claude Code、OpenCode。所以行動很清楚，48 小時內寫一篇中文跟日文「MCP 對比 ACP 的雙協定分工地圖」，然後上一個 landing page，賣「indie SaaS agent 雙協定合規 audit 加選型決策樹加自建 agent 進 ACP editor 範本」，一單 1000 到 3000 美金，範本另外上架 19 到 99 美金 lifetime。客戶的 RFP「agent runtime vendor-neutral 檢核清單」也要加一條 ACP。

其他還有幾件要記得的事情。Anthropic 的 KYC 7 月 8 號就要生效，倒數只剩六天，會用 Persona 這家第三方做政府 ID 加自拍，這意味著匿名用 Claude 的時代要結束了。對法律、醫療、金融這類 privacy-sensitive 的客戶，SLO 要補「KYC 生效說明加 opt-out 路徑」一條。Cordyceps 那個 GitHub Actions 供應鏈攻擊，7 月 16 號 backport 到 v3 到 v6 強制升級，倒數 14 天。MCP 2026-07-28 的 RC，倒數 26 天，我們自家 MCP server 的改寫 timeline 維持。

重點是這樣。今天最急的是 Fable 5 解禁的訂正信、把前一天 brief 的 Polymarket ramp narrative 全部撤回，這是信任修復。第二急的是 Replit 全量的 SOP 推播跟 spend cap 上緊，趕在反彈訊號出現前先卡位。中期的機會在 ACP 生態的 first-mover 窗口跟 Anthropic IPO 前 12 週的八引擎 narrative。這一天的訊號很清楚，六月中商務部下的 emergency export control，18 天就撤回，加上 Anthropic 主動跟美國政府對接 standards，對我們選型跟客戶 deck 都是加分。忙起來吧。
