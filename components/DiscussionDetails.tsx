"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  MessageSquare,
  ThumbsUp,
  Edit,
  Trash2,
  Send,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { useAuth, type Comment } from "@/hooks/useAuth";
import { formatDistanceToNow } from "date-fns";

interface Post {
  id: number; // Changed to number to match int8 type
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
  const { user, useComments, useAddComment, useEditComment, useDeleteComment } =
    useAuth();
  const [newComment, setNewComment] = useState("");
  const [editingComment, setEditingComment] = useState<number | null>(null);
  const [editContent, setEditContent] = useState("");

  // Fetch comments for this post
  const { data: comments = [], isLoading: commentsLoading } = useComments(
    discussion.id
  );

  // Mutations for comment actions
  const addComment = useAddComment();
  const editComment = useEditComment();
  const deleteComment = useDeleteComment();

  // Handle comment submission
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    addComment.mutate(
      { postId: discussion.id, content: newComment },
      {
        onSuccess: () => {
          setNewComment("");
        },
      }
    );
  };

  // Handle edit submission
  const handleSubmitEdit = (commentId: number) => {
    if (!editContent.trim()) return;

    editComment.mutate(
      {
        commentId,
        content: editContent,
        postId: discussion.id,
      },
      {
        onSuccess: () => {
          setEditingComment(null);
          setEditContent("");
        },
      }
    );
  };

  // Start editing a comment
  const startEditing = (comment: Comment) => {
    setEditingComment(comment.id);
    setEditContent(comment.content);
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingComment(null);
    setEditContent("");
  };

  // Handle comment deletion
  const handleDeleteComment = (commentId: number) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      deleteComment.mutate({ commentId, postId: discussion.id });
    }
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true });
    } catch (e) {
      return dateString;
    }
  };

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
                  {user?.user_metadata?.name?.substring(0, 2) || "U"}
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
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Comments ({comments.length})
          </h2>

          {/* Comment Form */}
          {user && (
            <form onSubmit={handleSubmitComment} className="mb-8">
              <div className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={user?.user_metadata?.avatar_url}
                    alt={user?.user_metadata?.name}
                  />
                  <AvatarFallback>
                    {user?.user_metadata?.name?.substring(0, 2) || "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="mb-2"
                    rows={3}
                  />
                  <Button
                    type="submit"
                    disabled={!newComment.trim() || addComment.isPending}
                    className="flex items-center gap-1"
                  >
                    <Send className="h-4 w-4" />
                    {addComment.isPending ? "Posting..." : "Post Comment"}
                  </Button>
                </div>
              </div>
            </form>
          )}

          {/* Comments List */}
          {commentsLoading ? (
            <div className="text-center py-8">Loading comments...</div>
          ) : comments.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No comments yet. Be the first to comment!
            </div>
          ) : (
            <div className="space-y-6">
              {comments.map((comment: Comment) => (
                <Card key={comment.id} className="border-l-4 border-l-primary">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={user?.user_metadata?.avatar_url}
                            alt={user?.user_metadata?.name}
                          />
                          <AvatarFallback>
                            {comment.user?.name?.substring(0, 2) || "U"}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">
                            {comment.user?.name || comment.user?.email}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {formatDate(comment.created_at)}
                            {comment.updated_at !== comment.created_at &&
                              " (edited)"}
                          </div>
                        </div>
                      </div>

                      {/* Comment Actions */}
                      {user && user.id === comment.user_id && (
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => startEditing(comment)}
                            className="h-8 w-8"
                          >
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteComment(comment.id)}
                            className="h-8 w-8 text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    {editingComment === comment.id ? (
                      <div className="space-y-2">
                        <Textarea
                          value={editContent}
                          onChange={(e) => setEditContent(e.target.value)}
                          className="mb-2"
                          rows={3}
                        />
                        <div className="flex gap-2 justify-end">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={cancelEditing}
                          >
                            <X className="h-4 w-4 mr-1" />
                            Cancel
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => handleSubmitEdit(comment.id)}
                            disabled={
                              !editContent.trim() || editComment.isPending
                            }
                          >
                            <Send className="h-4 w-4 mr-1" />
                            {editComment.isPending ? "Saving..." : "Save"}
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <p className="whitespace-pre-line">{comment.content}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
