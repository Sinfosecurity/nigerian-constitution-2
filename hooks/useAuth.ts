// // import { useState } from "react";
// // import { User } from "@supabase/supabase-js";
// // import { useRouter } from "next/navigation";
// // import { supabase } from "@/services/supabase";
// // import { toast } from "sonner";

// // interface AuthState {
// //   user: User | null;
// //   loading: boolean;
// //   error: string | null;
// // }

// // export const useAuth = () => {
// //   const router = useRouter();
// //   const [state, setState] = useState<AuthState>({
// //     user: null,
// //     loading: false,
// //     error: null,
// //   });

// //   const signUp = async (email: string, password: string, name?: string) => {
// //     setState((prev) => ({ ...prev, loading: true, error: null }));

// //     try {
// //       const { data, error } = await supabase.auth.signUp({
// //         email,
// //         password,
// //         options: {
// //           data: {
// //             name: name || email.split("@")[0],
// //           },
// //         },
// //       });

// //       if (error) throw error;

// //       setState((prev) => ({
// //         ...prev,
// //         user: data.user,
// //         loading: false,
// //       }));

// //       // Redirect to dashboard or profile completion
// //       await router.push("/");
// //       toast.success("Registration successfull!");

// //       return data.user;
// //     } catch (err: any) {
// //       setState((prev) => ({
// //         ...prev,
// //         error: err.message || "Sign up failed",
// //         loading: false,
// //       }));
// //       throw err;
// //     }
// //   };

// //   const signIn = async (email: string, password: string) => {
// //     setState((prev) => ({ ...prev, loading: true, error: null }));

// //     try {
// //       const { data, error } = await supabase.auth.signInWithPassword({
// //         email,
// //         password,
// //       });

// //       if (error) throw error;

// //       setState((prev) => ({
// //         ...prev,
// //         user: data.user,
// //         loading: false,
// //       }));

// //       // Redirect to dashboard
// //       await router.push("/");
// //       toast.success("Login successful");

// //       return data.user;
// //     } catch (err: any) {
// //       setState((prev) => ({
// //         ...prev,
// //         error: err.message || "Sign in failed",
// //         loading: false,
// //       }));
// //       throw err;
// //     }
// //   };

// //   const signOut = async () => {
// //     setState((prev) => ({ ...prev, loading: true, error: null }));

// //     try {
// //       const { error } = await supabase.auth.signOut();

// //       if (error) throw error;

// //       setState({
// //         user: null,
// //         loading: false,
// //         error: null,
// //       });

// //       // Redirect to login page
// //       await router.push("/login");
// //       toast.success("Logout successful!");
// //     } catch (err: any) {
// //       setState((prev) => ({
// //         ...prev,
// //         error: err.message || "Sign out failed",
// //         loading: false,
// //       }));
// //     }
// //   };

// //   // Additional method to get current user
// //   const getCurrentUser = async () => {
// //     const {
// //       data: { user },
// //     } = await supabase.auth.getUser();
// //     return user;
// //   };

// //   return {
// //     ...state,
// //     signUp,
// //     signIn,
// //     signOut,
// //     getCurrentUser,
// //   };
// // };

// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// // import { supabase } from "@/lib/supabase";
// import { useRouter } from "next/navigation";
// import type { User } from "@supabase/supabase-js";
// import { supabase } from "@/services/supabase";

// export function useAuth() {
//   const router = useRouter();
//   const queryClient = useQueryClient();

//   const { data: user, isLoading: loading } = useQuery({
//     queryKey: ["auth-user"],
//     queryFn: async () => {
//       const {
//         data: { user },
//       } = await supabase.auth.getUser();
//       return user;
//     },
//   });

//   // const { mutate: signIn, isPending: signInLoading } = useMutation({
//   //   mutationFn: async ({
//   //     email,
//   //     password,
//   //   }: {
//   //     email: string;
//   //     password: string;
//   //   }) => {
//   //     const { data, error } = await supabase.auth.signInWithPassword({
//   //       email,
//   //       password,
//   //     });
//   //     if (error) throw error;
//   //     return data.user;
//   //   },
//   //   onSuccess: (user) => {
//   //     queryClient.setQueryData(["auth-user"], user);
//   //     // Router push is handled in the login page component
//   //   },
//   // });

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
//       return data.user;
//     },
//     onSuccess: (user) => {
//       queryClient.setQueryData(["auth-user"], user);
//       router.push("/");
//       router.refresh();
//     },
//   });

//   const { mutate: signUp, isPending: signUpLoading } = useMutation({
//     mutationFn: async ({
//       email,
//       password,
//       name,
//     }: {
//       email: string;
//       password: string;
//       name?: string;
//     }) => {
//       const { data, error } = await supabase.auth.signUp({
//         email,
//         password,
//         options: {
//           data: { name },
//         },
//       });
//       if (error) throw error;
//       return data.user;
//     },
//     onSuccess: () => {
//       router.push("/login");
//     },
//   });

//   const { mutate: signOut, isPending: signOutLoading } = useMutation({
//     mutationFn: async () => {
//       const { error } = await supabase.auth.signOut();
//       if (error) throw error;
//     },
//     onSuccess: () => {
//       queryClient.setQueryData(["auth-user"], null);
//       router.push("/login");
//       router.refresh();
//     },
//   });

//   return {
//     user,
//     loading: loading,
//     signInLoading,
//     signOutLoading,
//     signIn,
//     signUp,
//     signOut,
//   };
// }

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { toast } from "sonner";
import { supabase } from "@/services/supabase";

export function useAuth() {
  const router = useRouter();
  const queryClient = useQueryClient();

  // Get current user
  const { data: user, isLoading: userLoading } = useQuery({
    queryKey: ["auth-user"],
    queryFn: async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
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
      return data.user;
    },
    onSuccess: (user) => {
      queryClient.setQueryData(["auth-user"], user);
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
  };
}
