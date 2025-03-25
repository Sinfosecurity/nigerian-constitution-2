import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://constitution.ng"

  // Main pages
  const routes = ["", "/constitution", "/learn", "/community", "/resources", "/about", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Constitution chapters (assuming 12 chapters)
  const chapters = Array.from({ length: 12 }, (_, i) => i + 1).map((id) => ({
    url: `${baseUrl}/constitution/chapter/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Learning resources
  const learningResources = [
    "/learn/fundamental-rights",
    "/learn/federal-system",
    "/learn/citizenship",
    "/learn/quizzes",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...routes, ...chapters, ...learningResources]
}

