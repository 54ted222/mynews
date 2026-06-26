---
title: 從容器到 microVM：四種隔離原語的取捨
order: 2
date: 2026-06-26
summary: 容器、gVisor、Firecracker microVM、WebAssembly 各自怎麼隔離？拆解冷啟動、隔離強度與 overhead 三者為何難以兼得。
keywords: Firecracker microVM boot time snapshot restore overhead, gVisor syscall interception overhead user-space kernel, WebAssembly capability based security host imports, V8 isolate vs microVM cold start serverless, Kata Containers vs Firecracker vs gVisor isolation benchmark, WASI filesystem networking limitations production, container is not a sandbox runc CVE 2026
---

# 從容器到 microVM：四種隔離原語的取捨

要安全地跑「模型剛剛寫出來的程式碼」，第一個被推翻的假設就是「容器等於沙箱」。容器把資源用 namespace[^namespace] 與 cgroup 藏起來，但容器內的程序仍然直接對**同一顆 host kernel** 發 syscall[^syscall]——kernel 的一個邏輯漏洞就是一次逃逸。2025 年底揭露的三個 runc CVE（CVE-2025-31133、CVE-2025-52565、CVE-2025-52881）正是這條路徑的活教材：透過符號連結替換 `/dev/null`、競態繞過 `maskedPaths`，攻擊者能取得對 host 檔案的任意寫入甚至完整 breakout（截至 2025-11）。對 AI agent 而言，產生並執行未經審查的程式碼是常態，這類風險的暴露面遠高於傳統應用。

於是業界在 2026 收斂到四條隔離路線：標準容器、gVisor、Firecracker microVM、WebAssembly（含 V8 isolate）。它們不是「誰比較好」，而是在**冷啟動、隔離強度、overhead** 這個三角上各佔一角——你最多挑兩個，第三個一定要讓步。

## TL;DR

- 四種原語對應四種威脅模型：容器信任 kernel、gVisor 把 kernel 搬到 user space 攔截 syscall、microVM 用 KVM 給每個 session 一顆專屬 kernel、WASM 預設什麼都碰不到。
- 冷啟動 vs 隔離強度 vs overhead 是個三角：V8 isolate <5ms 啟動但逃逸會波及整個 host 程序；Firecracker 硬體隔離但要 KVM；gVisor 不用 VM 但 syscall 重的 workload 慢 10–30%（截至 2026）。
- microVM 的關鍵轉折是 snapshot restore 已進入「夠快」級距（約 3–8ms，p99 < 9ms），把「強隔離一定慢」這個老論點打掉了一半。

## 容器與 gVisor：共享 kernel，與「假裝有自己的 kernel」

標準容器（runc/crun）的隔離邊界就是 Linux kernel 本身。它幾乎沒有 overhead、啟動以毫秒計、能跑任何 Linux binary——代價是攻擊面等於整顆 kernel 的 syscall 表（數百個進入點）。對「自己人的 workload」這完全夠用；對「模型寫的程式碼」，共享 kernel 就是單點故障。

gVisor[^gvisor] 的解法是插一層 user-space kernel。它的 Sentry 攔截 guest 發出的每一個 syscall，自己用 Go 重新實作了 kernel 的語意，再以極小的白名單對 host 發真正的 syscall。應用程序看到的「kernel」其實是 Sentry，真正的 host kernel 攻擊面被大幅縮小。代價是每次 syscall 都多一次攔截與 user-space 模擬：benchmark 上 syscall 密集型 workload 約慢 10–30%，CPU-bound 受影響小（運算本來就在 user space），I/O 與網路密集型最痛——有一份對比顯示 gVisor 讓網路吞吐掉約 34%，而 microVM 路線的 Kata 只掉約 6%（截至 2026，數字依硬體與版本浮動，視為量級而非定值）。攔截機制本身也在進化：gVisor 從早期的 ptrace 轉到 KVM，2023 後預設改用 seccomp-trap 的 Systrap，把 context switch 成本壓下來；Google 內部有大規模使用者回報多數應用 overhead 低於 3%。重點是這個數字**高度取決於 workload**，不能拿單一 benchmark 一概而論。

## Firecracker microVM：每個 session 一顆真的 kernel

Firecracker[^firecracker] 把賭注押在硬體虛擬化。它是 AWS 用 Rust 寫的輕量 VMM[^vmm]，透過 KVM[^kvm] 給每個 microVM[^microvm] 一顆**專屬的 guest kernel**——guest 與 host 不再共享 kernel，要逃逸得先攻破 KVM hypervisor，這個門檻顯著高於攻破一個共享 kernel 的邏輯漏洞。Firecracker 刻意砍掉傳統 QEMU 的龐大裝置模型，只留下極少數虛擬裝置，把每台 VM 的攻擊面與記憶體佔用壓到很低。

過去反對 microVM 的理由只有一個：慢。冷啟動約 100–200ms（一份對比給 512MB VM 約 120ms，比 Kata 3.0 的約 480ms 快約 4 倍）。但 2026 真正的轉折是 snapshot/restore。Firecracker 把運行中 microVM 的記憶體、裝置狀態序列化成檔，還原時用 `MAP_PRIVATE` 對記憶體做 on-demand 載入與 copy-on-write，restore 落在約 3–8ms 級距（AWS Lambda SnapStart 量到 p50 約 3.2ms、p99 約 8.7ms）。換句話說，「per-request 開一台專屬 VM」第一次變得實際。

但 snapshot 不是免費午餐，且它把問題從「速度」搬到「正確性」。Firecracker 官方文件明白警告：重複從**同一份 snapshot** 還原會產生危險的重複——snapshot 裡可能含有識別碼、亂數種子、guest OS 的 entropy pool、甚至加密 token。官方靠 VMGenID[^vmgenid]（每次 restore 更新的 16-byte 隨機識別碼）讓 guest 偵測到自己是被還原的、進而重播 PRNG，但 user-space 應用的去重得自己負責。此外網路連線不保證跨 restore 保留、cgroups v1 下 restore 延遲偏高（建議 v2）。Firecracker 的威脅模型假設 host、API 通道與 snapshot 檔本身是可信的——加密與認證留給使用者。Kata Containers 走的是同一條 microVM 路線（底層可換 Firecracker / Cloud Hypervisor / QEMU），用更高的 Kubernetes 整合度換取稍高的 overhead。

## WebAssembly 與 V8 isolate：預設什麼都碰不到

第四條路線乾脆繞過整個 Linux kernel。WASM module 預設是 inert 的——它碰不到檔案系統、網路或任何外部資源，**除非 host 在 instantiation 時顯式傳入 capability import**。這是 ABI 層的 capability-based security[^capability]：模組能做什麼，完全由 host 遞進去的那組 function 決定，預設 deny。V8 isolate[^v8-isolate] 是同一哲學的引擎級實作，啟動 <5ms、每個 isolate 記憶體 <1MB，Cloudflare Workers 量到 p99 冷啟動 <5ms，比 Firecracker 低約兩個量級。微軟 2025-08 的 Wassette 把這套模型搬給 agent：基於 Wasmtime、透過 MCP 跑 WASM component，deny-by-default 加細粒度權限。

代價在隔離強度與 workload 適配兩處。隔離強度上有個常被忽略的逆轉：V8 isolate 是**同一個 host 程序內**的多租戶，一次 sandbox escape 會同時波及該程序內所有租戶；而 Firecracker 的逃逸需要攻破 hypervisor——這也是 2026 不少平台重新檢視「當初純為效能選 V8」是否值得的原因。workload 適配上限制更硬：V8 isolate 只能跑 JS / WASM，沒有檔案系統、沒有持久狀態、不能跑任意 Linux binary。WASM 這邊，WASI[^wasi] 0.1（WASIp1）只有基本 POSIX 能力、**沒有網路**；WASI 0.2（2024-01）才靠 Component Model 補上 HTTP / TCP / UDP，但多執行緒支援仍是缺口——有研究直指「缺乏 multi-threading 嚴重侷限其使用情境」，當前 WASM container 在多核 workload 上跑不贏傳統 Linux container。結論是：截至 2026，WASM/isolate 在 edge function 與 FaaS 已是 production-ready，但要把「模型寫出來、會開 thread、會讀寫檔、會裝任意套件」的真實 agent workload 整碗端進去，仍然力有未逮。

## 怎麼選：把三角攤開看

| 原語 | 冷啟動 | 隔離強度 | overhead | 適合的 workload |
| --- | --- | --- | --- | --- |
| 標準容器（runc） | ms 級 | 弱（共享 kernel） | 近零 | 可信的自家程式 |
| gVisor | 數十 ms | 中（user-space kernel 攔截 syscall） | syscall/IO 重者 10–30% | 不想開 VM 又要縮 kernel 攻擊面 |
| Firecracker microVM | 冷啟 ~100–200ms；restore ~3–8ms | 強（KVM 專屬 kernel） | 中（per-VM 記憶體 + KVM） | 跑任意 Linux binary 的不可信程式碼 |
| WASM / V8 isolate | <5ms | 視角度：ABI 層 capability deny-by-default，但同程序多租戶逃逸波及面大 | 近零 | JS/WASM、無檔案系統、edge/FaaS |

（上表數字為截至 2026 的量級對照，依硬體、版本與 workload 浮動，不應視為精確定值。）

實務上的取捨可以收成一句話：你最在意的是**啟動延遲、能跑什麼、還是逃逸後的爆炸半徑**？要跑模型生成的任意 Linux 程式碼、又要承受不信任，Firecracker（或其上的 Kata）是 2026 多租戶不可信程式碼的防守基線；workload 受控在 JS/WASM、追求極致密度與啟動速度，就走 isolate；只在 kernel 攻擊面與部署簡便間找平衡、無法做巢狀虛擬化，gVisor 是務實中間點；標準容器則留給你信得過的程式碼。沒有任何一種同時拿下「快、強、輕」——這個三角無法被消滅，只能被選擇。

[^namespace]: Linux kernel 的隔離機制，讓一群行程看到的系統資源（行程清單、網路、檔案掛載、使用者 ID 等）是被切割過的子集，是容器技術的基礎。搭配 cgroup（控制資源用量上限）就構成標準容器，但兩者都不改變「大家共用同一顆 kernel」這個前提。
[^syscall]: 系統呼叫。應用程式向作業系統 kernel 請求服務（開檔、連網、配記憶體等）的入口。Linux 有數百個 syscall，這整張表就是容器內程式攻擊 kernel 的攻擊面；gVisor 與 microVM 的核心差異，正是如何處理這些 syscall。
[^gvisor]: Google 開發的開源沙箱，用 Go 寫了一個跑在 user space 的「假 kernel」（稱為 Sentry），攔截容器內每個 syscall 自行處理，只用極小白名單對真正的 host kernel 發呼叫。好處是不必開虛擬機就大幅縮小攻擊面，代價是 syscall 密集的工作負載會變慢。
[^firecracker]: AWS 用 Rust 開發的開源輕量虛擬機監控器，最初為 Lambda 與 Fargate 而生。它砍掉傳統虛擬機的龐大裝置模型，只留極少數虛擬裝置，讓每台 microVM 啟動快、佔記憶體少，是目前多家託管沙箱（E2B、Vercel）跑不可信程式碼的底層。
[^vmm]: Virtual Machine Monitor，虛擬機監控器，又稱 hypervisor。負責建立並管理虛擬機、在虛擬機與實體硬體之間做仲介的軟體層。Firecracker 是一個刻意做得很小的 VMM，攻擊面比傳統的 QEMU 小很多。
[^kvm]: Kernel-based Virtual Machine。Linux kernel 內建的虛擬化功能，讓 CPU 的硬體虛擬化能力可被軟體使用。Firecracker、Kata 等 microVM 方案都站在 KVM 之上；也因為要用到它，這類方案在「虛擬機裡再開虛擬機」的巢狀環境裡常受限。
[^microvm]: 一種刻意精簡的虛擬機。它保留「每個實例一顆專屬 guest kernel、要逃逸得先攻破 hypervisor」的強隔離，卻砍掉傳統虛擬機的肥大裝置與開機流程，把啟動時間與記憶體佔用壓到接近容器，因此能做到「每個請求開一台 VM」。
[^vmgenid]: Virtual Machine Generation ID。一個 16 位元組的識別碼，每當虛擬機從快照被還原時就會更新，讓 guest 作業系統能偵測到「我是被複製/還原出來的」，進而重新播種亂數產生器。它是 microVM 快照功能避免「多台 VM 共用同一份亂數狀態」這個安全陷阱的關鍵機制。
[^capability]: 能力導向安全模型。與其事後檢查「這個操作允不允許」，不如一開始就只把需要的能力（一個能開某檔、連某網的權杖或函式）交給程式；沒拿到能力的事就根本做不到。WebAssembly 預設什麼都碰不到、要靠 host 顯式傳入能力，正是這個模型的體現，預設即拒絕。
[^v8-isolate]: V8（Chrome 與 Node.js 的 JavaScript 引擎）裡的一個獨立執行環境，有自己的堆積與物件空間。它啟動只要幾毫秒、佔記憶體不到 1MB，是 Cloudflare Workers 等邊緣平台高密度多租戶的基礎；但多個 isolate 共用同一個 host 行程，一次逃逸會波及同行程內其他租戶。
[^wasi]: WebAssembly System Interface。一套標準介面，讓原本只能在瀏覽器裡跑的 WebAssembly 也能存取檔案、網路等系統資源，目標是「一次編譯、各處安全執行」。0.1 版沒有網路能力，0.2 版才靠 Component Model 補上 HTTP/TCP/UDP，但多執行緒仍是缺口。

---

**來源**

1. [Snapshotting / snapshot-support.md](https://github.com/firecracker-microvm/firecracker/blob/main/docs/snapshotting/snapshot-support.md) — firecracker-microvm/firecracker 官方文件，2026
2. [Kata Containers vs Firecracker vs gVisor: Which container isolation tool should you use?](https://northflank.com/blog/kata-containers-vs-firecracker-vs-gvisor) — Northflank Blog，2026
3. [WASI and the WebAssembly Component Model: Current Status](https://eunomia.dev/blog/2025/02/16/wasi-and-the-webassembly-component-model-current-status/) — eunomia.dev，2025-02-16
4. [New runc vulnerabilities allow container escape: CVE-2025-31133, CVE-2025-52565, CVE-2025-52881](https://www.sysdig.com/blog/runc-container-escape-vulnerabilities) — Sysdig，2025-11
