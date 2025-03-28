// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Mail, CheckCircle, AlertCircle } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Alert, AlertDescription } from "@/components/ui/alert"
// import { useLanguage } from "@/contexts/language-context"
// import { useTranslation } from "@/hooks/use-translation"

// export function NewsletterSubscription() {
//   const { currentLanguage } = useLanguage()
//   const { t } = useTranslation(currentLanguage.code)

//   const [email, setEmail] = useState("")
//   const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
//   const [message, setMessage] = useState("")

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
//       setStatus("error")
//       setMessage(t("newsletter.invalidEmail"))
//       return
//     }

//     setStatus("loading")

//     try {
//       // In a real app, you would call your API to subscribe the user
//       // await fetch('/api/subscribe', {
//       //   method: 'POST',
//       //   headers: { 'Content-Type': 'application/json' },
//       //   body: JSON.stringify({ email }),
//       // });

//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000))

//       setStatus("success")
//       setMessage(t("newsletter.successMessage"))
//       setEmail("")
//     } catch (error) {
//       setStatus("error")
//       setMessage(t("newsletter.errorMessage"))
//     }
//   }

//   return (
//     <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:from-blue-950 dark:to-indigo-950">
//       <div className="mx-auto max-w-md text-center">
//         <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
//           <Mail className="h-6 w-6 text-blue-600 dark:text-blue-300" />
//         </div>
//         <h3 className="mb-2 text-2xl font-bold">{t("newsletter.title")}</h3>
//         <p className="mb-6 text-gray-600 dark:text-gray-300">{t("newsletter.description")}</p>

//         {status === "success" ? (
//           <Alert className="bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800">
//             <CheckCircle className="h-4 w-4" />
//             <AlertDescription>{message}</AlertDescription>
//           </Alert>
//         ) : status === "error" ? (
//           <Alert className="bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800">
//             <AlertCircle className="h-4 w-4" />
//             <AlertDescription>{message}</AlertDescription>
//           </Alert>
//         ) : (
//           <form onSubmit={handleSubmit} className="flex gap-2">
//             <Input
//               type="email"
//               placeholder={t("newsletter.placeholder")}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="flex-1"
//               required
//             />
//             <Button type="submit" disabled={status === "loading"}>
//               {status === "loading" ? t("newsletter.subscribing") : t("newsletter.subscribe")}
//             </Button>
//           </form>
//         )}

//         <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">{t("newsletter.privacyNotice")}</p>
//       </div>
//     </div>
//   )
// }

"use client";

import { useState } from "react";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { Alert } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";

export function NewsletterSubscription() {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage.code);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      setMessage(t("newsletter.invalidEmail"));
      return;
    }

    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setMessage(t("newsletter.successMessage"));
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(t("newsletter.errorMessage"));
    }
  };

  return (
    <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 dark:from-green-950 dark:to-emerald-950 border border-green-100">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
          <Mail className="h-6 w-6 text-green-600 dark:text-green-300" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-green-800 dark:text-green-100">
          {t("newsletter.title")}
        </h3>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          {t("newsletter.description")}
        </p>

        {status === "success" ? (
          <Alert className="bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800">
            <CheckCircle className="h-4 w-4" />
            <span className="ml-2">{message}</span>
          </Alert>
        ) : status === "error" ? (
          <Alert className="bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800">
            <AlertCircle className="h-4 w-4" />
            <span className="ml-2">{message}</span>
          </Alert>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder={t("newsletter.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-green-200 focus:border-green-500 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
              disabled={status === "loading"}
            >
              {status === "loading"
                ? "submitting"
                : "submit"}
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          {t("newsletter.privacyNotice")}
        </p>
      </div>
    </div>
  );
}
