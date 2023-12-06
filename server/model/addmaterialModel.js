const mongoose = require('mongoose');
const addMaterialmigration = require('../migration/addMaterialmigration.json');
const AddMaterialmigration = new mongoose.Schema(addMaterialmigration);
module.exports = mongoose.model('Test-Material',AddMaterialmigration);