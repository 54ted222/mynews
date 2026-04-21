import { HashRouter, Route, Routes } from "react-router-dom"
import { SiteLayout } from "@/components/layout/site-layout"
import { Home } from "@/pages/home"
import { NewsList } from "@/pages/news-list"
import { NewsDetail } from "@/pages/news-detail"
import { MagazineList } from "@/pages/magazine-list"
import { MagazineTopicPage } from "@/pages/magazine-topic"
import { MagazineArticlePage } from "@/pages/magazine-article"

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<NewsList />} />
          <Route path="news/:slug" element={<NewsDetail />} />
          <Route path="magazines" element={<MagazineList />} />
          <Route path="magazines/:topic" element={<MagazineTopicPage />} />
          <Route
            path="magazines/:topic/:article"
            element={<MagazineArticlePage />}
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
