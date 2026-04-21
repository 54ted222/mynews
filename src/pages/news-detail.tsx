import { use } from "react"
import { Link, useParams } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { SpeechPlayer } from "@/components/speech-player"
import { ArticleMarkdown } from "@/components/article-markdown"
import { KeywordSearchList } from "@/components/keyword-search-list"
import { cn } from "@/lib/utils"
import { loadNewsItem } from "@/lib/news"

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

function NotFound() {
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-2xl font-semibold">找不到這篇文章</h1>
      <p className="text-sm text-muted-foreground">這個連結可能已經失效。</p>
      <Link
        to="/news"
        className={cn(buttonVariants({ variant: "secondary" }))}
      >
        回到報紙列表
      </Link>
    </div>
  )
}

export function NewsDetail() {
  const { slug } = useParams<{ slug: string }>()
  if (!slug) return <NotFound />
  const item = use(loadNewsItem(slug))
  if (!item) return <NotFound />


  return (
    <article className="flex flex-col gap-6">
      <Link
        to="/news"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "w-fit -ml-3"
        )}
      >
        ← 返回報紙列表
      </Link>

      <header className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
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
        <SpeechPlayer
          slug={`news-${item.slug}`}
          content={item.content}
          transcript={item.transcript}
        />
        <KeywordSearchList keywords={item.keywords} />
      </header>

      <ArticleMarkdown content={item.content} />
    </article>
  )
}
