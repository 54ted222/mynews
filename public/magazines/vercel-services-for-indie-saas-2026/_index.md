---
title: Vercel 服務全景：給個人 SaaS 創業者的拆裝指南
issue: Vol.11
date: 2026-04-26
tags: Vercel, 個人 SaaS, indie hacker, 雲端基礎建設, 產品線
summary: Vercel 從「部署 Next.js 的地方」變成八條產品線的 AI Cloud。對 indie 來說，問題不是「要不要用 Vercel」，而是「該用它的哪幾塊、什麼時候用、什麼時候逃」。本期六篇拆給你看。
---

四個月前我們在 Vol.3 拆過 Vercel 為什麼成了 AI-native SaaS 的預設底座——市場、Fluid Compute 引擎、AI 棧、帳單。那一期談的是**現象**：為什麼幾乎所有你聽過的 AI 新創都壓在這片地上。

這一期換個角度。**如果你是個人 SaaS 創業者，現在要從 0 開始做一個能收錢的東西，Vercel 賣的這一整套產品線到底該怎麼用？**

這個問題比想像中難。Vercel 在過去 18 個月把產品線從「Next.js 託管 + serverless functions」擴張到八條：Functions（with Fluid Compute）、Sandbox、Workflow、Queues、Blob、Edge Config、Marketplace、AI SDK、AI Gateway、v0。每一條都是獨立計價、各自有 Hobby / Pro 限制——你選錯就燒錢，選對就能讓一個人撐起一條產品線。

> 截至 2026-04，Vercel 上 30% 的新應用是 agent 自己部署的，平台每週服務 115 億次請求。對個人開發者來說，這代表的是兩件事：基礎建設層的工具鏈已經成熟到一個人能上線複雜系統，但同時——Vercel 把成本曲線設計給「能養 agent 跑 24 小時」的玩家，不是給「想用免費 tier 試水溫」的你。

六篇文章串成 indie SaaS 在 Vercel 上的完整生命週期：

第一篇先把**服務地圖**畫完，給你一個能對照需求的速查表。第二篇談**從 Hobby 到第一個付費客戶**的起步路徑——Hobby plan 條款明文禁止商用，多數 indie 都低估了這一條。第三、四篇拆**兩個技術棧**：AI SaaS 怎麼用 AI SDK + Gateway + Sandbox 組裝、資料層怎麼在 Marketplace 上選 Neon／Supabase／Upstash。第五篇談**背景任務**——Workflow 與 Queues 對 indie 的意義，以及「什麼時候你其實不需要它們」。

最後一篇是反面：**避雷與「該逃離 Vercel」的訊號**。Vercel 的成本曲線在某個點開始陡升，bandwidth $0.15/GB、Image Optimization 28K 張會多 $115／月——這些不是恐嚇，是真實 indie hacker 帳單。本期用一條 exit playbook 結尾：什麼樣的工作負載繼續留在 Vercel 划算、什麼時候該搬到 Cloudflare 或 Hetzner。

本期定位是工具書，不是 Vercel 的廣告也不是反 Vercel 檄文。資料截至 2026-04，定價、限制、產品狀態以各篇文末列的官方來源為準。
