import { useEffect, useState } from "react"
import { useReducedMotion } from "./useReducedMotion"

export function useParallax(speed = 0.06) {
  const [offset, setOffset] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    let animationFrameId: number

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        setOffset(window.scrollY * speed)
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [speed, reduced])

  return reduced ? 0 : offset
}
