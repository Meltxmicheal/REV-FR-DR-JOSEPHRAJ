import { useEffect, useRef, type ReactNode } from "react"
import { useLocation } from "react-router-dom"
import { useReducedMotion } from "../../hooks/useReducedMotion"

export default function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation()
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const el = ref.current
    if (!el) return
    el.classList.remove("page-enter")
    void el.offsetWidth // force reflow
    el.classList.add("page-enter")
  }, [location.key, reduced])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
  }, [location.pathname])

  return (
    <div ref={ref} className={reduced ? undefined : "page-enter"}>
      {children}
    </div>
  )
}
