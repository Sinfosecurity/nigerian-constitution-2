"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";

export function SiteFooter() {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage.code);

  const footerLinks = {
    resources: [
      { label: t("nav.constitution"), href: "/constitution" },
      { label: t("nav.learn"), href: "/learn" },
      { label: t("nav.community"), href: "/community" },
      { label: t("nav.resources"), href: "/resources" },
    ],
    legal: [
      { label: t("footer.privacyPolicy"), href: "/privacy" },
      { label: t("footer.termsOfService"), href: "/terms" },
      { label: t("footer.disclaimer"), href: "/disclaimer" },
    ],
    social: [
      { label: t("footer.twitter"), href: "https://twitter.com" },
      { label: t("footer.facebook"), href: "https://facebook.com" },
      { label: t("footer.linkedin"), href: "https://linkedin.com" },
    ],
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-green-100 bg-white dark:border-green-900 dark:bg-gray-950">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-bold text-xl text-green-800 dark:text-green-200"
            >
              {t("app.title")}
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              {t("app.description")}
            </p>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-4">
              {t("footer.resources")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-4">
              {t("footer.legal")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-4">
              {t("footer.followUs")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-green-100 dark:border-green-900">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} {t("footer.copyright")}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
