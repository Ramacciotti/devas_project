import React from 'react';
import { Container } from './styles';
import { CreatePost } from '../../components/createPost';

export const Painel: React.FC = () => {
  return (
    <Container>
      <h1>Painel</h1>
      <CreatePost />
    </Container>
  );
};
