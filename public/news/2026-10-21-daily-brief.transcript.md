今天想聊的是週三這一天，也就是 10 月 21 號，一人 SaaS 開發者的架構 freeze 最後一日。整個 10 月最後一週的工作面全部收斂到三件事要在本週內落地：iPhone Duo 的 Live push、Evals dataset 的匯出、還有 Agents SDK 的遷移 scaffold。

先講頭條，iPhone Duo 10 月 23 號開賣，今天是 T-2，倒數兩天。中華電信 500 間門市早上 8 點準時開賣，這個 9 月 10 號就公告了。遠傳今天公告落實了舊換新最高折 5 萬塊的方案，分搭資費跟空機兩條路線，VIP 搭資費方案再折最高 5 千。台灣大哥大也公告了，10 月 23 號開賣 256GB 版本，搭 1,599 月租 48 期的專案價是 47,300 塊，舊換新最高可以折 52,500。所以電信三雄的舊換新折抵差異矩陣已經可以寫定了：中華電目前未公告細節，台哥大 52,500，遠傳 5 萬。

這波開賣有多缺？首批不到 2 萬台，但預約接近百萬，比例大概 50 比 1。原因是 Foxconn 良率只有 60%，全球備貨 600 到 800 萬台對比預期 1,000 萬台，還有 2 到 4 成缺口。還有一個 bear 支點是內螢幕維修要 3 萬 7 千塊，這個在 FAQ 裡要講清楚。所以今天 Day 3 的架構 freeze 最後一日，收斂成四件事：早上 10 點把電信三雄舊換新折抵矩陣寫定、下午 3 點把中華電 500 門市地圖 bind 完 Google Maps API、晚上 8 點把內螢幕 3 萬 7 的 FAQ 定稿，然後明天 Day 4 跑完整的 Dry Run。

再來講 Cursor。10 月 12 號新定價已經 T-9 了，但很有趣的是現在有兩套 pricing 並存。社群試算頁出現的是 Plus 8 塊、Premium 30 塊、Super 100 塊、Ultra 200 塊這四層。可是官方 pricing 頁還是 Pro 20、Pro+ 60、Ultra 200、Teams 40 塊這個架構。這代表 Cursor 的新定價還在分階段 rollout，社群試算頁跟 vendor 頁沒同步，bill shock 焦慮也還沒收斂。不過 Pro 20 塊對新用戶已經關了。簡單說，一人 SaaS 開發者正在經歷「訂閱 unlimited 轉成訂閱加用量 hybrid」這個訊號擾動階段。

Evals 這條線也在倒數，T-10，進入 2 位數倒數最後一週。OpenAI Evals 10 月 31 號凌晨會進入 read-only，reusable prompts 11 月 30 號一起下線，Agent Builder EOL 也在 11 月 30 號，T-40，本週剩五個工作天。所以本週 Day 3 進入「10/25 到 10/31 Evals 遷移週」倒推期：今天把 Evals dataset 匯出的 CLI 腳本定稿，明天 Day 4 跑實際的匯出，Day 5 到 Day 7 做 Promptfoo 的 parity test skeleton。如果本週內完成，就可以用「10/31 前 Evals 匯出完成」當 case study blog，走接案 landing。

Supabase 這邊也有新訊號。他們 10 月 2 號收購 Turso 已經 T+19 了，同一天發表的 Supabase Compute 提供 hosted sandbox for long-running AI agents。他們現在每週開超過 100 萬個 database，其中 70% 是由 agents 或 AI-driven 工具建立。還有一個組織訊號，前 Turso 共同創辦人 Glauber Costa 被任命為 Head of Agentic Services，這個部門統籌 agent 相關的資料服務，是 Postgres BaaS 轉型 agent-first 平台的訊號。對一人 SaaS 架構師來說，第二週的訊號已經收斂成三層架構：大 project 用 Postgres，per-tenant 用小的 SQLite，agent sandbox 用 Supabase Compute。今天 Day 3 要做 Supabase Pro、Neon Launch、Convex Pro、Turso Scaler 這四家 pricing 的並排 freeze。

Vercel 這邊也有新東西，AI SDK 6 的 Agent primitive 已經 GA。它有一個 ToolLoopAgent 類別，把完整的 tool execution loop 封裝起來，內建 human-in-the-loop approval，支援 MCP，還有 DevTools 可觀測性。遷移路徑是跑一行 codemod 指令，預設走 TypeScript。所以現在 TypeScript Agent 框架選型已經成形：OpenAI 的 Agents SDK、Vercel AI SDK 6 Agent、以及 Claude Agent SDK 三家。如果你是 Next.js SaaS，Vercel AI SDK 6 的 ToolLoopAgent 加 human approval 會是最小摩擦路徑。今天 Day 3 要試裝一條最小 PoC，大概花兩小時。

最後一條，GitHub Copilot 從 6 月 1 號開始已經切成 usage-based billing 加 AI Credits 計費。Pro 10 塊加 15 塊 credits，Pro+ 39 塊加 70 塊 credits，Max 100 塊加 200 塊 credits。重點是 Claude Opus 4.7 只有 Pro+ 以上才能用，舊的 Opus 全線下架，個人方案註冊暫停。所以今天 Day 3 要定稿一份 benchmark 試算表：Copilot Pro+ 39 塊、Cursor Premium 30 塊、Claude Code 訂閱三家並排，花一個半小時。

所以重點是，今天 Day 3 的工作面就是這七條線同時收斂：iPhone Duo 的四件事三個時間節點、Evals 匯出 CLI 腳本、Supabase 加 Turso 加 Compute 三層架構路線圖加 4 家 pricing 審計、Vercel AI SDK 6 的 ToolLoopAgent 加 MCP 加 human approval 最小 PoC、GitHub Copilot vs Cursor vs Claude Code 三家試算表、Haiku 5.5 production ramp 的第三條分類 subagent 擴到摘要 workflow。這些加起來預計花 13 個小時左右，是這個月壓力最大的一天。明天 Day 4 就是 iPhone Duo Dry Run 全路徑，後天 Day 5 就是真正的 Live。架構 freeze 到今天截止，接下來就是執行。
