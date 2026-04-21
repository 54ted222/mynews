import { parseFrontmatter, parseTags } from "./frontmatter"

export type NewsMeta = {
  slug: string
  title: string
  date: string
  tags: string[]
  summary: string
  keywords: string[]
  hasTranscript: boolean
}

export type NewsItem = NewsMeta & {
  content: string
  transcript?: string
}

type Manifest = { articles: string[]; transcripts?: string[] }

const BASE = import.meta.env.BASE_URL

function dateFromSlug(slug: string): string | null {
  const match = slug.match(/^(\d{4}-\d{2}-\d{2})/)
  return match ? match[1] : null
}

function serialFromSlug(slug: string): number {
  const match = slug.match(/-(\d+)$/)
  return match ? Number(match[1]) : 1
}

function toItem(
  slug: string,
  raw: string,
  transcript: string | undefined
): NewsItem {
  const { data, content } = parseFrontmatter(raw)
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? dateFromSlug(slug) ?? "",
    tags: parseTags(data.tags),
    summary: data.summary ?? "",
    keywords: parseTags(data.keywords),
    hasTranscript: Boolean(transcript),
    content,
    transcript,
  }
}

async function fetchOptional(url: string): Promise<string | undefined> {
  const res = await fetch(url)
  if (!res.ok) return undefined
  return res.text()
}

async function fetchArticle(
  slug: string,
  hasTranscript: boolean
): Promise<NewsItem> {
  const [mainRes, transcript] = await Promise.all([
    fetch(`${BASE}news/${slug}.md`),
    hasTranscript
      ? fetchOptional(`${BASE}news/${slug}.transcript.md`)
      : Promise.resolve(undefined),
  ])
  if (!mainRes.ok) throw new Error(`news "${slug}" not found`)
  const raw = await mainRes.text()
  return toItem(slug, raw, transcript)
}

let listPromise: Promise<NewsItem[]> | null = null
let metaListPromise: Promise<NewsMeta[]> | null = null

export function loadNewsList(): Promise<NewsItem[]> {
  if (listPromise) return listPromise
  listPromise = (async () => {
    const res = await fetch(`${BASE}news/manifest.json`)
    if (!res.ok) throw new Error("news manifest missing")
    const manifest = (await res.json()) as Manifest
    const transcriptSet = new Set(manifest.transcripts ?? [])
    const items = await Promise.all(
      manifest.articles.map((slug) =>
        fetchArticle(slug, transcriptSet.has(slug))
      )
    )
    return items.sort((a, b) => {
      if (a.date !== b.date) return a.date < b.date ? 1 : -1
      return serialFromSlug(b.slug) - serialFromSlug(a.slug)
    })
  })()
  return listPromise
}

export function loadNewsMetaList(): Promise<NewsMeta[]> {
  if (metaListPromise) return metaListPromise
  metaListPromise = loadNewsList().then((items) =>
    items.map(({ content: _c, transcript: _t, ...meta }) => meta)
  )
  return metaListPromise
}

const articleCache = new Map<string, Promise<NewsItem | undefined>>()

export function loadNewsItem(slug: string): Promise<NewsItem | undefined> {
  const cached = articleCache.get(slug)
  if (cached) return cached
  const promise = loadNewsList().then((items) =>
    items.find((item) => item.slug === slug)
  )
  articleCache.set(slug, promise)
  return promise
}
