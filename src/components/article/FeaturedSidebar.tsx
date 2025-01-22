import React from 'react';
import { Typography, Avatar, IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';
import './FeaturedSidebar.scss';

const featuredPublications = [
  {
    name: "The Curious Chronicle",
    author: "Alex Morgan",
    icon: "./p1.jpg",
  },
  {
    name: "Echoes of the Horizon",
    author: "Lila Carter",
    icon: "./p2.jpg",
  },
  {
    name: "The Wanderer's Journal",
    author: "Ethan Woods",
    icon: "./p3.jpg",
  },
  {
    name: "Flavorful Escapades",
    author: "Sophie Bennett",
    icon: "./p4.jpg",
  },
  {
    name: "Voices Unbound",
    author: "Jared Blake",
    icon: "./p5.jpg",
  },
  {
    name: "Tales from the Depths",
    author: "Mia Harper",
    icon: "./p6.jpg",
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