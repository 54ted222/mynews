---
title: 迴圈不是免費午餐：成本、懷疑論與 comprehension debt
order: 6
date: 2026-06-12
summary: token 帳單、「cron 換皮」的質疑、cognitive surrender 與理解債——當程式碼出貨速度超過理解速度，工程師的角色剩下什麼。
keywords: Addy Osmani loop engineering comprehension debt AI generated code, loop engineering cron rebranding criticism Steinberger, Anthropic study 52 engineers AI assisted comprehension 17% lower debugging, cognitive surrender AI coding Osmani loop, coding agent unattended loop token cost bill overnight Claude Code, Cronjobs have funny re-branding loop engineering, Reddit Claude Code overnight $6000 bill, loop engineering defenders PR babysitter Cherny cron
---

# 迴圈不是免費午餐：成本、懷疑論與 comprehension debt

前五篇講了迴圈怎麼來、怎麼拆、怎麼驗、怎麼套模式、怎麼動手做。最後一篇，我們來算帳——三本帳：看得見的 token 帳單、概念本身欠不欠「新意」的帳，以及最難還的一本：理解債。

## TL;DR

- **錢是真的會燒**：無人值守迴圈的帳單事故已有公開案例——一個每 30 分鐘喚醒一次的更新檢查迴圈，一夜燒掉 6,000 美元；另一位 Claude Max 訂閱者照著建議排程跑隔夜任務，兩天收到 1,800 美元 API 帳單。2026 年中的共識是三道硬煞車缺一不可：迭代上限、無進展偵測、token／美元預算天花板。
- **「cron 換皮」的批評對了一半**：排程層確實就是 cron——連 Boris Cherny 都是用 cron 在跑迴圈。但 cron 執行固定腳本，loop 的本體裡有一個會看狀態、做決策的 agent；真正的工程在於包住這個決策、讓它不會衝下懸崖的那一圈東西。
- **最貴的不是 token，是理解**：Addy Osmani 的 comprehension debt——系統裡存在的程式碼量與任何人真正理解的程式碼量之間不斷擴大的差距——在迴圈跑得越順時長得越快。Anthropic 的隨機對照實驗顯示，AI 輔助組在理解測驗上比對照組低 17 個百分點，且退化最嚴重的正是除錯能力。

## 先算最直接的帳：token 與一夜之間的四位數帳單

迴圈的浪漫版本是「你睡覺時一千個 agent 幫你蓋產品」；生產版本是「你大部分的工程時間花在確保它們會停」。這個落差最先用錢的形式顯現。

公開案例不少。MakeUseOf 報導過一位 Reddit 用戶讓 Claude Code 每 30 分鐘檢查一次軟體更新、然後去睡覺——醒來收到 **6,000 美元**帳單。值得注意的是事故的成因：Anthropic 在未公告的情況下把 prompt cache 的預設存活時間從一小時改成五分鐘，而這個迴圈每 30 分鐘才醒一次，cache 每次都已死亡，導致系統一天 48 次從零重建約 80 萬 token 的對話歷史——而「寫入 cache」遠比「讀取 cache」貴。換句話說，**這位開發者沒有亂用工具，他完全照著「自主、隔夜、最少監督」的宣傳方式使用**，帳單仍然失控。另一起被 DevToolPicks 整理的案例：一位 Claude Max 訂閱者在 3 月詢問如何排程隔夜執行 Claude Code，照做之後兩天內被收 **1,800 美元** API 費用；該站還列出更極端的多 subagent 事故，金額據稱上看數萬美元（截至 2026 年 6 月，這些較大數字僅見於二手整理，請當量級參考而非精確值）。

結構性的問題有兩個。第一，**計費的回饋迴路比 agent 的迴圈慢**：沒有即時的消費計數器，Anthropic 的用量儀表板有數天延遲；對凌晨三點在跑的無人值守迴圈來說，事後告警毫無意義。第二，**成本隨架構超線性放大**：cobusgreyling 的 loop-engineering 參考庫直白寫著「Token costs can explode with sub-agents and long-running loops」——每多派一個 subagent、每多跑一輪，帳單不是線性加總，因為每個分身都帶著自己的 context 在燒。

因此 2026 年中所有嚴肅的迴圈論述都收斂到同樣三道不可妥協的硬煞車：**最大迭代次數**（不管迴圈自認有沒有進展都強制停）、**無進展偵測**（發現在原地打轉就先停，別再燒 token）、**token 或美元預算上限**（累積成本超標即殺掉迴圈）。Claude Code 層面則是 `--max-turns` 與 settings 裡的預算上限。各模式的具體成本級距見本期第 4 篇〈七種生產級迴圈模式〉，此處不重複。

## 「cron 換皮」：懷疑論哪一半對、哪一半錯

Steinberger 那則 650 萬瀏覽的貼文底下，最鋒利的一句回覆是：「**Cronjobs have funny re-branding rn**」（cron job 最近的改名挺有趣的）。這句話值得認真對待，因為它對了一半。

**對的那一半**：排程層確實就是 cron。Boris Cherny 的迴圈就是用 cron 排的，Claude Code 的 `/loop` 底層也是排程。如果你的「迴圈」只是每小時把同一份 prompt 丟給模型一次，那它確實就是一個 cron job——而且 cron 比在場大多數人的年紀都大。更尖銳的批評來自 dev.to 上〈The Loop Is Not the Product〉一類的文章：把一串機率性的 prompt 用迴圈鏈起來不叫做產品，叫做「**以 token 計價的官僚體系**」——它持續產生帳單，同時把漂移（drift）藏在自動化的表象底下。

**錯的那一半**：cron 與 loop 的差異不在排程，在**迴圈本體裡的決策者**。cron job 執行固定腳本，每次執行走同一條路徑，不管世界長什麼樣；loop 裡跑的是一個 agent——它檢視當下狀態、判斷需不需要動手、選擇下一步、執行、檢查結果、再決定接下來做什麼。Cherny 在生產環境跑的迴圈（照看 PR 的 rebase 與 CI 修復、找出並修補 flaky test、每 30 分鐘聚類一次社群回饋）沒有一個能用固定腳本寫出來，因為每次醒來時「該做什麼」都不一樣。

誠實的裁決是：**「cron 換皮」描述了地基，但漏掉了房子**。支持方自己也承認排程層毫無新意；他們主張的新東西是包在決策外面的那一圈——狀態檢查、範圍限制、停止條件、獨立驗證（見本期第 3 篇）。而懷疑論的真正貢獻在於提醒：如果你的迴圈沒有那一圈，它就真的只是一個比較貴、比較不可預測的 cron job。

## 更深的債：comprehension debt 與 cognitive surrender

token 帳單至少看得到數字。Addy Osmani 在 2026 年 3 月（後由 O'Reilly Radar 轉載）提出的 **comprehension debt（理解債）**，量化起來困難得多：它是「系統裡存在多少程式碼」與「任何一個人類真正理解多少程式碼」之間不斷擴大的差距。與傳統技術債不同——技術債會透過越來越慢的 build、越來越糾結的依賴對你發出摩擦訊號——**理解債滋生的是虛假的信心**：測試是綠的、PR 合了、demo 跑得動，直到某天凌晨出事，才發現沒有人真的知道那段程式碼為什麼長那樣。

這不只是直覺，有實驗數據。Anthropic 研究者 Judy Hanwen Shen 與 Alex Tamkin 在 2026 年 1 月發表的隨機對照實驗（arXiv:2601.20245）讓 52 位工程師學習一個新的非同步程式庫：AI 輔助組完成任務的時間與對照組幾乎相同（平均只快約兩分鐘，未達統計顯著），但在後續理解測驗上**低了 17 個百分點（50% 對 67%）**，其中退化最陡的正是除錯能力——而除錯恰恰是抓 AI 錯誤最需要的人類技能。更值得玩味的是組內差異：把 AI 當家教問概念的人測驗拿 65% 以上，把程式碼生成整個外包給 AI 的人掉到 40% 以下。**怎麼用，比用不用更關鍵。**

迴圈把這個問題乘上一個倍數。Osmani 對 loop engineering 的核心警告是：「**一個無人看管的迴圈，也是一個無人看管地犯錯的迴圈**」（an unattended loop is also a loop that makes mistakes unattended）。傳統上資深工程師審查的速度快過初級工程師寫的速度，AI 把這個經濟學翻轉了；而迴圈再翻轉一次——現在連「下 prompt 的人」都不在場了。理解債於是以迴圈的節奏複利成長：cobusgreyling 的參考庫說得直白——「除非你讀迴圈出貨的東西，否則理解債會長得更快。」

債的盡頭是 Osmani 借自 Wharton 學者 Steven Shaw 與 Gideon Nave 的概念：**cognitive surrender（認知繳械）**。它與「認知卸載」不同——卸載是把工具當工具、判斷還在自己手上；繳械是你從未建構一個可以拿來對照的平行觀點，AI 的輸出悄悄變成「你的」輸出，而你已沒有獨立視角去檢查它。當迴圈自己會跑，「不再有意見、照單全收」變得極具誘惑。哲學家 Andy Clark 的區分在此很有用：**委託（delegation）產生繳械，協作（cooperation）產生相互放大**——你的判斷讓模型的輸出更好，模型的輸出讓你對問題的模型更好。迴圈該被設計成後者的基礎設施，而不是前者的藉口。

## 工程師剩下什麼：從寫程式到守住理解

把三本帳放在一起看，結論其實不是「別用迴圈」。token 帳單有工程解（三道硬煞車）；「cron 換皮」的批評有架構解（決策外的那一圈才是本體）；唯獨理解債沒有自動化解——**它只能由一個決定留在現場的人來償還**。

社群沉澱出的緩解措施都指向同一件事：獨立的 verifier subagent 擋住「agent 自稱完成」（機制見第 3 篇）、所有合併進主幹的程式碼仍經人審、工程師留在設計與審查的路徑上而不是只留在「按下開始」的位置。cobusgreyling 的參考庫還補了一個常被忽略的事實：「**兩個人跑同一個迴圈，可能得到相反的結果。迴圈不知道差在哪，你知道。**」迴圈放大的是判斷——好的與壞的都放大。這也是為什麼該庫建議的導入路徑是 L1（只報告）→ L2（人協作）→ L3（無人值守）的漸進升級，而不是一步跳到隔夜全自動。

回到全期的主線：從 prompt engineering 到 context engineering 再到 loop engineering，槓桿一路變長，但槓桿越長，支點越重要。支點就是那個還讀得懂程式碼、還有自己觀點、還會對迴圈的輸出說「這不對」的工程師。Osmani 的收尾值得原文照錄：「**Build the loop. But build it like someone who intends to stay the engineer, not just the person who presses go.**」——蓋迴圈吧，但要以「打算繼續當工程師的人」的方式去蓋，而不是只當那個按下開始鍵的人。

迴圈會繼續變便宜、變可靠、變無聊——所有成功的基礎設施最後都會變無聊。不會變的是：理解沒有 API，債照樣計息。（本文資訊截至 2026-06-12。）

---

**來源**

1. [Loop Engineering](https://addyosmani.com/blog/loop-engineering/) — Addy Osmani，2026-06
2. [Comprehension Debt: The Hidden Cost of AI-Generated Code](https://www.oreilly.com/radar/comprehension-debt-the-hidden-cost-of-ai-generated-code/) — Addy Osmani / O'Reilly Radar，2026-03
3. [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering) — Cobus Greyling（GitHub），2026-06
4. [Someone left Claude Code running overnight, and it cost $6,000](https://www.makeuseof.com/someone-left-claude-code-running-overnight-and-it-cost-6000/) — MakeUseOf，2026
