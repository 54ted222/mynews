import { Link, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { buttonVariants } from "@/components/ui/button"
import { SpeechPlayer } from "@/components/speech-player"
import { cn } from "@/lib/utils"
import { getMagazineArticle, getMagazineTopic } from "@/lib/magazine"

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

export function MagazineArticlePage() {
  const { topic: topicSlug, article: articleSlug } = useParams<{
    topic: string
    article: string
  }>()

  const article =
    topicSlug && articleSlug
      ? getMagazineArticle(topicSlug, articleSlug)
      : undefined
  const topic = topicSlug ? getMagazineTopic(topicSlug) : undefined

  if (!article || !topic) {
    return (
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-2xl font-semibold">找不到這篇文章</h1>
        <p className="text-sm text-muted-foreground">
          這個連結可能已經失效。
        </p>
        <Link
          to="/magazines"
          className={cn(buttonVariants({ variant: "secondary" }))}
        >
          回到雜誌列表
        </Link>
      </div>
    )
  }

  const currentIndex = topic.articles.findIndex((a) => a.slug === article.slug)
  const prev = currentIndex > 0 ? topic.articles[currentIndex - 1] : undefined
  const next =
    currentIndex >= 0 && currentIndex < topic.articles.length - 1
      ? topic.articles[currentIndex + 1]
      : undefined

  return (
    <article className="flex flex-col gap-6">
      <Link
        to={`/magazines/${topic.slug}`}
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "w-fit -ml-3"
        )}
      >
        ← 返回 {topic.title}
      </Link>

      <header className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
          {topic.issue && <span className="font-mono">{topic.issue}</span>}
          <span>·</span>
          <Link to={`/magazines/${topic.slug}`} className="hover:underline">
            {topic.title}
          </Link>
          {article.date && (
            <>
              <span>·</span>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </>
          )}
        </div>
        <SpeechPlayer content={article.content} />
      </header>

      <div
        className="
          prose prose-neutral max-w-none break-words
          prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight
          prose-h1:text-3xl sm:prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl
          prose-a:text-foreground prose-a:underline prose-a:break-words
          prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
          prose-pre:overflow-x-auto prose-pre:rounded-lg prose-pre:bg-muted prose-pre:text-foreground
          prose-table:block prose-table:overflow-x-auto
          dark:prose-invert
        "
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {article.content}
        </ReactMarkdown>
      </div>

      {(prev || next) && (
        <nav className="mt-4 grid gap-3 border-t pt-6 sm:grid-cols-2">
          {prev ? (
            <Link
              to={`/magazines/${topic.slug}/${prev.slug}`}
              className="group flex flex-col gap-1 rounded-lg border p-4 transition-colors hover:bg-muted/50"
            >
              <span className="text-xs text-muted-foreground">← 上一篇</span>
              <span className="font-serif font-semibold group-hover:underline">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/magazines/${topic.slug}/${next.slug}`}
              className="group flex flex-col gap-1 rounded-lg border p-4 text-right transition-colors hover:bg-muted/50"
            >
              <span className="text-xs text-muted-foreground">下一篇 →</span>
              <span className="font-serif font-semibold group-hover:underline">
                {next.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}
    </article>
  )
}
