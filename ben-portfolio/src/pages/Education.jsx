import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/main.css';  // Ensure your global styles are imported

const Education = () => {
  const educationList = [
    {
      degree: 'SSLC',
      institution: 'SDA Group of Schools',
      year: '2019',
      details: 'I achieved an impressive 90.8% in my SSLC, excelling in subjects such as Mathematics, Science, Social Studies, English, and Tamil. This strong performance highlights my academic dedication and my ability to balance both analytical and creative disciplines.',
    },
    {
      degree: 'Higher Secondary',
      institution: 'SDA Group of Schools',
      year: '2021',
      details: 'I secured an impressive 93.7% in my Higher Secondary exams, demonstrating excellence across a diverse curriculum that included Mathematics, Computer Science, Physics, Chemistry, English, and French. This achievement reflects not only my academic rigor but also my ability to thrive in both technical and language subjects.',
    },
    {
      degree: 'B.Tech., Information Technology ',
      institution: 'Anna University',
      year: '2021 -2025',
      details: 'I maintained an impressive 8.43 CGPA over 8 semesters under the B.Tech IT 2021 regulation. My coursework encompassed a robust blend of core subjects and domain-oriented disciplines, sharpening my skills in programming, data structures, networking, and emerging technologies.',
    },
  ];

  return (
    <Box
      className="container education-container"
      sx={{ py: 8, px: { xs: 2, md: 4 }, maxWidth: 800, mx: 'auto' }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Education
      </Typography>
      {educationList.map((edu, index) => (
        <Accordion key={index} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">
              {edu.degree} - {edu.institution} ({edu.year})
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              {edu.details}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Education;
