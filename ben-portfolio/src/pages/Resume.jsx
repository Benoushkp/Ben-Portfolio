import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';

// Styled container for the resume section
const ResumeContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  textAlign: 'center',
  maxWidth: 800,
  margin: '0 auto',
}));

const Resume = () => {
  return (
    <ResumeContainer>
      <Typography variant="h4" gutterBottom>
        Resume
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        You can view or download my resume by clicking the buttons below.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<DescriptionIcon />}
        href="/resume.pdf"
        target="_blank"
        sx={{ mr: 2 }}
      >
        View Resume
      </Button>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<DescriptionIcon />}
        href="/resume.pdf"
        download
      >
        Download Resume
      </Button>
    </ResumeContainer>
  );
};

export default Resume;
