---
title: Loop Engineering：AI 開發實務完整介紹
issue: Vol.16
date: 2026-06-12
tags: Loop Engineering, AI 開發, Coding Agent, 自動化, Claude Code
summary: 2026 年 6 月，「別再 prompt agent，去設計 prompt agent 的迴圈」一夕成為 AI 開發圈的新共識。本期從起源、解剖、驗證、生產模式、上手實作到成本反思，完整拆解 loop engineering 這門新實務。
---

2026 年 6 月 8 日，Peter Steinberger 在 X[^x-platform] 上發了兩句話：「每月提醒：你不該再親自 prompt coding agent 了，你該設計會去 prompt agent 的迴圈。」這則貼文據報導衝出 650 萬瀏覽；一個月前的 Code with Claude 大會上，Claude Code 的創造者 Boris Cherny 也在台上說了幾乎一樣的話——「我不再 prompt Claude 了，是迴圈在 prompt Claude，我的工作是寫迴圈。」一夜之間，**loop engineering** 成了 AI 開發圈的新關鍵字。

但這不是憑空冒出的流行語。往回追一年多，Geoffrey Huntley 在 2025 年上半年用一個 `while true` 加一份 prompt 檔做出「Ralph Wiggum loop」，被嘲笑「蠢得可以」，最後卻被 Anthropic 收進 Claude Code 官方 plugin。從 prompt engineering 到 context engineering、再到 loop engineering，槓桿點一路從「怎麼問一句話」移到「怎麼餵進 context window[^context-window]」、再移到「怎麼設計一個會自己發現工作、派工、驗證、記住狀態、決定下一步的系統」。

本期六篇沿一條主線展開：先講**這個概念怎麼來的**（第 1 篇），再拆**一個迴圈由哪些零件組成**（第 2 篇）；中段聚焦最關鍵的一塊——**迴圈裡必須有會說「不」的東西**，沒有獨立驗證的迴圈只是一台快速生產自信錯誤的機器（第 3 篇），以及社群已沉澱出的**七種生產級迴圈模式**（第 4 篇）；後段回到實作，手把手用 Claude Code 的 `/loop`、Ralph Wiggum plugin、hooks 與 GitHub Actions[^github-actions] **搭出第一個迴圈**（第 5 篇）；最後算帳——token 成本、「cron 換皮」的懷疑論，以及 Addy Osmani 警告的 comprehension debt：程式碼出貨的速度快過任何人理解它的速度（第 6 篇）。

讀完本期，你應該能回答三個問題：loop engineering 到底新在哪、一個值得信任的迴圈長什麼樣、以及你的第一個迴圈該從哪裡開始。

[^x-platform]: 原名 Twitter 的社群平台，2023 年由 Elon Musk 收購後改名。因為技術圈意見領袖高度聚集，至今仍是 AI 開發圈消息與論戰傳播最快的場域。
[^context-window]: 語言模型單次能讀入的文字總量上限，以 token 計算。模型本身沒有跨對話的記憶，所有要參考的資訊都得塞進這個視窗，因此「放什麼進去」成為一門獨立的技藝。
[^github-actions]: GitHub 內建的 CI/CD 自動化服務，以 YAML 檔描述工作流程，可由 push、PR 或排程等事件觸發，在 GitHub 代管的虛擬機上執行。
