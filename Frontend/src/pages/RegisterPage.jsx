// src/pages/RegisterPage.jsx
import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
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
        navigate('/login');
      } else {
        alert(data.error || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Error registering:', error);
      alert('Failed to register. Please try again later.');
    }
  };

  return (
    <div className="register-page">
      <h1>Create a New Account</h1>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
};

export default RegisterPage;
