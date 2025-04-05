"use client"

import { useState, useEffect, useCallback } from "react"
import { useSearchParams } from "next/navigation"
import { InteractiveConstitutionReader } from "@/components/interactive-constitution-reader"
import SearchBar from "@/components/search-bar"
import Chatbot from "@/components/chatbot"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, AlertCircle, RefreshCw } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { parseConstitution } from "@/utils/constitution-parser"
import type { Chapter } from "@/types/constitution"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"

export function ConstitutionReader() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [chapters, setChapters] = useState<Chapter[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

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
        throw new Error(`${t("constitution.fetchError")}: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()

      if (!data.text) {
        throw new Error(t("constitution.noTextError"))
      }

      // Parse the constitution text
      const parsedChapters = parseConstitution(data.text)

      if (parsedChapters.length === 0) {
        throw new Error(t("constitution.parseError"))
      }

      setChapters(parsedChapters)
    } catch (err) {
      console.error(t("constitution.loadError"), err)
      setError(err instanceof Error ? err.message : t("constitution.unknownError"))

      // Load sample data as fallback
      const sampleChapters = parseConstitution("")
      setChapters(sampleChapters)
    } finally {
      setLoading(false)
    }
  }, [t, retryCount])

  useEffect(() => {
    // Get search query from URL if present
    const query = searchParams.get("search") || ""
    setSearchQuery(query)

    loadConstitution()
  }, [searchParams, loadConstitution])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleRetry = () => {
    setRetryCount((prev) => prev + 1)
  }

  return (
    <>
      <div className="mb-4">
        <SearchBar onSearch={handleSearch} />
      </div>

      {error && (
        <Alert variant="destructive" className="mb-4">
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

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-3/4">
          {loading ? (
            <Card>
              <CardContent className="flex items-center justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
                <span>{t("toc.loading")}</span>
              </CardContent>
            </Card>
          ) : (
            <InteractiveConstitutionReader chapters={chapters} searchQuery={searchQuery} />
          )}
        </div>
        {/* <div className="lg:w-1/4">
          <Chatbot />
        </div> */}
      </div>
    </>
  )
}

