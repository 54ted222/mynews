今天想聊的，是一個被三條時間鎖同時夾住的早晨。5 月 18 號禮拜一，但對舊金山跟倫敦來說，這是 Code w/ Claude London 跟 Google I/O 2026 兩場活動的前夜——而且兩場剛好同日，都在 5 月 19 號開跑。所以今天的主軸只有一個：兩場活動還沒上場，但今天就得把功課做完，因為一旦活動開幕，後面 14 天的市場節奏會被這兩場一起拉走。

先講第一條時間鎖。Google I/O 5/19 早上十點 PT 開 keynote、5/20 是 dev session day。Leak 已經收得很齊了，四條主軸我簡單帶。第一條 Gemini 3.2 Flash，定位「更快、更便宜」，直接對打 Claude Haiku 4.5 跟 GPT-5.5 Instant，要把 agent loop 中段那種輕量呼叫搶過去。第二條 Gemini Omni，5/2 已經被 TestingCatalog 從 production interface 抓到字串，tag 寫「Powered by Omni」，把文字、圖片、影片、聊天編輯收進同一條 pipeline——如果 5/19 官方真的揭，這會是第一個 frontier provider 原生支援 video output 的模型。第三條最關鍵，Gemini Spark，一個吃 Gmail、Calendar、Docs、Forms、Drive 的 autonomous agent，定位「everyday AI agent」，明擺著對標 Claude Cowork。第四條 Aluminium OS，基於 Android 17 重寫的桌面 OS，Googlebook 系列首發、Fall 2026 出貨、企業跟教育市場 2028 廣鋪。

這四條對 indie 殺傷力最大的是 Gemini Spark。所以如果你自己做的是 Gmail wrapper、Calendar wrapper、Docs wrapper 這一類 SaaS，5/19 之前這 24 小時就得把「Spark 上線後我家差異化三點」這份 FAQ 草稿擠出來。再來，亞洲市場是個避風港，因為 Spark 一上線 Google 不會立刻把多語、商業帳、加密、跨 Workspace 這些 sub-vertical 補齊，這就是你下一份內容稿要切的口。

同一天，5/19，另一邊倫敦 Anthropic 開 Code w/ Claude London。Day 1 keynote 跟 breakout 全開 livestream。5/6 的舊金山首場已經揭過 Managed Agents 三大新功能——Multiagent Orchestration、Outcomes、Dreaming——倫敦場大家預期會補上 EU 跟 UK 在地化的合規、GDPR、本地化 case study。所以建議把 5/19 早上九點到十一點 PT 排進日曆，兩場一起追，然後寫一份「我家 SaaS 在兩場新公告下的三條曝險」追蹤表。

講完前夜，回頭看 5/13 那一發。Notion Developer Platform 把工作區直接升級成「AI agent control room」，一次推三樣東西。第一樣是 Workers——一個 hosted runtime，可以在 Notion 雲端跑 custom code、做 DB 同步、agent tools、webhook trigger，不必自己架 server。Beta 期免費，但 8 月 11 號開始切到 Notion credits 計費。第二樣 External Agent API，讓外部 agent 以「協作者」的身分掛進 Notion 工作區，可以被分派任務、被監控。第三樣 Database Sync，從 Salesforce、Zendesk、Postgres 任何 API DB 雙向同步。

首批官方支援的 partner agents 是 Claude Code、Cursor、Codex、還有 Decagon——這家是做企業客服 AI agent 的舊金山新創，讀者可能不熟，所以我在原文也補了註解。Notion 自己公布的數字嚇到我——從今年 2 月 Custom Agents 上線到 5/13 為止，客戶已經建了超過一百萬個 agent。所以重點是：Notion 現在等於 agent 的 runtime 跟 control plane，做 Notion 第三方整合的差異化要從「我家是另一個 agent」改成「我家補 Notion Workers 還沒做完的 vertical 連結」。對做 Zapier、Make.com、n8n 的 indie 來說，這是新威脅。但反過來看，8/11 計費上線之前的 90 天 beta window，就是把自家 vertical 範本免費做出來、佔早期 distribution slot 的窗口。

第三條時間鎖是今晚 11 點 59 分 PT，a16z Speedrun SR007 申請截止。單筆最高一百萬美金，五十萬 SAFE 加上五十萬下輪跟投，外加超過五百萬的 cloud、AI、軟體 credit。錄取率不到 0.4%。但這一輪最重要的訊號不是錢，是 bar——a16z 公開把篩選 bar 升到「5-week-ARR」，意思是 launch 後五週內累積出來的 ARR，要求申請者已經有 working product 跟 paying customers，不再吃「漂亮 deck + waitlist」這套敘事。所以即便這晚你沒申請，這條 bar 也已經被 a16z 立成行業公開標準。沒過 SR007 也沒關係，下次窗口預期是 12 月的 SR008，中間七個月就是你把「launch 後 35 天衝出第一個付費客戶」當成自家節奏 benchmark 的時間軸。

再來是 Supabase。本週 Supabase 開發者要面對的不是一個 breaking change，是三重時間鎖。5/18 起，pg_graphql 這個 extension 不再預設開——簡單說，新 project 建一個 table 出來，不會自動 expose 到 Data API 跟 GraphQL，得手動 grant 或去 Dashboard 開。所以那種「Next.js + Supabase 一鍵 demo」的 boilerplate 流程斷了一段，所有教學的 README 都得補上「先去 Dashboard expose」這一步。5/22，token endpoint 從 HTTP 201 改成 HTTP 200，這是 OAuth 2.1 合規要求，自寫 client 解 status code 的會壞。5/30，這套新預設變所有新 project 的預設，而且同一天剛好撞 Cloudflare K2.5 切到 K2.6 的 alias 切換。最後 7/1，Postgres 14 自動升 17，超過一萬兩千個 project 還在跑 14 跟 15，自動升之前要先測 pgvector、postgis、pg_cron 這些 extension 的相容性。

這幾條疊在一起，其實是個 6 週的顧問機會。如果你做 SaaS 顧問或 boilerplate 賣家，這個禮拜開始接固定價的 audit 服務，800 到 2000 美金一個案子，兩個月內絕對接得滿。

剩下幾件比較零碎但要記的事情。Cursor 3.4 上週發了，最大的更新是 dev environment 工具，讓團隊管理員可以替整隊 agent 統一設 IDE、環境變數、工具集。然後 Bugbot 6/8 開始切 usage-based 計費，過去 seat-based 那種「我團隊 10 個人但只有 2 個在跑 PR review」的便宜玩法結束了，得估一下下個 renewal 的月帳。Stripe 那邊 5/16 Sessions 之後把 Projects 的 partner 從 32 家拉到 46 家，新加 Render、Twilio、Sentry、WorkOS、Browserbase、GitLab、ElevenLabs——把 source control、observability、語音 AI 都收進來。John Collison 公開定調說 leading edge 在「vibe deploying」，這個新詞延伸自 vibe coding，講的是用自然語言意圖驅動 agent 自動串 SaaS partner 完成部署。

重點是這樣——今天還是禮拜一，但你有六件事要在 36 小時內推進。第一，今晚 11 點 59 分 PT 之前決定要不要送 SR007，要送就丟 minimal 版本，不要送就記下 12 月 SR008。第二，明天早上九點 PT Google I/O keynote 排進日曆，特別關注 Gemini Spark 有沒有正式發。第三，本週內把 Notion Workers beta 開戶，把家裡一條最常用的 cron 或 webhook 搬上去，佔 90 天免費 distribution。第四，如果你用 Supabase，今天就去 changelog 對照 5/18、5/22、5/30、7/1 那四個錨點，看自家專案受哪幾條影響。第五，做 Gmail / Calendar wrapper 的把 Spark FAQ 草稿擠出來。第六，Cursor 5 人座以上團隊升 3.4，把 dev env config 從 README 搬進產品。

兩場活動還沒開，但下一個 14 天的市場節奏已經被它們的時間鎖鎖住了。今天就動，明天再看會太遲。
