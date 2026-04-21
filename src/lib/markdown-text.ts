export function markdownToPlainText(markdown: string): string {
  let text = markdown

  text = text.replace(/```[\s\S]*?```/g, " ")
  text = text.replace(/`([^`]+)`/g, "$1")

  text = text.replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")

  text = text.replace(/^\s{0,3}>\s?/gm, "")
  text = text.replace(/^\s{0,3}#{1,6}\s+/gm, "")
  text = text.replace(/^\s*[-*+]\s+/gm, "")
  text = text.replace(/^\s*\d+\.\s+/gm, "")
  text = text.replace(/^\s*[-*_]{3,}\s*$/gm, "")

  text = text.replace(/\|/g, " ")

  text = text.replace(/(\*\*|__)(.*?)\1/g, "$2")
  text = text.replace(/(\*|_)(.*?)\1/g, "$2")
  text = text.replace(/~~(.*?)~~/g, "$1")

  text = text.replace(/[ \t]+/g, " ")
  text = text.replace(/\n{2,}/g, "\n\n")

  return text.trim()
}
