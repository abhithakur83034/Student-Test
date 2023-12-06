const mongoose = require('mongoose');
const recordmigration = require('../migration/recordmigration.json');
const Recordmigration = new mongoose.Schema(recordmigration);
module.exports = mongoose.model('Record',Recordmigration);