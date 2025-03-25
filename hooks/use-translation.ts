"use client"

import { useCallback } from "react"
import { getTranslation } from "@/services/translation-service"

// Custom hook to get translations based on the current language
export function useTranslation(language = "en") {
  // Function to get a translation for a key
  const t = useCallback(
    (key: string, replacements?: Record<string, string>) => {
      let translation = getTranslation(key, language)

      // Replace placeholders with actual values if provided
      if (replacements) {
        Object.entries(replacements).forEach(([placeholder, value]) => {
          translation = translation.replace(new RegExp(`{{${placeholder}}}`, "g"), value)
        })
      }

      return translation
    },
    [language],
  )

  return { t }
}

