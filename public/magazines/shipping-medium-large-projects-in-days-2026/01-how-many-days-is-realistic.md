---
title: 幾天到底可不可能？先定義你說的「完成」是什麼
order: 1
date: 2026-04-22
summary: 想在幾天內做出中大型專案，第一步不是排工，而是先把「完成」拆成可驗收的最小商業切片，否則時程討論沒有意義。
keywords: Claude Code best practices small testable increments, CLAUDE.md init command workflow, what is vertical slice software delivery, MVP vs production readiness checklist, plan mode read only codebase analysis, software project acceptance criteria template, medium large project 7 day sprint
---

# 幾天到底可不可能？先定義你說的「完成」是什麼

## TL;DR

- 「幾天做完中大型專案」不是二選一問題，而是**你把完成定義在哪一層**。
- 真正可複製的做法，是用 7 天交付一條可收斂的垂直切片，而不是整個系統一次到位。
- 若沒有先寫驗收條件，AI 只會加速產生「看起來完成」的錯覺。

## 先拆開三種完成：可 demo、可上線、可維運

很多團隊在估時就已經輸了，原因不是技術，而是語言。你說「完成」，PM 想的是流程能跑；工程師想的是 bug 不會爆；營運想的是出了事能回滾。三種都叫完成，但工時完全不同。

在 AI 輔助開發情境，這個落差會被放大。因為第一版畫面、API、資料表很快就能被生出來，團隊容易把「可 demo」誤認成「可上線」。Anthropic 的實務建議反覆強調 small, testable increments，本質就是避免你在語意上把不同層級的完成混在一起：先定義一個可驗證切片，跑通，再擴張。[^small-steps]

因此，如果你問「幾天能做完中大型專案」，比較精準的問法其實是：**幾天能交付一個可驗收、可回滾的中大型專案切片**。這個問題才有工程解。

## 為什麼是「7 天切片」而不是「7 天整包」

以單一產品功能線來看，7 天是一個務實窗口：短到可以維持高頻決策，長到足以涵蓋規格、實作、驗證、與上線前檢查。你可以把它看成一個最小作戰單位：

1. 規格與邊界（Day 0）
2. 地基與護欄（Day 1）
3. 垂直切片迭代（Day 2–4）
4. 穩定化與除錯（Day 5）
5. Staging 驗證（Day 6）
6. PR/CI 與發布（Day 7）

這個節奏的核心不在於日曆，而在於順序。當你把規格、測試、檢查點往前拉，後面的速度才不會變成返工債。反過來說，如果 Day 1 就直接「把整個系統做完」，看似快，通常會在 Day 5 之後用倍數時間償還。

## 用垂直切片定義中大型，不用檔案數定義中大型

「中大型」常被誤解成檔案很多、功能很多。實際上更有用的判準是：**是否跨越至少三層責任邊界**，例如登入流程同時碰到 UI、API、資料存取與權限規則。只要跨層，風險就不是加法，而是乘法。

所以第一個 7 天週期不該追求功能面積，而是追求責任閉環：一條從輸入到輸出的真實路徑，包含失敗處理、最小監控、與可重跑測試。這也是官方工作流把 Plan、Implement、Verify 分成獨立節點的原因：切片要能被驗證，不只是能被展示。[^workflows]

## 如果你真的要估時，請用這個公式

可用的估時方式不是「功能點數 × AI 倍速」，而是：

**總工時 = 規格澄清 + 首次切片 + 護欄建置 + 回歸驗證 + 發布風險處理**。

其中只有「首次切片」會被 AI 明顯壓縮；其他四項若沒做，速度會反噬。這也是為什麼很多「兩天做完」的分享，在一週內就出現第二篇「修到崩潰」：他們省掉的不是瑣事，是保命步驟。

## 你要追求的不是最快，而是最短閉環

對獨立開發者或小團隊來說，最實際的 KPI 不是「今天寫了多少檔案」，而是「多久能完成一個從規格到驗收的閉環」。閉環越短，你越能在真實回饋裡修正方向；閉環越長，你越容易在錯的方向上高效率衝刺。

所以答案不是「中大型專案一定要幾天」，而是：**在有驗收標準、可回滾、可測試的前提下，7 天交付一條高價值切片，通常是合理且可複製的上限起點**。接著再用第二個、第三個 7 天週期疊出真正的中大型系統。

[^small-steps]: Anthropic 在 Claude Code best practices 與 workflow 文件都強調把任務拆成可測試小步驟，而不是一次要求完整系統。

[^workflows]: Claude Code 文件中的 common workflows 將多步驟開發拆成規劃、實作、驗證與審查流程，核心目的是可驗證性與可回滾性。

---

1. [Claude Code: Best practices for agentic coding](https://www.anthropic.com/engineering/claude-code-best-practices) — Anthropic, 2025-12-11（2026-04 查閱）
2. [Common workflows](https://docs.anthropic.com/en/docs/claude-code/tutorials) — Anthropic Docs, 2026-04 查閱
3. [Claude Code overview](https://docs.anthropic.com/en/docs/claude-code/overview) — Anthropic Docs, 2026-04 查閱
