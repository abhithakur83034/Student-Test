const mongoose = require('mongoose');
const addVideomigration = require('../migration/addVideomigration.json');
const AddVideomigration = new mongoose.Schema(addVideomigration);
module.exports = mongoose.model('Video',AddVideomigration);