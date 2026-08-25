import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Book } from "../data/books"
import BookQuickViewModal from "../components/books/BookQuickViewModal"

type QuickViewContextValue = {
  openQuickView: (book: Book) => void
}

const QuickViewContext = createContext<QuickViewContextValue | null>(null)

export function useQuickView(): QuickViewContextValue {
  const ctx = useContext(QuickViewContext)
  if (!ctx) throw new Error("useQuickView must be used within QuickViewProvider")
  return ctx
}

export function QuickViewProvider({ children }: { children: ReactNode }) {
  const [book, setBook] = useState<Book | null>(null)

  const openQuickView = useCallback((b: Book) => setBook(b), [])
  const closeQuickView = useCallback(() => setBook(null), [])

  return (
    <QuickViewContext.Provider value={{ openQuickView }}>
      {children}
      <BookQuickViewModal book={book} onClose={closeQuickView} />
    </QuickViewContext.Provider>
  )
}
