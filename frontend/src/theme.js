// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // default light mode
    primary: {
      main: '#1A237E', // Deep Blue
    },
    secondary: {
      main: '#FF6F00', // Accent Orange
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

export default theme;
