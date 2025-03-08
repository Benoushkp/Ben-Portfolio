import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled card for skill items with hover effects
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

const TechnicalSkills = () => {
  const skills = [
    {
      name: 'Generative AI and AI Prompting',
      icon: '/assets/gen.jpeg',
      description:
        'Expertise in AI-driven content generation, advanced prompting techniques, and integrating AI models for intelligent automation.',
    },
    {
      name: 'HTML, CSS, JavaScript',
      icon: '/assets/html.jpeg',
      description:
        'Proficient in building modern, responsive, and interactive web applications with best practices in web development.',
    },
    {
      name: 'React JS',
      icon: '/assets/react.jpeg',
      description:
        'Skilled in developing dynamic and efficient user interfaces using React.js, including Hooks, Redux, and Context API.',
    },
    {
      name: 'Python',
      icon: '/assets/python.jpeg',
      description:
        'Foundation in Python for automation, AI applications, and backend development, with experience in data handling and scripting.',
    },
    {
      name: 'MS Office, Google Suite',
      icon: '/assets/micro.jpeg',
      description:
        'Advanced proficiency in productivity tools like Excel, Sheets, Docs, and automation for efficient workflow management.',
    },
    {
      name: 'Canva',
      icon: '/assets/canva.png',
      description:
        'Experience in designing visually appealing and user-friendly interfaces using Canva and Figma, with a focus on modern UI principles.',
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

export default TechnicalSkills;
