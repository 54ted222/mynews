import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  AlertCircle,
  FileText,
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
import { aiSettingsHash } from "@/lib/ai-settings"
import { useAISettings } from "@/lib/ai-settings-context"
import {
  deleteCachedAudio,
  getCachedAudio,
  putCachedAudio,
} from "@/lib/audio-cache"
import { generateSpeech } from "@/lib/openai-tts"

type Status = "idle" | "playing" | "paused" | "loading"
type Source = "transcript" | "body"
type Engine = "ai" | "browser"

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

function djb2(s: string): string {
  let hash = 5381
  for (let i = 0; i < s.length; i++) {
    hash = ((hash << 5) + hash) ^ s.charCodeAt(i)
  }
  return (hash >>> 0).toString(16)
}

const supported =
  typeof window !== "undefined" && "speechSynthesis" in window

export function SpeechPlayer({
  content,
  transcript,
  slug,
}: {
  content: string
  transcript?: string
  slug?: string
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

  const [aiUrl, setAiUrl] = useState<string | null>(null)
  const [aiCached, setAiCached] = useState(false)
  const [generating, setGenerating] = useState(false)
  const [genError, setGenError] = useState<string | null>(null)

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const aiUrlRef = useRef<string | null>(null)

  useEffect(() => {
    aiUrlRef.current = aiUrl
  }, [aiUrl])

  useEffect(() => {
    setSource(hasTranscript ? "transcript" : "body")
  }, [hasTranscript])

  const raw = source === "transcript" && transcript ? transcript : content
  const plainText = useMemo(() => markdownToPlainText(raw), [raw])

  const cacheKey = slug ? `${slug}::${source}` : null
  const signature = useMemo(
    () => `${aiSettingsHash(settings)}::${djb2(plainText)}`,
    [settings, plainText]
  )

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

  useEffect(() => {
    let cancelled = false
    queueMicrotask(() => {
      if (cancelled) return
      if (aiUrlRef.current) {
        URL.revokeObjectURL(aiUrlRef.current)
        aiUrlRef.current = null
      }
      setAiUrl(null)
      setAiCached(false)
      stop()
    })

    if (!cacheKey) return
    void (async () => {
      const entry = await getCachedAudio(cacheKey, signature)
      if (cancelled || !entry) return
      const url = URL.createObjectURL(entry.blob)
      aiUrlRef.current = url
      setAiUrl(url)
      setAiCached(true)
    })()

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cacheKey, signature])

  useEffect(() => {
    return () => {
      if (supported) window.speechSynthesis.cancel()
      if (aiUrlRef.current) {
        URL.revokeObjectURL(aiUrlRef.current)
        aiUrlRef.current = null
      }
    }
  }, [])

  const generateAi = useCallback(
    async (force = false) => {
      if (!hasApiKey || !cacheKey || !plainText) return
      stop()
      setGenerating(true)
      setGenError(null)
      try {
        if (force) {
          await deleteCachedAudio(slug ?? "", signature)
        }
        const result = await generateSpeech(plainText, settings)
        await putCachedAudio(cacheKey, signature, result.blob, result.mime)
        if (aiUrlRef.current) URL.revokeObjectURL(aiUrlRef.current)
        const url = URL.createObjectURL(result.blob)
        aiUrlRef.current = url
        setAiUrl(url)
        setAiCached(true)
      } catch (err) {
        setGenError(err instanceof Error ? err.message : "生成失敗")
      } finally {
        setGenerating(false)
      }
    },
    [cacheKey, hasApiKey, plainText, settings, signature, slug, stop]
  )

  const playBrowser = useCallback(() => {
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
    utter.rate = 1
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
  }, [engine, plainText, status, voice])

  const playAi = useCallback(() => {
    const url = aiUrl
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
    setEngine("ai")
    void audio.play().catch(() => setStatus("idle"))
  }, [aiUrl])

  const play = useCallback(() => {
    if (aiUrl) {
      playAi()
    } else {
      playBrowser()
    }
  }, [aiUrl, playAi, playBrowser])

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

  const switchSource = () => {
    if (!hasTranscript) return
    stop()
    setSource((prev) => (prev === "transcript" ? "body" : "transcript"))
  }

  const removeAi = async () => {
    if (!cacheKey) return
    if (!window.confirm("刪除這段已快取的 AI 語音？")) return
    stop()
    await deleteCachedAudio(slug ?? "", signature)
    if (aiUrlRef.current) {
      URL.revokeObjectURL(aiUrlRef.current)
      aiUrlRef.current = null
    }
    setAiUrl(null)
    setAiCached(false)
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
  const usingAi = Boolean(aiUrl)
  const playLabel = isPlaying
    ? "暫停"
    : status === "paused"
      ? "繼續"
      : usingAi
        ? "播放 AI 語音"
        : source === "transcript"
          ? "朗讀逐字稿"
          : "朗讀全文"

  return (
    <div
      className="flex flex-wrap items-center gap-2"
      role="group"
      aria-label="文章朗讀"
    >
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

      {hasApiKey && cacheKey && !aiCached && (
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={() => generateAi(false)}
          disabled={generating || !plainText}
          aria-label="生成 AI 語音"
          title={`使用 ${settings.model} / ${settings.voice} 生成`}
        >
          {generating ? <Loader2 className="animate-spin" /> : <Sparkles />}
          <span>{generating ? "生成中…" : "生成 AI 語音"}</span>
        </Button>
      )}

      {hasApiKey && cacheKey && aiCached && (
        <>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
            <Sparkles className="size-3" /> AI 語音
          </span>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => generateAi(true)}
            disabled={generating}
            aria-label="重新生成 AI 語音"
            title="使用目前設定重新生成"
          >
            {generating ? (
              <Loader2 className="animate-spin" />
            ) : (
              <RefreshCcw />
            )}
            <span>{generating ? "生成中" : "更新"}</span>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={removeAi}
            aria-label="刪除 AI 語音快取"
            title="刪除這段 AI 語音快取"
          >
            <Trash2 />
          </Button>
        </>
      )}

      {genError && (
        <span className="inline-flex items-center gap-1 text-xs text-destructive">
          <AlertCircle className="size-3.5" /> {genError}
        </span>
      )}

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
        <>
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
