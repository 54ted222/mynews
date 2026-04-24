今天想聊四月二十五號的創業情報。如果只想聽一件事，今天的主軸就是 Anthropic 這家公司，在一週之內把自己未來幾年的產品路線、基礎設施路線、還有跟開發者之間的信任關係，一次性地重談了一遍。

先講最大的一筆。四月二十四號 Google 宣布要投資 Anthropic 最多四百億美金，第一筆先丟一百億，估值直接拉到三千五百億美金。除了現金，Google 還承諾五年內交付五 GW 的 Google Cloud 算力給 Anthropic。把這件事往前放，四月二十號 Amazon 才剛追加二百五十億美金投資，其中五十億立刻到位；Anthropic 回頭承諾未來十年要在 AWS 上花一千億美金。所以簡單說，一週之內 Anthropic 把 Google 跟 Amazon 兩邊都綁死，加上原本就有的 Microsoft Azure 路線，等於三家大雲都鎖定了。

對開發者的意義是什麼？短期你會看到 usage limit 放寬、供應變穩；但中期要小心的是，Anthropic 現在對兩邊雲廠商有很重的績效義務，這些義務遲早會變成產品決策的隱性約束。如果你本來期待 Claude 會越用越便宜，可能得往開源或較小的模型走才會真正降本。這點建議直接寫進明年的定價模型。

再來是同一天爆的 Claude Code 事後檢討報告。Anthropic 承認過去兩個月 Claude Code 品質下滑不是大家錯覺。三月四號他們把預設的 reasoning effort 從 high 調到 medium；三月二十六號 cache 清除邏輯有 bug；四月十六號加了一段降低回應冗長度的 system prompt——這三個變更合起來把品質壓下來。現在三條都已經回滾，v2.1.116 修掉 cache bug，而且 Anthropic 給所有 subscriber 重置了這次的 usage limits 當補償。這是第一次有 agent 廠商正式為品質回退認帳。

我覺得可以在這裡停一下，因為這件事的蝴蝶效應很大。以後所有 agent vendor 都會被套上同一把尺——你的 agent 是不是會偷偷變差？有沒有公開 SLA？有沒有事前公告？這也對應到我今天看到的第一個 SaaS 點子，就是專門做 agent 行為差異比對的工具。抓 Claude Code、Codex、Cursor 的 session log，定期跑一組黃金測試集，產出週報跟告警，讓使用者可以證明同一個 prompt 隨時間的品質跟成本到底有沒有飄移。技術複雜度大概三分滿分五分，預估月營收兩千到一萬美金。

接下來是今天另一顆直接打在個人開發者身上的政策。四月二十四號，也就是今天，GitHub Copilot 的 Free、Pro、Pro+ 方案開始預設把你的 prompt、程式碼片段、還有 context 拿去訓練模型。Business 跟 Enterprise 不受影響。如果你還沒關掉，進 GitHub 設定頁的 copilot features 那條路徑，找到 Allow GitHub to use my data for AI model training，把它關掉。這個很緊急，尤其你是幫客戶寫 code 的自由接案工程師或 agency，你的客戶合約裡可能明文禁止資料外流，繼續用 Copilot 個人方案等於違約。

這條新聞對應到第二個點子。現在 GitHub 沒給 agency 或自由工作者一個多帳號、多客戶矩陣的一鍵 opt-out 證明工具。做一個 GitHub OAuth 介接、抓取設定、產生帶時戳的 PDF 證明的服務，目標客群就是軟體顧問、接案工程師、還有幫客戶管 IT 的 MSP，月營收抓一千到五千美金是合理的。

再來是兩筆同一天的資金。Orkes 拿到六千萬美金的 B 輪，做 durable agentic workflow orchestration；Cloudsmith 拿到七千兩百萬美金的 C 輪，做 AI 時代的軟體供應鏈。先講 Orkes。durable execution 簡單說，就是 workflow 引擎會把每一步的輸入輸出寫進外部儲存，就算機器崩潰、流程中斷，下次可以從斷點接著跑，不用從頭重來。這對 LLM agent 特別重要，因為 agent 常常跑很久、中間要等人審核、中間也常常會掛。市場願意為這個能力付 B 輪估值。

Cloudsmith 的故事是另一面——agent 開始大量 commit 程式碼，artifact、密鑰、相依套件的流動頻率暴增，供應鏈工具從合規成本變成營收前置條件。沒有驗證 agent 產出相依來源的中小團隊，風險會被放大。

但 Orkes、Temporal、Inngest 這種 enterprise 方案，對五個人以下的團隊來說太重。所以今天第三個點子，就是做一個 solo 版本的 durable agent runner，用 YAML 定義 workflow，接 GitHub App 介面，讓 Claude Code 或 Codex 產出 workflow 時能直接塞進來。對照 Trigger.dev 的 HITL，也就是 human-in-the-loop 的 UI 還不完整，這裡是切入點。

工具層面另外幾個小更新。Supabase 四月的 developer update 把 Multigres 開源，Vector Buckets 進公開 alpha，還把 Stripe Sync Engine 做成一鍵整合，GitHub 整合也下放到免費方案。如果你在 Neon、Turso、Convex 之間還沒選定，這版很適合拿來觀察 Supabase 會不會夠用。Vercel AI Gateway 上架了 Moonshot 的 Kimi K2.6，定價是每百萬輸入 token 零點八美金、每百萬輸出 token 三點五美金，比主流 frontier 模型便宜很多，適合拿來跑大量非核心的 agent 任務當 fallback。

最後幾件該今天就動手做的事。第一，馬上去關 Copilot 的資料訓練開關，這花五分鐘、直接降合規風險。第二，跑 upgrade 把 Claude Code 升到 v2.1.116，用自己手上現有的黃金任務測一輪，抓出成本跟通過率的對照表，順便把這次被重置的 usage limit 用掉，這種補償不會每次都有。第三，如果你產品裡有 agent pipeline，先列出那種一個 step 掛掉就要整條重跑的任務，挑最痛的那一條試 durable workflow。

重點是：Anthropic 這一週同時在放大供給、坦承品質回退、也重置信任；GitHub 同時把個人開發者的資料變成訓練素材；而資金市場的信號很清楚——接下來會大量流向讓 agent 穩、讓 agent 可審、讓 agent 不出事的那一層。如果你是獨立開發者，今天就先把合規風險關掉，然後把 Claude Code 的補償 limit 用完，再從自己最痛的一條 pipeline 開始規劃 durable 化。這是今天最划算的三件事。
