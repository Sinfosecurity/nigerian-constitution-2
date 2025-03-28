// "use client";

// import Link from "next/link";
// import { BookOpen, User, LogOut } from "lucide-react";
// import { MobileNav } from "@/components/mobile-nav";
// import { ModeToggle } from "@/components/mode-toggle";
// import { LanguageSwitcher } from "@/components/language-switcher";
// import { ConstitutionNav } from "@/components/constitution-nav";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { useLanguage } from "@/contexts/language-context";
// import { useTranslation } from "@/hooks/use-translation";
// import { usePathname } from "next/navigation";
// import { useState, useEffect } from "react";
// import { useAuth } from "@/contexts/auth-context";

// export function SiteHeader() {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const { user, logout } = useAuth();
//   const { currentLanguage } = useLanguage();
//   const { t } = useTranslation(currentLanguage.code);

//   const isActive = (path: string) => pathname === path;

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-green-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:border-green-900">
//       <div className="container flex h-16 items-center justify-between py-4">
//         <div className="flex items-center gap-2">
//           <Link href="/" className="flex items-center gap-2">
//             <BookOpen className="h-6 w-6 text-green-600" />
//             <span className="text-xl font-bold text-green-800 dark:text-green-200">
//               {t("app.title")}
//             </span>
//           </Link>
//         </div>
//         <nav className="hidden md:flex items-center gap-6">
//           <ConstitutionNav />
//           <Link
//             href="/learn"
//             className={`text-sm font-medium transition-colors ${
//               isActive("/learn")
//                 ? "text-green-600 dark:text-green-400"
//                 : "text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
//             }`}
//           >
//             {t("nav.learn")}
//           </Link>
//           <Link
//             href="/community"
//             className={`text-sm font-medium transition-colors ${
//               isActive("/community")
//                 ? "text-green-600 dark:text-green-400"
//                 : "text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
//             }`}
//           >
//             {t("nav.community")}
//           </Link>
//           <Link
//             href="/resources"
//             className={`text-sm font-medium transition-colors ${
//               isActive("/resources")
//                 ? "text-green-600 dark:text-green-400"
//                 : "text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
//             }`}
//           >
//             {t("nav.resources")}
//           </Link>
//         </nav>
//         <div className="flex items-center gap-4">
//           <LanguageSwitcher />
//           <ModeToggle />

//           <div>
//             Logout <span></span>
//           </div>
//           <MobileNav />
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
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
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth"; // Updated import path
import { getCurrentUser } from "@/services/apiAuth";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { signOut, user } = useAuth(); // Updated to use signOut
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage.code);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Helper function to get initials
  const getInitials = (name?: string) => {
    if (!name) return "U";
    const names = name.split(" ");
    return names
      .map((n) => n[0].toUpperCase())
      .slice(0, 2)
      .join("");
  };

  // If not mounted or user is not loaded, return null or a placeholder
  if (!mounted) return null;

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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={user?.user_metadata?.avatar_url || undefined}
                    alt={user?.email || "User avatar"}
                  />
                  <AvatarFallback>
                    {getInitials(user?.user_metadata?.name || user?.email)}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuItem disabled>
                <User className="mr-2 h-4 w-4" />
                <span>{user?.user_metadata?.name || user?.email}</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={signOut}
                className="text-red-600 cursor-pointer"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
