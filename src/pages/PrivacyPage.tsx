import { useEffect } from "react"
import { Link } from "react-router-dom"
import Container from "../components/layout/Container"
import SectionHeading from "../components/ui/SectionHeading"
import { usePageMeta } from "../hooks/usePageMeta"

export default function PrivacyPage() {
  usePageMeta(
    "Privacy Policy | Rev. Fr. Dr. Joseph Raj",
    "Privacy policy regarding pastoral communications, publication notification requests, and personal data handling for Rev. Fr. Dr. Joseph Raj Ministry & Publications.",
    {
      canonical: "https://www.revfrdrjosephraj.org/privacy",
      ogUrl: "https://www.revfrdrjosephraj.org/privacy",
      ogImage: "https://www.revfrdrjosephraj.org/images/author/author.jpg",
      twitterImage: "https://www.revfrdrjosephraj.org/images/author/author.jpg",
    }
  )
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main id="root" className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl">
          <SectionHeading
            label="Legal & Pastoral Privacy"
            title="Privacy Policy"
            subtitle="How we respect and protect your personal information on this official author and pastoral website."
          />

          <div className="mt-12 space-y-10 font-sans text-[15px] sm:text-[16px] text-foreground/90 leading-[1.85]">
            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-navy">1. Overview and Commitment</h2>
              <p>
                This official website of Rev. Fr. Dr. Joseph Raj is dedicated to the dissemination of theological, canonical, and pastoral writings. We are committed to maintaining the confidentiality, integrity, and security of any personal information shared with us through this platform.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-navy">2. Information We Handle</h2>
              <p>
                This website operates as a direct static showcase. We only process information that you voluntarily provide when you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prepare a general or academic inquiry through the contact form.</li>
                <li>Save a publication notification bookmark locally on your browser or launch a direct email confirmation.</li>
                <li>Communicate directly with the author or administration via email.</li>
              </ul>
              <p>
                Such information may include your name, email address, message subject, and the contents of your inquiry. No payment processing, account creation, or tracking databases exist on this platform.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-navy">3. Use of Information</h2>
              <p>
                Any information or preference recorded is used solely for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responding directly to your pastoral, academic, or general inquiries via email.</li>
                <li>Transmitting announcements regarding the release of new theological publications.</li>
                <li>Maintaining local browser preferences for publication notification reminders.</li>
              </ul>
              <p>
                We do not sell, rent, lease, or commercialize your personal information to third parties or marketing entities under any circumstances.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-navy">4. Data Security</h2>
              <p>
                We implement standard administrative and technical safeguards to protect any submitted information against unauthorized access, loss, or misuse. However, please note that no electronic transmission over the internet can be guaranteed as completely secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-navy">5. Contact and Inquiries</h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to have your email address removed from our publication notification list, please contact:
              </p>
              <p className="font-serif text-navy italic">
                Office of Rev. Fr. Dr. Joseph Raj<br />
                Archdiocese of Castries, Saint Lucia<br />
                Email: <a href="mailto:josephraj13@hotmail.com" className="text-gold underline underline-offset-4">josephraj13@hotmail.com</a>
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

