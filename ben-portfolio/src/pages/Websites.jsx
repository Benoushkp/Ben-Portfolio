import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  background: '#121212',
  minHeight: '100vh',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
  boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  borderRadius: '15px',
  overflow: 'hidden',
  height: '100%', // Ensures uniform card height
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(255,110,199,0.5)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff6ec7',
  color: '#fff',
  width: '25%',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#000', // Text turns black on hover
    backgroundColor: '#ff3ea5',
  },
}));

const Websites = () => {
  const websites = [
    {
      title: 'Her Cart - The Most Advanced & Premium Shopping Website',
      description: 'Her Cart is a premium e-commerce platform dedicated to luxurious jewelry shopping.',
      image: '/assets/HerCart2.png',
      link: 'https://hercart-forher.netlify.app/',
    },
    {
      title: 'Multipage Portfolio With Advanced UI Design',
      description: 'This portfolio features a modern, minimalist yet advanced design with a dark-themed, glassmorphic UI for a sleek and futuristic feel.',
      image: '/assets/Portfolio.png',
      link: 'https://benoush-portfolio.netlify.app/',
    },
    {
      title: 'Advanced To-Do List Web Application',
      description: 'This Advanced To-Do List Web Application is a fully functional, productivity tool featuring a neon cyberpunk-inspired UI.',
      image: '/assets/To-Do-List.png',
      link: 'https://advanced-todolist-bs.netlify.app/todolist',
    },
    {
      title: 'Neon Futuristic Calculator',
      description: 'The Neon Futuristic Calculator is a next-generation digital tool that combines high precision with an immersive, cyberpunk-inspired design.',
      image: '/assets/Advanced-Futuristic-Calculator.png',
      link: 'https://neon-calculator-bs.netlify.app/',
    },
    {
      title: 'Futuristic Guess Game',
      description: 'Futuristic Guess Game is a web-based number guessing game that combines retro-futuristic visuals with cutting-edge particle effects.',
      image: '/assets/Guess-Game.png',
      link: 'http://bsguessgame.netlify.app/',
    },
    {
      title: 'EventsHub - Your Virtual Events Organizer',
      description: 'EventsHub - Your Virtual Events Organizer is an innovative, full-stack web application designed to revolutionize event planning.',
      image: '/assets/Eventhub3.png',
      link: '',
    },
    {
      title: 'AssetSphere: Smart Asset Management',
      description: 'AssetSphere is a next-generation asset management solution designed for modern businesses.',
      image: '/assets/AssetSphere.png',
      link: '',
    },
  ];

  return (
    <SectionContainer>
      <Typography variant="h3" align="center" gutterBottom sx={{ color: '#fff' }}>
        My Websites World
      </Typography>
      <Grid container spacing={4}>
        {websites.map((site, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardMedia component="img" height="200" image={site.image} alt={site.title} />
              <CardContent sx={{ textAlign: 'center', flexGrow: 1, minHeight: '150px' }}>
                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', mb: 1 }}>
                  {site.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#ccc', mb: 2 }}>
                  {site.description}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
                <StyledButton variant="contained" component={RouterLink} to={site.link} target="_blank">
                  Visit
                </StyledButton>
              </Box>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default Websites;
