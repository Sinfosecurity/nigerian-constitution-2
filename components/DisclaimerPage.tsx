"use client";

import { PageLayout } from "@/components/page-layout";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";
import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";

export default function DisclaimerPage() {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage.code);
  const { user } = useAuth();

  if (user?.role === "authenticated")
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-green-800 dark:text-green-200 mb-8">
              {t("disclaimer.title")}
            </h1>

            <div className="prose dark:prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                  {t("disclaimer.information.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("disclaimer.information.content")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                  {t("disclaimer.accuracy.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("disclaimer.accuracy.content")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                  {t("disclaimer.legal.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("disclaimer.legal.content")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                  {t("disclaimer.external.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("disclaimer.external.content")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                  {t("disclaimer.changes.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("disclaimer.changes.content")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                  {t("disclaimer.contact.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("disclaimer.contact.content")}
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
