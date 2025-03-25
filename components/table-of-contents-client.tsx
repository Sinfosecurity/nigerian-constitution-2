"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ConstitutionTOC } from "@/components/constitution-toc"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { parseConstitution } from "@/utils/constitution-parser"
import type { Chapter } from "@/types/constitution"

// Add imports for language context and translation hook
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"

export function TableOfContentsClient() {
  const router = useRouter()
  const [chapters, setChapters] = useState<Chapter[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("chapters")

  // Inside the component, add:
  const { currentLanguage } = useLanguage()
  const { t } = useTranslation(currentLanguage.code)

  useEffect(() => {
    async function loadConstitution() {
      try {
        setLoading(true)
        setError(null)

        // Fetch the constitution text
        const response = await fetch("/api/constitution")

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

        console.log("Parsed chapters:", parsedChapters.length)
        setChapters(parsedChapters)
      } catch (err) {
        console.error("Error loading constitution:", err)
        setError(err instanceof Error ? err.message : "An unknown error occurred")

        // Load sample data as fallback
        const sampleChapters = parseConstitution("")
        setChapters(sampleChapters)
      } finally {
        setLoading(false)
      }
    }

    loadConstitution()
  }, [])

  const handleChapterSelect = (chapterId: number) => {
    router.push(`/constitution/chapter/${chapterId}`)
  }

  const handleSectionSelect = (chapterId: number, sectionId: string) => {
    router.push(`/constitution/chapter/${chapterId}?section=${sectionId}`)
  }

  return (
    <>
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{t("error.title")}</AlertTitle>
          <AlertDescription>
            {error}. {t("error.fallback")}
          </AlertDescription>
        </Alert>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="chapters">{t("toc.byChapters")}</TabsTrigger>
          <TabsTrigger value="topics">{t("toc.byTopics")}</TabsTrigger>
        </TabsList>

        <TabsContent value="chapters">
          {loading ? (
            <Card>
              <CardContent className="flex items-center justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
                <span>{t("toc.loading")}</span>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                <ConstitutionTOC
                  chapters={chapters}
                  onChapterSelect={handleChapterSelect}
                  onSectionSelect={handleSectionSelect}
                />
              </div>
              <div className="md:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>{t("toc.about.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{t("toc.about.p1")}</p>
                    <p className="mb-4">{t("toc.about.p2")}</p>
                    <p>{t("toc.about.p3")}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="topics">
          <Card>
            <CardHeader>
              <CardTitle>Constitutional Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "Fundamental Rights",
                    description: "Chapter IV - Rights guaranteed to all citizens",
                    link: "/constitution/topics/fundamental-rights",
                  },
                  {
                    title: "Federal System of Government",
                    description: "Chapters V, VI, and VII - Structure of government",
                    link: "/constitution/topics/government-structure",
                  },
                  {
                    title: "Citizenship",
                    description: "Chapter III - Requirements and rights of citizenship",
                    link: "/constitution/topics/citizenship",
                  },
                  {
                    title: "Judiciary",
                    description: "Chapter VII - Structure and powers of the courts",
                    link: "/constitution/topics/judiciary",
                  },
                  {
                    title: "Legislative Powers",
                    description: "Chapter V - Powers of the National Assembly and State Houses of Assembly",
                    link: "/constitution/topics/legislative-powers",
                  },
                  {
                    title: "Executive Powers",
                    description: "Chapter VI - Powers of the President and Governors",
                    link: "/constitution/topics/executive-powers",
                  },
                  {
                    title: "Fundamental Objectives",
                    description: "Chapter II - Directive principles of state policy",
                    link: "/constitution/topics/fundamental-objectives",
                  },
                  {
                    title: "Federal Capital Territory",
                    description: "Chapter VIII - Administration of the FCT",
                    link: "/constitution/topics/fct",
                  },
                  {
                    title: "Public Service",
                    description: "Various sections - Rules governing public service",
                    link: "/constitution/topics/public-service",
                  },
                ].map((topic, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">{topic.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-muted-foreground mb-4">{topic.description}</p>
                      <a href={topic.link} className="text-sm font-medium text-primary hover:underline">
                        Explore Topic
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  )
}

