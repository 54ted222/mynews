今天想聊三件事，主軸放在 Anthropic 的 Fable 5 停服進入第五天、Tom Brown 跟 Sarah Heck 飛去華府週末談判，加上一個叫 Agentjacking 的新型攻擊在 6 月 12 號公開、波及 2,388 個組織。然後再帶過 xAI、Hugging Face、Mistral 三家工具新訊，最後收尾在 indie 接下來七天可以做什麼。

先講 Fable 5 這條線。事情是這樣，6 月 12 號美國商務部 BIS 發了一份 directive，要求 Anthropic 對所有外籍人士停掉 Fable 5 跟 Mythos 5 兩個 frontier model 的網路存取，理由是 BIS 認為他們已經找到 jailbreak 這兩個模型的方法。今天是 6 月 16 號，停服進入第五天。比較關鍵的進展是，6 月 14 號華爾街日報報導，Anthropic 派了共同創辦人兼 chief compute officer Tom Brown，加上政策長 Sarah Heck，週末親自飛去華府跟白宮官員會晤。但是到了 6 月 15 號晚上，沒有 deal、沒有時間表，也沒有任何「政府疑慮已解決」的公開聲明。

這代表什麼？簡單說，談判進度看起來是「天 vs 週」這個級別，不是「小時」級別。所以之前那個賭「Fable 5 七天內復活」的敘事，今天起要收手。比較務實的做法是，把客戶提案裡的 fallback 條款從「Opus 4.8 一條路」升級成四軌備援。哪四軌？Opus 4.8 當主力、Sonnet 4.6 跑量產、Mistral Vibe 當 EU 客戶的 fallback、加上 OpenCode 自架。這四條 SLO 範本，今天起十四天內要寫進所有客戶合約附錄。

第二條主線是 Agentjacking。這是一家叫 Tenet Security Threat Labs 的研究團隊，6 月 3 號通報給 Sentry、6 月 12 號公開。攻擊路徑用講的就是：任何人只要拿到一個 Sentry DSN，就可以送一份假的 bug report 進 Sentry，這份假報告會透過 Sentry 的 MCP server 傳給 AI coding agent，比方說 Claude Code、Cursor、Codex 或 Grok Build。Agent 把這份假 bug 當成「可信任的系統輸出」，然後跑了 attacker 預先埋好的 npx 指令，而且是用開發者本機的全部權限去跑。首波公開就有 2,388 個組織暴露。

更麻煩的是，Sentry 拒絕做 root fix，他們的回應是「technically not defensible」，也就是說技術上沒辦法從根本擋住，所以改用一個叫 global content filter 的東西去過濾特定 payload 字串。問題在於，這個漏洞類別不是 Sentry 獨有，任何 MCP server 只要有把外部影響的資料回傳給 agent，理論上都會中。

所以對 indie 來說，這是一個七天內最高優先的 niche window。具體可以做三件事。第一，本週上線一個 landing page，賣「AI coding agent × MCP server 安全 audit cheatsheet」，付費版 $79、終身版 $299，內容涵蓋 Sentry、MongoDB、Linear、GitHub、Slack 這五大 MCP server 的隔離模式、payload 清洗、workflow approval gate。第二，做企業 IT security 顧問的 freelancer，可以包一個 fixed-price $3K 到 $10K 的 audit 服務，含 Cloudflare AI Gateway sandbox 配置，再附七天 incident response retainer。第三，6 月 17 號到 22 號這一週，LinkedIn、Threads 連發 Agentjacking、MCP 隔離、Claude Code hooks 攔截策略——中文社群供給量幾乎為零，台日中型企業的 CIO inbound 會湧進來。

接著快速帶過三家工具新訊。

再來是 xAI。6 月 11 號他們開賣 Grok Build Plugin Marketplace 的 beta，找了六家 launch partner：MongoDB、Vercel、Sentry、Chrome DevTools、Cloudflare 還有 Superpowers。Plugin 是把「skills、slash commands、agents、hooks、MCP servers、LSPs」打包成一份，遠端 plugin 安裝時 pin 到特定 commit SHA，catalog 也開源放在 GitHub。這代表 Plugin 跟 MCP 生態的戰場進入三強鼎立：Claude Code skills 加 plugins、Cursor SDK customTools，再加 Grok Build。indie 如果還只押在 Claude Code 一個平台變現，三十天內就要擴平台支援。

再來是 Hugging Face Serge，6 月 12 號開源，走 GitHub-native PR code review。重點有三個：OpenAI 相容 API、所以不綁特定 model；review policy 由 repository owner 自寫，不是 hosted SaaS 黑箱；走 GitHub 原生 PR review UI 留言。這個直接對打 Cursor Bugbot 7 月 1 號要改的 usage-based 計費，每個 PR run 收 $1 到 $1.5。Serge 的賣點對台日中型企業特別重要：客戶 source code 不用出公司網域。所以做中型 dev team 顧問的 indie，可以包「自架 Serge 加 Linear、GitHub 整合」這種 fixed-price $5K 到 $20K 的服務。

再來是 Mistral Vibe。Mistral 在 5 月 28 號把 Le Chat 改名叫 Vibe，整合 chat、work agent 跟 coding agent 在單一產品、單一 license。6 月持續推 VS Code 擴充嵌進 side panel、Code Mode 連 GitHub 管 project 加 isolated sandbox、Slack thread 觸發，還有一個 CLI 叫 `/teleport`、可以在 terminal、editor、cloud 之間搬 task。Pro 月費 $14.99、Team 月費 $24.99。

為什麼這條重要？因為 EU AI Act 8 月 2 號開始 enforcement，距離今天只剩四十七天。歐方 AI Act 加美方 BIS 出口管制，雙重壓力夾擊下，台日 indie 賣 EU 客戶就需要一個歐系 fallback。Mistral Vibe 就是現成答案。所以四軌備援 SLO 裡面，Mistral Vibe 是 EU 客戶這一欄的首選。

最後收尾，重點是 indie 接下來七天的行動清單。

第一，三十分鐘內，如果你自架 Sentry MCP，今天 ET 時間內就要 grep 自家 MCP server 有沒有「外部影響資料回傳給 agent」的場景，補上 payload 清洗跟 Claude Code hooks 攔截。第二，四十五分鐘，寫「MCP × AI coding agent 安全 audit cheatsheet」一頁範本，七天內上線付費 landing。第三，六十分鐘，賣 EU vertical SaaS 的 indie 寫「Le Chat 換 Mistral Vibe migration」加 EU 四軌備援 SLO 範本，十四天內主打發給 5 到 10 家目標 EU 客戶。第四，六十分鐘上線「Plugin 跟 MCP 生態四平台同步發佈 SDK」landing，6 月 17 號早上八點台北時間在 LinkedIn、Threads 發。第五，三十分鐘，6 月 15 號 Anthropic 雙池上線後二十四小時，到 console 看 burn rate 是不是符合預期，確認 spend cap 跟 Slack alert 正常觸發。第六，四十五分鐘，6 月 18 號 Antigravity CLI 收編 Gemini CLI 倒數兩天，全 repo、CI、客戶 deliverable 做最後一次 `gemini` 字串 grep。第七，四十五分鐘，寫 BIS export control 週報 newsletter MVP，月費 $99，首期主題就是「Fable 5 停服第五天加華府談判加 indie 合約附錄升級」，這塊中文社群供給為零。第八，三十分鐘，自家 vertical workflow 試 Hugging Face Serge 自架，跑一條 PR review PoC，寫「自架 Serge 加中型 dev team 三十天 cost down 60%」的案例大綱。

重點是，這一週對 indie 來說有兩個結構性機會視窗：一個是 BIS 政策風險帶來的合約附錄升級需求，這條走得長、可以做訂閱 newsletter；另一個是 Agentjacking 帶來的七天安全 audit hot window，這條走得短、要快上 landing 跟 inbound。兩條主線之外，xAI、Hugging Face、Mistral 三家工具的新訊是把四軌備援的工具箱補齊。把這些寫進客戶提案，下週開始就有東西可以打。
