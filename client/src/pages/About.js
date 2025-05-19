import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const About = () => {
  const skills = [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'JavaScript (ES6+)',
    'HTML5 & CSS3',
    'Material-UI',
    'Git & GitHub',
  ];

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Company Name',
      period: '2022 - Present',
      description: 'Developed and maintained web applications using MERN stack.',
    },
    {
      title: 'Frontend Developer',
      company: 'Previous Company',
      period: '2020 - 2022',
      description: 'Built responsive user interfaces and implemented new features.',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" gutterBottom align="center">
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={6} sx={{ mt: 4 }}>
          {/* About Text */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography variant="h5" gutterBottom>
                Who I Am
              </Typography>
              <Typography paragraph>
                I'm a passionate Full Stack Developer with a strong foundation in
                web development and a keen eye for creating elegant solutions to
                complex problems. My journey in software development began with a
                curiosity about how things work on the web, which led me to dive
                deep into both frontend and backend technologies.
              </Typography>
              <Typography paragraph>
                I believe in writing clean, maintainable code and staying up to
                date with the latest technologies and best practices in the
                industry. When I'm not coding, you can find me exploring new
                technologies, contributing to open-source projects, or sharing my
                knowledge through technical writing.
              </Typography>
            </motion.div>
          </Grid>

          {/* Skills */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Skills
                </Typography>
                <List>
                  {skills.map((skill) => (
                    <ListItem key={skill}>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={skill} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </motion.div>
          </Grid>

          {/* Experience */}
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography variant="h5" gutterBottom>
                Experience
              </Typography>
              <Grid container spacing={3}>
                {experiences.map((exp) => (
                  <Grid item xs={12} md={6} key={exp.title}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        {exp.title}
                      </Typography>
                      <Typography color="text.secondary" gutterBottom>
                        {exp.company} | {exp.period}
                      </Typography>
                      <Typography>{exp.description}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About; 