import React from 'react';
import { Box, Button } from '@mui/material';
import './CategoryNav.scss';

const categories = [
  "Staff Picks",
  "Culture",
  "Technology",
  "Business",
  "U.S. Politics",
  "Finance",
  "Food & Drink",
  "Sports",
  "Art & Illustration",
  "World Politics",
  "Health Politics",
  "News",
  "Fashion & Beauty",
  "Music",
  "Faith & Spirituality",
  "Climate & Environment",
];

export const CategoryNav = () => {
  return (
    <Box className="category-nav">
      <div className="category-nav__container">
        {categories.map((category) => (
          <Button
            key={category}
            className={`category-nav__button ${
              category === "Staff Picks" ? "category-nav__button--active" : ""
            }`}
          >
            {category}
          </Button>
        ))}
      </div>
    </Box>
  );
};