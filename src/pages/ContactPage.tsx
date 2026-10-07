import Container from "../components/layout/Container"
import ContactForm from "../components/forms/ContactForm"
import Divider from "../components/ui/Divider"
import { usePageMeta } from "../hooks/usePageMeta"

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.revfrdrjosephraj.org/contact#contactpage",
        "url": "https://www.revfrdrjosephraj.org/contact",
        "name": "Contact Rev. Fr. Dr. Joseph Raj",
        "description": "Get in touch with Rev. Fr. Dr. Joseph Raj for pastoral inquiries, publication updates, and correspondence.",
        "mainEntity": {
          "@type": "Person",
          "@id": "https://www.revfrdrjosephraj.org/#author",
          "name": "Rev. Fr. Dr. Joseph Raj",
          "email": "mailto:josephraj13@hotmail.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.revfrdrjosephraj.org/contact#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.revfrdrjosephraj.org/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact",
            "item": "https://www.revfrdrjosephraj.org/contact"
          }
        ]
      }
    ]
  }

  usePageMeta(
    "Contact Rev. Fr. Dr. Joseph Raj",
    "Get in touch with Rev. Fr. Dr. Joseph Raj for pastoral enquiries, theological research discussions, publication updates, and correspondence.",
    {
      canonical: "https://www.revfrdrjosephraj.org/contact",
      ogUrl: "https://www.revfrdrjosephraj.org/contact",
      ogImage: "https://www.revfrdrjosephraj.org/images/author/author.jpg",
      twitterImage: "https://www.revfrdrjosephraj.org/images/author/author.jpg",
      schema: contactSchema,
    }
  )
  return (
    <main id="root" className="bg-parchment min-h-screen">
      {/* ── Page header ──────────────────────────────────────────── */}
      <section aria-labelledby="contact-heading" className="border-b border-border py-16 md:py-20">
        <Container>
          <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-5">
            Get in Touch
          </p>
          <h1
            id="contact-heading"
            className="font-serif text-4xl md:text-5xl font-normal text-navy leading-tight mb-6"
          >
            Contact
          </h1>
          <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-xl">
            For enquiries about the author's books, lectures, retreats, or other matters, please
            use the form below. All messages are received and responded to personally.
          </p>
        </Container>
      </section>

      {/* ── Form ─────────────────────────────────────────────────── */}
      <section aria-label="Contact form" className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-16 md:gap-20">
            {/* Left: context */}
            <div className="space-y-8">
              <div>
                <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  Book Enquiries
                </p>
                <p className="font-sans text-[13px] text-muted-foreground leading-relaxed">
                  For enquiries about forthcoming titles, publication dates, or ordering, please
                  include the book title in your message.
                </p>
              </div>
              <Divider />
              <div>
                <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  Lectures &amp; Retreats
                </p>
                <p className="font-sans text-[13px] text-muted-foreground leading-relaxed">
                  Fr. Joseph Raj is available for academic lectures, parish retreats, and
                  theological formation days. Please describe your event and audience.
                </p>
              </div>
              <Divider />
              <div>
                <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  Response Time
                </p>
                <p className="font-sans text-[13px] text-muted-foreground leading-relaxed">
                  Messages are read and responded to personally. Please allow a reasonable period
                  for a reply.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
