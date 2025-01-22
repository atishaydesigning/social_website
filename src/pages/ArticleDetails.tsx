import {
  Box,
  Container,
  Typography,
  IconButton,
  Avatar,
  Grid,
} from "@mui/material";
import { Favorite, ChatBubbleOutline, Share } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { Comments } from "../components/article/Comments";
import "./ArticleDetails.scss";
import { useEffect, useState } from "react";
import { Article } from "@/types";
import { useArticleContext } from "@/context/ArticleContext";

export const ArticleDetail = () => {
  const [article, setArticle] = useState<Article>();
  const { articles, setArticles } = useArticleContext();
  const { id } = useParams();

  console.log("article", article);
  useEffect(() => {
    if (id) {
      const data = articles.find((a: Article) => a.id === parseInt(id));
      setArticle(data);
    }
  }, [id, articles]);

  if (!article) return <div>Article not found</div>;

  return (
    <Box className="article-detail">
      <Container maxWidth="lg" sx={{ maxWidth: "80%" }}>
        <Grid container>
          <Grid xs={8}>
            <Box className="article-detail__header">
              <Box className="article-detail__publication">
                <Avatar
                  src={article.publicationIcon}
                  className="article-detail__avatar"
                />
                <Typography
                  className="article-detail__publication-name"
                  dangerouslySetInnerHTML={{ __html: article?.publication }}
                />
                <Typography className="article-detail__date">
                  {article.date}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="h1"
          className="article-detail__title"
          sx={{
            fontSize: {
              xs: "21px",
            },
            wordBreak:"break-word"
          }}
          dangerouslySetInnerHTML={{ __html: article?.title }}
        />

        <Box className="article-detail__meta">
          <Typography sx={{ fontSize: "16px" }}>{article.author}</Typography>
          <Typography sx={{ fontSize: "13px" }}>{article.readTime}</Typography>
        </Box>

        {article.image && (
          <img
            src={article.image}
            alt={`image of ${article.title}`}
            className="article-detail__image"
          />
        )}

        <Typography
          className="article-detail__content"
          dangerouslySetInnerHTML={{ __html: article?.preview }}
          sx={{wordBreak:"break-word"}}
        />

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

        <Comments
          postId={article?.id}
          setPosts={setArticles}
          comments={article.comments}
        />
      </Container>
    </Box>
  );
};

export default ArticleDetail;
