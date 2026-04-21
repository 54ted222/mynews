import { NavLink, Link, Outlet } from "react-router-dom"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { to: "/", label: "頭版", end: true },
  { to: "/news", label: "報紙", end: false },
  { to: "/magazines", label: "雜誌", end: false },
]

export function SiteLayout() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link to="/" className="flex min-w-0 flex-col">
            <span className="font-serif text-xl font-bold tracking-tight sm:text-2xl">
              個人刊物
            </span>
            <span className="text-[11px] text-muted-foreground sm:text-xs">
              報紙每日出刊，雜誌主題專刊
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <nav className="flex items-center gap-3 text-sm sm:gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    cn(
                      "transition-colors hover:text-foreground",
                      isActive
                        ? "font-medium text-foreground"
                        : "text-muted-foreground"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <Separator orientation="vertical" className="hidden h-5 sm:block" />
            <ThemeToggle />
          </div>
        </div>
      </header>

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
