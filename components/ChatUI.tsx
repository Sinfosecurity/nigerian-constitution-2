"use client";

import { useState } from "react";

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function ChatUI() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow p-4 h-96 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${
              msg.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block px-3 py-2 rounded-lg ${
                msg.role === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {msg.content}
            </span>
          </div>
        ))}
        {loading && <p className="text-sm italic text-gray-500">Thinking...</p>}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 px-3 py-2 border rounded-lg"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
