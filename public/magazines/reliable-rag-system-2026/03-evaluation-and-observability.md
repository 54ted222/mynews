---
title: 沒有評測就沒有可靠性：RAG 的離線評估與線上觀測
order: 3
date: 2026-04-22
summary: RAG 品質不能只看使用者抱怨，必須建立題庫、標註、檢索指標與線上告警，才能在版本迭代時持續提升而不是來回退步。
keywords: pinecone rag evaluation precision recall mrr, llamaindex retrieval evaluation ranking metrics, rag offline eval dataset design, contextual retrieval failure rate metric top-20 chunks, rag observability citation groundedness, rag canary release evaluation
---

# 沒有評測就沒有可靠性：RAG 的離線評估與線上觀測

## TL;DR

- RAG 若只靠線上體感，幾乎一定會退化；你需要離線評測集與固定指標。
- 先把問題拆成「檢索品質」與「回答品質」兩個迴路，避免混在一起盲調。
- MRR、Recall@K、Precision@K、groundedness 與拒答率要一起看，單一指標都會誤導。

## 為什麼 RAG 團隊常陷入「改了很多，品質沒變」

常見場景是這樣：你換了 embedding、調了 chunk、加了 reranker，甚至改了 prompt，結果線上回饋仍然忽好忽壞。問題通常不是工程師不努力，而是沒有把系統分層量測。

RAG 的品質至少有兩層：

1. **檢索層**：是否找到該找的證據。
2. **生成層**：是否忠實使用證據回答。

若你不分層，任何改動都可能互相抵消。這也是 Pinecone 在 RAG evaluation 教學裡一直強調的：不要等客戶先告訴你壞掉了，先用程序化指標監控 recall、precision、MRR 與答案事實性[^pinecone-eval]。

## 離線評測集：可靠性的地基

我建議從「30–100 題高價值查詢」開始，而不是一次做到完美。每題至少包含：

- query
- 期望命中的文件或段落 ID
- 可接受答案範圍
- 風險等級（一般、敏感、高風險）

題庫來源優先順序：

1. 真實客服與站內搜尋 query（匿名化後）
2. 產品 PM/客服整理的高痛點問題
3. 長尾與對抗式問題（錯字、縮寫、舊版名稱）

關鍵在「版本化」。每次資料更新、索引重建、模型替換都要跑同一份基準集，才能知道你是進步還是退步。

## 指標組合：不要只看單一分數

### 檢索層指標

- **Recall@K**：該出現的證據有沒有進前 K。
- **Precision@K**：前 K 有多少是相關證據。
- **MRR**：第一個正確結果排名是否夠前。

Pinecone 對 MRR 的定義很清楚：它反映第一個相關結果的位置，越接近 1 越好[^pinecone-mrr]。這在問答型產品很關鍵，因為使用者通常只看前幾個結果。

### 生成層指標

- **Groundedness / Faithfulness**：回答是否能被證據支持。
- **Citation completeness**：關鍵陳述是否有來源。
- **Refusal quality**：證據不足時是否保守拒答。

Anthropic 在 Citations API 的發布文提到，內部評估顯示內建 citation 能提升 recall accuracy（最高可達約 15%）[^anthropic-citation]。你不一定要用同一家工具，但這個訊號很重要：**可追溯性本身就是品質能力**。

## 觀測設計：線上要看什麼

離線分數高，不代表線上一定穩。你至少要有這些儀表：

- P50/P95 延遲（拆分：檢索、重排、生成）
- 每查詢 token 成本與總成本
- 無證據回答比例
- 拒答率與人工轉接率
- 熱門 query 漂移（昨天命中、今天漏掉）

我推薦用「查詢類型分桶」看指標：產品 FAQ、法規條款、技術錯誤碼、價格政策。不同桶的最佳參數通常不同，混著看平均值會掩蓋真問題。

## 迭代機制：每次改動都要可回放

可靠 RAG 迭代流程應至少包含：

1. 新版本（embedding/chunk/reranker/prompt）在離線評測集比較
2. 只要有關鍵桶退步，禁止全量發布
3. 線上先 canary 小流量，觀察 24–72 小時
4. 留存樣本做誤差分析並回灌題庫

這套流程看似慢，但長期會更快。因為你不再靠「這週感覺比較好」做決策，而是有可回放證據。

## 一個容易被忽略的重點：評測資料也會過期

許多 RAG 團隊做了題庫就放著不動，半年後指標仍很漂亮，但使用者已經在問新的問題。資料分布變了，舊題庫就不再代表現況。

建議至少每月做一次：

- 新增近期高頻 query
- 淘汰已失效問題
- 重標記政策或產品變更相關題目

評測不是一次性專案，而是產品營運的一部分。沒有這層紀律，RAG 可靠性會隨著內容更新逐步崩塌。

## 結語：把「可驗證」當核心功能，而不是附加功能

RAG 最危險的錯覺是：回答像人話就等於可靠。真正可靠的系統必須可驗證、可回放、可回退。從工程管理角度，這其實是好消息：可靠性不是玄學，而是可以被流程化與制度化的能力。

當你的團隊開始用同一份評測集討論改動，開始以指標而非直覺做決策，RAG 才真正從「功能」升級成「基礎設施」。

[^pinecone-eval]: Pinecone 在 RAG evaluation 指南中強調以程序化指標（precision、recall、faithfulness 等）持續監控，而非等使用者先回報問題。
[^pinecone-mrr]: Pinecone 對 MRR 的說明指出其核心是「第一個相關結果的位置」，特別適合問答與快速決策場景。
[^anthropic-citation]: Anthropic 在 2025-01-23 的 Citations API 發布文提到，內建引用在內部評估中可提升 recall accuracy。

---

1. [RAG Evaluation: Don’t let customers tell you first](https://www.pinecone.io/learn/series/vector-databases-in-production-for-busy-engineers/rag-evaluation/) — Pinecone, 存取於 2026-04-22
2. [Introducing Citations on the Anthropic API](https://www.anthropic.com/news/introducing-citations-api) — Anthropic, 2025-01-23
3. [Evaluating - LlamaIndex Docs](https://docs.llamaindex.ai/en/stable/module_guides/evaluating/) — LlamaIndex Documentation, 存取於 2026-04-22
4. [Contextual Retrieval](https://www.anthropic.com/engineering/contextual-retrieval) — Anthropic Engineering, 2024-09-19
