const express = require('express');
const scheduleController = require('../controller/scheduleController');

const router = express.Router();


router.post('/setschedule',scheduleController.setSchedule)
router.get('/getschedule',scheduleController.getSchedule)

module.exports= router