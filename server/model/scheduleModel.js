const mongoose = require('mongoose');
const scheduleMigration = require('../migration/scheduleMigration.json');
const ScheduleMigration = new mongoose.Schema(scheduleMigration);
module.exports = mongoose.model('Schedule',ScheduleMigration);