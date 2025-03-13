// src/components/Contact.jsx
import React from 'react';
import { Typography, IconButton, Stack, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';

// Glassmorphic Contact Card
const ContactCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 4px 15px rgba(255, 110, 199, 0.3)',
  borderRadius: '20px',
  padding: theme.spacing(4),
  textAlign: 'center',
  maxWidth: 500,
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // For mobile: reduce width and padding
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90%',
    padding: theme.spacing(2),
  },
}));

// Profile Image Inside the Card
const ProfileImage = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  objectFit: 'cover',
  borderRadius: '12px',
  boxShadow: '0 4px 10px rgba(255, 110, 199, 0.5)',
  marginBottom: '16px',
  [theme.breakpoints.down('sm')]: {
    width: 80,
    height: 80,
    marginBottom: theme.spacing(1),
  },
}));

// Social Media Button with Hover Glow Effect
const SocialButton = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.2)',
    boxShadow: '0 0 15px rgba(255, 110, 199, 0.7)',
  },
}));

const Contact = () => {
  return (
    <ContactCard>
      <ProfileImage src="/assets/contact.jpg" alt="Your Profile" />
      <CardContent>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: '#fff', textShadow: '2px 2px 8px rgba(255, 110, 199, 0.5)' }}
        >
          Let's Connect!
        </Typography>
        <Typography variant="body1" sx={{ color: '#ddd', mb: 3 }}>
          Whether you have ideas, collaborations, or just want to say Hi, I'm happy to connect!
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="center">
          <SocialButton component="a" href="https://www.linkedin.com/in/benoush-valentine-f-965a27252" target="_blank">
            <LinkedInIcon fontSize="large" />
          </SocialButton>
          <SocialButton component="a" href="https://github.com/Benoushkp" target="_blank">
            <GitHubIcon fontSize="large" />
          </SocialButton>
          <SocialButton component="a" href="mailto:benoushvalentine@gmail.com">
            <EmailIcon fontSize="large" />
          </SocialButton>
          <SocialButton component="a" href="https://www.instagram.com/benoushvalentine?igsh=MTdpYndzZHd4bGN1eg==" target="_blank">
            <InstagramIcon fontSize="large" />
          </SocialButton>
          <SocialButton component="a" href="tel:+917200460169">
            <PhoneIcon fontSize="large" />
          </SocialButton>
        </Stack>
      </CardContent>
    </ContactCard>
  );
};

export default Contact;
