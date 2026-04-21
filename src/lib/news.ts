export type NewsMeta = {
  slug: string
  title: string
  date: string
  tags: string[]
  summary: string
}

export type NewsItem = NewsMeta & {
  content: string
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

function slugFromPath(path: string): string {
  const name = path.split("/").pop() ?? path
  return name.replace(/\.md$/, "")
}

function dateFromSlug(slug: string): string | null {
  const match = slug.match(/^(\d{4}-\d{2}-\d{2})/)
  return match ? match[1] : null
}

function toItem(path: string, raw: string): NewsItem {
  const slug = slugFromPath(path)
  const { data, content } = parseFrontmatter(raw)
  const tags = (data.tags ?? "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean)

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? dateFromSlug(slug) ?? "",
    tags,
    summary: data.summary ?? "",
    content,
  }
}

const modules = import.meta.glob<string>("/src/news/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
})

const items: NewsItem[] = Object.entries(modules)
  .map(([path, raw]) => toItem(path, raw))
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))

export function listNews(): NewsMeta[] {
  return items.map(({ content: _content, ...meta }) => meta)
}

export function getNews(slug: string): NewsItem | undefined {
  return items.find((item) => item.slug === slug)
}
