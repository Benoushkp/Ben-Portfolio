import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Avatar } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

// Create a motion-enabled Box for the mobile menu
const MotionBox = motion(Box);

// Updated navigation links
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Skills', path: '/skills' },
  { name: 'Education', path: '/higher' }, // Updated to point to Higher.jsx
  { name: 'Internship Experience', path: '/internship' },
  { name: 'Projects', path: '/projects' },
  { name: 'Interests', path: '/interests' },
  { name: 'Hobbies', path: '/hobbies' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#1a1a1a',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.6)',
        zIndex: 200,
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: '100px', md: '120px' },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Logo with Profile Picture */}
        <RouterLink
          to="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar
              src="/assets/profile.jpg" // Ensure your profile image is in public/assets/
              alt="Profile"
              sx={{
                width: { xs: 60, sm: 70, md: 80 },
                height: { xs: 60, sm: 70, md: 80 },
                mr: 1,
              }}
            />
          </motion.div>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', fontSize: { xs: '1.2rem', md: '1.5rem' } }}
          >
            BENOUSH'S PORTFOLIO
          </Typography>
        </RouterLink>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '25px' }}>
          {navLinks.map((link, index) => {
            const active = location.pathname === link.path;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <RouterLink
                  to={link.path}
                  style={{
                    color: active ? '#ff6ec7' : '#fff',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.3s ease, transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.color = '#ff6ec7';
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = '#fff';
                  }}
                >
                  {link.name}
                </RouterLink>
              </motion.div>
            );
          })}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          sx={{
            display: { xs: 'block', md: 'none' },
            color: '#fff',
            fontSize: { xs: '1.8rem', sm: '2rem' },
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <MotionBox
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            sx={{
              position: 'absolute',
              top: { xs: '100px', md: '120px' },
              right: 0,
              width: '100%',
              backgroundColor: '#1a1a1a',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              py: 2,
              zIndex: 100,
            }}
          >
            {navLinks.map((link, index) => {
              const active = location.pathname === link.path;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RouterLink
                    to={link.path}
                    style={{
                      color: active ? '#ff6ec7' : '#fff',
                      textDecoration: 'none',
                      fontSize: '1.2rem',
                      margin: '10px 0',
                      transition: 'color 0.3s ease, transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!active) e.currentTarget.style.color = '#ff6ec7';
                    }}
                    onMouseLeave={(e) => {
                      if (!active) e.currentTarget.style.color = '#fff';
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </RouterLink>
                </motion.div>
              );
            })}
          </MotionBox>
        )}
      </AnimatePresence>
    </AppBar>
  );
};

export default Navbar;
