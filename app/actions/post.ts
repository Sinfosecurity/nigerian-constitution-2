"use server";

import { supabase } from "@/services/supabase";

type CreatePostResponse = {
  success: boolean;
  data?: any;
  error?: string;
};

export async function createPost(
  formData: FormData
): Promise<CreatePostResponse> {
  // Get form data
  const topic = formData.get("topic") as string;
  const body = formData.get("body") as string;

  // Validate form data
  if (!topic || !body) {
    throw new Error("Topic and body are required");
  }

  // Current timestamp
  const currentDate = new Date().toISOString();

  try {
    // Insert into posts table
    const { data, error } = await supabase
      .from("posts")
      .insert([
        {
          title: topic,
          content: body,
          // created_at: currentDate,
          // You might want to add more fields like:
          // author_id: [user id from auth],
          // tags: [],
          // views: 0,
          // replies: 0,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, error: "Failed to create discussion" };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error creating post:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}
