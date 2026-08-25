import React from "react"

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  error?: string
  id: string
}

export default function Textarea({ label, error, id, className = "", ...props }: TextareaProps) {
  const borderClass = error
    ? "border-error focus:border-error focus:ring-error/10"
    : "border-border focus:border-navy focus:ring-navy/10"

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="font-sans text-[13px] font-medium text-foreground">
        {label}
      </label>
      <textarea
        id={id}
        {...props}
        className={`
          w-full px-4 py-3 font-sans text-[14px] text-foreground bg-background
          border transition-colors resize-vertical min-h-36
          focus:outline-none focus:ring-2
          placeholder:text-muted-foreground/60
          disabled:opacity-40 disabled:bg-secondary disabled:cursor-not-allowed
          ${borderClass}
        `}
      />
      {error && (
        <p className="font-sans text-[12px] text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
