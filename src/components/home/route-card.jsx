import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const RouteCard = ({ background, title, href }) => {
  return (
    <Card
      component={Link}
      to={href}
      sx={{
        position: 'relative',
        display: 'block',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        height: 224,
        maxWidth: 512,
        backgroundColor: 'dark.lighter',
        borderRadius: 4,
        boxShadow: 'none',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#000',
          opacity: 0.8,
        },
      }}
    >
      <Typography
        sx={{
          textDecoration: 'none',
          position: 'absolute',
          fontSize: 52,
          bottom: 24,
          letterSpacing: -4,
          fontWeight: 700,
          right: -6,
          color: '#D5D5D5',
        }}
      >
        {title}
      </Typography>
    </Card>
  );
};

export default RouteCard;
