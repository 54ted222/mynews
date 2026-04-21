import { Link, Outlet } from "react-router-dom"
import { Separator } from "@/components/ui/separator"

export function SiteLayout() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link to="/" className="flex min-w-0 flex-col">
            <span className="font-serif text-xl font-bold tracking-tight sm:text-2xl">
              個人報紙
            </span>
            <span className="text-[11px] text-muted-foreground sm:text-xs">
              每日一份，為你而寫
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link
              to="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              頭版
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
        <Outlet />
      </main>

      <Separator />
      <footer className="mx-auto max-w-3xl px-4 py-6 text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} 個人報紙
      </footer>
    </div>
  )
}
