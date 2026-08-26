import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import PageTransition from "./components/layout/PageTransition"
import { QuickViewProvider } from "./context/BookQuickViewContext"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import BooksPage from "./pages/BooksPage"
import BookDetailPage from "./pages/BookDetailPage"
import ContactPage from "./pages/ContactPage"
import PrivacyPage from "./pages/PrivacyPage"
import TermsPage from "./pages/TermsPage"
import NotFoundPage from "./pages/NotFoundPage"

export default function App() {
  return (
    <BrowserRouter>
      <QuickViewProvider>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Navbar />
          <div className="flex-1">
            <PageTransition>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/books/:slug" element={<BookDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </PageTransition>
          </div>
          <Footer />
        </div>
      </QuickViewProvider>
    </BrowserRouter>
  )
}
