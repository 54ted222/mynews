---
title: Vibe Coding 的宿醉：速度之後真正會追上你的，是 flow debt、安全洞與維護悖論
order: 3
date: 2026-04-22
summary: AI 生成程式最快樂的階段，往往也是未來最難維護的起點；問題不是能不能上線，而是你多久失去控制。
keywords: arXiv 2512.11922 flow debt tradeoff vibe coding, Simon Willison projects should be low stakes watch out for secrets, Vercel April 2026 security incident sensitive environment variables, Lovable security stumble pre November 2025 projects, Lovable project visibility source code chat history public project, Claude Code PostToolUse lint check hooks
---

# Vibe Coding 的宿醉：速度之後真正會追上你的，是 flow debt、安全洞與維護悖論

## TL;DR

- vibe coding 的主要風險不是「第一天做不出來」，而是**做得太順，順到你來不及建立理解與治理**。
- 真正的宿醉通常以三種形式出現：**技術債、秘密外洩與維護失控**。
- 最有效的 guardrail 不是禁止 AI，而是把高風險區域明確標出來，讓生成速度只發生在可承受範圍內。

## 什麼叫 flow debt：看起來一路順，其實是在向未來借理解

arXiv 那篇 `Vibe Coding in Practice` 最有價值的地方，在於它沒有停在「AI code 可能有風險」這種空話，而是給了一個更精準的框架：flow-debt tradeoff[^flow-debt]。所謂 flow，是生成順滑、迭代快速、幾乎沒有阻力；所謂 debt，則是這個順滑過程把架構不一致、安全漏洞與維護成本一起延後支付。

這個框架之所以準，是因為它描述的不是單一 bug，而是**理解負債**。你今天讓 AI 一路補洞，系統看起來越來越完整，但你對它的 mental model 卻不一定同步成長。等到某一天要改授權邏輯、補 audit log、切 tenant、抽換第三方供應商時，才發現每一處都像是臨時長出來的器官。

Simon Willison[^simon] 的說法剛好是這個論點的實務版。他主張，如果你沒有讀那段 code、不能向別人解釋它在做什麼，就不該把它當成 production-quality 的 AI-assisted programming。這句話不是道德要求，而是維護成本的最低門檻。因為可維護性不是抽象品質，而是「三週後你還敢不敢碰」。

## 安全問題不是旁支，而是 vibe coding 最容易忽略的主線

很多人把安全洞想成比較進階的工程議題，彷彿產品先上線、之後再補也沒關係。這在 vibe coding 世界尤其危險，因為生成工具天然傾向優先完成 happy path，而不是替你保守處理 secrets、權限邊界與資料暴露。

Simon Willison 在那篇文章裡直接把重點列出來了：如果專案牽涉 secrets[^secrets]，就要非常小心；如果專案碰到 private data，就要懷疑資料可能離開你的機器；如果它會對外打 API，你還要注意成本與濫用。這幾條看起來像常識，但在 vibe coding 情境裡，它們常常被「先做出來再說」壓掉。

2026 年 4 月幾起事件更把這個風險具象化了。Vercel 的 security bulletin 明確表示，這次事件涉及未標記為 sensitive 的 environment variables[^env-vars] 被存取風險，並且直接建議用戶優先輪替相關 secrets。這個案例的重要性不只在於 Vercel 本身，而在於它提醒大家：**預設值、標記方式、密鑰保存策略，本身就是產品安全的一部分。**

再看 Lovable。官方文件現在已經把 project visibility[^project-visibility] 講得很明確：public project 代表任何人都能在 editor 裡查看與 remix project，其中包含 source code、chat history、未發佈中的工作內容；從 2025 年 12 月開始，所有新專案改成 workspace visibility 預設。這種文件看似只是權限說明，實際上透露了一個很重要的事實：在 AI 生產式工具中，**聊天內容本身就是攻擊面**，因為它可能包含需求、資料範本、甚至敏感上下文。

## 真正麻煩的不是一次性漏洞，而是你不知道哪些東西值得懷疑

Business Insider 2026-04-21 關於 Lovable 的報導，無論你最後怎麼解讀事件細節，都提供了一個很值得記住的教訓：當使用者可以透過免費帳號接觸到別人的 code、chat histories 或 customer data，問題不再只是「平台有沒有修一個 bug」，而是使用者會突然意識到自己對整個系統邊界其實沒有清楚模型。

這正是 vibe coding 最麻煩的地方。傳統手刻系統當然也會有漏洞，但至少你通常知道哪幾個地方最危險：auth、payments、uploads、secrets、admin panel。vibe coding 生成出來的系統，最大的風險是你**以為自己知道**危險在哪，實際上 agent 可能在你沒注意的地方加了一條 permissive policy、多存了一份資料、把某段 prompt history 暴露到不該暴露的地方。

所以宿醉最難受的，不是「發現有問題」，而是「發現你不知道還有多少問題」。這會直接把維護成本拉高，因為每一次修改都需要更大範圍的重新理解。

## 維護悖論：越快做完的東西，越容易在修改時卡住

這裡有一個很多 solo builder 都遇過，但不一定講得出來的悖論：AI 幫你把第一版做完時，你會有一種「我其實已經跨過最難的部分」的錯覺；可是真正的卡點，往往是第一次大改版。

為什麼？因為你第一次做的是局部成功，第二次改的是系統一致性。第一次你只需要讓 feature work，第二次你需要確保新 feature 不會破壞舊 feature，而且資料、權限、流程、命名、邏輯邊界都還能說得通。前者適合 vibe，後者需要工程。

這也是為什麼我很建議把 guardrail 直接做成流程。Claude Code 的 hooks 文件提供的 `PostToolUse` 能力，就是很典型的例子。你完全可以在每次 `Edit|Write` 後強制跑 lint、型別檢查、單元測試、甚至自訂的 security scan。這種做法的價值，不在於它能 100% 阻止錯誤，而在於它把「有沒有最低限度驗證」從人的記憶，改成系統的習慣。

## 什麼 guardrail 最適合獨立開發者

如果你不是有完整 AppSec 團隊的公司，就不要把 guardrail 想得太大。對獨立開發者來說，最值得先做的是四件事。

第一，**把高風險區域列出來**。哪些檔案碰 auth？哪些碰 billing？哪些碰 secrets？哪些碰外部寫入？先標出來，之後就知道哪些區域不該讓 AI 無限制亂改。

第二，**把 secret 管理從 day one 做對**。不要把 API key 寫死，不要把測試資料和真實資料混用，不要假設「之後再清就好」。Vercel 那份 bulletin 已經告訴你，刪帳號不等於消風險，先 rotation 才是正確順序。

第三，**讓 review 對準 blast radius，而不是對準字數**。不是每一個 diff 都值得花同樣的審查時間。變更 landing page copy 和改寫 session handling，風險完全不同。你的 guardrail 要跟風險成比例。

第四，**保留人工兜底能力**。這聽起來很 old school，但真的重要。只要你還能人工處理訂單、人工修正資料、人工回退部署，很多錯都還在可承受範圍內；一旦你把所有流程都完全自動化，卻沒有可回退的人工作業，你就會在第一次事故時發現自己其實沒有底牌。

## 最後的判斷：別等到宿醉才承認自己喝太快

vibe coding 的誘惑來自速度，宿醉來自你把速度錯當成熟度。系統能跑，不代表它值得長期持有；畫面能展示，不代表權限正確；第一批用戶願意試，不代表你已經建立起可信任的產品邊界。

所以真正成熟的用法，不是「完全不 vibe」，而是知道**在哪裡可以放手，在哪裡必須收手**。低風險流程可以讓 AI 快跑；高風險區域一定要加強約束；而一旦產品開始承擔更多商業責任，你就不能再把「之後再懂」當作合理策略。

因為技術債可以慢慢還，信任債通常不能。

[^flow-debt]: flow-debt tradeoff 指的是生成速度越順，越可能在架構一致性、安全性與長期維護性上累積看不見的債。它不是單一 bug，而是整體理解與治理能力被透支。

[^simon]: Simon Willison 是長期記錄 LLM 實務與 agentic engineering 的獨立開發者，他對「什麼算 vibe coding、什麼算負責任的 AI 輔助工程」的界線影響很大。

[^secrets]: secrets 在工程脈絡裡通常指 API key、token、資料庫憑證、簽章金鑰等敏感值。一旦進入 log、chat history、repo 或錯誤設定的環境變數，就可能演變成真正的資安事故。

[^env-vars]: environment variables 是部署平台常用來存放設定與密鑰的方式。如果平台允許其中一部分以可讀明文形式被取回，這些值就不再只是設定，而是直接暴露面。

[^project-visibility]: project visibility 是 Lovable 控制誰能在 editor 裡看到 source code、chat history 與未發佈內容的權限設定。它與網站是否公開可訪問不是同一層概念。

---

1. [Vibe Coding in Practice: Flow, Technical Debt, and Guidelines for Sustainable Use](https://arxiv.org/abs/2512.11922) — Waseem et al., 2025-12-11
2. [Not all AI-assisted programming is vibe coding (but vibe coding rocks)](https://simonwillison.net/2025/Mar/19/vibe-coding/) — Simon Willison, 2025-03-19
3. [Vercel April 2026 security incident](https://vercel.com/kb/bulletin/vercel-april-2026-security-incident) — Vercel, 2026-04-21
4. [Control project visibility](https://docs.lovable.dev/features/project-visibility) — Lovable Docs, 2026-04 查閱
