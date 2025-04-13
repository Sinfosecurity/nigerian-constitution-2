"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { getAvailableLanguages } from "@/services/translation-service";

type Language = {
  code: string;
  name: string;
  flag: string;
};

type LanguageContextType = {
  currentLanguage: Language;
  languages: Language[];
  changeLanguage: (code: string) => void;
};

const languages = getAvailableLanguages();

const defaultContext: LanguageContextType = {
  currentLanguage: languages[0],
  languages,
  changeLanguage: () => {},
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages[0]
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("preferredLanguage");
    if (savedLang) {
      const lang = languages.find((l) => l.code === savedLang);
      if (lang) setCurrentLanguage(lang);
    }
  }, []);

  const changeLanguage = (code: string) => {
    const lang = languages.find((l) => l.code === code);
    if (lang) {
      setCurrentLanguage(lang);
      localStorage.setItem("preferredLanguage", code);

      // Force a re-render of the entire app
      window.dispatchEvent(new Event("languageChanged"));
    }
  };

  // Add an effect to listen for language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      const savedLang = localStorage.getItem("preferredLanguage");
      if (savedLang) {
        const lang = languages.find((l) => l.code === savedLang);
        if (lang && lang.code !== currentLanguage.code) {
          setCurrentLanguage(lang);
        }
      }
    };

    window.addEventListener("languageChanged", handleLanguageChange);
    return () => {
      window.removeEventListener("languageChanged", handleLanguageChange);
    };
  }, [currentLanguage.code]);

  // Avoid hydration mismatch by only rendering when mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, languages, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
