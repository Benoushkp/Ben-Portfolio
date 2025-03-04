import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Academics from './pages/Academics';
import InternshipExperience from './pages/InternshipExperience';
import TechnicalSkills from './pages/TechnicalSkills';
import NonTechnicalSkills from './pages/NonTechnicalSkills';
import SoftSkills from './pages/SoftSkills';
import Projects from './pages/Projects';
import Interests from './pages/Interests';
import Hobby from './pages/Hobby';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/internship" element={<InternshipExperience />} />
        <Route path="/technical-skills" element={<TechnicalSkills />} />
        <Route path="/non-technical-skills" element={<NonTechnicalSkills />} />
        <Route path="/soft-skills" element={<SoftSkills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
