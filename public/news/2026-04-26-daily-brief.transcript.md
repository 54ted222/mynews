今天想聊的是這一週 AI 模型市場很有意思的兩股力量。一邊是 frontier 級的閉源模型在漲價，另一邊是開源陣營直接把價格砍到三分之一，中間還夾著 Anthropic 和 GitHub 各自把治理工具與 IDE 體驗補上來。整件事看起來分散，但其實就是同一條故事線的兩端，所以我想用「漲價對殺價」這個骨架，把今天的重點一條一條串起來。

先講最熱鬧的。OpenAI 在 4 月 23 號推出了 GPT-5.5 跟 GPT-5.5 Pro。賣點還是那三個——更會寫程式、更會操作電腦、更會做 deep research，這些都是 agent 場景的重點題目。但真正讓開發者倒抽一口氣的，是 API 的定價。GPT-5.5 input 一百萬 token 是五美金，output 是三十美金；對比之前的 GPT-5 是 input 兩塊半、output 十五塊，等於整個翻倍。Pro 版本就更兇，三十美金跟一百八十美金。OpenAI 自己的說詞是說，新模型雖然單位 token 比較貴，但因為更聰明，會用比較少 token 完成同樣的任務，所以實際上未必比較貴。在自家的 Codex 產品裡他們也強調，內部結算下來成本跟前一代差不多。聽起來合理，但對很多直接接 API、月底要看帳單的獨立開發者來說，這個翻倍是實打實會看到的，不是體感的問題。

然後就在隔天，4 月 24 號，DeepSeek 直接把市場拉回另一個方向。他們開源了 V4 Pro 跟 V4 Flash 兩個版本。Pro 是 1.6 兆參數的 MoE 架構，也就是 Mixture of Experts，把模型切成很多組專家，每個 token 只活化其中一小部分。所以雖然總參數很大，實際每次推理只用 49B，成本拉得下來。Flash 更小，活化只有 13B。兩個都支援 1M context，這在開源模型裡面是少見的規模。授權方面是 Apache 2.0 跟 MIT，這代表企業可以拿去自己跑、做成產品都沒問題。同步上 Hugging Face 跟 OpenRouter，意思是你不想自架，也能直接接 API。價格方面，V4 Pro 是 input 一塊七四、output 三塊四八，Flash 的 output 只要兩毛八。簡單說，就是有人花了大錢把 frontier 訓練出來，再直接開源給你，比閉源版便宜大概一個量級。

把這兩件事疊在一起看，就會理解我前面說的那條主軸——便宜的 frontier 這個假設正在重新洗牌。過去你可能習慣全部用 GPT-5 或 Claude Sonnet 跑所有任務，現在會被推著去做一件事，就是把工作切細。哪些任務是真的需要 frontier、哪些任務拿 V4 Flash 就吃得下八成水準。如果你的 SaaS 八成的 token 都花在分類、摘要、reranker 這類比較例行的任務，那不去評估一下開源替代方案，下一個月帳單就會自己告訴你答案。

接下來講 Anthropic 那邊。前一天 4 月 23 號他們才為 Claude Code 品質衰退道歉、重置 usage limits，4 月 24 號就推出了 Rate Limits API。這個東西聽起來很無聊，但實際很重要。以前 Claude 的速率限制只能去 Console 看圖，要做監控就只能截圖證明撞牆。現在開放程式呼叫，你可以直接拉組織跟 workspace 的 RPM、TPM、每日 token 用量、月度上限。這代表什麼？代表你可以自己做 dashboard、做告警、做內部 chargeback——也就是把 LLM 成本分攤到不同團隊或產品線。這是 postmortem 之後 Anthropic 答應的「給使用者真的能對帳的工具」第一個落地。我覺得更重要的是，這件事一旦成為標準，其他 agent 廠商也會被同一個尺度框住，後面陸續都會有類似 API 出來。

再來說一下 GitHub。同一天 4 月 24 號，GitHub Copilot 把 inline agent 模式帶進 JetBrains IDE 公測。在這之前，JetBrains 用戶要用 agent 得切到一個獨立的 chat 視窗，跟 VS Code 那邊的體驗有落差。現在你直接在程式碼 inline 的 chat 裡就能啟動 agent，不必跳出來。對 Java、Kotlin、Android 的重度團隊來說，這是第一次跟 VS Code 站在同一條基準線上。同一週 GitHub 還做了另一件事，把 Cloud Agent 的啟用粒度從整個企業 on/off 改成可以按 organization 開——也就是你可以分波讓不同子團隊先試、再 audit、再擴大。對中大型企業導入來說這是必備條件，沒有這個邊界很多採購流程根本卡住。

最後我想從這些變化裡，挑兩條 SaaS 點子延伸一下。第一條是 Cross-Model Cost Router，就是針對 GPT-5.5 漲價、Opus 4.7 變貴、DeepSeek V4 變便宜這個情境，做一個會自動跑回歸測試的 routing 工具。市面上 OpenRouter、Portkey 這些是能切，但通常不會在新模型上線後自動跑客戶的測試集做評比。如果你能拿客戶提供的固定測試題目，每天自動跑一次，輸出「同樣 prompt 在不同模型上的成本跟通過率」，這個東西現在對很多 indie SaaS 是真的有用。第二條是 Anthropic Quota Watcher。Rate Limits API 開了，但工具還沒出。痛點很清楚——團隊半夜撞 quota 在那邊重試，沒人看得到趨勢。技術門檻不高，做個日報、做個 Slack 推播說「再過幾小時會撞牆」，先免費讓一百個團隊用、收意見、再轉付費，這條時間窗口現在最寬。

重點是，今天看到的不是單一事件，是 frontier 漲價跟開源殺價兩股力量同時在拉扯。當你還在用一年前那套「全部接 GPT-5、貴一點沒關係」的思路時，這一週就是提醒你該重新切 pipeline 的時候。回去把上個月的 LLM 帳單拉出來，估算三條情境——維持原狀、整批換 GPT-5.5、把八成任務切到 V4 Flash——光這個動作就值得花一個下午。
