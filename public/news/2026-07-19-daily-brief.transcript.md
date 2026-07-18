今天想聊的主軸只有一件事，就是今晚台灣時間下午三點，Anthropic 那顆旗艦模型 Fable 5 的免加價期正式結束，全球客戶集體進入 metered 計費，每一百萬 token 進十美元、出五十美元。這條線牽動整份日報。

先講 Fable 5。這是第三次延期後最後一次落地。今晚十五點過後，你原本吃到飽的 quota 就消失，換成 credits pool，而且這 pool 完全獨立、不計入你原本週用量五成的上限。更麻煩的是，Anthropic 現在的 agent loop 是跑到一半才發現 credits 見底就 hard-stop，工作會被切斷。所以接下來四十八小時是「客戶 bill shock 通報加 audit sprint」的窗口，指標盯三個：workload 在下午三點前後八小時的 credits burn rate 對照、Batch API 非同步轉移比例、prompt cache 覆蓋率，這三個沒抓好、第一週見底幾乎是必然。

同一天的延伸是 Opus 5 傳言。社群 Polymarket 對 Opus 5 七月釋出的合約押到 81%，X 上有帳號說今天就會跟 Fable 5 同一天發布，但 Fello AI 的立場很冷靜，原話是「在寫進 Anthropic 官方 docs 前一律當虛構」。所以做 model router 的 indie 要準備雙軌：真的上，十二小時內插入「Opus 5 for daily、Fable 5 for hard-only agentic」的分派條款；沒上，Opus 4.8 繼續當 default。

第二條主線是 PayPal。明天 7 月 20 日董事會決議 Stripe 加 Advent 那個 530 億美元的收購案，昨天沒有新的 SEC 8-K，董事會既定立場是「不足」。券商 Clear Street 目標價 61 美元，比出價只高 0.8%。Stripe 四月已經被拒過一次，二度被拒的話市場預期會走「首輪拒絕、二輪加價」老劇本。對台灣做跨境 SaaS 的 indie，明天公告後四十八小時就是內容窗，推 Lemon Squeezy、Paddle 這種 merchant of record 替代方案的白皮書，first-mover 現在零供給。

第三條線 WAIC 今天進 Day 3，產品端沒新首發，收斂成 Alibaba、Tencent、Baidu 三家對照。值得追的是 MiniMax M3，昨天在 Hugging Face 熱度攀升，社群回報 self-host 起手 config 是 Nvidia HGX B200 八張，AWS、Vast.ai、RunPod 上每小時大約 16 到 24 美元。這意思是說，只有對「已經在 API 每年花超過 8 萬美元」的客戶，self-host 才划算跨過去，這個數字可以直接寫進客戶提案。

第四條線資安戰場。Microsoft 昨天正式亮相 Project Perception，明擺著對打 Anthropic Mythos。wedge 很清楚：Mythos 走純 Anthropic 模型棧、API 貴，傳貴 Opus 100%、GPT 82%；Project Perception 用 Microsoft、OpenAI、Anthropic 三家 smart routing 壓成本。定價還沒公佈，但對做經濟部補助的 indie 是加分——補助規定資安費用要佔 7% 以上，Project Perception 剛好給你「B2B 採購 AI 資安 SaaS 定價 anchor」reference case。「Mythos vs Project Perception 對台灣 SaaS 資安 audit 選型」中文首發現在還來得及。

Product Hunt 帶一條。ElevenLabs 昨天推的 ElevenAgents 拿日冠六百五十五票，語音 agent 賽道明顯風向。對台灣 indie 是新對比 case，但中文跟台語重口音場景要實測，Deepgram Nova-3 還是要對比。

台灣本地。台積電 7 月 17 日收 2,290、跌 180、負 7.29%。看起來嚇人但是法說後獲利了結，不是基本面翻轉。Q2 EPS 27.25、毛利率 67.7% 都破紀錄，全年營收 +40% 保持，CoWoS 產能 12.5 萬片被 Nvidia 一家鎖過半、缺口延到 2027 為長線 anchor。持有 00408A、00410A 的 indie，客戶 SOP 加「回檔即基本面錨強化」揭露就好。另外日經亞洲 7 月 16 日引「台灣發展本土生成式 AI 對抗中國內容影響」，對做 EdTech、客服、客製 LLM 的 indie 是硬的政策對齊 wedge。

最後倒數。DeepSeek V4 hard-stop 剩 5 天，經濟部 115 年 AI 補助也剩 5 天，週末只剩兩個工作日。MCP 的 7-28 RC 剩 9 天，AI 應用大展剩 11 天。Oracle 昨天傳裁員 3 萬人挪資源加碼五千億美元的 Stargate AI 基礎設施計畫，AI capex megatrend 續行的錨又硬了一分。

重點是，今晚十五點 Fable 5 進 metered 是 T-0，四十八小時內台灣 indie 要 ship 的就一件事：hotline audit landing 加落地當下的中文首篇。同時準備 Opus 5 上跟不上的雙軌 SOP。明天 PayPal 決議 T-1，公告後四十八小時是替代金流內容窗。補助剩 5 天實際只剩 4 個工作日。這幾條線疊在一起，本週的節奏就是 audit sprint 加內容 first-mover，別的不做。
