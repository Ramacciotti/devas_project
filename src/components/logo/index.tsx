import React from 'react';
import { Container, Image } from './styles';
import oficialLogo from '../../assets/Logo.svg';

export const Logo: React.FC = () => {
  return (
    <Container>
      <Image src={oficialLogo} alt="Logo Devas" />
    </Container>
  );
};
