import React from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase } from '@mui/material';
import { Search, Add } from '@mui/icons-material';
import './Header.scss';

export const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} className="header">
      <Toolbar className="header__toolbar">
        <Typography variant="h6" className="header__title">
          Search
        </Typography>
        <div className="header__search">
          <Search className="header__search-icon" />
          <InputBase
            placeholder="Search Substack"
            className="header__search-input"
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          className="header__add-button"
        >
          Add Post
        </Button>
      </Toolbar>
    </AppBar>
  );
};