今天想聊 7 月 21 日這一天，對台灣做 AI SaaS、做一人公司的獨立開發者來說，有幾件事你如果沒跟上、這週的節奏就會亂掉，我一條一條講。

先從最大條的說起。PayPal 董事會昨天，也就是 7 月 20 日、正式回覆了 Stripe 跟 Advent 提的 530 億美元收購案。結論是拒絕、但董事會用的字是「significantly undervalues」，翻成人話就是「你出的價實在太低」，這個措辭很關鍵——它不是「不賣」，它是「這個價不賣」。同時 PayPal 找了 Goldman Sachs 跟 Evercore 進來，說要評估「維持獨立」跟「出售」兩種可能。所以分析師這邊已經有共識了，這不是最終拒絕、而是進入談判階段，二輪加價的窗口大概是 12 到 24 個月。這對台灣 indie 有兩個 immediate。第一，如果你昨天已經寫了那篇「首輪拒絕、3 天內容窗」的中文短文、今天要記得轉錨，主軸要改成「進入談判、二輪加價 pipeline」，不然 24 小時後你的讀者會覺得你在報過期新聞。第二，如果你手上有客戶在用 Stripe 或 PayPal 收款，客戶 SOP 就要加上「12 個月合規時鐘」跟「二輪加價可能」這兩條，同時把 Airwallex、Wise、Mercury、Lemon Squeezy、Paddle 這幾家的對比審計，當作長線 pipeline 排進去。

再來是 Anthropic 這邊。Fable 5 的 metered 制度是前天 7 月 20 日開始跑的，昨天是首日。首日社群回報最極端的 case，是有人拿到 100 美金 credit、開了一個 autonomous agent loop，結果 9 分鐘就把 credit 燒完。9 分鐘。同時 Max 20x 訂閱有人一個月燒到 3900 美金 credits，caps 從 1000 拉到 4500、四次調整。這意思是什麼？意思是所有已經 ship Fable 5 agent loop 給客戶的 Pro 或 Team Standard 用戶，你今天 24 小時內就要幫客戶 SLO 加三檔預警，20 塊、50 塊、75 塊，超過就 Slack 或 LINE 通知，然後在 agent loop 中段要有一個 hard-stop 保險，別讓客戶睡一覺起來看到 credits pool 見底。這一段本身就是新的 SaaS 賽道，我在正文的「點子 1」有寫，簡單說就是接 Anthropic Console credits API 去輪詢、每分鐘算 burn rate、alert 打三個通道。今天中午前上一個 landing、發一篇「9 分鐘燒完的 3 大 root cause」中文短文，48 小時就會有客戶自己找上門。

政策這邊也很熱。政院今天，7 月 21 日、卓榮泰主導、宣布成立「國家 AI 戰略特別委員會」，同時發布 AI 基本法草案的施行方案、國科會研擬台灣首部國家 AI 發展綱領。這一波跟現在正在跑的「AI 行動計畫 2.0」是連在一起的、屬於再往上一層的治理層。對做「一人公司對接經濟部補助」的 indie 來說，這是一個 timing 加碼窗——你去談客戶的時候，narrative 就多一條：「政府剛剛才把 AI 戰略特別委員會拉起來、你這時候提本土對齊的申請書、審查會比較買單」。

接著是博弘雲端 6997。他們昨天正式加入 OpenAI Partner Network、拿到 Select Partner，這是台灣多雲廠商裡的第一個。7 月 22 號、也就是明天，他們就會開始對企業客戶推 OpenAI Agent Builder 跟 Agent Kit 的諮詢。這對做企業 GenAI PoC 陪跑的一人 agency 是個機會、也是威脅。機會是你可以搶第一篇中文短文，把博弘 OpenAI Select、中華電信雲對齊 Bedrock、遠傳大人物自建、這三家做成對比表，24 小時內出稿就是 first-mover。威脅是中小企業「跟大廠買整包」的慣性可能會壓縮一人顧問的議價空間，所以你要有差異化的錨——MCP 整合、客製 evals loop、私有部署，這三個要能立刻拿出來講。

明天還有一件事，就是 Notion 的 Ship OS 正式 live walkthrough。今天是 T-1。Notion 3.6 的 External Agents 是 7 月 1 號 GA、iOS Agents app 是 7 月 8 號 GA，底層條件都補齊了。明天晚上直播結束後的 6 小時之內，是中文首篇最好的窗口，如果你手上有 Notion 重度使用的客戶、5 到 20 人的小團隊、之前用 Linear 或 Jira 想遷移的，這是一個必須抓的 first-mover。

最後是本週 T-3 的硬底線。經濟部 115 年 AI 補助、7 月 24 號下午 5 點 hard-stop。週末已經過完了，實質只剩三個工作日、週三、週四、週五。DIGITAL+ 平台收件、工商憑證登入、資安費用要占 7% 以上、企業資安評級要簽約前完成。純調 API 是審查陷阱、一定要自訂 fine-tune、retrieval、evals loop。今天下午前、你要不就啟動代寫 sprint、要不就先幫客戶決定 fallback 到 116 年重申，別耗到週五中午還在猶豫。

重點是，這一天 PayPal 進入談判、Fable 5 credits pool 開始燒、政院 AI 戰略特別委員會成立、博弘拿到 OpenAI Select、Ship OS 明天要 walkthrough、補助只剩三個工作日、六件事同時撞在一起。台灣 indie 今天真正該做的、其實只有三件——中午前 ship Fable 5 credits 監控 landing、下午出博弘三家 vendor 對比中文短文、剩下時間衝經濟部補助 sprint。剩下的事情、明天 Ship OS 直播完再接。今天就到這，我們明天見。
