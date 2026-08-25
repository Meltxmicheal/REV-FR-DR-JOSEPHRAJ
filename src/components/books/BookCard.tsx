import { Link } from "react-router-dom"
import type { Book } from "../../data/books"
import BookCover from "./BookCover"
import BookStatusBadge from "./BookStatus"

type BookCardProps = {
  book: Book
  index: number
}

export default function BookCard({ book, index }: BookCardProps) {
  return (
    <article className="group flex flex-col h-full">
      {/* Cover — clickable */}
      <Link
        to={`/books/${book.slug}`}
        aria-label={`View book: ${book.title}`}
        className="w-full text-left cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 group/cover block"
      >
        <div className="w-full transition-shadow duration-200 group-hover/cover:shadow-[0_4px_20px_rgba(23,36,58,0.10)]">
          <BookCover title={book.title} coverImage={book.coverImage} index={index} />
        </div>
      </Link>

      {/* Info */}
      <div className="pt-5 flex flex-col flex-1">
        {/* Book Number + Category */}
        <div className="flex items-center gap-2 mb-2">
          <span className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-navy bg-secondary/80 px-2 py-0.5 border border-border">
            Book {book.order ?? index + 1}
          </span>
          <span className="text-border">·</span>
          <p className="font-sans text-[10px] font-medium tracking-[0.18em] uppercase text-gold">
            {book.category}
          </p>
        </div>

        {/* Title — dominant */}
        <Link
          to={`/books/${book.slug}`}
          className="text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1 block"
        >
          <h3 className="font-serif text-[18px] sm:text-[19px] lg:text-[20px] font-normal leading-snug text-foreground group-hover:text-navy transition-colors mb-3">
            {book.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="font-sans text-[13px] text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-1">
          {book.description}
        </p>

        {/* Status + link row */}
        <div className="flex items-center justify-between gap-3 mt-auto pt-2">
          <BookStatusBadge status={book.status} />
          <Link
            to={`/books/${book.slug}`}
            className="font-sans text-[12px] text-navy hover:text-gold underline underline-offset-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1 min-h-[44px] flex items-center"
          >
            View Details →
          </Link>
        </div>
      </div>
    </article>
  )
}
