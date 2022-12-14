import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1f98f4',
      light: '#54AAF1',
      dark: '#1C7EC3',
    },
    secondary: {
      main: '#EA3C54',
      light: '#F05F73',
      dark: '#9E2C38',
    },
    background: {
      default: '#141617',
    },
    dark: {
      darker: '#0E0F0F',
      lighter: '#1B1D1F',
    },
    divider: '#202224',
  },
  typography: {
    h5: {
      fontSize: 20,
    },
    h6: {
      fontSize: 16,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 12,
    },
    fontFamily: [
      'Plus Jakarta Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: {
          fontFamily:
            'Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        },
      }),
    },
  },
});
