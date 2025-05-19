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
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LaunchIcon from '@mui/icons-material/Launch';

function Projects() {
  // Remove state and effect for fetching projects
  // const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetchProjects();
  // }, []);

  // Remove fetch function
  // const fetchProjects = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/api/projects');
  //     const data = await response.json();
  //     setProjects(data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error('Error fetching projects:', error);
  //     setLoading(false);
  //   }
  // };

  // Hardcoded project data from resume
  const universityProjects = [
    {
      id: 1,
      title: 'Elite Auto Auction Web Project',
      description: "It's a Luxury and Classic vehicle Auction Platform. In that project I do the Recommendation System And Design Home page, AboutUs page, ContactUs page, and Add page to Register the Transporting Companies, Also admin page an admin can Approve company Registration, Delete, Download Document of Registered Companies.",
      // No image, github, or live links provided in resume for these projects
      technologies: [] // Add technologies if you have them
    },
    {
      id: 2,
      title: 'Home.rental Mobile application UI/UX Designing',
      description: "It's my second year second semester Mobile App Development Module Assessment. I linked that Project in my Linkedin profile.",
      // No image, github, or live links provided in resume for these projects
      technologies: [] // Add technologies if you have them
    },
  ];

  // Remove loading state check
  // if (loading) {
  //   return (
  //     <motion.div 
  //       className="loading"
  //       initial={{ opacity: 0 }}
  //       animate={{ opacity: 1 }}
  //       transition={{ duration: 0.5 }}
  //     >
  //       Loading projects...
  //     </motion.div>
  //   );
  // }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4 // Increased stagger for visual effect
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Increased initial y for more dramatic entry
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6 // Slightly longer duration
      }
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Increased initial y for title
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" component="h1" gutterBottom align="center" className="section-title">
            University Projects
          </Typography>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {universityProjects.map((project, index) => (
              <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.03, // Slightly less scale on hover
                boxShadow: "0 15px 40px rgba(0,0,0,0.2)", // Enhanced shadow
                transition: { duration: 0.3 }
              }}
              >
              {/* Removed image display as no images were provided in resume */}
              {/* <motion.img 
                src={project.image} 
                    alt={project.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              /> */}
              <motion.h3
                initial={{ opacity: 0, x: -30 }} // Increased initial x for title
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              >
                      {project.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -30 }} // Increased initial x for description
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    >
                      {project.description}
              </motion.p>
              {project.technologies.length > 0 && (
                <motion.div 
                  className="technologies"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3,
                        delay: index * 0.1 + 0.4 + techIndex * 0.1
                      }}
                    >
                      {tech}
                    </motion.span>
                      ))}
                </motion.div>
              )}
              {/* Removed buttons as no links were provided in resume */}
              {/* <CardActions>
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
              </CardActions> */}
              </motion.div>
          ))}
        </motion.div>
      </Box>
    </Container>
  );
}

export default Projects; 