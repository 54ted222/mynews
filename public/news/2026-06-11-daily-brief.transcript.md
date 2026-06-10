今天想聊的，是六月十日東京 Code with Claude 主場日剛公布的一整套新玩意，加上同一個二十四小時內 NEC 和 Hitachi 兩家日本巨頭把 Claude 推到自家數十萬員工的部署消息，最後接到隔天，也就是六月十二日 SpaceX 上市這件事，對 Anthropic 的算力故事可能產生的衝擊。一條線串起來看，會比較有感覺。

先講東京主場日。Anthropic 這次把五月六號舊金山就預告過的 Managed Agents 補上三件新功能，正式可用。第一件叫做 Multiagent Orchestration，意思是你給一個任務，Claude 會自動 fan-out 出好幾個專業的 sub-agent 平行處理；第二件叫 Outcomes，你不是寫 prompt 而是定義「成功條件」，比方說測試要過、輸出要符合某個格式，agent 會自己一直迭代直到符合條件才收工；第三件叫 Dreaming，agent 在任務尾段會把這次學到什麼、踩到哪些坑寫成筆記回存共享層，下一個接手的 agent 就會自動讀到。簡單說，就是把過去 indie 要自己刻的「fan-out、共識、評分、跨 session 記憶」這些工具鏈，直接收進原廠 API。

舞台上的 demo 是用一支虛構的 F1 車隊，同時派了四個專家 agent，一個專攻空氣力學、一個顧輪胎、一個負責動力、一個顧車手安全，最後再用一個 grader agent 給每個方案打分。這個結構之所以重要，是因為它第一次把「multi-agent 系統」具象化到任何 indie 都能照抄的模板。你今天要做合約審查、健身教練、診所排程、SOC 2 audit、HR onboarding 都可以照這個拆解套上去。

同場還補了幾個小東西。Managed Agents Desktop app 把你本機跑的 session 跟雲端跑的 session 整合在同一個面板，可以接管、可以終止、可以 replay。Auto Mode 是一顆專門訓練的分類器，會在 agent 每次呼叫工具前評估這是不是破壞性動作、是不是 prompt injection 跡象，安全就自動 approve、可疑才彈出來問人。Automemory 是讓 agent 自動記住專案脈絡，不必你手動更新 CLAUDE.md。還有 git worktrees 內建，每個 agent session 都進獨立 worktree、不互卡。對台日 indie 來說，這代表你做 vertical workflow agent 這週可以省下二到四週的工程量。

不過，東京主場日真正讓亞洲企業 AI 採購心智被改寫的，是 NEC 和 Hitachi 同框公布的部署規模。NEC 把 Claude 推到旗下大約三萬名集團員工，自稱日本最大的 AI-native 工程組織，是日本第一個 Anthropic 的全球 partner。Hitachi 更猛，把 Claude 部署到全球大約二十九萬名員工的業務流程，強化它自家的數位平台 Lumada 3.0，同時六月五號加入了 Anthropic 的 Project Glasswing，這是個專門針對能源、交通、製造、金融這些關鍵基礎設施做 cyberdefense 的合作計畫，加入後可以拿到 Mythos 5 這個比較新的 trusted access 模型。兩家加起來還共同推出十萬名 AI 人才的培訓計畫。

把這條跟前一天韓國 LG CNS 也跟 Anthropic 簽約這件事接起來看，韓 LG、日 NEC、日 Hitachi 就串成了「亞洲企業 AI 採購的 Big-3 樣板」。對台日中型 SaaS、特別是兩百到兩千人的這一段，本週就可以做的事，是寫一篇白皮書解說這三家的部署路徑，搭著東京同步社群一起放大。再來，把自家既有的「Claude 加上某個亞洲 vertical」案例壓成一頁簡報，這幾天 LinkedIn、Threads 連發。如果你做 OSS sec 或紅隊的，更可以打包一個「Project Glasswing 申請教練」的固定價服務，因為 Hitachi 已經示範了申請路徑。

接著要講六月十二號，也就是明天，SpaceX 要上市。定價一百三十五美元、估值一點七五兆美元、募資七百五十億，是史上最大規模 IPO，代號 SPCX。重點是，從今年二月開始，xAI、Grok、Colossus、X 都已經併進 SpaceX 旗下，所以這次上市等於是「太空加 AI 加社群」三合一上市。其中 Colossus 1 在 Memphis、二十二萬顆 Nvidia GPU、三百兆瓦，正是五月六號 Anthropic 在舊金山宣布的旗艦 compute partner，而那個折扣 rate 六月三十號就要失效。

這代表什麼？SpaceX 上市之後，市場會用 ROIC、用季報壓力去重新計算 Colossus 1 該收多少錢。六月三十號折扣到期之後，Claude.ai 端的 latency、throughput、Pro 和 Max 的 rate limit 會不會同步放大，就成了 indie 直接要盯的觀察點。如果你是賭「Anthropic 半年內不會再有新 compute 來源」的，這幾天到月底前要把多供應商的 fallback 路由接好，比如 Bedrock、Google Cloud、Foundry、自架 OSS 模型這幾段。再來，SpaceX 那邊任何 ESG、地緣政治、監管事件，都會回擊到 Claude 的可用上限。

最後想聊兩個附帶的趨勢。第一個是 SaaStr 在六月九號到十號連發的「AI agent 流失浪潮」框架。核心命題是 prompt 可攜，傳統 SaaS 那二十年靠資料黏度的 stickiness 在 AI 月費型產品根本不成立。他們提的數字很驚人：月費低於五十美元的 AI-native SaaS，GRR 也就是淨續約率只剩百分之二十三，比傳統 SaaS 中位低了二十個百分點；要月費拉到二百五十美元以上，才會回到 GRR 百分之七十、NRR 百分之八十五這個追上 B2B SaaS 中位的水準。所以本週就可以做的事，是把自家月費低於五十美元的方案盤點一下，看能不能 bundle 服務拉到兩百五十以上，或者乾脆改成 outcome-based、像 Intercom Fin 那種「解決一個案子收一塊錢」的設計。

第二個是 Fable 5 GA 第二天，dev sentiment 已經分成兩極。正面的人說 Claude Code 加上 Cowork 跑起來，是他們用過最強的 coding 模型；負面的人則抱怨它對安全主題的 refusal 過度廣泛，連合法的防禦研究都會被擋；同時又被批評是 AI 不平等的預告片，因為 Mythos 5 那條 trusted-access 線把資源切割得很明顯。好消息是 Databricks 六月九號同步把 Fable 5 上了 Unity AI Gateway 的治理層，對賣 EU 跟受監管行業的 indie 來說，是一個現成的合規載具，可以拿來打包成 audit 服務。

重點是這樣：東京主場日把 agent 從工具推到系統，Anthropic 用三件式 API 收編了過去 indie 要自己刻的 harness，這是工程量直接砍掉的好消息，但也意味著「我家 harness 比官方強」的差異化會在六十天內被收編；NEC 和 Hitachi 把亞洲企業 AI 採購心智改寫，台日中型 SaaS 的白皮書視窗就在本週；SpaceX 明天上市後，Anthropic 的算力故事要重新被市場估價，多供應商的 fallback 路由要在六月底前接好；SaaStr 的 churn 框架告訴我們，月費低於五十美元的 AI SaaS 該重新設計定價；最後，Fable 5 雖然強，但 refusal 副作用要靠多 model fallback 補。這幾條合起來，就是這個禮拜 indie 最值得花時間的方向。
