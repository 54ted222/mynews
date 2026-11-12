今天想聊一下 11 月 13 號這天最重要的幾條創業情報。主軸是 Anthropic 即將上市的 IPO，支線是 OpenAI 跟 Cursor 分手倒數的第一天，另外還有金管會公布的 FinLLM，以及 OpenAI Agent Builder 下線的 T 減 17 天。

先從主角 Anthropic 開始講。這次他們的 IPO book，也就是機構法人下的認購單，在開放後第三天已經出現所謂的 oversubscribed，意思是認購金額遠超過 Anthropic 想要賣出的額度。CNBC 的用詞是 Day 1 book covered，就是第一天帳本就填滿；Bloomberg 的說法更強烈，是 multiple times oversubscribed，被超額認購好幾倍；FT 口徑則是說承銷商正在考慮要不要調升定價區間，也就是從原本的 70 到 78 美元之間，可能會往上拉到 85 甚至 90。

不過這裡有個重要的修正。11 月 12 號我原本預期 pricing day，也就是定價日，最早會落在今天 11 月 13 號。結果 CNBC、FT、Bloomberg 多家媒體收斂的口徑實際是 pricing 落在 11 月 18 號、首日交易 11 月 19 號，中間只隔一天。所以 Anthropic 的 pricing day 情境窗口要往後延 5 天。

再來是 Anthropic 這次宣布的 260 億美元私募。大家可能聽過新聞說 TSMC 台積電也有列名，被不少中文媒體包裝成「台灣 AI 產業鏈縱向整合」的大事。但 11 月 13 號具體金額披露了——Nvidia 100 億美元、Google 也是 100 億美元、AMD 25 億、Broadcom、Micron、微軟各 10 億，TSMC 是 5 億美元，七家裡面排在最後、金額是 Nvidia 跟 Google 的二十分之一。而且這七家拿的是一種叫 Class N 的特殊股份，沒有投票權、也沒有基本經濟權益，要等到轉讓給非關係第三方才會轉換成一般的 Class A 股。

所以簡單說，TSMC 這 5 億比較像是列名象徵，跟真正的「台灣 AI 產業鏈縱向整合」是兩回事。昨天的 brief 把這個敘事放大，今天要修正。治理面上也更明確——這七家對 Anthropic 的實際治理沒有直接影響力，純粹是股權投資。所以第二篇點子我今天就想寫一篇校正文，自己打自己臉也沒關係，敘事風險不收斂會影響後面的預測。

接下來講 OpenAI 跟 Cursor 的分手。11 月 12 號是原本預告的 cutoff 日，今天是 T 加 1，也就是切斷後的第一個工作日。到目前為止，還沒有 OpenAI 或 Cursor 任何一方發出正式的退場公告；BYOK 的 Chat 跟 Agent 功能繼續可以用，Cursor CEO 的口徑「OpenAI 只佔 5% 流量」也沒變。Composer 2.5 在論壇上被指控「品質靜默下調」的那串投訴，48 小時過去 Cursor 官方也還是沒有回應。對那些還重度依賴 GPT-5.6 Sol 的 solo dev，今天就是切 BYOK 後第一天的真實使用體驗窗口，很值得實測。

再來是金管會這邊。金管會宣布 FinLLM 由中信金主導、2026 年底會上線，首階段鎖定銀行業的知識應用。同時金管會公布金融業 AI 六大核心原則，調查顯示已經有 33 家業者在用代理式 AI，不過技術、資安、法遵三大挑戰還是門檻。另外虛擬資產服務法已經完成立法，九項子法包括穩定幣規範，最快 2027 年第一季才會公布。對做 AI 加 crypto SaaS 的台灣 solo dev 來說，這是今年最大的法遵訊號。

這個 FinLLM 其實是台灣 solo dev 少數可以參照的落地路徑。我的意思不是說你要自己做基礎 LLM 來跟中信金拼，而是可以在中信金主導的架構上做補位，例如法遵知識 copilot、風控 copilot、客服 copilot 這類 vertical SaaS，TAM 就是那 33 家已經在用代理式 AI 的業者。

最後一條是 OpenAI Agent Builder 的 EOL 倒數。11 月 30 號全下線，今天是 T 減 17 天。美國那邊再加上感恩節 11 月 26 號的假期，有效遷移窗口其實只剩 13 個工作天。48 小時內還是沒有新的 migration tooling。核心疑慮是——如果你用 ChatKit 把 workflow 嵌到自己產品裡面，11 月 30 號之後這條 workflow 到底還能不能跑？因為 ChatKit 的 session 是綁 workflow ID 的，但 OpenAI 官方一直沒有明確回應。Evals 已經進入 read-only 狀態第 13 天。

重點是這幾件事：Anthropic IPO book 已經被超額認購，pricing 延到 11 月 18 號、首日交易 11 月 19 號；TSMC 在 Anthropic 私募裡的 5 億美元不要過度放大，Class N 沒有投票權也沒有實質經濟權益，昨天敘事要收斂；OpenAI 跟 Cursor 的實質切斷還沒發生，但 T 加 1 的 BYOK 使用體驗是今天的觀察窗口；金管會 FinLLM 2026 年底上線是台灣 B2B 金融業 vertical LLM 的新錨點；OpenAI Agent Builder 11 月 30 號全下線，ChatKit 嵌入疑慮是最後 17 天的核心問號。以上就是今天的每日創業情報，我們明天再見。
