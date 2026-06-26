---
title: 怎麼證明護欄有效：紅隊、評測與治理合規
order: 5
date: 2026-06-26
summary: 護欄不是裝了就安心。談用紅隊測試持續攻擊自己、把護欄納入評測 pipeline、稽核軌跡與 EU AI Act 等合規壓力如何落地。
keywords: OWASP Top 10 Agentic Applications 2026 red teaming, promptfoo owasp agentic CI continuous eval, DeepTeam LLM red teaming framework, EU AI Act Article 99 penalties timeline Digital Omnibus 2026, NIST AI RMF generative AI profile agentic governance, AI agent audit trail observability compliance 2026, LLM eval metrics gaming Goodhart law, AI agent security incident survey 2026 statistics
---

# 怎麼證明護欄有效：紅隊、評測與治理合規

前面四篇都在講「怎麼裝護欄」：威脅模型（第一篇）、分層架構（第二篇）、行動層控制（第三篇）、工具鏈（第四篇）。這一篇要回答唯一真正難的問題——你怎麼知道它有效？

裝了護欄不等於安全。Gravitee 的《State of AI Agent Security 2026》調查了 900 多位高管與技術人員，88% 的組織在過去一年確認或懷疑發生過 AI agent 安全事件；同一批受訪者裡，只有 14.4% 的 agent 是在通過完整安全／IT 核可後才上線的（截至 2026 年，單一調查來源）。換句話說，多數組織的 agent 已經在動手，但沒有人能拿出「它不會做壞事」的證據。本篇談三條取得證據的路線：紅隊、評測、治理。三條都有它各自的天花板，我會一併講清楚。

## TL;DR

- **護欄要靠「主動攻擊自己」來驗證，不是靠裝了沒。** OWASP Top 10 for Agentic Applications（2025-12 在 Black Hat Europe 發布的 2026 版）把 agent 特有風險（目標劫持、工具濫用、記憶污染、agent 間通訊）整理成可測項目；promptfoo[^promptfoo]、DeepTeam[^deepteam] 等框架能對 agent 自動跑這些攻擊。但紅隊覆蓋率永遠不完整——你只能證明「測過的攻擊擋住了」，證不了「沒有漏洞」。
- **驗證要持續、進 CI，否則只是一次性安心。** 把紅隊與評測掛進 CI／eval pipeline、每次改 prompt 或工具就回歸跑一次，是 2026 年的主流做法。但評測指標會被 game：當「red team 通過率」變成 KPI，團隊會優化那個數字而非真實安全（Goodhart's law[^goodhart]）。
- **合規不等於安全。** EU AI Act 已於 2024-08-01 生效、多數規則 2026-08-02 起適用，違反禁止性行為最高罰全球年營業額 7%（或 3,500 萬歐元，取高者）。但通過稽核、留下 audit trail，證明的是「可問責」，不是「攻不破」。兩件事都要做，別把其中一件當成另一件。

## 第一條線：紅隊——主動攻擊自己的 agent

紅隊[^red-team]的邏輯很簡單：在攻擊者之前，自己先用攻擊者的手法把 agent 打一遍。對 agent 而言，這比傳統 LLM 紅隊難一個量級——你不只要測「它會不會說錯話」，還要測「它會不會在多步推理裡被間接注入帶偏、誤用工具、洩漏憑證、被污染的記憶帶著走」。

OWASP Gen AI Security Project 在 2025 年 12 月（Black Hat Europe 與 OWASP Agentic Security Summit）發布了 OWASP Top 10 for Agentic Applications（2026 版），這是第一份專為「自主、會用工具的 agent」而非單次 prompt 的 LLM app 排的風險清單，涵蓋目標劫持（如 EchoLeak）、工具濫用（如 Amazon Q 事件）、委派信任、agent 間通訊攻擊、持久記憶污染、使用者過度信任等。它的價值在於把抽象焦慮翻成可逐項驗證的測試清單。配套的 GenAI Red Teaming Guide（2025-01 發布）進一步把紅隊拆成 model / implementation / infrastructure / runtime 四個階段，強調這是貫穿生命週期的持續流程，不是上線前打一次勾。

工具面，promptfoo 內建 `owasp:agentic` preset，能對 agent 自動跑對應攻擊插件並產出 OWASP／NIST 對齊的合規報告；DeepTeam 是另一套開源 LLM 紅隊框架，同樣對映 OWASP agentic 清單。2026 年最明顯的方法學轉變是「自主紅隊」：給一個攻擊者 LLM 一句自然語言目標，由它自己選攻擊、組合變形、打靶、產出結構化發現——攻擊面比人寫的固定 payload 廣得多。（補充一個產業訊號：OpenAI 於 2026-03 收購 promptfoo，專案維持 MIT 授權。）

但這裡要踩煞車。紅隊的根本限制是覆蓋率永遠不完整——它只能證明「我測過的攻擊被擋住了」，無法證明「不存在我沒想到的攻擊」。學界對自動紅隊的一個已知毛病是策略缺乏多樣性：靜態互動會讓紅隊過度集中在某一類指標（例如誘發有害內容的成功率），而忽略其他潛在威脅。所以紅隊跑出「全綠」時，正確的解讀是「這批已知攻擊目前擋得住」，不是「安全了」。

## 第二條線：評測——把驗證掛進 pipeline，並小心指標被 game

一次性紅隊的問題是它會過期。你今天測過的版本，明天改了一個 prompt、加了一個工具、換了底模，攻擊面就變了。所以驗證必須變成持續流程：把護欄與紅隊用例納入 CI／eval pipeline，每次改動就回歸跑一遍，把安全測試當成單元測試在管。promptfoo 一類工具本來就為 CI/CD 設計（YAML 設定、可在 pipeline 裡跑、能擋住回歸），把紅隊掃描放進「每次改 prompt 跑、每晚對 production 跑、每季擴大範圍跑」的節奏，是目前較成熟團隊的做法。同時可以用 LLM-as-judge 當線上品質過濾器，即時監看回應品質、掉到門檻以下就觸發 fallback（這屬於工具鏈細節，見第四篇）。

第二個陷阱比覆蓋率更隱蔽：評測指標會被 game。這是 Goodhart's law 的標準演出——當一個度量變成目標，它就不再是好度量。一旦「red team 通過率」或「judge 評分」變成團隊 KPI，被優化的會是那個數字本身，而不是它原本想代理的「安全」。學界已有具體觀察：agent 會學著對「可觀測的成功」最佳化，而系統性地忽略沒被測量的維度——例如合規、安全、程序完整性。LLM-as-judge 本身也是攻擊面：判官會誤判、可被刻意對抗、輸出可能因冗長而虛高。對策不是放棄評測，而是承認指標是代理而非真相——定期換 holdout 攻擊集、引入 trace 層稽核（看 agent 中間「怎麼做的」而不只「最後輸出對不對」）、不把單一通過率當成放行的唯一憑證。

## 第三條線：治理與合規——可問責，但不等於攻不破

第三條線是把上面這些變成組織能拿得出手、外部能查核的東西。核心是 audit trail：一份防竄改、依時序記錄 agent 每一個動作的紀錄——觸發事件、每一次工具呼叫、存取了哪些資料、決策理由摘要、人類授權脈絡、UTC 時間戳、執行結果與錯誤。它和一般 log 的差別在於目的——audit trail 是為了問責與法律可辯護性，不只是除錯。配套的是 agent observability：傳統 APM 問「系統有沒有掛、快不快」，agent observability 問「它有沒有做對的事、能不能證明」。值得警惕的對照是，那份 2026 調查裡 88% 出過事，但只有約 21% 的組織對 agent 實際在做什麼有任何 runtime 可見度。

法規這條，EU AI Act 是當前最硬的壓力。它於 2024-08-01 生效，禁止性行為自 2025-02-02 起適用，多數規則自 2026-08-02 起全面適用。罰則依 Article 99 分級：違反 Article 5 禁止性行為最高 3,500 萬歐元或全球年營業額 7%（取高者）；多數高風險義務的不合規（如 Article 11 技術文件、Article 12 紀錄保存、品質管理系統等）最高 1,500 萬歐元或 3%；向主管機關提供不實資訊最高 750 萬歐元或 1%（SME 取較低者）。要注意 2026 年的時程鬆綁：2026-05-07 的 Digital Omnibus 提案把部分 Annex III 高風險義務從 2026-08-02 延後（多份法律解讀指延到 2027-12，截至 2026-06 仍在立法程序中，最終以官方公布為準）；同時新增針對非合意私密影像與 CSAM 的禁止項，預定 2026-12-02 適用。治理框架面，NIST AI RMF[^nist-rmf] 與其 Generative AI Profile（NIST AI 600-1）提供 GOVERN／MAP／MEASURE／MANAGE 的可操作對映，NIST 並規劃在 2026 第四季發布 AI Agent Interoperability Profile；ISO/IEC 42001[^iso42001] 則提供可認證的 AI 管理系統。

但這條線最大的誤區，是把合規當成安全。通過稽核、留好 audit trail、對齊 NIST，證明的是「出事時你說得清楚、可被問責、罰則可控」——這是「可問責性」，不是「攻不破」。EU AI Act 要你保存紀錄、做風險管理，它不會替你擋住一個新型間接注入。反過來也成立：一個技術上很硬的 agent，若沒有 audit trail，出事時你連發生了什麼都查不出來。合規與安全是兩個正交的維度，缺一不可，但任一個都無法頂替另一個。

## 收束：三條線各補對方的盲點

回到開篇那句——裝了護欄不等於安全。本期五篇講完了「怎麼裝」，這一篇講的是「怎麼證明裝對了」，而誠實的答案是：你永遠無法證明 agent 絕對安全，只能持續縮小未知。紅隊補評測的盲點（評測跑的是已知用例，紅隊去找新攻擊），評測補紅隊的盲點（紅隊會過期，評測讓它持續且自動），治理補技術的盲點（技術擋攻擊，治理讓組織可問責、滿足法規）。三者都有天花板：紅隊覆蓋率不完整、評測指標會被 game、合規不等於安全。把這三句當成持續運作的提醒、而非可以打勾結案的項目，才是 agent 時代護欄工程真正成熟的樣子。

[^red-team]: 紅隊（red teaming），源自軍事演習的安全實務：由一支隊伍扮演對手，用真實攻擊手法主動測試自己的系統，找出防禦漏洞。對 AI 而言就是搶在真攻擊者之前，自己先把 agent 攻一遍。
[^promptfoo]: promptfoo，開源的 LLM 測試與紅隊工具，內建對應 OWASP agent 風險清單的攻擊插件，可整合進 CI/CD 自動回歸測試。2026 年 3 月被 OpenAI 收購，專案維持 MIT 授權。
[^deepteam]: DeepTeam，另一套開源的 LLM 紅隊框架，同樣對映 OWASP 的 agent 風險清單，讓團隊能對自家 agent 自動執行一系列對抗式攻擊測試。
[^goodhart]: Goodhart's law（古德哈特定律），常被表述為「當一個度量變成目標，它就不再是好度量」。意思是一旦把某個指標當成 KPI 來追，人們會去優化那個數字本身，而非它原本想代表的真實目的。
[^nist-rmf]: NIST AI RMF（AI Risk Management Framework），美國國家標準暨技術研究院發布的 AI 風險管理框架，提供 GOVERN／MAP／MEASURE／MANAGE 四大功能的可操作流程，是企業建立 AI 治理時常用的參考標準。
[^iso42001]: ISO/IEC 42001，國際標準組織發布的第一個 AI 管理系統標準，類似資安界的 ISO 27001，組織可據此建立可被第三方認證的 AI 治理制度，向外部證明自己有系統地管理 AI 風險。

---

## 來源

1. [Article 99: Penalties — EU Artificial Intelligence Act](https://artificialintelligenceact.eu/article/99/) — EU Artificial Intelligence Act（罰則分級條文），2026-06 查閱
2. [OWASP Top 10 for Agentic Applications — The Benchmark for Agentic Security](https://genai.owasp.org/2025/12/09/owasp-top-10-for-agentic-applications-the-benchmark-for-agentic-security-in-the-age-of-autonomous-ai/) — OWASP Gen AI Security Project，2025-12-09
3. [State of AI Agent Security 2026](https://www.gravitee.io/state-of-ai-agent-security) — Gravitee（900+ 受訪者調查），2026 查閱
4. [EU AI Act Update: Timeline Relief, Targeted Simplification, and New Prohibitions](https://www.insideglobaltech.com/2026/05/28/eu-ai-act-update-timeline-relief-targeted-simplification-and-new-prohibitions/) — Covington / Inside Global Tech，2026-05-28
