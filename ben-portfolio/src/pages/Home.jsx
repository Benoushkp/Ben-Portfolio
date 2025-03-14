// src/pages/Home.jsx
import React from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProfileSummary from '../components/ProfileSummary';
import Resume from './Resume';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Box sx={{ background: '#121212', minHeight: '100vh' }}>
      <Navbar />
      {/* Use Container to center and control the width of the main content */}
      <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
        {/* Wrap Hero in a Box with responsive margin-bottom */}
        <Box sx={{ mb: { xs: 2, md: 1 } }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ProfileSummary />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              my: { xs: 2, md: 3 },
            }}
          >
            <Resume />
          </Box>
        </motion.div>
      </Container>
      <Footer />
    </Box>
  );
};

