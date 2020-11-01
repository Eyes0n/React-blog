import React from 'react';
import AuthTamplate from '../components/auth/AuthTamplate';
import LoginForm from '../containers/auth/LoginForm';

const LoginPage = () => {
  return (
    <AuthTamplate>
      <LoginForm />
    </AuthTamplate>
  );
};

export default LoginPage;
