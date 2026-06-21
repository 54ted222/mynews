今天想聊三件事，都跟「節奏被打亂」有關。第一件是 GPT-5.6 在 Polymarket 上演大翻盤，原本以為這週就會上線，現在看起來要往後延；第二件是 Cloudflare 推了一個叫 Temporary Accounts 的東西，把 AI agent 的部署流程砍到剩一步；第三件是 Replit Agent 3 的 pricing 危機升溫，CEO 自己跳出來承認價格機制壞掉了。三件事看似各做各的，其實連在一起，影響的都是這週做獨立開發、做顧問、做 vibecoding SaaS 的人。

先講 GPT-5.6。Polymarket 是一個建在區塊鏈上的預測市場，使用者拿穩定幣對未來事件下注，價格反映的是集體機率估計。昨天的 brief 還寫倒數一天、要在 launch 後一小時內發中文短文搶流量；結果今天 Polymarket 兩個相關市場一起翻盤——「6/22 到 6/28 之間上線」的機率從 83% 暴跌到 22%，「6/28 之前不會上線」反過來衝到 77%；不過長期一點的「7/31 之前會上線」還維持在 92%。也就是說，市場不是賭它不上線，是賭它會 slip 進七月。比較合理的解讀是 OpenAI 內部的 safety review 和 IPO 路演同時在跑，launch 時程被擠掉了。

那這對 indie 來說怎麼辦？三件事。第一，自家如果在跑 LLM router，那個重設權重的時程就不要押下週了，改成 6/29 之後每週一輪，等 OpenAI 真的有動作再說；同時這週把測試用的 eval prompt 集合從 10 條擴到 20 到 30 條，訊號雜訊比拉高。第二，因為中文圈現在還沒人寫「Polymarket 翻盤之後 indie 該怎麼調 router」這個主題，這週可以寫一篇中文長文卡 SEO。第三，前一陣子已經把 GPT-5.6 spec 寫進客戶提案的人，今天就發補充信，把時間改成「6 月底或 7 月初」，順便加一句「Opus 4.8、GLM-5.2、Sonnet 4.6 三軌 baseline 會同步跑」當保險。

連帶要提的還有 Anthropic 的 IPO，前一篇 brief 寫的「12/15 倒數」是沿用比較舊的傳聞，這次回查源頭發現 Anthropic 是 6 月 1 號丟了機密版的 S-1，目標是 10 月在 Nasdaq 掛牌，估值大概 1 兆美元，承銷是高盛、摩根大通、摩根士丹利。所以「Anthropic IPO 前 LLM router 要多元化」這條 narrative，給客戶的調整窗口從 12 月提前到 10 月，等於只剩 4 個月。提案要趁早調。

再來講第二件事，Cloudflare 的 Temporary Accounts。6 月 19 號正式上線，做法是這樣的：升級 Wrangler 到 4.102.0 版以上，就是 Cloudflare 那個部署 Worker 用的命令列工具，然後跑 `wrangler deploy --temporary`，agent 不必先建立 Cloudflare 帳號、不必走 OAuth、不必叫使用者註冊，直接拿到一個活 60 分鐘的預覽網址，加上一個 claim URL，使用者覺得不錯再用那個 claim URL 把這個臨時部署認領到自己的帳號底下。目前支援的服務很完整：Workers 本身、靜態資產、KV、D1、Durable Objects、Hyperdrive、Queues、SSL-TLS，差不多把整個 edge 棧都涵蓋了。

這個東西最大的價值是什麼？是把 vibecoding 跟 agent SaaS 的 onboarding 路徑，從「使用者註冊、OAuth 授權、然後部署」這三步，砍成一步。從 demo 的角度，原本 5 分鐘的流程現在 20 秒可以走完。對使用者來說，他先看到產品做出來什麼樣子，喜歡再決定要不要註冊。Conversion funnel 的形狀整個會變。

所以這週兩個動作。第一個，自家如果在跑 vibecoding 或 agent SaaS，就把 onboarding 流程改寫一輪，前後跑一組假使用者測 conversion 對比。第二個，如果做顧問或工作室，可以接「Cloudflare Temporary Accounts 串自家 agent」的 audit，幫客戶把 Lovable、Bolt、v0、Replit Agent 那些工具的部署流程改寫成 demo-first，定價 1500 到 5000 美金，這 7 天是熱期。中文社群目前完全沒有 case study，先寫先贏。

第三件事是 Replit Agent 3 的 pricing 危機。Reddit 跟 X 上連串抱怨，「一個晚上燒掉月預算的三分之一」、「Agent 3 自己 spawn 出 subagent 去改不該改的東西」這類貼文越來越多。Replit 的 CEO Amjad Masad 自己跳出來公開承認 v2 pricing「out of whack」，原話大意是「v1 的計價方式是可持續的，v2 因為 Anthropic 和 OpenAI 的 API 成本超過營收所以失衡了」，正在修。6 月 19 號開放 Enterprise self-serve 加上每人花費上限，算是急救手段。

這件事的意義有兩層。一層是「effort-based AI billing 真實月支出會是預期的 3 到 4 倍」這條 narrative，第一次被頭部廠商的 CEO 自己公開背書，這是 inbound 起風的訊號。一層是 Replit-heavy 的客戶現在開始問「是不是該轉去 Cursor 3.8 加 Claude Code」，這個遷移需求的 7 天 inbound 熱期已經啟動。

實作上三條建議。第一，做「Replit Agent 3 遷到 Cursor 3.8 加 Claude Code」的 audit，定價 1500 到 3000 美金，搭配可以做 30 天 retainer 拉長尾。第二，做 LLM 成本優化顧問的人，這 7 天在 LinkedIn、Threads 連發 3 篇中文短文，中文供給目前接近零。第三，自家如果用 Replit 跑 dev 或 staging 環境，這週就把月花費上限直接寫死，免得被 bill shock。

最後快速帶過兩件事。一個是 EU AI Act 的 Article 50 倒數 41 天，8 月 2 號正式上路，凡是 chatbot、AI 生成內容、情緒辨識都要揭露，違反最高罰全球年營收 7% 或 3500 萬歐元。賣歐洲客戶的 indie 這週要把 disclosure UI、AI 內容浮水印、DPIA 範本這些寫進 backlog，DPIA 就是 GDPR 第 35 條規定的資料保護影響評估。另一個是 Fable 5 的 paid subscriber 免費試用窗今晚 23 點 59 分截止，自家還想試 Mythos 等級能力的最後機會，跑一兩個最難的 agentic loop 留 trace，明天起客戶 PoC 文件就把 Fable 5 從 SLO 裡拿掉，改成 Opus 4.8、Sonnet 4.6、GLM-5.2、K2.7 三軌 fallback。

重點是：今天的兩大訊號，一個是 GPT-5.6 延後，整個 router 重設節奏要往後挪，中文長文有機會搶；另一個是 Cloudflare 把 agent onboarding 砍三步，這個 funnel 改寫是 7 天的時間窗。再加上 Replit pricing 翻車帶來的遷移 inbound，這週其實有三條獨立的吃飯機會在跑。Anthropic IPO 改到 10 月、EU AI Act 8 月 2 號上路，這兩個時鐘繼續倒數，提案 timeline 要記得跟上。
