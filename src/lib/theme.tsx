import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

export type ColorScheme = "light" | "dark"
export type FontSize = "sm" | "md" | "lg"

type ThemeContextValue = {
  scheme: ColorScheme
  fontSize: FontSize
  toggleScheme: () => void
  setFontSize: (size: FontSize) => void
  cycleFontSize: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const SCHEME_KEY = "mynews.colorScheme"
const FONT_KEY = "mynews.fontSize"

function readScheme(): ColorScheme {
  if (typeof window === "undefined") return "light"
  const stored = window.localStorage.getItem(SCHEME_KEY)
  if (stored === "light" || stored === "dark") return stored
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches
  return prefersDark ? "dark" : "light"
}

function readFontSize(): FontSize {
  if (typeof window === "undefined") return "md"
  const stored = window.localStorage.getItem(FONT_KEY)
  if (stored === "sm" || stored === "md" || stored === "lg") return stored
  return "md"
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [scheme, setScheme] = useState<ColorScheme>(readScheme)
  const [fontSize, setFontSize] = useState<FontSize>(readFontSize)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", scheme === "dark")
    root.style.colorScheme = scheme
    window.localStorage.setItem(SCHEME_KEY, scheme)
  }, [scheme])

  useEffect(() => {
    document.documentElement.dataset.fontSize = fontSize
    window.localStorage.setItem(FONT_KEY, fontSize)
  }, [fontSize])

  const value = useMemo<ThemeContextValue>(
    () => ({
      scheme,
      fontSize,
      toggleScheme: () =>
        setScheme((prev) => (prev === "dark" ? "light" : "dark")),
      setFontSize,
      cycleFontSize: () =>
        setFontSize((prev) =>
          prev === "sm" ? "md" : prev === "md" ? "lg" : "sm"
        ),
    }),
    [scheme, fontSize]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider")
  return ctx
}
