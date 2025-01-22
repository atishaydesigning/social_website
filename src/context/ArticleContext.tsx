// context/articleContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";
import { articles as data } from "@/data/articles";
import { Article } from "@/types";

// Define the context
export const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

interface ArticleProviderProps {
  children: ReactNode; // Type for children prop
}

// Define the context value type
interface ArticleContextType {
  articles: Article[];
  addArticle: (article: Article) => void;
  removeArticle: (id: number) => void;
}

// ArticleProvider component
export const ArticleProvider = ({ children }: ArticleProviderProps) => {
  const [articles, setArticles] = useState<Article[]>(data);

  // Function to add an article
  const addArticle = (article: Article) => {
    setArticles((prevArticles) => [...prevArticles, article]);
  };

  // Function to remove an article by id
  const removeArticle = (id: number) => {
    setArticles((prevArticles) =>
      prevArticles.filter((article) => article.id !== id)
    );
  };

  // Provide the state and actions
  return (
    <ArticleContext.Provider value={{ articles, addArticle, removeArticle }}>
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
