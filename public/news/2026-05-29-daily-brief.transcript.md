今天想聊 5/29 這天對 indie 開發者最關鍵的三條情報，全部都集中在 5/28 跟 5/30 兩天，所以接下來 48 小時的決策會很密。

先講最大的一條，Anthropic 5/28 同日一次丟出三件事，把 distribution、模型、通路、大會全部串成同一週的劇本。第一件是 Series H 正式 close。昨天的 brief 還在預期這輪會收 300 億美金、估值 9000 億，結果實際數字是 650 億美金、post-money 估值 9650 億——直接超越 OpenAI 的 8520 億。領投陣容是 Altimeter、Dragoneer、Greenoaks 跟 Sequoia 四家共同領投，後面還跟著 Capital Group、Coatue、GIC、ICONIQ、Blackstone、Fidelity、Lightspeed、Temasek 這串大名單。重點是這 650 億裡面有 150 億是 hyperscaler 承諾、其中 Amazon 一家就出了 50 億。然後 run-rate revenue 5 月已經達到 470 億美金，4 個月內從 300 億翻了 1.6 倍，也是首次超過 OpenAI。

第二件是 Claude Opus 4.8 同一天上線。價格沒動、跟 4.7 一樣是每百萬 token 進 5 塊、出 25 塊；但是 fast mode 砍了三倍。Benchmark 部分，SWE-Bench Pro 拿到 69.2%、把 GPT-5.5 正規版的 58.6% 拉開超過 10 個百分點；SWE-bench Verified 也從 4.7 的 87.6% 上到 88.6%。更值得注意的是 honesty——漏代碼漏洞的機率比 4.7 少了四倍，媒體用「接近 Mythos 等級的 alignment」來形容，意思是 Anthropic 把原本要走 Project Glasswing gating 的 Mythos 部分對齊能力，直接下放到同價的公開模型。

第三件是 Claude Code 內建的 Dynamic Workflows research preview，目前對 Enterprise、Team、Max 開放。簡單說它讓單一 session 可以自動拆解出數百個 parallel subagent、各自跑測、回報，官方範例直接點名「百萬行級的 codebase migration 一次跑完」。這對 indie 的意義是，以前要養一個資深工程師三到六個月才能跑的舊框架升級——React 17 升 19、CommonJS 換 ESM、Express 換 Fastify 這類——第一次有可能變成兩到五天的 productized 顧問交付。所以這週客戶 deck「為什麼押 Claude」要立刻加三條硬數據：650 億已 close、9650 億估值、run-rate 470 億超 OpenAI；外加「Opus 4.8 同價更強」跟「Dynamic Workflows 可以跑你卡住的 codebase migration」兩條賣點。

再來講第二條主線，5/30 是 indie 一天踩兩個 breaking change 的高峰日。第一個踩坑是 Supabase。從 5/30 開始，所有新建的 Supabase project 預設不會再自動把 public schema 的 table 暴露給 Data API 或 GraphQL；你必須明確下 GRANT 才能讓 PostgREST 跟 anon、authenticated role 用。好消息是 PostgREST 會回明確錯誤、不是靜默失敗，會告訴你缺哪個 role 哪個 privilege。但更重要的是——10/30 這個新預設會套用到所有既存 project，等於半年內每一個 Supabase 客戶都要排盤點，這是 indie 顧問 6 個月的新業務機會。

第二個踩坑是 Cloudflare Workers AI 同日 5/30 把 Kimi K2.5 自動 alias 到 K2.6，定價變成每百萬 token 進 0.95 塊、出 4 塊，而且有 breaking change：原本的 enable_thinking 參數要改成 thinking、reasoning_content 欄位改成 reasoning。所以如果你今天同時跑 Workers AI K2.5 加 Supabase 起新 project，5/30 那天會一口氣吃到兩種 breaking。建議今天就把 staging 改好、rollback checklist 備齊，順手寫一篇「5/30 雙踩坑指南」吃 7 天的內容熱度。

第三條主線是 GitHub Copilot Desktop App，這禮拜從 Pro、Pro+ 擴到 Business 跟 Enterprise。它是 macOS、Windows、Linux 都有的 native 桌面 client，重點功能有三個。第一是 Session Isolation——每個 task 自動開獨立 branch，檔案、對話、執行狀態各自獨立，今天關掉明天打開繼續跑。第二是 Agent Merge——agent 會自動回 review comment、補 CI、條件到了就直接 merge。第三是 Inbox 介面，把跨 repo 的 issue、PR、CI、task 串起來，還整合 Slack、Teams、Linear 指派任務，加上 CodeQL 跑 agentic code review。這對 indie 的意涵是，如果你家 SaaS 賣的是「跨 repo Inbox」「Slack 指派 PR」「自動 merge 中介層」這類功能，Copilot Desktop 原生吃掉的機率不小。而且這波正好撞 6/1 Copilot 改 AI credits 計價、6/2 到 6/3 的 Microsoft Build。Nadella keynote 預期會把 Copilot Desktop 加上 Windows on-device SLM 串成 agent 平台主軸，本週就要決定 12 個月差異化路線要不要重排。

另外給亞洲讀者一個重要的時間鎖。Code with Claude Tokyo 6/10 主場 in-person 已經截止申請、線上 livestream 可以註冊；6/11 還有一場 Extended Tokyo，明確標示「給 independent developer 跟 early-stage founder」，是亞洲場唯一一場專為 indie 畫的官方場。如果你做 Claude 顧問或亞洲 SMB 整合，這是 12 個月最強的 networking 窗口，今天就要決定要不要飛東京。

最後快速念一下倒數時間鎖：5/30 Cloudflare K2.5 切 K2.6、Supabase Data API 預設變更，剩 1 天；5/31 GH-600 Agentic AI Developer cert beta 截止，剩 2 天；6/1 Copilot 改 AI credits 計價，剩 3 天；6/2、6/3 Microsoft Build 在舊金山 Fort Mason，剩 4 到 5 天；6/10、6/11 Code with Claude Tokyo，剩 12 到 13 天；再往後是 6/15 Anthropic Agent SDK Credit Pool、6/18 Gemini CLI sunset、7/1 Postgres 14 升 17 自動升、10/30 Supabase 預設套用到既存 project。

重點是這三條：Anthropic 一週把 650 億 distribution、Opus 4.8 模型、Dynamic Workflows 通路全部到位，押 Claude 的客戶 deck 今天就要更新；5/30 Supabase 跟 Cloudflare 同日雙踩坑要在今天備好 rollback；Copilot Desktop App 擴大開放加上 6/2 Build，做 agent SaaS 的本週就要決定 12 個月路線怎麼走。
