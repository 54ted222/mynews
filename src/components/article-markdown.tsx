import type { ComponentPropsWithoutRef, ReactElement } from "react"
import ReactMarkdown, { type Components } from "react-markdown"
import remarkGfm from "remark-gfm"
import { MermaidDiagram } from "@/components/mermaid-diagram"
import { cn } from "@/lib/utils"

type PreProps = ComponentPropsWithoutRef<"pre">
type CodeChildProps = { className?: string; children?: unknown }

function isCodeElement(node: unknown): node is ReactElement<CodeChildProps> {
  if (!node || typeof node !== "object") return false
  const maybe = node as { type?: unknown; props?: CodeChildProps }
  return maybe.type === "code" && typeof maybe.props === "object"
}

const components: Components = {
  pre: ({ children, ...rest }: PreProps) => {
    if (isCodeElement(children)) {
      const className = children.props.className ?? ""
      const match = /language-(\w+)/.exec(className)
      if (match?.[1] === "mermaid") {
        const code = String(children.props.children ?? "").replace(/\n+$/, "")
        return <MermaidDiagram code={code} />
      }
    }
    return <pre {...rest}>{children}</pre>
  },
  table: ({ children, ...rest }) => (
    <div className="not-prose my-6 w-full overflow-x-auto rounded-lg border">
      <table
        {...rest}
        className="w-max min-w-full border-collapse text-sm [&_th]:max-w-[320px] [&_th]:border-b [&_th]:bg-muted/50 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:align-top [&_th]:font-semibold [&_th]:break-words [&_th]:whitespace-normal [&_td]:max-w-[320px] [&_td]:border-b [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_td]:break-words [&_td]:whitespace-normal [&_tr:last-child_td]:border-b-0"
      >
        {children}
      </table>
    </div>
  ),
  a: ({ href, children, ...rest }) => {
    if (typeof href === "string" && href.startsWith("#")) {
      const id = href.slice(1)
      return (
        <a
          {...rest}
          href={href}
          onClick={(event) => {
            event.preventDefault()
            const target = id ? document.getElementById(id) : null
            if (target) {
              target.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          }}
        >
          {children}
        </a>
      )
    }
    const isExternal = typeof href === "string" && /^https?:\/\//i.test(href)
    return (
      <a
        {...rest}
        href={href}
        {...(isExternal && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {children}
      </a>
    )
  },
}

const baseProse = cn(
  "prose prose-neutral max-w-none break-words",
  "prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight",
  "prose-h1:text-3xl sm:prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl",
  "prose-a:text-foreground prose-a:underline prose-a:break-words",
  "prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none",
  "prose-pre:overflow-x-auto prose-pre:rounded-lg prose-pre:bg-muted prose-pre:text-foreground",
  "dark:prose-invert"
)

export function ArticleMarkdown({
  content,
  className,
}: {
  content: string
  className?: string
}) {
  return (
    <div
      className={cn(
        baseProse,
        "prose-article",
        className
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
