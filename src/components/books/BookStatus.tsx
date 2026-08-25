import type { BookStatus } from "../../data/books"

type BookStatusProps = {
  status: BookStatus
  size?: "sm" | "md"
}

const statusConfig: Record<BookStatus, { label: string; className: string }> = {
  DRAFT: {
    label: "Draft",
    className: "text-muted-foreground border-border",
  },
  COMING_SOON: {
    label: "Coming Soon",
    className: "text-gold border-gold",
  },
  PUBLISHED: {
    label: "Published",
    className: "text-navy border-navy",
  },
  AVAILABLE: {
    label: "Available",
    className: "text-success border-success",
  },
  OUT_OF_STOCK: {
    label: "Out of Stock",
    className: "text-muted-foreground border-muted-foreground",
  },
}

export default function BookStatus({ status, size = "sm" }: BookStatusProps) {
  const config = statusConfig[status]

  return (
    <span
      className={`
        inline-block font-sans tracking-widest uppercase border
        ${size === "sm" ? "text-[10px] px-2 py-0.5" : "text-[11px] px-3 py-1"}
        ${config.className}
      `}
    >
      {config.label}
    </span>
  )
}
