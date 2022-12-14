import Box from '@mui/material/Box';
import Ticker from '../components/home/ticker';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import RouteCard from '../components/home/route-card';
import MarketScreener from '../components/home/market-screener';
import SimulatorCard from '../components/home/simulator-card';

const Home = () => {
  return (
    <Box>
      <Container sx={{ py: 4 }}>
        <Ticker />
      </Container>
      <Container sx={{ mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <RouteCard
              background="https://i.pinimg.com/originals/83/22/fe/8322fe88218111b81b9543a77b614fd6.jpg"
              title="News"
              href="/news"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <RouteCard
              background="https://c1.wallpaperflare.com/preview/727/896/949/article-background-broadsheet-business.jpg"
              title="Articles"
              href="/articles"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <RouteCard
              background="https://i.pinimg.com/originals/74/2c/02/742c02a5aaa6c201bd4c16bd8b915bba.png"
              title="Resources"
              href="/resources"
            />
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mb: 8 }}>
        <SimulatorCard />
      </Container>
      <Container>
        <MarketScreener />
      </Container>
    </Box>
  );
};

export default Home;
