import { CardContent, Chip } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { random, truncate } from 'lodash';
import { Link } from 'react-router-dom';

const ArticleCard = ({ data, category }) => {
  const cover = () => {
    return `https://source.unsplash.com/random?${category}-${random(1, 100)}`;
  };

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          height: 200,
          borderRadius: 3,
          overflow: 'hidden',
          '& .ArticleCard-Cover': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            transition: 'all 0.2s linear',
          },
          '&:hover': {
            '& .ArticleCard-Cover': {
              scale: '1.1',
            },
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(-135deg, transparent 85%, #141617)',
            zIndex: 1,
          },
        }}
      >
        <Chip
          sx={{
            position: 'absolute',
            bottom: 12,
            left: 12,
            zIndex: 2,
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 1.5,
            height: 24,
            px: 1,
            '& .MuiChip-label': {
              px: 0,
              fontSize: 10,
              fontWeight: 700,
              color: 'dark.darker',
              textTransform: 'capitalize',
            },
          }}
          label={category}
        />
        <img className="ArticleCard-Cover" src={cover()} />
      </Box>
      <Box sx={{ pt: 1.5 }}>
        <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
          {truncate(data.title, {
            length: 86,
          })}
        </Typography>
        <Typography
          color="#7E8995"
          fontSize={12}
          fontWeight={500}
          sx={{ mb: 1 }}
        >
          Published On :&nbsp;
          <strong>
            {new Intl.DateTimeFormat(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }).format(new Date(data.createdAt))}
          </strong>
        </Typography>
        <Typography
          component={Link}
          to={`/articles/${data._id}`}
          sx={{
            mb: 0,
            color: 'primary.main',
            fontSize: 12,
            textDecoration: 'none',
          }}
        >
          Read More
        </Typography>
      </Box>
    </Box>
  );
};

export default ArticleCard;
