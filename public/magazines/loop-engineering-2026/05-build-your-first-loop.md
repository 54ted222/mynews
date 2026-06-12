---
title: 動手做第一個迴圈：Claude Code 實作指南
order: 5
date: 2026-06-12
summary: 用 /loop、Ralph Wiggum plugin、Stop hook、worktree 與 GitHub Actions，從零搭出一個會自己驗證、自己收工的迴圈。
keywords: Claude Code ralph-wiggum plugin max-iterations completion-promise stop hook, claude -p headless mode GitHub Actions workflow automation, Claude Code /loop skill recurring interval slash command documentation, Geoffrey Huntley ralph wiggum bash while true loop claude prompt.md, ralph wiggum loop pitfalls token cost hacker news overnight, code.claude.com scheduled-tasks loop.md cron, claude code stop hook decision block JSON settings
---

# 動手做第一個迴圈：Claude Code 實作指南

## TL;DR

- 一個能上生產的迴圈只需要四樣東西：**重複執行的機制**、**迭代上限**、**迴圈外的驗證**、**明確的收工條件**。本文由淺入深給四階實作，每一階都標出「驗證放這裡」「上限設這裡」。
- 階梯是：bash `while` 迴圈（5 行就能跑）→ 官方 ralph-wiggum plugin（`/ralph-loop` + Stop hook）→ `/loop` skill（session 內排程）→ GitHub Actions[^github-actions] + `claude -p`（無人值守）。
- 鐵律一條：**永遠先設上限再開迴圈**。completion promise 與測試綠燈是「成功訊號」，`--max-iterations` / `--max-turns` 才是「安全機制」——官方文件與社群踩坑回報都這麼說。

迴圈該長什麼樣、為什麼要有獨立驗證，本期第 2、3 篇已經講完；這篇只回答一個問題：**指令到底怎麼打**。以下所有指令拼寫均對照官方文件與官方 repo 查證，截至 2026-06。

## 第一階：一段 bash 就是迴圈

Geoffrey Huntley 的原始 Ralph loop 真的只有一行：

```bash
while :; do cat PROMPT.md | claude-code ; done
```

狀態全部活在 `PROMPT.md`、改過的檔案與 git history 裡——每輪都是全新 context，agent 靠讀檔案接續前一輪的進度。這在 2026 年依然可用，但裸跑等於把信用卡插進飲料機。下面是加上 worktree[^worktree] 隔離、迭代上限與外部驗證的可貼上版本：

```bash
#!/usr/bin/env bash
# ralph.sh — 在獨立 worktree 跑，最多 20 輪，測試全綠才收工
set -euo pipefail

# worktree 隔離：迴圈搞砸也不污染你的工作目錄
git worktree add ../myapp-ralph -b ralph/todo-api || true
cd ../myapp-ralph

MAX_ITER=20   # ←★ 上限設這裡。沒有它，失敗的任務會無限燒 token

for i in $(seq 1 "$MAX_ITER"); do
  echo "=== iteration $i / $MAX_ITER ==="
  cat PROMPT.md | claude -p \
    --allowedTools "Read,Edit,Bash(npm test*),Bash(npm run lint*),Bash(git *)" \
    --output-format json | jq -r '.result' | tail -5

  # ←★ 驗證放這裡：在迴圈「外面」、用 agent 改不到的指令判斷
  if npm test --silent && npm run lint --silent; then
    echo "all green — done at iteration $i"
    exit 0
  fi
done
echo "hit MAX_ITER without passing" >&2; exit 1
```

三個關鍵拼寫（出自官方 headless[^headless] 文件）：`-p`（即 `--print`，非互動單發模式）、`--allowedTools "Bash(npm test*)"`（prefix 比對，**`*` 前要留空格**，否則 `Bash(git diff*)` 會連 `git diff-index` 一起放行）、`--output-format json`（回傳 JSON，內含 `result` 與 `total_cost_usd`，可以順手記帳）。`PROMPT.md` 寫法：任務目標、完成的可驗證定義（「`npm test` 全綠」）、一輪只做一件事、把進度寫回 `TODO.md`。

注意驗證的位置：`npm test` 跑在 **shell 層**，不是寫在 prompt 裡叫 agent「記得測試」。agent 在 prompt 裡可以自我感覺良好，但它改不掉你 shell 裡的 `if`。這就是第 3 篇說的「會說不的東西」在實作上的最小形式。

## 第二階：官方 Ralph Wiggum plugin

不想自己管 bash 迴圈，Anthropic 把上面那套收進了官方 plugin。先掛上官方 marketplace 再安裝（marketplace 名稱 `claude-code-plugins`，對應 `anthropics/claude-code` repo，截至 2026-06）：

```text
/plugin marketplace add anthropics/claude-code
/plugin install ralph-wiggum@claude-code-plugins
```

啟動與取消：

```text
/ralph-loop "建一個 todos REST API：CRUD、輸入驗證、測試。
全部測試通過後輸出 <promise>COMPLETE</promise>" \
  --completion-promise "COMPLETE" --max-iterations 30

/cancel-ralph
```

原理是 `hooks/stop-hook.sh`：Claude 每次想結束回合，Stop hook 攔下來、把**同一份 prompt** 原封不動餵回去；前一輪改的檔案與 git history 都在，所以 agent 看得到自己的進度。收工條件只有兩個——輸出與 `--completion-promise` **完全一致的字串**（精確比對，不能搞「SUCCESS 或 BLOCKED」兩種結局），或撞到 `--max-iterations`。

兩個實戰提醒。第一，README 明講 completion promise 是成功訊號、不是安全機制，**`--max-iterations` 才是你的保險絲**——而且真的有人踩過保險絲失靈：issue [#18646](https://github.com/anthropics/claude-code/issues/18646) 回報過 `--max-iterations` 未被遵守、整月用量被吃光，所以跑大任務前先用小上限（如 5）做一次冒煙測試[^smoke-test]。第二，在 prompt 裡留逃生口，例如：「若 15 輪後仍卡住：記錄阻礙、列出已嘗試方案、建議替代做法後輸出 promise」。官方建議的適用範圍：有自動驗證的明確任務（測試、lint、greenfield[^greenfield] 專案）；別拿去做需要人類判斷的事或 production debugging。

順帶一提，plugin 的 Stop hook 也可以自己寫：在 `.claude/settings.json` 掛 `"hooks": {"Stop": [...]}`，腳本跑你的測試，沒過就輸出 `{"decision": "block", "reason": "tests failing: ..."}`（或 exit code 2），Claude 就無法收工、會帶著 reason 繼續修。這是「驗證放這裡」的第二個位置：**擋在出口上**。

## 第三階：/loop——session 內的排程迴圈

前兩階是「不達標不准停」的衝刺型迴圈；`/loop` 是另一種——**固定間隔重跑一個 prompt** 的巡邏型迴圈（需 Claude Code v2.1.72+，用 `claude --version` 確認）：

```text
/loop 5m 檢查 deploy 是否完成，失敗就把 log 撈出來診斷
/loop 20m /review-pr 1234        ← prompt 可以是另一個 slash command
/loop                            ← 跑內建維護 prompt 或你的 loop.md
```

幾個查證過的行為細節（截至 2026-06）：間隔支援 `s/m/h/d`，省略間隔時 Claude 會在每輪後自選 1 分鐘到 1 小時的延遲；任務是 **session-scoped**——關掉終端機就停，`--resume` 可救回未過期的任務；所有迴圈 **7 天自動到期**；等待中按 `Esc` 即停。把 `.claude/loop.md` 寫成你的預設巡邏指令（純 Markdown，邊跑邊改、下一輪生效），裸打 `/loop` 就會執行它。底層是 `CronCreate` / `CronList` / `CronDelete` 三個工具，直接用自然語言問「我有哪些 scheduled tasks」「取消 deploy check」即可管理；要全域關閉就設 `CLAUDE_CODE_DISABLE_CRON=1`。

上限在哪？`/loop` 自帶兩道：7 天到期與 session 必須開著。驗證在哪？寫進 prompt 的動詞裡——「檢查 CI **是否通過**」而不是「處理 CI」，讓每輪都從讀取客觀狀態開始。

## 第四階：GitHub Actions——無人值守

`/loop` 要求 session 開著；要機器關了也照跑，就把迴圈搬上 CI。最快路徑是在 Claude Code 裡執行 `/install-github-app`（需要 repo admin），它會幫你裝 GitHub app 並設好 `ANTHROPIC_API_KEY` secret。然後一個 `schedule` 觸發的 workflow 就是一個每日迴圈：

```yaml
name: Nightly Loop
on:
  schedule:
    - cron: "0 19 * * *"   # UTC 19:00 = 台北 03:00
jobs:
  loop:
    runs-on: ubuntu-latest
    timeout-minutes: 30          # ←★ 上限之一：workflow 層 timeout
    steps:
      - uses: actions/checkout@v4
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          prompt: |
            跑 npm test 與 npm run lint。若有失敗，修到全綠，
            開 PR 說明改了什麼；全綠則只留一行報告。
          claude_args: "--max-turns 15"   # ←★ 上限之二：推理回合數
```

注意 v1 的參數命名：beta 時代的 `direct_prompt` 已改名 `prompt`，`max_turns`、`model`、`allowed_tools` 全部併入 `claude_args` 以 CLI 旗標傳入（`--max-turns`、`--model`、`--allowedTools`）。驗證放哪？就放在你既有的 CI 上——Claude 開的 PR 一樣要過 branch protection[^branch-protection] 與 required checks，**人類 merge 是最後一道閘**。

不想用 action 也可以在任何 CI 直接呼叫 `claude -p`。官方建議腳本場景加 `--bare`（跳過本機 hooks/skills/MCP 自動載入，換來每台機器結果一致；認證走 `ANTHROPIC_API_KEY`）。另一個時效提醒：官方公告自 **2026-06-15** 起，訂閱方案的 `claude -p` / Agent SDK[^agent-sdk] 用量改計入獨立的月度 Agent SDK 額度，不再與互動用量混算——排 CI 迴圈前先確認額度。

四階爬完，你手上就有同一個東西的四種形態：重複、上限、外部驗證、收工條件。哪一階適合哪種工作、以及這一切值不值得燒的 token，分別見本期第 4 篇〈七種生產級迴圈模式〉與第 6 篇〈迴圈不是免費午餐〉。

[^github-actions]: GitHub 內建的 CI/CD 自動化服務，以 YAML 檔描述工作流程，可由 push、PR 或排程等事件觸發，在 GitHub 代管的虛擬機上執行。
[^worktree]: Git 的內建功能（`git worktree` 指令），讓同一份版本庫同時掛出多個工作目錄，共享提交歷史但各自檢出不同分支、各自有獨立的檔案狀態。
[^headless]: 指不開互動介面、單次執行完就退出的執行模式；Claude Code 以 `claude -p` 進入，常用於 shell 腳本與 CI 等程式化呼叫場景。
[^smoke-test]: 源自硬體業「通電看會不會冒煙」的說法，指正式執行前先跑一次最小規模的快速檢查，確認基本功能沒壞再放大規模。
[^greenfield]: 軟體業術語，指從零開始、沒有歷史包袱的全新專案；相對詞是 brownfield（在既有系統上改造）。
[^branch-protection]: GitHub 的分支保護規則，可強制要求 PR 通過指定檢查、取得人工核可後，才能合併進受保護的分支（例如 main）。
[^agent-sdk]: Claude Agent SDK，Anthropic 提供的程式化開發套件，讓開發者用 Claude Code 同款核心在自己的程式裡組裝 agent。

---

## 來源

1. [Ralph Wiggum plugin README](https://github.com/anthropics/claude-code/blob/main/plugins/ralph-wiggum/README.md) — Anthropic（anthropics/claude-code），擷取於 2026-06-12
2. [Run prompts on a schedule（/loop 與 scheduled tasks）](https://code.claude.com/docs/en/scheduled-tasks) — Claude Code 官方文件，擷取於 2026-06-12
3. [Run Claude Code programmatically（claude -p / headless）](https://code.claude.com/docs/en/headless) — Claude Code 官方文件，擷取於 2026-06-12
4. [Claude Code GitHub Actions](https://code.claude.com/docs/en/github-actions) — Claude Code 官方文件，擷取於 2026-06-12
