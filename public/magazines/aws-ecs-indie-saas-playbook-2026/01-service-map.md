---
title: 先把骨架搭對：個人 SaaS 的 ECS 最小可行服務地圖
order: 1
date: 2026-04-27
summary: 你不需要一次用完 AWS 全家桶；先用 ECS 組出可上線的最小骨架，才能在功能迭代時保持可控。
keywords: Amazon ECS Fargate pricing, Amazon ECS task IAM role, ECS task execution role, ECS service autoscaling target tracking, Amazon ECS Service Connect, ECS deployment circuit breaker, ECS EventBridge Scheduler RunTask
---

# 先把骨架搭對：個人 SaaS 的 ECS 最小可行服務地圖

## TL;DR

- 對個人 SaaS 而言，ECS 的重點不是「功能很多」，而是把上線流程標準化：映像檔、任務定義、服務、流量入口、監控一次到位。[^task-def]
- 最小可行組合通常是：**ECR + ECS(Fargate) + ALB + CloudWatch Logs + Secrets Manager + IAM task role**，先把安全與可觀測底線立起來。[^task-role]
- 若一開始就把背景工作（排程、批次）也納入 ECS RunTask，你的營運模型會比「一半在 cron VM、一半在容器」更容易維護。[^scheduler]

很多人把 ECS 想成「Kubernetes 的替代品」，但對個人 SaaS 真正有幫助的切角是：它是**容器營運的中控台**。你只要先定義好 task（容器怎麼跑）、service（要跑幾份）、network（要不要公開）、role（能存取什麼），之後上線新版本就是替換 task definition revision，而不是每次手工 SSH 改設定。

先講最常見的 MVP 架構：

1. **ECR** 放映像檔。
2. **ECS Service（Fargate）** 跑 API 與 Web 容器。
3. **ALB** 對外收流量，做 path routing（例如 `/api/*` 與 `/app/*`）。
4. **CloudWatch Logs** 收容器 stdout/stderr。
5. **Secrets Manager / Parameter Store** 放機密（API key、DB 密碼）。
6. **Task IAM Role** 給應用最小權限。

這套骨架的好處是：你可以把「發版」和「營運」流程定義成固定步驟。當產品還在找 PMF，最怕的不是功能做不快，而是每次修 bug 都像開盲盒。

另外要區分兩種權限角色：**task execution role** 主要讓 ECS 幫你拉映像檔、寫 logs；**task role** 才是你應用程式呼叫 AWS API 時用的身分。很多團隊把兩者混在一起，最後就是應用拿到過大權限。[^iam-overview]

在網路層，若你一開始就有多個服務（例如 API、worker、internal admin），可以評估 ECS Service Connect，讓服務之間用短名稱與統一連線設定，減少手配 service discovery 的摩擦。[^service-connect] 對個人團隊最大的好處不是炫技，而是降低「新服務接上線」的心智負擔。

最後，別把排程工作留在舊 VM 的 crontab。ECS 已經有 EventBridge Scheduler 對 RunTask 的標準做法，可做 cron/rate/one-time，還有重試和 DLQ。[^scheduler] 一旦你把 nightly job、報表匯出、清理任務都放進同一個 ECS 生命週期，你的部署、權限與監控才不會分裂成兩套世界。

[^task-def]: **Task definition** 是 ECS 的部署單位，描述容器 image、CPU/記憶體、網路、環境變數與角色設定；每次更新都產生新 revision。
[^task-role]: **Task IAM Role** 是給容器內應用程式使用的 AWS 身分，應和 execution role 分離，並採最小權限。
[^scheduler]: **EventBridge Scheduler + RunTask** 可把一次性或週期性背景任務納入 ECS，支援時區、重試與 DLQ。
[^iam-overview]: **Task execution role** 服務於平台動作（拉 image、寫 logs）；**task role** 服務於應用程式邏輯（存取 S3、SQS、DynamoDB 等）。
[^service-connect]: **Service Connect** 提供服務探索、連線設定與流量可觀測的統一路徑，適合多服務場景。

---

來源：
1. [Amazon ECS task IAM role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) — AWS Documentation，2026-04 查閱
2. [IAM roles for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-iam-role-overview.html) — AWS Documentation，2026-04 查閱
3. [Using Amazon EventBridge Scheduler to schedule Amazon ECS tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/tasks-scheduled-eventbridge-scheduler.html) — AWS Documentation，2026-04 查閱
4. [Use Service Connect to connect Amazon ECS services with short names](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) — AWS Documentation，2026-04 查閱
