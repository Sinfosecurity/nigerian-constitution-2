// "use client";

// import { useState } from "react";

// interface Message {
//   role: "user" | "bot";
//   content: string;
// }

// export default function ChatUI() {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [loading, setLoading] = useState(false);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage: Message = { role: "user", content: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setLoading(true);

//     const res = await fetch("/api/chat", {
//       method: "POST",
//       body: JSON.stringify({ message: input }),
//     });

//     const data = await res.json();

//     const botMessage: Message = { role: "bot", content: data.reply };
//     setMessages((prev) => [...prev, botMessage]);
//     setLoading(false);
//   };

//   return (
//     <div className="space-y-4">
//       <div className="bg-white rounded-lg shadow p-4 h-96 overflow-y-auto">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`mb-2 ${
//               msg.role === "user" ? "text-right" : "text-left"
//             }`}
//           >
//             <span
//               className={`inline-block px-3 py-2 rounded-lg ${
//                 msg.role === "user"
//                   ? "bg-green-700 text-white"
//                   : "bg-gray-200 text-black"
//               }`}
//             >
//               {msg.content}
//             </span>
//           </div>
//         ))}
//         {loading && <p className="text-sm italic text-gray-500">Thinking...</p>}
//       </div>

//       <div className="flex gap-2">
//         <input
//           type="text"
//           className="flex-1 px-3 py-2 border rounded-lg"
//           placeholder="Ask me anything..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button
//           onClick={handleSend}
//           className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

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

  // Add welcome message when component mounts
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
              className={`inline-block px-4 py-2 rounded-lg ${
                msg.role === "user"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {msg.content}
            </span>
          </div>
        ))}
        {loading && (
          <div className="text-left">
            <span className="inline-block px-4 py-2 rounded-lg bg-gray-100">
              <span className="animate-pulse">Thinking...</span>
            </span>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          placeholder="Ask me about the Nigerian Constitution..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleSend}
          disabled={loading || !input.trim()}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Send
        </button>
      </div>
      <p className="text-center text-sm text-gray-500">
        Press Enter to send, Shift + Enter for new line
      </p>
    </div>
  );
}
