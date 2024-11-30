//Backend\middleware\authMiddleware.js

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');  // Extract token from headers

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });  // Return error if no token is provided
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify the JWT
    req.userId = decoded.userId;  // Save userId from the token in the request object
    next();  // Proceed to the next middleware (or the route handler)
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });  // Handle invalid or expired token
  }
};

module.exports = authMiddleware;
