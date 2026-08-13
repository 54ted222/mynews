今天想聊四件事，不過真正影響今天工作動作的其實就一件：Claude Code 的 Auto Mode，從今天 8 月 14 號起，正式變成付費用戶的預設模式。這是所謂的 D-Day。很多台灣團隊到明早才會發現，怎麼新開的 session 沒問我就自己下命令了。

先從 Auto Mode 說起。Anthropic 大概一週前就預告過這件事。具體來講，今天起 Pro、Max、Team 這三個 plan，只要你過去沒有明確 pin 過 permissionMode 的用戶，新開的 session 一律預設為 Auto。Enterprise、API，還有走 AWS Bedrock、GCP Vertex、Microsoft Foundry 的通道，官方說「未來一個月內跟進」，換句話說台灣如果是走雲平台通道，還有一點過渡時間；但直連的 Pro、Max、Team 用戶今天已經是了。

Auto Mode 的邏輯簡單講就是：classifier 幫你判斷這個 tool call 有沒有風險，如果沒有就直接放行、不再問你；只有那些「不可逆」、「破壞性」、「環境外」的動作才會停下來問。像 rm -rf、git push --force、curl 對外送 POST 這種，理論上還是會被攔。

Anthropic 自己給的數字看起來很漂亮。他們找了一千多個付費 tester 測，Auto Mode 抓到 89% 的危險指令；相比之下，如果只是丟給人工 review，只有 13.6% 會被擋下來。原因是人的反射性同意率高達 97%——簡單說就是 approval fatigue，看到 prompt 就按 yes。所以從這個角度看，Auto Mode 其實比人更謹慎。

不過 Trajectory Labs 一份獨立測試就沒那麼好看。他們設計了 72 個情境、每個跑 10 次，總共 720 次 attempts。Anthropic 自家的 Sonnet 5、Opus 5、Fable 5 在 Auto Mode 下的 prompt injection 成功率是 0；相對來說 OpenAI 的 Codex 走 auto-review 是 5.83%。這是好消息，不過條件是你有把 deny rules 設好。所以要注意，deny rules 才是今天的主防線，不是 classifier。

那今天 24 小時之內，台灣的 Claude Code 團隊要做的第一件事，就是打開 settings.json、把 permissions.deny 陣列填好，把 rm -rf、git push --force、curl -X POST、還有正式環境的 WebFetch 這幾條先寫進去。第二件事是所有 CI headless 腳本要檢查一次——過去很多人是用 --dangerously-skip-permissions 跑的，今天起 Auto Mode 邏輯會直接繞開 approval prompt，這意味著原本的假設變了，最好切成 --permission-mode plan 或明確給 deny 白名單。第三件事是每台 dev laptop 跑一下 claude config get permissionMode，如果回傳空值，那你今天新 session 就是 Auto——想再過渡幾天可以先 pin 成 plan 或 default 撐一下。

再來聊 MSCI。8 月 12 號歐洲時間晚上、台北時間 8 月 13 號凌晨，MSCI 公布了 8 月的季調結果。台股 Global Standard 這次是 6 進 6 出——過去比較常見是 4 進 2 出偏正，這次同數量對沖、淨新增等於零。本來市場預期會偏保守，結果 8 月 13 號當天加權還漲了 503 點、站上 46,000，成交放大到 1 兆 498 億元，比前一天的 8,587 億放量約 22%。台積電收 2,435 元。

重點不在檔數，重點在結構。進的六檔是華邦電、南亞科、景碩、台燿、南亞 PCB、群聯——都是記憶體、PCB 板廠、IC 通路。出的六檔是台泥、陽明、台企銀、鈊象、力旺、康普——水泥、航運、傳統金融、遊戲。這是一次相當明顯的資金結構性換股，從老經濟搬到 AI 供應鏈。

而且南亞科被 MSCI 官方特別點名，是 EM Index 這期三大最大新增之一，另外兩檔都在中國——Z.AI 的 H 股跟 Guangdong Dtech A 股。追蹤 EM Index 的被動 ETF 規模非常大，這種「最大新增」等級的 flow 強度會顯著高於一般新增。生效時點是 8 月 31 號收盤後，這意味著 8 月 13 號到 8 月 31 號中間，是所謂的被動買盤 window，客戶如果在記憶體、PCB、板廠、IC 通路這幾個 sector 裡面，這兩週談 Q3、Q4 訂單，加價 8% 到 15% 是有時效性的。

第三件事快講一下：Cursor 昨天 8 月 13 號 teased 可能今天就會有大公告。可能是 Composer 3——代號 Vega、傳言 1.5T 參數、六種 variant，訓練於 xAI 的 SpaceX Colossus cluster；也可能是 Grok 4.6 意外開放。同時，Cursor Origin，也就是 Cursor 自己的 code review 產品，被抓到已經進 closed beta，會新增 Codebase tab 跟 Review tab，直接對打 GitHub Copilot Review、CodeRabbit、Greptile。台灣 Cursor Pro 用戶今晚睡前建議把 auto-update 打開，Composer 3 公告的極限窗就是這週。

第四件事最短：Fed 9 月 15、16 號的 FOMC，在 8 月 12 號 US CPI 出來之後，futures market 對「9 月不動」的 pricing 從開盤前約 40% 直接跳到 55%，變成主流劇本。CPI headline 只漲 0.1%、core 年增 2.5%，是 2021 年 3 月以來最慢。9 月降息 pricing 也上升，「no need to hike」的敘事復活。不過還沒完全確定，下個月還有 8 月 payrolls 跟 8 月 CPI 兩個 data 要看。台灣做美元計價 SaaS 訂閱的 indie 團隊，這段時間 TWD 短期偏強，是不錯的 pre-pay window，但別一次全下、分批比較穩。

重點是，今天對 5 到 20 人的台灣 SaaS 團隊，如果只做三件事，就是——第一，馬上檢查 permissions.deny，把不可逆指令列進去；第二，把 CI headless 腳本從 --dangerously-skip-permissions 改成 --permission-mode plan 或明確白名單；第三，如果你的客戶群裡有記憶體、PCB、板廠、IC 通路，這兩週是 MSCI 生效前的被動買盤 window，Q3、Q4 訂單這時候談加價是有時效優勢的。

其他像 Cursor Composer 3、Fed 9 月會議、還有 Qwen3.8-Max weights 明天到期，這些持續觀察就好。以上，我們明天見。
