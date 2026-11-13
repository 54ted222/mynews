今天想聊幾件 11 月 14 號、台灣 solo dev 跟獨立開發者值得擺到週末思考清單的事。整串新聞背後有一條暗線：AI 基礎建設在快速收斂跟分化，台灣的法遵視窗剛好也落在同一週具體化。

先從 Anthropic 的 IPO 說起。這週彭博的報導給了第一個具體倍數——book 六倍超額認購，機構需求強過當年 SpaceX 同期的訂單。之前只講「multiple times oversubscribed」是定性說法，現在直接跳成六倍，然後 Pymnts 口徑把 IPO 加上 Nvidia、Google 的私募部分合在一起，報 total raise 九百零四億美元。Pricing 預計 11 月 18 號、首日交易 11 月 19 號。對台灣讀者有兩層意義。第一層，如果你是 Claude Pro、Teams、Enterprise 的大客戶，上市後定價壓力中期有升高機率，因為承銷商已經在考慮把原本 70 到 78 的區間上調到 85 到 90。第二層，散戶想參與的話，retail allocation 大概佔兩成，但發行是美國境內 only、台灣只能靠複委託，大部分券商管道有限，所以投資敘事比直接參與現實一些。

再來是金管會這條，我覺得這是年度最大的台灣 fintech 法遵訊號。11 月 3 號已經預告了虛擬資產服務法的九項子法。證期局管八項，包含市場准入、人員管理、內控稽核、財務報告、公會自律、異常交易管理；銀行局管穩定幣發行許可辦法跟洗錢防制相關修正。40 天的公告期大概 12 月 13 號截止，然後 2027 年第一季母法跟子法同步施行，新業者有 12 個月的申請過渡期，也就是 2028 年第一季前要申請完。重點是穩定幣的發行門檻——限銀行、金控或銀行轉投資子公司，非銀行發行人資本額至少三億新台幣，幣別限新台幣加單一外幣。簡單說，solo dev 自己發穩定幣是別想了，但支付整合、錢包、合規 copilot、洗錢防制 KYC 加值這些應用層 SaaS，窗口正在打開。

接著是 DB 選型地震。Supabase 10 月 3 號完成 GIC 領投的一億五千萬美元融資，估值到一百零五億美元，同時收購了 Turso。有件事很多人沒意識到，Neon 其實 2025 年 5 月就已經被 Databricks 收購了，所以原本「Supabase、Neon、Turso 三強並列」的敘事要修正。現在的實際格局是：Supabase 加上 Turso 的 Edge SQLite 能力、Neon 變成 Databricks 子公司已經不算中立選項、Convex 是唯一還獨立的同類替代者。對台灣 TypeScript indie 來說，新專案可以優先考慮 Supabase 加 Turso 組合，pgvector 仍然是預設可用的；不過如果你的向量索引要 scale 到一千萬條以上的 embedding，還是考慮 Turbopuffer 或 Qdrant 比較保險。

Cursor 這邊踩雷更具體了。Composer 2.5 的 BYOK bug 在 forum 162152、163374、164176 三串被反覆驗證——如果你把 OpenAI 的 BYOK key 打開，Composer 2.5、Spark、Grok 4.5 全部會被 block、跳「This model does not support custom API keys」錯誤。Cursor forum staff 的官方回應是「intended behavior」，也就是說這是設計上就這樣的。Auto mode 是唯一正常運作的，workaround 是把 BYOK toggle 整個關掉。對仍重度綁 OpenAI 模型的 solo dev 來說，OpenAI 跟 Cursor 的 cutoff 已經過了 T+2，如果你要 BYOK 切換加 Composer 2.5 並用，只能手動 toggle、工作流必然被打斷。

最後 MCP Registry 的膨脹值得記一下。10 月 31 號 glama.ai 公開的口徑是五萬三千五百四十一個 server，比 9 月的三萬零三百七十五 unique 成長 76%，一個月內的事。官方 Registry 還掛 preview 標記、Smithery 的 proxy 已經下線 14 天、PulseMCP 暫停新 submission、MCP Harbor 則以每 6 小時 auto-sync 切進來。對獨立開發者而言，單一 directory 已經不可靠了，官方 Registry 加 MCP Harbor 加 mcpservers.org 三地同步登記，基本上會是 2026 Q4 的新基線。純 wrapper 類 server 繼續向 commodity 收斂，垂直領域加高品質仍然是稀缺位。

重點是三件事。第一，Anthropic 11/18 pricing 之後，中期 Claude 訂閱定價壓力會明顯浮上來，是接下來的訂價決策點。第二，金管會 12/13 公告期結束、2027 Q1 施行、2028 Q1 申請截止，這條時間軸要刻進日曆，想做穩定幣應用層 SaaS 的話規劃要配上。第三，DB 選型跟 AI 編輯器選型都在短期內重新洗牌，Supabase 加 Turso、Cursor 架構限制、MCP 註冊處戰爭這三條短期動態，直接影響接下來兩個月的工具堆疊決策。
