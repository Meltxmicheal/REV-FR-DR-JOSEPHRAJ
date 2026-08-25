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

function NotFoundPage() {
  return (
    <main className="flex-1 flex items-center justify-center py-32">
      <div className="text-center">
        <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-5">
          404
        </p>
        <h1 className="font-serif text-4xl text-navy mb-4">Page Not Found</h1>
        <a
          href="/"
          className="font-sans text-sm text-navy underline underline-offset-4 hover:text-gold transition-colors"
        >
          Return Home
        </a>
      </div>
    </main>
  )
}

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
