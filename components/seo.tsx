"use client"

import { useEffect } from "react"

interface SEOProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogType?: string
  ogImage?: string
  twitterCard?: string
}

export function SEO({
  title = "Nigerian Constitution Hub",
  description = "Explore, learn, and understand the Nigerian Constitution through our comprehensive, interactive platform designed for every Nigerian citizen.",
  canonicalUrl,
  ogType = "website",
  ogImage = "/images/og-image.png",
  twitterCard = "summary_large_image",
}: SEOProps) {
  // Update document title on the client side only
  useEffect(() => {
    document.title = title === "Nigerian Constitution Hub" ? title : `${title} | Nigerian Constitution Hub`
  }, [title])

  return null
}

