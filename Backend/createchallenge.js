const Challenge = require('../models/Challenge');

// Example of creating a new challenge
const createChallenge = async () => {
  const challenge = new Challenge({
    name: 'SQL Injection Challenge',
    description: 'Find and exploit the SQL injection vulnerability.',
    difficulty: 'Medium',
    flag: 'SQL_injection_flag_123',
    points: 100,
    files: [
      {
        filename: 'sql_injection_example.sql',
        fileUrl: 'https://example.com/files/sql_injection_example.sql',
      },
    ],
  });

  await challenge.save();
  console.log('Challenge created:', challenge);
};

createChallenge();
