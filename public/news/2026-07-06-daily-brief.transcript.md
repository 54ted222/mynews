今天想聊 2026 年 7 月 6 號這個週日，一天之內有三個大 signal 疊在一起結束，對做獨立開發的朋友來說，是不能錯過的 audit 窗口。

先講第一件事——OpenAI Workspace Agents 的免費期今天正式結束了。這個東西是 OpenAI 五月中推出的企業級 AI 代理平台，定位是 custom GPTs 的後繼者，底層由 Codex 驅動、可以直接接 Slack、Salesforce 這些工作流。原本免費預覽從五月初拉到今天，現在轉成 credit-based 收費。特別的是，每次 agent run 沒有固定 credit 費用，實際扣多少要看 input token、cached token、output token 混合，還有任務複雜度跟輸出長度。也就是說，客戶如果用得凶，credit 燒率是很難預測的。

還有一個細節值得注意——如果 agent 是從 ChatGPT 內部觸發的，7 月 6 號起就開始算 credit；可是像 Slack channel 這種從 ChatGPT 外部呼叫的，還在 free preview，沒公告結束日。這個差異對做 audit 的 indie 來說，正好是切入客戶的一個 hook。三個 immediate takeaway 是這樣——第一，如果你能寫中文或日文，24 小時內先卡位第一波「免費結束、credit 燒率預測範本」的 case study，現在供給幾乎是零；第二，賣 ChatGPT Business 或 Enterprise 客戶的顧問，立刻加開一條「credit 燒率預測加每 team 每月 spend cap」，一次收一千到三千美金；第三，如果你之前幫客戶做過 custom GPTs，現在就是遷移 audit 的黃金週，順便做三大 workflow，Slack、Salesforce、Codex 的成本對照。

再來聊 Anthropic 這邊，一週雙事件。7 月 8 號 KYC 生效，倒數兩天，然後 7 月 7 號 Fable 5 從 plan 內建改成 usage credits，倒數一天。KYC 的部分，Anthropic 官方最新定調是「只針對少數被 flagged 的帳號」，還有「有申訴管道、不是全面監控」。範圍限定在 Claude Free、Pro、Max 三個消費 tier，Team、Enterprise 跟 Platform 依照 Commercial Terms 豁免。生物特徵資料由第三方 Persona 保管，不過因為 Persona 二月才有 Discord 資料外流事件、加上跟 Anthropic 有交叉投資關係，隱私爭議還在延燒。另外中國國家身分證不被接受，所以中國沒護照的用戶會被鎖，這對做 CN、SEA、MENA 用戶 SaaS 的 indie 是重點。

Fable 5 這邊，7 月 7 號之後改成 usage credits，API 費率是每百萬 input token 十美金、output 五十美金。這個價格是 Opus 4.8 的兩倍、Sonnet 5 的五倍，是 Anthropic 目前定價最貴的模型。重度使用者現在 50% 週限已經打完，有效免費窗剩不到 24 小時。對 indie 來說，這 48 小時的收尾窗要幹兩件事——一個是幫客戶做 Claude 消費 tier flow audit、順便給 Team 或 Enterprise 的升級決策樹；另一個是趕在 credits 制切換前，跑完 Fable 5 對 Sonnet 5、對 Opus 4.8、對開源的 Kimi 跟 GLM 這四軌的 benchmark。之後可以考慮把工作負載往 Sonnet 5 移，因為 Sonnet 5 比 Fable 5 便宜五倍，是天然的 fallback。

第三個主題是三個 dev tool 週日同步收尾。再來，Cognition 的 Devin 上面 Kimi K2.7 加 GLM 5.2，這兩個開源 coding model 的 quota-free 促銷昨天結束，今天開始從你的 Devin plan quota 扣。Kimi K2.7 在 FrontierCode Extended 拿 39.5%、GLM 5.2 拿 43.0%，質量已經逼近 GPT-5.5。接著，Cursor iOS 上的 Composer 2.5 mobile run，75% 折扣也是昨天結束，今天回到原價。最後，GitHub 的 actions/checkout v7 backport，強制升級剩 10 天，7 月 16 號到期，laggard 客戶的 deadline 是 7 月 13 號，剩一週。

三個限時 signal 同一週結束，這個現象本身就是個 narrative 點——mid-2026 的 dev tool 促銷疲勞已經變成新常態。對 indie 的 takeaway 是這樣——如果你賣 CI/CD audit，最後一週要把 Cordyceps v7 backport 這條當緊急推播打出去，順便加上 allow-unsafe-pr-checkout 這個 opt-out flag 的建議，這條可以收一千五到五千美金；如果你賣 Devin 或 Cursor 客戶顧問，可以做一個 promo 到期倒數 dashboard、加上三軌撤退預算表，一次收五百到一千五；還有一個先卡位機會是中文日文的 case study，「三個限時 signal 同週結束、promo 決策疲勞 SOP」，現在也是零供給狀態，48 小時內卡進去。

簡單說，今天的重點是——三大 signal 同一天結束，全部指向客戶的 cost 治理。工作方式很清楚：把新的旗標，像 workspace agents credit-based active、KYC 剩幾天、Fable 5 剩幾天，加進 SLO；做倒數 dashboard；寫 24 到 48 小時的中日文短文卡第一波流量。三條 revenue line 都有 30 天以上的窗口熱期，這週日別休息，先把 landing page 跟 SOP 上線，下週開始收單。
