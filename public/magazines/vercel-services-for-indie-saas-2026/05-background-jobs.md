---
title: 背景任務、Webhook 與長流程：Workflow 與 Queues 對 indie 的意義
order: 5
date: 2026-04-26
summary: 何時該用 'use workflow'、何時 setTimeout 就夠；Stripe webhook、AI agent、cron 三個典型場景拆給你。
keywords: Vercel Workflow GA 2026, Vercel Queues public beta, use workflow use step directive, Stripe webhook idempotency, durable execution, Inngest vs Trigger.dev vs Vercel Workflow, AI agent long running task, indie SaaS background jobs
---

# 背景任務、Webhook 與長流程：Workflow 與 Queues 對 indie 的意義

## TL;DR

- 三件武器各自的位置：**Cron** 排時間（每天三點清資料）、**Queues** 排「事件 → 工人」（Stripe webhook 進來丟一筆訊息出去就 200）、**Workflow** 排「一個會跨秒跨小時跨天的長流程」（AI agent 跑兩小時、訂閱 14 天試用結束發信）。
- 觸發 indie 撞牆的訊號永遠那三個：Stripe[^stripe] webhook[^webhook] 開始漏單、寄信卡住前端 response、AI 任務開始撞 60 秒 function timeout。在那之前不要動。
- Workflow 在 2026-04-16 GA[^ga]（自 2025-10 beta，已跑超過 1 億 runs / 5 億 steps、1500+ 客戶），Queues 自 2026-02-27 進入 public beta，全 plan 可用。指令是 `'use workflow'` 與 `'use step'`，TypeScript / Python 都支援，按 Events、Data Written、Data Retained 計價。
- 對手取捨：要**最低心智成本** + **已經在 Vercel** 選 Workflow；要**跨雲跑 compute** 選 Inngest[^inngest]；要**單任務跑數小時 / 不想被 serverless timeout 卡** 選 Trigger.dev v3[^trigger-dev]。
- 反例：MVP < 100 用戶、webhook 一天 < 10 次、寄信延遲 30 秒沒人會死——`waitUntil()` + 一張 `processed_events` 表就夠了，別早優化。

> 本文事實截至 2026-04-26。Workflow / Queues 仍在快速演進，正式上線前請對 changelog 二次確認。

---

## indie 何時撞到「需要背景任務」

獨立開發者最初幾週幾乎不會想到背景任務。所有事情都在一個 Next.js route handler 裡同步跑完——查 DB、呼叫 OpenAI、寄 email、回 200。直到下面其中一個場景出現：

1. **Stripe / Polar[^polar] webhook 開始漏單**：Stripe 只給你 10 秒回 2xx，超過就視為失敗、走最多 3 天 exponential backoff 重送。如果你在 webhook handler 裡同步去更新資料庫、寄 email、推播 Slack、再呼一次 OpenAI 改寫感謝信，10 秒一定爆。
2. **使用者註冊後寄歡迎信卡住前端**：SMTP 提供商偶爾抽風，2 秒變 12 秒，你的 `/api/signup` 也跟著 12 秒回——使用者已經在按 F5。
3. **AI 任務跨越 function timeout**：Hobby plan function 是 60 秒上限（Pro 預設 60 秒、可調至 800 秒、Fluid Compute 下更長），而真正會賣錢的 AI agent 通常跑 2 分鐘到 2 小時。研究 deep search、長文翻譯、影片轉錄都中。
4. **要排程**：每天清過期 session、每週寄 digest、月結算 usage。

這四種需求對應到三件不同的工具，indie 常見錯誤是「全部都丟 cron + DB poll」或「全部都上 Temporal」，前者撐不住流量，後者把週末玩具搞成 SRE 工作。

---

## 三件武器：Cron / Queues / Workflow 各自的位置

Vercel 自家的解法在 2026 年其實只有三條路徑要記：

### Vercel Cron — 你只是想**按時間**跑

`vercel.json` 一個 schedule、指向一個 function。每天三點觸發、執行完就結束。**沒有狀態、沒有重試**，function 跑掛就是跑掛、下次再說。適合冪等的清理工作、寄日報、refresh quota。一行設定，indie 第一個會用上的就是它。

### Vercel Queues — 你要把「請求進來」與「工作完成」**解耦**

2026-02-27 進入 public beta，模型是 publish → topic → consumer group：

- 訊息送到 **topic**，**多個 consumer group** 可訂閱同一個 topic、各自獨立消費（fan-out）。
- **at-least-once delivery**：每則訊息至少送達一次，所以你的 consumer 一定要寫成冪等[^idempotency]。
- **visibility timeout**：consumer 拿到訊息後，預設 60 秒沒 ack 就會被重新派發。最大 60 分鐘。
- **TTL**：訊息預設保留 24 小時、最長 7 天。
- **訊息上限**：100 MB 單則，topics 與 consumer groups 都不限數量。
- **重試**：前 32 次照你設定的 delay，超過 32 次強制 backoff。
- **計價單位**：按 API operation，Send / Receive / Delete / Visibility change / Notify 五種，每則訊息以 4 KiB 為一個單位（12 KiB 算 3 個 op），帶 idempotency key[^idempotency-key] 的 Send 與帶 max concurrency 的 Notify 計 2x。

對 indie 的白話：**任何「我想立刻回 200，工作丟到後面慢慢做」的場景**——Stripe webhook、寄歡迎信、生成縮圖——Queue 就是收件匣。

### Vercel Workflow — 你要的不只是丟一張單，而是**整段流程要活下來**

2026-04-16 GA，自 2025-10 beta 起跑超過 1 億 runs。它的核心訴求是「durable execution[^durable-execution]」：你寫的非同步函式可以**跨 deploy、跨 crash、跨數月睡眠**還能從同一行繼續。

兩個 directive：

```typescript
// app/workflows/onboarding.ts
export async function onboardingWorkflow(userId: string) {
  'use workflow';

  const user = await loadUser(userId);
  await sendWelcomeEmail(user);

  // 睡 14 天，function 不會佔資源；到時間自動 resume
  await sleep('14 days');

  if (await stillFreePlan(userId)) {
    await sendTrialEndingEmail(user);
  }
}

export async function sendWelcomeEmail(user: User) {
  'use step';
  // 這個 step 失敗會自動重試；成功後結果寫入 event log
  await resend.emails.send({ to: user.email, subject: 'Welcome', /* ... */ });
}
```

機制是：`'use workflow'` 標記的函式，每次呼叫一個 `'use step'` 函式時，runtime 會去 event log 查這個 step 是否跑過——跑過就直接回快取結果（deterministic replay），沒跑過就 enqueue 到 Queue 排隊執行、workflow 暫停、執行完再 resume。所以 workflow 函式體本身必須是 deterministic 的（不能 `Math.random()` 或 `Date.now()` 寫在 workflow 層、要包進 step）。上面範例中的 `resend`[^resend] 就是這類「外部副作用」典型，被包進 `'use step'` 是正確的寫法。

底層其實是 Functions 跑 step、Queues 負責調度、managed 資料庫存 event log——三件武器在 Workflow 場景裡疊起來給你用。計價按 Events、Data Written、Data Retained 三項。

---

## 三個典型場景

### 場景一：Stripe webhook 永遠不漏單

正規架構是兩段式：

```mermaid
flowchart LR
  Stripe[Stripe] -->|POST event| WH[/api/webhooks/stripe]
  WH -->|verify sig + enqueue| Q[(Queue: stripe-events)]
  WH -->|200 OK| Stripe
  Q --> WF[Workflow: handleStripeEvent]
  WF --> S1[step: upsert subscription]
  WF --> S2[step: send receipt email]
  WF --> S3[step: notify Slack]
```

webhook handler 只做兩件事：**驗 signature、把 event 丟進 Queue**，然後立刻回 200。所有真正的工作（寫 DB、寄收據、發 Slack、補記 analytics）放到 workflow 裡的 step。每個 step 各自 checkpoint、各自重試——Stripe 重送整個 webhook 也只是再 enqueue 一次，workflow 用 `event.id` 當 idempotency key 去查 event log，已經跑過就直接回快取。

這也直接解了 Stripe webhook 兩個歷史痛點：(a) 10 秒限制——你的 200 回得飛快；(b) Stripe 不知道你完成了 step 1~3 只缺 step 4，整個 retry 你會重送 email——現在 step 級 checkpoint 解決掉。

### 場景二：寄歡迎信不要卡前端

最小作法用 `waitUntil()`（Vercel 的 fire-and-forget）就好；中規模用 Queue；要做 drip campaign（註冊後 day 0 / day 3 / day 14 各寄一封）就上 Workflow——上面 onboardingWorkflow 範例直接就是 drip。drip 用 cron 寫會變成「每天 query 找該寄信的 user」，用 workflow 寫直接 `await sleep('14 days')`，state 由 runtime 管，不用為這個建一張 schedule 表。

### 場景三：AI agent[^ai-agent] 跑 1 小時長任務

這是 Workflow 真正換掉 Inngest / Trigger.dev 的主戰場。AI agent 的形狀通常是：

1. 規劃 → 拆 10 個子任務
2. 並行跑 10 個（每個會打 OpenAI / Anthropic / 抓網頁）
3. 等中間有人類 approve（可能 5 分鐘也可能 5 天）
4. 整理輸出、寄報告

`'use workflow'` 把整段寫成一個 async function，sleep / 平行 / 等 hook 全部走語言原生語法，不用學新 DSL。每個外部 call 包成 `'use step'`，自動重試。Vercel 自己也用這套蓋了 stateful Slack bot 與 Claude Managed Agent 的 reference。

---

## 反例：何時 setTimeout / cron + DB poll 就夠

不要為了「看起來專業」上 Workflow。下面情境老實用最土的方法：

- **MVP < 100 用戶、webhook < 10 次/天**：webhook handler 直接同步處理 + 一張 `processed_stripe_events(event_id PRIMARY KEY)` 表擋重複，10 行程式解決。
- **寄一封信不需要 14 天的 drip**：Vercel `waitUntil()` 就能 fire-and-forget，response 不會被卡。
- **每天三點要做的清理**：vercel.json 寫一個 cron path 就結束，不要為一個 function 開一條 workflow。
- **想省錢**：Workflow 計價含 Events / Data Written / Data Retained 三項，event log 越長越貴。如果你的「workflow」其實只有 2 個 step、不用 sleep、不用 replay，誠實地寫兩個 function 會便宜。

判準：**你的流程需要「跨 function invocation 還活著」嗎？** 不需要就別上 durable execution。

---

## vs Inngest / Trigger.dev v3：indie 怎麼選

三家都解同一個問題（durable background jobs），但設計取向差很多。底下表格也順便比 Temporal[^temporal] 這個更老牌的開源 durable execution 選項在哪一條光譜上。對 indie 而言可以這樣決策：

| 維度 | Vercel Workflow | Inngest | Trigger.dev v3 |
|------|----------------|---------|----------------|
| **compute 在哪跑** | 只能在 Vercel Functions | 你選（Vercel / Lambda / 容器都行）| 在 Trigger 自己的 long-running infra |
| **timeout 上限** | Function 規格決定（Fluid Compute 可長）| 你的 compute 決定 | 沒有 serverless timeout，跑數小時 OK |
| **API 風格** | `'use workflow'` directive，build 時轉譯 | 顯式 `step.run()` / `step.sleep()` | 顯式 task SDK + 強 dashboard |
| **免費額度** | Hobby 含基礎額度 | 雲端免費 50,000 runs | 5,000 runs |
| **vendor lock** | 高（綁 Vercel）| 低（只代管 orchestration）| 中（execution 在他們家）|
| **debugging UI** | 內建 Observability | 中等 | 公認最強 |

indie 三段決策：

1. **整站已在 Vercel、流程不超過幾分鐘、不想多一個 vendor**：Workflow。直接 `npm i workflow`，`'use workflow'` 寫下去，observability 就在 Vercel dashboard。
2. **你的 compute 不在 Vercel（Cloudflare Workers、自架 Node、Python FastAPI）**：Inngest。它把 orchestration 抽出來，你的 endpoint 還是你的 endpoint。
3. **你的任務真的會跑 30 分鐘以上、或你超在意 step 級 debug log**：Trigger.dev v3。專為長任務設計，跑在他們的 dedicated runtime。

寫到這裡你應該發現：**Workflow 對 indie 的真正意義不是「比對手強」，而是「少一個 vendor、少一張帳單、observability 直接整合」**。代價是 vendor lock——哪天要逃離 Vercel，`'use workflow'` 的程式幾乎要重寫。但 indie 在第一年談這個是早優化；先把產品做出來，三十個付費客戶之後再煩惱搬家。

下一篇我們就來談「該逃離 Vercel 的訊號」——什麼時候 Workflow / Queues / Functions 的便利會反過來咬你。

[^stripe]: Stripe 是線上金流的事實標準，indie SaaS 多半用它做訂閱、一次性付款與發票，會把交易結果以 webhook 推給你的後端。
[^webhook]: Webhook 是「事件發生時，外部服務主動 POST 到你提供的 URL」這個機制，比 polling 即時、比長連線輕量；Stripe、GitHub、Slack 都靠 webhook 通知你。
[^ga]: GA 是 General Availability（正式版）的縮寫，雲服務從 alpha → beta → GA 的最後一階，意味著 SLA、計價、支援都正式上線，不再屬於實驗品。
[^inngest]: Inngest 是 durable background job 平台，特色是「orchestration 在他們家、compute 在你選的地方」，可以接 Vercel Functions、Cloudflare Workers、自架 Node 都行，適合不想被單一雲鎖死的人。
[^trigger-dev]: Trigger.dev 是另一家 durable jobs 平台，v3 起在自己 long-running 基礎設施上跑，沒有 serverless timeout，主打跑數小時級別的 task，並以「step 級 debug log dashboard」聞名。
[^polar]: Polar 是 indie 圈新興的金流，主打對 OSS 與創作者友善的訂閱、贊助、digital product 銷售，跟 Stripe / Lemon Squeezy 同類但更扁平。
[^idempotency]: 冪等（idempotent）指「同一個請求做幾次結果都一樣」；at-least-once delivery 的訊息佇列必然會重送，consumer 沒做冪等就會出現重複扣款、重複寄信這類災難。
[^idempotency-key]: Idempotency key 是請求方自帶的唯一識別字串，後端用它判斷「這筆我看過了」並直接回上次的結果，是 Stripe API 與訊息佇列實現冪等的標準做法。
[^durable-execution]: Durable execution 是一種程式模型，讓 async function 可以跨 deploy、跨 crash、跨數天的 sleep 還能從中斷的那一行繼續，背後靠 event log 與 deterministic replay 達成；Temporal、Inngest、Vercel Workflow 都是這條路線。
[^resend]: Resend 是開發者導向的交易型 email API，標榜現代 DX 與 React Email 模板整合，是 indie SaaS 在 SendGrid / Mailgun 之外的常見替代。
[^ai-agent]: AI agent 指「LLM 自己決定下一步該做什麼工具」的程式，會在規劃→執行→反思→再規劃的迴圈裡跑很久，是 durable execution 主力應用場景之一。
[^temporal]: Temporal 是 Uber Cadence 開源衍生出來的 durable execution 元老，主要服務大型企業，學習曲線較陡，是 Workflow / Inngest / Trigger.dev 共同的精神祖師爺。

---

## 來源

- [A new programming model for durable execution — Vercel Blog](https://vercel.com/blog/a-new-programming-model-for-durable-execution)
- [Vercel Workflow — Docs](https://vercel.com/docs/workflows)
- [Workflow Concepts — Docs](https://vercel.com/docs/workflows/concepts)
- [Open source Workflow Development Kit is now in public beta — Vercel Changelog](https://vercel.com/changelog/open-source-workflow-dev-kit-is-now-in-public-beta)
- [Vercel Queues — Docs](https://vercel.com/docs/queues)
- [Vercel Queues Pricing and Limits — Docs](https://vercel.com/docs/queues/pricing)
- [Vercel Queues now in public beta — Changelog (2026-02-27)](https://vercel.com/changelog/vercel-queues-now-in-public-beta)
- [Workflow SDK Getting Started](https://workflow-sdk.dev/docs/getting-started)
- [GitHub vercel/workflow](https://github.com/vercel/workflow)
- [Stripe Webhooks — Receive events](https://docs.stripe.com/webhooks)
- [Stripe Idempotent requests — API Reference](https://docs.stripe.com/api/idempotent_requests)
- [Webhook Processing at Scale: Idempotency, Signature Verification, and Async Queues — DEV](https://dev.to/whoffagents/webhook-processing-at-scale-idempotency-signature-verification-and-async-queues-45b3)
- [How to Handle Stripe Webhooks Reliably with Background Jobs — freeCodeCamp](https://www.freecodecamp.org/news/stripe-webhooks-background-jobs)
- [Hatchet vs Trigger.dev v3 vs Inngest: Durable Workflows 2026 — PkgPulse](https://www.pkgpulse.com/blog/hatchet-vs-trigger-dev-v3-vs-inngest-durable-workflows-2026)
- [Next.js Background Jobs: Inngest vs Trigger.dev vs Vercel Cron — HashBuilds](https://www.hashbuilds.com/articles/next-js-background-jobs-inngest-vs-trigger-dev-vs-vercel-cron)
- [Compare Inngest vs. Vercel — Slashdot 2026](https://slashdot.org/software/comparison/Inngest-vs-Vercel/)
