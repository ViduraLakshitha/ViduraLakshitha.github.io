import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          py: 8,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Welcome to My Portfolio
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h5"
            color="text.secondary"
            paragraph
            sx={{ mb: 4, maxWidth: '800px' }}
          >
            I'm a Full Stack Developer passionate about creating beautiful and
            functional web applications. Let's build something amazing together!
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            component={RouterLink}
            to="/projects"
            variant="contained"
            size="large"
            sx={{ mr: 2, mb: 2 }}
          >
            View My Work
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
            variant="outlined"
            size="large"
          >
            Contact Me
          </Button>
        </motion.div>
      </Box>

      {/* Featured Skills Section */}
      <Box sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" gutterBottom align="center">
          Skills & Expertise
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {['Frontend Development', 'Backend Development', 'Database Design', 'UI/UX Design'].map((skill) => (
            <Grid item xs={12} sm={6} md={3} key={skill}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    boxShadow: 3,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {skill}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home; 