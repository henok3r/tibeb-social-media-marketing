// src/components/ServicesSection.jsx
import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>

      // Add this inside your Container in ServicesSection.jsx
<Typography variant="h6" align="center" color="secondary">
  Hello from ServicesSection!
</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard 
            title="Social Media Management" 
            description="Optimize your online presence." 
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard 
            title="Paid Advertising" 
            description="Drive targeted traffic with paid campaigns." 
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard 
            title="Content Creation" 
            description="Engaging content that resonates with your audience." 
          />
        </Grid>
        {/* You can add more Grid items here for additional cards */}
      </Grid>
    </Container>
  );
};

export default ServicesSection;
