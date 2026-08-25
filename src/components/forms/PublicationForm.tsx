import { useState, type FormEvent } from "react"

type PublicationFormProps = {
  compact?: boolean
}

type FormState = "idle" | "submitting" | "success" | "error"

export default function PublicationForm({ compact = false }: PublicationFormProps) {
  const [email, setEmail] = useState("")
  const [formState, setFormState] = useState<FormState>("idle")
  const [emailError, setEmailError] = useState("")

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
    setTimeout(() => {
      setFormState("success")
      setEmail("")
    }, 800)
  }

  if (formState === "success") {
    return (
      <p className="font-sans text-[13px] text-success leading-relaxed" role="status">
        Thank you. You will be notified when new books become available.
      </p>
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
            px-7 py-3
            ${compact ? "w-full" : "shrink-0"}
          `}
        >
          {formState === "submitting" ? "Sending…" : "Notify Me"}
        </button>
      </div>
    </form>
  )
}
