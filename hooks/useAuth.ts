import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { supabase } from "@/services/supabase";
import { toast } from "sonner";

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const useAuth = () => {
  const router = useRouter();
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: false,
    error: null,
  });

  const signUp = async (email: string, password: string, name?: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name || email.split("@")[0],
          },
        },
      });

      if (error) throw error;

      setState((prev) => ({
        ...prev,
        user: data.user,
        loading: false,
      }));

      // Redirect to dashboard or profile completion
      await router.push("/");
      toast.success("Registration successfull!");

      return data.user;
    } catch (err: any) {
      setState((prev) => ({
        ...prev,
        error: err.message || "Sign up failed",
        loading: false,
      }));
      throw err;
    }
  };

  const signIn = async (email: string, password: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      setState((prev) => ({
        ...prev,
        user: data.user,
        loading: false,
      }));

      // Redirect to dashboard
      await router.push("/");
      toast.success("Login successful");

      return data.user;
    } catch (err: any) {
      setState((prev) => ({
        ...prev,
        error: err.message || "Sign in failed",
        loading: false,
      }));
      throw err;
    }
  };

  const signOut = async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const { error } = await supabase.auth.signOut();

      if (error) throw error;

      setState({
        user: null,
        loading: false,
        error: null,
      });

      // Redirect to login page
      await router.push("/login");
      toast.success("Logout successful!");
    } catch (err: any) {
      setState((prev) => ({
        ...prev,
        error: err.message || "Sign out failed",
        loading: false,
      }));
    }
  };

  // Additional method to get current user
  const getCurrentUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  };

  return {
    ...state,
    signUp,
    signIn,
    signOut,
    getCurrentUser,
  };
};
