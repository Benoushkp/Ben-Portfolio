import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

// Importing components from src/components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProfileSummary from '../components/ProfileSummary';
import Footer from '../components/Footer';

// Importing sections from src/pages
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';

const Home = () => {
  return (
    <Box sx={{ background: '#121212', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>

      {/* Profile Summary Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <ProfileSummary />
      </motion.div>

      {/* Resume Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Resume />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <Contact />
      </motion.div>

      <Footer />
    </Box>
  );
};

export default Home;
