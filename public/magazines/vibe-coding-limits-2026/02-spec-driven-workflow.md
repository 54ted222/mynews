---
title: 專案一變大就不能只靠 prompt：從 vibe 到 spec-driven 的升級工作流
order: 2
date: 2026-04-22
summary: 專案規模一旦超過人腦能完整掌握的範圍，真正能救你的不是更長的 prompt，而是規格、hook、review 與代理分工。
keywords: Claude Code hooks PostToolUse lint check, Claude Code subagents own context window, Claude Code plan mode read only exploration, Cursor Bugbot resolution rate 52 to 70, Cursor automations PagerDuty incident webhook MCP, Lovable prototype is the specification April 2026
---

# 專案一變大就不能只靠 prompt：從 vibe 到 spec-driven 的升級工作流

## TL;DR

- 當 repo 長大，失敗往往不是因為模型突然變笨，而是因為**你沒有把意圖外部化**。
- 能讓 AI 專案從 demo 進入可維護狀態的，不是更厲害的提示詞，而是**spec、review、hooks、agent 分工**。
- 對獨立開發者來說，最實際的升級路線不是全套企業流程，而是先把「規格、驗證、回饋」三條線固定下來。

## 問題不在 prompt 太短，而在系統沒有共同記憶

vibe coding 最大的弱點之一，是它太依賴當下對話。你這次說清楚了，下一次 context 換了；這一輪 agent 理解你的邊界，下一輪又重新猜。當專案還小時，這不是大事，因為你的腦裡仍然裝得下整個系統；但一旦檔案多了、流程長了、需求相依開始互相拉扯，單純靠 prompt 的方式就會出現一個經典症狀：**每次改動都像在重新談判同一套規則。**

這就是為什麼很多人以為自己需要更好的 model，實際上更需要的是**把規則從腦中搬到 repo 裡**。規格、權限、測試門檻、審查邊界，不能只存在你這週記得很清楚的上下文裡。

Lovable 在 2026-04-17 的一篇面向 CTO 的文章，雖然是 vendor 視角，但講中了一件很本質的事：prototype 不一定是 production app，很多時候它其實應該扮演 specification。這個說法很有用，因為它把 AI 快速生成的優勢留下來，同時避免你誤把第一版互動結果當成已經完成的工程設計。

## spec-driven 的本質，是把「你想要什麼」變成可重放的約束

所謂 spec-driven，在這個脈絡下不需要被想成厚重的需求文件。對獨立開發者來說，它更像是一組可被反覆讀取的固定約束：

- 這個 feature 解決誰的哪個問題
- 成功與失敗的條件是什麼
- 哪些資料可以碰，哪些不能碰
- 哪些 UI / API / workflow 是既有約束，不能自作主張改
- 驗證完成的最低標準是什麼

只要這些東西沒有被固定下來，agent 每次都會拿最 plausible 的答案補空格，而不是拿你的真正意圖補空格。這也是為什麼規模一大後，「讓 AI 自己發揮」常常變成災難。它不是不會做，而是它會幫你補太多你沒有明講、但其實很重要的決策。

Anthropic 在 Claude Code 文件裡，對這種問題其實已經給出了相當明確的方向。subagent[^subagent] 文件說得很清楚：每個 subagent 都在自己的 context window 裡執行，帶著自己的 system prompt、tool access 與 permissions；hooks[^hooks] 文件則直接支援在 `PostToolUse` 後跑命令，例如在 `Edit|Write` 後接 lint 或其他檢查。這些能力放在一起看，訊號很明白：**未來不是一個 agent 包辦全部，而是讓不同階段有不同的固定規則。**

## 一個人最實用的升級順序：先規格，再驗證，再自動化

如果你現在是 solo builder，不需要一口氣複製企業團隊的流程。更有效的順序是三步。

第一步是**先把規格寫出來**。這份 spec 不需要官樣文章，但至少要穩定。它可以是一份 markdown、issue template、甚至是 feature brief，只要它能被你和 agent 一再重讀，效果就遠勝過每次用自然語言從頭講。

第二步是**把驗證從直覺變成固定節點**。Claude Code 的 hooks 很適合做這件事。文件中示範了 `PostToolUse` 對 `Edit|Write` 後執行檢查腳本的方式，等於你可以把「每次寫完先 lint / test / scan」這種規則從習慣變成系統。這不是在跟 AI 作對，而是在幫 AI 建護欄。

第三步是**把回饋自動化，而不是把生產全部自動化**。Cursor 2026 年的產品方向很值得參考。Bugbot[^bugbot] 那篇文章提到，團隊在 40 次主要實驗後，把 resolution rate 從 52% 提升到 70% 以上，平均每次 run 抓到的 bug 從 0.4 提高到 0.7。這不是在證明「agent 已經能取代人」，反而是在證明：**當 agent 生產更多 code，最值錢的層變成 review 與回饋系統。**

## 為什麼多代理與 hooks 其實是在補你的人腦上限

很多人看到 subagents、Bugbot、Automations[^automations]，會把它理解成「把更多工作丟給 AI」。但從工程角度看，這些東西真正解決的是另一個問題：**人腦一次只能穩定掌握有限的上下文。**

Anthropic 的 subagent 文件直接把用途寫出來了。當某個 side task 會把主對話塞滿 search results、logs 或 file contents，就應該讓 subagent 在自己的 context 裡做，最後只回 summary。這其實就是在承認：上下文污染本身會降低品質。

Cursor 的 Automations 也是同樣邏輯。官方文章裡提到，自動化 agent 可以由 Slack 訊息、Linear issue、GitHub PR、PagerDuty incident 或 webhook 觸發；其中 security review automation 會在 push to main 後檢查漏洞，incident automation 會用 Datadog MCP 看 log、檢查近期 code change，甚至回一個帶修正 PR 的建議。這不是為了酷炫，而是因為現代開發流程裡，真正 bottleneck 的不是寫功能，而是 review、monitoring、maintenance 沒有同步變快。

對 solo founder 也是一樣。你今天最大的限制不是生成速度，而是你不可能同時當 PM、工程師、reviewer、SRE 與 security lead。多代理與 hooks 的意義，是讓這些角色不必在你腦中同時存在。

## 我會怎麼畫「從 vibe 到工程」的升級線

如果要把這篇文章濃縮成一條實務建議，我會這樣畫：

一開始做 MVP 時，你可以先用 vibe coding 把介面、流程與第一版功能做出來；但只要產品出現以下任一訊號，就該開始升級：

- 同一個需求改了三次，agent 每次都改到不同地方
- 你開始不敢讓 AI 直接動某些關鍵檔案
- 你需要在不同 agent / session 間重複講同一套規則
- 修 bug 時已經搞不清是需求漂移、架構問題還是單純實作錯誤
- 每次發版都要靠你手動做「最後一次 sanity check」

這時候最有效的補法，不是寫更長的 prompt，而是開始固定三件事：spec、驗證節點、角色分工。

說到底，spec-driven 不是反 vibe。它是你對自己說：**這個專案已經不再是我今天腦中有感覺就能安全前進的東西。** 當你願意承認這一點，AI 才會從玩具變成真正的工程槓桿。

[^subagent]: subagent 是 Claude Code 內可獨立執行特定工作的代理，擁有自己的 context window 與工具權限，用來避免主對話被大量搜尋結果、log 或中間輸出污染。

[^hooks]: hooks 是在特定事件發生時自動執行的命令或流程，例如在寫檔後自動跑 lint、測試或安全檢查。它的價值在於把工程習慣固定成系統行為。

[^bugbot]: Bugbot 是 Cursor 的 PR review agent，專門抓邏輯 bug、效能問題與安全風險。它代表的不是「AI 會自己寫」，而是「AI 也要被另一層 AI 審」。

[^automations]: Cursor Automations 是事件驅動或排程驅動的長時代理系統，可由 Slack、Linear、GitHub PR、PagerDuty 或 webhook 觸發，適合把 review、incident triage 與日常維護流程自動化。

---

1. [Create custom subagents](https://code.claude.com/docs/en/sub-agents) — Claude Code Docs, 2026-04 查閱
2. [Hooks reference](https://code.claude.com/docs/en/hooks) — Claude Code Docs, 2026-04 查閱
3. [Building a better Bugbot](https://cursor.com/blog/building-bugbot) — Cursor, 2026-01-15
4. [Build agents that run automatically](https://cursor.com/blog/automations) — Cursor, 2026-03-05
