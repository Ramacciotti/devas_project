import React from 'react';
import { SignIn } from '../../components/signIn';
import { Container } from './styles';

export const Login: React.FC = () => {
  return (
    <Container>
      <SignIn />
    </Container>
  );
};
