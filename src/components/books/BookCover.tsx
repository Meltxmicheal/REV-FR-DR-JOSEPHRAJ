import OptimizedImage from "../ui/OptimizedImage"

type BookCoverProps = {
  title: string
  coverImage: string
  webpImage?: string
  blurHash?: string
  priority?: boolean
  index?: number
  className?: string
}

const coverPalettes = [
  { bg: "#17243A", accent: "#A88A52", rule: "#D8D2C5" },
  { bg: "#1E2E48", accent: "#C4A66E", rule: "#D8D2C5" },
  { bg: "#0E1824", accent: "#A88A52", rule: "#C4A66E" },
  { bg: "#243454", accent: "#C4A66E", rule: "#D8D2C5" },
  { bg: "#17243A", accent: "#D8D2C5", rule: "#A88A52" },
  { bg: "#1A2A3E", accent: "#A88A52", rule: "#EDE9E0" },
  { bg: "#0E1824", accent: "#C4A66E", rule: "#D8D2C5" },
]

export default function BookCover({
  title,
  coverImage,
  webpImage,
  blurHash,
  priority = false,
  index = 0,
  className = "",
}: BookCoverProps) {
  const palette = coverPalettes[index % coverPalettes.length]

  const placeholderFallback = (
    <div
      className="w-full aspect-[2/3] flex flex-col items-center justify-between py-8 px-6 relative overflow-hidden"
      style={{ backgroundColor: palette.bg }}
      aria-label={`Placeholder cover for ${title}`}
      role="img"
    >
      {/* Top rule */}
      <div className="w-full flex flex-col gap-0.5">
        <div className="w-full h-px" style={{ backgroundColor: palette.accent }} />
        <div className="w-full h-px opacity-40" style={{ backgroundColor: palette.accent }} />
      </div>

      {/* Center text */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
        <p
          className="font-sans text-xs tracking-widest uppercase mb-5 opacity-50"
          style={{ color: palette.rule, fontSize: "9px" }}
        >
          Rev. Fr. Dr. Joseph Raj
        </p>
        <div className="w-5 h-px mb-5 mx-auto" style={{ backgroundColor: palette.accent }} />
        <p
          className="font-serif leading-relaxed"
          style={{ color: palette.rule, fontSize: "13px" }}
        >
          {title}
        </p>
      </div>

      {/* Bottom rule */}
      <div className="w-full flex flex-col gap-0.5">
        <div className="w-full h-px opacity-40" style={{ backgroundColor: palette.accent }} />
        <div className="w-full h-px" style={{ backgroundColor: palette.accent }} />
      </div>
    </div>
  )

  if (!coverImage) {
    return placeholderFallback
  }

  return (
    <OptimizedImage
      src={coverImage}
      webpSrc={webpImage}
      blurHash={blurHash}
      alt={`${title} by Rev. Fr. Dr. Joseph Raj`}
      priority={priority}
      aspectRatio="aspect-[2/3]"
      className={className}
      fallback={placeholderFallback}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  )
}
