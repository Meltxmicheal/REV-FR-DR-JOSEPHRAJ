import React from "react"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
  success?: boolean
  id: string
}

export default function Input({ label, error, success, id, className = "", ...props }: InputProps) {
  const borderClass = error
    ? "border-error focus:border-error focus:ring-error/10"
    : success
      ? "border-success focus:border-success focus:ring-success/10"
      : "border-border focus:border-navy focus:ring-navy/10"

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="font-sans text-[13px] font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className={`
          w-full px-4 py-3 font-sans text-[14px] text-foreground bg-background
          border transition-colors
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
