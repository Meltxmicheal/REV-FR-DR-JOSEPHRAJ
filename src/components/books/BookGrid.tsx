import type { Book } from "../../data/books"
import BookCard from "./BookCard"

type BookGridProps = {
  books: Book[]
}

export default function BookGrid({ books }: BookGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
      {books.map((book, i) => (
        <BookCard key={book.id} book={book} index={i} />
      ))}
    </div>
  )
}
