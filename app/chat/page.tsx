import ChatUI from "@/components/ChatUI";

export default function ChatPage() {
  return (
    <main className="min-h-screen flex justify-center items-center p-6 bg-gray-100">
      <div className="w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4">
          Ask me about the Nigerian Constitution 🇳🇬
        </h1>
        <ChatUI />
      </div>
    </main>
  );
}
