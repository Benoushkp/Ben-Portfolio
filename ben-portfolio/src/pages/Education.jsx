import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Education = () => {
  const educationList = [
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'XYZ University',
      year: '2022',
      details: 'Graduated with honors, focusing on algorithms, data structures, and web development.'
    },
    {
      degree: 'M.Sc. in AI & Data Science',
      institution: 'ABC Institute',
      year: '2024',
      details: 'Specialized in machine learning, deep learning, and natural language processing.'
    },
  ];

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 4 }, maxWidth: 800, mx: 'auto' }}>
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
