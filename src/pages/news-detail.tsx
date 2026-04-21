import { Link, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getNews } from "@/lib/news"

function formatDate(iso: string): string {
  if (!iso) return ""
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function NewsDetail() {
  const { slug } = useParams<{ slug: string }>()
  const item = slug ? getNews(slug) : undefined

  if (!item) {
    return (
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-2xl font-semibold">找不到這篇文章</h1>
        <p className="text-sm text-muted-foreground">
          這個連結可能已經失效。
        </p>
        <Link to="/" className={cn(buttonVariants({ variant: "secondary" }))}>
          回到首頁
        </Link>
      </div>
    )
  }

  return (
    <article className="flex flex-col gap-6">
      <Link
        to="/"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "w-fit -ml-3"
        )}
      >
        ← 返回列表
      </Link>

      <header className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <time dateTime={item.date}>{formatDate(item.date)}</time>
          {item.tags.length > 0 && (
            <>
              <span>·</span>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </>
          )}
        </div>
      </header>

      <div
        className="
          prose prose-neutral max-w-none
          prose-headings:font-semibold prose-headings:tracking-tight
          prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
          prose-a:text-foreground prose-a:underline
          prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
          prose-pre:rounded-lg prose-pre:bg-muted prose-pre:text-foreground
          dark:prose-invert
        "
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.content}</ReactMarkdown>
      </div>
    </article>
  )
}
