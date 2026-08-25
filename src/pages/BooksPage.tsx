import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import Container from "../components/layout/Container"
import BookGrid from "../components/books/BookGrid"
import SectionHeading from "../components/ui/SectionHeading"
import Divider from "../components/ui/Divider"
import PublicationForm from "../components/forms/PublicationForm"
import { books, DISCOVERY_CATEGORIES, type Book } from "../data/books"

const categories = ["All Books", ...DISCOVERY_CATEGORIES]

function isBookInCategory(cat: string, book: Book): boolean {
  if (cat === "All Books" || cat === "All") return true
  if (book.categories && book.categories.includes(cat as any)) {
    return true
  }
  return book.category === cat
}

export default function BooksPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [activeCategory, setActiveCategory] = useState<string>(() => {
    if (categoryParam && DISCOVERY_CATEGORIES.includes(categoryParam as any)) {
      return categoryParam
    }
    return "All Books"
  })

  useEffect(() => {
    if (categoryParam && DISCOVERY_CATEGORIES.includes(categoryParam as any)) {
      setActiveCategory(categoryParam)
    } else if (!categoryParam) {
      setActiveCategory("All Books")
    }
  }, [categoryParam])

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    if (cat === "All Books") {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
  }

  const filtered = books.filter((b) => isBookInCategory(activeCategory, b))

  return (
    <main id="root">
      {/* ── Page header ──────────────────────────────────────────── */}
      <section aria-labelledby="books-heading" className="border-b border-border py-16 md:py-20">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-5">
                Works & Publications
              </p>
              <h1
                id="books-heading"
                className="font-serif text-4xl md:text-5xl font-normal text-navy leading-tight mb-4"
              >
                Books
              </h1>
              <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-xl">
                A collection of theological, pastoral, canonical and spiritual writings.
              </p>
            </div>
            <div className="flex-shrink-0">
              <p className="font-sans text-[13px] text-muted-foreground">
                <span className="font-serif text-2xl text-navy font-normal mr-1">{books.length}</span>
                {" "}works
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Browse by Category ───────────────────────────────────── */}
      <section aria-label="Browse by category" className="border-b border-border bg-secondary/60 py-6">
        <Container>
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center justify-between">
              <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-gold">
                Browse by Category
              </p>
              {activeCategory !== "All Books" && (
                <button
                  type="button"
                  onClick={() => handleCategoryChange("All Books")}
                  className="font-sans text-[12px] text-muted-foreground hover:text-navy transition-colors underline underline-offset-2"
                >
                  Reset to All Books
                </button>
              )}
            </div>

            <div
              className="flex flex-wrap items-center gap-2"
              role="group"
              aria-label="Book categories"
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat
                const count = cat === "All Books" ? books.length : books.filter((b) => isBookInCategory(cat, b)).length
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryChange(cat)}
                    aria-pressed={isActive}
                    className={`
                      font-sans text-[12px] tracking-wide px-3.5 py-1.5 transition-all flex items-center gap-1.5
                      focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1
                      ${
                        isActive
                          ? "bg-navy text-ivory shadow-sm font-medium border border-navy"
                          : "bg-background text-muted-foreground hover:text-foreground border border-border hover:border-navy/40"
                      }
                    `}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive ? "bg-white/20 text-ivory" : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Catalogue ────────────────────────────────────────────── */}
      <section aria-labelledby="catalogue-heading" className="py-16 md:py-24">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-12">
            <div>
              <h2
                id="catalogue-heading"
                className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground"
              >
                {activeCategory !== "All Books" ? (
                  <span>
                    Category: <strong className="text-navy">{activeCategory}</strong> — {filtered.length} of {books.length} Titles
                  </span>
                ) : (
                  `${books.length} Titles in Collection`
                )}
              </h2>
            </div>
            <span className="font-sans text-[11px] text-muted-foreground tracking-wide">
              All Coming Soon
            </span>
          </div>

          {filtered.length > 0 ? (
            <BookGrid books={filtered} />
          ) : (
            <div className="py-16 text-center bg-secondary/30 border border-dashed border-border p-8">
              <p className="font-sans text-[14px] text-muted-foreground mb-4">
                No books found in the selected category.
              </p>
              <button
                type="button"
                onClick={() => handleCategoryChange("All Books")}
                className="font-sans text-[13px] text-navy font-medium underline underline-offset-4 hover:text-gold"
              >
                View all {books.length} books
              </button>
            </div>
          )}
        </Container>
      </section>

      <Divider />

      {/* ── Publication updates ──────────────────────────────────── */}
      <section aria-labelledby="updates-heading" className="py-16 md:py-20 bg-secondary">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <SectionHeading
                label="Stay Informed"
                title="Publication Updates"
                subtitle="Receive updates when new books become available."
              />
            </div>
            <div className="md:pt-10">
              <PublicationForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
