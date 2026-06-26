---
title: 行動層護欄：最小權限、工具白名單與人類核可
order: 3
date: 2026-06-26
summary: agent 最危險的是動手那一刻。談最小權限、scoped 工具、schema 與不變量檢查、人類核可與時效授權，以及緊急 kill switch。
keywords: least privilege AI agent scoped tool permission zero standing privilege, human in the loop agent approval CIBA Auth0 asynchronous authorization, tool allowlist schema validation invariant check agent, agent kill switch emergency stop pattern, delegated access on-behalf-of token vs service account agent, approval fatigue human in the loop tradeoff, time-bound permission ephemeral token just-in-time access, EU AI Act Article 14 human oversight
---

# 行動層護欄：最小權限、工具白名單與人類核可

前兩篇談的是「在防什麼」和「護欄擺在架構哪一層」。這一篇把鏡頭推到最近、也最危險的距離：agent 已經決定要呼叫某個工具、要送出某個動作——就在它「動手」的那一毫秒，控制權必須還在你這邊。這一層沒守住，前面的輸入過濾、推理監控全都白搭，因為真正會寄出信、刪掉資料、轉出款項的，是這一刻的工具呼叫。

行動層護欄不是單一開關，而是一條控制鏈，從「平常你能拿到什麼權限」一路收到「出事時怎麼一鍵停下」。QueryPie 在 2026 年的白皮書把它整理成四個要素：權限（Permission，事前預防）、核可（Approval，人類介入）、稽核軌跡（Audit Trail，事後可追）、緊急開關（Kill Switch，事中應變）。本篇就沿這四個要素，逐一拆它們在「動手那一刻」各自擋的是什麼。

## TL;DR

- **預設零常駐權限**：planner 盡量唯讀，執行用 scoped 工具，能改系統或拿 secret 的權限改成 just-in-time、用完即撤；用 on-behalf-of 委派身分讓 agent 永遠不能超過使用者本人的權限，別給全域 service account。
- **工具呼叫要過三道閘**：白名單（這個工具現在能不能用）、schema 驗證（參數型別／必填／格式對不對）、不變量檢查（金額／範圍／業務規則踩線沒），最後把高風險動作交給人類核可——而且核可要綁定「這一筆」動作的精確參數與到期時間。
- **核可不是越多越好**：approval fatigue 跟 SOC 的 alert fatigue 是同一個病，按風險分級、只在罕見且後果重的動作上攔人，並設計批次審核；另外備好一個跑在 agent 推理路徑之外、它自己關不掉的 kill switch。

## 最小權限：把爆炸半徑收在身分這一層

最便宜也最常見的災難，是給 agent 一個「什麼都能做」的身分。團隊圖省事，直接開一個全域 service account 讓 agent 用，結果是任何能跟這個 agent 對話的人，都間接握有那個身分的全部權限。Zscaler 引用 Teleport 的調查指出，對 AI 系統過度授權的企業，遭遇的安全事件數量是嚴格控管者的 4.5 倍。這不是理論，是已經發生的代價結構。

正確的起點是把權限按元件拆開、按需給。負責規劃的 planner 元件盡量設成唯讀——它只需要讀資料來想方案，不需要寫入能力；真正執行的 agent 用 scoped tool permission，只拿到當前任務需要的那幾個工具；至於能修改系統狀態、或能取出 secret 的高敏感權限，目標是零常駐權限（zero standing privilege[^zsp]）：平常一點都不給，任務開始才授予、任務結束就收回。把可被利用的時間窗從「無限期」壓到「近乎為零」，是這套設計的核心收益。

比「給什麼權限」更關鍵的是「用誰的身分」。這裡有兩條路，差距很大——委派身分走的是 on-behalf-of token[^obo]，全域 service account[^service-account] 則是共用單一身分：

| | 委派身分（On-Behalf-Of / 委派存取） | 全域 service account |
| --- | --- | --- |
| 身分結構 | token 內 `sub` 是授權的使用者、`act` 是執行的 agent，雙身分都記在每一筆 token | 單一共用身分，看不出背後是誰 |
| 權限上限 | agent 永遠不能超過該使用者本人的存取範圍（Alice 只看得到自己的行事曆，代她行動的 agent 也只看得到她的） | 全域權限，所有請求都用同一個「全能」身分跑 |
| 撤銷 | 範圍明確、可即時撤銷、可設短期效期 | 一撤就全停，難以細緻控制 |
| 稽核 | log 誠實：誰委派、哪個 agent 動的手，都在 | 只看得到「service account 做了某事」 |

委派身分能擋掉一整類「scope collapse（範圍坍縮）」問題：agent 累積了使用者的全部權限，即使它的任務只需要其中一小片。OWASP 的 AI Agent Security Cheat Sheet 把這寫成 LLM06「過度代理」的明確控制項之一——execute in the user context，用 OAuth 最小 scope，而不是共用 service account。配套的是時效授權：例如核准 agent 在事故處理期間呼叫某監控 API 三十分鐘，時間一到 token 自動失效，要繼續就得重新核可。實作上靠 just-in-time 簽發、短效 token、以及綁定任務完成的自動撤銷——用完即撤，把曝險窗口壓到最小。

## 動手前的三道閘：白名單、schema、不變量

最小權限決定了「agent 手上有哪些工具可用」，但光有這個還不夠。語言模型可能選對了工具卻用錯方式（參數寫歪），或者該用 A 工具卻選了 B。所以在 LLM 產出工具呼叫之後、真正執行之前，要再過三道彼此獨立的檢查。把這三道想成不同職責的關卡，比寫成一坨 if 更不容易漏：

| 閘 | 問題 | 擋掉什麼 | 例子 |
| --- | --- | --- | --- |
| 工具白名單 | 這個工具，此時此地能不能用？ | 呼叫了不在授權清單內的工具 | 此任務只允許 `read_report`、`send_summary`，不允許 `delete_record` |
| schema 驗證 | 參數型別／必填／格式對不對？ | 結構錯誤、缺欄位、格式不合的呼叫 | 收款帳號必須符合 IBAN 格式、金額必須是正整數 |
| 不變量檢查 | 有沒有踩到範圍／門檻／業務規則？ | 「用對工具但用錯方式」 | 單筆轉帳上限 1 萬、檔案路徑須在 `/app/reports/*`、禁止匹配 `*.env`、`*secret*` |

這三道的價值在於它們不信任模型輸出。OWASP cheat sheet 把這個原則寫成「complete mediation（完全仲裁）」：不要因為動作是 LLM 提的就放行，下游每一個請求都要獨立驗證範圍、權限與核可狀態。Invariant Labs 的開源 Guardrails 則把它做成一個透明 proxy，在每次工具呼叫前後用規則比對——它甚至能跨多步抓「先讀收件匣、再寄信給陌生地址」這種看似各自無害、串起來卻是外洩的資料流模式。重點是：白名單擋「不該碰的工具」，schema 擋「結構壞掉的呼叫」，不變量擋「結構正確但語意危險的呼叫」，三者分工、缺一不可。

## 人類核可、kill switch，與 approval fatigue 的取捨

有些動作再多自動檢查都不該全自動放行——金融交易、對外溝通、刪除資料、特權變更。這時要把人放回迴圈（human-in-the-loop）。OWASP 的 `HumanInTheLoopController` 把動作按風險分四級：LOW（讀取、安全查詢）可自動核可；MEDIUM（寫入、API 呼叫）；HIGH（金融、刪除、對外通訊，如 `send_email`、`execute_code`）；CRITICAL（不可逆、資安敏感，如 `database_delete`、`transfer_funds`）則必須人類點頭。

核可有兩個容易被忽略的工程細節。第一，決策與執行要分離：agent 只能「提案」，由一個獨立的 policy service 在執行前再次驗證範圍、權限與核可狀態——這樣即使 agent 被注入指令騙過，它也沒辦法自己批准自己。第二，核可要綁定「這一筆」動作：核可紀錄裡要寫清楚 actor、工具名稱、目標資源、正規化後的參數、時間戳與到期時間，否則一個「同意送信」的核可可能被偷換成送另一封信。非同步的做法業界多用 CIBA[^ciba]（Client-Initiated Backchannel Authentication，OpenID 的標準），由 Auth0 for AI Agents 這類產品實作：agent 發起請求，授權伺服器透過 Guardian 推播（比 email 抗釣魚）通知使用者，使用者在自己的裝置上核可，agent 收到結果才執行。

但 HITL 不是越多越好，這是本篇最重要的取捨。核可塞太多，就會得到 approval fatigue：使用者被太多瑣碎核可轟炸，最後不看內容就一路按「同意」，oversight 名存實亡。這跟 SOC 二十年來的 alert fatigue 是同一個病——把人塞進 agent 的內迴圈，頻繁而雜的決策一定撐不住。對策有三：一是按風險分級，只在罕見且後果重的動作上攔人，低風險自動放行；二是設計批次審核，讓 agent 跑完一個完整工作單元後，人類審一份 20 筆變更的彙整 diff，而不是被 20 個 popup 逐一打斷；三是接受「核可負擔 vs 風險下降」本來就是要量化權衡的，沒有免費的安全。

最後是 kill switch[^kill-switch]。它不是「砍掉 agent 進程」這麼簡單，而是一個圍堵（containment）模式：撤銷身分、停掉工具存取、凍結編排、把系統推回已知安全狀態（例如強制 read-only）。設計上有條鐵律：kill switch 必須跑在 agent 的推理路徑之外，不能依賴模型輸出、prompt 或 agent 邏輯，要由編排層、policy engine 或基礎設施來強制執行——否則一個被攻陷的 agent 可能連自己的開關都關掉。實務上是分層的：單一 agent 停用、特定工具封鎖、對風險動作的 rate limit 與 circuit breaker，到全域緊急停止。截至 2026 年 6 月，這已不只是工程選擇：EU AI Act[^eu-ai-act] 第 14 條要求高風險 AI 系統必須讓人能監督、介入並「停止」其運作，主要條文於 2026 年 8 月 2 日生效，把「人能喊停」從 best practice 推成法律義務。

把這四件事串起來——最小權限收窄能做什麼、三道閘驗證怎麼做、人類核可擋住最重的決定、kill switch 兜住最壞的情況——agent 才從一個「動起來就收不回」的黑盒，變成 QueryPie 說的「可停止、可追蹤、可修正」的系統。

[^zsp]: 零常駐權限（zero standing privilege），一種權限設計原則：身分平常不持有任何高敏感權限，只在任務需要的那一刻臨時授予、用完立即收回。目的是把權限可被濫用的時間窗壓到接近零。
[^obo]: On-behalf-of token（代理身分權杖），一種授權設計：權杖同時記錄「被代表的使用者」與「實際執行的 agent」雙重身分，讓 agent 的權限永遠不超過它所代表的那位使用者本人，撤銷與稽核也更清楚。
[^service-account]: Service account（服務帳號），給程式或系統自動使用、而非給真人登入的帳號。圖省事時常被開成全域共用的「全能」身分，缺點是任何能驅動它的人都間接握有它的全部權限，且 log 看不出實際是誰在動手。
[^ciba]: CIBA（Client-Initiated Backchannel Authentication），OpenID 制定的非同步授權標準。應用發起請求後，授權伺服器透過使用者自己的裝置（如推播通知）取得核可，使用者在另一個通道按確認，比 email 連結更能抵抗釣魚。
[^kill-switch]: Kill switch（緊急停止開關），讓營運者能立即中止 agent 運作的機制。設計鐵律是它必須跑在 agent 的推理路徑之外、由基礎設施強制執行，否則一個被攻陷的 agent 可能連自己的開關都關掉。
[^eu-ai-act]: EU AI Act（歐盟人工智慧法案），歐盟針對 AI 的全面性法規，依風險分級課予義務，對高風險系統要求人類監督、紀錄保存等。多數規則自 2026 年 8 月起適用，違規最高可罰全球年營業額的數個百分點。

---

## 來源

1. [Guardrail Design in the AI Agent Era (2026 Edition) — Part 1: Philosophy & Design](https://www.querypie.com/features/documentation/white-paper/28/ai-agent-guardrails-governance-2026) — QueryPie，2026
2. [AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html) — OWASP Cheat Sheet Series，2026
3. [Zero Trust for AI Agents: Least Privilege for Prompts & Plugins](https://www.zscaler.com/blogs/product-insights/zero-trust-for-ai-agents-least-privilege) — Zscaler，2026
4. [Asynchronous Authorization — Auth0 for AI Agents](https://auth0.com/ai/docs/intro/asynchronous-authorization) — Auth0 / Okta，2026
5. [Article 14: Human Oversight](https://artificialintelligenceact.eu/article/14/) — EU Artificial Intelligence Act
