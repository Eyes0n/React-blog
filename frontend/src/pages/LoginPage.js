import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTamplate from '../components/auth/AuthTamplate';

const LoginPage = () => {
  return (
    <AuthTamplate>
      <AuthForm type='login' />
    </AuthTamplate>
  );
};

export default LoginPage;
