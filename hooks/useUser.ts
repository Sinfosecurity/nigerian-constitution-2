// hooks/useUser.ts
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/services/supabase";

export function useUser() {
  const [user, setUser] = useState<User | null | undefined>(undefined); // undefined = loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return { user, loading };
}
