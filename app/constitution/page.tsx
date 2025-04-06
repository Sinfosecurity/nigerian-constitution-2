import Constitution from "@/components/ConstitutionPage";
// import { supabase } from "@/services/supabase";
// import { redirect } from "next/navigation";

export default async function Page() {
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  // // If no session, redirect to the home page
  // if (!session) {
  //   redirect("/login");
  // }
  return (
    <div>
      <Constitution />
    </div>
  );
}
