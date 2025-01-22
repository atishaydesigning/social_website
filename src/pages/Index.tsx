import React from 'react';
import { Container } from '@mui/material';
import { CategoryNav } from '../components/article/CategoryNav';
import { ArticleCard } from '../components/article/ArticleCard';
import { FeaturedSidebar } from '../components/article/FeaturedSidebar';
import '../styles/index.scss';
import { useArticleContext } from '@/context/ArticleContext';

const Index = () => {
    const { articles } = useArticleContext();  
    return (
    <div className="index">
      <CategoryNav />
      <Container maxWidth="lg" className="index__container">
        <div className="index__content">
          <div className="index__main">
            {articles.reverse().map((article, index) => (
              <ArticleCard key={`${article.title}-${index}`} {...article} />
            ))}
          </div>
          <FeaturedSidebar />
        </div>
      </Container>
    </div>
  );
};

export default Index;