import { parseFrontmatter, parseTags } from "./frontmatter"

export type MagazineTopicMeta = {
  slug: string
  title: string
  issue: string
  date: string
  tags: string[]
  summary: string
  cover?: string
  hasIntroTranscript: boolean
}

export type MagazineArticleMeta = {
  topicSlug: string
  slug: string
  title: string
  order: number
  date: string
  summary: string
  hasTranscript: boolean
}

export type MagazineTopic = MagazineTopicMeta & {
  intro: string
  introTranscript?: string
  articles: MagazineArticleMeta[]
}

export type MagazineArticle = MagazineArticleMeta & {
  content: string
  transcript?: string
  topicTitle: string
  topicIssue: string
}

type ManifestTopic = {
  slug: string
  articles: string[]
  transcripts?: string[]
}
type Manifest = { topics: ManifestTopic[] }

type LoadedTopic = {
  meta: MagazineTopicMeta
  intro: string
  introTranscript?: string
  articles: (MagazineArticleMeta & { content: string; transcript?: string })[]
}

const BASE = import.meta.env.BASE_URL

async function fetchText(url: string): Promise<string | undefined> {
  const res = await fetch(url)
  if (!res.ok) return undefined
  return res.text()
}

async function loadTopic(topic: ManifestTopic): Promise<LoadedTopic> {
  const transcriptSet = new Set(topic.transcripts ?? [])
  const hasIntroTranscript = transcriptSet.has("_index")

  const [indexRaw, introTranscript] = await Promise.all([
    fetchText(`${BASE}magazines/${topic.slug}/_index.md`),
    hasIntroTranscript
      ? fetchText(`${BASE}magazines/${topic.slug}/_index.transcript.md`)
      : Promise.resolve(undefined),
  ])
  const indexParsed = indexRaw
    ? parseFrontmatter(indexRaw)
    : { data: {}, content: "" }
  const meta: MagazineTopicMeta = {
    slug: topic.slug,
    title: indexParsed.data.title ?? topic.slug,
    issue: indexParsed.data.issue ?? "",
    date: indexParsed.data.date ?? "",
    tags: parseTags(indexParsed.data.tags),
    summary: indexParsed.data.summary ?? "",
    cover: indexParsed.data.cover || undefined,
    hasIntroTranscript,
  }

  const articleSlugs = topic.articles.filter((s) => s !== "_index")
  const articles = await Promise.all(
    articleSlugs.map(async (articleSlug) => {
      const hasTranscript = transcriptSet.has(articleSlug)
      const [raw, transcript] = await Promise.all([
        fetchText(`${BASE}magazines/${topic.slug}/${articleSlug}.md`),
        hasTranscript
          ? fetchText(
              `${BASE}magazines/${topic.slug}/${articleSlug}.transcript.md`
            )
          : Promise.resolve(undefined),
      ])
      const { data, content } = raw
        ? parseFrontmatter(raw)
        : { data: {}, content: "" }
      const order = Number.parseInt(data.order ?? "", 10)
      return {
        topicSlug: topic.slug,
        slug: articleSlug,
        title: data.title ?? articleSlug,
        order: Number.isFinite(order) ? order : Number.MAX_SAFE_INTEGER,
        date: data.date ?? "",
        summary: data.summary ?? "",
        hasTranscript,
        content,
        transcript,
      }
    })
  )

  articles.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order
    return a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0
  })

  return {
    meta,
    intro: indexParsed.content,
    introTranscript,
    articles,
  }
}

let allPromise: Promise<Map<string, LoadedTopic>> | null = null
let topicsListPromise: Promise<MagazineTopicMeta[]> | null = null
const topicCache = new Map<string, Promise<MagazineTopic | undefined>>()
const articleCache = new Map<string, Promise<MagazineArticle | undefined>>()

function loadAll(): Promise<Map<string, LoadedTopic>> {
  if (allPromise) return allPromise
  allPromise = (async () => {
    const res = await fetch(`${BASE}magazines/manifest.json`)
    if (!res.ok) throw new Error("magazine manifest missing")
    const manifest = (await res.json()) as Manifest
    const loaded = await Promise.all(manifest.topics.map(loadTopic))
    const map = new Map<string, LoadedTopic>()
    for (const topic of loaded) map.set(topic.meta.slug, topic)
    return map
  })()
  return allPromise
}

export function loadMagazineTopics(): Promise<MagazineTopicMeta[]> {
  if (topicsListPromise) return topicsListPromise
  topicsListPromise = loadAll().then((topics) => {
    const list = [...topics.values()].map((t) => t.meta)
    list.sort((a, b) => {
      if (a.date === b.date) return a.title < b.title ? -1 : 1
      return a.date < b.date ? 1 : -1
    })
    return list
  })
  return topicsListPromise
}

export function loadMagazineTopic(
  slug: string
): Promise<MagazineTopic | undefined> {
  const cached = topicCache.get(slug)
  if (cached) return cached
  const promise = loadAll().then((topics) => {
    const topic = topics.get(slug)
    if (!topic) return undefined
    return {
      ...topic.meta,
      intro: topic.intro,
      introTranscript: topic.introTranscript,
      articles: topic.articles.map(
        ({ content: _c, transcript: _t, ...meta }) => meta
      ),
    }
  })
  topicCache.set(slug, promise)
  return promise
}

export function loadMagazineArticle(
  topicSlug: string,
  articleSlug: string
): Promise<MagazineArticle | undefined> {
  const key = `${topicSlug}/${articleSlug}`
  const cached = articleCache.get(key)
  if (cached) return cached
  const promise = loadAll().then((topics) => {
    const topic = topics.get(topicSlug)
    if (!topic) return undefined
    const article = topic.articles.find((a) => a.slug === articleSlug)
    if (!article) return undefined
    return {
      ...article,
      topicTitle: topic.meta.title,
      topicIssue: topic.meta.issue,
    }
  })
  articleCache.set(key, promise)
  return promise
}
