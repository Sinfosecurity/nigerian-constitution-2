// "use client";

// import { useEffect } from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import { supabase } from "@/services/supabase";

// // Types for our comments system
// export interface Comment {
//   id: number; // int8 type in Supabase
//   post_id: number; // int8 type in Supabase, matching posts table
//   user_id: string; // uuid type for auth.users
//   content: string;
//   created_at: string;
//   updated_at: string;
//   user?: {
//     name?: string;
//     avatar_url?: string;
//     email?: string;
//   };
// }

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

//   // Sign Up
//   const {
//     mutate: signUp,
//     isPending: signUpLoading,
//     error: signUpError,
//   } = useMutation({
//     mutationFn: async ({
//       email,
//       password,
//       name,
//       redirectTo = "/",
//     }: {
//       email: string;
//       password: string;
//       name: string;
//       redirectTo?: string;
//     }) => {
//       const { data, error } = await supabase.auth.signUp({
//         email,
//         password,
//         options: {
//           data: {
//             name,
//           },
//           // emailRedirectTo: `${window.location.origin}`,
//         },
//       });

//       if (error) throw error;

//       // Check if session exists (user is immediately signed in)
//       if (!data.session) {
//         // Force sign in after registration
//         const { data: signInData, error: signInError } =
//           await supabase.auth.signInWithPassword({
//             email,
//             password,
//           });

//         if (signInError) throw signInError;

//         // Store session in localStorage
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(signInData.session));
//         return {
//           user: signInData.user,
//           session: signInData.session,
//           redirectTo,
//         };
//       }

//       // Store session in localStorage
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(data.session));
//       return { user: data.user, session: data.session, redirectTo };
//     },
//     onSuccess: (data) => {
//       queryClient.setQueryData(["auth-user"], data.user);
//       router.push();
//       toast.success("Account created successfully!");
//     },
//     onError: (error: Error) => {
//       toast.error(error.message);
//     },
//   });

//   // Email/Password Sign In
//   const { mutate: signIn, isPending: signInLoading } = useMutation({
//     mutationFn: async ({
//       email,
//       password,
//       redirectTo = "/",
//     }: {
//       email: string;
//       password: string;
//       redirectTo?: string;
//     }) => {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });
//       if (error) throw error;

//       // Store session in localStorage
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(data.session));

//       return { user: data.user, redirectTo };
//     },
//     onSuccess: (data) => {
//       queryClient.setQueryData(["auth-user"], data.user);
//       router.push(data.redirectTo);
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

//   // Password Reset
//   const { mutate: resetPassword, isPending: resetPasswordLoading } =
//     useMutation({
//       mutationFn: async (email: string) => {
//         const { error } = await supabase.auth.resetPasswordForEmail(email, {
//           redirectTo: `${window.location.origin}/reset-password`,
//         });
//         if (error) throw error;
//         return { success: true };
//       },
//       onSuccess: () => {
//         toast.success("Password reset link sent to your email!");
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

//   // COMMENTS FUNCTIONALITY

//   // Fetch comments for a post
//   const useComments = (postId: number) => {
//     return useQuery({
//       queryKey: ["comments", postId],
//       queryFn: async () => {
//         const { data, error } = await supabase
//           .from("comments")
//           .select(
//             `
//             *,
//             user:user_id (
//               email,
//               raw_user_meta_data
//             )
//           `
//           )
//           .eq("post_id", postId)
//           .order("created_at", { ascending: true });

//         if (error) throw error;

//         // Transform the data to include user metadata
//         return data.map((comment) => ({
//           ...comment,
//           user: {
//             email: comment.user?.email,
//             name: comment.user?.raw_user_meta_data?.name,
//             avatar_url: comment.user?.raw_user_meta_data?.avatar_url,
//           },
//         }));
//       },
//       enabled: !!postId,
//     });
//   };

//   // Add a comment
//   const useAddComment = () => {
//     const queryClient = useQueryClient();

//     return useMutation({
//       mutationFn: async ({
//         postId,
//         content,
//       }: {
//         postId: number;
//         content: string;
//       }) => {
//         if (!user) throw new Error("You must be logged in to comment");

//         const { data, error } = await supabase
//           .from("comments")
//           .insert([
//             {
//               post_id: postId,
//               user_id: user.id,
//               content,
//             },
//           ])
//           .select();

//         if (error) throw error;
//         return data[0];
//       },
//       onSuccess: (_, variables) => {
//         queryClient.invalidateQueries({
//           queryKey: ["comments", variables.postId],
//         });
//         toast.success("Comment added successfully!");
//       },
//       onError: (error: Error) => {
//         toast.error(`Failed to add comment: ${error.message}`);
//       },
//     });
//   };

//   // Edit a comment
//   const useEditComment = () => {
//     const queryClient = useQueryClient();

//     return useMutation({
//       mutationFn: async ({
//         commentId,
//         content,
//         postId,
//       }: {
//         commentId: number;
//         content: string;
//         postId: number;
//       }) => {
//         if (!user) throw new Error("You must be logged in to edit a comment");

//         const { data, error } = await supabase
//           .from("comments")
//           .update({ content, updated_at: new Date().toISOString() })
//           .eq("id", commentId)
//           .eq("user_id", user.id) // Ensure the user owns this comment
//           .select();

//         if (error) throw error;
//         return data[0];
//       },
//       onSuccess: (_, variables) => {
//         queryClient.invalidateQueries({
//           queryKey: ["comments", variables.postId],
//         });
//         toast.success("Comment updated successfully!");
//       },
//       onError: (error: Error) => {
//         toast.error(`Failed to update comment: ${error.message}`);
//       },
//     });
//   };

//   // Delete a comment
//   const useDeleteComment = () => {
//     const queryClient = useQueryClient();

//     return useMutation({
//       mutationFn: async ({
//         commentId,
//         postId,
//       }: {
//         commentId: number;
//         postId: number;
//       }) => {
//         if (!user) throw new Error("You must be logged in to delete a comment");

//         const { error } = await supabase
//           .from("comments")
//           .delete()
//           .eq("id", commentId)
//           .eq("user_id", user.id); // Ensure the user owns this comment

//         if (error) throw error;
//         return { success: true };
//       },
//       onSuccess: (_, variables) => {
//         queryClient.invalidateQueries({
//           queryKey: ["comments", variables.postId],
//         });
//         toast.success("Comment deleted successfully!");
//       },
//       onError: (error: Error) => {
//         toast.error(`Failed to delete comment: ${error.message}`);
//       },
//     });
//   };

//   return {
//     user,
//     loading:
//       userLoading ||
//       signInLoading ||
//       googleSignInLoading ||
//       signOutLoading ||
//       resetPasswordLoading ||
//       signUpLoading,
//     signInLoading,
//     googleSignInLoading,
//     signOutLoading,
//     resetPasswordLoading,
//     signUpLoading,
//     signIn,
//     signInWithGoogle,
//     signOut,
//     resetPassword,
//     signUp,
//     error: signUpError?.message,
//     // Comments functionality
//     useComments,
//     useAddComment,
//     useEditComment,
//     useDeleteComment,
//   };
// }

"use client";

import { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { supabase } from "@/services/supabase";

// Types for our comments system
export interface Comment {
  id: number; // int8 type in Supabase
  post_id: number; // int8 type in Supabase, matching posts table
  user_id: string; // uuid type for auth.users
  content: string;
  created_at: string;
  updated_at: string;
  user?: {
    name?: string;
    avatar_url?: string;
    email?: string;
  };
}

const STORAGE_KEY = "auth_session";

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

  // Sign Up - Simplified without redirectTo parameter
  const {
    mutate: signUp,
    isPending: signUpLoading,
    error: signUpError,
  } = useMutation({
    mutationFn: async ({
      email,
      password,
      name,
    }: {
      email: string;
      password: string;
      name: string;
    }) => {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });

      if (error) throw error;

      // Check if session exists (user is immediately signed in)
      if (!data.session) {
        // Force sign in after registration
        const { data: signInData, error: signInError } =
          await supabase.auth.signInWithPassword({
            email,
            password,
          });

        if (signInError) throw signInError;

        // Store session in localStorage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(signInData.session));
        return { user: signInData.user, session: signInData.session };
      }

      // Store session in localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data.session));
      return { user: data.user, session: data.session };
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["auth-user"], data.user);
      router.push("/"); // Always redirect to home page
      toast.success("Account created successfully!");
    },
    onError: (error: Error) => {
      toast.error(error.message);
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

      return { user: data.user };
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["auth-user"], data.user);
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

  // Password Reset
  const { mutate: resetPassword, isPending: resetPasswordLoading } =
    useMutation({
      mutationFn: async (email: string) => {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;
        return { success: true };
      },
      onSuccess: () => {
        toast.success("Password reset link sent to your email!");
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

  // COMMENTS FUNCTIONALITY

  // Fetch comments for a post
  const useComments = (postId: number) => {
    return useQuery({
      queryKey: ["comments", postId],
      queryFn: async () => {
        const { data, error } = await supabase
          .from("comments")
          .select(
            `
            *
          `
          )
          .eq("post_id", postId)
          .order("created_at", { ascending: true });

        if (error) throw error;

        // Transform the data to include user metadata
        return data.map((comment) => ({
          ...comment,
          user: {
            email: comment.user?.email,
            name: comment.user?.raw_user_meta_data?.name,
            avatar_url: comment.user?.raw_user_meta_data?.avatar_url,
          },
        }));
      },
      enabled: !!postId,
    });
  };

  // Add a comment
  const useAddComment = () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: async ({
        postId,
        content,
      }: {
        postId: number;
        content: string;
      }) => {
        if (!user) throw new Error("You must be logged in to comment");

        const { data, error } = await supabase
          .from("comments")
          .insert([
            {
              post_id: postId,
              user_id: user.id,
              content,
            },
          ])
          .select();

        if (error) throw error;
        return data[0];
      },
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries({
          queryKey: ["comments", variables.postId],
        });
        toast.success("Comment added successfully!");
      },
      onError: (error: Error) => {
        toast.error(`Failed to add comment: ${error.message}`);
      },
    });
  };

  // Edit a comment
  const useEditComment = () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: async ({
        commentId,
        content,
        postId,
      }: {
        commentId: number;
        content: string;
        postId: number;
      }) => {
        if (!user) throw new Error("You must be logged in to edit a comment");

        const { data, error } = await supabase
          .from("comments")
          .update({ content, updated_at: new Date().toISOString() })
          .eq("id", commentId)
          .eq("user_id", user.id)
          .select();

        if (error) throw error;
        return data[0];
      },
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries({
          queryKey: ["comments", variables.postId],
        });
        toast.success("Comment updated successfully!");
      },
      onError: (error: Error) => {
        toast.error(`Failed to update comment: ${error.message}`);
      },
    });
  };

  // Delete a comment
  const useDeleteComment = () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: async ({
        commentId,
        postId,
      }: {
        commentId: number;
        postId: number;
      }) => {
        if (!user) throw new Error("You must be logged in to delete a comment");

        const { error } = await supabase
          .from("comments")
          .delete()
          .eq("id", commentId)
          .eq("user_id", user.id);

        if (error) throw error;
        return { success: true };
      },
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries({
          queryKey: ["comments", variables.postId],
        });
        toast.success("Comment deleted successfully!");
      },
      onError: (error: Error) => {
        toast.error(`Failed to delete comment: ${error.message}`);
      },
    });
  };

  return {
    user,
    loading:
      userLoading ||
      signInLoading ||
      googleSignInLoading ||
      signOutLoading ||
      resetPasswordLoading ||
      signUpLoading,
    signInLoading,
    googleSignInLoading,
    signOutLoading,
    resetPasswordLoading,
    signUpLoading,
    signIn,
    signInWithGoogle,
    signOut,
    resetPassword,
    signUp,
    error: signUpError?.message,
    // Comments functionality
    useComments,
    useAddComment,
    useEditComment,
    useDeleteComment,
  };
}
