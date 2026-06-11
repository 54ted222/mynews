今天想聊 2026 年 6 月 12 號這天的創業情報，重點圍繞五條主線：SpaceX 上市開盤、Claude Code 大升級、TikTok 廣告 MCP、Cursor Bugbot 新數據，還有 Anthropic 的營收與 IPO 動向。對 indie 創業者來說，這幾條看似獨立，其實串在一起就是「6 月底前算力定價會被市場重新喊一次價」這條主軸。

先從今天最熱的 SpaceX 講起。SpaceX 今天在 Nasdaq 用代號 SPCX 正式開盤，IPO 訂價是每股 135 美元、募了 750 億美元、估值 1.77 兆美元——史上最大 IPO。重點是 SpaceX 不只是火箭公司，它把 xAI、Grok、還有 Colossus 1 那個 20 萬張 GPU 的訓練叢集，加上 X 全部整合進去了。NPR 6 月 11 號的報導說這檔「很可能打破紀錄」，Polymarket 開盤位置的下注集中在 150 到 200 之間，所以市場預期是溫和爆衝、零售配額傳出最高給到 30%。

對 indie 來說，為什麼這個開盤價這麼關鍵？因為它等於把 AI 算力的本益比，當天就喊一次價。簡單說，如果 SPCX 開盤站上 150 元、漲超過 11%，就代表市場願意給 AI 基礎設施 90 倍以上的 EBITDA 估值；那 6 月 30 號 Colossus 1 折扣到期後，Anthropic 的 compute 成本要漲、Claude rate limit 要收緊這條敘事就被坐實了。反過來說，如果 broken IPO、跌破 135 元，整個 AI 類股估值會壓縮，Anthropic 找新算力來源的壓力反而會減輕，那 Claude Pro 跟 Max 的 rate limit 短期反而是利多。不管哪一邊，今天早上 9 點半美東時間，也就是台北晚上 9 點半，這場開盤就是 indie 內容週最熱的題材，因為中文社群完全沒人在寫這條連動。

再來聊 Claude Code 的升級。6 月 9 號 v2.1.172 同時推出三件事：第一個是 nested subagents，子 agent 可以再叫出 sub-subagent，最多疊 5 層深，動機就是要讓主 agent 把 context 切片下放、避免單一 session 被撐爆。第二個是 workflows，由 Claude 自己寫一份 orchestration script，丟到多個 subagent 上背景跑。第三個比較小，是 plugin 瀏覽器加了搜尋列，找 plugin 不用再 scroll。同期 Anthropic 6 月 10 號在東京主場日宣布的 Multiagent Orchestration、Outcomes、Dreaming、Automemory、Auto Mode 跟 built-in worktrees，也一併在這版落地。

所以對 indie 來說，現在的問題已經不是要不要試 multi-agent，而是現有 vertical workflow 哪 3 到 5 條值得拆 5 層 subagent 來跑。建議這週至少挑一條，像合約審查、SOC 2 audit、SEO 文章、KB 重建，拆 nested subagent 試試看。賣 dev tool agency 的 indie，可以把這套模板包做成 markdown 檔案賣 39 美元到 299 美元終身授權。

第三條主線是 TikTok 廣告 MCP。TikTok 6 月 11 號正式對外開放他們的 MCP server，讓 AI agent 直接接 TikTok 廣告管理員，從投放計畫、上線、出價到預算調整通通可以做，總共 29 個 read/write 工具。這跟 4 月 28 號 Google 的 read-only 3 工具、4 月 29 號 Meta 的 read/write 29 工具，現在湊成「廣告 MCP 三巨頭」格局。

對 creator-led growth 的台日 indie 來說，這是新 niche。可以做三件事：第一，做「三平台跨平台自動投放」audit 顧問，30 天 PoC 加 spend cap 加品牌安全護欄，收 1K 到 5K 美元；第二，做 AI agent 自動跑 TikTok 創意素材測試加預算重新分配的 SaaS，針對 1 到 10 人的小品牌，收 99 到 499 美元一個月；第三，這週寫一篇 TikTok 廣告 MCP 加 Claude 自動投放的 hello world 教學，因為中文社群供給接近零。

接下來是 Cursor Bugbot。6 月 9 號 Cursor 公布性能升級，比之前快 3 倍、便宜 22%、多抓 10% bug、9 成的 run 3 分鐘內完成。但成本數據也浮現了——平均每個 PR 1 到 1.5 美元、5000 行的大 PR 會破 4 美元、每次 pass 平均 0.4 美元；如果每天跑 200 個 PR，月帳就是 1600 美元，但 10 人團隊的 Team plan 座位預算只有 400 美元，差很多。

同期 Fable 5 上線第 3 天，dev cost shock 也浮現了。Simon Willison 一天跑掉 110 美元；Hacker News 上有一則「單次 code review 燒掉 92 美元都還沒寫完」；最高推理檔的 5 小時 quota 有人 8 分鐘就吃光。所以這條對 indie 有兩條路可走：一條是把 Bugbot、Claude SDK、Fable 5 三邊的 spend cap 接到 Cloudflare AI Gateway，趕在 6 月 13、14 號 ship；另一條是賣 dev tool agency，把 Bugbot 每 pass 0.4 美元乘 200 PR 等於 1600 美元一個月的試算表，搭配「按座位收 vs 按 PR 收」的決策樹，發到 LinkedIn、Threads、Reddit 的 r/cursor。

最後是 Anthropic 自己的營收跟 IPO 動向。6 月 1 號 Anthropic 遞了機密 S-1，24 小時內 Fortune 報導他們的 run rate 已經從 2025 年底的 90 億美元，5 月底漲到 470 億美元，6 月有機會報出第一個獲利季。目標估值 1.75 到 1.8 兆美元、最高募 750 億美元，可能是史上最大 IPO 候選。緊接著 5 月 19 號 NEC、6 月 2 號 Glasswing 擴張、6 月 5 號 Hitachi 部署 29 萬個座位、6 月 9 號 LG CNS、6 月 10 號東京 Multiagent Orchestration、6 月 11 號 Fable 5 同時進 Copilot、Cursor、Claude Code 三端，預計 7 月底前 SEC 審查完成後展開路演。

對 indie 採購決策的意義是這樣——把「Anthropic 從 underdog 變盈利 IPO 候選」這條敘事寫進客戶簡報跟合約附錄，配上 Anthropic Asia partner badge 加分。同時，Anthropic 半年內 vendor lock 風險可以量化下調，所以做 vertical SaaS 的 indie，可以降低自家 LLM router 中介層的投資，讓 Apple SPM 或 Databricks Unity AI Gateway 做 multi-vendor 路由就好。

時程上還有幾個關鍵倒數：6 月 15 號是 Anthropic Agent SDK 雙池計費上線，今天起剩 3 個工作天；6 月 22 號 Fable 5 對 Pro、Max、Team 訂閱戶免費試用結束；6 月 30 號 Colossus 1 折扣到期；8 月 2 號 EU AI Act 對通用 AI 模型的 enforcement 啟動，剩 51 天。賣 EU 受監管客戶的 indie，6 月 30 號前要把 audit checklist 加 DPIA 範本，把 Fable 5 那條 30 天 prompt 跟 output 保留條款明寫進合約附錄。

重點是這樣——今天 6 月 12 號，SPCX 開盤是 AI 算力定價的 leading indicator、Claude Code v2.1.172 把個人 AI 工作站可組合性指數放大、TikTok MCP 開出新的 creator-led growth niche、Bugbot 數據讓 spend cap watchdog 變剛需、Anthropic 即將從 underdog 變 IPO 候選。對 indie 來說，未來 10 天有四個視窗值得衝：SPCX 開盤即時內容、6 月 15 號雙池前的 spend cap watchdog、6 月 22 號前 Fable 5 免費跑滿 batch 任務、Big-3 廣告 MCP 跨平台投放白皮書。挑一條 ship，這週就有成果。
