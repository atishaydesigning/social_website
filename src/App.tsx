import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { ArticleProvider } from "./context/ArticleContext";
import { ArticleDetail } from "./pages/ArticleDetails";
import Index from "./pages/Index";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ArticleProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
          </Routes>
        </ArticleProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
