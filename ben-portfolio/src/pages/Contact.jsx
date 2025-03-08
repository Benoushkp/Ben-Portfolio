import React from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 4 }, maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        I'm excited to connect! Whether you have questions, collaboration ideas, or just want to say hello, feel free to reach out.
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <IconButton 
          color="primary" 
          component="a" 
          href="https://www.linkedin.com/in/yourprofile" 
          target="_blank"
          sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton 
          color="primary" 
          component="a" 
          href="https://github.com/yourprofile" 
          target="_blank"
          sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton 
          color="primary" 
          component="a" 
          href="mailto:youremail@example.com"
          sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }}
        >
          <EmailIcon fontSize="large" />
        </IconButton>
        <IconButton 
          color="primary" 
          component="a" 
          href="https://www.instagram.com/yourprofile" 
          target="_blank"
          sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
        <IconButton 
          color="primary" 
          component="a" 
          href="tel:+1234567890"
          sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }}
        >
          <PhoneIcon fontSize="large" />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Contact;
