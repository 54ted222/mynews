export type AISettings = {
  apiKey: string
  model: string
  voice: string
  instructions: string
  format: "mp3" | "wav" | "opus" | "aac" | "flac"
  speed: number
}

export const DEFAULT_AI_SETTINGS: AISettings = {
  apiKey: "",
  model: "gpt-4o-mini-tts",
  voice: "alloy",
  instructions: "請以自然、清晰、平和的繁體中文（台灣腔）朗讀以下文章內容。",
  format: "mp3",
  speed: 1,
}

export const AI_SETTINGS_STORAGE_KEY = "mynews.aiSettings"

export function aiSettingsHash(settings: AISettings): string {
  return [
    settings.model,
    settings.voice,
    settings.format,
    settings.speed,
    settings.instructions,
  ]
    .map((part) => String(part))
    .join("|")
}
