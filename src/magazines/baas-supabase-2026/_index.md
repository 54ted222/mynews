---
title: 新創為什麼都選 Supabase
issue: Vol.3
date: 2026-04-22
tags: Supabase, BaaS, 新創, 基礎設施, 封面故事
summary: ARR 從 $30M 衝到 $70M、估值四個月從 $2B 翻倍到 $5B，Supabase 把「BaaS = 一張 Postgres」這條路徑跑出了一個 $10B 的估值提案。這一期從市場、核心、AI 疊法、帳單四個切面看它憑什麼。
---

2025 年 10 月，Supabase 以 $5B 估值完成 Series E——距離 $2B 那輪只過了 4 個月。到 2026 年 4 月，據多個二手來源指出，它正在談一輪**把估值翻到 $10B** 的新錢。同期，開發者從 100 萬衝到 400 萬，其中 **30% 的新註冊來自 AI 應用**；每天有 2,500 個新資料庫上線。

這一期我們不談「Firebase vs Supabase」那種入門比較。我們要問一個更尖銳的問題：**為什麼 AI 世代的新創——從 Mozilla AI、Zapier、到 Vercel 自家產品——幾乎不經思考就把後端壓在 Supabase 上？** 它真正賣的是一張 Postgres，還是一種「BaaS 哲學」？

> Next.js on Vercel 的部署中，**45% 的後端是 Supabase**（截至 2026 Q1，開源社群統計）。在 Vercel 端 Cursor、Lovable、v0 一路壓著 Next.js 的同時，Supabase 等於收了另一半場。

四篇文章串成一條主線：先看**市場**為什麼傾斜（誰在用、估值怎麼翻倍、飛輪是什麼）；再看**核心**——Supabase 的「一切塞進 Postgres」哲學（RLS、pgvector、pg_cron、pgmq 怎麼取代一堆服務）；接著是**AI 疊法**——pgvector + Edge Functions + MCP Server 怎麼組出一個 RAG／agent 後端；最後是**反面**——Spend Cap 蓋不住的那幾條命門，以及什麼情境下該挑 Convex / Neon 或自架。

本期資料截至 2026-04，引用來源列於各篇文末。
