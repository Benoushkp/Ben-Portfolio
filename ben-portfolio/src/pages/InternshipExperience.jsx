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
      company: 'Tech Solutions Inc.',
      role: 'Front-end Developer Intern',
      duration: 'June 2023 - August 2023',
      description:
        'Developed responsive web applications using React and Material‑UI, collaborated with designers, and optimized website performance.',
    },
    {
      company: 'Innovatech Labs',
      role: 'Software Engineering Intern',
      duration: 'January 2023 - May 2023',
      description:
        'Assisted in developing new features, engaged in code reviews, and participated in agile sprint meetings to enhance the company’s main product.',
    },
    // Add more internship details as needed
  ];

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 4 }, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Internship Experience
      </Typography>
      {internships.map((internship, index) => (
        <Accordion key={index} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">
              {internship.role} at {internship.company} ({internship.duration})
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
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
