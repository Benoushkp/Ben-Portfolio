// src/pages/Resume.jsx
import React from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';

// Glassmorphic Resume Card with responsive adjustments
const ResumeCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 4px 15px rgba(255, 110, 199, 0.3)',
  borderRadius: '15px',
  padding: theme.spacing(5),
  textAlign: 'center',
  maxWidth: 800,
  margin: 'auto',
  color: '#fff',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90%',
    padding: theme.spacing(3),
  },
}));

// Styled Button with hover effects
const CustomButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
  padding: '12px 24px',
  borderRadius: '4px',
  fontSize: '1rem',
  transition: 'all 0.3s ease-in-out',
  background: 'linear-gradient(45deg, #ff6ec7, #d04ed6)',
  color: '#fff',
  '&:hover': {
    transform: 'scale(1.05)',
    color: '#000', // Text turns black on hover
    boxShadow: '0px 0px 15px rgba(255, 110, 199, 0.7)',
  },
}));

const Resume = () => {
  return (
    <ResumeCard>
      <CardContent>
        <Typography variant="h4" gutterBottom sx={{ textShadow: '2px 2px 8px rgba(255, 110, 199, 0.5)' }}>
          My Resume
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          View or download my resume using the buttons below.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <CustomButton
            variant="contained"
            startIcon={<DescriptionIcon />}
            href="/resume.pdf"
            target="_blank"
          >
            View Resume
          </CustomButton>
          <Button
            variant="outlined"
            startIcon={<DescriptionIcon />}
            href="/resume.pdf"
            download
            sx={{
              borderColor: '#ff6ec7',
              color: '#ff6ec7',
              '&:hover': {
                backgroundColor: '#ff6ec7',
                color: '#000',
              },
            }}
          >
            Download Resume
          </Button>
        </Box>
      </CardContent>
    </ResumeCard>
  );
};

export default Resume;
