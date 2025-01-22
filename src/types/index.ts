export interface Article {
  id: number | string,
  publication: string;
  publicationIcon?: string;
  title: string;
  author?: string;
  readTime?: string;
  image?: string;
  preview?: string;
  likes?: number;
  comment_count?: number;
  comments?: IComment[];
  date?:string
}

export interface IComment {
  id: string | number;
  parentId: string | number | null;
  postId: number|string;
  text: string;
  userName?: string;      
  replies?: IComment[];
}

export interface ArticleCardProps {
  id: string | number;
  publication: string;
  publicationIcon: string;
  title: string;
  author: string;
  readTime: string;
  image?: string;
  preview?: string;
  likes: number;
  comment_count: number;
  date: string;
}

export interface PostHandlerProps {
  handleAddPost: () => void;              
  setTitle: (title: string) => void;       
  setContent: (content: string) => void;    
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  open: boolean;                            
  handleClose: () => void;   
  title:string,
  content:string, 
  selectedImage:string, 
  setSelectedImage: (content: string) => void;         
}

export interface CommentItemProps {
  comment: IComment;
  postId: number|string;
  setPosts: React.Dispatch<React.SetStateAction<Article[]>>;
  level: number;
}