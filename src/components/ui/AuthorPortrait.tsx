import { author } from "../../data/author"
import OptimizedImage from "./OptimizedImage"

type AuthorPortraitProps = {
  className?: string
  priority?: boolean
}

export default function AuthorPortrait({
  className = "",
  priority = false,
}: AuthorPortraitProps) {
  const fallbackUI = (
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

  return (
    <div
      className={`group w-full overflow-hidden shadow-[0_4px_20px_rgba(23,36,58,0.06)] border border-border/70 ${className}`}
    >
      <OptimizedImage
        src={author.imageUrl}
        webpSrc={author.webpImageUrl}
        blurHash={author.blurHash}
        alt={author.fullName}
        priority={priority}
        aspectRatio="aspect-[3/4]"
        imgClassName="object-top transition-all duration-500 ease-out group-hover:scale-[1.018] motion-reduce:transform-none"
        sizes="(max-width: 640px) 100vw, 400px"
        fallback={fallbackUI}
      />
    </div>
  )
}
