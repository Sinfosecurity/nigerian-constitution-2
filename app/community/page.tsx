import DiscussionPage from "@/components/Discussion";
import { getDiscussions } from "@/services/apiPost";
// import { supabase } from "@/services/supabase";
// import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function CommunityPage() {
  // Get the session on the server
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  // // If no session, redirect to the home page
  // if (!session) {
  //   redirect("/login");
  // }

  // Fetch posts after authentication check
  const posts = await getDiscussions();

  return <DiscussionPage posts={posts || []} />;
}
