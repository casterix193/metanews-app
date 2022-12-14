import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const SimulatorCard = () => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 'none',
        backgroundColor: 'dark.darker',
        backgroundImage: 'none',
        py: 6,
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h6"
        fontWeight={500}
        sx={{ color: '#4B525A', mb: 2 }}
      >
        Wanna to learn how to Trade ?
      </Typography>
      <Typography variant="h5" color="text.secondary" fontWeight={700}>
        Try out our
        <Typography
          sx={{ display: 'inline', mx: 1 }}
          variant="h5"
          fontSize={22}
          fontWeight={700}
          color="primary.main"
        >
          Simulator
        </Typography>
        absolutely for free
      </Typography>
    </Card>
  );
};

export default SimulatorCard;
