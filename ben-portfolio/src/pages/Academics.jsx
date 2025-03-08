import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const Academics = () => {
  const courses = [
    "Advanced Algorithms & Data Structures",
    "Modern Web Development & UI/UX",
    "Artificial Intelligence & Machine Learning",
    "Data Science & Big Data Analytics",
    "Cloud Computing & Distributed Systems",
  ];

  const achievements = [
    "Dean's List for 3 consecutive years",
    "Winner of the XYZ Hackathon",
    "Published research in ABC Journal",
    "Top 5% in National Coding Competition",
  ];

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 4 }, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Academics
      </Typography>

      {/* Courses Section */}
      <Typography variant="h6" gutterBottom>
        Courses
      </Typography>
      <List>
        {courses.map((course, index) => (
          <ListItem key={index} sx={{ py: 0.5 }}>
            <ListItemText primary={course} />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 4 }} />

      {/* Achievements Section */}
      <Typography variant="h6" gutterBottom>
        Achievements
      </Typography>
      <List>
        {achievements.map((achievement, index) => (
          <ListItem key={index} sx={{ py: 0.5 }}>
            <ListItemText primary={achievement} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Academics;
