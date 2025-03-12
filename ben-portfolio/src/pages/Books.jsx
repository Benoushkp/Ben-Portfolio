import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  background: '#121212',
  minHeight: '100vh',
}));

const CARD_HEIGHT = 600; // Fixed height for all cards

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
  boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  borderRadius: '15px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: CARD_HEIGHT,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(255,110,199,0.5)',
  },
}));

const Books = () => {
  const books = [
    {
      title: 'Ms.Divine A Celestial Girl',
      description:
        'Ms. Divine: A Celestial Girl (Virtuology) is a mystical tale of a celestial being exploring virtues, destiny, and cosmic secrets, revealing the power of light against darkness. (Published)',
      image: '/assets/book1.png',
      link: 'https://www.wattpad.com/story/387222522?utm_source=android&utm_medium=link&utm_content=share_reading&wp_page=reading_part_end&wp_uname=Benoush1722',
    },
    {
      title: 'Unfinished Love',
      description:
        'Unfinished Love is a heartfelt non-fiction based on a true story where the love story is incomplete yet beautiful, exploring the depths of love, loss, and destiny. (Initial Stages)',
      image: '/assets/book3.png',
      link: '',
    },
    {
      title: 'Throne: Crown of Drug Sea',
      description:
        'Throne: Crown of Drug Sea is a gripping psychological thriller that delves into the dark underworld of crime, power, and deception. (Coming Soon)',
      image: '/assets/book2.png',
      link: '',
    },
  ];

  return (
    <SectionContainer>
      <Typography variant="h3" align="center" gutterBottom sx={{ color: '#fff' }}>
        My Books
      </Typography>
      <Grid container spacing={4}>
        {books.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardMedia
                component="img"
                image={book.image}
                alt={book.title}
                sx={{
                  objectFit: 'contain',
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                }}
              />
              <CardContent sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', mb: 1 }}>
                  {book.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#ccc', mb: 2 }}>
                  {book.description}
                </Typography>
                <Button
                  variant="contained"
                  href={book.link}
                  target="_blank"
                  sx={{
                    backgroundColor: '#ff6ec7',
                    '&:hover': {
                      backgroundColor: '#ff6ec7',
                      color: '#fff',
                    },
                  }}
                >
                  View Book
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default Books;
