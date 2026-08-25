import { useEffect } from "react"
import { Link } from "react-router-dom"
import Container from "../components/layout/Container"
import SectionHeading from "../components/ui/SectionHeading"

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Privacy Policy | Rev. Fr. Dr. Joseph Raj"
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
              <h2 className="font-serif text-2xl text-navy">2. Information We Collect</h2>
              <p>
                We only collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Submit a general or academic inquiry through the contact page.</li>
                <li>Register your email address to receive publication updates for forthcoming books.</li>
                <li>Communicate directly with the author or editorial administration via email.</li>
              </ul>
              <p>
                Such information may include your name, email address, message subject, and the contents of your inquiry. We do not collect sensitive payment data or financial details on this platform.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-navy">3. Use of Information</h2>
              <p>
                Any personal information provided to us is used solely for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responding directly to your pastoral, academic, or general inquiries.</li>
                <li>Transmitting announcements regarding the release of new theological publications.</li>
                <li>Maintaining the security and technical functionality of the website.</li>
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
