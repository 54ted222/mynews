今天想聊七月一號這天，獨立開發者圈大概是上半年最忙的二十四小時——三條軌道同時切換、一條昨天才落地的大新聞要追，再加上我必須在這集開頭就先做一次自我訂正，把昨天 brief 裡寫錯的一段話收回來。所以這集會比平常稍長一點，請耐心聽到最後，那條訂正的脈絡我會留在收尾講。

先講今天最大的事，Anthropic 在昨天，也就是六月三十號，正式發布了 Claude Sonnet 5。內部代號叫 Fennec，就是沙漠裡那種大耳朵小狐狸。為什麼這條這麼重要？因為它幾乎把昨天 brief 的整個敘事都改寫了。

定價部分，Sonnet 5 是每百萬 input token 兩美元、output token 十美元，這是 introductory pricing，只到八月三十一號。九月一號之後會回到標準價，每百萬 input 三美元、output 十五美元。也就是說，未來兩個月有一個價格窗口，獨立開發者要決定是趁這段時間鎖住客戶月帳的 baseline，還是觀望九月之後的標準價再重估。這是個實際的決策題。

能力面，Sonnet 5 給的數字是 SWE-bench Verified 拿到八成二。SWE-bench Verified 就是 OpenAI 從原本 SWE-bench 兩千多題裡，找人工挑出五百題真實 GitHub issue 做為測試集，被視為衡量大型語言模型寫程式能力最常被引用的基準。Sonnet 4.6 之前是七成七，所以這次跳了將近五個百分點。

更重要的是另一個分數，OSWorld-Verified 八成八。OSWorld 是測 agent 在真實桌面環境裡跨應用程式完成任務的能力——開檔、瀏覽器、Office、終端機這些。人類專家做這套題目大概七成二。Sonnet 5 高出人類專家將近十六個百分點，這是 desktop automation 第一次大幅超越人類。講白了，過去做 computer use 的 agent 大致是「比沒有強、但不能放心給客戶用」的程度，今天這條線被踩過去了。

然後 context window 給到一百萬 token，已經 ship 進 Claude Code、claude-sonnet-5 這個 model id 直接能用，預設變成 Free 和 Pro 方案的模型。所以連免費用戶現在預設就是 Sonnet 5。

對獨立開發者最直接的影響是這樣：很多 indie 在賣 cybersecurity、法律、教育、招募、住房類的 SaaS，客戶 SLO 裡會寫「我們的 model fallback 順序是這四層」。昨天的 brief 寫的是 Opus 4.8 當中段 baseline，今天必須改寫——Sonnet 5 取代 Opus 4.8 變中段 baseline、Opus 4.8 退到第四層 fallback、Sonnet 4.6 整層退役。然後因為 introductory pricing 只到八月底，建議在客戶 SLO 範本裡加兩個動態 placeholder：一個是八月三十一號倒數天數、一個是已經切到 Sonnet 5 baseline 的旗標。這樣客戶不會在九月一號被價格突然回到三塊十五塊嚇到。

對昨天已經拿著「Opus 4.8 baseline」這個敘事去寫客戶 deck 的 indie，今天二十四小時內要補一封訂正信，把這段改過來。中文跟日文圈現在這條 narrative 的供給幾乎是零，所以四十八小時內是 first-mover 窗口。

好，講完最大條，接著是三軌同期切換。

第一軌是 Cursor Teams。昨天六月三十號發布的新定價，今天七月一號對 renewing 客戶的 billing cycle 正式開始切換。新數字是這樣：Standard seat 年付一個月三十二、月付四十，包含 Composer、Auto，加上 Third-Party API 兩個獨立 pool。Premium seat 年付九十六、月付一百二十，是 Standard 用量的五倍、價格的三倍。Cursor 自己估計 Composer 那個 pool 足夠覆蓋九成九的 power user 一整個月跑 agent 的需求，而且這個改價對九成的團隊月帳是下降的。

對 indie agency 來說，要做的是分流決策：那些每天叫 agent 跑分鐘級任務的全職工程師切 Premium，其他偶爾用一下的 contributor 用 Standard。中文跟日文圈這個 decision tree 供給也是零，又是一個 first-mover 窗。

第二軌是 Cognition 的 Cascade，今天，就是七月一號，正式 EOL。Cascade 是過去 Windsurf 那一脈的 in-editor agent。Cognition 在六月初已經把 Windsurf 改名 Devin Desktop，今天起 Cascade 由 Devin Local 取代。Devin Local 是用 Rust 重寫的，支援 parallel subagents、token 效率比 Cascade 高大約三成，而且採用一個叫 ACP 的開放協定。ACP 是 Agent Client Protocol，類似 MCP 但聚焦在編輯器跟 local agent 之間的連線。

在編輯器裡的用法會自動 port，不用動。但 CI 跟 automation 腳本如果有顯式呼叫 `cascade` 這個指令，今天二十四小時內必須改成 `devin-local`，不然明天早上開工 CI 會壞。要 grep 的位置是 `.github/workflows` 底下、Makefile、`package.json` 的 scripts、還有 shell wrapper。明天早上如果客戶傳訊息說「我們 CI 早上 break」，就會變成一筆 retrospective 的 audit 案，大概五百到一千五百美元。

第三軌是 Replit 的 Effort-Based Pricing，明天，七月二號，全量切換倒數一天。Replit 從六月十八號起讓新註冊用戶試跑了兩週，明天會切到剩下的所有用戶。原本是 per-checkpoint 固定兩毛五，現在改成依實際 effort、time、computation 算錢——簡單的編輯一個 checkpoint 還是兩毛五以內，複雜任務會 bundle 成一個超過兩毛五的 checkpoint。同時 ship 兩個 per-request toggle，一個是高功率模型、一個是延伸思考。

對 indie 來說，最該記住的是去年七月十一號那次出包——那天上午十一點二十六到下午五點四十三，Replit 的成本計算出錯導致很多 indie 月帳爆量，事後 Replit 補了十美元 credit。這個故事可以做成一篇常青文章，主軸就是「2026 年 indie 在 Replit 上做月帳安全結構」。具體建議就是雙保險 spend cap——每用戶每天五到二十美元、整月總額五十到兩百，兩層都設。

接著還有兩條後續追蹤。MCP 規格的 2026-07-28 RC 倒數二十八天。這個 RC 在規格層級走 stateless——去掉 initialize/initialized handshake、去掉 session header，把協定版本跟 capability 資訊放到每個 request 的 _meta 欄位。加上一個叫 Tasks 的長任務 extension，還有 MCP Apps，編號 SEP-1865，那是讓 server 可以回傳 sandboxed iframe UI 給 client 內嵌呈現。Vercel AI SDK 7 已經預先整合 SEP-1865，是首個主流 TypeScript SDK 跟上的。自家 MCP server 改成 stateless 的時程建議是這週開始 audit、兩週後動工、七月二十八號切換。

Anthropic IPO 確認用 Goldman Sachs、Morgan Stanley、JPMorgan 三家當主辦。S-1 在六月一號 confidential submit，預計九月 roadshow、十月在 Nasdaq 掛牌、目標募六百億美元以上。客戶 deck 裡「為什麼選 Anthropic 而不是 OpenAI」這段，現在可以從六引擎升到七引擎，把「Sonnet 5 性價比超越 Opus 4.8」加進去當第七條。

好，最後是今天最重要的訂正。昨天六月三十號的 brief 寫「Colorado AI Act SB 24-205 今日六三零對高風險 AI SaaS 立即生效」——這句話**完全是錯的**，必須收回。

實際情況是這樣：SB 24-205 這條法案原本預定 2026 年二月一號生效，但去年八月二十八號 Polis 州長簽了 SB 25B-004 把生效日延到今天六月三十號。然後今年五月十四號，Polis 又簽了 SB 26-189，這條新法直接廢止了 SB 24-205，改採一個叫 ADMT 的新框架。ADMT 是 Automated Decision-Making Technology，走的是揭露加上個資權利的路線——要求業者揭露使用自動化決策的事實、給消費者解釋與申訴權，而不是 EU AI Act 那種事前風險分類加合規義務。最重要的是生效日推到 2027 年一月一號。

也就是說，Colorado SB 24-205 從來沒有真正生效過、現在已經被取代、新框架還要一年半才生效。聯邦層級的部分，White House 六月對各州 EU-style 的 AI 立法做了 callout，所以未來美國的 AI 合規路線會以 disclosure-and-rights 的 ADMT 為主，不會是歐洲的 transparency 風格。

對昨天已經拿「六三零立即生效」這套敘事去推「美國客戶 hiring、教育、住房、金融、法律、政府、健康 SaaS indie 立即合規 audit」的人，今天二十四小時內必須補一封訂正信。如果昨天已經發過一封「歐洲不等於美國等於沒法」的訂正信，今天還要再補第二封，雙重道歉維護信任。客戶 deck 跟 landing page 上的時程要從「Colorado 即日生效」改成「Colorado ADMT 2027 一月一號預告 + EU Article 50 八月二號 + Claude Tag 八月三號 + EU 十二月二號」這個四時程結構。

重點是這樣：今天的核心不只是 Sonnet 5 那條新聞，而是這條訂正提醒我們，做每日情報這件事，跟監管時程綁得很緊的條目特別容易誤判生效日，需要每天交叉驗證。Sonnet 5 改寫客戶 SLO baseline、Cursor Teams 切 Premium、Cascade 今天 EOL、Replit 明天全量切——這四件事都很重要，但都比不上一條「我們把昨天寫錯的東西收回來」這個動作對 indie 跟客戶之間信任的維護。建議今天的工作排序就把訂正信放第一順位，再來才是 Sonnet 5 baseline 改寫，然後是 Cascade 最後一輪 grep。
