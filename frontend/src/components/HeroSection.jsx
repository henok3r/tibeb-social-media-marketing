// src/components/HeroSection.jsx
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const HeroSection = () => {
  return (
    <Box
      sx={{
      background: 'linear-gradient(45deg, #0D47A1, #64B5F6)',
        color: 'white',
        py: 8,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom>
          Elevate Your Social Media Presence
        </Typography>
        <Typography variant="h6" component="p" mb={4}>
          Experience data-driven insights and campaigns that drive real results.
        </Typography>
        {/* The Button now works as a Link that navigates to your login page */}
        <Button
          component={Link}   // Use Link as the component
          to="/login"        // Set path to /login
          variant="contained"
          color="secondary"
          size="large"
          sx={{ boxShadow: 2, borderRadius: 2, py: 1, px: 3 }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
