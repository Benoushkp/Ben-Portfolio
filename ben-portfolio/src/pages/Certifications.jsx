import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/main.css'; // Global styles

const Certifications = () => {
  const certificationsList = [
    {
      title: 'Full Stack Web Development',
      issuer: 'Campus Connection',
      year: '2025',
      details: 'Completed Full Stack Course which includes HTML, CSS, Javascript, React JS, JDBC, MySQL and Java.',
    },
    {
      title: 'Generative AI and Prompt Engineering',
      issuer: 'Google Badges',
      year: '2025',
      details: 'Completed Generative AI Course which consists of Image generation, Attention Mechanism, Encoder-Decoder Architecture, Transformer and BERT Models, Image Captioning, Vertex AI Studio and MLOps.',
    },
    {
      title: 'Gemini for Google Workspace',
      issuer: 'Google Badges',
      year: '2024',
      details: 'Completed Gemini for Google Workspace Course which includes Gmail, Google SLides, Google Docs, Google Sheets, Google Meet, Google Drive and Google Workspace Tools.',
    },
    {
      title: 'Python Programming Language',
      issuer: 'Udemy',
      year: '2024',
      details: 'Completed Python Course which includes Built in Functions, Loops, Conditional, Operators, Librarires such as Numpy, Pandas, Matplotlib and other related contents.',
    },
    {
      title: 'Introduction to AI, ML and Data Science',
      issuer: 'Infosys Springboard',
      year: '2022',
      details: 'Learnt basics of AI, ML, Data Science and its related components. ',
    },
    {
      title: 'Java Programming Language',
      issuer: 'Campus Connection',
      year: '2025',
      details: 'Completed Intermediate Java Course which includes Built in methods, Loops, Conditional, Operators, Librarires, Polymorphism, Inheritance, Encapsulation and other related contents.',
    },
  ];

  return (
    <Box
      className="container certifications-container"
      sx={{ py: 8, px: { xs: 2, md: 4 }, maxWidth: 800, mx: 'auto' }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Courses and Certifications
      </Typography>
      {certificationsList.map((cert, index) => (
        <Accordion key={index} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">
              {cert.title} - {cert.issuer} ({cert.year})
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              {cert.details}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Certifications;
