---
title: 從需求到分鏡：AI 影片專案先贏在流程設計
order: 1
date: 2026-04-23
summary: 多數 AI 影片失敗不是模型太弱，而是沒有把目標拆成可驗證的鏡頭任務；先把流程設計好，才會穩定出片。
keywords: AI video workflow pre production checklist, Runway Gen-4 consistent characters workflow, Veo prompt adherence video pipeline, Firefly Generate Video beta production workflow, AI video storyboard template shot list, AI video revision loop prompt log
---

# 從需求到分鏡：AI 影片專案先贏在流程設計

## TL;DR

- AI 影片專案最常見的失敗點不是模型品質，而是**需求沒有被切成鏡頭級任務**。
- 你需要一條「企劃 → 分鏡 → 低成本預視化 → 高品質生成 → 後期合成」的固定管線，才能降低重工。
- 先建立「可追溯的 prompt 與版本紀錄」，比盲目追新模型更能提升交付穩定性。

## 先定義成功條件，而不是先選工具

很多團隊一開案就問「Runway、Veo、Firefly 哪個比較強」，這個問題本身就太早。因為你真正要交付的是一支影片，而不是一段模型 benchmark[^benchmark]。如果目標是廣告素材，成功條件可能是轉化率與品牌一致性；如果目標是教育內容，成功條件可能是資訊密度與觀看完成率。

所以第一步應該是建立「任務規格單」：

- 影片用途（廣告／社群短片／教學／品牌形象）
- 發布平台（9:16、1:1、16:9）
- 可接受的素材來源（全生成、半生成、實拍混剪）
- 法務限制（商用授權、可追溯來源、人物肖像）
- 交付 SLA[^sla]（幾小時出 rough cut，幾天出 final）

這份規格單的價值，是把「創意討論」轉成「可驗收任務」。沒有這一步，後續所有選型都會失焦。

## 鏡頭級切分：把抽象腳本變成可生成單位

生成式模型對抽象概念很聰明，對長敘事一致性卻仍有風險。Runway 在 Gen-4 的官方說明把「consistent characters, locations and objects across scenes」放在核心能力，等於直接點出產業痛點：**跨鏡頭一致性仍需 workflow 管理**。

實務上，建議把每支片拆成 6 到 20 個 shot card：

1. Shot ID（例如 S01, S02）
2. 目的（建立場景／產品特寫／情緒轉折）
3. 主體描述（人、物、景）
4. 相機語言（push-in、pan、handheld）
5. 不可變元素（品牌色、logo、服裝）
6. 可變元素（光線、天氣、背景群眾）

這樣做的好處是，即使單支鏡頭失敗，也只需局部重算，不會整片推倒重來。

## 兩段式生成：先 pre-vis，再 final

AI 影片若直接進 final，通常會浪費大量配額。Runway 與多數平台都採用 credits 或 token 型計價，重算成本與秒數高度相關；Google Vertex 的生成式定價頁也明確列出影片輸入會按秒計算 token 消耗。換句話說，你每一次不必要重跑都在燒錢。

建議固定採「兩段式」：

- **Pre-vis 段**：低成本、低解析度，目標是確認鏡頭語言與節奏。
- **Final 段**：只對已通過審核的 shot card 跑高品質輸出。

這跟傳統影像製作的 offline/online 思維相同，只是現在把 pre-vis 的效率提升到分鐘級。

## 版本管理：把 prompt 當成可維護資產

AI 影片不是一次生成結束，而是多輪迭代。若沒有 prompt log，你很快會失去可重現性。建議每次生成至少紀錄：

- 模型版本與日期（例如「截至 2026-04」）
- prompt 文字與負面約束
- 參考圖與 seed（若平台提供）
- 輸出秒數、解析度、成本
- 審稿結論（保留／重算／替換）

只要把這些資料結構化，你就能在專案回顧時算出「每支成片的平均重算次數」，進而優化流程，而不是憑感覺說哪個模型比較不穩。

## 先做流程，才有資格談工具

最後的關鍵是：**工具選型應該服務流程，而不是反過來**。Google Veo 強調 prompt adherence 與安全標記（SynthID），Adobe Firefly強調可商用與 IP-friendly，Runway強調角色與場景一致性。這些能力都重要，但它們對你有沒有價值，取決於你先前定義的交付任務。

你可以把第一篇結論記成一句話：在 AI 影片時代，導演思維沒有消失，只是被轉譯成更工程化的流程設計能力。專案管理做對了，模型才會成為乘數；管理沒做對，再強的模型都只是昂貴的隨機數。

[^benchmark]: Benchmark 是在固定測試條件下比較模型能力的指標集合，但商業專案的成功不只由 benchmark 決定。
[^sla]: SLA（Service Level Agreement）在這裡指團隊承諾的交付時程與品質門檻。

---

1. [Introducing Runway Gen-4](https://runwayml.com/research/introducing-runway-gen-4) — Runway, 2025-03-31（頁面顯示 2026 年版權）
2. [How do credits work?](https://help.runwayml.com/hc/en-us/articles/15124877443219-How-do-credits-work) — Runway Help Center, 2026-04 查閱
3. [Agent Platform Pricing（含 Generative AI / Vertex 定價說明）](https://cloud.google.com/gemini-enterprise-agent-platform/generative-ai/pricing) — Google Cloud, 2026-04 查閱
4. [Veo](https://deepmind.google/models/veo/) — Google DeepMind, 2026-04 查閱
