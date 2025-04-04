// "use client";

// import Link from "next/link";
// import {
//   ChevronLeft,
//   MessageSquare,
//   ThumbsUp,
//   Share2,
//   Flag,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { Textarea } from "@/components/ui/textarea";
// import { useAuth } from "@/hooks/useAuth";

// interface Post {
//   id: string;
//   title: string;
//   content: string;
//   created_at: string;
//   author?: string;
//   authorTitle?: string;
//   authorAvatar?: string;
//   tags?: string[];
//   likes?: number;
// }

// export default function DiscussionDetails({
//   discussion,
// }: {
//   discussion: Post;
// }) {
//   const { user } = useAuth();
//   return (
//     <main className="flex-1">
//       <div className="container px-4 py-6 md:px-6 md:py-8">
//         <div className="flex items-center gap-2 mb-6">
//           <Link href="/community" className="inline-flex items-center">
//             <ChevronLeft className="h-4 w-4 mr-1" />
//             Back to Community
//           </Link>
//         </div>

//         <Card className="mb-8">
//           <CardHeader className="pb-3">
//             <div className="flex flex-wrap gap-2 mb-2">
//               {discussion?.created_at &&
//                 new Date(discussion?.created_at).toLocaleString()}
//             </div>
//             <h1 className="text-2xl font-bold">{discussion?.title}</h1>
//             <div className="flex items-center gap-2 mt-2">
//               <Avatar className="h-8 w-8">
//                 <AvatarImage
//                   src={user?.user_metadata?.avatar_url}
//                   alt={user?.user_metadata?.name}
//                 />
//                 <AvatarFallback>
//                   {user?.user_metadata?.name.substring(0, 2)}
//                 </AvatarFallback>
//               </Avatar>
//               <div>
//                 <div className="font-medium">{user?.user_metadata?.name}</div>
//                 <div className="text-xs text-muted-foreground">
//                   {user?.user_metadata?.email}
//                 </div>
//               </div>
//             </div>
//           </CardHeader>
//           <CardContent>
//             <div className="prose max-w-none">
//               <p className="whitespace-pre-line">{discussion?.content || ""}</p>
//             </div>
//           </CardContent>
//           <CardFooter className="border-t pt-6 flex justify-between">
//             <div className="flex items-center gap-4">
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 className="flex items-center gap-1"
//               >
//                 <ThumbsUp className="h-4 w-4" />
//                 Like
//               </Button>
//             </div>
//           </CardFooter>
//         </Card>
//       </div>
//     </main>
//   );
// }

"use client";

import Link from "next/link";
import {
  ChevronLeft,
  MessageSquare,
  ThumbsUp,
  Share2,
  Flag,
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
import { useAuth } from "@/hooks/useAuth";
import { CommentSection } from "@/components/CommentSection";

interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
  author?: string;
  authorTitle?: string;
  authorAvatar?: string;
  tags?: string[];
  likes?: number;
}

export default function DiscussionDetails({
  discussion,
}: {
  discussion: Post;
}) {
  const { user } = useAuth();

  return (
    <main className="flex-1">
      <div className="container px-4 py-6 md:px-6 md:py-8">
        <div className="flex items-center gap-2 mb-6">
          <Link href="/community" className="inline-flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Community
          </Link>
        </div>

        <Card className="mb-8">
          <CardHeader className="pb-3">
            <div className="flex flex-wrap gap-2 mb-2">
              {discussion?.created_at &&
                new Date(discussion?.created_at).toLocaleString()}
            </div>
            <h1 className="text-2xl font-bold">{discussion?.title}</h1>
            <div className="flex items-center gap-2 mt-2">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={user?.user_metadata?.avatar_url}
                  alt={user?.user_metadata?.name}
                />
                <AvatarFallback>
                  {user?.user_metadata?.name?.substring(0, 2) || "UN"}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{user?.user_metadata?.name}</div>
                <div className="text-xs text-muted-foreground">
                  {user?.user_metadata?.email}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="whitespace-pre-line">{discussion?.content || ""}</p>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-6 flex justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1"
              >
                <ThumbsUp className="h-4 w-4" />
                Like
              </Button>
            </div>
          </CardFooter>
        </Card>

        {/* Comments Section */}
        <CommentSection postId={discussion.id} />
      </div>
    </main>
  );
}
