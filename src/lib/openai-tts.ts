import OpenAI from "openai"
import type { AISettings } from "@/lib/ai-settings"

export type TTSResult = {
  blob: Blob
  mime: string
}

const MIME_BY_FORMAT: Record<AISettings["format"], string> = {
  mp3: "audio/mpeg",
  wav: "audio/wav",
  opus: "audio/ogg",
  aac: "audio/aac",
  flac: "audio/flac",
}

export async function generateSpeech(
  text: string,
  settings: AISettings
): Promise<TTSResult> {
  const apiKey = settings.apiKey.trim()
  if (!apiKey) throw new Error("尚未設定 OpenAI API key")

  const client = new OpenAI({ apiKey, dangerouslyAllowBrowser: true })

  const response = await client.audio.speech.create({
    model: settings.model,
    voice: settings.voice as never,
    input: text,
    instructions: settings.instructions || undefined,
    response_format: settings.format,
    speed: settings.speed,
  })

  const arrayBuffer = await response.arrayBuffer()
  const mime = MIME_BY_FORMAT[settings.format] ?? "audio/mpeg"
  const blob = new Blob([arrayBuffer], { type: mime })
  return { blob, mime }
}

export async function quickProbe(apiKey: string): Promise<void> {
  const client = new OpenAI({ apiKey, dangerouslyAllowBrowser: true })
  await client.models.list()
}
