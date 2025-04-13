// "use client";

// import { useEffect } from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import { supabase } from "@/services/supabase";

// // Types for our comments system
// export interface Comment {
//   id: number;
//   post_id: number;
//   user_id: string;
//   content: string;
//   created_at: string;
//   updated_at: string;
//   user?: {
//     name?: string;
//     avatar_url?: string;
//     email?: string;
//   };
// }

// export function useAuth() {
//   const router = useRouter();
//   const queryClient = useQueryClient();

//   // Get current user
//   const { data: user, isLoading: userLoading } = useQuery({
//     queryKey: ["auth-user"],
//     queryFn: async () => {
//       // Check with Supabase directly
//       const {
//         data: { user },
//         error,
//       } = await supabase.auth.getUser();

//       if (error) {
//         return null;
//       }

//       return { user, isAuthenticated: user?.role === "authenticated" };
//     },
//   });

//   // Sign Up - Simplified without redirectTo parameter
//   const {
//     mutate: signUp,
//     isPending: signUpLoading,
//     error: signUpError,
//   } = useMutation({
//     mutationFn: async ({
//       email,
//       password,
//       name,
//     }: {
//       email: string;
//       password: string;
//       name: string;
//     }) => {
//       const { data, error } = await supabase.auth.signUp({
//         email,
//         password,
//         options: {
//           data: {
//             name,
//           },
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

//         return { user: signInData.user, session: signInData.session };
//       }

//       return { user: data.user, session: data.session };
//     },
//     onSuccess: (data) => {
//       queryClient.setQueryData(["auth-user"], data.user);
//       router.push("/"); // Always redirect to home page
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
//     }: {
//       email: string;
//       password: string;
//     }) => {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });
//       if (error) throw error;

//       return { user: data.user };
//     },
//     onSuccess: (data) => {
//       queryClient.setQueryData(["auth-user"], data.user);
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
//         queryClient.setQueryData(["auth-user"], session.user);
//       } else {
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
//             *
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
//               user_id: user?.id,
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
//           .eq("user_id", user?.id)
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
//           .eq("user_id", user?.id);

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
  id: number;
  post_id: number;
  user_id: string;
  content: string;
  created_at: string;
  updated_at: string;
  user?: {
    name?: string;
    avatar_url?: string;
    email?: string;
  };
}

// Define proper type for the auth user
interface AuthData {
  user: {
    id: string;
    role?: string;
    email?: string;
    raw_user_meta_data?: {
      name?: string;
      avatar_url?: string;
    };
  } | null;
  isAuthenticated: boolean;
}

export function useAuth() {
  const router = useRouter();
  const queryClient = useQueryClient();

  // Get current user
  const { data: authData, isLoading: userLoading } = useQuery<AuthData>({
    queryKey: ["auth-user"],
    queryFn: async () => {
      // Check with Supabase directly
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        return { user: null, isAuthenticated: false };
      }

      return { user, isAuthenticated: user?.role === "authenticated" };
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

        return { user: signInData.user, session: signInData.session };
      }

      return { user: data.user, session: data.session };
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["auth-user"], {
        user: data.user,
        isAuthenticated: true,
      });
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

      return { user: data.user };
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["auth-user"], {
        user: data.user,
        isAuthenticated: true,
      });
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
    },
    onSuccess: () => {
      queryClient.setQueryData(["auth-user"], {
        user: null,
        isAuthenticated: false,
      });
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
        queryClient.setQueryData(["auth-user"], {
          user: session.user,
          isAuthenticated: true,
        });
      } else {
        queryClient.setQueryData(["auth-user"], {
          user: null,
          isAuthenticated: false,
        });
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
        if (!authData?.user)
          throw new Error("You must be logged in to comment");

        const { data, error } = await supabase
          .from("comments")
          .insert([
            {
              post_id: postId,
              user_id: authData.user.id,
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
        if (!authData?.user)
          throw new Error("You must be logged in to edit a comment");

        const { data, error } = await supabase
          .from("comments")
          .update({ content, updated_at: new Date().toISOString() })
          .eq("id", commentId)
          .eq("user_id", authData.user.id)
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
        if (!authData?.user)
          throw new Error("You must be logged in to delete a comment");

        const { error } = await supabase
          .from("comments")
          .delete()
          .eq("id", commentId)
          .eq("user_id", authData.user.id);

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
    user: authData?.user,
    isAuthenticated: authData?.isAuthenticated || false,
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
