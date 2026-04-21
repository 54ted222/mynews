import { Link } from "react-router-dom"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { listMagazineTopics } from "@/lib/magazine"

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

export function MagazineList() {
  const topics = listMagazineTopics()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          雜誌
        </p>
        <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
          主題專刊
        </h1>
        <p className="text-sm text-muted-foreground">
          共 {topics.length} 個主題，每個主題含完整目錄與多篇文章。
        </p>
      </div>

      {topics.length === 0 ? (
        <p className="text-sm text-muted-foreground">尚未發行任何主題。</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {topics.map((topic) => (
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
                  <CardTitle className="font-serif text-xl leading-snug group-hover:underline sm:text-2xl">
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
    </div>
  )
}
