---
title: 推理核心：Agent 迴圈、規劃模式與單體 vs 多體之爭
order: 2
date: 2026-06-26
summary: ReAct、Plan-and-Execute 到 orchestrator–subagent 收斂模式，解析迴圈如何驅動 Agent，以及 2026 年單體與多體系統的取捨。
keywords: agent loop ReAct loop engineering 2026, orchestrator subagent token premium 15x Anthropic, Plan-and-Execute vs ReAct latency cost reliability 2026, agent framework benchmark 30 points GAIA HAL scaffold, Cognition Don't Build Multi-Agents Devin Manage Devins, single-agent multi-agent equal token budget Tran Kiela, LangGraph CrewAI OpenAI Agents SDK Google ADK comparison, Claude Agent SDK Microsoft Agent Framework loop primitive
---

# 推理核心：Agent 迴圈、規劃模式與單體 vs 多體之爭

## TL;DR

- Agent 的本質不是提示詞，而是一個由你的程式碼驅動的控制迴圈：模型在 context 裡讀情境、發出 tool call、把結果接回去、再決策下一步，直到滿足停止條件。ReAct（2022）把這個迴圈定型，2026 年它演化成「loop engineering」——失敗多半來自四個原因：沒有硬性停止條件、目標定義不清、長對話 context 溢出、缺少成本控制。
- 同一個模型、同一個任務，光是換 orchestration scaffold，GAIA 分數就能差 30 個百分點（Princeton HAL：Claude Opus 4 在一個 scaffold 64.9%、另一個 57.6%）。框架選擇不是品味問題，它本身就是一個比模型升級還大的變因。
- 單體 vs 多體之爭在 2026 收斂了：等 token 預算下單體在多跳推理上持平或勝出（Tran & Kiela，arXiv 2604.02460），多體有約 15× token premium（Anthropic）。業界（Anthropic、OpenAI、Cognition、Microsoft、LangChain）收斂到同一拓撲——單一 orchestrator 擁有完整 context，spawn 短命隔離 subagent 只回傳壓縮摘要，GroupChat 式 peer-to-peer 失勢。

## 迴圈才是 Agent，提示詞不是

把一個 Agent 服務最內層剝開，你不會看到一段神奇的 prompt，你會看到一個 while 迴圈。這個迴圈的骨架是 perceive → plan → act → observe → repeat：你的程式碼（driver）帶著 context（system prompt + 歷史 + tool schema）呼叫模型；模型吐出一個結構化的 assistant turn——一段 thought 文字，後面跟著一個或多個 tool_use block；driver 把這些 action 拿去對工具表面執行，把結果 splice 回 context；下一圈再來。這就是 ReAct[^react]（Reasoning + Acting，Yao 等人 2022）定下的範式，而幾乎每一個今天還在出貨的自主 Agent，最內層跑的都是它的後裔。

2026 年這件事被重新命名為「loop engineering」（也有人叫 harness engineering），重點是：當模型本身已經夠強，工程的勝負手從「怎麼寫提示詞」往外移到「怎麼設計這個迴圈」。Reflexion[^reflexion]（2023）在 ReAct 之上加了記憶與自我批判——一次嘗試失敗後，Agent 把一條口語化的教訓寫進 episodic memory，下一圈讀回來。但無論加多少花樣，正式環境裡 Agent 翻車的原因高度集中：沒有硬性停止條件導致無限迴圈、目標定義太鬆讓模型自由發揮、長 session 把 context window 撐爆、以及沒有成本上限。這些都不是模型問題，是迴圈設計問題。值得記住的數字：單體 Agent 的 token 消耗大約是普通 chat 的 4×，多體系統約 15×；在規模化跑平行迴圈時，月帳單衝到七位數並不罕見（截至 2026-06）。

## 規劃模式光譜：延遲、成本、可靠性的三角取捨

如果說迴圈是引擎，規劃模式就是變速箱，而選錯檔位會以可預測的形狀懲罰你——不是延遲、就是成本、就是可靠性。

最左端是純 ReAct：模型一次只想一步、做一步、看結果，再想下一步。它的優點是極度適應動態任務，每一步都能根據前一步的真實 observation 修正方向；代價是每個推理-觀察循環都吃 token、序列化執行讓延遲累積、總成本難以預測。一份 2026 的對比裡，ReAct（GPT-4）在即時分析任務的平均回應時間約 250ms，但任務一旦需要很多步動作，「一個動作一次 LLM call」的模型會讓延遲與 API 成本線性堆疊。經驗法則：互動式的東西先用 ReAct。

往右是 Plan-and-Execute[^plan-execute]：先一次性產出完整計畫，再依序執行各步驟，避免反覆 re-planning。它把主要的 LLM 成本前置到規劃階段，之後執行可以更快更便宜。同一份 2026 對比給的數字頗有說服力——Plan-Execute 的任務完成正確率 92%、ReAct 85%；成本上 Plan-Execute $1.24、ReAct(GPT-4) $2.87。所以當你需要嚴格控制成本、可預測的執行路徑、或次秒級回應時，往這邊走；當你發現 ReAct Agent 對每個請求都在重推同一套計畫時，這就是該換檔的訊號。代價是計畫一旦在中途被現實打臉，純 Plan-and-Execute 不如 ReAct 會轉彎——所以實務上常見的是混合：先規劃骨架、執行時保留局部 re-plan 的權力。

光譜最右端是把「規劃」這件事本身外包出去的 orchestrator–subagent：一個 lead agent 負責拆解與調度，把獨立的子問題丟給各自隔離的 subagent 平行做。這已經不只是規劃模式，而是把單體迴圈長成了一個拓撲，也正是這幾年最大爭論的戰場。

## 框架地景：同一個迴圈，五種長相

「迴圈」聽起來抽象，但它在每個框架裡的具體實作差很多，而且這個差別大到能左右 benchmark。先講那個必須記住的事實：框架選擇能在「同一個模型、同一個任務」上造成最多 30 個絕對百分點的差距。Princeton 的 HAL[^hal]（Holistic Agent Leaderboard）量到 Claude Opus 4 在一個 orchestration scaffold[^scaffold] 下 GAIA[^gaia] 拿 64.9%、換另一個只有 57.6%——這個 gap 比很多前沿模型世代之間的進步還大。換句話說，你看到的 benchmark 數字，一大半是 scaffold 的功勞，不是模型的。

具體到實作：LangGraph[^langgraph] 把迴圈做成有向圖加條件邊，內建 checkpointing 與 time-travel，擅長複雜、有狀態的編排，是持久化最強的一檔。CrewAI 用角色化的 crew 與 process type，學習曲線最低、20 行就能起手，適合多 agent 快速原型。OpenAI Agents SDK（2025-03 取代 Swarm）用顯式 handoff——agent 之間明確地把控制權交棒，API 乾淨但 context variable 預設是 ephemeral。Google ADK（2025-04）用階層式 agent tree，session state 可插拔後端，主打多模態工作流。Anthropic 的 Claude Agent SDK（早於 2026 年初由 Claude Code SDK 更名而來）刻意不把迴圈藏起來：核心 primitive 是一個 async `query()` generator，你給它 system prompt、一組工具、一個目標，它就跑「gather context → take action → verify → repeat」這個迴圈直到模型給出最終答案或撞上停止條件，開發者直接看見並控制這個迴圈，而不是透過 chain/pipeline 抽象層。Microsoft Agent Framework 1.0 在 2026-04-03 GA，把 AutoGen 與 Semantic Kernel 併進同一套 .NET/Python SDK（截至 2026-06）。

地景看起來百花齊放，但它們對「迴圈該怎麼編排」的答案，正在收斂。

## 單體 vs 多體：一場已經有結論的爭論

2025 年中，這還是個火藥味十足的對立。Cognition 在 2025-06 發表〈Don't Build Multi-Agents〉，立場最硬：只走單線程，靠一個獨立的壓縮 LLM 做 context 管理，理由是 naive 多體設定裡 subagent 之間互相看不見對方的工作，協調成本與 context 碎裂會吃掉收益。另一頭，Anthropic 在〈How we built our multi-agent research system〉裡展示了 orchestrator-worker：lead agent 分析查詢、定策略、spawn 平行 subagent 各探一個方向，在內部研究 eval 上以 Claude Opus 4 當 lead、Sonnet 4 當 subagent，比單體 Opus 4 高出 90.2%——但代價是約 15× 的 token premium，這多出來的成本就是「跑平行 subagent、各自有獨立 context window 與工具呼叫」的帳。

學界給了爭論一個收斂的理論底。Tran & Kiela（Stanford / Contextual AI，2026-04，arXiv 2604.02460）證明：在固定的推理 token 預算下、且 context 利用完美時，單體系統在資訊論上更有效率（論證建立在 Data Processing Inequality[^dpi] 上），實測橫跨 Qwen3、DeepSeek-R1-Distill-Llama、Gemini 2.5 三個模型家族，單體在多跳推理上持平或勝過多體。他們點破了關鍵：過去很多「單體 vs 多體」的比較根本不是 apples-to-apples，多體往往因為多了 LLM call、更長的 trace、更多協調步驟而偷偷拿到更多 test-time compute。VentureBeat 把這叫「swarm tax」——你以為買的是智能，其實多付的是稅。

有趣的是連最堅定的反對者也轉向了。Cognition 在 2025-06 喊「別建多體」，九個月後（2026-03）卻出貨了〈Devin can now Manage Devins〉：主 Devin session 當 coordinator，scope 工作、把每塊指派給跑在各自隔離 VM 裡的 managed Devin、監看進度、解衝突、彙整結果。注意這不是打臉，而是收斂——它採用的正是大家殊途同歸的那個模式：orchestrator 擁有完整對話 context，spawn 出 ephemeral subagent，每個 subagent 在全新的 context window 與專屬 system prompt 下執行，做完只回傳「一個壓縮摘要字串」，沒有 peer-to-peer channel、沒有共享可變狀態。GroupChat 式的多體圍坐討論失勢了，Anthropic、OpenAI、Cognition、Microsoft、LangChain 收斂到同一張拓撲。

所以 2026 的工程共識不是「多體 vs 單體選一個」，而是：預設用單體，把 token 預算花在更好的迴圈與 context 工程上；只有當任務「夠大、方向彼此獨立、答案值得這麼多 token」（法律盡調、競品情報、生醫文獻回顧這類高價值研究）才升級成 orchestrator–subagent，且嚴守「subagent 隔離、只回壓縮摘要」這條紀律。15× 的乘數在一切順利時是投資，在 subagent 遞迴 spawn 或工具回傳超大結果時，它能在幾分鐘內燒光一天的預算——這也是為什麼這篇談的「決策迴圈與編排拓撲」，是整個 Agent 服務裡最該先想清楚的一層。

[^react]: ReAct（Reasoning + Acting）是 2022 年 Yao 等人提出的範式，讓模型交錯「思考」與「行動」：先寫一段推理、再發出工具呼叫、接回結果後再推理。它定下了現代 Agent 迴圈的基本骨架，幾乎所有自主 Agent 都是它的後裔。
[^reflexion]: Reflexion 是 2023 年提出的方法，在 ReAct 之上加了「自我反省」：一次嘗試失敗後，Agent 把一條口語化的教訓寫進記憶，下一輪讀回來避免重蹈覆轍，等於讓 Agent 從失敗中學習而不必重新訓練模型。
[^plan-execute]: Plan-and-Execute 是一種規劃模式，先一次把完整計畫想好、再依序執行各步驟，與 ReAct「走一步看一步」相對。它把昂貴的推理成本前置，執行階段更快更可預測，但中途遇到意外時轉彎能力較弱。
[^hal]: HAL（Holistic Agent Leaderboard）是普林斯頓大學維護的 Agent 評測榜，特點是同時量化「模型」與「鷹架（scaffold）」對表現的影響，揭露了同一模型換不同框架可差到 30 個百分點的事實。
[^scaffold]: scaffold（鷹架）泛指包在模型外、驅動 Agent 迴圈的那層程式碼與框架——怎麼組情境、何時呼叫工具、如何重試。它本身就是影響表現的巨大變因，不亞於換模型。
[^gaia]: GAIA 是一套評估通用 AI 助理的基準測試，題目需要 Agent 結合推理、工具使用與多步驟操作才能解出，常被用來衡量 Agent 的真實任務能力。
[^langgraph]: LangGraph 是 LangChain 推出的 Agent 編排框架，把工作流程建模成「有向圖加條件邊」，內建存檔（checkpointing）與時間回溯，擅長複雜、有狀態的長流程，是開源陣營裡持久化能力最強的一檔。
[^dpi]: Data Processing Inequality（資料處理不等式）是資訊論的基本定理，大意是「資料每經過一次處理就不可能憑空增加資訊量」。論文用它論證：把推理拆給多個彼此看不見的子 Agent，資訊在傳遞間流失，因此單體在等預算下更有效率。

---

## 來源

1. [Agentic Loops: From ReAct to Loop Engineering (2026 Guide)](https://datasciencedojo.com/blog/agentic-loops-explained-from-react-to-loop-engineering-2026-guide/) — Data Science Dojo，2026
2. [How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system) — Anthropic Engineering，2025
3. [Don't Build Multi-Agents](https://cognition.com/blog/dont-build-multi-agents) ／ [Devin can now Manage Devins](https://cognition.ai/blog/devin-can-now-manage-devins) — Cognition，2025-06／2026-03
4. [Single-Agent LLMs Outperform Multi-Agent Systems on Multi-Hop Reasoning Under Equal Thinking Token Budgets](https://arxiv.org/abs/2604.02460) — Dat Tran & Douwe Kiela（Stanford / Contextual AI），2026-04
