// "use client"

// import Link from "next/link"
// import { BookOpen, User, LogOut } from "lucide-react"
// import { MobileNav } from "@/components/mobile-nav"
// import { ModeToggle } from "@/components/mode-toggle"
// import { LanguageSwitcher } from "@/components/language-switcher"
// import { ConstitutionNav } from "@/components/constitution-nav"
// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback } from "@/components/ui/avatar"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// // Add imports for language context and translation hook
// import { useLanguage } from "@/contexts/language-context"
// import { useTranslation } from "@/hooks/use-translation"
// import { usePathname } from "next/navigation"
// import { useState, useEffect } from "react"
// import { useAuth } from "@/contexts/auth-context"

// export function SiteHeader() {
//   const pathname = usePathname()
//   const [isOpen, setIsOpen] = useState(false)
//   const [mounted, setMounted] = useState(false)
//   const { user, logout } = useAuth()

//   // Add these lines to use translations
//   const { currentLanguage } = useLanguage()
//   const { t } = useTranslation(currentLanguage.code)

//   const isActive = (path: string) => pathname === path

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center justify-between py-4">
//         <div className="flex items-center gap-2">
//           <Link href="/" className="flex items-center gap-2">
//             <BookOpen className="h-6 w-6" />
//             <span className="text-xl font-bold">{t("app.title")}</span>
//           </Link>
//         </div>
//         <nav className="hidden md:flex items-center gap-6">
//           <ConstitutionNav />
//           <Link href="/learn" className="text-sm font-medium hover:text-primary transition-colors">
//             {t("nav.learn")}
//           </Link>
//           <Link href="/community" className="text-sm font-medium hover:text-primary transition-colors">
//             {t("nav.community")}
//           </Link>
//           <Link href="/resources" className="text-sm font-medium hover:text-primary transition-colors">
//             {t("nav.resources")}
//           </Link>
//         </nav>
//         <div className="flex items-center gap-4">
//           <LanguageSwitcher />
//           <ModeToggle />

//           {mounted && user?.isLoggedIn ? (
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" className="relative h-8 w-8 rounded-full">
//                   <Avatar className="h-8 w-8">
//                     <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
//                   </Avatar>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <div className="flex items-center justify-start gap-2 p-2">
//                   <div className="flex flex-col space-y-1 leading-none">
//                     <p className="font-medium">{user.name}</p>
//                     <p className="text-sm text-muted-foreground">{user.email}</p>
//                   </div>
//                 </div>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem asChild>
//                   <Link href="/profile">
//                     <User className="mr-2 h-4 w-4" />
//                     <span>Profile</span>
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem
//                   onClick={() => {
//                     logout()
//                     window.location.href = "/"
//                   }}
//                 >
//                   <LogOut className="mr-2 h-4 w-4" />
//                   <span>Log out</span>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           ) : (
//             <>
//               <Link
//                 href="/login"
//                 className="hidden md:inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
//               >
//                 {t("nav.signIn")}
//               </Link>
//               <Link
//                 href="/register"
//                 className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
//               >
//                 {t("nav.signUp")}
//               </Link>
//             </>
//           )}
//           <MobileNav />
//         </div>
//       </div>
//     </header>
//   )
// }

"use client";

import Link from "next/link";
import { BookOpen, User, LogOut } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ConstitutionNav } from "@/components/constitution-nav";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/auth-context";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { user, logout } = useAuth();
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage.code);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:border-green-900">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-green-800 dark:text-green-200">
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
          <ModeToggle />

          {mounted && user?.isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full border border-green-200 hover:bg-green-50"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-green-100 text-green-600">
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 border-green-100"
              >
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium text-green-800 dark:text-green-200">
                      {user.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {user.email}
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator className="bg-green-100" />
                <DropdownMenuItem asChild>
                  <Link
                    href="/profile"
                    className="flex items-center text-gray-600 hover:text-green-600"
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    logout();
                    window.location.href = "/";
                  }}
                  className="text-gray-600 hover:text-green-600"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden md:inline-flex h-9 items-center justify-center rounded-md border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-600 shadow-sm transition-colors hover:bg-green-50 dark:bg-gray-950 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/30"
              >
                {t("nav.signIn")}
              </Link>
              <Link
                href="/register"
                className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
              >
                {t("nav.signUp")}
              </Link>
            </>
          )}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
