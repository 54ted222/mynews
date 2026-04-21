import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useLocation } from "react-router-dom"
import { Menu, Settings, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { to: "/", label: "頭版", end: true },
  { to: "/news", label: "報紙", end: false },
  { to: "/magazines", label: "雜誌", end: false },
  { to: "/settings", label: "設定", end: false },
]

export function SiteLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDrawerOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!drawerOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false)
    }
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [drawerOpen])

  return (
    <div className="min-h-svh bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-3xl items-center gap-2 px-4 py-3 sm:gap-3 sm:px-6 sm:py-4">
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={() => setDrawerOpen(true)}
            aria-label="開啟選單"
            aria-expanded={drawerOpen}
            aria-controls="site-drawer"
          >
            <Menu />
          </Button>
          <Link to="/" className="flex min-w-0 flex-col">
            <span className="font-serif text-lg font-bold tracking-tight sm:text-xl">
              個人刊物
            </span>
            <span className="hidden text-[11px] text-muted-foreground sm:inline sm:text-xs">
              報紙每日出刊，雜誌主題專刊
            </span>
          </Link>
        </div>
      </header>

      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <aside
            id="site-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="主選單"
            className={cn(
              "fixed inset-y-0 left-0 z-50 flex w-[min(320px,85vw)] flex-col",
              "border-r bg-background shadow-xl",
              "animate-in slide-in-from-left duration-200"
            )}
          >
            <div className="flex items-center justify-between gap-2 border-b px-4 py-3">
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight">
                  個人刊物
                </span>
                <span className="text-[11px] text-muted-foreground">
                  報紙每日出刊，雜誌主題專刊
                </span>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={() => setDrawerOpen(false)}
                aria-label="關閉選單"
              >
                <X />
              </Button>
            </div>
            <nav className="flex flex-col gap-0.5 p-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                      "hover:bg-muted",
                      isActive
                        ? "bg-muted font-medium text-foreground"
                        : "text-muted-foreground"
                    )
                  }
                >
                  {item.to === "/settings" && <Settings className="size-4" />}
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
            <Separator />
            <div className="flex items-center justify-between px-4 py-3 text-xs text-muted-foreground">
              <span>外觀</span>
              <ThemeToggle />
            </div>
          </aside>
        </>
      )}

      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
        <Outlet />
      </main>

      <Separator />
      <footer className="mx-auto max-w-3xl px-4 py-6 text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} 個人刊物
      </footer>
    </div>
  )
}
