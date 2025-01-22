import React from 'react';
import { Avatar, IconButton, Typography } from '@mui/material';
import { ThumbUp, ThumbDown, Reply, MoreVert, SwapVert } from '@mui/icons-material';
import './Comments.scss';

interface Comment {
  id: string;
  author: string;
  avatar: string;
  time: string;
  content: string;
  likes: number;
  dislikes: number;
  replies?: Comment[];
}

interface CommentsProps {
  comments: Comment[];
}

const CommentComponent: React.FC<{ comment: Comment }> = ({ comment }) => {
  return (
    <div className="comments__comment">
      <Avatar src={comment.avatar} className="comments__comment-avatar" />
      <div className="comments__comment-content">
        <div className="comments__comment-header">
          <Typography className="comments__comment-name">{comment.author}</Typography>
          <Typography className="comments__comment-time">{comment.time}</Typography>
          <IconButton size="small" sx={{ marginLeft: 'auto' }}>
            <MoreVert fontSize="small" />
          </IconButton>
        </div>
        <Typography className="comments__comment-text">{comment.content}</Typography>
        <div className="comments__comment-actions">
          <IconButton className="comments__comment-action">
            <ThumbUp fontSize="small" />
            <span>{comment.likes}</span>
          </IconButton>
          <IconButton className="comments__comment-action">
            <ThumbDown fontSize="small" />
            <span>{comment.dislikes}</span>
          </IconButton>
          <IconButton className="comments__comment-action">
            <Reply fontSize="small" />
            <span>Reply</span>
          </IconButton>
        </div>
        {comment.replies && comment.replies.length > 0 && (
          <div className="comments__replies">
            {comment.replies.map((reply) => (
              <CommentComponent key={reply.id} comment={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const Comments: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <div className="comments">
      <div className="comments__header">
        <h2>
          Comments <span>{comments.length}</span>
        </h2>
        <div className="comments__sort">
          <SwapVert fontSize="small" />
          Most recent
        </div>
      </div>
      <div className="comments__list">
        {comments.map((comment) => (
          <CommentComponent key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};