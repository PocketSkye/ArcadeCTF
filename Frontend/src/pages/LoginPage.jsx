// src/pages/LoginPage.jsx
import React from 'react';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (username, password) => {
    // Call API to login
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('authToken', data.token);
        navigate('/challenges');
      } else {
        alert(data.error || 'Login failed!');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Failed to login. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <h1>Login to Your Account</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
