import { Link, Outlet } from "react-router-dom"
import { Separator } from "@/components/ui/separator"

export function SiteLayout() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight">
              My News
            </span>
            <span className="text-xs text-muted-foreground">
              個人新聞頁 · 以 Markdown 撰寫
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link
              to="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              最新
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-10">
        <Outlet />
      </main>

      <Separator />
      <footer className="mx-auto max-w-3xl px-6 py-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} My News · Built with React, Vite &
        shadcn/ui
      </footer>
    </div>
  )
}
