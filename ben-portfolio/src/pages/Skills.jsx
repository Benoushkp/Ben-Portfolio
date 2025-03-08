import React from 'react';
import TechnicalSkills from './TechnicalSkills';
import NonTechnicalSkills from './NonTechnicalSkills';
import SoftSkills from './SoftSkills';
import SkillsCarousel from './SkillsCarousel';
import '../styles/main.css';   // Global styles
import '../styles/Skills.css'; // Skills page specific styles

const Skills = () => {
  return (
    <div className="container skills-container">
      <h1 className="fade-in">My Skills</h1>
      
      <section className="section fade-in skills-section">
        <h2>Technical Skills</h2>
        <SkillsCarousel>
          <TechnicalSkills />
        </SkillsCarousel>
      </section>

      <section className="section fade-in skills-section">
        <h2>Non-Technical Skills</h2>
        <SkillsCarousel>
          <NonTechnicalSkills />
        </SkillsCarousel>
      </section>

      <section className="section fade-in skills-section">
        <h2>Soft Skills</h2>
        <SkillsCarousel>
          <SoftSkills />
        </SkillsCarousel>
      </section>
    </div>
  );
};

export default Skills;
