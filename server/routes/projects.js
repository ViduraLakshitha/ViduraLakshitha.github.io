const express = require('express');
const router = express.Router();

// GET /api/projects
router.get('/', async (req, res) => {
  try {
    // Sample projects data
    const projects = [
      {
        id: 1,
        title: 'Project 1',
        description: 'Description of project 1',
        technologies: ['React', 'Node.js'],
        image: 'project1.jpg'
      },
      {
        id: 2,
        title: 'Project 2',
        description: 'Description of project 2',
        technologies: ['React', 'Express'],
        image: 'project2.jpg'
      }
    ];
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
});

module.exports = router; 