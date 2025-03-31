// "use client";

// import { useEffect, useState } from "react";

// interface TOCEntry {
//   title: string;
//   subsections: string[];
// }

// export default function TableOfContentPage() {
//   const [toc, setToc] = useState<TOCEntry[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch("/api/tableOfContent");
//         const data = await response.json();
//         setToc(data);
//       } catch (error) {
//         console.error("Error fetching Table of Contents:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, []);

//   if (loading)
//     return <p className="text-center">Loading Table of Contents...</p>;

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Table of Contents</h1>
//       {toc.map((chapter, index) => (
//         <div key={index} className="mb-6">
//           <h2 className="text-xl font-semibold">{chapter.title}</h2>
//           <ul className="list-disc pl-6">
//             {chapter.subsections.map((sub, subIndex) => (
//               <li key={subIndex} className="text-gray-700">
//                 {sub}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Loader2, ChevronRight } from "lucide-react";

interface TOCEntry {
  title: string;
  subsections: string[];
}

export default function TableOfContentPage() {
  const [toc, setToc] = useState<TOCEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/tableOfContent");
        const data = await response.json();
        setToc(data);
      } catch (error) {
        console.error("Error fetching Table of Contents:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-green-600" />
      </div>
    );
  }

  return (
    <div className="container max-w-3xl py-8 px-4">
      <h1 className="text-3xl font-bold text-green-800 dark:text-green-200 mb-8 text-center">
        Constitution of Nigeria
      </h1>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-green-100 dark:border-green-900">
        <Accordion type="single" collapsible className="w-full">
          {toc.map((chapter, index) => (
            <AccordionItem
              key={index}
              value={`chapter-${index}`}
              className="border-b border-green-100 dark:border-green-900 last:border-0"
            >
              <AccordionTrigger className="flex items-center justify-between p-4 text-left hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 text-sm font-medium">
                    {index + 1}
                  </div>
                  <h2 className="text-lg font-semibold text-green-800 dark:text-green-200">
                    {chapter.title}
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {chapter.subsections.length > 0 ? (
                  <ul className="p-4 space-y-3">
                    {chapter.subsections.map((sub, subIndex) => (
                      <li
                        key={subIndex}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                      >
                        <ChevronRight className="h-4 w-4" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="p-4 text-gray-500 dark:text-gray-400 italic">
                    No subsections available
                  </p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
