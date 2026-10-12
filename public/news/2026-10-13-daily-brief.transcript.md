今天想聊 10 月 13 日週二這一整天的四條主線，一條一條把它們拉開來講，看完之後你就會知道這一週該怎麼擺節奏。

先講最硬的那條——台積電法說會。台積電 10 月 15 日下午兩點要開 Q3 法說，到今天剛好倒數兩天，Quiet Period 進到第 9 天。簡單說，公司自己什麼都不能講，所以市場上所有新訊號都只能靠外資報告放。而這一週外資報告放得非常密集。目前整理起來，麥格理給出最高的目標價，新台幣 4,410 元；接著是摩根大通跟高盛兩家同喊 3,300 元；摩根士丹利相對保守，給 3,088 元。你算一下，最高跟最低之間差了 42.8%——這個 spread 是很大的訊號，意思是外資圈內部對台積電接下來的走勢共識已經破碎了，沒有辦法只喊一個方向。

然後是數字面。LSEG 彙整 16 位分析師的共識，台積電 Q3 稅後淨利預期年增 65%，大概落在新台幣 7,463 億左右。摩根士丹利的 Charlie Chan 進一步預期，公司全年營收 guidance 可能從原本的「40% 以上」上修到「低至中 40%」；2 奈米月產能目標也從 9 到 10 萬片，被上修到 2026 年底 12 萬片；而資本支出可能從原本區間 520 到 560 億美元之間，向上緣靠。這幾個軸全部疊在一起，就構成了這週對台積電 pre-rerating 的五個觀察點：毛利 65% 到 67%、2 奈米稀釋、海外三廠稀釋、CapEx 上修、還有 2027 年的 tone。

接著切第二條線，大立光。10 月 12 日週一盤中大立光漲停，收在 7,325 元，然後高盛直接把目標價調到 11,000 元。這背後有兩個催化劑：一個是 CPO，也就是共封裝光學這個新業務線；另一個是 FAU，光纖陣列單元，剛剛通過客戶認證。這兩個東西聽起來很技術，但簡單說就是——AI 伺服器要處理 400G、800G 以上的網路頻寬，傳統銅線訊號衰減太嚴重，所以把光學元件直接封到晶片旁邊，變成下一代資料中心的關鍵技術。大立光搶到這塊，等於開了一條新護城河。

不過這裡有個反面訊號要注意——大立光 Q3 稅後 51.82 億元，季增 11%，看起來不錯；但毛利率只有 42.2%，是 13 年來的新低。所以你如果只喊「大立光漲停、目標價 11,000」，會顯得只看 upside；真正細膩的敘事應該要搭配——「毛利結構正在重新分佈，CPO 新業務初期還在稀釋早期毛利」。再加上同一天鴻海 9 月營收 1.15 兆台幣，單月首次突破兆元；加權指數盤中衝到 48,947 點；佳凌、澤米這些光學類也跟著漲停。整條蘋果概念股鏈的 pre-rerating 已經開始了，而 iPhone Duo 10 月 23 日就要開賣、10 月 16 日晚上 8 點預購——這個時間點對台灣受眾來說，就是盤後 push notification 最強的 trigger。

再來第三條線，Claude Code 這一週有連三波重大更新。10 月 6 日的 v2.1.292，開放 marketplace plugin 直接 install，而且 subagent 可以指定 effort level；10 月 7 日的 v2.1.293，預設模型切成 Haiku 5.5，支援 1M context；10 月 8 日的 v2.1.294，修了 instruction-based hooks。對一個人在做 SaaS 的獨立開發者來說，這等於一次工具堆疊大改版。

重點有兩個。第一，plugin 從此可以當套件管理用——以前要手動刻 symlink，現在從 marketplace 直接裝。第二，預設模型切 Haiku 5.5，個人用量成本預期可以降 30% 到 50%。但這裡有陷阱——Haiku 5.5 在 Vals.ai 的綜合排名是 54.31%，排第 16；OSWorld 2.1 跑 72.4%；但 Terminal-Bench 4.0 只有 39.2%——所以如果你是跑 agentic coding 或 terminal 操作類型的任務，直接切 Haiku 5.5 會踩雷。建議是——高頻 subagent 給 effort = low、低頻但策略性的任務 effort = high；heavy agentic coding 任務要 model override 回 Opus 或 Sonnet，然後搭 shadow eval 一週再決定要不要永久切。

第四條線，也是這週對 wrapper SaaS 最殘酷的訊號——Google Gemini Agent 10 月 8 日正式推出，能寫程式、生檔案、跑長任務，直接對打 OpenAI ChatGPT Agent 跟 Microsoft Copilot Agent。隔天 10 月 9 日，Gemini 無訂閱 app 使用者只保留 Flash-Lite 這個最小模型。再加上 10 月 6 日 Microsoft 365 Copilot 大改版——Word、Excel、PowerPoint 全部進入 Copilot 內，Home、Chat、Cowork 三個介面合流，Copilot Search 內嵌 chat。

這對獨立開發者的意義是什麼？簡單說——「AI wrapper 類 moat 重估週」正式開始。如果你的 wrapper SaaS 是在做 Office 類寫作、Excel 類資料處理、PowerPoint 類簡報、或者 agent chat UI，大廠內建已經覆蓋你 use case 的範圍急速擴大。這週 Day 2 之內，你應該做一件事——系統化重估「我的 use case 大廠內建已覆蓋多少 %」。如果覆蓋率超過 60%，就要在 10 月 12 到 18 日這一週之內 pivot 到更垂直、更本地化、或工具整合深度更深的切入點。

把這四條拉在一起——台積電法說 T-2 外資 TP 密集放送、大立光漲停 CPO + FAU 新業務、Claude Code 預設切 Haiku 5.5、Gemini Agent 跟 M365 Copilot 吞 wrapper 市場——會發現這一週同時有「大廠加深護城河 × 關鍵財報不確定性 × 工具堆疊重設 × wrapper 類生存重估」四個軸同時到位。

所以重點是三件事。第一，法說結果出來之前，資訊真空 + 外資報告放送是 push notification 的甜蜜點，可以打一波 pre-rerating audit 類型的 pitch pack。第二，Claude Code 本週就升到 v2.1.294，裝幾個 marketplace plugin，設定好 subagent effort levels，shadow eval 跑一週，確定要不要永久把 Haiku 5.5 固定下來。第三，如果你是做 wrapper SaaS 的，這週要花兩三小時跑一次 Gemini Agent 和 M365 Copilot 的覆蓋率清單，不然等月底再評估，窗口就關了。再加上 iPhone Duo 10 月 16 日晚上 8 點預購、10 月 23 日開賣，蘋概股這條線還有兩個時間點可以搭配 push。這就是這週 Day 2 的全貌。
