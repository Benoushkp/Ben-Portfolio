import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

// Import core layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import the necessary sections for the Home page
import Hero from './components/Hero';
import Skills from './pages/Skills';
import ProfileSummary from './components/ProfileSummary';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Box 
        className="main-content" 
        sx={{
          padding: { xs: '1rem', sm: '2rem', md: '3rem' },
          width: '100%',
          overflowX: 'hidden'
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: { xs: '1rem', md: '2rem' },
                  width: '100%'
                }}
              >
                <Hero />
                <ProfileSummary />
                <Resume />
                <Contact />
              </Box>
            }
          />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
