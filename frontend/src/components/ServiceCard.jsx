// src/components/ServiceCard.jsx
import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <Card sx={{ minWidth: 275, m: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="center" mb={2}>
          {Icon && <Icon sx={{ fontSize: 40, color: 'primary.main' }} />}
        </Box>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to="/pricing" variant="outlined" color="primary" sx={{ mt: 2, display: 'block', mx: 'auto' }}>
  Learn More
</Button>

      </CardActions>
    </Card>
  );
};

export default ServiceCard;
