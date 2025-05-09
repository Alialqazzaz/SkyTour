import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {

    const storedUser = localStorage.getItem('userName');
    if (storedUser) {
      setIsLoggedIn(true);
      setUserName(storedUser);
    }
  }, []);

  const login = (email) => {
    const name = email.split('@')[0];
    setIsLoggedIn(true);
    setUserName(name);
    localStorage.setItem('userName', name);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName('');
    localStorage.removeItem('userName');
  };

  const value = { isLoggedIn, login, logout, userName };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
