今天想聊 5 月 5 日跟 5 月 6 日這兩天，AI 產業突然密集發生的幾條大事。簡單說，這一週就是 OpenAI、Anthropic、Shopify、還有一個叫 Hacktron 的安全新創，各自從不同方向把獨立開發者的環境搖了一遍。我會用一條主線把它們串起來，那條主線是：算力變便宜了，但攻擊面也同時被 AI 掃光，中間還夾著 Shopify 把電商接到 agent 流量上的訊號。

先講 OpenAI 那場「GPT-5.5 on 5/5」。原本社群以為這場活動會放新模型、或者放 Operator 的新功能，結果都沒有。OpenAI 把這場 invite-only 的派對，定位成 low-key meetup，沒做 keynote，也沒發新東西。但他們宣布了兩件事，影響其實比放新模型還大。第一件，所有訂閱層的 Codex 日用量上限，一次乘以 10。第二件，加碼 8000 個 Codex 的月度免費名額。Codex 是 OpenAI 自家的 AI 編碼代理，可以在 CLI、IDE、雲端 sandbox 之間跑 GPT-5.5。這個動作的意思是，過去半年用 Cursor 或 Claude Code 跑 LLM、每個月燒兩千到五萬美金的人，現在過去 24 小時就應該把 critical path 的任務切到 Codex 試一輪，因為光是用量上限變大、加上免費名額，就有可能省下六到八成的成本。Sam Altman 之前丟出「想邀 Musk 來」的梗也沒下文，整場活動就是純粹給開發者送算力。

再來，Anthropic 同一週的反應很有趣。社群原本在猜，OpenAI 跟 Stripe 推了 agent 結帳協定，Anthropic 會不會跟著推一個對標的開放規範。答案是沒有，而且走的是相反方向。Anthropic 把 Claude 平台一次疊厚——Opus 4.7 全面進入 GA，同步上架 Bedrock、Vertex 跟 Microsoft Foundry 三大雲；Claude Security 開了公測，可以對企業 codebase 跑漏洞掃描跟自動修補建議；Claude Design 開了研究預覽，可以從 prompt 生簡報、prototype，還能讀你家 codebase 套色票字型；最後還有一個叫 Claude Mythos Preview 的攻擊型 AI 模型，但它不對外開放，而是綁在一個叫 Project Glasswing 的計畫底下，只給關鍵基礎設施跟大型開源專案的維護者用。所以結論是：OpenAI 跟 Stripe 想當 agent 經濟的協定棟梁，Anthropic 想當企業端的整套 vendor。對獨立開發者來說，靠賣 Claude wrapper 的小 SaaS 要重新想 moat 了。

第三條主線，是一個叫 CVE-2026-23869 的安全漏洞。這條 CVE 把 Next.js 從 13 到 16 整個 App Router 連根拔起，只要用 App Router 的 Server Functions，一個 HTTP request 就可以觸發過量 CPU。Vercel 在 5 月 3 日的 changelog 公告，新部署如果版本受影響，會被預設封鎖。同一週，Vercel 對 Cloudflare 推出的 Next.js 替代品、那個叫 vinext 的東西，也公布了 7 個 CVE，其中 2 個是 critical 等級。更誇張的是，那個叫 Hacktron 的 AI 滲透測試新創，七天內就在 vinext 找出 45 個漏洞，其中 24 個被人工驗證。換句話說，「人類寫的 Next.js」跟「AI 寫的 vinext」這週同時被掃倒，補釘優先級立刻拉到頂。

第四條，是 Shopify 的「雙協定」策略。前端的商品發現用 Google 跟 Shopify 共制的 UCP，後端的結帳用 OpenAI 跟 Stripe 主導的 ACP。Shopify 賣家只要啟用一個叫 Agentic Storefronts 的功能，就可以一次上架到 ChatGPT、Google AI Mode、Perplexity 跟 Microsoft Copilot，不用自己接協定。ACP 這週把合作夥伴擴到 25 家以上，包括 Salesforce、Squarespace、Adobe Commerce 都進場。對獨立賣家來說，最關鍵的訊號是 Shopify Catalog 已經被收進 ChatGPT，美國買家可以直接購買——意味著做 ChatGPT-first 商品策略的時間窗已經開了。

最後一條，把前面幾條串起來的訊號是 Claude Mythos。這個攻擊型 AI 自主在 FreeBSD NFS 找到一個塵封 17 年的 RCE，還寫出能串四個漏洞的瀏覽器 sandbox escape。Anthropic 鎖死它的釋出範圍，但訊號很明顯：AI 自動找 0-day 已經從實驗室 demo 變成現實。前面提到的 Hacktron 對 vinext 的成果就是同條敘事的縮影。所以對小團隊的影響是，每多一週不補修，就多一週被 AI 自動掃描。

聊完事件，講一下行動。我自己列了三個 SaaS 機會。第一個是 Codex Migration Audit，趁 Cursor 跟 Claude Code 用戶還在猶豫的時候，做固定價的對比 audit，跑五十條既有 prompt 在三個 IDE 上比 cost、pass rate、session friction。第二個是 Next.js CVE-2026-23869 的 patch 自動驗證器，免費掃 GitHub repo 給暴露面報告，付費版自動在 PR 內套修補加上 Playwright regression smoke test。第三個是 Shopify Agentic Storefronts 的 onboarding 顧問，幫 SMB 賣家把 product feed 改成 agent-friendly 的描述。

所以重點是這三件事：第一，Codex 用量乘 10，這週就要決定要不要把 LLM 流量切過去；第二，如果你跑 Next.js App Router，這週優先升版、加 rate limit，不要等 Vercel 自動擋；第三，Mythos 加 Glasswing 跟 Hacktron 對 vinext 的成果，是 AI 滲透測試走進主流的訊號，做 SaaS 的，這個月內補一輪 baseline scan 不會吃虧。
