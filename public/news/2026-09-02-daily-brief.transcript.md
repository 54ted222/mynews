今天想聊 9 月 2 號這一天，同時擠進了三個很不一樣的節奏——硬體、AI 協定、金融政策，一次到齊。這種疊加日一年遇不到幾次，我們一個一個拆開來看。

先講硬體。今天是 SEMICON Taiwan 2026 主展的第一天，地點在南港展覽館。這次規模衝到 1300 家展商、4300 個攤位、來自 65 國、預估總人潮接近 10 萬。今年最大的變化是 CEO Summit 首度改成一整天的全日制，早上 9 點鐘由 Google 的 Amin Vahdat 開場——他是 Google Cloud 負責 AI 與基礎設施的首席技術長，長年主導 Google 資料中心網路跟 TPU，這次是他在亞洲第一次公開 keynote，等於是 hyperscaler 這一側對台灣供應鏈的一次公開對齊訊號。接下來還有 NVIDIA 的 CTO Michael Kagan，主題會橫跨晶片、加速運算、開源模型、網路、還有電力跟散熱，這五件事現在幾乎是 AI 資料中心的全部瓶頸。再來由 TSMC 的侯永清跟日月光的吳田玉共同主持。

對我們這種一人 SaaS 或獨立開發者來說，這場展覽的價值不是逛攤位，而是速度。中文圈第一篇「keynote 三分鐘摘要加台廠對照」的極限窗，就是早上 9 點到 9 點 45 分之間；Amin Vahdat 講完後五分鐘內能不能送出稿子，就決定你有沒有拿到那波 SEO 流量跟 email lead。四天 outbound、65 國 buyer、六大主題平台，加上今年新增的量子區、smart fab 區、chiplet 館，這是本週最集中的產業訊號集散地。

再來聊 MCP。7 月 28 號 Anthropic 跟 MCP working group 正式落地了 2026-07-28 這個 spec 版本，到今天剛好是 T+35 天。這是 2024 年 11 月首發以來最大的一次改版，重點是所謂的五件套。第一件是 stateless core——過去 MCP server 需要 handshake、需要 session id、還要 sticky routing，現在完全不用了，任何一個 request 都可以打到任何一個 server instance，等於 MCP server 可以完全 serverless 化部署。第二件是 OAuth 2.1，強制 PKCE、廢除舊的 implicit grant、redirect_uri 要完全匹配，還新增了 iss validation 跟 Client ID Metadata Documents，這對做 SaaS 合規的人是結構性升級。第三件叫 MCP Apps，tool 可以直接 ship 一個沙盒 iframe 裡面的 HTML UI，等於 tool 有了自己的畫面。第四件是 Tasks Extension，讓 server 可以主動排長工作、給 client 一個 handle 慢慢查。第五件叫 Server Cards，capability discovery 透過 .well-known，client 一問就知道這個 server 能幹嘛。

從現在算起還有大概 10 週的 validation window，到 10 月 6 號為止，這段時間就是 SDK 跟 client 適配的關鍵窗。簡單說，如果你自己寫過 MCP server，9 月內把它 stateless 化幾乎是必修課，不然新一輪 client 上來會很尷尬。

第三件事，Claude Code 這個月的更新丟了兩個很實用的東西。一個是 scheduled tasks 直接跑在 server 端，你的裝置不用一直開著；以前想搞個每日 daily brief、每週 SEO 監控、競品掃描，都要自己在 cron 或 GitHub Actions 上補管線，現在 Claude Code 一句話就能排。第二個是 Skill 跟 Plugin 的 security scanning，Enterprise beta 版，可以掃第三方上傳的惡意內容，這是 marketplace 治理開始成熟的訊號。今天做 daily brief 這件事，本身就可以直接遷過去試一下。

第四件事講定價戰場。OpenAI 的 GPT-5.6 三軸現在都上齊了：旗艦叫 Sol，輸入 5 塊、輸出 30 塊，per M token；平衡版叫 Terra，輸入 2 塊、輸出 12 塊；最便宜的叫 Luna，輸入 2 毛、輸出 1 塊 2。這個要跟 Anthropic 的 Sonnet 5 對照——Sonnet 5 是輸入 2 塊、輸出 10 塊，而且 8 月 10 號 Anthropic 宣佈這個定價是「永久」的，9 月 1 號起實施。

換句話說，Terra 跟 Sonnet 5 現在正面對上了，兩個都是輸入 2 塊，Terra 的輸出稍微貴一點。這意味著什麼？意味著多模型 router 這件事開始有實質意義：Luna 可以進 low-tier fallback，成本再砍 90%；Terra 跟 Sonnet 5 之間要走真正的 eval 對照，不能只看報價。台灣客戶對「成本降 3 成、品質不掉」是有具體驗收標準的，這是今天點子 3 的切入點。

最後一件，最不 techy 但影響最大：Fed 9/16-17 的 FOMC，升息機率被 CME FedWatch 昨天 8 月 31 號拉到 66%。從 8 月 28 號 Jackson Hole 那時候的 39.9%，跳到 8 月 29 號的 57%、再到 8 月 31 號的 66%，三跳連跳。背後是 Warsh 在 Jackson Hole 講完後那個週末的 hawkish shift。距離 FOMC 只剩 T-14 天，下週的勞動跟通膨數據就是 tie-breaker signal。這件事對台灣獨立開發者最直接的影響是跨境訂閱定價：升息就是美元強、台幣壓；不升息就是美元弱、台股續強。不論哪個劇本，這兩週的匯率波動都會咬到你美元計價的 ARPU。

順便補一句記憶體。DDR5 32GB kit 現在報價已經到 392 美元，年增大概 3 倍，Q3 TrendForce 預估還會再加 13% 到 18%。這波不是傳統缺貨潮，而是 HBM 產能重分配造成的結構性轉軌，三大廠 2026 到 2027 的 HBM 產能幾乎都被 NVIDIA 跟 AMD 綁完了，一般 DDR5 就變成排擠效應下的犧牲品。這也解釋了為什麼台股 9 月會有股息 2000 億活水加上 SEMICON 展場動能同框——南亞科、華邦電、群聯、南電、台燿、景碩這 6 檔要盯著。

重點是什麼？9 月 2 號這一天，硬體展場、AI 協定、模型定價、貨幣政策四個節奏疊在同一天，每一件單獨看都是大事、疊在一起就是罕見的窗口。行動清單其實很單純：早上 9 點 45 分之前把 SEMICON keynote 首篇稿送出去；今天花 4 小時 audit 自家的 MCP server，列 stateless 化 checklist；花 2 小時建 Terra 跟 Sonnet 5 的 eval baseline；再花 1 小時把 daily brief 遷到 Claude Code 的 server-side scheduled tasks。這 4 件事做完，這週你就領先了大半。就這樣，我們下次見。
