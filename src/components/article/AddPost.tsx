import TestEditor from "../core/TestEditor";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './AddPost.scss';
import { useNavigate } from "react-router-dom";
import { PostHandlerProps } from "@/types";
import React, { useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const StyledButton = styled(Button)({
  textTransform: "none",
  padding: "8px 16px",
  borderRadius: "8px",
  fontWeight: 500,
  fontSize: "0.875rem",
  "&.primary": {
    backgroundColor: "#F97316",
    color: "white",
    "&:hover": {
      backgroundColor: "#EA580C",
    },
  },
  "&.secondary": {
    backgroundColor: "#f5f5f5",
    color: "#1A1F2C",
    "&:hover": {
      backgroundColor: "#e0e0e0",
    },
  },
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(3),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
    borderTop: "1px solid #f0f0f0",
  },
}));

const AddPost = ({
  handleAddPost,
  handleFileChange,
  setTitle,
  setContent,
  open,
  handleClose,
  title,
  content,
  selectedImage,
  setSelectedImage
}: PostHandlerProps) => {
  const [showMessage, setShowMessage] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const handleAdd = () => {
    if (!title || !content) {
      setShowMessage(true);
    } else {
      handleAddPost();
      closeHandler();
      navigate("/");
    }
  };

  const closeHandler = () => {
    handleClose();
    setSelectedImage("");
  };

  const handleMessageClose = () => {
    setShowMessage(false);
  };

  return (
    <BootstrapDialog
      onClose={closeHandler}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 3,
          fontSize: "1.25rem",
          fontWeight: 600,
          borderBottom: "1px solid #f0f0f0",
        }}
        id="customized-dialog-title"
      >
        Add New Post
        <IconButton
          aria-label="close"
          onClick={closeHandler}
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            color: "#8E9196",
            "&:hover": {
              backgroundColor: "rgba(142, 145, 150, 0.1)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <form className="post-form">
          <div className="editor-section">
            <label>Post Title</label>
            <div className="editor-wrapper">
              <TestEditor updateFunction={setTitle} />
            </div>
          </div>

          <div className="editor-section">
            <label>Post Content</label>
            <div className="editor-wrapper">
              <TestEditor updateFunction={setContent} />
            </div>
          </div>

          <div className="file-upload-section">
            <input
              type="file"
              id="file-input"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input"
            />
            <label htmlFor="file-input" className="file-label">
              <span className="upload-icon">📁</span>
              <span className="upload-text">
                Click to upload an image or drag and drop
              </span>
            </label>
          </div>

          {selectedImage && (
            <div
              className="image-preview"
              style={{ textAlign: "center", marginTop: "16px" }}
            >
              <img
                src={selectedImage}
                alt="Preview"
                className="preview-image"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  height: "auto",
                  maxHeight: "300px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0px 6px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0px 4px 15px rgba(0, 0, 0, 0.1)";
                }}
              />
            </div>
          )}
          <Snackbar
            open={showMessage}
            autoHideDuration={6000}
          >
            <Alert
              onClose={handleMessageClose}
              severity="warning"
              sx={{ width: "100%" }}
            >
              Please fill in all the fields.
            </Alert>
          </Snackbar>
        </form>
      </DialogContent>

      <DialogActions>
        <StyledButton className="secondary" onClick={closeHandler}>
          Cancel
        </StyledButton>
        <StyledButton className="primary" onClick={handleAdd}>
          Add Post
        </StyledButton>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default AddPost;
