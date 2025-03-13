// src/components/ProfileSummary.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const ProfileSummary = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        maxWidth: 1200,
        margin: 'auto',
        background: '#121212',
        p: { xs: 2, md: 4 },
        gap: { xs: 2, md: 4 },
      }}
    >
      {/* Image Column */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ flexShrink: 0 }}
      >
        <Box
          component="img"
          src="/assets/logo.jpg"
          alt="Profile"
          sx={{
            width: { xs: 150, md: 200 },
            height: 'auto',
            borderRadius: 2,
            boxShadow: '0 4px 10px rgba(255, 110, 199, 0.5)',
          }}
        />
      </motion.div>

      {/* Text Column */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ flex: 1 }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff', mb: 1 }}>
          Profile Summary
        </Typography>
        <Typography variant="body1" sx={{ color: '#e0e0e0', lineHeight: 1.7, mb: 2 }}>
          I am a highly skilled Generative AI Specialist and Front-End Developer passionate about creating innovative and AI-driven solutions. With expertise in React.js, HTML, CSS, JavaScript, Python, and Java. I specialize in developing seamless, user-friendly applications.
        </Typography>
        <Typography variant="body1" sx={{ color: '#e0e0e0', lineHeight: 1.7, mb: 2 }}>
          Beyond coding, I explore AI Prompting and Generative AI, leveraging cutting-edge technologies to build intelligent systems. My experience spans software development, AI integration, UI/UX design, and automation, ensuring that my projects are both functional and future-ready.
        </Typography>
        <Typography variant="body1" sx={{ color: '#e0e0e0', lineHeight: 1.7 }}>
          I am also an author, a tech enthusiast, and an explorer of emerging AI trends. My goal is to merge creativity with technology to develop impactful digital experiences.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default ProfileSummary;
