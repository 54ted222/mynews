---
title: 從需求到 SPEC：為什麼 Plan Mode 要先只讀不動手
order: 2
date: 2026-04-22
summary: 在中大型專案裡，Plan Mode 的價值是先釐清邊界與風險，再進入寫碼；它不是拖慢速度，而是避免在錯方向上高速衝刺。
keywords: Claude Code plan mode read only, Claude Code init CLAUDE.md memory rules, spec first workflow for AI coding, requirement interview prompt engineering, path specific memory claude code, codebase risk mapping before implementation, acceptance criteria spec markdown
---

# 從需求到 SPEC：為什麼 Plan Mode 要先只讀不動手

## TL;DR

- Plan Mode 的目的不是產生漂亮計畫，而是**先確認你要改的其實是對的地方**。
- SPEC 不是文件儀式，而是讓多次 session、多人協作、與多代理分工共享同一套邊界。
- 當需求還沒被寫成驗收條件前，越早開始寫碼，返工機率越高。

## 需求訪談不是客套，是降低誤工的最低成本

許多「AI 寫超快」失敗在第一天就註定：需求輸入是一段情緒化敘述，輸出卻被期待是可上線系統。要避免這件事，第一步不是換模型，而是先把需求壓成可執行規格：角色、流程、資料約束、錯誤處理、與驗收條件。

Anthropic 對大任務的建議很一致：先規劃、再實作。這也是 `CLAUDE.md` 與專案記憶機制存在的理由。當你把專案規則（風格、測試指令、禁止動到的區域）放進可持續讀取的記憶，agent 在不同 session 才不會每次重新猜。[^memory]

## Plan Mode 的真正功能：把未知顯性化

Plan Mode 被很多人當成「先出 TODO 清單」。這太小看它。真正有價值的是，Plan Mode 讓你在不寫檔的前提下先回答三件事：

- 會改到哪些檔案與模組
- 每個改動的相依風險在哪裡
- 什麼測試能證明改動有效而且沒有副作用

這一步在中大型專案尤其關鍵，因為代碼關聯往往跨域。你以為在修 auth，結果連帶影響 session cache、審計 log、和前端路由守衛。先只讀分析，才能把「看不到的範圍」提早暴露。

## SPEC 要寫到哪個深度才夠

最常見的錯誤是把 SPEC 寫成摘要。摘要只能溝通方向，不能指導實作。可執行 SPEC 至少要有：

1. **Problem statement**：這次改動要消除哪個具體痛點
2. **In-scope / Out-of-scope**：明確說哪些不做
3. **Data contract**：關鍵輸入輸出與欄位約束
4. **Failure modes**：至少列出 3–5 個會失敗的情境
5. **Acceptance criteria**：可以被測試判定的完成條件

只要這五項齊全，Plan Mode 的產出就能直接轉測試案例，實作者也不需要每步都回頭問「這個要不要做」。

## 為什麼先規格反而更快

很多人擔心「先寫 SPEC 會拖慢」。但從交付角度看，SPEC 其實在做一件事：把「需求錯誤」提前到成本最低的階段發現。你在 markdown 內改一句話，成本是分鐘；你在已整合的多層系統內改方向，成本是天。

Anthropic 的 best practices 與 tutorials 都在避免同一個陷阱：一次要求模型完成設計、實作、測試與上線。這種全包式指令在小腳本可行，在中大型專案通常導向高返工與錯誤信心。[^no-big-bang]

## 實務模板：你可以直接複製的 Plan 入口

如果你要把這套方法固定成日常，我建議每個中大型需求都從同一段開場：

1. 先進 Plan Mode，不改檔。
2. 掃描 repo 後列出：改動檔案、相依風險、測試策略、驗收條件。
3. 用反問把需求補齊，再落到 SPEC。
4. 只有當 SPEC 確認後，才切回實作模式。

你會發現，真正省下來的不是打字時間，而是「錯方向高速前進」的時間。對於目標是幾天內交付中大型切片的人，這比任何技巧都更關鍵。

[^memory]: Claude Code 文件包含 `CLAUDE.md`、memory 與 path-specific instructions 的設計，目的就是讓跨 session 規則可重用，而非每次重述。

[^no-big-bang]: Anthropic 的建議明確反對 big-bang 式任務指令，鼓勵規劃、分步實作與驗證。

---

1. [Claude Code settings and memory](https://docs.anthropic.com/en/docs/claude-code/settings) — Anthropic Docs, 2026-04 查閱
2. [Quickstart (`/init` and project setup)](https://docs.anthropic.com/en/docs/claude-code/quickstart) — Anthropic Docs, 2026-04 查閱
3. [Common workflows](https://docs.anthropic.com/en/docs/claude-code/tutorials) — Anthropic Docs, 2026-04 查閱
4. [Claude Code: Best practices for agentic coding](https://www.anthropic.com/engineering/claude-code-best-practices) — Anthropic, 2025-12-11（2026-04 查閱）
