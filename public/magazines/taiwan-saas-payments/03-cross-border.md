---
title: 跨境收美金：Stripe、Paddle、LemonSqueezy 與 MoR 之爭
order: 3
date: 2026-04-21
summary: Stripe 仍要台灣開發者設美國公司；Paddle / LemonSqueezy 用 Merchant of Record 扛稅務；LemonSqueezy 2026 年初宣布轉型帶來的遷移風險值得納入決策。
---

# 跨境收美金：Stripe、Paddle、LemonSqueezy 與 MoR 之爭

跨境 SaaS 的金流選擇，本質上不是在挑「哪一家便宜」，而是在決定**你要不要自己扛全球稅務**。這一題有兩條互斥的路：走 PSP（Payment Service Provider，如 Stripe）自己處理合規，或走 MoR（Merchant of Record，如 Paddle、LemonSqueezy）把責任外包。台灣開發者在第一步就會撞到一堵牆——**Stripe 到 2026-04 仍不收台灣在地商家**——讓這個選擇比美國、新加坡團隊更尖銳。

## TL;DR

- **Stripe 在 2026 年仍只支援 46 個國家的在地商家，台灣不在內**。台灣團隊想用 Stripe，務實路徑是透過 Stripe Atlas 註冊美國 Delaware LLC / C-Corp（約 USD 500 + 每年 USD 100 註冊代理費），外加 EIN 與美國銀行帳戶
- **MoR（Paddle、LemonSqueezy）貴但省事**：官方牌價都是 5% + $0.50／筆，換來的是全球 VAT / GST / sales tax 的計算、代收、代繳，以及退款與 chargeback 由他們承擔法律責任。Stripe 單純 PSP 約 2.9% + $0.30，但稅務合規是自己的事
- **LemonSqueezy 已在 2026-01-28 公告將逐步整併進 Stripe Managed Payments**（Stripe 自家的 MoR 產品，費率 3.5% 加在標準費率上）。官方未公布硬關機日期，但已承認支援回應變慢、新功能減少，遷移路徑列為優先——新專案上 LemonSqueezy 之前要想清楚

## 為什麼 Stripe 對台灣開發者卡關

截至 2026-04，Stripe 的官方 global 頁面列出 46 個支援在地商家的國家，**沒有台灣**。這不是「審核比較嚴」的程度問題，而是**用台灣公司登記、台灣負責人、台灣銀行帳戶根本不能註冊**。唯一一個和台灣相關的正向動作，是 Stripe Tax 在 2025-10-29 納入了 Taiwan Simplified registration——但那是給**其他國家賣家**賣數位商品到台灣時計算台灣 5% 稅務用的，不是開放台灣商家使用 Stripe。

台灣團隊的務實解法幾乎統一是走 **Stripe Atlas**：在 Delaware 註冊 C-Corp 或 LLC，掛美國地址的註冊代理、申請 EIN、開美國銀行戶（Mercury、Brex 是常見選擇）、再拿這套文件註冊 Stripe。Atlas 本身一次性 USD 500，之後每年 USD 100 維持註冊代理，外加會計與美國稅務申報成本——單純財務結構一年加上去很容易多花 USD 1,500–3,000，還沒算你自己處理 form 5472、1120-F 等文件的時間。

這不是不能做，而是**對個人開發者與小團隊的隱形門檻**。你要有足夠穩定的跨境訂單，才值得撐起這套結構。沒到那個量級，MoR 是更合理的起點。

## MoR 是什麼、扛掉什麼代價

PSP 和 MoR 最常被混為一談，但稅務責任歸屬完全不同：

- **PSP（Stripe、PayPal 的 Payments 產品線）**：你是 seller of record。你和客戶之間有直接合約，收到錢是你的收入，**全球各地的 VAT / GST / 銷售稅由你自己註冊、申報、繳納**。Stripe Tax 能幫你算、甚至幫你判斷要在哪裡註冊，但不會代替你登記，更不會代繳
- **MoR（Paddle、LemonSqueezy、FastSpring、Paddle 式 reseller 模型）**：MoR 才是 seller of record。你和 MoR 之間是批發關係，MoR 和終端客戶之間是零售關係。**發票上寫的是 MoR，不是你**。VAT / GST 由 MoR 計算、代收、代繳，退款與 chargeback 的法律風險也在 MoR 身上

這個差異在實務上會放大成三件事：

1. **稅務**：歐盟 VAT OSS 自 2015 把數位商品納管後，稅務門檻就是「第一筆」——沒有最低額度。你在 Stripe 上賣給德國人第一塊錢，理論上就要處理德國 VAT。MoR 直接把這條線吃掉
2. **退款**：MoR 上的退款是和 MoR 的客服交涉；Stripe 上的退款是和你自己的客服交涉。前者節省客服負擔，後者保留品牌控制權
3. **Chargeback**：Stripe 上 chargeback 是你的錢扣回去，還要交 USD 15 手續費；Paddle 的 MoR 模型把 chargeback 法律責任吃下，LemonSqueezy 則偏向要用戶自行處理爭議

代價也很具體：MoR 牌價 5% + $0.50，實務上若你主要賣歐元但結算成美元，再加 2–3% 的匯差，**實效費率容易落在 6–8%**，比 Stripe 的 2.9% + $0.30 高出一大截。

## Paddle vs LemonSqueezy vs Stripe Managed Payments

三家 MoR 現況（截至 2026-04）：

| 項目 | Stripe（PSP） | Paddle | LemonSqueezy | Stripe Managed Payments |
| --- | --- | --- | --- | --- |
| 性質 | PSP | MoR | MoR | MoR（建構中） |
| 牌價 | 2.9% + $0.30 | 5% + $0.50 | 5% + $0.50 | 標準費率 + 3.5% |
| 全球稅務代繳 | 否（Stripe Tax 只算不繳） | 是 | 是 | 是（80+ 國家） |
| 台灣商家可註冊 | 否 | 是（受出口限制商品審核） | 是 | 否（Stripe 體系） |
| Chargeback 責任 | 商家自付 | MoR 承擔 | 大多落在商家 | MoR 承擔 |
| Payout 週期 | T+2/7 | 15–30 天滾動 | 週結 | 未公開細節 |

**Paddle** 是三家裡 MoR 機制最成熟的，chargeback 處理、重試失敗卡號、retention 工具都比 LemonSqueezy 深。代價是 payout 要等 15–30 天，早期現金流吃緊的專案要注意。

**LemonSqueezy** 原本主打 indie 友善、介面乾淨、上手快。但它 2024-07 被 Stripe 收購後，產品路線逐漸與 Stripe Managed Payments 合流。**2026-01-28 LemonSqueezy 官方部落格正式公告**：未來會讓用戶能直接註冊 Stripe Managed Payments（不需 invite），團隊坦承過去一年「讓社群蒙在鼓裡」、支援變慢、產品更新變少，而**遷移路徑列為優先**。目前沒有硬關機日期，但趨勢是清楚的：LemonSqueezy 作為獨立產品的未來不會太長。

**Stripe Managed Payments（SMP）** 是 Stripe 自 2025-04 推出的 MoR 產品，2026 年初開始轉為公開註冊。費率結構是「標準 Stripe 費率再疊 3.5%」（大致落在 6.4–7.9% 區間，依付款方式），處理 80+ 國家稅務、爭議防禦、詐欺偵測。但它掛在 Stripe 體系下，**台灣商家要用仍得先有美國公司**——MoR 解決的是稅，不是商家註冊資格。

## 決策建議

用一個三問快速收斂：

1. **年營收有機會 > USD 100k、且客群 > 80% 在海外**：設美國公司 + Stripe PSP。一年多花的結構成本會被省下的 3–5% 交易費率追回，且保留最大的產品與合規主控權
2. **剛起步、月流水 < USD 5k、想先驗證市場**：上 LemonSqueezy 最快；但今天起新專案請**假設 12–18 個月內會被推往 Stripe Managed Payments**，金流模組寫得抽象一點，別把 webhook 與訂閱邏輯綁死 LemonSqueezy 專屬欄位
3. **產品已有穩定訂閱收入、客群橫跨歐美多國、怕稅**：Paddle。牌價和 LemonSqueezy 一樣，但 chargeback 與 retention 工具更成熟，且不在遷移不確定性裡

不要做的選擇：

- 拿台灣個人身份硬註冊 Stripe（用 HK 戶頭或其他國家資料）——帳戶在成長時被凍結的案例太多
- 為了省那 2–3% 費率差，在月流水還沒破 USD 20k 時就急著設美國公司
- 今天（2026-04）才把新產品從零蓋在 LemonSqueezy 上，卻沒讀過他們 1 月的公告

金流是**你和未來自己的合約**。選錯費率一年差幾萬，選錯結構可能差掉一整個產品週期。

---

## 來源

- [Lemon Squeezy — 2026 Update: Lemon Squeezy + Stripe Managed Payments（2026-01-28 官方公告）](https://www.lemonsqueezy.com/blog/2026-update)
- [Stripe Documentation — Managed Payments（產品頁與定價說明）](https://docs.stripe.com/payments/managed-payments)
- [Stripe Documentation — Stripe Tax: Taiwan remote seller support（2025-10-29 changelog）](https://docs.stripe.com/changelog/clover/2025-10-29/stripe-tax-taiwan-remote-support)
- [Paddle — Pricing（5% + $0.50，all-inclusive MoR）](https://www.paddle.com/pricing)
- [Paddle — What is a Merchant of Record（MoR vs PSP 稅務責任差異說明）](https://www.paddle.com/blog/what-is-merchant-of-record)
- [Jarvis Lin — 如何在台灣申請 Stripe 帳號（台灣開發者申請實務紀錄）](https://jarvislin.com/how-to-apply-for-a-stripe-account-in-taiwan/)
