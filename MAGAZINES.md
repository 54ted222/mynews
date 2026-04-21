# MAGAZINES · 雜誌主題專刊

本檔為「雜誌」系列的產出腳本。**使用者提供一個題目，你（Claude）負責整個
主題的內容策劃與撰寫**，產出一個放在 `src/magazines/<topic-slug>/` 下的
完整專刊（目錄頁 `_index.md` + 數篇文章）。

與 `ROUTINES.md` 的「每日報紙」定位不同：
- **報紙**（`src/news/`）：每日彙整多則動態，訊息導向、可替代性高
- **雜誌**（`src/magazines/`）：單一主題深度專刊，有主軸、有結構，
  讀者讀完一期會有完整的世界觀

---

## 兩階段流程（務必照順序）

> ⚠️ **關鍵規則 A**：**主題頁與文章的生成必須分開，文章用 subagent 產出**。
> 原因：每篇文章字數長、語氣與結構需要獨立思考，若主 agent 一口氣寫
> 完所有篇幅，context 會互相干擾導致各篇同質化，且任一篇出錯時難以局
> 部重試。
>
> ⚠️ **關鍵規則 B**：**開寫前必須上網搜尋，嚴禁憑空想像**。
> 訓練資料有截止日，雜誌談的往往是近期動態；憑記憶寫會產生虛構人名、
> 虛構產品、過期數據。所有事實型陳述（公司、產品、數字、事件）都必須
> 有當下可追溯的來源。

### 階段零：研究（動筆前必做）

> 主 agent 與 subagent 都要研究，**但研究深度不同**：
>
> - **主 agent**：做**廣度研究**，為了決定「這一期要切成哪幾篇」。覆蓋主題的
>   不同面向，確認每個切面都有料可寫。
> - **Subagent**：做**深度研究**，為了把「自己那篇」寫扎實。主 agent 給的
>   research notes 只是**起跳點**，不是上限；必須自己再 WebSearch / WebFetch
>   挖一手資料、原文、案例細節、反方觀點。

#### 主 agent 的研究步驟

1. 用 **WebSearch** 針對主題做 3–8 次查詢，覆蓋不同切面與關鍵字
2. 對關鍵文章、官方 blog、一手資料用 **WebFetch** 讀全文
3. 建立「事實筆記」：每一條事實配一個 URL 與日期
4. 若搜尋結果太舊、太薄或全是二手轉載，**停下來告訴使用者**（例如
   「這個題目目前公開資訊不足，建議改換切角 / 延後 / 縮小範圍」），
   不要硬寫

#### Subagent 的研究步驟（不能省略）

1. 讀主 agent 給的 research notes，**當成起點**而非全部
2. 針對自己那篇的論點再 WebSearch 3–8 次，關鍵字要比主 agent 更具體
   （例如主 agent 搜「AI SaaS 定價」，subagent 搜「Cursor 2026 pricing
   change reddit」「Vercel AI SDK seat-based pricing backlash」）
3. 對最關鍵的 2–4 個來源用 WebFetch 讀全文，不要只靠搜尋結果摘要
4. 找一手資料：公司官方 blog、SEC filing、GitHub commit、創辦人訪談原文、
   學術論文、開發者 Reddit / HN 的實測回報
5. 主動找**反方觀點與例外案例**，避免單邊敘事
6. 把新查到的事實加進自己的筆記（寫完後於文末來源段列出）

### 資料來源優先順序

1. **官方一手**：公司 blog、GitHub Release、官方 X / LinkedIn、SEC / 法院文件
2. **第一手討論**：Hacker News、Product Hunt、Reddit（r/SaaS、r/LocalLLaMA、主題相關 sub）、GitHub issue / discussion
3. **高訊號分析**：Stratechery、a16z、Ben's Bites、Latent Space、主題相關學術 paper
4. **新聞聚合**：TechCrunch、The Information、The Verge（可用，但要交叉比對）

**避免**：內容農場、純 SEO 聚合站、二手翻譯、無作者無日期的部落格、
AI 生成的摘要站。

### 事實核對規則

- 任何**具體數字**（ARR、估值、使用者數、成長率、市佔）必須來自一手或可信
  二手來源；無法查證就寫「估算」或乾脆不寫
- **公司、產品、人名**若你記不清楚，先搜尋確認拼寫與現況；不要用
  「類似 X 的公司」之類的敘述帶過
- **引用 URL** 必須在文章末段列出，讓讀者可追溯
- **時間敏感資訊**（定價、API 限制、團隊規模）要標註截至日期（例如「截至 2026-04」）

### 階段一：主 agent — 策劃與主題頁（由你直接執行）

1. **與使用者對齊題目範圍**：必要時反問，確認這期要談什麼、不談什麼、
   讀者是誰、預期有幾篇
2. **執行階段零的研究**：蒐集足夠的事實筆記（至少 10–20 條帶 URL 的事實），
   才有底氣決定目錄。研究不足就回去搜，不要靠「感覺」切章節
3. **決定 `topic-slug`**：kebab-case 英文或英數，例如 `ai-productization-2026`、
   `indie-saas-pricing`，作為資料夾名稱與 URL 路徑
4. **決定 `issue`**：`Vol.N`（自行遞增，跨主題連號）
5. **規劃目錄**：3–6 篇文章，每篇決定
   - `order`（整數，從 1 開始）
   - `slug`（kebab-case，建議用 `01-market`、`02-technology` 格式讓檔案排序與 order 對齊）
   - `title`（繁中，不含章節編號）
   - `summary`（一句話 40–80 字，說清本篇特殊價值，用於目錄頁與雜誌列表 hover）
   - 確保每篇角度不重疊，能串成一條主線
6. **撰寫 `_index.md`**：
   - frontmatter（下方規格）
   - intro 正文（300–600 字）：**不要放 H1**（目錄頁會渲染 `title`），
     直接寫本期的定位、動機、三條主線如何串起來
   - intro 可引用 1–2 條研究中最關鍵的事實來校準讀者預期
7. **寫入** `src/magazines/<topic-slug>/_index.md`
8. **把事實筆記留給 subagent**：整理成可分派的 research notes（下一節說明）。
   這是給 subagent 的**起跳點**而非答案——目的是讓 subagent 不用從零開始，
   但 subagent 仍必須自己做深度研究（見「Subagent 的研究步驟」）
9. **呈現目錄給使用者**確認後再進入階段二。若使用者調整，修改主題頁與目錄後再往下走。

### 階段二：派工 subagent — 各篇文章獨立產出

**每篇文章開一個 subagent**（使用 Agent 工具，`subagent_type: general-purpose`），
多篇可以**並行**派出（單則訊息多個 Agent 工具呼叫）。

主 agent **不要自己寫任何文章正文**——只負責派工、驗收、整併。

#### Subagent 提示詞模板（必備欄位）

subagent 不看主對話歷史，提示詞必須自足。每次派工必須包含：

```
## 你的任務
為本期雜誌撰寫一篇文章並寫入指定路徑。寫完即結束，不要做其他事。

## 研究要求（先做再寫，不可省略）

> **你要自己做深度研究，不是靠主 agent 餵的 research notes 寫完**。
> research notes 只是起跳點，讓你不用從零找方向；真正的內容要靠你自己
> 挖出來。沒做獨立研究、只改寫 research notes 的稿件會被退件。

必做動作：
1. **自己 WebSearch 至少 3–8 次**，關鍵字要比主 agent 更具體（例如主 agent
   搜「AI SaaS 定價」，你搜「Cursor 2026 pricing change reddit」、
   「Vercel AI SDK seat-based pricing backlash」）
2. **對 2–4 個最關鍵的來源用 WebFetch 讀全文**，不要只看搜尋摘要
3. **找一手資料**：官方 blog、SEC filing、GitHub commit / release notes、
   創辦人訪談原文、學術論文、HN / Reddit 實測回報
4. **主動找反方觀點與例外案例**，避免單邊敘事
5. 所有事實（公司、產品、數字、事件）都必須有可追溯 URL
6. **嚴禁憑記憶寫**——訓練資料截止後的動態、具體數字、新產品名稱，
   一律現搜現查；不確定就標「估算」或略過
7. 若某個關鍵論點查不到可信資料，回報「此角度資料不足，建議 X」，
   不要用推測填空

可信來源等級：官方一手 > 第一手討論（HN / Reddit / PH / GitHub）
> 高訊號分析（Stratechery、a16z、Ben's Bites 等）> 主流新聞；
避免內容農場、AI 聚合站、無作者無日期的部落格。

## 本期主題頁（完整貼入）
---
<_index.md 的全文，含 frontmatter>
---

## 本期目錄（所有篇目，讓你知道其他篇在談什麼、避免重複）
01. <title> — <summary>
02. <title> — <summary>
03. <title> — <summary>
...

## 主 agent 已蒐集的 research notes（起跳點 — 你要自己驗證並大幅延伸）
- <fact 1> — <url> (<日期>)
- <fact 2> — <url> (<日期>)
- ...

> 以上只是讓你快速進入脈絡的起點。寫作時預期**至少一半的事實應來自你
> 自己新查到的來源**；只重述 research notes 等於沒做研究。

## 你要寫的這一篇
- order: <N>
- slug: <slug>
- title: <title>
- summary: <summary>
- 路徑：src/magazines/<topic-slug>/<slug>.md

## 寫作規格
- 字數：1000–1800 字（繁體中文）
- 結構：
  1. 正文第一行放 `# <title>` H1
  2. 用 H2 切 3–5 個區塊，每區塊一個核心論點
  3. 第一個 H2 建議為 `## TL;DR`，以 3 條 bullet 列出本篇關鍵結論
  4. 最後用 `---` 分隔線接一段 **來源**，列 2–4 個可追溯的引用
     （格式：`1. [標題](URL) — 媒體/作者，YYYY-MM-DD`）
- 語氣：直接、重數據、避免行銷語言；有觀點，不做資訊流水帳
- 不要重複其他篇已經講過的內容，必要時可引用「見本期第 X 篇〈...〉」
- 不要放圖片（目前站點沒有處理圖片 pipeline）
- 可以用粗體、bullet、短引言 blockquote 強化節奏
- 時間敏感資訊標註截至日期（例如「截至 YYYY-MM」）

## Frontmatter 規格（嚴格遵守，單行 key: value，順序固定）
---
title: <title>
order: <N>
date: <YYYY-MM-DD，與主題頁一致>
summary: <summary>
---

## 交付
- 用 Write 工具寫入 `src/magazines/<topic-slug>/<slug>.md`
- 回報 200 字內：寫了什麼、**自己新查到哪些來源**（與 research notes
  重複的不算）、有哪些判斷上的取捨
- 不要執行 git、不要修改其他檔案、不要寫日誌
```

#### 為什麼要把整份目錄貼給 subagent

subagent 不知道其他篇在講什麼，如果只給本篇的 title+summary，很容易
跟別篇撞題或用到同樣的例子。貼完整目錄能讓它自我避讓。

#### 為什麼要把主題頁全文貼給 subagent

主題頁的 intro 定義了本期的世界觀與敘事主軸；沒有它，subagent 會寫出
一篇技術正確但跟主題無關的文章。

---

## 站點檔案規格（重要）

雜誌由 `src/lib/magazine.ts` 用 `import.meta.glob('/src/magazines/**/*.md')`
在 build 時載入。格式不符會導致主題或文章消失。

### 資料夾結構

```
src/magazines/
  <topic-slug>/
    _index.md          # 目錄頁（必須）
    01-<slug>.md       # 文章
    02-<slug>.md
    ...
```

- 資料夾名稱就是 URL `/magazines/<topic-slug>`
- 底線開頭的 `_index.md` 專門用來辨識目錄頁，其他 `.md` 都是文章
- 檔名建議用 `NN-slug.md` 格式（`NN` 等於 `order`），讓檔案系統排序與頁面排序一致

### `_index.md` frontmatter（必填，順序固定）

```md
---
title: 本期標題
issue: Vol.N
date: YYYY-MM-DD
tags: 標籤1, 標籤2, 標籤3
summary: 本期一句話定位，80–120 字。
---

<intro 正文，300–600 字，不放 H1>
```

欄位說明（見 `src/lib/magazine.ts`）：

- `title`：目錄頁 header 會渲染，**正文不要再寫一次 H1**
- `issue`：建議 `Vol.N`，會顯示在 header badge
- `date`：整期的發刊日，與所有文章的 `date` 保持一致
- `tags`：逗號分隔，會自動切成陣列
- `summary`：顯示在雜誌列表、首頁的卡片摘要
- `cover`：**可選**，目前 loader 有讀但頁面尚未使用，可暫時省略

### 文章 `.md` frontmatter（必填，順序固定）

```md
---
title: 本篇標題
order: N
date: YYYY-MM-DD
summary: 本篇一句話摘要，40–80 字。
---

# 本篇標題

<正文>
```

- `order`：整數，決定目錄排序（相同時依 slug 字母序）
- `title`：**正文第一行要再寫一個 `# title` H1**（與報紙一致，文章頁不渲染 frontmatter title）
- 不需要 `tags`（雜誌以主題為單位，tags 放在 `_index.md`）

### 解析限制（與報紙相同）

- 只支援單行 `key: value`，**不支援 YAML 陣列、多行值、引號內跨行**
- 逗號分隔的欄位會自動切成陣列（目前只有 `tags`）
- frontmatter 的引號（`"..."` / `'...'`）會被 strip
- 缺 `date` 時不會從檔名 fallback（與報紙不同），所以 **date 必填**

---

## 寫作規格總結

| 項目 | 主題頁 (`_index.md`) | 單篇文章 |
| --- | --- | --- |
| 字數 | 300–600 字 | 1000–1800 字 |
| H1 | **不要放** | 正文第一行 `# title` |
| Frontmatter | title / issue / date / tags / summary | title / order / date / summary |
| 負責人 | 主 agent | subagent |
| 功能 | 定位、動機、主線串連 | 單一論點、可獨立閱讀 |

通用語氣要求：

- 繁體中文（zh-TW）
- 直接、重數據、避免行銷語言
- 觀點先行，論據佐證；不做純流水帳式整理
- 不確定的數據標註「估算」
- 可用粗體、bullet、blockquote 強化節奏，勿過度裝飾

---

## 交付步驟

1. 階段一完成後，檢查使用者對主題頁與目錄是否同意
2. 派出 N 個 subagent 並行寫完 N 篇文章
3. 主 agent 驗收每篇：
   - 檔案是否存在於正確路徑
   - frontmatter 是否齊全、格式正確
   - H1 是否在正文第一行、`title` 是否一致
   - 是否與其他篇重疊
4. 執行 build 檢查：
   ```bash
   npm run build
   ```
5. （可選）啟 dev server 用 Playwright 掃一次
   `/magazines`、`/magazines/<topic-slug>`、`/magazines/<topic-slug>/<slug>`
   三層頁面，確認渲染正常
6. **Push 到 `main`**（完成後最後一步，直接執行，不需再等 review）：
   ```bash
   git add src/magazines/<topic-slug>
   git commit -m "magazine: <topic-slug> <issue>"
   git push origin main
   ```
   推上 main 後 GitHub Actions 會自動部署到
   <https://54ted222.github.io/mynews/>。

---

## 驗收檢查（產出前自審）

- [ ] 主 agent 與每個 subagent 都實際做過 WebSearch / WebFetch，**不是靠記憶寫**
- [ ] 每篇 subagent 的來源清單中**至少一半是 research notes 之外新查到的**
- [ ] 每篇文末都有可追溯來源（URL + 日期），無單純「某知名公司表示…」式敘述
- [ ] 具體數字（估值、ARR、成長率、使用者數）都有來源；無法查證的標「估算」或刪除
- [ ] 公司、產品、人名拼寫正確，狀態為近期（非已關站、已被收購仍當現役）
- [ ] `src/magazines/<topic-slug>/_index.md` 存在且 frontmatter 齊全
- [ ] 所有文章 frontmatter 齊全、`order` 無重複、`date` 與主題頁一致
- [ ] 每篇文章正文第一行都有 `# title` H1
- [ ] `_index.md` 正文沒有 H1（header 會渲染 title）
- [ ] 文章數量 3–6 篇，彼此角度不重疊
- [ ] `npm run build` 通過
- [ ] （若驗證）列表頁、目錄頁、文章頁三層都正常渲染
- [ ] 每篇 subagent 的產出都是它獨立思考的結果，不是主 agent 改寫

---

## 反模式（請避免）

- ❌ **憑記憶 / 憑感覺寫雜誌內容**——訓練資料有截止日，雜誌談的往往是近期動態
- ❌ **沒來源的具體數字**——「據報導」「估計超過 $1B」無出處的敘述一律刪掉或補查
- ❌ **虛構公司 / 產品 / 人名**——不確定就搜，不要用「類似 X 的公司」帶過
- ❌ 主 agent 自己把三篇都寫完——語氣會同質化、context 會爆
- ❌ subagent 提示詞只給 title 與 summary——會偏題、會撞題
- ❌ subagent 提示詞沒附 research notes 或研究要求——會靠記憶編造
- ❌ subagent 只改寫主 agent 的 research notes 就交稿——失去深度研究的意義
- ❌ subagent 看到 research notes 就不再 WebSearch——把起跳點當成終點
- ❌ 文章檔用 YAML 陣列（`tags: [a, b]`）或多行 summary——解析器不吃
- ❌ `_index.md` 裡放 `# 標題` H1——會與 header 重複
- ❌ 超過 6 篇文章——讀者讀不完，本期定位會模糊
- ❌ 沒推上 `main`——本站靠 push to main 觸發 GitHub Pages 部署，沒 push 等於沒發刊
