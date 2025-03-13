import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const InternshipExperience = () => {
  const internships = [
    {
      company: 'Imarticus Corporate Solutions',
      role: 'Learning and Training Governance Intern',
      duration: 'April 2024 - June 2024',
      description:
        'Experienced in Learning and Training Governance with the help of my team, handling operations and administration for corporate training programs. Skilled in Excel Automation to streamline reporting and optimize workflows. Hands-on expertise in Generative AI, leveraging AI-driven solutions to enhance training methodologies. Proficient in process optimization and strategic execution to improve learning outcomes.',
      image: '/assets/Imarticus.jpeg',
    },
    {
      company: 'SDA Group of Schools',
      role: 'French Guest Teacher',
      duration: 'October 2023 - March 2024',
      description:
        'Taught French to Higher Secondary students, focusing on language proficiency and cultural understanding. Conducted career guidance sessions to help students navigate their academic and professional paths. Delivered personality development training, enhancing students confidence, communication, and leadership skills. Passionate about mentorship and holistic education, ensuring student growth beyond academics.',
      image: '/assets/SDA.jpeg',
    },
    {
      company: 'SkillForge E-Learning Pvt Ltd',
      role: 'Business Development Associate Intern',
      duration: 'July 2023 - October 2023',
      description:
        'Experienced in Lead Generation, Digital Marketing, and Customer Engagement, driving brand visibility and business growth. Skilled in targeted marketing strategies, leveraging digital platforms to attract and convert leads. Proficient in customer relationship management, ensuring high engagement and retention. Passionate about data-driven marketing and optimizing campaigns for maximum impact.',
      image: '/assets/SkillForge.jpeg',
    },
    {
      company: 'National Smallscale Industries Corporation',
      role: 'Android App Development and IoT',
      duration: 'August 2022 - August 2022',
      description:
        'Experienced in Lead Generation, Digital Marketing, and Customer Engagement, driving brand visibility and business growth. Skilled in targeted marketing strategies, leveraging digital platforms to attract and convert leads. Proficient in customer relationship management, ensuring high engagement and retention. Passionate about data-driven marketing and optimizing campaigns for maximum impact.',
      image: '/assets/NSIC.jpg',
    },
  ];

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 4 }, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Internship Experience
      </Typography>
      {internships.map((internship, index) => (
        <Accordion 
          key={index} 
          sx={{ mb: 2 }}
          TransitionProps={{ timeout: 500 }} // Smooth transition
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">
              {internship.role} at {internship.company} ({internship.duration})
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <img
                src={internship.image}
                alt={`${internship.company} internship`}
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  borderRadius: '8px',
                }}
              />
            </Box>
            <Typography variant="body1">
              {internship.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default InternshipExperience;
