export interface Chapter {
  id: number
  title: string
  fullTitle: string
  sections: Section[]
}

export interface Section {
  id: string
  number: string
  title: string
  content: string
}

export interface SearchResult {
  chapter: Chapter
  section: Section
  matches: string[]
}

export interface Bookmark {
  chapterId: number
  sectionId: string
  title: string
  chapterTitle: string
}

export interface UserNote {
  chapterId: number
  sectionId: string
  content: string
  lastUpdated: string
}

