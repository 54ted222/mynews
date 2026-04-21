import { Suspense } from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import { SiteLayout } from "@/components/layout/site-layout"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ThemeProvider } from "@/lib/theme"
import { Home } from "@/pages/home"
import { NewsList } from "@/pages/news-list"
import { NewsDetail } from "@/pages/news-detail"
import { MagazineList } from "@/pages/magazine-list"
import { MagazineTopicPage } from "@/pages/magazine-topic"
import { MagazineArticlePage } from "@/pages/magazine-article"

function PageFallback() {
  return (
    <div className="text-sm text-muted-foreground">載入中…</div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<PageFallback />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="news"
              element={
                <Suspense fallback={<PageFallback />}>
                  <NewsList />
                </Suspense>
              }
            />
            <Route
              path="news/:slug"
              element={
                <Suspense fallback={<PageFallback />}>
                  <NewsDetail />
                </Suspense>
              }
            />
            <Route
              path="magazines"
              element={
                <Suspense fallback={<PageFallback />}>
                  <MagazineList />
                </Suspense>
              }
            />
            <Route
              path="magazines/:topic"
              element={
                <Suspense fallback={<PageFallback />}>
                  <MagazineTopicPage />
                </Suspense>
              }
            />
            <Route
              path="magazines/:topic/:article"
              element={
                <Suspense fallback={<PageFallback />}>
                  <MagazineArticlePage />
                </Suspense>
              }
            />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}
