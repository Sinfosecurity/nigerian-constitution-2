// import { useState } from "react";
// import { useAuth } from "@/hooks/useAuth";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { ThumbsUp, Trash2, Edit, X, Check } from "lucide-react";
// import { formatDistanceToNow } from "date-fns";
// import { Separator } from "@/components/ui/separator";

// interface Comment {
//   id: string;
//   post_id: number;
//   user_id: string;
//   content: string;
//   created_at: string;
//   updated_at: string;
//   user?: {
//     id: string;
//     email: string;
//     user_metadata: {
//       name: string;
//       avatar_url?: string;
//     };
//   };
// }

// interface CommentSectionProps {
//   postId: number;
// }

// export const CommentSection = ({ postId }: CommentSectionProps) => {
//   const {
//     user,
//     usePostComments,
//     useAddComment,
//     useUpdateComment,
//     useDeleteComment,
//   } = useAuth();
//   const [newComment, setNewComment] = useState("");
//   const [editingComment, setEditingComment] = useState<string | null>(null);
//   const [editContent, setEditContent] = useState("");

//   const { data: comments, isLoading } = usePostComments(postId);
//   const { mutate: addCommentMutation } = useAddComment();
//   const { mutate: updateCommentMutation } = useUpdateComment();
//   const { mutate: deleteCommentMutation } = useDeleteComment();

//   const handleSubmitComment = () => {
//     if (!newComment.trim()) return;

//     addCommentMutation(
//       { postId, content: newComment },
//       {
//         onSuccess: () => {
//           setNewComment("");
//         },
//       }
//     );
//   };

//   const handleEditComment = (comment: Comment) => {
//     setEditingComment(comment.id);
//     setEditContent(comment.content);
//   };

//   const handleSaveEdit = (commentId: string) => {
//     if (!editContent.trim()) return;

//     updateCommentMutation(
//       { commentId, postId, content: editContent },
//       {
//         onSuccess: () => {
//           setEditingComment(null);
//           setEditContent("");
//         },
//       }
//     );
//   };

//   const handleCancelEdit = () => {
//     setEditingComment(null);
//     setEditContent("");
//   };

//   const handleDeleteComment = (commentId: string) => {
//     if (window.confirm("Are you sure you want to delete this comment?")) {
//       deleteCommentMutation({ commentId, postId });
//     }
//   };

//   const formatDate = (dateString: string) => {
//     try {
//       return formatDistanceToNow(new Date(dateString), { addSuffix: true });
//     } catch (e) {
//       return dateString;
//     }
//   };

//   return (
//     <div className="mt-8 space-y-6">
//       <h2 className="text-xl font-bold">
//         Comments ({isLoading ? "..." : comments?.length || 0})
//       </h2>

//       {user ? (
//         <Card>
//           <CardHeader className="pb-2">
//             <div className="flex items-center gap-2">
//               <Avatar className="h-8 w-8">
//                 <AvatarImage
//                   src={user.user_metadata?.avatar_url}
//                   alt={user.user_metadata?.name || "User"}
//                 />
//                 <AvatarFallback>
//                   {(user.user_metadata?.name || "User").substring(0, 2)}
//                 </AvatarFallback>
//               </Avatar>
//               <div className="font-medium">
//                 {user.user_metadata?.name || user.email}
//               </div>
//             </div>
//           </CardHeader>
//           <CardContent>
//             <Textarea
//               placeholder="Add a comment..."
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               className="min-h-[80px]"
//             />
//           </CardContent>
//           <CardFooter className="flex justify-end">
//             <Button onClick={handleSubmitComment}>Post Comment</Button>
//           </CardFooter>
//         </Card>
//       ) : (
//         <Card className="p-4 text-center">
//           <p>Please sign in to comment on this discussion.</p>
//         </Card>
//       )}

//       {isLoading ? (
//         <div className="text-center py-4">Loading comments...</div>
//       ) : comments?.length ? (
//         <div className="space-y-4">
//           {comments.map((comment) => (
//             <Card key={comment.id} className="border-l-4 border-l-primary/25">
//               <CardHeader className="pb-2">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <Avatar className="h-8 w-8">
//                       <AvatarImage
//                         src={comment.user?.user_metadata?.avatar_url}
//                         alt={comment.user?.user_metadata?.name || "User"}
//                       />
//                       <AvatarFallback>
//                         {(
//                           comment.user?.user_metadata?.name || "User"
//                         ).substring(0, 2)}
//                       </AvatarFallback>
//                     </Avatar>
//                     <div>
//                       <div className="font-medium">
//                         {comment.user?.user_metadata?.name ||
//                           comment.user?.email ||
//                           "Anonymous"}
//                       </div>
//                       <div className="text-xs text-muted-foreground">
//                         {formatDate(comment.created_at)}
//                         {comment.created_at !== comment.updated_at && (
//                           <span> (edited)</span>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   {user && comment.user_id === user.id && (
//                     <div className="flex gap-2">
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         onClick={() => handleEditComment(comment)}
//                       >
//                         <Edit className="h-4 w-4" />
//                       </Button>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         onClick={() => handleDeleteComment(comment.id)}
//                       >
//                         <Trash2 className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   )}
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 {editingComment === comment.id ? (
//                   <div className="space-y-2">
//                     <Textarea
//                       value={editContent}
//                       onChange={(e) => setEditContent(e.target.value)}
//                       className="min-h-[80px]"
//                     />
//                     <div className="flex justify-end gap-2">
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         onClick={handleCancelEdit}
//                       >
//                         <X className="h-4 w-4 mr-1" /> Cancel
//                       </Button>
//                       <Button
//                         size="sm"
//                         onClick={() => handleSaveEdit(comment.id)}
//                       >
//                         <Check className="h-4 w-4 mr-1" /> Save
//                       </Button>
//                     </div>
//                   </div>
//                 ) : (
//                   <p className="whitespace-pre-line">{comment.content}</p>
//                 )}
//               </CardContent>
//               <CardFooter className="pt-2">
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   className="flex items-center gap-1"
//                 >
//                   <ThumbsUp className="h-4 w-4" />
//                   Like
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-4 text-muted-foreground">
//           No comments yet. Be the first to comment!
//         </div>
//       )}
//     </div>
//   );
// };
