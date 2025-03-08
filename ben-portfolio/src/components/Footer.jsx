import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const socialLinks = [
  { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/yourprofile' },
  { icon: <GitHub />, url: 'https://github.com/yourprofile' },
  { icon: <Email />, url: 'mailto:youremail@example.com' },
];

const Footer = () => {
  return (
    <motion.div
      className="footer-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box className="footer-content">
        <Typography variant="body1" className="footer-text">
          &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </Typography>

        <Box className="social-icons">
          {socialLinks.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton component={Link} href={item.url} target="_blank" className="icon-btn">
                {item.icon}
              </IconButton>
            </motion.div>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};

export default Footer;
