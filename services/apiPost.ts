import { supabase } from "./supabase";

interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
  //  author: string;
  //   replies: number;
  //   date: string;
  // add other fields from your database as needed
}

export async function getDiscussions(): Promise<Post[] | null> {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    console.error("supabase error", error);
    return null;
  }

  return data;
}

export async function getDiscussionsById(id: string): Promise<Post> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error("supabase error", error);
  }

  return data;
}
