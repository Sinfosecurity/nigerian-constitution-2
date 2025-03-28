"use client";

import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "@/services/apiAuth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function useSignup() {
  const router = useRouter();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success("Account created successfully!");
      router.push("/login");
    },
  });

  return { signup, isPending };
}
