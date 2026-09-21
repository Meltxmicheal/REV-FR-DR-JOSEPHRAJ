import { Link } from "react-router-dom"
import Container from "./Container"
import PublicationForm from "../forms/PublicationForm"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary mt-24">
      <Container>
        <div className="pt-14 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Identity */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3 mb-4 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
              aria-label="Rev. Fr. Dr. Joseph Raj — Home"
            >
              <img
                src="/logo.png"
                alt="Rev. Dr. Fr. Joseph Raj official logo"
                className="h-11 w-auto object-contain shrink-0 transition-transform duration-200 group-hover:scale-[1.03]"
              />
              <div className="flex flex-col leading-none">
                <span className="font-sans text-[10px] font-medium tracking-[0.18em] uppercase text-gold mb-0.5">
                  Rev. Fr. Dr.
                </span>
                <span className="font-serif text-lg text-navy font-normal leading-snug">
                  Joseph Raj
                </span>
              </div>
            </Link>
            <p className="font-sans text-[13px] text-muted-foreground leading-relaxed">
              Priest, theologian, canonist, preacher, scholar, and author of theological, canonical, and spiritual writings across fifteen published volumes.
            </p>
            <p className="font-sans text-[12px] text-gold/90 italic mt-3 leading-relaxed">
              "Journeying in the Word, Guided by the Spirit, Encountering Christ in Faith and Hope."
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Books", href: "/books" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-sans text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Publication updates */}
          <div>
            <h3 className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">
              Publication Updates
            </h3>
            <p className="font-sans text-[13px] text-muted-foreground mb-4 leading-relaxed">
              Receive updates when new books become available.
            </p>
            <PublicationForm compact />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-[12px] text-muted-foreground">
            &copy; {year} Rev. Fr. Dr. Joseph Raj. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="font-sans text-[12px] text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="font-sans text-[12px] text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
