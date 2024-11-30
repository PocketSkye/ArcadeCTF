// src/components/ChallengeList.jsx
import React from 'react';
import ChallengeCard from './ChallengeCard';

const ChallengeList = ({ challenges, onSubmitFlag }) => {
  return (
    <div className="challenge-list">
      {challenges.map((challenge) => (
        <ChallengeCard key={challenge._id} challenge={challenge} onSubmitFlag={onSubmitFlag} />
      ))}
    </div>
  );
};

export default ChallengeList;
