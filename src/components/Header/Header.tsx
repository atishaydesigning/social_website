import React from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';
import './Header.scss';

export const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} className="header">
      <Toolbar>
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
        <div className="header__actions">
          <Button color="inherit">Sign in</Button>
          <Button variant="contained" color="primary">
            Create account
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};