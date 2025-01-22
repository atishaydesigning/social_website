import React from 'react';
import { Typography, Avatar, IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';
import './FeaturedSidebar.scss';

const featuredPublications = [
  {
    name: "The Free Press",
    author: "Bari Weiss",
    icon: "/placeholder.svg",
  },
  {
    name: "Dan Harris",
    author: "Dan Harris",
    icon: "/placeholder.svg",
  },
  {
    name: "Hung Up",
    author: "Hunter Harris",
    icon: "/placeholder.svg",
  },
  {
    name: "What To Cook When You Don't Feel Like Cooking",
    author: "Caroline Chambers",
    icon: "/placeholder.svg",
  },
  {
    name: "Kareem Abdul-Jabbar",
    author: "Kareem Abdul-Jabbar",
    icon: "/placeholder.svg",
  },
  {
    name: "Story Club with George Saunders",
    author: "George Saunders",
    icon: "/placeholder.svg",
  },
];

export const FeaturedSidebar = () => {
  return (
    <aside className="featured-sidebar">
      <Typography variant="h2" className="featured-sidebar__title">
        Featured
      </Typography>
      <div className="featured-sidebar__list">
        {featuredPublications.map((pub) => (
          <div key={pub.name} className="featured-sidebar__item">
            <Avatar src={pub.icon} className="featured-sidebar__avatar" />
            <div className="featured-sidebar__info">
              <Typography className="featured-sidebar__name">{pub.name}</Typography>
              <Typography className="featured-sidebar__author">
                By {pub.author}
              </Typography>
            </div>
            <IconButton className="featured-sidebar__add">
              <Add />
            </IconButton>
          </div>
        ))}
      </div>
    </aside>
  );
};