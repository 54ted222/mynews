今天想聊 2026-11-01 這天同時走到關鍵節點的幾件事。十月底連著兩個 AI 基礎建設下線、Anthropic 上市案進入倒數，再疊上台灣政策跟供應鏈進度，密度不低，所以挑主幹講。

先講 MCP 這塊。昨天台北時間早上八點，Smithery 的 MCP Proxy 正式關掉，run.tools、Smithery API、Connect、Toolbox、CLI、SDK 全部下線。原本的 smithery.ai directory 由 Arcade 接手，但只保留公開 registry，沒有 proxy。今天是關掉後第一個完整工作日，首波斷線回報開始湧現，已付費用戶的退款是五到十個工作日倒數，今天進入 Day 1。真正麻煩的不是把 URL 換掉，Smithery 官方口徑說得很清楚，還要補 auth 跟 session management，社群到現在沒有一致的替代方案。選型大致是 OAuth 2.1 強制 PKCE，搭 MCP 2025-06-18 這版的 protected resource metadata 跟 resource indicators，或者接進 Stytch、Better Auth 這類 identity provider。Arcade 這邊也要留意，他們自己同時在運營叫 ToolBench 的 agent 工具評測基準，身兼 directory 跟評分員，中立性在社群觀察中。

OpenAI 的 Evals 這條今天同樣是 T+1。昨天 UTC 零時既有 evals 進入 read-only，到 11/30 整個下線，連帶 reusable prompts 一起下線，而且沒有 API 可以匯出，只能從 dashboard 手動複製。更緊的是 Agent Builder 也在 11/30 EOL，倒數剩 29 天，進入最後 crunch。官方現在唯一的 migration guide 是 cookbook 那篇從 Evals 搬到 Promptfoo，而 Promptfoo 現在歸屬 OpenAI 旗下、採 MIT 授權。另一條路是 Langfuse v4，宣稱 migration 快 165 倍，但紅隊測試 Langfuse 自己承認沒對應，常見的做法是兩套混搭。

接著是 Anthropic 的 S-1。10/26 公開到今天是 Day 6，ticker 擬掛 ANT、要上 Nasdaq。上半年營收 163 億美元、淨損 807 億，但這 807 億裡有 724 億是可轉換債跟 SAFE 的公允價值變動，屬於非現金損益。運算承諾累計到 2029 年是 1,205 億美元。比較敏感的是兩名客戶就占營收 25%。價位、股數、募資規模還留空白。roadshow Bloomberg 口徑是 11/9，距今 T-8；也有口徑說可能延到 11/16 或感恩節週。對台灣 Claude 用戶最直接的連動有兩個：集中度風險影響未來 Claude 定價彈性，加上 1,205 億運算承諾會順著往台廠供應鏈走。

iPhone Duo 這條快速帶過。今天是台灣 Day 10，兩個對照點：中國開賣當天黃牛從預售期兩萬九人民幣跌到一千到一千五，九成多溢價崩潰；香港十天內大約收斂六到七成五。台灣今天週六，照理落在這兩個區間中間，週末可以盯 Yahoo 拍賣、露天、蝦皮跟水貨商的現貨價快照。

政策這邊，數發部 100 億 AI 基金走到 T+28。十月修正作業要點後，主要營運在台的境外公司可以納投，Dealroom 口徑整理出三個條件：R&D 總部在台、超過一半的 R&D 預算跟員工在台、至少一半營收綁定台灣辦公室。創業天使方案也從原本的 50 億翻倍到 100 億。到 8 月底累計受投 10 家、金額 2.55 億台幣，平均一案 2,550 萬，上限 2 億，大概還有 8 倍成長空間。另外 StartupBlink 2026 把台灣從第 25 名拉到第 20 名，首度進前 20。

Dcard 這條單獨提一下。內部走了 18 個月的 AI Native 轉型，今年 5 月成立新業務單位 GNTC，名字取自 agentic 的字根，是 Dcard 第一個對外的 B2B 業務。主打 EntryDesk 跟 VibeHost，後者支援雲端加地端部署，據說把導入企業的流程時間縮了八成以上。對台灣一人 SaaS 開發者，GNTC 的競爭跟潛在客戶身份同時成立——做企業 AI vertical SaaS 的，GNTC 是對手；做 Agent-Native stack 整合顧問的，GNTC 可能是客戶。目前定價跟客戶清單還沒公開。

TSMC Q3 業績快速帶過。第三方口徑營收 1.49 兆台幣、年增 50%、第六季連續創新高，Nvidia 預訂 2026 全年先進封裝產能的 60%。重點是分析師觀察 2027 可能進入定價調整週期，如果真的落地，下游 inference infra 像 Groq、Together、Fireworks 的單位成本會跟著漲，對應用層一人 SaaS 是中期要納入預估的事。

模型這邊，Claude Haiku 4.5 消費端下架今天 T+3。Free、Pro、Max 聊天跟 Cowork、Design 的 selector 不再列 Haiku 4.5，既有對話還能續聊，新選就是 Haiku 5.5。Claude Code、Team、Enterprise、API 這些入口不受影響。Opus 4.7 官方定價續行 5 塊美元 input、25 塊 output、1M context；Opus 5.5 第三方口徑 4 塊 input、20 塊 output，比 Opus 4.7 便宜兩成，但沒官方 pricing page 確認。這個組合要盯的是 Anthropic 官方什麼時候正式公告 Opus 5.5 定價。

重點是，這個週六一次有兩條 T+1 crunch 窗口開著——Smithery 遷移跟 OpenAI Evals 加 Agent Builder EOL，接下來一週可以切出短期 crunch 接案跟 FAQ 寫作的題材，中文技術 blog 在這兩條線幾乎是空的。中長線盯三件事：Anthropic 11/9 roadshow 情境是否準點、Opus 5.5 官方 pricing page 什麼時候出、以及 TSMC 2027 定價調整傳聞的進度。這三件決定明年用 Claude 做 agent SaaS 的成本模型。短期接案抓窗口，中長線盯定價，週六可以先把 Smithery 跟 Evals 的 FAQ 推出去。
