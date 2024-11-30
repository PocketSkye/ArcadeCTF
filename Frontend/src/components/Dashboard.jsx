// src/pages/DashboardPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import { getUserData } from '../api';

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData(localStorage.getItem('authToken'));
        setUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        alert('Please log in first.');
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div className="dashboard-page">
      {user ? (
        <Dashboard user={user} />
      ) : (
        <p>Loading your dashboard...</p>
      )}
    </div>
  );
};

export default DashboardPage;
