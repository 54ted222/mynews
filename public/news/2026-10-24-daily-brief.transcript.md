今天想聊的是 10 月 24 號週六這一天，從一個獨立開發者的視角看，有三個訊號正在同時收斂到一個共同點：AI 應用層的底層選型，到底往哪一邊壓。這三個訊號分別是 Anthropic IPO 的最後 24 小時倒數、Claude Agent SDK TypeScript 0.3.302 這版新東西，以及台灣國發基金 100 億 AI 新創基金第一年的實際投資進度揭露。

先從 Anthropic IPO 說起。目前所有可信的訊息來源，不管是 Bloomberg、BGov 還是 Implicator，都收斂到同一個時間表：Anthropic 鎖定感恩節，也就是 11 月 26 號之前完成上市；要達成這個目標，必須在 11 月 9 號那一週起跑 roadshow，也就是路演；而要在 11 月 9 號起跑路演，S-1 這份正式註冊文件，必須在 EDGAR 系統上公開，而且窗口倒推 15 天，就是明天 10 月 25 號。所以 10 月 24 號這整天，等於是 Anthropic 公開 S-1 的最後 24 小時。從 6 月 1 號 Anthropic 悄悄遞交 confidential S-1 到今天，已經 145 天，很長的一段隱身期。目標估值是 2 兆美元，目標募資規模 1 千億美元，承銷團是 Goldman、Morgan Stanley、JPMorgan、Citigroup 這四大行。簡單說，如果明天 10 月 25 號 EDGAR 上還沒看到公開的 S-1，整個感恩節前上市的時間表就會往後位移到 11 月 16 號或更後。

為什麼這件事對台灣的獨立開發者有意義？因為一旦 1 千億美元真的拿到，Anthropic 的定價會變得更積極。這表示我們現在在用的 Claude Sonnet 5.5、Haiku 5.5，甚至更小的 Astra，這些模型的定價會重新洗牌。對於用 Haiku 跑高頻 subagent 的團隊，單位成本可能會下來；對於要在 pricing 頁上寫死 margin 的 SaaS 產品，則要開始準備重新算一次每千 token 的成本結構。

接下來講 Claude Agent SDK 0.3.302 這版。10 月 16 號，T+8 的位置，Anthropic 把 TypeScript SDK 升到 0.3.302，Python 升到 0.2.168。這版的四個新東西值得單獨拉出來講：第一是 nested subagents with caps，也就是巢狀子代理加上限參數。簡單說，一個 agent 可以在單次執行裡遞迴呼叫其他 agent 當子工具，caps 就是最大深度、最大並行數、token 預算這些護欄，避免 agent 自己呼叫自己呼叫到爆算力。第二是 SessionStore，跨 session 的狀態儲存，可以把 agent 的工作記憶、工具呼叫結果、使用者偏好序列化下來，下次啟動時 resume 續跑。第三是 skills，可組合的技能單元。第四是 plugins，加上 structured outputs、permission defaults 這些細節。版本是跟 Claude Code CLI v2.1.302 同步發布的。

這版東西為什麼重要？因為它幾乎是對 Vercel AI SDK 7 的 WorkflowAgent 直接畫線對打。Vercel 那邊 6 月 25 號 GA 的 7.0 版，核心就是 WorkflowAgent 這個類別，支援 durable storage execution state，可以跨 restart、跨 approval delay 執行。簡單說，TS Agent 這個底層市場，過去是 LangGraph、LangChain 一家獨大，現在變成 Claude Agent SDK 跟 Vercel AI SDK 7 兩強對打的局面。對於用 TypeScript 寫 agent 的台灣一人 SaaS 團隊，過去兩週內最值得做的一件事，就是把這兩套各自跑一個最小 PoC，去看自己的 use case 比較適合 Claude 這套 nested subagents 的樹狀結構，還是 Vercel 這套 durable workflow 的時間軸結構。寫一篇三千五百字的中文對照 blog，用來開顧問接案的 landing page，是接下來這兩週很值得做的事。

再來講國發基金這 100 億。這週揭露了第一年的實際進度：100 億的 AI 新創基金，第一年實際投出去的只有 2.4 億新台幣，分 10 個案子，每案平均 2,400 萬。GPU 算力池擴到 100 片。政策定位是 10 年內要催生 50 家 AI 獨角獸；配套的 2026 年預算是 311 億，2027 年預估 464 億，4 年合計 1,366 億。單案最高額是 2 億，但實際平均只有 2,400 萬，所以每一案的可申請額度，距離上限還有 8 倍的成長空間。另外，StartupBlink 的 2026 全球新創生態系排名，台灣從去年的第 25 名升到第 20 名，往上跳 5 位，正式進入全球前 20 的門檻。

這代表什麼？代表政策面給的容量其實還沒用滿。對一人 SaaS 來說，過去你可能覺得國發基金是給大的、給獨角獸的、跟我沒關係；但從 2.4 億對 10 案的分母來看，單案平均 2,400 萬意味著評審目前偏保守，正在尋找更多可以放進去的小案子。如果你手上有 AI 相關的產品，又能寫出清楚的 ROI 試算、GPU 算力池 100 片的申請流程、2027 年 464 億政策追蹤，你是可以申請單案 1,000 萬以上的；這本身就是一個很值得做的顧問服務切入點。

不過，這裡要補一個 TSMC 的警訊補充。TrendForce 剛把 2027 到 2028 年的 TSMC capex 預估上修到 1,050 億美元，比 UBS 的 900 億、Morgan Stanley 的 830 億都高，三家分析師的預估分歧已經拉到 22 個百分點。TSMC Q3 法說也承認 2nm ramp 會帶來 2% 的 margin dilution，就是毛利被量產爬坡期的低良率、高折舊、設備攤提集中壓抑 2 個百分點。這個訊號對做蘋概股分析師訂閱 SaaS 的開發者有直接意義：市場 consensus 還沒定，正是對照 dashboard 類產品賣點清楚的時機。

所以重點是，10 月 24 號這一天，三個訊號是連動的：Anthropic IPO 走到最後 24 小時的 S-1 deadline，決定接下來半年 AI 模型定價的下限；Claude Agent SDK 0.3.302 跟 Vercel AI SDK 7 兩強對打，決定 TS Agent 底層選型的技術分水嶺；國發基金 100 億第一年的 10 案揭露，決定台灣政策面對一人 SaaS 的可申請額度上限還留了多少空間。這三件事放一起看，給獨立開發者的訊號是：接下來這兩週，與其繼續等觀望，不如把 Claude Agent SDK 0.3.302 的 nested subagents 最小 PoC 做出來，把國發基金申請的 ROI 試算寫出來，然後把 Anthropic IPO 真的拍板之後的定價調整，當作重新校正自己 pricing 的觸發點。這才是 10 月 24 號這一天，一個獨立開發者可以在實務上落地的三件事。
