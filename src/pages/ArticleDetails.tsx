import { Box, Container, Typography, IconButton, Avatar } from '@mui/material';
import { Favorite, ChatBubbleOutline, Share } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { Comments } from '../components/Comments';
import './ArticleDetails.scss';
import { useEffect, useState } from 'react';
import { Article } from '@/types';
import { articles } from '@/data/articles';

export const ArticleDetail = () => {
  const [article, setArticle] = useState<Article>()
  const { id } = useParams();
  
  useEffect(() => {
    if(id){
      const data = articles.find((a:Article) => a.id === parseInt(id));
      setArticle(data)
    }
  }, [id])

  console.log(article,"article")

  
  if (!article) return <div>Article not found</div>;

  return (
    <Box className="article-detail">
      <Container maxWidth="lg">
        <Box className="article-detail__header">
          <Box className="article-detail__publication">
            <Avatar src={article.publicationIcon} className="article-detail__avatar" />
            <Typography className="article-detail__publication-name">{article.publication}</Typography>
            <Typography className="article-detail__date">{article.date}</Typography>
          </Box>
          <Box className="article-detail__actions-top">
            <IconButton>Subscribe</IconButton>
            <IconButton>Play</IconButton>
            <IconButton>More</IconButton>
          </Box>
        </Box>

        <Typography variant="h1" className="article-detail__title">
          {article.title}
        </Typography>

        <Box className="article-detail__meta">
          <Typography>{article.author}</Typography>
          <Typography>{article.readTime}</Typography>
        </Box>

        {/* {article.image && ( */}
          <img src={article.image} alt={article.title} className="article-detail__image" />
        {/* // )} */}

        <Typography className="article-detail__content">
          {article.preview}
        </Typography>
        
        <Box className="article-detail__actions">
          <IconButton className="article-detail__action">
            <Favorite fontSize="small" />
            <span>{article.likes}</span>
          </IconButton>
          <IconButton className="article-detail__action">
            <ChatBubbleOutline fontSize="small" />
            <span>{article.comments.length}</span>
          </IconButton>
          <IconButton className="article-detail__action article-detail__action--share">
            <Share fontSize="small" />
            <span>Share</span>
          </IconButton>
        </Box>

        <Comments postId={article?.id} setPosts={()=>{}} comments={article.comments} />
      </Container>
    </Box>
  );
};

export default ArticleDetail;
