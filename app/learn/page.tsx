// import Link from "next/link";
// import { PageLayout } from "@/components/page-layout";

// export default function LearnPage() {
//   return (
//     <PageLayout>
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-gray-950">
//         <div className="container px-4 md:px-6">
//           <div className="text-center mb-10">
//             <h1 className="text-3xl font-bold tracking-tighter text-green-800 dark:text-green-200 sm:text-5xl">
//               Learn the Nigerian Constitution
//             </h1>
//             <p className="mt-4 text-gray-600 dark:text-gray-400 md:text-xl max-w-[700px] mx-auto">
//               Explore our interactive learning resources designed to help you
//               understand the Nigerian Constitution in simple, accessible
//               language.
//             </p>
//           </div>

//           <div className="flex flex-col gap-4 items-center justify-center sm:flex-row">
//             <Link
//               href="/learn/quizzes"
//               className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
//             >
//               Take a Quiz
//             </Link>
//             <Link
//               href="/chat"
//               className="inline-flex h-10 items-center justify-center rounded-md border border-green-200 bg-white px-8 text-sm font-medium text-green-600 shadow-sm transition-colors hover:bg-green-50 dark:bg-gray-950 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/30"
//             >
//               Chat with AI
//             </Link>
//           </div>
//         </div>
//       </section>

//       <section id="explanations" className="w-full py-12 md:py-24 lg:py-32">
//         <div className="container px-4 md:px-6">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-bold tracking-tighter text-green-800 dark:text-green-200 sm:text-5xl">
//               Simplified Explanations
//             </h2>
//             <p className="mt-4 text-gray-600 dark:text-gray-400 md:text-xl max-w-[700px] mx-auto">
//               Understanding complex legal concepts made easy with plain language
//               explanations.
//             </p>
//           </div>

//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 title: "Fundamental Rights",
//                 description: "Chapter IV of the Constitution",
//                 content:
//                   "Learn about the rights guaranteed to every Nigerian citizen, including the right to life, dignity, personal liberty, fair hearing, privacy, freedom of thought, expression, and more.",
//                 link: "/learn/fundamental-rights",
//               },
//               {
//                 title: "Federal System of Government",
//                 description: "Chapters V, VI, and VII",
//                 content:
//                   "Understand how power is shared between the federal, state, and local governments in Nigeria, including the roles of the legislature, executive, and judiciary at each level.",
//                 link: "/learn/federal-system",
//               },
//               {
//                 title: "Citizenship Rights",
//                 description: "Chapter III of the Constitution",
//                 content:
//                   "Learn about who qualifies as a Nigerian citizen, how citizenship can be acquired, and the rights and privileges that come with Nigerian citizenship.",
//                 link: "/learn/citizenship",
//               },
//             ].map((item, index) => (
//               <div
//                 key={`explanation-${index}`}
//                 className="rounded-lg border border-green-100 bg-white text-gray-950 shadow-sm dark:bg-gray-900 dark:border-green-900"
//               >
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold text-green-800 dark:text-green-200">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">
//                     {item.description}
//                   </p>
//                   <div className="mt-4">
//                     <p className="text-sm text-gray-600 dark:text-gray-400">
//                       {item.content}
//                     </p>
//                   </div>
//                   <div className="mt-4">
//                     <Link
//                       href={item.link}
//                       className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-700 dark:bg-gray-900 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/30"
//                     >
//                       Read Explanation
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </PageLayout>
//   );
// }

"use client";

import Link from "next/link";
import { PageLayout } from "@/components/page-layout";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";

export default function LearnPage() {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage.code);

  const learningItems = [
    {
      title: t("learn.fundamentalRights.title"),
      description: t("learn.fundamentalRights.description"),
      content: t("learn.fundamentalRights.content"),
      link: "/learn/fundamental-rights",
    },
    {
      title: t("learn.federalSystem.title"),
      description: t("learn.federalSystem.description"),
      content: t("learn.federalSystem.content"),
      link: "/learn/federal-system",
    },
    {
      title: t("learn.citizenship.title"),
      description: t("learn.citizenship.description"),
      content: t("learn.citizenship.content"),
      link: "/learn/citizenship",
    },
  ];

  return (
    <PageLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tighter text-green-800 dark:text-green-200 sm:text-5xl">
              {t("learn.title")}
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400 md:text-xl max-w-[700px] mx-auto">
              {t("learn.subtitle")}
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center sm:flex-row">
            <Link
              href="/learn/quizzes"
              className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
            >
              {t("learn.quizButton")}
            </Link>
            <Link
              href="/chat"
              className="inline-flex h-10 items-center justify-center rounded-md border border-green-200 bg-white px-8 text-sm font-medium text-green-600 shadow-sm transition-colors hover:bg-green-50 dark:bg-gray-950 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/30"
            >
              {t("learn.chatButton")}
            </Link>
          </div>
        </div>
      </section>

      <section id="explanations" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter text-green-800 dark:text-green-200 sm:text-5xl">
              {t("learn.explanations.title")}
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 md:text-xl max-w-[700px] mx-auto">
              {t("learn.explanations.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {learningItems.map((item, index) => (
              <div
                key={`explanation-${index}`}
                className="rounded-lg border border-green-100 bg-white text-gray-950 shadow-sm dark:bg-gray-900 dark:border-green-900"
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold text-green-800 dark:text-green-200">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.content}
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link
                      href={item.link}
                      className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-700 dark:bg-gray-900 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/30"
                    >
                      {t("learn.readMore")}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
