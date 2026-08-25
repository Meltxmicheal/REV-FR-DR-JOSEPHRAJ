import { useState, type FormEvent } from "react"

type PublicationFormProps = {
  compact?: boolean
}

type FormState = "idle" | "submitting" | "success"

const NOTIFY_EMAIL = "josephraj167@gmail.com"

export default function PublicationForm({ compact = false }: PublicationFormProps) {
  const [email, setEmail] = useState("")
  const [formState, setFormState] = useState<FormState>("idle")
  const [emailError, setEmailError] = useState("")
  const [savedEmail, setSavedEmail] = useState("")

  function validateEmail(value: string): string {
    if (!value.trim()) return "Email address is required."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address."
    return ""
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const error = validateEmail(email)
    if (error) {
      setEmailError(error)
      return
    }
    setEmailError("")
    setFormState("submitting")

    try {
      // Save locally to maintain client state
      const existing = JSON.parse(localStorage.getItem("publication_notifications") || "[]")
      if (!existing.includes(email)) {
        existing.push(email)
        localStorage.setItem("publication_notifications", JSON.stringify(existing))
      }
    } catch {
      // Ignore localStorage errors
    }

    setSavedEmail(email)
    setFormState("success")
    setEmail("")
  }

  if (formState === "success") {
    return (
      <div className="bg-background border border-border p-4 space-y-2 text-left" role="status" aria-live="polite">
        <p className="font-sans text-[13px] text-navy font-medium">
          ✓ Notification Request Saved
        </p>
        <p className="font-sans text-[12px] text-muted-foreground leading-relaxed">
          Your email (<strong className="text-foreground">{savedEmail}</strong>) is registered. To ensure priority dispatch upon release, you can also{" "}
          <a
            href={`mailto:${NOTIFY_EMAIL}?subject=${encodeURIComponent("Book Publication Notification Request")}&body=${encodeURIComponent(`Please notify me (${savedEmail}) when new books by Rev. Fr. Dr. Joseph Raj are released.`)}`}
            className="text-navy underline hover:text-gold"
          >
            send a 1-click confirmation note
          </a>.
        </p>
      </div>
    )
  }

  const inputId = compact ? "notify-compact" : "notify-main"

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={`flex ${compact ? "flex-col gap-2" : "flex-col sm:flex-row gap-3"}`}>
        <div className="flex-1 flex flex-col gap-1">
          <label htmlFor={inputId} className="sr-only">
            Email address
          </label>
          <input
            id={inputId}
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (emailError) setEmailError("")
            }}
            placeholder="your@email.com"
            disabled={formState === "submitting"}
            aria-describedby={emailError ? `${inputId}-error` : undefined}
            className={`
              w-full px-4 py-3 font-sans text-[14px] bg-background text-foreground
              border transition-colors
              placeholder:text-muted-foreground/60
              focus:outline-none focus:ring-2
              disabled:opacity-40 disabled:cursor-not-allowed
              ${emailError ? "border-error focus:border-error focus:ring-error/10" : "border-border focus:border-navy focus:ring-navy/10"}
            `}
          />
          {emailError && (
            <p id={`${inputId}-error`} className="font-sans text-[12px] text-error" role="alert">
              {emailError}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={formState === "submitting"}
          className={`
            inline-flex items-center justify-center font-sans text-[13px] font-medium tracking-wide
            bg-navy text-ivory border border-navy hover:bg-navy-deep transition-colors
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2
            disabled:opacity-40 disabled:cursor-not-allowed
            px-7 py-3 min-h-[44px]
            ${compact ? "w-full" : "shrink-0"}
          `}
        >
          {formState === "submitting" ? "Registering…" : "Notify Me"}
        </button>
      </div>
    </form>
  )
}
