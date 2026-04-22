import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  deleteCachedAudio,
  getCachedAudio,
  putCachedAudio,
} from "@/lib/audio-cache"
import { aiSettingsHash } from "@/lib/ai-settings"
import { useAISettings } from "@/lib/ai-settings-context"
import { generateSpeech } from "@/lib/openai-tts"

function djb2(s: string): string {
  let hash = 5381
  for (let i = 0; i < s.length; i++) {
    hash = ((hash << 5) + hash) ^ s.charCodeAt(i)
  }
  return (hash >>> 0).toString(16)
}

export type AiAudioState = {
  enabled: boolean
  url: string | null
  cached: boolean
  generating: boolean
  progress: { done: number; total: number } | null
  error: string | null
  generate: (force?: boolean) => Promise<void>
  remove: () => Promise<void>
}

/**
 * Manages an OpenAI-generated audio file for a single (slug, source) pair:
 * - reads existing blob from IndexedDB on mount / signature change
 * - generates new audio via the TTS API (with chunking + progress)
 * - caches result back to IndexedDB
 * - exposes a Blob URL the caller can play / download
 *
 * `slug` includes whatever suffix the caller wants (e.g. `news-${slug}::body`).
 */
export function useAiAudio(slug: string | null, plainText: string): AiAudioState {
  const { settings, hasApiKey } = useAISettings()

  const [url, setUrl] = useState<string | null>(null)
  const [cached, setCached] = useState(false)
  const [generating, setGenerating] = useState(false)
  const [progress, setProgress] = useState<{
    done: number
    total: number
  } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const urlRef = useRef<string | null>(null)
  useEffect(() => {
    urlRef.current = url
  }, [url])

  const signature = useMemo(
    () => `${aiSettingsHash(settings)}::${djb2(plainText)}`,
    [settings, plainText]
  )

  useEffect(() => {
    let cancelled = false
    void (async () => {
      if (urlRef.current) {
        URL.revokeObjectURL(urlRef.current)
        urlRef.current = null
      }
      if (cancelled) return
      setUrl(null)
      setCached(false)
      setError(null)

      if (!slug) return
      const entry = await getCachedAudio(slug, signature)
      if (cancelled || !entry) return
      const next = URL.createObjectURL(entry.blob)
      urlRef.current = next
      setUrl(next)
      setCached(true)
    })()

    return () => {
      cancelled = true
    }
  }, [slug, signature])

  useEffect(() => {
    return () => {
      if (urlRef.current) {
        URL.revokeObjectURL(urlRef.current)
        urlRef.current = null
      }
    }
  }, [])

  const generate = useCallback(
    async (force = false) => {
      if (!hasApiKey || !slug || !plainText) return
      setGenerating(true)
      setError(null)
      setProgress(null)
      try {
        if (force) {
          await deleteCachedAudio(slug, signature)
        }
        const result = await generateSpeech(plainText, settings, {
          onProgress: (done, total) => setProgress({ done, total }),
        })
        await putCachedAudio(slug, signature, result.blob, result.mime)
        if (urlRef.current) URL.revokeObjectURL(urlRef.current)
        const next = URL.createObjectURL(result.blob)
        urlRef.current = next
        setUrl(next)
        setCached(true)
      } catch (err) {
        setError(err instanceof Error ? err.message : "生成失敗")
      } finally {
        setGenerating(false)
        setProgress(null)
      }
    },
    [hasApiKey, plainText, settings, signature, slug]
  )

  const remove = useCallback(async () => {
    if (!slug) return
    await deleteCachedAudio(slug, signature)
    if (urlRef.current) {
      URL.revokeObjectURL(urlRef.current)
      urlRef.current = null
    }
    setUrl(null)
    setCached(false)
  }, [slug, signature])

  return {
    enabled: hasApiKey && Boolean(slug),
    url,
    cached,
    generating,
    progress,
    error,
    generate,
    remove,
  }
}
