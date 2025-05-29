// src/components/Dashboard.jsx
import React from "react";
import { Container, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Company Performance Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome! Here you'll soon see analytics, campaign performance, and other key metrics.
      </Typography>
    </Container>
  );
};

export default Dashboard;
