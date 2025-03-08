import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled card for soft skills with hover effects
const SkillCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
  },
  width: '340px',
  height: '300px',
}));

const SoftSkills = () => {
  const skills = [
    {
      name: 'Communication',
      icon: '/assets/communication.jpg', // update with your image path
      description: 'Clear, concise, and effective verbal and written communication skills.',
    },
    {
      name: 'Teamwork',
      icon: '/assets/teamwork.jpg',
      description: 'Collaborative team player who works well with diverse groups.',
    },
    {
      name: 'Problem Solving',
      icon: '/assets/problemsolving.jpg',
      description: 'Analytical thinker capable of developing innovative solutions.',
    },
    {
      name: 'Adaptability',
      icon: '/assets/adaptability.jpg',
      description: 'Quickly adjusts to new environments and changing situations.',
    },
    {
      name: 'Time Management',
      icon: '/assets/timemanagement.jpg',
      description: 'Efficient at prioritizing tasks and meeting deadlines consistently.',
    },
    {
      name: 'Creativity',
      icon: '/assets/creativity.webp',
      description: 'Innovative approach to challenges with creative idea generation.',
    },
  ];

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {skills.map((skill, index) => (
        <Box key={index} className="skill-item" sx={{ flex: '0 0 auto' }}>
          <SkillCard>
            <CardMedia
              component="img"
              image={skill.icon}
              alt={skill.name}
              sx={{
                width: 100,
                height: 100,
                objectFit: 'contain',
                mx: 'auto',
                my: 2,
              }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {skill.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {skill.description}
              </Typography>
            </CardContent>
          </SkillCard>
        </Box>
      ))}
    </Box>
  );
};

export default SoftSkills;
