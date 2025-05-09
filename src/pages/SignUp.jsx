import React from 'react';
import RegisterForm from '../components/RegisterForm';
import HeroImage from '../components/HeroImage';

function SignUp() {
  return (
    <div>
      <HeroImage />
      <h1 className="login-text">Sign Up Here</h1>
      <RegisterForm />
    </div>
  );
}

export default SignUp;
