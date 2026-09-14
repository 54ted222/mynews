今天想聊 9 月 15 日這個「決策前夜」的一天，因為明天週三 FOMC 就要開會，很多線索都在明天以前收斂，禮拜二剛好是最後一個定調窗。

先講 FOMC。目前 25 個基點升息的機率在三條軌道上互相靠近——Polymarket 大約 79.3%，ING、Achiever、Cambridge Currencies 這幾家外匯研究一致寫「Fed 準備升 25 個基點」；再加上 Warsh 在 Jackson Hole 的鷹派演說、8 月 CPI 熱燙、PPI 月增 0.4%、非農加 16.2 萬人，這四合一是升息派的新火藥。多數敘事在賭「一次到位、就此打住」，2027 年靠工資疲軟、關稅退回、房市停滯把通膨拉回 2%。不過真正的第二層定調要看點陣圖，也就是 FOMC 每季公布的官員利率預期分布，這通常會在利率決議公布之後主導盤中價格，明天下午盤要留意。

再來看 iOS 27。禮拜一才剛上線，禮拜二就有一堆第一日反饋。Engadget、TechCrunch、MartinCid 幾乎口徑一致：Apple 這一次把 Siri 押寶在 Google Gemini 2.5 Pro 身上，這對開發者來說是正面訊號，因為它代表 Siri 真的能處理多步驟指令、有螢幕感知、也有個人 context。不過門檻不低——硬體要 iPhone 15 Pro 以上；歐盟被鎖到只剩 Mac 跟 Vision Pro；中國大陸沒上；首發也只有英文，法日韓葡西要等 10 月。所以對做 iOS App、Shortcut 或 App Intent 的獨立開發者來說，這禮拜就要把呼叫優先權跟分區工作流的 SOP 更新一輪。

同一天還有 iPhone 18 Pro 的預購災情。9to5Mac 昨天說大部分預購已經延到 10 月，Pro Max 排到 10 月 6 號到 13 號、Pro 排到 9 月 29 號到 10 月 6 號；只有 9 月 12 號早上 5 點西岸首波預購的人週五 9 月 18 號才能拿到機器。這件事不孤單，跟下個月要開賣的 iPhone Duo 疊在一起看比較清楚——Duo 在台灣是 10 月 16 號晚上 8 點預購，256GB 起跳 74,900 台幣，四階容量到 2TB。高盛給了 11 檔台廠買進評等，鴻海、南電、台積電都在裡面，基本情境 140 萬台、樂觀 350 萬台的首季出貨。台廠折疊 hinge、FPC、光學、Foxconn 專屬組裝這一整串是 Q4 深度題材。如果明天 FOMC 真的升，台幣壓、美元強、蘋概股 rerating 就會是連動訊號。

開發者這一側也熱鬧。MCP 2026-07-28 spec 已經 live，最大的變動是核心變 stateless——原本雙向 stateful 的 session 改成 request/response，這代表 MCP server 可以直接丟到 Cloudflare Workers 或 Vercel edge，不用再養 long-lived 連線。這個 spec 的 SDK 一個月下載已經破 4 億次、年增 4 倍，簡單說 MCP 是 2026 年 AI agent 對外連接的產業標準。搭配這一點，Visual Studio 2026 上禮拜一 GA，GitHub Copilot 的 BYOK preview 三個 SKU 通通預設打開，你可以自帶 Claude、GPT、Gemini 的 API key 混用；JetBrains 也加入 sandbox managed policies 讓企業 IT 中央控管檔案系統、網路跟 proxy。

資料庫這邊，Neon、Supabase、Turso、Convex 四個 serverless 或 edge 選項的分工也越來越清楚：Supabase 適合最快做出 SaaS MVP、附 Auth 跟 storage 一整套；Neon 是純 serverless Postgres 給 indie hacker，冷啟動最快、還有 instant branching；Turso 走 libSQL edge，每個 user 一個 DB，教育社群類特別適合；Convex 則是 TypeScript-first 的反應式資料庫。台灣獨立開發者這一季選型窗很大。

不過模型端也不是每家都乾淨。Grok 4.7 第五個窗又跳票，Musk 說再幾天，結果 xAI docs 還是列 grok-4.6 為最新；DeepSeek 這邊，V4.1 Flash 跟 V4-Pro 的訊息分歧持續，官方 pricing page 說 V4-Pro 續行，但二手訊息說已停用，這對做多模型 router 的人就要多一層 vendor 政策風險稽核。至於 Anthropic Sonnet 5，好消息是原本 9 月 1 號要漲到 3 塊跟 15 塊的計畫取消，2 塊跟 10 塊變永久價，另外還加上 Managed Agents session budget cap，agent 花超過預算會自己停下來。

最後是台灣側。商業服務業 AI 導入 10 萬案還剩五週衝刺、10 月 20 號名義收件，但補助用完就提前關門；11 大類 vertical 很明確，不過規定不能買中國廠牌，這對 DeepSeek 是個過濾點。中秋節 9 月 25 號只剩 10 天，茶葉、保健食品、選物這三個 vertical 進入第二波電商促銷；蝦皮、momo、PChome 20% 手續費壓力還在，酷澎 MAU 已經 990 萬、超過博客來爬到第 4，賣家的私域經營變得更重要。

所以重點是：明天 FOMC 決策定調台幣跟蘋概股 Q4，iOS 27 加 iPhone 18 Pro 延後加 Duo T-31 是消費端的結構性訊號，MCP stateless 加 VS 2026 BYOK 加資料庫四選一是開發者側的實戰工具箱，而台灣獨立開發者最後兩個窗口很清楚——10 萬案剩 35 天、中秋剩 10 天，該衝就衝。
