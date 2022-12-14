import { Grid } from '@mui/material';
import ArticleCard from './article-card';

const ArticleList = ({ data, category }) => {
  return (
    <Grid container spacing={3} alignItems="stretch">
      {data.map((article) => (
        <Grid item xs={12} lg={6} key={article._id}>
          <ArticleCard data={article} category={category} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ArticleList;
