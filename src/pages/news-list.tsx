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
import { loadNewsMetaList } from "@/lib/news"

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

export function NewsList() {
  const items = use(loadNewsMetaList())

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          報紙
        </p>
        <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
          全部頭版
        </h1>
        <p className="text-sm text-muted-foreground">
          共 {items.length} 則報導，依日期新到舊排序。
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <Link key={item.slug} to={`/news/${item.slug}`} className="group">
            <Card className="transition-colors group-hover:border-foreground/20">
              <CardHeader>
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
                <CardTitle className="font-serif text-xl leading-snug group-hover:underline sm:text-2xl">
                  {item.title}
                </CardTitle>
                {item.summary && (
                  <CardDescription>{item.summary}</CardDescription>
                )}
              </CardHeader>
              <CardContent className="pt-0">
                <span className="text-sm text-muted-foreground">
                  閱讀全文 →
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
