"use client";

import { PageLayout } from "@/components/page-layout";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";
import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";

export default function PrivacyPolicyPage() {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage.code);
  const { user } = useAuth();
  if (user?.role === "authenticated")
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-green-800 dark:text-green-200 mb-8">
              {t("privacy.title")}
            </h1>

            <div className="prose dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                  {t("privacy.introduction.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t("privacy.introduction.content")}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                  {t("privacy.dataCollection.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t("privacy.dataCollection.content")}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li key={i}>{t(`privacy.dataCollection.items.${i}`)}</li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                  {t("privacy.dataUsage.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t("privacy.dataUsage.content")}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i}>{t(`privacy.dataUsage.items.${i}`)}</li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                  {t("privacy.security.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("privacy.security.content")}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                  {t("privacy.cookies.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("privacy.cookies.content")}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                  {t("privacy.rights.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t("privacy.rights.content")}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li key={i}>{t(`privacy.rights.items.${i}`)}</li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                  {t("privacy.contact.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("privacy.contact.content")}
                </p>
              </section>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  else {
    redirect("/login");
  }
}
