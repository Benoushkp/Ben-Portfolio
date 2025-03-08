import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';

// Styled card for non-technical skill items with hover effects and spacing
const SkillCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
 // Spacing between cards
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
  },
  width: '340px',
  height: '470px', // Increased height to accommodate the slider and text
}));

// ImageSlider component for automatically cycling through images with advanced animation
const ImageSlider = ({
  images,
  widthProp = { xs: 250, sm: 275, md: 275 },
  heightProp = { xs: 200, sm: 250, md: 250 },
  interval = 3000,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <Box
      sx={{
        width: widthProp,
        height: heightProp,
        position: 'relative',
        overflow: 'hidden',
        mx: 'auto',
        my: 2,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`Slide ${current}`}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          style={{
            width: '100%',
            height: '100%',
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

const NonTechnicalSkills = () => {
  const skills = [
    {
      name: 'Video Editing',
      description:
        'Proficient in Filmora, CapCut, and Filmigo, with expertise in both mobile and computer-based editing. Skilled in creating seamless transitions, applying effects, and enhancing audio.',
      images: [
        '/assets/vid1.jpg',
        '/assets/vid2.png',
        '/assets/vid3.jpg',
      ],
    },
    {
      name: 'Photography and Editing',
      description:
        'Experienced in mobile and DSLR photography, capturing stunning visuals. Skilled in Photoshop editing for professional retouching and color correction.',
      images: [
        '/assets/photo.jpg',
        '/assets/photo1.jpg',
        '/assets/photo2.jpg',
        '/assets/photo4.jpg',
      ],
    },
    {
      name: 'Short Film Director',
      description:
        'Directed short films showcasing storytelling and cinematic vision. Brings creativity and compelling narratives to life on screen.',
      images: [
        '/assets/short1.jpg',
        '/assets/short2.jpg',
        '/assets/short3.jpg',
        '/assets/short4.jpg',
        '/assets/short5.jpg',
        '/assets/short6.jpg',
      ],
    },
    {
      name: 'Author',
      description:
        'Author of Ms. Divine: A Celestial Girl, a non-fiction on Virtuology. Currently working on Unfinished Love (true-story non-fiction) and Throne: Crown of Drug Sea (psychological thriller in final stages).',
      images: [
        '/assets/book.jpg',
        '/assets/book1.png',
        '/assets/book2.png',
        '/assets/book33.png',
      ],
    },
    {
      name: 'Quotes Writer',
      description: (
        <>
          Crafting thought-provoking quotes inspired by daily life, emotions, and the world around us. My words reflect deep insights, motivation, and reality.{' '}
          <a
            href="https://www.instagram.com/_valentines_quotes_/?igsh=MWxsZ3V2aXV0Ymh5eg%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline' }}
          >
            Click here
          </a>{' '}
          to visit my Instagram Quotes page!
        </>
      ),
      images: [
        '/assets/vq.jpg',
        '/assets/vq1.jpg',
        '/assets/vq2.jpg',
        '/assets/vq3.jpg',
        '/assets/vq4.jpg',
      ],
    },
  ];

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {skills.map((skill, index) => (
        <Box key={index} className="skill-item" sx={{ flex: '0 0 auto' }}>
          <SkillCard>
            <ImageSlider
              images={skill.images}
              widthProp={{ xs: 250, sm: 275, md: 275 }}
              heightProp={{ xs: 200, sm: 250, md: 250 }}
              interval={3000}
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

export default NonTechnicalSkills;
