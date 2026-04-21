---
title: SaaS 為什麼都跑在 Vercel 上
issue: Vol.2
date: 2026-04-21
tags: Vercel, SaaS, 基礎設施, 封面故事
summary: 從一家「部署 Next.js 的地方」變成 $340M ARR、90 億美元估值的 AI Cloud，Vercel 為什麼成了現代 SaaS 的預設底座？這一期拆解市場、引擎、AI 棧與帳單四個切面。
---

2024 年初，Vercel 的 ARR 是 1 億美元。到了 2026 年 2 月，這個數字跑到了 3.4 億美元 run-rate——兩年多翻了三倍以上，估值在 2025 年衝到 93 億美元。更驚人的是，根據創辦人 Guillermo Rauch 的說法，**平台上 30% 的新應用是 agent 自己部署的**，不是人類開發者按的按鈕。

這一期我們不談「如何用 Next.js」那種入門話題。我們要問一個更尖銳的問題：**為什麼幾乎所有你聽過的 AI-native SaaS，從 Perplexity、Vellum 到一堆 YC 新創，都把前端與邊緣運算層壓在 Vercel 身上？** 它到底賣的是什麼？Next.js 整合？DX？還是那個越來越完整的 AI 棧？

> 平台每週服務 115 億次請求、4 百萬個活躍網域，Fluid Compute 一項產品就負擔其中 450 億次／週（截至 2025-07）。規模到這個量級，平台選型已經不是偏好問題，而是架構決策。

四篇文章串成一條主線：先看**市場**為什麼傾斜（誰在用、用了什麼）；再看**引擎**的技術轉折（Fluid Compute 為什麼重要）；接著是**AI 棧**怎麼從 model gateway、SDK 疊到 durable workflow；最後是**反面**——帳單黑洞與退場路徑，什麼時候 Vercel 不是答案。

本期資料截至 2026-04，具體數字與引用來源列於各篇文末。
