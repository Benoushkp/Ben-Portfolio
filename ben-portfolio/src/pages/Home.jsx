// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // Import your new CSS file

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProfileSummary from '../components/ProfileSummary';
import Footer from '../components/Footer';
import Resume from './Resume';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      {/* MAIN CONTENT SECTIONS */}
      <div className="home-main-content">
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
      </div>

      {/* CONTACT SECTION */}
      <motion.div
        className="home-contact-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <Contact />
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;
