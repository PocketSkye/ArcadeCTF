// src/pages/ChallengesPage.jsx
import React, { useEffect, useState } from 'react';
import ChallengeList from '../components/ChallengeList';
import { useNavigate } from 'react-router-dom';
import { getChallenges } from '../api';

const ChallengesPage = () => {
  const [challenges, setChallenges] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await getChallenges(localStorage.getItem('authToken'));
        setChallenges(response);
      } catch (error) {
        console.error('Error fetching challenges:', error);
      }
    };

    fetchChallenges();
  }, []);

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
    <div className="challenges-page">
      <h1>Challenges</h1>
      <ChallengeList challenges={challenges} onSubmitFlag={handleSubmitFlag} />
    </div>
  );
};

export default ChallengesPage;
