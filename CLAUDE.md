# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 語言

所有回應與說明使用 **繁體中文（zh-TW）**。

## 專案用途

My News — 個人新聞頁。文章以 Markdown 撰寫並放在 `src/news/`，站點在
build 時靜態內嵌所有文章內容（無 runtime fetch）。部署於 GitHub Pages
（<https://54ted222.github.io/mynews/>），推到 `main` 由 GitHub Actions
自動建置部署。

## 常用指令

```bash
npm run dev        # 開發伺服器，預設 http://localhost:5173/mynews/
npm run build      # tsc -b + vite build（build 前會做型別檢查）
npm run lint       # ESLint
npm run preview    # 預覽 build 產物
```

新增 shadcn 元件（用 npx，非其他 runner）：

```bash
npx shadcn@latest add <component>
```

## 架構要點

### Markdown 新聞載入（`src/lib/news.ts`）

- 透過 Vite 的 `import.meta.glob('/src/news/*.md', { query: '?raw', eager: true })`
  在 **build 時期**靜態讀取所有 `.md`；不是 runtime fetch
- Frontmatter 用自寫的輕量解析器（**不是 gray-matter**），只支援單行
  `key: value`、不支援 YAML 陣列/多行
- `tags` 欄位以逗號分隔，會被切成 `string[]`
- 若缺 `date`，會從檔名前綴 `YYYY-MM-DD-...` fallback
- 清單依 `date` 新到舊排序
- 匯出：`listNews()` 回傳不含 `content` 的 meta list、`getNews(slug)` 回傳單篇
- Slug = 去掉 `.md` 的檔名（含日期前綴）

新增文章時務必維持以下格式，否則不會正確顯示：

```md
---
title: 標題
date: YYYY-MM-DD
tags: 標籤1, 標籤2
summary: 一句摘要（用於列表頁）
---

# 標題（H1 需在正文，detail 頁不會再額外渲染 frontmatter title）

正文……
```

### 路由

- 使用 **HashRouter**（`src/App.tsx`）——URL 長 `…/mynews/#/news/<slug>`。
  刻意選用以避免 GitHub Pages SPA 的 404.html fallback hack。改成
  `BrowserRouter` 會壞掉，除非同時補 404 重導。
- 路由：`/`（列表）、`/news/:slug`（內文）、`*`（fallback 回列表）

### UI / 樣式

- **shadcn/ui with base-nova preset**——**底層是 Base UI（`@base-ui/react`），不是 Radix**
  - Button **沒有** `asChild` prop。要把 Link 樣式成 button，套用 `buttonVariants`：
    ```tsx
    <Link to="/" className={cn(buttonVariants({ variant: "ghost" }))}>…</Link>
    ```
  - 其他元件若需要自訂 trigger，用 Base UI 的 `render` prop 而非 `asChild`
- **Tailwind v4**：用 `@import "tailwindcss";` 與 `@theme inline` 語法，**沒有** `tailwind.config.js`
- Typography 透過 `@plugin "@tailwindcss/typography";` 在 `src/index.css` 啟用（`prose` 樣式）
- 路徑別名：`@/*` → `src/*`（同時設定在 `tsconfig.json`、`tsconfig.app.json`、`vite.config.ts`）

### 部署

- `vite.config.ts` 的 `base: "/mynews/"` 對應 repo 名稱。**repo 改名要同步改這裡**
- `.github/workflows/deploy.yml` 使用 `npm install`（刻意不用 `npm ci`）——
  macOS 產的 lock file 會缺 Linux 平台的 `@emnapi/*` optional deps，`npm ci` 會失敗
- Settings → Pages 的 Source 必須設為 **GitHub Actions**

## 日常 Routine

`ROUTINES.md` 是每日自動化腳本（Claude Routines），會產出一篇
`src/news/YYYY-MM-DD-daily-brief.md`。寫入時必須符合上方「Markdown 新聞載入」
的 frontmatter 規格。

## 注意事項

- TypeScript 6 已棄用 `baseUrl`，`tsconfig` 只留 `paths`；新增模組請依賴 `paths` 相對解析
- 有觀察到 auto-commit hook 會自動 commit & push，但對 git 操作仍建議明確執行
  以確保落地
- `src/components/ui/` 底下是 shadcn 產生的元件，升級時用 `--dry-run` 與 `--diff`
  預覽，**不要直接 `--overwrite` 覆蓋本地修改**
