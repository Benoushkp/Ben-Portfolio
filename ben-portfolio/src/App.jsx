// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

// Import your core components and pages
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './pages/Skills';
import ProfileSummary from './components/ProfileSummary';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Higher from './pages/Higher';
import InternshipExperience from './pages/InternshipExperience';
import ProjectsPage from './pages/Projects';
import Interests from './pages/Interests';
import Hobby from './pages/Hobby';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/Blog';
import ShortFilms from './pages/ShortFilms';
import Books from './pages/Books';
import Music from './pages/Music';
import Websites from './pages/Websites';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Box
        className="main-content"
        sx={{
          padding: { xs: '1rem', sm: '2rem', md: '3rem' },
          width: '100%',
          overflowX: 'hidden',
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
                  width: '100%',
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
          <Route path="/higher" element={<Higher />} />
          <Route path="/internship" element={<InternshipExperience />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/hobbies" element={<Hobby />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/shortfilms" element={<ShortFilms />} />
          <Route path="/books" element={<Books />} />
          <Route path="/songs" element={<Music />} />
          <Route path="/websites" element={<Websites />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
