import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import BookIcon from '@mui/icons-material/Book';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

// Styled card for hobby items with hover effects
const HobbyCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
}));

const Hobby = () => {
  const hobbies = [
    {
      name: 'Reading',
      description: 'Immerse yourself in diverse literary worlds.',
      icon: <BookIcon sx={{ fontSize: 60, color: '#ff5722' }} />,
    },
    {
      name: 'Gaming',
      description: 'Dive into interactive virtual adventures.',
      icon: <SportsEsportsIcon sx={{ fontSize: 60, color: '#3f51b5' }} />,
    },
    {
      name: 'Cooking',
      description: 'Experiment with recipes and explore new cuisines.',
      icon: <LocalDiningIcon sx={{ fontSize: 60, color: '#4caf50' }} />,
    },
    {
      name: 'Music',
      description: 'Enjoy listening to and creating your favorite tunes.',
      icon: <MusicNoteIcon sx={{ fontSize: 60, color: '#9c27b0' }} />,
    },
  ];

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 4 }, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Personal Hobbies
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {hobbies.map((hobby, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <HobbyCard>
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  {hobby.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {hobby.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {hobby.description}
                </Typography>
              </CardContent>
            </HobbyCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Hobby;
