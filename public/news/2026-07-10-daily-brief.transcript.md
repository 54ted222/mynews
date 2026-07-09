今天想聊三條主線。第一條是 OpenAI 發表的 ChatGPT Work，第二條是台灣公部門這幾天連出兩張大牌，教育部和數位發展部，一次把 AI 這條路清楚攤開來。第三條是 Cursor Automations GA 之後隔天補完的 UX 邊角。最後再收一段一人公司視角的重點。

先從 OpenAI 講起。ChatGPT Work 是他們昨天，也就是七月九號 launch 的新產品，今天，七月十號，四大細節補齊。定位講清楚一點：ChatGPT 從一個聊天視窗，正式升級為一個「作業平台」。什麼意思？就是它現在有一個 agent 的角色，可以自己跨網頁、手機、桌面 app，去操作你原本已經放在 Excel、PowerPoint、Google Docs 或各種 Web app 裡面的資料，把小時級的、複雜的任務跑完。它會自己把大任務拆成子步驟一步一步做，不用你在旁邊一直下 prompt。

再來，桌面版有兩個重點。第一，Codex 直接被塞進 ChatGPT 的桌面 app，原本的 Codex icon 保留但改名成 ChatGPT，桌面 app 打開就同時是 ChatGPT Work 加 ChatGPT Codex，兩邊 plugins 共用。第二，Sites 進入公開 beta。所謂 Sites 就是一鍵把你手上的工作或點子變成一個互動網站或 web app，直接給你一個 URL 對外分享，OpenAI 自己 host。這對做客戶儀表板、內部工具、報表交付的一人公司來說，等於直接省下一層 Vercel 或 Netlify 部署。

Plugins 這條也重要。ChatGPT 現在原生連 Slack、Teams、Google Drive、SharePoint、Email、Calendar、CRM，還有各種 project tracker、內部工具。這句話翻成白話就是：Notion 加 Slack agent 加 Zapier 再加一小段 hosting，這四項原本要靠不同工具湊起來的東西，現在 ChatGPT 一次全包。Pro、Enterprise、Edu 昨天開始就可以用，Plus 跟 Business 幾天內跟上。

API 這邊還有兩個大 update。第一個叫 Programmatic Tool Calling，翻成白話大概是「模型自己寫程式協調工具」。GPT-5.6 會在自己的 memory 裡面寫一小段輕量程式，用來安排一連串 tool call、過濾中間結果，只把有用的東西留下來。對 tool-heavy 的任務來說，token 用量少、來回次數少、你要下的引導也少。而且它跟 ZDR，就是零資料保留，是相容的，換句話說金融、醫療、政府這些不能留資料的行業一樣可以用。第二個叫 Multi-agent beta，允許你在同一個 request 裡面開好幾個 subagent 讓它們平行處理再把結果合在一起，搭配的是新的 Sol Ultra 模型。

對一人公司來說，這幾件事一起發生代表什麼？三個動作：第一，中文跟日文的 ChatGPT Work Day 1 案例研究，現在供給是零，二十四小時內衝一篇上去，就是 first-mover。第二，如果你之前有在賣 OpenAI、Anthropic 或 Cursor 客戶的 audit，馬上開一條「ChatGPT Work vs Cursor Automations vs Claude Managed Agents 三軌對照」，這個 audit 大概開一千到三千美金一次。第三，如果你的交付單位本來就是 web app，Sites public beta 從今天起就可以列進客戶的預設交付平台。

接著講第二條，台灣公部門今天真的很熱鬧。兩個部會同時動作，一線是數位發展部下的數位產業署，宣布二零二六年的 AI 算力平台補助案，即日起開放到十月三十日截止。補助對象是符合資格的 AI 新創跟資訊服務業者，免費算力資源、全程線上申請、申請費用全免。這句話對一人公司開 SaaS 的意義非常直接：你可以拿這個免費算力去跑 Sonnet 5、Fable 5、Sol，或是 Kimi K2.7、TAIDE 12b 的 on-prem POC，直接把每個月的 API 帳單壓下來。

另一線是教育部的 AI 人才方舟計畫。四年一百一十七億元，六個子計畫並行。細節是這樣：數位內容充實計畫一年編十億，數位教學支持與輔導一年編十六億，教育大數據七千萬，新一代 AI 學習系統一億五千萬，科技領域 AI 素養強化六千五百萬，智慧教育師培聯盟六千萬。目前四十一所師培大學已經導入 AI 課程。政次劉國偉還放了一個訊號，說國際經驗建議十三歲以下限制使用生成式 AI 平台，暗示接下來會發展教育型的 AI 系統，也就是走 TAIDE 主權 AI 那條路。

這對 indie 有兩條路。第一，你如果符合「AI 新創」或「資訊服務業者」這個身份，直接申請數產署那個免費算力，順便包裝一個「代寫申請文件加 POC workload 選型」的服務，大概三千到八千台幣一次。第二，教育型 AI 內容、白牌授權、標案這條線，四年一百一十七億的預算擺在那邊，可以直接把六個子計畫 map 成標案入口。要注意的是，十三歲以下平台限制這件事，如果你原本是把消費 tier LLM 賣給國小國中，這條線大概就直接歸零，要提前調整方向。

TAI1 這邊順帶一提，今晚二十三點五十九分截止，倒數不到幾個小時。手上有 pitch deck 跟 demo 的人，今天走 golden hour 最後衝刺，錯過了明天就沒有了。之後接手就是數產署的免費算力，時間軸剛好無縫接上。

第三條主線是 Cursor Automations，昨天 GA、今天補完幾個 UX 邊角。四個重點：第一，Cursor 3.7 是最低版本，然後 cursor.com/agents 這個網頁介面正式可以用了，CLI 支援即將上線。第二，automation 未完成狀態可以存，這個對 MCP auth 特別有用，因為 MCP auth 設定常常中斷，現在可以先離開再回來，不用整個重寫。第三，PR 預設是開啟的，automation 產出的變更 default 就開 PR，不用你再去設定。第四，memory files 可以透過 UI 或 automation 指令刪掉。這一條解決的是一個老痛點，就是 memory 慢慢累積、最後 context 被污染，以前很麻煩，現在有一個乾淨的清理路徑。

對已經在賣 Cursor 客戶 audit 的 indie，這幾條可以馬上打包成一個升級 audit，加上 memory files 治理 SOP、MCP auth 中斷復原 SOP，大概五百到一千五百美金一次。台灣五到二十人的小團隊，今天以後 default 就走 3.7 加以上。

最後一句話收尾。重點是這樣：OpenAI 把 ChatGPT 變成作業平台，台灣兩個部會同時開錢，Cursor 把 automation 邊角磨圓，這三件事都是同一個方向——一人公司做 SaaS 交付，門檻正在被降低。今天最有槓桿的一件事，就是選其中一條，二十四小時內把 landing 或 case study 送出去。因為中文、日文的供給現在是零，first-mover 的窗開著，但只開幾天。就這樣，明天見。
