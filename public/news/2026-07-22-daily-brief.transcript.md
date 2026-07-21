今天想聊的是 7 月 22 日這一天，對台灣一人公司來說，其實是三軌高濃度撞在一起的日子。哪三軌？一個是台股 V 反確認，一個是 Notion Ship OS 今晚 21:00 的官方直播 T-0，還有一個是經濟部 115 年 AI 補助只剩兩個半工作日。這三件事都得在 24 小時內做決策，所以想把主線拉一下、告訴你各自該動什麼。

先講台股。昨天 7 月 21 日收盤是 44,232 點，單日大漲 1,783 點，這是史上單日最大漲點紀錄。台積電從前一天的 2,320 一口氣站回 2,410、漲了 3.88%，市值也重返 62.23 兆。聯發科更誇張、直接漲停鎖 3,670；鴻海 246、台達電 1,835、電子權值全面歸隊。三大法人合計買超 164 億，其中投信一天買超 172 億，是短線爆量訊號；外資雖然還在賣、但只賣 43 億、比前幾天縮手。

這個資訊對台灣 indie 有兩個立刻要做的事。第一，如果你有做「AI 供應鏈 real-time signal」的 dashboard SaaS，昨天 brief 講的「本週回站 2,400 = 反彈確認」情境已經在 T+1 達標，「跌破 2,290 = 二次探底」正式失效——你的客戶 SOP 要在今天內加一條「AI 修正終結、反彈確認、外資賣超為短線雜訊」的揭露條款，避免客戶今天早上恐慌殺出。第二，narrative 從「短期回檔 vs 反轉」升級成「V 反已成、下一觀察前高 2,500」，這是明天晨會前的續發窗、也是新的 dashboard 觸發線錨點。

不過要提醒一件事：V 反不等於確認反轉。8 月上旬還會有 5 到 8% 的波動、客戶 SOP 一定要標註這點，不然把單日漲點紀錄當成長多起點是很危險的。

再來是 Ship OS。Notion 今天晚上 21:00 到 22:00 台北時間會做官方 live walkthrough，這是 T-0。定價也在昨天明朗——Business 版是 20 美金一個人一個月、內含 AI Agent、Enterprise Search beta、AI Meeting Notes beta；Enterprise 版是客製、加 SCIM、audit logs、還有零資料保留 ZDR。基礎條件也齊了：Notion 3.6 的 External Agents 是 7/1 上的、iOS Agents app 是 7/8 上的，都已經 GA。

所以簡單說，Ship OS 就是把 customer feedback、issue tracking、PR review、release notes 全部在 Notion workspace 裡跑完一個 cycle，AI Agent 分派 triage 跟 route，人保留 judgment。對已經重度用 Notion 的台灣 5 到 20 人小團隊，這個起手成本大概是每人每月 3,000 台幣。

對 indie 這邊，first-mover 的窗其實非常窄。策略是這樣：今天白天 8 小時做 pre-work、把 Notion 官方 docs 跟 Digg、AlternativeTo 三家報導讀完、準備好 Business vs Enterprise 決策表、還有 Linear 跟 Jira 遷移路徑的 checklist。晚上 21:00 完整看直播。直播結束後的 6 小時、也就是明天 7 月 23 日凌晨 4 點以前，出中文首篇的 SOP 校正文章——寫「Ship OS 對台灣一人公司跟 5 到 20 人小團隊產品開發全 cycle 的 SOP 校正、Linear 跟 Jira 遷移路徑、Business vs Enterprise 決策表」。這樣 48 小時內接 4 到 8 家 audit 客戶的機會是實在的。

第三軌是 AI 補助。經濟部 115 年的 AI 補助 hard-stop 是 7/24 週五下午 4 點 59 分 59 秒。今天週三、含週三下午、週四、週五，實質剩 2.7 個工作日。這個補助的 AI Agent 整合服務 track 上限是 2,000 萬，透過 DIGITAL+ 平台用工商憑證登入，適用行業別是 J582、J62、J63，資本額 1 億以下或員工未滿 200 人。有兩個陷阱要注意：一個是資安費用需要佔 7% 以上、企業資安評級要在簽約前完成；另一個是「絕對不得採購或使用中國大陸廠牌之資通訊產品」——所以如果你 stack 裡有 DeepSeek 或 Qwen，只能走 self-host 到 EU 或台灣 region、加資料落地審計 fallback。

策略也很明確：今天中午前發起 outbound、LINE 跟 Email 都上，主打「週四週五收件優先」；ship 一個「一人公司 → moda 115 年 AI 補助 2 天最後 sprint + AI 戰略特別委員會政策對齊」的代寫加陪跑套裝、定價 3 萬到 8 萬 flat。如果客戶今天中午前還沒啟動，成功率就會大幅下降、只能推「7/24 錯過 → 116 年重申 12 個月 pipeline」為 fallback。順帶提，昨天 7/21 政院也宣布成立國家 AI 戰略特別委員會，這是新的政策對齊 wedge、可以加進補助 narrative。

其他還有兩件要順帶追蹤的。一個是 PayPal 董事會 T+2、正式拒絕 Stripe Advent 530 億美金的收購、董事會目標拉高到每股 70 美元、上漲空間 15.7%，交易條件核心是 Braintree 強制拆分、Venmo 跟 PYUSD 保留；7/28 財報是新的錨點。另一個是 Opus 5 的 leak window 7/20 到 7/21 已經過期、Anthropic 官方沒動、Polymarket 決算日 7/25 是新的 T-3 錨點——你的 model router 治理保持 Opus 4.8 當 default、Fable 5 當 hard-only agentic，Opus 5 先當未定義 fallback。

重點是這樣：7 月 22 日對台灣一人公司來說就是「V 反續發、Ship OS first-mover、AI 補助最後衝刺」三件套。今天下午前分工，晚上直播完 6 小時內出首篇，週四週五清 outbound。這三個窗一起關的機率不高、但一起開的機率就是今天。做完這三件事、就可以把注意力放到 7/24 三 hard-stop 同日撞牆的下週壓測。今天先別分心。
