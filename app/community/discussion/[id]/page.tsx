import Link from "next/link"
import { BookOpen, ChevronLeft, MessageSquare, ThumbsUp, Share2, Flag, Reply } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"

export default function DiscussionPage({ params }: { params: { id: string } }) {
  // This would typically come from a database or API
  const discussionId = Number.parseInt(params.id)

  // Sample data for demonstration
  const discussion = {
    id: discussionId,
    title: "Understanding Section 42: Right to Freedom from Discrimination",
    content: `
      I've been studying Chapter IV of the Nigerian Constitution, which deals with Fundamental Rights, and I'm particularly interested in Section 42 regarding the Right to Freedom from Discrimination.
      
      The section states that a citizen of Nigeria shall not be discriminated against based on ethnicity, place of origin, sex, religion, or political opinion. However, I'm curious about how this has been interpreted and applied in practice.
      
      Has the Supreme Court made any significant rulings based on this section? Are there any notable cases where citizens have successfully challenged discrimination based on Section 42?
      
      Also, how does this constitutional provision interact with cultural practices that might be seen as discriminatory in some contexts?
      
      I'd appreciate insights from legal experts and fellow citizens who have knowledge in this area.
    `,
    author: "LegalEagle",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    authorTitle: "Law Student",
    date: "March 15, 2023",
    tags: ["Fundamental Rights", "Chapter IV", "Section 42", "Discrimination"],
    likes: 42,
    views: 156,
    replies: [
      {
        id: 1,
        content: `
          Great question about Section 42! There have indeed been several landmark cases where the Supreme Court has interpreted this section.
          
          One of the most significant is *Mojekwu v. Mojekwu* (1997), where the Court of Appeal (later upheld by Supreme Court) ruled that Igbo customary law that prevented women from inheriting property was discriminatory and unconstitutional under Section 42.
          
          Another important case is *Uzoukwu v. Ezeonu II* (1991), where the court elaborated on what constitutes discrimination under the Constitution.
          
          The tension between constitutional provisions and cultural practices is an ongoing challenge. The courts have generally held that where cultural practices conflict with constitutional rights, the Constitution prevails as the supreme law.
        `,
        author: "ConstitutionalScholar",
        authorAvatar: "/placeholder.svg?height=40&width=40",
        authorTitle: "Constitutional Law Professor",
        date: "March 15, 2023",
        likes: 28,
      },
      {
        id: 2,
        content: `
          To add to what ConstitutionalScholar mentioned, it's worth noting that Section 42 has been invoked in cases involving gender discrimination in employment.
          
          In *Folarin v. Nigerian Air Force* (2008), the court ruled that dismissing female officers from the Air Force upon marriage was discriminatory and violated Section 42.
          
          However, there are limitations. Section 42(3) allows for restrictions in appointments to military and police forces, which has been used to justify certain gender-based policies in these institutions.
          
          The implementation of Section 42 remains uneven across different contexts in Nigeria, with stronger enforcement in urban areas and formal employment settings than in rural communities where customary practices may prevail.
        `,
        author: "HumanRightsLawyer",
        authorAvatar: "/placeholder.svg?height=40&width=40",
        authorTitle: "Senior Advocate of Nigeria",
        date: "March 16, 2023",
        likes: 19,
      },
      {
        id: 3,
        content: `
          I'd like to share a personal experience related to Section 42. Last year, I was denied housing in a certain area because of my state of origin. I filed a complaint with the National Human Rights Commission citing Section 42.
          
          The case was resolved through mediation, and the landlord was educated about constitutional provisions against discrimination. I was eventually able to rent the apartment.
          
          This shows that beyond court cases, Section 42 can be enforced through administrative bodies like the NHRC. However, many Nigerians aren't aware of these protections or how to access them when their rights are violated.
          
          We need more public education about constitutional rights and accessible mechanisms for enforcing them.
        `,
        author: "ConcernedCitizen",
        authorAvatar: "/placeholder.svg?height=40&width=40",
        authorTitle: "Community Member",
        date: "March 17, 2023",
        likes: 35,
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-bold">Nigerian Constitution Hub</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/constitution" className="text-sm font-medium hover:underline underline-offset-4">
              Constitution
            </Link>
            <Link href="/learn" className="text-sm font-medium hover:underline underline-offset-4">
              Learn
            </Link>
            <Link href="/community" className="text-sm font-medium hover:underline underline-offset-4">
              Community
            </Link>
            <Link href="/news" className="text-sm font-medium hover:underline underline-offset-4">
              News
            </Link>
            <Link href="/resources" className="text-sm font-medium hover:underline underline-offset-4">
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
      <main className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/community" className="inline-flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Community
            </Link>
          </div>

          <Card className="mb-8">
            <CardHeader className="pb-3">
              <div className="flex flex-wrap gap-2 mb-2">
                {discussion.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-2xl font-bold">{discussion.title}</h1>
              <div className="flex items-center gap-2 mt-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={discussion.authorAvatar} alt={discussion.author} />
                  <AvatarFallback>{discussion.author.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{discussion.author}</div>
                  <div className="text-xs text-muted-foreground">{discussion.authorTitle}</div>
                </div>
                <span className="text-xs text-muted-foreground">• {discussion.date}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p className="whitespace-pre-line">{discussion.content || ""}</p>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6 flex justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  Like ({discussion.likes})
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Flag className="h-4 w-4" />
                  Report
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MessageSquare className="h-4 w-4" />
                {discussion.replies.length} replies
              </div>
            </CardFooter>
          </Card>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Replies ({discussion.replies.length})</h2>
            <div className="space-y-6">
              {discussion.replies.map((reply, index) => (
                <Card key={`reply-${reply.id}-${index}`} className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={reply.authorAvatar} alt={reply.author} />
                        <AvatarFallback>{reply.author.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{reply.author}</div>
                        <div className="text-xs text-muted-foreground">{reply.authorTitle}</div>
                      </div>
                      <span className="text-xs text-muted-foreground">• {reply.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <p className="whitespace-pre-line">{reply.content || ""}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        Like ({reply.likes})
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center gap-1">
                        <Reply className="h-4 w-4" />
                        Reply
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-xl font-bold">Join the Discussion</h2>
            </CardHeader>
            <CardContent>
              <Textarea placeholder="Share your thoughts or ask a question..." className="min-h-[150px]" />
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>
                <MessageSquare className="mr-2 h-4 w-4" />
                Post Reply
              </Button>
            </CardFooter>
          </Card>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium mb-2">Related Constitutional Provisions</h3>
            <p className="text-sm mb-4">
              <strong>Section 42 of the Nigerian Constitution:</strong> Right to Freedom from Discrimination
            </p>
            <p className="text-sm">
              (1) A citizen of Nigeria of a particular community, ethnic group, place of origin, sex, religion or
              political opinion shall not, by reason only that he is such a person:
              <br />
              (a) be subjected either expressly by, or in the practical application of, any law in force in Nigeria or
              any executive or administrative action of the government, to disabilities or restrictions to which
              citizens of Nigeria of other communities, ethnic groups, places of origin, sex, religions or political
              opinions are not made subject; or
              <br />
              (b) be accorded either expressly by, or in the practical application of, any law in force in Nigeria or
              any such executive or administrative action, any privilege or advantage that is not accorded to citizens
              of Nigeria of other communities, ethnic groups, places of origin, sex, religions or political opinions.
            </p>
            <div className="mt-4">
              <Link href="/constitution/chapter/4#section-42">
                <Button variant="outline" size="sm">
                  View Full Section
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-6 py-8 md:py-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Constitution</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/constitution/full" className="text-muted-foreground hover:text-foreground">
                    Full Text
                  </Link>
                </li>
                <li>
                  <Link href="/constitution/chapters" className="text-muted-foreground hover:text-foreground">
                    Chapters
                  </Link>
                </li>
                <li>
                  <Link href="/constitution/search" className="text-muted-foreground hover:text-foreground">
                    Search
                  </Link>
                </li>
                <li>
                  <Link href="/constitution/download" className="text-muted-foreground hover:text-foreground">
                    Download
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Learn</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/learn/explanations" className="text-muted-foreground hover:text-foreground">
                    Explanations
                  </Link>
                </li>
                <li>
                  <Link href="/learn/quizzes" className="text-muted-foreground hover:text-foreground">
                    Quizzes
                  </Link>
                </li>
                <li>
                  <Link href="/learn/case-studies" className="text-muted-foreground hover:text-foreground">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/learn/glossary" className="text-muted-foreground hover:text-foreground">
                    Glossary
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Community</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/community/forum" className="text-muted-foreground hover:text-foreground">
                    Forum
                  </Link>
                </li>
                <li>
                  <Link href="/community/ask-expert" className="text-muted-foreground hover:text-foreground">
                    Ask an Expert
                  </Link>
                </li>
                <li>
                  <Link href="/community/events" className="text-muted-foreground hover:text-foreground">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/resources/videos" className="text-muted-foreground hover:text-foreground">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link href="/resources/infographics" className="text-muted-foreground hover:text-foreground">
                    Infographics
                  </Link>
                </li>
                <li>
                  <Link href="/resources/multilingual" className="text-muted-foreground hover:text-foreground">
                    Multilingual
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">About</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Nigerian Constitution Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

