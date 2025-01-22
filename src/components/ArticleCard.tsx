import React from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import { Favorite, ChatBubbleOutline, Share } from '@mui/icons-material';
import './ArticleCard.scss';

interface ArticleCardProps {
  publication: string;
  publicationIcon: string;
  title: string;
  author: string;
  readTime: string;
  image?: string;
  preview?: string;
  likes: number;
  comments: number;
}

export const ArticleCard = ({
  publication,
  publicationIcon,
  title,
  author,
  readTime,
  image,
  preview,
  likes,
  comments,
}: ArticleCardProps) => {
  return (
    <article className="article-card">
      <div className="article-card__header">
        <Avatar src={publicationIcon} className="article-card__avatar" />
        <Typography className="article-card__publication">{publication}</Typography>
      </div>
      
      <div className="article-card__content">
        <div className="article-card__text">
          <Typography variant="h2" className="article-card__title">
            {title}
          </Typography>
          {preview && (
            <Typography className="article-card__preview">{preview}</Typography>
          )}
          <div className="article-card__meta">
            <Typography>{author}</Typography>
            <Typography>{readTime}</Typography>
          </div>
        </div>
        {image && (
          <img src={image} alt={title} className="article-card__image" />
        )}
      </div>
      
      <div className="article-card__actions">
        <IconButton className="article-card__action">
          <Favorite fontSize="small" />
          <span>{likes}</span>
        </IconButton>
        <IconButton className="article-card__action">
          <ChatBubbleOutline fontSize="small" />
          <span>{comments}</span>
        </IconButton>
        <IconButton className="article-card__action article-card__action--share">
          <Share fontSize="small" />
          <span>Share</span>
        </IconButton>
      </div>
    </article>
  );
};