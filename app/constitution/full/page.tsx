// // import { PageLayout } from "@/components/page-layout"
// // import { PDFViewer } from "@/components/pdf-viewer"

// // export default function FullConstitutionPage() {
// //   return (
// //     <PageLayout>
// //       <div className="container px-4 py-8 md:px-6 md:py-12">
// //         <div className="mb-6">
// //           <h1 className="text-3xl font-bold mb-2">Constitution of the Federal Republic of Nigeria</h1>
// //           <p className="text-gray-500">The complete text of the 1999 Constitution (as amended)</p>
// //         </div>

// //         <PDFViewer pdfUrl="/documents/nigerian-constitution.pdf" title="Nigerian Constitution (1999)" />

// //         <div className="mt-8 p-4 bg-gray-100 rounded-md">
// //           <h2 className="text-lg font-semibold mb-2">About this document</h2>
// //           <p className="text-sm text-gray-700 mb-4">
// //             This is the complete text of the Constitution of the Federal Republic of Nigeria 1999, with all amendments
// //             up to date. The Constitution is the supreme law of Nigeria and provides the framework for the organization
// //             of government and defines the relationship between the citizens and the state, as well as the rights and
// //             duties of citizens.
// //           </p>
// //           <p className="text-sm text-gray-700">
// //             For educational purposes only. Always refer to official government publications for legal matters.
// //           </p>
// //         </div>
// //       </div>
// //     </PageLayout>
// //   )
// // }

// "use client";

// import { useEffect, useState } from "react";
// import { PageLayout } from "@/components/page-layout";
// import { Loader2 } from "lucide-react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// interface Section {
//   number: string;
//   title: string;
//   content: string;
// }

// interface Part {
//   title: string;
//   sections: Section[];
// }

// interface Chapter {
//   number: number;
//   title: string;
//   parts: Part[];
// }

// interface Constitution {
//   title: string;
//   preamble: string;
//   chapters: Chapter[];
// }

// export default function FullConstitutionPage() {
//   const [constitution, setConstitution] = useState<Constitution | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchConstitution() {
//       try {
//         const response = await fetch("/api/constitution");
//         const data = await response.json();
//         setConstitution(data);
//       } catch (error) {
//         console.error("Error fetching constitution:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchConstitution();
//   }, []);

//   if (loading) {
//     return (
//       <PageLayout>
//         <div className="container flex items-center justify-center min-h-[400px]">
//           <Loader2 className="h-8 w-8 animate-spin text-green-600" />
//         </div>
//       </PageLayout>
//     );
//   }

//   if (!constitution) {
//     return (
//       <PageLayout>
//         <div className="container px-4 py-8">
//           <p className="text-red-600">Failed to load constitution content.</p>
//         </div>
//       </PageLayout>
//     );
//   }

//   return (
//     <PageLayout>
//       <div className="container px-4 py-8 md:px-6 md:py-12">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold mb-4 text-green-800 dark:text-green-200">
//             {constitution.title}
//           </h1>
//           <div className="prose dark:prose-invert max-w-none">
//             <p className="text-lg text-gray-600 dark:text-gray-300">
//               {constitution.preamble}
//             </p>
//           </div>
//         </div>

//         <div className="space-y-6">
//           {constitution.chapters.map((chapter) => (
//             <div
//               key={chapter.number}
//               className="border border-green-100 dark:border-green-900 rounded-lg bg-white dark:bg-gray-900 shadow-sm"
//             >
//               <Accordion type="single" collapsible>
//                 <AccordionItem value={`chapter-${chapter.number}`}>
//                   <AccordionTrigger className="px-6 py-4 hover:bg-green-50 dark:hover:bg-green-900/30">
//                     <div className="flex items-center gap-4">
//                       <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 text-sm font-medium">
//                         {chapter.number}
//                       </span>
//                       <h2 className="text-xl font-semibold text-green-800 dark:text-green-200">
//                         {chapter.title}
//                       </h2>
//                     </div>
//                   </AccordionTrigger>
//                   <AccordionContent className="px-6 py-4">
//                     {chapter.parts.map((part, partIndex) => (
//                       <div key={partIndex} className="mb-6 last:mb-0">
//                         <h3 className="text-lg font-semibold mb-4 text-green-700 dark:text-green-300">
//                           {part.title}
//                         </h3>
//                         <div className="space-y-4">
//                           {part.sections.map((section) => (
//                             <div
//                               key={section.number}
//                               className="prose dark:prose-invert max-w-none"
//                             >
//                               <h4 className="text-base font-medium mb-2">
//                                 Section {section.number}: {section.title}
//                               </h4>
//                               <p className="text-gray-600 dark:text-gray-300">
//                                 {section.content}
//                               </p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//             </div>
//           ))}
//         </div>

//         <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-100 dark:border-green-900">
//           <h2 className="text-lg font-semibold mb-2 text-green-800 dark:text-green-200">
//             About this document
//           </h2>
//           <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
//             This is the complete text of the Constitution of the Federal
//             Republic of Nigeria 1999, with all amendments up to date. The
//             Constitution is the supreme law of Nigeria and provides the
//             framework for the organization of government and defines the
//             relationship between the citizens and the state, as well as the
//             rights and duties of citizens.
//           </p>
//           <p className="text-sm text-gray-600 dark:text-gray-300">
//             For educational purposes only. Always refer to official government
//             publications for legal matters.
//           </p>
//         </div>
//       </div>
//     </PageLayout>
//   );
// }

"use client";

import { useEffect, useState } from "react";

interface ConstitutionSection {
  chapter: string;
  section: string;
  content: string[];
}

export default function ConstitutionDisplay() {
  const [constitution, setConstitution] = useState<ConstitutionSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchConstitution() {
      try {
        const response = await fetch("/api/constitution"); // Update this to your actual API route
        const data = await response.json();
        setConstitution(data);
      } catch (error) {
        console.error("Error fetching constitution:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchConstitution();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Nigerian Constitution</h1>
      {constitution.map((item, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold">
            Chapter {item.chapter}, Section {item.section}
          </h2>
          <ul className="list-disc pl-6 mt-2">
            {item.content.map((point, i) => (
              <li key={i} className="mb-1">
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
