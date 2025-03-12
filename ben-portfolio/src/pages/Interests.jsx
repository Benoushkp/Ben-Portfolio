import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code'; // Web Development
import BrushIcon from '@mui/icons-material/Brush'; // Generative AI
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode'; // Testing Apps & Websites
import MemoryIcon from '@mui/icons-material/Memory'; // AI Technologies

// Fixed Card Height for Uniform Display
const CARD_HEIGHT = 420;

// Glassmorphic Styled Card with Hover Effects
const InterestCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: `${CARD_HEIGHT}px`,
  background: 'rgba(255, 255, 255, 0.1)', // Glassmorphic effect
  backdropFilter: 'blur(10px)', // Blur background
  border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  borderRadius: '15px',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 24px rgba(255, 110, 199, 0.5)',
  },
}));

// Icon Animation for Hover Effect
const IconBox = styled(Box)(({ theme }) => ({
  transition: 'transform 0.3s ease, color 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const Interests = () => {
  const interests = [
    {
      name: 'Web Development',
      description:
        'Passionate about building modern, responsive web applications using React.js, JavaScript, and front-end technologies to enhance user experience.',
      icon: <CodeIcon sx={{ fontSize: 60, color: '#764ba2' }} />,
    },
    {
      name: 'Generative AI',
      description:
        'Exploring the world of AI, from automation to advanced AI-driven content generation, using tools like ChatGPT, Midjourney, and AI-powered frameworks.',
      icon: <BrushIcon sx={{ fontSize: 60, color: '#667eea' }} />,
    },
    {
      name: 'Testing Apps & Websites',
      description:
        'I enjoy testing and reviewing new applications and websites, analyzing UX/UI design, functionality, and performance to ensure a seamless user experience.',
      icon: <DeveloperModeIcon sx={{ fontSize: 60, color: '#3f51b5' }} />,
    },
    {
      name: 'Exploring AI Technologies',
      description:
        'Being passionate about AI, I actively explore advancements in Generative AI, AI prompting, and automation tools that revolutionize industries.',
      icon: <MemoryIcon sx={{ fontSize: 60, color: '#4caf50' }} />,
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 4 },
        maxWidth: 1200,
        mx: 'auto',
        background: 'linear-gradient(135deg, #1a1a1a, #282828)',
        borderRadius: '20px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: '#fff',
          textShadow: '2px 2px 8px rgba(255, 110, 199, 0.5)',
        }}
      >
        Areas of Interest
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {interests.map((interest, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <InterestCard>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flexGrow: 1,
                }}
              >
                <IconBox sx={{ mb: 2 }}>{interest.icon}</IconBox>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: '#fff', fontWeight: 'bold' }}
                >
                  {interest.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#ddd' }}>
                  {interest.description}
                </Typography>
              </CardContent>
            </InterestCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Interests;
