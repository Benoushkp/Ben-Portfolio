// src/pages/Home.jsx
import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProfileSummary from '../components/ProfileSummary';
import Footer from '../components/Footer';
import Resume from './Resume';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <Box sx={{ background: '#121212', minHeight: '100vh' }}>
      <Navbar />

      {/* MAIN CONTENT (Hero, Profile, Resume) WITH RESPONSIVE PADDING */}
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
          <Resume />
        </motion.div>
      </Box>

      {/* CONTACT SECTION ISOLATED TO MATCH THE CONTACT PAGE LOOK */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        {/*
          Use a separate Box with NO extra padding.
          Just center the Contact component horizontally.
        */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#121212',
            py: { xs: 2, md: 4 }, // minimal vertical space
          }}
        >
          <Contact />
        </Box>
      </motion.div>

      <Footer />
    </Box>
  );
};

export default Home;
