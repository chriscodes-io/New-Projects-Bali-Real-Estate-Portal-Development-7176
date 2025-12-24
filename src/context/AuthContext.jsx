import React, { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const login = useCallback((role) => {
    setIsAuthenticated(true);
    setUserRole(role);
    localStorage.setItem('authToken', `token_${role}`);
    localStorage.setItem('userRole', role);
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setUserRole(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
  }, []);

  const value = {
    isAuthenticated,
    userRole,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;