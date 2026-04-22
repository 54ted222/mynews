---
title: 可靠不是自動附送：把測試、hooks、review、CI 變成硬護欄
order: 3
date: 2026-04-22
summary: AI 可以讓實作變快，但可靠性要靠機制強制；TDD、小步提交、hooks、review 與 CI 是避免「假完成」的最低組合。
keywords: Claude Code hooks PreToolUse PostToolUse example, test driven development agentic coding anthropic, small step commit workflow with CI, code reviewer subagent security checklist, debugger subagent failing test root cause, checkpoint rewind claude code, build verify before merge
---

# 可靠不是自動附送：把測試、hooks、review、CI 變成硬護欄

## TL;DR

- AI 時代最大的風險不是「寫不出來」，而是「看起來成功但其實沒驗證」。
- TDD + hooks + review + CI 不是流程負擔，而是防止錯誤擴散的保險絲。
- 你要防的不是模型犯錯本身，而是錯誤在沒有被發現的情況下進入主線。

## 先講殘酷事實：速度會放大你的好習慣，也會放大壞習慣

在傳統開發裡，壞習慣有時因為速度慢而被「自然減害」。AI 進來後，這個緩衝消失。你可以一天改 20 個檔案，代表你也可能一天把 20 個錯誤一起推進去。

所以可靠性不能靠提醒，要靠強制。Anthropic hooks 文件提供的正是這種機制：在 `PreToolUse` 先擋危險操作，在 `PostToolUse` 對 `Edit` 或 `Write` 後自動跑格式化、lint、測試或自訂檢查。[^hooks]

這件事的本質是「把工程判斷提前」。與其等 PR 才發現問題，不如每次改動就即時回饋。

## TDD 在 AI 場景更重要，不是更可有可無

很多人把 TDD 當選修，認為 AI 都能自己修。實務上剛好相反：因為 AI 會快速生成「貌似完整」的程式，測試成了唯一能客觀告訴你「真的符合需求」的訊號。

Anthropic 的 best practices 直接建議把需求轉成測試，並用小步驟讓模型只做「剛好讓測試通過」的最小改動。這樣做的好處很現實：

- 失敗可定位（知道是哪個切片壞掉）
- 回歸可重跑（不是靠人工記憶）
- 功能邊界清楚（避免隱性擴需求）

當你的目標是幾天內交付中大型切片，沒有這組機制，很容易在 Day 4 之後進入「功能越加越多、信心越來越低」的混亂狀態。

## 用角色分工抵抗上下文污染

除了測試，另一個常見問題是上下文污染：同一個對話既談需求、又追 log、又修錯、又審安全，最後誰都做得不完整。subagents 的設計正是為了解這個問題。

你可以讓 code-reviewer 專看命名、錯誤處理與安全；讓 debugger 專跑測試只回根因；主代理只負責整體決策。Anthropic 文件明確提到 subagent 以獨立 context window 工作，目的就是降低主線對話被大量細節淹沒。[^subagents]

這種分工不是大團隊專利。對一人團隊更重要，因為你同時扮演太多角色，若沒有機制切換，就會在判斷品質上崩潰。

## CI 的作用：把「我本機沒問題」變成可重現事實

就算本地測試全綠，也不代表可合併。CI 的價值在於提供一致、可重現、與與人無關的驗證環境。這點在 AI 開發更重要，因為變更密度高、提交頻率快，單靠人工難以保持一致。

你至少要有三層門檻：

1. 提交前本地檢查（lint + unit tests）
2. PR 層級整合檢查（integration + type/build）
3. 合併前人工 review 清單（風險、回滾、資料影響）

當這三層固定，你才有資格說「done」。否則 done 只是對話中一句結束語，不是工程狀態。

## 最小可行護欄：三天內就能補齊

如果你現在還沒有完整流程，不必等大改版。最小可行版本可以在 2–3 天補上：

- Day A：補 hooks（危險命令阻擋 + 寫檔後 lint/test）
- Day B：把核心流程測試化（至少一條端到端）
- Day C：把 PR 模板固定為「變更摘要 / 風險 / 回滾 / 手動驗證」

做完這三件事，你的開發速度不一定看起來更快，但交付可靠度會立刻改善。這正是「幾天內做出中大型專案」能否變成長期能力的分水嶺。

[^hooks]: hooks 可於 PreToolUse / PostToolUse 等事件觸發命令，能用來阻擋危險操作或強制執行檢查流程。

[^subagents]: subagents 以獨立 context 與設定執行任務，適合把 review、debug、研究等工作從主線對話拆出。

---

1. [Hooks reference](https://docs.anthropic.com/en/docs/claude-code/hooks) — Anthropic Docs, 2026-04 查閱
2. [Subagents](https://docs.anthropic.com/en/docs/claude-code/sub-agents) — Anthropic Docs, 2026-04 查閱
3. [Claude Code: Best practices for agentic coding](https://www.anthropic.com/engineering/claude-code-best-practices) — Anthropic, 2025-12-11（2026-04 查閱）
4. [Common workflows](https://docs.anthropic.com/en/docs/claude-code/tutorials) — Anthropic Docs, 2026-04 查閱
