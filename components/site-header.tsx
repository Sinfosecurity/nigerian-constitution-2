"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, User, LogOut } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ConstitutionNav } from "@/components/constitution-nav";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";
import { useAuth } from "@/hooks/useAuth";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { user, signOut, loading } = useAuth();
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage.code);

  console.log(user);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Helper function to get initials
  const getInitials = (name?: string) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0].toUpperCase())
      .slice(0, 2)
      .join("");
  };

  if (!mounted) return null;

  return (
    <header className="bg-white sticky top-0 z-50 w-full border-b border-green-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:border-green-900">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-green-700" />
            <span className="hidden sm:block text-xl font-bold text-green-800 dark:text-green-200">
              {t("app.title")}
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <ConstitutionNav />
          <Link
            href="/learn"
            className={`text-sm font-medium transition-colors ${
              isActive("/learn")
                ? "text-green-600 dark:text-green-400"
                : "text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
            }`}
          >
            {t("nav.learn")}
          </Link>
          <Link
            href="/community"
            className={`text-sm font-medium transition-colors ${
              isActive("/community")
                ? "text-green-600 dark:text-green-400"
                : "text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
            }`}
          >
            {t("nav.community")}
          </Link>
          <Link
            href="/resources"
            className={`text-sm font-medium transition-colors ${
              isActive("/resources")
                ? "text-green-600 dark:text-green-400"
                : "text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
            }`}
          >
            {t("nav.resources")}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          {/* <ModeToggle /> */}

          {!user ? (
            <div className="hidden md:flex gap-2">
              <Button
                variant="ghost"
                className="text-green-600 hover:text-green-700 hover:bg-green-50 dark:text-green-400 dark:hover:text-green-300"
                asChild
              >
                <Link href="/login">Sign In</Link>
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-600"
                asChild
              >
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full border-2 border-green-200 dark:border-green-800"
                >
                  <Avatar className="h-7 w-7">
                    <AvatarImage
                      src={user?.user_metadata?.avatar_url}
                      alt={user?.email || "User avatar"}
                    />
                    <AvatarFallback className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                      {getInitials(user?.user_metadata?.name || user?.email)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem className="flex flex-col items-start">
                  <div className="text-sm font-medium">
                    {user?.user_metadata?.name || "User"}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {user?.email}
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    href="/profile"
                    className="cursor-pointer hover:text-green-600 dark:hover:text-green-400"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => signOut()}
                  className="text-red-600 cursor-pointer hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/10"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
