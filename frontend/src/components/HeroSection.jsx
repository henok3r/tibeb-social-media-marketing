// src/components/HeroSection.jsx
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #1A237E, #FF6F00)',
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
        <Button variant="contained" color="secondary" size="large">
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
