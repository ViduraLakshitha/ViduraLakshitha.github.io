const express = require('express');
const router = express.Router();

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    // Here you would typically save to database
    res.status(200).json({ message: 'Message received!' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending message' });
  }
});

module.exports = router; 