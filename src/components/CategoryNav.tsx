import React from 'react';
import { Box, Button } from '@mui/material';
import './CategoryNav.scss';

const categories = [
  "AI & Tech",
  "Trending Places",
  "Web3",
  "Space",
  "Wellness",
  "Finance",
  "Climate",
  "Food Trends",
  "VR & AR",
  "Gaming",
  "Pop Culture",
  "Fashion",
  "Nomad Life",
  "Esports"
];


export const CategoryNav = () => {
  return (
    <Box className="category-nav">
      <div className="category-nav__container">
        {categories.map((category) => (
          <Button
            key={category}
            className={`category-nav__button ${
              category === "Trending Places" ? "category-nav__button-active" : ""
            }`}
            sx={{
              fontSize: {
                xs: "0.9rem",
                sm: "1.5rem"
              }
            }}
          >
            {category}
          </Button>
        ))}
      </div>
    </Box>
  );
};