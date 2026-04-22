import { use } from "react"
import { Link, useParams } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { SpeechPlayer } from "@/components/speech-player"
import { ArticleMarkdown } from "@/components/article-markdown"
import { KeywordSearchList } from "@/components/keyword-search-list"
import { cn } from "@/lib/utils"
import { formatDate } from "@/lib/format"
import { loadMagazineArticle, loadMagazineTopic } from "@/lib/magazine"

function NotFound() {
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-2xl font-semibold">找不到這篇文章</h1>
      <p className="text-sm text-muted-foreground">這個連結可能已經失效。</p>
      <Link
        to="/magazines"
        className={cn(buttonVariants({ variant: "secondary" }))}
      >
        回到雜誌列表
      </Link>
    </div>
  )
}

export function MagazineArticlePage() {
  const { topic: topicSlug, article: articleSlug } = useParams<{
    topic: string
    article: string
  }>()
  if (!topicSlug || !articleSlug) return <NotFound />
  const article = use(loadMagazineArticle(topicSlug, articleSlug))
  const topic = use(loadMagazineTopic(topicSlug))
  if (!article || !topic) return <NotFound />


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
        <SpeechPlayer
          slug={`magazine-${topic.slug}-${article.slug}`}
          title={`${topic.title}・${article.title}`}
          content={article.content}
          transcript={article.transcript}
        />
        <KeywordSearchList keywords={article.keywords} />
      </header>

      <ArticleMarkdown content={article.content} />

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
