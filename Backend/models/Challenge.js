const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // Ensure that the name is always provided
  },
  description: {
    type: String,
    required: true,  // Ensure that the description is always provided
  },
  difficulty: {
    type: String,  // Can be 'Easy', 'Medium', 'Hard'
    enum: ['Easy', 'Medium', 'Hard'],  // Restrict to these values
    required: true,
  },
  flag: {
    type: String,
    required: true,  // The correct flag that users need to submit
  },
  points: {
    type: Number,
    required: true,  // Points awarded for solving the challenge
  },
  files: [{
    filename: {
      type: String,
      required: true,  // File name
    },
    fileUrl: {
      type: String,
      required: true,  // URL where the file can be downloaded
    }
  }],
});

module.exports = mongoose.model('Challenge', challengeSchema);
