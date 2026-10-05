import { useState, type FormEvent } from "react"

type PublicationFormProps = {
  compact?: boolean
}

type FormState = "idle" | "submitting" | "success"

const NOTIFY_EMAIL = "josephraj13@hotmail.com"

export default function PublicationForm({ compact = false }: PublicationFormProps) {
  const [email, setEmail] = useState("")
  const [formState, setFormState] = useState<FormState>("idle")
  const [emailError, setEmailError] = useState("")
  const [savedEmail, setSavedEmail] = useState("")
  const [copied, setCopied] = useState(false)

  function validateEmail(value: string): string {
    const trimmed = value.trim()
    if (!trimmed) return "Email address is required."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return "Please enter a valid email address."
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

    const cleanEmail = email.trim().toLowerCase()

    try {
      const raw = localStorage.getItem("publication_notifications")
      let list: string[] = []
      if (raw) {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed)) {
          list = parsed.filter((item): item is string => typeof item === "string")
        }
      }
      if (!list.includes(cleanEmail)) {
        list.push(cleanEmail)
        localStorage.setItem("publication_notifications", JSON.stringify(list))
      }
    } catch {
      // Safe fallback if localStorage is disabled or unavailable
    }

    setSavedEmail(cleanEmail)
    setFormState("success")
    setEmail("")
  }

  const formatNotifyBody = () => [
    "New publication notification request received from the Rev. Fr. Dr. Joseph Raj website.",
    "",
    `Email:\n${savedEmail}`,
    "",
    "Source:\nPublication Updates Form (www.revfrdrjosephraj.org)",
    "",
    `Date:\n${new Date().toLocaleString()}`,
    "",
    "Request:\nPlease notify me when new books and publications by Rev. Fr. Dr. Joseph Raj are released.",
  ].join("\n")

  function handleCopyText() {
    navigator.clipboard.writeText(formatNotifyBody())
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  if (formState === "success") {
    const mailtoUrl = `mailto:${NOTIFY_EMAIL}?subject=${encodeURIComponent(
      "Website Notification Request — New Book Releases"
    )}&body=${encodeURIComponent(formatNotifyBody())}`

    return (
      <div className="bg-background border border-border p-5 space-y-4 text-left" role="status" aria-live="polite">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gold inline-block" />
          <p className="font-sans text-[12px] font-semibold tracking-wider uppercase text-navy">
            Saved Locally on Device
          </p>
        </div>
        <p className="font-sans text-[13px] text-muted-foreground leading-relaxed">
          Your request for <strong className="text-foreground">{savedEmail}</strong> has been saved on this browser.
        </p>
        <p className="font-sans text-[12px] text-muted-foreground leading-relaxed">
          Because this site is a direct showcase without a backend server, send a quick 1-click email directly to Fr. Joseph Raj to confirm your request:
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href={mailtoUrl}
            className="inline-flex items-center justify-center font-sans text-[12px] font-medium bg-navy text-ivory px-5 py-2.5 hover:bg-navy-deep transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
          >
            Send Direct Email Confirmation →
          </a>
          <button
            type="button"
            onClick={handleCopyText}
            className="font-sans text-[12px] text-navy underline underline-offset-4 hover:text-gold transition-colors"
          >
            {copied ? "✓ Copied Details" : "Copy Email Details"}
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            setFormState("idle")
            setSavedEmail("")
          }}
          className="font-sans text-[11px] text-muted-foreground hover:text-navy underline underline-offset-2 block pt-1"
        >
          Submit another request
        </button>
      </div>
    )
  }

  const inputId = compact ? "notify-compact" : "notify-main"

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-2">
      <div className={`flex ${compact ? "flex-col gap-2" : "flex-col sm:flex-row gap-3"}`}>
        <div className="flex-1 flex flex-col gap-1">
          <label htmlFor={inputId} className="sr-only">
            Email address for publication updates
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
          {formState === "submitting" ? "Processing…" : "Notify Me"}
        </button>
      </div>
      <p className="font-sans text-[11px] text-muted-foreground/80 leading-normal">
        Saves a local device bookmark &amp; opens a 1-click email to Fr. Joseph Raj.
      </p>
    </form>
  )
}
