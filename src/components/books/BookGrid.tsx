import type { Book } from "../../data/books"
import BookCard from "./BookCard"
import { useInView } from "../../hooks/useInView"
import { useReducedMotion } from "../../hooks/useReducedMotion"

type BookGridProps = {
  books: Book[]
}

function StaggeredCard({ book, index }: { book: Book; index: number }) {
  const { ref, inView } = useInView()
  const reduced = useReducedMotion()
  const delay = Math.min((index % 6) * 70, 420)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={
        reduced
          ? undefined
          : {
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 450ms ease-out ${delay}ms, transform 450ms ease-out ${delay}ms`,
            }
      }
      className="h-full"
    >
      <BookCard book={book} index={index} />
    </div>
  )
}

export default function BookGrid({ books }: BookGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {books.map((book, i) => (
        <StaggeredCard key={book.id} book={book} index={i} />
      ))}
    </div>
  )
}
