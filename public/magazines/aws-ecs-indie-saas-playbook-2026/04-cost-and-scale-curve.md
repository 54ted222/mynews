---
title: 成本與擴張曲線：什麼時候 ECS 會幫你省，什麼時候會變貴
order: 4
date: 2026-04-27
summary: ECS 對個人 SaaS 的關鍵不是最低單價，而是把成本與流量變動綁在一起，讓你能用現金流節奏做技術決策。
keywords: AWS Fargate pricing vCPU memory, Fargate Spot interruption handling ECS, ECS Service Auto Scaling target tracking multiple metrics, ECS capacity providers Fargate Spot, EventBridge Scheduler ECS batch jobs, ECS cost optimization right sizing
---

# 成本與擴張曲線：什麼時候 ECS 會幫你省，什麼時候會變貴

## TL;DR

- Fargate 計價是按 vCPU、記憶體、作業系統/架構與儲存資源的使用時間計費，適合把基礎設施成本直接對齊產品負載。[^pricing]
- 省錢不是只看單價，而是把工作負載分層：即時流量走 Fargate，容錯批次可用 Fargate Spot，背景工作用排程 RunTask。[^spot]
- Auto Scaling 的 target tracking 可以同時看不同指標；早期最實用的是 CPU/Memory + ALB request 指標的組合。[^autoscaling]

談 ECS 成本時，最常見的誤區是拿「某台固定 VM 月租」直接比較。對個人 SaaS，你真正要優化的是**現金流風險**：在需求還不穩定時，避免為了尖峰預留太多固定成本；當產品成長時，又不要因為缺彈性而錯失收入。

### 成本拆法：把工作負載切三層

1. **在線 API / Web**：需要穩定低延遲，放 Fargate on-demand。
2. **可中斷工作（轉檔、離線分析、批次清理）**：優先評估 Fargate Spot。
3. **週期性任務（寄報表、重算配額）**：用 EventBridge Scheduler 觸發 ECS RunTask。

這樣切的價值是，你不必把所有 workload 都用同一個最高規格去跑。成本策略會更接近業務價值：賺錢路徑保守、非即時路徑激進。

### 擴張策略：先 right-size，再 auto-scale

很多團隊第一步就把 auto scaling 開到很積極，卻忽略 task CPU/Memory 配比根本不合理。結果是「自動擴張得很勤奮，但每個 task 都在浪費」。正確順序通常是：

- 先用觀測資料調整 task 規格（right-size）。
- 再設 target tracking 與 min/max task。
- 最後才引入更進階策略（多指標、尖峰前預熱、分時段 policy）。

ECS Service Auto Scaling 支援多個 target tracking policy（指標需不同），這讓你可以避免單一指標誤判。例如 CPU 正常但請求延遲升高，就用 ALB request/target response time 補判。

### 何時該換算盤

ECS/Fargate 不會永遠最便宜。當你的負載進入長時間高基線、且可預測時，EC2 capacity provider 或其他平台可能更划算。但在個人 SaaS 的前中期，ECS 的優勢往往是**用營運自動化換開發時間**。如果它讓你少掉一半基礎設施維護工時，即使雲單價略高，也可能是更好的商業決策。

你要追的不是「最低帳單」，而是「最好的時間-現金流轉換率」。ECS 的方便功能（排程、伸縮、部署、觀測）本質上都在做這件事：讓你把精力留在產品差異化，而不是重複造平台輪子。

[^pricing]: **AWS Fargate pricing** 依 vCPU、記憶體、作業系統/CPU 架構與額外儲存等資源使用時間計費。
[^spot]: **Fargate Spot** 適合可中斷工作負載，常與 capacity provider strategy 搭配。
[^autoscaling]: **ECS Service Auto Scaling target tracking** 可對不同指標設定多條策略，支援更穩健的彈性行為。

---

來源：
1. [AWS Fargate Pricing](https://aws.amazon.com/fargate/pricing/) — AWS，2026-04 查閱
2. [Use a target metric to scale Amazon ECS services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-autoscaling-targettracking.html) — AWS Documentation，2026-04 查閱
3. [Schedule your containers on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html) — AWS Documentation，2026-04 查閱
4. [Using Amazon EventBridge Scheduler to schedule Amazon ECS tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/tasks-scheduled-eventbridge-scheduler.html) — AWS Documentation，2026-04 查閱
