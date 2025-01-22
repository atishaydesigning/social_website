import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme";
import { Header } from "./components/Header/Header";
import Index from "./pages/Index";
import { ArticleDetail } from "./pages/ArticleDetails";
import { articles } from "./data/articles";
import { ArticleProvider } from "./context/ArticleContext";


function App() {
  return (
    <ThemeProvider theme={theme}>
    <ArticleProvider>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
        </Routes>
      </BrowserRouter>
    </ArticleProvider>
    </ThemeProvider>
  );
}

export default App;
