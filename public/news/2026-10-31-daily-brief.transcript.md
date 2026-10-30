今天想聊的，是 10 月 31 日這一天，兩件在同一個時區同一個小時歸零的大事：Smithery MCP Proxy 正式關閉，以及 OpenAI Evals 正式進入 read-only。這兩件事對台灣用 Claude Code、Cursor、Codex 做一人 SaaS 的開發者來說，都是今天就要處理的斷線事件，不是明天也不是下週。

先說第一條主線，Smithery MCP Proxy。這家公司在 2026 年 8 月 5 日被 Arcade.dev 收購，當時就預告 10 月 31 日會把 proxy 服務正式退場，而這個 T 0 日就是今天。更精確一點，是台北時間早上 8 點，也就是 UTC 00:00。歸零的範圍很廣：run.tools 和 server.smithery.ai 的 server URL、Smithery API、Connect、Toolbox、帳號、API key、CLI 跟 SDK，全部一次下線。付過費的用戶會自動退款，官方口徑是 5 到 10 個工作日之內到帳。要留下來的，只有 smithery.ai 這個 directory，變成一個公開但不代轉的 registry，由 Arcade.dev 繼續運營。這裡最關鍵的一句話，是 Smithery 自己講的：「只換 URL 不夠，auth 跟 session management 要另外找替代。」而根據 apitracker.io 10 月 23 日的盤點，整個 proxy 名單裡確定能對映到 vendor 官方 URL 的，目前只有 Linear 的兩條別名，其他的都還沒處理。這代表什麼？代表今天中午之前還掛在 Smithery CLI 上面跑生產線的團隊，下午就會開始斷線。

說到這裡，第二條主線其實是一樣的節奏。OpenAI Evals 的 read-only 生效時間，也是今天台北早上 8 點，UTC 00:00。11 月 30 日完全下線，中間剩下整整一個月的最後搬家窗口。而且不只是 Evals，reusable prompts 同一天下線，沒有 API 可以 export，只能手動從 dashboard 一條一條複製。再加上 Agent Builder 進入 T-30 的最後 30 天 crunch。OpenAI 官方 cookbook 建議的遷移目標是 Promptfoo，Langfuse 的 v4 版則宣稱 migration 速度可以到 165 倍，兩邊各有長處：Promptfoo 強在開源、本地、red-teaming 無對應需要保留；Langfuse v4 強在 dashboard 跟 production log tracing。簡單說，台灣的 SI 顧問案今天的動作，是先把 reusable prompts 用 Playwright 腳本抓出來，然後決策樹就是 Promptfoo 加 Langfuse v4 混搭，不是二選一。

再來講 GitHub Universe 2026。Day 2 closing keynote 是在台北時間 10 月 30 日清晨五點落幕，而官方的「Mission Report: GitHub Universe」整合文已經在 github.blog 上線，這是 T+2 的進度。主軸延續 2025 Universe 的 Agent HQ 架構，加上 Mission Control 中控面板，加上 AGENTS.md 這個跨 repo 的 custom agent 定義檔，再加上 Copilot evaluation framework。這對一人 SaaS 開發者的意義是，Agent HQ 這套東西跟 Claude Agent SDK 的 nested subagents、Vercel AI SDK 7 的 WorkflowAgent，形成了三強對照的局面，今天下午很適合寫一篇台灣中文的落地 FAQ 搶空位。

另一個值得注意的，是 Dcard Auto AI 的揭幕。這是 2026 年 10 月中旬 Dcard AI 行銷年會的新產品，B2B 社群數據加 AI 行銷方案，加上 C2C 的心動榜。核心論點是「AI 找選擇、社群做驗證」，而最有感的數據，是 2026 年 9 月 ChatGPT 跟 Gemini 這些生成式 AI 流量轉入 Dcard，比起 2025 年 7 月成長了 191%。對做美妝、醫美、旅遊、美食 vertical SaaS 的台灣一人開發者來說，Dcard 的社群數據就是潛在的 data source，而「社群做驗證」這條路徑，等於幫 ChatGPT 幻覺風險做信任層補位，這是一個清楚的機會。

接著快速把兩條 run-on 的主題帶過。iPhone Duo 進入 Day 9、Week 2 Day 2，重點看香港收斂路徑：10 天內從開賣的 HK$2,000+ 回落到 HK$501 到 1,001，收斂了六成到七成五。對照台灣 10 月 23 日開賣，11 月 1 日到 3 日就是二手崩潰窗口的預告。另外 Anthropic S-1 進入 Day 6，11 月 9 日 roadshow 剩下 T-9 天，ticker 是 ANT，掛 Nasdaq，1H26 營收 163 億美元，但兩名客戶占營收 25%，是集中度風險，價位、股數、募資規模今天還是空白。

所以重點是什麼？今天的行動優先序，第一是 Smithery T 0 歸零日的 Live blog 加 auth session 替換選型 blog，加價接案；第二是 Evals read-only 首日的 reusable prompts 最後複製窗跟 Promptfoo Langfuse 選型決策樹；第三是 GitHub Universe Mission Report 加三強對照 blog；第四是 Dcard Auto AI 的 Taiwan FAQ 搶四大垂直的 ROI 試算空位。今天如果要排四小時以上的深度產出，建議就壓在 Smithery 跟 Evals 這兩條 T 0 歸零上，因為窗口只開一天。
