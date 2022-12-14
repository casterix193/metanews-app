import Container from '@mui/material/Container';
import { CircularProgress, Grid } from '@mui/material';
import ResourceCard from '../components/resources/resource-card';
import { getResources } from '../apis';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

const Resources = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchResources = () => {
    setLoading(true);

    getResources()
      .then(({ data }) => {
        setData(data || []);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchResources();
  }, []);

  if (loading) {
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
      <Grid container spacing={4}>
        {data.map((resource, index) => (
          <Grid item xs={12} lg={4} key={index}>
            <ResourceCard data={resource} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Resources;
