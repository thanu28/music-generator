const path = require('path');

const generateMusic = (req, res) => {
  try {
    // send sample-music path relative to static folder
    res.json({ musicUrl: 'http://localhost:5000/uploads/sample-music.mp3' });
  } catch (error) {
    console.error('Music generation failed:', error);
    res.status(500).json({ error: 'Music generation failed' });
  }
};

module.exports = { generateMusic };
