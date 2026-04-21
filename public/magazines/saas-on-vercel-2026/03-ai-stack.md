---
title: 疊一套 AI SaaS：Gateway、SDK、Workflows 的組裝說明書
order: 3
date: 2026-04-21
summary: AI Gateway 負責 model 路由、AI SDK 6 寫 agent、Vercel Workflows 處理 durable execution，這三層怎麼串成一套 2026 的 AI SaaS 棧。
---

# 疊一套 AI SaaS：Gateway、SDK、Workflows 的組裝說明書

## TL;DR

- 2026 年一個可上線的 AI SaaS 最少要有三層：**model 路由層**（AI Gateway）、**agent 邏輯層**（AI SDK 6 / ToolLoopAgent）、**持久執行層**（Workflow DevKit）。Vercel 把這三層做成了一條線。
- 這三層解的是三個不同問題：provider 會壞、agent 要跑 tool loop、工作會跑超過 function timeout。分開理解、分開換掉才合理。
- 這套組合的邊界很明確：企業級多租戶隔離、跨 region 的強 SLA、複雜的排程協調，Inngest 與 Temporal 依然有位子；Vercel 這套走的是「開發速度換一部分控制權」。

## 一個典型 AI SaaS 今天要做什麼

想像你在寫一個「自動寫 SEO 文章的 SaaS」。使用者貼一個主題，系統要：抓競品資料、讓 LLM 擬大綱、呼叫研究工具、產出初稿、人工審核一個步驟、改稿、發布到使用者的 CMS。

這件事拆開來看有三個痛點：

1. **你不想鎖在一個 model**。今天便宜的是 Gemini，明天 Claude 4.5 的 tool use 更穩，後天某個 provider 掛了要 fail over。
2. **agent loop 自己很煩**。tool schema、approval、stream、type 都要自己接；寫一次還好，寫五個 agent 就是災難。
3. **這流程會跑超過 function timeout**。人工審核可能隔天才來，中間 serverless function 不可能掛著等。

2026 年的 Vercel 棧，剛好就是針對這三層各出一把刀。

## 第一層：AI Gateway——把 model 當成可換的水龍頭

AI Gateway 在 2025-05 alpha，2025-08 走到 GA，提供大約 100 個 model 的統一入口。[AI Gateway 文件](https://vercel.com/docs/ai-gateway)明確寫「zero markup」，包含 BYOK 都不加價，連每月有 $5 免費額度；收入來源是企業流量打進來時的網路和觀測層，不是在 token 上抽成。

這點跟 OpenRouter 的差異值得一提。OpenRouter 雖然自己也宣稱 inference 無抽成，但儲值走信用卡要收 5.5% 手續費，而 Claude 一類熱門 model 在某些 provider 路由上實際價差會被放大——[TokenMix 的分析](https://tokenmix.ai/blog/openrouter-alternatives)指出規模到 100M tokens/月後那層 overhead 會變成真錢。Portkey 則往另一個方向走，把 governance、guardrail、prompt 管理一起打包，單價高但功能重。

AI Gateway 的取捨是明確的：你已經在 Vercel 上跑前端，**多一個 gateway endpoint 不需要新的帳號、新的 SDK、新的帳單**。程式碼只是：

```ts
import { generateText } from 'ai';

const { text } = await generateText({
  model: 'anthropic/claude-sonnet-4.5', // 字串就是 model id，透過 gateway
  prompt: '...',
});
```

沒了。fail over、load balancing、usage logging 在 gateway 那側處理。

## 第二層：AI SDK 6——agent 不用手寫 loop

AI SDK 6 在 [2025-12-22 釋出](https://vercel.com/blog/ai-sdk-6)。最關鍵的 API 變化是 `Agent` 變成 interface，預設實作叫 `ToolLoopAgent`，預設跑最多 20 步。

```ts
import { ToolLoopAgent, tool } from 'ai';
import { z } from 'zod';

const writer = new ToolLoopAgent({
  model: 'anthropic/claude-sonnet-4.5',
  instructions: '你是一位 SEO 寫手。',
  tools: {
    research: tool({
      description: '搜尋競品文章',
      inputSchema: z.object({ topic: z.string() }),
      execute: async ({ topic }) => searchCompetitors(topic),
    }),
    publish: tool({
      description: '發布到 CMS',
      inputSchema: z.object({ html: z.string() }),
      needsApproval: true, // 發布前要人工同意
      execute: async ({ html }) => cms.publish(html),
    }),
  },
});
```

`needsApproval: true` 是這版真正的生產級設計——tool 可以宣告「執行前必須人類按一下」，SDK 把訊號拋出，UI 層拿到後自己 render 同意介面。這件事以前是每家 SaaS 自己接，而且接得都很糟。[AI SDK 文件](https://ai-sdk.dev/docs/agents/overview)也寫明 `needsApproval` 可以是 function，例如只有在 tool input 含 `rm -rf` 時才要求同意。

重點是：**Agent 物件本身還不知道 durable execution 存在**。它只是一個在 request lifecycle 內跑的 tool loop。超過 5 分鐘的流程就撐不住了，這是下一層的事。

## 第三層：Workflow DevKit——讓函式活得比 request 久

Workflow DevKit 在 [2025-10-23 公開 beta](https://vercel.com/blog/introducing-workflow)，底層是開源的 [`vercel/workflow`](https://github.com/vercel/workflow)（Apache-2.0，截至 2026-04 已累積約 1.9k stars、每週 npm 下載量 20 萬）。[Vercel Workflows 官方數字](https://vercel.com/docs/workflows)提到平台端已處理超過 1 億次 run、5 億個 step、跨 1,500+ 客戶。

它的 API 是兩個 directive：

```ts
// app/workflows/seo-article.ts
export async function generateArticle(topic: string) {
  'use workflow';

  const research = await doResearch(topic);
  const draft = await writeDraft(research);

  // 暫停，直到有人按同意
  const approved = await hooks.wait<boolean>('human-approval');
  if (!approved) return { status: 'rejected' };

  return await publish(draft);
}

async function doResearch(topic: string) {
  'use step';
  return await writer.generate({ prompt: topic });
}
```

`'use workflow'` 標示這整個函式是 durable 的——執行資訊寫進 Vercel Queues 和 managed persistence，crash、重新部署、跨天都能從上一個 step 接回來。`'use step'` 讓 step 有自動 retry 與 checkpoint，每個 step 的 input/output 都進 observability 面板。最關鍵的，`hooks.wait()` 和 `sleep()` 期間是**不燒 compute**的。

AI SDK 7 正在做的 `WorkflowAgent` 會把這兩層直接打通——每個 tool call 變成一個 step，agent loop 自動變 durable。現階段（2026-04）要用的話還是得走 `ToolLoopAgent` 在 `'use step'` 裡面呼叫。Vercel 自己的 [Workflow DevKit 也提供 `DurableAgent`](https://github.com/vercel/workflow) 作為過渡方案。

## 還有個配角：Vercel Sandbox

agent 要跑 LLM 生出來的 code，不能在你的 function 裡 `eval`。[Vercel Sandbox](https://vercel.com/docs/vercel-sandbox) 提供 Firecracker microVM，ms 級冷啟動，支援 node24 / python3.13，在 tool `execute` 裡開一個 sandbox、跑完拿結果就回收。這是 agent 能安全「動手」的前提。

## 這組合什麼時候不夠

攤開講：

- **多租戶 coordination 很重**：[Inngest 的反論](https://www.inngest.com/blog/explicit-apis-vs-magic-directives)點到一個真問題——`'use workflow'` 是 build-time transform，在執行中的 workflow 如果程式碼被改動、step ID 對不起來，正在 sleep 的 run 會壞掉。Inngest/Temporal 的 explicit API 在大團隊、多環境並行部署時更安全。
- **你需要跨雲、強 SLA**：Workflow DevKit 本身是可移植的（自有 Postgres 也能跑），但 Vercel-managed 版本的區域和災備選項還沒有 Temporal Cloud 那麼深。[Temporal 已經反向推出跟 AI SDK 的整合](https://temporal.io/blog/building-durable-agents-with-temporal-and-ai-sdk-by-vercel)，正是看準這段。
- **Model 治理壓力大**：PII redaction、prompt audit、細粒度 cost attribution，Portkey 那種 control plane 還是更合適。

換句話說，Vercel 這三層賣的是**上線速度**：從 `npm create` 到有一個會跑 tool、會暫停等人類、會 fail over provider 的 AI SaaS，只要幾十行 TypeScript。代價是你接受了它的抽象、它的部署模型、它的計費方式。下一篇就來算這筆帳。

---

**來源**

- [Vercel Workflows 官方文件（2026-04 存取）](https://vercel.com/docs/workflows)
- [AI SDK 6 Release Notes（2025-12-22）](https://vercel.com/blog/ai-sdk-6)
- [Built-in durability: Introducing Workflow Development Kit（2025-10-23）](https://vercel.com/blog/introducing-workflow)
- [AI Gateway 定價文件（zero markup、$5 免費額度）](https://vercel.com/docs/ai-gateway/pricing)
- [Inngest — Explicit APIs vs Magic Directives](https://www.inngest.com/blog/explicit-apis-vs-magic-directives)
- [vercel/workflow GitHub（Apache-2.0，截至 2026-04）](https://github.com/vercel/workflow)
