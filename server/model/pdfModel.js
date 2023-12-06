const mongoose = require('mongoose');
const pdfmigration = require('../migration/pdfmigration.json');
const Pdfmigration = new mongoose.Schema(pdfmigration);
module.exports = mongoose.model('pdf',Pdfmigration);