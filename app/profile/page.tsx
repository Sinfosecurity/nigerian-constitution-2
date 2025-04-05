"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader2, Mail, User, Settings, Shield } from "lucide-react";
import { useAuth as useAuthData } from "@/hooks/useAuth";

export default function ProfilePage() {
  const router = useRouter();
  const { user, isLoading } = useAuth();
  const [mounted, setMounted] = useState(false);
  const { user: userData } = useAuthData();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isLoading && !user?.isLoggedIn) {
      router.push("/login");
    }
  }, [mounted, isLoading, user, router]);

  // Helper function to get initials
  const getInitials = (name?: string) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0].toUpperCase())
      .slice(0, 2)
      .join("");
  };

  if (!mounted || isLoading || !user?.isLoggedIn) {
    return (
      <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-8">
        <Loader2 className="h-8 w-8 animate-spin text-green-600" />
      </div>
    );
  }

  return (
    <div className="container max-w-4xl py-8">
      <div className="flex flex-col items-center mb-8">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage
            src={userData?.user_metadata?.avatar_url}
            alt={userData?.user_metadata?.name || "User avatar"}
          />
          <AvatarFallback className="text-lg bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
            {userData?.user_metadata?.name}
          </AvatarFallback>
        </Avatar>
        <h1 className="text-3xl font-bold text-green-800 dark:text-green-200">
          {userData?.user_metadata?.name || "Welcome"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          {userData?.user_metadata?.email}
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-green-700" />
              Personal Information
            </CardTitle>
            <CardDescription>
              Manage your personal details and preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Full Name
                  </label>
                  <p className="mt-1 text-lg">
                    {userData?.user_metadata?.name || "Not set"}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Email Address
                  </label>
                  <p className="mt-1 text-lg">
                    {userData?.user_metadata?.email}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Account Created
                  </label>
                  <p className="mt-1 text-lg">
                    {userData?.created_at &&
                      new Date(userData.created_at).toLocaleString()}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Language Preference
                  </label>
                  <p className="mt-1 text-lg">English</p>
                </div>
              </div>
              {/* <div className="flex gap-4 pt-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <User className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
                <Button
                  variant="outline"
                  className="border-green-200 text-green-600 hover:bg-green-50 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/30"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Account Settings
                </Button>
              </div> */}
            </div>
          </CardContent>
        </Card>

        {/* <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              Security Settings
            </CardTitle>
            <CardDescription>
              Manage your account security and preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start border-green-200 text-green-600 hover:bg-green-50 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/30"
              >
                <Mail className="mr-2 h-4 w-4" />
                Change Email Address
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start border-green-200 text-green-600 hover:bg-green-50 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/30"
              >
                <Shield className="mr-2 h-4 w-4" />
                Change Password
              </Button>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
}
