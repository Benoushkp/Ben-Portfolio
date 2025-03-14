// src/App.jsx
import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './components/Contact';

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
      {/* Wrap routed content in a Box that hides horizontal overflow */}
      <Box sx={{ overflowX: 'hidden' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
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
