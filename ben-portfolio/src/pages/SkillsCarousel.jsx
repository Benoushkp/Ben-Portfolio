import React, { useRef, useCallback } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const SkillsCarousel = React.memo(({ children }) => {
  const scrollRef = useRef(null);

  const scrollLeft = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }, []);

  const scrollRight = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }, []);

  return (
    <Box>
      <Box
        ref={scrollRef}
        className="skills-carousel"
        sx={{
          overflowX: 'auto',
          display: 'flex',
          gap: 3,
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {children}
      </Box>
      <Box
        className="carousel-controls"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 2,
          gap: 3,
        }}
      >
        <IconButton
          onClick={scrollLeft}
          component={motion.div}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          sx={{
            backgroundColor: 'rgba(255, 110, 199, 0.8)',
            color: '#fff',
          }}
        >
          <ArrowBackIosNew />
        </IconButton>
        <IconButton
          onClick={scrollRight}
          component={motion.div}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          sx={{
            backgroundColor: 'rgba(255, 110, 199, 0.8)',
            color: '#fff',
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
});

export default SkillsCarousel;
