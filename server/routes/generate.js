// server/routes/generate.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Image upload setup
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// POST route to handle image + mood prompt
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const imageFile = req.file;
    const prompt = req.body.prompt || '';

    // Here you can call your model logic
    // Example dummy response:
    return res.json({
      message: 'Music generated successfully!',
      musicUrl: 'http://localhost:5000/uploads/sample-music.mp3'
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
});

module.exports = router;
