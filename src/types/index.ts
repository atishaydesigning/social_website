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
  postId: number;
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