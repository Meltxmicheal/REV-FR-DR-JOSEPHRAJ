import { useEffect } from "react"
import { Link } from "react-router-dom"
import Container from "../components/layout/Container"
import SectionHeading from "../components/ui/SectionHeading"

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Terms of Use | Rev. Fr. Dr. Joseph Raj"
  }, [])

  return (
    <main id="root" className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl">
          <SectionHeading
            label="Legal & Editorial Terms"
            title="Terms of Use"
            subtitle="Terms governing the use of this website, copyright, intellectual property, and theological materials."
          />

          <div className="mt-12 space-y-10 font-sans text-[15px] sm:text-[16px] text-foreground/90 leading-[1.85]">
            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-navy">1. Intellectual Property & Copyright</h2>
              <p>
                All content, text, book introductions, theological overviews, outlines, images, and biographical material presented on this website are the intellectual property of Rev. Fr. Dr. Joseph Raj and are protected under international copyright law. All rights are reserved.
              </p>
              <p>
                No portion of these written works or theological texts may be reproduced, distributed, republished, or transmitted in any form without prior written authorization from the author, except for brief citations for academic review or non-commercial study with proper attribution.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-navy">2. Purpose of the Website</h2>
              <p>
                This website is established for academic, educational, pastoral, and informational purposes to introduce the published and forthcoming theological and canonical works of Rev. Fr. Dr. Joseph Raj.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-navy">3. Publication Status and Availability</h2>
              <p>
                Titles marked as “Coming Soon” are in the process of editorial preparation and publication. Purchasing channels and release dates will be announced officially as each volume becomes available. Registering for publication notifications does not constitute a binding financial transaction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-navy">4. Contact & Permission Requests</h2>
              <p>
                For academic citations, translation inquiries, or permission to reprint excerpts, please submit an inquiry via the <Link to="/contact" className="text-navy underline underline-offset-4 hover:text-gold">Contact Page</Link> or write directly to:
              </p>
              <p className="font-serif text-navy italic">
                Office of Rev. Fr. Dr. Joseph Raj<br />
                Archdiocese of Castries, Saint Lucia<br />
                Email: <a href="mailto:josephraj167@gmail.com" className="text-gold underline underline-offset-4">josephraj167@gmail.com</a>
              </p>
            </section>

            <div className="pt-8 border-t border-border">
              <Link
                to="/"
                className="font-sans text-[13px] text-navy underline underline-offset-4 hover:text-gold transition-colors"
              >
                ← Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

