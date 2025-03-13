// src/App.jsx
import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProfileSummary from './components/ProfileSummary';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

// Lazy-load page components to improve performance
const Skills = lazy(() => import('./pages/Skills'));
const Higher = lazy(() => import('./pages/Higher'));
const InternshipExperience = lazy(() => import('./pages/InternshipExperience'));
const ProjectsPage = lazy(() => import('./pages/Projects'));
const Interests = lazy(() => import('./pages/Interests'));
const Hobby = lazy(() => import('./pages/Hobby'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const BlogPage = lazy(() => import('./pages/Blog'));
const ShortFilms = lazy(() => import('./pages/ShortFilms'));
const Books = lazy(() => import('./pages/Books'));
const Music = lazy(() => import('./pages/Music'));
const Websites = lazy(() => import('./pages/Websites'));

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
        <Suspense fallback={<div>Loading...</div>}>
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
                  {/* Contact component removed from the home page */}
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
        </Suspense>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
