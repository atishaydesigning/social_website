import React from 'react';
import { Typography, Avatar, IconButton } from '@mui/material';
import { Favorite, ChatBubbleOutline, Share } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './ArticleCard.scss';
import {Article} from "@/types"


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
}: Article) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${id}`);
  };

  const handleActionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  console.log("image",image)

  return (
    <article className="article-card" onClick={handleClick}>
      <div className="article-card__header">
        <Avatar src={publicationIcon} className="article-card__avatar" />
        <Typography
          className="article-card__publication"
          dangerouslySetInnerHTML={{ __html: publication }}
        />
        <Typography
          className="article-card__date"
          sx={{
            fontSize: {
              xs: "0.7rem",
              sm: "0.8rem",
            },
          }}
        >
          {date}
        </Typography>
      </div>

      <div className="article-card__content">
        <div className="article-card__text">
          <Typography
            component="p"
            className="article-card__title"
            dangerouslySetInnerHTML={{ __html: title }}
            sx={{
              fontSize:"16px",
              fontWeight:400,
              wordBreak:"break-word"
            }}
          />
          {preview && (
            <Typography
              className="article-card__preview"
              sx={{
                fontSize: {
                  xs: "0.7rem",
                  sm: "1rem",
                }, 
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3, 
                overflow: "hidden",
                wordBreak:"break-word",
                textOverflow: "ellipsis",
              }}
              dangerouslySetInnerHTML={{ __html: preview }}
            >
              {/* {preview} */}
            </Typography>
          )}

          <div className="article-card__meta">
            <Typography
              sx={{
                fontSize: {
                  xs: "0.7rem",
                  sm: "0.8rem",
                },
              }}
            >
              {author}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.7rem",
                  sm: "0.8rem",
                },
              }}
            >
              {readTime}
            </Typography>
          </div>
        </div>
        {image && (
          <img src={image} alt={title} className="article-card__image" />
        )}
      </div>

      <div className="article-card__actions" onClick={handleActionClick}>
        <IconButton className="article-card__action" sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}>
          <Favorite fontSize="small" />
          <span>{likes}</span>
        </IconButton>
        <IconButton className="article-card__action" sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}>
          <ChatBubbleOutline fontSize="small" />
          <span>{comment_count}</span>
        </IconButton>
        <IconButton
          className="article-card__action article-card__action--share"
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Share fontSize="small" />
          <span>Share</span>
        </IconButton>
      </div>
    </article>
  );
};
