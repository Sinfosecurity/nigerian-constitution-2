"use client";

import { useEffect } from "react";

import { HeroSection } from "@/components/hero-section";
import { Statistics } from "@/components/statistics";
import { Testimonials } from "@/components/testimonials";
import { useAuth } from "@/hooks/useAuth";
// import { NewsletterSubscription } from "@/components/newsletter-subscription";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";
import { useUser } from "@/hooks/useUser";

export function HomePageContent() {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage.code);

  return (
    <>
      <HeroSection />

      <Statistics />

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t("home.explore.title")}
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[700px]">
              {t("home.explore.subtitle")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="text-xl font-bold mb-2">
                {t("home.explore.card1.title")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {t("home.explore.card1.description")}
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/constitution">
                  {t("home.explore.card1.button")}{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="text-xl font-bold mb-2">
                {t("home.explore.card2.title")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {t("home.explore.card2.description")}
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/chat">
                  {t("home.explore.card2.button")}{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="text-xl font-bold mb-2">
                {t("home.explore.card3.title")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {t("home.explore.card3.description")}
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/learn">
                  {t("home.explore.card3.button")}{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <NewsletterSubscription />
          </div>
        </div>
      </section> */}

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-green-800 dark:text-green-200">
              {t("home.community.title")}
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[700px]">
              {t("home.community.subtitle")}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-600"
              asChild
            >
              <Link href="/community">
                {t("home.community.button1")}{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-200 text-green-600 hover:bg-green-50 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/30"
              asChild
            >
              <Link href="/community/ask-expert">
                {t("home.community.button2")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
