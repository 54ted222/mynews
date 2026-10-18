今天想聊 2026 年 10 月 19 日這份週一的創業情報。整份內容有九條主軸同時進入關鍵倒數，所以我會用口語一條一條走，讓你在通勤、走路也能跟得上重點。

先講最急的 iPhone Duo。它預計 10 月 23 日由中華電信全台 500 家門市在早上八點開賣，從今天算起還剩四天。中華電 9 月 10 日之後就不再開放第二波預購，台灣大 myfone 跟遠傳雖然也收了網路預購，但實體門市幾點開賣，到今天還沒看到官方口徑，所以消費者很有可能把中華電誤認為唯一通路。供應端這邊也不樂觀。鴻海九月中旬透露良率只有六成，Samsung Display 做內摺 OLED 面板跟鉸鏈的良率也壓不上去，業界預估 2026 全球備貨會落在六百萬到八百萬台之間，比原先一千萬的規劃少了兩到四成。另一個痛點是內螢幕維修費高達新台幣三萬七千元，差不多等於機身價的一半。所以如果你想做 iPhone Duo 開賣當天的 push 服務，今天就要把三件事收尾：Live push 架構 freeze、中華電 500 門市地圖綁 Google Maps API、以及內螢幕維修 FAQ 和 eSIM 排隊秒數指南。

再來是 Claude Haiku 5.5。它上線第十二天，第二週的 shadow eval 收尾完成，今天正式進入 production ramp 第一天。它的甜蜜點很清楚：短 context、一百 K 以內的分類、摘要、轉譯 subagent，而且 effort 開到 max 的時候，GDPval 分數可以多三百四十三個百分點。禁區也很明確，agentic coding、Terminal 操作、超過一百 K 的 context 全部不要碰。簡單說，今天就是把兩條分類 subagent 從 Opus 4.7 切到 Haiku 5.5，然後盯三個指標：GDPval 成本降幅、過度拒答率、以及 latency 分佈。

OpenAI 這邊也很熱鬧。Agent Builder、Evals 跟 reusable prompts 這三個產品都排定 11 月 30 日下線，剩四十二天；中間 10 月 31 日 Evals 會先變成 read-only，剩十二天。官方的 code export，他們自己講明是 starting point only，不保證 workflow graph 轉換、不保證行為一比一，multi-agent 分支跟 handoffs 都要人工重驗。對台灣中小企跟 SI 顧問，這就是個清楚的接案窗口：今天把遷移 checklist 的 blog 公開發佈、landing page 第一稿定稿、開放每月兩到四個 slot。

接著是 Supabase。他們 10 月 2 日宣布拿到一億五千萬美元的 growth 輪，由新加坡主權基金 GIC 領投，CapitalG、IronArc、SquarePeg 跟投，同一天還宣布收購 Turso。Turso 的兩位創辦人 Glauber Costa 跟 Pekka Enberg 都進了 Supabase，Glauber 擔任 Head of Agentic Services。他們官方的說法是，每週有超過一百萬個新 database 被開出來，而且 agent 自動生出來的軟體會把需求推到超過現在容量。對一人 SaaS 來說，原本「大 project 用 Supabase、小 per-tenant 用 Turso」的混搭堆疊方案現在進入觀察期。所以今天就該把 Supabase pricing、Turso 路線圖、以及 Neon 跟 Convex 這些備案一起拉出來審計。

然後 Google。DeepMind 的 COO Koray Kavukcuoglu 9 月 25 日跟 Computerworld 說，Gemini 4 已經進入 early post-training 階段，而且會比年底 much earlier 出現。中間延遲的 Gemini 3.5 Pro 到現在還沒影，再加上 10 月 31 日 OpenAI Evals read-only、11 月 30 日 Agent Builder 下線，Q4 底「三大模型供應商重新洗牌」已經是高機率事件。所以今天該做的事情是，先把 Gemini API key 要好、把 model router 架構寫起來，避免 11 月之後被迫重寫。

Anthropic 的 IPO 進度這邊也要盯。路演預期落在 11 月 9 日，剩二十一天，但 EDGAR 到今天還沒看到公開 S-1。因為公開 S-1 要在路演前至少十五個工作天出現，所以如果 10 月 25 日還沒看到檔案，就會變成空頭論點的第三個支點。

最後兩塊是台灣在地。第四屆台灣新創投資年會 10 月 14、15 日剛結束，主軸是「擁抱變革」，白皮書把「鼓勵大企業投資新創 + 研發抵減 + 研發成果資本化」列為最急迫三議題。對一人或兩三人團隊來說，「for enterprise」的 vertical SaaS，從 2026 Q4 到 2027，可能是個從 bootstrap 走向 equity 的新窗口。數發部那邊，百億 AI 新創基金核定了五家、六案，累計注資七千五百萬，相對十年百億目標嚴重落後，但 2026 要新添一百片 GPU 擴充算力池這個訊號值得抓；經濟部的產業競爭力輔導團到 2026 年三月底，累計已經輔導過兩千零五十八家 AI 導入，中小企業佔九成一。

重點是：這週 iPhone Duo 開賣是第一條時間線，Haiku 5.5 的 production ramp 跟 Agent Builder 的遷移接案 crunch 是第二條，Supabase 加 Turso 跟 Gemini 4 預期落地則是第三條堆疊重排的訊號。所以今天如果只能挑三件事，就是「iPhone Duo push 架構 freeze」、「Haiku 5.5 兩條 subagent 切 production」、以及「Agent Builder 遷移 landing page 公開」。其他的 blog 跟顧問服務則排在這週後半，把流量跟 pipeline 準備好。
