import { useState } from "react"
import { author } from "../../data/author"

type AuthorPortraitProps = {
  className?: string
  priority?: boolean
}

export default function AuthorPortrait({
  className = "",
  priority = false,
}: AuthorPortraitProps) {
  const [imgError, setImgError] = useState(false)
  const [loaded, setLoaded] = useState(false)

  if (!imgError) {
    return (
      <div
        className={`group w-full aspect-[3/4] bg-secondary overflow-hidden relative shadow-[0_4px_20px_rgba(23,36,58,0.06)] border border-border/70 ${className}`}
      >
        {!loaded && (
          <div className="absolute inset-0 bg-secondary" aria-hidden="true" />
        )}
        <img
          src={author.imageUrl}
          alt={`Portrait of ${author.fullName}`}
          className={`w-full h-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-[1.018] motion-reduce:transform-none ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          sizes="(max-width: 640px) 100vw, 400px"
          onLoad={() => setLoaded(true)}
          onError={() => setImgError(true)}
        />
      </div>
    )
  }

  return (
    <div
      className={`w-full aspect-[3/4] bg-secondary border border-border flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <p className="font-sans text-[12px] text-muted-foreground text-center">
        Author Portrait
      </p>
      <p className="font-sans text-[11px] text-muted-foreground opacity-50 text-center px-4">
        Place author.jpg in public/images/author/
      </p>
    </div>
  )
}

