今天想聊三件其實是同一件事的新聞。表面上看是三家公司各做各的——Microsoft 5 月 1 日把 Agent 365 正式 GA、OpenAI 4 月 28 日上 AWS Bedrock、Mistral 4 月 29 日丟出 Medium 3.5 加 Vibe remote agents——但放在一起看，會發現過去三天 AI 產業的版圖被三個方向同時推著走。所以我想先講為什麼這三件事一起發生很重要，再回頭看每一條。

先講大方向。三大雲——Azure、AWS、GCP——從這個禮拜開始，全部都會有 OpenAI、Anthropic、跟某種程度上的 Mistral。也就是說，過去你寫定價模型可以假設「OpenAI 等於 Azure、Anthropic 等於 AWS 加 GCP」這種 vendor 對應關係，這個禮拜開始失效了。客戶的議價槓桿會跑回客戶手上，但反過來，雲廠的差異化也被迫往別的地方走，第一個被推上前線的，就是「agent 治理」。第二個方向是 agent 治理本身被商品化，被微軟做成一個 SKU 直接賣 15 美金 per user per 月。第三個方向是開源跟閉源的賽道還在打，但這禮拜開源這邊端出來的東西，市場反應沒有特別好。

好，我們從 Microsoft 講起。Agent 365 昨天，也就是 5 月 1 日 GA。它的定位是「不管你的 agent 是用 Microsoft Foundry 自己刻、還是用 Copilot Studio 拖拉、還是第三方廠牌的，治理面歸我」。微軟把 identity、device、threat、policy、audit 這幾件事——對應的產品是 Entra、Intune、Defender——統一成一個 control plane。賣法很有意思，獨立方案 15 美金 per user per 月，或者你買 99 美金的 Microsoft 365 E7 Frontier Suite，會直接 bundle 進去。E7 是這次新出的最高階訂閱，名字對齊原本的 E3、E5 階梯，包含 E5 加 Copilot 加 Entra Suite 加 Agent 365 四項，比拆買省 18 美金。

這件事的真正意義是，agent 治理過去是 internal tool，每家公司各自用 OPA、OpenFGA 自己拼，現在被微軟做成可上架的 SaaS。對 startup 來說有一個機會、一個威脅。機會是，5 到 50 人的小團隊不會為了治理升 99 美金 E7 一整套，所以「比 15 美金便宜、不必綁 M365」的輕量 governance 工具還有空間。威脅是，原本想 sell governance 的 startup，差異化會被微軟的 bundle 推到很難講故事。順帶一提，Anthropic 在這條線上明顯落後，他們還停在 Rate Limits API 那種「我家的 quota 給你看」，微軟已經把跨多家 vendor 的治理做成 SKU 了，這個差距 Anthropic 不快點補，企業客戶就會把治理工作交給微軟。

第二條，OpenAI 上 AWS Bedrock。4 月 28 日，GPT-5.4、GPT-5.5 的 limited preview、Codex、還有 Bedrock Managed Agents 同步開放。這件事的歷史意義是，從 2019 年起 Microsoft 對 OpenAI 的七年 Azure 獨佔正式結束，雖然 license 還簽到 2032，但 unilateral lock-in 沒了。對開發者最直接的影響是兩件事。第一，如果你已經在 AWS 上，現在可以直接用 OpenAI 模型，而且走 IAM、VPC、CloudTrail 這些公司既有的稽核管道，不用換 OpenAI 的 billing。對 enterprise SOC2、HIPAA 場景特別省事。第二，Codex 可以走公司 AWS 採購單結帳了，這對 enterprise 採購流程是個大解鎖，過去要員工自己刷卡買 Codex 訂閱，現在可以直接從 AWS Enterprise Discount Program 出錢。

對 SaaS 玩家來說，這帶出一個新的 SaaS 點子方向，叫做 cross-cloud LLM cost arbitrator。同一支 prompt，丟到 Azure 上的 OpenAI、丟到 Bedrock 上的 OpenAI、丟到 AWS 或 GCP 上的 Anthropic，價格、latency、可用性會不一樣，但目前沒有人幫你跑日級的對比。月帳 5K 到 200K 美金 LLM 的 SaaS 都會想知道這個答案。Vercel AI Gateway 偏路由不偏 cloud arbitrage，OpenRouter 不接客戶自己的雲端帳號，FinOps 工具又不熟 LLM，這個縫剛剛被打開。

第三條，Mistral 那邊。4 月 29 日發 Medium 3.5，128B dense 的 open-weights，改良版 MIT 授權，四張 GPU 可以自架。同時推出 Vibe remote agents，就是雲端跑的 coding agent，從 Le Chat 或 Vibe CLI 派任務到 Mistral 的 cloud sandbox，跑完通知。API 定價 1.5 美金 / 7.5 美金 per 1M tokens。聽起來不錯，但 HN 跟 X 上的反應很冷淡，主要的吐槽是 SWE-Bench Verified 只有 77.6%，比中國對手 DeepSeek V4 又貴又輸。所以，純拿 Mistral 跑通用 agent，今天還搶不過 V4 Flash 的價格性能。

不過 Mistral 還是有它的場景。如果你做 EU 市場的 SaaS，「資料不出歐」是個強說詞，加上四張 GPU 自架可行、商用授權清楚，這對歐盟、GDPR、受規管行業——像健康、金融——是真實需求。所以另一個 SaaS 點子方向出來了，叫 Mistral 3.5 fixed-price self-host audit。能不能自架、要花多少錢、值不值得，這變成 EU SaaS 老闆每週要被問的題目，但多數人沒興趣讀 vLLM 或 SGLang 的 config。固定價格幫你跑起 reference deployment、給 cost calc 跟 throughput 基準，是個還不錯的切入點。

還有一條順便講，Vercel AI Gateway 這個禮拜把 GPT-5.5、GPT-5.5 Pro、DeepSeek V4 Pro 跟 Flash、GPT Image 2 全部接好。意思是你以前要過 OpenRouter 一層的事，現在 Vercel 直接吃掉。對既有 Vercel 用戶是 zero-config 的成本實驗，把 GPT-5.5 跟 V4 Flash 兩條跑 24 小時對比，很可能省 60% 以上。但對純做 wrapper 的小 SaaS，空間又少了一塊。

重點是，這禮拜你該做的事其實只有四件。第一，如果你在 Vercel，今天就拿一支既有 prompt 跑 GPT-5.5、V4 Pro、V4 Flash 三組，看 cost 跟 latency。第二，如果你在 AWS，把 Bedrock 帳號權限開好、GPT-5.5 limited preview 排隊申請。第三，內部寫一頁「我家的 agent 治理應該由誰管」，下週採購季用得上。第四，如果做 EU 客戶，跑一輪 Mistral Medium 3.5 在你家任務的 50 條 golden set 對比 Sonnet 4.6 跟 V4 Pro。這四件事大概兩到三小時可以做完，但會幫你把這個禮拜三條主線的影響都摸到。今天就到這裡。
