import Container from '@mui/material/Container';
import { CircularProgress, Grid } from '@mui/material';
import NewsCategoryList from '../components/news/category-list';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { getArticles, getNews } from '../apis';
import ArticleList from '../components/articles/article-list';
import ArticlesCategoryList from '../components/articles/category-list';

const Articles = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('metaverse');
  const [data, setData] = useState([]);

  const fetchNews = (category) => {
    setLoading(true);

    getArticles(category)
      .then(({ data }) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
    fetchNews(category);
  };

  useEffect(() => fetchNews(category), []);

  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={3} sx={{ position: 'sticky', top: 12 }}>
          <ArticlesCategoryList
            selected={category}
            onChange={handleCategoryChange}
          />
        </Grid>
        <Grid item xs={12} lg={9}>
          {loading ? (
            <Box
              sx={{
                height: 324,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <ArticleList data={data} category={category} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Articles;
