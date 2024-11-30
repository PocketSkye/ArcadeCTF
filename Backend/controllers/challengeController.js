// controllers/challengeController.js
const Challenge = require('../models/Challenge');
const User = require('../models/User');

// Get all challenges
exports.getChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Submit flag for a challenge and award points
exports.submitFlag = async (req, res) => {
  const { challengeId, flag } = req.body;  // Extract challengeId and flag from request body
  const { userId } = req;  // Get userId from request object (set by authMiddleware)

  try {
    const challenge = await Challenge.findById(challengeId);  // Find the challenge in the database
    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }

    if (challenge.flag !== flag) {  // Check if the flag is correct
      return res.status(400).json({ error: 'Incorrect flag' });
    }

    // Award points to the user
    const user = await User.findById(userId);  // Find user in the database
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.points += challenge.points;  // Add points to the user
    user.solvedChallenges.push(challenge._id);  // Add challenge to solvedChallenges
    await user.save();  // Save the updated user

    res.json({ message: 'Flag correct! Points awarded.' });
  } catch (err) {
    res.status(400).json({ error: err.message });  // Handle errors
  }
};
