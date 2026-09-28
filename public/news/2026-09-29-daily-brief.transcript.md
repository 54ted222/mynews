今天想聊 9 月 29 號、週二，也就是中秋教師節 4 天連假的節後首個工作日。這一天最大的看點其實不是台灣本地，而是海的另一邊：Anthropic 昨天 9 月 28 號直接把 Claude Sonnet 5.5 推上線了，而且是刻意搶在 OpenAI 今天 DevDay 開幕前一天出手，這個節奏本身就是訊號。

我們先講 Sonnet 5.5。model ID 叫 claude-sonnet-5-5，定價維持 Sonnet 5 的 $2 一百萬 input token、$10 一百萬 output token，官方測試出力速度快 30% 以上、每個 task 平均便宜 30%。真正讓人眼睛一亮的是 benchmark：GDPval-AA 這種綜合知識工作評測，Sonnet 5.5 拿 1844，只差 Opus 5.5 的 1846 兩點，而它比同族 Sonnet 5 的 1449 高了 400 點；Terminal-Bench 4.0 agentic coding 更誇張，Sonnet 5.5 拿 70.6%，反而超過 Opus 5.5 的 66.4%，Sonnet 5 才 10.3%。翻譯一下就是：花一半的錢，速度更快，agentic 表現還可能比 Opus 更好。這對台灣 indie SaaS 的意思很直接——Q4 router 全線 rebase 已經上半場落地，你手上要是還在跑 Sonnet 5，現在幾乎沒有理由不切；剩下的 Haiku 5.5 官方說「未來幾週」會到，那是 Q4 剩下的唯一一軸。

再來是 OpenAI DevDay 2026，今天 9 月 29 號在舊金山 Fort Mason，早上 10 點太平洋時間 keynote，台北時間大概是 9 月 30 號凌晨 1 點。Sam Altman 親自站台，官方 agenda 到 keynote 前都沒公布，但市場傳聞主軸叫 Managed Agents——一個可以讓開發者部署 AI agent 的統一平台，帶可自訂環境、skills、plugins，而且有 self-host 選項。這個 self-host 選項如果成真，就是對 Anthropic 的正面對嗆。同時 OpenAI 內部 code 也顯示 Agent Builder——這個上線才幾個月的產品——正在準備收掉。這件事其實蠻嚇人：一個平台幾個月就被自家換掉，那所有押寶 Agent Builder 深整合的團隊怎麼辦？所以圈內的共識是 MCP，Model Context Protocol，變成結構性的 hedge，因為它是 open standard、跨平台。所以我對台灣 indie SaaS 的建議是：今天 keynote 之前先不要動 router 選型，明天觀展摘要出來之後再定 Q4 stack。

再來聊 iPhone Duo。台灣預購倒數 T-17，Taiwan Mobile 10 月 16 號晚上 8 點首發、中華電信 10 月 23 號才開賣，起跳價 NT$74,900——這是蘋果史上最高的 iPhone 起跳價。兩個顏色 Starlight White 跟 Midnight Black，儲存 256GB 到 2TB，內螢幕 7.6 吋、外螢幕 5.4 吋，A20 Pro 晶片配 dual battery。麻煩的地方在供應：富士康組裝良率只有 60 到 65%，鉸鏈供應是結構性上限，首批 2026 出貨從原本預估 700 萬支下修到 600 萬支，中華電信個人家庭分公司總經理胡學海還說開賣前約 10 天才會知道實際配貨量，也就是 10 月 13 號 T-3 才明朗。所以台廠光電光學跟鉸鏈供應鏈 Q4 rerating 就變成 Q3 財報前的主戰場。

再來 Meta 這邊，9 月 23、24 號辦的 Meta Connect 2026 發表了 Ray-Ban Meta Gen 3、Ray-Ban Meta Audio、Meta Ray-Ban Display 更新、還有新一代 Meta VR Glasses，但真正的重點是叫 Muse 的個人 AI agent 上到眼鏡上。Ray-Ban Gen 3 帶 12MP 3K 攝影、六麥克風陣列、可自訂動作鈕呼叫 Meta AI、9 小時電池，還多了自行車跟大眾運輸導航、可視 landmarks 步行導航。這代表智慧眼鏡 vertical 從 PrismML 1-bit Bonsai on Snapdragon AR1 那條路線，正面碰到 Meta 這個更接近量產的平台，iPhone Duo T-17 前 wearable AI 就變成多軸新結構性訊號，台灣做 mobile / edge 的獨立開發者這是新的窗口。

Next.js 這邊也不能漏——明天 9 月 30 號、就是 T+1、週三，會排程釋出 16.3.7 跟 15.5.27 兩版本，一次補 9 個安全漏洞，1 個 critical、2 個 high、5 個 medium、1 個 low。事前預告是 Next.js 新的做法，讓團隊有時間先準備升級。所以我建議今天就把升級 checklist 跟 CI/CD 對齊做好，別等明天版本出來才慌。

台灣本地部分，經濟部商業發展署「服務業 AI 升級方案」是今天節後首個工作日很值得追的東西。單店導入補助最高 NT$10 萬，連鎖 20 到 50 家最高 NT$300 萬，3 據點以上集團 AI 軟硬整合最高 NT$2,000 萬，補助上限方案成本的 50%，另外 AI 青年實務訓練班畢業每人 NT$5 萬學習獎勵金。涵蓋零售、餐飲、旅宿、運輸、專業服務 5 大類。這個對台灣 SME AI 顧問業者跟商業服務業 10 萬案 SI 是 Q4 節後 outbound 開跑最精確的錨點。

其他快速掃一下：Cursor Composer 3 Vega T+99，明天破 100，還是沒 confirmed release，2026 剩下唯一的 vaporware 標本；Cognition SWE-2 免費倒數只剩 11 天，10 月 10 號之後 Devin Pro $20 一個月定價回覆；GitHub Copilot 昨天統一了三面 UX，Copilot Chat on github.com、GitHub Mobile、cloud agent 合併為單一 policy，chat data 保留期改成 account 壽命，Grok 4.7 開始 gradual rollout、Opus 5.5 進 model picker；Vercel 這邊推 Fluid Compute、Cursor Cloud Agents 可以在 Vercel Sandbox 執行、AWS PrivateLink 上 Pro / Enterprise、AI Gateway 加了 Claude 單一 API key；Bun 1.4.2 早在 9 月 5 號就釋出、HTTP/2 進 Bun.serve、workspace node_modules 自持；台積電 A16 下半年 2026 量產、A14 2028 量產、Apple A20 Pro 拿了半數 2nm 初期產能。

所以重點是：今天有兩件事必做。第一，Anthropic Sonnet 5.5 昨天落地，Q4 router 全線 rebase 上半場已經開始，該切就切，別再拖；第二，OpenAI DevDay 今天 keynote，Managed Agents 傳聞是 Q4 stack 決策的分水嶺，但 keynote 前先 hold、觀展摘要出來再定，別急著動。台灣本地就是節後首個工作日 LINE OA 分眾執行、商業服務業 AI 補助案 outbound 開跑、還有明天 Next.js 安全更新的升級準備。連假結束，Q4 節奏正式開跑。
