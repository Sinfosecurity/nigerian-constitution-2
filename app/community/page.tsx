import Link from "next/link"
import { MessageSquare } from "lucide-react"
import { PageLayout } from "@/components/page-layout"

export default function CommunityPage() {
  // Sample data for demonstration
  const discussionTopics = [
    {
      id: 1,
      title: "Understanding Section 42: Right to Freedom from Discrimination",
      author: "LegalEagle",
      date: "2 hours ago",
      replies: 24,
      views: 156,
      tags: ["Fundamental Rights", "Chapter IV"],
    },
    {
      id: 2,
      title: "How does the Constitution protect freedom of religion in Nigeria?",
      author: "ConstitutionScholar",
      date: "Yesterday",
      replies: 18,
      views: 203,
      tags: ["Freedom of Religion", "Section 38"],
    },
    {
      id: 3,
      title: "Debate: Should Nigeria adopt a unicameral legislature?",
      author: "PolicyWonk",
      date: "3 days ago",
      replies: 56,
      views: 412,
      tags: ["Legislature", "Constitutional Reform"],
    },
  ]

  return (
    <PageLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join the Constitutional Conversation</h1>
            <p className="mt-4 text-gray-500 md:text-xl max-w-[700px] mx-auto">
              Connect with fellow citizens, legal experts, and scholars to discuss, debate, and learn about the Nigerian
              Constitution.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center sm:flex-row">
            <Link
              href="/community/forum"
              className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Join Discussion
            </Link>
            <Link
              href="/community/ask-expert"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100"
            >
              Ask a Legal Expert
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Recent Discussions</h2>
            <Link
              href="/community/new-discussion"
              className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-900"
            >
              New Discussion
            </Link>
          </div>

          <div className="space-y-4">
            {discussionTopics.map((topic, index) => (
              <div
                key={`topic-${topic.id}-${index}`}
                className="rounded-lg border bg-white text-gray-950 shadow-sm overflow-hidden"
              >
                <Link href={`/community/discussion/${topic.id}`}>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-sm font-medium">{topic.author}</span>
                      <span className="text-xs text-gray-500 ml-2">• {topic.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 hover:text-blue-600">{topic.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {topic.tags.map((tag, tagIndex) => (
                        <span
                          key={`tag-${tagIndex}`}
                          className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 border-transparent bg-gray-900 text-gray-50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-6 mt-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <MessageSquare className="mr-1 h-4 w-4" />
                        {topic.replies} replies
                      </div>
                      <div className="flex items-center text-sm text-gray-500">{topic.views} views</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100">
              Load More Discussions
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

