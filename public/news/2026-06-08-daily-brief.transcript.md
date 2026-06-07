今天想聊 6 月 8 日這天，AI 產業有一條非常重的新聞。FT 在 6 月 7 日獨家爆出 OpenAI 內部有一位資深員工直接說「Chat is dead」——意思是 ChatGPT 這個聊天框形態的時代，他們自己人已經宣告結束了。

接下來幾週，ChatGPT 會被改版成一個 superapp 入口。它不再只是你打字、它回答的盒子，而是把寫程式工具、各種 agent、還有第三方應用程式像 Canva、Booking.com 全部塞進首屏。Codex 這個寫程式 agent 會被拉到最顯眼的位置。為什麼？因為數字會說話。Codex 從首發到現在週活已經超過 500 萬，一個月內成長 6 倍，而且大多數 Codex 使用者是付費客。OpenAI 現在有 200 萬企業客戶、貢獻 40% 營收，年底他們預估會拉到 50%。同一時間還在推進 IPO 路演。

那對我們這些獨立開發者影響是什麼？我覺得三件事。第一，過去那種「我就是包了一個 ChatGPT、做得比較好用」的 SaaS，半年內會被首屏改版整個壓過去。第二，ChatGPT 內部會開放類似 Canva 等級的 partner slot，這時候做垂直工作流的人，像合約、診所排程、補習班、餐廳訂位這種，有機會搶第一波 partner inventory。第三，Codex 推這麼快，Claude Code 跟 Cursor 必須在 6 月 10 日東京活動之後一週內出對策，否則差距會被拉開。

再來想聊昨天延伸下來的 Cloudflare 消息。6 月 5 日 Cloudflare AI Gateway 推了一個叫做 dollar-denominated spend limits 的功能，現在進 public beta。簡單說就是你可以設定「每個使用者每天最多花 200 美金、整個帳號每天最多花 1 萬、單一模型每使用者每天最多 50 美金」——任意維度組合都行，超支就直接擋掉 request。這時間點抓得非常準，因為 Anthropic 6 月 15 日要上線雙池計費，Agent SDK、Claude Code、第三方 agent app 會吃獨立的 20、100、200 美金月 credit，超了沒有 rollover、沒有自動 fallback。10 天前 Cloudflare 把這套先做出來，等於把所有人的 credit overflow 焦慮一次解掉。

更狠的是 Cloudflare 同期還推了 identity-driven budgets 的 closed beta，透過 Cloudflare Access 整合，可以把預算掛在 SSO 使用者身分上而不是 API key，這代表 B2B SaaS 第一次能把「每個使用者的 AI 配額」當成功能來賣。這條延伸出來一個產品點子，叫 Per-User AI Budget Layer——在 Cloudflare 上面加一層應用層，把對客戶友善的 admin UI、Stripe 計費對接、超支通知、自助升額補齊。Cloudflare 是 infra 層，沒人想自己刻這些雜事。

再來，6 月 8 日今天 Cursor 的 Bugbot 正式 GA 切換成 usage-based 計費。原本一個座位 40 美金的訂閱沒了，現在純粹按 PR 計費，每次 review 大概 1 到 1.5 美金，依 PR 大小跟難度調整。重點是既有客戶可以直接到 dashboard 點 opt-in，不用等 renewal。但要注意成本邊界：500 行的 PR 大約 1.2 美金，5,000 行的 PR 可能破 4 美金。如果你每天 PR 超過 50 條，或者常常是超大 PR，可能反而比座位制貴。我建議今天就到 dashboard 點 early opt-in、effort 設成 deep review，跑 7 天記錄成本，6 月 15 號回頭跟 40 美金座位制比一比。下週剛好是「1 美金一個 PR vs Greptile、CodeRabbit 月費」這種對比內容的最佳發佈窗口，因為東京 Anthropic 活動同週，流量會集中。

再來想聊 AWS 那邊。OpenSearch Serverless 次代版 5 月 28 號 GA、6 月持續推。它做了三件事：auto-scale 快 20 倍、可以 scale-to-zero、總成本比預先 provision 省 60%。更重要的是 compute 跟 storage 完全解耦，首發整合 Vercel 跟 Kiro，可以用自然語言直接 provision。然後 OpenSearch Agent Skills 進到 Claude Code、Cursor、Codex 裡面。這對過去想自架 Postgres 加 pgvector 走省成本路線的小團隊是一階削弱——AWS 把 serverless vector 做成 agent IDE 內自然語言 provision 的等級體驗。如果你在賣 RAG 顧問，這個月把「Postgres pgvector 對比 OpenSearch Serverless 30 天的成本跟延遲」跑成內容，是接客戶的好視窗。

接著聊 Anthropic 這邊。Code with Claude Tokyo 倒數 2 天，6 月 10 日主場、6 月 11 日 Extended 整天加開「founder stories 加上 Applied AI team 帶的 laptops-open workshops」。首日線下票關了，但 Extended 還可以登記。對日台 indie，Extended 是直接拿 Anthropic Applied AI 工程師回饋的最便宜窗口。另外 Anthropic 把代號 Project Glasswing 的安全研究計畫擴張，旗下 Claude Mythos Preview 對 150 個新組織開放，同時推 Claude Security 做 codebase 掃描跟 patch 建議。這對 5 到 50 人的 dev team 是很好的接點，做 sec consulting 的人可以把「Claude Security audit 加 remediation」當成 1,500 到 5,000 美金的固定價交付物。

關於 Cloudflare Workflows 還有一條：6 月 5 日推了 saga rollback，每個 step.do 都可以定義補償動作，失敗時反向跑回滾、rollback 處理自己也有 retry、timeout、analytics 區分前進失敗跟回滾失敗。這對跑金流、庫存、票務、infrastructure provisioning 的 indie 是直接的生產級福音。可以做的點子是 30 個 production-ready 的 Workflow saga 模板賣 299 美金 lifetime，或接 production audit、SOC 2 evidence 那條 2,000 到 6,000 美金的固定價活。

最後快速帶幾個觀察點。Gemini 3.5 Pro，Polymarket 押 6 月 30 日前發大約 9 成、6 月 19 日前發大約 3 成，技術細節已洩——200 萬 token context 加上 Deep Think reasoning。EU AI Act 8 月 2 日 GPAI 啟動倒數 55 天，賣 EU 客戶的 indie 6 月底前產 audit checklist 是有效視窗。Anthropic Colossus 1 折扣 6 月 30 日失效倒數 22 天，月底前的批次任務、migration、大 batch eval 該排上跑了。

重點是這樣：今天有兩條馬上能動的事，第一條是花 15 分鐘去 Cloudflare dashboard 開 AI Gateway spend limit、為 6 月 15 日佈樁；第二條是花 10 分鐘到 Cursor dashboard 點 Bugbot opt-in、跑 7 天記錄成本。如果你做垂直 SaaS，這週還可以開始寫「FT superapp 改版後台日 vertical SaaS 怎麼活」的連載，搶 6 月 9 到 13 號這個 14 天視窗。今天先這樣，明天再聊。
