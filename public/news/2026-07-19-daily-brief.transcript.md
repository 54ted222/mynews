今天想聊的主軸只有一件事：今晚台灣時間下午三點，Anthropic 那顆旗艦 Fable 5 的免加價期結束，全球客戶集體進入 metered 計費，每一百萬 token 進十美元、出五十美元。

先講 Fable 5。這是第三次延期後最後一次落地，之後你原本吃到飽的 quota 消失、換成獨立 credits pool、不計入原本週用量五成上限。更麻煩的是，Anthropic 的 agent loop 跑到一半才發現 credits 見底就直接 hard-stop，工作會被切斷。所以接下來四十八小時是 bill shock 加 audit sprint 的窗口，指標盯三個：workload 在十五點前後八小時的 credits burn rate 對照、Batch API 非同步轉移比例、prompt cache 覆蓋率。這三個沒抓好，第一週見底幾乎是必然。

同一天的延伸是 Opus 5 傳言。Polymarket 對七月釋出的合約押到八成一，X 上有帳號說今天就會跟 Fable 5 同一天發布。但 Fello AI 立場很冷靜、原話是「寫進 Anthropic 官方 docs 前一律當虛構」。所以 model router 要備雙軌：真的上，十二小時內插入「Opus 5 for daily、Fable 5 for hard-only agentic」；沒上，Opus 4.8 繼續當 default。

第二條 PayPal。明天 7 月 20 日董事會決議 Stripe 加 Advent 那個 530 億美元收購案，昨天無新 8-K，董事會既定立場是「不足」。Clear Street 目標價 61 美元、比出價只高零點八個百分點。Stripe 四月被拒過一次，二度被拒市場預期走「首輪拒絕、二輪加價」老劇本。做跨境 SaaS 的台灣 indie，公告後四十八小時是內容窗、推 Lemon Squeezy、Paddle 這種 merchant of record 替代方案白皮書，first-mover 現在零供給。

第三條 WAIC Day 3 產品端沒新首發。值得追的是 MiniMax M3，社群回報 self-host 起手是 Nvidia HGX B200 八張，AWS、Vast.ai 上每小時大約 16 到 24 美元。意思是說，只有「API 每年花超過 8 萬美元」的客戶 self-host 才划算跨過去，這數字可以直接寫進客戶提案。

第四條資安。Microsoft 昨天亮相 Project Perception 對打 Anthropic Mythos，wedge 是用三家模型 smart routing 壓成本，Mythos API 傳貴 Opus 一倍、貴 GPT 八成二。經濟部補助規定資安費用要佔七趴以上，Project Perception 剛好給你 B2B 採購定價 anchor。中文首發現在還來得及。

Product Hunt 一句：ElevenLabs 的 ElevenAgents 拿日冠六百五十五票，語音 agent 賽道明顯風向、中文台語口音要實測 Deepgram 對比。

台灣本地。台積電 7 月 17 日收 2,290、跌 7.29%，是法說後獲利了結、不是基本面翻轉。Q2 EPS 27.25、毛利率 67.7% 都破紀錄，CoWoS 缺口延到 2027 為長線 anchor。加上日經亞洲引「台灣發展本土生成式 AI 對抗中國內容影響」，做 EdTech、客服、客製 LLM 的 indie 是硬的政策對齊 wedge。

倒數：DeepSeek V4 剩 5 天、經濟部 AI 補助剩 5 天、MCP 7-28 RC 剩 9 天、AI 應用大展剩 11 天。Oracle 昨天傳裁員 3 萬人加碼五千億美元的 Stargate AI 基礎設施計畫，AI capex megatrend 續行錨又硬一分。

重點是，今晚十五點 Fable 5 進 metered 是 T-0，四十八小時內只做一件事：hotline audit landing 加落地當下中文首篇；同時備 Opus 5 上跟不上的雙軌 SOP。明天 PayPal T-1，公告後四十八小時是替代金流內容窗。補助剩 5 天實質只剩 4 個工作日。本週節奏就是 audit sprint 加內容 first-mover，別的不做。
