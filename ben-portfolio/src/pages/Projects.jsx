import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Sample project data
const projectsData = [
  {
    id: 1,
    title: 'Generative AI Chatbot',
    image: '/images/ai-chatbot.jpg', // Place your image in the public/images folder
    description: 'A live demo of a generative AI chatbot powered by advanced GPT models.',
    repo: 'https://github.com/yourprofile/ai-chatbot'
  },
  {
    id: 2,
    title: 'Responsive UI Showcase',
    image: '/images/ui-showcase.jpg',
    description: 'A project highlighting responsive design with smooth animations and modern UI.',
    repo: 'https://github.com/yourprofile/ui-showcase'
  },
  // Add more projects as needed
];

// Styled Card for consistent styling and hover effects
const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  maxWidth: 600,
  marginLeft: 'auto',
  marginRight: 'auto',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
}));

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 4 }, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Projects
      </Typography>
      <Slider {...settings}>
        {projectsData.map(project => (
          <div key={project.id}>
            <StyledCard>
              <CardMedia
                component="img"
                height="300"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  href={project.repo}
                  target="_blank"
                  sx={{ mt: 2 }}
                >
                  View Repo
                </Button>
              </CardContent>
            </StyledCard>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Projects;
