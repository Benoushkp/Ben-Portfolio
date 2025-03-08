import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <Box className="hero-container" sx={{ pt: 0, mt: 0 }}>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image with Decorative Frame */}
        <motion.div
          className="hero-profile"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Box
            sx={{
              p: 1,
              border: '4px solid #ff6ec7', // Frame color
              borderRadius: '50%',
              boxShadow: '0 0 15px rgba(255, 110, 199, 0.8)',
              display: 'inline-block',
            }}
          >
            <Avatar
              src="/assets/profile.jpg" // Ensure your profile image exists in public/assets/
              alt="Profile Image"
              sx={{
                width: { xs: 180, sm: 210, md: 240 },
                height: { xs: 180, sm: 210, md: 240 },
              }}
            />
          </Box>
        </motion.div>

        {/* Name and Title */}
        <Typography variant="h2" component="h1" className="hero-title" sx={{ mt: 1 }}>
          Hi, I'm <span className="highlight">Benoush Valentine F</span>
        </Typography>

        <Typography variant="h5" component="h2" className="hero-subtitle">
          Front‑end Developer | Generative AI Developer | Prompt Engineer
        </Typography>

        <Typography variant="body1" className="hero-description">
          I build interactive and modern web applications using cutting‑edge technologies,
          blending creativity and technical expertise to bring ideas to life.
        </Typography>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          variant="contained"
          className="hero-button"
          component={RouterLink}
          to="/contact"
          sx={{ mt: 3 }} // Adjust this value as needed
        >
          Get in Touch
        </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Hero;
