import Terms from "@/components/TermsPage";
import { supabase } from "@/services/supabase";
import { redirect } from "next/navigation";

export default async function Page() {
  // Get the session on the server
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If no session, redirect to the home page
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <Terms />
    </div>
  );
}
