"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import {
  BookOpen,
  Bookmark,
  Share2,
  Copy,
  Highlighter,
  Menu,
  X,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import type { Chapter, Section } from "@/types/constitution"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ConstitutionTOC } from "@/components/constitution-toc"

interface ConstitutionReaderProps {
  chapters?: Chapter[]
  initialChapter?: number
  initialSection?: string
  searchQuery?: string
}

export function InteractiveConstitutionReader({
  chapters = [],
  initialChapter = 1,
  initialSection,
  searchQuery = "",
}: ConstitutionReaderProps) {
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null)
  const [activeSection, setActiveSection] = useState<Section | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery)
  const [searchResults, setSearchResults] = useState<{ chapter: Chapter; section: Section }[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const [bookmarks, setBookmarks] = useState<{ chapterId: number; sectionId: string }[]>([])
  const [showExplanation, setShowExplanation] = useState(true)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [highlightedText, setHighlightedText] = useState<string[]>([])
  const [userNotes, setUserNotes] = useState<{ [key: string]: string }>({})
  const [noteInput, setNoteInput] = useState("")
  const [activeTab, setActiveTab] = useState("full")
  const [isClient, setIsClient] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null)

  // Set isClient to true when component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Initialize with URL parameters or defaults
  useEffect(() => {
    if (!isClient || chapters.length === 0) return

    let chapterId = initialChapter
    let sectionId = initialSection

    // Try to get params from URL if we're on the client
    try {
      const params = new URLSearchParams(window.location.search)
      const chapterParam = params.get("chapter")
      const sectionParam = params.get("section")

      if (chapterParam) {
        chapterId = Number.parseInt(chapterParam)
      }

      if (sectionParam) {
        sectionId = sectionParam
      }
    } catch (error) {
      console.error("Error parsing URL params:", error)
    }

    const chapter = chapters.find((c) => c.id === chapterId) || chapters[0]
    setActiveChapter(chapter)

    if (sectionId && chapter) {
      const section = chapter.sections.find((s) => s.id === sectionId) || chapter.sections[0]
      setActiveSection(section)
    } else if (chapter) {
      setActiveSection(chapter.sections[0])
    }

    // Load saved user preferences from localStorage
    try {
      const savedDarkMode = localStorage.getItem("darkMode") === "true"
      const savedFontSize = Number.parseInt(localStorage.getItem("fontSize") || "16")
      const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]")
      const savedHighlights = JSON.parse(localStorage.getItem("highlights") || "[]")
      const savedNotes = JSON.parse(localStorage.getItem("notes") || "{}")

      setDarkMode(savedDarkMode)
      setFontSize(savedFontSize)
      setBookmarks(savedBookmarks)
      setHighlightedText(savedHighlights)
      setUserNotes(savedNotes)

      if (savedDarkMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } catch (error) {
      console.error("Error loading preferences:", error)
    }
  }, [chapters, initialChapter, initialSection, isClient])

  // Update local search query when prop changes
  useEffect(() => {
    if (searchQuery !== localSearchQuery) {
      setLocalSearchQuery(searchQuery)
      if (searchQuery) {
        handleSearch()
      }
    }
  }, [searchQuery])

  // Save preferences to localStorage when they change
  useEffect(() => {
    if (!isClient) return

    try {
      localStorage.setItem("darkMode", darkMode.toString())
      localStorage.setItem("fontSize", fontSize.toString())
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
      localStorage.setItem("highlights", JSON.stringify(highlightedText))
      localStorage.setItem("notes", JSON.stringify(userNotes))

      if (darkMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } catch (error) {
      console.error("Error saving preferences:", error)
    }
  }, [darkMode, fontSize, bookmarks, highlightedText, userNotes, isClient])

  // Update URL when active chapter/section changes
  useEffect(() => {
    if (!isClient || !activeChapter || !activeSection) return

    const url = `/constitution?chapter=${activeChapter.id}&section=${activeSection.id}`
    window.history.replaceState(null, "", url)
  }, [activeChapter, activeSection, isClient])

  // Stop speaking when component unmounts
  useEffect(() => {
    return () => {
      if (speechSynthesisRef.current && window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  const handleSearch = useCallback(() => {
    if (!localSearchQuery.trim()) {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    const query = localSearchQuery.toLowerCase()
    const results: { chapter: Chapter; section: Section }[] = []

    chapters.forEach((chapter) => {
      chapter.sections.forEach((section) => {
        if (section.title.toLowerCase().includes(query) || section.content.toLowerCase().includes(query)) {
          results.push({ chapter, section })
        }
      })
    })

    setSearchResults(results)
  }, [localSearchQuery, chapters])

  const changeChapter = useCallback(
    (chapterId: number) => {
      const chapter = chapters.find((c) => c.id === chapterId)
      if (chapter) {
        setActiveChapter(chapter)
        setActiveSection(chapter.sections[0])
        if (contentRef.current) {
          contentRef.current.scrollTop = 0
        }
      }
    },
    [chapters],
  )

  const changeSection = useCallback(
    (sectionId: string) => {
      if (activeChapter) {
        const section = activeChapter.sections.find((s) => s.id === sectionId)
        if (section) {
          setActiveSection(section)
          if (contentRef.current) {
            contentRef.current.scrollTop = 0
          }
        }
      }
    },
    [activeChapter],
  )

  const handleChapterSelect = useCallback(
    (chapterId: number) => {
      changeChapter(chapterId)
    },
    [changeChapter],
  )

  const handleSectionSelect = useCallback(
    (chapterId: number, sectionId: string) => {
      const chapter = chapters.find((c) => c.id === chapterId)
      if (chapter) {
        setActiveChapter(chapter)
        const section = chapter.sections.find((s) => s.id === sectionId)
        if (section) {
          setActiveSection(section)
          if (contentRef.current) {
            contentRef.current.scrollTop = 0
          }
        }
      }
    },
    [chapters],
  )

  const toggleBookmark = useCallback(() => {
    if (!activeChapter || !activeSection) return

    const bookmark = { chapterId: activeChapter.id, sectionId: activeSection.id }
    const exists = bookmarks.some((b) => b.chapterId === bookmark.chapterId && b.sectionId === bookmark.sectionId)

    if (exists) {
      setBookmarks(bookmarks.filter((b) => !(b.chapterId === bookmark.chapterId && b.sectionId === bookmark.sectionId)))
    } else {
      setBookmarks([...bookmarks, bookmark])
    }
  }, [activeChapter, activeSection, bookmarks])

  const isBookmarked = useCallback(() => {
    if (!activeChapter || !activeSection) return false

    return bookmarks.some((b) => b.chapterId === activeChapter.id && b.sectionId === activeSection.id)
  }, [activeChapter, activeSection, bookmarks])

  const copyToClipboard = useCallback(() => {
    if (!activeSection) return

    const textToCopy = `${activeChapter?.fullTitle}

${activeSection.title}

${activeSection.content}

Source: Nigerian Constitution Hub`
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Text copied to clipboard")
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err)
      })
  }, [activeChapter, activeSection])

  const shareSection = useCallback(() => {
    if (!activeChapter || !activeSection || !isClient) return

    const url = `${window.location.origin}/constitution?chapter=${activeChapter.id}&section=${activeSection.id}`

    if (navigator.share) {
      navigator
        .share({
          title: `Nigerian Constitution: ${activeSection.title}`,
          text: `Check out this section of the Nigerian Constitution: ${activeSection.title}`,
          url: url,
        })
        .catch((err) => {
          console.error("Error sharing: ", err)
          // Fallback to clipboard
          navigator.clipboard.writeText(url).then(() => {
            alert("Link copied to clipboard")
          })
        })
    } else {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          alert("Link copied to clipboard")
        })
        .catch((err) => {
          console.error("Failed to copy link: ", err)
        })
    }
  }, [activeChapter, activeSection, isClient])

  const toggleTextToSpeech = useCallback(() => {
    if (!activeSection || !isClient) return

    if (isSpeaking) {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
      setIsSpeaking(false)
      return
    }

    if (window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(activeSection.content)
      utterance.lang = "en-NG"
      utterance.rate = 0.9

      utterance.onend = () => {
        setIsSpeaking(false)
      }

      speechSynthesisRef.current = utterance
      window.speechSynthesis.speak(utterance)
      setIsSpeaking(true)
    } else {
      alert("Text-to-speech is not supported in your browser")
    }
  }, [activeSection, isSpeaking, isClient])

  const handleTextSelection = useCallback(() => {
    const selection = window.getSelection()
    if (!selection || selection.isCollapsed) return

    const selectedText = selection.toString().trim()
    if (selectedText && !highlightedText.includes(selectedText)) {
      setHighlightedText([...highlightedText, selectedText])
    }
  }, [highlightedText])

  const removeHighlight = useCallback(
    (text: string) => {
      setHighlightedText(highlightedText.filter((t) => t !== text))
    },
    [highlightedText],
  )

  const saveNote = useCallback(() => {
    if (!activeChapter || !activeSection || !noteInput.trim()) return

    const noteKey = `${activeChapter.id}-${activeSection.id}`
    setUserNotes({
      ...userNotes,
      [noteKey]: noteInput,
    })
    setNoteInput("")
  }, [activeChapter, activeSection, noteInput, userNotes])

  const getCurrentNote = useCallback(() => {
    if (!activeChapter || !activeSection) return ""

    const noteKey = `${activeChapter.id}-${activeSection.id}`
    return userNotes[noteKey] || ""
  }, [activeChapter, activeSection, userNotes])

  const highlightMatches = useCallback(
    (text: string) => {
      if (!localSearchQuery.trim()) return text

      const parts = text.split(new RegExp(`(${localSearchQuery})`, "gi"))
      return parts.map((part, i) =>
        part.toLowerCase() === localSearchQuery.toLowerCase() ? (
          <mark key={i} className="bg-yellow-200 dark:bg-yellow-800">
            {part}
          </mark>
        ) : (
          part
        ),
      )
    },
    [localSearchQuery],
  )

  const renderContent = useCallback(() => {
    if (!activeSection) return null

    let content = activeSection.content

    // Apply highlights to the content
    highlightedText.forEach((highlight) => {
      content = content.split(highlight).join(`<span class="bg-green-200 dark:bg-green-800">${highlight}</span>`)
    })

    // Apply search highlighting
    if (localSearchQuery.trim()) {
      const regex = new RegExp(`(${localSearchQuery})`, "gi")
      content = content.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>')
    }

    return (
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        onMouseUp={handleTextSelection}
        className="whitespace-pre-line"
      />
    )
  }, [activeSection, highlightedText, localSearchQuery, handleTextSelection])

  const navigatePrevious = useCallback(() => {
    if (!activeChapter || !activeSection) return

    const currentSectionIndex = activeChapter.sections.findIndex((s) => s.id === activeSection.id)

    if (currentSectionIndex > 0) {
      // Go to previous section in same chapter
      changeSection(activeChapter.sections[currentSectionIndex - 1].id)
    } else {
      // Go to last section of previous chapter
      const currentChapterIndex = chapters.findIndex((c) => c.id === activeChapter.id)
      if (currentChapterIndex > 0) {
        const prevChapter = chapters[currentChapterIndex - 1]
        setActiveChapter(prevChapter)
        setActiveSection(prevChapter.sections[prevChapter.sections.length - 1])
      }
    }
  }, [activeChapter, activeSection, chapters, changeSection])

  const navigateNext = useCallback(() => {
    if (!activeChapter || !activeSection) return

    const currentSectionIndex = activeChapter.sections.findIndex((s) => s.id === activeSection.id)

    if (currentSectionIndex < activeChapter.sections.length - 1) {
      // Go to next section in same chapter
      changeSection(activeChapter.sections[currentSectionIndex + 1].id)
    } else {
      // Go to first section of next chapter
      const currentChapterIndex = chapters.findIndex((c) => c.id === activeChapter.id)
      if (currentChapterIndex < chapters.length - 1) {
        const nextChapter = chapters[currentChapterIndex + 1]
        setActiveChapter(nextChapter)
        setActiveSection(nextChapter.sections[0])
      }
    }
  }, [activeChapter, activeSection, chapters, changeSection])

  // Don't render full content on server to avoid hydration mismatches
  if (!isClient) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center p-8">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-gray-900"></div>
          <span className="ml-2">Loading constitution reader...</span>
        </CardContent>
      </Card>
    )
  }

  if (chapters.length === 0) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center p-8">
          <p>No constitution data available. Please check your data source.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className={`flex flex-col border rounded-lg shadow-sm ${darkMode ? "dark" : ""}`}>
      {/* Top toolbar */}
      <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mr-2"
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
          <h1 className="text-xl font-bold truncate">
            {activeChapter?.title} {activeSection && `- ${activeSection.title}`}
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setFontSize(Math.max(12, fontSize - 2))}
            aria-label="Decrease font size"
          >
            A-
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setFontSize(Math.min(24, fontSize + 2))}
            aria-label="Increase font size"
          >
            A+
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {sidebarOpen && (
          <div className="w-80 border-r dark:border-gray-700 flex flex-col">
            <ConstitutionTOC
              chapters={chapters}
              activeChapterId={activeChapter?.id}
              activeSectionId={activeSection?.id}
              onChapterSelect={handleChapterSelect}
              onSectionSelect={handleSectionSelect}
            />
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Content area */}
          <div
            ref={contentRef}
            className="flex-1 overflow-y-auto p-6 md:p-8 dark:bg-gray-900 dark:text-white"
            style={{ fontSize: `${fontSize}px` }}
          >
            {activeChapter && activeSection && (
              <>
                <div className="max-w-3xl mx-auto">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-1">{activeChapter.fullTitle}</h2>
                    <h3 className="text-xl font-semibold mb-4">{activeSection.title}</h3>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={toggleBookmark}
                        className={`inline-flex items-center ${
                          isBookmarked() ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" : ""
                        }`}
                      >
                        <Bookmark size={16} className="mr-1" />
                        {isBookmarked() ? "Bookmarked" : "Bookmark"}
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={copyToClipboard}
                        className="inline-flex items-center"
                      >
                        <Copy size={16} className="mr-1" />
                        Copy
                      </Button>

                      <Button variant="outline" size="sm" onClick={shareSection} className="inline-flex items-center">
                        <Share2 size={16} className="mr-1" />
                        Share
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={toggleTextToSpeech}
                        className={`inline-flex items-center ${
                          isSpeaking ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : ""
                        }`}
                      >
                        {isSpeaking ? (
                          <>
                            <VolumeX size={16} className="mr-1" />
                            Stop Reading
                          </>
                        ) : (
                          <>
                            <Volume2 size={16} className="mr-1" />
                            Read Aloud
                          </>
                        )}
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowExplanation(!showExplanation)}
                        className={`inline-flex items-center ${
                          showExplanation ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : ""
                        }`}
                      >
                        <BookOpen size={16} className="mr-1" />
                        {showExplanation ? "Hide Explanation" : "Show Explanation"}
                      </Button>
                    </div>

                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                      <TabsList className="mb-4">
                        <TabsTrigger value="full">Full Text</TabsTrigger>
                        <TabsTrigger value="simplified">Simplified</TabsTrigger>
                        <TabsTrigger value="annotations">Annotations</TabsTrigger>
                      </TabsList>

                      <TabsContent value="full">
                        <div className="prose max-w-none dark:prose-invert">{renderContent()}</div>
                      </TabsContent>

                      <TabsContent value="simplified">
                        <div className="bg-muted p-4 rounded-lg mb-4">
                          <p className="text-sm">
                            This is a simplified explanation of this section. It is not a legal document and should not
                            be used as a substitute for the official text of the Constitution.
                          </p>
                        </div>
                        <div className="prose max-w-none dark:prose-invert">
                          <p>
                            {activeSection.id === "1" && activeChapter.id === 1
                              ? "This section establishes that the Constitution is the highest law in Nigeria. All other laws, government actions, and decisions must follow what the Constitution says. If any law goes against the Constitution, that law is invalid."
                              : `This section of the Constitution deals with ${activeSection.title.toLowerCase()}. It establishes important principles that govern how this aspect of Nigerian governance works.`}
                          </p>
                        </div>
                      </TabsContent>

                      <TabsContent value="annotations">
                        <div className="bg-muted p-4 rounded-lg mb-4">
                          <p className="text-sm">
                            These annotations provide additional context, relevant court cases, and interpretations.
                            They are for educational purposes only.
                          </p>
                        </div>
                        <div className="prose max-w-none dark:prose-invert">
                          <h4 className="font-medium">Relevant Cases:</h4>
                          <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>Attorney-General of the Federation v. Attorney-General of Abia State & Ors (2001)</li>
                            <li>Abacha v. Fawehinmi (2000)</li>
                            <li>Inakoju v. Adeleke (2007)</li>
                          </ul>

                          <h4 className="font-medium mt-4">Interpretations:</h4>
                          <p className="mt-2">
                            The Supreme Court has consistently upheld the principles in this section in numerous cases,
                            establishing important precedents for Nigerian constitutional law.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>

                    {showExplanation && activeTab === "full" && (
                      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <h4 className="font-medium mb-2 text-blue-800 dark:text-blue-300">Simplified Explanation</h4>
                        <p className="text-blue-700 dark:text-blue-200">
                          {activeSection.id === "1" && activeChapter.id === 1
                            ? "This section establishes that the Constitution is the highest law in Nigeria. All other laws, government actions, and decisions must follow what the Constitution says. If any law goes against the Constitution, that law is invalid."
                            : `This section of the Constitution deals with ${activeSection.title.toLowerCase()}. It establishes important principles that govern how this aspect of Nigerian governance works.`}
                        </p>
                      </div>
                    )}

                    {/* User notes section */}
                    <div className="mt-8 border-t dark:border-gray-700 pt-6">
                      <h4 className="font-medium mb-2">Your Notes</h4>
                      {getCurrentNote() ? (
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg mb-4">
                          <p className="whitespace-pre-line">{getCurrentNote()}</p>
                          <Button
                            variant="link"
                            size="sm"
                            onClick={() => setNoteInput(getCurrentNote())}
                            className="mt-2 p-0 h-auto text-blue-600 dark:text-blue-400"
                          >
                            Edit Note
                          </Button>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          Add your personal notes about this section
                        </p>
                      )}
                      <Textarea
                        value={noteInput}
                        onChange={(e) => setNoteInput(e.target.value)}
                        placeholder="Write your notes here..."
                        className="w-full"
                        rows={3}
                      />
                      <Button onClick={saveNote} disabled={!noteInput.trim()} className="mt-2">
                        Save Note
                      </Button>
                    </div>

                    {/* Highlights section */}
                    {highlightedText.length > 0 && (
                      <div className="mt-8 border-t dark:border-gray-700 pt-6">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Highlighter size={16} className="mr-2" />
                          Your Highlights
                        </h4>
                        <div className="space-y-2">
                          {highlightedText.map((text, index) => (
                            <div
                              key={`highlight-${index}`}
                              className="flex items-start gap-2 p-2 bg-green-50 dark:bg-green-900/20 rounded-md"
                            >
                              <p className="flex-1 text-sm">"{text}"</p>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeHighlight(text)}
                                className="text-red-600 dark:text-red-400 hover:text-red-800 p-1 h-auto"
                                aria-label="Remove highlight"
                              >
                                <X size={16} />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Navigation buttons */}
                    <div className="mt-8 border-t dark:border-gray-700 pt-6 flex justify-between">
                      <Button variant="outline" onClick={navigatePrevious} className="flex items-center">
                        <ChevronLeft size={16} className="mr-1" />
                        Previous Section
                      </Button>
                      <Button variant="outline" onClick={navigateNext} className="flex items-center">
                        Next Section
                        <ChevronRight size={16} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

