這一集先不談高深架構，我們先把個人 SaaS 的 ECS 最小骨架搭好。

很多人失敗的點不是技術不夠，而是一開始把系統拆得太複雜，結果每次上線都要重新理解一遍。對個人團隊，最實用的組合通常是 ECR、ECS Fargate、ALB、CloudWatch Logs，再加上 Secrets Manager 跟 IAM task role。這樣你就有映像檔管理、容器執行、流量入口、日誌和權限邊界。

重點是把流程固定下來。你更新程式，不是 SSH 上去改，而是發佈新的 task definition revision。這個差別很大，因為它讓部署變成可重複，而不是臨場操作。

再來是權限。execution role 跟 task role 要分開。execution role 是給平台拉 image、寫 logs，task role 才是給你程式本身去存取 AWS 服務。這一點如果混掉，安全風險會在你還沒有資安團隊時就埋好。

如果你有多服務，像 API、worker、通知服務，Service Connect 很有幫助。它不是炫技，而是把服務間連線做成一致規則，少掉很多臨時設定。

最後提醒一個常被忽略的地方：把排程工作也納入 ECS。不要一半任務還留在某台 VM 的 cron。用 EventBridge Scheduler 觸發 RunTask，你的部署、權限、監控才會是同一個世界。這樣未來你擴張或交接，成本會低非常多。

所以這一集的重點很簡單：先用最小骨架把可上線能力建立起來，不要一開始就追求完美平台。能穩定交付，才有資格談下一步。
