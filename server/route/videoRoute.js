const express = require('express');
const addVideoController = require('../controller/addVideoController');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = function (req, file, cb) {
  const allowedMimeTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'video/mp3',   
    'video/mp4',   
    'application/pdf'  
  ];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 1000, 
  },
  fileFilter: fileFilter,
});

router.post('/addvideo', upload.single("video"), addVideoController.video);
router.get('/showvideo',addVideoController.show);


module.exports = router;
