// import { openai } from "@ai-sdk/openai"
// import { streamText } from "ai"

// // Allow responses up to 30 seconds
// export const maxDuration = 30

// export async function POST(req: Request) {
//   try {
//     const { messages } = await req.json()

//     if (!messages || !Array.isArray(messages)) {
//       return new Response(JSON.stringify({ error: "Invalid request: messages array is required" }), {
//         status: 400,
//         headers: { "Content-Type": "application/json" },
//       })
//     }

//     // Create a system prompt that instructs the AI about the Nigerian Constitution
//     const systemMessage = {
//       role: "system",
//       content: `You are a helpful AI assistant specializing in the Nigerian Constitution.
//       Your role is to provide accurate information about the Nigerian Constitution,
//       its chapters, sections, amendments, and interpretations.
//       You have knowledge of all 8 chapters and their sections.
//       Be concise, accurate, and helpful. If you're unsure about something,
//       acknowledge that and suggest where the user might find more information.
//       Always cite specific sections and chapters when answering questions about the constitution.`,
//     }

//     // Add the system message to the beginning of the messages array if it's not already there
//     const messagesWithSystem = messages[0]?.role === "system" ? messages : [systemMessage, ...messages]

//     // Use streamText for streaming response
//     const result = streamText({
//       model: openai("gpt-4o"),
//       messages: messagesWithSystem,
//       temperature: 0.7,
//       maxTokens: 1000,
//     })

//     return result.toDataStreamResponse()
//   } catch (error) {
//     console.error("Error in chat API:", error)
//     return new Response(
//       JSON.stringify({
//         error: "An error occurred while processing your request",
//         message: "Please try again later. Our AI assistant is temporarily unavailable.",
//       }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       },
//     )
//   }
// }

// // Add a health check endpoint
// export async function HEAD() {
//   return new Response(null, {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
// }

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { supabase } from "@/services/supabase";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Only answer based on the Nigerian Constitution: ${message}`,
        },
      ],
    });

    const reply = chatCompletion.choices[0].message.content;

    // Optional: Save to Supabase
    await supabase
      .from("chats")
      .insert([{ user_message: message, bot_reply: reply }]);

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("AI error:", err);
    return NextResponse.json({ reply: "An error occurred" }, { status: 500 });
  }
}
