const express = require('express');
const blogController = require('../controller/blogController');
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

router.post('/addblog', upload.single("image"),blogController.blog);
router.get('/showblog',blogController.show);


module.exports = router;
