---
title: 最後一道防線：哪些決策必須留在人手上
order: 4
date: 2026-04-22
summary: 速度可以交給 AI，但架構、資料、資安與上線責任不能外包；真正成熟的流程是讓人類把守高風險閘門。
keywords: production database migration ai agent risk, terraform destroy claude code incident datatalks club, staging verification checklist before release, rollback strategy for ai generated code, human in the loop deployment approvals, release train CI gate policy, security review before merge
---

# 最後一道防線：哪些決策必須留在人手上

## TL;DR

- AI 可以自動完成很多技術動作，但高風險決策仍需人類簽核。
- 真實事故已證明：把 infra / migration 的最終執行權完全交給 agent，代價可能是生產資料。
- 「幾天交付」要成立，前提是你把風險分級，並設計不能被跳過的人類關卡。

## 為什麼你一定要保留「人工最終確認」

當我們談 AI 提速，最容易忽略的是責任邏輯。模型可以根據當下可見資訊做出最合理下一步，但它不承擔業務後果；承擔後果的是你和團隊。因此，高風險操作若沒有人工閘門，本質上就是把不可逆風險外包給一個不承擔責任的執行體。

這個觀點不是抽象倫理，而是工程現實。資料刪除、schema migration、權限變更、金流切換、第三方 webhook 生效——這些都屬於「一旦錯誤就難回復」的操作。這類操作可由 AI 準備 plan，但最終 apply 應由人類執行。

## 事故不是證明 AI 無用，而是證明治理必要

2026 年初最被討論的案例之一，是 DataTalks.Club 相關的 Terraform 事件：公開敘述指出，agent 在基礎設施操作過程中觸發高破壞性動作，造成生產環境受損與資料風險，後續靠雲端供應商支援才恢復。[^datatalks]

這件事給的教訓很務實：

- 問題不只在模型，也在權限邊界
- 問題不只在命令，也在沒有「必經人工確認」
- 問題不只在單次事故，也在缺少可演練的回滾機制

換句話說，這不是「以後別用 AI」；而是「要把 AI 放進有護欄的制度內」。

## 哪些事情可以自動，哪些必須人工

你可以用一個簡單矩陣來分級：可逆性 × 影響範圍。

- **高可逆、低影響**：可高度自動（重構、樣式調整、測試補齊）
- **低可逆、低影響**：半自動（小範圍資料修補，需 reviewer）
- **高可逆、高影響**：自動 + 強 CI（多服務重構）
- **低可逆、高影響**：必須人工（DB migration apply、infra destroy/apply、金流與權限策略）

這種分級可以寫進 hooks 或部署規則。重點是：**讓系統先天區分「能交給 AI」與「只能由人核准」**，而不是每次憑感覺判斷。

## 上線前真正該問的五個問題

在 Day 7 準備發布前，我建議強制通過五問：

1. 這次變更若失敗，最壞情境是什麼？
2. 回滾步驟是否寫成可執行清單？
3. 有沒有 staging 用真實資料量跑過關鍵路徑？
4. 是否有新增不可觀測區域（缺 log、缺告警）？
5. 是否存在「只有某個人知道怎麼救」的單點知識？

這五問的功能是把「我覺得可以上」改成「可驗證可以上」。在 AI 時代，這種轉換比任何模型升級都更重要。

## 幾天完成中大型專案的正確結論

所以，回到最初問題：幾天可不可以完成中大型專案？答案是——**可以完成一個中大型專案的高價值切片，而且可以在 7 天左右做到有品質地交付**。但前提是你願意把快速實作與風險治理一起設計。

當你把 spec、test、hooks、review、CI、staging、與人工閘門串成固定流程，AI 會是放大器；沒有這些，AI 只會是加速器，把錯誤更快送到生產環境。

速度從來不是目標本身。能被持續重複、可承受失敗、且對使用者安全的交付，才是你真正要追求的完成。

[^datatalks]: 多個公開來源（含當事人公開貼文與社群討論）描述該事件涉及 Claude Code 與 Terraform 操作造成生產資料風險，並引發對代理權限與保護機制的廣泛檢討。

---

1. [Alexey Grigorev on DataTalks incident (LinkedIn post)](https://www.linkedin.com/posts/agrigorev_claude-code-wiped-our-production-database-activity-7435655485380263936-IoPn) — LinkedIn, 2026-03（2026-04 查閱）
2. [DataTalks.Club lost 2.5 years of data to Claude Code](https://www.reddit.com/r/ClaudeAI/comments/1rxkm3c/datatalksclub_lost_25_years_of_data_to_claude/) — Reddit r/ClaudeAI, 2026-03
3. [Hooks reference](https://docs.anthropic.com/en/docs/claude-code/hooks) — Anthropic Docs, 2026-04 查閱
4. [Common workflows](https://docs.anthropic.com/en/docs/claude-code/tutorials) — Anthropic Docs, 2026-04 查閱
