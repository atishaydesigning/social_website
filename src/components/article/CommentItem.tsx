import React, { useState } from "react";
import { IComment, CommentItemProps } from "@/types";
import { Button } from "@mui/material";

const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  postId,
  setPosts,
  level,
}) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replyUserName, setReplyUserName] = useState("");

  const toggleReplyForm = () => {
    setShowReplyForm((prev) => !prev);
  };

  const handleAddReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    const newReply: IComment = {
      id: Date.now(),
      parentId: comment.id,
      postId,
      text: replyText,
      userName: replyUserName ?? "Anonymous",
      replies: [],
    };

    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          const updatedComments = addReplyToComments(post.comments, comment.id, newReply);
          return { ...post, comments: updatedComments };
        }
        return post;
      })
    );

    setReplyText("");
    setReplyUserName("");
    setShowReplyForm(false);
  };

  const addReplyToComments = (
    comments: IComment[],
    parentId: number | string,
    reply: IComment
  ): IComment[] => {
    return comments.map((c) => {
      if (c.id === parentId) {
        return {
          ...c,
          replies: c.replies ? [...c.replies, reply] : [reply],
        };
      } else if (c.replies && c.replies.length > 0) {
        return {
          ...c,
          replies: addReplyToComments(c.replies, parentId, reply),
        };
      }
      return c;
    });
  };

  return (
    <div
      className="comment-item "
      style={{ marginLeft: `${level * 20}px`, marginBottom: "0.5rem" , marginTop: "0.7rem" }}
    >
      
      <p>
        <strong>{comment.userName || "Anonymous"}</strong>: {comment.text}
      </p>

      {/* <button onClick={toggleReplyForm} >
        {showReplyForm ? "Cancel" : "Reply"}
      </button> */}
      <Button onClick={toggleReplyForm} variant="contained">
      {showReplyForm ? "Cancel" : "Reply"}
      </Button>

      {showReplyForm && (
        <form onSubmit={handleAddReply} style={{ marginTop: "0.5rem" }} className="comment-form">
          <input
            type="text"
            placeholder="Type your reply"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <Button type="submit" variant="contained">Add Reply</Button>
        </form>
      )}

      {comment?.replies?.map((child) => (
          <CommentItem
            key={child.id}
            comment={child}
            postId={postId}
            setPosts={setPosts}
            level={level + 1}
          />
        )) || null}
    </div>
  );
};

export default CommentItem;

            
    