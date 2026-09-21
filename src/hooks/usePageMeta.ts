import { useEffect } from "react"

export const SITE_ORIGIN = "https://www.revfrdrjosephraj.org"
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/images/author/author.jpg`

export type PageMetaOptions = {
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogUrl?: string
  ogImage?: string
  ogType?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterUrl?: string
  twitterImage?: string
  twitterCard?: string
  noindex?: boolean
  schema?: Record<string, any>
}

function setOrCreateMeta(selector: string, attr: string, attrValue: string, content: string) {
  let element = document.querySelector(selector) as HTMLMetaElement | null
  if (!element) {
    element = document.createElement("meta")
    element.setAttribute(attr, attrValue)
    document.head.appendChild(element)
  }
  element.setAttribute("content", content)
}

function setOrCreateLink(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!element) {
    element = document.createElement("link")
    element.setAttribute("rel", rel)
    document.head.appendChild(element)
  }
  element.setAttribute("href", href)
}

export function usePageMeta(
  title: string,
  description: string,
  options: PageMetaOptions = {}
) {
  useEffect(() => {
    // 1. Title & Primary Meta
    document.title = title
    setOrCreateMeta('meta[name="title"]', "name", "title", title)
    setOrCreateMeta('meta[name="description"]', "name", "description", description)

    // 2. Robots
    const robotsContent = options.noindex ? "noindex, nofollow" : "index, follow"
    setOrCreateMeta('meta[name="robots"]', "name", "robots", robotsContent)

    // 3. Canonical URL
    const canonicalUrl = options.canonical || `${SITE_ORIGIN}${window.location.pathname}`
    setOrCreateLink("canonical", canonicalUrl)

    // 4. Open Graph Tags
    const ogTitle = options.ogTitle || title
    const ogDesc = options.ogDescription || description
    const ogUrl = options.ogUrl || canonicalUrl
    const ogImage = options.ogImage || DEFAULT_OG_IMAGE
    const ogType = options.ogType || "website"

    setOrCreateMeta('meta[property="og:type"]', "property", "og:type", ogType)
    setOrCreateMeta('meta[property="og:url"]', "property", "og:url", ogUrl)
    setOrCreateMeta('meta[property="og:title"]', "property", "og:title", ogTitle)
    setOrCreateMeta('meta[property="og:description"]', "property", "og:description", ogDesc)
    setOrCreateMeta('meta[property="og:image"]', "property", "og:image", ogImage)
    setOrCreateMeta('meta[property="og:site_name"]', "property", "og:site_name", "Rev. Fr. Dr. Joseph Raj")

    // 5. Twitter / X Cards
    const twTitle = options.twitterTitle || ogTitle
    const twDesc = options.twitterDescription || ogDesc
    const twUrl = options.twitterUrl || ogUrl
    const twImage = options.twitterImage || ogImage
    const twCard = options.twitterCard || "summary_large_image"

    setOrCreateMeta('meta[property="twitter:card"]', "property", "twitter:card", twCard)
    setOrCreateMeta('meta[property="twitter:url"]', "property", "twitter:url", twUrl)
    setOrCreateMeta('meta[property="twitter:title"]', "property", "twitter:title", twTitle)
    setOrCreateMeta('meta[property="twitter:description"]', "property", "twitter:description", twDesc)
    setOrCreateMeta('meta[property="twitter:image"]', "property", "twitter:image", twImage)

    // 6. Dynamic JSON-LD Schema
    const scriptId = "page-dynamic-jsonld"
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null

    if (options.schema) {
      if (!scriptTag) {
        scriptTag = document.createElement("script")
        scriptTag.id = scriptId
        scriptTag.type = "application/ld+json"
        document.head.appendChild(scriptTag)
      }
      scriptTag.textContent = JSON.stringify(options.schema)
    } else if (scriptTag) {
      scriptTag.remove()
    }

    return () => {
      const dynamicScript = document.getElementById(scriptId)
      if (dynamicScript) {
        dynamicScript.remove()
      }
    }
  }, [title, description, JSON.stringify(options)])
}


