import { use } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { formatDate } from "@/lib/format"
import { loadNewsMetaList } from "@/lib/news"
import { loadMagazineTopics } from "@/lib/magazine"

export function Home() {
  const latestNews = use(loadNewsMetaList()).slice(0, 3)
  const latestTopics = use(loadMagazineTopics()).slice(0, 3)
  const todayLabel = formatDate(new Date().toISOString().slice(0, 10))

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3 border-y py-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {todayLabel} · 個人刊物
        </p>
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
          每天一份報紙，每月一本雜誌
        </h1>
        <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
          報紙蒐集當日動態、雜誌深挖單一主題。兩條節奏並行，一個人讀完整個世界。
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
              報紙 · 每日頭版
            </h2>
            <p className="text-sm text-muted-foreground">
              每日精選動態，快速更新，看完即走。
            </p>
          </div>
          <Link
            to="/news"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
          >
            全部 →
          </Link>
        </div>

        {latestNews.length === 0 ? (
          <p className="text-sm text-muted-foreground">尚無報紙內容。</p>
        ) : (
          <div className="flex flex-col gap-4">
            {latestNews.map((item) => (
              <Link key={item.slug} to={`/news/${item.slug}`} className="group">
                <Card className="transition-colors group-hover:border-foreground/20">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <time dateTime={item.date}>{formatDate(item.date)}</time>
                      {item.tags.length > 0 && (
                        <>
                          <span>·</span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                    <CardTitle className="font-serif text-xl leading-snug group-hover:underline sm:text-2xl">
                      {item.title}
                    </CardTitle>
                    {item.summary && (
                      <CardDescription className="line-clamp-2">
                        {item.summary}
                      </CardDescription>
                    )}
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>

      <Separator />

      <section className="flex flex-col gap-4">
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
              雜誌 · 主題專刊
            </h2>
            <p className="text-sm text-muted-foreground">
              鎖定一個主題，由淺到深讀完整系列。
            </p>
          </div>
          <Link
            to="/magazines"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
          >
            全部 →
          </Link>
        </div>

        {latestTopics.length === 0 ? (
          <p className="text-sm text-muted-foreground">尚無雜誌內容。</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {latestTopics.map((topic) => (
              <Link
                key={topic.slug}
                to={`/magazines/${topic.slug}`}
                className="group"
              >
                <Card className="h-full transition-colors group-hover:border-foreground/20">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      {topic.issue && (
                        <span className="font-mono">{topic.issue}</span>
                      )}
                      {topic.date && (
                        <>
                          <span>·</span>
                          <time dateTime={topic.date}>
                            {formatDate(topic.date)}
                          </time>
                        </>
                      )}
                    </div>
                    <CardTitle className="font-serif text-xl leading-snug group-hover:underline">
                      {topic.title}
                    </CardTitle>
                    {topic.summary && (
                      <CardDescription className="line-clamp-3">
                        {topic.summary}
                      </CardDescription>
                    )}
                  </CardHeader>
                  {topic.tags.length > 0 && (
                    <CardContent className="flex flex-wrap gap-1.5 pt-0">
                      {topic.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </CardContent>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
