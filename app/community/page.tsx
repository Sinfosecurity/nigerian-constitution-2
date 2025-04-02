import DiscussionPage from "@/components/Discussion";
import { getDiscussions } from "@/services/apiPost";

export const revalidate = 0;
export default async function CommunityPage() {
  const posts = await getDiscussions();

  return <DiscussionPage posts={posts || []} />;
}
