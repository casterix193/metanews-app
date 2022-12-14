import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/navbar';
import Footer from './components/footer';
import News from './pages/news';
import Box from '@mui/material/Box';
import Home from './pages/home';
import Articles from './pages/articles';
import Resources from './pages/resources';
import ResourceDetails from './pages/resource-details';
import { Toaster } from 'react-hot-toast';
import ArticleDetails from './pages/article-details';

const App = () => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Toaster />
          <Box
            component="main"
            sx={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Navbar />
            <Box sx={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:id" element={<ArticleDetails />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/resources/:id" element={<ResourceDetails />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
