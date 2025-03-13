import React, { lazy, Suspense } from 'react';
import SkillsCarousel from './SkillsCarousel';
import '../styles/main.css';   // Global styles
import '../styles/Skills.css'; // Skills page specific styles

const TechnicalSkills = lazy(() => import('./TechnicalSkills'));
const NonTechnicalSkills = lazy(() => import('./NonTechnicalSkills'));
const SoftSkills = lazy(() => import('./SoftSkills'));

const Skills = () => {
  return (
    <div className="container skills-container">
      <h1 className="fade-in">My Skills</h1>
      
      <section className="section fade-in skills-section">
        <h2>Technical Skills</h2>
        <SkillsCarousel>
          <Suspense fallback={<div>Loading Technical Skills...</div>}>
            <TechnicalSkills />
          </Suspense>
        </SkillsCarousel>
      </section>

      <section className="section fade-in skills-section">
        <h2>Non-Technical Skills</h2>
        <SkillsCarousel>
          <Suspense fallback={<div>Loading Non-Technical Skills...</div>}>
            <NonTechnicalSkills />
          </Suspense>
        </SkillsCarousel>
      </section>

      <section className="section fade-in skills-section">
        <h2>Soft Skills</h2>
        <SkillsCarousel>
          <Suspense fallback={<div>Loading Soft Skills...</div>}>
            <SoftSkills />
          </Suspense>
        </SkillsCarousel>
      </section>
    </div>
  );
};

export default Skills;
