今天想聊兩件對 indie 開發者、特別是做 SaaS 或做 iOS / macOS 垂直 app 的人來說，非常關鍵的事。一件是 Anthropic 昨天 6 月 9 號正式公開 Claude Fable 5 跟 Mythos 5 這兩條產品線；另一件是同一天，Apple 也跟 Anthropic 同步釋出了 Foundation Models 的新介面，讓 iOS 跟 macOS app 第一次可以原生在不同 AI 供應商之間切換。這兩件事剛好串成一條完整的主線，所以我想用比較長的時間把它聊清楚。

先從 Fable 5 跟 Mythos 5 講起。Anthropic 內部其實有一個分類叫 Mythos-class，意思是「同一輪訓練裡跑出來的最頂級 frontier model」。在這之前，Mythos 等級的模型只在內部紅隊跟少數合作夥伴之間流通，外面只能用到 Opus 4.8 那一級。這次 6 月 9 號的發布，是 Mythos-class 第一次以公開模式釋出。具體做法是分成兩條線：Mythos 5 維持不公開，只給 Project Glasswing 的合作夥伴，還有經過審核的 cyber 防禦團隊跟生醫研究單位使用；Fable 5 則是公開 GA，API 的 model id 就叫 claude-fable-5，套上一層安全分類器，遇到 cyber、生物、化學、model distillation 這類高風險 prompt 會自動 fallback 回 Opus 4.8、不直接回答。

簡單說，Fable 5 就是「裝了安全閥的 Mythos」，給一般 indie 用。它的規格是 1M context、128K output、定價 input 每百萬 token 10 美金、output 50 美金，是 Opus 4.8 的兩倍。但跑分這邊，SWE-Bench Pro 拿到 80.3 分、FrontierCode Diamond 29.3、Terminal-Bench 2.1 是 88，這是目前公開可用的 frontier model 最強的一輪。Anthropic 也放了一個 Stripe 的早期案例，他們把一整個 50M 行的 Ruby codebase migration，本來預估整個團隊要做兩個月，用 Fable 5 跑完只花了一天。

不過，這支稿子要強調的不是規格本身，而是時間視窗。Anthropic 給訂閱用戶開了一個 14 天的免費試吃，從 6 月 9 號到 6 月 22 號，只要你是 Pro、Max 或 Team 訂戶，就可以直接在 claude.ai 跟 Claude API 上把 model 切到 Fable 5，無額外費用。6 月 23 號以後，這個模型會從訂閱方案裡移開，改成吃「usage credit」這個獨立的計費池。所以對 indie 來說，這 14 天就是把自家工作流跑滿 Mythos-class 的最後免費窗口。我自己列出來建議優先跑的任務有四類：第一是 codebase migration，像 Stripe 那種 Ruby 升版、Python 2 到 3 的歷史包袱；第二是 knowledge base rebuild，把舊文件、舊 wiki 重整成可被 RAG 用的結構；第三是大型 refactor，特別是跨檔案、跨模組的；第四是 deep PR review，把一週累積的 PR 一次餵進去做架構級的審查。

這 14 天還有一個延伸用法。Fable 5 在 6 月 9 號同步進入 GitHub Copilot 的 Pro Plus、Max、Business 跟 Enterprise 方案，也進入了 Cursor、Claude Code、AWS Bedrock、Google Cloud、Microsoft Foundry。所以對做 dev tool agency 的 indie 來說，這禮拜要寫的內容主題其實也變了。本來大家在比的是「Bugbot 跟 CodeRabbit 誰便宜」，現在變成「同一個 Fable 5 在 Copilot 上跑、在 Claude Code 上跑、在 Cursor 上跑，哪一邊的 cost 跟 latency 最划算」。這是一個全新的對比軸，今天到 6 月 22 號之間做出第一個試算工具，會吃到最熱的 mindshare。

接下來聊第二條主線，Apple 這邊的動作。Apple 是在 6 月 8 號 WWDC keynote 隔天，也就是 6 月 9 號當天，公布了一個叫做 LanguageModel 的協定。這是一個公開的 Swift interface，意思是讓第三方雲端 LLM 供應商可以用同一套介面，把推理能力暴露給 iOS 27、iPadOS 27、macOS 27、watchOS 27、visionOS 27 上的 app 使用。Anthropic 抓著這個時機，同一天就釋出了 Claude Foundation Models Swift package。

這代表什麼？以前你做 iOS app 要接 LLM，得自己寫 SDK 整合、自己管 session、自己處理 API key，而且綁了 OpenAI 半年以後想換 Anthropic，code 要大改。現在 Apple 跟 Anthropic 一起做的事，是讓你在 Xcode 裡只要換一行 SPM dependency，就可以在三個地方切換：第一是裝置上的 Apple on-device model，跑在 Neural Engine 上，很快、免費、隱私好；第二是 Gemini，當你需要某些特定能力；第三是 Claude Fable 5，當你需要 Mythos-class 的推理深度。底層的 session 邏輯不用動。

這個 pattern 業界叫做「provider swap pattern」，第一次原生內建在 OS 級別。對做 iOS、做 macOS 垂直 SaaS 的 indie 來說，意義非常大。第一，vendor lock-in 的疑慮一次解決，半年後想換 provider 不用重寫；第二，你可以針對 user flow 的不同段做最佳路由，比方說 OCR、簡單分類用 on-device、長文摘要用 Gemini、深度推理用 Claude；第三，這個能力會在 fall 2026 隨 iOS 27 GA 進到所有用戶手上，所以你現在 6 月 9 號開始做的 SPM dependency 設計，會直接決定半年後上線時的 cost 結構。

搭配的還有 Xcode 27，這版 IDE 變成 dual-engine agentic：本地 Neural Engine 提供即時 Swift 建議，遇到複雜任務就路由到雲端的 Claude、Gemini 或 OpenAI 做重推理。它甚至可以幫你跑完整個 simulate、執行 test、看 live preview、操作 iOS Simulator——這個操作介面叫做 Device Hub，是 Xcode 27 新整合的。所以建議做 iOS 的朋友這禮拜就裝 Xcode 27 beta，加 Anthropic 的 Claude Foundation Models Swift package，跑一個 hello world，把 provider swap 的三段切實際試一次。

其他幾件事用比較快的速度帶過。GitHub Copilot 同一天 6 月 9 號還做了三件：CLI 自訂 agent 用 Markdown file 描述 agent 行為與工具上線 GA、手機遠端控制 Copilot session 上線 GA、然後 Fable 5 進 Copilot。Claude Code 6 月 8 號出了 safe-mode 跟 cd 命令、disableBundledSkills 設定，給企業治理新賣點。LG 集團的 IT 子公司 LG CNS 跟 Anthropic 簽約，把 Claude Enterprise 推到 LG 整個集團，是亞洲企業 GTM 的重要訊號。今天 6 月 10 號還有 Code with Claude Tokyo 線上 livestream，10 點半日本時間開場，全球免費；明天 6 月 11 號 Extended 副場仍開放登記，可以拿 Anthropic Applied AI engineer 的直接 feedback。

重點是這樣：今天到 6 月 22 號這 14 天，是 indie 用 Fable 5 跑大任務的最後免費窗口，務必把 codebase migration、KB rebuild、大型 refactor、deep PR review 排上跑。然後做 iOS 跟 macOS 的人，這禮拜就動手裝 Xcode 27 beta、把 Claude Foundation Models Swift package 跑起來，因為 fall 2026 GA 前的 SPM dependency 設計，會直接決定你半年後的 cost 跟 vendor lock-in 結構。這兩件事一個是短期突擊、一個是長期布局，但都是今天就要動手的。
