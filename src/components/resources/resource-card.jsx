import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { truncate } from 'lodash';

const ResourceCard = ({ data }) => {
  return (
    <Card
      sx={{
        boxShadow: 'none',
        borderRadius: 2,
        '& .MuiCardContent-root:last-child': { pb: '16px !important' },
      }}
    >
      <CardContent>
        <Typography
          fontSize={10}
          textTransform="uppercase"
          fontWeight={700}
          color="#5E6773"
          sx={{ mb: 0.75 }}
        >
          {data.category}
        </Typography>
        <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
          {truncate(data.title, { length: 80 })}
        </Typography>
        <Typography
          component="p"
          fontWeight={400}
          color="#8995A2"
          sx={{ mb: 1 }}
        >
          {truncate(data.description, { length: 120 })}
        </Typography>
        <Typography
          component={Link}
          to={`/resources/${data._id}`}
          sx={{
            mb: 0,
            color: 'primary.main',
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

export default ResourceCard;
