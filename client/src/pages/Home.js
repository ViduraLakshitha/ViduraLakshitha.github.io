import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import StorageIcon from '@mui/icons-material/Storage';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div 
      className="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.section 
        className="hero"
        variants={itemVariants}
      >
        <motion.div
          className="hero-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="gradient-text"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            I'm a Full Stack Developer passionate about creating amazing web experiences
          </motion.p>
          <motion.div 
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a 
              href="https://www.linkedin.com/in/vidura-lakshitha-4b6362338" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkedInIcon /> LinkedIn
            </motion.a>
            <motion.a 
              href="https://github.com/ViduraLakshitha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitHubIcon /> GitHub
            </motion.a>
            <motion.a 
              href="mailto:Wvlakshitha@gmail.com" 
              className="social-link"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <EmailIcon /> Email
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section 
        className="about"
        variants={itemVariants}
      >
        <motion.div
          className="about-content"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I'am W.V.Lakkshitha Bandara. I'm 22 years young. I do my O/L
            and A/L in Central College Piliyandala. Now I'm following a
            Bachelor of Information Technology Degree at SLIIT. I have
            experience in UI/UX Design, Frontend Design. Skilled in
            modern frameworks like React, Node.js, and Figma, Photoshop,
            with a strong focus on creative problem-solving and user-
            centered design.
            Connect with me on <a href="https://www.linkedin.com/in/vidura-lakshitha-4b6362338" target="_blank" rel="noopener noreferrer">LinkedIn</a> to learn more about my professional journey.
          </p>
        </motion.div>
      </motion.section>

      <motion.section 
        className="education"
        variants={itemVariants}
      >
        <motion.div
          className="education-content"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Education</h2>
          <div className="education-list">
            <div className="education-item">
              <h3>Bachelor of Information Technology</h3>
              <p>Sri Lanka Institute of Information Technology - 2023 - present</p>
            </div>
            <div className="education-item">
              <h3>Diploma in Information Technology</h3>
              <p>ESOFT Metro Campus - Piliyandala - 2023-2024</p>
            </div>
            <div className="education-item">
              <h3>Diploma in English</h3>
              <p>ESOFT Metro Campus - Piliyandala - 2023-2024</p>
            </div>
            <div className="education-item">
              <h3>A1, A2 English Courses</h3>
              <p>British Council - Sri Lanka - 2023-2024</p>
            </div>
            <div className="education-item">
              <h3>A/L</h3>
              <p>Centrel College - Piliyandala - 2022</p>
              <p>Index Number - 2252856</p>
            </div>
            <div className="education-item">
              <h3>O/L</h3>
              <p>Centrel College - Piliyandala - 2019</p>
              <p>Index Number - 90474082</p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section 
        className="skills"
        variants={itemVariants}
      >
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <motion.div 
            className="skill-card"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="skill-icon">
              <CodeIcon fontSize="large" />
            </div>
            <h3>Technical Skills</h3>
            <ul>
              {['React', 'JavaScript', 'HTML/CSS'].map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.2 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="skill-card"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="skill-icon">
              <StorageIcon fontSize="large" />
            </div>
            <h3>Backend</h3>
            <ul>
              {['Node.js', 'Express', 'MongoDB'].map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.6 + index * 0.2 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
        </motion.div>
              <motion.div
            className="skill-card"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
            }}
                transition={{ duration: 0.3 }}
              >
            <div className="skill-icon">
              <BrushIcon fontSize="large" />
            </div>
            <h3>Other Skills</h3>
            <ul>
              {['Programming Skills', 'Creativity', 'User Interface Design', 'Team Collaboration', 'Critical Thinking', 'Leadership'].map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.2 }}
                >
                    {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>

              </motion.div>
  );
};

export default Home; 