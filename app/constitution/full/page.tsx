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
    <div className="p-4 bg-white">
      <h1 className="text-2xl font-bold mb-6 bg-green-700 text-white p-4 rounded-lg text-center shadow-md">
        Nigerian Constitution
      </h1>
      {constitution.map((item, index) => (
        <div
          key={index}
          className="mb-6 border border-green-200 rounded-lg overflow-hidden"
        >
          <h2 className="text-xl font-semibold bg-green-700 text-white p-3">
            Chapter {item.chapter}, Section {item.section}
          </h2>
          <ul className="list-disc pl-6 mt-2 p-4 bg-white">
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
