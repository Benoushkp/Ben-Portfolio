import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  background: '#121212',
  minHeight: '100vh',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
  boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  borderRadius: '15px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(255,110,199,0.5)',
  },
}));

const ShortFilms = () => {
  const films = [
    {
      title: 'Aruvathi Naangu (64)',
      description:
        'Education System include all the 64 Arts and it should help us to find what suits us.',
      image: '/assets/short4.jpg',
      link: 'https://drive.google.com/file/d/1qvQFSa6M1BAhaR8U_wbFSO_78MLShdpv/view?usp=drive_link',
    },
    {
      title: 'Throne: Crown of Drug Sea',
      description:
        'A short film which helps to get rid of addiction and know the bad side of drugs. (Filming)',
      image: '/assets/short5.jpg',
      link: '',
    },
  ];

  return (
    <SectionContainer>
      <Typography variant="h3" align="center" gutterBottom sx={{ color: '#fff' }}>
        My Short Films
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {films.map((film, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardMedia component="img" height="200" image={film.image} alt={film.title} />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', mb: 1 }}>
                  {film.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#ccc', mb: 2 }}>
                  {film.description}
                </Typography>
                <Button
                  variant="contained"
                  href={film.link}
                  target="_blank"
                  sx={{
                    backgroundColor: '#ff6ec7',
                    '&:hover': {
                      backgroundColor: '#ff6ec7',
                      color: '#fff',
                    },
                  }}
                >
                  View Film
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default ShortFilms;
