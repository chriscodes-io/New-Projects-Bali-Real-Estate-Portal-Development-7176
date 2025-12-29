import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Hardened Token Management Abstraction
  const getStoredAuth = () => {
    try {
      const token = localStorage.getItem('authToken');
      const role = localStorage.getItem('userRole');
      if (token && role) {
        // In a real app, we would verify the token with the backend here
        return { token, role };
      }
    } catch (e) {
      console.error("Auth storage access failed:", e);
    }
    return null;
  };

  useEffect(() => {
    const auth = getStoredAuth();
    if (auth) {
      setIsAuthenticated(true);
      setUserRole(auth.role);
    }
    setIsLoading(false);
  }, []);

  const login = useCallback((role) => {
    setIsAuthenticated(true);
    setUserRole(role);
    // Use a unified storage prefix for better management
    localStorage.setItem('authToken', `bp_${btoa(role + Date.now())}`); // Simulated secure-ish token
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
    isLoading,
    login,
    logout
  };

  if (isLoading) {
    return null; // Or a minimal loader to prevent flash of unauth state
  }

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