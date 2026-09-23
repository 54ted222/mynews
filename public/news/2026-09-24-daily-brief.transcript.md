今天想聊 9 月 24 號週四這一版創業情報最關鍵的四條主線。這一週 AI 頂端模型場面很熱鬧，週一 Grok 4.7 正式落地終結了長達四週的 vaporware saga，接著週二 Claude Opus 5.5 上線，把 input 價格砍到 4 塊、output 20 塊，快取讀取更是低到 0.2，比 Opus 5 便宜四成、快三成，而且宣稱在多數 workload 匹配 Fable 5.1。這個組合直接把頂端 router 的選型格局重寫。

先講 Opus 5.5 這件事。Anthropic 對外主打三個賣點：一個是價格 20% 便宜，一個是快取讀取降 60%，再一個是同一批 workload 因為 Opus 5.5 用更少 token，實際跑起來便宜四成。這意味著什麼？意味著原本用 Fable 5.1 跑 agentic pipeline 的團隊，現在多了一個「更便宜、同等級」的選項，而 Sonnet 5 繼續佔中階性價比位置。所以四軸選型格局變成這樣：Opus 5.5 是 agentic 頂端、Fable 5.1 專攻 coding、Sonnet 5 是中階性價比、SWE-2 綁在 Devin 上做免費 shadow eval。獨立開發者這週最該做的事，就是把 Opus 5.5 對比 Fable 5.1 的 shadow eval 排上工作台。

接著是 Grok 4.7。這個模型的關鍵不只在 benchmark，而是它終於落地了。Musk 是 9 月 2 號口頭承諾，也就是 T 減 10 天，到 9 月 11 號 T 加 9 天時期望值降級，再到 9 月 14 號自比 Opus 5.0，最後 9 月 21 號也就是 T 加 19 天真正上架。整整四週的 vaporware saga 就這樣收尾。價格維持 2 塊對 6 塊，跟 Grok 4.6 同價，CursorBench 4.0 拿到 46.3 分落後 Fable 5.1 的 51.8，DeepSWE 從 65 拉到 71。不過真正勁爆的是 SWE-Bench pass@3 這個數字：Grok 4.7 拿 40%，跟 Opus 4.8 打平，卻只花 0.24 美金一次 trial，相對 Opus 4.8 的 3.36 便宜將近 14 倍。VentureBeat 有補一句提醒：Grok 4.7 token 用量很兇，實務 ROI 要另外驗證。這一點值得 Q4 重點盯。

再來要講 TSMC Q2 財報。營收 402 億美金、年增 33.7%、EPS 4.31，連續四季超預期。股價 9 月 23 號收在 451.95，漲 1.53%，consensus target 平均 523.22。這個數字疊上前幾週 TrendForce 給的 2 奈米 22%、3 奈米 16%、CoWoS 產能翻倍，構成蘋概股跟半導體 vertical 的鞏固基本盤。獨立開發者可以拿這個做 dashboard 化 SaaS，特別是配上 iPhone Duo T 減 22 這條線。中華電信 survey 顯示 Duo 顏色需求六成白色、四成 Night Sky，Taiwan Mobile 10 月 16 號晚上 8 點首發、中華電信 10 月 23 號才開賣。簡單說，把 TSMC 財報、蘋概股 rerating、iPhone Duo、中華電信 survey、台廠光電光學這五條組成一個週四盤中 dashboard，是 Q3 財報前最順的一支 pitch。

再來要提兩條政策軸。第一個是 MODA 主權 AI 訓練語料庫。9 月 15 號 MODA 邀請出版商跟電子書平台加入徵集，語料庫從 6 億 tokens 一路成長到 22 億，成長幅度 3.6 倍。TAIC License v1 上路，TMMLU+ 這個台灣 benchmark 兩萬題，TAIDE 拿 58 分、Gemma 54 分，台灣地理更是 70 對 61。這是「非中國廠牌加在地驗證」的 pitch 骨架。不過台北時報 9 月 24 號那篇「Sovereign AI paradox — 什麼叫主權」的獨立媒體挑戰，是 pitch 時要注意的精確語言校準。第二條是 Anthropic Small Business 一口氣推出 43 個 workflow、27 個 connector，Shopify、Salesforce、Xero、Stripe、Zapier 一次到位。這正好對到台灣商業服務業 10 萬案的補助窗口，可以做成「Claude SMB × MODA 語料庫 × TAIC License × 商業服務業 vertical」四合一的政策 SaaS pitch deck。

最後一定要提中秋。今天週四是 T 減 1 天，出貨 SLA 的最後 24 小時。到週五 T 等於 0，品牌會轉為節後回購籌備。蝦皮 38%、momo 31%、PChome 12%、酷澎 990K MAU，四大平台壓力持續。電商團隊今天的三大錨點：延遲補救 SLA 話術、LINE OA 節後回購名單分眾、客服關單。這是週四執行力最重要的一段，錯過就要等到節後才有窗口。

重點是：Opus 5.5 跟 Grok 4.7 兩發一起打，把頂端 router 直接洗牌，獨立開發者不做 shadow eval 就會漏掉四成成本降低跟 14 倍 per-trial 落差；TSMC Q2 財報把 AI 資本支出這條主軸鞏固到 Q3 財報前；MODA 22 億 tokens 加 Anthropic SMB 43 個 workflow 是台灣 vertical SaaS 的政策 pitch 雙軸；然後中秋 T 減 1 這 24 小時，出貨 SLA 是最後窗口。四條線今天全部要抓。
