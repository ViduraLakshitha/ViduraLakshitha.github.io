import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box>
            <IconButton
              component={Link}
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <TwitterIcon />
            </IconButton>
          </Box>
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' Your Name. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 