"use client";

import { useEffect, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";
// import { ChevronDownIcon } from "@radix-ui/react-icons";

interface ConstitutionSection {
  chapter: string;
  section: string;
  content: string[];
}

export default function ConstitutionPage() {
  const [constitution, setConstitution] = useState<ConstitutionSection[]>([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();
  if (user?.role === undefined) {
    redirect("/login");
  }

  useEffect(() => {
    async function fetchConstitution() {
      try {
        const response = await fetch("/api/constitution");
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

  if (loading)
    return (
      <div className="container flex items-center justify-center min-h-[70vh]">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-green-700"></div>
          <p className="text-green-700">Loading content...</p>
        </div>
      </div>
    );

  return (
    <div className="bg-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4 text-green-700">
        Nigerian Constitution
      </h1>

      <Accordion.Root type="multiple" className="w-full space-y-4">
        {constitution.map((item, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="border border-green-700 rounded"
          >
            <Accordion.Header>
              <Accordion.Trigger className="w-full flex justify-between items-center p-4 text-left text-green-700 font-semibold text-lg hover:bg-green-100 transition">
                Chapter {item.chapter}, Section {item.section}
                <ChevronDownIcon className="h-5 w-5" />
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="p-4 text-green-700">
              <ul className="list-disc pl-6">
                {item.content.map((point, i) => (
                  <li key={i} className="mb-1">
                    {point}
                  </li>
                ))}
              </ul>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
