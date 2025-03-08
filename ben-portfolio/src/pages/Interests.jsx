import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import FlightIcon from '@mui/icons-material/Flight';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

// Styled card for interest items with subtle hover effects
const InterestCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
  },
}));

const Interests = () => {
  const interests = [
    {
      name: 'Web Development',
      description: 'Building responsive and interactive websites.',
      icon: <CodeIcon sx={{ fontSize: 60, color: '#764ba2' }} />,
    },
    {
      name: 'Generative AI',
      description: 'Exploring AI-driven art and content generation.',
      icon: <BrushIcon sx={{ fontSize: 60, color: '#667eea' }} />,
    },
    {
      name: 'Travel & Culture',
      description: 'Discovering new places and experiencing diverse cultures.',
      icon: <FlightIcon sx={{ fontSize: 60, color: '#ff8a65' }} />,
    },
    {
      name: 'Photography',
      description: 'Capturing life’s moments through the lens.',
      icon: <CameraAltIcon sx={{ fontSize: 60, color: '#4caf50' }} />,
    },
  ];

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 4 }, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Areas of Interest
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {interests.map((interest, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <InterestCard>
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  {interest.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {interest.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {interest.description}
                </Typography>
              </CardContent>
            </InterestCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Interests;
