// src/components/ChallengeDetail.jsx
import React from 'react';

const ChallengeDetail = ({ challenge, onSubmitFlag }) => {
  return (
    <div className="challenge-detail">
      <h2>{challenge.name}</h2>
      <p>{challenge.description}</p>
      <p>Points: {challenge.points}</p>
      <div>
        {challenge.files.map((file, index) => (
          <a href={file.fileUrl} key={index} download>
            {file.filename}
          </a>
        ))}
      </div>
      <button onClick={() => onSubmitFlag(challenge._id)}>Submit Flag</button>
    </div>
  );
};

export default ChallengeDetail;
