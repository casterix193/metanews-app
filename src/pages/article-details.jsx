import { Chip, CircularProgress, Container, Divider } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { getArticleById } from '../apis';
import toast from 'react-hot-toast';

const ArticleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    setLoading(true);

    getArticleById(id)
      .then(({ data }) => {
        setArticle(data);
      })
      .catch((error) => {
        toast.error('Some error occurred while loading Article data');
        navigate('/articles');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading || !article) {
    return (
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
    );
  }

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
        {article.title}
      </Typography>
      <Box display="flex" alignItems="center">
        <Chip
          label={article.category}
          sx={{ borderRadius: 1.5, mr: 2, textTransform: 'capitalize' }}
        />
        <Typography sx={{ color: '#7E8995' }}>
          Published On :{' '}
          <strong>
            {new Intl.DateTimeFormat(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }).format(new Date(article.createdAt))}
          </strong>
        </Typography>
      </Box>
      <Divider sx={{ my: 4 }} />
      <Typography
        sx={{ lineHeight: 2, fontSize: 16, fontWeight: 400, color: '#BECAD6' }}
      >
        {article.description}
      </Typography>
    </Container>
  );
};

export default ArticleDetails;
