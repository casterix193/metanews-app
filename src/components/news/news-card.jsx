import Card from '@mui/material/Card';
import { CardContent, Chip } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { truncate } from 'lodash';

const NewsCard = ({ data, category }) => {
  const cover = () => {
    const image = data.multimedia[0]?.url;
    return image
      ? `https://www.nytimes.com/${image}`
      : 'https://w0.peakpx.com/wallpaper/410/172/HD-wallpaper-at-quartz-bridge-2021-metaverse-vr-poster.jpg';
  };

  return (
    <Card
      sx={{
        borderRadius: 2,
        backgroundColor: 'dark.lighter',
        backgroundImage: 'unset',
        height: '100%',
        boxShadow: 'none',
        '& .MuiCardContent-root:last-child': { pb: '16px !important' },
      }}
    >
      <CardContent
        sx={{ display: 'flex', height: '100%', flexDirection: 'column' }}
      >
        <Box
          sx={{
            position: 'relative',
            height: 200,
            borderRadius: 2,
            overflow: 'hidden',
            '& .NewsCard-Cover': {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'all 0.2s linear',
            },
            '&:hover': {
              '& .NewsCard-Cover': {
                scale: '1.1',
              },
            },
          }}
        >
          <Chip
            sx={{
              position: 'absolute',
              bottom: 12,
              left: 12,
              zIndex: 2,
              backgroundColor: 'primary.main',
              borderRadius: 1.5,
              height: 24,
              px: 1,
              '& .MuiChip-label': {
                px: 0,
                fontSize: 10,
                fontWeight: 600,
                textTransform: 'capitalize',
              },
            }}
            label={data.news_desk || category}
          />
          <img className="NewsCard-Cover" src={cover()} />
        </Box>
        <Box sx={{ pt: 1.5, pb: 1, flex: 1 }}>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
            {truncate(data.headline.print_headline || data.headline.main, {
              length: 86,
            })}
          </Typography>
          <Typography
            fontSize={10}
            fontWeight={400}
            color="#7E8995"
            sx={{ mb: 1 }}
          >
            Published On :&nbsp;
            <strong>
              {new Intl.DateTimeFormat(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }).format(new Date(data.pub_date))}
            </strong>
          </Typography>
          <Typography fontWeight={400} color="#7E8995">
            {truncate(data.abstract, { length: 164 })}
          </Typography>
        </Box>
        <Typography
          component="a"
          target="_blank"
          href={data.web_url}
          sx={{
            mb: 0,
            color: 'primary.dark',
            fontSize: 12,
            textDecoration: 'none',
          }}
        >
          Read More
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
