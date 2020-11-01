import React from 'react';
import AuthTamplate from '../components/auth/AuthTamplate';
import RegisterForm from '../components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthTamplate>
      <RegisterForm />
    </AuthTamplate>
  );
};

export default RegisterPage;
