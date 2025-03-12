import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuBookIcon from '@mui/icons-material/MenuBook'; // Reading & Writing
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike'; // Traveling & Exploring
import RestaurantIcon from '@mui/icons-material/Restaurant'; // Cooking
import HeadsetIcon from '@mui/icons-material/Headset'; // Music

// Fixed Card Height Based on Tallest Content
const CARD_HEIGHT = 420; // Slightly increased for better spacing

// Glassmorphic Hobby Card with Attractive Hover Effects
const HobbyCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: `${CARD_HEIGHT}px`,
  background: 'rgba(255, 255, 255, 0.1)', // Glassmorphic effect
  backdropFilter: 'blur(10px)', // Blur background
  border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  borderRadius: '15px',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 24px rgba(255, 110, 199, 0.5)', // Glow effect
  },
}));

// Icon Animation Effect
const IconBox = styled(Box)(({ theme }) => ({
  transition: 'transform 0.3s ease, color 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)', // Slight zoom on hover
  },
}));

const Hobby = () => {
  const hobbies = [
    {
      name: 'Reading & Writing',
      description:
        'I have a deep passion for reading and writing, enjoying Sherlock Holmes for its intricate mysteries. I explore genres, having completed Ms. Divine: A Celestial Girl (Virtuology) and currently working on Unfinished Love (non-fiction) and Throne - Crown of Drug Sea (psychological thriller).',
      icon: <MenuBookIcon sx={{ fontSize: 60, color: '#ff5722' }} />,
    },
    {
      name: 'Traveling & Exploring',
      description:
        'I love traveling to new places and experiencing diverse cultures. My dream trip is to ride from Kanyakumari to Ladakh on my own bike, embracing the beauty of adventure.',
      icon: <DirectionsBikeIcon sx={{ fontSize: 60, color: '#ffcc00' }} />, // Yellow for adventure theme
    },
    {
      name: 'Cooking',
      description:
        'Cooking is an art, and I enjoy experimenting with different cuisines. From traditional recipes to unique fusion dishes, I love bringing flavors to life.',
      icon: <RestaurantIcon sx={{ fontSize: 60, color: '#4caf50' }} />, // Green for freshness
    },
    {
      name: 'Music',
      description:
        'Music is a major part of my life—I enjoy exploring various genres, creating playlists, and singing. As a decent singer, I have performed a few songs, making music both a passion and an expression of creativity.',
      icon: <HeadsetIcon sx={{ fontSize: 60, color: '#9c27b0' }} />,
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 4 },
        maxWidth: 1200,
        mx: 'auto',
        background: 'linear-gradient(135deg, #1a1a1a, #282828)', // Dark gradient background
        borderRadius: '20px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)', // Section shadow
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: '#fff',
          textShadow: '2px 2px 8px rgba(255, 110, 199, 0.5)', // Stylish text glow
        }}
      >
        Personal Hobbies
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {hobbies.map((hobby, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <HobbyCard>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flexGrow: 1,
                }}
              >
                <IconBox sx={{ mb: 2 }}>{hobby.icon}</IconBox>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: '#fff', fontWeight: 'bold' }}
                >
                  {hobby.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#ddd' }}>
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
