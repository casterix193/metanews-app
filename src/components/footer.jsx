import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ py: 2, backgroundColor: 'dark.darker' }}>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={3}
        >
          <Typography component={Link} to='/about' color="#7E8995">About Me</Typography>
          <Typography component={Link} to='/news' color="#7E8995">News</Typography>
          <Typography component={Link} to='/articles' color="#7E8995">Articles</Typography>
          <Typography component={Link} to='/resources' color="#7E8995">Resources</Typography>
          <Typography component='a' href="https://tradingsimulator.onrender.com" target="_blank" color="#7E8995">Trading Simulator</Typography>
        </Stack>
        <Stack
        sx={{ px:2, py: 3, backgroundColor: 'dark.darker' }}
        directions="row"
        alignItems="center"
        justifyContent="center"
        spacing={3}
        >
          <Typography color="#7E8995">Copyright © 2022 Dharmil Desai</Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
