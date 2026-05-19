今天想聊的是昨天 5 月 19 號這一天，整個 AI 產業的兩家最大玩家在同一個鬧鐘上打了個對撞。Google 在山景城開 I/O Day 1、Anthropic 在倫敦開 Code with Claude Day 1，兩邊不約而同把自家最新一輪 agent 平台牌一次攤出來；而我們今天 5 月 20 號，就是看 Day 2 怎麼接下去、以及這場格局對 indie 開發者到底要怎麼讀。

先從 Google 講起，因為昨天那場 keynote 真的是一日內全發。Google 一口氣推了三件套：第一個是 Gemini 3.5 Flash，這支模型蠻有意思，價格定在每百萬 token 輸入一塊半美金、輸出九塊，1M 的 context window，自家號稱比自家上一代的 Gemini 3.1 Pro 在 coding、agentic、multimodal 三條 benchmark 全部都贏，速度也比業界的旗艦快四倍、優化版自稱十二倍。重點來了，這支不是大家原本以為的便宜 cheap router，因為價格其實比 Claude Haiku 4.5、GPT-5.5 Instant 還貴，但 Google 把它定位成「mid-tier 取代自家 Pro」，這是頭一次有 frontier provider 用 Flash 系列直接取代 Pro，蠻違反過去命名直覺的。

第二件套是 Antigravity 2.0，這是 Google 那個 agent-first 開發平台的二代。桌面 app、CLI、SDK 三件一次出。比較關鍵的是 CLI 這支，是用 Go 寫的、支援 async background workflow、多 agent 平行跑，定位就是直接對打 Claude Code、Cursor、Codex 跟 Grok Build。然後 Google 順勢公告，舊的 Gemini CLI 在 6 月 18 號要 sunset，對 AI Pro、Ultra、個人免費檔停服；只有 Code Assist 的 Standard 跟 Enterprise 還能繼續用。所以如果你的 routine、CI、cron 都是跑在 Gemini CLI 上，那從這禮拜起你只有 28 天時間決定，要嘛切到 Antigravity CLI 保留 Google 生態，要嘛就乾脆換家換到 Claude Code 或 Cursor。

第三件套是 Gemini Spark，這是一個 24 小時 standby 的雲端 agent，跑在 Gemini 3.5 Flash 加 Antigravity 2.0 後端，可以持續監看你的 Gmail、Calendar、Tasks、再加上第三方 app，幫你寫信、排會、做多步驟任務，重點是電腦關機、手機鎖屏它都還在跑。下禮拜會對美國 AI Ultra 用戶開 beta。對做 Gmail wrapper、Calendar wrapper SaaS 那種 niche 的 indie，這真的是當頭一棒，因為 Spark 上線基本上把英文系、Google Workspace 主軸的市場一夜變成廉價替代品。但你也別緊張，Spark 留下蠻多 sub-vertical 沒覆蓋，像是亞洲多語、Outlook 跟 Exchange、商業帳號管理、跨 Workspace 平台、GDPR 跟 EU 區位、加密貨幣帳號管理這些，6 月之前都還有時間 pivot 站位。

然後 Google 還順手做了兩個價格與介面的動作。一是 AI Ultra 從原本 250 美金砍到 200，又新增一個 100 美金的開發者檔，內含五倍的 Gemini app 跟 Antigravity 用量、20TB 儲存、YouTube Premium。二是 Android Halo，把 agent 的工作狀態做進手機的 status bar，左上角會有一個發光的小圓圈告訴你 agent 現在在背景做什麼，預計隨 Android 17 出貨、Pixel 系列首發。

好，那同一天 Anthropic 在倫敦做了什麼。他們揭了兩件東西，主軸都是把 Claude agent 搬出 Anthropic 自家機房，這對 enterprise sales 來說超關鍵。第一個叫 MCP Tunnels，目前是 limited research preview、要申請 access，本質上就是一個輕量的 outbound gateway，把 agent 安全接進客戶私網裡頭的 MCP server，不用開放任何 inbound firewall 規則、不需要 public endpoint、端到端加密。第二個叫 Self-hosted Sandboxes，這個已經 public beta，意思是 agent 的 tool execution 可以搬到客戶自家機房，或者搬到 Cloudflare、Daytona、Modal、Vercel 這四家任一家上面跑，但 agent loop 那一塊還是留在 Anthropic 機房。

簡單說，這兩件加起來就是把 enterprise 過去最常拒簽 Claude 的那條理由「資料不能出 firewall」直接打掉。對 indie 來說，這意義很大。如果你本來就在賣 Claude integration 給金融、醫療、法務、政府這些 vertical，這禮拜你的 sales pitch 多了一個硬武器，可以直接說「我們可以讓 Claude agent 在你家機房跑」。再加上 4 月以來累積的 Multiagent Orchestration、Outcomes、Dreaming、Webhooks、雙倍 5 小時 rate limit 那些 Managed Agents 件套，等於 Anthropic 完整 agent stack 從舊金山到倫敦一條公開敘事走完。

不過 Anthropic 還沒結束，今天 5 月 20 號台灣時間下午四點，他們會在倫敦開 Code with Claude Extended，這場特別點名是給 indie 跟 early-stage founder 的 hands-on session，主題包含 managed agents shipping、memory implementation、寫 evaluations、組合多 agent 系統、還有 agent battles。如果你是 indie 又有時間，這場 livestream 真的建議排進今天行程。

順便講一下今天還有兩條截止點。一是 Google I/O Day 2 也是今天，是 dev sessions day，會深挖 Antigravity SDK、Aluminium OS 的 dev portal、還有 Gemini API GA 的細節，至少挑兩場聽。二是 GitHub Copilot Individual plan 的退款 deadline 就是今天 5 月 20 號，GitHub 5 月 15 號公告暫停新 sign-up、緊縮用量、調整 model availability，如果你還在用 Individual plan，今天最後一天去 Billing 頁面取消跟拿退款，然後評估切到 Cursor、Claude Code、Antigravity CLI、Grok Build 這四條備胎之一。

那 indie 這禮拜該做哪三件事，我幫你收個尾。第一，如果你的 routine 是跑 Gemini CLI，這禮拜內裝一下 Antigravity CLI，跑三條最常用的 routine 對比一下，6 月 18 號之前要決定切 Antigravity 還是直接換到 Claude Code。第二，如果你做 Gmail 或 Calendar wrapper SaaS，這禮拜寫一頁客戶 deck 解釋為什麼 Spark 上線之後你還是不一樣，然後 14 天內找好你要 pivot 的 sub-vertical。第三，如果你在賣 Claude integration 給 enterprise，今天就去申請 MCP Tunnels 的 early access，再挑 Cloudflare 或 Vercel 任一家試 Self-hosted Sandbox。

重點是這樣，5 月 19 號這一天是 2026 年 agent 平台格局重劃的分水嶺，Google 把桌面 app、CLI、SDK、Managed Agents 一次包成「agentic IDE 替代品」直接對打 Claude Code 那一掛；Anthropic 同日把 enterprise firewall 那條阻力打掉，配 4 家 sandbox provider 把 agent runtime 這個市場名詞正式立起來。indie 你不用每件事都跟，但今天這三條 deadline 跟一條 28 天遷移視窗，要盯緊。今天就先聊到這。
