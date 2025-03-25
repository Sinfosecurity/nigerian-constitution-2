// import Link from "next/link"
// import { PageLayout } from "@/components/page-layout"

// export default function LearnPage() {
//   return (
//     <PageLayout>
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
//         <div className="container px-4 md:px-6">
//           <div className="text-center mb-10">
//             <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Learn the Nigerian Constitution</h1>
//             <p className="mt-4 text-gray-500 md:text-xl max-w-[700px] mx-auto">
//               Explore our interactive learning resources designed to help you understand the Nigerian Constitution in
//               simple, accessible language.
//             </p>
//           </div>

//           <div className="flex flex-col gap-4 items-center justify-center sm:flex-row">
//             <Link
//               href="#explanations"
//               className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900"
//             >
//               Explore Explanations
//             </Link>
//             <Link
//               href="#quizzes"
//               className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100"
//             >
//               Take a Quiz
//             </Link>
//           </div>
//         </div>
//       </section>

//       <section id="explanations" className="w-full py-12 md:py-24 lg:py-32">
//         <div className="container px-4 md:px-6">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simplified Explanations</h2>
//             <p className="mt-4 text-gray-500 md:text-xl max-w-[700px] mx-auto">
//               Understanding complex legal concepts made easy with plain language explanations.
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
//               <div key={`explanation-${index}`} className="rounded-lg border bg-white text-gray-950 shadow-sm">
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold">{item.title}</h3>
//                   <p className="text-sm text-gray-500">{item.description}</p>
//                   <div className="mt-4">
//                     <p className="text-sm">{item.content}</p>
//                   </div>
//                   <div className="mt-4">
//                     <Link
//                       href={item.link}
//                       className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
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

//       <section id="quizzes" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
//         <div className="container px-4 md:px-6">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Test Your Knowledge</h2>
//             <p className="mt-4 text-gray-500 md:text-xl max-w-[700px] mx-auto">
//               Challenge yourself with our interactive quizzes and assessments on the Nigerian Constitution.
//             </p>
//           </div>

//           <div className="grid gap-6 sm:grid-cols-2">
//             {[
//               {
//                 title: "Basic Rights Quiz",
//                 description: "10 questions • 10 minutes",
//                 content: "Test your knowledge of the fundamental rights guaranteed in the Nigerian Constitution.",
//                 link: "/learn/quizzes/basic-rights",
//               },
//               {
//                 title: "Government Structure Quiz",
//                 description: "8 questions • 8 minutes",
//                 content: "Test your understanding of the three branches of government in Nigeria.",
//                 link: "/learn/quizzes/government-structure",
//               },
//             ].map((quiz, index) => (
//               <div key={`quiz-${index}`} className="rounded-lg border bg-white text-gray-950 shadow-sm">
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold">{quiz.title}</h3>
//                   <p className="text-sm text-gray-500">{quiz.description}</p>
//                   <div className="mt-4">
//                     <p className="text-sm">{quiz.content}</p>
//                   </div>
//                   <div className="mt-4">
//                     <Link
//                       href={quiz.link}
//                       className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
//                     >
//                       Start Quiz
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center mt-8">
//             <Link
//               href="/learn/quizzes"
//               className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
//             >
//               View All Quizzes
//             </Link>
//           </div>
//         </div>
//       </section>
//     </PageLayout>
//   )
// }

import Link from "next/link";
import { PageLayout } from "@/components/page-layout";

export default function LearnPage() {
  return (
    <PageLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tighter text-green-800 dark:text-green-200 sm:text-5xl">
              Learn the Nigerian Constitution
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400 md:text-xl max-w-[700px] mx-auto">
              Explore our interactive learning resources designed to help you
              understand the Nigerian Constitution in simple, accessible
              language.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center sm:flex-row">
            <Link
              href="#explanations"
              className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
            >
              Explore Explanations
            </Link>
            <Link
              href="#quizzes"
              className="inline-flex h-10 items-center justify-center rounded-md border border-green-200 bg-white px-8 text-sm font-medium text-green-600 shadow-sm transition-colors hover:bg-green-50 dark:bg-gray-950 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/30"
            >
              Take a Quiz
            </Link>
          </div>
        </div>
      </section>

      <section id="explanations" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter text-green-800 dark:text-green-200 sm:text-5xl">
              Simplified Explanations
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 md:text-xl max-w-[700px] mx-auto">
              Understanding complex legal concepts made easy with plain language
              explanations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Fundamental Rights",
                description: "Chapter IV of the Constitution",
                content:
                  "Learn about the rights guaranteed to every Nigerian citizen, including the right to life, dignity, personal liberty, fair hearing, privacy, freedom of thought, expression, and more.",
                link: "/learn/fundamental-rights",
              },
              {
                title: "Federal System of Government",
                description: "Chapters V, VI, and VII",
                content:
                  "Understand how power is shared between the federal, state, and local governments in Nigeria, including the roles of the legislature, executive, and judiciary at each level.",
                link: "/learn/federal-system",
              },
              {
                title: "Citizenship Rights",
                description: "Chapter III of the Constitution",
                content:
                  "Learn about who qualifies as a Nigerian citizen, how citizenship can be acquired, and the rights and privileges that come with Nigerian citizenship.",
                link: "/learn/citizenship",
              },
            ].map((item, index) => (
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
                      className="inline-flex items-center justify-center rounded-md border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-600 shadow-sm transition-colors hover:bg-green-50 dark:bg-gray-900 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/30"
                    >
                      Read Explanation
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="quizzes"
        className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-gray-950"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter text-green-800 dark:text-green-200 sm:text-5xl">
              Test Your Knowledge
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 md:text-xl max-w-[700px] mx-auto">
              Challenge yourself with our interactive quizzes and assessments on
              the Nigerian Constitution.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Basic Rights Quiz",
                description: "10 questions • 10 minutes",
                content:
                  "Test your knowledge of the fundamental rights guaranteed in the Nigerian Constitution.",
                link: "/learn/quizzes/basic-rights",
              },
              {
                title: "Government Structure Quiz",
                description: "8 questions • 8 minutes",
                content:
                  "Test your understanding of the three branches of government in Nigeria.",
                link: "/learn/quizzes/government-structure",
              },
            ].map((quiz, index) => (
              <div
                key={`quiz-${index}`}
                className="rounded-lg border border-green-100 bg-white text-gray-950 shadow-sm dark:bg-gray-900 dark:border-green-900"
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold text-green-800 dark:text-green-200">
                    {quiz.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {quiz.description}
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {quiz.content}
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link
                      href={quiz.link}
                      className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-green-700 dark:hover:bg-green-600"
                    >
                      Start Quiz
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="/learn/quizzes"
              className="inline-flex items-center justify-center rounded-md border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-600 shadow-sm transition-colors hover:bg-green-50 dark:bg-gray-900 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/30"
            >
              View All Quizzes
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
