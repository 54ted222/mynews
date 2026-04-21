export function KeywordSearchList({ keywords }: { keywords: string[] }) {
  if (keywords.length === 0) return null
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-muted-foreground">
      <span className="font-medium">研究關鍵字</span>
      {keywords.map((kw) => (
        <a
          key={kw}
          href={`https://www.google.com/search?q=${encodeURIComponent(kw)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md border border-border bg-muted/30 px-2 py-0.5 text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
          title={`在 Google 搜尋：${kw}`}
        >
          {kw}
        </a>
      ))}
    </div>
  )
}
