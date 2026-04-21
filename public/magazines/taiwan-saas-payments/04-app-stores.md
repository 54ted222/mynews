---
title: App Store 與 Google Play：30% 之後，台灣開發者拿到什麼？
order: 4
date: 2026-04-21
summary: 盤點 2025 年 Epic 訴訟、歐盟 DMA 罰款、Apple CTC 5%、Google User Choice Billing 清單變動；結論是台灣 app 開發者目前幾乎沒拿到任何實質減免。
---

# App Store 與 Google Play：30% 之後，台灣開發者拿到什麼？

## TL;DR

- **2025 從美國法院到歐盟執委會都在拆 Apple / Google 的抽成結構，但成果主要流向美國、歐盟、英國、日本、韓國、印度**——台灣不在任何一份減免名單裡
- **台灣開發者的實際費率沒變**：App Store 仍是 15%（小型企業方案）／30%，Google Play 也還是 15%（訂閱）／30%（一次性與新裝初年）；既沒有 User Choice Billing、也沒有 Apple 的外部連結條款
- **要到 2027 年 9 月以後**，Google-Epic 全球和解的新費率（新裝 20%、訂閱 10%＋若用 Google 金流再加 5%）才會輪到台灣；Apple 那邊則在等美國最高法院和 Ninth Circuit 重新發回的「合理費率」定案，台灣能否連動毫無承諾

## 2025：Apple 的美歐雙線翻車與反撲

把時間軸攤開來看，2025 年的 App Store 政策幾乎每季都在變：

| 日期 | 事件 | 對誰生效 |
| --- | --- | --- |
| 2025-04-23 | 歐盟執委會認定 Apple 違反 DMA 反 steering 條款，開罰 **5 億歐元** | 歐盟 27 國 |
| 2025-04-30 | 美國 Epic v. Apple 藐視法庭裁決：Apple 不得對外部付款連結收取佣金、不得用嚇阻性 UI | 美國 |
| 2025-06-26 | Apple EU 全面改版：**CTC 5%** 上線、Store Services 拆成 Tier 1（5%）／Tier 2（13%）、另加 2% 初次取得費 | 歐盟 |
| 2025-07-07 | Apple 正式上訴歐盟的 5 億歐元罰款 | 歐盟 |
| 2025-12-11 | 美國第九巡迴上訴法院**部分翻案**：維持藐視法庭認定，但推翻「完全禁止抽成」的救濟命令，裁定 Apple 可收「合理」費用，費率發還地方法院 | 美國 |
| 2026-03 | Ninth Circuit 駁回 Apple 再審請求 | 美國 |
| 2026-04-06 | Apple 向**美國最高法院**提出上訴，請求暫停地方法院費率程序 | 美國 |

幾個重點值得台灣開發者記住：

- **歐盟的 CTC 5%** 是 Apple 在被罰 5 億歐元後端出的新費率：只要你透過 App 內連結把使用者帶去外部金流成交，即使不走 Apple IAP，Apple 仍對這筆外部銷售抽 5% 的「核心技術佣金」，並在 12 個月續期窗裡有效。Apple 也宣布 **2026-01-01 起**，原本按每次安裝收 €0.50 的 CTF 將併入 CTC，歐盟走向單一商業模式。
- **美國的「外部連結佣金」**在 2025-04 一度被直接歸零；但 2025-12 Ninth Circuit 認為「完全不給抽」過於懲罰性，推翻這部分。Apple 現在是**暫時不能收**（地方法院還沒核准新費率），但未來一定會有一個「合理費率」回來。Apple 原本自訂的 27% 幾乎確定過不了關，但 5%、10% 都有可能，要看地方法院審。

## Google Play：費率版圖有兩層，台灣都沒被納入

Google 的結構比 Apple 更碎，**因為費率直接綁市場**：

- **User Choice Billing（UCB）**：2022 年啟動、2024-03-13 起強制改用新 Alternative Billing API。支援國家持續擴張到歐洲經濟區、澳洲、巴西、印尼、日本、南非、英國、美國、韓國、印度。走 UCB 時服務費**減 4%**（例如原 15% 變 11%，30% 變 26%）。**台灣不在清單裡**，Google Play Console Help 的官方頁（answer 13821247）至今沒提過台灣。
- **External Offers Program**：原本只給 EEA，2025-10-29 起因美國 Epic 案擴及美國；2025-12-09 EEA 再做一次改版（拆兩 tier、縮短初次取得費）。外部連結出站的政策效力同樣限定在 EEA 與美國。
- **2026-03-04 Google-Epic 全球和解**：這是今年最大的變動。新模式下**新裝 20%、訂閱 10%**，用 Google 金流再加 5%。但**上線時程分四波**——2026-06-30 先在美／EEA／英國上線，2026-09-30 輪到澳洲，**2026-12-31 前**日本、南韓，**2027-09-30 才擴張到其他全球市場**。台灣屬於最後一波。

換言之，即便 Epic 打贏、Google 被迫全球降費，**台灣開發者大概也要等到 2027 年 Q4**才拿得到新費率。這 18 個月的等待，對正在做營收模型的團隊是實在的現金流差。

## 台灣的實質狀態：什麼都沒變

把上面兩串時間軸交叉對照，台灣 app 開發者 2026-04 的現況是：

- **App Store**：首年營收 100 萬美元以內維持 15%，超過或非小型企業方案為 30%；**沒有外部連結條款、沒有 CTC 折扣、沒有替代金流**。歐盟 CTC 的 5% 只適用於歐盟帳單地址，台灣既拿不到好處也逃不掉 30%。
- **Google Play**：訂閱首年 30%／次年起 15%，一次性購買 30%（小型開發者計畫可進 15%）；**無 UCB、無 External Offers**。必須使用 Google Play Billing Library。
- **跨境抽成**：若以公司主體在台灣註冊、但賣給歐盟或美國使用者，Apple / Google 抽的是**使用者所在地**的費率。理論上可以藉此吃到美歐新政，但要先確認稅務與 App Store Connect 的帳務結構（尤其是 Apple 對「誰的帳單地址」判定）。

這點對台灣訂閱型 SaaS 團隊特別重要：**若你的使用者主力在北美或歐盟**，就算公司在台北，你實際已經落進那些新政的費率區間。反之，純做台灣本地市場的 app，30% 還會吃好幾年。

## 短期能做什麼

- **重新檢查「誰在付錢」的地理分佈**：App Store Connect 與 Play Console 都能拉帳單地址分布；若歐美比例高，研究 UCB／External Offers／Apple EU 入口的成本效益，尤其是 Google 2026-06-30 之後的 20%／10% 新模式。
- **把訂閱導向 web checkout**：台灣消費者訂閱率本來就低，若你的產品能用 Safari／Chrome 完成訂閱（而非強制 IAP），抽成立刻從 30% 掉到**網頁金流的 2.8%～5%**（見本期第 2、3 篇）。這不是鑽漏洞，是 Apple / Google 從 2024 開始在各地被判要開放的方向。
- **不要押寶 Apple 的「合理費率」很快定案**：美國地方法院尚未決定數字，Apple 又在 2026-04 送交最高法院；就算最後定在 5%，也只對美國有效，與台灣無關。
- **觀察金管會／公平會的動向**：台灣目前沒有類似 DMA 的法規，公平會也尚未對 Apple／Google 開出具體處分。歐盟與南韓是靠法律逼出費率調整，台灣要複製這條路還很早。

簡單結論：**2025 的翻案潮對台灣開發者目前沒有實質紅利**。30% 還是 30%，15% 還是 15%。真正能替自己降費率的，是產品設計上把訂閱移到 web、或重新評估客群分佈——而不是等法院的好消息。

---

## 來源

- Perkins Coie, "Epic v. Apple: The Ninth Circuit Weighs In"（2025-12 裁決分析）— https://perkinscoie.com/insights/update/epic-v-apple-ninth-circuit-weighs
- MacRumors, "Apple Wins Ability to Charge Fees on External Payment Links as Appeals Court Modifies Epic Injunction"（2025-12-11）— https://www.macrumors.com/2025/12/11/apple-app-store-fees-external-payment-links/
- European Commission, "Commission finds Apple and Meta in breach of the Digital Markets Act"（2025-04-23 新聞稿）— https://digital-markets-act.ec.europa.eu/commission-finds-apple-and-meta-breach-digital-markets-act-2025-04-23_en
- Apple Developer, "Update on apps distributed in the European Union"（CTC 5% 與 CTF 2026-01 sunset 官方說明）— https://developer.apple.com/support/dma-and-apps-in-the-eu/
- Google Play Console Help, "Understanding user choice billing on Google Play"（eligible countries；台灣未納入）— https://support.google.com/googleplay/android-developer/answer/13821247
- TechCrunch, "Google settles with Epic Games, drops its Play Store commissions to 20%"（2026-03-04，含全球分階段時程）— https://techcrunch.com/2026/03/04/google-settles-with-epic-games-drops-its-play-store-commissions-to-20/
- TechCrunch, "Apple moves to take its App Store fight back to the Supreme Court"（2026-04-06）— https://techcrunch.com/2026/04/06/apple-epic-games-lawsuit-supreme-court-appeal-app-store-commission/
