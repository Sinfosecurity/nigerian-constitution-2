"use client"

import Link from "next/link"

// Add imports for language context and translation hook
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"

export function SiteFooter() {
  // Add these lines to use translations
  const { currentLanguage } = useLanguage()
  const { t } = useTranslation(currentLanguage.code)

  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-6 py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">{t("nav.constitution")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/constitution/full"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav.fullText")}
                </Link>
              </li>
              <li>
                <Link
                  href="/constitution/chapters"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav.chapters")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">{t("nav.learn")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/learn/explanations"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav.explanations")}
                </Link>
              </li>
              <li>
                <Link href="/learn/quizzes" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.quizzes")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">{t("nav.community")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/community/forum" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.forum")}
                </Link>
              </li>
              <li>
                <Link
                  href="/community/ask-expert"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav.askExpert")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">{t("nav.resources")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/resources/videos"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav.videos")}
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/infographics"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav.infographics")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">{t("nav.about")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-primary font-medium">
            © {new Date().getFullYear()} Nigerian Constitution Hub. All rights reserved - Website brought to you with ❤️
            by Adebayo Shobaloju - Supreme Information Security LLC, NYC, USA
          </p>
        </div>
      </div>
    </footer>
  )
}

