import { NextResponse } from "next/server";

const tableOfContents = [
  { title: "Preamble", subsections: [] },
  {
    title: "Chapter I: General Provisions",
    subsections: [
      "Part I: Federal Republic of Nigeria",
      "Part II: Powers of the Federal Republic of Nigeria",
    ],
  },
  {
    title:
      "Chapter II: Fundamental Objectives and Directive Principles of State Policy",
    subsections: [],
  },
  { title: "Chapter III: Citizenship", subsections: [] },
  { title: "Chapter IV: Fundamental Rights", subsections: [] },
  {
    title: "Chapter V: The Legislature",
    subsections: [
      "Part I: National Assembly",
      "Part II: House of Assembly of a State",
    ],
  },
  {
    title: "Chapter VI: The Executive",
    subsections: ["Part I: Federal Executive", "Part II: State Executive"],
  },
  {
    title: "Chapter VII: The Judicature",
    subsections: ["Part I: Federal Courts", "Part II: State Courts"],
  },
  {
    title:
      "Chapter VIII: Federal Capital Territory, Abuja, and General Supplementary Provisions",
    subsections: [
      "Part I: Federal Capital Territory, Abuja",
      "Part II: Miscellaneous Provisions",
    ],
  },
  { title: "Chapter IX: Transitional Provisions and Savings", subsections: [] },
  { title: "Chapter X: Miscellaneous", subsections: [] },
];

export async function GET() {
  return NextResponse.json(tableOfContents);
}
