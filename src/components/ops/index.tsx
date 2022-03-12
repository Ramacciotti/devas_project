import React from 'react';
import { Container, Content } from './styles';

export const Ops: React.FC = () => {
  return (
    <Container>
      <Content>
        <h2>Painel</h2>
        <p>Você precisa estar logado para visualizar esta página.</p>
      </Content>
    </Container>
  );
};
