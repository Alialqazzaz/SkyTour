import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthenticationContext';
import HeroImage from '../components/HeroImage';
import '../App.css';

function SignInForm() {
  const { isLoggedIn, login, logout, userName } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [justLoggedIn, setJustLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
    setJustLoggedIn(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        {isLoggedIn && justLoggedIn ? (
          <p className="welcome-form">Welcome, {userName}! Redirecting...</p>
        ) : isLoggedIn ? (
          <>
            <p className="welcome-form">Welcome, {userName}!</p>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="confirm-button">Login</button>
          </form>
        )}
      </div>
    </div>
  );
}

function SignIn() {
  return (
    <div>
      <HeroImage />
      <h1 className="login-text">Sign In Here</h1>
        <SignInForm />
    </div>
  );
}

export default SignIn;
