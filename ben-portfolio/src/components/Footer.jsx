import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(90deg, #764ba2, #667eea)',
  padding: theme.spacing(4, 2),
  marginTop: theme.spacing(8),
  textAlign: 'center',
  color: '#fff',
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  margin: theme.spacing(0, 1),
  transition: 'transform 0.3s ease, color 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    color: theme.palette.secondary.light,
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Box sx={{ mb: 2 }}>
        <SocialIconButton
          component={Link}
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
        >
          <LinkedInIcon />
        </SocialIconButton>
        <SocialIconButton
          component={Link}
          href="https://github.com/yourprofile"
          target="_blank"
        >
          <GitHubIcon />
        </SocialIconButton>
        <SocialIconButton component={Link} href="mailto:youremail@example.com">
          <EmailIcon />
        </SocialIconButton>
      </Box>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} A Portfoilio by Benoush Valentine F. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
