import { useEffect, useRef, useState } from "react"
import { useTheme } from "@/lib/theme"

let mermaidInitScheme: "light" | "dark" | null = null

async function renderMermaid(
  code: string,
  scheme: "light" | "dark"
): Promise<string> {
  const mermaid = (await import("mermaid")).default
  if (mermaidInitScheme !== scheme) {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      theme: scheme === "dark" ? "dark" : "default",
      fontFamily: "inherit",
    })
    mermaidInitScheme = scheme
  }
  const id = `mm-${Math.random().toString(36).slice(2)}`
  const { svg } = await mermaid.render(id, code)
  return svg
}

export function MermaidDiagram({ code }: { code: string }) {
  const { scheme } = useTheme()
  const [state, setState] = useState<
    | { kind: "loading" }
    | { kind: "ok"; svg: string }
    | { kind: "error"; message: string }
  >({ kind: "loading" })
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let alive = true
    setState({ kind: "loading" })
    renderMermaid(code, scheme)
      .then((svg) => {
        if (alive) setState({ kind: "ok", svg })
      })
      .catch((err: unknown) => {
        if (alive)
          setState({
            kind: "error",
            message: err instanceof Error ? err.message : String(err),
          })
      })
    return () => {
      alive = false
    }
  }, [code, scheme])

  if (state.kind === "loading") {
    return (
      <div className="my-4 text-xs text-muted-foreground">載入圖表中…</div>
    )
  }
  if (state.kind === "error") {
    return (
      <pre className="my-4 overflow-x-auto rounded-lg border border-destructive/40 bg-destructive/5 p-3 text-xs text-destructive">
        mermaid 圖表解析失敗：{state.message}
        {"\n\n"}
        {code}
      </pre>
    )
  }
  return (
    <div
      ref={containerRef}
      className="my-6 flex w-full justify-center overflow-x-auto [&_svg]:max-w-full [&_svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: state.svg }}
    />
  )
}
