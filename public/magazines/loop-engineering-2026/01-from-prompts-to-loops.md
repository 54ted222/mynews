---
title: 從 Prompt 到 Loop：一個概念爆紅的十三個月
order: 1
date: 2026-06-12
summary: 從 2025 年被嘲笑的 Ralph Wiggum loop 到 2026 年 6 月 Steinberger 與 Cherny 引爆的典範轉移，完整梳理 loop engineering 的起源與系譜。
keywords: steipete loop engineering tweet June 2026 designing loops, Geoffrey Huntley Ralph Wiggum loop origin while true 2025, Boris Cherny Code with Claude 2026 keynote loops, theregister Ralph Wiggum Claude loops January 2026, Anthropic ralph-wiggum plugin Stop hook max-iterations completion-promise, ReAct paper Yao arxiv 2210.03629 agent loop, Ralph Wiggum loop Hacker News criticism skeptics, Peter Steinberger OpenClaw joins OpenAI 2026, Claude Code Routines launch 2026 loop skill, Karpathy context engineering tweet June 2025
---

# 從 Prompt 到 Loop：一個概念爆紅的十三個月

## TL;DR

- **Loop engineering 不是 2026 年 6 月才發明的**：學術上可追到 2022 年 10 月的 ReAct[^react] 論文（思考—行動—觀察迴圈）；實務上的直系祖先是 Geoffrey Huntley 在 2025 年公開的 Ralph Wiggum loop——一行 `while true` 加一份 prompt 檔，當時被視為笑話。
- **轉折點是「官方收編」**：2025 年 12 月中，Anthropic 把 Ralph Wiggum 做成 Claude Code 官方 plugin（Stop hook[^stop-hook] + `--max-iterations` + `--completion-promise`）；2026 年 1 月 The Register 報導 YC 新創大量採用；2026 年 4 月 Routines 讓迴圈搬上雲端常駐執行。
- **引爆點是兩個人、一個月內、兩句幾乎一樣的話**：2026 年 5 月 6 日 Boris Cherny 在 Code with Claude 說「我的工作是寫迴圈」；6 月 8 日 Peter Steinberger 發文「你該設計會去 prompt agent 的迴圈」，據報導衝出 650 萬瀏覽，loop engineering 一詞就此定調。

## 學術根源：迴圈本來就在那裡

先說清楚一件事：「讓語言模型在迴圈裡跑」不是 2026 年的新點子，而是 agent 這個概念的定義本身。2022 年 10 月，Shunyu Yao 等人發表 ReAct 論文（arXiv:2210.03629，後收錄於 ICLR 2023），提出讓模型交錯產生推理軌跡（Thought）、執行動作（Action）、接收環境回饋（Observation），再進入下一輪——這個 thought-action-observation 迴圈，後來成為幾乎所有 coding agent 的內部骨架。換句話說，每一次你按下 Enter，agent 內部早就在跑迴圈了。

那 2026 年的 loop engineering 新在哪裡？新的是**迴圈的層級**。ReAct 式迴圈是 agent「一次任務內」的內迴圈，由模型供應商寫死在產品裡；loop engineering 講的是包在外面的**外迴圈**——誰來決定 agent 下一個任務是什麼、做完了沒、狀態存哪裡、什麼時候該停。這層過去由人類工程師手動扮演：開 session、貼 prompt、看結果、再貼一次。十三個月來發生的事，就是這層「人肉外迴圈」被一步步寫成程式。

## 2025 年：一個被嘲笑的 while true

實務系譜的起點有明確的人名與指令。澳洲工程師 Geoffrey Huntley 在 2025 年上半年發現：與其精修 prompt，不如把同一份 prompt 檔無腦重餵給 agent，讓它每輪讀取磁碟上的程式碼現狀、繼續往前推。他公開的原始版本粗暴到近乎挑釁：

```bash
while :; do cat PROMPT.md | npx --yes @sourcegraph/amp ; done
```

命名也很自嘲——Ralph Wiggum 是《辛普森家庭》裡那個一邊撞門框一邊喊「I'm helping!」的角色；而「ralph」在俚語裡是嘔吐的意思，Huntley 受訪時說他在 2025 年 2 月意識到這招的含義時「想吐」。2025 年 6 月他在舊金山一場約 15 人的 agentic coding 小聚現場 demo，並在自己睡覺的澳洲深夜直播 agent 通宵寫程式；7 月發出後來成為 canonical 出處的部落格文〈Ralph Wiggum as a "software engineer"〉（截至 2026-06，Anthropic 官方 plugin README 仍直接引用此文為技法出處）。

當時的主流反應是訕笑與不信。批評集中在幾點：沒有狀態管理、沒有驗證、純靠暴力重試燒 token；Hacker News[^hacker-news] 上甚至到 2026 年初還有標題直白的討論串「Someone needs to say it: Ralph Wiggum Doesn't Work」，論點是正解應該是拆解步驟、在步驟間傳遞明確 state 與 artifact、配上驗證與護欄——而不是把一切丟進更大的迴圈。有趣的是，這批批評後來大多沒有否定掉迴圈本身，反而變成了 loop engineering 的設計清單：今天講的驗證器、外部狀態、maker/checker 分工，幾乎逐條回應了當年的嘲諷（見本期第 2、3 篇）。

但 Ralph 能活下來，靠的不是辯論而是產出。Huntley 用它打造了 Cursed 程式語言（由 Ralph 迴圈自己寫出來的編譯器專案）、一個 ZX Spectrum[^zx-spectrum] 報稅應用，後來甚至逆向並複刻了一個 Atlassian 產品。The Register 在 2026 年 1 月 27 日的報導標題說得露骨：Ralph 迴圈能以「每小時 10 美元」的代價 vibe-clone 商用軟體，並指出不少 Y Combinator[^y-combinator] 新創已在使用這個技法。

## 收編：Anthropic 把迷因做成官方功能

概念從邊緣走向中心的標準路徑，是被平台收編。2025 年 12 月 15 日前後，Anthropic 把 ralph-wiggum 收進 Claude Code 官方 plugin 目錄。官方版把 Huntley 的 bash 外迴圈內化成 session 內機制：用 **Stop hook** 攔截 Claude 的退出嘗試、把同一份 prompt 重新餵回去；用 `--max-iterations` 設安全上限；用 `--completion-promise` 指定一個精確字串（例如 `<promise>COMPLETE</promise>`）作為「真的做完了」的收工信號。README 同時保留了 Huntley 那句極簡定義——「Ralph is a Bash loop」——並警告 completion promise 是精確匹配、應以 max-iterations 為主要安全機制。

收編的意義不只是背書。一個被嘲笑的 shell 腳本，變成有文件、有護欄、有取消指令（`/cancel-ralph`）的官方功能，等於平台方承認：**外迴圈是產品該管的事，不是使用者的 hack**。接下來的動作更大——2026 年 4 月中，Anthropic 開放 Claude Code **Routines** 的 research preview：prompt、repo、connector 設定一次，迴圈就在 Anthropic 雲端按排程、API 呼叫或 GitHub 事件自動執行，筆電闔上也照跑。原本只活在單一 session 裡的 `/loop` 與 `/schedule`，至此升級成常駐的自治系統。基礎設施備齊了，只差一個名字。

## 2026 年 6 月：兩句話、一個名字

名字在五週內定調。2026 年 5 月 6 日，Anthropic 的 Code with Claude 大會在舊金山舉行，Claude Code 創造者暨負責人 Boris Cherny 壓軸主題演講，現場 demo 自治 agent 處理真實 GitHub issue——重現 bug、提修復、跑測試、開 PR。他那段話的剪輯在網上流傳：「我不再 prompt Claude 了。我有迴圈在跑、在 prompt Claude、在決定要做什麼。我的工作是寫迴圈。」（短片瀏覽數約 70 萬，為媒體轉述數字。）

一個月後，6 月 8 日，Peter Steinberger（@steipete）在 X 上發文：「每月提醒：你不該再親自 prompt coding agent 了。你該設計會去 prompt 你的 agent 的迴圈。」據追蹤報導，這則貼文衝出約 650 萬瀏覽。Steinberger 的話之所以有重量，在於他的履歷橫跨兩大陣營：這位奧地利工程師打造的開源 agent 專案 OpenClaw 曾在約三個月內累積近 20 萬 GitHub stars，2026 年 2 月他加入 OpenAI 負責 agent 產品。當 Anthropic 生態的 Cherny 與 OpenAI 的 Steinberger 在一個月內說出幾乎同一句話，這就不再是某家廠商的行銷，而是跨陣營的從業者共識。接下來一週，整個 AI coding 圈都在辯論這六個字，「loop engineering」正式成為繼 prompt engineering、context engineering 之後的第三個世代名詞。

## 為什麼是現在：三層槓桿的接力

把十三個月攤開看，會發現這是一場槓桿點的接力，而且每一棒都有清楚的命名時刻。2025 年 6 月，Andrej Karpathy 發文支持以「context engineering」取代「prompt engineering」，理由是工業級 LLM 應用的關鍵早已不是那句指令，而是 runtime 組裝進 context window[^context-window] 的全部內容；Anthropic 隨後的工程部落格把這套方法系統化。而到了 2026 年，context engineering 又被往下收編成迴圈裡的一個元件——你設計的迴圈，每一輪都在替 agent 做 context engineering。

「為什麼是現在」的答案，截至 2026-06 可以拆成三個條件同時成熟：

- **模型能力**：agent 能穩定完成的任務長度持續拉長，一輪迴圈能消化的工作量從「改一個函式」變成「修完一張 issue 含測試」，外迴圈才有東西可派。
- **工具成熟度**：Stop hook、官方 plugin、git worktree 隔離、Routines 雲端排程——2025 年你得自己拿 bash 黏，2026 年這些都是平台原生零件。
- **驗證閉環**：迴圈要能無人值守，前提是有測試、型別檢查、CI[^ci] 這些會說「不」的東西自動把關（這是整個故事裡最容易被略過、也最致命的一塊，見本期第 3 篇）。

回頭看，Ralph Wiggum loop 在 2025 年被嘲笑，不是因為方向錯，而是因為它把一個三年後才會成熟的架構，用最裸露的方式提前演了出來。嘲笑它的人看到的是沒有護欄的 `while true`；Huntley 看到的是：當模型夠強、工具夠全，工程師的位置必然從迴圈裡面移到迴圈外面。十三個月後，平台、命名與共識都到位了——剩下的問題不再是「要不要寫迴圈」，而是迴圈該長什麼樣子。這就是接下來五篇的事。

[^react]: ReAct 是「Reason + Act」的縮寫，由普林斯頓大學與 Google Brain 的研究者提出，原始實驗場景是問答與文字冒險遊戲，後來成為 agent 設計的奠基框架之一。
[^stop-hook]: Claude Code 的 hook 機制之一，在 agent 嘗試結束回合時觸發自訂腳本，可據以阻止收工、把指令重新餵回，常用來實作「條件不滿足就不准停」的迴圈。
[^hacker-news]: 由創投 Y Combinator 經營的技術新聞討論區，以工程師社群的高密度辯論聞名，常被視為開發者圈的風向指標。
[^zx-spectrum]: 1982 年英國 Sinclair 公司推出的 8 位元家用電腦，在歐洲擁有大量懷舊社群；為它開發新應用是復古計算愛好者圈的經典炫技題材。
[^y-combinator]: 矽谷最知名的新創加速器，成立於 2005 年，曾孵化 Airbnb、Stripe、Dropbox 等公司；其新創採用某項技術，常被視為早期趨勢訊號。
[^context-window]: 語言模型單次能讀入的文字總量上限，以 token 計算。模型本身沒有跨對話的記憶，所有要參考的資訊都得塞進這個視窗。
[^ci]: 持續整合（Continuous Integration），每次程式碼變更都自動執行建置與測試的開發實務；常見服務有 GitHub Actions、CircleCI 等。

---

**來源**

1. [Peter Steinberger on X：「You should be designing loops that prompt your agents.」](https://x.com/steipete/status/2063697162748260627) — X/@steipete，2026-06-08
2. [ralph-wiggum plugin README](https://github.com/anthropics/claude-code/blob/main/plugins/ralph-wiggum/README.md) — Anthropic（claude-code 官方 repo），2025-12（截至 2026-06）
3. ['Ralph Wiggum' loop prompts Claude to vibe-clone software](https://www.theregister.com/2026/01/27/ralph_wiggum_claude_loops/) — The Register，2026-01-27
4. [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) — Yao et al.（arXiv / ICLR 2023），2022-10-06
5. [OpenClaw creator Peter Steinberger joins OpenAI](https://techcrunch.com/2026/02/15/openclaw-creator-peter-steinberger-joins-openai/) — TechCrunch，2026-02-15
6. [Code with Claude San Francisco](https://claude.com/code-with-claude/san-francisco) — Anthropic，2026-05-06
