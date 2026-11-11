今天想聊兩條主線，一條在編碼工具這一側，一條在模型供應商那一側——而且它們今天剛好同時到了關鍵節點。

第一條是 OpenAI 和 Cursor 的分手。很多外部媒體口徑都指向，11 月 12 日就是 OpenAI 停掉 Cursor 內建 OpenAI 模型存取的那個 cutoff day。到了今天，Hackernoon、Tom's Guide、cybernews 這幾家媒體都還維持這個日子，而 OpenAI 自家那頁 help page 從 8 月 29 號後就沒再更新過，等於官方口徑和實際體感有點脫節。簡單說，今天就是「最後一次在 Cursor 裡面用 OpenAI 原廠模型」的一天，明天開始理論上就要走別的路。

替代路徑其實有四條。第一條是直接吃 Cursor 的 Composer 2.5，底層是 Moonshot AI 的 Kimi K2.5，Cursor 自己在上面又加了一層 RL 微調。不過最近 Cursor forum 上面有一串很熱的帖，主題叫「Composer 2.5 是不是被偷偷砍了？」，大約兩週前就開始累積投訴，Cursor 到今天也沒正面回應。所以如果你原本重度依賴 OpenAI 的 GPT-5.6 Sol，今天不是換 Composer 2.5 就好，還要自己跑 benchmark 確認品質。第二條路是切 Claude Opus 5.5 直連。第三條是走 BYOK，自己帶 OpenAI API key，但只能用在 Chat 和 Agent，Tab、Auto、Cloud Agents 都不吃這套。第四條是直接改用 OpenAI 自家的 Codex CLI。Cursor CEO 之前有口徑說 OpenAI 流量只占他們 5%，所以商業面影響不大，但對個別重度使用 GPT 的開發者還是很痛。

第二條主線更有分量。Anthropic 昨天提交了 S-1 的 A2 修正，同一份文件裡面做了兩件事：一個是把 IPO 定價區間填進去，70 到 78 美元、825M 股，另一個是第一次具體公開——他們自己在 Responsible Scaling Policy 裡面設的 Capability Threshold，其中一個已經被觸發了。白話講就是 Anthropic 自己承認，公司內部已經有模型能力進化快到踩上 RSP 的安全紅線。具體是 ASL-3 還是 ASL-4 這次沒說，要等後續補充。對 Claude 重度用戶的意義是：API 本身不會動，但 Opus 5.6、Sonnet 5.6 這些下一個世代的 release 節奏，可能要被 RSP 的審核程序拖慢一點。

這份 A2 另外一個很值得台灣觀眾注意的地方，是私募配售的名單。Fortune 11 月 10 號的口徑是：Nvidia 和 Google 各自以 IPO 價買 100 億美元的股票，另外還有一筆 260 億美元的 private placement，裡面明確點名 AMD、Broadcom、Micron、微軟，還有台積電。這是 TSMC 第一次被公開寫進一間美國 AI 模型公司的股權結構。對台股投資人來說，這件事剛好疊加在 TSMC 10 月的月營收上——5,868 億台幣、年增 59.7%、單月就超過 Q4 guidance 的上限。晶圓代工龍頭同一週，一邊營收超預期，一邊被一間估值天花板 1.4 兆美元的 AI 模型公司點名入股，這條敘事以後會被反覆引用。首日交易目前 CNBC 收斂到 11 月 19 號，等於再過一週就會看到 Anthropic 真正上市。

不過今天還有兩個次級節點不能漏掉。一個是 OpenAI Agent Builder 的 EOL 倒數。11 月 30 號整組下線，從今天算剩 18 天，扣掉感恩節美國那一週，實際有效的 migration 窗口只剩 14 個工作天。Evals 已經進入 read-only 第 12 天。官方那份 migration guide 自己也承認：Code 轉 Agents SDK 的 TS 或 Python 匯出，只是 scaffold，不保證 workflow graph 和每項行為完整遷移。所以如果你還在 Agent Builder 上面跑 production，今天不是觀望日，是最後動手日。替代工具堆疊，可以考慮用 Promptfoo 跑評測、再用 Langfuse 補事後觀測，兩個都是開源，社群版免費。

再來，台灣兩條政策線今天也到了可以作筆記的切片。立法院那個中小微企業 1,000 億轉型條例，從 9 月 29 號開議算起第 44 天，本週照理說是委員會排審的觀察週，到今天還是沒有媒體新進度，11 月通過的機率持續偏低，R&D 抵減 20%、設備投資抵減門檻降到 25 萬這些 soundbite，還只是草案文字。數發部那個 100 億 AI 投資方案也一樣，T+39 天，8 月底累計 10 家、2.55 億元，到 11 月都沒有新 pipeline 公布，比較實用的替代路徑反而是 2026 年 1 月起 SBIR 上限調高，先期研究拉到 150 萬、研究開發 1,200 萬，對 solo dev 來說更直接。

重點是，11 月 12 日這個切片，有兩條大事件在同一天跑到台面上——OpenAI 退 Cursor 的實際 cutoff，加上 Anthropic 一邊填 IPO 價格、一邊承認自己家安全警報已經被模型能力踩爆。再加上台積電列名 Anthropic 私募、Agent Builder 剩不到三週、台灣兩條政策都停在原地，整天的畫面其實很清楚：美國這一側供應商重新洗牌進入 endgame，台灣這一側則是個人開發者要自己動手挑路徑，政策短期內幫不上太多忙。今天如果你只能做一件事，就是確認你還依不依賴 OpenAI 模型在 Cursor 裡面的那條連線——如果是，今天就是最後一次順手把 BYOK 或 Codex CLI 切好的機會。
