---
title: 技術抉擇 — agent、workflow 與「夠好的抽象」
order: 2
date: 2026-04-21
summary: Agent 框架戰爭打了兩年，勝出的不是最聰明的，是最無聊的。看 2026 年團隊怎麼選技術棧、在哪裡停止抽象。
---

# 技術抉擇 — agent、workflow 與「夠好的抽象」

## 為什麼 agent 框架戰爭結束了

2024 年大家都在蓋 agent 框架，2026 年大家都在拆。原因很直白：**當模型本身能規劃 multi-step workflow，中間那層編排器就是多餘的**。

活下來的框架做對了一件事：不要太聰明。它們長得更像 async job queue + observability，而不是「agent orchestration platform」。

## 選型的三個提問

新產品在決定要不要自己蓋 agent 層之前，先問：

1. **這個決策會不會變**？會的話（模型供應商、prompt、工具集），就寫薄一點、換起來不要哭
2. **失敗時誰去救**？如果是工程師，log 結構比 UI 重要；如果是客服，trace UI 比 log 重要
3. **多長才算太長**？超過 30 秒的任務就不是 agent 了，是 pipeline——換一個心智模型去設計

## 「夠好的抽象」是什麼

不要設計「萬用 tool interface」。你的 agent 不會真的呼叫任意工具——它只會呼叫你測過的那 12 個。把那 12 個寫扎實，比蓋一個 plugin marketplace 更有價值。

同理，不要太早抽 LLM provider。先讓一個 provider 跑滿你所有測試，再換第二家。**過早抽象的代價是所有地方都用共同分母能支援的功能**，這會讓產品看起來像 2023 年的 demo。

## Observability 才是真正的護城河

模型會變聰明、框架會被淘汰、prompt 會被 leak，但你累積的**生產環境 trace + 人類標註**不會消失。這是今天最被低估的資產。把一塊錢花在 eval pipeline，勝過花在第五個 agent SDK。

---

**來源**：LangChain 2026 State of AI Agents；Anthropic Customer Engineering Notes 2026-02。
