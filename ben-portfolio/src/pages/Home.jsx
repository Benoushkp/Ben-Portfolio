// src/pages/Home.jsx
import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProfileSummary from '../components/ProfileSummary';
import Footer from '../components/Footer';
import Resume from './Resume';

const Home = () => {
  return (
    <Box sx={{ background: '#121212', minHeight: '100vh' }}>
      <Navbar />

      {/* Main Content: Hero, ProfileSummary, and Resume */}
      <Box sx={{ padding: { xs: '1rem', sm: '2rem', md: '3rem' } }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.div>

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
          <Box sx={{ display: 'flex', justifyContent: 'center', my: { xs: 2, md: 3 } }}>
            <Resume />
          </Box>
        </motion.div>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
