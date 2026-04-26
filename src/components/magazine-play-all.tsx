import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  AlertCircle,
  Gauge,
  Loader2,
  Pause,
  Play,
  Sparkles,
  Square,
  SkipForward,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  getCachedAudio,
  putCachedAudio,
} from "@/lib/audio-cache"
import { aiSettingsHash } from "@/lib/ai-settings"
import { useAISettings } from "@/lib/ai-settings-context"
import { generateSpeech } from "@/lib/openai-tts"
import { markdownToPlainText } from "@/lib/markdown-text"
import { loadMagazineArticle, type MagazineTopic } from "@/lib/magazine"

type Status = "idle" | "loading" | "generating" | "playing" | "paused"

type QueueItem = {
  cacheSlug: string
  source: "body" | "transcript"
  text: string
  label: string
}

const SPEED_OPTIONS = [0.75, 1, 1.25, 1.5, 2] as const

function djb2(s: string): string {
  let hash = 5381
  for (let i = 0; i < s.length; i++) {
    hash = ((hash << 5) + hash) ^ s.charCodeAt(i)
  }
  return (hash >>> 0).toString(16)
}

function signatureFor(item: QueueItem, settingsHash: string): string {
  return `${settingsHash}::${djb2(item.text)}`
}

function fullSlug(item: QueueItem): string {
  return `${item.cacheSlug}::${item.source}`
}

export function MagazinePlayAll({ topic }: { topic: MagazineTopic }) {
  const { settings, hasApiKey } = useAISettings()

  const [status, setStatus] = useState<Status>("idle")
  const [queue, setQueue] = useState<QueueItem[]>([])
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [progress, setProgress] = useState<{
    item: number
    total: number
    chunkDone?: number
    chunkTotal?: number
  } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [cachedCount, setCachedCount] = useState(0)
  const [cacheVersion, setCacheVersion] = useState(0)
  const [playbackRate, setPlaybackRate] = useState<number>(1)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const urlRef = useRef<string | null>(null)
  const queueRef = useRef<QueueItem[]>([])
  const indexRef = useRef(-1)
  const cancelRef = useRef(false)
  const settingsRef = useRef(settings)
  const playAtRef = useRef<((i: number) => Promise<void>) | null>(null)
  const stopRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    settingsRef.current = settings
  }, [settings])

  // Build queue when topic changes: intro + every article (prefer transcript when present)
  useEffect(() => {
    let cancelled = false
    void (async () => {
      setStatus("loading")
      const items: QueueItem[] = []

      const introBody = topic.intro?.trim() ? markdownToPlainText(topic.intro) : ""
      const introText = topic.introTranscript?.trim() || introBody
      if (introText) {
        items.push({
          cacheSlug: `magazine-${topic.slug}-intro`,
          source: topic.introTranscript ? "transcript" : "body",
          text: introText,
          label: `序・${topic.title}`,
        })
      }

      for (let i = 0; i < topic.articles.length; i++) {
        if (cancelled) return
        const meta = topic.articles[i]
        const article = await loadMagazineArticle(topic.slug, meta.slug)
        if (cancelled) return
        if (!article) continue
        const bodyText = markdownToPlainText(article.content)
        const text = article.transcript?.trim() || bodyText
        if (!text) continue
        items.push({
          cacheSlug: `magazine-${topic.slug}-${meta.slug}`,
          source: article.transcript ? "transcript" : "body",
          text,
          label: `${String(i + 1).padStart(2, "0")}・${meta.title}`,
        })
      }

      if (cancelled) return
      queueRef.current = items
      setQueue(items)
      setStatus("idle")
    })()
    return () => {
      cancelled = true
    }
  }, [topic])

  // Count cached items for current settings
  const settingsHash = useMemo(() => aiSettingsHash(settings), [settings])
  useEffect(() => {
    let cancelled = false
    void (async () => {
      let count = 0
      for (const item of queue) {
        const cached = await getCachedAudio(
          fullSlug(item),
          signatureFor(item, settingsHash)
        )
        if (cancelled) return
        if (cached) count++
      }
      if (!cancelled) setCachedCount(count)
    })()
    return () => {
      cancelled = true
    }
  }, [queue, settingsHash, cacheVersion])

  // Apply rate to live audio
  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = playbackRate
  }, [playbackRate])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      const audio = audioRef.current
      if (audio) {
        audio.pause()
        audio.src = ""
      }
      if (urlRef.current) {
        URL.revokeObjectURL(urlRef.current)
        urlRef.current = null
      }
    }
  }, [])

  const ensureAudio = useCallback(() => {
    let audio = audioRef.current
    if (audio) return audio
    audio = new Audio()
    audio.preload = "auto"
    audio.addEventListener("ended", () => {
      const next = indexRef.current + 1
      if (cancelRef.current) return
      if (next < queueRef.current.length) {
        void playAtRef.current?.(next)
      } else {
        indexRef.current = -1
        setCurrentIndex(-1)
        setStatus("idle")
      }
    })
    audio.addEventListener("play", () => setStatus("playing"))
    audio.addEventListener("pause", () => {
      const a = audioRef.current
      if (a && !a.ended && a.currentTime > 0) {
        setStatus((prev) => (prev === "playing" ? "paused" : prev))
      }
    })
    audio.addEventListener("error", () => setStatus("idle"))
    audioRef.current = audio
    return audio
  }, [])

  const stop = useCallback(() => {
    cancelRef.current = true
    const audio = audioRef.current
    if (audio) {
      audio.pause()
      try {
        audio.currentTime = 0
      } catch {
        // ignore
      }
    }
    if (urlRef.current) {
      URL.revokeObjectURL(urlRef.current)
      urlRef.current = null
    }
    indexRef.current = -1
    setCurrentIndex(-1)
    setProgress(null)
    setStatus("idle")
  }, [])
  useEffect(() => {
    stopRef.current = stop
  }, [stop])

  const ensureGenerated = useCallback(
    async (
      item: QueueItem,
      onChunkProgress?: (done: number, total: number) => void
    ) => {
      const slug = fullSlug(item)
      const sig = signatureFor(item, aiSettingsHash(settingsRef.current))
      const existing = await getCachedAudio(slug, sig)
      if (existing) return existing
      const result = await generateSpeech(item.text, settingsRef.current, {
        onProgress: onChunkProgress,
      })
      await putCachedAudio(slug, sig, result.blob, result.mime)
      setCacheVersion((v) => v + 1)
      return await getCachedAudio(slug, sig)
    },
    []
  )

  const generateAll = useCallback(async () => {
    if (queueRef.current.length === 0) return
    setError(null)
    cancelRef.current = false
    setStatus("generating")
    try {
      const items = queueRef.current
      for (let i = 0; i < items.length; i++) {
        if (cancelRef.current) break
        setProgress({ item: i + 1, total: items.length })
        await ensureGenerated(items[i], (chunkDone, chunkTotal) => {
          setProgress({
            item: i + 1,
            total: items.length,
            chunkDone,
            chunkTotal,
          })
        })
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "生成失敗")
    } finally {
      setProgress(null)
      setStatus((prev) => (prev === "generating" ? "idle" : prev))
    }
  }, [ensureGenerated])

  const playAt = useCallback(
    async (i: number) => {
      const items = queueRef.current
      if (i < 0 || i >= items.length) {
        stopRef.current?.()
        return
      }
      cancelRef.current = false
      indexRef.current = i
      setCurrentIndex(i)
      setError(null)
      const item = items[i]

      let entry
      try {
        const slug = fullSlug(item)
        const sig = signatureFor(item, aiSettingsHash(settingsRef.current))
        entry = await getCachedAudio(slug, sig)
        if (!entry) {
          if (!hasApiKey) {
            setError("尚未設定 OpenAI API key，無法生成這段語音")
            stopRef.current?.()
            return
          }
          setStatus("generating")
          setProgress({ item: i + 1, total: items.length })
          entry = await ensureGenerated(item, (chunkDone, chunkTotal) => {
            setProgress({
              item: i + 1,
              total: items.length,
              chunkDone,
              chunkTotal,
            })
          })
          setProgress(null)
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : "生成失敗")
        stopRef.current?.()
        return
      }
      if (!entry || cancelRef.current) {
        if (!cancelRef.current) stopRef.current?.()
        return
      }

      const audio = ensureAudio()
      if (urlRef.current) URL.revokeObjectURL(urlRef.current)
      const url = URL.createObjectURL(entry.blob)
      urlRef.current = url
      audio.src = url
      audio.playbackRate = playbackRate
      void audio.play().catch(() => setStatus("idle"))
    },
    [ensureAudio, ensureGenerated, hasApiKey, playbackRate]
  )
  useEffect(() => {
    playAtRef.current = playAt
  }, [playAt])

  const playAll = useCallback(() => {
    if (queueRef.current.length === 0) return
    void playAt(0)
  }, [playAt])

  const pause = useCallback(() => {
    if (status !== "playing") return
    audioRef.current?.pause()
  }, [status])

  const resume = useCallback(() => {
    if (status !== "paused") return
    void audioRef.current?.play().catch(() => setStatus("idle"))
  }, [status])

  const skipNext = useCallback(() => {
    const next = indexRef.current + 1
    if (next < queueRef.current.length) {
      void playAt(next)
    } else {
      stop()
    }
  }, [playAt, stop])

  const isGenerating = status === "generating"
  const isPlaying = status === "playing"
  const isPaused = status === "paused"
  const isLoading = status === "loading"
  const queueEmpty = queue.length === 0
  const allCached = !queueEmpty && cachedCount >= queue.length

  const generatingLabel = (() => {
    if (!progress) return "生成中…"
    const { item, total, chunkDone, chunkTotal } = progress
    const base = `生成中 ${item}/${total}`
    if (chunkTotal && chunkTotal > 1) {
      return `${base}（${chunkDone ?? 0}/${chunkTotal}）`
    }
    return base
  })()

  return (
    <div
      className="flex flex-col gap-3 rounded-lg border bg-muted/30 p-4"
      role="group"
      aria-label="整本朗讀"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-primary" />
          <h3 className="font-serif text-base font-semibold">整本朗讀</h3>
        </div>
        <p className="text-xs text-muted-foreground">
          共 {queue.length} 段（含序與 {Math.max(queue.length - 1, 0)} 篇）
          {hasApiKey && !queueEmpty && (
            <>
              {" · "}已生成 {cachedCount}/{queue.length}
              {allCached && " ✓"}
            </>
          )}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {isPlaying ? (
          <Button
            type="button"
            variant="default"
            size="sm"
            onClick={pause}
            aria-label="暫停"
          >
            <Pause />
            <span>暫停</span>
          </Button>
        ) : isPaused ? (
          <Button
            type="button"
            variant="default"
            size="sm"
            onClick={resume}
            aria-label="繼續"
          >
            <Play />
            <span>繼續</span>
          </Button>
        ) : (
          <Button
            type="button"
            variant="default"
            size="sm"
            onClick={playAll}
            disabled={queueEmpty || isLoading || isGenerating}
            aria-label="從頭播放整本"
          >
            <Play />
            <span>從頭播放整本</span>
          </Button>
        )}

        {(isPlaying || isPaused) && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={skipNext}
            disabled={currentIndex < 0 || currentIndex >= queue.length - 1}
            aria-label="跳到下一段"
          >
            <SkipForward />
            <span>下一段</span>
          </Button>
        )}

        {(isPlaying || isPaused || isGenerating) && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={stop}
            aria-label="停止"
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
            onChange={(e) => setPlaybackRate(Number(e.target.value))}
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

        {hasApiKey && !allCached && (
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={generateAll}
            disabled={isGenerating || isLoading || queueEmpty}
          >
            {isGenerating ? (
              <Loader2 className="animate-spin" />
            ) : (
              <Sparkles />
            )}
            <span>{isGenerating ? generatingLabel : "全部生成 AI 語音"}</span>
          </Button>
        )}
      </div>

      {currentIndex >= 0 && queue[currentIndex] && (
        <div className="text-xs text-muted-foreground">
          {isGenerating ? "準備中" : "正在播放"}：{currentIndex + 1}/
          {queue.length} · {queue[currentIndex].label}
        </div>
      )}

      {error && (
        <div className="flex items-center gap-1 text-xs text-destructive">
          <AlertCircle className="size-3.5" />
          {error}
        </div>
      )}

      {!hasApiKey && (
        <p className="text-xs text-muted-foreground">
          尚未設定 OpenAI API key——請從右上角「AI 設定」加入 key 後即可生成並播放整本 AI 語音。
        </p>
      )}
    </div>
  )
}
