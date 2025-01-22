import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ArticleCardProps {
  publication: string;
  publicationIcon: string;
  title: string;
  author: string;
  readTime: string;
  image: string;
  likes: number;
  comments: number;
  preview?: string;
}

export const ArticleCard = ({
  publication,
  publicationIcon,
  title,
  author,
  readTime,
  image,
  likes,
  comments,
  preview,
}: ArticleCardProps) => {
  return (
    <article className="flex flex-col gap-4 pb-8 border-b border-substack-gray-200">
      <div className="flex items-center gap-2">
        <Avatar className="h-6 w-6">
          <AvatarImage src={publicationIcon} />
          <AvatarFallback>{publication[0]}</AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium">{publication}</span>
      </div>
      <div className="flex gap-6">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          {preview && <p className="text-substack-gray-400 mb-2">{preview}</p>}
          <div className="flex items-center gap-4 text-sm text-substack-gray-400">
            <span>{author}</span>
            <span>{readTime}</span>
          </div>
        </div>
        {image && (
          <img
            src={image}
            alt={title}
            className="w-[140px] h-[140px] object-cover rounded"
          />
        )}
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 text-sm text-substack-gray-400 hover:text-substack-text">
          <Heart className="h-4 w-4" />
          {likes}
        </button>
        <button className="flex items-center gap-1 text-sm text-substack-gray-400 hover:text-substack-text">
          <MessageCircle className="h-4 w-4" />
          {comments}
        </button>
        <button className="flex items-center gap-1 text-sm text-substack-gray-400 hover:text-substack-text ml-auto">
          <Share2 className="h-4 w-4" />
          Share
        </button>
      </div>
    </article>
  );
};