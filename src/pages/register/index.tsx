import React, { useEffect, useState, useContext } from 'react';
import { Container, Content } from './styles';
import { SignUp } from '../../components/signUp';

export const Register: React.FC = () => {
  return (
    <Container>
      <Content>
        <SignUp />
      </Content>
    </Container>
  );
};
