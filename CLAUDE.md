# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 語言

所有回應與說明使用 **繁體中文（zh-TW）**。

## 專案用途

My News — 個人新聞頁。文章以 Markdown 撰寫，放在 `public/news/` 與
`public/magazines/<topic-slug>/`，站點**在 runtime 透過 fetch 載入**
（md 不再跟 TS bundle 一起編譯）。部署於 GitHub Pages
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

### Markdown 動態載入（`src/lib/news.ts`、`src/lib/magazine.ts`）

- md 檔放在 `public/news/*.md` 與 `public/magazines/<topic>/*.md`，**不經
  TypeScript/Vite 編譯**——作為靜態資產直接提供
- `scripts/generate-manifest.mts` 在 build / dev 啟動時掃 `public/` 產出
  `public/news/manifest.json`、`public/magazines/manifest.json` 當索引；
  runtime 先抓 manifest 再 parallel fetch 各篇 md
- `vite.config.ts` 的 `markdownManifest` plugin 在 dev server 監看 md 檔
  增減，自動重產 manifest 並觸發 full reload——新增文章不用重啟
- Frontmatter 用自寫的輕量解析器（`src/lib/frontmatter.ts`，**不是 gray-matter**），
  只支援單行 `key: value`、不支援 YAML 陣列/多行
- `tags` 欄位以逗號分隔，會被切成 `string[]`
- news 若缺 `date`，會從檔名前綴 `YYYY-MM-DD-...` fallback；magazine 必填
- news 清單依 `date` 新到舊排序；magazine topics 依 `_index.md` 的 `date` 排序
- 匯出（Promise-based，配合 React 19 `<Suspense>` + `use()`）：
  - `loadNewsMetaList()` / `loadNewsItem(slug)`
  - `loadMagazineTopics()` / `loadMagazineTopic(slug)` / `loadMagazineArticle(topic, slug)`
- Slug = 去掉 `.md` 的檔名（news 含日期前綴，magazine 用 `NN-name` 格式）
- 頁面用 `use()` 搭配 `<Suspense>`；`App.tsx` 為每條路由各掛一個 fallback
- **不要**自己 `.then` 鏈住回傳值再丟 `use()`；promise 以模組層 cache，
  identity 穩定才能被 `use()` 正確 reuse

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
- 路由：`/`（頭版）、`/news` / `/news/:slug`、`/magazines` / `/magazines/:topic`
  / `/magazines/:topic/:article`、`*`（fallback 回頭版）
- 換頁滾到頁首由 `src/components/scroll-to-top.tsx` 監聽 `useLocation`
  處理；hash（例如 `#某段`）會優先嘗試定位到該 id
- 主題／字體大小由 `src/lib/theme.tsx` 提供 context，header 右上
  `<ThemeToggle>` 切換；狀態寫 localStorage（keys：`mynews.colorScheme`
  → `light`/`dark`、`mynews.fontSize` → `sm`/`md`/`lg`）。字體大小只縮放
  `.prose`（見 `src/index.css` 的 `--article-scale`），不動導覽 UI

### Markdown 渲染

- 所有 md 文章統一用 `src/components/article-markdown.tsx` 渲染
  （ReactMarkdown + remarkGfm + custom components）
- **mermaid**：` ```mermaid ` fence 會被轉成 `<MermaidDiagram>`；mermaid
  package 走 dynamic `import('mermaid')` 懶載入，且會跟著 theme 重新
  `initialize`（dark 主題用 `theme: "dark"`）
- **table**：不依賴 `prose-table:block` hack；custom `table` component
  外包一層 `overflow-x-auto` wrapper，窄螢幕自然可左右捲
- 正文朗讀（`SpeechPlayer`）吃原始 markdown，用
  `src/lib/markdown-text.ts` 的 `markdownToPlainText` 去掉語法殘渣

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
`public/news/YYYY-MM-DD-daily-brief.md`。寫入時必須符合上方「Markdown
動態載入」的 frontmatter 規格。寫完 push 到 main 後 CI 會自動重新產
manifest 並部署。

## 注意事項

- TypeScript 6 已棄用 `baseUrl`，`tsconfig` 只留 `paths`；新增模組請依賴 `paths` 相對解析
- 有觀察到 auto-commit hook 會自動 commit & push，但對 git 操作仍建議明確執行
  以確保落地
- `src/components/ui/` 底下是 shadcn 產生的元件，升級時用 `--dry-run` 與 `--diff`
  預覽，**不要直接 `--overwrite` 覆蓋本地修改**
