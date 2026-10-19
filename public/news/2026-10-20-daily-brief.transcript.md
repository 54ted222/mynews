今天想聊 2026 年 10 月 20 號、週二，從一人 SaaS 開發者的角度來看，這個禮拜其實有九條時程同時收尾、同時交會，讓這一週變成一個相當密集的架構 freeze 週 Day 2。我會依序聊 iPhone Duo 開賣倒數、Cursor 新定價一週後、OpenAI 兩件遷移事、Supabase 收 Turso 滿十八天、Claude Code 的十月更新，最後收在 Anthropic IPO 時程。

先講 iPhone Duo。10 月 23 號星期五開賣，到今天還有三天。目前確定的只有中華電信的五百家門市，當天早上八點開賣。有一件比較弔詭的事情是，另外兩家電信——台灣大哥大跟遠傳——到今天為止，都還沒有公告實體開賣的時程。台灣大 myfone 的網路預購在十月十六號晚上八點已經結束，遠傳在十月十六號上午十點開放搭資費跟空機的預約，但實體通路的時程至今是空的。這意味著只剩三天，中華電有機會變成當天唯一一個「真的拿得到手機」的實體通路。另一邊的供貨其實也很緊，首批出貨不到兩萬台，但預約接近百萬，比例大概五十比一；再加上 Foxconn 良率只有六成，內螢幕如果壞掉，單次維修要三萬七千塊台幣。整個禮拜其實就是圍著這些事情做收尾——像是中華電 500 門市地圖的 bind、原廠跟電信通路優惠差異表、eSIM 排隊秒數的指南 Dry Run、還有內螢幕維修費的 FAQ。這就是一個典型的 Day 2 架構 freeze，週三之前要把所有素材 lock 住，週五當天才有辦法 Live push。

再來聊 Cursor 新定價。十月十二號那天，Cursor 把訂閱改成四層：Plus 八塊、Premium 三十、Super 一百、Ultra 兩百美金。這套新架構最關鍵的地方不是價錢，而是「內含用量」的範圍——只有 Grok 這一個模型是內含、而且是所有付費方案共用的用量池，每週刷新。Claude、GPT、Gemini 全部拉出去，照各家 API 的標價另外計費。原本大家熟悉的 Pro 二十塊方案，對新用戶已經關閉了。簡單說，Cursor 從「訂閱吃到飽」正式轉向「訂閱加用量」的 hybrid 模型。對只用 Claude Code 的工程師來講，Cursor 的性價比優勢，在 Haiku 5.5 進 Claude Code 當預設模型之後，其實是加速瓦解的。這部分一週後，Reddit 跟 Hacker News 的社群情緒走向，會決定這套 hybrid 定價會不會變成 2026 年底的業界標準。

OpenAI 這邊也在倒數兩件事。第一件是 Evals，十月三十一號當天會轉為 read-only，剩下大概十一天。這代表 reusable prompts 會下線，匯出 dataset 的時間窗只剩不到兩週。建議這週就把所有 reusable prompts 跟 eval 結果 export 成 JSON 存檔，一小時內可以搞定。第二件是 Agent Builder，整個會在十一月三十號 EOL，剩下四十一天。官方指定的遷移目標是 Agents SDK，有 Python 跟 TypeScript 兩版。不過要注意的是，Agent Builder 匯出的 code export 其實只是個 scaffold——node 行為是不是一比一、tool 行為、guardrails、tracing、延遲、成本、還有跟 ChatKit 的整合，全部都得自己實測。社群層面有一份 Promptfoo 作為 Evals 遷移目標的指南，但那是二手來源，不是 openai.com 的官方口徑，所以要帶著懷疑看。

接下來是 Supabase 收購 Turso 滿十八天。目前比較明朗的訊號是三件：Glauber Costa 擔任 Head of Agentic Services、SQLite 跟 libSQL 現在正式變成 Supabase 的一等公民、SQLite 先、Postgres 後的路線確認。但是 per-tenant 定價、交易完成日期、agent-generated database 的 limits 這些細節，到今天都還沒公開。對一人 SaaS 架構師來講，這就是一個「選型訊號」的第二週——如果你本來就在猶豫要不要 per-tenant 做隔離，或是在找 agent-generated database 的底層，現在就是觀察窗。對照組是 Databricks 收購 Neon，兩邊的 narrative 是互相成立的。

Claude Code 這邊，十月份版本更新很密集，從 v2.1.287 一路到 v2.1.294。幾個重點：Claude Mods 這個新的 plugin API 現在是 2026 下半年最深層的擴充介面，有可能取代大部分 Cursor 的擴充需求；You Should Know agent 是一個 opt-in 的 reviewer，可以在你 commit 前提醒你可能漏掉的事情；插件市場現在支援一鍵安裝；還有 subagent 的工作強度可以手動控制；最新的 v2.1.294 修掉了 instruction-based hooks 阻止規則的 bug，如果你有在用 PreToolUse 或 UserPromptSubmit 當 lint gate，這個更新建議立刻裝。預設模型現在是 Haiku 5.5，一百萬 token 的 context，比 Haiku 4.5 大概便宜七成五，OSWorld 的 offline 子集跑到七成二。這一條線的意思是：切 production 已經進入 Day 2，可以放心把日常工作切過去。

最後一條線是 Anthropic IPO。十一月三號是美國期中選舉、十一月九號可能是路演起點；從路演倒推十五天，十月二十五號就是 EDGAR 公開 S-1 的 deadline。目前還是 confidential filing 的狀態，如果到十月二十五號 EDGAR 上還是沒看到 flip 成 public 的 S-1，那就是 bear case 的第三個支點加壓。這條時程在今天還剩五天，是本週除了 iPhone Duo 以外，另一個最值得盯緊的訊號。

重點是這樣：這週是一人 SaaS 架構 freeze 週 Day 2，iPhone Duo 開賣準備跟一堆遷移時程交會，往後幾天最重要的是三件事——週五當天的 Live push 準備、Agent Builder 遷移 crunch 剩六週、Evals 匯出剩十一天。下週再回來看 Cursor 新定價的社群反應、看中華電門市實況、看 EDGAR 有沒有 flip。這就是今天這一期的全部內容，謝謝收聽。
