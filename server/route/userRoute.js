const express = require('express');
const userController = require('../controller/userController');
const path = require('path')


const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
  
  const fileFilter = function (req, file, cb) {
    if (
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 10,
    },
    fileFilter: fileFilter,
  });

const router = express.Router();


router.post('/register',upload.single('image'),userController.userRegister)
router.post('/login',userController.userLogin)
router.get('/registereduser',userController.registeredUser)
router.put('/update/:id',upload.single('image'),userController.updateUserPut)

module.exports= router