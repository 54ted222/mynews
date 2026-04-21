import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Pause, Play, Square } from "lucide-react"
import { Button } from "@/components/ui/button"
import { markdownToPlainText } from "@/lib/markdown-text"

type Status = "idle" | "playing" | "paused"

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

const supported =
  typeof window !== "undefined" && "speechSynthesis" in window

export function SpeechPlayer({ content }: { content: string }) {
  const [status, setStatus] = useState<Status>("idle")
  const [voice, setVoice] = useState<SpeechSynthesisVoice | undefined>()
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  const plainText = useMemo(() => markdownToPlainText(content), [content])

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
    if (!supported) return
    window.speechSynthesis.cancel()
    utteranceRef.current = null
    setStatus("idle")
  }, [])

  useEffect(() => {
    return () => {
      if (supported) window.speechSynthesis.cancel()
    }
  }, [plainText])

  const play = useCallback(() => {
    if (!supported || !plainText) return
    const synth = window.speechSynthesis

    if (status === "paused") {
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
    setStatus("playing")
  }, [plainText, status, voice])

  const pause = useCallback(() => {
    if (!supported) return
    if (status !== "playing") return
    window.speechSynthesis.pause()
    setStatus("paused")
  }, [status])

  if (!supported) {
    return (
      <div className="text-xs text-muted-foreground">
        此瀏覽器不支援朗讀功能
      </div>
    )
  }

  const isPlaying = status === "playing"
  const label = isPlaying ? "暫停朗讀" : status === "paused" ? "繼續朗讀" : "朗讀全文"

  return (
    <div
      className="flex flex-wrap items-center gap-2"
      role="group"
      aria-label="文章朗讀"
    >
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={isPlaying ? pause : play}
        aria-label={label}
      >
        {isPlaying ? <Pause /> : <Play />}
        <span>{label}</span>
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
    </div>
  )
}
