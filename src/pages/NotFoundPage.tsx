import { Link } from "react-router-dom"
import Container from "../components/layout/Container"
import { usePageMeta } from "../hooks/usePageMeta"

export default function NotFoundPage() {
  usePageMeta(
    "Page Not Found — Rev. Fr. Dr. Joseph Raj",
    "The requested page could not be found. Return to the catalogue or home page."
  )

  return (
    <main id="root" className="py-28 md:py-36 bg-parchment min-h-[60vh] flex items-center">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-[11px] font-medium tracking-[0.22em] uppercase text-gold mb-4">
            Error 404
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-navy mb-5">
            Page Not Found
          </h1>
          <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
            The page you are looking for does not exist or has been moved. You can return to the
            home page or browse the complete 13-volume collection in the catalogue.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/"
              className="inline-flex items-center font-sans text-[13px] font-medium tracking-wide bg-navy text-ivory border border-navy hover:bg-navy-deep hover:scale-[1.015] active:scale-[0.99] transition-all px-7 py-3 min-h-[46px]"
            >
              Return Home
            </Link>
            <Link
              to="/books"
              className="font-sans text-[13px] text-navy underline underline-offset-4 hover:text-gold transition-colors"
            >
              Browse Books Catalogue →
            </Link>
          </div>
        </div>
      </Container>
    </main>
  )
}
