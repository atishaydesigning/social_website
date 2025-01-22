import React from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import { Favorite, ChatBubbleOutline, Share } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './ArticleCard.scss';
import {ArticleCardProps} from "@/types"


export const ArticleCard = ({
  id,
  publication,
  publicationIcon,
  title,
  author,
  readTime,
  image,
  preview,
  likes,
  comment_count,
  date,
}: ArticleCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${id}`);
  };

  const handleActionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <article className="article-card" onClick={handleClick}>
      <div className="article-card__header">
        <Avatar src={publicationIcon} className="article-card__avatar" />
        <Typography className="article-card__publication" dangerouslySetInnerHTML={{ __html: publication }} />
        <Typography className="article-card__date">{date}</Typography>
      </div>
      
      <div className="article-card__content">
        <div className="article-card__text">
          <Typography variant="h2" className="article-card__title" dangerouslySetInnerHTML={{ __html: title }} />
          {preview && (
            <Typography className="article-card__preview" >{preview}</Typography>
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
      
      <div className="article-card__actions" onClick={handleActionClick}>
        <IconButton className="article-card__action">
          <Favorite fontSize="small" />
          <span>{likes}</span>
        </IconButton>
        <IconButton className="article-card__action">
          <ChatBubbleOutline fontSize="small" />
          <span>{comment_count}</span>
        </IconButton>
        <IconButton className="article-card__action article-card__action--share">
          <Share fontSize="small" />
          <span>Share</span>
        </IconButton>
      </div>
    </article>
  );
};