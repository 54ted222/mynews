export type MagazineTopicMeta = {
  slug: string
  title: string
  issue: string
  date: string
  tags: string[]
  summary: string
  cover?: string
}

export type MagazineArticleMeta = {
  topicSlug: string
  slug: string
  title: string
  order: number
  date: string
  summary: string
}

export type MagazineTopic = MagazineTopicMeta & {
  intro: string
  articles: MagazineArticleMeta[]
}

export type MagazineArticle = MagazineArticleMeta & {
  content: string
  topicTitle: string
  topicIssue: string
}

type FrontmatterResult = {
  data: Record<string, string>
  content: string
}

function parseFrontmatter(raw: string): FrontmatterResult {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const data: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const colon = line.indexOf(":")
    if (colon === -1) continue
    const key = line.slice(0, colon).trim()
    const value = line
      .slice(colon + 1)
      .trim()
      .replace(/^["']|["']$/g, "")
    if (key) data[key] = value
  }
  return { data, content: match[2] }
}

function parseTags(value: string | undefined): string[] {
  return (value ?? "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean)
}

type RawTopic = {
  slug: string
  meta: MagazineTopicMeta
  intro: string
  articles: MagazineArticleInternal[]
}

type MagazineArticleInternal = MagazineArticleMeta & { content: string }

const modules = import.meta.glob<string>("/src/magazines/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
})

function buildTopics(): Map<string, RawTopic> {
  const topics = new Map<string, RawTopic>()

  for (const [path, raw] of Object.entries(modules)) {
    const parts = path.split("/")
    const topicSlug = parts[parts.length - 2]
    const fileName = parts[parts.length - 1].replace(/\.md$/, "")
    const { data, content } = parseFrontmatter(raw)

    let topic = topics.get(topicSlug)
    if (!topic) {
      topic = {
        slug: topicSlug,
        meta: {
          slug: topicSlug,
          title: topicSlug,
          issue: "",
          date: "",
          tags: [],
          summary: "",
        },
        intro: "",
        articles: [],
      }
      topics.set(topicSlug, topic)
    }

    if (fileName === "_index") {
      topic.meta = {
        slug: topicSlug,
        title: data.title ?? topicSlug,
        issue: data.issue ?? "",
        date: data.date ?? "",
        tags: parseTags(data.tags),
        summary: data.summary ?? "",
        cover: data.cover || undefined,
      }
      topic.intro = content
    } else {
      const order = Number.parseInt(data.order ?? "", 10)
      topic.articles.push({
        topicSlug,
        slug: fileName,
        title: data.title ?? fileName,
        order: Number.isFinite(order) ? order : Number.MAX_SAFE_INTEGER,
        date: data.date ?? "",
        summary: data.summary ?? "",
        content,
      })
    }
  }

  for (const topic of topics.values()) {
    topic.articles.sort((a, b) => {
      if (a.order !== b.order) return a.order - b.order
      return a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0
    })
  }

  return topics
}

const topics = buildTopics()

const sortedTopics = [...topics.values()].sort((a, b) => {
  const aDate = a.meta.date
  const bDate = b.meta.date
  if (aDate === bDate) return a.meta.title < b.meta.title ? -1 : 1
  return aDate < bDate ? 1 : -1
})

export function listMagazineTopics(): MagazineTopicMeta[] {
  return sortedTopics.map((t) => t.meta)
}

export function getMagazineTopic(slug: string): MagazineTopic | undefined {
  const topic = topics.get(slug)
  if (!topic) return undefined
  return {
    ...topic.meta,
    intro: topic.intro,
    articles: topic.articles.map(({ content: _c, ...meta }) => meta),
  }
}

export function getMagazineArticle(
  topicSlug: string,
  articleSlug: string
): MagazineArticle | undefined {
  const topic = topics.get(topicSlug)
  if (!topic) return undefined
  const article = topic.articles.find((a) => a.slug === articleSlug)
  if (!article) return undefined
  return {
    ...article,
    topicTitle: topic.meta.title,
    topicIssue: topic.meta.issue,
  }
}
