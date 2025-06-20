const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Or generate unique filenames
  }
});

const upload = multer({ storage });

router.post('/generate-music', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image uploaded' });
  }

  // ✅ Respond with correct relative URL to the audio file
  //res.json({ musicUrl: 'uploads/sample-music.mp3' });
  res.json({ musicUrl: 'http://localhost:5000/uploads/sample-music.mp3' });

});

module.exports = router;
