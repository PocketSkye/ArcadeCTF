// src/pages/Home.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

const Home = ({ setAuthToken }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (username, password) => {
    // Call API to register
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registration successful! You can now login.');
        setIsRegistering(false);
      } else {
        alert(data.error || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Error registering:', error);
      alert('Failed to register. Please try again later.');
    }
  };

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
        setAuthToken(data.token);
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
    <div className="home">
      <h1>Welcome to the CTF Platform</h1>
      {isRegistering ? (
        <RegisterForm onRegister={handleRegister} />
      ) : (
        <>
          <LoginForm onLogin={handleLogin} />
          <button onClick={() => setIsRegistering(true)}>Don't have an account? Register</button>
        </>
      )}
    </div>
  );
};

export default Home;
