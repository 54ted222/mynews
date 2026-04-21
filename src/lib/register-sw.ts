export function registerServiceWorker() {
  if (typeof window === "undefined") return
  if (!("serviceWorker" in navigator)) return
  if (import.meta.env.DEV) return

  const swUrl = `${import.meta.env.BASE_URL}sw.js`

  window.addEventListener("load", () => {
    navigator.serviceWorker.register(swUrl, {
      scope: import.meta.env.BASE_URL,
    })
  })
}
