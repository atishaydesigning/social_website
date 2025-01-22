import { Box } from '@mui/material';
import { ArticleCard } from './ArticleCard';

const articles = [
  {
    id: "1",
    publication: "THE GENE POOL",
    publicationIcon: "./p1.jpg",
    title: "Courage & Cowardice",
    author: "GENE WEINGARTEN",
    readTime: "5 MIN READ",
    date: "OCTOBER 26, 2024",
    preview: "There is such a thing as moral authority. It may be intangible, but it is there, and it can be powerful...",
    image: "./i1.jpg",
    likes: 849,
    comments: 69
  },
];

export const ArticleList = () => {
  return (
    <Box className="article-list">
      {articles.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </Box>
  );
};
