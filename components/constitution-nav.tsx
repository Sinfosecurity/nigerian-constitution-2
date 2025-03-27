"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Search,
  FileText,
  BookMarked,
  Download,
  Info,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Add imports for language context and translation hook
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";

export function ConstitutionNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Add these lines to use translations
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage.code);

  const isActive = (path: string) => pathname === path;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "text-sm font-medium",
              pathname.startsWith("/constitution") && "text-primary"
            )}
            onMouseOver={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {t("nav.constitution")}
          </NavigationMenuTrigger>
          <NavigationMenuContent
            className="w-[400px] lg:w-[500px]"
            onMouseOver={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="grid gap-3 p-4 md:grid-cols-2">
              {/* <Link href="/constitution" passHref legacyBehavior>
                <NavigationMenuLink
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-green-600-foreground focus:bg-accent focus:text-accent-foreground",
                    isActive("/constitution")
                      ? "text-green-600 dark:text-green-400"
                      : "text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                  )}
                >
                  <div className="flex items-center gap-2 text-sm font-medium leading-none">
                    <BookOpen className="h-4 w-4" />
                    <span>{t("nav.interactiveReader")}</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {t("nav.interactiveReaderDesc")}
                  </p>
                </NavigationMenuLink>
              </Link> */}

              <Link
                href="/constitution/table-of-contents"
                passHref
                legacyBehavior
              >
                <NavigationMenuLink
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-green-600-foreground focus:bg-accent focus:text-accent-foreground",
                    isActive("/constitution/table-of-contents")
                      ? "text-green-600 dark:text-green-400"
                      : "text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                  )}
                >
                  <div className="flex items-center gap-2 text-sm font-medium leading-none">
                    <FileText className="h-4 w-4" />
                    <span>{t("nav.tableOfContents")}</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {t("nav.tableOfContentsDesc")}
                  </p>
                </NavigationMenuLink>
              </Link>

              {/* <Link href="/constitution/search" passHref legacyBehavior>
                <NavigationMenuLink
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-green-600-foreground focus:bg-accent focus:text-accent-foreground",
                    isActive("/constitution/search")
                      ? "text-green-600 dark:text-green-400"
                      : "text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                  )}
                >
                  <div className="flex items-center gap-2 text-sm font-medium leading-none">
                    <Search className="h-4 w-4" />
                    <span>{t("nav.search")}</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {t("nav.searchDesc")}
                  </p>
                </NavigationMenuLink>
              </Link> */}

              <Link href="/constitution/full" passHref legacyBehavior>
                <NavigationMenuLink
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-green-600-foreground focus:bg-accent focus:text-accent-foreground",
                    isActive("/constitution/full")
                      ? "text-green-600 dark:text-green-400"
                      : "text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                  )}
                >
                  <div className="flex items-center gap-2 text-sm font-medium leading-none">
                    <BookMarked className="h-4 w-4" />
                    <span>{t("nav.fullText")}</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {t("nav.fullTextDesc")}
                  </p>
                </NavigationMenuLink>
              </Link>

              <Link href="/constitution/download" passHref legacyBehavior>
                <NavigationMenuLink
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-green-600-foreground focus:bg-accent focus:text-accent-foreground",
                    isActive("/constitution/download")
                      ? "text-green-600 dark:text-green-400"
                      : "text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                  )}
                >
                  <div className="flex items-center gap-2 text-sm font-medium leading-none">
                    <Download className="h-4 w-4" />
                    <span>{t("nav.download")}</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {t("nav.downloadDesc")}
                  </p>
                </NavigationMenuLink>
              </Link>

              <Link href="/constitution/about" passHref legacyBehavior>
                <NavigationMenuLink
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-green-600-foreground focus:bg-accent focus:text-accent-foreground",
                    isActive("/constitution/about")
                      ? "text-green-600 dark:text-green-400"
                      : "text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                  )}
                >
                  <div className="flex items-center gap-2 text-sm font-medium leading-none">
                    <Info className="h-4 w-4" />
                    <span>{t("nav.about")}</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {t("nav.aboutDesc")}
                  </p>
                </NavigationMenuLink>
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
