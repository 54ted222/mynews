---
title: Vite + shadcn/ui 的設定筆記
date: 2026-04-15
tags: Vite, shadcn, Tailwind
summary: 紀錄使用 Vite 7、Tailwind v4、shadcn/ui 的專案初始化流程。
---

# Vite + shadcn/ui 的設定筆記

以下是這個專案使用到的核心工具：

| 工具 | 版本 | 用途 |
| --- | --- | --- |
| Vite | 7.x | 打包與開發伺服器 |
| React | 19 | UI 框架 |
| Tailwind CSS | v4 | 樣式系統 |
| shadcn/ui | 最新 | 元件庫 |

> 重點：Tailwind v4 直接以 `@import "tailwindcss";` 啟用，不再需要 `tailwind.config.js`。
