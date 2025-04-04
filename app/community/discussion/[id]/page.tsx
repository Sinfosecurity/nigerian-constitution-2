import Link from "next/link";
import {
  BookOpen,
  ChevronLeft,
  MessageSquare,
  ThumbsUp,
  Share2,
  Flag,
  Reply,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { getDiscussionsById } from "@/services/apiPost";
import DiscussionDetails from "@/components/DiscussionDetails";

export default async function DiscussionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const discussion = await getDiscussionsById(id);

  return (
    <div className="flex min-h-screen flex-col">
      <DiscussionDetails discussion={discussion} />
    </div>
  );
}
