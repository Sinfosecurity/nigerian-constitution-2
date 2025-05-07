"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  BookOpen,
  FileText,
  Search,
  BookMarked,
  Download,
  Info,
  User,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Add imports for language context and translation hook
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";
import { useAuth } from "@/hooks/useAuth";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { user, signOut } = useAuth();

  // Add these lines to use translations
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage.code);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">{t("nav.toggleMenu")}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 py-6">
          {user && (
            <div className="flex items-center gap-2 px-4">
              <Avatar className="h-10 w-10">
                <AvatarFallback>
                  {user?.user_metadata?.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{user?.user_metadata?.name}</p>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
            </div>
          )}

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="constitution">
              <AccordionTrigger className="text-lg font-medium">
                {t("nav.constitution")}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2 pl-4">
                  <SheetClose asChild>
                    <Link
                      href="/constitution/table-of-content"
                      className="flex items-center py-2 text-sm hover:text-primary transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      {t("nav.tableOfContents")}
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link
                      href="/constitution/full"
                      className="flex items-center py-2 text-sm hover:text-primary transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      <BookMarked className="mr-2 h-4 w-4" />
                      {t("nav.fullText")}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/constitution/download"
                      className="flex items-center py-2 text-sm hover:text-primary transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {t("nav.download")}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/constitution/about"
                      className="flex items-center py-2 text-sm hover:text-primary transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      <Info className="mr-2 h-4 w-4" />
                      {t("nav.about")}
                    </Link>
                  </SheetClose>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <SheetClose asChild>
            <Link
              href="/learn"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {t("nav.learn")}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/community"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {t("nav.community")}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/resources"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {t("nav.resources")}
            </Link>
          </SheetClose>

          {user ? (
            <div className="flex flex-col gap-2 mt-4">
              <SheetClose asChild>
                <Link
                  href="/profile"
                  className="flex items-center text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </SheetClose>
              <Button
                variant="destructive"
                onClick={() => {
                  signOut();
                  setOpen(false);
                  window.location.href = "/login";
                }}
                className="flex items-center justify-center"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" asChild>
                <Link href="/login" onClick={() => setOpen(false)}>
                  {t("nav.signIn")}
                </Link>
              </Button>
              <Button asChild>
                <Link href="/register" onClick={() => setOpen(false)}>
                  {t("nav.signUp")}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
