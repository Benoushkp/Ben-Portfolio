// src/components/Hero.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        background: '#000',
        // Adjust hero height: shorter on mobile, full on desktop
        height: { xs: '70vh', md: '80vh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: { xs: '1rem', md: '2rem' },
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2.5rem', md: '3rem' },
          color: '#fff',
          mb: 2,
        }}
      >
        Welcome to My Portfolio
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: '1.2rem', md: '1.5rem' },
          color: '#ccc',
          mb: 4,
        }}
      >
        I am a Front-End Developer & Generative AI Specialist
      </Typography>
      <Button
        variant="contained"
        sx={{
          padding: { xs: '8px 16px', md: '12px 24px' },
          fontSize: { xs: '0.9rem', md: '1rem' },
          background: 'linear-gradient(45deg, #ff6ec7, #667eea)',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        Explore My Work
      </Button>
    </Box>
  );
};

export default Hero;
