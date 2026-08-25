import React from "react"

type ButtonVariant = "primary" | "secondary" | "text"
type ButtonSize = "sm" | "md" | "lg"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-ivory border border-navy hover:bg-navy-deep hover:border-navy-deep",
  secondary:
    "bg-transparent text-navy border border-navy hover:bg-navy hover:text-ivory",
  text: "bg-transparent text-navy underline underline-offset-4 hover:text-gold border border-transparent",
}

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-[13px]",
  md: "px-7 py-2.5 text-[13px]",
  lg: "px-8 py-3 text-sm",
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center font-sans font-medium tracking-wide
        transition-colors cursor-pointer
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2
        disabled:opacity-40 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </button>
  )
}
