const mongoose = require('mongoose');
const addBlogMigration = require('../migration/addBlogMigration.json');
const AddBlogMigration = new mongoose.Schema(addBlogMigration);
module.exports = mongoose.model('Blog',AddBlogMigration);