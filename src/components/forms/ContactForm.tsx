import { useState, type FormEvent, type ChangeEvent } from "react"
import Input from "../ui/Input"
import Textarea from "../ui/Textarea"

type FormState = "idle" | "submitting" | "sent" | "error"

type Fields = {
  name: string
  email: string
  subject: string
  message: string
}

type Errors = Partial<Record<keyof Fields, string>>

const AUTHOR_EMAIL = "josephraj167@gmail.com"

function validate(fields: Fields): Errors {
  const errors: Errors = {}
  if (!fields.name.trim()) errors.name = "Your name is required."
  if (!fields.email.trim()) {
    errors.email = "Your email address is required."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address."
  }
  if (!fields.subject.trim()) errors.subject = "A subject is required."
  if (!fields.message.trim()) errors.message = "Please include a message."
  return errors
}

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>({ name: "", email: "", subject: "", message: "" })
  const [errors, setErrors] = useState<Errors>({})
  const [formState, setFormState] = useState<FormState>("idle")
  const [copied, setCopied] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFields((f) => ({ ...f, [name]: value }))
    if (errors[name as keyof Fields]) {
      setErrors((err) => ({ ...err, [name]: undefined }))
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const newErrors = validate(fields)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setFormState("submitting")

    // Construct mailto link with encoded parameters
    const subjectEncoded = encodeURIComponent(`[Website Inquiry] ${fields.subject}`)
    const bodyContent = `From: ${fields.name}\nEmail: ${fields.email}\nSubject: ${fields.subject}\n\nMessage:\n${fields.message}`
    const bodyEncoded = encodeURIComponent(bodyContent)
    const mailtoUrl = `mailto:${AUTHOR_EMAIL}?subject=${subjectEncoded}&body=${bodyEncoded}`

    // Trigger email client directly
    window.location.href = mailtoUrl
    setFormState("sent")
  }

  function handleCopy() {
    const bodyContent = `From: ${fields.name}\nEmail: ${fields.email}\nSubject: ${fields.subject}\n\nMessage:\n${fields.message}`
    navigator.clipboard.writeText(bodyContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  if (formState === "sent") {
    return (
      <div
        className="border border-gold/40 bg-secondary/40 p-8 sm:p-10 text-left space-y-5"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-gold inline-block" />
          <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-gold">
            Email Client Opened
          </p>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-navy">
          Your Message Has Been Prepared
        </h3>
        <p className="font-sans text-[14px] sm:text-[15px] text-foreground/90 leading-relaxed">
          Your email application has been launched with your message addressed to{" "}
          <strong className="text-navy">{AUTHOR_EMAIL}</strong>. Please press <em>Send</em> in your email client to transmit your inquiry.
        </p>
        <div className="bg-background border border-border p-4 text-[13px] font-sans text-muted-foreground">
          <p className="mb-2 font-medium text-foreground">If your email client did not open automatically:</p>
          <p>
            You can write directly to{" "}
            <a href={`mailto:${AUTHOR_EMAIL}`} className="text-navy font-semibold underline underline-offset-2 hover:text-gold">
              {AUTHOR_EMAIL}
            </a>{" "}
            or copy your prepared message below:
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            type="button"
            onClick={handleCopy}
            className="font-sans text-[13px] font-medium bg-navy text-ivory px-5 py-2.5 hover:bg-navy-deep transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
          >
            {copied ? "✓ Copied to Clipboard" : "Copy Message Text"}
          </button>
          <button
            type="button"
            onClick={() => {
              setFields({ name: "", email: "", subject: "", message: "" })
              setFormState("idle")
            }}
            className="font-sans text-[13px] text-muted-foreground hover:text-navy underline underline-offset-4"
          >
            Compose another message
          </button>
        </div>
      </div>
    )
  }

  const disabled = formState === "submitting"

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="name"
          name="name"
          label="Full Name"
          type="text"
          autoComplete="name"
          value={fields.name}
          onChange={handleChange}
          error={errors.name}
          disabled={disabled}
          placeholder="Your full name"
        />
        <Input
          id="email"
          name="email"
          label="Email Address"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={handleChange}
          error={errors.email}
          disabled={disabled}
          placeholder="your@email.com"
        />
      </div>
      <Input
        id="subject"
        name="subject"
        label="Subject"
        type="text"
        value={fields.subject}
        onChange={handleChange}
        error={errors.subject}
        disabled={disabled}
        placeholder="Pastoral, academic, or publishing inquiry"
      />
      <Textarea
        id="message"
        name="message"
        label="Message"
        value={fields.message}
        onChange={handleChange}
        error={errors.message}
        disabled={disabled}
        placeholder="Please write your message here."
        rows={7}
      />
      {formState === "error" && (
        <p className="font-sans text-[13px] text-error" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={disabled}
          className="inline-flex items-center justify-center font-sans text-sm font-medium tracking-wide bg-navy text-ivory border border-navy hover:bg-navy-deep transition-colors px-8 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 disabled:opacity-40 disabled:cursor-not-allowed min-h-[48px]"
        >
          {disabled ? "Preparing…" : "Send Message"}
        </button>
        <p className="font-sans text-[12px] text-muted-foreground">
          Direct email: <a href={`mailto:${AUTHOR_EMAIL}`} className="text-navy underline hover:text-gold">{AUTHOR_EMAIL}</a>
        </p>
      </div>
    </form>
  )
}
