---
title: 組織演化 — 10 人團隊做出 100 人產品
order: 3
date: 2026-04-21
summary: 當 agent 能寫 60% 的 code、處理 40% 的工單，工程師、設計師、PM 的角色如何重組？看三家新創的實作。
---

# 組織演化 — 10 人團隊做出 100 人產品

## 舊劇本不再成立

以前的成長劇本是：PMF → 招募 → 功能切分 → 各自為政。現在的劇本是：PMF → 把流程交給 agent → 工程師當「workflow designer」。

這不是 marketing slogan，這是 Stanford AI Index 2026 的硬數據：**22-25 歲開發者的就業率下降 20%**，但團隊整體產出沒降。差額去了哪裡？去了 agent。

## 三種角色正在重組

**工程師**：寫程式的時間從 60% 降到 30%，剩下的時間拿去做 eval、寫 spec、review agent output。能力需求從「寫得快」變成「描述得準」。

**設計師**：UI 還是要設計，但更多時間花在設計**失敗狀態**——agent 做錯時怎麼降級？怎麼讓使用者一眼看出是 AI 生的還是人寫的？怎麼收集修正 signal？

**PM**：以前寫 PRD，現在寫 eval set。PRD 是「我們要做什麼」，eval set 是「做到什麼程度才算對」——後者是給 agent 看的，也是給工程師 benchmark 用的。

## 10 人團隊的實際編制

觀察三家 ARR 破 $10M 的 AI-native 新創，共同編制大致是：

- 2 人做 **core model/agent loop**
- 2 人做 **data + eval pipeline**
- 2 人做 **product + design**
- 1 人做 **DevEx / infra**
- 1 人做 **sales engineering**（示範、客戶整合）
- 2 人 **founder/GTM**

沒有 QA、沒有 Ops、沒有前端後端分家。**QA 被 eval pipeline 吃掉，Ops 被 agent 吃掉**。

## 給想擴張團隊的人

先別急著招人。每一個你想加的人，先問：**這個職位的工作，有沒有 50% 能被 eval set + agent 接管**？如果有，先把那 50% 做掉，剩下 50% 再決定要不要找全職的人。

這不是省錢，是**避免組織被既有分工綁死**。一旦你有 3 個前端工程師，你的產品設計就會不自覺地朝著「需要 3 個前端工程師維護」的方向長。

---

**來源**：Stanford AI Index 2026；First Round Capital 2026 State of Startups。
