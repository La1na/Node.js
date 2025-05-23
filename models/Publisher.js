const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
  name: String,
  location: String,
});

module.exports = mongoose.model('Publisher', publisherSchema);
