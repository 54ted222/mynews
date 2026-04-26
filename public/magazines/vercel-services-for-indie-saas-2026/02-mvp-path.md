---
title: 從 Hobby 到第一個付費客戶：indie SaaS 的 Vercel 起步路徑
order: 2
date: 2026-04-26
summary: Hobby 條款明文禁止商用，多數 indie 都踩過這一條；本篇拆解 $0 → $20 → $50 → $200 的成本曲線。
keywords: Vercel Hobby commercial use enforcement 2026, Vercel Hobby plan Terms of Service commercial, Vercel Pro $20 included credit how far, Vercel free tier surprise bill reddit, Vercel Hobby account suspended commercial activity, Vercel preview deployment Hobby commercial allowed, Vercel Pro $20 plan first 100 users cost, Vercel Hobby donations commercial use OSS sponsor, "Vercel Pro" $115 image optimization indie real bill, Vercel Hobby plan 100GB bandwidth 1M edge requests
---

# 從 Hobby 到第一個付費客戶：indie SaaS 的 Vercel 起步路徑

## TL;DR

- Vercel **Hobby plan 不只是「免費 tier」**，它是寫死在 Fair Use Guidelines 裡的「**非商用**」契約——只要你的部署「為了任何參與者的金錢利益」，包括接受贊助、放 AdSense[^adsense]、宣傳你的服務，理論上都該升級到 Pro。實務上 Vercel 不會看一眼就停你，但條款給了他們隨時動手的權利，已經有人因為「靜態網站宣傳商業服務」被官方公開點名要升級。
- **第一個付費客戶**是清楚的觸發點。在收第一塊錢的當天就該升 Pro（$20/月），不是「等流量上來再說」。Pro 的 $20 monthly credit 加上 1 TB Fast Data Transfer、10M edge requests 的內建額度，對 0 → 100 用戶幾乎不會超支。
- 真正的成本陡坡不在 Pro 升級，而在**第二個 seat、Image Optimization 跨過 5K/月、bandwidth 跨過 1 TB**。HowdyGo[^howdygo] 28K 張圖的 Image Optimization overage 是 $115/月——base $20 的 7 倍。$0 → $20 → $50 → $200 的曲線可預測，但每一段的觸發條件你必須先知道。

## 一、Hobby plan 條款：你以為的「免費 tier」，其實是「非商用」契約

大多數 indie hacker 上 Vercel 的第一天，是把 GitHub 連起來、push 一個 Next.js repo、看到 `https://your-project.vercel.app` 跑起來——免費、零設定、沒人攔你。然後就直接放 Stripe[^stripe] checkout 上去開賣。

這條路徑在條款上是違規的。Vercel Fair Use Guidelines 講得非常清楚：

> Hobby teams are restricted to non-commercial personal use only. All commercial usage of the platform requires either a Pro or Enterprise plan.

而「商用」的定義比一般人以為的寬：

> Commercial usage is defined as any Deployment that is used for the purpose of financial gain of **anyone** involved in **any part of the production** of the project, including a paid employee or consultant writing the code.

明確列出的商用例子：

- 任何向訪客請款或處理付款的方式
- 廣告銷售產品或服務（**不只是賣東西，連「宣傳」都算**）
- 收錢去建置、更新或代管網站（接案）
- 站台主要目的是聯盟連結（affiliate）
- 加入廣告，包括 Google AdSense

更狠的是 Vercel 社群有個官方點名的判例：一位用戶問「我做了個靜態網站宣傳我提供的服務，沒收錢，算商用嗎？」Vercel staff 直接回——

> 「這個網站雖然是靜態頁面，本身不收錢，但因為它在宣傳你提供的商業服務，所以屬於商用。」

換句話說：**只要這個網站存在的目的之一是讓你賺到錢**，就屬於商用，不論訪客有沒有按下任何付款按鈕。Indie hacker 最容易踩的兩條是：

1. **Landing page 寫了 pricing**（即便還沒接金流）——已經是「宣傳銷售」。
2. **個人網站放 AdSense / 聯盟連結**——明確列入商用例子。

兩件事是被允許的，常被誤解：

- **接受贊助／Donations**：Vercel 知識庫明確澄清「Asking for Donations 不視為商用」，可以放 Buy Me a Coffee、Ko-fi、開放贊助連結（Fair Use 文件渲染上有點誤導，但官方一致解釋是「允許」）。
- **公開的 OSS 專案文件站**：Vercel 有獨立的 Open Source Program，符合條件（每 3 個月開放申請、需完全 OSS）可以走那條路而不是 Hobby 商用爭議區。

### 執法強度：「條款隨時能動你」與「實務上他們很少動」之間

不要把「條款寫了」等於「明天就會被停」。實務上 Vercel 的執法集中在兩種情境：

1. **濫用造成基礎設施負擔**：Hobby 帳號被 GPTBot 爬到爆量、被 DDoS 灌爆、bandwidth 一晚衝 1 TB——Vercel 社群裡這類「Hobby account suspended」最常見。
2. **明顯且大量的商用**：Stripe checkout 跑在 vercel.app、流量穩定增長、營收痕跡明顯。

但**條款給了他們隨時下手的權利**，這才是重點。當你的 indie SaaS 開始長大，公司 Slack 出現「Vercel 來信要求升級」這個議程的那一天，你會想當初就走在規矩內。

## 二、起步用 Hobby 的合法做法：dev / preview / 真正非商用

Hobby plan 不是不能用，而是**用對地方**。對 indie 創業者，有三個情境是 Hobby plan 完全合理且持續使用：

1. **個人開發環境**：早期 prototype、技術探索、學新框架的 sandbox repo。沒商業意圖、沒 pricing 頁、沒 Stripe key。
2. **真正非商用的 side project**：純技術 demo、開源工具的範例站、不收錢的工具（且沒有任何「未來要商業化」的痕跡）。
3. **接受贊助的個人作品**：技術 blog、OSS 專案首頁、個人 portfolio（**注意：portfolio 如果寫「我接案」就變商用了**）。

### Preview / Staging 想用 Hobby？答案是：不能

很多 indie 想：「production 開 Pro，staging / preview 留 Hobby 省錢。」這條路 Vercel 有意堵起來了。

正規的多環境工作流（Custom Environments，能讓你開 staging / QA / production 多套）只在 **Pro 或 Enterprise plan** 提供。Hobby 用戶能做的只是「branch-specific domain + preview deployment」這種陽春版。

更關鍵的是條款邏輯：你的 staging 環境是 production 的一部分，**production 是商用的話，staging 也算商用**。把 staging 切到另一個 Hobby team 帳號，不是省錢，是雙倍違規。

## 三、升 Pro 的觸發點：什麼時候不再爭辯

在我看下來，第一個付費客戶這個觸發點最乾淨——**你開始收錢的當天**就升 Pro，不要再用「流量還小」當藉口。$20/月在「賺第一塊錢」這個里程碑面前不是錢，而是條款上的合規成本。

但實務上有更早的觸發點，按優先順序排：

| 觸發事件 | 為什麼要立刻升 Pro |
| --- | --- |
| 上線 pricing 頁／開放註冊 | Fair Use 明文「廣告銷售產品或服務」屬商用 |
| 接 Stripe / Lemon Squeezy[^lemon-squeezy] 等金流 | 「請款或處理付款」是商用第一條 |
| 用 vercel.app 做客戶提案 demo | 接案行為，「收錢去建置／代管」 |
| Hobby 限制開始卡功能 | Pro 解鎖：300 秒 function timeout、Custom Environments、Spend Management、Password Protection、log drains、進階 RBAC |
| Bot 流量逼近 100 GB / 1M edge requests | Hobby 觸頂會直接「等 30 天」，沒得追加；Pro 是 pay-as-you-go |

最後一條值得單獨講。Hobby plan 的「超量處理」**不是計費，是停權**——觸頂之後該功能停 30 天才會 reset。對「正在用」的 indie 產品這是滅頂之災。Pro 的 overage 雖然要付錢，但**至少網站是活的**。

## 四、$0 → $20 → $50 → $200 成本曲線：每一段的觸發條件

這是本篇核心。我把 indie SaaS 在 Vercel 上常見的成本軌跡拆成四段，每段對應一個明確的營運狀態。數字截至 2026-04，全部來自 Vercel 官方 pricing 頁與第三方真實帳單案例。

### 各段月費對照表

| 月費級距 | 對應營運狀態 | 觸發條件 | 主要費用組成 |
| --- | --- | --- | --- |
| **$0 / 月** | Pre-launch、純 prototype | 完全非商用、流量 < 100 GB / 月、function < 100 GB-Hr | Hobby（免費，但**禁止商用**） |
| **$20 / 月** | 已上線、收第一個客戶到約 100 用戶 | 升 Pro、單人團隊、流量 < 1 TB、edge requests < 10M、image transformations < 5K（注意：這條超低）、Active CPU < 16 hr、function 用 $20 monthly credit 內 | Pro base $20，幾乎全部由 $20 credit 吸收 |
| **$50 / 月** | 100 → 500 用戶、有資料層成本 | Pro $20 + 一個外部 DB（Marketplace 上 Neon / Supabase / Upstash 約 $20–25 起跳）+ 少量 overage（image transformations 跨 5K、blob 幾 GB） | $20 base + $20–25 DB + $5–10 雜項 overage |
| **$200 / 月** | 500–2K 用戶、有 marketing 流量 | 多了一個共同創辦人 seat（+$20）、Image Optimization 跨萬張、bandwidth 跨 TB、function GB-Hr 跨段、可能加 add-on（Password Protection、log drains） | 2× $20 seat + $50–80 image opt + $30–50 bandwidth + $20–40 function |

### 第一段：$0/月——Hobby，但守住「非商用」紅線

Hobby 額度（每月，2026-04）：

- 100 GB Fast Data Transfer
- 1,000,000 Edge Requests
- 1,000,000 Function Invocations
- 4 CPU-Hours Active CPU
- 360 GB-Hours Provisioned Memory
- 100 GB-Hours Function Duration
- 5,000 Image Transformations（**最容易先爆的**）
- 1,000 Image Optimization Source Images（legacy）
- 1 GB Blob storage
- Function timeout 預設 10s、最多 60s（Pro 預設 15s、最多 300s）

這段的核心紀律是「**不要碰商用紅線**」。流量超量會被停 30 天，但條款違規會被人工介入——後者更難回復。

### 第二段：$20/月——Pro 上線，$20 monthly credit 是真武器

升上 Pro 後，每月固定 $20，但這 $20 不只是訂閱費——**它同時是 $20 的 monthly credit**，會優先抵掉所有 usage 計費。也就是說：

- 你用了 50 GB function 執行（按 $0.60/GB-Hr increment 大約 $30）→ 先扣 $20 credit、再付 $10
- 你只用了 5 GB function（$3）→ 沒有 overage、總帳單就 $20

Pro 內含額度（2026-04）：

- 1 TB Fast Data Transfer
- 10,000,000 Edge Requests
- 1,000,000 ISR reads（更高層 10M）、200K ISR writes
- 16 CPU-Hours Active CPU、1,440 GB-Hours Provisioned Memory
- 10,000 Image Transformations（Hobby 5K 的 2 倍）
- 5,000 Image Optimization Source Images（Hobby 1K 的 5 倍）
- Function 預設 15s、可調到 300s
- Custom Environments（staging / QA）
- Spend Management（**請第一天就設**）

對「上線後 0 → 100 用戶」這段，多數 indie 反映 base $20 直接打平，monthly credit 還剩。這是 Vercel 設計的甜蜜點，也是「為什麼大家都繼續留下來」的原因。

### 第三段：$50/月——資料層加進來

純 Vercel 是不夠的——SaaS 一定有資料庫。Vercel 自己 Storage 產品線（Postgres、KV、Blob）2024 年開始改走 Marketplace 模式，把資料庫外包給 Neon、Supabase、Upstash。Marketplace 接到 Vercel billing 之後，這些 DB 的費用會直接合進 Vercel 月帳。

實際數字大致是：

- **Neon Pro**：$19/月起跳、$0.16/CU-hour 計算
- **Supabase Pro**：$25/月起跳、含 8 GB DB 與 250 GB bandwidth
- **Upstash Redis Pay-as-you-go**：低用量 $5–10/月可解決

（Neon、Supabase、Upstash 三家定位差異見第四篇與第一篇 footnote。）

加上 Vercel base $20，到 $40–50/月是這個階段的下限。再加少量 overage（典型 indie SaaS 在 100–500 用戶階段最先爆的是 image transformations，5K → 10K 大概是 $25 多 overage），$50/月是個典型的 marketing-page 還沒衝起來、產品已經有真實使用者的數字。

### 第四段：$200/月——Marketing 流量打進來，曲線開始陡

到這段你可能會有：

- 2 個 seat（你 + 共同創辦人 / 第一個雇員）= $40 base
- Image Optimization 跨萬張：HowdyGo 案例 28K 張 = base $20 + $115 overage（每多 1K 張 +$5），他們的總圖片相關費用 $135/月
- Bandwidth 跨 1 TB：每 GB $0.15，意思是 1.5 TB/月 = +$75
- Function GB-Hr 超出：$0.60/GB-Hr increment

相加很容易進 $200–300。HowdyGo 公開的數字是「base $20 變 7×」，主要爆點就是 Image Optimization。Schematic 與 DeployWise 的觀察一致：viral marketing 一晚把 bandwidth 推 500 GB 就是 +$75 加在你不預期的時間點。

### 早期就要做的兩件事

1. **第一天設 Spend Management**（Pro 才有）。給帳單訂上限，超過就降級服務或關掉，不要讓 viral 變災難。Reddit / IndieHackers 上「我的 $20 月費變 $286」「$2,500 bandwidth 帳單」幾乎全是沒設這條。
2. **想清楚 Image Optimization 是不是非用不可**。Vercel 的 Image Optimization 計價之高，已經足以讓 HowdyGo 寫 80% 成本下降文章——他們最後是搬到自架 Lambda + S3 + CloudFront。對 indie 來說，更輕量的選項：用 Cloudflare Images（$5/100K transformations）、Bunny Optimizer，或乾脆 build-time 生成所有尺寸放 CDN[^cdn]，避開 runtime 轉檔。

## 五、總結：把 Hobby 當「真正非商用」用，把 Pro 當「合規 + 第一張保險」買

我寫到這裡的實務結論：

- **Pre-launch 階段** 用 Hobby 沒問題，前提是真的沒任何商業意圖。**有 pricing 頁、有 waitlist 寫「即將收費」就是商用**——升 Pro 一個月 $20 解決爭議。
- **第一個付費客戶** = 升 Pro 的 deadline，不是流量門檻、不是用量門檻，是條款門檻。
- **真正的成本陡坡** 在第三、四段過渡，集中在 Image Optimization、bandwidth、第二個 seat。**第一天設 Spend Management[^spend-management]、別用 Vercel Image Optimization 跑大量圖片**，這兩條做了能省下後面 3/4 的「surprise bill」帳。
- **升 Pro 不等於不能逃**。下一段該開始觀察的是「曲線會不會繼續陡」——這留給本期最後一篇談退場。本篇結束於：你的 indie SaaS 可以在 $200/月的成本以內走到第一個 $1K MRR[^mrr]，前提是知道每一段的觸發條件。

[^adsense]: AdSense 是 Google 的廣告聯播網，把廣告位賣給 Google 換取分潤；Vercel Fair Use 明文把放 AdSense 列入「商用」例子，跟「實際收費」一樣需要 Pro plan。
[^howdygo]: HowdyGo 是一家做互動式網頁示範錄製的 SaaS，2025 年公開分享自己把 Vercel 帳單砍 80% 的過程，是 indie 圈最被引用的「Image Optimization 爆帳」案例，他們最後改用自架 Lambda + S3 + CloudFront。
[^stripe]: Stripe 是線上金流的事實標準，indie SaaS 多半用它做訂閱、一次性付款與發票，會把交易結果以 webhook 推給你的後端。
[^lemon-squeezy]: Lemon Squeezy 是另一家對 indie 友善的金流，最大賣點是內建 Merchant of Record（替你處理跨國 VAT / 銷售稅），讓單人團隊可以合法收全球客戶的錢；2024 年被 Stripe 收購但仍獨立運作。
[^cdn]: CDN 是 Content Delivery Network 的縮寫，把靜態檔案放在全球邊緣節點，讓用戶從最近的伺服器拉資料，降低延遲也分擔流量；Cloudflare、CloudFront、Fastly 都是常見選項。
[^spend-management]: Spend Management 是 Vercel 的內建預算控管，可以在 50 / 75 / 100% 門檻發通知或自動暫停 production deployment；2025-09 之後對 Pro 預設啟用，但檢查不是 realtime，第六篇會深聊。
[^mrr]: MRR 是 Monthly Recurring Revenue（月經常性收入）的縮寫，SaaS 用來衡量訂閱業務規模的標準指標，indie 圈常用 $1K MRR 當「能不能全職做」的第一道門檻。

---

## 來源

- [Vercel — Fair Use Guidelines](https://vercel.com/docs/limits/fair-use-guidelines) ：商用定義、Hobby/Pro typical usage 表、Pro overage 計價（截至 2026-04）。
- [Vercel — Hobby Plan 文件](https://vercel.com/docs/plans/hobby) ：Hobby/Pro 完整對照表、function timeout、Active CPU、Provisioned Memory、ISR、build 限制。
- [Vercel — Pricing 頁](https://vercel.com/pricing) ：Pro $20/seat/月、$20 monthly credit、bandwidth $0.15/GB、edge requests $2/1M、Active CPU $0.128/hr、image transformations $0.05/1K、blob $0.023/GB。
- [Vercel Community — Fair Use of The Hobby Plan](https://community.vercel.com/t/fair-use-of-the-hobby-plan/2725) ：官方員工確認「靜態網站宣傳商業服務」屬商用。
- [HowdyGo — Cutting Vercel Costs by 80%](https://www.howdygo.com/blog/cutting-howdygos-vercel-costs-by-80-without-compromising-ux-or-dx) ：28K 張 Image Optimization overage $115/月（base $20 的 7×）的真實案例。
- [Vercel KB — Can Vercel sponsor my open source project?](https://vercel.com/kb/guide/can-vercel-sponsor-my-open-source-project) ：Open Source Program 申請條件，與 Hobby 商用爭議的另一條合法路徑。
