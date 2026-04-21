import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import {
  AI_SETTINGS_STORAGE_KEY,
  DEFAULT_AI_SETTINGS,
  type AISettings,
} from "@/lib/ai-settings"

type AISettingsContextValue = {
  settings: AISettings
  hasApiKey: boolean
  update: (patch: Partial<AISettings>) => void
  reset: () => void
}

const AISettingsContext = createContext<AISettingsContextValue | null>(null)

function readSettings(): AISettings {
  if (typeof window === "undefined") return DEFAULT_AI_SETTINGS
  try {
    const raw = window.localStorage.getItem(AI_SETTINGS_STORAGE_KEY)
    if (!raw) return DEFAULT_AI_SETTINGS
    const parsed = JSON.parse(raw) as Partial<AISettings>
    return { ...DEFAULT_AI_SETTINGS, ...parsed }
  } catch {
    return DEFAULT_AI_SETTINGS
  }
}

export function AISettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AISettings>(readSettings)

  useEffect(() => {
    try {
      window.localStorage.setItem(
        AI_SETTINGS_STORAGE_KEY,
        JSON.stringify(settings)
      )
    } catch {
      // ignore quota errors
    }
  }, [settings])

  const update = useCallback((patch: Partial<AISettings>) => {
    setSettings((prev) => ({ ...prev, ...patch }))
  }, [])

  const reset = useCallback(() => {
    setSettings(DEFAULT_AI_SETTINGS)
  }, [])

  const value = useMemo<AISettingsContextValue>(
    () => ({
      settings,
      hasApiKey: settings.apiKey.trim().length > 0,
      update,
      reset,
    }),
    [settings, update, reset]
  )

  return (
    <AISettingsContext.Provider value={value}>
      {children}
    </AISettingsContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAISettings(): AISettingsContextValue {
  const ctx = useContext(AISettingsContext)
  if (!ctx) throw new Error("useAISettings must be used inside AISettingsProvider")
  return ctx
}
