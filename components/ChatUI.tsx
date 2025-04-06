"use client";

import { useState, useEffect } from "react";

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function ChatUI() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const welcomeMessage: Message = {
      role: "bot",
      content:
        "👋 Welcome to the Nigerian Constitution AI Assistant! I'm here to help you understand the constitution better. Feel free to ask any questions about the Nigerian Constitution.",
    };
    setMessages([welcomeMessage]);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    const botMessage: Message = { role: "bot", content: data.reply };
    setMessages((prev) => [...prev, botMessage]);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow p-4 min-h-[500px] overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-4 py-3 rounded-xl text-sm md:text-base ${
                    msg.role === "user"
                      ? "bg-green-700 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}
            {loading && (
              <div className="text-left animate-pulse text-gray-500">
                Typing...
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t">
        <div className="max-w-3xl mx-auto flex gap-2">
          <textarea
            className="flex-1 border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-700 resize-none"
            rows={1}
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={handleSend}
            className="bg-green-700 text-white px-4 py-2 rounded-xl hover:bg-green-800 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
