// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem('token') || '',
  });

  const setAuth = (token) => {
    setAuthState({ token });
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setAuthState({ token: '' });
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ authState, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
