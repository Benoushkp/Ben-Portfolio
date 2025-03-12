import React from 'react';
import { Box, Typography } from '@mui/material';
import Education from './Education';
import Academics from './Academics';
import Certification from './Certifications';
import '../styles/main.css';  // Global styles

const Higher = () => {
  return (
    <Box className="container higher-container" sx={{ py: 8, px: { xs: 2, md: 4 } }}>
      <Typography variant="h3" align="center" gutterBottom>
        Education, Academics & Certifications
      </Typography>

      {/* Education Overview Section */}
      <Box sx={{ mt: 4 }}>
        <Education />
      </Box>

      {/* Academics Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          
        </Typography>
        <Academics />
      </Box>

      {/* Certifications Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          
        </Typography>
        <Certification />
      </Box>
    </Box>
  );
};

export default Higher;
