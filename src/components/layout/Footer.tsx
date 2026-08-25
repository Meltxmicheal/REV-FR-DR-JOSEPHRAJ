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
            <p className="font-sans text-[10px] font-medium tracking-[0.18em] uppercase text-gold mb-1">
              Rev. Fr. Dr.
            </p>
            <p className="font-serif text-lg text-navy font-normal leading-snug mb-4">
              Joseph Raj
            </p>
            <p className="font-sans text-[13px] text-muted-foreground leading-relaxed">
              Priest, theologian, canonist, preacher, scholar, and author of fifteen works in
              moral theology and canon law.
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
