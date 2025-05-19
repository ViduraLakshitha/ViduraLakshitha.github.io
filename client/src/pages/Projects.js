import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform built with MERN stack, featuring user authentication, product management, and payment integration.',
      image: 'https://source.unsplash.com/random/800x600?ecommerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1-demo.com',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, team features, and progress tracking.',
      image: 'https://source.unsplash.com/random/800x600?task',
      technologies: ['React', 'Express', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/yourusername/project2',
      live: 'https://project2-demo.com',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'A comprehensive social media analytics dashboard with data visualization and reporting features.',
      image: 'https://source.unsplash.com/random/800x600?dashboard',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/yourusername/project3',
      live: 'https://project3-demo.com',
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
            My Projects
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {project.description}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </Button>
                    <Button
                      size="small"
                      startIcon={<LaunchIcon />}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects; 