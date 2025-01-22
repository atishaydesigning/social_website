import React, { createContext, useState, useContext, ReactNode } from "react";
import { articles as data } from "@/data/articles";
import { Article } from "@/types";

interface ArticleProviderProps {
  children: ReactNode;
}

// Define the context
export const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

// Define the context value type
interface ArticleContextType {
  articles: Article[];
  addArticle: (article: Article) => void;
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>,
}

// ArticleProvider component
export const ArticleProvider = ({ children }: ArticleProviderProps) => {
  const [articles, setArticles] = useState<Article[]>(data);

  // Function to add an article
  const addArticle = (article: Article) => {
    setArticles((prevArticles) => [...prevArticles, article]);
  };

  // Provide the state and actions
  return (
    <ArticleContext.Provider value={{ articles, setArticles, addArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};

// Custom hook for consuming the context
export const useArticleContext = (): ArticleContextType => {
  const context = useContext(ArticleContext);

  // Ensure context is not undefined
  if (!context) {
    throw new Error("useArticleContext must be used within an ArticleProvider");
  }

  return context;
};
