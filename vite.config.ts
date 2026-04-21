import path from "node:path"
import { defineConfig, type Plugin } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { generateManifests } from "./scripts/generate-manifest.mts"

function markdownManifest(): Plugin {
  let regenerate: (() => void) | null = null
  return {
    name: "markdown-manifest",
    async buildStart() {
      await generateManifests()
    },
    configureServer(server) {
      const run = async () => {
        await generateManifests()
        server.ws.send({ type: "full-reload" })
      }
      regenerate = () => void run()
      const publicDir = path.resolve(__dirname, "public")
      server.watcher.add(path.join(publicDir, "news"))
      server.watcher.add(path.join(publicDir, "magazines"))
      const shouldWatch = (file: string) => {
        const rel = path.relative(publicDir, file)
        if (rel.startsWith("..")) return false
        return rel.startsWith("news/") || rel.startsWith("magazines/")
      }
      server.watcher.on("add", (file) => {
        if (file.endsWith(".md") && shouldWatch(file)) regenerate?.()
      })
      server.watcher.on("unlink", (file) => {
        if (file.endsWith(".md") && shouldWatch(file)) regenerate?.()
      })
    },
  }
}

export default defineConfig({
  base: "/mynews/",
  plugins: [markdownManifest(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
