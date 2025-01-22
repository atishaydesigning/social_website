import TestEditor from "./core/TestEditor";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/AddPost.scss';

const StyledButton = styled(Button)({
  textTransform: 'none',
  padding: '8px 16px',
  borderRadius: '8px',
  fontWeight: 500,
  fontSize: '0.875rem',
  '&.primary': {
    backgroundColor: '#F97316',
    color: 'white',
    '&:hover': {
      backgroundColor: '#EA580C',
    },
  },
  '&.secondary': {
    backgroundColor: '#f5f5f5',
    color: '#1A1F2C',
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
  },
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
    borderTop: '1px solid #f0f0f0',
  },
}));

const AddPost = ({handleAddPost, setTitle, setContent, handleFileChange, open, handleClose}: any) => {

  const handleAdd =()=>{
    handleAddPost();
    handleClose();
  }
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle 
        sx={{ 
          m: 0, 
          p: 3,
          fontSize: '1.25rem',
          fontWeight: 600,
          borderBottom: '1px solid #f0f0f0',
        }} 
        id="customized-dialog-title"
      >
        Add New Post
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            color: '#8E9196',
            '&:hover': {
              backgroundColor: 'rgba(142, 145, 150, 0.1)',
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
              <span className="upload-text">Click to upload an image or drag and drop</span>
            </label>
          </div>
        </form>
      </DialogContent>

      <DialogActions>
        <StyledButton className="secondary" onClick={handleClose}>
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