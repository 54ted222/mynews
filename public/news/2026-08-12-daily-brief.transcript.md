今天想聊的是一件對台灣獨立開發者影響很大的事——Anthropic 昨天 8/11 一口氣丟出兩個大消息，把過去三週我們掛在嘴邊的「Sonnet 5 漲價前趕快遷移」整個 narrative 直接歸零。

先講第一個消息，Sonnet 5 的定價。原本 Claude Sonnet 5 在 8 月推出時，附帶一個叫 introductory pricing 的優惠——每一百萬 input tokens 只收 2 美元、output tokens 10 美元，比起接下來要漲到的 3 塊、15 塊便宜整整五成。原訂 8/31 UTC 到期，這條倒數過去三週幾乎是所有做 Anthropic pitch 的顧問案主打題目。結果昨天，Anthropic 官方 X 帳號直接宣布——這個優惠永久保留、9/1 的漲價取消。也就是說 2 塊、10 塊這個 flat 定價會一路延續下去，加上 prompt caching 最多打到一折、batch 打五折這些配套，繼續有效。同一天，Claude Code v2.1.227 的 release note 也把這件事寫進去了。

第二個消息更關鍵，是 Claude Code Auto Mode 在 8/14 生效。Claude Code 是 Anthropic 自己的 terminal 端 coding agent，Auto Mode 就是讓它「除了會搞破壞、不可逆的動作、要動到環境外的東西，其他都自動跑」的模式。過去這是選項，你要主動去打開。從 8/14 星期四開始，Pro、Max、Team 三個方案通通預設打開。

有一家做 LLM 紅隊測試的第三方機構叫 Trajectory Labs，他們用 72 個 indirect prompt injection 情境跑 10 次、共 720 次嘗試——Sonnet 5、Opus 5、Fable 5 三個模型在 Auto Mode 下全數 0 次成功；同樣測試給 GPT-5.6 Sol 跑 Codex，Auto-review 有 5.83% 成功、Full Access 更是接近兩成。而且 Anthropic 內部一千多人的實測顯示，Auto Mode 能擋掉 89% 的危險指令，人工 review 反而只擋 13.6%。原因是——我們用久了會反射性地按同意，他們算了一下，人類會反射批准 97% 的 prompt。所以簡單說：把決策收回程式碼、寫成 deny rules，比讓人一個一個按 y 更安全。

這兩件事合起來意思很直接——對台灣 5 到 20 人的 indie 團隊來說，過去三週我們在賣的「幫你在 8/31 前完成 Sonnet 5 遷移」那套 audit sprint 提案，narrative 一夜之間反轉了。今天開盤前要做的第一件事，是主動通知客戶：原本要做的漲價前遷移可以緩，但立刻要做的，是 8/14 default 生效前的 review pool 建置。

要做什麼？三件事：第一，去檢查 `~/.claude/settings.json` 裡面有沒有 deny rules，因為 Auto Mode 的防線是靠這個、不是靠 system prompt；第二，全團隊在 8/14 前對齊什麼叫「不可逆」——像 `rm -rf`、`git push --force`、正式環境的 credentials、對外 API 傳送這些，都要列進不可逆清單；第三，CI 上頭的 headless script 要 whitelist audit 一次，因為過去那個 `--dangerously-skip-permissions` 的旗標是選加的，8/14 之後會被 Auto Mode 的邏輯繞開。這一整包做起來，中文 SOP 加 template 是可以直接開一個 audit sprint，25,000 到 60,000 一件、抓 3 到 5 個客戶。

好，這是 8/11 內部軸線。再往外拉，今天 8/12 還有兩個宏觀事件要一起看。

第一個是今晚台北時間 21:30，也就是美東 8:30，美國勞工部 BLS 會公布 7 月 CPI 報告。市場共識預期 headline 環比 0.2%、年增 3.4%，比上個月 3.5% 略降；core 環比 0.2%、年增 2.5%。這是 Fed 9 月要不要降息之前、最後一次的大型數據。對我們的意義是——如果你手上有美元計價的 SaaS 訂閱要在 8 月做 annual pre-pay，今晚 21:30 之前先不要按下去。等 CPI 出爐之後看台幣走勢再決定：如果 CPI 弱、台幣續強，8 月底前你有一個匯率的 window；如果 CPI 強、台幣反轉，那 Q3 訂閱成本會壓回來。

第二個是明天凌晨的 MSCI 季調開獎。MSCI 季調就是明晟指數公司每年 2、5、8、11 月按規則調整全球與區域指數成分股的例行檢討，被納入的股票會被全球被動 ETF 資金按比重被動買進、剔除的相反，所以開獎日對台股短線很關鍵。這一次本土投顧主流估算是「4 進 2 出」——南亞科、華邦電、群聯、景碩四檔記憶體與 IC 載板可能入列；大摩甚至喊南亞科目標價 1,160 元。8/11 收盤南亞科從前一天漲停的 502 塊回檔到 489、跌 2.6%，華邦電 178、微跌 0.8%——都是短線 profit taking，但整體維持強勢。8/31 收盤才生效。

把三條軸線疊起來——今晚 21:30 US CPI、明天凌晨 MSCI 開獎、後天 Claude Code Auto Mode default 生效，24 到 48 小時之內三重共振。

所以今天要做什麼？我列一下：

早上開盤前，把「Anthropic Q4 全 stack 決策樹」中文首篇的大綱寫完，這個題目要把 Sonnet 5 永久定價、Auto Mode default、還有 Anthropic 10 月要在 Nasdaq 上市這三條線串成一篇——中文媒體到現在沒人這樣寫過。同時通知既有 audit 客戶轉向。白天到下班前，把 Claude Code Auto Mode 的中文 SOP、deny rules 範本、還有 CI whitelist 掃描腳本這三件套做完。晚上 21:30 守 CPI，22:30 前發 same-day「台灣 SaaS 8 月訂閱決策樹」的更新版。明天凌晨 06:00 追 MSCI 開獎結果，看 4 進的估算對了幾檔。

重點是——過去三週我們都在賣「漲價前趕快遷移」的緊迫感，這條 narrative 一夜之間沒了；但同時 Auto Mode default 反而變成一個更明確、更短的兩天倒數。誰能在 8/14 之前，把中文 SOP、deny rules 範本、CI 白名單這一整套做起來，順便把 US CPI 對台灣美元 SaaS 訂閱、還有 MSCI 開獎對半導體客戶的影響一次整合給客戶——就是今天到明天這 48 小時的機會。就這樣，我們明天見。
