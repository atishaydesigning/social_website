import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import "./CategoryNav.scss";
import { NavLink } from "react-router-dom";

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
  "Esports",
];

export const CategoryNav = () => {
  const [activeClass, setActiveClass] = useState<string>("Trending Places");
  return (
    <Box className="category-nav">
      <div className="category-nav__container">
        {categories.map((category) => (
          <NavLink
            key={category}
            className={
              category === activeClass ? "category-nav__button-active" : ""
            }
            to="/"
          >
            <Button
              className={`category-nav__button`}
              onClick={() => setActiveClass(category)}
              sx={{
                fontSize: {
                  xs: "0.9rem",
                  sm: "1.5rem",
                },
              }}
            >
              {category}
            </Button>
          </NavLink>
        ))}
      </div>
    </Box>
  );
};
