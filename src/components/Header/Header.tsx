import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, InputBase } from "@mui/material";
import { Search, Add } from "@mui/icons-material";
import "./Header.scss";
import AddPost from "../article/AddPost";
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
    const fileUrl = URL.createObjectURL(file);
    setImageFileUrl(fileUrl);
  };


  const handleAddPost = () => {
    addArticle({
      id: Date.now(),
      title,
      publication: "New Publications",
      comments: [],
      image: imageFileUrl,
      publicationIcon: "/p3.jpg",
      author: "KATE WATSON-SMYTH",
      readTime: "11 MIN READ",
      preview: content,
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
              Community
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
            sx={{color:"white"}}
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
        content={content}
        title={title}
        selectedImage={imageFileUrl}
        setSelectedImage={setImageFileUrl}
      />
    </>
  );
};
