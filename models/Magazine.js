const mongoose = require('mongoose');

const magazineSchema = new mongoose.Schema({
  title: String,
  issueNumber: Number,
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publisher',
  },
});

module.exports = mongoose.model('Magazine', magazineSchema);
