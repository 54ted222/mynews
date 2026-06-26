---
title: 爆炸半徑：agentic 時代的威脅模型
order: 1
date: 2026-06-26
summary: 拆解 prompt injection、過度代理、間接注入如何在會動手的 agent 上被放大，並用 EchoLeak 與 OWASP LLM Top 10 校準「到底在防什麼」。
keywords: EchoLeak CVE-2025-32711 LLM Scope Violation, OWASP Top 10 LLM 2025 prompt injection excessive agency, indirect prompt injection agent tool output confused deputy, OWASP Agentic ASI01 Agent Goal Hijack, lethal trifecta Simon Willison, Microsoft Semantic Kernel prompts become shells RCE, CaMeL prompt injection deterministic defense, State of AI Agent Security 2026 statistics
---

# 爆炸半徑：agentic 時代的威脅模型

## TL;DR

- **本質差異不是「更聰明」，是「會動手」。** 聊天機器人輸出一段文字，agent 輸出一個動作——寄信、刪檔、轉帳、跑 shell。同一個被污染的指令，在前者是尷尬，在後者是不可逆的真實後果。這就是爆炸半徑（blast radius）放大。
- **威脅的核心不是模型答錯，是信任邊界崩塌。** prompt injection 把「不受信任的資料」和「該執行的指令」混在同一個 context；agent 又自帶權限與工具，於是外部文字得以冒用 agent 的身分權限去動手——這是典型的混淆代理（confused deputy[^confused-deputy]）。EchoLeak[^echoleak]（CVE[^cve]-2025-32711，CVSS 9.3）證明這條鏈在生產系統上零點擊就能跑通。
- **這次不一樣，是因為三件事同時湊齊：私密資料存取、接觸不受信任內容、能把資料送出去。** Simon Willison 稱之為「致命三要素（lethal trifecta[^lethal-trifecta]）」。截至 2026-06，學界與三大廠（OpenAI / Anthropic / Google DeepMind）的共識是：在現有 LLM 架構下，prompt injection 無法被「徹底解決」，只能靠工程把爆炸半徑壓回可接受範圍——這就是後續四篇護欄的存在理由。

## 從「說錯話」到「做錯事」：爆炸半徑為什麼放大

把一個語言模型接上工具（tool calling）、給它讀寫資料庫、收發郵件、執行程式碼的能力，它就從「生成文字的系統」變成「會在真實世界動手的系統」。差異不在智力，在後果的型態。

聊天機器人的錯誤是**可讀的、可逆的、需要人轉手才會生效的**：它說錯一句話，你看到、你笑笑、你不照做，事情就停在那。agent 的錯誤是**自動的、可能不可逆的、不經人手就生效的**：它「決定」要寄一封信，信就寄出去了；它「決定」要刪一個分支，分支就沒了。決策與執行之間原本卡著一個人類，現在那個人類被抽掉了。

OWASP[^owasp] 在 2025 年版的 LLM Top 10 裡把這件事獨立成一條風險——LLM06：過度代理（Excessive Agency）。它的定義很直白：當 LLM 應用被賦予過多自主性、過多權限、或能存取過於強大的工具而缺乏適當限制時，就構成過度代理。值得注意的是，這是 2025 年版被大幅擴寫的條目之一，原因正是 agent 架構的普及——讓 LLM 能做決策、呼叫 API、瀏覽網頁、發訊息、建檔、改紀錄、跑工作流。每多接一個工具、每放寬一級權限、每省掉一道人類核可，攻擊面就大一圈，爆炸半徑就遠一截。

這裡要先把一個概念釘死，因為後面四篇都圍著它轉：**爆炸半徑 = 一個錯誤決策能造成的最大真實後果**。護欄這門工程，本質上就是在管理這個半徑。本篇只負責說清楚半徑為什麼會炸開、長什麼樣；怎麼把它收回去（分層、最小權限、人類核可、工具鏈、紅隊驗證）是第二到第五篇的事。

## prompt injection：直接、間接，以及為什麼它「沒被解決」

prompt injection 這個詞由 Simon Willison 等人在 2022 年夏天提出，刻意對照 SQL injection 命名——因為底層是同一個病：**把可信內容與不可信內容混在同一個輸入裡，系統分不清哪段是「資料」、哪段是「指令」**。LLM 的世界裡這個病更難治，因為對 LLM 而言，所有進到 context 的 token 一律平權，沒有語法層級的「跳脫字元」可以把使用者資料和系統指令隔開。

它有兩種型態，威脅模型上必須分開看：

- **直接注入（direct）**：使用者自己在輸入框打進去的惡意指令。這種情境裡使用者本人是攻擊者，多半是想越獄、繞過限制——危害相對侷限在他自己的 session。
- **間接注入（indirect）**：惡意指令藏在 agent 會去讀的**外部內容**裡——網頁、郵件、support ticket、文件、甚至另一個工具回傳的輸出。這種情境裡**使用者是受害者，不是攻擊者**。agent 自動把這些外部文字吞進 context，攻擊者根本不需要碰到使用者的鍵盤。間接注入在部署後是**自主運作的**：它在背景生效、使用者全程無感、且可以規模化地打中大量受害者。

間接注入正是 agent 時代的主戰場，因為 agent 的價值就建立在「自動去讀外部世界」上——一個不會自己抓網頁、讀文件、串工具的 agent 幾乎沒用。而每一個它讀進來的外部來源，都是一個潛在的指令注入點。這就是經典的混淆代理問題：合法的憑證去執行了惡意的操作。攻擊者沒有 agent 的權限，但他能讓 **持有權限的 agent** 替他動手。

必須誠實面對一個結論：**截至 2026-06，prompt injection 沒有被「徹底解決」，而且短期內不會。** 根據 2025 年 OpenAI、Anthropic、Google DeepMind 的相關研究，在現有 LLM 架構下，模型層的攻擊面實質上是無界的——任何用 prompt 指令表達的防禦，本身都可能被另一個 prompt 指令覆寫。Willison 本人公開表示對「以推理為基礎的防禦」深度懷疑：用非確定性的 AI 模型去擋安全問題，是把不可靠疊在不可靠上。Google DeepMind 在 2025-03 提出的 CaMeL[^camel]（用 P-LLM/Q-LLM 雙模型加能力追蹤，把防禦從機率性拉向確定性）是少數認真的嘗試，但在 AgentDojo[^agentdojo] 上也只擋下約 67% 的注入——換句話說，連設計上最嚴謹的方案都不宣稱清零。這個「沒有銀彈」的現實，是後面所有護欄工程的前提：我們不是在追求「擋住所有注入」，而是在「假設注入會發生」的前提下限制它能造成的後果。

## EchoLeak：把整條鏈跑通的第一個生產級案例

抽象的威脅模型講再多，不如一個跑通的真實漏洞。2025-06 由 Aim Labs（Aim Security 研究團隊）揭露、編號 CVE-2025-32711、CVSS 9.3 的 **EchoLeak**，是業界第一個被公開記錄、可用於資料外洩的**零點擊**提示注入漏洞，目標是 Microsoft 365 Copilot。研究者把它的攻擊原語命名為 **LLM Scope Violation（LLM 範圍違規）**：來自系統外部的不受信任輸入（一封惡意郵件），誘使 AI 去存取並洩漏它本不該對外吐出的、使用者範圍內的特權內部資料。

它「零點擊」的意思是——受害者**什麼都不用做**。攻擊者只要寄一封郵件進組織，剩下的由 Copilot 自己完成。整條鏈串起了四個獨立的繞過，每一個單看都不致命，湊在一起才構成完整的外洩管道：

1. **繞過 XPIA 分類器**：Microsoft 的 Cross-Prompt Injection Attempt 分類器是 Copilot 對抗注入的第一道防線，惡意郵件用措辭規避了它的偵測。
2. **繞過連結遮蔽**：Copilot 會遮蔽可疑連結，但攻擊用 reference-style 的 Markdown 連結語法，沒被過濾器辨識成外洩通道。
3. **濫用自動抓圖**：Copilot 客戶端會自動預抓圖片，於是一個 Markdown 圖片就足以觸發一個對外的 HTTP 請求——**不需要使用者點任何東西**，資料就藏在那個請求的 URL 裡送出去。
4. **借道 Teams proxy 繞過 CSP**：Copilot 的內容安全政策（CSP）原本限制能連到哪些網域，但攻擊利用了一個被 CSP 允許的 Microsoft Teams 預覽 API 當跳板，把資料中繼到攻擊者控制的伺服器。

為了確保惡意郵件一定會被讀進 context，Aim Labs 還用了一招 **RAG 噴灑（RAG spraying）**：把惡意內容塞滿向量檢索空間——寄多封涵蓋各種主題的郵件，或把單封郵件切成大量片段索引——這樣不管使用者問什麼問題，惡意片段都很可能被 RAG 判定相關而撈進來觸發。

可外洩的範圍是 Copilot 能存取的一切：聊天紀錄、OneDrive 檔案、SharePoint 內容、Teams 訊息等預載的組織資料。Microsoft 已在後端修補，並表示沒有已知客戶在野外受害（值得標註：「沒有已知受害」不等於「沒有發生」，零點擊攻擊的特性正是無感）。

EchoLeak 的真正價值不在這一個 CVE，而在它**證明了整條威脅鏈在生產系統上是可串通的**，而且它揭露的是 RAG 與 agent 系統共有的設計弱點，不是 Copilot 獨有的 bug。對照 Willison 的「致命三要素（lethal trifecta）」框架看更清楚：當一個 agent 同時擁有①存取私密資料、②接觸不受信任內容、③能把資料送出系統這三件事，攻擊者就能輕易誘導它讀私密資料、再送給攻擊者。EchoLeak 把三隻腳全湊齊了。而 Willison 給的唯一解法也很冷酷：你沒辦法靠提示「教會」模型不上當，只能去**砍掉其中一隻腳**——這恰好預告了第二、三篇要談的分層攔截與最小權限。

## 放大效應：從單一回應到整個計畫被劫持

agent 與聊天機器人最後一個、也是最被低估的差異，是**自主多步執行**帶來的放大。

傳統的 prompt injection 攻擊的是模型的**單一輸出**——它讓模型這一次回答錯。但 agent 有一個規劃迴圈（planning loop）：它把任務拆成多步、依序呼叫工具、根據結果再規劃下一步。OWASP 在 2025 年末伴隨發布的 Agentic Applications Top 10 把這個放大效應獨立成榜首 **ASI01：Agent Goal Hijack（代理目標劫持）**，它合併並擴大了 LLM01（注入）與 LLM06（過度代理）。它的關鍵洞察是：goal hijack 攻擊的不是某一次輸出，而是 **agent 的規劃邏輯本身**。一次成功的劫持能串起多個工具、跨越多個步驟、並在整個工作流裡持續存在——於是單一個被污染的輸入，不再只改變一個答案，而是重新導向整個目標、計畫與後續所有行動。

更糟的是多 agent 系統。已有研究記錄到跨 agent 的權限升級：被攻陷的 worker agent 對 orchestrator 下達指令時，那些指令看起來帶著 orchestrator 自身的權威；注入內容沿著任務委派鏈往上傳播，最終以系統中**權限最高的那個 agent** 的身分執行。委派鏈成了權限放大器。

而放大的終點，是注入直接變成程式碼執行。Microsoft 安全團隊 2026-05-07 的研究〈When prompts become shells〉揭露了 Semantic Kernel[^semantic-kernel] 框架的兩個 RCE[^rce] 漏洞（CVE-2026-25592、CVE-2026-26030）：其中 Python SDK 的 InMemoryVectorStore 把預設過濾運算式組成 Python lambda 後用 `eval()` 執行——一句 prompt 就足以在跑 agent 的機器上啟動 `calc.exe`，不需要瀏覽器漏洞、不需要惡意附件、不需要記憶體破壞。爆炸半徑在這裡達到極致：注入 → 任意程式碼執行。

把這些放在一起，威脅模型的全貌就清楚了：**注入是入口，過度代理是放大器，自主多步執行是傳播路徑，工具與權限是最終的爆炸當量。** 這也解釋了為什麼業界調查反覆顯示「部署速度遠遠跑在治理前面」——根據 Gravitee 在 2026 年發布、訪談逾 900 位主管與技術人員的《State of AI Agent Security 2026》報告，81% 受訪者感受到「即使安全治理未到位也要快速上線」的壓力、僅 14.4% 的 agent 是在完整安全/IT 核可下上線、88% 的組織在過去一年確認或懷疑發生過 AI agent 安全事件（這些是單一問卷的自陳數字，當作「落差存在」的旁證、不當精確真理；此處標註為估算性質）。

回答本篇最初的問題——「到底在防什麼」：不是防模型說錯話，是防一個持有真實權限、會自主動手的系統，被外部不受信任的文字劫持去執行攻擊者的意圖。知道了威脅長這樣、知道了它沒有銀彈，接下來四篇談的全部是同一件事：在「注入終將發生」的前提下，把爆炸半徑一層一層收回去。

[^confused-deputy]: Confused deputy（混淆代理），1988 年提出的經典電腦安全概念，指一個本身擁有合法權限的程式，被權限較低的對象誘導去濫用它的權限做壞事。問題不在權限被偷，而在「替誰做」被搞混。
[^echoleak]: EchoLeak，2025 年 6 月由資安公司 Aim Labs 揭露的 Microsoft 365 Copilot 漏洞，是業界第一個公開記錄、可實際拿來偷資料的「零點擊」提示注入案例，受害者完全不需點任何東西就會中招。
[^cve]: CVE（Common Vulnerabilities and Exposures），公開資安漏洞的全球統一編號系統，由 MITRE 維護。每個被收錄的漏洞給一個唯一編號（如 CVE-2025-32711），方便業界跨廠商一致地指涉同一個問題。
[^lethal-trifecta]: 致命三要素（lethal trifecta），資安研究者 Simon Willison 提出的框架：當一個 AI 系統同時擁有「存取私密資料、接觸不受信任內容、能把資料外送」三項能力，就具備被注入後外洩資料的完整條件，少一項就斷鏈。
[^owasp]: OWASP（Open Worldwide Application Security Project），國際非營利資安社群，以 Web 安全的「Top 10 風險清單」聞名。近年另出版針對大型語言模型與 agent 的 Top 10，已成為業界討論 AI 風險的共同詞彙。
[^camel]: CaMeL，Google DeepMind 於 2025 年提出的防禦設計，用兩個分工的語言模型（負責規劃的 P-LLM 與只處理資料的 Q-LLM）加上能力追蹤，把防禦從「靠模型自律」推向接近確定性的程式控制。
[^agentdojo]: AgentDojo，學界用來評測 agent 在提示注入下安全性的公開基準測試集，提供一組標準化的攻擊與任務，讓不同防禦方案能在同一把尺上比較擋下了多少注入。
[^semantic-kernel]: Semantic Kernel，微軟開源的 AI agent 開發框架，幫開發者把語言模型、外掛工具與記憶串成可執行的應用。它被揭露的 RCE 漏洞顯示框架本身的設計缺陷也會成為攻擊面。
[^rce]: RCE（Remote Code Execution，遠端程式碼執行），資安裡最嚴重的漏洞類別之一，指攻擊者能在目標機器上執行任意指令。在 agent 場景中代表一句注入文字就可能讓攻擊者控制跑 agent 的主機。

---

## 來源

1. [Zero-Click AI Vulnerability "EchoLeak" Exposes Microsoft 365 Copilot Data Without User Interaction](https://thehackernews.com/2025/06/zero-click-ai-vulnerability-exposes.html) — The Hacker News，2025-06
2. [EchoLeak: The First Real-World Zero-Click Prompt Injection Exploit in a Production LLM System (arXiv:2509.10540)](https://arxiv.org/html/2509.10540v1) — Aim Labs 等，2025-09
3. [The lethal trifecta for AI agents](https://simonwillison.net/tags/lethal-trifecta/) — Simon Willison，2025
4. [OWASP ASI01: Agent Goal Hijack — Full technical guide](https://adversa.ai/blog/asi01-agent-goal-hijack-a-practical-security-guide/) — Adversa AI（引 OWASP Top 10 for Agentic Applications），2026
5. [When prompts become shells: RCE vulnerabilities in AI agent frameworks](https://www.microsoft.com/en-us/security/blog/2026/05/07/prompts-become-shells-rce-vulnerabilities-ai-agent-frameworks/) — Microsoft Security Blog，2026-05-07
6. [State of AI Agent Security 2026 Report: When Adoption Outpaces Control](https://www.gravitee.io/blog/state-of-ai-agent-security-2026-report-when-adoption-outpaces-control) — Gravitee，2026
