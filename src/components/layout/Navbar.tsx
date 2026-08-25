import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Container from "./Container"
import { useScrolled } from "../../hooks/useScrolled"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Books", href: "/books" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const scrolled = useScrolled(24)

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href)

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background border-b border-border shadow-[0_1px_0_0_var(--color-border)]"
          : "bg-background border-b border-border/60"
      }`}
    >
      <Container>
        <nav aria-label="Main navigation" className="flex items-center justify-between h-[60px]">
          {/* Brand */}
          <Link
            to="/"
            className="flex flex-col leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
            aria-label="Rev. Fr. Dr. Joseph Raj — Home"
          >
            <span className="font-sans text-[10px] font-medium tracking-[0.18em] uppercase text-gold mb-0.5">
              Rev. Fr. Dr.
            </span>
            <span className="font-serif text-[17px] font-normal text-navy tracking-wide">
              Joseph Raj
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-9" role="list">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`relative font-sans text-[13px] tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 ${
                      active ? "text-navy font-medium" : "text-warm-gray hover:text-foreground"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    {active && (
                      <span
                        className="absolute -bottom-[22px] left-0 right-0 h-px bg-navy"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-[5px] text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
          >
            <span
              className={`block h-px w-5 bg-current transition-transform duration-200 origin-center ${mobileOpen ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-current transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-current transition-transform duration-200 origin-center ${mobileOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-nav"
          aria-hidden={!mobileOpen}
          className={`md:hidden overflow-hidden transition-all duration-200 ${
            mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav aria-label="Mobile navigation" className="border-t border-border py-4">
            <ul className="flex flex-col" role="list">
              {navLinks.map((link) => {
                const active = isActive(link.href)
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center h-12 font-sans text-[15px] tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1 ${
                        active
                          ? "text-navy font-medium"
                          : "text-warm-gray hover:text-foreground"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {active && (
                        <span className="w-1 h-4 bg-gold mr-3 shrink-0" aria-hidden="true" />
                      )}
                      {!active && <span className="w-1 h-4 mr-3 shrink-0" aria-hidden="true" />}
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}
