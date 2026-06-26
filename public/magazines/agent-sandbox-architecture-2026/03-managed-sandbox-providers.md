---
title: 託管沙箱市場：E2B / Modal / Daytona / Vercel / Cloudflare 怎麼選
order: 3
date: 2026-06-26
summary: 把五家主流託管沙箱的定價、冷啟動、快照與分叉攤開比較，給出「什麼情況選誰」的決策依據。
keywords: E2B pricing vCPU hour 2026 Firecracker, Vercel Sandbox pricing active CPU billing GB-hour, Daytona cold start 90ms snapshot pricing, Modal sandbox pricing gVisor concurrent sessions, Cloudflare Sandboxes GA April 2026 Containers RPC, E2B pause resume filesystem memory state resume 1 second, Daytona Docker container isolation weaker untrusted code
---

# 託管沙箱市場：E2B / Modal / Daytona / Vercel / Cloudflare 怎麼選

到 2026，跑 agent 寫出來的程式碼這件事已經有現成市場可買。你不必自己架 Firecracker、調 gVisor、管 snapshot 池——E2B、Modal、Daytona、Vercel Sandbox、Cloudflare Sandboxes 各自把「安全執行未審查程式碼」包成一個 API。但這五家不是同一種東西的五個牌子：底層隔離原語不同（機制本身見本期第 2 篇，這裡只當作選型輸入），定價模型不同到難以直接相減，快照與分叉的成熟度差一個量級，連「適合誰」都不一樣。這篇把這五家攤開，重點不在介紹功能，而在給你一個能拿來做決定的座標系。

## TL;DR

- 五家分兩種計費哲學：E2B、Daytona、Modal 按 **wall-clock（牆鐘時間）** 計 vCPU 與記憶體，Vercel Sandbox 與 Cloudflare Sandboxes 走 **active CPU（只算實際吃 CPU 的秒數，I/O 等待不計）**。對「大量等 LLM/網路回應」的 agent 工作負載，後者帳單可能差好幾倍——但前者對「CPU 一直忙」的批次運算反而更可預期（截至 2026-06）。
- 冷啟動排序大致是 Daytona（約 90ms，預熱池可到 ~27ms）< E2B（約 150ms）< 其他，但這數字幾乎都來自競品比較文或第三方 benchmark，且 Daytona 的速度是用**預設 Docker 容器**換來的——隔離比 E2B 的 Firecracker microVM 弱，要強隔離得自己 opt-in Kata（截至 2026-06）。
- 沒有「最好」的一家：per-call 延遲敏感的互動式產品選 Daytona，跑未審查程式碼要硬體級隔離選 E2B，需要 GPU 與超大並發選 Modal，已經在 Vercel/Cloudflare 生態裡的選同名 Sandbox 省整合成本。

## 市場格局：五家在賣的其實不是同一件事

先把底層原語當成選型輸入講清楚（機制不展開，見第 2 篇）。**E2B**[^e2b] 建在 Firecracker microVM 上，每個 sandbox 一顆專屬 guest kernel，是這幾家裡隔離最硬的；定位是「給 AI 跑未審查程式碼的 ephemeral[^ephemeral] 執行環境」。**Daytona**[^daytona] 2025 年 2 月從開發環境工具轉型成「running AI-generated code 的安全基礎設施」，主打全市場最快冷啟動，代價是預設用 Docker 容器——共享 host kernel，隔離較弱，要 microVM 級安全得自己選 Kata[^kata]（截至 2026-06）。**Modal**[^modal] 是 Python-native 的 serverless 平台，sandbox 用 gVisor，真正的賣點是 GPU 全家桶與「擴展到 50,000+ 並發 session」的規模，適合把 agent 推理與重運算放同一個平台。**Vercel Sandbox**[^vercel-sandbox] 也是 Firecracker，但它的價值主張是「你已經在 Vercel 上」——和 Functions、部署管線同一套帳號與 DX。**Cloudflare Sandboxes**[^cf-sandboxes] 2026-04-13 GA[^ga]，建在 Cloudflare Containers 上，兩層架構：外層 Workers 的 V8 isolate（Dynamic Workers）負責路由與輕量邏輯，內層才是容器化的 Sandbox 跑真正的程式碼；賣點是和 Workers/Durable Objects/邊緣網路綁在一起。

換句話說，這不是五個沙箱供應商在搶同一塊餅，而是「純執行原語（E2B、Daytona）」、「運算平台順帶賣沙箱（Modal）」、「既有 PaaS 的延伸（Vercel、Cloudflare）」三種生意在同一張比較表上撞在一起。選型的第一刀，往往是先決定你要哪一種生意，再比數字。

## 定價怎麼算：wall-clock 與 active CPU 是兩個世界

這是最容易被比較文誤導的地方，因為各家把單價放在一起看會以為 E2B（約 $0.0504/vCPU-hour）比 Vercel（$0.128/vCPU-hour）便宜一半多——但兩者的「hour」算的不是同一段時間。

E2B 與 Daytona 都按 wall-clock 計：sandbox 從開到關的整段牆鐘時間，不管 CPU 在不在忙，都照 vCPU 與記憶體單價收。兩家單價幾乎一致，約 $0.0504/vCPU-hour + $0.0162/GiB-hour（截至 2026-06，多來源一致）。E2B 另有 Pro 等級的月費（一份來源列 $150/月，換取更長 session 與更高並發，待官方頁核實）；Daytona 免費額度給到 $200 compute credit + 5GB 儲存、免信用卡。Modal 也是按秒、按 wall-clock 拆成 CPU、記憶體、GPU 三條獨立計價：CPU 基準約 $0.0000131/core/秒、記憶體約 $0.00000222/GiB/秒、H100 約 $0.001097/秒（約 $3.95/小時）；但要注意 Modal Sandbox 會強制非搶占式定價，CPU 實收約 $0.00003942/core/秒，是一般 function 基準的約 3 倍（截至 2026-06，依 region 與搶占設定浮動）。

Vercel Sandbox 與 Cloudflare 走 active CPU：只有程式碼**真的在燒 CPU** 的時間才算 vCPU 費。Vercel 的 active CPU 是 $0.128/vCPU-hour，記憶體 $0.0212/GB-hour（記憶體仍按 wall-clock 全程計），快照 $0.023/GB-month。關鍵在那句「等 I/O 不算 active CPU」——agent 大量時間在等 LLM 回應、等 API、等資料庫，這段時間 Vercel 不收 vCPU 費，wall-clock 計費的 E2B/Daytona 卻照收。所以單看 $0.128 vs $0.0504 會得出錯誤結論：對「忙 5%、等 95%」的互動式 agent，active CPU 模型很可能更便宜；對「CPU 從頭忙到尾」的批次轉檔、編譯、跑測試，wall-clock 反而帳單更平、更好預估。Cloudflare 在 GA 時也明確上了 active CPU 定價，只收實際用掉的週期。

順帶一提兩個 raw primitive：Fly Machines[^fly-machines] 是更低階的 microVM 原語，給你近乎裸機的控制但要自己處理生命週期與安全收斂；Northflank 則把沙箱包進更完整的 PaaS[^paas]。兩者都能拿來當 agent 沙箱，但都需要你補比較多基礎設施膠水，這篇不展開。

下表把核心維度並排（單價與冷啟動皆截至 2026-06，來源見文末；冷啟動數字多為第三方/競品 benchmark，視為量級非定值）：

| 廠商 | 計費模型 | vCPU 單價 | 隔離原語 | 冷啟動 | 快照/暫停 | 最適場景 |
| --- | --- | --- | --- | --- | --- |
| E2B | wall-clock | ~$0.0504/vCPU-hr + $0.0162/GiB-hr | Firecracker microVM | ~150ms | 暫停存「檔案系統+完整記憶體」，resume ~1s，可存 30 天 | 跑未審查程式碼、要硬體級隔離 |
| Daytona | wall-clock | ~$0.0504/vCPU-hr + $0.0162/GiB-hr | 預設 Docker（可選 Kata） | ~90ms（預熱可 ~27ms） | 有狀態快照，$0.023/GB-month | per-call 延遲敏感的互動式產品 |
| Modal | wall-clock（按秒，三項分計） | sandbox ~$0.00003942/core/秒 | gVisor | 較高 | 有 | GPU 工作負載、超大並發（50,000+） |
| Vercel Sandbox | active CPU | $0.128/vCPU-hr（僅 active）+ $0.0212/GB-hr 記憶體 | Firecracker microVM | 中等 | 快照存檔案系統+套件，$0.023/GB-month | 已在 Vercel 生態、I/O-bound agent |
| Cloudflare Sandboxes | active CPU | 依 active CPU（GA 公布） | Containers + V8 isolate 兩層 | 中等 | snapshot-based session recovery | 已在 Cloudflare/Workers 生態、邊緣場景 |

## 快照與分叉：把「重建環境」的成本攤掉

對 agent 而言，快照（snapshot/pause）不是錦上添花，而是省錢與省延遲的核心機制——裝完依賴、跑完 setup 後存一個 snapshot，下次直接 resume，跳過整段冷啟動與安裝。但各家「快照」的含義差很多，這裡只比有無與粒度，營運實作細節（egress 控制、分層防禦）見本期第 5 篇。

E2B 的 pause/resume 最完整：它捕捉的不只是檔案系統，還包含**完整記憶體狀態**——執行中的 process、載入的變數、堆上的資料都在內。resume 約 1 秒就回到暫停當下的狀態，最長可暫停 30 天（過期刪除）。代價是 pause 時間隨記憶體增長，約每 1GB RAM 要 4 秒，8GB 的 sandbox 暫停一次約 32 秒（截至 2026-06）。這種「連記憶體一起凍結」的能力，是讓 agent 跨 session 接續執行的關鍵，也是 fork（從同一個快照分叉出多條探索分支）的基礎。

Vercel Sandbox 的快照偏向「環境快照」：存檔案系統與已安裝套件，restore 後可跳過依賴安裝、也能分享給隊友或為長任務 checkpoint——但語意上更接近「裝好的鏡像」而非「凍結的執行狀態」。Daytona 有有狀態環境快照，定價 $0.023/GB-month，撐起跨 session 的持久 agent。Cloudflare 在 GA 時把 snapshot-based session recovery 列為新功能，搭配 PTY 終端、持久 code interpreter、檔案系統監看一起推；同期（2026-04）上線 RPC transport 並棄用 WebSocket transport，2026-06-09 的 changelog 又棄用了部分舊 Sandbox SDK 功能——這意味著 Cloudflare 這條線雖然背靠大平台，但 API 還在快速翻動，導入時要盯著 changelog。

一句話：要「凍結整個執行狀態並分叉」選 E2B 最成熟；只要「跳過環境重建」各家都行；Cloudflare 功能在補齊但介面未穩。

## 怎麼選：先定生意型態，再比數字

把上面收斂成可執行的決策。**跑的是 agent 隨手生成、完全未經審查的程式碼，安全是第一順位**——選 E2B，Firecracker 給你每個 session 一顆專屬 kernel，逃逸門檻最高；Daytona 預設 Docker 共享 host kernel，一次逃逸波及同主機其他 sandbox，要走 Daytona 就務必 opt-in Kata，別用預設。**產品是面向終端使用者、每次點擊都要 sub-100ms 起一個沙箱**——選 Daytona，約 90ms（預熱池 ~27ms）的冷啟動是它最硬的賣點，前提是你能接受用隔離強度換速度，或自己補 Kata。**工作負載吃 GPU、或要同時開到上萬個 session**——選 Modal，gVisor 對「半信任」程式碼夠用，GPU 全家桶與規模是別家難比的；但若程式碼完全不可信，gVisor 的隔離不如 microVM 硬，要自行評估。**團隊已經重押 Vercel 或 Cloudflare 生態**——直接用同名 Sandbox，省下的整合與運維成本通常比單價差更值錢，而且兩家的 active CPU 計費對 I/O-bound 的 agent 很可能更便宜。

最後三個提醒，避免被比較文帶偏。其一，冷啟動數字幾乎全來自第三方 benchmark 或某廠商自家 blog（Northflank、Blaxel、Modal 的對比文都在賣自己的東西），且高度依賴 region、鏡像大小、預熱與否——把它當量級，別當合約 SLA。其二，單價不能直接相減，先確認是 wall-clock 還是 active CPU，再用你真實的「忙/等」比例去估有效成本。其三，這個市場 2026 上半年仍在劇烈變動（Cloudflare 兩個月內就棄用了 transport 與部分 SDK），導入前務必回官方定價頁與 changelog 核一次數字，本文所有數字皆標「截至 2026-06」。

[^e2b]: 一家專做「給 AI 跑未審查程式碼」的執行環境的新創（名稱取自 environment-to-bytecode 之意）。它建在 Firecracker microVM 上，每個沙箱一顆專屬 kernel，主打硬體級隔離與完整的暫停/恢復（含記憶體狀態）能力，是本篇五家裡隔離最硬的一檔。
[^ephemeral]: 短暫、用完即丟的。形容沙箱「為單次任務臨時開、跑完就銷毀、不長期保留狀態」的特性。這種設計能降低被長期潛伏攻擊的風險，也讓計費以使用時段為單位；與之相對的是有持久狀態、需跨 session 保存的環境。
[^daytona]: 原為雲端開發環境（dev environment）工具，2025 年轉型專攻「安全執行 AI 生成程式碼」的基礎設施。它主打全市場最快的冷啟動，代價是預設用共享 host kernel 的 Docker 容器，隔離較弱；要 microVM 級安全得自己改用 Kata。
[^kata]: Kata Containers，一個開源專案，讓容器實際跑在輕量虛擬機裡，從而拿到 microVM 等級的硬體隔離，卻保留標準容器的使用介面與 Kubernetes 整合。底層 VMM 可換成 Firecracker、Cloud Hypervisor 或 QEMU，常被當成「Docker 太弱、又想沿用容器生態」時的折衷。
[^modal]: 一個 Python 原生的 serverless 運算平台，主打 GPU 工作負載與超大規模並發。它的沙箱用 gVisor 隔離，賣點不是最硬的隔離，而是把 agent 推理、模型訓練與沙箱執行放在同一個平台、能擴展到上萬個並發 session。
[^vercel-sandbox]: 部署平台 Vercel 推出的沙箱服務，底層同樣是 Firecracker。它的價值不在隔離本身有何獨到，而在「你本來就在 Vercel 生態」——和 Functions、部署管線共用同一套帳號與開發體驗，並採對 I/O 密集 agent 較划算的 active CPU 計費。
[^cf-sandboxes]: Cloudflare 於 2026 年 4 月正式推出的沙箱服務，建在 Cloudflare Containers 上，採兩層架構：外層用 Workers 的 V8 isolate 做路由與輕量邏輯，內層才是容器化沙箱跑真正的程式碼。賣點是和 Workers、Durable Objects 與邊緣網路綁在一起。
[^ga]: General Availability，正式商用。指一項雲端服務脫離 beta/預覽階段、對所有人開放並提供正式支援與計費。對應的早期階段常稱 preview 或 beta，功能與介面在那時較不穩定。
[^fly-machines]: 雲端平台 Fly.io 提供的底層 microVM 原語，給開發者近乎裸機的控制權。它比託管沙箱更低階——你拿到的是會啟停的虛擬機，但生命週期管理、安全收斂等都得自己補，因此當 agent 沙箱用時需要寫不少基礎設施膠水。
[^paas]: Platform as a Service，平台即服務。介於 IaaS（純租虛擬機）與 SaaS（直接用軟體）之間的雲端形態，平台幫你打理執行環境、部署、擴展等基礎設施，你只管交程式碼。把沙箱包進 PaaS（如 Northflank）的好處是省運維，代價是彈性與底層控制較少。

---

**來源**

1. [Vercel Sandbox pricing and limits](https://vercel.com/docs/sandbox/pricing) — Vercel Docs，2026
2. [Containers and Sandboxes are now generally available](https://developers.cloudflare.com/changelog/post/2026-04-13-containers-sandbox-ga/) — Cloudflare Changelog，2026-04-13
3. [AI Sandbox pricing comparison (2026)](https://northflank.com/blog/ai-sandbox-pricing) — Northflank Blog（競品立場，數字需回官方核對），2026
4. [AI Code Sandbox Benchmark 2026 — Modal vs E2B vs Daytona](https://www.superagent.sh/blog/ai-code-sandbox-benchmark-2026) — Superagent（第三方 benchmark，方法依 region/鏡像浮動），2026
