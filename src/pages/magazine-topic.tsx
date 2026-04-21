import { use } from "react"
import { Link, useParams } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArticleMarkdown } from "@/components/article-markdown"
import { SpeechPlayer } from "@/components/speech-player"
import { cn } from "@/lib/utils"
import { loadMagazineTopic } from "@/lib/magazine"

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
      <h1 className="text-2xl font-semibold">找不到這個主題</h1>
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

export function MagazineTopicPage() {
  const { topic: topicSlug } = useParams<{ topic: string }>()
  if (!topicSlug) return <NotFound />
  const topic = use(loadMagazineTopic(topicSlug))
  if (!topic) return <NotFound />


  return (
    <article className="flex flex-col gap-8">
      <Link
        to="/magazines"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "w-fit -ml-3"
        )}
      >
        ← 返回雜誌列表
      </Link>

      <header className="flex flex-col gap-3 border-y py-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
          {topic.issue && <span className="font-mono">{topic.issue}</span>}
          {topic.date && (
            <>
              <span>·</span>
              <time dateTime={topic.date}>{formatDate(topic.date)}</time>
            </>
          )}
        </div>
        <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
          {topic.title}
        </h1>
        {topic.summary && (
          <p className="text-base text-muted-foreground">{topic.summary}</p>
        )}
        {topic.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {topic.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </header>

      {topic.intro && (
        <div className="flex flex-col gap-4">
          <SpeechPlayer
            content={topic.intro}
            transcript={topic.introTranscript}
          />
          <ArticleMarkdown content={topic.intro} />
        </div>
      )}

      <Separator />

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-2xl font-bold tracking-tight">
          本期目錄
        </h2>
        <ol className="flex flex-col divide-y rounded-lg border">
          {topic.articles.map((article, index) => (
            <li key={article.slug}>
              <Link
                to={`/magazines/${topic.slug}/${article.slug}`}
                className="group flex items-start gap-4 p-4 transition-colors hover:bg-muted/50"
              >
                <span className="mt-0.5 font-mono text-sm text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className="font-serif text-lg font-semibold leading-snug group-hover:underline">
                    {article.title}
                  </span>
                  {article.summary && (
                    <span className="text-sm text-muted-foreground">
                      {article.summary}
                    </span>
                  )}
                </div>
                <span className="mt-1 text-xs text-muted-foreground">→</span>
              </Link>
            </li>
          ))}
        </ol>
        {topic.articles.length === 0 && (
          <p className="text-sm text-muted-foreground">本期尚無文章。</p>
        )}
      </section>
    </article>
  )
}
