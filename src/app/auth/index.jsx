import React from 'react';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import AuthLayOut from '@/components/layout/auth.layout.jsx';

const SignInPage = () => {
  return (
    <AuthLayOut
      title="Welcome Back"
      description="Please enter your details to Sign in"
    >
      <SignIn />
    </AuthLayOut>
  );
};

const SignUpPage = () => {
  return (
    <AuthLayOut
      title="Create Account"
      description="Please fill the form to Sign up"
    >
      <SignUp />
    </AuthLayOut>
  );
};

export { SignInPage, SignUpPage };
