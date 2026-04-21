import { Moon, Sun, Type } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme, type FontSize } from "@/lib/theme"

const fontLabel: Record<FontSize, string> = {
  sm: "小",
  md: "中",
  lg: "大",
}

export function ThemeToggle() {
  const { scheme, fontSize, toggleScheme, cycleFontSize } = useTheme()
  const isDark = scheme === "dark"

  return (
    <div className="flex items-center gap-1">
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        onClick={cycleFontSize}
        aria-label={`字體大小（目前：${fontLabel[fontSize]}）`}
        title={`字體：${fontLabel[fontSize]}`}
      >
        <Type />
        <span className="sr-only">切換字體大小</span>
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        onClick={toggleScheme}
        aria-label={isDark ? "切換到淺色" : "切換到深色"}
        title={isDark ? "淺色" : "深色"}
      >
        {isDark ? <Sun /> : <Moon />}
        <span className="sr-only">切換深色模式</span>
      </Button>
    </div>
  )
}
