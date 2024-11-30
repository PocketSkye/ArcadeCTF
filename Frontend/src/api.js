// src/api/api.js
const API_URL = import.meta.env.VITE_API_URL; // Base URL from .env file

// Helper function to handle the Authorization Header
const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Register user
export const registerUser = async (username, password) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Something went wrong!');
  return data;
};

// Login user
export const loginUser = async (username, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Something went wrong!');
  return data;
};

// Get all challenges
export const getChallenges = async (token) => {
  const response = await fetch(`${API_URL}/challenges`, {
    headers: {
      ...getAuthHeaders(),
    },
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Failed to fetch challenges');
  return data;
};

// Get challenge details by ID
export const getChallengeById = async (id) => {
  const response = await fetch(`${API_URL}/challenges/${id}`, {
    headers: {
      ...getAuthHeaders(),
    },
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Failed to fetch challenge');
  return data;
};

// Submit flag for a challenge
export const submitFlag = async (challengeId, flag) => {
  const response = await fetch(`${API_URL}/challenges/${challengeId}/submitFlag`, {
    method: 'POST',
    body: JSON.stringify({ flag }),
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Failed to submit flag');
  return data;
};

// Get user data (for dashboard)
export const getUserData = async (token) => {
  const response = await fetch(`${API_URL}/users/me`, {
    headers: {
      ...getAuthHeaders(),
    },
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Failed to fetch user data');
  return data;
};
