// Backend\routes\challenges.js
const express = require('express');
const { getChallenges, submitFlag } = require('../controllers/challengeController'); // Correctly importing the methods
const { authenticate } = require('../middleware/authMiddleware'); // Correctly importing the auth middleware
const router = express.Router();

// Ensure these handlers exist in the controller file
router.get('/', getChallenges); // Route to get challenges
router.post('/submit-flag', authenticate, submitFlag); // Route to submit flag for a challenge

module.exports = router;