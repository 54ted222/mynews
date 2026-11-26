今天想聊的是 11 月 27 日這週五的創業情報，重點集中在三條線。第一條是 Anthropic 這檔新上市股票首週走勢，以及它對台灣 Claude 用戶的影響。第二條是 OpenAI Agent Builder 下架倒數最後三天，台灣 solo dev 的時差機會在哪。第三條是 Claude Code 連兩版 release，加上 Hugging Face 把推論路由切到 OpenRouter 這一組工具堆疊更新。

先講 Anthropic 這檔股票，代號是 ANT。今天是它上市之後的第七個交易日，也是美國感恩節後的黑色星期五，所以美股只開半天，台灣時間凌晨兩點就會收盤。前一天感恩節整天休市、沒有盤。更前一天 11 月 25 號週三的盤中創下新低，單股跌到 $73.86 美金，而且沒有任何修補的跡象。這個股價現在在發行價 $111.5 美金之下大概跌了三成多。但有意思的是，三家主要券商在 Day 5 當天都開始發表評等。一家叫 Wedbush 給了 $120 美金的目標價，一家叫 Canaccord 給了 $135，另一家 Oppenheimer 給 $150，三家的範圍落在 $120 到 $150 之間，中位數大概 $135。換句話說，相對於現在 $73.86 的低點，券商看的上行空間大約是 63% 到 104%。

那這之於台灣開發者有什麼意義？簡單說有兩層。第一層是如果你是 Claude 的大客戶、是 Pro 或 Teams 用戶，那麼 2027 年上半年 Anthropic 要漲價的敘事可能會被壓抑。因為股價沒撐住、三家券商 target 都在喊上行，如果公司這時候硬漲價，會跟分析師說的反轉故事互相矛盾。所以如果你是中大型客戶，下週一 11 月 30 號到 12 月 4 號這五天，是去跟 Anthropic 業務開議約會議的最佳窗口。第二層是如果你是台灣散戶、用永豐金或富邦複委託買的，首日買在 $111.5 的現在浮虧三成多，接下來要觀察的是 12 月 14 號 Russell 1000 的納入、跟 12 月 21 號 Nasdaq 100 的納入。這兩個被動買盤合計估計有 8 到 20 億美元，是這檔股票跌破發行價後第一個具體日期的 passive flow 催化劑。

再來聊 OpenAI Agent Builder 下架。這個東西在 11 月 30 號美國週一就要結束服務。從今天 11 月 27 號黑色星期五半日開始，加上週末兩天休市，實際上美國開發者只剩下 11 月 30 號當天一個完整工作日可以處理遷移。遷移路徑是什麼呢？官方指引是改用 Agents SDK 做 advanced integration，自己架後端重新 wire ChatKit 這個嵌入式對話元件。另一條路是去申請微軟的 Foundry Agent Service，搭配 Entra Agent ID 做企業版本的 agent 代管。不過要注意，Agents SDK 的 export scaffold 只給你骨架、不會把你原本的 workflow graph 整個轉過去，也不保證每個行為都會被原封保留。同一天，reusable prompt objects 跟 Evals dashboard 也會一起下架。

這對台灣 solo dev 的機會在哪？時差優勢。台灣是 UTC+8、24 小時運轉，當美國週五半日下班以後，週末的這兩天台灣可以持續接案。估計美國大概有 200 到 500 家 ChatKit 嵌入客戶需要緊急遷移，單案費用落在 2000 到 20000 美金之間。所以如果你有 Node.js 加上 Agents SDK 的能力，現在就可以上 Upwork 或 Toptal 開 1 對 1 諮詢，時薪可以從 150 美金起跳。

第三條主線是工具堆疊更新。Claude Code 最近連續出了兩版，v2.1.328 在 11 月 19 號 release，v2.1.329 緊接著上。兩版的亮點有這幾個。auto mode 現在在 Opus 4.6 跟 Sonnet 4.6 的互動 session 裡預設啟用；hook failures 現在可以直接 block 動作，等於是生產環境的 safety net；`/tasks` 這個指令現在可以顯示排程中的 tasks 跟 forks；`/status` 會標示沒有自動更新的 marketplaces。對重度使用 fork subagents 工作流的用戶、或 Max 20x 月費用戶來說，這些都是蠻實用的新預設。

另一個大事件是 Hugging Face 在 11 月 16 號把 Inference Providers 的語言模型 routing 整個切到 OpenRouter。OpenRouter 是一個 LLM router 聚合器，單一 endpoint 可以代理超過 600 個模型。對 Hugging Face 開發者社群來說，意思是你原本放在 HF 的 custom provider keys 在 language-model routing 上會失效、要改接 OpenRouter。要注意一個細節：OpenRouter 的新 routing engine 平均比舊的 price-first routing 貴大約 6% 一個 request。不過你可以用 `:floor` 這個 suffix，或是在 provider 設定裡指定 sort 為 price，就可以明確 override 回到 cost-first。對月模型成本在 200 到 2000 美金的小 SaaS 來說，本週是實操週第一天。

另外不要忘了 11 月還有兩條台灣政策線在跑。立法院的中小微企業 1000 億轉型條例，已經連續 11 天沒有媒體進展，2027 年第一季作為申請起點的情境大致確立。還有金管會虛擬資產服務法的 9 項子法 40 天公告期倒數還剩 16 天，本週是書面意見實質撰稿週的第 4 天，穩定幣 3 億資本、12 個月過渡期這兩個數字是 unchanged 的 anchor。

那今天要做的三件事。第一，趁 Taipei 早上寫一篇 ANT 首週 5 日 final recap 加上三券商 target 共識、雙 passive flow reversal thesis 的中文深度首篇，目前中文媒體這塊整合近零。第二，寫一篇 Agent Builder EOL 倒數三天加上 Taipei 時差優勢最後 48 小時的繁中 B2B 緊急 outsource playbook。第三，寫一篇 Claude Code v2.1.328 和 v2.1.329 連兩版加上 Hugging Face 切到 OpenRouter 的 11 月 AI 工具堆疊 recap，順便做 12 月預覽。

重點是：Black Friday 這個時間窗、加上感恩節休市後的流動性稀薄、加上 Agent Builder 下架倒數、加上 Claude 這一波 release，三條線剛好匯合在今天跟下週一這五個工作日。台灣開發者的時差優勢在這個窗口特別重要，因為美國週五只開半天、週末兩天休市，但台灣 24 小時都在運轉，可以承接美國客戶遺留的緊急案。這是本週我會優先投入的三條戰線。
