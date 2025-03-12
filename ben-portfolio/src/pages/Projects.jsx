import React from 'react';
import { Container, Typography, Card, CardContent, Button, Box } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Simple fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// 2. Decorative Projects Hero Section (30vh tall) with banner image and gradient overlay
const ProjectsHero = styled(Box)(({ theme }) => ({
  height: '30vh',
  marginTop: 0, // Ensure hero starts at the very top
  position: 'relative',
  background: `linear-gradient(135deg, rgba(15,15,15,0.8), rgba(40,40,40,0.8)),
               url("/assets/projectbanner.jpeg") no-repeat center bottom`,
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: '#fff',
  animation: `${fadeIn} 1s ease-out`,
  overflow: 'hidden',
}));

const ProjectsHeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 800,
  marginBottom: theme.spacing(1),
  position: 'relative',
  zIndex: 1,
}));

const ProjectsHeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 300,
  color: '#ccc',
  position: 'relative',
  zIndex: 1,
}));

// 3. Projects Section as a vertical list with increased gap between cards
const ProjectsSection = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4, 2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(8),
}));

// 4. Large Project Card with hover effect and extra spacing
const ProjectCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1e1e1e !important',
  borderRadius: '16px !important',
  overflow: 'hidden',
  boxShadow: '0 8px 16px rgba(0,0,0,0.6) !important',
  transition: 'transform 0.3s ease !important',
  minHeight: 500,
  marginBottom: theme.spacing(8),
  '&:hover': {
    transform: 'translateY(-8px) !important',
  },
}));

// 5. AccentButton that stays pink with white text at all times, no ripple
const AccentButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff6ec7 !important',
  color: '#fff !important',
  padding: '0.8rem 1.5rem',
  borderRadius: '50px',
  fontWeight: 'bold',
  textTransform: 'none',
  transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
  WebkitTapHighlightColor: 'transparent',
  '& .MuiTouchRipple-root': {
    display: 'none !important',
  },
  '&:hover': {
    backgroundColor: '#ff6ec7 !important',
    boxShadow: '0 4px 15px rgba(255,110,199,0.6) !important',
  },
  '&:active, &:focus, &:focus-visible, &:focus-within': {
    backgroundColor: '#ff6ec7 !important',
    color: '#fff !important',
    boxShadow: 'none !important',
    outline: 'none !important',
  },
}));

// 6. ProjectImageSlider for multiple images with smooth fade transitions and fixed height
const ProjectImageSlider = ({ images, height }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Each image is displayed for 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box sx={{ position: 'relative', width: '100%', height: height, overflow: 'hidden' }}>
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt={`Slide ${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // 1-second smooth fade transition
          style={{
            width: '100%',
            height: '100%', // Set image height as 100% of container
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </AnimatePresence>
    </Box>
  );
};

// 7. Sample project data with multiple images and deployment link
const projectsData = [
  {
    id: 1,
    title: 'Her Cart - The Most Advanced & Premium Shopping Website',
    images: ['/assets/HerCart1.png', '/assets/HerCart2.png', '/assets/HerCart3.png'],
    description:
      'Her Cart is a premium e-commerce platform dedicated to luxurious jewelry shopping. It features a sleek, modern design that adapts flawlessly to both desktop and mobile devices, allowing users to browse an exquisite collection ranging from timeless classics to contemporary trends. The website incorporates advanced filtering and search options to make finding the perfect piece effortless. Secure payment integration and robust backend systems ensure a safe and seamless shopping experience. High-quality imagery and detailed product descriptions highlight the beauty and craftsmanship of each item. Its innovative interface and elegant presentation set Her Cart apart in the competitive world of online jewelry retail. Overall, the project exemplifies superior design, cutting-edge technology, and a commitment to customer satisfaction. Use This Login Credentials to view the whole website.                                        [ Username: test@example.com Password: password ] ',
    repo: 'https://github.com/Benoushkp/Her-Cart',
    deploy: 'https://hercart-forher.netlify.app/',
  },
  {
    id: 2,
    title: 'Responsive UI Showcase',
    images: ['/images/ui-showcase.jpg', '/images/ui-showcase2.jpg'],
    description:
      'A demonstration of modern responsive UI design with innovative layouts and smooth animations. Experience an interactive interface optimized for all devices.',
    repo: 'https://github.com/yourprofile/ui-showcase',
  },
  {
    id: 3,
    title: 'Data Visualization Dashboard',
    images: ['/images/data-dashboard.jpg', '/images/data-dashboard2.jpg'],
    description:
      'An interactive dashboard that transforms complex data into dynamic visual stories. Explore real-time analytics through engaging charts and intuitive controls.',
    repo: 'https://github.com/yourprofile/data-dashboard',
  },
];

// 8. ProjectsPage Component
const ProjectsPage = () => {
  return (
    <Box sx={{ backgroundColor: '#111', minHeight: '100vh', pt: 0 }}>
      <ProjectsHero>
        <ProjectsHeroTitle variant="h1">Our Projects</ProjectsHeroTitle>
        <ProjectsHeroSubtitle variant="h4">
          Showcasing Hardwork, Dedication, Innovation and Passion towards Technology
        </ProjectsHeroSubtitle>
      </ProjectsHero>
      <ProjectsSection maxWidth="md">
        {projectsData.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImageSlider images={project.images} height="450px" />
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', borderBottom: '2px solid #ff6ec7', pb: 1, mb: 2 }}>
                {project.title}
              </Typography>
              <Typography variant="body1" sx={{ color: '#ccc', mb: 2, lineHeight: 1.6 }}>
                {project.description}
              </Typography>
              {/* Two buttons: View Repository (left) and Website (right) if available */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <AccentButton variant="contained" href={project.repo} target="_blank">
                  View Repository
                </AccentButton>
                {project.deploy && (
                  <AccentButton variant="contained" href={project.deploy} target="_blank">
                    Website
                  </AccentButton>
                )}
              </Box>
            </CardContent>
          </ProjectCard>
        ))}
      </ProjectsSection>
    </Box>
  );
};

export default ProjectsPage;
