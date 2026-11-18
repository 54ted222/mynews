今天想聊的是 2026 年 11 月 19 日的每日創業情報。這一天是罕見的四大事件同日撞期，所以節目會稍長，請耐心聽完。

最大條的是 Anthropic IPO。代號 ANT，今晚在 Nasdaq 掛牌首日交易。原本公開發行區間是每股 70 到 78 美元，但這週一華爾街日報、彭博、CNBC 三家口徑都是「可能以 80 美元以上定價」，訂單簿大約 5000 億美元、超額認購 6 到 7 倍。如果真的定在 80 以上，掛牌估值會落在 1.4 兆到 1.6 兆美元，比原區間中點的 1.2 兆明顯跳一階。對台灣來說兩層意義。第一層是散戶，配售僅限美國境內，台灣只能透過複委託買，而且今天就是零售配置的最後決策窗口，Stocktitan 估首日散戶淨買力大約 2.5 億美元。第二層更重要，是給台灣所有正在用 Claude Pro、Teams、Enterprise 的大客戶的訊號——以 Anthropic 810 億美元 ARR、加上 2026 對外承諾 250 億美元算力支出的比例推算，上市後 2027 上半年 Claude 商業條款結構性漲價的機率顯著升高，不只是機率，是漲價錨點已經具體化。

再來 Nvidia。11 月 17 日盤後公布 FY2027 第三季財報，營收 1158 億美元、年增一倍，資料中心單季 1076 億、超大規模客戶營收 600 億、季增 23%。關鍵在 Q4 財測給到 1300 億、正負 3%，明顯超車共識。新架構 Vera Rubin 首季就貢獻 200 億、被形容為史上最快爬坡，CoreWeave、Google Cloud、Azure、Oracle Cloud、Nebius 五家雲都已經在跑。GAAP 毛利 74.8%、本季返還股東 280 億、又新加碼 1500 億美元回購授權。因為 Huang 被延攬到政府任職，這場是財務長 Colette Kress 代理執行長第一次主持法說，整體 tone 偏強。對台灣供應鏈的意義很直接：Vera Rubin 200 億的出貨會透過 TSMC 的 CoWoS 封裝、ASE 封測、緯創跟技嘉的伺服器整機一層層往下滾，TSMC 11 月營收 12 月 10 日就要公告，剩 21 天，是驗證 Q4 財測上緣會不會兌現的關鍵錨點。

跟 Nvidia 同一天還有 Meet Taipei 2026，今天上午 11 點在圓山花博正式開幕，550 多家新創、將近 150 家國際、23 個國家，是歷屆海外最多。重點不是數字，而是第一天 Forum 的「What Can't Be Prompted」這場，由 OpenAI APAC Startup Lead Thomas Jeng、前 Google Taiwan 董事總經理簡立峰、群聯 CEO 潘健成三個人同台。這是 Thomas Jeng 第一次在台灣公開定義「AI 普及之後創辦人還剩下什麼」，所以下午 Session 結束後的 outreach 兩小時是黃金窗口，特別是 OpenAI 的 startup credits 在台灣的配置通道，可能第一次有在地訊號。第二天 Steve Chen 會來。對正從副業轉全職的台灣工程師，在 Dataconomy 11 月 3 日那篇「台股漲 50% 擠壓創投」的背景下，現場投資人的 ticket size 預期會縮小，所以 pitch 策略要從估值講故事轉成「技術 demo 加上已有付費用戶」。

再來 Microsoft Ignite 第三天。微軟一口氣發了七支自研的 MAI 模型。對獨立開發者最直接相關的是 MAI Code 2 今天 GA 到 GitHub Copilot，年繳用戶自動取得；還有 Code 2 Flash 進入 Azure AI Foundry 的私測。Axios 四個 benchmark 平均顯示 Code 2 Flash 大約有 GPT-6.1 Sol 98% 的性能、但定價只有四成；外洩定價每百萬 token 輸入 0.1 美元、輸出 0.5 美元，官方還沒確認，但若屬實，等於打開了對 GPT-6.2 Sol、Claude Opus 4.7 的成本套利窗口。另外有兩個比較戰略的訊號：一是 MAI Cyber 2 Flash 只開放給 verified defenders，這是微軟第一次按信任層級分層釋出大模型；二是 MAI Licensed Weights 把權重授權給 Frontier Co 信任客戶，這是第一個 vendor 等級的大模型權重商用授權訊號，對歐盟 AI Act open weights 要求構成合規伏筆。

OpenAI 這邊，GPT-6.2 Astra 跟 Sol 11 月 17 日發佈到今天是 T+2。Astra 定價輸入 8 美元、輸出 40 美元 per 1M、cached 0.4，比上一代降 20%；Sol 是 2 跟 10、cached 0.1。Astra 目前 Artificial Analysis Intelligence Index 排第二，CodeRabbit 早期評測顯示 Astra 跨檔案 bug 偵測率比 Sol 高 20%、比 Claude Opus 5 高 33%。簡單說選型邏輯：Codex 入手最省，跨檔案推理用 Astra，大量 RAG 或吞吐用 Sol。

剩下幾條比較短的事件也要提一下。OpenAI Agent Builder 11 月 30 日 EOL，今天是 T-11，感恩節前實質只有 7 個工作天，ChatKit 嵌入用戶要準備遷移，候選是自建 Agents SDK 或遷到 Azure Foundry Agent Service。立法院中小微企業 1000 億轉型條例進入第二觀察窗 Day 3，11 月通過機率已經下修到極低，本週內若還是沒進展，R&D 的帳務切割要開始準備走 2027Q1 情境。金管會虛擬資產 9 項子法的 40 天公告期今天是第 17 日、倒數 24 天，想集體發函反映 3 億資本門檻跟 12 個月過渡期太短的 solo dev 聯盟，現在是最後動手的時間點。

重點是：今天這一天對台灣獨立開發者等於同時面對四個決策窗口——今晚 10 點半到 12 點的 Anthropic 首日開盤、下午 Meet Taipei Thomas Jeng Session 的現場 outreach、MAI Code 2 Flash 的 Foundry 申請、還有跨模型選型要不要在 72 小時內定下來。如果只能抓一條主線，我會建議抓 Anthropic IPO 跟 Claude 商業條款漲價的下游影響鏈——因為在所有解盤之中，它是中文深度首篇空白最大、新鮮度最高、對台灣 Claude 用戶實質影響最深的那一條。
