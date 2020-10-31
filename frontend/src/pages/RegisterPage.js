import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTamplate from '../components/auth/AuthTamplate';

const RegisterPage = () => {
  return (
    <AuthTamplate>
      <AuthForm type='register'/>
    </AuthTamplate>
  );
};

export default RegisterPage;
