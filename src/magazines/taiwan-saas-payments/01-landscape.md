---
title: 金流選型的座標軸：你在賣給誰？
order: 1
date: 2026-04-21
summary: 把台灣 SaaS / app 金流用「客群 × 付款型態」切成四象限，讓後續四篇各守一角；讀者讀完知道自己該看哪篇。
---

# 金流選型的座標軸：你在賣給誰？

台灣開發者問「哪個金流最好」的時候，答案幾乎永遠是「看情況」。但「看情況」本身不是答案——這篇要做的，是把「情況」拆成一張可以指得出來的地圖。

## TL;DR

- 金流選型的第一刀不是「費率多少」，而是**客群在哪裡 × 收一次還是收很多次**。這兩個問題答對，剩下的選擇收斂到三、四個候選
- 截至 2026-04，**Stripe 仍不開放台灣在地商家註冊**；跨境 SaaS 的真實選擇是「設美國公司用 Stripe」或「用 Paddle / LemonSqueezy 這類 MoR 把稅務外包」。LemonSqueezy 已在 2026 年初公告轉向 Stripe Managed Payments，是選型時要納入的變數
- App 內購仍是**封閉市場**。2025-12 美國第九巡迴上訴法院修改 Epic 案禁令後，Apple 被允許對外部連結收「合理佣金」；Google Play User Choice Billing 的 4% 減免名單**至今沒有台灣**。台灣 app 開發者的實際處境，和 2024 年幾乎沒變

## 為什麼不從費率表開始選

打開任何一張「台灣金流比較表」，你會看到一排在 2.75% 到 2.9% 之間微幅跳動的數字。綠界標示 2.75%（未稅，實際約 2.8875%）、藍新 2.8%、TapPay 跟銀行直談。這些差距在小商家身上一年可能差不到幾萬塊，但**選錯客群定位**，一年可以差掉一整條產品線。

舉例：一個做給歐美設計師的 SaaS 工具，接綠界幾乎不能用——對方連信用卡的 3D 驗證流程看到中文就會跳出。一個做給台灣中小企業的雲端發票系統，接 Stripe（透過美國公司）也不能用——客戶打統編、要求開立合規電子發票，你繞不過在地金流商的整合。

> 金流是產品決策，不是財務決策。先決定你要服務誰，再回頭看費率。

## 四象限：客群 × 付款型態

把兩個軸拉出來：

- **橫軸（客群）**：台灣本地 ↔ 跨境 / 海外
- **縱軸（付款型態）**：一次性 ↔ 訂閱 / 定期定額

四個象限，對應四種截然不同的金流生態。

### 第一象限：台灣 × 一次性購買

典型場景：電商、課程、捐款、一次性工具。

這是競爭最激烈、也最不需要糾結的象限。綠界、藍新、PAYUNi、TapPay 四強的功能集重疊度極高，**信用卡費率落在 2.8% 附近**（截至 2025 年公開資料），差異主要在 ATM / 超商代收的零頭、撥款天數、電子發票整合深度，以及 API 文件的好讀程度。選錯不會死，但會讓工程師每天想辭職。這一塊第 2 篇會細談。

### 第二象限：台灣 × 訂閱 / 定期定額

典型場景：訂閱制 SaaS 工具、串流、月費會員、SaaS B2B。

關鍵字是**定期定額扣款**與**卡號更新（Account Updater）**。信用卡三年就過期，每過期一張卡流失一個續訂用戶；如果你的金流商不支援卡號自動更新，你的 churn rate 會有一大塊是技術性流失、不是產品不好。

台灣消費者的訂閱心態也是個變數——GO SURVEY 2022 年調查指出 82% 台灣消費者有付費訂閱經驗，但這個數字涵蓋 Netflix、YouTube Premium 這類國際服務；**願意訂閱在地 SaaS 的比例顯著更低**（一手數據不足，但從多家在地 SaaS 公開的年續訂率推估，續訂意願明顯低於北美市場）。這個象限的真正戰場是「讓人不想取消」，金流只是前提。

### 第三象限：跨境 × 一次性或訂閱（SaaS 主戰場）

典型場景：賣給歐美客戶的 SaaS、開發者工具、Indie Hacker 產品。

這一格是路徑分歧最大的象限：

- **Stripe 路線**：功能最強、DX 最好、生態最完整，但**台灣在地公司不能註冊**（截至 2026-04，Stripe Tax 在 2025-10-29 起支援台灣遠端賣家收稅，但商家帳戶註冊仍限制海外法人）。實務上需要設立美國 / 英國公司，多一層會計、稅務與銀行開戶成本
- **MoR 路線**：Paddle（5% + $0.50）、LemonSqueezy 幫你扛銷售稅、VAT、發票與退款爭議，換取較高抽成。適合不想處理 40 州銷售稅 + 歐盟 VAT 的獨立開發者
- **新變數**：Stripe 在 2024 年收購 LemonSqueezy，2026-01 Lemon Squeezy 官方公告將開放 Stripe Managed Payments 的公眾註冊、並把遷移列為優先事項。目前未公告「硬性關站日期」，但新建置建議把遷移成本納入決策

這塊是第 3 篇的主場。

### 第四象限：App 內購（跨越前三格）

不管你客群在哪、收一次還是收很多次——只要你的產品是 iOS / Android app 且賣數位商品，你幾乎被強制走 Apple IAP 或 Google Play Billing：**Apple 30%（小型開發者 15%）、Google 15–30%**。

2025 年有兩個重要時刻：

- **Apple**：2025-04-30 美國地院在 Epic 案中裁定 Apple「故意」違反先前禁令，暫時開放外部付款連結、零抽成；2025-12-11 美國第九巡迴上訴法院部分翻案，允許 Apple 對外部連結收取「合理佣金」，具體金額交由地院重新認定。歐盟 DMA 另立一套 CTC 5% 的規則
- **Google**：User Choice Billing 在歐盟、英、美、日、韓、印、澳、巴、印尼、南非部署，選擇第三方金流可減 4%。**台灣不在任何一個名單上**

換言之：台灣 app 開發者實際拿到的變化，**趨近於零**。第 4 篇會逐條盤點。

## 這期雜誌怎麼對應這張圖

- 第 1 篇（本篇）：定位自己在哪一格
- 第 2 篇：第一、二象限——在地金流四強比拚
- 第 3 篇：第三象限——跨境收美金與 MoR 之爭
- 第 4 篇：第四象限——App Store / Google Play 2025 全盤點
- 第 5 篇：跨象限共通——台灣電子支付執照門檻、第三方支付邊界（澄清「串綠界要不要自己申請電支」這類常見誤解）

## 不在這張地圖上的情況

這張地圖**刻意沒畫**以下幾塊，因為它們對多數 SaaS / app 產品不成立：

- **純加密貨幣收款**：台灣法規對 VASP 要求持續在收緊，走 Crypto PSP 請另尋專門指南
- **B2B 發票制、不走信用卡**：走銀行匯款 + 人工對帳的傳統企業客戶，金流商只是其中一個選項而非主角
- **超大規模、年交易額破十億**：你已經有自己的法遵團隊，不需要這份指南

剩下 90% 的台灣 SaaS 與 app 開發者，落點應該會很清楚地在前四象限其中一格。把自己放進去，再翻對應那一篇。

---

### 來源

1. [Adds support for remote sellers in Taiwan to Stripe Tax](https://docs.stripe.com/changelog/clover/2025-10-29/stripe-tax-taiwan-remote-support) — Stripe Docs，2025-10-29
2. [Apple Wins Ability to Charge Fees on External Payment Links as Appeals Court Modifies Epic Injunction](https://www.macrumors.com/2025/12/11/apple-app-store-fees-external-payment-links/) — MacRumors，2025-12-11
3. [2026 Update: Lemon Squeezy + Stripe Managed Payments](https://www.lemonsqueezy.com/blog/2026-update) — Lemon Squeezy Blog，2026-01
4. [Understanding user choice billing on Google Play](https://support.google.com/googleplay/android-developer/answer/13821247) — Google Play Console Help
5. [2025 金流費率與優惠比較：LINE Pay、綠界、藍新、統一](https://ke2b.com/zh-hant/charge-rates-payment-gateways-comparison-taiwan/) — ke2b，2025
6. [台灣電子支付用戶突破 3,220 萬 iPASS 一卡通奪冠、街口居次](https://news.pts.org.tw/article/760475) — 公視新聞，2025
