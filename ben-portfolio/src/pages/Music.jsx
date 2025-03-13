import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

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

const Music = () => {
  const songs = [
    {
      title: 'Pogaadhe From Animal',
      description: 'A soulful track available in two versions: Vocals Only and With Music.',
      image: 'https://i.ytimg.com/vi/p15_FkDm0a4/maxresdefault.jpg',
      vocals: '/assets/Music/Pogaadhe Vocals Ben.mp3',
      withMusic: '/assets/Music/Pogaadhe Benoush.mp3',
    },
    {
      title: 'Kanave Unai Vandhu Sera',
      description: 'A soulful track available in two versions: Vocals Only and With Music.',
      image: 'https://i.ytimg.com/vi/IhEyAWjj604/sddefault.jpg',
      vocals: '/assets/Music/Kanave unnai Ben vocals.mp3',
      withMusic: '/assets/Music/Kanave unnai Benoush.mp3',
    },
    {
      title: 'Theethiriyaai from Brahmasthra',
      description: 'A soulful track available in two versions: Vocals Only and With Music.',
      image: 'https://i.ytimg.com/vi/-QnEDRpTMm0/maxresdefault.jpg',
      vocals: '/assets/Music/Theethiriyai aanai Ben Vocals.mp3',
      withMusic: '/assets/Music/Theethiriyai aanai Benoush.mp3',
    },
    {
      title: 'Venmathi from Minnalae',
      description: 'A soulful track available in two versions: Vocals Only and With Music.',
      image: 'https://d3tstbtkvp70pc.cloudfront.net/sites/default/files/2023-03/venmathi%20thumbnail.jpg.png',
      vocals: '/assets/Music/Venmathi Ben Vocals.mp3',
      withMusic: '/assets/Music/Venmathi Benoush.mp3',
    },
    {
      title: 'Illamai Thirumbudhey from Petta',
      description: 'A soulful track available in two versions: Vocals Only and With Music.',
      image: 'https://i.ytimg.com/vi/TKeU1bLlAcc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAgBUoVBH7hZnKFjvmnCH_kngex6Q',
      vocals: '/assets/Music/Illamai Thirumbudhey Bit Ben Vocals.mp3',
      withMusic: '/assets/Music/Illamai Thirumbudhey Bit Benoush.mp3',
    },
    {
      title: 'Naalai En Kalai from Mugamoodi',
      description: 'A soulful track available in two versions: Vocals Only and With Music.',
      image: 'https://i.ytimg.com/vi/jtLqQxoDjHA/maxresdefault.jpg',
      vocals: '/assets/Music/Naalai En Kalai Ben Vocals.mp3',
      withMusic: '/assets/Music/Naalai en Kalai Benoush.mp3',
    },
    {
      title: 'Dhinam Oru Kavithai',
      description: 'A soulful track available in two versions: Vocals Only and With Music.',
      image: 'https://i.ytimg.com/vi/eYNV5jN3eA8/maxresdefault.jpg',
      vocals: '/assets/Music/Thinam Oru Kavithai Ben Vocals.mp3',
      withMusic: '/assets/Music/Thinam Oru Kavithai Benoush.mp3',
    },
    {
      title: 'Uyirey from Amaran',
      description: 'A soulful track available in two versions: Vocals Only and With Music.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFAb-9E_KpIZogiJfDkm1xdl5WClK_HMF4Q&s',
      vocals: '/assets/Music/Uyirey (Amaran) Ben Vocals.mp3',
      withMusic: '/assets/Music/Uyirey (Amaran) Benoush.mp3',
    },
    {
      title: 'Husn',
      description: 'A soulful track available in two versions: Vocals Only and With Music.',
      image: 'https://i.ytimg.com/vi/_mR6bY-ndso/sddefault.jpg',
      vocals: '/assets/Music/Husn Benoush Vocals.mp3',
      withMusic: '/assets/Music/Husn Benoush .mp3',
    },
    {
      title: 'Sundari from Thalapathi',
      description: 'A soulful track available only in Vocals.',
      image: 'https://i.ytimg.com/vi/KXnE1M5fn9Y/maxresdefault.jpg',
      vocals: '/assets/Music/Sundari Benoush Vocals.mp3',
      withMusic: '',
    },
    {
      title: 'Jo Tum Mere Ho',
      description: 'A soulful track available only in Vocals.',
      image: 'https://i.ytimg.com/vi/my8WptBf7MA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAtQQeDw1WbZn19Sud_18W0buG9Xg',
      vocals: '/assets/Music/Jo Tum Mere ho Ben Vocals.mp3',
      withMusic: '',
    },
    {
      title: 'Tum Hi Ho',
      description: 'A soulful track available only in Vocals.',
      image: 'https://www.hinditracks.in/wp-content/uploads/2013/03/tum-hi-ho-aashiqui-2.jpg',
      vocals: '/assets/Music/Tum Hi Ho Benoush Vocals mp3.mp3',
      withMusic: '',
    },
    {
      title: 'Koondu Kulla',
      description: 'A soulful track available only in Vocals.',
      image: 'https://i.ytimg.com/vi/XZhoBod26pA/sddefault.jpg',
      vocals: '/assets/Music/Koondu Kulla Benoush Vocals.mp3',
      withMusic: '',
    },
    {
      title: 'Azhage Brahmanidam',
      description: 'A soulful track available only in Vocals.',
      image: 'https://i.ytimg.com/vi/48yHZhFnQpA/maxresdefault.jpg',
      vocals: '/assets/Music/Azhage Brahmanidam Ben Vocals .mp3',
      withMusic: '',
    },
    {
      title: 'Oh Penne from Vanakkam Chennai',
      description: 'A soulful track available only in Vocals.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3_DjPESYvjePCXgv5jC3oRJaNOmvYTjG5Q&s',
      vocals: '/assets/Music/Oh Penne Benoush Vocals.mp3',
      withMusic: '',
    },
    {
      title: 'Unnakkenna Venum Sollu',
      description: 'A soulful track available only in Vocals.',
      image: 'https://i.ytimg.com/vi/9uyVHEsYjLg/sddefault.jpg',
      vocals: '/assets/Music/Unakkenna Venum Sollu Ben Vocals.mp3',
      withMusic: '',
    },
    {
      title: 'Yennakkena Yaarum Illaye',
      description: 'A soulful track available only in Vocals.',
      image: 'https://i.ytimg.com/vi/w91ke3cewTo/maxresdefault.jpg',
      vocals: '/assets/Music/Yennakkena Yaarum Illaye Ben Vocals.mp3',
      withMusic: '',
    },
    {
      title: 'Kannana Kanne from NRD',
      description: 'A soulful track available only in Vocals.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6v71crt96CWvy_rZkiXaPnr0m8ZVcQIAAOMes28lTWf0ZvyBopfloJgsYOpzwpbq3-X4&usqp=CAU',
      vocals: '/assets/Music/kannana kanne Benoush vocals.mp3',
      withMusic: '',
    },
    {
      title: 'Kalyana Malai',
      description: 'A soulful track available only in Music version.',
      image: 'https://i.ytimg.com/vi/hrkAgGIOmys/maxresdefault.jpg',
      vocals: '',
      withMusic: '/assets/Music/Kalyana Malai Benoush .mp3',
    },
    {
      title: 'Mannipaaya from VTV',
      description: 'A soulful track available only in Music version.',
      image: 'https://i.ytimg.com/vi/ed6VxAKX0Dg/maxresdefault.jpg',
      vocals: '',
      withMusic: '/assets/Music/Mannipaaya Benoush.mp3',
    },
    {
      title: 'Megamo Aval',
      description: 'A soulful track available only in Music version.',
      image: 'https://i.ytimg.com/vi/9cU8FcW8Bnw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDUsnx6mk4BVQdm6ww-JIuXxttBqQ',
      vocals: '',
      withMusic: '/assets/Music/Megamo Aval Benoush.mp3',
    },
    {
      title: 'Mudhal Nee Mudivum Nee',
      description: 'A soulful track available only in Music version.',
      image: 'https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale/resources/0-0-1z575093/list/1170x658withlogo2ec1f0dd4047488d8251111658092c752f8d964827574daba36d255eae2d6d49.jpg',
      vocals: '',
      withMusic: '/assets/Music/Mudhal Nee Mudivum Nee Benoush.mp3',
    },
    {
      title: 'Nee-Kavithaigala',
      description: 'A soulful track available only in Music version.',
      image: 'https://i.ytimg.com/vi/6FbR31lvum0/maxresdefault.jpg',
      vocals: '',
      withMusic: '/assets/Music/Nee-Kavithaigala Benoush.mp3',
    },
    {
      title: 'Pirai Thedum',
      description: 'A soulful track available only in Music version.',
      image: 'https://i.ytimg.com/vi/a7rCc_oMUhI/maxresdefault.jpg',
      vocals: '',
      withMusic: '/assets/Music/Pirai Thedum Benoush.mp3',
    },
    {
      title: 'Thaensudare',
      description: 'A soulful track available only in Music version.',
      image: 'https://i.ytimg.com/vi/79Gd8Wz9zYI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCRCkUxv1km3shLuda6izDfqGlDmA',
      vocals: '',
      withMusic: '/assets/Music/Thaensudare Benoush.mp3',
    },
    {
      title: 'Yendi Vittu Pona from Dragon',
      description: 'A soulful track available only in Music version.',
      image: 'https://i.ytimg.com/vi/JQ32hkdep3I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC4e_W7Lr_yKHNo1icuS6vYkl9khw',
      vocals: '',
      withMusic: '/assets/Music/Yendi Vittu Pona Benoush.mp3',
    },
    {
      title: 'Perfect Ed Sheeran Short',
      description: 'A soulful track available only in Music version.',
      image: 'https://i.ytimg.com/vi/kPhpHvnnn0Q/maxresdefault.jpg',
      vocals: '',
      withMusic: '/assets/Music/Pefect Benoush.mp3',
    },
  ];

  // New state for sorting and filtering
  const [isAlphabetSorted, setIsAlphabetSorted] = React.useState(false);
  const [filterType, setFilterType] = React.useState("all");

  // Handlers for sort and filter controls
  const handleSortAlphabetically = () => {
    setIsAlphabetSorted(true);
  };

  const handleReset = () => {
    setIsAlphabetSorted(false);
    setFilterType("all");
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  // Filter songs based on type
  const filteredSongs = songs.filter(song => {
    if (filterType === "both") return song.vocals && song.withMusic;
    if (filterType === "vocals") return song.vocals && !song.withMusic;
    if (filterType === "music") return song.withMusic && !song.vocals;
    return true;
  });

  // Sort alphabetically if the flag is set
  const displaySongs = isAlphabetSorted 
    ? filteredSongs.slice().sort((a, b) => a.title.localeCompare(b.title))
    : filteredSongs;

  return (
    <SectionContainer>
      <Typography variant="h3" align="center" gutterBottom sx={{ color: '#fff' }}>
        Listen In My Voice
      </Typography>

      {/* Sorting and Filtering Controls */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4, gap: 2 }}>
        <Button 
          variant="contained" 
          onClick={handleSortAlphabetically}
          sx={{ 
            backgroundColor: '#ff6ec7', 
            '&:hover': { backgroundColor: '#ff85d0' },
            height: '40px'
          }}
        >
          Sort Alphabetically
        </Button>
        <Button 
          variant="outlined" 
          onClick={handleReset}
          sx={{ 
            borderColor: '#ff6ec7', 
            color: '#ff6ec7',
            height: '40px',
            '&:hover': { backgroundColor: '#ff6ec7', color: '#fff' }
          }}
        >
          Reset
        </Button>
        <Select
          value={filterType}
          onChange={handleFilterChange}
          sx={{ 
            height: '40px',
            backgroundColor: '#ff6ec7', 
            color: '#000',
            '.MuiSvgIcon-root': { color: '#000' },
            borderRadius: '4px',
          }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="both">Songs with Music and Vocals</MenuItem>
          <MenuItem value="vocals">Only Vocals</MenuItem>
          <MenuItem value="music">Only With Music</MenuItem>
        </Select>
      </Box>

      <Grid container spacing={4}>
        {displaySongs.map((song, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardMedia component="img" height="200" image={song.image} alt={song.title} />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', mb: 1 }}>
                  {song.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#ccc', mb: 2 }}>
                  {song.description}
                </Typography>

                {/* Render Vocals Only if available */}
                {song.vocals && (
                  <>
                    <Typography variant="subtitle1" sx={{ color: '#fff', mb: 1 }}>
                      Vocals Only:
                    </Typography>
                    <audio controls style={{ width: '100%', marginBottom: '8px' }}>
                      <source src={song.vocals} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                    <Button
                      variant="outlined"
                      href={song.vocals}
                      download
                      sx={{
                        borderColor: '#ff6ec7',
                        color: '#ff6ec7',
                        mb: 2,
                        '&:hover': { backgroundColor: '#ff6ec7', color: '#fff' },
                      }}
                    >
                      Download Vocals Only
                    </Button>
                  </>
                )}

                {/* Render With Music if available */}
                {song.withMusic && (
                  <>
                    <Typography variant="subtitle1" sx={{ color: '#fff', mb: 1 }}>
                      With Music:
                    </Typography>
                    <audio controls style={{ width: '100%', marginBottom: '8px' }}>
                      <source src={song.withMusic} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                    <Button
                      variant="outlined"
                      href={song.withMusic}
                      download
                      sx={{
                        borderColor: '#ff6ec7',
                        color: '#ff6ec7',
                        '&:hover': { backgroundColor: '#ff6ec7', color: '#fff' },
                      }}
                    >
                      Download With Music
                    </Button>
                  </>
                )}
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default Music;
