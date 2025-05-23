"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Loader2, ChevronRight } from "lucide-react";
import Link from "next/link";

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
      <div className="container flex items-center justify-center min-h-[70vh]">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-green-700"></div>
          <p className="text-green-700">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-3xl py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl sm:text-3xl font-bold text-green-800 dark:text-green-200">
          Constitution of Nigeria
        </h1>
        <Link
          href="/constitution"
          className="flex items-center gap-2 text-green-800 dark:text-green-200 hover:text-green-600 dark:hover:text-green-400 transition-colors"
        >
          <p className="hidden sm:inline text-sm sm:text-base">
            Go to Constitution
          </p>
          <p className="inline sm:hidden text-sm sm:text-base">Constitution</p>
          <ChevronRight className="h-5 w-5" />
        </Link>
      </div>
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
                  <h2 className="text-xl sm:text-lg font-semibold text-green-800 dark:text-green-200">
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
