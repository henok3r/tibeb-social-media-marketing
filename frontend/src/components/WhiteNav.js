// src/components/WhiteNav.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Rename Link to avoid conflict with MUI Link
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useTheme, // For accessing theme values like spacing
} from '@mui/material';
import { styled } from '@mui/system'; // For custom styling if needed

// Optional: If you have a logo image, import it here
// import YourLogo from '../assets/your-logo.png'; // Adjust path

// You can define some custom styles for elements not directly covered by MUI props
const NavLinksContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3), // Adjust spacing between links
  // You might want to hide these on small screens and show a menu icon instead
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const LogoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  flexGrow: 1, // Allows logo section to take available space
  // If you have a logo image, adjust these styles
  // '& img': {
  //   height: 40, // Adjust logo image height
  //   marginRight: theme.spacing(1),
  // },
}));


const WhiteNav = () => {
  const theme = useTheme(); // Access the custom theme

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main, boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between', padding: theme.spacing(2, 4) }}>
        {/* Logo and Tagline Section */}
        <LogoSection>
          {/* If you have an image logo, uncomment and use it */}
          {/* <img src={YourLogo} alt="Tibeb Social Media Marketing Logo" /> */}
          <Typography variant="h6" component="div" sx={{ color: 'white', fontWeight: 700 }}>
            Tibeb Social Media Marketing
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Empowering Your Brand's Digital Voice
          </Typography>
        </LogoSection>

        {/* Navigation Links */}
        <NavLinksContainer>
          <Button color="inherit" component={RouterLink} to="/" sx={{ color: 'white' }}>
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/blog" sx={{ color: 'white' }}>
            Blog
          </Button>
          <Button color="inherit" component={RouterLink} to="/services" sx={{ color: 'white' }}>
            Services
          </Button>
          <Button color="inherit" component={RouterLink} to="/testimonials" sx={{ color: 'white' }}>
            Testimonials
          </Button>
          <Button color="inherit" component={RouterLink} to="/contact" sx={{ color: 'white' }}>
            Contact
          </Button>
          <Button color="inherit" component={RouterLink} to="/newsletter" sx={{ color: 'white' }}>
            Newsletter
          </Button>
        </NavLinksContainer>

        {/* You might add a Menu Icon for mobile responsiveness here */}
        {/* For example, a <IconButton> and a <Drawer> for mobile navigation */}
      </Toolbar>
    </AppBar>
  );
};

export default WhiteNav;