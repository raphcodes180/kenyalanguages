import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 800,
          p: 2,
          boxShadow: 3,
          mb: 4,
          position: 'relative',
          overflow: 'hidden',
          minHeight: 340,
          background: `linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url('https://images.unsplash.com/photo-1673515334669-1e445e4f4c3f?auto=format&fit=crop&w=800&q=80') center/cover no-repeat`,
          // The above Unsplash image is a group of people with speech bubbles, symbolizing language and communication.
          // You can swap the URL for any other image you prefer.
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <SchoolIcon color="primary" sx={{ fontSize: 60 }} />
          </Box>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome!
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            This free, friendly website helps you learn <b>Kikuyu</b> and{' '}
            <b>Kiswahili</b> through real-life words, phrases, and cultural
            notes. Browse the dictionaries, explore common phrases, and discover
            the beauty of these languages at your own pace.
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/kikuyu-dictionary"
              >
                Explore Kikuyu
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/kiswahili-dictionary"
              >
                Explore Kiswahili
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Learn at Your Own Pace
              </Typography>
              <Typography variant="body2">
                Whether you're a beginner or looking to refresh your knowledge,
                our resources are organized to help you progress step by step.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Cultural Context
              </Typography>
              <Typography variant="body2">
                Language is more than words. Discover cultural notes that
                provide context and deeper understanding of expressions and
                phrases.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Practical Examples
              </Typography>
              <Typography variant="body2">
                Learn through real-world examples and common phrases that you
                can use in everyday conversations.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
