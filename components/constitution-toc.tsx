"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { BookOpen, ChevronDown, ChevronRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { Chapter } from "@/types/constitution"

interface ConstitutionTOCProps {
  chapters: Chapter[]
  activeChapterId?: number
  activeSectionId?: string
  onChapterSelect?: (chapterId: number) => void
  onSectionSelect?: (chapterId: number, sectionId: string) => void
}

export function ConstitutionTOC({
  chapters,
  activeChapterId,
  activeSectionId,
  onChapterSelect,
  onSectionSelect,
}: ConstitutionTOCProps) {
  const [expandedChapters, setExpandedChapters] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredChapters, setFilteredChapters] = useState<Chapter[]>(chapters)
  const [mounted, setMounted] = useState(false)

  // Set mounted to true when component mounts
  useEffect(() => {
    setMounted(true)
    setFilteredChapters(chapters)
  }, [chapters])

  // Initialize with active chapter expanded
  useEffect(() => {
    if (activeChapterId && !expandedChapters.includes(activeChapterId)) {
      setExpandedChapters((prev) => [...prev, activeChapterId])
    }
  }, [activeChapterId, expandedChapters])

  // Filter chapters and sections based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredChapters(chapters)
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = chapters
      .map((chapter) => {
        // Check if chapter title matches
        const chapterMatches = chapter.fullTitle.toLowerCase().includes(query)

        // Filter sections that match
        const matchingSections = chapter.sections.filter(
          (section) => section.title.toLowerCase().includes(query) || section.content.toLowerCase().includes(query),
        )

        // If chapter matches or has matching sections, include it
        if (chapterMatches || matchingSections.length > 0) {
          return {
            ...chapter,
            sections: chapterMatches ? chapter.sections : matchingSections,
          }
        }

        return null
      })
      .filter(Boolean) as Chapter[]

    setFilteredChapters(filtered)

    // Expand all chapters that have matches
    setExpandedChapters(filtered.map((chapter) => chapter.id))
  }, [searchQuery, chapters])

  const toggleChapter = (chapterId: number) => {
    setExpandedChapters((prev) =>
      prev.includes(chapterId) ? prev.filter((id) => id !== chapterId) : [...prev, chapterId],
    )

    if (onChapterSelect) {
      onChapterSelect(chapterId)
    }
  }

  const selectSection = (chapterId: number, sectionId: string) => {
    if (onSectionSelect) {
      onSectionSelect(chapterId, sectionId)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search is handled by the useEffect above
  }

  // Show a loading state until client-side hydration is complete
  if (!mounted) {
    return (
      <div className="flex flex-col h-full border rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <div className="h-10 bg-muted rounded-md animate-pulse"></div>
        </div>
        <div className="flex-1 p-4">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-10 bg-muted rounded-md animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full border rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search constitution..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {!onSectionSelect && (
            <Button type="submit" size="sm">
              Search
            </Button>
          )}
        </form>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-1">
          {filteredChapters.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">No chapters found matching your search.</p>
          ) : (
            filteredChapters.map((chapter) => (
              <div key={chapter.id} className="mb-2">
                <div
                  className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium cursor-pointer ${
                    activeChapterId === chapter.id ? "bg-primary/10 text-primary" : "hover:bg-muted"
                  }`}
                  onClick={() => toggleChapter(chapter.id)}
                >
                  <div className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>{chapter.title}</span>
                  </div>
                  {expandedChapters.includes(chapter.id) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </div>

                {expandedChapters.includes(chapter.id) && (
                  <div className="ml-6 mt-1 space-y-1">
                    {chapter.sections.map((section) => (
                      <div
                        key={section.id}
                        className={`rounded-md px-3 py-1.5 text-sm cursor-pointer ${
                          activeChapterId === chapter.id && activeSectionId === section.id
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-muted"
                        }`}
                        onClick={() => selectSection(chapter.id, section.id)}
                      >
                        {section.number}. {section.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  )
}

