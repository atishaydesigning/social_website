import React, { useState } from "react";
import { IComment, Article } from "@/types";
import CommentItem from "@/components/article/CommentItem";
import './Comments.scss'
import { Button } from "@mui/material";

interface CommentListProps {
  postId: number|string;
  comments: IComment[];
  setPosts: React.Dispatch<React.SetStateAction<Article[]>>;
}

export const Comments: React.FC<CommentListProps> = ({
  postId,
  comments,
  setPosts,
}) => {
  const [commentText, setCommentText] = useState("");

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: IComment = {
      id: Date.now(),
      postId,
      parentId: null,
      text: commentText,
      userName: window.localStorage.getItem("USER") ?? "Anonymous",
      replies: [],
    };

    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return { ...post, comments: [...post.comments, newComment] };
        }
        
        return post;
      })
    );

    setCommentText("");
  };

  return (
    <div className="comment-list">
      <h4 className="comment-heading">Comments</h4>

      <form
        onSubmit={handleAddComment}
        className="comment-form"
      >
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      
        <Button type="submit" variant="contained">
          Comment
        </Button>
      </form>

      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          postId={postId}
          setPosts={setPosts}
          level={0}
        />
      ))}
    </div>
  );
};