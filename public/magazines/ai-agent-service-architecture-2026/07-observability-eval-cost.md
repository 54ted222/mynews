---
title: 可觀測性、評測與成本：把機率系統工程化
order: 7
date: 2026-06-26
summary: trace、LLM-as-judge 評測、reliability tax 與 token 經濟學/快取，解析怎麼把不確定的 Agent 變成可營運的服務。
keywords: AI agent observability 2026, LLM-as-judge reliability bias, agent cost optimization prompt caching, reliability tax probabilistic stack, Galileo Luna-2 evaluation, OpenTelemetry GenAI semantic conventions, LangSmith online evaluation drift, agent test-time scaling plateau
---

# 可觀測性、評測與成本：把機率系統工程化

前面六層把 Agent 從推理迴圈一路蓋到安全護欄。但蓋好不等於營運得起來。最後這一層回答兩個工程經理在 review 會議上真正會問的問題：你怎麼知道這隻 Agent 做得好不好？以及，它一個月燒掉的錢，划不划算？這兩題都沒有單一指標可回答，因為 Agent 是機率系統——同一個輸入跑兩次可能走兩條路、給兩種答案。把機率系統當成確定性軟體來監控與計費，是 2026 仍在量產的事故來源。

## TL;DR

- 傳統 log 看不見 Agent 為什麼那樣做。你需要 trace[^trace]——把每次 model call、tool call、規劃步驟記成有父子關係的 span[^span]，OpenTelemetry GenAI 語意慣例[^otel]（截至 2026-06 仍多為 experimental）正在把這套 schema 標準化。
- 評測要三層疊：離散步驟的 unit eval、用 LLM-as-judge[^llm-judge] 做回歸、對生產 trace 抽樣做 online eval。但 LLM-as-judge 自己就不可靠——2026 多份研究顯示同 prompt 重跑像擲硬幣、frontier model 在偏誤測試上錯誤率超過 50%，所以 judge 必須被當成「要被校準的元件」而非真理。
- 成本的核心觀點是「reliability tax」：token 優化（快取省約 90%）有 maturity date 會做完，但把機率不確定性塞回確定性軟體棧的可靠性工程，沒有完工日。

## 為什麼機率系統需要新的可觀測性

傳統 APM[^apm] 的世界觀是：請求進來、走幾個確定的 hop、回 200 或 500，慢了就看哪一段。Agent 不長這樣。一個 task 可能呼叫 model 三到十次、穿插 tool 執行、規劃、重試與驗證，路徑由模型當下決定。出事時你要回答的不是「哪段慢」，而是「它當初為什麼決定那樣做」。Log 一行一行流，答不了這題；你需要 trace——把整個 task 攤成一棵 span 樹，每個 span 帶模型名稱、token 數、輸入輸出、延遲與工具參數，父子關係保留 Agent 的決策脈絡（digitalapplied.com、Braintrust）。

這是一門有自己資料模型的學科：trace 的單位是 LLM call 與 tool call，不是 HTTP hop；品質訊號是 eval 分數，不是 5xx 比率；成本模型是 token 加權、按使用者歸因，不是 CPU 秒數。截至 2026-06，OpenTelemetry GenAI 語意慣例（v1.41）已定義 agent、workflow、tool、model 四種 span 與延遲、token 用量等必備 metric，但規格整體仍在 Development 狀態、多數屬性標記 experimental；OTel GenAI SIG 還在補多 Agent 系統（任務、行動、記憶、artifact 追蹤）的慣例（opentelemetry.io、digitalapplied.com）。實務含義：你現在就該用 OTel 當儀表化層、把 trace 路由到任意後端（Datadog 自 v1.37 起原生支援），但別假設 schema 已凍結。

trace 量會爆。Agent 比聊天多 3–10 倍呼叫，每個 task 動輒五萬到五十萬 token，全量留存 trace 又貴又吵。共識做法是 tail-based sampling[^tail-sampling]——先收完整個 trace，再決定要不要留，把出錯的、慢的、成本異常的優先保下來，正常流量抽樣即可（digitalapplied.com、Braintrust）。

## 評測三件套，與 LLM-as-judge 的陷阱

可靠的 Agent 評測會疊三層。第一層是對離散步驟做 unit eval：能用程式判對錯的就別交給模型——工具是否被正確呼叫、輸出是否符合 schema、檢索是否命中該命中的文件，這些是確定性的，寫成斷言最便宜也最穩。第二層是用 LLM-as-judge 做回歸測試：對於沒有標準答案的開放式輸出（摘要好不好、回覆有沒有切題），用一個模型當評審打分，固定成 golden set[^golden-set] 後每次改 prompt、換模型、改工具 schema 都重跑，把無聲的 drift 變成可見的分數下滑（langchain.com）。第三層是把同一批 eval 掛到生產上做 online eval：對抽樣的真實流量即時打分，用 session ID 把多輪對話分組、整段評估而非逐輪，並排程拿 golden trace set 重放當早期警報（langchain.com、digitalapplied.com）。

第二、三層都壓在 LLM-as-judge 上，而它本身就是 2026 最被質疑的環節。多份研究指出：用兩個 OpenAI judge 跑 29 個任務、各重複 50 次，run-to-run 一致性低到作者把論文題目訂成「擲硬幣的評審？」；RAND 的研究發現沒有任何 judge 跨 benchmark 一致可靠，frontier model 在偏誤測試上錯誤率超過 50%。已知的系統性偏誤包括偏好較長、看起來權威、格式漂亮的回答，以及 egocentric bias 與 preference leakage[^preference-leakage]（評審偏好自己風格的輸出）。光是改格式、換句話、調整冗長度，judge 的判斷就會崩（nextfuture.io.vn、adaline.ai）。結論不是棄用 judge，而是把它當成需要被校準的量測儀器：用人工標註的小集合驗證 judge 跟人類的一致率、固定 prompt 與溫度、必要時用 pairwise 取代 pointwise，並把 judge 自己納入回歸監控。

judge 的另一個成本是真的成本——每打一次分就是一次 LLM 呼叫，全量 online eval 等於把推理帳單再疊一層。這裡有個值得記住的反例：Galileo 的 Luna-2 是專做評測的小模型（3B/8B），把每個 metric 做成共享 backbone 上的 LoRA head，宣稱 sub-200ms、推理成本約每百萬 token 0.02 美元、比 GPT-4 級評審便宜約 97%，因此能對全量流量做即時 guardrail 而非只能抽樣（galileo.ai、arxiv.org 2602.18583、venturebeat.com）。這些是廠商與其論文數字，自行驗證，但方向清楚：當你想評得更密，judge 的單位成本就得壓下來，否則 eval 比 Agent 本身還貴。

平台地景也按團隊形狀分眾：貼著 LangChain/LangGraph 工作流的選 LangSmith；eval science 要做得嚴謹（資料集版本、實驗對照）的偏 Braintrust；要 open-source、框架無關當 baseline 的用 Langfuse（latitude.so、digitalapplied.com）。選型重點不是功能勾選表，而是它跟你既有 stack 的貼合度與你想做的 eval 深度。

## Token 經濟學，與不會過期的 reliability tax

成本面先看數字。Agent 一個 task 普遍 5–8 美元、比聊天多 3–10 倍呼叫（online.stevens.edu、digitalapplied.com）。最大的單一槓桿是 prompt caching[^prompt-caching]：對重複前綴（system prompt、工具定義、共享 context）打快取，Anthropic 對命中的 input token 給約 90% 折扣、延遲也大幅下降；把一個 orchestrator 配 N 個共享 context 的 worker，幾乎能消除冗餘 context 反覆計費的懲罰（buildmvpfast.com、zylos.ai、aicostcheck.com）。再疊上 model routing（簡單步驟走小模型）與 semantic caching，整體省 70–90% 是合理區間。

但這裡有個比省錢更重要的觀點，來自「reliability tax」[^reliability-tax]這個框架（The New Stack、zartis.com）。Agent 把機率不確定性灌進了原本確定性的軟體棧，於是你得多付一筆「不可靠稅」：error containment、validation gate、retry damping、人為審核點——這些不產生功能，只是把失敗的機率壓住。關鍵差別在於：token 優化有 maturity date，快取做完、路由調好就大致到頂，是一次性工程；可靠性工程沒有完工日，因為它對抗的是模型本質上的隨機性。而且失敗會複利：單步 95% 成功率，十步串起來只剩約 60%（0.95 的十次方）；五個各 99% 可用的 primitive 串起來，系統可用度掉到約 95%（mindstudio.ai、edstellar.com）。

這也解釋了為什麼便宜的 Agent 常常不可靠、可靠的 Agent 常常不便宜。要把 single-shot 的 60–70% 拉到 90%+，目前主流手段是「想久一點」——test-time scaling[^test-time-scaling]、best-of-N、驗證迴圈，這些直接換成更多 token 與更多呼叫。但 2026 的研究也潑了冷水：CMU 等工作指出 Agent 的 test-time scaling 有天花板，更多互動回合在某些任務反而傷害表現，模型自選最佳答案的準確率約只到 55%，遠低於 oracle（effloow.com、arxiv.org 2604.16529）。所以營運層的真正工作，是用可觀測性與評測去找出「在哪些 task、加多少算力，可靠性的邊際報酬還划得來」，而不是無腦把預算往推理時間倒。

把六層串回來：推理核心讓 Agent 會想，記憶與工具讓它有料，運行時讓它能跑久，安全讓它不闖禍——而這最後一層，是讓前面五層的不確定性變成可量測、可定價、可治理的數字。沒有它，Agent 服務只是一個你看不見、也算不清帳的機率黑箱。

[^trace]: trace（追蹤）是把一次完整請求所經過的所有步驟串成一棵有父子關係的樹，記錄每一步發生了什麼。對 Agent 來說，它能還原「模型當初為什麼那樣決策」，是傳統一行行的 log 做不到的。
[^span]: span 是 trace 樹裡的一個節點，代表一個工作單位——例如一次模型呼叫或一次工具執行。每個 span 帶有耗時、token 數、輸入輸出等屬性，彼此的父子關係構成完整的決策脈絡。
[^otel]: OpenTelemetry（OTel）是業界標準的可觀測性框架；其 GenAI 語意慣例是專為 AI 應用制定的一套欄位規範，定義該怎麼記錄模型、工具、Agent 的 trace，好讓資料能送到任意後端。截至 2026 年中多數欄位仍為實驗性。
[^apm]: APM（Application Performance Monitoring，應用效能監控）是傳統監控軟體效能的工具類別，假設請求走固定路徑、回固定狀態碼。Agent 的非確定性路徑打破了這個假設，因此需要新的可觀測性模型。
[^tail-sampling]: tail-based sampling（尾端取樣）指先完整收集一筆 trace、等它跑完再決定要不要保留，於是能優先留下出錯、變慢或成本異常的，正常流量只抽樣。相對地「頭端取樣」在請求一開始就決定，會錯過事後才知道有問題的案例。
[^llm-judge]: LLM-as-judge（以 LLM 當評審）指用一個模型替另一個模型的開放式輸出打分，解決「沒有標準答案的好壞」難以自動評測的問題。但評審本身也有偏誤、重跑不穩，2026 年被廣泛質疑，須當成「要被校準的儀器」使用。
[^golden-set]: golden set（黃金測試集）是一批人工挑選、答案或品質已被確認的標準範例，固定下來當回歸測試基準。每次改動系統後重跑它，就能把原本悄無聲息的品質退化變成看得見的分數變化。
[^preference-leakage]: preference leakage（偏好洩漏）是 LLM 評審的一種系統性偏誤：評審傾向給「和自己風格相近」的輸出較高分。若評審和被評的是同款模型，分數就會被這層偏心污染，使評測失真。
[^prompt-caching]: prompt caching（提示快取）指對請求中重複出現的前綴（如固定的 system prompt、工具定義）做快取，命中時免去重算。Anthropic 對命中的輸入 token 給約九折優惠並降低延遲，是 Agent 省成本的最大單一槓桿。
[^reliability-tax]: reliability tax（可靠性稅）是一個框架概念：因為 Agent 把機率不確定性帶進原本確定性的軟體，你得額外付出驗證、重試、人工審核等「不產生功能、只為壓住失敗率」的工程成本。它與一次做完就到頂的 token 優化不同，沒有完工日。
[^test-time-scaling]: test-time scaling（測試時擴展）指在模型「回答當下」投入更多運算來換取更高準確率——例如讓它多想幾輪、生成多個答案再挑最好的。它是提升可靠性的主流手段，但 2026 年研究指出其效益有天花板，加太多反而可能傷害表現。

---

來源

1. [Agent Observability 2026: Evals, Traces, Cost Guide](https://www.digitalapplied.com/blog/agent-observability-2026-evals-traces-cost-guide) — Digital Applied, 2026
2. [LLM-as-Judge Reliability in 2026: What 8 June Studies Actually Show](https://nextfuture.io.vn/blog/llm-as-judge-reliability-in-2026-what-8-june-studies-actually-show) — NextFuture, 2026-06
3. [Luna 2: Purpose-Built Evaluation Models for Reliable AI](https://galileo.ai/blog/introducing-luna-2-purpose-built-models-for-reliable-ai-evaluations-guardrailing) — Galileo AI, 2026
4. [Avoiding the AI Agent Reliability Tax: A Developer's Guide](https://thenewstack.io/avoiding-the-ai-agent-reliability-tax-a-developers-guide/) — The New Stack, 2026
