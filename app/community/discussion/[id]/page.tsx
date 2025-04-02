import Link from "next/link";
import {
  BookOpen,
  ChevronLeft,
  MessageSquare,
  ThumbsUp,
  Share2,
  Flag,
  Reply,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { getDiscussionsById } from "@/services/apiPost";
import DiscussionDetails from "@/components/DiscussionDetails";

export default async function DiscussionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const discussion = await getDiscussionsById(id);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
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
        </div>
      </header>
      <DiscussionDetails discussion={discussion} />
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
