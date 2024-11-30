// src/components/ChallengeCard.jsx
import React from 'react';

const ChallengeCard = ({ challenge, onSubmitFlag }) => {
  return (
    <div className="challenge-card">
      <h3>{challenge.name}</h3>
      <p>{challenge.description}</p>
      <p>Points: {challenge.points}</p>
      <button onClick={() => onSubmitFlag(challenge._id)}>Submit Flag</button>
    </div>
  );
};

export default ChallengeCard;
