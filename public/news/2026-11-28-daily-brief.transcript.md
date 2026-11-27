今天想聊 Anthropic 這檔新股 ANT 第一週的收尾，還有緊接著要發生的一連串時間節點。

這週五也就是 11/27，美股因為 Black Friday 半日提早在台北時間清晨兩點收盤。ANT 這天從 $84.53 開高，盤中最高觸到 $92.88，最後收在 $85.56，比起前一個交易日週三的 $82.79 小漲 3.3%。這個反彈不大，但象徵意義不小，代表股價重新站回 $83 的 IPO 掛牌價。回顧整個第一週，掛牌首日 11/19 開在 $111.50，週二甚至摸到 $73.86 的低點，週三收 $82.79，週五再彈回 $85.56；首日買進的人浮虧從一度擴大到 -34% 收斂回 -23%，等於這一週後段回來了 11 個百分點。

不過真正值得盯著的，是接下來這條時間線。第一個重點，是 12/15 這天。那是 ANT 第一波 IPO 鎖股到期日，一次釋出 303M 股，其中 174M 是 Class A，129M 是 Class N。而 303M 只是序幕，後面還有三段 staggered schedule：1/5 再 303M、1/19 再 353M、2/2 再 353M。整個算下來，兩個多月內總共有 1,312M 股的 insider 可售供給會陸續進到市場。再加上空單這段時間已經累積到大概 55M 股，很明顯空方在押「12 月中 insider 會集中拋」。

然後更有意思的是，12/15 的前一天 12/14，ANT 會被納入 Russell 1000 這檔指數，一週後 12/21 再納 Nasdaq 100。這兩檔指數帶來的被動買盤估計合計有 80 億到 200 億美金的量。簡單說，12/14 是 passive fund 強制買進日，12/15 是 insider 第一次可以合法賣出日。這兩天會形成一個 T+1 的對陣：一邊是被動資金 compulsory 進，一邊是長期持股股東首次可以 free up 出，到底誰的量體大、誰吸收誰，直接決定 ANT 第一個月的走勢基調，也會決定 Wedbush $120、Canaccord $135、Oppenheimer $150 三家券商的 target range 守不守得住。

再來聊台北這邊這個週末真正要動手處理的主線，就是 OpenAI Agent Builder 的 EOL。美西時間 11/30 週一下架，所以現在是 T-2。問題是接下來週六週日美股休市、公司行政也放假，美國本地只剩 11/30 當天一個完整工作日可以搬家。台北因為時差，週末 24/7 不中斷，正好是美國客戶最後 48 小時的緊急外包窗口。

搬家路徑這邊，官方唯一指引是走 ChatKit advanced integration，加上 Agents SDK export scaffold，但這個 scaffold 不會自動轉換 workflow graph，也不保證每個行為都原封轉移，等於是 scaffold 出來還是要人去補一輪。另外一條路是 Microsoft 的 Foundry Agent Service，它 11/17 剛 GA，可以搭配 Entra Agent ID 做企業級的 agent 身份管理，對本來就在 Azure 生態的客戶會比較順。

這個檔期值得多想一步，因為 11/30 這天不只 Agent Builder 下架，reusable prompt objects、Evals dashboard 跟 API 也會一起下線。所以客戶不只 agent workflow 要搬，Evals 的 regression testing 也得同步找替代，像 Braintrust、Langfuse、Humanloop 這類外部服務。還有一個細節，ChatKit 前端本身會保留，但 hosted "Recommended integration" 這條路徑會跟 Agent Builder 一起下架，所以嵌入 ChatKit 的網站如果今天還跑在 hosted，這 48 小時一定要改走 advanced integration 自建後端，否則週一就斷。

另外順帶記一下其他幾個日期。立法院中小微企業轉型條例已經連續 12 天沒有媒體進展，2027Q1 當申請起點的情境已經固化到第 8 天。金管會虛擬資產服務法 9 項子法的 40 日公告期走到第 26 天，書面意見實質撰稿週本週六收尾，12/13 截止前還有兩週多。TSMC 11 月營收 12/10 公告，Q4 中值隱含 11 月到 12 月月均要做到 US$17.7B。GPT-6.2 Astra 跟 Sol 上線第 11 天，OpenAI 對 Theo Browne 公開信在 Thanksgiving 加 Black Friday 雙假期間沒有任何回應，下個觀察窗要等 12/1 Cyber Monday。

重點是，ANT 第一週以 Black Friday 半日 rebound 收尾，但 12/15 Lock-up 303M 加上後面三段 staggered 共 1,312M 股的供給拋壓，才是接下來真正的 anchor；12/14 Russell 1000 passive 進 vs 12/15 insider 出的 T+1 對陣，會是整個 12 月最關鍵的兩天。短期內台北這邊真正要動手的，是 Agent Builder EOL 的最後 48 小時，不管是自己用還是幫美國客戶搬，這個週末不做，下週一就來不及了。
