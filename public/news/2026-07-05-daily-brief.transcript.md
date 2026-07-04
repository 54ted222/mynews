今天想聊七月上旬 AI 圈幾條密度很高的訊號，主線是 Cognition 這一週的雙擊、Together AI 那一輪很大的 Series C、還有 Cursor 手機 App 開放給所有付費用戶——這三件事合起來，會改變獨立開發者到年底怎麼做業務。中間再穿插兩個倒數，一個是 Anthropic 的 KYC 剩三天、一個是 Fable 5 quota 制切換剩兩天，這 48 小時內要幫客戶收尾。

先講 Cognition。他們 6/29 端出 Devin Fusion、7/1 又端出 Devin Security Swarm，兩個都是產品層的動作，不是新 model。Fusion 的想法是把多個 model 混著跑，靠一層 orchestration 自己決定哪個任務丟給哪個 model，在他們內部的 FrontierCode benchmark 上，拿到相當於 Fable 5 級的表現、成本卻降了 35%，內測對 Fable 5 甚至能降到 41%。重點不是效能而是這個訊號本身——orchestration 這一層可以獨立商品化了。過去大家覺得 router 就是替客戶省錢的技術中介、附屬在別人的產品裡，現在有一支公開產品告訴你，router 本身就是一門生意，是有獨立商業價值的樣板。

Security Swarm 是同一個思路換個場景。它是資安的 sub-swarm，用一個叫 Agentic MapReduce 的分派方式，把大型 codebase 拆給平行 agent 一起掃，而且不是傳統靜態掃，是在 sandbox 裡真的驗證漏洞能不能利用，能利用的就自動開修補 PR。Cognition 拿了 GitHub Security Advisory Database 裡 50 支漏洞、跨 14 種語言當 benchmark，抓到 36 支、每支平均成本比第二名便宜 30%、還獨家挖到 PHP sandbox bypass 跟 Spring Kafka deserialization 這兩支對手全部漏掉的高危洞。搭配他們官方的六週 Security Program，等於一整套「幫 enterprise 清漏洞積壓」的服務。簡單說，indie 除了「幫客戶寫 code」之外，多了一條「幫客戶做 AI 資安顧問」的路。中型 SaaS 對「先給我一版 baseline scan 再談」的需求鏈很短，單次 sprint 開三千到一萬鎂算合理報價。

再來是 Together AI。他們 7/1 官宣 Series C 拿了 8 億美金、post-money 估值 83 億，16 個月從 33 億跳到 83 億、漲了 2.5 倍。這輪由 Aramco Ventures 領投——就是沙烏地阿拉伯國家石油公司旗下那個創投，附帶 500 MW compute 承諾、未來五年 infra 目標擴張 50 倍。Nvidia、Vista、General Catalyst 都跟投，客戶年化營收已經 11.5 億美金。CEO 直接把公司定位成「AI-native public cloud」對抗 AWS、GCP、Azure。這代表 open-weight model 那條 inference 賽道，現在有中東主權級能源的硬 backing，對 Kimi、DeepSeek、Qwen 這三系不會斷 host 的訊號很強。所以 indie 對 enterprise 客戶做 router audit 的時候，現在可以把「非 OpenAI、非 Anthropic」從單軌，變成 Together、Groq、Fireworks、Cerebras、加上 Copilot 內建 Kimi 五軌並存來賣。

第三是 Cursor iOS beta 開放給所有付費 tier。iOS 26.0 以上就能裝、支援 voice input 跟 slash command，可以直接在手機上 launch 雲端 agent、也可以遠端遙控桌機 agent，agent 跑完之後通知你在手機上 review 跟 merge PR。他們的 Composer 2.5 mobile run 有 75% 折扣、到今天 7/5 是最後一天。這件事的重點不是產品好不好用，而是 30 天內 Cursor、Codex Remote、Devin Desktop 三大 AI IDE 全部 ship 手機遙控，「桌機不必在身邊也能寫 code」正式變成 2026 年中的 default。indie 一人公司從沙發、咖啡廳 launch agent 這個敘事，現在有實際 stack 可對照，做「三軌手機 stack 決策樹」audit 收五百到一千五百鎂算是標準價位。

接著是兩個倒數。第一個是 Anthropic KYC 7/8 生效，剩三天。這幾天有一個新定調很關鍵，官方跟主流媒體都在說這是「appeal route，不是全面監控」——只針對被 flag 的 small subset 帳戶，Team 跟 Enterprise 依 Commercial Terms 是豁免的。這對做中國、東南亞、中東用戶 SaaS 的 indie 很重要，不要跟客戶說「Claude 現在要看人臉了」，要說「只有被 flag 的帳戶會被要求 appeal 驗證」。第二個是 Fable 5 7/7 usage credits 制切換，剩兩天。切完之後每百萬 input token 十鎂、output 五十鎂，是 Opus 4.8 的兩倍、也是 Anthropic 價目最高的。有依賴 Fable 5 的 indie 要在這 48 小時內把 Fable 5、Sonnet 5 促銷價、Opus 4.8 三軌 benchmark 跑完。

重點是，Cognition 雙擊把 orchestration 跟資安兩個新商品線都打開了、Together AI 那 8 億讓 open-weight 那軌有硬 backing、Cursor iOS 讓手機遙控變 default；然後 KYC 剩三天、Fable 5 quota 切換剩兩天，這兩件事是這 48 小時內要幫客戶收尾的窗口。
