// src/components/PricingPage.jsx
import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from "@mui/material";

const PricingPage = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Subscription Packages
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Choose the package that best fits your business needs in today's Ethiopian market.
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* Starter Package */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: '350px', display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Starter Package
              </Typography>
              <Typography variant="h4" color="primary" gutterBottom>
                ETB 5,000 / month
              </Typography>
              <Typography variant="body2">
                • 12 Social Media Posts per Month<br />
                • Basic Analytics & Reporting<br />
                • Dedicated Account Manager<br />
                • Email Support
              </Typography>
            </CardContent>
            <CardActions sx={{ mt: 'auto' }}>
              <Button variant="contained" color="primary" fullWidth>
                Choose Starter
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Growth Package */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: '350px', display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Growth Package
              </Typography>
              <Typography variant="h4" color="primary" gutterBottom>
                ETB 12,000 / month
              </Typography>
              <Typography variant="body2">
                • 20-25 Social Media Posts per Month<br />
                • Advanced Analytics & Insights<br />
                • Multi-platform Management<br />
                • Monthly Strategy Consultation
              </Typography>
            </CardContent>
            <CardActions sx={{ mt: 'auto' }}>
              <Button variant="contained" color="primary" fullWidth>
                Choose Growth
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Premium Package */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: '350px', display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Premium Package
              </Typography>
              <Typography variant="h4" color="primary" gutterBottom>
                ETB 20,000 / month
              </Typography>
              <Typography variant="body2">
                • 30 Social Media Posts per Month<br />
                • Customized Campaign Strategy<br />
                • In-depth Reporting & Performance Analysis<br />
                • Dedicated Premium Support<br />
                • Influencer Collaborations & Ad Budget Management
              </Typography>
            </CardContent>
            <CardActions sx={{ mt: 'auto' }}>
              <Button variant="contained" color="primary" fullWidth>
                Choose Premium
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PricingPage;
