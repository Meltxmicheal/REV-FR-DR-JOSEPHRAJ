type SectionHeadingProps = {
  label?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left"

  return (
    <div className={`${alignClass} ${className}`}>
      {label && (
        <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">
          {label}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl text-navy font-normal leading-snug">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 font-sans text-base text-muted-foreground leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
