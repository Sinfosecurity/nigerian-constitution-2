import Privacy from "@/components/PrivacyPage";
import { supabase } from "@/services/supabase";
import { redirect } from "next/navigation";

export default async function PrivacyPolicyPage() {
  // Get the session properly
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Redirect if no session exists
  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <Privacy />
    </div>
  );
}
