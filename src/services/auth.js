// src/services/auth.js
import api from './api';

export const login = async (username, password) => {
  const response = await api.post('/api/login', { username, password });
  localStorage.setItem('token', response.data.token);
  return response.data;
};
