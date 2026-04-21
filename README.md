# My News

個人新聞頁 · 以 Markdown 撰寫 · 部署於 GitHub Pages。

使用 **React + Vite + TypeScript + Tailwind CSS v4 + shadcn/ui**。

## 開發

```bash
npm install
npm run dev
```

## 新增一篇文章

在 `src/news/` 底下新增一個 `.md` 檔，建議檔名以日期開頭（例如 `2026-04-21-welcome.md`）。
frontmatter 欄位：

```md
---
title: 標題
date: 2026-04-21
tags: 標籤1, 標籤2
summary: 摘要
---

正文……
```

沒有指定 `date` 時，會自動從檔名前綴解析。

## 建置

```bash
npm run build
```

## 部署

推送到 `main` 分支後，GitHub Actions 會自動建置並部署到 GitHub Pages。

### 一次性設定

1. 在 GitHub repo 建立後，到 **Settings → Pages**。
2. 將 **Source** 設為 **GitHub Actions**。
3. 若 repo 名稱不是 `mynews`，請調整 `vite.config.ts` 裡的 `base`。

## 路由

使用 `HashRouter`，URL 長這樣：`https://<user>.github.io/mynews/#/news/<slug>`。
這樣不用另外處理 GitHub Pages 的 SPA 404 fallback。
