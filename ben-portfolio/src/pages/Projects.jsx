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
    title: '1. Her Cart - The Most Advanced & Premium Shopping Website',
    images: ['/assets/HerCart1.png', '/assets/HerCart2.png', '/assets/HerCart3.png'],
    description:
      'Her Cart is a premium e-commerce platform dedicated to luxurious jewelry shopping. It features a sleek, modern design that adapts flawlessly to both desktop and mobile devices, allowing users to browse an exquisite collection ranging from timeless classics to contemporary trends. The website incorporates advanced filtering and search options to make finding the perfect piece effortless. Secure payment integration and robust backend systems ensure a safe and seamless shopping experience. High-quality imagery and detailed product descriptions highlight the beauty and craftsmanship of each item. Its innovative interface and elegant presentation set Her Cart apart in the competitive world of online jewelry retail. Overall, the project exemplifies superior design, cutting-edge technology, and a commitment to customer satisfaction. Use This Login Credentials to view the whole website. [ Username: test@example.com Password: password ] ',
    repo: 'https://github.com/Benoushkp/Her-Cart',
    deploy: 'https://hercart-forher.netlify.app/',
  },
  {
    id: 2,
    title: '2. Advanced To-Do List Web Application',
    images: ['/assets/Sign-In.png', '/assets/Sign-Up.png','/assets/To-Do-List.png'],
    description:
      'This Advanced To-Do List Web Application is a fully functional, futuristic productivity tool featuring a neon cyberpunk-inspired UI built with HTML, CSS, and JavaScript that seamlessly blends aesthetic appeal with robust functionality. It allows users to manage tasks by adding entries with specific dates and times, marking them complete with a stylish strikethrough effect, and deleting them effortlessly with a single click, while an integrated alarm system continuously monitors for due tasks—triggering an alarm sound and displaying a notification pop-up when needed. Enhanced with dynamic neon glow effects, smooth animated transitions on buttons and task rows, and interactive hover and click effects, the app also features a real-time clock with a blinking effect and persistent data storage via local storage, ensuring that tasks remain saved even after refreshing the browser. With elegant BS CREATIONS branding and a visually striking design, this application offers a unique and engaging experience for productivity enthusiasts. Use This Login Credentials to view the whole website. [ Username: test@example.com Password: password ]',
    repo: 'https://github.com/Benoushkp/To-Do-List',
    deploy: 'https://advanced-todolist-bs.netlify.app/',
  },
  {
    id: 3,
    title: '3. Neon Futuristic Calculator',
    images: ['/assets/Advanced-Futuristic-Calculator.png'],
    description:
      'The Neon Futuristic Calculator is a next-generation digital tool that combines high precision with an immersive, cyberpunk-inspired design, featuring a sleek neon cyan-blue interface and dynamic floating animation that gives it a premium, sci-fi aesthetic. It supports advanced calculation capabilities—including basic arithmetic, percentage operations, and bracketed expressions for complex equations—while its grid-based layout and responsive, interactive hover effects ensure intuitive and efficient use. Enhanced with a dedicated power on/off feature and a custom BS logo branding beneath the display, this calculator is not just a practical utility but also a bold statement of innovation and creativity.',
    repo: 'https://github.com/Benoushkp/Neon-Futuristic-Calculator',
    deploy: 'https://neon-calculator-bs.netlify.app/',
  },
  {
    id: 4,
    title: '4. Futuristic Guess Game',
    images: ['/assets/Guess-Game.png'],
    description:
      'Futuristic Guess Game is a web-based number guessing game that combines retro-futuristic visuals with cutting-edge particle effects to deliver an immersive and dynamic gaming experience. The game challenges players to guess a number between 1 and 100 using temperature-based hints like "Very High 🔥" or "Super Near! ⚡", with a scoring system that starts at 10 points and deducts one point per wrong guess. Enhanced by smooth GSAP animations, an interactive Particles.js background, glowing UI elements crafted with CSS filters, and a responsive design that works seamlessly across all devices, this game also features an auto-restart option for continuous play. Developed with HTML5, CSS3, and JavaScript and styled using Tailwind CSS, it stands as a testament to BS Studios’ innovation and attention to detail—notably overcoming deployment challenges such as file naming issues and case sensitivity errors on Netlify. The project not only provides a thrilling and visually captivating gaming experience but also showcases essential lessons in file validation and web-safe naming practices.',
    repo: 'https://github.com/Benoushkp/Guessgame-BS',
    deploy: 'http://bsguessgame.netlify.app/',
  },
  {
    id: 5,
    title: '5. EventsHub - Your Virtual Events Organizer',
    images: ['/assets/Eventhub3.png','/assets/Eventhub1.png','/assets/Eventhub2.png'],
    description:
      'EventsHub - Your Virtual Events Organizer is an innovative, full-stack web application designed to revolutionize event planning and management by seamlessly connecting organizers and attendees. Catering to both virtual and in-person events, it offers a dynamic platform for creating detailed event listings, managing RSVPs, and delivering real-time notifications—all within a sleek, responsive, and mobile-friendly interface. Enhanced by an interactive dashboard and advanced networking features that foster community engagement before, during, and after events, EventsHub stands apart from conventional event booking apps. Currently under active development with work going on full swing, this project is set to be deployed in the upcoming days, promising a comprehensive and cutting-edge solution for the future of virtual events.',
    repo: '',
    deploy: '',
  },
  {
    id: 6,
    title: '6. QubitScript - The Domain Specific Programming Language for Quantum Computing',
    images: ['/assets/QubitScript.png'],
    description:
      'QubitScript - The Domain Specific Programming Language for Quantum Computing is an innovative, next-generation language tailored to simplify the development of quantum algorithms and applications. Currently in its early stages and progressing full swing, QubitScript offers a streamlined, intuitive syntax designed specifically for quantum operations, including qubit initialization, entanglement, superposition, and measurement. By integrating quantum-specific constructs directly into its core, this language aims to bridge the gap between theoretical quantum research and practical, efficient quantum software development. Set to be deployed in the upcoming months, QubitScript is poised to transform the way developers harness the power of quantum computing, making advanced quantum concepts more accessible and accelerating breakthroughs in this cutting-edge field.',
    repo: '',
    deploy: '',
  },
  {
    id: 7,
    title: '7. AssetSphere: Smart Asset Management',
    images: ['/assets/AssetSphere.png'],
    description:
      'AssetSphere is a next-generation asset management solution designed for modern businesses. It provides a centralized platform that enables organizations to track, manage, and optimize their assets in real time, all through an intuitive dashboard equipped with robust analytics. Users can effortlessly monitor asset performance while enjoying seamless integration with existing workflows and third-party applications. With advanced security protocols, AssetSphere ensures that sensitive data remains confidential, and its customizable reporting tools deliver deep insights into asset utilization and maintenance needs. Mobile support empowers teams to manage assets on the go, anytime and anywhere, while the scalable architecture ensures that the system grows alongside your business, making asset management smarter and more efficient.',
    repo: '',
    deploy: '',
  },
  {
    id: 8,
    title: '8. Revolutionizing Inventory Management(RIM) using RFID - For Customs',
    images: ['/assets/RIM.png'],
    description:
      'Revolutionizing Inventory Management (RIM) using RFID – For Customs is an innovative solution designed to automate inventory tracking within customs operations. Currently in its initial development phase and set for deployment in the upcoming year, RIM leverages advanced RFID technology to provide real-time monitoring of goods and containers throughout the customs process. By integrating with existing systems, it offers a centralized dashboard that delivers actionable insights and automated alerts to enhance operational efficiency. Its smart tray/shelf system ensures accurate location tracking and optimized storage, reducing manual errors while boosting accountability and traceability. With robust data security measures and compliance with international trade regulations, RIM aims to streamline clearance procedures, improve resource allocation, and enable faster, more precise inventory control in customs.',
    repo: '',
    deploy: '',
  },
];

// 8. ProjectsPage Component
const ProjectsPage = () => {
  return (
    <Box sx={{ backgroundColor: '#111', minHeight: '100vh', pt: 0 }}>
      <ProjectsHero>
        <ProjectsHeroTitle variant="h1">My Projects</ProjectsHeroTitle>
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
