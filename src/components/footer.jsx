import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Container from '@mui/material/Container';

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
          <Typography color="#7E8995">About Me</Typography>
          <Typography color="#7E8995">News</Typography>
          <Typography color="#7E8995">Articles</Typography>
          <Typography color="#7E8995">Resources</Typography>
          <Typography color="#7E8995">Trading Simulator</Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
