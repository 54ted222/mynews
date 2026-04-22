---
title: 先畫邊界再上技術：可靠 RAG 的架構決策樹
order: 1
date: 2026-04-22
summary: 可靠 RAG 的第一步不是選框架，而是先決定長上下文、RAG、混合式三種路徑的切換邏輯，避免把所有問題都丟給向量檢索。
keywords: contextual retrieval 200000 tokens anthropic, RAG architecture decision tree long context, text-embedding-3-large 3072 dimensions, embeddings normalized to length 1 cosine euclidean, pgvector hnsw ef_search recall tuning, rag when to avoid overengineering
---

# 先畫邊界再上技術：可靠 RAG 的架構決策樹

## TL;DR

- 可靠 RAG 的起點不是「先建向量庫」，而是先定義**什麼情境不用 RAG**、什麼情境必須 RAG。
- 知識量小、更新慢、權限簡單時，長上下文常比 RAG 更穩；規模上來後再引入檢索與重排。
- Postgres + pgvector 的價值在於可治理與可遷移，不在於它神奇；你仍需要明確的切換策略與失敗回退路徑。

## 為什麼多數 RAG 專案一開始就走偏

很多團隊做 RAG 的流程是：先切 chunk、先做 embedding、先建索引，再來看結果好不好。這個流程的問題是，它把「是否需要 RAG」這個最關鍵的商業與工程決策直接跳過。結果通常是系統變複雜，但品質沒有同步提升。

Anthropic 在 Contextual Retrieval 文章裡給了一個很實際的提醒：若你的知識庫小於約 200,000 tokens（約 500 頁），很多案例可以直接把知識放進 prompt，不一定要上 RAG[^anthropic-200k]。這不是反對 RAG，而是提醒我們：**架構要跟資料規模對齊，不是跟技術潮流對齊**。

我建議先把問題切成三層：

1. **資料規模**：單次查詢需要覆蓋多少文件？
2. **資料變動率**：內容是每月改一次，還是每天都在變？
3. **權限複雜度**：是否有租戶隔離、角色差異、敏感資料限制？

如果這三層都偏低，長上下文會比 RAG 更直覺，且 debug 成本更低。反之，只要規模或權限複雜度上來，RAG 才會開始顯現結構性優勢。

## 一個可落地的架構決策樹

### 路徑 A：長上下文優先（Small KB）

適用條件：

- 內容總量不大（可控在單次上下文範圍）
- 更新頻率低
- 權限模型簡單（少量 role 或單租戶）

這條路徑的優點是系統簡單、可預期，缺點是內容一變大就會碰到 token 成本與延遲上升。它適合作為 MVP[^mvp] 起點，但不要把它當終點。

### 路徑 B：Hybrid RAG（成長期）

適用條件：

- 文件規模上升，單次無法全量帶入
- 查詢多樣，既有關鍵字查詢也有語意查詢
- 需要對召回失敗做可調參優化

這時候推薦 BM25 + dense retrieval + rerank 的混合式路徑。NVIDIA 的 RAG Blueprint 直接把 hybrid + RRF（Reciprocal Rank Fusion）與 weighted hybrid 當成一級配置，實務上就是告訴你：只靠單一路徑很難穩定[^nvidia-hybrid]。

### 路徑 C：RAG + 治理層（成熟期）

適用條件：

- 多租戶與資料分級
- 合規要求與可追溯性
- 成本與延遲有 SLO[^slo] 要求

這一層的關鍵不是再換一套檢索器，而是補治理：版本化索引、可追溯 citation、可回放評測集、分層快取、風險控制與審計日誌。

## Node + Postgres + pgvector 的合理性在哪裡

很多人問：為什麼不是先上 managed 向量資料庫？答案不是「managed 不好」，而是你需要先知道自己在換什麼。

選 Postgres + pgvector 的核心利益有三個：

- **單一資料平面**：交易資料、權限邏輯、檢索索引在同一個治理面。
- **可觀測與可調參**：SQL 與資料庫指標能直接串到既有監控。
- **可遷移**：必要時可把檢索層抽離，不會一開始就綁死在單一供應商。

pgvector README 也清楚揭示了它是「近似搜尋可調參」而非自動魔法。例如 HNSW 的 `ef_search` 拉高會提升 recall 但犧牲速度；`halfvec` 可降低儲存成本；不同 distance operator 直接對應不同相似度語意[^pgvector-ops]。這些都代表：可靠性來自你對旋鈕的理解，不是套件名字。

## 嵌入模型的選擇：先看可控性，不要只看榜單

OpenAI 在 2024-01-25 發布 `text-embedding-3-small` 與 `text-embedding-3-large`，並在公告裡提供了 MIRACL、MTEB 的對照數據與 `dimensions` 可縮短能力（例如 3072 縮成 1024）[^openai-embedding]。很多團隊會把這件事理解為「先上 large 再說」。

但產品角度要反過來想：

- 你的召回瓶頸是向量品質，還是 chunk 策略？
- 你是被 recall 卡住，還是被 latency/cost 卡住？
- 你是否真的需要更高維度，還是先把重排做好更有效？

另外，OpenAI Embeddings FAQ 提醒一件常被忽略的事：embeddings 已做 length-1 normalization，因此 cosine 與 Euclidean 在排序上可等價[^openai-faq]。這讓你在資料庫側選距離函數時，可以把重點放在工程一致性與執行效能，而不是神祕玄學。

## 可靠性的第一性原則：可回退、可解釋、可替換

最後，真正的架構品質不在「你用了哪些新名詞」，而在三件事：

1. **可回退**：檢索失敗時是否有 fallback（例如熱門 FAQ、規則式答案、或保守拒答）？
2. **可解釋**：每次回答是否帶來源與檢索路徑，能讓你 debug 錯誤？
3. **可替換**：embedding 模型、reranker、向量索引是否可替換，而不是全面重寫？

如果這三件事做不到，你的 RAG 只是把不確定性包裝得更漂亮。相反地，若先畫好邊界與切換條件，再上技術細節，RAG 才會是一套可長期演進的產品能力。

[^anthropic-200k]: Anthropic 在 Contextual Retrieval 文中指出，知識庫較小時可以直接使用長上下文，不必立即導入 RAG。這不是否定 RAG，而是強調架構要隨規模切換。
[^mvp]: MVP（minimum viable product）指最小可行產品，目標是最短時間驗證需求而非一次做滿所有能力。
[^nvidia-hybrid]: NVIDIA RAG Blueprint 文件把 hybrid、RRF 與 weighted hybrid 做成可配置選項，反映實務上常需混合檢索策略。
[^slo]: SLO（service level objective）是系統目標，如 P95 延遲、可用性或錯誤率，用來約束工程取捨。
[^pgvector-ops]: pgvector 提供 `vector`、`halfvec` 與 HNSW/IVFFlat 等索引能力，且不同距離運算子（L2、cosine、inner product）對應不同檢索行為。
[^openai-embedding]: OpenAI 在 2024-01-25 公告新 embedding 模型，並說明 `text-embedding-3-large` 可到 3072 維且支持縮短 dimensions。
[^openai-faq]: OpenAI Embeddings FAQ 指出 embeddings 為 length-1 normalization，因此 cosine 與 Euclidean 會得到相同排序。

---

1. [Contextual Retrieval](https://www.anthropic.com/engineering/contextual-retrieval) — Anthropic Engineering, 2024-09-19
2. [New embedding models and API updates](https://openai.com/index/new-embedding-models-and-api-updates/) — OpenAI, 2024-01-25
3. [Embeddings FAQ](https://help.openai.com/en/articles/6824809-embeddings-frequently-asked-questions) — OpenAI Help Center, 更新於 2026
4. [pgvector README](https://github.com/pgvector/pgvector/blob/master/README.md) — pgvector on GitHub, 存取於 2026-04-22
