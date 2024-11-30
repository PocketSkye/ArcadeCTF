//Backend\server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const challengeRoutes = require('./routes/challenges');


dotenv.config();

const app = express();

// Middleware
app.use(express.json());  // For parsing JSON bodies
app.use(cors());  // Enable Cross-Origin Resource Sharing

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/challenges', challengeRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
