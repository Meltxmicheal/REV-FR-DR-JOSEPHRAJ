import { useState } from "react"
import { Link } from "react-router-dom"
import Container from "../components/layout/Container"
import Divider from "../components/ui/Divider"
import { author } from "../data/author"

/* ── Shared layout primitives ──────────────────────────────────────────── */

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-8">
      <span className="font-sans text-[11px] text-gold tracking-widest shrink-0">{number}</span>
      <h2 className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
        {title}
      </h2>
    </div>
  )
}

function TwoCol({
  label,
  number,
  children,
}: {
  label: string
  number: string
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-16">
      <div className="md:sticky md:top-24 self-start">
        <SectionLabel number={number} title={label} />
      </div>
      <div>{children}</div>
    </div>
  )
}

/* ── Author portrait ───────────────────────────────────────────────────── */
function AuthorPortrait() {
  const [imgError, setImgError] = useState(false)
  const [loaded, setLoaded] = useState(false)

  if (!imgError) {
    return (
      <div className="group relative w-full aspect-[3/4] cursor-zoom-in overflow-hidden rounded-[28px] border border-border bg-secondary shadow-[0_18px_40px_rgba(20,26,43,0.08)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(20,26,43,0.12)] hover:[box-shadow:0_0_0_1px_rgba(212,175,55,0.35),0_24px_55px_rgba(20,26,43,0.12)]">
        {!loaded && <div className="absolute inset-0 bg-secondary" aria-hidden="true" />}
        <div className="absolute inset-0 rounded-[28px] opacity-0 transition-all duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-[28px] border border-gold/40 shadow-[0_0_24px_rgba(212,175,55,0.35)]" />
        </div>
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.02] group-hover:rotate-[1.5deg]">
          <img
            src={author.imageUrl}
            alt={`Portrait of ${author.fullName}`}
            className={`h-full w-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-[1.04] ${loaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setLoaded(true)}
            onError={() => setImgError(true)}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-end justify-start bg-gradient-to-t from-[#0f172a]/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="mb-4 ml-4 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-white backdrop-blur-sm">
            View portrait
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full aspect-[3/4] rounded-[28px] border border-border bg-secondary flex flex-col items-center justify-center gap-2 shadow-[0_18px_40px_rgba(20,26,43,0.08)]">
      <p className="font-sans text-[12px] text-muted-foreground text-center">Author Portrait</p>
      <p className="font-sans text-[11px] text-muted-foreground opacity-50 text-center px-4">
        Place author.jpg in public/images/author/
      </p>
    </div>
  )
}

/* ── Page ──────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  const fluent = author.languages.filter((l) => l.level === "fluent")
  const working = author.languages.filter((l) => l.level === "working")

  return (
    <main id="root">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section aria-labelledby="about-heading" className="border-b border-border py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
            {/* Portrait */}
            <div className="w-44 md:w-52 shrink-0">
              <AuthorPortrait />
            </div>

            {/* Identity */}
            <div className="flex flex-col justify-center">
              <p className="font-sans text-[11px] font-medium tracking-[0.22em] uppercase text-gold mb-5">
                About the Author
              </p>
              <h1
                id="about-heading"
                className="font-serif text-4xl md:text-5xl font-normal text-navy leading-tight mb-4"
              >
                {author.fullName}
              </h1>
              <p className="font-sans text-[11px] tracking-[0.16em] uppercase text-muted-foreground mb-8">
                Priest · Theologian · Canonist · Preacher · Author
              </p>
              <p className="font-sans text-[15px] text-muted-foreground leading-[1.85] max-w-xl">
                {author.shortBio}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 01 Early Life & Formation ────────────────────────────── */}
      <section aria-labelledby="formation-heading" className="py-14 md:py-20">
        <Container>
          <TwoCol number="01" label="Early Life & Formation">
            <div id="formation-heading" className="space-y-5">
              {author.earlyLifeAndFormation.map((para, i) => (
                <p key={i} className="font-sans text-[15px] text-foreground leading-[1.85]">
                  {para}
                </p>
              ))}

              {/* Credential card */}
              <div className="mt-8 border border-border pl-5 py-4 pr-6 flex items-start gap-4">
                <div className="w-1 h-full bg-gold shrink-0 self-stretch" aria-hidden="true" />
                <div>
                  <p className="font-serif text-[15px] text-navy font-medium">Bachelor of Arts</p>
                  <p className="font-sans text-[13px] text-muted-foreground mt-0.5">
                    University of Nagpur
                  </p>
                  <p className="font-sans text-[12px] text-gold mt-1.5 tracking-wide">
                    University Gold Medal — First in Philosophy
                  </p>
                </div>
              </div>
            </div>
          </TwoCol>
        </Container>
      </section>

      <Divider />

      {/* ── 02 Priesthood & Higher Studies ───────────────────────── */}
      <section aria-labelledby="priesthood-heading" className="py-14 md:py-20 bg-secondary">
        <Container>
          <TwoCol number="02" label="Priesthood & Higher Studies">
            <div id="priesthood-heading" className="space-y-6">
              {author.priesthoodAndHigherStudies.map((para, i) => (
                <p key={i} className="font-sans text-[15px] text-foreground leading-[1.85]">
                  {para}
                </p>
              ))}

              {/* Timeline of ecclesiastical degrees */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    year: "1997",
                    title: "Ordained to the Priesthood",
                    place: "Archdiocese of Castries, Saint Lucia",
                  },
                  {
                    year: "2013–2018",
                    title: "Licentiate & Doctorate in Moral Theology",
                    place: "Accademia Alfonsiana, Rome",
                  },
                  {
                    year: "2013–2018",
                    title: "Licentiate in Canon Law",
                    place: "Angelicum, Rome",
                  },
                ].map((item) => (
                  <div key={item.title} className="border border-border bg-background px-5 py-5">
                    <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-gold mb-2">
                      {item.year}
                    </p>
                    <p className="font-serif text-[15px] text-navy font-medium leading-snug mb-1">
                      {item.title}
                    </p>
                    <p className="font-sans text-[12px] text-muted-foreground leading-snug">
                      {item.place}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TwoCol>
        </Container>
      </section>

      <Divider />

      {/* ── 03 Languages ─────────────────────────────────────────── */}
      <section aria-labelledby="languages-heading" className="py-14 md:py-20">
        <Container>
          <TwoCol number="03" label="Languages">
            <div id="languages-heading">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Fluent */}
                <div>
                  <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">
                    Fluent
                  </p>
                  <ul className="space-y-3" aria-label="Languages spoken fluently">
                    {fluent.map((lang) => (
                      <li key={lang.name} className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-gold shrink-0" aria-hidden="true" />
                        <span className="font-serif text-[17px] text-foreground">{lang.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Working knowledge */}
                <div>
                  <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">
                    Working Knowledge
                  </p>
                  <ul className="space-y-3" aria-label="Languages with working knowledge">
                    {working.map((lang) => (
                      <li key={lang.name} className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-border shrink-0" aria-hidden="true" />
                        <span className="font-serif text-[17px] text-muted-foreground">
                          {lang.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TwoCol>
        </Container>
      </section>

      <Divider />

      {/* ── 04 Pastoral & Ecclesiastical Ministry ────────────────── */}
      <section aria-labelledby="ministry-heading" className="py-14 md:py-20 bg-secondary">
        <Container>
          <TwoCol number="04" label="Pastoral & Ecclesiastical Ministry">
            <div id="ministry-heading" className="space-y-6">
              <p className="font-sans text-[15px] text-foreground leading-[1.85]">
                {author.ministry.intro}
              </p>

              {/* Ministry roles */}
              <div className="border-t border-border pt-6">
                <ul className="space-y-0" aria-label="Ministry roles and positions">
                  {author.ministry.roles.map((role, i) => (
                    <li
                      key={role.title}
                      className={`flex items-baseline gap-4 py-4 ${
                        i < author.ministry.roles.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <span className="font-sans text-[10px] text-gold tracking-widest w-6 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <span className="font-serif text-[17px] text-navy">{role.title}</span>
                        {role.note && (
                          <span className="font-sans text-[13px] text-muted-foreground ml-2">
                            — {role.note}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Wedding note */}
              <div className="border-l-2 border-gold pl-5 py-1">
                <p className="font-sans text-[14px] text-foreground leading-[1.8]">
                  {author.ministry.weddingNote}
                </p>
              </div>
            </div>
          </TwoCol>
        </Container>
      </section>

      <Divider />

      {/* ── 05 Areas of Writing ──────────────────────────────────── */}
      <section aria-labelledby="writing-areas-heading" className="py-14 md:py-20">
        <Container>
          <TwoCol number="05" label="Areas of Writing">
            <div id="writing-areas-heading">
              <p className="font-sans text-[15px] text-foreground leading-[1.85] mb-8">
                A respected theologian, canonist, preacher, and author, Fr. Joseph Raj has written
                extensively on marriage, family life, moral theology, canon law, and spirituality.
              </p>
              <div className="flex flex-wrap gap-3">
                {author.areasOfWriting.map((area, i) => (
                  <div key={area} className="flex items-center gap-3 border border-border px-5 py-2.5">
                    <span className="font-sans text-[10px] text-gold tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-[13px] text-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </TwoCol>
        </Container>
      </section>

      <Divider />

      {/* ── 06 Published Works ───────────────────────────────────── */}
      <section aria-labelledby="published-works-heading" className="py-14 md:py-20 bg-secondary">
        <Container>
          <TwoCol number="06" label="Published Works">
            <div id="published-works-heading">
              <p className="font-sans text-[13px] text-muted-foreground mb-6 italic">
                Works mentioned in the author's biography. The website book catalogue is maintained
                separately.
              </p>
              <ol className="space-y-0" aria-label="Published works listed in biography">
                {author.publishedWorks.map((work, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-5 py-5 ${
                      i < author.publishedWorks.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span className="font-sans text-[11px] text-gold tracking-widest pt-0.5 shrink-0 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-serif text-[16px] text-navy leading-snug font-normal italic">
                      {work.title}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </TwoCol>
        </Container>
      </section>

      <Divider />

      {/* ── 07 Homiletic Collection ──────────────────────────────── */}
      <section aria-labelledby="homiletics-heading" className="py-14 md:py-20">
        <Container>
          <TwoCol number="07" label="Homiletic Collection">
            <div id="homiletics-heading">
              <div className="border border-border bg-background px-7 py-7">
                <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  {author.homileticsCollection.note}
                </p>
                <p className="font-serif text-xl md:text-2xl text-navy font-normal leading-snug italic">
                  {author.homileticsCollection.title}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="font-sans text-[11px] text-gold tracking-widest">A</span>
                  <span className="w-px h-3 bg-border" />
                  <span className="font-sans text-[11px] text-gold tracking-widest">B</span>
                  <span className="w-px h-3 bg-border" />
                  <span className="font-sans text-[11px] text-gold tracking-widest">C</span>
                  <span className="font-sans text-[11px] text-muted-foreground ml-1">
                    Liturgical Cycles
                  </span>
                </div>
              </div>
            </div>
          </TwoCol>
        </Container>
      </section>

      <Divider />

      {/* ── 08 Recent Ministry ───────────────────────────────────── */}
      <section aria-labelledby="recent-ministry-heading" className="py-14 md:py-20 bg-secondary">
        <Container>
          <TwoCol number="08" label="Recent Ministry">
            <div id="recent-ministry-heading">
              <p className="font-sans text-[15px] text-foreground leading-[1.85]">
                {author.recentMinistry}
              </p>
            </div>
          </TwoCol>
        </Container>
      </section>

      <Divider />

      {/* ── 09 Closing Statement ─────────────────────────────────── */}
      <section aria-labelledby="closing-heading" className="py-14 md:py-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <span className="font-sans text-[11px] text-gold tracking-widest">09</span>
            <div className="w-px h-8 bg-border mx-auto my-4" aria-hidden="true" />
            <p
              id="closing-heading"
              className="font-serif text-xl md:text-2xl text-navy font-normal leading-relaxed italic"
            >
              "{author.closingStatement}"
            </p>
          </div>
        </Container>
      </section>

      <Divider />

      {/* ── Explore Books CTA ────────────────────────────────────── */}
      <section aria-label="Explore books" className="py-14 bg-secondary">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-2">
                Works
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-normal text-navy">
                Explore the Book Catalogue
              </h2>
            </div>
            <Link
              to="/books"
              className="shrink-0 inline-flex items-center font-sans text-[13px] font-medium tracking-wide bg-navy text-ivory border border-navy hover:bg-navy-deep transition-colors px-7 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 min-h-[48px]"
            >
              View all 15 Books
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}
