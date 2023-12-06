const mongoose = require('mongoose');
const userMigration = require('../migration/userMigration.json');
const UserMigratinon = new mongoose.Schema(userMigration);
module.exports = mongoose.model('user',UserMigratinon);