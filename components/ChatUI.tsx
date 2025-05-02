"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Send, Loader2, Scale, Bot, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { redirect, useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

interface Message {
  role: "user" | "bot";
  content: string;
  timestamp: Date;
}

export default function ChatUI() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const { user, loading: authLoading } = useAuth();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  if (user?.role === undefined) {
    redirect("/login");
  }

  // Add welcome message when component mounts
  useEffect(() => {
    const welcomeMessage: Message = {
      role: "bot",
      content:
        "👋 Welcome to the Nigerian Constitution AI Assistant! I'm here to help you understand the constitution better. Feel free to ask any questions about the Nigerian Constitution.",
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, []);

  // Auto-scroll to bottom when messages change if already at bottom
  useEffect(() => {
    if (isAtBottom) {
      scrollToBottom();
    }
  }, [messages, isAtBottom]);

  // Check scroll position to show/hide scroll buttons
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const scrollPosition = scrollTop + clientHeight;
      const isScrollable = scrollHeight > clientHeight;

      // Show scroll buttons only if content is scrollable
      setShowScrollButtons(isScrollable);

      // Check if we're at the bottom (with a small threshold for rounding errors)
      setIsAtBottom(scrollHeight - scrollPosition < 10);
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    container.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    messagesContainerRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSend = async () => {
    if (!input.trim() || !user) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Force scroll to bottom when sending a new message
    setIsAtBottom(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      const data = await res.json();

      const botMessage: Message = {
        role: "bot",
        content: data.reply,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        role: "bot",
        content: "Sorry, I encountered an error. Please try again later.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!user) return "U";

    const email = user.email || user?.email;
    if (email) {
      return email.charAt(0).toUpperCase();
    }

    return "U";
  };

  // If user is not loaded yet, show loading state
  if (authLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-green-600" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-y-auto">
      {/* Header */}
      <header className="bg-green-700 text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-full">
              <Scale className="h-6 w-6 text-green-700" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Nigerian Constitution AI</h1>
              <p className="text-xs text-green-100">
                Your legal knowledge assistant
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="bg-green-600 text-white border-green-500"
            >
              Online
            </Badge>
            <Avatar className="h-8 w-8 border-2 border-white">
              <AvatarFallback className="bg-green-100 text-green-700">
                {getUserInitials()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="bg-white container mx-auto flex-1 p-4 md:p-6 flex flex-col max-w-4xl overflow-y-auto">
        {/* Messages Area */}
        <Card className="flex-1 mb-4 overflow-hidden flex flex-col relative">
          <CardHeader className="bg-gray-50 border-b py-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bot className="h-5 w-5 text-green-600" />
              Constitution Assistant
            </CardTitle>
          </CardHeader>

          {/* Scroll buttons */}
          {showScrollButtons && (
            <div className="absolute right-4 top-16 z-10 flex flex-col gap-2">
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-100"
                onClick={scrollToTop}
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>

              {!isAtBottom && (
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-100"
                  onClick={scrollToBottom}
                  aria-label="Scroll to bottom"
                >
                  <ArrowDown className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}

          <CardContent
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
          >
            <div className="space-y-6">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-3 animate-fadeIn",
                    msg.role === "user" ? "flex-row-reverse" : ""
                  )}
                >
                  <Avatar
                    className={cn(
                      "h-8 w-8 border-2",
                      msg.role === "user"
                        ? "border-green-500"
                        : "border-gray-300"
                    )}
                  >
                    <AvatarFallback
                      className={cn(
                        msg.role === "user"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      )}
                    >
                      {msg.role === "user" ? (
                        getUserInitials()
                      ) : (
                        <Bot className="h-4 w-4" />
                      )}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={cn(
                      "flex flex-col max-w-[80%]",
                      msg.role === "user" ? "items-end" : "items-start"
                    )}
                  >
                    <div
                      className={cn(
                        "px-4 py-3 rounded-2xl shadow-sm",
                        msg.role === "user"
                          ? "bg-green-600 text-white rounded-tr-none"
                          : "bg-white border border-gray-200 rounded-tl-none"
                      )}
                    >
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    </div>
                    <span className="text-xs text-gray-500 mt-1 px-2">
                      {formatTime(msg.timestamp)}
                    </span>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8 border-2 border-gray-300">
                    <AvatarFallback className="bg-gray-100 text-gray-700">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full bg-green-600 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-green-600 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-green-600 animate-bounce"
                        style={{ animationDelay: "600ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
        </Card>

        {/* Input Area */}
        <div className="relative">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask about the Nigerian Constitution..."
            className="min-h-[60px] resize-none pr-16 py-4 bg-white border-green-200 focus:border-green-500 focus:ring-green-500"
            disabled={loading}
          />
          <Button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="absolute right-2 bottom-2 h-10 w-10 p-2 rounded-full"
            size="icon"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
        <p className="text-center text-xs text-gray-500 mt-2">
          Press Enter to send, Shift + Enter for new line
        </p>
      </div>
    </div>
  );
}
