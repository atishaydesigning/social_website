import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, InputBase } from "@mui/material";
import { Search, Add } from "@mui/icons-material";
import "./Header.scss";
import AddPost from "../AddPost";
import { Article } from "@/types";
import { articles } from "@/data/articles";
import { useArticleContext } from "@/context/ArticleContext";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFileUrl, setImageFileUrl] = useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);
  const { addArticle } = useArticleContext();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    // Convert file to an object URL
    const fileUrl = URL.createObjectURL(file);
    setImageFileUrl(fileUrl);
  };

  // const handleAddPost = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log(title)
  //   if (!title || !content) return;

  //   const newPost: Article = {
  //     id: Date.now(),
  //     title,
  //     publication:content,
  //     comments: [],
  //     image: imageFileUrl, // store the file’s object URL
  //   };

  //   setPosts([newPost, ...posts]);
  //   setTitle("");
  //   setContent("");
  //   setImageFileUrl("");
  // };

  const handleAddPost = () => {
    addArticle({
      id: Date.now(),
      title,
      publication: content,
      comments: [],
      image: imageFileUrl,
    });
  };

  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        className="header"
      >
        <Toolbar className="header__toolbar">
          <NavLink to="/">
            <Typography
              variant="h5"
              className="header__title"
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.3rem",
                },
                fontWeight: 600,
              }}
            >
              Ciao, Blogs
            </Typography>
          </NavLink>
          <div className="header__search">
            <Search className="header__search-icon" />
            <InputBase
              placeholder="Search here ...."
              className="header__search-input"
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            className="header__add-button"
            onClick={handleClose}
          >
            Add Post
          </Button>
        </Toolbar>
      </AppBar>
      <AddPost
        handleAddPost={handleAddPost}
        setTitle={setTitle}
        setContent={setContent}
        handleFileChange={handleFileChange}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};
