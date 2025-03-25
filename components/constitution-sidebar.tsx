"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Book, ChevronDown, Globe, Home, Info, Search } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ha", name: "Hausa", flag: "🇳🇬" },
  { code: "yo", name: "Yoruba", flag: "🇳🇬" },
  { code: "ig", name: "Igbo", flag: "🇳🇬" },
]

export function ConstitutionSidebar() {
  const pathname = usePathname()
  const [currentLang, setCurrentLang] = useState("en")
  const [mounted, setMounted] = useState(false)

  // Ensure we only run this on the client side
  useEffect(() => {
    setMounted(true)

    // Check if there's a language preference in localStorage
    const savedLang = localStorage.getItem("preferredLanguage")
    if (savedLang) {
      setCurrentLang(savedLang)
    }
  }, [])

  const switchLanguage = (langCode: string) => {
    setCurrentLang(langCode)
    localStorage.setItem("preferredLanguage", langCode)

    // In a real implementation, you would redirect to the localized version
    // or trigger a translation function
  }

  const currentLanguage = languages.find((lang) => lang.code === currentLang) || languages[0]

  if (!mounted) return null

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Book className="h-6 w-6" />
          <span className="font-bold text-lg">Nigerian Constitution</span>
        </Link>
        <SidebarTrigger className="md:hidden" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/"}>
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/constitution"}>
                  <Link href="/constitution">
                    <Book className="mr-2 h-4 w-4" />
                    <span>Full Constitution</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/constitution/table-of-contents"}>
                  <Link href="/constitution/table-of-contents">
                    <ChevronDown className="mr-2 h-4 w-4" />
                    <span>Table of Contents</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/constitution/search"}>
                  <Link href="/constitution/search">
                    <Search className="mr-2 h-4 w-4" />
                    <span>Search</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/constitution/about"}>
                  <Link href="/constitution/about">
                    <Info className="mr-2 h-4 w-4" />
                    <span>About</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="w-full flex items-center justify-between">
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                <span className="mr-1">{currentLanguage.flag}</span>
                <span>{currentLanguage.name}</span>
              </div>
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            {languages.map((language) => (
              <DropdownMenuItem
                key={language.code}
                onClick={() => switchLanguage(language.code)}
                className={cn(
                  "flex items-center justify-between cursor-pointer",
                  currentLang === language.code && "bg-accent",
                )}
              >
                <span>
                  <span className="mr-2">{language.flag}</span>
                  {language.name}
                </span>
                {currentLang === language.code && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 ml-2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

