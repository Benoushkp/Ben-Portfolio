import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <Box className="footer-container">
      <Box className="footer-inner">
        {/* Navigation Links */}
        <Box className="footer-links">
          <Link component={RouterLink} to="/services" className="footer-link">
            Services
          </Link>
          <Link component={RouterLink} to="/blog" className="footer-link">
            My Blog
          </Link>
        </Box>

        {/* Social Media Icons */}
        <Box className="footer-social">
          <IconButton component={Link} href="https://www.linkedin.com/in/benoush-valentine-f-965a27252" target="_blank" className="icon-btn">
            <LinkedIn fontSize="medium" />
          </IconButton>
          <IconButton component={Link} href="https://github.com/Benoushkp" target="_blank" className="icon-btn">
            <GitHub fontSize="medium" />
          </IconButton>
          <IconButton component={Link} href="mailto:benoushvalentine@gmail.com" className="icon-btn">
            <Email fontSize="medium" />
          </IconButton>
        </Box>
      </Box>

      {/* Copyright */}
      <Typography className="footer-bottom">
        &copy; {new Date().getFullYear()} Benoush's Portfolio. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
