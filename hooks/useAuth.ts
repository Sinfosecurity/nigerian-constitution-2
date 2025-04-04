// import { useEffect } from "react";

// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { useRouter } from "next/navigation";
// import type { User } from "@supabase/supabase-js";
// import { toast } from "sonner";
// import { supabase } from "@/services/supabase";

// const STORAGE_KEY = "auth_session";

// export function useAuth() {
//   const router = useRouter();
//   const queryClient = useQueryClient();

//   // Get current user
//   const { data: user, isLoading: userLoading } = useQuery({
//     queryKey: ["auth-user"],
//     queryFn: async () => {
//       // First try to get from localStorage
//       const storedSession = localStorage.getItem(STORAGE_KEY);
//       if (storedSession) {
//         const parsedSession = JSON.parse(storedSession);
//         if (parsedSession?.user) {
//           return parsedSession.user;
//         }
//       }

//       // If no stored session, check with Supabase
//       const {
//         data: { user },
//         error,
//       } = await supabase.auth.getUser();

//       if (error) {
//         localStorage.removeItem(STORAGE_KEY);
//         return null;
//       }

//       if (user) {
//         // Store the session
//         const {
//           data: { session },
//         } = await supabase.auth.getSession();
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
//       }

//       return user;
//     },
//   });

//   // Email/Password Sign In
//   const { mutate: signIn, isPending: signInLoading } = useMutation({
//     mutationFn: async ({
//       email,
//       password,
//     }: {
//       email: string;
//       password: string;
//     }) => {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });
//       if (error) throw error;

//       // Store session in localStorage
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(data.session));
//       return data.user;
//     },
//     onSuccess: (user) => {
//       queryClient.setQueryData(["auth-user"], user);
//       router.push("/");
//       toast.success("Successfully signed in!");
//     },
//     onError: (error: Error) => {
//       toast.error(error.message);
//     },
//   });

//   // Google Sign In
//   const { mutate: signInWithGoogle, isPending: googleSignInLoading } =
//     useMutation({
//       mutationFn: async () => {
//         const { data, error } = await supabase.auth.signInWithOAuth({
//           provider: "google",
//           options: {
//             redirectTo: `${window.location.origin}`,
//           },
//         });
//         if (error) throw error;

//         // Session will be handled in the OAuth callback
//         return data;
//       },
//       onError: (error: Error) => {
//         toast.error(error.message);
//       },
//     });

//   // Sign Out
//   const { mutate: signOut, isPending: signOutLoading } = useMutation({
//     mutationFn: async () => {
//       const { error } = await supabase.auth.signOut();
//       if (error) throw error;
//       // Clear stored session
//       localStorage.removeItem(STORAGE_KEY);
//     },
//     onSuccess: () => {
//       queryClient.setQueryData(["auth-user"], null);
//       router.push("/login");
//       toast.success("Successfully signed out!");
//     },
//     onError: (error: Error) => {
//       toast.error(error.message);
//     },
//   });

//   // Session change listener
//   useEffect(() => {
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((event, session) => {
//       if (session) {
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
//         queryClient.setQueryData(["auth-user"], session.user);
//       } else {
//         localStorage.removeItem(STORAGE_KEY);
//         queryClient.setQueryData(["auth-user"], null);
//       }
//     });

//     return () => {
//       subscription.unsubscribe();
//     };
//   }, [queryClient]);

//   return {
//     user,
//     loading:
//       userLoading || signInLoading || googleSignInLoading || signOutLoading,
//     signInLoading,
//     googleSignInLoading,
//     signOutLoading,
//     signIn,
//     signInWithGoogle,
//     signOut,
//   };
// }

import { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { toast } from "sonner";
import { supabase } from "@/services/supabase";

const STORAGE_KEY = "auth_session";

// Define interfaces for our data types
interface Comment {
  id: string;
  post_id: number;
  user_id: string;
  content: string;
  created_at: string;
  updated_at: string;
  user?: {
    id: string;
    email: string;
    user_metadata: {
      name: string;
      avatar_url?: string;
    };
  };
}

export function useAuth() {
  const router = useRouter();
  const queryClient = useQueryClient();

  // Get current user
  const { data: user, isLoading: userLoading } = useQuery({
    queryKey: ["auth-user"],
    queryFn: async () => {
      // First try to get from localStorage
      const storedSession = localStorage.getItem(STORAGE_KEY);
      if (storedSession) {
        const parsedSession = JSON.parse(storedSession);
        if (parsedSession?.user) {
          return parsedSession.user;
        }
      }

      // If no stored session, check with Supabase
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }

      if (user) {
        // Store the session
        const {
          data: { session },
        } = await supabase.auth.getSession();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
      }

      return user;
    },
  });

  // Email/Password Sign In
  const { mutate: signIn, isPending: signInLoading } = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

      // Store session in localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data.session));
      return data.user;
    },
    onSuccess: (user) => {
      queryClient.setQueryData(["auth-user"], user);
      router.push("/");
      toast.success("Successfully signed in!");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  // Google Sign In
  const { mutate: signInWithGoogle, isPending: googleSignInLoading } =
    useMutation({
      mutationFn: async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: `${window.location.origin}`,
          },
        });
        if (error) throw error;

        // Session will be handled in the OAuth callback
        return data;
      },
      onError: (error: Error) => {
        toast.error(error.message);
      },
    });

  // Sign Out
  const { mutate: signOut, isPending: signOutLoading } = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      // Clear stored session
      localStorage.removeItem(STORAGE_KEY);
    },
    onSuccess: () => {
      queryClient.setQueryData(["auth-user"], null);
      router.push("/login");
      toast.success("Successfully signed out!");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  // Session change listener
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
        queryClient.setQueryData(["auth-user"], session.user);
      } else {
        localStorage.removeItem(STORAGE_KEY);
        queryClient.setQueryData(["auth-user"], null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [queryClient]);

  // COMMENTS FUNCTIONS

  // Fetch comments for a post
  const getComments = async (postId: Number) => {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("post_id", postId)
      .order("created_at", { ascending: true });

    if (error) {
      toast.error("Failed to load comments");
      throw error;
    }

    return data as Comment[];
  };

  // Add a comment to a post
  const addComment = async (postId: number, content: string) => {
    if (!user) throw new Error("You must be logged in to comment");

    const { data, error } = await supabase
      .from("comments")
      .insert({
        post_id: postId,
        user_id: user.id,
        content,
      })
      .select(
        `
        *,
        user:user_id (
          id,
          email,
          user_metadata
        )
      `
      )
      .single();

    if (error) {
      toast.error("Failed to add comment");
      throw error;
    }

    // Invalidate comments query to refresh the list
    queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    toast.success("Comment added successfully");
    return data as Comment;
  };

  // Update a comment
  const updateComment = async (
    commentId: string,
    postId: number,
    content: string
  ) => {
    if (!user) throw new Error("You must be logged in to update a comment");

    const { data, error } = await supabase
      .from("comments")
      .update({
        content,
        updated_at: new Date().toISOString(),
      })
      .eq("id", commentId)
      .eq("user_id", user.id) // Ensure user can only update their own comments
      .select(
        `
        *,
        user:user_id (
          id,
          email,
          user_metadata
        )
      `
      )
      .single();

    if (error) {
      toast.error("Failed to update comment");
      throw error;
    }

    // Invalidate comments query to refresh the list
    queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    toast.success("Comment updated successfully");
    return data as Comment;
  };

  // Delete a comment
  const deleteComment = async (commentId: string, postId: number) => {
    if (!user) throw new Error("You must be logged in to delete a comment");

    const { error } = await supabase
      .from("comments")
      .delete()
      .eq("id", commentId)
      .eq("user_id", user.id); // Ensure user can only delete their own comments

    if (error) {
      toast.error("Failed to delete comment");
      throw error;
    }

    // Invalidate comments query to refresh the list
    queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    toast.success("Comment deleted successfully");
  };

  // Create React Query hooks for comments
  const usePostComments = (postId: number) => {
    return useQuery({
      queryKey: ["comments", postId],
      queryFn: () => getComments(postId),
      enabled: !!postId,
    });
  };

  const useAddComment = () => {
    return useMutation({
      mutationFn: ({ postId, content }: { postId: number; content: string }) =>
        addComment(postId, content),
    });
  };

  const useUpdateComment = () => {
    return useMutation({
      mutationFn: ({
        commentId,
        postId,
        content,
      }: {
        commentId: string;
        postId: number;
        content: string;
      }) => updateComment(commentId, postId, content),
    });
  };

  const useDeleteComment = () => {
    return useMutation({
      mutationFn: ({
        commentId,
        postId,
      }: {
        commentId: string;
        postId: number;
      }) => deleteComment(commentId, postId),
    });
  };

  return {
    user,
    loading:
      userLoading || signInLoading || googleSignInLoading || signOutLoading,
    signInLoading,
    googleSignInLoading,
    signOutLoading,
    signIn,
    signInWithGoogle,
    signOut,
    // Comments functionality
    usePostComments,
    useAddComment,
    useUpdateComment,
    useDeleteComment,
  };
}
