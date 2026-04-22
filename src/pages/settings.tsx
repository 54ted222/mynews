import { useCallback, useEffect, useState } from "react"
import { CheckCircle2, Eye, EyeOff, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DEFAULT_AI_SETTINGS, type AISettings } from "@/lib/ai-settings"
import { useAISettings } from "@/lib/ai-settings-context"
import {
  clearAllCachedAudio,
  listCachedAudio,
} from "@/lib/audio-cache"
import { quickProbe } from "@/lib/openai-tts"
import { cn } from "@/lib/utils"

const TTS_MODELS = ["gpt-4o-mini-tts", "tts-1", "tts-1-hd"]
const TTS_VOICES = [
  "alloy",
  "ash",
  "ballad",
  "coral",
  "echo",
  "fable",
  "nova",
  "onyx",
  "sage",
  "shimmer",
  "verse",
]
const TTS_FORMATS: AISettings["format"][] = ["mp3", "wav", "opus", "aac", "flac"]

const inputClasses = cn(
  "h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm",
  "outline-none transition-colors",
  "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40",
  "disabled:cursor-not-allowed disabled:opacity-60"
)

const textareaClasses = cn(
  "min-h-[96px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm",
  "outline-none transition-colors",
  "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
)

const labelClasses = "flex flex-col gap-1.5 text-sm"
const fieldHintClasses = "text-xs text-muted-foreground"

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

export function SettingsPage() {
  const { settings, update, reset } = useAISettings()
  const [showKey, setShowKey] = useState(false)
  const [savedAt, setSavedAt] = useState<number | null>(null)
  const [testing, setTesting] = useState(false)
  const [testResult, setTestResult] = useState<
    { ok: true } | { ok: false; message: string } | null
  >(null)
  const [cacheCount, setCacheCount] = useState<number | null>(null)
  const [cacheBytes, setCacheBytes] = useState<number>(0)
  const [clearing, setClearing] = useState(false)

  const refreshCache = useCallback(async () => {
    const entries = await listCachedAudio()
    setCacheCount(entries.length)
    setCacheBytes(entries.reduce((sum, e) => sum + e.bytes, 0))
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void refreshCache()
  }, [refreshCache])

  useEffect(() => {
    if (savedAt === null) return
    const id = window.setTimeout(() => setSavedAt(null), 2200)
    return () => window.clearTimeout(id)
  }, [savedAt])

  const onTestKey = async () => {
    if (!settings.apiKey.trim()) {
      setTestResult({ ok: false, message: "請先輸入 API key" })
      return
    }
    setTesting(true)
    setTestResult(null)
    try {
      await quickProbe(settings.apiKey.trim())
      setTestResult({ ok: true })
    } catch (err) {
      setTestResult({
        ok: false,
        message: err instanceof Error ? err.message : "測試失敗",
      })
    } finally {
      setTesting(false)
    }
  }

  const onClearCache = async () => {
    if (!window.confirm("確定要清除所有已快取的 AI 語音嗎？")) return
    setClearing(true)
    try {
      await clearAllCachedAudio()
      await refreshCache()
    } finally {
      setClearing(false)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h1 className="font-serif text-2xl font-bold sm:text-3xl">設定</h1>
        <p className="text-sm text-muted-foreground">
          API key 與相關設定僅儲存於這台瀏覽器（localStorage 與 IndexedDB），不會上傳。
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>OpenAI API key</CardTitle>
          <CardDescription>
            設定後，文章頁的播放鍵旁會出現「生成 AI 語音」按鈕。
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <label className={labelClasses}>
            <span>API key</span>
            <div className="flex items-center gap-2">
              <input
                type={showKey ? "text" : "password"}
                autoComplete="off"
                spellCheck={false}
                value={settings.apiKey}
                onChange={(e) => update({ apiKey: e.target.value })}
                placeholder="sk-..."
                className={inputClasses}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={() => setShowKey((v) => !v)}
                aria-label={showKey ? "隱藏" : "顯示"}
                title={showKey ? "隱藏" : "顯示"}
              >
                {showKey ? <EyeOff /> : <Eye />}
              </Button>
            </div>
            <span className={fieldHintClasses}>
              留空即停用 AI 語音；只用瀏覽器內建朗讀。
            </span>
          </label>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onTestKey}
              disabled={testing || !settings.apiKey.trim()}
            >
              {testing ? "測試中…" : "測試連線"}
            </Button>
            {testResult?.ok && (
              <span className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="size-3.5" /> 連線成功
              </span>
            )}
            {testResult && !testResult.ok && (
              <span className="text-xs text-destructive">
                {testResult.message}
              </span>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI 語音參數</CardTitle>
          <CardDescription>
            參數變動會視為新的語音版本，原本的快取仍會保留。
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClasses}>
              <span>模型</span>
              <select
                value={settings.model}
                onChange={(e) => update({ model: e.target.value })}
                className={inputClasses}
              >
                {TTS_MODELS.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </label>

            <label className={labelClasses}>
              <span>語音</span>
              <select
                value={settings.voice}
                onChange={(e) => update({ voice: e.target.value })}
                className={inputClasses}
              >
                {TTS_VOICES.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </label>

            <label className={labelClasses}>
              <span>音檔格式</span>
              <select
                value={settings.format}
                onChange={(e) =>
                  update({ format: e.target.value as AISettings["format"] })
                }
                className={inputClasses}
              >
                {TTS_FORMATS.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
              <span className={fieldHintClasses}>
                長文章會自動分段送出，分段串接以 MP3 最穩定，建議保留預設值。
              </span>
            </label>

            <label className={labelClasses}>
              <span>語速（{settings.speed.toFixed(2)}）</span>
              <input
                type="range"
                min={0.25}
                max={4}
                step={0.05}
                value={settings.speed}
                onChange={(e) => update({ speed: Number(e.target.value) })}
                className="h-9 w-full"
              />
            </label>
          </div>

          <label className={labelClasses}>
            <span>提示詞 / 指令（可控制語氣、口音）</span>
            <textarea
              value={settings.instructions}
              onChange={(e) => update({ instructions: e.target.value })}
              className={textareaClasses}
              placeholder="例：用親切的口吻、台灣腔朗讀，速度自然。"
            />
            <span className={fieldHintClasses}>
              僅 gpt-4o-mini-tts 等支援 instructions 的模型才會生效。
            </span>
          </label>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setSavedAt(Date.now())
              }}
            >
              已自動儲存
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                if (window.confirm("回復為預設值？API key 不會被清除。")) {
                  reset()
                  update({ apiKey: settings.apiKey })
                }
              }}
            >
              回復預設
            </Button>
            <span className="text-xs text-muted-foreground">
              預設模型：{DEFAULT_AI_SETTINGS.model}
            </span>
            {savedAt && (
              <span className="text-xs text-emerald-600 dark:text-emerald-400">
                已儲存
              </span>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>語音快取</CardTitle>
          <CardDescription>
            儲存於本機 IndexedDB，避免重複生成相同內容。
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="text-sm">
            目前快取：
            <span className="font-medium">
              {cacheCount === null ? "讀取中…" : `${cacheCount} 個檔案`}
            </span>
            {cacheCount !== null && cacheCount > 0 && (
              <span className="text-muted-foreground">
                （{formatBytes(cacheBytes)}）
              </span>
            )}
          </div>
          <div>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={onClearCache}
              disabled={clearing || cacheCount === 0}
            >
              <Trash2 />
              <span>{clearing ? "清除中…" : "清除全部快取"}</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
