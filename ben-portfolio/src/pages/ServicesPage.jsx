import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import BookIcon from '@mui/icons-material/Book';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const CARD_HEIGHT = 350; // Fixed height for all cards

// Glassmorphic Service Card with smooth hover effect and fixed height
const ServiceCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  background: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  borderRadius: '15px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: `${CARD_HEIGHT}px`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 24px rgba(255, 110, 199, 0.5)',
  },
}));

// Icon container with uniform size and subtle hover animation
const ServiceIcon = styled(Box)(({ theme }) => ({
  fontSize: 60,
  marginBottom: theme.spacing(1),
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const ServicesPage = () => {
  const services = [
    {
      title: 'Digital Dreamscapes',
      description:
        'Crafting innovative, responsive websites that transform your digital presence into a captivating experience.',
      icon: <LanguageIcon fontSize="inherit" />,
    },
    {
      title: 'Literary Odyssey',
      description:
        'Expert book writing services that weave your ideas into compelling narratives and timeless stories.Paid collaboration is also available.',
      icon: <BookIcon fontSize="inherit" />,
    },
    {
      title: 'Quotable Inspirations',
      description:
        'Original and motivational quote writing that captures the essence of your brand and inspires your audience.',
      icon: <FormatQuoteIcon fontSize="inherit" />,
    },
    {
      title: 'Visual Alchemy',
      description:
        'Generating stunning AI-driven images and videos that blend art and technology into captivating visual stories.',
      icon: <ImageIcon fontSize="inherit" />,
    },
    {
      title: 'Cinematic Mastery',
      description:
        'Professional video editing services that transform raw footages from you into compelling cinematic experiences.',
      icon: <VideoLibraryIcon fontSize="inherit" />,
    },
    {
      title: 'Melodic Muse',
      description:
        'Singing and lyric writing services that create memorable melodies and soulful tunes, capturing your unique vibe.',
      icon: <MusicNoteIcon fontSize="inherit" />,
    },
  ];

  return (
    <Box sx={{ pt: 2, pb: 6, px: { xs: 2, md: 4 }, background: '#121212', minHeight: '100vh' }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ color: '#fff', mb: 2 }}  // Reduced margin-bottom for heading
      >
        Services Available
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <RouterLink to="/contact" style={{ textDecoration: 'none' }}>
              <ServiceCard>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: '#fff' }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#ddd' }}>
                  {service.description}
                </Typography>
              </ServiceCard>
            </RouterLink>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesPage;
