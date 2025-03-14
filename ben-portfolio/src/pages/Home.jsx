// src/pages/Home.jsx
import React from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProfileSummary from '../components/ProfileSummary';
import Resume from './Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Box sx={{ background: '#121212', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 1, sm: 2, md: 3 },
          py: { xs: 2, md: 4 },
        }}
      >
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

        {/* Contact Section below Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', my: { xs: 2, md: 3 } }}>
            <Box sx={{ width: { xs: '90%', md: 'auto' } }}>
              <Contact />
            </Box>
          </Box>
        </motion.div>
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;

