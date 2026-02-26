import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // הגדרנו ל-false כדי לא להיתקע במסך טעינה
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
  
  const [authError, setAuthError] = useState(null);
  const [appPublicSettings, setAppPublicSettings] = useState(null);

  useEffect(() => {
    checkAppState();
  }, []);

  const checkAppState = async () => {
    // כאן תוכל בעתיד להכניס לוגיקה שלך לבדיקת משתמש מול השרת החדש שלך
    setIsLoadingPublicSettings(false);
    setIsLoadingAuth(false);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    console.log("User logged out");
  };

  const navigateToLogin = () => {
    console.log("Redirect to login triggered");
    // window.location.href = '/login'; // דוגמה לעתיד
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      logout,
      navigateToLogin,
      checkAppState
    }}>
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
