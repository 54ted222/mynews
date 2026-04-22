# TODO

- [x] 產生文章的時候不要去編譯程式嗎？
- [x] 優化架構 md 變成動態載入
- [x] md 支援 mermaid 圖表
- [ ] nextjs 分成兩階段的方式去呈現，第一階段先使用S S G的方式去產生靜態網站第二階段在使用動態網站
- [x] AI 語音
- [x] table 優化 手機可以左右滑動
- [x] 黑色主題
- [x] 換頁滾動到最上方
- [x] supabase 雜誌
- [x] 雜誌與新聞一樣要提供瀏覽器語音播放功能

- [x] 每一篇文章附一份語音逐字稿 sidecar（`<slug>.transcript.md`，純文字口語），SpeechPlayer 預設播逐字稿、可切換全文、旁邊有「查看逐字稿」彈框按鈕
- [x] 文章用 GFM footnote 標註專有名詞（`術語[^slug]` + `[^slug]: 定義`），remark-gfm 渲染成可點擊的上標編號 / 文末定義區，不算入字數
- [x] MAGAZINES.md 新增第三階段 subagent：正文完成後負責加 footnote + 寫 transcript sidecar（檔案已搬至 prompts/MAGAZINES.md）
- [x] ROUTINES.md 每日 brief 寫完後派 subagent 加 footnote + 產 transcript sidecar（檔案已搬至 prompts/ROUTINES.md）
- [x] 優化建立詞，專注在寫ＭＤ黨案 不要碰專案程式
- [x] 每篇文章要保留搜尋關鍵字 點擊後可以直接GOOGLE搜尋
- [ ] 加入 zustand
- [ ] 加入教學課程 先在AI對話框長出完整的課綱之後才可以有AI去生成每一堂課
- [ ] 語音優化的方式要獨立一個M D檔，當中要特別標示出不要朗讀程式碼或朗讀表格，而是要轉成白話文的方式向口語一樣的說出來，例如遇到程式碼的時候要敘述程式碼的邏輯與處理方式和使用的關鍵套件，而不是朗讀程式碼
