import ChatUI from "@/components/ChatUI";

export default function ChatPage() {
  return (
    <main className="min-h-screen flex justify-center items-center p-4 bg-gray-100">
      <div className="w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Ask me about the Nigerian Constitution 🇳🇬
        </h1>
        <ChatUI />
      </div>
    </main>
  );
}
