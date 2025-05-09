import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessMessage(`Account created for ${formData.name || formData.email}`);
    setTimeout(() => {
      navigate('/signin');
    }, 2000);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <label>
          Full Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </label>

        <button type="submit" className="confirm-button">Create Account</button>

        {successMessage && <p className="success-message">{successMessage}</p>}

        <p className="switch-text">
          Already have an account?{' '}
          <span className="link-text" onClick={() => navigate('/signin')}>
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
