"use client";

import Link from "next/link";
import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { createPost } from "@/app/actions/post";
import { redirect, useRouter } from "next/navigation";
import { FormData } from "@/app/types/post";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";

interface Posts {
  posts: {
    id: number;
    title: string;
    content: string;
    created_at: string;
  }[];
}

export default function DiscussionPage({ posts }: Posts) {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage.code);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const discussionList = posts;
  const { user } = useAuth();
  const fullname = user?.user_metadata?.name;

  const handleSubmit = async (formData: FormData) => {
    try {
      setIsSubmitting(true);
      await createPost(formData);
      setIsModalOpen(false);
      router.refresh();
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (user?.role === "authenticated")
    return (
      <PageLayout>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold tracking-tighter text-green-800 dark:text-green-200 sm:text-5xl">
                {t("community.title")}
              </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-400 md:text-xl max-w-[700px] mx-auto">
                {t("community.subtitle")}
              </p>
            </div>

            {/* <div className="flex flex-col gap-4 items-center justify-center sm:flex-row">
            <Link
              href="/community/forum"
              className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              {t("community.joinDiscussion")}
            </Link>
            <Link
              href="/community/ask-expert"
              className="inline-flex h-10 items-center justify-center rounded-md border border-green-200 bg-white px-8 text-sm font-medium text-green-600 shadow-sm transition-colors hover:bg-green-50 dark:bg-gray-950 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/30"
            >
              {t("community.askExpert")}
            </Link>
          </div> */}
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-green-800 dark:text-green-200">
                {t("community.recentDiscussions")}
              </h2>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
              >
                {t("community.newDiscussion")}
              </button>
            </div>

            <div className="space-y-4">
              {discussionList.map((topic, index) => (
                <div
                  key={`topic-${topic.id}-${index}`}
                  className="rounded-lg border border-green-100 bg-white text-gray-950 shadow-sm overflow-hidden hover:border-green-200 transition-colors dark:bg-gray-900 dark:border-green-900"
                >
                  <Link href={`/community/discussion/${topic.id}`}>
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="text-sm font-medium text-green-700 dark:text-green-300">
                          {fullname}
                        </span>
                        <span className="text-xs text-gray-500 ml-2">
                          •{" "}
                          {topic.created_at &&
                            new Date(topic.created_at).toLocaleString()}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-green-800 hover:text-green-600 dark:text-green-200 dark:hover:text-green-400">
                        {topic.title}
                      </h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Discussion Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-green-800 dark:text-green-200">
                  {t("community.modal.title")}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>

              <form action={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="topic"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    {t("community.modal.topicLabel")}
                  </label>
                  <input
                    type="text"
                    id="topic"
                    name="topic"
                    required
                    className="w-full px-3 py-2 border border-green-200 dark:border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="body"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    {t("community.modal.bodyLabel")}
                  </label>
                  <textarea
                    id="body"
                    name="body"
                    rows={5}
                    required
                    className="w-full px-3 py-2 border border-green-200 dark:border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="mr-2 px-4 py-2 border border-green-200 dark:border-green-700 rounded-md hover:bg-green-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {t("community.modal.cancelButton")}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-green-400 dark:bg-green-700 dark:hover:bg-green-600 dark:disabled:bg-green-800"
                  >
                    {isSubmitting
                      ? t("community.modal.submitting")
                      : t("community.modal.submitButton")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </PageLayout>
    );
}
