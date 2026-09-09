今天想聊的是 9 月 10 號星期四這一天的六條主線。先講最熱的：Apple 的「Surprise and Shine」發表會台北時間今天凌晨一點剛結束，這是 Ternus 接任 CEO 之後第一場主場戲，端出來的東西比想像中密集。

先從那支折疊機講起。傳聞叫 iPhone Ultra，結果正式名字叫 iPhone Duo，起售價 1,999 美金、256GB 起跳，外螢幕 5.4 吋、攤開來 7.6 吋，是 book-style 書本翻頁型設計，晶片是 A20 Pro、台積電 2 奈米、指紋辨識回歸走 Touch ID、C2 modem、48MP Fusion 相機。時程要記一下：10 月 16 號預購、10 月 23 號開賣，比 iPhone 18 Pro 系列晚一步。這代表什麼？代表 9 月底跟 10 月中會有兩波供應鏈題材，不是一波打完。iPhone 18 Pro 賣 1,199、Pro Max 賣 1,299，比前一代各貴 100 塊。Watch 也更新了 S12 跟 Ultra 4，AirPods 5 分有 ANC 跟沒 ANC 兩個版本，然後 Apple 還推了一個新平台叫 HomeOS，是智慧家庭中樞，這是 Apple 首度的新硬體品類，對開發者來說是個早期窗。

再來是今天最爆炸的一則：iOS 27 的 Siri AI 後端是 Google Gemini。對，就是 Google。這是 Apple 首度大規模跟外部前緣 AI 廠商合作，過去傳聞可能是 Anthropic 或 OpenAI，最後選了 Google。不過有三個限制第一天就浮出來：第一，歐盟跟中國不上線，歐盟是 DMA 法規太複雜，中國是跨境資料傳輸卡關；第二，Siri AI 有每日呼叫上限；第三，iCloud+ 訂閱者可以拿到比較高的 cap。台灣屬於 iCloud+ 主要輸出市場，所以影響很直接，做跨境 SaaS 的朋友要開始想「Siri AI 呼叫優先權」怎麼談定價。

第三條主線切回台股。9 月 9 號收盤 47,183 點，微漲 0.16%，但真正的主角是光電類股，全類股漲幅第一、拉了 3.55%。玉晶光直接漲停到 1,110 塊，重返千金股行列；大立光處置出關前也拉了 5.69%。光電 68 檔裡面 51 檔紅、2 檔漲停。反倒是台積電這天中斷連四漲，微跌 5 塊到 2,465。簡單說，Apple event 前的「光學 rally」這個 pattern 又驗證一次，蘋概「Made with Taiwan」的敘事還在燒。不過要提醒的是，台積電中斷連漲代表「buy the rumor, sell the news」可能已經啟動，光學股是短線題材，10 月 23 號折疊機開賣後如果 review 不佳，是有可能一次回吐的。

第四條要看明天，也就是 9 月 11 號的 CPI，現在是 T-1。Reuters 在 9 月 4 到 9 號訪調了 93 位經濟學家，七成預期 Fed 會 hold 在 3.50 到 3.75 這個區間，但同時升息預期是升溫的。預測 CPI 月增 0.4%、年增率 3.4%。花旗核心 CPI 預估月增 0.184%、年增率降到 2.3%，這是 hold 派的新支撐。但美銀在另一邊喊：如果通膨意外高於預期，官員可能不再等待、直接啟動升息循環。所以兩個劇本都要準備，hike 情境是美元強、台幣壓、跨境 SaaS ARPU 縮水、記憶體跟 CoWoS 續看多；hold 情境是美元弱、台股續強。今天是跨境 SaaS 匯率避險跟訂閱定價敏感度 dashboard 建立的最後窗口。

第五條是開發者最該關注的：Cloudflare 跟 Cursor 合作推出 Self-Hosted Cloud Agents，9 月 GA 了。這個要拆開解釋一下。以前你用 Cursor 的 Cloud Agents，整個 agent 環境是 Cursor 全托管，對合規產業來說沒辦法接受。現在的新玩法是：Cursor 只主控 agent loop、推理跟規劃，但實際下指令、改檔案、動 repo 這些操作，全部跑在你自己的 Cloudflare Container 裡面，每個 session 獨立 isolate。這對金融、醫療、法律、政府這種合規敏感 vertical 是關鍵解方——「自控 infra 加上 Cursor 的開發體驗」變成台灣 SI 對客戶的新招。這是 Cloudflare Agent Cloud 從 4 月發布之後，首次拿到 Cursor 級的整合。

其他一些短線的：Grok 4.7 目標 9/12 上線但 xAI 到今天都還沒放 model card、API ID、pricing，先不要為未發布模型改工作流；DeepSeek V4.1 Flash 私測今天到期，20 concurrent，正式 GA 預估一到四週，成本敏感 vertical 值得先評估；Vercel 這個月三軸 Next.js 16.3 加 AI SDK 6 加 AI Gateway Fable 5.1，16.3.3 LTS 修了關鍵漏洞、本週必升；Claude Code v2.1.263 9 月 6 號發布、新增 SendFeedback 工具、bashOutputMaxChars 拉到 128K；台灣電商這邊，酷澎 MAU 衝到 990 萬、超越博客來到第 4 名，蝦皮 2026 手續費總費率拉到 20%，中小賣家私域大遷徙的敘事還在跑，加上商業服務業 10 萬 AI 補助 10/20 截止、剩六週衝刺窗。

重點是，今天這一天最該行動的三件事：第一，把 iPhone Duo 43 天上市倒數 dashboard 骨架寫完，抓 9/22 到 10/2 iPhone 18 Pro 上市、跟 10/16 折疊機預購到 10/23 開賣這兩波光學供應鏈 rerating 時窗，順便補一份 Siri AI Gemini 整合 FAQ。第二，Cursor 加 Cloudflare Container 合規 vertical 的 pitch deck 要開始畫，金融、醫療、法律三個 vertical 各做一份 audit trail template。第三，蝦皮遷徙加酷澎整合的 vertical package 要趁 10/20 前六週衝刺，茶葉、保健食品、美容三個 vertical 各出一版，outbound 30 到 50 家中小賣家。明天 CPI 開盤反應會是這週第一個檢查點，就先聊到這裡。
