import OpenAI from "openai"
import type { AISettings } from "@/lib/ai-settings"

export type TTSResult = {
  blob: Blob
  mime: string
}

export type GenerateSpeechOpts = {
  onProgress?: (done: number, total: number) => void
}

const MIME_BY_FORMAT: Record<AISettings["format"], string> = {
  mp3: "audio/mpeg",
  wav: "audio/wav",
  opus: "audio/ogg",
  aac: "audio/aac",
  flac: "audio/flac",
}

const MAX_CHARS_BY_MODEL: Record<string, number> = {
  "gpt-4o-mini-tts": 1200,
  "tts-1": 3500,
  "tts-1-hd": 3500,
}

const FALLBACK_MAX_CHARS = 1200

export function getMaxChars(model: string): number {
  return MAX_CHARS_BY_MODEL[model] ?? FALLBACK_MAX_CHARS
}

function splitByRegex(text: string, regex: RegExp): string[] {
  const parts: string[] = []
  let last = 0
  for (const match of text.matchAll(regex)) {
    const end = (match.index ?? 0) + match[0].length
    parts.push(text.slice(last, end))
    last = end
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts.filter((p) => p.length > 0)
}

function hardSplit(text: string, maxChars: number): string[] {
  const out: string[] = []
  for (let i = 0; i < text.length; i += maxChars) {
    out.push(text.slice(i, i + maxChars))
  }
  return out
}

export function chunkTextForTTS(text: string, maxChars: number): string[] {
  const trimmed = text.trim()
  if (!trimmed) return []
  if (trimmed.length <= maxChars) return [trimmed]

  const paragraphs = trimmed.split(/\n{2,}/g)
  const atomic: string[] = []
  for (const para of paragraphs) {
    const piece = para.trim()
    if (!piece) continue
    if (piece.length <= maxChars) {
      atomic.push(piece)
      continue
    }
    const sentences = splitByRegex(piece, /[。！？!?\n]+/g)
    for (const s of sentences) {
      const sent = s.trim()
      if (!sent) continue
      if (sent.length <= maxChars) {
        atomic.push(sent)
      } else {
        atomic.push(...hardSplit(sent, maxChars))
      }
    }
  }

  // 貪婪合併：在不超過 maxChars 的前提下把鄰近的 atomic 黏回去
  const merged: string[] = []
  let buf = ""
  for (const piece of atomic) {
    if (!buf) {
      buf = piece
      continue
    }
    const candidate = buf + "\n\n" + piece
    if (candidate.length <= maxChars) {
      buf = candidate
    } else {
      merged.push(buf)
      buf = piece
    }
  }
  if (buf) merged.push(buf)
  return merged
}

export async function generateSpeech(
  text: string,
  settings: AISettings,
  opts: GenerateSpeechOpts = {}
): Promise<TTSResult> {
  const apiKey = settings.apiKey.trim()
  if (!apiKey) throw new Error("尚未設定 OpenAI API key")

  const client = new OpenAI({ apiKey, dangerouslyAllowBrowser: true })
  const mime = MIME_BY_FORMAT[settings.format] ?? "audio/mpeg"
  const maxChars = getMaxChars(settings.model)
  const chunks = chunkTextForTTS(text, maxChars)
  if (chunks.length === 0) throw new Error("輸入文字為空")

  opts.onProgress?.(0, chunks.length)

  const parts: ArrayBuffer[] = []
  for (let i = 0; i < chunks.length; i++) {
    const response = await client.audio.speech.create({
      model: settings.model,
      voice: settings.voice as never,
      input: chunks[i],
      instructions: settings.instructions || undefined,
      response_format: settings.format,
      speed: settings.speed,
    })
    parts.push(await response.arrayBuffer())
    opts.onProgress?.(i + 1, chunks.length)
  }

  const blob = new Blob(parts, { type: mime })
  return { blob, mime }
}

export async function quickProbe(apiKey: string): Promise<void> {
  const client = new OpenAI({ apiKey, dangerouslyAllowBrowser: true })
  await client.models.list()
}
