import ChatUI from "@/components/ChatUI";
import { supabase } from "@/services/supabase";
import { redirect } from "next/navigation";

export default async function ChatPage() {
  // Get the session on the server
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If no session, redirect to the home page
  if (!session) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-100">
      <div className="w-full py-6 bg-white shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Ask me about the Nigerian Constitution 🇳🇬
        </h1>
      </div>
      <div className="flex-1">
        <ChatUI />
      </div>
    </main>
  );
}
