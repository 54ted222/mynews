---
title: 上線後才是硬仗：RAG 的成本、權限與營運治理
order: 4
date: 2026-04-22
summary: 可靠 RAG 的最後一哩在營運：成本控管、資料分級、權限邊界與版本治理。沒有這些，答對率再高也撐不過真實業務。
keywords: rag cost governance token budget routing, anthropic rag for projects paid plans capacity up to 10x, openai model identifiers prices subject to change april 2025, postgres text search ts_rank_cd cover density, rag pii access control tenant isolation, rag incident response playbook
---

# 上線後才是硬仗：RAG 的成本、權限與營運治理

## TL;DR

- 多數 RAG 的真實失敗點不在「答錯」，而在「成本失控、權限越界、版本不可追蹤」。
- 你需要把成本、權限、索引版本、資料生命週期當成一級功能，而非事後補丁。
- 生產系統至少要有：預算閥值、租戶隔離、索引版本化、事件回應流程。

## 為什麼「答得準」仍然可能把產品拖垮

很多團隊把注意力全集中在回答品質，卻忽略營運層。結果是：

- 查詢量一上來，token 費用爆炸
- 某些租戶看到不該看到的內容
- 文件更新後，舊答案仍引用過期段落
- 發生錯答爭議時，找不到當時的索引版本與檢索證據

這些問題本質上不是 AI 問題，而是軟體治理問題。RAG 只是把它們暴露得更早、更痛。

## 成本治理：不要讓每次提問都走最貴路徑

OpenAI Cookbook 在模型選型指南中明確提醒「價格與 model identifier 會變動」，並且標註資料點僅截至 2025-04[^openai-price-date]。這意味著任何寫死的成本估算都會過期。

所以成本治理要做的是機制，而不是一次性估算：

1. **查詢分級路由**：低風險問題走小模型，高風險問題才升級。
2. **上下文預算**：限制每次檢索帶入片段上限，避免無上限拼接。
3. **快取策略**：熱門問題答案與檢索結果快取，降低重複成本。
4. **預算熔斷**：達到日/週預算上限時切入降級模式。

如果你沒有上述機制，使用量成長不會讓你更成功，只會讓你更快超支。

## 權限治理：RAG 是資料系統，不只是聊天介面

只要是多租戶 B2B 場景，權限就不能靠 prompt 文字約束。你需要在檢索前就做資料面隔離：

- tenant_id 強制過濾
- 文件 ACL[^acl] 與角色映射
- 敏感欄位遮罩或分層索引
- 稽核日誌（誰在何時查了什麼）

Anthropic 的 Projects 說明提到 RAG 模式可以擴充知識容量（描述為可到 10x），這很有價值，但也提醒我們一件事：**容量變大會放大權限治理難度**[^anthropic-projects]。你存得越多，越要精細化隔離與審計。

## 版本治理：可追溯是法律與信任底線

可靠 RAG 至少要能回答三個問題：

1. 這個答案用了哪個文件版本？
2. 檢索與重排用了哪組參數？
3. 當時模型與 prompt 版本是什麼？

若回答不了，就無法做事件鑑識與責任釐清。實作上建議：

- 索引版本號（index_version）
- 文件版本號（doc_version）
- 推論版本號（model/prompt hash）
- 回答附 citation 與 trace id

這些 metadata 看起來瑣碎，但它們會在客訴、法務與內部復盤時救你一命。

## 故障處理：把 incident response 寫成劇本

RAG 生產事故通常不是「系統掛掉」，而是「系統還在回，但回錯」。所以 runbook[^runbook] 需要特別針對內容錯誤：

- **P1**：敏感資料外洩或跨租戶洩漏 → 立即停用相關索引與功能
- **P2**：高風險領域錯答（法務/財務） → 強制人工審核通道
- **P3**：一般內容錯誤率上升 → 切回保守檢索策略並啟動回歸測試

同時要保留「一鍵回退」能力：回到上一版索引、上一版 reranker、上一版 prompt。沒有回退按鈕，再好的監控都只是事後知道你壞掉了。

## Postgres 世界的實務優勢：把治理與查詢放在同一平面

PostgreSQL 既有全文檢索、排名函數（如 `ts_rank_cd`）與成熟權限模型，代表你可在同一資料平面同時處理 keyword 搜索、資料隔離與審計[^postgres-ts]。這不代表你永遠不用外部引擎，但它讓你在早中期有一個更少系統邊界的可控起點。

真正的優勢是運維簡化：備份、監控、權限策略、變更流程可以沿用既有資料庫治理，避免早期就把團隊拖進多套資料基礎設施。

## 結語：可靠 RAG 是一套治理系統，不只是演算法管線

當我們談「可靠」，其實在談兩種可靠：

1. **技術可靠**：召回與回答品質可量化、可提升。
2. **營運可靠**：成本可控、權限可證明、事故可回應。

只做第一種，你會在公司內部 demo 很亮眼，但難以變成可商業化能力。兩種都做，RAG 才能從一個 feature 變成長期競爭力。

[^openai-price-date]: OpenAI Cookbook 文件明確註記價格與 model identifier 的時間切點，提醒成本規劃必須持續更新。
[^acl]: ACL（access control list）是針對資源定義誰可讀、可寫、可管理的權限清單，是多租戶檢索系統的基本保護。
[^anthropic-projects]: Anthropic Help Center 提到 Projects 的 RAG 能擴充知識容量，這代表能力上限提高，也同步放大資料治理需求。
[^runbook]: Runbook 指故障處理標準作業文件，定義告警、分級、回退與溝通流程，避免事故時臨場 improvisation。
[^postgres-ts]: PostgreSQL 官方文件說明了 text search 函數與 `ts_rank_cd` 等排名能力，可作為 hybrid 檢索中的 keyword 路徑基礎。

---

1. [Retrieval Augmented Generation (RAG) for Projects](https://support.anthropic.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects) — Anthropic Help Center, 更新於 2026
2. [Practical Guide for Model Selection for Real‑World Use Cases](https://developers.openai.com/cookbook/examples/partners/model_selection_guide/model_selection_guide) — OpenAI Cookbook, 截至 2025-04 註記
3. [Text Search Functions and Operators](https://www.postgresql.org/docs/current/functions-textsearch.html) — PostgreSQL Documentation, 存取於 2026-04-22
4. [pgvector README](https://github.com/pgvector/pgvector/blob/master/README.md) — pgvector on GitHub, 存取於 2026-04-22
