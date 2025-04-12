"use client";

import { PageLayout } from "@/components/page-layout";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";

export default function TermsOfServicePage() {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage.code);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 dark:text-green-200 mb-8">
            {t("terms.title")}
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                {t("terms.acceptance.title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {t("terms.acceptance.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                {t("terms.usage.title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {t("terms.usage.content")}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i}>{t(`terms.usage.items.${i}`)}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                {t("terms.content.title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {t("terms.content.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                {t("terms.intellectual.title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {t("terms.intellectual.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                {t("terms.liability.title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {t("terms.liability.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                {t("terms.termination.title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {t("terms.termination.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                {t("terms.governing.title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {t("terms.governing.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                {t("terms.contact.title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {t("terms.contact.content")}
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
