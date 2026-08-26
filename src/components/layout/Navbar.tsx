import { useState, useEffect } from "react"
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
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()
  const scrolled = useScrolled(20)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href)

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-[0_2px_12px_rgba(23,36,58,0.04)]"
          : "bg-background border-b border-border/60"
      }`}
    >
      {/* Scroll Reading Progress Bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-transparent overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gold transition-[width] duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Container>
        <nav
          aria-label="Main navigation"
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-[54px]" : "h-[62px]"
          }`}
        >
          {/* Brand */}
          <Link
            to="/"
            className="flex flex-col leading-none group focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
            aria-label="Rev. Fr. Dr. Joseph Raj — Home"
          >
            <span className="font-sans text-[10px] font-medium tracking-[0.18em] uppercase text-gold mb-0.5 group-hover:text-gold/80 transition-colors">
              Rev. Fr. Dr.
            </span>
            <span className="font-serif text-[17px] font-normal text-navy tracking-wide group-hover:text-navy-deep transition-colors">
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
                    className={`relative py-1 font-sans text-[13px] tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-gold after:transition-all after:duration-250 ${
                      active
                        ? "text-navy font-medium after:w-full"
                        : "text-warm-gray hover:text-foreground after:w-0 hover:after:w-full"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
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
