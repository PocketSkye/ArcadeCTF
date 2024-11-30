// src/pages/ChallengeDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChallengeDetail from '../components/ChallengeDetail';
import { getChallengeById } from '../api';

const ChallengeDetailPage = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    const fetchChallengeDetail = async () => {
      try {
        const data = await getChallengeById(id);
        setChallenge(data);
      } catch (error) {
        console.error('Error fetching challenge:', error);
      }
    };

    fetchChallengeDetail();
  }, [id]);

  const handleSubmitFlag = async (challengeId) => {
    const flag = prompt('Enter the flag for this challenge:');
    if (flag) {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/challenges/${challengeId}/submitFlag`, {
        method: 'POST',
        body: JSON.stringify({ flag }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });

      const data = await response.json();
      alert(data.message || data.error);
    }
  };

  return (
    <div className="challenge-detail-page">
      {challenge ? (
        <ChallengeDetail challenge={challenge} onSubmitFlag={handleSubmitFlag} />
      ) : (
        <p>Loading challenge details...</p>
      )}
    </div>
  );
};

export default ChallengeDetailPage;
