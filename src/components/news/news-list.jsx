import { Grid } from '@mui/material';
import NewsCard from './news-card';

const NewsList = ({ data, category }) => {
  return (
    <Grid container spacing={3} alignItems="stretch">
      {data.map((article) => (
        <Grid item xs={12} lg={6} key={article.url}>
          <NewsCard data={article} category={category} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsList;
