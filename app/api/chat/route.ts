import { type NextRequest, NextResponse } from "next/server";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
// import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
import { supabase } from "@/services/supabase";

// Initialize the Google Generative AI with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    //   // Get the user session from cookies
    //   const supabase = createRouteHandlerClient({ cookies });
    //   const {
    //     data: { session },
    //   } = await supabase.auth.getSession();

    //   // If no session, user is not authenticated
    //   if (!session) {
    //     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    //   }

    //   const userId = session.user.id;
    const { message } = await req.json();

    // Initialize the model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Configure safety settings
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    // Create a chat session
    const chat = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 1000,
      },
      safetySettings,
    });

    // Create the context for the Nigerian Constitution assistant
    const contextMessage = `You are a helpful AI assistant specializing in the Nigerian Constitution and Nigerian political news at large.
      Your role is to provide accurate information about the Nigerian news and Nigerian constitution,
      its chapters, sections, amendments, and interpretations.
      You have knowledge of all 8 chapters and their sections, and knowledge of the Nigerian current affairs.
      Be concise, accurate, and helpful. If you're unsure about something,
      acknowledge that and suggest where the user might find more information.
      Always cite specific sections and chapters when answering questions about the constitution.`;

    // First, send the context to set the assistant's role
    await chat.sendMessage(contextMessage);

    // Then send the user's message
    const result = await chat.sendMessage(message);
    const response = result.response;
    const reply = response.text();

    // Save to Supabase with user_id
    await supabase.from("chats").insert([
      {
        // user_id: userId,
        user_message: message,
        bot_reply: reply,
      },
    ]);

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("AI error:", err);
    return NextResponse.json(
      {
        reply: "An error occurred with the AI service. Please try again later.",
        error: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}
