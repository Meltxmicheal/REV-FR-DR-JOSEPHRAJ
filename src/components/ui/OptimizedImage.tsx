import React, { useState, useEffect, useRef } from "react"
import { decode } from "blurhash"

export type OptimizedImageProps = {
  src: string
  webpSrc?: string
  alt: string
  blurHash?: string
  priority?: boolean
  className?: string
  imgClassName?: string
  sizes?: string
  aspectRatio?: string
  fallback?: React.ReactNode
  onLoad?: () => void
  onError?: () => void
}

export default function OptimizedImage({
  src,
  webpSrc,
  alt,
  blurHash,
  priority = false,
  className = "",
  imgClassName = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  aspectRatio = "aspect-[2/3]",
  fallback,
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  // Decode BlurHash to canvas
  useEffect(() => {
    if (!blurHash || !canvasRef.current) return

    try {
      const canvas = canvasRef.current
      const width = 32
      const height = 48
      const pixels = decode(blurHash, width, height)
      const ctx = canvas.getContext("2d")
      if (ctx) {
        const imageData = ctx.createImageData(width, height)
        imageData.data.set(pixels)
        ctx.putImageData(imageData, 0, 0)
      }
    } catch (err) {
      console.warn("Error decoding BlurHash:", err)
    }
  }, [blurHash])

  // Check if image is already cached and loaded
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true)
    }
  }, [src, webpSrc])

  if (imgError && fallback) {
    return <>{fallback}</>
  }

  return (
    <div
      className={`relative overflow-hidden bg-secondary ${aspectRatio} ${className}`}
    >
      {/* 1. BlurHash Canvas Placeholder */}
      {blurHash && !imgError && (
        <canvas
          ref={canvasRef}
          width={32}
          height={48}
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover scale-108 filter blur-[6px] transition-opacity duration-500 ease-out pointer-events-none ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
        />
      )}

      {/* 2. Fallback secondary background if no blurHash */}
      {!blurHash && !isLoaded && (
        <div className="absolute inset-0 bg-secondary/80 animate-pulse" aria-hidden="true" />
      )}

      {/* 3. Real Image with WebP format support */}
      {!imgError && (
        <picture>
          {webpSrc && <source type="image/webp" srcSet={webpSrc} />}
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            sizes={sizes}
            className={`w-full h-full object-cover object-center relative z-10 transition-opacity duration-500 ease-out ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${imgClassName}`}
            onLoad={() => {
              setIsLoaded(true)
              onLoad?.()
            }}
            onError={() => {
              setImgError(true)
              onError?.()
            }}
          />
        </picture>
      )}

      {/* 4. Graceful Error Fallback */}
      {imgError && !fallback && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary text-muted-foreground p-4 text-center">
          <span className="font-serif text-sm opacity-60">Image Unavailable</span>
        </div>
      )}
    </div>
  )
}

