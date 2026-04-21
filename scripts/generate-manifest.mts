import { readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const here = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.resolve(here, "..", "public")
const newsDir = path.join(publicDir, "news")
const magazinesDir = path.join(publicDir, "magazines")

async function listMarkdownNames(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true })
  return entries
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => e.name.replace(/\.md$/, ""))
    .sort()
}

async function listSubdirectories(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true })
  return entries.filter((e) => e.isDirectory()).map((e) => e.name).sort()
}

function splitArticlesAndTranscripts(names: string[]): {
  articles: string[]
  transcripts: string[]
} {
  const articles: string[] = []
  const transcripts: string[] = []
  for (const name of names) {
    if (name.endsWith(".transcript")) {
      transcripts.push(name.replace(/\.transcript$/, ""))
    } else {
      articles.push(name)
    }
  }
  return { articles, transcripts }
}

export async function generateManifests(): Promise<{
  news: number
  topics: number
}> {
  const newsNames = await listMarkdownNames(newsDir).catch(() => [] as string[])
  const newsSplit = splitArticlesAndTranscripts(newsNames)
  await writeFile(
    path.join(newsDir, "manifest.json"),
    JSON.stringify(
      { articles: newsSplit.articles, transcripts: newsSplit.transcripts },
      null,
      2
    ) + "\n"
  )

  const topicSlugs = await listSubdirectories(magazinesDir).catch(
    () => [] as string[]
  )
  const topics = await Promise.all(
    topicSlugs.map(async (slug) => {
      const names = await listMarkdownNames(path.join(magazinesDir, slug))
      const { articles, transcripts } = splitArticlesAndTranscripts(names)
      return { slug, articles, transcripts }
    })
  )
  await writeFile(
    path.join(magazinesDir, "manifest.json"),
    JSON.stringify({ topics }, null, 2) + "\n"
  )

  return { news: newsSplit.articles.length, topics: topics.length }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const result = await generateManifests()
  console.log(
    `manifest: ${result.news} news, ${result.topics} magazine topics`
  )
}
