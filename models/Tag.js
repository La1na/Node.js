const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  name: String,
  articles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
  }],
});

module.exports = mongoose.model('Tag', tagSchema);
