const VERSION = "v1"
const RUNTIME_CACHE = `mynews-runtime-${VERSION}`
const HTML_CACHE = `mynews-html-${VERSION}`
const OFFLINE_URLS = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg"]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(HTML_CACHE).then((cache) => cache.addAll(OFFLINE_URLS))
  )
  self.skipWaiting()
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(
        keys
          .filter((k) => k !== RUNTIME_CACHE && k !== HTML_CACHE)
          .map((k) => caches.delete(k))
      )
      await self.clients.claim()
    })()
  )
})

function isHtmlRequest(request) {
  if (request.mode === "navigate") return true
  const accept = request.headers.get("accept") || ""
  return accept.includes("text/html")
}

async function networkFirstHtml(request) {
  const cache = await caches.open(HTML_CACHE)
  try {
    const response = await fetch(request)
    if (response && response.ok) {
      cache.put(request, response.clone())
    }
    return response
  } catch {
    const cached =
      (await cache.match(request)) ??
      (await cache.match("./index.html")) ??
      (await cache.match("./"))
    if (cached) return cached
    return new Response("離線且無快取", {
      status: 503,
      headers: { "content-type": "text/plain; charset=utf-8" },
    })
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE)
  const cached = await cache.match(request)
  const fetchPromise = fetch(request)
    .then((response) => {
      if (response && response.ok) cache.put(request, response.clone())
      return response
    })
    .catch(() => cached)
  return cached || fetchPromise
}

self.addEventListener("fetch", (event) => {
  const { request } = event
  if (request.method !== "GET") return

  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return

  if (isHtmlRequest(request)) {
    event.respondWith(networkFirstHtml(request))
    return
  }

  event.respondWith(staleWhileRevalidate(request))
})

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting()
})
