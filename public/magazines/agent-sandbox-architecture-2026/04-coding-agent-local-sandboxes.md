---
title: 跑在你筆電上的沙箱：Claude Code、Codex 與 nono
order: 4
date: 2026-06-26
summary: Claude Code、OpenAI Codex 與 nono 怎麼用 Seatbelt、bubblewrap、Landlock、seccomp 把本機 agent 關住？比較預設值與逃逸口。
keywords: Claude Code sandbox Seatbelt bubblewrap proxy allowlist, OpenAI Codex Landlock seccomp bubblewrap codex-linux-sandbox, nono Landlock Seatbelt irreversible no escape hatch, Codex workspace-write default sandbox network disabled, dangerouslyDisableSandbox allowUnsandboxedCommands, Claude Code egress proxy domain fronting exfiltration
---

# 跑在你筆電上的沙箱：Claude Code、Codex 與 nono

雲端託管沙箱（第 3 篇）解決的是「別人的機器替你跑 agent」。但 2026 年絕大多數開發者每天打交道的，是跑在自己筆電上、直接讀寫工作目錄的本機 coding agent。這時沒有 microVM、沒有獨立 VM 邊界可用，唯一能把 agent 關住的，是作業系統內建的安全模組：macOS 的 Seatbelt[^seatbelt]、Linux 的 bubblewrap[^bubblewrap] 加 Landlock[^landlock] 與 seccomp[^seccomp]。本篇只談這一層——同樣是 OS 原語，Claude Code、OpenAI Codex 與 nono 三者怎麼組裝、預設關到多緊、以及最關鍵的：被關住之後還能不能解開。

## TL;DR

- **預設值差異最大**：Codex 是少數預設就把沙箱打開的主流 agent（預設 `workspace-write`、無網路、寫入限工作區）；Claude Code 的 Bash 沙箱要靠 `/sandbox` 或設定 `sandbox.enabled` 開啟，預設不啟用；nono 不是 agent，而是你手動拿來「包住」agent 的外殼。
- **逃逸口是分水嶺**：Claude Code 內建 `dangerouslyDisableSandbox` 逃生口，指令因沙箱失敗時可在沙箱外重試（走一般權限流程要你批准）；nono 走相反路線——`apply()` 之後限制不可逆、沒有 API 能放寬、「連 nono 自己都拿不掉」。
- **網路是最弱的一環**：三者的檔案系統隔離都是 kernel 強制、相對硬；但 Claude Code 的內建 proxy 只比對 client 自報的 hostname、不做 TLS 終止，官方文件自承可被 domain fronting 繞過——allowlist 放寬到 `github.com` 這種大域名就可能變成外洩通道。

## 本機沙箱到底要擋什麼

本機 agent 的危險來自一個簡單事實：它用「你的權限」在跑。它能讀你的 `~/.ssh`、`~/.aws/credentials`，能把檔案寫進 `~/.bashrc`，能在 `npm install` 的 postinstall script 裡 curl 任意網址。所以本機 OS 沙箱要同時管住兩件事：檔案系統（讀什麼、寫什麼）與網路（連得到誰）。Claude Code 官方文件講得很直白——有效的沙箱需要檔案與網路兩道都到位：少了網路隔離，被攻陷的 agent 能把 SSH key 外洩；少了檔案隔離，agent 能改系統資源去重新拿到網路。

OS 原語的價值在於「強制點」不在模型、而在核心。Claude Code 的文件把這點說得很清楚：權限規則是在指令跑之前、根據指令字串判斷；沙箱邊界則是作業系統施加在執行中行程上的，所以「不管模型選了跑什麼、就算被允許的指令做了名字以外的事」，邊界依然成立。這也是本篇三個工具的共同前提——它們都不靠 LLM 自律，而是把規則下放到 Seatbelt、Landlock、seccomp 這些 kernel 機制，並且讓每個子行程都繼承同一道邊界（bash 跑 npm、npm 跑 postinstall、postinstall 跑 curl，四個行程都在同一個容器裡，靠生子行程逃不出去）。

## Claude Code：可退回的沙箱

截至 2026-06，Claude Code 的 Bash 沙箱在 macOS 用 Seatbelt、Linux 與 WSL2 用 bubblewrap（WSL1 與原生 Windows 不支援，Windows 要在 WSL2 裡跑）。Linux 端額外依賴 `socat`（把網路流量導去 proxy 的中繼）與一個選用的 seccomp filter（用來阻擋 Unix domain socket）。

檔案系統預設值是「寬讀嚴寫」：寫入只限當前工作目錄、其子目錄、以及 session 暫存目錄；讀取則是整台電腦——文件明白提醒，這個預設「仍然允許讀取 `~/.aws/credentials` 和 `~/.ssh/`」，要擋得自己用 `sandbox.credentials` 或 `denyRead` 列出來。換句話說，憑證外洩風險在預設下是開著的，得手動關。

網路走的是「沙箱外的 proxy」。沙箱內的流量透過連到沙箱外 proxy 的通道送出，由 proxy 依 hostname 強制 allowlist：預設沒有任何域名預先允許，第一次需要新域名時提示你批准；管理端可設 `allowManagedDomainsOnly` 改成直接擋掉、不提示。但這道網路門有個被官方點名的弱點：內建 proxy「不終止也不檢查 TLS 流量」，只看 client 自報的 hostname，所以沙箱內的程式可以用 domain fronting[^domain-fronting] 之類手法連到 allowlist 以外的主機。把 `github.com` 這種大域名加進白名單，等於開了一條潛在的資料外洩路徑。要真正擋住，得換成會終止 TLS 並檢查流量的 custom proxy。

Claude Code 最具特色、也最具爭議的是逃生口。文件寫得很清楚：有些指令根本沒法在沙箱裡跑，與其讓任務失敗或逼你關沙箱，「當指令因沙箱限制失敗時，Claude 會分析失敗原因，並可能用 `dangerouslyDisableSandbox` 參數重試」——重試的指令在沙箱外跑，因此回到一般權限流程、需要你批准。這是個務實設計：它讓沙箱可以預設更緊，因為總有後路。但安全意涵也很實在——沙箱不是不可逾越的牆，而是「預設關住、卡住就申請開門」的閘門。想拿掉這條後路，管理端可設 `allowUnsandboxedCommands: false`（`/sandbox` 面板顯示為 Strict sandbox mode），此時 `dangerouslyDisableSandbox` 會被完全忽略，指令要嘛在沙箱裡跑、要嘛得明確列進 `excludedCommands`。再配上 `failIfUnavailable: true`（缺 bubblewrap 就拒絕啟動而非降級），才接近一道硬性安全閘。

值得補一句：在無特權 container 裡，bubblewrap 沒法掛新的 `/proc`，得開 `enableWeakerNestedSandbox`，文件直言這「大幅削弱安全性」，只有在外層 container 已經提供隔離時才該用。`docker` 指令本身與沙箱不相容，官方建議直接丟進 `excludedCommands` 在沙箱外跑——這也提醒：本機沙箱的覆蓋面是有破口的。

## OpenAI Codex：預設就開、多層疊加

Codex 的差異化定位是「預設啟用沙箱」。截至 2026-06，它在 git 工作區下預設 `workspace-write` 搭配 on-request 批准策略，預設無網路存取、寫入限當前工作區；若目錄沒在版本控制下，預設更收緊成 read-only。要開網路得明確把 `sandbox_workspace_write.network_access` 設成 `true`。這跟 Claude Code「預設不開、要你主動 `/sandbox`」恰好相反，也是 Codex 常被稱為唯一預設啟用沙箱的主流 agent 的依據。

Linux 端的實作是多層疊加，由獨立 helper（codex-linux-sandbox）執行。bubblewrap 是主要後端（自 v0.100.0 起從 optional 升為 vendored 編進建置，因此預設可用），會優先用 PATH 上（工作目錄之外）找到的 `bwrap`，找不到才退回隨附的 binary。檔案系統預設唯讀，靠 `--ro-bind / /` 把整個根目錄唯讀掛載；可寫根之下的受保護子路徑（例如 `.git`、解析後的 `gitdir:`、`.codex`）再用 `--ro-bind` 重新設回唯讀；路徑中的 symlink 與可寫根內不存在的受保護路徑，則靠把 `/dev/null` 掛上去封掉——這是把 symlink 逃逸與「先建路徑再寫」這類手法堵死。

行程隔離上，helper 明確用 `--unshare-user` 隔離 user namespace、`--unshare-pid` 隔離 PID namespace，並施加 `PR_SET_NO_NEW_PRIVS`[^no-new-privs]（禁止透過 setuid 等手段重新拿到特權）外加一個 in-process 的 seccomp 網路 filter。網路若是「不走 proxy 的限制」就用 `--unshare-net` 直接斷網；若走 managed proxy mode，則改用 `--unshare-net` 加一座 TCP→UDS→TCP 的橋接，且之後 seccomp 會封掉使用者指令新建 AF_UNIX/socketpair 的能力。舊的 Landlock 路徑仍保留為 fallback（`features.use_legacy_landlock = true`），但只在分割式檔案策略與舊模型等價時才套用。macOS 端則和 Claude Code、nono 一樣落在 Seatbelt 上。

實務上 Codex 的痛點是巢狀環境：在 Docker 裡跑它的沙箱可能失敗，因為 host 或 container 擋掉了 namespace、setuid 的 bwrap 或 seccomp——這跟 Claude Code 在無特權 container 裡需要 `enableWeakerNestedSandbox` 是同一類問題，本機沙箱遇到「沙箱套沙箱」普遍棘手。

## nono：不是 agent，是不可逆的外殼

nono（Apache-2.0，由 Sigstore[^sigstore] 作者 Luke Hinds 發起，四個月內超過 2,600 顆星）跟前兩者性質不同：它不是 coding agent，而是一個你拿來「包住」任何 agent 或 POSIX 行程的 capability shell。它的賣點正好對著 Claude Code 的逃生口：不可逆。

技術底層和大家一樣——Linux 用 Landlock、macOS 用 Seatbelt——但 nono 把這套原語的「一次性、不可撤回」特性當成核心賣點。官方說法是：不同於攔截並過濾操作的 policy-based 沙箱，nono 用 OS 安全原語打造一個「未授權操作在結構上不可能」的環境。使用模型是 allow-list：明確授予檔案路徑（可分讀、寫、讀寫）、網路與指令的存取，例如 `nono run --allow .` 給當前目錄讀寫、`nono run --read ./src --write ./output` 分別指定。關鍵在 `apply()`（或 `apply(caps)`）一旦執行，限制即不可逆、結構性地由 kernel 強制——文件直白寫著「沒有放寬的 API，沒有逃生口，連 nono 自己都拿不掉」。

把它跟 Claude Code 並排，「可逆 vs 不可逆」這條軸線就清楚了。Claude Code 的 `dangerouslyDisableSandbox` 是刻意保留的後路：對開發者體驗友善（卡住就申請開門），但這意味著只要使用者按下批准，被攻陷的 agent 就能在沙箱外跑指令——人類的「Yes」成了邊界的一部分。nono 把這條後路徹底封死：套用之後就算 agent（或攻擊者）拿到完整控制權，也沒有任何路徑能放寬限制，因為放寬的能力在 kernel 層根本不存在。代價是彈性：用 nono 你得在啟動前就把 agent 整段工作會用到的路徑與網路目的地全部想清楚、一次給足，跑到一半才發現少給了，只能重來。

這也是本機 OS 沙箱的核心取捨。可逆沙箱（Codex 的 `danger-full-access`、Claude Code 的退回機制）把「要不要放寬」交給人在 runtime 判斷，順手但把人為誤判納入威脅面；不可逆沙箱（nono）把判斷前移到啟動時、之後概不通融，安全上更硬，但要求你對 agent 的需求有近乎完整的先驗知識。沒有哪個對所有情境都對——但選型時務必認清：你那道「沙箱」到底是一面牆，還是一道隨時能被一個「Yes」打開的閘門。

[^seatbelt]: macOS 內建的應用程式沙箱機制（正式名稱 App Sandbox / sandbox-exec）。它讓系統用一套政策語言限制行程能存取哪些檔案、網路與系統服務，由 kernel 強制執行。Claude Code、Codex、nono 在 macOS 上都落在 Seatbelt 之上來關住本機 agent。
[^bubblewrap]: Linux 上的輕量沙箱工具（指令為 `bwrap`），用 namespace、bind mount 等 kernel 機制把一個行程關進受限的檔案系統與行程視圖裡。它是 Flatpak 等專案的隔離核心，也是 Claude Code 與 Codex 在 Linux 端的主要沙箱後端。
[^landlock]: Linux kernel 5.13 起內建的安全模組，讓「沒有特權」的一般行程也能替自己加上不可撤回的檔案存取限制。相較需要 root 設定的傳統機制，它的特點是程式可自我約束、套用後無法放寬，nono 正是用這個特性實作「不可逆沙箱」。
[^seccomp]: secure computing mode，Linux 的系統呼叫過濾機制。它能對一個行程能發出哪些 syscall 設白名單或黑名單，常用來把可用的 kernel 介面收到最小集合。本機 agent 沙箱用它來封掉危險呼叫（例如新建特定 socket），縮小攻擊面。
[^domain-fronting]: 一種規避網路封鎖的技巧：連線時對外（TLS SNI / 自報 hostname）顯示一個被允許的域名，實際連到的卻是另一台主機。只看 client 自報 hostname、不終止檢查 TLS 的代理會被它騙過，因此把大型 CDN 域名加進白名單可能無意間開出外洩通道。
[^no-new-privs]: 一個 Linux 行程旗標（`PR_SET_NO_NEW_PRIVS`）。一旦設定，該行程及其所有子行程就再也無法透過 setuid 程式等手段取得比現在更高的權限，等於把提權的後門焊死，是沙箱防止「執行某個特權程式翻身」的常用基礎防線。
[^sigstore]: 一個開源軟體簽章與供應鏈安全專案，讓開發者免管金鑰就能對軟體成品做可驗證簽章。提它是為了交代 nono 作者 Luke Hinds 的背景——他在開源安全工具圈有長期累積，這也部分解釋了 nono 為何短時間內就獲得高關注。

---

**來源**

1. [Configure the sandboxed Bash tool — Claude Code Docs](https://code.claude.com/docs/en/sandboxing) — Anthropic / Claude Code 官方文件，2026
2. [codex/codex-rs/linux-sandbox/README.md](https://github.com/openai/codex/blob/main/codex-rs/linux-sandbox/README.md) — OpenAI Codex 官方 GitHub，2026
3. [nono — kernel enforced sandboxing for AI agents](https://github.com/always-further/nono-ts) — always-further / Luke Hinds，2026
4. [Introducing nono: A Secure Sandbox for AI Agents](https://dev.to/lukehinds/introducing-nono-a-secure-sandbox-for-ai-agents-1lo2) — Luke Hinds, DEV Community，2026-02
