import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import MovieIcon from '@mui/icons-material/Movie';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LanguageIcon from '@mui/icons-material/Language';

const CARD_HEIGHT = '400px';

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
  boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  borderRadius: '15px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(255,110,199,0.5)',
  },
  height: CARD_HEIGHT,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff6ec7',
  color: '#fff',
  width: '90px',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#ff3ea5',
  },
}));

const Blog = () => {
  const cards = [
    {
      title: 'My Short Films',
      description: 'Explore my cinematic storytelling and visual narratives.',
      icon: <MovieIcon sx={{ fontSize: 80, color: '#ff6ec7' }} />,
      link: '/shortfilms',
    },
    {
      title: 'My Books',
      description: 'Dive into my literary world through my published works.',
      icon: <MenuBookIcon sx={{ fontSize: 80, color: '#ff6ec7' }} />,
      link: '/books',
    },
    {
      title: 'Listen to My Voice',
      description: 'Listen to my soulful tracks in two versions.Immense yourself in my voice.',
      icon: <MusicNoteIcon sx={{ fontSize: 80, color: '#ff6ec7' }} />,
      link: '/songs',
    },
    {
      title: 'My Websites World',
      description: 'Discover my websites and digital creations. Dive into my web world.',
      icon: <LanguageIcon sx={{ fontSize: 80, color: '#ff6ec7' }} />,
      link: '/websites',
    },
  ];

  return (
    <Box
      sx={{
        background: '#121212',
        minHeight: '100vh',
        pt: 0,
        pb: 2,
        px: { xs: 2, md: 4 },
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ color: '#fff', fontWeight: 'bold', mb: 2, mt: 0 }}
      >
        My Blog
      </Typography>
      <Typography variant="h6" align="center" sx={{ color: '#ddd', mb: 4 }}>
        A journey through my creative world, filled with passion and innovation.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StyledCard>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '200px',
                }}
              >
                {card.icon}
              </Box>
              <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', mb: 1 }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#ccc', mb: 2 }}>
                  {card.description}
                </Typography>
                <StyledButton variant="contained" component={RouterLink} to={card.link}>
                  Explore
                </StyledButton>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
