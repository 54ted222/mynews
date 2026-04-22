---
title: 一人 Vibe Coding 的甜蜜區：你其實不是吃下「大專案」，而是在吃下「低風險專案」
order: 1
date: 2026-04-22
summary: 真正決定一人能不能用 AI 做完一個產品的，不是功能頁數，而是資料風險、狀態複雜度與失敗成本。
keywords: Harvard Gazette vibe coding April 2026, Simon Willison not all AI-assisted programming is vibe coding, arXiv 2512.11922 flow debt vibe coding, Lovable 400 million ARR 146 employees March 2026, Connor Burd Payout 185k monthly recurring revenue Indie Hackers 2026, Lovable project visibility public by default before November 2025
---

# 一人 Vibe Coding 的甜蜜區：你其實不是吃下「大專案」，而是在吃下「低風險專案」

## TL;DR

- 一人用 vibe coding 能快速做出來的，通常不是「大型產品」，而是**失敗成本低、狀態少、可人工補洞**的產品。
- 真正的分界線不是頁面數量，而是**資料風險、權限模型、整合數量、長期維護負擔**。
- 如果一個專案開始碰到 PII[^pii]、金流、權限、長流程工作流、多人協作與稽核需求，它就不再適合純 vibe，而需要升級成工程流程。

## 為什麼大家會誤以為自己在做「大專案」

2025 年到 2026 年之間，vibe coding 最容易造成的錯覺，是把「做得快」誤認成「能做很大」。Harvard Gazette 訪談裡的 Karen Brennan 提醒得很直接：vibe coding 改變的是 experimentation 的經濟學，讓更多人可以很快把想法做出來；但它也常常優化成「下一個小時能不能更 wow」，而不是給別人長期使用的品質。

這句話的重要性在於，它把問題從能力拉回風險。因為對大多數獨立開發者來說，真正被 AI 放大的不是你處理企業級複雜度的能力，而是你**把一個原本需要兩週原型期的產品，在兩天內看到第一版**的能力。這跟「可以一個人維護複雜系統一年」是兩回事。

Simon Willison[^simon] 對 vibe coding 的界線也畫得很準。他認為，真正的 vibe coding 是「用 LLM 寫 code，自己卻不讀那段 code」。只要你開始審、開始測、開始要求自己能解釋那段程式在幹嘛，你做的就已經不是純 vibe，而是 AI 輔助工程。這個定義很重要，因為它指出：**大多數真正有商業價值的產品，遲早都得從 vibe 過渡到工程。**

## 甜蜜區其實是「低風險、高回饋、可人工兜底」

那什麼是目前一人 vibe coding 的甜蜜區？我的判讀是三類。

第一類是**個人工具與單人工作流**。例如內部整理面板、內容生成器、資料轉換工具、個人 CRM、小型客服助手。這些產品的共同點是：錯了通常只害到自己，或最多影響少數熟悉流程的用戶，而且出問題時可以人工補救。

第二類是**狹窄場景的微型 SaaS[^micro-saas]**。如果需求足夠窄，像是一個只處理單一資料型態的內容工具、某個特定平台的營運小工具、或是只替某一種工作流省 20 分鐘的產品，AI 非常適合把它從 idea 拉到第一批付費者面前。這裡的關鍵不是 feature 少，而是**邊界清楚**。你知道它不負責什麼，也知道出錯時誰可以手動接手。

第三類是**以分發能力大於工程深度的產品**。Indie Hackers[^indie-hackers] 在 2026 年 1 月對 Connor Burd 的訪談很有代表性。他經營的是一個獨立 app studio[^app-studio]，月 recurring revenue 約 18.5 萬美元；其中最值得注意的，不是他把工程流程神化，而是他把重點放在 distribution、clean execution、data-driven iteration。這種案例提醒我們，AI 讓一人能做更多，不代表真正稀缺的東西變成 code 本身。很多時候，仍然是定位、分發與持續優化在決定上限。

## 反過來看：什麼專案一開始就不該純靠 vibe

如果說甜蜜區的共通點是「低風險、可補救、邊界清楚」，那反面就很清楚了。以下四種專案，一開始就不適合你用純 vibe 一路衝到底。

第一種是**碰到高風險資料的專案**。只要產品會碰到個資、病歷、支付資訊、企業內部文件、客戶名單，風險模型就完全不同。這時候問題不再是「功能能不能先上」，而是「誰能看到什麼、憑證怎麼保護、外洩後誰負責」。這種邏輯不是 prompt 可以自動補齊的。

第二種是**權限與狀態很多的多租戶系統**。像是 team collaboration、approval workflow、ERP 類 backoffice、複雜角色分權。你可以用 AI 很快把介面做出來，但真正難的是邊界條件：角色切換、資料隔離、歷史紀錄、撤銷權限、例外流程。這些不是「大功能」，而是無數個小 but critical 的正確性問題。

第三種是**整合太多外部服務的產品**。每多一個 webhook、外部 API、背景任務、第三方授權與同步流程，你不是多一個功能，而是多一個 failure mode。vibe coding 很擅長拉出 happy path，不擅長讓你持續掌握所有 unhappy path。

第四種是**必須長期演進的產品核心**。arXiv 那篇論文把這件事叫做 flow-debt tradeoff：一開始的順滑生成，可能換來後面的架構不一致、安全漏洞與維護負擔。也就是說，你今天省下來的規劃時間，常常會在兩個月後以「沒人敢改」的形式回來討債。

## 你以為你在 scale feature，其實你在 scale blast radius

很多人會拿 Lovable 這類案例來證明 AI 生產式開發已經可以吃下大規模產品。這個判讀只對一半。TechCrunch 在 2026-03-11 報導，Lovable 在 2 月已達到 4 億美元 ARR[^arr]，而且公司只有 146 名員工。這確實證明了 AI 工具能把單位人力槓桿放大很多。

但它證明的不是「所以個人也能用純 vibe 做企業級系統」，而是另一件事：**當產品做大，工具供應商自己也必須把治理、權限、掃描與審核補起來。** Lovable 官方文件寫得很清楚，從 2025 年 12 月開始，新專案預設為 workspace visibility；而在更早之前，免費方案下的新專案曾經預設公開。Business Insider 在 2026-04-21 的報導更指出，有研究者聲稱可從免費帳號看到 2025 年 11 月前建立的一批專案資料。無論事件最終定性如何，訊號都很一致：**一旦產品開始碰到真實使用者與真實資料，預設值本身就是風險。**

這也是為什麼我會說，一人能吃下的不是「大專案」，而是「低風險專案」。當你還在可控的風險範圍內，AI 會像火箭；一旦 blast radius[^blast-radius] 放大，它就不再只是加速器，而會變成放大器。

## 真正的決策線：不是能不能做，而是出錯時誰承擔

最後，把這件事講白一點。一人 vibe coding 可以做出很多看起來像 SaaS 的東西，但那不等於它們都適合作為一個人長期獨立承擔的產品。

我的實務判準很簡單：

- **如果出錯時，你能自己在一天內修回來，且損害有限**，那通常還在甜蜜區。
- **如果出錯會傷到客戶資料、金流、營運流程或信任**，那你就已經越線。
- **如果你自己看不懂 AI 生成的關鍵路徑**，那不是產品做大了，是你對它的控制變小了。

所以第一條結論不是「不要 vibe coding」，而是：**先用 vibe coding 找到需求，再決定哪些部分值得進入工程。** 你真正該擔心的，不是 AI 幫你寫得太多，而是你把本來該升級流程的產品，誤判成還能繼續靠 prompt 撐過去。

[^pii]: PII 是 personally identifiable information 的縮寫，泛指可辨識個人的資料，例如姓名、電話、地址、身分號、醫療或支付資訊。只要碰到這類資料，產品風險就會明顯提高。

[^simon]: Simon Willison 是長期研究 LLM 與 developer tooling 的獨立開發者，對 AI 寫程式的風險與使用邊界有大量一手實驗與公開筆記。

[^micro-saas]: micro-SaaS 指範圍很窄、針對單一痛點設計的小型訂閱軟體，通常由極小團隊甚至個人維運，重點是邊界清楚與快速驗證。

[^indie-hackers]: Indie Hackers 是獨立開發者與 bootstrapped 創業者常用的社群與案例資料庫，很多早期產品的營收、成長與 GTM 經驗都會在上面公開分享。

[^app-studio]: app studio 在這裡不是接案公司，而是同一個創辦人持續經營多個產品的組合型業務，重點是資產組合與分發效率，而非單一產品規模。

[^arr]: ARR 是 annual recurring revenue，指把當前穩定的 recurring revenue 年化後得到的常態性收入指標，常用來衡量 SaaS 的營收規模。

[^blast-radius]: blast radius 指一個錯誤、漏洞或錯誤設定擴散後可能影響的範圍。影響用戶越多、資料越敏感、流程越關鍵，blast radius 就越大。

---

1. [‘Vibe coding’ may offer insight into our AI future](https://news.harvard.edu/gazette/story/2026/04/vibe-coding-may-offer-insight-into-our-ai-future/) — Harvard Gazette, 2026-04-01
2. [Not all AI-assisted programming is vibe coding (but vibe coding rocks)](https://simonwillison.net/2025/Mar/19/vibe-coding/) — Simon Willison, 2025-03-19
3. [Vibe Coding in Practice: Flow, Technical Debt, and Guidelines for Sustainable Use](https://arxiv.org/abs/2512.11922) — Waseem et al., 2025-12-11
4. [Growing a portfolio of mobile apps to $185k/mo](https://www.indiehackers.com/post/tech/growing-a-portfolio-of-mobile-apps-to-185k-mo-hZ4hqICtByIljkiJECQv) — Indie Hackers, 2026-01-08
