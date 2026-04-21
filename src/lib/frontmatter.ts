export type FrontmatterResult = {
  data: Record<string, string>
  content: string
}

export function parseFrontmatter(raw: string): FrontmatterResult {
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

export function parseTags(value: string | undefined): string[] {
  return (value ?? "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean)
}
