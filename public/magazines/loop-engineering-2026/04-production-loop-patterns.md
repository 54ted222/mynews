---
title: 七種生產級迴圈模式：從 PR Babysitter 到 CI Sweeper
order: 4
date: 2026-06-12
summary: 社群沉澱出的七種可直接套用的 loop 模式，含觸發頻率、複雜度與 token 成本的取捨。
keywords: PR babysitter agent loop pattern Claude Code production, CI sweeper autonomous agent loop fix failing builds token cost, issue triage bot LLM agent loop GitHub label duplicate detection case study, dependency update agent LLM renovate alternative autonomous loop, agentic workflow loop turned off token bill nightly agent, post-merge cleanup changelog drafter agent loop pattern, Brian Douglas Sweeper 842 lint errors parallel agents, solberg babysit-pr Claude Code workflow
---

# 七種生產級迴圈模式：從 PR Babysitter 到 CI Sweeper

## TL;DR

- 截至 2026 年 6 月，社群（以 cobusgreyling/loop-engineering repo 的整理最完整）已沉澱出七種可直接套用的迴圈模式；它們在觸發頻率（5 分鐘到 1 天）與 token 成本（單次 no-op 約 3k 到單次修復約 250k tokens）上差距達兩個數量級。
- 高頻高耗的 PR Babysitter 與 CI Sweeper 回報最直接，但 CI Sweeper 在 15 分鐘節奏下若沒有「CI 是綠的就立刻退出」的早退邏輯，日燒可破 500 萬 tokens——這兩種模式只適合 PR 流量大、CI 穩定的團隊。
- 選型鐵律：從低成本、report-only（L1）的 Daily Triage 或 Issue Triage 起步，跑 1–2 週確認訊號品質後再升級到會動手改 code 的 L2 模式；不要從 CI Sweeper 開始。

## 七種模式總覽：一張型錄

每種模式對應一個具體痛點。下表整理自 loop-engineering repo 的模式目錄（截至 2026-06）[^註]，「複雜度」欄的 L1 指 report-only / 只提案不動手，L2 指可在受限範圍內動手修：

| 模式 | 解決的痛點 | 建議節奏 | 起手複雜度 | token 成本 |
|---|---|---|---|---|
| Daily Triage | 每天早上手動巡 CI / issues / PR / 聊天室問「哪裡著火了」 | 1 天（衝刺期 2 小時） | L1 報告 | 低 |
| PR Babysitter | push 後反覆等 CI、等 review、修一點再等的碎片化等待 | 5–15 分鐘 | L1 監看 | 高 |
| CI Sweeper | main / 活躍分支的測試紅燈沒人第一時間處理 | 5–15 分鐘 | L2 謹慎 | 極高 |
| Dependency Sweeper | 依賴更新堆積，Renovate/Dependabot 的 PR 沒人看 | 6 小時–1 天 | L2 僅 patch | 中 |
| Changelog Drafter | release notes 永遠最後一刻趕工 | 1 天或 tag 觸發 | L1 草稿 | 低 |
| Post-Merge Cleanup | merge 後殘留的暫時 log、unused import、死碼 | 1 天–6 小時（離峰） | L1 離峰 | 低 |
| Issue Triage | 新 issue 沒人標 label、重複 issue 沒人關 | 2 小時–1 天 | L1 只提案 | 低 |

兩個觀察。第一，節奏和成本強相關但不是同一回事：PR Babysitter 和 CI Sweeper 同為 5–15 分鐘節奏，後者貴得多，因為「修一個紅燈 CI」平均要動的 context 遠大於「回一條 review comment」。第二，七種裡有五種建議從 L1 起步——社群共識很明確：先讓迴圈證明它看得準，再讓它動手。

## 高頻雙雄：PR Babysitter 與 CI Sweeper 的帳

這兩種是回報感最強、也最容易燒錢的模式，值得單獨算帳。

**PR Babysitter** 的單次成本結構（loop-engineering repo 的估計）：no-op 約 3k tokens、完整 triage 約 80k、含驗證的修復嘗試約 250k；以 10 分鐘節奏跑，建議日上限 2M tokens。它的成立前提是「大多數輪次是 no-op」——watchlist 空了就秒退。實戰面，Jökull Sólberg 公開的 `/babysit-pr` Claude Code skill（約 170 行 markdown）是目前最常被引用的案例：平行輪詢 CI 與 Greptile review、把所有 feedback 分流成 Fix / Dismiss / Escalate 三類、修完 push、循環到 PR 乾淨為止，從 push 到 merge-ready 約 10 分鐘 wall-clock，其中大半是在等 CI。關鍵設計是 triage 那一步：agent 對每條 review 意見做判斷而不是照單全修，因為 review 工具的誤報率不低。

**CI Sweeper** 更貴：綠燈 no-op 約 5k、triage 約 50k、完整修復嘗試約 200k tokens；15 分鐘節奏下若缺早退邏輯，日燒可超過 5M tokens。它的典型風險是「fix-the-symptom loop」——把 CI 弄綠了但沒修到根因，所以該模式強制要求獨立 verifier 把關（原理見本期第 3 篇〈迴圈裡要有會說「不」的東西〉），且同一failure 修 3 次失敗、或要動到超過 5 個檔案 / 核心系統時必須升級給人類。**flaky 測試多的 codebase 不要跑這個模式**：迴圈會把 token 燒在追逐幽靈上。

但這類「掃失敗、派工修」的思路在基礎設施到位時上限很高。Brian Douglas 2026 年 3 月的實測：用名為 Sweeper 的工具把 842 個 ESLint 錯誤（橫跨 99 個檔案）按檔案分組、生成 prompt、fan out 給 5 個平行 Claude Code sub-agent，三輪共 54 分鐘、100% 修復率，最終 PR 改了 110 個檔案。他的結論不是「prompt 寫得好」，而是排程、分組、記錄每輪策略與 token 成本的 infrastructure 才是能力上限。

## 低成本起手式：四種被低估的便宜模式

相對於雙雄，四種低成本模式的共同點是**讀多寫少**，輸出是報告、草稿或標籤，不是 code change，所以單次成本低、出錯代價也低。

- **Daily Triage**：每天早上掃 CI、issues、commits、聊天室，產出一份排好優先序的 `STATE.md`。no-op 約 5k tokens，標準掃描約 50k，建議日上限 100k。它是 repo 明文推薦的入門模式：report-only 跑 1–2 週、人類確認訊號可信之後，才考慮加上小型修復能力。
- **Issue Triage**：實戰案例最多的一型。Alex Yan 用約 500 行 TypeScript 寫成 GitHub Action：新 issue 進來→LLM 分類上標籤→兩段式重複偵測（先用 GitHub 原生搜尋找候選、LLM 只判斷 shortlist）→草擬回覆。兩段式設計就是典型的成本控制：便宜的關鍵字搜尋先收斂，貴的 LLM 只看決賽圈。Metabase 的 Repro-Bot 則展示了另一個取捨——他們**刻意不讓它全自動跑**，人類先審 issue 再觸發 agent 重現 bug，理由是防 prompt injection。
- **Changelog Drafter / Post-Merge Cleanup**：前者在 tag 或每日節奏上把 merge 紀錄整理成 release notes 草稿（傳統工具如 release-drafter 早就證明這個需求存在，LLM 版只是把模板換成理解 diff）；後者在離峰時段掃 merge 後殘留的暫時性 log 與 unused import。兩者都便宜到幾乎沒有「不跑」的理由——前提是你的團隊真的有這兩個痛點。
- **Dependency Sweeper** 介於中間：比 Renovate 多的是讀 changelog 與 migration 文件再改 code 的能力（2025 年的學術實作精確率約 71.4%），但起手務必鎖 patch-only，minor / major 升級的爆炸半徑不是 L2 該碰的。

## 選型指南：什麼時候值得跑、什麼時候別跑

把上面的帳整合成四條規則：

1. **從你每天真的在浪費時間的地方選**，不是從最酷的選。每天早上花 20 分鐘巡狀態→Daily Triage；issue 進來三天沒人標→Issue Triage；PR 平均要 push 四次才綠→才考慮 PR Babysitter。
2. **節奏跟著事件密度走**。5–15 分鐘節奏只有在「事件真的每小時都在發生」時才划算；一天兩個 PR 的 side project 跑 PR Babysitter，就是付高頻的錢買低頻的事。寧可從 1 天節奏開始，嫌慢再加密。
3. **每種模式都設 token 日上限與早退條件**。no-op 必須便宜（3–5k tokens 等級），這是所有模式共同的生死線。Unblocked 的分析指出 multi-agent 系統的 token 消耗約是單純 chat 的 15 倍；GitHub 自家跑 agentic workflows 後也得靠 MCP 工具修剪與每日 auditor agent 才把 token 開銷砍下最多 62%（InfoQ，2026-05）——連 GitHub 都要事後減肥，你最好事前節食。
4. **L1 → L2 → L3 分階段，每階段至少觀察一週**。所有模式先 report-only，確認誤報率可接受再開放動手；CI Sweeper 與 Dependency Sweeper 即使到 L2 也要鎖範圍（≤5 檔案、patch-only）。無人值守的 L3 是驗證閘門都通過之後的事，不是第一天的事。

最後一個反方提醒：這七種模式沒有一種能拯救「事件密度低 + CI 不穩定」的專案。flaky 測試會讓 CI Sweeper 空轉燒錢，低流量會讓高頻模式的固定成本攤不掉——這種時候正確答案是先修 CI、或乾脆不跑迴圈。具體成本論戰與 comprehension debt 的討論，見本期第 6 篇〈迴圈不是免費午餐〉。

[^註]: 表中 token 成本估計均出自 loop-engineering repo 各 pattern 文件，截至 2026-06-12；實際成本依 codebase 規模與 context 設計浮動。

---

**來源**

1. [Loop Engineering: Seven Production Patterns](https://github.com/cobusgreyling/loop-engineering) — Cobus Greyling / GitHub，2026（含 daily-triage、pr-babysitter、ci-sweeper 等 pattern 文件，截至 2026-06-12）
2. [Babysitting PRs With Claude Code](https://www.solberg.is/babysit-pr) — Jökull Sólberg，2026
3. [842 Lint Errors, 5 Parallel Agents, 54 Minutes](https://briandouglas.me/posts/2026/03/15/sweeper-why-agent-infrastructure-matters/) — Brian Douglas，2026-03-15
4. [GitHub Slashes Agent Workflow Token Spend up to 62% with Daily Audits and MCP Pruning](https://www.infoq.com/news/2026/05/github-agentic-token-savings/) — InfoQ，2026-05
