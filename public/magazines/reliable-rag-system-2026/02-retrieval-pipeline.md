---
title: 召回要穩，不是只靠向量：Chunk、Hybrid、Rerank 的實戰管線
order: 2
date: 2026-04-22
summary: 把 chunk、BM25、向量檢索、重排拆成可調參的流水線，才能把 RAG 的答題品質從「看運氣」變成可持續優化的工程系統。
keywords: pgvector halfvec storage 2 dimensions plus 8 bytes, hnsw ef_search higher recall at the cost of speed, nvidia hybrid search rrf weighted, contextual retrieval bm25 embeddings reranking, rag chunking overlap strategy production, reciprocal rank fusion rag
---

# 召回要穩，不是只靠向量：Chunk、Hybrid、Rerank 的實戰管線

## TL;DR

- 生產級 RAG 的關鍵不是「有向量庫」，而是把檢索拆成 chunk→初步召回→融合→重排的可觀測管線。
- 只做 dense retrieval 很容易漏掉代碼、型號、錯字與關鍵詞；Hybrid 幾乎是預設值。
- pgvector 的 HNSW、halfvec、查詢參數是重要旋鈕，但必須用評測資料集來調，不要靠體感。

## 先承認現實：向量檢索不是萬能召回器

在產品早期，很多人用 dense retrieval 的原因很簡單：實作最快、demo 效果常不錯。但一上真實資料，問題就來了。尤其知識庫含有型號、錯誤碼、法規條文、SKU、縮寫與跨語言術語時，單靠向量常漏關鍵片段。

Anthropic 的 Contextual Retrieval 文章用工程數據把這件事講清楚：BM25 與 embeddings 互補，加入 contextual 化與 reranking 後，top-20 chunk retrieval failure rate 可顯著下降（文中提到 67% 的改善）[^anthropic-67]。這個重點不是「某方法最好」，而是提醒你要把召回設計成**多路徑競爭**，而非單一路徑獨裁。

## 一條可落地的檢索管線（Node + Postgres 版本）

### 1) Chunking：先為檢索服務，不是為模型服務

chunk 策略應該先服務召回，再服務生成。實務上可先定一個「可評測」起始點：

- chunk size：400–900 tokens（依文件型態分群）
- overlap：10–20%
- metadata：文件版本、租戶、章節標題、時間戳

最重要的是**保留 parent-child 關係**。回答階段可以送子片段給模型，但 debug 與引用時，你需要能回溯原始段落與文件版本，否則無法追責。

### 2) Candidate generation：同時跑 sparse + dense

這一步我建議固定採雙路召回：

- sparse：Postgres `tsvector/tsquery` 路徑（BM25 風格可透過外掛或外部服務補強）
- dense：pgvector HNSW 或 IVFFlat 路徑

NVIDIA Blueprint 在設定層直接提供 `APP_VECTORSTORE_SEARCHTYPE: "hybrid"` 與 weighted 模式，甚至內建 RRF 思路，這在生產實務非常合理[^nvidia-rrf]。因為你真正需要的是穩定性，不是某單一路徑排行榜。

### 3) Fusion：先粗排，再進重排

融合策略可以從 RRF 開始，理由是它對分數尺度不敏感，實作成本低、可快速上線。等你累積評測資料後，再切 weighted fusion 或 query-aware 動態權重。

常見的做法：

- dense top-k = 30
- sparse top-k = 30
- RRF fuse 成 40
- reranker 選前 8–12 片段送生成

這個流程的價值是把檢索誤差集中在可量測層面，而不是讓生成模型直接背鍋。

### 4) Rerank：把「有關」與「真的回答問題」分開

很多團隊卡在這裡：召回到的片段看似相關，但不夠回答問題。Reranker 的任務就是把這兩件事拆開處理。它比大模型便宜，且在 latency 成本上更可控。

你不一定要一開始就上重模型 rerank。可以先從小 reranker + 嚴格 prompt 的方式開始，關鍵是要把 rerank 分數與最終回答品質綁定觀測，不然很快會變成盲調。

## pgvector 旋鈕：可靠性通常卡在這裡

pgvector 的 README 有幾個常被忽略、但與穩定性直接相關的點：

- HNSW 的 `ef_search` 提高可改善 recall，但會犧牲查詢速度[^pgvector-ef]
- `halfvec` 可降低儲存成本（README 直接列出儲存公式）[^pgvector-halfvec]
- HNSW 與 IVFFlat 都有參數區間，不是「開了就最好」

這代表兩個工程結論：

1. 你需要**延遲-召回雙軸儀表板**，不是只看平均延遲。
2. 你需要**查詢分群**（FAQ、長尾、錯字、專有名詞）來調參，不然同一組參數一定顧此失彼。

## 可靠管線的失敗回退策略

即便管線做得好，也一定有失敗 query。重點是失敗時怎麼處理。

我建議至少要有三層回退：

- **檢索回退**：dense 太弱時提高 sparse 權重，反之亦然。
- **答案回退**：證據不足時拒答或回「需更多資訊」，不要硬編。
- **產品回退**：高風險問題（法務、醫療、財務）強制人工審核流程。

這三層能把錯誤從「模型幻覺」變成「受控失敗」，這就是可靠工程與 demo 工程的差別。

## 一個務實的推進順序

若你現在是 0 到 1，推薦這個順序：

1. 先做 hybrid（dense+sparse）
2. 再上簡單 RRF 融合
3. 再加 reranker
4. 最後才開始精細化 chunk 與多模型策略

很多團隊反過來，先花大量時間微調 chunk size，卻沒有基礎 hybrid 路徑，導致優化空間非常有限。可靠 RAG 的核心邏輯是：先把結構做對，再做參數精修。

[^anthropic-67]: Anthropic 在 Contextual Retrieval 工程文章中展示了 contextual embedding、BM25 與 reranking 的組合改善幅度，核心訊息是混合檢索顯著降低漏檢。
[^nvidia-rrf]: NVIDIA RAG Blueprint 文件把 hybrid、RRF 與 weighted hybrid 做為標準配置，反映產業實務對多路徑召回的需求。
[^pgvector-ef]: pgvector README 說明 `ef_search` 提升可增加 recall，但會以速度做交換。
[^pgvector-halfvec]: pgvector README 提供 halfvec 儲存公式（每向量約 `2 * dimensions + 8` bytes），可用於估算儲存成本與索引大小。

---

1. [pgvector README](https://github.com/pgvector/pgvector/blob/master/README.md) — pgvector on GitHub, 存取於 2026-04-22
2. [Enable Hybrid Search Support for NVIDIA RAG Blueprint](https://docs.nvidia.com/rag/2.5.0/hybrid_search.html) — NVIDIA Docs, 存取於 2026-04-22
3. [Contextual Retrieval](https://www.anthropic.com/engineering/contextual-retrieval) — Anthropic Engineering, 2024-09-19
4. [Text Search Functions and Operators](https://www.postgresql.org/docs/current/functions-textsearch.html) — PostgreSQL Documentation, 存取於 2026-04-22
