import Container from '@mui/material/Container';
import { CircularProgress, Grid } from '@mui/material';
import NewsCategoryList from '../components/news/category-list';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import NewsList from '../components/news/news-list';
import { getNews } from '../apis';

const News = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('metaverse');
  const [data, setData] = useState([]);

  const fetchNews = (category) => {
    setLoading(true);

    getNews(category)
      .then(({ data: response }) => {
        console.log(response);
        setData(response.data || []);
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
          <NewsCategoryList
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
            <NewsList data={data} category={category} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default News;
