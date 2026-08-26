import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Container from "../components/layout/Container"
import BookCover from "../components/books/BookCover"
import BookStatusBadge from "../components/books/BookStatus"
import Divider from "../components/ui/Divider"
import SectionHeading from "../components/ui/SectionHeading"
import PublicationForm from "../components/forms/PublicationForm"
import { books, getBook, type BookStatus } from "../data/books"
import { author } from "../data/author"
import BookCard from "../components/books/BookCard"

function BookCTA({ status }: { status: BookStatus }) {
  if (status === "AVAILABLE") {
    return (
      <div>
        <button
          className="inline-flex items-center font-sans text-sm font-medium tracking-wide bg-navy text-ivory border border-navy hover:bg-navy-deep transition-colors px-8 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 min-h-[48px]"
          onClick={() => {/* wire to cart when backend ready */}}
        >
          Buy Now
        </button>
      </div>
    )
  }

  if (status === "OUT_OF_STOCK") {
    return (
      <div>
        <p className="font-sans text-[14px] text-muted-foreground leading-relaxed mb-5">
          This title is currently out of stock. Register below to be notified when it
          becomes available again.
        </p>
        <div className="max-w-sm">
          <p className="font-sans text-[13px] font-medium text-foreground mb-3">
            Notify me when available
          </p>
          <PublicationForm />
        </div>
      </div>
    )
  }

  /* COMING_SOON / PUBLISHED — the recommended UX from spec */
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <BookStatusBadge status={status} size="md" />
      </div>
      <p className="font-sans text-[14px] text-muted-foreground leading-relaxed mb-6">
        This title is currently being prepared for publication. Publication and
        purchasing details will be announced when available.
      </p>
      <div className="max-w-md">
        <p className="font-sans text-[13px] font-medium text-foreground mb-3">
          Notify me when available
        </p>
        <PublicationForm />
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <main id="root">
      <Container>
        <div className="py-32 text-center">
          <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-5">
            404
          </p>
          <h1 className="font-serif text-4xl text-navy mb-4">Book Not Found</h1>
          <p className="font-sans text-base text-muted-foreground mb-8">
            The book you are looking for could not be found.
          </p>
          <Link
            to="/books"
            className="font-sans text-sm text-navy underline underline-offset-4 hover:text-gold transition-colors"
          >
            ← Return to Books
          </Link>
        </div>
      </Container>
    </main>
  )
}

export default function BookDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const book = slug ? getBook(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
    if (book) {
      const titleBase = book.seo?.title || book.title
      const finalTitle = titleBase.includes("Joseph Raj")
        ? titleBase
        : `${titleBase} | Rev. Fr. Dr. Joseph Raj`
      document.title = finalTitle

      const desc = book.seo?.description || book.description
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute("content", desc)
      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) ogTitle.setAttribute("content", finalTitle)
      const ogDesc = document.querySelector('meta[property="og:description"]')
      if (ogDesc) ogDesc.setAttribute("content", desc)
      const twTitle = document.querySelector('meta[property="twitter:title"]')
      if (twTitle) twTitle.setAttribute("content", finalTitle)
      const twDesc = document.querySelector('meta[property="twitter:description"]')
      if (twDesc) twDesc.setAttribute("content", desc)
    }

    // Inject dynamic JSON-LD Schema for Book & Breadcrumbs
    if (book) {
      const scriptId = "book-jsonld-schema"
      let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null
      if (!scriptTag) {
        scriptTag = document.createElement("script")
        scriptTag.id = scriptId
        scriptTag.type = "application/ld+json"
        document.head.appendChild(scriptTag)
      }

      const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Book",
            "@id": `https://josephraj.org/books/${book.slug}#book`,
            "name": book.title,
            "description": book.description,
            "image": `https://josephraj.org${book.coverImage}`,
            "url": `https://josephraj.org/books/${book.slug}`,
            "inLanguage": "en",
            "author": {
              "@type": "Person",
              "@id": "https://josephraj.org/#author",
              "name": "Rev. Fr. Dr. Joseph Raj"
            },
            "genre": book.categories || [book.category],
            "workExample": {
              "@type": "Book",
              "bookFormat": "https://schema.org/Paperback",
              "availability": "https://schema.org/PreOrder"
            }
          },
          {
            "@type": "BreadcrumbList",
            "@id": `https://josephraj.org/books/${book.slug}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://josephraj.org/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Books",
                "item": "https://josephraj.org/books"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": `Book ${book.order ?? ""}: ${book.title}`,
                "item": `https://josephraj.org/books/${book.slug}`
              }
            ]
          }
        ]
      }

      scriptTag.text = JSON.stringify(structuredData)

      return () => {
        const tag = document.getElementById(scriptId)
        if (tag) tag.remove()
      }
    }
  }, [book])

  if (!book) return <NotFound />

  const bookIndex = books.findIndex((b) => b.slug === slug)
  const prevBook = bookIndex > 0 ? books[bookIndex - 1] : null
  const nextBook = bookIndex < books.length - 1 ? books[bookIndex + 1] : null

  // Thematic similarity: score other books by shared categories
  const currentCats = book.categories || [book.category]
  const relatedBooks = books
    .filter((b) => b.slug !== slug)
    .map((otherBook) => {
      const otherCats = otherBook.categories || [otherBook.category]
      const overlap = otherCats.filter((c) => currentCats.includes(c as any)).length
      return { book: otherBook, overlap }
    })
    .sort((a, b) => {
      if (b.overlap !== a.overlap) return b.overlap - a.overlap
      return (a.book.order ?? 0) - (b.book.order ?? 0)
    })
    .map((item) => item.book)
    .slice(0, 3)

  return (
    <main id="root" className="bg-parchment min-h-screen">
      {/* ── Breadcrumb & Navigation Bar ──────────────────────────── */}
      <nav aria-label="Breadcrumb" className="border-b border-border bg-secondary/40">
        <Container>
          <div className="flex items-center justify-between py-3.5 gap-4">
            <ol className="flex items-center gap-2 font-sans text-[12px] text-muted-foreground overflow-hidden">
              <li className="shrink-0">
                <Link to="/books" className="hover:text-foreground transition-colors flex items-center gap-1">
                  ← Back to Books
                </Link>
              </li>
              <li aria-hidden="true" className="opacity-40 shrink-0">/</li>
              <li className="text-foreground truncate max-w-xs sm:max-w-md">
                Book {book.order ?? bookIndex + 1}: {book.title}
              </li>
            </ol>

            {/* Quick Prev / Next links */}
            <div className="flex items-center gap-3 shrink-0 font-sans text-[12px]">
              {prevBook ? (
                <Link
                  to={`/books/${prevBook.slug}`}
                  className="text-navy hover:text-gold transition-colors flex items-center gap-1"
                  title={`Previous: Book ${bookIndex}: ${prevBook.title}`}
                >
                  ← <span className="hidden sm:inline">Book {bookIndex}</span>
                </Link>
              ) : (
                <span className="text-muted-foreground/30 cursor-not-allowed">
                  ← <span className="hidden sm:inline">Previous</span>
                </span>
              )}
              <span className="text-border" aria-hidden="true">|</span>
              {nextBook ? (
                <Link
                  to={`/books/${nextBook.slug}`}
                  className="text-navy hover:text-gold transition-colors flex items-center gap-1"
                  title={`Next: Book ${bookIndex + 2}: ${nextBook.title}`}
                >
                  <span className="hidden sm:inline">Book {bookIndex + 2}</span> →
                </Link>
              ) : (
                <span className="text-muted-foreground/30 cursor-not-allowed">
                  <span className="hidden sm:inline">Next</span> →
                </span>
              )}
            </div>
          </div>
        </Container>
      </nav>

      {/* ── Book Hero / Overview ─────────────────────────────────── */}
      <section aria-labelledby="book-title" className="py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[340px_1fr] gap-12 md:gap-16 lg:gap-20 items-start">
            {/* Left: Book Cover */}
            <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-none mx-auto md:mx-0">
              <div className="shadow-[0_8px_30px_rgba(23,36,58,0.12)] border border-border">
                <BookCover title={book.title} coverImage={book.coverImage} index={bookIndex} />
              </div>
            </div>

            {/* Right: Book Overview & Meta */}
            <div>
              {/* Book Number + Category */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-navy bg-secondary px-2.5 py-0.5 border border-border">
                  Book {book.order ?? bookIndex + 1}
                </span>
                <span className="text-border">·</span>
                <p className="font-sans text-[11px] font-medium tracking-[0.22em] uppercase text-gold">
                  {book.category}
                </p>
              </div>

              {/* Title */}
              <h1
                id="book-title"
                className="font-serif text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-normal text-navy leading-[1.25] mb-6"
              >
                {book.title}
              </h1>

              <Divider className="mb-6" />

              {/* Short Description */}
              <p className="font-sans text-[15px] sm:text-[16px] text-foreground leading-[1.85] mb-8">
                {book.description}
              </p>

              {/* Categories & Themes */}
              {book.categories && book.categories.length > 0 && (
                <div className="border-t border-border pt-5 mb-8">
                  <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    Categories & Themes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {book.categories.map((cat) => (
                      <Link
                        key={cat}
                        to={`/books?category=${encodeURIComponent(cat)}`}
                        className="font-sans text-[12px] font-medium text-navy bg-secondary/80 hover:bg-navy hover:text-ivory transition-colors px-3 py-1.5 border border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <Divider className="mb-8" />

              {/* Dynamic CTA */}
              <BookCTA status={book.status} />
            </div>
          </div>
        </Container>
      </section>

      {/* ── General Introduction (Full Overview) ────────────────── */}
      {book.generalIntroduction && book.generalIntroduction.length > 0 && (
        <>
          <Divider />
          <section aria-labelledby="general-intro-heading" className="py-16 md:py-24 bg-secondary/30">
            <Container>
              <div className="max-w-3xl">
                <SectionHeading
                  label="Author Overview"
                  title="General Introduction"
                  subtitle="An authoritative overview of the canonical, theological, and pastoral scope of this work."
                />

                <div className="mt-12 space-y-12">
                  {book.generalIntroduction.map((section, sIdx) => (
                    <article key={sIdx} className="space-y-4">
                      {section.heading && (
                        <div className="pt-2">
                          <h3 className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-4">
                            {section.heading}
                          </h3>
                        </div>
                      )}
                      {section.paragraphs.map((p, pIdx) => (
                        <p
                          key={pIdx}
                          className="font-sans text-[15px] sm:text-[16px] text-foreground/90 leading-[1.9]"
                        >
                          {p}
                        </p>
                      ))}
                    </article>
                  ))}

                  {/* ── Central Theological Question (if present) ── */}
                  {book.centralQuestion && (
                    <div className="bg-secondary/70 border-l-2 border-gold p-6 sm:p-8 my-10">
                      <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-3">
                        The Central Theological Question
                      </p>
                      <p className="font-serif text-lg sm:text-xl text-navy italic leading-relaxed">
                        "{book.centralQuestion}"
                      </p>
                    </div>
                  )}

                  {/* ── Progression / Journey Path (if present) ─── */}
                  {book.progression && book.progression.steps.length > 0 && (
                    <div className="bg-secondary border border-border p-6 sm:p-8 my-10">
                      <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-5">
                        {book.progression.title}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        {book.progression.steps.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-2 sm:gap-3">
                            <span className="font-serif text-base sm:text-lg text-navy font-medium px-3.5 py-1.5 bg-ivory border border-border">
                              {step}
                            </span>
                            {idx < book.progression!.steps.length - 1 && (
                              <span className="text-gold font-sans font-semibold text-sm" aria-hidden="true">
                                →
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ── Sanctification Progression (if present) ─── */}
                  {book.sanctificationProgression && book.sanctificationProgression.length > 0 && (
                    <div className="bg-secondary border border-border p-6 sm:p-8 my-10">
                      <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-5">
                        The Pathway to Family Sanctification
                      </p>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        {book.sanctificationProgression.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-2 sm:gap-3">
                            <span className="font-serif text-base sm:text-lg text-navy font-medium px-3.5 py-1.5 bg-ivory border border-border">
                              {step}
                            </span>
                            {idx < book.sanctificationProgression!.length - 1 && (
                              <span className="text-gold font-sans font-semibold text-sm" aria-hidden="true">
                                →
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Container>
          </section>
        </>
      )}

      {/* ── Threefold Dimension Section (if present) ───────── */}
      {book.threefoldDimension && book.threefoldDimension.length > 0 && (
        <>
          <Divider />
          <section aria-labelledby="threefold-heading" className="py-16 md:py-24">
            <Container>
              <SectionHeading
                label="Core Framework"
                title="The Threefold Dimension"
                subtitle="An integrated synthesis of doctrine, ecclesial law, and pastoral responsibility."
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {book.threefoldDimension.map((dim, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col bg-secondary border border-border p-7 sm:p-8"
                  >
                    <span className="font-sans text-[10px] font-semibold tracking-[0.22em] uppercase text-gold mb-2">
                      {dim.label}
                    </span>
                    <h3 className="font-serif text-2xl text-navy font-normal mb-3">
                      {dim.title}
                    </h3>
                    <p className="font-sans text-[14px] text-foreground/90 leading-relaxed">
                      {dim.description}
                    </p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </>
      )}

      {/* ── Key Distinction Section (if present) ─────────────── */}
      {book.keyDistinction && (
        <>
          <Divider />
          <section aria-labelledby="key-distinction-heading" className="py-16 md:py-24 bg-secondary/30">
            <Container>
              <div className="max-w-4xl">
                <SectionHeading
                  label="Doctrinal Synthesis"
                  title={book.keyDistinction.heading}
                  subtitle={book.keyDistinction.subtitle}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-secondary border border-border p-7 sm:p-8">
                    <span className="font-sans text-[10px] font-semibold tracking-[0.22em] uppercase text-gold">
                      {book.keyDistinction.left.subtitle || "Primary Economy"}
                    </span>
                    <h3 className="font-serif text-2xl text-navy font-normal mt-1 mb-5">
                      {book.keyDistinction.left.title}
                    </h3>
                    <ul className="space-y-3">
                      {book.keyDistinction.left.points.map((pt, ptIdx) => (
                        <li
                          key={ptIdx}
                          className="flex items-start gap-2.5 font-sans text-[13px] text-foreground leading-snug"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5"
                            aria-hidden="true"
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-secondary border border-border p-7 sm:p-8">
                    <span className="font-sans text-[10px] font-semibold tracking-[0.22em] uppercase text-gold">
                      {book.keyDistinction.right.subtitle || "Ecclesial Economy"}
                    </span>
                    <h3 className="font-serif text-2xl text-navy font-normal mt-1 mb-5">
                      {book.keyDistinction.right.title}
                    </h3>
                    <ul className="space-y-3">
                      {book.keyDistinction.right.points.map((pt, ptIdx) => (
                        <li
                          key={ptIdx}
                          className="flex items-start gap-2.5 font-sans text-[13px] text-foreground leading-snug"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5"
                            aria-hidden="true"
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </>
      )}

      {/* ── Book Structure / Chapter Outlines ────────────────────── */}
      {book.chapters && book.chapters.length > 0 && (
        <>
          <Divider />
          <section aria-labelledby="structure-heading" className="py-16 md:py-24">
            <Container>
              <SectionHeading
                label="Organization"
                title={book.chapters.length === 7 ? "The Seven-Stage Lenten Journey" : "Book Structure"}
                subtitle={book.structureOverview || "An outline of the chapters comprising this comprehensive volume."}
              />

              <div className={`grid grid-cols-1 ${book.chapters.length > 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-3"} gap-8 mt-12`}>
                {book.chapters.map((ch, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col bg-secondary border border-border p-7 sm:p-8"
                  >
                    <div className="mb-4">
                      <span className="font-sans text-[10px] font-semibold tracking-[0.22em] uppercase text-gold">
                        {ch.number}
                      </span>
                      <h3 className="font-serif text-2xl text-navy font-normal mt-1 mb-3">
                        {ch.title}
                      </h3>
                      <p className="font-sans text-[13px] text-muted-foreground leading-relaxed">
                        {ch.description}
                      </p>
                    </div>

                    <Divider className="my-5" />

                    <ul className="space-y-3 mt-auto">
                      {ch.topics.map((t, tIdx) => (
                        <li
                          key={tIdx}
                          className="flex items-start gap-2.5 font-sans text-[13px] text-foreground leading-snug"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5"
                            aria-hidden="true"
                          />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </>
      )}

      {/* ── Pull Quote (if present) ─────────────────────────── */}
      {book.pullQuote && (
        <>
          <Divider />
          <section aria-label="Key Reflection" className="py-14 md:py-20 bg-secondary/50">
            <Container>
              <div className="max-w-3xl mx-auto text-center px-4">
                <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-navy leading-relaxed mb-4">
                  "{book.pullQuote.text}"
                </blockquote>
                {book.pullQuote.author && (
                  <cite className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-gold not-italic">
                    — {book.pullQuote.author}
                  </cite>
                )}
              </div>
            </Container>
          </section>
        </>
      )}

      {/* ── Personal Pilgrimage Section (if present) ────────── */}
      {book.personalPilgrimage && (
        <>
          <Divider />
          <section aria-labelledby="personal-pilgrimage-heading" className="py-16 md:py-24">
            <Container>
              <div className="max-w-3xl">
                <SectionHeading
                  label="Spiritual Reflection"
                  title={book.personalPilgrimage.heading}
                  subtitle={book.personalPilgrimage.subtitle}
                />

                <div className="mt-10 space-y-6">
                  {book.personalPilgrimage.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="font-sans text-[15px] sm:text-[16px] text-foreground/90 leading-[1.9]"
                    >
                      {p}
                    </p>
                  ))}

                  {book.personalPilgrimage.points && book.personalPilgrimage.points.length > 0 && (
                    <div className="bg-secondary border border-border p-7 sm:p-8 mt-8">
                      <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-4">
                        The Pilgrim's Experience
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {book.personalPilgrimage.points.map((pt, ptIdx) => (
                          <li
                            key={ptIdx}
                            className="flex items-start gap-2.5 font-sans text-[13px] text-foreground leading-snug"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5"
                              aria-hidden="true"
                            />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Container>
          </section>
        </>
      )}

      {/* ── Training Ground Section (if present) ─────────────── */}
      {book.trainingGround && (
        <>
          <Divider />
          <section aria-labelledby="training-ground-heading" className="py-16 md:py-24 bg-secondary/30">
            <Container>
              <div className="max-w-3xl">
                <SectionHeading
                  label="The Broader Journey"
                  title={book.trainingGround.heading}
                  subtitle={book.trainingGround.subtitle}
                />

                <div className="mt-10 space-y-6">
                  {book.trainingGround.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="font-sans text-[15px] sm:text-[16px] text-foreground/90 leading-[1.9]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        </>
      )}

      {/* ── Book Themes Section (if present) ────────────────── */}
      {book.bookThemes && (
        <>
          <Divider />
          <section aria-labelledby="book-themes-heading" className="py-16 md:py-24">
            <Container>
              <div className="max-w-3xl">
                <SectionHeading
                  label="Content & Themes"
                  title={book.bookThemes.heading}
                  subtitle={book.bookThemes.subtitle}
                />

                <div className="mt-10 space-y-6">
                  {book.bookThemes.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="font-sans text-[15px] sm:text-[16px] text-foreground/90 leading-[1.9]"
                    >
                      {p}
                    </p>
                  ))}

                  {book.bookThemes.points && book.bookThemes.points.length > 0 && (
                    <div className="bg-secondary border border-border p-7 sm:p-8 mt-8">
                      <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-4">
                        What Readers Will Find
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {book.bookThemes.points.map((pt, ptIdx) => (
                          <li
                            key={ptIdx}
                            className="flex items-start gap-2.5 font-sans text-[13px] text-foreground leading-snug"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5"
                              aria-hidden="true"
                            />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Container>
          </section>
        </>
      )}

      {/* ── Concluding Reflection / Final Message ───────────── */}
      {book.concludingReflection && (
        <>
          <Divider />
          <section aria-labelledby="conclusion-heading" className="py-16 md:py-24 bg-secondary/30">
            <Container>
              <div className="max-w-3xl">
                <SectionHeading
                  label="Final Message"
                  title={book.concludingReflection.heading}
                  subtitle={book.concludingReflection.subtitle}
                />

                <div className="mt-10 space-y-6">
                  {book.concludingReflection.paragraphs?.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="font-sans text-[15px] sm:text-[16px] text-foreground/90 leading-[1.9]"
                    >
                      {p}
                    </p>
                  ))}

                  {book.concludingReflection.points && book.concludingReflection.points.length > 0 && (
                    <div className="bg-secondary border border-border p-7 sm:p-8 mt-8">
                      <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-4">
                        Core Pastoral Emphases
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {book.concludingReflection.points.map((pt, ptIdx) => (
                          <li
                            key={ptIdx}
                            className="flex items-start gap-2.5 font-sans text-[13px] text-foreground leading-snug"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5"
                              aria-hidden="true"
                            />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Container>
          </section>
        </>
      )}

      {/* ── Chronological Book Navigation Bar ─────────────────── */}
      <Divider />
      <section aria-label="Book Navigation" className="py-12 bg-secondary/40 border-y border-border">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="w-full sm:w-auto">
              {prevBook ? (
                <Link
                  to={`/books/${prevBook.slug}`}
                  className="group flex flex-col sm:items-start text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                >
                  <span className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-1">
                    ← Previous Book
                  </span>
                  <span className="font-serif text-base sm:text-lg text-navy group-hover:text-gold transition-colors line-clamp-1 max-w-sm">
                    Book {bookIndex}: {prevBook.title}
                  </span>
                </Link>
              ) : (
                <div className="opacity-40">
                  <span className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-1 block">
                    ← Previous Book
                  </span>
                  <span className="font-serif text-base sm:text-lg text-muted-foreground">
                    First Book in Collection
                  </span>
                </div>
              )}
            </div>

            <Link
              to="/books"
              className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] uppercase text-navy border border-navy/30 px-6 py-2.5 hover:bg-navy hover:text-ivory transition-colors shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
            >
              All Books
            </Link>

            <div className="w-full sm:w-auto text-left sm:text-right">
              {nextBook ? (
                <Link
                  to={`/books/${nextBook.slug}`}
                  className="group flex flex-col sm:items-end text-left sm:text-right focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                >
                  <span className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-1">
                    Next Book →
                  </span>
                  <span className="font-serif text-base sm:text-lg text-navy group-hover:text-gold transition-colors line-clamp-1 max-w-sm">
                    Book {bookIndex + 2}: {nextBook.title}
                  </span>
                </Link>
              ) : (
                <div className="opacity-40 text-left sm:text-right">
                  <span className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-1 block">
                    Next Book →
                  </span>
                  <span className="font-serif text-base sm:text-lg text-muted-foreground">
                    End of Collection
                  </span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Related Books ───────────────────────────────────────────── */}
      <section aria-labelledby="related-books-heading" className="py-16 md:py-20 bg-secondary/20 border-t border-border">
        <Container>
          <div className="flex items-end justify-between gap-4 mb-12">
            <div>
              <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-2">
                Thematic Exploration
              </p>
              <h2
                id="related-books-heading"
                className="font-serif text-2xl md:text-3xl font-normal text-navy"
              >
                Related Books
              </h2>
            </div>
            <Link
              to="/books"
              className="font-sans text-[13px] text-navy underline underline-offset-4 hover:text-gold transition-colors shrink-0"
            >
              View all {books.length} books →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {relatedBooks.map((b) => (
              <BookCard key={b.id} book={b} index={books.findIndex((bk) => bk.id === b.id)} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
