今天想聊的是 8 月 10 號這一天，台灣 AI 硬體的三條訊號同時在同一週擠進來——這種密度不是每個月都有，特別對做一人公司、5 到 20 人 SaaS 團隊的獨立開發者，是個很明確的談判窗口。

先講最重的一條，就是台積電 7 月營收。台積電照慣例每個月 10 號盤後公布上個月營收，今天就是 8/10 週一，投顧圈給的預估區間是 4,500 到 4,800 億台幣。中信投顧總座陳柏州上看 4,800 億，群益投顧董座蔡明彥比較保守估 4,570 億。主要拉貨動能是 Apple 新機加上先進製程滿載。這裡的關鍵不在精確落點——只要過 4,500 億就是單月新高，上半年營收已經 2.4 兆、年增 35.6%。

第二條，MSCI 8 月季調結果會在台北時間 8/13 週四凌晨公布，正式生效是 8/31 收盤後。本土投顧的主流估算是「4 進 2 出」，四個新入列的估是南亞科、華邦電、群聯、景碩；統一、台新、兆豐三家法人估得更寬鬆，多算了南電、台塑化、台燿變成 7 檔。南亞科跟華邦電本來就已經是記憶體超級循環的焦點股，MSCI 入列的意義在於——被動 ETF 資金會照規則跟進，就是一波短期資金流入的 catalyst。

第三條昨天 8/8 就落下了。鴻海公告 7 月合併營收 9,465 億元、年增 54.19%，這是鴻海史上第一次單月營收破 9 千億。

把這三條疊起來就得到一個結論：台積電、鴻海、記憶體族群三線同時在 Q3 拉貨，代表台灣 AI 硬體堆疊的下游需求已經被上游晶圓、中游 EMS 兩頭同時確認。這個 narrative 對做客戶談判 SOP 的獨立開發者特別好用——你原本可能只能講「鴻海 7 月營收破 9 千億」，現在可以升級成「台積電加鴻海雙破紀錄 = 客戶 Q3、Q4 訂單能見度已經到季度尺度」，你的定價可以往上調 8% 到 15%。

順便一個 downstream 訊號：鴻海亞灣超算 Visionbay.ai 商轉 T+10 了，5MW 的 NVIDIA HGX B300 叢集，全台最大、亞洲第二個拿到 NVIDIA Exemplar Cloud 認證。官方回報 90% 以上使用率、排隊 3 到 6 個月。定價還沒公開，但排隊時間本身就是需求硬證據。

好，硬體訊號講完，來看幾個 T-day 的軟體訊號窗——因為 8 月中前這幾條同時倒數，時間點抓對很重要。

第一個是 Qwen3.8-Max 開源承諾 T-0 週。阿里巴巴當初承諾 8/10 這一週要在 Hugging Face 跟 ModelScope 上架 Qwen3.8-Max，2.4T 參數 MoE、95B active。今天 8/10 週一 repo 還是空的、license 也還沒公告。承諾窗剩最後 5 天。如果延誤，Kimi K3 這個 2.8T MoE、1M context、7/27 就以 Apache 2.0 開源的模型，就是現階段唯一已上架的 max-class 開源選項。做 self-host 給金融、醫療、法律這種 data-residency 敏感客戶的獨立開發者要盯緊。

再來，OpenAI Atlas 昨天 8/9 已經正式 EOL 了，今天是 T+1。今天起 OpenAI 的 agentic browser 只剩下 ChatGPT desktop app 加 Codex CLI 這條路，配合新的 approve-for-me flag 跟 MCP GA。這裡有個 downstream 影響很多人會忽略：8/31 起，Codex CLI 底下的 gpt-5.4、gpt-5.4-mini 這兩個 model alias 會下架，換成 gpt-5.6-terra 跟 gpt-5.6-luna，剩 21 天。你要是 CI 或 headless script 有寫死 gpt-5.4，現在就要 grep 一次、掃出來準備替換。

第三個 T-21 訊號，是 Anthropic Sonnet 5 的 promo 定價。$2 每百萬 input、$10 每百萬 output 的優惠會在 8/31 UTC 到期，改成 $3/$15，flat 加 50%，加上 tokenizer 差異還會再多 20% 到 35%。短期能做的就是——能走 batch API 的走 batch，那是 50% 折；能開 prompt caching 的開 caching，最多可以 90% 折。這樣就算 promo 到期，總成本不會爆炸。

第四個訊號，Cursor Composer 3 Vega 的決策延到 8/13 到 8/16 這個窗口。因為 xAI 到現在還沒發 Grok 4.6 的官方 model card、SWE-Bench Verified、跟定價，Arena 官方也說「下週上榜」，也就是那一週。Cursor Composer 3 的 base model 選型會等這個公告，所以 8/13 到 8/16 就是 Cursor 定案的關鍵窗。

把這些訊號全部串起來，8 月 10 號到 16 號這一週，訊號密度真的很高：今天週一台積電 7 月營收、週三 US CPI、週四凌晨 MSCI 季調結果，加上 8/31 前的 Sonnet 5 promo、Codex 8/31 model 替換、Qwen3.8-Max 承諾窗最後 5 天，全都在這 21 天內收斂。

重點是，這種訊號密度不是每個月都有。對做 audit sprint、做客戶談判 SOP、做 dashboard SaaS 的獨立開發者來說，就是一個把 talking points 湊齊、把定價往上調的窗口。台積電 7 月營收數字今天晚上 6 點左右就會公布，記得盤後 30 分鐘內更新你的 dashboard、發 FB 或 LinkedIn post，把訊號串起來給客戶看——這一輪窗口的價值就出來了。
