// interface Post {
//   id: string;
//   title: string;
//   content: string;
//   created_at: string;
//   //  author: string;
//   //   replies: number;
//   //   date: string;
//   // add other fields from your database as needed
// }
// export default function DiscussionDetails({ discussion }) {
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
//               {discussion.tags.map((tag, index) => (
//                 <Badge key={index} variant="outline">
//                   {tag}
//                 </Badge>
//               ))}
//             </div>
//             <h1 className="text-2xl font-bold">{discussion?.title}</h1>
//             <div className="flex items-center gap-2 mt-2">
//               <Avatar className="h-8 w-8">
//                 <AvatarImage src={} alt={discussion.author} />
//                 <AvatarFallback>
//                   {discussion.author.substring(0, 2)}
//                 </AvatarFallback>
//               </Avatar>
//               <div>
//                 <div className="font-medium">{discussion.author}</div>
//                 <div className="text-xs text-muted-foreground">
//                   {discussion.authorTitle}
//                 </div>
//               </div>
//               <span className="text-xs text-muted-foreground">
//                 • {discussion?.created_at}
//               </span>
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
//                 Like ({discussion.likes})
//               </Button>
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 className="flex items-center gap-1"
//               >
//                 <Share2 className="h-4 w-4" />
//                 Share
//               </Button>
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 className="flex items-center gap-1"
//               >
//                 <Flag className="h-4 w-4" />
//                 Report
//               </Button>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-muted-foreground">
//               <MessageSquare className="h-4 w-4" />
//               {discussion.replies.length} replies
//             </div>
//           </CardFooter>
//         </Card>

//         <div className="mb-8">
//           <h2 className="text-xl font-bold mb-4">
//             Replies ({discussion.replies.length})
//           </h2>
//           <div className="space-y-6">
//             {discussion.replies.map((reply, index) => (
//               <Card
//                 key={`reply-${reply.id}-${index}`}
//                 className="border-l-4 border-l-primary"
//               >
//                 <CardHeader className="pb-3">
//                   <div className="flex items-center gap-2">
//                     <Avatar className="h-8 w-8">
//                       <AvatarImage
//                         src={reply.authorAvatar}
//                         alt={reply.author}
//                       />
//                       <AvatarFallback>
//                         {reply.author.substring(0, 2)}
//                       </AvatarFallback>
//                     </Avatar>
//                     <div>
//                       <div className="font-medium">{reply.author}</div>
//                       <div className="text-xs text-muted-foreground">
//                         {reply.authorTitle}
//                       </div>
//                     </div>
//                     <span className="text-xs text-muted-foreground">
//                       • {reply.date}
//                     </span>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="prose max-w-none">
//                     <p className="whitespace-pre-line">{reply.content || ""}</p>
//                   </div>
//                 </CardContent>
//                 <CardFooter className="border-t pt-4 flex justify-between">
//                   <div className="flex items-center gap-4">
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       className="flex items-center gap-1"
//                     >
//                       <ThumbsUp className="h-4 w-4" />
//                       Like ({reply.likes})
//                     </Button>
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       className="flex items-center gap-1"
//                     >
//                       <Reply className="h-4 w-4" />
//                       Reply
//                     </Button>
//                   </div>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>
//         </div>

//         <Card className="mb-8">
//           <CardHeader>
//             <h2 className="text-xl font-bold">Join the Discussion</h2>
//           </CardHeader>
//           <CardContent>
//             <Textarea
//               placeholder="Share your thoughts or ask a question..."
//               className="min-h-[150px]"
//             />
//           </CardContent>
//           <CardFooter className="flex justify-end">
//             <Button>
//               <MessageSquare className="mr-2 h-4 w-4" />
//               Post Reply
//             </Button>
//           </CardFooter>
//         </Card>

//         <div className="bg-muted p-4 rounded-lg">
//           <h3 className="font-medium mb-2">
//             Related Constitutional Provisions
//           </h3>
//           <p className="text-sm mb-4">
//             <strong>Section 42 of the Nigerian Constitution:</strong> Right to
//             Freedom from Discrimination
//           </p>
//           <p className="text-sm">
//             (1) A citizen of Nigeria of a particular community, ethnic group,
//             place of origin, sex, religion or political opinion shall not, by
//             reason only that he is such a person:
//             <br />
//             (a) be subjected either expressly by, or in the practical
//             application of, any law in force in Nigeria or any executive or
//             administrative action of the government, to disabilities or
//             restrictions to which citizens of Nigeria of other communities,
//             ethnic groups, places of origin, sex, religions or political
//             opinions are not made subject; or
//             <br />
//             (b) be accorded either expressly by, or in the practical application
//             of, any law in force in Nigeria or any such executive or
//             administrative action, any privilege or advantage that is not
//             accorded to citizens of Nigeria of other communities, ethnic groups,
//             places of origin, sex, religions or political opinions.
//           </p>
//           <div className="mt-4">
//             <Link href="/constitution/chapter/4#section-42">
//               <Button variant="outline" size="sm">
//                 View Full Section
//               </Button>
//             </Link>
//           </div>
//         </div>
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
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/hooks/useAuth";

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
              {user?.user_metadata?.email}
            </div>
            <h1 className="text-2xl font-bold">{discussion?.title}</h1>
            <div className="flex items-center gap-2 mt-2">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={user?.user_metadata?.avatar_url}
                  alt={user?.user_metadata?.name}
                />
                <AvatarFallback>
                  {user?.user_metadata?.name.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{user?.user_metadata?.name}</div>
                <div className="text-xs text-muted-foreground">
                  {user?.user_metadata?.name}
                </div>
              </div>
              <span className="text-xs text-muted-foreground">
                • {discussion?.created_at}
              </span>
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
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1"
              >
                <Flag className="h-4 w-4" />
                Report
              </Button>
            </div>
          </CardFooter>
        </Card>

        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-medium mb-2">
            Related Constitutional Provisions
          </h3>
          <p className="text-sm mb-4">
            <strong>Section 42 of the Nigerian Constitution:</strong> Right to
            Freedom from Discrimination
          </p>
          <p className="text-sm">{discussion?.content}</p>
          <div className="mt-4">
            <Link href="/constitution/chapter/4#section-42">
              <Button variant="outline" size="sm">
                View Full Section
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
