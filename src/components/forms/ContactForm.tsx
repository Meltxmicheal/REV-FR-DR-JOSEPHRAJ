import { useState, type FormEvent, type ChangeEvent } from "react"
import Input from "../ui/Input"
import Textarea from "../ui/Textarea"

type FormState = "idle" | "submitting" | "success" | "error"

type Fields = {
  name: string
  email: string
  subject: string
  message: string
}

type Errors = Partial<Record<keyof Fields, string>>

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
    setTimeout(() => setFormState("success"), 1000)
  }

  if (formState === "success") {
    return (
      <div
        className="border border-success px-8 py-10 text-center"
        role="status"
        aria-live="polite"
      >
        <p className="font-serif text-2xl text-navy mb-3">Message Sent</p>
        <p className="font-sans text-[14px] text-muted-foreground leading-relaxed">
          Thank you for writing. A response will be sent to your email address in due course.
        </p>
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
        placeholder="How can we help?"
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
      <div>
        <button
          type="submit"
          disabled={disabled}
          className="inline-flex items-center font-sans text-sm font-medium tracking-wide bg-navy text-ivory border border-navy hover:bg-navy-deep transition-colors px-8 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {disabled ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  )
}
