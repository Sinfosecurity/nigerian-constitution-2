"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2, Search, AlertCircle, RefreshCw } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { parseConstitution } from "@/utils/constitution-parser"
import type { Chapter, SearchResult } from "@/types/constitution"

// Add imports for language context and translation hook
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"

export function SearchPageClient() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get("q") || ""

  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [chapters, setChapters] = useState<Chapter[]>([])
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(true)
  const [searching, setSearching] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  // Inside the component, add:
  const { currentLanguage } = useLanguage()
  const { t } = useTranslation(currentLanguage.code)

  const loadConstitution = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      // Fetch the constitution text
      const response = await fetch("/api/constitution", {
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache",
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to load constitution: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()

      if (!data.text) {
        throw new Error("No constitution text received from API")
      }

      // Parse the constitution text
      const parsedChapters = parseConstitution(data.text)

      if (parsedChapters.length === 0) {
        throw new Error("Failed to parse constitution text")
      }

      setChapters(parsedChapters)

      // If there's an initial query, perform search
      if (initialQuery) {
        performSearch(initialQuery, parsedChapters)
      }
    } catch (err) {
      console.error("Error loading constitution:", err)
      setError(err instanceof Error ? err.message : "An unknown error occurred")

      // Load sample data as fallback
      const sampleChapters = parseConstitution("")
      setChapters(sampleChapters)

      if (initialQuery) {
        performSearch(initialQuery, sampleChapters)
      }
    } finally {
      setLoading(false)
    }
  }, [initialQuery, retryCount])

  useEffect(() => {
    loadConstitution()
  }, [loadConstitution])

  const performSearch = (query: string, chaptersToSearch: Chapter[]) => {
    if (!query.trim()) {
      setSearchResults([])
      setSearching(false)
      return
    }

    setSearching(true)
    const results: SearchResult[] = []
    const searchTerms = query.toLowerCase()

    chaptersToSearch.forEach((chapter) => {
      chapter.sections.forEach((section) => {
        const titleMatches = section.title.toLowerCase().includes(searchTerms)
        const contentMatches = section.content.toLowerCase().includes(searchTerms)

        if (titleMatches || contentMatches) {
          // Extract matching context
          const matches: string[] = []

          if (contentMatches) {
            const content = section.content.toLowerCase()
            const searchTermIndex = content.indexOf(searchTerms)

            if (searchTermIndex !== -1) {
              // Get context around the match (50 chars before and after)
              const startIndex = Math.max(0, searchTermIndex - 50)
              const endIndex = Math.min(content.length, searchTermIndex + searchTerms.length + 50)
              let context = section.content.substring(startIndex, endIndex)

              // Add ellipsis if we're not at the beginning/end
              if (startIndex > 0) context = "..." + context
              if (endIndex < content.length) context = context + "..."

              matches.push(context)
            }
          }

          results.push({
            chapter,
            section,
            matches: matches.length > 0 ? matches : ["Match found in this section"],
          })
        }
      })
    })

    setSearchResults(results)
    setSearching(false)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Update URL with search query
    router.push(`/constitution/search?q=${encodeURIComponent(searchQuery)}`)

    performSearch(searchQuery, chapters)
  }

  const handleRetry = () => {
    setRetryCount((prev) => prev + 1)
  }

  const highlightMatches = (text: string, query: string) => {
    if (!query.trim()) return text

    const parts = text.split(new RegExp(`(${query})`, "gi"))

    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-yellow-200 dark:bg-yellow-800">
          {part}
        </mark>
      ) : (
        part
      ),
    )
  }

  return (
    <>
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{t("error.title")}</AlertTitle>
          <AlertDescription className="flex items-center justify-between">
            <span>
              {error}. {t("error.fallback")}
            </span>
            <Button variant="outline" size="sm" onClick={handleRetry} className="ml-2">
              <RefreshCw className="h-4 w-4 mr-2" />
              {t("error.retry")}
            </Button>
          </AlertDescription>
        </Alert>
      )}

      <Card className="mb-8">
        <CardContent className="p-6">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder={t("search.placeholder")}
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit" disabled={loading || searching}>
              {searching ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("search.searching")}
                </>
              ) : (
                t("search.button")
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {loading ? (
        <Card>
          <CardContent className="flex items-center justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
            <span>{t("toc.loading")}</span>
          </CardContent>
        </Card>
      ) : searchResults.length > 0 ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {searchResults.length} {searchResults.length === 1 ? t("search.result") : t("search.results")}{" "}
            {t("search.foundFor")} "{initialQuery}"
          </h2>

          <div className="space-y-6">
            {searchResults.map((result, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-1">
                    <a
                      href={`/constitution/chapter/${result.chapter.id}?section=${result.section.id}`}
                      className="text-primary hover:underline"
                    >
                      {result.chapter.title} - {result.section.title}
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{result.chapter.fullTitle}</p>

                  <div className="space-y-2">
                    {result.matches.map((match, matchIndex) => (
                      <div key={matchIndex} className="text-sm bg-muted p-3 rounded-md">
                        {highlightMatches(match, initialQuery)}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <a
                      href={`/constitution/chapter/${result.chapter.id}?section=${result.section.id}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      {t("search.viewFullSection")}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : initialQuery ? (
        <div className="text-center py-8">
          <p className="text-lg mb-4">
            {t("search.noResults")} "{initialQuery}"
          </p>
          <p className="text-muted-foreground">{t("search.tryDifferent")}</p>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-lg mb-4">{t("search.enterTerm")}</p>
          <p className="text-muted-foreground">{t("search.canSearch")}</p>
        </div>
      )}
    </>
  )
}

