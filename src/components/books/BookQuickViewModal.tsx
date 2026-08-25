import { useEffect, useRef, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import type { Book } from "../../data/books"
import { author } from "../../data/author"
import BookCover from "./BookCover"
import BookStatusBadge from "./BookStatus"
import { books } from "../../data/books"

type Props = {
  book: Book | null
  onClose: () => void
}

function BookCTA({ book }: { book: Book }) {
  const navigate = useNavigate()

  if (book.status === "AVAILABLE") {
    return (
      <button
        className="inline-flex items-center font-sans text-[13px] font-medium tracking-wide bg-navy text-ivory border border-navy hover:bg-navy-deep transition-colors px-7 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
        onClick={() => {/* wire to cart when backend ready */}}
      >
        Buy Now
      </button>
    )
  }

  if (book.status === "OUT_OF_STOCK") {
    return (
      <button
        className="inline-flex items-center font-sans text-[13px] font-medium tracking-wide bg-navy text-ivory border border-navy hover:bg-navy-deep transition-colors px-7 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
        onClick={() => navigate(`/books/${book.slug}`)}
      >
        Notify Me
      </button>
    )
  }

  /* COMING_SOON / PUBLISHED */
  return (
    <button
      className="inline-flex items-center font-sans text-[13px] font-medium tracking-wide bg-navy text-ivory border border-navy hover:bg-navy-deep transition-colors px-7 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
      onClick={() => navigate(`/books/${book.slug}`)}
    >
      Notify Me
    </button>
  )
}

export default function BookQuickViewModal({ book, onClose }: Props) {
  const [exiting, setExiting] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const navigate = useNavigate()

  const bookIndex = book ? books.findIndex((b) => b.slug === book.slug) : 0

  const triggerClose = useCallback(() => {
    setExiting(true)
    setTimeout(() => {
      setExiting(false)
      onClose()
    }, 180)
  }, [onClose])

  /* Focus trap + ESC */
  useEffect(() => {
    if (!book) return

    const previousFocus = document.activeElement as HTMLElement
    closeButtonRef.current?.focus()

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        triggerClose()
        return
      }
      if (e.key !== "Tab") return

      const panel = panelRef.current
      if (!panel) return
      const focusable = panel.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
      previousFocus?.focus()
    }
  }, [book, triggerClose])

  if (!book) return null

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view: ${book.title}`}
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6
        ${exiting ? "modal-overlay-exit" : "modal-overlay-enter"}
      `}
      style={{ backgroundColor: "rgba(15,24,36,0.55)" }}
      onClick={(e) => { if (e.target === overlayRef.current) triggerClose() }}
    >
      <div
        ref={panelRef}
        className={`
          relative w-full sm:max-w-3xl bg-ivory border border-border
          max-h-[96svh] sm:max-h-[88vh] overflow-y-auto
          ${exiting ? "modal-panel-exit" : "modal-panel-enter"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <div className="flex items-center justify-end px-6 pt-5 pb-0">
          <button
            ref={closeButtonRef}
            onClick={triggerClose}
            aria-label="Close quick view"
            className="font-sans text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 min-h-[44px] min-w-[44px] justify-center"
          >
            <span className="hidden sm:inline">Close</span>
            <span aria-hidden="true" className="text-base leading-none">×</span>
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-0">
          {/* Cover */}
          <div className="sm:border-r border-border px-6 sm:px-8 pb-6 sm:py-8">
            <div className="max-w-[180px] sm:max-w-none mx-auto sm:mx-0">
              <BookCover title={book.title} coverImage={book.coverImage} index={bookIndex} />
            </div>
          </div>

          {/* Details */}
          <div className="px-6 sm:px-8 pb-8 sm:pt-8">
            {/* Status */}
            <div className="mb-4">
              <BookStatusBadge status={book.status} size="md" />
            </div>

            {/* Book Number + Category */}
            <div className="flex items-center gap-2 mb-3">
              <span className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-navy bg-secondary px-2 py-0.5 border border-border">
                Book {book.order ?? bookIndex + 1}
              </span>
              <span className="text-border">·</span>
              <p className="font-sans text-[11px] tracking-widest uppercase text-gold">
                {book.category}
              </p>
            </div>

            {/* Title */}
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-navy leading-snug mb-5">
              {book.title}
            </h2>

            {/* Divider */}
            <hr className="border-none h-px bg-border mb-5" />

            {/* Description */}
            <p className="font-sans text-[14px] text-foreground leading-[1.8] mb-6">
              {book.description}
            </p>

            {/* Author */}
            <div className="mb-6">
              <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-1">
                Author
              </p>
              <p className="font-serif text-[16px] text-navy">{author.fullName}</p>
            </div>

            {/* Availability note for COMING_SOON */}
            {(book.status === "COMING_SOON" || book.status === "PUBLISHED") && (
              <p className="font-sans text-[12px] text-muted-foreground leading-relaxed mb-6">
                This title is currently being prepared for publication. Publication and
                purchasing details will be announced when available.
              </p>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <BookCTA book={book} />
              <button
                onClick={() => {
                  triggerClose()
                  setTimeout(() => navigate(`/books/${book.slug}`), 120)
                }}
                className="font-sans text-[13px] text-navy underline underline-offset-4 hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 min-h-[44px] flex items-center"
              >
                View Full Details →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
