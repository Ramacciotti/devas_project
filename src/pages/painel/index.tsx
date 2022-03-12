import React from 'react';
import { Container, Content } from './styles';
import { Panel } from '../../components/panel';

export const Painel: React.FC = () => {
  return (
    <Container>
      <Content>
        <Panel />
      </Content>
    </Container>
  );
};
