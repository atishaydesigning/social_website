import { Box, Container, Typography, IconButton, Avatar } from '@mui/material';
import { Favorite, ChatBubbleOutline, Share } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { Comments } from '../components/Comments';
import './ArticleDetails.scss';

const articles = [
  {
    id: "1",
    publication: "THE GENE POOL",
    publicationIcon: "/placeholder.svg",
    title: "Courage & Cowardice",
    author: "GENE WEINGARTEN",
    readTime: "5 MIN READ",
    date: "OCTOBER 26, 2024",
    preview: "There is such a thing as moral authority. It may be intangible, but it is there, and it can be powerful. It is essential to newspaper opinion writing. The Washington Post owner flushed it down the toilet yesterday. What is left is invertebrate.\n\nThis action has damaged everyone, not the least of whom are the dedicated, talented employees of The Post, whose careers are likely now diminished because, well, do they work for a great newspaper anymore? They are like homeowners whose neighborhood suddenly gets a pig slaughterhouse. All the home values are diminished.\n\nIn the one or two days before the election, expect to read a banal, obligatory piece in the Post — most newspapers do it — urging everyone to vote, for the sake of civic responsibility. Why should you believe it from The Post, now? The hypocrisy is thick and gooey. This is a newspaper that looked at the stark, existential choice facing the country, with the people in fear, and decided to sit this one out. They're not voting. Why should you?",
    image: "/lovable-uploads/af4a3080-b48d-4b3c-87ce-17dbb718b0fa.png",
    likes: 849,
    comments: [
      {
        id: "1",
        author: "Noah Pierre",
        avatar: "/placeholder.svg",
        time: "58 minutes ago",
        content: "I'm a bit unclear about how condensation forms in the water cycle. Can someone break it down?",
        likes: 25,
        dislikes: 3,
        replies: [
          {
            id: "2",
            author: "Skill Sprout",
            avatar: "/placeholder.svg",
            time: "8 minutes ago",
            content: "Condensation happens when water vapor cools down and changes back into liquid droplets. It's the step before precipitation. The example with the glass of ice water in the video was a great visual!",
            likes: 2,
            dislikes: 0
          }
        ]
      }
    ]
  }
];

export const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

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

        {article.image && (
          <img src={article.image} alt={article.title} className="article-detail__image" />
        )}

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

        <Comments comments={article.comments} />
      </Container>
    </Box>
  );
};

export default ArticleDetail;
