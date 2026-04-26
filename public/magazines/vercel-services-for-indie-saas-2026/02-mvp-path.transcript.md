這一集我們談一件大多數 indie hacker 都低估、但條款裡寫得非常清楚的事——Vercel 的 Hobby plan 不是「免費 tier」，它是一份「非商用」契約。然後我們會把 0 到 200 美元的成本曲線一段一段拆給你看。

上一集我們攤開了 Vercel 的全產品線地圖。今天我們從另一個角度切——你是個一個人團隊的 indie，從零開始要做一個能收錢的 SaaS，你的第一塊錢、第一百個用戶、第一千個用戶，分別會花你多少錢？

先講第一個誤解。多數 indie 上 Vercel 的第一天，是把 GitHub 連起來、push 一個 Next.js repo、看到 vercel.app 的 URL 跑起來——免費、零設定、沒人攔你。然後直接放 Stripe checkout 上去開賣。

這條路徑在條款上是違規的。Vercel 的 Fair Use Guidelines 寫得非常清楚——Hobby 只給「非商用個人使用」，所有商用行為都要 Pro 或 Enterprise plan。重點是，他們對「商用」的定義比你想像的寬——只要這個部署是「為了任何參與者的金錢利益」，包括接受贊助、放 AdSense、宣傳你提供的服務，理論上都算商用。

最狠的是 Vercel 社群有個官方點名的判例。一位用戶問「我做了個靜態網站宣傳我提供的服務，沒收錢，算商用嗎？」Vercel 員工直接回——「這個網站雖然不收錢，但因為它在宣傳你的商業服務，所以屬於商用。」換句話說，只要這個網站存在的目的之一是讓你賺到錢，就屬於商用，不論訪客有沒有按下任何付款按鈕。

所以 indie 最容易踩的兩條地雷是——Landing page 寫了 pricing，即便還沒接金流，已經是「宣傳銷售」。個人網站放 AdSense 或聯盟連結，明確列入商用例子。

但有兩件事是被允許的，常常被誤解。一是接受贊助——Buy Me a Coffee、Ko-fi 這種，Vercel 有獨立的知識庫文章澄清不算商用。二是真正的開源專案文件站，符合條件可以走 Vercel 的 Open Source Program。

這時候你可能會想說——條款歸條款，Vercel 真的會看一眼就把我停掉嗎？不會。實務上他們的執法集中在兩種狀況——一種是濫用造成基礎建設負擔，比方說 Hobby 帳號被 GPT 爬蟲爆掉、被 DDoS；另一種是明顯而且大量的商用，Stripe checkout 在 vercel.app 上跑、流量穩定增長。但條款給了他們隨時下手的權利，這才是重點。

所以我的建議是——升 Pro 的觸發點要設得乾淨一點，不要等他們找上門。最乾淨的觸發點就是「第一個付費客戶」——你開始收錢的當天就升 Pro，不要再用「流量還小」當藉口。20 美元一個月，在「賺第一塊錢」這個里程碑面前不是錢，是條款上的合規成本。

接下來我們進到本集的核心——0、20、50、200 美元四段成本曲線。

第一段是 0 美元，pre-launch、純 prototype 階段。Hobby 給你 100 GB Fast Data Transfer、100 萬次 Edge Request、100 萬次 Function Invocation、4 小時 Active CPU、5000 次 Image Transformation——這個 5000 是最容易先爆的數字。這段的紀律就是「不要碰商用紅線」。流量超量會被停 30 天，但條款違規會被人工介入，後者更難回復。

第二段是 20 美元，Pro 上線、收第一個客戶到大概 100 個用戶。Pro 的 20 美元不只是訂閱費，它同時是 20 美元的 monthly credit，會優先抵掉你所有 usage 計費。對 0 到 100 用戶這段，多數 indie 反映 base 20 直接打平、credit 還剩。這是 Vercel 設計的甜蜜點，也是「為什麼大家都繼續留下來」的原因。

第三段是 50 美元，100 到 500 用戶、有資料層成本。純 Vercel 是不夠的，SaaS 一定要資料庫。從 Marketplace 接 Neon Pro 19 美元起、Supabase Pro 25 美元起、Upstash Redis 低用量 5 到 10 美元——加上 Vercel base 20，到 40 到 50 美元是這個階段的下限。

第四段是 200 美元，500 到 2000 用戶、開始有 marketing 流量。這段你可能會多了一個共同創辦人 seat、Image Optimization 跨萬張、bandwidth 跨 1 TB。HowdyGo 公開的數字是「base 20 變成 7 倍」，主因就是 Image Optimization。一晚 viral 把 bandwidth 推 500 GB 就是再加 75 美元。

這裡我想單獨強調兩件事，第一天就要做。

第一件——設 Spend Management。這是 Pro 才有的功能，給你帳單訂上限，超過就降級服務或關掉。Reddit 上「我的 20 美元月費變 286」「2500 美元 bandwidth 帳單」幾乎全部是沒設這條。

第二件——想清楚 Image Optimization 是不是非用不可。Vercel 的計價之高，已經足以讓 HowdyGo 寫 80% 成本下降的 blog。對 indie 來說更輕量的選項是——用 Cloudflare Images、Bunny Optimizer，或者乾脆 build-time 生成所有尺寸放 CDN，避開 runtime 轉檔。

所以這一集的重點是——把 Hobby 當「真正非商用」用，把 Pro 當「合規加上第一張保險」買。第一個付費客戶等於升 Pro 的 deadline，不是流量門檻、不是用量門檻，是條款門檻。第一天設 Spend Management、別用 Vercel Image Optimization 跑大量圖片，這兩條做了能省下後面四分之三的「surprise bill」。

下一集我們進到 AI SaaS 的最短路徑——AI SDK、Gateway、Sandbox 三件套怎麼疊。我們下集見。
