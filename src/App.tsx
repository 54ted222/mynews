import { HashRouter, Route, Routes } from "react-router-dom"
import { SiteLayout } from "@/components/layout/site-layout"
import { NewsList } from "@/pages/news-list"
import { NewsDetail } from "@/pages/news-detail"

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<NewsList />} />
          <Route path="news/:slug" element={<NewsDetail />} />
          <Route path="*" element={<NewsList />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
