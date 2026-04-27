---
title: 發版不用賭運氣：用 ECS 把部署與回滾流程產品化
order: 2
date: 2026-04-27
summary: 從 rolling update 到 blue/green，ECS 可以讓個人團隊把「安全發版」變成可重複的操作，而不是深夜手動儀式。
keywords: ECS rolling update deployment circuit breaker, ECS blue green deployment CodeDeploy, migrate CodeDeploy to ECS bluegreen, ECS service deployment failed EventBridge, CodePipeline ECS bluegreen action, AWS CDK ECS blue green
---

# 發版不用賭運氣：用 ECS 把部署與回滾流程產品化

## TL;DR

- 個人 SaaS 的部署策略建議分兩層：先用 rolling update + circuit breaker，流量與客訴上來後再導入 blue/green。[^rolling]
- ECS deployment circuit breaker 會在服務無法達穩態時標記失敗，並可啟用自動回滾，降低壞版本停留時間。[^circuit]
- 如果你需要更嚴格流量切換（測試 listener、分批導流），可用 ECS blue/green（含 CodeDeploy 或原生路徑），但要搭配明確健康檢查規範。[^bg]

多數個人開發者不是不會寫程式，而是缺一條「不會炸站」的發版流水線。ECS 的價值在這裡非常務實：它幫你把**部署狀態機**做出來，讓你知道目前是 IN_PROGRESS、COMPLETED，還是 FAILED，並能用事件驅動告警。[^eventbridge]

### 第 1 層：rolling update + circuit breaker

對大部分剛收第一批付費用戶的 SaaS，rolling update 已足夠：新舊 task 交錯替換，不需要雙環境整套並存。關鍵是把 deployment circuit breaker 打開，並啟用 rollback。這樣當新版本容器一直健康檢查失敗，ECS 會停止推進壞部署，而不是持續替換直到整站不可用。

官方文件也給出失敗門檻計算邏輯（與 desired count 有關，且有最小/最大閾值限制），這代表你可以對「何時判定部署失敗」有可預期行為。[^threshold]

### 第 2 層：需要更細流量控制時再上 blue/green

當你開始做高風險改版（例如資料結構、核心 API、計費流程），blue/green 的價值會上升。你可以先把流量導到測試 listener 驗證，再逐步切換生產流量；若異常可快速切回。

2026 年的實務上，ECS blue/green 已不是單一路徑。你可以依現有 IaC、CDK 或 pipeline 架構，選 CodeDeploy 或原生 ECS blue/green 方案。重點不是選哪個名詞，而是先確保三件事：

1. 健康檢查 URL 與 timeout 不是預設亂填。
2. 資料庫 migration 採向後相容（expand/contract）。
3. 切流策略與回滾責任人事先寫進 runbook。

### 用事件把部署納入營運儀表板

ECS 服務部署狀態變更可送到 EventBridge。這件事對一人團隊特別重要：你不可能一直盯 console，但你可以把 `SERVICE_DEPLOYMENT_FAILED` 轉成 Slack/Email/Pager 通知。當失敗訊號是自動化出來的，發版就能從「感覺安全」進化成「可觀測安全」。

一句話總結：**先把部署變可靠，再談部署變華麗**。對個人 SaaS，最有價值的功能不是 canary 百分比，而是凌晨兩點出錯時，你能不能在 5 分鐘內確定系統已回到可服務狀態。

[^rolling]: **Rolling update（ECS）** 是預設漸進替換策略，運維成本低，適合多數 MVP 與早期產品。
[^circuit]: **Deployment circuit breaker** 可在服務無法達穩態時停止部署，並可自動回滾到上一個成功版本。
[^bg]: **Blue/green deployment** 透過雙環境與流量切換降低高風險改版衝擊，代價是流程與基礎設施較複雜。
[^eventbridge]: **EventBridge deployment events** 可把部署狀態接入告警與自動化修復流程。
[^threshold]: circuit breaker 的失敗判定有固定門檻模型，避免團隊各自用主觀標準判斷是否回滾。

---

來源：
1. [How the Amazon ECS deployment circuit breaker detects failures](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-circuit-breaker.html) — AWS Documentation，2026-04 查閱
2. [DeploymentCircuitBreaker API Reference](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeploymentCircuitBreaker.html) — AWS Documentation，2026-04 查閱
3. [CodeDeploy blue/green deployments for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html) — AWS Documentation，2026-04 查閱
4. [Choosing between Amazon ECS Blue/Green Native or AWS CodeDeploy in AWS CDK](https://aws.amazon.com/blogs/devops/choosing-between-amazon-ecs-blue-green-native-or-aws-codedeploy-in-aws-cdk/) — AWS DevOps Blog，2026-02-26
