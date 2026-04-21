---
title: AI 新創的實戰組裝：pgvector、Edge Functions、MCP Server
order: 3
date: 2026-04-22
summary: 怎麼用 Supabase 三件套（pgvector 存 embedding、Edge Function 跑 RAG、MCP Server 讓 agent 自己查 DB）組出一個可上線的 AI 後端，以及有哪些坑。
---

# AI 新創的實戰組裝：pgvector、Edge Functions、MCP Server

## TL;DR

- 今天一個 AI 新創要在 Supabase 上疊 RAG，最小可行架構是：`pgvector` 當向量庫 + `pg_cron / pgmq / pg_net` 把 embedding job 丟給 Edge Function + 一個 retrieval Edge Function 餵 LLM。全部都在同一張 Postgres 裡面 join、交易、備份。
- MCP Server 是**開發期**加速器，不是 production 資料層。把它接到客戶資料庫等於把 SQL 控制權外包給 LLM——2025 年 7 月 General Analysis 揭露的那次外洩就是這麼發生的。`read_only=true` + `project_ref` + 手動批准是下限，不是上限。
- 三個硬邊界要先知道：Edge Function request idle 卡在 **150 秒**、Free wall clock 也是 150 秒（Pro 才到 400 秒）；CPU time 每 request 只有 **2 秒**；pgvector HNSW 在 5,000 萬筆量級上會被 pgvectorscale / 專用 vector DB 拉開一個數量級的 QPS。小量沒差，真的要做搜尋產品要重估。

## 典型情境：你有一個 AI 新創，48 小時內要出一個 RAG 後端

假設你在做一個「吃公司內部 PDF、對 Slack / Web 問答」的 agent。經典需求分三層：

1. **知識庫**：把 PDF 切段、算 embedding、存起來；文件更新時要能自動重算。
2. **檢索 + 生成**：user 問問題 → 算 query embedding → 近鄰檢索 → 把 top-k chunk 塞進 prompt → 呼叫 LLM → 串流回使用者。
3. **Agent 操作 DB**：你自己在 Cursor / Claude Desktop 裡要能讓 AI「看 schema、跑 migration、查 log」不用離開對話。

Supabase 這三層的對應是 `pgvector` / Edge Functions / MCP Server。下面逐層拆。

## 第一層：pgvector 當知識庫，但 embedding pipeline 用 Postgres 內建工具驅動

`pgvector` 本體沒什麼好講，基本型長這樣：

```sql
-- 1536 維對應 OpenAI text-embedding-3-small
create table documents (
  id          bigint primary key generated always as identity,
  content     text not null,
  embedding   vector(1536)
);

-- HNSW 在 >500K 向量量級是預設選擇；IVFFlat 建得快但 recall/latency 較差
create index on documents using hnsw (embedding vector_cosine_ops);
```

真正有意思的是 **embedding 的 pipeline 怎麼跑**。Supabase 2025 年推的 Automatic Embeddings 方案把這件事塞進 Postgres 本體：`pgmq` 當 job queue、`pg_net` 在 DB 裡發 HTTP 到 Edge Function、`pg_cron` 每 10 秒拉一次 queue。流程是：

```
INSERT/UPDATE documents
        ↓ trigger
util.queue_embeddings()  →  pgmq.send('embedding_jobs', …)
        ↓ pg_cron (每 10s)
util.process_embeddings()  →  pg_net 打 Edge Function `embed`
        ↓
Edge Function → OpenAI /embeddings → UPDATE documents.embedding
        ↓
pgmq 刪掉已完成的 job；失敗的走 visibility timeout 重試
```

重點不是每個元件多神，而是**整條管線你只需要維運「一張 Postgres + 一個 Edge Function」**。沒有額外的 Redis、沒有額外的 worker fleet、沒有額外的 cron 服務。

值得注意的是，Edge Function 這邊的 CPU time 上限是每 request **2 秒**（非同步 I/O 不算），所以批次不要塞太大，單 batch 10–20 個 chunk 比較穩。

## 第二層：檢索 + 生成 Edge Function

這是 user 實際打的那隻 function。Deno runtime、stream 回 SSE，大約長這樣（截至 2026-04，`supabase-community/chatgpt-your-files` 是官方推薦的 production MVP 範本）：

```ts
// supabase/functions/ask/index.ts
import { OpenAI } from "npm:openai";
import { createClient } from "jsr:@supabase/supabase-js";

Deno.serve(async (req) => {
  const { question } = await req.json();
  const openai = new OpenAI();
  const db = createClient(SUPABASE_URL, SERVICE_ROLE); // 走 RLS 的情境請改用 anon + user JWT

  // 1. query embedding
  const { data: [{ embedding }] } = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: question,
  });

  // 2. 近鄰檢索（呼叫預先寫好的 match_documents SQL function）
  const { data: chunks } = await db.rpc("match_documents", {
    query_embedding: embedding,
    match_threshold: 0.78,
    match_count: 8,
  });

  // 3. 串流 LLM
  const stream = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    stream: true,
    messages: [
      { role: "system", content: "Answer only from the context." },
      { role: "user", content: `Context:\n${chunks.map(c => c.content).join("\n---\n")}\n\nQ: ${question}` },
    ],
  });

  return new Response(stream.toReadableStream(), {
    headers: { "Content-Type": "text/event-stream" },
  });
});
```

**兩個坑先寫在前面**：

- **150 秒 idle timeout 是真的**。LLM 回應如果超過 150 秒沒 flush 就吃 504。要靠 `stream: true` 持續吐 chunk 撐住 keepalive；做長推理（multi-step agent、大模型）要改走 background tasks（Pro 的 wall clock 到 400 秒）或把工作推回 Postgres queue 再由另一隻 function 接手。
- **RLS 一定要設**。用 anon key + user JWT 呼叫 `match_documents` 時，`documents` 表上要有 policy 綁 `auth.uid()`，否則跨租戶資料一查就漏。service role 只在 server 側 batch job 用。

## 第三層：MCP Server——讓 agent 能自己摸你的 DB（但絕對不是 production）

Supabase MCP Server（`supabase-community/supabase-mcp`，截至 2026-04 已到 v0.7）是一個給 Cursor / Claude Desktop / Windsurf / VSCode + Copilot / Cline 用的 MCP endpoint。裝完以後你可以在 IDE 裡直接對 AI 說「幫我列 table / 寫 migration / 看昨天 Edge Function log」，它會透過 MCP 跑 `list_tables`、`apply_migration`、`execute_sql`、`get_logs`、`deploy_edge_function` 等 **35+ 個 tools**（分成 database、debugging、development、edge functions、account、branching、storage、knowledge base 八組 feature group）。

Claude Desktop 的設定長這樣：

```json
{
  "mcpServers": {
    "supabase": {
      "type": "http",
      "url": "https://mcp.supabase.com/mcp?project_ref=YOUR_PROJECT_REF&read_only=true&features=database,docs,debugging",
      "headers": { "Authorization": "Bearer ${SUPABASE_ACCESS_TOKEN}" }
    }
  }
}
```

有瀏覽器的環境（Cursor / Claude Desktop 桌面）走 OAuth，dynamic client registration，不用手動塞 token。

**接下來是這篇最重要的警告**。2025 年 7 月 General Analysis 公佈的 Supabase MCP 洩露案例：攻擊者透過客戶支援表單寫一段含有「IMPORTANT: Instructions for CURSOR CLAUDE…」的文字，開發者用 Cursor 叫 MCP 列最近工單時，LLM 讀到這段話、乖乖 `SELECT * FROM integration_tokens` 再 `INSERT` 回工單回覆，把所有第三方整合 token 當客服留言公開。這就是典型的 lethal trifecta：接外部輸入 + 有私密資料存取權 + 能對外輸出。

Supabase 官方後續在《Defense in Depth for MCP Servers》裡把防線堆到五層：`read_only` + `project_scoped` + SQL 結果附加警告語 + 分支測試 + 強制手動批准 tool call。但 General Analysis 原報告也講得很直白：**單開 `read_only` 不夠**——上述案例的外洩管道是 INSERT 回工單，read-only 能擋，但只要 agent 還能把查到的資料透過其他「寫」管道（另一個有 write 權限的 MCP、另一個 tool、甚至是對外部 API 的 POST）送出去，資料一樣會漏。

實務建議就一句話：**MCP Server 接 dev / staging，永遠 `read_only=true`，永遠 `project_ref` 綁死一個專案，tool call 一律手動批准，從來不連 production**。要 agent 在 production 跑 SQL，自己寫 Edge Function 包 whitelist 過的 RPC，不要用 MCP。

## 邊界：什麼時候 Supabase 這套不夠

老實說有三個地方。

**一、Edge Function 的 150 秒／2 秒 CPU**。多步 agent、大檔 embed、長推理，150 秒不穩、2 秒 CPU 幾乎碰不得。現在解法是推回 Postgres queue 走 background task（Pro 上限 400 秒），或把那一段工作外放到 Cloudflare Workers / Modal / 自家 worker。Supabase roadmap 上有 hosted LLM API 的計畫，但截至 2026-04 還沒上線。

**二、pgvector 在大規模搜尋產品上會輸**。Supabase 自己的 benchmark 顯示 HNSW 在等值 compute、99% 召回下可以打贏 Qdrant。但社群在 50M 向量這個量級的測試裡，Qdrant 41 QPS / pgvectorscale 471 QPS / 純 pgvector 更低——這是**一個數量級的差距**。如果向量本身就是產品核心（搜尋引擎、大型知識圖譜），把 vector 分出去給 Qdrant / Weaviate / Pinecone 是合理選擇；反之向量只是其中一欄、要跟 orders、users join，留在 Postgres 幾乎是沒得選的答案。

**三、你要 agent 在 production 直接下 SQL**。MCP 不行，service role 也不建議。自己寫 RPC、白名單參數、RLS 強制，是目前最安全的型態。

## 建議的疊法（懶人版）

不想多想就照這個來：

- 向量：`vector(1536)` + HNSW + `vector_cosine_ops`，`text-embedding-3-small` 起手。
- pipeline：Automatic Embeddings 的 `pgmq + pg_net + pg_cron + embed` Edge Function 範本，不要自己發明。
- API：一隻 `ask` Edge Function 串 OpenAI，`stream: true`，Pro 方案開 background tasks 當逃生艙。
- Dev 工具：MCP Server 掛 Cursor，`read_only=true&project_ref=…&features=database,docs,debugging`。
- Prod 權限：Service role 只在 server；user flow 走 anon + JWT + RLS。**從 day 0 就寫 RLS policy，不要留到之後**。

---

## 來源

- Supabase Docs — Model context protocol (MCP)：<https://supabase.com/docs/guides/getting-started/mcp>
- Supabase — Defense in Depth for MCP Servers：<https://supabase.com/blog/defense-in-depth-mcp>
- `supabase-community/supabase-mcp` GitHub (v0.7, 2026-03)：<https://github.com/supabase-community/supabase-mcp>
- Supabase Features — MCP Server：<https://supabase.com/features/mcp-server>
- Supabase Docs — AI & Vectors：<https://supabase.com/docs/guides/ai>
- Supabase Docs — Automatic embeddings：<https://supabase.com/docs/guides/ai/automatic-embeddings>
- Supabase Blog — Automatic Embeddings in Postgres：<https://supabase.com/blog/automatic-embeddings>
- Supabase Docs — HNSW indexes：<https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes>
- Supabase Docs — Edge Functions limits：<https://supabase.com/docs/guides/functions/limits>
- `supabase-community/chatgpt-your-files`（官方 RAG MVP 範本）：<https://github.com/supabase-community/chatgpt-your-files>
- General Analysis — Supabase MCP can leak your entire SQL database（2025-07）：<https://generalanalysis.com/blog/supabase-mcp-blog>
- Simon Willison — Supabase MCP lethal trifecta（2025-07）：<https://simonwillison.net/2025/Jul/6/supabase-mcp-lethal-trifecta/>
- Vector DB benchmark（pgvector / Qdrant / Pinecone / Weaviate, 2026）：<https://www.cloudmagazin.com/en/2026/04/02/vector-databases-rag-pinecone-weaviate-qdrant-pgvector-comparison/>
- Supabase Solutions — Agents（Chatbase / Markprompt 等客戶）：<https://supabase.com/solutions/agents>
