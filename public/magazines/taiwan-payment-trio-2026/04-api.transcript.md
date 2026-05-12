上一集講申請門檻跟限制，這集換工程師視角。如果你只看官網價目表，三家長得差不多——都做信用卡、ATM、超商代收，費率也都喊 2.x%。但「開發要花多少時間」這條成本線，三家差距是用倍數在算的。這集就是要告訴你，為什麼真實成本不在費率表，而在 GitHub 的 README。

先給結論。綠界的開發者文件完全公開，官方 GitHub 有 PHP、.NET、Python、Node.js、Java、Ruby 各種語言的 SDK，2026 年甚至發了給 Claude Code、Cursor、VS Code 用的 AI Skill toolkit，串接時間最短。藍新的技術手冊要登入會員才能下載，官方沒有上架 GitHub SDK，整個生態靠社群套件撐起來——像是 Laravel 圈的 ycs77 的 newebpay 套件、Node.js 的 depresto 的 mpg-sdk。紅陽更慘，文件入口分散在 doc.esafe.com.tw 跟 sunpay.com.tw/developers，多數細節要透過業務窗口拿 PDF，GitHub 上幾乎只剩一個叫 suntech_rails 的社群 repo，而且只實作了 BuySafe 一個方法。

把這三層階梯放在一個情境下檢驗：新手能不能一小時內跑出第一筆假交易？

綠界的答案是「半小時可以看到回呼」。流程是這樣：申請測試特店，然後從 vendor-stage 後台拷貝 MerchantID、HashKey、HashIV，用範例參數打 AIO 結帳的 V5 端點，連 3D 驗證碼是 1234 文件都直接告訴你。

藍新的答案是「可以做完，但你得會 PDF 跳頁」。要先登入會員，在「商店管理／商店資料設定」拿到 MerchantID 跟金鑰，下載 MPG 串接手冊 PDF，自己用 AES 加 SHA256 把 TradeInfo 跟 TradeSha 拼出來。

紅陽的答案則是「先打電話聯絡業務開測試帳號」。沒有業務窗口，你連測試環境都進不去。

我來解釋一下「Sandbox」這個詞，因為這集會反覆出現。Sandbox 就是測試環境，跟正式環境完全隔離，讓你用假卡號、假交易練手不會真的扣到錢。每家金流的 sandbox 都有獨立的網址、商店代號、金鑰，正式上線前要切換。一個負責任的金流，sandbox 一定是自助申請、隨時可用。

接著聊一下三家的簽章機制——這是金流串接最容易踩雷的地方。三家都用某種雜湊或加密來防止訊息被竄改，但細節讓開發體驗差很多。

綠界的叫 CheckMacValue。流程是先把參數依英文字母 A 到 Z 排序、以 & 串起來，前面加 HashKey、後面加 HashIV，整串做 URL encode 轉小寫，再做 SHA256 雜湊轉大寫。回呼用 form-encoded，特店收到後要回應字串「1 直線 OK」表示已收到，沒回會被持續重送。這種伺服器對伺服器的非同步通知，業界叫做 Webhook。

最容易踩到的雷是 URL Encode 行為不一致——PHP 的 urlencode 跟 .NET 預設行為對波浪號、星號這些字元的編碼不一樣，會導致 hash 算出來跟綠界對不上。綠界文件附了一張 URL Encode 轉換表，照著做才不會掉坑。

藍新的叫 TradeInfo 加 TradeSha。流程多一步：先把交易資料組成 query string，用 Hash Key 跟 Hash IV 做 AES-256-CBC 加密得到 TradeInfo，再把 HashKey、TradeInfo、HashIV 串起來做 SHA256 轉大寫得到 TradeSha。寫起來比綠界多一個加密步驟，但 AES 解出來是 JSON 比較好讀。藍新踩雷集中在加密順序——TradeInfo 一定要先做才能算 TradeSha，HashKey 跟 HashIV 一旦弄反，測試環境也會過，上正式就炸。

紅陽則是表單欄位 POST 到 Etopm.aspx，回呼也要寫 server-side 表單接收，校驗用業務提供的 password 與雜湊欄位。但官方沒有像綠界那樣的「常見錯誤頁面」可以查，踩雷的時候只能寫信問業務。

接著聊一個很多人忽略、但對 SaaS 訂閱業命脈所繫的功能——卡片管理。

訂閱型產品的痛點不在「收第一筆錢」，而在「第十二筆要不要還能扣到」。藍新在這一塊是領先的，它有兩個獨家賣點。第一個叫「過期卡自動更新」——系統自動對接發卡銀行更新卡號，這個服務在國際上叫 Account Updater。Visa 跟 Mastercard 把這項服務提供給特店，當持卡人換卡或卡片到期，發卡行會把新卡號跟效期推播給商家系統，避免訂閱續扣失敗。第二個叫 Security Token，讓特店「不存卡號也能 fast checkout」——你只存一組無意義的 token，扣款時用 token 向金流請求授權，不存真實卡號就能大幅降低 PCI-DSS 法遵壓力。綠界也有定期定額，可以設「每幾天 / 月 / 年扣一次、共扣幾次」，授權成功會 server POST 回特店的 PeriodReturnURL。但綠界沒有公開的過期卡自動更新方案。紅陽則是分散在 swipy 跟 webpay 系列教學頁裡，真正的串接細節要看那份 v4.1.2 的 PDF。

接下來這個部分是 2026 年最大的故事——AI tooling。

ECPay 在自家 GitHub 開了一個叫 ECPay-API-Skill 的 repo，把開發文件包成 AI 助理的 Skill。官方明文支援的 AI 工具包括 Claude Code、VS Code Copilot Chat、Visual Studio 2026 + GitHub Copilot、Copilot CLI、Cursor、ChatGPT GPTs、OpenAI Codex CLI、Google Gemini CLI。Claude Code 的安裝就是一行指令——git clone 那個 repo 到 .claude/skills/ecpay 底下。功能涵蓋需求分析、12 種語言的程式碼生成、CheckMacValue 跟 AES 加密的即時除錯、上線前檢查清單。而且這份官方 Skill 同時涵蓋金流、電子發票、收據、物流——綠界等於是把全公司 API 都搬進 LLM 的 context 裡了。

藍新本家沒有官方 AI Skill。社群另開了一個 paid-tw/skills 的 repo 統一打包多家金流，藍新已經 fully available，綠界在開發中。安裝方式是用 npx 加 paid-tw/skills 加 newebpay 這個 skill 名。對藍新來說，這是社群在補位。紅陽呢，目前沒有任何已知的官方或社群 AI Skill。

來自社群實測的痛點，我整理一下。綠界踩雷集中在 CheckMacValue 跟 URL Encode 一致性，官方 FAQ 那頁「CheckMacValue Error 常見原因」是必讀。藍新踩雷集中在加密順序，Y. L. Chou 在 Medium 寫的那篇示範用 ngrok 在本機接 NotifyUrl 是標準作法——ngrok 是把本機 localhost 暴露成公開網址的工具，能省去部署到正式環境才能測 callback 的麻煩。紅陽踩雷集中在「找不到人問」，因為連 README 都不完整。

所以重點是：想最快上線、想用 AI 幫忙寫，選綠界。要訂閱、需要過期卡自動更新，藍新仍是首選。能議價、可以等業務窗口，選紅陽。文件公開度不是行銷文案，它直接決定你雇一個工程師花一天還是花一週把金流接上。下一集是最後一集，我們把前四集的所有討論收束成六個常見情境的決策建議——個人副業、indie SaaS、中小電商、餐飲實體店、非營利捐款、跨境試水，每一格給出主選、次選跟為什麼。
