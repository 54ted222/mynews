import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  AlertCircle,
  Download,
  FileText,
  Gauge,
  Loader2,
  Pause,
  Play,
  RefreshCcw,
  Sparkles,
  Square,
  Trash2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { TranscriptDialog } from "@/components/transcript-dialog"
import { markdownToPlainText } from "@/lib/markdown-text"
import { useAISettings } from "@/lib/ai-settings-context"
import { useAiAudio } from "@/lib/use-ai-audio"

type Status = "idle" | "playing" | "paused"
type Source = "transcript" | "body"
type Engine = "ai" | "browser"

const SPEED_OPTIONS = [0.75, 1, 1.25, 1.5, 2] as const

const EXT_BY_FORMAT: Record<string, string> = {
  mp3: "mp3",
  wav: "wav",
  opus: "ogg",
  aac: "aac",
  flac: "flac",
}

function pickVoice(
  voices: SpeechSynthesisVoice[]
): SpeechSynthesisVoice | undefined {
  if (voices.length === 0) return undefined
  const zhTw =
    voices.find((v) => v.lang === "zh-TW") ??
    voices.find((v) => v.lang?.toLowerCase().startsWith("zh-tw")) ??
    voices.find((v) => v.lang?.toLowerCase().startsWith("zh-hant"))
  if (zhTw) return zhTw
  const zh = voices.find((v) => v.lang?.toLowerCase().startsWith("zh"))
  return zh ?? voices[0]
}

function sanitizeFilename(name: string): string {
  return name
    .replace(/[\\/:*?"<>|]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

const supported =
  typeof window !== "undefined" && "speechSynthesis" in window

export function SpeechPlayer({
  content,
  transcript,
  slug,
  title,
}: {
  content: string
  transcript?: string
  slug?: string
  title?: string
}) {
  const hasTranscript = Boolean(transcript)
  const { settings, hasApiKey } = useAISettings()

  const [status, setStatus] = useState<Status>("idle")
  const [engine, setEngine] = useState<Engine>("ai")
  const [voice, setVoice] = useState<SpeechSynthesisVoice | undefined>()
  const [source, setSource] = useState<Source>(
    hasTranscript ? "transcript" : "body"
  )
  const [dialogOpen, setDialogOpen] = useState(false)
  const [playbackRate, setPlaybackRate] = useState<number>(1)

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSource(hasTranscript ? "transcript" : "body")
  }, [hasTranscript])

  const raw = source === "transcript" && transcript ? transcript : content
  const plainText = useMemo(() => markdownToPlainText(raw), [raw])

  const audioSlug = slug ? `${slug}::${source}` : null
  const ai = useAiAudio(audioSlug, plainText)

  useEffect(() => {
    if (!supported) return
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices()
      setVoice(pickVoice(voices))
    }
    loadVoices()
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices)
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices)
    }
  }, [])

  const stop = useCallback(() => {
    if (supported) window.speechSynthesis.cancel()
    utteranceRef.current = null
    const audio = audioRef.current
    if (audio) {
      audio.pause()
      try {
        audio.currentTime = 0
      } catch {
        // ignore
      }
    }
    setStatus("idle")
  }, [])

  // 內容換頁／簽章變動時，先停掉目前播放
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    stop()
  }, [audioSlug, stop])

  useEffect(() => {
    return () => {
      if (supported) window.speechSynthesis.cancel()
    }
  }, [])

  // AI engine 即時套用速度；browser engine 在 onChangeRate 中重啟
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate
    }
  }, [playbackRate])

  const playBrowser = useCallback(
    (rate: number) => {
      if (!supported || !plainText) return
      const synth = window.speechSynthesis

      if (status === "paused" && engine === "browser") {
        synth.resume()
        setStatus("playing")
        return
      }

      synth.cancel()
      const utter = new SpeechSynthesisUtterance(plainText)
      utter.lang = voice?.lang ?? "zh-TW"
      if (voice) utter.voice = voice
      utter.rate = rate
      utter.pitch = 1
      utter.onend = () => {
        utteranceRef.current = null
        setStatus("idle")
      }
      utter.onerror = () => {
        utteranceRef.current = null
        setStatus("idle")
      }
      utteranceRef.current = utter
      synth.speak(utter)
      setEngine("browser")
      setStatus("playing")
    },
    [engine, plainText, status, voice]
  )

  const playAi = useCallback(() => {
    const url = ai.url
    if (!url) return
    let audio = audioRef.current
    if (!audio) {
      audio = new Audio()
      audio.preload = "auto"
      audio.addEventListener("ended", () => setStatus("idle"))
      audio.addEventListener("pause", () => {
        if (audio && !audio.ended && audio.currentTime > 0) {
          setStatus((prev) => (prev === "playing" ? "paused" : prev))
        }
      })
      audio.addEventListener("play", () => setStatus("playing"))
      audio.addEventListener("error", () => setStatus("idle"))
      audioRef.current = audio
    }
    if (audio.src !== url) {
      audio.src = url
    }
    audio.playbackRate = playbackRate
    setEngine("ai")
    void audio.play().catch(() => setStatus("idle"))
  }, [ai.url, playbackRate])

  const play = useCallback(() => {
    if (ai.url) {
      playAi()
    } else {
      playBrowser(playbackRate)
    }
  }, [ai.url, playAi, playBrowser, playbackRate])

  const pause = useCallback(() => {
    if (status !== "playing") return
    if (engine === "ai" && audioRef.current) {
      audioRef.current.pause()
      setStatus("paused")
      return
    }
    if (supported) {
      window.speechSynthesis.pause()
      setStatus("paused")
    }
  }, [engine, status])

  // AI engine 用 audio.playbackRate 立即生效；
  // 瀏覽器 TTS 不支援播放中改速度，下次播放才套用。
  const onChangeRate = (next: number) => {
    setPlaybackRate(next)
  }

  const switchSource = () => {
    if (!hasTranscript) return
    stop()
    setSource((prev) => (prev === "transcript" ? "body" : "transcript"))
  }

  const onGenerate = (force = false) => {
    stop()
    void ai.generate(force)
  }

  const onRemove = async () => {
    if (!window.confirm("刪除這段已快取的 AI 語音？")) return
    stop()
    await ai.remove()
  }

  const onDownload = () => {
    if (!ai.url) return
    const ext = EXT_BY_FORMAT[settings.format] ?? "mp3"
    const base = sanitizeFilename(title ?? slug ?? "audio") || "audio"
    const a = document.createElement("a")
    a.href = ai.url
    a.download = `${base}.${ext}`
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  if (!supported && !hasApiKey) {
    return (
      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        此瀏覽器不支援朗讀功能
        {hasTranscript && (
          <>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setDialogOpen(true)}
            >
              <FileText />
              <span>查看逐字稿</span>
            </Button>
            <TranscriptDialog
              open={dialogOpen}
              onClose={() => setDialogOpen(false)}
              text={transcript ?? ""}
            />
          </>
        )}
      </div>
    )
  }

  const isPlaying = status === "playing"
  const usingAi = Boolean(ai.url)
  const playLabel = isPlaying
    ? "暫停"
    : status === "paused"
      ? "繼續"
      : usingAi
        ? "播放 AI 語音"
        : source === "transcript"
          ? "朗讀逐字稿"
          : "朗讀全文"

  const showAiRow = ai.enabled
  const generatingLabel =
    ai.progress && ai.progress.total > 1
      ? `生成中 ${ai.progress.done}/${ai.progress.total}`
      : "生成中…"

  return (
    <div
      className="flex flex-col gap-2"
      role="group"
      aria-label="文章朗讀"
    >
      {/* 播放列 */}
      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          variant={usingAi ? "default" : "outline"}
          size="sm"
          onClick={isPlaying ? pause : play}
          aria-label={playLabel}
          disabled={!plainText || (!supported && !usingAi)}
        >
          {isPlaying ? <Pause /> : <Play />}
          <span>{playLabel}</span>
        </Button>

        {status !== "idle" && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={stop}
            aria-label="停止朗讀"
          >
            <Square />
            <span>停止</span>
          </Button>
        )}

        <label
          className="inline-flex h-7 items-center gap-1 rounded-md border border-border bg-background px-2 text-xs text-muted-foreground hover:bg-muted"
          title="播放速度"
        >
          <Gauge className="size-3.5" />
          <select
            value={playbackRate}
            onChange={(e) => onChangeRate(Number(e.target.value))}
            className="cursor-pointer bg-transparent text-xs text-foreground outline-none"
            aria-label="播放速度"
          >
            {SPEED_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s.toString().replace(/\.0$/, "")}x
              </option>
            ))}
          </select>
        </label>

        {hasTranscript && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={switchSource}
            aria-pressed={source === "transcript"}
            title={
              source === "transcript"
                ? "目前播放逐字稿，點擊切換為全文"
                : "目前播放全文，點擊切換為逐字稿"
            }
          >
            <span className="text-xs">
              {source === "transcript" ? "來源：逐字稿" : "來源：全文"}
            </span>
          </Button>
        )}

        {hasTranscript && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setDialogOpen(true)}
            aria-label="查看逐字稿"
          >
            <FileText />
            <span>查看逐字稿</span>
          </Button>
        )}
      </div>

      {/* AI 列 */}
      {showAiRow && (
        <div className="flex flex-wrap items-center gap-2 border-t border-border/50 pt-2 text-xs">
          {!ai.cached && (
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => onGenerate(false)}
              disabled={ai.generating || !plainText}
              aria-label="生成 AI 語音"
              title={`使用 ${settings.model} / ${settings.voice} 生成`}
            >
              {ai.generating ? (
                <Loader2 className="animate-spin" />
              ) : (
                <Sparkles />
              )}
              <span>{ai.generating ? generatingLabel : "生成 AI 語音"}</span>
            </Button>
          )}

          {ai.cached && (
            <>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
                <Sparkles className="size-3" /> AI 語音
              </span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => onGenerate(true)}
                disabled={ai.generating}
                aria-label="重新生成 AI 語音"
                title="使用目前設定重新生成"
              >
                {ai.generating ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <RefreshCcw />
                )}
                <span>{ai.generating ? generatingLabel : "更新"}</span>
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={onDownload}
                aria-label="下載 AI 語音"
                title="下載音檔"
              >
                <Download />
                <span>下載</span>
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={onRemove}
                aria-label="刪除 AI 語音快取"
                title="刪除這段 AI 語音快取"
              >
                <Trash2 />
              </Button>
            </>
          )}

          {ai.error && (
            <span className="inline-flex items-center gap-1 text-destructive">
              <AlertCircle className="size-3.5" /> {ai.error}
            </span>
          )}
        </div>
      )}

      {hasTranscript && (
        <TranscriptDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          text={transcript ?? ""}
        />
      )}
    </div>
  )
}
