type DividerProps = {
  className?: string
}

export default function Divider({ className = "" }: DividerProps) {
  return <hr className={`border-none h-px bg-border ${className}`} />
}
