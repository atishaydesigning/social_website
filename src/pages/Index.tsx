import React from 'react';
import { Container } from '@mui/material';
import { CategoryNav } from '../components/CategoryNav';
import { ArticleCard } from '../components/ArticleCard';
import { FeaturedSidebar } from '../components/FeaturedSidebar';
import { articles } from '../data/articles';
import '../styles/index.scss';

const Index = () => {
  return (
    <div className="index">
      <CategoryNav />
      <Container maxWidth="lg" className="index__container">
        <div className="index__content">
          <div className="index__main">
            {articles.map((article, index) => (
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