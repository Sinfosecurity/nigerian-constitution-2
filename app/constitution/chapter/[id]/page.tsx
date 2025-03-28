import Link from "next/link";
import { ChevronLeft, BookOpen, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ChapterPage({ params }: { params: { id: string } }) {
  // This would typically come from a database or API
  const chapterId = Number.parseInt(params.id);

  // Sample data for demonstration
  const chapterData = {
    id: chapterId,
    title: `Chapter ${chapterId}`,
    fullTitle:
      chapterId === 1
        ? "Chapter I - General Provisions"
        : chapterId === 4
        ? "Chapter IV - Fundamental Rights"
        : `Chapter ${chapterId} - Sample Title`,
    sections: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      number: `${i + 1}`,
      title: `Section ${i + 1}`,
      content:
        i === 0
          ? "This Constitution is supreme and its provisions shall have binding force on all authorities and persons throughout the Federal Republic of Nigeria."
          : `Sample content for section ${
              i + 1
            } of chapter ${chapterId}. This would contain the actual text of the Nigerian Constitution.`,
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-bold">Nigerian Constitution Hub</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/constitution"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Constitution
            </Link>
            <Link
              href="/learn"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Learn
            </Link>
            <Link
              href="/community"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Community
            </Link>
            <Link
              href="/news"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              News
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Resources
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button size="sm">Sign Up</Button>
            <button className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div> */}
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/constitution" className="inline-flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Constitution
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter">
                {chapterData.fullTitle}
              </h1>
              <p className="text-muted-foreground mt-2">
                Constitution of the Federal Republic of Nigeria, 1999 (as
                amended)
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="inline-flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="inline-flex items-center gap-2"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          <Tabs defaultValue="full" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="full">Full Text</TabsTrigger>
              <TabsTrigger value="simplified">Simplified</TabsTrigger>
              <TabsTrigger value="annotations">Annotations</TabsTrigger>
            </TabsList>
            <TabsContent value="full" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  {chapterData.sections.map((section) => (
                    <div
                      key={section.id}
                      className="mb-8"
                      id={`section-${section.id}`}
                    >
                      <h2 className="text-xl font-bold mb-4">
                        {section.number}. {section.title}
                      </h2>
                      <p className="whitespace-pre-line">{section.content}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="simplified" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="bg-muted p-4 rounded-lg mb-6">
                    <p className="text-sm">
                      This is a simplified explanation of{" "}
                      {chapterData.fullTitle}. It is not a legal document and
                      should not be used as a substitute for the official text
                      of the Constitution.
                    </p>
                  </div>

                  {chapterData.sections.map((section) => (
                    <div key={section.id} className="mb-8">
                      <h2 className="text-xl font-bold mb-4">
                        {section.number}. {section.title} - Simplified
                      </h2>
                      <p className="whitespace-pre-line">
                        {section.id === 1 && chapterId === 1
                          ? "This section establishes that the Constitution is the highest law in Nigeria. All other laws, government actions, and decisions must follow what the Constitution says. If any law goes against the Constitution, that law is invalid."
                          : `A simplified explanation of section ${section.id} would go here, explaining the legal concepts in plain language that's easy for everyone to understand.`}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="annotations" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="bg-muted p-4 rounded-lg mb-6">
                    <p className="text-sm">
                      These annotations provide additional context, relevant
                      court cases, and interpretations of{" "}
                      {chapterData.fullTitle}. They are for educational purposes
                      only.
                    </p>
                  </div>

                  {chapterData.sections.map((section) => (
                    <div key={section.id} className="mb-8">
                      <h2 className="text-xl font-bold mb-4">
                        {section.number}. {section.title} - Annotations
                      </h2>
                      <div className="space-y-4">
                        <p className="whitespace-pre-line">{section.content}</p>
                        <div className="border-l-4 border-primary pl-4 py-2">
                          <h3 className="font-medium">Relevant Cases:</h3>
                          <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                            <li>
                              Attorney-General of the Federation v.
                              Attorney-General of Abia State & Ors (2001)
                            </li>
                            <li>Abacha v. Fawehinmi (2000)</li>
                            <li>Inakoju v. Adeleke (2007)</li>
                          </ul>
                        </div>
                        <div className="border-l-4 border-primary pl-4 py-2">
                          <h3 className="font-medium">Interpretations:</h3>
                          <p className="text-sm mt-2">
                            The Supreme Court has consistently upheld the
                            supremacy of the Constitution in numerous cases,
                            establishing that no government action can override
                            constitutional provisions.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-6 py-8 md:py-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Constitution</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/constitution/full"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Full Text
                  </Link>
                </li>
                <li>
                  <Link
                    href="/constitution/chapters"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Chapters
                  </Link>
                </li>
                <li>
                  <Link
                    href="/constitution/search"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Search
                  </Link>
                </li>
                <li>
                  <Link
                    href="/constitution/download"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Download
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Learn</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/learn/explanations"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Explanations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learn/quizzes"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Quizzes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learn/case-studies"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learn/glossary"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Glossary
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Community</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/community/forum"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Forum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community/ask-expert"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Ask an Expert
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community/events"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/resources/videos"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Videos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/infographics"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Infographics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/multilingual"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Multilingual
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">About</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Nigerian Constitution Hub. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
