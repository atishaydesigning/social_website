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
      publicationIcon: "/p3.jpg",
      author: "KATE WATSON-SMYTH",
      readTime: "11 MIN READ",
      preview: "What to do about bad lighting? How do I overcome decision paralysis? Is it OK to rip out original features? Can I use strong colour in small rooms? How to hide the TV – and more of your questions answered",
      likes: 849,
      comment_count: 69,
      date:"12/01/25",
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
          <NavLink to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}>
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
  <Search
    className="header__search-icon"
    sx={{
      fontSize: "20px",
    }}
  />
  <InputBase
    placeholder="Search here ...."
    className="header__search-input"
    sx={{
      "&::placeholder": {
        fontSize: "14px", 
        color: "#9e9e9e",
      },
      fontSize: "14px",
    }}
  />
</div>

          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            className="header__add-button"
            onClick={handleClose}

            style={{
              color: "#ffffff"
            }}
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
