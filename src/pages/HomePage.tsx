import React from "react"
import { Link } from "react-router-dom"
import Container from "../components/layout/Container"
import BookGrid from "../components/books/BookGrid"
import SectionHeading from "../components/ui/SectionHeading"
import Divider from "../components/ui/Divider"
import PublicationForm from "../components/forms/PublicationForm"
import AuthorPortrait from "../components/ui/AuthorPortrait"
import { books } from "../data/books"
import { author } from "../data/author"
import { useInView } from "../hooks/useInView"
import { useReducedMotion } from "../hooks/useReducedMotion"
import { usePageMeta } from "../hooks/usePageMeta"
import { useParallax } from "../hooks/useParallax"

function RevealSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const reduced = useReducedMotion()
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={
        reduced
          ? undefined
          : {
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(14px)",
              transition: `opacity 450ms ease-out ${delay}ms, transform 450ms ease-out ${delay}ms`,
            }
      }
    >
      {children}
    </div>
  )
}

export default function HomePage() {
  usePageMeta(
    "Rev. Fr. Dr. Joseph Raj — Theologian, Canonist & Author",
    "The official website of Rev. Fr. Dr. Joseph Raj — priest, theologian, canonist, and author of works on marriage, moral theology, canon law, and spirituality."
  )
  const reduced = useReducedMotion()
  const parallaxOffset = useParallax(0.04)
  const featuredBooks = books.slice(0, 3)

  return (
    <main id="root" className="bg-parchment min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="border-b border-border relative overflow-hidden"
      >
        {/* Soft, calm ambient light layers */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none ambient-glow"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-navy/5 blur-3xl pointer-events-none ambient-glow"
          style={{ animationDelay: "-9s" }}
          aria-hidden="true"
        />

        <Container>
          <div className="py-20 md:py-28 lg:py-32 grid grid-cols-1 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_340px] gap-12 md:gap-16 lg:gap-24 items-start relative z-10">
            {/* Text — staggered entrance */}
            <div className={reduced ? undefined : "hero-stagger"}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/80 border border-border text-[11px] font-sans text-navy mb-5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="font-medium tracking-wide">
                  Complete 13-Volume Scholarly &amp; Pastoral Collection
                </span>
              </div>

              <p className="font-sans text-[11px] font-medium tracking-[0.22em] uppercase text-gold">
                {author.eyebrow}
              </p>
              <h1
                id="hero-heading"
                className="font-serif text-5xl md:text-6xl lg:text-[68px] font-normal text-navy leading-[1.05] mt-5"
              >
                {author.fullName}
              </h1>
              <p className="font-sans text-base md:text-[17px] text-muted-foreground leading-[1.8] mt-7 max-w-lg">
                {author.shortBio}
              </p>
              <div className="flex flex-wrap items-center gap-5 mt-9">
                <Link
                  to="/books"
                  className="inline-flex items-center font-sans text-[13px] font-medium tracking-wide bg-navy text-ivory border border-navy hover:bg-navy-deep hover:scale-[1.015] active:scale-[0.99] transition-all duration-200 ease-out px-7 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 min-h-[48px] shadow-xs"
                >
                  Explore Books
                </Link>
                <Link
                  to="/about"
                  className="font-sans text-[13px] text-navy underline underline-offset-4 hover:text-gold transition-colors"
                >
                  About the Author →
                </Link>
              </div>
            </div>

            {/* Portrait with gentle parallax */}
            <div
              className="w-full max-w-[260px] md:max-w-none"
              style={
                reduced
                  ? undefined
                  : { transform: `translateY(${parallaxOffset}px)` }
              }
            >
              <AuthorPortrait priority />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Credentials strip ────────────────────────────────────── */}
      <section
        aria-label="Academic credentials"
        className="border-b border-border bg-secondary/70 backdrop-blur-xs"
      >
        <Container>
          <div className="py-5 flex flex-wrap items-center gap-x-8 gap-y-2">
            {author.credentials.map((c, i) => (
              <span
                key={i}
                className="font-sans text-[13px] text-muted-foreground"
              >
                {c.degree}
                {c.note && (
                  <>
                    <span className="mx-1.5 text-border">·</span>
                    <span className="text-gold text-[12px]">{c.note}</span>
                  </>
                )}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Scholarly Areas ──────────────────────────────────────── */}
      <section aria-labelledby="areas-heading" className="py-20 md:py-28">
        <Container>
          <RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 md:gap-20 items-start">
              <div>
                <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-3">
                  Areas of Work
                </p>
                <h2
                  id="areas-heading"
                  className="font-serif text-3xl md:text-4xl font-normal text-navy leading-snug"
                >
                  Scholarship &amp; Ministry
                </h2>
              </div>
              <div>
                {author.areasOfExpertise.map((area, i) => (
                  <div key={area}>
                    <div className="flex items-baseline gap-6 py-5 group cursor-default">
                      <span className="font-sans text-[10px] text-gold tracking-widest w-8 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-xl md:text-2xl text-foreground font-normal group-hover:text-navy transition-colors">
                        {area}
                      </span>
                    </div>
                    {i < author.areasOfExpertise.length - 1 && <Divider />}
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </Container>
      </section>

      <Divider />

      {/* ── About strip ──────────────────────────────────────────── */}
      <section
        aria-labelledby="about-strip-heading"
        className="py-20 md:py-28 bg-secondary/50"
      >
        <Container>
          <RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
              <div>
                <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">
                  The Author
                </p>
                <h2
                  id="about-strip-heading"
                  className="font-serif text-3xl md:text-4xl font-normal text-navy leading-snug"
                >
                  A Life in Theology
                </h2>
              </div>
              <div>
                <p className="font-sans text-[15px] text-foreground leading-[1.85] mb-4">
                  {author.earlyLifeAndFormation[1]}
                </p>
                <p className="font-sans text-[15px] text-muted-foreground leading-[1.85] mb-7">
                  {author.priesthoodAndHigherStudies[0]}
                </p>
                <Link
                  to="/about"
                  className="font-sans text-[13px] text-navy underline underline-offset-4 hover:text-gold transition-colors"
                >
                  Read Full Biography →
                </Link>
              </div>
            </div>
          </RevealSection>
        </Container>
      </section>

      <Divider />

      {/* ── Featured Books ───────────────────────────────────────── */}
      <section aria-labelledby="featured-heading" className="py-20 md:py-28">
        <Container>
          <RevealSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <SectionHeading
              label="Selected Works"
              title="From the Catalogue"
              subtitle="Thirteen volumes spanning moral theology, canon law, scripture, and pastoral reflection — all forthcoming."
            />
            <Link
              to="/books"
              className="font-sans text-[13px] text-navy underline underline-offset-4 hover:text-gold transition-colors shrink-0 whitespace-nowrap"
            >
              View all {books.length} books →
            </Link>
          </RevealSection>
          <BookGrid books={featuredBooks} />
        </Container>
      </section>

      <Divider />

      {/* ── Publication updates ──────────────────────────────────── */}
      <section
        aria-labelledby="updates-heading"
        className="py-16 md:py-20 bg-secondary/50"
      >
        <Container>
          <RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div>
                <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">
                  Stay Informed
                </p>
                <h2
                  id="updates-heading"
                  className="font-serif text-3xl font-normal text-navy leading-snug mb-3"
                >
                  Publication Updates
                </h2>
                <p className="font-sans text-[15px] text-muted-foreground leading-relaxed">
                  Receive updates when new books become available.
                </p>
              </div>
              <div className="md:pt-12">
                <PublicationForm />
              </div>
            </div>
          </RevealSection>
        </Container>
      </section>
    </main>
  )
}
