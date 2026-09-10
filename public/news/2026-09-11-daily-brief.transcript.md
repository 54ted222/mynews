今天想聊四條主線，第一條是今日全球 AI 成本結構最大的訊號：DeepSeek V4.1 Flash 在 9 月 10 日凌晨四點 UTC 正式 GA 了，比原本私測到期整整快了一天。這個型號有幾個很硬的規格，五百五十二億參數的多模態 MoE、一百萬 token 的上下文，而且原生視覺理解直接併入 backbone，前代那個 V4-Flash-Vision-Exp 實驗版就退場了。它另外做了一個四路交鎖的 KV cache 架構，把長時 agent 的記憶體成本壓到前代的四分之一，簡單說就是跑長 horizon agent 的成本直接砍到剩四分之一。

再來是官方 benchmark，五個最硬的 agentic 測試裡它贏了四個，把 GPT-5.6 Sol 跟 Claude Opus 5 都壓下去，包括 DeepSWE 1.1、AutomationBench、Agent's Last Exam 跟 CyberGym。定價玩了新花樣，叫做 peak 跟 off-peak 分時計費，週間 UTC 的凌晨一點到四點、還有早上六點到十點算 peak 時段，其他時間、還有週末假日都算 off-peak；peak 時段 input 一百萬 token 三毛美金，output 跟 Opus 5 比大約便宜二十倍，off-peak 更誇張，便宜四十倍。這個數字對台灣做 vertical SaaS 的獨立開發者影響很直接，成本結構整個要重算。

不過這裡有個警報一定要講：DeepSeek 官方宣布 V4-Pro 從 9 月 14 號北京中午起開始退場，現有 V4-Pro 客戶的 request 會被自動 route 到 V4.1 Flash，而且是靜默 route，客戶會直接被收 Flash 的費率，一直到 V4.1-Pro 正式上線為止。所以你如果現在有產品掛在 V4-Pro 上，這週末之前一定要做 API 遷移驗證，不然下週一開始可能會靜默出事。

第二條主線是美國 8 月 CPI 今天晚上發布，美東時間早上八點半，換算台北時間今晚八點半就會出來，這是 9 月 15 到 16 號 FOMC 會議前的最後一個 tie-breaker。上週 8 月非農就業意外多了十六萬二千人，把 25 bp 升息的機率一路推到 59%，跟上週三個平台從 55 到 66，Kalshi 只有 26，Polymarket 60，那種 40 個百分點的分歧比，這週已經明顯收斂。Waller 9 月 3 號的演講也偏鷹派。市場預期 headline 月增 0.4、年增 3.4，core 也是月增 0.4、年增 2.4。如果真的升息，就是美元強、台幣被壓、跨境 SaaS 的 ARPU 會被壓縮，但 CoWoS 概念會續看多；如果 hold，就是美元弱、台股續強。台股昨天 9 月 10 號收盤跌 220 點守住 47K，台積電漲 10 元到 2470，光電股連兩天續熱，玉晶光千金站穩。

第三條主線是 iPhone Duo 折疊機，離 10 月 16 號預購還有 35 天，10 月 23 號開賣還有 42 天。Digitimes 昨天 9 月 10 號發了一篇很硬的深度分析，標題叫做「$700 premium on a hinge」，七個大要點涵蓋折疊絞鏈、光學鏡頭、WMCM 封裝、DRAM 到貨、Samsung OLED、C2 modem、還有量產爬坡，把台廠三軌供應鏈整個講透。台廠這邊，折疊絞鏈主要是新日興跟兆利，變光圈六葉六片式的鏡頭是大立光、玉晶光、亞光，WMCM 封裝則是南電、景碩、家碩。CNN Underscored 跟 BGR 的早期試用都給正面評價，說 1999 美金這個價位值得，但 CNET 跟 YouGov 8 月的調查說有 75% 美國成人沒興趣，反應是二元的。

同一場 Apple event 這邊還有一個 HomeOS 的開發者 preview 揭曉了，開發者 SDK 是三軸：HomeKit 擴展 API、WidgetKit widgets 可以走 App Intents 做互動、還有 Matter 1.4 讓 HomePad、Echo Show、Google Nest Hub 一次實作跨平台。硬體是 HomePad 7 吋螢幕，A18 晶片加 8GB RAM，有 Face ID 跟 Center Stage 前鏡頭，秋季就要出貨。這對想做智慧家庭跟 IoT vertical App 的獨立開發者，是很早期的搶灘窗。

最後一條是給開發者跟中小賣家的兩條行動窗。GitHub Copilot 9 月 28 號會做一次統一體驗改版，離現在剩下 17 天，會把 Chat、Mobile、跟 cloud agent 併成單一 Copilot，cloud agent 會走 Sandbox 提速，還有一個很重要的新功能是平行 agent sessions in Git worktrees，讓多個 AI 任務可以各自有獨立 context 同時進行；Copilot CLI 也加入 MCP OAuth sign-in。這是台灣團隊重整「Copilot 對 Claude Code 對 Cursor」三軸 SOP 的最後倒數。Claude Code 這邊 v2.1.263 之後 9 月 8 到 10 號有幾個遞增更新，加了 maxEffortLevel 控制 reasoning 成本、resume first-render 速度改善、還有 sandbox 內 pbcopy 失敗時會建議用 /copy fallback。Vercel AI SDK 6 修了 workflow-harness 在時間切片之間會流失 partial tool inputs 的老 bug，這對長工作流 agent 是關鍵。

賣家這邊，蝦皮 9.9 超級購物節今天 9 月 11 號是 VIP DAY 收尾，玉山信用卡 25% 回饋，單筆最高折 2000 元。但真正的重點是 9.9 節後 15 到 30 天，是驗證蝦皮 GMV 對比私域轉移訊號的關鍵期。蝦皮 2026 新制手續費加一加是 20%，酷澎 MAU 暴衝 107% 到 990 萬超越博客來排到第四，中小賣家的私域大遷徙已經是主敘事。搭配商業服務業 AI 導入 10 萬補助 10 月 20 號截止、還有 SIIR 150 到 500 萬案，六週衝刺窗打開了。

所以重點是：一，如果你有產品掛在 DeepSeek V4-Pro 上，這週末之前一定要做遷移驗證，不然 9 月 14 號北京中午開始會被靜默 route 到 Flash；二，V4.1 Flash 這個 output 便宜 20 到 40 倍加上 agent memory 砍到四分之一的組合，是台灣 vertical SaaS 這個季度成本 refactor 的最大 tailwind，值得馬上排 shadow eval；三，今晚 8 點半 CPI 出來要盯緊台幣跟 TSMC ADR 的反應，這是 FOMC 前最後一個定調；四，iPhone Duo 10 月 23 號開賣還有 42 天，台廠三軌供應鏈跟 HomeOS 開發者搶灘窗兩條線可以打包成 event pack；五，Copilot 9 月 28 號改版剩 17 天，團隊 SOP 該重整了。今天就聊到這裡。
