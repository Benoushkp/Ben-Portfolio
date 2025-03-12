import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/main.css'; // Global styles

const Academics = () => {
  const achievements = [
    "1. Scored Centum in Social Science (SSLC)",
    "2. Scored 97 in Computer Science (Higher Secondary)",
    "3. Scored Centum in Several Subjects during College in all 8 Semesters",
    "4. President of the IT Department - (2024 - 2025)",
    "5. Organized Technical Symposiums and Conference",
    "6. Participated and won in several seminars in inter-college and other colleges as well",
    "7. Served as Student Placement Co-ordinator"
  ];

  return (
    <Box
      className="container academics-container"
      sx={{ py: 8, px: { xs: 2, md: 4 }, maxWidth: 800, mx: 'auto' }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Academics
      </Typography>

      {/* Achievements Section */}
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Achievements</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {achievements.map((achievement, index) => (
            <Box key={index} sx={{ mb: 1 }}>
              <Typography variant="body1">{achievement}</Typography>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Academics;
