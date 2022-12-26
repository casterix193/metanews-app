import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Chip, Divider, styled } from '@mui/material';
import Container from '@mui/material/Container';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import toast from 'react-hot-toast';

const IFrame = styled('iframe')``;

const NewsDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const news = useMemo(() => location.state?.news, [location.state]);

  useEffect(() => {
    if (!news) {
      toast.error('Some error occurred while loading News data');
      navigate('/news');
    }
  }, [navigate, news]);

  if (!news) return null;

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
        {news.title}
      </Typography>
      <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
        <Chip
          label={news.source || 'MetaNews'}
          sx={{ borderRadius: 1.5, mr: 2, textTransform: 'capitalize' }}
        />
        <Typography sx={{ color: '#7E8995' }}>
          Published On :&nbsp;
          <strong>
            {new Intl.DateTimeFormat(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }).format(new Date(news.published_at))}
          </strong>
        </Typography>
      </Box>
      <Typography
        sx={{
          lineHeight: 2,
          fontSize: 16,
          fontWeight: 400,
          color: '#BECAD6',
        }}
      >
        {news.description}
      </Typography>
      <Divider sx={{ my: 4 }} />
      <IFrame
        id="nytimes-iframe"
        src={news.url}
        title={news.title}
        sx={{
          width: '100%',
          border: 'none',
          minHeight: '95vh',
          borderRadius: 2,
        }}
      />
    </Container>
  );
};

export default NewsDetails;
